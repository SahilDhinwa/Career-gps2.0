"use client";

import Link from "next/link";
import { ArrowLeft, Beaker, ChevronRight } from "lucide-react";

const CHAPTER_TESTS = [
  { id: "chapter-11", title: "DG Practice Paper (Ch-11)", subtitle: "40 Questions • Modern Pharmacology", link: "/mcq-practice/dravyaguna/paper-1/chapter-wise/chapter-11" }, 
  { id: "chapter-13", title: "DG Practice Paper (Ch-13)", subtitle: "20 Questions • Nomenclature & Taxonomy", link: "/mcq-practice/dravyaguna/paper-1/chapter-wise/chapter-13" },
  { id: "chapter-14", title: "DG Practice Paper (Ch-14)", subtitle: "20 Questions • Bheshaja Pariksha & Pharmacognosy", link: "/mcq-practice/dravyaguna/paper-1/chapter-wise/chapter-14" }, 
  { id: "chapter-15", title: "DG Practice Paper (Ch-15)", subtitle: "20 Questions • Drug Collection & GFCP", link: "/mcq-practice/dravyaguna/paper-1/chapter-wise/chapter-15" }, 
  { id: "chapter-16", title: "DG Practice Paper (Ch-16)", subtitle: "20 Questions • GCP & Conservation", link: "/mcq-practice/dravyaguna/paper-1/chapter-wise/chapter-16" }, 
];

export default function Paper1ChapterWise() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-8 md:pt-12 pb-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link href="/mcq-practice/dravyaguna" className="inline-flex items-center gap-2 text-foreground/60 hover:text-emerald-500 transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
        </Link>

        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <Beaker className="w-8 h-8 text-emerald-500" /> Chapter-wise Practice
          </h1>
          <p className="text-foreground/60 font-medium text-sm md:text-base">Dravyaguna Vigyan • Paper 1 (Fundamentals)</p>
        </div>

        <div className="space-y-4">
          {CHAPTER_TESTS.map((test) => (
            <Link key={test.id} href={test.link} className="group bg-surface/40 backdrop-blur-sm border border-surfaceBorder hover:border-emerald-500/50 rounded-sm p-4 md:p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 w-full pr-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-sm flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                  <Beaker className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                </div>
                <div className="truncate">
                  <h3 className="font-bold text-foreground text-base md:text-xl mb-0.5 md:mb-1 truncate group-hover:text-emerald-500 transition-colors">{test.title}</h3>
                  <p className="text-foreground/50 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                </div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 group-hover:bg-emerald-500 group-hover:text-white transition-colors absolute right-4 md:right-6">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
