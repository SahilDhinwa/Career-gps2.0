"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, BookOpen, ShieldCheck, CheckSquare, 
  Award, Flame, FileText, Globe, Sparkles, ArrowUpRight, Layers 
} from "lucide-react";

type ProfKey = "prof1" | "prof2" | "prof3";

export default function BAMSScholarGatewayPage() {
  const [activeProf, setActiveProf] = useState<ProfKey>("prof1");
  const [completedTopics, setCompletedTopics] = useState<string[]>([
    "Padartha Vigyan & Darshana",
    "Tridosha & Prakriti Physiology",
  ]);

  const toggleTopic = (topic: string) => {
    setCompletedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

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
            "Sapta Dhatu Posana Nyayas & Ojas Immunity",
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
          pyqFocus: "Dry/Wet Herbarium Specimen Identification &Botanical Names",
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
          pyqFocus: "Snakebite Differential (Sarpa,igha, Mandali, Rajimanta)",
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
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            BAMS Scholar Gateway • NCISM Curriculum Hub
          </span>
        </div>

        <Link
          href="/atreya"
          className="inline-flex items-center gap-2 bg-[#D4AF37]/15 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] border border-[#D4AF37]/40 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>View Global Project ATREYA Gateway</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#0F261D] via-zinc-900 to-zinc-950 border border-emerald-500/30 p-8 sm:p-12 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Track A • For Indian BAMS Medical Scholars
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Complete Your NCISM Syllabus. <br />
              <span className="text-[#D4AF37]">Dominate University Exams &amp; AIAPGET.</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Structured year-wise subject trackers, high-yield Samhita checklists, and practical viva-voce focus points so you never feel overwhelmed before professional examinations.
            </p>
          </div>

          {/* Progress Counter Card */}
          <div className="bg-black/50 border border-white/10 rounded-2xl p-6 min-w-[240px] text-center">
            <p className="text-xs font-mono uppercase text-zinc-400 mb-1">Topics Mastered</p>
            <p className="text-4xl font-black text-[#D4AF37]">{completedTopics.length}</p>
            <p className="text-xs text-emerald-400 mt-1">Click any topic below to check off</p>
          </div>
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
