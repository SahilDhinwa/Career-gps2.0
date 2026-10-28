"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sun,
  ShieldCheck,
  Clock,
  Eye,
  Activity,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Droplets,
  Wind,
  Flame,
  HeartPulse,
  ArrowLeft,
  BookOpen,
  Layers,
  Info,
} from "lucide-react";

type ModuleKey = "all" | "prevention" | "morning" | "cranial" | "somatic";
type PrakritiType = "vata" | "pitta" | "kapha";

export default function GlobalDinacharyaMasterclass() {
  const [activeModule, setActiveModule] = useState<ModuleKey>("all");
  const [selectedPrakriti, setSelectedPrakriti] = useState<PrakritiType>("vata");

  const modules = [
    { id: "all", label: "Complete Masterclass", icon: Layers },
    { id: "prevention", label: "01. Preventive Medicine & Vihara", icon: ShieldCheck },
    { id: "morning", label: "02. Circadian Awakening", icon: Sun },
    { id: "cranial", label: "03. Cranial & Sensory Care (8)", icon: Eye },
    { id: "somatic", label: "04. Somatic & Dermal Regimen (6)", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 transition-colors duration-300">
      {/* ========================================================= */}
      {/* HERO HEADER: GLOBAL CHRONOBIOLOGY PORTAL                  */}
      {/* ========================================================= */}
      <section className="relative border-b border-surfaceBorder bg-surface/60 backdrop-blur-md pt-10 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to ATREYA Portal
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Global Clinical Curriculum • Module 02
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ayurvedic Chronobiology &amp;{" "}
            <span className="text-primary">Dinacharya</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed mb-8">
            An evidence-aligned clinical blueprint of daily preventive regimens
            (<span className="font-semibold italic">Dinacharya</span>). Explore how classical
            Ayurvedic physiological protocols synchronize human circadian rhythms,
            protect mucosal microbiomes, and prevent chronic lifestyle disorders.
          </p>

          {/* Sticky / Interactive Module Selector */}
          <div className="flex flex-wrap gap-2 pt-2">
            {modules.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id as ModuleKey)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all border ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-background/80 text-foreground/75 border-surfaceBorder hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {mod.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-12 space-y-16">
        {/* ========================================================= */}
        {/* MODULE 1: LEVELS OF PREVENTION & VIHARA ARCHITECTURE      */}
        {/* ========================================================= */}
        {(activeModule === "all" || activeModule === "prevention") && (
          <section className="space-y-10">
            <div className="border-l-4 border-primary pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Section 01 • Epidemiological Correlation
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
                1. The Four Levels of Disease Prevention in Ayurveda
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 mt-1">
                Modern preventive medicine categorizes intervention into four distinct stages,
                each mapping directly onto classical Ayurvedic clinical frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primordial */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 shadow-sm hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold uppercase">
                    Stage 01 • Risk Factor Inhibition
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Primordial Prevention
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Preventing the emergence and establishment of environmental, behavioral,
                  and metabolic risk factors before they ever appear in a population.
                </p>
                <div className="p-3.5 rounded-lg bg-background/80 border border-surfaceBorder text-xs sm:text-sm">
                  <span className="font-bold text-primary block mb-1">
                    Ayurvedic Clinical Application:
                  </span>
                  Instituting <span className="font-semibold">Dinacharya</span> (daily biological routines),{" "}
                  <span className="font-semibold">Ritucharya</span> (seasonal adaptations), and{" "}
                  <span className="font-semibold">Sadvritta</span> (psychosocial ethics) from early childhood so non-communicable lifestyle disorders (obesity, Type-2 diabetes, hypertension) never take root.
                </div>
              </div>

              {/* Primary */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 shadow-sm hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-bold uppercase">
                    Stage 02 • Pre-Pathogenesis
                  </span>
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Primary Prevention
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Targeted action taken prior to the biological onset of disease, removing
                  the possibility that pathology will be initiated.
                </p>
                <div className="p-3.5 rounded-lg bg-background/80 border border-surfaceBorder text-xs sm:text-sm">
                  <span className="font-bold text-primary block mb-1">
                    Ayurvedic Clinical Application:
                  </span>
                  Practicing <span className="font-semibold">Ritu Shodhana</span> (prophylactic seasonal cellular detoxification), administering{" "}
                  <span className="font-semibold">Rasayana</span> (epigenetic immunomodulators), and strictly executing{" "}
                  <span className="font-semibold">Nidana Parivarjana</span> (avoidance of known etiological triggers).
                </div>
              </div>

              {/* Secondary */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 shadow-sm hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold uppercase">
                    Stage 03 • Early Pathogenesis
                  </span>
                  <Activity className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Secondary Prevention
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Halting the progression of a disease at its incipient subclinical stage
                  and preventing irreversible tissue complications.
                </p>
                <div className="p-3.5 rounded-lg bg-background/80 border border-surfaceBorder text-xs sm:text-sm">
                  <span className="font-bold text-primary block mb-1">
                    Ayurvedic Clinical Application:
                  </span>
                  Intercepting pathology during the initial stages of{" "}
                  <span className="font-semibold">Shatkriyakala</span> (<span className="italic">Sanchaya</span> / accumulation,{" "}
                  <span className="italic">Prakopa</span> / aggravation, and <span className="italic">Prasara</span> / overflow) and reversing it via{" "}
                  <span className="font-semibold">Langhana</span> (metabolic lightening), <span className="font-semibold">Deepana</span>, and{" "}
                  <span className="font-semibold">Pachana</span> (enzymatic toxin clearance).
                </div>
              </div>

              {/* Tertiary */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 shadow-sm hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-500 border border-purple-500/20 text-xs font-bold uppercase">
                    Stage 04 • Rehabilitation
                  </span>
                  <HeartPulse className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Tertiary Prevention
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Limiting physical impairments, structural disabilities, and suffering once
                  a disease has advanced beyond early reversibility.
                </p>
                <div className="p-3.5 rounded-lg bg-background/80 border border-surfaceBorder text-xs sm:text-sm">
                  <span className="font-bold text-primary block mb-1">
                    Ayurvedic Clinical Application:
                  </span>
                  Strict <span className="font-semibold">Pathya-Apathya</span> (therapeutic dietetics),{" "}
                  <span className="font-semibold">Panchakarma</span> neuro-rehabilitation in conditions like stroke/paralysis (<span className="italic">Pakshaghata</span>), and tissue-regenerative <span className="font-semibold">Rasayana</span> therapy.
                </div>
              </div>
            </div>

            {/* 2. Importance of Ahara and Vihara */}
            <div className="bg-surface/70 border border-surfaceBorder rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                2. Architecture of Ahara (Diet) &amp; Vihara (Lifestyle Regimen)
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                <span className="font-bold text-primary">Ahara</span> and{" "}
                <span className="font-bold text-primary">Vihara</span> form the twin pillars of
                physiological homeostasis. When practiced wholesomely (<span className="italic font-semibold">Hitakara</span>),
                they sustain <span className="font-semibold">Dhatusamya</span> (tissue equilibrium),
                vitality, and immunity. When practiced unwholesomely (<span className="italic font-semibold">Ahitakara</span>),
                they directly destabilize bio-humors (<span className="italic">Doshas</span>) and initiate pathology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-surfaceBorder bg-background/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary font-bold text-base mb-2">
                    <Clock className="w-5 h-5" />
                    A. Niyata Kala Vihara (Time-Bound Regimens)
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-3">
                    Structured physiological routines executed at fixed astronomical and
                    circadian intervals to keep biological clocks entrained.
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span><strong>Dinacharya:</strong> 24-hour circadian lifestyle protocol.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span><strong>Ritucharya:</strong> Bi-monthly seasonal metabolic adaptation.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-surfaceBorder bg-background/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary font-bold text-base mb-2">
                    <Activity className="w-5 h-5" />
                    B. Aniyata Kala Vihara (Need-Based Regimens)
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-3">
                    Adaptive behavioral and therapeutic interventions performed independent
                    of clock time, dictated by immediate physiological demands:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
                    <li>• <strong>Adharaniya Vega:</strong> Never suppressing natural autonomic urges (<span className="italic">Vegadharana</span>) nor forcefully initiating them (<span className="italic">Vegaudirana</span>).</li>
                    <li>• <strong>Ritu Shodhana &amp; Brumhana:</strong> Cellular detoxification when toxins accumulate, or anabolic nourishment (<span className="italic">Brumhana</span>) during tissue depletion.</li>
                    <li>• <strong>Bhutadi Asparshana:</strong> Microbiological and environmental hygiene—avoiding contact with pathogens, vectors, and toxic environments.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* MODULE 2: EARLY MORNING CIRCADIAN REGIMEN                 */}
        {/* ========================================================= */}
        {(activeModule === "all" || activeModule === "morning") && (
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Section 02 • Dawn Chronobiology
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
                3. Early Morning Regimen (Pratahkalina Dinacharya)
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 mt-1">
                Aligning neuroendocrine awakening, renal hydration, and autonomic bowel
                evacuation with the pre-dawn <span className="italic">Vata</span> phase.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* A. Brahma Muhurta */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <span>Step 01 • ~04:00 – 05:30 AM</span>
                    <Sun className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    A. Waking at Brahma Muhurta
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4">
                    <span className="font-semibold">Brahma</span> signifies supreme knowledge; a{" "}
                    <span className="font-semibold">Muhurta</span> equals 48 minutes. It is the{" "}
                    <strong>14th Muhurta of the night</strong>, occurring exactly{" "}
                    <strong>96 minutes (1 hr 36 mins) before sunrise</strong>.
                  </p>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs mb-4">
                    <strong className="text-amber-500 block mb-0.5">
                      Mandatory Metabolic Prerequisite:
                    </strong>
                    A healthy individual must wake in Brahma Muhurta <em>only</em> after assessing
                    that the previous night&apos;s meal is completely digested (
                    <span className="font-semibold">जीर्णाजीर्णं निरूपयन् / Jirnajirnam Nirupayan</span>).
                  </div>
                </div>
                <div className="border-t border-surfaceBorder pt-3 text-xs text-foreground/75 space-y-1">
                  <strong className="text-foreground block">Biomedical &amp; Circadian Impact:</strong>
                  <p>
                    Synchronizes the suprachiasmatic nucleus (master circadian clock),
                    optimizes morning cortisol awakening response, boosts synaptic serotonin,
                    supplies nascent pollution-free oxygen, enhances memory (<span className="italic">Smriti</span>),
                    and guarantees timely melatonin onset at night.
                  </p>
                </div>
              </div>

              {/* B. Usha Jalapana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <span>Step 02 • Pre-Brushing Hydration</span>
                    <Droplets className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    B. Usha Jalapana (Dawn Hydration)
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4">
                    Ingesting pure water stored overnight in a <strong>copper, earthen (clay), or glass vessel</strong> immediately upon waking, prior to brushing teeth.
                  </p>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-xs mb-4">
                    <strong className="text-primary block mb-0.5">
                      Classical Volumetric Dosage:
                    </strong>
                    <strong>8 Prasriti</strong> (approx. <strong>640 ml to 750 ml</strong>, or 2 to 3 glasses), calibrated to individual digestive capacity.
                  </div>
                </div>
                <div className="border-t border-surfaceBorder pt-3 text-xs text-foreground/75 space-y-1">
                  <strong className="text-foreground block">Physiological Therapeutics:</strong>
                  <p>
                    Triggers the <strong>gastro-colic reflex</strong> for effortless bowel evacuation, enhances glomerular filtration to flush renal metabolites, resolves chronic constipation (<span className="italic">Vibandha</span>), hemorrhoids (<span className="italic">Arsha</span>), and edema (<span className="italic">Shotha</span>), delays cellular senescence (<span className="italic">Jara</span>), and primes enzymatic <span className="italic">Agni</span>.
                  </p>
                </div>
              </div>

              {/* C. Malatyaga */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <span>Step 03 • Apana Vayu Window</span>
                    <Wind className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    C. Malatyaga in Vata Kaala
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4">
                    The final third of the night and early dawn are physiologically governed
                    by <strong>Vata Dosha</strong> (specifically pelvic{" "}
                    <span className="font-semibold">Apana Vayu</span>), whose natural vector is downward
                    expulsion (<span className="italic">Mala-Mutra Visarjana</span>).
                  </p>
                </div>
                <div className="border-t border-surfaceBorder pt-3 text-xs text-foreground/75 space-y-2">
                  <strong className="text-foreground block">Systemic Benefits of Timely Evacuation:</strong>
                  <ul className="space-y-1">
                    <li>• Prevents colonic reabsorption of metabolic endotoxins (<span className="italic">Ama</span>).</li>
                    <li>• Establishes abdominal lightness (<span className="italic">Koshtha Laghava</span>).</li>
                    <li>• Restores sensory acuity (<span className="italic">Indriya Prasada</span>) and kindles natural morning hunger (<span className="italic">Agni Deepana</span>).</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* MODULE 3: CRANIAL, ORAL & SENSORY THERAPEUTICS (8)        */}
        {/* ========================================================= */}
        {(activeModule === "all" || activeModule === "cranial") && (
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Section 03 • Urdhwajatrugata Paricharya
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
                4. Oral, Ocular &amp; Nasal Care (8 Cranial Procedures)
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 mt-1">
                Targeted mucosal, dental, ophthalmic, and olfactory interventions designed to
                clear accumulated <span className="italic">Kapha</span> and fortify cranial nerves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* A. Mukhaprakshalana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4A • Facial Hydrotherapy
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Mukhaprakshalana (Washing the Face &amp; Eyes)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Classical Protocol:</strong> Splash face and eyes with cool water in Summer/Autumn, lukewarm water in Winter, or medicated astringent decoctions such as{" "}
                  <span className="font-semibold">Ksheerivriksha Twak Kwatha</span> (barks of{" "}
                  <span className="italic">Nyagrodha, Udumbara, Ashwattha, Parisha, Plaksha</span>),{" "}
                  <span className="font-semibold">Amalaki Kwatha</span>, or <span className="font-semibold">Lodhra</span> paste.
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Clinical Action:</strong> Relieves ocular fatigue, prevents acne vulgaris (<span className="italic">Mukhadushika</span>), clears sebum/debris, and enhances microvascular facial radiance (<span className="italic">Mukha Kanti</span>).
                </p>
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs">
                  <strong className="text-rose-400 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Modern Dermatology Critique:
                  </strong>
                  Synthetic cleansers containing harsh sulfates (SLS/SLES) and parabens strip the stratum corneum&apos;s acid mantle and lipid barrier, triggering transepidermal water loss or rebound seborrhea. Mild pH-balanced or herbal infusions preserve epidermal integrity.
                </div>
              </div>

              {/* B. Dantadhavana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4B • Periodontal Hygiene
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Dantadhavana (Botanical Tooth Brushing)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Frequency &amp; Dimensions:</strong> Practiced twice daily (dawn and post-meals). The classical twig (<span className="italic">Dantakashtha</span>) must be fresh, straight, knot-free, <strong>12 Angula (~9 inches) long</strong>, and match the thickness of the little finger (<span className="italic">Kanishthika Anguli</span>), chewed at one end into soft bristles.
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Botanical Pharmacology (Rasa):</strong>
                  <br />• <em>Tikta (Bitter):</em> Nimba (Azadirachta indica)
                  <br />• <em>Kashaya (Astringent):</em> Khadira (Acacia catechu), Babbula
                  <br />• <em>Katu (Pungent):</em> Karanja, Arka
                  <br />• <em>Madhura (Sweet - Sushruta):</em> Madhuka (Licorice)
                </p>
                <p className="text-xs text-foreground/75">
                  <strong>Contraindications:</strong> Facial palsy (<span className="italic">Ardita</span>), active ocular/otic/oral lesions, indigestion (<span className="italic">Ajirna</span>), emesis (<span className="italic">Chhardi</span>), dyspnea (<span className="italic">Shwasa</span>), cough (<span className="italic">Kasa</span>), pyrexia (<span className="italic">Jwara</span>), and cardiac pathology (<span className="italic">Hridroga</span>).
                </p>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs">
                  <strong className="text-primary block mb-0.5">Modern Dental Correlation:</strong>
                  Use ultra-soft bristles with the <strong>Modified Bass Technique</strong> (45° sulcular angle, gentle vibratory strokes). Avoid high-RDA silica abrasives, endocrine-disrupting Triclosan, and artificial sweeteners.
                </div>
              </div>

              {/* C. Jihwanirlekhana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4C • Dorsal Lingual Debridement
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Jihwanirlekhana (Tongue Scraping)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Classical Instrument:</strong> A curved, blunt, smooth scraper measuring <strong>10 Angula long</strong>, forged from gold, silver, copper, brass, or flexible plant twigs.
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Physiological Benefits:</strong> Mechanically clears proteolysed debris and anaerobic biofilm (<span className="italic">Mala</span>) from the posterior dorsum of the tongue, neutralizes volatile sulfur compounds causing halitosis (<span className="italic">Daurgandhya</span>), clears obstructive <span className="italic">Kapha</span>, and sensitizes gustatory papillae (<span className="italic">Ruchi</span>).
                </p>
                <div className="p-2.5 rounded bg-background/70 border border-surfaceBorder text-xs">
                  <strong>Material Science Note:</strong> Copper and surgical stainless steel scrapers exhibit natural oligodynamic (bacteriostatic) properties, whereas porous plastic scrapers accumulate microbial biofilm.
                </div>
              </div>

              {/* D. Anjana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4D • Ophthalmic Prophylaxis
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Anjana (Medicated Collyrium)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Bio-Humoral Rationale:</strong> The eyes are the seat of{" "}
                  <span className="font-semibold">Alochaka Pitta (Tejas)</span> and are primarily vulnerable to congestive <span className="italic">Kapha</span> stagnation. Anjana stimulates lacrimal drainage to flush Kapha and sharpen visual acuity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-background/70 border border-surfaceBorder">
                    <strong className="text-primary block">1. Sauveeranjana (Daily):</strong>
                    Soothing antimony sulfide preparation applied daily for cooling, high-contrast vision.
                  </div>
                  <div className="p-2.5 rounded bg-background/70 border border-surfaceBorder">
                    <strong className="text-primary block">2. Rasanjana (Periodic):</strong>
                    Concentrated extract of <em>Berberis aristata</em> (Daruharidra) applied once every <strong>5th or 8th night</strong> to induce therapeutic lacrimation.
                  </div>
                </div>
                <p className="text-xs text-emerald-500 font-medium">
                  <strong>Occupational Ergonomics:</strong> Promotive ocular defense for software engineers, long-haul drivers, tailors, welders, and researchers experiencing Computer Vision Syndrome.
                </p>
              </div>

              {/* E. Pratimarsha Nasya */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4E • Trans-Nasal Neuro-Prophylaxis
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Pratimarsha Nasya (Daily Low-Dose Nasal Oil)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Universal Safety:</strong> Unlike high-dose cleansing Nasya (<span className="italic">Marsha</span>), Pratimarsha Nasya is safe across all age groups (infancy to senescence) and all weather conditions without complication risks.
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Lipid Vehicles &amp; Posology:</strong>{" "}
                  <span className="font-semibold">Anu Taila</span>, <span className="font-semibold">Shadbindu Taila</span>, pure <span className="font-semibold">Tila Taila</span> (sesame oil), or <span className="font-semibold">Goghrita</span>. Instill exactly <strong>2 drops (Dwi-Bindu)</strong> into each nostril.
                </p>
                <p className="text-xs text-foreground/75">
                  <strong>14 / 15 Classical Kaalas (Timings):</strong> Upon waking, post-brushing, before exiting the house, post-exercise, post-coitus, post-fatigue, post-micturition/defecation, post-Kavala/Anjana, post-meals, post-emesis, after daytime sleep, and at dusk.
                </p>
                <p className="text-xs text-emerald-500 font-medium">
                  <strong>Clinical &amp; Occupational Shield:</strong> Prevents premature alopecia/canities (<span className="italic">Khalitya-Palitya</span>), cervical spondylosis (<span className="italic">Manyastambha</span>), chronic rhinitis, and protects teachers, vocalists, traffic personnel, and industrial workers from particulate inhalation.
                </p>
              </div>

              {/* F. Kavala & Gandusha */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4F • Oral Mucosal Conditioning
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Kavala &amp; Gandusha (Gargling &amp; Oil Pulling)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-background/70 border border-surfaceBorder">
                    <strong className="text-primary block">Gandusha (Static Retention):</strong>
                    Filling the buccal cavity completely to full capacity without movement, held until reflex lacrimation and nasal discharge occur.
                  </div>
                  <div className="p-2.5 rounded bg-background/70 border border-surfaceBorder">
                    <strong className="text-primary block">Kavala (Dynamic Swishing):</strong>
                    Filling the mouth partially (~3/4th capacity) and actively swishing/gargling the fluid across periodontal pockets.
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Media &amp; Effects:</strong> Warm sesame oil (<span className="italic">Tila Taila</span>), lukewarm water, milk, or <span className="italic">Triphala/Khadira</span> decoctions. Fortifies temporomandibular joint and vocal resonance (<span className="italic">Hanu-Swara Bala</span>), prevents dental caries (<span className="italic">Dantakshaya</span>) and dentin hypersensitivity (<span className="italic">Dantaharsha</span>).
                </p>
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs">
                  <strong className="text-rose-400 block mb-0.5">
                    Microbiome Warning on Commercial Mouthwashes:
                  </strong>
                  Alcohol-based and Chlorhexidine rinses indiscriminately eradicate commensal nitrate-reducing oral bacteria (which regulate systemic nitric oxide and blood pressure) and cause extrinsic tooth staining. Lipid oil pulling (<span className="italic">Sneha Gandusha</span>) saponifies plaque while preserving mucosal barriers.
                </div>
              </div>

              {/* G. Tambula Sevana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4G • Post-Prandial Aromatics
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Tambula Sevana (Therapeutic Betel Chewing)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Classical Formulation:</strong> Tender <span className="italic">Nagavalli</span> (Piper betle leaf) combined with <span className="italic">Jatiphala</span> (Nutmeg), <span className="italic">Kankola</span> (Cubeb), <span className="italic">Lavanga</span> (Clove), <span className="italic">Karpura</span> (Camphor), <span className="italic">Ela</span> (Cardamom), <span className="italic">Puga</span> (Areca nut), and a trace of <span className="italic">Churna</span> (slaked lime).
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Action:</strong> Stimulates salivary amylase and post-prandial digestion, lyses pharyngeal <span className="italic">Kapha</span>, and deodorizes the oral cavity.
                </p>
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs">
                  <strong className="text-rose-400 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Oncology Alert (Classical vs. Modern Gutkha):
                  </strong>
                  Classical Tambula is <strong>100% tobacco-free</strong> and uses measured carminative spices. Commercial <em>Pan Masala</em> and <em>Gutkha</em> combine cured tobacco, excessive arecoline, synthetic fragrances, and caustic lime—directly causing <strong>Oral Submucous Fibrosis (OSMF)</strong> and squamous cell oral carcinoma.
                </div>
              </div>

              {/* H. Prayogika Dhoomapana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3">
                <span className="text-xs font-bold uppercase text-primary">
                  4H • Medicated Phyto-Aerosol Inhalation
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Prayogika Dhoomapana (Herbal Fumigation)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  <strong>Procedure &amp; Safety Rule:</strong> A botanical wick (<span className="italic">Varti</span> of Cardamom, Cinnamon, Nagakeshara, Vetiver, Sandalwood, Turmeric—strictly excluding arsenic/Manashila) is lit inside a <strong>24-Angula Dhoomanetra</strong> pipe. Inhale via nostrils, and <strong>exhale strictly through the mouth</strong> in 3 cycles of 3 puffs:
                </p>
                <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-center text-amber-500">
                  &ldquo;नेत्रयुक्तेन नासाभ्यां पिबेन्मुखेन च त्यजेत्&rdquo; — Never exhale smoke through the nasal passages, as retrograde heat damages the optic nerve and eyesight!
                </div>
                <p className="text-xs text-foreground/75">
                  <strong>8 Timings:</strong> Post-bath, post-meal, post-brushing, post-sneezing, post-Nasya, post-Anjana, post-waking, and post-emesis. <strong>Contraindicated</strong> in pregnancy (<span className="italic">Garbhini</span>), bleeding disorders (<span className="italic">Raktapitta</span>), post-Virechana/Basti, poisoning, and intoxication.
                </p>
                <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/20 text-xs">
                  <strong className="text-rose-400">Tobacco &amp; Hookah Pathology:</strong> Cigarettes, Beedis, and Hookahs deliver nicotine, polycyclic aromatic hydrocarbons (tar), and carbon monoxide—causing COPD, bronchogenic carcinoma, and atherosclerosis. Water filtration in a Hookah does <em>not</em> remove heavy metals or carcinogens.
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* MODULE 4: SOMATIC CONDITIONING & DERMAL REGIMEN (6)       */}
        {/* ========================================================= */}
        {(activeModule === "all" || activeModule === "somatic") && (
          <section className="space-y-10">
            <div className="border-l-4 border-primary pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Section 04 • Sharirika Paricharya
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
                5. Physical Conditioning, Transdermal Therapy &amp; Dermal Ecology
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 mt-1">
                Optimizing musculoskeletal resilience, peripheral circulation, and cutaneous
                microbiome defense through six daily somatic protocols.
              </p>
            </div>

            {/* 5A. Abhyanga */}
            <div className="bg-surface/70 border border-surfaceBorder rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surfaceBorder pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    5A • Transdermal Lipid Therapy
                  </span>
                  <h3 className="font-heading text-2xl font-bold mt-0.5">
                    Abhyanga (Warm Medicated Oil Massage)
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-center">
                  <p className="text-xs sm:text-sm font-bold text-primary">
                    &ldquo;अभ्यंगं आचरेत् नित्यं, स जरा श्रम वातहा। दृष्टि प्रसाद पुष्ट्यायुः स्वप्न सुत्वक्त्व दार्ढ्यकृत्।।&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                <strong>Physiological Mechanism:</strong> Pre-bath warm oil massage decelerates cellular aging (<span className="italic">Jara</span>), myalgia/fatigue (<span className="italic">Shrama</span>), and <span className="italic">Vata</span> excitation. It sharpens eyesight (<span className="italic">Drishtiprasada</span>), nourishes deep tissues (<span className="italic">Pushti</span>), promotes slow-wave sleep (<span className="italic">Swapna</span>), enhances cutaneous elasticity (<span className="italic">Sutvaktva</span>), and stimulates arteriovenous and lymphatic drainage.
              </p>

              {/* 3 Mandatory Anatomical Sites */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-background/70 border border-surfaceBorder">
                  <h4 className="font-bold text-primary mb-1">
                    1. Shiroabhyanga (Cranial Crown)
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    Prevents tension headaches, alopecia, premature graying, fortifies special sense organs, and induces restorative parasympathetic sleep.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/70 border border-surfaceBorder">
                  <h4 className="font-bold text-primary mb-1">
                    2. Karna Purana (External Auditory Canal)
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    Instilling warm oil into the ears prevents otalgia, tinnitus, sensorineural hearing decline, and temporomandibular/cervical stiffness.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/70 border border-surfaceBorder">
                  <h4 className="font-bold text-primary mb-1">
                    3. Padabhyanga (Plantar Soles)
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    Resolves plantar fissures (<span className="italic">Padadari</span>), neuropathy, sciatica (<span className="italic">Gridhrasi</span>), and directly nourishes eyesight via classical <span className="italic">Nadi</span> pathways linking the soles to the optic nerve.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-background/50 border border-surfaceBorder">
                  <strong className="text-foreground block mb-1">
                    Seasonal &amp; Geographical Lipid Selection:
                  </strong>
                  <p className="text-foreground/80">
                    • <strong>Winter / Cold Climates (Sheeta Kala):</strong> Warming <em>Tila Taila</em> (Sesame oil) or <em>Sarshapa Taila</em> (Mustard oil).
                    <br />• <strong>Summer / Autumn / Arid Heat (Ushna Kala):</strong> Cooling <em>Narikela Taila</em> (Coconut oil), <em>Chandanabalalakshadi Taila</em>, or <em>Goghrita</em>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <strong className="text-rose-400 block mb-1">
                    Absolute Contraindications for Abhyanga:
                  </strong>
                  <p className="text-foreground/80">
                    Acute Kaphaja disorders, active indigestion (<span className="italic">Ajirna</span>), nascent fever (<span className="italic">Navajwara</span>), and immediately following purificatory <span className="italic">Shodhana</span> (Vamana/Virechana).
                  </p>
                </div>
              </div>
            </div>

            {/* 5B. Vyayama (With Interactive Prakriti Prescription) */}
            <div className="bg-surface/70 border border-surfaceBorder rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surfaceBorder pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    5B • Kinesiology &amp; Metabolic Conditioning
                  </span>
                  <h3 className="font-heading text-2xl font-bold mt-0.5">
                    Vyayama (Measured Physical Exercise)
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-center">
                  <p className="text-xs sm:text-sm font-bold text-primary">
                    &ldquo;शरीरचेष्टा या चेष्टा स्थैर्यार्था बलवर्धिनी। देहव्यायामसङ्ख्याता मात्रया तामाचरेत्।।&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground/80">
                <strong>Acharya Charaka&apos;s Definition:</strong> Any physical exertion that generates bodily core stability (<span className="italic">Sthairya</span>) and augments muscular strength (<span className="italic">Bala</span>) is termed <strong>Vyayama</strong>. It must strictly be performed in calibrated moderation (<span className="italic">Matraya</span>)—producing physical lightness (<span className="italic">Laghava</span>), work endurance (<span className="italic">Karmasamarthya</span>), metabolic ignition (<span className="italic">Deeptagnitvam</span>), adipose reduction (<span className="italic">Medasa Kshaya</span>), and sculpted musculature (<span className="italic">Vibhakta-Ghana-Gatratvam</span>).
              </p>

              {/* Ardhashakti Lakshanas */}
              <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2 text-amber-500 font-bold text-base">
                  <Flame className="w-5 h-5" />
                  Clinical Stop-Signal: Ardhashakti Lakshanas (Signs of 50% Capacity)
                </div>
                <p className="text-xs sm:text-sm text-foreground/80">
                  In cold seasons (<span className="italic">Hemanta &amp; Shishira</span>), exercise must cease the moment the body reaches <strong>50% of its maximal physiological reserve</strong> (and even earlier in Summer/Monsoon), clinically identified by three triad markers:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-background/80 border border-surfaceBorder">
                    <strong className="text-amber-500 block">1. Svedagama (Diaphoresis):</strong>
                    Beads of sweat appearing on the forehead, nasal bridge, axillae, and limb joints.
                  </div>
                  <div className="p-3 rounded-lg bg-background/80 border border-surfaceBorder">
                    <strong className="text-amber-500 block">2. Shwasavriddhi (Tachypnea):</strong>
                    Noticeable deepening and acceleration of respiratory rate.
                  </div>
                  <div className="p-3 rounded-lg bg-background/80 border border-surfaceBorder">
                    <strong className="text-amber-500 block">3. Mukhashosha (Oropharyngeal Dryness):</strong>
                    Dryness of the palate/throat as <em>Prana Vayu</em> ascends from the cardiac region to the oral cavity.
                  </div>
                </div>
                <p className="text-xs text-rose-400 font-medium pt-1">
                  <strong>Risks of Over-Training (Ati-Vyayama):</strong> Crossing the Ardhashakti threshold induces tissue catabolism (<span className="italic">Kshaya</span>), severe dyspnea (<span className="italic">Pratamaka Shwasa</span>), hemorrhagic diathesis (<span className="italic">Raktapitta</span>), chronic exhaustion (<span className="italic">Shrama</span>), pyrexia, and cough.
                </p>
              </div>

              {/* Interactive Prakriti Exercise Selector */}
              <div className="border border-surfaceBorder rounded-xl p-5 bg-background/60">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h4 className="font-heading font-bold text-base sm:text-lg">
                    Interactive Prescription: Modern Exercise by Prakriti &amp; Age
                  </h4>
                  <div className="flex gap-2">
                    {(["vata", "pitta", "kapha"] as PrakritiType[]).map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedPrakriti(type)}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all border ${
                          selectedPrakriti === type
                            ? "bg-primary text-white border-primary"
                            : "bg-surface text-foreground/70 border-surfaceBorder hover:border-primary/40"
                        }`}
                      >
                        {type} Prakriti
                      </button>
                    ))}
                  </div>
                </div>

                {selectedPrakriti === "vata" && (
                  <div className="p-4 rounded-lg bg-surface border border-surfaceBorder text-xs sm:text-sm space-y-1">
                    <strong className="text-primary block text-base">
                      Vata Prakriti &amp; Older Adults (Low Stamina, High Mobility)
                    </strong>
                    <p className="text-foreground/80">
                      <strong>Recommended Modalities:</strong> Low-impact brisk walking, grounding Hatha Yoga, Tai Chi, gentle mobility stretching, and rhythmic breathing. Avoid high-impact plyometrics or exhausting endurance marathons that aggravate systemic Vata.
                    </p>
                  </div>
                )}
                {selectedPrakriti === "pitta" && (
                  <div className="p-4 rounded-lg bg-surface border border-surfaceBorder text-xs sm:text-sm space-y-1">
                    <strong className="text-primary block text-base">
                      Pitta Prakriti (Moderate Stamina, High Core Heat)
                    </strong>
                    <p className="text-foreground/80">
                      <strong>Recommended Modalities:</strong> Swimming, aquatic aerobics, evening cycling, and non-competitive strength training in cool environments. Avoid midday sun exposure or hyper-competitive hot-room workouts.
                    </p>
                  </div>
                )}
                {selectedPrakriti === "kapha" && (
                  <div className="p-4 rounded-lg bg-surface border border-surfaceBorder text-xs sm:text-sm space-y-1">
                    <strong className="text-primary block text-base">
                      Kapha Prakriti &amp; Young Adults (High Endurance, Slow Metabolism)
                    </strong>
                    <p className="text-foreground/80">
                      <strong>Recommended Modalities:</strong> Vigorous cardiovascular running, High-Intensity Interval Training (HIIT), heavy compound resistance training, and dynamic Surya Namaskara to mobilize lipid stores and stimulate metabolic turnover.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 5C. Udvartana, Udgharshana & Utsadana Comparison Table */}
            <div className="bg-surface/70 border border-surfaceBorder rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                5C • Pratiloma Gati Powder Therapeutics
              </span>
              <h3 className="font-heading text-2xl font-bold">
                Udvartana, Udgharshana &amp; Utsadana (Cutaneous Powder Friction)
              </h3>
              <p className="text-sm text-foreground/80">
                All three therapies involve massaging medicated botanical powders in the{" "}
                <strong>reverse direction of hair follicles (Pratiloma Gati — upward toward the heart)</strong> to stimulate venous return and subcutaneous lipolysis:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-surfaceBorder text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-primary/10 border-b border-surfaceBorder text-left">
                      <th className="p-3 border-r border-surfaceBorder font-bold text-primary">
                        Clinical Parameter
                      </th>
                      <th className="p-3 border-r border-surfaceBorder font-bold text-primary">
                        Udvartana (उद्वर्तन)
                      </th>
                      <th className="p-3 border-r border-surfaceBorder font-bold text-primary">
                        Udgharshana (उद्घर्षण)
                      </th>
                      <th className="p-3 font-bold text-primary">
                        Utsadana (उत्सादन)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surfaceBorder">
                    <tr>
                      <td className="p-3 border-r border-surfaceBorder font-semibold">
                        Nature of Medium
                      </td>
                      <td className="p-3 border-r border-surfaceBorder">
                        Fine dry or slightly warmed herbal powders (<em>Kulattha, Triphala, Musta</em>).
                      </td>
                      <td className="p-3 border-r border-surfaceBorder">
                        Coarse, rough dry botanical powders rubbed with vigorous mechanical friction (zero oil).
                      </td>
                      <td className="p-3">
                        Herbal powder blended with <em>Sneha</em> (oil/ghee) or milk into an unctuous paste.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-surfaceBorder font-semibold">
                        Primary Therapeutic Action
                      </td>
                      <td className="p-3 border-r border-surfaceBorder">
                        <strong>Kaphahara &amp; Medohara:</strong> Liquefies subcutaneous adipose tissue and firms skin.
                      </td>
                      <td className="p-3 border-r border-surfaceBorder">
                        Deep stratum corneum exfoliation, unclogs sweat pores, resolves pruritus (<em>Kandu</em>) and urticaria (<em>Kotha</em>).
                      </td>
                      <td className="p-3">
                        <strong>Vata-Pittahara:</strong> Deeply emollient, nourishing, and enhances dermal luminosity (<em>Kanti</em>).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-surfaceBorder font-semibold">
                        Primary Clinical Indication
                      </td>
                      <td className="p-3 border-r border-surfaceBorder">
                        Obesity, metabolic syndrome, Kapha Prakriti, dyslipidemia.
                      </td>
                      <td className="p-3 border-r border-surfaceBorder">
                        Cutaneous sluggishness, hyperhidrosis, bromhidrosis (body odor).
                      </td>
                      <td className="p-3">
                        Xerosis (dry skin), asthenic individuals, Vata Prakriti, aesthetic skin rejuvenation.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5D, 5E, 5F Grid: Snana, Anulepana, Vastradharana */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 5D. Snana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-primary">
                    5D • Thermal Hydrotherapy
                  </span>
                  <h3 className="font-heading text-xl font-bold">
                    Snana (Therapeutic Bathing)
                  </h3>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs">
                    <strong className="text-amber-500 block mb-0.5">
                      Cranial Thermal Polarity Rule:
                    </strong>
                    Use lukewarm water below the neck to build physical strength,{" "}
                    <strong>but always use cool/room-temperature water for the head</strong> (
                    <span className="italic">उष्णाम्बुना अधःकायस्य परिषेको बलावहः...</span>). Pouring hot water on the head depletes cranial nerve vitality, hair follicles, and visual acuity!
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    <strong>Systemic Effects:</strong> Kindles digestive fire (<span className="italic">Deepana</span>), acts as a vitality enhancer (<span className="italic">Vrishya</span>), promotes longevity (<span className="italic">Ayushya</span>), and clears pruritus (<span className="italic">Kandu</span>), sweat, drowsiness (<span className="italic">Tandra</span>), burning (<span className="italic">Daha</span>), and mental gloom (<span className="italic">Papmajit</span>).
                  </p>
                </div>
                <div className="border-t border-surfaceBorder pt-3 text-xs text-rose-400">
                  <strong>Contraindications:</strong> Facial palsy (<span className="italic">Ardita</span>), ocular/otic/oral disorders, diarrhea (<span className="italic">Atisara</span>), flatulence (<span className="italic">Adhmana</span>), acute rhinitis (<span className="italic">Pinasa</span>), indigestion, and <strong>immediately after eating meals (Bhuktva Cha)</strong>.
                </div>
              </div>

              {/* 5E. Anulepana & Cosmetics Critique */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-primary">
                    5E • Cutaneous Aromatherapy &amp; Toxicology
                  </span>
                  <h3 className="font-heading text-xl font-bold">
                    Anulepana vs. Modern Cosmetics
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    <strong>Classical Anulepana:</strong> Post-bath application of breathable phyto-pastes such as <span className="italic">Chandana</span> (Sandalwood), <span className="italic">Karpura</span> (Camphor), <span className="italic">Agaru</span> (Aquilaria), or <span className="italic">Kumkuma</span> (Saffron) to neutralize body odor (<span className="italic">Daurgandhya</span>), pacify thermal stress, and elevate mood.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs space-y-1.5">
                  <strong className="text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Transdermal Toxicology Alert:
                  </strong>
                  <p className="text-foreground/80">
                    While modern cosmetics offer SPF protection and grooming confidence, synthetic formulations carry severe risks:
                    <br />• <strong>Antiperspirants:</strong> Aluminum salts mechanically plug eccrine ducts, causing <em>Swedavaha Srotas Rodha</em> (sweat channel obstruction).
                    <br />• <strong>Lipsticks &amp; Talc:</strong> Often contain trace heavy metals (lead, cadmium) and pore-occluding silicates.
                    <br />• <strong>Parabens &amp; Phthalates:</strong> Act as xenoestrogenic endocrine disruptors and trigger allergic contact dermatitis.
                  </p>
                </div>
              </div>

              {/* 5F. Vastradharana */}
              <div className="bg-surface/70 border border-surfaceBorder rounded-xl p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-primary">
                    5F • Textile Thermodynamics &amp; Hygiene
                  </span>
                  <h3 className="font-heading text-xl font-bold">
                    Vastradharana (Seasonal Attire)
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    <strong>Classical Standard:</strong> Wearing freshly laundered, breathable, unsoiled garments (<span className="italic">Dhauta, Aklishta Vastra</span>) tailored to ambient climate conditions.
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    <strong>Seasonal Textile Selection:</strong>
                    <br />• <em>Summer &amp; Autumn (Sharad):</em> Thin, breathable organic cotton or natural silk to dissipate heat.
                    <br />• <em>Winter &amp; Monsoon:</em> Warm woolens and layered textiles to conserve core body heat and prevent Vata-Kapha aggravation.
                  </p>
                </div>
                <div className="border-t border-surfaceBorder pt-3 text-xs text-foreground/75">
                  <strong className="text-emerald-500 block mb-0.5">
                    Psychosocial &amp; Microbiological Impact:
                  </strong>
                  Enhances social dignity (<span className="italic">Yashasya</span>), psychological confidence (<span className="italic">Kamyam</span>), and longevity (<span className="italic">Ayushya</span>). Strictly avoid unwashed or shared garments to prevent dermatophytosis (fungal tinea infections) and scabies.
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
