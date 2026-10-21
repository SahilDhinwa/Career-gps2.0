"use client";

import Link from "next/link";
import { Instagram, Play, Eye, ArrowRight, Sparkles } from "lucide-react";

// ============================================================================
// 📁 REELS REPOSITORY: ATREYA MED & VEBLEN GOOD CLINICAL SHORTS
// ============================================================================
const REELS_DATA = [
  {
    id: "reel-1",
    category: "GLOBAL SCIENCE",
    views: "142K Views",
    title: "Shirodhara: Why It's Vagus Nerve Neurology, Not Just a Spa Day",
    gradient: "from-emerald-950 via-teal-950 to-black",
    videoLink: "https://instagram.com",
  },
  {
    id: "reel-2",
    category: "BAMS SHLOKA HACK",
    views: "98K Views",
    title: "Memorize Charaka Sutrasthana & Tridosha Sites in 60 Seconds",
    gradient: "from-amber-950 via-stone-950 to-black",
    videoLink: "https://instagram.com",
  },
  {
    id: "reel-3",
    category: "SURGICAL HERITAGE",
    views: "215K Views",
    title: "How Acharya Sushruta Performed the First Rhinoplasty 2,600 Years Ago",
    gradient: "from-gray-900 via-zinc-950 to-black",
    videoLink: "https://instagram.com",
  },
  {
    id: "reel-4",
    category: "VEBLEN GOOD AURA",
    views: "164K Views",
    title: "From a Tier-3 Hostel to Global Symposiums: The 3-Second Viva Rule",
    gradient: "from-indigo-950 via-slate-950 to-black",
    videoLink: "https://instagram.com",
  },
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
              <Instagram className="w-4 h-4" /> ATREYA Med • Veblen Good
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              High-Yield Clinical Science in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">
                60 Seconds
              </span>
            </h2>
            <p className="text-foreground/70 font-medium mt-3 max-w-xl text-sm md:text-base">
              Bite-sized Samhita memory hacks, modern biomedical breakdowns, and viva-voce confidence tactics for BAMS scholars and global learners.
            </p>
          </div>
          
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-colors"
          >
            Follow for Daily Clinical Pearls <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Swipeable Carousel Engine (Auto-generates from REELS_DATA) */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          
          {REELS_DATA.map((reel) => (
            <Link 
              key={reel.id}
              href={reel.videoLink} 
              target="_blank" 
              className="group relative w-64 md:w-72 shrink-0 aspect-[9/16] rounded-xl overflow-hidden snap-center shadow-lg border border-surfaceBorder hover:border-[#D4AF37]/50 cursor-pointer transform transition-all hover:-translate-y-2 block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Top Category Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  <Sparkles className="w-2.5 h-2.5" /> {reel.category}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] text-white transition-all shadow-xl">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>

              {/* Bottom Metadata & Title */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold mb-2">
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> {reel.views}
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
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            className="flex items-center justify-center gap-2 w-full py-4 rounded-sm bg-surfaceBorder/30 text-foreground font-bold text-sm hover:bg-surfaceBorder/50 transition-colors"
          >
            Follow for Daily Clinical Pearls <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
