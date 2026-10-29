
"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowDown,
  ArrowRight,
  Sparkles,
  MousePointer2,
  Layers3,
  MoveHorizontal,
  BookOpen,
} from "lucide-react";

function useScrollProgress(
  ref: React.RefObject<HTMLElement | null>
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const distance = Math.max(
          1,
          element.offsetHeight - window.innerHeight
        );
        const next = Math.min(
          1,
          Math.max(0, -rect.top / distance)
        );
        setProgress(next);
      });
    };

    update();
    window.addEventListener("scroll", update, {
      passive: true,
    });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return progress;
}

const clamp = (value: number) =>
  Math.min(1, Math.max(0, value));

function WordReveal({
  text,
  progress,
}: {
  text: string;
  progress: number;
}) {
  const words = text.split(" ");

  return (
    <p className="max-w-5xl text-center text-3xl sm:text-5xl md:text-7xl font-black leading-[1.2] tracking-tight">
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        const visibility = clamp(
          (progress - start) / (end - start)
        );

        return (
          <span
            key={index}
            className="inline-block mr-[0.25em] transition-colors duration-100"
            style={{
              color: `rgba(255,255,255,${
                0.13 + visibility * 0.87
              })`,
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

function ProgressIndicator({
  progress,
}: {
  progress: number;
}) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3">
      <span className="text-[10px] font-mono text-white/50">
        {Math.round(progress * 100)}%
      </span>
      <div className="h-40 w-[3px] rounded-full bg-white/15 overflow-hidden">
        <div
          className="w-full bg-amber-400 rounded-full"
          style={{
            height: `${progress * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function ScrollStorytellingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLElement>(null);
  const depthRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);

  const pageProgress = useScrollProgress(pageRef);
  const revealProgress = useScrollProgress(revealRef);
  const depthProgress = useScrollProgress(depthRef);
  const horizontalProgress =
    useScrollProgress(horizontalRef);
  const finaleProgress = useScrollProgress(finaleRef);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(query.matches);
    update();

    query.addEventListener("change", update);
    return () =>
      query.removeEventListener("change", update);
  }, []);

  const scrollToNext = useCallback(() => {
    revealRef.current?.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, [reducedMotion]);

  const reveal = reducedMotion ? 1 : revealProgress;
  const depth = reducedMotion ? 1 : depthProgress;
  const horizontal = reducedMotion
    ? 0.5
    : horizontalProgress;
  const finale = reducedMotion ? 1 : finaleProgress;

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen bg-[#050806] text-white overflow-clip"
    >
      <style>{`
        @keyframes storyFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes storyGlow {
          0%, 100% { opacity: .35; }
          50% { opacity: .7; }
        }

        .story-float {
          animation: storyFloat 7s ease-in-out infinite;
        }

        .story-glow {
          animation: storyGlow 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .story-float,
          .story-glow {
            animation: none !important;
          }

          .story-motion {
            transition: none !important;
          }
        }
      `}</style>

      <ProgressIndicator progress={pageProgress} />

      {/* NAVIGATION */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-5 md:px-10 py-6 flex items-center justify-between">
        <Link
          href="/experimental"
          className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Experimental Lab
        </Link>

        <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-amber-400">
          Experiment 018
        </span>
      </nav>

      {/* 01 — INTRO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="story-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(85vw,700px)] aspect-square rounded-full bg-emerald-600/20 blur-[100px]" />
          <div className="story-float absolute top-[20%] right-[15%] w-24 h-24 border border-amber-400/20 rounded-full" />
          <div className="story-float absolute bottom-[20%] left-[12%] w-12 h-12 bg-amber-400/10 rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-amber-400/30 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4" />
            Interactive Typography Experiment
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-black tracking-[-0.065em] leading-[0.95]">
            DON'T JUST
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#D4AF37] to-emerald-400">
              READ.
            </span>
            <span className="block">EXPERIENCE.</span>
          </h1>

          <p className="mt-8 text-white/55 text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
            A story controlled entirely by your scroll.
            Every movement reveals something new.
          </p>

          <button
            onClick={scrollToNext}
            className="mt-12 inline-flex items-center gap-3 text-sm font-bold text-amber-300 hover:text-white transition-colors"
          >
            Scroll to Begin
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        <span className="absolute bottom-8 text-[10px] font-mono tracking-[0.3em] uppercase text-white/30">
          Scroll-driven experience
        </span>
      </section>

      {/* 02 — WORD-BY-WORD REVEAL */}
      <section
        ref={revealRef}
        className="relative h-[300vh] bg-[#080d0a]"
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-5 sm:px-10 overflow-hidden">
          <div className="absolute top-12 text-xs uppercase tracking-[0.3em] text-amber-400/80 font-mono">
            01 / Word Illumination
          </div>

          <WordReveal
            progress={reveal}
            text="The most powerful stories are not simply told. They are discovered, one word at a time."
          />

          <div className="absolute bottom-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400"
              style={{
                width: `${reveal * 100}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* 03 — PERSPECTIVE DEPTH */}
      <section
        ref={depthRef}
        className="relative h-[300vh] bg-[#080b12]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-5">
          <div className="absolute top-12 text-xs uppercase tracking-[0.3em] text-cyan-300/80 font-mono">
            02 / Perspective Depth
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, rgba(8,145,178,${
                0.05 + depth * 0.15
              }), transparent 65%)`,
            }}
          />

          <div
            className="story-motion relative w-full max-w-3xl rounded-[32px] border border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.6)] text-center"
            style={{
              transform: reducedMotion
                ? "none"
                : `perspective(1000px) rotateX(${
                    (1 - depth) * 24
                  }deg) rotateY(${
                    (1 - depth) * -14
                  }deg) scale(${0.65 + depth * 0.35})`,
              opacity: reducedMotion
                ? 1
                : 0.35 + depth * 0.65,
            }}
          >
            <Layers3 className="w-12 h-12 text-cyan-300 mx-auto mb-8" />

            <p className="text-cyan-300 text-xs uppercase tracking-widest font-bold mb-4">
              Beyond Flat Screens
            </p>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              WORDS
              <span className="block text-cyan-300">
                HAVE DEPTH.
              </span>
            </h2>

            <p className="text-white/55 mt-6 max-w-md mx-auto">
              Perspective, rotation, scale, and opacity
              combine to create a dimensional reveal.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — HORIZONTAL TYPOGRAPHY */}
      <section
        ref={horizontalRef}
        className="relative h-[260vh] bg-[#110d08]"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="absolute top-12 left-6 sm:left-12 text-xs uppercase tracking-[0.3em] text-amber-400/80 font-mono">
            03 / Horizontal Motion
          </div>

          <div className="overflow-hidden py-8 border-y border-amber-400/20">
            <div
              className="flex whitespace-nowrap gap-12 text-[clamp(5rem,17vw,16rem)] font-black tracking-[-0.07em] leading-none will-change-transform"
              style={{
                transform: `translate3d(${
                  -horizontal * 45
                }%,0,0)`,
              }}
            >
              <span className="text-amber-400">
                EXPLORE
              </span>
              <span className="text-white">
                • DISCOVER
              </span>
              <span className="text-amber-400">
                • CREATE
              </span>
              <span className="text-white">
                • INSPIRE
              </span>
            </div>
          </div>

          <div className="mt-12 px-6 sm:px-12 flex items-center gap-3 text-white/45">
            <MoveHorizontal className="w-5 h-5" />
            <p className="text-sm">
              Vertical scrolling drives horizontal text.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — FINALE */}
      <section
        ref={finaleRef}
        className="relative h-[240vh] bg-[#050806]"
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, rgba(212,175,55,${
                finale * 0.18
              }), transparent 60%)`,
            }}
          />

          <div
            className="relative z-10 text-center max-w-5xl"
            style={{
              transform: reducedMotion
                ? "none"
                : `scale(${0.7 + finale * 0.3})`,
              opacity: reducedMotion
                ? 1
                : clamp(finale * 2),
            }}
          >
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-8" />

            <p className="text-xs uppercase tracking-[0.35em] text-amber-400 mb-6">
              The Final Reveal
            </p>

            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-[-0.06em] leading-[0.95]">
              MAKE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400">
                EVERY
              </span>
              <span className="block">
                SCROLL COUNT.
              </span>
            </h2>

            <p className="text-white/55 mt-8 text-base sm:text-lg">
              From static content to interactive storytelling.
            </p>

            <Link
              href="/experimental"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] hover:bg-amber-400 px-7 py-4 text-slate-950 font-black text-sm uppercase tracking-wider transition-all"
            >
              Back to Design Museum
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
          <MousePointer2 className="w-4 h-4" />
          ATREYA Experimental Lab
        </div>
        <p className="text-white/35 text-xs">
          Scroll Storytelling — Experiment 018
        </p>
      </footer>
    </div>
  );
}
