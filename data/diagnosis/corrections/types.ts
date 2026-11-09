
import type { ClinicalField } from "../audit/types";

export type CorrectionStatus =
  | "draft"
  | "awaiting_evidence"
  | "under_clinical_review"
  | "rejected"
  | "approved";

export type CorrectionPriority =
  | "critical"
  | "high"
  | "moderate"
  | "low";

export interface ClinicalCorrection {
  id: string;
  diseaseId: string;
  field: ClinicalField;

  priority: CorrectionPriority;
  status: CorrectionStatus;

  // Existing database content remains untouched.
  proposedText: string;

  // IDs from the existing evidence registry.
  evidenceClaimIds: string[];

  rationale: string;
  safetyNotes: string;

  // Must be completed through a separate clinician review.
  reviewer?: string;
  reviewedAt?: string;
  reviewNotes?: string;
}
