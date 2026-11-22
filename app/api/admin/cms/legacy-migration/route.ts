
import "server-only";

import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

import { requireAdmin } from "../../../../../lib/auth/admin";
import { getAdminDb } from "../../../../../lib/firebase-admin";

import {
  CMS_AUDIT_COLLECTION,
  CMS_COLLECTIONS,
  isCMSDocumentId,
  isCMSKind,
} from "../../../../../lib/cms/validation";

import {
  encodeCMSVersion,
  matchesCMSVersion,
} from "../../../../../lib/cms/version";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MASTER_UID = "nMVyy70GosaNoBZX96SQjUPkjWo2";

const HEADERS = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function respond(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: HEADERS,
  });
}

async function authorize() {
  const admin = await requireAdmin();

  if (admin.uid !== MASTER_UID) {
    return null;
  }

  return admin;
}

export async function GET() {
  try {
    const admin = await authorize();

    if (!admin) {
      return respond({ error: "Master admin only." }, 403);
    }

    const db = getAdminDb();

    const collections = [
      { kind: "video" as const, name: CMS_COLLECTIONS.video },
      { kind: "document" as const, name: CMS_COLLECTIONS.document },
    ];

    const records = [];
    let totalScanned = 0;

    for (const collection of collections) {
      let cursor:
        | FirebaseFirestore.QueryDocumentSnapshot
        | undefined;

      while (true) {
        let query = db
          .collection(collection.name)
          .orderBy("__name__")
          .limit(200);

        if (cursor) {
          query = query.startAfter(cursor);
        }

        const snapshot = await query.get();

        if (snapshot.empty) break;

        totalScanned += snapshot.size;

        for (const doc of snapshot.docs) {
          const data = doc.data();

          if (
            !Object.prototype.hasOwnProperty.call(
              data,
              "status"
            )
          ) {
            records.push({
              id: doc.id,
              kind: collection.kind,
              title:
                typeof data.title === "string"
                  ? data.title
                  : "Untitled",
              url:
                typeof data.url === "string"
                  ? data.url
                  : "",
              version: doc.updateTime
                ? encodeCMSVersion(doc.updateTime)
                : null,
            });
          }
        }

        cursor = snapshot.docs[snapshot.docs.length - 1];

        if (snapshot.size < 200) break;
      }
    }

    return respond({
      success: true,
      records,
      totalScanned,
    });
  } catch (error) {
    console.error("Legacy CMS scan failed:", error);

    return respond(
      { error: "Unable to scan legacy content." },
      500
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await authorize();

    if (!admin) {
      return respond({ error: "Master admin only." }, 403);
    }

    if (
      request.headers.get("origin") !==
      request.nextUrl.origin
    ) {
      return respond({ error: "Invalid origin." }, 403);
    }

    const contentType = request.headers
      .get("content-type")
      ?.toLowerCase();

    if (!contentType?.startsWith("application/json")) {
      return respond({ error: "JSON required." }, 415);
    }

    const raw = await request.text();

    if (new TextEncoder().encode(raw).length > 4096) {
      return respond({ error: "Request too large." }, 413);
    }

    let body: unknown;

    try {
      body = JSON.parse(raw);
    } catch {
      return respond({ error: "Invalid JSON." }, 400);
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return respond({ error: "Invalid body." }, 400);
    }

    const data = body as Record<string, unknown>;

    if (
      Object.keys(data).some(
        (key) =>
          !["kind", "id", "version", "confirm"].includes(key)
      )
    ) {
      return respond({ error: "Unexpected fields." }, 400);
    }

    if (
      !isCMSKind(data.kind) ||
      !isCMSDocumentId(data.id) ||
      typeof data.version !== "string" ||
      data.confirm !== true
    ) {
      return respond({ error: "Invalid request." }, 400);
    }

    const kind = data.kind;
    const id = data.id;
    const version = data.version;

    const db = getAdminDb();

    const targetRef = db
      .collection(CMS_COLLECTIONS[kind])
      .doc(id);

    const auditRef = db
      .collection(CMS_AUDIT_COLLECTION)
      .doc();

    const result = await db.runTransaction(
      async (transaction) => {
        const snapshot = await transaction.get(targetRef);

        if (!snapshot.exists) {
          return {
            status: 404,
            error: "Content not found.",
          };
        }

        const content = snapshot.data() ?? {};

        if (
          Object.prototype.hasOwnProperty.call(
            content,
            "status"
          )
        ) {
          return {
            status: 409,
            error: "Content already has a status.",
          };
        }

        if (
          !snapshot.updateTime ||
          !matchesCMSVersion(
            snapshot.updateTime,
            version
          )
        ) {
          return {
            status: 409,
            error: "Content changed. Refresh and review again.",
          };
        }

        if (
          typeof content.title !== "string" ||
          !content.title.trim() ||
          typeof content.url !== "string" ||
          !content.url.trim()
        ) {
          return {
            status: 409,
            error: "Incomplete legacy content.",
          };
        }

        const now = FieldValue.serverTimestamp();

        transaction.update(targetRef, {
          status: "published",
          updatedAt: now,
        });

        transaction.create(auditRef, {
          action: "cms_legacy_content_migrated",
          actorUid: admin.uid,
          collection: CMS_COLLECTIONS[kind],
          documentId: id,
          kind,
          previousStatus: null,
          newStatus: "published",
          createdAt: now,
        });

        return {
          status: 200,
          success: true,
          message: "Legacy content migrated.",
        };
      }
    );

    const { status, ...response } = result;

    return respond(response, status);
  } catch (error) {
    console.error("Legacy CMS migration failed:", error);

    return respond(
      { error: "Legacy migration failed." },
      500
    );
  }
}
