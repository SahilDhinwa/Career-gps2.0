import type {
  EvidenceClaim,
  DiseaseEvidenceRecord,
} from "./types";

export const EVIDENCE_CLAIMS: EvidenceClaim[] = [
  {
    id: "amavata-ra-referral-001",
    diseaseId: "amavata",
    category: "safety",
    statement:
      "Adults with suspected persistent synovitis of undetermined cause require specialist assessment. Urgent referral is recommended for specified presentations even with normal inflammatory markers or negative rheumatoid serology.",
    assessment: "supported",
    citations: [
      {
        sourceId: "nice-ng100",
        locator: "Recommendation 1.1.1",
      },
    ],
    review: {
      status: "under_review",
      notes:
        "Modern rheumatoid arthritis guidance. This does not establish equivalence between Amavata and rheumatoid arthritis.",
    },
  },
  {
    id: "vatarakta-gout-diagnosis-001",
    diseaseId: "vatarakta",
    category: "investigation",
    statement:
      "Serum urate must be interpreted alongside clinical findings. If serum urate is below 360 micromol/L during a flare and gout remains strongly suspected, repeat testing at least two weeks after the flare resolves. Consider joint aspiration when diagnosis remains uncertain.",
    assessment: "supported",
    citations: [
      {
        sourceId: "nice-ng219",
        locator: "Recommendations 1.1.7–1.1.9",
      },
    ],
    review: {
      status: "under_review",
      notes:
        "The legacy claim that serum uric acid alone verifies gout requires correction.",
    },
    replacesLegacyField: "essentialTests",
  },
  {
    id: "vatarakta-septic-arthritis-001",
    diseaseId: "vatarakta",
    category: "safety",
    statement:
      "An acutely painful, red, swollen joint requires consideration of septic arthritis. Suspected septic arthritis requires immediate referral.",
    assessment: "supported",
    citations: [
      {
        sourceId: "nice-ng219",
        locator: "Recommendations 1.1.3–1.1.4",
      },
    ],
    review: {
      status: "under_review",
    },
  },
  {
    id: "gridhrasi-imaging-001",
    diseaseId: "gridhrasi",
    category: "investigation",
    statement:
      "Routine imaging is not recommended in non-specialist settings for uncomplicated low back pain with or without sciatica. Specialist imaging may be considered when results are likely to change management.",
    assessment: "supported",
    citations: [
      {
        sourceId: "nice-ng59",
        locator: "Recommendations 1.1.4–1.1.6",
      },
    ],
    review: {
      status: "under_review",
      notes:
        "This recommendation does not apply indiscriminately to suspected serious spinal pathology.",
    },
    replacesLegacyField: "avoidedTests",
  },
];

export const DISEASE_EVIDENCE_RECORDS: DiseaseEvidenceRecord[] =
  [
    "amavata",
    "sandhigata-vata",
    "vatarakta",
    "gridhrasi",
    "amlapitta",
    "parinama-shula",
    "annadrava-shula",
    "grahani-roga",
    "navajwara-sama",
    "vishama-jwara",
    "pittaja-jwara",
    "vata-kaphaja-jwara",
  ].map((diseaseId) => ({
    diseaseId,
    review: {
      status: "unverified",
      notes:
        "Existing disease profile requires independent clinical and classical textual review.",
    },
    claims: EVIDENCE_CLAIMS.filter(
      (claim) => claim.diseaseId === diseaseId
    ),
  }));
