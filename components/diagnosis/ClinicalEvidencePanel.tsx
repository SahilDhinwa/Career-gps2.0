
"use client";

import React from "react";
import {
  BookOpen,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import {
  getDiseaseEvidence,
  EVIDENCE_SOURCES,
} from "../../data/diagnosis/evidence";

import type {
  EvidenceClaim,
  EvidenceSource,
  EvidenceAssessment,
} from "../../data/diagnosis/evidence";

interface ClinicalEvidencePanelProps {
  diseaseId: string;
}

const assessmentLabels: Record<EvidenceAssessment, string> = {
  supported: "Source supports statement",
  partially_supported: "Partially supported",
  contradicted: "Contradicted by evidence",
  insufficient_evidence: "Insufficient evidence",
  not_assessed: "Not assessed",
};

const sourceTypes: Record<EvidenceSource["type"], string> = {
  classical_text: "Classical Ayurvedic text",
  clinical_guideline: "Clinical guideline",
  systematic_review: "Systematic review",
  clinical_study: "Clinical study",
  medical_textbook: "Medical textbook",
  classification: "Classification reference",
};

function SourceReference({
  sourceId,
  locator,
  note,
}: {
  sourceId: string;
  locator: string;
  note?: string;
}) {
  const source = EVIDENCE_SOURCES.find(
    (item) => item.id === sourceId
  );

  if (!source) {
    return (
      <p className="text-xs text-red-700 dark:text-red-400">
        Reference unavailable: {sourceId}
      </p>
    );
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
      <p className="text-xs font-bold text-neutral-900 dark:text-white">
        {source.title}
      </p>

      <p className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-400">
        {source.publisher}
        {source.identifier ? ` · ${source.identifier}` : ""}
        {source.publicationYear
          ? ` · Published ${source.publicationYear}`
          : ""}
      </p>

      <p className="mt-1 text-[11px] text-neutral-700 dark:text-neutral-300">
        {sourceTypes[source.type]} · {locator}
      </p>

      {note && (
        <p className="mt-2 text-[11px] text-neutral-600 dark:text-neutral-400">
          {note}
        </p>
      )}

      {source.url && (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-violet-700 underline-offset-2 hover:underline dark:text-violet-400"
        >
          Read original source
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

function EvidenceClaimCard({
  claim,
}: {
  claim: EvidenceClaim;
}) {
  const isSupported = claim.assessment === "supported";
  const isContradicted = claim.assessment === "contradicted";

  return (
    <article className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
          {claim.category.replace(/_/g, " ")}
        </span>

        <span
          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-bold ${
            isSupported
              ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
              : isContradicted
              ? "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-300"
              : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"
          }`}
        >
          {isSupported ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <AlertTriangle className="h-3 w-3" />
          )}

          {assessmentLabels[claim.assessment]}
        </span>
      </div>

      <p className="text-xs leading-relaxed text-neutral-800 dark:text-neutral-200">
        {claim.statement}
      </p>

      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-2.5 dark:border-amber-900 dark:bg-amber-950/20">
        <p className="text-[11px] font-bold text-amber-950 dark:text-amber-200">
          Clinical review:{" "}
          {claim.review.status.replace(/_/g, " ")}
        </p>

        {claim.review.notes && (
          <p className="mt-1 text-[11px] leading-relaxed text-amber-900 dark:text-amber-300">
            {claim.review.notes}
          </p>
        )}
      </div>

      {claim.replacesLegacyField && (
        <p className="mt-3 text-[11px] font-medium text-rose-700 dark:text-rose-400">
          Legacy field flagged for correction:{" "}
          {claim.replacesLegacyField}
        </p>
      )}

      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
          <BookOpen className="h-3.5 w-3.5" />
          Sources and exact references
        </p>

        {claim.citations.length === 0 ? (
          <p className="text-xs text-amber-700 dark:text-amber-400">
            No source has been verified for this claim.
          </p>
        ) : (
          claim.citations.map((citation, index) => (
            <SourceReference
              key={`${citation.sourceId}-${index}`}
              sourceId={citation.sourceId}
              locator={citation.locator}
              note={citation.note}
            />
          ))
        )}
      </div>
    </article>
  );
}

export default function ClinicalEvidencePanel({
  diseaseId,
}: ClinicalEvidencePanelProps) {
  const record = getDiseaseEvidence(diseaseId);

  if (!record) {
    return (
      <div
        role="status"
        className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-900 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300"
      >
        Evidence record missing. This disease profile has not been
        validated for clinical use.
      </div>
    );
  }

  const reviewed =
    record.review.status === "clinician_reviewed";

  return (
    <section
      aria-label="Clinical evidence and references"
      className="space-y-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 dark:text-white">
          <BookOpen className="h-4 w-4 text-violet-600 dark:text-violet-400" />
          Clinical Evidence & References
        </h4>

        <span
          className={`rounded-md px-2.5 py-1 text-[10px] font-bold ${
            reviewed
              ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
              : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"
          }`}
        >
          {reviewed
            ? "Clinician-reviewed record"
            : "Clinical review required"}
        </span>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
        <div className="flex items-start gap-2">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400" />

          <div>
            <p className="text-xs font-bold text-amber-950 dark:text-amber-200">
              Evidence interpretation
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-amber-900 dark:text-amber-300">
              Source-supported statements are not equivalent to
              clinician-approved disease profiles. Classical
              Ayurvedic diagnoses and modern medical conditions
              must be evaluated independently. Existing diagnosis,
              investigation, cost-saving, and treatment claims
              remain unverified unless individually reviewed.
            </p>
          </div>
        </div>
      </div>

      {record.review.notes && (
        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {record.review.notes}
        </p>
      )}

      {record.claims.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 p-5 dark:border-neutral-700">
          <p className="text-xs font-bold text-neutral-900 dark:text-white">
            Evidence review pending
          </p>

          <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
            No individual evidence claims have been registered
            for this disease yet. Its original clinical content
            must not be interpreted as verified.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            {record.claims.length} registered evidence{" "}
            {record.claims.length === 1 ? "claim" : "claims"}
          </p>

          {record.claims.map((claim) => (
            <EvidenceClaimCard key={claim.id} claim={claim} />
          ))}
        </div>
      )}

      <div className="border-t border-neutral-200 pt-3 dark:border-neutral-800">
        <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          ATREYA evidence registry · Source references support
          individual statements only. No disease profile is
          automatically approved for clinical decision-making.
        </p>
      </div>
    </section>
  );
}
