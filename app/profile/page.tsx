
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

import { doc, setDoc, deleteField, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import {
  User as UserIcon,
  LogOut,
  Crown,
  ShieldCheck,
  Activity,
  ChevronRight,
  BookOpen,
  MapPin,
  Camera,
  ListChecks,
  Trash2,
  Sun,
  Moon,
  Terminal,
  Lock,
  Unlock,
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

const OPERATIVE_SILHOUETTES = [
  {
    id: "apex-bat",
    name: "Apex Knight",
    role: "Tier IV // Root Clearance",
    directive:
      "Full Batcomputer command & global scholarship vault mastery.",
    actionLabel: "Launch Batcomputer / Vault",
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <defs>
        <filter id="rimGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="apexClip">
          <path d="M 14 106 C 16 83, 27 73, 45 66 L 47 56 C 42 49, 41 37, 43 24 L 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9 L 77 24 C 79 37, 78 49, 73 56 L 75 66 C 93 73, 104 83, 106 106 Z"/>
        </clipPath>
        <linearGradient id="shoulderLit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff6b6b" stop-opacity="0.55"/>
          <stop offset="45%" stop-color="#991b1b" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#050506" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path d="M 14 106 C 16 83, 27 73, 45 66 L 47 56 C 42 49, 41 37, 43 24 L 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9 L 77 24 C 79 37, 78 49, 73 56 L 75 66 C 93 73, 104 83, 106 106 Z" fill="#070405"/>
      <g clip-path="url(#apexClip)">
        <path d="M 14 106 C 16 83, 27 73, 45 66 L 55 85 L 14 106 Z" fill="url(#shoulderLit)"/>
        <path d="M 20 88 L 36 74 M 18 96 L 40 80 M 26 102 L 44 88" stroke="#f87171" stroke-width="1.4" opacity="0.45" stroke-linecap="round"/>
        <path d="M 54 84 L 66 80 L 74 84 L 84 79 L 94 85 M 48 91 L 61 87 L 71 91 L 85 86 L 99 93 M 42 98 L 57 94 L 69 99 L 82 94 L 98 101 M 62 74 L 75 72 L 88 76" stroke="#dc2626" stroke-width="1.5" opacity="0.55" fill="none" stroke-linejoin="round"/>
      </g>
      <path d="M 14.5 105 C 16.5 83, 27 73, 45 66 L 47 56 C 42 49, 41 37, 43 24 L 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9 L 77 24 C 79 37, 78 49, 73 56 L 75 66 C 93 73, 103.5 83, 105.5 105" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" filter="url(#rimGlow)"/>
      <path d="M 16 98 C 20 82, 29 74, 45 66 M 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9" fill="none" stroke="#fecaca" stroke-width="0.9" opacity="0.8"/>
    </svg>`,
  },
  {
    id: "shadow-robin",
    name: "Night Operative",
    role: "Tier III // Tactical Ops",
    directive:
      "BAMS 2nd Prof Hub, Charaka Samhita MCQs & Checklist mastery.",
    actionLabel: "Enter BAMS Hub",
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <path d="M 24 106 C 27 87, 34 75, 44 68 L 28 73 L 39 59 L 46 56 C 44 46, 46 31, 50 18 L 78 20 L 80 29 L 77 36 L 82 43 L 78 46 L 80 50 L 77 54 L 79 59 L 70 63 L 66 70 C 78 76, 86 88, 89 106 Z" fill="#030304"/>
      <path d="M 52 18.5 L 76 20" stroke="#e4e4e7" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>
      <path d="M 50 20.5 L 77 22" stroke="#71717a" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
    </svg>`,
  },
  {
    id: "dark-knight",
    name: "Gotham Vigilante",
    role: "Tier II // Field Agent",
    directive:
      "Active global scholarship roadmaps & milestone execution.",
    actionLabel: "Deploy Pathways",
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <path d="M 16 106 C 19 85, 30 75, 45 68 L 40 63 L 47 58 C 43 51, 42 38, 44 25 L 45 10 L 51 24 C 56 23, 64 23, 69 24 L 75 10 L 76 25 C 78 38, 77 51, 73 58 L 75 68 C 90 74, 99 84, 102 106 Z" fill="#030304"/>
    </svg>`,
  },
  {
    id: "recruit-wayne",
    name: "Initiate",
    role: "Tier I // Recon",
    directive:
      "Identity verified. Base clearance for scholarship discovery.",
    actionLabel: "Explore Scholarships",
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <path d="M 16 106 C 20 84, 31 75, 47 68 L 48 57 C 45 55, 43 52, 44 47 C 41 46, 41 39, 44 38 C 44 24, 51 17, 60 17 C 69 17, 76 24, 76 38 C 79 39, 79 46, 76 47 C 77 52, 75 55, 72 57 L 73 68 C 89 75, 100 84, 104 106 Z" fill="#030304"/>
    </svg>`,
  },
] as const;

function formatRoadmapName(value: string): string {
  return value.replace(/-/g, " ");
}

function getStageNumber(value: unknown): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return Math.max(0, Math.min(parsed, 10));
}

function getImageDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
    };

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

  const [checklistData, setChecklistData] = useState<
    Record<string, string[]>
  >({});

  const [profilePic, setProfilePic] = useState<
    string | null
  >(null);

  const [selectedOperative, setSelectedOperative] =
    useState<string>("apex-bat");

  const [isUploading, setIsUploading] =
    useState(false);

  const [isLoggingOut, setIsLoggingOut] =
    useState(false);

  const [isRemovingItem, setIsRemovingItem] =
    useState<string | null>(null);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoading && !user && !isLoggingOut) {
      router.replace("/account/login?redirect=%2Fprofile");
    }
  }, [isLoading, user, isLoggingOut, router]);

  useEffect(() => {
    if (!user) {
      setProfilePic(null);
      setChecklistData({});
      return;
    }

    setProfilePic(
      userData?.photoURL || user.photoURL || null
    );

    setChecklistData(
      userData?.checklistProgress || {}
    );
  }, [user, userData]);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await logout();

      setTheme("dark");

      router.replace("/account/login");
      router.refresh();
    } catch (error) {
      console.error(
        "Secure logout failed:",
        error
      );

      alert(
        "Unable to complete logout. Please try again."
      );

      setIsLoggingOut(false);
    }
  };

  const handleImageUpload = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    event.target.value = "";

    if (!file || !user || isUploading) {
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      alert(
        "Please select a JPEG, PNG, or WebP image."
      );
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      alert(
        "Please upload an image smaller than 2 MB."
      );
      return;
    }

    setIsUploading(true);

    try {
      const compressedBase64 =
        await getImageDataUrl(file);

      // Firestore document limit is 1 MiB.
      // Reject unusually large encoded images.
      if (compressedBase64.length > 700000) {
        throw new Error(
          "Compressed image is too large."
        );
      }

      const userRef = doc(
        db,
        "users",
        user.uid
      );

      await setDoc(
        userRef,
        {
          photoURL: compressedBase64,
        },
        { merge: true }
      );

      setProfilePic(compressedBase64);

      // Preserve the existing local cache format.
      try {
        const cacheKey =
          `veblen_cache_${user.uid}`;

        const cached =
          localStorage.getItem(cacheKey);

        if (cached) {
          const parsed: unknown =
            JSON.parse(cached);

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
      } catch (cacheError) {
        console.warn(
          "Profile cache update skipped:",
          cacheError
        );
      }

      try {
        await refreshUserData?.();
      } catch (refreshError) {
        console.warn(
          "Profile refresh pending:",
          refreshError
        );
      }
    } catch (error) {
      console.error(
        "Profile image upload failed:",
        error
      );

      alert(
        "Unable to save the profile picture. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveChecklistItem = async (
    roadmapId: string,
    itemToRemove: string
  ) => {
    if (!user || isRemovingItem) {
      return;
    }

    const operationKey =
      `${roadmapId}:${itemToRemove}`;

    setIsRemovingItem(operationKey);

    const previousData = checklistData;

    const currentList =
      checklistData[roadmapId] || [];

    const updatedList =
      currentList.filter(
        (item) => item !== itemToRemove
      );

    setChecklistData((previous) => ({
      ...previous,
      [roadmapId]: updatedList,
    }));

    try {
      const userRef = doc(
        db,
        "users",
        user.uid
      );

      // Preserve the existing nested checklist
      // schema without overwriting other roadmaps.
      await updateDoc(
        userRef,
        `checklistProgress.${roadmapId}`,
        updatedList
      );

      try {
        await refreshUserData?.();
      } catch (refreshError) {
        console.warn(
          "Checklist refresh pending:",
          refreshError
        );
      }
    } catch (error) {
      console.error(
        "Checklist update failed:",
        error
      );

      setChecklistData(previousData);

      alert(
        "Unable to update the checklist."
      );
    } finally {
      setIsRemovingItem(null);
    }
  };

  if (isLoading || (!user && !isLoggingOut)) {
    return (
      <div
        className={`relative min-h-screen overflow-hidden ${
          theme === "batman"
            ? "bg-transparent"
            : "bg-background"
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="mb-8 flex animate-pulse flex-col items-center gap-6 rounded-sm border border-surfaceBorder bg-surface/40 p-6 md:flex-row md:p-12">
            <div className="h-28 w-28 shrink-0 rounded-full bg-surfaceBorder/50" />

            <div className="w-full flex-1 space-y-4">
              <div className="h-8 w-3/4 rounded-sm bg-surfaceBorder/50" />
              <div className="h-4 w-1/2 rounded-sm bg-surfaceBorder/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div className="h-64 animate-pulse rounded-sm bg-surface/40" />
              <div className="h-64 animate-pulse rounded-sm bg-surface/40" />
            </div>

            <div className="h-96 animate-pulse rounded-sm bg-surface/40" />
          </div>
        </div>
      </div>
    );
  }

  const roadmapProgress =
    userData?.roadmapProgress || {};

  const activeRoadmapCount =
    Object.keys(roadmapProgress).length;

  const totalCheckedTasks =
    Object.values(checklistData).reduce(
      (total, items) =>
        total + items.length,
      0
    );

  // UI-only role indicator.
  // Server-side admin authorization is mandatory.
  const isAdmin =
    userData?.role === "admin";

  const getOperativeTelemetry = (
    id: string
  ) => {
    switch (id) {
      case "apex-bat":
        return {
          barWidth:
            isAdmin || isPremium
              ? 100
              : Math.min(
                  25 +
                    activeRoadmapCount * 20 +
                    totalCheckedTasks * 5,
                  95
                ),
          unlocked:
            isAdmin || isPremium,
          metricText: isAdmin
            ? "ROOT OVERRIDE: ACTIVE"
            : isPremium
              ? "VIP CLEARANCE: ACTIVE"
              : "REQUIRES PREMIUM OR ROOT",
          targetRoute: isAdmin
            ? "/admin"
            : "/dashboard/vault",
        };

      case "shadow-robin":
        return {
          barWidth: Math.min(
            totalCheckedTasks * 15,
            100
          ),
          unlocked: true,
          metricText:
            `${totalCheckedTasks} TACTICAL TASKS LOGGED`,
          targetRoute: "/bams-hub",
        };

      case "dark-knight":
        return {
          barWidth: Math.min(
            activeRoadmapCount * 35,
            100
          ),
          unlocked: true,
          metricText:
            `${activeRoadmapCount} ACTIVE ROADMAPS DEPLOYED`,
          targetRoute: "/pathways",
        };

      default:
        return {
          barWidth: 12,
          unlocked: true,
          metricText:
            "BASE RECONNAISSANCE ONLINE",
          targetRoute: "/scholarships",
        };
    }
  };

  const activeOp =
    OPERATIVE_SILHOUETTES.find(
      (operative) =>
        operative.id === selectedOperative
    ) || OPERATIVE_SILHOUETTES[0];

  const activeTelemetry =
    getOperativeTelemetry(activeOp.id);

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        theme === "batman"
          ? "bg-transparent"
          : "bg-background"
      }`}
    >
      <style>{`
        .honeycomb-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-color: var(--background);
        }

        .honeycomb-pattern {
          position: absolute;
          inset: 0;
          background-image:
            url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23b45309' stroke-width='1.5' stroke-opacity='0.15'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23b45309' stroke-width='1.5' stroke-opacity='0.15'/%3E%3C/svg%3E");
          background-size: 80px;
        }

        .dark .honeycomb-pattern {
          background-image:
            url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23d4af37' stroke-width='1.5' stroke-opacity='0.08'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23d4af37' stroke-width='1.5' stroke-opacity='0.08'/%3E%3C/svg%3E");
        }

        .honey-glow-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(180,83,9,0.08), transparent 70%);
        }

        .honey-glow-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(212,175,55,0.06), transparent 70%);
        }
      `}</style>

      {theme !== "batman" && (
        <div className="honeycomb-bg">
          <div className="honeycomb-pattern" />
          <div className="honey-glow-1" />
          <div className="honey-glow-2" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* PROFILE HEADER */}
        <div className="mb-8 flex flex-col items-center justify-between gap-8 rounded-sm border border-amber-900/10 bg-surface/80 p-6 shadow-xl backdrop-blur-md transition-colors duration-300 dark:border-amber-500/10 md:flex-row md:p-12">
          <div className="flex w-full flex-col items-center gap-6 text-center md:w-auto md:flex-row md:text-left">
            <div className="relative">
              <button
                type="button"
                disabled={isUploading}
                onClick={() =>
                  fileInputRef.current?.click()
                }
                aria-label="Change profile picture"
                className="group relative flex h-28 w-28 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-surface bg-background shadow-xl disabled:cursor-wait md:h-24 md:w-24"
              >
                {profilePic ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserIcon className="h-12 w-12 text-foreground/20" />
                )}

                <div className="absolute inset-0 hidden flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 md:flex">
                  {isUploading ? (
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Camera className="h-6 w-6 text-white" />
                  )}
                </div>
              </button>

              <button
                type="button"
                disabled={isUploading}
                onClick={() =>
                  fileInputRef.current?.click()
                }
                aria-label="Upload profile picture"
                className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-primary shadow-md disabled:opacity-50 md:hidden"
              >
                {isUploading ? (
                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Camera className="h-4 w-4 text-white" />
                )}
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
              <h1 className="mb-1 font-heading text-3xl font-bold text-foreground">
                {userData?.displayName ||
                  user?.displayName ||
                  "Scholarship Applicant"}
              </h1>

              <p className="mb-3 break-all font-medium text-foreground/70">
                {user?.email}
              </p>

              {isPremium ? (
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-warning">
                  <Crown className="h-3.5 w-3.5" />
                  Premium Member
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-surfaceBorder bg-surfaceBorder/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground/60">
                  Free Tier
                </span>
              )}
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 md:w-auto">
            {isAdmin && (
              <button
                type="button"
                onClick={() =>
                  router.push("/admin")
                }
                className="flex w-full items-center justify-center gap-2 rounded-sm border border-red-900/40 bg-red-950/20 px-6 py-3.5 font-bold text-red-500 transition-colors hover:bg-red-900/40 hover:text-white md:w-auto md:py-3"
              >
                <Terminal className="h-5 w-5 md:h-4 md:w-4" />
                Batcomputer
              </button>
            )}

            {mounted && (
              <button
                type="button"
                onClick={() =>
                  setTheme(
                    theme === "dark"
                      ? "light"
                      : "dark"
                  )
                }
                className="flex w-full items-center justify-center gap-2 rounded-sm border border-surfaceBorder bg-surface/80 px-6 py-3.5 font-bold text-foreground transition-colors hover:bg-foreground/5 md:w-auto md:py-3"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-warning md:h-4 md:w-4" />
                ) : (
                  <Moon className="h-5 w-5 text-primary md:h-4 md:w-4" />
                )}

                {theme === "dark"
                  ? "Light Mode"
                  : "Dark Mode"}
              </button>
            )}

            {!isPremium && (
              <div className="w-full">
                <PremiumPaymentButton />
              </div>
            )}

            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-surfaceBorder bg-surface/80 px-6 py-3.5 font-bold text-foreground transition-colors hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:py-3"
            >
              <LogOut className="h-5 w-5 md:h-4 md:w-4" />
              {isLoggingOut
                ? "Signing Out..."
                : "Sign Out"}
            </button>
          </div>
        </div>

        {/* BATMAN OPERATIVE MATRIX */}
        {mounted && theme === "batman" && (
          <div className="mb-8 rounded-sm border border-white/5 border-l-4 border-l-[#e04848] bg-[#1c1d22]/95 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.95)] md:p-7">
            <div className="grid grid-cols-4 gap-3 pb-5 pt-1 sm:gap-6 md:gap-10">
              {OPERATIVE_SILHOUETTES.map(
                (operative) => {
                  const selected =
                    selectedOperative ===
                    operative.id;

                  const telemetry =
                    getOperativeTelemetry(
                      operative.id
                    );

                  return (
                    <button
                      key={operative.id}
                      type="button"
                      onClick={() =>
                        setSelectedOperative(
                          operative.id
                        )
                      }
                      aria-pressed={selected}
                      aria-label={
                        operative.name
                      }
                      className={`group flex cursor-pointer flex-col items-center rounded-sm p-2 transition-all duration-300 ${
                        selected
                          ? "bg-white/[0.03]"
                          : "hover:bg-white/[0.015]"
                      }`}
                    >
                      <div
                        className={`relative mb-3 flex h-16 w-16 items-end justify-center transition-transform duration-300 sm:h-24 sm:w-24 md:h-24 md:w-28 ${
                          selected
                            ? "scale-105"
                            : "opacity-85 group-hover:scale-105 group-hover:opacity-100"
                        }`}
                      >
                        <div
                          className="h-full w-full"
                          dangerouslySetInnerHTML={{
                            __html:
                              operative.svgString,
                          }}
                        />
                      </div>

                      <div className="h-2 w-full max-w-[92px] overflow-hidden rounded-full bg-[#0a0a0c] sm:h-2.5">
                        <div
                          className="h-full rounded-full bg-[#d94646] shadow-[0_0_8px_rgba(217,70,70,0.55)] transition-all duration-700"
                          style={{
                            width:
                              `${telemetry.barWidth}%`,
                          }}
                        />
                      </div>
                    </button>
                  );
                }
              )}
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-white/5 pt-4 sm:flex-row sm:items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <Crosshair className="h-4 w-4 shrink-0 text-[#e04848]" />

                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                    {activeOp.name}
                  </span>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#e04848]">
                    [{activeOp.role}]
                  </span>
                </div>

                <p className="text-xs font-medium text-gray-400">
                  {activeOp.directive}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden items-center gap-1.5 rounded-sm border border-white/5 bg-black/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-400 md:inline-flex">
                  {activeTelemetry.unlocked ? (
                    <Unlock className="h-3 w-3 text-[#e04848]" />
                  ) : (
                    <Lock className="h-3 w-3 text-gray-500" />
                  )}

                  {activeTelemetry.metricText}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      activeTelemetry.targetRoute
                    )
                  }
                  className="flex w-full items-center justify-center gap-1.5 rounded-sm border border-[#e04848]/40 bg-[#e04848]/15 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#e04848] transition-all hover:bg-[#e04848] hover:text-white sm:w-auto"
                >
                  {activeOp.actionLabel}
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ROADMAPS AND CHECKLISTS */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-sm border border-surfaceBorder bg-surface/80 p-6 shadow-lg backdrop-blur-md md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Activity className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Active Roadmaps
                </h2>
              </div>

              {Object.keys(roadmapProgress).length >
              0 ? (
                <div className="space-y-4">
                  {Object.entries(
                    roadmapProgress
                  ).map(([id, stage]) => {
                    const stageNumber =
                      getStageNumber(stage);

                    return (
                      <div
                        key={id}
                        className="group rounded-sm border border-surfaceBorder bg-background/50 p-5 shadow-sm transition-colors hover:border-primary/30"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <h3 className="flex items-center gap-2 font-bold capitalize text-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            {formatRoadmapName(id)}
                          </h3>

                          <span className="rounded-sm border border-surfaceBorder bg-foreground/5 px-2 py-1 text-xs font-bold text-foreground/70">
                            Stage {stageNumber}
                          </span>
                        </div>

                        <div className="mb-4 h-2 w-full overflow-hidden rounded-full border border-surfaceBorder/50 bg-surfaceBorder">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{
                              width:
                                `${stageNumber * 10}%`,
                            }}
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            router.push(
                              `/roadmap/${encodeURIComponent(id)}`
                            )
                          }
                          className="flex items-center gap-1 text-sm font-bold text-primary transition-colors group-hover:text-primaryHover"
                        >
                          Resume Journey
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-sm border border-surfaceBorder bg-background/50 py-10 text-center shadow-inner">
                  <MapPin className="mx-auto mb-3 h-8 w-8 text-foreground/20" />

                  <p className="mb-4 font-medium text-foreground/60">
                    You haven&apos;t started any application roadmaps yet.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      router.push(
                        "/scholarships"
                      )
                    }
                    className="inline-block rounded-sm bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primaryHover"
                  >
                    Explore Scholarships
                  </button>
                </div>
              )}
            </section>

            <section className="rounded-sm border border-surfaceBorder bg-surface/80 p-6 shadow-lg backdrop-blur-md md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <ListChecks className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Checklist Command Center
                </h2>
              </div>

              {Object.values(
                checklistData
              ).some(
                (items) => items.length > 0
              ) ? (
                <div className="space-y-6">
                  {Object.entries(
                    checklistData
                  ).map(
                    ([roadmapId, items]) => {
                      if (
                        items.length === 0
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={roadmapId}
                          className="rounded-sm border border-surfaceBorder bg-background/50 p-4 shadow-sm"
                        >
                          <h4 className="mb-4 border-b border-surfaceBorder pb-2 text-sm font-bold uppercase tracking-wider text-foreground">
                            {formatRoadmapName(
                              roadmapId
                            )}
                          </h4>

                          <ul className="space-y-2">
                            {items.map(
                              (
                                item,
                                index
                              ) => {
                                const key =
                                  `${roadmapId}:${item}`;

                                return (
                                  <li
                                    key={`${item}-${index}`}
                                    className="group flex items-start justify-between gap-4 rounded-sm border border-transparent p-3 transition-colors hover:border-surfaceBorder/50 hover:bg-surfaceBorder/30"
                                  >
                                    <span className="flex-1 text-sm font-medium text-foreground/80 md:text-base">
                                      {item}
                                    </span>

                                    <button
                                      type="button"
                                      disabled={
                                        isRemovingItem !==
                                        null
                                      }
                                      onClick={() =>
                                        handleRemoveChecklistItem(
                                          roadmapId,
                                          item
                                        )
                                      }
                                      aria-label={`Remove ${item}`}
                                      className="p-1 text-foreground/40 transition-colors hover:text-red-500 disabled:opacity-40"
                                    >
                                      {isRemovingItem ===
                                      key ? (
                                        <span className="block h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
                                      ) : (
                                        <Trash2 className="h-5 w-5 md:h-4 md:w-4" />
                                      )}
                                    </button>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="rounded-sm border border-surfaceBorder bg-background/50 py-10 text-center shadow-inner">
                  <ListChecks className="mx-auto mb-3 h-8 w-8 text-foreground/20" />

                  <p className="font-medium text-foreground/60">
                    Your checked tasks will appear here.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            <section className="group relative overflow-hidden rounded-sm border border-amber-800/30 bg-gradient-to-br from-amber-900 to-black p-8 shadow-2xl dark:from-black dark:to-amber-950">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-warning/20 blur-3xl" />

              <div className="relative z-10 mb-4 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-warning" />

                <h2 className="font-heading text-2xl font-bold text-white">
                  Career Assets
                </h2>
              </div>

              <p className="relative z-10 mb-8 text-sm font-medium leading-relaxed text-gray-300">
                Access your premium guides,
                including{" "}
                <span className="font-bold text-white">
                  &quot;The Unspoken Aura&quot;
                </span>{" "}
                by Sahil Dhinwa.
              </p>

              <button
                type="button"
                onClick={() =>
                  router.push("/e-books")
                }
                className="relative z-10 flex w-full items-center justify-between rounded-sm border border-white/20 bg-white/10 px-4 py-4 font-bold text-white shadow-lg transition-all hover:bg-white/20 group-hover:border-warning/50"
              >
                Open Library
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </section>

            <section className="rounded-sm border border-surfaceBorder bg-surface/80 p-8 text-center shadow-lg backdrop-blur-md">
              <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-success opacity-80" />

              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                Secure Account
              </h3>

              <p className="text-sm font-medium leading-relaxed text-foreground/60">
                Your account uses Firebase
                authentication. Your profile
                and application progress are
                stored in the cloud.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
