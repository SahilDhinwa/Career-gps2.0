"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GlobalSearchBar from "./GlobalSearchBar";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  MoveHorizontal,
  BookOpen,
  Sun,
  Moon,
  Wind,
  Stethoscope,
  ShieldAlert,
  Activity,
  Flame,
  Brain,
  FlaskConical,
} from "lucide-react";

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

const tacticalSpecimens = [
  {
    name: "Haridra Tactical",
    sanskrit: "Curcuma longa · Kanchani",
    botanical: "DIVISION 01 // ANTI-INFLAMMATORY & AGADA",
    color: "#ef4444",
    kind: "turmeric",
    route: "/atreya/gut-brain-pharmacology",
    routeLabel: "Open Absorption Lab",
    note: "Target compound Curcumin requires lipid or Piperine bio-carriers (Anupana) to bypass rapid hepatic glucuronidation and cross the intestinal barrier.",
  },
  {
    name: "Tulasi Sovereign",
    sanskrit: "Ocimum tenuiflorum · Surasa",
    botanical: "DIVISION 02 // PRANAVAHA & IMMUNE SHIELD",
    color: "#f97316",
    kind: "tulsi",
    route: "/diagnosis-hub",
    routeLabel: "Launch Triage Engine",
    note: " deployed in Vata-Kaphaja Jwara and Kasa-Shwasa protocols to clear mucosal channels (Srotoshodhana) and modulate vagal respiratory tone.",
  },
  {
    name: "Amalaki Core",
    sanskrit: "Phyllanthus emblica · Vayastha",
    botanical: "DIVISION 03 // RASAYANA & CELLULAR OJAS",
    color: "#dc2626",
    kind: "amla",
    route: "/bams-scholar",
    routeLabel: "Open BAMS Scholar Vault",
    note: "Five-Rasa Rasayana powerhouse (Lavana-Varjita) that stabilizes Pitta, rebuilds Dhatu resilience, and anchors classical longevity formulations.",
  },
  {
    name: "Ashwagandha Nightfall",
    sanskrit: "Withania somnifera · Balada",
    botanical: "DIVISION 04 // HPA-AXIS & NEURO-RECOVERY",
    color: "#f43f5e",
    kind: "ashwagandha",
    route: "/atreya/science-vault",
    routeLabel: "Inspect Neuro-Vault",
    note: "Withanolide-rich root used to down-regulate reactive cortisol spikes, pacify aggravated Prana Vata, and restore deep slow-wave sleep architecture.",
  },
] as const;

type Specimen = (typeof tacticalSpecimens)[number];

function TacticalBotanical({
  kind,
  color,
  className = "",
}: {
  kind: Specimen["kind"];
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
        fillOpacity="0.82"
        stroke="#fecaca"
        strokeOpacity=".5"
        strokeWidth="1.5"
      />
      <path
        d="M0 0 L0 -69 M0 -25 L-11 -39 M0 -40 L11 -51"
        fill="none"
        stroke="#1f0505"
        strokeOpacity=".75"
        strokeWidth="1.5"
      />
    </g>
  );

  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      role="img"
      aria-label={`${kind} tactical botanical schematic`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`bat-glow-${kind}`}>
          <stop stopColor={color} stopOpacity=".32" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tactical Target Crosshair Ring */}
      <circle cx="120" cy="120" r="110" fill={`url(#bat-glow-${kind})`} />
      <circle
        cx="120"
        cy="120"
        r="96"
        fill="none"
        stroke={color}
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeDasharray="8 6"
      />

      {kind === "turmeric" ? (
        <>
          <path
            d="M115 185 Q105 130 125 79"
            stroke="#991b1b"
            strokeWidth="6"
            fill="none"
          />
          {leaf(123, 113, -45, 0.8)}
          {leaf(124, 102, 40, 0.8)}
          <g fill="#7f1d1d" stroke="#f87171" strokeWidth="2.5">
            <path d="M114 143 C88 129 75 151 83 177 C92 198 118 200 124 181 C142 200 160 184 155 162 C151 142 137 136 114 143Z" />
            <path d="M104 171 Q91 197 111 213 Q131 219 134 191" />
            <path d="M136 172 Q156 187 171 173 Q180 151 159 147" />
          </g>
          <ellipse
            cx="103"
            cy="171"
            rx="12"
            ry="17"
            fill="#ef4444"
            transform="rotate(-30 103 171)"
          />
        </>
      ) : kind === "amla" ? (
        <>
          <path d="M116 104 L117 65" stroke="#991b1b" strokeWidth="5" />
          {leaf(116, 91, -48, 0.65)}
          {leaf(117, 88, 55, 0.65)}
          <circle
            cx="119"
            cy="149"
            r="57"
            fill={color}
            fillOpacity="0.85"
            stroke="#fca5a5"
            strokeWidth="2.5"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d="M119 93 Q95 149 119 205"
              stroke="#450a0a"
              strokeOpacity=".45"
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
            opacity=".16"
            transform="rotate(30 99 125)"
          />
        </>
      ) : kind === "tulsi" ? (
        <>
          <path
            d="M120 214 Q113 150 120 52"
            stroke="#b91c1c"
            strokeWidth="5"
            fill="none"
          />
          {leaf(120, 170, -53, 0.7)}
          {leaf(119, 159, 55, 0.7)}
          {leaf(120, 126, -52, 0.68)}
          {leaf(120, 113, 52, 0.65)}
          {leaf(120, 82, -35, 0.55)}
          {leaf(120, 75, 40, 0.55)}
          <g fill="#fca5a5">
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
            stroke="#991b1b"
            strokeWidth="5"
            fill="none"
          />
          {leaf(118, 125, -45, 0.55)}
          {leaf(119, 119, 43, 0.55)}
          {leaf(119, 89, -45, 0.5)}
          {leaf(119, 82, 45, 0.5)}
          <g fill="#7f1d1d" stroke="#fca5a5" strokeWidth="2.5">
            <path d="M119 166 C99 171 97 196 110 213 Q120 225 126 204 C142 223 151 210 141 190 Q151 175 130 167Z" />
          </g>
          <g fill="#ef4444">
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
        const wordStrength = clamp(progress * words.length - i);
        return (
          <span
            key={i}
            className="inline-block mr-[.26em] transition-colors duration-150"
            style={{
              color:
                wordStrength > 0.65
                  ? `rgba(255, 240, 240, ${0.2 + 0.8 * wordStrength})`
                  : `rgba(239, 68, 68, ${0.15 + 0.85 * wordStrength})`,
              textShadow:
                wordStrength > 0.8
                  ? "0 0 24px rgba(220, 38, 38, 0.45)"
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

export default function BatmanScrollDashboard() {
  const { y, vh } = usePageScroll();
  const reduced = useReducedMotion();

  const storyRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const extractRef = useRef<HTMLElement>(null);
  const bridgeRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);

  const [selected, setSelected] = useState(0);
  const [showLabels, setShowLabels] = useState(true);
  const [pauseMotion, setPauseMotion] = useState(false);

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
  const selectedSpecimen = tacticalSpecimens[selected];

  return (
    <div className="relative min-h-screen bg-transparent text-[#f8f4e8] overflow-x-clip selection:bg-red-600 selection:text-white">
      <style>{`
        @keyframes batHerbDrift { 0%,100% { translate: 0 0; } 50% { translate: 0 -18px; } }
        .bat-herb-drift { animation: batHerbDrift 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .bat-herb-drift { animation:none !important; } }
      `}</style>

      {/* TOP CRIMSON SCROLL PROGRESS LASER */}
      <div
        className="fixed top-0 left-0 right-0 z-[80] h-1 bg-red-950/40 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-red-700 via-red-500 to-amber-500 shadow-[0_0_12px_#ff1a1a]"
          style={{ width: `${total * 100}%` }}
        />
      </div>

      {/* TACTICAL SUB-HEADER BAR */}
      <div className="relative z-30 mx-auto max-w-7xl px-5 sm:px-8 pt-4 pb-2 flex flex-wrap gap-4 items-center justify-between border-b border-red-950/60 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-[11px] font-mono tracking-[.22em] uppercase text-red-400 font-bold">
            BATMAN TACTICAL DASHBOARD // SECTOR V-G ACTIVE
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/diagnosis-hub"
            className="rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1.5 text-xs font-bold text-red-300 hover:bg-red-600 hover:text-white transition-colors"
          >
            ⚕️ Diagnosis Hub
          </Link>
          <Link
            href="/short-notes/swasth-vritta/paper-1/chapter-1"
            className="rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 text-xs font-bold text-gray-300 hover:border-red-500/50 hover:text-white transition-colors"
          >
            📒 Arkham Notes
          </Link>
          <button
            type="button"
            onClick={() => setPauseMotion((v) => !v)}
            aria-pressed={pauseMotion}
            className="rounded-full border border-red-500/30 bg-black/60 px-3.5 py-1.5 text-xs font-mono text-red-300 hover:bg-red-950/50 cursor-pointer"
          >
            {pauseMotion ? "ENABLE MOTION" : "PAUSE MOTION"}
          </button>
        </div>
      </div>

      {/* =================================================================
          00 / HERO SECTION: FLOATING TACTICAL BOTANICALS & COMMAND SEARCH
          ================================================================= */}
      <section className="relative min-h-[90svh] flex items-center justify-center px-6 py-16 overflow-hidden">
        {/* Subtle radial vignette that keeps the BatcaveBackground visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(127,29,29,0.16) 0%, rgba(5,1,1,0.45) 70%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* 4 Scroll-Reactive Floating Tactical Botanicals */}
        {tacticalSpecimens.map((herb, i) => (
          <div
            key={herb.kind}
            className={`absolute pointer-events-none ${
              motionOff ? "" : "bat-herb-drift"
            }`}
            style={{
              width:
                i % 2
                  ? "clamp(110px,19vw,260px)"
                  : "clamp(130px,22vw,295px)",
              left: `${[1, 75, 70, 2][i]}%`,
              top: `${[6, 10, 60, 65][i]}%`,
              opacity: 0.48,
              animationDelay: `${i * -1.3}s`,
              transform: motionOff
                ? "none"
                : `translate3d(0,${
                    y * [0.11, -0.08, 0.07, -0.1][i]
                  }px,0) rotate(${y * [0.018, -0.025, 0.03, -0.02][i]}deg)`,
            }}
          >
            <TacticalBotanical kind={herb.kind} color={herb.color} />
          </div>
        ))}

        <div className="relative z-10 text-center max-w-5xl w-full">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-black/65 px-4 py-2 text-xs font-mono uppercase tracking-widest text-red-400 shadow-[0_0_20px_rgba(220,38,38,0.25)]">
            <Stethoscope size={15} /> ATREYA MED // NIGHTFALL CLINICAL MAINFRAME
          </span>

          <h1 className="mt-7 text-5xl sm:text-7xl lg:text-[clamp(4.5rem,9.5vw,8.5rem)] leading-[.95] font-black tracking-[-.06em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            COMMAND THE{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">
              CLINICAL NIGHT.
            </span>
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-gray-300 text-base sm:text-xl leading-relaxed bg-black/45 backdrop-blur-xs rounded-2xl p-3 border border-red-950/40">
            5,000 years of Ayurvedic precision medicine integrated with
            modern differential triage, NCISM BAMS vaults, and tactical
            pharmacology.
          </p>

          {/* Integrated Global Search Bar */}
          <div className="mt-7 max-w-2xl mx-auto">
            <GlobalSearchBar />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/diagnosis-hub"
              className="inline-flex gap-2.5 items-center rounded-full bg-red-600 px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider text-white hover:bg-red-500 shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all"
            >
              <Activity size={18} /> Open Diagnosis Hub
            </Link>
            <Link
              href="/bams-scholar"
              className="inline-flex gap-2.5 items-center rounded-full border border-red-500/50 bg-black/70 px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider text-red-300 hover:bg-red-950/60 transition-all"
            >
              BAMS Scholar Vault <ArrowRight size={17} />
            </Link>
            <a
              href="#story"
              className="inline-flex gap-2 items-center rounded-full border border-white/20 bg-black/50 px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white"
            >
              Scroll Telemetry <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================
          01 / SCROLL WORD REVEAL
          ================================================================= */}
      <section
        id="story"
        ref={storyRef}
        className="relative h-[280svh] bg-black/55 backdrop-blur-[2px] border-t border-red-950/50"
      >
        <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-5 overflow-hidden">
          <p className="absolute top-16 text-xs font-mono tracking-[.25em] uppercase text-red-400">
            01 / Eliminate the diagnostic noise
          </p>
          <div className="absolute w-[min(85vw,650px)] aspect-square rounded-full blur-[110px] bg-red-600/15 pointer-events-none" />
          <RevealWords
            text="Medicine is not guesswork. Every symptom is a signal. Narrow the differential, protect the patient from unnecessary tests, and master the Samhitas."
            progress={story}
          />
          <div className="absolute bottom-12 w-56 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 shadow-[0_0_10px_#ff1a1a]"
              style={{ width: `${story * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* =================================================================
          02 / HORIZONTAL MOVING SPECIMEN & DIVISION GALLERY
          ================================================================= */}
      <section
        ref={galleryRef}
        className="relative h-[320svh] bg-[#0b0202]/65 backdrop-blur-[2px] border-t border-red-950/50"
      >
        <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden py-16">
          <div className="px-6 sm:px-12 mb-8">
            <p className="text-xs font-mono tracking-[.25em] text-red-400 uppercase">
              02 / Moving Tactical Herbarium
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white">
              Four Specimens. Four Clinical Divisions.
            </h2>
            <p className="mt-2 text-gray-400 text-sm">
              Vertical scrolling drives the horizontal specimen telemetry track.
            </p>
          </div>

          <div
            className="flex gap-5 px-[7vw] will-change-transform"
            style={{ transform: `translate3d(-${gallery * 65}%,0,0)` }}
          >
            {tacticalSpecimens.map((herb, i) => (
              <article
                key={herb.kind}
                className="relative shrink-0 w-[min(78vw,350px)] min-h-[410px] rounded-3xl border border-red-500/30 bg-[#120404]/90 p-7 overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              >
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 20%,${herb.color},transparent 65%)`,
                  }}
                />
                <div>
                  <span className="relative text-[11px] font-mono text-red-400/80 uppercase tracking-widest">
                    SPECIMEN 0{i + 1}
                  </span>
                  <TacticalBotanical
                    kind={herb.kind}
                    color={herb.color}
                    className="relative h-40 w-full my-2"
                  />
                  <h3 className="relative text-2xl font-black text-white">
                    {herb.name}
                  </h3>
                  <p className="relative text-red-400 font-bold text-sm mt-0.5">
                    {herb.sanskrit}
                  </p>
                  <p className="relative font-mono text-white/50 text-[10px] mt-1">
                    {herb.botanical}
                  </p>
                  <p className="relative text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                    {herb.note}
                  </p>
                </div>

                <Link
                  href={herb.route}
                  className="relative mt-5 inline-flex items-center justify-between rounded-xl bg-red-600/20 border border-red-500/40 px-4 py-2.5 text-xs font-bold text-red-200 hover:bg-red-600 hover:text-white transition-colors"
                >
                  <span>{herb.routeLabel}</span>
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>

          <div className="px-6 sm:px-12 mt-8 flex items-center gap-2 text-red-300/60 text-xs font-mono">
            <MoveHorizontal size={17} /> SCROLL TO SCAN ALL FOUR TACTICAL SPECIMENS
          </div>
        </div>
      </section>

      {/* =================================================================
          03 / INTERACTIVE SPECIMEN & COMMAND STATION
          ================================================================= */}
      <section
        className="relative px-5 py-24 bg-black/65 backdrop-blur-xs border-t border-red-950/50"
        id="specimen-lab"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-8">
            <div>
              <p className="text-red-400 text-xs font-mono uppercase tracking-[.25em]">
                03 / Hands-On Specimen Analyzer
              </p>
              <h2 className="mt-3 text-4xl sm:text-6xl font-black text-white">
                Inspect the Pharmacology.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowLabels((v) => !v)}
              className="rounded-xl border border-red-500/40 bg-red-950/30 px-4 py-2 text-xs font-mono uppercase tracking-wider text-red-300 hover:bg-red-900/40 cursor-pointer"
            >
              {showLabels ? "Hide" : "Show"} Sanskrit Telemetry
            </button>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
            role="group"
            aria-label="Select a tactical botanical specimen"
          >
            {tacticalSpecimens.map((herb, i) => (
              <button
                key={herb.kind}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                className={`rounded-2xl border p-3 text-left transition-all cursor-pointer ${
                  selected === i
                    ? "border-red-500 bg-red-950/45 shadow-[0_0_20px_rgba(220,38,38,0.25)]"
                    : "border-white/15 bg-black/50 hover:border-red-500/40"
                }`}
              >
                <TacticalBotanical
                  kind={herb.kind}
                  color={herb.color}
                  className="w-full h-24"
                />
                <span className="block text-sm font-bold text-white mt-1">
                  {herb.name}
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-red-500/35 bg-[#120404]/90 p-6 sm:p-10 shadow-2xl">
            <div className="relative min-h-72 flex items-center justify-center rounded-3xl bg-black/60 border border-red-950/60">
              <div
                className="absolute inset-10 rounded-full blur-3xl opacity-25"
                style={{ background: selectedSpecimen.color }}
              />
              <TacticalBotanical
                kind={selectedSpecimen.kind}
                color={selectedSpecimen.color}
                className={`relative w-64 h-64 ${
                  motionOff ? "" : "bat-herb-drift"
                }`}
              />
            </div>
            <div>
              <p className="text-xs font-mono text-red-400 uppercase tracking-widest">
                TACTICAL DOSSIER / {String(selected + 1).padStart(2, "0")}
              </p>
              <h3 className="text-4xl sm:text-5xl font-black mt-3 text-white">
                {selectedSpecimen.name}
              </h3>
              {showLabels && (
                <>
                  <p className="text-xl text-red-400 font-bold mt-2">
                    {selectedSpecimen.sanskrit}
                  </p>
                  <p className="font-mono text-xs text-white/50 mt-1">
                    {selectedSpecimen.botanical}
                  </p>
                </>
              )}
              <p className="text-gray-300 mt-6 leading-relaxed">
                {selectedSpecimen.note}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={selectedSpecimen.route}
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-red-500 transition-colors"
                >
                  <span>{selectedSpecimen.routeLabel}</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/experimental/bio-simulator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 hover:border-red-500/50 hover:text-white transition-colors"
                >
                  Test in Bio-Simulator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          04 / SCROLL-CONTROLLED EXTRACTION & DIAGNOSTIC FUNNEL VESSEL
          ================================================================= */}
      <section
        ref={extractRef}
        className="relative h-[290svh] bg-[#0a0202]/65 backdrop-blur-[2px] border-t border-red-950/50"
      >
        <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-5 overflow-hidden">
          <p className="absolute top-14 text-xs font-mono text-red-400 uppercase tracking-[.25em]">
            04 / Scroll-Controlled Alchemical Synthesis
          </p>
          <h2 className="text-center text-3xl sm:text-5xl font-black mb-6 text-white">
            From Raw Specimen to Clinical Potency.
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
              <TacticalBotanical
                kind="turmeric"
                color="#ef4444"
                className="w-32 h-32"
              />
            </div>
            <svg
              viewBox="0 0 320 310"
              className="relative w-full h-full"
              aria-label="Tactical laboratory vessel filling with crimson-gold extract"
            >
              <defs>
                <clipPath id="bat-vessel-clip">
                  <path d="M93 80 L93 185 Q93 259 160 259 Q227 259 227 185 L227 80Z" />
                </clipPath>
                <linearGradient id="bat-liquid" x1="0" x2="1">
                  <stop stopColor="#7f1d1d" />
                  <stop offset=".5" stopColor="#ef4444" />
                  <stop offset="1" stopColor="#b91c1c" />
                </linearGradient>
              </defs>
              <path
                d="M93 80 L93 185 Q93 259 160 259 Q227 259 227 185 L227 80"
                fill="#fff"
                fillOpacity=".03"
                stroke="#f87171"
                strokeWidth="4.5"
              />
              <g clipPath="url(#bat-vessel-clip)">
                <rect
                  x="90"
                  y={259 - extraction * 165}
                  width="140"
                  height={extraction * 165 + 10}
                  fill="url(#bat-liquid)"
                  opacity=".92"
                />
                <path
                  d={`M90 ${259 - extraction * 165} Q125 ${
                    249 - extraction * 165
                  } 160 ${259 - extraction * 165} T230 ${
                    259 - extraction * 165
                  }`}
                  stroke="#fecaca"
                  fill="none"
                  strokeWidth="3"
                />
              </g>
              <path
                d="M80 80 H240"
                stroke="#f87171"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <circle
                  key={i}
                  cx={116 + i * 18}
                  cy={210 - extraction * 80 - (i % 3) * 19}
                  r={3 + (i % 3)}
                  fill="#fecaca"
                  opacity={extraction * 0.9}
                />
              ))}
            </svg>
          </div>
          <p className="text-gray-300 text-center max-w-xl text-sm sm:text-base">
            Bhaishajya Kalpana &amp; Differential Triage: Distilling raw data
            into targeted, high-bioavailability clinical action.
          </p>
          <p className="mt-4 text-red-400 font-mono text-sm font-bold">
            SYNTHESIS LOCK: {Math.round(extraction * 100)}%
          </p>
        </div>
      </section>

      {/* =================================================================
          05 / KNOWLEDGE BRIDGE (COUNTER-MOVING TACTICAL CARDS)
          ================================================================= */}
      <section
        ref={bridgeRef}
        className="relative h-[250svh] bg-black/60 backdrop-blur-[2px] border-t border-red-950/50"
      >
        <div className="sticky top-0 h-svh flex flex-col justify-center px-5 overflow-hidden">
          <div className="mx-auto max-w-6xl w-full">
            <p className="text-xs font-mono text-red-400 tracking-[.25em] uppercase">
              05 / Dual-Track Clinical Architecture
            </p>
            <h2 className="text-3xl sm:text-6xl font-black mt-4 mb-10 text-white">
              From Symptom to Samhita.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="rounded-3xl border border-red-500/40 p-7 sm:p-10 bg-[#1a0505]/85 shadow-xl"
                style={{
                  transform: motionOff
                    ? "none"
                    : `translateY(${(1 - bridge) * 65}px)`,
                  opacity: motionOff ? 1 : 0.35 + bridge * 0.65,
                }}
              >
                <Stethoscope className="text-red-400 mb-5" size={34} />
                <p className="text-xs font-mono uppercase tracking-widest text-red-400">
                  Track 01 // Bedside Triage
                </p>
                <h3 className="text-3xl font-bold mt-3 text-white">
                  Differential Diagnosis Hub
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  Filter patient presentations by Cardinal Symptoms, Upashaya
                  triggers, and Jihwa Pariksha to isolate the exact disease and
                  save patients from costly, unnecessary lab panels.
                </p>
                <Link
                  href="/diagnosis-hub"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-400 hover:text-white"
                >
                  Open Triage Engine <ArrowRight size={15} />
                </Link>
              </div>

              <div
                className="rounded-3xl border border-amber-500/40 p-7 sm:p-10 bg-[#140d04]/85 shadow-xl"
                style={{
                  transform: motionOff
                    ? "none"
                    : `translateY(${(1 - bridge) * -65}px)`,
                  opacity: motionOff ? 1 : 0.35 + bridge * 0.65,
                }}
              >
                <BookOpen className="text-amber-400 mb-5" size={34} />
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Track 02 // NCISM Prof I–III
                </p>
                <h3 className="text-3xl font-bold mt-3 text-white">
                  BAMS Command &amp; Arkham Notes
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  Study high-yield Swasthavritta, Dravyaguna, and Samhita notes
                  on our Arkham Concrete &amp; Gotham Steel handwritten
                  canvases.
                </p>
                <Link
                  href="/bams-hub"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 hover:text-white"
                >
                  Enter 2nd Prof Command Center <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="mt-8 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-amber-500"
                style={{ width: `${bridge * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          06 / DAILY CIRCADIAN RHYTHM (DINACHARYA PALAN)
          ================================================================= */}
      <section className="bg-black/70 backdrop-blur-xs px-5 py-24 border-t border-red-950/50">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-mono text-red-400 tracking-[.25em] uppercase">
            06 / Circadian Biometrics
          </p>
          <h2 className="text-4xl sm:text-6xl font-black mt-3 mb-10 text-white">
            The 24-Hour Tactical Protocol.
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Sun,
                title: "04:30 // Brahma Muhurta",
                desc: "Synchronize pineal serotonin, cranial Nasya neuro-shielding, and morning gastro-colic ignition.",
                href: "/atreya/daily-regimen",
              },
              {
                icon: Wind,
                title: "07:00 // Ardhashakti Training",
                desc: "Execute 50%-capacity physical conditioning to maximize anabolic stability without depleting cellular Ojas.",
                href: "/dinacharya",
              },
              {
                icon: Moon,
                title: "22:00 // Padabhyanga Reset",
                desc: "Activate the plantar-to-ocular vagal nerve axis for deep slow-wave sleep and memory consolidation.",
                href: "/experimental/bio-simulator",
              },
            ].map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-[#120404]/85 border border-red-500/25 hover:border-red-500 p-8 transition-all flex flex-col justify-between"
              >
                <div>
                  <item.icon size={36} className="text-red-500 mb-6" />
                  <span className="block text-xs font-mono text-red-400/60">
                    0{i + 1} / CIRCADIAN PHASE
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-400">
                  OPEN PROTOCOL <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          07 / SCALE-UP FINALE
          ================================================================= */}
      <section
        ref={finaleRef}
        className="relative h-[220svh] bg-black/50 backdrop-blur-[1px] border-t border-red-950/50"
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
            <Sparkles className="mx-auto text-red-500 mb-8" size={44} />
            <p className="text-xs font-mono text-red-400 uppercase tracking-[.25em]">
              07 / Full System Access Unlocked
            </p>
            <h2 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[.98] text-white">
              THE SYMPTOM IS{" "}
              <span className="block text-red-500">ONLY THE BEGINNING.</span>
            </h2>
            <p className="text-gray-300 mt-8 text-lg">
              Step into the complete ATREYA Med clinical and academic arsenal.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/diagnosis-hub"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-extrabold text-white hover:bg-red-500 shadow-[0_0_25px_rgba(220,38,38,0.5)]"
              >
                Launch Diagnosis Hub <ArrowRight size={18} />
              </Link>
              <Link
                href="/atreya"
                className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-black/70 px-7 py-4 font-bold text-red-200 hover:bg-red-950/60"
              >
                Explore Ayurveda Global
              </Link>
              <Link
                href="/experimental"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-black/60 px-6 py-4 font-bold text-gray-300 hover:bg-white/10"
              >
                Experimental UI Lab
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
