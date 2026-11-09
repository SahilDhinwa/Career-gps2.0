
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
  BookOpen,
  ClipboardList,
} from "lucide-react";

import {
  SYMPTOM_FILTERS,
  DISEASE_DATABASE,
} from "../../data/diagnosisDatabase";

import type {
  SystemClusterId,
  DiseaseProfile,
} from "../../data/diagnosisDatabase";

import {
  CLINICAL_SAFETY_NOTICE,
  CLINICAL_SAFETY_ALERTS,
} from "../../data/diagnosis/clinicalSafety";

import { validateDiagnosisDatabase } from "../../data/diagnosis/validateDatabase";

import ClinicalEvidencePanel from "../../components/diagnosis/ClinicalEvidencePanel";
import ClinicalAuditPanel from "../../components/diagnosis/ClinicalAuditPanel";

import { getDiseaseEvidence } from "../../data/diagnosis/evidence";

import {
  getDiseaseAudit,
  getAuditSummary,
  validateClinicalAudits,
} from "../../data/diagnosis/audit";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SIMPLE_CLUSTERS: {
  id: SystemClusterId;
  label: string;
}[] = [
  { id: "all", label: "ALL AREAS" },
  { id: "joints", label: "JOINTS & NERVES (जोड़ एवं वात)" },
  { id: "gi", label: "STOMACH & ACIDITY (पेट एवं पाचन)" },
  { id: "fever", label: "FEVER / JWARA (बुखार)" },
];

export default function SimpleClinicalDiagnosisHub() {
  const [selectedCluster, setSelectedCluster] =
    useState<SystemClusterId>("all");

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [strictMode, setStrictMode] = useState(true);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [expandedEvidenceId, setExpandedEvidenceId] =
    useState<string | null>(null);
  const [expandedAuditId, setExpandedAuditId] =
    useState<string | null>(null);

  const databaseIssues = useMemo(
    () => validateDiagnosisDatabase(DISEASE_DATABASE, SYMPTOM_FILTERS),
    []
  );

  const auditValidationErrors = useMemo(
    () => validateClinicalAudits(),
    []
  );

  const auditSummary = useMemo(
    () => getAuditSummary(),
    []
  );

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
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

  const filteredDiseases = useMemo(() => {
    return DISEASE_DATABASE.filter((disease) => {
      if (
        selectedCluster !== "all" &&
        disease.cluster !== selectedCluster
      ) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();

        const textPool = [
          disease.sanskritName,
          disease.hindiName,
          disease.modernCorrelate,
          disease.pratyatmaLakshana,
          disease.knockoutClue,
        ]
          .join(" ")
          .toLowerCase();

        if (!textPool.includes(q)) return false;
      }

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
    const evidence = getDiseaseEvidence(d.id);
    const audit = getDiseaseAudit(d.id);

    const reviewStatus = evidence?.review.status ?? "unverified";

    const text = [
      "*ATREYA Clinical Reference Note*",
      "",
      `*Possible differential:* ${d.sanskritName}`,
      `*Modern clinical correlation:* ${d.modernCorrelate}`,
      "",
      `*Original clinical description:* ${d.pratyatmaLakshana}`,
      `*Original bedside clue (unverified):* ${d.knockoutClue}`,
      "",
      "*Legacy investigation references — NOT clinically verified:*",
      ...d.essentialTests.map(
        (t) => `• ${t.name} (${t.estCost})`
      ),
      "",
      `*Legacy Ayurvedic treatment reference (unverified):* ${d.firstLineChikitsa}`,
      "",
      `*Evidence review status:* ${reviewStatus}`,
      `*Clinical approval:* ${
        audit?.clinicalApproval === false
          ? "Not approved"
          : "Not established"
      }`,
      "",
      "IMPORTANT: This is an unverified clinical reference, not a confirmed diagnosis, prescription, or instruction to omit tests. A qualified clinician must independently assess the patient and determine appropriate investigations and treatment. Emergency warning signs require immediate assessment.",
    ].join("\n");

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className={`${jakarta.className} min-h-screen bg-[#FAF8F5] dark:bg-[#0B0F0E] text-[#111827] dark:text-[#F3F4F6] pb-24 transition-colors duration-300`}
    >
      {/* TOP BAR */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {(selectedFilters.length > 0 ||
          searchQuery.trim() !== "") && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 dark:text-violet-400 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset all filters
          </button>
        )}
      </div>

      {/* HEADER */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-800 dark:text-violet-300 mb-5">
          CHOOSE SYMPTOMS TO NARROW DOWN
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
          Symptom-by-symptom diagnosis or cost-saving test check.
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* CLINICAL SAFETY NOTICE */}
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
                Clinical Decision Support — Safety Notice
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
                        {alert.urgency === "emergency"
                          ? "EMERGENCY"
                          : "URGENT"}
                        {" — "}
                        {alert.title}
                      </p>

                      <p className="mt-1 leading-relaxed">
                        {alert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT VALIDATION */}
        {process.env.NODE_ENV === "development" && (
          <>
            {databaseIssues.length > 0 && (
              <section
                role="status"
                className="mb-6 rounded-xl border border-neutral-300 p-4 text-xs dark:border-neutral-700"
              >
                <p className="font-bold">
                  Database validation: {databaseIssues.length} issue(s)
                </p>

                <div className="mt-2 max-h-48 space-y-1 overflow-y-auto">
                  {databaseIssues.map((issue, index) => (
                    <p key={index}>
                      {issue.severity.toUpperCase()} —{" "}
                      {issue.location}: {issue.message}
                    </p>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
              <p className="font-bold">
                Clinical Audit Integrity
              </p>

              <p className="mt-2">
                {auditSummary.totalDiseases} disease records ·{" "}
                {auditSummary.totalFields} audit field slots ·{" "}
                {auditSummary.flaggedFields} preliminary concern flags
              </p>

              <p className="mt-1">
                Linked evidence claims:{" "}
                {auditSummary.linkedEvidenceClaims}
              </p>

              <p className="mt-1">
                Clinician-approved profiles:{" "}
                {auditSummary.clinicianApproved}
              </p>

              <p className="mt-1">
                Validation:{" "}
                {auditValidationErrors.length === 0
                  ? "No structural errors detected"
                  : `${auditValidationErrors.length} structural error(s)`}
              </p>

              {auditValidationErrors.length > 0 && (
                <div className="mt-3 space-y-1 text-red-700 dark:text-red-400">
                  {auditValidationErrors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {/* MODE SWITCHER */}
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
          Tap a body area and patient symptoms below. Each symptom
          you select narrows the database candidate list.
          Investigation decisions require independent clinical
          assessment.
        </p>

        {/* FILTER AND SEARCH BOX */}
        <section className="bg-white dark:bg-[#141917] border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xs mb-8 space-y-5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <Filter className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>
                Filter by body area, main symptom, relief trigger,
                and keyword
              </span>
            </p>

            {selectedFilters.length > 0 && (
              <span className="text-xs font-bold text-violet-700 dark:text-violet-400">
                {selectedFilters.length} selected
              </span>
            )}
          </div>

          {/* BODY AREA */}
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
            Tap the patient&apos;s symptoms below. Tap a purple
            button again to remove that filter.
          </p>

          {/* PATIENT SYMPTOMS */}
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
                    {f.label} •{" "}
                    <span className="opacity-85">{f.hindi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RELIEF AND BEDSIDE SIGNS */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              2. What Gives Relief &amp; Bedside Signs
              (उपशय एवं जीभ/जांच):
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
                    {f.label} •{" "}
                    <span className="opacity-85">{f.hindi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH */}
          <div className="pt-1">
            <label
              htmlFor="diagnosis-search"
              className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2"
            >
              Search diseases, symptoms, or Hindi names
            </label>

            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />

              <input
                id="diagnosis-search"
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
                  aria-label="Clear search"
                  className="absolute right-3 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            {filteredDiseases.length}{" "}
            {filteredDiseases.length === 1
              ? "database candidate matched — diagnosis not confirmed"
              : "database candidates matched — not confirmed diagnoses"}
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

        {filteredDiseases.length === 0 ? (
          <div className="bg-white dark:bg-[#141917] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 text-center space-y-3">
            <p className="text-base font-bold text-neutral-900 dark:text-white">
              No single disease matches all selected filters together.
            </p>

            <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
              Switch to &ldquo;Broad Match&rdquo; at the top
              to see partial matches, or remove one symptom pill.
              No match does not exclude disease.
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
                expandedCardId === disease.id ||
                filteredDiseases.length === 1;

              const isEvidenceExpanded =
                expandedEvidenceId === disease.id;

              const isAuditExpanded =
                expandedAuditId === disease.id;

              const evidenceRecord =
                getDiseaseEvidence(disease.id);

              const auditRecord =
                getDiseaseAudit(disease.id);

              // Clinical approval is not inferred from a source
              // claim or evidence review status.
              const requiresClinicalReview =
                !auditRecord ||
                auditRecord.clinicalApproval !== false
                  ? true
                  : true;

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
                    {/* METADATA */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        ⚕️ {disease.hindiName}
                      </span>

                      <span className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                        {disease.icdCode}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white mb-1 leading-snug">
                      {disease.sanskritName}
                    </h3>

                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-3">
                      {disease.modernCorrelate}
                    </p>

                    {/* REVIEW STATUS */}
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                        <ShieldAlert className="h-3 w-3" />
                        {requiresClinicalReview
                          ? "Clinical review required"
                          : "Clinical review required"}
                      </span>

                      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                        Evidence:{" "}
                        {evidenceRecord?.review.status.replace(/_/g, " ") ??
                          "missing"}
                      </span>
                    </div>

                    {/* ORIGINAL DESCRIPTION */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {disease.pratyatmaLakshana}
                    </p>

                    {/* ORIGINAL BEDSIDE CLUE */}
                    <p className="text-xs sm:text-sm italic text-[#6D28D9] dark:text-violet-400 leading-relaxed mb-5">
                      Legacy bedside clue (unverified):{" "}
                      {disease.knockoutClue}
                    </p>

                    {/* LEGACY INVESTIGATIONS AND TREATMENT */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3 mb-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1 mb-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Legacy Investigation References
                              (Unverified)
                            </span>

                            {disease.essentialTests.map((t, i) => (
                              <div key={i} className="text-xs mt-2">
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
                              <ShieldAlert className="w-3.5 h-3.5" />
                              Legacy Test-Omission Claims
                              (Unverified)
                            </span>

                            {disease.avoidedTests.map((t, i) => (
                              <div key={i} className="text-xs mt-2">
                                <p className="font-bold text-neutral-900 dark:text-white">
                                  {t.name} (Claimed savings: {t.estSaved})
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
                            Legacy Ayurvedic Protocol
                            (चिकित्सा सूत्र) — Unverified:
                          </strong>

                          <span className="text-neutral-700 dark:text-neutral-300">
                            {disease.firstLineChikitsa}
                          </span>

                          <p className="mt-2 text-[11px] text-amber-700 dark:text-amber-400">
                            Historical database content only.
                            Not a verified prescription or treatment recommendation.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* VERIFICATION WARNING */}
                    <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50/70 p-2.5 text-[11px] leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
                      <strong>Clinical verification required.</strong>{" "}
                      This is a possible differential, not a confirmed
                      diagnosis. Original investigation, test-saving,
                      and treatment claims remain unverified and must
                      not independently determine patient care.
                    </div>

                    {/* CLINICAL EVIDENCE */}
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
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-left text-xs font-bold text-violet-900 transition-colors hover:bg-violet-100 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-300 dark:hover:bg-violet-950/50"
                      >
                        <span className="inline-flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Clinical Evidence & References
                        </span>

                        {isEvidenceExpanded ? (
                          <ChevronUp className="h-4 w-4 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0" />
                        )}
                      </button>

                      {isEvidenceExpanded && (
                        <div
                          id={`evidence-${disease.id}`}
                          className="mt-4"
                        >
                          <ClinicalEvidencePanel diseaseId={disease.id} />
                        </div>
                      )}
                    </div>

                    {/* CLINICAL FIELD AUDIT */}
                    <div className="mb-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                      <button
                        type="button"
                        aria-expanded={isAuditExpanded}
                        aria-controls={`audit-${disease.id}`}
                        onClick={() =>
                          setExpandedAuditId((current) =>
                            current === disease.id ? null : disease.id
                          )
                        }
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left text-xs font-bold text-amber-950 transition-colors hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-300"
                      >
                        <span className="inline-flex items-center gap-2">
                          <ClipboardList className="h-4 w-4" />
                          Clinical Field Audit
                        </span>

                        {isAuditExpanded ? (
                          <ChevronUp className="h-4 w-4 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0" />
                        )}
                      </button>

                      {isAuditExpanded && (
                        <div
                          id={`audit-${disease.id}`}
                          className="mt-4"
                        >
                          <ClinicalAuditPanel disease={disease} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BOTTOM ACTIONS */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCardId(
                          expandedCardId === disease.id
                            ? null
                            : disease.id
                        )
                      }
                      className="px-3.5 py-1.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[10px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer hover:opacity-90"
                    >
                      <span>
                        {isExpanded
                          ? "HIDE TESTS & CARE"
                          : "VIEW LEGACY TESTS & CARE"}
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
