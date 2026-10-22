"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, Globe, Microscope, Activity, 
  FlaskConical, GitMerge, Users, ShieldCheck, Sparkles, 
  BookOpen, Stethoscope, CheckCircle2, Layers 
} from "lucide-react";

const STRATEGIC_PHASES = [
  {
    phase: "PHASE 01 • MONTHS 1–6",
    status: "ACTIVE NOW",
    title: "Establish Scientific Authority",
    desc: "Demystify classical Sanskrit Samhitas into peer-grade biomedical language. Prove that Ayurveda is a 5,000-year-old clinical science through evidence-based research papers and interactive diagnostic tools.",
    pillarsIncluded: "Powers Pillars 01, 02 & 03",
    badgeColor: "bg-success/15 text-success border-success/30",
  },
  {
    phase: "PHASE 02 • MONTHS 6–12",
    status: "CURRICULUM OPEN",
    title: "Launch Gateway Clinical Education",
    desc: "Replace commercialized 200-hour 'spa certificates' with rigorous foundational training in Tridosha physiology, Sapta Dhatu tissue kinetics, Srotas micro-channels, and Shatkriyakala pathology.",
    pillarsIncluded: "Powers Pillar 04",
    badgeColor: "bg-amber-500/15 text-amber-800 dark:text-amber-400 border-amber-500/30",
  },
  {
    phase: "PHASE 03 • YEAR 2 & BEYOND",
    status: "ECOSYSTEM EXPANSION",
    title: "Build the Global Vaidya Movement",
    desc: "Host digital clinical symposiums, case-study debates, and research exchanges connecting authentic BAMS doctors and Vaidyas in India directly with international medical learners.",
    pillarsIncluded: "Powers Pillar 05",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
];

const GLOBAL_PILLARS = [
  {
    slug: "science-vault",
    number: "PILLAR 01",
    phaseTag: "PHASE 1 • RESEARCH VAULT",
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
    number: "PILLAR 02",
    phaseTag: "PHASE 1 • PRECISION MEDICINE",
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
    number: "PILLAR 03",
    phaseTag: "PHASE 1 • ENTERIC & HERBAL SCIENCE",
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
    number: "PILLAR 04",
    phaseTag: "PHASE 2 • GATEWAY COURSE & FLOWCHARTS",
    title: "Foundations of Clinical Ayurveda (Course & Flowcharts)",
    subtitle: "4-Module Structured Syllabus + Tactical Pathogenesis Flowcharts",
    desc: "Our flagship international curriculum stripping away commercial fluff. Master Dosha subtypes, the 7 Dhatu tissue transformations, Srotas pathology, and the 6 stages of Shatkriyakala.",
    cta: "Open Course & Flowcharts",
    highlights: ["4 Core Syllabus Modules", "Interactive Shatkriyakala Map", "Self-Assessment Checklists"],
    icon: GitMerge,
    spanFull: false,
  },
  {
    slug: "global-symposium",
    number: "PILLAR 05",
    phaseTag: "PHASE 3 • 8 SPECIALTIES & GLOBAL COMMUNITY",
    title: "Ashtanga Specialties & Indo-Global Vaidya Symposiums",
    subtitle: "The 8 Hospital Departments of Classical Ayurveda + Live Case Exchanges",
    desc: "Inspect all 8 classical branches—including Acharya Sushruta's reconstructive surgery (Shalya Tantra), internal medicine (Kayachikitsa), and toxicology—and join clinical dialogues with Indian BAMS scholars.",
    cta: "Enter Specialties & Symposium Hub",
    highlights: ["All 8 Ashtanga Faculties", "Sushruta Surgical Instruments", "Indo-Global Case Rounds"],
    icon: Users,
    spanFull: true,
  },
];

export default function AyurvedaGlobalMasterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      
      {/* Top Breadcrumb Bar */}
      <div className="max-w-6xl mx-auto pt-6 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-surface border border-surfaceBorder text-xs font-bold text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <Link
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-surface border border-surfaceBorder text-xs font-bold text-amber-800 dark:text-amber-400 hover:border-amber-500/50 transition-colors"
          >
            <Stethoscope className="w-3.5 h-3.5" /> Switch to India BAMS Scholar Hub →
          </Link>
        </div>
      </div>

      {/* =================================================================
          1. HERO COMMAND BANNER (WITH FULL A.T.R.E.Y.A. ACRONYM HEADING)
          ================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-10 md:p-12 shadow-lg relative overflow-hidden">
          
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-primary/15 border border-primary/30 text-[10px] font-bold uppercase tracking-widest text-primary">
              <Globe className="w-3 h-3" /> AYURVEDA GLOBAL
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-background border border-surfaceBorder text-[10px] font-bold uppercase tracking-widest text-foreground/70">
              5 CORE PILLARS ACTIVE • 3 STRATEGIC PHASES
            </span>
          </div>

          {/* Full Form Heading for International Students */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-amber-800 dark:text-[#D4AF37] mb-2">
            A.T.R.E.Y.A. — Ayurvedic Traditional Research &amp; Education for Youth Abroad
          </p>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.12] mb-5">
            Ayurveda Global <span className="text-primary">Command Center</span>
          </h1>

          <p className="text-foreground/75 text-sm sm:text-lg max-w-3xl font-medium leading-relaxed mb-8">
            The West has largely commodified Ayurveda into a &ldquo;spa day.&rdquo; This portal exists to restore its true identity as a 5,000-year-old clinical science encompassing internal medicine, reconstructive surgery, enteric neurology, and personalized genomics.
          </p>

          <div className="p-5 sm:p-6 rounded-sm bg-background border border-surfaceBorder border-l-4 border-l-primary flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-heading text-base sm:text-lg font-bold text-foreground mb-1">
                &ldquo;Learn authentic Ayurveda from the exact platform that trains India&apos;s future Ayurvedic doctors.&rdquo;
              </p>
              <p className="text-xs text-foreground/60 font-medium">
                Every research monograph and diagnostic tool below is peer-aligned with India&apos;s 5.5-year NCISM BAMS curriculum.
              </p>
            </div>
            <Link
              href="/atreya/science-vault"
              className="shrink-0 bg-primary text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm hover:bg-primaryHover transition-all inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Start With Pillar 01</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =================================================================
          2. THE 3-PHASE STRATEGIC ROADMAP (AUTHORITY -> EDUCATION -> MOVEMENT)
          ================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            Strategic Sequencing
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            The 3-Phase Global Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGIC_PHASES.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface border border-surfaceBorder rounded-sm p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                    {item.phase}
                  </span>
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-sm border ${item.badgeColor}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {idx + 1}. {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-surfaceBorder flex items-center justify-between text-xs font-bold text-primary">
                <span>{item.pillarsIncluded}</span>
                <CheckCircle2 className="w-4 h-4 text-success" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          3. THE 5 CORE PILLARS OF AYURVEDA GLOBAL (COMMAND CENTER GRID)
          Matches your BAMS 2nd Prof Command Center layout!
          ================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-[#D4AF37] mb-1">
              Interactive Sub-Repositories
            </p>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground">
              5 Core Clinical Pillars
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/65 font-medium">
            Select any pillar below to enter its dedicated research &amp; interactive laboratory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GLOBAL_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.slug}
                className={`bg-surface border border-surfaceBorder hover:border-primary/60 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all ${
                  pillar.spanFull ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Top Row: Icon + Pillar Number */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30">
                        {pillar.phaseTag}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        {pillar.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-primary mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pillar.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold px-3 py-1 rounded-sm bg-background border border-surfaceBorder text-foreground/80"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/atreya/${pillar.slug}`}
                  className="w-full py-3.5 px-6 rounded-sm bg-primary/15 hover:bg-primary text-primary hover:text-white border border-primary/30 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
