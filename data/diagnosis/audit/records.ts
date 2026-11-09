
import { DISEASE_DATABASE } from "../../diagnosisDatabase";

import type {
  AuditPriority,
  ClinicalField,
  ClinicalFieldAudit,
  DiseaseAudit,
} from "./types";

const CLINICAL_FIELDS: ClinicalField[] = [
  "modernCorrelate",
  "icdCode",
  "doshaDushya",
  "pratyatmaLakshana",
  "knockoutClue",
  "matchingFilterIds",
  "essentialTests",
  "avoidedTests",
  "firstLineChikitsa",
];

const FIELD_PRIORITY: Record<ClinicalField, AuditPriority> = {
  modernCorrelate: "high",
  icdCode: "moderate",
  doshaDushya: "moderate",
  pratyatmaLakshana: "high",
  knockoutClue: "critical",
  matchingFilterIds: "high",
  essentialTests: "critical",
  avoidedTests: "critical",
  firstLineChikitsa: "critical",
};

const KNOWN_CONCERNS: Record<
  string,
  Partial<Record<ClinicalField, string>>
> = {
  amavata: {
    knockoutClue:
      "Response to oil massage cannot establish Amavata or rheumatoid arthritis with 100% certainty.",
    essentialTests:
      "ESR, CRP and rheumatoid factor alone cannot confirm rheumatoid arthritis.",
    avoidedTests:
      "Investigation decisions require assessment of synovitis, differential diagnoses and referral needs.",
    firstLineChikitsa:
      "Existing Ayurvedic treatment claims require efficacy, safety, contraindication and interaction review.",
  },

  "sandhigata-vata": {
    knockoutClue:
      "Crepitus and massage response cannot independently establish osteoarthritis.",
    essentialTests:
      "Imaging decisions depend on clinical presentation and atypical features, not only surgical grading.",
  },

  vatarakta: {
    modernCorrelate:
      "Vatarakta and gout must not be treated as universally equivalent diagnoses.",
    essentialTests:
      "Serum urate alone cannot confirm or exclude gout.",
    knockoutClue:
      "Acute monoarthritis requires assessment for septic arthritis.",
    avoidedTests:
      "Test omission cannot be justified solely by great-toe pain or redness.",
  },

  gridhrasi: {
    knockoutClue:
      "Straight-leg-raise testing alone cannot confirm radiculopathy or determine its cause.",
    avoidedTests:
      "Imaging decisions must account for serious spinal pathology, progressive neurological deficits and management implications.",
  },

  amlapitta: {
    modernCorrelate:
      "Amlapitta cannot automatically be equated with GERD or functional dyspepsia.",
    knockoutClue:
      "Symptom relief after milk or Ayurvedic medication is not diagnostic confirmation.",
  },

  "parinama-shula": {
    modernCorrelate:
      "Meal-related pain timing alone cannot establish a duodenal ulcer.",
    essentialTests:
      "H. pylori testing and endoscopy decisions depend on the clinical presentation.",
  },

  "annadrava-shula": {
    knockoutClue:
      "Continuous abdominal pain and vomiting do not establish a gastric ulcer.",
    essentialTests:
      "Endoscopy decisions require assessment of bleeding, anemia, age, risk factors and other alarm features.",
  },

  "grahani-roga": {
    modernCorrelate:
      "Grahani, IBS and malabsorption are not interchangeable diagnoses.",
    essentialTests:
      "Stool microscopy and CBC alone cannot establish IBS or exclude all organic disease.",
  },

  "navajwara-sama": {
    avoidedTests:
      "Deferring infectious disease testing without considering local epidemiology, severity and patient risk may be unsafe.",
    firstLineChikitsa:
      "Fasting and traditional formulations require individualized safety assessment.",
  },

  "vishama-jwara": {
    knockoutClue:
      "Periodic fever is not sufficiently specific to diagnose malaria.",
    essentialTests:
      "Suspected malaria requires appropriate prompt testing and interpretation under current local guidance.",
  },

  "pittaja-jwara": {
    modernCorrelate:
      "Pittaja Jwara cannot be assumed to indicate hepatobiliary infection.",
    essentialTests:
      "Liver function testing alone cannot determine the cause of acute fever.",
  },

  "vata-kaphaja-jwara": {
    knockoutClue:
      "Cough, coryza and body aches do not establish influenza.",
    avoidedTests:
      "Normal oxygen saturation does not independently exclude serious respiratory infection.",
  },
};

export const DISEASE_AUDITS: DiseaseAudit[] =
  DISEASE_DATABASE.map((disease) => {
    const concerns = KNOWN_CONCERNS[disease.id] ?? {};

    const fields: ClinicalFieldAudit[] =
      CLINICAL_FIELDS.map((field) => ({
        field,
        status: concerns[field]
          ? "under_review"
          : "pending",
        priority: FIELD_PRIORITY[field],
        evidenceClaimIds: [],
        ...(concerns[field]
          ? { concern: concerns[field] }
          : {}),
      }));

    return {
      diseaseId: disease.id,
      clinicalApproval: false,
      fields,
    };
  });
