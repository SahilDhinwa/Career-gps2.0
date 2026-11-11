"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
  RotateCcw,
  Search,
  ShieldAlert,
  X,
} from "lucide-react";
import type { SystemClusterId } from "../../data/diagnosisDatabase";
import type { PublicDiseaseProfile } from "../../data/diagnosis/publicDatabase";
import {
  CLINICAL_SAFETY_ALERTS,
  CLINICAL_SAFETY_NOTICE,
} from "../../data/diagnosis/clinicalSafety";

type PublicFilter = {
  id: string;
  label: string;
  hindi: string;
  cluster: SystemClusterId;
  category: "symptom" | "upashaya" | "pariksha";
};

type PublicReference = {
  id: string;
  sourceTitle: string;
  sourceUrl: string;
  locator: string;
  finding: string;
  safetyNote: string;
  status: string;
  tradition: "classical_ayurveda" | "modern_clinical";
};

interface DiagnosisHubClientProps {
  diseases: PublicDiseaseProfile[];
  filters: PublicFilter[];
  references?: Record<string, PublicReference[]>;
}

const SIMPLE_CLUSTERS: { id: SystemClusterId; label: string }[] = [
  { id: "all", label: "ALL AREAS" },
  { id: "joints", label: "JOINTS & NERVES (जोड़ एवं वात)" },
  { id: "gi", label: "STOMACH & ACIDITY (पेट एवं पाचन)" },
  { id: "fever", label: "FEVER / JWARA (बुखार)" },
];

function safeHttpUrl(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

function PublicEvidencePanel({
  references,
}: {
  references: PublicReference[];
}) {
  if (references.length === 0) {
    return (
      <p className="rounded-lg border border-neutral-200 p-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
        No public source-linked findings are available for this entry.
        Clinical verification is still required.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {references.map((reference) => {
        const url = safeHttpUrl(reference.sourceUrl);
        return (
          <article
            key={reference.id}
            className="space-y-2 rounded-xl border border-neutral-200 p-3 dark:border-neutral-700"
          >
            <p className="text-xs font-bold text-neutral-900 dark:text-white">
              {reference.sourceTitle}
            </p>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              {reference.tradition === "classical_ayurveda"
                ? "Classical textual reference"
                : "Modern clinical reference"}
              {" · "}
              {reference.status.replace(/_/g, " ")}
            </p>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              {reference.locator}
            </p>
            <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
              {reference.finding}
            </p>
            <p className="rounded-lg bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-950 dark:bg-amber-950/20 dark:text-amber-300">
              {reference.safetyNote}
            </p>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 hover:underline dark:text-violet-400"
              >
                Read source <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </article>
        );
      })}
      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
        Source-linked findings are not clinician-approved diagnostic or
        treatment recommendations.
      </p>
    </div>
  );
}

export default function DiagnosisHubClient({
  diseases,
  filters,
  references = {},
}: DiagnosisHubClientProps) {
  const [selectedCluster, setSelectedCluster] =
    useState<SystemClusterId>("all");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [strictMode, setStrictMode] = useState(true);
  const [expandedEvidenceId, setExpandedEvidenceId] =
    useState<string | null>(null);

  const resetExpandedPanels = () => setExpandedEvidenceId(null);

  const toggleFilter = (id: string) => {
    setSelectedFilters((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
    resetExpandedPanels();
  };

  const clearAll = () => {
    setSelectedFilters([]);
    setSearchQuery("");
    resetExpandedPanels();
  };

  const resetEntireSearch = () => {
    setSelectedCluster("all");
    setSelectedFilters([]);
    setSearchQuery("");
    setStrictMode(true);
    resetExpandedPanels();
  };

  const handleClusterSelect = (id: SystemClusterId) => {
    setSelectedCluster(id);
    setSelectedFilters([]);
    resetExpandedPanels();
  };

  const { symptomRow, reliefAndSignRow } = useMemo(() => {
    const relevant = filters.filter(
      (filter) =>
        selectedCluster === "all" ||
        filter.cluster === selectedCluster ||
        filter.cluster === "all"
    );
    return {
      symptomRow: relevant.filter((filter) => filter.category === "symptom"),
      reliefAndSignRow: relevant.filter(
        (filter) =>
          filter.category === "upashaya" || filter.category === "pariksha"
      ),
    };
  }, [filters, selectedCluster]);

  const filteredDiseases = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return diseases.filter((disease) => {
      if (
        selectedCluster !== "all" &&
        disease.cluster !== selectedCluster
      ) {
        return false;
      }
      if (query) {
        const searchableText = [
          disease.sanskritName,
          disease.hindiName,
          disease.modernCorrelate,
          disease.pratyatmaLakshana,
          disease.knockoutClue,
        ]
          .join(" ")
          .toLowerCase();
        if (!searchableText.includes(query)) return false;
      }
      if (selectedFilters.length === 0) return true;
      const matchingCount = selectedFilters.filter((filterId) =>
        disease.matchingFilterIds.includes(filterId)
      ).length;
      return strictMode
        ? matchingCount === selectedFilters.length
        : matchingCount > 0;
    });
  }, [diseases, selectedCluster, selectedFilters, searchQuery, strictMode]);

  const handleShareWhatsApp = (disease: PublicDiseaseProfile) => {
    const message = [
      "*ATREYA Educational Clinical Reference*",
      "",
      `*Classical condition:* ${disease.sanskritName}`,
      `*Proposed modern correlation (unverified):* ${disease.modernCorrelate}`,
      "",
      `*Original description (unverified):* ${disease.pratyatmaLakshana}`,
      "",
      "*Clinical approval:* Not approved",
      "",
      "This is an educational reference, not a confirmed diagnosis.",
      "Classical Ayurvedic conditions are not automatically equivalent to modern diagnoses.",
      "Investigation, test-omission, and treatment claims are excluded.",
      "Clinical assessment and treatment decisions require qualified healthcare professionals. Emergency warning signs require immediate assessment.",
    ].join("\n");
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24 text-[#111827] transition-colors duration-300 dark:bg-[#0B0F0E] dark:text-[#F3F4F6]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pb-2 pt-6 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        {(selectedCluster !== "all" ||
          selectedFilters.length > 0 ||
          searchQuery.trim() !== "" ||
          !strictMode) && (
          <button
            type="button"
            onClick={resetEntireSearch}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 hover:underline dark:text-violet-400"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset all filters
          </button>
        )}
      </div>

      <header className="mx-auto max-w-3xl px-4 pb-8 pt-6 text-center sm:px-6">
        <span className="mb-5 inline-block rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-800 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-300">
          EDUCATIONAL CLINICAL REFERENCE
        </span>
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Ayurvedic Clinical Reference &amp; Differential Diagnosis Explorer.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
          Explore classical Ayurvedic conditions, symptom descriptions, and
          proposed modern clinical differentials. Results are educational and
          require independent clinical verification.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <section
          role="note"
          aria-label="Clinical safety information"
          className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400"
              aria-hidden="true"
            />
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-amber-950 dark:text-amber-200">
                Clinical Reference — Safety Notice
              </h2>
              <p className="text-xs leading-relaxed text-amber-950 dark:text-amber-200">
                {CLINICAL_SAFETY_NOTICE}
              </p>
              <details className="text-xs text-amber-950 dark:text-amber-200">
                <summary className="cursor-pointer font-bold">
                  View critical clinical warning signs
                </summary>
                <div className="mt-3 space-y-3">
                  {CLINICAL_SAFETY_ALERTS.map((alert) => (
                    <div key={alert.id}>
                      <p className="font-bold">
                        {alert.urgency === "emergency" ? "EMERGENCY" : "URGENT"}
                        {" — "}
                        {alert.title}
                      </p>
                      <p className="mt-1 leading-relaxed">{alert.description}</p>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </section>

        <div className="mb-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setStrictMode(true);
              resetExpandedPanels();
            }}
            aria-pressed={strictMode}
            className={`rounded-xl border px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              strictMode
                ? "border-neutral-900 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-300 bg-white text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            }`}
          >
            Strict Funnel (Matches All Selected)
          </button>
          <button
            type="button"
            onClick={() => {
              setStrictMode(false);
              resetExpandedPanels();
            }}
            aria-pressed={!strictMode}
            className={`rounded-xl border px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              !strictMode
                ? "border-neutral-900 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            }`}
          >
            Broad Match (Matches Any Symptom)
          </button>
        </div>
        <p className="mb-6 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
          Select a body area and symptoms to explore database matches. Strict
          and broad modes are matching rules, not validated clinical diagnostic
          algorithms.
        </p>

        <section className="mb-8 space-y-5 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs dark:border-neutral-800 dark:bg-[#141917] sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-xs font-bold text-neutral-800 dark:text-neutral-200 sm:text-sm">
              <Filter className="h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />
              <span>Filter by body area, main symptom, relief trigger, and keyword</span>
            </p>
            {selectedFilters.length > 0 && (
              <span className="shrink-0 text-xs font-bold text-violet-700 dark:text-violet-400">
                {selectedFilters.length} selected
              </span>
            )}
          </div>

          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-1">
            {SIMPLE_CLUSTERS.map((cluster) => {
              const active = selectedCluster === cluster.id;
              return (
                <button
                  key={cluster.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => handleClusterSelect(cluster.id)}
                  className={`whitespace-nowrap rounded-lg border px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                    active
                      ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-2xs"
                      : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  }`}
                >
                  {cluster.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            Select symptoms to narrow the reference database. Tap a selected
            filter again to remove it.
          </p>

          <div>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              1. Patient Symptoms (प्रमुख लक्षण):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedFilters([]);
                  resetExpandedPanels();
                }}
                aria-pressed={selectedFilters.length === 0}
                className={`rounded-lg border px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                  selectedFilters.length === 0
                    ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                    : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                }`}
              >
                ALL SYMPTOMS
              </button>
              {symptomRow.map((filter) => {
                const active = selectedFilters.includes(filter.id);
                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleFilter(filter.id)}
                    className={`rounded-lg border px-3.5 py-2 text-left text-xs font-semibold transition-all ${
                      active
                        ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-2xs"
                        : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    }`}
                  >
                    {filter.label} • <span className="opacity-85">{filter.hindi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              2. What Gives Relief &amp; Bedside Signs (उपशय एवं जीभ/जांच):
            </span>
            <div className="flex flex-wrap gap-2">
              {reliefAndSignRow.map((filter) => {
                const active = selectedFilters.includes(filter.id);
                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleFilter(filter.id)}
                    className={`rounded-lg border px-3.5 py-2 text-left text-xs font-semibold transition-all ${
                      active
                        ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-2xs"
                        : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    }`}
                  >
                    {filter.label} • <span className="opacity-85">{filter.hindi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-1">
            <label
              htmlFor="diagnosis-search"
              className="mb-2 block text-xs font-bold text-neutral-800 dark:text-neutral-200"
            >
              Search diseases, symptoms, or Hindi names
            </label>
            <div className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3.5 h-4 w-4 text-neutral-400"
                aria-hidden="true"
              />
              <input
                id="diagnosis-search"
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  resetExpandedPanels();
                }}
                placeholder="Search e.g. Amavata, Sciatica, Gout, Acidity, Malaria, डकार, घुटनों में दर्द..."
                className="w-full rounded-xl border border-neutral-300 bg-white py-2.5 pl-10 pr-9 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-[#7C3AED] focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    resetExpandedPanels();
                  }}
                  aria-label="Clear search"
                  className="absolute right-3 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        <div className="mb-4">
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 sm:text-sm">
            {filteredDiseases.length}{" "}
            {filteredDiseases.length === 1
              ? "database candidate matched — diagnosis not confirmed"
              : "database candidates matched — not confirmed diagnoses"}
          </p>
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800">
          <h2 className="text-base font-extrabold text-neutral-900 dark:text-white sm:text-lg">
            Differential Diagnosis Candidates
          </h2>
          <span className="text-xs font-semibold text-neutral-500">
            {filteredDiseases.length} results
          </span>
        </div>

        {filteredDiseases.length === 0 ? (
          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-[#141917]">
            <p className="text-base font-bold text-neutral-900 dark:text-white">
              No database candidate matches the current selection.
            </p>
            <p className="mx-auto max-w-md text-xs text-neutral-500 sm:text-sm">
              Try Broad Match or remove a filter. No match does not exclude any
              medical condition.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setStrictMode(false);
                  resetExpandedPanels();
                }}
                className="rounded-lg bg-[#7C3AED] px-4 py-2 text-xs font-bold text-white"
              >
                Switch to Broad Match
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="rounded-lg border border-neutral-300 px-4 py-2 text-xs font-bold dark:border-neutral-700"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredDiseases.map((disease) => {
              const isEvidenceExpanded = expandedEvidenceId === disease.id;
              const diseaseReferences = references[disease.id] ?? [];
              return (
                <article
                  key={disease.id}
                  className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-2xs transition-all dark:bg-[#141917] ${
                    filteredDiseases.length === 1
                      ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/15 md:col-span-2"
                      : "border-neutral-200/90 hover:border-neutral-300 dark:border-neutral-800"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        ⚕️ {disease.hindiName}
                      </span>
                      <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                        {disease.icdCode}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-extrabold leading-snug text-neutral-900 dark:text-white sm:text-xl">
                      {disease.sanskritName}
                    </h3>
                    <p className="mb-3 text-xs font-bold text-neutral-500 dark:text-neutral-400">
                      Proposed modern correlation (unverified):{" "}
                      {disease.modernCorrelate}
                    </p>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                        <ShieldAlert className="h-3 w-3" /> Clinical review required
                      </span>
                      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                        Evidence: not clinician-approved
                      </span>
                    </div>
                    <p className="mb-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-sm">
                      Original description (unverified):{" "}
                      {disease.pratyatmaLakshana}
                    </p>
                    <p className="mb-5 text-xs italic leading-relaxed text-[#6D28D9] dark:text-violet-400 sm:text-sm">
                      Legacy bedside clue (unverified): {disease.knockoutClue}
                    </p>
                    <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50/70 p-2.5 text-[11px] leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
                      <strong>Clinical verification required.</strong> This is an
                      educational database match, not a confirmed diagnosis.
                      Classical and modern conditions must not be assumed
                      equivalent. Investigation and treatment decisions require
                      qualified clinical assessment.
                    </div>
                    <div className="mb-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                      <button
                        type="button"
                        aria-expanded={isEvidenceExpanded}
                        aria-controls={`evidence-${disease.id}`}
                        onClick={() =>
                          setExpandedEvidenceId((current) =>
                            current === disease.id ? null : disease.id
                          )
                        }
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-left text-xs font-bold text-violet-900 hover:bg-violet-100 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-300"
                      >
                        <span className="inline-flex items-center gap-2">
                          <BookOpen className="h-4 w-4" /> Clinical Evidence &amp;
                          References
                        </span>
                        {isEvidenceExpanded ? (
                          <ChevronUp className="h-4 w-4 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0" />
                        )}
                      </button>
                      {isEvidenceExpanded && (
                        <div id={`evidence-${disease.id}`} className="mt-4">
                          <PublicEvidencePanel references={diseaseReferences} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleShareWhatsApp(disease)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-neutral-800 hover:text-[#7C3AED] dark:text-neutral-200"
                    >
                      Share Educational Note
                      <ExternalLink className="h-3.5 w-3.5" />
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
