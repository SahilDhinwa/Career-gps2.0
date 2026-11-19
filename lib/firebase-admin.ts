
import "server-only";

import {
  cert,
  getApps,
  initializeApp,
  type App,
} from "firebase-admin/app";

import { getAuth } from "firebase-admin/auth";

import {
  getFirestore,
  type Firestore,
} from "firebase-admin/firestore";

const APP_NAME = "atreya-med-admin";

// Your existing named Firestore database.
const DATABASE_ID = "default";

function getAdminApp(): App {
  const existing = getApps().find(
    (app) => app.name === APP_NAME
  );

  if (existing) {
    return existing;
  }

  const projectId =
    process.env.FIREBASE_PROJECT_ID;

  const clientEmail =
    process.env.FIREBASE_CLIENT_EMAIL;

  const privateKey =
    process.env.FIREBASE_PRIVATE_KEY
      ?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Firebase Admin environment variables are missing."
    );
  }

  return initializeApp(
    {
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    },
    APP_NAME
  );
}

export function getAdminAuth() {
  return getAuth(getAdminApp());
}

export function getAdminDb(): Firestore {
  return getFirestore(
    getAdminApp(),
    DATABASE_ID
  );
}
