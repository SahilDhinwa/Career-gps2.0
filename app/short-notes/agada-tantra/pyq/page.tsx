"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

const PYQ_PAPERS = [
  { name: "Batch 22 Main Paper: Solved MCQs", link: "/short-notes/agada-tantra/batch-22-mcqs", status: "Active" },
  { name: "Batch 21 Main Paper: Solved MCQs", link: "/short-notes/agada-tantra/batch-21-mcqs", status: "New" },
  { name: "Batch 23 Main Paper: Solved MCQs", link: "#", status: "Coming Soon" }
];

export default function AgadaTantraPYQ() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8">
        <Link href="/short-notes" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Master Index
        </Link>
      </div>

      <HandwrittenTitle badge="Agada Tantra">
        Previous Year Papers
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-8 text-center max-w-2xl mx-auto block">
        Solved Previous Year Question (PYQ) papers for Agada Tantra.
      </NText>

      {/* Featured Banner */}
      <div className="w-full mb-12 mt-2 px-2 md:px-8 flex justify-center">
        <Link href="/short-notes/agada-tantra/batch-22-mcqs" className="w-full max-w-3xl group block">
          <div className="relative p-5 md:p-8 border-[3px] border-[var(--theme-border)] bg-white/40 dark:bg-black/20 text-center transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-md group-hover:bg-white/50 dark:group-hover:bg-black/30" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[var(--theme-border)] opacity-40 -rotate-2"></div>
            <span className="inline-block px-3 py-1 mb-4 text-xs md:text-sm font-black tracking-widest uppercase bg-[var(--theme-accent)] text-white rounded-sm shadow-sm animate-bounce">🔥 Exam Special (PYQ)</span>
            <h2 className="text-2xl md:text-4xl font-black text-[var(--theme-text)] mb-2 transition-colors group-hover:text-[var(--theme-accent)]" style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive" }}>Batch 22 Main Paper: Solved MCQs</h2>
            <p className="text-sm md:text-base text-[var(--theme-text)] opacity-80 font-bold" style={{ fontFamily: "var(--font-kalam)" }}>Click here to practice all previous year questions with detailed explanations!</p>
          </div>
        </Link>
      </div>

      <div className="relative">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Previous Year Papers (PYQ)</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        <ul className="space-y-4 pl-4 md:pl-12 text-xl">
          {PYQ_PAPERS.map((topic, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <NAccent className="font-bold">→</NAccent>
              {topic.link !== "#" ? (
                <Link href={topic.link} className="text-[var(--theme-text)] hover:text-[var(--theme-accent)] underline decoration-[var(--theme-border)] opacity-80 hover:opacity-100 hover:decoration-[var(--theme-accent)] underline-offset-4 transition-all font-bold">
                  {topic.name}
                </Link>
              ) : (
                <span className="text-[var(--theme-text)] opacity-50 line-through decoration-[var(--theme-border)]">
                  {topic.name}
                </span>
              )}
              {topic.status === "New" && <span className="text-[12px] font-sans font-bold bg-transparent text-[var(--theme-accent)] px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-accent)] opacity-90">New</span>}
              {topic.status === "Active" && <span className="text-[12px] font-sans font-bold bg-transparent text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-600/50">Active</span>}
              {topic.status === "Coming Soon" && <span className="text-[12px] font-sans font-bold bg-transparent text-[var(--theme-text)] opacity-60 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-border)]">Draft</span>}
            </li>
          ))}
        </ul>
      </div>
    </HandwrittenCanvas>
  );
}
