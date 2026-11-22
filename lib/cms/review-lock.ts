
import "server-only";

import type {
  Firestore,
  Transaction,
} from "firebase-admin/firestore";

import {
  isCMSDocumentId,
  type CMSKind,
} from "./validation";

export const CMS_REVIEW_LOCKS_COLLECTION =
  "cms_review_locks";

export function getCMSReviewLockRef(
  db: Firestore,
  kind: CMSKind,
  targetId: string
) {
  if (!isCMSDocumentId(targetId)) {
    throw new Error("Invalid CMS target ID.");
  }

  return db
    .collection(CMS_REVIEW_LOCKS_COLLECTION)
    .doc(`${kind}_${targetId}`);
}

export function createCMSReviewLock(
  transaction: Transaction,
  ref: ReturnType<typeof getCMSReviewLockRef>,
  submissionId: string,
  actorUid: string,
  operation: "update" | "delete"
) {
  transaction.create(ref, {
    submissionId,
    actorUid,
    operation,
    createdAt:
      new Date(),
  });
}
