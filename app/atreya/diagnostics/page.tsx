"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PillarTopNav from "../_components/PillarTopNav";

type Dosha = "Vata" | "Pitta" | "Kapha";

export default function PillarTwoDiagnosticsPage() {
  const [diag, setDiag] = useState<{
    frame: Dosha;
    skin: Dosha;
    agni: Dosha;
    sleep: Dosha;
    stress: Dosha;
  }>({
    frame: "Pitta",
    skin: "Pitta",
    agni: "Pitta",
    sleep: "Vata",
    stress: "Vata",
  });

  const computePrakriti = () => {
    const tally = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(diag).forEach((v) => tally[v]++);
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    return {
      primary: sorted[0][0] as Dosha,
      secondary: sorted[1][0] as Dosha,
      tally,
    };
  };

  const prakritiResult = computePrakriti();

  const DIAGNOSTIC_GROUPS = [
    {
      key: "frame" as const,
      title: "1. Skeletal & Anatomical Frame (Akriti)",
      options: [
        { d: "Vata" as const, text: "Slender/tall or petite frame, prominent joints, low adipose storage" },
        { d: "Pitta" as const, text: "Medium, proportionate build, defined musculature, stable weight" },
        { d: "Kapha" as const, text: "Broad shoulders/chest, dense bone mass, gains weight easily" },
      ],
    },
    {
      key: "skin" as const,
      title: "2. Cutaneous & Thermal Profile (Twak & Sparsha)",
      options: [
        { d: "Vata" as const, text: "Dry, cool extremities, rough texture in winter, dislikes cold wind" },
        { d: "Pitta" as const, text: "Warm to touch, sensitive/flushed skin, abundant moles, dislikes heat" },
        { d: "Kapha" as const, text: "Smooth, unctuous/oily, cool and thick skin, dislikes damp cold" },
      ],
    },
    {
      key: "agni" as const,
      title: "3. Metabolic & Digestive Fire (Jatharagni)",
      options: [
        { d: "Vata" as const, text: "Vishama Agni: Irregular hunger, variable digestion, prone to gas" },
        { d: "Pitta" as const, text: "Teekshna Agni: Sharp intense hunger, irritable if meals are delayed" },
        { d: "Kapha" as const, text: "Manda Agni: Slow steady digestion, can skip a meal comfortably" },
      ],
    },
    {
      key: "sleep" as const,
      title: "4. Sleep Architecture (Nidra)",
      options: [
        { d: "Vata" as const, text: "Light, interrupted sleep (5–6 hrs), active vivid dreams" },
        { d: "Pitta" as const, text: "Moderate, sound sleep (6–7 hrs), wakes up alert and focused" },
        { d: "Kapha" as const, text: "Deep, heavy, prolonged sleep (8+ hrs), enjoys morning rest" },
      ],
    },
    {
      key: "stress" as const,
      title: "5. Autonomic Stress Response (Manasika Bhava)",
      options: [
        { d: "Vata" as const, text: "Responds to stress with anxiety, overthinking, or restlessness" },
        { d: "Pitta" as const, text: "Responds to stress with sharp frustration, impatience, or intensity" },
        { d: "Kapha" as const, text: "Remains calm under pressure, slow to anger, may withdraw" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      <PillarTopNav activeSlug="diagnostics" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 mb-4">
            Pillar 02 • Phase 1 Research &amp; Diagnostic Lab
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Decoding Prakriti: The Original Personalized Medicine
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base font-medium">
            How Ayurvedic Phenotyping (Charaka Vimanasthana Ch. 8) Anticipated Modern Ayurgenomics and Pharmacogenetics by Three Millennia
          </p>
        </div>

        {/* Full Research Article */}
        <article className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 space-y-5 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-foreground border-b border-surfaceBorder pb-3">
            1. Why &ldquo;One-Size-Fits-All&rdquo; Nutrition and Medicine Fail
          </h2>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            Modern precision medicine has recently discovered that two patients with the same diagnosis often respond oppositely to the exact same drug or diet due to genetic polymorphisms. Yet over 3,000 years ago, Acharya Charaka codified <strong>Prakriti</strong>—an individual&apos;s immutable psychosomatic baseline determined at the moment of fertilization (<em>Shukra-Shonita Samyoga</em>).
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            Landmark peer-reviewed studies in <strong>Ayurgenomics</strong> have demonstrated significant differences in genome-wide expression, <em>CYP2C19</em> drug-metabolizing enzymes, and <em>EGLN1</em> hypoxia-response genes across <em>Vata</em>, <em>Pitta</em>, and <em>Kapha</em> constitutions.
          </p>
        </article>

        {/* 5-Parameter Interactive Prakriti & Agni Diagnostic Lab */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
            5-Parameter Clinical Prakriti &amp; Agni Assessment
          </h2>
          <p className="text-sm text-foreground/70 mb-8">
            Select your lifelong baseline traits across all 5 classical clinical domains below to generate your constitutional synthesis:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {DIAGNOSTIC_GROUPS.map((group) => (
              <div
                key={group.key}
                className="bg-background border border-surfaceBorder rounded-xl p-5"
              >
                <p className="font-heading text-sm font-bold text-foreground mb-3">
                  {group.title}
                </p>
                <div className="space-y-2">
                  {group.options.map((opt) => (
                    <button
                      key={opt.d}
                      type="button"
                      onClick={() =>
                        setDiag((prev) => ({ ...prev, [group.key]: opt.d }))
                      }
                      className={`w-full text-left p-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        diag[group.key] === opt.d
                          ? "bg-primary text-white border-primary"
                          : "bg-surface text-foreground/75 border-surfaceBorder hover:border-primary/40"
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostic Result Output */}
          <div className="p-6 sm:p-8 rounded-xl bg-background border-2 border-primary/50">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-surfaceBorder">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Clinical Prakriti Readout
              </span>
              <span className="text-xs font-bold text-foreground/70">
                Score: Vata ({prakritiResult.tally.Vata}) • Pitta ({prakritiResult.tally.Pitta}) • Kapha ({prakritiResult.tally.Kapha})
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Dominant Constitution: {prakritiResult.primary}–{prakritiResult.secondary} Prakriti
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              In clinical Ayurveda, knowing your dominant <strong>{prakritiResult.primary}</strong> baseline allows a Vaidya to distinguish your natural traits from acquired pathology (<em>Vikriti</em>) and prescribe personalized dietetics (<em>Ahara</em>), circadian routines (<em>Dinacharya</em>), and herbal carriers.
            </p>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-surfaceBorder flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/atreya/science-vault"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-surfaceBorder text-xs sm:text-sm font-bold hover:border-primary/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Pillar 01: Science Vault
          </Link>
          <Link
            href="/atreya/gut-brain-pharmacology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primaryHover transition-all"
          >
            <span>Pillar 03: Gut-Brain &amp; Herbs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
