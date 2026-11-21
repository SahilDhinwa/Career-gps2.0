
import "server-only";

export type CMSKind = "video" | "document";

export type BamsProf =
  | "prof-1"
  | "prof-2"
  | "prof-3";

export type CMSDocumentType =
  | "past_paper"
  | "notes"
  | "template";

export type CMSStatus =
  | "draft"
  | "review"
  | "published";

export type CMSContent =
  | {
      title: string;
      url: string;
      prof: BamsProf;
    }
  | {
      title: string;
      url: string;
      type: CMSDocumentType;
    };

export type CMSValidationResult =
  | {
      success: true;
      content: CMSContent;
    }
  | {
      success: false;
      error: string;
    };

export const CMS_COLLECTIONS: Record<CMSKind, string> = {
  video: "bams_reels",
  document: "bams_assets",
};

export const CMS_SUBMISSIONS_COLLECTION =
  "cms_submissions";

export const CMS_AUDIT_COLLECTION =
  "admin_audit_logs";

export const CMS_PROFS: readonly BamsProf[] = [
  "prof-1",
  "prof-2",
  "prof-3",
];

export const CMS_DOCUMENT_TYPES: readonly CMSDocumentType[] = [
  "past_paper",
  "notes",
  "template",
];

export const CMS_STATUSES: readonly CMSStatus[] = [
  "draft",
  "review",
  "published",
];

// ------------------------------------------
// TYPE GUARDS
// ------------------------------------------

export function isCMSKind(
  value: unknown
): value is CMSKind {
  return value === "video" || value === "document";
}

export function isBamsProf(
  value: unknown
): value is BamsProf {
  return CMS_PROFS.some(
    (prof) => prof === value
  );
}

export function isCMSDocumentType(
  value: unknown
): value is CMSDocumentType {
  return CMS_DOCUMENT_TYPES.some(
    (type) => type === value
  );
}

export function isCMSStatus(
  value: unknown
): value is CMSStatus {
  return CMS_STATUSES.some(
    (status) => status === value
  );
}

export function isCMSDocumentId(
  value: unknown
): value is string {
  return (
    typeof value === "string" &&
    /^[A-Za-z0-9_-]{1,128}$/.test(value)
  );
}

// ------------------------------------------
// URL VALIDATION
// ------------------------------------------

export function isValidCMSURL(
  value: unknown,
  kind: CMSKind
): value is string {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value.length > 2048
  ) {
    return false;
  }

  try {
    const url = new URL(value);

    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.port
    ) {
      return false;
    }

    const host = url.hostname.toLowerCase();

    if (kind === "video") {
      const idPattern = /^[a-zA-Z0-9_-]{11}$/;

      if (host === "youtu.be") {
        return idPattern.test(
          url.pathname.slice(1)
        );
      }

      if (
        ![
          "youtube.com",
          "www.youtube.com",
          "youtube-nocookie.com",
          "www.youtube-nocookie.com",
        ].includes(host)
      ) {
        return false;
      }

      if (url.pathname === "/watch") {
        return idPattern.test(
          url.searchParams.get("v") ?? ""
        );
      }

      return /^\/(?:embed|shorts|live)\/[a-zA-Z0-9_-]{11}\/?$/.test(
        url.pathname
      );
    }

    if (host === "drive.google.com") {
      return /^\/file\/d\/[a-zA-Z0-9_-]+\/?(?:view|preview)?\/?$/.test(
        url.pathname
      );
    }

    if (host === "docs.google.com") {
      return /^\/(?:document|spreadsheets|presentation)\/d\/[a-zA-Z0-9_-]+(?:\/.*)?$/.test(
        url.pathname
      );
    }

    if (host === "firebasestorage.googleapis.com") {
      return url.pathname.startsWith("/v0/b/");
    }

    if (host === "storage.googleapis.com") {
      return url.pathname.length > 2;
    }

    return false;
  } catch {
    return false;
  }
}

// ------------------------------------------
// FIELD ALLOWLIST
// ------------------------------------------

export function hasOnlyCMSFields(
  data: Record<string, unknown>,
  allowed: readonly string[]
): boolean {
  return Object.keys(data).every(
    (key) => allowed.includes(key)
  );
}

export function allowedCMSFields(
  kind: CMSKind,
  operation: "create" | "update"
): readonly string[] {
  const base =
    kind === "video"
      ? ["kind", "title", "url", "prof"]
      : ["kind", "title", "url", "type"];

  return operation === "update"
    ? ["id", ...base]
    : base;
}

// ------------------------------------------
// CONTENT VALIDATION
// ------------------------------------------

export function validateCMSContent(
  data: Record<string, unknown>,
  kind: CMSKind
): CMSValidationResult {
  const title =
    typeof data.title === "string"
      ? data.title.trim()
      : "";

  const url =
    typeof data.url === "string"
      ? data.url.trim()
      : "";

  if (
    title.length < 3 ||
    title.length > 160
  ) {
    return {
      success: false,
      error:
        "Title must contain 3 to 160 characters.",
    };
  }

  if (!isValidCMSURL(url, kind)) {
    return {
      success: false,
      error:
        "Invalid or unsupported resource URL.",
    };
  }

  if (kind === "video") {
    if (!isBamsProf(data.prof)) {
      return {
        success: false,
        error:
          "Invalid BAMS professional year.",
      };
    }

    return {
      success: true,
      content: {
        title,
        url,
        prof: data.prof,
      },
    };
  }

  if (!isCMSDocumentType(data.type)) {
    return {
      success: false,
      error:
        "Invalid study resource category.",
    };
  }

  return {
    success: true,
    content: {
      title,
      url,
      type: data.type,
    },
  };
}

// ------------------------------------------
// STATUS TRANSITIONS
// ------------------------------------------

// These are workflow rules, not authorization.
// Server routes must separately verify permissions.

export function canTransitionCMSStatus(
  from: CMSStatus,
  to: CMSStatus
): boolean {
  const transitions: Record<
    CMSStatus,
    readonly CMSStatus[]
  > = {
    draft: ["review"],
    review: ["draft", "published"],
    published: ["draft"],
  };

  return transitions[from].includes(to);
}
