
export type PrimaryTextInspectionStatus =
  | "page_visually_inspected"
  | "historical_edition_pending";

export interface PrimaryTextInspection {
  id: string;
  diseaseId: string;
  work: string;
  chapter: string;
  passage: string;
  sourceTitle: string;
  sourceUrl: string;
  pdfPages: number[];
  printedPages: number[];
  status: PrimaryTextInspectionStatus;
  observations: string[];
  remainingChecks: string[];
  classicalTextVerified: false;
  clinicalApproval: false;
}

export const PRIMARY_TEXT_INSPECTIONS:
  PrimaryTextInspection[] = [
    {
      id: "grahani-digital-edition-001",
      diseaseId: "grahani-roga",
      work: "Madhava Nidana",
      chapter: "Grahani Roga Nidana",
      passage:
        "Chapter opening, verses 1–2; additional diagnostic verses on following pages",
      sourceTitle:
        "Maharishi University of Management — Madhava Nidana Sanskrit digital edition",
      sourceUrl:
        "https://vedicreserve.miu.edu/madhav_nidan/madhava_nidan.pdf",
      pdfPages: [13, 14, 15],
      printedPages: [13, 14, 15],
      status: "page_visually_inspected",
      observations: [
        "The Grahani Roga Nidana heading appears on printed page 13.",
        "Verses 1 and 2 appear directly beneath the chapter heading.",
        "Additional diagnostic descriptions continue on printed pages 14 and 15.",
        "The text includes descriptions of impaired digestion and variations in stool characteristics.",
        "The source is a typeset digital edition, not a verified historical printed-edition witness.",
      ],
      remainingChecks: [
        "Compare the selected verses with a historical printed edition.",
        "Record publisher, editor, year and page for that edition.",
        "Transcribe the selected Sanskrit passage exactly.",
        "Document variant readings and translation choices.",
        "Obtain independent scholarly review.",
      ],
      classicalTextVerified: false,
      clinicalApproval: false,
    },
    {
      id: "amlapitta-historical-edition-001",
      diseaseId: "amlapitta",
      work: "Madhava Nidana",
      chapter: "Amlapitta Nidana",
      passage: "Chapter 51, verse 2",
      sourceTitle:
        "Historical printed-edition comparison pending",
      sourceUrl:
        "https://vedicreserve.miu.edu/madhav_nidan/madhava_nidan.pdf",
      pdfPages: [],
      printedPages: [],
      status: "historical_edition_pending",
      observations: [
        "Amlapitta chapter 51, verse 2 has been identified in secondary digital transcriptions.",
        "The selected historical printed edition has not been visually compared.",
        "The linked digital PDF is not evidence of an inspected Amlapitta passage.",
      ],
      remainingChecks: [
        "Locate the Amlapitta passage in an identifiable printed edition.",
        "Record the exact page and verse.",
        "Compare against existing digital transcriptions.",
        "Resolve textual variants.",
        "Review the Sanskrit interpretation independently.",
      ],
      classicalTextVerified: false,
      clinicalApproval: false,
    },
  ];

export function getPrimaryTextInspections(
  diseaseId: string
): PrimaryTextInspection[] {
  return PRIMARY_TEXT_INSPECTIONS.filter(
    (record) => record.diseaseId === diseaseId
  );
}

export function validatePrimaryTextInspections(): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const record of PRIMARY_TEXT_INSPECTIONS) {
    if (ids.has(record.id)) {
      errors.push(`Duplicate inspection: ${record.id}`);
    }

    ids.add(record.id);

    if (
      record.status === "page_visually_inspected" &&
      record.pdfPages.length === 0
    ) {
      errors.push(
        `Inspected record has no page locator: ${record.id}`
      );
    }

    if (
      record.status === "historical_edition_pending" &&
      record.pdfPages.length > 0
    ) {
      errors.push(
        `Pending inspection incorrectly lists inspected pages: ${record.id}`
      );
    }

    if (
      record.classicalTextVerified !== false ||
      record.clinicalApproval !== false
    ) {
      errors.push(
        `Invalid verification or approval: ${record.id}`
      );
    }
  }

  return errors;
}
