

import type { DiseaseResearchRecord } from "./types";

const NICE_DYSPEPSIA = {
  id: "nice-cg184",
  title: "NICE CG184: Dyspepsia and GORD",
  tradition: "modern_clinical" as const,
  url: "https://www.nice.org.uk/guidance/cg184/chapter/Recommendations",
  status: "source_identified" as const,
};

const NICE_IBS = {
  id: "nice-cg61",
  title: "NICE CG61: Irritable Bowel Syndrome",
  tradition: "modern_clinical" as const,
  url: "https://www.nice.org.uk/guidance/cg61/chapter/recommendations",
  status: "source_identified" as const,
};

const WHO_MALARIA = {
  id: "who-malaria",
  title: "WHO Guidelines for Malaria",
  tradition: "modern_clinical" as const,
  url: "https://www.who.int/publications-detail-redirect/guidelines-for-malaria",
  status: "source_identified" as const,
};

const CDC_DENGUE = {
  id: "cdc-dengue",
  title: "CDC: Clinical Care of Dengue",
  tradition: "modern_clinical" as const,
  url: "https://www.cdc.gov/dengue/hcp/clinical-care/index.html",
  status: "source_identified" as const,
};

const CLASSICAL_PENDING = {
  id: "classical-text-pending",
  title: "Classical Ayurvedic passage — exact edition and verse pending",
  tradition: "classical_ayurveda" as const,
  status: "locator_pending" as const,
};

export const DISEASE_RESEARCH_RECORDS: DiseaseResearchRecord[] = [
  {
    diseaseId: "amlapitta",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [{ ...NICE_DYSPEPSIA }],
    clinicalConcerns: [
      "Heartburn and epigastric discomfort are not diagnostic by themselves.",
      "Assess alarm features and alternative diagnoses.",
      "Modern dyspepsia is not automatically equivalent to Amlapitta.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "parinama-shula",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [{ ...NICE_DYSPEPSIA }],
    clinicalConcerns: [
      "Pain timing alone cannot confirm peptic ulcer disease.",
      "Gastrointestinal bleeding and other alarm features require appropriate assessment.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "annadrava-shula",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [{ ...NICE_DYSPEPSIA }],
    clinicalConcerns: [
      "Symptoms alone cannot distinguish functional dyspepsia from ulcer disease.",
      "Avoid blanket recommendations to omit investigations.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "grahani-roga",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [{ ...NICE_IBS }],
    clinicalConcerns: [
      "IBS is only one possible modern differential.",
      "Evaluate alarm symptoms and other causes of altered bowel habits.",
      "Grahani Roga and IBS are not established equivalents.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "navajwara-sama",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [
      { ...WHO_MALARIA },
      { ...CDC_DENGUE },
    ],
    clinicalConcerns: [
      "Fever pattern alone cannot establish an infectious diagnosis.",
      "Assess illness severity, exposure history and local epidemiology.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "vishama-jwara",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [{ ...WHO_MALARIA }],
    clinicalConcerns: [
      "Intermittent fever does not independently diagnose malaria.",
      "Suspected malaria requires appropriate parasitological assessment.",
      "Do not delay urgent treatment of severe suspected malaria.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "pittaja-jwara",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [{ ...CDC_DENGUE }],
    clinicalConcerns: [
      "A classical fever subtype does not confirm dengue.",
      "Assess dehydration, bleeding and other warning signs.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
  {
    diseaseId: "vata-kaphaja-jwara",
    classicalReferences: [{ ...CLASSICAL_PENDING }],
    modernReferences: [],
    clinicalConcerns: [
      "No modern disease equivalence has been established.",
      "Assess fever severity, respiratory symptoms and alternative causes.",
      "Appropriate investigations depend on the clinical presentation.",
    ],
    equivalenceEstablished: false,
    clinicalApproval: false,
  },
];
