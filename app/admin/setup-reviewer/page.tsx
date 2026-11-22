
"use client";

import { useState } from "react";

export default function SetupReviewerPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function activateReviewer() {
    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/setup-reviewer",
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Activation failed."
        );
      }

      setMessage(
        "Reviewer permissions assigned successfully."
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white">
      <div className="mx-auto max-w-md space-y-6 rounded-xl border border-emerald-800 p-6">
        <h1 className="text-2xl font-bold">
          Reviewer Activation
        </h1>

        <p className="text-sm text-gray-400">
          One-time setup for the ATREYA MED reviewer account.
        </p>

        <button
          type="button"
          onClick={activateReviewer}
          disabled={loading}
          className="w-full rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white disabled:opacity-50"
        >
          {loading
            ? "Activating..."
            : "Activate Reviewer"}
        </button>

        {message && (
          <p role="status" className="text-sm">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
