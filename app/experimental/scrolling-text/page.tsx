"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Type, Sparkles, ArrowUpRight, Flame, 
  Compass, Shield, Layers, ChevronDown, Activity 
} from "lucide-react";

export default function ScrollingTextPage() {
  const [pageProgress, setPageProgress] = useState(0);
  const [manifestoProgress, setManifestoProgress] = useState(0);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Overall Page Scroll Progress (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const totalPct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setPageProgress(totalPct);

      // 2. Manifesto Section Word-by-Word Scrubbing Progress
      if (manifestoRef.current) {
        const rect = manifestoRef.current.getBoundingClientRect();
        const winH = window.innerHeight;
        const start = winH * 0.85;
        const end = winH * 0.15;
        const raw = (start - rect.top) / (start - end);
        setManifestoProgress(Math.max(0, Math.min(1, raw)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const manifestoWords =
    "The transition from a rural classroom in Rajasthan to a global university is not just about changing locations. It is about breaking down invisible barriers, mastering clinical and verbal communication, and commanding respect in rooms where you once felt small. This is the Veblen Good standard.".split(
      " "
    );

  const milestones = [
    {
      num: "01",
      tag: "ORIGIN",
      title: "Breaking the Rural Hesitation",
      desc: "Replacing self-doubt with structured communication frameworks designed for tier-2 and tier-3 scholars.",
      accent: "from-amber-400 to-[#D4AF37]",
      icon: Compass,
    },
    {
      num: "02",
      tag: "CLINICAL",
      title: "Precision BAMS Mastery",
      desc: "High-yield Ayurveda & modern clinical modules engineered for rapid recall during university examinations.",
      accent: "from-emerald-400 to-teal-600",
      icon: Shield,
    },
    {
      num: "03",
      tag: "AURA",
      title: "Global Executive Presence",
      desc: "Walking into international interviews and medical symposiums with unshakeable authority.",
      accent: "from-indigo-400 to-purple-600",
      icon: Flame,
    },
  ];

  return (
    <div className="min-h-screen bg-[#070908] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black pb-32">
      
      {/* Keyframes for Kinetic Ribbons */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-left {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ticker-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        .animate-ticker-left {
          animation: ticker-left 22s linear infinite;
        }
        .animate-ticker-right {
          animation: ticker-right 26s linear infinite;
        }
      `}} />

      {/* Live Scroll Progress Bar at Very Top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 via-[#D4AF37] to-amber-300 transition-all duration-75"
          style={{ width: `${pageProgress * 100}%` }}
        />
      </div>

      {/* =======================================================
          1. RICH KINETIC HERO SECTION (NO MORE EMPTY BLACK SCREEN)
          ======================================================= */}
      <section className="relative pt-6 pb-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        
        {/* Architectural Grid & Dual Spotlights */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(212,175,55,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.12) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Non-overlapping Top Control HUD */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 bg-white/[0.04] backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl mb-12">
          <Link 
            href="/experimental" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Design Lab
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>SCROLL TELEMETRY: {Math.round(pageProgress * 100)}%</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37]">
              <Type className="w-3.5 h-3.5" /> Kinetic Lab #16
            </div>
          </div>
        </div>

        {/* Hero Split Grid: Typography + Live Scroll-Reactive 3D Visual Card */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Live Metrics */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" /> Scroll-Linked Choreography
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05]">
              Typography That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-200 to-emerald-400">
                Moves With You.
              </span>
            </h1>

            <p className="text-white/65 text-base sm:text-lg max-w-xl leading-relaxed">
              Every pixel on this page is bound to your scroll position. As you glide down, headlines shift horizontally, manifestos illuminate word-by-word, and 3D cards lock into focus.
            </p>

            {/* Live Interactive Status Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3.5">
                <p className="text-[10px] font-mono uppercase text-white/40">Scroll Depth</p>
                <p className="text-xl font-black text-[#D4AF37] mt-0.5">{Math.round(pageProgress * 100)}%</p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3.5">
                <p className="text-[10px] font-mono uppercase text-white/40">Word Scrub</p>
                <p className="text-xl font-black text-emerald-400 mt-0.5">{Math.round(manifestoProgress * 100)}%</p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3.5">
                <p className="text-[10px] font-mono uppercase text-white/40">Engine</p>
                <p className="text-xl font-black text-white mt-0.5">60 FPS</p>
              </div>
            </div>
          </div>

          {/* Right Column: Immediate Visual Showcase Card (Reacts to Scroll!) */}
          <div className="lg:col-span-5">
            <div 
              className="relative rounded-3xl bg-gradient-to-br from-[#132a20] via-[#0b1410] to-[#241c08] border border-[#D4AF37]/40 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.7)] transition-transform duration-150"
              style={{
                transform: `perspective(1000px) rotateY(${(pageProgress - 0.2) * -18}deg) rotateX(${pageProgress * 10}deg)`,
              }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  LIVE SPECIMEN // VEBLEN GOOD
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <p className="text-xs font-mono uppercase text-white/50 mb-2">Dynamic Parallax Offset</p>
              <div className="overflow-hidden bg-black/40 border border-white/10 rounded-2xl p-4 mb-5">
                <div 
                  className="text-2xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-emerald-300 whitespace-nowrap"
                  style={{ transform: `translate3d(${-pageProgress * 140}px, 0, 0)` }}
                >
                  RURAL TO GLOBAL • BAMS HUB • VEBLEN GOOD •
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/60">Viewport Velocity</span>
                  <span className="text-[#D4AF37] font-mono font-bold">ACTIVE</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#D4AF37] transition-all duration-100"
                    style={{ width: `${Math.max(15, pageProgress * 100)}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Scroll down to scrub</span>
                <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =======================================================
          2. MULTI-LAYER ANGLED VELOCITY MARQUEE RIBBONS
          ======================================================= */}
      <section className="py-16 relative overflow-hidden bg-[#050706] border-b border-white/10">
        
        {/* Ribbon 1: Solid Gold Tilted */}
        <div className="bg-[#D4AF37] text-black py-4 -rotate-2 scale-105 shadow-2xl border-y-2 border-black mb-6">
          <div className="flex w-[200%] animate-ticker-left">
            <p className="text-3xl sm:text-5xl font-black uppercase tracking-tighter whitespace-nowrap">
              VEBLEN GOOD • BAMS CLINICAL HUB • RURAL TO GLOBAL • SCHOLARSHIP ARCHITECTURE • VEBLEN GOOD • BAMS CLINICAL HUB • RURAL TO GLOBAL • 
            </p>
          </div>
        </div>

        {/* Ribbon 2: Outlined Hollow Counter-Tilted */}
        <div className="bg-white/[0.03] border-y border-white/15 py-5 rotate-1 scale-105 backdrop-blur-md">
          <div className="flex w-[200%] animate-ticker-right">
            <p 
              className="text-4xl sm:text-6xl font-black uppercase tracking-tighter whitespace-nowrap"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.75)", color: "transparent" }}
            >
              COMMAND RESPECT • OVERCOME HESITATION • GLOBAL EXCELLENCE • COMMAND RESPECT • OVERCOME HESITATION • GLOBAL EXCELLENCE • 
            </p>
          </div>
        </div>
      </section>

      {/* =======================================================
          3. WORD-BY-WORD ILLUMINATED MANIFESTO
          ======================================================= */}
      <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto">
        <div 
          ref={manifestoRef}
          className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/15 p-8 sm:p-14 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                02 // Scroll-Scrubbed Reading Engine
              </span>
            </div>
            <span className="text-xs font-mono bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full">
              {Math.round(manifestoProgress * 100)}% Illuminated
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.35] tracking-tight">
            {manifestoWords.map((word, i) => {
              const threshold = i / manifestoWords.length;
              const isLit = threshold <= manifestoProgress;
              const isGoldWord = ["Veblen", "Good", "Rajasthan", "global", "respect"].some((w) =>
                word.includes(w)
              );

              return (
                <span
                  key={i}
                  className={`inline-block mr-2.5 mb-2 transition-all duration-200 ${
                    isLit
                      ? isGoldWord
                        ? "text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] scale-105"
                        : "text-white"
                      : "text-white/15"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>
      </section>

      {/* =======================================================
          4. SCROLL-REACTIVE 3D MILESTONE CARDS
          ======================================================= */}
      <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-3">
            03 // Depth Choreography
          </p>
          <h3 className="text-3xl sm:text-5xl font-black">
            Scroll-Driven Architecture Cards
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#D4AF37]/50 p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                style={{
                  transform: `translateY(${Math.sin(pageProgress * Math.PI + idx) * -10}px)`,
                }}
              >
                <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${item.accent} mb-8`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-white/15 group-hover:text-[#D4AF37]/40 transition-colors">
                      {item.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                    {item.tag}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-white transition-colors">
                  <span>SYNCED TO SCROLL</span>
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =======================================================
          5. PARALLAX FOOTER CTA -> MAGNETIC BUTTONS LAB
          ======================================================= */}
      <section className="mt-20 py-24 px-6 relative overflow-hidden border-t border-white/10 text-center">
        <h2
          className="text-7xl sm:text-[130px] font-black uppercase tracking-tighter text-[#D4AF37]/10 whitespace-nowrap pointer-events-none select-none mb-6"
          style={{ transform: `translate3d(${(pageProgress - 0.5) * 220}px, 0, 0)` }}
        >
          VEBLEN GOOD • GLOBAL STANDARD
        </h2>

        <div className="relative z-10 max-w-xl mx-auto -mt-12 sm:-mt-20 bg-black/80 backdrop-blur-xl border border-[#D4AF37]/40 p-8 rounded-3xl shadow-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-2">
            Next Experimental Module
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Test Magnetic Button Physics
          </h3>
          <p className="text-white/60 text-sm mb-6">
            Experience buttons that calculate your finger or cursor distance in real time and pull toward you with elastic gravity.
          </p>
          <Link
            href="/experimental/magnetic-buttons"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-amber-300 text-black font-black text-sm uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <span>Open Magnetic Lab</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
