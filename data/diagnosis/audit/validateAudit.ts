
import { DISEASE_DATABASE } from "../../diagnosisDatabase";
import { EVIDENCE_CLAIMS } from "../evidence/claims";
import { DISEASE_AUDITS } from "./records";

import type { ClinicalField } from "./types";

const REQUIRED_FIELDS: ClinicalField[] = [
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

export function validateClinicalAudits(): string[] {
  const errors: string[] = [];

  const diseaseIds = new Set(
    DISEASE_DATABASE.map((disease) => disease.id)
  );

  const auditIds = new Set<string>();

  const claimIds = new Set(
    EVIDENCE_CLAIMS.map((claim) => claim.id)
  );

  // ============================================================
  // VALIDATE DISEASE AUDIT RECORDS
  // ============================================================

  for (const audit of DISEASE_AUDITS) {
    if (!diseaseIds.has(audit.diseaseId)) {
      errors.push(
        `Unknown disease audit: ${audit.diseaseId}`
      );
    }

    if (auditIds.has(audit.diseaseId)) {
      errors.push(
        `Duplicate disease audit: ${audit.diseaseId}`
      );
    }

    auditIds.add(audit.diseaseId);

    // No automatic clinical approval is permitted.
    if (audit.clinicalApproval !== false) {
      errors.push(
        `Unexpected clinical approval: ${audit.diseaseId}`
      );
    }

    const fields = new Set<ClinicalField>();

    // ==========================================================
    // VALIDATE INDIVIDUAL CLINICAL FIELDS
    // ==========================================================

    for (const field of audit.fields) {
      if (fields.has(field.field)) {
        errors.push(
          `Duplicate field ${field.field}: ${audit.diseaseId}`
        );
      }

      fields.add(field.field);

      // Validate manually attached evidence claim IDs.
      for (const claimId of field.evidenceClaimIds) {
        if (!claimIds.has(claimId)) {
          errors.push(
            `Unknown evidence claim ${claimId}: ${audit.diseaseId}`
          );
        }
      }
    }

    // ==========================================================
    // CHECK ALL REQUIRED CLINICAL FIELDS
    // ==========================================================

    for (const requiredField of REQUIRED_FIELDS) {
      if (!fields.has(requiredField)) {
        errors.push(
          `Missing audit field ${requiredField}: ${audit.diseaseId}`
        );
      }
    }
  }

  // ============================================================
  // CHECK EVERY DISEASE HAS AN AUDIT
  //
  // Use Array.forEach instead of iterating a Set directly.
  // Compatible with older TypeScript compilation targets.
  // ============================================================

  DISEASE_DATABASE.forEach((disease) => {
    if (!auditIds.has(disease.id)) {
      errors.push(
        `Missing disease audit: ${disease.id}`
      );
    }
  });

  return errors;
}
