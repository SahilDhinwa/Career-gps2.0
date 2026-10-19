"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, Beaker, LayoutGrid, Zap, Terminal, Box, Cloud, 
  Square, Layers, Disc3, Gamepad2, BookOpen, Droplet, Target,
  Minus, Flame, Briefcase, MousePointer2, Wand2, ArrowRight
} from "lucide-react";

export default function ExperimentalDirectoryPage() {
  // The complete master list of UI styles
  const uiStyles = [
    { id: "minimalism", name: "1. Minimalism", desc: "Clean, white space, and typography-focused.", icon: Minus, path: "/experimental/minimalism", status: "Coming Soon" },
    { id: "maximalism", name: "2. Maximalism", desc: "Loud, chaotic, overlapping elements and bright colors.", icon: Flame, path: "/experimental/maximalism", status: "Coming Soon" },
    { id: "glassmorphism", name: "3. Glassmorphism", desc: "Frosted glass, blurs, and translucent backgrounds.", icon: Droplet, path: "/experimental/glassmorphism", status: "Active" },
    { id: "neumorphism", name: "4. Neumorphism", desc: "Soft extruded plastic look using inner and outer shadows.", icon: Target, path: "/experimental/neumorphism", status: "Coming Soon" },
    { id: "claymorphism", name: "5. Claymorphism", desc: "Fluffy, 3D, inflated 'clay' look using pastel colors.", icon: Cloud, path: "/experimental/claymorphism", status: "Active" },
    { id: "brutalism", name: "6. Brutalism", desc: "Raw HTML look, no CSS styling, default blue links.", icon: Box, path: "/experimental/brutalism", status: "Coming Soon" },
    { id: "neo-brutalism", name: "7. Neo-Brutalism", desc: "Thick black borders, hard shadows, loud contrasting colors.", icon: Zap, path: "/experimental/neo-brutalism", status: "Active" },
    { id: "skeuomorphism", name: "8. Skeuomorphism", desc: "Making digital UI look like real-world physical objects.", icon: Briefcase, path: "/experimental/skeuomorphism", status: "Coming Soon" },
    { id: "flat-design", name: "9. Flat Design", desc: "Solid colors, no shadows, no gradients (Windows 8 style).", icon: Square, path: "/experimental/flat-design", status: "Coming Soon" },
    { id: "material-design", name: "10. Material Design", desc: "Paper-and-ink inspired card layouts with realistic depth.", icon: Layers, path: "/experimental/material-design", status: "Coming Soon" },
    { id: "bento-ui", name: "11. Bento UI", desc: "Strict grid boxes with rounded corners (like a Bento box).", icon: LayoutGrid, path: "/experimental/bento-ui", status: "Coming Soon" },
    { id: "y2k-design", name: "12. Y2K Design", desc: "Retro-futurism, metallic gradients, early 2000s web.", icon: Disc3, path: "/experimental/y2k-design", status: "Coming Soon" },
    { id: "retro-design", name: "13. Retro Design", desc: "8-bit pixel art, CRT scanlines, old-school terminal looks.", icon: Gamepad2, path: "/experimental/retro-design", status: "Coming Soon" },
    { id: "cyberpunk", name: "14. Cyberpunk", desc: "Neon glows, dark backgrounds, hacker aesthetics.", icon: Terminal, path: "/experimental/cyberpunk", status: "Active" },
    { id: "editorial-design", name: "15. Editorial Design", desc: "Fashion magazine style, huge serif fonts, strict grids.", icon: BookOpen, path: "/experimental/editorial-design", status: "Coming Soon" },
    { 
  id: "magnetic-buttons", 
  name: "Magnetic Buttons", 
  desc: "Elastic cursor-pull buttons, 3D parallax labels, and interactive docks.", 
  icon: Wand2, 
  path: "/experimental/magnetic-buttons", 
  status: "Active" 
},
    
    // Custom Interactions
    { id: "scrolling", name: "Cinematic Scrolling", desc: "Scroll-reveals, infinite marquees, and parallax text.", icon: MousePointer2, path: "/experimental/scrolling-text", status: "Active" },
    { id: "cursor-magic", name: "Cursor Magic", desc: "Magnetic buttons and Vercel-style glowing hover cards.", icon: Wand2, path: "/experimental/cursor-magic", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surfaceBorder p-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to About Us
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
            <Beaker className="w-3.5 h-3.5" /> BAMS Hub Design Lab
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mt-16 px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Architecture</span> Room
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
          Welcome to the sandbox. This is where we test, break, and perfect the UI/UX design languages that will eventually power the future of the BAMS Hub platform.
        </p>
      </div>

      {/* Grid Directory */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiStyles.map((style) => {
            const Icon = style.icon;
            const isActive = style.status === "Active";

            return (
              <Link 
                key={style.id}
                href={isActive ? style.path : "#"}
                className={`group relative p-6 rounded-xl border transition-all duration-300 flex flex-col h-full
                  ${isActive 
                    ? "bg-surface hover:bg-surface/80 border-surfaceBorder hover:border-primary/50 shadow-sm hover:shadow-md cursor-pointer" 
                    : "bg-surface/30 border-surfaceBorder/50 opacity-70 cursor-not-allowed"
                  }
                `}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors
                    ${isActive ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white" : "bg-foreground/5 text-foreground/40"}
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border
                    ${isActive 
                      ? "bg-success/10 text-success border-success/20" 
                      : "bg-foreground/5 text-foreground/40 border-surfaceBorder"
                    }
                  `}>
                    {style.status}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {style.name}
                </h3>
                <p className="text-foreground/60 text-sm flex-grow mb-6">
                  {style.desc}
                </p>

                <div className={`mt-auto flex items-center gap-2 text-sm font-bold transition-colors
                  ${isActive ? "text-foreground group-hover:text-primary" : "text-foreground/30"}
                `}>
                  {isActive ? "Enter Sandbox" : "Under Construction"}
                  {isActive && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
