"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingReels from "../components/LandingReels";
import GlobalSearchBar from "../components/GlobalSearchBar";

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
  Eye,
  Activity,
  Flame,
  Sun,
  FlaskConical,
  FlaskRound,
  MessageSquarePlus,
  AlertTriangle,
  Send,
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

// ============================================================================
// TEMPORARY STUDENT TESTING ITEMS (Add new beta links here in 1 line)
// ============================================================================
const TEMP_DEV_LINKS = [
  {
    title: "Experimental UI Designs Lab",
    hindi: "नए यूज़र इंटरफ़ेस (UI) डिज़ाइन का परीक्षण करें",
    href: "/experimental",
    badge: "PRIMARY TEST",
    isPrimary: true,
  },
  {
    title: "Swasthavritta Ch. 1 (Notebook UI)",
    hindi: "हस्तलिखित नोटबुक नोट्स का डेमो देखें",
    href: "/short-notes/swasth-vritta/paper-1/chapter-1",
    badge: "BAMS NOTES",
    isPrimary: false,
  },
  {
    title: "24-Hour Body Clock (Interactive)",
    hindi: "इंटरएक्टिव दिनचर्या मॉड्यूल का अनुभव लें",
    href: "/atreya/daily-regimen",
    badge: "GLOBAL UI",
    isPrimary: false,
  },
];
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
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedQuickTag, setSelectedQuickTag] = useState<string>("");
  const [activeHook, setActiveHook] = useState<number>(0);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    const combinedMsg = `[ATREYA Med Student Feedback]\n• Topic: ${
      selectedQuickTag || "General Suggestion"
    }\n• Message: ${feedbackText || "Tested the new experimental UI!"}`;
    const whatsappUrl = `https://wa.me/918769892303?text=${encodeURIComponent(
      combinedMsg
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      {/* INLINE STYLES - 3D Grid & Ambient Glow */}
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
      `,
        }}
      />

      {/* =================================================================
          1. HERO SECTION — CLEAN, SPACIOUS & EASY TO UNDERSTAND
          ================================================================= */}
      <div className="relative flex-grow flex flex-col items-center justify-center px-4 sm:px-6 pt-6 md:pt-10 pb-14 md:pb-24 overflow-hidden bg-background z-40">
        <div className="perspective-container">
          <div className="glowing-core"></div>
          <div className="perspective-grid"></div>
        </div>

        {/* ---------------------------------------------------------------
            CURVED DEVELOPMENT PHASE WARNING BOX (Placed lower from Navbar)
            --------------------------------------------------------------- */}
        <div className="max-w-3xl w-full mx-auto mb-8 md:mb-10 relative z-20">
          <div className="bg-surface/90 backdrop-blur-md border-2 border-amber-500/40 rounded-2xl p-4 sm:px-6 sm:py-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-extrabold text-foreground">
                  ⚠️ Active Development Phase • यह मंच वर्तमान में निर्माणाधीन है
                </p>
                <p className="text-xs text-foreground/75 mt-0.5 leading-relaxed">
                  इस शैक्षणिक पोर्टल को विद्यार्थियों के लिए और अधिक उपयोगी बनाने हेतु आपके अमूल्य सुझाव सादर आमंत्रित हैं।
                </p>
              </div>
            </div>

            <a
              href="#student-testing-zone"
              className="shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              Give Feedback ↓
            </a>
          </div>
        </div>

        {/* ---------------------------------------------------------------
            PRESERVED HERO HEADING, SEARCH BAR & DUAL TRACK BUTTONS
            --------------------------------------------------------------- */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Link
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder hover:border-primary text-xs md:text-sm font-bold text-primary mb-5 md:mb-7 shadow-sm transition-colors"
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

          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto mb-7 md:mb-8 font-medium leading-relaxed bg-surface/50 backdrop-blur-[2px] rounded-lg p-3">
            Ayurveda is a rigorous medical science, not just a spa therapy. Learn authentic clinical Ayurveda from the exact platform that trains India&apos;s future BAMS doctors.
          </p>

          {/* SEPARATE MODULAR SEARCH BAR COMPONENT */}
          <GlobalSearchBar />

          {/* Two Primary Track Buttons */}
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
              className="w-full sm:w-auto bg-surface hover:bg-foreground/5 text-foreground border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] font-bold px-8 py-4 rounded-xl shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
            >
              <Globe className="w-5 h-5 text-[#b8860b] dark:text-[#D4AF37]" />
              <span>New to Ayurveda? Start Here (Global)</span>
              <Sparkles className="w-4 h-4 text-[#b8860b] dark:text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. TEMPORARY STUDENT TESTING & FEEDBACK HUB (BELOW FIRST SCROLL)
          ================================================================= */}
      <section
        id="student-testing-zone"
        className="bg-surface/60 border-t border-b border-surfaceBorder py-12 px-4 sm:px-6 relative z-20 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-background border-2 border-primary/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg space-y-6">
            
            {/* Clear Bilingual Header */}
            <div className="border-b border-surfaceBorder pb-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-1">
                  <FlaskRound className="w-4 h-4" /> Student Testing &amp; Feedback Lab • छात्र परीक्षण एवं सुझाव केंद्र
                </span>
                <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-foreground">
                  Help Us Choose the Best Design for Your Studies
                </h2>
                <p className="text-xs sm:text-sm text-foreground/75 mt-1">
                  नीचे दिए गए नए डिज़ाइन पेजों को खोलकर देखें और हमें बताएं कि अध्ययन के लिए कौन-सा प्रारूप सबसे सरल और उपयोगी है:
                </p>
              </div>
            </div>

            {/* 3 Temporary Testing Cards (Includes /experimental) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TEMP_DEV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    item.isPrimary
                      ? "bg-primary/10 border-primary hover:bg-primary hover:text-white shadow-sm"
                      : "bg-surface border-surfaceBorder hover:border-primary/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          item.isPrimary
                            ? "bg-primary text-white group-hover:bg-white group-hover:text-primary"
                            : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <FlaskRound className="w-4 h-4 opacity-70" />
                    </div>
                    <h3 className="font-bold text-base mb-1">{item.title}</h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        item.isPrimary
                          ? "text-foreground/80 group-hover:text-white/90"
                          : "text-foreground/65"
                      }`}
                    >
                      {item.hindi}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-extrabold">
                    <span>Open Page to Test</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* 1-Click Student Feedback Box */}
            <form
              onSubmit={handleSendFeedback}
              className="bg-surface border border-surfaceBorder rounded-2xl p-4 sm:p-5 space-y-3"
            >
              <label className="text-xs sm:text-sm font-extrabold text-foreground flex items-center gap-2">
                <MessageSquarePlus className="w-4 h-4 text-primary" />
                <span>
                  Share Your Suggestion • अपना सुझाव चुनें या नीचे लिखें:
                </span>
              </label>

              <div className="flex flex-wrap gap-2">
                {[
                  "👍 Experimental UI बहुत अच्छा है",
                  "📒 हस्तलिखित (Handwritten) नोट्स सबसे अच्छे हैं",
                  "🎨 फ़ॉन्ट या रंग में बदलाव करें",
                  "📚 अन्य विषयों के नोट्स भी जोड़ें",
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedQuickTag(tag)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedQuickTag === tag
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-foreground/80 border-surfaceBorder hover:border-primary/40"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <input
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="यहाँ अपना सुझाव लिखें (Write your feedback in Hindi or English)..."
                  className="flex-1 bg-background border border-surfaceBorder rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Suggestion</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* =================================================================
          3. DYNAMIC FAMILIARITY-BIAS PORTAL BOX (FOR GLOBAL LEARNERS)
          ================================================================= */}
      <section
        id="global-discovery-box"
        className="bg-background py-12 md:py-16 px-4 md:px-6 relative z-20 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#D4AF37] via-emerald-500 to-[#D4AF37] shadow-xl overflow-hidden">
            <div className="relative bg-slate-950 text-white rounded-[22px] p-6 sm:p-10 md:p-12 overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-extrabold uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Ayurveda Global • Interactive Discovery Portal</span>
                  </div>
                </div>

                <div className="max-w-3xl mb-8">
                  <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-3 text-white">
                    Wait... Isn&apos;t Ayurveda Just{" "}
                    <span className="text-[#D4AF37] border-b-2 border-[#D4AF37]/60">
                      Turmeric Lattes, Ashwagandha &amp; Spa Massages?
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Pick a viral wellness trend you already know below to uncover the{" "}
                    <strong className="text-white">
                      5,000-year-old clinical neuroscience and gut biology
                    </strong>{" "}
                    hiding behind it:
                  </p>
                </div>

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
                            ? "ring-2 ring-[#D4AF37] bg-slate-900/95"
                            : "bg-slate-900/60 hover:bg-slate-900/90"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 text-white border border-white/10">
                              {item.tag}
                            </span>
                            <Icon className="w-5 h-5 shrink-0" />
                          </div>

                          <p className="text-xs font-semibold text-slate-300 italic mb-1.5">
                            &ldquo;{item.knownAs}&rdquo;
                          </p>

                          <h3 className="font-sans text-base sm:text-lg font-extrabold text-white mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                            {item.hookTitle}
                          </h3>

                          <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            {item.hookDesc}
                          </p>
                        </div>

                        <Link
                          href={item.href}
                          className="w-full py-2.5 px-3 rounded-xl bg-white/10 group-hover:bg-[#D4AF37] text-white group-hover:text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>{item.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <Eye className="hidden sm:block w-6 h-6 text-[#D4AF37] shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      Explore all <strong>5 Clinical Pillars</strong>, the{" "}
                      <strong>24-Hour Body Clock</strong>, and{" "}
                      <strong>8 Specialties</strong>.
                    </p>
                  </div>

                  <Link
                    href="/atreya"
                    className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
          4. BAMS SCHOLAR & 2ND PROF VAULT
          ================================================================= */}
      <div className="bg-background py-6 md:py-10 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-2xl p-6 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group hover:border-amber-700/50 transition-colors duration-500 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative z-10 w-full md:w-auto text-center md:text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30 shadow-inner">
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-amber-800 dark:text-amber-500" />
              </div>
              <div>
                <div className="inline-flex items-center justify-center md:justify-start gap-1.5 px-2.5 md:px-3 py-1 rounded-sm bg-amber-500/15 text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-amber-950 dark:text-amber-400 mb-2 md:mb-3 border border-amber-600/30">
                  <Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS Curriculum
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
                  BAMS Scholar &amp; 2nd Prof Vault
                </h2>
                <p className="text-foreground/80 font-medium max-w-xl leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
                  Track your 1st, 2nd &amp; 3rd Prof syllabus, decode high-yield Sanskrit Shlokas, and access interactive Charaka Samhita MCQs &amp; university exam papers.
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
          5. CORE PILLARS GRID & E-BOOKS PROMO
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
          6. REELS & COMMUNITY SUPPORT
          ================================================================= */}
      <LandingReels />

      <div className="bg-background border-t border-surfaceBorder py-12 md:py-20 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface backdrop-blur-md border border-surfaceBorder rounded-2xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
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
            </div>

            <div className="shrink-0 flex flex-col items-center z-10">
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-md border border-gray-200 mb-3 md:mb-4">
                <Image
                  src="/QR_1780487966.png"
                  alt="Support ATREYA Med via UPI"
                  width={160}
                  height={160}
                  className="object-contain w-40 h-40 md:w-48 md:h-48"
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-success" /> Secure UPI Contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
