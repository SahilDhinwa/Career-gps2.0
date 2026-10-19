"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Square, Activity, Eye, MessageSquare, 
  Droplet, Thermometer, UserCheck, Shield, Layers 
} from "lucide-react";

export default function FlatDesignPage() {
  const [selectedFold, setSelectedFold] = useState<number>(0);

  const ashtavidha = [
    {
      num: "01",
      name: "Nadi (Pulse)",
      sanskrit: "नाडी परीक्षा",
      bg: "bg-[#2563EB]",
      icon: Activity,
      focus: "Radial artery palpation using Index (Vata), Middle (Pitta), and Ring (Kapha) fingers.",
      keySigns: "Gati (Movement), Vega (Rate), Tala (Rhythm), and Bala (Force).",
    },
    {
      num: "02",
      name: "Mutra (Urine)",
      sanskrit: "मूत्र परीक्षा",
      bg: "bg-[#D97706]",
      icon: Droplet,
      focus: "Morning mid-stream collection and classical Taila Bindu Pariksha (Sesame oil drop test).",
      keySigns: "Varna (Color), Gandha (Odor), and direction/shape of oil spread.",
    },
    {
      num: "03",
      name: "Mala (Stool)",
      sanskrit: "मल परीक्षा",
      bg: "bg-[#059669]",
      icon: Layers,
      focus: "Assessment of digestive fire (Jatharagni) and presence of Ama (undigested toxins).",
      keySigns: "Sama (sinks in water, foul odor) vs. Nirama (floats, clear).",
    },
    {
      num: "04",
      name: "Jihwa (Tongue)",
      sanskrit: "जिह्वा परीक्षा",
      bg: "bg-[#DC2626]",
      icon: MessageSquare,
      focus: "Visual inspection of coating, moisture, cracks, and color of the tongue.",
      keySigns: "Vata: Dry/Cracked • Pitta: Reddish/Yellow • Kapha: Thick White Coating.",
    },
    {
      num: "05",
      name: "Shabda (Voice)",
      sanskrit: "शब्द परीक्षा",
      bg: "bg-[#7C3AED]",
      icon: VolumeIcon,
      focus: "Evaluation of vocal resonance, clarity, and respiratory/bowel sounds.",
      keySigns: "Guru (Heavy voice in Kapha), Sphuta (Sharp/Clear in Pitta), Ruksha (Hoarse in Vata).",
    },
    {
      num: "06",
      name: "Sparsha (Touch)",
      sanskrit: "स्पर्श परीक्षा",
      bg: "bg-[#0891B2]",
      icon: Thermometer,
      focus: "Palpation of skin temperature, roughness, moisture, and organ tenderness.",
      keySigns: "Sheeta (Cold in Vata/Kapha), Ushna (Hot in Pitta/Jwara).",
    },
    {
      num: "07",
      name: "Drik (Eyes)",
      sanskrit: "दृक् परीक्षा",
      bg: "bg-[#4F46E5]",
      icon: Eye,
      focus: "Inspection of sclera, conjunctiva, luster, and ocular movement.",
      keySigns: "Peeta (Yellowish in Kamala/Pitta), Shweta (Pale in Pandu/Kapha).",
    },
    {
      num: "08",
      name: "Akriti (Build)",
      sanskrit: "आकृति परीक्षा",
      bg: "bg-[#EA580C]",
      icon: UserCheck,
      focus: "Overall constitutional anthropometry, posture, gait, and nutritional status (Sara/Samhanana).",
      keySigns: "Krisha (Lean in Vata), Madhyama (Medium in Pitta), Sthoola (Broad in Kapha).",
    },
  ];

  const activeItem = ashtavidha[selectedFold];

  return (
    <div className="min-h-screen bg-[#111827] text-white font-sans pt-6 pb-32 px-4 sm:px-8">
      
      {/* Top Flat Header (Zero Shadows, Zero Gradients, Sharp Edges) */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-10 bg-[#1F2937] p-5">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest px-5 py-3 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Directory
        </Link>

        <div className="inline-flex items-center gap-2 bg-[#10B981] text-white px-4 py-2 font-bold text-xs uppercase tracking-widest">
          <Square className="w-3.5 h-3.5 fill-white" /> Style #09 • Pure 2D Flat Design
        </div>
      </div>

      {/* Hero Block */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 mb-8">
        <div className="lg:col-span-8 bg-[#2563EB] p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200 mb-3">
            BAUHAUS &amp; METRO GEOMETRY
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            Zero Shadows. <br />
            Pure Information.
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Flat Design strips away artificial 3D bevels, blurs, and drop shadows. Color alone defines hierarchy—making clinical checklists fast to scan on any device.
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#F59E0B] text-black p-8 flex flex-col justify-between">
          <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1 self-start">
            ROGI PARIKSHA TOOL
          </span>
          <div>
            <p className="text-5xl font-black mb-1">8-Fold</p>
            <p className="text-lg font-bold uppercase">Ashtavidha Pariksha</p>
            <p className="text-xs font-semibold mt-2">
              Tap any solid color tile below to inspect its clinical diagnostic protocol.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive 8-Tile Metro Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {ashtavidha.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = selectedFold === idx;
          return (
            <button
              key={item.num}
              onClick={() => setSelectedFold(idx)}
              className={`${item.bg} p-6 text-left transition-transform flex flex-col justify-between min-h-[150px] ${
                isSelected ? "ring-4 ring-white scale-[0.98]" : "hover:opacity-90"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-2xl font-black opacity-40">{item.num}</span>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold opacity-80">{item.sanskrit}</p>
                <p className="text-lg font-black uppercase tracking-wide">{item.name}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Diagnostic Readout Block */}
      <div className={`max-w-6xl mx-auto ${activeItem.bg} p-8 sm:p-10 transition-colors duration-200`}>
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-white/25">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest bg-black/25 px-3 py-1">
              ACTIVE DIAGNOSTIC MODULE #{activeItem.num}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mt-2">
              {activeItem.name} — {activeItem.sanskrit}
            </h2>
          </div>
          <Shield className="w-10 h-10 opacity-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/20 p-6">
            <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-2">
              Clinical Examination Method
            </p>
            <p className="text-base sm:text-lg font-bold leading-relaxed">
              {activeItem.focus}
            </p>
          </div>

          <div className="bg-black/20 p-6">
            <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-2">
              Differential Dosha Indicators
            </p>
            <p className="text-base sm:text-lg font-bold leading-relaxed">
              {activeItem.keySigns}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

function VolumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
