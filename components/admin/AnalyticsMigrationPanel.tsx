"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Database,
  Play,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Calendar,
  Lock,
} from "lucide-react";

const CONFIRMATION_TOKEN = "MIGRATE_ANALYTICS_V2";

interface MigrationSummary {
  schemaVersion: number | null;
  totalVisits: number;
  uniqueVisitors: number;
  dailyRollupsEnabled: boolean;
  undatedDocuments: number;
  undatedVisits: number;
  migratedBy: string | null;
  migratedAt: string | null;
}

interface AuditEntry {
  id: string;
  mode: string | null;
  status: string | null;
  adminEmail: string | null;
  batchesProcessed: number;
  durationMs: number;
  error: string | null;
  completedAt: string | null;
}

interface StatusResponse {
  success: boolean;
  migrationComplete: boolean;
  trackingPaused: boolean;
  migrationInProgress: boolean;
  summary: MigrationSummary | null;
  recentAudits: AuditEntry[];
  error?: string;
}

interface DailyPreviewItem {
  date: string;
  totalVisits: number;
  uniqueVisitors: number;
}

interface ActionResult {
  httpStatus: number;
  success: boolean;
  mode?: "dry_run" | "migrate";
  alreadyMigrated?: boolean;
  migrationComplete?: boolean;
  trackingPaused?: boolean;
  totals?: {
    totalVisits: number;
    uniqueVisitors: number;
    uniqueIPs: number;
    dailyBucketsCount?: number;
    dailyBucketsWritten?: number;
    undatedDocuments: number;
    undatedVisits: number;
  };
  recentDailyPreview?: DailyPreviewItem[];
  batchesProcessed?: number;
  durationMs?: number;
  note?: string;
  error?: string;
}

export default function AnalyticsMigrationPanel() {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [statusError, setStatusError] = useState("");

  const [confirmInput, setConfirmInput] = useState("");
  const [activeAction, setActiveAction] = useState<
    "dry_run" | "migrate" | "repeat_test" | null
  >(null);
  const [lastResult, setLastResult] = useState<ActionResult | null>(null);

  const fetchStatus = useCallback(async () => {
    setLoadingStatus(true);
    setStatusError("");

    try {
      const response = await fetch("/api/admin/analytics/migrate", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });

      const data = (await response.json()) as StatusResponse;

      if (!response.ok || !data.success) {
        setStatusError(
          data.error || `Failed to load status (HTTP ${response.status}).`
        );
        return;
      }

      setStatus(data);
    } catch {
      setStatusError("Network error while checking migration status.");
    } finally {
      setLoadingStatus(false);
    }
  }, []);

  useEffect(() => {
    void fetchStatus();
  }, [fetchStatus]);

  const runMigrationRequest = async (
    mode: "dry_run" | "migrate" | "repeat_test"
  ) => {
    if (activeAction) return;

    setActiveAction(mode);
    setLastResult(null);

    try {
      const payload =
        mode === "dry_run"
          ? { dryRun: true }
          : {
              dryRun: false,
              confirm:
                mode === "repeat_test"
                  ? CONFIRMATION_TOKEN
                  : confirmInput.trim(),
            };

      const response = await fetch("/api/admin/analytics/migrate", {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as Omit<ActionResult, "httpStatus">;

      setLastResult({
        httpStatus: response.status,
        ...data,
      });

      if (mode === "migrate" && response.ok && data.success) {
        setConfirmInput("");
      }

      await fetchStatus();
    } catch {
      setLastResult({
        httpStatus: 0,
        success: false,
        error: "Request failed. Check your connection and try again.",
      });
    } finally {
      setActiveAction(null);
    }
  };

  const isMigrated = status?.migrationComplete === true;
  const isConfirmValid = confirmInput.trim() === CONFIRMATION_TOKEN;
  const isBusy = activeAction !== null || loadingStatus;

  return (
    <section className="my-6 rounded-2xl border border-surfaceBorder bg-surface p-4 sm:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-surfaceBorder pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Database className="w-3.5 h-3.5" />
            <span>Analytics Node 2.0 • Phase 4</span>
          </div>
          <h2 className="mt-1 text-lg sm:text-xl font-extrabold text-foreground">
            Historical Data Migration Controls
          </h2>
          <p className="mt-0.5 text-xs text-foreground/65">
            Run a read-only dry run first, verify totals match your dashboard,
            then execute the migration once.
          </p>
        </div>

        <button
          type="button"
          onClick={() => void fetchStatus()}
          disabled={isBusy}
          className="inline-flex items-center gap-1.5 rounded-xl border border-surfaceBorder bg-background px-3 py-2 text-xs font-bold text-foreground hover:border-primary/50 disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw
            className={`w-3.5 h-3.5 ${loadingStatus ? "animate-spin" : ""}`}
          />
          <span>Refresh Status</span>
        </button>
      </div>

      {/* Live Status Bar */}
      {statusError ? (
        <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs font-semibold text-rose-500 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{statusError}</span>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-xl border border-surfaceBorder bg-background p-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/55 block">
              Migration State
            </span>
            <span
              className={`mt-1 inline-flex items-center gap-1 text-xs font-extrabold ${
                isMigrated
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-amber-600 dark:text-amber-400"
              }`}
            >
              {isMigrated ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" /> Complete
                </>
              ) : (
                <>
                  <ShieldAlert className="w-3.5 h-3.5" /> Pending
                </>
              )}
            </span>
          </div>

          <div className="rounded-xl border border-surfaceBorder bg-background p-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/55 block">
              Live Tracking
            </span>
            <span
              className={`mt-1 block text-xs font-extrabold ${
                status?.trackingPaused
                  ? "text-rose-500"
                  : "text-emerald-600 dark:text-emerald-400"
              }`}
            >
              {status?.trackingPaused ? "Paused" : "Active"}
            </span>
          </div>

          <div className="rounded-xl border border-surfaceBorder bg-background p-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/55 block">
              Global Visits
            </span>
            <span className="mt-1 block text-sm font-black text-foreground">
              {status?.summary ? status.summary.totalVisits : "—"}
            </span>
          </div>

          <div className="rounded-xl border border-surfaceBorder bg-background p-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/55 block">
              Unique Visitors
            </span>
            <span className="mt-1 block text-sm font-black text-foreground">
              {status?.summary ? status.summary.uniqueVisitors : "—"}
            </span>
          </div>
        </div>
      )}

      {/* Action 1: Read-Only Dry Run */}
      <div className="rounded-xl border border-surfaceBorder bg-background p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
              Step 1 • Safe Preview
            </p>
            <p className="text-xs text-foreground/70 mt-0.5">
              Scans all historical visitor records in bounded batches without
              writing to Firestore.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void runMigrationRequest("dry_run")}
            disabled={isBusy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-extrabold text-white hover:bg-primaryHover disabled:opacity-50 cursor-pointer"
          >
            {activeAction === "dry_run" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            <span>
              {activeAction === "dry_run"
                ? "Running Dry Run..."
                : "Run Dry Run"}
            </span>
          </button>
        </div>
      </div>

      {/* Action 2: Confirmed Live Migration (or Repeat-Lock Test once complete) */}
      {!isMigrated ? (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-4 space-y-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Step 2 • Execute Live Migration (One-Time)
            </p>
            <p className="text-xs text-foreground/75 mt-0.5">
              Temporarily pauses tracking writes, seeds{" "}
              <code className="font-mono text-[11px]">
                analytics_stats/global
              </code>{" "}
              and{" "}
              <code className="font-mono text-[11px]">analytics_daily/*</code>,
              then resumes live counters automatically.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              placeholder={`Type ${CONFIRMATION_TOKEN} to unlock`}
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              disabled={isBusy}
              className="flex-1 rounded-xl border border-surfaceBorder bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-amber-500"
            />

            <button
              type="button"
              onClick={() => void runMigrationRequest("migrate")}
              disabled={isBusy || !isConfirmValid}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-xs font-extrabold text-black hover:bg-amber-400 disabled:opacity-40 cursor-pointer"
            >
              {activeAction === "migrate" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              <span>
                {activeAction === "migrate"
                  ? "Migrating..."
                  : "Execute Migration"}
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-xs font-extrabold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Migration Complete &amp; Live Counters Active</span>
            </p>
            <p className="text-[11px] text-foreground/70">
              Completed{" "}
              {status?.summary?.migratedAt
                ? new Date(status.summary.migratedAt).toLocaleString()
                : "recently"}
              . Repeat execution is locked.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void runMigrationRequest("repeat_test")}
            disabled={isBusy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-background px-3.5 py-2.5 text-xs font-bold text-foreground hover:border-emerald-500 disabled:opacity-50 cursor-pointer"
          >
            {activeAction === "repeat_test" ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Lock className="w-3.5 h-3.5" />
            )}
            <span>Test Repeat Lock (Expect 409)</span>
          </button>
        </div>
      )}

      {/* Last Run Output Box */}
      {lastResult && (
        <div
          className={`rounded-xl border p-4 space-y-3 ${
            lastResult.success
              ? "border-emerald-500/40 bg-emerald-500/5"
              : lastResult.httpStatus === 409
              ? "border-amber-500/40 bg-amber-500/10"
              : "border-rose-500/40 bg-rose-500/10"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-foreground">
              Response • HTTP {lastResult.httpStatus || "ERR"} (
              {lastResult.mode || "status"})
            </span>
            {lastResult.durationMs !== undefined && (
              <span className="font-mono text-[11px] text-foreground/65">
                {lastResult.batchesProcessed ?? 0} batch(es) •{" "}
                {lastResult.durationMs}ms
              </span>
            )}
          </div>

          {lastResult.error && (
            <p className="text-xs font-semibold text-foreground/90">
              {lastResult.error}
            </p>
          )}

          {lastResult.totals && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg bg-background/80 border border-surfaceBorder p-2.5">
                <span className="text-[10px] uppercase text-foreground/55 block">
                  Total Visits
                </span>
                <span className="font-black text-foreground">
                  {lastResult.totals.totalVisits}
                </span>
              </div>
              <div className="rounded-lg bg-background/80 border border-surfaceBorder p-2.5">
                <span className="text-[10px] uppercase text-foreground/55 block">
                  Unique Visitors
                </span>
                <span className="font-black text-foreground">
                  {lastResult.totals.uniqueVisitors}
                </span>
              </div>
              <div className="rounded-lg bg-background/80 border border-surfaceBorder p-2.5">
                <span className="text-[10px] uppercase text-foreground/55 block">
                  Unique IPs
                </span>
                <span className="font-black text-foreground">
                  {lastResult.totals.uniqueIPs}
                </span>
              </div>
              <div className="rounded-lg bg-background/80 border border-surfaceBorder p-2.5">
                <span className="text-[10px] uppercase text-foreground/55 block">
                  Daily Buckets
                </span>
                <span className="font-black text-foreground">
                  {lastResult.totals.dailyBucketsWritten ??
                    lastResult.totals.dailyBucketsCount ??
                    0}
                </span>
              </div>
              <div className="rounded-lg bg-background/80 border border-surfaceBorder p-2.5">
                <span className="text-[10px] uppercase text-foreground/55 block">
                  Undated Docs
                </span>
                <span className="font-black text-foreground">
                  {lastResult.totals.undatedDocuments}
                </span>
              </div>
              <div className="rounded-lg bg-background/80 border border-surfaceBorder p-2.5">
                <span className="text-[10px] uppercase text-foreground/55 block">
                  Undated Visits
                </span>
                <span className="font-black text-foreground">
                  {lastResult.totals.undatedVisits}
                </span>
              </div>
            </div>
          )}

          {lastResult.recentDailyPreview &&
            lastResult.recentDailyPreview.length > 0 && (
              <div className="pt-2 border-t border-surfaceBorder">
                <p className="text-[11px] font-bold text-foreground/70 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Recent Daily Buckets Preview (UTC)</span>
                </p>
                <div className="max-h-40 overflow-y-auto space-y-1 font-mono text-[11px]">
                  {lastResult.recentDailyPreview.map((day) => (
                    <div
                      key={day.date}
                      className="flex items-center justify-between rounded-md bg-background/70 px-2.5 py-1.5 border border-surfaceBorder/60"
                    >
                      <span>{day.date}</span>
                      <span>
                        {day.totalVisits} visits • {day.uniqueVisitors} unique
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      )}

      {/* Recent Migration Audits */}
      {status?.recentAudits && status.recentAudits.length > 0 && (
        <div className="pt-2 border-t border-surfaceBorder">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-foreground/55 mb-2">
            Recent Migration Audit Logs
          </p>
          <div className="space-y-1.5">
            {status.recentAudits.slice(0, 5).map((audit) => (
              <div
                key={audit.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-surfaceBorder bg-background px-3 py-2 text-[11px]"
              >
                <span className="font-mono font-bold text-foreground">
                  {audit.mode} • {audit.status}
                </span>
                <span className="text-foreground/60">
                  {audit.durationMs}ms •{" "}
                  {audit.completedAt
                    ? new Date(audit.completedAt).toLocaleString()
                    : "pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
