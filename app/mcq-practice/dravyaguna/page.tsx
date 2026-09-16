"use client";

import Link from "next/link";
import { ArrowLeft, Leaf, Beaker, FileText, ChevronRight, Lock, Award } from "lucide-react";

// ==========================================
// 🚀 ADD NEW TESTS HERE IN THE FUTURE!
// ==========================================

const PAPER_1_SPECIAL_TESTS = [
  // Add the new Chapter 13 test right here:
  { id: "chapter-13", title: "DG Practice Paper (Ch-13)", subtitle: "20 Questions • Nomenclature & Taxonomy", link: "/mcq-practice/dravyaguna/paper-1/chapter-13" },
  
  {
    id: "batch-2021",
    title: "DG Paper 1 - 2021 (Main)",
    subtitle: "Previous Year University Question Paper • 20 Questions",
    link: "/mcq-practice/dravyaguna/paper-1/batch-2021"
  }
];

const PAPER_1_PRACTICE_TESTS = [
  { id: "test-1", title: "DG Practice Paper 1", subtitle: "20 Questions • Siddhanta", link: "/mcq-practice/dravyaguna/paper-1/test-1" },
  { id: "test-2", title: "DG Practice Paper 2", subtitle: "Questions 21 - 40", link: "/mcq-practice/dravyaguna/paper-1/test-2" },
  { id: "test-3", title: "DG Practice Paper 3", subtitle: "Questions 41 - 60", link: "/mcq-practice/dravyaguna/paper-1/test-3" },
  { id: "test-4", title: "DG Practice Paper 4", subtitle: "Questions 61 - 80 (Fundamentals)", link: "/mcq-practice/dravyaguna/paper-1/test-4" },
];

const PAPER_2_TESTS = [
  { id: "p2-test-1", title: "DG Practice Paper 1", subtitle: "Coming Soon", status: "locked" }
];

// ==========================================
// UI RENDERER (Do not touch this part usually)
// ==========================================

export default function DravyagunaHub() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/mcq-practice" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Test Series
        </Link>

        {/* HERO SECTION */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <Leaf className="w-12 h-12 text-amber-500 mb-6 relative z-10" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-sm relative z-10">
            Dravyaguna <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Vigyan</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl relative z-10">
            Select a paper to begin your targeted revision. Paper 1 covers fundamental principles, while Paper 2 focuses on plant profiles.
          </p>
        </div>

        {/* PAPER 1 SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-500" /> Paper 1 (Fundamentals)
          </h2>
          
          {/* SPECIAL TESTS RENDERING */}
          <div className="mb-6 space-y-4">
            {PAPER_1_SPECIAL_TESTS.map((test) => (
              <Link key={test.id} href={test.link} className="group bg-amber-500/5 backdrop-blur-sm border-2 border-amber-500/30 rounded-sm p-6 flex items-center justify-between hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-sm">Official Exam</div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/30 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-500 text-xl md:text-2xl mb-1">{test.title}</h3>
                    <p className="text-foreground/70 font-medium text-sm">{test.subtitle}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

          {/* ACTIVE TESTS RENDERING */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAPER_1_PRACTICE_TESTS.map((test) => (
              <Link key={test.id} href={test.link} className="group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 flex items-center justify-between hover:border-amber-500/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Beaker className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl mb-1">{test.title}</h3>
                    <p className="text-foreground/50 font-medium text-sm">{test.subtitle}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PAPER 2 SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Leaf className="w-6 h-6 text-amber-500" /> Paper 2 (Plant Profiles)
          </h2>
          
          {/* LOCKED TESTS RENDERING */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAPER_2_TESTS.map((test) => (
              <div key={test.id} className="bg-surface/40 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm p-6 flex items-center justify-between opacity-70 cursor-not-allowed">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 border border-surfaceBorder">
                    <Leaf className="w-6 h-6 text-foreground/40" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground/60 text-xl mb-1">{test.title}</h3>
                    <p className="text-foreground/40 font-medium text-sm">{test.subtitle}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40">
                  <Lock className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
