"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PillarTopNav from "../_components/PillarTopNav";

const SHATKRIYAKALA_STAGES = [
  {
    stage: "STAGE 01 • SANCHAYA",
    name: "Dosha Accumulation",
    desc: "Doshas accumulate in their home GI sites (Amashaya/Pakvashaya). Early signs: mild fullness, temperature preference shifts.",
  },
  {
    stage: "STAGE 02 • PRAKOPA",
    name: "Aggravation / Excitation",
    desc: "Doshas liquefy and intensify within their primary seats. Early signs: hyperacidity, borborygmi, mild nausea.",
  },
  {
    stage: "STAGE 03 • PRASARA",
    name: "Systemic Overflow",
    desc: "Vitiated Doshas breach GI boundaries and circulate via Rasa-Rakta across the body.",
  },
  {
    stage: "STAGE 04 • STHANA SAMSHRAYA",
    name: "Prodromal Localization",
    desc: "Doshas lodge in a weak tissue/channel (Khavaigunya). Prodromal symptoms (Purvarupa) appear.",
  },
  {
    stage: "STAGE 05 • VYAKTI",
    name: "Clinical Manifestation",
    desc: "Full cardinal symptoms (Rupa) appear. This is where modern clinical lab diagnostics typically begin.",
  },
  {
    stage: "STAGE 06 • BHEDA",
    name: "Chronicity & Complications",
    desc: "Structural tissue breakdown, ulceration, or chronic genetic/autoimmune progression.",
  },
];

const COURSE_MODULES = [
  {
    title: "Module 01: Tridosha Biophysics",
    lessons: [
      "M1-L1: Panchamahabhuta & Tridosha Biophysics",
      "M1-L2: The 15 Subtypes of Vata, Pitta & Kapha in Organ Physiology",
      "M1-L3: Circadian & Seasonal Chronobiology (Dinacharya & Ritucharya)",
    ],
  },
  {
    title: "Module 02: Sapta Dhatu (7 Tissues)",
    lessons: [
      "M2-L1: Sapta Dhatu Cascade: Rasa, Rakta, Mamsa, Meda, Asthi, Majja, Shukra",
      "M2-L2: Dhatvagni (Tissue-Specific Metabolic Enzymes) & Upadhatus",
      "M2-L3: Ojas: The Ultimate Essence of Cellular Immunity",
    ],
  },
  {
    title: "Module 03: Srotas (Micro-Channels)",
    lessons: [
      "M3-L1: Srotovijnana: The 13 Intrinsic Macro & Micro-Channel Systems",
      "M3-L2: Srotodushti Prakara: Atipravritti, Sanga, Siragranthi & Vimargagamana",
      "M3-L3: Clearing Micro-Channel Obstruction (Srotoshodhana)",
    ],
  },
  {
    title: "Module 04: Clinical Diagnostics",
    lessons: [
      "M4-L1: Nidana Panchaka: The 5-Fold Root-Cause Diagnostic Framework",
      "M4-L2: Ashtavidha & Dashavidha Pariksha (8-Fold & 10-Fold Examination)",
      "M4-L3: Designing an Evidence-Based Pathya & Shamana Protocol",
    ],
  },
];

export default function PillarFourGatewayCurriculumPage() {
  const [activeCourseModule, setActiveCourseModule] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([
    "M1-L1: Panchamahabhuta & Tridosha Biophysics",
  ]);

  const toggleLesson = (id: string) => {
    setCompletedLessons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      <PillarTopNav activeSlug="gateway-curriculum" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 mb-4">
            Pillar 04 • Phase 2 Flagship International Course
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Foundations of Clinical Ayurveda for the Modern World
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base font-medium">
            A rigorous, 4-Module gateway curriculum designed for international students, biomedical learners, and integrative practitioners—focused strictly on Doshas, Dhatus, Srotas, and Clinical Assessment.
          </p>
        </div>

        {/* Interactive Shatkriyakala 6-Stage Pathogenesis Flowchart */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            Tactical Pathogenesis Flowchart (Sushruta Sutrasthana 21/36)
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Shatkriyakala: How Ayurveda Detects Disease 4 Stages Before Modern Lab Tests
          </h2>
          <p className="text-sm text-foreground/70 mb-6">
            Modern diagnostics usually detect disease at Stage 5 (<em>Vyakti</em>), when structural organ damage or abnormal blood markers appear. Classical Ayurveda intervenes during the first 3 sub-clinical stages:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SHATKRIYAKALA_STAGES.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-background border border-surfaceBorder"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                  {st.stage}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">
                  {st.name}
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Module Interactive Gateway Syllabus Tracker */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Gateway Course Syllabus &amp; Lesson Tracker ({completedLessons.length}/12 Completed)
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {COURSE_MODULES.map((m, idx) => (
              <button
                key={m.title}
                type="button"
                onClick={() => setActiveCourseModule(idx)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  activeCourseModule === idx
                    ? "bg-primary text-white border-primary"
                    : "bg-background text-foreground/75 border-surfaceBorder hover:border-primary/40"
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {COURSE_MODULES[activeCourseModule].lessons.map((lesson) => {
              const done = completedLessons.includes(lesson);
              return (
                <div
                  key={lesson}
                  onClick={() => toggleLesson(lesson)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    done
                      ? "bg-primary/10 border-primary/40 text-foreground font-bold"
                      : "bg-background border-surfaceBorder text-foreground/80 hover:border-primary/30"
                  }`}
                >
                  <span className="text-sm">{lesson}</span>
                  <span className="text-xs font-bold text-primary">
                    {done ? "✓ Completed" : "Mark Complete"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-surfaceBorder flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/atreya/gut-brain-pharmacology"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-surfaceBorder text-xs sm:text-sm font-bold hover:border-primary/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Pillar 03: Gut-Brain &amp; Herbs
          </Link>
          <Link
            href="/atreya/global-symposium"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primaryHover transition-all"
          >
            <span>Pillar 05: 8 Specialties &amp; Symposium</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
