
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  Film,
  Loader2,
  RefreshCw,
  Send,
  ShieldCheck,
  Trash2,
  XCircle,
} from "lucide-react";

type SubmissionStatus =
  | "draft"
  | "review"
  | "approved"
  | "rejected";

type Operation = "create" | "update" | "delete";

type Submission = {
  id: string;
  kind: "video" | "document";
  operation: Operation;
  targetId: string | null;
  status: SubmissionStatus;
  content: {
    title: string | null;
    url: string | null;
    prof?: string | null;
    type?: string | null;
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
  "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-700/60 bg-emerald-950/60 px-3 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-900/60 disabled:cursor-not-allowed disabled:opacity-40";

function getError(
  value: unknown,
  fallback: string
): string {
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
): Promise<unknown> {
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
      getError(
        result,
        `Request failed (${response.status}).`
      )
    );
  }

  return result;
}

function operationLabel(
  operation: Operation
): string {
  switch (operation) {
    case "create":
      return "New Publication";
    case "update":
      return "Content Revision";
    case "delete":
      return "Content Removal";
  }
}

function approvalMessage(
  item: Submission
): string {
  const title =
    item.content.title || "Untitled resource";

  if (item.operation === "delete") {
    return (
      `Approve permanent removal of "${title}"?\n\n` +
      "This will delete the published resource.\n\n" +
      "This action cannot be undone through the CMS."
    );
  }

  if (item.operation === "update") {
    return (
      `Approve changes to "${title}"?\n\n` +
      "The existing published resource will be updated."
    );
  }

  return (
    `Approve publication of "${title}"?\n\n` +
    "The resource will become publicly available."
  );
}

function formatDate(value: string | null) {
  if (!value) return "Unknown";

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? "Unknown"
    : date.toLocaleString();
}

export default function CMSReviewQueue({
  refreshKey = 0,
  onPublished,
}: {
  refreshKey?: number;
  onPublished?: () => void;
}) {
  const [items, setItems] =
    useState<Submission[]>([]);

  const [loading, setLoading] = useState(true);

  const [busyId, setBusyId] =
    useState<string | null>(null);

  const [notice, setNotice] =
    useState<Notice | null>(null);

  const [filter, setFilter] =
    useState<SubmissionStatus | "all">(
      "review"
    );

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
        throw new Error(
          "Invalid submission response."
        );
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
        approvalMessage(item)
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
      )) as {
        success?: boolean;
        message?: string;
      };

      if (!result.success) {
        throw new Error(
          "Review action was not confirmed."
        );
      }

      await load();

      setNotice({
        type: "success",
        message:
          result.message ??
          "Review action completed.",
      });

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
    (item) =>
      filter === "all" ||
      item.status === filter
  );

  const pendingCount = items.filter(
    (item) => item.status === "review"
  ).length;

  const deletionCount = items.filter(
    (item) =>
      item.status === "review" &&
      item.operation === "delete"
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
            {deletionCount > 0 &&
              ` · ${deletionCount} removal request${
                deletionCount === 1 ? "" : "s"
              }`}
          </p>
        </div>

        <button
          type="button"
          className={buttonClass}
          onClick={() => void load()}
          disabled={
            loading || busyId !== null
          }
        >
          <RefreshCw
            size={14}
            className={
              loading ? "animate-spin" : ""
            }
          />
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
            onClick={() =>
              setFilter(value)
            }
            className={`rounded-lg border px-3 py-2 text-xs capitalize ${
              filter === value
                ? "border-emerald-500 bg-emerald-950 text-emerald-300"
                : "border-zinc-800 text-zinc-400"
            }`}
          >
            {value === "review"
              ? "Pending"
              : value}
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
          <Loader2
            className="animate-spin"
            size={18}
          />
          Loading submissions...
        </div>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-sm text-zinc-500">
          No submissions in this category.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {filtered.map((item) => {
            const isDeletion =
              item.operation === "delete";

            return (
              <article
                key={item.id}
                className={`rounded-2xl border bg-black/30 p-5 ${
                  isDeletion
                    ? "border-red-900/60"
                    : "border-emerald-900/40"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    {isDeletion ? (
                      <Trash2
                        size={20}
                        className="mt-1 shrink-0 text-red-400"
                      />
                    ) : item.kind === "video" ? (
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
                      <p
                        className={`mb-2 text-xs font-semibold uppercase tracking-wide ${
                          isDeletion
                            ? "text-red-400"
                            : "text-emerald-400"
                        }`}
                      >
                        {operationLabel(
                          item.operation
                        )}
                      </p>

                      <h3 className="break-words font-semibold">
                        {item.content.title ||
                          "Untitled resource"}
                      </h3>

                      <p className="mt-1 text-xs capitalize text-zinc-400">
                        {item.kind} ·{" "}
                        {item.status}
                      </p>

                      {item.content.url && (
                        <a
                          href={item.content.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex max-w-full items-center gap-1 break-all text-xs text-emerald-400 hover:underline"
                        >
                          View Resource
                          <ExternalLink
                            size={13}
                          />
                        </a>
                      )}

                      <p className="mt-3 text-xs text-zinc-500">
                        Submitted:{" "}
                        {formatDate(
                          item.createdAt
                        )}
                      </p>

                      {item.submittedBy && (
                        <p className="mt-1 break-all text-xs text-zinc-500">
                          Submitted by:{" "}
                          {item.submittedBy}
                        </p>
                      )}

                      {item.targetId && (
                        <p className="mt-1 break-all text-xs text-zinc-600">
                          Target ID:{" "}
                          {item.targetId}
                        </p>
                      )}

                      {item.reviewNote && (
                        <p className="mt-3 text-sm text-amber-300">
                          Review note:{" "}
                          {item.reviewNote}
                        </p>
                      )}

                      {isDeletion &&
                        item.status ===
                          "review" && (
                          <p className="mt-3 text-xs text-red-300">
                            Approval will
                            permanently remove
                            this published
                            resource.
                          </p>
                        )}
                    </div>
                  </div>

                  {item.status === "review" ? (
                    <Clock3
                      size={18}
                      className="text-amber-400"
                    />
                  ) : item.status ===
                    "approved" ? (
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400"
                    />
                  ) : item.status ===
                    "rejected" ? (
                    <XCircle
                      size={18}
                      className="text-red-400"
                    />
                  ) : null}
                </div>

                {(item.status === "review" ||
                  item.status === "draft") && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.status ===
                    "draft" ? (
                      <button
                        type="button"
                        className={buttonClass}
                        disabled={
                          busyId !== null
                        }
                        onClick={() =>
                          void act(
                            item,
                            "submit"
                          )
                        }
                      >
                        <Send size={14} />
                        Submit for Review
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          className={
                            isDeletion
                              ? "inline-flex items-center gap-2 rounded-xl border border-red-800 bg-red-950/40 px-3 py-2 text-xs text-red-300 transition hover:bg-red-950/70 disabled:opacity-40"
                              : buttonClass
                          }
                          disabled={
                            busyId !== null
                          }
                          onClick={() =>
                            void act(
                              item,
                              "approve"
                            )
                          }
                        >
                          {isDeletion ? (
                            <Trash2
                              size={14}
                            />
                          ) : (
                            <CheckCircle2
                              size={14}
                            />
                          )}

                          {isDeletion
                            ? "Approve Removal"
                            : item.operation ===
                                "update"
                              ? "Approve Changes"
                              : "Approve & Publish"}
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-xl border border-red-900/60 px-3 py-2 text-xs text-red-300 disabled:opacity-40"
                          disabled={
                            busyId !== null
                          }
                          onClick={() =>
                            void act(
                              item,
                              "reject"
                            )
                          }
                        >
                          <XCircle
                            size={14}
                          />
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
