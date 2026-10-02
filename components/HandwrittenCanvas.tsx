"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// --- THEME DEFINITIONS ---
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
  bgImageDark?: string; // Optional background image for dark mode
  swatchColor: string;  // Color shown in the slider
};

const NOTE_THEMES: NoteTheme[] = [
  {
    id: "vintage",
    name: "Classic Vintage",
    bgLight: "bg-[#fdfbf7]",
    bgDark: "dark:bg-[#1a110a]",
    bgImageDark: "url('/vintage-page.jpg')",
    textLight: "text-slate-800",
    textDark: "dark:text-[#3a2f24]",
    borderLight: "border-slate-800",
    borderDark: "dark:border-[#3a2f24]",
    accentLight: "text-red-600",
    accentDark: "dark:text-[#991b1b]",
    swatchColor: "#d4c5b0",
  },
  {
    id: "midnight",
    name: "Midnight Slate",
    bgLight: "bg-slate-50",
    bgDark: "dark:bg-slate-900",
    textLight: "text-slate-800",
    textDark: "dark:text-slate-300",
    borderLight: "border-slate-800",
    borderDark: "dark:border-slate-400",
    accentLight: "text-blue-600",
    accentDark: "dark:text-sky-400",
    swatchColor: "#0f172a",
  },
  {
    id: "sepia",
    name: "Warm Sepia",
    bgLight: "bg-[#f4ecd8]",
    bgDark: "dark:bg-[#433422]",
    textLight: "text-[#5c4d3c]",
    textDark: "dark:text-[#f4ecd8]",
    borderLight: "border-[#5c4d3c]",
    borderDark: "dark:border-[#f4ecd8]",
    accentLight: "text-orange-700",
    accentDark: "dark:text-orange-400",
    swatchColor: "#8b7355",
  },
  {
    id: "blueprint",
    name: "Blueprint",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-[#1e3a5f]",
    textLight: "text-blue-900",
    textDark: "dark:text-blue-100",
    borderLight: "border-blue-900",
    borderDark: "dark:border-blue-300",
    accentLight: "text-indigo-600",
    accentDark: "dark:text-indigo-300",
    swatchColor: "#1e40af",
  },
];

// --- MAIN CANVAS WRAPPER ---
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>("vintage");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = NOTE_THEMES.find((t) => t.id === activeThemeId) || NOTE_THEMES[0];
  const isDark = resolvedTheme === "dark";

  if (!mounted) return null;

  return (
    <div 
      className={`min-h-screen p-3 sm:p-6 md:p-12 lg:p-16 flex flex-col items-center transition-colors duration-500 relative overflow-x-hidden ${activeTheme.bgLight} ${activeTheme.bgDark}`}
    >
      {/* Dynamic Background Image Layer (only active if theme specifies it AND we are in dark mode) */}
      {isDark && activeTheme.bgImageDark && (
        <div className="absolute inset-0 z-0" 
             style={{
                 backgroundImage: activeTheme.bgImageDark, 
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundAttachment: "fixed",
                 backgroundPosition: "center",
                 opacity: 0.95 
             }}
        />
      )}

      {/* --- THEME SLIDER BAR --- */}
      <div className="w-full max-w-4xl z-20 mb-6 md:mb-10 flex flex-col items-center">
        <p className={`text-sm mb-2 font-bold opacity-70 ${activeTheme.textLight} ${activeTheme.textDark}`} style={{ fontFamily: "var(--font-kalam)" }}>
          Current Paper: {activeTheme.name}
        </p>
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar w-full justify-center px-4">
          {NOTE_THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveThemeId(theme.id)}
              className={`flex-shrink-0 w-8 h-12 md:w-10 md:h-16 rounded-sm snap-center transition-all duration-300 transform shadow-sm ${
                activeThemeId === theme.id 
                  ? "scale-110 ring-4 ring-offset-2 ring-red-500 dark:ring-offset-[#1a110a]" 
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
              style={{ 
                backgroundColor: theme.swatchColor,
                ...handDrawnBorder 
              }}
              aria-label={`Select ${theme.name} theme`}
              title={theme.name}
            />
          ))}
        </div>
      </div>
      {/* ------------------------ */}

      {/* --- CONTENT AREA --- */}
      {/* We pass the activeTheme down using a React Context or CSS Variables. 
          To keep it simple without breaking your existing notes, we will inject 
          the theme styles directly into a wrapper div that overrides children classes using CSS specificity (via a wrapper ID/Class). */}
      <div 
        id="dynamic-theme-wrapper"
        className={`max-w-4xl w-full z-10 relative overflow-hidden ${activeTheme.textLight} ${activeTheme.textDark}`} 
        style={{ 
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          // Expose CSS variables for child components to consume
          '--theme-text-light': activeTheme.textLight,
          '--theme-text-dark': activeTheme.textDark,
          '--theme-border-light': activeTheme.borderLight,
          '--theme-border-dark': activeTheme.borderDark,
          '--theme-accent-light': activeTheme.accentLight,
          '--theme-accent-dark': activeTheme.accentDark,
        } as React.CSSProperties}
      >
        {/* Magic trick: We wrap children in a context so HandwrittenTitle/Box can read the theme */}
        <ThemeContext.Provider value={activeTheme}>
          {children}
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

// --- CONTEXT SETUP ---
const ThemeContext = React.createContext<NoteTheme>(NOTE_THEMES[0]);

// 2. HANDWRITTEN TITLE
export function HandwrittenTitle({ 
  children, 
  badge 
}: { 
  children: ReactNode; 
  badge?: ReactNode 
}) {
  const theme = React.useContext(ThemeContext);
  
  return (
    <div className="relative text-center mb-6 md:mb-12 mt-4 md:mt-0">
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block relative font-bold px-2 ${theme.textLight} ${theme.textDark}`}>
        {children}
        <div className={`absolute -bottom-1 md:-bottom-2 left-0 w-full h-[2px] transform -rotate-1 ${theme.bgLight.replace('bg-', 'bg-').replace('dark:bg-', 'dark:bg-')} bg-slate-800 dark:bg-current opacity-60`}></div>
        <div className={`absolute -bottom-2 md:-bottom-3 left-2 w-[95%] h-[1px] transform rotate-1 ${theme.bgLight.replace('bg-', 'bg-')} bg-slate-800 dark:bg-current opacity-60`}></div>
      </h1>
      
      {badge && (
        <div 
          className={`absolute top-0 right-0 border-2 px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-lg font-bold shadow-sm hidden sm:block ${theme.bgLight} dark:bg-transparent ${theme.borderLight} ${theme.borderDark}`}
          style={handDrawnBorder}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

// 3. HANDWRITTEN BOX
export function HandwrittenBox({ 
  children, 
  className = "",
  // We ignore manual border/text colors now and force the theme colors
}: { 
  children: ReactNode; 
  className?: string;
  borderColor?: string;
  textColor?: string;
}) {
  const theme = React.useContext(ThemeContext);

  return (
    <div 
      className={`border-2 px-2 py-0.5 md:px-3 md:py-1 text-base md:text-xl inline-block ${className} ${theme.borderLight} ${theme.borderDark} ${theme.textLight} ${theme.textDark}`}
      style={handDrawnBorder}
    >
      {children}
    </div>
  );
}
