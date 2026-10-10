"use client";

import { useState, Suspense } from "react";
import { auth, db, googleProvider } from "../../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Mail, Lock, ArrowRight, ShieldCheck, Chrome } from "lucide-react";
import CinematicIntro from "../../components/CinematicIntro";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/profile";
  
  // LOGIC UPGRADE: Pull active theme to fix the VG Logo bug
  const { theme, setTheme } = useTheme(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  // LOGIC UPGRADE: Checks both URL AND active theme state
  const isBatmanMode = searchParams.get("mode") === "batman" || theme === "batman";

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // INSTANT BOOT: Launch standard state animations before awaiting promise
    setShowIntro(true);
    if (isBatmanMode) setTheme("batman");

    const startTime = Date.now(); // Start 5-second tracking sequence

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 5000 - elapsed);

      setTimeout(() => {
        router.push(redirectUrl);
      }, remainingTime);

    } catch (err: any) {
      console.error(err);
      setShowIntro(false);
      // RESTORED: Your original safety rollback line
      if (isBatmanMode) setTheme("dark");
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");
    let user;

    try {
      const result = await signInWithPopup(auth, googleProvider);
      user = result.user;
    } catch (err: any) {
      console.error("Auth Error:", err);
      setError("Google popup closed or blocked. Please try again.");
      setIsLoading(false);
      return; 
    }

    setShowIntro(true);
    if (isBatmanMode) setTheme("batman");
    const startTime = Date.now();

    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "Scholarship Applicant",
          createdAt: new Date().toISOString(),
          isPremium: false,
          roadmapProgress: {},
          checklistProgress: {}
        });
      }
    } catch (dbErr) {
      console.warn("Database sync delayed, but user is authenticated.");
    }
    
    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, 5000 - elapsed);
    setTimeout(() => {
      router.push(redirectUrl);
    }, remainingTime);
  };

  return (
    <div className="w-full max-w-md bg-surface p-8 rounded-sm shadow-xl border border-surfaceBorder relative z-10 transition-colors duration-300">
      <div className="text-center mb-8 select-none">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-foreground/60 font-medium">Log in to access your roadmap and assets.</p>
      </div>

      {error && (
        <div className="bg-red-950/30 text-red-500 p-3 rounded-sm text-sm font-bold mb-6 border border-red-900/50 text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
          <input 
            type="email" 
            required
            placeholder="Email Address" 
            className="w-full bg-background border border-surfaceBorder text-foreground placeholder-foreground/40 rounded-sm py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
          <input 
            type="password" 
            required
            placeholder="Password" 
            className="w-full bg-background border border-surfaceBorder text-foreground placeholder-foreground/40 rounded-sm py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-sm hover:bg-primaryHover transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70 cursor-pointer"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>Log In <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </form>

      <div className="flex items-center gap-4 mb-6 select-none">
        <div className="h-px bg-surfaceBorder flex-1"></div>
        <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Or</span>
        <div className="h-px bg-surfaceBorder flex-1"></div>
      </div>

      <button 
        onClick={handleGoogleLogin}
        disabled={isLoading}
        type="button"
        className="w-full bg-surface text-foreground border border-surfaceBorder font-bold py-3 px-4 rounded-sm hover:bg-background transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 mb-6 cursor-pointer"
      >
        <Chrome className="w-5 h-5 text-blue-500" /> Continue with Google
      </button>

      <p className="text-center text-sm text-foreground/60 font-medium animate-fadeIn select-none">
        Don&apos;t have an account?{" "}
        <Link href={`/signup?mode=${isBatmanMode ? "batman" : ""}&redirect=${redirectUrl}`} className="text-primary font-bold hover:underline">
          Sign up
        </Link>
      </p>

      <div className="mt-8 pt-6 border-t border-surfaceBorder flex items-center justify-center gap-2 text-xs text-foreground/40 font-medium select-none">
        <ShieldCheck className="w-4 h-4 text-success" /> Secure 256-bit Encryption
      </div>

      <CinematicIntro isActive={showIntro} mode={isBatmanMode ? "batman" : "standard"} />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warning/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <Suspense fallback={
        <div className="w-full max-w-md bg-surface p-8 rounded-sm shadow-xl border border-surfaceBorder flex justify-center py-20 relative z-10">
           <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}
