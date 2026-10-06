"use client";

import Link from "next/link";
import { ArrowLeft, Award, ChevronRight, Lock } from "lucide-react";

const OFFICIAL_TESTS = [
  { 
    id: "batch-2023", 
    title: "Agada Tantra - 2023 (Main)", 
    subtitle: "Previous Year University Question Paper • 20 Questions", 
    link: "#",
    status: "locked"
  },
  { 
    id: "batch-2022", 
    title: "Agada Tantra - 2022 (Main)", 
    subtitle: "Previous Year University Question Paper • 20 Questions", 
    link: "/mcq-practice/agad-tantra/university-papers/batch-2022" 
  },
  { 
    id: "batch-2021", 
    title: "Agada Tantra - 2021 (Main)", 
    subtitle: "Previous Year University Question Paper • 20 Questions", 
    link: "/mcq-practice/agad-tantra/university-papers/batch-2021" 
  }
];

export default function AgadaTantraUniversityPapers() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-8 md:pt-12 pb-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link href="/mcq-practice/agad-tantra" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Agada Tantra Hub
        </Link>

        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500" /> Official University Papers
          </h1>
          <p className="text-foreground/60 font-medium text-sm md:text-base">Agada Tantra (Toxicology & Forensic Medicine)</p>
        </div>

        <div className="space-y-4">
          {OFFICIAL_TESTS.map((test) => {
            const isLocked = test.status === "locked";

            return (
              <Link 
                key={test.id} 
                href={isLocked ? "#" : test.link} 
                className={`group backdrop-blur-sm border rounded-sm p-4 md:p-6 flex items-center justify-between transition-all duration-300 relative overflow-hidden ${
                  isLocked 
                    ? "bg-surface/20 border-surfaceBorder/40 opacity-70 cursor-not-allowed grayscale" 
                    : "bg-surface/40 border-surfaceBorder hover:border-amber-500/50 hover:shadow-lg"
                }`}
              >
                {/* Top Right Badge */}
                <div className={`absolute top-0 right-0 text-[9px] md:text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-sm border-b border-l ${
                  isLocked ? "bg-foreground/5 text-foreground/40 border-foreground/10" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                }`}>
                  {isLocked ? "Coming Soon" : "Official Exam"}
                </div>
                
                {/* Main Content */}
                <div className="flex items-center gap-4 w-full pr-10">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center shrink-0 border transition-colors ${
                    isLocked ? "bg-foreground/5 border-foreground/10" : "bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20"
                  }`}>
                    <Award className={`w-5 h-5 md:w-6 md:h-6 ${isLocked ? "text-foreground/40" : "text-amber-500"}`} />
                  </div>
                  <div className="truncate">
                    <h3 className={`font-bold text-base md:text-xl mb-0.5 md:mb-1 truncate transition-colors ${
                      isLocked ? "text-foreground/60" : "text-foreground group-hover:text-amber-500"
                    }`}>
                      {test.title}
                    </h3>
                    <p className="text-foreground/50 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                  </div>
                </div>

                {/* Right Action Icon */}
                <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-colors absolute right-4 md:right-6 ${
                  isLocked 
                    ? "bg-foreground/5 text-foreground/40" 
                    : "bg-foreground/5 text-foreground/40 group-hover:bg-amber-500 group-hover:text-white"
                }`}>
                  {isLocked ? (
                    <Lock className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
