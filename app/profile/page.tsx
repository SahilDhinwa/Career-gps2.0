"use client";

import { useState, useEffect, useRef } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, setDoc } from "firebase/firestore";
import { signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes"; 
import { useAuth } from "../../context/AuthContext";
// Cleaned up imports
import { User as UserIcon, LogOut, Crown, ShieldCheck, Activity, ChevronRight, BookOpen, MapPin, Camera, ListChecks, Trash2, Sun, Moon, Terminal, Check } from "lucide-react";
import PremiumPaymentButton from "../../components/PremiumPaymentButton"; 

// 🦇 4 SCULPTED OPERATIVE SILHOUETTES (Transparent backgrounds + reference-accurate anatomy)
const OPERATIVE_SILHOUETTES = [
  {
    id: "apex-bat",
    name: "Apex Knight",
    role: "Root / Tier IV",
    defaultProgress: 100,
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
      <!-- Pitch Black Core Body -->
      <path d="M 14 106 C 16 83, 27 73, 45 66 L 47 56 C 42 49, 41 37, 43 24 L 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9 L 77 24 C 79 37, 78 49, 73 56 L 75 66 C 93 73, 104 83, 106 106 Z" fill="#070405"/>
      <!-- Internal Armor Shading & Crimson Circuit Texture -->
      <g clip-path="url(#apexClip)">
        <path d="M 14 106 C 16 83, 27 73, 45 66 L 55 85 L 14 106 Z" fill="url(#shoulderLit)"/>
        <path d="M 20 88 L 36 74 M 18 96 L 40 80 M 26 102 L 44 88" stroke="#f87171" stroke-width="1.4" opacity="0.45" stroke-linecap="round"/>
        <path d="M 54 84 L 66 80 L 74 84 L 84 79 L 94 85 M 48 91 L 61 87 L 71 91 L 85 86 L 99 93 M 42 98 L 57 94 L 69 99 L 82 94 L 98 101 M 62 74 L 75 72 L 88 76" stroke="#dc2626" stroke-width="1.5" opacity="0.55" fill="none" stroke-linejoin="round"/>
      </g>
      <!-- Open-Bottom Red Rim Light (Only highlights cowl, ears & shoulders) -->
      <path d="M 14.5 105 C 16.5 83, 27 73, 45 66 L 47 56 C 42 49, 41 37, 43 24 L 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9 L 77 24 C 79 37, 78 49, 73 56 L 75 66 C 93 73, 103.5 83, 105.5 105" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" filter="url(#rimGlow)"/>
      <path d="M 16 98 C 20 82, 29 74, 45 66 M 44 9 L 50 22 C 56 20.5, 64 20.5, 70 22 L 76 9" fill="none" stroke="#fecaca" stroke-width="0.9" opacity="0.8"/>
    </svg>`,
  },
  {
    id: "shadow-robin",
    name: "Night Operative",
    role: "Tactical / Tier III",
    defaultProgress: 100,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <!-- Side-Profile Bust Facing Right with Cape Collar Peak -->
      <path d="M 24 106 C 27 87, 34 75, 44 68 L 28 73 L 39 59 L 46 56 C 44 46, 46 31, 50 18 L 78 20 L 80 29 L 77 36 L 82 43 L 78 46 L 80 50 L 77 54 L 79 59 L 70 63 L 66 70 C 78 76, 86 88, 89 106 Z" fill="#030304"/>
      <!-- Subtle Metallic Top Crown Highlight -->
      <path d="M 52 18.5 L 76 20" stroke="#e4e4e7" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>
      <path d="M 50 20.5 L 77 22" stroke="#71717a" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
    </svg>`,
  },
  {
    id: "dark-knight",
    name: "Gotham Vigilante",
    role: "Field / Tier II",
    defaultProgress: 65,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <!-- Solid Pitch-Black Cowl & Cape Notch Silhouette -->
      <path d="M 16 106 C 19 85, 30 75, 45 68 L 40 63 L 47 58 C 43 51, 42 38, 44 25 L 45 10 L 51 24 C 56 23, 64 23, 69 24 L 75 10 L 76 25 C 78 38, 77 51, 73 58 L 75 68 C 90 74, 99 84, 102 106 Z" fill="#030304"/>
    </svg>`,
  },
  {
    id: "recruit-wayne",
    name: "Initiate",
    role: "Recon / Tier I",
    defaultProgress: 12,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 110">
      <!-- Realistic Unmasked Human Head, Ears & Shoulders Silhouette -->
      <path d="M 16 106 C 20 84, 31 75, 47 68 L 48 57 C 45 55, 43 52, 44 47 C 41 46, 41 39, 44 38 C 44 24, 51 17, 60 17 C 69 17, 76 24, 76 38 C 79 39, 79 46, 76 47 C 77 52, 75 55, 72 57 L 73 68 C 89 75, 100 84, 104 106 Z" fill="#030304"/>
    </svg>`,
  },
];

export default function UserProfile() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const { user, userData, isPremium, isLoading, refreshUserData } = useAuth();
  
  const [checklistData, setChecklistData] = useState<Record<string, string[]>>({});
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [selectedOperative, setSelectedOperative] = useState<string>("apex-bat");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true); 
    
    if (!isLoading && !user) {
      router.push("/login");
    } else if (user) {
      setProfilePic(userData?.photoURL || user.photoURL || null);
      setChecklistData(userData?.checklistProgress || {});
      if (userData?.operativeId) setSelectedOperative(userData.operativeId);
    }
  }, [user, userData, isLoading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setTheme('dark'); 
      router.push("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  // 🦇 EQUIP SILHOUETTE AS PROFILE AVATAR
  const handleSelectOperative = async (operative: typeof OPERATIVE_SILHOUETTES[0]) => {
    if (!user) return;
    setSelectedOperative(operative.id);
    const svgDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(operative.svgString)}`;
    setProfilePic(svgDataUri);

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { photoURL: svgDataUri, operativeId: operative.id }, { merge: true });

      if (typeof window !== "undefined") {
        const cached = localStorage.getItem(`veblen_cache_${user.uid}`);
        if (cached) {
          const parsed = JSON.parse(cached);
          parsed.photoURL = svgDataUri;
          parsed.operativeId = operative.id;
          localStorage.setItem(`veblen_cache_${user.uid}`, JSON.stringify(parsed));
        }
      }

      if (refreshUserData) refreshUserData();
    } catch (error) {
      console.error("Failed to equip operative silhouette:", error);
    }
  };

  // 🦇 BULLETPROOF IMAGE UPLOADER
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 2097152) {
      alert("Image is too large. Please upload an image smaller than 2MB.");
      return;
    }

    setIsUploading(true);
    try {
      const localImageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.src = localImageUrl;

      img.onerror = () => {
        console.error("Failed to read image data.");
        setIsUploading(false);
        alert("Invalid or corrupt image file.");
      };

      img.onload = async () => {
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const MAX_WIDTH = 250;
          const MAX_HEIGHT = 250;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);

          // Compress to 60% quality JPEG
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.6);

          // ONLY save to Firestore (bypassing the buggy Firebase Auth updateProfile)
          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, { photoURL: compressedBase64 }, { merge: true });
          
          // Force UI Update instantly
          setProfilePic(compressedBase64);
          
          // Update local storage cache immediately so it persists across reloads
          if (typeof window !== "undefined") {
            const cached = localStorage.getItem(`veblen_cache_${user.uid}`);
            if (cached) {
              const parsed = JSON.parse(cached);
              parsed.photoURL = compressedBase64;
              localStorage.setItem(`veblen_cache_${user.uid}`, JSON.stringify(parsed));
            }
          }

          // Fetch quietly in the background
          if (refreshUserData) refreshUserData(); 
          
        } catch (error) {
          console.error("Failed to save image to database:", error);
          alert("Database error: Ensure Firebase Firestore rules are updated.");
        } finally {
          // THIS GUARANTEES THE SPINNER STOPS NO MATTER WHAT
          setIsUploading(false);
        }
      };
    } catch (error) {
      console.error("Error setting up image upload:", error);
      setIsUploading(false);
    }
  };

  const handleRemoveChecklistItem = async (roadmapId: string, itemToRemove: string) => {
    if (!user) return;

    const currentList = checklistData[roadmapId] || [];
    const updatedList = currentList.filter((item: string) => item !== itemToRemove);

    setChecklistData(prev => ({
      ...prev,
      [roadmapId]: updatedList
    }));

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { [`checklistProgress.${roadmapId}`]: updatedList }, { merge: true });
      if (refreshUserData) await refreshUserData(); 
    } catch (error) {
      console.error("Failed to update checklist in database", error);
    }
  };

  // 🚀 HIGH-PERFORMANCE SKELETON UI
  if (isLoading) {
    return (
      <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${theme === 'batman' ? 'bg-transparent' : 'bg-background'}`}>
        <div className="max-w-5xl mx-auto py-12 md:py-16 px-6">
          <div className="bg-surface/40 border border-surfaceBorder rounded-sm p-6 md:p-12 mb-8 flex flex-col md:flex-row items-center gap-6 animate-pulse">
            <div className="w-28 h-28 md:w-24 md:h-24 rounded-full bg-surfaceBorder/50 shrink-0"></div>
            <div className="flex-1 space-y-4 w-full text-center md:text-left">
              <div className="h-8 bg-surfaceBorder/50 rounded-sm w-3/4 md:w-1/3 mx-auto md:mx-0"></div>
              <div className="h-4 bg-surfaceBorder/50 rounded-sm w-1/2 md:w-1/4 mx-auto md:mx-0"></div>
            </div>
            <div className="w-full md:w-32 h-12 bg-surfaceBorder/50 rounded-sm mt-4 md:mt-0"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="h-64 bg-surface/40 border border-surfaceBorder rounded-sm animate-pulse"></div>
              <div className="h-64 bg-surface/40 border border-surfaceBorder rounded-sm animate-pulse"></div>
            </div>
            <div className="h-96 bg-surface/40 border border-surfaceBorder rounded-sm animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const roadmapProgress = userData?.roadmapProgress || {};
  const totalCheckedTasks = Object.values(checklistData).reduce((acc, curr) => acc + curr.length, 0);
  const isAdmin = userData?.role === "admin" || user?.email === "sahilkumardhinwa82@gmail.com";

  const getOperativeBarWidth = (index: number, fallback: number) => {
    if (index === 0) return isAdmin || isPremium ? 100 : fallback;
    if (index === 1) return 100;
    if (index === 2) return Math.min(Math.max(Object.keys(roadmapProgress).length * 25, fallback), 100);
    if (index === 3) return Math.min(Math.max(totalCheckedTasks * 10, fallback), 100);
    return fallback;
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${theme === 'batman' ? 'bg-transparent' : 'bg-background'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
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
          top: -10%; left: -10%;
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, transparent 70%);
        }
        .honey-glow-2 {
          position: absolute;
          bottom: -10%; right: -10%;
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
        }
      `}} />
      
      {theme !== "batman" && (
        <div className="honeycomb-bg">
          <div className="honeycomb-pattern"></div>
          <div className="honey-glow-1"></div>
          <div className="honey-glow-2"></div>
        </div>
      )}

      <div className="max-w-5xl mx-auto relative z-10 py-12 md:py-16 px-6">

        {/* HEADER CARD */}
        <div className="bg-surface/80 backdrop-blur-md border border-amber-900/10 dark:border-amber-500/10 rounded-sm shadow-xl p-6 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-300">
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
            
            <div className="relative">
              <div 
                className="relative w-28 h-28 md:w-24 md:h-24 rounded-full border-4 border-surface shadow-xl shrink-0 group cursor-pointer overflow-hidden bg-background flex items-center justify-center"
                onClick={() => fileInputRef.current?.click()}
              >
                {profilePic ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-12 h-12 text-foreground/20" />
                )}
                
                <div className={`hidden md:flex absolute inset-0 bg-black/50 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${isUploading ? 'opacity-100' : ''}`}>
                  {isUploading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Camera className="w-6 h-6 text-white" />}
                </div>
              </div>

              <div 
                className="absolute bottom-1 right-1 md:hidden bg-primary w-8 h-8 rounded-full border-2 border-surface flex items-center justify-center shadow-md cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {isUploading ? <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Camera className="w-4 h-4 text-white" />}
              </div>
              
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/png, image/jpeg, image/webp" className="hidden" />
            </div>

            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-1 drop-shadow-sm">
                {userData?.displayName || user?.displayName || "Scholarship Applicant"}
              </h1>
              <p className="text-foreground/70 font-medium mb-3">{user?.email}</p>
              
              {isPremium ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-warning/10 text-xs font-bold text-warning uppercase tracking-wider border border-warning/30 shadow-sm">
                  <Crown className="w-3.5 h-3.5" /> Premium Member
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-surfaceBorder/50 text-xs font-bold text-foreground/60 uppercase tracking-wider border border-surfaceBorder shadow-sm">
                  Free Tier
                </span>
              )}
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
            
            {/* 🦇 MASTER OVERRIDE ADMIN TRAPDOOR */}
            {(userData?.role === "admin" || user?.email === "sahilkumardhinwa82@gmail.com") && (
              <button 
                onClick={() => router.push("/admin")}
                className="w-full md:w-auto px-6 py-3.5 md:py-3 bg-red-950/20 border border-red-900/40 text-red-500 font-bold rounded-sm hover:bg-red-900/40 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,0,0,0.1)]"
              >
                <Terminal className="w-5 h-5 md:w-4 md:h-4" /> Batcomputer
              </button>
            )}

            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full md:w-auto px-6 py-3.5 md:py-3 bg-surface/80 border border-surfaceBorder text-foreground font-bold rounded-sm hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 md:w-4 md:h-4 text-warning" /> : <Moon className="w-5 h-5 md:w-4 md:h-4 text-primary" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}

            {!isPremium && (
              <div className="w-full">
                <PremiumPaymentButton />
              </div>
            )}
            
            <button 
              onClick={handleLogout}
              className="w-full md:w-auto px-6 py-3.5 md:py-3 bg-surface/80 border border-surfaceBorder text-foreground font-bold rounded-sm hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <LogOut className="w-5 h-5 md:w-4 md:h-4" /> Sign Out
            </button>
          </div>
        </div>

                {/* 🦇 INTERACTIVE OPERATIVE SILHOUETTES & STATUS BARS HUD */}
        <div className="bg-[#1c1d22]/95 border-l-4 border-l-[#e04848] border border-white/5 rounded-sm shadow-[0_12px_35px_rgba(0,0,0,0.9)] p-5 md:p-7 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#e04848] font-bold">
                Tactical Operative Protocols
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Operative clearance tiers and progression telemetry.
              </p>
            </div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
              Sync: Active
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8 pt-2">
            {OPERATIVE_SILHOUETTES.map((op, idx) => {
              const isSelected = selectedOperative === op.id;
              const barWidth = getOperativeBarWidth(idx, op.defaultProgress);

              return (
                <button
                  key={op.id}
                  onClick={() => handleSelectOperative(op)}
                  className={`group flex flex-col items-center p-2 sm:p-3 rounded-sm transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-white/[0.03] border-[#e04848]/40 shadow-[0_0_20px_rgba(224,72,72,0.1)]"
                      : "bg-transparent border-transparent hover:bg-white/[0.02]"
                  }`}
                  title={`${op.name} (${op.role})`}
                >
                  {/* Transparent-Background Silhouette Bust */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-24 flex items-end justify-center mb-2.5 transition-transform duration-300 group-hover:scale-105">
                    <div
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: op.svgString }}
                    />
                  </div>

                  {/* Matte Recessed Progress Bar Underneath */}
                  <div className="w-full max-w-[92px] h-2.5 bg-[#0a0a0c] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#d94646] shadow-[0_0_8px_rgba(217,70,70,0.5)] transition-all duration-700"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>

                  {/* Label */}
                  <span className={`mt-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-colors ${
                    isSelected ? "text-[#e04848] font-bold" : "text-gray-400 group-hover:text-gray-200"
                  }`}>
                    {op.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* METRICS & ROADMAPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-lg p-6 md:p-8 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Active Roadmaps</h2>
              </div>

              {Object.keys(roadmapProgress).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(roadmapProgress).map(([id, stage]: [string, any]) => (
                    <div key={id} className="border border-surfaceBorder rounded-sm p-5 hover:border-primary/30 transition-colors bg-background/50 shadow-sm group">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-foreground capitalize flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" /> {id.replace(/-/g, " ")}
                        </h3>
                        <span className="text-xs font-bold bg-foreground/5 border border-surfaceBorder px-2 py-1 rounded-sm text-foreground/70">
                          Stage {stage}
                        </span>
                      </div>
                      <div className="w-full bg-surfaceBorder h-2 rounded-full overflow-hidden mb-4 border border-surfaceBorder/50">
                        <div 
                          className="bg-primary h-full transition-all duration-500" 
                          style={{ width: `${Math.min((stage / 10) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <button 
                        onClick={() => router.push(`/roadmap/${id}`)}
                        className="text-sm font-bold text-primary group-hover:text-primaryHover flex items-center gap-1 transition-colors"
                      >
                        Resume Journey <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-background/50 border border-surfaceBorder rounded-sm shadow-inner">
                  <MapPin className="w-8 h-8 text-foreground/20 mx-auto mb-3" />
                  <p className="text-foreground/60 font-medium mb-4">You haven&apos;t started any application roadmaps yet.</p>
                  <button 
                    onClick={() => router.push("/scholarships")}
                    className="bg-primary text-white font-bold py-3 px-6 rounded-sm hover:bg-primaryHover transition-colors inline-block shadow-sm"
                  >
                    Explore Scholarships
                  </button>
                </div>
              )}
            </div>

            <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-lg p-6 md:p-8 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <ListChecks className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Checklist Command Center</h2>
              </div>

              {Object.keys(checklistData).length > 0 && Object.values(checklistData).some(list => list.length > 0) ? (
                <div className="space-y-6">
                  {Object.entries(checklistData).map(([roadmapId, items]) => {
                    if (items.length === 0) return null; 
                    return (
                      <div key={roadmapId} className="bg-background/50 border border-surfaceBorder rounded-sm p-4 shadow-sm">
                        <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-4 border-b border-surfaceBorder pb-2">
                          {roadmapId.replace(/-/g, " ")}
                        </h4>
                        <ul className="space-y-2">
                          {items.map((item, index) => (
                            <li key={index} className="flex justify-between items-start gap-4 p-3 hover:bg-surfaceBorder/30 rounded-sm group transition-colors border border-transparent hover:border-surfaceBorder/50">
                              <span className="text-sm md:text-base font-medium text-foreground/80 flex-1">{item}</span>
                              <button 
                                onClick={() => handleRemoveChecklistItem(roadmapId, item)}
                                className="text-foreground/30 hover:text-red-500 md:opacity-0 group-hover:opacity-100 transition-all p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-5 h-5 md:w-4 md:h-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10 bg-background/50 border border-surfaceBorder rounded-sm shadow-inner">
                  <ListChecks className="w-8 h-8 text-foreground/20 mx-auto mb-3" />
                  <p className="text-foreground/60 font-medium">Your checked tasks will appear here.</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            
            <div className="bg-gradient-to-br from-amber-900 to-black dark:from-black dark:to-amber-950 rounded-sm shadow-2xl p-8 border border-amber-800/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <BookOpen className="w-6 h-6 text-warning" />
                <h2 className="font-heading text-2xl font-bold text-white">Career Assets</h2>
              </div>
              <p className="text-sm text-gray-300 mb-8 font-medium relative z-10 leading-relaxed">
                Access your premium guides, including <span className="text-white font-bold">&quot;The Unspoken Aura&quot;</span> by Sahil Dhinwa.
              </p>
              <button 
                onClick={() => router.push("/e-books")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-4 rounded-sm transition-all duration-300 flex items-center justify-between group-hover:border-warning/50 relative z-10 shadow-lg"
              >
                Open Library <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-8 text-center shadow-lg transition-colors duration-300">
              <ShieldCheck className="w-10 h-10 text-success mx-auto mb-4 opacity-80" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Secure Account</h3>
              <p className="text-sm text-foreground/60 font-medium leading-relaxed">Your data, encrypted files, and application progress are securely synced to the cloud.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
