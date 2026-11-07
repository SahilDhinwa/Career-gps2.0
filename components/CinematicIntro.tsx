"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FastForward } from "lucide-react";
import AtreyaIcon from "./AtreyaIcon";

interface CinematicIntroProps {
  isActive: boolean;
  mode: "standard" | "batman";
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  decay: number;
  color: string;
  blur: number;
}

export default function CinematicIntro({
  isActive,
  mode,
  onComplete,
}: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const completedRef = useRef(false);
  const [progress, setProgress] = useState(0);

  const INTRO_DURATION = mode === "batman" ? 10000 : 4500;

  // Unified handler to stop audio and finish/skip the intro immediately
  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  // Reset completion lock when intro activates
  useEffect(() => {
    if (isActive) {
      completedRef.current = false;
      setProgress(0);
    }
  }, [isActive]);

  // Allow skipping with the ESC key
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, handleFinish]);

  // Dynamic progress timer (triggers handleFinish automatically at 100%)
  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    let animationFrameId = 0;
    let cancelled = false;
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      if (cancelled) return;
      const elapsed = Math.max(0, now - startTime);
      const nextProgress = Math.min(100, (elapsed / INTRO_DURATION) * 100);
      setProgress(nextProgress);

      if (elapsed < INTRO_DURATION) {
        animationFrameId = window.requestAnimationFrame(updateProgress);
      } else {
        handleFinish();
      }
    };

    animationFrameId = window.requestAnimationFrame(updateProgress);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, INTRO_DURATION, handleFinish]);

  // Audio Handler (Batman Boom or Standard Chime)
  useEffect(() => {
    if (!isActive) return;
    const audioPath =
      mode === "batman" ? "/sounds/batman-boom.mp3" : "/sounds/vg-chime.mp3";
    const audio = new Audio(audioPath);
    audio.volume = 0.7;
    audioRef.current = audio;

    void audio.play().catch((error: unknown) => {
      console.warn("Intro audio blocked:", error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, [isActive, mode]);

  // Refined Embers Canvas Engine (Batman Mode)
  useEffect(() => {
    if (!isActive || mode !== "batman") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrameId = 0;
    let disposed = false;
    const particles: Particle[] = [];
    const colors = [
      "rgba(255, 20, 20, 0.9)",
      "rgba(255, 60, 20, 0.8)",
      "rgba(200, 10, 10, 0.7)",
    ];
    let width = 0,
      height = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (fromBottom = true) => {
      const size = Math.random() * 1.5 + 0.5;
      particles.push({
        x: Math.random() * width,
        y: fromBottom ? height + Math.random() * 25 : Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(Math.random() * 1.8 + 0.4),
        size,
        life: Math.random() * 0.4 + 0.4,
        decay: Math.random() * 0.012 + 0.004,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() * 5 + 1,
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
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vx += Math.sin(p.y * 0.012 + p.x * 0.004) * 0.02;

        if (p.life <= 0 || p.x < -20 || p.x > width + 20 || p.y < -25) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.shadowBlur = p.blur;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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
      particles.length = 0;
      ctx.clearRect(0, 0, width, height);
    };
  }, [isActive, mode]);

  if (!isActive) return null;

  // ===========================================================================
  // BATMAN MODE INTRO (10s with Skip Button)
  // ===========================================================================
  if (mode === "batman") {
    const batPath =
      "M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z";

    const totalSegments = 28;
    const activeSegments = Math.floor((progress / 100) * totalSegments);

    const terminalLines = [
      "10929292   BATMAN/ROOT >",
      "83827291   DECRYPTING/ATREYA/PROTOCOL/NIGHTFALL/REQ",
      "92837382   SIGNAL/LOCK/ESTABLISHED",
      "18273728   TRACKING/TARGET... // SECURE CONNECTION OPEN",
      "72837382   ACCESS/GRANTED",
      "00000000   SYS/READY",
    ];

    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-black flex items-center justify-center select-none">
        <style>{`
          @keyframes batman-emblem-zoom { 0% { transform: scale(0.35); opacity: 0; filter: brightness(0.5); } 12% { opacity: 1; filter: brightness(1); } 75% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(3.2); opacity: 0; } }
          @keyframes batman-scene-fade { 0%, 75% { opacity: 1; } 100% { opacity: 0; } }
          @keyframes batman-blackout { 0%, 80% { opacity: 0; } 90% { opacity: 1; } 100% { opacity: 0; display: none; } }
          .batman-background-scene { animation: batman-scene-fade 10s linear forwards; }
          .batman-viewport-container { width: 100vw; height: 100vh; position: relative; overflow: hidden; background: #000000; }
          .batman-emblem { transform-box: fill-box; transform-origin: center; animation: batman-emblem-zoom 10s cubic-bezier(0.25, 1, 0.5, 1) forwards; will-change: transform, opacity; }
          .batman-blackout { animation: batman-blackout 10s linear forwards; }
        `}</style>

        {/* SKIP INTRO BUTTON */}
        <button
          type="button"
          onClick={handleFinish}
          className="fixed top-6 right-6 z-[10000] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 hover:bg-red-600 text-red-200 hover:text-white border border-red-500/50 text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md transition-all cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.4)]"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>

        <div className="batman-viewport-container z-10">
          {/* LAYER 1: PURE BLACK VOID WITH CENTER GLOW */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1536 864"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#8b0000" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#330000" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g className="batman-background-scene">
              <rect x="0" y="0" width="1536" height="864" fill="#000000" />
              <rect
                x="0"
                y="0"
                width="1536"
                height="864"
                fill="url(#centerGlow)"
              />
            </g>
          </svg>

          {/* LAYER 2: FOREGROUND CONTENT */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1536 864"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            role="img"
            aria-label="Batman mode activated"
          >
            <defs>
              <filter
                id="glow-massive"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="35" result="blur" />
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0.8  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                />
              </filter>
              <filter
                id="glow-medium"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0.9  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                />
              </filter>
              <filter
                id="glow-core"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 1  0 0.2 0 0 0.2  0 0.2 0 0 0.2  0 0 0 1 0"
                />
              </filter>
            </defs>

            <g className="batman-background-scene">
              {/* TYPOGRAPHY */}
              <g
                fontFamily="Arial, Helvetica, sans-serif"
                textAnchor="middle"
                transform="translate(0, 10)"
              >
                <text
                  x="768"
                  y="700"
                  fontSize="18"
                  fill="#a35a5a"
                  letterSpacing="2"
                  opacity=".9"
                >
                  BATMAN MODE ACTIVATED
                </text>
                <text
                  x="768"
                  y="725"
                  fontSize="14"
                  fill="#665555"
                  letterSpacing="1"
                  opacity=".8"
                >
                  INITIALIZING ATREYA TACTICAL VAULT...
                </text>
              </g>

              {/* SEGMENTED LOADING BAR CONTAINER */}
              <g transform="translate(0, 10)">
                <rect
                  x="580"
                  y="745"
                  width="376"
                  height="18"
                  fill="none"
                  stroke="#3d1515"
                  strokeWidth="2"
                  rx="2"
                />

                {Array.from({ length: totalSegments }).map((_, i) => {
                  const isSegActive = i < activeSegments;
                  return (
                    <rect
                      key={i}
                      x={584 + i * 13}
                      y="749"
                      width="9"
                      height="10"
                      fill={isSegActive ? "#ff1a1a" : "#1a0505"}
                      opacity={isSegActive ? "1" : "0.5"}
                      style={
                        isSegActive
                          ? {
                              filter:
                                "drop-shadow(0px 0px 4px rgba(255, 0, 0, 0.8))",
                            }
                          : {}
                      }
                    />
                  );
                })}
              </g>

              {/* TERMINAL TEXT BELOW BAR */}
              <g
                fontFamily="monospace"
                fontSize="6"
                fill="#4a3030"
                opacity=".7"
                transform="translate(0, 10)"
              >
                {terminalLines.map((line, index) => {
                  const lineProgress = Math.max(
                    0,
                    Math.min(1, (progress - index * 15) / 15)
                  );
                  const visibleText = line.slice(
                    0,
                    Math.floor(line.length * lineProgress)
                  );
                  return (
                    <text key={index} x="580" y={775 + index * 8}>
                      {visibleText}
                    </text>
                  );
                })}
                <text x="956" y="775" textAnchor="end">
                  {progress >= 100
                    ? "100% COMPLETE"
                    : `${Math.floor(progress)}% SYSTEM LOAD`}
                </text>
              </g>
            </g>

            {/* INTENSE LAYERED BAT EMBLEM */}
            <g className="batman-emblem">
              <path
                d={batPath}
                fill="none"
                stroke="#ff0000"
                strokeWidth="15"
                opacity="0.3"
                filter="url(#glow-massive)"
              />
              <path
                d={batPath}
                fill="none"
                stroke="#ff0000"
                strokeWidth="8"
                opacity="0.6"
                filter="url(#glow-medium)"
              />
              <path d={batPath} fill="#000000" stroke="none" />
              <path
                d={batPath}
                fill="none"
                stroke="#ff3333"
                strokeWidth="3"
                filter="url(#glow-core)"
              />
              <path
                d={batPath}
                fill="none"
                stroke="#ffb3b3"
                strokeWidth="1"
                opacity="0.8"
              />
            </g>
          </svg>
        </div>

        {/* Live canvas particles */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 z-20 h-full w-full pointer-events-none"
        />

        {/* Final Blackout Fade */}
        <div
          aria-hidden="true"
          className="batman-blackout absolute inset-0 z-30 bg-black pointer-events-none"
        />
      </div>
    );
  }

  // ===========================================================================
  // STANDARD ATREYA MODE INTRO (With AtreyaIcon & Skip Button)
  // ===========================================================================
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#07110C] select-none">
      <button
        type="button"
        onClick={handleFinish}
        className="fixed top-6 right-6 z-[10000] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all cursor-pointer"
      >
        <span>Skip Intro</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>

      <div className="origin-center flex flex-col items-center justify-center animate-[vg-zoom_4.5s_ease-in-out_forwards]">
        <AtreyaIcon className="w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_0_45px_rgba(212,175,55,0.45)]" />
        <p
          className="mt-4 text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#D4AF37]"
          style={{ fontFamily: "var(--font-cinzel), 'Cinzel', serif" }}
        >
          ATREYA
        </p>
      </div>
    </div>
  );
}
