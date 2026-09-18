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
      <div className="max-w-6xl mx-auto px-6 h-12 md:h-14 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity z-50">
          <Compass className="w-6 h-6 md:w-7 md:h-7" />
          <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-foreground">
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
            className="flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 hover:border-primary px-3 py-1.5 rounded-sm font-bold transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5" /> BAMS HUB
          </Link>
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4 z-50">
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex p-2 text-foreground/70 hover:text-primary hover:bg-foreground/5 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          {isLoading ? (
            <div className="w-16 h-8 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin text-foreground/30" />
            </div>
          ) : user ? (
            <Link 
              href="/profile" 
              className="hidden md:flex items-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-4 py-2 rounded-sm transition-colors font-bold text-sm border border-surfaceBorder"
            >
              {userData?.photoURL || user.photoURL ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={userData?.photoURL || user.photoURL} alt="Profile" className="w-5 h-5 rounded-full object-cover border border-surfaceBorder" />
              ) : (
                <UserIcon className="w-4 h-4" /> 
              )}
              <span>Profile</span>
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

          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceBorder shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 font-medium text-base">
          
          {user && !isLoading && (
             <Link 
             href="/profile" 
             className="flex items-center gap-3 bg-foreground/5 p-3 rounded-sm border border-surfaceBorder"
           >
             {userData?.photoURL || user.photoURL ? (
               /* eslint-disable-next-line @next/next/no-img-element */
               <img src={userData?.photoURL || user.photoURL} alt="Profile" className="w-8 h-8 rounded-full object-cover border border-surfaceBorder" />
             ) : (
               <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center"><UserIcon className="w-4 h-4 text-foreground/70" /></div>
             )}
             <span className="font-bold text-foreground">My Profile</span>
           </Link>
          )}

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
            Action Vault
          </Link>

          <Link 
            href="/bams-hub" 
            className="flex items-center justify-center gap-2 bg-primary/10 text-primary border border-primary/20 py-3 rounded-sm font-bold transition-all"
          >
            <Sparkles className="w-4 h-4" /> BAMS 2nd Prof Hub
          </Link>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 py-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-primary" />}
              <span>{theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
            </button>
          )}

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
