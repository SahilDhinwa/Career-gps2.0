
export interface ClinicalSafetyAlert {
  id: string;
  title: string;
  description: string;
  urgency: "emergency" | "urgent";
}

export const CLINICAL_SAFETY_ALERTS: ClinicalSafetyAlert[] = [
  {
    id: "cardiac-emergency",
    title: "Possible cardiac emergency",
    description:
      "Chest pressure or pain with breathlessness, sweating, fainting, or pain radiating to the arm or jaw requires emergency assessment.",
    urgency: "emergency",
  },
  {
    id: "stroke",
    title: "Possible stroke",
    description:
      "Sudden facial weakness, arm weakness, speech difficulty, visual loss, or new severe neurological symptoms require immediate emergency assessment.",
    urgency: "emergency",
  },
  {
    id: "cauda-equina",
    title: "Possible cauda equina syndrome",
    description:
      "New urinary retention, saddle sensory loss, or progressive leg weakness with back pain requires emergency spinal assessment.",
    urgency: "emergency",
  },
  {
    id: "sepsis",
    title: "Possible sepsis or critical infection",
    description:
      "Suspected infection with confusion, severe breathlessness, circulatory instability, or rapidly worsening condition requires emergency assessment.",
    urgency: "emergency",
  },
  {
    id: "gi-bleeding",
    title: "Possible gastrointestinal bleeding",
    description:
      "Vomiting blood, black tarry stools, or significant rectal bleeding with dizziness or fainting requires emergency assessment.",
    urgency: "emergency",
  },
  {
    id: "septic-arthritis",
    title: "Possible septic arthritis",
    description:
      "An acutely hot, swollen, severely painful joint, especially with fever or inability to bear weight, requires urgent same-day assessment.",
    urgency: "urgent",
  },
  {
    id: "fever-warning",
    title: "Potentially serious febrile illness",
    description:
      "Fever with severe headache, neck stiffness, non-blanching rash, dehydration, or clinical deterioration requires immediate assessment.",
    urgency: "emergency",
  },
];

export const CLINICAL_SAFETY_NOTICE =
  "ATREYA is a clinical reference and differential-diagnosis aid, not a validated diagnostic device. Symptom matches, classical correlations, investigation suggestions, and treatment references must be independently assessed by a qualified clinician. Never delay emergency care or necessary investigations to reduce costs.";
