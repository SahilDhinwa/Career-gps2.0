
import { DISEASE_DATABASE } from "../../diagnosisDatabase";

// ============================================================
// EDITION COMPARISON TYPES
// ============================================================

export type EditionReviewStatus =
  | "located"
  | "transcriptions_compared"
  | "printed_edition_verified";

export type EditionWitnessKind =
  | "digital_transcription"
  | "published_contents"
  | "printed_scan";

export interface EditionWitness {
  id: string;
  title: string;
  url: string;
  kind: EditionWitnessKind;
  inspected: boolean;
  observation: string;
}

export interface EditionComparison {
  id: string;
  diseaseId: string;
  work: string;
  classicalChapter: string;
  verseReference: string;
  status: EditionReviewStatus;
  verifiedSanskrit: string | null;
  translationStatus:
    | "working_interpretation"
    | "scholarly_reviewed";
  witnesses: EditionWitness[];
  outstandingChecks: string[];
  clinicalApproval: false;
}

// ============================================================
// SOURCE COMPARISON REGISTRY
// ============================================================

export const EDITION_COMPARISONS: EditionComparison[] = [
  {
    id: "edition-amlapitta-001",
    diseaseId: "amlapitta",
    work: "Madhava Nidana",
    classicalChapter: "51 — Amlapitta Nidana",
    verseReference: "2",
    status: "transcriptions_compared",
    verifiedSanskrit: null,
    translationStatus: "working_interpretation",

    witnesses: [
      {
        id: "amlapitta-witness-1",
        title:
          "Ayureveryday — Amlapitta Nidana",
        url:
          "https://ayureveryday.com/chapter-51-amlapitta-nidana/",
        kind: "digital_transcription",
        inspected: true,
        observation:
          "Identifies Madhava Nidana chapter 51, verse 2 and provides a Sanskrit transcription with an English interpretation. Printed-edition verification remains pending.",
      },
      {
        id: "amlapitta-witness-2",
        title:
          "Jnanalaya — Madhava Nidana",
        url:
          "https://jnanalaya.kailasa.ai/books/madhava-nidana/madhava-nidana-2",
        kind: "digital_transcription",
        inspected: true,
        observation:
          "Digital transcription used as a secondary comparison source. Exact wording and verse numbering require confirmation against an identified printed edition.",
      },
      {
        id: "amlapitta-witness-3",
        title:
          "Madhava Nidana with Madhukosa — Published Contents",
        url:
          "https://www.exoticindia.com/book/details/madhava-nidana-of-madhavakara-with-commentary-of-madhukosa-ancient-text-on-ayurvedic-diagnosis-nal657/",
        kind: "published_contents",
        inspected: true,
        observation:
          "Published contents identify chapter 51 as Amlapitta Nidana. The contents do not establish the exact Sanskrit reading of verse 2.",
      },
    ],

    outstandingChecks: [
      "Inspect chapter 51, verse 2 in an identified printed Sanskrit edition.",
      "Record editor, publisher, year and exact printed page.",
      "Compare Sanskrit wording and textual variants.",
      "Check compound boundaries and transliteration.",
      "Obtain independent scholarly translation review.",
    ],

    clinicalApproval: false,
  },

  {
    id: "edition-grahani-001",
    diseaseId: "grahani-roga",
    work: "Madhava Nidana",
    classicalChapter: "4 — Grahani Roga Nidana",
    verseReference:
      "Specific diagnostic passage selection pending",
    status: "located",
    verifiedSanskrit: null,
    translationStatus: "working_interpretation",

    witnesses: [
      {
        id: "grahani-witness-1",
        title:
          "The Madhavanidana with Madhukosa — G. J. Meulenbeld",
        url:
          "https://www.motilalbanarsidass.com/products/the-madhavanidana-with-madhukosa-the-commentary-by-vijayaraksita-and-srikanthadatta-chapters-1-10",
        kind: "published_contents",
        inspected: true,
        observation:
          "Published contents identify chapter 4 as Grahani Roga, beginning on page 219 of this edition. This page number belongs specifically to the Meulenbeld edition.",
      },
      {
        id: "grahani-witness-2",
        title:
          "Planet Ayurveda — Grahani Roga Nidanam",
        url:
          "https://www.planetayurveda.com/library/grahani-roga-nidanam-4th-chapter-of-madhav-nidanam/",
        kind: "digital_transcription",
        inspected: true,
        observation:
          "Digital Sanskrit transcription and interpretation of Grahani Roga Nidana. Verse readings require comparison with a selected printed edition.",
      },
      {
        id: "grahani-witness-3",
        title:
          "Madhava Nidana — Sanskrit Digital Edition",
        url:
          "https://vedicreserve.miu.edu/madhav_nidan/madhava_nidan.pdf",
        kind: "digital_transcription",
        inspected: true,
        observation:
          "Typeset Sanskrit PDF previously inspected for the Grahani chapter and diagnostic passages. Earlier inspection notes identify pages 13–15. Page numbering must be reconfirmed against the PDF before treating these as definitive locators. This is not an inspected historical printed-edition scan.",
      },
    ],

    outstandingChecks: [
      "Select the exact Grahani diagnostic verses.",
      "Reconfirm page and verse locators in the digital PDF.",
      "Inspect the same passages in a historical printed edition.",
      "Record editor, publisher, year and printed page.",
      "Compare Sanskrit readings across editions.",
      "Distinguish Madhava Nidana passages from Charaka Samhita passages.",
      "Obtain independent Sanskrit translation review.",
      "Avoid automatically equating Grahani Roga with IBS.",
    ],

    clinicalApproval: false,
  },
];

// ============================================================
// LOOKUP
// ============================================================

export function getEditionComparison(
  diseaseId: string
): EditionComparison[] {
  return EDITION_COMPARISONS.filter(
    (record) => record.diseaseId === diseaseId
  );
}

// ============================================================
// STRUCTURAL VALIDATION
// ============================================================

export function validateEditionComparisons(): string[] {
  const errors: string[] = [];

  const diseaseIds = new Set(
    DISEASE_DATABASE.map((disease) => disease.id)
  );

  const seenRecords = new Set<string>();
  const seenWitnesses = new Set<string>();

  for (const record of EDITION_COMPARISONS) {
    if (seenRecords.has(record.id)) {
      errors.push(
        `Duplicate comparison ID: ${record.id}`
      );
    }

    seenRecords.add(record.id);

    if (!diseaseIds.has(record.diseaseId)) {
      errors.push(
        `Unknown disease: ${record.diseaseId}`
      );
    }

    if (
      !record.work.trim() ||
      !record.classicalChapter.trim() ||
      !record.verseReference.trim()
    ) {
      errors.push(
        `Incomplete classical reference: ${record.id}`
      );
    }

    if (record.witnesses.length === 0) {
      errors.push(
        `No source witnesses: ${record.id}`
      );
    }

    for (const witness of record.witnesses) {
      if (seenWitnesses.has(witness.id)) {
        errors.push(
          `Duplicate witness ID: ${witness.id}`
        );
      }

      seenWitnesses.add(witness.id);

      if (
        !witness.title.trim() ||
        !witness.observation.trim()
      ) {
        errors.push(
          `Incomplete witness: ${witness.id}`
        );
      }

      try {
        const url = new URL(witness.url);

        if (
          url.protocol !== "https:" &&
          url.protocol !== "http:"
        ) {
          errors.push(
            `Unsupported URL protocol: ${witness.id}`
          );
        }
      } catch {
        errors.push(
          `Invalid witness URL: ${witness.id}`
        );
      }
    }

    if (
      record.status ===
      "printed_edition_verified"
    ) {
      if (!record.verifiedSanskrit?.trim()) {
        errors.push(
          `Verified record lacks Sanskrit: ${record.id}`
        );
      }

      if (
        !record.witnesses.some(
          (witness) =>
            witness.kind === "printed_scan" &&
            witness.inspected
        )
      ) {
        errors.push(
          `Verified record lacks an inspected printed witness: ${record.id}`
        );
      }

      if (record.outstandingChecks.length > 0) {
        errors.push(
          `Verified record still has pending checks: ${record.id}`
        );
      }
    }

    if (record.clinicalApproval !== false) {
      errors.push(
        `Invalid clinical approval state: ${record.id}`
      );
    }
  }

  return errors;
}
