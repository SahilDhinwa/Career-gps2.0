"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";
import { Compass, User as UserIcon, Menu, X, Loader2, Sparkles, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { user, userData, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Theme state
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Check if we are on the home page for the Netflix transparent effect
  const isLandingPage = pathname === "/";

  useEffect(() => {
    setMounted(true); 
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getLinkStyle = (path: string) => {
    return pathname === path
      ? "text-primary font-bold transition-colors" 
      : "text-foreground/80 hover:text-primary transition-colors"; 
  };

  return (
    <nav 
      className={`${isLandingPage ? "fixed" : "sticky"} top-0 left-0 w-full z-50 transition-all duration-300 ${
        (isLandingPage && !isScrolled && !isMobileMenuOpen)
          ? "bg-transparent border-b-transparent py-4" 
          : "bg-surface border-b border-surfaceBorder shadow-md py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Compass className="w-5 h-5 text-primary" />
          </div>
          <span className="font-heading font-bold text-lg md:text-xl text-foreground tracking-tight group-hover:text-primary transition-colors">
            Career GPS
          </span>
        </Link>

        {/* DESKTOP CENTRAL LINKS */}
        <div className="hidden md:flex items-center gap-7 font-medium text-sm">
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
          
          <Link 
            href="/bams-hub" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-bold transition-all duration-300 border ${
              pathname.includes("/bams-hub") || pathname.includes("/mcq-practice")
                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                : "bg-surface text-foreground/70 border-surfaceBorder hover:text-amber-500 hover:border-amber-500/30"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> BAMS Hub
          </Link>
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4 z-50">
          
          {/* Theme Toggle (Visible on Desktop AND Mobile) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {isLoading ? (
            <div className="w-9 h-9 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin text-foreground/30" />
            </div>
          ) : user ? (
            /* Circular Profile Avatar (Visible on Desktop AND Mobile) */
            <Link href="/profile" className="group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-emerald-700 p-0.5 shadow-sm transform group-hover:scale-105 transition-all">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center border border-background overflow-hidden">
                  {userData?.photoURL || user.photoURL ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={userData?.photoURL || user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                href={`/login?redirect=${encodeURIComponent(pathname)}`} 
                className="text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href={`/signup?redirect=${encodeURIComponent(pathname)}`} 
                className="hidden md:block bg-primary text-white text-sm font-bold px-5 py-2 rounded-sm hover:bg-primaryHover transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground/80 hover:text-primary transition-colors focus:outline-none -mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceBorder shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-2 font-medium text-base">
          
          <Link href="/pathways" className={`block py-3 ${getLinkStyle("/pathways")}`}>
            Pathways
          </Link>
          <Link href="/scholarships" className={`block py-3 ${getLinkStyle("/scholarships")}`}>
            Scholarships
          </Link>
          <Link href="/e-books" className={`block py-3 ${getLinkStyle("/e-books")}`}>
            E-Books
          </Link>
          <Link href="/dashboard/vault" className={`block py-3 ${getLinkStyle("/dashboard/vault")}`}>
            Action Vault
          </Link>

          <Link 
            href="/bams-hub" 
            className={`flex items-center gap-2 py-3 mt-2 rounded-sm font-bold transition-all ${
              pathname.includes("/bams-hub") || pathname.includes("/mcq-practice")
                ? "bg-amber-500/10 text-amber-500 px-4 border border-amber-500/20"
                : "text-foreground/80 hover:text-amber-500 px-4 border border-transparent"
            }`}
          >
            <Sparkles className="w-4 h-4" /> BAMS Hub
          </Link>

          {!isLoading && !user && (
            <div className="pt-4 mt-2 border-t border-surfaceBorder flex flex-col gap-4">
              <Link 
                href={`/signup?redirect=${encodeURIComponent(pathname)}`} 
                className="bg-primary text-white font-bold py-3.5 text-center rounded-sm hover:bg-primaryHover transition-colors shadow-sm"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
