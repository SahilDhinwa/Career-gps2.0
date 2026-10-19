"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, LayoutGrid, Flame, BookOpen, Leaf, 
  Award, Activity, Globe, CheckCircle2, Sparkles, ArrowUpRight 
} from "lucide-react";

export default function BentoUIPage() {
  const [selectedDosha, setSelectedDosha] = useState<"Vata" | "Pitta" | "Kapha">("Pitta");

  const doshaData = {
    Vata: {
      elements: "Akasha (Ether) + Vayu (Air)",
      qualities: "Ruksha (Dry), Laghu (Light), Sheeta (Cold), Chala (Mobile)",
      studyTip: "Best with structured routines, warm herbal tea, and written mind-maps to ground rapid thoughts.",
      color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    },
    Pitta: {
      elements: "Agni (Fire) + Jala (Water)",
      qualities: "Teekshna (Sharp), Ushna (Hot), Laghu (Light), Sara (Fluid)",
      studyTip: "High analytical intelligence (`Medha`). Excels in competitive viva & clinical diagnosis when keeping cool.",
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    Kapha: {
      elements: "Prithvi (Earth) + Jala (Water)",
      qualities: "Guru (Heavy), Snigdha (Unctuous), Sthira (Stable), Mridu (Soft)",
      studyTip: "Unmatched long-term memory retention (`Dhriti`). Once a Samhita verse is learned, it is never forgotten.",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans pt-6 pb-32 px-4 sm:px-8">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-10 bg-zinc-900/90 border border-zinc-800 px-5 py-3.5 rounded-2xl">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <LayoutGrid className="w-3.5 h-3.5" /> Style #11 • Bento Grid Architecture
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">
          Your Entire Academic Life. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#D4AF37] to-indigo-400">
            One Modular Bento Grid.
          </span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
          Inspired by Apple and Linear. Bento UI packs complex student dashboards—clinical postings, herbology cards, Dosha calculators, and global speaking streaks—into zero-waste modular compartments.
        </p>
      </div>

      {/* THE BENTO GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
        
        {/* BENTO BOX 1: Interactive Tridosha Prakriti Analyzer (Spans 7 cols) */}
        <div className="md:col-span-6 lg:col-span-7 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#D4AF37]" /> Interactive Prakriti Study Profiler
              </span>
              <div className="inline-flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                {(["Vata", "Pitta", "Kapha"] as const).map((dosha) => (
                  <button
                    key={dosha}
                    onClick={() => setSelectedDosha(dosha)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedDosha === dosha 
                        ? "bg-zinc-800 text-white shadow-sm" 
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {dosha}
                  </button>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border mb-6 ${doshaData[selectedDosha].color}`}>
              <p className="text-xs font-mono uppercase opacity-80 mb-1">Panchamahabhuta Composition</p>
              <h2 className="text-2xl font-black mb-2">{selectedDosha} Dominant Scholar</h2>
              <p className="text-xs font-semibold opacity-90">{doshaData[selectedDosha].elements}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-2xl">
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Classical Gunas (Attributes)</span>
                <p className="text-zinc-200 font-medium">{doshaData[selectedDosha].qualities}</p>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-2xl">
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Exam & Viva Strategy</span>
                <p className="text-zinc-300">{doshaData[selectedDosha].studyTip}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BENTO BOX 2: Dravyaguna Herb of the Day (Spans 5 cols) */}
        <div className="md:col-span-6 lg:col-span-5 bg-gradient-to-br from-[#0e2218] via-zinc-900 to-zinc-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <Leaf className="w-3.5 h-3.5" /> Dravyaguna Spotlight
              </span>
              <span className="text-xs font-mono text-zinc-400">Prof II • Paper I</span>
            </div>

            <h3 className="text-3xl font-black text-white mb-1">Ashwagandha</h3>
            <p className="text-sm font-serif italic text-emerald-300/80 mb-6">
              Withania somnifera • Family: Solanaceae
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-black/40 border border-white/10 p-3.5 rounded-2xl">
                <p className="text-[10px] font-mono uppercase text-zinc-400">Rasa / Guna</p>
                <p className="text-xs font-bold text-white mt-1">Tikta, Kashaya / Laghu, Snigdha</p>
              </div>
              <div className="bg-black/40 border border-white/10 p-3.5 rounded-2xl">
                <p className="text-[10px] font-mono uppercase text-zinc-400">Vipaka / Virya</p>
                <p className="text-xs font-bold text-emerald-400 mt-1">Madhura / Ushna (Hot)</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-zinc-300 font-medium">Karma: Balya, Rasayana, Vatakaphahara</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        {/* BENTO BOX 3: Rural-to-Global Communication Streak (Spans 4 cols) */}
        <div className="md:col-span-3 lg:col-span-4 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-zinc-800 text-[#D4AF37]">
              Veblen Good
            </span>
          </div>

          <div className="my-2">
            <p className="text-3xl font-black text-white">18 Days</p>
            <p className="text-sm font-bold text-zinc-300 mt-1"> Articulation & Aura Streak</p>
            <p className="text-xs text-zinc-500 mt-1">
              Daily 10-minute English clinical case presentation practice for international symposiums.
            </p>
          </div>

          <div className="grid grid-cols-7 gap-1.5 mt-6">
            {[1, 2, 3, 4, 5, 6, 7].map((d) => (
              <div key={d} className="h-2 rounded-full bg-[#D4AF37]" />
            ))}
          </div>
        </div>

        {/* BENTO BOX 4: NCISM Prof Syllabus Tracker (Spans 4 cols) */}
        <div className="md:col-span-3 lg:col-span-4 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-indigo-400 font-bold">84% Complete</span>
          </div>

          <div className="space-y-3 my-2">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Rachana Sharir (Anatomy)</span>
                <span className="text-emerald-400">92%</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-emerald-400 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Kriya Sharir (Physiology)</span>
                <span className="text-indigo-400">78%</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden">
                <div className="w-[78%] h-full bg-indigo-400 rounded-full" />
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-500 mt-4 pt-3 border-t border-zinc-800/80">
            Next Mock Viva: Marma Sharir (Tomorrow, 5:00 PM)
          </p>
        </div>

        {/* BENTO BOX 5: Quick Action Callout (Spans 4 cols) */}
        <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#D4AF37] to-amber-500 text-black rounded-3xl p-6 flex flex-col justify-between shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest bg-black/15 px-3 py-1 rounded-full">
              Bento Advantage
            </span>
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="my-4">
            <h3 className="text-2xl font-black leading-tight mb-2">
              Everything Scannable in 3 Seconds.
            </h3>
            <p className="text-xs font-bold text-black/80 leading-relaxed">
              Students hate digging through 5 nested menus. Bento grids surface notes, clinical tools, and progress bars on a single screen.
            </p>
          </div>

          <Link 
            href="/bams-hub" 
            className="w-full py-3 rounded-2xl bg-black text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-900 transition-colors"
          >
            <span>Visit Live BAMS Hub</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
