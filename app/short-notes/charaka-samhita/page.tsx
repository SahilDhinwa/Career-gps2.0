"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

const CHARAKA_CHAPTERS = [
  { name: "Chapter 1: Dirghanjivitiya Adhyaya (Quest for Longevity)", link: "#", status: "Draft" },
  { name: "Chapter 13: Snehadhyaya (Oleation Therapy)", link: "/short-notes/charaka-samhita/chapter-13", status: "Active" },
  { name: "Chapter 14: Svedadhyaya (Fomentation Therapy)", link: "#", status: "Draft" },
  { name: "Chapter 25: Yajjah Purushiya (Origin of Man & Disease)", link: "#", status: "Draft" },
  { name: "Chapter 26: Atreyabhadrakapyiya (Discourse on Tastes)", link: "#", status: "Draft" }
];

export default function CharakaSamhitaHub() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8">
        <Link href="/short-notes" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Master Index
        </Link>
      </div>

      <HandwrittenTitle badge="Sutra Sthana">
        Charaka Samhita
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto block">
        Complete high-yield syllabus notes for Charaka Samhita (Purvardha).
      </NText>

      <div className="relative">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Theory Chapters</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        <ul className="space-y-4 pl-4 md:pl-12 text-xl">
          {CHARAKA_CHAPTERS.map((topic, idx) => (
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
