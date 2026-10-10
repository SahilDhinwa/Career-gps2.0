"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

// 🦇 TACTICAL OVERRIDE: Change to "rain", "embers", or "hud" to set the background particles!
const BATMAN_EFFECT: "rain" | "embers" | "hud" = "rain";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => setMounted(true), []);

  // ==========================================
  // BATMAN MODE: DYNAMIC CANVAS ENGINE (Rain/Embers)
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
    let numberOfParticles = 50;
    
    if (BATMAN_EFFECT === "embers") numberOfParticles = width < 768 ? 30 : 60;
    if (BATMAN_EFFECT === "rain") numberOfParticles = width < 768 ? 80 : 200; 
    if (BATMAN_EFFECT === "hud") numberOfParticles = width < 768 ? 20 : 40;

    class Particle {
      x: number; y: number; size: number = 0; speedX: number = 0; speedY: number = 0;
      color: string = ""; blur: number = 0; opacity: number = 0;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height; 

        if (BATMAN_EFFECT === "embers") {
          this.size = Math.random() * 2 + 0.5;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * -1.5 - 0.5; 
          this.color = ["rgba(255, 30, 20, 0.9)", "rgba(255, 60, 20, 0.7)", "rgba(200, 10, 10, 0.8)"][Math.floor(Math.random() * 3)];
          this.blur = Math.random() * 5 + 1;
        } 
        else if (BATMAN_EFFECT === "rain") {
          this.speedY = Math.random() * 15 + 10; 
          this.speedX = this.speedY * 0.15; 
          this.opacity = Math.random() * 0.5 + 0.3; 
        } 
        else if (BATMAN_EFFECT === "hud") {
          this.size = Math.random() > 0.5 ? 2 : 4;
          this.speedY = Math.random() * 1 + 0.5; 
          this.opacity = Math.random() * 0.5 + 0.2;
        }
      }

      update() {
        if (BATMAN_EFFECT === "embers") {
          this.x += this.speedX;
          this.y += this.speedY;
          this.speedX += (Math.random() * 0.02 - 0.01); 
          if (this.y < -10) { this.y = height + 10; this.x = Math.random() * width; }
        } 
        else if (BATMAN_EFFECT === "rain") {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.y > height + 20) { this.y = -20; this.x = Math.random() * width; }
          if (this.x > width + 20) { this.x = -20; }
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
          ctx.strokeStyle = `rgba(255, 30, 30, ${this.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 4;
          ctx.shadowColor = "#ff0000";
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

  if (!mounted || theme !== "batman") return null;

  const batPath = "M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z";

  return (
    <div className="fixed inset-0 z-[-50] bg-[#020101] overflow-hidden pointer-events-none flex items-center justify-center select-none">
      
      {/* 1. Deep Ambient Red Center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(150,10,10,0.15)_0%,transparent_60%)] z-0" />

      {/* 2. Dynamic Rain/Embers Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full opacity-80" aria-hidden="true" />

      {/* 3. Pitch Black Bat with Fiery Outline */}
      <div className="relative z-10 w-full h-full max-w-[1400px] opacity-[0.9] animate-[pulse_4s_ease-in-out_infinite] flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1536 864" 
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full object-contain drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            {/* The fiery orange-to-red gradient for the stroke */}
            <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffaa00" />
              <stop offset="40%" stopColor="#ff1a1a" />
              <stop offset="100%" stopColor="#660000" />
            </linearGradient>

            {/* Intense multi-layered blur to simulate glowing fire */}
            <filter id="fireGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur1" />
              <feGaussianBlur stdDeviation="12" result="blur2" />
              <feGaussianBlur stdDeviation="25" result="blur3" />
              <feMerge>
                <feMergeNode in="blur3" />
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="batman-emblem">
            {/* Massive diffused heat wave behind the bat */}
            <path d={batPath} fill="none" stroke="#ff0000" strokeWidth="20" opacity="0.35" filter="blur(25px)"/>
            
            {/* The main bat: Pitch black fill, flame gradient stroke, intense glow filter */}
            <path d={batPath} fill="#000000" stroke="url(#flameGradient)" strokeWidth="4.5" filter="url(#fireGlow)"/>
            
            {/* Crisp hot-white inner edge highlight for realism */}
            <path d={batPath} fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
          </g>
        </svg>
      </div>

    </div>
  );
}
