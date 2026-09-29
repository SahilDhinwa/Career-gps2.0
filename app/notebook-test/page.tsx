"use client";

import React from "react";

export default function HandwrittenNotes() {
  return (
    // Background mimics a slightly textured paper color
    <div className="min-h-screen bg-[#fdfbf7] p-8 md:p-16 flex justify-center selection:bg-red-200">
      
      {/* 
        NOTE: Apply your imported handwritten font to this container. 
        For this example, we use a fallback to system cursive.
      */}
      <div className="max-w-3xl w-full" style={{ fontFamily: "'Patrick Hand', 'Kalam', cursive, sans-serif" }}>
        
        {/* Header Section */}
        <div className="relative text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-slate-800 inline-block relative">
            Pharmacology
            {/* Double underline effect */}
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-slate-800 transform -rotate-1"></div>
            <div className="absolute -bottom-3 left-2 w-[95%] h-[1px] bg-slate-800 transform rotate-1"></div>
          </h1>
          
          {/* Top Right Box */}
          <div 
            className="absolute top-0 right-0 border-2 border-slate-800 px-3 py-1 text-lg font-bold"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }} // Hand-drawn border trick
          >
            Your <span className="text-red-600">OPD</span><br/>Guide
          </div>
        </div>

        {/* Definition Section */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-2xl">
          <div 
            className="border-2 border-slate-800 px-3 py-1"
            style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}
          >
            Drug definition
          </div>
          <span>→</span>
          <span className="text-blue-700">Drogue&apos; - dry herb.</span>
        </div>

        <p className="text-blue-700 text-xl leading-relaxed mb-8 pl-4">
          Drug is defined as pharmaceutical drug is also referred to as medicinal product, medicine, medication or drug used to diagnose, cure, treat or to prevent disease.
        </p>

        {/* Types Section */}
        <div className="mb-10">
          <div className="flex items-center gap-4 text-2xl mb-4">
            <span 
              className="border-2 border-red-600 text-slate-800 px-4 py-1 rounded-[50%]"
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
            >
              Type
            </span>
            <span>→</span>
          </div>

          <ul className="space-y-3 pl-12 text-xl">
            <li>① Solid - Tablets, powders</li>
            <li>② Liquid - <span className="text-blue-700">Emulsion, syrup, suspension.</span></li>
            <li>③ Semisolid - <span className="text-blue-700">Ointment, cream, gels</span></li>
            <li>④ Gaseous - <span className="text-blue-700">Aerosols, inhalation sprays</span></li>
          </ul>
        </div>

        {/* Note Section */}
        <div className="mt-12 space-y-3 text-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⊛</span>
            <div className="text-2xl border-b-2 border-red-600 pb-1 inline-block">
              Topical / <span className="border-2 border-red-600 px-2 py-0.5" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>Local Route</span>
            </div>
          </div>
          <p className="pl-8 flex gap-3"><span className="text-slate-500">→</span> <span className="text-blue-700">Drug is <span className="underline decoration-red-600">not</span> absorbed systemically.</span></p>
          <p className="pl-8 flex gap-3"><span className="text-slate-500">→</span> <span className="text-blue-700">Used for <span className="underline decoration-red-600">localized action</span> at accessible site.</span></p>
          <p className="pl-8 flex gap-3"><span className="text-slate-500">→</span> <span className="text-blue-700">Systemic <span className="underline decoration-red-600">toxicity</span> is absent.</span></p>
        </div>

      </div>
    </div>
  );
}
