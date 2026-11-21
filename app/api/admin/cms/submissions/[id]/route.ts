
import "server-only";

import {
  NextRequest,
  NextResponse,
} from "next/server";

import { FieldValue } from "firebase-admin/firestore";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../../../lib/auth/admin";

import { requireCMSReviewer } from "../../../../../../lib/auth/cms-reviewer";

import { getAdminDb } from "../../../../../../lib/firebase-admin";

import {
  CMS_AUDIT_COLLECTION,
  CMS_COLLECTIONS,
  CMS_SUBMISSIONS_COLLECTION,
  isCMSDocumentId,
  isCMSKind,
  validateCMSContent,
} from "../../../../../../lib/cms/validation";
import {
  matchesCMSVersion,
} from "../../../../../../lib/cms/version";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = {
  params: Promise<{ id: string }>;
};

type ReviewAction = "submit" | "approve" | "reject";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

const MAX_BODY_BYTES = 2048;

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
}

function isRecord(
  value: unknown
): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
}

function checkOrigin(request: NextRequest): boolean {
  return (
    request.headers.get("origin") ===
    request.nextUrl.origin
  );
}

async function parseBody(request: NextRequest) {
  const contentType = request.headers
    .get("content-type")
    ?.toLowerCase();

  if (!contentType?.startsWith("application/json")) {
    return {
      error: "JSON required.",
      status: 415,
    } as const;
  }

  const length = request.headers.get("content-length");

  if (
    length !== null &&
    Number(length) > MAX_BODY_BYTES
  ) {
    return {
      error: "Request too large.",
      status: 413,
    } as const;
  }

  let raw: string;

  try {
    raw = await request.text();
  } catch {
    return {
      error: "Unable to read request body.",
      status: 400,
    } as const;
  }

  if (
    new TextEncoder().encode(raw).length >
    MAX_BODY_BYTES
  ) {
    return {
      error: "Request too large.",
      status: 413,
    } as const;
  }

  let data: unknown;

  try {
    data = JSON.parse(raw);
  } catch {
    return {
      error: "Invalid JSON.",
      status: 400,
    } as const;
  }

  if (!isRecord(data)) {
    return {
      error: "Invalid request body.",
      status: 400,
    } as const;
  }

  return { data };
}

function versionOf(
  snapshot: DocumentSnapshot
): string | null {
  const timestamp = snapshot.updateTime;

  if (!timestamp) return null;

  // Match the version format currently stored
  // by the CMS PATCH and DELETE endpoints.
  return timestamp.toDate().toISOString();
}

function handleError(error: unknown) {
  if (error instanceof AdminAuthError) {
    return respond(
      { error: error.message },
      error.status
    );
  }

  console.error("CMS review action failed:", error);

  return respond(
    { error: "CMS review action failed." },
    500
  );
}

export async function PATCH(
  request: NextRequest,
  context: Context
) {
  try {
    // Authenticate first.
    const admin = await requireAdmin();

    if (!checkOrigin(request)) {
      return respond(
        { error: "Invalid request origin." },
        403
      );
    }

    const { id } = await context.params;

    if (!isCMSDocumentId(id)) {
      return respond(
        { error: "Invalid submission ID." },
        400
      );
    }

    const parsed = await parseBody(request);

    if ("error" in parsed) {
      return respond(
        { error: parsed.error },
        parsed.status
      );
    }

    const data = parsed.data;

    if (
      data.action !== "submit" &&
      data.action !== "approve" &&
      data.action !== "reject"
    ) {
      return respond(
        { error: "Invalid review action." },
        400
      );
    }

    const action: ReviewAction = data.action;

    const allowed =
      action === "reject"
        ? ["action", "reviewNote"]
        : ["action"];

    if (
      Object.keys(data).some(
        (key) => !allowed.includes(key)
      )
    ) {
      return respond(
        { error: "Unexpected request fields." },
        400
      );
    }

    const reviewNote =
      typeof data.reviewNote === "string"
        ? data.reviewNote.trim()
        : "";

    if (
      action === "reject" &&
      (reviewNote.length < 3 ||
        reviewNote.length > 1000)
    ) {
      return respond(
        {
          error:
            "Rejection reason must contain 3–1000 characters.",
        },
        400
      );
    }

    // Only authorized reviewers can approve/reject.
    // Ordinary administrators may submit drafts.
    if (
      action === "approve" ||
      action === "reject"
    ) {
      const reviewer = await requireCMSReviewer();

      if (reviewer.uid !== admin.uid) {
        return respond(
          { error: "Reviewer identity mismatch." },
          403
        );
      }
    }

    const db = getAdminDb();

    const submissionRef = db
      .collection(CMS_SUBMISSIONS_COLLECTION)
      .doc(id);

    const auditRef = db
      .collection(CMS_AUDIT_COLLECTION)
      .doc();

    const result = await db.runTransaction(
      async (transaction) => {
        const snapshot =
          await transaction.get(submissionRef);

        if (!snapshot.exists) {
          return {
            httpStatus: 404,
            error: "Submission not found.",
          };
        }

        const submission = snapshot.data() ?? {};

        if (
          !isCMSKind(submission.kind) ||
          !isRecord(submission.content)
        ) {
          return {
            httpStatus: 409,
            error: "Invalid stored submission.",
          };
        }

        const kind = submission.kind;
        const operation = submission.operation;

        if (
          operation !== "create" &&
          operation !== "update" &&
          operation !== "delete"
        ) {
          return {
            httpStatus: 409,
            error: "Invalid submission operation.",
          };
        }

        // Deletion submissions contain a snapshot
        // of existing content, not new content to
        // publish. Validate only create/update here.
        let validatedContent:
          | Record<string, unknown>
          | null = null;

        if (operation !== "delete") {
          const validated = validateCMSContent(
            submission.content,
            kind
          );

          if (!validated.success) {
            return {
              httpStatus: 409,
              error: validated.error,
            };
          }

          validatedContent = validated.content;
        }

        // --------------------------------------
        // SUBMIT DRAFT
        // --------------------------------------

        if (action === "submit") {
          if (submission.status !== "draft") {
            return {
              httpStatus: 409,
              error:
                "Only drafts can be submitted for review.",
            };
          }

          // Only the original submitter may submit
          // their draft to the review queue.
          if (submission.submittedBy !== admin.uid) {
            return {
              httpStatus: 403,
              error:
                "You cannot submit another user's draft.",
            };
          }

          const now = FieldValue.serverTimestamp();

          transaction.update(submissionRef, {
            status: "review",
            updatedAt: now,
          });

          transaction.create(auditRef, {
            action: "cms_review_requested",
            actorUid: admin.uid,
            submissionId: id,
            operation,
            createdAt: now,
          });

          return {
            httpStatus: 200,
            success: true,
            submissionStatus: "review",
            message: "Submitted for review.",
          };
        }

        // --------------------------------------
        // REVIEW VALIDATION
        // --------------------------------------

        if (submission.status !== "review") {
          return {
            httpStatus: 409,
            error:
              "Only pending submissions can be reviewed.",
          };
        }

        if (
          typeof submission.submittedBy !== "string" ||
          submission.submittedBy.length === 0
        ) {
          return {
            httpStatus: 409,
            error: "Submission owner is missing.",
          };
        }

        // Separation of duties.
        if (submission.submittedBy === admin.uid) {
          return {
            httpStatus: 403,
            error:
              "You cannot review your own submission.",
          };
        }

        // --------------------------------------
        // REJECT
        // --------------------------------------

        if (action === "reject") {
          const now = FieldValue.serverTimestamp();

          transaction.update(submissionRef, {
            status: "rejected",
            reviewNote,
            reviewedBy: admin.uid,
            reviewedAt: now,
            updatedAt: now,
          });

          transaction.create(auditRef, {
            action: "cms_submission_rejected",
            actorUid: admin.uid,
            submissionId: id,
            operation,
            reviewNote,
            createdAt: now,
          });

          return {
            httpStatus: 200,
            success: true,
            submissionStatus: "rejected",
            message: "Submission rejected.",
          };
        }

        // --------------------------------------
        // APPROVE
        // --------------------------------------

        const collectionName =
          CMS_COLLECTIONS[kind];

        let targetId: string;

        if (
          operation === "update" ||
          operation === "delete"
        ) {
          if (!isCMSDocumentId(submission.targetId)) {
            return {
              httpStatus: 409,
              error: "Invalid target ID.",
            };
          }

          targetId = submission.targetId;
        } else {
          targetId = db
            .collection(collectionName)
            .doc().id;
        }

        const targetRef = db
          .collection(collectionName)
          .doc(targetId);

        // Read target before performing any writes.
        if (
          operation === "update" ||
          operation === "delete"
        ) {
          const targetSnapshot =
            await transaction.get(targetRef);

          if (!targetSnapshot.exists) {
            return {
              httpStatus: 404,
              error: "Target content not found.",
            };
          }

          const expectedVersion =
            submission.targetVersion;

          if (
            typeof expectedVersion !== "string" ||
            expectedVersion !==
              versionOf(targetSnapshot)
          ) {
            return {
              httpStatus: 409,
              error:
                "Published content changed. Submit a fresh review request.",
            };
          }
        }

        const now = FieldValue.serverTimestamp();

        if (operation === "create") {
          if (!validatedContent) {
            return {
              httpStatus: 409,
              error: "Invalid content.",
            };
          }

          transaction.create(targetRef, {
            ...validatedContent,
            status: "published",
            createdAt: now,
            updatedAt: now,
            publishedAt: now,
            publishedBy: admin.uid,
          });
        } else if (operation === "update") {
          if (!validatedContent) {
            return {
              httpStatus: 409,
              error: "Invalid content.",
            };
          }

          transaction.update(targetRef, {
            ...validatedContent,
            status: "published",
            updatedAt: now,
            publishedAt: now,
            publishedBy: admin.uid,
          });
        } else {
          // DELETE: Remove only after reviewer approval.
          transaction.delete(targetRef);
        }

        transaction.update(submissionRef, {
          status: "approved",
          targetId,
          reviewedBy: admin.uid,
          reviewedAt: now,
          updatedAt: now,
        });

        transaction.create(auditRef, {
          action:
            operation === "delete"
              ? "cms_content_deletion_approved"
              : "cms_submission_approved",
          actorUid: admin.uid,
          submissionId: id,
          collection: collectionName,
          documentId: targetId,
          operation,
          createdAt: now,
        });

        return {
          httpStatus: 200,
          success: true,
          submissionStatus: "approved",
          publishedId:
            operation === "delete" ? null : targetId,
          deletedId:
            operation === "delete" ? targetId : null,
          message:
            operation === "delete"
              ? "Deletion approved. Content removed."
              : "Content approved and published.",
        };
      }
    );

    const { httpStatus, ...body } = result;

    return respond(body, httpStatus);
  } catch (error) {
    return handleError(error);
  }
}
