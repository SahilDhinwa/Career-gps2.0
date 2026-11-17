
"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  FormEvent,
} from "react";

import type {
  User as FirebaseUser,
} from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";

import {
  ArrowRight,
  Chrome,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import Link from "next/link";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  useTheme,
} from "next-themes";

import {
  auth,
  googleProvider,
} from "../../../lib/firebase";

import {
  ensureScholarProfile,
  getSafeRedirect,
} from "../../../lib/auth/account";

import {
  createServerSession,
} from "../../../lib/auth/createServerSession";

import CinematicIntro from "../../../components/CinematicIntro";

const INTRO_DURATION = 10000;

function getAuthErrorCode(error: unknown): string {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
  ) {
    return error.code;
  }

  return "";
}

function SignupForm() {
  const router = useRouter();
  const params = useSearchParams();

  const {
    setTheme,
  } = useTheme();

  const redirectUrl = getSafeRedirect(
    params.get("redirect")
  );

  const isBatmanMode =
    params.get("mode") === "batman";

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const [showIntro, setShowIntro] =
    useState(false);

  const finishingRef = useRef(false);

  const timerRef = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const completeSignup = useCallback(
    async (
      user: FirebaseUser,
      preferredName?: string
    ) => {
      if (finishingRef.current) {
        return;
      }

      finishingRef.current = true;

      setIsLoading(true);
      setError("");

      const started = Date.now();

      try {
        // Establish server authentication first.
        await createServerSession(user);
      } catch (sessionError) {
        console.error(
          "Server session creation failed:",
          sessionError
        );

        finishingRef.current = false;
        setShowIntro(false);
        setIsLoading(false);

        setError(
          "Secure session could not be established. Please sign in again."
        );

        return;
      }

      // Preserve existing Firestore scholar profile.
      try {
        await ensureScholarProfile(
          user,
          preferredName
        );
      } catch (profileError) {
        console.warn(
          "Scholar profile synchronization pending.",
          profileError
        );
      }

      // Preserve Batman mode.
      if (isBatmanMode) {
        setTheme("batman");
      }

      // Start intro only after authentication.
      setShowIntro(true);

      const remaining = Math.max(
        0,
        INTRO_DURATION - (Date.now() - started)
      );

      timerRef.current = setTimeout(() => {
        router.replace(redirectUrl);
      }, remaining);
    },
    [
      isBatmanMode,
      redirectUrl,
      router,
      setTheme,
    ]
  );

  // Handle Google redirect return.
  useEffect(() => {
    let active = true;

    getRedirectResult(auth)
      .then(async (result) => {
        if (
          active &&
          result?.user
        ) {
          await completeSignup(result.user);
        }
      })
      .catch((redirectError) => {
        if (!active) {
          return;
        }

        console.error(
          "Signup redirect authentication:",
          redirectError
        );

        const code =
          getAuthErrorCode(redirectError);

        setError(
          code === "auth/unauthorized-domain"
            ? "This domain must be authorized in Firebase Authentication."
            : "Google authentication could not be completed."
        );

        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [completeSignup]);

  // Cleanup pending redirect timer.
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleEmailSignup = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError("Please enter your full name.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      setIsLoading(false);
      return;
    }

    try {
      const result =
        await createUserWithEmailAndPassword(
          auth,
          trimmedEmail,
          password
        );

      try {
        await updateProfile(result.user, {
          displayName: trimmedName,
        });
      } catch (profileError) {
        console.warn(
          "Firebase display name update pending.",
          profileError
        );
      }

      await completeSignup(
        result.user,
        trimmedName
      );
    } catch (signupError) {
      console.error(
        "Email signup:",
        signupError
      );

      const code =
        getAuthErrorCode(signupError);

      setShowIntro(false);
      setIsLoading(false);

      setError(
        code === "auth/email-already-in-use"
          ? "This email is already registered. Please log in."
          : code === "auth/weak-password"
            ? "Choose a stronger password."
            : "Account creation failed. Please try again."
      );
    }
  };

  const handleGoogleSignup = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      await completeSignup(result.user);
    } catch (googleError) {
      const code =
        getAuthErrorCode(googleError);

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
            "Google signup redirect fallback:",
            redirectError
          );

          setError(
            "Google redirect could not be started."
          );

          setIsLoading(false);

          return;
        }
      }

      console.error(
        "Google signup:",
        googleError
      );

      setError(
        code === "auth/unauthorized-domain"
          ? "This domain must be authorized in Firebase Authentication."
          : code === "auth/popup-closed-by-user" ||
              code === "auth/cancelled-popup-request"
            ? "Google sign-in was cancelled."
            : "Google authentication failed. Please try again."
      );

      setIsLoading(false);
    }
  };

  const loginHref =
    `/account/login?redirect=${encodeURIComponent(
      redirectUrl
    )}${isBatmanMode ? "&mode=batman" : ""}`;

  return (
    <div className="relative z-10 w-full max-w-md rounded-2xl border border-surfaceBorder bg-surface p-6 shadow-xl transition-colors duration-300 sm:p-8">
      {/* BRAND HEADER */}

      <div className="mb-8 select-none text-center">
        <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
          ATREYA MED • Scholar Registration
        </span>

        <h1 className="mb-2 font-heading text-3xl font-extrabold text-foreground">
          Join ATREYA MED
        </h1>

        <p className="text-sm font-medium text-foreground/60">
          Create your account and begin your
          Ayurveda learning journey.
        </p>
      </div>

      {/* ERROR MESSAGE */}

      {error && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-900/50 bg-red-950/20 p-3 text-center text-sm font-medium text-red-500"
        >
          {error}
        </div>
      )}

      {/* EMAIL SIGNUP */}

      <form
        onSubmit={handleEmailSignup}
        className="mb-6 space-y-4"
      >
        {/* FULL NAME */}

        <div className="relative">
          <UserRound
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40"
          />

          <input
            type="text"
            required
            autoComplete="name"
            aria-label="Full name"
            placeholder="Full Name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            className="w-full rounded-lg border border-surfaceBorder bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* EMAIL */}

        <div className="relative">
          <Mail
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40"
          />

          <input
            type="email"
            required
            autoComplete="email"
            aria-label="Email address"
            placeholder="Email Address"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            className="w-full rounded-lg border border-surfaceBorder bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* PASSWORD */}

        <div className="relative">
          <Lock
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40"
          />

          <input
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            aria-label="Password"
            placeholder="Password (minimum 6 characters)"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className="w-full rounded-lg border border-surfaceBorder bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-bold text-white transition-all hover:bg-primaryHover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              Create Scholar Account
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {/* DIVIDER */}

      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-surfaceBorder" />

        <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">
          Or
        </span>

        <div className="h-px flex-1 bg-surfaceBorder" />
      </div>

      {/* GOOGLE SIGNUP */}

      <button
        type="button"
        onClick={handleGoogleSignup}
        disabled={isLoading}
        className="mb-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-surfaceBorder bg-surface px-4 py-3 font-bold text-foreground transition-all hover:bg-background disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Chrome className="h-5 w-5 text-blue-500" />
        Continue with Google
      </button>

      {/* LOGIN LINK */}

      <p className="text-center text-sm font-medium text-foreground/60">
        Already an ATREYA scholar?{" "}
        <Link
          href={loginHref}
          className="font-bold text-primary hover:underline"
        >
          Log in
        </Link>
      </p>

      {/* SECURITY FOOTER */}

      <div className="mt-8 flex items-center justify-center gap-2 border-t border-surfaceBorder pt-6 text-xs font-medium text-foreground/50">
        <ShieldCheck className="h-4 w-4" />
        Authentication powered by Firebase
      </div>

      {/* CINEMATIC INTRO */}

      <CinematicIntro
        isActive={showIntro}
        mode={
          isBatmanMode
            ? "batman"
            : "standard"
        }
      />
    </div>
  );
}

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6 transition-colors duration-300">
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />

      <Suspense
        fallback={
          <div className="relative z-10 flex w-full max-w-md justify-center rounded-2xl border border-surfaceBorder bg-surface p-8 py-20 shadow-xl">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        }
      >
        <SignupForm />
      </Suspense>
    </main>
  );
}
