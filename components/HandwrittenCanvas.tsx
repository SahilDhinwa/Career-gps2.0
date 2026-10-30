"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. ALL 12 ORIGINAL THEMES RESTORED
type NoteTheme = {
  id: string; name: string; bgLight: string; bgDark: string; textLight: string; textDark: string;
  borderLight: string; borderDark: string; accentLight: string; accentDark: string;
  accentBgLight: string; accentBgDark: string; bgImageDark?: string; swatchColor: string;
};

const NOTE_THEMES: NoteTheme[] = [
  { id: "vintage", name: "Classic Vintage", bgLight: "#fdfbf7", bgDark: "#1a110a", textLight: "#1e293b", textDark: "#3a2f24", borderLight: "#94a3b8", borderDark: "#475569", accentLight: "#dc2626", accentDark: "#991b1b", accentBgLight: "#fee2e2", accentBgDark: "#450a0a", bgImageDark: "url('/vintage-page.jpg')", swatchColor: "#d4c5b0" },
  { id: "wabi-sabi-indigo", name: "Indigo Stone", bgLight: "#f4f6f9", bgDark: "#0f131a", textLight: "#1a2536", textDark: "#e2e8f0", borderLight: "#94a3b8", borderDark: "#475569", accentLight: "#2563eb", accentDark: "#38bdf8", accentBgLight: "#dbeafe", accentBgDark: "#172554", swatchColor: "#cbd5e1" },
  { id: "oxidized-copper", name: "Verdigris Slate", bgLight: "#f1f6f4", bgDark: "#111714", textLight: "#16221c", textDark: "#e4ede9", borderLight: "#627d70", borderDark: "#3d5248", accentLight: "#701a75", accentDark: "#f472b6", accentBgLight: "#fce7f3", accentBgDark: "#831843", swatchColor: "#cbdcd4" },
  { id: "charcoal-lavender", name: "Deep Charcoal (Lavender)", bgLight: "#f1f3f4", bgDark: "#121214", textLight: "#263238", textDark: "#eceff1", borderLight: "#cfd8dc", borderDark: "#90a4ae", accentLight: "#6200ee", accentDark: "#bb86fc", accentBgLight: "#f3e8ff", accentBgDark: "#3b0764", swatchColor: "#121214" },
  { id: "cyber-terminal", name: "Amber Terminal", bgLight: "#fffcf5", bgDark: "#16140f", textLight: "#2c220f", textDark: "#f7e8cc", borderLight: "#d4b373", borderDark: "#8f7647", accentLight: "#d97706", accentDark: "#fbbf24", accentBgLight: "#fef3c7", accentBgDark: "#78350f", swatchColor: "#f7e8cc" },
  { id: "midnight", name: "Midnight Blue", bgLight: "#f8fafc", bgDark: "#0f172a", textLight: "#334155", textDark: "#cbd5e1", borderLight: "#475569", borderDark: "#475569", accentLight: "#2563eb", accentDark: "#38bdf8", accentBgLight: "#eff6ff", accentBgDark: "#1e3a8a", swatchColor: "#1e293b" },
  { id: "sepia", name: "Warm Sepia", bgLight: "#f4ecd8", bgDark: "#433422", textLight: "#5c4d3c", textDark: "#f4ecd8", borderLight: "#8b7355", borderDark: "#6b563f", accentLight: "#c2410c", accentDark: "#fb923c", accentBgLight: "#ffedd5", accentBgDark: "#7c2d12", swatchColor: "#8b7355" },
  { id: "puredark", name: "Pure Dark (AMOLED)", bgLight: "#ffffff", bgDark: "#000000", textLight: "#000000", textDark: "#e2e8f0", borderLight: "#475569", borderDark: "#334155", accentLight: "#dc2626", accentDark: "#f87171", accentBgLight: "#fef2f2", accentBgDark: "#450a0a", swatchColor: "#000000" },
  { id: "velvet", name: "Royal Velvet", bgLight: "#fff5f7", bgDark: "#270810", textLight: "#4c0519", textDark: "#fce7f3", borderLight: "#9f1239", borderDark: "#5a1827", accentLight: "#e11d48", accentDark: "#fbbf24", accentBgLight: "#ffe4e6", accentBgDark: "#881337", swatchColor: "#881337" },
  { id: "pastelsage", name: "Pastel Sage", bgLight: "#f2f7f5", bgDark: "#121a15", textLight: "#1e2a22", textDark: "#f0f5f2", borderLight: "#7e9486", borderDark: "#5a6b60", accentLight: "#0fa3b1", accentDark: "#38bdf8", accentBgLight: "#ccfbf1", accentBgDark: "#134e4a", swatchColor: "#cde6e3" },
  { id: "charcoal-cyan", name: "Deep Charcoal (Cyan)", bgLight: "#f0f4f5", bgDark: "#121214", textLight: "#212d31", textDark: "#eceff1", borderLight: "#b2c1c6", borderDark: "#90a4ae", accentLight: "#00b4d8", accentDark: "#4deeea", accentBgLight: "#e0f2fe", accentBgDark: "#082f49", swatchColor: "#121214" },
  { id: "babypink", name: "Baby Pink", bgLight: "#fdf2f8", bgDark: "#1f111a", textLight: "#4c0519", textDark: "#fce7f3", borderLight: "#be185d", borderDark: "#f472b6", accentLight: "#e11d48", accentDark: "#fda4af", accentBgLight: "#ffe4e6", accentBgDark: "#881337", swatchColor: "#fbcfe8" }
];

// 🦇 2. BATMAN EXCLUSIVE READING THEMES
const BATMAN_NOTE_THEMES = [
  {
    id: "bat-stone",
    name: "Arkham Concrete",
    bgImage: "url('/bat-stone.jpg')", // The cracked concrete wall
    text: "#e4e4e7", // Crisp light silver for contrast against dark stone
    border: "#3f3f46", 
    accent: "#ef4444", 
    accentBg: "rgba(10, 10, 10, 0.7)", 
    swatchColor: "#27272a"
  },
  {
    id: "bat-steel",
    name: "Gotham Steel",
    bgImage: "url('/bat-steel.jpg')", // The scratched metal with ink splatter
    text: "#d4d4d8", // Softer gray for the slightly brighter metal
    border: "#27272a",
    accent: "#dc2626",
    accentBg: "rgba(5, 5, 5, 0.6)",
    swatchColor: "#3f3f46"
  }
];

// 3. MAIN CANVAS WRAPPER
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>("midnight");
  const [activeBatThemeId, setActiveBatThemeId] = useState<string>("bat-stone");
  const [mounted, setMounted] = useState(false);
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const { theme: currentTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isBatman = currentTheme === "batman" || resolvedTheme === "batman";
  const isDark = resolvedTheme === "dark" || isBatman;

  // Route logic based on current mode
  const currentArray = isBatman ? BATMAN_NOTE_THEMES : NOTE_THEMES;
  const currentActiveId = isBatman ? activeBatThemeId : activeThemeId;
  const setCurrentActiveId = isBatman ? setActiveBatThemeId : setActiveThemeId;

  const theme: any = currentArray.find((t) => t.id === currentActiveId) || currentArray[0];
  const activeIndex = currentArray.findIndex((t) => t.id === currentActiveId);

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
      const nextIndex = (activeIndex + 1) % currentArray.length;
      setCurrentActiveId(currentArray[nextIndex].id);
    } else if (distance < -minSwipeDistance) {
      const prevIndex = (activeIndex - 1 + currentArray.length) % currentArray.length;
      setCurrentActiveId(currentArray[prevIndex].id);
    }
  };

  if (!mounted) return null;

  const cssVariables = isBatman ? {
    backgroundColor: "#050101",
    backgroundImage: theme.bgImage,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    '--theme-text': theme.text, 
    '--theme-border': theme.border, 
    '--theme-accent': theme.accent, 
    '--theme-accent-bg': theme.accentBg, 
  } : {
    backgroundColor: isDark ? theme.bgDark : theme.bgLight,
    '--theme-text': isDark ? theme.textDark : theme.textLight,
    '--theme-border': isDark ? theme.borderDark : theme.borderLight,
    '--theme-accent': isDark ? theme.accentDark : theme.accentLight,
    '--theme-accent-bg': isDark ? theme.accentBgDark : theme.accentBgLight,
  };

  return (
    <div 
      // FLUID PADDING: Adapts perfectly from mobile screens up to ultrawide monitors
      className="min-h-screen px-[clamp(0.5rem,3vw,3rem)] py-[clamp(1rem,4vw,4rem)] flex flex-col items-center transition-colors duration-500 relative overflow-x-hidden"
      style={cssVariables as React.CSSProperties}
    >
      {/* Background Image (Standard Dark Mode Only) */}
      {isDark && !isBatman && theme.bgImageDark && (
        <div className="absolute inset-0 z-0 pointer-events-none" 
             style={{ backgroundImage: theme.bgImageDark, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center", opacity: 0.95 }}
        />
      )}

      {/* THEME SELECTOR */}
      <div className="w-full max-w-md flex flex-col items-center mt-2 mb-8 md:mb-12 z-20">
        <div 
          className="relative w-full h-32 md:h-36 overflow-hidden flex justify-center items-start touch-pan-y pt-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentArray.map((t, index) => {
            let diff = index - activeIndex;
            const len = currentArray.length;
            const half = Math.floor(len / 2);
            
            if (diff > half) diff -= len;
            else if (diff < -half) diff += len;

            let styleClasses = "opacity-0 scale-50 -translate-y-8 pointer-events-none z-0";
            
            // FLUID BUTTON SIZING: Ensures thumb-reach on mobile, but distinct spacing on desktop
            if (diff === 0) styleClasses = "opacity-100 scale-[1.35] translate-y-10 md:translate-y-12 z-30 shadow-lg border border-white/20";
            else if (diff === -1) styleClasses = "opacity-80 scale-100 -translate-x-[4rem] md:-translate-x-[4.5rem] translate-y-5 z-20 cursor-pointer hover:opacity-100 hover:scale-105 shadow-md";
            else if (diff === 1) styleClasses = "opacity-80 scale-100 translate-x-[4rem] md:translate-x-[4.5rem] translate-y-5 z-20 cursor-pointer hover:opacity-100 hover:scale-105 shadow-md";
            else if (diff === -2) styleClasses = "opacity-40 scale-[0.70] -translate-x-[7.5rem] md:-translate-x-[8.5rem] translate-y-0 z-10 cursor-pointer hover:opacity-60 shadow-sm";
            else if (diff === 2) styleClasses = "opacity-40 scale-[0.70] translate-x-[7.5rem] md:translate-x-[8.5rem] translate-y-0 z-10 cursor-pointer hover:opacity-60 shadow-sm";

            return (
                <button
                  key={t.id}
                  onClick={() => setCurrentActiveId(t.id)}
                  className={`absolute top-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex-shrink-0 w-10 h-14 md:w-12 md:h-16 rounded-sm ${styleClasses}`}
                  style={isBatman 
                    ? { backgroundImage: (t as any).bgImage, backgroundSize: 'cover', backgroundPosition: 'center', ...handDrawnBorder } 
                    : { backgroundColor: (t as any).swatchColor, ...handDrawnBorder }}
                  title={t.name}
                >
                  {diff === 0 && <span className="absolute inset-0 flex items-center justify-center text-white/80 font-bold text-xs drop-shadow-md">✦</span>}
                </button>
            );
          })}
        </div>
        <p className="text-[clamp(0.875rem,2vw,1rem)] font-bold opacity-80 text-[var(--theme-text)] mt-2 transition-all duration-300" style={{ fontFamily: "var(--font-kalam)" }}>
          {isBatman ? "Tactical Canvas" : "Paper"}: {theme.name}
        </p>
      </div>

      {/* 
        FLUID CANVAS WIDTH: 
        max-w-[850px] is the clinically proven optimal width for reading lines of text. 
        It prevents desktop users from having to swing their eyes too far left/right.
      */}
      <div 
        className="max-w-[850px] w-full z-10 relative overflow-hidden text-[var(--theme-text)] shadow-2xl rounded-[4px]" 
        style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

// 4. HANDWRITTEN TITLE
export function HandwrittenTitle({ children, badge }: { children: ReactNode; badge?: ReactNode }) {
  return (
    <div className="relative text-center mb-[clamp(1.5rem,4vw,3rem)] mt-[clamp(0.5rem,2vw,1.5rem)]">
      {/* FLUID TITLE SCALING: text-[clamp(...)] ensures the title never breaks lines awkwardly on mobile */}
      <h1 className="text-[clamp(1.5rem,4.5vw,2.75rem)] inline-block relative font-bold px-3 text-[var(--theme-text)] leading-tight">
        {children}
        <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[2px] transform -rotate-1 bg-[var(--theme-border)] opacity-80"></div>
        <div className="absolute -bottom-2 md:-bottom-3 left-2 w-[95%] h-[1px] transform rotate-1 bg-[var(--theme-border)] opacity-80"></div>
      </h1>
      {badge && (
        <div 
          className="absolute top-0 right-0 border-2 px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.125rem,0.5vw,0.25rem)] text-[clamp(0.75rem,2vw,1.125rem)] font-bold shadow-sm hidden sm:block border-[var(--theme-accent)] bg-[var(--theme-accent-bg)] text-[var(--theme-text)]"
          style={handDrawnBorder}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

// 5. HANDWRITTEN BOX 
export function HandwrittenBox({ 
  children, 
  className = "",
  borderColor, 
  textColor    
}: { 
  children: ReactNode; 
  className?: string;
  borderColor?: string; 
  textColor?: string;   
}) {
  const finalBorderClass = borderColor || "border-[var(--theme-border)]";
  const finalTextClass = textColor || "text-[var(--theme-text)]";

  return (
    <div 
      className={`border-2 bg-[var(--theme-accent-bg)] px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.125rem,0.5vw,0.25rem)] text-[clamp(1rem,2.5vw,1.25rem)] inline-block ${finalBorderClass} ${finalTextClass} ${className}`}
      style={handDrawnBorder}
    >
      {children}
    </div>
  );
}
