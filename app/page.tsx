"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import LandingReels from "../components/LandingReels";
import GlobalSearchBar from "../components/GlobalSearchBar";

import {
  ArrowRight,
  ArrowDown,
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
  MoveHorizontal,
  Wind,
} from "lucide-react";

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

// ============================================================================
// DYNAMIC ROTATOR PHRASES (Hero Section)
// ============================================================================
const ROTATING_PHRASES = [
  "A 5,000-Year Clinical Science.",
  "The Original Precision Medicine.",
  "Neuroscience, Not a Spa Therapy.",
  "Your Ultimate BAMS Scholar Vault.",
];

// ============================================================================
// TEMPORARY STUDENT TESTING ITEMS
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
    title: "Doctor's Differential Diagnosis Hub",
    hindi: "लक्षणों से रोग पहचान एवं अनावश्यक जांच से बचाव",
    href: "/diagnosis-hub",
    badge: "NEW CLINICAL TOOL",
    isPrimary: false,
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

// ============================================================================
// FAMILIARITY HOOKS DATA (Rich Visual Configuration)
// ============================================================================
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

// ============================================================================
// BOTANICAL SPECIMENS (For Batman Mode Scroll Laboratory)
// ============================================================================
const herbs = [
  {
    name: "Turmeric",
    sanskrit: "Haridra",
    botanical: "Curcuma longa",
    color: "#e8aa39",
    kind: "turmeric",
    note: "A familiar golden spice with a long history in Ayurvedic formulations.",
  },
  {
    name: "Tulsi",
    sanskrit: "Tulasi",
    botanical: "Ocimum tenuiflorum",
    color: "#79c98d",
    kind: "tulsi",
    note: "Aromatic leaves traditionally used in herbal preparations.",
  },
  {
    name: "Amla",
    sanskrit: "Amalaki",
    botanical: "Phyllanthus emblica",
    color: "#b8d65e",
    kind: "amla",
    note: "A tart fruit known in Ayurveda and modern food traditions.",
  },
  {
    name: "Ashwagandha",
    sanskrit: "Ashvagandha",
    botanical: "Withania somnifera",
    color: "#d8ad7b",
    kind: "ashwagandha",
    note: "A root used in traditional formulations; safety and evidence depend on context.",
  },
] as const;

type Herb = (typeof herbs)[number];

function Botanical({
  kind,
  color,
  className = "",
}: {
  kind: Herb["kind"];
  color: string;
  className?: string;
}) {
  const leaf = (x: number, y: number, rotate: number, scale = 1) => (
    <g
      key={`${x}-${y}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <path
        d="M0 0 C-25 -29 -19 -62 0 -77 C24 -60 25 -25 0 0Z"
        fill={color}
        stroke="#d6f4b9"
        strokeOpacity=".35"
        strokeWidth="1.5"
      />
      <path
        d="M0 0 L0 -69 M0 -25 L-11 -39 M0 -40 L11 -51"
        fill="none"
        stroke="#173e28"
        strokeOpacity=".6"
        strokeWidth="1.5"
      />
    </g>
  );

  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      role="img"
      aria-label={`${kind} botanical illustration`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`glow-${kind}`}>
          <stop stopColor={color} stopOpacity=".26" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="113" fill={`url(#glow-${kind})`} />
      {kind === "turmeric" ? (
        <>
          <path
            d="M115 185 Q105 130 125 79"
            stroke="#427a4d"
            strokeWidth="6"
            fill="none"
          />
          {leaf(123, 113, -45, 0.8)}
          {leaf(124, 102, 40, 0.8)}
          <g fill="#c87924" stroke="#f5c166" strokeWidth="3">
            <path d="M114 143 C88 129 75 151 83 177 C92 198 118 200 124 181 C142 200 160 184 155 162 C151 142 137 136 114 143Z" />
            <path d="M104 171 Q91 197 111 213 Q131 219 134 191" />
            <path d="M136 172 Q156 187 171 173 Q180 151 159 147" />
          </g>
          <ellipse
            cx="103"
            cy="171"
            rx="12"
            ry="17"
            fill="#f6b43d"
            transform="rotate(-30 103 171)"
          />
        </>
      ) : kind === "amla" ? (
        <>
          <path d="M116 104 L117 65" stroke="#558347" strokeWidth="5" />
          {leaf(116, 91, -48, 0.65)}
          {leaf(117, 88, 55, 0.65)}
          <circle
            cx="119"
            cy="149"
            r="57"
            fill={color}
            stroke="#e2ef9a"
            strokeWidth="3"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d="M119 93 Q95 149 119 205"
              stroke="#60892d"
              strokeOpacity=".3"
              strokeWidth="3"
              fill="none"
              transform={`rotate(${i * 60} 119 149)`}
            />
          ))}
          <ellipse
            cx="99"
            cy="125"
            rx="13"
            ry="23"
            fill="white"
            opacity=".13"
            transform="rotate(30 99 125)"
          />
        </>
      ) : kind === "tulsi" ? (
        <>
          <path
            d="M120 214 Q113 150 120 52"
            stroke="#77aa6a"
            strokeWidth="5"
            fill="none"
          />
          {leaf(120, 170, -53, 0.7)}
          {leaf(119, 159, 55, 0.7)}
          {leaf(120, 126, -52, 0.68)}
          {leaf(120, 113, 52, 0.65)}
          {leaf(120, 82, -35, 0.55)}
          {leaf(120, 75, 40, 0.55)}
          <g fill="#d4b6ee">
            {[0, 1, 2, 3].map((i) => (
              <circle
                key={i}
                cx={120 + (i % 2 ? 7 : -7)}
                cy={42 + i * 11}
                r="4"
              />
            ))}
          </g>
        </>
      ) : (
        <>
          <path
            d="M119 183 Q115 120 120 65"
            stroke="#6a9b6a"
            strokeWidth="5"
            fill="none"
          />
          {leaf(118, 125, -45, 0.55)}
          {leaf(119, 119, 43, 0.55)}
          {leaf(119, 89, -45, 0.5)}
          {leaf(119, 82, 45, 0.5)}
          <g fill="#b98256" stroke="#e4bd8c" strokeWidth="3">
            <path d="M119 166 C99 171 97 196 110 213 Q120 225 126 204 C142 223 151 210 141 190 Q151 175 130 167Z" />
          </g>
          <g fill="#d75551">
            {[0, 1, 2, 3].map((i) => (
              <circle
                key={i}
                cx={98 + i * 14}
                cy={115 + (i % 2) * 12}
                r="5"
              />
            ))}
          </g>
        </>
      )}
    </svg>
  );
}

// ============================================================================
// DYNAMIC VISUAL COMPONENT (Global Discovery Cards)
// ============================================================================
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
            <Flower2 className="h-14 w-14 text-emerald-100" strokeWidth={1.3} />
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

// ============================================================================
// SCROLL HOOKS & WORD REVEAL HELPERS
// ============================================================================
function usePageScroll() {
  const [y, setY] = useState(0);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setY(window.scrollY);
        setVh(window.innerHeight);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { y, vh };
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(media.matches);
    change();
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  return reduced;
}

function getSectionProgress(
  ref: React.RefObject<HTMLElement | null>,
  y: number,
  vh: number
) {
  const node = ref.current;
  if (!node || vh <= 0) return 0;
  const top = node.getBoundingClientRect().top + y;
  return clamp((y - top) / Math.max(1, node.offsetHeight - vh));
}

function RevealWords({ text, progress }: { text: string; progress: number }) {
  const words = text.split(" ");
  return (
    <p className="max-w-5xl text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.17] tracking-tight text-center">
      {words.map((word, i) => {
        const activeAmount = clamp(progress * words.length - i);
        return (
          <span
            key={i}
            className="inline-block mr-[.26em] transition-colors duration-75"
            style={{
              color:
                activeAmount > 0.85
                  ? "#f8fafc"
                  : `rgba(239, 68, 68, ${0.18 + 0.82 * activeAmount})`,
              textShadow:
                activeAmount > 0.85
                  ? "0 0 25px rgba(239, 68, 68, 0.45)"
                  : "none",
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT (Standard Mode + Batman Scroll-Laboratory Dashboard)
// ============================================================================
export default function LandingPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [feedbackText, setFeedbackText] = useState("");
  const [selectedQuickTag, setSelectedQuickTag] = useState<string>("");
  const [activeHook, setActiveHook] = useState<number>(0);
  const [activePhrase, setActivePhrase] = useState(0);

  // Scroll Laboratory State (Used in Batman Mode)
  const { y, vh } = usePageScroll();
  const reduced = useReducedMotion();
  const storyRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const extractRef = useRef<HTMLElement>(null);
  const bridgeRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);

  const [selectedHerbIdx, setSelectedHerbIdx] = useState(0);
  const [showLabels, setShowLabels] = useState(true);
  const [pauseMotion, setPauseMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth Rotator Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
  const selectedHerb = herbs[selectedHerbIdx];
  const isBatman =
    mounted && (theme === "batman" || resolvedTheme === "batman");

  // Scroll Progress Calculations for Batman Mode
  const motionOff = reduced || pauseMotion;
  const rawStory = getSectionProgress(storyRef, y, vh);
  const rawGallery = getSectionProgress(galleryRef, y, vh);
  const rawExtraction = getSectionProgress(extractRef, y, vh);
  const rawBridge = getSectionProgress(bridgeRef, y, vh);
  const rawFinale = getSectionProgress(finaleRef, y, vh);

  const story = motionOff ? 1 : rawStory;
  const gallery = motionOff ? 0.5 : rawGallery;
  const extraction = motionOff ? 0.75 : rawExtraction;
  const bridge = motionOff ? 1 : rawBridge;
  const finale = motionOff ? 1 : rawFinale;

  const pageHeight =
    typeof document === "undefined"
      ? 1
      : Math.max(1, document.documentElement.scrollHeight - vh);
  const total = clamp(y / pageHeight);

  // ==========================================================================
  // BATMAN MODE ONLY: SCROLL-REACTIVE TACTICAL BOTANICAL DASHBOARD
  // (Includes Experiment 019 Scroll Architecture + 100% of Existing Home Content)
  // ==========================================================================
  if (isBatman) {
    return (
      <main className="relative min-h-screen bg-transparent text-[#f8f4e8] overflow-x-clip">
        <style>{`
          @keyframes herbDrift { 0%,100% { translate: 0 0; } 50% { translate: 0 -18px; } }
          @keyframes discovery-rotate { to { transform: rotate(360deg); } }
          @keyframes discovery-float { 50% { transform: translateY(-16px); } }
          .herb-drift { animation: herbDrift 7s ease-in-out infinite; }
          .discovery-spin { animation: discovery-rotate 38s linear infinite; }
          .discovery-spin-reverse { animation: discovery-rotate 52s linear infinite reverse; }
          .discovery-float { animation: discovery-float 8s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .herb-drift, .discovery-spin, .discovery-spin-reverse, .discovery-float { animation:none !important; }
            html { scroll-behavior:auto !important; }
          }
        `}</style>

        {/* Top Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 right-0 z-[80] h-1 bg-red-950/50"
          aria-hidden="true"
        >
          <div
            className="h-full bg-gradient-to-r from-red-600 via-[#e5c17b] to-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
            style={{ width: `${total * 100}%` }}
          />
        </div>

        {/* Tactical Sub-Header Controls */}
        <div className="relative z-30 mx-auto max-w-7xl px-5 sm:px-8 pt-4 pb-2 flex flex-wrap gap-4 items-center justify-between">
          <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[.22em] uppercase text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
            BATCOMPUTER // SCROLL-REACTIVE CLINICAL DASHBOARD
          </span>
          <button
            type="button"
            onClick={() => setPauseMotion((v) => !v)}
            aria-pressed={pauseMotion}
            className="rounded-full border border-red-500/40 bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-red-200 hover:bg-red-950/60 cursor-pointer"
          >
            {pauseMotion ? "Enable Scroll Motion" : "Pause Scroll Motion"}
          </button>
        </div>

        {/* ===============================================================
            SECTION 00: FLOATING BOTANICALS + FULL HERO + SEARCH + TRACKS
            =============================================================== */}
        <section className="relative min-h-[92svh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
          {/* Drifting Scroll-Reactive Botanicals in Background */}
          {herbs.map((herb, i) => (
            <div
              key={herb.kind}
              className={`absolute pointer-events-none z-0 ${
                motionOff ? "" : "herb-drift"
              }`}
              style={{
                width:
                  i % 2
                    ? "clamp(110px,20vw,260px)"
                    : "clamp(130px,22vw,300px)",
                left: `${[1, 75, 70, 2][i]}%`,
                top: `${[6, 10, 62, 66][i]}%`,
                opacity: 0.35,
                animationDelay: `${i * -1.3}s`,
                transform: motionOff
                  ? "none"
                  : `translate3d(0,${
                      y * [0.11, -0.08, 0.07, -0.1][i]
                    }px,0) rotate(${y * [0.018, -0.025, 0.03, -0.02][i]}deg)`,
              }}
            >
              <Botanical kind={herb.kind} color={herb.color} />
            </div>
          ))}

          {/* Active Development Phase Warning Box */}
          <div className="max-w-3xl w-full mx-auto mb-8 relative z-20">
            <div className="bg-black/75 backdrop-blur-md border-2 border-red-500/50 rounded-2xl p-4 sm:px-6 sm:py-4 shadow-[0_0_25px_rgba(220,38,38,0.15)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-extrabold text-white">
                    ⚠️ Active Development Phase • यह मंच वर्तमान में निर्माणाधीन है
                  </p>
                  <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                    इस शैक्षणिक पोर्टल को विद्यार्थियों के लिए और अधिक उपयोगी बनाने हेतु आपके अमूल्य सुझाव सादर आमंत्रित हैं।
                  </p>
                </div>
              </div>
              <a
                href="#student-testing-zone"
                className="shrink-0 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Give Feedback ↓
              </a>
            </div>
          </div>

          {/* Center Hero Content */}
          <div className="relative z-10 text-center max-w-5xl w-full mx-auto flex flex-col items-center">
            <Link
              href="/bams-scholar"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/60 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#e5c17b] hover:border-red-400 mb-6"
            >
              <Leaf size={15} className="text-red-500" />
              <span>NCISM BAMS Prof I–III &amp; Ayurveda Global Live</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <h1 className="text-4xl sm:text-7xl lg:text-[clamp(3.5rem,7.5vw,6.5rem)] leading-[.98] font-black tracking-tight">
              SCROLL INTO{" "}
              <span className="block text-[#e5c17b] drop-shadow-[0_0_25px_rgba(220,38,38,0.45)]">
                AYURVEDA.
              </span>
            </h1>

            {/* Dynamic Word Rotator Sub-Banner */}
            <div className="relative h-[2.2em] w-full flex justify-center items-center mt-3 mb-4">
              {ROTATING_PHRASES.map((phrase, index) => (
                <span
                  key={phrase}
                  className={`absolute text-lg sm:text-2xl md:text-3xl font-extrabold text-red-400 transition-all duration-700 ease-in-out w-full text-center px-4 ${
                    index === activePhrase
                      ? "opacity-100 blur-none scale-100 translate-y-0"
                      : "opacity-0 blur-sm scale-95 translate-y-4 pointer-events-none"
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </div>

            <p className="mx-auto max-w-2xl text-white/80 text-sm sm:text-lg leading-relaxed mb-7 bg-black/50 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              Ayurveda is a rigorous medical science, not just a spa therapy.
              Learn authentic clinical Ayurveda from the exact platform that
              trains India&apos;s future BAMS doctors.
            </p>

            {/* Global Search Bar */}
            <div className="w-full max-w-2xl mx-auto mb-7">
              <GlobalSearchBar />
            </div>

            {/* Dual Track Buttons + Start Scroll Button */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/bams-scholar"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-4 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-2.5"
              >
                <Stethoscope className="w-5 h-5" />
                <span>BAMS Scholar Hub (India)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#global-discovery-box"
                className="w-full sm:w-auto bg-black/70 hover:bg-black/90 text-white border-2 border-[#e5c17b]/60 hover:border-[#e5c17b] font-bold px-7 py-4 rounded-xl transition-all flex items-center justify-center gap-2.5"
              >
                <Globe className="w-5 h-5 text-[#e5c17b]" />
                <span>New to Ayurveda? Start Here</span>
                <Sparkles className="w-4 h-4 text-[#e5c17b]" />
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex justify-center gap-2.5 items-center rounded-xl bg-[#e5c17b] px-6 py-4 font-extrabold text-[#182116] hover:bg-[#f4dba2]"
              >
                <span>Scroll Journey</span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ===============================================================
            SECTION 01: STICKY SCROLL WORD REVEAL
            =============================================================== */}
        <section
          id="story"
          ref={storyRef}
          className="relative h-[260svh] bg-black/45 backdrop-blur-[2px] border-t border-red-950/50"
        >
          <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-5 overflow-hidden">
            <p className="absolute top-16 text-xs font-mono tracking-[.25em] uppercase text-[#e5c17b]">
              01 / The familiar becomes fascinating
            </p>
            <div className="absolute w-[min(85vw,650px)] aspect-square rounded-full blur-[110px] bg-red-600/10 pointer-events-none" />
            <RevealWords
              text="You know the golden spice. But have you met Haridra, its traditional identity, and the clinical science behind its use?"
              progress={story}
            />
            <div className="absolute bottom-12 w-52 h-1 bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500"
                style={{ width: `${story * 100}%` }}
              />
            </div>
          </div>
        </section>

        {/* ===============================================================
            SECTION 02: HORIZONTAL SCROLL-DRIVEN HERBARIUM GALLERY
            =============================================================== */}
        <section
          ref={galleryRef}
          className="relative h-[310svh] bg-black/55 backdrop-blur-[2px] border-t border-red-950/50"
        >
          <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden py-16">
            <div className="px-6 sm:px-12 mb-8">
              <p className="text-xs font-mono tracking-[.25em] text-[#e5c17b] uppercase">
                02 / A moving herbarium
              </p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black">
                Four plants. Four clinical stories.
              </h2>
              <p className="mt-3 text-white/65 text-sm">
                Vertical scrolling moves the specimen gallery horizontally across the Batcomputer HUD.
              </p>
            </div>
            <div
              className="flex gap-5 px-[7vw] will-change-transform"
              style={{ transform: `translate3d(-${gallery * 67}%,0,0)` }}
            >
              {herbs.map((herb, i) => (
                <article
                  key={herb.kind}
                  className="relative shrink-0 w-[min(75vw,340px)] min-h-[390px] rounded-3xl border border-red-500/30 bg-[#140707]/85 backdrop-blur-md p-7 overflow-hidden shadow-2xl"
                >
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 20%,${herb.color},transparent 65%)`,
                    }}
                  />
                  <span className="relative text-xs font-mono text-red-400">
                    SPECIMEN 0{i + 1}
                  </span>
                  <Botanical
                    kind={herb.kind}
                    color={herb.color}
                    className="relative h-44 w-full my-2"
                  />
                  <h3 className="relative text-2xl font-black">{herb.name}</h3>
                  <p className="relative text-[#e5c17b] font-bold">
                    {herb.sanskrit}
                  </p>
                  <p className="relative italic text-white/50 text-xs mt-1">
                    {herb.botanical}
                  </p>
                  <p className="relative text-sm text-white/75 mt-4">
                    {herb.note}
                  </p>
                </article>
              ))}
            </div>
            <div className="px-6 sm:px-12 mt-8 flex items-center gap-2 text-white/60 text-xs font-mono">
              <MoveHorizontal size={17} className="text-red-400" /> Scroll to
              explore all four specimens
            </div>
          </div>
        </section>

        {/* ===============================================================
            SECTION 03: INTERACTIVE BOTANICAL SPECIMEN STATION
            =============================================================== */}
        <section
          className="relative px-5 py-24 bg-black/60 backdrop-blur-md border-t border-red-950/50"
          id="specimen-lab"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-between items-end gap-5 mb-8">
              <div>
                <p className="text-[#e5c17b] text-xs font-mono uppercase tracking-[.25em]">
                  03 / Hands-on discovery
                </p>
                <h2 className="mt-3 text-4xl sm:text-6xl font-black">
                  Choose a specimen.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowLabels((v) => !v)}
                className="rounded-xl border border-red-500/40 bg-black/50 px-4 py-2 text-sm cursor-pointer hover:bg-red-950/40"
              >
                {showLabels ? "Hide" : "Show"} scientific labels
              </button>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
              role="group"
              aria-label="Select a botanical specimen"
            >
              {herbs.map((herb, i) => (
                <button
                  key={herb.kind}
                  type="button"
                  onClick={() => setSelectedHerbIdx(i)}
                  aria-pressed={selectedHerbIdx === i}
                  className={`rounded-2xl border p-3 text-left transition-colors cursor-pointer ${
                    selectedHerbIdx === i
                      ? "border-red-500 bg-red-950/40 shadow-[0_0_20px_rgba(220,38,38,0.25)]"
                      : "border-white/15 bg-black/50 hover:border-white/40"
                  }`}
                >
                  <Botanical
                    kind={herb.kind}
                    color={herb.color}
                    className="w-full h-24"
                  />
                  <span className="block text-sm font-bold">{herb.name}</span>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-red-500/30 bg-[#140707]/85 backdrop-blur-md p-6 sm:p-10">
              <div className="relative min-h-72 flex items-center justify-center rounded-3xl bg-black/40 border border-white/10">
                <div
                  className="absolute inset-10 rounded-full blur-3xl opacity-25"
                  style={{ background: selectedHerb.color }}
                />
                <Botanical
                  kind={selectedHerb.kind}
                  color={selectedHerb.color}
                  className={`relative w-64 h-64 ${
                    motionOff ? "" : "herb-drift"
                  }`}
                />
              </div>
              <div>
                <p className="text-xs font-mono text-red-400 uppercase tracking-widest">
                  Botanical study / {String(selectedHerbIdx + 1).padStart(2, "0")}
                </p>
                <h3 className="text-4xl sm:text-5xl font-black mt-3">
                  {selectedHerb.name}
                </h3>
                {showLabels && (
                  <>
                    <p className="text-xl text-[#e5c17b] font-bold mt-2">
                      {selectedHerb.sanskrit}
                    </p>
                    <p className="italic text-white/50 mt-1">
                      {selectedHerb.botanical}
                    </p>
                  </>
                )}
                <p className="text-white/80 mt-6 leading-relaxed">
                  {selectedHerb.note}
                </p>
                <p className="text-white/55 text-sm mt-5">
                  Explore how identity, plant part, preparation, dose, and
                  evidence can change the meaning of a botanical claim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===============================================================
            SECTION 04: SCROLL-CONTROLLED EXTRACTION VISUALIZATION
            =============================================================== */}
        <section
          ref={extractRef}
          className="relative h-[280svh] bg-black/50 backdrop-blur-[2px] border-t border-red-950/50"
        >
          <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-5 overflow-hidden">
            <p className="absolute top-14 text-xs font-mono text-[#e5c17b] uppercase tracking-[.25em]">
              04 / Scroll-controlled extraction
            </p>
            <h2 className="text-center text-3xl sm:text-5xl font-black mb-6">
              From plant to clinical preparation.
            </h2>
            <div className="relative w-[min(90vw,480px)] h-[min(53vh,430px)] flex items-center justify-center">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2"
                style={{
                  transform: `translateX(-50%) translateY(${
                    extraction * 110
                  }px) rotate(${extraction * 180}deg)`,
                  opacity: 1 - extraction * 0.85,
                }}
              >
                <Botanical
                  kind="turmeric"
                  color="#e8aa39"
                  className="w-32 h-32"
                />
              </div>
              <svg
                viewBox="0 0 320 310"
                className="relative w-full h-full"
                aria-label="Illustrated laboratory vessel filling with a golden botanical preparation"
              >
                <defs>
                  <clipPath id="vessel-clip">
                    <path d="M93 80 L93 185 Q93 259 160 259 Q227 259 227 185 L227 80Z" />
                  </clipPath>
                  <linearGradient id="liquid" x1="0" x2="1">
                    <stop stopColor="#991b1b" />
                    <stop offset=".5" stopColor="#f5c65e" />
                    <stop offset="1" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
                <path
                  d="M93 80 L93 185 Q93 259 160 259 Q227 259 227 185 L227 80"
                  fill="#fff"
                  fillOpacity=".04"
                  stroke="#f87171"
                  strokeWidth="5"
                />
                <g clipPath="url(#vessel-clip)">
                  <rect
                    x="90"
                    y={259 - extraction * 165}
                    width="140"
                    height={extraction * 165 + 10}
                    fill="url(#liquid)"
                    opacity=".9"
                  />
                  <path
                    d={`M90 ${259 - extraction * 165} Q125 ${
                      249 - extraction * 165
                    } 160 ${259 - extraction * 165} T230 ${
                      259 - extraction * 165
                    }`}
                    stroke="#ffe0a0"
                    fill="none"
                    strokeWidth="3"
                  />
                </g>
                <path
                  d="M80 80 H240"
                  stroke="#f87171"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <circle
                    key={i}
                    cx={116 + i * 18}
                    cy={210 - extraction * 80 - (i % 3) * 19}
                    r={3 + (i % 3)}
                    fill="#fff1bf"
                    opacity={extraction * 0.85}
                  />
                ))}
              </svg>
            </div>
            <p className="text-white/70 text-center max-w-xl text-sm sm:text-base">
              A visual metaphor for Bhaishajya Kalpana processing—transforming
              raw Dravya into bioavailable clinical formulations.
            </p>
            <p className="mt-5 text-[#e5c17b] font-mono">
              Extraction progress: {Math.round(extraction * 100)}%
            </p>
          </div>
        </section>

        {/* ===============================================================
            SECTION 05: SCROLL KNOWLEDGE BRIDGE + FULL GLOBAL DISCOVERY PORTAL
            =============================================================== */}
        <section
          ref={bridgeRef}
          className="relative h-[240svh] bg-black/55 backdrop-blur-[2px] border-t border-red-950/50"
        >
          <div className="sticky top-0 h-svh flex flex-col justify-center px-5 overflow-hidden">
            <div className="mx-auto max-w-6xl w-full">
              <p className="text-xs font-mono text-[#e5c17b] tracking-[.25em] uppercase">
                05 / A bridge between worlds
              </p>
              <h2 className="text-3xl sm:text-6xl font-black mt-4 mb-10">
                From familiar to profound.
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div
                  className="rounded-3xl border border-[#e5c17b]/40 p-7 sm:p-10 bg-[#24130b]/80 backdrop-blur-md"
                  style={{
                    transform: motionOff
                      ? "none"
                      : `translateY(${(1 - bridge) * 65}px)`,
                    opacity: motionOff ? 1 : 0.35 + bridge * 0.65,
                  }}
                >
                  <Sun className="text-[#e5c17b] mb-5" size={32} />
                  <p className="text-xs uppercase tracking-widest text-[#e5c17b]">
                    What you recognize
                  </p>
                  <h3 className="text-3xl font-bold mt-3">
                    Golden milk &amp; herbal teas
                  </h3>
                  <p className="mt-4 text-white/70">
                    Familiar ingredients, flavors, daily rituals, and wellness
                    trends.
                  </p>
                </div>
                <div
                  className="rounded-3xl border border-red-500/40 p-7 sm:p-10 bg-[#240909]/80 backdrop-blur-md"
                  style={{
                    transform: motionOff
                      ? "none"
                      : `translateY(${(1 - bridge) * -65}px)`,
                    opacity: motionOff ? 1 : 0.35 + bridge * 0.65,
                  }}
                >
                  <BookOpen className="text-red-400 mb-5" size={32} />
                  <p className="text-xs uppercase tracking-widest text-red-400">
                    What you can discover
                  </p>
                  <h3 className="text-3xl font-bold mt-3">
                    Dravyaguna &amp; classical context
                  </h3>
                  <p className="mt-4 text-white/70">
                    Traditional classifications, preparation methods, source
                    texts, and critical evaluation of evidence.
                  </p>
                </div>
              </div>
              <div className="mt-8 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${bridge * 100}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FULL GLOBAL DISCOVERY INTERACTIVE PORTAL (Preserved 100%) */}
        <section
          id="global-discovery-box"
          aria-labelledby="global-discovery-heading"
          className="relative z-20 scroll-mt-16 px-4 py-16 md:px-6 bg-black/65 backdrop-blur-md border-t border-red-950/50"
        >
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-red-600 via-[#e5c17b] to-red-900 p-[2px] shadow-2xl">
            <div className="relative isolate overflow-hidden rounded-[26px] bg-[#0c0404]/95 px-5 py-8 text-white sm:px-8 md:px-11 md:py-12">
              <div className="relative z-10">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-wide text-red-300">
                    <Globe className="h-4 w-4" /> Ayurveda Global · Discovery
                    Portal
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#e5c17b]">
                    <span className="h-2 w-2 rounded-full bg-red-500" /> Start
                    familiar. Go deeper.
                  </span>
                </div>

                <div className="mb-8 max-w-4xl">
                  <h2
                    id="global-discovery-heading"
                    className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
                  >
                    You know the{" "}
                    <span className="text-[#e5c17b]">turmeric latte.</span>
                    <br />
                    Discover the tradition behind it.
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                    From golden milk and wellness routines to doshas and
                    traditional therapies: begin with something you recognize,
                    then explore the ideas, history and evidence behind Ayurveda.
                  </p>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {FAMILIARITY_HOOKS.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = activeHook === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveHook(idx)}
                        aria-pressed={isSelected}
                        className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-black/80 text-left transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "border-red-500 shadow-[0_0_24px_rgba(220,38,38,.25)] scale-[1.02]"
                            : "border-white/15 hover:border-white/40"
                        }`}
                      >
                        <div className="relative h-44 w-full overflow-hidden">
                          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                            <DiscoveryVisual kind={item.visual} />
                          </div>
                          <div
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${item.gradient}`}
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                          <span
                            className={`mb-2 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider ${item.color}`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {item.tag}
                          </span>
                          <p className="mb-2 text-xs italic leading-relaxed text-slate-400">
                            &ldquo;{item.knownAs}&rdquo;
                          </p>
                          <h3 className="mb-2 text-base font-extrabold leading-snug text-white">
                            {item.hookTitle}
                          </h3>
                          <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-300">
                            {item.hookDesc}
                          </p>
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color}`}
                          >
                            {isSelected
                              ? "Currently exploring"
                              : "Reveal the connection"}
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mb-6 overflow-hidden rounded-2xl border border-red-500/30 bg-white/[.05] p-5 backdrop-blur-sm sm:p-7">
                  <div className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#e5c17b]">
                    <Sparkles className="h-4 w-4" /> Your next discovery
                  </div>
                  <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">
                        You already know
                      </p>
                      <h3 className="text-xl font-extrabold text-white">
                        {selected.familiar}
                      </h3>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-6 w-6 rotate-90 text-red-400 md:rotate-0"
                    />
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#e5c17b]">
                        Now discover
                      </p>
                      <h3 className="text-xl font-extrabold text-white">
                        {selected.deeper}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300">
                    {selected.insight}
                  </p>
                  <Link
                    href={selected.href}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white px-5 py-3 text-sm font-extrabold transition-colors sm:w-auto"
                  >
                    {selected.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#e5c17b]/30 bg-black/50 p-5 md:flex-row md:p-6">
                  <div className="flex items-start gap-3">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#e5c17b]/30 bg-[#e5c17b]/10 sm:flex">
                      <BookOpen className="h-6 w-6 text-[#e5c17b]" />
                    </div>
                    <div>
                      <p className="font-extrabold text-white">
                        Ready to explore the complete Ayurveda Global Hub?
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        Continue from familiar concepts to classical
                        foundations, daily practices and deeper learning modules.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/atreya"
                    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#e5c17b] px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-wide text-slate-950 transition-colors hover:bg-amber-300 md:w-auto"
                  >
                    Enter Full Ayurveda Global Hub
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===============================================================
            SECTION 06: DAILY RHYTHM + STUDENT TESTING + BAMS VAULT + PILLARS
            =============================================================== */}
        <section className="bg-black/60 backdrop-blur-md px-5 py-20 border-t border-red-950/50 space-y-20">
          {/* 06A: Daily Rhythm */}
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-mono text-[#e5c17b] tracking-[.25em] uppercase">
              06 / More than ingredients
            </p>
            <h2 className="text-4xl sm:text-6xl font-black mt-3 mb-10">
              A whole daily rhythm.
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Sun,
                  title: "Morning",
                  desc: "Explore how daily routines (Dinacharya) are described in classical Ayurveda.",
                },
                {
                  icon: Wind,
                  title: "Movement",
                  desc: "Compare traditional Vyayama practices with modern wellbeing guidance.",
                },
                {
                  icon: Moon,
                  title: "Rest",
                  desc: "Discover the role of sleep (Nidra) and regularity without exaggerated promises.",
                },
              ].map((item, i) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-[#140707]/80 border border-red-500/30 p-8"
                >
                  <item.icon size={36} className="text-[#e5c17b] mb-6" />
                  <span className="block text-xs font-mono text-red-400">
                    0{i + 1} / Daily living
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* 06B: Student Testing & Feedback Lab (Preserved 100%) */}
          <div id="student-testing-zone" className="max-w-6xl mx-auto scroll-mt-20">
            <div className="bg-[#120505]/90 border-2 border-red-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-red-400 mb-1">
                  <FlaskRound className="w-4 h-4" /> Student Testing &amp;
                  Feedback Lab • छात्र परीक्षण एवं सुझाव केंद्र
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Help Us Choose the Best Design for Your Studies
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1">
                  नीचे दिए गए नए डिज़ाइन पेजों को खोलकर देखें और हमें बताएं कि अध्ययन के लिए कौन-सा प्रारूप सबसे सरल और उपयोगी है:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {TEMP_DEV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      item.isPrimary
                        ? "bg-red-600/20 border-red-500 hover:bg-red-600 text-white"
                        : "bg-black/60 border-white/15 hover:border-red-500/60 text-white"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-red-500/25 text-[#e5c17b]">
                          {item.badge}
                        </span>
                        <FlaskRound className="w-4 h-4 opacity-70" />
                      </div>
                      <h3 className="font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-xs text-white/75 leading-relaxed">
                        {item.hindi}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-[#e5c17b]">
                      <span>Open Page to Test</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>

              <form
                onSubmit={handleSendFeedback}
                className="bg-black/60 border border-white/15 rounded-2xl p-5 space-y-3"
              >
                <label className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2">
                  <MessageSquarePlus className="w-4 h-4 text-red-400" />
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
                          ? "bg-red-600 text-white border-red-500"
                          : "bg-black/60 text-white/80 border-white/15 hover:border-red-500/50"
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
                    className="flex-1 bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Suggestion</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* 06C: BAMS Scholar & 2nd Prof Vault (Preserved 100%) */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#260707]/90 to-black/90 border border-red-500/40 rounded-3xl p-6 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="w-16 h-16 bg-red-500/15 rounded-full flex items-center justify-center shrink-0 border border-red-500/40">
                  <Leaf className="w-8 h-8 text-[#e5c17b]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-red-500/20 text-[10px] uppercase font-bold tracking-widest text-[#e5c17b] mb-3 border border-red-500/40">
                    <Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS
                    Curriculum
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                    BAMS Scholar &amp; 2nd Prof Vault
                  </h2>
                  <p className="text-white/80 max-w-xl leading-relaxed text-sm md:text-base">
                    Track your 1st, 2nd &amp; 3rd Prof syllabus, decode
                    high-yield Sanskrit Shlokas, and access interactive Charaka
                    Samhita MCQs &amp; university exam papers.
                  </p>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
                <Link
                  href="/bams-scholar"
                  className="w-full md:w-auto bg-[#e5c17b] hover:bg-amber-300 text-black font-extrabold py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Open BAMS Scholar Hub <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/bams-hub"
                  className="w-full md:w-auto bg-red-950/50 hover:bg-red-900/60 text-white border border-red-500/40 font-bold py-2.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#e5c17b]" /> Direct
                  to 2nd Prof Command Center
                </Link>
              </div>
            </div>
          </div>

          {/* 06D: 3 Core Pillars Grid (Preserved 100%) */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold mb-2">
                ATREYA Med • Clinical &amp; Academic Ecosystem
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Why Scholars &amp; Global Learners Choose ATREYA Med
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/bams-scholar"
                className="group bg-[#140707]/85 p-8 border border-red-500/30 hover:border-red-500 rounded-3xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-red-500/15 rounded-full flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    NCISM &amp; AIAPGET Mastery
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-6">
                    Complete year-wise BAMS (1st, 2nd &amp; 3rd Prof) syllabus
                    checklists, Shloka memorization tricks, simplified Samhita
                    breakdowns, and previous year question papers.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e5c17b]">
                  Open BAMS Scholar Hub{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/interactive-topics"
                className="group bg-[#140707]/85 p-8 border border-red-500/30 hover:border-red-500 rounded-3xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-red-500/15 rounded-full flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Evidence-Based Clinical Modules
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-6">
                    Go beyond generic wellness trends. Explore interactive
                    clinical modules that connect classical Dravyaguna and
                    Panchakarma to modern neuro-physiology.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e5c17b]">
                  Explore Clinical Modules{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/e-books"
                className="group bg-[#140707]/85 p-8 border border-red-500/30 hover:border-red-500 rounded-3xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-red-500/15 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-[#e5c17b]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Unshakeable Clinical Aura
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-6">
                    Master bedside case-taking, viva-voce examination
                    confidence, and scientific communication so you command
                    respect in any medical symposium worldwide.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e5c17b]">
                  Open 3D E-Book Library{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===============================================================
            SECTION 07: SCROLL-SCALING FINALE + REELS + UPI SUPPORT
            =============================================================== */}
        <section
          ref={finaleRef}
          className="relative h-[200svh] bg-black/50 backdrop-blur-[2px] border-t border-red-950/50"
        >
          <div className="sticky top-0 h-svh flex items-center justify-center px-5 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%,rgba(220,38,38,${
                  finale * 0.25
                }),transparent 62%)`,
              }}
            />
            <div
              className="relative text-center max-w-5xl"
              style={{
                transform: motionOff
                  ? "none"
                  : `scale(${0.75 + finale * 0.25})`,
                opacity: motionOff ? 1 : clamp(finale * 2),
              }}
            >
              <Sparkles className="mx-auto text-[#e5c17b] mb-8" size={44} />
              <p className="text-xs font-mono text-[#e5c17b] uppercase tracking-[.25em]">
                07 / Your next chapter
              </p>
              <h2 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[.98]">
                THE PLANT IS{" "}
                <span className="block text-[#e5c17b]">
                  ONLY THE BEGINNING.
                </span>
              </h2>
              <p className="text-white/70 mt-8 text-lg">
                Explore Ayurveda with curiosity, context, and clinical evidence.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/atreya"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#e5c17b] px-6 py-4 font-bold text-[#142016] hover:bg-[#f3d99f]"
                >
                  Explore Ayurveda Global <ArrowRight size={18} />
                </Link>
                <Link
                  href="/diagnosis-hub"
                  className="inline-flex items-center gap-2 rounded-xl border border-red-500/50 bg-red-950/40 px-6 py-4 font-bold text-white hover:bg-red-600"
                >
                  Open Diagnosis Hub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reels & Community Support (Preserved 100%) */}
        <LandingReels />

        <div className="bg-black/75 backdrop-blur-md border-t border-red-950/50 py-16 px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#140707]/90 border border-red-500/30 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 text-xs md:text-sm font-bold text-red-400 mb-6 border border-red-500/30">
                  <Heart className="w-4 h-4 fill-current text-red-500" />{" "}
                  Support ATREYA Med
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Help Us Take Authentic Ayurveda to the World
                </h2>
                <p className="text-white/75 text-sm md:text-lg leading-relaxed">
                  We are on a mission to digitize classical Samhitas, provide
                  free high-yield exam tools for BAMS scholars across India, and
                  establish Ayurveda globally as a respected clinical science.
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl shadow-md mb-3">
                  <Image
                    src="/QR_1780487966.png"
                    alt="Support ATREYA Med via UPI"
                    width={160}
                    height={160}
                    className="object-contain w-40 h-40 md:w-48 md:h-48"
                  />
                </div>
                <p className="text-xs font-bold text-white/60 uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#e5c17b]" /> Secure UPI
                  Contribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ==========================================================================
  // STANDARD LIGHT & DARK MODE HOME PAGE (Preserved 100%)
  // ==========================================================================
  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      <style>{`
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,1.25rem)]">
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
              <div className="discovery-spin-reverse absolute -right-12 -top-20 h-[290px] w-[290px] rounded-full border border-emerald-300/15" />
            </div>

            <div className="relative z-10">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-wide text-amber-200">
                  <Globe className="h-4 w-4" /> Ayurveda Global · Discovery
                  Portal
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Start
                  familiar. Go deeper.
                </span>
              </div>

              <div className="mb-[clamp(1.5rem,4vw,2rem)] max-w-4xl">
                <p className="mb-3 text-[clamp(0.65rem,1.5vw,0.75rem)] font-bold uppercase tracking-[.2em] text-emerald-300">
                  A different way to discover Ayurveda
                </p>
                <h2
                  id="global-discovery-heading"
                  className="mb-4 font-heading text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-white"
                >
                  You know the{" "}
                  <span className="text-amber-300">turmeric latte.</span>
                  <br />
                  Discover the tradition behind it.
                </h2>
                <p className="max-w-3xl text-[clamp(0.875rem,2vw,1rem)] leading-relaxed text-slate-300">
                  From golden milk and wellness routines to doshas and
                  traditional therapies: begin with something you recognize,
                  then explore the ideas, history and evidence behind Ayurveda.
                </p>
              </div>

              <div className="mb-[clamp(1.5rem,4vw,2rem)] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {FAMILIARITY_HOOKS.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = activeHook === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveHook(idx)}
                      aria-pressed={isSelected}
                      aria-controls="discovery-detail"
                      className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-slate-900/80 text-left transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? `${item.ring} shadow-[0_0_24px_rgba(212,175,55,.12)] scale-[1.02]`
                          : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      <div className="relative h-44 w-full overflow-hidden">
                        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                          <DiscoveryVisual kind={item.visual} />
                        </div>
                        <div
                          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${item.gradient}`}
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <span
                          className={`mb-2 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider ${item.color}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {item.tag}
                        </span>
                        <p className="mb-2 text-[clamp(0.7rem,1.5vw,0.75rem)] italic leading-relaxed text-slate-400">
                          &ldquo;{item.knownAs}&rdquo;
                        </p>
                        <h3 className="mb-2 text-[clamp(0.9rem,2vw,1rem)] font-extrabold leading-snug text-white">
                          {item.hookTitle}
                        </h3>
                        <p className="mb-4 flex-1 text-[clamp(0.7rem,1.5vw,0.75rem)] leading-relaxed text-slate-300">
                          {item.hookDesc}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1.5 text-[clamp(0.7rem,1.5vw,0.75rem)] font-bold ${item.color}`}
                        >
                          {isSelected
                            ? "Currently exploring"
                            : "Reveal the connection"}
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div
                id="discovery-detail"
                aria-live="polite"
                aria-atomic="true"
                className="mb-[clamp(1.5rem,4vw,2rem)] overflow-hidden rounded-2xl border border-white/15 bg-white/[.06] p-[clamp(1.25rem,4vw,1.75rem)] backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-2 text-[clamp(0.65rem,1.5vw,0.75rem)] font-extrabold uppercase tracking-widest text-amber-200">
                  <Sparkles className="h-4 w-4" /> Your next discovery
                </div>
                <div className="grid gap-[clamp(1rem,3vw,1.25rem)] md:grid-cols-[1fr_auto_1fr] md:items-center">
                  <div>
                    <p className="mb-1 text-[clamp(0.65rem,1.5vw,0.75rem)] font-bold uppercase tracking-wide text-slate-400">
                      You already know
                    </p>
                    <h3 className="text-[clamp(1.125rem,2.5vw,1.25rem)] font-extrabold text-white">
                      {selected.familiar}
                    </h3>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-6 w-6 rotate-90 text-amber-300 md:rotate-0"
                  />
                  <div>
                    <p className="mb-1 text-[clamp(0.65rem,1.5vw,0.75rem)] font-bold uppercase tracking-wide text-emerald-300">
                      Now discover
                    </p>
                    <h3 className="text-[clamp(1.125rem,2.5vw,1.25rem)] font-extrabold text-white">
                      {selected.deeper}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 max-w-4xl text-[clamp(0.875rem,2vw,0.875rem)] leading-relaxed text-slate-300">
                  {selected.insight}
                </p>
                <Link
                  href={selected.href}
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-[clamp(0.875rem,2vw,0.875rem)] font-extrabold transition-colors sm:w-auto ${selected.button}`}
                >
                  {selected.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-amber-300/25 bg-gradient-to-r from-amber-300/10 to-emerald-300/10 p-[clamp(1.25rem,4vw,1.5rem)] md:flex-row">
                <div className="flex items-start gap-3">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10 sm:flex">
                    <BookOpen className="h-6 w-6 text-amber-200" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white text-[clamp(0.9rem,2vw,1rem)]">
                      Ready to explore the complete Ayurveda Global Hub?
                    </p>
                    <p className="mt-1 text-[clamp(0.8rem,1.8vw,0.875rem)] leading-relaxed text-slate-300">
                      Continue from familiar concepts to classical foundations,
                      daily practices and deeper learning modules.
                    </p>
                  </div>
                </div>
                <Link
                  href="/atreya"
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-center text-[clamp(0.75rem,1.5vw,0.75rem)] font-extrabold uppercase tracking-wide text-slate-950 transition-colors hover:bg-amber-300 md:w-auto"
                >
                  Enter Full Ayurveda Global Hub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BAMS SCHOLAR & 2ND PROF VAULT */}
      <div className="bg-background py-[clamp(1.5rem,4vw,2.5rem)] px-[clamp(1rem,4vw,1.5rem)] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-2xl p-[clamp(1.5rem,4vw,3rem)] shadow-lg flex flex-col md:flex-row items-center justify-between gap-[clamp(1.5rem,4vw,2rem)] relative overflow-hidden group hover:border-amber-700/50 transition-colors duration-500 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-[clamp(1rem,3vw,1.5rem)] relative z-10 w-full md:w-auto text-center md:text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30 shadow-inner">
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-amber-800 dark:text-amber-500" />
              </div>
              <div>
                <div className="inline-flex items-center justify-center md:justify-start gap-1.5 px-2.5 md:px-3 py-1 rounded-sm bg-amber-500/15 text-[clamp(0.55rem,1.5vw,0.625rem)] uppercase font-bold tracking-widest text-amber-950 dark:text-amber-400 mb-2 md:mb-3 border border-amber-600/30">
                  <Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS
                  Curriculum
                </div>
                <h2 className="font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-foreground mb-2 md:mb-3">
                  BAMS Scholar &amp; 2nd Prof Vault
                </h2>
                <p className="text-foreground/80 font-medium max-w-xl leading-relaxed mx-auto md:mx-0 text-[clamp(0.875rem,2vw,1rem)]">
                  Track your 1st, 2nd &amp; 3rd Prof syllabus, decode high-yield
                  Sanskrit Shlokas, and access interactive Charaka Samhita MCQs
                  &amp; university exam papers.
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
                className="w-full md:w-auto bg-amber-500/15 hover:bg-amber-500/25 text-amber-950 dark:text-amber-300 border border-amber-700/40 dark:border-amber-500/40 font-bold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-[clamp(0.7rem,1.5vw,0.75rem)]"
              >
                <CheckCircle className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />{" "}
                Direct to 2nd Prof Command Center
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CORE PILLARS GRID */}
      <div className="bg-surface backdrop-blur-md border-t border-surfaceBorder py-[clamp(3rem,8vw,5rem)] px-[clamp(1rem,4vw,1.5rem)] relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-[clamp(2.5rem,6vw,4rem)]">
            <p className="text-[clamp(0.65rem,1.5vw,0.75rem)] uppercase tracking-widest text-primary font-bold mb-2">
              ATREYA Med • Clinical &amp; Academic Ecosystem
            </p>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-foreground mb-4">
              Why Scholars &amp; Global Learners Choose ATREYA Med
            </h2>
            <p className="text-foreground/60 font-medium max-w-2xl mx-auto text-[clamp(0.875rem,2vw,1rem)]">
              Bridging classical Sanskrit Samhitas with modern biomedical
              evidence, structured exam preparation, and clinical authority.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]">
            <Link
              href="/bams-scholar"
              className="group bg-background p-[clamp(1.5rem,4vw,2rem)] border border-surfaceBorder hover:border-primary/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-[clamp(1.125rem,2.5vw,1.25rem)] font-bold text-foreground mb-3">
                  NCISM &amp; AIAPGET Mastery
                </h3>
                <p className="text-foreground/70 leading-relaxed text-[clamp(0.875rem,2vw,1rem)] mb-6">
                  Complete year-wise BAMS (1st, 2nd &amp; 3rd Prof) syllabus
                  checklists, Shloka memorization tricks, simplified Samhita
                  breakdowns, and previous year question papers.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[clamp(0.7rem,1.5vw,0.75rem)] font-bold uppercase tracking-wider text-primary">
                Open BAMS Scholar Hub{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/interactive-topics"
              className="group bg-background p-[clamp(1.5rem,4vw,2rem)] border border-surfaceBorder hover:border-success/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-heading text-[clamp(1.125rem,2.5vw,1.25rem)] font-bold text-foreground mb-3">
                  Evidence-Based Clinical Modules
                </h3>
                <p className="text-foreground/70 leading-relaxed text-[clamp(0.875rem,2vw,1rem)] mb-6">
                  Go beyond generic wellness trends. Explore interactive
                  clinical modules that connect classical Dravyaguna and
                  Panchakarma to modern neuro-physiology.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[clamp(0.7rem,1.5vw,0.75rem)] font-bold uppercase tracking-wider text-success">
                Explore Clinical Modules{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/e-books"
              className="group bg-background p-[clamp(1.5rem,4vw,2rem)] border border-surfaceBorder hover:border-warning/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-warning" />
                </div>
                <h3 className="font-heading text-[clamp(1.125rem,2.5vw,1.25rem)] font-bold text-foreground mb-3">
                  Unshakeable Clinical Aura
                </h3>
                <p className="text-foreground/70 leading-relaxed text-[clamp(0.875rem,2vw,1rem)] mb-6">
                  Master bedside case-taking, viva-voce examination confidence,
                  and scientific communication so you command respect in any
                  medical symposium worldwide.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[clamp(0.7rem,1.5vw,0.75rem)] font-bold uppercase tracking-wider text-amber-800 dark:text-warning">
                Open 3D E-Book Library{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 6. REELS & COMMUNITY SUPPORT */}
      <LandingReels />

      <div className="bg-background border-t border-surfaceBorder py-[clamp(3rem,6vw,5rem)] px-[clamp(1rem,4vw,1.5rem)] relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface backdrop-blur-md border border-surfaceBorder rounded-2xl shadow-sm p-[clamp(1.5rem,4vw,3rem)] flex flex-col md:flex-row items-center gap-[clamp(2rem,4vw,3rem)] relative overflow-hidden">
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-[clamp(0.7rem,1.5vw,0.875rem)] font-bold text-primary mb-4 md:mb-6 border border-primary/20">
                <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current text-primary" />{" "}
                Support ATREYA Med
              </div>
              <h2 className="font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-foreground mb-3 md:mb-4">
                Help Us Take Authentic Ayurveda to the World
              </h2>
              <p className="text-foreground/70 text-[clamp(0.875rem,2vw,1.125rem)] mb-5 md:mb-6 leading-relaxed">
                We are on a mission to digitize classical Samhitas, provide free
                high-yield exam tools for BAMS scholars across India, and
                establish Ayurveda globally as a respected clinical science.
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
              <p className="text-[clamp(0.6rem,1.5vw,0.75rem)] font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-success" /> Secure UPI
                Contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
