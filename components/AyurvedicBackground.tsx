"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Authentic Autumn Chinar Palette (Golden Yellow, Amber, Burnt Orange, Russet Brown)
const CHINAR_LIGHT_COLORS = [
  "#d97706", // Amber Gold
  "#b45309", // Warm Ochre Brown
  "#ca8a04", // Golden Yellow
  "#c2410c", // Burnt Autumn Orange
  "#92400e", // Deep Chinar Brown
];

export default function AyurvedicBackground() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [leaves] = useState(() =>
    Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 15}s`,
      animationDelay: `-${Math.random() * 15}s`,
      scale: 0.65 + Math.random() * 0.75,
      rotation: Math.random() * 360,
      chinarColor: CHINAR_LIGHT_COLORS[i % CHINAR_LIGHT_COLORS.length],
    }))
  );

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  // 🦇 TACTICAL OVERRIDE: Shut this component down completely in Batman mode!
  if (currentTheme === "batman") {
    return null;
  }

  const isLight = currentTheme === "light";

  // ==========================================
  // RENDER: STANDARD MODE (Tree & Leaves)
  // ==========================================
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(50vh) rotate(180deg) translateX(28px); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-sway {
          transform-origin: bottom center;
          animation: sway 8s ease-in-out infinite;
        }
      `}</style>

      {/* Main Anchor Tree */}
      <div className="absolute -bottom-24 -right-24 md:-bottom-12 md:-right-12 opacity-10 dark:opacity-5 animate-sway">
        <svg
          width="600"
          height="600"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-amber-700 dark:text-emerald-400 fill-current"
        >
          <path d="M50 100 C 50 80, 45 70, 40 50 C 35 30, 20 20, 10 15 C 20 25, 35 35, 45 60 C 45 40, 35 25, 30 10 C 40 20, 48 35, 52 65 C 55 45, 65 30, 75 20 C 65 35, 58 50, 58 70 C 65 55, 80 45, 90 40 C 75 55, 60 70, 60 100 Z" />
          <path d="M50 100 C 50 80, 55 70, 60 50 C 65 30, 80 20, 90 15 C 80 25, 65 35, 55 60 C 55 40, 65 25, 70 10 C 60 20, 52 35, 48 65" />
        </svg>
      </div>

      {/* Dynamic Floating Leaves (Yellow-Brown Chinar in Light Mode / Emerald in Dark Mode) */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute top-0 ${
            isLight ? "opacity-25" : "opacity-20 text-emerald-400"
          }`}
          style={{
            left: leaf.left,
            color: isLight ? leaf.chinarColor : undefined,
            animation: `floatDown ${leaf.animationDuration} linear infinite`,
            animationDelay: leaf.animationDelay,
          }}
        >
          {isLight ? (
            /* 🍁 5-Lobed Kashmiri Chinar Leaf SVG (Light Mode) */
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)` }}
            >
              {/* Serrated 5-Lobe Chinar Blade */}
              <path d="M16 1.5 L18.2 6.8 L20.5 5.8 L19.8 10.2 L25.2 6.5 L24.6 10.6 L27.5 9.8 L24.5 14.5 L30.2 14.8 L26.8 17.8 L28.8 19.8 L23.2 21.2 L25.8 25.5 L20.5 24.5 L19.5 26.8 L16.6 24.8 L16 30.5 L15.4 24.8 L12.5 26.8 L11.5 24.5 L6.2 25.5 L8.8 21.2 L3.2 19.8 L5.2 17.8 L1.8 14.8 L7.5 14.5 L4.5 9.8 L7.4 10.6 L6.8 6.5 L12.2 10.2 L11.5 5.8 L13.8 6.8 Z" />
              {/* Primary Chinar Veins */}
              <path
                d="M16 30.5 V6 M16 19 L24.5 9.5 M16 19 L7.5 9.5 M16 22.5 L25.5 18.5 M16 22.5 L6.5 18.5"
                stroke="#fef3c7"
                strokeWidth="0.9"
                strokeLinecap="round"
                fill="none"
                className="opacity-60"
              />
            </svg>
          ) : (
            /* 🌿 Original Emerald Teardrop Leaf (Dark Mode) */
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)` }}
            >
              <path d="M12 2C12 2 4 7 4 14C4 18.418 7.582 22 12 22C16.418 22 20 18.418 20 14C20 7 12 2 12 2Z" />
              <path
                d="M12 2V22"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-50 text-black"
              />
            </svg>
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
    </div>
  );
}
