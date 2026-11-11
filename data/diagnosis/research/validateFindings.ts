
import { DISEASE_DATABASE } from "../../diagnosisDatabase";
import { RESEARCH_FINDINGS } from "./verifiedFindings";

export function validateResearchFindings(): string[] {
  const errors: string[] = [];

  const diseaseIds = new Set(
    DISEASE_DATABASE.map((disease) => disease.id)
  );

  const seenIds = new Set<string>();

  RESEARCH_FINDINGS.forEach((finding) => {
    if (seenIds.has(finding.id)) {
      errors.push(`Duplicate finding ID: ${finding.id}`);
    }

    seenIds.add(finding.id);

    if (!diseaseIds.has(finding.diseaseId)) {
      errors.push(
        `Unknown disease: ${finding.diseaseId}`
      );
    }

    if (!finding.finding.trim()) {
      errors.push(
        `Missing finding text: ${finding.id}`
      );
    }

    if (!finding.safetyNote.trim()) {
      errors.push(
        `Missing safety note: ${finding.id}`
      );
    }

    if (!finding.locator.trim()) {
      errors.push(
        `Missing source locator: ${finding.id}`
      );
    }

    try {
      const url = new URL(finding.sourceUrl);

      if (
        url.protocol !== "https:" &&
        url.protocol !== "http:"
      ) {
        errors.push(
          `Unsupported URL protocol: ${finding.id}`
        );
      }
    } catch {
      errors.push(
        `Invalid source URL: ${finding.id}`
      );
    }

    if (
      finding.tradition === "classical_ayurveda" &&
      finding.status === "guideline_checked"
    ) {
      errors.push(
        `Classical finding has modern guideline status: ${finding.id}`
      );
    }

    if (
      finding.tradition === "modern_clinical" &&
      finding.status === "text_located_review_pending"
    ) {
      errors.push(
        `Modern finding has classical review status: ${finding.id}`
      );
    }
  });

  return errors;
}
