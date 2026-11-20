
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Brain,
  Camera,
  ChevronRight,
  ClipboardList,
  Crown,
  FlaskConical,
  GraduationCap,
  LibraryBig,
  Lock,
  LogOut,
  Moon,
  ShieldCheck,
  Stethoscope,
  Sun,
  Terminal,
  Unlock,
  UserRound,
  Crosshair,
} from "lucide-react";

import { db } from "../../lib/firebase";
import { logout } from "../../lib/auth/logout";
import { useAuth } from "../../context/AuthContext";
import PremiumPaymentButton from "../../components/PremiumPaymentButton";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 250;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

const LEARNING_MODULES = [
  {
    id: "bams",
    title: "BAMS Learning Hub",
    description:
      "Explore your Ayurveda learning environment, academic resources, and subject materials.",
    href: "/bams-hub",
    icon: GraduationCap,
    tag: "ACADEMIC",
  },
  {
    id: "diagnosis",
    title: "Clinical Diagnosis Hub",
    description:
      "Study differential diagnosis, classical lakshana, and clinical reasoning.",
    href: "/diagnosis-hub",
    icon: Stethoscope,
    tag: "CLINICAL",
  },
  {
    id: "science",
    title: "Science Vault",
    description:
      "Explore scientific concepts and the research-oriented side of Ayurveda.",
    href: "/atreya/science-vault",
    icon: FlaskConical,
    tag: "RESEARCH",
  },
  {
    id: "daily-regimen",
    title: "Daily Regimen",
    description:
      "Explore Dinacharya and its classical foundations.",
    href: "/atreya/daily-regimen",
    icon: BookOpen,
    tag: "AYURVEDA",
  },
] as const;

const RESOURCE_MODULES = [
  {
    title: "Study Resources",
    description:
      "Browse educational materials available in the BAMS Hub.",
    href: "/bams-hub",
    icon: LibraryBig,
  },
  {
    title: "Clinical Learning",
    description:
      "Access the differential diagnosis learning interface.",
    href: "/diagnosis-hub",
    icon: ClipboardList,
  },
  {
    title: "Gut–Brain Pharmacology",
    description:
      "Explore the relationship between traditional knowledge and modern science.",
    href: "/atreya/gut-brain-pharmacology",
    icon: Brain,
  },
] as const;

const OPERATIVES = [
  {
    id: "apex",
    name: "Apex Knight",
    role: "TIER IV // COMMAND",
    directive:
      "Administrator command or premium ATREYA learning vault.",
    actionLabel: "ACCESS COMMAND",
    icon: Terminal,
  },
  {
    id: "clinical",
    name: "Clinical Operative",
    role: "TIER III // CLINICAL",
    directive:
      "Clinical reasoning, differential diagnosis and diagnostic learning.",
    actionLabel: "OPEN DIAGNOSIS",
    icon: Stethoscope,
  },
  {
    id: "scholar",
    name: "Ayurveda Scholar",
    role: "TIER II // ACADEMIC",
    directive:
      "BAMS academic learning and educational exploration.",
    actionLabel: "ENTER BAMS HUB",
    icon: GraduationCap,
  },
  {
    id: "research",
    name: "Research Initiate",
    role: "TIER I // DISCOVERY",
    directive:
      "Explore scientific knowledge and interdisciplinary learning.",
    actionLabel: "EXPLORE SCIENCE",
    icon: FlaskConical,
  },
] as const;

function getImageDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    const cleanup = () => URL.revokeObjectURL(objectUrl);

    image.onerror = () => {
      cleanup();
      reject(new Error("Unable to decode image."));
    };

    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Canvas is unavailable.");
        }

        const scale = Math.min(
          1,
          MAX_IMAGE_DIMENSION / image.naturalWidth,
          MAX_IMAGE_DIMENSION / image.naturalHeight
        );

        canvas.width = Math.max(
          1,
          Math.round(image.naturalWidth * scale)
        );

        canvas.height = Math.max(
          1,
          Math.round(image.naturalHeight * scale)
        );

        context.drawImage(
          image,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const result = canvas.toDataURL(
          "image/jpeg",
          0.6
        );

        cleanup();
        resolve(result);
      } catch (error) {
        cleanup();
        reject(error);
      }
    };

    image.src = objectUrl;
  });
}

export default function UserProfile() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const {
    user,
    userData,
    isPremium,
    isLoading,
    refreshUserData,
  } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [isVerifiedAdmin, setIsVerifiedAdmin] =
    useState(false);
  const [profilePic, setProfilePic] =
    useState<string | null>(null);
  const [isUploading, setIsUploading] =
    useState(false);
  const [isLoggingOut, setIsLoggingOut] =
    useState(false);
  const [selectedOperative, setSelectedOperative] =
    useState("apex");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoading && !user && !isLoggingOut) {
      router.replace(
        "/account/login?redirect=%2Fprofile"
      );
    }
  }, [isLoading, user, isLoggingOut, router]);

  useEffect(() => {
    if (!user) {
      setProfilePic(null);
      return;
    }

    setProfilePic(
      userData?.photoURL || user.photoURL || null
    );
  }, [user, userData]);

  useEffect(() => {
    if (!user || isLoading) {
      setIsVerifiedAdmin(false);
      return;
    }

    const controller = new AbortController();

    const verifyAdmin = async () => {
      setIsVerifiedAdmin(false);

      try {
        const response = await fetch(
          "/api/admin/session",
          {
            credentials: "same-origin",
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (!response.ok) return;

        const result: unknown = await response.json();

        if (
          !controller.signal.aborted &&
          result !== null &&
          typeof result === "object" &&
          "authenticated" in result &&
          "admin" in result &&
          result.authenticated === true &&
          result.admin === true
        ) {
          setIsVerifiedAdmin(true);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(
            "Admin verification failed:",
            error
          );
        }
      }
    };

    void verifyAdmin();

    return () => controller.abort();
  }, [user?.uid, isLoading]);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);
    setIsVerifiedAdmin(false);

    try {
      await logout();
      setTheme("dark");
      router.replace("/account/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Unable to sign out. Please try again.");
      setIsLoggingOut(false);
    }
  };

  const handleImageUpload = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file || !user || isUploading) return;

    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      alert("Select a JPEG, PNG, or WebP image.");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      alert("Image must be smaller than 2 MB.");
      return;
    }

    setIsUploading(true);

    try {
      const compressedBase64 =
        await getImageDataUrl(file);

      if (compressedBase64.length > 700000) {
        throw new Error("Compressed image is too large.");
      }

      await setDoc(
        doc(db, "users", user.uid),
        { photoURL: compressedBase64 },
        { merge: true }
      );

      setProfilePic(compressedBase64);

      try {
        const cacheKey = `veblen_cache_${user.uid}`;
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
          const parsed: unknown = JSON.parse(cached);

          if (
            parsed &&
            typeof parsed === "object" &&
            !Array.isArray(parsed)
          ) {
            localStorage.setItem(
              cacheKey,
              JSON.stringify({
                ...parsed,
                photoURL: compressedBase64,
              })
            );
          }
        }
      } catch (error) {
        console.warn("Cache update skipped:", error);
      }

      try {
        await refreshUserData?.();
      } catch (error) {
        console.warn("Profile refresh pending:", error);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Unable to save the profile picture.");
    } finally {
      setIsUploading(false);
    }
  };

  const isBatman = mounted && theme === "batman";

  const activeOperative =
    OPERATIVES.find(
      (item) => item.id === selectedOperative
    ) || OPERATIVES[0];

  const apexUnlocked = isVerifiedAdmin || isPremium;

  const activeRoute =
    selectedOperative === "apex"
      ? isVerifiedAdmin
        ? "/admin"
        : "/dashboard/vault"
      : selectedOperative === "clinical"
        ? "/diagnosis-hub"
        : selectedOperative === "scholar"
          ? "/bams-hub"
          : "/atreya/science-vault";

  const activeUnlocked =
    selectedOperative !== "apex" || apexUnlocked;

  if (isLoading || (!user && !isLoggingOut)) {
    return (
      <main className="min-h-screen bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl animate-pulse space-y-8">
          <div className="h-48 rounded-sm bg-surface/70" />
          <div className="h-80 rounded-sm bg-surface/70" />
        </div>
      </main>
    );
  }

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${
        isBatman ? "bg-transparent" : "bg-background"
      }`}
    >
      <style>{`
        .atreya-profile-pattern {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 15% 15%, rgba(180,83,9,.08), transparent 35%),
            radial-gradient(circle at 85% 85%, rgba(212,175,55,.07), transparent 40%);
        }
      `}</style>

      {!isBatman && (
        <div className="atreya-profile-pattern" />
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* PROFILE HEADER */}
        <section className="mb-8 flex flex-col items-center justify-between gap-8 rounded-sm border border-surfaceBorder bg-surface/80 p-6 shadow-xl backdrop-blur-md md:flex-row md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="relative">
              <button
                type="button"
                disabled={isUploading}
                onClick={() =>
                  fileInputRef.current?.click()
                }
                aria-label="Change profile picture"
                className="group relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-surface bg-background shadow-xl disabled:opacity-50"
              >
                {profilePic ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound className="h-12 w-12 text-foreground/30" />
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </button>

              <button
                type="button"
                disabled={isUploading}
                onClick={() =>
                  fileInputRef.current?.click()
                }
                aria-label="Upload profile picture"
                className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-white shadow-md"
              >
                <Camera size={15} />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                ATREYA MED SCHOLAR PROFILE
              </p>

              <h1 className="font-heading text-3xl font-bold text-foreground">
                {userData?.displayName ||
                  user?.displayName ||
                  "ATREYA Scholar"}
              </h1>

              <p className="mt-2 break-all text-sm text-foreground/60">
                {user?.email}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="inline-flex items-center gap-2 rounded-sm border border-surfaceBorder bg-background/50 px-3 py-1.5 text-xs font-bold text-foreground/70">
                  <ShieldCheck size={14} />
                  Scholar Account
                </span>

                {isPremium && (
                  <span className="inline-flex items-center gap-2 rounded-sm border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-500">
                    <Crown size={14} />
                    Premium
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 md:w-auto">
            {isVerifiedAdmin && (
              <button
                type="button"
                onClick={() => router.push("/admin")}
                className="flex items-center justify-center gap-2 rounded-sm border border-red-900/50 bg-red-950/30 px-5 py-3 font-bold text-red-500 hover:bg-red-900/40"
              >
                <Terminal size={17} />
                Batcomputer
              </button>
            )}

            {mounted && (
              <button
                type="button"
                onClick={() =>
                  setTheme(
                    theme === "dark" ? "light" : "dark"
                  )
                }
                className="flex items-center justify-center gap-2 rounded-sm border border-surfaceBorder bg-background/40 px-5 py-3 font-bold text-foreground hover:bg-foreground/5"
              >
                {theme === "dark" ? (
                  <Sun size={17} />
                ) : (
                  <Moon size={17} />
                )}
                {theme === "dark"
                  ? "Light Mode"
                  : "Dark Mode"}
              </button>
            )}

            {!isPremium && <PremiumPaymentButton />}

            <button
              type="button"
              disabled={isLoggingOut}
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 rounded-sm border border-surfaceBorder bg-background/40 px-5 py-3 font-bold text-foreground hover:border-red-500/30 hover:text-red-500 disabled:opacity-50"
            >
              <LogOut size={17} />
              {isLoggingOut
                ? "Signing Out..."
                : "Sign Out"}
            </button>
          </div>
        </section>

        {/* BATMAN OPERATIVE MATRIX */}
        {isBatman && (
          <section className="mb-8 rounded-sm border border-white/10 border-l-4 border-l-red-500 bg-[#1c1d22]/95 p-6 shadow-2xl">
            <div className="mb-6 flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-red-400">
              <Crosshair size={16} />
              ATREYA OPERATIVE MATRIX
            </div>

            <div className="grid grid-cols-4 gap-3">
              {OPERATIVES.map((operative) => {
                const Icon = operative.icon;
                const selected =
                  selectedOperative === operative.id;

                return (
                  <button
                    key={operative.id}
                    type="button"
                    aria-pressed={selected}
                    aria-label={operative.name}
                    onClick={() =>
                      setSelectedOperative(operative.id)
                    }
                    className={`flex flex-col items-center gap-3 rounded-sm border p-3 transition ${
                      selected
                        ? "border-red-500/40 bg-red-500/10"
                        : "border-white/5 bg-black/20 hover:border-white/20"
                    }`}
                  >
                    <Icon
                      className={`h-8 w-8 sm:h-12 sm:w-12 ${
                        selected
                          ? "text-red-400"
                          : "text-zinc-500"
                      }`}
                    />

                    <div className="h-1.5 w-full rounded-full bg-black">
                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{
                          width:
                            operative.id === "apex"
                              ? apexUnlocked
                                ? "100%"
                                : "20%"
                              : "100%",
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-mono text-sm font-bold uppercase text-white">
                  {activeOperative.name}
                </h2>

                <p className="mt-1 font-mono text-xs text-red-400">
                  {activeOperative.role}
                </p>

                <p className="mt-2 text-xs text-zinc-400">
                  {activeOperative.directive}
                </p>
              </div>

              <button
                type="button"
                disabled={!activeUnlocked}
                onClick={() => router.push(activeRoute)}
                className="flex items-center justify-center gap-2 rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-3 font-mono text-xs font-bold text-red-400 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {activeUnlocked ? (
                  <Unlock size={15} />
                ) : (
                  <Lock size={15} />
                )}
                {activeOperative.actionLabel}
                <ChevronRight size={15} />
              </button>
            </div>
          </section>
        )}

        {/* ATREYA LEARNING DASHBOARD */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-sm border border-surfaceBorder bg-surface/80 p-6 shadow-lg backdrop-blur-md md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Activity className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    My Learning Dashboard
                  </h2>
                  <p className="mt-1 text-sm text-foreground/60">
                    Your ATREYA MED learning environment.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {LEARNING_MODULES.map((module) => {
                  const Icon = module.icon;

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() =>
                        router.push(module.href)
                      }
                      className="group rounded-sm border border-surfaceBorder bg-background/50 p-5 text-left transition hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <Icon className="h-7 w-7 text-primary" />
                        <ArrowUpRight
                          size={17}
                          className="text-foreground/40 transition group-hover:text-primary"
                        />
                      </div>

                      <p className="text-[10px] font-bold tracking-widest text-primary">
                        {module.tag}
                      </p>

                      <h3 className="mt-2 font-bold text-foreground">
                        {module.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                        {module.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ORIGINAL ATREYA PROJECT ASSETS */}
            <section className="rounded-sm border border-surfaceBorder bg-surface/80 p-6 shadow-lg backdrop-blur-md md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <LibraryBig className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    ATREYA Project Assets
                  </h2>
                  <p className="mt-1 text-sm text-foreground/60">
                    Educational resources and clinical learning tools.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {RESOURCE_MODULES.map((resource) => {
                  const Icon = resource.icon;

                  return (
                    <button
                      key={resource.title}
                      type="button"
                      onClick={() =>
                        router.push(resource.href)
                      }
                      className="group flex w-full items-center gap-4 rounded-sm border border-surfaceBorder bg-background/50 p-4 text-left transition hover:border-primary/40"
                    >
                      <div className="rounded-sm bg-primary/10 p-3 text-primary">
                        <Icon size={22} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">
                          {resource.title}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-foreground/60">
                          {resource.description}
                        </p>
                      </div>

                      <ChevronRight
                        size={18}
                        className="text-foreground/40 group-hover:text-primary"
                      />
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            <section className="relative overflow-hidden rounded-sm border border-amber-800/30 bg-gradient-to-br from-amber-900 to-black p-8 shadow-2xl dark:from-black dark:to-amber-950">
              <div className="relative z-10">
                <LibraryBig className="mb-4 h-7 w-7 text-amber-400" />

                <h2 className="font-heading text-2xl font-bold text-white">
                  ATREYA Resource Vault
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  Discover BAMS educational materials,
                  clinical resources, and Ayurveda
                  learning content.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    router.push("/bams-hub")
                  }
                  className="mt-7 flex w-full items-center justify-between rounded-sm border border-white/20 bg-white/10 px-4 py-4 font-bold text-white hover:bg-white/20"
                >
                  Explore Resources
                  <ChevronRight size={18} />
                </button>
              </div>
            </section>

            <section className="rounded-sm border border-surfaceBorder bg-surface/80 p-8 text-center shadow-lg backdrop-blur-md">
              <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-success" />

              <h3 className="font-heading text-xl font-bold text-foreground">
                Secure Scholar Account
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Your ATREYA MED account is protected
                through Firebase Authentication.
                Administrator access is verified
                separately by the server.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
