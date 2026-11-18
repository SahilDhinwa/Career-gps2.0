
import "server-only";

import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  getAdminAuth,
} from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_NAME = "atreya_session";

function noStoreResponse(
  body: Record<string, unknown>,
  status: number
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(
  request: NextRequest
) {
  const origin = request.headers.get("origin");

  if (
    !origin ||
    origin !== request.nextUrl.origin
  ) {
    return noStoreResponse(
      { error: "Invalid request origin" },
      403
    );
  }

  const existingSession =
    request.cookies.get(COOKIE_NAME)?.value;

  let revocationFailed = false;

  if (existingSession) {
    try {
      const auth = getAdminAuth();

      const decoded =
        await auth.verifySessionCookie(
          existingSession,
          false
        );

      // Invalidate Firebase refresh tokens.
      // This also invalidates previously issued
      // sessions after their revocation checks.
      await auth.revokeRefreshTokens(
        decoded.uid
      );
    } catch (error) {
      console.error(
        "Session revocation failed:",
        error
      );

      revocationFailed = true;
    }
  }

  const response = noStoreResponse(
    {
      success: !revocationFailed,
      sessionCleared: true,
      revoked: Boolean(
        existingSession && !revocationFailed
      ),
    },
    revocationFailed ? 503 : 200
  );

  // Always clear the browser's session cookie.
  response.cookies.set(
    COOKIE_NAME,
    "",
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    }
  );

  return response;
}
