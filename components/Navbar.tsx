"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";
import { 
  User as UserIcon, Menu, X, Loader2, Sparkles, 
  Sun, Moon, Activity, Globe, Stethoscope, LogIn, UserPlus 
} from "lucide-react";
import Logo from "./Logo";
import CinematicIntro from "./CinematicIntro";

export default function Navbar() {
  const { user, userData, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSwitchingToBatman, setIsSwitchingToBatman] = useState(false);

  const isLandingPage = pathname === "/";

  useEffect(() => {
    setMounted(true); 
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    if (mounted && theme === "batman") {
      return isActive 
        ? "text-red-500 font-bold transition-colors" 
        : "text-gray-300 hover:text-red-500 transition-colors";
    }
    return isActive
      ? "text-primary font-bold transition-colors" 
      : "text-foreground/80 hover:text-primary transition-colors"; 
  };

  const handleBatmanToggle = () => {
    if (theme === "batman") {
      setTheme("dark");
    } else {
      if (!user) {
        router.push(`/login?mode=batman&redirect=${encodeURIComponent(pathname)}`);
        return;
      }
      setIsSwitchingToBatman(true);
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        setTheme("batman");
        setIsSwitchingToBatman(false);
      }, 10000);
    }
  };

  return (
    <nav 
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        (isLandingPage && !isScrolled && !isMobileMenuOpen)
          ? "bg-transparent border-b-transparent py-4" 
          : "bg-surface/95 backdrop-blur-md border-b border-surfaceBorder shadow-sm py-2 sm:py-2.5"
      }`}
    >
      {/* 
        FIXED FLUID HEIGHT: 
        Replaced fixed h-12 with min-h-[3.5rem] md:min-h-[4rem] so the new 
        detailed Logo and sweeping 'R' wordmark have vertical breathing room without clipping.
      */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-[3.5rem] sm:min-h-[4rem] flex items-center justify-between gap-4">
        
        <Logo />

        {/* =========================================================
            DESKTOP NAV (Hidden strictly on screens smaller than lg)
            ========================================================= */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 font-medium text-[13px] xl:text-sm">
          <Link href="/e-books" className={getLinkStyle("/e-books")}>E-Books</Link>
          
          {/* FIXED: Added getLinkStyle so it matches the other text links */}
          <Link href="/dinacharya" className={getLinkStyle("/dinacharya")}>Dinacharya Palan</Link>
          
          <Link 
            href="/atreya" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all duration-300 border ${
              mounted && theme === "batman"
                ? pathname.includes("/atreya")
                  ? "bg-red-950/40 text-red-500 border-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                  : "bg-[#141414] text-gray-300 border-red-950/60 hover:text-red-500 hover:border-red-500/50 hover:bg-red-950/20"
                : pathname.includes("/atreya")
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                  : "bg-surface text-foreground/70 border-surfaceBorder hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 shadow-sm"
            }`}
          >
            <Globe className="w-3.5 h-3.5" /> Ayurveda Global
          </Link>
          
          <Link 
            href="/interactive-topics" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all duration-300 border ${
              mounted && theme === "batman"
                ? pathname.includes("/interactive-topics")
                  ? "bg-red-950/40 text-red-500 border-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                  : "bg-[#141414] text-gray-300 border-red-950/60 hover:text-red-500 hover:border-red-500/50 hover:bg-red-950/20"
                : pathname.includes("/interactive-topics")
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
                  : "bg-surface text-foreground/70 border-surfaceBorder hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 shadow-sm"
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> Clinical Modules
          </Link>

          <Link 
            href="/bams-scholar" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all duration-300 border ${
              mounted && theme === "batman"
                ? (pathname.includes("/bams-scholar") || pathname.includes("/bams-hub") || pathname.includes("/mcq-practice"))
                  ? "bg-red-950/40 text-red-500 border-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                  : "bg-[#141414] text-gray-300 border-red-950/60 hover:text-red-500 hover:border-red-500/50 hover:bg-red-950/20"
                : (pathname.includes("/bams-scholar") || pathname.includes("/bams-hub") || pathname.includes("/mcq-practice"))
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-500 border-amber-500/20"
                  : "bg-surface text-foreground/70 border-surfaceBorder hover:text-amber-600 dark:hover:text-amber-500 hover:border-amber-500/30 shadow-sm"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" /> BAMS Hub
          </Link>

          {mounted && (
            <button 
              onClick={handleBatmanToggle}
              className="relative group flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              title={theme === "batman" ? "Exit Batman Mode" : "Activate Batman Mode"}
              aria-label="Toggle Batman Mode"
            >
              <div className="absolute inset-0 bg-red-600/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="w-[3.5rem] h-[1.75rem] drop-shadow-[0_0_6px_rgba(255,26,26,0.4)]">
                <path 
                  d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
                  fill={theme === "batman" ? "#1a0202" : "#111827"} 
                  stroke={theme === "batman" ? "#ff1a1a" : "#D4AF37"} 
                  strokeWidth="1.8" 
                  strokeLinejoin="round"
                  className="transition-colors duration-300 group-hover:stroke-red-500"
                />
              </svg>
              <span className="absolute -bottom-4 text-[8px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-red-500 font-bold whitespace-nowrap">
                {theme === "batman" ? "Exit Mode" : "Batman Mode"}
              </span>
            </button>
          )}
        </div>

        {/* =========================================================
            RIGHT ACTIONS (Mobile Menu Button + Desktop Auth/Theme)
            ========================================================= */}
        <div className="flex items-center gap-3 shrink-0 z-50">
          
          {mounted && isSwitchingToBatman && <CinematicIntro isActive={true} mode="batman" />}
          
          {/* Desktop Theme Toggle */}
          {mounted && theme !== "batman" && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden lg:flex w-9 h-9 rounded-xl bg-surface border border-surfaceBorder items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/40 transition-all shadow-sm shrink-0 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {isLoading ? (
            <div className="w-9 h-9 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin text-foreground/30" />
            </div>
          ) : user ? (
            <Link href="/profile" className="group hidden sm:block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-emerald-700 p-0.5 shadow-sm transform group-hover:scale-105 transition-all">
                <div className="w-full h-full rounded-[10px] bg-surface flex items-center justify-center border border-background overflow-hidden">
                  {userData?.photoURL || user.photoURL ? (
                    <img src={userData?.photoURL || user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon className="w-4 h-4 text-foreground/70" />
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link 
                href={`/login?redirect=${encodeURIComponent(pathname)}`} 
                className={`text-sm font-bold transition-colors px-3 py-2 rounded-lg ${
                  mounted && theme === "batman" ? "text-gray-300 hover:text-red-500 hover:bg-red-500/10" : "text-foreground/80 hover:text-primary hover:bg-surfaceBorder/30"
                }`}
              >
                Login
              </Link>
              <Link 
                href={`/signup?redirect=${encodeURIComponent(pathname)}`} 
                className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Clean Framed Menu Button (Visible < lg) */}
          <button 
            className="lg:hidden w-10 h-10 rounded-xl bg-surface border border-surfaceBorder flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary/40 transition-all shadow-sm focus:outline-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* =========================================================
          MOBILE SLIDE-DOWN DRAWER
          ========================================================= */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceBorder shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[85vh] opacity-100 border-t" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-2 font-medium text-base">
          <Link href="/e-books" className={`py-3 font-bold ${getLinkStyle("/e-books")}`}>E-Books</Link>
          <Link href="/dinacharya" className={`py-3 font-bold ${getLinkStyle("/dinacharya")}`}>Dinacharya Palan</Link>
          
          <Link href="/atreya" className="flex items-center gap-2.5 py-3 font-bold text-emerald-600 dark:text-emerald-400">
            <Globe className="w-5 h-5" /> Ayurveda Global
          </Link>
          <Link href="/interactive-topics" className="flex items-center gap-2.5 py-3 font-bold text-indigo-600 dark:text-indigo-400">
            <Activity className="w-5 h-5" /> Clinical Modules
          </Link>
          <Link href="/bams-scholar" className="flex items-center gap-2.5 py-3 font-bold text-amber-600 dark:text-amber-500">
            <Stethoscope className="w-5 h-5" /> BAMS Scholar Hub
          </Link>
          <Link href="/bams-hub" className="flex items-center gap-2.5 py-3 font-bold text-amber-700 dark:text-amber-400">
            <Sparkles className="w-5 h-5" /> BAMS 2nd Prof Command Center
          </Link>

          {/* Mobile Preferences Section */}
          <div className="pt-6 mt-4 border-t border-surfaceBorder space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2">Preferences</p>
            
            <div className="flex items-center justify-between">
              <span className={`text-sm font-bold ${theme === "batman" ? "text-gray-300" : ""}`}>Dark/Light Theme</span>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 rounded-xl bg-background border border-surfaceBorder flex items-center justify-center text-foreground cursor-pointer shadow-sm"
                >
                  {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className={`text-sm font-bold ${theme === "batman" ? "text-gray-300" : ""}`}>Batman Mode</span>
              {mounted && (
                <button 
                  onClick={handleBatmanToggle}
                  className="flex items-center justify-center p-1.5 cursor-pointer bg-background rounded-xl border border-surfaceBorder shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="w-12 h-6">
                    <path 
                      d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
                      fill={theme === "batman" ? "#1a0202" : "#111827"} 
                      stroke={theme === "batman" ? "#ff1a1a" : "#D4AF37"} 
                      strokeWidth="1.8" 
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Auth Section */}
          {!isLoading && !user && (
            <div className="pt-6 mt-4 border-t border-surfaceBorder flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Account</p>
              <Link 
                href={`/login?redirect=${encodeURIComponent(pathname)}`} 
                className="w-full py-3.5 rounded-xl border border-surfaceBorder bg-surface text-center font-bold text-sm hover:bg-surfaceBorder/30 flex items-center justify-center gap-2 shadow-sm"
              >
                <LogIn className="w-4 h-4" /> Login to Account
              </Link>
              <Link 
                href={`/signup?redirect=${encodeURIComponent(pathname)}`} 
                className="w-full py-3.5 rounded-xl bg-primary text-white text-center font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" /> Create Free Account
              </Link>
            </div>
          )}

          {/* Mobile Profile Link */}
          {!isLoading && user && (
            <div className="pt-6 mt-4 border-t border-surfaceBorder">
              <Link 
                href="/profile" 
                className="w-full py-3.5 rounded-xl bg-background border border-surfaceBorder text-center font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <UserIcon className="w-4 h-4" /> View My Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
