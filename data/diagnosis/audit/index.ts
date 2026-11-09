
import { DISEASE_AUDITS } from "./records";

import { EVIDENCE_CLAIMS } from "../evidence/claims";

import type {
  ClinicalField,
  DiseaseAudit,
} from "./types";

export * from "./types";
export { DISEASE_AUDITS };

const VALID_FIELDS = new Set<ClinicalField>([
  "modernCorrelate",
  "icdCode",
  "doshaDushya",
  "pratyatmaLakshana",
  "knockoutClue",
  "matchingFilterIds",
  "essentialTests",
  "avoidedTests",
  "firstLineChikitsa",
]);

export function getDiseaseAudit(
  diseaseId: string
): DiseaseAudit | null {
  const record = DISEASE_AUDITS.find(
    (audit) => audit.diseaseId === diseaseId
  );

  if (!record) return null;

  return {
    ...record,
    fields: record.fields.map((fieldAudit) => {
      const linkedClaims = EVIDENCE_CLAIMS.filter(
        (claim) =>
          claim.diseaseId === diseaseId &&
          claim.replacesLegacyField === fieldAudit.field &&
          VALID_FIELDS.has(fieldAudit.field)
      );

      return {
        ...fieldAudit,
        evidenceClaimIds: linkedClaims.map(
          (claim) => claim.id
        ),
      };
    }),
  };
}

export function getAuditSummary() {
  const totalDiseases = DISEASE_AUDITS.length;

  const totalFields = DISEASE_AUDITS.reduce(
    (count, audit) => count + audit.fields.length,
    0
  );

  const flaggedFields = DISEASE_AUDITS.reduce(
    (count, audit) =>
      count +
      audit.fields.filter(
        (field) => field.status === "under_review"
      ).length,
    0
  );

  return {
    totalDiseases,
    totalFields,
    flaggedFields,
    clinicianApproved: 0,
  };
}
