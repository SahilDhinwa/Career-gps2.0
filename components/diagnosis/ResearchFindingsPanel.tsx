
"use client";

import {
  BookOpen,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

import {
  getResearchFindings,
} from "../../data/diagnosis/research/verifiedFindings";

import {
  getClassicalVerification,
} from "../../data/diagnosis/research/classicalVerification";

import {
  getEditionComparison,
} from "../../data/diagnosis/research/editionComparison";

import {
  getPrimaryTextInspections,
} from "../../data/diagnosis/research/primaryTextInspection";

interface Props {
  diseaseId: string;
}

export default function ResearchFindingsPanel({
  diseaseId,
}: Props) {
  const findings = getResearchFindings(diseaseId);

  const classicalRecords =
    getClassicalVerification(diseaseId);

  const editionComparisons =
    getEditionComparison(diseaseId);

  const primaryInspections =
    getPrimaryTextInspections(diseaseId);

  if (
    findings.length === 0 &&
    classicalRecords.length === 0 &&
    editionComparisons.length === 0 &&
    primaryInspections.length === 0
  ) {
    return null;
  }

  return (
    <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <h4 className="flex items-center gap-2 text-sm font-bold">
        <BookOpen className="h-4 w-4 text-violet-600" />
        Source-Linked Research Findings
      </h4>

      {/* RESEARCH FINDINGS */}

      {findings.map((finding) => (
        <article
          key={finding.id}
          className="space-y-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-700"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold">
              {finding.tradition ===
              "classical_ayurveda"
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

      {/* CLASSICAL VERIFICATION */}

      {classicalRecords.map((record) => (
        <article
          key={record.id}
          className="space-y-3 rounded-xl border border-amber-200 p-4 dark:border-amber-900"
        >
          <h5 className="text-sm font-bold">
            Classical Text Verification
          </h5>

          <p className="text-xs">
            {record.work} — {record.chapter}
          </p>

          <p className="text-xs">
            Verse: {record.verse}
          </p>

          {record.sanskrit && (
            <p
              lang="sa"
              className="text-sm leading-relaxed"
            >
              {record.sanskrit}
            </p>
          )}

          <p className="text-xs leading-relaxed">
            {record.workingTranslation}
          </p>

          <p className="text-xs text-amber-700 dark:text-amber-400">
            Status:{" "}
            {record.status.replace(/_/g, " ")}
          </p>

          <p className="text-xs">
            Edition: {record.edition}
          </p>

          {record.outstandingChecks.map((check) => (
            <p key={check} className="text-xs">
              Pending: {check}
            </p>
          ))}

          <a
            href={record.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 dark:text-violet-400"
          >
            Examine classical source
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </article>
      ))}

      {/* EDITION COMPARISON */}

      {editionComparisons.map((record) => (
        <article
          key={record.id}
          className="space-y-3 rounded-xl border border-neutral-200 p-4 dark:border-neutral-700"
        >
          <h5 className="text-sm font-bold">
            Edition Comparison
          </h5>

          <p className="text-xs">
            {record.work} —{" "}
            {record.classicalChapter}
          </p>

          <p className="text-xs">
            Verse: {record.verseReference}
          </p>

          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
            Status:{" "}
            {record.status.replace(/_/g, " ")}
          </p>

          <p className="text-xs">
            Translation:{" "}
            {record.translationStatus.replace(
              /_/g,
              " "
            )}
          </p>

          {record.witnesses.map((witness) => (
            <div
              key={witness.id}
              className="space-y-2 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-950"
            >
              <p className="text-xs font-bold">
                {witness.title}
              </p>

              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                {witness.observation}
              </p>

              <p className="text-[11px] text-neutral-500">
                {witness.inspected
                  ? "Source inspected"
                  : "Inspection pending"}
              </p>

              <a
                href={witness.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 dark:text-violet-400"
              >
                Examine witness
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}

          <h6 className="text-xs font-bold">
            Outstanding checks
          </h6>

          {record.outstandingChecks.map((check) => (
            <p key={check} className="text-xs">
              Pending: {check}
            </p>
          ))}
        </article>
      ))}

      {/* PRIMARY TEXT INSPECTIONS */}

      {primaryInspections.map((record) => (
        <article
          key={record.id}
          className="space-y-3 rounded-xl border border-neutral-200 p-4 dark:border-neutral-700"
        >
          <h5 className="text-sm font-bold">
            Primary Text Inspection
          </h5>

          <p className="text-xs">
            {record.work} — {record.chapter}
          </p>

          <p className="text-xs">
            Passage: {record.passage}
          </p>

          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
            Status:{" "}
            {record.status.replace(/_/g, " ")}
          </p>

          <p className="text-xs">
            PDF pages:{" "}
            {record.pdfPages.length > 0
              ? record.pdfPages.join(", ")
              : "Not established"}
          </p>

          <p className="text-xs">
            Printed pages:{" "}
            {record.printedPages.length > 0
              ? record.printedPages.join(", ")
              : "Not established"}
          </p>

          <p className="text-xs font-semibold">
            {record.sourceTitle}
          </p>

          {record.observations.map(
            (observation, index) => (
              <p
                key={`${record.id}-observation-${index}`}
                className="text-xs leading-relaxed"
              >
                {observation}
              </p>
            )
          )}

          <h6 className="text-xs font-bold">
            Remaining verification tasks
          </h6>

          {record.remainingChecks.map(
            (check, index) => (
              <p
                key={`${record.id}-check-${index}`}
                className="text-xs"
              >
                Pending: {check}
              </p>
            )
          )}

          <a
            href={record.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 dark:text-violet-400"
          >
            Examine inspected source
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </article>
      ))}

      <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 dark:bg-amber-950/20">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />

        <p className="text-[11px] leading-relaxed text-amber-900 dark:text-amber-300">
          Source identification, transcription comparison,
          and textual inspection do not establish clinical
          equivalence or approval. Unverified content must
          not determine diagnosis, investigations, or
          treatment.
        </p>
      </div>
    </section>
  );
}
