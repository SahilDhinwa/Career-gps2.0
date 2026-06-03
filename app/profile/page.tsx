"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { User as UserIcon, LogOut, Crown, ShieldCheck, Activity, ChevronRight, BookOpen, MapPin } from "lucide-react";
import PremiumPaymentButton from "../../components/PremiumPaymentButton"; 

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login"); // Redirect to login if not authenticated
        return;
      }
      
      setUser(currentUser);

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
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
    <div className="min-h-screen bg-background py-16 px-6 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER & IDENTITY BLOCK */}
        <div className="bg-surface border border-surfaceBorder rounded-sm shadow-sm p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-md shrink-0">
              <UserIcon className="w-10 h-10 text-gray-400" />
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
          
          {/* LEFT COLUMN: PROGRESS & STATS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Roadmaps */}
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
                  <p className="text-gray-500 font-medium mb-4">You haven't started any application roadmaps yet.</p>
                  <button 
                    onClick={() => router.push("/scholarships")}
                    className="bg-gray-900 text-white font-bold py-2 px-6 rounded-sm hover:bg-primary transition-colors inline-block"
                  >
                    Explore Scholarships
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: RESOURCES & ACCOUNT */}
          <div className="space-y-8">
            
            {/* Career Assets Vault */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-sm shadow-xl p-8 border border-gray-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <BookOpen className="w-5 h-5 text-warning" />
                <h2 className="font-heading text-xl font-bold text-white">Career Assets</h2>
              </div>
              <p className="text-sm text-gray-400 mb-6 font-medium relative z-10 leading-relaxed">
                Access your premium guides, including "The Unspoken Aura" by Sahil Dhinwa.
              </p>
              <button 
                onClick={() => router.push("/e-books")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-between group-hover:border-warning/50 relative z-10"
              >
                Open Library <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust & Security Badge */}
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
