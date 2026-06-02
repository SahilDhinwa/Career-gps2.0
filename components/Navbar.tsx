"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // This listener quietly checks if the user is logged in or logged out
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup the listener
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Send them back to the home page after logging out
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md px-6 md:px-10 py-4 flex justify-between items-center">
      {/* Brand Text */}
      <Link href="/" className="text-xs md:text-sm text-[#FBFBF9] hover:text-white transition-colors font-medium tracking-wide">
        by Employability Index
      </Link>

      {/* Dynamic Authentication Buttons */}
      <div className="flex items-center gap-4 md:gap-6">
        {user ? (
          // IF USER IS LOGGED IN: Show Dashboard & Logout
          <>
            <Link 
              href="/study-abroad" 
              className="text-white hover:text-success font-medium text-sm md:text-base transition-colors hidden sm:block"
            >
              Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 text-sm md:text-base font-bold hover:bg-red-600 transition-colors shadow-sm"
            >
              Logout
            </button>
          </>
        ) : (
          // IF USER IS LOGGED OUT: Show Login & Sign Up
          <>
            <Link 
              href="/login" 
              className="text-white hover:text-success font-medium text-sm md:text-base transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/login" 
              className="bg-[#FBFBF9] text-primary px-5 py-2 text-sm md:text-base font-bold hover:bg-gray-200 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
