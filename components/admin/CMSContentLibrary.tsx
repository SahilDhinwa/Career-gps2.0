
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  FileText,
  Film,
  Loader2,
  Pencil,
  RefreshCw,
  Save,
  Search,
  Trash2,
  X,
} from "lucide-react";

type Kind = "video" | "document";
type Prof = "prof-1" | "prof-2" | "prof-3";
type DocType = "past_paper" | "notes" | "template";

type CMSItem = {
  id: string;
  kind: Kind;
  title: string;
  url: string;
  prof: Prof | null;
  type: DocType | null;
  createdAt: string | null;
  updatedAt: string | null;
};

type CMSResponse = {
  success: boolean;
  videos: CMSItem[];
  documents: CMSItem[];
  limitPerCollection: number;
};

type Notice = {
  type: "success" | "error";
  message: string;
};

const PROF_OPTIONS: { value: Prof; label: string }[] = [
  { value: "prof-1", label: "1st Professional" },
  { value: "prof-2", label: "2nd Professional" },
  { value: "prof-3", label: "3rd / Final Professional" },
];

const DOC_OPTIONS: { value: DocType; label: string }[] = [
  { value: "notes", label: "Study Notes" },
  { value: "past_paper", label: "Past Paper" },
  { value: "template", label: "Template" },
];

const inputClass =
  "w-full rounded-xl border border-emerald-900/60 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500";

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-700/60 bg-emerald-950/60 px-4 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-900/60 disabled:cursor-not-allowed disabled:opacity-40";

async function request<T>(
  method: "GET" | "PATCH" | "DELETE",
  body?: object
): Promise<T> {
  const response = await fetch("/api/admin/cms", {
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
    const message =
      result &&
      typeof result === "object" &&
      "error" in result &&
      typeof result.error === "string"
        ? result.error
        : `Request failed (${response.status}).`;

    throw new Error(message);
  }

  return result as T;
}

function formatDate(value: string | null) {
  if (!value) return "Unknown";

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? "Unknown"
    : date.toLocaleDateString();
}

function itemCategory(item: CMSItem) {
  if (item.kind === "video") {
    return (
      PROF_OPTIONS.find(
        (option) => option.value === item.prof
      )?.label ?? "Year not assigned"
    );
  }

  return (
    DOC_OPTIONS.find(
      (option) => option.value === item.type
    )?.label ?? "Uncategorized"
  );
}

export default function CMSContentLibrary({
  refreshKey = 0,
}: {
  refreshKey?: number;
}) {
  const [items, setItems] = useState<CMSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | Kind>("all");

  const [editing, setEditing] = useState<CMSItem | null>(
    null
  );
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [editProf, setEditProf] = useState<Prof>("prof-2");
  const [editType, setEditType] = useState<DocType>("notes");

  const loadContent = useCallback(async () => {
    setLoading(true);

    try {
      const result = await request<CMSResponse>("GET");

      if (
        !result.success ||
        !Array.isArray(result.videos) ||
        !Array.isArray(result.documents)
      ) {
        throw new Error("Invalid CMS response.");
      }

      const combined = [
        ...result.videos,
        ...result.documents,
      ].sort(
        (a, b) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime()
      );

      setItems(combined);
      setNotice(null);
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to load content.",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadContent();
  }, [loadContent, refreshKey]);

  function beginEdit(item: CMSItem) {
    setEditing(item);
    setEditTitle(item.title);
    setEditUrl(item.url);
    setEditProf(item.prof ?? "prof-2");
    setEditType(item.type ?? "notes");
    setNotice(null);
  }

  async function saveEdit() {
    if (!editing || busy) return;

    setBusy(true);
    setNotice(null);

    try {
      const payload =
        editing.kind === "video"
          ? {
              id: editing.id,
              kind: "video",
              title: editTitle.trim(),
              url: editUrl.trim(),
              prof: editProf,
            }
          : {
              id: editing.id,
              kind: "document",
              title: editTitle.trim(),
              url: editUrl.trim(),
              type: editType,
            };

      await request("PATCH", payload);

      setEditing(null);

      await loadContent();

      setNotice({
        type: "success",
        message: "Changes submitted for review. Published content remains unchanged.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to update content.",
      });
    } finally {
      setBusy(false);
    }
  }

  async function deleteItem(item: CMSItem) {
    if (busy) return;

    const confirmed = window.confirm(
      `Permanently delete "${item.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    setBusy(true);
    setNotice(null);

    try {
      await request("DELETE", {
        id: item.id,
        kind: item.kind,
      });

      await loadContent();

      setNotice({
        type: "success",
        message: "Content deleted successfully.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to delete content.",
      });
    } finally {
      setBusy(false);
    }
  }

  const filteredItems = items.filter((item) => {
    if (filter !== "all" && item.kind !== filter) {
      return false;
    }

    const term = search.trim().toLowerCase();

    return (
      !term ||
      item.title.toLowerCase().includes(term) ||
      item.url.toLowerCase().includes(term) ||
      itemCategory(item).toLowerCase().includes(term)
    );
  });

  return (
    <section className="mt-8 border-t border-emerald-900/50 pt-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-white">
            <DatabaseIcon />
            Published Content Library
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            View, edit, and remove existing CMS records.
          </p>
        </div>

        <button
          type="button"
          onClick={() => void loadContent()}
          disabled={loading || busy}
          className={buttonClass}
        >
          <RefreshCw
            size={16}
            className={loading ? "animate-spin" : ""}
          />
          Refresh
        </button>
      </div>

      {notice && (
        <div
          role="status"
          className={`mb-5 flex items-start gap-2 rounded-xl border p-4 text-sm ${
            notice.type === "success"
              ? "border-emerald-800 text-emerald-300"
              : "border-red-900 text-red-400"
          }`}
        >
          {notice.type === "success" ? (
            <CheckCircle2 size={18} />
          ) : (
            <AlertTriangle size={18} />
          )}
          {notice.message}
        </div>
      )}

      <div className="mb-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search published content..."
            className={`${inputClass} pl-10`}
          />
        </div>

        <select
          value={filter}
          onChange={(event) =>
            setFilter(event.target.value as "all" | Kind)
          }
          className={inputClass}
        >
          <option value="all">All Content</option>
          <option value="video">Video Reels</option>
          <option value="document">Study Assets</option>
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center gap-3 py-12 text-emerald-400">
          <Loader2 size={20} className="animate-spin" />
          Loading content...
        </div>
      ) : (
        <>
          <p className="mb-4 text-xs text-zinc-500">
            Showing {filteredItems.length} of {items.length} loaded records.
            The API currently returns up to 50 per collection.
          </p>

          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div
                key={`${item.kind}-${item.id}`}
                className="rounded-xl border border-zinc-800 bg-black/30 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2 text-xs text-emerald-400">
                      {item.kind === "video" ? (
                        <Film size={15} />
                      ) : (
                        <FileText size={15} />
                      )}
                      {itemCategory(item)}
                    </div>

                    <h4 className="break-words font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-zinc-500">
                      Created: {formatDate(item.createdAt)}
                    </p>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex max-w-full items-center gap-1 text-xs text-emerald-400 hover:underline"
                    >
                      <span className="truncate">
                        Open Resource
                      </span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => beginEdit(item)}
                      className={buttonClass}
                      aria-label={`Edit ${item.title}`}
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void deleteItem(item)}
                      className="inline-flex items-center gap-2 rounded-xl border border-red-900/60 px-4 py-2.5 text-sm text-red-400 transition hover:bg-red-950/40 disabled:opacity-40"
                      aria-label={`Delete ${item.title}`}
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <p className="rounded-xl border border-zinc-800 p-8 text-center text-sm text-zinc-500">
                No matching content found.
              </p>
            )}
          </div>
        </>
      )}

      {editing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cms-edit-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-emerald-800 bg-[#09120f] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h3
                id="cms-edit-title"
                className="text-lg font-bold text-white"
              >
                Edit {editing.kind === "video" ? "Reel" : "Study Asset"}
              </h3>

              <button
                type="button"
                disabled={busy}
                onClick={() => setEditing(null)}
                aria-label="Close editor"
                className="text-zinc-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                void saveEdit();
              }}
              className="space-y-5"
            >
              {editing.kind === "video" && (
                <div>
                  <label
                    htmlFor="edit-prof"
                    className="mb-2 block text-sm text-zinc-300"
                  >
                    Professional Year
                  </label>
                  <select
                    id="edit-prof"
                    value={editProf}
                    onChange={(event) =>
                      setEditProf(event.target.value as Prof)
                    }
                    className={inputClass}
                  >
                    {PROF_OPTIONS.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label
                  htmlFor="edit-title"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  Title
                </label>
                <input
                  id="edit-title"
                  required
                  minLength={3}
                  maxLength={160}
                  value={editTitle}
                  onChange={(event) =>
                    setEditTitle(event.target.value)
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="edit-url"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  Resource URL
                </label>
                <input
                  id="edit-url"
                  type="url"
                  required
                  maxLength={2048}
                  value={editUrl}
                  onChange={(event) =>
                    setEditUrl(event.target.value)
                  }
                  className={inputClass}
                />
              </div>

              {editing.kind === "document" && (
                <div>
                  <label
                    htmlFor="edit-type"
                    className="mb-2 block text-sm text-zinc-300"
                  >
                    Resource Category
                  </label>
                  <select
                    id="edit-type"
                    value={editType}
                    onChange={(event) =>
                      setEditType(event.target.value as DocType)
                    }
                    className={inputClass}
                  >
                    {DOC_OPTIONS.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => setEditing(null)}
                  className={buttonClass}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={busy}
                  className={buttonClass}
                >
                  {busy ? (
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                  ) : (
                    <Save size={16} />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function DatabaseIcon() {
  return <Film size={19} className="text-emerald-400" />;
}
