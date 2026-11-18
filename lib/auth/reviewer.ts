
import "server-only";

import { cookies } from "next/headers";
import { getAdminAuth } from "../firebase-admin";

export type VerifiedReviewer = {
  uid: string;
  email: string | null;
};

export async function requireReviewer(): Promise<VerifiedReviewer> {
  const cookieStore = await cookies();

  const sessionCookie =
    cookieStore.get("atreya_session")?.value;

  if (!sessionCookie) {
    throw new Error("UNAUTHORIZED");
  }

  let decoded;

  try {
    decoded = await getAdminAuth().verifySessionCookie(
      sessionCookie,
      true
    );
  } catch {
    throw new Error("UNAUTHORIZED");
  }

  if (decoded.reviewer !== true) {
    throw new Error("FORBIDDEN");
  }

  return {
    uid: decoded.uid,
    email: decoded.email ?? null,
  };
}
