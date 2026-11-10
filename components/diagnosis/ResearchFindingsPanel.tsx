
"use client";

import {
  BookOpen,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

import {
  getResearchFindings,
} from "../../data/diagnosis/research/verifiedFindings";

interface Props {
  diseaseId: string;
}

export default function ResearchFindingsPanel({
  diseaseId,
}: Props) {
  const findings = getResearchFindings(diseaseId);

  if (findings.length === 0) {
    return null;
  }

  return (
    <section className="space-y-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <h4 className="flex items-center gap-2 text-sm font-bold">
        <BookOpen className="h-4 w-4 text-violet-600" />
        Source-Linked Research Findings
      </h4>

      {findings.map((finding) => (
        <article
          key={finding.id}
          className="space-y-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-700"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold">
              {finding.tradition === "classical_ayurveda"
                ? "Classical Ayurveda"
                : "Modern Clinical Evidence"}
            </span>

            <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400">
              {finding.status.replace(/_/g, " ")}
            </span>
          </div>

          <p className="text-xs font-semibold">
            {finding.sourceTitle}
          </p>

          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            {finding.locator}
          </p>

          <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            {finding.finding}
          </p>

          <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 dark:bg-amber-950/20">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />

            <p className="text-[11px] leading-relaxed text-amber-900 dark:text-amber-300">
              {finding.safetyNote}
            </p>
          </div>

          <a
            href={finding.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 hover:underline dark:text-violet-400"
          >
            Read original source
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </article>
      ))}

      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
        Research findings are not clinician-approved
        diagnostic or treatment recommendations.
      </p>
    </section>
  );
}
