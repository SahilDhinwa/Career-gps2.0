
import "server-only";

import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  FieldValue,
  type DocumentSnapshot,
} from "firebase-admin/firestore";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../../../lib/auth/admin";

import { getAdminDb } from "../../../../../../lib/firebase-admin";

import {
  CMS_AUDIT_COLLECTION,
  CMS_COLLECTIONS,
  CMS_SUBMISSIONS_COLLECTION,
  isCMSDocumentId,
  isCMSKind,
  validateCMSContent,
} from "../../../../../../lib/cms/validation";

import { requireCMSReviewer } from "../../../../../../lib/auth/cms-reviewer";

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

function checkOrigin(request: NextRequest) {
  return (
    request.headers.get("origin") ===
    request.nextUrl.origin
  );
}

async function parseBody(request: NextRequest) {
  const contentType = request.headers
    .get("content-type")
    ?.toLowerCase();

  if (
    !contentType?.startsWith("application/json")
  ) {
    return {
      error: "JSON required.",
      status: 415,
    } as const;
  }

  const length = request.headers.get(
    "content-length"
  );

  if (length && Number(length) > 2048) {
    return {
      error: "Request too large.",
      status: 413,
    } as const;
  }

  const raw = await request.text();

  if (
    new TextEncoder().encode(raw).length > 2048
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
  return snapshot.updateTime
    ? snapshot.updateTime.toDate().toISOString()
    : null;
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
const admin = await requireAdmin();

    if (
  data.action === "approve" ||
  data.action === "reject"
) {
  await requireCMSReviewer();
    }
    
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

        const validated = validateCMSContent(
          submission.content,
          submission.kind
        );

        if (!validated.success) {
          return {
            httpStatus: 409,
            error: validated.error,
          };
        }

        if (action === "submit") {
          if (submission.status !== "draft") {
            return {
              httpStatus: 409,
              error:
                "Only drafts can be submitted for review.",
            };
          }

          transaction.update(submissionRef, {
            status: "review",
            updatedAt: FieldValue.serverTimestamp(),
          });

          transaction.create(auditRef, {
            action: "cms_review_requested",
            actorUid: admin.uid,
            submissionId: id,
            createdAt: FieldValue.serverTimestamp(),
          });

          return {
            httpStatus: 200,
            success: true,
            submissionStatus: "review",
            message: "Submitted for review.",
          };
        }

        if (submission.status !== "review") {
          return {
            httpStatus: 409,
            error:
              "Only pending submissions can be reviewed.",
          };
        }

        if (action === "reject") {
          if (submission.submittedBy === admin.uid) {
            return {
              httpStatus: 403,
              error:
                "You cannot review your own submission.",
            };
          }

          transaction.update(submissionRef, {
            status: "rejected",
            reviewNote,
            reviewedBy: admin.uid,
            reviewedAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          });

          transaction.create(auditRef, {
            action: "cms_submission_rejected",
            actorUid: admin.uid,
            submissionId: id,
            reviewNote,
            createdAt: FieldValue.serverTimestamp(),
          });

          return {
            httpStatus: 200,
            success: true,
            submissionStatus: "rejected",
            message: "Submission rejected.",
          };
        }

        // APPROVE

        if (submission.submittedBy === admin.uid) {
          return {
            httpStatus: 403,
            error:
              "You cannot approve your own submission.",
          };
        }

        const kind = submission.kind;
        const operation = submission.operation;

        if (
          operation !== "create" &&
          operation !== "update"
        ) {
          return {
            httpStatus: 409,
            error: "Invalid submission operation.",
          };
        }

        const collectionName =
          CMS_COLLECTIONS[kind];

        let targetId: string;

        if (operation === "update") {
          if (
            !isCMSDocumentId(submission.targetId)
          ) {
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

        if (operation === "update") {
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
                "Published content changed. Submit a fresh revision.",
            };
          }
        }

        const now = FieldValue.serverTimestamp();

        if (operation === "create") {
          transaction.create(targetRef, {
            ...validated.content,
            status: "published",
            createdAt: now,
            updatedAt: now,
            publishedAt: now,
            publishedBy: admin.uid,
          });
        } else {
          transaction.update(targetRef, {
            ...validated.content,
            status: "published",
            updatedAt: now,
            publishedAt: now,
            publishedBy: admin.uid,
          });
        }

        transaction.update(submissionRef, {
          status: "approved",
          targetId,
          reviewedBy: admin.uid,
          reviewedAt: now,
          updatedAt: now,
        });

        transaction.create(auditRef, {
          action: "cms_submission_approved",
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
          publishedId: targetId,
          message:
            "Content approved and published.",
        };
      }
    );

    const { httpStatus, ...body } = result;

    return respond(body, httpStatus);
  } catch (error) {
    return handleError(error);
  }
}
