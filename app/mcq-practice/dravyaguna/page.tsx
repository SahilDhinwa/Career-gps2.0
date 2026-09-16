"use client";

import Link from "next/link";
import { ArrowLeft, Leaf, Beaker, FileText, ChevronRight, Lock } from "lucide-react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DG Paper 1 - Test 1 (ACTIVE) */}
            <Link href="/mcq-practice/dravyaguna/paper-1/test-1" className="group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 flex items-center justify-between hover:border-amber-500/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-amber-500/10 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Beaker className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-1">DG Practice Paper 1</h3>
                  <p className="text-foreground/50 font-medium text-sm">20 Questions • Siddhanta</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>

            {/* DG Paper 1 - Test 2 (LOCKED) */}
            <div className="bg-surface/40 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm p-6 flex items-center justify-between opacity-70 cursor-not-allowed">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 border border-surfaceBorder">
                  <Beaker className="w-6 h-6 text-foreground/40" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground/60 text-xl mb-1">DG Practice Paper 2</h3>
                  <p className="text-foreground/40 font-medium text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40">
                <Lock className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* PAPER 2 SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Leaf className="w-6 h-6 text-amber-500" /> Paper 2 (Plant Profiles)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DG Paper 2 - Test 1 (LOCKED) */}
            <div className="bg-surface/40 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm p-6 flex items-center justify-between opacity-70 cursor-not-allowed">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 border border-surfaceBorder">
                  <Leaf className="w-6 h-6 text-foreground/40" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground/60 text-xl mb-1">DG Practice Paper 1</h3>
                  <p className="text-foreground/40 font-medium text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40">
                <Lock className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
