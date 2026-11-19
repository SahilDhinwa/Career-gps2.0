
import { NextResponse } from "next/server";
import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const admin = await requireAdmin();

    return NextResponse.json(
      {
        authenticated: true,
        admin: true,
        email: admin.email,
      },
      {
        headers: {
          "Cache-Control": "private, no-store",
        },
      }
    );
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        {
          authenticated: false,
          admin: false,
          error: error.message,
        },
        {
          status: error.status,
          headers: {
            "Cache-Control": "private, no-store",
          },
        }
      );
    }

    console.error(
      "Admin session verification failed:",
      error
    );

    return NextResponse.json(
      {
        authenticated: false,
        admin: false,
        error: "Internal server error.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "private, no-store",
        },
      }
    );
  }
}
