
import type { User } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";

export function getSafeRedirect(
  requested: string | null
): string {
  if (!requested) return "/profile";

  const value = requested.trim();

  if (
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\") ||
    /[\u0000-\u001F\u007F]/.test(value)
  ) {
    return "/profile";
  }

  try {
    const decoded = decodeURIComponent(value);

    if (
      !decoded.startsWith("/") ||
      decoded.startsWith("//") ||
      decoded.includes("\\")
    ) {
      return "/profile";
    }

    const parsed = new URL(
      value,
      "https://atreya.example"
    );

    if (
      parsed.origin !== "https://atreya.example"
    ) {
      return "/profile";
    }

    return value;
  } catch {
    return "/profile";
  }
}

export async function ensureScholarProfile(
  user: User,
  preferredName?: string
): Promise<void> {
  const reference = doc(db, "users", user.uid);
  const snapshot = await getDoc(reference);

  if (snapshot.exists()) return;

  await setDoc(reference, {
    uid: user.uid,
    email: user.email,
    displayName:
      preferredName?.trim() ||
      user.displayName ||
      "ATREYA Scholar",
    createdAt: new Date().toISOString(),
    isPremium: false,
    roadmapProgress: {},
    checklistProgress: {},
  });
}
