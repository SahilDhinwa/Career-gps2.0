"use client";

import Link from "next/link";
import BamsReels from "@/components/BamsReels";
import { VisitorTracker } from "@/components/VisitorTracker";
import { 
  ArrowLeft, Leaf, BrainCircuit, Sparkles, Download, 
  ChevronRight, PenTool, FileText, FlaskConical, Printer, CheckCircle2 
} from "lucide-react";
import AyurvedicBackground from "@/components/AyurvedicBackground"; 
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function BAMSProf3Dashboard() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // 🦇 TACTICAL OVERRIDE: Check if Batman mode is active
  const isBatman = mounted && (theme === "batman" || resolvedTheme === "batman");

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6 ${isBatman ? "bg-transparent" : "bg-background"}`}>
      
      {/* 🦇 HIDE AYURVEDIC BACKGROUND IN BATMAN MODE */}
      {!isBatman && <AyurvedicBackground />}
      
      {/* 🦇 HIDE AMBIENT GLOWS IN BATMAN MODE */}
      {!isBatman && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/bams-scholar" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to BAMS Scholar Hub
        </Link>

        {/* 🚀 TRACKER */}
        <VisitorTracker />

        {/* Dashboard Header */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          
          {!isBatman && (
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          )}
          
          <div className="flex flex-wrap gap-3 mb-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-800 dark:text-amber-500 border border-amber-500/20 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider shadow-sm uppercase">
              <Leaf className="w-3.5 h-3.5" /> NCISM 3rd / Final Prof Curriculum
            </span>
            <span className="inline-flex items-center gap-1.5 bg-surface border border-surfaceBorder text-foreground/70 px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase">
              5 Core Pillars Active
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-sm relative z-10">
            BAMS 3rd Prof <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Command Center</span>
          </h1>
          
          <p className="text-lg text-foreground/70 font-medium max-w-2xl relative z-10">
            Your clinical &amp; surgical command vault for Final Prof examinations and AIAPGET. Master Kayachikitsa prescriptions, Panchakarma therapies, Shalya &amp; Shalakya surgery, and Prasuti-Stri Roga case sheets.
          </p>
        </div>

        {/* =========================================================
            THE 5-PILLAR SYMMETRICAL BENTO GRID (STRICTLY NESTED ROUTES)
           ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          
          {/* Pillar 1: Take MCQs */}
          <Link 
            href="/bams-scholar/prof-3/mcq-practice" 
            className="lg:col-span-2 group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <BrainCircuit className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Pillar 01</span>
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2.5">Take MCQs</h2>
            <p className="text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed">
              Test your clinical acumen with real-time quizzes covering Charaka Chikitsasthana, Sushruta Shalya Tantra, Panchakarma, and Prasuti-Stri Roga.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Test Engine <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Pillar 2: Past Papers */}
          <Link 
            href="/bams-scholar/prof-3/papers" 
            className="lg:col-span-2 group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Download className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Pillar 02</span>
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2.5">Past Papers</h2>
            <p className="text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed">
              A complete PDF archive of Final Prof university examination papers across Kayachikitsa, Shalya, Shalakya, Panchakarma, and OB-GYN.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              PDF Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Pillar 3: Read Notes */}
          <Link 
            href="/bams-scholar/prof-3/notes" 
            className="lg:col-span-2 group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <FileText className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Pillar 03</span>
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2.5">Read Notes</h2>
            <p className="text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed">
              Streamlined clinical revision notes covering Chikitsa Sutras, Shashti Upakrama, Kriyakalpa, Yonivyapada, and Kaumarbhritya.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Study Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Pillar 4: Handwritten Notes */}
          <Link 
            href="/bams-scholar/prof-3/short-notes" 
            className="lg:col-span-3 group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6 md:p-7"
          >
            <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-20 pointer-events-none ${isBatman ? "grayscale opacity-10" : ""}`}></div>
            
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <PenTool className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-sm text-[10px] font-bold text-amber-700 dark:text-amber-500 uppercase tracking-widest shadow-sm">
                  <Sparkles className="w-3 h-3" /> Dual-Theme
                </span>
                <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Pillar 04</span>
              </div>
            </div>

            <h2 
              className="font-heading text-2xl font-bold text-foreground mb-2.5 relative z-10" 
              style={{ fontFamily: "'Patrick Hand', 'Kalam', cursive, sans-serif" }}
            >
              Handwritten Notebook
            </h2>
            <p className="text-foreground/70 text-xs md:text-sm font-medium mb-5 flex-grow leading-relaxed relative z-10">
              Point-by-point clinical prescriptions and surgical notes on ruled notebook canvas with instant switching to Tactical Flowchart view.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-background/70 border border-surfaceBorder text-foreground/70">
                Kayachikitsa
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-background/70 border border-surfaceBorder text-foreground/70">
                Shalya Tantra
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-background/70 border border-surfaceBorder text-foreground/70">
                32px Grid
              </span>
            </div>

            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500 font-bold py-3 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto relative z-10">
              Open Notebook <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Pillar 5: Practical Manuals & PDFs */}
          <Link 
            href="/bams-scholar/prof-3/practical" 
            className="sm:col-span-2 lg:col-span-3 group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6 md:p-7"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <FlaskConical className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest shadow-sm">
                  <Sparkles className="w-3 h-3" /> Blank + Solved
                </span>
                <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Pillar 05</span>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-2.5 relative z-10">
              Practical Manuals &amp; Records
            </h2>
            <p className="text-foreground/70 text-xs md:text-sm font-medium mb-5 flex-grow leading-relaxed relative z-10">
              Hospital IPD/OPD bedside case-taking proformas, Panchakarma therapy monitoring charts, and Shalya Yantra-Shastra viva logs.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-sm bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500">
                <Printer className="w-3 h-3" /> Printable Empty PDFs
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500">
                <CheckCircle2 className="w-3 h-3" /> Solved Viva Records
              </span>
            </div>

            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-500 font-bold py-3 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto relative z-10">
              Open Practical Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
          
        </div>

        <BamsReels />

      </div>
    </div>
  );
}
