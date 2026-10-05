"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, PenTool, Lock } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText } from "@/components/NoteElements";

// ==========================================
// SOLID & THEME-ADAPTIVE DASHBOARD INDEX
// ==========================================
const MASTER_INDEX = [
  {
    subject: "Agada Tantra (Toxicology)",
    icon: "🐍",
    status: "live",
    topics: [
      { name: "Theory Chapters & Syllabus", link: "/short-notes/agada-tantra/chapters", type: "theory", isReady: true },
      { name: "Previous Year Papers (PYQ)", link: "/short-notes/agada-tantra/pyq", type: "pyq", isReady: true }
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
      <div className="mb-6 md:mb-8">
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-base md:text-lg font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to BAMS Hub
        </Link>
      </div>

      <HandwrittenTitle badge="Master Dashboard">
        Quick Revision Hub
      </HandwrittenTitle>

      <NText 
        className="font-bold text-xl md:text-2xl leading-relaxed mb-10 text-center max-w-2xl mx-auto block opacity-80"
        style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive" }}
      >
        Choose your subject below. Access high-yield handwritten notes and solved PYQs instantly.
      </NText>

      {/* ========================================== */}
      {/* SOLID CARD LAYOUT (MATCHING ROG NIDAN NOTES) */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl mx-auto">
        
        {MASTER_INDEX.map((section, idx) => {
          const isLive = section.status === "live";

          return (
            <div 
              key={idx} 
              className={`relative flex flex-col p-6 md:p-8 border-2 transition-all duration-300 transform
                ${isLive 
                  ? "border-[var(--theme-border)] bg-white/50 dark:bg-black/30 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--theme-accent)]" 
                  : "border-[var(--theme-border)] opacity-60 bg-white/20 dark:bg-black/10 grayscale-[30%] cursor-not-allowed"}
              `}
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
            >
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-[var(--theme-border)] opacity-40 -rotate-3 rounded-sm"></div>

              {/* Icon & Subject Name */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl md:text-5xl drop-shadow-sm">{section.icon}</div>
                <div>
                  <h2 
                    className="text-3xl md:text-4xl font-black text-[var(--theme-text)] leading-tight" 
                    style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive" }}
                  >
                    {section.subject}
                  </h2>
                  {!isLive && (
                    <span className="inline-flex items-center gap-1 mt-2 text-xs font-bold uppercase tracking-wider text-white bg-[var(--theme-border)] px-2 py-0.5 rounded-sm shadow-sm">
                      <Lock className="w-3 h-3" /> Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons (Links) */}
              <div className="mt-auto flex flex-col gap-3">
                {section.topics.map((topic, topicIdx) => {
                  const Icon = topic.type === "theory" ? BookOpen : PenTool;
                  
                  return topic.isReady ? (
                    <Link 
                      key={topicIdx}
                      href={topic.link} 
                      className="group flex items-center justify-between w-full p-3 md:p-4 border-2 border-dashed border-[var(--theme-border)] bg-[var(--theme-accent-bg)] hover:bg-[var(--theme-accent)] hover:border-[var(--theme-accent)] transition-all duration-300 hover:-rotate-1 hover:scale-[1.02]"
                      style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[var(--theme-text)] group-hover:text-white transition-colors" />
                        <span 
                          className="font-bold text-lg md:text-xl text-[var(--theme-text)] group-hover:text-white transition-colors"
                          style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive" }}
                        >
                          {topic.name}
                        </span>
                      </div>
                      <span className="text-[var(--theme-text)] group-hover:text-white font-black text-xl transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ) : (
                    <div 
                      key={topicIdx}
                      className="flex items-center justify-between w-full p-3 md:p-4 border-2 border-dashed border-[var(--theme-border)] opacity-50 bg-transparent"
                      style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[var(--theme-text)]" />
                        <span 
                          className="font-bold text-lg md:text-xl text-[var(--theme-text)] line-through decoration-[var(--theme-border)]"
                          style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive" }}
                        >
                          {topic.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[var(--theme-text)] border border-current px-2 py-1 rounded-sm opacity-60">
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
