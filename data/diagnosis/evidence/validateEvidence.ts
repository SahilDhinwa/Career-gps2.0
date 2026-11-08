
import type {
  DiseaseEvidenceRecord,
  EvidenceSource,
} from "./types";

export function validateEvidenceRegistry(
  records: DiseaseEvidenceRecord[],
  sources: EvidenceSource[],
  validDiseaseIds: string[]
): string[] {
  const errors: string[] = [];
  const sourceIds = new Set<string>();
  const diseaseIds = new Set<string>();
  const claimIds = new Set<string>();
  const validIds = new Set(validDiseaseIds);

  for (const source of sources) {
    if (sourceIds.has(source.id)) {
      errors.push(`Duplicate source: ${source.id}`);
    }
    sourceIds.add(source.id);

    if (!source.title.trim() || !source.publisher.trim()) {
      errors.push(`Incomplete source: ${source.id}`);
    }
  }

  for (const record of records) {
    if (!validIds.has(record.diseaseId)) {
      errors.push(`Unknown disease: ${record.diseaseId}`);
    }

    if (diseaseIds.has(record.diseaseId)) {
      errors.push(`Duplicate disease record: ${record.diseaseId}`);
    }
    diseaseIds.add(record.diseaseId);

    for (const claim of record.claims) {
      if (claimIds.has(claim.id)) {
        errors.push(`Duplicate claim: ${claim.id}`);
      }
      claimIds.add(claim.id);

      if (claim.diseaseId !== record.diseaseId) {
        errors.push(`Disease mismatch: ${claim.id}`);
      }

      if (!claim.statement.trim()) {
        errors.push(`Empty claim: ${claim.id}`);
      }

      if (
        claim.assessment === "supported" &&
        claim.citations.length === 0
      ) {
        errors.push(`Supported claim lacks citation: ${claim.id}`);
      }

      if (
        claim.review.status === "clinician_reviewed" &&
        (!claim.review.reviewerName?.trim() ||
          !claim.review.reviewerQualification?.trim() ||
          !claim.review.reviewedAt)
      ) {
        errors.push(`Incomplete clinical review: ${claim.id}`);
      }

      for (const citation of claim.citations) {
        if (!sourceIds.has(citation.sourceId)) {
          errors.push(
            `Unknown source ${citation.sourceId} in ${claim.id}`
          );
        }

        if (!citation.locator.trim()) {
          errors.push(`Missing citation locator: ${claim.id}`);
        }
      }
    }
  }

  for (const id of validIds) {
    if (!diseaseIds.has(id)) {
      errors.push(`Missing evidence record: ${id}`);
    }
  }

  return errors;
}
