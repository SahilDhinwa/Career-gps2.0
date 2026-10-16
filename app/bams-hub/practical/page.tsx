"use client";

import Link from "next/link";
import { ArrowLeft, FlaskConical, Download, Printer, FileText, ChevronRight, Sparkles } from "lucide-react";
import AyurvedicBackground from "@/components/AyurvedicBackground";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Subject-wise Practical Data Structure
const PRACTICAL_SUBJECTS = [
  {
    id: "rasa-shastra",
    name: "Rasa Shastra & Bhaishajya Kalpana",
    code: "AY-RS",
    description: "Pharmacy, Mineral processing, Gandhaka Jirna, Shodhana, and Marana records.",
    emptyFiles: [
      { title: "Non-Lecture Activity Record (Blank Template)", size: "1.2 MB", url: "#" },
      { title: "Mineral & Metal Shodhana Practical Manual", size: "3.4 MB", url: "#" },
    ],
    filledFiles: [
      { title: "Solved Example: Gandhaka Shodhana & Marana Record", size: "2.8 MB", url: "#" },
      { title: "Complete Bhaishajya Kalpana Practical Guidelines", size: "4.1 MB", url: "#" },
    ]
  },
  {
    id: "dravyaguna",
    name: "Dravyaguna Vigyan",
    code: "AY-DG",
    description: "Herbarium sheets, pharmacological property descriptions, and botanical identification.",
    emptyFiles: [
      { title: "Herbarium Record Template & Index", size: "2.1 MB", url: "#" },
      { title: "Pharmacognosy Practical Observation Sheet", size: "1.5 MB", url: "#" },
    ],
    filledFiles: [
      { title: "Reference Solved Herbarium Specimen Records", size: "5.6 MB", url: "#" },
    ]
  },
  {
    id: "roga-nidana",
    name: "Roga Nidana & Vikriti Vigyan",
    code: "AY-RN",
    description: "Clinical case-taking formats, pathological examination notes, and rogayi pariksha charts.",
    emptyFiles: [
      { title: "Clinical Case Taking Proforma (Blank)", size: "900 KB", url: "#" },
    ],
    filledFiles: [
      { title: "Exemplar Clinical Case Records (Panchakarma & Kaya)", size: "3.2 MB", url: "#" },
    ]
  }
];

export default function PracticalVaultPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSubject, setActiveSubject] = useState(PRACTICAL_SUBJECTS[0].id);

  useEffect(() => setMounted(true), []);
  const isBatman = mounted && (theme === "batman" || resolvedTheme === "batman");

  const currentSubjectData = PRACTICAL_SUBJECTS.find(s => s.id === activeSubject) || PRACTICAL_SUBJECTS[0];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6 ${isBatman ? 'bg-transparent' : 'bg-background'}`}>
      
      {!isBatman && <AyurvedicBackground />}

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to BAMS Hub
        </Link>

        {/* Header */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-10 mb-8 rounded-sm shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase">
              <FlaskConical className="w-3.5 h-3.5" /> Clinical & Laboratory Records
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Manuals & Records Vault</span>
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl font-medium">
            Select your subject below to access blank templates for printing your physical record books, alongside fully solved reference files for viva preparation.
          </p>
        </div>

        {/* Subject Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {PRACTICAL_SUBJECTS.map((subj) => (
            <button
              key={subj.id}
              onClick={() => setActiveSubject(subj.id)}
              className={`px-5 py-3 rounded-sm font-bold text-xs md:text-sm transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                activeSubject === subj.id
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                  : 'bg-surface/80 text-foreground/70 border-surfaceBorder hover:border-amber-500/40'
              }`}
            >
              <FileText className="w-4 h-4" /> {subj.name}
            </button>
          ))}
        </div>

        {/* Active Subject Content Area */}
        <div className="bg-surface/90 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-8">
          <div className="border-b border-surfaceBorder pb-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-1">{currentSubjectData.name}</h2>
            <p className="text-foreground/60 text-xs md:text-sm">{currentSubjectData.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1: Empty Files for Printing */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider">
                <Printer className="w-4 h-4" /> Blank Templates (For Printing)
              </div>
              <div className="space-y-3">
                {currentSubjectData.emptyFiles.map((file, idx) => (
                  <div key={idx} className="bg-background/60 border border-surfaceBorder p-4 rounded-sm flex items-center justify-between gap-4 hover:border-amber-500/40 transition-colors">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{file.title}</h4>
                      <span className="text-[10px] font-mono text-foreground/50">PDF • {file.size} • Unfilled Record Sheet</span>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-white border border-amber-500/30 p-2.5 rounded-sm transition-colors flex items-center gap-1.5 text-xs font-bold"
                      title="Download Blank PDF"
                    >
                      <Download className="w-4 h-4" /> Print
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Filled Reference Records */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Solved References (For Viva Prep)
              </div>
              <div className="space-y-3">
                {currentSubjectData.filledFiles.map((file, idx) => (
                  <div key={idx} className="bg-background/60 border border-surfaceBorder p-4 rounded-sm flex items-center justify-between gap-4 hover:border-emerald-500/40 transition-colors">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{file.title}</h4>
                      <span className="text-[10px] font-mono text-emerald-500/80">PDF • {file.size} • Fully Documented</span>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-white border border-emerald-500/30 p-2.5 rounded-sm transition-colors flex items-center gap-1.5 text-xs font-bold"
                      title="Download Solved Reference"
                    >
                      <Download className="w-4 h-4" /> View
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
