
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

import {
  getResearchSummary,
  validateDiseaseResearch,
} from "../../data/diagnosis/research";

import {
  RESEARCH_FINDINGS,
} from "../../data/diagnosis/research/verifiedFindings";

import {
  validateResearchFindings,
} from "../../data/diagnosis/research/validateFindings";

import {
  validateEditionComparisons,
} from "../../data/diagnosis/research/editionComparison";

import {
  validatePrimaryTextInspections,
} from "../../data/diagnosis/research/primaryTextInspection";

import {
  validateClassicalVerifications,
} from "../../data/diagnosis/research/classicalVerification";

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
// ENVIRONMENT SAFETY
// ============================================================

// Development-only visibility is not authentication.
//
// In production, legacy investigations, test-omission
// claims, treatment protocols, and internal audit panels
// are not rendered by this component.
//
// Production authorization must be implemented separately
// before exposing reviewer-only content.
//
// IMPORTANT:
// Client-side rendering restrictions do not guarantee that
// sensitive data is absent from the JavaScript bundle.
// Do not treat this as server-side access control.

const IS_DEVELOPMENT =
  process.env.NODE_ENV === "development";

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
// HELPERS
// ============================================================

function getDiseaseResourceUrl(
  disease: DiseaseProfile
): string | null {
  if (!("sourceUrl" in disease)) {
    return null;
  }

  const value = disease.sourceUrl;

  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);

    if (
      url.protocol !== "https:" &&
      url.protocol !== "http:"
    ) {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
}

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
  // DATABASE VALIDATION
  // ----------------------------------------------------------

  const databaseIssues = useMemo(
    () =>
      IS_DEVELOPMENT
        ? validateDiagnosisDatabase(
            DISEASE_DATABASE,
            SYMPTOM_FILTERS
          )
        : [],
    []
  );

  // ----------------------------------------------------------
  // AUDIT VALIDATION
  // ----------------------------------------------------------

  const auditValidationErrors = useMemo(
    () =>
      IS_DEVELOPMENT
        ? validateClinicalAudits()
        : [],
    []
  );

  const auditSummary = useMemo(
    () =>
      IS_DEVELOPMENT
        ? getAuditSummary()
        : null,
    []
  );

  // ----------------------------------------------------------
  // CORRECTIONS VALIDATION
  // ----------------------------------------------------------

  const correctionValidationErrors = useMemo(
    () =>
      IS_DEVELOPMENT
        ? validateClinicalCorrections()
        : [],
    []
  );

  const correctionSummary = useMemo(
    () =>
      IS_DEVELOPMENT
        ? getCorrectionSummary()
        : null,
    []
  );

  // ----------------------------------------------------------
  // RESEARCH VALIDATION
  // ----------------------------------------------------------

  const researchValidationErrors = useMemo(
    () =>
      IS_DEVELOPMENT
        ? validateDiseaseResearch()
        : [],
    []
  );

  const researchSummary = useMemo(
    () =>
      IS_DEVELOPMENT
        ? getResearchSummary()
        : null,
    []
  );

  // ----------------------------------------------------------
  // SOURCE-LINKED RESEARCH SUMMARY
  // ----------------------------------------------------------

  const researchFindingsSummary = useMemo(() => {
    if (!IS_DEVELOPMENT) {
      return null;
    }

    const diseaseIds = new Set(
      RESEARCH_FINDINGS.map(
        (finding) => finding.diseaseId
      )
    );

    return {
      totalFindings: RESEARCH_FINDINGS.length,
      diseasesCovered: diseaseIds.size,

      modernGuidelineFindings:
        RESEARCH_FINDINGS.filter(
          (finding) =>
            finding.tradition ===
              "modern_clinical" &&
            finding.status ===
              "guideline_checked"
        ).length,

      classicalPassagesPending:
        RESEARCH_FINDINGS.filter(
          (finding) =>
            finding.tradition ===
              "classical_ayurveda" &&
            finding.status ===
              "text_located_review_pending"
        ).length,
    };
  }, []);

  // ----------------------------------------------------------
  // ADDITIONAL RESEARCH VALIDATION
  // ----------------------------------------------------------

  const additionalResearchErrors = useMemo(
    () =>
      IS_DEVELOPMENT
        ? [
            ...validateResearchFindings(),
            ...validateClassicalVerifications(),
            ...validateEditionComparisons(),
            ...validatePrimaryTextInspections(),
          ]
        : [],
    []
  );

  // ----------------------------------------------------------
  // FILTER HANDLERS
  // ----------------------------------------------------------

  const resetExpandedPanels = () => {
    setExpandedCardId(null);
    setExpandedEvidenceId(null);
    setExpandedAuditId(null);
  };

  const toggleFilter = (id: string) => {
    setSelectedFilters((previous) =>
      previous.includes(id)
        ? previous.filter(
            (item) => item !== id
          )
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

  const handleClusterSelect = (
    id: SystemClusterId
  ) => {
    setSelectedCluster(id);
    setSelectedFilters([]);
    resetExpandedPanels();
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
    const query = searchQuery
      .trim()
      .toLowerCase();

    return DISEASE_DATABASE.filter(
      (disease) => {
        // BODY AREA MATCH

        if (
          selectedCluster !== "all" &&
          disease.cluster !== selectedCluster
        ) {
          return false;
        }

        // TEXT SEARCH

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

          if (
            !searchableText.includes(query)
          ) {
            return false;
          }
        }

        // NO SYMPTOMS SELECTED

        if (selectedFilters.length === 0) {
          return true;
        }

        // SYMPTOM MATCHING

        const matchingCount =
          selectedFilters.filter(
            (filterId) =>
              disease.matchingFilterIds.includes(
                filterId
              )
          ).length;

        return strictMode
          ? matchingCount ===
              selectedFilters.length
          : matchingCount > 0;
      }
    );
  }, [
    selectedCluster,
    selectedFilters,
    searchQuery,
    strictMode,
  ]);

  // ----------------------------------------------------------
  // WHATSAPP SHARING
  // ----------------------------------------------------------

  const handleShareWhatsApp = (
    disease: DiseaseProfile
  ) => {
    const evidence = getDiseaseEvidence(
      disease.id
    );

    const reviewStatus =
      evidence?.review.status ??
      "unverified";

    const message = [
      "*ATREYA Educational Clinical Reference*",
      "",
      `*Classical condition:* ${disease.sanskritName}`,
      `*Proposed modern correlation (unverified):* ${disease.modernCorrelate}`,
      "",
      `*Original description (unverified):* ${disease.pratyatmaLakshana}`,
      "",
      `*Evidence review status:* ${reviewStatus}`,
      "*Clinical approval:* Not approved",
      "",
      "This is an educational differential-diagnosis reference, not a confirmed diagnosis.",
      "",
      "Classical Ayurvedic conditions must not automatically be treated as equivalent to modern medical diagnoses.",
      "",
      "Investigation, test-omission, and treatment claims are excluded from this shared note.",
      "",
      "Clinical assessment, testing, and treatment decisions must be made by qualified healthcare professionals. Emergency warning signs require immediate assessment.",
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

        {(selectedCluster !== "all" ||
          selectedFilters.length > 0 ||
          searchQuery.trim() !== "" ||
          !strictMode) && (
          <button
            type="button"
            onClick={resetEntireSearch}
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
          EDUCATIONAL CLINICAL REFERENCE
        </span>

        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Ayurvedic Clinical Reference &amp;
          Differential Diagnosis Explorer.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
          Explore classical Ayurvedic conditions,
          symptom descriptions, and proposed modern
          clinical differentials. Results are
          educational and require independent
          clinical verification.
        </p>
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

        {IS_DEVELOPMENT && (
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

            {auditSummary && (
              <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
                <p className="font-bold">
                  Clinical Audit Integrity
                </p>

                <p className="mt-2">
                  {auditSummary.totalDiseases}
                  {" disease records · "}
                  {auditSummary.totalFields}
                  {" audit field slots · "}
                  {auditSummary.flaggedFields}
                  {" preliminary concern flags"}
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
                        <p key={index}>
                          {error}
                        </p>
                      )
                    )}
                  </div>
                )}
              </section>
            )}

            {/* CORRECTIONS VALIDATION */}

            {correctionSummary && (
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
                  Drafts:{" "}
                  {correctionSummary.drafts}
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
                        <p key={index}>
                          {error}
                        </p>
                      )
                    )}
                  </div>
                )}
              </section>
            )}

            {/* RESEARCH VALIDATION */}

            {researchSummary && (
              <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
                <p className="font-bold">
                  Clinical Research Registry
                </p>

                <p className="mt-2">
                  {researchSummary.diseasesCovered}
                  {" diseases covered · "}
                  {researchSummary.classicalPassagesVerified}
                  {" classical passages verified"}
                </p>

                <p className="mt-1">
                  Clinically approved:{" "}
                  {researchSummary.clinicalApprovals}
                  {" · "}
                  Established equivalences:{" "}
                  {researchSummary.establishedEquivalences}
                </p>

                <p className="mt-1">
                  Validation:{" "}
                  {researchValidationErrors.length === 0
                    ? "No structural errors detected"
                    : `${researchValidationErrors.length} structural error(s)`}
                </p>

                {researchValidationErrors.length > 0 && (
                  <div className="mt-3 max-h-48 space-y-1 overflow-y-auto text-red-700 dark:text-red-400">
                    {researchValidationErrors.map(
                      (error, index) => (
                        <p key={index}>
                          {error}
                        </p>
                      )
                    )}
                  </div>
                )}
              </section>
            )}

            {/* SOURCE-LINKED RESEARCH SUMMARY */}

            {researchFindingsSummary && (
              <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
                <p className="font-bold">
                  Source-Linked Research Findings
                </p>

                <p className="mt-2">
                  {researchFindingsSummary.totalFindings}
                  {" findings · "}
                  {researchFindingsSummary.diseasesCovered}
                  {" diseases covered"}
                </p>

                <p className="mt-1">
                  Modern guideline findings checked:{" "}
                  {researchFindingsSummary.modernGuidelineFindings}
                </p>

                <p className="mt-1">
                  Classical passages awaiting verification:{" "}
                  {researchFindingsSummary.classicalPassagesPending}
                </p>

                <p className="mt-1 text-amber-700 dark:text-amber-400">
                  These counts do not represent
                  clinical approval.
                </p>
              </section>
            )}

            {/* ADDITIONAL RESEARCH VALIDATORS */}

            <section className="mb-6 rounded-xl border border-neutral-300 bg-white p-4 text-xs dark:border-neutral-700 dark:bg-neutral-900">
              <p className="font-bold">
                Classical Research Integrity
              </p>

              <p className="mt-2">
                Research findings, classical verification,
                edition comparisons, and primary-text
                inspections.
              </p>

              <p className="mt-2">
                {additionalResearchErrors.length === 0
                  ? "No structural errors detected"
                  : `${additionalResearchErrors.length} structural error(s)`}
              </p>

              {additionalResearchErrors.length > 0 && (
                <div className="mt-3 max-h-48 space-y-1 overflow-y-auto text-red-700 dark:text-red-400">
                  {additionalResearchErrors.map(
                    (error, index) => (
                      <p key={index}>
                        {error}
                      </p>
                    )
                  )}
                </div>
              )}

              <p className="mt-2 text-amber-700 dark:text-amber-400">
                Structural validation does not
                establish textual accuracy,
                clinical equivalence, or approval.
              </p>
            </section>
          </>
        )}

        {/* ====================================================
            STRICT / BROAD MODE SWITCHER
            ==================================================== */}

        <div className="mb-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setStrictMode(true);
              resetExpandedPanels();
            }}
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
            onClick={() => {
              setStrictMode(false);
              resetExpandedPanels();
            }}
            aria-pressed={!strictMode}
            className={`cursor-pointer rounded-xl border px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              !strictMode
                ? "border-neutral-900 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            }`}
          >
            Broad Match (Matches Any Symptom)
          </button>
        </div>

        <p className="mb-6 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
          Select a body area and symptoms to explore
          possible database matches. Strict and broad
          modes are simple matching rules, not
          validated clinical diagnostic algorithms.
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
            Select symptoms to narrow the reference
            database. Tap a selected filter again
            to remove it.
          </p>

          {/* SYMPTOM PILLS */}

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
              No database candidate matches
              the current selection.
            </p>

            <p className="mx-auto max-w-md text-xs text-neutral-500 sm:text-sm">
              Try Broad Match or remove a filter.
              No match does not exclude any
              medical condition.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setStrictMode(false);
                  resetExpandedPanels();
                }}
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

              const sourceUrl =
                getDiseaseResourceUrl(disease);

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
                      Proposed modern correlation
                      (unverified):{" "}
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
                      Original description
                      (unverified):{" "}
                      {disease.pratyatmaLakshana}
                    </p>

                    {/* ORIGINAL BEDSIDE CLUE */}

                    <p className="mb-5 text-xs italic leading-relaxed text-[#6D28D9] dark:text-violet-400 sm:text-sm">
                      Legacy bedside clue
                      (unverified):{" "}
                      {disease.knockoutClue}
                    </p>

                    {/* ==========================================
                        LEGACY TESTS AND CARE
                        DEVELOPMENT ONLY
                        ========================================== */}

                    {IS_DEVELOPMENT && isExpanded && (
                      <div
                        id={`legacy-${disease.id}`}
                        className="mb-5 mt-4 space-y-3 border-t border-neutral-200 pt-4 dark:border-neutral-800"
                      >
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-300">
                          <strong>
                            Development-only unverified
                            database content.
                          </strong>{" "}
                          These entries must not be
                          used to prescribe treatment,
                          confirm diagnoses, or omit
                          investigations.
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {/* INVESTIGATION REFERENCES */}

                          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900">
                            <span className="mb-1 flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Legacy Investigation
                              References (Unverified)
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
                              Legacy Test-Omission
                              Claims (Unverified)
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
                            Historical database content
                            only. Not a verified
                            prescription or treatment
                            recommendation.
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
                      This is an educational database
                      match, not a confirmed diagnosis.
                      Classical and modern conditions
                      must not be assumed equivalent.
                      Investigation and treatment
                      decisions require qualified
                      clinical assessment.
                    </div>

                    {/* ==========================================
                        CLINICAL EVIDENCE PANEL
                        ========================================== */}

                    <div className="mb-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                      <button
                        type="button"
                        aria-expanded={isEvidenceExpanded}
                        aria-controls={`evidence-${disease.id}`}
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
                        INTERNAL CLINICAL AUDIT
                        DEVELOPMENT ONLY
                        ========================================== */}

                    {IS_DEVELOPMENT && (
                      <div className="mb-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                        <button
                          type="button"
                          aria-expanded={isAuditExpanded}
                          aria-controls={`audit-${disease.id}`}
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
                            Clinical Audit, Corrections
                            & Research
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
                            className="mt-4 space-y-4"
                          >
                            <ClinicalAuditPanel
                              disease={disease}
                            />

                            <ClinicalSafetyGatePanel
                              diseaseId={disease.id}
                            />

                            <ClinicalResearchPanel
                              diseaseId={disease.id}
                            />

                            <ResearchFindingsPanel
                              diseaseId={disease.id}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* ==========================================
                      BOTTOM ACTION BAR
                      ========================================== */}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    {/* DEVELOPMENT-ONLY LEGACY BUTTON */}

                    {IS_DEVELOPMENT && (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`legacy-${disease.id}`}
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
                            ? "HIDE LEGACY TESTS & CARE"
                            : "VIEW LEGACY TESTS & CARE"}
                        </span>

                        {isExpanded ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                      </button>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                      {/* ORIGINAL EXTERNAL SOURCE */}

                      {sourceUrl && (
                        <a
                          href={sourceUrl}
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
                          handleShareWhatsApp(disease)
                        }
                        className="inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-neutral-800 hover:text-[#7C3AED] dark:text-neutral-200"
                      >
                        Share Educational Note
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
