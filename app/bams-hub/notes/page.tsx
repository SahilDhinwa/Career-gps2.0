"use client";

import Link from "next/link";
import { ArrowLeft, FileText, BookOpen, Download, Bookmark, Sparkles } from "lucide-react";

// THE NOTES DATABASE
const HIGH_YIELD_NOTES = [
  { 
    id: 1, 
    subject: "Dravyaguna Vigyan", 
    topic: "Pharmacology", 
    type: "Quick Revision",
    link: "/notepdfs/pharmacologyrevision" // Replace with actual PDF link like "/pdfs/dg-notes.pdf"
  },
  { 
    id: 2, 
    subject: "Rasa Shastra", 
    topic: "Maharasa & Uparasa Classification", 
    type: "Cheat Sheet",
    link: "#" 
  },
  { 
    id: 3, 
    subject: "Roga Nidana", 
    topic: "Shatkriyakala & Nidan Panchak", 
    type: "Concept Map",
    link: "#" 
  },
];

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
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
            High-Yield <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Revision Notes</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl relative z-10">
            Streamlined, highly organized study materials designed for rapid revision before university examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGH_YIELD_NOTES.map((note) => (
            <div key={note.id} className="group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 flex flex-col hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              
              {/* Decorative Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Bookmark className="w-5 h-5 text-amber-500" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-foreground/5 border border-surfaceBorder rounded-sm text-[10px] font-bold text-foreground/60 uppercase tracking-widest">
                   {note.type}
                </span>
              </div>

              <h3 className="font-bold text-foreground text-xl mb-2">{note.subject}</h3>
              <p className="text-foreground/60 font-medium text-sm mb-6 flex-grow">
                {note.topic}
              </p>

              {/* DUAL BUTTON LAYOUT: Read & Download */}
              <div className="flex items-center gap-3 w-full mt-auto pt-4 border-t border-surfaceBorder/50">
                <a 
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 font-bold py-2 px-3 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 text-sm"
                >
                  <BookOpen className="w-4 h-4" /> Read
                </a>
                <a 
                  href={note.link}
                  download
                  className="flex-1 bg-foreground/5 hover:bg-amber-500 text-foreground hover:text-white border border-surfaceBorder hover:border-amber-500 font-bold py-2 px-3 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 text-sm"
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

