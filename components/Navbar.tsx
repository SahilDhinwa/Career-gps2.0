"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";
import { User as UserIcon, Menu, X, Loader2, Sparkles, Sun, Moon, Activity } from "lucide-react";
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
    return pathname === path
      ? "text-primary font-bold transition-colors" 
      : "text-foreground/80 hover:text-primary transition-colors"; 
  };

  const handleBatmanToggle = () => {
    if (theme === 'batman') {
      setTheme('dark'); // Exit Batman Mode
    } else {
      if (!user) {
        router.push(`/login?mode=batman&redirect=${encodeURIComponent(pathname)}`);
        return;
      }
      setIsSwitchingToBatman(true);
      setTimeout(() => {
        setTheme('batman');
        setIsSwitchingToBatman(false);
      }, 2500);
    }
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
        
        <Logo />

        <div className="hidden md:flex items-center gap-5 lg:gap-7 font-medium text-sm">
          <Link href="/e-books" className={getLinkStyle("/e-books")}>E-Books</Link>
          
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

          {/* EXACT BATMAN SILHOUETTE BUTTON */}
          {mounted && (
            <button 
              onClick={handleBatmanToggle}
              className="relative group flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              title={theme === 'batman' ? "Exit Batman Mode" : "Activate Batman Mode"}
              aria-label="Toggle Batman Mode"
            >
              <div className="absolute inset-0 bg-red-600/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 60" 
                className="w-20 h-10 drop-shadow-[0_0_6px_rgba(255,26,26,0.4)]"
              >
                <path 
                  d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
                  fill={theme === 'batman' ? "#1a0202" : "#111827"} 
                  stroke={theme === 'batman' ? "#ff1a1a" : "#D4AF37"} 
                  strokeWidth="1.8" 
                  strokeLinejoin="round"
                  className="transition-colors duration-300 group-hover:stroke-red-500"
                />
              </svg>
              <span className="absolute -bottom-4 text-[8px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-red-500 font-bold whitespace-nowrap">
                {theme === 'batman' ? 'Exit Mode' : 'Batman Mode'}
              </span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 md:gap-4 z-50">
          
          {mounted && isSwitchingToBatman && <CinematicIntro isActive={true} mode="batman" />}
          
          {mounted && theme !== 'batman' && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 transition-all shadow-sm shrink-0"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {isLoading ? (
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
              <Loader2 className="w-4 h-4 animate-spin text-foreground/30" />
            </div>
          ) : user ? (
            <Link href="/profile" className="group shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-emerald-700 p-0.5 shadow-sm transform group-hover:scale-105 transition-all">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center border border-background overflow-hidden">
                  {userData?.photoURL || user.photoURL ? (
                    <img src={userData?.photoURL || user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-3 shrink-0">
              <Link href={`/login?redirect=${encodeURIComponent(pathname)}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                Login
              </Link>
              <Link href={`/signup?redirect=${encodeURIComponent(pathname)}`} className="hidden md:block bg-primary text-white text-sm font-bold px-5 py-2 rounded-sm hover:bg-primaryHover transition-colors shadow-sm">
                Sign Up
              </Link>
            </div>
          )}

          <button 
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground/80 hover:text-primary transition-colors focus:outline-none -mr-1 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceBorder shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-2 font-medium text-base">
          <Link href="/e-books" className={`block py-3 ${getLinkStyle("/e-books")}`}>E-Books</Link>
          <Link href="/interactive-topics" className="flex items-center gap-2 py-3 mt-2 rounded-sm font-bold transition-all text-foreground/80 hover:text-indigo-500 px-4 border border-transparent">
            <Activity className="w-4 h-4" /> Clinical Modules
          </Link>
          <Link href="/bams-hub" className="flex items-center gap-2 py-3 rounded-sm font-bold transition-all text-foreground/80 hover:text-amber-500 px-4 border border-transparent">
            <Sparkles className="w-4 h-4" /> BAMS Hub
          </Link>
          
          {mounted && (
            <div className="py-3 flex items-center justify-between px-4 border border-surfaceBorder rounded-sm">
              <span className="text-sm font-bold">Batman Mode</span>
              <button 
                onClick={handleBatmanToggle}
                className="flex items-center justify-center p-1 cursor-pointer"
                aria-label="Toggle Batman Mode"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="w-20 h-10">
                  <path 
                    d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
                    fill={theme === 'batman' ? "#1a0202" : "#111827"} 
                    stroke={theme === 'batman' ? "#ff1a1a" : "#D4AF37"} 
                    strokeWidth="1.8" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}

          {!isLoading && !user && (
            <div className="pt-4 mt-2 border-t border-surfaceBorder flex flex-col gap-4">
              <Link href={`/signup?redirect=${encodeURIComponent(pathname)}`} className="bg-primary text-white font-bold py-3.5 text-center rounded-sm hover:bg-primaryHover transition-colors shadow-sm">
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
