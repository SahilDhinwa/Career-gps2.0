"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

const NOTEBOOK_INDEX = [
  {
    subject: "Roga Nidan & Vikriti Vigyan",
    topics: [
      { name: "Tuberculosis (Rajayakshma / TB)", link: "/short-notes/roga-nidana/tuberculosis", status: "New" },
      { name: "अतिसार", link: "/short-notes/roga-nidana/atisara", status: "New" },
      { name: "Diabetes Mellitus (Prameha)", link: "#", status: "Coming Soon" },
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
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-500 transition-colors font-bold text-lg font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to BAMS Hub
        </Link>
      </div>

      <HandwrittenTitle badge={<>Index<br/><span className="text-red-600 dark:text-rose-500">Page</span></>}>
        Quick Revision Notebook
      </HandwrittenTitle>

      <p className="text-blue-700 dark:text-sky-400 text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto">
        Select a subject below to open the handwritten quick-notes. Perfect for last-minute exam revision and OPD quick references.
      </p>

      <div className="space-y-12">
        {NOTEBOOK_INDEX.map((section, idx) => (
          <div key={idx} className="relative">
            
            {/* Subject Header */}
            <div className="flex items-center gap-4 text-2xl mb-6">
              <HandwrittenBox borderColor="border-slate-800 dark:border-slate-300" className="bg-slate-100 dark:bg-slate-900">
                {section.subject}
              </HandwrittenBox>
              <div className="flex-grow border-b-2 border-dashed border-slate-300 dark:border-slate-700"></div>
            </div>

            {/* Topics List */}
            <ul className="space-y-4 pl-4 md:pl-12 text-xl">
              {section.topics.map((topic, topicIdx) => (
                <li key={topicIdx} className="flex items-center gap-3">
                  <span className="text-red-600 dark:text-rose-500 font-bold">→</span>
                  
                  {topic.link !== "#" ? (
                    <Link 
                      href={topic.link} 
                      className="text-blue-700 dark:text-sky-400 hover:text-red-600 dark:hover:text-rose-500 underline decoration-slate-300 dark:decoration-slate-700 hover:decoration-red-600 dark:hover:decoration-rose-500 underline-offset-4 transition-all"
                    >
                      {topic.name}
                    </Link>
                  ) : (
                    <span className="text-slate-500 dark:text-slate-500 line-through decoration-slate-300 dark:decoration-slate-700">
                      {topic.name}
                    </span>
                  )}

                  {/* Status Badge */}
                  {topic.status === "New" && (
                    <span className="text-[12px] font-sans font-bold bg-red-100 dark:bg-rose-500/20 text-red-600 dark:text-rose-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2">
                      New
                    </span>
                  )}
                  {topic.status === "Active" && (
                    <span className="text-[12px] font-sans font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2">
                      Active
                    </span>
                  )}
                  {topic.status === "Coming Soon" && (
                    <span className="text-[12px] font-sans font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2">
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
