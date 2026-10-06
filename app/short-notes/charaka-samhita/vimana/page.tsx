"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

const VIMANA_CHAPTERS = [
  { name: "Chapter 1: Rasa Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-1", status: "Draft" },
  { name: "Chapter 2: Trividha Kukshiya Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-2", status: "Draft" },
  { name: "Chapter 3: Janapadodhwamsaniya Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-3", status: "Draft" },
  { name: "Chapter 4: Trividha Roga Visesha Vijnaniya", link: "/short-notes/charaka-samhita/vimana/chapter-4", status: "Draft" },
  { name: "Chapter 5: Sroto Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-5", status: "Draft" },
  { name: "Chapter 6: Roganika Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-6", status: "Draft" },
  { name: "Chapter 7: Vyadhita Rupa Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-7", status: "Draft" },
  { name: "Chapter 8: Rogabhishagjitiya Vimana", link: "/short-notes/charaka-samhita/vimana/chapter-8", status: "Active" }
];

export default function VimanaSthanaHub() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8">
        <Link href="/short-notes/charaka-samhita" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Charaka Samhita Hub
        </Link>
      </div>

      <HandwrittenTitle badge="Vimana Sthana">
        Charaka Samhita
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto block">
        Complete high-yield syllabus notes for all 8 chapters of Vimana Sthana.
      </NText>

      <div className="relative">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Vimana Sthana Chapters</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        <ul className="space-y-4 pl-4 md:pl-12 text-xl">
          {VIMANA_CHAPTERS.map((topic, idx) => (
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
