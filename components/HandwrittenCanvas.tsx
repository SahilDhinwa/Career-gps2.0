"use client";

import React, { ReactNode } from "react";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. MAIN CANVAS WRAPPER
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  return (
    <div 
      className="min-h-screen bg-[#fdfbf7] p-8 md:p-12 lg:p-16 flex justify-center selection:bg-red-200 dark:selection:bg-[#ff0055]/30 transition-colors duration-300 relative"
    >
        {/* Dark Mode Background Image Layer (Light Vintage Paper) */}
        <div className="absolute inset-0 hidden dark:block z-0" 
             style={{
                 backgroundImage: "url('public/vintage-paper.jpg')", // Ensure this image is in your 'public' folder
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundAttachment: "fixed",
                 backgroundPosition: "center",
                 opacity: 0.95 
             }}
        />

      <div 
        // Changed dark text to #3a2f24 (Dark Ink) for readability on light vintage paper
        className="max-w-4xl w-full text-slate-800 dark:text-[#3a2f24] z-10 relative" 
        style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

// 2. HANDWRITTEN TITLE
export function HandwrittenTitle({ 
  children, 
  badge 
}: { 
  children: ReactNode; 
  badge?: ReactNode 
}) {
  return (
    <div className="relative text-center mb-12">
      <h1 className="text-4xl md:text-5xl text-slate-800 dark:text-[#3a2f24] inline-block relative font-bold">
        {children}
        {/* Underlines changed to dark ink in dark mode */}
        <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-slate-800 dark:bg-[#3a2f24] transform -rotate-1"></div>
        <div className="absolute -bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 dark:bg-[#3a2f24] transform rotate-1"></div>
      </h1>
      
      {badge && (
        <div 
          // Neon Red Glow retained for the badge border
          className="absolute top-0 right-0 border-2 border-slate-800 dark:border-[#ff0055] dark:drop-shadow-[0_0_8px_rgba(255,0,85,0.7)] px-3 py-1 text-lg font-bold bg-[#fdfbf7] dark:bg-transparent hidden sm:block shadow-sm"
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
  borderColor = "border-slate-800 dark:border-[#3a2f24]",
  textColor = "text-slate-800 dark:text-[#3a2f24]"
}: { 
  children: ReactNode; 
  className?: string;
  borderColor?: string;
  textColor?: string;
}) {
  return (
    <div 
      className={`border-2 ${borderColor} ${textColor} px-3 py-1 inline-block ${className}`}
      style={handDrawnBorder}
    >
      {children}
    </div>
  );
}
