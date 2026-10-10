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

  // Refined Sparks & Embers Canvas Engine
  useEffect(() => {
    if (!isActive || mode !== "batman") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrameId = 0;
    let disposed = false;
    const particles: Particle[] = [];
    const colors = ["rgba(255, 30, 30, 0.95)", "rgba(255, 78, 30, 0.9)", "rgba(255, 120, 30, 0.8)", "rgba(235, 30, 30, 0.7)", "rgba(255, 185, 105, 0.8)"];
    let width = 0, height = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (fromBottom = true) => {
      const size = Math.random() * 1.5 + 0.3;
      particles.push({
        x: Math.random() * width,
        y: fromBottom ? height + Math.random() * 25 : Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2, vy: -(Math.random() * 1.8 + 0.4),
        size, life: Math.random() * 0.4 + 0.4, decay: Math.random() * 0.012 + 0.004,
        color: colors[Math.floor(Math.random() * colors.length)], blur: Math.random() * 4 + 0.5,
      });
    };

    const animate = () => {
      if (disposed) return;
      ctx.clearRect(0, 0, width, height);
      const targetParticles = width < 600 ? 50 : 100;
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
    for (let i = 0; i < 25; i++) createParticle(false);
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
    const status = progress < 25 ? "INITIALIZING SYSTEM..." : progress < 50 ? "ESTABLISHING SECURE CONNECTION..." : progress < 75 ? "LOADING NIGHTFALL PROTOCOL..." : progress < 100 ? "VERIFYING ACCESS..." : "SYSTEM READY";
    const terminalLines = ["SYSTEM ENGAGED", "ENCRYPTION INITIALIZING // SIGNAL LOCK", "TRACKING SCANNING NETWORK", "PROTOCOL NIGHTFALL", "ACCESS AUTHORIZED"];

    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-black flex items-center justify-center select-none">
        <style>{`
          @keyframes batman-emblem-zoom { 0% { transform: scale(0.35); opacity: 0; } 12% { opacity: 1; } 75% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(2.8); opacity: 0; } }
          @keyframes batman-scene-fade { 0%, 75% { opacity: 1; } 100% { opacity: 0; } }
          @keyframes batman-blackout { 0%, 75% { opacity: 0; } 100% { opacity: 1; } }
          @keyframes batman-status-pulse { 0%, 100% { opacity: 0.65; } 50% { opacity: 1; } }
          .batman-background-scene { animation: batman-scene-fade 10s linear forwards; }
          .batman-viewport-container { width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; background: #000; }
          .batman-emblem { transform-box: fill-box; transform-origin: center; animation: batman-emblem-zoom 10s cubic-bezier(0.25, 1, 0.5, 1) forwards; will-change: transform, opacity; }
          .batman-blackout { animation: batman-blackout 10s linear forwards; }
          .batman-status { animation: batman-status-pulse 1s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) { .batman-background-scene, .batman-emblem, .batman-blackout, .batman-status { animation: none; will-change: auto; } }
        `}</style>

        {/* Fully contained proportional scaling using object-contain and meet */}
        <div className="batman-viewport-container z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid meet" className="w-full h-full object-contain pointer-events-none absolute inset-0" role="img" aria-label="Batman mode activated">
            <defs>
              <radialGradient id="bg" cx="50%" cy="46%" r="78%"><stop offset="0" stopColor="#251011"/><stop offset=".42" stopColor="#0b0809"/><stop offset="1" stopColor="#020202"/></radialGradient>
              <radialGradient id="smoke" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#a64d4d" stopOpacity=".48"/><stop offset=".48" stopColor="#632d30" stopOpacity=".26"/><stop offset="1" stopColor="#120d0e" stopOpacity="0"/></radialGradient>
              <linearGradient id="batStroke" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffb1a9"/><stop offset=".38" stopColor="#ff514a"/><stop offset="1" stopColor="#ff1e24"/></linearGradient>
              <linearGradient id="barFill" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ff5c5c"/><stop offset="1" stopColor="#e93236"/></linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="blur"/><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.8 0 0.1 0 0 0.02 0 0 0.1 0 0.02 0 0 0 1 0" result="redblur"/><feMerge><feMergeNode in="redblur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="15"/></filter>
              <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="14"/><feColorMatrix values=".3 0 0 0 .1 .3 0 0 0 .08 .3 0 0 0 .08 0 0 0 .13 0"/></filter>
              <clipPath id="frame"><rect x="0" y="0" width="1536" height="864"/></clipPath>
            </defs>

            <g clipPath="url(#frame)" className="batman-background-scene">
              <rect x="0" y="0" width="1536" height="864" fill="url(#bg)"/>
              <ellipse cx="768" cy="390" rx="920" ry="620" fill="url(#smoke)" opacity=".65"/>
              <rect x="0" y="0" width="1536" height="864" filter="url(#grain)" opacity=".22" pointerEvents="none"/>

              <g fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">
                <text x="768" y="694" fontSize="21" fill="#ff625f" opacity=".96">BATMAN MODE ACTIVATED</text>
                <text x="768" y="723" fontSize="17" fill="#95696a" opacity=".92" className="batman-status">{status}</text>
                <text x="768" y="735" fontSize="12" fill="#ff625f" fontFamily="monospace">{Math.floor(progress)}%</text>
              </g>

              <rect x="570" y="738" width="396" height="22" fill="#080606" stroke="#8b4243" strokeWidth="1.5"/>
              <rect x="576" y="743" width={384 * (progress / 100)} height="12" fill="url(#barFill)" opacity=".98"/>

              <g fill="#190b0c" opacity=".85">
                {[587, 599, 611, 623, 635, 647, 659, 671, 683, 695, 707, 719, 731, 743, 755, 767, 779, 791, 803].map((xCoord) => (
                  <rect key={xCoord} x={xCoord} y="743" width="3" height="12"/>
                ))}
              </g>

              <g fontFamily="monospace" fontSize="4.7" fill="#7b3435" opacity=".85">
                {terminalLines.map((line, index) => {
                  const lineProgress = Math.max(0, Math.min(1, (progress - index * 18) / 18));
                  return <text key={line} x="571" y={771 + index * 7}>{line.slice(0, Math.floor(line.length * lineProgress))}</text>;
                })}
                <text x="964" y="772" textAnchor="end">{progress >= 100 ? "SYSTEM READY" : "SYSTEM LOADING"}</text>
              </g>
            </g>

            <g className="batman-emblem">
              <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" fill="none" stroke="#ff242b" strokeWidth="14" opacity=".26" filter="url(#softGlow)"/>
              <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" fill="#100607" fillOpacity=".42" stroke="#b9262b" strokeWidth="5" opacity=".9"/>
              <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z" fill="none" stroke="url(#batStroke)" strokeWidth="2.8" filter="url(#glow)"/>
              <path d="M325 476 C367 383 438 302 551 253 M985 253 C1098 302 1169 383 1211 476 M326 486 C372 451 414 416 451 416 C481 416 500 439 504 474 M1032 474 C1036 439 1055 416 1085 416 C1122 416 1164 451 1210 486" fill="none" stroke="#ff9b91" strokeWidth="1.2" opacity=".8"/>
            </g>
          </svg>
        </div>

        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-20 h-full w-full pointer-events-none"/>
        <div aria-hidden="true" className="batman-blackout absolute inset-0 z-30 bg-black pointer-events-none"/>
      </div>
    );
  }

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
