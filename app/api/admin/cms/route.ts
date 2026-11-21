
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";
import { getAdminDb } from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Prof = "prof-1" | "prof-2" | "prof-3";
type Kind = "video" | "document";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

const DOC_TYPES = ["past_paper", "notes", "template"];
const PROFS: Prof[] = ["prof-1", "prof-2", "prof-3"];

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
}

function validURL(value: unknown, kind: Kind): value is string {
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
        return idPattern.test(url.pathname.slice(1));
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
        return idPattern.test(url.searchParams.get("v") ?? "");
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

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    const origin = request.headers.get("origin");

    if (!origin || origin !== request.nextUrl.origin) {
      return respond({ error: "Invalid request origin." }, 403);
    }

    if (
      !request.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    ) {
      return respond({ error: "JSON required." }, 415);
    }

    const raw = await request.text();

    if (raw.length > 4096) {
      return respond({ error: "Request too large." }, 413);
    }

    let payload: unknown;

    try {
      payload = JSON.parse(raw);
    } catch {
      return respond({ error: "Invalid JSON." }, 400);
    }

    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload)
    ) {
      return respond({ error: "Invalid request." }, 400);
    }

    const data = payload as Record<string, unknown>;
    const kind = data.kind;

    if (kind !== "video" && kind !== "document") {
      return respond({ error: "Invalid content kind." }, 400);
    }

    const allowedFields =
      kind === "video"
        ? ["kind", "title", "url", "prof"]
        : ["kind", "title", "url", "type"];

    if (
      Object.keys(data).some(
        (key) => !allowedFields.includes(key)
      )
    ) {
      return respond(
        { error: "Unexpected content fields." },
        400
      );
    }

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
      return respond(
        { error: "Invalid content details." },
        400
      );
    }

    if (
      kind === "video" &&
      !PROFS.includes(data.prof as Prof)
    ) {
      return respond(
        { error: "Invalid professional year." },
        400
      );
    }

    if (
      kind === "document" &&
      !DOC_TYPES.includes(String(data.type))
    ) {
      return respond(
        { error: "Invalid document category." },
        400
      );
    }

    const collectionName =
      kind === "video" ? "bams_reels" : "bams_assets";

    const db = getAdminDb();
    const contentRef = db.collection(collectionName).doc();
    const auditRef = db.collection("admin_audit_logs").doc();

    const content: Record<string, unknown> = {
      title,
      url,
      createdAt: FieldValue.serverTimestamp(),
    };

    if (kind === "video") {
      content.prof = data.prof;
    } else {
      content.type = data.type;
    }

    const batch = db.batch();

    batch.create(contentRef, content);

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
    if (error instanceof AdminAuthError) {
      return respond(
        { error: error.message },
        error.status
      );
    }

    console.error("Admin CMS publishing failed:", error);

    return respond({ error: "Publishing failed." }, 500);
  }
}
