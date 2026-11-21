
import "server-only";

import {
  AdminAuthError,
  requireAdmin,
} from "./admin";

import { getAdminAuth } from "../firebase-admin";

export async function requireCMSReviewer() {
  const admin = await requireAdmin();

  const user = await getAdminAuth().getUser(admin.uid);

  if (
    user.disabled ||
    user.customClaims?.admin !== true ||
    user.customClaims?.reviewer !== true
  ) {
    throw new AdminAuthError(
      "Reviewer access required.",
      403
    );
  }

  return admin;
}
