"use client";

import { useEffect } from "react";

export default function CinematicIntro({ isActive, mode }: { isActive: boolean, mode: "standard" | "batman" }) {
  if (!isActive) return null;

  if (mode === "batman") {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#020202] flex items-center justify-center overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bat-cinematic {
            0% { transform: scale(0.5); opacity: 0; filter: blur(20px); }
            20% { transform: scale(1); opacity: 1; filter: blur(0px) drop-shadow(0 0 50px rgba(220,38,38,0.8)); }
            65% { transform: scale(1.1); opacity: 1; filter: blur(0px) drop-shadow(0 0 60px rgba(220,38,38,0.5)); }
            100% { transform: scale(40); opacity: 0; filter: blur(10px); }
          }
          .animate-bat {
            animation: bat-cinematic 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-48 h-48 text-red-600 animate-bat relative z-10">
          <path d="M 50,80 L 45,65 L 20,70 L 5,40 L 25,45 L 35,30 L 45,35 L 48,20 L 50,25 L 52,20 L 55,35 L 65,30 L 75,45 L 95,40 L 80,70 L 55,65 Z" fill="currentColor"/>
        </svg>
      </div>
    );
  }

  // The Standard Veblen Good Premium Intro
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0B1A14] flex items-center justify-center overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vg-cinematic {
          0% { opacity: 0; transform: scale(0.8); filter: blur(10px); }
          30% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 40px rgba(212,175,55,0.4)); }
          70% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.2); filter: blur(10px); }
        }
        .animate-vg {
          animation: vg-cinematic 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />
      <div className="w-32 h-32 animate-vg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
    </div>
  );
}
