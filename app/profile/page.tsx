"use client";

import { useState, useEffect, useRef } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes"; 
import { useAuth } from "../../context/AuthContext";
import { User as UserIcon, LogOut, Crown, ShieldCheck, Activity, ChevronRight, BookOpen, MapPin, Camera, ListChecks, Trash2, Sun, Moon, Terminal, Check } from "lucide-react";
import PremiumPaymentButton from "../../components/PremiumPaymentButton"; 

// 🦇 4 OPERATIVE SILHOUETTE PRESETS (Matches Reference HUD)
const OPERATIVE_SILHOUETTES = [
  {
    id: "apex-bat",
    name: "Apex Knight",
    role: "Root / Tier IV",
    defaultProgress: 100,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g1" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#2a0505"/><stop offset="100%" stop-color="#050507"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="100" height="100" fill="url(#g1)"/><path d="M12 92 C14 73 25 66 38 62 L40 53 C36 47 35 36 37 25 L38 11 L43 22 C47 21 53 21 57 22 L62 11 L63 25 C65 36 64 47 60 53 L62 62 C75 66 86 73 88 92 Z" fill="#090404" stroke="#ff3b3b" stroke-width="2.2" filter="url(#glow)"/><path d="M48 74 L55 71 L62 74 L68 71 L74 76 M45 81 L58 78 L72 82 M22 72 L34 66" stroke="#ff2a2a" stroke-width="1.3" opacity="0.65" fill="none"/></svg>`,
  },
  {
    id: "shadow-robin",
    name: "Night Operative",
    role: "Tactical / Tier III",
    defaultProgress: 100,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#08080a"/><path d="M24 92 C27 74 35 64 44 60 L30 64 L39 55 L44 52 C43 44 45 31 48 22 L69 23 L71 31 L69 38 L71 43 L68 48 L69 52 L64 56 L58 55 L56 61 C66 67 74 77 77 92 Z" fill="#020203"/><path d="M49 21 L67 22" stroke="#d4d4d8" stroke-width="2" stroke-linecap="round" opacity="0.8"/></svg>`,
  },
  {
    id: "dark-knight",
    name: "Gotham Vigilante",
    role: "Field / Tier II",
    defaultProgress: 65,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#08080a"/><path d="M15 92 C18 75 28 67 40 62 L37 59 L42 54 C39 48 39 36 40 24 L41 12 L45 23 C48 22 52 22 55 23 L59 12 L60 24 C61 36 61 48 58 54 L62 62 C74 67 82 75 85 92 Z" fill="#020203" stroke="#27272a" stroke-width="1"/></svg>`,
  },
  {
    id: "recruit-wayne",
    name: "Initiate",
    role: "Recon / Tier I",
    defaultProgress: 12,
    svgString: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#08080a"/><path d="M16 92 C20 75 30 68 42 63 L43 54 C38 48 37 37 39 27 C41 19 46 16 50 16 C54 16 59 19 61 27 C63 37 62 48 57 54 L58 63 C70 68 80 75 84 92 Z" fill="#020203" stroke="#27272a" stroke-width="1"/></svg>`,
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
            if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
          } else {
            if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
          }

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);

          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.6);

          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, { photoURL: compressedBase64 }, { merge: true });
          
          setProfilePic(compressedBase64);
          
          if (typeof window !== "undefined") {
            const cached = localStorage.getItem(`veblen_cache_${user.uid}`);
            if (cached) {
              const parsed = JSON.parse(cached);
              parsed.photoURL = compressedBase64;
              localStorage.setItem(`veblen_cache_${user.uid}`, JSON.stringify(parsed));
            }
          }

          if (refreshUserData) refreshUserData(); 
        } catch (error) {
          console.error("Failed to save image to database:", error);
          alert("Database error: Ensure Firebase Firestore rules are updated.");
        } finally {
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

    setChecklistData(prev => ({ ...prev, [roadmapId]: updatedList }));

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { [`checklistProgress.${roadmapId}`]: updatedList }, { merge: true });
      if (refreshUserData) await refreshUserData(); 
    } catch (error) {
      console.error("Failed to update checklist in database", error);
    }
  };

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
        </div>
      </div>
    );
  }

  const roadmapProgress = userData?.roadmapProgress || {};
  const totalCheckedTasks = Object.values(checklistData).reduce((acc, curr) => acc + curr.length, 0);
  const isAdmin = userData?.role === "admin" || user?.email === "sahilkumardhinwa82@gmail.com";

  // Dynamic progress calculation for the 4 bars (falls back to the exact reference look)
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
        .honeycomb-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-color: var(--background); }
        .honeycomb-pattern {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23b45309' stroke-width='1.5' stroke-opacity='0.15'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23b45309' stroke-width='1.5' stroke-opacity='0.15'/%3E%3C/svg%3E");
          background-size: 80px;
        }
        .dark .honeycomb-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23d4af37' stroke-width='1.5' stroke-opacity='0.08'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23d4af37' stroke-width='1.5' stroke-opacity='0.08'/%3E%3C/svg%3E");
        }
      `}} />
      
      {theme !== "batman" && (
        <div className="honeycomb-bg">
          <div className="honeycomb-pattern"></div>
        </div>
      )}

      <div className="max-w-5xl mx-auto relative z-10 py-12 md:py-16 px-6">

        {/* HEADER CARD */}
        <div className="bg-surface/80 backdrop-blur-md border border-amber-900/10 dark:border-amber-500/10 rounded-sm shadow-xl p-6 md:p-12 mb-6 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-300">
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
            {isAdmin && (
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
        <div className="bg-[#121215]/95 border-l-4 border-l-red-500 border border-red-900/30 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.85)] p-5 md:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-red-950/50 pb-3">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-bold">
                Tactical Operative Protocols
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Select a silhouette below to equip as your active Operative Avatar.
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
                      ? "bg-red-950/25 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                      : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-red-900/40"
                  }`}
                  title={`Equip ${op.name} (${op.role})`}
                >
                  {/* Silhouette Graphic */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-end justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
                    <div
                      className="w-full h-full rounded-sm overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: op.svgString }}
                    />
                    {isSelected && (
                      <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>

                  {/* Red Progress Bar Underneath */}
                  <div className="w-full max-w-[96px] h-2 sm:h-2.5 bg-[#070709] rounded-full overflow-hidden border border-white/5 p-[1px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#d93838] to-[#ff5252] shadow-[0_0_8px_rgba(239,68,68,0.65)] transition-all duration-700"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>

                  {/* Label */}
                  <span className={`mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-colors ${
                    isSelected ? "text-red-400 font-bold" : "text-gray-500 group-hover:text-gray-300"
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
