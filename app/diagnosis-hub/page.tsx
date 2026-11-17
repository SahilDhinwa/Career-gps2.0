
import { Plus_Jakarta_Sans } from "next/font/google";

import DiagnosisHubClient from "../../components/diagnosis/DiagnosisHubClient";

import {
  getPublicDiagnosisData,
} from "../../data/diagnosis/serverDatabase";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function DiagnosisHubPage() {
  const { diseases, filters } =
    getPublicDiagnosisData();

  return (
    <div className={jakarta.className}>
      <DiagnosisHubClient
        diseases={diseases}
        filters={filters}
      />
    </div>
  );
}
