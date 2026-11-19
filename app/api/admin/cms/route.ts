
import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";

import {
  getAdminDb,
} from "../../../../lib/firebase-admin";

import {
  FieldValue,
} from "firebase-admin/firestore";

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

function respond(
  data: unknown,
  status = 200
) {
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
    value.length > 2048
  ) {
    return false;
  }

  try {
    const parsed = new URL(value);

    if (parsed.protocol !== "https:") {
      return false;
    }

    if (kind === "video") {
      return [
        "youtube.com",
        "www.youtube.com",
        "youtube-nocookie.com",
        "www.youtube-nocookie.com",
        "youtu.be",
      ].includes(parsed.hostname);
    }

    return [
      "drive.google.com",
      "docs.google.com",
      "firebasestorage.googleapis.com",
      "storage.googleapis.com",
    ].includes(parsed.hostname);
  } catch {
    return false;
  }
}

export async function POST(
  request: NextRequest
) {
  try {
    const admin = await requireAdmin();

    if (
      request.headers.get("origin") !==
      request.nextUrl.origin
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
      return respond(
        { error: "JSON required." },
        415
      );
    }

    const raw = await request.text();

    if (raw.length > 4096) {
      return respond(
        { error: "Request too large." },
        413
      );
    }

    let payload: unknown;

    try {
      payload = JSON.parse(raw);
    } catch {
      return respond(
        { error: "Invalid JSON." },
        400
      );
    }

    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload)
    ) {
      return respond(
        { error: "Invalid request." },
        400
      );
    }

    const data =
      payload as Record<string, unknown>;

    const kind = data.kind;

    const title =
      typeof data.title === "string"
        ? data.title.trim()
        : "";

    const url =
      typeof data.url === "string"
        ? data.url.trim()
        : "";

    if (
      (kind !== "video" &&
        kind !== "document") ||
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
      !ALLOWED_DOC_TYPES.includes(
        String(data.type)
      )
    ) {
      return respond(
        { error: "Invalid document category." },
        400
      );
    }

    const collectionName =
      kind === "video"
        ? "bams_reels"
        : "bams_assets";

    const content: Record<string, unknown> = {
      title,
      url,
      createdAt:
        FieldValue.serverTimestamp(),
    };

    if (kind === "document") {
      content.type = data.type;
    }

    const reference = await getAdminDb()
      .collection(collectionName)
      .add(content);

    console.info(
      "Admin CMS content created:",
      {
        adminUid: admin.uid,
        collection: collectionName,
        documentId: reference.id,
      }
    );

    return respond(
      {
        success: true,
        id: reference.id,
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

    console.error(
      "Admin CMS publishing failed:",
      error
    );

    return respond(
      { error: "Publishing failed." },
      500
    );
  }
}
