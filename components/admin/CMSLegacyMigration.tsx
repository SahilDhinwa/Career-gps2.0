
"use client";

import { useCallback, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  ExternalLink,
  Loader2,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

type LegacyRecord = {
  id: string;
  kind: "video" | "document";
  title: string;
  url: string;
  version: string | null;
};

type ScanResponse = {
  success: boolean;
  records: LegacyRecord[];
  totalScanned: number;
};

export default function CMSLegacyMigration({
  onMigrated,
}: {
  onMigrated?: () => void;
}) {
  const [records, setRecords] = useState<LegacyRecord[]>([]);
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [totalScanned, setTotalScanned] = useState(0);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [verified, setVerified] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const scan = useCallback(async () => {
    setScanning(true);
    setError("");
    setMessage("");
    setVerified([]);

    try {
      const response = await fetch(
        "/api/admin/cms/legacy-migration",
        {
          credentials: "same-origin",
          cache: "no-store",
        }
      );

      const data: ScanResponse & { error?: string } =
        await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Unable to scan legacy content."
        );
      }

      setRecords(data.records);
      setTotalScanned(data.totalScanned);
      setScanned(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Scan failed."
      );
    } finally {
      setScanning(false);
    }
  }, []);

  async function migrate(record: LegacyRecord) {
    if (
      !record.version ||
      !verified.includes(record.id) ||
      busyId
    ) {
      return;
    }

    const confirmed = window.confirm(
      `Confirm that "${record.title}" was already intentionally public. Mark this legacy resource as published?`
    );

    if (!confirmed) return;

    setBusyId(record.id);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/cms/legacy-migration",
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            kind: record.kind,
            id: record.id,
            version: record.version,
            confirm: true,
          }),
        }
      );

      const data: {
        success?: boolean;
        error?: string;
      } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Migration failed."
        );
      }

      setRecords((current) =>
        current.filter(
          (item) =>
            !(item.id === record.id && item.kind === record.kind)
        )
      );

      setVerified((current) =>
        current.filter((id) => id !== record.id)
      );

      setMessage(
        `"${record.title}" migrated successfully.`
      );

      onMigrated?.();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Migration failed."
      );
    } finally {
      setBusyId(null);
    }
  }

  return (
    <section className="mt-8 rounded-2xl border border-amber-900/50 bg-[#110e08] p-5">
      <div className="mb-4 flex items-start gap-3">
        <Database
          size={22}
          className="mt-1 shrink-0 text-amber-400"
        />
        <div>
          <h3 className="text-lg font-bold text-white">
            Legacy Content Migration
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            Review older CMS records missing publication
            status. Master admin only.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => void scan()}
        disabled={scanning || busyId !== null}
        className="inline-flex items-center gap-2 rounded-xl border border-amber-700/60 bg-amber-950/40 px-4 py-3 text-sm font-medium text-amber-300 disabled:opacity-50"
      >
        {scanning ? (
          <Loader2 size={17} className="animate-spin" />
        ) : (
          <RefreshCw size={17} />
        )}
        {scanning ? "Scanning..." : "Scan Legacy Content"}
      </button>

      {error && (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-red-900/60 p-3 text-sm text-red-400"
        >
          {error}
        </p>
      )}

      {message && (
        <p
          role="status"
          className="mt-4 flex items-center gap-2 text-sm text-emerald-400"
        >
          <CheckCircle2 size={17} />
          {message}
        </p>
      )}

      {scanned && (
        <p className="mt-4 text-sm text-zinc-400">
          Scanned {totalScanned} records. Found{" "}
          <strong className="text-amber-300">
            {records.length}
          </strong>{" "}
          legacy records requiring review.
        </p>
      )}

      {scanned && records.length === 0 && (
        <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
          <ShieldCheck size={18} />
          No remaining legacy records without status.
        </p>
      )}

      <div className="mt-5 space-y-4">
        {records.map((record) => {
          const isVerified = verified.includes(record.id);
          const isBusy = busyId === record.id;

          return (
            <div
              key={`${record.kind}:${record.id}`}
              className="rounded-xl border border-amber-900/40 bg-black/30 p-4"
            >
              <p className="text-xs uppercase tracking-wider text-amber-400">
                {record.kind === "video"
                  ? "Video Reel"
                  : "Study Asset"}
              </p>

              <h4 className="mt-2 font-semibold text-white">
                {record.title}
              </h4>

              <p className="mt-2 break-all font-mono text-xs text-zinc-500">
                {record.id}
              </p>

              {/^https:\/\//i.test(record.url) && (
                <a
                  href={record.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-400"
                >
                  Inspect Resource
                  <ExternalLink size={14} />
                </a>
              )}

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  checked={isVerified}
                  disabled={isBusy}
                  onChange={(event) => {
                    setVerified((current) =>
                      event.target.checked
                        ? [...current, record.id]
                        : current.filter(
                            (id) => id !== record.id
                          )
                    );
                  }}
                  className="mt-1 accent-amber-500"
                />
                I verified this resource was already
                intentionally public.
              </label>

              <button
                type="button"
                disabled={
                  !isVerified ||
                  !record.version ||
                  busyId !== null
                }
                onClick={() => void migrate(record)}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-700 bg-amber-900/30 px-4 py-2.5 text-sm font-medium text-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isBusy ? (
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                ) : (
                  <ShieldCheck size={16} />
                )}
                {isBusy
                  ? "Migrating..."
                  : "Verify & Migrate"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-lg border border-amber-900/40 p-3 text-xs leading-relaxed text-amber-300/80">
        <AlertTriangle size={17} className="shrink-0" />
        Migration updates Firestore document versions.
        Existing pending edit or deletion requests for
        migrated documents must be rejected and submitted
        again.
      </div>
    </section>
  );
}
