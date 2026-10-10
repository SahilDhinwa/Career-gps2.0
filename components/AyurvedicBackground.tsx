"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

// 🦇 TACTICAL OVERRIDE: Change this to "embers", "rain", or "hud" to test them all!
const BATMAN_EFFECT: "embers" | "rain" | "hud" = "embers";

export default function AyurvedicBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Standard Green Leaves (Only generates once to prevent layout shifts)
  const [leaves] = useState(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 15}s`,
      animationDelay: `-${Math.random() * 15}s`,
      scale: 0.5 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }))
  );

  // ==========================================
  // BATMAN MODE: DYNAMIC CANVAS ENGINE
  // ==========================================
  useEffect(() => {
    if (theme !== "batman") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const particlesArray: any[] = [];
    
    // Adjust particle count based on the chosen effect
    let numberOfParticles = 50;
    if (BATMAN_EFFECT === "embers") numberOfParticles = width < 768 ? 30 : 60;
    if (BATMAN_EFFECT === "rain") numberOfParticles = width < 768 ? 60 : 150;
    if (BATMAN_EFFECT === "hud") numberOfParticles = width < 768 ? 20 : 40;

    class Particle {
      x: number; y: number; size: number = 0; speedX: number = 0; speedY: number = 0;
      color: string = ""; blur: number = 0; length: number = 0; opacity: number = 0;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height; // FIX: Spawns directly on the screen!

        if (BATMAN_EFFECT === "embers") {
          this.size = Math.random() * 2 + 0.5;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * -1.5 - 0.5; // Drift UP
          this.color = ["rgba(255, 30, 20, 0.9)", "rgba(255, 60, 20, 0.7)", "rgba(200, 10, 10, 0.8)"][Math.floor(Math.random() * 3)];
          this.blur = Math.random() * 5 + 1;
        } 
        else if (BATMAN_EFFECT === "rain") {
          this.length = Math.random() * 15 + 10;
          this.speedY = Math.random() * 12 + 8; // Fall fast DOWN
          this.speedX = this.speedY * 0.15; // Slight diagonal angle
          this.opacity = Math.random() * 0.4 + 0.1;
        } 
        else if (BATMAN_EFFECT === "hud") {
          this.size = Math.random() > 0.5 ? 2 : 4;
          this.speedY = Math.random() * 1 + 0.5; // Fall slowly DOWN
          this.opacity = Math.random() * 0.5 + 0.2;
        }
      }

      update() {
        if (BATMAN_EFFECT === "embers") {
          this.x += this.speedX;
          this.y += this.speedY;
          this.speedX += (Math.random() * 0.02 - 0.01); // Sway
          if (this.y < -10) { this.y = height + 10; this.x = Math.random() * width; }
        } 
        else if (BATMAN_EFFECT === "rain") {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.y > height + 20) { this.y = -20; this.x = Math.random() * width; }
        } 
        else if (BATMAN_EFFECT === "hud") {
          this.y += this.speedY;
          if (this.y > height + 10) { this.y = -10; this.x = Math.random() * width; }
        }
      }

      draw() {
        if (!ctx) return;
        
        if (BATMAN_EFFECT === "embers") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowBlur = this.blur;
          ctx.shadowColor = "#ff1a1a";
          ctx.fill();
        } 
        else if (BATMAN_EFFECT === "rain") {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.speedX, this.y + this.speedY);
          ctx.strokeStyle = `rgba(220, 20, 20, ${this.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 0;
          ctx.stroke();
        } 
        else if (BATMAN_EFFECT === "hud") {
          ctx.fillStyle = `rgba(255, 40, 40, ${this.opacity})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = "#ff0000";
          ctx.fillRect(this.x, this.y, this.size, this.size);
        }
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (!mounted) return null;

  // ==========================================
  // RENDER: BATMAN MODE (Canvas Layer)
  // ==========================================
  if (theme === "batman") {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 w-full h-full opacity-80"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050101]/40 to-[#050101] z-10"></div>
      </div>
    );
  }

  // ==========================================
  // RENDER: STANDARD MODE (Tree & Leaves)
  // ==========================================
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(50px); opacity: 0; }
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
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-700 dark:text-emerald-400 fill-current">
          <path d="M50 100 C 50 80, 45 70, 40 50 C 35 30, 20 20, 10 15 C 20 25, 35 35, 45 60 C 45 40, 35 25, 30 10 C 40 20, 48 35, 52 65 C 55 45, 65 30, 75 20 C 65 35, 58 50, 58 70 C 65 55, 80 45, 90 40 C 75 55, 60 70, 60 100 Z" />
          <path d="M50 100 C 50 80, 55 70, 60 50 C 65 30, 80 20, 90 15 C 80 25, 65 35, 55 60 C 55 40, 65 25, 70 10 C 60 20, 52 35, 48 65" />
        </svg>
      </div>

      {/* Dynamic Floating Leaves */}
      {leaves.map((leaf) => (
        <div key={leaf.id} className="absolute top-0 opacity-10 dark:opacity-20 text-emerald-600 dark:text-emerald-400"
          style={{ left: leaf.left, animation: `floatDown ${leaf.animationDuration} linear infinite`, animationDelay: leaf.animationDelay }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)` }}>
            <path d="M12 2C12 2 4 7 4 14C4 18.418 7.582 22 12 22C16.418 22 20 18.418 20 14C20 7 12 2 12 2Z" />
            <path d="M12 2V22" stroke="currentColor" strokeWidth="1" className="opacity-50 text-white dark:text-black" />
          </svg>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
    </div>
  );
}
