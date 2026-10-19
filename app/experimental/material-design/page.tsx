"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Layers, Plus, Check, Palette, 
  Calendar, BookOpen, Bell, Sparkles 
} from "lucide-react";

type SeedKey = "amethyst" | "emerald" | "gold" | "coral";

export default function MaterialDesignPage() {
  const [seed, setSeed] = useState<SeedKey>("amethyst");
  const [selectedChip, setSelectedChip] = useState<string>("All Modules");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Revise Charaka Chikitsa — Jwara Adhyaya", tag: "Kayachikitsa", done: true },
    { id: 2, title: "Practice 5-Minute English Case Presentation", tag: "Veblen Good", done: false },
    { id: 3, title: "Identify 15 Dry Specimens in Dravyaguna Lab", tag: "Practical", done: false },
  ]);

  const palettes: Record<SeedKey, {
    name: string;
    bg: string;
    surface: string;
    surfaceVariant: string;
    primary: string;
    onPrimary: string;
    tonal: string;
    text: string;
  }> = {
    amethyst: {
      name: "Material Amethyst",
      bg: "bg-[#FEF7FF]",
      surface: "bg-[#F3EDF7]",
      surfaceVariant: "bg-[#E8DEF8]",
      primary: "bg-[#6750A4]",
      onPrimary: "text-white",
      tonal: "text-[#21005D]",
      text: "text-[#1D1B20]",
    },
    emerald: {
      name: "Ayurveda Leaf",
      bg: "bg-[#F4FBF7]",
      surface: "bg-[#E6F4EC]",
      surfaceVariant: "bg-[#C8E6D5]",
      primary: "bg-[#0F6D48]",
      onPrimary: "text-white",
      tonal: "text-[#063923]",
      text: "text-[#111F18]",
    },
    gold: {
      name: "Veblen Ochre",
      bg: "bg-[#FFFBF2]",
      surface: "bg-[#F7EFE0]",
      surfaceVariant: "bg-[#EFE0C2]",
      primary: "bg-[#7A5900]",
      onPrimary: "text-white",
      tonal: "text-[#3D2B00]",
      text: "text-[#1F1B13]",
    },
    coral: {
      name: "Shalya Coral",
      bg: "bg-[#FFF8F6]",
      surface: "bg-[#FCEAE6]",
      surfaceVariant: "bg-[#FFDAD4]",
      primary: "bg-[#9C4135]",
      onPrimary: "text-white",
      tonal: "text-[#410002]",
      text: "text-[#231918]",
    },
  };

  const p = palettes[seed];

  const toggleTask = (id: number) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const addQuickTask = () => {
    const nextId = tasks.length + 1;
    setTasks((prev) => [
      ...prev,
      { id: nextId, title: `Mock Viva Session #${nextId} — Ashtanga Hridaya`, tag: "Quick FAB", done: false },
    ]);
  };

  return (
    <div className={`min-h-screen ${p.bg} ${p.text} font-sans pt-6 pb-32 px-4 sm:px-8 transition-colors duration-300`}>
      
      {/* Material 3 Top App Bar */}
      <div className={`max-w-5xl mx-auto ${p.surface} rounded-full px-5 py-3 mb-10 flex flex-wrap items-center justify-between gap-4 shadow-sm`}>
        <Link 
          href="/experimental" 
          className={`inline-flex items-center gap-2 ${p.tonal} font-semibold text-sm px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors`}
        >
          <ArrowLeft className="w-4 h-4" /> Directory
        </Link>

        {/* Dynamic Color Wallpaper Seed Selector */}
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 opacity-60 mr-1" />
          <span className="text-xs font-medium opacity-75 hidden sm:inline">Dynamic Seed:</span>
          {(["amethyst", "emerald", "gold", "coral"] as SeedKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSeed(key)}
              className={`px-3 py-1 rounded-full text-xs font-bold capitalize transition-all ${
                seed === key ? `${p.primary}${p.onPrimary} shadow-md scale-105` : "bg-black/5 opacity-70"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Material You Hero Card (Elevation Level 2) */}
      <div className={`max-w-5xl mx-auto ${p.surface} rounded-[32px] p-8 sm:p-12 mb-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]`}>
        <div className={`inline-flex items-center gap-2 ${p.surfaceVariant} ${p.tonal} px-4 py-1.5 rounded-full text-xs font-bold mb-6`}>
          <Layers className="w-3.5 h-3.5" /> Style #10 • Google Material You (M3)
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Personal, Adaptive &amp; Tonal.
        </h1>
        <p className="text-base sm:text-lg opacity-75 max-w-2xl leading-relaxed">
          Google&apos;s Material 3 replaces stark white cards and heavy drop shadows with <strong>tonal surface tinting</strong>, pill-shaped interactive chips, and adaptive color palettes generated from a single seed color.
        </p>
      </div>

      {/* M3 Filter Chips Row */}
      <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2.5 mb-8">
        {["All Modules", "Kayachikitsa", "Veblen Good", "Practical"].map((chip) => {
          const active = selectedChip === chip;
          return (
            <button
              key={chip}
              onClick={() => setSelectedChip(chip)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                active
                  ? `${p.surfaceVariant}${p.tonal} shadow-xs`
                  : "border border-black/15 opacity-70 hover:opacity-100"
              }`}
            >
              {active && <Check className="w-3.5 h-3.5" />}
              <span>{chip}</span>
            </button>
          );
        })}
      </div>

      {/* Material Tonal Cards & Interactive Planner */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Task List (8 cols) */}
        <div className={`lg:col-span-8 ${p.surface} rounded-[28px] p-6 sm:p-8 space-y-4 shadow-xs`}>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">Today&apos;s Scholarly Queue</h2>
            <span className="text-xs font-semibold opacity-60">
              {tasks.filter((t) => t.done).length} of {tasks.length} completed
            </span>
          </div>

          {tasks
            .filter((t) => selectedChip === "All Modules" || t.tag === selectedChip)
            .map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-5 rounded-2xl flex items-center justify-between gap-4 cursor-pointer transition-all ${
                  task.done ? "bg-black/5 opacity-60" : "bg-white shadow-xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-colors ${
                    task.done ? `${p.primary} border-transparent text-white` : "border-black/30"
                  }`}>
                    {task.done && <Check className="w-4 h-4" />}
                  </div>
                  <span className={`font-semibold text-sm sm:text-base ${task.done ? "line-through" : ""}`}>
                    {task.title}
                  </span>
                </div>

                <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${p.surfaceVariant} ${p.tonal}`}>
                  {task.tag}
                </span>
              </div>
            ))}
        </div>

        {/* Elevation & FAB Showcase (4 cols) */}
        <div className={`lg:col-span-4 ${p.surfaceVariant} ${p.tonal} rounded-[28px] p-7 flex flex-col justify-between min-h-[260px] shadow-md`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider opacity-75">
              Signature M3 Component
            </span>
            <h3 className="text-2xl font-bold mt-1 mb-3">
              Extended Floating Action Button (FAB)
            </h3>
            <p className="text-xs leading-relaxed opacity-80">
              Material Design places the primary user action inside a prominent, squircle-shaped Floating Action Button for effortless one-handed mobile reach.
            </p>
          </div>

          <button
            onClick={addQuickTask}
            className={`mt-6 w-full py-4 px-6 rounded-2xl ${p.primary} ${p.onPrimary} font-bold text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2`}
          >
            <Plus className="w-5 h-5" />
            <span>Add Mock Viva Task</span>
          </button>
        </div>

      </div>
    </div>
  );
}
