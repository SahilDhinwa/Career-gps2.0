"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

// ==========================================
// CLEAN & ORGANIZED MASTER INDEX (2 LINKS PER SUBJECT)
// ==========================================
const MASTER_INDEX = [
  {
    subject: "Roga Nidan & Vikriti Vigyan",
    topics: [
      { name: "📖 Theory Chapters & Syllabus", link: "/short-notes/roga-nidan", status: "Active" },
      { name: "📝 Previous Year Papers (PYQ)", link: "/short-notes/roga-nidan#pyq", status: "Coming Soon" }
    ]
  },  
  {
    subject: "Agada Tantra (Toxicology)",
    topics: [
      { name: "📖 Theory Chapters & Syllabus", link: "/short-notes/agada-tantra", status: "Active" },
      { name: "📝 Previous Year Papers (PYQ)", link: "/short-notes/agada-tantra#pyq", status: "Active" }
    ]
  },
  {
    subject: "Dravyaguna Vigyan",
    topics: [
      { name: "📖 Theory Chapters & Syllabus", link: "#", status: "Coming Soon" },
      { name: "📝 Previous Year Papers (PYQ)", link: "#", status: "Coming Soon" }
    ]
  },
  {
    subject: "Rasa Shastra & Bhaishajya Kalpana",
    topics: [
      { name: "📖 Theory Chapters & Syllabus", link: "#", status: "Coming Soon" },
      { name: "📝 Previous Year Papers (PYQ)", link: "#", status: "Coming Soon" }
    ]
  }
];

export default function ShortNotesMasterIndex() {
  return (
    <HandwrittenCanvas>
      
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to BAMS Hub
        </Link>
      </div>

      <HandwrittenTitle badge="Master Index">
        Quick Revision Notebook
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto block">
        Select a section below to open its complete index of handwritten notes or previous year papers.
      </NText>

      <div className="space-y-12">
        {MASTER_INDEX.map((section, idx) => (
          <div key={idx} className="relative">
            
            {/* Subject Header */}
            <div className="flex items-center gap-4 text-2xl mb-6">
              <HandwrittenBox>
                {section.subject}
              </HandwrittenBox>
              <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
            </div>

            {/* Topics List */}
            <ul className="space-y-4 pl-4 md:pl-12 text-xl">
              {section.topics.map((topic, topicIdx) => (
                <li key={topicIdx} className="flex items-center gap-3">
                  <NAccent className="font-bold">→</NAccent>
                  
                  {topic.link !== "#" ? (
                    <Link 
                      href={topic.link} 
                      className="text-[var(--theme-text)] hover:text-[var(--theme-accent)] underline decoration-[var(--theme-border)] opacity-80 hover:opacity-100 hover:decoration-[var(--theme-accent)] underline-offset-4 transition-all font-bold"
                    >
                      {topic.name}
                    </Link>
                  ) : (
                    <span className="text-[var(--theme-text)] opacity-50 line-through decoration-[var(--theme-border)]">
                      {topic.name}
                    </span>
                  )}

                  {/* Status Badges */}
                  {topic.status === "New" && (
                    <span className="text-[12px] font-sans font-bold bg-transparent text-[var(--theme-accent)] px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-accent)] opacity-90">
                      New
                    </span>
                  )}
                  {topic.status === "Active" && (
                    <span className="text-[12px] font-sans font-bold bg-transparent text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-600/50">
                      Active
                    </span>
                  )}
                  {topic.status === "Coming Soon" && (
                    <span className="text-[12px] font-sans font-bold bg-transparent text-[var(--theme-text)] opacity-60 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-[var(--theme-border)]">
                      Draft
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </HandwrittenCanvas>
  );
}
