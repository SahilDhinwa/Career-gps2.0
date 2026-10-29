"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PillarTopNav from "../_components/PillarTopNav";

const ASHTANGA_BRANCHES = [
  {
    code: "01",
    s: "Kayachikitsa",
    m: "Internal Medicine",
    desc: "Systemic pathology, metabolic restoration (Agni), and management of Jwara, Prameha, Amavata, and Grahani.",
    ref: "Charaka Samhita",
  },
  {
    code: "02",
    s: "Shalya Tantra",
    m: "General & Plastic Surgery",
    desc: "Pioneered by Acharya Sushruta: 101 blunt instruments, 20 surgical blades, forehead-flap rhinoplasty, fracture management, and Kshara Sutra.",
    ref: "Sushruta Samhita",
  },
  {
    code: "03",
    s: "Shalakya Tantra",
    m: "Ophthalmology & ENT",
    desc: "Micro-surgical and medical management of 76 ocular diseases, ear, nose, throat, and cranial disorders.",
    ref: "Uttara Tantra",
  },
  {
    code: "04",
    s: "Kaumarbhritya",
    m: "Pediatrics & OB-GYN",
    desc: "Embryology (Garbha Vijnana), maternal care, neonatal resuscitation, and pediatric nutrition.",
    ref: "Kashyapa Samhita",
  },
  {
    code: "05",
    s: "Agada Tantra",
    m: "Clinical Toxicology",
    desc: "Differential diagnosis and 24 antidote protocols for botanical, ophidian, and cumulative environmental toxins (Dushi Visha).",
    ref: "Agada Tantra Canon",
  },
  {
    code: "06",
    s: "Bhuta Vidya",
    m: "Psychiatry & Neuro-Care",
    desc: "Management of neuro-psychiatric disorders (Unmada, Apasmara, Vishada) via Satvavajaya cognitive therapy and Medhya botanicals.",
    ref: "Charaka Chikitsa 9–10",
  },
  {
    code: "07",
    s: "Rasayana Tantra",
    m: "Longevity & Immunology",
    desc: "Cellular regeneration, telomeric and neuro-cognitive preservation, and Ojas immune optimization.",
    ref: "Charaka Chikitsa Ch. 1",
  },
  {
    code: "08",
    s: "Vajikarana",
    m: "Reproductive Genetics",
    desc: "Reproductive endocrinology, gamete purification (Shukra-Artava Shuddhi), and pre-conception health.",
    ref: "Charaka Chikitsa Ch. 2",
  },
];

export default function PillarFiveGlobalSymposiumPage() {
  const [selectedBranch, setSelectedBranch] = useState<number>(0);
  const curr = ASHTANGA_BRANCHES[selectedBranch];

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      <PillarTopNav activeSlug="global-symposium" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 mb-4">
            Pillar 05 • Phase 3 Global Movement &amp; Specialties
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Ashtanga Ayurveda &amp; Indo-Global Vaidya Symposiums
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base font-medium">
            Exploring the 8 Classical Hospital Departments of Ayurveda and Connecting International Learners with India&apos;s BAMS Medical Scholars
          </p>
        </div>

        {/* 8 Branches Interactive Selector */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
            The 8 Classical Clinical Faculties (Ashtanga Ayurveda)
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {ASHTANGA_BRANCHES.map((b, idx) => (
              <button
                key={b.code}
                type="button"
                onClick={() => setSelectedBranch(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedBranch === idx
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-background text-foreground border-surfaceBorder hover:border-primary/40"
                }`}
              >
                <span
                  className={`text-[10px] font-bold block mb-1 ${
                    selectedBranch === idx ? "text-white/80" : "text-primary"
                  }`}
                >
                  BRANCH #{b.code}
                </span>
                <p className="font-heading font-bold text-sm sm:text-base">
                  {b.s}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    selectedBranch === idx
                      ? "text-white/85"
                      : "text-foreground/60"
                  }`}
                >
                  {b.m}
                </p>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-background border border-surfaceBorder">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              {curr.s} — <span className="text-primary">{curr.m}</span>
            </h3>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              {curr.desc}
            </p>
            <p className="text-xs font-bold text-amber-800 dark:text-[#D4AF37]">
              Primary Classical Treatise: {curr.ref}
            </p>
          </div>
        </div>

        {/* Phase 3 Indo-Global Symposium Tracks */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Phase 3: Indo-Global Vaidya &amp; Scholar Symposiums
          </h2>
          <p className="text-sm text-foreground/75 mb-6">
            Connecting our BAMS medical student community in India with international researchers for evidence-based clinical dialogues:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-background border border-surfaceBorder">
              <span className="text-[10px] font-bold uppercase text-primary block mb-1">
                SYMPOSIUM TRACK A
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Integrative Case Rounds (Kayachikitsa &amp; Autoimmunity)
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75">
                Joint clinical case breakdowns comparing modern rheumatology and gastroenterology protocols with classical <em>Amavata</em> and <em>Grahani Chikitsa</em>.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-background border border-surfaceBorder">
              <span className="text-[10px] font-bold uppercase text-amber-800 dark:text-[#D4AF37] block mb-1">
                SYMPOSIUM TRACK B
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Samhita-to-Lab Translation Colloquium
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75">
                BAMS scholars and global researchers collaborate on translating classical <em>Dravyaguna</em> and <em>Rasa Shastra</em> formulations into modern phytochemical models.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-surfaceBorder flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/atreya/gateway-curriculum"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-surfaceBorder text-xs sm:text-sm font-bold hover:border-primary/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Pillar 04: Gateway Course
          </Link>
          <Link
            href="/atreya"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primaryHover transition-all"
          >
            <span>Return to Global Command Center</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
