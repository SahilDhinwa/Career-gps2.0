"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Droplet, Sparkles, Sliders, Layers, 
  Play, Pause, SkipForward, Volume2, ShieldCheck, Compass 
} from "lucide-react";

export default function GlassmorphismPage() {
  const [blurLevel, setBlurLevel] = useState<number>(20);
  const [glassOpacity, setGlassOpacity] = useState<number>(12);
  const [borderOpacity, setBorderOpacity] = useState<number>(25);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const dynamicGlassStyle: React.CSSProperties = {
    backdropFilter: `blur(${blurLevel}px)`,
    WebkitBackdropFilter: `blur(${blurLevel}px)`,
    backgroundColor: `rgba(255, 255, 255, ${glassOpacity / 100})`,
    borderColor: `rgba(255, 255, 255, ${borderOpacity / 100})`,
  };

  return (
    <div className="min-h-screen bg-[#060814] text-white font-sans relative overflow-hidden pt-6 pb-32 px-4 sm:px-8">
      
      {/* Vivid Moving Ambient Orbs (Essential for Glassmorphism to refract) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[420px] h-[420px] bg-fuchsia-600/40 rounded-full blur-[110px] animate-pulse" />
        <div className="absolute top-[35%] right-[10%] w-[480px] h-[480px] bg-cyan-500/35 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[30%] w-[520px] h-[520px] bg-indigo-600/40 rounded-full blur-[130px]" />
        <div className="absolute top-[55%] left-[45%] w-64 h-64 bg-[#D4AF37]/30 rounded-full blur-[90px]" />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-12 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3.5 rounded-2xl shadow-lg">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
          <Droplet className="w-3.5 h-3.5 text-cyan-300" /> Style #03 • VisionOS Glass
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 drop-shadow-md">
          Spatial <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300">Glassmorphism</span>
        </h1>
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto">
          Inspired by Apple VisionOS. Translucent frosted surfaces float in 3D space, refracting the vibrant background lights while razor-thin specular borders catch the light.
        </p>
      </div>

      {/* Interactive Real-Time Optical Controls */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300 mb-6">
          <Sliders className="w-4 h-4" /> Live Optical Refraction Controls
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-white/70">Frosted Blur</span>
              <span className="text-cyan-300 font-mono">{blurLevel}px</span>
            </div>
            <input 
              type="range" min="0" max="40" value={blurLevel}
              onChange={(e) => setBlurLevel(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-white/70">Surface Opacity</span>
              <span className="text-cyan-300 font-mono">{glassOpacity}%</span>
            </div>
            <input 
              type="range" min="2" max="45" value={glassOpacity}
              onChange={(e) => setGlassOpacity(Number(e.target.value))}
              className="w-full accent-fuchsia-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-white/70">Specular Edge Rim</span>
              <span className="text-cyan-300 font-mono">{borderOpacity}%</span>
            </div>
            <input 
              type="range" min="5" max="80" value={borderOpacity}
              onChange={(e) => setBorderOpacity(Number(e.target.value))}
              className="w-full accent-amber-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Spatial Bento Showcase Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Spatial Feature Window */}
        <div 
          style={dynamicGlassStyle}
          className="lg:col-span-7 rounded-3xl border p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] flex flex-col justify-between transition-all"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Veblen Good Spatial Reader
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Depth Through Translucency
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              Unlike opaque dark-mode cards that feel heavy and closed off, glassmorphic panels adapt dynamically to whatever scrolls behind them—creating a sense of lightness and spatial hierarchy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/15">
            <button className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              Launch Spatial Module
            </button>
            <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition-colors">
              Preview Syllabus
            </button>
          </div>
        </div>

        {/* Right Column: Spatial Audio Lecture Widget & Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Audio Player Glass Card */}
          <div 
            style={dynamicGlassStyle}
            className="rounded-3xl border p-7 shadow-[0_25px_60px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-lg shrink-0">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">BAMS Audio Vault</span>
                <h3 className="text-lg font-bold">Ashtanga Hridaya • Ch. 1</h3>
                <p className="text-xs text-white/60">Sutrasthana Recitation & Commentary</p>
              </div>
            </div>

            {/* Frosted Progress Bar */}
            <div className="mb-6">
              <div className="w-full h-2 rounded-full bg-white/15 overflow-hidden mb-2">
                <div className="w-2/3 h-full bg-gradient-to-r from-cyan-300 to-fuchsia-300 rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-white/60">
                <span>14:28</span>
                <span>21:40</span>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>
              <button className="w-11 h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center hover:bg-white/25 transition-colors">
                <SkipForward className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Mini Twin Glass Pills */}
          <div className="grid grid-cols-2 gap-4">
            <div 
              style={dynamicGlassStyle}
              className="rounded-3xl border p-5 flex flex-col justify-between"
            >
              <ShieldCheck className="w-6 h-6 text-emerald-300 mb-3" />
              <div>
                <p className="text-2xl font-black">100%</p>
                <p className="text-xs text-white/70">NCISM Verified</p>
              </div>
            </div>

            <div 
              style={dynamicGlassStyle}
              className="rounded-3xl border p-5 flex flex-col justify-between"
            >
              <Compass className="w-6 h-6 text-amber-300 mb-3" />
              <div>
                <p className="text-2xl font-black">4.9 ★</p>
                <p className="text-xs text-white/70">Scholar Rating</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
