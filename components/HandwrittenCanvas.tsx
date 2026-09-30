"use client";

import React, { ReactNode } from "react";

const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

export function HandwrittenCanvas({ children }: { children: ReactNode }) {
  return (
    // डार्क मोड में पुराने कागज़ का गहरा रंग (#1a110a) सेट किया गया है।
    <div 
      className="min-h-screen bg-[#fdfbf7] dark:bg-[#1a110a] p-8 md:p-12 lg:p-16 flex justify-center selection:bg-red-200 dark:selection:bg-[#ff0055]/30 transition-colors duration-300"
      style={{
        // यदि आप हुबहू वही इमेज बैकग्राउंड में चाहते हैं, तो उस इमेज को 'public' फोल्डर में 'old-paper.jpg' नाम से सेव करें और नीचे वाली लाइन से '//' हटा दें।
        // backgroundImage: "url('/old-paper.jpg')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover"
      }}
    >
      <div 
        className="max-w-4xl w-full text-slate-800 dark:text-[#e8dcc4]" 
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
      <h1 className="text-4xl md:text-5xl text-slate-800 dark:text-[#e8dcc4] inline-block relative font-bold">
        {children}
        <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-slate-800 dark:bg-[#8b7355] transform -rotate-1"></div>
        <div className="absolute -bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 dark:bg-[#8b7355] transform rotate-1"></div>
      </h1>
      
      {badge && (
        <div 
          // यहाँ नियॉन इफ़ेक्ट जोड़ा गया है: border-[#ff0055] और drop-shadow
          className="absolute top-0 right-0 border-2 border-slate-800 dark:border-[#ff0055] dark:drop-shadow-[0_0_8px_rgba(255,0,85,0.7)] px-3 py-1 text-lg font-bold bg-[#fdfbf7] dark:bg-[#1a110a] hidden sm:block shadow-sm"
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
  borderColor = "border-slate-800 dark:border-[#8b7355]",
  textColor = "text-slate-800 dark:text-[#e8dcc4]"
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
