"use client";

import { useEffect, useRef } from "react";

interface CinematicIntroProps {
  isActive: boolean;
  mode: "standard" | "batman";
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
}: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // --------------------------------------------------
  // AUDIO: Play the correct intro sound and clean up.
  // --------------------------------------------------
  useEffect(() => {
    if (!isActive) return;

    const audioPath =
      mode === "batman"
        ? "/sounds/batman-boom.mp3"
        : "/sounds/vg-chime.mp3";

    const audio = new Audio(audioPath);
    audio.volume = 0.7;

    void audio.play().catch((error: unknown) => {
      console.warn("Intro audio could not play:", error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isActive, mode]);

  // --------------------------------------------------
  // BATMAN: Animated ember particles.
  // --------------------------------------------------
  useEffect(() => {
    if (!isActive || mode !== "batman") return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let animationFrameId = 0;
    let disposed = false;

    const particles: Particle[] = [];
    const colors = [
      "rgba(255, 30, 30, 0.95)",
      "rgba(255, 78, 30, 0.9)",
      "rgba(255, 120, 30, 0.8)",
      "rgba(235, 30, 30, 0.7)",
    ];

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      // Keep particles sharp on high-density screens.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = () => {
      particles.push({
        x: Math.random() * width,
        y: height + 20,
        vx: (Math.random() - 0.5) * 1.8,
        vy: -(Math.random() * 2.5 + 1.2),
        size: Math.random() * 2.8 + 0.6,
        life: 1,
        decay: Math.random() * 0.015 + 0.004,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() * 4 + 1,
      });
    };

    const animate = () => {
      if (disposed) return;

      ctx.clearRect(0, 0, width, height);

      if (particles.length < 150) {
        for (let i = 0; i < 3; i++) {
          createParticle();
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vx += Math.sin(p.y * 0.01) * 0.03;

        if (
          p.life <= 0 ||
          p.x < 0 ||
          p.x > width ||
          p.y < -20
        ) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
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

  // --------------------------------------------------
  // BATMAN MODE: Your new complete SVG scene.
  // --------------------------------------------------
  if (mode === "batman") {
    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#020202] select-none">
        <style>{`
          @keyframes batman-scene-zoom {
            0% {
              transform: scale(1);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            100% {
              transform: scale(1.12);
              opacity: 1;
            }
          }

          .batman-scene {
            animation: batman-scene-zoom
              5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            transform-origin: center center;
            will-change: transform, opacity;
          }

          @media (prefers-reduced-motion: reduce) {
            .batman-scene {
              animation: none;
              transform: none;
              opacity: 1;
              will-change: auto;
            }
          }
        `}</style>

        {/* Full-screen SVG: logo, glow, smoke, grid,
            sparks, title, terminal, and loading bar. */}
        <img
          src="/batman_mode.svg"
          alt="Batman mode activated"
          draggable={false}
          className="
            batman-scene
            absolute inset-0
            h-full w-full
            object-contain
            pointer-events-none
            z-10
          "
        />

        {/* Live ember particles drawn over the SVG. */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="
            absolute inset-0
            h-full w-full
            pointer-events-none
            z-20
          "
        />
      </div>
    );
  }

  // --------------------------------------------------
  // STANDARD MODE: Original gold and silver logo.
  // --------------------------------------------------
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0A110D] select-none pointer-events-none">
      <style>{`
        @keyframes vg-zoom {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          100% {
            transform: scale(5);
            opacity: 0;
          }
        }

        .vg-intro-zoom {
          animation: vg-zoom
            4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .vg-intro-zoom {
            animation: none;
            transform: none;
            opacity: 1;
            will-change: auto;
          }
        }
      `}</style>

      <div className="vg-intro-zoom origin-center flex h-32 w-32 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-full w-full drop-shadow-2xl"
          role="img"
          aria-label="VG logo"
        >
          <path
            d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z"
            fill="#D4AF37"
          />

          <path
            d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z"
            fill="#F3F4F6"
          />
        </svg>
      </div>
    </div>
  );
}
