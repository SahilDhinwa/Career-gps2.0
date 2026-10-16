"use client";

import Link from "next/link";
import { ArrowLeft, FlaskConical, Printer, Sparkles, ChevronRight, Leaf, Stethoscope, ShieldAlert } from "lucide-react";
import AyurvedicBackground from "@/components/AyurvedicBackground";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const PRACTICAL_SUBJECTS = [
  {
    id: "rasa-shastra",
    name: "Rasa Shastra & Bhaishajya Kalpana",
    code: "AY-RS",
    href: "/bams-hub/practical/rasa-shastra",
    icon: FlaskConical,
    description: "NCISM non-lecture activity records, mineral Shodhana & Marana logs, and pharmaceutical preparation manuals.",
    emptyCount: 3,
    filledCount: 2,
    status: "Live",
  },
  {
    id: "dravyaguna",
    name: "Dravyaguna Vigyan",
    code: "AY-DG",
    href: "/bams-hub/practical/dravyaguna",
    icon: Leaf,
    description: "Herbarium record templates, macro/microscopic pharmacognosy observation sheets, and solved specimen logs.",
    emptyCount: 2,
    filledCount: 1,
    status: "Live",
  },
  {
    id: "roga-nidana",
    name: "Roga Nidana & Vikriti Vigyan",
    code: "AY-RN",
    href: "/bams-hub/practical/roga-nidana",
    icon: Stethoscope,
    description: "Clinical case-taking proformas, Rogi Pariksha charts, pathology lab manuals, and solved clinical records.",
    emptyCount: 2,
    filledCount: 2,
    status: "Live",
  },
  {
    id: "agad-tantra",
    name: "Agad Tantra & Vyavahara Ayurveda",
    code: "AY-AT",
    href: "/bams-hub/practical/agad-tantra",
    icon: ShieldAlert,
    description: "Toxicology specimen identification, forensic medicine post-mortem proformas, and injury report templates.",
    emptyCount: 1,
    filledCount: 1,
    status: "Live",
  },
];

export default function PracticalVaultPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isBatman = mounted && (theme === "batman" || resolvedTheme === "batman");

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
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-10 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase">
              <FlaskConical className="w-3.5 h-3.5" /> NCISM 2nd Prof Practicals
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3 text-foreground">
            Subject-Wise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Practical Vault</span>
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl font-medium">
            Select a subject below to open its dedicated repository containing both <strong>Practical Empty</strong> (blank printable sheets) and <strong>Practical Filled</strong> (solved reference records).
          </p>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRACTICAL_SUBJECTS.map((subj) => {
            const Icon = subj.icon;
            return (
              <Link
                key={subj.id}
                href={subj.href}
                className="group bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-sm bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    {subj.code}
                  </span>
                </div>

                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                  {subj.name}
                </h2>
                <p className="text-foreground/70 text-xs md:text-sm font-medium mb-6 flex-grow leading-relaxed">
                  {subj.description}
                </p>

                {/* Empty & Filled Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-background/60 border border-surfaceBorder p-3 rounded-sm flex items-center gap-2">
                    <Printer className="w-4 h-4 text-amber-500 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-foreground block">{subj.emptyCount} Blank PDFs</span>
                      <span className="text-[10px] text-foreground/50">Ready to Print</span>
                    </div>
                  </div>
                  <div className="bg-background/60 border border-surfaceBorder p-3 rounded-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-foreground block">{subj.filledCount} Solved PDFs</span>
                      <span className="text-[10px] text-foreground/50">Viva Reference</span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold py-3 px-4 rounded-sm text-xs md:text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto">
                  Open {subj.code} Practicals <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
