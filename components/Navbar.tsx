"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { Compass, User as UserIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current active route

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Automatically close the mobile menu whenever the user navigates to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Helper function to apply dynamic active styles
  const getLinkStyle = (path: string) => {
    return pathname === path
      ? "text-primary font-bold transition-colors" // Active state
      : "text-foreground/70 hover:text-primary transition-colors"; // Inactive state
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-surfaceBorder shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity z-50">
          <Compass className="w-6 h-6" />
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Career GPS
          </span>
        </Link>

        {/* DESKTOP CENTRAL LINKS (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/pathways" className={getLinkStyle("/pathways")}>
            Pathways
          </Link>
          <Link href="/scholarships" className={getLinkStyle("/scholarships")}>
            Scholarships
          </Link>
          <Link href="/e-books" className={getLinkStyle("/e-books")}>
            E-Books
          </Link>
          <Link href="/dashboard/vault" className={getLinkStyle("/dashboard/vault")}>
            Vault
          </Link>
        </div>

        {/* RIGHT SIDE ACTIONS (Profile/Login + Hamburger Toggle) */}
        <div className="flex items-center gap-3 md:gap-4 z-50">
          {user ? (
            <Link 
              href="/profile" 
              className="flex items-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-4 py-2 rounded-sm transition-colors font-bold text-sm border border-surfaceBorder"
            >
              <UserIcon className="w-4 h-4" /> 
              {/* Hide the word "Profile" on very small phones to save space */}
              <span className="hidden sm:inline">Profile</span>
            </Link>
          ) : (
            <div className="hidden sm:flex items-center gap-4">
              <Link 
                href={`/login?redirect=${encodeURIComponent(pathname)}`} 
                className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link 
                href={`/signup?redirect=${encodeURIComponent(pathname)}`} 
                className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-sm hover:bg-primaryHover transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-surface border-b border-surfaceBorder shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-5 font-medium text-sm">
          <Link href="/pathways" className={getLinkStyle("/pathways")}>
            Pathways
          </Link>
          <Link href="/scholarships" className={getLinkStyle("/scholarships")}>
            Scholarships
          </Link>
          <Link href="/e-books" className={getLinkStyle("/e-books")}>
            E-Books
          </Link>
          <Link href="/dashboard/vault" className={getLinkStyle("/dashboard/vault")}>
            Vault
          </Link>

          {/* Render Login/Signup in the mobile dropdown if the user is logged out */}
          {!user && (
            <div className="pt-4 mt-2 border-t border-surfaceBorder flex flex-col gap-4 sm:hidden">
              <Link 
                href={`/login?redirect=${encodeURIComponent(pathname)}`} 
                className="text-foreground/70 font-bold hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link 
                href={`/signup?redirect=${encodeURIComponent(pathname)}`} 
                className="bg-primary text-white font-bold py-3 text-center rounded-sm hover:bg-primaryHover transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
