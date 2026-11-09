
import { DISEASE_DATABASE } from "../../diagnosisDatabase";
import { EVIDENCE_CLAIMS } from "../evidence/claims";
import { CLINICAL_CORRECTIONS } from "./records";

import type { ClinicalField } from "../audit/types";

const VALID_FIELDS: ClinicalField[] = [
  "modernCorrelate",
  "icdCode",
  "doshaDushya",
  "pratyatmaLakshana",
  "knockoutClue",
  "matchingFilterIds",
  "essentialTests",
  "avoidedTests",
  "firstLineChikitsa",
];

export function validateClinicalCorrections(): string[] {
  const errors: string[] = [];

  const diseaseIds = new Set(
    DISEASE_DATABASE.map((disease) => disease.id)
  );

  const correctionIds = new Set<string>();

  const evidenceById = new Map(
    EVIDENCE_CLAIMS.map((claim) => [claim.id, claim])
  );

  for (const correction of CLINICAL_CORRECTIONS) {
    if (correctionIds.has(correction.id)) {
      errors.push(
        `Duplicate correction ID: ${correction.id}`
      );
    }

    correctionIds.add(correction.id);

    if (!diseaseIds.has(correction.diseaseId)) {
      errors.push(
        `Unknown disease: ${correction.diseaseId}`
      );
    }

    if (!VALID_FIELDS.includes(correction.field)) {
      errors.push(
        `Unknown field: ${correction.id}`
      );
    }

    if (!correction.proposedText.trim()) {
      errors.push(
        `Empty proposed correction: ${correction.id}`
      );
    }

    if (!correction.rationale.trim()) {
      errors.push(
        `Missing rationale: ${correction.id}`
      );
    }

    if (!correction.safetyNotes.trim()) {
      errors.push(
        `Missing safety notes: ${correction.id}`
      );
    }

    if (correction.evidenceClaimIds.length === 0) {
      errors.push(
        `No evidence linked: ${correction.id}`
      );
    }

    if (correction.status === "approved") {
      errors.push(
        `Approval is not permitted in the draft registry: ${correction.id}`
      );
    }

    const seenClaimIds = new Set<string>();

    for (const claimId of correction.evidenceClaimIds) {
      if (seenClaimIds.has(claimId)) {
        errors.push(
          `Duplicate evidence link: ${correction.id} -> ${claimId}`
        );
      }

      seenClaimIds.add(claimId);

      const claim = evidenceById.get(claimId);

      if (!claim) {
        errors.push(
          `Unknown evidence claim: ${correction.id} -> ${claimId}`
        );
        continue;
      }

      if (claim.diseaseId !== correction.diseaseId) {
        errors.push(
          `Evidence disease mismatch: ${correction.id} -> ${claimId}`
        );
      }
    }
  }

  return errors;
}
