"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || theme !== "batman") return null;

  return (
    <div className="fixed inset-0 z-[-50] bg-[#050101] overflow-hidden pointer-events-none flex items-center justify-center select-none">
      
      {/* 1. Central Ambient Highlight (Makes the center glow red behind the content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,20,20,0.12)_0%,transparent_65%)] z-0" />

      {/* 2. Tactical Grid with Illuminated Intersections */}
      <div className="absolute inset-0 z-0">
        {/* Faint Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ff1a1a 1px, transparent 1px),
              linear-gradient(to bottom, #ff1a1a 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
            backgroundPosition: "center center"
          }}
        />
        {/* Glowing Intersection Dots */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #ff1a1a 2px, transparent 2.5px)`,
            backgroundSize: "120px 120px",
            backgroundPosition: "center center"
          }}
        />
      </div>

      {/* 3. Outer Shadow Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030000_100%)] z-0" />

      {/* 4. Solid Crimson Watermark Bat Emblem */}
      <div className="relative z-10 w-full h-full max-w-[1400px] opacity-[0.6] animate-[pulse_5s_ease-in-out_infinite] flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1536 864" 
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full object-contain"
          aria-hidden="true"
        >
          <defs>
            {/* Dark scanline pattern to fill the bat */}
            <pattern id="batScanlines" patternUnits="userSpaceOnUse" width="4" height="4">
              <rect width="4" height="2" fill="#1c0303" />
              <rect y="2" width="4" height="2" fill="#0f0101" />
            </pattern>
            <filter id="ambientBatGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g className="batman-emblem" filter="url(#ambientBatGlow)">
            {/* Deep Red Outer Glow */}
            <path 
              d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" 
              fill="none" 
              stroke="#660000" 
              strokeWidth="8" 
              opacity="0.8" 
            />
            
            {/* Solid Fill with Scanlines and Crisp Red Edge */}
            <path 
              d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" 
              fill="url(#batScanlines)" 
              stroke="#ff1a1a" 
              strokeWidth="2.5" 
              opacity="0.9"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
