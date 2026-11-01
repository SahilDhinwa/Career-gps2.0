"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowLeft,
  Filter,
  Search,
  X,
  ExternalLink,
  CheckCircle2,
  ShieldAlert,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  SYMPTOM_FILTERS,
  DISEASE_DATABASE,
  SystemClusterId,
  DiseaseProfile,
} from "../../data/diagnosisDatabase";

// Clean, high-legibility geometric sans-serif matching your reference screenshot
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SIMPLE_CLUSTERS: { id: SystemClusterId; label: string }[] = [
  { id: "all", label: "ALL AREAS" },
  { id: "joints", label: "JOINTS & NERVES (जोड़ एवं वात)" },
  { id: "gi", label: "STOMACH & ACIDITY (पेट एवं पाचन)" },
  { id: "fever", label: "FEVER / JWARA (बुखार)" },
];

export default function SimpleClinicalDiagnosisHub() {
  const [selectedCluster, setSelectedCluster] = useState<SystemClusterId>("all");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [strictMode, setStrictMode] = useState<boolean>(true);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAll = () => {
    setSelectedFilters([]);
    setSearchQuery("");
  };

  const handleClusterSelect = (id: SystemClusterId) => {
    setSelectedCluster(id);
    setSelectedFilters([]);
  };

  // Group filters into 2 simple horizontal rows based on the chosen body area
  const { symptomRow, reliefAndSignRow } = useMemo(() => {
    const relevant = SYMPTOM_FILTERS.filter(
      (f) =>
        selectedCluster === "all" ||
        f.cluster === selectedCluster ||
        f.cluster === "all"
    );
    return {
      symptomRow: relevant.filter((f) => f.category === "symptom"),
      reliefAndSignRow: relevant.filter(
        (f) => f.category === "upashaya" || f.category === "pariksha"
      ),
    };
  }, [selectedCluster]);

  // Filter diseases by Area + Selected Pill Buttons + Search Bar
  const filteredDiseases = useMemo(() => {
    return DISEASE_DATABASE.filter((disease) => {
      // 1. Body Area Check
      if (selectedCluster !== "all" && disease.cluster !== selectedCluster) {
        return false;
      }

      // 2. Search Query Check
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const textPool = `${disease.sanskritName} ${disease.hindiName} ${disease.modernCorrelate} ${disease.pratyatmaLakshana} ${disease.knockoutClue}`.toLowerCase();
        if (!textPool.includes(q)) return false;
      }

      // 3. Symptom Pill Filter Check
      if (selectedFilters.length === 0) return true;

      const matchCount = selectedFilters.filter((fid) =>
        disease.matchingFilterIds.includes(fid)
      ).length;

      return strictMode
        ? matchCount === selectedFilters.length
        : matchCount > 0;
    });
  }, [selectedCluster, selectedFilters, searchQuery, strictMode]);

  const handleShareWhatsApp = (d: DiseaseProfile) => {
    const text = `*ATREYA Clinical Note*\n• *Diagnosis:* ${d.sanskritName} (${d.modernCorrelate})\n• *Key Clue:* ${d.knockoutClue}\n• *Only Test Needed:* ${d.essentialTests.map((t) => `${t.name} (${t.estCost})`).join(", ")}\n• *First-Line Care:* ${d.firstLineChikitsa}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div
      className={`${jakarta.className} min-h-screen bg-[#FAF8F5] dark:bg-[#0B0F0E] text-[#111827] dark:text-[#F3F4F6] pb-24 transition-colors duration-300`}
    >
      {/* =================================================================
          SIMPLE TOP BAR
          ================================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {(selectedFilters.length > 0 || searchQuery.trim() !== "") && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 dark:text-violet-400 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset all filters
          </button>
        )}
      </div>

      {/* =================================================================
          1. CENTERED EDITORIAL HEADER (Matches Reference Screenshot)
          ================================================================= */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-800 dark:text-violet-300 mb-5">
          CHOOSE SYMPTOMS TO NARROW DOWN
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
          Symptom-by-symptom diagnosis or cost-saving test check.
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* =================================================================
            2. TWO-BUTTON MODE SWITCHER (Matches Top Buttons in Screenshot)
            ================================================================= */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <button
            type="button"
            onClick={() => setStrictMode(true)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              strictMode
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900"
                : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-400 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700"
            }`}
          >
            Strict Funnel (Matches All Selected)
          </button>

          <button
            type="button"
            onClick={() => setStrictMode(false)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              !strictMode
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900"
                : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-400 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700"
            }`}
          >
            Broad Match (Matches Any Symptom)
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Tap a body area and patient symptoms below. Each symptom you select shrinks the disease list so the patient avoids unnecessary lab tests.
        </p>

        {/* =================================================================
            3. SINGLE WHITE FILTER & SEARCH BOX (Matches Screenshot Box)
            ================================================================= */}
        <section className="bg-white dark:bg-[#141917] border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xs mb-8 space-y-5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <Filter className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>Filter by body area, main symptom, relief trigger, and keyword</span>
            </p>

            {selectedFilters.length > 0 && (
              <span className="text-xs font-bold text-violet-700 dark:text-violet-400">
                {selectedFilters.length} selected
              </span>
            )}
          </div>

          {/* ROW 1: BODY AREA PILLS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {SIMPLE_CLUSTERS.map((c) => {
              const active = selectedCluster === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleClusterSelect(c.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wide whitespace-nowrap border transition-all cursor-pointer ${
                    active
                      ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-2xs"
                      : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Tap the patient&apos;s symptoms below. Tap a purple button again to remove that filter.
          </p>

          {/* ROW 2: PATIENT SYMPTOM PILLS */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              1. Patient Symptoms (प्रमुख लक्षण):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedFilters([])}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all cursor-pointer ${
                  selectedFilters.length === 0
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700"
                }`}
              >
                ALL SYMPTOMS
              </button>

              {symptomRow.map((f) => {
                const active = selectedFilters.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => toggleFilter(f.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-left ${
                      active
                        ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-2xs"
                        : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {f.label} • <span className="opacity-85">{f.hindi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ROW 3: RELIEF TRIGGERS & BEDSIDE SIGNS */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              2. What Gives Relief &amp; Bedside Signs (उपशय एवं जीभ/जांच):
            </span>
            <div className="flex flex-wrap gap-2">
              {reliefAndSignRow.map((f) => {
                const active = selectedFilters.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => toggleFilter(f.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-left ${
                      active
                        ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-2xs"
                        : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {f.label} • <span className="opacity-85">{f.hindi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH INPUT INSIDE THE FILTER BOX */}
          <div className="pt-1">
            <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Search diseases, symptoms, or Hindi names
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search e.g. Amavata, Sciatica, Gout, Acidity, Malaria, डकार, घुटनों में दर्द..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#7C3AED]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* =================================================================
            4. RESULTS COUNT BAR (Matches "49 resources found" in Screenshot)
            ================================================================= */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            {filteredDiseases.length}{" "}
            {filteredDiseases.length === 1
              ? "final diagnosis match found"
              : "possible diseases found"}
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-6">
          <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 dark:text-white">
            Differential Diagnosis Candidates
          </h2>
          <span className="text-xs font-semibold text-neutral-500">
            {filteredDiseases.length} results
          </span>
        </div>

        {/* =================================================================
            5. CLEAN 2-COLUMN WHITE CARDS GRID (Matches Screenshot Cards)
            ================================================================= */}
        {filteredDiseases.length === 0 ? (
          <div className="bg-white dark:bg-[#141917] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 text-center space-y-3">
            <p className="text-base font-bold text-neutral-900 dark:text-white">
              No single disease matches all selected filters together.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
              Switch to &ldquo;Broad Match&rdquo; at the top to see partial matches, or remove one symptom pill.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStrictMode(false)}
                className="px-4 py-2 rounded-lg bg-[#7C3AED] text-white text-xs font-bold cursor-pointer"
              >
                Switch to Broad Match
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDiseases.map((disease) => {
              const isExpanded =
                expandedCardId === disease.id || filteredDiseases.length === 1;

              return (
                <article
                  key={disease.id}
                  className={`bg-white dark:bg-[#141917] border rounded-2xl p-6 flex flex-col justify-between transition-all shadow-2xs ${
                    filteredDiseases.length === 1
                      ? "md:col-span-2 border-[#7C3AED] ring-2 ring-[#7C3AED]/15"
                      : "border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-300"
                  }`}
                >
                  <div>
                    {/* Top Metadata Row (Matches "SCHOLARSHIPS | GLOBAL" in Screenshot) */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        ⚕️ {disease.hindiName}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                        {disease.icdCode}
                      </span>
                    </div>

                    {/* Bold Title & Modern Name */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white mb-1 leading-snug">
                      {disease.sanskritName}
                    </h3>
                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-3">
                      {disease.modernCorrelate}
                    </p>

                    {/* Clean Description Paragraph */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {disease.pratyatmaLakshana}
                    </p>

                    {/* Highlighted Italic Note (Matches the Purple Italic Text in Screenshot!) */}
                    <p className="text-xs sm:text-sm italic text-[#6D28D9] dark:text-violet-400 leading-relaxed mb-5">
                      Bedside Confirming Clue: {disease.knockoutClue}
                    </p>

                    {/* Expandable Cost-Saver Lab Tests & First-Line Treatment */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3 mb-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1 mb-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Only Test Needed
                            </span>
                            {disease.essentialTests.map((t, i) => (
                              <div key={i} className="text-xs">
                                <p className="font-bold text-neutral-900 dark:text-white">
                                  {t.name} ({t.estCost})
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 text-[11px] mt-0.5">
                                  {t.reason}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center gap-1 mb-1">
                              <ShieldAlert className="w-3.5 h-3.5" /> Tests You Can Skip
                            </span>
                            {disease.avoidedTests.map((t, i) => (
                              <div key={i} className="text-xs">
                                <p className="font-bold text-neutral-900 dark:text-white">
                                  {t.name} (Saves {t.estSaved})
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 text-[11px] mt-0.5">
                                  {t.whyUnnecessary}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-xs">
                          <strong className="block text-neutral-900 dark:text-white uppercase tracking-wider mb-1">
                            First-Line Ayurvedic Protocol (चिकित्सा सूत्र):
                          </strong>
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {disease.firstLineChikitsa}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Bar (Matches "EXTERNAL SOURCE | Visit Resource ↗" in Screenshot) */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCardId(isExpanded ? null : disease.id)
                      }
                      className="px-3.5 py-1.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[10px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer hover:opacity-90"
                    >
                      <span>
                        {isExpanded
                          ? "HIDE TESTS & CARE"
                          : `ONLY TEST: ${disease.essentialTests[0]?.estCost}`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareWhatsApp(disease)}
                      className="text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:text-[#7C3AED] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Share OPD Note</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
