"use client";

import { useState, useEffect, useRef } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes"; 
import { User as UserIcon, LogOut, Crown, ShieldCheck, Activity, ChevronRight, BookOpen, MapPin, Camera, ListChecks, Trash2, Sun, Moon } from "lucide-react";
import PremiumPaymentButton from "../../components/PremiumPaymentButton"; 

export default function UserProfile() {
  const router = useRouter();
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [checklistData, setChecklistData] = useState<Record<string, string[]>>({});
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true); 
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }
      
      setUser(currentUser);
      setProfilePic(currentUser.photoURL);

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData(data);
          setChecklistData(data.checklistProgress || {});
          
          if (data.photoURL) {
            setProfilePic(data.photoURL);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

   const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 2097152) {
      alert("Image is too large. Please upload an image smaller than 2MB.");
      return;
    }

    setIsUploading(true);
    try {
      // Show instant preview
      const localImageUrl = URL.createObjectURL(file);
      setProfilePic(localImageUrl);

      // Create an image object to draw on the canvas
      const img = new Image();
      img.src = localImageUrl;

      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Calculate new dimensions (Max 400x400 for a profile picture)
        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 400;
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

        // Resize the canvas and draw the image
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);

        // Compress to JPEG with 70% quality (This shrinks the Base64 string safely below 100KB)
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);

        try {
          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, { photoURL: compressedBase64 }, { merge: true });
          try {
            await updateProfile(user, { photoURL: compressedBase64 });
          } catch (authError) {
            console.warn("Auth profile limit reached, but safely stored in Firestore.");
          }
        } catch (error) {
          console.error("Failed to save image to database:", error);
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

    setChecklistData(prev => ({
      ...prev,
      [roadmapId]: updatedList
    }));

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { [`checklistProgress.${roadmapId}`]: updatedList }, { merge: true });
    } catch (error) {
      console.error("Failed to update checklist in database", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const isPremium = userData?.isPremium || false;
  const roadmapProgress = userData?.roadmapProgress || {};

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* REALISTIC HONEYCOMB BACKGROUND (Adapts to Light/Dark Mode) */}
      <style dangerouslySetInnerHTML={{__html: `
        .honeycomb-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-color: var(--background);
        }
        
        /* The structural honeycomb pattern */
        .honeycomb-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23b45309' stroke-width='1.5' stroke-opacity='0.15'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23b45309' stroke-width='1.5' stroke-opacity='0.15'/%3E%3C/svg%3E");
          background-size: 80px;
        }

        /* Dark mode specifically shifts the brown to a glowing amber */
        .dark .honeycomb-pattern {
          background-image: 
            url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23d4af37' stroke-width='1.5' stroke-opacity='0.08'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23d4af37' stroke-width='1.5' stroke-opacity='0.08'/%3E%3C/svg%3E");
        }

        /* The soft 'Honey Glow' radial gradients */
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
      
      {/* Background Layers */}
      <div className="honeycomb-bg">
        <div className="honeycomb-pattern"></div>
        <div className="honey-glow-1"></div>
        <div className="honey-glow-2"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 py-12 md:py-16 px-6">
        
        {/* HEADER CARD */}
        <div className="bg-surface/80 backdrop-blur-md border border-amber-900/10 dark:border-amber-500/10 rounded-sm shadow-xl p-6 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-300">
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
            
            {/* AVATAR UPLOADER - MOBILE OPTIMIZED */}
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
                
                {/* Desktop Hover Overlay */}
                <div className={`hidden md:flex absolute inset-0 bg-black/50 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${isUploading ? 'opacity-100' : ''}`}>
                  {isUploading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Camera className="w-6 h-6 text-white" />}
                </div>
              </div>

              {/* Mobile Tactile Camera Badge (Always visible, makes it obvious it's clickable) */}
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

          {/* ACTION BUTTONS (Sign out + Dark Mode) */}
          <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
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

        {/* METRICS & ROADMAPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Active Roadmaps */}
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

            {/* Checklist Command Center */}
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

          {/* SIDEBAR WIDGETS */}
          <div className="space-y-8">
            
            {/* Premium Library Widget */}
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

            {/* Security Widget */}
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
