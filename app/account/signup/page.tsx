
"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { FormEvent } from "react";
import type { User as FirebaseUser } from "firebase/auth";
import { createServerSession } from
  "../../../lib/auth/createServerSession";

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

function SignupForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { setTheme } = useTheme();

  const redirectUrl = getSafeRedirect(
    params.get("redirect")
  );

  const isBatmanMode =
    params.get("mode") === "batman";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
        await ensureScholarProfile(
          user,
          preferredName
        );
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
          await completeSignup(result.user);
        }
      })
      .catch((err) => {
        if (!active) return;

        console.error(
          "Signup redirect:",
          err
        );

        setError(
          "Google authentication could not be completed."
        );
        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [completeSignup]);

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

    if (isLoading) return;

    setIsLoading(true);
    setError("");

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
          email.trim(),
          password
        );

      try {
        await updateProfile(result.user, {
          displayName: name.trim(),
        });
      } catch (profileError) {
        console.warn(
          "Display name update pending.",
          profileError
        );
      }

      await completeSignup(
        result.user,
        name.trim()
      );
    } catch (err: unknown) {
      const code =
        typeof err === "object" &&
        err !== null &&
        "code" in err &&
        typeof err.code === "string"
          ? err.code
          : "";

      setShowIntro(false);

      setError(
        code === "auth/email-already-in-use"
          ? "This email is already registered. Please log in."
          : code === "auth/weak-password"
            ? "Choose a stronger password."
            : "Account creation failed. Please try again."
      );

      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      await completeSignup(result.user);
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
            "Google signup redirect:",
            redirectError
          );
        }
      } else {
        console.error(
          "Google signup:",
          err
        );
      }

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
    <div className="relative z-10 w-full max-w-md rounded-2xl border border-surfaceBorder bg-surface p-6 shadow-xl sm:p-8">
      <div className="mb-8 text-center">
        <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
          ATREYA MED • Scholar Registration
        </span>

        <h1 className="mb-2 font-heading text-3xl font-extrabold text-foreground">
          Join ATREYA MED
        </h1>

        <p className="text-sm text-foreground/60">
          Create your account and begin your
          Ayurveda learning journey.
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
        onSubmit={handleEmailSignup}
        className="mb-6 space-y-4"
      >
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
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Full Name"
            className="w-full rounded-lg border border-surfaceBorder bg-background py-3 pl-11 pr-4 text-foreground outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

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
            required
            minLength={6}
            autoComplete="new-password"
            aria-label="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Password (minimum 6 characters)"
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
              Create Scholar Account
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
        onClick={handleGoogleSignup}
        disabled={isLoading}
        className="mb-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-surfaceBorder bg-surface px-4 py-3 font-bold text-foreground transition hover:bg-background disabled:opacity-60"
      >
        <Chrome className="h-5 w-5 text-blue-500" />
        Continue with Google
      </button>

      <p className="text-center text-sm text-foreground/60">
        Already an ATREYA scholar?{" "}
        <Link
          href={loginHref}
          className="font-bold text-primary hover:underline"
        >
          Log in
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

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-primary/5 blur-3xl" />

      <Suspense
        fallback={
          <div className="relative z-10 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        }
      >
        <SignupForm />
      </Suspense>
    </main>
  );
}
