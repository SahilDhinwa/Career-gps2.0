
import { NextRequest, NextResponse } from "next/server";
import { getAdminAuth } from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_DURATION = 5 * 24 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");

    if (
      !origin ||
      origin !== request.nextUrl.origin
    ) {
      return NextResponse.json(
        { error: "Invalid origin" },
        { status: 403 }
      );
    }

    const body: unknown = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      !("idToken" in body) ||
      typeof body.idToken !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 400 }
      );
    }

    const auth = getAdminAuth();

    const decoded = await auth.verifyIdToken(
      body.idToken,
      true
    );

    const authTime = decoded.auth_time;

    if (
      typeof authTime !== "number" ||
      Date.now() / 1000 - authTime > 300
    ) {
      return NextResponse.json(
        { error: "Recent authentication required" },
        { status: 401 }
      );
    }

    const sessionCookie =
      await auth.createSessionCookie(
        body.idToken,
        { expiresIn: SESSION_DURATION }
      );

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set(
      "atreya_session",
      sessionCookie,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: SESSION_DURATION / 1000,
      }
    );

    response.headers.set(
      "Cache-Control",
      "no-store"
    );

    return response;
  } catch (error) {
    console.error("Session creation failed:", error);

    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}
