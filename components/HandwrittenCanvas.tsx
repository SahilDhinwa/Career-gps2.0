"use client";

import React, { ReactNode } from "react";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  return (
    // Updated dark mode background to GoodNotes Cardboard style (#2d251d)
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#2d251d] p-8 md:p-12 lg:p-16 flex justify-center selection:bg-red-200 dark:selection:bg-rose-900/50 transition-colors duration-300">
      <div 
        className="max-w-4xl w-full text-slate-800 dark:text-[#f0e6d2]" 
        style={{ fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export function HandwrittenTitle({ 
  children, 
  badge 
}: { 
  children: ReactNode; 
  badge?: ReactNode 
}) {
  return (
    <div className="relative text-center mb-12">
      <h1 className="text-4xl md:text-5xl text-slate-800 dark:text-[#f0e6d2] inline-block relative font-bold">
        {children}
        <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-slate-800 dark:bg-[#d4c5b0] transform -rotate-1"></div>
        <div className="absolute -bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 dark:bg-[#d4c5b0] transform rotate-1"></div>
      </h1>
      
      {badge && (
        <div 
          className="absolute top-0 right-0 border-2 border-slate-800 dark:border-[#d4c5b0] px-3 py-1 text-lg font-bold bg-[#fdfbf7] dark:bg-[#251e17] hidden sm:block shadow-sm"
          style={handDrawnBorder}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

export function HandwrittenBox({ 
  children, 
  className = "",
  borderColor = "border-slate-800 dark:border-[#d4c5b0]",
  textColor = "text-slate-800 dark:text-[#f0e6d2]"
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
