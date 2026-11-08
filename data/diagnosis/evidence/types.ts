
export type EvidenceSourceType =
  | "classical_text"
  | "clinical_guideline"
  | "systematic_review"
  | "clinical_study"
  | "medical_textbook"
  | "classification";

export type ClaimCategory =
  | "classical_description"
  | "modern_correlation"
  | "diagnosis"
  | "investigation"
  | "treatment"
  | "safety"
  | "cost";

export type ReviewStatus =
  | "unverified"
  | "under_review"
  | "clinician_reviewed"
  | "rejected";

export type EvidenceAssessment =
  | "supported"
  | "partially_supported"
  | "contradicted"
  | "insufficient_evidence"
  | "not_assessed";

export interface EvidenceSource {
  id: string;
  title: string;
  type: EvidenceSourceType;
  publisher: string;
  publicationYear?: number;
  url?: string;
  identifier?: string;
  edition?: string;
  language?: string;
  lastChecked?: string;
}

export interface EvidenceCitation {
  sourceId: string;
  locator: string;
  note?: string;
}

export interface ClinicalReview {
  status: ReviewStatus;
  reviewerName?: string;
  reviewerQualification?: string;
  reviewedAt?: string;
  nextReviewAt?: string;
  notes?: string;
}

export interface EvidenceClaim {
  id: string;
  diseaseId: string;
  category: ClaimCategory;
  statement: string;
  assessment: EvidenceAssessment;
  citations: EvidenceCitation[];
  review: ClinicalReview;
  replacesLegacyField?: string;
}

export interface DiseaseEvidenceRecord {
  diseaseId: string;
  review: ClinicalReview;
  claims: EvidenceClaim[];
}
