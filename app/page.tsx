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
  Eye,
  Activity,
  Flame,
  Sun,
  FlaskConical,
  Search,
  FlaskRound,
  MessageSquarePlus,
  Wrench,
  ChevronDown,
  Send,
} from "lucide-react";

// ============================================================================
// 1. TEMPORARY TESTING LINKS (Add any new temporary page here in 1 line!)
// ============================================================================
const TEMP_DEV_LINKS = [
  {
    title: "Experimental UI Lab",
    hindi: "नए UI डिज़ाइन यहाँ टेस्ट करें",
    href: "/experimental",
    badge: "NEEDS FEEDBACK",
    isPrimary: true,
  },
  {
    title: "Swasthavritta Ch. 1 (Handwritten)",
    hindi: "हस्तलिखित नोट्स (डेमो)",
    href: "/short-notes/swasth-vritta/paper-1/chapter-1",
    badge: "NEW NOTEBOOK UI",
    isPrimary: false,
  },
  {
    title: "24-Hr Body Clock (Step-by-Step)",
    hindi: "इंटरएक्टिव दिनचर्या गाइड",
    href: "/atreya/daily-regimen",
    badge: "GLOBAL UI TEST",
    isPrimary: false,
  },
];

// ============================================================================
// 2. SEARCHABLE DIRECTORY FOR THE HERO SEARCH BAR
// ============================================================================
const SEARCH_INDEX = [
  {
    title: "Experimental UI Designs Lab",
    category: "Developer Testing",
    keywords: "experimental ui design test beta layout",
    href: "/experimental",
  },
  {
    title: "Swasthavritta Chapter 1: Swastha & Swasthya",
    category: "BAMS 2nd Prof • Handwritten Notes",
    keywords: "swasthavritta chapter 1 swastha lakshana notes hindi",
    href: "/short-notes/swasth-vritta/paper-1/chapter-1",
  },
  {
    title: "Swasthavritta Chapter 10: Naturopathy",
    category: "BAMS 2nd Prof • Handwritten Notes",
    keywords: "naturopathy prakritik chikitsa chapter 10",
    href: "/short-notes/swasth-vritta/paper-1/chapter-10-naturopathy/part-1",
  },
  {
    title: "Dinacharya: 24-Hour Body Clock & Daily Routine",
    category: "Ayurveda Global • Interactive Guide",
    keywords: "dinacharya daily routine brahma muhurta oil pulling abhyanga",
    href: "/atreya/daily-regimen",
  },
  {
    title: "Prakriti & Agni Body-Type Quiz",
    category: "Ayurveda Global • Pillar 02",
    keywords: "prakriti dosha quiz vata pitta kapha agni body type",
    href: "/atreya/diagnostics",
  },
  {
    title: "BAMS Scholar Hub (1st, 2nd & 3rd Prof)",
    category: "NCISM Curriculum",
    keywords: "bams scholar hub india syllabus charaka samhita",
    href: "/bams-scholar",
  },
  {
    title: "3D Dravyaguna Botanical Dissection Studio",
    category: "Clinical Studio",
    keywords: "dravyaguna 3d plants herbs botanical studio",
    href: "/dravyaguna",
  },
  {
    title: "Ayurveda Global Command Center (5 Pillars)",
    category: "International Portal",
    keywords: "atreya global command center 5 pillars research",
    href: "/atreya",
  },
];

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
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedQuickTag, setSelectedQuickTag] = useState<string>("");
  const [activeHook, setActiveHook] = useState<number>(0);

  // Filter live search results
  const filteredResults =
    searchQuery.trim().length > 0
      ? SEARCH_INDEX.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  // Send instant student feedback directly to WhatsApp
  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    const combinedMsg = `[ATREYA Med Student Feedback]\n• Tag: ${
      selectedQuickTag || "General Suggestion"
    }\n• Feedback: ${feedbackText || "Checked out the experimental UI!"}`;
    const whatsappUrl = `https://wa.me/918769892303?text=${encodeURIComponent(
      combinedMsg
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      {/* INLINE STYLES - Dynamic 3D Grid + Floating Ambient Glow */}
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
          top: 25%;
          background-image: 
            linear-gradient(to right, rgba(17, 66, 50, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 66, 50, 0.14) 1px, transparent 1px);
          background-size: 64px 64px;
          transform: rotateX(75deg);
          animation: pan-grid 4s linear infinite;
          mask-image: linear-gradient(to bottom, transparent 0%, black 45%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 45%, black 100%);
        }
        
        @keyframes pan-grid {
          0% { transform: rotateX(75deg) translateY(0); }
          100% { transform: rotateX(75deg) translateY(64px); }
        }

        .glowing-core {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 750px;
          height: 750px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.10) 0%, transparent 65%);
          animation: pulse-core 7s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse-core {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.65; }
          50% { transform: translateX(-50%) scale(1.18); opacity: 1; }
        }
      `,
        }}
      />

      {/* =================================================================
          TOP DEVELOPMENT PHASE NOTICE BAR (ENGLISH + HINDI)
          ================================================================= */}
      <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-2.5 relative z-50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shrink-0">
            <Wrench className="w-3 h-3" /> Beta Development Phase
          </span>
          <p className="text-xs sm:text-sm font-bold text-foreground/90">
            यह वेबसाइट अभी निर्माण (Development) चरण में है।{" "}
            <span className="font-normal text-foreground/75">
              We need your feedback to make ATREYA Med better for every student!
            </span>
          </p>
        </div>
      </div>

      {/* =================================================================
          1. SPACIOUS, MINIMAL FIRST VIEWPORT (SEARCH + TEMP LAB & FEEDBACK)
          Main heavy sections only appear AFTER the user scrolls down!
          ================================================================= */}
      <section className="relative min-h-[86vh] flex flex-col justify-between px-4 sm:px-6 pt-10 pb-8 overflow-hidden bg-background z-40">
        {/* Dynamic Background Grid & Pulse */}
        <div className="perspective-container">
          <div className="glowing-core"></div>
          <div className="perspective-grid"></div>
        </div>

        {/* Center Minimal Workspace */}
        <div className="max-w-3xl mx-auto w-full my-auto relative z-10 space-y-7">
          
          {/* Compact Brand Greeting */}
          <div className="text-center space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
              ATREYA Med • Open Student Beta
            </p>
            <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Search Topics or Test New Designs
            </h1>
            <p className="text-xs sm:text-sm text-foreground/65 max-w-lg mx-auto">
              
            </p>
          </div>

          {/* -------------------------------------------------------------
              A. INSTANT SEARCH BAR (With Live Dropdown Suggestions)
              ------------------------------------------------------------- */}
          <div className="relative w-full">
            <div className="relative flex items-center bg-surface/90 backdrop-blur-md border-2 border-surfaceBorder focus-within:border-primary rounded-2xl shadow-lg px-4 py-3 sm:py-3.5 transition-all">
              <Search className="w-5 h-5 text-primary shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Swasthavritta, Dinacharya, Prakriti Quiz, or Experimental UI..."
                className="w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-foreground/45 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-bold text-foreground/50 hover:text-foreground px-2"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {filteredResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-surface border border-surfaceBorder rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-surfaceBorder">
                {filteredResults.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 hover:bg-primary/10 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-primary font-semibold">
                        {item.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* -------------------------------------------------------------
              B. TEMPORARY STUDENT LAB & FEEDBACK BOX (Easy to Understand!)
              ------------------------------------------------------------- */}
          <div className="bg-surface/85 backdrop-blur-md border border-surfaceBorder rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
            
            {/* Header explaining what students need to do */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surfaceBorder pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                  🛠️ Temporary Testing Zone (अस्थायी परीक्षण क्षेत्र)
                </span>
                <h2 className="text-base sm:text-lg font-extrabold text-foreground">
                  Step 1: Try Our Experimental Pages &amp; Tell Us Which Design You Like Best
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-foreground/60 shrink-0">
                Takes 30 seconds
              </span>
            </div>

            {/* Temporary Links Grid (Includes /experimental right in front!) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TEMP_DEV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    item.isPrimary
                      ? "bg-primary/10 border-primary/50 hover:bg-primary hover:text-white shadow-sm"
                      : "bg-background/80 border-surfaceBorder hover:border-primary/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          item.isPrimary
                            ? "bg-primary text-white group-hover:bg-white group-hover:text-primary"
                            : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <FlaskRound className="w-4 h-4 opacity-70" />
                    </div>
                    <p className="font-bold text-sm leading-snug mb-0.5">
                      {item.title}
                    </p>
                    <p
                      className={`text-xs ${
                        item.isPrimary
                          ? "text-foreground/75 group-hover:text-white/90"
                          : "text-foreground/60"
                      }`}
                    >
                      {item.hindi}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-xs font-extrabold">
                    <span>Open &amp; Test</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Student Feedback Form */}
            <form
              onSubmit={handleSendFeedback}
              className="bg-background/90 border border-surfaceBorder rounded-2xl p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-extrabold text-foreground flex items-center gap-1.5">
                  <MessageSquarePlus className="w-4 h-4 text-primary" />
                  <span>
                    Step 2: Give Your Suggestion / अपना फीडबैक यहाँ लिखें:
                  </span>
                </label>
              </div>

              {/* 1-Click Quick Feedback Chips */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  "👍 Experimental UI is great",
                  "📒 Handwritten Notes are best",
                  "🎨 Change Fonts / Colors",
                  "📚 Add more BAMS chapters",
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedQuickTag(tag)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                      selectedQuickTag === tag
                        ? "bg-primary text-white border-primary"
                        : "bg-surface text-foreground/75 border-surfaceBorder hover:border-primary/40"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Type what we should improve or add next (हिन्दी या English में लिखें)..."
                  className="flex-1 bg-surface border border-surfaceBorder rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Feedback</span>
                </button>
              </div>
            </form>

          </div>
        </div>

        {/* Gentle Scroll Cue at Bottom of First Screen */}
        <div className="text-center relative z-10 pt-6">
          <a
            href="#main-portal-start"
            className="inline-flex flex-col items-center gap-1 text-xs font-bold text-foreground/60 hover:text-primary transition-colors"
          >
            <span>Scroll down for BAMS Hub &amp; Ayurveda Global</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
          </a>
        </div>
      </section>

      {/* =================================================================
          2. MAIN PORTAL INTRO (APPEARS AFTER SCROLLING DOWN)
          ================================================================= */}
      <section
        id="main-portal-start"
        className="bg-surface/60 border-t border-surfaceBorder py-16 px-6 relative z-20 scroll-mt-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-surfaceBorder text-xs font-bold text-primary mb-5">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
            <span>ATREYA MED • NCISM BAMS PROF I–III &amp; AYURVEDA GLOBAL</span>
          </span>

          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 leading-tight">
            5,000 Years of Clinical Science.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success">
              Built for the Modern World.
            </span>
          </h2>

          <p className="text-sm md:text-lg text-foreground/75 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Ayurveda is a rigorous medical science, not just a spa therapy. Choose your track below:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/bams-scholar"
              className="w-full sm:w-auto bg-primary text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:bg-primaryHover transition-all flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-5 h-5" />
              <span>BAMS Scholar Hub (India)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/atreya"
              className="w-full sm:w-auto bg-background text-foreground border-2 border-[#D4AF37] font-bold px-7 py-3.5 rounded-xl shadow-sm hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5 text-[#b8860b] dark:text-[#D4AF37]" />
              <span>Ayurveda Global Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. DYNAMIC FAMILIARITY-BIAS PORTAL BOX (CLEAN SANS TYPOGRAPHY!)
          ================================================================= */}
      <section className="bg-background py-10 md:py-14 px-4 md:px-6 relative z-20">
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

                {/* FIXED TYPOGRAPHY: Replaced stretched font-heading & wavy line with clean sans-serif */}
                <div className="max-w-3xl mb-8">
                  <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-3 text-white">
                    Wait... Isn&apos;t Ayurveda Just{" "}
                    <span className="text-[#D4AF37] border-b-2 border-[#D4AF37]/60">
                      Turmeric Lattes, Ashwagandha &amp; Spa Massages?
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Pick a viral wellness trend you already know below to uncover the{" "}
                    <strong className="text-white">5,000-year-old clinical neuroscience and gut biology</strong> hiding behind it:
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
                      Explore all <strong>5 Clinical Pillars</strong>, the <strong>24-Hour Body Clock</strong>, and <strong>8 Specialties</strong>.
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
          <div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30">
                <Leaf className="w-6 h-6 text-amber-800 dark:text-amber-500" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-[10px] uppercase font-bold tracking-widest text-amber-950 dark:text-amber-400 mb-2 border border-amber-600/30">
                  <Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS Curriculum (India)
                </span>
                <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                  BAMS Scholar &amp; 2nd Prof Vault
                </h2>
                <p className="text-foreground/80 font-medium max-w-xl text-sm md:text-base">
                  Track your 1st, 2nd &amp; 3rd Prof syllabus, read handwritten exam notebooks, and decode high-yield Sanskrit Shlokas.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2.5">
              <Link
                href="/bams-scholar"
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Open BAMS Scholar Hub <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/bams-hub"
                className="w-full md:w-auto bg-amber-500/15 hover:bg-amber-500/25 text-amber-950 dark:text-amber-300 border border-amber-700/40 font-bold py-2.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
              >
                <CheckCircle className="w-3.5 h-3.5" /> 2nd Prof Command Center
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
          5. REELS & COMMUNITY SUPPORT
          ================================================================= */}
      <LandingReels />

      <div className="bg-background border-t border-surfaceBorder py-12 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface border border-surfaceBorder rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary mb-3 border border-primary/20">
                <Heart className="w-3.5 h-3.5 fill-current text-primary" /> Support ATREYA Med
              </div>
              <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                Help Us Take Authentic Ayurveda to the World
              </h2>
              <p className="text-foreground/70 text-sm md:text-base mb-4">
                Scan the UPI QR code to support open-access Ayurvedic education and clinical tools.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl shadow-md border border-gray-200 mb-2">
                <Image
                  src="/QR_1780487966.png"
                  alt="Support ATREYA Med via UPI"
                  width={140}
                  height={140}
                  className="object-contain w-36 h-36"
                />
              </div>
              <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-success" /> Secure UPI Contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
