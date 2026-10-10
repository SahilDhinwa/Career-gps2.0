"use client";

import { useEffect, useRef, useState } from "react";

interface CinematicIntroProps {
  isActive: boolean;
  mode: "standard" | "batman";
}

interface Particle {
  x: number; y: number; vx: number; vy: number;
  size: number; life: number; decay: number; color: string; blur: number;
}

export default function CinematicIntro({ isActive, mode }: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Batman intro: dynamic progress over 10 seconds
  useEffect(() => {
    if (!isActive || mode !== "batman") { setProgress(0); return; }
    let animationFrameId = 0;
    let cancelled = false;
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      if (cancelled) return;
      const elapsed = Math.max(0, now - startTime);
      const nextProgress = Math.min(100, (elapsed / 10000) * 100);
      setProgress(nextProgress);
      if (elapsed < 10000) { animationFrameId = window.requestAnimationFrame(updateProgress); }
    };

    animationFrameId = window.requestAnimationFrame(updateProgress);
    return () => { cancelled = true; window.cancelAnimationFrame(animationFrameId); };
  }, [isActive, mode]);

  // Audio Handler
  useEffect(() => {
    if (!isActive) return;
    const audioPath = mode === "batman" ? "/sounds/batman-boom.mp3" : "/sounds/vg-chime.mp3";
    const audio = new Audio(audioPath);
    audio.volume = 0.7;
    void audio.play().catch((error: unknown) => { console.warn("Intro audio blocked:", error); });
    return () => { audio.pause(); audio.currentTime = 0; };
  }, [isActive, mode]);

  // Refined Embers Canvas Engine (Tuned for deep reds and oranges)
  useEffect(() => {
    if (!isActive || mode !== "batman") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrameId = 0;
    let disposed = false;
    const particles: Particle[] = [];
    const colors = ["rgba(255, 20, 20, 0.9)", "rgba(255, 60, 20, 0.8)", "rgba(200, 10, 10, 0.7)"];
    let width = 0, height = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (fromBottom = true) => {
      const size = Math.random() * 1.5 + 0.5;
      particles.push({
        x: Math.random() * width,
        y: fromBottom ? height + Math.random() * 25 : Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2, vy: -(Math.random() * 1.8 + 0.4),
        size, life: Math.random() * 0.4 + 0.4, decay: Math.random() * 0.012 + 0.004,
        color: colors[Math.floor(Math.random() * colors.length)], blur: Math.random() * 5 + 1,
      });
    };

    const animate = () => {
      if (disposed) return;
      ctx.clearRect(0, 0, width, height);
      const targetParticles = width < 600 ? 60 : 120;
      if (particles.length < targetParticles) {
        for (let i = 0; i < (width < 600 ? 1 : 2); i++) createParticle(true);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        p.vx += Math.sin(p.y * 0.012 + p.x * 0.004) * 0.02;

        if (p.life <= 0 || p.x < -20 || p.x > width + 20 || p.y < -25) {
          particles.splice(i, 1); continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.shadowBlur = p.blur; ctx.shadowColor = p.color; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    for (let i = 0; i < 30; i++) createParticle(false);
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      disposed = true;
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
      particles.length = 0; ctx.clearRect(0, 0, width, height);
    };
  }, [isActive, mode]);

  if (!isActive) return null;

  if (mode === "batman") {
    const batPath = "M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z";
    
    // Segmented bar logic
    const totalSegments = 28;
    const activeSegments = Math.floor((progress / 100) * totalSegments);

    const terminalLines = [
      "10929292   BATMAN/ROOT >",
      "83827291   DECRYPTING/VAULT/PROTOCOL/NIGHTFALL/REQ",
      "92837382   SIGNAL/LOCK/ESTABLISHED",
      "18273728   TRACKING/TARGET... // SECURE CONNECTION OPEN",
      "72837382   ACCESS/GRANTED",
      "00000000   SYS/READY"
    ];

    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#020101] flex items-center justify-center select-none">
        <style>{`
          @keyframes batman-emblem-zoom { 0% { transform: scale(0.35); opacity: 0; filter: brightness(0.5); } 12% { opacity: 1; filter: brightness(1); } 75% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(3.2); opacity: 0; } }
          @keyframes batman-scene-fade { 0%, 75% { opacity: 1; } 100% { opacity: 0; } }
          @keyframes batman-blackout { 0%, 75% { opacity: 0; } 100% { opacity: 1; } }
          .batman-background-scene { animation: batman-scene-fade 10s linear forwards; }
          .batman-viewport-container { width: 100vw; height: 100vh; position: relative; overflow: hidden; background: #030101; }
          .batman-emblem { transform-box: fill-box; transform-origin: center; animation: batman-emblem-zoom 10s cubic-bezier(0.25, 1, 0.5, 1) forwards; will-change: transform, opacity; }
          .batman-blackout { animation: batman-blackout 10s linear forwards; }
        `}</style>

        <div className="batman-viewport-container z-10">
          
          {/* LAYER 1: HEAVY TEXTURED SMOKE BACKGROUND */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
            <defs>
              <radialGradient id="deepGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0" stopColor="#4a0808" stopOpacity="0.4"/>
                <stop offset="0.5" stopColor="#1a0202" stopOpacity="0.2"/>
                <stop offset="1" stopColor="#020101" stopOpacity="1"/>
              </radialGradient>
              <filter id="heavySmoke" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.007" numOctaves="4" seed="5" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0.4   0 0.1 0 0 0.05   0 0 0.1 0 0.05   0 0 0 1 0" in="noise" result="coloredNoise" />
                <feBlend mode="screen" in="coloredNoise" in2="SourceGraphic" />
              </filter>
            </defs>
            <g className="batman-background-scene">
              <rect x="0" y="0" width="1536" height="864" fill="url(#deepGlow)" />
              <rect x="0" y="0" width="1536" height="864" fill="#020101" filter="url(#heavySmoke)" opacity="0.6" />
            </g>
          </svg>

          {/* LAYER 2: FOREGROUND CONTENT */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full z-10 pointer-events-none" role="img" aria-label="Batman mode activated">
            <defs>
              <filter id="glow-massive" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="35" result="blur" />
                <feColorMatrix type="matrix" values="1 0 0 0 0.8  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
              </filter>
              <filter id="glow-medium" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feColorMatrix type="matrix" values="1 0 0 0 0.9  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
              </filter>
              <filter id="glow-core" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feColorMatrix type="matrix" values="1 0 0 0 1  0 0.2 0 0 0.2  0 0.2 0 0 0.2  0 0 0 1 0" />
              </filter>
            </defs>

            <g className="batman-background-scene">
              
              {/* TYPOGRAPHY */}
              <g fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" transform="translate(0, 10)">
                <text x="768" y="700" fontSize="18" fill="#a35a5a" letterSpacing="2" opacity=".9">BATMAN MODE ACTIVATED</text>
                <text x="768" y="725" fontSize="14" fill="#665555" letterSpacing="1" opacity=".8">INITIALIZING SECTOR V-G...</text>
              </g>

              {/* SEGMENTED LOADING BAR CONTAINER */}
              <g transform="translate(0, 10)">
                <rect x="580" y="745" width="376" height="18" fill="none" stroke="#3d1515" strokeWidth="2" rx="2" />
                
                {/* DYNAMIC SEGMENTS */}
                {Array.from({ length: totalSegments }).map((_, i) => {
                  const isActive = i < activeSegments;
                  return (
                    <rect 
                      key={i} 
                      x={584 + i * 13} 
                      y="749" 
                      width="9" 
                      height="10" 
                      fill={isActive ? "#ff1a1a" : "#1a0505"} 
                      opacity={isActive ? "1" : "0.5"}
                      style={isActive ? { filter: 'drop-shadow(0px 0px 4px rgba(255, 0, 0, 0.8))' } : {}}
                    />
                  );
                })}
              </g>

              {/* TERMINAL TEXT BELOW BAR */}
              <g fontFamily="monospace" fontSize="6" fill="#4a3030" opacity=".7" transform="translate(0, 10)">
                {terminalLines.map((line, index) => {
                  const lineProgress = Math.max(0, Math.min(1, (progress - index * 15) / 15));
                  const visibleText = line.slice(0, Math.floor(line.length * lineProgress));
                  return (
                    <text key={index} x="580" y={775 + index * 8}>
                      {visibleText}
                    </text>
                  );
                })}
                <text x="956" y="775" textAnchor="end">{progress >= 100 ? "100% COMPLETE" : `${Math.floor(progress)}% SYSTEM LOAD`}</text>
              </g>
            </g>

            {/* INTENSE LAYERED BAT EMBLEM */}
            <g className="batman-emblem">
              {/* Massive Outer Ambient Glow */}
              <path d={batPath} fill="none" stroke="#ff0000" strokeWidth="15" opacity="0.3" filter="url(#glow-massive)"/>
              
              {/* Medium Intense Glow */}
              <path d={batPath} fill="none" stroke="#ff0000" strokeWidth="8" opacity="0.6" filter="url(#glow-medium)"/>
              
              {/* Solid Pitch-Black Core */}
              <path d={batPath} fill="#050101" stroke="none" />
              
              {/* Sharp Neon Edge with Core Glow */}
              <path d={batPath} fill="none" stroke="#ff3333" strokeWidth="3" filter="url(#glow-core)"/>
              
              {/* Pure White/Pink Center Line for intense light effect */}
              <path d={batPath} fill="none" stroke="#ffb3b3" strokeWidth="1" opacity="0.8"/>
            </g>
          </svg>
        </div>

        {/* Live canvas particles */}
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-20 h-full w-full pointer-events-none"/>
        
        {/* Final Blackout Fade */}
        <div aria-hidden="true" className="batman-blackout absolute inset-0 z-30 bg-black pointer-events-none"/>
      </div>
    );
  }

  // STANDARD VG MODE
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0A110D] select-none pointer-events-none">
      <div className="vg-intro-zoom origin-center flex h-32 w-32 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-full w-full drop-shadow-2xl" role="img" aria-label="VG logo">
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
    </div>
  );
}
