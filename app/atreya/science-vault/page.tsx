"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PillarTopNav from "../_components/PillarTopNav";

const XRAY_CARDS = [
  {
    title: "Shirodhara (Rhythmic Cranial Lipid Stream)",
    spaMyth: "Marketed abroad as a soothing forehead oil pour for luxury relaxation.",
    sutra: "Murdhni Tailam • Ashtanga Hridaya Sutrasthana 22/23",
    mechanism:
      "Continuous laminar fluid pressure over the frontal bone and glabella stimulates the ophthalmic branch of the trigeminal nerve (CN V1). This afferent signal projects to the locus coeruleus and hypothalamus, down-regulating sympathetic tone, reducing plasma catecholamines and cortisol, and inducing coherent alpha/theta EEG waveforms in patients with clinical insomnia (Anidra) and generalized anxiety.",
  },
  {
    title: "Abhyanga (Decoction-Medicated Transdermal Oleation)",
    spaMyth: "Marketed abroad as a scented full-body aromatic massage.",
    sutra: "Abhyangam Acharayen Nityam • Ashtanga Hridaya Sutrasthana 2/8",
    mechanism:
      "Lipophilic phytochemicals processed via Sneha Paka penetrate the lipid bilayer of the stratum corneum. Mechanical shear stress activates low-threshold unmyelinated C-tactile afferents, triggering oxytocin release, nitric-oxide-mediated peripheral vasodilation, and accelerated lymphatic clearance of interstitial metabolic waste.",
  },
  {
    title: "Nasya Karma (Trans-Nasal Neuro-Pharmacology)",
    spaMyth: "Rarely taught in spas; misunderstood as simple nasal lubrication.",
    sutra: "Nasa Hi Shiraso Dwaram • Ashtanga Hridaya Sutrasthana 20/1",
    mechanism:
      "Charaka and Vagbhata state 'The nose is the direct pharmacological gateway to the brain.' Lipid-soluble medicated drops (Shadbindu / Anu Taila) administered onto the olfactory epithelium bypass the blood-brain barrier via olfactory and trigeminal perineural pathways, directly modulating neuro-inflammation and cranial nerve pathologies.",
  },
];

export default function PillarOneScienceVaultPage() {
  const [openXray, setOpenXray] = useState<number[]>([0, 1]);

  const toggleXray = (i: number) =>
    setOpenXray((prev) =>
      prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i]
    );

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      <PillarTopNav activeSlug="science-vault" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Header */}
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 shadow-sm">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 mb-4">
            Pillar 01 • Phase 1 Research Monograph
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Beyond the Spa: The Clinical Reality of Ayurvedic Internal Medicine
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base font-medium">
            <strong>Authors:</strong> ATREYA Med Research Division •{" "}
            <strong>Primary Canon:</strong> Charaka Samhita (Sutrasthana &amp; Chikitsasthana) &amp; Ashtanga Hridaya
          </p>
        </div>

        {/* Full Readable Research Article */}
        <article className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-foreground border-b border-surfaceBorder pb-3">
            1. Abstract: How a 5,000-Year-Old Medical System Was Diluted Abroad
          </h2>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            When Ayurveda crossed oceans into Western wellness markets in the late 20th century, it underwent a severe commercial truncation. Because foreign licensing laws restricted clinical diagnosis and pharmacotherapy, international resorts stripped away 90% of classical Ayurvedic medicine—retaining only gentle external oleation (<em>Sneha</em>) and fomentation (<em>Swedana</em>). As a result, millions of global citizens mistakenly equate Ayurveda with a relaxing weekend massage.
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            In reality, inside India&apos;s accredited medical universities, a Bachelor of Ayurvedic Medicine and Surgery (BAMS) requires 5.5 years of intensive clinical training—identical in duration to modern MBBS degrees. External therapies like <em>Abhyanga</em> and <em>Shirodhara</em> are not salon luxuries; they are targeted neuro-vascular and lymphatic interventions belonging to <em>Purvakarma</em> (pre-operative cellular mobilization) and <em>Murdhni Taila</em> (cranial neuro-therapeutics).
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground border-b border-surfaceBorder pb-3 pt-4">
            2. The Clinical Architecture of Kayachikitsa (Internal Medicine)
          </h2>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            Classical internal medicine (<em>Kayachikitsa</em>), codified by Acharya Agnivesha and Charaka, is built on restoring <strong>Agni</strong>—the enzymatic, endocrine, and mitochondrial bio-fire governing cellular metabolism. Disease is not viewed merely as an isolated organ defect, but as a systemic cascade of <em>Dosha</em> vitiation, impaired tissue transformation (<em>Dhatvagni Mandya</em>), and micro-channel obstruction (<em>Srotorodha</em>).
          </p>
        </article>

        {/* Interactive Clinical X-Ray Decoder */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Interactive Mechanism Lab
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Inspect the Biomedical X-Ray Behind Familiar Therapies
            </h2>
          </div>

          {XRAY_CARDS.map((card, i) => {
            const isOpen = openXray.includes(i);
            return (
              <div
                key={i}
                className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => toggleXray(i)}
                    className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-primaryHover transition-colors"
                  >
                    {isOpen ? "Hide Clinical X-Ray" : "Show Clinical X-Ray"}
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-foreground/65 font-medium mb-4">
                  <strong>Common Western Perception:</strong> {card.spaMyth}
                </p>
                {isOpen && (
                  <div className="p-5 rounded-xl bg-background border border-surfaceBorder space-y-2">
                    <p className="text-xs font-bold text-amber-800 dark:text-[#D4AF37]">
                      Classical Reference: {card.sutra}
                    </p>
                    <p className="text-sm text-foreground/85 leading-relaxed">
                      <strong>Neuro-Physiological Mechanism:</strong> {card.mechanism}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Next Pillar Footer CTA */}
        <div className="pt-6 border-t border-surfaceBorder flex justify-end">
          <Link
            href="/atreya/diagnostics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primaryHover transition-all"
          >
            <span>Continue to Pillar 02: Prakriti &amp; Agni Lab</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
