"use client";

import { useEffect } from "react";

interface CinematicIntroProps {
  isActive: boolean;
  mode: "standard" | "batman";
}

export default function CinematicIntro({ isActive, mode }: CinematicIntroProps) {
  useEffect(() => {
    if (isActive) {
      // PLAY CINEMATIC AUDIO FOR ACTIVE TRANSITIONS
      const audioPath = mode === "batman" ? "/sounds/batman-boom.mp3" : "/sounds/vg-chime.mp3";
      const audio = new Audio(audioPath);
      audio.volume = 0.7; // Generous volume, no blasting
      audio.play().catch((e) => console.warn("Audio playback blocked by browser policies:", e));
    }
  }, [isActive, mode]);

  if (!isActive) return null;

  if (mode === "batman") {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bat-cinematic {
            0% { transform: scale(0.45); opacity: 0; filter: blur(25px); }
            20% { transform: scale(1); opacity: 1; filter: blur(0px) drop-shadow(0 0 50px rgba(220,38,38,0.85)); }
            65% { transform: scale(1.05); opacity: 1; filter: blur(0px) drop-shadow(0 0 60px rgba(220,38,38,0.65)); }
            100% { transform: scale(45); opacity: 0; filter: blur(15px); }
          }
          @keyframes border-scan {
            0% { transform: translateY(-100vh); }
            100% { transform: translateY(100vh); }
          }
          .animate-bat {
            animation: bat-cinematic 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          .animate-scanline {
            animation: border-scan 4s linear infinite;
          }
        `}} />

        {/* Cinematic Grid Lines (Adding to the Boot sequence atmosphere) */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(220, 38, 38, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Curved Wide Batman Logo */}
        <div className="w-[500px] h-[250px] relative flex items-center justify-center animate-bat z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="w-full h-full text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">
            <path 
              d="M 50,15 C 48,15 46,13 46,10 C 43,11 39,11 35,12 C 22,15 11,23 3,31 C 7,34 13,35 20,34 C 27,33 31,37 35,40 C 38,43 41,44 44,41 L 50,47 L 56,41 C 59,44 62,43 65,40 C 69,37 73,33 80,34 C 87,35 93,34 97,31 C 89,23 78,15 65,12 C 61,11 57,11 54,10 C 54,13 52,15 50,15 Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Loading status under our dynamic wide-logo */}
        <div className="absolute bottom-16 text-center z-20">
          <p className="text-xs font-mono tracking-[0.25em] text-red-500 animate-pulse uppercase">Batman Mode Activated</p>
          <p className="text-[10px] font-mono tracking-[0.15em] text-red-700 mt-1 uppercase">Initializing System / Security Clearance...</p>
        </div>

        {/* Traveling interface Scanline */}
        <div className="absolute inset-x-0 h-0.5 bg-red-600/30 blur-sm animate-scanline pointer-events-none"></div>
      </div>
    );
  }

  // FRONT DOOR: Elegant Metallic-Glint VG Animation
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A110D] flex items-center justify-center overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vg-cinematic {
          0% { opacity: 0; transform: scale(0.8); filter: blur(10px); }
          30% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 45px rgba(212,175,55,0.45)); }
          70% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.15); filter: blur(10px); }
        }
        .animate-vg {
          animation: vg-cinematic 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />
      <div className="w-32 h-32 animate-vg flex flex-col items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
        <span className="text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] font-semibold uppercase">Veblen Good</span>
      </div>
    </div>
  );
}
