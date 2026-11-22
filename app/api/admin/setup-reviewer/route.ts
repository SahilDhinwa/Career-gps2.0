
import "server-only";

import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../../../../lib/auth/admin";
import { getAdminAuth } from "../../../../../../lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MASTER_ADMIN_UID = "nMVyy70GosaNoBZX96SQjUPkjWo2";
const REVIEWER_EMAIL = "dhinwasahil@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin();

    if (admin.uid !== MASTER_ADMIN_UID) {
      return NextResponse.json(
        { error: "Forbidden." },
        { status: 403 }
      );
    }

    const expectedOrigin = new URL(request.url).origin;
    const origin = request.headers.get("origin");

    if (origin !== expectedOrigin) {
      return NextResponse.json(
        { error: "Invalid request origin." },
        { status: 403 }
      );
    }

    const auth = getAdminAuth();

    const reviewer = await auth.getUserByEmail(
      REVIEWER_EMAIL
    );

    if (reviewer.disabled || reviewer.uid === admin.uid) {
      return NextResponse.json(
        { error: "Invalid reviewer account." },
        { status: 403 }
      );
    }

    await auth.setCustomUserClaims(reviewer.uid, {
      ...reviewer.customClaims,
      admin: true,
      reviewer: true,
    });

    return NextResponse.json({
      success: true,
      message: "Reviewer permissions assigned.",
    });
  } catch {
    return NextResponse.json(
      { error: "Reviewer setup failed." },
      { status: 500 }
    );
  }
}
