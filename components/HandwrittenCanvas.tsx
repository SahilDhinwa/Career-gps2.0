"use client";

import React, { ReactNode } from "react";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. MAIN CANVAS WRAPPER
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  return (
    <div 
      // Reduced mobile padding from p-8 to p-3. Kept md:p-12 for desktop.
      className="min-h-screen bg-[#fdfbf7] p-3 sm:p-6 md:p-12 lg:p-16 flex justify-center selection:bg-red-200 dark:selection:bg-[#991b1b]/20 transition-colors duration-300 relative overflow-x-hidden"
    >
        <div className="absolute inset-0 hidden dark:block z-0" 
             style={{
                 backgroundImage: "url('/vintage-page.jpg')", 
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundAttachment: "fixed",
                 backgroundPosition: "center",
                 opacity: 0.95 
             }}
        />

      <div 
        // Added overflow-hidden to prevent horizontal scrolling on mobile
        className="max-w-4xl w-full text-slate-800 dark:text-[#3a2f24] z-10 relative overflow-hidden" 
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
    // Reduced bottom margin on mobile
    <div className="relative text-center mb-6 md:mb-12 mt-4 md:mt-0">
      {/* Reduced mobile text size from text-4xl to text-2xl. Desktop stays text-4xl/5xl */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 dark:text-[#3a2f24] inline-block relative font-bold px-2">
        {children}
        <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[2px] bg-slate-800 dark:bg-[#3a2f24] transform -rotate-1"></div>
        <div className="absolute -bottom-2 md:-bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 dark:bg-[#3a2f24] transform rotate-1"></div>
      </h1>
      
      {badge && (
        <div 
          className="absolute top-0 right-0 border-2 border-slate-800 dark:border-[#991b1b] px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-lg font-bold bg-[#fdfbf7] dark:bg-transparent hidden sm:block shadow-sm"
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
      // Reduced mobile padding and text size inside the box
      className={`border-2 ${borderColor} ${textColor} px-2 py-0.5 md:px-3 md:py-1 text-base md:text-xl inline-block ${className}`}
      style={handDrawnBorder}
    >
      {children}
    </div>
  );
}
