"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Microscope,
  Activity,
  FlaskConical,
  GitMerge,
  Users,
  Sparkles,
  Stethoscope,
  CheckCircle2,
  Sun,
  Clock,
  Eye,
  ShieldAlert,
  Compass,
  CalendarClock,
} from "lucide-react";

const STRATEGIC_PHASES = [
  {
    step: "01",
    phase: "MONTHS 1–6",
    status: "ACTIVE NOW",
    title: "Establish Scientific Authority",
    desc: "Translate classical Sanskrit Samhitas into peer-grade biomedical language. Demonstrate Ayurveda as a 5,000-year-old clinical science through evidence-based monographs and diagnostic profilers.",
    pillarsIncluded: "Powers Pillars 01, 02 & 03",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  },
  {
    step: "02",
    phase: "MONTHS 6–12",
    status: "CURRICULUM OPEN",
    title: "Gateway Clinical Education",
    desc: "Replace commercialized 200-hour 'spa certificates' with rigorous training in Tridosha physiology, Sapta Dhatu tissue kinetics, Srotas micro-channels, and Shatkriyakala pathogenesis.",
    pillarsIncluded: "Powers Pillar 04",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30",
  },
  {
    step: "03",
    phase: "YEAR 2 & BEYOND",
    status: "ECOSYSTEM EXPANSION",
    title: "The Global Vaidya Movement",
    desc: "Host digital clinical symposiums, case-study debates, and research exchanges connecting authentic BAMS doctors and Vaidyas in India directly with international medical learners.",
    pillarsIncluded: "Powers Pillar 05",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
  },
];

const GLOBAL_PILLARS = [
  {
    slug: "science-vault",
    number: "01",
    phaseTag: "Phase 1 • Research Vault",
    title: "Beyond the Spa: Clinical Science Vault",
    subtitle: "Research Monograph + Interactive Neuro-Physiological X-Ray Lab",
    desc: "Read our flagship paper 'Beyond the Spa: The Clinical Reality of Ayurvedic Internal Medicine' and inspect the trigeminal, vagal, and HPA-axis mechanisms behind Shirodhara, Abhyanga, and Nasya.",
    cta: "Open Science Vault",
    highlights: ["Full Research Paper", "3 Interactive X-Ray Decoders", "Samhita Citations"],
    icon: Microscope,
    spanFull: false,
  },
  {
    slug: "diagnostics",
    number: "02",
    phaseTag: "Phase 1 • Precision Medicine",
    title: "Prakriti, Vikriti & Agni Diagnostic Lab",
    subtitle: "Research Monograph + Charaka Vimanasthana Clinical Profiler",
    desc: "Read 'Decoding Prakriti: The Original Personalized Medicine' (genomic & epigenetic correlations) and run a multi-parameter constitutional and metabolic fire (Jatharagni) assessment.",
    cta: "Launch Diagnostic Lab",
    highlights: ["Epigenetics Paper", "5-Step Clinical Profiler", "Pathya Regimen Output"],
    icon: Activity,
    spanFull: false,
  },
  {
    slug: "gut-brain-pharmacology",
    number: "03",
    phaseTag: "Phase 1 • Enteric & Herbal Science",
    title: "The Gut-Brain Axis & Dravyaguna Lab",
    subtitle: "Enteric Neurology Paper + Classical Anupana Pharmacokinetics",
    desc: "Explore 'The Gut-Brain Axis: What Ayurveda Knew 3,000 Years Ago' (linking Grahani, Ama, and Prana Vata to the microbiome) plus why herbs like Ashwagandha and Brahmi require specific lipid carriers.",
    cta: "Explore Pharmacology Vault",
    highlights: ["Gut-Brain Research Paper", "Rasa-Virya-Vipaka Matrix", "Anupana Carrier Science"],
    icon: FlaskConical,
    spanFull: false,
  },
  {
    slug: "gateway-curriculum",
    number: "04",
    phaseTag: "Phase 2 • Gateway Course",
    title: "Foundations of Clinical Ayurveda",
    subtitle: "4-Module Structured Syllabus + Tactical Pathogenesis Flowcharts",
    desc: "Our flagship international curriculum stripping away commercial fluff. Master Dosha subtypes, the 7 Dhatu tissue transformations, Srotas pathology, and the 6 stages of Shatkriyakala.",
    cta: "Open Course & Flowcharts",
    highlights: ["4 Core Syllabus Modules", "Interactive Shatkriyakala Map", "Self-Assessment Checklists"],
    icon: GitMerge,
    spanFull: false,
  },
  {
    slug: "global-symposium",
    number: "05",
    phaseTag: "Phase 3 • 8 Specialties & Community",
    title: "Ashtanga Specialties & Indo-Global Vaidya Symposiums",
    subtitle: "The 8 Hospital Departments of Classical Ayurveda + Live Case Exchanges",
    desc: "Inspect all 8 classical branches—including Acharya Sushruta's reconstructive surgery (Shalya Tantra), internal medicine (Kayachikitsa), and toxicology—and join clinical dialogues with Indian BAMS scholars.",
    cta: "Enter Specialties & Symposium Hub",
    highlights: ["All 8 Ashtanga Faculties", "Sushruta Surgical Instruments", "Indo-Global Case Rounds"],
    icon: Users,
    spanFull: true,
  },
];

const DAILY_SCHEDULE_HIGHLIGHTS = [
  {
    time: "04:30 – 06:00 AM",
    title: "Circadian Awakening",
    detail: "Brahma Muhurta cortisol-serotonin sync, Usha Jalapana hydration & autonomic bowel clearance.",
    icon: Sun,
  },
  {
    time: "06:00 – 07:00 AM",
    title: "8 Cranial & Sensory Protocols",
    detail: "Botanical oral care, copper lingual debridement, Anu Taila nasal neuro-prophylaxis & oil pulling.",
    icon: Eye,
  },
  {
    time: "07:00 – 08:30 AM",
    title: "Somatic & Dermal Conditioning",
    detail: "Transdermal Abhyanga lipid massage, Ardhashakti calibrated exercise & Pratiloma powder friction.",
    icon: Activity,
  },
  {
    time: "ALL-DAY DEFENSE",
    title: "Modern Toxicology vs. Samhita",
    detail: "Evidence-based critiques of SLS cleansers, Chlorhexidine rinses, Gutkha/OSMF & aluminum deodorants.",
    icon: ShieldAlert,
  },
];

export default function AyurvedaGlobalMasterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-28 transition-colors duration-300">
      
      {/* =================================================================
          TOP NAVIGATION & QUICK-SWITCH BAR
          ================================================================= */}
      <div className="border-b border-surfaceBorder bg-surface/60 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto py-3 px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-surfaceBorder text-xs font-bold text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>

            {/* Quick Section Anchors for Easy Usability */}
            <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-foreground/70">
              <a href="#daily-protocol" className="px-3 py-1.5 rounded-lg hover:bg-background hover:text-primary transition-colors">
                Daily Routine (Dinacharya)
              </a>
              <span>•</span>
              <a href="#clinical-pillars" className="px-3 py-1.5 rounded-lg hover:bg-background hover:text-primary transition-colors">
                5 Clinical Pillars
              </a>
              <span>•</span>
              <a href="#roadmap" className="px-3 py-1.5 rounded-lg hover:bg-background hover:text-primary transition-colors">
                3-Phase Roadmap
              </a>
            </div>
          </div>

          <Link
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 transition-colors"
          >
            <Stethoscope className="w-3.5 h-3.5" /> India BAMS Scholar Hub →
          </Link>
        </div>
      </div>

      {/* =================================================================
          1. HERO COMMAND BANNER (CLEAN, READABLE & ACTION-ORIENTED)
          ================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
          
          {/* Top Status Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-bold uppercase tracking-wider text-primary">
              <Globe className="w-3.5 h-3.5" /> ATREYA Global Portal
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-surfaceBorder text-xs font-semibold text-foreground/70">
              NCISM Curriculum Aligned
            </span>
          </div>

          {/* Acronym Expansion */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-700 dark:text-[#D4AF37] mb-2">
            A.T.R.E.Y.A. — Ayurvedic Traditional Research &amp; Education for Youth Abroad
          </p>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-4">
            Clinical Ayurveda <span className="text-primary">Global Command Center</span>
          </h1>

          <p className="text-foreground/80 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            Modern wellness has largely reduced Ayurveda to a &ldquo;spa retreat.&rdquo; This portal restores its true stature as a 5,000-year-old clinical medical science—integrating circadian chronobiology, enteric neurology, reconstructive surgery, and personalized genomics.
          </p>

          {/* Dual Primary Action Bar: Research Pillars vs. Daily Routine */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-5 rounded-xl bg-background/90 border border-surfaceBorder items-center">
            <div className="md:col-span-7">
              <p className="font-heading text-sm sm:text-base font-bold text-foreground">
                Where should you begin your clinical journey?
              </p>
              <p className="text-xs sm:text-sm text-foreground/65 mt-0.5">
                Start with our <strong>24-Hour Daily Lifestyle Protocol (Dinacharya)</strong> for immediate biological application, or dive into <strong>Pillar 01</strong> for neuro-physiological research.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              <Link
                href="/atreya/daily-regimen"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-4 py-3 rounded-lg transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <Sun className="w-4 h-4 shrink-0" />
                <span>Daily Routine Guide</span>
              </Link>
              <Link
                href="/atreya/science-vault"
                className="bg-primary hover:bg-primaryHover text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-lg transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Start Pillar 01</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          2. FEATURED PRACTICAL MODULE: DAILY LIFESTYLE & CIRCADIAN REGIMEN
          (Separate from the 5 Pillars — Dedicated Interactive Hub)
          ================================================================= */}
      <section id="daily-protocol" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 scroll-mt-20">
        <div className="bg-gradient-to-br from-amber-500/10 via-surface to-surface border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-md relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-surfaceBorder">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <CalendarClock className="w-3.5 h-3.5" /> Practical Day-to-Day Living • Applied Chronobiology
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                Dinacharya: The 24-Hour Daily Lifestyle &amp; Biological Schedule
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Before prescribing complex herbs, Ayurveda optimizes your daily biological rhythm. Explore our complete global masterclass on <strong>how to structure your day from waking to sleep</strong>—correlating 17 classical morning, sensory, and physical habits with modern circadian biology and toxicology.
              </p>
            </div>

            {/* Dedicated High-Contrast Launch Button */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/atreya/daily-regimen"
                className="px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2.5 shadow-lg hover:shadow-amber-500/20"
              >
                <Clock className="w-4 h-4" />
                <span>Launch Daily Lifestyle Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[11px] text-center text-foreground/60 font-medium">
                Includes Prakriti Exercise Selector &amp; Cosmetic Toxicology
              </span>
            </div>
          </div>

          {/* 4-Stage Daily Schedule Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {DAILY_SCHEDULE_HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-background/80 border border-surfaceBorder rounded-xl p-4 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">
                      <span>{item.time}</span>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          3. THE 5 CORE CLINICAL PILLARS (UPGRADED READABLE CARDS)
          ================================================================= */}
      <section id="clinical-pillars" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 scroll-mt-20">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surfaceBorder pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Core Academic Architecture
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              The 5 Clinical Pillars of ATREYA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/70 font-medium">
            Select any pillar to enter its research monograph &amp; interactive diagnostic lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GLOBAL_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.slug}
                className={`group bg-surface border border-surfaceBorder hover:border-primary/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden ${
                  pillar.spanFull ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                          Pillar {pillar.number}
                        </span>
                        <span className="text-xs font-semibold text-foreground/60">
                          {pillar.phaseTag}
                        </span>
                      </div>
                    </div>

                    <span className="font-heading text-3xl font-black text-foreground/10 select-none">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Card Footer: Highlights + Action Button */}
                <div className="pt-4 border-t border-surfaceBorder">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pillar.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-background border border-surfaceBorder text-foreground/80"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/atreya/${pillar.slug}`}
                    className="w-full py-3 px-5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          4. THE 3-PHASE STRATEGIC ROADMAP (CLEAN TIMELINE CARDS)
          ================================================================= */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="mb-8 border-b border-surfaceBorder pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            Long-Term Rollout
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
            The 3-Phase Global Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGIC_PHASES.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface border border-surfaceBorder rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                    Phase {item.step} • {item.phase}
                  </span>
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-surfaceBorder flex items-center justify-between text-xs font-bold text-primary">
                <span>{item.pillarsIncluded}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
