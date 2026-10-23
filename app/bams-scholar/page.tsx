"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import AyurvedicBackground from "@/components/AyurvedicBackground";
import { VisitorTracker } from "@/components/VisitorTracker";
import { 
  ArrowLeft, ArrowRight, BookOpen, CheckSquare, Sparkles, 
  Stethoscope, Brain, Eye, CheckCircle2, Layers, ShieldCheck, ChevronRight 
} from "lucide-react";

type ProfKey = "prof1" | "prof2" | "prof3";

export default function BAMSScholarMasterGateway() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [activeProfTab, setActiveProfTab] = useState<ProfKey>("prof1");
  const [completedTopics, setCompletedTopics] = useState<string[]>([
    "Padartha Vigyan & Darshana",
    "Tridosha & Prakriti Physiology",
  ]);
  const [selectedShloka, setSelectedShloka] = useState<number>(0);
  const [revealMeaning, setRevealMeaning] = useState<boolean>(true);

  useEffect(() => setMounted(true), []);

  const isBatman = mounted && (theme === "batman" || resolvedTheme === "batman");

  const toggleTopic = (topic: string) => {
    setCompletedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const profGateways = [
    {
      id: "prof1",
      tag: "PROFESSION I • 18 MONTHS",
      title: "BAMS 1st Prof Command Center",
      subjects: "Padartha Vigyan • Kriya Sharir • Rachana Sharir • Samhita Adhyayana-I",
      description:
        "Foundational basic sciences vault featuring Ashtanga Hridaya & Kriya Sharir MCQs, Paper I & II archives, Marma spotters, and Prakriti practical logs.",
      href: "/bams-scholar/prof-1",
      status: "5 Core Pillars Ready",
      accent: "border-amber-500/30 hover:border-amber-500",
    },
    {
      id: "prof2",
      tag: "PROFESSION II • 18 MONTHS",
      title: "BAMS 2nd Prof Command Center",
      subjects: "Dravyaguna • Rasa Shastra • Roga Nidana • Agada Tantra • Charaka Purvardha",
      description:
        "Complete 2nd Prof examination ecosystem with Batch 2021–2023 PYQs, interactive Charaka tests, dual-theme handwritten notes, and solved practical files.",
      href: "/bams-hub",
      status: "Full Vault Live",
      accent: "border-emerald-500/40 hover:border-emerald-500",
    },
    {
      id: "prof3",
      tag: "PROFESSION III (FINAL) • 18 MONTHS",
      title: "BAMS 3rd Prof Command Center",
      subjects: "Kayachikitsa • Panchakarma • Shalya • Shalakya • Prasuti & Stri Roga • Kaumarbhritya",
      description:
        "Clinical & surgical command center featuring Chikitsa Sutra prescriptions, Shashti Upakrama & Kshara Sutra notes, Samsarjana Krama flowcharts, and IPD case sheets.",
      href: "/bams-scholar/prof-3",
      status: "5 Core Pillars Ready",
      accent: "border-amber-500/30 hover:border-amber-500",
    },
  ];

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

  const syllabusData: Record<ProfKey, {
    label: string;
    commandLink: string;
    subjects: {
      name: string;
      code: string;
      highYieldTopics: string[];
      pyqFocus: string;
    }[];
  }> = {
    prof1: {
      label: "First Professional BAMS (NCISM)",
      commandLink: "/bams-scholar/prof-1",
      subjects: [
        {
          name: "Padartha Vigyan Evam Ayurved Itihas",
          code: "AyUG-PV",
          highYieldTopics: [
            "Padartha Vigyan & Darshana",
            "Dravya, Guna, Karma, Samanya & Vishesha",
            "Pramana Vijnana (Aptopadesha, Pratyaksha, Anumana)",
          ],
          pyqFocus: "15-Mark Long Essays on Pariksha & Darshana Comparison",
        },
        {
          name: "Kriya Sharir (Ayurvedic & Modern Physiology)",
          code: "AyUG-KS",
          highYieldTopics: [
            "Tridosha & Prakriti Physiology",
            "Panchavidha Vata, Pitta & Kapha Subtypes",
            "Sapta Dhatu Poshana Nyayas & Ojas Immunity",
          ],
          pyqFocus: "Clinical Viva on Deha Prakriti Assessment & Agni",
        },
        {
          name: "Rachana Sharir (Anatomy & Marma Vigyan)",
          code: "AyUG-RS",
          highYieldTopics: [
            "Shava Vichhedana (Cadaveric Dissection Protocols)",
            "107 Classical Marmas (Sushruta Classification)",
            "Asthi, Sandhi, Sira, Dhamani & Srotas Sharir",
          ],
          pyqFocus: "Spotters + Sadhyapranahara Marma Clinical Injury Signs",
        },
        {
          name: "Samhita Adhyayana - I & Sanskrit",
          code: "AyUG-SA1",
          highYieldTopics: [
            "Ashtanga Hridaya Sutrasthana (Ch. 1 to 15)",
            "Charaka Samhita Sutrasthana (Bheshaja Chatushka)",
            "Sanskrit Sandhi, Samasa & Clinical Terminology",
          ],
          pyqFocus: "Shloka Recitation, Anvaya & Clinical Commentary",
        },
      ],
    },
    prof2: {
      label: "Second Professional BAMS (NCISM)",
      commandLink: "/bams-hub",
      subjects: [
        {
          name: "Dravyaguna Vigyan (Pharmacology & Materia Medica)",
          code: "AyUG-DG",
          highYieldTopics: [
            "Rasa, Guna, Virya, Vipaka & Prabhava Principles",
            "100+ Detailed Classical Medicinal Plant Monographs",
            "Mishraka Gana (Triphala, Trikatu, Dashamoola)",
          ],
          pyqFocus: "Dry/Wet Herbarium Specimen Identification & Botanical Names",
        },
        {
          name: "Rasa Shastra Evam Bhaishajya Kalpana",
          code: "AyUG-RB",
          highYieldTopics: [
            "Shodhana & Marana of Maharasa, Uparasa & Dhatus",
            "Panchavidha Kashaya Kalpana (Swarasa, Kalka, Kwatha, Hima, Phanta)",
            "Sneha Kalpana (Ghrita/Taila Paka) & Asava-Arishta",
          ],
          pyqFocus: "Yantra Diagrams, Bhasma Pariksha & Kupipakwa Rasayana",
        },
        {
          name: "Roga Nidan Evam Vikriti Vigyan (Pathology)",
          code: "AyUG-RN",
          highYieldTopics: [
            "Nidana Panchaka (Nidana, Purvarupa, Rupa, Upashaya, Samprapti)",
            "Shatkriyakala (6 Stages of Disease Manifestation)",
            "Ashtavidha & Dashavidha Pariksha + Modern Lab Diagnostics",
          ],
          pyqFocus: "Samprapti Flowcharts for Jwara, Pandu, Kamala & Prameha",
        },
        {
          name: "Agada Tantra Evam Vidhi Vaidyaka (Toxicology)",
          code: "AyUG-AT",
          highYieldTopics: [
            "Sthavara, Jangama & Garavisha Management",
            "Chaturvimshati Upakrama (24 Antidote Procedures)",
            "Medical Jurisprudence & IPC/CrPC Forensic Sections",
          ],
          pyqFocus: "Snakebite Differential (Darvikara, Mandali, Rajimanta)",
        },
      ],
    },
    prof3: {
      label: "Third / Final Professional BAMS (NCISM)",
      commandLink: "/bams-scholar/prof-3",
      subjects: [
        {
          name: "Kayachikitsa & Panchakarma (Internal Medicine)",
          code: "AyUG-KC",
          highYieldTopics: [
            "Chikitsa Sutras of Jwara, Raktapitta, Gulma, Prameha & Vatavyadhi",
            "Vamana, Virechana, Basti, Nasya & Raktamokshana Protocols",
            "Samsarjana Krama (Post-Purification Dietetics)",
          ],
          pyqFocus: "Bedside Case Taking & Complete Chikitsa Sutra Prescription",
        },
        {
          name: "Shalya & Shalakya Tantra (Surgery, ENT & Ophthalmology)",
          code: "AyUG-ST",
          highYieldTopics: [
            "Sushruta’s Shashti Upakrama (60 Wound Management Measures)",
            "Kshara Karma, Agnikarma & Jalaukavacharana (Leech Therapy)",
            "76 Netra Rogas, Kriyakalpa & Nasal/Auditory Micro-Surgery",
          ],
          pyqFocus: "Surgical Instrument Viva + Kshara Sutra Preparation",
        },
        {
          name: "Prasuti Tantra, Stri Roga & Kaumarbhritya (OB-GYN & Peds)",
          code: "AyUG-PS",
          highYieldTopics: [
            "Garbhini Paricharya (Month-wise Antenatal Regimen)",
            "Yonivyapada (20 Classical Gynecological Disorders)",
            "Swarna Prashana, Kashyapa Lehana & Neonatal Care",
          ],
          pyqFocus: "Obstetric Pelvis & Partograph + Stri Roga Case Presentation",
        },
      ],
    },
  };

  const currentShloka = shlokaVault[selectedShloka];
  const currentProf = syllabusData[activeProfTab];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 pt-10 pb-24 px-4 sm:px-6 ${isBatman ? "bg-transparent" : "bg-background"}`}>
      
      {!isBatman && <AyurvedicBackground />}

      {!isBatman && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <Link 
            href="/atreya" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-bold text-xs bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm"
          >
            <span>Switch to Ayurveda Global Portal →</span>
          </Link>
        </div>

        <VisitorTracker />

        {/* Master Header */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-6 sm:p-10 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          {!isBatman && (
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          )}

          <div className="flex flex-wrap gap-3 mb-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider shadow-sm uppercase">
              <Stethoscope className="w-3.5 h-3.5" /> Track 1 • NCISM BAMS &amp; AIAPGET Hub
            </span>
            <span className="inline-flex items-center gap-1.5 bg-surface border border-surfaceBorder text-foreground/70 px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase">
              Prof I, II &amp; III Command Centers Active
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4 text-foreground drop-shadow-sm relative z-10">
            BAMS Scholar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Master Hub</span>
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 font-medium max-w-3xl relative z-10">
            Select your Professional Year below to enter its dedicated 5-Pillar Command Center (MCQs, Past Papers, High-Yield Notes, Handwritten Notebook &amp; Practical Manuals), or practice with our Shloka Memorization Engine below.
          </p>
        </div>

        {/* =================================================================
            1. THE 3 PROFESSIONAL YEAR COMMAND CENTER GATEWAYS
            ================================================================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 mb-1">
                Dedicated Year-Wise Ecosystems
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Select Your BAMS Command Center
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {profGateways.map((prof) => (
              <Link
                key={prof.id}
                href={prof.href}
                className={`group bg-surface/90 backdrop-blur-md border ${prof.accent} rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30">
                      {prof.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-success flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {prof.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {prof.title}
                  </h3>

                  <p className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-3">
                    {prof.subjects}
                  </p>

                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {prof.description}
                  </p>
                </div>

                <div className="w-full bg-amber-500/15 border border-amber-500/30 text-amber-950 dark:text-amber-400 font-bold py-3 px-4 rounded-sm text-xs sm:text-sm uppercase tracking-wider group-hover:bg-amber-500 group-hover:text-black transition-colors flex items-center justify-center gap-2 relative z-10">
                  <span>Enter {prof.title.replace("BAMS ", "")}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =================================================================
            2. SHLOKA MEMORIZATION & MNEMONIC ENGINE
            ================================================================= */}
        <div className="bg-surface/90 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 sm:p-8 shadow-md mb-14">
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

        {/* =================================================================
            3. NCISM SUBJECT CHECKLIST TRACKER (WITH DIRECT LINKS TO EACH HUB)
            ================================================================= */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {([
                { id: "prof1" as const, title: "1st Prof Syllabus" },
                { id: "prof2" as const, title: "2nd Prof Syllabus" },
                { id: "prof3" as const, title: "3rd Prof Syllabus" },
              ]).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveProfTab(tab.id)}
                  className={`px-5 py-2.5 rounded-sm border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeProfTab === tab.id
                      ? "bg-amber-500 text-black border-amber-500 shadow-sm"
                      : "bg-surface text-foreground border-surfaceBorder hover:border-amber-500/40"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <Link
              href={currentProf.commandLink}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 hover:underline"
            >
              <span>Open Full {currentProf.label} Command Center</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProf.subjects.map((subj) => (
              <div
                key={subj.code}
                className="rounded-sm bg-surface/90 backdrop-blur-md border border-surfaceBorder p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20">
                      NCISM CODE: {subj.code}
                    </span>
                    <BookOpen className="w-4 h-4 text-amber-700 dark:text-[#D4AF37]" />
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-4">
                    {subj.name}
                  </h3>

                  <div className="space-y-2 mb-5">
                    {subj.highYieldTopics.map((topic) => {
                      const isChecked = completedTopics.includes(topic);
                      return (
                        <div
                          key={topic}
                          onClick={() => toggleTopic(topic)}
                          className={`p-3 rounded-sm border flex items-center gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? "bg-primary/10 border-primary/40 text-foreground font-semibold"
                              : "bg-background border-surfaceBorder text-foreground/80 hover:border-primary/30"
                          }`}
                        >
                          <CheckSquare className={`w-4 h-4 shrink-0 ${isChecked ? "text-primary" : "text-foreground/40"}`} />
                          <span className={`text-xs sm:text-sm ${isChecked ? "line-through opacity-75" : ""}`}>
                            {topic}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-surfaceBorder text-xs font-bold text-amber-900 dark:text-[#D4AF37]">
                  ★ Viva &amp; PYQ Focus: {subj.pyqFocus}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
