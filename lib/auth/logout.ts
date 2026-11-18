
"use client";

import {
  signOut,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

export async function logout(): Promise<void> {
  const response = await fetch(
    "/api/auth/logout",
    {
      method: "POST",
      credentials: "same-origin",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Server session logout failed."
    );
  }

  await signOut(auth);
}
