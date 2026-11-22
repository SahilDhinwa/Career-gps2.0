
import "server-only";

import { cookies } from "next/headers";
import { getAdminAuth } from "../firebase-admin";

export interface VerifiedAdmin {
  uid: string;
  email: string | null;
  admin: true;
}

export class AdminAuthError extends Error {
  constructor(
    public readonly status: 401 | 403,
    message: string
  ) {
    super(message);
    this.name = "AdminAuthError";
  }
}

export async function requireAdmin(): Promise<VerifiedAdmin> {
  const cookieStore = await cookies();

  const sessionCookie =
    cookieStore.get("atreya_session")?.value;

  if (!sessionCookie) {
    throw new AdminAuthError(
      401,
      "Authentication required."
    );
  }

  const adminAuth = getAdminAuth();

  let decoded;

  try {
    decoded = await adminAuth.verifySessionCookie(
      sessionCookie,
      true
    );
  } catch {
    throw new AdminAuthError(
      401,
      "Invalid or expired session."
    );
  }

  if (decoded.admin !== true) {
    throw new AdminAuthError(
      403,
      "Administrator access required."
    );
  }

  const user = await adminAuth.getUser(decoded.uid);

  if (
    user.disabled ||
    user.customClaims?.admin !== true
  ) {
    throw new AdminAuthError(
      403,
      "Administrator access revoked."
    );
  }

  return {
    uid: user.uid,
    email: user.email ?? null,
    admin: true,
  };
}
