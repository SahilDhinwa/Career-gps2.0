"use client";

import { useState, useEffect, useRef } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { User as UserIcon, LogOut, Crown, ShieldCheck, Activity, ChevronRight, BookOpen, MapPin, Camera, ListChecks, Trash2 } from "lucide-react";
import PremiumPaymentButton from "../../components/PremiumPaymentButton"; 

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // States for Profile Picture and Checklist
  const [checklistData, setChecklistData] = useState<Record<string, string[]>>({});
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }
      
      setUser(currentUser);
      // Fallback to Auth photo initially
      setProfilePic(currentUser.photoURL);

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData(data);
          setChecklistData(data.checklistProgress || {});
          
          // FIX: Explicitly pull the Base64 image from Firestore to cure the amnesia
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

  // --- 1. PROFILE PICTURE UPLOAD LOGIC ---
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    // Protect Firestore: Limit file size to 2MB
    if (file.size > 2097152) {
      alert("Image is too large. Please upload an image smaller than 2MB.");
      return;
    }

    setIsUploading(true);
    try {
      const localImageUrl = URL.createObjectURL(file);
      setProfilePic(localImageUrl);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onloadend = async () => {
        try {
          const base64String = reader.result as string;
          
          // Primary Save: Update Firestore User Document
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, { photoURL: base64String });
          
          // Secondary Save: Try Auth
          try {
            await updateProfile(user, { photoURL: base64String });
          } catch (authError) {
            console.warn("Auth profile limit reached, but safely stored in Firestore.");
          }

        } catch (error) {
          console.error("Failed to save image to database:", error);
          alert("Failed to save image. Please try again.");
        } finally {
          setIsUploading(false);
        }
      };
      
      reader.onerror = () => {
        console.error("Failed to read file.");
        setIsUploading(false);
      };

    } catch (error) {
      console.error("Error setting up image upload:", error);
      setIsUploading(false);
    }
  };

  // --- 2. CHECKLIST REMOVAL LOGIC ---
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
      await updateDoc(userRef, { [`checklistProgress.${roadmapId}`]: updatedList });
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

  // The isPremium status is successfully pulled from the database here
  const isPremium = userData?.isPremium || false;
  const roadmapProgress = userData?.roadmapProgress || {};

  return (
    <div className="min-h-screen bg-background py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER & IDENTITY BLOCK */}
        <div className="bg-surface border border-surfaceBorder rounded-sm shadow-sm p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
            
            {/* Interactive Profile Picture Avatar */}
            <div 
              className="relative w-24 h-24 rounded-full border-4 border-white shadow-md shrink-0 group cursor-pointer overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
              onClick={() => fileInputRef.current?.click()}
            >
              {profilePic ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <UserIcon className="w-10 h-10 text-gray-400" />
              )}
              
              <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${isUploading ? 'opacity-100' : ''}`}>
                {isUploading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Camera className="w-6 h-6 text-white" />
                )}
              </div>
              
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/png, image/jpeg, image/webp"
                className="hidden" 
              />
            </div>

            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-1">
                {userData?.displayName || user?.displayName || "Scholarship Applicant"}
              </h1>
              <p className="text-gray-500 font-medium mb-3">{user?.email}</p>
              
              {isPremium ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-warning/10 text-xs font-bold text-warning uppercase tracking-wider border border-warning/20">
                  <Crown className="w-3.5 h-3.5" /> Premium Member
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider border border-gray-200">
                  Free Tier
                </span>
              )}
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
            {!isPremium && (
              <div className="w-full">
                <PremiumPaymentButton />
              </div>
            )}
            <button 
              onClick={handleLogout}
              className="w-full md:w-auto px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: PROGRESS & CHECKLISTS */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-surface border border-surfaceBorder rounded-sm shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Active Roadmaps</h2>
              </div>

              {Object.keys(roadmapProgress).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(roadmapProgress).map(([id, stage]: [string, any]) => (
                    <div key={id} className="border border-gray-100 rounded-sm p-5 hover:border-primary/30 transition-colors bg-gray-50/50">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-gray-800 capitalize flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" /> {id.replace(/-/g, " ")}
                        </h3>
                        <span className="text-xs font-bold bg-white border border-gray-200 px-2 py-1 rounded-sm text-gray-600">
                          Stage {stage}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-4">
                        <div 
                          className="bg-primary h-full transition-all duration-500" 
                          style={{ width: `${Math.min((stage / 10) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <button 
                        onClick={() => router.push(`/roadmap/${id}`)}
                        className="text-sm font-bold text-primary hover:text-primaryHover flex items-center gap-1 transition-colors"
                      >
                        Resume Journey <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 border border-gray-100 rounded-sm">
                  <MapPin className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium mb-4">You haven&apos;t started any application roadmaps yet.</p>
                  <button 
                    onClick={() => router.push("/scholarships")}
                    className="bg-gray-900 text-white font-bold py-2 px-6 rounded-sm hover:bg-primary transition-colors inline-block"
                  >
                    Explore Scholarships
                  </button>
                </div>
              )}
            </div>

            <div className="bg-surface border border-surfaceBorder rounded-sm shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <ListChecks className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Checklist Command Center</h2>
              </div>

              {Object.keys(checklistData).length > 0 && Object.values(checklistData).some(list => list.length > 0) ? (
                <div className="space-y-6">
                  {Object.entries(checklistData).map(([roadmapId, items]) => {
                    if (items.length === 0) return null; 
                    
                    return (
                      <div key={roadmapId} className="bg-white border border-gray-100 rounded-sm p-4">
                        <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                          {roadmapId.replace(/-/g, " ")}
                        </h4>
                        <ul className="space-y-2">
                          {items.map((item, index) => (
                            <li key={index} className="flex justify-between items-start gap-4 p-2 hover:bg-gray-50 rounded-sm group transition-colors">
                              <span className="text-sm font-medium text-gray-600 flex-1">{item}</span>
                              <button 
                                onClick={() => handleRemoveChecklistItem(roadmapId, item)}
                                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1"
                                title="Remove from checklist"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 border border-gray-100 rounded-sm">
                  <ListChecks className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">Your checked tasks will appear here.</p>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: RESOURCES & ACCOUNT */}
          <div className="space-y-8">
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-sm shadow-xl p-8 border border-gray-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <BookOpen className="w-5 h-5 text-warning" />
                <h2 className="font-heading text-xl font-bold text-white">Career Assets</h2>
              </div>
              <p className="text-sm text-gray-400 mb-6 font-medium relative z-10 leading-relaxed">
                Access your premium guides, including &quot;The Unspoken Aura&quot; by Sahil Dhinwa.
              </p>
              <button 
                onClick={() => router.push("/e-books")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-between group-hover:border-warning/50 relative z-10"
              >
                Open Library <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 text-center">
              <ShieldCheck className="w-8 h-8 text-success mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Secure Account</h3>
              <p className="text-xs text-gray-500 font-medium">Your data and application progress are securely synced to the cloud.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
                                }
