
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

    if (audit.clinicalApproval !== false) {
      errors.push(
        `Unexpected clinical approval: ${audit.diseaseId}`
      );
    }

    const fields = new Set<ClinicalField>();

    for (const field of audit.fields) {
      if (fields.has(field.field)) {
        errors.push(
          `Duplicate field ${field.field}: ${audit.diseaseId}`
        );
      }

      fields.add(field.field);

      for (const claimId of field.evidenceClaimIds) {
        if (!claimIds.has(claimId)) {
          errors.push(
            `Unknown evidence claim ${claimId}: ${audit.diseaseId}`
          );
        }
      }
    }

    for (const requiredField of REQUIRED_FIELDS) {
      if (!fields.has(requiredField)) {
        errors.push(
          `Missing audit field ${requiredField}: ${audit.diseaseId}`
        );
      }
    }
  }

  for (const diseaseId of diseaseIds) {
    if (!auditIds.has(diseaseId)) {
      errors.push(`Missing disease audit: ${diseaseId}`);
    }
  }

  return errors;
}
