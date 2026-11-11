
import type {
  DiseaseProfile,
  SystemClusterId,
} from "../diagnosisDatabase";

export interface PublicDiseaseProfile {
  id: string;
  cluster: SystemClusterId;
  hindiName: string;
  sanskritName: string;
  modernCorrelate: string;
  icdCode: string;
  pratyatmaLakshana: string;
  knockoutClue: string;
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
    modernCorrelate: disease.modernCorrelate,
    icdCode: disease.icdCode,
    pratyatmaLakshana: disease.pratyatmaLakshana,
    knockoutClue: disease.knockoutClue,
    matchingFilterIds: [...disease.matchingFilterIds],
  };
}
