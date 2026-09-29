"use client";

import React, { ReactNode } from "react";

// The secret CSS trick for the "hand-drawn" imperfect box look
const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// 1. MAIN CANVAS WRAPPER
// Wraps your entire page in the notebook paper background and applies the handwritten font
export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fdfbf7] p-8 md:p-12 lg:p-16 flex justify-center selection:bg-red-200">
      <div 
        className="max-w-3xl w-full" 
        style={{ fontFamily: "'Patrick Hand', 'Kalam', cursive, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

// 2. HANDWRITTEN TITLE
// Creates the big heading with the double-underline and an optional top-right badge
export function HandwrittenTitle({ 
  children, 
  badge 
}: { 
  children: ReactNode; 
  badge?: ReactNode 
}) {
  return (
    <div className="relative text-center mb-12">
      <h1 className="text-4xl md:text-5xl text-slate-800 inline-block relative font-bold">
        {children}
        {/* Double underline effect */}
        <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-slate-800 transform -rotate-1"></div>
        <div className="absolute -bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 transform rotate-1"></div>
      </h1>
      
      {badge && (
        <div 
          className="absolute top-0 right-0 border-2 border-slate-800 px-3 py-1 text-lg font-bold bg-[#fdfbf7] hidden sm:block"
          style={handDrawnBorder}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

// 3. HANDWRITTEN BOX
// Creates those slightly warped, hand-drawn boxes for definitions and highlights
export function HandwrittenBox({ 
  children, 
  className = "",
  borderColor = "border-slate-800",
  textColor = "text-slate-800"
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
