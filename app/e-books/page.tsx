"use client";

import { useState } from "react";
import { Sparkles, Star, ShieldCheck, MessageCircle, Eye, BookOpen, ArrowDown } from "lucide-react";

// ==========================================
// 📚 PREMIUM & FREE E-BOOKS REPOSITORY
// ==========================================
const careerAssets = [
  {
    id: "unspoken-aura",
    title: "The Unspoken Aura",
    coverTitle: "The Unspoken\nAura",
    author: "Sahil Dhinwa", 
    subtitle: "Unlocking Your True Personality Through Communication",
    shortSubtitle: "Unlocking Your True Personality",
    description: "A Guide for the Real World. Master the art of the aura, overcome the 'Invisible Wall', and command respect in every room you enter.",
    price: "₹499", 
    originalPrice: "₹999",
    tag: "Flagship Release",
    color: "from-gray-900 to-black", 
    spineColor: "#111827",
    coverBgImage: "/unspoken-aura-bg.jpg", 
    fileUrl: "", 
    previewPages: [
      "CHAPTER I\nThe Invisible Wall\n\nWhy do some people command a room before they even speak?",
      "THE AURA PROTOCOL\n\n1. Silence as leverage\n2. Micro-calibrations\n3. Breaking hesitation",
      "REAL WORLD EXECUTION\n\nStep inside the full guide to unlock your true presence."
    ]
  },
  {
    id: "invisible-art",
    title: "The Invisible Art of Speaking",
    coverTitle: "The Invisible Art\nof Speaking",
    author: "Sahil Dhinwa", 
    subtitle: "A Mentor's Guide to Communication for the Ambitious",
    shortSubtitle: "A Mentor's Guide for the Ambitious",
    description: "Claim your space in a world that tries to make you feel small. This survival guide breaks down how to overcome hesitation, hack your learning style, and command respect in any environment.",
    price: "₹499", 
    originalPrice: "₹1,299",
    tag: "New Release",
    color: "from-[#022c22] to-black", 
    spineColor: "#064e3b",
    coverBgImage: "/the_invisible_art.jpg", 
    fileUrl: "",
    previewPages: [
      "CHAPTER I\nClaiming Your Space\n\nHow to stop shrinking in high-stakes rooms and conversations.",
      "THE MENTOR'S CODE\n\n• Precision framing\n• Vocal conviction\n• Zero-fear articulation",
      "FOR THE AMBITIOUS\n\nFlip the script and speak with undeniable authority."
    ]
  },
  {
    id: "neetu-bhaiya",
    title: "NITU BHAIYA KE POHE",
    coverTitle: "\nGhee Khatam",
    author: "ZUCKERBERG", 
    subtitle: "OSHO KA BHAI SAWA DOSHO",
    shortSubtitle: "Apna ghee khatam",
    description: "No comments",
    price: "FREE", 
    originalPrice: "₹1,299",
    tag: "Masterpiece",
    color: "from-[#022c22] to-black", 
    spineColor: "#1e293b",
    coverBgImage: "/neetu-bhaiya.jpg", 
    fileUrl: "/neetu-bhaiya.pdf", 
    previewPages: [
      "EPISODE I\nApna Ghee Khatam\n\nLegendary hostel wisdom and unfiltered philosophy.",
      "SAWA DOSHO SUTRAS\n\nWhen life serves pohe, check the ghee reserves first.",
      "100% FREE ASSET\n\nClick below to read the full masterpiece online right now."
    ]
  }
];

export default function EBooksDirectory() {
  const phoneNumber = "918769892303";
  const [openBookId, setOpenBookId] = useState<string | null>(null);

  const getWhatsappUrl = (bookTitle: string) => {
    const message = encodeURIComponent(`Hi Sahil, I want to purchase the E-Book: '${bookTitle}'!`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const scrollToCard = (id: string) => {
    const el = document.getElementById(`card-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* 3D Animated Background + 3D Bookshelf & Page-Flip Engine */}
      <style dangerouslySetInnerHTML={{__html: `
        .emerald-vault { position: fixed; inset: 0; overflow: hidden; perspective: 1500px; z-index: 0; pointer-events: none; }
        .emerald-panel { position: absolute; border-radius: 16px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(17, 66, 50, 0.02) 100%); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-top: 1px solid rgba(16, 185, 129, 0.3); border-left: 1px solid rgba(16, 185, 129, 0.3); border-bottom: 1px solid rgba(16, 185, 129, 0.1); border-right: 1px solid rgba(16, 185, 129, 0.1); box-shadow: 0 25px 50px -12px rgba(17, 66, 50, 0.15), inset 0 0 40px rgba(16, 185, 129, 0.05); transform-style: preserve-3d; }
        .panel-1 { width: 18vw; height: 85vh; top: -10%; left: 5%; animation: pivot-glass-1 25s ease-in-out infinite alternate; }
        .panel-2 { width: 25vw; height: 90vh; top: 15%; left: 25%; background: linear-gradient(135deg, rgba(212, 175, 55, 0.06) 0%, rgba(16, 185, 129, 0.02) 100%); border-top: 1px solid rgba(212, 175, 55, 0.3); animation: pivot-glass-2 30s ease-in-out infinite alternate-reverse; }
        .panel-3 { width: 15vw; height: 75vh; top: 5%; left: 55%; animation: pivot-glass-3 20s ease-in-out infinite alternate; }
        .panel-4 { width: 20vw; height: 110vh; top: -5%; right: 5%; animation: pivot-glass-4 35s ease-in-out infinite alternate-reverse; }
        .panel-5 { width: 30vw; height: 60vh; bottom: -10%; left: 40%; animation: pivot-glass-5 28s ease-in-out infinite alternate; }
        @keyframes pivot-glass-1 { 0% { transform: rotateY(-35deg) rotateZ(5deg) translateY(0); } 100% { transform: rotateY(25deg) rotateZ(-2deg) translateY(40px); } }
        @keyframes pivot-glass-2 { 0% { transform: rotateY(20deg) rotateZ(-3deg) translateY(20px); } 100% { transform: rotateY(-30deg) rotateZ(4deg) translateY(-30px); } }
        @keyframes pivot-glass-3 { 0% { transform: rotateY(-15deg) rotateX(10deg) translateY(-20px); } 100% { transform: rotateY(40deg) rotateX(-5deg) translateY(20px); } }
        @keyframes pivot-glass-4 { 0% { transform: rotateY(35deg) rotateZ(2deg) translateY(0); } 100% { transform: rotateY(-20deg) rotateZ(-4deg) translateY(-50px); } }
        @keyframes pivot-glass-5 { 0% { transform: rotateX(45deg) rotateY(-10deg) translateX(0); } 100% { transform: rotateX(20deg) rotateY(25deg) translateX(-40px); } }

        /* ==========================================
           📖 3D BOOKSHELF & FLIPPING PAGES ENGINE
           ========================================== */
        .shelf-scene {
          perspective: 1800px;
        }
        .book-3d {
          position: relative;
          width: 175px;
          height: 265px;
          transform-style: preserve-3d;
          transform: rotateY(-16deg) rotateX(4deg);
          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .book-3d {
            width: 205px;
            height: 310px;
          }
        }
        .book-3d:hover,
        .book-3d.is-open {
          transform: rotateY(0deg) rotateX(2deg) translateZ(45px) translateX(22px);
          z-index: 30;
        }

        /* Back Cover & Spine */
        .book-back {
          position: absolute;
          inset: 0;
          border-radius: 2px 6px 6px 2px;
          background: #090d16;
          transform: translateZ(-18px);
          box-shadow: 0 28px 38px rgba(0, 0, 0, 0.75), 12px 0 25px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .book-spine-3d {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 36px;
          transform-origin: left center;
          transform: rotateY(-90deg) translateX(-18px);
          border-radius: 3px 0 0 3px;
          border-left: 1px solid rgba(255, 255, 255, 0.25);
          border-right: 1px solid rgba(0, 0, 0, 0.6);
        }

        /* Page Block Thickness (Right Edge) */
        .book-pages-block {
          position: absolute;
          top: 4px;
          bottom: 4px;
          right: 2px;
          width: 32px;
          transform-origin: right center;
          transform: rotateY(90deg) translateX(14px);
          background: repeating-linear-gradient(
            90deg,
            #f5f0e6 0px,
            #f5f0e6 2px,
            #dfd7c8 2px,
            #dfd7c8 4px
          );
          box-shadow: inset 0 0 8px rgba(0,0,0,0.25);
        }

        /* Individual Flipping Pages */
        .flip-leaf {
          position: absolute;
          top: 5px;
          bottom: 5px;
          left: 2px;
          right: 5px;
          background: linear-gradient(90deg, #e5dec9 0%, #fbf8f1 12%, #f7f3e8 100%);
          border-radius: 1px 5px 5px 1px;
          transform-origin: left center;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: inset 6px 0 12px rgba(0, 0, 0, 0.12), 1px 0 4px rgba(0, 0, 0, 0.15);
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #1c1917;
          overflow: hidden;
        }
        .leaf-1 { transform: translateZ(-2px); transition-delay: 0.06s; }
        .leaf-2 { transform: translateZ(-6px); transition-delay: 0.14s; }
        .leaf-3 { transform: translateZ(-10px); transition-delay: 0.22s; }
        .leaf-base { transform: translateZ(-14px); }

        /* Front Cover Hinge */
        .book-front-cover {
          position: absolute;
          inset: 0;
          border-radius: 2px 6px 6px 2px;
          transform-origin: left center;
          transform-style: preserve-3d;
          transform: translateZ(2px) rotateY(0deg);
          transition: transform 0.75s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease;
          box-shadow: 6px 8px 22px rgba(0, 0, 0, 0.55);
        }

        /* HOVER / CLICK PAGE-FLIP TRIGGER */
        .book-3d:hover .book-front-cover,
        .book-3d.is-open .book-front-cover {
          transform: translateZ(2px) rotateY(-148deg);
          box-shadow: -15px 12px 28px rgba(0, 0, 0, 0.5);
        }
        .book-3d:hover .leaf-1,
        .book-3d.is-open .leaf-1 {
          transform: translateZ(-2px) rotateY(-132deg);
        }
        .book-3d:hover .leaf-2,
        .book-3d.is-open .leaf-2 {
          transform: translateZ(-6px) rotateY(-112deg);
        }
        .book-3d:hover .leaf-3,
        .book-3d.is-open .leaf-3 {
          transform: translateZ(-10px) rotateY(-38deg);
        }

        /* 3D Wooden / Obsidian Shelf Ledge */
        .bookshelf-plank {
          position: relative;
          height: 26px;
          background: linear-gradient(180deg, #2b1d12 0%, #170f09 65%, #0c0704 100%);
          border-top: 2px solid rgba(212, 175, 55, 0.45);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.85), 0 4px 18px rgba(212, 175, 55, 0.12);
        }
        .bookshelf-plank::before {
          content: "";
          position: absolute;
          top: -18px;
          left: 2%;
          right: 2%;
          height: 18px;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%);
          transform: perspective(400px) rotateX(55deg);
          transform-origin: bottom;
          border-radius: 4px 4px 0 0;
          pointer-events: none;
        }
      `}} />

      <div className="emerald-vault">
        <div className="emerald-panel panel-1"></div>
        <div className="emerald-panel panel-2"></div>
        <div className="emerald-panel panel-3"></div>
        <div className="emerald-panel panel-4"></div>
        <div className="emerald-panel panel-5"></div>
      </div>

      <div className="relative z-10 flex-grow py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder text-sm font-bold text-primary mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-warning" /> Premium Library
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 drop-shadow-sm">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Career Assets</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 font-medium max-w-2xl bg-surface/40 backdrop-blur-[2px] rounded-lg p-2">
              Invest in our flagship guides and frameworks. Hover or tap any book on the shelf below to flip through its pages, or scroll down to claim your copy.
            </p>
          </div>

          {/* =========================================================
              📚 TOP 3D INTERACTIVE BOOKSHELF WITH FLIPPING PAGES
             ========================================================= */}
          <div className="mb-16 md:mb-24 bg-surface/60 backdrop-blur-md border border-surfaceBorder rounded-sm pt-10 pb-8 px-4 sm:px-8 shadow-2xl relative overflow-hidden">
            
            {/* Top Spotlight Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-warning/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 px-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warning">
                <BookOpen className="w-4 h-4" /> Interactive 3D Vault Shelf
              </div>
              <span className="text-[11px] font-medium text-foreground/60">
                Hover or tap a book to flip pages
              </span>
            </div>

            {/* Books Standing on the Shelf */}
            <div className="shelf-scene flex flex-wrap items-end justify-center gap-10 sm:gap-14 md:gap-20 pt-4 pb-2 relative z-10">
              {careerAssets.map((asset) => {
                const isOpen = openBookId === asset.id;
                return (
                  <div key={`shelf-${asset.id}`} className="flex flex-col items-center">
                    <div
                      onClick={() => setOpenBookId(isOpen ? null : asset.id)}
                      className={`book-3d ${isOpen ? "is-open" : ""}`}
                    >
                      {/* Back Cover & 3D Spine */}
                      <div className="book-back"></div>
                      <div
                        className="book-spine-3d flex items-center justify-center"
                        style={{ backgroundColor: asset.spineColor }}
                      >
                        <span
                          className="text-[9px] font-bold text-white/70 uppercase tracking-widest whitespace-nowrap"
                          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                          {asset.title}
                        </span>
                      </div>
                      <div className="book-pages-block"></div>

                      {/* Stationary Base Page (Inside Right Page) */}
                      <div className="flip-leaf leaf-base">
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-widest text-amber-800 mb-1">
                            {asset.tag}
                          </p>
                          <div className="w-8 h-[1px] bg-amber-800/40 mb-2"></div>
                          <p className="text-[10px] md:text-[11px] font-serif leading-relaxed text-stone-800 whitespace-pre-line">
                            {asset.previewPages[2]}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-stone-300 flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-800">{asset.price}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToCard(asset.id);
                            }}
                            className="text-[9px] font-bold uppercase tracking-wider bg-stone-900 text-amber-400 px-2 py-1 rounded-sm hover:bg-stone-800 flex items-center gap-1"
                          >
                            Get Copy <ArrowDown className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>

                      {/* Flipping Leaf 3 (Middle-Right Page) */}
                      <div className="flip-leaf leaf-3">
                        <div>
                          <p className="text-[8px] font-mono uppercase text-stone-400 mb-1">Page 02</p>
                          <p className="text-[10px] md:text-[11px] font-serif leading-relaxed text-stone-800 whitespace-pre-line">
                            {asset.previewPages[1]}
                          </p>
                        </div>
                        <p className="text-[8px] font-mono text-stone-400 text-right">— {asset.author}</p>
                      </div>

                      {/* Flipping Leaf 2 */}
                      <div className="flip-leaf leaf-2">
                        <div>
                          <p className="text-[8px] font-mono uppercase text-stone-400 mb-1">Page 01</p>
                          <p className="text-[10px] md:text-[11px] font-serif leading-relaxed text-stone-800 whitespace-pre-line">
                            {asset.previewPages[0]}
                          </p>
                        </div>
                        <div className="w-full h-[1px] bg-stone-200"></div>
                      </div>

                      {/* Flipping Leaf 1 (Flyleaf) */}
                      <div className="flip-leaf leaf-1">
                        <div className="my-auto text-center">
                          <p className="text-[8px] uppercase tracking-widest text-stone-400 mb-1">Ex Libris</p>
                          <p className="text-xs font-serif font-bold text-stone-700">{asset.title}</p>
                        </div>
                      </div>

                      {/* Front Cover (Swings open on hover/tap) */}
                      <div
                        className="book-front-cover flex flex-col justify-between p-4 md:p-5 border border-white/15 overflow-hidden"
                        style={{
                          background: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.95))`,
                          backgroundImage: `url(${asset.coverBgImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "overlay",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25"></div>
                        {/* Left Spine Crease Highlight */}
                        <div className="absolute top-0 bottom-0 left-2 w-[2px] bg-white/15 z-10"></div>

                        <div className="relative z-10 text-center mt-1">
                          <p className="text-[7px] md:text-[9px] font-bold text-warning uppercase tracking-[0.22em] opacity-90">
                            Career GPS Exclusive
                          </p>
                        </div>

                        <div className="relative z-10 text-center my-auto">
                          <h3 className="font-heading font-bold text-white text-base md:text-xl leading-tight mb-1.5 drop-shadow-lg whitespace-pre-line">
                            {asset.coverTitle}
                          </h3>
                          <p className="text-[8px] md:text-[10px] text-gray-300 font-medium leading-snug px-1">
                            {asset.shortSubtitle}
                          </p>
                          <div className="w-8 h-0.5 bg-warning mx-auto mt-3 opacity-80"></div>
                        </div>

                        <div className="relative z-10 text-center mt-auto">
                          <div className="border-t border-white/20 pt-1.5 w-full">
                            <p className="text-[8px] md:text-[10px] font-bold text-white tracking-[0.18em] uppercase truncate">
                              {asset.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3D Shelf Plank */}
            <div className="bookshelf-plank mx-auto max-w-5xl"></div>
          </div>

          {/* =========================================================
              ORIGINAL 2-COLUMN DETAILED CARDS (100% Preserved)
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {careerAssets.map((asset) => (
              <div
                id={`card-${asset.id}`}
                key={asset.id}
                className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group"
              >
                
                {/* Book Cover Area */}
                <div className={`w-full sm:w-2/5 py-10 px-4 sm:p-6 md:p-8 flex items-center justify-center bg-gradient-to-br ${asset.color} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-warning/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  <div 
                    className="w-[200px] sm:w-full max-w-[220px] aspect-[54/85] rounded-md md:rounded-lg shadow-2xl flex flex-col justify-between p-4 md:p-5 transform group-hover:scale-105 transition-transform duration-500 relative z-10 border border-white/10 overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.9))`,
                      backgroundImage: `url(${asset.coverBgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20"></div>
                    
                    <div className="relative z-10 text-center mt-1 md:mt-2">
                      <p className="text-[8px] md:text-[10px] font-bold text-warning uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-90">
                        Career GPS Exclusive
                      </p>
                    </div>

                    <div className="relative z-10 text-center mb-2 md:mb-4">
                      <h3 className="font-heading font-bold text-white text-lg md:text-2xl leading-tight mb-1.5 md:mb-2 drop-shadow-lg whitespace-pre-line">
                        {asset.coverTitle}
                      </h3>
                      <p className="text-[9px] md:text-xs text-gray-300 font-medium leading-snug px-1">
                        {asset.shortSubtitle}
                      </p>
                      <div className="w-6 md:w-12 h-0.5 bg-warning mx-auto mt-3 md:mt-4 opacity-80"></div>
                    </div>
                    
                    <div className="relative z-10 text-center mt-auto pb-1 md:pb-0">
                      <p className="text-[7px] md:text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-1.5 md:mb-2">
                        A Guide for the Real World
                      </p>
                      <div className="inline-block border-t border-white/20 pt-1.5 md:pt-2 w-full px-2">
                        <p className="text-[9px] md:text-xs font-bold text-white tracking-[0.15em] md:tracking-[0.2em] uppercase drop-shadow-md truncate">
                          {asset.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details & Actions */}
                <div className="p-6 md:p-8 sm:w-3/5 flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold bg-warning/10 text-warning px-2 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                      {asset.tag}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-warning fill-current drop-shadow-sm" />)}
                    </div>
                  </div>

                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">{asset.title}</h2>
                  
                  <p className="text-xs md:text-sm font-medium text-foreground/50 mb-2">
                    By <span className="text-primary font-bold">{asset.author}</span>
                  </p>

                  <p className="text-primary font-medium text-sm mb-4">{asset.subtitle}</p>
                  
                  <p className="text-foreground/70 text-sm mb-8 flex-grow leading-relaxed">
                    {asset.description}
                  </p>

                  <div className="mt-auto">
                    {/* Price Block */}
                    <div className="flex items-end gap-3 mb-4">
                      {asset.price === "FREE" ? (
                        <span className="text-3xl font-heading font-bold text-success drop-shadow-sm">{asset.price}</span>
                      ) : (
                        <span className="text-3xl font-heading font-bold text-foreground drop-shadow-sm">{asset.price}</span>
                      )}
                      <span className="text-sm font-medium text-foreground/40 line-through mb-1.5">{asset.originalPrice}</span>
                      <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded-sm mb-1.5 ml-auto border border-success/20">
                        LIMITED TIME
                      </span>
                    </div>

                    {/* DIRECT NATIVE LINK (NO IFRAME MODAL) */}
                    <div className="flex flex-col w-full">
                      {asset.price === "FREE" ? (
                        <a 
                          href={asset.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-sm hover:bg-primaryHover transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
                        >
                          <Eye className="w-5 h-5" /> Read Online
                        </a>
                      ) : (
                        <a 
                          href={getWhatsappUrl(asset.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-sm hover:bg-primaryHover transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
                        >
                          <MessageCircle className="w-5 h-5 fill-current" /> Buy via WhatsApp
                        </a>
                      )}
                    </div>
                    
                    {/* Trust Badge */}
                    <p className="text-center text-xs text-foreground/50 mt-4 font-bold flex items-center justify-center gap-1.5 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-success" /> Instant Digital Delivery
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
