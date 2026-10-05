"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, PenTool, Lock } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText } from "@/components/NoteElements";

// ==========================================
// COLOR-CODED DASHBOARD INDEX
// ==========================================
const MASTER_INDEX = [
  {
    subject: "Agada Tantra (Toxicology)",
    icon: "🐍",
    status: "live",
    // Purple Theme for Poison/Toxicology
    themeClasses: {
      bg: "bg-fuchsia-100/80 dark:bg-fuchsia-900/20",
      border: "border-fuchsia-400 dark:border-fuchsia-700/80",
      text: "text-fuchsia-900 dark:text-fuchsia-300",
      btnBg: "bg-fuchsia-200/50 dark:bg-fuchsia-800/30",
      btnHover: "hover:bg-fuchsia-600 hover:border-fuchsia-600 dark:hover:bg-fuchsia-600 dark:hover:border-fuchsia-600",
    },
    topics: [
      { name: "Theory Chapters & Syllabus", link: "/short-notes/agada-tantra/chapters", type: "theory", isReady: true },
      { name: "Previous Year Papers (PYQ)", link: "/short-notes/agada-tantra/pyq", type: "pyq", isReady: true }
    ]
  },
  {
    subject: "Roga Nidan & Vikriti Vigyan",
    icon: "🔬",
    status: "live",
    // Rose/Red Theme for Blood/Pathology
    themeClasses: {
      bg: "bg-rose-100/80 dark:bg-rose-900/20",
      border: "border-rose-400 dark:border-rose-700/80",
      text: "text-rose-900 dark:text-rose-300",
      btnBg: "bg-rose-200/50 dark:bg-rose-800/30",
      btnHover: "hover:bg-rose-600 hover:border-rose-600 dark:hover:bg-rose-600 dark:hover:border-rose-600",
    },
    topics: [
      { name: "Theory Chapters & Syllabus", link: "/short-notes/roga-nidan", type: "theory", isReady: true },
      { name: "Previous Year Papers (PYQ)", link: "#", type: "pyq", isReady: false }
    ]
  },  
  {
    subject: "Dravyaguna Vigyan",
    icon: "🌿",
    status: "draft",
    // Emerald/Green Theme for Herbs/Plants
    themeClasses: {
      bg: "bg-emerald-100/80 dark:bg-emerald-900/20",
      border: "border-emerald-400 dark:border-emerald-700/80",
      text: "text-emerald-900 dark:text-emerald-300",
      btnBg: "bg-emerald-200/50 dark:bg-emerald-800/30",
      btnHover: "hover:bg-emerald-600 hover:border-emerald-600 dark:hover:bg-emerald-600 dark:hover:border-emerald-600",
    },
    topics: [
      { name: "Theory Chapters & Syllabus", link: "#", type: "theory", isReady: false },
      { name: "Previous Year Papers (PYQ)", link: "#", type: "pyq", isReady: false }
    ]
  },
  {
    subject: "Rasa Shastra & Bhaishajya",
    icon: "⚗️",
    status: "draft",
    // Amber/Orange Theme for Minerals/Alchemy/Fire
    themeClasses: {
      bg: "bg-amber-100/80 dark:bg-amber-900/20",
      border: "border-amber-400 dark:border-amber-700/80",
      text: "text-amber-900 dark:text-amber-300",
      btnBg: "bg-amber-200/50 dark:bg-amber-800/30",
      btnHover: "hover:bg-amber-600 hover:border-amber-600 dark:hover:bg-amber-600 dark:hover:border-amber-600",
    },
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

      <NText className="font-bold text-lg md:text-xl leading-relaxed mb-10 text-center max-w-2xl mx-auto block opacity-80">
        Choose your subject below. Access high-yield handwritten notes and solved PYQs instantly.
      </NText>

      {/* ========================================== */}
      {/* COLORFUL GRID DASHBOARD LAYOUT             */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl mx-auto">
        
        {MASTER_INDEX.map((section, idx) => {
          const isLive = section.status === "live";

          return (
            <div 
              key={idx} 
              className={`relative flex flex-col p-6 md:p-8 border-[3px] transition-all duration-300 transform rounded-sm
                ${section.themeClasses.bg} ${section.themeClasses.border}
                ${isLive ? "hover:-translate-y-1 hover:shadow-xl" : "opacity-60 grayscale-[30%] cursor-not-allowed"}
              `}
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
            >
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/60 dark:bg-black/40 border border-[var(--theme-border)] opacity-60 -rotate-3 rounded-sm shadow-sm"></div>

              {/* Icon & Subject Name */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl md:text-5xl drop-shadow-sm">{section.icon}</div>
                <div>
                  <h2 className={`text-2xl md:text-3xl font-black ${section.themeClasses.text} leading-tight`} style={{ fontFamily: "var(--font-kalam)" }}>
                    {section.subject}
                  </h2>
                  {!isLive && (
                    <span className="inline-flex items-center gap-1 mt-2 text-xs font-bold uppercase tracking-wider text-white bg-gray-600/80 dark:bg-gray-500/80 px-2 py-0.5 rounded-sm shadow-sm">
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
                      className={`group flex items-center justify-between w-full p-3 md:p-4 border-2 border-dashed ${section.themeClasses.border} ${section.themeClasses.btnBg} ${section.themeClasses.btnHover} transition-all rounded-sm`}
                      style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${section.themeClasses.text} group-hover:text-white transition-colors`} />
                        <span className={`font-bold text-base md:text-lg ${section.themeClasses.text} group-hover:text-white transition-colors`}>
                          {topic.name}
                        </span>
                      </div>
                      <span className={`${section.themeClasses.text} group-hover:text-white font-black text-xl transition-transform group-hover:translate-x-1`}>
                        →
                      </span>
                    </Link>
                  ) : (
                    <div 
                      key={topicIdx}
                      className={`flex items-center justify-between w-full p-3 md:p-4 border-2 border-dashed ${section.themeClasses.border} opacity-50 bg-transparent rounded-sm`}
                      style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${section.themeClasses.text}`} />
                        <span className={`font-bold text-base md:text-lg ${section.themeClasses.text} line-through decoration-[var(--theme-border)]`}>
                          {topic.name}
                        </span>
                      </div>
                      <span className={`text-[10px] font-sans font-bold uppercase tracking-widest ${section.themeClasses.text} border border-current px-2 py-1 rounded-sm opacity-60`}>
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
