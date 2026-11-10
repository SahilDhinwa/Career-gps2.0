
export type FindingStatus =
  | "guideline_checked"
  | "text_located_review_pending";

export interface ResearchFinding {
  id: string;
  diseaseId: string;
  tradition: "classical_ayurveda" | "modern_clinical";
  sourceTitle: string;
  sourceUrl: string;
  locator: string;
  finding: string;
  status: FindingStatus;
  safetyNote: string;
}

export const RESEARCH_FINDINGS: ResearchFinding[] = [
  {
    id: "amlapitta-classical-001",
    diseaseId: "amlapitta",
    tradition: "classical_ayurveda",
    sourceTitle:
      "Madhava Nidana with Sudhalahari Commentary",
    sourceUrl:
      "https://sa.wikisource.org/wiki/पृष्ठम्:माधवनिदानम्_(सुधालहरीव्याखासहितम्).djvu/१७७",
    locator:
      "Amlapitta Nidana, general symptoms, verse 2; scanned page 177",
    finding:
      "The passage describes indigestion, fatigue, nausea, sour or bitter eructation, heaviness, burning sensations and impaired appetite. Exact wording and edition alignment require review.",
    status: "text_located_review_pending",
    safetyNote:
      "Traditional symptom descriptions are not validated diagnostic criteria for GERD or dyspepsia.",
  },
  {
    id: "amlapitta-modern-001",
    diseaseId: "amlapitta",
    tradition: "modern_clinical",
    sourceTitle:
      "NICE CG184: Dyspepsia and GORD",
    sourceUrl:
      "https://www.nice.org.uk/guidance/cg184/chapter/Recommendations",
    locator:
      "Recommendations 1.3.1, 1.4.1–1.4.4",
    finding:
      "Dyspepsia assessment includes symptoms such as recurrent epigastric pain, heartburn or acid regurgitation. Significant acute gastrointestinal bleeding requires immediate specialist referral. H. pylori testing is part of appropriate dyspepsia management.",
    status: "guideline_checked",
    safetyNote:
      "These recommendations concern modern dyspepsia, not proven equivalence with Amlapitta. Testing and referral depend on clinical context.",
  },
  {
    id: "grahani-classical-001",
    diseaseId: "grahani-roga",
    tradition: "classical_ayurveda",
    sourceTitle:
      "Madhava Nidana — Grahani Roga Nidana",
    sourceUrl:
      "https://sa.wikisource.org/wiki/माधवनिदानम्",
    locator:
      "Grahani Roga Nidana, verses 1–4",
    finding:
      "The classical passage discusses impaired digestion and variable stool characteristics, including alternating formed and loose stools. Exact interpretation requires textual review.",
    status: "text_located_review_pending",
    safetyNote:
      "Grahani Roga cannot automatically be equated with IBS, malabsorption or inflammatory bowel disease.",
  },
  {
    id: "grahani-modern-001",
    diseaseId: "grahani-roga",
    tradition: "modern_clinical",
    sourceTitle:
      "NICE CG61: Irritable Bowel Syndrome in Adults",
    sourceUrl:
      "https://www.nice.org.uk/guidance/cg61/chapter/recommendations",
    locator:
      "Recommendations 1.1.1.1–1.1.2.2",
    finding:
      "IBS assessment considers chronic abdominal symptoms, bowel-habit changes and red flags. In patients meeting IBS diagnostic criteria, recommended exclusion tests include full blood count, inflammatory markers and coeliac serology.",
    status: "guideline_checked",
    safetyNote:
      "These recommendations apply to suspected IBS after clinical assessment. They do not justify automatically omitting investigations in every patient with Grahani-like symptoms.",
  },
];

export function getResearchFindings(
  diseaseId: string
): ResearchFinding[] {
  return RESEARCH_FINDINGS.filter(
    (finding) => finding.diseaseId === diseaseId
  );
}
