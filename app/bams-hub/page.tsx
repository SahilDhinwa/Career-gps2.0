"use client";

import Link from "next/link";
// Added Instagram, Play, Eye, and ArrowRight for the Reels section
import { ArrowLeft, Leaf, BookOpen, FileText, BrainCircuit, Sparkles, Download, Clock, ChevronRight, Instagram, Play, Eye, ArrowRight } from "lucide-react";
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

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

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

        {/* The 3-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* 1. MCQ Practice Module */}
          <Link href="/mcq-practice" className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <BrainCircuit className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Take MCQs</h2>
            <p className="text-foreground/70 text-sm font-medium mb-8 flex-grow leading-relaxed">
              Test your knowledge with interactive, real-time quizzes covering Sutra Sthana, Nidana Sthana, and more.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-3 px-4 rounded-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Launch Test Engine <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 2. Previous Year Papers */}
          <Link href="/bams-hub/papers" className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Download className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Previous Papers</h2>
            <p className="text-foreground/70 text-sm font-medium mb-8 flex-grow leading-relaxed">
              A comprehensive PDF archive of previous year university question papers to analyze exam patterns.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-3 px-4 rounded-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Access PDF Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 3. High-Yield Notes */}
          <Link href="/bams-hub/notes" className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-sm text-[10px] font-bold text-amber-500 uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3 h-3" /> New
            </div>
            <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Read Notes</h2>
            <p className="text-foreground/70 text-sm font-medium mb-8 flex-grow leading-relaxed">
              Streamlined, highly organized revision notes covering Dravyaguna, Rasa Shastra, and Roga Nidana.
            </p>
            <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-3 px-4 rounded-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
              Open Study Vault <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
          
        </div>

        {/* ===================================================================== */}
        {/* ================= START OF BAMS REELS SECTION ======================= */}
        {/* ===================================================================== */}
        
        <div className="mt-20 md:mt-28 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20 shadow-sm">
                <Instagram className="w-4 h-4" /> BAMS Micro-Learning
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                High-Yield Concepts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">60 Seconds</span>
              </h2>
              <p className="text-foreground/70 font-medium mt-3 max-w-xl text-sm md:text-base">
                Bite-sized memory hacks, shloka breakdowns, and exam strategies tailored for 2nd Prof subjects.
              </p>
            </div>
            
            <Link href="https://instagram.com" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-amber-500 transition-colors">
              Follow for Daily Hacks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Swipeable Carousel */}
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
            
            {/* Reel 1 */}
            <div className="group relative w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-amber-500/20 cursor-pointer transform transition-transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-950 to-black"></div>
              {/* Optional: Add actual image background here later */}
              {/* <Image src="/your-thumbnail.jpg" fill className="object-cover opacity-60" alt="Thumbnail" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-6 h-6 text-amber-400 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-2">
                  <Eye className="w-3.5 h-3.5" /> 18K Views
                </div>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  Charaka Samhita: Top 5 Memory Hacks for Sutra Sthana
                </h3>
              </div>
            </div>

            {/* Reel 2 */}
            <div className="group relative w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-amber-500/20 cursor-pointer transform transition-transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-950 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-6 h-6 text-amber-400 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-2">
                  <Eye className="w-3.5 h-3.5" /> 24K Views
                </div>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  How to Master Dravyaguna Guna-Karma Instantly
                </h3>
              </div>
            </div>

            {/* Reel 3 */}
            <div className="group relative w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-amber-500/20 cursor-pointer transform transition-transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-950 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-6 h-6 text-amber-400 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-2">
                  <Eye className="w-3.5 h-3.5" /> 31K Views
                </div>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  Roga Nidana: Quick Trick to Differentiate Vata vs Pitta Vyadhis
                </h3>
              </div>
            </div>

            {/* Reel 4 */}
            <div className="group relative w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-amber-500/20 cursor-pointer transform transition-transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-950 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-6 h-6 text-amber-400 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-2">
                  <Eye className="w-3.5 h-3.5" /> 15K Views
                </div>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  Rasa Shastra Yogas: The Ultimate 1-Minute Revision
                </h3>
              </div>
            </div>

          </div>
          
          {/* Mobile "View All" button */}
          <div className="mt-2 flex justify-center md:hidden">
             <Link href="https://instagram.com" target="_blank" className="flex items-center justify-center gap-2 w-full py-4 rounded-sm bg-amber-500/10 text-amber-500 font-bold text-sm hover:bg-amber-500/20 border border-amber-500/30 transition-colors shadow-sm">
              Follow for Daily Hacks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* ================== END OF BAMS REELS SECTION ======================== */}
        {/* ===================================================================== */}

      </div>
    </div>
  );
}
