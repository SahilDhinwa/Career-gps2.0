
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

import {
  getCMSReviewLockRef,
  createCMSReviewLock,
} from "../../../../../../lib/cms/review-lock";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = {
  params: Promise<{ id: string }>;
};

type ReviewAction = "submit" | "approve" | "reject";

type SubmissionOperation =
  | "create"
  | "update"
  | "delete";

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

  const length =
    request.headers.get("content-length");

  if (
    length !== null &&
    (!/^\d+$/.test(length) ||
      Number(length) > MAX_BODY_BYTES)
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

function handleError(error: unknown) {
  if (error instanceof AdminAuthError) {
    return respond(
      { error: error.message },
      error.status
    );
  }

  console.error(
    "CMS review action failed:",
    error
  );

  return respond(
    { error: "CMS review action failed." },
    500
  );
}

function isSubmissionOperation(
  value: unknown
): value is SubmissionOperation {
  return (
    value === "create" ||
    value === "update" ||
    value === "delete"
  );
}

// ------------------------------------------
// PATCH: SUBMISSION WORKFLOW
// ------------------------------------------

export async function PATCH(
  request: NextRequest,
  context: Context
) {
  try {
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

    // Reviewer authorization.
    // Only authorized reviewers can approve
    // or reject content.

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

        if (!isSubmissionOperation(operation)) {
          return {
            httpStatus: 409,
            error: "Invalid submission operation.",
          };
        }

        const isTargetOperation =
          operation === "update" ||
          operation === "delete";

        const targetIdForLock =
          isTargetOperation &&
          isCMSDocumentId(submission.targetId)
            ? submission.targetId
            : null;

        if (
          isTargetOperation &&
          !targetIdForLock
        ) {
          return {
            httpStatus: 409,
            error: "Invalid target ID.",
          };
        }

        const lockRef = targetIdForLock
          ? getCMSReviewLockRef(
              db,
              kind,
              targetIdForLock
            )
          : null;

        // Read lock before any transaction writes.
        const lockSnapshot = lockRef
          ? await transaction.get(lockRef)
          : null;

        const lockOwner =
          lockSnapshot?.data()?.submissionId;

        const ownsLock =
          lockSnapshot?.exists === true &&
          lockOwner === id;

        // Another pending request must not
        // be bypassed during approval.

        if (
          lockSnapshot?.exists &&
          !ownsLock &&
          action !== "reject"
        ) {
          return {
            httpStatus: 409,
            error:
              "Another review request owns this content.",
          };
        }

        // Validate publishable content.
        // Deletion requests only retain a snapshot.

        let validatedContent:
          | Record<string, unknown>
          | null = null;

        if (operation !== "delete") {
          const validated =
            validateCMSContent(
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

        // ----------------------------------
        // SUBMIT DRAFT
        // ----------------------------------

        if (action === "submit") {
          if (submission.status !== "draft") {
            return {
              httpStatus: 409,
              error:
                "Only drafts can be submitted for review.",
            };
          }

          if (operation === "delete") {
            return {
              httpStatus: 409,
              error:
                "Deletion drafts are not supported.",
            };
          }

          if (
            submission.submittedBy !== admin.uid
          ) {
            return {
              httpStatus: 403,
              error:
                "You cannot submit another user's draft.",
            };
          }

          if (lockRef && lockSnapshot?.exists) {
            return {
              httpStatus: 409,
              error:
                "Review already pending for this content.",
            };
          }

          // A draft update acquires its lock
          // when submitted for review.

          if (
            lockRef &&
            operation === "update"
          ) {
            createCMSReviewLock(
              transaction,
              lockRef,
              id,
              admin.uid,
              "update"
            );
          }

          const now =
            FieldValue.serverTimestamp();

          transaction.update(submissionRef, {
            status: "review",
            updatedAt: now,
          });

          transaction.create(auditRef, {
            action: "cms_review_requested",
            actorUid: admin.uid,
            submissionId: id,
            kind,
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

        // ----------------------------------
        // REVIEW VALIDATION
        // ----------------------------------

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

        // Independent reviewer required.
        // Authors cannot review their own work.

        if (
          submission.submittedBy === admin.uid
        ) {
          return {
            httpStatus: 403,
            error:
              "You cannot review your own submission.",
          };
        }

        // ----------------------------------
        // REJECT
        // ----------------------------------

        if (action === "reject") {
          const now =
            FieldValue.serverTimestamp();

          // Delete only the lock owned by
          // this specific submission.

          if (lockRef && ownsLock) {
            transaction.delete(lockRef);
          }

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
            kind,
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

        // ----------------------------------
        // APPROVE
        // ----------------------------------

        const collectionName =
          CMS_COLLECTIONS[kind];

        let targetId: string;

        if (isTargetOperation) {
          targetId = targetIdForLock!;
        } else {
          targetId = db
            .collection(collectionName)
            .doc().id;
        }

        const targetRef = db
          .collection(collectionName)
          .doc(targetId);

        // All transaction reads must occur
        // before any transaction writes.

        if (isTargetOperation) {
          const targetSnapshot =
            await transaction.get(targetRef);

          if (!targetSnapshot.exists) {
            return {
              httpStatus: 404,
              error:
                "Target content not found.",
            };
          }

          const updateTime =
            targetSnapshot.updateTime;

          if (
            !updateTime ||
            !matchesCMSVersion(
              updateTime,
              submission.targetVersion
            )
          ) {
            return {
              httpStatus: 409,
              error:
                "Published content changed or the request uses an outdated version format. Submit a fresh review request.",
            };
          }

          if (
            targetSnapshot.data()?.status !==
            "published"
          ) {
            return {
              httpStatus: 409,
              error:
                "Target content is not published.",
            };
          }
        }

        const now =
          FieldValue.serverTimestamp();

        // ----------------------------------
        // CREATE
        // ----------------------------------

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
        }

        // ----------------------------------
        // UPDATE
        // ----------------------------------

        else if (operation === "update") {
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
        }

        // ----------------------------------
        // DELETE
        // ----------------------------------

        else {
          transaction.delete(targetRef);
        }

        // Release the lock after approval.
        // Never delete another request's lock.

        if (lockRef && ownsLock) {
          transaction.delete(lockRef);
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
          kind,
          operation,
          createdAt: now,
        });

        return {
          httpStatus: 200,
          success: true,
          submissionStatus: "approved",
          publishedId:
            operation === "delete"
              ? null
              : targetId,
          deletedId:
            operation === "delete"
              ? targetId
              : null,
          message:
            operation === "delete"
              ? "Deletion approved. Content removed."
              : operation === "update"
                ? "Changes approved and published."
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
