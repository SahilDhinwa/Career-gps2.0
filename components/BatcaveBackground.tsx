"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

type ParticleKind = "rain" | "ember";
interface Particle { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string; length: number; blur: number; phase: number; kind: ParticleKind; }
interface BoltSeg { x1: number; y1: number; x2: number; y2: number; w: number; a: number; }
interface LightningBolt { segs: BoltSeg[]; originX: number; alpha: number; age: number; restrike: boolean; }

export default function BatcaveBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const batmobileRef = useRef<HTMLDivElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

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

        if (b.restrike && b.age > 3.2 && b.age < 4.8) {
          b.alpha = 1; b.restrike = false; flashIntensity = Math.max(flashIntensity, 0.9);
        }

        const skyGrad = ctx.createRadialGradient(b.originX, 0, 5, b.originX, 0, 320);
        skyGrad.addColorStop(0, `rgba(165, 195, 255, ${b.alpha * 0.35})`);
        skyGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = skyGrad; ctx.fillRect(0, 0, width, 320);

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

  const batPath = "M 320 483 C 350 390, 428 292, 562 244 C 550 278, 576 312, 616 330 C 651 346, 688 349, 721 345 L 736 276 L 754 310 L 768 307 L 782 310 L 800 276 L 815 345 C 848 349, 885 346, 920 330 C 960 312, 986 278, 974 244 C 1108 292, 1186 390, 1216 483 C 1176 445, 1131 411, 1087 408 C 1051 407, 1032 432, 1027 469 C 986 448, 946 440, 908 445 C 844 452, 793 503, 768 592 C 743 503, 692 452, 628 445 C 590 440, 550 448, 509 469 C 504 432, 485 407, 449 408 C 405 411, 360 445, 320 483 Z";

  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none select-none bg-[#000000]" aria-hidden="true">
      {/* 1. MASTER SVG BACKGROUND (Grid, Masked Smoke, Plasma Bat & Static Embers — No Loading Bar) */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 864" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <defs>
            <radialGradient id="smokeMaskGrad" cx="50%" cy="46%" r="36%" fx="50%" fy="46%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="85%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <mask id="tightCenterMask"><rect width="1536" height="864" fill="url(#smokeMaskGrad)" /></mask>

            <filter id="localizedSmoke" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.0065" numOctaves="4" seed="8" result="smokeNoise" />
              <feColorMatrix type="matrix" values="0.22 0 0 0 0.02 0.04 0 0 0 0.01 0.04 0 0 0 0.01 0 0 0 0.55 0" in="smokeNoise" />
            </filter>

            <filter id="deepRedBloom" x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="24" result="blur24" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10" />
              <feMerge><feMergeNode in="blur24" /><feMergeNode in="blur10" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>

            <filter id="plasmaFlame" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.045 0.08" numOctaves="3" seed="14" result="flameNoise" />
              <feDisplacementMap in="SourceGraphic" in2="flameNoise" scale="11" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="2.2" result="softFlame" />
              <feMerge><feMergeNode in="softFlame" /><feMergeNode in="displaced" /></feMerge>
            </filter>

            <filter id="electricWisp" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="turbulence" baseFrequency="0.07" numOctaves="2" seed="3" result="wispNoise" />
              <feDisplacementMap in="SourceGraphic" in2="wispNoise" scale="5.5" xChannelSelector="R" yChannelSelector="G" />
            </filter>

            <filter id="hudGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="glow" />
              <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>

            <radialGradient id="batCoreFill" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#110707" /><stop offset="65%" stopColor="#060303" /><stop offset="100%" stopColor="#020101" />
            </radialGradient>

            <path id="batOutline" d={batPath} />
          </defs>

          {/* TACTICAL HUD GRID */}
          <g stroke="#3d0a0a" strokeWidth="1" opacity="0.55">
            <line x1="80" y1="310" x2="1456" y2="310" strokeOpacity="0.35" />
            <line x1="80" y1="472" x2="1456" y2="472" strokeOpacity="0.5" />
            <line x1="80" y1="634" x2="1456" y2="634" strokeOpacity="0.25" />
            <line x1="142" y1="120" x2="142" y2="740" strokeOpacity="0.45" />
            <line x1="285" y1="180" x2="285" y2="680" strokeOpacity="0.3" />
            <line x1="1251" y1="180" x2="1251" y2="680" strokeOpacity="0.3" />
            <line x1="1394" y1="120" x2="1394" y2="740" strokeOpacity="0.45" />
            <circle cx="142" cy="310" r="2" fill="#801515" />
            <circle cx="142" cy="472" r="2.5" fill="#a31919" />
            <circle cx="285" cy="472" r="2" fill="#801515" />
            <circle cx="1251" cy="472" r="2" fill="#801515" />
            <circle cx="1394" cy="310" r="2" fill="#801515" />
            <circle cx="1394" cy="472" r="2.5" fill="#a31919" />
          </g>

          {/* LOCALIZED SMOKE & CORE GLOW (Strictly Masked Behind Bat) */}
          <g mask="url(#tightCenterMask)">
            <ellipse cx="768" cy="410" rx="490" ry="230" fill="#2b0404" filter="url(#deepRedBloom)" opacity="0.65" />
            <rect x="200" y="120" width="1136" height="580" filter="url(#localizedSmoke)" opacity="0.85" />
          </g>

          {/* THE BATMAN PLASMA EMBLEM */}
          <g className="animate-[pulse_5s_ease-in-out_infinite]">
            <use href="#batOutline" fill="none" stroke="#990005" strokeWidth="26" opacity="0.45" filter="url(#deepRedBloom)" />
            <use href="#batOutline" fill="none" stroke="#ff0a12" strokeWidth="12" opacity="0.65" filter="url(#deepRedBloom)" />
            <use href="#batOutline" fill="url(#batCoreFill)" />
            <use href="#batOutline" fill="none" stroke="#cc1414" strokeWidth="1.2" opacity="0.7" transform="translate(0, 3) scale(0.992)" style={{ transformOrigin: "768px 415px" }} />
            <use href="#batOutline" fill="none" stroke="#ff2200" strokeWidth="6.5" opacity="0.9" filter="url(#plasmaFlame)" />
            <use href="#batOutline" fill="none" stroke="#ff6a3d" strokeWidth="2.6" opacity="0.95" filter="url(#electricWisp)" />
            <use href="#batOutline" fill="none" stroke="#ff1e1e" strokeWidth="3.2" strokeLinejoin="round" filter="url(#hudGlow)" />
            <use href="#batOutline" fill="none" stroke="#ffdede" strokeWidth="1.35" strokeLinejoin="round" opacity="0.95" />
          </g>

          {/* FLOATING FIRE EMBERS & SPARKS */}
          <g filter="url(#hudGlow)">
            <ellipse cx="182" cy="542" rx="4.5" ry="2" transform="rotate(-28 182 542)" fill="#ff451a" opacity="0.9" />
            <ellipse cx="212" cy="605" rx="5.5" ry="2.2" transform="rotate(35 212 605)" fill="#ff5c26" opacity="0.85" />
            <circle cx="242" cy="488" r="2.2" fill="#ff7b47" opacity="0.8" />
            <circle cx="275" cy="638" r="2.8" fill="#ff3311" opacity="0.75" />
            <ellipse cx="322" cy="665" rx="4" ry="1.6" transform="rotate(20 322 665)" fill="#ff6633" opacity="0.85" />
            <circle cx="435" cy="492" r="2" fill="#ff884d" opacity="0.7" />
            <circle cx="445" cy="592" r="3.5" fill="#ff2a00" opacity="0.6" />
            <circle cx="496" cy="240" r="2.2" fill="#ff5522" opacity="0.8" />
            <circle cx="545" cy="540" r="1.8" fill="#ff9966" opacity="0.8" />
            <ellipse cx="645" cy="532" rx="3" ry="1.4" transform="rotate(-40 645 532)" fill="#ff5522" opacity="0.75" />
            <ellipse cx="898" cy="645" rx="5" ry="1.8" transform="rotate(-55 898 645)" fill="#ff6b35" opacity="0.95" />
            <circle cx="942" cy="562" r="2.2" fill="#ff8552" opacity="0.85" />
            <circle cx="955" cy="612" r="2.6" fill="#ff3b14" opacity="0.75" />
            <circle cx="1062" cy="252" r="2" fill="#ff7744" opacity="0.75" />
            <circle cx="1152" cy="392" r="2.6" fill="#ff4411" opacity="0.8" />
            <circle cx="1175" cy="388" r="1.8" fill="#ffaa77" opacity="0.9" />
            <circle cx="1142" cy="542" r="2.5" fill="#ff5522" opacity="0.85" />
            <ellipse cx="1220" cy="618" rx="4.2" ry="1.8" transform="rotate(-25 1220 618)" fill="#ff4818" opacity="0.9" />
            <circle cx="1256" cy="336" r="2.4" fill="#ff5522" opacity="0.8" />
            <circle cx="1282" cy="222" r="1.8" fill="#ff7744" opacity="0.7" />
            <circle cx="1312" cy="442" r="2" fill="#ff6633" opacity="0.75" />
            <circle cx="1352" cy="396" r="2.2" fill="#ff4411" opacity="0.8" />
            <ellipse cx="1368" cy="648" rx="4.5" ry="1.6" transform="rotate(30 1368 648)" fill="#ff5522" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* 2. DYNAMIC RAIN, EMBERS & FRACTAL LIGHTNING CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] h-full w-full" />
      <div ref={flashRef} className="absolute inset-0 z-[3] bg-[#c8d7ff]" style={{ opacity: 0 }} />

      {/* 3. BATMOBILE */}
      <div
        ref={batmobileRef}
        className="absolute bottom-[-12px] left-1/2 z-[4] -translate-x-1/2 transition-[filter] duration-100"
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

      {/* 4. DARK VIGNETTE */}
      <div className="absolute inset-0 z-[5]" style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 28%, rgba(0,0,0,0.3) 72%, #000 110%)" }} />
    </div>
  );
}
