
import {
  initializeApp,
  getApps,
  getApp,
} from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Reuse the existing Firebase application.
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Firebase Authentication.
export const auth = getAuth(app);

// Google Authentication.
export const googleProvider = new GoogleAuthProvider();

// Explicitly connect to the named Firestore database.
// Database ID: default (without parentheses).
export const db = getFirestore(app, "default");
