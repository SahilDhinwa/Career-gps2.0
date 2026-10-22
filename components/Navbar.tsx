"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";
import { 
  User as UserIcon, Menu, X, Loader2, Sparkles, 
  Sun, Moon, Activity, Globe, Stethoscope 
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
          : "bg-surface border-b border-surfaceBorder shadow-md py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center justify-between">
        
        <Logo />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 font-medium text-sm">
          <Link href="/e-books" className={getLinkStyle("/e-books")}>E-Books</Link>

          <Link 
            href="/atreya" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-bold transition-all duration-300 border ${
              pathname.includes("/atreya")
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                : "bg-surface text-foreground/70 border-surfaceBorder hover:text-emerald-500 hover:border-emerald-500/30"
            }`}
          >
            <Globe className="w-3.5 h-3.5" /> ATREYA Global
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
            href="/bams-scholar" 
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-bold transition-all duration-300 border ${
              (pathname.includes("/bams-scholar") || pathname.includes("/bams-hub") || pathname.includes("/mcq-practice"))
                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                : "bg-surface text-foreground/70 border-surfaceBorder hover:text-amber-500 hover:border-amber-500/30"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" /> BAMS Hub
          </Link>

          {/* Batman Mode Toggle */}
          {mounted && (
            <button 
              onClick={handleBatmanToggle}
              className="relative group flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              title={theme === "batman" ? "Exit Batman Mode" : "Activate Batman Mode"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="w-16 h-8">
                <path 
                  d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
                  fill={theme === "batman" ? "#1a0202" : "#111827"} 
                  stroke={theme === "batman" ? "#ff1a1a" : "#D4AF37"} 
                  strokeWidth="1.8" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Right Actions: Clean Mobile Menu Button Box */}
        <div className="flex items-center gap-3 z-50">
          
          {mounted && isSwitchingToBatman && <CinematicIntro isActive={true} mode="batman" />}
          
          {isLoading ? (
            <div className="w-9 h-9 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin text-foreground/30" />
            </div>
          ) : user ? (
            <Link href="/profile" className="group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-emerald-700 p-0.5 shadow-sm">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center border border-background overflow-hidden">
                  {userData?.photoURL || user.photoURL ? (
                    <img src={userData?.photoURL || user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon className="w-4 h-4 text-foreground/70" />
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <Link href={`/login?redirect=${encodeURIComponent(pathname)}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors hidden sm:block">
              Login
            </Link>
          )}

          {/* Framed Mobile Menu Button (Matches FirstJobIndia clean aesthetic) */}
          <button 
            className="md:hidden w-10 h-10 rounded-xl bg-surface border border-surfaceBorder flex items-center justify-center text-foreground/80 hover:text-primary transition-colors shadow-sm focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Slide-Down Drawer (Houses secondary links & theme switchers) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceBorder shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-3 font-medium text-base">
          <Link href="/e-books" className={`py-2 font-bold ${getLinkStyle("/e-books")}`}>E-Books</Link>
          <Link href="/atreya" className="flex items-center gap-2.5 py-2 font-bold text-emerald-500">
            <Globe className="w-4 h-4" /> ATREYA Global
          </Link>
          <Link href="/interactive-topics" className="flex items-center gap-2.5 py-2 font-bold text-indigo-500">
            <Activity className="w-4 h-4" /> Clinical Modules
          </Link>
          <Link href="/bams-scholar" className="flex items-center gap-2.5 py-2 font-bold text-amber-500">
            <Stethoscope className="w-4 h-4" /> BAMS Scholar Hub
          </Link>
          
          <div className="pt-3 mt-2 border-t border-surfaceBorder flex items-center justify-between">
            <span className="text-sm font-bold">Theme / Mode</span>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full bg-background border border-surfaceBorder flex items-center justify-center text-foreground"
              >
                {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
