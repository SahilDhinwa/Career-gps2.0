"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render if mounted and the theme is explicitly 'batman'
  if (!mounted || theme !== "batman") return null;

  return (
    <div className="fixed inset-0 w-full h-full z-[-50] bg-[#020202] overflow-hidden pointer-events-none flex items-center justify-center">
      
      {/* 1. Tactical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 2. The Bat Logo (Geometric & Cinematic) with a slow breathing animation */}
      <div className="relative w-[800px] h-[800px] flex items-center justify-center opacity-10 animate-pulse" style={{ animationDuration: '6s' }}>
        {/* Deep Red Ambient Glow behind the logo */}
        <div className="absolute w-[400px] h-[200px] bg-red-600 blur-[120px] rounded-full"></div>
        
        {/* The Sharp, Stylized Bat SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full text-red-600 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] relative z-10">
          <path 
            d="M 50,80 L 45,65 L 20,70 L 5,40 L 25,45 L 35,30 L 45,35 L 48,20 L 50,25 L 52,20 L 55,35 L 65,30 L 75,45 L 95,40 L 80,70 L 55,65 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 3. Terminal Scanline Effect (Moves top to bottom slowly) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent h-[10%] w-full animate-[scan_8s_linear_infinite]"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}} />
    </div>
  );
}
