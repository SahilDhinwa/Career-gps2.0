"use client";

import React, { useEffect, useState } from "react";

export default function AyurvedicBackground() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the random leaves after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random properties for leaves to make the animation feel organic
  const leaves = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 15}s`,
    animationDelay: `-${Math.random() * 15}s`,
    scale: 0.5 + Math.random() * 0.8,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
      {/* 
        Inline styles for pure CSS animations. 
        Keeps dependencies zero and performance high.
      */}
      <style>{`
        @keyframes floatDown {
          0% {
            transform: translateY(-10vh) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
        @keyframes sway {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-sway {
          transform-origin: bottom center;
          animation: sway 8s ease-in-out infinite;
        }
      `}</style>

      {/* Main Anchor Tree - Adapts to Dark/Light mode automatically */}
      <div className="absolute -bottom-24 -right-24 md:-bottom-12 md:-right-12 opacity-10 dark:opacity-5 animate-sway">
        <svg
          width="600"
          height="600"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-amber-700 dark:text-emerald-400 fill-current"
        >
          {/* Stylized Tree Trunk & Branches */}
          <path d="M50 100 C 50 80, 45 70, 40 50 C 35 30, 20 20, 10 15 C 20 25, 35 35, 45 60 C 45 40, 35 25, 30 10 C 40 20, 48 35, 52 65 C 55 45, 65 30, 75 20 C 65 35, 58 50, 58 70 C 65 55, 80 45, 90 40 C 75 55, 60 70, 60 100 Z" />
          <path d="M50 100 C 50 80, 55 70, 60 50 C 65 30, 80 20, 90 15 C 80 25, 65 35, 55 60 C 55 40, 65 25, 70 10 C 60 20, 52 35, 48 65" />
        </svg>
      </div>

      {/* Dynamic Floating Leaves */}
      {mounted &&
        leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute top-0 opacity-10 dark:opacity-20 text-emerald-600 dark:text-emerald-400"
            style={{
              left: leaf.left,
              animation: `floatDown ${leaf.animationDuration} linear infinite`,
              animationDelay: leaf.animationDelay,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)`,
              }}
            >
              {/* Simple Ayurvedic Leaf Shape (Tulsi/Neem inspired) */}
              <path d="M12 2C12 2 4 7 4 14C4 18.418 7.582 22 12 22C16.418 22 20 18.418 20 14C20 7 12 2 12 2Z" />
              <path
                d="M12 2V22"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-50 text-white dark:text-black"
              />
            </svg>
          </div>
        ))}

      {/* Soft gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
    </div>
  );
}
