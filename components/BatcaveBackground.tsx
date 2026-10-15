"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

type ParticleKind = "rain" | "ember";
interface Particle { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; length: number; blur: number; phase: number; kind: ParticleKind; }
interface BoltSeg { x1: number; y1: number; x2: number; y2: number; w: number; a: number; }
interface LightningBolt { segs: BoltSeg[]; originX: number; alpha: number; age: number; restrike: boolean; }

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);
  const isPlasmaPage = pathname === "/" || pathname === "/profile";

  useEffect(() => {
    if (theme !== "batman") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0, height = 0, dpr = 1, animationFrameId = 0, flashIntensity = 0, nextLightningTime = 0, lastTime = 0;
    let particles: Particle[] = [];
    let bolts: LightningBolt[] = [];

    const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
    const emberColors = ["#ff321d", "#ff542b", "#ff7045", "#d92718", "#ffb078"];

    const createParticle = (kind: ParticleKind, randomY = true): Particle => {
      const e = kind === "ember";
      return {
        x: rnd(0, width), y: randomY ? rnd(0, height) : height + rnd(0, 80),
        size: e ? rnd(0.5, 2) : rnd(0.45, 1.1), speedX: e ? rnd(-0.35, 0.35) : rnd(-1.2, -0.35),
        speedY: e ? rnd(-1.1, -0.2) : rnd(7, 15), opacity: e ? rnd(0.25, 0.9) : rnd(0.12, 0.4),
        color: e ? emberColors[Math.floor(Math.random() * 5)] : "#aeb8c4",
        length: e ? rnd(2, 9) : rnd(8, 24), blur: e ? rnd(1, 6) : 0, phase: rnd(0, Math.PI * 2), kind,
      };
    };

    // FRACTAL MIDPOINT-DISPLACEMENT LIGHTNING GENERATOR
    const buildFractalBranch = (x1: number, y1: number, x2: number, y2: number, disp: number, w: number, a: number, depth: number, out: BoltSeg[]) => {
      if (disp < 5) { out.push({ x1, y1, x2, y2, w, a }); return; }
      const mx = (x1 + x2) * 0.5 + rnd(-disp, disp);
      const my = (y1 + y2) * 0.5 + rnd(-disp * 0.2, disp * 0.2);
      buildFractalBranch(x1, y1, mx, my, disp * 0.5, w, a, depth, out);
      buildFractalBranch(mx, my, x2, y2, disp * 0.5, w * 0.94, a, depth, out);

      if (depth < 3 && disp > 12 && Math.random() < (depth === 0 ? 0.42 : 0.28)) {
        const angle = Math.atan2(y2 - my, x2 - mx) + rnd(-0.85, 0.85);
        const len = Math.hypot(x2 - mx, y2 - my) * rnd(0.55, 1.05);
        buildFractalBranch(mx, my, mx + Math.cos(angle) * len, my + Math.sin(angle) * len, disp * 0.45, w * 0.52, a * 0.65, depth + 1, out);
      }
    };

    const triggerLightning = () => {
      const originX = rnd(width * 0.15, width * 0.85);
      const targetX = originX + rnd(-width * 0.25, width * 0.25);
      const segs: BoltSeg[] = [];
      buildFractalBranch(originX, -10, targetX, height * rnd(0.75, 1.02), rnd(110, 160), rnd(2.0, 2.8), 1, 0, segs);
      bolts.push({ segs, originX, alpha: 1, age: 0, restrike: Math.random() < 0.65 });

      if (Math.random() < 0.35) {
        const secX = rnd(width * 0.1, width * 0.9);
        const secSegs: BoltSeg[] = [];
        buildFractalBranch(secX, -10, secX + rnd(-140, 140), height * rnd(0.45, 0.75), 85, 1.4, 0.75, 1, secSegs);
        bolts.push({ segs: secSegs, originX: secX, alpha: 0.8, age: 0, restrike: false });
      }
      flashIntensity = rnd(0.7, 1);
      nextLightningTime = performance.now() + rnd(2000, 5400);
    };

    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const isMobile = width < 768;
      particles = [
        ...Array.from({ length: isMobile ? 65 : 125 }, () => createParticle("rain")),
        ...Array.from({ length: isMobile ? 32 : 65 }, () => createParticle("ember")),
      ];
    };

    const animate = (now: number) => {
      const delta = lastTime ? Math.min((now - lastTime) / 16.667, 2) : 1;
      lastTime = now;
      ctx.clearRect(0, 0, width, height);

      // 1. RAIN & 2. EMBERS
      ctx.lineCap = "round";
      for (const p of particles) {
        p.phase += 0.025 * delta;
        if (p.kind === "rain") {
          p.x += p.speedX * delta; p.y += p.speedY * delta;
          if (p.y > height + 25 || p.x < -30) Object.assign(p, createParticle("rain", false));
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.speedX * 1.2, p.y - p.length);
          ctx.strokeStyle = `rgba(165, 177, 193, ${p.opacity})`; ctx.lineWidth = p.size; ctx.stroke();
        } else {
          p.x += (p.speedX + Math.sin(p.phase) * 0.25) * delta; p.y += p.speedY * delta;
          if (p.y < -15 || p.x < -20 || p.x > width + 20) { Object.assign(p, createParticle("ember", false)); p.x = rnd(0, width); }
          ctx.save();
          ctx.globalAlpha = p.opacity * (0.65 + Math.sin(p.phase * 3) * 0.3);
          ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = p.blur;
          ctx.beginPath(); ctx.ellipse(p.x, p.y, p.size * 0.65, p.size * 1.6, -0.4, 0, Math.PI * 2); ctx.fill();
          if (p.size > 1.4) {
            ctx.globalAlpha *= 0.65; ctx.lineWidth = 0.8; ctx.strokeStyle = p.color;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.speedX * p.length, p.y - p.speedY * 2); ctx.stroke();
          }
          ctx.restore();
        }
      }

      // 3. FRACTAL LIGHTNING ENGINE
      if (now >= nextLightningTime) triggerLightning();
      ctx.save();
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.age += delta;

        // Secondary restrike strobe effect
        if (b.restrike && b.age > 3.2 && b.age < 4.8) {
          b.alpha = 1; b.restrike = false; flashIntensity = Math.max(flashIntensity, 0.9);
        }

        // Sky origin crown glow
        const skyGrad = ctx.createRadialGradient(b.originX, 0, 5, b.originX, 0, 320);
        skyGrad.addColorStop(0, `rgba(165, 195, 255, ${b.alpha * 0.35})`);
        skyGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = skyGrad; ctx.fillRect(0, 0, width, 320);

        // Render outer plasma corona & white-hot core per segment
        for (const s of b.segs) {
          const segAlpha = b.alpha * s.a;
          if (segAlpha <= 0.02) continue;
          ctx.beginPath(); ctx.moveTo(s.x1, s.y1); ctx.lineTo(s.x2, s.y2);
          ctx.strokeStyle = `rgba(110, 155, 255, ${segAlpha * 0.45})`;
          ctx.lineWidth = s.w * 4.5; ctx.shadowColor = "#6b9dff"; ctx.shadowBlur = 18; ctx.stroke();

          ctx.beginPath(); ctx.moveTo(s.x1, s.y1); ctx.lineTo(s.x2, s.y2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${segAlpha})`;
          ctx.lineWidth = s.w; ctx.shadowColor = "#ffffff"; ctx.shadowBlur = 6; ctx.stroke();
        }

        b.alpha -= 0.11 * delta;
        if (b.alpha <= 0.03) bolts.splice(i, 1);
      }
      ctx.restore();

      // 4. BATMOBILE & SCREEN FLASH ILLUMINATION
      flashIntensity *= Math.pow(0.85, delta);
      if (flashIntensity < 0.015) flashIntensity = 0;
      if (batmobileRef.current) {
        batmobileRef.current.style.opacity = (0.12 + flashIntensity * 0.88).toString();
        batmobileRef.current.style.filter = `brightness(${0.65 + flashIntensity * 2.4}) drop-shadow(0 0 ${5 + flashIntensity * 28}px rgba(190, 205, 255, ${0.12 + flashIntensity * 0.6}))`;
      }
      if (flashRef.current) flashRef.current.style.opacity = (flashIntensity * 0.16).toString();

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    nextLightningTime = performance.now() + rnd(700, 2000);
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(animate);

    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animationFrameId); bolts = []; particles = []; };
  }, [theme]);

  if (!mounted || theme !== "batman") return null;

  const batPath = "M 320 483 C 347 400, 420 298, 562 244 C 551 276, 574 307, 615 328 C 650 345, 687 350, 720 345 L 736 276 L 754 311 L 768 306 L 782 311 L 800 276 L 816 345 C 849 350, 886 345, 921 328 C 962 307, 985 276, 974 244 C 1116 298, 1189 400, 1216 483 C 1180 447, 1135 411, 1091 408 C 1059 406, 1035 429, 1027 469 C 985 448, 945 440, 908 445 C 843 452, 792 502, 768 590 C 744 502, 693 452, 628 445 C 591 440, 551 448, 509 469 C 501 429, 477 406, 445 408 C 401 411, 356 447, 320 483 Z";

  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none select-none bg-[#020202]" aria-hidden="true">
      {/* 1. SUBTLE TACTICAL GRID */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          opacity: 0.08,
          backgroundImage: "linear-gradient(rgba(255, 30, 30, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 30, 30, 0.3) 1px, transparent 1px)",
          backgroundSize: "120px 120px", backgroundPosition: "center center",
          maskImage: "radial-gradient(ellipse at center, black, transparent 85%)", WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 85%)",
        }}
      />

      {/* 2. DYNAMIC RAIN, EMBERS & LIGHTNING */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] h-full w-full" />
      <div ref={flashRef} className="absolute inset-0 z-[3] bg-[#c8d7ff]" style={{ opacity: 0 }} />

      {/* 3. BATMAN EMBLEM */}
      <div className="absolute inset-0 z-[4] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid meet" className="h-full w-full max-w-[1600px]">
          <defs>
            <filter id="batOuterGlow" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feFlood floodColor="#e20b16" floodOpacity="0.7" result="red" />
              <feComposite in="red" in2="blur" operator="in" result="glow" />
              <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="batHotGlow" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="3.5" result="soft" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="wide" />
              <feMerge><feMergeNode in="wide" /><feMergeNode in="soft" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="batPlasma" x="-10%" y="-15%" width="120%" height="130%">
              <feTurbulence type="fractalNoise" baseFrequency="0.035 0.09" numOctaves="2" seed="12" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.7" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="batInterior" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#070606" /><stop offset="60%" stopColor="#030303" /><stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <g className="animate-[pulse_5s_ease-in-out_infinite]">
            <path d={batPath} fill="none" stroke="#a00008" strokeWidth="12" opacity="0.35" filter="url(#batOuterGlow)" />
            <path d={batPath} fill="url(#batInterior)" />
            <path d={batPath} fill="none" stroke="#ff1717" strokeWidth="3.2" strokeLinejoin="round" filter="url(#batHotGlow)" opacity="0.95" />
            <path d={batPath} fill="none" stroke="#ff5145" strokeWidth="1.4" strokeLinejoin="round" filter="url(#batPlasma)" opacity="0.95" />
            <path d={batPath} fill="none" stroke="#ffd0c7" strokeWidth="0.65" strokeLinejoin="round" opacity="0.85" />
            {isPlasmaPage && <path d={batPath} fill="none" stroke="#ff3027" strokeWidth="0.7" strokeDasharray="95 3 42 2 70 5" opacity="0.75" />}
          </g>
        </svg>
      </div>

      {/* 4. BATMOBILE */}
      <div
        ref={batmobileRef}
        className="absolute bottom-[-12px] left-1/2 z-[5] -translate-x-1/2 transition-[filter] duration-100"
        style={{ opacity: 0.12, filter: "brightness(0.65) drop-shadow(0 0 5px rgba(190,205,255,0.12))" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" className="w-[280px] md:w-[450px] lg:w-[600px]">
          <defs>
            <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#292c33" /><stop offset="35%" stopColor="#101115" /><stop offset="100%" stopColor="#020203" /></linearGradient>
            <linearGradient id="carGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38404b" /><stop offset="100%" stopColor="#07080b" /></linearGradient>
            <filter id="carGlow"><feGaussianBlur stdDeviation="3" /></filter>
          </defs>
          <path d="M 20 140 A 30 30 0 0 1 100 140 Z" fill="#010102" stroke="#33353b" strokeWidth="1.5" />
          <path d="M 400 140 A 30 30 0 0 1 480 140 Z" fill="#010102" stroke="#33353b" strokeWidth="1.5" />
          <path d="M 20 116 L 37 102 L 60 85 L 120 70 L 150 65 L 180 40 L 220 35 L 250 25 L 300 25 L 330 35 L 360 40 L 390 65 L 420 70 L 460 85 L 483 111 L 470 120 L 450 126 L 50 126 L 30 122 Z" fill="url(#carBody)" stroke="#353740" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M 175 62 L 195 43 L 220 39 L 250 31 L 297 31 L 323 43 L 342 62 Z" fill="url(#carGlass)" stroke="#424650" strokeWidth="1.2" />
          <path d="M 120 70 L 150 65 L 180 40" fill="none" stroke="#656974" strokeWidth="1.5" opacity="0.65" />
          <path d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35" fill="none" stroke="#a4a9b5" strokeWidth="1.5" opacity="0.6" />
          <path d="M 350 63 L 390 65 L 420 70" fill="none" stroke="#5e626b" strokeWidth="1.5" opacity="0.65" />
          <path d="M 210 84 L 231 72 L 244 82 L 250 74 L 256 82 L 269 72 L 290 84 L 274 89 L 250 85 L 226 89 Z" fill="#030304" stroke="#454750" strokeWidth="1" />
          <path d="M 43 103 L 68 94 L 84 98 L 61 108 Z" fill="#b7c9f4" opacity="0.8" filter="url(#carGlow)" />
          <path d="M 416 98 L 432 94 L 457 103 L 439 108 Z" fill="#b7c9f4" opacity="0.8" filter="url(#carGlow)" />
          <path d="M 43 103 L 68 96 L 80 98" fill="none" stroke="#d9e5ff" strokeWidth="1.8" opacity="0.8" />
          <path d="M 420 98 L 432 96 L 457 103" fill="none" stroke="#d9e5ff" strokeWidth="1.8" opacity="0.8" />
          <path d="M 50 126 L 450 126" fill="none" stroke="#737783" strokeWidth="1" opacity="0.5" />
          <path d="M 222 126 L 238 137 L 262 137 L 278 126" fill="#050506" stroke="#3a3d46" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. DARK VIGNETTE */}
      <div className="absolute inset-0 z-[6]" style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 28%, rgba(0,0,0,0.3) 72%, #000 110%)" }} />
    </div>
  );
}
