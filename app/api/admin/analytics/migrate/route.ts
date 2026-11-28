import { NextRequest, NextResponse } from "next/server";

import {
  FieldPath,
  Timestamp,
  type QueryDocumentSnapshot,
} from "firebase-admin/firestore";

import {
  AdminAuthError,
  requireAdmin,
} from "../../../../../lib/auth/admin";

import {
  ANALYTICS_COLLECTIONS,
  ANALYTICS_CONFIG,
  getAnalyticsDb,
  getAnalyticsDailyRef,
  getAnalyticsDateKey,
  getAnalyticsSummaryRef,
  getMigrationAuditCollection,
  normalizeVisitCount,
  serverTimestamp,
} from "../../../../../lib/analytics/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const MIGRATION_CONFIRMATION_TOKEN =
  "MIGRATE_ANALYTICS_V2";

const HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Content-Type-Options": "nosniff",
};

type DailyBucket = {
  totalVisits: number;
  uniqueVisitors: number;
};

type ScanResult = {
  totalVisits: number;
  uniqueVisitors: number;
  uniqueIPs: number;
  ipSetTruncated: boolean;
  batchesProcessed: number;
  undatedDocuments: number;
  undatedVisits: number;
  dailyBuckets: Map<string, DailyBucket>;
};

function jsonResponse(
  body: Record<string, unknown>,
  status = 200
) {
  return NextResponse.json(body, {
    status,
    headers: HEADERS,
  });
}

function parseTimestampToDate(
  value: unknown
): Date | null {
  if (value instanceof Timestamp) {
    const date = value.toDate();
    return Number.isFinite(date.getTime()) ? date : null;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = new Date(value);
    return Number.isFinite(parsed.getTime())
      ? parsed
      : null;
  }

  if (
    typeof value === "number" &&
    Number.isFinite(value)
  ) {
    const parsed = new Date(value);
    return Number.isFinite(parsed.getTime())
      ? parsed
      : null;
  }

  return null;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

function getOrCreateBucket(
  buckets: Map<string, DailyBucket>,
  dateKey: string
): DailyBucket {
  let bucket = buckets.get(dateKey);

  if (!bucket) {
    bucket = { totalVisits: 0, uniqueVisitors: 0 };
    buckets.set(dateKey, bucket);
  }

  return bucket;
}

/**
 * Streams the visitors collection in bounded cursor batches so the entire
 * collection is never loaded into serverless memory at once.
 */
async function scanHistoricalVisitors(): Promise<ScanResult> {
  const database = getAnalyticsDb();
  const visitorsRef = database.collection(
    ANALYTICS_COLLECTIONS.visitors
  );

  let lastDoc: QueryDocumentSnapshot | null = null;
  let totalVisits = 0;
  let uniqueVisitors = 0;
  let batchesProcessed = 0;
  let undatedDocuments = 0;
  let undatedVisits = 0;

  const uniqueIPSet = new Set<string>();
  let ipSetTruncated = false;

  const dailyBuckets = new Map<string, DailyBucket>();

  while (true) {
    let query = visitorsRef
      .orderBy(FieldPath.documentId())
      .limit(ANALYTICS_CONFIG.migrationBatchSize);

    if (lastDoc) {
      query = query.startAfter(lastDoc);
    }

    const snapshot = await query.get();

    if (snapshot.empty) {
      break;
    }

    batchesProcessed += 1;

    for (const doc of snapshot.docs) {
      const data = doc.data();

      // Match legacy admin analytics & track-visitor fallback behavior:
      // explicit 0 stays 0; missing/non-numeric defaults to 1.
      const visits = normalizeVisitCount(
        data.visits,
        1
      );

      totalVisits = Math.min(
        Number.MAX_SAFE_INTEGER,
        totalVisits + visits
      );
      uniqueVisitors += 1;

      const ip =
        typeof data.ip === "string"
          ? data.ip.trim()
          : "";

      if (
        ip &&
        ip !== "Unknown" &&
        ip !== "Unknown IP"
      ) {
        if (
          uniqueIPSet.size <
          ANALYTICS_CONFIG.maxUniqueIpSampleSize
        ) {
          uniqueIPSet.add(ip);
        } else if (!uniqueIPSet.has(ip)) {
          ipSetTruncated = true;
        }
      }

      const firstDate = parseTimestampToDate(
        data.firstVisitedAt
      );
      const lastDate = parseTimestampToDate(
        data.visitedAt
      );

      const effectiveFirstDate = firstDate ?? lastDate;
      const effectiveLastDate = lastDate ?? firstDate;

      if (!effectiveFirstDate || !effectiveLastDate) {
        undatedDocuments += 1;
        undatedVisits += visits;
        continue;
      }

      const firstKey = getAnalyticsDateKey(
        effectiveFirstDate
      );
      const lastKey = getAnalyticsDateKey(
        effectiveLastDate
      );

      // Bucket unique visitor acquisition on firstVisitedAt (fallback visitedAt)
      getOrCreateBucket(
        dailyBuckets,
        firstKey
      ).uniqueVisitors += 1;

      // Bucket historical visits on visitedAt (fallback firstVisitedAt)
      getOrCreateBucket(
        dailyBuckets,
        lastKey
      ).totalVisits += visits;
    }

    lastDoc = snapshot.docs[snapshot.docs.length - 1];

    if (
      snapshot.size < ANALYTICS_CONFIG.migrationBatchSize
    ) {
      break;
    }
  }

  return {
    totalVisits,
    uniqueVisitors,
    uniqueIPs: uniqueIPSet.size,
    ipSetTruncated,
    batchesProcessed,
    undatedDocuments,
    undatedVisits,
    dailyBuckets,
  };
}

/**
 * Writes daily rollup documents in bounded WriteBatch chunks (<= 400 ops each).
 */
async function writeDailyRollups(
  dailyBuckets: Map<string, DailyBucket>
): Promise<number> {
  const database = getAnalyticsDb();
  const entries = Array.from(dailyBuckets.entries()).sort(
    ([a], [b]) => a.localeCompare(b)
  );

  let written = 0;

  for (
    let i = 0;
    i < entries.length;
    i += ANALYTICS_CONFIG.writeBatchSize
  ) {
    const chunk = entries.slice(
      i,
      i + ANALYTICS_CONFIG.writeBatchSize
    );
    const batch = database.batch();
    const timestamp = serverTimestamp();

    for (const [dateKey, bucket] of chunk) {
      batch.set(getAnalyticsDailyRef(dateKey), {
        date: dateKey,
        schemaVersion: ANALYTICS_CONFIG.schemaVersion,
        totalVisits: bucket.totalVisits,
        uniqueVisitors: bucket.uniqueVisitors,
        seededByMigration: true,
        updatedAt: timestamp,
      });
    }

    await batch.commit();
    written += chunk.length;
  }

  return written;
}

/**
 * GET /api/admin/analytics/migrate
 * Inspects current migration state and recent audit logs.
 */
export async function GET() {
  try {
    await requireAdmin();

    const summarySnap =
      await getAnalyticsSummaryRef().get();
    const auditSnap = await getMigrationAuditCollection()
      .orderBy("completedAt", "desc")
      .limit(10)
      .get();

    const recentAudits = auditSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        mode: data.mode ?? null,
        status: data.status ?? null,
        adminUid: data.adminUid ?? null,
        adminEmail: data.adminEmail ?? null,
        totals: data.totals ?? null,
        batchesProcessed: data.batchesProcessed ?? 0,
        durationMs: data.durationMs ?? 0,
        error: data.error ?? null,
        completedAt:
          data.completedAt instanceof Timestamp
            ? data.completedAt.toDate().toISOString()
            : null,
      };
    });

    const summaryData = summarySnap.data() ?? null;

    return jsonResponse({
      success: true,
      migrationComplete:
        summaryData?.migrationComplete === true,
      trackingPaused:
        summaryData?.trackingPaused === true,
      migrationInProgress:
        summaryData?.migrationInProgress === true,
      summary: summaryData
        ? {
            schemaVersion:
              summaryData.schemaVersion ?? null,
            totalVisits: summaryData.totalVisits ?? 0,
            uniqueVisitors:
              summaryData.uniqueVisitors ?? 0,
            dailyRollupsEnabled:
              summaryData.dailyRollupsEnabled === true,
            undatedDocuments:
              summaryData.undatedDocuments ?? 0,
            undatedVisits:
              summaryData.undatedVisits ?? 0,
            migratedBy: summaryData.migratedBy ?? null,
            migratedAt:
              summaryData.migratedAt instanceof Timestamp
                ? summaryData.migratedAt
                    .toDate()
                    .toISOString()
                : null,
          }
        : null,
      recentAudits,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return jsonResponse(
        { success: false, error: error.message },
        error.status
      );
    }

    console.error(
      "Failed to fetch migration status:",
      error
    );

    return jsonResponse(
      {
        success: false,
        error: "Unable to read migration status.",
      },
      500
    );
  }
}

/**
 * POST /api/admin/analytics/migrate
 * Body:
 *   Dry run:  { "dryRun": true }
 *   Execute:  { "dryRun": false, "confirm": "MIGRATE_ANALYTICS_V2" }
 */
export async function POST(request: NextRequest) {
  const startedAtMs = Date.now();

  try {
    const admin = await requireAdmin();

    // Same-origin CSRF protection for authenticated admin POSTs
    const origin = request.headers.get("origin");
    if (!origin || origin !== request.nextUrl.origin) {
      return jsonResponse(
        { success: false, error: "Invalid request origin." },
        403
      );
    }

    const contentType = request.headers
      .get("content-type")
      ?.split(";")[0]
      ?.trim()
      .toLowerCase();

    if (contentType !== "application/json") {
      return jsonResponse(
        { success: false, error: "JSON body required." },
        415
      );
    }

    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return jsonResponse(
        { success: false, error: "Invalid JSON body." },
        400
      );
    }

    if (
      !rawBody ||
      typeof rawBody !== "object" ||
      Array.isArray(rawBody)
    ) {
      return jsonResponse(
        { success: false, error: "Invalid request payload." },
        400
      );
    }

    const payload = rawBody as Record<string, unknown>;
    const dryRun = payload.dryRun !== false;
    const confirm =
      typeof payload.confirm === "string"
        ? payload.confirm.trim()
        : "";

    if (
      !dryRun &&
      confirm !== MIGRATION_CONFIRMATION_TOKEN
    ) {
      return jsonResponse(
        {
          success: false,
          error: `Explicit confirmation required. Send { "dryRun": false, "confirm": "${MIGRATION_CONFIRMATION_TOKEN}" }.`,
        },
        400
      );
    }

    const database = getAnalyticsDb();
    const summaryRef = getAnalyticsSummaryRef();
    const auditCol = getMigrationAuditCollection();

    // ----------------------------------------
    // DRY RUN MODE (Read-only bounded scan)
    // ----------------------------------------
    if (dryRun) {
      const existingSnap = await summaryRef.get();
      const existing = existingSnap.data();

      const scan = await scanHistoricalVisitors();
      const durationMs = Date.now() - startedAtMs;

      const sortedDailyPreview = Array.from(
        scan.dailyBuckets.entries()
      )
        .sort(([a], [b]) => b.localeCompare(a))
        .slice(0, 14)
        .map(([date, bucket]) => ({
          date,
          ...bucket,
        }));

      await auditCol.add({
        mode: "dry_run",
        status: "completed",
        adminUid: admin.uid,
        adminEmail: admin.email,
        schemaVersion: ANALYTICS_CONFIG.schemaVersion,
        batchesProcessed: scan.batchesProcessed,
        durationMs,
        totals: {
          totalVisits: scan.totalVisits,
          uniqueVisitors: scan.uniqueVisitors,
          uniqueIPs: scan.uniqueIPs,
          dailyBucketsCount: scan.dailyBuckets.size,
          undatedDocuments: scan.undatedDocuments,
          undatedVisits: scan.undatedVisits,
        },
        completedAt: serverTimestamp(),
      });

      return jsonResponse({
        success: true,
        mode: "dry_run",
        alreadyMigrated:
          existing?.migrationComplete === true,
        schemaVersion: ANALYTICS_CONFIG.schemaVersion,
        totals: {
          totalVisits: scan.totalVisits,
          uniqueVisitors: scan.uniqueVisitors,
          uniqueIPs: scan.uniqueIPs,
          ipSetTruncated: scan.ipSetTruncated,
          dailyBucketsCount: scan.dailyBuckets.size,
          undatedDocuments: scan.undatedDocuments,
          undatedVisits: scan.undatedVisits,
        },
        recentDailyPreview: sortedDailyPreview,
        batchesProcessed: scan.batchesProcessed,
        durationMs,
        note: "Historical multi-day visits are bucketed by visitedAt (UTC) and unique visitors by firstVisitedAt (UTC). Live tracking after activation records every visit on its exact UTC date.",
      });
    }

    // ----------------------------------------
    // LIVE MIGRATION: ACQUIRE LOCK & PAUSE WRITES
    // ----------------------------------------
    let lockAcquired = false;

    const lockResult = await database.runTransaction(
      async (transaction) => {
        const snap = await transaction.get(summaryRef);
        const current = snap.data();

        if (
          current?.migrationComplete === true &&
          current.schemaVersion ===
            ANALYTICS_CONFIG.schemaVersion
        ) {
          return { status: "already_migrated" as const };
        }

        const lockStarted =
          current?.migrationStartedAt instanceof Timestamp
            ? current.migrationStartedAt.toMillis()
            : 0;

        const lockStillFresh =
          current?.migrationInProgress === true &&
          Date.now() - lockStarted <
            ANALYTICS_CONFIG.migrationLockTimeoutMs;

        if (lockStillFresh) {
          return { status: "in_progress" as const };
        }

        transaction.set(
          summaryRef,
          {
            schemaVersion: ANALYTICS_CONFIG.schemaVersion,
            migrationComplete: false,
            trackingPaused: true,
            migrationInProgress: true,
            migrationStartedAt: serverTimestamp(),
            migrationStartedBy: admin.uid,
          },
          { merge: true }
        );

        return { status: "acquired" as const };
      }
    );

    if (lockResult.status === "already_migrated") {
      return jsonResponse(
        {
          success: false,
          error:
            "Historical migration has already completed for this schema version. Repeat execution is blocked.",
        },
        409
      );
    }

    if (lockResult.status === "in_progress") {
      return jsonResponse(
        {
          success: false,
          error:
            "Another migration run is currently in progress. Please wait for it to finish.",
        },
        409
      );
    }

    lockAcquired = true;

    try {
      // Allow any in-flight /api/track-visitor transactions to settle cleanly
      await sleep(ANALYTICS_CONFIG.migrationSettleMs);

      // 1. Bounded historical scan
      const scan = await scanHistoricalVisitors();

      // 2. Write analytics_daily/YYYY-MM-DD in bounded batches
      const dailyBucketsWritten = await writeDailyRollups(
        scan.dailyBuckets
      );

      // 3. Atomically finalize global counters & resume live tracking
      await summaryRef.set(
        {
          schemaVersion: ANALYTICS_CONFIG.schemaVersion,
          totalVisits: scan.totalVisits,
          uniqueVisitors: scan.uniqueVisitors,
          undatedDocuments: scan.undatedDocuments,
          undatedVisits: scan.undatedVisits,
          dailyBucketsSeeded: dailyBucketsWritten,
          dailyRollupsEnabled: true,
          migrationComplete: true,
          trackingPaused: false,
          migrationInProgress: false,
          migratedBy: admin.uid,
          migratedByEmail: admin.email,
          migratedAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      lockAcquired = false;

      const durationMs = Date.now() - startedAtMs;

      // 4. Write migration audit log
      await auditCol.add({
        mode: "migrate",
        status: "completed",
        adminUid: admin.uid,
        adminEmail: admin.email,
        schemaVersion: ANALYTICS_CONFIG.schemaVersion,
        batchesProcessed: scan.batchesProcessed,
        durationMs,
        totals: {
          totalVisits: scan.totalVisits,
          uniqueVisitors: scan.uniqueVisitors,
          uniqueIPs: scan.uniqueIPs,
          dailyBucketsWritten,
          undatedDocuments: scan.undatedDocuments,
          undatedVisits: scan.undatedVisits,
        },
        completedAt: serverTimestamp(),
      });

      return jsonResponse({
        success: true,
        mode: "migrate",
        migrationComplete: true,
        trackingPaused: false,
        schemaVersion: ANALYTICS_CONFIG.schemaVersion,
        totals: {
          totalVisits: scan.totalVisits,
          uniqueVisitors: scan.uniqueVisitors,
          uniqueIPs: scan.uniqueIPs,
          dailyBucketsWritten,
          undatedDocuments: scan.undatedDocuments,
          undatedVisits: scan.undatedVisits,
        },
        batchesProcessed: scan.batchesProcessed,
        durationMs,
      });
    } catch (migrationError) {
      const durationMs = Date.now() - startedAtMs;
      const errorMessage =
        migrationError instanceof Error
          ? migrationError.message
          : "Unknown migration error.";

      // Always release pause & lock so live tracking never stays stuck
      if (lockAcquired) {
        try {
          await summaryRef.set(
            {
              trackingPaused: false,
              migrationInProgress: false,
              lastMigrationError: errorMessage,
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          );
        } catch (cleanupError) {
          console.error(
            "Failed to release migration lock:",
            cleanupError
          );
        }
      }

      try {
        await auditCol.add({
          mode: "migrate",
          status: "failed",
          adminUid: admin.uid,
          adminEmail: admin.email,
          schemaVersion: ANALYTICS_CONFIG.schemaVersion,
          durationMs,
          error: errorMessage,
          completedAt: serverTimestamp(),
        });
      } catch (auditError) {
        console.error(
          "Failed to write migration failure audit:",
          auditError
        );
      }

      throw migrationError;
    }
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return jsonResponse(
        { success: false, error: error.message },
        error.status
      );
    }

    console.error("Analytics migration failed:", error);

    return jsonResponse(
      {
        success: false,
        error: "Analytics migration failed.",
      },
      500
    );
  }
}
