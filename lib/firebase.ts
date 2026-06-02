import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

let app;
let firestoreDb;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  // Keep the 5G armor permanently on
  firestoreDb = initializeFirestore(app, {
    experimentalForceLongPolling: true
  });
} else {
  app = getApp();
  firestoreDb = getFirestore(app);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = firestoreDb;
