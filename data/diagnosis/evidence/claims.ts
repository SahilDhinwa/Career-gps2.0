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
      
{
  id: "amavata-ra-investigations-002",
  diseaseId: "amavata",
  category: "investigation",
  statement:
    "For suspected rheumatoid arthritis with clinical synovitis, NICE recommends rheumatoid factor testing, consideration of anti-CCP antibodies if rheumatoid factor is negative, and hand/foot radiographs in persistent synovitis. Investigations must not delay specialist referral.",
  assessment: "supported",
  citations: [
    {
      sourceId: "nice-ng100",
      locator: "Recommendations 1.1.1–1.1.4",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "The legacy ESR, CRP and rheumatoid factor combination does not independently confirm rheumatoid arthritis. Ayurvedic Amavata requires separate textual review.",
  },
  replacesLegacyField: "essentialTests",
},
{
  id: "amavata-ra-treatment-003",
  diseaseId: "amavata",
  category: "treatment",
  statement:
    "Adults with newly diagnosed active rheumatoid arthritis should receive timely disease-modifying treatment under appropriate clinical supervision. Ayurvedic interventions must not replace or delay indicated disease-modifying therapy.",
  assessment: "supported",
  citations: [
    {
      sourceId: "nice-ng100",
      locator: "Recommendations 1.4.1–1.4.2",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "The guideline supports timely conventional disease-modifying treatment. It does not establish the efficacy or safety of the legacy Ayurvedic protocol.",
  },
  replacesLegacyField: "firstLineChikitsa",
},
{
  id: "sandhigata-oa-diagnosis-001",
  diseaseId: "sandhigata-vata",
  category: "diagnosis",
  statement:
    "Osteoarthritis may be diagnosed clinically without imaging in people aged 45 or older who have activity-related joint pain and no morning stiffness or stiffness lasting no longer than 30 minutes. Atypical findings require assessment for alternative diagnoses.",
  assessment: "supported",
  citations: [
    {
      sourceId: "nice-ng226",
      locator: "Recommendations 1.1.1–1.1.2",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "Warm oil massage response and crepitus alone cannot confirm osteoarthritis or exclude inflammatory arthritis. Sandhigata Vata is not automatically equivalent to osteoarthritis.",
  },
  replacesLegacyField: "knockoutClue",
},
{
  id: "sandhigata-oa-imaging-002",
  diseaseId: "sandhigata-vata",
  category: "investigation",
  statement:
    "Routine imaging is not recommended to diagnose typical osteoarthritis. Imaging may be appropriate when atypical features suggest an alternative or additional diagnosis.",
  assessment: "supported",
  citations: [
    {
      sourceId: "nice-ng226",
      locator: "Recommendation 1.1.2",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "The legacy claim that imaging is needed only for surgical grading is too restrictive.",
  },
  replacesLegacyField: "essentialTests",
},
{
  id: "sandhigata-oa-management-003",
  diseaseId: "sandhigata-vata",
  category: "treatment",
  statement:
    "For osteoarthritis, NICE recommends therapeutic exercise tailored to the person, with weight management where appropriate. Topical NSAIDs are recommended for knee osteoarthritis when clinically suitable.",
  assessment: "supported",
  citations: [
    {
      sourceId: "nice-ng226",
      locator: "Recommendations 1.2.2, 1.2.4 and 1.4.2",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "This does not validate Janu Basti, Guggulu preparations, or other existing Ayurvedic treatments.",
  },
  replacesLegacyField: "firstLineChikitsa",
},
{
  id: "vatarakta-gout-treatment-002",
  diseaseId: "vatarakta",
  category: "treatment",
  statement:
    "For a diagnosed gout flare, NICE recommends choosing an appropriate first-line anti-inflammatory treatment from NSAIDs, colchicine, or a short course of oral corticosteroids, considering comorbidities and contraindications.",
  assessment: "supported",
  citations: [
    {
      sourceId: "nice-ng219",
      locator: "Recommendation 1.3.1",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "This modern gout recommendation does not validate the existing Vatarakta treatment protocol.",
  },
  replacesLegacyField: "firstLineChikitsa",
},
{
  id: "gridhrasi-sciatica-assessment-002",
  diseaseId: "gridhrasi",
  category: "diagnosis",
  statement:
    "Sciatica assessment requires clinical history and examination, including consideration of serious underlying pathology. A positive straight-leg-raise test alone does not establish a definitive diagnosis or identify the precise cause.",
  assessment: "partially_supported",
  citations: [
    {
      sourceId: "nice-ng59",
      locator: "Recommendations 1.1.1–1.1.6",
      note:
        "The guideline supports clinical assessment and selective imaging but does not independently validate the stated diagnostic accuracy of straight-leg raising.",
    },
  ],
  review: {
    status: "under_review",
    notes:
      "Further diagnostic-accuracy evidence is required. The legacy statement that straight-leg raising confirms Gridhrasi must not be used as a definitive diagnostic rule.",
  },
  replacesLegacyField: "knockoutClue",
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
