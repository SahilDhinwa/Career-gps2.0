"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Type, Sparkles } from "lucide-react";

export default function ScrollingTextPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Tracking Engine for the "Text Fill" effect
  useEffect(() => {
    const handleScroll = () => {
      if (!textContainerRef.current) return;
      
      const element = textContainerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is through the viewport
      // Starts at 0 when the top of the element hits the bottom of the screen
      // Ends at 1 when the bottom of the element hits the middle of the screen
      const start = windowHeight;
      const end = windowHeight / 2;
      const current = rect.top;
      
      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The text we want to animate word-by-word
  const paragraphText = "The transition from a rural classroom to a global university is not just about changing locations. It is about breaking down invisible barriers, mastering the art of communication, and commanding respect in rooms where you once felt small. This is the origin of Veblen Good.";
  const words = paragraphText.split(" ");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black pb-32">
      
      {/* Custom CSS for Marquees */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}} />

      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 pointer-events-none">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors font-bold text-sm bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md pointer-events-auto"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>
      </div>

      {/* 1. HERO SPACE (To allow scrolling) */}
      <div className="h-screen flex flex-col items-center justify-center relative border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-[#D4AF37] mb-6">
          <Type className="w-4 h-4" /> Typography Lab
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center">
          Cinematic <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Scrolling</span>
        </h1>
        <p className="mt-6 text-white/50 text-lg animate-pulse">Scroll down slowly</p>
      </div>

      {/* 2. INFINITE MARQUEE SECTION */}
      <div className="py-24 relative overflow-hidden flex flex-col gap-4 border-b border-white/10 bg-black">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none"></div>
        
        {/* Left Scrolling */}
        <div className="flex w-[200%] animate-marquee-left opacity-30 hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-7xl md:text-9xl font-black uppercase whitespace-nowrap tracking-tighter">
            BAMS HUB • VEBLEN GOOD • CAREER GPS • BAMS HUB • VEBLEN GOOD • CAREER GPS • 
          </h2>
        </div>
        
        {/* Right Scrolling (Outlined) */}
        <div className="flex w-[200%] animate-marquee-right opacity-30 hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-7xl md:text-9xl font-black uppercase whitespace-nowrap tracking-tighter" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
            MASTER YOUR AURA • OVERCOME HESITATION • MASTER YOUR AURA • OVERCOME HESITATION • 
          </h2>
        </div>
      </div>

      {/* 3. SCROLL-FILL TEXT SECTION */}
      <div className="py-32 px-6 md:px-12 max-w-5xl mx-auto min-h-screen flex items-center justify-center">
        <div ref={textContainerRef} className="relative">
          <Sparkles className="w-8 h-8 text-[#D4AF37] mb-8 opacity-80" />
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.3] tracking-tight">
            {words.map((word, i) => {
              // Calculate if this specific word should be highlighted based on scroll progress
              const isHighlighted = (i / words.length) < scrollProgress;
              return (
                <span 
                  key={i} 
                  className={`inline-block mr-3 mb-2 transition-colors duration-300 ${
                    isHighlighted ? "text-white" : "text-white/15"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h3>
        </div>
      </div>

      {/* 4. PARALLAX FOOTER TEASER */}
      <div className="h-screen flex items-center justify-center overflow-hidden relative border-t border-white/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0dGVybj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50"></div>
        <h2 
          className="text-8xl md:text-[150px] font-black uppercase tracking-tighter text-[#D4AF37] whitespace-nowrap opacity-20 absolute"
          style={{ transform: `translateX(${(scrollProgress * 200) - 100}px)` }}
        >
          GLOBAL STANDARD
        </h2>
        <div className="relative z-10 text-center">
          <p className="text-xl font-bold text-[#D4AF37] tracking-widest uppercase mb-4">Up Next</p>
          <p className="text-3xl text-white font-medium">Magnetic Buttons</p>
        </div>
      </div>

    </div>
  );
}
