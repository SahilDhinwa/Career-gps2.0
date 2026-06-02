"use client";

import { Compass, Mail } from "lucide-react";
import { auth, googleProvider, db } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [envStatus, setEnvStatus] = useState(""); // The Key Scanner

  // This runs instantly to check if Vercel successfully handed over the keys
  useEffect(() => {
    const checkKeys = {
      API: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "✅" : "❌",
      DOM: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? "✅" : "❌",
      PROJ: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? "✅" : "❌",
      SEND: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? "✅" : "❌",
      APP: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? "✅" : "❌",
    };
    setEnvStatus(`API:${checkKeys.API} DOM:${checkKeys.DOM} PROJ:${checkKeys.PROJ} SEND:${checkKeys.SEND} APP:${checkKeys.APP}`);
  }, []);

  // THE GHOST BYPASS FUNCTION
  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(""); 

      // 1. Google verifies you perfectly
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 2. We try the Database, but if the network blocks it, we DON'T crash.
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            createdAt: new Date().toISOString(),
            activePathway: "Study Abroad",
            roadmapProgress: {} 
          });
        }
      } catch (dbError) {
        console.warn("Database blocked by phone network, but letting user in anyway!", dbError);
      }

      // 3. BLAST THROUGH TO THE DASHBOARD
      router.push("/study-abroad");

    } catch (error: any) {
      console.error("Login Error:", error);
      setErrorMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      
      {/* KEY SCANNER HUD */}
      <div className="mb-6 text-xs font-mono bg-gray-900 text-green-400 p-3 rounded w-full max-w-md text-center shadow-lg tracking-wider">
        {envStatus || "Scanning keys..."}
      </div>

      <div className="bg-surface border border-surfaceBorder p-10 max-w-md w-full shadow-lg">
        <div className="text-center mb-8">
          <Compass className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="font-heading text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to save your roadmap progress.</p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 text-sm font-bold text-center">
            {errorMessage}
          </div>
        )}

        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full border-2 border-primary py-3 font-bold text-gray-700 hover:border-primaryHover hover:bg-gray-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isLoading ? "Connecting..." : (
              <>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-surfaceBorder"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">OR</span>
            <div className="flex-grow border-t border-surfaceBorder"></div>
          </div>

          <button className="w-full bg-primary text-white py-3 font-bold hover:bg-primaryHover transition-all flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            Continue with Email OTP
          </button>
        </div>
      </div>
    </div>
  );
}
