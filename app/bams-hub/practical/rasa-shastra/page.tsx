"use client";

import Link from "next/link";
import { ArrowLeft, FlaskConical, Download, Printer, FileText, Sparkles, CheckCircle2, BookOpen } from "lucide-react";
import AyurvedicBackground from "@/components/AyurvedicBackground";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Rasa Shastra Practical Files Database (Linked to public/practical_pdfs/)
const RASA_SHASTRA_PRACTICALS = {
  emptyFiles: [
    {
      id: "rs-empty-1",
      title: "Analytical Practical Record Book",
      ncismFormat: "Comprehensive Logbook for RS & BK Practicals",
      size: "Standard PDF",
      pages: "Full Book",
      url: "/practical_pdfs/rs bk analytical prctical record book - Copy.pdf"
    },
    {
      id: "rs-empty-2",
      title: "Non-Lecture Activity Record",
      ncismFormat: "Covers Aim, Method, Group Role & Discussion",
      size: "Standard PDF",
      pages: "Template",
      url: "/practical_pdfs/RASASHASTRA non lac record.pdf"
    },
    {
      id: "rs-empty-3",
      title: "Pharmacy Visit Report",
      ncismFormat: "Ayurvedic Pharmacy/Manufacturing Unit Visit Log",
      size: "Standard PDF",
      pages: "Template",
      url: "/practical_pdfs/pharmacy visit report.pdf"
    },
    {
      id: "rs-empty-4",
      title: "Hospital IPD Visit Practical Format",
      ncismFormat: "Clinical IPD Patient Observation Sheet",
      size: "Standard PDF",
      pages: "Template",
      url: "/practical_pdfs/Hospital IPD Visit Practical Format.pdf"
    },
    {
      id: "rs-empty-5",
      title: "Market Survey Form",
      ncismFormat: "Raw Drugs & Market Medicine Survey Format",
      size: "Standard PDF",
      pages: "Template",
      url: "/practical_pdfs/MARKET SURVEY FORM.pdf"
    }
  ],
  filledFiles: [
    {
      id: "rs-filled-1",
      title: "Solved Reference Vault (Coming Soon)",
      ncismFormat: "Fully documented logs with observations for Viva Prep",
      size: "-",
      pages: "-",
      url: "#"
    }
  ]
};

export default function RasaShastraPracticalPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"empty" | "filled">("empty");

  useEffect(() => setMounted(true), []);
  const isBatman = mounted && (theme === "batman" || resolvedTheme === "batman");

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6 ${isBatman ? 'bg-transparent' : 'bg-background'}`}>
      
      {!isBatman && <AyurvedicBackground />}

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/bams-hub/practical" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Subject Vaults
        </Link>

        {/* Header */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-10 mb-8 rounded-sm shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase">
              <FlaskConical className="w-3.5 h-3.5" /> Subject Code: AY-RS
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Rasa Shastra & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Bhaishajya Kalpana</span>
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl font-medium">
            Access official NCISM-compliant practical sheets. Read online or download blank templates for printing your physical records, and browse solved examples for exam preparation.
          </p>
        </div>

        {/* Toggle Tabs (Empty vs Filled) */}
        <div className="flex flex-wrap items-center gap-4 mb-8 border-b border-surfaceBorder pb-4">
          <button
            onClick={() => setActiveTab("empty")}
            className={`px-6 py-3 rounded-sm font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              activeTab === "empty"
                ? "bg-amber-500 text-white border-amber-600 shadow-md"
                : "bg-surface/80 text-foreground/70 border-surfaceBorder hover:border-amber-500/40"
            }`}
          >
            <Printer className="w-4 h-4" /> Practical Empty (Blank Files for Printing)
          </button>

          <button
            onClick={() => setActiveTab("filled")}
            className={`px-6 py-3 rounded-sm font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
              activeTab === "filled"
                ? "bg-emerald-600 text-white border-emerald-700 shadow-md"
                : "bg-surface/80 text-foreground/70 border-surfaceBorder hover:border-emerald-500/40"
            }`}
          >
            <Sparkles className="w-4 h-4" /> Practical Filled (Solved Reference Files)
          </button>
        </div>

        {/* Content Section */}
        <div className="bg-surface/90 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg">
          
          {activeTab === "empty" ? (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surfaceBorder pb-4">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">Blank Record Templates</h2>
                  <p className="text-xs text-foreground/60">Optimized for physical record book binding and university submissions.</p>
                </div>
                <span className="text-xs font-mono bg-amber-500/10 text-amber-500 px-3 py-1 rounded-sm border border-amber-500/20">
                  {RASA_SHASTRA_PRACTICALS.emptyFiles.length} Files Available
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {RASA_SHASTRA_PRACTICALS.emptyFiles.map((file) => (
                  <div key={file.id} className="bg-background/60 border border-surfaceBorder p-5 rounded-sm flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-amber-500/40 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-amber-500 shrink-0" />
                        <h3 className="font-bold text-base text-foreground">{file.title}</h3>
                      </div>
                      <p className="text-xs text-foreground/60 font-mono">{file.ncismFormat}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-foreground/50 pt-1">
                        <span>Format: PDF (Print-Ready)</span>
                        <span>•</span>
                        <span>Size: {file.size}</span>
                        <span>•</span>
                        <span>Length: {file.pages}</span>
                      </div>
                    </div>

                    {/* Read & Save Buttons */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 font-bold py-2.5 px-4 rounded-sm text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-4 h-4" /> Read
                      </a>
                      <a
                        href={file.url}
                        download
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-4 rounded-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Download className="w-4 h-4" /> Save
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surfaceBorder pb-4">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">Solved Reference Records</h2>
                  <p className="text-xs text-foreground/60">Fully documented logs with observations, discussions, and conclusion criteria for exams.</p>
                </div>
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-sm border border-emerald-500/20">
                  {RASA_SHASTRA_PRACTICALS.filledFiles.length} Files Available
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {RASA_SHASTRA_PRACTICALS.filledFiles.map((file) => (
                  <div key={file.id} className="bg-background/60 border border-surfaceBorder p-5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-500/40 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <h3 className="font-bold text-base text-foreground">{file.title}</h3>
                      </div>
                      <p className="text-xs text-foreground/60 font-mono">{file.ncismFormat}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-foreground/50 pt-1">
                        <span>Format: PDF (High Quality)</span>
                        <span>•</span>
                        <span>Size: {file.size}</span>
                        <span>•</span>
                        <span>Length: {file.pages}</span>
                      </div>
                    </div>

                    {file.url !== "#" ? (
                      <div className="flex items-center gap-2.5 shrink-0">
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 font-bold py-2.5 px-4 rounded-sm text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <BookOpen className="w-4 h-4" /> Read
                        </a>
                        <a
                          href={file.url}
                          download
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <Download className="w-4 h-4" /> Save
                        </a>
                      </div>
                    ) : (
                      <div className="shrink-0 bg-surface/50 border border-surfaceBorder text-foreground/50 font-bold py-2.5 px-4 rounded-sm text-xs flex items-center justify-center cursor-not-allowed">
                        Awaiting Upload
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
