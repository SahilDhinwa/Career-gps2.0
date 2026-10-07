"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent } from "@/components/NoteElements";

export default function Chapter10Index() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8 pt-4">
        <Link href="/short-notes/swasth-vritta/paper-1" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Paper 1
        </Link>
      </div>

      <HandwrittenTitle badge="Chapter 10">
        Naturopathy (प्राकृतिक चिकित्सा)
      </HandwrittenTitle>

      <div className="relative mt-12">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Topics / Parts</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        
        <ul className="space-y-4 pl-4 md:pl-12 text-lg md:text-xl font-medium">
          <li className="flex items-center gap-3">
            <NAccent className="font-bold">→</NAccent>
            <Link href="/short-notes/swasth-vritta/paper-1/chapter-10-naturopathy/part-1" className="text-[var(--theme-text)] hover:text-[var(--theme-accent)] underline decoration-[var(--theme-border)] opacity-90 hover:opacity-100 hover:decoration-[var(--theme-accent)] underline-offset-4 transition-all font-bold">
              Part 1: Foundation of Nature Cure
            </Link>
            <span className="text-[10px] md:text-xs font-sans font-bold bg-transparent text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-600/50">Active</span>
          </li>
          <li className="flex items-center gap-3">
            <NAccent className="font-bold">→</NAccent>
            <span className="text-[var(--theme-text)] opacity-50">Part 2: Mud Therapy & Sun Bath</span>
            <span className="text-[9px] md:text-[10px] font-sans font-bold bg-transparent text-[var(--theme-text)] opacity-40 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-text)]/30">Draft</span>
          </li>
        </ul>
      </div>
    </HandwrittenCanvas>
  );
}
