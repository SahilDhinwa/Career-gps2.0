
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

initializeApp({
  credential: applicationDefault(),
});

const email = process.argv[2];

if (!email) {
  throw new Error("Provide the reviewer email.");
}

const auth = getAuth();
const user = await auth.getUserByEmail(email);

await auth.setCustomUserClaims(user.uid, {
  ...user.customClaims,
  reviewer: true,
});

console.log("Reviewer permission assigned:", user.uid);
