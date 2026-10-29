"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PillarTopNav from "../_components/PillarTopNav";

const HERBS_DATA = [
  {
    name: "Ashwagandha (Withania somnifera)",
    rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
    virya: "Ushna Virya (Thermogenic / Warming) • Madhura Vipaka",
    anupana: "Warm Milk or Ashwagandha Ghrita (Lipid Vehicle)",
    kinetics:
      "Lipophilic withanolides require dietary lipids or milk-fat micellization to maximize lymphatic absorption and cross into neuromuscular and reproductive tissues (Mamsa & Shukra Dhatu). Caution: Contraindicated in acute Pitta hyperacidity or high Ama states without prior Deepana-Pachana.",
  },
  {
    name: "Brahmi (Bacopa monnieri) — Medhya Rasayana",
    rasa: "Tikta (Bitter), Kashaya (Astringent)",
    virya: "Sheeta Virya (Cooling) • Madhura Vipaka",
    anupana: "Cow's Ghee (Purana Ghrita) — Crosses Blood-Brain Barrier",
    kinetics:
      "Bacosides A and B upregulate synaptic plasticity, hippocampal BDNF, and acetylcholine synthesis. Processing Brahmi into medicated Ghee (Brahmi Ghrita) enables liposomal transport across the blood-brain barrier to pacify Sadhaka Pitta and Prana Vata.",
  },
  {
    name: "Haridra (Curcuma longa) — Systemic Immunomodulator",
    rasa: "Tikta (Bitter), Katu (Pungent)",
    virya: "Ushna Virya (Warming) • Katu Vipaka",
    anupana: "Trikatu (Piperine from Pippali/Maricha) + Warm Ghee",
    kinetics:
      "Raw curcumin has <2% oral bioavailability due to rapid hepatic glucuronidation. Classical Bhaishajya Kalpana pairs Haridra with Pippali (Piper longum), whose piperine inhibits hepatic CYP3A4 and glucuronidation, increasing bioavailability by up to 2,000%.",
  },
  {
    name: "Triphala (Amalaki, Bibhitaki, Haritaki)",
    rasa: "Pancharasa (All 5 tastes except Lavana/Salty)",
    virya: "Anushna-Sheeta (Balanced) • Madhura Vipaka",
    anupana: "Warm Water at Bedtime (Anulomana) or Honey & Ghee (Chakshushya)",
    kinetics:
      "Polyphenols (chebulinic acid, gallic acid, ellagic acid) get biotransformed by colonic microbiota into urolithins, repairing tight-junction intestinal barrier integrity and modulating the gut-brain-ocular axis.",
  },
];

export default function PillarThreeGutBrainPage() {
  const [selectedHerb, setSelectedHerb] = useState<number>(0);
  const currentHerb = HERBS_DATA[selectedHerb];

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      <PillarTopNav activeSlug="gut-brain-pharmacology" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 mb-4">
            Pillar 03 • Phase 1 Enteric &amp; Herbal Pharmacology
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
            The Gut-Brain Axis: What Ayurveda Knew 3,000 Years Ago
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base font-medium">
            Connecting Classical Grahani, Jatharagni &amp; Ama Pathogenesis to the Enteric Nervous System and Phytochemical Kinetics
          </p>
        </div>

        <article className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 space-y-5 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-foreground border-b border-surfaceBorder pb-3">
            1. Why Every Systemic &amp; Neurological Disorder Begins in the Gut (Koshtha)
          </h2>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            Modern neurogastroenterology now recognizes the enteric nervous system as the &ldquo;second brain,&rdquo; producing over 90% of the body&apos;s serotonin and communicating bidirectionally with the cerebral cortex via the vagus nerve. In the <em>Charaka Samhita (Chikitsasthana Ch. 15)</em>, the anatomical seat of <strong>Grahani</strong> (duodenum/small intestine) is described as the primary regulator of <em>Agni</em>.
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            When <em>Jatharagni</em> is impaired (<em>Agnimandya</em>), incomplete enzymatic breakdown generates <strong>Ama</strong>—pro-inflammatory, antigenic metabolic endotoxins that cross the compromised mucosal barrier, circulate through the <em>Srotas</em>, and trigger systemic autoimmune (<em>Amavata</em>) and neuro-cognitive (<em>Unmada / Vishada</em>) disorders.
          </p>
        </article>

        {/* Interactive Dravyaguna & Anupana Lab */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Dravyaguna &amp; Anupana (Bio-Carrier) Pharmacology Matrix
          </h2>
          <p className="text-sm text-foreground/70 mb-6">
            Western supplement brands sell isolated herbal extracts in dry capsules. Classical Ayurveda never prescribes an herb without evaluating its <strong>Rasa Panchaka</strong> and pairing it with a targeted <strong>Anupana</strong> (lipid/aqueous vehicle) to cross biological membranes:
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {HERBS_DATA.map((herb, i) => (
              <button
                key={herb.name}
                type="button"
                onClick={() => setSelectedHerb(i)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  selectedHerb === i
                    ? "bg-primary text-white border-primary"
                    : "bg-background text-foreground/75 border-surfaceBorder hover:border-primary/40"
                }`}
              >
                {herb.name}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-background border border-surfaceBorder space-y-3">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              {currentHerb.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-surface border border-surfaceBorder text-xs">
                <strong className="block text-primary uppercase mb-1">
                  Rasa (Taste Profile)
                </strong>
                {currentHerb.rasa}
              </div>
              <div className="p-3 rounded-lg bg-surface border border-surfaceBorder text-xs">
                <strong className="block text-amber-800 dark:text-[#D4AF37] uppercase mb-1">
                  Virya &amp; Vipaka
                </strong>
                {currentHerb.virya}
              </div>
              <div className="p-3 rounded-lg bg-surface border border-surfaceBorder text-xs">
                <strong className="block text-emerald-500 uppercase mb-1">
                  Classical Anupana Carrier
                </strong>
                {currentHerb.anupana}
              </div>
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed pt-3">
              <strong>Clinical Pharmacokinetics:</strong> {currentHerb.kinetics}
            </p>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-surfaceBorder flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/atreya/diagnostics"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-surfaceBorder text-xs sm:text-sm font-bold hover:border-primary/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Pillar 02: Prakriti Lab
          </Link>
          <Link
            href="/atreya/gateway-curriculum"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primaryHover transition-all"
          >
            <span>Pillar 04: Gateway Course</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
