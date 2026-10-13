"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface AuthContextType {
  user: User | null;
  userData: any | null;
  isPremium: boolean;
  isLoading: boolean;
  refreshUserData: () => Promise<void>; 
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  isPremium: false,
  isLoading: true,
  refreshUserData: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // BACKGROUND FETCH: Pulls fresh data and silently updates the local cache
  const fetchUserData = async (currentUser: User) => {
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setUserData(data);
        setIsPremium(data.isPremium || false);
        
        // Save fresh data to browser memory for next time
        if (typeof window !== "undefined") {
          localStorage.setItem(`veblen_cache_${currentUser.uid}`, JSON.stringify(data));
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const refreshUserData = async () => {
    if (auth.currentUser) {
      await fetchUserData(auth.currentUser);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        // ⚡ INSTANT LOAD: Check local browser memory first
        if (typeof window !== "undefined") {
          const cachedData = localStorage.getItem(`veblen_cache_${currentUser.uid}`);
          if (cachedData) {
            try {
              const parsed = JSON.parse(cachedData);
              setUserData(parsed);
              setIsPremium(parsed.isPremium || false);
              setIsLoading(false); // Unblock the UI instantly!
            } catch (e) {
              console.error("Cache parse error", e);
            }
          }
        }

        // Silently fetch fresh data in the background
        await fetchUserData(currentUser);
        
        // Failsafe: Turn off loading if there was no cache
        setIsLoading(false); 

      } else {
        // User is logged out
        setUser(null);
        setUserData(null);
        setIsPremium(false);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData, isPremium, isLoading, refreshUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
