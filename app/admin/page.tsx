
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Database,
  FileText,
  Film,
  Loader2,
  LockKeyhole,
  LogOut,
  RefreshCw,
  Search,
  Shield,
  ShieldCheck,
  Terminal,
  Upload,
  Users,
  X,
} from "lucide-react";

type Tab = "users" | "analytics" | "cms";

type AdminUser = {
  id: string;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  isPremium?: boolean;
  role?: string | null;
};

type UsersResponse = {
  users: AdminUser[];
  nextCursor: string | null;
};

type Visitor = {
  id: string;
  name: string;
  ip: string;
  visits: number;
  time: string | null;
};

type AnalyticsResponse = {
  totalViews: number;
  uniqueIPs: number;
  recent: Visitor[];
};

type CMSKind = "video" | "document";

type DocumentType =
  | "past_paper"
  | "notes"
  | "template";

type Notice = {
  type: "success" | "error";
  message: string;
};

const PAGE_SIZE = 50;

async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    credentials: "same-origin",
    cache: "no-store",
    headers: {
      ...(options?.body
        ? { "Content-Type": "application/json" }
        : {}),
      ...options?.headers,
    },
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
    : date.toLocaleString();
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-emerald-900/50 bg-[#09120f]/95 p-5 shadow-[0_0_35px_rgba(16,185,129,0.04)] ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{
    className?: string;
    size?: number;
  }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="rounded-xl border border-emerald-800/60 bg-emerald-950/50 p-3 text-emerald-400">
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-lg font-bold tracking-wide text-white">
          {title}
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="flex min-h-48 items-center justify-center gap-3 text-emerald-400">
      <Loader2 className="animate-spin" size={22} />
      <span className="text-sm">Loading secure data...</span>
    </div>
  );
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("users");

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [accessError, setAccessError] = useState("");

  const [notice, setNotice] = useState<Notice | null>(
    null
  );

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [usersError, setUsersError] = useState("");
  const [search, setSearch] = useState("");

  const [cursor, setCursor] = useState<string | null>(
    null
  );
  const [nextCursor, setNextCursor] = useState<
    string | null
  >(null);
  const [cursorHistory, setCursorHistory] = useState<
    Array<string | null>
  >([]);
  const [page, setPage] = useState(1);

  const [updatingUser, setUpdatingUser] = useState<
    string | null
  >(null);

  const [analytics, setAnalytics] =
    useState<AnalyticsResponse | null>(null);
  const [analyticsLoading, setAnalyticsLoading] =
    useState(false);
  const [analyticsLoaded, setAnalyticsLoaded] =
    useState(false);
  const [analyticsError, setAnalyticsError] =
    useState("");

  const [cmsKind, setCmsKind] =
    useState<CMSKind>("video");
  const [cmsTitle, setCmsTitle] = useState("");
  const [cmsUrl, setCmsUrl] = useState("");
  const [cmsDocType, setCmsDocType] =
    useState<DocumentType>("notes");
  const [publishing, setPublishing] = useState(false);

  const verifyAccess = useCallback(async () => {
    setChecking(true);
    setAccessError("");

    try {
      const result = await apiRequest<{
        authenticated: boolean;
        admin: boolean;
      }>("/api/admin/session");

      if (!result.authenticated || !result.admin) {
        throw new Error(
          "Administrator authorization required."
        );
      }

      setAuthorized(true);
    } catch (error) {
      setAuthorized(false);
      setAccessError(
        error instanceof Error
          ? error.message
          : "Access denied."
      );
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    void verifyAccess();
  }, [verifyAccess]);

  const loadUsers = useCallback(
    async (selectedCursor: string | null) => {
      setUsersLoading(true);
      setUsersError("");

      try {
        const params = new URLSearchParams();

        if (selectedCursor) {
          params.set("cursor", selectedCursor);
        }

        const url = params.size
          ? `/api/admin/users?${params.toString()}`
          : "/api/admin/users";

        const result =
          await apiRequest<UsersResponse>(url);

        setUsers(
          Array.isArray(result.users)
            ? result.users
            : []
        );
        setNextCursor(result.nextCursor ?? null);
        setUsersLoaded(true);
      } catch (error) {
        setUsersError(
          error instanceof Error
            ? error.message
            : "Unable to load users."
        );
      } finally {
        setUsersLoading(false);
      }
    },
    []
  );

  const loadAnalytics = useCallback(async () => {
    setAnalyticsLoading(true);
    setAnalyticsError("");

    try {
      const result =
        await apiRequest<AnalyticsResponse>(
          "/api/admin/analytics"
        );

      setAnalytics(result);
      setAnalyticsLoaded(true);
    } catch (error) {
      setAnalyticsError(
        error instanceof Error
          ? error.message
          : "Unable to load analytics."
      );
    } finally {
      setAnalyticsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authorized) return;

    if (tab === "users" && !usersLoaded) {
      void loadUsers(cursor);
    }

    if (tab === "analytics" && !analyticsLoaded) {
      void loadAnalytics();
    }
  }, [
    authorized,
    tab,
    usersLoaded,
    analyticsLoaded,
    cursor,
    loadUsers,
    loadAnalytics,
  ]);

  async function changePremium(
    user: AdminUser
  ) {
    if (updatingUser) return;

    const newValue = !Boolean(user.isPremium);

    const confirmed = window.confirm(
      `${newValue ? "Activate" : "Deactivate"} premium access for ${
        user.email || user.displayName || user.id
      }?`
    );

    if (!confirmed) return;

    setUpdatingUser(user.id);
    setNotice(null);

    try {
      await apiRequest("/api/admin/users", {
        method: "PATCH",
        body: JSON.stringify({
          userId: user.id,
          isPremium: newValue,
        }),
      });

      setUsers((current) =>
        current.map((entry) =>
          entry.id === user.id
            ? { ...entry, isPremium: newValue }
            : entry
        )
      );

      setNotice({
        type: "success",
        message: "Premium access updated successfully.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Premium update failed.",
      });
    } finally {
      setUpdatingUser(null);
    }
  }

  async function publishContent(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (publishing) return;

    setPublishing(true);
    setNotice(null);

    try {
      const payload =
        cmsKind === "video"
          ? {
              kind: "video",
              title: cmsTitle.trim(),
              url: cmsUrl.trim(),
            }
          : {
              kind: "document",
              title: cmsTitle.trim(),
              url: cmsUrl.trim(),
              type: cmsDocType,
            };

      await apiRequest("/api/admin/cms", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setCmsTitle("");
      setCmsUrl("");

      setNotice({
        type: "success",
        message:
          "Content published successfully.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Publishing failed.",
      });
    } finally {
      setPublishing(false);
    }
  }

  function goNext() {
    if (!nextCursor || usersLoading) return;

    setCursorHistory((history) => [
      ...history,
      cursor,
    ]);

    setCursor(nextCursor);
    setPage((value) => value + 1);
    void loadUsers(nextCursor);
  }

  function goPrevious() {
    if (!cursorHistory.length || usersLoading) {
      return;
    }

    const previous =
      cursorHistory[cursorHistory.length - 1];

    setCursorHistory((history) =>
      history.slice(0, -1)
    );

    setCursor(previous);
    setPage((value) => Math.max(1, value - 1));
    void loadUsers(previous);
  }

  const filteredUsers = users.filter((user) => {
    const query = search.trim().toLowerCase();

    if (!query) return true;

    return [
      user.displayName,
      user.email,
      user.id,
      user.role,
    ]
      .filter(Boolean)
      .some((value) =>
        String(value).toLowerCase().includes(query)
      );
  });

  const premiumCount = users.filter(
    (user) => user.isPremium
  ).length;

  const inputClass =
    "w-full rounded-xl border border-emerald-900/60 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500";

  const buttonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-700/60 bg-emerald-950/60 px-4 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-900/60 disabled:cursor-not-allowed disabled:opacity-40";

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030807] text-emerald-400">
        <div className="text-center">
          <Shield className="mx-auto mb-5 h-12 w-12 animate-pulse" />
          <p className="font-mono text-sm tracking-[0.2em]">
            VERIFYING ADMIN CLEARANCE
          </p>
        </div>
      </main>
    );
  }

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030807] px-4 text-white">
        <div className="w-full max-w-md rounded-2xl border border-red-900/50 bg-[#110909] p-8 text-center">
          <LockKeyhole className="mx-auto mb-5 h-12 w-12 text-red-400" />

          <h1 className="text-2xl font-bold">
            ACCESS RESTRICTED
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            {accessError ||
              "Administrator clearance required."}
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => void verifyAccess()}
              className={buttonClass}
            >
              <RefreshCw size={16} />
              Retry
            </button>

            <Link
              href="/profile"
              className={buttonClass}
            >
              Return
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030807] text-zinc-200">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.09),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-900/40 pb-6">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-emerald-700/50 bg-emerald-950/50 p-4">
              <Terminal
                size={28}
                className="text-emerald-400"
              />
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-emerald-500">
                ATREYA MED / COMMAND CENTER
              </p>

              <h1 className="mt-1 text-2xl font-black tracking-wider text-white sm:text-3xl">
                BATCOMPUTER
              </h1>

              <p className="mt-1 flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck size={14} />
                ADMINISTRATOR AUTHORIZED
              </p>
            </div>
          </div>

          <Link
            href="/profile"
            className={buttonClass}
          >
            <ArrowLeft size={16} />
            Back to Profile
          </Link>
        </header>

        <nav
          aria-label="Admin sections"
          className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {(
            [
              {
                id: "users",
                label: "USER PROTOCOLS",
                icon: Users,
              },
              {
                id: "analytics",
                label: "ANALYTICS NODE",
                icon: Activity,
              },
              {
                id: "cms",
                label: "MAINFRAME CMS",
                icon: Database,
              },
            ] as const
          ).map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setTab(item.id);
                  setNotice(null);
                }}
                aria-pressed={active}
                className={`flex items-center justify-center gap-3 rounded-xl border px-4 py-4 font-mono text-xs font-bold tracking-wider transition ${
                  active
                    ? "border-emerald-500 bg-emerald-950/70 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    : "border-zinc-800 bg-[#0b100e] text-zinc-500 hover:border-emerald-800 hover:text-zinc-200"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {notice && (
          <div
            role="status"
            className={`mb-6 flex items-start justify-between gap-3 rounded-xl border p-4 text-sm ${
              notice.type === "success"
                ? "border-emerald-800 bg-emerald-950/40 text-emerald-300"
                : "border-red-900 bg-red-950/40 text-red-300"
            }`}
          >
            <div className="flex items-center gap-2">
              {notice.type === "success" ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertTriangle size={18} />
              )}
              {notice.message}
            </div>

            <button
              type="button"
              onClick={() => setNotice(null)}
              aria-label="Dismiss notification"
            >
              <X size={17} />
            </button>
          </div>
        )}

        {tab === "users" && (
          <Panel>
            <SectionHeading
              icon={Users}
              title="User Protocols"
              subtitle="Manage scholar accounts and premium access through protected server APIs."
            />

            <div className="mb-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                <p className="text-xs text-zinc-500">
                  Accounts on current page
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {users.length}
                </p>
              </div>

              <div className="rounded-xl border border-amber-900/40 bg-black/30 p-4">
                <p className="text-xs text-zinc-500">
                  Premium on current page
                </p>
                <p className="mt-2 flex items-center gap-2 text-2xl font-bold text-amber-400">
                  <Crown size={20} />
                  {premiumCount}
                </p>
              </div>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="relative min-w-56 flex-1">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search current page..."
                  className={`${inputClass} pl-10`}
                />
              </div>

              <button
                type="button"
                onClick={() => void loadUsers(cursor)}
                disabled={usersLoading}
                className={buttonClass}
              >
                <RefreshCw
                  size={16}
                  className={
                    usersLoading ? "animate-spin" : ""
                  }
                />
                Refresh
              </button>
            </div>

            {usersError && (
              <p className="mb-4 rounded-xl border border-red-900/50 p-4 text-sm text-red-400">
                {usersError}
              </p>
            )}

            {usersLoading && !usersLoaded ? (
              <Spinner />
            ) : (
              <>
                <div className="overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full min-w-[650px] text-left text-sm">
                    <thead className="bg-emerald-950/30 text-xs uppercase tracking-wider text-emerald-400">
                      <tr>
                        <th className="px-4 py-4">
                          Scholar
                        </th>
                        <th className="px-4 py-4">
                          Role
                        </th>
                        <th className="px-4 py-4">
                          Access
                        </th>
                        <th className="px-4 py-4 text-right">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="border-t border-zinc-800/80"
                        >
                          <td className="px-4 py-4">
                            <p className="font-medium text-white">
                              {user.displayName ||
                                "ATREYA Scholar"}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                              {user.email || "No email"}
                            </p>

                            <p className="mt-1 font-mono text-[10px] text-zinc-600">
                              {user.id}
                            </p>
                          </td>

                          <td className="px-4 py-4">
                            <span className="rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
                              {user.role || "scholar"}
                            </span>
                          </td>

                          <td className="px-4 py-4">
                            {user.isPremium ? (
                              <span className="inline-flex items-center gap-1 text-amber-400">
                                <Crown size={15} />
                                Premium
                              </span>
                            ) : (
                              <span className="text-zinc-500">
                                Standard
                              </span>
                            )}
                          </td>

                          <td className="px-4 py-4 text-right">
                            <button
                              type="button"
                              disabled={
                                updatingUser !== null ||
                                user.role === "admin"
                              }
                              onClick={() =>
                                void changePremium(user)
                              }
                              className={`${buttonClass} whitespace-nowrap`}
                            >
                              {updatingUser === user.id ? (
                                <Loader2
                                  size={15}
                                  className="animate-spin"
                                />
                              ) : (
                                <Crown size={15} />
                              )}

                              {user.isPremium
                                ? "Revoke Premium"
                                : "Grant Premium"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredUsers.length === 0 && (
                    <p className="p-8 text-center text-sm text-zinc-500">
                      No matching accounts on this page.
                    </p>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-zinc-500">
                    Page {page} · Up to {PAGE_SIZE} accounts
                    per page
                  </p>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={goPrevious}
                      disabled={
                        !cursorHistory.length ||
                        usersLoading
                      }
                      className={buttonClass}
                    >
                      <ChevronLeft size={16} />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      disabled={
                        !nextCursor || usersLoading
                      }
                      className={buttonClass}
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </Panel>
        )}

        {tab === "analytics" && (
          <Panel>
            <SectionHeading
              icon={Activity}
              title="Analytics Node"
              subtitle="Restricted visitor intelligence retrieved from the administrator API."
            />

            <div className="mb-5 flex justify-end">
              <button
                type="button"
                onClick={() => void loadAnalytics()}
                disabled={analyticsLoading}
                className={buttonClass}
              >
                <RefreshCw
                  size={16}
                  className={
                    analyticsLoading
                      ? "animate-spin"
                      : ""
                  }
                />
                Refresh Analytics
              </button>
            </div>

            {analyticsError && (
              <p className="mb-4 rounded-xl border border-red-900/50 p-4 text-sm text-red-400">
                {analyticsError}
              </p>
            )}

            {analyticsLoading && !analytics ? (
              <Spinner />
            ) : analytics ? (
              <>
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-emerald-900/50 bg-black/30 p-5">
                    <p className="text-xs text-zinc-500">
                      Recorded Views
                    </p>
                    <p className="mt-3 text-3xl font-bold text-emerald-400">
                      {analytics.totalViews.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-900/50 bg-black/30 p-5">
                    <p className="text-xs text-zinc-500">
                      Unique IPs
                    </p>
                    <p className="mt-3 text-3xl font-bold text-white">
                      {analytics.uniqueIPs.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-900/50 bg-black/30 p-5">
                    <p className="text-xs text-zinc-500">
                      Recent Records
                    </p>
                    <p className="mt-3 text-3xl font-bold text-white">
                      {analytics.recent.length}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full min-w-[600px] text-left text-sm">
                    <thead className="bg-emerald-950/30 text-xs uppercase text-emerald-400">
                      <tr>
                        <th className="px-4 py-4">
                          Visitor
                        </th>
                        <th className="px-4 py-4">
                          IP Address
                        </th>
                        <th className="px-4 py-4">
                          Visits
                        </th>
                        <th className="px-4 py-4">
                          Last Recorded
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {analytics.recent.map(
                        (visitor) => (
                          <tr
                            key={visitor.id}
                            className="border-t border-zinc-800/80"
                          >
                            <td className="px-4 py-4 text-white">
                              {visitor.name}
                            </td>

                            <td className="px-4 py-4 font-mono text-xs text-zinc-400">
                              {visitor.ip}
                            </td>

                            <td className="px-4 py-4">
                              {visitor.visits}
                            </td>

                            <td className="px-4 py-4 text-xs text-zinc-400">
                              {formatDate(visitor.time)}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>

                  {analytics.recent.length === 0 && (
                    <p className="p-8 text-center text-zinc-500">
                      No visitor records available.
                    </p>
                  )}
                </div>

                <p className="mt-4 text-xs text-zinc-500">
                  Unique IPs are an approximation, not a
                  count of unique people. Recent records
                  are limited to the latest 100 returned
                  by the API.
                </p>
              </>
            ) : null}
          </Panel>
        )}

        {tab === "cms" && (
          <Panel>
            <SectionHeading
              icon={Database}
              title="Mainframe CMS"
              subtitle="Publish educational videos and study resources through the protected administrator API."
            />

            <div className="mb-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCmsKind("video")}
                className={`flex items-center justify-center gap-2 rounded-xl border p-4 text-sm transition ${
                  cmsKind === "video"
                    ? "border-emerald-500 bg-emerald-950/50 text-emerald-300"
                    : "border-zinc-800 text-zinc-500"
                }`}
              >
                <Film size={18} />
                Video Reel
              </button>

              <button
                type="button"
                onClick={() => setCmsKind("document")}
                className={`flex items-center justify-center gap-2 rounded-xl border p-4 text-sm transition ${
                  cmsKind === "document"
                    ? "border-emerald-500 bg-emerald-950/50 text-emerald-300"
                    : "border-zinc-800 text-zinc-500"
                }`}
              >
                <FileText size={18} />
                Study Asset
              </button>
            </div>

            <form
              onSubmit={(event) =>
                void publishContent(event)
              }
              className="mx-auto max-w-2xl space-y-5"
            >
              <div>
                <label
                  htmlFor="cms-title"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  Content Title
                </label>

                <input
                  id="cms-title"
                  required
                  minLength={3}
                  maxLength={160}
                  value={cmsTitle}
                  onChange={(event) =>
                    setCmsTitle(event.target.value)
                  }
                  placeholder={
                    cmsKind === "video"
                      ? "Enter video title"
                      : "Enter study resource title"
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="cms-url"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  {cmsKind === "video"
                    ? "YouTube URL"
                    : "Document URL"}
                </label>

                <input
                  id="cms-url"
                  type="url"
                  required
                  maxLength={2048}
                  value={cmsUrl}
                  onChange={(event) =>
                    setCmsUrl(event.target.value)
                  }
                  placeholder="https://..."
                  className={inputClass}
                />
              </div>

              {cmsKind === "document" && (
                <div>
                  <label
                    htmlFor="cms-type"
                    className="mb-2 block text-sm text-zinc-300"
                  >
                    Resource Category
                  </label>

                  <select
                    id="cms-type"
                    value={cmsDocType}
                    onChange={(event) =>
                      setCmsDocType(
                        event.target
                          .value as DocumentType
                      )
                    }
                    className={inputClass}
                  >
                    <option value="notes">
                      Study Notes
                    </option>
                    <option value="past_paper">
                      Past Paper
                    </option>
                    <option value="template">
                      Template
                    </option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={publishing}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-700/30 px-5 py-4 font-bold text-emerald-200 transition hover:bg-emerald-700/50 disabled:opacity-50"
              >
                {publishing ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <Upload size={18} />
                )}

                {publishing
                  ? "PUBLISHING..."
                  : "PUBLISH CONTENT"}
              </button>
            </form>

            <div className="mt-8 rounded-xl border border-emerald-900/40 bg-black/30 p-4">
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <ShieldCheck size={17} />
                Secure Publishing Active
              </div>

              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                Only authenticated administrators can
                publish. Content is saved to the existing
                bams_reels or bams_assets collections
                through the server API.
              </p>
            </div>
          </Panel>
        )}

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-900/30 pt-5 font-mono text-[10px] tracking-wider text-zinc-600">
          <span>
            ATREYA MED · SECURE ADMIN MAINFRAME
          </span>

          <span className="flex items-center gap-2 text-emerald-700">
            <ShieldCheck size={13} />
            SERVER-VERIFIED ACCESS
          </span>
        </footer>
      </div>
    </main>
  );
}
