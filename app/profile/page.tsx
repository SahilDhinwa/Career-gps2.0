"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { User as UserIcon, Mail, ShieldCheck, LogOut, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        // Kick unauthorized users back to login
        router.push("/login");
        return;
      }
      
      setUser(currentUser);

      // Fetch their premium status from Firestore
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setIsPremium(data.isPremium || false);
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
      console.error("Error logging out:", error);
    }
  };

  // --- THE SKELETON LOADER ---
  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 min-h-[85vh] animate-pulse">
        {/* Skeleton Title */}
        <div className="h-10 bg-gray-200 w-64 mb-8 rounded-sm"></div>

        {/* Skeleton Profile Card */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-8 shadow-sm mb-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 shrink-0"></div>
          <div className="flex-grow w-full text-center md:text-left flex flex-col items-center md:items-start">
            <div className="h-8 bg-gray-200 w-48 mb-3 rounded-sm"></div>
            <div className="h-4 bg-gray-200 w-32 rounded-sm"></div>
          </div>
          <div className="w-32 h-12 bg-gray-200 rounded-sm shrink-0"></div>
        </div>

        {/* Skeleton Premium Banner */}
        <div className="h-24 bg-gray-100 rounded-sm mb-8 border border-gray-200"></div>

        {/* Skeleton Database/Support Section */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="h-6 bg-gray-200 w-40 mb-4 rounded-sm"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-20 bg-gray-50 border border-gray-100 rounded-sm p-4">
              <div className="h-3 w-16 bg-gray-200 mb-3 rounded-sm"></div>
              <div className="h-4 w-full bg-gray-200 rounded-sm"></div>
            </div>
            <div className="h-20 bg-gray-50 border border-gray-100 rounded-sm p-4">
              <div className="h-3 w-32 bg-gray-200 mb-3 rounded-sm"></div>
              <div className="h-4 w-24 bg-gray-200 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- THE ACTUAL UI ---
  // Get the first initial for the avatar fallback
  const firstInitial = user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-[85vh]">
      <h1 className="font-heading text-4xl font-bold tracking-tight mb-8 text-foreground">
        Account Settings
      </h1>

      {/* Main Profile Card */}
      <div className="bg-surface border border-surfaceBorder rounded-sm p-8 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Avatar (Uses Google Photo if available, otherwise shows Initial) */}
          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center overflow-hidden shrink-0">
            {user?.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl font-bold text-primary">{firstInitial}</span>
            )}
          </div>

          <div className="text-center md:text-left flex-grow">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
              {user?.displayName || "Career GPS User"}
            </h2>
            <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 font-medium">
              <Mail className="w-4 h-4" /> {user?.email}
            </p>
          </div>

          <button 
            onClick={handleLogout}
            className="shrink-0 flex items-center gap-2 px-6 py-3 border border-red-200 text-red-600 font-bold hover:bg-red-50 transition-colors rounded-sm"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </div>

      {/* Premium Status Banner */}
      {isPremium ? (
        <div className="bg-[#0F5132]/5 border border-[#0F5132]/20 rounded-sm p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#0F5132] rounded-full text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#0F5132] flex items-center gap-2">
                Premium Member <Star className="w-4 h-4 fill-[#0F5132]" />
              </h3>
              <p className="text-sm text-gray-600 font-medium">You have unlimited access to all roadmaps and scholarships.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-full text-gray-500">
              <UserIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-gray-800">Free Tier Account</h3>
              <p className="text-sm text-gray-600 font-medium">Upgrade to Premium to unlock full stage-by-stage roadmaps.</p>
            </div>
          </div>
          <Link 
            href="/study-abroad/masters" 
            className="shrink-0 bg-primary text-white font-bold py-3 px-6 hover:bg-primaryHover transition-colors rounded-sm flex items-center gap-2"
          >
            Upgrade Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Database/Support Section */}
      <div className="mt-8 border-t border-gray-100 pt-8">
        <h3 className="font-heading text-xl font-bold mb-4">Account Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 border border-gray-100 rounded-sm">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">User ID</p>
            <p className="text-sm text-gray-800 font-mono truncate">{user?.uid}</p>
          </div>
          <div className="bg-gray-50 p-4 border border-gray-100 rounded-sm">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Account Created</p>
            <p className="text-sm text-gray-800 font-medium">
              {user?.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "N/A"}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
