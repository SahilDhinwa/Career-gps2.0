"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, Globe, ShieldCheck, BookOpen, 
  Activity, Eye, Layers, Microscope, Stethoscope, 
  HeartPulse, Sparkles 
} from "lucide-react";

export default function AtreyaMedGlobalPage() {
  const [xrayCards, setXrayCards] = useState<number[]>([0]);
  const [selectedBranch, setSelectedBranch] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<{
    frame: "vata" | "pitta" | "kapha";
    agni: "vata" | "pitta" | "kapha";
    response: "vata" | "pitta" | "kapha";
  }>({
    frame: "pitta",
    agni: "pitta",
    response: "vata",
  });

  const toggleXray = (index: number) => {
    setXrayCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getDominantDosha = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    counts[quizAnswers.frame]++;
    counts[quizAnswers.agni]++;
    counts[quizAnswers.response]++;
    if (counts.vata >= counts.pitta && counts.vata >= counts.kapha) return "Vata";
    if (counts.pitta >= counts.vata && counts.pitta >= counts.kapha) return "Pitta";
    return "Kapha";
  };

  const dominantDosha = getDominantDosha();

  const doshaProfiles: Record<string, {
    title: string;
    agniType: string;
    metabolism: string;
    clinicalAdvice: string;
    sutraRef: string;
  }> = {
    Vata: {
      title: "Vata-Predominant Constitution (Vatala Prakriti)",
      agniType: "Vishama Agni (Variable Digestive Fire)",
      metabolism: "High neuro-sensory speed and creativity, but prone to variable digestion, cold extremities, and autonomic fatigue when overstimulated.",
      clinicalAdvice: "Prioritize warm, unctuous cooked meals, rhythmic sleep-wake cycles (Dinacharya), and transdermal sesame oil application (Abhyanga) to stabilize cellular Vata.",
      sutraRef: "Charaka Vimanasthana 8/98",
    },
    Pitta: {
      title: "Pitta-Predominant Constitution (Paittika Prakriti)",
      agniType: "Teekshna Agni (Hyper-Metabolic Digestive Fire)",
      metabolism: "Strong enzymatic digestion, sharp clinical intellect (Medha), and high thermal regulation, but susceptible to systemic inflammation and acidity.",
      clinicalAdvice: "Incorporate cooling, bitter-sweet-astringent botanicals, avoid skipping meals when Agni peaks at midday, and protect hepatic balance.",
      sutraRef: "Charaka Vimanasthana 8/97",
    },
    Kapha: {
      title: "Kapha-Predominant Constitution (Shleshmala Prakriti)",
      agniType: "Manda Agni (Steady / Slow Metabolic Fire)",
      metabolism: "Exceptional structural endurance, synovial joint lubrication, and robust Ojas (baseline immunity), with a tendency toward sluggish lipid metabolism if sedentary.",
      clinicalAdvice: "Stimulate metabolic kinetics using pungent-bitter spices like dry ginger (Shunti) and Pippali, vigorous morning exercise (Vyayama), and light warm dinners.",
      sutraRef: "Charaka Vimanasthana 8/96",
    },
  };

  const bridgeCards = [
    {
      familiarTag: "Familiar Ritual • Forehead Oil Flow",
      familiarTitle: "Shirodhara Therapy",
      familiarDesc: "Often marketed in Western spas as a soothing warm-oil head treatment for weekend relaxation.",
      clinicalTitle: "Neuro-Endocrine & Vagus Nerve Modulation",
      sutra: "Murdhni Tailam (Ashtanga Hridaya Sutrasthana 22/23)",
      doshaAction: "Pacifies Prana Vata & Tarpaka Kapha in the Shira (Cranial Marma).",
      modernScience: "Continuous rhythmic fluid pressure on the forehead stimulates the trigeminal nerve and down-regulates the HPA axis, measurably lowering plasma cortisol and inducing alpha/theta brainwave coherence in clinical insomnia (Anidra).",
    },
    {
      familiarTag: "Familiar Herb • Adaptogen Capsule",
      familiarTitle: "Ashwagandha Root (Withania somnifera)",
      familiarDesc: "Sold globally in supermarket capsules as a generic herbal booster for stress and gym recovery.",
      clinicalTitle: "Rasayana Cellular Pharmacology & Anupana Kinetics",
      sutra: "Balya • Brimhaniya • Vatakaphahara (Charaka Sutrasthana 25)",
      doshaAction: "Tikta-Kashaya Rasa, Ushna Virya, Madhura Vipaka; targets Mamsa & Shukra Dhatu.",
      modernScience: "Contains bioactive withanolides that modulate GABAergic signaling and mitochondrial ATP synthesis. In clinical Ayurveda, its bioavailability depends on specific lipid/milk carriers (Anupana) and patient Agni.",
    },
    {
      familiarTag: "Familiar Therapy • Warm Oil Massage",
      familiarTitle: "Abhyanga (Medicated Lipid Application)",
      familiarDesc: "Commonly viewed abroad as a luxury aromatic body rub before a steam bath.",
      clinicalTitle: "Transdermal Lymphatic Drainage & Vata Control",
      sutra: "Abhyangam Acharayen Nityam (Ashtanga Hridaya Sutrasthana 2/8)",
      doshaAction: "Nourishes Bhrajaka Pitta & Twak (Skin), prevents Vata Prakopa (degenerative aging).",
      modernScience: "Warm decoction-processed lipid molecules penetrate the stratum corneum, stimulating cutaneous C-tactile afferents, enhancing microvascular perfusion, and accelerating lymphatic clearance.",
    },
  ];

  const ashtangaBranches = [
    {
      code: "01",
      sanskrit: "Kayachikitsa",
      modern: "Internal Medicine",
      desc: "The flagship clinical discipline governing systemic diseases—fevers (Jwara), metabolic syndromes (Prameha), autoimmune disorders (Amavata), and gastrointestinal pathology (Grahani) through Agni-restoration.",
      milestone: "Charaka Samhita • 120 Chapters of Clinical Protocols",
    },
    {
      code: "02",
      sanskrit: "Shalya Tantra",
      modern: "General & Plastic Surgery",
      desc: "Pioneered by Acharya Sushruta over 2,600 years ago. Encompasses 101 blunt instruments (Yantras), 20 sharp surgical blades (Shastras), rhinoplasty, fracture reduction, and Kshara Sutra therapy.",
      milestone: "Sushruta Samhita • Foundation of Global Plastic Surgery",
    },
    {
      code: "03",
      sanskrit: "Shalakya Tantra",
      modern: "Ophthalmology & ENT",
      desc: "Specialized diagnosis and micro-procedural management of 76 ocular diseases, auditory disorders, nasal pathologies, and oral-dental conditions above the clavicle.",
      milestone: "Nimi Tantra & Uttara Tantra Surgical Compendium",
    },
    {
      code: "04",
      sanskrit: "Kaumarbhritya",
      modern: "Pediatrics & OB-GYN",
      desc: "Covers prenatal fetal development (Garbha Vijnana), neonatal care, breast-milk pathology, pediatric immunization (Swarna Prashana), and childhood developmental disorders.",
      milestone: "Kashyapa Samhita • Classical Pediatric Treatise",
    },
    {
      code: "05",
      sanskrit: "Agada Tantra",
      modern: "Clinical Toxicology",
      desc: "Emergency differential diagnosis and antidote pharmacology for plant toxins (Sthavara Visha), animal venoms (Jangama Visha), and cumulative environmental toxins (Dushi Visha).",
      milestone: "24 Classical Antidote Modalities (Chaturvimshati Upakrama)",
    },
    {
      code: "06",
      sanskrit: "Bhuta Vidya",
      modern: "Psychiatry & Neurology",
      desc: "Examines disturbances of Manas (mind)—Rajas and Tamas imbalances, clinical depression (Vishada), psychosis (Unmada), and epilepsy (Apasmara) through cognitive counseling (Satvavajaya).",
      milestone: "Three-Pillar Psychotherapy Protocol",
    },
    {
      code: "07",
      sanskrit: "Rasayana Tantra",
      modern: "Regenerative & Longevity Medicine",
      desc: "Cellular rejuvenation protocols designed to optimize Ojas (immune resilience), preserve cognitive integrity (Medhya Rasayana), and arrest premature tissue degeneration.",
      milestone: "Kuti Praveshika & Vatatapika Regimens",
    },
    {
      code: "08",
      sanskrit: "Vajikarana Tantra",
      modern: "Reproductive Medicine & Genetics",
      desc: "Focuses on the purification and vitality of Shukra/Artava Dhatu (gamete health), treatment of infertility (Vandhyatva), and optimal constitutional vigor in offspring.",
      milestone: "Pre-Conception Reproductive Endocrinology",
    },
  ];

  const activeBranch = ashtangaBranches[selectedBranch];
  const activeProfile = doshaProfiles[dominantDosha];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 pb-24">
      
      {/* =================================================================
          1. CLEAN HERO SECTION (MATCHES MAIN HOMEPAGE TYPOGRAPHY)
          ================================================================= */}
      <section className="relative px-4 sm:px-6 pt-10 pb-16 md:py-20 border-b border-surfaceBorder bg-surface/40">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>ATREYA Med • Global Clinical Gateway</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.12] mb-6">
            You Know the Calm of the Herbs. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success">
              Now Discover the 5,000-Year-Old Clinical Science.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/75 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            What the West often meets as a &ldquo;spa day&rdquo; is only the surface of a rigorous medical system encompassing internal medicine, surgery, toxicology, and cellular longevity.
          </p>

          {/* Clean Manifesto Card */}
          <div className="max-w-3xl mx-auto bg-surface border border-surfaceBorder border-l-4 border-l-primary p-6 sm:p-8 rounded-sm shadow-sm text-left mb-8">
            <p className="font-heading text-lg sm:text-xl font-bold text-foreground leading-relaxed mb-2">
              &ldquo;Ayurveda is a 5,000-year-old clinical science, not just a massage therapy. ATREYA Med exists to bring authentic research and medical education to the modern world.&rdquo;
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              — Learn Authentic Ayurveda From the Platform That Trains India&apos;s Future BAMS Doctors
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/bams-scholar"
              className="bg-primary text-white font-bold px-6 py-3.5 rounded-sm shadow-md hover:bg-primaryHover transition-all inline-flex items-center gap-2 text-sm"
            >
              <Stethoscope className="w-4 h-4" />
              <span>View India BAMS Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/interactive-topics"
              className="bg-surface hover:bg-foreground/5 text-foreground border border-surfaceBorder font-bold px-6 py-3.5 rounded-sm transition-all inline-flex items-center gap-2 text-sm"
            >
              <Activity className="w-4 h-4 text-success" />
              <span>Explore Clinical Modules</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =================================================================
          2. INTERACTIVE CLINICAL X-RAY CARDS (CLEAN & UNCLUTTERED)
          ================================================================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Microscope className="w-4 h-4" /> Stage 01 • The Curiosity Bridge
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              From Familiar Ritual to Clinical Mechanism
            </h2>
          </div>
          <p className="text-sm text-foreground/65 font-medium max-w-md">
            Tap <strong>Clinical X-Ray</strong> on any card to inspect the classical Sanskrit reference and modern neuro-biological mechanism.
          </p>
        </div>

        <div className="space-y-6">
          {bridgeCards.map((card, idx) => {
            const isXrayOpen = xrayCards.includes(idx);
            return (
              <div
                key={idx}
                className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-8 shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20">
                    {card.familiarTag}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleXray(idx)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isXrayOpen
                        ? "bg-primary text-white shadow-sm"
                        : "bg-background hover:bg-foreground/5 text-foreground border border-surfaceBorder"
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>{isXrayOpen ? "Clinical X-Ray Active" : "Reveal Clinical X-Ray"}</span>
                  </button>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {card.familiarTitle}
                </h3>
                <p className="text-foreground/75 text-sm sm:text-base max-w-3xl font-medium">
                  {card.familiarDesc}
                </p>

                {isXrayOpen && (
                  <div className="mt-6 pt-6 border-t border-surfaceBorder grid grid-cols-1 lg:grid-cols-12 gap-6 bg-background p-5 sm:p-6 rounded-sm">
                    <div className="lg:col-span-5 space-y-2 border-b lg:border-b-0 lg:border-r border-surfaceBorder pb-4 lg:pb-0 lg:pr-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-[#D4AF37] block">
                        Classical Samhita Reference
                      </span>
                      <p className="font-heading text-base sm:text-lg font-bold text-foreground">
                        {card.sutra}
                      </p>
                      <p className="text-xs sm:text-sm text-primary font-semibold">
                        Dosha Action: {card.doshaAction}
                      </p>
                    </div>

                    <div className="lg:col-span-7 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-success block">
                        Modern Biomedical Mechanism
                      </span>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-foreground">
                        {card.clinicalTitle}
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
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
          3. INTERACTIVE PRAKRITI & AGNI DIAGNOSTIC PROFILER
          ================================================================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1 flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> Stage 02 • Root-Cause Diagnostic
              </p>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground">
                Interactive Prakriti &amp; Agni Profiler
              </h2>
            </div>
            <span className="text-xs font-bold bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-sm">
              Charaka Vimanasthana Ch. 8
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background border border-surfaceBorder rounded-sm p-5">
              <p className="font-heading text-sm font-bold text-foreground mb-3">
                1. Anatomical Frame (Akriti)
              </p>
              <div className="space-y-2">
                {[
                  { id: "vata" as const, label: "Lean frame, prominent joints, quick gait" },
                  { id: "pitta" as const, label: "Medium symmetrical build, warm skin" },
                  { id: "kapha" as const, label: "Broad, solid bone structure, steady" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setQuizAnswers((p) => ({ ...p, frame: opt.id }))}
                    className={`w-full text-left p-3 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
                      quizAnswers.frame === opt.id
                        ? "bg-primary text-white border-primary"
                        : "bg-surface text-foreground/75 border-surfaceBorder hover:border-primary/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-background border border-surfaceBorder rounded-sm p-5">
              <p className="font-heading text-sm font-bold text-foreground mb-3">
                2. Metabolic Fire (Jatharagni)
              </p>
              <div className="space-y-2">
                {[
                  { id: "vata" as const, label: "Variable appetite, prone to bloating" },
                  { id: "pitta" as const, label: "Intense hunger, cannot skip meals" },
                  { id: "kapha" as const, label: "Steady mild hunger, slow digestion" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setQuizAnswers((p) => ({ ...p, agni: opt.id }))}
                    className={`w-full text-left p-3 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
                      quizAnswers.agni === opt.id
                        ? "bg-primary text-white border-primary"
                        : "bg-surface text-foreground/75 border-surfaceBorder hover:border-primary/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-background border border-surfaceBorder rounded-sm p-5">
              <p className="font-heading text-sm font-bold text-foreground mb-3">
                3. Thermal &amp; Stress Response
              </p>
              <div className="space-y-2">
                {[
                  { id: "vata" as const, label: "Dislikes cold/wind; racing thoughts" },
                  { id: "pitta" as const, label: "Dislikes heat/sun; sharp focus" },
                  { id: "kapha" as const, label: "Dislikes damp/cold; calm under stress" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setQuizAnswers((p) => ({ ...p, response: opt.id }))}
                    className={`w-full text-left p-3 rounded-sm text-xs font-bold border transition-all cursor-pointer ${
                      quizAnswers.response === opt.id
                        ? "bg-primary text-white border-primary"
                        : "bg-surface text-foreground/75 border-surfaceBorder hover:border-primary/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background border-2 border-primary/40 rounded-sm p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-surfaceBorder">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Live Constitutional Synthesis
              </span>
              <span className="text-xs font-bold text-foreground/60">
                {activeProfile.sutraRef}
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
              {activeProfile.title}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-amber-800 dark:text-[#D4AF37] mb-3">
              Metabolic Profile: {activeProfile.agniType}
            </p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              {activeProfile.metabolism}
            </p>
            <div className="p-4 rounded-sm bg-primary/10 border border-primary/25 text-xs sm:text-sm text-foreground font-medium">
              <strong>Clinical Regimen (Pathya):</strong> {activeProfile.clinicalAdvice}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          4. ASHTANGA AYURVEDA — THE 8 MEDICAL SPECIALTIES
          ================================================================= */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-12">
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 shadow-md">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Stage 03 • The 8 Medical Faculties
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Ashtanga Ayurveda: Full-Spectrum Medicine
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base font-medium leading-relaxed">
              Long before modern hospital departments existed, classical Ayurvedic universities organized medicine into eight specialized clinical faculties. Select any branch below:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {ashtangaBranches.map((b, idx) => {
              const active = selectedBranch === idx;
              return (
                <button
                  key={b.code}
                  type="button"
                  onClick={() => setSelectedBranch(idx)}
                  className={`p-4 rounded-sm text-left border transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-background hover:bg-foreground/5 text-foreground border-surfaceBorder"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase block mb-1 ${active ? "text-white/80" : "text-primary"}`}>
                    Branch #{b.code}
                  </span>
                  <p className="font-heading font-bold text-sm sm:text-base leading-tight">{b.sanskrit}</p>
                  <p className={`text-xs mt-1 line-clamp-1 ${active ? "text-white/90" : "text-foreground/60"}`}>
                    {b.modern}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 rounded-sm bg-background border border-surfaceBorder">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-surfaceBorder">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Specialty Faculty #{activeBranch.code}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-1">
                  {activeBranch.sanskrit} — <span className="text-primary">{activeBranch.modern}</span>
                </h3>
              </div>
              <HeartPulse className="w-8 h-8 text-primary shrink-0" />
            </div>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 font-medium">
              {activeBranch.desc}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surfaceBorder text-xs font-bold">
              <span className="text-foreground/70">Classical Canon: {activeBranch.milestone}</span>
              <Link
                href="/bams-scholar"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                <span>See BAMS Syllabus for This Branch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
