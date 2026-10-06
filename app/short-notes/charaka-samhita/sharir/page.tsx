"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

const SHARIRA_CHAPTERS = [
  { name: "Chapter 1: Katidha Purushiya Sharira", link: "#", status: "Draft" },
  { name: "Chapter 2: Atulya Gotriya Sharira", link: "#", status: "Draft" },
  { name: "Chapter 3: Khuddika Garbhavakranti Sharira", link: "#", status: "Draft" },
  { name: "Chapter 4: Mahati Garbhavakranti Sharira", link: "#", status: "Draft" },
  { name: "Chapter 5: Purusha Vichaya Sharira", link: "#", status: "Draft" },
  { name: "Chapter 6: Sharira Vichaya Sharira", link: "/short-notes/charaka-samhita/sharir/chapter-6", status: "Active" },
  { name: "Chapter 7: Sharira Sankhya Sharira", link: "#", status: "Draft" },
  { name: "Chapter 8: Jatisutriya Sharira", link: "#", status: "Draft" }
];

export default function ShariraSthanaHub() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8 pt-4">
        <Link href="/short-notes/charaka-samhita" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Charaka Samhita Hub
        </Link>
      </div>

      {/* Main Title */}
      <HandwrittenTitle badge="Sharira Sthana">
        Charaka Samhita
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto block">
        Complete high-yield syllabus notes for all 8 chapters of Sharira Sthana (Anatomy, Embryology & Philosophy).
      </NText>

      {/* Chapter List */}
      <div className="relative">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Sharira Sthana Chapters</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        
        <ul className="space-y-4 pl-4 md:pl-12 text-lg md:text-xl font-medium">
          {SHARIRA_CHAPTERS.map((topic, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <NAccent className="font-bold">→</NAccent>
              
              {topic.status === "Active" ? (
                <Link 
                  href={topic.link} 
                  className="text-[var(--theme-text)] hover:text-[var(--theme-accent)] underline decoration-[var(--theme-border)] opacity-90 hover:opacity-100 hover:decoration-[var(--theme-accent)] underline-offset-4 transition-all font-bold"
                >
                  {topic.name}
                </Link>
              ) : (
                <span className="text-[var(--theme-text)] opacity-50">
                  {topic.name}
                </span>
              )}

              {/* Status Badges */}
              {topic.status === "Active" ? (
                <span className="text-[10px] md:text-xs font-sans font-bold bg-transparent text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-600/50">Active</span>
              ) : (
                <span className="text-[9px] md:text-[10px] font-sans font-bold bg-transparent text-[var(--theme-text)] opacity-40 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-text)]/30">Draft</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      
    </HandwrittenCanvas>
  );
}
