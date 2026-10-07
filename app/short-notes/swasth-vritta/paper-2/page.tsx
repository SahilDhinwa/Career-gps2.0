"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent } from "@/components/NoteElements";

const PAPER2_CHAPTERS = [
  { name: "Chapter 1: Ashtanga Yoga", link: "#", status: "Draft" },
  { name: "Chapter 2: Nisargopachara (Advanced)", link: "#", status: "Draft" },
  { name: "Chapter 3: Asana & Pranayama", link: "#", status: "Draft" }
];

export default function Paper2Hub() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8 pt-4">
        <Link href="/short-notes/swasth-vritta" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Swasth Vritta Hub
        </Link>
      </div>

      <HandwrittenTitle badge="Paper 2">
        Yoga & Nisargopachara
      </HandwrittenTitle>

      <div className="relative mt-12">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Paper 2 Chapters</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        
        <ul className="space-y-4 pl-4 md:pl-12 text-lg md:text-xl font-medium">
          {PAPER2_CHAPTERS.map((topic, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <NAccent className="font-bold">→</NAccent>
              <span className="text-[var(--theme-text)] opacity-50">{topic.name}</span>
              <span className="text-[9px] md:text-[10px] font-sans font-bold bg-transparent text-[var(--theme-text)] opacity-40 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-text)]/30">Draft</span>
            </li>
          ))}
        </ul>
      </div>
    </HandwrittenCanvas>
  );
}
