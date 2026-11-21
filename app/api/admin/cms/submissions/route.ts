
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
  CMS_SUBMISSIONS_COLLECTION,
  hasOnlyCMSFields,
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

  console.error("CMS submissions error:", error);

  return respond(
    { error: "CMS submissions request failed." },
    500
  );
}

function checkOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  return (
    typeof origin === "string" &&
    origin === request.nextUrl.origin
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

  const raw = await request.text();

  if (raw.length > 4096) {
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

// -------------------------------------------
// GET: Private submission queue
// -------------------------------------------

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

      function date(value: unknown) {
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

      return {
        id: doc.id,
        kind: data.kind ?? null,
        operation: data.operation ?? null,
        targetId: data.targetId ?? null,
        status: data.status ?? null,
        content: data.content ?? null,
        submittedBy: data.submittedBy ?? null,
        reviewedBy: data.reviewedBy ?? null,
        reviewNote: data.reviewNote ?? null,
        createdAt: date(data.createdAt),
        updatedAt: date(data.updatedAt),
        reviewedAt: date(data.reviewedAt),
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

// -------------------------------------------
// POST: Create draft or review request
// -------------------------------------------

export async function POST(request: NextRequest) {
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

    if (!isCMSKind(data.kind)) {
      return respond(
        { error: "Invalid content kind." },
        400
      );
    }

    const allowed = [
      "kind",
      "title",
      "url",
      "prof",
      "type",
      "status",
      "operation",
      "targetId",
    ];

    if (!hasOnlyCMSFields(data, allowed)) {
      return respond(
        { error: "Unexpected fields." },
        400
      );
    }

    const kind = data.kind;

    if (
      data.status !== "draft" &&
      data.status !== "review"
    ) {
      return respond(
        { error: "Invalid submission status." },
        400
      );
    }

    const operation =
      data.operation === undefined
        ? "create"
        : data.operation;

    if (
      operation !== "create" &&
      operation !== "update"
    ) {
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
        { error: "Invalid target identifier." },
        400
      );
    }

    if (
      operation === "create" &&
      data.targetId !== undefined
    ) {
      return respond(
        { error: "Unexpected target identifier." },
        400
      );
    }

    if (
      kind === "video" &&
      data.type !== undefined
    ) {
      return respond(
        { error: "Unexpected document category." },
        400
      );
    }

    if (
      kind === "document" &&
      data.prof !== undefined
    ) {
      return respond(
        { error: "Unexpected professional year." },
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

    const batch = db.batch();

    batch.create(submissionRef, {
      kind,
      operation,
      targetId:
        operation === "update"
          ? data.targetId
          : null,
      status: data.status,
      content: validated.content,
      submittedBy: admin.uid,
      reviewedBy: null,
      reviewNote: null,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    batch.create(auditRef, {
      action:
        data.status === "draft"
          ? "cms_draft_created"
          : "cms_review_requested",
      actorUid: admin.uid,
      submissionId: submissionRef.id,
      kind,
      operation,
      createdAt: FieldValue.serverTimestamp(),
    });

    await batch.commit();

    return respond(
      {
        success: true,
        id: submissionRef.id,
        status: data.status,
        message:
          data.status === "draft"
            ? "Draft saved successfully."
            : "Submitted for review.",
      },
      201
    );
  } catch (error) {
    return handleError(error);
  }
}
