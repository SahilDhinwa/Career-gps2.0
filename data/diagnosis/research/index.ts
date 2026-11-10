
import { DISEASE_RESEARCH_RECORDS } from "./records";
import { DISEASE_DATABASE } from "../../diagnosisDatabase";

export * from "./types";
export { DISEASE_RESEARCH_RECORDS };

export function getDiseaseResearch(diseaseId: string) {
  return (
    DISEASE_RESEARCH_RECORDS.find(
      (record) => record.diseaseId === diseaseId
    ) ?? null
  );
}

export function validateDiseaseResearch(): string[] {
  const errors: string[] = [];
  const diseaseIds = new Set(
    DISEASE_DATABASE.map((disease) => disease.id)
  );
  const seen = new Set<string>();

  DISEASE_RESEARCH_RECORDS.forEach((record) => {
    if (!diseaseIds.has(record.diseaseId)) {
      errors.push(`Unknown disease: ${record.diseaseId}`);
    }

    if (seen.has(record.diseaseId)) {
      errors.push(`Duplicate research record: ${record.diseaseId}`);
    }
    seen.add(record.diseaseId);

    if (record.clinicalApproval !== false) {
      errors.push(`Invalid clinical approval: ${record.diseaseId}`);
    }

    if (record.equivalenceEstablished !== false) {
      errors.push(`Invalid equivalence status: ${record.diseaseId}`);
    }

    record.classicalReferences.forEach((source) => {
      if (source.tradition !== "classical_ayurveda") {
        errors.push(`Invalid classical reference: ${record.diseaseId}`);
      }
    });

    record.modernReferences.forEach((source) => {
      if (source.tradition !== "modern_clinical") {
        errors.push(`Invalid modern reference: ${record.diseaseId}`);
      }
    });
  });

  return errors;
}

export function getResearchSummary() {
  const records = DISEASE_RESEARCH_RECORDS;

  return {
    diseasesCovered: records.length,
    classicalPassagesVerified: records.reduce(
      (count, record) =>
        count +
        record.classicalReferences.filter(
          (source) => source.status === "verified"
        ).length,
      0
    ),
    clinicalApprovals: 0,
    establishedEquivalences: 0,
  };
}
