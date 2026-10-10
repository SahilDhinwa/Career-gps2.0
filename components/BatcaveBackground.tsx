"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render if mounted and on 'batman' theme
  if (!mounted || theme !== "batman") return null;

  return (
    <div className="fixed inset-0 w-full h-full z-[-50] bg-[#020202] overflow-hidden pointer-events-none flex items-center justify-center">
      
      {/* 1. Tactical Red Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 0, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 2. Wide, Swooping Bat Logo Back-glow with subtle breathing pulsation */}
      <div className="relative w-[1100px] h-[550px] flex items-center justify-center opacity-[0.06] animate-pulse" style={{ animationDuration: '7s' }}>
        {/* Soft immersive back-glow */}
        <div className="absolute w-[600px] h-[250px] bg-red-700 blur-[140px] rounded-full"></div>
        
        {/* The Natural Curved Wing Logo */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="w-full h-full text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]">
          <path 
            d="M 50,15 C 48,15 46,13 46,10 C 43,11 39,11 35,12 C 22,15 11,23 3,31 C 7,34 13,35 20,34 C 27,33 31,37 35,40 C 38,43 41,44 44,41 L 50,47 L 56,41 C 59,44 62,43 65,40 C 69,37 73,33 80,34 C 87,35 93,34 97,31 C 89,23 78,15 65,12 C 61,11 57,11 54,10 C 54,13 52,15 50,15 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 3. Sweeping Scanline Sweep Effect */}
      <div className="absolute inset-x-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent h-[12vh] w-full animate-[scan_9s_linear_infinite]"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}} />
    </div>
  );
}
