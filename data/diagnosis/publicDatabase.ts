
import type {
  DiseaseProfile,
  SystemClusterId,
} from "../diagnosisDatabase";

export interface PublicDiseaseProfile {
  id: string;
  cluster: SystemClusterId;
  hindiName: string;
  sanskritName: string;
  matchingFilterIds: string[];
}

export function toPublicDisease(
  disease: DiseaseProfile
): PublicDiseaseProfile {
  return {
    id: disease.id,
    cluster: disease.cluster,
    hindiName: disease.hindiName,
    sanskritName: disease.sanskritName,
    matchingFilterIds: [...disease.matchingFilterIds],
  };
}
