"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || theme !== "batman") return null;

  return (
    <div className="fixed inset-0 z-[-50] bg-[#020202] overflow-hidden pointer-events-none flex items-center justify-center select-none">
      
      {/* 1. Tactical Red Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ff1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #ff1a1a 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "center center"
        }}
      />

      {/* 2. Deep Shadow Vignette (Fades the edges to pure black) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_85%)] z-0" />

      {/* 3. The EXACT Cinematic Boot Emblem */}
      <div className="relative z-10 w-full h-full max-w-[1400px] opacity-[0.35] animate-[pulse_4s_ease-in-out_infinite] flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1536 864" 
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full object-contain drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="batStrokeBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffb1a9"/>
              <stop offset=".38" stopColor="#ff514a"/>
              <stop offset="1" stopColor="#ff1e24"/>
            </linearGradient>
            <filter id="glowBg" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.8 0 0.1 0 0 0.02 0 0 0.1 0 0.02 0 0 0 1 0" result="redblur"/>
              <feMerge>
                <feMergeNode in="redblur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="softGlowBg" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15"/>
            </filter>
          </defs>

          <g className="batman-emblem">
            {/* Diffused Aura */}
            <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" fill="none" stroke="#ff242b" strokeWidth="14" opacity=".26" filter="url(#softGlowBg)"/>
            
            {/* Dark Armor Core */}
            <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" fill="#100607" fillOpacity=".42" stroke="#b9262b" strokeWidth="5" opacity=".9"/>
            
            {/* Crisp Neon Glow */}
            <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" fill="none" stroke="url(#batStrokeBg)" strokeWidth="2.8" filter="url(#glowBg)"/>
            
            {/* Bright Center Highlights */}
            <path d="M325 476 C367 383 438 302 551 253 M985 253 C1098 302 1169 383 1211 476 M326 486 C372 451 414 416 451 416 C481 416 500 439 504 474 M1032 474 C1036 439 1055 416 1085 416 C1122 416 1164 451 1210 486" fill="none" stroke="#ff9b91" strokeWidth="1.2" opacity=".8"/>
          </g>
        </svg>
      </div>

    </div>
  );
}
