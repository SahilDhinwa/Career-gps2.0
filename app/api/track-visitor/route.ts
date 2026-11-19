
import { NextRequest, NextResponse } from "next/server";
import {
  getApps,
  initializeApp,
  cert,
} from "firebase-admin/app";
import {
  getFirestore,
  FieldValue,
  type Firestore,
} from "firebase-admin/firestore";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROJECT_ID = "career-gps-16af6";
const DATABASE_ID = "default";
const COOKIE_NAME = "atreya_visitor_id";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type TrackEvent = "visit" | "profile" | "location";

type Coordinates = {
  lat: number;
  lng: number;
  accuracy?: number;
};

type TrackingPayload = {
  event?: TrackEvent;
  name?: string;
  coords?: Coordinates | null;
};

function getDatabase(): Firestore {
  const existingApp = getApps().find(
    (app) => app.name === "atreya-tracker"
  );

  const app =
    existingApp ??
    initializeApp(
      {
        credential: cert({
          projectId:
            process.env.FIREBASE_PROJECT_ID ??
            PROJECT_ID,
          clientEmail:
            process.env.FIREBASE_CLIENT_EMAIL,
          privateKey:
            process.env.FIREBASE_PRIVATE_KEY?.replace(
              /\\n/g,
              "\n"
            ),
        }),
      },
      "atreya-tracker"
    );

  // The project uses the named Firestore
  // database "default", not "(default)".
  return getFirestore(app, DATABASE_ID);
}

function getClientIP(request: NextRequest): string {
  const vercelIP = request.headers.get(
    "x-vercel-forwarded-for"
  );

  const forwardedIP =
    vercelIP ??
    request.headers.get("x-forwarded-for");

  const ip = forwardedIP?.split(",")[0]?.trim();

  return ip?.slice(0, 64) || "Unknown";
}

function isValidCoordinates(
  value: unknown
): value is Coordinates {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return false;
  }

  const coords = value as Record<string, unknown>;

  return (
    typeof coords.lat === "number" &&
    Number.isFinite(coords.lat) &&
    coords.lat >= -90 &&
    coords.lat <= 90 &&
    typeof coords.lng === "number" &&
    Number.isFinite(coords.lng) &&
    coords.lng >= -180 &&
    coords.lng <= 180 &&
    (
      coords.accuracy === undefined ||
      (
        typeof coords.accuracy === "number" &&
        Number.isFinite(coords.accuracy) &&
        coords.accuracy >= 0
      )
    )
  );
}

function errorResponse(
  message: string,
  status: number
) {
  return NextResponse.json(
    { success: false, error: message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");

    if (
      !origin ||
      origin !== request.nextUrl.origin
    ) {
      return errorResponse(
        "Invalid request origin.",
        403
      );
    }

    if (
      !request.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    ) {
      return errorResponse(
        "JSON content required.",
        415
      );
    }

    const rawBody = await request.text();

    if (rawBody.length > 2048) {
      return errorResponse(
        "Request too large.",
        413
      );
    }

    let payload: TrackingPayload;

    try {
      payload = JSON.parse(rawBody);
    } catch {
      return errorResponse(
        "Invalid JSON.",
        400
      );
    }

    if (
      !payload ||
      typeof payload !== "object" ||
      !["visit", "profile", "location"].includes(
        payload.event ?? ""
      )
    ) {
      return errorResponse(
        "Invalid tracking event.",
        400
      );
    }

    const event = payload.event as TrackEvent;

    const name =
      typeof payload.name === "string"
        ? payload.name.trim().slice(0, 80)
        : "";

    if (
      event === "location" &&
      !isValidCoordinates(payload.coords)
    ) {
      return errorResponse(
        "Invalid coordinates.",
        400
      );
    }

    const existingVisitorId =
      request.cookies.get(COOKIE_NAME)?.value;

    const visitorId =
      existingVisitorId &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        existingVisitorId
      )
        ? existingVisitorId
        : randomUUID();

    const database = getDatabase();

    const visitorRef = database
      .collection("visitors")
      .doc(visitorId);

    const ip = getClientIP(request);

    await database.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(visitorRef);

      if (!snapshot.exists) {
        transaction.create(visitorRef, {
          name: name || "Anonymous Scholar",
          ip,
          visits: event === "visit" ? 1 : 0,
          coordinates:
            event === "location"
              ? payload.coords
              : null,
          firstVisitedAt:
            FieldValue.serverTimestamp(),
          visitedAt:
            FieldValue.serverTimestamp(),
          locationUpdatedAt:
            event === "location"
              ? FieldValue.serverTimestamp()
              : null,
        });

        return;
      }

      const updates: Record<string, unknown> = {
        ip,
      };

      if (name) {
        updates.name = name;
      }

      if (event === "visit") {
        updates.visits = FieldValue.increment(1);
        updates.visitedAt =
          FieldValue.serverTimestamp();
      }

      if (event === "location") {
        updates.coordinates = payload.coords;
        updates.locationUpdatedAt =
          FieldValue.serverTimestamp();
      }

      transaction.update(visitorRef, updates);
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "Visitor record updated.",
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    response.cookies.set(
      COOKIE_NAME,
      visitorId,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: COOKIE_MAX_AGE,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Visitor tracking failed:",
      error
    );

    return errorResponse(
      "Failed to update visitor record.",
      500
    );
  }
}
