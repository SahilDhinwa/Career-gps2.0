"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Beaker, LayoutGrid, Zap, Terminal, Star, ArrowRight, Cpu } from "lucide-react";
import { useTheme } from "next-themes";

export default function ExperimentalUIPage() {
  const { theme } = useTheme();
  const [activeUI, setActiveUI] = useState<"glass" | "brutal" | "cyberpunk">("glass");

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans pb-24">
      
      {/* 🧪 TOP CONTROLS & NAVIGATION */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surfaceBorder p-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Hub
          </Link>
          
          <div className="flex items-center gap-2 bg-surface/50 p-1.5 rounded-md border border-surfaceBorder">
            <button 
              onClick={() => setActiveUI("glass")}
              className={`px-4 py-2 rounded-sm text-xs font-bold transition-all flex items-center gap-2 ${activeUI === "glass" ? "bg-white/10 dark:bg-white/20 shadow-sm" : "hover:bg-surfaceBorder/50"}`}
            >
              <LayoutGrid className="w-4 h-4" /> Apple Glass
            </button>
            <button 
              onClick={() => setActiveUI("brutal")}
              className={`px-4 py-2 rounded-sm text-xs font-bold transition-all flex items-center gap-2 ${activeUI === "brutal" ? "bg-black text-white dark:bg-white dark:text-black shadow-sm" : "hover:bg-surfaceBorder/50"}`}
            >
              <Zap className="w-4 h-4" /> Neo-Brutalism
            </button>
            <button 
              onClick={() => setActiveUI("cyberpunk")}
              className={`px-4 py-2 rounded-sm text-xs font-bold transition-all flex items-center gap-2 ${activeUI === "cyberpunk" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50" : "hover:bg-surfaceBorder/50"}`}
            >
              <Terminal className="w-4 h-4" /> Cyberpunk
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Beaker className="w-4 h-4" /> UI Design Laboratory
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experimental <span className="text-primary">Playground</span>
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Switch between different design languages above to test button interactions, hover states, and card layouts for future BAMS Hub features.
          </p>
        </div>

        {/* =======================================================
            STYLE 1: APPLE VISION-OS (GLASSMORPHISM / BENTO)
            Vibe: Premium, clean, translucent, floating.
            ======================================================= */}
        {activeUI === "glass" && (
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-emerald-500/10 border border-white/10 shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Hero Glass Card */}
              <div className="md:col-span-2 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-colors duration-500">
                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Glassmorphism Bento</h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Inspired by Apple's VisionOS. Relies on heavy backdrop blurs (`backdrop-blur-xl`), very subtle white borders (`border-white/20`), and large corner radii (`rounded-2xl`).
                </p>
                <button className="bg-foreground text-background font-medium px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                  Explore Components
                </button>
              </div>

              {/* Small Glass Card */}
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-8 h-8 text-white fill-white/50" />
                </div>
                <h3 className="font-bold text-lg">Premium Feel</h3>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            STYLE 2: NEO-BRUTALISM (GUMROAD / STARTUP STYLE)
            Vibe: Loud, playful, high-contrast, indestructible.
            ======================================================= */}
        {activeUI === "brutal" && (
          <div className="bg-[#f0f0f0] dark:bg-[#1a1a1a] p-8 md:p-12 rounded-none border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#ff90e8] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-4">Neo-Brutalism</h2>
                <p className="text-black/80 font-bold mb-8 border-l-4 border-black pl-4">
                  Loud colors, thick black borders (`border-4 border-black`), and hard, unblurred drop shadows (`shadow-[8px_8px_0px_0px_black]`). 
                </p>
                <button className="w-full bg-[#ffc900] text-black font-black uppercase text-xl py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2">
                  Click Me <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                <div className="bg-[#3b82f6] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-white text-xl uppercase mb-2">High Contrast</h3>
                  <p className="text-white/90 font-medium">Makes everything look like a physical, clickable sticker.</p>
                </div>
                <div className="bg-[#10b981] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-black text-xl uppercase mb-2">Aggressive UI</h3>
                  <p className="text-black/80 font-medium">Perfect for standing out in a sea of boring websites.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            STYLE 3: CYBERPUNK HUD (TACTICAL / MATRIX)
            Vibe: Sci-fi, dark mode only, glowing neon, terminal.
            ======================================================= */}
        {activeUI === "cyberpunk" && (
          <div className="bg-[#050505] p-8 md:p-12 border border-cyan-500/30 rounded-sm relative overflow-hidden"
               style={{ backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
            
            {/* Scanning line animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,1)] opacity-50 animate-[floatDown_4s_linear_infinite]"></div>
            
            <div className="flex items-center gap-3 mb-8 border-b border-cyan-500/30 pb-4">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-mono font-bold text-cyan-400 tracking-[0.2em] uppercase">Sys.Admin_HUD</h2>
              <span className="ml-auto text-xs font-mono text-cyan-400/50 animate-pulse">STATUS: ONLINE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-cyan-950/20 border border-cyan-500/40 p-6 backdrop-blur-sm relative group hover:bg-cyan-900/30 transition-colors cursor-crosshair">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
                
                <h3 className="font-mono text-cyan-300 text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span> Cyberpunk Tactical
                </h3>
                <p className="font-mono text-cyan-100/70 text-sm leading-relaxed mb-6">
                  Sharp corners (`rounded-none`), neon glows (`shadow-[0_0_15px_cyan]`), monospace fonts, and dark backgrounds. Looks like a hacker terminal or a fighter jet HUD.
                </p>
                
                <button className="bg-transparent border border-cyan-400 text-cyan-400 font-mono text-xs uppercase tracking-widest px-6 py-2 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                  Execute Command_
                </button>
              </div>

              <div className="bg-red-950/20 border border-red-500/40 p-6 backdrop-blur-sm relative flex flex-col justify-center items-center text-center">
                <div className="absolute top-0 right-0 px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-mono">WARNING</div>
                <Terminal className="w-10 h-10 text-red-500 mb-3" />
                <span className="font-mono text-red-400 text-sm">System Override</span>
              </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes floatDown {
                0% { transform: translateY(-10px); }
                100% { transform: translateY(500px); }
              }
            `}} />
          </div>
        )}

      </div>
    </div>
  );
}
