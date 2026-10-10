"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. THEMES DEFINED WITH REAL HEX COLORS
type NoteTheme = {
  id: string; name: string; bgLight: string; bgDark: string; textLight: string; textDark: string;
  borderLight: string; borderDark: string; accentLight: string; accentDark: string;
  accentBgLight: string; accentBgDark: string; bgImageDark?: string; swatchColor: string;
};

const NOTE_THEMES: NoteTheme[] = [
  { id: "vintage", name: "Classic Vintage", bgLight: "#fdfbf7", bgDark: "#1a110a", textLight: "#1e293b", textDark: "#3a2f24", borderLight: "#94a3b8", borderDark: "#475569", accentLight: "#dc2626", accentDark: "#991b1b", accentBgLight: "#fee2e2", accentBgDark: "#450a0a", bgImageDark: "url('/vintage-page.jpg')", swatchColor: "#d4c5b0" },
  { id: "midnight", name: "Midnight Blue", bgLight: "#f8fafc", bgDark: "#0f172a", textLight: "#334155", textDark: "#cbd5e1", borderLight: "#475569", borderDark: "#475569", accentLight: "#2563eb", accentDark: "#38bdf8", accentBgLight: "#eff6ff", accentBgDark: "#1e3a8a", swatchColor: "#1e293b" },
  // ... (You can keep your other themes here, I abbreviated for brevity)
];

// 2. MAIN CANVAS WRAPPER
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>("midnight");
  const [mounted, setMounted] = useState(false);
  
  // SWIPE STATE
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const { theme: currentTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const theme = NOTE_THEMES.find((t) => t.id === activeThemeId) || NOTE_THEMES[0];
  const activeIndex = NOTE_THEMES.findIndex((t) => t.id === activeThemeId);
  
  // 🦇 TACTICAL OVERRIDE: Check for Batman Mode
  const isBatman = currentTheme === "batman" || resolvedTheme === "batman";
  const isDark = resolvedTheme === "dark" || isBatman;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      const nextIndex = (activeIndex + 1) % NOTE_THEMES.length;
      setActiveThemeId(NOTE_THEMES[nextIndex].id);
    } else if (distance < -minSwipeDistance) {
      const prevIndex = (activeIndex - 1 + NOTE_THEMES.length) % NOTE_THEMES.length;
      setActiveThemeId(NOTE_THEMES[prevIndex].id);
    }
  };

  if (!mounted) return null;

  // 🦇 FORCE BATMAN VARIABLES IF ACTIVE
  const cssVariables = isBatman ? {
    backgroundColor: "transparent", // Lets the glowing rain/embers show through
    '--theme-text': "#E5E7EB", // Crisp light gray text
    '--theme-border': "#3A0A0A", // Dark red borders
    '--theme-accent': "#E50914", // Crimson red highlights
    '--theme-accent-bg': "#141414", // Deep matte charcoal for cards
  } : {
    backgroundColor: isDark ? theme.bgDark : theme.bgLight,
    '--theme-text': isDark ? theme.textDark : theme.textLight,
    '--theme-border': isDark ? theme.borderDark : theme.borderLight,
    '--theme-accent': isDark ? theme.accentDark : theme.accentLight,
    '--theme-accent-bg': isDark ? theme.accentBgDark : theme.accentBgLight,
  };

  return (
    <div 
      className="min-h-screen p-3 sm:p-6 md:p-12 lg:p-16 flex flex-col items-center transition-colors duration-500 relative overflow-x-hidden"
      style={cssVariables as React.CSSProperties}
    >
      {/* Background Image (Only in standard dark mode) */}
      {isDark && !isBatman && theme.bgImageDark && (
        <div className="absolute inset-0 z-0" 
             style={{ backgroundImage: theme.bgImageDark, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center", opacity: 0.95 }}
        />
      )}

      {/* 🦇 HIDE THEME SELECTOR IN BATMAN MODE */}
      {!isBatman && (
        <div className="w-full max-w-md flex flex-col items-center mt-2 mb-10 z-20">
          <div 
            className="relative w-full h-36 overflow-hidden flex justify-center items-start touch-pan-y pt-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {NOTE_THEMES.map((t, index) => {
              let diff = index - activeIndex;
              const len = NOTE_THEMES.length;
              const half = Math.floor(len / 2);
              
              if (diff > half) diff -= len;
              else if (diff < -half) diff += len;

              let styleClasses = "opacity-0 scale-50 -translate-y-8 pointer-events-none z-0";
              
              if (diff === 0) styleClasses = "opacity-100 scale-[1.35] translate-y-12 z-30 shadow-lg border border-white/20";
              else if (diff === -1) styleClasses = "opacity-80 scale-100 -translate-x-[4.5rem] translate-y-5 z-20 cursor-pointer hover:opacity-100 hover:scale-105 shadow-md";
              else if (diff === 1) styleClasses = "opacity-80 scale-100 translate-x-[4.5rem] translate-y-5 z-20 cursor-pointer hover:opacity-100 hover:scale-105 shadow-md";
              else if (diff === -2) styleClasses = "opacity-40 scale-[0.70] -translate-x-[8.5rem] translate-y-0 z-10 cursor-pointer hover:opacity-60 shadow-sm";
              else if (diff === 2) styleClasses = "opacity-40 scale-[0.70] translate-x-[8.5rem] translate-y-0 z-10 cursor-pointer hover:opacity-60 shadow-sm";

              return (
                 <button
                    key={t.id}
                    onClick={() => setActiveThemeId(t.id)}
                    className={`absolute top-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex-shrink-0 w-10 h-14 md:w-12 md:h-16 rounded-sm ${styleClasses}`}
                    style={{ backgroundColor: t.swatchColor, ...handDrawnBorder }}
                    title={t.name}
                 >
                   {diff === 0 && <span className="absolute inset-0 flex items-center justify-center text-white/50 text-xs">✦</span>}
                 </button>
              );
            })}
          </div>
          <p className="text-sm md:text-base font-bold opacity-80 text-[var(--theme-text)] mt-2 transition-all duration-300" style={{ fontFamily: "var(--font-kalam)" }}>
            Paper: {theme.name}
          </p>
        </div>
      )}

      {/* Main Content Area */}
      <div 
        className={`max-w-4xl w-full z-10 relative overflow-hidden text-[var(--theme-text)] ${isBatman ? 'mt-10' : ''}`} 
        style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}
