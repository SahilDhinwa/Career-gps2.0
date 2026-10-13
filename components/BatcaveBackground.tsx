"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

// ============================================
// BATCAVE — BLACK VOID + DYNAMIC FIRE EMBERS
// ============================================

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ==========================================
  // DYNAMIC RED-ORANGE FIRE SPARKS
  // ==========================================

  useEffect(() => {
    if (theme !== "batman") return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let particles: Particle[] = [];

    class Particle {
      x = 0;
      y = 0;
      size = 0;
      speedX = 0;
      speedY = 0;
      opacity = 0;
      flickerSpeed = 0;
      phase = 0;
      color = "#ff4528";
      blur = 0;
      length = 0;

      constructor(randomY = true) {
        this.reset(randomY);
      }

      reset(randomY = true) {
        this.x = Math.random() * width;
        this.y = randomY
          ? Math.random() * height
          : height + Math.random() * 40;

        this.size = Math.random() * 1.8 + 0.45;
        this.speedX = (Math.random() - 0.5) * 0.65;
        this.speedY = -(Math.random() * 1.15 + 0.2);

        this.opacity = Math.random() * 0.7 + 0.2;
        this.flickerSpeed = Math.random() * 0.09 + 0.025;
        this.phase = Math.random() * Math.PI * 2;

        this.color = [
          "#ff321d",
          "#ff542b",
          "#ff7950",
          "#d92316",
          "#ffb078",
        ][Math.floor(Math.random() * 5)];

        this.blur = Math.random() * 7 + 2;
        this.length = Math.random() * 8 + 2;
      }

      update() {
        this.phase += this.flickerSpeed;

        this.x += this.speedX + Math.sin(this.phase) * 0.22;
        this.y += this.speedY;

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);

          if (this.x > width) this.x = Math.random() * width;
        }
      }

      draw() {
        const flicker =
          0.55 + Math.sin(this.phase) * 0.3;

        ctx!.save();

        ctx!.globalAlpha = this.opacity * flicker;
        ctx!.fillStyle = this.color;
        ctx!.shadowColor = this.color;
        ctx!.shadowBlur = this.blur;

        ctx!.beginPath();
        ctx!.ellipse(
          this.x,
          this.y,
          this.size * 0.7,
          this.size * 1.7,
          -0.35,
          0,
          Math.PI * 2
        );
        ctx!.fill();

        // Occasional elongated glowing sparks.
        if (this.size > 1.5) {
          ctx!.globalAlpha *= 0.55;
          ctx!.strokeStyle = this.color;
          ctx!.lineWidth = 0.8;

          ctx!.beginPath();
          ctx!.moveTo(this.x, this.y);
          ctx!.lineTo(
            this.x - this.speedX * this.length,
            this.y - this.speedY * this.length * 0.6
          );
          ctx!.stroke();
        }

        ctx!.restore();
      }
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);

      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 768 ? 42 : 85;

      particles = Array.from(
        { length: count },
        () => new Particle()
      );
    };

    const animate = () => {
      // Completely transparent canvas:
      // no fog, smoke, or colored background.
      ctx!.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();

    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme]);

  if (!mounted || theme !== "batman") return null;

  // ==========================================
  // BATMAN EMBLEM
  // Reference-inspired symmetrical silhouette
  // ==========================================

  const batPath = `
    M 320 483

    C 347 400, 420 298, 562 244

    C 551 276, 574 307, 615 328
    C 650 345, 687 350, 720 345

    L 736 276
    L 754 311
    L 768 306
    L 782 311
    L 800 276
    L 816 345

    C 849 350, 886 345, 921 328
    C 962 307, 985 276, 974 244

    C 1116 298, 1189 400, 1216 483

    C 1180 447, 1135 411, 1091 408
    C 1059 406, 1035 429, 1027 469

    C 985 448, 945 440, 908 445

    C 843 452, 792 502, 768 590

    C 744 502, 693 452, 628 445

    C 591 440, 551 448, 509 469

    C 501 429, 477 406, 445 408

    C 401 411, 356 447, 320 483

    Z
  `;

  return (
    <div
      className="
        fixed inset-0 z-[-50]
        overflow-hidden
        pointer-events-none
        select-none
        bg-[#030303]
      "
      aria-hidden="true"
    >
      {/* =====================================
          1. SUBTLE TACTICAL GRID
          Barely visible against black.
          ===================================== */}

      <div
        className="absolute inset-0"
        style={{
          opacity: 0.09,
          backgroundImage: `
            linear-gradient(
              rgba(255, 55, 45, 0.28) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 55, 45, 0.28) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "108px 108px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 85%)",
        }}
      />

      {/* =====================================
          2. PURE BLACK BACKGROUND
          No cloudy red SVG or smoke layers.
          ===================================== */}

      <div className="absolute inset-0 bg-[#030303]" />

      {/* =====================================
          3. LIVE FIRE EMBERS
          ===================================== */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* =====================================
          4. CINEMATIC BATMAN EMBLEM
          ===================================== */}

      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1536 864"
          preserveAspectRatio="xMidYMid meet"
          className="
            h-full w-full
            max-w-[1600px]
            overflow-visible
          "
        >
          <defs>
            {/* Broad, soft red halo. */}
            <filter
              id="batOuterGlow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="17"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 0.025 0 0 0
                  0 0 0.015 0 0
                  0 0 0 0.8 0
                "
                result="redGlow"
              />
              <feMerge>
                <feMergeNode in="redGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Tight neon edge. */}
            <filter
              id="batHotGlow"
              x="-15%"
              y="-20%"
              width="130%"
              height="140%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="soft"
              />
              <feGaussianBlur
                stdDeviation="11"
                in="SourceGraphic"
                result="wide"
              />
              <feMerge>
                <feMergeNode in="wide" />
                <feMergeNode in="soft" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Restrained electrical irregularity. */}
            <filter
              id="batPlasma"
              x="-10%"
              y="-15%"
              width="120%"
              height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.035 0.09"
                numOctaves="2"
                seed="12"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="1.7"
                xChannelSelector="R"
                yChannelSelector="G"
                result="electricEdge"
              />
              <feMerge>
                <feMergeNode in="electricEdge" />
              </feMerge>
            </filter>

            {/* Solid dark emblem interior. */}
            <linearGradient
              id="batInterior"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#080606" />
              <stop offset="55%" stopColor="#030303" />
              <stop offset="100%" stopColor="#010101" />
            </linearGradient>
          </defs>

          <g
            className="animate-[pulse_5s_ease-in-out_infinite]"
          >
            {/* Low-intensity atmospheric edge glow. */}
            <path
              d={batPath}
              fill="none"
              stroke="#a10b0b"
              strokeWidth="13"
              strokeLinejoin="round"
              opacity="0.28"
              filter="url(#batOuterGlow)"
            />

            {/* Dark body: no red fill and no smoke. */}
            <path
              d={batPath}
              fill="url(#batInterior)"
              stroke="none"
            />

            {/* Main red plasma outline. */}
            <path
              d={batPath}
              fill="none"
              stroke="#ff241d"
              strokeWidth="3.2"
              strokeLinejoin="round"
              filter="url(#batHotGlow)"
              opacity="0.94"
            />

            {/* Fine irregular electric edge. */}
            <path
              d={batPath}
              fill="none"
              stroke="#ff4b3e"
              strokeWidth="1.5"
              strokeLinejoin="round"
              filter="url(#batPlasma)"
              opacity="0.95"
            />

            {/* Thin hot core for a sharp, defined silhouette. */}
            <path
              d={batPath}
              fill="none"
              stroke="#ffb0a5"
              strokeWidth="0.75"
              strokeLinejoin="round"
              opacity="0.9"
            />

            {/* Small secondary trace for an electrical effect. */}
            <path
              d={batPath}
              fill="none"
              stroke="#ff3b30"
              strokeWidth="0.7"
              strokeLinejoin="round"
              strokeDasharray="95 3 42 2 70 5"
              opacity="0.65"
            />
          </g>
        </svg>
      </div>

      {/* =====================================
          5. DARK EDGE VIGNETTE
          Keeps attention on the emblem.
          Does not introduce red fog.
          ===================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 48%, transparent 28%, rgba(0,0,0,0.28) 72%, #000 110%)",
        }}
      />
    </div>
  );
}
