"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Magnet, Sparkles, ArrowUpRight, 
  Flame, Compass, ShieldCheck, Zap, Layers 
} from "lucide-react";

/**
 * 🧲 REUSABLE MAGNETIC PHYSICS WRAPPER
 * Pulls any child element toward the cursor/touch point, 
 * with an optional inner parallax layer for deep 3D tactile feedback.
 */
function Magnetic({ 
  children, 
  strength = 0.35, 
  textStrength = 0.2 
}: { 
  children: React.ReactNode; 
  strength?: number;
  textStrength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    setPos({ x: deltaX, y: deltaY });
    setIsHovered(true);
  };

  const reset = () => {
    setPos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseLeave={reset}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        if (touch) handleMove(touch.clientX, touch.clientY);
      }}
      onTouchEnd={reset}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: isHovered 
          ? "transform 0.1s ease-out" 
          : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="inline-block"
    >
      <div
        style={{
          transform: `translate3d(${pos.x * textStrength}px, ${pos.y * textStrength}px, 0)`,
          transition: isHovered 
            ? "transform 0.1s ease-out" 
            : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function MagneticButtonsPage() {
  const [pullPower, setPullPower] = useState<number>(0.45);
  const [clickCount, setClickCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#08080a] text-white font-sans pb-32 overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Subtle Grid & Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 p-6 md:p-8 max-w-6xl mx-auto flex items-center justify-between">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
          <Magnet className="w-3.5 h-3.5" /> Physics UI Lab
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mt-8 mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Magnetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-[#D4AF37]">Traction</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
          Hover your mouse (or drag your finger on mobile) across the buttons below. They calculate cursor distance in real time, pulling toward you before snapping back with elastic physics.
        </p>

        {/* Live Gravity Slider Control */}
        <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
          <span className="text-xs font-bold uppercase tracking-wider text-white/70">
            Magnetic Pull Force: <span className="text-[#D4AF37]">{Math.round(pullPower * 100)}%</span>
          </span>
          <input 
            type="range" 
            min="0.15" 
            max="0.95" 
            step="0.05" 
            value={pullPower}
            onChange={(e) => setPullPower(parseFloat(e.target.value))}
            className="w-48 accent-[#D4AF37] cursor-pointer"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-16">

        {/* =======================================================
            1. HERO CIRCULAR ORBS (AGENCY PORTFOLIO STYLE)
            ======================================================= */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-16 text-center backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">01 / Elastic Orbs</p>
          <h2 className="text-2xl font-bold mb-12 text-white/90">High-Gravity Circular Callouts</h2>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 py-6">
            <Magnetic strength={pullPower} textStrength={0.35}>
              <button 
                onClick={() => setClickCount(c => c + 1)}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-200 text-black font-black text-lg uppercase tracking-wider shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] active:scale-90 transition-shadow flex flex-col items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-6 h-6" />
                <span>Explore</span>
                <span className="text-[10px] font-bold opacity-70">Veblen Good</span>
              </button>
            </Magnetic>

            <Magnetic strength={pullPower * 1.2} textStrength={0.4}>
              <button 
                onClick={() => setClickCount(c => c + 1)}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg shadow-[0_0_50px_rgba(79,70,229,0.3)] hover:shadow-[0_0_80px_rgba(79,70,229,0.6)] active:scale-90 transition-colors flex flex-col items-center justify-center gap-1 cursor-pointer border border-indigo-400/30"
              >
                <div className="flex items-center gap-1">
                  <span>Launch</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <span className="text-xs font-normal text-indigo-200">Clicked: {clickCount}</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* =======================================================
            2. LIQUID FILL PILL BUTTONS (PRIMARY CTAs)
            ======================================================= */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-16 text-center backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">02 / Tactile Pills</p>
          <h2 className="text-2xl font-bold mb-12 text-white/90">Production CTA Buttons for BAMS Hub</h2>

          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            <Magnetic strength={pullPower * 0.8} textStrength={0.2}>
              <button className="group relative overflow-hidden rounded-full bg-white text-black px-8 py-4 font-bold text-base shadow-xl active:scale-95 transition-transform flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>Access Study Vault</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>

            <Magnetic strength={pullPower * 0.8} textStrength={0.2}>
              <button className="group relative overflow-hidden rounded-full bg-[#11221c] border border-emerald-500/40 text-emerald-300 hover:text-white hover:border-emerald-400 px-8 py-4 font-bold text-base shadow-[0_0_25px_rgba(16,185,129,0.15)] active:scale-95 transition-all flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Verify BAMS Credentials</span>
              </button>
            </Magnetic>

            <Magnetic strength={pullPower * 0.8} textStrength={0.2}>
              <button className="group relative overflow-hidden rounded-full bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 font-bold text-base transition-colors active:scale-95 flex items-center gap-3">
                <Flame className="w-5 h-5" />
                <span>Unlock Gold Tier</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* =======================================================
            3. MAGNETIC FLOATING DOCK (MACOS / IPHONE STYLE)
            ======================================================= */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-16 text-center backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">03 / Navigation Dock</p>
          <h2 className="text-2xl font-bold mb-10 text-white/90">Magnetic Icon Bar</h2>

          <div className="inline-flex items-center gap-4 sm:gap-6 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl shadow-2xl">
            {[
              { icon: Compass, label: "Explore", color: "text-blue-400" },
              { icon: Layers, label: "Library", color: "text-purple-400" },
              { icon: Sparkles, label: "Gold", color: "text-[#D4AF37]" },
              { icon: Flame, label: "Trending", color: "text-orange-400" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Magnetic key={idx} strength={pullPower * 0.9} textStrength={0.25}>
                  <button className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 flex flex-col items-center justify-center gap-1 transition-colors active:scale-90">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-[10px] font-medium text-white/60 group-hover:text-white">
                      {item.label}
                    </span>
                  </button>
                </Magnetic>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
