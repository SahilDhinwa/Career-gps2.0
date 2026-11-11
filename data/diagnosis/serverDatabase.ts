
import "server-only";

import {
  DISEASE_DATABASE,
  SYMPTOM_FILTERS,
} from "../diagnosisDatabase";

import {
  toPublicDisease,
} from "./publicDatabase";

export function getPublicDiagnosisData() {
  return {
    diseases: DISEASE_DATABASE.map(toPublicDisease),

    filters: SYMPTOM_FILTERS.map((filter) => ({
      id: filter.id,
      label: filter.label,
      hindi: filter.hindi,
      cluster: filter.cluster,
      category: filter.category,
    })),
  };
}

export function getReviewerDiseaseData() {
  return DISEASE_DATABASE;
}
