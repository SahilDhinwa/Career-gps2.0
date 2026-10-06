"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Lock, Sparkles, ChevronRight } from "lucide-react";
import { HandwrittenCanvas } from "@/components/HandwrittenCanvas";

// ==========================================
// PYQ PAPERS REPOSITORY (BENTO GRID STYLE)
// ==========================================
const PYQ_PAPERS = [
  { 
    id: "batch-21",
    name: "Batch 21 Main Paper: Solved MCQs", 
    link: "/short-notes/agada-tantra/batch-21-mcqs", 
    status: "new",
    description: "Freshly added! Complete solved paper with detailed explanations for every question."
  },
  { 
    id: "batch-22",
    name: "Batch 22 Main Paper: Solved MCQs", 
    link: "/short-notes/agada-tantra/batch-22-mcqs", 
    status: "active",
    description: "Previous year question paper with step-by-step solutions and reference notes."
  },
  { 
    id: "batch-23",
    name: "Batch 23 Main Paper: Solved MCQs", 
    link: "#", 
    status: "draft",
    description: "Questions are currently being compiled and verified. Check back later!"
  }
];

export default function AgadaTantraPYQ() {
  return (
    <HandwrittenCanvas>
      
      {/* Back Navigation */}
      <div className="mb-10 w-full max-w-5xl mx-auto">
        <Link 
          href="/short-notes/agada-tantra" 
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-60 hover:opacity-100 hover:text-[var(--theme-accent)] transition-all font-semibold text-sm md:text-base font-sans tracking-wide"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Subject Index
        </Link>
      </div>

      {/* Clean Modern Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] rounded-full border border-[var(--theme-accent)]/20">
          Agada Tantra
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--theme-text)] font-serif tracking-tight mb-4">
          Previous Year Papers
        </h1>
        <p className="text-base md:text-lg text-[var(--theme-text)] opacity-70 font-sans leading-relaxed">
          Practice with authentic past question papers. All active papers include verified answers and detailed explanations.
        </p>
      </div>

      {/* ========================================== */}
      {/* GRID LAYOUT (COMBINING OPTION B & C)       */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto pb-20">
        
        {PYQ_PAPERS.map((paper) => {
          const isNew = paper.status === "new";
          const isDraft = paper.status === "draft";
          const isLive = !isDraft;

          return (
            <div 
              key={paper.id} 
              // If it's 'new', it spans both columns (md:col-span-2) to act as a featured banner card!
              className={`group flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-500
                ${isNew ? "md:col-span-2 border-[var(--theme-accent)]/50 bg-[var(--theme-accent)]/5 shadow-sm" : ""}
                ${isLive && !isNew ? "border-[var(--theme-border)]/20 bg-white/60 dark:bg-black/40 backdrop-blur-md hover:-translate-y-1 hover:shadow-xl hover:border-[var(--theme-accent)]/40" : ""}
                ${isDraft ? "border-[var(--theme-border)]/10 bg-white/30 dark:bg-black/20 opacity-70 grayscale-[30%] cursor-not-allowed" : ""}
              `}
            >
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  {/* Glowing "NEW" Tag for the latest paper */}
                  {isNew && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-black tracking-widest uppercase bg-[var(--theme-accent)] text-white rounded-full shadow-md animate-pulse">
                      <Sparkles className="w-3 h-3" /> Latest Paper
                    </span>
                  )}
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--theme-text)] font-serif tracking-tight mb-2">
                    {paper.name}
                  </h2>
                  <p className="text-sm md:text-base text-[var(--theme-text)] opacity-70 font-sans">
                    {paper.description}
                  </p>
                </div>

                {/* Status Badges */}
                {isDraft && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[var(--theme-text)] opacity-60 self-start md:mt-2">
                    <Lock className="w-3 h-3" /> Draft
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4">
                {isLive ? (
                  <Link 
                    href={paper.link} 
                    className={`inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl font-sans font-bold text-sm md:text-base transition-all duration-300
                      ${isNew 
                        ? "bg-[var(--theme-accent)] text-white shadow-lg hover:shadow-[var(--theme-accent)]/30 hover:-translate-y-0.5" 
                        : "border border-[var(--theme-border)]/20 bg-white/50 dark:bg-black/50 text-[var(--theme-text)] hover:bg-[var(--theme-accent)] hover:border-[var(--theme-accent)] hover:text-white"
                      }
                    `}
                  >
                    Solve Paper Now
                    <ChevronRight className={`w-4 h-4 ${isNew ? "text-white" : "text-[var(--theme-text)]/50 group-hover:text-white"}`} />
                  </Link>
                ) : (
                  <div className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl border border-[var(--theme-border)]/10 bg-transparent text-[var(--theme-text)] opacity-50 font-sans font-bold text-sm">
                    Not Available Yet
                  </div>
                )}
              </div>

            </div>
          );
        })}
        
      </div>
    </HandwrittenCanvas>
  );
}
