"use client";

import { useState, Suspense } from "react";
import { auth, db, googleProvider } from "../../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, ShieldCheck, Chrome } from "lucide-react";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/profile";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createFirestoreUser = async (user: any, displayName: string | null) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: displayName || "Scholarship Applicant",
          createdAt: new Date().toISOString(),
          isPremium: false,
          roadmapProgress: {},
          checklistProgress: {}
        });
      }
    } catch (dbErr) {
      console.warn("Silent DB creation delayed.");
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      await createFirestoreUser(userCredential.user, name);
      router.push(redirectUrl);
    } catch (err: any) {
      console.error(err);
      setError("Failed to create an account. Password must be 6+ chars.");
      setIsLoading(false);
    } 
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setError("");
    
    let user;
    
    // STEP 1: Handle Auth Safely
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      user = userCredential.user;
    } catch (err: any) {
      console.error("Auth Error:", err);
      setError("Google popup closed or blocked. Please try again.");
      setIsLoading(false);
      return;
    }

    // STEP 2: Handle DB Silently
    await createFirestoreUser(user, user.displayName);
    
    // STEP 3: Teleport!
    router.push(redirectUrl);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-sm shadow-xl border border-surfaceBorder relative z-10">
      <div className="text-center mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-gray-500 font-medium">Join Career GPS and build your roadmap.</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-sm text-sm font-bold mb-6 border border-red-100 text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleEmailSignup} className="space-y-4 mb-6">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            required
            placeholder="Full Name" 
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-sm py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="email" 
            required
            placeholder="Email Address" 
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-sm py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="password" 
            required
            placeholder="Password (Min. 6 characters)" 
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-sm py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-sm hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>Create Account <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </form>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-gray-200 flex-1"></div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Or</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <button 
        onClick={handleGoogleSignup}
        disabled={isLoading}
        type="button"
        className="w-full bg-white text-gray-700 border border-gray-200 font-bold py-3 px-4 rounded-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 mb-6"
      >
        <Chrome className="w-5 h-5 text-blue-500" /> Sign up with Google
      </button>

      <p className="text-center text-sm text-gray-600 font-medium">
        Already have an account?{" "}
        <Link href={`/login?redirect=${redirectUrl}`} className="text-primary font-bold hover:underline">
          Log in
        </Link>
      </p>

      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
        <ShieldCheck className="w-4 h-4 text-success" /> Secure 256-bit Encryption
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warning/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <Suspense fallback={
        <div className="w-full max-w-md bg-white p-8 rounded-sm shadow-xl border border-surfaceBorder flex justify-center py-20">
           <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <SignupForm />
      </Suspense>
    </div>
  );
}
