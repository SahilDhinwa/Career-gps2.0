"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Lock, ChevronRight } from "lucide-react";
import { HandwrittenCanvas } from "@/components/HandwrittenCanvas";

// ==========================================
// PREMIUM MINIMALIST DASHBOARD INDEX
// ==========================================
const MASTER_INDEX = [
  {
    subject: "Agada Tantra (Toxicology)",
    icon: "🐍",
    status: "live",
    topics: [
      { name: "Theory Chapters & Syllabus", link: "/short-notes/agada-tantra", type: "theory", isReady: true },
      { name: "Previous Year Papers (PYQ)", link: "/short-notes/agada-tantra/pyq", type: "pyq", isReady: true }
    ]
  },
  {
    subject: "Charaka Samhita (Purvardha)",
    icon: "📜",
    status: "live",
    topics: [
      { name: "Theory Chapters & Syllabus", link: "/short-notes/charaka-samhita", type: "theory", isReady: true },
      { name: "Previous Year Papers (PYQ)", link: "#", type: "pyq", isReady: false }
    ]
  },
  {
    subject: "Roga Nidan & Vikriti Vigyan",
    icon: "🔬",
    status: "live",
    topics: [
      { name: "Theory Chapters & Syllabus", link: "/short-notes/roga-nidan", type: "theory", isReady: true },
      { name: "Previous Year Papers (PYQ)", link: "#", type: "pyq", isReady: false }
    ]
  },  
  {
    subject: "Dravyaguna Vigyan",
    icon: "🌿",
    status: "draft",
    topics: [
      { name: "Theory Chapters & Syllabus", link: "#", type: "theory", isReady: false },
      { name: "Previous Year Papers (PYQ)", link: "#", type: "pyq", isReady: false }
    ]
  },
  {
    subject: "Rasa Shastra & Bhaishajya",
    icon: "⚗️",
    status: "draft",
    topics: [
      { name: "Theory Chapters & Syllabus", link: "#", type: "theory", isReady: false },
      { name: "Previous Year Papers (PYQ)", link: "#", type: "pyq", isReady: false }
    ]
  }
];

export default function ShortNotesMasterIndex() {
  return (
    <HandwrittenCanvas>
      
      {/* Back Navigation */}
      <div className="mb-10 w-full max-w-6xl mx-auto">
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-60 hover:opacity-100 hover:text-[var(--theme-accent)] transition-all font-semibold text-sm md:text-base font-sans tracking-wide"
        >
          <ArrowLeft className="w-5 h-5" /> Back to BAMS Hub
        </Link>
      </div>

      {/* Clean Modern Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] rounded-full border border-[var(--theme-accent)]/20">
          Master Dashboard
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--theme-text)] font-serif tracking-tight mb-6">
          Quick Revision Hub
        </h1>
        <p className="text-lg md:text-xl text-[var(--theme-text)] opacity-70 font-sans leading-relaxed">
          Select a subject below to access high-yield structured notes, syllabus breakdowns, and solved previous year papers.
        </p>
      </div>

      {/* ========================================== */}
      {/* MODERN BENTO-BOX GRID LAYOUT               */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto pb-20">
        
        {MASTER_INDEX.map((section, idx) => {
          const isLive = section.status === "live";

          return (
            <div 
              key={idx} 
              className={`group flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-500
                ${isLive 
                  ? "border-[var(--theme-border)]/20 bg-white/60 dark:bg-black/40 backdrop-blur-md hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--theme-accent)]/50" 
                  : "border-[var(--theme-border)]/10 bg-white/30 dark:bg-black/20 opacity-70 grayscale-[50%] cursor-not-allowed"}
              `}
            >
              {/* Header: Icon & Title */}
              <div className="flex items-start gap-5 mb-8">
                {/* Icon Container */}
                <div className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center rounded-2xl shadow-inner
                  ${isLive ? "bg-[var(--theme-accent)]/10" : "bg-gray-500/10"}
                `}>
                  <span className="text-3xl md:text-4xl drop-shadow-sm">{section.icon}</span>
                </div>
                
                <div className="pt-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--theme-text)] font-serif tracking-tight">
                    {section.subject}
                  </h2>
                  {!isLive && (
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold uppercase tracking-widest text-[var(--theme-text)] opacity-60">
                      <Lock className="w-3 h-3" /> Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons (Links) */}
              <div className="mt-auto flex flex-col gap-3">
                {section.topics.map((topic, topicIdx) => {
                  const Icon = topic.type === "theory" ? BookOpen : FileText;
                  
                  return topic.isReady ? (
                    <Link 
                      key={topicIdx}
                      href={topic.link} 
                      className="group/btn flex items-center justify-between w-full p-4 rounded-xl border border-[var(--theme-border)]/10 bg-white/50 dark:bg-black/50 hover:bg-[var(--theme-accent)] hover:border-[var(--theme-accent)] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-[var(--theme-text)]/5 group-hover/btn:bg-white/20 transition-colors">
                          <Icon className="w-5 h-5 text-[var(--theme-text)] group-hover/btn:text-white transition-colors" />
                        </div>
                        <span className="font-sans font-semibold text-base md:text-lg text-[var(--theme-text)] group-hover/btn:text-white transition-colors">
                          {topic.name}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[var(--theme-text)]/40 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  ) : (
                    <div 
                      key={topicIdx}
                      className="flex items-center justify-between w-full p-4 rounded-xl border border-[var(--theme-border)]/10 bg-transparent opacity-60"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-[var(--theme-text)]/5">
                          <Icon className="w-5 h-5 text-[var(--theme-text)]" />
                        </div>
                        <span className="font-sans font-medium text-base md:text-lg text-[var(--theme-text)]">
                          {topic.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[var(--theme-text)] px-2 py-1 rounded-md bg-[var(--theme-text)]/10">
                        Draft
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
        
      </div>
    </HandwrittenCanvas>
  );
}
