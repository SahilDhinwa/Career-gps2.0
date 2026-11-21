
import "server-only";

import {
  NextRequest,
  NextResponse,
} from "next/server";

import { FieldValue } from "firebase-admin/firestore";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../../lib/auth/admin";

import { getAdminDb } from "../../../../../lib/firebase-admin";

import {
  CMS_AUDIT_COLLECTION,
  CMS_COLLECTIONS,
  CMS_SUBMISSIONS_COLLECTION,
  isCMSDocumentId,
  isCMSKind,
  validateCMSContent,
} from "../../../../../lib/cms/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

type SubmissionStatus = "draft" | "review";
type SubmissionOperation = "create" | "update";

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
}

function handleError(error: unknown) {
  if (error instanceof AdminAuthError) {
    return respond(
      { error: error.message },
      error.status
    );
  }

  console.error("CMS submissions failed:", error);

  return respond(
    { error: "CMS submissions request failed." },
    500
  );
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  return (
    typeof origin === "string" &&
    origin === request.nextUrl.origin
  );
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

async function parseBody(request: NextRequest) {
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  ) {
    return {
      error: "JSON required.",
      status: 415,
    } as const;
  }

  const lengthHeader = request.headers.get(
    "content-length"
  );

  if (
    lengthHeader &&
    Number(lengthHeader) > 4096
  ) {
    return {
      error: "Request too large.",
      status: 413,
    } as const;
  }

  const raw = await request.text();

  if (
    new TextEncoder().encode(raw).length > 4096
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

function dateToISO(value: unknown): string | null {
  if (
    value &&
    typeof value === "object" &&
    "toDate" in value &&
    typeof value.toDate === "function"
  ) {
    return value.toDate().toISOString();
  }

  return null;
}

// ------------------------------------------
// GET: Private submission queue
// ------------------------------------------

export async function GET() {
  try {
    await requireAdmin();

    const db = getAdminDb();

    const snapshot = await db
      .collection(CMS_SUBMISSIONS_COLLECTION)
      .orderBy("createdAt", "desc")
      .limit(100)
      .get();

    const submissions = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        kind: data.kind ?? null,
        operation: data.operation ?? null,
        targetId: data.targetId ?? null,
        targetVersion: data.targetVersion ?? null,
        status: data.status ?? null,
        content: data.content ?? null,
        submittedBy: data.submittedBy ?? null,
        reviewedBy: data.reviewedBy ?? null,
        reviewNote: data.reviewNote ?? null,
        createdAt: dateToISO(data.createdAt),
        updatedAt: dateToISO(data.updatedAt),
        reviewedAt: dateToISO(data.reviewedAt),
      };
    });

    return respond({
      success: true,
      submissions,
      limit: 100,
    });
  } catch (error) {
    return handleError(error);
  }
}

// ------------------------------------------
// POST: Create private draft/review request
// ------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    if (!sameOrigin(request)) {
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

    if (!isCMSKind(data.kind)) {
      return respond(
        { error: "Invalid content kind." },
        400
      );
    }

    const kind = data.kind;

    const allowed =
      kind === "video"
        ? [
            "kind",
            "title",
            "url",
            "prof",
            "status",
            "operation",
            "targetId",
          ]
        : [
            "kind",
            "title",
            "url",
            "type",
            "status",
            "operation",
            "targetId",
          ];

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

    const status: SubmissionStatus =
      data.status === "draft"
        ? "draft"
        : data.status === "review"
          ? "review"
          : ("" as SubmissionStatus);

    if (!status) {
      return respond(
        { error: "Invalid submission status." },
        400
      );
    }

    const operation: SubmissionOperation =
      data.operation === undefined ||
      data.operation === "create"
        ? "create"
        : data.operation === "update"
          ? "update"
          : ("" as SubmissionOperation);

    if (!operation) {
      return respond(
        { error: "Invalid operation." },
        400
      );
    }

    if (
      operation === "update" &&
      !isCMSDocumentId(data.targetId)
    ) {
      return respond(
        { error: "Invalid target ID." },
        400
      );
    }

    if (
      operation === "create" &&
      data.targetId !== undefined
    ) {
      return respond(
        { error: "Unexpected target ID." },
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

    const submissionRef = db
      .collection(CMS_SUBMISSIONS_COLLECTION)
      .doc();

    const auditRef = db
      .collection(CMS_AUDIT_COLLECTION)
      .doc();

    const targetRef =
      operation === "update"
        ? db
            .collection(CMS_COLLECTIONS[kind])
            .doc(data.targetId as string)
        : null;

    const outcome = await db.runTransaction(
      async (transaction) => {
        let targetVersion: string | null = null;

        if (targetRef) {
          const target =
            await transaction.get(targetRef);

          if (!target.exists) {
            return {
              status: 404,
              error: "Target content not found.",
            };
          }

          if (!target.updateTime) {
            return {
              status: 409,
              error: "Target version unavailable.",
            };
          }

          targetVersion =
            target.updateTime.toDate().toISOString();
        }

        const now = FieldValue.serverTimestamp();

        transaction.create(submissionRef, {
          kind,
          operation,
          targetId:
            operation === "update"
              ? data.targetId
              : null,
          targetVersion,
          status,
          content: validated.content,
          submittedBy: admin.uid,
          reviewedBy: null,
          reviewNote: null,
          createdAt: now,
          updatedAt: now,
        });

        transaction.create(auditRef, {
          action:
            status === "draft"
              ? "cms_draft_created"
              : "cms_review_requested",
          actorUid: admin.uid,
          submissionId: submissionRef.id,
          kind,
          operation,
          createdAt: now,
        });

        return {
          status: 201,
          success: true,
          id: submissionRef.id,
          submissionStatus: status,
          message:
            status === "draft"
              ? "Draft saved successfully."
              : "Submitted for review.",
        };
      }
    );

    const { status: httpStatus, ...body } = outcome;

    return respond(body, httpStatus);
  } catch (error) {
    return handleError(error);
  }
}
