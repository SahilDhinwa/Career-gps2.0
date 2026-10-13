"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

type ParticleKind = "rain" | "ember";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  length: number;
  blur: number;
  phase: number;
  kind: ParticleKind;
}

interface LightningSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface LightningBolt {
  segments: LightningSegment[];
  alpha: number;
  width: number;
}

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Plasma outline is strongest on the home and profile pages.
  const isPlasmaPage =
    pathname === "/" || pathname === "/profile";

  // ==========================================
  // CINEMATIC RAIN + EMBERS + LIGHTNING ENGINE
  // ==========================================

  useEffect(() => {
    if (theme !== "batman") return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId = 0;

    let particles: Particle[] = [];
    let lightningBolts: LightningBolt[] = [];

    let flashIntensity = 0;
    let nextLightningTime = 0;
    let lastTime = 0;

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    // ==========================================
    // PARTICLE CREATION
    // ==========================================

    const createParticle = (
      kind: ParticleKind,
      randomY = true
    ): Particle => {
      const ember = kind === "ember";

      return {
        x: random(0, width),
        y: randomY
          ? random(0, height)
          : height + random(0, 80),

        size: ember
          ? random(0.5, 2)
          : random(0.45, 1.1),

        speedX: ember
          ? random(-0.35, 0.35)
          : random(-1.2, -0.35),

        speedY: ember
          ? random(-1.1, -0.2)
          : random(7, 15),

        opacity: ember
          ? random(0.25, 0.9)
          : random(0.12, 0.4),

        color: ember
          ? [
              "#ff321d",
              "#ff542b",
              "#ff7045",
              "#d92718",
              "#ffb078",
            ][Math.floor(Math.random() * 5)]
          : "#aeb8c4",

        length: ember
          ? random(2, 9)
          : random(8, 24),

        blur: ember
          ? random(1, 6)
          : 0,

        phase: random(0, Math.PI * 2),
        kind,
      };
    };

    // ==========================================
    // LIGHTNING GENERATION
    // ==========================================

    const createLightningBolt = (
      startX: number,
      startY: number,
      endY: number,
      depth = 0
    ): LightningBolt => {
      const segments: LightningSegment[] = [];

      let x = startX;
      let y = startY;

      while (y < endY) {
        const nextX = x + random(-45, 45);
        const nextY = Math.min(
          y + random(22, 58),
          endY
        );

        segments.push({
          x1: x,
          y1: y,
          x2: nextX,
          y2: nextY,
        });

        // Branching lightning.
        if (
          depth < 2 &&
          Math.random() < 0.19 &&
          nextY < endY - 35
        ) {
          const branchLength = random(70, 180);

          const branch = createLightningBolt(
            nextX,
            nextY,
            Math.min(nextY + branchLength, height),
            depth + 1
          );

          segments.push(...branch.segments);
        }

        x = nextX;
        y = nextY;
      }

      return {
        segments,
        alpha: depth === 0 ? 1 : 0.7,
        width: depth === 0 ? random(1.1, 2.2) : 0.7,
      };
    };

    const triggerLightning = () => {
      // Main bolt.
      const startX = random(width * 0.12, width * 0.88);

      lightningBolts.push(
        createLightningBolt(startX, 0, height)
      );

      // Occasional secondary bolt.
      if (Math.random() < 0.45) {
        lightningBolts.push(
          createLightningBolt(
            random(width * 0.15, width * 0.85),
            0,
            height * random(0.45, 0.8)
          )
        );
      }

      flashIntensity = random(0.55, 1);

      // Some storms have quick secondary flashes.
      nextLightningTime =
        performance.now() + random(1800, 5200);
    };

    // ==========================================
    // CANVAS RESIZING
    // ==========================================

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 768;

      const rainCount = isMobile ? 65 : 125;
      const emberCount = isMobile ? 32 : 65;

      particles = [
        ...Array.from(
          { length: rainCount },
          () => createParticle("rain")
        ),
        ...Array.from(
          { length: emberCount },
          () => createParticle("ember")
        ),
      ];
    };

    // ==========================================
    // ANIMATION LOOP
    // ==========================================

    const animate = (now: number) => {
      const delta = lastTime
        ? Math.min((now - lastTime) / 16.667, 2)
        : 1;

      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // ----------------------------------------
      // 1. RAIN
      // ----------------------------------------

      ctx.save();
      ctx.lineCap = "round";

      for (const particle of particles) {
        particle.phase += 0.025 * delta;

        if (particle.kind === "rain") {
          particle.x += particle.speedX * delta;
          particle.y += particle.speedY * delta;

          if (
            particle.y > height + 25 ||
            particle.x < -30
          ) {
            Object.assign(
              particle,
              createParticle("rain", false)
            );
          }

          ctx.beginPath();

          ctx.moveTo(particle.x, particle.y);

          ctx.lineTo(
            particle.x + particle.speedX * 1.2,
            particle.y - particle.length
          );

          ctx.strokeStyle =
            `rgba(165, 177, 193, ${particle.opacity})`;

          ctx.lineWidth = particle.size;
          ctx.stroke();
        }
      }

      ctx.restore();

      // ----------------------------------------
      // 2. FIRE EMBERS
      // ----------------------------------------

      ctx.save();

      for (const particle of particles) {
        if (particle.kind !== "ember") continue;

        particle.x +=
          (particle.speedX +
            Math.sin(particle.phase) * 0.25) *
          delta;

        particle.y += particle.speedY * delta;

        if (
          particle.y < -15 ||
          particle.x < -20 ||
          particle.x > width + 20
        ) {
          Object.assign(
            particle,
            createParticle("ember", false)
          );

          particle.x = random(0, width);
        }

        const flicker =
          0.65 + Math.sin(particle.phase * 3) * 0.3;

        ctx.save();

        ctx.globalAlpha = particle.opacity * flicker;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.blur;

        ctx.beginPath();

        ctx.ellipse(
          particle.x,
          particle.y,
          particle.size * 0.65,
          particle.size * 1.6,
          -0.4,
          0,
          Math.PI * 2
        );

        ctx.fill();

        // Elongated hot sparks.
        if (particle.size > 1.4) {
          ctx.globalAlpha *= 0.65;
          ctx.lineWidth = 0.8;
          ctx.strokeStyle = particle.color;

          ctx.beginPath();

          ctx.moveTo(particle.x, particle.y);

          ctx.lineTo(
            particle.x - particle.speedX * particle.length,
            particle.y - particle.speedY * 2
          );

          ctx.stroke();
        }

        ctx.restore();
      }

      ctx.restore();

      // ----------------------------------------
      // 3. RANDOM LIGHTNING STRIKES
      // ----------------------------------------

      if (now >= nextLightningTime) {
        triggerLightning();
      }

      // Draw bolts with a white-hot core and blue-white glow.
      ctx.save();

      for (
        let i = lightningBolts.length - 1;
        i >= 0;
        i--
      ) {
        const bolt = lightningBolts[i];

        ctx.save();

        ctx.globalAlpha = bolt.alpha;

        // Outer glow.
        ctx.beginPath();

        for (const segment of bolt.segments) {
          ctx.moveTo(segment.x1, segment.y1);
          ctx.lineTo(segment.x2, segment.y2);
        }

        ctx.strokeStyle = "#7d9fff";
        ctx.lineWidth = bolt.width * 5;
        ctx.shadowColor = "#9db7ff";
        ctx.shadowBlur = 22;
        ctx.stroke();

        // Bright lightning core.
        ctx.beginPath();

        for (const segment of bolt.segments) {
          ctx.moveTo(segment.x1, segment.y1);
          ctx.lineTo(segment.x2, segment.y2);
        }

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = bolt.width;
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 9;
        ctx.stroke();

        ctx.restore();

        // Fast decay.
        bolt.alpha -= 0.12 * delta;

        if (bolt.alpha <= 0.04) {
          lightningBolts.splice(i, 1);
        }
      }

      ctx.restore();

      // ----------------------------------------
      // 4. LIGHTNING ILLUMINATES THE BATMOBILE
      // ----------------------------------------

      flashIntensity *= Math.pow(0.86, delta);

      if (flashIntensity < 0.015) {
        flashIntensity = 0;
      }

      if (batmobileRef.current) {
        batmobileRef.current.style.opacity =
          (0.12 + flashIntensity * 0.88).toString();

        batmobileRef.current.style.filter =
          `brightness(${0.65 + flashIntensity * 2.2}) ` +
          `drop-shadow(0 0 ${5 + flashIntensity * 25}px ` +
          `rgba(190, 205, 255, ${0.12 + flashIntensity * 0.55}))`;
      }

      if (flashRef.current) {
        flashRef.current.style.opacity =
          (flashIntensity * 0.15).toString();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();

    nextLightningTime =
      performance.now() + random(700, 2200);

    window.addEventListener("resize", resize);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);

      lightningBolts = [];
      particles = [];
    };
  }, [theme]);

  if (!mounted || theme !== "batman") return null;

  // ==========================================
  // BATMAN EMBLEM PATH
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
        bg-[#020202]
      "
      aria-hidden="true"
    >
      {/* ======================================
          1. SUBTLE TACTICAL GRID
          ====================================== */}

      <div
        className="absolute inset-0"
        style={{
          opacity: 0.08,
          backgroundImage: `
            linear-gradient(
              rgba(255, 30, 30, 0.3) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 30, 30, 0.3) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 85%)",
        }}
      />

      {/* ======================================
          2. BLACK BACKGROUND
          No red clouds or smoke.
          ====================================== */}

      <div className="absolute inset-0 bg-[#020202]" />

      {/* ======================================
          3. DYNAMIC RAIN, EMBERS AND LIGHTNING
          ====================================== */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] h-full w-full"
      />

      {/* Brief screen illumination during lightning. */}

      <div
        ref={flashRef}
        className="absolute inset-0 z-[2] bg-[#c8d7ff]"
        style={{ opacity: 0 }}
      />

      {/* ======================================
          4. BATMAN EMBLEM
          ====================================== */}

      <div className="absolute inset-0 z-[3] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1536 864"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full max-w-[1600px]"
        >
          <defs>
            <filter
              id="batOuterGlow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="15"
                result="blur"
              />

              <feFlood
                floodColor="#e20b16"
                floodOpacity="0.7"
                result="red"
              />

              <feComposite
                in="red"
                in2="blur"
                operator="in"
                result="glow"
              />

              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="batHotGlow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="3.5"
                result="soft"
              />

              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="wide"
              />

              <feMerge>
                <feMergeNode in="wide" />
                <feMergeNode in="soft" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="batPlasma"
              x="-10%"
              y="-15%"
              width="120%"
              height="130%"
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
              />
            </filter>

            <linearGradient
              id="batInterior"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#070606" />
              <stop offset="60%" stopColor="#030303" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>

          <g className="animate-[pulse_5s_ease-in-out_infinite]">
            {/* Red atmospheric outline. */}

            <path
              d={batPath}
              fill="none"
              stroke="#a00008"
              strokeWidth="12"
              opacity="0.35"
              filter="url(#batOuterGlow)"
            />

            {/* Black bat interior. */}

            <path
              d={batPath}
              fill="url(#batInterior)"
            />

            {/* Red plasma border. */}

            <path
              d={batPath}
              fill="none"
              stroke="#ff1717"
              strokeWidth="3.2"
              strokeLinejoin="round"
              filter="url(#batHotGlow)"
              opacity="0.95"
            />

            {/* Irregular electric edge. */}

            <path
              d={batPath}
              fill="none"
              stroke="#ff5145"
              strokeWidth="1.4"
              strokeLinejoin="round"
              filter="url(#batPlasma)"
              opacity="0.95"
            />

            {/* Hot core. */}

            <path
              d={batPath}
              fill="none"
              stroke="#ffd0c7"
              strokeWidth="0.65"
              strokeLinejoin="round"
              opacity="0.85"
            />

            {/* Extra electrical trace on main pages. */}

            {isPlasmaPage && (
              <path
                d={batPath}
                fill="none"
                stroke="#ff3027"
                strokeWidth="0.7"
                strokeDasharray="95 3 42 2 70 5"
                opacity="0.75"
              />
            )}
          </g>
        </svg>
      </div>

      {/* ======================================
          5. BATMOBILE
          Illuminated by lightning.
          ====================================== */}

      <div
        ref={batmobileRef}
        className="
          absolute bottom-[-12px] left-1/2
          z-[4] -translate-x-1/2
          transition-[filter] duration-100
        "
        style={{
          opacity: 0.12,
          filter:
            "brightness(0.65) drop-shadow(0 0 5px rgba(190,205,255,0.12))",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 150"
          className="
            w-[280px] md:w-[450px] lg:w-[600px]
          "
        >
          <defs>
            <linearGradient
              id="carBody"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#292c33" />
              <stop offset="35%" stopColor="#101115" />
              <stop offset="100%" stopColor="#020203" />
            </linearGradient>

            <linearGradient
              id="carGlass"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#38404b" />
              <stop offset="100%" stopColor="#07080b" />
            </linearGradient>

            <filter id="carGlow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Rear and front wheels. */}

          <path
            d="M 20 140 A 30 30 0 0 1 100 140 Z"
            fill="#010102"
            stroke="#33353b"
            strokeWidth="1.5"
          />

          <path
            d="M 400 140 A 30 30 0 0 1 480 140 Z"
            fill="#010102"
            stroke="#33353b"
            strokeWidth="1.5"
          />

          {/* Main armored body. */}

          <path
            d="
              M 20 116
              L 37 102
              L 60 85
              L 120 70
              L 150 65
              L 180 40
              L 220 35
              L 250 25
              L 300 25
              L 330 35
              L 360 40
              L 390 65
              L 420 70
              L 460 85
              L 483 111
              L 470 120
              L 450 126
              L 50 126
              L 30 122
              Z
            "
            fill="url(#carBody)"
            stroke="#353740"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Cockpit. */}

          <path
            d="
              M 175 62
              L 195 43
              L 220 39
              L 250 31
              L 297 31
              L 323 43
              L 342 62
              Z
            "
            fill="url(#carGlass)"
            stroke="#424650"
            strokeWidth="1.2"
          />

          {/* Armored hood lines. */}

          <path
            d="M 120 70 L 150 65 L 180 40"
            fill="none"
            stroke="#656974"
            strokeWidth="1.5"
            opacity="0.65"
          />

          <path
            d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35"
            fill="none"
            stroke="#a4a9b5"
            strokeWidth="1.5"
            opacity="0.6"
          />

          <path
            d="M 350 63 L 390 65 L 420 70"
            fill="none"
            stroke="#5e626b"
            strokeWidth="1.5"
            opacity="0.65"
          />

          {/* Bat-shaped front armor details. */}

          <path
            d="
              M 210 84
              L 231 72
              L 244 82
              L 250 74
              L 256 82
              L 269 72
              L 290 84
              L 274 89
              L 250 85
              L 226 89
              Z
            "
            fill="#030304"
            stroke="#454750"
            strokeWidth="1"
          />

          {/* Headlight glow. */}

          <path
            d="M 43 103 L 68 94 L 84 98 L 61 108 Z"
            fill="#b7c9f4"
            opacity="0.8"
            filter="url(#carGlow)"
          />

          <path
            d="M 416 98 L 432 94 L 457 103 L 439 108 Z"
            fill="#b7c9f4"
            opacity="0.8"
            filter="url(#carGlow)"
          />

          <path
            d="M 43 103 L 68 96 L 80 98"
            fill="none"
            stroke="#d9e5ff"
            strokeWidth="1.8"
            opacity="0.8"
          />

          <path
            d="M 420 98 L 432 96 L 457 103"
            fill="none"
            stroke="#d9e5ff"
            strokeWidth="1.8"
            opacity="0.8"
          />

          {/* Lower body highlight. */}

          <path
            d="M 50 126 L 450 126"
            fill="none"
            stroke="#737783"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Rear exhaust. */}

          <path
            d="M 222 126 L 238 137 L 262 137 L 278 126"
            fill="#050506"
            stroke="#3a3d46"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ======================================
          6. DARK VIGNETTE
          No cloudy red background.
          ====================================== */}

      <div
        className="absolute inset-0 z-[5]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 28%, rgba(0,0,0,0.3) 72%, #000 110%)",
        }}
      />
    </div>
  );
}
