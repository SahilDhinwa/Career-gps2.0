"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Target, Power, Volume2, Sun, 
  Heart, Bookmark, Sparkles 
} from "lucide-react";

export default function NeumorphismPage() {
  const [powerOn, setPowerOn] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(true);
  const [intensity, setIntensity] = useState(72);

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-slate-700 font-sans pt-6 pb-32 px-4 sm:px-8">
      
      <style dangerouslySetInnerHTML={{__html: `
        .neu-flat {
          background: #e0e5ec;
          box-shadow: 10px 10px 20px #b8bec7, -10px -10px 20px #ffffff;
        }
        .neu-pressed {
          background: #e0e5ec;
          box-shadow: inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff;
        }
        .neu-btn {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
          transition: all 0.2s ease;
        }
        .neu-btn:active, .neu-btn-active {
          box-shadow: inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff;
        }
      `}} />

      {/* Top Navigation */}
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-12 neu-flat px-6 py-4 rounded-2xl">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl neu-pressed text-indigo-600 text-xs font-extrabold uppercase tracking-wider">
          <Target className="w-3.5 h-3.5" /> Style #04 • Soft Neumorphism
        </div>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl sm:text-6xl font-black text-slate-700 tracking-tight mb-4">
          Tactile <span className="text-indigo-500">Neumorphism</span>
        </h1>
        <p className="text-slate-500 text-base sm:text-lg">
          Cards and switches aren&apos;t placed on top of the background—they are extruded directly out of the same matte surface using dual opposing light and dark shadows.
        </p>
      </div>

      {/* Main Tactile Console */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Extruded Rotary Dial & Power Console */}
        <div className="md:col-span-5 neu-flat rounded-[36px] p-8 flex flex-col items-center justify-between text-center">
          <div className="w-full flex items-center justify-between mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Study Focus Core</span>
            <span className={`w-3 h-3 rounded-full ${powerOn ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" : "bg-slate-400"}`} />
          </div>

          {/* Concentric Extruded Ring */}
          <div className="w-52 h-52 rounded-full neu-flat flex items-center justify-center my-4">
            <div className="w-36 h-36 rounded-full neu-pressed flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-indigo-500">{powerOn ? `${intensity}%` : "OFF"}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                {powerOn ? "Active Aura" : "Standby"}
              </span>
            </div>
          </div>

          {/* Tactile Push Buttons */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => setPowerOn(!powerOn)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center neu-btn ${powerOn ? "neu-btn-active text-emerald-600" : "text-slate-500"}`}
            >
              <Power className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLiked(!liked)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center neu-btn ${liked ? "neu-btn-active text-rose-500" : "text-slate-500"}`}
            >
              <Heart className={`w-6 h-6 ${liked ? "fill-rose-500" : ""}`} />
            </button>

            <button
              onClick={() => setSaved(!saved)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center neu-btn ${saved ? "neu-btn-active text-indigo-600" : "text-slate-500"}`}
            >
              <Bookmark className={`w-6 h-6 ${saved ? "fill-indigo-600" : ""}`} />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4 font-semibold">Tap the physical switches above to toggle inset states</p>
        </div>

        {/* Right Column: Recessed Sliders & Specular Cards */}
        <div className="md:col-span-7 flex flex-col gap-8">
          
          <div className="neu-flat rounded-[36px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-indigo-500">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-700">Recessed Track Controls</h2>
                <p className="text-xs text-slate-400">Drag the slider to adjust the central core output</p>
              </div>
            </div>

            <div className="neu-pressed p-4 rounded-2xl mb-6">
              <input
                type="range"
                min="0"
                max="100"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="neu-pressed rounded-2xl p-5">
                <p className="text-xs font-bold uppercase text-slate-400">Light Shadow</p>
                <p className="text-sm font-mono font-bold text-slate-600 mt-1">#FFFFFF (-10px)</p>
              </div>
              <div className="neu-pressed rounded-2xl p-5">
                <p className="text-xs font-bold uppercase text-slate-400">Dark Shadow</p>
                <p className="text-sm font-mono font-bold text-slate-600 mt-1">#B8BEC7 (+10px)</p>
              </div>
            </div>
          </div>

          <div className="neu-flat rounded-[36px] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-500 mb-2">
                <Sparkles className="w-4 h-4" /> Industrial Design Feel
              </span>
              <h3 className="text-2xl font-black text-slate-700">Braun & Teenage Engineering</h3>
              <p className="text-sm text-slate-500 mt-1">
                Ideal for timers, audio players, and focused study dashboards.
              </p>
            </div>
            <button 
              onClick={() => setIntensity(100)}
              className="shrink-0 neu-btn px-7 py-4 rounded-2xl font-extrabold text-sm text-indigo-600"
            >
              Max Boost
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
