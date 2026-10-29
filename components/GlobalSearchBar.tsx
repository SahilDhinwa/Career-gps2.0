"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Sparkles, X } from "lucide-react";

// ============================================================================
// MASTER SEARCH DATABASE
// Add all future BAMS chapters, Samhita notes, and Global modules right here!
// ============================================================================
export const SEARCH_INDEX = [
  {
    title: "Experimental UI Designs Lab (नए UI डिज़ाइन)",
    category: "Student Beta Testing",
    keywords: "experimental ui design test beta layout feedback",
    href: "/experimental",
  },
  {
    title: "Swasthavritta Chapter 1: Swastha & Swasthya (स्वस्थ एवं स्वास्थ्य)",
    category: "BAMS 2nd Prof • Handwritten Notes",
    keywords: "swasthavritta chapter 1 swastha lakshana arogya dhatusamya notes hindi",
    href: "/short-notes/swasth-vritta/paper-1/chapter-1",
  },
  {
    title: "Swasthavritta Chapter 10: Naturopathy (प्राकृतिक चिकित्सा)",
    category: "BAMS 2nd Prof • Handwritten Notes",
    keywords: "naturopathy prakritik chikitsa chapter 10 panchabhutaopasana",
    href: "/short-notes/swasth-vritta/paper-1/chapter-10-naturopathy/part-1",
  },
  {
    title: "Dinacharya: 24-Hour Body Clock & Daily Routine",
    category: "Ayurveda Global • Interactive Guide",
    keywords: "dinacharya daily routine brahma muhurta oil pulling abhyanga nasya",
    href: "/atreya/daily-regimen",
  },
  {
    title: "Prakriti & Agni Body-Type Diagnostic Quiz",
    category: "Ayurveda Global • Pillar 02",
    keywords: "prakriti dosha quiz vata pitta kapha agni body type",
    href: "/atreya/diagnostics",
  },
  {
    title: "Beyond the Spa: Clinical Science Vault",
    category: "Ayurveda Global • Pillar 01",
    keywords: "shirodhara abhyanga nasya neuroscience research paper",
    href: "/atreya/science-vault",
  },
  {
    title: "The Gut-Brain Axis & Herb Absorption Lab",
    category: "Ayurveda Global • Pillar 03",
    keywords: "ashwagandha brahmi turmeric triphala gut brain grahani ama",
    href: "/atreya/gut-brain-pharmacology",
  },
  {
    title: "BAMS Scholar Hub (1st, 2nd & 3rd Prof Syllabus)",
    category: "NCISM Curriculum (India)",
    keywords: "bams scholar hub india syllabus charaka samhita mcqs",
    href: "/bams-scholar",
  },
  {
    title: "3D Dravyaguna Botanical Dissection Studio",
    category: "Clinical Studio",
    keywords: "dravyaguna 3d plants herbs botanical studio aragwadha",
    href: "/dravyaguna",
  },
  {
    title: "Ayurveda Global Command Center (All 5 Pillars)",
    category: "International Portal",
    keywords: "atreya global command center 5 pillars ashtanga",
    href: "/atreya",
  },
];

const QUICK_SUGGESTIONS = [
  { label: "🧪 Experimental UI", href: "/experimental" },
  { label: "📒 Swasthavritta Ch. 1", href: "/short-notes/swasth-vritta/paper-1/chapter-1" },
  { label: "☀️ 24-Hr Body Clock", href: "/atreya/daily-regimen" },
  { label: "🧬 Body-Type Quiz", href: "/atreya/diagnostics" },
];

export default function GlobalSearchBar() {
  const [query, setQuery] = useState("");

  const filteredResults =
    query.trim().length > 0
      ? SEARCH_INDEX.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.keywords.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-30 text-left">
      {/* Main Search Input Box */}
      <div className="relative flex items-center bg-surface/95 backdrop-blur-md border-2 border-surfaceBorder focus-within:border-primary rounded-2xl shadow-md px-4 py-3 sm:py-3.5 transition-all">
        <Search className="w-5 h-5 text-primary shrink-0 mr-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search BAMS chapters, Dinacharya, Prakriti Quiz, or Experimental UI..."
          className="w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-foreground/45 focus:outline-none font-medium"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="p-1 rounded-lg text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Access Pills Underneath Search Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-primary" /> Quick Jump:
        </span>
        {QUICK_SUGGESTIONS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-xs font-bold px-3 py-1 rounded-full bg-surface/80 border border-surfaceBorder hover:border-primary text-foreground/80 hover:text-primary transition-all shadow-2xs"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Live Dropdown Results */}
      {query.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-14 mt-1 bg-surface border-2 border-primary/40 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-surfaceBorder max-h-80 overflow-y-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-primary/10 transition-colors"
              >
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-0.5">
                    {item.category}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 ml-3" />
              </Link>
            ))
          ) : (
            <div className="px-5 py-4 text-center text-xs sm:text-sm text-foreground/60">
              No matching topics found for &ldquo;{query}&rdquo;. Try searching{" "}
              <strong>Swasthavritta</strong>, <strong>Dinacharya</strong>, or{" "}
              <strong>Experimental</strong>.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
