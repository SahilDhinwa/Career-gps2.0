"use client";

import { useEffect, useRef } from "react";

interface CinematicIntroProps {
  isActive: boolean;
  mode: "standard" | "batman";
}

export default function CinematicIntro({ isActive, mode }: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (isActive) {
      // PLAY CINEMATIC AUDIO FOR ACTIVE TRANSITIONS
      const audioPath = mode === "batman" ? "/sounds/batman-boom.mp3" : "/sounds/vg-chime.mp3";
      const audio = new Audio(audioPath);
      audio.volume = 0.7; // Generous volume, no blasting
      audio.play().catch((e) => console.warn("Audio playback blocked by browser policies:", e));
    }
  }, [isActive, mode]);

  useEffect(() => {
    if (!isActive || mode !== "batman" || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle Configuration (Cinematic Sparks & Embers)
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

    const particles: Particle[] = [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height + 20; // Bottom spawning
      const vx = (Math.random() - 0.5) * 1.8;
      const vy = -(Math.random() * 2.5 + 1.2); // Floating Upward
      const size = Math.random() * 2.8 + 0.6;
      const life = 1.0;
      const decay = Math.random() * 0.015 + 0.004;
      const blur = Math.random() * 4 + 1;

      // Cinematic Colors (Deep red, Vivid Orange, glowing spark Gold)
      const colors = ["rgba(255, 30, 30, 0.95)", "rgba(255, 78, 30, 0.9)", "rgba(255, 120, 30, 0.8)", "rgba(235, 30, 30, 0.7)"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({ x, y, vx, vy, size, life, decay, color, blur });
    };

    const updateAndDrawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Random particle spawning (drifting embers)
      if (particles.length < 150) {
        for (let i = 0; i < 3; i++) createParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        // Apply visual air resistance or horizontal drifts (gently swaying embers)
        p.vx += Math.sin(p.y * 0.01) * 0.03;

        if (p.life <= 0 || p.x < 0 || p.x > canvas.width) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = p.blur;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(updateAndDrawParticles);
    };

    updateAndDrawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, mode]);

  if (!isActive) return null;

  if (mode === "batman") {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center overflow-hidden font-mono select-none">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bat-cinematic {
            0% { transform: scale(0.4); opacity: 0; filter: blur(30px); }
            35% { transform: scale(0.4); opacity: 0; filter: blur(30px); } /* Synchronized with initial diagnostic Boot */
            55% { transform: scale(0.95); opacity: 1; filter: blur(0px); }
            70% { transform: scale(1); opacity: 1; filter: blur(0px); }
            85% { transform: scale(1.05); opacity: 1; filter: blur(0px); }
            100% { transform: scale(45); opacity: 0; filter: blur(15px); }
          }
          @keyframes typing {
            0% { opacity: 1; content: "INITIALIZING SECTOR V-G..."; }
            20% { content: "ESTABLISHING SECURE PROTOCOLS..."; }
            45% { content: "DECRYPTING PRIVATE VAULT..."; }
            65% { content: "OVERRIDING MAINFRAME..."; }
            80% { opacity: 1; content: "ACCESS GRANTED. BOOT COMPLETE."; }
            100% { opacity: 0; content: "ACCESS GRANTED. BOOT COMPLETE."; }
          }
          @keyframes border-glow-vibration {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.8)); }
            50% { filter: drop-shadow(0 0 25px rgba(255, 30, 30, 0.95)); }
          }
          @keyframes progress-grow {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-bat {
            animation: bat-cinematic 5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          .animate-terminal::after {
            content: "";
            animation: typing 4s steps(1) forwards;
          }
          .vibrate-glow {
            animation: border-glow-vibration 1.5s ease-in-out infinite;
          }
          .animate-loading-bar {
            animation: progress-grow 3.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}} />

        {/* Cinematic Grid Lines Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none z-0" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(220, 38, 38, 0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Dynamic Flying Sparks Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70" />

        {/* Organic Multi-Layer Smoke Overlay */}
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none z-10 blend-softlight mix-blend-color-dodge"></div>
        
        {/* Curved Wide Batman Logo Layered Glow Assembly */}
        <div className="w-[580px] h-[290px] relative flex items-center justify-center animate-bat z-20">
          {/* Inner Sharp Glow Layer */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="w-full h-full text-red-600 vibrate-glow absolute inset-0">
            <path 
              d="M 50 14 C 47.5 14 46.2 12.5 46.2 10.2 C 43 11 39 11 35.5 12 C 22.5 14.5 11.5 22.5 3.5 30.5 C 7.5 33.5 13.5 34.5 20.2 33.8 C 26.8 33 31 36.8 35 39.5 C 38 42 41 43.5 44 40.5 L 50 46.5 L 56 40.5 C 59 43.5 62 42 65 39.5 C 69 36.8 73.2 33 79.8 33.8 C 86.5 34.5 92.5 33.5 96.5 30.5 C 88.5 22.5 77.5 14.5 64.5 12 C 61 11 57 11 53.8 10.2 C 53.8 12.5 52.5 14 50 14 Z" 
              fill="rgba(20, 0, 0, 0.9)"
              stroke="rgba(255, 30, 30, 0.9)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Outer Blazing Core Red Light Path */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="w-full h-full text-red-500 absolute inset-0 blur-[3px]">
            <path 
              d="M 50 14 C 47.5 14 46.2 12.5 46.2 10.2 C 43 11 39 11 35.5 12 C 22.5 14.5 11.5 22.5 3.5 30.5 C 7.5 33.5 13.5 34.5 20.2 33.8 C 26.8 33 31 36.8 35 39.5 C 38 42 41 43.5 44 40.5 L 50 46.5 L 56 40.5 C 59 43.5 62 42 65 39.5 C 69 36.8 73.2 33 79.8 33.8 C 86.5 34.5 92.5 33.5 96.5 30.5 C 88.5 22.5 77.5 14.5 64.5 12 C 61 11 57 11 53.8 10.2 C 53.8 12.5 52.5 14 50 14 Z" 
              fill="none"
              stroke="rgba(220, 38, 38, 0.7)"
              strokeWidth="2.8"
            />
          </svg>
        </div>

        {/* Boot Status Diagnostics */}
        <div className="absolute bottom-20 flex flex-col items-center justify-center gap-4 z-30 select-none pointer-events-none">
          <p className="text-xs font-mono tracking-[0.3em] text-red-500 font-bold uppercase animate-pulse">
            Batman Mode Activated
          </p>
          <div className="w-[280px] h-1 border border-red-950 bg-black/60 relative overflow-hidden rounded-[1px]">
            <div className="h-full bg-gradient-to-r from-red-800 to-red-500 animate-loading-bar rounded-[1px]" />
          </div>
          <p className="text-[10px] font-mono tracking-[0.15em] text-red-700 font-semibold uppercase animate-terminal opacity-80 min-h-[14px]">
            {/* Populated dynamically via typing keyframe */}
          </p>
        </div>

        {/* Cinematic Scanline sweep */}
        <div className="absolute inset-x-0 h-[3px] bg-red-600/20 blur-sm animate-[scan_6s_linear_infinite] pointer-events-none z-10"></div>
      </div>
    );
  }

  // STANDARD LOGINS: Elegant Premium Gold Reveal
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A110D] flex items-center justify-center overflow-hidden select-none pointer-events-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vg-cinematic {
          0% { opacity: 0; transform: scale(0.85); filter: blur(10px); }
          20% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 45px rgba(212,175,55,0.4)); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.15); filter: blur(12px); }
        }
        .animate-vg {
          animation: vg-cinematic 4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />
      <div className="w-32 h-32 animate-vg flex flex-col items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
    </div>
  );
}
