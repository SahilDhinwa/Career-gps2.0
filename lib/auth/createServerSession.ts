
import type { User } from "firebase/auth";

export async function createServerSession(
  user: User
): Promise<void> {
  const idToken = await user.getIdToken(true);

  const response = await fetch(
    "/api/auth/session",
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to establish a secure server session."
    );
  }
}
