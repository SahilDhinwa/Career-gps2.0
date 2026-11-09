
import { CLINICAL_CORRECTIONS } from "./records";

import type { ClinicalCorrection } from "./types";

export * from "./types";
export { CLINICAL_CORRECTIONS };

export { validateClinicalCorrections } from "./validateCorrections";

export function getDiseaseCorrections(
  diseaseId: string
): ClinicalCorrection[] {
  return CLINICAL_CORRECTIONS.filter(
    (correction) => correction.diseaseId === diseaseId
  );
}

export function getFieldCorrections(
  diseaseId: string,
  field: ClinicalCorrection["field"]
): ClinicalCorrection[] {
  return CLINICAL_CORRECTIONS.filter(
    (correction) =>
      correction.diseaseId === diseaseId &&
      correction.field === field
  );
}

export function getCorrectionSummary() {
  const diseases = new Set(
    CLINICAL_CORRECTIONS.map(
      (correction) => correction.diseaseId
    )
  );

  return {
    totalCorrections: CLINICAL_CORRECTIONS.length,
    diseasesCovered: diseases.size,
    drafts: CLINICAL_CORRECTIONS.filter(
      (correction) => correction.status === "draft"
    ).length,
    awaitingEvidence: CLINICAL_CORRECTIONS.filter(
      (correction) =>
        correction.status === "awaiting_evidence"
    ).length,
    underClinicalReview: CLINICAL_CORRECTIONS.filter(
      (correction) =>
        correction.status === "under_clinical_review"
    ).length,
    approved: 0,
  };
}
