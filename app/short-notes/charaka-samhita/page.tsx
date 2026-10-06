"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Library } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

// Renamed to specifically indicate Sutra Sthana chapters
const SUTRA_CHAPTERS = [
  { name: "Chapter 1: Dirghanjivitiya Adhyaya (Quest for Longevity)", link: "#", status: "Draft" },
  { name: "Chapter 13: Snehadhyaya (Oleation Therapy)", link: "/short-notes/charaka-samhita/chapter-13", status: "Active" },
  { name: "Chapter 14: Svedadhyaya (Fomentation Therapy)", link: "/short-notes/charaka-samhita/chapter-14", status: "Active" },
  { name: "Chapter 25: Yajjah Purushiya (Origin of Man & Disease)", link: "#", status: "Draft" },
  { name: "Chapter 26: Atreyabhadrakapyiya (Discourse on Tastes)", link: "#", status: "Draft" }
];

export default function CharakaSamhitaHub() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8">
        <Link href="/short-notes" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Master Index
        </Link>
      </div>

      <HandwrittenTitle badge="Syllabus Hub">
        Charaka Samhita
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-10 text-center max-w-2xl mx-auto block">
        Complete high-yield syllabus notes for Charaka Samhita. Select a dedicated Sthana module or browse chapters below.
      </NText>

      {/* ========================================== */}
      {/* STHANA DIRECTORY (BANNERS)                 */}
      {/* ========================================== */}
      <div className="mb-14 max-w-4xl mx-auto font-sans">
        <Link href="/short-notes/charaka-samhita/vimana" className="group block">
          <div className="bg-emerald-500/10 border-2 border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl p-5 md:p-6 transition-all duration-300 shadow-sm relative overflow-hidden flex items-center justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-4 md:gap-6 relative z-10 w-full pr-8">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <Library className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1 block">Dedicated Module</span>
                <h3 className="font-bold text-xl md:text-2xl text-[var(--theme-text)] mb-1">Vimana Sthana Hub</h3>
                <p className="text-sm md:text-base text-[var(--theme-text)] opacity-70 font-medium leading-snug">Access all 8 chapters, including Rasa Vimana and Rogabhishagjitiya.</p>
              </div>
            </div>

            <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors relative z-10 hidden sm:flex">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>

      {/* ========================================== */}
      {/* SUTRA STHANA CHAPTERS                      */}
      {/* ========================================== */}
      <div className="relative">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Sutra Sthana Chapters</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        <ul className="space-y-4 pl-4 md:pl-12 text-xl">
          {SUTRA_CHAPTERS.map((topic, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <NAccent className="font-bold">→</NAccent>
              {topic.status === "Active" ? (
                <Link href={topic.link} className="text-[var(--theme-text)] hover:text-[var(--theme-accent)] underline decoration-[var(--theme-border)] opacity-80 hover:opacity-100 hover:decoration-[var(--theme-accent)] underline-offset-4 transition-all font-bold">
                  {topic.name}
                </Link>
              ) : (
                <span className="text-[var(--theme-text)] opacity-50 font-medium">
                  {topic.name}
                </span>
              )}
              {topic.status === "Active" ? (
                <span className="text-[12px] font-sans font-bold bg-transparent text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-600/50">Active</span>
              ) : (
                <span className="text-[10px] font-sans font-bold bg-transparent text-[var(--theme-text)] opacity-40 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-text)]/30">Draft</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </HandwrittenCanvas>
  );
}
