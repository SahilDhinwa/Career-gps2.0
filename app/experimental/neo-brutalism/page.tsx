"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Zap, ArrowUpRight, Star, 
  Flame, CheckCircle2, Sparkles 
} from "lucide-react";

export default function NeoBrutalismPage() {
  const [shadowDepth, setShadowDepth] = useState(8);
  const [activeBg, setActiveBg] = useState("#FFFDF5");

  const dynamicBrutalShadow: React.CSSProperties = {
    boxShadow: `${shadowDepth}px ${shadowDepth}px 0px 0px #000000`,
  };

  return (
    <div 
      style={{ backgroundColor: activeBg }}
      className="min-h-screen text-black font-sans pt-6 pb-32 px-4 sm:px-8 transition-colors duration-300"
    >
      {/* Top Navbar */}
      <div 
        style={dynamicBrutalShadow}
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-12 bg-white border-4 border-black px-5 py-4"
      >
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-black hover:bg-[#FFC900] px-3 py-1.5 border-2 border-black font-black text-sm uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-black uppercase">Canvas Color:</span>
          {[
            { name: "Cream", hex: "#FFFDF5" },
            { name: "Mint", hex: "#A7F3D0" },
            { name: "Sky", hex: "#BAE6FD" },
            { name: "Lavender", hex: "#E9D5FF" },
          ].map((c) => (
            <button
              key={c.hex}
              onClick={() => setActiveBg(c.hex)}
              style={{ backgroundColor: c.hex }}
              className="w-7 h-7 border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="max-w-6xl mx-auto mb-12">
        <div 
          style={dynamicBrutalShadow}
          className="bg-[#FF90E8] border-4 border-black p-8 sm:p-12 relative"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFC900] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_#000] mb-6 -rotate-1">
            <Zap className="w-4 h-4" /> Style #07 • Neo-Brutalism
          </div>

          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-6">
            Zero Blur. <br />
            100% Attitude.
          </h1>

          <p className="text-base sm:text-xl font-bold max-w-2xl border-l-4 border-black pl-4 mb-8 bg-white/60 py-2">
            Thick 4px pitch-black strokes, hard unblurred offset shadows, and hyper-saturated pop colors. Used by Gumroad, Figma, and high-converting creator platforms.
          </p>

          {/* Interactive Shadow Depth Control */}
          <div className="inline-flex flex-wrap items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_#000]">
            <span className="font-black text-xs uppercase">
              Hard Shadow Offset: {shadowDepth}px
            </span>
            <input 
              type="range" min="2" max="18" value={shadowDepth}
              onChange={(e) => setShadowDepth(Number(e.target.value))}
              className="w-40 accent-black cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* 3-Column Brutalist Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div 
          style={dynamicBrutalShadow}
          className="bg-[#FFC900] border-4 border-black p-7 flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="bg-white border-2 border-black font-black text-xs uppercase px-3 py-1 shadow-[3px_3px_0px_#000]">
                BESTSELLER
              </span>
              <Star className="w-7 h-7 fill-black" />
            </div>
            <h2 className="text-3xl font-black uppercase mb-3">BAMS 1st Prof Vault</h2>
            <p className="font-bold text-sm mb-6">
              Complete handwritten Sanskrit & Padartha Vigyan notes built for rapid exam scoring.
            </p>
          </div>

          <button className="w-full bg-white hover:bg-black hover:text-white text-black border-4 border-black font-black uppercase py-3.5 px-4 shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
            <span>Grab Instant Access</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Card 2 */}
        <div 
          style={dynamicBrutalShadow}
          className="bg-[#38BDF8] border-4 border-black p-7 flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="bg-black text-white border-2 border-black font-black text-xs uppercase px-3 py-1">
                VEBLEN GOOD
              </span>
              <Flame className="w-7 h-7 fill-amber-400" />
            </div>
            <h2 className="text-3xl font-black uppercase mb-3">Rural to Global</h2>
            <p className="font-bold text-sm mb-6">
              Shatter communication hesitation and command authority in international symposiums.
            </p>
          </div>

          <button className="w-full bg-[#FF90E8] hover:bg-black hover:text-white text-black border-4 border-black font-black uppercase py-3.5 px-4 shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
            <span>Unlock Blueprint</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>

        {/* Card 3 */}
        <div 
          style={dynamicBrutalShadow}
          className="bg-[#4ADE80] border-4 border-black p-7 flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="bg-white border-2 border-black font-black text-xs uppercase px-3 py-1 shadow-[3px_3px_0px_#000]">
                VERIFIED
              </span>
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-black uppercase mb-3">Clinical Modules</h2>
            <p className="font-bold text-sm mb-6">
              Interactive case studies, Prakriti diagnostics, and Dravyaguna plant identification.
            </p>
          </div>

          <button className="w-full bg-[#FFC900] hover:bg-black hover:text-white text-black border-4 border-black font-black uppercase py-3.5 px-4 shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
            <span>Start Training</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
