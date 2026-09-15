"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText, BookOpen, Calendar, HardDrive } from "lucide-react";

// The PDF Database (Update these links to match your actual file names in the public/pdfs folder)
const PREVIOUS_PAPERS = [
  { id: 1, subject: "Charaka Samhita (Purvardha)", year: "2025", size: "2.4 MB", link: "/pdfs/charaka-2025.pdf" },
  { id: 2, subject: "Dravyaguna Vigyan - Paper 1", year: "2024", size: "3.1 MB", link: "/pdfs/dravyaguna-1-2024.pdf" },
  { id: 3, subject: "Dravyaguna Vigyan - Paper 2", year: "2024", size: "2.8 MB", link: "/pdfs/dravyaguna-2-2024.pdf" },
  { id: 4, subject: "Roga Nidana & Vikriti Vigyan", year: "2023", size: "4.5 MB", link: "/pdfs/roga-nidana-2023.pdf" },
  { id: 5, subject: "Rasa Shastra & Bhaishajya Kalpana", year: "2023", size: "5.2 MB", link: "/pdfs/rasa-shastra-2023.pdf" },
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
            Download the official NCISM university examination papers. Use these to analyze high-yield topics and master the exam pattern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PREVIOUS_PAPERS.map((paper) => (
            <div key={paper.id} className="group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300">
              
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

              <a 
                href={paper.link}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-foreground/5 hover:bg-amber-500 text-foreground hover:text-white border border-surfaceBorder hover:border-amber-500 font-bold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 shrink-0"
              >
                <Download className="w-4 h-4" /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
