
import { NextRequest, NextResponse } from "next/server";
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

  console.error(
    "Admin users API error:",
    error instanceof Error
      ? error.message
      : "Unknown error"
  );

  return respond(
    { error: "Internal server error." },
    500
  );
}

function validUserId(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    value.length <= 128 &&
    value !== "." &&
    value !== ".." &&
    !value.includes("/")
  );
}

export async function GET(request: NextRequest) {
  try {
    await requireAdmin();

    const cursor =
      request.nextUrl.searchParams.get("cursor");

    if (cursor !== null && !validUserId(cursor)) {
      return respond({ error: "Invalid cursor." }, 400);
    }

    const database = getAdminDb();

    let query = database
      .collection("users")
      .orderBy("__name__")
      .limit(51);

    if (cursor) {
      query = query.startAfter(cursor);
    }

    const snapshot = await query.get();

    const page = snapshot.docs.slice(0, 50);

    const users = page.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        displayName:
          typeof data.displayName === "string"
            ? data.displayName
            : "",
        email:
          typeof data.email === "string"
            ? data.email
            : "",
        photoURL:
          typeof data.photoURL === "string"
            ? data.photoURL
            : "",
        isPremium: data.isPremium === true,
        role:
          typeof data.role === "string"
            ? data.role
            : "user",
      };
    });

    return respond({
      users,
      nextCursor:
        snapshot.docs.length > 50
          ? page[page.length - 1].id
          : null,
    });
  } catch (error) {
    return handleError(error);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    const origin = request.headers.get("origin");

    if (
      !origin ||
      origin !== request.nextUrl.origin
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
        { error: "JSON content required." },
        415
      );
    }

    const raw = await request.text();

    if (raw.length > 1024) {
      return respond(
        { error: "Request too large." },
        413
      );
    }

    let body: unknown;

    try {
      body = JSON.parse(raw);
    } catch {
      return respond(
        { error: "Invalid JSON." },
        400
      );
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return respond(
        { error: "Invalid request." },
        400
      );
    }

    const data = body as Record<string, unknown>;

    if (
      !validUserId(data.userId) ||
      typeof data.isPremium !== "boolean" ||
      Object.keys(data).some(
        (key) =>
          key !== "userId" &&
          key !== "isPremium"
      )
    ) {
      return respond(
        { error: "Invalid premium update." },
        400
      );
    }

    // Protect the currently authenticated
    // Master Administrator from accidental
    // premium-status modifications.
    if (data.userId === admin.uid) {
      return respond(
        {
          error:
            "Cannot modify your own premium status.",
        },
        403
      );
    }

    const database = getAdminDb();

    const userRef = database
      .collection("users")
      .doc(data.userId);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      return respond(
        { error: "User not found." },
        404
      );
    }

    await userRef.update({
      isPremium: data.isPremium,
    });

    return respond({
      success: true,
      userId: data.userId,
      isPremium: data.isPremium,
    });
  } catch (error) {
    return handleError(error);
  }
}
