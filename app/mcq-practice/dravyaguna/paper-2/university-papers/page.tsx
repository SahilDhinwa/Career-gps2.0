"use client";

import Link from "next/link";
import { ArrowLeft, Award, ChevronRight } from "lucide-react";

const OFFICIAL_TESTS = [
  { id: "p2-batch-2021", title: "DG Paper 2 - 2021 (Main)", subtitle: "Previous Year University Question Paper • 20 Questions", link: "/mcq-practice/dravyaguna/paper-2/university-papers/batch-2021" }
];

export default function Paper2UniversityPapers() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-8 md:pt-12 pb-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link href="/mcq-practice/dravyaguna" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
        </Link>

        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500" /> Official University Papers
          </h1>
          <p className="text-foreground/60 font-medium text-sm md:text-base">Dravyaguna Vigyan • Paper 2 (Plant Profiles)</p>
        </div>

        <div className="space-y-4">
          {OFFICIAL_TESTS.map((test) => (
            <Link key={test.id} href={test.link} className="group bg-surface/40 backdrop-blur-sm border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-4 md:p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-500 text-[9px] md:text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-sm border-b border-l border-amber-500/20">Official Exam</div>
              <div className="flex items-center gap-4 w-full pr-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <div className="truncate">
                  <h3 className="font-bold text-foreground text-base md:text-xl mb-0.5 md:mb-1 truncate group-hover:text-amber-500 transition-colors">{test.title}</h3>
                  <p className="text-foreground/50 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                </div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 group-hover:bg-amber-500 group-hover:text-white transition-colors absolute right-4 md:right-6">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

