"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Flame,
  Brain,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Zap,
  HeartPulse,
  Eye,
  RotateCcw,
  ShieldCheck,
  Droplets,
} from "lucide-react";

type Mode = "modern" | "ayurvedic";

interface OrganSystem {
  id: string;
  name: string;
  sanskrit: string;
  TimeWindow: string;
  cx: number;
  cy: number;
  modernHabit: {
    title: string;
    subtitle: string;
    whatHappens: string;
    biomarkerImpact: string;
    metrics: { agni: number; vagal: number; ojas: number; microbiome: number };
  };
  ayurvedicHabit: {
    title: string;
    subtitle: string;
    whatHappens: string;
    biomarkerImpact: string;
    sutra: string;
    metrics: { agni: number; vagal: number; ojas: number; microbiome: number };
  };
}

const BIO_SYSTEMS: OrganSystem[] = [
  {
    id: "pineal",
    name: "01. Master Circadian Clock",
    sanskrit: "Prana Vata & Pineal Axis",
    TimeWindow: "04:30 AM – 06:00 AM",
    cx: 150,
    cy: 48,
    modernHabit: {
      title: "Snoozing Alarm & Immediate Doomscrolling",
      subtitle: "Waking late + hitting the retina with artificial blue light in bed",
      whatHappens:
        "Flooding half-asleep eyes with phone notifications spikes reactive cortisol (Tamas/Rajas overload), fragments dopamine receptors for the rest of the day, and confuses your hypothalamus master clock.",
      biomarkerImpact: "Cortisol Spike: +42% • Morning Brain Fog: High",
      metrics: { agni: 45, vagal: 25, ojas: 40, microbiome: 55 },
    },
    ayurvedicHabit: {
      title: "Waking in 'Brahma Muhurta' + Natural Dawn Light",
      subtitle: "Rising ~96 mins before sunrise after checking stomach digestion",
      whatHappens:
        "Synchronizes your Suprachiasmatic Nucleus (master clock) with solar rise, gently elevates serotonin for laser-sharp memory (Smriti), and programs timely melatonin release 16 hours later.",
      biomarkerImpact: "Serotonin Sync: Optimal • Focus & Memory: +85%",
      sutra: "ब्राह्मे मुहूर्ते उत्तिष्ठेत् जीर्णाजीर्णं निरूपयन्",
      metrics: { agni: 88, vagal: 95, ojas: 92, microbiome: 85 },
    },
  },
  {
    id: "nasal",
    name: "02. Nose-to-Brain Gateway",
    sanskrit: "Shringataka Marma (Nasya)",
    TimeWindow: "06:00 AM • Cranial Shield",
    cx: 150,
    cy: 72,
    modernHabit: {
      title: "Dry Sinuses + Alcohol Mouthwash Rinse",
      subtitle: "Leaving nasal passages dry to urban dust & nuking oral flora",
      whatHappens:
        "Unprotected olfactory nerves inhale particulate pollution directly toward the blood-brain barrier, while chemical mouthwashes kill nitrate-reducing oral bacteria that regulate blood pressure.",
      biomarkerImpact: "Mucosal Barrier: Weakened • Sinus Inflammation: High",
      metrics: { agni: 55, vagal: 35, ojas: 45, microbiome: 20 },
    },
    ayurvedicHabit: {
      title: "2 Drops Anu Taila (Nasya) + Sesame Oil Pulling",
      subtitle: "Lipid neuro-protection for the nose & saponification for gums",
      whatHappens:
        "'Nasa Hi Shiraso Dwaram'—the nose is the doorway to the brain. Warm herbal oil coats olfactory & trigeminal nerve endings, calms neck stiffness, and protects beneficial oral microbiota.",
      biomarkerImpact: "Cranial Nerve Shield: 96% • Oral Microbiome: Intact",
      sutra: "नासा हि शिरसो द्वारम् (Ashtanga Hridaya)",
      metrics: { agni: 85, vagal: 92, ojas: 90, microbiome: 98 },
    },
  },
  {
    id: "ocular",
    name: "03. Ocular & Cranial Thermal Hub",
    sanskrit: "Alochaka Pitta (Eyes & Scalp)",
    TimeWindow: "07:30 AM • Shower & Screen Time",
    cx: 132,
    cy: 60,
    modernHabit: {
      title: "Steaming Hot Shower Directly Over the Head",
      subtitle: "Pouring 42°C+ hot water over the scalp and eyes",
      whatHappens:
        "The head and eyes are seats of fiery Alochaka Pitta. Pouring hot water over the cranium triggers microvascular vasodilation, weakens hair follicles, dries out tear films, and fatigues optic nerves.",
      biomarkerImpact: "Ocular Strain: High • Hair Follicle Stress: Elevated",
      metrics: { agni: 60, vagal: 30, ojas: 45, microbiome: 65 },
    },
    ayurvedicHabit: {
      title: "Two-Temperature Bath (Cool Head, Warm Body)",
      subtitle: "Room-temperature water for the cranium; warm water below the neck",
      whatHappens:
        "Keeps cranial nerves and optic pathways cool and sharp while warm water below the neck relaxes skeletal muscles, boosts circulation, and ignites appetite (Deepana).",
      biomarkerImpact: "Visual Contrast & Nerve Tone: +90% • Scalp Barrier: Protected",
      sutra: "उष्णाम्बुना अधःकायस्य परिषेको बलावहः, तेनैव तु उत्तमांगस्य बलहृत् केशचक्षुषाम्",
      metrics: { agni: 90, vagal: 94, ojas: 92, microbiome: 88 },
    },
  },
  {
    id: "agni",
    name: "04. Metabolic Fire Core",
    sanskrit: "Jatharagni & Grahani (Stomach)",
    TimeWindow: "05:00 AM & Meal Times",
    cx: 150,
    cy: 175,
    modernHabit: {
      title: "Iced Water / Cold Brew on an Empty Stomach",
      subtitle: "Shocking the morning gut with 4°C liquid or raw dry capsules",
      whatHappens:
        "Ice-cold liquid constricts gastric mucosal blood vessels and dampens enzymatic Jatharagni, leading to incomplete digestion and sticky metabolic endotoxins (Ama).",
      biomarkerImpact: "Enzymatic Agni: -55% • Bloating / Ama Risk: High",
      metrics: { agni: 22, vagal: 40, ojas: 38, microbiome: 35 },
    },
    ayurvedicHabit: {
      title: "Usha Jalapana (Copper-Rested Water) + Lipid Carriers",
      subtitle: "640 ml room-temperature water at dawn + warm ghee/milk with herbs",
      whatHappens:
        "Gently distends the stomach to trigger the gastro-colic reflex for effortless elimination, primes digestive enzymes, and uses lipid micellization (Anupana) to boost herb absorption.",
      biomarkerImpact: "Metabolic Ignition: 95% • Toxin Clearance: Optimal",
      sutra: "समदोषः समाग्निश्च समधातुमलक्रियः",
      metrics: { agni: 98, vagal: 88, ojas: 94, microbiome: 92 },
    },
  },
  {
    id: "muscle",
    name: "05. Cardiopulmonary & Muscle Reserve",
    sanskrit: "Vyayama & Ardhashakti",
    TimeWindow: "07:00 AM • Physical Training",
    cx: 115,
    cy: 135,
    modernHabit: {
      title: "100% Exhaustion HIIT & Aluminum Antiperspirant",
      subtitle: "Training to total burnout + plugging sweat ducts afterward",
      whatHappens:
        "Pushing past your 50% reserve (Ati-Vyayama) spikes oxidative free radicals and tissue catabolism (Kshaya), while aluminum deodorants physically block sweat channels (Swedavaha Srotas Rodha).",
      biomarkerImpact: "Oxidative Stress: Severe • Adrenal Fatigue: High",
      metrics: { agni: 50, vagal: 20, ojas: 28, microbiome: 50 },
    },
    ayurvedicHabit: {
      title: "The 50% 'Ardhashakti' Rule + Breathable Botanicals",
      subtitle: "Stopping the moment sweat beads form on forehead & breathing deepens",
      whatHappens:
        "Builds sculpted muscle stability (Sthairya) and metabolic fire without depleting cellular immunity (Ojas), followed by upward herbal powder friction (Udvartana) to open pores naturally.",
      biomarkerImpact: "Anabolic Recovery: +94% • Lymphatic Flow: Unblocked",
      sutra: "शरीरचेष्टा या चेष्टा स्थैर्यार्था बलवर्धिनी",
      metrics: { agni: 95, vagal: 90, ojas: 96, microbiome: 88 },
    },
  },
  {
    id: "plantar",
    name: "06. Foot-to-Eye Parasympathetic Axis",
    sanskrit: "Padabhyanga (Plantar Nerves)",
    TimeWindow: "10:00 PM • Pre-Sleep Reset",
    cx: 150,
    cy: 330,
    modernHabit: {
      title: "Late-Night Heavy Dinner + Screen Stimulation",
      subtitle: "Eating curd/heavy food at 10 PM & sleeping with cold, tense feet",
      whatHappens:
        "Late meals divert blood flow to the gut while you try to sleep, clogging micro-channels, while peripheral vasoconstriction in the feet keeps the sympathetic nervous system wired.",
      biomarkerImpact: "Deep REM/Slow-Wave Sleep: -48% • Next-Day Adenosine: High",
      metrics: { agni: 30, vagal: 18, ojas: 35, microbiome: 40 },
    },
    ayurvedicHabit: {
      title: "Warm Sesame Oil Foot Massage (Padabhyanga) + Left-Side Sleep",
      subtitle: "2-minute plantar sole massage + sleeping on the left side (Vama Parshva)",
      whatHappens:
        "Stimulates dense plantar nerve endings connected via classical Nadis to the optic nerve and vagus system, dilating peripheral vessels to drop core body temperature for instant deep sleep.",
      biomarkerImpact: "Parasympathetic Sleep Depth: +96% • Sciatic & Ocular Relief: High",
      sutra: "निद्रायत्तं सुखं दुःखं पुष्टिः कार्श्यं बलाबलम्",
      metrics: { agni: 90, vagal: 98, ojas: 96, microbiome: 90 },
    },
  },
];

export default function BioSimulatorExperimentalPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [mode, setMode] = useState<Mode>("ayurvedic");

  const activeOrgan = BIO_SYSTEMS[selectedIndex];
  const activeData =
    mode === "ayurvedic" ? activeOrgan.ayurvedicHabit : activeOrgan.modernHabit;
  const isAyurvedic = mode === "ayurvedic";

  const handleSelectOrgan = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <main className="min-h-screen bg-[#070d0a] text-[#f4f1ea] selection:bg-[#d4af37] selection:text-black pb-16">
      {/* ========================================================= */}
      {/* TOP BAR: EXPERIMENT 020 NAVIGATION                        */}
      {/* ========================================================= */}
      <header className="border-b border-white/10 bg-[#070d0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/75 hover:text-[#e5c17b] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/experimental"
              className="text-xs sm:text-sm font-semibold text-white/60 hover:text-white transition-colors"
            >
              Experimental Lab
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5c17b]/15 border border-[#e5c17b]/40 text-[#e5c17b] text-[11px] font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Experiment 020 • Interactive Bio-Twin Simulator
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {/* ========================================================= */}
        {/* COMPACT INTRO & ORGAN SELECTOR PILLS                      */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-400 mb-1">
              Zero-Scroll Interactive Laboratory
            </p>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Tap an Organ. Flip the Switch.{" "}
              <span className="text-[#e5c17b]">See What Happens Inside You.</span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-white/65 max-w-md">
            Don&apos;t just read about Ayurveda—test how your body&apos;s nerves, enzymes, and immunity respond to modern habits vs. classical protocols.
          </p>
        </div>

        {/* 6 Clickable Organ Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {BIO_SYSTEMS.map((sys, idx) => {
            const active = idx === selectedIndex;
            return (
              <button
                key={sys.id}
                type="button"
                onClick={() => handleSelectOrgan(idx)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  active
                    ? "bg-[#e5c17b] text-[#0b130e] border-[#e5c17b] shadow-lg scale-[1.02] font-black"
                    : "bg-white/5 text-white/80 border-white/10 hover:border-white/30 hover:bg-white/10 font-bold"
                }`}
              >
                <span
                  className={`block text-[10px] uppercase tracking-wider mb-0.5 ${
                    active ? "text-[#0b130e]/75" : "text-[#e5c17b]"
                  }`}
                >
                  {sys.TimeWindow.split("•")[0]}
                </span>
                <span className="text-xs sm:text-sm leading-tight block">
                  {sys.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MAIN SPLIT-SCREEN SIMULATOR STAGE (FITS ON ONE SCREEN!)   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* -------------------------------------------------------
              LEFT COLUMN (5 COLS): INTERACTIVE SVG ANATOMICAL TWIN
              ------------------------------------------------------- */}
          <div
            className={`lg:col-span-5 rounded-3xl border p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-500 ${
              isAyurvedic
                ? "bg-gradient-to-b from-[#0e2218] to-[#08120d] border-emerald-500/40"
                : "bg-gradient-to-b from-[#281115] to-[#12080a] border-rose-500/40"
            }`}
          >
            {/* Top Status Readout */}
            <div className="flex items-center justify-between z-10">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border ${
                  isAyurvedic
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-ping ${
                    isAyurvedic ? "bg-emerald-400" : "bg-rose-400"
                  }`}
                />
                {isAyurvedic ? "Homeostasis Active (Sama)" : "Pathology Stress (Vikriti)"}
              </span>

              <span className="text-xs font-mono text-white/60">
                NODE #{selectedIndex + 1}/6
              </span>
            </div>

            {/* Interactive SVG Human Silhouette + Nadi Pathways */}
            <div className="relative my-2 flex items-center justify-center">
              <svg
                viewBox="0 0 300 370"
                className="w-full max-w-[270px] h-[310px] sm:h-[340px] select-none"
                role="img"
                aria-label="Interactive Human Bio-Twin Map"
              >
                <defs>
                  <radialGradient id="activeGlow" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      stopColor={isAyurvedic ? "#34d399" : "#f43f5e"}
                      stopOpacity="0.6"
                    />
                    <stop
                      offset="100%"
                      stopColor={isAyurvedic ? "#34d399" : "#f43f5e"}
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>

                {/* Dynamic Aura Behind Selected Organ */}
                <circle
                  cx={activeOrgan.cx}
                  cy={activeOrgan.cy}
                  r="58"
                  fill="url(#activeGlow)"
                  className="transition-all duration-500"
                />

                {/* Stylized Human Body Silhouette */}
                <g
                  fill={isAyurvedic ? "rgba(16, 185, 129, 0.07)" : "rgba(244, 63, 94, 0.07)"}
                  stroke={isAyurvedic ? "#34d399" : "#fb7185"}
                  strokeOpacity="0.45"
                  strokeWidth="2"
                >
                  {/* Head */}
                  <circle cx="150" cy="60" r="28" />
                  {/* Neck */}
                  <rect x="140" y="88" width="20" height="16" rx="4" />
                  {/* Torso & Arms */}
                  <path d="M105 104 C90 104 82 118 82 135 L82 205 C82 212 92 212 95 205 L98 140 L108 140 L112 225 L188 225 L192 140 L202 140 L205 205 C208 212 218 212 218 205 L218 135 C218 118 210 104 195 104 Z" />
                  {/* Legs & Feet */}
                  <path d="M114 225 L120 325 L112 338 L142 338 L144 245 L156 245 L158 338 L188 338 L180 325 L186 225 Z" />
                </g>

                {/* Central Sushumna / Vagal Axis Line */}
                <line
                  x1="150"
                  y1="40"
                  x2="150"
                  y2="335"
                  stroke={isAyurvedic ? "#e5c17b" : "#f43f5e"}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />

                {/* Foot-to-Eye Nadi Connection Curve (Highlights on Ocular or Plantar) */}
                <path
                  d="M150 330 C95 260 95 120 132 60"
                  fill="none"
                  stroke={isAyurvedic ? "#34d399" : "#f43f5e"}
                  strokeWidth={
                    activeOrgan.id === "plantar" || activeOrgan.id === "ocular"
                      ? "2.5"
                      : "1"
                  }
                  opacity={
                    activeOrgan.id === "plantar" || activeOrgan.id === "ocular"
                      ? "0.85"
                      : "0.2"
                  }
                />

                {/* Interactive Organ Nodes */}
                {BIO_SYSTEMS.map((sys, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <g
                      key={sys.id}
                      onClick={() => handleSelectOrgan(idx)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={sys.cx}
                          cy={sys.cy}
                          r="16"
                          fill="none"
                          stroke={isAyurvedic ? "#e5c17b" : "#f43f5e"}
                          strokeWidth="2"
                          opacity="0.8"
                        />
                      )}
                      <circle
                        cx={sys.cx}
                        cy={sys.cy}
                        r={isSelected ? "9" : "6.5"}
                        fill={
                          isSelected
                            ? isAyurvedic
                              ? "#e5c17b"
                              : "#f43f5e"
                            : "#ffffff"
                        }
                        stroke="#070d0a"
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* 4 Live Physiological Telemetry Gauges */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 space-y-2.5 z-10">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1">
                <span>Live Bio-Telemetry Readout</span>
                <span className={isAyurvedic ? "text-emerald-400" : "text-rose-400"}>
                  {isAyurvedic ? "OPTIMAL" : "DEPLETED"}
                </span>
              </div>

              {[
                { label: "Metabolic Fire (Jatharagni)", val: activeData.metrics.agni },
                { label: "Vagal & Nervous Calm (Prana)", val: activeData.metrics.vagal },
                { label: "Cellular Immunity (Ojas)", val: activeData.metrics.ojas },
                { label: "Mucosal & Gut Microbiome", val: activeData.metrics.microbiome },
              ].map((meter) => (
                <div key={meter.label}>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-white/85">{meter.label}</span>
                    <span
                      className={
                        isAyurvedic ? "text-emerald-400" : "text-rose-400"
                      }
                    >
                      {meter.val}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isAyurvedic
                          ? "bg-gradient-to-r from-[#e5c17b] to-emerald-400"
                          : "bg-gradient-to-r from-rose-600 to-orange-500"
                      }`}
                      style={{ width: `${meter.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------
              RIGHT COLUMN (7 COLS): HABIT SWITCHER & CLINICAL IMPACT
              ------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-[#101a14] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Top Organ Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#e5c17b] block">
                    {activeOrgan.TimeWindow} • {activeOrgan.sanskrit}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                    {activeOrgan.name}
                  </h2>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                   Tap Switch Below to Compare
                </span>
              </div>

              {/* BIG TACTILE REALITY SWITCHER (MODERN TRAP VS AYURVEDIC PROTOCOL) */}
              <div className="grid grid-cols-2 gap-3 my-6 p-1.5 rounded-2xl bg-black/50 border border-white/10">
                <button
                  type="button"
                  onClick={() => setMode("modern")}
                  className={`py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    !isAyurvedic
                      ? "bg-rose-600 text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Modern Trap</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode("ayurvedic")}
                  className={`py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isAyurvedic
                      ? "bg-emerald-500 text-slate-950 shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Ayurvedic Protocol</span>
                </button>
              </div>

              {/* ACTIVE SIMULATION OUTPUT CARD */}
              <div
                className={`rounded-2xl p-6 border transition-all duration-300 space-y-4 ${
                  isAyurvedic
                    ? "bg-emerald-950/30 border-emerald-500/40"
                    : "bg-rose-950/30 border-rose-500/40"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-widest block mb-1 ${
                        isAyurvedic ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {isAyurvedic
                        ? "✓ Evidence-Aligned Classical Protocol"
                        : "⚠️ Common Modern Biological Mistake"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                      {activeData.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-white/65 mt-0.5">
                      {activeData.subtitle}
                    </p>
                  </div>
                </div>

                {/* Biological Mechanism Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#e5c17b] block mb-1">
                    What Happens Inside Your Body:
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    {activeData.whatHappens}
                  </p>
                </div>

                {/* Biomarker Readout Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold">
                    <Activity
                      className={`w-4 h-4 ${
                        isAyurvedic ? "text-emerald-400" : "text-rose-400"
                      }`}
                    />
                    <span>{activeData.biomarkerImpact}</span>
                  </div>

                  {isAyurvedic && activeOrgan.ayurvedicHabit.sutra && (
                    <span className="text-xs font-bold text-[#e5c17b] italic">
                      &ldquo;{activeOrgan.ayurvedicHabit.sutra}&rdquo;
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Step Controls (Cycle through all 6 Organ Nodes) */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() =>
                  handleSelectOrgan(
                    selectedIndex === 0
                      ? BIO_SYSTEMS.length - 1
                      : selectedIndex - 1
                  )
                }
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-bold inline-flex items-center gap-2 cursor-pointer transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Organ
              </button>

              <div className="flex items-center gap-3">
                <Link
                  href="/atreya"
                  className="px-4 py-3 rounded-xl border border-[#e5c17b]/40 text-[#e5c17b] hover:bg-[#e5c17b]/10 text-xs sm:text-sm font-bold transition-all"
                >
                  Full Global Hub
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    handleSelectOrgan((selectedIndex + 1) % BIO_SYSTEMS.length)
                  }
                  className="px-6 py-3 rounded-xl bg-[#e5c17b] hover:bg-[#f3d99f] text-[#0c1610] font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>
                    Next Organ ({BIO_SYSTEMS[(selectedIndex + 1) % BIO_SYSTEMS.length].name.split(".")[1]})
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
