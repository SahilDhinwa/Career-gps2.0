"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Lock } from "lucide-react";

const FULL_TESTS = [
  { id: "mock-1", title: "DG Paper 2 Mock Test 1", subtitle: "100-Mark Comprehensive Exam • Coming Soon", status: "locked" },
  { id: "mock-2", title: "DG Paper 2 Mock Test 2", subtitle: "100-Mark Comprehensive Exam • Coming Soon", status: "locked" }
];

export default function Paper2FullSyllabus() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-8 md:pt-12 pb-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link href="/mcq-practice/dravyaguna" className="inline-flex items-center gap-2 text-foreground/60 hover:text-blue-500 transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
        </Link>

        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-500" /> Full Syllabus Practice
          </h1>
          <p className="text-foreground/60 font-medium text-sm md:text-base">Dravyaguna Vigyan • Paper 2 (Plant Profiles)</p>
        </div>

        <div className="space-y-4">
          {FULL_TESTS.map((test) => (
            <div key={test.id} className="bg-surface/20 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm p-4 md:p-6 flex items-center justify-between opacity-70 cursor-not-allowed">
              <div className="flex items-center gap-4 w-full pr-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 border border-surfaceBorder">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-foreground/40" />
                </div>
                <div className="truncate">
                  <h3 className="font-bold text-foreground/60 text-base md:text-xl mb-0.5 md:mb-1 truncate">{test.title}</h3>
                  <p className="text-foreground/40 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                </div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 absolute right-4 md:right-6">
                <Lock className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
