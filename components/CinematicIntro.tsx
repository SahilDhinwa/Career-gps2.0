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
      const audioPath = mode === "batman" ? "/sounds/batman-boom.mp3" : "/sounds/vg-chime.mp3";
      const audio = new Audio(audioPath);
      audio.volume = 0.7;
      audio.play().catch((e) => console.warn("Audio playback blocked:", e));
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

    interface Particle { x: number; y: number; vx: number; vy: number; size: number; life: number; decay: number; color: string; blur: number; }
    const particles: Particle[] = [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height + 20;
      const vx = (Math.random() - 0.5) * 1.8;
      const vy = -(Math.random() * 2.5 + 1.2);
      const size = Math.random() * 2.8 + 0.6;
      const life = 1.0;
      const decay = Math.random() * 0.015 + 0.004;
      const blur = Math.random() * 4 + 1;
      const colors = ["rgba(255, 30, 30, 0.95)", "rgba(255, 78, 30, 0.9)", "rgba(255, 120, 30, 0.8)", "rgba(235, 30, 30, 0.7)"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({ x, y, vx, vy, size, life, decay, color, blur });
    };

    const updateAndDrawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (particles.length < 150) { for (let i = 0; i < 3; i++) createParticle(); }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        p.vx += Math.sin(p.y * 0.01) * 0.03;
        if (p.life <= 0 || p.x < 0 || p.x > canvas.width) { particles.splice(i, 1); continue; }

        ctx.save();
        ctx.globalAlpha = p.life; ctx.shadowBlur = p.blur; ctx.shadowColor = p.color;
        ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill(); ctx.restore();
      }
      animationFrameId = requestAnimationFrame(updateAndDrawParticles);
    };

    updateAndDrawParticles();
    return () => { window.removeEventListener("resize", resizeCanvas); cancelAnimationFrame(animationFrameId); };
  }, [isActive, mode]);

  if (!isActive) return null;

  if (mode === "batman") {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center overflow-hidden font-mono select-none">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes typing {
            0% { opacity: 1; content: "INITIALIZING SECTOR V-G..."; }
            20% { content: "ESTABLISHING SECURE PROTOCOLS..."; }
            45% { content: "DECRYPTING PRIVATE VAULT..."; }
            65% { content: "OVERRIDING MAINFRAME..."; }
            80% { opacity: 1; content: "ACCESS GRANTED. BOOT COMPLETE."; }
            100% { opacity: 0; content: "ACCESS GRANTED. BOOT COMPLETE."; }
          }
          @keyframes progress-grow { 0% { width: 0%; } 100% { width: 100%; } }
          .animate-terminal::after { content: ""; animation: typing 4s steps(1) forwards; }
          .animate-loading-bar { animation: progress-grow 3.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        `}} />

        <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(220, 38, 38, 0.15) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70" />

        {/* THE EXACT REFERENCE SVG PATH */}
        <div className="w-[600px] h-[300px] relative flex items-center justify-center z-20" style={{ animation: 'bat-zoom 5s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="w-full h-full absolute inset-0">
            <defs>
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
                <feMerge><feMergeNode in="blur2" /><feMergeNode in="blur1" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path 
              d="M 50 50 C 45 40 38 35 28 38 C 22 34 12 36 2 40 C 12 22 28 12 43 16 C 45 16 46 15 47 11 L 48 4 L 50 9 L 52 4 L 53 11 C 54 15 55 16 57 16 C 72 12 88 22 98 40 C 88 36 78 34 72 38 C 62 35 55 40 50 50 Z" 
              fill="rgba(10,0,0,0.9)"
              stroke="#ff1a1a"
              strokeWidth="1.5"
              strokeLinejoin="round"
              filter="url(#neon-glow)"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 flex flex-col items-center justify-center gap-4 z-30 select-none pointer-events-none">
          <p className="text-xs font-mono tracking-[0.3em] text-red-500 font-bold uppercase animate-pulse">Batman Mode Activated</p>
          <div className="w-[280px] h-1 border border-red-950 bg-black/60 relative overflow-hidden rounded-[1px]">
            <div className="h-full bg-gradient-to-r from-red-800 to-red-500 animate-loading-bar rounded-[1px]" />
          </div>
          <p className="text-[10px] font-mono tracking-[0.15em] text-red-700 font-semibold uppercase animate-terminal opacity-80 min-h-[14px]"></p>
        </div>
      </div>
    );
  }

  // STANDARD LOGINS: True Zoom-In Gold Reveal
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A110D] flex items-center justify-center overflow-hidden select-none pointer-events-none">
      <div className="w-32 h-32 flex flex-col items-center justify-center gap-4 origin-center" style={{ animation: 'vg-zoom 4s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
    </div>
  );
}
