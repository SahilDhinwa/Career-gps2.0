"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText, BookOpen, Calendar, HardDrive } from "lucide-react";

// THE UPDATED PDF DATABASE
const PREVIOUS_PAPERS = [
  { 
    id: 1, 
    subject: "BAMS 2nd Prof - All Papers (Batch 2021)", 
    year: "Jan-Feb 2025", 
    size: "16.5 MB", 
    link: "/pdfs/batch-2021-all-papers.pdf" // EXACT match to your uploaded file
  },
  { 
    id: 2, 
    subject: "BAMS 2nd Prof - DG PAPER-1 ANSWERS (Batch 2021)", 
    year: "Jan-Feb 2025", 
    size: "175 KB", 
    link: "/pdfs/DG 21 batch answer.pdf" // EXACT match to your uploaded file
  },
  // You can add more files here later as you upload them to the public/pdfs folder!
  { 
    id: 3, 
    subject: "BAMS 2nd Prof - All Papers (Batch 2022)", 
    year: "Dec2025-Jan2026", 
    size: "17.9 MB", 
    link: "/pdfs/batch-2022-all-papers.pdf" 
  },
  { 
    id: 4, 
    subject: "BAMS 2nd Prof - DG PAPER-1 ANSWERS (Batch 2022)", 
    year: "Dec2025-Jan2026", 
    size: "208 KB", 
    link: "/pdfs/DG 22 batch answer.pdf" // EXACT match to your uploaded file
  },
    { 
    id: 5, 
    subject: "BAMS 2nd Prof - Back Papers", 
    year: "July-Aug 2026", 
    size: "10.1 MB", 
    link: "/pdfs/batch2021and2022backpapers.pdf" // EXACT match to your uploaded file
  },
];

export default function PreviousPapers() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link 
          href="/bams-hub" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to BAMS Hub
        </Link>

        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <FileText className="w-12 h-12 text-amber-500 mb-6 relative z-10" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-sm relative z-10">
            Previous Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Papers</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl relative z-10">
            Download or read the official NCISM university examination papers. Use these to analyze high-yield topics and master the exam pattern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PREVIOUS_PAPERS.map((paper) => (
            <div key={paper.id} className="group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{paper.subject}</h3>
                  <div className="flex items-center gap-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {paper.year}</span>
                    <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5" /> {paper.size}</span>
                  </div>
                </div>
              </div>

              {/* DUAL BUTTON LAYOUT: Read & Download */}
              <div className="flex items-center gap-3 w-full xl:w-auto shrink-0 mt-2 xl:mt-0">
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 xl:flex-none bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 font-bold py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" /> Read
                </a>
                <a 
                  href={paper.link}
                  download
                  className="flex-1 xl:flex-none bg-foreground/5 hover:bg-amber-500 text-foreground hover:text-white border border-surfaceBorder hover:border-amber-500 font-bold py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Download className="w-4 h-4" /> Save
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
