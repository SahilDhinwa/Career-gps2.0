"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Stethoscope,
  Filter,
  RotateCcw,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  Activity,
  IndianRupee,
  HelpCircle,
  ClipboardCheck,
  Layers,
  Flame,
  Eye,
} from "lucide-react";
import {
  SYSTEM_CLUSTERS,
  SYMPTOM_FILTERS,
  DISEASE_DATABASE,
  SystemClusterId,
  DiseaseProfile,
} from "../../data/diagnosisDatabase";

export default function ClinicalDiagnosisHubPage() {
  const [selectedCluster, setSelectedCluster] = useState<SystemClusterId>("all");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [strictFunnelMode, setStrictFunnelMode] = useState<boolean>(true);

  // Toggle a symptom/upashaya filter pill
  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset all filters
  const resetFunnel = () => {
    setSelectedFilters([]);
  };

  // Switch system cluster and clear incompatible filters
  const handleClusterChange = (clusterId: SystemClusterId) => {
    setSelectedCluster(clusterId);
    setSelectedFilters([]);
  };

  // Visible filters for the active system cluster
  const visibleFilters = useMemo(() => {
    return SYMPTOM_FILTERS.filter(
      (f) =>
        selectedCluster === "all" ||
        f.cluster === selectedCluster ||
        f.cluster === "all"
    );
  }, [selectedCluster]);

  // Core Shrinking Differential Diagnosis Engine
  const { matchingDiseases, totalInCluster } = useMemo(() => {
    const clusterPool =
      selectedCluster === "all"
        ? DISEASE_DATABASE
        : DISEASE_DATABASE.filter((d) => d.cluster === selectedCluster);

    if (selectedFilters.length === 0) {
      return {
        matchingDiseases: clusterPool.map((d) => ({
          disease: d,
          matchCount: 0,
          matchPercent: 100,
        })),
        totalInCluster: clusterPool.length,
      };
    }

    const scored = clusterPool
      .map((disease) => {
        const matched = selectedFilters.filter((fid) =>
          disease.matchingFilterIds.includes(fid)
        );
        const matchCount = matched.length;
        const matchPercent = Math.round(
          (matchCount / selectedFilters.length) * 100
        );
        return { disease, matchCount, matchPercent };
      })
      .filter((item) => {
        if (strictFunnelMode) {
          // Strict Shrinking Funnel: Disease must match EVERY selected filter
          return item.matchCount === selectedFilters.length;
        }
        // Smart Ranking Mode: Show any disease matching at least 1 selected filter
        return item.matchCount > 0;
      })
      .sort((a, b) => b.matchCount - a.matchCount);

    return {
      matchingDiseases: scored,
      totalInCluster: clusterPool.length,
    };
  }, [selectedCluster, selectedFilters, strictFunnelMode]);

  // Share / Copy Clinical Triage Summary to WhatsApp or Clipboard
  const handleShareSummary = (d: DiseaseProfile) => {
    const summary = `*ATREYA Med Clinical Triage Summary*\n• *Provisional Vyadhi:* ${d.sanskritName} (${d.modernCorrelate})\n• *Pratyatma Lakshana:* ${d.pratyatmaLakshana}\n• *Only Test Needed:* ${d.essentialTests.map((t) => `${t.name} (${t.estCost})`).join(", ")}\n• *Unnecessary Tests Avoided:* ${d.avoidedTests.map((t) => `${t.name} [Saves ${t.estSaved}]`).join(", ")}\n• *First-Line Chikitsa:* ${d.firstLineChikitsa}`;
    const url = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      {/* =================================================================
          TOP COMMAND BAR
          ================================================================= */}
      <header className="sticky top-14 z-30 bg-surface/90 backdrop-blur-md border-b border-surfaceBorder px-[clamp(1rem,4vw,2rem)] py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span className="text-foreground/30">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Stethoscope className="w-3.5 h-3.5" /> ATREYA Bedside Differential Diagnosis Engine
            </span>
          </div>

          {/* Funnel Mode Switcher */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStrictFunnelMode((v) => !v)}
              className="px-3 py-1.5 rounded-xl bg-background border border-surfaceBorder text-xs font-bold text-foreground/80 hover:border-primary/50 cursor-pointer transition-all"
            >
              Mode:{" "}
              <span className="text-primary">
                {strictFunnelMode
                  ? "Strict Shrinking Funnel"
                  : "Probability Ranking"}
              </span>
            </button>
            {selectedFilters.length > 0 && (
              <button
                type="button"
                onClick={resetFunnel}
                className="px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold inline-flex items-center gap-1 cursor-pointer hover:bg-rose-500/20"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset ({selectedFilters.length})
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)] pt-[clamp(1.5rem,4vw,2.5rem)] space-y-8">
        {/* =================================================================
            1. HERO & LIVE SHRINKING FUNNEL TELEMETRY BAR
            ================================================================= */}
        <section className="bg-surface border border-surfaceBorder rounded-3xl p-[clamp(1.25rem,3vw,2.25rem)] shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Doctor &amp; Patient Decision Support
              </span>
              <h1 className="font-sans text-[clamp(1.65rem,3.5vw,2.6rem)] font-extrabold text-foreground tracking-tight leading-tight mb-2">
                Clinical Differential Diagnosis &amp;{" "}
                <span className="text-primary">Cost-Saver Triage Hub</span>
              </h1>
              <p className="text-[clamp(0.85rem,1.8vw,1rem)] text-foreground/75 leading-relaxed">
                Select a system and tap the patient&apos;s symptoms, relieving factors (<em>Upashaya</em>), and bedside signs below. Watch the candidate diseases shrink down to the exact diagnosis—eliminating unnecessary lab tests.
              </p>
            </div>

            {/* LIVE SHRINKING FUNNEL COUNTER WIDGET */}
            <div className="shrink-0 bg-background border-2 border-primary/40 rounded-2xl p-5 flex items-center gap-5 shadow-md">
              <div className="text-center">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-foreground/55 block">
                  Initial Pool
                </span>
                <span className="text-2xl sm:text-3xl font-black text-foreground/40 line-through">
                  {totalInCluster}
                </span>
              </div>

              <div className="text-primary font-black text-xl">→</div>

              <div className="text-center">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary block">
                  Remaining Matches
                </span>
                <span className="text-3xl sm:text-5xl font-black text-primary">
                  {matchingDiseases.length}
                </span>
              </div>

              <div className="pl-4 border-l border-surfaceBorder">
                <span className="text-[11px] font-extrabold uppercase tracking-wider block text-emerald-600 dark:text-emerald-400">
                  {matchingDiseases.length === 1
                    ? "🎯 Final Diagnosis Locked!"
                    : matchingDiseases.length <= 3 && matchingDiseases.length > 1
                    ? "⚡ Almost There! Check Knockout Clue"
                    : "Tap Filters to Narrow Down"}
                </span>
                <span className="text-xs text-foreground/60">
                  {selectedFilters.length} clinical filter(s) active
                </span>
              </div>
            </div>
          </div>

          {/* STEP 1: SYSTEM CLUSTER TABS */}
          <div className="mt-6 pt-6 border-t border-surfaceBorder">
            <p className="text-xs font-extrabold uppercase tracking-wider text-foreground/60 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-primary" /> Step 1: Select Primary Organ System (Srotas)
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {SYSTEM_CLUSTERS.map((cluster) => {
                const active = selectedCluster === cluster.id;
                return (
                  <button
                    key={cluster.id}
                    type="button"
                    onClick={() => handleClusterChange(cluster.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      active
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-background text-foreground border-surfaceBorder hover:border-primary/50"
                    }`}
                  >
                    <p className="font-extrabold text-xs sm:text-sm">
                      {cluster.name}
                    </p>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        active ? "text-white/85" : "text-foreground/60"
                      }`}
                    >
                      {cluster.hindi}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================
            2. STEP 2: INTERACTIVE SYMPTOM, UPASHAYA & PARIKSHA FILTERS
            ================================================================= */}
        <section className="bg-surface border border-surfaceBorder rounded-3xl p-[clamp(1.25rem,3vw,2rem)] shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                <span>
                  Step 2: Tap Patient Symptoms, Relieving Triggers (Upashaya) &amp; Bedside Signs
                </span>
              </h2>
              <p className="text-xs text-foreground/65">
                प्रत्येक लक्षण चुनने पर असंगत रोग स्वतः हट जाएंगे और अंतिम संभावित रोग सामने आ जाएगा।
              </p>
            </div>
          </div>

          {/* 3 Filter Groups: Cardinal Symptoms | Upashaya Triggers | Bedside Pariksha */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              {
                cat: "symptom" as const,
                title: "1. Cardinal Symptoms (प्रमुख लक्षण / रूप)",
                badgeColor: "text-primary",
              },
              {
                cat: "upashaya" as const,
                title: "2. Relieving / Worsening Triggers (उपशय-अनुपशय)",
                badgeColor: "text-amber-600 dark:text-amber-400",
              },
              {
                cat: "pariksha" as const,
                title: "3. 5-Sec Bedside Exam (अष्टविध / प्रत्यक्ष परीक्षा)",
                badgeColor: "text-emerald-600 dark:text-emerald-400",
              },
            ].map((group) => {
              const groupItems = visibleFilters.filter(
                (f) => f.category === group.cat
              );
              return (
                <div
                  key={group.cat}
                  className="bg-background/80 border border-surfaceBorder rounded-2xl p-4 space-y-2.5"
                >
                  <p className={`text-xs font-extrabold uppercase tracking-wider ${group.badgeColor}`}>
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {groupItems.map((filter) => {
                      const isChecked = selectedFilters.includes(filter.id);
                      return (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() => toggleFilter(filter.id)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-2 ${
                            isChecked
                              ? "bg-primary text-white border-primary shadow-sm"
                              : "bg-surface text-foreground/85 border-surfaceBorder hover:border-primary/40"
                          }`}
                        >
                          <div>
                            <p className="text-xs sm:text-sm font-bold leading-snug">
                              {filter.label}
                            </p>
                            <p
                              className={`text-[11px] mt-0.5 ${
                                isChecked ? "text-white/85" : "text-foreground/60"
                              }`}
                            >
                              {filter.hindi}
                            </p>
                          </div>
                          <span
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 text-xs font-black ${
                              isChecked
                                ? "bg-white text-primary border-white"
                                : "border-surfaceBorder"
                            }`}
                          >
                            {isChecked ? "✓" : "+"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =================================================================
            3. KNOCKOUT DIFFERENTIATOR ALERT (WHEN 2 OR 3 DISEASES REMAIN)
            ================================================================= */}
        {matchingDiseases.length >= 2 && matchingDiseases.length <= 3 && (
          <section className="bg-amber-500/10 border-2 border-amber-500/40 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300 block">
                  ⚡ Bedside Knockout Differentiator ({matchingDiseases.length} Candidates Remaining)
                </span>
                <p className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                  To separate{" "}
                  {matchingDiseases.map((m) => m.disease.sanskritName).join(" vs. ")},
                  check the <span className="underline">Knockout Bedside Clue</span> inside each card below—or tap one more trigger filter above!
                </p>
              </div>
            </div>
          </section>
        )}

        {/* =================================================================
            4. FILTERED DIFFERENTIAL DIAGNOSIS CARDS & COST-SAVER SHIELD
            ================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-lg sm:text-2xl font-extrabold text-foreground">
              {matchingDiseases.length === 1
                ? "🎯 Confirmed Clinical Match (अंतिम विनिश्चित निदान)"
                : `Filtered Candidate Diseases (${matchingDiseases.length} of ${totalInCluster})`}
            </h2>
          </div>

          {matchingDiseases.length === 0 ? (
            <div className="bg-surface border-2 border-dashed border-surfaceBorder rounded-3xl p-8 text-center space-y-4">
              <p className="text-base sm:text-lg font-extrabold text-foreground">
                No single disease matches all {selectedFilters.length} selected filters simultaneously.
              </p>
              <p className="text-xs sm:text-sm text-foreground/65 max-w-xl mx-auto">
                The patient may have a mixed condition (<em>Sannipataja / Vyadhi Sankara</em>). Switch to <strong>Probability Ranking Mode</strong> to see the closest partial matches, or clear one filter.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setStrictFunnelMode(false)}
                  className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold cursor-pointer"
                >
                  Switch to Probability Ranking Mode
                </button>
                <button
                  type="button"
                  onClick={resetFunnel}
                  className="px-5 py-2.5 rounded-xl bg-background border border-surfaceBorder text-xs sm:text-sm font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchingDiseases.map(({ disease, matchCount }) => {
                const isSingleWinner = matchingDiseases.length === 1;
                return (
                  <div
                    key={disease.id}
                    className={`bg-surface rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between transition-all shadow-md ${
                      isSingleWinner
                        ? "md:col-span-2 border-emerald-500 ring-4 ring-emerald-500/10"
                        : "border-surfaceBorder hover:border-primary/50"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Card Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-surfaceBorder pb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                              {disease.icdCode}
                            </span>
                            {selectedFilters.length > 0 && (
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase">
                                Matched {matchCount}/{selectedFilters.length} Filters
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                            {disease.sanskritName}
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-primary">
                            Modern Correlate: {disease.modernCorrelate}
                          </p>
                        </div>
                      </div>

                      {/* Pratyatma Lakshana & Knockout Clue */}
                      <div className="space-y-2.5 text-xs sm:text-sm">
                        <p className="text-foreground/85 leading-relaxed">
                          <strong className="text-foreground">
                            प्रत्यात्म लक्षण (Cardinal Sign):
                          </strong>{" "}
                          {disease.pratyatmaLakshana}
                        </p>
                        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground/90">
                          <strong className="text-amber-700 dark:text-amber-300 block text-xs uppercase tracking-wider mb-0.5">
                            🔍 Bedside Knockout Clue (विभेदक निदान बिंदु):
                          </strong>
                          {disease.knockoutClue}
                        </div>
                      </div>

                      {/* COST-SAVER INVESTIGATION SHIELD */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {/* Essential Targeted Test */}
                        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1 mb-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Only Test Needed (Cost-Effective)
                          </span>
                          {disease.essentialTests.map((t, i) => (
                            <div key={i} className="text-xs">
                              <p className="font-extrabold text-foreground">
                                {t.name}{" "}
                                <span className="text-emerald-600 dark:text-emerald-400">
                                  ({t.estCost})
                                </span>
                              </p>
                              <p className="text-foreground/70 text-[11px] mt-0.5">
                                {t.reason}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Unnecessary Tests Avoided */}
                        <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1 mb-1.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> Unnecessary Tests Avoided
                          </span>
                          {disease.avoidedTests.map((t, i) => (
                            <div key={i} className="text-xs">
                              <p className="font-extrabold text-foreground">
                                {t.name}{" "}
                                <span className="text-rose-600 dark:text-rose-400">
                                  (Saves {t.estSaved})
                                </span>
                              </p>
                              <p className="text-foreground/70 text-[11px] mt-0.5">
                                {t.whyUnnecessary}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* First-Line Classical Chikitsa & Share Footer */}
                    <div className="mt-5 pt-4 border-t border-surfaceBorder flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-xs">
                        <span className="font-extrabold text-primary uppercase tracking-wider block">
                          प्रथम पंक्ति चिकित्सा (First-Line Protocol):
                        </span>
                        <span className="text-foreground/80 font-medium">
                          {disease.firstLineChikitsa}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleShareSummary(disease)}
                        className="shrink-0 px-4 py-2.5 rounded-xl bg-primary hover:bg-primaryHover text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <ClipboardCheck className="w-4 h-4" />
                        <span>Share OPD Note</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
