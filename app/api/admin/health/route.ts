
import { NextResponse } from "next/server";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";

import {
  getAdminDb,
} from "../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await requireAdmin();

    const database = getAdminDb();

    // Minimal read to verify Firestore access.
    await database
      .collection("users")
      .limit(1)
      .get();

    return NextResponse.json(
      {
        success: true,
        authenticated: true,
        admin: true,
        firestore: "connected",
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
          success: false,
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
      "Admin Firestore health check failed:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Firestore connection failed.",
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
