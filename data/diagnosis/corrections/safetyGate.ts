
import { DISEASE_DATABASE } from "../../diagnosisDatabase";
import { EVIDENCE_CLAIMS } from "../evidence/claims";
import { EVIDENCE_SOURCES } from "../evidence/sources";
import { CLINICAL_CORRECTIONS } from "./records";

import type { ClinicalCorrection } from "./types";

export type SafetyGateSeverity =
  | "critical"
  | "warning"
  | "info";

export interface SafetyGateIssue {
  correctionId: string;
  severity: SafetyGateSeverity;
  message: string;
}

export interface CorrectionSafetyResult {
  correctionId: string;
  diseaseId: string;
  readyForClinicalReview: boolean;
  clinicallyApproved: false;
  issues: SafetyGateIssue[];
}

const diseaseIds = new Set(
  DISEASE_DATABASE.map((disease) => disease.id)
);

const evidenceById = new Map(
  EVIDENCE_CLAIMS.map((claim) => [
    claim.id,
    claim,
  ])
);

const sourcesById = new Map(
  EVIDENCE_SOURCES.map((source) => [
    source.id,
    source,
  ])
);

export function evaluateCorrectionSafety(
  correction: ClinicalCorrection
): CorrectionSafetyResult {
  const issues: SafetyGateIssue[] = [];

  const addIssue = (
    severity: SafetyGateSeverity,
    message: string
  ) => {
    issues.push({
      correctionId: correction.id,
      severity,
      message,
    });
  };

  if (!diseaseIds.has(correction.diseaseId)) {
    addIssue(
      "critical",
      "Correction references an unknown disease."
    );
  }

  if (!correction.proposedText.trim()) {
    addIssue(
      "critical",
      "Proposed correction text is empty."
    );
  }

  if (!correction.rationale.trim()) {
    addIssue(
      "critical",
      "Clinical rationale is missing."
    );
  }

  if (!correction.safetyNotes.trim()) {
    addIssue(
      "critical",
      "Safety considerations are missing."
    );
  }

  if (correction.evidenceClaimIds.length === 0) {
    addIssue(
      "critical",
      "No evidence claims are linked."
    );
  }

  for (const claimId of correction.evidenceClaimIds) {
    const claim = evidenceById.get(claimId);

    if (!claim) {
      addIssue(
        "critical",
        `Evidence claim not found: ${claimId}`
      );
      continue;
    }

    if (claim.diseaseId !== correction.diseaseId) {
      addIssue(
        "critical",
        `Evidence claim belongs to another disease: ${claimId}`
      );
    }

    if (
      claim.assessment === "contradicted" ||
      claim.assessment === "insufficient_evidence"
    ) {
      addIssue(
        "warning",
        `Evidence requires further evaluation: ${claimId}`
      );
    }

    if (claim.citations.length === 0) {
      addIssue(
        "critical",
        `Evidence claim has no citations: ${claimId}`
      );
    }

    for (const citation of claim.citations) {
      const source = sourcesById.get(
        citation.sourceId
      );

      if (!source) {
        addIssue(
          "critical",
          `Source not found: ${citation.sourceId}`
        );
      }

      if (!citation.locator.trim()) {
        addIssue(
          "critical",
          `Citation locator missing: ${citation.sourceId}`
        );
      }
    }
  }

  if (correction.status === "approved") {
    addIssue(
      "critical",
      "Approval cannot be established by this registry."
    );
  }

  if (
    correction.status === "draft" ||
    correction.status === "awaiting_evidence"
  ) {
    addIssue(
      "info",
      "Correction remains a draft pending professional review."
    );
  }

  const hasCriticalIssue = issues.some(
    (issue) => issue.severity === "critical"
  );

  return {
    correctionId: correction.id,
    diseaseId: correction.diseaseId,
    readyForClinicalReview: !hasCriticalIssue,
    clinicallyApproved: false,
    issues,
  };
}

export function getAllCorrectionSafetyResults():
  CorrectionSafetyResult[] {
  return CLINICAL_CORRECTIONS.map(
    evaluateCorrectionSafety
  );
}

export function getCorrectionSafetySummary() {
  const results = getAllCorrectionSafetyResults();

  return {
    totalCorrections: results.length,
    readyForClinicalReview: results.filter(
      (result) => result.readyForClinicalReview
    ).length,
    blockedFromReview: results.filter(
      (result) => !result.readyForClinicalReview
    ).length,
    clinicallyApproved: 0,
    criticalIssues: results.reduce(
      (total, result) =>
        total +
        result.issues.filter(
          (issue) => issue.severity === "critical"
        ).length,
      0
    ),
    warnings: results.reduce(
      (total, result) =>
        total +
        result.issues.filter(
          (issue) => issue.severity === "warning"
        ).length,
      0
    ),
  };
}
