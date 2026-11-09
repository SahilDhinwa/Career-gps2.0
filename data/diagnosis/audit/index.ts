
import { DISEASE_AUDITS } from "./records";
import { EVIDENCE_CLAIMS } from "../evidence/claims";

import type {
  ClinicalField,
  DiseaseAudit,
} from "./types";

// ============================================================
// PUBLIC EXPORTS
// ============================================================

export * from "./types";

export { DISEASE_AUDITS };

export { validateClinicalAudits } from "./validateAudit";

// ============================================================
// VALID CLINICAL FIELDS
// ============================================================

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

// ============================================================
// GET DISEASE AUDIT WITH LINKED EVIDENCE
// ============================================================

export function getDiseaseAudit(
  diseaseId: string
): DiseaseAudit | null {
  const record = DISEASE_AUDITS.find(
    (audit) => audit.diseaseId === diseaseId
  );

  if (!record) return null;

  const fields = record.fields.map((fieldAudit) => {
    if (!VALID_FIELDS.has(fieldAudit.field)) {
      return {
        ...fieldAudit,
        evidenceClaimIds: [],
      };
    }

    const linkedClaims = EVIDENCE_CLAIMS.filter(
      (claim) =>
        claim.diseaseId === diseaseId &&
        claim.replacesLegacyField === fieldAudit.field
    );

    const evidenceClaimIds = Array.from(
      new Set([
        ...fieldAudit.evidenceClaimIds,
        ...linkedClaims.map((claim) => claim.id),
      ])
    );

    return {
      ...fieldAudit,
      evidenceClaimIds,
    };
  });

  return {
    ...record,
    // Approval must never be inferred automatically.
    clinicalApproval: false,
    fields,
  };
}

// ============================================================
// GET ALL DISEASE AUDITS WITH LINKED EVIDENCE
// ============================================================

export function getAllDiseaseAudits(): DiseaseAudit[] {
  return DISEASE_AUDITS.map((audit) => {
    const linked = getDiseaseAudit(audit.diseaseId);

    return linked ?? audit;
  });
}

// ============================================================
// CLINICAL AUDIT SUMMARY
// ============================================================

export interface ClinicalAuditSummary {
  totalDiseases: number;
  totalFields: number;
  flaggedFields: number;
  pendingFields: number;
  linkedEvidenceClaims: number;
  clinicianApproved: number;
}

export function getAuditSummary(): ClinicalAuditSummary {
  const audits = getAllDiseaseAudits();

  const totalFields = audits.reduce(
    (count, audit) => count + audit.fields.length,
    0
  );

  const flaggedFields = audits.reduce(
    (count, audit) =>
      count +
      audit.fields.filter(
        (field) =>
          field.status === "under_review" ||
          field.status === "contradicted" ||
          field.status === "partially_supported"
      ).length,
    0
  );

  const pendingFields = audits.reduce(
    (count, audit) =>
      count +
      audit.fields.filter(
        (field) => field.status === "pending"
      ).length,
    0
  );

  const linkedClaimIds = new Set<string>();

  audits.forEach((audit) => {
    audit.fields.forEach((field) => {
      field.evidenceClaimIds.forEach((claimId) => {
        linkedClaimIds.add(claimId);
      });
    });
  });

  return {
    totalDiseases: audits.length,
    totalFields,
    flaggedFields,
    pendingFields,
    linkedEvidenceClaims: linkedClaimIds.size,
    clinicianApproved: 0,
  };
}
