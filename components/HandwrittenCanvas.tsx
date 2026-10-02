"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. THEMES DEFINED WITH REAL HEX COLORS
type NoteTheme = {
  id: string;
  name: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  borderLight: string;
  borderDark: string;
  accentLight: string;
  accentDark: string;
  bgImageDark?: string;
  swatchColor: string;
};

const NOTE_THEMES: NoteTheme[] = [
  {
    id: "vintage",
    name: "Classic Vintage",
    bgLight: "#fdfbf7",
    bgDark: "#1a110a",
    textLight: "#1e293b", // Slate 800
    textDark: "#3a2f24",  // Dark Ink
    borderLight: "#1e293b",
    borderDark: "#3a2f24",
    accentLight: "#dc2626", // Red 600
    accentDark: "#991b1b",  // Crimson
    bgImageDark: "url('/vintage-page.jpg')",
    swatchColor: "#d4c5b0",
  },
  {
    id: "midnight",
    name: "Midnight Blue",
    bgLight: "#f8fafc",
    bgDark: "#0f172a", // Slate 900
    textLight: "#334155",
    textDark: "#cbd5e1",
    borderLight: "#475569",
    borderDark: "#475569",
    accentLight: "#2563eb", // Blue 600
    accentDark: "#38bdf8",  // Sky 400
    swatchColor: "#1e293b",
  },
  {
    id: "sepia",
    name: "Warm Sepia",
    bgLight: "#f4ecd8",
    bgDark: "#433422",
    textLight: "#5c4d3c",
    textDark: "#f4ecd8",
    borderLight: "#5c4d3c",
    borderDark: "#f4ecd8",
    accentLight: "#c2410c",
    accentDark: "#fb923c",
    swatchColor: "#8b7355",
  },
  {
    id: "puredark",
    name: "Pure Dark (AMOLED)",
    bgLight: "#ffffff", 
    bgDark: "#000000",  // Pitch Black
    textLight: "#000000", 
    textDark: "#e2e8f0",  // Soft Slate
    borderLight: "#000000",
    borderDark: "#475569", 
    accentLight: "#dc2626", 
    accentDark: "#f87171",  // Bright Red
    swatchColor: "#000000",
  },
  {
    id: "velvet",
    name: "Royal Velvet",
    bgLight: "#fff5f7",     // Soft rose-tinted cream
    bgDark: "#270810",      // Deep rich velvet burgundy
    textLight: "#4c0519",   // Dark burgundy ink
    textDark: "#fce7f3",    // Pale pink/cream text
    borderLight: "#9f1239", 
    borderDark: "#5a1827",  // Muted dark red border
    accentLight: "#e11d48", // Ruby red
    accentDark: "#fbbf24",  // Soft royal gold for high contrast
    swatchColor: "#881337", // Velvet color for the slider
  }
];

// 2. MAIN CANVAS WRAPPER
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>("midnight");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const theme = NOTE_THEMES.find((t) => t.id === activeThemeId) || NOTE_THEMES[0];
  const isDark = resolvedTheme === "dark";

  if (!mounted) return null;

  return (
    <div 
      className="min-h-screen p-3 sm:p-6 md:p-12 lg:p-16 flex flex-col items-center transition-colors duration-500 relative overflow-x-hidden"
      style={{
        backgroundColor: isDark ? theme.bgDark : theme.bgLight,
        // THESE 3 VARIABLES CONTROL EVERYTHING AUTOMATICALLY
        '--theme-text': isDark ? theme.textDark : theme.textLight,
        '--theme-border': isDark ? theme.borderDark : theme.borderLight,
        '--theme-accent': isDark ? theme.accentDark : theme.accentLight,
      } as React.CSSProperties}
    >
      {/* Background Image (only for dark mode if specified) */}
      {isDark && theme.bgImageDark && (
        <div className="absolute inset-0 z-0" 
             style={{
                 backgroundImage: theme.bgImageDark, 
                 backgroundSize: "cover",
                 backgroundAttachment: "fixed",
                 backgroundPosition: "center",
                 opacity: 0.95 
             }}
        />
      )}

      {/* Theme Slider */}
      <div className="w-full max-w-4xl z-20 mb-6 md:mb-10 flex flex-col items-center">
        <p className="text-sm mb-3 font-bold opacity-70 text-[var(--theme-text)]" style={{ fontFamily: "var(--font-kalam)" }}>
          Current Paper: {theme.name}
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar w-full justify-center px-4">
          {NOTE_THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveThemeId(t.id)}
              className={`flex-shrink-0 w-8 h-12 md:w-10 md:h-16 rounded-sm snap-center transition-all duration-300 transform shadow-sm ${
                activeThemeId === t.id 
                  ? "scale-110 ring-2 ring-offset-2 ring-[var(--theme-accent)] ring-offset-transparent" 
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
              style={{ backgroundColor: t.swatchColor, ...handDrawnBorder }}
              title={t.name}
            />
          ))}
        </div>
      </div>

      <div 
        className="max-w-4xl w-full z-10 relative overflow-hidden text-[var(--theme-text)]" 
        style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

// 3. HANDWRITTEN TITLE
export function HandwrittenTitle({ children, badge }: { children: ReactNode; badge?: ReactNode }) {
  return (
    <div className="relative text-center mb-6 md:mb-12 mt-4 md:mt-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block relative font-bold px-2 text-[var(--theme-text)]">
        {children}
        <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[2px] transform -rotate-1 bg-[var(--theme-border)] opacity-80"></div>
        <div className="absolute -bottom-2 md:-bottom-3 left-2 w-[95%] h-[1px] transform rotate-1 bg-[var(--theme-border)] opacity-80"></div>
      </h1>
      {badge && (
        <div 
          className="absolute top-0 right-0 border-2 px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-lg font-bold shadow-sm hidden sm:block border-[var(--theme-accent)] bg-transparent text-[var(--theme-text)]"
          style={handDrawnBorder}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

// 4. HANDWRITTEN BOX
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
      className={`border-2 px-2 py-0.5 md:px-3 md:py-1 text-base md:text-xl inline-block ${finalBorderClass} ${finalTextClass} ${className}`}
      style={handDrawnBorder}
    >
      {children}
    </div>
  );
}
