
import type {
  DiseaseProfile,
  SymptomFilter,
} from "../diagnosisDatabase";

export interface DatabaseIssue {
  severity: "error" | "warning";
  location: string;
  message: string;
}

export function validateDiagnosisDatabase(
  diseases: DiseaseProfile[],
  filters: SymptomFilter[]
): DatabaseIssue[] {
  const issues: DatabaseIssue[] = [];
  const diseaseIds = new Set<string>();
  const filterIds = new Set<string>();

  for (const filter of filters) {
    if (filterIds.has(filter.id)) {
      issues.push({
        severity: "error",
        location: `filter:${filter.id}`,
        message: "Duplicate symptom filter ID",
      });
    }

    filterIds.add(filter.id);

    if (!filter.label.trim() || !filter.hindi.trim()) {
      issues.push({
        severity: "error",
        location: `filter:${filter.id}`,
        message: "Missing filter label or Hindi translation",
      });
    }
  }

  for (const disease of diseases) {
    const location = `disease:${disease.id}`;

    if (diseaseIds.has(disease.id)) {
      issues.push({
        severity: "error",
        location,
        message: "Duplicate disease ID",
      });
    }

    diseaseIds.add(disease.id);

    const requiredFields = [
      "sanskritName",
      "hindiName",
      "modernCorrelate",
      "icdCode",
      "doshaDushya",
      "pratyatmaLakshana",
      "knockoutClue",
      "firstLineChikitsa",
    ] as const;

    for (const field of requiredFields) {
      if (!disease[field].trim()) {
        issues.push({
          severity: "error",
          location,
          message: `Missing required field: ${field}`,
        });
      }
    }

    const matchingIds = new Set<string>();

    for (const filterId of disease.matchingFilterIds) {
      if (!filterIds.has(filterId)) {
        issues.push({
          severity: "error",
          location,
          message: `Unknown symptom filter: ${filterId}`,
        });
      }

      if (matchingIds.has(filterId)) {
        issues.push({
          severity: "warning",
          location,
          message: `Duplicate filter association: ${filterId}`,
        });
      }

      matchingIds.add(filterId);
    }

    if (disease.essentialTests.length === 0) {
      issues.push({
        severity: "warning",
        location,
        message: "No investigation guidance provided",
      });
    }

    for (const test of disease.essentialTests) {
      if (!test.name.trim() || !test.reason.trim()) {
        issues.push({
          severity: "error",
          location,
          message: "Incomplete investigation entry",
        });
      }
    }

    for (const test of disease.avoidedTests) {
      if (!test.name.trim() || !test.whyUnnecessary.trim()) {
        issues.push({
          severity: "error",
          location,
          message: "Incomplete avoided-test entry",
        });
      }
    }
  }

  return issues;
}
