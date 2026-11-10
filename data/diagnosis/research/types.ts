
export type ResearchStatus =
  | "source_identified"
  | "locator_pending"
  | "under_review"
  | "verified";

export interface ResearchReference {
  id: string;
  title: string;
  tradition: "classical_ayurveda" | "modern_clinical";
  url?: string;
  locator?: string;
  status: ResearchStatus;
}

export interface DiseaseResearchRecord {
  diseaseId: string;
  classicalReferences: ResearchReference[];
  modernReferences: ResearchReference[];
  clinicalConcerns: string[];
  equivalenceEstablished: false;
  clinicalApproval: false;
}
