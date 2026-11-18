
import "server-only";

import {
  DISEASE_DATABASE,
  SYMPTOM_FILTERS,
} from "../diagnosisDatabase";

import {
  toPublicDisease,
} from "./publicDatabase";

import { requireReviewer } from "../../lib/auth/reviewer";

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

export async function getReviewerDiseaseData() {
  await requireReviewer();

  return DISEASE_DATABASE.map((disease) => ({
    ...disease,
    matchingFilterIds: [...disease.matchingFilterIds],
  }));
}
