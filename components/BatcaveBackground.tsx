"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || theme !== "batman") return null;

  return (
    <div className="fixed inset-0 w-full h-full z-[-50] bg-[#020202] overflow-hidden pointer-events-none flex items-center justify-center select-none">
      
      {/* 1. Low-opacity Red Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(204, 0, 0, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(204, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 2. Deep Back-Glow (Large, dense blur) */}
      <div className="absolute w-[800px] h-[350px] bg-red-950/20 blur-[130px] rounded-full z-0 pointer-events-none transform translate-y-6"></div>

      {/* 3. True Curved Wide Bat Logo */}
      <div className="relative w-[1050px] h-[525px] flex items-center justify-center opacity-[0.05] animate-[pulse_8s_ease-in-out_infinite] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="w-full h-full text-red-600 drop-shadow-[0_0_20px_rgba(204,0,0,0.45)]">
          <path 
            d="M 50,15 C 48,15 46,13 46,10 C 43,11 39,11 35,12 C 22,15 11,23 3,31 C 7,34 13,35 20,34 C 27,33 31,37 35,40 C 38,43 41,44 44,41 L 50,47 L 56,41 C 59,44 62,43 65,40 C 69,37 73,33 80,34 C 87,35 93,34 97,31 C 89,23 78,15 65,12 C 61,11 57,11 54,10 C 54,13 52,15 50,15 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 4. Film Vignette / Outer Gradient Darkening */}
      <div className="absolute inset-0 bg-radial-gradient-to-edge pointer-events-none z-0"></div>

      {/* 5. Traveling Scanline scan */}
      <div className="absolute inset-x-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent h-[15vh] w-full animate-[background-sweep_12s_linear_infinite] opacity-50 z-10"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes background-sweep {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .bg-radial-gradient-to-edge {
          background: radial-gradient(circle, transparent 30%, rgba(2, 2, 2, 0.95) 100%);
        }
      `}} />
    </div>
  );
}
