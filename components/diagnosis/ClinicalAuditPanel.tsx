
"use client";

import React from "react";
import {
  AlertTriangle,
  ClipboardList,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

import type { DiseaseProfile } from "../../data/diagnosisDatabase";
import { getDiseaseAudit } from "../../data/diagnosis/audit";
import { EVIDENCE_CLAIMS, EVIDENCE_SOURCES } from "../../data/diagnosis/evidence";

import type { ClinicalField } from "../../data/diagnosis/audit";

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
  const value = disease[field];

  if (typeof value === "string") {
    return value;
  }

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

  return "Unavailable";
}

export default function ClinicalAuditPanel({
  disease,
}: ClinicalAuditPanelProps) {
  const audit = getDiseaseAudit(disease.id);

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

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
        <div className="flex items-start gap-2">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />

          <div className="space-y-1">
            <p className="text-xs font-bold text-amber-950 dark:text-amber-200">
              Preliminary audit — not clinical validation
            </p>

            <p className="text-[11px] leading-relaxed text-amber-900 dark:text-amber-300">
              {audit.fields.length} clinical fields registered.
              {" "}{flaggedCount} field(s) flagged for further
              investigation. Unflagged fields are also unverified.
              Existing content is preserved for comparison,
              not endorsed for patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {audit.fields.map((fieldAudit) => {
          const linkedClaims = fieldAudit.evidenceClaimIds
            .map((id) =>
              EVIDENCE_CLAIMS.find((claim) => claim.id === id)
            )
            .filter(
              (claim): claim is (typeof EVIDENCE_CLAIMS)[number] =>
                claim !== undefined
            );

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

                  <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                    {fieldAudit.status.replace(/_/g, " ")}
                    {" · "}
                    {fieldAudit.priority} priority
                  </span>
                </div>
              </summary>

              <div className="space-y-3 border-t border-neutral-200 p-3.5 dark:border-neutral-800">
                <div>
                  <p className="mb-1 text-[10px] font-extrabold uppercase tracking-wide text-neutral-500">
                    Original database content
                  </p>

                  <p className="whitespace-pre-wrap break-words text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {formatLegacyValue(
                      disease,
                      fieldAudit.field
                    )}
                  </p>
                </div>

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

                {fieldAudit.proposedCorrection && (
                  <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 dark:border-violet-900 dark:bg-violet-950/20">
                    <p className="mb-1 text-[11px] font-bold text-violet-900 dark:text-violet-300">
                      Proposed correction — awaiting review
                    </p>

                    <p className="text-xs leading-relaxed text-violet-800 dark:text-violet-300">
                      {fieldAudit.proposedCorrection}
                    </p>
                  </div>
                )}

                <div>
                  <p className="mb-2 text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
                    Linked evidence ({linkedClaims.length})
                  </p>

                  {linkedClaims.length === 0 ? (
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      No evidence claim linked to this field yet.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {linkedClaims.map((claim) => (
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
                              (item) =>
                                item.id === citation.sourceId
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
                                    Missing source:{" "}
                                    {citation.sourceId}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
