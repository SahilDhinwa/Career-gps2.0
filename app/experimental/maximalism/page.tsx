"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Flame, Sparkles, Zap, Star, 
  Smile, Layers, Eye, RefreshCw, Award 
} from "lucide-react";

export default function MaximalismPage() {
  const [chaosLevel, setChaosLevel] = useState<number>(2);
  const [activeSticker, setActiveSticker] = useState<number>(0);

  const mnemonics = [
    {
      tag: "CHARAKA SUTRA #01",
      title: "SHAD-VIRECHANA ASHRAYA",
      code: "K-M-P-P-T-F",
      breakdown: "Ksheera (Latex) • Moola (Root) • Patra (Leaf) • Pushpa (Flower) • Twak (Bark) • Phala (Fruit)",
      bg: "bg-[#FF007F] text-white",
      border: "border-yellow-300",
      rotate: "-rotate-2",
    },
    {
      tag: "RASA SHASTRA",
      title: "MAHARASA GROUP (8)",
      code: "A-V-M-S-S-S-K-C",
      breakdown: "Abhraka • Vaikranta • Makshika • Vimala • Shilajatu • Sasyaka • Chapala • Rasaka",
      bg: "bg-[#00F0FF] text-black",
      border: "border-black",
      rotate: "rotate-2",
    },
    {
      tag: "VEBLEN GOOD AURA",
      title: "THE 3-SECOND ROOM RULE",
      code: "P-P-P PROTOCOL",
      breakdown: "Posture First • Pause 1.5s Before Speaking • Project From Diaphragm",
      bg: "bg-[#FFE600] text-black",
      border: "border-fuchsia-600",
      rotate: "-rotate-1",
    },
  ];

  return (
    <div 
      className="min-h-screen bg-[#120024] text-white font-sans pt-6 pb-32 px-4 sm:px-8 relative overflow-x-hidden selection:bg-yellow-300 selection:text-black"
      style={{
        backgroundImage: `radial-gradient(#FF007F 1.5px, transparent 1.5px), radial-gradient(#FFE600 1.5px, #120024 1.5px)`,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
      }}
    >
      {/* Top Loud Maximalist Bar */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-12 bg-gradient-to-r from-fuchsia-600 via-amber-400 to-cyan-400 p-1 rounded-3xl shadow-[0_10px_40px_rgba(255,0,127,0.5)]">
        <div className="w-full bg-black/90 rounded-[20px] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <Link 
            href="/experimental" 
            className="inline-flex items-center gap-2 bg-yellow-300 text-black font-black text-xs uppercase px-4 py-2 rounded-full border-2 border-white hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Lab
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-300">
              Dopamine Mode:
            </span>
            {[1, 2, 3].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setChaosLevel(lvl)}
                className={`px-3 py-1 rounded-full font-black text-xs uppercase border-2 transition-all ${
                  chaosLevel === lvl
                    ? "bg-[#FF007F] text-white border-yellow-300 scale-110"
                    : "bg-white/10 text-white/60 border-transparent"
                }`}
              >
                {lvl === 1 ? "Mild" : lvl === 2 ? "Loud" : "Overdrive"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Explosive Collage Hero */}
      <div className="max-w-6xl mx-auto relative mb-16">
        <div className="bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-900 border-4 border-yellow-300 rounded-[40px] p-8 sm:p-14 shadow-[12px_12px_0px_#00F0FF] relative overflow-hidden">
          
          {/* Floating Sticker Badges */}
          {chaosLevel >= 2 && (
            <div className="hidden md:flex absolute top-6 right-8 bg-yellow-300 text-black font-black text-xs uppercase px-4 py-2 rounded-full border-4 border-black rotate-12 shadow-xl items-center gap-1.5">
              <Zap className="w-4 h-4 fill-black" /> MORE IS MORE!
            </div>
          )}
          {chaosLevel === 3 && (
            <div className="hidden md:flex absolute bottom-8 right-12 bg-[#00F0FF] text-black font-black text-xs uppercase px-4 py-2 rounded-xl border-4 border-black -rotate-6 shadow-xl items-center gap-1.5 animate-bounce">
              <Star className="w-4 h-4 fill-black" /> ZERO BORING PIXELS
            </div>
          )}

          <div className="inline-flex items-center gap-2 bg-black text-yellow-300 border-2 border-yellow-300 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest mb-6 -rotate-2">
            <Flame className="w-4 h-4 text-[#FF007F]" /> Style #02 • Dopamine Maximalism
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.95] tracking-tighter mb-6 drop-shadow-[4px_4px_0px_#000000]">
            BREAK THE <br />
            <span className="text-yellow-300 underline decoration-wavy decoration-[#00F0FF]">
              SILENCE.
            </span>
          </h1>

          <p className="text-base sm:text-xl font-bold bg-black/50 backdrop-blur-md border-2 border-white/30 p-5 rounded-2xl max-w-2xl leading-relaxed">
            Minimalism whispers; Maximalism shouts. By layering clashing neon palettes, tilted sticker geometry, and bold visual hooks, high-yield mnemonics burn into your visual memory permanently.
          </p>
        </div>
      </div>

      {/* Interactive Mnemonic Sticker Wall */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight bg-yellow-300 text-black px-5 py-2 border-4 border-black shadow-[6px_6px_0px_#FF007F] -rotate-1">
            Interactive Mnemonic Sticker Wall
          </h2>
          <span className="text-xs font-black uppercase bg-white text-black px-4 py-2 rounded-full border-2 border-black">
            Tap any card to pin &amp; inspect
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mnemonics.map((item, idx) => {
            const isSelected = activeSticker === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveSticker(idx)}
                className={`${item.bg} border-4 ${item.border} rounded-3xl p-7 cursor-pointer transition-all duration-300 shadow-[10px_10px_0px_#000000] ${
                  chaosLevel >= 2 ? item.rotate : ""
                } ${isSelected ? "scale-105 ring-4 ring-white" : "hover:scale-[1.03]"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black text-white font-black text-[10px] uppercase px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <Sparkles className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-black uppercase leading-tight mb-2">
                  {item.title}
                </h3>

                <div className="my-4 p-3 bg-black text-yellow-300 font-mono font-black text-lg text-center rounded-xl border-2 border-white">
                  {item.code}
                </div>

                <p className="text-sm font-extrabold leading-relaxed">
                  {item.breakdown}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checkerboard Callout Banner */}
      <div className="max-w-6xl mx-auto bg-white text-black border-4 border-black rounded-3xl p-8 shadow-[10px_10px_0px_#FFE600] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#FF007F] text-white border-4 border-black flex items-center justify-center shrink-0 rotate-6">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-2xl font-black uppercase">When to Use Maximalism?</h4>
            <p className="text-sm font-bold text-neutral-700">
              Perfect for gamified quiz victory screens, hackathon announcements, and viral social share cards.
            </p>
          </div>
        </div>

        <Link
          href="/experimental"
          className="shrink-0 bg-black text-yellow-300 hover:bg-[#FF007F] hover:text-white font-black text-sm uppercase px-7 py-4 rounded-2xl border-4 border-black transition-colors"
        >
          Explore Next Style →
        </Link>
      </div>

    </div>
  );
}
