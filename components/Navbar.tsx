"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { Compass, User as UserIcon } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-surfaceBorder shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <Compass className="w-6 h-6" />
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Career GPS
          </span>
        </Link>

        {/* Desktop Central Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <Link href="/pathways" className="hover:text-primary transition-colors">
            Pathways
          </Link>
          <Link href="/study-abroad/masters" className="hover:text-primary transition-colors">
            Scholarships
          </Link>
        </div>

        {/* Dynamic Auth Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <Link 
              href="/profile" 
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-sm transition-colors font-bold text-sm"
            >
              <UserIcon className="w-4 h-4" /> Profile
            </Link>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-sm font-bold text-gray-600 hover:text-primary transition-colors hidden sm:block"
              >
                Login
              </Link>
              <Link 
                href="/login" 
                className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-sm hover:bg-primaryHover transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}
