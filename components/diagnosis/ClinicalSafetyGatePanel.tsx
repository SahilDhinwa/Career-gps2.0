
"use client";

import { useMemo } from "react";

import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import {
  getAllCorrectionSafetyResults,
  getCorrectionSafetySummary,
} from "../../data/diagnosis/corrections";

interface ClinicalSafetyGatePanelProps {
  diseaseId?: string;
}

export default function ClinicalSafetyGatePanel({
  diseaseId,
}: ClinicalSafetyGatePanelProps) {
  const results = useMemo(() => {
    const allResults =
      getAllCorrectionSafetyResults();

    return diseaseId
      ? allResults.filter(
          (result) =>
            result.diseaseId === diseaseId
        )
      : allResults;
  }, [diseaseId]);

  const summary = useMemo(
    () => getCorrectionSafetySummary(),
    []
  );

  const readyCount = results.filter(
    (result) => result.readyForClinicalReview
  ).length;

  const blockedCount =
    results.length - readyCount;

  return (
    <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-4 w-4 text-amber-600" />

        <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white">
          Clinical Correction Safety Gate
        </h3>
      </div>

      <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
        Automated structural checks only.
        Passing this gate does not establish
        clinical accuracy, guideline applicability,
        or professional approval.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            Corrections checked
          </p>

          <p className="mt-1 text-xl font-extrabold">
            {results.length}
          </p>
        </div>

        <div className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            Structurally ready
          </p>

          <p className="mt-1 text-xl font-extrabold">
            {readyCount}
          </p>
        </div>

        <div className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            Blocked
          </p>

          <p className="mt-1 text-xl font-extrabold">
            {blockedCount}
          </p>
        </div>

        <div className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            Clinically approved
          </p>

          <p className="mt-1 text-xl font-extrabold">
            {summary.clinicallyApproved}
          </p>
        </div>
      </div>

      {results.length === 0 && (
        <p className="text-xs text-neutral-500">
          No corrections registered for
          this disease.
        </p>
      )}

      <div className="space-y-3">
        {results.map((result) => {
          const criticalIssues =
            result.issues.filter(
              (issue) =>
                issue.severity === "critical"
            );

          const warnings =
            result.issues.filter(
              (issue) =>
                issue.severity === "warning"
            );

          return (
            <details
              key={result.correctionId}
              className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-700"
            >
              <summary className="cursor-pointer">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="break-all text-xs font-bold">
                    {result.correctionId}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold ${
                      result.readyForClinicalReview
                        ? "text-emerald-700 dark:text-emerald-400"
                        : "text-red-700 dark:text-red-400"
                    }`}
                  >
                    {result.readyForClinicalReview ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Structurally ready
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="h-3.5 w-3.5" />
                        Blocked
                      </>
                    )}
                  </span>
                </div>
              </summary>

              <div className="mt-3 space-y-2 border-t border-neutral-200 pt-3 dark:border-neutral-700">
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                  Critical issues:{" "}
                  {criticalIssues.length}
                  {" · "}
                  Warnings:{" "}
                  {warnings.length}
                </p>

                {result.issues.map(
                  (issue, index) => (
                    <p
                      key={index}
                      className={`text-[11px] leading-relaxed ${
                        issue.severity === "critical"
                          ? "text-red-700 dark:text-red-400"
                          : issue.severity === "warning"
                            ? "text-amber-700 dark:text-amber-400"
                            : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {issue.severity.toUpperCase()}
                      {" — "}
                      {issue.message}
                    </p>
                  )
                )}

                {result.issues.length === 0 && (
                  <p className="text-[11px] text-neutral-500">
                    No structural issues detected.
                  </p>
                )}

                <p className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                  <Clock3 className="h-3.5 w-3.5" />
                  Clinical approval pending
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
