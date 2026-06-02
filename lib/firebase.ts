import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// WE ARE HARDCODING THIS TO BYPASS VERCEL CACHE AND INVISIBLE TYPOS
const firebaseConfig = {
  apiKey: "AIzaSyDayZCAU8jD5YaJ9nzN07uf70fEOfXNuwE",
  authDomain: "career-gps-16af6.firebaseapp.com",
  projectId: "career-gps-16af6",
  storageBucket: "career-gps-16af6.firebasestorage.app",
  messagingSenderId: "167598116710",
  appId: "1:167598116710:web:22d605229f5fc4b47f42a7"
};

// Clean initialization without Next.js double-rendering issues
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
