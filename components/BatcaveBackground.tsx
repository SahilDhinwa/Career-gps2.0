"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

// 🦇 TACTICAL OVERRIDE: Set to "embers" to match the sparks in your target image
const BATMAN_EFFECT: "rain" | "embers" | "hud" = "embers";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const cloudsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  // 🦇 ROUTING CHECK: Use crackling plasma flame ONLY on Home and Profile
  const isPlasmaPage = pathname === "/" || pathname === "/profile";

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
    let numberOfParticles = width < 768 ? 40 : 80;

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
          // Strictly deep reds and pure oranges—NO YELLOW
          this.color = ["rgba(255, 30, 30, 0.9)", "rgba(255, 60, 20, 0.8)", "rgba(200, 10, 10, 0.8)"][Math.floor(Math.random() * 3)];
          this.blur = Math.random() * 4 + 1;
        } 
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX += (Math.random() * 0.02 - 0.01); 
        if (this.y < -10) { this.y = height + 10; this.x = Math.random() * width; }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.blur;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // LIGHTNING ENGINE (White flashes for cinematic contrast)
    let lightningBolts: any[] = [];
    let globalFlashIntensity = 0;
    
    const createLightningBolt = (startX: number, startY: number) => {
      const segments: any[] = [];
      let curX = startX;
      let curY = startY;
      const cloudDensity = Math.random(); 
      const thickness = cloudDensity > 0.6 ? Math.random() * 4 + 2 : Math.random() * 2 + 1;
      
      while (curY < height) {
        const nextX = curX + (Math.random() - 0.5) * 150;
        const nextY = curY + Math.random() * 80 + 30;
        segments.push({ x1: curX, y1: curY, x2: nextX, y2: nextY });
        
        if (Math.random() < (cloudDensity * 0.3)) {
          segments.push({ x1: curX, y1: curY, x2: curX + (Math.random() - 0.5) * 200, y2: curY + Math.random() * 100 });
        }
        curX = nextX;
        curY = nextY;
      }
      return { segments, alpha: 1.0, thickness };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      if (Math.random() < 0.003) {
        const startX = Math.random() * width;
        lightningBolts.push(createLightningBolt(startX, 0));
        globalFlashIntensity = 1.0; 
      }

      globalFlashIntensity *= 0.92;
      
      if (batmobileRef.current) batmobileRef.current.style.opacity = (globalFlashIntensity * 0.8).toString();
      if (cloudsRef.current) cloudsRef.current.style.opacity = (globalFlashIntensity * 0.5).toString();

      for (let i = lightningBolts.length - 1; i >= 0; i--) {
        const bolt = lightningBolts[i];
        bolt.alpha *= 0.85; 

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

        if (bolt.alpha < 0.05) lightningBolts.splice(i, 1);
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
    <div className="fixed inset-0 z-[-50] bg-[#000000] overflow-hidden pointer-events-none flex items-center justify-center select-none">
      
      {/* 1. CINEMATIC BACKGROUND SMOKE (Dark, localized, barely visible) */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full z-0 opacity-30">
        <defs>
          <filter id="bgSmoke" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.007" numOctaves="4" seed="8" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.4  0 0.1 0 0 0.05  0 0 0.1 0 0.05  0 0 0 1 0" in="noise" result="coloredNoise" />
            <feBlend mode="screen" in="coloredNoise" in2="SourceGraphic" />
          </filter>
          <radialGradient id="smokeMask" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="1536" height="864" fill="#000000" filter="url(#bgSmoke)" mask="url(#smokeMask)" />
      </svg>

      {/* 2. LIGHTNING CLOUDS OVERLAY */}
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

      {/* 3. LIVE EMBERS CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full opacity-100" aria-hidden="true" />

      {/* 4. PERFECTED BAT EMBLEM */}
      <div className="relative z-10 w-full h-full max-w-[1400px] opacity-[0.95] flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1536 864" 
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full object-contain"
          aria-hidden="true"
        >
          <defs>
            {/* RAW CRACKLING PLASMA FILTER (Sharp, jagged electrical fire) */}
            <filter id="cracklingPlasma" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="1.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="displaced" />
              </feMerge>
            </filter>

            {/* Standard Smooth Neon Filter (For non-plasma pages) */}
            <filter id="smoothNeon" x="-50%" y="-50%" width="200%" height="200%">
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

          <g className="batman-emblem animate-[pulse_5s_ease-in-out_infinite]">
            
            {/* AMBIENT RED GLOW (Soft heat behind the bat) */}
            <path d={batPath} fill="none" stroke="#990000" strokeWidth="20" opacity="0.3" filter="blur(25px)"/>
            
            {/* SOLID PITCH BLACK CORE */}
            <path d={batPath} fill="#000000" stroke="none" />

            {/* CONDITIONAL FLAME RENDERING */}
            {isPlasmaPage ? (
              <>
                {/* 1. Pure Red Crackling Plasma Edge */}
                <path d={batPath} fill="none" stroke="#ff0000" strokeWidth="4" filter="url(#cracklingPlasma)"/>
                
                {/* 2. Thin Hot-White Core (Also displaced for jagged look) */}
                <path d={batPath} fill="none" stroke="#ffcccc" strokeWidth="1" opacity="0.9" filter="url(#cracklingPlasma)" />
              </>
            ) : (
              <>
                {/* Standard Smooth Neon Render */}
                <path d={batPath} fill="none" stroke="#ff0000" strokeWidth="4.5" filter="url(#smoothNeon)"/>
                <path d={batPath} fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
              </>
            )}
          </g>
        </svg>
      </div>

      {/* 5. THE BATMOBILE */}
      <div 
        ref={batmobileRef}
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 transition-opacity duration-75"
        style={{ opacity: 0 }}
      >
        <svg viewBox="0 0 500 150" className="w-[280px] md:w-[450px] lg:w-[600px] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" aria-hidden="true">
          <path d="M 20 140 A 30 30 0 0 1 100 140 Z" fill="#020202" />
          <path d="M 400 140 A 30 30 0 0 1 480 140 Z" fill="#020202" />
          <path d="M 50 110 L 60 85 L 120 70 L 150 65 L 180 40 L 220 35 L 250 25 L 300 25 L 330 35 L 360 40 L 390 65 L 420 70 L 460 85 L 470 110 Z" fill="#050101" />
          <path d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
          <path d="M 120 70 L 150 65 L 180 40" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>

    </div>
  );
}
