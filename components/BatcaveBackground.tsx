"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

interface BoltSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface LightningBolt {
  segments: BoltSegment[];
  alpha: number;
  thickness: number;
  isRedSurge?: boolean;
}

export default function BatcaveBackground() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Core DOM Refs for Zero-Lag 60FPS Direct Manipulation
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const cloudsRef = useRef<HTMLDivElement | null>(null);
  const emblemGroupRef = useRef<SVGGElement | null>(null);
  const outerRingRef = useRef<SVGGElement | null>(null);
  const innerRingRef = useRef<SVGGElement | null>(null);
  const hudGridRef = useRef<SVGGElement | null>(null);
  const depthTextRef = useRef<SVGTextElement | null>(null);
  const percentTextRef = useRef<SVGTextElement | null>(null);
  const progressFillRef = useRef<SVGRectElement | null>(null);
  const scanlineRef = useRef<SVGLineElement | null>(null);

  useEffect(() => setMounted(true), []);

  const isBatman = theme === "batman" || resolvedTheme === "batman";

  // =========================================================================
  // SCROLL-REACTIVE KINETIC LIGHTNING, EMBERS & HUD TELEMETRY ENGINE
  // =========================================================================
  useEffect(() => {
    if (!isBatman) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scroll Physics State (Tracked outside React state for 60fps smoothness)
    let targetScrollY = window.scrollY;
    let smoothScrollY = window.scrollY;
    let scrollVelocity = 0;
    let maxScrollHeight = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    let lastLightningScrollY = window.scrollY;

    const applyCanvasSize = (w: number, h: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = w;
      height = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      maxScrollHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
    };

    applyCanvasSize(width, height);

    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      const widthChanged = Math.abs(newW - width) > 10;
      const heightChangedSignificantly = Math.abs(newH - height) > 140;

      if (widthChanged || heightChangedSignificantly) {
        applyCanvasSize(newW, newH);
      } else {
        maxScrollHeight = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        );
      }
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const numberOfParticles = width < 768 ? 35 : 75;
    const colors = [
      "rgba(255, 30, 30, 0.9)",
      "rgba(255, 75, 25, 0.85)",
      "rgba(210, 10, 10, 0.8)",
    ];

    const particlesArray = Array.from({ length: numberOfParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      speedY: Math.random() * -1.4 - 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const lightningBolts: LightningBolt[] = [];
    let globalFlashIntensity = 0;

    const createLightningBolt = (
      startX: number,
      startY: number,
      isRedSurge = false
    ): LightningBolt => {
      const segments: BoltSegment[] = [];
      let curX = startX;
      let curY = startY;
      const cloudDensity = Math.random();
      const thickness =
        cloudDensity > 0.6 ? Math.random() * 3.5 + 2 : Math.random() * 2 + 1;

      while (curY < height) {
        const nextX = curX + (Math.random() - 0.5) * 150;
        const nextY = curY + Math.random() * 80 + 30;
        segments.push({ x1: curX, y1: curY, x2: nextX, y2: nextY });

        if (Math.random() < cloudDensity * 0.3) {
          segments.push({
            x1: curX,
            y1: curY,
            x2: curX + (Math.random() - 0.5) * 200,
            y2: curY + Math.random() * 100,
          });
        }
        curX = nextX;
        curY = nextY;
      }
      return { segments, alpha: 1.0, thickness, isRedSurge };
    };

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // 1. CALCULATE SMOOTH LERP SCROLL & VELOCITY
      const diff = targetScrollY - smoothScrollY;
      smoothScrollY += diff * 0.09; // Smooth damping factor
      scrollVelocity = diff * 0.09; // Positive = scrolling down, Negative = scrolling up
      const absVelocity = Math.min(Math.abs(scrollVelocity), 45);

      // Recalculate maxScrollHeight dynamically in case page content expanded
      const currentMax = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollProgress = Math.max(
        0,
        Math.min(1, smoothScrollY / currentMax)
      );

      // 2. APPLY SCROLL TRANSFORMATIONS TO SVG HUD & BAT EMBLEM
      if (outerRingRef.current) {
        const rotOuter = scrollProgress * 220;
        outerRingRef.current.setAttribute(
          "transform",
          `rotate(${rotOuter.toFixed(1)} 768 415)`
        );
      }

      if (innerRingRef.current) {
        const rotInner = -scrollProgress * 300;
        const ringScale = 1 + Math.min(absVelocity * 0.003, 0.08);
        innerRingRef.current.setAttribute(
          "transform",
          `translate(768 415) rotate(${rotInner.toFixed(1)}) scale(${ringScale.toFixed(3)}) translate(-768 -415)`
        );
      }

      if (emblemGroupRef.current) {
        // Subtle parallax rise + kinetic scale pulse when scrolling fast
        const parallaxY = Math.sin(scrollProgress * Math.PI) * -18;
        const scaleBoost =
          1 + scrollProgress * 0.06 + Math.min(absVelocity * 0.0025, 0.06);
        emblemGroupRef.current.setAttribute(
          "transform",
          `translate(768 ${415 + parallaxY}) scale(${scaleBoost.toFixed(3)}) translate(-768 -415)`
        );
      }

      if (hudGridRef.current) {
        // Shift background grid vertically for subterranean descent illusion
        const gridShiftY = (smoothScrollY * -0.12) % 80;
        hudGridRef.current.setAttribute(
          "transform",
          `translate(0, ${gridShiftY.toFixed(1)})`
        );
      }

      if (scanlineRef.current) {
        const scanY = 120 + scrollProgress * 620;
        scanlineRef.current.setAttribute("y1", scanY.toFixed(1));
        scanlineRef.current.setAttribute("y2", scanY.toFixed(1));
      }

      if (depthTextRef.current) {
        const caveDepthMeters = Math.round(120 + scrollProgress * 880);
        depthTextRef.current.textContent = `DEPTH // -0${caveDepthMeters}M`;
      }

      if (percentTextRef.current) {
        const pct = Math.round(scrollProgress * 100)
          .toString()
          .padStart(2, "0");
        percentTextRef.current.textContent = `SYNC // ${pct}%`;
      }

      if (progressFillRef.current) {
        const barHeight = Math.max(4, scrollProgress * 500);
        progressFillRef.current.setAttribute("height", barHeight.toFixed(1));
      }

      // 3. DRAW KINETIC EMBERS (STREAKS REACT TO SCROLL VELOCITY)
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0;

      // Extra upward rush when scrolling down, downward push when scrolling up
      const velocityBoostY = -scrollVelocity * 0.35;

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        const effectiveVy = p.speedY + velocityBoostY;

        p.x += p.speedX;
        p.y += effectiveVy;
        p.speedX += Math.random() * 0.02 - 0.01;

        // Wrap particles smoothly around top and bottom
        if (p.y < -25) {
          p.y = height + 20;
          p.x = Math.random() * width;
        } else if (p.y > height + 25) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        // If user is scrolling fast, draw motion-blur plasma streaks!
        if (absVelocity > 2.5) {
          ctx.beginPath();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size;
          ctx.lineCap = "round";
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.speedX * 2, p.y - effectiveVy * 2.4);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }

      // 4. TRIGGER AMBIENT LIGHTNING OR SCROLL-SURGE LIGHTNING
      const scrolledDistanceSinceStrike = Math.abs(
        smoothScrollY - lastLightningScrollY
      );
      const triggerKineticStrike =
        absVelocity > 22 && scrolledDistanceSinceStrike > 550;

      if (Math.random() < 0.0028 || triggerKineticStrike) {
        if (triggerKineticStrike) {
          lastLightningScrollY = smoothScrollY;
        }
        lightningBolts.push(
          createLightningBolt(
            Math.random() * width,
            0,
            triggerKineticStrike // Red-tinted kinetic bolt when triggered by fast scroll
          )
        );
        globalFlashIntensity = triggerKineticStrike ? 0.85 : 1.0;
      }

      // 5. BATMOBILE SILHOUETTE & CLOUDS ILLUMINATION
      // Batmobile also emerges softly when user reaches bottom 20% of page
      const bottomGarageReveal =
        scrollProgress > 0.8 ? (scrollProgress - 0.8) * 3.2 : 0;

      if (globalFlashIntensity > 0.01 || bottomGarageReveal > 0.01) {
        globalFlashIntensity *= 0.92;
        const combinedMobileOpacity = Math.min(
          0.9,
          Math.max(globalFlashIntensity * 0.8, bottomGarageReveal)
        );

        if (batmobileRef.current) {
          batmobileRef.current.style.opacity = combinedMobileOpacity.toFixed(2);
          const liftY = Math.round(scrollProgress * -14);
          batmobileRef.current.style.transform = `translate(-50%, ${liftY}px)`;
        }
        if (cloudsRef.current) {
          cloudsRef.current.style.opacity = (
            globalFlashIntensity * 0.5
          ).toFixed(2);
        }
      } else if (globalFlashIntensity !== 0) {
        globalFlashIntensity = 0;
        if (batmobileRef.current) batmobileRef.current.style.opacity = "0";
        if (cloudsRef.current) cloudsRef.current.style.opacity = "0";
      }

      // Render active lightning bolts
      for (let i = lightningBolts.length - 1; i >= 0; i--) {
        const bolt = lightningBolts[i];
        bolt.alpha *= 0.85;

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = bolt.isRedSurge
          ? `rgba(255, 90, 90, ${bolt.alpha})`
          : `rgba(255, 255, 255, ${bolt.alpha})`;
        ctx.lineWidth = bolt.thickness;
        ctx.shadowBlur = 15;
        ctx.shadowColor = bolt.isRedSurge ? "#ff1a1a" : "white";

        for (let j = 0; j < bolt.segments.length; j++) {
          const seg = bolt.segments[j];
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        }
        ctx.stroke();
        ctx.restore();

        if (bolt.alpha < 0.05) lightningBolts.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isBatman]);

  if (!mounted || !isBatman) return null;

  const batPath =
    "M 320 483 C 350 390, 428 292, 562 244 C 550 278, 576 312, 616 330 C 651 346, 688 349, 721 345 L 736 276 L 754 310 L 768 307 L 782 310 L 800 276 L 815 345 C 848 349, 885 346, 920 330 C 960 312, 986 278, 974 244 C 1108 292, 1186 390, 1216 483 C 1176 445, 1131 411, 1087 408 C 1051 407, 1032 432, 1027 469 C 986 448, 946 440, 908 445 C 844 452, 793 503, 768 592 C 743 503, 692 452, 628 445 C 590 440, 550 448, 509 469 C 504 432, 485 407, 449 408 C 405 411, 360 445, 320 483 Z";

  return (
    <div
      className="fixed inset-0 z-[-50] bg-[#000000] overflow-hidden pointer-events-none flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* 1. LIGHTNING CLOUDS OVERLAY */}
      <div
        ref={cloudsRef}
        className="absolute inset-0 z-0 transition-opacity duration-75"
        style={{
          opacity: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(255,255,255,0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)
          `,
        }}
      />

      {/* 2. LIVE KINETIC EMBERS & LIGHTNING CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] w-full h-full opacity-100"
      />

      {/* 3. SCROLL-REACTIVE BATCOMPUTER HUD & PLASMA EMBLEM */}
      <div className="relative z-10 w-full h-full max-w-[1380px] px-2 flex items-center justify-center transform-gpu will-change-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1536 864"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full object-contain scale-[1.45] sm:scale-[1.2] md:scale-100 transition-transform duration-500"
        >
          <defs>
            <radialGradient id="smokeMaskGrad" cx="50%" cy="46%" r="34%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <mask id="tightCenterMask">
              <rect width="1536" height="864" fill="url(#smokeMaskGrad)" />
            </mask>

            <filter
              id="localizedSmoke"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.0065"
                numOctaves="2"
                seed="8"
                result="smokeNoise"
              />
              <feColorMatrix
                type="matrix"
                values="0.22 0 0 0 0.02 0.04 0 0 0 0.01 0.04 0 0 0 0.01 0 0 0 0.5 0"
                in="smokeNoise"
              />
            </filter>

            <filter
              id="deepRedBloom"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="plasmaFlame"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.05 0.08"
                numOctaves="2"
                seed="14"
                result="flameNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="flameNoise"
                scale="10"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feGaussianBlur
                in="displaced"
                stdDeviation="1.8"
                result="softFlame"
              />
              <feMerge>
                <feMergeNode in="softFlame" />
                <feMergeNode in="displaced" />
              </feMerge>
            </filter>

            <filter id="hudGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="batCoreFill" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#110707" />
              <stop offset="65%" stopColor="#060303" />
              <stop offset="100%" stopColor="#020101" />
            </radialGradient>

            <path id="batOutline" d={batPath} />
          </defs>

          {/* PARALLAX TACTICAL HUD GRID (Shifts smoothly with scroll) */}
          <g ref={hudGridRef} stroke="#4a0c0c" strokeWidth="1" opacity="0.55">
            <line x1="80" y1="230" x2="1456" y2="230" strokeOpacity="0.25" />
            <line x1="80" y1="310" x2="1456" y2="310" strokeOpacity="0.35" />
            <line x1="80" y1="472" x2="1456" y2="472" strokeOpacity="0.5" />
            <line x1="80" y1="634" x2="1456" y2="634" strokeOpacity="0.25" />
            <line x1="80" y1="714" x2="1456" y2="714" strokeOpacity="0.2" />
            <line x1="142" y1="60" x2="142" y2="800" strokeOpacity="0.45" />
            <line x1="285" y1="140" x2="285" y2="720" strokeOpacity="0.3" />
            <line x1="1251" y1="140" x2="1251" y2="720" strokeOpacity="0.3" />
            <line x1="1394" y1="60" x2="1394" y2="800" strokeOpacity="0.45" />
            <circle cx="142" cy="310" r="2.5" fill="#991515" />
            <circle cx="142" cy="472" r="3" fill="#cc1919" />
            <circle cx="285" cy="472" r="2" fill="#801515" />
            <circle cx="1251" cy="472" r="2" fill="#801515" />
            <circle cx="1394" cy="310" r="2.5" fill="#991515" />
            <circle cx="1394" cy="472" r="3" fill="#cc1919" />
          </g>

          {/* ACTIVE HORIZONTAL LASER SCANLINE (Tracks Scroll Position) */}
          <line
            ref={scanlineRef}
            x1="142"
            y1="120"
            x2="1394"
            y2="120"
            stroke="#ff1a1a"
            strokeWidth="1"
            strokeDasharray="12 8"
            opacity="0.35"
          />

          {/* LEFT & RIGHT LIVE TELEMETRY SIDEBARS (Desktop/Tablet HUD) */}
          <g fontFamily="monospace" fontSize="11" fill="#cc2929" opacity="0.75">
            <text ref={depthTextRef} x="154" y="155" letterSpacing="2">
              DEPTH // -0120M
            </text>
            <text
              x="154"
              y="172"
              fontSize="9"
              fill="#7a2020"
              letterSpacing="1.5"
            >
              BATCOMPUTER // BIO-TELEMETRY LINK
            </text>

            <text
              ref={percentTextRef}
              x="1380"
              y="155"
              textAnchor="end"
              letterSpacing="2"
            >
              SYNC // 00%
            </text>

            {/* Right Vertical Depth Progress Bar */}
            <rect
              x="1388"
              y="180"
              width="4"
              height="500"
              fill="#2a0707"
              rx="2"
            />
            <rect
              ref={progressFillRef}
              x="1388"
              y="180"
              width="4"
              height="4"
              fill="#ff1e1e"
              rx="2"
              filter="url(#hudGlow)"
            />
          </g>

          {/* SCROLL-ROTATING BATCOMPUTER TARGET RINGS (Behind Bat Emblem) */}
          <g ref={outerRingRef}>
            <circle
              cx="768"
              cy="415"
              r="310"
              fill="none"
              stroke="#5c0d0d"
              strokeWidth="1.5"
              strokeDasharray="24 14 6 14"
              opacity="0.6"
            />
            <circle
              cx="768"
              cy="415"
              r="330"
              fill="none"
              stroke="#3d0808"
              strokeWidth="1"
              strokeDasharray="4 18"
              opacity="0.5"
            />
          </g>

          <g ref={innerRingRef}>
            <circle
              cx="768"
              cy="415"
              r="235"
              fill="none"
              stroke="#991414"
              strokeWidth="2"
              strokeDasharray="45 25 10 25"
              opacity="0.5"
            />
            {/* Tactical Crosshair Ticks */}
            <line
              x1="768"
              y1="165"
              x2="768"
              y2="185"
              stroke="#ff2a2a"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="768"
              y1="645"
              x2="768"
              y2="665"
              stroke="#ff2a2a"
              strokeWidth="2"
              opacity="0.6"
            />
          </g>

          {/* LOCALIZED SMOKE (Strictly Masked Behind Bat) */}
          <g mask="url(#tightCenterMask)">
            <ellipse
              cx="768"
              cy="410"
              rx="460"
              ry="210"
              fill="#2b0404"
              filter="url(#deepRedBloom)"
              opacity="0.6"
            />
            <rect
              x="220"
              y="140"
              width="1096"
              height="540"
              filter="url(#localizedSmoke)"
              opacity="0.8"
            />
          </g>

          {/* THE BATMAN PLASMA EMBLEM (Reacts to Scroll Depth & Velocity) */}
          <g ref={emblemGroupRef}>
            <use
              href="#batOutline"
              fill="none"
              stroke="#990005"
              strokeWidth="22"
              opacity="0.45"
              filter="url(#deepRedBloom)"
            />
            <use href="#batOutline" fill="url(#batCoreFill)" />
            <use
              href="#batOutline"
              fill="none"
              stroke="#cc1414"
              strokeWidth="1.2"
              opacity="0.7"
              transform="translate(0, 3) scale(0.992)"
              style={{ transformOrigin: "768px 415px" }}
            />
            <use
              href="#batOutline"
              fill="none"
              stroke="#ff2200"
              strokeWidth="6"
              opacity="0.9"
              filter="url(#plasmaFlame)"
            />
            <use
              href="#batOutline"
              fill="none"
              stroke="#ff1e1e"
              strokeWidth="3"
              strokeLinejoin="round"
              filter="url(#hudGlow)"
            />
            <use
              href="#batOutline"
              fill="none"
              stroke="#ffdede"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </g>

          {/* STATIC EMBERS AROUND WINGS */}
          <g filter="url(#hudGlow)">
            <ellipse
              cx="182"
              cy="542"
              rx="4.5"
              ry="2"
              transform="rotate(-28 182 542)"
              fill="#ff451a"
              opacity="0.9"
            />
            <ellipse
              cx="212"
              cy="605"
              rx="5.5"
              ry="2.2"
              transform="rotate(35 212 605)"
              fill="#ff5c26"
              opacity="0.85"
            />
            <circle cx="242" cy="488" r="2.2" fill="#ff7b47" opacity="0.8" />
            <circle cx="275" cy="638" r="2.8" fill="#ff3311" opacity="0.75" />
            <ellipse
              cx="322"
              cy="665"
              rx="4"
              ry="1.6"
              transform="rotate(20 322 665)"
              fill="#ff6633"
              opacity="0.85"
            />
            <circle cx="435" cy="492" r="2" fill="#ff884d" opacity="0.7" />
            <circle cx="496" cy="240" r="2.2" fill="#ff5522" opacity="0.8" />
            <ellipse
              cx="898"
              cy="645"
              rx="5"
              ry="1.8"
              transform="rotate(-55 898 645)"
              fill="#ff6b35"
              opacity="0.95"
            />
            <circle cx="942" cy="562" r="2.2" fill="#ff8552" opacity="0.85" />
            <circle cx="1062" cy="252" r="2" fill="#ff7744" opacity="0.75" />
            <circle cx="1152" cy="392" r="2.6" fill="#ff4411" opacity="0.8" />
            <circle cx="1142" cy="542" r="2.5" fill="#ff5522" opacity="0.85" />
            <ellipse
              cx="1220"
              cy="618"
              rx="4.2"
              ry="1.8"
              transform="rotate(-25 1220 618)"
              fill="#ff4818"
              opacity="0.9"
            />
            <circle cx="1256" cy="336" r="2.4" fill="#ff5522" opacity="0.8" />
            <circle cx="1312" cy="442" r="2" fill="#ff6633" opacity="0.75" />
          </g>
        </svg>
      </div>

      {/* 4. SILHOUETTE BATMOBILE (Flashes on Lightning + Rises on Bottom Scroll) */}
      <div
        ref={batmobileRef}
        className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 z-20 transition-opacity duration-150"
        style={{ opacity: 0 }}
      >
        <svg
          viewBox="0 0 500 150"
          className="w-[280px] md:w-[450px] lg:w-[600px] drop-shadow-[0_0_20px_rgba(255,30,30,0.45)]"
        >
          <path d="M 20 140 A 30 30 0 0 1 100 140 Z" fill="#020202" />
          <path d="M 400 140 A 30 30 0 0 1 480 140 Z" fill="#020202" />
          <path
            d="M 50 110 L 60 85 L 120 70 L 150 65 L 180 40 L 220 35 L 250 25 L 300 25 L 330 35 L 360 40 L 390 65 L 420 70 L 460 85 L 470 110 Z"
            fill="#050101"
          />
          <path
            d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.65"
          />
          <path
            d="M 120 70 L 150 65 L 180 40"
            fill="none"
            stroke="#ff3333"
            strokeWidth="1.8"
            opacity="0.7"
          />
          {/* Crimson Afterburner & Tactical Headlight Glow */}
          <ellipse cx="462" cy="94" rx="10" ry="3.5" fill="#ff1a1a" opacity="0.85" />
          <ellipse cx="56" cy="96" rx="8" ry="3" fill="#ff3300" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
