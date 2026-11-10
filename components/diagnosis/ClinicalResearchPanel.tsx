
"use client";

import { useMemo } from "react";
import {
  BookOpen,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

import {
  getDiseaseResearch,
} from "../../data/diagnosis/research";

import type {
  ResearchReference,
} from "../../data/diagnosis/research";

interface ClinicalResearchPanelProps {
  diseaseId: string;
}

function ReferenceSection({
  title,
  references,
}: {
  title: string;
  references: ResearchReference[];
}) {
  return (
    <div className="space-y-2">
      <h5 className="text-xs font-bold text-neutral-900 dark:text-white">
        {title}
      </h5>

      {references.length === 0 ? (
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          No references registered yet.
        </p>
      ) : (
        references.map((reference) => (
          <div
            key={reference.id}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-950"
          >
            <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              {reference.title}
            </p>

            <p className="mt-1 text-[11px] text-amber-700 dark:text-amber-400">
              Status:{" "}
              {reference.status.replace(/_/g, " ")}
            </p>

            {reference.locator && (
              <p className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-400">
                Locator: {reference.locator}
              </p>
            )}

            {reference.url && (
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 hover:underline dark:text-violet-400"
              >
                Open source
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default function ClinicalResearchPanel({
  diseaseId,
}: ClinicalResearchPanelProps) {
  const research = useMemo(
    () => getDiseaseResearch(diseaseId),
    [diseaseId]
  );

  if (!research) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
        Research record not yet registered for this disease.
        This does not indicate clinical validation.
      </div>
    );
  }

  return (
    <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-violet-600" />

        <h4 className="text-sm font-extrabold text-neutral-900 dark:text-white">
          Classical & Modern Research
        </h4>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
        <p className="flex items-start gap-2 text-[11px] leading-relaxed text-amber-950 dark:text-amber-200">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />

          Source registration does not establish
          diagnostic equivalence, clinical accuracy,
          or treatment effectiveness. Exact classical
          passages and modern clinical claims require
          independent verification.
        </p>
      </div>

      <ReferenceSection
        title="Classical Ayurvedic References"
        references={research.classicalReferences}
      />

      <ReferenceSection
        title="Modern Clinical References"
        references={research.modernReferences}
      />

      <div className="border-t border-neutral-200 pt-3 dark:border-neutral-800">
        <h5 className="mb-2 text-xs font-bold text-neutral-900 dark:text-white">
          Clinical Research Concerns
        </h5>

        <div className="space-y-2">
          {research.clinicalConcerns.map(
            (concern, index) => (
              <p
                key={index}
                className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                {concern}
              </p>
            )
          )}
        </div>
      </div>

      <p className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
        Clinical approval: Pending
        {" · "}
        Modern equivalence: Not established
      </p>
    </section>
  );
}
