
"use client";

import { useMemo, useState } from "react";
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

import {
  validateDiagnosisDatabase,
} from "../../data/diagnosis/validateDatabase";

import {
  getDiseaseEvidence,
} from "../../data/diagnosis/evidence";

import {
  getAuditSummary,
  validateClinicalAudits,
} from "../../data/diagnosis/audit";

import {
  getCorrectionSummary,
  validateClinicalCorrections,
} from "../../data/diagnosis/corrections";

import ClinicalEvidencePanel from "../../components/diagnosis/ClinicalEvidencePanel";

import ClinicalAuditPanel from "../../components/diagnosis/ClinicalAuditPanel";

import ClinicalSafetyGatePanel from "../../components/diagnosis/ClinicalSafetyGatePanel";

import ClinicalResearchPanel from "../../components/diagnosis/ClinicalResearchPanel";

import ResearchFindingsPanel from "../../components/diagnosis/ResearchFindingsPanel";
// ============================================================
// FONT
// ============================================================

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// ============================================================
// BODY AREA FILTERS
// ============================================================

const SIMPLE_CLUSTERS: {
  id: SystemClusterId;
  label: string;
}[] = [
  {
    id: "all",
    label: "ALL AREAS",
  },
  {
    id: "joints",
    label: "JOINTS & NERVES (जोड़ एवं वात)",
  },
  {
    id: "gi",
    label: "STOMACH & ACIDITY (पेट एवं पाचन)",
  },
  {
    id: "fever",
    label: "FEVER / JWARA (बुखार)",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function SimpleClinicalDiagnosisHub() {
  // ----------------------------------------------------------
  // FILTER STATE
  // ----------------------------------------------------------

  const [selectedCluster, setSelectedCluster] =
    useState<SystemClusterId>("all");

  const [selectedFilters, setSelectedFilters] =
    useState<string[]>([]);

  const [searchQuery, setSearchQuery] =
    useState<string>("");

  const [strictMode, setStrictMode] =
    useState<boolean>(true);

  // ----------------------------------------------------------
  // INDEPENDENT EXPANSION STATE
  // ----------------------------------------------------------

  const [expandedCardId, setExpandedCardId] =
    useState<string | null>(null);

  const [expandedEvidenceId, setExpandedEvidenceId] =
    useState<string | null>(null);

  const [expandedAuditId, setExpandedAuditId] =
    useState<string | null>(null);

  // ----------------------------------------------------------
  // DEVELOPMENT VALIDATION
  // ----------------------------------------------------------

  const databaseIssues = useMemo(
    () =>
      validateDiagnosisDatabase(
        DISEASE_DATABASE,
        SYMPTOM_FILTERS
      ),
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

  const correctionValidationErrors = useMemo(
    () => validateClinicalCorrections(),
    []
  );

  const correctionSummary = useMemo(
    () => getCorrectionSummary(),
    []
  );

  // ----------------------------------------------------------
  // FILTER HANDLERS
  // ----------------------------------------------------------

  const toggleFilter = (id: string) => {
    setSelectedFilters((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const clearAll = () => {
    setSelectedFilters([]);
    setSearchQuery("");
  };

  const handleClusterSelect = (
    id: SystemClusterId
  ) => {
    setSelectedCluster(id);
    setSelectedFilters([]);
  };

  // ----------------------------------------------------------
  // GROUP SYMPTOM FILTERS
  // ----------------------------------------------------------

  const {
    symptomRow,
    reliefAndSignRow,
  } = useMemo(() => {
    const relevant = SYMPTOM_FILTERS.filter(
      (filter) =>
        selectedCluster === "all" ||
        filter.cluster === selectedCluster ||
        filter.cluster === "all"
    );

    return {
      symptomRow: relevant.filter(
        (filter) =>
          filter.category === "symptom"
      ),

      reliefAndSignRow: relevant.filter(
        (filter) =>
          filter.category === "upashaya" ||
          filter.category === "pariksha"
      ),
    };
  }, [selectedCluster]);

  // ----------------------------------------------------------
  // DIFFERENTIAL CANDIDATE FILTERING
  // ----------------------------------------------------------

  const filteredDiseases = useMemo(() => {
    return DISEASE_DATABASE.filter((disease) => {
      // Body area matching
      if (
        selectedCluster !== "all" &&
        disease.cluster !== selectedCluster
      ) {
        return false;
      }

      // Text search
      const query = searchQuery
        .trim()
        .toLowerCase();

      if (query.length > 0) {
        const searchableText = [
          disease.sanskritName,
          disease.hindiName,
          disease.modernCorrelate,
          disease.pratyatmaLakshana,
          disease.knockoutClue,
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // No symptoms selected
      if (selectedFilters.length === 0) {
        return true;
      }

      const matchingCount =
        selectedFilters.filter((filterId) =>
          disease.matchingFilterIds.includes(
            filterId
          )
        ).length;

      // Strict: all selected symptoms
      // Broad: at least one selected symptom
      return strictMode
        ? matchingCount === selectedFilters.length
        : matchingCount > 0;
    });
  }, [
    selectedCluster,
    selectedFilters,
    searchQuery,
    strictMode,
  ]);

  // ----------------------------------------------------------
  // WHATSAPP SHARING
  //
  // Share the reference note without presenting unreviewed
  // test-omission or treatment instructions as advice.
  // ----------------------------------------------------------

  const handleShareWhatsApp = (
    disease: DiseaseProfile
  ) => {
    const evidence = getDiseaseEvidence(
      disease.id
    );

    const reviewStatus =
      evidence?.review.status ?? "unverified";

    const message = [
      "*ATREYA Clinical Reference Note*",
      "",
      `*Possible differential:* ${disease.sanskritName}`,
      `*Modern clinical correlation:* ${disease.modernCorrelate}`,
      "",
      `*Original clinical description (unverified):* ${disease.pratyatmaLakshana}`,
      "",
      `*Evidence review status:* ${reviewStatus}`,
      "*Clinical approval:* Not approved",
      "",
      "This is an educational differential-diagnosis reference, not a confirmed diagnosis.",
      "",
      "The original investigation, test-omission and treatment claims remain under review and are intentionally excluded from this shared note.",
      "",
      "A qualified clinician must independently assess the patient and determine appropriate investigations and treatment. Emergency warning signs require immediate assessment.",
    ].join("\n");

    const url =
      `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      className={`${jakarta.className} min-h-screen bg-[#FAF8F5] pb-24 text-[#111827] transition-colors duration-300 dark:bg-[#0B0F0E] dark:text-[#F3F4F6]`}
    >
      {/* ======================================================
          TOP NAVIGATION
          ====================================================== */}

      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pb-2 pt-6 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {(selectedFilters.length > 0 ||
          searchQuery.trim() !== "") && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold text-violet-700 hover:underline dark:text-violet-400"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset all filters
          </button>
        )}
      </div>

      {/* ======================================================
          HEADER
          ====================================================== */}

      <header className="mx-auto max-w-3xl px-4 pb-8 pt-6 text-center sm:px-6">
        <span className="mb-5 inline-block rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-800 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-300">
          CHOOSE SYMPTOMS TO NARROW DOWN
        </span>

        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Symptom-by-symptom diagnosis or cost-saving test check.
        </h1>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* ====================================================
            CLINICAL SAFETY NOTICE
            ==================================================== */}

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
                  {CLINICAL_SAFETY_ALERTS.map(
                    (alert) => (
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
                    )
                  )}
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ====================================================
            DEVELOPMENT DIAGNOSTICS
            ==================================================== */}

        {process.env.NODE_ENV === "development" && (
          <>
            {/* DATABASE VALIDATION */}

            {databaseIssues.length > 0 && (
              <section
                role="status"
                className="mb-6 rounded-xl border border-neutral-300 p-4 text-xs dark:border-neutral-700"
              >
                <p className="font-bold">
                  Database validation:{" "}
                  {databaseIssues.length} issue(s)
                </p>

                <div className="mt-2 max-h-48 space-y-1 overflow-y-auto">
                  {databaseIssues.map(
                    (issue, index) => (
                      <p key={index}>
                        {issue.severity.toUpperCase()}
                        {" — "}
                        {issue.location}:{" "}
                        {issue.message}
                      </p>
                    )
                  )}
                </div>
              </section>
            )}

            {/* AUDIT VALIDATION */}

            <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
              <p className="font-bold">
                Clinical Audit Integrity
              </p>

              <p className="mt-2">
                {auditSummary.totalDiseases} disease records
                {" · "}
                {auditSummary.totalFields} audit field slots
                {" · "}
                {auditSummary.flaggedFields} preliminary concern flags
              </p>

              <p className="mt-1">
                Pending fields:{" "}
                {auditSummary.pendingFields}
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
                <div className="mt-3 max-h-48 space-y-1 overflow-y-auto text-red-700 dark:text-red-400">
                  {auditValidationErrors.map(
                    (error, index) => (
                      <p key={index}>{error}</p>
                    )
                  )}
                </div>
              )}
            </section>

            {/* CORRECTIONS VALIDATION */}

            <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
              <p className="font-bold">
                Clinical Corrections Registry
              </p>

              <p className="mt-2">
                {correctionSummary.totalCorrections}
                {" proposed corrections · "}
                {correctionSummary.diseasesCovered}
                {" diseases covered"}
              </p>

              <p className="mt-1">
                Drafts: {correctionSummary.drafts}
                {" · "}
                Awaiting evidence:{" "}
                {correctionSummary.awaitingEvidence}
                {" · "}
                Under clinical review:{" "}
                {correctionSummary.underClinicalReview}
              </p>

              <p className="mt-1">
                Approved corrections:{" "}
                {correctionSummary.approved}
              </p>

              <p className="mt-1">
                Validation:{" "}
                {correctionValidationErrors.length === 0
                  ? "No structural errors detected"
                  : `${correctionValidationErrors.length} structural error(s)`}
              </p>

              {correctionValidationErrors.length > 0 && (
                <div className="mt-3 max-h-48 space-y-1 overflow-y-auto text-red-700 dark:text-red-400">
                  {correctionValidationErrors.map(
                    (error, index) => (
                      <p key={index}>{error}</p>
                    )
                  )}
                </div>
              )}
            </section>
          </>
        )}

        {/* ====================================================
            STRICT / BROAD MODE SWITCHER
            ==================================================== */}

        <div className="mb-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setStrictMode(true)}
            aria-pressed={strictMode}
            className={`cursor-pointer rounded-xl border px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              strictMode
                ? "border-neutral-900 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            }`}
          >
            Strict Funnel (Matches All Selected)
          </button>

          <button
            type="button"
            onClick={() => setStrictMode(false)}
            aria-pressed={!strictMode}
            className={`cursor-pointer rounded-xl border px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              !strictMode
                ? "border-neutral-900 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            }`}
          >
            Broad Match (Matches Any Symptom)
          </button>
        </div>

        <p className="mb-6 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
          Tap a body area and patient symptoms below.
          Each selected symptom narrows the database
          candidate list. Investigation decisions require
          independent clinical assessment.
        </p>

        {/* ====================================================
            FILTER AND SEARCH PANEL
            ==================================================== */}

        <section className="mb-8 space-y-5 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs dark:border-neutral-800 dark:bg-[#141917] sm:p-6">

          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-xs font-bold text-neutral-800 dark:text-neutral-200 sm:text-sm">
              <Filter className="h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />

              <span>
                Filter by body area, main symptom,
                relief trigger, and keyword
              </span>
            </p>

            {selectedFilters.length > 0 && (
              <span className="shrink-0 text-xs font-bold text-violet-700 dark:text-violet-400">
                {selectedFilters.length} selected
              </span>
            )}
          </div>

          {/* BODY AREA PILLS */}

          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-1">
            {SIMPLE_CLUSTERS.map((cluster) => {
              const active =
                selectedCluster === cluster.id;

              return (
                <button
                  key={cluster.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    handleClusterSelect(cluster.id)
                  }
                  className={`cursor-pointer whitespace-nowrap rounded-lg border px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                    active
                      ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-2xs"
                      : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  }`}
                >
                  {cluster.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            Tap the patient&apos;s symptoms below.
            Tap a purple button again to remove
            that filter.
          </p>

          {/* SYMPTOM PILLS */}

          <div>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              1. Patient Symptoms (प्रमुख लक्षण):
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  setSelectedFilters([])
                }
                aria-pressed={
                  selectedFilters.length === 0
                }
                className={`cursor-pointer rounded-lg border px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                  selectedFilters.length === 0
                    ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                    : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                }`}
              >
                ALL SYMPTOMS
              </button>

              {symptomRow.map((filter) => {
                const active =
                  selectedFilters.includes(
                    filter.id
                  );

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      toggleFilter(filter.id)
                    }
                    className={`cursor-pointer rounded-lg border px-3.5 py-2 text-left text-xs font-semibold transition-all ${
                      active
                        ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-2xs"
                        : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    }`}
                  >
                    {filter.label} •{" "}
                    <span className="opacity-85">
                      {filter.hindi}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RELIEF AND BEDSIDE SIGNS */}

          <div>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              2. What Gives Relief &amp; Bedside Signs
              (उपशय एवं जीभ/जांच):
            </span>

            <div className="flex flex-wrap gap-2">
              {reliefAndSignRow.map((filter) => {
                const active =
                  selectedFilters.includes(
                    filter.id
                  );

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      toggleFilter(filter.id)
                    }
                    className={`cursor-pointer rounded-lg border px-3.5 py-2 text-left text-xs font-semibold transition-all ${
                      active
                        ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-2xs"
                        : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    }`}
                  >
                    {filter.label} •{" "}
                    <span className="opacity-85">
                      {filter.hindi}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH INPUT */}

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
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder="Search e.g. Amavata, Sciatica, Gout, Acidity, Malaria, डकार, घुटनों में दर्द..."
                className="w-full rounded-xl border border-neutral-300 bg-white py-2.5 pl-10 pr-9 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-[#7C3AED] focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white sm:text-sm"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  aria-label="Clear search"
                  className="absolute right-3 cursor-pointer text-neutral-400 hover:text-neutral-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ====================================================
            RESULTS HEADER
            ==================================================== */}

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

        {/* ====================================================
            EMPTY RESULTS
            ==================================================== */}

        {filteredDiseases.length === 0 ? (
          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-[#141917]">
            <p className="text-base font-bold text-neutral-900 dark:text-white">
              No single disease matches all selected
              filters together.
            </p>

            <p className="mx-auto max-w-md text-xs text-neutral-500 sm:text-sm">
              Switch to &ldquo;Broad Match&rdquo;
              to see partial matches, or remove
              one symptom pill. No match does
              not exclude disease.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  setStrictMode(false)
                }
                className="cursor-pointer rounded-lg bg-[#7C3AED] px-4 py-2 text-xs font-bold text-white"
              >
                Switch to Broad Match
              </button>

              <button
                type="button"
                onClick={clearAll}
                className="cursor-pointer rounded-lg border border-neutral-300 px-4 py-2 text-xs font-bold dark:border-neutral-700"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (

          /* ==================================================
              DISEASE CARDS
              ================================================== */

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredDiseases.map((disease) => {
              const isExpanded =
                expandedCardId === disease.id;

              const isEvidenceExpanded =
                expandedEvidenceId === disease.id;

              const isAuditExpanded =
                expandedAuditId === disease.id;

              const evidenceRecord =
                getDiseaseEvidence(
                  disease.id
                );

              const reviewStatus =
                evidenceRecord?.review.status ??
                "unverified";

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

                    {/* DISEASE METADATA */}

                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        ⚕️ {disease.hindiName}
                      </span>

                      <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                        {disease.icdCode}
                      </span>
                    </div>

                    {/* DISEASE TITLE */}

                    <h3 className="mb-1 text-lg font-extrabold leading-snug text-neutral-900 dark:text-white sm:text-xl">
                      {disease.sanskritName}
                    </h3>

                    <p className="mb-3 text-xs font-bold text-neutral-500 dark:text-neutral-400">
                      {disease.modernCorrelate}
                    </p>

                    {/* CLINICAL REVIEW STATUS */}

                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                        <ShieldAlert className="h-3 w-3" />
                        Clinical review required
                      </span>

                      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                        Evidence:{" "}
                        {reviewStatus.replace(
                          /_/g,
                          " "
                        )}
                      </span>
                    </div>

                    {/* ORIGINAL DESCRIPTION */}

                    <p className="mb-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-sm">
                      {disease.pratyatmaLakshana}
                    </p>

                    {/* ORIGINAL BEDSIDE CLUE */}

                    <p className="mb-5 text-xs italic leading-relaxed text-[#6D28D9] dark:text-violet-400 sm:text-sm">
                      Legacy bedside clue (unverified):{" "}
                      {disease.knockoutClue}
                    </p>

                    {/* ==========================================
                        LEGACY TESTS AND CARE
                        ========================================== */}

                    {isExpanded && (
                      <div
                        id={`legacy-${disease.id}`}
                        className="mb-5 mt-4 space-y-3 border-t border-neutral-200 pt-4 dark:border-neutral-800"
                      >
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-300">
                          <strong>
                            Unverified historical database content.
                          </strong>{" "}
                          Do not use these entries to
                          prescribe treatment, confirm
                          a diagnosis, or omit investigations.
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                          {/* INVESTIGATION REFERENCES */}

                          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900">
                            <span className="mb-1 flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Legacy Investigation References
                              (Unverified)
                            </span>

                            {disease.essentialTests.map(
                              (test, index) => (
                                <div
                                  key={index}
                                  className="mt-2 text-xs"
                                >
                                  <p className="font-bold text-neutral-900 dark:text-white">
                                    {test.name}
                                    {" ("}
                                    {test.estCost}
                                    {")"}
                                  </p>

                                  <p className="mt-0.5 text-[11px] text-neutral-600 dark:text-neutral-400">
                                    {test.reason}
                                  </p>
                                </div>
                              )
                            )}
                          </div>

                          {/* TEST OMISSION CLAIMS */}

                          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3.5 dark:border-rose-800/50 dark:bg-rose-950/20">
                            <span className="mb-1 flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-rose-800 dark:text-rose-300">
                              <ShieldAlert className="h-3.5 w-3.5" />
                              Legacy Test-Omission Claims
                              (Unverified)
                            </span>

                            {disease.avoidedTests.map(
                              (test, index) => (
                                <div
                                  key={index}
                                  className="mt-2 text-xs"
                                >
                                  <p className="font-bold text-neutral-900 dark:text-white">
                                    {test.name}
                                    {" — claimed savings: "}
                                    {test.estSaved}
                                  </p>

                                  <p className="mt-0.5 text-[11px] text-neutral-600 dark:text-neutral-400">
                                    {test.whyUnnecessary}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* AYURVEDIC PROTOCOL */}

                        <div className="rounded-xl bg-neutral-100 p-3.5 text-xs dark:bg-neutral-900">
                          <strong className="mb-1 block uppercase tracking-wider text-neutral-900 dark:text-white">
                            Legacy Ayurvedic Protocol
                            (चिकित्सा सूत्र) — Unverified:
                          </strong>

                          <span className="text-neutral-700 dark:text-neutral-300">
                            {disease.firstLineChikitsa}
                          </span>

                          <p className="mt-2 text-[11px] text-amber-700 dark:text-amber-400">
                            Historical database content only.
                            Not a verified prescription
                            or treatment recommendation.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* ==========================================
                        CLINICAL VERIFICATION WARNING
                        ========================================== */}

                    <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50/70 p-2.5 text-[11px] leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
                      <strong>
                        Clinical verification required.
                      </strong>{" "}
                      This is a possible differential,
                      not a confirmed diagnosis.
                      Original investigation, test-saving,
                      and treatment claims remain unverified
                      and must not independently determine
                      patient care.
                    </div>

                    {/* ==========================================
                        CLINICAL EVIDENCE PANEL
                        ========================================== */}

                    <div className="mb-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                      <button
                        type="button"
                        aria-expanded={
                          isEvidenceExpanded
                        }
                        aria-controls={
                          `evidence-${disease.id}`
                        }
                        onClick={() =>
                          setExpandedEvidenceId(
                            (current) =>
                              current === disease.id
                                ? null
                                : disease.id
                          )
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-left text-xs font-bold text-violet-900 transition-colors hover:bg-violet-100 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-300 dark:hover:bg-violet-950/50"
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
                          <ClinicalEvidencePanel
                            diseaseId={disease.id}
                          />
                        </div>
                      )}
                    </div>

                    {/* ==========================================
                        CLINICAL FIELD AUDIT
                        INCLUDES PHASE 5 CORRECTIONS
                        ========================================== */}

                    <div className="mb-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                      <button
                        type="button"
                        aria-expanded={
                          isAuditExpanded
                        }
                        aria-controls={
                          `audit-${disease.id}`
                        }
                        onClick={() =>
                          setExpandedAuditId(
                            (current) =>
                              current === disease.id
                                ? null
                                : disease.id
                          )
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left text-xs font-bold text-amber-950 transition-colors hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-300"
                      >
                        <span className="inline-flex items-center gap-2">
                          <ClipboardList className="h-4 w-4" />
                          Clinical Field Audit
                          & Proposed Corrections
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
                          <ClinicalAuditPanel
                            disease={disease}
                          />
                          <div className="mt-4">
  <ClinicalSafetyGatePanel diseaseId={disease.id} />
</div>
                          <div className="mt-4">
  <ClinicalResearchPanel diseaseId={disease.id} />
</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ==========================================
                      BOTTOM ACTION BAR
                      ========================================== */}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={
                        `legacy-${disease.id}`
                      }
                      onClick={() =>
                        setExpandedCardId(
                          (current) =>
                            current === disease.id
                              ? null
                              : disease.id
                        )
                      }
                      className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-neutral-900 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
                    >
                      <span>
                        {isExpanded
                          ? "HIDE TESTS & CARE"
                          : "VIEW LEGACY TESTS & CARE"}
                      </span>

                      {isExpanded ? (
                        <ChevronUp className="h-3 w-3" />
                      ) : (
                        <ChevronDown className="h-3 w-3" />
                      )}
                    </button>

                    <div className="flex flex-wrap items-center gap-3">

                      {/* ORIGINAL EXTERNAL SOURCE */}

                      {"sourceUrl" in disease &&
  typeof disease.sourceUrl === "string" &&
  disease.sourceUrl.length > 0 && (
                        <a
                          href={disease.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 hover:underline dark:text-violet-400"
                        >
                          Visit Resource
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}

                      {/* WHATSAPP SHARING */}

                      <button
                        type="button"
                        onClick={() =>
                          handleShareWhatsApp(
                            disease
                          )
                        }
                        className="inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-neutral-800 hover:text-[#7C3AED] dark:text-neutral-200"
                      >
                        Share OPD Note
                        <ExternalLink className="h-3.5 w-3.5" />
                      </button>
                    </div>
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
