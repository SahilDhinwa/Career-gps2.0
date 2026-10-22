"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, ShieldCheck, CheckSquare, Globe, 
  Sparkles, ArrowRight, Stethoscope, Brain, Eye, CheckCircle 
} from "lucide-react";

type ProfKey = "prof1" | "prof2" | "prof3";

export default function AtreyaMedBAMSScholarPage() {
  const [activeProf, setActiveProf] = useState<ProfKey>("prof1");
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

  const shlokaVault = [
    {
      tag: "1st Prof • Ashtanga Hridaya Sutra 1/20",
      title: "Tridosha Chief Sites (Sthana)",
      sanskrit: "तेषां मेदोऽस्थिनाभ्याधो हृदयनाभ्यधः स्थितः ।",
      padaccheda: "पक्वाधानं (Vata: Below Umbilicus) • नाभिः (Pitta: Mid-Abdomen) • उरः (Kapha: Thorax/Head)",
      mnemonicTrick: "TOP-TO-BOTTOM RULE: Kapha rules the Roof (Chest/Head), Pitta rules the Furnace (Mid-abdomen), Vata rules the Foundation (Pelvis/Colon).",
      aiapgetPearl: "Asked 6+ times in AIAPGET: 'Pakvashaya' is the Vishesha Sthana (chief seat) of Vata, whereas 'Amashaya' is the seat of Kapha & Pitta.",
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
    duration: string;
    subjects: {
      name: string;
      code: string;
      highYieldTopics: string[];
      pyqFocus: string;
    }[];
  }> = {
    prof1: {
      label: "First Professional BAMS (NCISM)",
      duration: "18 Months • Foundational Basic Sciences",
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
      duration: "18 Months • Pharmacology, Pathology & Toxicology",
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
          name: "Agada Tantra Evam Vidhi Vaidyaka (Toxicology & Forensics)",
          code: "AyUG-AT",
          highYieldTopics: [
            "Sthavara, Jangama & Garavisha Management",
            "Chaturvimshati Upakrama (24 Antidote Procedures)",
            "Medical Jurisprudence & Forensic Autopsy",
          ],
          pyqFocus: "Snakebite Differential (Darvikara, Mandali, Rajimanta)",
        },
      ],
    },
    prof3: {
      label: "Third / Final Professional BAMS (NCISM)",
      duration: "18 Months • Clinical Specialties, Surgery & Panchakarma",
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
          name: "Shalya Tantra (General & Para-Surgery)",
          code: "AyUG-ST",
          highYieldTopics: [
            "Sushruta’s Shashti Upakrama (60 Wound Management Measures)",
            "Kshara Karma, Agnikarma & Jalaukavacharana (Leech Therapy)",
            "Bhagandara, Arsha, Ashmari & Bhagna (Fracture) Management",
          ],
          pyqFocus: "Surgical Instrument Viva + Kshara Sutra Preparation",
        },
        {
          name: "Prasuti Tantra Evam Stri Roga (OB-GYN)",
          code: "AyUG-PS",
          highYieldTopics: [
            "Garbhini Paricharya (Month-wise Antenatal Regimen)",
            "Yonivyapada (20 Classical Gynecological Disorders)",
            "Sutika Paricharya & Uttara Basti Procedures",
          ],
          pyqFocus: "Obstetric Pelvis & Partograph + Stri Roga Case Presentation",
        },
      ],
    },
  };

  const currentProf = syllabusData[activeProf];
  const currentShloka = shlokaVault[selectedShloka];

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      
      {/* =================================================================
          1. HERO BANNER (CLEAN FONT-HEADING & THEME-AWARE)
          ================================================================= */}
      <section className="px-4 sm:px-6 pt-10 pb-12 border-b border-surfaceBorder bg-surface/40">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>ATREYA Med • Track 1: BAMS &amp; AIAPGET Hub</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
              Master the NCISM Syllabus. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success">
                Crack University Exams &amp; AIAPGET.
              </span>
            </h1>
            <p className="text-foreground/75 text-base sm:text-lg font-medium leading-relaxed">
              Structured year-wise BAMS subject trackers, high-yield Samhita Shloka memory tricks, and direct access to previous year university question papers.
            </p>
          </div>

          <div className="bg-surface border border-surfaceBorder rounded-sm p-6 min-w-[240px] text-center shadow-sm w-full sm:w-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-1">
              Syllabus Topics Mastered
            </p>
            <p className="font-heading text-4xl font-bold text-primary">
              {completedTopics.length}
            </p>
            <p className="text-xs font-medium text-success mt-1">
              Tap any checklist item below to track
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        
        {/* =================================================================
            2. DEDICATED BAMS 2ND PROF STUDY VAULT BANNER (ORIGINAL GRADIENT)
            ================================================================= */}
        <div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-sm p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 relative z-10 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 text-amber-800 dark:text-amber-400" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/15 border border-amber-600/30 text-[10px] font-bold uppercase tracking-widest text-amber-950 dark:text-amber-300 mb-2">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span>BATCH 2023 PROF II PAPERS &amp; CHARAKA MCQS LIVE</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Dedicated BAMS 2nd Prof Study Vault
              </h2>
              <p className="text-foreground/80 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
                Access interactive Charaka Samhita MCQs, downloadable previous year question paper PDFs, and high-yield 2nd Prof revision notes.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto relative z-10">
            <Link
              href="/bams-hub"
              className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm py-3.5 px-7 rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Open BAMS 2nd Prof Vault</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* =================================================================
            3. SHLOKA MEMORIZATION & MNEMONIC ENGINE
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
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1.5 rounded-sm bg-surface border border-surfaceBorder text-foreground hover:border-primary/40 cursor-pointer"
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
            4. PROF I, II & III SYLLABUS CHECKLIST
            ================================================================= */}
        <div>
          <div className="flex flex-wrap gap-3 mb-8">
            {([
              { id: "prof1" as const, title: "1st Prof BAMS", sub: "Foundational Sciences" },
              { id: "prof2" as const, title: "2nd Prof BAMS", sub: "Dravyaguna, Rasa & Nidan" },
              { id: "prof3" as const, title: "3rd / Final Prof BAMS", sub: "Clinical & Surgery" },
            ]).map((tab) => {
              const active = activeProf === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveProf(tab.id)}
                  className={`px-6 py-4 rounded-sm border text-left transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-surface hover:bg-foreground/5 text-foreground border-surfaceBorder"
                  }`}
                >
                  <p className="font-heading text-sm sm:text-base font-bold">{tab.title}</p>
                  <p className={`text-xs ${active ? "text-white/85" : "text-foreground/60"}`}>
                    {tab.sub}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">{currentProf.label}</h2>
            <span className="text-xs font-bold text-foreground/60">{currentProf.duration}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProf.subjects.map((subj) => (
              <div
                key={subj.code}
                className="rounded-sm bg-surface border border-surfaceBorder hover:border-primary/40 p-6 sm:p-7 flex flex-col justify-between shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20">
                      NCISM CODE: {subj.code}
                    </span>
                    <BookOpen className="w-5 h-5 text-amber-700 dark:text-[#D4AF37]" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {subj.name}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">
                    High-Yield Exam Checklist (Tap to Track):
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {subj.highYieldTopics.map((topic) => {
                      const isChecked = completedTopics.includes(topic);
                      return (
                        <div
                          key={topic}
                          onClick={() => toggleTopic(topic)}
                          className={`p-3.5 rounded-sm border flex items-center gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? "bg-primary/10 border-primary/40 text-foreground font-semibold"
                              : "bg-background border-surfaceBorder text-foreground/80 hover:border-primary/30"
                          }`}
                        >
                          <CheckSquare className={`w-4 h-4 shrink-0 ${isChecked ? "text-primary" : "text-foreground/40"}`} />
                          <span className={`text-sm ${isChecked ? "line-through opacity-75" : ""}`}>
                            {topic}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-surfaceBorder text-xs font-bold text-amber-900 dark:text-[#D4AF37]">
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
