"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingReels from "../components/LandingReels";

import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Heart,
  BookOpen,
  Leaf,
  Sparkles,
  CheckCircle,
  Stethoscope,
  Brain,
  Layers,
  Eye,
  Activity,
  Flame,
  Sun,
  FlaskConical,
  HelpCircle,
} from "lucide-react";

const FAMILIARITY_HOOKS = [
  {
    id: "dosha",
    tag: "VIRAL BODY-TYPE QUIZ",
    knownAs: "You've heard of 'Vata, Pitta, Kapha'...",
    hookTitle: "What Is Your True Genetic Body Type?",
    hookDesc:
      "Why can your friend eat anything and stay lean while you feel bloated from a salad? Take the 60-second clinical phenotype & gut-fire quiz.",
    cta: "Take the 60-Sec Body Type Quiz",
    href: "/atreya/diagnostics",
    icon: Flame,
    accent: "from-amber-500/20 to-orange-500/5 border-amber-500/40 text-amber-400",
  },
  {
    id: "biohack",
    tag: "MORNING BIOHACKING",
    knownAs: "You've seen Tongue Scraping & Oil Pulling on TikTok...",
    hookTitle: "The 5:00 AM 'Dopamine & Gut' Reset",
    hookDesc:
      "Why are Silicon Valley biohackers drinking from copper cups and swishing sesame oil? Try our interactive 11-step daily body clock.",
    cta: "Try the 24-Hour Body Clock",
    href: "/atreya/daily-regimen",
    icon: Sun,
    accent: "from-emerald-500/20 to-teal-500/5 border-emerald-500/40 text-emerald-400",
  },
  {
    id: "supplements",
    tag: "SUPPLEMENT REALITY CHECK",
    knownAs: "You take Ashwagandha or Turmeric capsules...",
    hookTitle: "Why 90% of Your Herbal Pills Flush Away",
    hookDesc:
      "Swallowing dry Ashwagandha or Curcumin with plain water gives <2% absorption. See how ancient lipid 'bio-carriers' boost uptake by 2,000%.",
    cta: "Unlock the Herb Absorption Lab",
    href: "/atreya/gut-brain-pharmacology",
    icon: FlaskConical,
    accent: "from-purple-500/20 to-indigo-500/5 border-purple-500/40 text-purple-400",
  },
  {
    id: "spa",
    tag: "SPA MYTH VS. NEUROSCIENCE",
    knownAs: "You think Ayurveda is just a warm oil spa massage...",
    hookTitle: "Inspect the Brain Scans Behind Forehead Oil Streams",
    hookDesc:
      "Shirodhara isn't a salon luxury—it stimulates your trigeminal nerve to drop cortisol and trigger deep alpha-theta brainwaves.",
    cta: "Open the Clinical X-Ray Vault",
    href: "/atreya/science-vault",
    icon: Brain,
    accent: "from-sky-500/20 to-blue-500/5 border-sky-500/40 text-sky-400",
  },
];

export default function LandingPage() {
  const [activeHook, setActiveHook] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      {/* INLINE STYLES - Grid + Custom Bio-Animations for Global Portal */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .batman .perspective-container {
          display: none !important;
        }

        .perspective-container {
          position: absolute;
          inset: 0;
          perspective: 1000px;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        
        .perspective-grid {
          position: absolute;
          width: 200%;
          height: 150%;
          left: -50%;
          top: 30%;
          background-image: 
            linear-gradient(to right, rgba(17, 66, 50, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 66, 50, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(75deg);
          animation: pan-grid 3s linear infinite;
          mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
        }
        
        @keyframes pan-grid {
          0% { transform: rotateX(75deg) translateY(0); }
          100% { transform: rotateX(75deg) translateY(60px); }
        }

        .glowing-core {
          position: absolute;
          top: 0%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
          animation: pulse-core 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse-core {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.7; }
          50% { transform: translateX(-50%) scale(1.2); opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.35; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 0.7; }
        }

        .circadian-ring-1 {
          animation: spin-slow 38s linear infinite;
        }
        .circadian-ring-2 {
          animation: spin-reverse-slow 52s linear infinite;
        }
        .floating-bio-orb {
          animation: float-orb 6s ease-in-out infinite;
        }
      `,
        }}
      />

      {/* =================================================================
          1. HERO SECTION — ATREYA MED MASTER BRANDING
          ================================================================= */}
      <div className="relative flex-grow flex items-center justify-center px-6 py-12 md:py-20 lg:py-24 overflow-hidden bg-background z-40">
        <div className="perspective-container">
          <div className="glowing-core"></div>
          <div className="perspective-grid"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-2 md:pt-4">
          <Link
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder hover:border-primary text-xs md:text-sm font-bold text-primary mb-5 md:mb-8 shadow-sm transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
            <span>ATREYA MED • NCISM BAMS PROF I–III &amp; AYURVEDA GLOBAL LIVE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4 md:mb-6 leading-[1.12] md:leading-tight drop-shadow-sm">
            5,000 Years of Clinical Science. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success">
              Built for the Modern World.
            </span>
          </h1>

          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed bg-surface/50 backdrop-blur-[2px] rounded-lg p-3">
            Ayurveda is a rigorous medical science, not just a spa therapy. Learn authentic clinical Ayurveda from the exact platform that trains India&apos;s future BAMS doctors.
          </p>

          {/* Dual Primary Track Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20">
            <Link
              href="/bams-scholar"
              className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
            >
              <Stethoscope className="w-5 h-5" />
              <span>BAMS Scholar Hub (India)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#global-discovery-box"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500/20 via-[#D4AF37]/25 to-emerald-500/20 hover:from-amber-500/30 hover:to-emerald-500/30 text-foreground border-2 border-[#D4AF37] font-extrabold px-8 py-4 rounded-xl shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Globe className="w-5 h-5 text-[#b8860b] dark:text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              <span>New to Ayurveda? Start Here (Global)</span>
              <Sparkles className="w-4 h-4 text-[#b8860b] dark:text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. DYNAMIC FAMILIARITY-BIAS PORTAL BOX (FOR YOUTH & STUDENTS ABROAD)
          ================================================================= */}
      <section
        id="global-discovery-box"
        className="bg-background py-8 md:py-14 px-4 md:px-6 relative z-20 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Outer Glowing Animated Border */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#D4AF37] via-emerald-500 to-[#D4AF37] shadow-2xl overflow-hidden">
            
            {/* Inner Dark Glassmorphic Stage with Animated Background */}
            <div className="relative bg-slate-950 text-white rounded-[22px] p-6 sm:p-10 md:p-12 overflow-hidden">
              
              {/* --- ANIMATED BACKGROUND LAYER (No External Images Needed!) --- */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
                {/* Rotating Sacred Circadian Rings */}
                <div className="circadian-ring-1 absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full border border-dashed border-[#D4AF37]/40" />
                <div className="circadian-ring-2 absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-emerald-400/30" />
                
                {/* Floating Golden & Emerald Bio-Orbs */}
                <div className="floating-bio-orb absolute top-1/4 left-10 w-36 h-36 rounded-full bg-[#D4AF37]/20 blur-2xl" />
                <div
                  className="floating-bio-orb absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl"
                  style={{ animationDelay: "2.5s" }}
                />
                <div
                  className="floating-bio-orb absolute top-10 left-1/2 w-28 h-28 rounded-full bg-amber-500/15 blur-2xl"
                  style={{ animationDelay: "1.2s" }}
                />
              </div>

              {/* --- FOREGROUND CONTENT --- */}
              <div className="relative z-10">
                {/* Top Hook Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-extrabold uppercase tracking-widest">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Ayurveda Global • Interactive Discovery Portal</span>
                  </div>

                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    Built for International Students &amp; Biohackers
                  </span>
                </div>

                {/* Curiosity-Driven Clickbait Headline */}
                <div className="max-w-3xl mb-8">
                  <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-3 text-white">
                    Wait... Isn&apos;t Ayurveda Just{" "}
                    <span className="underline decoration-[#D4AF37] decoration-wavy underline-offset-4 text-[#D4AF37]">
                      Turmeric Lattes, Ashwagandha &amp; Spa Massages?
                    </span>
                  </h2>
                  <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-medium">
                    You&apos;ve already seen fragments of Ayurveda go viral on social media. Pick a trend you already know below to uncover the{" "}
                    <strong className="text-white">5,000-year-old clinical neuroscience and gut biology</strong> hiding behind it:
                  </p>
                </div>

                {/* 4 Interactive "Familiarity Bias" Click-Magnet Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {FAMILIARITY_HOOKS.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = activeHook === idx;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActiveHook(idx)}
                        onClick={() => setActiveHook(idx)}
                        className={`group relative rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer bg-gradient-to-b ${
                          item.accent
                        } ${
                          isSelected
                            ? "ring-2 ring-[#D4AF37] scale-[1.02] shadow-xl bg-slate-900/90"
                            : "bg-slate-900/60 hover:bg-slate-900/90 opacity-90 hover:opacity-100"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 text-white border border-white/10">
                              {item.tag}
                            </span>
                            <Icon className="w-5 h-5 shrink-0" />
                          </div>

                          <p className="text-xs font-bold text-slate-300 italic mb-1">
                            &ldquo;{item.knownAs}&rdquo;
                          </p>

                          <h3 className="font-heading text-lg font-extrabold text-white mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                            {item.hookTitle}
                          </h3>

                          <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            {item.hookDesc}
                          </p>
                        </div>

                        <Link
                          href={item.href}
                          className="w-full py-2.5 px-3 rounded-xl bg-white/10 group-hover:bg-[#D4AF37] text-white group-hover:text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>{item.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Master Portal Bar */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 text-center sm:text-left">
                    <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 items-center justify-center shrink-0">
                      <Eye className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-extrabold text-white">
                        Ready for the Complete International Experience?
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Explore all 5 Clinical Pillars, the 24-Hour Body Clock, and 8 Hospital Specialties of Classical Ayurveda.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/atreya"
                    className="w-full md:w-auto shrink-0 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-[#D4AF37] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enter Full Ayurveda Global Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. BAMS SCHOLAR & 2ND PROF VAULT (FOR INDIAN MEDICAL STUDENTS)
          ================================================================= */}
      <div className="bg-background py-6 md:py-10 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-2xl p-6 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group hover:border-amber-700/50 transition-colors duration-500 w-full">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative z-10 w-full md:w-auto text-center md:text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-amber-800 dark:text-amber-500" />
              </div>
              <div>
                <div className="inline-flex items-center justify-center md:justify-start gap-1.5 px-2.5 md:px-3 py-1 rounded-sm bg-amber-500/15 text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-amber-950 dark:text-amber-400 mb-2 md:mb-3 border border-amber-600/30">
                  <Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS Curriculum (India)
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
                  BAMS Scholar &amp; 2nd Prof Vault
                </h2>
                <p className="text-foreground/80 font-medium max-w-xl leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
                  Track your 1st, 2nd &amp; 3rd Prof syllabus, read handwritten exam notebooks, decode high-yield Sanskrit Shlokas, and practice university MCQs.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto relative z-10 flex flex-col sm:flex-row md:flex-col gap-3">
              <Link
                href="/bams-scholar"
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-6 md:px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                Open BAMS Scholar Hub <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/bams-hub"
                className="w-full md:w-auto bg-amber-500/15 hover:bg-amber-500/25 text-amber-950 dark:text-amber-300 border border-amber-700/40 dark:border-amber-500/40 font-bold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs"
              >
                <CheckCircle className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" /> Direct to 2nd Prof Command Center
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
          4. CORE PILLARS GRID — CLICKABLE CARDS
          ================================================================= */}
      <div className="bg-surface backdrop-blur-md border-t border-surfaceBorder py-20 px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
              ATREYA Med • Clinical &amp; Academic Ecosystem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Scholars &amp; Global Learners Choose ATREYA Med
            </h2>
            <p className="text-foreground/60 font-medium max-w-2xl mx-auto">
              Bridging classical Sanskrit Samhitas with modern biomedical evidence, structured exam preparation, and clinical authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/bams-scholar"
              className="group bg-background p-8 border border-surfaceBorder hover:border-primary/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  NCISM &amp; AIAPGET Mastery
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">
                  Complete year-wise BAMS (1st, 2nd &amp; 3rd Prof) syllabus checklists, Shloka memorization tricks, simplified Samhita breakdowns, and previous year question papers.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Open BAMS Scholar Hub{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/interactive-topics"
              className="group bg-background p-8 border border-surfaceBorder hover:border-success/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Evidence-Based Clinical Modules
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">
                  Go beyond generic wellness trends. Explore interactive clinical modules that connect classical Dravyaguna and Panchakarma to modern neuro-physiology.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-success">
                Explore Clinical Modules{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/e-books"
              className="group bg-background p-8 border border-surfaceBorder hover:border-warning/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-warning" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Unshakeable Clinical Aura
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">
                  Master bedside case-taking, viva-voce examination confidence, and scientific communication so you command respect in any medical symposium worldwide.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-warning">
                Open 3D E-Book Library{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================================
          5. PROMO BANNER FOR E-BOOKS
          ================================================================= */}
      <div className="bg-background pb-8 md:pb-12 pt-8 md:pt-12 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-3xl pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full bg-white/10 text-[10px] md:text-xs font-bold text-white mb-3 md:mb-4 border border-white/20 uppercase tracking-widest">
                <BookOpen className="w-3 h-3 text-warning" /> ATREYA Med Publication
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                Command Authority in Every Viva &amp; Symposium
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-0 font-medium max-w-xl leading-relaxed">
                Read our flagship E-Books—<span className="text-white font-bold">The Unspoken Aura</span> &amp;{" "}
                <span className="text-white font-bold">The Invisible Art of Speaking</span>—in our interactive 3D reader. Completely free for a limited time.
              </p>
            </div>

            <div className="shrink-0 z-10 w-full md:w-auto">
              <Link
                href="/e-books"
                className="w-full md:w-auto bg-primary text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-xl shadow-lg hover:bg-primaryHover hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Open 3D Book Vault <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
          6. REELS SECTION
          ================================================================= */}
      <LandingReels />

      {/* =================================================================
          7. COMMUNITY SUPPORT SECTION
          ================================================================= */}
      <div className="bg-background border-t border-surfaceBorder py-12 md:py-20 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface backdrop-blur-md border border-surfaceBorder rounded-2xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-xs md:text-sm font-bold text-primary mb-4 md:mb-6 border border-primary/20">
                <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current text-primary" /> Support ATREYA Med
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Help Us Take Authentic Ayurveda to the World
              </h2>
              <p className="text-foreground/70 text-sm md:text-lg mb-5 md:mb-6 leading-relaxed">
                We are on a mission to digitize classical Samhitas, provide free high-yield exam tools for BAMS scholars across India, and establish Ayurveda globally as a respected clinical science.
              </p>
              <p className="text-foreground font-bold text-xs md:text-sm bg-foreground/5 inline-block px-3 md:px-4 py-2 rounded-lg border border-surfaceBorder">
                Scan the UPI QR code to support open-access Ayurvedic education.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center z-10">
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-md border border-gray-200 mb-3 md:mb-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <Image
                  src="/QR_1780487966.png"
                  alt="Support ATREYA Med via UPI"
                  width={160}
                  height={160}
                  className="object-contain w-40 h-40 md:w-48 md:h-48"
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-success" /> Secure UPI Contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
