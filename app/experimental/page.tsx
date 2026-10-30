"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, Beaker, LayoutGrid, Zap, Terminal, Box, Cloud, Activity,
  Square, Layers, Disc3, Gamepad2, BookOpen, Droplet, Target, Leaf,
  Minus, Flame, Briefcase, MousePointer2, Wand2, ArrowRight, Sparkles
} from "lucide-react";

interface UIStyleItem {
  id: string;
  number: string;
  name: string;
  desc: string;
  icon: React.ElementType;
  path: string;
  status: "Active" | "Preview";
  cardClass: string;
  iconWrapClass: string;
  badgeClass: string;
  titleClass: string;
  descClass: string;
  footerClass: string;
  decor?: React.ReactNode;
}

export default function ExperimentalDirectoryPage() {
  const uiStyles: UIStyleItem[] = [
    // 1. MINIMALISM
    {
      id: "minimalism",
      number: "01",
      name: "Minimalism",
      desc: "Radical simplicity, generous whitespace, strict grid geometry, and pure typographic hierarchy.",
      icon: Minus,
      path: "/experimental/minimalism",
      status: "Active",
      cardClass: "bg-white text-neutral-900 border border-neutral-200 rounded-none p-8 shadow-none hover:border-neutral-900 transition-colors",
      iconWrapClass: "w-10 h-10 border border-neutral-900 text-neutral-900 flex items-center justify-center rounded-none",
      badgeClass: "text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 border-b border-neutral-300 pb-0.5 rounded-none",
      titleClass: "font-light text-2xl tracking-tight text-neutral-950",
      descClass: "text-neutral-500 text-xs leading-relaxed font-normal",
      footerClass: "text-xs font-mono uppercase tracking-[0.2em] text-neutral-900 pt-4 border-t border-neutral-100",
    },

    // 2. MAXIMALISM
    {
      id: "maximalism",
      number: "02",
      name: "Maximalism",
      desc: "Explosive color clashes, layered stickers, bold patterns, and unapologetic visual sensory overload.",
      icon: Flame,
      path: "/experimental/maximalism",
      status: "Active",
      cardClass: "bg-gradient-to-br from-fuchsia-600 via-rose-500 to-amber-400 text-white border-4 border-yellow-300 rounded-3xl p-6 shadow-[0_15px_35px_rgba(225,29,72,0.4)] hover:rotate-1 hover:scale-[1.02] transition-all overflow-hidden",
      iconWrapClass: "w-12 h-12 bg-yellow-300 text-fuchsia-900 rounded-full border-2 border-black flex items-center justify-center shadow-md -rotate-12",
      badgeClass: "bg-black text-yellow-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border-2 border-yellow-300 rotate-6",
      titleClass: "font-black text-2xl uppercase tracking-wider text-yellow-200 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]",
      descClass: "text-white font-bold text-sm bg-black/25 p-3 rounded-xl backdrop-blur-xs border border-white/20",
      footerClass: "bg-yellow-300 text-black font-black text-xs uppercase px-4 py-2 rounded-full border-2 border-black inline-flex",
      decor: (
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-cyan-400/40 rounded-full blur-xl pointer-events-none" />
      ),
    },

    // 3. GLASSMORPHISM
    {
      id: "glassmorphism",
      number: "03",
      name: "Glassmorphism",
      desc: "Frosted translucent layers, vivid ambient background orbs, and specular white edge highlights.",
      icon: Droplet,
      path: "/experimental/glassmorphism",
      status: "Active",
      cardClass: "bg-slate-950 text-white rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden hover:border-white/40 transition-all",
      iconWrapClass: "w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-inner",
      badgeClass: "bg-white/10 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
      titleClass: "font-bold text-xl text-white drop-shadow-xs",
      descClass: "text-white/80 text-sm bg-white/10 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl",
      footerClass: "text-xs font-semibold text-cyan-200",
      decor: (
        <>
          <div className="absolute -top-10 -left-10 w-36 h-36 bg-fuchsia-500/50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-cyan-400/50 rounded-full blur-2xl pointer-events-none" />
        </>
      ),
    },

    // 4. NEUMORPHISM
    {
      id: "neumorphism",
      number: "04",
      name: "Neumorphism",
      desc: "Soft extruded matte plastic surfaces sculpted with dual opposing light and dark drop shadows.",
      icon: Target,
      path: "/experimental/neumorphism",
      status: "Active",
      cardClass: "bg-[#e0e5ec] text-slate-700 rounded-[28px] p-7 border border-white/40 shadow-[10px_10px_20px_#b8bec7,-10px_-10px_20px_#ffffff] hover:shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] transition-all",
      iconWrapClass: "w-12 h-12 rounded-2xl bg-[#e0e5ec] text-indigo-500 flex items-center justify-center shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]",
      badgeClass: "bg-[#e0e5ec] text-slate-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]",
      titleClass: "font-extrabold text-xl text-slate-700",
      descClass: "text-slate-500 text-sm",
      footerClass: "text-xs font-bold text-indigo-500 bg-[#e0e5ec] px-4 py-2 rounded-xl shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]",
    },

    // 5. CLAYMORPHISM (ACTIVE PAGE)
    {
      id: "claymorphism",
      number: "05",
      name: "Claymorphism",
      desc: "Fluffy, 3D inflated pastel clay objects using deep inner rim shadows and soft playful curves.",
      icon: Cloud,
      path: "/experimental/claymorphism",
      status: "Active",
      cardClass: "bg-[#a5f3fc] text-cyan-950 rounded-[36px] p-7 border-none shadow-[14px_14px_28px_rgba(6,182,212,0.28),inset_-10px_-10px_20px_rgba(8,145,178,0.25),inset_10px_10px_20px_rgba(255,255,255,0.9)] hover:-translate-y-1.5 transition-all",
      iconWrapClass: "w-12 h-12 rounded-2xl bg-[#f472b6] text-white flex items-center justify-center shadow-[6px_6px_12px_rgba(244,114,182,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.6)]",
      badgeClass: "bg-white/80 text-cyan-900 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.1),inset_2px_2px_5px_rgba(255,255,255,1)]",
      titleClass: "font-black text-2xl text-cyan-950",
      descClass: "text-cyan-900/80 text-sm font-medium",
      footerClass: "bg-[#818cf8] text-white font-bold text-xs px-4 py-2.5 rounded-2xl shadow-[6px_6px_12px_rgba(129,140,248,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.5)]",
    },

    // 6. BRUTALISM (RAW HTML)
    {
      id: "brutalism",
      number: "06",
      name: "Raw Brutalism",
      desc: "Unapologetic 1995 CERN HTML. Zero cosmetic polish, raw table borders, Times New Roman, and default blue links.",
      icon: Box,
      path: "/experimental/brutalism",
      status: "Active",
      cardClass: "bg-white text-black font-serif rounded-none p-5 border-2 border-black shadow-[inset_2px_2px_0px_#808080,inset_-2px_-2px_0px_#dfdfdf]",
      iconWrapClass: "w-10 h-10 bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-black border-b-black flex items-center justify-center rounded-none",
      badgeClass: "bg-[#000080] text-white font-mono text-[10px] px-2 py-0.5 rounded-none",
      titleClass: "font-serif font-bold text-2xl text-black underline",
      descClass: "font-serif text-black text-sm leading-snug",
      footerClass: "font-serif text-sm text-[#0000EE] underline font-bold",
    },

    // 7. NEO-BRUTALISM
    {
      id: "neo-brutalism",
      number: "07",
      name: "Neo-Brutalism",
      desc: "Thick 4px pitch-black outlines, zero-blur hard offset shadows, and punchy Gumroad-style pop colors.",
      icon: Zap,
      path: "/experimental/neo-brutalism",
      status: "Active",
      cardClass: "bg-[#FF90E8] text-black rounded-none p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000] transition-all",
      iconWrapClass: "w-12 h-12 bg-[#FFC900] text-black border-3 border-black shadow-[4px_4px_0px_0px_#000000] flex items-center justify-center",
      badgeClass: "bg-white text-black border-2 border-black font-black text-[10px] uppercase px-2.5 py-1 shadow-[3px_3px_0px_0px_#000000]",
      titleClass: "font-black text-2xl uppercase tracking-tight text-black",
      descClass: "text-black font-bold text-sm border-l-4 border-black pl-3",
      footerClass: "bg-[#FFC900] text-black border-2 border-black font-black text-xs uppercase px-4 py-2 shadow-[4px_4px_0px_0px_#000000]",
    },

    // 8. SKEUOMORPHISM
    {
      id: "skeuomorphism",
      number: "08",
      name: "Skeuomorphism",
      desc: "Rich real-world textures—stitched calfskin leather, brushed aluminum bevels, and tactile physical switches.",
      icon: Briefcase,
      path: "/experimental/skeuomorphism",
      status: "Active",
      cardClass: "bg-gradient-to-b from-[#3a2618] via-[#2b1c11] to-[#1e130b] text-[#f3e5ab] rounded-2xl p-6 border-2 border-[#8b5a2b] shadow-[0_12px_24px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.2)]",
      iconWrapClass: "w-12 h-12 rounded-xl bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-600 text-neutral-900 border border-white shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_2px_white] flex items-center justify-center",
      badgeClass: "bg-gradient-to-b from-[#d4af37] to-[#996515] text-black font-bold text-[10px] uppercase px-3 py-1 rounded-md border border-[#fff3b0] shadow-md",
      titleClass: "font-serif font-bold text-xl text-[#f3e5ab] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",
      descClass: "text-[#d7c49e] text-xs border border-dashed border-[#c59b27]/50 p-3 rounded-lg bg-black/20",
      footerClass: "bg-gradient-to-b from-[#4a3222] to-[#26180f] text-[#f3e5ab] text-xs font-bold px-4 py-2 rounded-lg border border-[#7c5335] shadow-[0_3px_6px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]",
    },

    // 9. FLAT DESIGN
    {
      id: "flat-design",
      number: "09",
      name: "Flat Design",
      desc: "Pure 2D digital clarity. Zero shadows, zero gradients, zero 3D trickery—just bold solid color blocks.",
      icon: Square,
      path: "/experimental/flat-design",
      status: "Active",
      cardClass: "bg-[#2563eb] text-white rounded-none p-7 border-none shadow-none hover:bg-[#1d4ed8] transition-colors",
      iconWrapClass: "w-12 h-12 bg-[#1e40af] text-white flex items-center justify-center rounded-none",
      badgeClass: "bg-[#10b981] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none",
      titleClass: "font-bold text-2xl text-white tracking-wide",
      descClass: "text-blue-100 text-sm",
      footerClass: "bg-white text-[#2563eb] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-none",
    },

    // 10. MATERIAL DESIGN
    {
      id: "material-design",
      number: "10",
      name: "Material Design",
      desc: "Google's tactile paper-and-ink system with realistic Z-axis elevation shadows, tonal surfaces, and FABs.",
      icon: Layers,
      path: "/experimental/material-design",
      status: "Active",
      cardClass: "bg-[#fef7ff] text-[#1d1b20] rounded-[24px] p-6 border border-purple-100 shadow-[0_10px_20px_rgba(103,80,164,0.12),0_3px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_30px_rgba(103,80,164,0.2)] transition-all",
      iconWrapClass: "w-12 h-12 rounded-2xl bg-[#eaddff] text-[#21005d] flex items-center justify-center shadow-xs",
      badgeClass: "bg-[#e8def8] text-[#1d192b] text-[10px] font-bold uppercase px-3 py-1 rounded-full",
      titleClass: "font-semibold text-xl text-[#1d1b20]",
      descClass: "text-[#49454f] text-sm",
      footerClass: "bg-[#6750a4] text-white text-xs font-medium px-5 py-2.5 rounded-full shadow-md",
    },

    // 11. BENTO UI
    {
      id: "bento-ui",
      number: "11",
      name: "Bento Grid UI",
      desc: "Modular architectural compartments organized like a Japanese Bento box with tight inner radii.",
      icon: LayoutGrid,
      path: "/experimental/bento-ui",
      status: "Active",
      cardClass: "bg-zinc-950 text-white rounded-3xl p-4 border border-zinc-800 shadow-xl hover:border-zinc-700 transition-all",
      iconWrapClass: "w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center",
      badgeClass: "bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold px-2.5 py-1 rounded-lg",
      titleClass: "font-bold text-lg text-white",
      descClass: "text-zinc-400 text-xs bg-zinc-900/90 border border-zinc-800/80 p-3 rounded-2xl",
      footerClass: "w-full justify-between bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-bold px-4 py-2.5 rounded-xl",
    },

    // 12. Y2K DESIGN
    {
      id: "y2k-design",
      number: "12",
      name: "Y2K Cyber-Pop",
      desc: "Year 2000 metallic liquid chrome, translucent bubblegum pink, pixelated stars, and futuristic optimism.",
      icon: Disc3,
      path: "/experimental/y2k-design",
      status: "Active",
      cardClass: "bg-gradient-to-br from-[#ff7eb3] via-[#c084fc] to-[#7dd3fc] text-slate-950 rounded-2xl p-6 border-2 border-white shadow-[0_0_25px_rgba(244,114,182,0.5),inset_0_0_15px_rgba(255,255,255,0.8)]",
      iconWrapClass: "w-12 h-12 rounded-full bg-gradient-to-b from-white via-slate-200 to-slate-400 text-fuchsia-700 border-2 border-white shadow-md flex items-center justify-center",
      badgeClass: "bg-white/90 text-fuchsia-700 border border-fuchsia-400 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs",
      titleClass: "font-black text-2xl italic tracking-tight text-white drop-shadow-[0_2px_4px_rgba(157,23,77,0.6)]",
      descClass: "text-slate-900 font-semibold text-xs bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white",
      footerClass: "bg-gradient-to-r from-white to-slate-200 text-fuchsia-900 font-black text-xs uppercase px-4 py-2 rounded-full border border-white shadow-md",
    },

    // 13. RETRO DESIGN
        // 13. RETRO DESIGN (WARM 1970s VINTAGE RADIO VIBE)
    {
      id: "retro-design",
      number: "13",
      name: "Retro Design",
      desc: "Inspired by past decades—warm vintage cream paper, bold rust-red serif typography, and 1970s sunset stripes.",
      icon: Gamepad2,
      path: "/experimental/retro-design",
      status: "Active",
      cardClass: "bg-[#EFE3C8] text-[#2B2118] font-serif rounded-2xl p-6 border-2 border-[#23332F] shadow-[6px_6px_0px_#9E3420] hover:-translate-y-1 transition-all overflow-hidden",
      iconWrapClass: "w-12 h-12 rounded-xl bg-[#23332F] text-[#E5A93B] border-2 border-[#9E3420] flex items-center justify-center shadow-sm",
      badgeClass: "bg-[#23332F] text-[#EFE3C8] font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded",
      titleClass: "font-serif font-black text-2xl text-[#9E3420] tracking-tight",
      descClass: "font-sans text-[#4A3828] font-medium text-xs leading-relaxed",
      footerClass: "bg-[#5E2C1E] text-[#F5EAD4] font-sans font-black text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-[0_3px_0_#2B1306]",
    },
    

    // 14. CYBERPUNK
    {
      id: "cyberpunk",
      number: "14",
      name: "Cyberpunk HUD",
      desc: "High-tech low-life tactical telemetry, neon cyan & hazard yellow accents, and razor-sharp angled corners.",
      icon: Terminal,
      path: "/experimental/cyberpunk",
      status: "Active",
      cardClass: "bg-[#05070d] text-cyan-400 font-mono rounded-none p-6 border-l-4 border-l-[#fcee0a] border-t border-r border-b border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.18)] hover:border-cyan-400 transition-all",
      iconWrapClass: "w-12 h-12 bg-cyan-950/60 border border-cyan-400 text-[#fcee0a] flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.4)]",
      badgeClass: "bg-[#fcee0a] text-black font-mono font-black text-[10px] uppercase px-2.5 py-0.5",
      titleClass: "font-mono font-black text-xl uppercase tracking-wider text-cyan-300",
      descClass: "font-mono text-cyan-100/70 text-xs border-t border-cyan-500/20 pt-3",
      footerClass: "bg-cyan-400/10 border border-cyan-400 text-cyan-300 font-mono text-xs uppercase tracking-widest px-4 py-1.5",
    },

    // 15. EDITORIAL DESIGN
    {
      id: "editorial-design",
      number: "15",
      name: "Editorial Vogue",
      desc: "High-fashion print magazine layouts, dramatic high-contrast serif headlines, and curated column rules.",
      icon: BookOpen,
      path: "/experimental/editorial-design",
      status: "Active",
      cardClass: "bg-[#FAF6F0] text-[#181615] rounded-none p-7 border border-[#d8d0c5] shadow-sm hover:shadow-md transition-all",
      iconWrapClass: "w-10 h-10 bg-[#181615] text-[#FAF6F0] flex items-center justify-center rounded-none",
      badgeClass: "font-serif italic text-xs text-[#7a7267] border-b border-[#181615] pb-0.5",
      titleClass: "font-serif text-2xl font-normal italic tracking-tight text-[#181615]",
      descClass: "font-serif text-[#544e47] text-xs leading-relaxed border-l border-[#181615]/30 pl-3",
      footerClass: "font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#181615] border-b border-[#181615] pb-0.5",
    },

    // 16. CINEMATIC SCROLLING (ACTIVE PAGE)
    {
      id: "scrolling",
      number: "16",
      name: "Cinematic Scroll",
      desc: "Scroll-scrubbed word illumination, 3D perspective card choreography, and multi-axis velocity marquees.",
      icon: MousePointer2,
      path: "/experimental/scrolling-text",
      status: "Active",
      cardClass: "bg-gradient-to-br from-[#0B1A14] via-[#090d0c] to-[#1f1a08] text-white rounded-2xl p-6 border border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:border-[#D4AF37] hover:-translate-y-1 transition-all",
      iconWrapClass: "w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center",
      badgeClass: "bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full",
      titleClass: "font-bold text-2xl text-white",
      descClass: "text-white/75 text-sm",
      footerClass: "bg-[#D4AF37] text-black font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg",
    },

    // 17. MAGNETIC & CURSOR PHYSICS (ACTIVE PAGE)
    {
      id: "magnetic-buttons",
      number: "17",
      name: "Magnetic Physics",
      desc: "Elastic cursor-pull gravity orbs, 3D parallax button labels, and interactive macOS-style floating docks.",
      icon: Wand2,
      path: "/experimental/magnetic-buttons",
      status: "Active",
      cardClass: "bg-[#0c0a1d] text-white rounded-3xl p-6 border border-indigo-500/40 shadow-[0_10px_30px_rgba(99,102,241,0.2)] hover:border-indigo-400 hover:-translate-y-1 transition-all",
      iconWrapClass: "w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]",
      badgeClass: "bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
      titleClass: "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-300",
      descClass: "text-indigo-100/70 text-sm",
      footerClass: "bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]",
    },

    // 18. STORY SCROLLING (ACTIVE PAGE)
    
{
  id: "scroll-storytelling",
  number: "18",
  name: "Scroll Storytelling",
  desc: "Immersive scroll-controlled typography, word illumination, 3D perspective transformations, horizontal motion, and cinematic reveals.",
  icon: BookOpen,
  path: "/experimental/scroll-storytelling",
  status: "Active",
  cardClass: "bg-gradient-to-br from-[#050806] via-[#10251b] to-[#211a08] text-white rounded-2xl p-6 border border-emerald-500/40 shadow-[0_10px_35px_rgba(16,185,129,0.15)] hover:border-[#D4AF37] hover:-translate-y-1 transition-all",
  iconWrapClass: "w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 flex items-center justify-center",
  badgeClass: "bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full",
  titleClass: "font-black text-2xl text-white",
  descClass: "text-white/70 text-sm",
  footerClass: "bg-[#D4AF37] text-slate-950 font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl",
},

    // 19. SCROLLING LAB (ACTIVE PAGE)
{
  id: "ayurvedic-scroll-lab",
  number: "19",
  name: "Ayurvedic Scroll Laboratory",
  desc: "Immersive botanical storytelling with scroll-reactive medicinal plants, animated extraction, interactive specimens, and cinematic knowledge reveals.",
  icon: Leaf,
  path: "/experimental/ayurvedic-scroll-lab",
  status: "Active",
  cardClass: "bg-gradient-to-br from-[#08140d] via-[#183a25] to-[#342414] text-white rounded-3xl p-6 border border-emerald-500/40 shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all",
  iconWrapClass: "w-12 h-12 rounded-xl bg-emerald-400/15 border border-emerald-400/40 text-emerald-300 flex items-center justify-center",
  badgeClass: "bg-[#D4AF37] text-black text-[10px] font-black uppercase px-3 py-1 rounded-full",
  titleClass: "font-black text-2xl text-white",
  descClass: "text-white/75 text-sm",
  footerClass: "bg-[#D4AF37] text-black font-black text-xs uppercase px-4 py-2.5 rounded-xl",
},
    // 20. BIO-TWIN SIMULATOR (NEW ACTIVE PAGE)
{
  id: "bio-simulator",
  number: "20",
  name: "Interactive Bio-Twin Simulator",
  desc: "Zero-scroll tactile dashboard. Flip switches between modern habits and Ayurvedic protocols to watch live physiological meters and anatomical x-rays react in real-time.",
  icon: Activity, // Make sure to import { Activity } from "lucide-react" if not already imported
  path: "/experimental/bio-simulator",
  status: "New",
  cardClass: "bg-gradient-to-br from-[#070d0a] via-[#0e2218] to-[#281115] text-white rounded-3xl p-6 border border-[#e5c17b]/40 shadow-xl hover:border-[#e5c17b] hover:-translate-y-1 transition-all",
  iconWrapClass: "w-12 h-12 rounded-xl bg-[#e5c17b]/15 border border-[#e5c17b]/40 text-[#e5c17b] flex items-center justify-center",
  badgeClass: "bg-[#e5c17b] text-[#0b130e] text-[10px] font-black uppercase px-3 py-1 rounded-full",
  titleClass: "font-black text-2xl text-white",
  descClass: "text-white/75 text-sm",
  footerClass: "bg-[#e5c17b] text-[#0c1610] font-black text-xs uppercase px-4 py-2.5 rounded-xl",
},
    
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-6 pb-28 px-4 sm:px-6">
      
      {/* Top Bar (Cleanly spaced below main navbar) */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-wrap items-center justify-between gap-4 bg-surface/80 backdrop-blur-md border border-surfaceBorder px-5 py-3.5 rounded-2xl shadow-sm">
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to About Us
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
          <Beaker className="w-3.5 h-3.5" /> 17 Live Aesthetic Engines
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Design Museum
        </div>
        <h1 className="text-4xl sm:text-6xl font-heading font-black mb-5 tracking-tight">
          Every Card Built in Its <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-emerald-500">Own Aesthetic</span>
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto text-base sm:text-lg">
          Compare 17 iconic UI paradigms side-by-side. Each card below is engineered using the exact borders, shadows, textures, and typography of the style it represents.
        </p>
      </div>
      
      {/* 🚀 PROJECT ATREYA & BAMS SCHOLAR DUAL-GATEWAY LAUNCHER */}
      <div className="max-w-7xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/atreya"
          className="group rounded-3xl bg-gradient-to-br from-[#122A20] via-[#0B1913] to-[#211A0B] border-2 border-[#D4AF37]/60 p-7 text-white shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
        >
          <div>
            <span className="inline-block text-[10px] font-mono uppercase tracking-widest bg-[#D4AF37] text-black font-black px-3 py-1 rounded-full mb-4">
              TRACK B • INTERNATIONAL GATEWAY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Project ATREYA (Global Ayurveda)
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Features the 3-Stage Familiar-to-Profound Funnel, Interactive Clinical X-Ray Cards, and the 8 Branches of Ashtanga Ayurveda.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
            <span>Open Global Gateway (/atreya)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link
          href="/bams-scholar"
          className="group rounded-3xl bg-zinc-900 border-2 border-emerald-500/50 p-7 text-white shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
        >
          <div>
            <span className="inline-block text-[10px] font-mono uppercase tracking-widest bg-emerald-500 text-black font-black px-3 py-1 rounded-full mb-4">
              TRACK A • INDIA MEDICAL GATEWAY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              BAMS Scholar Syllabus &amp; Exam Hub
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              NCISM Prof I, II, &amp; III syllabus checklists, high-yield Samhita topics, and Viva-Voce PYQ focus points.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <span>Open BAMS Scholar Hub (/bams-scholar)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
      
      {/* Multi-Style Chameleon Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uiStyles.map((style) => {
          const Icon = style.icon;
          const isActive = style.status === "Active";

          return (
            <Link 
              key={style.id}
              href={style.path}
              className={`group relative flex flex-col justify-between min-h-[290px] ${style.cardClass}`}
            >
              {style.decor}

              {/* Top Row: Icon & Style Number/Badge */}
              <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
                <div className={style.iconWrapClass}>
                  <Icon className="w-5 h-5" />
                </div>

                <span className={style.badgeClass}>
                  #{style.number} • {isActive ? "Interactive Lab" : "Live Card Specimen"}
                </span>
              </div>

              {/* Middle Row: Title & Description */}
              <div className="relative z-10 mb-6 flex-grow">
                <h3 className={`mb-2.5 ${style.titleClass}`}>
                  {style.name}
                </h3>
                <p className={style.descClass}>
                  {style.desc}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 mt-auto">
                <div className={`inline-flex items-center gap-2 ${style.footerClass}`}>
                  <span>{isActive ? "Launch Full Sandbox" : "Inspect Card Style"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
