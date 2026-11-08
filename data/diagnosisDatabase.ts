
import {
  CLINICAL_SAFETY_NOTICE,
  CLINICAL_SAFETY_ALERTS,
} from "../../data/diagnosis/clinicalSafety";

import { validateDiagnosisDatabase } from "../../data/diagnosis/validateDatabase";
export type SystemClusterId = "all" | "joints" | "gi" | "fever";

export interface SymptomFilter {
  id: string;
  label: string;
  hindi: string;
  category: "symptom" | "upashaya" | "pariksha";
  cluster: SystemClusterId;
}

export interface DiseaseProfile {
  id: string;
  sanskritName: string;
  hindiName: string;
  modernCorrelate: string;
  icdCode: string;
  cluster: "joints" | "gi" | "fever";
  doshaDushya: string;
  pratyatmaLakshana: string;
  knockoutClue: string;
  matchingFilterIds: string[];
  essentialTests: {
    name: string;
    estCost: string;
    reason: string;
  }[];
  avoidedTests: {
    name: string;
    estSaved: string;
    whyUnnecessary: string;
  }[];
  firstLineChikitsa: string;
}

export const SYSTEM_CLUSTERS = [
  {
    id: "all" as const,
    name: "All OPD Systems (12)",
    hindi: "सभी प्रमुख रोग समूह",
  },
  {
    id: "joints" as const,
    name: "Joint, Bone & Nerve Pain",
    hindi: "संधि, अस्थि एवं वात विकार",
  },
  {
    id: "gi" as const,
    name: "Gut, Acidity & Bowel",
    hindi: "अन्नवह एवं पुरीषवह स्रोतस",
  },
  {
    id: "fever" as const,
    name: "Fever Spectrum (Jwara)",
    hindi: "ज्वर निदान एवं भेद",
  },
];

// ============================================================================
// CLINICAL FILTERS (Symptoms, Upashaya-Anupashaya Triggers & Bedside Pariksha)
// ============================================================================
export const SYMPTOM_FILTERS: SymptomFilter[] = [
  // --- JOINT & NEUROMUSCULAR FILTERS ---
  {
    id: "sym-morning-stiffness",
    label: "Morning stiffness > 1 hour",
    hindi: "प्रातःकाल जोड़ों में जकड़न (> 1 घंटा)",
    category: "symptom",
    cluster: "joints",
  },
  {
    id: "sym-crepitus-knee",
    label: "Knee/Hip crepitus (cracking sound) on walking",
    hindi: "चलने पर घुटनों से कट-कट ध्वनि (आटोप)",
    category: "symptom",
    cluster: "joints",
  },
  {
    id: "sym-great-toe-burning",
    label: "Sudden night pain & redness in Great Toe / small joints",
    hindi: "पैर के अंगूठे/छोटे जोड़ों में तीव्र दाह व लालिमा",
    category: "symptom",
    cluster: "joints",
  },
  {
    id: "sym-radiating-leg-pain",
    label: "Pain radiates from lower back down to foot",
    hindi: "कमर से पैर तक बिजली जैसा खिंचाव व दर्द",
    category: "symptom",
    cluster: "joints",
  },
  {
    id: "upa-worse-oil-massage",
    label: "Worsens with Oil Massage; Relieved by Dry Heat",
    hindi: "तेल मालिश से दर्द बढ़ना, बालू/सूखे स्वेदन से आराम",
    category: "upashaya",
    cluster: "joints",
  },
  {
    id: "upa-better-oil-massage",
    label: "Relieved by Warm Sesame Oil Massage (Abhyanga)",
    hindi: "गुनगुने तेल की मालिश (अभ्यंग) से तुरंत आराम",
    category: "upashaya",
    cluster: "joints",
  },
  {
    id: "par-slr-positive",
    label: "Unable to raise straight leg > 45° (SLR Positive)",
    hindi: "सीधा पैर उठाने में तीव्र अवरोध (सक्थि उत्क्षेप निग्रह)",
    category: "pariksha",
    cluster: "joints",
  },

  // --- GI & ACIDITY FILTERS ---
  {
    id: "sym-sour-belching",
    label: "Sour/bitter belching & chest burning",
    hindi: "खट्टी-कड़वी डकारें एवं छाती/गले में जलन",
    category: "symptom",
    cluster: "gi",
  },
  {
    id: "sym-pain-during-digestion",
    label: "Sharp stomach pain 2–3 hrs AFTER meal (during digestion)",
    hindi: "भोजन के 2–3 घंटे बाद (पाचन काल में) तीव्र शूल",
    category: "symptom",
    cluster: "gi",
  },
  {
    id: "sym-constant-stomach-pain",
    label: "Continuous stomach pain before & after meals",
    hindi: "खाली पेट व भोजन के बाद भी निरंतर पेट दर्द",
    category: "symptom",
    cluster: "gi",
  },
  {
    id: "sym-alternating-stool",
    label: "Alternating loose & constipated stools with mucus",
    hindi: "कभी पतला, कभी बंधा हुआ मल आना (मुहुर्बद्धं मुहुर्द्रवम्)",
    category: "symptom",
    cluster: "gi",
  },
  {
    id: "upa-relief-after-vomiting",
    label: "Pain/Burning subsides immediately after vomiting",
    hindi: "उल्टी (वमन) होने के तुरंत बाद शूल शांत होना",
    category: "upashaya",
    cluster: "gi",
  },
  {
    id: "upa-relief-cooling-sweet",
    label: "Relieved by cold milk / sweet cooling diet",
    hindi: "ठंडे दूध या मधुर-शीतल आहार से जलन में आराम",
    category: "upashaya",
    cluster: "gi",
  },

  // --- FEVER (JWARA) FILTERS ---
  {
    id: "sym-periodic-chills",
    label: "Fever comes every alternate/3rd day with severe rigors",
    hindi: "एक दिन छोड़कर या निश्चित समय पर कंपकंपी के साथ बुखार",
    category: "symptom",
    cluster: "fever",
  },
  {
    id: "sym-no-sweat-heaviness",
    label: "Acute fever with zero sweating, anorexia & heavy abdomen",
    hindi: "पसीना न आना (अस्वेदन), अरुचि एवं पेट में भारीपन",
    category: "symptom",
    cluster: "fever",
  },
  {
    id: "sym-high-burn-thirst",
    label: "High continuous fever with intense burning & yellow urine",
    hindi: "तीव्र दाह, अत्यधिक प्यास एवं पीला मूत्र/नेत्र",
    category: "symptom",
    cluster: "fever",
  },
  {
    id: "sym-cough-coryza-aches",
    label: "Moderate fever with cough, running nose & joint aches",
    hindi: "खांसी, जुकाम (प्रतित्श्याय), पर्वभेद एवं तन्द्रा",
    category: "symptom",
    cluster: "fever",
  },

  // --- UNIVERSAL BEDSIDE PARIKSHA FILTERS ---
  {
    id: "par-sama-tongue",
    label: "Thick white coated tongue (Sama Jihwa)",
    hindi: "जीभ पर सफेद मोटी परत (साम जिह्वा)",
    category: "pariksha",
    cluster: "all",
  },
  {
    id: "par-nirama-tongue",
    label: "Clean/dry or reddish tongue (Nirama Jihwa)",
    hindi: "साफ, रूखी या लालिमा युक्त जीभ (निराम जिह्वा)",
    category: "pariksha",
    cluster: "all",
  },
];

// ============================================================================
// MASTER DIFFERENTIAL DIAGNOSIS PROFILES (12 Look-Alike Conditions)
// ============================================================================
export const DISEASE_DATABASE: DiseaseProfile[] = [
  // --------------------------------------------------------------------------
  // CLUSTER 1: JOINTS, BONES & NEUROMUSCULAR
  // --------------------------------------------------------------------------
  {
    id: "amavata",
    sanskritName: "आमवात (Amavata)",
    hindiName: "गठिया / आमवात",
    modernCorrelate: "Rheumatoid Arthritis (Seropositive / Inflammatory Polyarthritis)",
    icdCode: "ICD-11: FA20",
    cluster: "joints",
    doshaDushya: "Vata + Ama (vitiated in Kostha, lodges in Shleshaka Kapha of joints)",
    pratyatmaLakshana:
      "वृश्चिकदंशवत् वेदना (Scorpion-sting-like throbbing pain), symmetrical joint swelling, morning stiffness > 1 hr, low-grade fever, and cardiac/systemic heaviness.",
    knockoutClue:
      "Apply warm oil (Abhyanga): If pain and stiffness WORSEN with oil and improve with dry sand fomentation (Valuka Sweda), it is 100% Amavata.",
    matchingFilterIds: [
      "sym-morning-stiffness",
      "upa-worse-oil-massage",
      "par-sama-tongue",
    ],
    essentialTests: [
      {
        name: "ESR + Quantitative CRP + RA Factor",
        estCost: "₹450 – ₹650",
        reason: "Confirms systemic inflammatory load and autoimmune rheumatoid activity.",
      },
    ],
    avoidedTests: [
      {
        name: "Full-Body Bone MRI & HLA-B27 Panel",
        estSaved: "₹7,500+",
        whyUnnecessary:
          "Clinical symmetrical morning stiffness + Sama Lakshana + CRP/RA is sufficient to initiate Langhana & Deepana therapy.",
      },
    ],
    firstLineChikitsa:
      "लङ्घनं स्वेदनं तिक्तं दीपनानि कटूनि च — Dry fomentation (Valuka Potali), Simhanada Guggulu, Rasnasaptaka Kwatha, and Eranda Taila Virechana.",
  },
  {
    id: "sandhigata-vata",
    sanskritName: "संधिगत वात (Sandhigata Vata)",
    hindiName: "अस्थि-संधि अपक्षय",
    modernCorrelate: "Primary Osteoarthritis (Degenerative Joint Disease)",
    icdCode: "ICD-11: FA00",
    cluster: "joints",
    doshaDushya: "Nirama Vata aggravation + Asthi & Majja Dhatu Kshaya (cartilage wear)",
    pratyatmaLakshana:
      "वातपूर्णदृतीस्पर्शः शोथः (Swelling feels like an air-filled leather bag), आटोप (audible crepitus on palpation), and प्रसारणाकुञ्चनयोः प्रवृत्तौ सवेदना (pain specifically on flexion/extension).",
    knockoutClue:
      "No systemic fever or thick tongue coating; pain immediately feels soothing when massaged with warm Mahanarayana / Sesame oil.",
    matchingFilterIds: [
      "sym-crepitus-knee",
      "upa-better-oil-massage",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Standing AP/Lateral Knee X-Ray (Only if surgical grading needed)",
        estCost: "₹350 – ₹500",
        reason: "Checks joint-space narrowing and osteophytes if symptoms are severe.",
      },
    ],
    avoidedTests: [
      {
        name: "Autoimmune Arthritis Panel (Anti-CCP, ANA, Uric Acid, MRI Knee)",
        estSaved: "₹6,800+",
        whyUnnecessary:
          "Palpable crepitus + relief from oil massage rules out acute inflammatory Amavata.",
      },
    ],
    firstLineChikitsa:
      "स्नेहन एवं बृंहण — Janu Basti with Mahanarayana Taila, Lakshadi Guggulu, Trayodashanga Guggulu, and Matra Basti.",
  },
  {
    id: "vatarakta",
    sanskritName: "वातरक्त / आढ्यवात (Vatarakta)",
    hindiName: "वातरक्त (गाउट)",
    modernCorrelate: "Acute Gouty Arthritis / Hyperuricemic Arthropathy",
    icdCode: "ICD-11: FA25",
    cluster: "joints",
    doshaDushya: "Vitiated Vata + Rakta Dhatu obstructing micro-vessels of small joints",
    pratyatmaLakshana:
      "आखुविषवत् क्षोभणम् (Spreads from the great toe/hands like rat poison), intense burning (दाह), shiny coppery-red skin over the joint, and sudden midnight pain spikes.",
    knockoutClue:
      "Starts in the 1st Metatarsophalangeal joint (Great Toe) or small finger joints with fiery redness and extreme tenderness to touch.",
    matchingFilterIds: [
      "sym-great-toe-burning",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Serum Uric Acid",
        estCost: "₹150 – ₹250",
        reason: "Single inexpensive blood test to verify hyperuricemia.",
      },
    ],
    avoidedTests: [
      {
        name: "HLA-B27, DEXA Bone Scan & Whole-Body X-Rays",
        estSaved: "₹5,200+",
        whyUnnecessary:
          "Great-toe onset with Rakta-Pitta burning signs points directly to Vatarakta.",
      },
    ],
    firstLineChikitsa:
      "रक्तमोक्षण एवं तिक्त-शीत उपचार — Kaishora Guggulu, Amritadi Kwatha (Guduchi), Kokilaksha Kashaya, and cooling Lepa (Shatadhauta Ghrita).",
  },
  {
    id: "gridhrasi",
    sanskritName: "गृध्रसी (Gridhrasi)",
    hindiName: "साइटिका / नाड़ी शूल",
    modernCorrelate: "Lumbar Radiculopathy / Sciatica (L4-L5 / L5-S1)",
    icdCode: "ICD-11: ME84.3",
    cluster: "joints",
    doshaDushya: "Vata (or Vata-Kapha) affecting Kandara & Sciatic nerve pathway",
    pratyatmaLakshana:
      "स्फिक्पूर्वा कटिपृष्ठोरुजानुजङ्घापदं क्रमात् — Pain starts at the gluteal/lumbar region and radiates sequentially down the back of thigh, knee, calf, and foot with tingling (सुप्ति).",
    knockoutClue:
      "Perform the bedside Straight Leg Raise (सक्थि उत्क्षेप निग्रह): Shooting electric pain between 30°–70° confirms Gridhrasi without needing an immediate MRI.",
    matchingFilterIds: [
      "sym-radiating-leg-pain",
      "upa-better-oil-massage",
      "par-slr-positive",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Bedside Straight Leg Raise (SLR) & Dermatomal Exam",
        estCost: "₹0 (Bedside Clinical Test)",
        reason: "Gold-standard clinical confirmation of sciatic nerve root tension.",
      },
    ],
    avoidedTests: [
      {
        name: "Immediate Lumbar MRI (unless red-flag bowel/bladder loss exists)",
        estSaved: "₹5,500 – ₹8,000",
        whyUnnecessary:
          "90% of uncomplicated Gridhrasi responds to conservative Kati Basti & Eranda Basti without surgical imaging.",
      },
    ],
    firstLineChikitsa:
      "कटि बस्ति, अग्निकर्म एवं बस्ति कर्म — Trayodashanga Guggulu, Nirgundi Taila Kati Basti, Dashamoola Kwatha, and Agnikarma at tender ankle/calf points.",
  },

  // --------------------------------------------------------------------------
  // CLUSTER 2: GUT, ACIDITY & BOWEL (ANNAVAHA SROTAS)
  // --------------------------------------------------------------------------
  {
    id: "amlapitta",
    sanskritName: "ऊर्ध्वग अम्लपित्त (Urdhwaga Amlapitta)",
    hindiName: "अम्लपित्त / एसिडिटी",
    modernCorrelate: "GERD / Non-Ulcer Acid Dyspepsia",
    icdCode: "ICD-11: DA22",
    cluster: "gi",
    doshaDushya: "Vidagdha Pitta (Vidahi Amla Guna increase in Amashaya)",
    pratyatmaLakshana:
      "अम्लतिक्तोद्गारः, हृत्कण्ठदाहः — Sour and bitter regurgitation, burning in the retrosternal chest and throat, nausea without severe localized ulcer pain.",
    knockoutClue:
      "Burning is prominent in the chest/throat immediately after spicy/fermented meals and settles quickly with cold milk or Avipattikar Churna.",
    matchingFilterIds: [
      "sym-sour-belching",
      "upa-relief-cooling-sweet",
      "par-sama-tongue",
    ],
    essentialTests: [
      {
        name: "Clinical Dietary Trial (Upashaya Test)",
        estCost: "₹0 (Clinical Assessment)",
        reason: "Uncomplicated GERD/Amlapitta without weight loss or bleeding does not require invasive scopes.",
      },
    ],
    avoidedTests: [
      {
        name: "Routine Upper GI Endoscopy & Contrast CT Abdomen",
        estSaved: "₹4,500 – ₹7,000",
        whyUnnecessary:
          "In the absence of alarm symptoms (dysphagia, hematemesis), clinical Upashaya confirms Amlapitta.",
      },
    ],
    firstLineChikitsa:
      "तिक्त-मधुर-शीत पित्तापह चर्या — Avipattikar Churna, Sutshekhar Rasa, Kamdudha Rasa (Mouktikayukta), and Patoladi Kwatha.",
  },
  {
    id: "parinama-shula",
    sanskritName: "परिणाम शूल (Parinama Shula)",
    hindiName: "पक्वाशयज / पाचनकालीन शूल",
    modernCorrelate: "Duodenal Ulcer (Peptic Ulcer Disease)",
    icdCode: "ICD-11: DA61",
    cluster: "gi",
    doshaDushya: "Tridosha (Vata-Pitta dominant) triggered during food digestion phase",
    pratyatmaLakshana:
      "भुक्ते जीर्यति यच्छूलं तदेव परिणामजम् — Sharp, boring epigastric pain that starts specifically 2 to 3 hours after eating (when acidic chyme enters the duodenum) and subsides once digestion finishes or after vomiting.",
    knockoutClue:
      "Timing is the signature: Patient feels fine while eating, gets severe pain 2 hours later, and feels instant relief if they vomit.",
    matchingFilterIds: [
      "sym-pain-during-digestion",
      "upa-relief-after-vomiting",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Stool H. pylori Antigen or Urea Breath Test",
        estCost: "₹600 – ₹900",
        reason: "Non-invasive screening for peptic ulcer bacterial etiology.",
      },
    ],
    avoidedTests: [
      {
        name: "Whole-Abdomen MRI / Multiple Tumor Marker Panels",
        estSaved: "₹8,000+",
        whyUnnecessary:
          "Classic post-prandial 2-hour pain rhythm (जीर्यति शूल) pinpoints duodenal involvement.",
      },
    ],
    firstLineChikitsa:
      "शम्बूक भस्म, शतावरी घृत एवं धात्री लौह — Shatavari Mandoor, Dhatri Lauha, Narikela Khanda, and Dadimadi Ghrita.",
  },
  {
    id: "annadrava-shula",
    sanskritName: "अन्नद्रव शूल (Annadrava Shula)",
    hindiName: "आमाशयिक व्रण शूल",
    modernCorrelate: "Chronic Gastric Ulcer / Severe Erosive Gastritis",
    icdCode: "ICD-11: DA60",
    cluster: "gi",
    doshaDushya: "Pitta-Vata mucosal erosion in Amashaya",
    pratyatmaLakshana:
      "जीर्णे जीर्यति चाजीर्णे यच्छूलं नोपशाम्यति — Continuous epigastric pain whether the stomach is empty, digesting, or full. Only vomiting the acidic gastric contents brings temporary relief.",
    knockoutClue:
      "Unlike Parinama Shula, this pain NEVER follows a clock—it hurts before meals, during meals, and after meals until emesis occurs.",
    matchingFilterIds: [
      "sym-constant-stomach-pain",
      "upa-relief-after-vomiting",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Targeted Upper GI Endoscopy + CBC (to check occult anemia)",
        estCost: "₹2,000 – ₹2,800",
        reason: "Indicated because unremitting gastric ulcer pain warrants direct mucosal visualization.",
      },
    ],
    avoidedTests: [
      {
        name: "Colonoscopy, Barium Enema & Hepatobiliary Scans",
        estSaved: "₹6,500+",
        whyUnnecessary:
          "Pathology is strictly localized to the upper gastric mucosa (Amashaya).",
      },
    ],
    firstLineChikitsa:
      "वान्ति-शमन एवं व्रणरोपण — Yashtimadhu Ghrita, Shatavari Swarasa, Amalaki Rasayana, and Leela Vilasa Rasa.",
  },
  {
    id: "grahani-roga",
    sanskritName: "ग्रहणी रोग (Grahani Roga)",
    hindiName: "संग्रहणी / पाचन दौर्बल्य",
    modernCorrelate: "Irritable Bowel Syndrome (IBS-M / IBS-D) & Malabsorption",
    icdCode: "ICD-11: DD91",
    cluster: "gi",
    doshaDushya: "Mandagni + Samana/Apana Vata dysfunction in Grahani (Duodenum-Jejunum)",
    pratyatmaLakshana:
      "मुहुर्बद्धं मुहुर्द्रवम् — Stools alternate between constipated/formed and loose/unformed, often mixed with mucus (साम मल), post-meal gastro-colic urgency, and chronic fatigue.",
    knockoutClue:
      "Patient passes stool 3–4 times mainly in the morning right after eating, with alternating consistency and zero blood in stool.",
    matchingFilterIds: [
      "sym-alternating-stool",
      "par-sama-tongue",
    ],
    essentialTests: [
      {
        name: "Routine Stool Microscopy + CBC",
        estCost: "₹200 – ₹350",
        reason: "Rules out ova/cysts and blood/pus cells to confirm functional Grahani.",
      },
    ],
    avoidedTests: [
      {
        name: "Full Colonoscopy + CT Enterography (in young patients without red flags)",
        estSaved: "₹9,000+",
        whyUnnecessary:
          "Classic Muhurbaddha-Muhurdrava stool pattern without rectal bleeding or weight loss is diagnostic of Grahani.",
      },
    ],
    firstLineChikitsa:
      "दीपन-पाचन एवं तक्र प्रयोग — Kutajarishta, Chitrakadi Vati, Panchamrita Parpati, Bilwadi Churna, and medicated Buttermilk (Takra).",
  },

  // --------------------------------------------------------------------------
  // CLUSTER 3: FEVER SPECTRUM (JWARA)
  // --------------------------------------------------------------------------
  {
    id: "navajwara-sama",
    sanskritName: "नवज्वर / साम ज्वर (Sama Navajwara)",
    hindiName: "तरुण / आमजन्य ज्वर",
    modernCorrelate: "Acute Viral Prodrome / Early Enteric Fever",
    icdCode: "ICD-11: MG26",
    cluster: "fever",
    doshaDushya: "Ama + displaced Jatharagni blocking Rasavaha & Swedavaha Srotas",
    pratyatmaLakshana:
      "स्वेदावरोधः संतापः सर्वाङ्गग्रहणं तथा — Complete blockage of sweating, internal and external heat, heavy coated tongue, loss of taste (अरुचि), and generalized body ache.",
    knockoutClue:
      "First 1–3 days of fever with dry hot skin (zero sweat) and heavy coated tongue—do NOT give heavy food or astringent/oil therapies yet.",
    matchingFilterIds: [
      "sym-no-sweat-heaviness",
      "par-sama-tongue",
    ],
    essentialTests: [
      {
        name: "CBC + Urine Routine (Wait 48–72 hrs before costly viral panels if stable)",
        estCost: "₹300 – ₹450",
        reason: "Tracks baseline leukocyte and platelet trends safely.",
      },
    ],
    avoidedTests: [
      {
        name: "Day-1 Multiplex PCR Fever Panels & Chest CT",
        estSaved: "₹5,500+",
        whyUnnecessary:
          "Ordering 12-pathogen PCR panels on Day 1 of uncomplicated Sama Jwara adds huge cost without changing initial Langhana care.",
      },
    ],
    firstLineChikitsa:
      "ज्वरादौ लङ्घनम् प्रोक्तम् — Therapeutic fasting/light Shadanga Paniya, Tribhuvanakirti Rasa, Sudarshana Churna, and Amruthotharam Kashaya.",
  },
  {
    id: "vishama-jwara",
    sanskritName: "विषम ज्वर (Vishama Jwara)",
    hindiName: "संतत/तृतीयक/चतुर्थक ज्वर",
    modernCorrelate: "Malaria (P. vivax / P. falciparum) & Periodic Fevers",
    icdCode: "ICD-11: 1F40",
    cluster: "fever",
    doshaDushya: "Tridosha invading Rakta, Mamsa & Meda Dhatu with cyclic paroxysms",
    pratyatmaLakshana:
      "विषमारम्भविरामः — Fever strikes at fixed cyclic intervals (every 48 hrs in Tritiyaka or 72 hrs in Chaturthaka) preceded by intense shivering chills (शीतपूर्वक ज्वर) and ending in profuse sweating.",
    knockoutClue:
      "Clockwork periodicity: Patient is afebrile on one day and develops violent shivering + 103°F+ fever at the exact same hour the next day.",
    matchingFilterIds: [
      "sym-periodic-chills",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Peripheral Blood Smear (MP) + Rapid Malaria Antigen Card",
        estCost: "₹250 – ₹400",
        reason: "Direct, low-cost gold standard to identify malarial parasites.",
      },
    ],
    avoidedTests: [
      {
        name: "Broad Autoimmune Fever Workup & Bone Marrow Biopsy",
        estSaved: "₹6,000+",
        whyUnnecessary:
          "Classic cyclic rigor-heat-sweat triad warrants immediate smear testing first.",
      },
    ],
    firstLineChikitsa:
      "विषमज्वरघ्न योग — Maha Sudarshana Ghanavati, Ayush-64, Saptaparna Satva, and Guduchyadi Kwatha alongside national antimalarial protocol.",
  },
  {
    id: "pittaja-jwara",
    sanskritName: "पित्तज ज्वर (Pittaja Jwara)",
    hindiName: "पित्तप्रधान तीव्र ज्वर",
    modernCorrelate: "Acute Hepatobiliary / Cholecystitis / Hyperpyrexic Inflammatory Fever",
    icdCode: "ICD-11: MG26.1",
    cluster: "fever",
    doshaDushya: "Pitta Dosha + Rasa & Rakta Dhatu",
    pratyatmaLakshana:
      "तीव्र दाह, तृष्णा, पीतविण्मूत्रनेत्रत्वम् — High-grade continuous temperature, intense burning sensation inside out, unquenchable thirst, bitter taste in mouth, loose motions, and yellowish tinge in urine/sclera.",
    knockoutClue:
      "Patient throws off blankets craving cold air/water, with yellowish urine and burning eyes.",
    matchingFilterIds: [
      "sym-high-burn-thirst",
      "upa-relief-cooling-sweet",
      "par-nirama-tongue",
    ],
    essentialTests: [
      {
        name: "Liver Function Test (Bilirubin, SGPT/SGOT) + CBC",
        estCost: "₹500 – ₹700",
        reason: "Evaluates hepatobiliary Pitta involvement and systemic inflammation.",
      },
    ],
    avoidedTests: [
      {
        name: "Unindicated Neuro-Imaging or Rheumatoid Panels",
        estSaved: "₹5,000+",
        whyUnnecessary:
          "Pitta-Rakta clinical signs direct investigation straight to hepatobiliary and blood parameters.",
      },
    ],
    firstLineChikitsa:
      "तिक्त-शीत ज्वरघ्न उपचार — Shadanga Paniya (Musta, Parpataka, Ushira, Chandana), Bhunimbadi Kwatha, Praval Pishti, and Guduchi Satva.",
  },
  {
    id: "vata-kaphaja-jwara",
    sanskritName: "वात-कफज ज्वर (Vata-Kaphaja Jwara)",
    hindiName: "श्लेष्म-वातज ज्वर (फ्लू)",
    modernCorrelate: "Influenza / Acute Upper Respiratory Tract Viral Fever",
    icdCode: "ICD-11: 1E30",
    cluster: "fever",
    doshaDushya: "Vata + Kapha obstructing Pranavaha & Rasavaha Srotas",
    pratyatmaLakshana:
      "पर्वभेदः कासः प्रतिश्यायस्तन्द्रा गौरवं — Moderate fever accompanied by aching finger/body joints (Parvabheda), productive or dry cough (Kasa), running/blocked nose (Pratishyaya), and daytime drowsiness.",
    knockoutClue:
      "Prominent upper respiratory catarrh (cough + coryza) combined with Vata-type body/knuckle aches.",
    matchingFilterIds: [
      "sym-cough-coryza-aches",
      "par-sama-tongue",
    ],
    essentialTests: [
      {
        name: "Clinical Chest Auscultation + SpO2 Pulse Oximetry",
        estCost: "₹0 (Bedside OPD Exam)",
        reason: "If lungs are clear and SpO2 > 96%, lab panels are rarely required in the first 72 hours.",
      },
    ],
    avoidedTests: [
      {
        name: "Routine HRCT Chest & Expensive Respiratory Viral BioFire Panel",
        estSaved: "₹8,500+",
        whyUnnecessary:
          "Uncomplicated Vata-Kaphaja Jwara with normal SpO2 resolves rapidly with Kapha-Vatahara decoctions.",
      },
    ],
    firstLineChikitsa:
      "कफ-वातहर स्वेदन एवं क्वाथ — Laxmivilas Rasa (Nardiya), Dashamoola Katutraya Kwatha, Tribhuvanakirti Rasa, and Tulsi-Shunthi infusion.",
  },
];
