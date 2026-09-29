"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Activity, ChevronRight, Stethoscope, BrainCircuit } from "lucide-react";

const MODULES = [
  {
    id: "obesity",
    title: "Clinical Deep-Dive: Obesity & Sthaulya",
    subtitle: "Modern Adipose Pathophysiology, Neuroendocrine Loops & Ayurvedic Medo Roga",
    tag: "High Yield",
    category: "Metabolic & Clinical Medicine",
    readTime: "12 min interactive",
    link: "/interactive-topics/obesity",
    status: "active",
    accent: "from-amber-500 to-orange-500"
  },
  {
    id: "diabetes",
    title: "Clinical Deep-Dive: Type 2 Diabetes & Prameha",
    subtitle: "Insulin Resistance, Beta-Cell Exhaustion & Dhatu Kshaya Dynamics",
    tag: "Coming Soon",
    category: "Endocrinology",
    readTime: "15 min interactive",
    link: "#",
    status: "locked",
    accent: "from-blue-500 to-cyan-500"
  }
];

export default function InteractiveTopicsHub() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 md:pt-12 pb-24 px-4 md:px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-6 md:mb-10 font-bold text-xs md:text-sm bg-surface/50 px-3 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to BAMS Hub
        </Link>

        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-6 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-500 mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Modern Clinical Modules
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Pathology & Chikitsa</span>
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 font-medium max-w-2xl leading-relaxed">
            Multi-layered interactive modules bridging modern clinical diagnostic criteria with classical Ayurvedic pathology (*Samprapti Ghataka*).
          </p>
        </div>

        <div className="space-y-4">
          {MODULES.map((item) => (
            item.status === "active" ? (
              <Link
                key={item.id}
                href={item.link}
                className="group block bg-surface/60 backdrop-blur-sm border border-surfaceBorder hover:border-amber-500/50 rounded-sm p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-sm border border-amber-500/20">
                        {item.tag}
                      </span>
                      <span className="text-xs text-foreground/50 font-medium">{item.category} • {item.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={item.id}
                className="bg-surface/30 border border-dashed border-surfaceBorder/60 rounded-sm p-6 opacity-60 cursor-not-allowed"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 bg-foreground/5 px-2.5 py-0.5 rounded-sm">
                        {item.tag}
                      </span>
                      <span className="text-xs text-foreground/40 font-medium">{item.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground/50">{item.title}</h2>
                    <p className="text-sm text-foreground/40 font-medium">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
