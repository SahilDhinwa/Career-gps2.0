
import { NextRequest, NextResponse } from "next/server";

import {
  FieldValue,
  Timestamp,
} from "firebase-admin/firestore";

import {
  createHash,
  randomUUID,
} from "node:crypto";

import {
  ANALYTICS_COLLECTIONS,
  ANALYTICS_CONFIG,
  getAnalyticsDb,
  getAnalyticsSummaryRef,
  getVisitorRef,
  getAnalyticsSessionRef,
  isValidAnalyticsId,
  isValidCoordinates,
  normalizeVisitorName,
  normalizeVisitCount,
  type TrackEvent,
  type Coordinates,
} from "../../../lib/analytics/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

type TrackingPayload = {
  event: TrackEvent;
  name?: string;
  sessionId?: string;
  coords?: Coordinates | null;
};

function errorResponse(
  message: string,
  status: number,
  extraHeaders: Record<string, string> = {}
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    {
      status,
      headers: {
        ...HEADERS,
        ...extraHeaders,
      },
    }
  );
}

function getClientIP(
  request: NextRequest
): string {
  const forwardedIP =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for");

  return (
    forwardedIP
      ?.split(",")[0]
      ?.trim()
      .slice(0, 64) || "Unknown"
  );
}

function isTrackingEvent(
  value: unknown
): value is TrackEvent {
  return (
    value === "visit" ||
    value === "profile" ||
    value === "location"
  );
}

async function readLimitedBody(
  request: NextRequest
): Promise<string | null> {
  const limit = ANALYTICS_CONFIG.maxPayloadBytes;

  const contentLength =
    request.headers.get("content-length");

  if (
    contentLength !== null &&
    Number(contentLength) > limit
  ) {
    return null;
  }

  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();

  let received = 0;
  let result = "";

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      received += value.byteLength;

      if (received > limit) {
        await reader.cancel();
        return null;
      }

      result += decoder.decode(value, {
        stream: true,
      });
    }

    result += decoder.decode();

    return result;
  } finally {
    reader.releaseLock();
  }
}

export async function POST(
  request: NextRequest
) {
  try {
    // ----------------------------------------
    // REQUEST SECURITY
    // ----------------------------------------

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

    const contentType = request.headers
      .get("content-type")
      ?.split(";")[0]
      ?.trim()
      .toLowerCase();

    if (contentType !== "application/json") {
      return errorResponse(
        "JSON content required.",
        415
      );
    }

    const rawBody = await readLimitedBody(request);

    if (rawBody === null) {
      return errorResponse(
        "Request too large.",
        413
      );
    }

    let parsed: unknown;

    try {
      parsed = JSON.parse(rawBody);
    } catch {
      return errorResponse(
        "Invalid JSON.",
        400
      );
    }

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      return errorResponse(
        "Invalid tracking payload.",
        400
      );
    }

    const data = parsed as Record<string, unknown>;

    if (!isTrackingEvent(data.event)) {
      return errorResponse(
        "Invalid tracking event.",
        400
      );
    }

    const allowedFields = [
      "event",
      "name",
      "sessionId",
      "coords",
    ];

    if (
      Object.keys(data).some(
        (key) => !allowedFields.includes(key)
      )
    ) {
      return errorResponse(
        "Unexpected tracking fields.",
        400
      );
    }

    if (
      data.name !== undefined &&
      typeof data.name !== "string"
    ) {
      return errorResponse(
        "Invalid visitor name.",
        400
      );
    }

    if (
      data.sessionId !== undefined &&
      !isValidAnalyticsId(data.sessionId)
    ) {
      return errorResponse(
        "Invalid session identifier.",
        400
      );
    }

    if (
      data.event === "location" &&
      !isValidCoordinates(data.coords)
    ) {
      return errorResponse(
        "Invalid coordinates.",
        400
      );
    }

    const payload = data as TrackingPayload;
    const event = payload.event;

    const name = normalizeVisitorName(
      payload.name
    );

    // ----------------------------------------
    // VISITOR IDENTITY
    // ----------------------------------------

    const existingVisitorId = request.cookies
      .get(ANALYTICS_CONFIG.visitorCookieName)
      ?.value;

    const visitorId = isValidAnalyticsId(
      existingVisitorId
    )
      ? existingVisitorId
      : randomUUID();

    const sessionId = payload.sessionId;

    const ip = getClientIP(request);

    const database = getAnalyticsDb();

    const visitorRef = getVisitorRef(visitorId);

    const summaryRef = getAnalyticsSummaryRef();

    const sessionRef =
      event === "visit" && sessionId
        ? getAnalyticsSessionRef(
            visitorId,
            sessionId
          )
        : null;

    // ----------------------------------------
    // RATE LIMITING
    // ----------------------------------------

    const now = Date.now();

    const windowMs =
      ANALYTICS_CONFIG.rateLimitWindowMs;

    const windowId = Math.floor(
      now / windowMs
    );

    const rateLimitId = createHash("sha256")
      .update(`${ip}:${windowId}`)
      .digest("hex");

    const rateLimitRef = database
      .collection(
        ANALYTICS_COLLECTIONS.rateLimits
      )
      .doc(rateLimitId);

    // ----------------------------------------
    // ATOMIC TRACKING TRANSACTION
    // ----------------------------------------

    const result = await database.runTransaction(
      async (transaction) => {
        const rateSnapshot =
          await transaction.get(rateLimitRef);

        const requestCount = normalizeVisitCount(
          rateSnapshot.data()?.count
        );

        if (
          requestCount >=
          ANALYTICS_CONFIG.rateLimitMaxRequests
        ) {
          return {
            rateLimited: true,
            duplicate: false,
            counted: false,
          };
        }

        // All transaction reads precede writes.

        const visitorSnapshot =
          await transaction.get(visitorRef);

        const summarySnapshot =
          await transaction.get(summaryRef);

        const sessionSnapshot = sessionRef
          ? await transaction.get(sessionRef)
          : null;

        const sessionExpiry =
          sessionSnapshot?.data()?.expiresAt;

        const duplicate =
          sessionSnapshot?.exists === true &&
          sessionExpiry instanceof Timestamp &&
          sessionExpiry.toMillis() > now;

        const shouldCountVisit =
          event === "visit" && !duplicate;

        const isNewVisitor =
          !visitorSnapshot.exists;

        const timestamp =
          FieldValue.serverTimestamp();

        // ------------------------------------
        // RECORD RATE LIMIT
        // ------------------------------------

        transaction.set(
          rateLimitRef,
          {
            count: requestCount + 1,
            expiresAt: Timestamp.fromMillis(
              (windowId + 2) * windowMs
            ),
          },
          { merge: true }
        );

        // ------------------------------------
        // UPDATE VISITOR RECORD
        // ------------------------------------

        if (isNewVisitor) {
          transaction.create(visitorRef, {
            name: name || "Anonymous Scholar",
            ip,
            visits: shouldCountVisit ? 1 : 0,

            coordinates:
              event === "location" &&
              payload.coords
                ? {
                    lat: payload.coords.lat,
                    lng: payload.coords.lng,
                    ...(payload.coords.accuracy !==
                    undefined
                      ? {
                          accuracy:
                            payload.coords.accuracy,
                        }
                      : {}),
                  }
                : null,

            firstVisitedAt: timestamp,
            visitedAt: timestamp,

            locationUpdatedAt:
              event === "location"
                ? timestamp
                : null,
          });
        } else {
          const updates: Record<string, unknown> = {
            ip,
          };

          if (name) {
            updates.name = name;
          }

          if (shouldCountVisit) {
            const previousVisits =
              normalizeVisitCount(
                visitorSnapshot.data()?.visits,
                1
              );

            updates.visits = Math.min(
              Number.MAX_SAFE_INTEGER,
              previousVisits + 1
            );

            updates.visitedAt = timestamp;
          }

          if (
            event === "location" &&
            payload.coords
          ) {
            updates.coordinates = {
              lat: payload.coords.lat,
              lng: payload.coords.lng,
              ...(payload.coords.accuracy !==
              undefined
                ? {
                    accuracy:
                      payload.coords.accuracy,
                  }
                : {}),
            };

            updates.locationUpdatedAt = timestamp;
          }

          transaction.update(
            visitorRef,
            updates
          );
        }

        // ------------------------------------
        // SESSION DEDUPLICATION
        // ------------------------------------

        if (
          sessionRef &&
          shouldCountVisit
        ) {
          transaction.set(sessionRef, {
            createdAt: timestamp,

            expiresAt: Timestamp.fromMillis(
              now +
                ANALYTICS_CONFIG.sessionRetentionMs
            ),
          });
        }

        // ------------------------------------
        // AGGREGATED ANALYTICS
        // ------------------------------------

        // Historical migration must complete
        // before live aggregate updates begin.

        const summary = summarySnapshot.data();

        if (
          summary?.migrationComplete === true &&
          summary.schemaVersion ===
            ANALYTICS_CONFIG.schemaVersion &&
          (shouldCountVisit || isNewVisitor)
        ) {
          transaction.update(summaryRef, {
            totalVisits: FieldValue.increment(
              shouldCountVisit ? 1 : 0
            ),

            uniqueVisitors: FieldValue.increment(
              isNewVisitor ? 1 : 0
            ),

            updatedAt: timestamp,
          });
        }

        return {
          rateLimited: false,
          duplicate,
          counted: shouldCountVisit,
        };
      }
    );

    // ----------------------------------------
    // RATE LIMIT RESPONSE
    // ----------------------------------------

    if (result.rateLimited) {
      const retryAfter = Math.max(
        1,
        Math.ceil(
          ((windowId + 1) * windowMs - Date.now()) /
            1000
        )
      );

      return errorResponse(
        "Too many tracking requests. Please retry later.",
        429,
        {
          "Retry-After": String(retryAfter),
        }
      );
    }

    // ----------------------------------------
    // SUCCESS RESPONSE
    // ----------------------------------------

    const response = NextResponse.json(
      {
        success: true,
        message: "Visitor record updated.",
        counted: result.counted,
        duplicate: result.duplicate,
      },
      {
        headers: HEADERS,
      }
    );

    response.cookies.set(
      ANALYTICS_CONFIG.visitorCookieName,
      visitorId,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge:
          ANALYTICS_CONFIG.visitorCookieMaxAge,
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
