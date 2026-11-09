
"use client";

import React, { useMemo } from "react";
import {
  AlertTriangle,
  ClipboardList,
  ExternalLink,
  ShieldAlert,
  FileEdit,
  BookOpen,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import type { DiseaseProfile } from "../../data/diagnosisDatabase";
import type { ClinicalField } from "../../data/diagnosis/audit";

import { getDiseaseAudit } from "../../data/diagnosis/audit";

import {
  getDiseaseCorrections,
} from "../../data/diagnosis/corrections";

import {
  EVIDENCE_CLAIMS,
  EVIDENCE_SOURCES,
} from "../../data/diagnosis/evidence";

interface ClinicalAuditPanelProps {
  disease: DiseaseProfile;
}

const FIELD_LABELS: Record<ClinicalField, string> = {
  modernCorrelate: "Modern Clinical Correlation",
  icdCode: "ICD Classification",
  doshaDushya: "Dosha–Dushya",
  pratyatmaLakshana: "Clinical Features",
  knockoutClue: "Bedside Diagnostic Clue",
  matchingFilterIds: "Symptom Matching",
  essentialTests: "Investigation Recommendations",
  avoidedTests: "Test-Omission Claims",
  firstLineChikitsa: "Ayurvedic Treatment",
};

function formatLegacyValue(
  disease: DiseaseProfile,
  field: ClinicalField
): string {
  if (field === "matchingFilterIds") {
    return disease.matchingFilterIds.join(", ") || "None";
  }

  if (field === "essentialTests") {
    return disease.essentialTests
      .map(
        (test) =>
          `${test.name} (${test.estCost}): ${test.reason}`
      )
      .join("\n");
  }

  if (field === "avoidedTests") {
    return disease.avoidedTests
      .map(
        (test) =>
          `${test.name} (claimed savings: ${test.estSaved}): ${test.whyUnnecessary}`
      )
      .join("\n");
  }

  const value = disease[field];

  return typeof value === "string"
    ? value
    : "Unavailable";
}

function EvidenceReferences({
  claimIds,
}: {
  claimIds: string[];
}) {
  const uniqueClaimIds = Array.from(new Set(claimIds));

  if (uniqueClaimIds.length === 0) {
    return (
      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
        No evidence linked yet.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {uniqueClaimIds.map((claimId) => {
        const claim = EVIDENCE_CLAIMS.find(
          (item) => item.id === claimId
        );

        if (!claim) {
          return (
            <p
              key={claimId}
              className="text-xs text-red-700 dark:text-red-400"
            >
              Missing evidence claim: {claimId}
            </p>
          );
        }

        return (
          <div
            key={claim.id}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-950"
          >
            <p className="text-xs leading-relaxed text-neutral-800 dark:text-neutral-200">
              {claim.statement}
            </p>

            <p className="mt-2 text-[11px] font-semibold text-neutral-600 dark:text-neutral-400">
              Evidence assessment:{" "}
              {claim.assessment.replace(/_/g, " ")}
            </p>

            <p className="mt-1 text-[11px] text-amber-700 dark:text-amber-400">
              Clinical review:{" "}
              {claim.review.status.replace(/_/g, " ")}
            </p>

            {claim.citations.map((citation, index) => {
              const source = EVIDENCE_SOURCES.find(
                (item) => item.id === citation.sourceId
              );

              return (
                <div
                  key={`${citation.sourceId}-${index}`}
                  className="mt-2 text-[11px]"
                >
                  {source ? (
                    <>
                      <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                        {source.title}
                        {" · "}
                        {citation.locator}
                      </p>

                      {citation.note && (
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400">
                          {citation.note}
                        </p>
                      )}

                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 font-bold text-violet-700 hover:underline dark:text-violet-400"
                        >
                          Open original source
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </>
                  ) : (
                    <p className="text-red-700 dark:text-red-400">
                      Missing source: {citation.sourceId}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function ClinicalAuditPanel({
  disease,
}: ClinicalAuditPanelProps) {
  const audit = useMemo(
    () => getDiseaseAudit(disease.id),
    [disease.id]
  );

  const corrections = useMemo(
    () => getDiseaseCorrections(disease.id),
    [disease.id]
  );

  if (!audit) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-red-300 bg-red-50 p-4 text-xs text-red-900 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300"
      >
        Clinical audit record missing. This disease profile
        must not be treated as reviewed.
      </div>
    );
  }

  const flaggedCount = audit.fields.filter(
    (field) => field.status === "under_review"
  ).length;

  return (
    <section
      aria-label={`Clinical audit for ${disease.sanskritName}`}
      className="space-y-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 dark:text-white">
          <ClipboardList className="h-4 w-4 text-violet-600" />
          Clinical Field Audit
        </h4>

        <span className="rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
          Not clinically approved
        </span>
      </div>

      {/* AUDIT SUMMARY */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
        <div className="flex items-start gap-2">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />

          <div className="space-y-1">
            <p className="text-xs font-bold text-amber-950 dark:text-amber-200">
              Preliminary audit — not clinical validation
            </p>

            <p className="text-[11px] leading-relaxed text-amber-900 dark:text-amber-300">
              {audit.fields.length} clinical fields registered.
              {" "}
              {flaggedCount} field(s) flagged for investigation.
              {" "}
              {corrections.length} proposed correction(s).
              Unflagged fields are also unverified.
            </p>
          </div>
        </div>
      </div>

      {/* CORRECTION STATUS */}
      {corrections.length > 0 && (
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 dark:border-violet-900 dark:bg-violet-950/20">
          <div className="flex items-center gap-2">
            <FilePenLine className="h-4 w-4 text-violet-700 dark:text-violet-400" />

            <p className="text-xs font-bold text-violet-900 dark:text-violet-300">
              {corrections.length} evidence-linked draft correction(s)
            </p>
          </div>

          <p className="mt-1 text-[11px] leading-relaxed text-violet-800 dark:text-violet-300">
            Proposed wording is shown for reviewer comparison.
            It does not replace the original database or authorize
            clinical use.
          </p>
        </div>
      )}

      {/* FIELD-BY-FIELD AUDIT */}
      <div className="space-y-3">
        {audit.fields.map((fieldAudit) => {
          const fieldCorrections = corrections.filter(
            (correction) =>
              correction.field === fieldAudit.field
          );

          const linkedClaimIds = [
            ...fieldAudit.evidenceClaimIds,
            ...fieldCorrections.flatMap(
              (correction) => correction.evidenceClaimIds
            ),
          ];

          return (
            <details
              key={fieldAudit.field}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
            >
              <summary className="cursor-pointer p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-neutral-900 dark:text-white">
                    {FIELD_LABELS[fieldAudit.field]}
                  </span>

                  <span className="flex flex-wrap items-center gap-2">
                    {fieldCorrections.length > 0 && (
                      <span className="rounded-md bg-violet-100 px-2 py-1 text-[10px] font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                        {fieldCorrections.length} draft correction(s)
                      </span>
                    )}

                    <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                      {fieldAudit.status.replace(/_/g, " ")}
                      {" · "}
                      {fieldAudit.priority}
                    </span>
                  </span>
                </div>
              </summary>

              <div className="space-y-4 border-t border-neutral-200 p-3.5 dark:border-neutral-800">
                {/* ORIGINAL CONTENT */}
                <div>
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wide text-neutral-500">
                    Original database content — unverified
                  </p>

                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-950">
                    <p className="whitespace-pre-wrap break-words text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {formatLegacyValue(
                        disease,
                        fieldAudit.field
                      )}
                    </p>
                  </div>
                </div>

                {/* SAFETY CONCERN */}
                {fieldAudit.concern && (
                  <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 dark:border-rose-900 dark:bg-rose-950/20">
                    <p className="mb-1 flex items-center gap-1.5 text-[11px] font-bold text-rose-900 dark:text-rose-300">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      Safety or evidence concern
                    </p>

                    <p className="text-xs leading-relaxed text-rose-800 dark:text-rose-300">
                      {fieldAudit.concern}
                    </p>
                  </div>
                )}

                {/* EXISTING AUDIT PROPOSED CORRECTION */}
                {fieldAudit.proposedCorrection && (
                  <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 dark:border-violet-900 dark:bg-violet-950/20">
                    <p className="mb-1 text-[11px] font-bold text-violet-900 dark:text-violet-300">
                      Existing audit proposal — awaiting review
                    </p>

                    <p className="text-xs leading-relaxed text-violet-800 dark:text-violet-300">
                      {fieldAudit.proposedCorrection}
                    </p>
                  </div>
                )}

                {/* STRUCTURED CORRECTIONS */}
                {fieldCorrections.map((correction) => (
                  <div
                    key={correction.id}
                    className="overflow-hidden rounded-xl border border-violet-300 dark:border-violet-800"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-violet-100 px-3 py-2 dark:bg-violet-950/50">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold text-violet-950 dark:text-violet-200">
                        <FilePenLine className="h-3.5 w-3.5" />
                        Proposed Clinical Correction
                      </p>

                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-violet-800 dark:text-violet-300">
                        <Clock3 className="h-3 w-3" />
                        {correction.status.replace(/_/g, " ")}
                      </span>
                    </div>

                    <div className="space-y-3 p-3">
                      <div>
                        <p className="mb-1 text-[10px] font-extrabold uppercase tracking-wide text-violet-700 dark:text-violet-400">
                          Proposed wording — not approved
                        </p>

                        <p className="whitespace-pre-wrap text-xs leading-relaxed text-neutral-800 dark:text-neutral-200">
                          {correction.proposedText}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
                          Reason for correction
                        </p>

                        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {correction.rationale}
                        </p>
                      </div>

                      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
                        <p className="mb-1 flex items-center gap-1.5 text-[11px] font-bold text-amber-950 dark:text-amber-300">
                          <ShieldAlert className="h-3.5 w-3.5" />
                          Clinical safety considerations
                        </p>

                        <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-300">
                          {correction.safetyNotes}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-2 dark:border-neutral-800">
                        <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400">
                          Priority: {correction.priority}
                        </span>

                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                          <Clock3 className="h-3 w-3" />
                          Clinician approval pending
                        </span>
                      </div>

                      {correction.reviewNotes && (
                        <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                          Review notes: {correction.reviewNotes}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* LINKED EVIDENCE */}
                <div className="border-t border-neutral-200 pt-3 dark:border-neutral-800">
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
                    <BookOpen className="h-3.5 w-3.5" />
                    Linked Evidence
                    {" ("}
                    {new Set(linkedClaimIds).size}
                    {")"}
                  </p>

                  <EvidenceReferences
                    claimIds={linkedClaimIds}
                  />
                </div>
              </div>
            </details>
          );
        })}
      </div>

      {/* FINAL SAFETY FOOTER */}
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950">
        <p className="flex items-start gap-2 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
          This audit records evidence and proposed corrections
          for professional review. No clinical approval,
          diagnostic confirmation, test-omission authorization,
          or treatment authorization is implied.
        </p>
      </div>
    </section>
  );
}
