
import { NextResponse } from "next/server";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../lib/auth/admin";

import {
  getAdminDb,
} from "../../../../lib/firebase-admin";

import { Timestamp } from "firebase-admin/firestore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

export async function GET() {
  try {
    await requireAdmin();

    const snapshot = await getAdminDb()
      .collection("visitors")
      .get();

    let totalViews = 0;

    const uniqueIPs = new Set<string>();

    const recent = snapshot.docs.map((document) => {
      const data = document.data();

      const visits =
        typeof data.visits === "number" &&
        Number.isFinite(data.visits)
          ? Math.max(0, data.visits)
          : 1;

      totalViews += visits;

      const ip =
        typeof data.ip === "string"
          ? data.ip
          : "Unknown IP";

      if (ip !== "Unknown IP" && ip !== "Unknown") {
        uniqueIPs.add(ip);
      }

      const timestamp =
        data.visitedAt instanceof Timestamp
          ? data.visitedAt.toDate()
          : typeof data.visitedAt === "string"
            ? new Date(data.visitedAt)
            : null;

      return {
        id: document.id,
        name:
          typeof data.name === "string"
            ? data.name
            : "Unknown Visitor",
        ip,
        visits,
        time:
          timestamp &&
          Number.isFinite(timestamp.getTime())
            ? timestamp.toISOString()
            : null,
      };
    });

    recent.sort((a, b) =>
      (b.time ? Date.parse(b.time) : 0) -
      (a.time ? Date.parse(a.time) : 0)
    );

    return NextResponse.json(
      {
        totalViews,
        uniqueIPs: uniqueIPs.size,
        recent: recent.slice(0, 100),
      },
      { headers: HEADERS }
    );
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        {
          status: error.status,
          headers: HEADERS,
        }
      );
    }

    console.error("Admin analytics failed:", error);

    return NextResponse.json(
      { error: "Unable to load analytics." },
      {
        status: 500,
        headers: HEADERS,
      }
    );
  }
}
