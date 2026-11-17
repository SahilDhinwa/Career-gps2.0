
import "server-only";

import { cookies } from "next/headers";
import { getAdminAuth } from "../firebase-admin";

export async function requireReviewer() {
  const cookieStore = await cookies();

  const session = cookieStore.get(
    "atreya_session"
  )?.value;

  if (!session) {
    return null;
  }

  try {
    const decoded =
      await getAdminAuth().verifySessionCookie(
        session,
        true
      );

    if (decoded.reviewer !== true) {
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
}
