
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";
import { getAdminDb } from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Kind = "video" | "document";
type Prof = "prof-1" | "prof-2" | "prof-3";
type DocumentType = "past_paper" | "notes" | "template";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

const PROFS: Prof[] = [
  "prof-1",
  "prof-2",
  "prof-3",
];

const DOC_TYPES: DocumentType[] = [
  "past_paper",
  "notes",
  "template",
];

const COLLECTIONS: Record<Kind, string> = {
  video: "bams_reels",
  document: "bams_assets",
};

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
}

function isKind(value: unknown): value is Kind {
  return value === "video" || value === "document";
}

function isProf(value: unknown): value is Prof {
  return PROFS.some((prof) => prof === value);
}

function isDocumentType(
  value: unknown
): value is DocumentType {
  return DOC_TYPES.some((type) => type === value);
}

function isDocumentId(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^[A-Za-z0-9_-]{1,128}$/.test(value)
  );
}

function validURL(
  value: unknown,
  kind: Kind
): value is string {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value.length > 2048
  ) {
    return false;
  }

  try {
    const url = new URL(value);

    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.port
    ) {
      return false;
    }

    const host = url.hostname.toLowerCase();

    if (kind === "video") {
      const idPattern = /^[a-zA-Z0-9_-]{11}$/;

      if (host === "youtu.be") {
        return idPattern.test(
          url.pathname.slice(1)
        );
      }

      if (
        ![
          "youtube.com",
          "www.youtube.com",
          "youtube-nocookie.com",
          "www.youtube-nocookie.com",
        ].includes(host)
      ) {
        return false;
      }

      if (url.pathname === "/watch") {
        return idPattern.test(
          url.searchParams.get("v") ?? ""
        );
      }

      return /^\/(?:embed|shorts|live)\/[a-zA-Z0-9_-]{11}\/?$/.test(
        url.pathname
      );
    }

    if (host === "drive.google.com") {
      return /^\/file\/d\/[a-zA-Z0-9_-]+\/?(?:view|preview)?\/?$/.test(
        url.pathname
      );
    }

    if (host === "docs.google.com") {
      return /^\/(?:document|spreadsheets|presentation)\/d\/[a-zA-Z0-9_-]+(?:\/.*)?$/.test(
        url.pathname
      );
    }

    if (host === "firebasestorage.googleapis.com") {
      return url.pathname.startsWith("/v0/b/");
    }

    if (host === "storage.googleapis.com") {
      return url.pathname.length > 2;
    }

    return false;
  } catch {
    return false;
  }
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

  let payload: unknown;

  try {
    payload = JSON.parse(raw);
  } catch {
    return {
      error: "Invalid JSON.",
      status: 400,
    } as const;
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    Array.isArray(payload)
  ) {
    return {
      error: "Invalid request.",
      status: 400,
    } as const;
  }

  return {
    data: payload as Record<string, unknown>,
  };
}

function validateContent(
  data: Record<string, unknown>,
  kind: Kind
) {
  const title =
    typeof data.title === "string"
      ? data.title.trim()
      : "";

  const url =
    typeof data.url === "string"
      ? data.url.trim()
      : "";

  if (
    title.length < 3 ||
    title.length > 160 ||
    !validURL(url, kind)
  ) {
    return {
      error: "Invalid content details.",
    } as const;
  }

  if (kind === "video") {
    if (!isProf(data.prof)) {
      return {
        error: "Invalid professional year.",
      } as const;
    }

    return {
      content: {
        title,
        url,
        prof: data.prof,
      },
    };
  }

  if (!isDocumentType(data.type)) {
    return {
      error: "Invalid document category.",
    } as const;
  }

  return {
    content: {
      title,
      url,
      type: data.type,
    },
  };
}

function hasOnlyFields(
  data: Record<string, unknown>,
  allowed: string[]
) {
  return Object.keys(data).every((key) =>
    allowed.includes(key)
  );
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

// --------------------------------------------------
// GET: List existing content
// --------------------------------------------------

export async function GET() {
  try {
    await requireAdmin();

    const db = getAdminDb();

    const [videos, documents] = await Promise.all([
      db
        .collection(COLLECTIONS.video)
        .orderBy("createdAt", "desc")
        .limit(50)
        .get(),

      db
        .collection(COLLECTIONS.document)
        .orderBy("createdAt", "desc")
        .limit(50)
        .get(),
    ]);

    function serialize(
      snapshot: typeof videos,
      kind: Kind
    ) {
      return snapshot.docs.map((doc) => {
        const data = doc.data();

        const createdAt =
          data.createdAt &&
          typeof data.createdAt.toDate === "function"
            ? data.createdAt.toDate().toISOString()
            : null;

        const updatedAt =
          data.updatedAt &&
          typeof data.updatedAt.toDate === "function"
            ? data.updatedAt.toDate().toISOString()
            : null;

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
            kind === "video" && isProf(data.prof)
              ? data.prof
              : null,
          type:
            kind === "document" &&
            isDocumentType(data.type)
              ? data.type
              : null,
          createdAt,
          updatedAt,
        };
      });
    }

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

// --------------------------------------------------
// POST: Publish new content
// --------------------------------------------------

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

    if (!isKind(data.kind)) {
      return respond(
        { error: "Invalid content kind." },
        400
      );
    }

    const kind = data.kind;

    const allowed =
      kind === "video"
        ? ["kind", "title", "url", "prof"]
        : ["kind", "title", "url", "type"];

    if (!hasOnlyFields(data, allowed)) {
      return respond(
        { error: "Unexpected content fields." },
        400
      );
    }

    const validated = validateContent(
      data,
      kind
    );

    if ("error" in validated) {
      return respond(
        { error: validated.error },
        400
      );
    }

    const collectionName = COLLECTIONS[kind];

    const db = getAdminDb();
    const contentRef = db
      .collection(collectionName)
      .doc();

    const auditRef = db
      .collection("admin_audit_logs")
      .doc();

    const batch = db.batch();

    batch.create(contentRef, {
      ...validated.content,
      createdAt: FieldValue.serverTimestamp(),
    });

    batch.create(auditRef, {
      action: "cms_content_created",
      actorUid: admin.uid,
      collection: collectionName,
      documentId: contentRef.id,
      createdAt: FieldValue.serverTimestamp(),
    });

    await batch.commit();

    return respond(
      {
        success: true,
        id: contentRef.id,
        collection: collectionName,
      },
      201
    );
  } catch (error) {
    return handleError(error, "publishing");
  }
}

// --------------------------------------------------
// PATCH: Edit existing content
// --------------------------------------------------

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
      !isKind(data.kind) ||
      !isDocumentId(data.id)
    ) {
      return respond(
        { error: "Invalid content identifier." },
        400
      );
    }

    const kind = data.kind;
    const id = data.id;

    const allowed =
      kind === "video"
        ? ["id", "kind", "title", "url", "prof"]
        : ["id", "kind", "title", "url", "type"];

    if (!hasOnlyFields(data, allowed)) {
      return respond(
        { error: "Unexpected content fields." },
        400
      );
    }

    const validated = validateContent(
      data,
      kind
    );

    if ("error" in validated) {
      return respond(
        { error: validated.error },
        400
      );
    }

    const collectionName = COLLECTIONS[kind];
    const db = getAdminDb();

    const contentRef = db
      .collection(collectionName)
      .doc(id);

    const auditRef = db
      .collection("admin_audit_logs")
      .doc();

    let found = false;

    await db.runTransaction(async (transaction) => {
      const existing = await transaction.get(
        contentRef
      );

      if (!existing.exists) {
        return;
      }

      found = true;

      const previous = existing.data() ?? {};

      transaction.update(contentRef, {
        ...validated.content,
        updatedAt: FieldValue.serverTimestamp(),
      });

      transaction.create(auditRef, {
        action: "cms_content_updated",
        actorUid: admin.uid,
        collection: collectionName,
        documentId: id,
        before: {
          title: previous.title ?? null,
          url: previous.url ?? null,
          prof: previous.prof ?? null,
          type: previous.type ?? null,
        },
        after: validated.content,
        createdAt: FieldValue.serverTimestamp(),
      });
    });

    if (!found) {
      return respond(
        { error: "Content not found." },
        404
      );
    }

    return respond({
      success: true,
      id,
      collection: collectionName,
      message: "Content updated successfully.",
    });
  } catch (error) {
    return handleError(error, "updating");
  }
}

// --------------------------------------------------
// DELETE: Remove existing content
// --------------------------------------------------

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
      !isKind(data.kind) ||
      !isDocumentId(data.id) ||
      !hasOnlyFields(data, ["id", "kind"])
    ) {
      return respond(
        { error: "Invalid deletion request." },
        400
      );
    }

    const kind = data.kind;
    const id = data.id;
    const collectionName = COLLECTIONS[kind];

    const db = getAdminDb();

    const contentRef = db
      .collection(collectionName)
      .doc(id);

    const auditRef = db
      .collection("admin_audit_logs")
      .doc();

    let found = false;

    await db.runTransaction(async (transaction) => {
      const existing = await transaction.get(
        contentRef
      );

      if (!existing.exists) {
        return;
      }

      found = true;

      const previous = existing.data() ?? {};

      transaction.delete(contentRef);

      transaction.create(auditRef, {
        action: "cms_content_deleted",
        actorUid: admin.uid,
        collection: collectionName,
        documentId: id,
        deletedContent: {
          title: previous.title ?? null,
          url: previous.url ?? null,
          prof: previous.prof ?? null,
          type: previous.type ?? null,
        },
        createdAt: FieldValue.serverTimestamp(),
      });
    });

    if (!found) {
      return respond(
        { error: "Content not found." },
        404
      );
    }

    return respond({
      success: true,
      id,
      collection: collectionName,
      message: "Content deleted successfully.",
    });
  } catch (error) {
    return handleError(error, "deleting");
  }
}
