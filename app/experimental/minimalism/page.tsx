"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Minus, BookOpen, Eye, Clock, 
  Check, Sparkles, Volume2, SlidersHorizontal 
} from "lucide-react";

export default function MinimalismPage() {
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");
  const [showWordBreakdown, setShowWordBreakdown] = useState(true);
  const [completedSutras, setCompletedSutras] = useState<number[]>([1]);

  const toggleSutra = (id: number) => {
    setCompletedSutras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const sutras = [
    {
      id: 1,
      chapter: "Sutrasthana • Chapter 1 • Verse 2",
      sanskrit: "आयुःकामयमानेन धर्मार्थसुखसाधनम् । आयुर्वेदोपदेशेषु विधेयः परमादरः ॥",
      transliteration: "Āyuḥ-kāmayamānena dharmārtha-sukha-sādhanam | Āyurvedopadeśeṣu vidheyaḥ paramādaraḥ ||",
      clinicalMeaning: "One who desires a long, healthy life—which is the primary instrument for achieving Dharma (duty), Artha (wealth), and Sukha (happiness)—must pay the highest respect to the teachings of Ayurveda.",
      keywords: [
        { term: "आयुः (Āyuḥ)", meaning: "Healthy longevity" },
        { term: "साधनम् (Sādhanam)", meaning: "The foundational instrument" },
        { term: "परमादरः (Paramādaraḥ)", meaning: "Supreme clinical dedication" },
      ],
    },
    {
      id: 2,
      chapter: "Sutrasthana • Chapter 1 • Verse 6",
      sanskrit: "वायुः पित्तं कफश्चेति त्रयो दोषाः समासतः । विकृताविकृता देहं घ्नन्ति ते वर्तयन्ति च ॥",
      transliteration: "Vāyuḥ pittaṃ kaphaśceti trayo doṣāḥ samāsataḥ | Vikṛtāvikṛtā dehaṃ ghnanti te vartayanti ca ||",
      clinicalMeaning: "In brief, Vata, Pitta, and Kapha are the three Doshas. When imbalanced (Vikrita), they destroy the body; when balanced (Avikrita), they sustain and nourish life.",
      keywords: [
        { term: "त्रयो दोषाः (Trayo Doṣāḥ)", meaning: "Vata, Pitta, Kapha" },
        { term: "विकृता (Vikṛtā)", meaning: "Pathological state" },
        { term: "अविकृता (Avikṛtā)", meaning: "Homeostatic balance" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans pt-6 pb-32 px-4 sm:px-8 selection:bg-neutral-900 selection:text-white">
      
      {/* Top Minimalist Bar */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-neutral-200">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-950 transition-colors text-xs font-mono uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Directory / 01
        </Link>

        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.15em] text-neutral-400">
          <span>Style #01 • Swiss Minimalism</span>
          <span className="text-neutral-900 font-bold">
            {completedSutras.length}/{sutras.length} Memorized
          </span>
        </div>
      </div>

      {/* Editorial Minimal Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-4">
          01 — Distraction-Free Study Mode
        </p>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-neutral-950 leading-[1.1] mb-6">
          Less Visual Noise. <br />
          <span className="font-semibold">Deeper Clinical Focus.</span>
        </h1>
        <p className="text-neutral-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
          When you are memorizing 500+ Sanskrit Shlokas or preparing for AIAPGET at 2:00 AM, flashy gradients cause eye fatigue. Minimalism removes every unnecessary border and shadow so only the knowledge remains.
        </p>
      </div>

      {/* Interactive Reader Controls */}
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-white border border-neutral-200 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Typography Scale:</span>
          <div className="inline-flex border border-neutral-200">
            {(["sm", "md", "lg"] as const).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase transition-colors ${
                  fontSize === size ? "bg-neutral-950 text-white" : "bg-white text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowWordBreakdown(!showWordBreakdown)}
          className="text-xs font-mono uppercase tracking-widest px-4 py-2 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
        >
          {showWordBreakdown ? "Hide Padaccheda" : "Show Padaccheda"}
        </button>
      </div>

      {/* Minimalist Sutra Cards */}
      <div className="max-w-4xl mx-auto space-y-12">
        {sutras.map((sutra) => {
          const isDone = completedSutras.includes(sutra.id);
          return (
            <article 
              key={sutra.id} 
              className="bg-white border border-neutral-200 p-8 sm:p-12 transition-colors hover:border-neutral-400"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-100">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                  {sutra.chapter}
                </span>

                <button
                  onClick={() => toggleSutra(sutra.id)}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
                    isDone 
                      ? "bg-neutral-950 text-white border-neutral-950" 
                      : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-950"
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isDone ? "Mastered" : "Mark Memorized"}</span>
                </button>
              </div>

              {/* Sanskrit Shloka */}
              <p className={`font-serif text-neutral-950 leading-relaxed mb-4 ${
                fontSize === "sm" ? "text-xl sm:text-2xl" : fontSize === "md" ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
              }`}>
                {sutra.sanskrit}
              </p>

              {/* IAST Transliteration */}
              <p className="text-xs sm:text-sm font-mono text-neutral-400 mb-8 italic">
                {sutra.transliteration}
              </p>

              {/* Clinical Translation */}
              <div className="border-l-2 border-neutral-900 pl-6 py-1 mb-8">
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Clinical Interpretation
                </p>
                <p className={`text-neutral-700 leading-relaxed ${
                  fontSize === "sm" ? "text-sm" : fontSize === "md" ? "text-base" : "text-lg"
                }`}>
                  {sutra.clinicalMeaning}
                </p>
              </div>

              {/* Word-by-Word Breakdown */}
              {showWordBreakdown && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
                  {sutra.keywords.map((kw, idx) => (
                    <div key={idx} className="p-4 bg-[#FAFAFA] border border-neutral-100">
                      <p className="text-sm font-bold text-neutral-900 mb-1">{kw.term}</p>
                      <p className="text-xs text-neutral-500">{kw.meaning}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Design Takeaway Footer */}
      <div className="max-w-4xl mx-auto mt-16 p-8 border border-neutral-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Why Students Love This</p>
          <p className="text-sm text-neutral-600">
            Zero clutter, instant page loads on slow mobile networks, and razor-sharp contrast for long study sessions.
          </p>
        </div>
        <Link 
          href="/experimental" 
          className="shrink-0 px-6 py-3 bg-neutral-950 text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors"
        >
          Compare Next Style
        </Link>
      </div>

    </div>
  );
}
