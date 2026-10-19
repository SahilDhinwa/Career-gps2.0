"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sun, Moon, Quote, ArrowUpRight } from "lucide-react";

export default function EditorialDesignPage() {
  const [inkMode, setInkMode] = useState<"paper" | "midnight">("paper");

  const isPaper = inkMode === "paper";

  return (
    <div 
      className={`min-h-screen transition-colors duration-500 pt-6 pb-32 px-4 sm:px-8 ${
        isPaper ? "bg-[#F7F3EB] text-[#161514]" : "bg-[#11100F] text-[#EDE8DF]"
      }`}
    >
      {/* Top Masthead Controls */}
      <div className={`max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b ${
        isPaper ? "border-[#161514]" : "border-[#EDE8DF]/30"
      }`}>
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Design Lab
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-xs font-serif italic opacity-75">
            Style #15 • Print Editorial Typography
          </span>
          <button
            onClick={() => setInkMode(isPaper ? "midnight" : "paper")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider border ${
              isPaper 
                ? "border-[#161514] bg-[#161514] text-[#F7F3EB]" 
                : "border-[#D4AF37] bg-[#D4AF37] text-black"
            }`}
          >
            {isPaper ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            <span>{isPaper ? "Midnight Edition" : "Classic Paper"}</span>
          </button>
        </div>
      </div>

      {/* Newspaper / Journal Masthead */}
      <header className="max-w-6xl mx-auto text-center mb-12">
        <div className={`flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] py-2 border-y mb-8 ${
          isPaper ? "border-[#161514]/30 text-[#57524C]" : "border-white/20 text-white/60"
        }`}>
          <span>VOL. I — ISSUE NO. 15</span>
          <span>JHUNJHUNU • KOTA • GLOBAL</span>
          <span>THE VEBLEN GOOD QUARTERLY</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-8xl font-normal tracking-tight leading-[0.95] mb-6">
          Design Is Thinking <br />
          <span className="italic font-light">Made Visual.</span>
        </h1>

        <p className={`max-w-2xl mx-auto font-serif text-lg sm:text-xl italic leading-relaxed ${
          isPaper ? "text-[#4A453E]" : "text-white/70"
        }`}>
          How high-contrast serif typography, magazine column rules, and deliberate pacing transform student essays and clinical research into world-class publications.
        </p>
      </header>

      {/* Multi-Column Editorial Spread */}
      <main className={`max-w-6xl mx-auto border-t-2 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 ${
        isPaper ? "border-[#161514]" : "border-[#D4AF37]"
      }`}>
        
        {/* Left Column: Feature Essay with Drop Cap (7 cols) */}
        <div className={`lg:col-span-7 lg:pr-8 lg:border-r ${
          isPaper ? "border-[#161514]/20" : "border-white/15"
        }`}>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block mb-3">
            FEATURE ESSAY // RURAL TO GLOBAL
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl leading-tight mb-6">
            Why Tier-2 &amp; Tier-3 Scholars Deserve Prestige Architecture
          </h2>

          <p className="font-serif text-base sm:text-lg leading-[1.85] mb-6">
            <span className="float-left font-serif text-6xl sm:text-7xl leading-[0.8] pr-4 pt-1 font-bold text-[#D4AF37]">
              F
            </span>
            or decades, educational websites built for medical and competitive exam students in India looked like cluttered government noticeboards—blinking red banners, low-resolution PDFs, and chaotic tables. Yet the ambition inside a hostel room in Rajasthan is no less profound than that of a scholar in Oxford or Boston.
          </p>

          <p className="font-serif text-base sm:text-lg leading-[1.85] mb-8">
            Editorial design changes the psychological posture of the reader. When a BAMS scholar reads clinical monographs or communication frameworks formatted with the typographic dignity of <em>The Lancet</em> or <em>The New Yorker</em>, it signals that their craft belongs on the global stage.
          </p>

          {/* Editorial Pull Quote */}
          <blockquote className={`my-10 p-8 border-y-2 relative ${
            isPaper ? "border-[#161514] bg-[#EFE9DC]" : "border-[#D4AF37]/50 bg-white/[0.03]"
          }`}>
            <Quote className="w-8 h-8 text-[#D4AF37] mb-3 opacity-60" />
            <p className="font-serif text-2xl sm:text-3xl italic leading-snug mb-4">
              &ldquo;Confidence is not born from loud colors; it is forged when deep clinical mastery meets unshakeable verbal clarity.&rdquo;
            </p>
            <footer className="text-xs font-mono uppercase tracking-[0.2em] opacity-70">
              — Sahil Dhinwa, Founder &amp; Architect of Veblen Good
            </footer>
          </blockquote>
        </div>

        {/* Right Column: Curated Clinical & Cultural Index (5 cols) */}
        <aside className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <div className="flex items-center justify-between border-b pb-2 mb-6 border-current/20">
              <span className="text-xs font-mono uppercase tracking-[0.2em]">In This Issue</span>
              <span className="font-serif italic text-sm">Curated Index</span>
            </div>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "The Anatomy of First Impressions in Clinical Vivas",
                  meta: "Communication • 6 Min Read",
                  summary: "How structured opening statements eliminate hesitation during practical examinations.",
                },
                {
                  num: "02",
                  title: "Integrating Classical Samhitas with Modern Evidence",
                  meta: "Ayurveda Research • 8 Min Read",
                  summary: "Presenting Prakriti and Agni concepts to international medical boards with scientific precision.",
                },
                {
                  num: "03",
                  title: "Typography as a Memory Aid",
                  meta: "Design Psychology • 4 Min Read",
                  summary: "Why serif headlines and generous margins improve long-form reading comprehension by 28%.",
                },
              ].map((article) => (
                <div key={article.num} className="pb-6 border-b border-current/15 group cursor-pointer">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-mono text-[#D4AF37]">{article.meta}</span>
                    <span className="font-serif text-2xl italic opacity-40 group-hover:opacity-100 transition-opacity">
                      {article.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-sm opacity-75 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Box Callout */}
          <div className={`p-6 border ${
            isPaper ? "border-[#161514] bg-white" : "border-white/20 bg-white/5"
          }`}>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              Where to Use This Style
            </p>
            <p className="font-serif text-base mb-4">
              Ideal for your <strong>About Us Origin Story</strong>, long-form <strong>BAMS Case Study Articles</strong>, and <strong>Scholarship Guides</strong>.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-bold border-b border-current pb-1"
            >
              <span>View Origin Story Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>

      </main>
    </div>
  );
}
