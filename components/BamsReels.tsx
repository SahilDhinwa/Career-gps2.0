"use client";

import Link from "next/link";
import { Instagram, Play, Eye, ArrowRight } from "lucide-react";

// ============================================================================
// 📁 BAMS REELS REPOSITORY: ADD, REMOVE, OR EDIT REELS HERE!
// ============================================================================
const BAMS_REELS_DATA = [
  {
    id: "bams-reel-1",
    views: "18K Views",
    title: "Charaka Samhita: Top 5 Memory Hacks for Sutra Sthana",
    gradient: "from-amber-950 to-black",
    videoLink: "https://www.instagram.com/reel/DaN94HHMFUa/?stkn=Y2FxY2RqYjUwczg1" // <-- Your Test Reel!
  },
  {
    id: "bams-reel-2",
    views: "24K Views",
    title: "How to Master Dravyaguna Guna-Karma Instantly",
    gradient: "from-orange-950 to-black",
    videoLink: "https://instagram.com"
  },
  {
    id: "bams-reel-3",
    views: "31K Views",
    title: "Roga Nidana: Quick Trick to Differentiate Vata vs Pitta Vyadhis",
    gradient: "from-red-950 to-black",
    videoLink: "https://instagram.com"
  },
  {
    id: "bams-reel-4",
    views: "15K Views",
    title: "Rasa Shastra Yogas: The Ultimate 1-Minute Revision",
    gradient: "from-yellow-950 to-black",
    videoLink: "https://instagram.com"
  }
];
// ============================================================================

export default function BamsReels() {
  return (
    <div className="mt-20 md:mt-28 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20 shadow-sm">
            <Instagram className="w-4 h-4" /> BAMS Micro-Learning
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            High-Yield Concepts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">60 Seconds</span>
          </h2>
          <p className="text-foreground/70 font-medium mt-3 max-w-xl text-sm md:text-base">
            Bite-sized memory hacks, shloka breakdowns, and exam strategies tailored for 2nd Prof subjects.
          </p>
        </div>
        
        <Link href="https://instagram.com" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-amber-500 transition-colors">
          Follow for Daily Hacks <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Swipeable Carousel Engine (Auto-generates from BAMS_REELS_DATA) */}
      <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
        
        {BAMS_REELS_DATA.map((reel) => (
          <Link 
            key={reel.id}
            href={reel.videoLink}
            target="_blank"
            className="group relative block w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-amber-500/20 cursor-pointer transform transition-transform hover:-translate-y-2"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient}`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-6 h-6 text-amber-400 ml-1 fill-current" />
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
      <div className="mt-2 flex justify-center md:hidden">
         <Link href="https://instagram.com" target="_blank" className="flex items-center justify-center gap-2 w-full py-4 rounded-sm bg-amber-500/10 text-amber-500 font-bold text-sm hover:bg-amber-500/20 border border-amber-500/30 transition-colors shadow-sm">
          Follow for Daily Hacks <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
