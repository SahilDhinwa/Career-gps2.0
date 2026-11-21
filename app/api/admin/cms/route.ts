
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";

import { getAdminDb } from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

const ALLOWED_DOC_TYPES = [
  "past_paper",
  "notes",
  "template",
];

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
}

function validURL(
  value: unknown,
  kind: "video" | "document"
): value is string {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value.length > 2048
  ) {
    return false;
  }

  try {
    const parsed = new URL(value);

    if (
      parsed.protocol !== "https:" ||
      parsed.username ||
      parsed.password ||
      parsed.port
    ) {
      return false;
    }

    const host = parsed.hostname.toLowerCase();

    if (kind === "video") {
      const videoId = /^[a-zA-Z0-9_-]{11}$/;

      if (host === "youtu.be") {
        return videoId.test(parsed.pathname.slice(1));
      }

      if (
        host === "youtube.com" ||
        host === "www.youtube.com" ||
        host === "youtube-nocookie.com" ||
        host === "www.youtube-nocookie.com"
      ) {
        if (parsed.pathname === "/watch") {
          return videoId.test(
            parsed.searchParams.get("v") ?? ""
          );
        }

        const match = parsed.pathname.match(
          /^\/(?:embed|shorts|live)\/([a-zA-Z0-9_-]{11})\/?$/
        );

        return Boolean(match);
      }

      return false;
    }

    if (
      host === "drive.google.com" ||
      host === "docs.google.com"
    ) {
      return (
        /^\/file\/d\/[a-zA-Z0-9_-]+\/(?:view|preview)?\/?$/.test(
          parsed.pathname
        ) ||
        /^\/(?:document|spreadsheets|presentation)\/d\/[a-zA-Z0-9_-]+(?:\/.*)?$/.test(
          parsed.pathname
        )
      );
    }

    if (host === "firebasestorage.googleapis.com") {
      return parsed.pathname.startsWith("/v0/b/");
    }

    if (host === "storage.googleapis.com") {
      return parsed.pathname.length > 2;
    }

    return false;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    if (
      !request.headers.get("origin") ||
      request.headers.get("origin") !== request.nextUrl.origin
    ) {
      return respond(
        { error: "Invalid request origin." },
        403
      );
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
        ? ["kind", "title", "url"]
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
      kind === "document" &&
      !ALLOWED_DOC_TYPES.includes(String(data.type))
    ) {
      return respond(
        { error: "Invalid document category." },
        400
      );
    }

    const collectionName =
      kind === "video" ? "bams_reels" : "bams_assets";

    const database = getAdminDb();
    const contentRef = database.collection(collectionName).doc();
    const auditRef = database.collection("admin_audit_logs").doc();

    const content: Record<string, unknown> = {
      title,
      url,
      createdAt: FieldValue.serverTimestamp(),
    };

    if (kind === "document") {
      content.type = data.type;
    }

    const batch = database.batch();

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

    return respond(
      { error: "Publishing failed." },
      500
    );
  }
}
