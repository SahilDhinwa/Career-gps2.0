
import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  getAdminAuth,
} from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_DURATION =
  5 * 24 * 60 * 60 * 1000;

const SESSION_COOKIE_NAME =
  "atreya_session";

const MAX_AUTH_AGE_SECONDS = 300;

function errorResponse(
  message: string,
  status: number
) {
  return NextResponse.json(
    { error: message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST(
  request: NextRequest
) {
  const origin =
    request.headers.get("origin");

  if (
    !origin ||
    origin !== request.nextUrl.origin
  ) {
    return errorResponse(
      "Invalid request origin",
      403
    );
  }

  let idToken: string;

  try {
    const body: unknown =
      await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      !("idToken" in body) ||
      typeof body.idToken !== "string" ||
      !body.idToken.trim() ||
      body.idToken.length > 10000
    ) {
      return errorResponse(
        "Invalid authentication token",
        400
      );
    }

    idToken = body.idToken;
  } catch {
    return errorResponse(
      "Invalid request body",
      400
    );
  }

  try {
    const auth = getAdminAuth();

    const decoded =
      await auth.verifyIdToken(
        idToken,
        true
      );

    const nowSeconds =
      Math.floor(Date.now() / 1000);

    const authTime =
      decoded.auth_time;

    if (
      typeof authTime !== "number" ||
      !Number.isFinite(authTime) ||
      authTime > nowSeconds + 60 ||
      nowSeconds - authTime >
        MAX_AUTH_AGE_SECONDS
    ) {
      return errorResponse(
        "Recent authentication required",
        401
      );
    }

    const sessionCookie =
      await auth.createSessionCookie(
        idToken,
        {
          expiresIn: SESSION_DURATION,
        }
      );

    const response =
      NextResponse.json(
        { success: true },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );

    response.cookies.set(
      SESSION_COOKIE_NAME,
      sessionCookie,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
        maxAge:
          SESSION_DURATION / 1000,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Firebase session creation failed:",
      error
    );

    return errorResponse(
      "Authentication failed",
      401
    );
  }
}
