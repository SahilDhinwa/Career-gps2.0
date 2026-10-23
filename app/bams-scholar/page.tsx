"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, BookOpen, CheckSquare, Sparkles, 
  Stethoscope, Brain, Eye, CheckCircle2, ClipboardCheck, 
  Download, FileText, PenTool, FlaskConical, GitMerge, X, RotateCcw 
} from "lucide-react";

type ProfKey = "prof1" | "prof2" | "prof3";
type ActivePillarModal = null | "mcqs" | "papers" | "notes" | "notebook" | "practicals";

export default function BAMSScholarCommandCenter() {
  const [activeProf, setActiveProf] = useState<ProfKey>("prof1");
  const [activePillar, setActivePillar] = useState<ActivePillarModal>(null);

  // Dual-Theme Notebook Toggle ("notebook" = 32px Ruled Canvas | "flowchart" = Tactical Flowchart)
  const [notebookMode, setNotebookMode] = useState<"notebook" | "flowchart">("notebook");

  // Interactive MCQ Engine State (for 1st & 3rd Prof)
  const [mcqIndex, setMcqIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [mcqScore, setMcqScore] = useState<number>(0);

  // Syllabus & Shloka State
  const [completedTopics, setCompletedTopics] = useState<string[]>([
    "Padartha Vigyan & Darshana",
    "Tridosha & Prakriti Physiology",
  ]);
  const [selectedShloka, setSelectedShloka] = useState<number>(0);
  const [revealMeaning, setRevealMeaning] = useState<boolean>(true);

  const toggleTopic = (topic: string) => {
    setCompletedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleSelectProf = (prof: ProfKey) => {
    setActiveProf(prof);
    setActivePillar(null);
    setMcqIndex(0);
    setSelectedOption(null);
    setMcqScore(0);
  };

  // ===========================================================================
  // COMMAND CENTER DATA FOR 1ST PROF, 2ND PROF & 3RD PROF
  // ===========================================================================
  const commandCenterMeta: Record<ProfKey, {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    mcqDesc: string;
    papersDesc: string;
    notesDesc: string;
    notebookTags: string[];
    practicalDesc: string;
    directHubLink?: string;
  }> = {
    prof1: {
      badge: "1ST PROF NCISM CURRICULUM",
      titlePrefix: "BAMS 1st Prof",
      titleHighlight: "Command Center",
      description:
        "Your centralized vault for crushing 1st Prof university examinations. Access interactive Ashtanga Hridaya & Kriya Sharir tests, download past papers, review Padartha & Rachana notes, and print practical records.",
      mcqDesc:
        "Test your knowledge with interactive, real-time quizzes covering Ashtanga Hridaya Sutrasthana, Kriya Sharir, Padartha Vigyan, and Marma Sharir.",
      papersDesc:
        "A comprehensive PDF archive of 1st Prof Paper I & Paper II university question papers to analyze high-frequency exam patterns.",
      notesDesc:
        "Streamlined, highly organized revision notes covering Padartha Vigyan, Kriya Sharir, Rachana Sharir, and Sanskrit.",
      notebookTags: ["Kriya Sharir", "Ashtanga Sutra", "32px Grid"],
      practicalDesc:
        "Subject-wise 1st Prof NCISM activity sheets: Prakriti & Sara Pariksha logs, Nadineadi/pulse records, and Rachana Sharir Marma spotters.",
    },
    prof2: {
      badge: "2ND PROF NCISM CURRICULUM",
      titlePrefix: "BAMS 2nd Prof",
      titleHighlight: "Command Center",
      description:
        "Your centralized vault for crushing university examinations. Access interactive Charaka Samhita tests, download previous year papers, review high-yield notes, and print practical records.",
      mcqDesc:
        "Test your knowledge with interactive, real-time quizzes covering Sutra Sthana, Nidana Sthana, and Sharira Sthana.",
      papersDesc:
        "A comprehensive PDF archive of previous year university question papers to analyze high-frequency exam patterns.",
      notesDesc:
        "Streamlined, highly organized revision notes covering Dravyaguna, Rasa Shastra, and Roga Nidana.",
      notebookTags: ["Charaka Sharira", "Dravyaguna", "32px Grid"],
      practicalDesc:
        "Subject-wise NCISM non-lecture activity sheets. Print blank templates for your record file or read solved logs for viva prep.",
      directHubLink: "/bams-hub",
    },
    prof3: {
      badge: "3RD / FINAL PROF NCISM CURRICULUM",
      titlePrefix: "BAMS 3rd Prof",
      titleHighlight: "Command Center",
      description:
        "Your clinical command vault for Final Prof BAMS & AIAPGET. Master Kayachikitsa prescriptions, Panchakarma protocols, Shalya & Shalakya surgical procedures, and Prasuti-Stri Roga case taking.",
      mcqDesc:
        "Test your clinical acumen with real-time quizzes covering Charaka Chikitsasthana, Sushruta Shalya Tantra, Panchakarma, and OB-GYN.",
      papersDesc:
        "A complete archive of Final Prof university question papers and clinical long-essay blueprints across all 6 hospital departments.",
      notesDesc:
        "High-yield Chikitsa Sutra revision notes covering Kayachikitsa, Panchakarma, Shalya, Shalakya, Prasuti, and Kaumarbhritya.",
      notebookTags: ["Kayachikitsa", "Shalya Tantra", "32px Grid"],
      practicalDesc:
        "Bedside case-taking templates, Panchakarma Vamana/Basti monitoring charts, and Shalya surgical instrument viva logs.",
    },
  };

  // ===========================================================================
  // PILLAR 01 DATA: INTERACTIVE MCQS FOR 1ST & 3RD PROF
  // ===========================================================================
  const profMcqs: Record<"prof1" | "prof3", {
    question: string;
    subject: string;
    options: string[];
    correct: number;
    explanation: string;
  }[]> = {
    prof1: [
      {
        subject: "Kriya Sharir • Ashtanga Hridaya Sutra 1/20",
        question: "Which anatomical site is designated by Acharya Vagbhata as the Vishesha Sthana (chief seat) of Vata Dosha?",
        options: [
          "Nabhi (Umbilicus)",
          "Urah (Thorax)",
          "Pakvadhana / Pakvashaya (Colon & Pelvic Cavity)",
          "Amashaya (Stomach)",
        ],
        correct: 2,
        explanation: "Pakvadhana (Pakvashaya) is the primary seat of Vata, Nabhi is the chief seat of Pitta, and Urah is the chief seat of Kapha.",
      },
      {
        subject: "Padartha Vigyan • Darshana Shastra",
        question: "According to Vaisheshika Darshana and Acharya Charaka, how many Karana Padarthas (fundamental categories of existence) are enumerated?",
        options: ["Three (Tridosha)", "Six (Shad Padartha)", "Twenty-Four (Chaturvimshati Purusha)", "Five (Panchamahabhuta)"],
        correct: 1,
        explanation: "The 6 Padarthas are Samanya, Vishesha, Guna, Dravya, Karma, and Samavaya (Charaka Sutrasthana 1/28–29).",
      },
      {
        subject: "Rachana Sharir • Marma Vigyan",
        question: "Out of the 107 classical Marmas described by Acharya Sushruta, how many belong to the 'Sadhyapranahara' (immediately fatal upon injury) category?",
        options: ["19 Marmas", "33 Marmas", "44 Marmas", "11 Marmas"],
        correct: 0,
        explanation: "Sushruta classifies 19 Sadhyapranahara (Agni-predominant), 33 Kalantarapranahara, 3 Vishalyaghna, 44 Vaikalyakara, and 8 Rujakara Marmas.",
      },
    ],
    prof3: [
      {
        subject: "Kayachikitsa • Charaka Chikitsasthana Ch. 3",
        question: "What is the first line of Chikitsa Sutra prescribed by Acharya Charaka in Navajwara (acute fever during the first 6 days)?",
        options: [
          "Tikta Ghrita Pana (Medicated Ghee)",
          "Langhana (Therapeutic Fasting / Lightening)",
          "Virechana Karma (Purgation)",
          "Kshira Basti (Milk Enema)",
        ],
        correct: 1,
        explanation: "'Jware Langhanam Evadau' — Langhana is indicated first in Taruna/Nava Jwara to digest Sama Dosha and kindle Jatharagni without dispersing Ama.",
      },
      {
        subject: "Shalya Tantra • Sushruta Chikitsasthana Ch. 1",
        question: "How many therapeutic procedures are included in Acharya Sushruta's 'Shashti Upakrama' for comprehensive Vrana (wound) management?",
        options: ["24 Upakramas", "36 Upakramas", "60 Upakramas", "76 Upakramas"],
        correct: 2,
        explanation: "Shashti Upakrama comprises 60 sequential surgical and para-surgical wound-care measures, beginning with Apatarpana and Alepa.",
      },
      {
        subject: "Panchakarma • Siddhisthana",
        question: "In classical Virechana Karma, what is the total number of Vega (bouts of purgation) and Prastha measurement recorded in Pravara Shuddhi (optimal purification)?",
        options: [
          "10 Vegas & 2 Prasthas",
          "20 Vegas & 3 Prasthas",
          "30 Vegas & 4 Prasthas",
          "15 Vegas & 1 Prastha",
        ],
        correct: 2,
        explanation: "Pravara Shuddhi in Virechana is 30 Vegas (4 Prasthas), Madhyama is 20 Vegas (3 Prasthas), and Avara is 10 Vegas (2 Prasthas).",
      },
    ],
  };

  // ===========================================================================
  // PILLAR 02, 03, 04 & 05 CONTENT FOR 1ST & 3RD PROF
  // ===========================================================================
  const profVaultContent: Record<"prof1" | "prof3", {
    papers: { code: string; subject: string; focus: string; pdfPath: string }[];
    notes: { title: string; chapter: string; points: string[] }[];
    notebook: {
      title: string;
      sutra: string;
      ruledLines: string[];
      flowchartSteps: { step: string; detail: string }[];
    };
    practicals: { title: string; type: "BLANK TEMPLATE" | "SOLVED VIVA LOG"; summary: string; pdfPath: string }[];
  }> = {
    prof1: {
      papers: [
        { code: "AyUG-PV", subject: "Padartha Vigyan & Ayurved Itihas (Paper I & II)", focus: "Darshana Comparison, Dravya-Guna-Karma, Pramana Pariksha", pdfPath: "/pdfs" },
        { code: "AyUG-KS", subject: "Kriya Sharir — Ayurvedic & Modern Physiology (Paper I & II)", focus: "Tridosha Subtypes, Agni-Dhatu Poshana, Ojas, Neuro-Endocrine Physiology", pdfPath: "/pdfs" },
        { code: "AyUG-RS", subject: "Rachana Sharir — Anatomy & Marma (Paper I & II)", focus: "Garbha Sharir, Asthi-Sandhi, 107 Marmas, Srotas & Dissection", pdfPath: "/pdfs" },
        { code: "AyUG-SA1", subject: "Samhita Adhyayana - I (Ashtanga Hridaya & Charaka Sutra)", focus: "Ayushkamiya, Dinacharya, Ritucharya, Bheshaja Chatushka", pdfPath: "/pdfs" },
      ],
      notes: [
        {
          title: "Kriya Sharir: Panchavidha Vata, Pitta & Kapha Clinical Matrix",
          chapter: "Ashtanga Hridaya Sutrasthana Ch. 12",
          points: [
            "Prana Vata: Located in Murdha (Brain), governs respiration, deglutition, intellect & sensory perception.",
            "Pachaka Pitta: Located between Pakvashaya and Amashaya; devoid of liquid property (Tyakta Dravatva), governs Jatharagni.",
            "Avalambaka Kapha: Located in Urah (Thorax); supports the Trika and Hridaya through Ambukarma.",
          ],
        },
        {
          title: "Padartha Vigyan: The 4 Pramanas as Diagnostic Tools",
          chapter: "Charaka Vimanasthana Ch. 4",
          points: [
            "Aptopadesha: Authoritative scriptural testimony of the Samhitas — the first step in clinical inquiry.",
            "Pratyaksha: Direct sensory & instrumental examination (Darshana, Sparshana, Shravana).",
            "Anumana: Logical clinical inference — e.g., inferring Agni Bala from Abhyavaharana & Jarana Shakti.",
          ],
        },
      ],
      notebook: {
        title: "Sapta Dhatu Poshana & Ojas Formation Cascade",
        sutra: "रसाद्रक्तं ततो मांसं मांसान्मेदस्ततोऽस्थि च । अस्थ्नो मज्जा ततः शुक्रं शुक्राद्गर्भः प्रसादजः ॥ (Ch. Chi. 15/16)",
        ruledLines: [
          "1. Ahara Rasa (Nutrient Chyle) is acted upon by Jatharagni in the Koshtha.",
          "2. Prasada Bhaga nourishes Rasa Dhatu -> Upadhatu: Stanya (Lactation) & Artava; Mala: Kapha.",
          "3. Rakta Dhatu -> Upadhatu: Kandara & Sira; Mala: Pitta.",
          "4. Mamsa -> Meda -> Asthi -> Majja -> Shukra Dhatu.",
          "5. Para Ojas (8 Bindu in Hridaya) & Apara Ojas (Ardha Anjali) represent the supreme essence of all 7 Dhatus.",
        ],
        flowchartSteps: [
          { step: "01. Jatharagni Paka", detail: "Separates Prasada (Nutrient Essence) from Kitta (Metabolic Mala)" },
          { step: "02. Rasa → Rakta → Mamsa", detail: "Sequential transformation via respective Dhatvagnis" },
          { step: "03. Meda → Asthi → Majja → Shukra", detail: "Kedarikulya, Khalekapota & Kshiradadhi Nyaya kinetics" },
          { step: "04. Ojas (Vyadhikshamatva)", detail: "Final immunological & cellular vitality reserve" },
        ],
      },
      practicals: [
        { title: "Deha Prakriti & Dhatu Sara Pariksha Record Sheet", type: "SOLVED VIVA LOG", summary: "Complete step-by-step proforma for assessing Vata-Pitta-Kapha Prakriti and Twak-Rakta-Mamsa Sara in 1st Prof practicals.", pdfPath: "/practical_pdfs" },
        { title: "Rachana Sharir: 107 Marma Surface Marking & Osteology Log", type: "BLANK TEMPLATE", summary: "Printable NCISM non-lecture activity template for upper/lower limb Marmas and Asthi Sharir identification.", pdfPath: "/practical_pdfs" },
      ],
    },
    prof3: {
      papers: [
        { code: "AyUG-KC", subject: "Kayachikitsa — Internal Medicine (Paper I & II)", focus: "Jwara, Raktapitta, Prameha, Amavata, Vatavyadhi, Manasa Roga", pdfPath: "/pdfs" },
        { code: "AyUG-PK", subject: "Panchakarma & Upakalpana", focus: "Snehana, Swedana, Vamana, Virechana, Basti, Nasya & Samsarjana Krama", pdfPath: "/pdfs" },
        { code: "AyUG-ST", subject: "Shalya Tantra — General & Para-Surgery (Paper I & II)", focus: "Shashti Upakrama, Kshara Karma, Agnikarma, Bhagandara, Arsha, Bhagna", pdfPath: "/pdfs" },
        { code: "AyUG-PS", subject: "Prasuti Tantra, Stri Roga & Kaumarbhritya", focus: "Garbhini Paricharya, 20 Yonivyapada, Kashyapa Samhita Lehana & Swarna Prashana", pdfPath: "/pdfs" },
      ],
      notes: [
        {
          title: "Kayachikitsa: Amavata vs. Vatarakta Differential & Chikitsa Sutra",
          chapter: "Madhava Nidana Ch. 25 & Chakradatta",
          points: [
            "Amavata Triad: Angamarda, Aruchi, Trishna, Alasya, Gaurava, Jwara, and Sandhishula with morning stiffness.",
            "Chikitsa Sutra (Chakradatta): Langhanam Swedanam Tiktam Deepanani Katuni Cha | Virechanam Snehapanam Bastayashcha Amavatike ||",
            "Stage-wise Management: Dry fomentation (Valuka Sweda) in Sama stage; Sneha & Basti only after Nirama conversion.",
          ],
        },
        {
          title: "Shalya Tantra: Kshara Sutra Preparation & Anorectal Protocol",
          chapter: "Sushruta Chikitsasthana Ch. 17",
          points: [
            "Standard Barbour Linen Thread (#20): 11 coatings of Snuhi Ksheera, 7 coatings of Snuhi Ksheera + Apamarga Kshara, 3 coatings ofSnuhi Ksheera + Haridra Churna (Total 21 coatings).",
            "Mechanism: Simultaneous mechanical cutting (Chedana), chemical curettage (Lekhana), and antiseptic healing (Ropana) in Bhagandara (Fistula-in-ano).",
          ],
        },
      ],
      notebook: {
        title: "Panchakarma Samsarjana Krama (Post-Shodhana Agni Restoration)",
        sutra: "पेयां विलेपीमकृतं कृतं च यूषं रसं त्रिर्द्विरथैकशश्च । क्रमेण सेवेत विशुद्धकायः प्रधानमध्यावरशुद्धिशुद्धः ॥ (Ch. Si. 1/11)",
        ruledLines: [
          "1. After Vamana or Virechana, Jatharagni is like a tiny spark (Alpa-Agni) that must be fed progressively.",
          "2. Pravara Shuddhi (3 Annakala per diet): Peya -> Vilepi -> Akrita Yusha -> Krita Yusha -> Akrita Mamsarasa -> Krita Mamsarasa (7 Days / 14 Meals).",
          "3. Madhyama Shuddhi (2 Annakala per diet): 5 Days / 10 Meals.",
          "4. Avara Shuddhi (1 Annakala per diet): 3 Days / 6 Meals.",
        ],
        flowchartSteps: [
          { step: "01. Manda / Peya", detail: "Thin rice gruel kindles Jatharagni (Deepana) and hydrates Koshtha" },
          { step: "02. Vilepi", detail: "Thick rice paste restores mucosal strength (Brimhana)" },
          { step: "03. Akrita & Krita Yusha", detail: "Mudga (Green Gram) soup introduces plant protein & Sneha-Lavana" },
          { step: "04. Mamsarasa → Normal Diet", detail: "Restores full tissue bala by Day 7 in Pravara Shuddhi" },
        ],
      },
      practicals: [
        { title: "Kayachikitsa & Panchakarma Bedside Case-Taking Proforma", type: "SOLVED VIVA LOG", summary: "Complete hospital IPD case sheet covering Rogi-Roga Pariksha, Nidana Panchaka, Samprapti Ghataka, and Shamana/Shodhana prescription.", pdfPath: "/practical_pdfs" },
        { title: "Shalya Tantra: Yantra, Shastra, Anushastra & Suturing Viva Manual", type: "BLANK TEMPLATE", summary: "Illustrated surgical viva log for identifying forceps, probes, Kshara Sutra, Jalauka (leech therapy), and Agnikarma Shalakas.", pdfPath: "/practical_pdfs" },
      ],
    },
  };

  // ===========================================================================
  // SHLOKA ENGINE & SYLLABUS CHECKLIST DATA
  // ===========================================================================
  const shlokaVault = [
    {
      tag: "1st Prof • Ashtanga Hridaya Sutra 1/20",
      title: "Tridosha Chief Sites (Sthana)",
      sanskrit: "तेषां मेदोऽस्थिनाभ्याधो हृदयनाभ्यधः स्थितः ।",
      padaccheda: "पक्वाधानं (Vata: Below Umbilicus) • नाभिः (Pitta: Mid-Abdomen) • उरः (Kapha: Thorax/Head)",
      mnemonicTrick: "TOP-TO-BOTTOM RULE: Kapha rules the Roof (Chest/Head), Pitta rules the Furnace (Mid-abdomen), Vata rules the Foundation (Pelvis/Colon).",
      aiapgetPearl: "Asked 6+ times in AIAPGET: 'Pakvashaya' is the Vishesha Sthana of Vata, whereas 'Amashaya' is the seat of Kapha & Pitta.",
    },
    {
      tag: "2nd Prof • Charaka Chikitsa 15/15",
      title: "Shatkriyakala & Agni Pathology",
      sanskrit: "आयुर्वर्णो बलं स्वास्थ्यमुत्साहोपचयौ प्रभा । ओजस्तेजोऽग्नयः प्राणाश्चोक्ता देहाग्निहेतुकाः ॥",
      padaccheda: "आयुः (Longevity) • वर्णः (Complexion) • बलम् (Strength) • ओजः (Immunity) = देहाग्नि-हेतुकाः (Rooted in Agni)",
      mnemonicTrick: "A-V-B-S-U-P-O: If Jatharagni dies, life ceases; if it burns cleanly, Ojas and Prana thrive.",
      aiapgetPearl: "Direct 5-mark Viva & MCQ favorite: 'Sama' vs 'Nirama' differentiation always begins with evaluating Agni Bala.",
    },
    {
      tag: "3rd Prof • Sushruta Sutrasthana 15/41",
      title: "The Definition of Complete Health (Swasthya)",
      sanskrit: "समदोषः समाग्निश्च समधातुमलक्रियः । प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥",
      padaccheda: "सम-दोषः (Balanced Doshas) + सम-अग्निः (Balanced Agni) + प्रसन्न-आत्म-इन्द्रिय-मनाः (Clear Soul, Senses & Mind)",
      mnemonicTrick: "4 SAMAs + 3 PRASANNAs: 4 physical balances (Dosha, Agni, Dhatu, Mala) + 3 mental/spiritual balances (Atma, Indriya, Manas).",
      aiapgetPearl: "The World Health Organization (WHO) definition of health closely mirrors Acharya Sushruta’s 2,600-year-old verse.",
    },
  ];

  const currentMeta = commandCenterMeta[activeProf];
  const currentShloka = shlokaVault[selectedShloka];
  const activeVaultKey: "prof1" | "prof3" = activeProf === "prof3" ? "prof3" : "prof1";

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      
      {/* Top Navigation & Prof Year Switcher Bar */}
      <div className="max-w-6xl mx-auto pt-6 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-surface border border-surfaceBorder text-xs font-bold text-foreground/80 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {([
              { id: "prof1" as const, label: "1st Prof Command Center" },
              { id: "prof2" as const, label: "2nd Prof Command Center" },
              { id: "prof3" as const, label: "3rd Prof Command Center" },
            ]).map((tab) => {
              const isSelected = activeProf === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectProf(tab.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-amber-500 text-black border-amber-500 shadow-md"
                      : "bg-surface text-foreground/75 border-surfaceBorder hover:border-amber-500/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================================
            1. COMMAND CENTER HERO BANNER (EXACT MATCH TO 2ND PROF SCREENSHOT)
            ================================================================= */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="flex flex-wrap items-center gap-2 mb-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-amber-500/15 border border-amber-500/35 text-[10px] font-bold uppercase tracking-widest text-amber-900 dark:text-amber-400">
              <Sparkles className="w-3 h-3" /> {currentMeta.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-background border border-surfaceBorder text-[10px] font-bold uppercase tracking-widest text-foreground/70">
              5 CORE PILLARS ACTIVE
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4 relative z-10">
            {currentMeta.titlePrefix}{" "}
            <span className="text-amber-700 dark:text-amber-500">{currentMeta.titleHighlight}</span>
          </h1>

          <p className="text-foreground/75 text-sm sm:text-base max-w-3xl font-medium leading-relaxed relative z-10">
            {currentMeta.description}
          </p>

          {activeProf === "prof2" && (
            <div className="mt-6 pt-5 border-t border-surfaceBorder flex flex-wrap items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-bold text-success flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Full Dedicated 2nd Prof Standalone Hub Active
              </span>
              <Link
                href="/bams-hub"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>Enter Dedicated 2nd Prof Hub (/bams-hub)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {/* =================================================================
            2. THE 5 CORE PILLARS GRID (1ST, 2ND & 3RD PROF IDENTICAL DESIGN)
            ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* PILLAR 01: TAKE MCQS */}
          <div className="bg-surface border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 dark:text-amber-400">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                  PILLAR 01
                </span>
              </div>

              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Take MCQs
              </h2>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-6">
                {currentMeta.mcqDesc}
              </p>
            </div>

            {activeProf === "prof2" ? (
              <Link
                href="/bams-hub"
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Test Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActivePillar("mcqs")}
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Test Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* PILLAR 02: PAST PAPERS */}
          <div className="bg-surface border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 dark:text-amber-400">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                  PILLAR 02
                </span>
              </div>

              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Past Papers
              </h2>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-6">
                {currentMeta.papersDesc}
              </p>
            </div>

            {activeProf === "prof2" ? (
              <Link
                href="/bams-hub"
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>PDF Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActivePillar("papers")}
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>PDF Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* PILLAR 03: READ NOTES */}
          <div className="bg-surface border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 dark:text-amber-400">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                  PILLAR 03
                </span>
              </div>

              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Read Notes
              </h2>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-6">
                {currentMeta.notesDesc}
              </p>
            </div>

            {activeProf === "prof2" ? (
              <Link
                href="/bams-hub"
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Study Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActivePillar("notes")}
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Study Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* PILLAR 04: HANDWRITTEN NOTEBOOK (DUAL-THEME RULED + FLOWCHART) */}
          <div className="bg-surface border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 dark:text-amber-400">
                  <PenTool className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-sm bg-amber-500/15 border border-amber-500/30 text-[9px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400">
                    ✦ DUAL-THEME
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                    PILLAR 04
                  </span>
                </div>
              </div>

              <h2 className="font-serif italic text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Handwritten Notebook
              </h2>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-4">
                Point-by-point classical notes on ruled notebook canvas with instant switching to Tactical Flowchart view.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {currentMeta.notebookTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-sm bg-background border border-surfaceBorder text-[10px] font-bold text-foreground/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {activeProf === "prof2" ? (
              <Link
                href="/bams-hub"
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Open Notebook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActivePillar("notebook")}
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Open Notebook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* PILLAR 05: PRACTICAL MANUALS & RECORDS (FULL-WIDTH SPAN) */}
          <div className="md:col-span-2 bg-surface border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 dark:text-amber-400">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-sm bg-success/15 border border-success/30 text-[9px] font-bold uppercase tracking-wider text-success">
                    ✦ BLANK + SOLVED
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                    PILLAR 05
                  </span>
                </div>
              </div>

              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Practical Manuals &amp; Records
              </h2>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-4">
                {currentMeta.practicalDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-sm bg-amber-500/15 border border-amber-500/30 text-[10px] font-bold text-amber-900 dark:text-amber-400">
                  🖨 Printable Empty PDFs
                </span>
                <span className="px-3 py-1 rounded-sm bg-success/15 border border-success/30 text-[10px] font-bold text-success">
                  ✓ Solved Viva Records
                </span>
              </div>
            </div>

            {activeProf === "prof2" ? (
              <Link
                href="/bams-hub"
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Open Practical Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setActivePillar("practicals")}
                className="w-full py-3.5 px-5 rounded-sm bg-amber-500/15 hover:bg-amber-500 text-amber-950 dark:text-amber-400 hover:text-black border border-amber-500/35 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Open Practical Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* =================================================================
            3. ACTIVE PILLAR WORKSPACE DRAWER (OPENS WHEN ANY 1ST/3RD PROF PILLAR IS CLICKED)
            ================================================================= */}
        {activePillar && activeProf !== "prof2" && (
          <div className="mb-14 bg-surface border-2 border-amber-500/60 rounded-sm p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-surfaceBorder">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  {currentMeta.titlePrefix} • Active Pillar Workspace
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                  {activePillar === "mcqs" && "Pillar 01: Interactive MCQ Test Engine"}
                  {activePillar === "papers" && "Pillar 02: University Past Papers Vault"}
                  {activePillar === "notes" && "Pillar 03: High-Yield Subject Revision Notes"}
                  {activePillar === "notebook" && "Pillar 04: Dual-Theme Handwritten Notebook & Tactical Flowchart"}
                  {activePillar === "practicals" && "Pillar 05: Practical Manuals & Viva Records"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePillar(null)}
                className="px-3.5 py-2 rounded-sm bg-rose-500/15 hover:bg-rose-500 text-rose-500 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" /> Close Vault
              </button>
            </div>

            {/* WORKSPACE A: TAKE MCQS */}
            {activePillar === "mcqs" && (() => {
              const questions = profMcqs[activeVaultKey];
              const q = questions[mcqIndex];
              return (
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground/70">
                    <span>{q.subject}</span>
                    <span>Question {mcqIndex + 1} of {questions.length} • Score: {mcqScore}</span>
                  </div>

                  <p className="font-heading text-lg sm:text-xl font-bold text-foreground">
                    {q.question}
                  </p>

                  <div className="space-y-2.5">
                    {q.options.map((opt, idx) => {
                      const isPicked = selectedOption === idx;
                      const isCorrect = idx === q.correct;
                      let btnStyle = "bg-background border-surfaceBorder text-foreground";
                      if (selectedOption !== null) {
                        if (isCorrect) btnStyle = "bg-success/20 border-success text-foreground font-bold";
                        else if (isPicked) btnStyle = "bg-rose-500/20 border-rose-500 text-foreground";
                      }
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            if (selectedOption === null) {
                              setSelectedOption(idx);
                              if (idx === q.correct) setMcqScore((s) => s + 1);
                            }
                          }}
                          className={`w-full text-left p-4 rounded-sm border text-sm transition-all cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {selectedOption !== null && (
                    <div className="p-4 rounded-sm bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-foreground">
                      <strong>Samhita Explanation:</strong> {q.explanation}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setMcqIndex(0);
                        setSelectedOption(null);
                        setMcqScore(0);
                      }}
                      className="text-xs font-bold text-foreground/60 hover:text-foreground inline-flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset Quiz
                    </button>
                    {mcqIndex < questions.length - 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setMcqIndex((i) => i + 1);
                          setSelectedOption(null);
                        }}
                        className="px-5 py-2.5 rounded-sm bg-amber-500 text-black font-bold text-xs uppercase cursor-pointer"
                      >
                        Next Question →
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* WORKSPACE B: PAST PAPERS */}
            {activePillar === "papers" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profVaultContent[activeVaultKey].papers.map((paper) => (
                  <div key={paper.code} className="p-5 rounded-sm bg-background border border-surfaceBorder flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-sm bg-amber-500/15 text-amber-900 dark:text-amber-400">
                        {paper.code}
                      </span>
                      <h4 className="font-heading text-base font-bold text-foreground mt-2 mb-1">
                        {paper.subject}
                      </h4>
                      <p className="text-xs text-foreground/70 mb-4">
                        <strong>High-Frequency Blueprint:</strong> {paper.focus}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-primary">
                      Repository Folder: public{paper.pdfPath}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* WORKSPACE C: READ NOTES */}
            {activePillar === "notes" && (
              <div className="space-y-6">
                {profVaultContent[activeVaultKey].notes.map((note, idx) => (
                  <div key={idx} className="p-6 rounded-sm bg-background border border-surfaceBorder">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400">
                      {note.chapter}
                    </span>
                    <h4 className="font-heading text-xl font-bold text-foreground mt-1 mb-3">
                      {note.title}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground/85">
                      {note.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* WORKSPACE D: DUAL-THEME HANDWRITTEN NOTEBOOK + TACTICAL FLOWCHART */}
            {activePillar === "notebook" && (() => {
              const nb = profVaultContent[activeVaultKey].notebook;
              return (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div>
                      <h4 className="font-serif italic text-xl sm:text-2xl font-bold text-foreground">
                        {nb.title}
                      </h4>
                      <p className="text-xs font-bold text-amber-800 dark:text-amber-400 mt-1">
                        {nb.sutra}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setNotebookMode("notebook")}
                        className={`px-4 py-2 rounded-sm text-xs font-bold uppercase cursor-pointer border ${
                          notebookMode === "notebook"
                            ? "bg-amber-500 text-black border-amber-500"
                            : "bg-background text-foreground border-surfaceBorder"
                        }`}
                      >
                        Ruled Notebook (32px)
                      </button>
                      <button
                        type="button"
                        onClick={() => setNotebookMode("flowchart")}
                        className={`px-4 py-2 rounded-sm text-xs font-bold uppercase cursor-pointer border ${
                          notebookMode === "flowchart"
                            ? "bg-amber-500 text-black border-amber-500"
                            : "bg-background text-foreground border-surfaceBorder"
                        }`}
                      >
                        Tactical Flowchart
                      </button>
                    </div>
                  </div>

                  {notebookMode === "notebook" ? (
                    <div
                      className="p-6 rounded-sm bg-[#FAF6EC] text-[#1c1917] border border-[#d6cfc2] space-y-3 font-serif text-sm sm:text-base"
                      style={{
                        backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(138, 102, 15, 0.22) 32px)",
                        lineHeight: "32px",
                      }}
                    >
                      {nb.ruledLines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {nb.flowchartSteps.map((st, idx) => (
                        <div key={idx} className="p-4 rounded-sm bg-background border-2 border-amber-500/40">
                          <span className="text-[10px] font-bold uppercase text-amber-800 dark:text-amber-400 block mb-1">
                            {st.step}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-foreground">
                            {st.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* WORKSPACE E: PRACTICAL MANUALS & RECORDS */}
            {activePillar === "practicals" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profVaultContent[activeVaultKey].practicals.map((prac, idx) => (
                  <div key={idx} className="p-5 rounded-sm bg-background border border-surfaceBorder flex flex-col justify-between">
                    <div>
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-sm ${
                        prac.type === "SOLVED VIVA LOG"
                          ? "bg-success/15 text-success"
                          : "bg-amber-500/15 text-amber-900 dark:text-amber-400"
                      }`}>
                        {prac.type}
                      </span>
                      <h4 className="font-heading text-base font-bold text-foreground mt-2 mb-1">
                        {prac.title}
                      </h4>
                      <p className="text-xs text-foreground/75 mb-4">{prac.summary}</p>
                    </div>
                    <span className="text-xs font-bold text-primary">
                      Directory: public{prac.pdfPath}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* =================================================================
            4. HIGH-YIELD SHLOKA MEMORIZATION ENGINE (ALL 3 PROFS)
            ================================================================= */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1 flex items-center gap-1.5">
                <Brain className="w-4 h-4" /> High-Yield Samhita Memory Engine
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Shloka Memorization Tricks &amp; AIAPGET Pearls
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {shlokaVault.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedShloka(idx)}
                  className={`px-4 py-2 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
                    selectedShloka === idx
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-foreground/70 border-surfaceBorder hover:text-foreground"
                  }`}
                >
                  Verse #{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-sm bg-background border border-surfaceBorder">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-primary">{currentShloka.tag}</span>
              <button
                type="button"
                onClick={() => setRevealMeaning(!revealMeaning)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1.5 rounded-sm bg-surface border border-surfaceBorder text-foreground cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{revealMeaning ? "Hide Memory Trick" : "Reveal Memory Trick"}</span>
              </button>
            </div>

            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              {currentShloka.title}
            </h3>
            <p className="font-heading text-xl sm:text-2xl font-bold text-amber-800 dark:text-[#D4AF37] leading-relaxed mb-3">
              {currentShloka.sanskrit}
            </p>
            <p className="text-xs sm:text-sm text-foreground/80 font-medium mb-5">
              <strong>Padaccheda:</strong> {currentShloka.padaccheda}
            </p>

            {revealMeaning && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-surfaceBorder">
                <div className="p-4 rounded-sm bg-primary/10 border border-primary/25">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                    ATREYA Med Memory Trick
                  </p>
                  <p className="text-xs sm:text-sm text-foreground font-medium">
                    {currentShloka.mnemonicTrick}
                  </p>
                </div>
                <div className="p-4 rounded-sm bg-amber-500/10 border border-amber-500/30">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900 dark:text-[#D4AF37] mb-1">
                    AIAPGET &amp; Viva-Voce High-Yield Pearl
                  </p>
                  <p className="text-xs sm:text-sm text-foreground font-medium">
                    {currentShloka.aiapgetPearl}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
