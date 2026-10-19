"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Disc3, Sparkles, Zap, Star, 
  Volume2, ShieldCheck, Globe 
} from "lucide-react";

export default function Y2KDesignPage() {
  const [auraFreq, setAuraFreq] = useState<number>(88);
  const [scholarRank, setScholarRank] = useState<"SILVER" | "CHROME" | "HOLO">("HOLO");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6AD5] via-[#C774E8] to-[#00E5FF] text-slate-950 font-sans pt-6 pb-32 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Y2K Chrome & Gloss Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .y2k-chrome {
          background: linear-gradient(180deg, #FFFFFF 0%, #D8E2EC 48%, #9AA8B8 52%, #F5F9FC 100%);
          border: 2px solid #FFFFFF;
          box-shadow: 0 8px 25px rgba(157, 23, 77, 0.35), inset 0 2px 3px #FFFFFF;
        }
        .y2k-window {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(16px);
          border: 3px solid #FFFFFF;
          box-shadow: 0 15px 40px rgba(88, 28, 135, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.9);
        }
      `}} />

      {/* Top Chrome Bar */}
      <div className="max-w-5xl mx-auto y2k-chrome rounded-full px-5 py-3 mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black text-xs uppercase px-4 py-2 rounded-full border-2 border-white shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>

        <div className="inline-flex items-center gap-2 text-xs font-black italic uppercase tracking-wider text-purple-950">
          <Disc3 className="w-4 h-4 text-fuchsia-600 animate-spin" />
          <span>STYLE #12 // MILLENNIUM CYBER-POP 2000</span>
        </div>
      </div>

      {/* Hero Window */}
      <div className="max-w-5xl mx-auto y2k-window rounded-[32px] p-8 sm:p-12 mb-10 text-center relative">
        <div className="inline-flex items-center gap-1.5 y2k-chrome px-4 py-1 rounded-full text-xs font-black uppercase text-fuchsia-800 mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Translucent Acrylic &amp; Liquid Chrome
        </div>

        <h1 
          className="text-5xl sm:text-7xl font-black italic uppercase tracking-tighter mb-4 text-white"
          style={{ textShadow: "0 4px 0 #9D174D, 0 8px 20px rgba(0,0,0,0.3)" }}
        >
          Y2K Future-Optimism
        </h1>

        <p className="text-purple-950 font-bold text-base sm:text-lg max-w-2xl mx-auto">
          Inspired by the year 2000—iMac G3 translucent plastics, metallic bevels, and holographic badges. Everything feels playful, futuristic, and collectible.
        </p>
      </div>

      {/* Interactive Holographic Student Pass + Equalizer */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Holographic Veblen Good Scholar ID Card (7 cols) */}
        <div className="lg:col-span-7 y2k-window rounded-[32px] p-7 sm:p-9">
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-white">
            <span className="text-xs font-black uppercase tracking-widest text-fuchsia-700">
              HOLOGRAPHIC SCHOLAR PASS // 2000-X
            </span>
            <div className="flex gap-1.5">
              {(["SILVER", "CHROME", "HOLO"] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setScholarRank(tier)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border border-white ${
                    scholarRank === tier ? "bg-fuchsia-600 text-white" : "y2k-chrome text-slate-800"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-2xl border-2 border-white shadow-inner transition-all ${
            scholarRank === "HOLO"
              ? "bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200"
              : scholarRank === "CHROME"
              ? "y2k-chrome"
              : "bg-slate-200"
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-purple-900">
                  VEBLEN GOOD GLOBAL NETWORK
                </p>
                <h2 className="text-3xl font-black italic uppercase text-slate-950">
                  AYURVEDA MILLENNIUM FELLOW
                </h2>
              </div>
              <Globe className="w-10 h-10 text-fuchsia-700" />
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs font-black uppercase">
              <div className="bg-white/80 p-3 rounded-xl border border-white">
                <span className="text-[10px] text-fuchsia-700 block">ORIGIN</span>
                <span>RAJASTHAN</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-white">
                <span className="text-[10px] text-fuchsia-700 block">AURA LEVEL</span>
                <span>{auraFreq}.9 MHz</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-white">
                <span className="text-[10px] text-fuchsia-700 block">CLEARANCE</span>
                <span>{scholarRank}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Winamp-Style Confidence Frequency Tuner (5 cols) */}
        <div className="lg:col-span-5 y2k-window rounded-[32px] p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase text-purple-950">
                AURA FREQUENCY SYNTH
              </span>
              <Volume2 className="w-5 h-5 text-fuchsia-700" />
            </div>

            {/* Animated Equalizer Bars */}
            <div className="bg-slate-950 rounded-2xl p-4 border-2 border-white mb-6">
              <div className="flex items-end justify-between gap-1.5 h-24">
                {[45, 80, 60, 95, 70, 85, 50, 90, 65, 100].map((val, idx) => {
                  const barHeight = Math.min(100, Math.max(15, (val * auraFreq) / 100));
                  return (
                    <div
                      key={idx}
                      style={{ height: `${barHeight}%` }}
                      className="flex-1 bg-gradient-to-t from-cyan-400 via-fuchsia-400 to-yellow-300 rounded-t-sm transition-all duration-150"
                    />
                  );
                })}
              </div>
            </div>

            <label className="block text-xs font-black uppercase text-purple-950 mb-2">
              Tune Vocal Projection: {auraFreq}%
            </label>
            <input
              type="range"
              min="20"
              max="100"
              value={auraFreq}
              onChange={(e) => setAuraFreq(Number(e.target.value))}
              className="w-full accent-fuchsia-600 cursor-pointer"
            />
          </div>

          <button
            onClick={() => setAuraFreq(100)}
            className="mt-6 w-full y2k-chrome py-3.5 rounded-full font-black italic uppercase text-sm text-purple-950 hover:scale-[1.02] active:scale-95 transition-transform"
          >
            ★ Boost to 100% Millennium Aura ★
          </button>
        </div>

      </div>
    </div>
  );
}
