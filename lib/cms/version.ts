
import "server-only";

import { Timestamp } from "firebase-admin/firestore";

const EXACT_VERSION_PATTERN =
  /^v2:(0|[1-9]\d*):(\d{9})$/;

export function encodeCMSVersion(
  timestamp: Timestamp
): string {
  return (
    `v2:${timestamp.seconds}:` +
    String(timestamp.nanoseconds).padStart(9, "0")
  );
}

export function matchesCMSVersion(
  timestamp: Timestamp,
  version: unknown
): boolean {
  if (typeof version !== "string") {
    return false;
  }

  const match = version.match(
    EXACT_VERSION_PATTERN
  );

  if (match) {
    return (
      Number(match[1]) === timestamp.seconds &&
      Number(match[2]) === timestamp.nanoseconds
    );
  }

  // Legacy ISO versions lack nanosecond precision.
  // Reject rather than incorrectly approve a stale edit.
  return false;
}
