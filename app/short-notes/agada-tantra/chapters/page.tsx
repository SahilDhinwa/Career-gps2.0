"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

const THEORY_CHAPTERS = [
  { name: "Chapter 1: Concepts of Agada Tantra", link: "/short-notes/agada-tantra/chapter-1", status: "Active" },
  { name: "Chapter 2: Visha Chikitsa (Management)", link: "/short-notes/agada-tantra/chapter-2", status: "Active" },
  { name: "Chapter 3: Vishakta Aahara & Viruddha Ahara", link: "/short-notes/agada-tantra/chapter-3", status: "Active" },
  { name: "Chapter 3 (DETAILED): Vishakta Aahara & Viruddha Ahara", link: "/short-notes/agada-tantra/chapter-3-detailed", status: "Active" },
  { name: "Chapter 4: Garavisha & Dooshivisha", link: "/short-notes/agada-tantra/chapter-4", status: "Active" },
  { name: "Chapter 5: Visha Upadrava & Hazards", link: "/short-notes/agada-tantra/chapter-5", status: "Active" },
  { name: "Chapter 6: Environmental Toxicology", link: "/short-notes/agada-tantra/chapter-6", status: "Active" },
  { name: "Chapter 7: Contact Dermatitis", link: "/short-notes/agada-tantra/chapter-7", status: "Active" },
  { name: "Chapter 8: Agada Yogas (Therapeutic Formulations)", link: "/short-notes/agada-tantra/chapter-8", status: "Active" },
  { name: "Chapter 9: Sthavara Visha (Plant Poisons)", link: "/short-notes/agada-tantra/chapter-9", status: "Active" },
  { name: "Chapter 10: Sthavara Visha (Metallic Poisons)", link: "/short-notes/agada-tantra/chapter-10", status: "Active" },
  { name: "Chapter 11: Jangama Visha (Animal Poisoning)", link: "/short-notes/agada-tantra/chapter-11", status: "Active" },
  { name: "Chapter 12: Kritrima Visha (Corrosive Poisons)", link: "/short-notes/agada-tantra/chapter-12", status: "Active" },
  { name: "Chapter 12 (DETAILED): Kritrima Visha (Synthetic Poisons)", link: "/short-notes/agada-tantra/chapter-12-detailed", status: "Active" },
  { name: "Chapter 13: Substances of Abuse (Narcotics)", link: "/short-notes/agada-tantra/chapter-13", status: "Active" },
  { name: "Chapter 15: Forensic Medicine & Legal Procedures", link: "/short-notes/agada-tantra/chapter-15", status: "Active" },
  { name: "Chapter 16: Medical Ethics & Duties of Practitioner", link: "/short-notes/agada-tantra/chapter-16", status: "Active" },
  { name: "Chapter 18: Personal Identity (Forensic)", link: "/short-notes/agada-tantra/chapter-18", status: "Active" },
  { name: "Chapter 19: Forensic Thanatology (Death Study)", link: "/short-notes/agada-tantra/chapter-19", status: "Active" },
  { name: "Chapter 20: Asphyxial Deaths", link: "/short-notes/agada-tantra/chapter-20", status: "Active" }
];

export default function AgadaTantraChapters() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8">
        <Link href="/short-notes" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Master Index
        </Link>
      </div>

      <HandwrittenTitle badge="Agada Tantra">
        Theory Chapters
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-8 text-center max-w-2xl mx-auto block">
        Complete syllabus notes for Agada Tantra.
      </NText>

      <div className="relative">
        <div className="flex items-center gap-4 text-2xl mb-6">
          <HandwrittenBox>Theory Chapters (Syllabus)</HandwrittenBox>
          <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        </div>
        <ul className="space-y-4 pl-4 md:pl-12 text-xl">
          {THEORY_CHAPTERS.map((topic, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <NAccent className="font-bold">→</NAccent>
              <Link href={topic.link} className="text-[var(--theme-text)] hover:text-[var(--theme-accent)] underline decoration-[var(--theme-border)] opacity-80 hover:opacity-100 hover:decoration-[var(--theme-accent)] underline-offset-4 transition-all font-bold">
                {topic.name}
              </Link>
              {topic.status === "New" && <span className="text-[12px] font-sans font-bold bg-transparent text-[var(--theme-accent)] px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-accent)] opacity-90">New</span>}
              {topic.status === "Active" && <span className="text-[12px] font-sans font-bold bg-transparent text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-600/50">Active</span>}
            </li>
          ))}
        </ul>
      </div>
    </HandwrittenCanvas>
  );
}
