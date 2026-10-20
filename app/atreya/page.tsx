"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Leaf, Sparkles, Microscope, ShieldCheck, 
  Globe, BookOpen, Activity, ArrowUpRight, Eye, Layers, 
  Compass, CheckCircle2, Flame, HeartPulse 
} from "lucide-react";

export default function ProjectAtreyaPage() {
  // Tracks which cards in Stage 2 have their "Clinical X-Ray" toggled open
  const [xrayCards, setXrayCards] = useState<number[]>([0]);
  // Tracks the selected branch in Stage 3 (Ashtanga Ayurveda)
  const [selectedBranch, setSelectedBranch] = useState<number>(0);

  const toggleXray = (index: number) => {
    setXrayCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // STAGE 2: Familiar Hook -> Clinical X-Ray Data
  const bridgeCards = [
    {
      familiarTag: "What the World Sees: Relaxing Forehead Oil Pour",
      familiarTitle: "Shirodhara Therapy",
      familiarDesc: "Often marketed in Western spas as a soothing warm-oil head treatment for weekend relaxation and stress relief.",
      herbColor: "from-amber-500/20 via-amber-900/10 to-transparent border-amber-500/30",
      accentText: "text-amber-300",
      clinicalTitle: "Neuro-Endocrine & Vagus Nerve Modulation",
      sutra: "Murdhni Tailam (Ashtanga Hridaya Sutrasthana 22/23)",
      doshaAction: "Pacifies Prana Vata & Tarpaka Kapha in the Shira (Cranial Marma).",
      modernScience: "Continuous rhythmic fluid pressure on the forehead stimulates the trigeminal nerve and down-regulates the hypothalamic-pituitary-adrenal (HPA) axis, measurably lowering plasma cortisol and inducing alpha/theta brainwave coherence in clinical insomnia (Anidra).",
    },
    {
      familiarTag: "What the World Sees: Trendy Stress Gummy / Adaptogen",
      familiarTitle: "Ashwagandha Root",
      familiarDesc: "Sold globally in supermarket capsules as a generic herbal booster for sleep and gym recovery.",
      herbColor: "from-emerald-500/20 via-emerald-900/10 to-transparent border-emerald-500/30",
      accentText: "text-emerald-300",
      clinicalTitle: "Rasayana Cellular Pharmacology & Anupana Kinetics",
      sutra: "Balya • Brimhaniya • Vatakaphahara (Charaka Sutrasthana 25)",
      doshaAction: "Tikta-Kashaya Rasa, Ushna Virya, Madhura Vipaka; targets Mamsa & Shukra Dhatu.",
      modernScience: "Contains bioactive withanolides that modulate GABAergic signaling and mitochondrial ATP synthesis. In clinical Ayurveda, it is never prescribed blindly—its bioavailability depends on specific lipid/milk carriers (Anupana) and patient Agni (metabolic state).",
    },
    {
      familiarTag: "What the World Sees: Full-Body Spa Massage",
      familiarTitle: "Abhyanga (Medicated Oil Application)",
      familiarDesc: "Commonly viewed abroad as a luxury aromatic body rub before a steam bath.",
      herbColor: "from-teal-500/20 via-teal-900/10 to-transparent border-teal-500/30",
      accentText: "text-teal-300",
      clinicalTitle: "Transdermal Lymphatic Drainage & Vata Pathogenesis Control",
      sutra: "Abhyangam Acharayen Nityam (Ashtanga Hridaya Sutrasthana 2/8)",
      doshaAction: "Nourishes Bhrajaka Pitta &Twak (Skin), prevents Vata Prakopa (degenerative aging).",
      modernScience: "Warm decoction-processed lipid molecules penetrate the stratum corneum, stimulating cutaneous mechanoreceptors (C-tactile afferents), enhancing peripheral microvascular perfusion, and accelerating lymphatic clearance of metabolic waste.",
    },
  ];

  // STAGE 3: The 8 Branches of Classical Ayurveda (Ashtanga Ayurveda)
  const ashtangaBranches = [
    {
      code: "01",
      sanskrit: "Kayachikitsa",
      modern: "Internal Medicine & Systemic Pathology",
      desc: "The flagship clinical discipline governing systemic diseases—fevers (Jwara), metabolic syndromes (Prameha), autoimmune disorders (Amavata), and gastrointestinal pathology (Grahani) through Agni-restoration and targeted pharmacotherapy.",
      milestone: "Charaka Samhita • 120 Chapters of Clinical Protocols",
    },
    {
      code: "02",
      sanskrit: "Shalya Tantra",
      modern: "General & Reconstructive Surgery",
      desc: "Pioneered by Acharya Sushruta over 2,600 years ago. Encompasses 101 blunt instruments (Yantras), 20 sharp surgical blades (Shastras), rhinoplasty (forehead flap reconstruction), cataract couching, fracture reduction, and para-surgical Kshara Sutra therapy.",
      milestone: "Sushruta Samhita • Foundation of Global Plastic Surgery",
    },
    {
      code: "03",
      sanskrit: "Shalakya Tantra",
      modern: "Ophthalmology, ENT & Cranial Surgery",
      desc: "Specialized diagnosis and micro-procedural management of 76 ocular diseases, auditory disorders, nasal pathologies, and oral-dental conditions above the clavicle (Urdhwanga Chikitsa).",
      milestone: "Nimi Tantra & Uttara Tantra Surgical Compendium",
    },
    {
      code: "04",
      sanskrit: "Kaumarbhritya",
      modern: "Pediatrics, Neonatology & Maternal Care",
      desc: "Covers prenatal fetal development (Garbha Vijnana), neonatal resuscitation, breast-milk pathology (Stanya Dushti), pediatric immunization/nutrition (Swarna Prashana), and childhood developmental disorders.",
      milestone: "Kashyapa Samhita • Classical Pediatric Treatise",
    },
    {
      code: "05",
      sanskrit: "Agada Tantra",
      modern: "Clinical Toxicology & Envenomation",
      desc: "Emergency differential diagnosis and antidote pharmacology for plant toxins (Sthavara Visha), animal/ophidian venoms (Jangama Visha), and cumulative environmental/synthetic toxins (Dushi Visha).",
      milestone: "24 Classical Antidote Modalities (Chaturvimshati Upakrama)",
    },
    {
      code: "06",
      sanskrit: "Bhuta Vidya (Graha Chikitsa)",
      modern: "Psychiatry, Neuro-Psychology & Psychosomatics",
      desc: "Examines disturbances of Manas (mind)—Rajas and Tamas imbalances, clinical depression (vishada), psychosis (Unmada), and epilepsy (Apasmara) through cognitive counseling (Satvavajaya) and neuro-botanicals.",
      milestone: "Three-Pillar Psychotherapy: Daivavyapashraya, Yuktivyapashraya, Satvavajaya",
    },
    {
      code: "07",
      sanskrit: "Rasayana Tantra",
      modern: "Regenerative Medicine, Immunology & Longevity",
      desc: "Cellular rejuvenation protocols designed to optimize Ojas (immune resilience), preserve telomeric and cognitive integrity (Medhya Rasayana), and arrest premature tissue degeneration (Jara).",
      milestone: "Kuti Praveshika & Vatatapika Rejuvenation Regimens",
    },
    {
      code: "08",
      sanskrit: "Vajikarana Tantra",
      modern: "Reproductive Medicine, Andrology & Genetics",
      desc: "Focuses on the purification and vitality of Shukra/Artava Dhatu (gamete health), treatment of infertility (Vandhyatva), and ensuring optimal genetic and constitutional vigor in future offspring (Supraja).",
      milestone: "Pre-Conception Eugenics & Reproductive Endocrinology",
    },
  ];

  const activeBranch = ashtangaBranches[selectedBranch];

  return (
    <div className="min-h-screen bg-[#07120E] text-[#F4EFE6] font-sans pb-32 selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Warm Botanical & Golden Sesame Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-emerald-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#D4AF37]/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[140px]" />
      </div>

      {/* Top Navigation & Dual-Gateway Switcher */}
      <div className="relative z-10 max-w-7xl mx-auto pt-6 px-4 sm:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0D1F18]/90 backdrop-blur-xl border border-[#D4AF37]/30 px-5 py-3.5 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#F4EFE6]/70 hover:text-[#D4AF37] transition-colors font-bold text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Globe className="w-3.5 h-3.5" /> Project ATREYA • Global Gateway
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/bams-scholar"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#D4AF37] hover:text-black text-[#F4EFE6] border border-white/20 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Switch to BAMS Scholar Gateway (India)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================================
          STAGE 1: THE FAMILIAR HOOK (WARM, INVITING BOTANICAL ENTRY)
          Makes international visitors feel at home before pivoting to science
          ================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 mb-24">
        <div className="rounded-[36px] bg-gradient-to-br from-[#122A20] via-[#0B1913] to-[#211A0B] border border-[#D4AF37]/40 p-8 sm:p-14 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" /> Stage 01 • The Familiar Entryway
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
              A.T.R.E.Y.A. International Initiative
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight mb-6 text-[#FAF6EE]">
            You Know the Calm of the Herbs. <br />
            <span className="italic text-[#D4AF37]">Now Discover the 5,000-Year-Old Clinical Science.</span>
          </h1>

          <p className="text-[#D8CFC2] text-base sm:text-xl max-w-3xl leading-relaxed mb-10">
            Across the world, millions have experienced the warmth of Ayurvedic oils, herbal teas, and mindful routines. Yet what the West often meets as a &ldquo;spa day&rdquo; is only the surface of a rigorous medical system encompassing internal medicine, surgery, toxicology, and cellular longevity.
          </p>

          {/* The Core Project ATREYA Manifesto Box */}
          <blockquote className="p-6 sm:p-8 rounded-2xl bg-black/45 border-l-4 border-[#D4AF37] backdrop-blur-md mb-10">
            <p className="font-serif text-xl sm:text-2xl italic text-white leading-relaxed mb-3">
              &ldquo;Ayurveda is a 5,000-year-old clinical science, not just a massage therapy. Project ATREYA exists to bring authentic research and education to the modern world.&rdquo;
            </p>
            <footer className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              — Project ATREYA Founding Charter • Rural-to-Global Medical Bridge
            </footer>
          </blockquote>

          {/* 3 Reassuring Entry Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
              <p className="text-xs font-mono uppercase text-emerald-300 mb-1">01 // Start With What You Know</p>
              <p className="text-sm text-white/80">Begin with familiar herbs, sleep rituals, and body types—explained clearly without intimidating jargon.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
              <p className="text-xs font-mono uppercase text-[#D4AF37] mb-1">02 // Look Beneath the Surface</p>
              <p className="text-sm text-white/80">Use our interactive X-Ray cards below to see the exact neurological and pharmacological mechanisms.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
              <p className="text-xs font-mono uppercase text-amber-300 mb-1">03 // Verified by BAMS Scholars</p>
              <p className="text-sm text-white/80">Curated directly from primary Sanskrit Samhitas and India&apos;s 5.5-year medical curriculum.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          STAGE 2: THE CURIOSITY PIVOT (INTERACTIVE "X-RAY" BRIDGE CARDS)
          Starts with a familiar wellness concept -> Flips/Expands into clinical science
          ================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 mb-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-2">
              <Microscope className="w-4 h-4" /> Stage 02 • The Curiosity Bridge
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              From Familiar Ritual to Clinical Mechanism
            </h2>
          </div>
          <p className="text-sm text-white/60 max-w-md">
            Tap <strong>&ldquo;Toggle Clinical X-Ray&rdquo;</strong> on any familiar wellness card below to reveal the classical Sanskrit pharmacology and modern biology underneath.
          </p>
        </div>

        <div className="space-y-6">
          {bridgeCards.map((card, idx) => {
            const isXrayOpen = xrayCards.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-3xl bg-gradient-to-r ${card.herbColor} border p-6 sm:p-9 transition-all duration-300 shadow-xl`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className={`text-xs font-mono uppercase tracking-widest ${card.accentText}`}>
                    {card.familiarTag}
                  </span>

                  <button
                    onClick={() => toggleXray(idx)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isXrayOpen
                        ? "bg-[#D4AF37] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/25"
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>{isXrayOpen ? "Clinical X-Ray Active" : "Toggle Clinical X-Ray"}</span>
                  </button>
                </div>

                {/* Familiar Surface View */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl sm:text-4xl text-white mb-2">
                    {card.familiarTitle}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-base max-w-3xl">
                    {card.familiarDesc}
                  </p>
                </div>

                {/* Expandable Clinical X-Ray Layer */}
                {isXrayOpen && (
                  <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-black/45 p-6 rounded-2xl">
                    <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block">
                        CLASSICAL SAMHITA REFERENCE
                      </span>
                      <p className="font-serif italic text-lg text-white">
                        {card.sutra}
                      </p>
                      <p className="text-xs text-emerald-300 font-medium">
                        <strong>Dosha &amp; Dhatu Kinetics:</strong> {card.doshaAction}
                      </p>
                    </div>

                    <div className="lg:col-span-7 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 block">
                        MODERN BIOMEDICAL &amp; PHYSIOLOGICAL CORRELATION
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {card.clinicalTitle}
                      </h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {card.modernScience}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          STAGE 3: THE DEEP CLINICAL VAULT (ASHTANGA AYURVEDA - 8 BRANCHES)
          Proves that Ayurveda is a full-spectrum medical & surgical system
          ================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-[36px] bg-[#0B1914] border border-white/15 p-8 sm:p-12 shadow-2xl">
          
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              <Layers className="w-4 h-4" /> Stage 03 • The Deep Clinical Vault
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-4">
              Ashtanga Ayurveda: The 8 Medical Specialties
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Long before modern hospital departments existed, classical Ayurvedic universities (such as Takshashila and Nalanda) organized medicine into eight specialized clinical faculties. Select any branch below to explore its scope:
            </p>
          </div>

          {/* 8-Branch Interactive Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {ashtangaBranches.map((b, idx) => {
              const active = selectedBranch === idx;
              return (
                <button
                  key={b.code}
                  onClick={() => setSelectedBranch(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    active
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                      : "bg-white/[0.03] hover:bg-white/[0.07] text-white border-white/10"
                  }`}
                >
                  <span className={`text-xs font-mono font-bold block mb-1 ${active ? "text-black/70" : "text-[#D4AF37]"}`}>
                    BRANCH #{b.code}
                  </span>
                  <p className="font-bold text-sm sm:text-base leading-tight">{b.sanskrit}</p>
                  <p className={`text-[11px] mt-1 line-clamp-1 ${active ? "text-black/80 font-semibold" : "text-white/50"}`}>
                    {b.modern}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Specialty Deep-Dive Panel */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#132920] to-[#09130F] border border-[#D4AF37]/40">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  SPECIALTY FACULTY #{activeBranch.code}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                  {activeBranch.sanskrit} — <span className="italic text-[#D4AF37]">{activeBranch.modern}</span>
                </h3>
              </div>
              <HeartPulse className="w-10 h-10 text-emerald-400 opacity-75" />
            </div>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6">
              {activeBranch.desc}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-emerald-300">
              <span>CLASSICAL CANON: {activeBranch.milestone}</span>
              <Link
                href="/bams-scholar"
                className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:underline font-bold"
              >
                <span>Explore Full BAMS Curriculum</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
