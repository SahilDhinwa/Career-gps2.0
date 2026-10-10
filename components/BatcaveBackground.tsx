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

      {/* 3. The Cinematic Glowing Bat Emblem */}
      <div className="relative z-10 w-[90vw] max-w-[1200px] opacity-40 animate-[pulse_4s_ease-in-out_infinite]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 60" 
          className="w-full h-full drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            {/* The signature red/orange neon gradient */}
            <linearGradient id="bgBatStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffb1a9" />
              <stop offset=".38" stopColor="#ff514a" />
              <stop offset="1" stopColor="#ff1e24" />
            </linearGradient>
            
            {/* The intense multi-layered glow filter */}
            <filter id="bgGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feColorMatrix 
                in="blur" 
                type="matrix" 
                values="1 0 0 0 0.8  0 0.1 0 0 0.02  0 0 0.1 0 0.02  0 0 0 1 0" 
                result="redblur" 
              />
              <feMerge>
                <feMergeNode in="redblur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* LAYER A: Diffused Ambient Red Aura */}
          <path 
            d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
            fill="none" 
            stroke="#ff242b" 
            strokeWidth="2.5" 
            opacity="0.3" 
            filter="blur(3px)" 
          />
          
          {/* LAYER B: The Dark Armor Core */}
          <path 
            d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
            fill="#100607" 
            fillOpacity="0.5" 
            stroke="#b9262b" 
            strokeWidth="0.8" 
          />
          
          {/* LAYER C: The High-Fidelity Neon Outline */}
          <path 
            d="M 50 52 Q 42 38 32 42 Q 20 28 5 32 Q 24 16 44 22 L 46 10 L 48 16 L 50 18 L 52 16 L 54 10 L 56 22 Q 76 16 95 32 Q 80 28 68 42 Q 58 38 50 52 Z" 
            fill="none" 
            stroke="url(#bgBatStroke)" 
            strokeWidth="0.5" 
            filter="url(#bgGlow)" 
          />
        </svg>
      </div>

    </div>
  );
}
