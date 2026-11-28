import "server-only";

import { createHash } from "node:crypto";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminDb } from "../firebase-admin";

export const ANALYTICS_COLLECTIONS = {
  visitors: "visitors",
  statistics: "analytics_stats",
  daily: "analytics_daily",
  sessions: "analytics_sessions",
  rateLimits: "analytics_rate_limits",
  migrationAudit: "analytics_migration_logs",
} as const;

export const ANALYTICS_SUMMARY_ID = "global";

export const ANALYTICS_CONFIG = {
  schemaVersion: 1,
  recentVisitorsLimit: 100,
  visitorCookieName: "atreya_visitor_id",
  visitorCookieMaxAge: 60 * 60 * 24 * 365,
  sessionRetentionMs: 7 * 24 * 60 * 60 * 1000,
  rateLimitWindowMs: 60 * 1000,
  rateLimitMaxRequests: 30,
  maxNameLength: 80,
  maxPayloadBytes: 2048,
  migrationBatchSize: 250,
  writeBatchSize: 400,
  migrationSettleMs: 1500,
  migrationLockTimeoutMs: 10 * 60 * 1000,
  maxUniqueIpSampleSize: 50000,
} as const;

export type TrackEvent =
  | "visit"
  | "profile"
  | "location";

export type Coordinates = {
  lat: number;
  lng: number;
  accuracy?: number;
};

export interface AnalyticsSummary {
  schemaVersion: number;
  totalVisits: number;
  uniqueVisitors: number;
  migrationComplete: boolean;
  dailyRollupsEnabled?: boolean;
  trackingPaused?: boolean;
  migrationInProgress?: boolean;
  undatedDocuments?: number;
  undatedVisits?: number;
  migratedBy?: string;
}

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function getAnalyticsDb() {
  return getAdminDb();
}

export function getAnalyticsSummaryRef() {
  return getAnalyticsDb()
    .collection(ANALYTICS_COLLECTIONS.statistics)
    .doc(ANALYTICS_SUMMARY_ID);
}

export function getAnalyticsDateKey(
  date: Date = new Date()
): string {
  return date.toISOString().slice(0, 10);
}

export function isValidAnalyticsDateKey(
  value: unknown
): value is string {
  return (
    typeof value === "string" &&
    DATE_KEY_PATTERN.test(value)
  );
}

export function getAnalyticsDailyRef(dateKey: string) {
  if (!isValidAnalyticsDateKey(dateKey)) {
    throw new Error("Invalid analytics date key.");
  }

  return getAnalyticsDb()
    .collection(ANALYTICS_COLLECTIONS.daily)
    .doc(dateKey);
}

export function getMigrationAuditCollection() {
  return getAnalyticsDb().collection(
    ANALYTICS_COLLECTIONS.migrationAudit
  );
}

export function isValidAnalyticsId(
  value: unknown
): value is string {
  return (
    typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value
    )
  );
}

export function getVisitorRef(visitorId: string) {
  if (!isValidAnalyticsId(visitorId)) {
    throw new Error("Invalid visitor identifier.");
  }

  return getAnalyticsDb()
    .collection(ANALYTICS_COLLECTIONS.visitors)
    .doc(visitorId);
}

export function getAnalyticsSessionRef(
  visitorId: string,
  sessionId: string
) {
  if (
    !isValidAnalyticsId(visitorId) ||
    !isValidAnalyticsId(sessionId)
  ) {
    throw new Error("Invalid analytics session.");
  }

  const documentId = createHash("sha256")
    .update(`${visitorId}:${sessionId}`)
    .digest("hex");

  return getAnalyticsDb()
    .collection(ANALYTICS_COLLECTIONS.sessions)
    .doc(documentId);
}

export function normalizeVisitorName(
  value: unknown
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .slice(0, ANALYTICS_CONFIG.maxNameLength);
}

export function normalizeVisitCount(
  value: unknown,
  fallback = 0
): number {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    return fallback;
  }

  return Math.min(
    Number.MAX_SAFE_INTEGER,
    Math.max(0, Math.floor(value))
  );
}

export function isValidCoordinates(
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
    (coords.accuracy === undefined ||
      (typeof coords.accuracy === "number" &&
        Number.isFinite(coords.accuracy) &&
        coords.accuracy >= 0))
  );
}

export function serverTimestamp() {
  return FieldValue.serverTimestamp();
}
