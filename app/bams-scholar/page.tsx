"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, BookOpen, ShieldCheck, CheckSquare, 
  Award, Flame, Globe, Sparkles, ArrowUpRight, 
  Stethoscope, Brain, Eye, CheckCircle2 
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

  // High-Yield Shloka Memorization & Mnemonic Vault
  const shlokaVault = [
    {
      tag: "1st Prof • Ashtanga Hridaya Sutra 1/20",
      title: "Tridosha Chief Sites (Sthana)",
      sanskrit: "तेषां मेदोऽस्थिनाभ्याधो हृदयनाभ्यधः स्थितः ।",
      padaccheda: "पक्वाधानं (Vata: Below Umbilicus) • नाभिः (Pitta: Umbilicus/Stomach) • उरः (Kapha: Thorax/Head)",
      mnemonicTrick: "TOP-TO-BOTTOM RULE: Kapha rules the Roof (Chest/Head), Pitta rules the Furnace (Mid-abdomen), Vata rules the Foundation (Pelvis/Colon).",
      aiapgetPearl: "Asked 6+ times in AIAPGET: 'Pakvashaya' is the Vishesha Sthana (chief seat) of Vata, whereas 'Amashaya' is the seat of Kapha & Pitta.",
    },
    {
      tag: "2nd Prof • Charaka Chikitsa 15/15",
      title: "Shatkriyakala & Agni Pathology",
      sanskrit: "आयुर्वर्णो बलं स्वास्थ्यमुत्साहोपचयौ प्रभा । ओजस्तेजोऽग्नयः प्राणाश्चोक्ता देहाग्निहेतुकाः ॥",
      padaccheda: "आयुः (Longevity) • वर्णः (Complexion) • बलम् (Strength) • ओजः (Immunity) = देहाग्नि-हेतुकाः (Rooted in Agni)",
      mnemonicTrick: "A-V-B-S-U-P-O: If Jatharagni dies, life ceases; if it burns cleanly, Ojas and Prana thrive.",
      aiapgetPearl: "Direct 5-mark Viva & MCQ favorite: 'Shama' vs 'Nirama' differentiation always begins with evaluating Agni Bala.",
    },
    {
      tag: "3rd Prof • Sushruta Sutrasthana 15/41",
      title: "The Definition of Complete Health (Swasthya)",
      sanskrit: "समदोषः समाग्निश्च समधातुमलक्रियः । प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥",
      padaccheda: "सम-दोषः (Balanced Doshas) + सम-अग्निः (Balanced Agni) + प्रसन्न-आत्म-इन्द्रिय-मनाः (Joyful Soul, Senses & Mind)",
      mnemonicTrick: "4 SAMAs + 3 PRASANNAs: 4 physical balances (Dosha, Agni, Dhatu, Mala) + 3 spiritual/mental balances (Atma, Indriya, Manas).",
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
    <div className="min-h-screen bg-[#080B0A] text-white font-sans pt-6 pb-32 px-4 sm:px-8">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-10 bg-zinc-900/90 border border-zinc-800 px-5 py-3.5 rounded-2xl">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-black tracking-wider uppercase text-white">
              ATREYA <span className="text-emerald-400">Med</span>
            </span>
            <span className="hidden md:inline-block text-[11px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full">
              Track 1 • BAMS &amp; AIAPGET Prep
            </span>
          </div>
        </div>

        <Link
          href="/atreya"
          className="inline-flex items-center gap-2 bg-[#D4AF37]/15 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] border border-[#D4AF37]/40 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Switch to Track 2: ATREYA Med Global</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#0F261D] via-zinc-900 to-zinc-950 border border-emerald-500/30 p-8 sm:p-12 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Ayurvedic Training, Research &amp; Education for Young Aspirants
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Master the NCISM Syllabus. <br />
              <span className="text-[#D4AF37]">Crack University Exams &amp; AIAPGET.</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              The clinical prep companion for India&apos;s BAMS scholars—combining simplified Samhita breakdowns, Shloka memorization tricks, PYQ focus areas, and Veblen Good viva-voce confidence.
            </p>
          </div>
          
      {/* 🔥 FEATURED VAULT: BAMS 2ND PROF STUDY HUB (/bams-hub) */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-amber-950/60 via-zinc-900 to-zinc-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-amber-400 transition-all">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 relative z-10 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] font-mono font-bold uppercase tracking-widest text-amber-300 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                BATCH 2023 PROF II PAPERS &amp; CHARAKA MCQS LIVE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Dedicated BAMS 2nd Prof Study Vault
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Access interactive Charaka Samhita MCQs, downloadable previous year question paper PDFs, and high-yield 2nd Prof revision notes.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto relative z-10">
            <Link
              href="/bams-hub"
              className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.3)]"
            >
              <span>Open BAMS 2nd Prof Vault</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
          
          {/* Progress Counter Card */}
          <div className="bg-black/50 border border-white/10 rounded-2xl p-6 min-w-[240px] text-center">
            <p className="text-xs font-mono uppercase text-zinc-400 mb-1">Syllabus Topics Mastered</p>
            <p className="text-4xl font-black text-[#D4AF37]">{completedTopics.length}</p>
            <p className="text-xs text-emerald-400 mt-1">Click any checklist item below</p>
          </div>
        </div>
      </div>

      {/* =================================================================
          INTERACTIVE SHLOKA MEMORIZATION & MNEMONIC DECODER
          ================================================================= */}
      <div className="max-w-7xl mx-auto mb-14 rounded-3xl bg-zinc-900/90 border border-[#D4AF37]/40 p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-1">
              <Brain className="w-4 h-4" /> High-Yield Samhita Memory Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Shloka Memorization Tricks &amp; AIAPGET Pearls
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {shlokaVault.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedShloka(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedShloka === idx
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"
                }`}
              >
                Verse #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono text-emerald-400">{currentShloka.tag}</span>
            <button
              onClick={() => setRevealMeaning(!revealMeaning)}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase px-3 py-1 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{revealMeaning ? "Hide Memory Trick" : "Reveal Memory Trick"}</span>
            </button>
          </div>

          <h3 className="text-lg font-bold text-zinc-300 mb-3">{currentShloka.title}</h3>
          <p className="font-serif text-2xl sm:text-3xl text-[#D4AF37] leading-relaxed mb-4">
            {currentShloka.sanskrit}
          </p>
          <p className="text-xs sm:text-sm font-mono text-zinc-300 mb-6">
            <strong>Padaccheda:</strong> {currentShloka.padaccheda}
          </p>

          {revealMeaning && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 mb-1">
                  ATREYA MED MEMORY TRICK
                </p>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {currentShloka.mnemonicTrick}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-950/40 border border-[#D4AF37]/40">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">
                  AIAPGET &amp; VIVA-VOCE HIGH-YIELD PEARL
                </p>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {currentShloka.aiapgetPearl}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prof Year Selector Tabs */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 mb-8">
        {([
          { id: "prof1" as const, title: "1st Prof BAMS", sub: "Foundational Sciences" },
          { id: "prof2" as const, title: "2nd Prof BAMS", sub: "Dravyaguna, Rasa & Nidan" },
          { id: "prof3" as const, title: "3rd / Final Prof BAMS", sub: "Clinical & Surgery" },
        ]).map((tab) => {
          const active = activeProf === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveProf(tab.id)}
              className={`px-6 py-4 rounded-2xl border text-left transition-all cursor-pointer ${
                active
                  ? "bg-emerald-500 text-black border-emerald-400 font-black shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                  : "bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800"
              }`}
            >
              <p className="text-sm sm:text-base font-bold">{tab.title}</p>
              <p className={`text-xs ${active ? "text-black/80 font-semibold" : "text-zinc-400"}`}>
                {tab.sub}
              </p>
            </button>
          );
        })}
      </div>

      {/* Subject Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-white">{currentProf.label}</h2>
          <span className="text-xs font-mono text-zinc-400">{currentProf.duration}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProf.subjects.map((subj) => (
            <div
              key={subj.code}
              className="rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 p-7 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    NCISM CODE: {subj.code}
                  </span>
                  <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
                  {subj.name}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  High-Yield Exam Checklist (Tap to Track):
                </p>

                <div className="space-y-2.5 mb-6">
                  {subj.highYieldTopics.map((topic) => {
                    const isChecked = completedTopics.includes(topic);
                    return (
                      <div
                        key={topic}
                        onClick={() => toggleTopic(topic)}
                        className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                          isChecked
                            ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-200"
                            : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                        }`}
                      >
                        <CheckSquare className={`w-4 h-4 shrink-0 ${isChecked ? "text-emerald-400" : "text-zinc-600"}`} />
                        <span className={`text-sm font-medium ${isChecked ? "line-through opacity-80" : ""}`}>
                          {topic}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-4 text-xs">
                <span className="text-[#D4AF37] font-semibold">
                  ★ Viva &amp; PYQ Focus: {subj.pyqFocus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
