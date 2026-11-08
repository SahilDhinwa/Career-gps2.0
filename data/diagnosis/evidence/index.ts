
export * from "./types";
export * from "./sources";
export * from "./claims";
export * from "./validateEvidence";

import { DISEASE_DATABASE } from "../../diagnosisDatabase";
import { DISEASE_EVIDENCE_RECORDS } from "./claims";
import { EVIDENCE_SOURCES } from "./sources";
import { validateEvidenceRegistry } from "./validateEvidence";

export const EVIDENCE_VALIDATION_ERRORS =
  validateEvidenceRegistry(
    DISEASE_EVIDENCE_RECORDS,
    EVIDENCE_SOURCES,
    DISEASE_DATABASE.map((disease) => disease.id)
  );

export function getDiseaseEvidence(diseaseId: string) {
  return (
    DISEASE_EVIDENCE_RECORDS.find(
      (record) => record.diseaseId === diseaseId
    ) ?? null
  );
}
