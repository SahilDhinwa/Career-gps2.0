"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const cloudsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  // ==========================================
  // FORMER LIGHTNING & EMBERS ENGINE (LAG-FREE)
  // ==========================================
  useEffect(() => {
    if (theme !== "batman") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const numberOfParticles = width < 768 ? 30 : 65;
    const colors = ["rgba(255, 30, 30, 0.9)", "rgba(255, 60, 20, 0.8)", "rgba(200, 10, 10, 0.8)"];

    const particlesArray = Array.from({ length: numberOfParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * -1.5 - 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // ORIGINAL WHITE LIGHTNING ENGINE
    let lightningBolts: any[] = [];
    let globalFlashIntensity = 0;

    const createLightningBolt = (startX: number, startY: number) => {
      const segments: any[] = [];
      let curX = startX;
      let curY = startY;
      const cloudDensity = Math.random();
      const thickness = cloudDensity > 0.6 ? Math.random() * 4 + 2 : Math.random() * 2 + 1;

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
      return { segments, alpha: 1.0, thickness };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw embers without GPU-blocking shadowBlur on every frame
      ctx.shadowBlur = 0;
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedX += Math.random() * 0.02 - 0.01;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      // Trigger lightning at your original frequency
      if (Math.random() < 0.003) {
        lightningBolts.push(createLightningBolt(Math.random() * width, 0));
        globalFlashIntensity = 1.0;
      }

      if (globalFlashIntensity > 0.01) {
        globalFlashIntensity *= 0.92;
        if (batmobileRef.current) batmobileRef.current.style.opacity = (globalFlashIntensity * 0.8).toString();
        if (cloudsRef.current) cloudsRef.current.style.opacity = (globalFlashIntensity * 0.5).toString();
      } else if (globalFlashIntensity !== 0) {
        globalFlashIntensity = 0;
        if (batmobileRef.current) batmobileRef.current.style.opacity = "0";
        if (cloudsRef.current) cloudsRef.current.style.opacity = "0";
      }

      for (let i = lightningBolts.length - 1; i >= 0; i--) {
        const bolt = lightningBolts[i];
        bolt.alpha *= 0.85;

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`;
        ctx.lineWidth = bolt.thickness;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";

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
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (!mounted || theme !== "batman") return null;

  const batPath = "M 320 483 C 350 390, 428 292, 562 244 C 550 278, 576 312, 616 330 C 651 346, 688 349, 721 345 L 736 276 L 754 310 L 768 307 L 782 310 L 800 276 L 815 345 C 848 349, 885 346, 920 330 C 960 312, 986 278, 974 244 C 1108 292, 1186 390, 1216 483 C 1176 445, 1131 411, 1087 408 C 1051 407, 1032 432, 1027 469 C 986 448, 946 440, 908 445 C 844 452, 793 503, 768 592 C 743 503, 692 452, 628 445 C 590 440, 550 448, 509 469 C 504 432, 485 407, 449 408 C 405 411, 360 445, 320 483 Z";

  return (
    <div className="fixed inset-0 z-[-50] bg-[#000000] overflow-hidden pointer-events-none flex items-center justify-center select-none" aria-hidden="true">
      
      {/* 1. LIGHTNING CLOUDS OVERLAY (From Former Code) */}
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

      {/* 2. LIVE EMBERS & WHITE LIGHTNING CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] w-full h-full opacity-100" />

      {/* 3. PROPERLY SIZED MASTER SVG EMBLEM (xMidYMid meet prevents mobile cropping) */}
      <div className="relative z-10 w-full h-full max-w-[1300px] px-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid meet" className="w-full h-full object-contain">
          <defs>
            <radialGradient id="smokeMaskGrad" cx="50%" cy="46%" r="34%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <mask id="tightCenterMask"><rect width="1536" height="864" fill="url(#smokeMaskGrad)" /></mask>

            {/* Optimized Static Filters (numOctaves reduced to prevent mobile lag) */}
            <filter id="localizedSmoke" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.0065" numOctaves="2" seed="8" result="smokeNoise" />
              <feColorMatrix type="matrix" values="0.22 0 0 0 0.02 0.04 0 0 0 0.01 0.04 0 0 0 0.01 0 0 0 0.5 0" in="smokeNoise" />
            </filter>

            <filter id="deepRedBloom" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>

            <filter id="plasmaFlame" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.05 0.08" numOctaves="2" seed="14" result="flameNoise" />
              <feDisplacementMap in="SourceGraphic" in2="flameNoise" scale="10" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="1.8" result="softFlame" />
              <feMerge><feMergeNode in="softFlame" /><feMergeNode in="displaced" /></feMerge>
            </filter>

            <filter id="hudGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>

            <radialGradient id="batCoreFill" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#110707" /><stop offset="65%" stopColor="#060303" /><stop offset="100%" stopColor="#020101" />
            </radialGradient>

            <path id="batOutline" d={batPath} />
          </defs>

          {/* TACTICAL HUD GRID */}
          <g stroke="#3d0a0a" strokeWidth="1" opacity="0.5">
            <line x1="80" y1="310" x2="1456" y2="310" strokeOpacity="0.35" />
            <line x1="80" y1="472" x2="1456" y2="472" strokeOpacity="0.5" />
            <line x1="80" y1="634" x2="1456" y2="634" strokeOpacity="0.25" />
            <line x1="142" y1="120" x2="142" y2="740" strokeOpacity="0.45" />
            <line x1="285" y1="180" x2="285" y2="680" strokeOpacity="0.3" />
            <line x1="1251" y1="180" x2="1251" y2="680" strokeOpacity="0.3" />
            <line x1="1394" y1="120" x2="1394" y2="740" strokeOpacity="0.45" />
            <circle cx="142" cy="310" r="2" fill="#801515" /><circle cx="142" cy="472" r="2.5" fill="#a31919" />
            <circle cx="285" cy="472" r="2" fill="#801515" /><circle cx="1251" cy="472" r="2" fill="#801515" />
            <circle cx="1394" cy="310" r="2" fill="#801515" /><circle cx="1394" cy="472" r="2.5" fill="#a31919" />
          </g>

          {/* LOCALIZED SMOKE (Strictly Masked Behind Bat) */}
          <g mask="url(#tightCenterMask)">
            <ellipse cx="768" cy="410" rx="460" ry="210" fill="#2b0404" filter="url(#deepRedBloom)" opacity="0.6" />
            <rect x="220" y="140" width="1096" height="540" filter="url(#localizedSmoke)" opacity="0.8" />
          </g>

          {/* THE BATMAN PLASMA EMBLEM (Static GPU Cache = Zero Lag) */}
          <g>
            <use href="#batOutline" fill="none" stroke="#990005" strokeWidth="22" opacity="0.45" filter="url(#deepRedBloom)" />
            <use href="#batOutline" fill="url(#batCoreFill)" />
            <use href="#batOutline" fill="none" stroke="#cc1414" strokeWidth="1.2" opacity="0.7" transform="translate(0, 3) scale(0.992)" style={{ transformOrigin: "768px 415px" }} />
            <use href="#batOutline" fill="none" stroke="#ff2200" strokeWidth="6" opacity="0.9" filter="url(#plasmaFlame)" />
            <use href="#batOutline" fill="none" stroke="#ff1e1e" strokeWidth="3" strokeLinejoin="round" filter="url(#hudGlow)" />
            <use href="#batOutline" fill="none" stroke="#ffdede" strokeWidth="1.2" strokeLinejoin="round" opacity="0.95" />
          </g>

          {/* STATIC EMBERS AROUND WINGS */}
          <g filter="url(#hudGlow)">
            <ellipse cx="182" cy="542" rx="4.5" ry="2" transform="rotate(-28 182 542)" fill="#ff451a" opacity="0.9" />
            <ellipse cx="212" cy="605" rx="5.5" ry="2.2" transform="rotate(35 212 605)" fill="#ff5c26" opacity="0.85" />
            <circle cx="242" cy="488" r="2.2" fill="#ff7b47" opacity="0.8" /><circle cx="275" cy="638" r="2.8" fill="#ff3311" opacity="0.75" />
            <ellipse cx="322" cy="665" rx="4" ry="1.6" transform="rotate(20 322 665)" fill="#ff6633" opacity="0.85" />
            <circle cx="435" cy="492" r="2" fill="#ff884d" opacity="0.7" /><circle cx="496" cy="240" r="2.2" fill="#ff5522" opacity="0.8" />
            <ellipse cx="898" cy="645" rx="5" ry="1.8" transform="rotate(-55 898 645)" fill="#ff6b35" opacity="0.95" />
            <circle cx="942" cy="562" r="2.2" fill="#ff8552" opacity="0.85" /><circle cx="1062" cy="252" r="2" fill="#ff7744" opacity="0.75" />
            <circle cx="1152" cy="392" r="2.6" fill="#ff4411" opacity="0.8" /><circle cx="1142" cy="542" r="2.5" fill="#ff5522" opacity="0.85" />
            <ellipse cx="1220" cy="618" rx="4.2" ry="1.8" transform="rotate(-25 1220 618)" fill="#ff4818" opacity="0.9" />
            <circle cx="1256" cy="336" r="2.4" fill="#ff5522" opacity="0.8" /><circle cx="1312" cy="442" r="2" fill="#ff6633" opacity="0.75" />
          </g>
        </svg>
      </div>

      {/* 4. ORIGINAL BATMOBILE (From Former Code) */}
      <div
        ref={batmobileRef}
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 transition-opacity duration-75"
        style={{ opacity: 0 }}
      >
        <svg viewBox="0 0 500 150" className="w-[280px] md:w-[450px] lg:w-[600px] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          <path d="M 20 140 A 30 30 0 0 1 100 140 Z" fill="#020202" />
          <path d="M 400 140 A 30 30 0 0 1 480 140 Z" fill="#020202" />
          <path d="M 50 110 L 60 85 L 120 70 L 150 65 L 180 40 L 220 35 L 250 25 L 300 25 L 330 35 L 360 40 L 390 65 L 420 70 L 460 85 L 470 110 Z" fill="#050101" />
          <path d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
          <path d="M 120 70 L 150 65 L 180 40" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>

    </div>
  );
}
