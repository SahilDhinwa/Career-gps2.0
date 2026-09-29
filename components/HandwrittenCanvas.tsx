"use client";

import React, { ReactNode } from "react";

// The secret CSS trick for the "hand-drawn" imperfect box look
const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. MAIN CANVAS WRAPPER
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#0a0a0a] p-8 md:p-12 lg:p-16 flex justify-center selection:bg-red-200 dark:selection:bg-rose-900 transition-colors duration-300">
      <div 
        className="max-w-3xl w-full text-slate-800 dark:text-slate-200" 
        style={{ fontFamily: "'Patrick Hand', 'Kalam', cursive, sans-serif" }}
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
      <h1 className="text-4xl md:text-5xl text-slate-800 dark:text-slate-100 inline-block relative font-bold">
        {children}
        {/* Double underline effect */}
        <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-slate-800 dark:bg-slate-300 transform -rotate-1"></div>
        <div className="absolute -bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 dark:bg-slate-300 transform rotate-1"></div>
      </h1>
      
      {badge && (
        <div 
          className="absolute top-0 right-0 border-2 border-slate-800 dark:border-slate-300 px-3 py-1 text-lg font-bold bg-[#fdfbf7] dark:bg-slate-900 hidden sm:block"
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
  borderColor = "border-slate-800 dark:border-slate-300",
  textColor = "text-slate-800 dark:text-slate-200"
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
