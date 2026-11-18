
"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { auth, db } from "../lib/firebase";

import {
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import {
  doc,
  getDoc,
  type DocumentData,
} from "firebase/firestore";

export interface AtreyaUserData extends DocumentData {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;

  role?: string;
  isPremium?: boolean;

  roadmapProgress?: Record<
    string,
    number | string
  >;

  checklistProgress?: Record<
    string,
    string[]
  >;
}

interface AuthContextType {
  user: User | null;
  userData: AtreyaUserData | null;
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

const CACHE_PREFIX = "veblen_cache_";

function getCacheKey(uid: string): string {
  return `${CACHE_PREFIX}${uid}`;
}

function readCachedUserData(
  uid: string
): AtreyaUserData | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(
      getCacheKey(uid)
    );

    if (!raw) {
      return null;
    }

    const parsed: unknown = JSON.parse(raw);

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      Array.isArray(parsed)
    ) {
      return null;
    }

    return parsed as AtreyaUserData;
  } catch {
    return null;
  }
}

function saveCachedUserData(
  uid: string,
  data: AtreyaUserData
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      getCacheKey(uid),
      JSON.stringify(data)
    );
  } catch {
    // Storage may be unavailable or full.
    // Authentication must continue working.
  }
}

function clearCachedUserData(
  uid: string
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(
      getCacheKey(uid)
    );
  } catch {
    // Ignore unavailable browser storage.
  }
}

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  const [userData, setUserData] =
    useState<AtreyaUserData | null>(null);

  const [isPremium, setIsPremium] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(true);

  // Prevent older requests from replacing
  // data belonging to a newer auth session.
  const requestVersionRef = useRef(0);

  const mountedRef = useRef(false);

  const fetchUserData = useCallback(
    async (
      currentUser: User,
      requestVersion: number
    ): Promise<void> => {
      try {
        const userRef = doc(
          db,
          "users",
          currentUser.uid
        );

        const snapshot = await getDoc(userRef);

        if (
          !mountedRef.current ||
          requestVersionRef.current !==
            requestVersion ||
          auth.currentUser?.uid !==
            currentUser.uid
        ) {
          return;
        }

        if (!snapshot.exists()) {
          setUserData(null);
          setIsPremium(false);

          clearCachedUserData(
            currentUser.uid
          );

          return;
        }

        const data =
          snapshot.data() as AtreyaUserData;

        setUserData(data);

        setIsPremium(
          data.isPremium === true
        );

        saveCachedUserData(
          currentUser.uid,
          data
        );
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error
        );

        // Cached data is useful for UI continuity,
        // but privileged states must not be trusted
        // when the fresh request fails.
        if (
          mountedRef.current &&
          requestVersionRef.current ===
            requestVersion &&
          auth.currentUser?.uid ===
            currentUser.uid
        ) {
          setIsPremium(false);

          setUserData((previous) => {
            if (!previous) {
              return null;
            }

            return {
              ...previous,
              isPremium: false,
              role: undefined,
            };
          });
        }
      }
    },
    []
  );

  const refreshUserData =
    useCallback(async (): Promise<void> => {
      const currentUser =
        auth.currentUser;

      if (!currentUser) {
        return;
      }

      const requestVersion =
        ++requestVersionRef.current;

      await fetchUserData(
        currentUser,
        requestVersion
      );
    }, [fetchUserData]);

  useEffect(() => {
    mountedRef.current = true;

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        const requestVersion =
          ++requestVersionRef.current;

        if (!currentUser) {
          setUser(null);
          setUserData(null);
          setIsPremium(false);
          setIsLoading(false);

          return;
        }

        setUser(currentUser);

        // Immediately reset previous-account data.
        setUserData(null);
        setIsPremium(false);

        // Restore non-authoritative UI cache.
        const cachedData =
          readCachedUserData(
            currentUser.uid
          );

        if (cachedData) {
          setUserData({
            ...cachedData,

            // Never treat cached privilege flags
            // as current authorization.
            role: undefined,
            isPremium: false,
          });
        }

        // Preserve fast page rendering.
        setIsLoading(false);

        // Refresh from Firestore in background.
        void fetchUserData(
          currentUser,
          requestVersion
        );
      }
    );

    return () => {
      mountedRef.current = false;
      requestVersionRef.current += 1;

      unsubscribe();
    };
  }, [fetchUserData]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        isPremium,
        isLoading,
        refreshUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
