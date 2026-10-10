"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function BatmanModeButton() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const isBatman = theme === "batman";

  const toggleBatmanMode = () => {
    if (isBatman) {
      setTheme("dark");
      router.push("/");
    } else {
      setTheme("batman");
      router.push("/login?mode=batman");
    }
  };

  return (
    <button
      onClick={toggleBatmanMode}
      className="relative group flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 cursor-pointer focus:outline-none"
      title={isBatman ? "Exit Batman Mode" : "Activate Batman Mode"}
      aria-label="Toggle Batman Mode"
    >
      {/* Neon Glow Aura on Hover */}
      <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* The Bat Emblem Shape Button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 60"
        className="w-24 h-12 drop-shadow-[0_0_8px_rgba(255,26,26,0.6)]"
      >
        <defs>
          <filter id="btn-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur1" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="
            M 50 52 
            Q 42 38 32 42 
            Q 20 28 5 32 
            Q 24 16 44 22 
            L 46 10 
            L 48 16 
            L 50 18 
            L 52 16 
            L 54 10 
            L 56 22 
            Q 76 16 95 32 
            Q 80 28 68 42 
            Q 58 38 50 52 
            Z
          "
          fill={isBatman ? "#110202" : "#0A110D"}
          stroke={isBatman ? "#ff1a1a" : "#D4AF37"}
          strokeWidth="1.5"
          strokeLinejoin="round"
          filter="url(#btn-glow)"
          className="transition-colors duration-300 group-hover:stroke-red-500"
        />
      </svg>

      {/* Text Label overlay or tooltip */}
      <span className="absolute -bottom-5 text-[9px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-red-500 font-bold whitespace-nowrap select-none">
        {isBatman ? "Exit Mode" : "Batman Mode"}
      </span>
    </button>
  );
}
