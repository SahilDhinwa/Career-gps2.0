"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NAccent, NText } from "@/components/NoteElements";

// ==========================================
// MASTER INDEX DATA
// ==========================================
const NOTEBOOK_INDEX = [
  {
    subject: "Roga Nidan & Vikriti Vigyan",
    topics: [
      { name: "View Complete Roga Nidan Syllabus & Index", link: "/short-notes/roga-nidan", status: "Active" }
    ]
  },  
  {
    subject: "Agada Tantra (Toxicology)",
    featuredBanner: {
      badge: "🔥 Exam Special (PYQ)",
      title: "Batch 22 Main Paper: Solved MCQs",
      subtitle: "Click here to practice all previous year questions with detailed explanations!",
      link: "/short-notes/agada-tantra/batch-22-mcqs"
    },
    topics: [
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
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to BAMS Hub
        </Link>
      </div>

      <HandwrittenTitle badge="Index Page">
        Quick Revision Notebook
      </HandwrittenTitle>

      <NText className="font-bold text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto block">
        Select a subject below to open the handwritten quick-notes. Perfect for last-minute exam revision and OPD quick references.
      </NText>

      <div className="space-y-12">
        {NOTEBOOK_INDEX.map((section, idx) => (
          <div key={idx} className="relative">
            
            {/* Subject Header */}
            <div className="flex items-center gap-4 text-2xl mb-6">
              <HandwrittenBox>
                {section.subject}
              </HandwrittenBox>
              <div className="flex-grow border-b-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
            </div>

            {/* ========================================== */}
            {/* DYNAMIC FEATURED BANNER (Inside Subject)   */}
            {/* ========================================== */}
              
              {section.featuredBanner && (
              <div className="w-full mb-8 mt-2 pl-2 md:pl-8 pr-2">
                <Link href={section.featuredBanner.link} className="w-full max-w-3xl group block">
                  <div 
                    /* 
                      CHANGED: 
                      1. Removed border-dashed, added border-2 (solid) like Rog Nidan boxes.
                      2. Added bg-white/40 dark:bg-black/20 to give it a solid, theme-adaptive fill!
                      3. Changed border color to standard theme border.
                    */
                    className="relative p-6 md:p-8 border-2 border-[var(--theme-border)] bg-white/40 dark:bg-black/20 text-center transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-md group-hover:bg-white/50 dark:group-hover:bg-black/30"
                    style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                  >
                    {/* Top Tape Effect */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[var(--theme-border)] opacity-40 -rotate-2"></div>
                    
                    {/* Animated Badge */}
                    <span className="inline-block px-3 py-1 mb-4 text-xs md:text-sm font-black tracking-widest uppercase bg-[var(--theme-accent)] text-white rounded-sm shadow-sm animate-bounce">
                      {section.featuredBanner.badge}
                    </span>

                    {/* Title */}
                    <h2 
                      className="text-xl md:text-3xl font-black text-[var(--theme-text)] mb-2 transition-colors group-hover:text-[var(--theme-accent)]" 
                      style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive" }}
                    >
                      {section.featuredBanner.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm md:text-base text-[var(--theme-text)] opacity-80 font-bold" style={{ fontFamily: "var(--font-kalam)" }}>
                      {section.featuredBanner.subtitle}
                    </p>
                  </div>
                </Link>
              </div>
            )}
           
            {/* ========================================== */}

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
