
import type { ClinicalCorrection } from "./types";

export const CLINICAL_CORRECTIONS: ClinicalCorrection[] = [
  // ==========================================================
  // AMAVATA
  // ==========================================================

  {
    id: "amavata-investigations-correction-001",
    diseaseId: "amavata",
    field: "essentialTests",
    priority: "critical",
    status: "draft",
    proposedText:
      "When rheumatoid arthritis is suspected, assess for persistent clinical synovitis. Rheumatoid factor, anti-CCP antibodies and radiographs may contribute to evaluation according to the clinical presentation. Investigations must not delay indicated specialist referral.",
    evidenceClaimIds: [
      "amavata-ra-referral-001",
      "amavata-ra-investigations-002",
    ],
    rationale:
      "The existing investigation wording risks implying that a small laboratory panel confirms rheumatoid arthritis.",
    safetyNotes:
      "Normal inflammatory markers or negative rheumatoid serology do not exclude rheumatoid arthritis. This guidance does not establish Amavata–RA equivalence.",
  },

  {
    id: "amavata-treatment-correction-002",
    diseaseId: "amavata",
    field: "firstLineChikitsa",
    priority: "critical",
    status: "draft",
    proposedText:
      "For independently diagnosed active rheumatoid arthritis, timely specialist-directed disease-modifying treatment is important. Any proposed Ayurvedic treatment requires separate evaluation for efficacy, safety, interactions and contraindications.",
    evidenceClaimIds: [
      "amavata-ra-treatment-003",
    ],
    rationale:
      "The existing Ayurvedic protocol has not undergone independent clinical validation.",
    safetyNotes:
      "Do not delay indicated disease-modifying therapy. This text is not an Ayurvedic prescription.",
  },

  // ==========================================================
  // SANDHIGATA VATA
  // ==========================================================

  {
    id: "sandhigata-diagnosis-correction-001",
    diseaseId: "sandhigata-vata",
    field: "knockoutClue",
    priority: "critical",
    status: "draft",
    proposedText:
      "For suspected osteoarthritis, assess age, activity-related joint pain, morning stiffness and atypical features. In people aged 45 or older with activity-related pain and no morning stiffness or stiffness lasting no longer than 30 minutes, clinical diagnosis may be appropriate. Crepitus or massage response alone is not confirmatory.",
    evidenceClaimIds: [
      "sandhigata-oa-diagnosis-001",
    ],
    rationale:
      "The original bedside clue is insufficiently specific.",
    safetyNotes:
      "Consider inflammatory arthritis, infection, trauma and other alternative diagnoses when indicated. This does not establish equivalence with Sandhigata Vata.",
  },

  {
    id: "sandhigata-imaging-correction-002",
    diseaseId: "sandhigata-vata",
    field: "essentialTests",
    priority: "high",
    status: "draft",
    proposedText:
      "Routine imaging is not required to establish typical osteoarthritis under applicable clinical criteria. Consider additional assessment or imaging when features are atypical or another diagnosis is suspected.",
    evidenceClaimIds: [
      "sandhigata-oa-imaging-002",
    ],
    rationale:
      "Imaging decisions should not be restricted to surgical grading.",
    safetyNotes:
      "Do not apply this recommendation to atypical or potentially serious presentations without clinical assessment.",
  },

  {
    id: "sandhigata-treatment-correction-003",
    diseaseId: "sandhigata-vata",
    field: "firstLineChikitsa",
    priority: "high",
    status: "draft",
    proposedText:
      "For independently diagnosed osteoarthritis, core management includes tailored therapeutic exercise and weight management where appropriate. Additional treatments depend on the affected joint, patient factors and contraindications. Traditional Ayurvedic interventions require separate evidence and safety review.",
    evidenceClaimIds: [
      "sandhigata-oa-management-003",
    ],
    rationale:
      "Modern osteoarthritis guidance cannot independently validate the existing Ayurvedic protocol.",
    safetyNotes:
      "Avoid interpreting a modern osteoarthritis recommendation as proof of efficacy for Janu Basti or Guggulu preparations.",
  },

  // ==========================================================
  // VATARAKTA
  // ==========================================================

  {
    id: "vatarakta-investigations-correction-001",
    diseaseId: "vatarakta",
    field: "essentialTests",
    priority: "critical",
    status: "draft",
    proposedText:
      "Suspected gout requires clinical assessment. Serum urate results must be interpreted in context; if the level is below 360 micromol/L during a flare and gout remains strongly suspected, repeat measurement at least two weeks after the flare settles. Consider joint aspiration when diagnosis remains uncertain.",
    evidenceClaimIds: [
      "vatarakta-gout-diagnosis-001",
    ],
    rationale:
      "Serum urate alone cannot definitively establish gout.",
    safetyNotes:
      "A normal serum urate result during an acute flare does not exclude gout. Vatarakta and gout are not universally equivalent.",
  },

  {
    id: "vatarakta-safety-correction-002",
    diseaseId: "vatarakta",
    field: "knockoutClue",
    priority: "critical",
    status: "draft",
    proposedText:
      "Acute joint pain, redness and swelling may occur in gout but are not specific. Evaluate for septic arthritis and other causes of acute monoarthritis. Suspected septic arthritis requires immediate referral.",
    evidenceClaimIds: [
      "vatarakta-septic-arthritis-001",
    ],
    rationale:
      "The existing bedside clue may create false diagnostic certainty.",
    safetyNotes:
      "Do not delay emergency assessment of possible septic arthritis.",
  },

  {
    id: "vatarakta-treatment-correction-003",
    diseaseId: "vatarakta",
    field: "firstLineChikitsa",
    priority: "critical",
    status: "draft",
    proposedText:
      "For a clinically diagnosed gout flare, treatment options include an appropriate NSAID, colchicine or a short course of oral corticosteroids, selected according to individual contraindications and comorbidities. Existing Ayurvedic treatment claims require separate evaluation.",
    evidenceClaimIds: [
      "vatarakta-gout-treatment-002",
    ],
    rationale:
      "The legacy Vatarakta protocol has not been validated by the cited modern gout guideline.",
    safetyNotes:
      "This is a summary of guideline options, not an individualized prescription. Exclude urgent alternative diagnoses.",
  },

  // ==========================================================
  // GRIDHRASI
  // ==========================================================

  {
    id: "gridhrasi-diagnosis-correction-001",
    diseaseId: "gridhrasi",
    field: "knockoutClue",
    priority: "critical",
    status: "draft",
    proposedText:
      "Assessment of suspected sciatica requires relevant history, neurological examination and evaluation for serious underlying causes. Straight-leg raising may contribute to the examination but cannot independently establish the diagnosis or its precise cause.",
    evidenceClaimIds: [
      "gridhrasi-sciatica-assessment-002",
    ],
    rationale:
      "A positive straight-leg-raise test must not be treated as definitive confirmation.",
    safetyNotes:
      "The linked NICE guideline does not independently establish straight-leg-raise diagnostic accuracy. Further evidence review is required.",
  },

  {
    id: "gridhrasi-imaging-correction-002",
    diseaseId: "gridhrasi",
    field: "avoidedTests",
    priority: "critical",
    status: "draft",
    proposedText:
      "Routine imaging is generally not recommended in non-specialist settings for uncomplicated low back pain with or without sciatica. Specialist imaging may be considered when findings are likely to change management. Decisions must account for suspected serious pathology and neurological deficits.",
    evidenceClaimIds: [
      "gridhrasi-imaging-001",
    ],
    rationale:
      "The original test-omission claim is too broad.",
    safetyNotes:
      "Do not use this statement to defer assessment or imaging when serious spinal pathology or progressive neurological impairment is suspected.",
  },
];
