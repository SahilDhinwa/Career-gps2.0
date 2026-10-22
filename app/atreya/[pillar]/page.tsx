"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, ArrowRight, Globe, Microscope, Activity, 
  FlaskConical, GitMerge, Users, Eye, CheckCircle2, 
  BookOpen, Layers, Sparkles, Stethoscope, HeartPulse 
} from "lucide-react";

const PILLAR_NAV = [
  { slug: "science-vault", label: "01. Beyond the Spa" },
  { slug: "diagnostics", label: "02. Prakriti Lab" },
  { slug: "gut-brain-pharmacology", label: "03. Gut-Brain & Herbs" },
  { slug: "gateway-curriculum", label: "04. Gateway Course" },
  { slug: "global-symposium", label: "05. 8 Specialties & Symposium" },
];

export default function AtreyaPillarSubPage() {
  const params = useParams();
  const rawPillar = params?.pillar;
  const pillarSlug = Array.isArray(rawPillar) ? rawPillar[0] : rawPillar || "science-vault";

  // =========================================================================
  // STATE FOR PILLAR 01: INTERACTIVE CLINICAL X-RAY CARDS
  // =========================================================================
  const [openXray, setOpenXray] = useState<number[]>([0, 1]);
  const toggleXray = (i: number) =>
    setOpenXray((prev) => (prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i]));

  // =========================================================================
  // STATE FOR PILLAR 02: 5-PARAMETER PRAKRITI & AGNI DIAGNOSTIC ENGINE
  // =========================================================================
  const [diag, setDiag] = useState<{
    frame: "Vata" | "Pitta" | "Kapha";
    skin: "Vata" | "Pitta" | "Kapha";
    agni: "Vata" | "Pitta" | "Kapha";
    sleep: "Vata" | "Pitta" | "Kapha";
    stress: "Vata" | "Pitta" | "Kapha";
  }>({
    frame: "Pitta",
    skin: "Pitta",
    agni: "Pitta",
    sleep: "Vata",
    stress: "Vata",
  });

  // =========================================================================
  // STATE FOR PILLAR 03: HERB & ANUPANA PHARMACOLOGY MATRIX
  // =========================================================================
  const [selectedHerb, setSelectedHerb] = useState<number>(0);

  // =========================================================================
  // STATE FOR PILLAR 04: GATEWAY COURSE MODULES & SHATKRIYAKALA FLOWCHART
  // =========================================================================
  const [activeCourseModule, setActiveCourseModule] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([
    "M1-L1: Panchamahabhuta & Tridosha Biophysics",
  ]);

  // =========================================================================
  // STATE FOR PILLAR 05: 8 ASHTANGA SPECIALTIES EXPLORER
  // =========================================================================
  const [selectedBranch, setSelectedBranch] = useState<number>(0);

  const toggleLesson = (id: string) => {
    setCompletedLessons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Compute Dominant Dosha for Pillar 02
  const computePrakriti = () => {
    const tally = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(diag).forEach((v) => tally[v]++);
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    return {
      primary: sorted[0][0] as "Vata" | "Pitta" | "Kapha",
      secondary: sorted[1][0] as "Vata" | "Pitta" | "Kapha",
      tally,
    };
  };

  const prakritiResult = computePrakriti();

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      
      {/* Top Sub-Navigation Bar */}
      <div className="bg-surface border-b border-surfaceBorder sticky top-14 z-30 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/atreya"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ayurveda Global Command Center
          </Link>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-hide">
            {PILLAR_NAV.map((item) => {
              const active = pillarSlug === item.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/atreya/${item.slug}`}
                  className={`px-3 py-1.5 rounded-sm text-xs font-bold whitespace-nowrap border transition-all ${
                    active
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-foreground/70 border-surfaceBorder hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* ===================================================================
            PILLAR 01: BEYOND THE SPA — CLINICAL SCIENCE VAULT
            =================================================================== */}
        {pillarSlug === "science-vault" && (
          <div className="space-y-12">
            {/* Header */}
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm bg-primary/15 text-primary border border-primary/30 mb-4">
                Pillar 01 • Phase 1 Research Monograph
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
                Beyond the Spa: The Clinical Reality of Ayurvedic Internal Medicine
              </h1>
              <p className="text-foreground/70 text-sm sm:text-base font-medium">
                <strong>Authors:</strong> ATREYA Med Research Division • <strong>Primary Canon:</strong> Charaka Samhita (Sutrasthana &amp; Chikitsasthana) &amp; Ashtanga Hridaya
              </p>
            </div>

            {/* Full Readable Research Article */}
            <article className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 space-y-6 shadow-sm">
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

              {[
                {
                  title: "Shirodhara (Rhythmic Cranial Lipid Stream)",
                  spaMyth: "Marketed abroad as a soothing forehead oil pour for luxury relaxation.",
                  sutra: "Murdhni Tailam • Ashtanga Hridaya Sutrasthana 22/23",
                  mechanism: "Continuous laminar fluid pressure over the frontal bone and glabella stimulates the ophthalmic branch of the trigeminal nerve (CN V1). This afferent signal projects to the locus coeruleus and hypothalamus, down-regulating sympathetic tone, reducing plasma catecholamines and cortisol, and inducing coherent alpha/theta EEG waveforms in patients with clinical insomnia (Anidra) and generalized anxiety.",
                },
                {
                  title: "Abhyanga (Decoction-Medicated Transdermal Oleation)",
                  spaMyth: "Marketed abroad as a scented full-body aromatic massage.",
                  sutra: "Abhyangam Acharayen Nityam • Ashtanga Hridaya Sutrasthana 2/8",
                  mechanism: "Lipophilic phytochemicals processed via Sneha Paka penetrate the lipid bilayer of the stratum corneum. Mechanical shear stress activates low-threshold unmyelinated C-tactile afferents, triggering oxytocin release, nitric-oxide-mediated peripheral vasodilation, and accelerated lymphatic clearance of interstitial metabolic waste.",
                },
                {
                  title: "Nasya Karma (Trans-Nasal Neuro-Pharmacology)",
                  spaMyth: "Rarely taught in spas; misunderstood as simple nasal lubrication.",
                  sutra: "Nasa Hi Shiraso Dwaram • Ashtanga Hridaya Sutrasthana 20/1",
                  mechanism: "Charaka and Vagbhata state 'The nose is the direct pharmacological gateway to the brain.' Lipid-soluble medicated drops (Shadbindu / Anu Taila) administered onto the olfactory epithelium bypass the blood-brain barrier via olfactory and trigeminal perineural pathways, directly modulating neuro-inflammation and cranial nerve pathologies.",
                },
              ].map((card, i) => {
                const isOpen = openXray.includes(i);
                return (
                  <div key={i} className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-8 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                        {card.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => toggleXray(i)}
                        className="px-4 py-2 rounded-sm bg-primary text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        {isOpen ? "Hide Clinical X-Ray" : "Show Clinical X-Ray"}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/65 font-medium mb-4">
                      <strong>Common Western Perception:</strong> {card.spaMyth}
                    </p>
                    {isOpen && (
                      <div className="p-5 rounded-sm bg-background border border-surfaceBorder space-y-2">
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
          </div>
        )}

        {/* ===================================================================
            PILLAR 02: DECODING PRAKRITI — PERSONALIZED MEDICINE & AGNI LAB
            =================================================================== */}
        {pillarSlug === "diagnostics" && (
          <div className="space-y-12">
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm bg-primary/15 text-primary border border-primary/30 mb-4">
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
            <article className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 space-y-5 shadow-sm">
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
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                5-Parameter Clinical Prakriti &amp; Agni Assessment
              </h2>
              <p className="text-sm text-foreground/70 mb-8">
                Select your lifelong baseline traits across the 5 classical clinical domains below to generate your constitutional synthesis:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
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
                ].map((group) => (
                  <div key={group.key} className="bg-background border border-surfaceBorder rounded-sm p-5">
                    <p className="font-heading text-sm font-bold text-foreground mb-3">
                      {group.title}
                    </p>
                    <div className="space-y-2">
                      {group.options.map((opt) => (
                        <button
                          key={opt.d}
                          type="button"
                          onClick={() => setDiag((prev) => ({ ...prev, [group.key]: opt.d }))}
                          className={`w-full text-left p-3 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
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
              <div className="p-6 sm:p-8 rounded-sm bg-background border-2 border-primary/50">
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
          </div>
        )}

        {/* ===================================================================
            PILLAR 03: THE GUT-BRAIN AXIS & DRAVYAGUNA PHARMACOLOGY
            =================================================================== */}
        {pillarSlug === "gut-brain-pharmacology" && (
          <div className="space-y-12">
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm bg-primary/15 text-primary border border-primary/30 mb-4">
                Pillar 03 • Phase 1 Enteric &amp; Herbal Pharmacology
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
                The Gut-Brain Axis: What Ayurveda Knew 3,000 Years Ago
              </h1>
              <p className="text-foreground/70 text-sm sm:text-base font-medium">
                Connecting Classical Grahani, Jatharagni &amp; Ama Pathogenesis to the Enteric Nervous System and Phytochemical Kinetics
              </p>
            </div>

            <article className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 space-y-5 shadow-sm">
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
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Dravyaguna &amp; Anupana (Bio-Carrier) Pharmacology Matrix
              </h2>
              <p className="text-sm text-foreground/70 mb-6">
                Western supplement brands sell isolated herbal extracts in dry capsules. Classical Ayurveda never prescribes an herb without evaluating its <strong>Rasa Panchaka</strong> and pairing it with a targeted <strong>Anupana</strong> (lipid/aqueous vehicle) to cross biological membranes:
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Ashwagandha (Withania somnifera)",
                  "Brahmi (Bacopa monnieri)",
                  "Haridra / Turmeric (Curcuma longa)",
                  "Triphala Rasayana (3-Myrobalan Synergy)",
                ].map((name, i) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedHerb(i)}
                    className={`px-4 py-2.5 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
                      selectedHerb === i
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-foreground/75 border-surfaceBorder hover:border-primary/40"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {(() => {
                const herbs = [
                  {
                    name: "Ashwagandha (Withania somnifera)",
                    rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
                    virya: "Ushna Virya (Thermogenic / Warming) • Madhura Vipaka",
                    anupana: "Warm Milk or Ashwagandha Ghrita (Lipid Vehicle)",
                    kinetics: "Lipophilic withanolides require dietary lipids or milk-fat micellization to maximize lymphatic absorption and cross into neuromuscular and reproductive tissues (Mamsa & Shukra Dhatu). Caution: Contraindicated in acute Pitta hyperacidity or high Ama states without prior Deepana-Pachana.",
                  },
                  {
                    name: "Brahmi (Bacopa monnieri) — Medhya Rasayana",
                    rasa: "Tikta (Bitter), Kashaya (Astringent)",
                    virya: "Sheeta Virya (Cooling) • Madhura Vipaka",
                    anupana: "Cow's Ghee (Purana Ghrita) — Crosses Blood-Brain Barrier",
                    kinetics: "Bacosides A and B upregulate synaptic plasticity, hippocampal BDNF, and acetylcholine synthesis. Processing Brahmi into medicated Ghee (Brahmi Ghrita) enables liposomal transport across the blood-brain barrier to pacify Sadhaka Pitta and Prana Vata.",
                  },
                  {
                    name: "Haridra (Curcuma longa) — Systemic Immunomodulator",
                    rasa: "Tikta (Bitter), Katu (Pungent)",
                    virya: "Ushna Virya (Warming) • Katu Vipaka",
                    anupana: "Trikatu (Piperine from Pippali/Maricha) + Warm Ghee",
                    kinetics: "Raw curcumin has <2% oral bioavailability due to rapid hepatic glucuronidation. Classical Bhaishajya Kalpana pairs Haridra with Pippali (Piper longum), whose piperine inhibits hepatic CYP3A4 and glucuronidation, increasing bioavailability by up to 2,000%.",
                  },
                  {
                    name: "Triphala (Amalaki, Bibhitaki, Haritaki)",
                    rasa: "Pancharasa (All 5 tastes except Lavana/Salty)",
                    virya: "Anushna-Sheeta (Balanced) • Madhura Vipaka",
                    anupana: "Warm Water at Bedtime (Anulomana) or Honey & Ghee (Chakshushya)",
                    kinetics: "Polyphenols (chebulinic acid, gallic acid, ellagic acid) get biotransformed by colonic microbiota into urolithins, repairing tight-junction intestinal barrier integrity and modulating the gut-brain-ocular axis.",
                  },
                ][selectedHerb];

                return (
                  <div className="p-6 rounded-sm bg-background border border-surfaceBorder space-y-3">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      {herbs.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-sm bg-surface border border-surfaceBorder text-xs">
                        <strong className="block text-primary uppercase mb-1">Rasa (Taste Profile)</strong>
                        {herbs.rasa}
                      </div>
                      <div className="p-3 rounded-sm bg-surface border border-surfaceBorder text-xs">
                        <strong className="block text-amber-800 dark:text-[#D4AF37] uppercase mb-1">Virya &amp; Vipaka</strong>
                        {herbs.virya}
                      </div>
                      <div className="p-3 rounded-sm bg-surface border border-surfaceBorder text-xs">
                        <strong className="block text-success uppercase mb-1">Classical Anupana Carrier</strong>
                        {herbs.anupana}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/85 leading-relaxed pt-3">
                      <strong>Clinical Pharmacokinetics:</strong> {herbs.kinetics}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ===================================================================
            PILLAR 04: PHASE 2 GATEWAY COURSE & VISUAL SAMPRAPTI FLOWCHARTS
            =================================================================== */}
        {pillarSlug === "gateway-curriculum" && (
          <div className="space-y-12">
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 mb-4">
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
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-sm">
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
                {[
                  { stage: "STAGE 01 • SANCHAYA", name: "Dosha Accumulation", desc: "Doshas accumulate in their home GI sites (Amashaya/Pakvashaya). Early signs: mild fullness, temperature preference shifts." },
                  { stage: "STAGE 02 • PRAKOPA", name: "Aggravation / Excitation", desc: "Doshas liquefy and intensify within their primary seats. Early signs: hyperacidity, borborygmi, mild nausea." },
                  { stage: "STAGE 03 • PRASARA", name: "Systemic Overflow", desc: "Vitiated Doshas breach GI boundaries and circulate viaRasa-Rakta across the body." },
                  { stage: "STAGE 04 • STHANA SAMSHRAYA", name: "Prodromal Localization", desc: "Doshas lodge in a weak tissue/channel (Khavaigunya). Prodromal symptoms (Purvarupa) appear." },
                  { stage: "STAGE 05 • VYAKTI", name: "Clinical Manifestation", desc: "Full cardinal symptoms (Rupa) appear. This is where modern clinical lab diagnostics typically begin." },
                  { stage: "STAGE 06 • BHEDA", name: "Chronicity & Complications", desc: "Structural tissue breakdown, ulceration, or chronic genetic/autoimmune progression." },
                ].map((st, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-background border border-surfaceBorder">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                      {st.stage}
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground mb-1">
                      {st.name}
                    </h3>
                    <p className="text-xs text-foreground/75 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Module Interactive Gateway Syllabus Tracker */}
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  Gateway Course Syllabus &amp; Lesson Tracker ({completedLessons.length} Completed)
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Module 01: Tridosha Biophysics",
                  "Module 02: Sapta Dhatu (7 Tissues)",
                  "Module 03: Srotas (Micro-Channels)",
                  "Module 04: Clinical Diagnostics",
                ].map((m, idx) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setActiveCourseModule(idx)}
                    className={`px-4 py-2.5 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
                      activeCourseModule === idx
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-foreground/75 border-surfaceBorder"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  [
                    "M1-L1: Panchamahabhuta & Tridosha Biophysics",
                    "M1-L2: The 15 Subtypes of Vata, Pitta & Kapha in Organ Physiology",
                    "M1-L3: Circadian & Seasonal Chronobiology (Dinacharya & Ritucharya)",
                  ],
                  [
                    "M2-L1: Sapta Dhatu Cascade: Rasa, Rakta, Mamsa, Meda, Asthi, Majja, Shukra",
                    "M2-L2: Dhatvagni (Tissue-Specific Metabolic Enzymes) & Upadhatus",
                    "M2-L3: Ojas: The Ultimate Essence of Cellular Immunity",
                  ],
                  [
                    "M3-L1: Srotovijnana: The 13 Intrinsic Macro & Micro-Channel Systems",
                    "M3-L2: Srotodushti Prakara: Atipravritti, Sanga, Siragranthi & Vimargagamana",
                    "M3-L3: Clearing Micro-Channel Obstruction (Srotoshodhana)",
                  ],
                  [
                    "M4-L1: Nidana Panchaka: The 5-Fold Root-Cause Diagnostic Framework",
                    "M4-L2: Ashtavidha & Dashavidha Pariksha (8-Fold & 10-Fold Examination)",
                    "M4-L3: Designing an Evidence-Based Pathya & Shamana Protocol",
                  ],
                ][activeCourseModule].map((lesson) => {
                  const done = completedLessons.includes(lesson);
                  return (
                    <div
                      key={lesson}
                      onClick={() => toggleLesson(lesson)}
                      className={`p-4 rounded-sm border flex items-center justify-between cursor-pointer transition-all ${
                        done
                          ? "bg-primary/10 border-primary/40 text-foreground font-bold"
                          : "bg-background border-surfaceBorder text-foreground/80"
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
          </div>
        )}

        {/* ===================================================================
            PILLAR 05: THE 8 MEDICAL SPECIALTIES & INDO-GLOBAL SYMPOSIUMS
            =================================================================== */}
        {pillarSlug === "global-symposium" && (
          <div className="space-y-12">
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm bg-primary/15 text-primary border border-primary/30 mb-4">
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
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-sm">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                The 8 Classical Clinical Faculties (Ashtanga Ayurveda)
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { code: "01", s: "Kayachikitsa", m: "Internal Medicine", desc: "Systemic pathology, metabolic restoration (Agni), and management of Jwara, Prameha, Amavata, and Grahani.", ref: "Charaka Samhita" },
                  { code: "02", s: "Shalya Tantra", m: "General & Plastic Surgery", desc: "Pioneered by Acharya Sushruta: 101 blunt instruments, 20 surgical blades, forehead-flap rhinoplasty, fracture management, and Kshara Sutra.", ref: "Sushruta Samhita" },
                  { code: "03", s: "Shalakya Tantra", m: "Ophthalmology & ENT", desc: "Micro-surgical and medical management of 76 ocular diseases, ear, nose, throat, and cranial disorders.", ref: "Uttara Tantra" },
                  { code: "04", s: "Kaumarbhritya", m: "Pediatrics & OB-GYN", desc: "Embryology (Garbha Vijnana), maternal care, neonatal resuscitation, and pediatric nutrition.", ref: "Kashyapa Samhita" },
                  { code: "05", s: "Agada Tantra", m: "Clinical Toxicology", desc: "Differential diagnosis and 24 antidote protocols for botanical, ophidian, and cumulative environmental toxins (Dushi Visha).", ref: "Agada Tantra Canon" },
                  { code: "06", s: "Bhuta Vidya", m: "Psychiatry & Neuro-Care", desc: "Management of neuro-psychiatric disorders (Unmada, Apasmara, Vishada) via Satvavajaya cognitive therapy and Medhya botanicals.", ref: "Charaka Chikitsa 9–10" },
                  { code: "07", s: "Rasayana Tantra", m: "Longevity & Immunology", desc: "Cellular regeneration, telomeric and neuro-cognitive preservation, and Ojas immune optimization.", ref: "Charaka Chikitsa Ch. 1" },
                  { code: "08", s: "Vajikarana", m: "Reproductive Genetics", desc: "Reproductive endocrinology, gamete purification (Shukra-Artava Shuddhi), and pre-conception health.", ref: "Charaka Chikitsa Ch. 2" },
                ].map((b, idx, arr) => (
                  <button
                    key={b.code}
                    type="button"
                    onClick={() => setSelectedBranch(idx)}
                    className={`p-4 rounded-sm text-left border transition-all cursor-pointer ${
                      selectedBranch === idx
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-foreground border-surfaceBorder"
                    }`}
                  >
                    <span className={`text-[10px] font-bold block mb-1 ${selectedBranch === idx ? "text-white/80" : "text-primary"}`}>
                      BRANCH #{b.code}
                    </span>
                    <p className="font-heading font-bold text-sm sm:text-base">{b.s}</p>
                    <p className={`text-xs mt-0.5 ${selectedBranch === idx ? "text-white/85" : "text-foreground/60"}`}>
                      {b.m}
                    </p>
                  </button>
                ))}
              </div>

              {(() => {
                const branches = [
                  { code: "01", s: "Kayachikitsa", m: "Internal Medicine", desc: "Systemic pathology, metabolic restoration (Agni), and management of Jwara, Prameha, Amavata, and Grahani.", ref: "Charaka Samhita" },
                  { code: "02", s: "Shalya Tantra", m: "General & Plastic Surgery", desc: "Pioneered by Acharya Sushruta: 101 blunt instruments, 20 surgical blades, forehead-flap rhinoplasty, fracture management, and Kshara Sutra.", ref: "Sushruta Samhita" },
                  { code: "03", s: "Shalakya Tantra", m: "Ophthalmology & ENT", desc: "Micro-surgical and medical management of 76 ocular diseases, ear, nose, throat, and cranial disorders.", ref: "Uttara Tantra" },
                  { code: "04", s: "Kaumarbhritya", m: "Pediatrics & OB-GYN", desc: "Embryology (Garbha Vijnana), maternal care, neonatal resuscitation, and pediatric nutrition.", ref: "Kashyapa Samhita" },
                  { code: "05", s: "Agada Tantra", m: "Clinical Toxicology", desc: "Differential diagnosis and 24 antidote protocols for botanical, ophidian, and cumulative environmental toxins (Dushi Visha).", ref: "Agada Tantra Canon" },
                  { code: "06", s: "Bhuta Vidya", m: "Psychiatry & Neuro-Care", desc: "Management of neuro-psychiatric disorders (Unmada, Apasmara, Vishada) via Satvavajaya cognitive therapy and Medhya botanicals.", ref: "Charaka Chikitsa 9–10" },
                  { code: "07", s: "Rasayana Tantra", m: "Longevity & Immunology", desc: "Cellular regeneration, telomeric and neuro-cognitive preservation, and Ojas immune optimization.", ref: "Charaka Chikitsa Ch. 1" },
                  { code: "08", s: "Vajikarana", m: "Reproductive Genetics", desc: "Reproductive endocrinology, gamete purification (Shukra-Artava Shuddhi), and pre-conception health.", ref: "Charaka Chikitsa Ch. 2" },
                ];
                const curr = branches[selectedBranch];
                return (
                  <div className="p-6 rounded-sm bg-background border border-surfaceBorder">
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
                );
              })()}
            </div>

            {/* Phase 3 Indo-Global Symposium Tracks */}
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Phase 3: Indo-Global Vaidya &amp; Scholar Symposiums
              </h2>
              <p className="text-sm text-foreground/75 mb-6">
                Connecting our BAMS medical student community in India with international researchers for evidence-based clinical dialogues:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-background border border-surfaceBorder">
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
                <div className="p-5 rounded-sm bg-background border border-surfaceBorder">
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
          </div>
        )}

      </div>
    </div>
  );
}
