"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, Lock, FolderOpen } from "lucide-react";

// ==========================================
// 🚀 ARRAYS: ADD NEW TESTS HERE
// ==========================================

const CHARAKA_TESTS = [
  { id: "charaka-test-1", title: "Practice Paper 1", subtitle: "Questions 1 - 20", status: "active", link: "/mcq-practice/charaka/test-1" },
  { id: "charaka-test-2", title: "Practice Paper 2", subtitle: "Questions 21 - 40", status: "active", link: "/mcq-practice/charaka/test-2" },
  { id: "charaka-test-3", title: "Practice Paper 3", subtitle: "Coming Soon", status: "locked" },
  { id: "charaka-test-4", title: "Practice Paper 4", subtitle: "Coming Soon", status: "locked" }
];

// Helper array for alternating colors
const colorAccents = [
  { border: "hover:border-amber-500/50", iconBg: "group-hover:bg-amber-500/20", iconText: "text-amber-500", btnBg: "group-hover:bg-amber-500" },
  { border: "hover:border-emerald-500/50", iconBg: "group-hover:bg-emerald-500/20", iconText: "text-emerald-500", btnBg: "group-hover:bg-emerald-500" },
  { border: "hover:border-blue-500/50", iconBg: "group-hover:bg-blue-500/20", iconText: "text-blue-500", btnBg: "group-hover:bg-blue-500" }
];

export default function CharakaHub() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 md:pt-12 pb-24 px-4 md:px-6">
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link href="/mcq-practice" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-6 md:mb-10 font-bold text-xs md:text-sm bg-surface/50 px-3 py-2 md:px-4 md:py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Test Series
        </Link>

        {/* HERO SECTION */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-6 md:p-12 mb-10 md:mb-16 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-amber-500 mb-4 md:mb-6 relative z-10" />
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground drop-shadow-sm relative z-10 leading-tight">
            Charaka Samhita <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">(Purvardha)</span>
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 font-medium max-w-2xl relative z-10 leading-relaxed">
            Access all your 20-question rapid revision practice papers here. Test your knowledge on Sutra Sthana, Nidana Sthana, and Vimana Sthana.
          </p>
        </div>

        {/* PRACTICE PAPERS SECTION */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 border-b border-surfaceBorder">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <BookOpen className="w-5 h-5 text-amber-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Practice Papers
            </h2>
          </div>
          
          {/* FOLDER: Chapter-wise Practice Sets */}
          <div className="bg-surface/30 p-4 md:p-6 rounded-sm border border-surfaceBorder/50">
            <h3 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FolderOpen className="w-3.5 h-3.5" /> Core Revisions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {CHARAKA_TESTS.map((test, index) => {
                const color = colorAccents[index % 3]; // Cycles through amber, emerald, blue
                
                return test.status === "active" ? (
                  <Link key={test.id} href={test.link!} className={`group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-4 md:p-6 flex items-center justify-between transition-all duration-300 hover:shadow-lg ${color.border}`}>
                    <div className="flex items-center gap-3 md:gap-5 w-full pr-10">
                      <div className={`w-10 h-10 md:w-14 md:h-14 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 transition-colors ${color.iconBg}`}>
                        <BookOpen className={`w-5 h-5 md:w-6 md:h-6 text-foreground/60 transition-colors ${color.iconText}`} />
                      </div>
                      <div className="truncate">
                        <h3 className="font-bold text-foreground text-sm md:text-xl mb-0.5 md:mb-1 truncate">{test.title}</h3>
                        <p className="text-foreground/50 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center transition-colors absolute right-4 md:right-6 group-hover:text-white ${color.btnBg}`}>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </Link>
                ) : (
                  <div key={test.id} className="bg-surface/40 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm p-4 md:p-6 flex items-center justify-between opacity-70 cursor-not-allowed">
                    <div className="flex items-center gap-3 md:gap-5 w-full pr-10">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 border border-surfaceBorder">
                        <Lock className="w-5 h-5 md:w-6 md:h-6 text-foreground/40" />
                      </div>
                      <div className="truncate">
                        <h3 className="font-bold text-foreground/60 text-sm md:text-xl mb-0.5 md:mb-1 truncate">{test.title}</h3>
                        <p className="text-foreground/40 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 absolute right-4 md:right-6">
                      <Lock className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
