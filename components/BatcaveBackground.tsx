"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

// 🦇 TACTICAL OVERRIDE: Change to "rain", "embers", or "hud" to set the background particles!
const BATMAN_EFFECT: "rain" | "embers" | "hud" = "rain";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Refs for instant 60fps DOM syncing (bypasses React state delays)
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const cloudsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  // ==========================================
  // BATMAN MODE: DYNAMIC CANVAS ENGINE (Rain/Embers & Lightning)
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

    // 1. PARTICLES SETUP
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

    // 2. LIGHTNING ENGINE
    let lightningBolts: any[] = [];
    let globalFlashIntensity = 0;
    
    // Creates a jagged, branching white lightning bolt
    const createLightningBolt = (startX: number, startY: number) => {
      const segments: any[] = [];
      let curX = startX;
      let curY = startY;
      
      // Cloud density affects bolt thickness and branching
      const cloudDensity = Math.random(); 
      const thickness = cloudDensity > 0.6 ? Math.random() * 4 + 2 : Math.random() * 2 + 1;
      
      while (curY < height) {
        const nextX = curX + (Math.random() - 0.5) * 150;
        const nextY = curY + Math.random() * 80 + 30;
        segments.push({ x1: curX, y1: curY, x2: nextX, y2: nextY });
        
        // Random branching based on density
        if (Math.random() < (cloudDensity * 0.3)) {
          segments.push({ 
            x1: curX, y1: curY, 
            x2: curX + (Math.random() - 0.5) * 200, 
            y2: curY + Math.random() * 100 
          });
        }
        curX = nextX;
        curY = nextY;
      }
      return { segments, alpha: 1.0, thickness };
    };

    // 3. MAIN ANIMATION LOOP
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw standard particles first
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      // Random Lightning Strike Trigger (approx. once every 4-8 seconds)
      if (Math.random() < 0.004) {
        const startX = Math.random() * width;
        lightningBolts.push(createLightningBolt(startX, 0));
        globalFlashIntensity = 1.0; // Trigger DOM flash
      }

      // Decay the flash intensity quickly
      globalFlashIntensity *= 0.92;
      
      // Instantly sync flash intensity to the Batmobile and Clouds in the DOM
      if (batmobileRef.current) {
        batmobileRef.current.style.opacity = (globalFlashIntensity * 0.8).toString();
      }
      if (cloudsRef.current) {
        cloudsRef.current.style.opacity = (globalFlashIntensity * 0.5).toString();
      }

      // Draw active lightning bolts
      for (let i = lightningBolts.length - 1; i >= 0; i--) {
        const bolt = lightningBolts[i];
        bolt.alpha *= 0.85; // Bolts fade out extremely fast

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`;
        ctx.lineWidth = bolt.thickness;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
        
        bolt.segments.forEach((seg: any) => {
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        });
        
        ctx.stroke();

        // Remove dead bolts
        if (bolt.alpha < 0.05) {
          lightningBolts.splice(i, 1);
        }
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

      {/* 2. Storm Clouds Overlay (Opacity controlled by lightning strikes via Canvas Ref) */}
      <div 
        ref={cloudsRef}
        className="absolute inset-0 z-0 transition-opacity duration-75"
        style={{
          opacity: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(255,255,255,0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)
          `
        }}
      />

      {/* 3. Dynamic Canvas Layer (Rain/Embers & White Lightning) */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full opacity-90" aria-hidden="true" />

      {/* 4. Pitch Black Bat with Fiery Outline */}
      <div className="relative z-10 w-full h-full max-w-[1400px] opacity-[0.9] animate-[pulse_4s_ease-in-out_infinite] flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1536 864" 
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full object-contain drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffaa00" />
              <stop offset="40%" stopColor="#ff1a1a" />
              <stop offset="100%" stopColor="#660000" />
            </linearGradient>
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
            <path d={batPath} fill="none" stroke="#ff0000" strokeWidth="20" opacity="0.35" filter="blur(25px)"/>
            <path d={batPath} fill="#000000" stroke="url(#flameGradient)" strokeWidth="4.5" filter="url(#fireGlow)"/>
            <path d={batPath} fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
          </g>
        </svg>
      </div>

      {/* 5. The Batmobile (Appears at bottom center ONLY during lightning flashes) */}
      <div 
        ref={batmobileRef}
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 transition-opacity duration-75"
        style={{ opacity: 0 }}
      >
        <svg 
          viewBox="0 0 500 150" 
          className="w-[280px] md:w-[450px] lg:w-[600px] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          aria-hidden="true"
        >
          {/* Rear & Front Giant Tires */}
          <path d="M 20 140 A 30 30 0 0 1 100 140 Z" fill="#020202" />
          <path d="M 400 140 A 30 30 0 0 1 480 140 Z" fill="#020202" />
          
          {/* Armored Chassis / Tumbler Body */}
          <path d="M 50 110 L 60 85 L 120 70 L 150 65 L 180 40 L 220 35 L 250 25 L 300 25 L 330 35 L 360 40 L 390 65 L 420 70 L 460 85 L 470 110 Z" fill="#050101" />
          
          {/* Subtle White Highlights catching the lightning */}
          <path d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
          <path d="M 120 70 L 150 65 L 180 40" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>

    </div>
  );
}
