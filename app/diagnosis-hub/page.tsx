
import {
  getPublicDiagnosisData,
} from "../../data/diagnosis/serverDatabase";

import DiagnosisHubClient from "../../components/diagnosis/DiagnosisHubClient";

export default function DiagnosisHubPage() {
  const { diseases, filters } =
    getPublicDiagnosisData();

  return (
    <DiagnosisHubClient
      diseases={diseases}
      filters={filters}
    />
  );
}
