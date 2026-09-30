"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

const NOTEBOOK_INDEX = [
  {
    subject: "Roga Nidan & Vikriti Vigyan",
    topics: [
      { name: "View Complete Roga Nidan Syllabus & Index", link: "/short-notes/roga-nidan", status: "Active" }
    ]
  },
  {
    subject: "Dravyaguna Vigyan",
    topics: [
      { name: "Basic Pharmacology Definitions", link: "/short-notes/dravyaguna/pharmacology", status: "Active" },
      { name: "Important Drug Profiles", link: "#", status: "Coming Soon" },
    ]
  },
  {
    subject: "Rasa Shastra & Bhaishajya Kalpana",
    topics: [
      { name: "Maharasa Varg", link: "#", status: "Coming Soon" },
      { name: "Yantra & Musha (Instruments)", link: "#", status: "Coming Soon" },
    ]
  }
];

export default function ShortNotesIndex() {
  return (
    <HandwrittenCanvas>
      
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-slate-500 dark:text-[#d4c5b0] hover:text-red-600 dark:hover:text-[#ff0055] transition-colors font-bold text-lg font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to BAMS Hub
        </Link>
      </div>

      <HandwrittenTitle badge={<>Index<br/><span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_8px_rgba(255,0,85,0.7)]">Page</span></>}>
        Quick Revision Notebook
      </HandwrittenTitle>

      <p className="text-blue-700 dark:text-[#e8dcc4] text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto">
        Select a subject below to open the handwritten quick-notes. Perfect for last-minute exam revision and OPD quick references.
      </p>

      <div className="space-y-12">
        {NOTEBOOK_INDEX.map((section, idx) => (
          <div key={idx} className="relative">
            
            {/* Subject Header */}
            <div className="flex items-center gap-4 text-2xl mb-6">
              <HandwrittenBox borderColor="border-slate-800 dark:border-[#8b7355]" className="bg-slate-100 dark:bg-[#1a110a]">
                {section.subject}
              </HandwrittenBox>
              <div className="flex-grow border-b-2 border-dashed border-slate-300 dark:border-[#8b7355]"></div>
            </div>

            {/* Topics List */}
            <ul className="space-y-4 pl-4 md:pl-12 text-xl">
              {section.topics.map((topic, topicIdx) => (
                <li key={topicIdx} className="flex items-center gap-3">
                  <span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] font-bold">→</span>
                  
                  {topic.link !== "#" ? (
                    <Link 
                      href={topic.link} 
                      className="text-blue-700 dark:text-[#e8dcc4] hover:text-red-600 dark:hover:text-[#ff0055] underline decoration-slate-300 dark:decoration-[#8b7355] hover:decoration-red-600 dark:hover:decoration-[#ff0055] underline-offset-4 transition-all"
                    >
                      {topic.name}
                    </Link>
                  ) : (
                    <span className="text-slate-500 dark:text-[#8b7355] line-through decoration-slate-300 dark:decoration-[#8b7355]">
                      {topic.name}
                    </span>
                  )}

                  {/* Status Badge */}
                  {topic.status === "New" && (
                    <span className="text-[12px] font-sans font-bold bg-red-100 dark:bg-[#1a110a] text-red-600 dark:text-[#ff0055] px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-red-200 dark:border-[#ff0055]/50">
                      New
                    </span>
                  )}
                  {topic.status === "Active" && (
                    <span className="text-[12px] font-sans font-bold bg-emerald-100 dark:bg-[#1a110a] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-200 dark:border-emerald-900">
                      Active
                    </span>
                  )}
                  {topic.status === "Coming Soon" && (
                    <span className="text-[12px] font-sans font-bold bg-slate-100 dark:bg-[#1a110a] text-slate-500 dark:text-[#d4c5b0] px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-slate-200 dark:border-[#8b7355]/50">
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
