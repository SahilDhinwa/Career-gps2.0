
export type ClassicalVerificationStatus =
  | "transcription_located"
  | "edition_comparison_pending"
  | "verified";

export interface ClassicalVerification {
  id: string;
  diseaseId: string;
  work: string;
  chapter: string;
  verse: string;
  edition: string;
  sanskrit: string | null;
  workingTranslation: string;
  sourceUrl: string;
  status: ClassicalVerificationStatus;
  outstandingChecks: string[];
  clinicalEquivalenceEstablished: false;
  clinicianApproved: false;
}

export const CLASSICAL_VERIFICATIONS: ClassicalVerification[] = [
  {
    id: "amlapitta-mn-51-2",
    diseaseId: "amlapitta",
    work: "Madhava Nidana",
    chapter: "51 — Amlapitta Nidana",
    verse: "2",
    edition:
      "Edition comparison pending; published transcription used",
    sanskrit:
      "अविपाक-क्लमोत्क्लेश-तिक्ताम्लोद्गार-गौरवैः । हृत्कण्ठदाहारुचिभिश्चाम्लपित्तं वदेद्भिषक् ॥",
    workingTranslation:
      "Describes indigestion, fatigue, nausea, bitter or sour eructation, heaviness, burning in the chest or throat, and reduced appetite.",
    sourceUrl:
      "https://ayureveryday.com/chapter-51-amlapitta-nidana/",
    status: "edition_comparison_pending",
    outstandingChecks: [
      "Compare Sanskrit against a printed edition",
      "Check compound boundaries and variant readings",
      "Confirm chapter and verse numbering",
      "Review translation with a Sanskrit/Ayurveda scholar",
    ],
    clinicalEquivalenceEstablished: false,
    clinicianApproved: false,
  },
  {
    id: "grahani-mn-4",
    diseaseId: "grahani-roga",
    work: "Madhava Nidana",
    chapter: "4 — Grahani Roga Nidana",
    verse: "Passage selection pending",
    edition:
      "Edition and verse-level comparison pending",
    sanskrit: null,
    workingTranslation:
      "Grahani is discussed in the classical diagnostic literature in relation to impaired digestion and bowel disturbances. A specific passage must be selected before assigning an exact translation.",
    sourceUrl:
      "https://vedicreserve.miu.edu/madhav_nidan/madhava_nidan.pdf",
    status: "transcription_located",
    outstandingChecks: [
      "Identify the exact relevant Sanskrit passage",
      "Verify the passage in the scanned edition",
      "Record precise verse numbering",
      "Distinguish Madhava Nidana from Charaka Samhita citations",
      "Review translation and interpretation",
    ],
    clinicalEquivalenceEstablished: false,
    clinicianApproved: false,
  },
];

export function getClassicalVerification(
  diseaseId: string
): ClassicalVerification[] {
  return CLASSICAL_VERIFICATIONS.filter(
    (record) => record.diseaseId === diseaseId
  );
}

export function validateClassicalVerifications(): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();

  CLASSICAL_VERIFICATIONS.forEach((record) => {
    if (seen.has(record.id)) {
      errors.push(`Duplicate record: ${record.id}`);
    }

    seen.add(record.id);

    if (!record.work.trim() || !record.chapter.trim()) {
      errors.push(`Missing textual reference: ${record.id}`);
    }

    if (
      record.status === "verified" &&
      (!record.sanskrit ||
        record.outstandingChecks.length > 0)
    ) {
      errors.push(
        `Premature verification: ${record.id}`
      );
    }

    if (
      record.clinicalEquivalenceEstablished !== false ||
      record.clinicianApproved !== false
    ) {
      errors.push(
        `Invalid clinical approval state: ${record.id}`
      );
    }
  });

  return errors;
}
