
import "server-only";

import {
  NextRequest,
  NextResponse,
} from "next/server";

import { FieldValue } from "firebase-admin/firestore";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";

import { getAdminDb } from "../../../../lib/firebase-admin";

import {
  CMS_AUDIT_COLLECTION,
  CMS_COLLECTIONS,
  CMS_SUBMISSIONS_COLLECTION,
  allowedCMSFields,
  hasOnlyCMSFields,
  isBamsProf,
  isCMSDocumentId,
  isCMSDocumentType,
  isCMSKind,
  validateCMSContent,
  type CMSKind,
} from "../../../../lib/cms/validation";

import {
  encodeCMSVersion,
} from "../../../../lib/cms/version";

import {
  getCMSReviewLockRef,
  createCMSReviewLock,
} from "../../../../lib/cms/review-lock";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

const MAX_BODY_BYTES = 4096;

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
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

  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data)
  ) {
    return {
      error: "Invalid request body.",
      status: 400,
    } as const;
  }

  return {
    data: data as Record<string, unknown>,
  };
}

function handleError(
  error: unknown,
  operation: string
) {
  if (error instanceof AdminAuthError) {
    return respond(
      { error: error.message },
      error.status
    );
  }

  console.error(
    `Admin CMS ${operation} failed:`,
    error
  );

  return respond(
    { error: `CMS ${operation} failed.` },
    500
  );
}

function dateToISO(value: unknown): string | null {
  if (
    value &&
    typeof value === "object" &&
    "toDate" in value &&
    typeof value.toDate === "function"
  ) {
    const date = value.toDate();

    return date instanceof Date &&
      !Number.isNaN(date.getTime())
      ? date.toISOString()
      : null;
  }

  return null;
}

// ------------------------------------------
// GET: PUBLISHED CONTENT LIBRARY
// ------------------------------------------

export async function GET() {
  try {
    await requireAdmin();

    const db = getAdminDb();

    const [videos, documents] = await Promise.all([
      db
        .collection(CMS_COLLECTIONS.video)
        .orderBy("createdAt", "desc")
        .limit(50)
        .get(),

      db
        .collection(CMS_COLLECTIONS.document)
        .orderBy("createdAt", "desc")
        .limit(50)
        .get(),
    ]);

    const serialize = (
      snapshot: typeof videos,
      kind: CMSKind
    ) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          kind,
          title:
            typeof data.title === "string"
              ? data.title
              : "",
          url:
            typeof data.url === "string"
              ? data.url
              : "",
          prof:
            kind === "video" &&
            isBamsProf(data.prof)
              ? data.prof
              : null,
          type:
            kind === "document" &&
            isCMSDocumentType(data.type)
              ? data.type
              : null,
          createdAt: dateToISO(data.createdAt),
          updatedAt: dateToISO(data.updatedAt),
        };
      });
    };

    return respond({
      success: true,
      videos: serialize(videos, "video"),
      documents: serialize(documents, "document"),
      limitPerCollection: 50,
    });
  } catch (error) {
    return handleError(error, "listing");
  }
}

// ------------------------------------------
// POST: DIRECT PUBLISHING DISABLED
// ------------------------------------------

export async function POST() {
  try {
    await requireAdmin();

    return respond(
      {
        success: false,
        error:
          "Direct publishing is disabled. Submit content through /api/admin/cms/submissions for review.",
      },
      403
    );
  } catch (error) {
    return handleError(error, "publishing");
  }
}

// ------------------------------------------
// PATCH: SUBMIT EDIT FOR REVIEW
// ------------------------------------------

export async function PATCH(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    if (!checkOrigin(request)) {
      return respond(
        { error: "Invalid request origin." },
        403
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
      !isCMSKind(data.kind) ||
      !isCMSDocumentId(data.id)
    ) {
      return respond(
        { error: "Invalid content identifier." },
        400
      );
    }

    const kind = data.kind;
    const id = data.id;

    if (
      !hasOnlyCMSFields(
        data,
        allowedCMSFields(kind, "update")
      )
    ) {
      return respond(
        { error: "Unexpected content fields." },
        400
      );
    }

    const validated = validateCMSContent(
      data,
      kind
    );

    if (!validated.success) {
      return respond(
        { error: validated.error },
        400
      );
    }

    const db = getAdminDb();
    const collectionName = CMS_COLLECTIONS[kind];

    const contentRef = db
      .collection(collectionName)
      .doc(id);

    const lockRef = getCMSReviewLockRef(
      db,
      kind,
      id
    );

    const submissionRef = db
      .collection(CMS_SUBMISSIONS_COLLECTION)
      .doc();

    const auditRef = db
      .collection(CMS_AUDIT_COLLECTION)
      .doc();

    const outcome = await db.runTransaction(
      async (transaction) => {
        const [existing, lock] =
          await Promise.all([
            transaction.get(contentRef),
            transaction.get(lockRef),
          ]);

        if (!existing.exists) {
          return {
            httpStatus: 404,
            error: "Content not found.",
          };
        }

        if (lock.exists) {
          return {
            httpStatus: 409,
            error:
              "Review already pending for this content.",
          };
        }

        if (
          existing.data()?.status !== "published"
        ) {
          return {
            httpStatus: 409,
            error:
              "Target content is not published.",
          };
        }

        if (!existing.updateTime) {
          return {
            httpStatus: 409,
            error:
              "Content version unavailable.",
          };
        }

        const now = FieldValue.serverTimestamp();

        transaction.create(submissionRef, {
          kind,
          operation: "update",
          targetId: id,
          targetVersion:
            encodeCMSVersion(existing.updateTime),
          status: "review",
          content: validated.content,
          submittedBy: admin.uid,
          reviewedBy: null,
          reviewNote: null,
          createdAt: now,
          updatedAt: now,
        });

        createCMSReviewLock(
          transaction,
          lockRef,
          submissionRef.id,
          admin.uid,
          "update"
        );

        transaction.create(auditRef, {
          action: "cms_review_requested",
          actorUid: admin.uid,
          collection: collectionName,
          documentId: id,
          submissionId: submissionRef.id,
          createdAt: now,
        });

        return {
          httpStatus: 200,
          success: true,
          id,
          submissionId: submissionRef.id,
          status: "review",
          message:
            "Changes submitted for review.",
        };
      }
    );

    const { httpStatus, ...body } = outcome;

    return respond(body, httpStatus);
  } catch (error) {
    return handleError(
      error,
      "submitting changes"
    );
  }
}

// ------------------------------------------
// DELETE: SUBMIT REMOVAL FOR REVIEW
// ------------------------------------------

export async function DELETE(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    if (!checkOrigin(request)) {
      return respond(
        { error: "Invalid request origin." },
        403
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
      !isCMSKind(data.kind) ||
      !isCMSDocumentId(data.id) ||
      !hasOnlyCMSFields(
        data,
        ["id", "kind"]
      )
    ) {
      return respond(
        { error: "Invalid deletion request." },
        400
      );
    }

    const kind = data.kind;
    const id = data.id;

    const collectionName =
      CMS_COLLECTIONS[kind];

    const db = getAdminDb();

    const contentRef = db
      .collection(collectionName)
      .doc(id);

    const lockRef = getCMSReviewLockRef(
      db,
      kind,
      id
    );

    const submissionRef = db
      .collection(CMS_SUBMISSIONS_COLLECTION)
      .doc();

    const auditRef = db
      .collection(CMS_AUDIT_COLLECTION)
      .doc();

    const outcome = await db.runTransaction(
      async (transaction) => {
        const [existing, lock] =
          await Promise.all([
            transaction.get(contentRef),
            transaction.get(lockRef),
          ]);

        if (!existing.exists) {
          return {
            httpStatus: 404,
            error: "Content not found.",
          };
        }

        if (lock.exists) {
          return {
            httpStatus: 409,
            error:
              "Review already pending for this content.",
          };
        }

        const previous = existing.data() ?? {};

        if (previous.status !== "published") {
          return {
            httpStatus: 409,
            error:
              "Target content is not published.",
          };
        }

        if (!existing.updateTime) {
          return {
            httpStatus: 409,
            error:
              "Content version unavailable.",
          };
        }

        const now = FieldValue.serverTimestamp();

        transaction.create(submissionRef, {
          kind,
          operation: "delete",
          targetId: id,
          targetVersion:
            encodeCMSVersion(existing.updateTime),
          status: "review",
          content: {
            title: previous.title ?? null,
            url: previous.url ?? null,
            ...(kind === "video"
              ? {
                  prof: previous.prof ?? null,
                }
              : {
                  type: previous.type ?? null,
                }),
          },
          submittedBy: admin.uid,
          reviewedBy: null,
          reviewNote: null,
          createdAt: now,
          updatedAt: now,
        });

        createCMSReviewLock(
          transaction,
          lockRef,
          submissionRef.id,
          admin.uid,
          "delete"
        );

        transaction.create(auditRef, {
          action:
            "cms_deletion_review_requested",
          actorUid: admin.uid,
          collection: collectionName,
          documentId: id,
          submissionId: submissionRef.id,
          createdAt: now,
        });

        return {
          httpStatus: 200,
          success: true,
          id,
          submissionId: submissionRef.id,
          status: "review",
          message:
            "Deletion submitted for review. Published content remains available until approval.",
        };
      }
    );

    const { httpStatus, ...body } = outcome;

    return respond(body, httpStatus);
  } catch (error) {
    return handleError(
      error,
      "submitting deletion"
    );
  }
}
