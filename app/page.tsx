"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import LandingReels from "../components/LandingReels";
import GlobalSearchBar from "../components/GlobalSearchBar";
import BatmanScrollDashboard from "../components/BatmanScrollDashboard";

import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Heart,
  Leaf,
  Sparkles,
  CheckCircle,
  Stethoscope,
  Brain,
  Activity,
  Flame,
  Sun,
  FlaskConical,
  FlaskRound,
  MessageSquarePlus,
  AlertTriangle,
  Send,
  Coffee,
  Flower2,
  Moon,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const ROTATING_PHRASES = [
  "A 5,000-Year Clinical Science.",
  "The Original Precision Medicine.",
  "Neuroscience, Not a Spa Therapy.",
  "Your Ultimate BAMS Scholar Vault.",
];

const TEMP_DEV_LINKS = [
  {
    title: "Doctor's Differential Diagnosis Hub",
    hindi: "लक्षणों से रोग पहचान एवं अनावश्यक जांच से बचाव",
    href: "/diagnosis-hub",
    badge: "NEW CLINICAL TOOL",
    isPrimary: true,
  },
  {
    title: "Experimental UI Designs Lab",
    hindi: "नए यूज़र इंटरफ़ेस (UI) डिज़ाइन का परीक्षण करें",
    href: "/experimental",
    badge: "PRIMARY TEST",
    isPrimary: false,
  },
  {
    title: "Swasthavritta Ch. 1 (Notebook UI)",
    hindi: "हस्तलिखित नोटबुक नोट्स का डेमो देखें",
    href: "/short-notes/swasth-vritta/paper-1/chapter-1",
    badge: "BAMS NOTES",
    isPrimary: false,
  },
];

const FAMILIARITY_HOOKS = [
  {
    id: "dosha",
    tag: "BODY TYPE & BALANCE",
    knownAs: "You've heard of Vata, Pitta and Kapha",
    hookTitle: "Why Does Ayurveda Describe Different Body Types?",
    hookDesc:
      "Explore Prakriti, the traditional Ayurvedic idea of individual constitution—and how it differs from modern genetic testing.",
    familiar: "Body-type quizzes",
    deeper: "Prakriti & the three doshas",
    insight:
      "Ayurveda describes Vata, Pitta and Kapha as traditional frameworks for understanding individual tendencies. They are not established genetic classifications.",
    cta: "Explore the Doshas",
    href: "/atreya/diagnostics",
    icon: Flame,
    visual: "dosha",
    accent: "amber",
    ring: "border-amber-400/60",
    gradient: "from-amber-400/25 via-orange-500/10 to-transparent",
    color: "text-amber-300",
    button: "bg-amber-400 hover:bg-amber-300 text-slate-950",
  },
  {
    id: "biohack",
    tag: "MORNING ROUTINES",
    knownAs: "You've seen tongue scraping and oil pulling",
    hookTitle: "Where Do Modern Wellness Rituals Come From?",
    hookDesc:
      "Discover Dinacharya, Ayurveda's daily-routine tradition, from waking habits to rest and self-care.",
    familiar: "Morning wellness rituals",
    deeper: "Dinacharya & daily rhythms",
    insight:
      "Dinacharya organizes daily habits around regularity, hygiene, movement and rest. Specific practices have different levels of scientific evidence.",
    cta: "Try the Daily Routine",
    href: "/atreya/daily-regimen",
    icon: Sun,
    visual: "routine",
    accent: "emerald",
    ring: "border-emerald-400/60",
    gradient: "from-emerald-400/25 via-teal-500/10 to-transparent",
    color: "text-emerald-300",
    button: "bg-emerald-400 hover:bg-emerald-300 text-slate-950",
  },
  {
    id: "supplements",
    tag: "HERBS & GOLDEN MILK",
    knownAs: "You know turmeric and Ashwagandha",
    hookTitle: "What Makes an Herb More Than a Supplement?",
    hookDesc:
      "Meet Haridra, Ashwagandha and Dravyaguna—the traditional study of substances, properties and preparations.",
    familiar: "Golden milk & herbal capsules",
    deeper: "Haridra, Dravyaguna & preparation",
    insight:
      "Traditional Ayurvedic preparations consider ingredients, combinations and methods of use. Safety and effectiveness still require evidence for each specific product and claim.",
    cta: "Explore Herbal Knowledge",
    href: "/atreya/gut-brain-pharmacology",
    icon: FlaskConical,
    visual: "herbs",
    accent: "violet",
    ring: "border-violet-400/60",
    gradient: "from-violet-400/25 via-fuchsia-500/10 to-transparent",
    color: "text-violet-300",
    button: "bg-violet-400 hover:bg-violet-300 text-slate-950",
  },
  {
    id: "spa",
    tag: "RELAXATION & MASSAGE",
    knownAs: "You've seen Ayurvedic oil massages",
    hookTitle: "What's the Tradition Behind the Spa Experience?",
    hookDesc:
      "Go beyond the spa image to discover Abhyanga, Shirodhara and the wider context of traditional Ayurvedic care.",
    familiar: "Spa treatments & massage",
    deeper: "Abhyanga & Shirodhara",
    insight:
      "These practices have historical roles in Ayurveda. Research into their effects is ongoing; claims about brainwaves or hormones should not be treated as settled facts.",
    cta: "Explore the Science Vault",
    href: "/atreya/science-vault",
    icon: Brain,
    visual: "spa",
    accent: "sky",
    ring: "border-sky-400/60",
    gradient: "from-sky-400/25 via-blue-500/10 to-transparent",
    color: "text-sky-300",
    button: "bg-sky-400 hover:bg-sky-300 text-slate-950",
  },
] as const;

function DiscoveryVisual({
  kind,
}: {
  kind: (typeof FAMILIARITY_HOOKS)[number]["visual"];
}) {
  if (kind === "dosha")
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#40240e] via-[#9a581c] to-[#1c281e]">
        <div className="absolute -left-12 top-0 h-44 w-44 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-amber-200/30 discovery-spin" />
        <div className="relative flex items-center justify-center gap-2">
          <div className="flex h-20 w-20 -rotate-12 items-center justify-center rounded-3xl border border-orange-200/30 bg-orange-200/15 shadow-2xl backdrop-blur-sm">
            <Flame className="h-11 w-11 text-orange-200" />
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-200/40 bg-amber-100/15 shadow-2xl backdrop-blur-sm">
            <Sun className="h-12 w-12 text-amber-100" />
          </div>
          <div className="flex h-20 w-20 rotate-12 items-center justify-center rounded-3xl border border-emerald-200/30 bg-emerald-200/15 shadow-2xl backdrop-blur-sm">
            <Leaf className="h-11 w-11 text-emerald-200" />
          </div>
        </div>
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          Vata · Pitta · Kapha
        </span>
      </div>
    );
  if (kind === "routine")
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d483c] via-[#237b67] to-[#112f38]">
        <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute h-44 w-44 rounded-full border border-emerald-100/25 discovery-spin" />
        <div className="absolute h-32 w-32 rounded-full border border-dashed border-emerald-100/40 discovery-spin-reverse" />
        <Sun
          className="h-20 w-20 text-amber-200 drop-shadow-[0_0_25px_rgba(253,230,138,.5)]"
          strokeWidth={1.2}
        />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          Daily rhythms · Dinacharya
        </span>
      </div>
    );
  if (kind === "herbs")
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#302044] via-[#69406b] to-[#1e3930]">
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="relative flex items-center gap-4">
          <div className="flex h-24 w-24 -rotate-12 items-center justify-center rounded-3xl border border-amber-100/30 bg-amber-200/20 shadow-xl">
            <Coffee className="h-14 w-14 text-amber-100" strokeWidth={1.3} />
          </div>
          <div className="flex h-28 w-24 rotate-6 items-center justify-center rounded-3xl border border-emerald-100/30 bg-emerald-200/15 shadow-xl">
            <Flower2
              className="h-14 w-14 text-emerald-100"
              strokeWidth={1.3}
            />
          </div>
        </div>
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          Turmeric · Ashwagandha
        </span>
      </div>
    );
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#12334c] via-[#276a83] to-[#182b46]">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute h-40 w-40 rounded-full border border-sky-200/25 discovery-spin" />
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-sky-200/40 bg-sky-100/10 shadow-2xl backdrop-blur">
        <Moon className="h-16 w-16 text-sky-100" strokeWidth={1.2} />
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
        Abhyanga · Shirodhara
      </span>
    </div>
  );
}

export default function LandingPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [feedbackText, setFeedbackText] = useState("");
  const [selectedQuickTag, setSelectedQuickTag] = useState<string>("");
  const [activeHook, setActiveHook] = useState<number>(0);
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // =========================================================================
  // EXCLUSIVE BATMAN MODE HOME DASHBOARD ACTIVATION
  // =========================================================================
  if (mounted && (theme === "batman" || resolvedTheme === "batman")) {
    return <BatmanScrollDashboard />;
  }

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

  const selected = FAMILIARITY_HOOKS[activeHook];

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      <style>{`
        .batman .perspective-container { display: none !important; }
        .perspective-container { position: absolute; inset: 0; perspective: 1000px; overflow: hidden; z-index: 0; pointer-events: none; }
        .perspective-grid {
          position: absolute; width: 200%; height: 150%; left: -50%; top: 30%;
          background-image: linear-gradient(to right, rgba(17, 66, 50, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 66, 50, 0.15) 1px, transparent 1px);
          background-size: 60px 60px; transform: rotateX(75deg); animation: pan-grid 3s linear infinite;
          mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
        }
        @keyframes pan-grid { 0% { transform: rotateX(75deg) translateY(0); } 100% { transform: rotateX(75deg) translateY(60px); } }
        .glowing-core {
          position: absolute; top: 0%; left: 50%; transform: translateX(-50%); width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
          animation: pulse-core 8s ease-in-out infinite; pointer-events: none;
        }
        @keyframes pulse-core { 0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.7; } 50% { transform: translateX(-50%) scale(1.2); opacity: 1; } }
        @keyframes discovery-rotate { to { transform: rotate(360deg); } }
        @keyframes discovery-float { 50% { transform: translateY(-16px); } }
        .discovery-spin { animation: discovery-rotate 38s linear infinite; }
        .discovery-spin-reverse { animation: discovery-rotate 52s linear infinite reverse; }
        .discovery-float { animation: discovery-float 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .discovery-spin, .discovery-spin-reverse, .discovery-float { animation: none !important; } }
      `}</style>

      {/* 1. HERO SECTION */}
      <div className="relative flex-grow flex flex-col items-center justify-center px-[clamp(1rem,4vw,3rem)] pt-[clamp(1.5rem,4vw,2.5rem)] pb-[clamp(3.5rem,8vw,6rem)] overflow-hidden bg-background z-40 min-h-[90svh]">
        <div className="perspective-container">
          <div className="glowing-core" />
          <div className="perspective-grid" />
        </div>

        <div className="max-w-3xl w-full mx-auto mb-[clamp(2rem,4vw,2.5rem)] relative z-20">
          <div className="bg-surface/90 backdrop-blur-md border-2 border-amber-500/40 rounded-2xl p-[clamp(1rem,2vw,1.5rem)] shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[clamp(0.75rem,2vw,0.875rem)] font-extrabold text-foreground">
                  ⚠️ Active Development Phase • यह मंच वर्तमान में निर्माणाधीन है
                </p>
                <p className="text-[clamp(0.7rem,1.5vw,0.75rem)] text-foreground/75 mt-0.5 leading-relaxed">
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

        <div className="max-w-5xl w-full mx-auto text-center relative z-10 flex flex-col items-center">
          <Link
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.375rem,1vw,0.5rem)] rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder hover:border-primary text-[clamp(0.6rem,1.5vw,0.75rem)] font-bold text-primary mb-[clamp(1.5rem,3vw,2rem)] shadow-sm transition-colors uppercase tracking-widest"
          >
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
            <span>NCISM BAMS Prof I–III &amp; Ayurveda Global Live</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <h1 className="font-sans text-[clamp(2rem,5vw+0.5rem,4.5rem)] font-extrabold text-foreground tracking-tight mb-[clamp(2rem,4vw,2.5rem)] leading-[1.15] drop-shadow-sm flex flex-col items-center w-full">
            <span className="block text-foreground/90">
              Experience Ayurveda As
            </span>
            <div className="relative h-[1.3em] w-full flex justify-center items-center mt-1 sm:mt-2">
              {ROTATING_PHRASES.map((phrase, index) => (
                <span
                  key={phrase}
                  className={`absolute text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success transition-all duration-700 ease-in-out w-full text-center px-4 ${
                    index === activePhrase
                      ? "opacity-100 blur-none scale-100 translate-y-0"
                      : "opacity-0 blur-sm scale-95 translate-y-4 pointer-events-none"
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </h1>

          <div className="w-full max-w-2xl mx-auto mb-[clamp(2rem,4vw,2.5rem)]">
            <GlobalSearchBar />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[clamp(0.75rem,2vw,1rem)] w-full sm:w-auto relative z-20">
            <Link
              href="/bams-scholar"
              className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
            >
              <Stethoscope className="w-5 h-5" />
              <span className="text-[clamp(0.875rem,2vw,1rem)]">
                BAMS Scholar Hub (India)
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#global-discovery-box"
              className="w-full sm:w-auto bg-surface hover:bg-foreground/5 text-foreground border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] font-bold px-8 py-4 rounded-xl shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
            >
              <Globe className="w-5 h-5 text-[#b8860b] dark:text-[#D4AF37]" />
              <span className="text-[clamp(0.875rem,2vw,1rem)]">
                New to Ayurveda? Start Here
              </span>
              <Sparkles className="w-4 h-4 text-[#b8860b] dark:text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. STUDENT TESTING & FEEDBACK HUB */}
      <section
        id="student-testing-zone"
        className="bg-surface/60 border-t border-b border-surfaceBorder py-[clamp(3rem,6vw,4rem)] px-[clamp(1rem,4vw,2rem)] relative z-20 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-background border-2 border-primary/30 rounded-[clamp(1rem,3vw,1.5rem)] p-[clamp(1.5rem,4vw,2.5rem)] shadow-lg space-y-[clamp(1.5rem,4vw,2rem)]">
            <div className="border-b border-surfaceBorder pb-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[clamp(0.65rem,1.5vw,0.75rem)] font-extrabold uppercase tracking-wider text-primary mb-1">
                  <FlaskRound className="w-4 h-4" /> Student Testing &amp;
                  Feedback Lab • छात्र परीक्षण एवं सुझाव केंद्र
                </span>
                <h2 className="font-sans text-[clamp(1.25rem,3vw,1.5rem)] font-extrabold text-foreground">
                  Help Us Choose the Best Design for Your Studies
                </h2>
                <p className="text-[clamp(0.75rem,2vw,0.875rem)] text-foreground/75 mt-1">
                  नीचे दिए गए नए डिज़ाइन पेजों को खोलकर देखें और हमें बताएं कि अध्ययन के लिए कौन-सा प्रारूप सबसे सरल और उपयोगी है:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.25rem)]">
              {TEMP_DEV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group p-[clamp(1rem,2vw,1.25rem)] rounded-2xl border transition-all flex flex-col justify-between ${
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
                    <h3 className="font-bold text-[clamp(0.9rem,2vw,1rem)] mb-1">
                      {item.title}
                    </h3>
                    <p
                      className={`text-[clamp(0.7rem,1.5vw,0.75rem)] leading-relaxed ${
                        item.isPrimary
                          ? "text-foreground/80 group-hover:text-white/90"
                          : "text-foreground/65"
                      }`}
                    >
                      {item.hindi}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[clamp(0.7rem,1.5vw,0.75rem)] font-extrabold">
                    <span>Open Page to Test</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <form
              onSubmit={handleSendFeedback}
              className="bg-surface border border-surfaceBorder rounded-2xl p-[clamp(1rem,2vw,1.25rem)] space-y-3"
            >
              <label className="text-[clamp(0.75rem,2vw,0.875rem)] font-extrabold text-foreground flex items-center gap-2">
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
                    className={`px-3 py-1.5 rounded-xl text-[clamp(0.7rem,1.5vw,0.75rem)] font-bold border transition-all cursor-pointer ${
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
                  className="flex-1 bg-background border border-surfaceBorder rounded-xl px-4 py-3 text-[clamp(0.75rem,2vw,0.875rem)] text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover text-white font-extrabold text-[clamp(0.75rem,2vw,0.875rem)] px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Suggestion</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL DISCOVERY: FAMILIAR TO DEEP */}
      <section
        id="global-discovery-box"
        aria-labelledby="global-discovery-heading"
        className="relative z-20 scroll-mt-16 bg-background px-[clamp(1rem,4vw,1.5rem)] py-[clamp(2.5rem,6vw,4rem)]"
      >
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-amber-400 via-emerald-400 to-sky-500 p-[2px] shadow-2xl">
          <div className="relative isolate overflow-hidden rounded-[26px] bg-[#07141a] px-[clamp(1.25rem,4vw,2.75rem)] py-[clamp(2rem,6vw,3rem)] text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="discovery-float absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="discovery-float absolute -right-24 top-28 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="discovery-spin absolute -right-28 -top-36 h-[430px] w-[430px] rounded-full border border-dashed border-amber-300/15" />
              <div className="discovery-spin-reverse absolute -right-12 -top-20 h-[290px] w-[290px]
