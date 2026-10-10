"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";
import { User as UserIcon, Menu, X, Loader2, Sparkles, Sun, Moon, Activity, Crosshair } from "lucide-react";
import Logo from "./Logo";
import CinematicIntro from "./CinematicIntro";

export default function Navbar() {
  const { user, userData, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Theme state & Cinematic Intro state
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSwitchingToBatman, setIsSwitchingToBatman] = useState(false);

  // Check if we are on the home page for the transparent effect
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
        
        {/* NEW VEBLEN GOOD LOGO */}
        <Logo />

        {/* DESKTOP CENTRAL LINKS (Pathways & Vault Removed) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 font-medium text-sm">
          <Link href="/e-books" className={getLinkStyle("/e-books")}>
            E-Books
          </Link>
          
          <Link 
            href="/interactive-topics" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-bold transition-all duration-300 border ${
              pathname.includes("/interactive-topics")
                ? "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
                : "bg-surface text-foreground/70 border-surfaceBorder hover:text-indigo-500 hover:border-indigo-500/30"
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> Clinical Modules
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
          
          {/* THE CINEMATIC THEME TOGGLE */}
          {mounted && (
            <div className="relative flex items-center">
              {isSwitchingToBatman && <CinematicIntro isActive={true} mode="batman" />}
              
              <button
                onClick={() => {
                  if (theme === 'light') setTheme('dark');
                  else if (theme === 'dark') {
                    // THE GUEST GATE: Kick them to login if they try to access Tactical Mode
                    if (!user) {
                      router.push(`/login?mode=batman&redirect=${encodeURIComponent(pathname)}`);
                      return;
                    }
                    // THE VIP ENTRY: Freeze the screen, play animation, then switch theme
                    setIsSwitchingToBatman(true);
                    setTimeout(() => {
                      setTheme('batman');
                      setIsSwitchingToBatman(false);
                    }, 2500);
                  } 
                  else setTheme('light');
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm relative group overflow-hidden ${
                  theme === 'batman' 
                    ? 'bg-red-950/40 border border-red-900/60 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                    : 'bg-surface border border-surfaceBorder text-foreground/70 hover:text-foreground hover:border-foreground/30'
                }`}
                title={theme === 'light' ? 'Switch to Dark Mode' : theme === 'dark' ? 'Activate Tactical Mode' : 'Switch to Light Mode'}
              >
                {theme === "light" ? (
                  <Sun className="w-4 h-4" />
                ) : theme === "dark" ? (
                  <>
                    {/* Hover effect hints at the Tactical Mode */}
                    <Moon className="w-4 h-4 transition-opacity duration-300 group-hover:opacity-0 absolute" />
                    <Crosshair className="w-4 h-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-red-500 absolute" />
                  </>
                ) : (
                  <Crosshair className="w-4 h-4 animate-[pulse_2s_ease-in-out_infinite]" />
                )}
              </button>
            </div>
          )}

          {isLoading ? (
            <div className="w-9 h-9 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin text-foreground/30" />
            </div>
          ) : user ? (
            /* Circular Profile Avatar */
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
                Login
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
          <Link href="/e-books" className={`block py-3 ${getLinkStyle("/e-books")}`}>
            E-Books
          </Link>
          <Link href="/dashboard/vault" className={`block py-3 ${getLinkStyle("/dashboard/vault")}`}>
            Action Vault
          </Link>

          <Link 
            href="/interactive-topics" 
            className={`flex items-center gap-2 py-3 mt-2 rounded-sm font-bold transition-all ${
              pathname.includes("/interactive-topics")
                ? "bg-indigo-500/10 text-indigo-500 px-4 border border-indigo-500/20"
                : "text-foreground/80 hover:text-indigo-500 px-4 border border-transparent"
            }`}
          >
            <Activity className="w-4 h-4" /> Clinical Modules
          </Link>

          <Link 
            href="/bams-hub" 
            className={`flex items-center gap-2 py-3 rounded-sm font-bold transition-all ${
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
