
"use client";

import { useEffect, useRef, useState } from "react";

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
  const [progress, setProgress] = useState(0);

  // DYNAMIC BATMAN LOADING: runs for exactly 5 seconds.
  useEffect(() => {
    if (!isActive || mode !== "batman") {
      setProgress(0);
      return;
    }

    let animationFrameId = 0;
    let cancelled = false;
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      if (cancelled) return;

      const elapsed = Math.max(0, now - startTime);
      const nextProgress = Math.min(100, (elapsed / 5000) * 100);

      setProgress(nextProgress);

      if (elapsed < 5000) {
        animationFrameId =
          window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId =
      window.requestAnimationFrame(updateProgress);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, mode]);

  // AUDIO: play the correct intro sound.
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

  // BATMAN: animated ember particle effect.
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

      animationFrameId =
        window.requestAnimationFrame(animate);
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

  // BATMAN MODE
  if (mode === "batman") {
    const status =
      progress < 25
        ? "INITIALIZING SYSTEM..."
        : progress < 50
          ? "ESTABLISHING SECURE CONNECTION..."
          : progress < 75
            ? "LOADING NIGHTFALL PROTOCOL..."
            : progress < 100
              ? "VERIFYING ACCESS..."
              : "SYSTEM READY";

    const terminalLines = [
      "SYSTEM ENGAGED",
      "ENCRYPTION INITIALIZING // SIGNAL LOCK",
      "TRACKING SCANNING NETWORK",
      "PROTOCOL NIGHTFALL",
      "ACCESS AUTHORIZED",
    ];

    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-black select-none">
        <style>{`
          @keyframes batman-emblem-zoom {
            0% {
              transform: scale(0.72);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            72% {
              transform: scale(2.35);
              opacity: 1;
            }
            91% {
              transform: scale(5.2);
              opacity: 1;
            }
            100% {
              transform: scale(6.4);
              opacity: 0;
            }
          }

          @keyframes batman-scene-fade {
            0%, 70% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes batman-blackout {
            0%, 72% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes batman-status-pulse {
            0%, 100% {
              opacity: 0.65;
            }
            50% {
              opacity: 1;
            }
          }

          .batman-background-scene {
            animation: batman-scene-fade 5s linear forwards;
          }

          .batman-emblem {
            transform-box: fill-box;
            transform-origin: 50% 50%;
            animation: batman-emblem-zoom
              5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            will-change: transform, opacity;
          }

          .batman-blackout {
            animation: batman-blackout 5s linear forwards;
          }

          .batman-status {
            animation: batman-status-pulse 1s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .batman-background-scene,
            .batman-emblem,
            .batman-blackout,
            .batman-status {
              animation: none;
              will-change: auto;
            }

            .batman-background-scene {
              opacity: 1;
            }

            .batman-emblem {
              transform: none;
              opacity: 1;
            }

            .batman-blackout {
              opacity: 0;
            }
          }
        `}</style>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1536 864"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 z-10 h-full w-full pointer-events-none"
          role="img"
          aria-label="Batman mode activated"
        >
          <defs>
            <radialGradient id="bg" cx="50%" cy="46%" r="68%">
              <stop offset="0" stopColor="#251011" />
              <stop offset=".42" stopColor="#0b0809" />
              <stop offset="1" stopColor="#020202" />
            </radialGradient>

            <radialGradient id="smoke" cx="50%" cy="50%" r="50%">
              <stop
                offset="0"
                stopColor="#8a4545"
                stopOpacity=".38"
              />
              <stop
                offset=".55"
                stopColor="#4a292b"
                stopOpacity=".17"
              />
              <stop
                offset="1"
                stopColor="#120d0e"
                stopOpacity="0"
              />
            </radialGradient>

            <linearGradient
              id="batStroke"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0" stopColor="#ffb1a9" />
              <stop offset=".38" stopColor="#ff514a" />
              <stop offset="1" stopColor="#ff1e24" />
            </linearGradient>

            <linearGradient
              id="barFill"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0" stopColor="#ff5c5c" />
              <stop offset="1" stopColor="#e93236" />
            </linearGradient>

            <filter
              id="glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0.8 0 0.1 0 0 0.02 0 0 0.1 0 0.02 0 0 0 1 0"
                result="redblur"
              />
              <feMerge>
                <feMergeNode in="redblur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="softGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="15" />
            </filter>

            <filter id="grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".72"
                numOctaves="2"
                seed="14"
              />
              <feColorMatrix
                values=".3 0 0 0 .1 .3 0 0 0 .08 .3 0 0 0 .08 0 0 0 .13 0"
              />
            </filter>

            <clipPath id="frame">
              <rect width="1536" height="864" />
            </clipPath>
          </defs>

          {/* BACKGROUND SCENE: original appearance, without grids. */}
          <g
            clipPath="url(#frame)"
            className="batman-background-scene"
          >
            <rect width="1536" height="864" fill="#000" />

            <rect
              x="143"
              y="46"
              width="1250"
              height="722"
              fill="url(#bg)"
            />

            <ellipse
              cx="768"
              cy="400"
              rx="570"
              ry="310"
              fill="url(#smoke)"
            />

            <ellipse
              cx="550"
              cy="315"
              rx="190"
              ry="130"
              fill="#733b3d"
              opacity=".14"
              filter="url(#softGlow)"
            />

            <ellipse
              cx="1005"
              cy="354"
              rx="210"
              ry="125"
              fill="#6c3033"
              opacity=".15"
              filter="url(#softGlow)"
            />

            <rect
              x="143"
              y="46"
              width="1250"
              height="722"
              filter="url(#grain)"
              opacity=".5"
            />

            {/* Background sparks */}
            <g fill="#ff583d">
              <circle cx="519" cy="117" r="2.2" />
              <circle cx="388" cy="190" r="2.4" />
              <circle cx="1004" cy="139" r="2.1" />
              <circle cx="1057" cy="130" r="2.4" />
              <circle cx="1087" cy="150" r="1.7" />
              <circle cx="1160" cy="96" r="1.5" />
              <circle cx="1213" cy="111" r="1.6" />
              <circle cx="1252" cy="146" r="1.4" />
              <circle cx="1283" cy="173" r="1.8" />
              <circle cx="1148" cy="218" r="2.6" />
              <circle cx="1310" cy="244" r="2.1" />
              <circle cx="1373" cy="272" r="1.7" />
              <circle cx="383" cy="278" r="1.8" />
              <circle cx="284" cy="420" r="1.8" />
              <circle cx="176" cy="484" r="2.4" />
              <circle cx="202" cy="576" r="3.2" />
              <circle cx="308" cy="611" r="2.5" />
              <circle cx="339" cy="641" r="1.6" />
              <circle cx="617" cy="561" r="2.4" />
              <circle cx="901" cy="603" r="2.2" />
              <circle cx="955" cy="563" r="2.4" />
              <circle cx="1005" cy="641" r="1.8" />
              <circle cx="1279" cy="623" r="1.6" />
              <circle cx="1314" cy="597" r="2" />
              <circle cx="1325" cy="358" r="2.2" />
              <circle cx="1269" cy="301" r="1.7" />
            </g>

            <g
              stroke="#ff583d"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity=".9"
            >
              <path d="M1000 147l7-8" />
              <path d="M1080 153l8-5" />
              <path d="M1224 230l3-5" />
              <path d="M291 431l-6-9" />
              <path d="M175 479l7 10" />
              <path d="M311 608l-4-6" />
              <path d="M897 605l5-10" />
              <path d="M1268 625l6-7" />
              <path d="M1371 274l7-3" />
              <path d="M389 193l-3-7" />
              <path d="M1032 183l5-5" />
              <path d="M1282 351l3-8" />
            </g>

            {/* Dynamic loading interface */}
            <g
              fontFamily="Arial, Helvetica, sans-serif"
              textAnchor="middle"
            >
              <text
                x="768"
                y="694"
                fontSize="21"
                fill="#ff625f"
                opacity=".96"
              >
                BATMAN MODE ACTIVATED
              </text>

              <text
                x="768"
                y="723"
                fontSize="17"
                fill="#95696a"
                opacity=".92"
                className="batman-status"
              >
                {status}
              </text>

              <text
                x="768"
                y="735"
                fontSize="12"
                fill="#ff625f"
                fontFamily="monospace"
              >
                {Math.floor(progress)}%
              </text>
            </g>

            {/* Progress-bar track */}
            <rect
              x="570"
              y="738"
              width="396"
              height="22"
              fill="#080606"
              stroke="#8b4243"
              strokeWidth="1.5"
            />

            {/* Progress fill: 0 to 100% */}
            <rect
              x="576"
              y="743"
              width={384 * (progress / 100)}
              height="12"
              fill="url(#barFill)"
              opacity=".98"
            />

            {/* Animated-looking progress segments */}
            <g fill="#190b0c" opacity=".85">
              <rect x="587" y="743" width="3" height="12" />
              <rect x="599" y="743" width="3" height="12" />
              <rect x="611" y="743" width="3" height="12" />
              <rect x="623" y="743" width="3" height="12" />
              <rect x="635" y="743" width="3" height="12" />
              <rect x="647" y="743" width="3" height="12" />
              <rect x="659" y="743" width="3" height="12" />
              <rect x="671" y="743" width="3" height="12" />
              <rect x="683" y="743" width="3" height="12" />
              <rect x="695" y="743" width="3" height="12" />
              <rect x="707" y="743" width="3" height="12" />
              <rect x="719" y="743" width="3" height="12" />
              <rect x="731" y="743" width="3" height="12" />
              <rect x="743" y="743" width="3" height="12" />
              <rect x="755" y="743" width="3" height="12" />
              <rect x="767" y="743" width="3" height="12" />
              <rect x="779" y="743" width="3" height="12" />
              <rect x="791" y="743" width="3" height="12" />
              <rect x="803" y="743" width="3" height="12" />
            </g>

            {/* Terminal text progressively reveals */}
            <g
              fontFamily="monospace"
              fontSize="4.7"
              fill="#7b3435"
              opacity=".85"
            >
              {terminalLines.map((line, index) => {
                const lineStart = index * 18;
                const lineProgress = Math.max(
                  0,
                  Math.min(1, (progress - lineStart) / 18)
                );
                const visibleLength = Math.floor(
                  line.length * lineProgress
                );

                return (
                  <text
                    key={line}
                    x="571"
                    y={771 + index * 7}
                  >
                    {line.slice(0, visibleLength)}
                  </text>
                );
              })}

              <text
                x="964"
                y="772"
                textAnchor="end"
              >
                {progress >= 100 ? "SYSTEM READY" : "SYSTEM LOADING"}
              </text>
            </g>

            <rect
              x="143"
              y="46"
              width="1250"
              height="722"
              fill="none"
              stroke="#171112"
              strokeWidth="2"
            />
          </g>

          {/* BATMAN EMBLEM: original paths preserved. */}
          <g className="batman-emblem">
            {/* Original emblem glow */}
            <path
              d="M320 483
                C350 391 425 293 562 244
                C552 277 578 312 617 330
                C652 346 688 348 721 345
                L736 276 L755 309 L768 307 L782 310 L800 276
                L815 345
                C848 348 884 346 919 330
                C958 312 984 277 974 244
                C1111 293 1186 391 1216 483
                C1175 445 1130 411 1086 408
                C1050 407 1031 433 1027 469
                C986 449 946 441 908 445
                C844 452 793 503 768 590
                C743 503 692 452 628 445
                C590 441 550 449 509 469
                C505 433 486 407 450 408
                C406 411 361 445 320 483 Z"
              fill="none"
              stroke="#ff242b"
              strokeWidth="14"
              opacity=".26"
              filter="url(#softGlow)"
            />

            {/* Original dark body */}
            <path
              d="M320 483
                C350 391 425 293 562 244
                C552 277 578 312 617 330
                C652 346 688 348 721 345
                L736 276 L755 309 L768 307 L782 310 L800 276
                L815 345
                C848 348 884 346 919 330
                C958 312 984 277 974 244
                C1111 293 1186 391 1216 483
                C1175 445 1130 411 1086 408
                C1050 407 1031 433 1027 469
                C986 449 946 441 908 445
                C844 452 793 503 768 590
                C743 503 692 452 628 445
                C590 441 550 449 509 469
                C505 433 486 407 450 408
                C406 411 361 445 320 483 Z"
              fill="#100607"
              fillOpacity=".42"
              stroke="#b9262b"
              strokeWidth="5"
              opacity=".9"
            />

            {/* Original gradient outline */}
            <path
              d="M320 483
                C350 391 425 293 562 244
                C552 277 578 312 617 330
                C652 346 688 348 721 345
                L736 276 L755 309 L768 307 L782 310 L800 276
                L815 345
                C848 348 884 346 919 330
                C958 312 984 277 974 244
                C1111 293 1186 391 1216 483
                C1175 445 1130 411 1086 408
                C1050 407 1031 433 1027 469
                C986 449 946 441 908 445
                C844 452 793 503 768 590
                C743 503 692 452 628 445
                C590 441 550 449 509 469
                C505 433 486 407 450 408
                C406 411 361 445 320 483 Z"
              fill="none"
              stroke="url(#batStroke)"
              strokeWidth="2.8"
              filter="url(#glow)"
            />

            {/* Original red highlights */}
            <path
              d="M325 476 C367 383 438 302 551 253
                M985 253 C1098 302 1169 383 1211 476
                M326 486 C372 451 414 416 451 416
                C481 416 500 439 504 474
                M1032 474 C1036 439 1055 416 1085 416
                C1122 416 1164 451 1210 486"
              fill="none"
              stroke="#ff9b91"
              strokeWidth="1.2"
              opacity=".8"
            />
          </g>
        </svg>

        {/* Live embers */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 z-20 h-full w-full pointer-events-none"
        />

        {/* Black finish at the end of the 5-second intro */}
        <div
          aria-hidden="true"
          className="batman-blackout absolute inset-0 z-30 bg-black pointer-events-none"
        />
      </div>
    );
  }

  // STANDARD MODE: original VG intro retained.
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
