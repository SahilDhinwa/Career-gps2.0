
export type AuditStatus =
  | "pending"
  | "under_review"
  | "supported"
  | "partially_supported"
  | "contradicted"
  | "insufficient_evidence";

export type AuditPriority =
  | "critical"
  | "high"
  | "moderate"
  | "low";

export type ClinicalField =
  | "modernCorrelate"
  | "icdCode"
  | "doshaDushya"
  | "pratyatmaLakshana"
  | "knockoutClue"
  | "matchingFilterIds"
  | "essentialTests"
  | "avoidedTests"
  | "firstLineChikitsa";

export interface ClinicalFieldAudit {
  field: ClinicalField;
  status: AuditStatus;
  priority: AuditPriority;
  evidenceClaimIds: string[];
  concern?: string;
  proposedCorrection?: string;
}

export interface DiseaseAudit {
  diseaseId: string;
  clinicalApproval: false;
  fields: ClinicalFieldAudit[];
  lastReviewedAt?: string;
  reviewer?: string;
}
