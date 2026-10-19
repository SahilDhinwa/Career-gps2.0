"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Compass, Volume2, Award, Check } from "lucide-react";

export default function SkeuomorphismPage() {
  const [activeFinger, setActiveFinger] = useState<"vata" | "pitta" | "kapha">("vata");
  const [lampOn, setLampOn] = useState(true);

  const pulseDetails = {
    vata: {
      finger: "Index Finger (Tarjani)",
      gati: "Sarpa / Jalauka Gati (Cobra & Leech Motion)",
      feel: "Fast, slender, irregular, and crooked under light superficial pressure.",
      clinical: "Indicates elevated Vata—common during late-night exam stress or irregular meals.",
    },
    pitta: {
      finger: "Middle Finger (Madhyama)",
      gati: "Mandooka / Kaka Gati (Frog & Crow Bounding)",
      feel: "Prominent, warm, bounding, and rhythmic under moderate pressure.",
      clinical: "Indicates strong Agni and sharp metabolic focus; excess leads to acidity or irritability.",
    },
    kapha: {
      finger: "Ring Finger (Anamika)",
      gati: "Hamsa / Paravata Gati (Swan & Peacock Glide)",
      feel: "Deep, slow, steady, broad, and regular under firm pressure.",
      clinical: "Indicates physiological stability, strong immunity (Ojas), and calm endurance.",
    },
  };

  return (
    <div className="min-h-screen bg-[#1a120b] text-[#f5e6c8] font-serif pt-6 pb-32 px-4 sm:px-8">
      
      {/* Top Brushed Brass Navigation Plaque */}
      <div className="max-w-5xl mx-auto mb-12 p-4 rounded-xl bg-gradient-to-b from-[#3d2817] to-[#24160b] border-2 border-[#8b5a2b] shadow-[0_10px_25px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] flex flex-wrap items-center justify-between gap-4">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-b from-[#4a321f] to-[#291a0e] border border-[#a67c52] text-[#f5e6c8] text-xs font-sans font-bold uppercase tracking-wider shadow-[0_4px_6px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] active:translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>

        <div className="px-4 py-1.5 rounded-md bg-gradient-to-b from-[#e6c253] via-[#c59b27] to-[#8a660f] text-black font-sans font-black text-xs uppercase tracking-widest border border-[#fff2b2] shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
          Style #08 • Tactile Skeuomorphism
        </div>
      </div>

      {/* Stitched Leather Notebook Container */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#332012] via-[#26170c] to-[#1c1008] p-4 sm:p-8 border-4 border-[#5c3a21] shadow-[0_30px_70px_rgba(0,0,0,0.9),inset_0_2px_6px_rgba(255,255,255,0.15)]">
        
        {/* Inner Gold Stitched Border */}
        <div className="border-2 border-dashed border-[#c59b27]/45 rounded-2xl p-6 sm:p-10 relative">
          
          {/* Desk Lamp Switch Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 mb-8 border-b border-[#8b5a2b]/40">
            <div>
              <p className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#d4af37] mb-2">
                Real-World Material Simulation
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#f7e9ce] drop-shadow-[0_3px_3px_rgba(0,0,0,0.9)]">
                The Vaidya&apos;s Physical Desk
              </h1>
            </div>

            {/* Physical Metal Toggle Switch */}
            <button
              onClick={() => setLampOn(!lampOn)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-600 text-neutral-900 border-2 border-white shadow-[0_6px_12px_rgba(0,0,0,0.7),inset_0_2px_2px_white] active:translate-y-0.5 font-sans font-black text-xs uppercase"
            >
              <span className={`w-3 h-3 rounded-full border border-black/40 ${
                lampOn ? "bg-amber-400 shadow-[0_0_10px_#fbbf24]" : "bg-neutral-700"
              }`} />
              <span>Brass Study Lamp: {lampOn ? "ON" : "OFF"}</span>
            </button>
          </div>

          {/* Interactive Nadi Pariksha (3-Finger Pulse Simulator) */}
          <div 
            className={`rounded-2xl p-6 sm:p-8 border-2 transition-all duration-500 ${
              lampOn 
                ? "bg-[#f4e7ce] text-[#2b1b0e] border-[#b8860b] shadow-[inset_0_0_40px_rgba(184,134,11,0.25),0_15px_30px_rgba(0,0,0,0.6)]" 
                : "bg-[#21170f] text-[#a38f74] border-[#4a3525] shadow-inner"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-sans font-extrabold uppercase tracking-widest text-[#8b5a2b] block">
                  Interactive Clinical Instrument
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Nadi Pariksha • Three-Finger Tactile Console
                </h2>
              </div>
              <span className="text-xs font-sans font-bold px-3 py-1 rounded bg-black/10 border border-black/15">
                Press a physical key below
              </span>
            </div>

            {/* 3 Physical Beveled Keys */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-sans">
              {[
                { id: "vata" as const, label: "1. Index • Vata Nadi", sub: "Superficial Touch" },
                { id: "pitta" as const, label: "2. Middle • Pitta Nadi", sub: "Moderate Touch" },
                { id: "kapha" as const, label: "3. Ring • Kapha Nadi", sub: "Deep Firm Touch" },
              ].map((btn) => {
                const isSelected = activeFinger === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setActiveFinger(btn.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? "bg-gradient-to-b from-[#d4af37] to-[#996515] text-black border-[#fff3b0] translate-y-1 shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)]"
                        : "bg-gradient-to-b from-[#3d2716] to-[#24160b] text-[#f5e6c8] border-[#785133] shadow-[0_6px_0_#120a04,0_10px_15px_rgba(0,0,0,0.5)] hover:brightness-110"
                    }`}
                  >
                    <p className="font-black text-sm uppercase">{btn.label}</p>
                    <p className={`text-xs mt-1 ${isSelected ? "text-black/80 font-bold" : "text-[#c7b299]"}`}>
                      {btn.sub}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Parchment Readout Panel */}
            <div className="p-6 rounded-xl bg-black/10 border border-[#8b5a2b]/40 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8b5a2b]/30 pb-2">
                <span className="font-sans font-black text-xs uppercase tracking-wider text-[#8b5a2b]">
                  Selected Sensor: {pulseDetails[activeFinger].finger}
                </span>
                <span className="font-sans font-bold text-xs uppercase px-2.5 py-0.5 rounded bg-[#8b5a2b] text-white">
                  {pulseDetails[activeFinger].gati}
                </span>
              </div>
              <p className="text-base sm:text-lg font-bold">
                Tactile Sensation: <span className="font-normal">{pulseDetails[activeFinger].feel}</span>
              </p>
              <p className="text-sm opacity-85 font-sans">
                <strong>Clinical Note:</strong> {pulseDetails[activeFinger].clinical}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
