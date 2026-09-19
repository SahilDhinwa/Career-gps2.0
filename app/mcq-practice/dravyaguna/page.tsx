"use client";

import Link from "next/link";
import { ArrowLeft, Leaf, FileText, ChevronRight, Award, Beaker, BookOpen, FolderArchive } from "lucide-react";

// ==========================================
// 🚀 MASTER DIRECTORY ROUTING
// ==========================================

const PAPER_1_FOLDERS = [
  { 
    id: "p1-official", 
    title: "Official University Papers", 
    subtitle: "Previous year main & supplementary exams", 
    icon: Award,
    link: "/mcq-practice/dravyaguna/paper-1/university-papers",
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/50"
  },
  { 
    id: "p1-chapter", 
    title: "Chapter-wise Practice", 
    subtitle: "Targeted MCQs for every syllabus topic", 
    icon: Beaker,
    link: "/mcq-practice/dravyaguna/paper-1/chapter-wise",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50"
  },
  { 
    id: "p1-full", 
    title: "Full Syllabus Practice", 
    subtitle: "Comprehensive 100-mark mock tests", 
    icon: BookOpen,
    link: "/mcq-practice/dravyaguna/paper-1/full-syllabus",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50"
  }
];

const PAPER_2_FOLDERS = [
  { 
    id: "p2-official", 
    title: "Official University Papers", 
    subtitle: "Previous year main & supplementary exams", 
    icon: Award,
    link: "/mcq-practice/dravyaguna/paper-2/university-papers",
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/50"
  },
  { 
    id: "p2-chapter", 
    title: "Active Recall & Flashcards", 
    subtitle: "Master botanical names and plant profiles", 
    icon: FolderArchive,
    link: "/mcq-practice/dravyaguna/paper-2/chapter-wise",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50"
  },
  { 
    id: "p2-full", 
    title: "Full Syllabus Practice", 
    subtitle: "Comprehensive 100-mark mock tests", 
    icon: BookOpen,
    link: "/mcq-practice/dravyaguna/paper-2/full-syllabus",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50"
  }
];

export default function DravyagunaHub() {
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
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-6 md:p-12 mb-12 md:mb-16 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <Leaf className="w-10 h-10 md:w-12 md:h-12 text-amber-500 mb-4 md:mb-6 relative z-10" />
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground drop-shadow-sm relative z-10 leading-tight">
            Dravyaguna <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Vigyan</span>
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 font-medium max-w-2xl relative z-10 leading-relaxed">
            Select a paper and dive into targeted revision modules. Organized perfectly to match your study flow.
          </p>
        </div>


        {/* ========================================== */}
        {/* PAPER 1 DIRECTORY */}
        {/* ========================================== */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <FileText className="w-5 h-5 text-amber-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Paper 1 <span className="text-foreground/50 text-xl font-normal hidden sm:inline">(Fundamentals)</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PAPER_1_FOLDERS.map((folder) => {
              const Icon = folder.icon;
              return (
                <Link key={folder.id} href={folder.link} className={`group bg-surface/40 backdrop-blur-sm border border-surfaceBorder rounded-sm p-5 md:p-6 flex flex-col hover:shadow-xl transition-all duration-300 ${folder.hoverBorder}`}>
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 border transition-colors ${folder.bg} ${folder.border}`}>
                    <Icon className={`w-6 h-6 ${folder.accent}`} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{folder.title}</h3>
                  <p className="text-foreground/50 font-medium text-xs md:text-sm mb-6 flex-grow">{folder.subtitle}</p>
                  <div className={`mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${folder.accent}`}>
                    Open Folder <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ========================================== */}
        {/* PAPER 2 DIRECTORY */}
        {/* ========================================== */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <Leaf className="w-5 h-5 text-amber-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Paper 2 <span className="text-foreground/50 text-xl font-normal hidden sm:inline">(Plant Profiles)</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PAPER_2_FOLDERS.map((folder) => {
              const Icon = folder.icon;
              return (
                <Link key={folder.id} href={folder.link} className={`group bg-surface/40 backdrop-blur-sm border border-surfaceBorder rounded-sm p-5 md:p-6 flex flex-col hover:shadow-xl transition-all duration-300 ${folder.hoverBorder}`}>
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 border transition-colors ${folder.bg} ${folder.border}`}>
                    <Icon className={`w-6 h-6 ${folder.accent}`} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{folder.title}</h3>
                  <p className="text-foreground/50 font-medium text-xs md:text-sm mb-6 flex-grow">{folder.subtitle}</p>
                  <div className={`mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${folder.accent}`}>
                    Open Folder <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
