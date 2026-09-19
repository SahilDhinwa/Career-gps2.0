"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";

const FULL_TESTS = [
  { id: "test-1", title: "DG Practice Paper 1", subtitle: "20 Questions • Siddhanta", link: "/mcq-practice/dravyaguna/paper-1/full-syllabus/test-1" },
  { id: "test-2", title: "DG Practice Paper 2", subtitle: "Questions 21 - 40", link: "/mcq-practice/dravyaguna/paper-1/full-syllabus/test-2" },
  { id: "test-3", title: "DG Practice Paper 3", subtitle: "Questions 41 - 60", link: "/mcq-practice/dravyaguna/paper-1/full-syllabus/test-3" },
  { id: "test-4", title: "DG Practice Paper 4", subtitle: "Questions 61 - 80 (Fundamentals)", link: "/mcq-practice/dravyaguna/paper-1/full-syllabus/test-4" },
  { id: "test-5", title: "DG Practice Paper 5", subtitle: "Questions 81 - 100 (Comprehensive)", link: "/mcq-practice/dravyaguna/paper-1/full-syllabus/test-5" }, 
];

export default function Paper1FullSyllabus() {
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
          <p className="text-foreground/60 font-medium text-sm md:text-base">Dravyaguna Vigyan • Paper 1 (Fundamentals)</p>
        </div>

        <div className="space-y-4">
          {FULL_TESTS.map((test) => (
            <Link key={test.id} href={test.link} className="group bg-surface/40 backdrop-blur-sm border border-surfaceBorder hover:border-blue-500/50 rounded-sm p-4 md:p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 w-full pr-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-sm flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                </div>
                <div className="truncate">
                  <h3 className="font-bold text-foreground text-base md:text-xl mb-0.5 md:mb-1 truncate group-hover:text-blue-500 transition-colors">{test.title}</h3>
                  <p className="text-foreground/50 font-medium text-[10px] md:text-sm truncate">{test.subtitle}</p>
                </div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 group-hover:bg-blue-500 group-hover:text-white transition-colors absolute right-4 md:right-6">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
