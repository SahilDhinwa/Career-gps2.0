"use client";

import Link from "next/link";
import BamsReels from "@/components/BamsReels";
// 1. IMPORT THE TRACKER COMPONENT
import { VisitorTracker } from "@/components/VisitorTracker";
import { ArrowLeft, Leaf, BookOpen, FileText, BrainCircuit, Sparkles, Download, ChevronRight, PenTool } from "lucide-react";
import AyurvedicBackground from "@/components/AyurvedicBackground"; 

export default function BAMSDashboard() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      
      <AyurvedicBackground />
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* 🚀 2. ADD THE VISITOR TRACKER HERE 🚀 */}
        <VisitorTracker />

        {/* Dashboard Header */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="flex flex-wrap gap-3 mb-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider shadow-sm uppercase">
              <Leaf className="w-3.5 h-3.5" /> NCISM Curriculum
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-sm relative z-10">
            BAMS 2nd Prof <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Command Center</span>
          </h1>
          
          <p className="text-lg text-foreground/70 font-medium max-w-2xl relative z-10">
            Your centralized vault for crushing university examinations. Access interactive Charaka Samhita tests, download previous year papers, and review high-yield notes.
          </p>
        </div>

        {/* The 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. MCQ Practice Module */}
          <Link href="/mcq-practice" className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <BrainCircuit className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Take MCQs</h2>
            <p className="text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed">
              Test your knowledge with interactive, real-time quizzes covering Sutra Sthana, Nidana Sthana, and more.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Test Engine <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 2. Previous Year Papers */}
          <Link href="/bams-hub/papers" className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Download className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Past Papers</h2>
            <p className="text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed">
              A comprehensive PDF archive of previous year university question papers to analyze exam patterns.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              PDF Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 3. ORIGINAL High-Yield Notes */}
          <Link href="/bams-hub/notes" className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Read Notes</h2>
            <p className="text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed">
              Streamlined, highly organized revision notes covering Dravyaguna, Rasa Shastra, and Roga Nidana.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Study Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 4. NEW Handwritten Notes */}
          <Link href="/short-notes" className="group bg-[#fdfbf7] dark:bg-surface/90 backdrop-blur-md border border-slate-300 dark:border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 bg-red-100/50 border border-red-200 dark:bg-amber-500/10 dark:border-amber-500/20 rounded-sm text-[9px] font-bold text-red-600 dark:text-amber-500 uppercase tracking-widest shadow-sm z-10">
              <Sparkles className="w-3 h-3" /> New
            </div>
            
            <div className="w-12 h-12 bg-slate-100 dark:bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-slate-200 dark:border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10">
              <PenTool className="w-5 h-5 text-slate-700 dark:text-amber-500" />
            </div>
            
            <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-foreground mb-3 relative z-10" style={{ fontFamily: "'Patrick Hand', 'Kalam', cursive, sans-serif" }}>Handwritten</h2>
            <p className="text-slate-600 dark:text-foreground/70 text-xs font-medium mb-6 flex-grow leading-relaxed relative z-10">
              Highly readable short notes for quick revision. Starting with Dravyaguna Pharmacology.
            </p>
            
            <div className="w-full bg-slate-800 dark:bg-amber-500/10 border border-slate-700 dark:border-amber-500/20 text-white dark:text-amber-500 font-bold py-2.5 px-4 rounded-sm text-sm hover:bg-slate-700 dark:group-hover:bg-amber-500 dark:group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto relative z-10">
              Open Notebook <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
          
        </div>

        {/* ===================================================================== */}
        {/* ================= START OF BAMS REELS SECTION ======================= */}
        {/* ===================================================================== */}
        <BamsReels/>
        {/* ===================================================================== */}
        {/* ================== END OF BAMS REELS SECTION ======================== */}
        {/* ===================================================================== */}

      </div>
    </div>
  );
}
