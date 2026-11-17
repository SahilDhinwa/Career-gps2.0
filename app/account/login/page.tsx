
"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { FormEvent } from "react";
import type { User } from "firebase/auth";
import { createServerSession } from
  "../../../lib/auth/createServerSession";

import {
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import {
  ArrowRight,
  Chrome,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useTheme } from "next-themes";

import {
  auth,
  googleProvider,
} from "../../../lib/firebase";

import {
  ensureScholarProfile,
  getSafeRedirect,
} from "../../../lib/auth/account";

import CinematicIntro from "../../../components/CinematicIntro";

const INTRO_DURATION = 10000;

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { theme, setTheme } = useTheme();

  const redirectUrl = getSafeRedirect(
    params.get("redirect")
  );

  const isBatmanMode =
    params.get("mode") === "batman" ||
    theme === "batman";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] =
    useState(false);
  const [showIntro, setShowIntro] =
    useState(false);

  const timerRef = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const finishingRef = useRef(false);

  const completeLogin = useCallback(
    async (user: User) => {
      if (finishingRef.current) return;

      finishingRef.current = true;
      setIsLoading(true);
      setError("");
      setShowIntro(true);

      if (isBatmanMode) {
        setTheme("batman");
      }

      const started = Date.now();

      try {
        await ensureScholarProfile(user);
      } catch (err) {
        console.warn(
          "Scholar profile synchronization pending.",
          err
        );
      }

      const remaining = Math.max(
        0,
        INTRO_DURATION - (Date.now() - started)
      );

      timerRef.current = setTimeout(() => {
        router.replace(redirectUrl);
      }, remaining);
    },
    [isBatmanMode, redirectUrl, router, setTheme]
  );

  useEffect(() => {
    let active = true;

    getRedirectResult(auth)
      .then(async (result) => {
        if (active && result?.user) {
          await completeLogin(result.user);
        }
      })
      .catch((err) => {
        if (!active) return;

        console.error(
          "Firebase redirect login:",
          err
        );

        setError(
          err?.code === "auth/unauthorized-domain"
            ? "This website domain is not authorized in Firebase Authentication."
            : "Google sign-in could not be completed. Please try again."
        );
        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [completeLogin]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleEmailLogin = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const result =
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

      await completeLogin(result.user);
    } catch (err) {
      console.error("Email login:", err);

      setShowIntro(false);
      setError(
        "Unable to sign in. Check your credentials and try again."
      );
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      await completeLogin(result.user);
    } catch (err: unknown) {
      const code =
        typeof err === "object" &&
        err !== null &&
        "code" in err &&
        typeof err.code === "string"
          ? err.code
          : "";

      if (
        code === "auth/popup-blocked" ||
        code ===
          "auth/operation-not-supported-in-this-environment"
      ) {
        try {
          await signInWithRedirect(
            auth,
            googleProvider
          );
          return;
        } catch (redirectError) {
          console.error(
            "Google redirect:",
            redirectError
          );
        }
      } else {
        console.error("Google login:", err);
      }

      setError(
        code === "auth/unauthorized-domain"
          ? "Add this website domain to Firebase Authentication authorized domains."
          : code === "auth/popup-closed-by-user" ||
              code === "auth/cancelled-popup-request"
            ? "Google sign-in was cancelled."
            : "Google sign-in failed. Please try again."
      );

      setIsLoading(false);
    }
  };

  const signupHref =
    `/account/signup?redirect=${encodeURIComponent(
      redirectUrl
    )}${isBatmanMode ? "&mode=batman" : ""}`;

  return (
    <div className="relative z-10 w-full max-w-md rounded-2xl border border-surfaceBorder bg-surface p-6 shadow-xl sm:p-8">
      <div className="mb-8 text-center">
        <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
          ATREYA MED • Scholar Access
        </span>

        <h1 className="mb-2 font-heading text-3xl font-extrabold text-foreground">
          Welcome Back
        </h1>

        <p className="text-sm text-foreground/60">
          Continue your Ayurveda learning journey.
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-900/50 bg-red-950/20 p-3 text-center text-sm text-red-500"
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleEmailLogin}
        className="mb-6 space-y-4"
      >
        <div className="relative">
          <Mail
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40"
          />

          <input
            type="email"
            autoComplete="email"
            aria-label="Email address"
            required
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Email Address"
            className="w-full rounded-lg border border-surfaceBorder bg-background py-3 pl-11 pr-4 text-foreground outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="relative">
          <Lock
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40"
          />

          <input
            type="password"
            autoComplete="current-password"
            aria-label="Password"
            required
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Password"
            className="w-full rounded-lg border border-surfaceBorder bg-background py-3 pl-11 pr-4 text-foreground outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-bold text-white transition hover:bg-primaryHover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              Log In
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-surfaceBorder" />
        <span className="text-xs font-bold uppercase text-foreground/40">
          Or
        </span>
        <div className="h-px flex-1 bg-surfaceBorder" />
      </div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="mb-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-surfaceBorder bg-surface px-4 py-3 font-bold text-foreground transition hover:bg-background disabled:opacity-60"
      >
        <Chrome className="h-5 w-5 text-blue-500" />
        Continue with Google
      </button>

      <p className="text-center text-sm text-foreground/60">
        New to ATREYA MED?{" "}
        <Link
          href={signupHref}
          className="font-bold text-primary hover:underline"
        >
          Create an account
        </Link>
      </p>

      <div className="mt-8 flex items-center justify-center gap-2 border-t border-surfaceBorder pt-6 text-xs text-foreground/50">
        <ShieldCheck className="h-4 w-4" />
        Authentication powered by Firebase
      </div>

      <CinematicIntro
        isActive={showIntro}
        mode={
          isBatmanMode ? "batman" : "standard"
        }
      />
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-3xl" />

      <Suspense
        fallback={
          <div className="relative z-10 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        }
      >
        <LoginForm />
      </Suspense>
    </main>
  );
}
