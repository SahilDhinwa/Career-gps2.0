
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  CheckCircle2,
  Clock3,
  FileText,
  Film,
  Loader2,
  RefreshCw,
  Send,
  ShieldCheck,
  XCircle,
} from "lucide-react";

type SubmissionStatus =
  | "draft"
  | "review"
  | "approved"
  | "rejected";

type Submission = {
  id: string;
  kind: "video" | "document";
  operation: "create" | "update";
  targetId: string | null;
  status: SubmissionStatus;
  content: {
    title: string;
    url: string;
    prof?: string;
    type?: string;
  };
  submittedBy: string | null;
  reviewedBy: string | null;
  reviewNote: string | null;
  createdAt: string | null;
};

type QueueResponse = {
  success: boolean;
  submissions: Submission[];
};

type Notice = {
  type: "success" | "error";
  message: string;
};

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-700/60 bg-emerald-950/60 px-3 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-900/60 disabled:opacity-40";

function getError(value: unknown, fallback: string) {
  if (
    value &&
    typeof value === "object" &&
    "error" in value &&
    typeof value.error === "string"
  ) {
    return value.error;
  }

  return fallback;
}

async function request(
  url: string,
  method: "GET" | "PATCH",
  body?: Record<string, string>
) {
  const response = await fetch(url, {
    method,
    credentials: "same-origin",
    cache: "no-store",
    headers: body
      ? { "Content-Type": "application/json" }
      : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  const result: unknown = await response
    .json()
    .catch(() => null);

  if (!response.ok) {
    throw new Error(
      getError(result, `Request failed (${response.status}).`)
    );
  }

  return result;
}

export default function CMSReviewQueue({
  refreshKey = 0,
  onPublished,
}: {
  refreshKey?: number;
  onPublished?: () => void;
}) {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [filter, setFilter] =
    useState<SubmissionStatus | "all">("review");

  const load = useCallback(async () => {
    setLoading(true);

    try {
      const result = (await request(
        "/api/admin/cms/submissions",
        "GET"
      )) as QueueResponse;

      if (
        !result.success ||
        !Array.isArray(result.submissions)
      ) {
        throw new Error("Invalid submission response.");
      }

      setItems(result.submissions);
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to load submissions.",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load, refreshKey]);

  async function act(
    item: Submission,
    action: "submit" | "approve" | "reject"
  ) {
    if (busyId) return;

    let reviewNote = "";

    if (action === "reject") {
      const entered = window.prompt(
        "Enter rejection reason (3–1000 characters):"
      );

      if (entered === null) return;

      reviewNote = entered.trim();

      if (
        reviewNote.length < 3 ||
        reviewNote.length > 1000
      ) {
        setNotice({
          type: "error",
          message:
            "Rejection reason must contain 3–1000 characters.",
        });
        return;
      }
    }

    if (
      action === "approve" &&
      !window.confirm(
        `Approve and publish "${item.content.title}"?`
      )
    ) {
      return;
    }

    setBusyId(item.id);
    setNotice(null);

    try {
      const result = (await request(
        `/api/admin/cms/submissions/${encodeURIComponent(
          item.id
        )}`,
        "PATCH",
        action === "reject"
          ? { action, reviewNote }
          : { action }
      )) as { message?: string };

      setNotice({
        type: "success",
        message: result.message ?? "Action completed.",
      });

      await load();

      if (action === "approve") {
        onPublished?.();
      }
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Review action failed.",
      });
    } finally {
      setBusyId(null);
    }
  }

  const filtered = items.filter(
    (item) => filter === "all" || item.status === filter
  );

  const pendingCount = items.filter(
    (item) => item.status === "review"
  ).length;

  return (
    <section className="mt-8 border-t border-emerald-900/50 pt-8 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={20}
              className="text-emerald-400"
            />
            <h2 className="text-xl font-semibold">
              CMS Review Queue
            </h2>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            {pendingCount} pending review
            {pendingCount === 1 ? "" : "s"}
          </p>
        </div>

        <button
          type="button"
          className={buttonClass}
          onClick={() => void load()}
          disabled={loading || busyId !== null}
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {(
          [
            "review",
            "draft",
            "approved",
            "rejected",
            "all",
          ] as const
        ).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-lg border px-3 py-2 text-xs capitalize ${
              filter === value
                ? "border-emerald-500 bg-emerald-950 text-emerald-300"
                : "border-zinc-800 text-zinc-400"
            }`}
          >
            {value === "review" ? "Pending" : value}
          </button>
        ))}
      </div>

      {notice && (
        <div
          role="status"
          className={`mt-5 rounded-xl border p-4 text-sm ${
            notice.type === "error"
              ? "border-red-900 text-red-300"
              : "border-emerald-900 text-emerald-300"
          }`}
        >
          {notice.message}
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-2 py-10 text-zinc-400">
          <Loader2 className="animate-spin" size={18} />
          Loading submissions...
        </div>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-sm text-zinc-500">
          No submissions in this category.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-emerald-900/40 bg-black/30 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  {item.kind === "video" ? (
                    <Film
                      size={20}
                      className="mt-1 shrink-0 text-emerald-400"
                    />
                  ) : (
                    <FileText
                      size={20}
                      className="mt-1 shrink-0 text-emerald-400"
                    />
                  )}

                  <div className="min-w-0">
                    <h3 className="break-words font-semibold">
                      {item.content.title}
                    </h3>

                    <p className="mt-1 text-xs capitalize text-zinc-400">
                      {item.operation} · {item.kind} ·{" "}
                      {item.status}
                    </p>

                    <p className="mt-2 break-all text-xs text-zinc-500">
                      {item.content.url}
                    </p>

                    {item.reviewNote && (
                      <p className="mt-3 text-sm text-amber-300">
                        Review note: {item.reviewNote}
                      </p>
                    )}
                  </div>
                </div>

                {item.status === "review" ? (
                  <Clock3
                    size={18}
                    className="text-amber-400"
                  />
                ) : item.status === "approved" ? (
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />
                ) : item.status === "rejected" ? (
                  <XCircle
                    size={18}
                    className="text-red-400"
                  />
                ) : null}
              </div>

              {(item.status === "review" ||
                item.status === "draft") && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.status === "draft" ? (
                    <button
                      type="button"
                      className={buttonClass}
                      disabled={busyId !== null}
                      onClick={() => void act(item, "submit")}
                    >
                      <Send size={14} />
                      Submit for Review
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className={buttonClass}
                        disabled={busyId !== null}
                        onClick={() =>
                          void act(item, "approve")
                        }
                      >
                        <CheckCircle2 size={14} />
                        Approve & Publish
                      </button>

                      <button
                        type="button"
                        className="rounded-xl border border-red-900/60 px-3 py-2 text-xs text-red-300 disabled:opacity-40"
                        disabled={busyId !== null}
                        onClick={() =>
                          void act(item, "reject")
                        }
                      >
                        <XCircle size={14} />
                        Reject
                      </button>
                    </>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
