"use client";

import Link from "next/link";
import { Instagram, Play, Eye, ArrowRight } from "lucide-react";

// ============================================================================
// 📁 REELS REPOSITORY: ADD, REMOVE, OR EDIT REELS HERE!
// ============================================================================
const REELS_DATA = [
  {
    id: "reel-1",
    views: "124K Views",
    title: "The 'Captain America' Leadership Framework for SOPs",
    gradient: "from-gray-900 to-black",
    videoLink: "https://instagram.com" 
  },
  {
    id: "reel-2",
    views: "89K Views",
    title: "Viral SEO Strategies for Your University Application",
    gradient: "from-emerald-950 to-black",
    videoLink: "https://instagram.com"
  },
  {
    id: "reel-3",
    views: "210K Views",
    title: "3 Mistakes Killing Your Chevening Scholarship Chances",
    gradient: "from-amber-950 to-black",
    videoLink: "https://instagram.com"
  },
  {
    id: "reel-4",
    views: "156K Views",
    title: "How to Build an Elite Profile from a Tier-3 City",
    gradient: "from-indigo-950 to-black",
    videoLink: "https://instagram.com"
  }
];
// ============================================================================

export default function LandingReels() {
  return (
    <div className="bg-surface border-t border-surfaceBorder py-16 md:py-24 relative z-10 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <Instagram className="w-4 h-4" /> Career GPS Reels
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              High-Yield Strategies in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">60 Seconds</span>
            </h2>
            <p className="text-foreground/70 font-medium mt-3 max-w-xl text-sm md:text-base">
              Bite-sized, viral tactics to hack the application algorithms and build an unbeatable profile.
            </p>
          </div>
          
          <Link href="https://instagram.com" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-colors">
            Follow for Daily Tips <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Swipeable Carousel Engine (Auto-generates from REELS_DATA) */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          
          {REELS_DATA.map((reel) => (
            <Link 
              key={reel.id}
              href={reel.videoLink} 
              target="_blank" 
              className="group relative w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-surfaceBorder cursor-pointer transform transition-transform hover:-translate-y-2 block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-6 h-6 text-white ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-2">
                  <Eye className="w-3.5 h-3.5" /> {reel.views}
                </div>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  {reel.title}
                </h3>
              </div>
            </Link>
          ))}

        </div>
        
        {/* Mobile "View All" button */}
        <div className="mt-4 flex justify-center md:hidden">
           <Link href="https://instagram.com" target="_blank" className="flex items-center justify-center gap-2 w-full py-4 rounded-sm bg-surfaceBorder/30 text-foreground font-bold text-sm hover:bg-surfaceBorder/50 transition-colors">
            Follow for Daily Tips <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
