"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  BookOpen, Sparkles, Star, ShieldCheck, MessageCircle, 
  ChevronLeft, ChevronRight, X, RotateCcw, BookMarked 
} from "lucide-react";

// ============================================================================
// 📚 E-BOOK & LEATHER SPINE VAULT DATA
// When you share your PDF next, we will drop the exact pages into `pages` below!
// ============================================================================
export interface BookPageContent {
  pageNumber: number;
  heading?: string;
  subheading?: string;
  body: string[];
  bullets?: string[];
  highlightQuote?: string;
}

export interface VaultBook {
  id: string;
  title: string;
  spineTitle: string;
  subtitle: string;
  author: string;
  badge: string;
  price: string;
  originalPrice: string;
  description: string;
  spineLeather: "obsidian" | "cognac" | "espresso" | "saddle";
  coverBg: string;
  whatsappText: string;
  pages: BookPageContent[];
}

const VAULT_BOOKS: VaultBook[] = [
  {
    id: "unspoken-aura",
    title: "The Unspoken Aura",
    spineTitle: "THE UNSPOKEN AURA",
    subtitle: "Unlocking Your True Personality Through Communication",
    author: "Sahil Dhinwa",
    badge: "FLAGSHIP RELEASE",
    price: "₹499",
    originalPrice: "₹999",
    description:
      "A Guide for the Real World. Master the art of the aura, overcome the 'Invisible Wall', and command respect in every room you enter.",
    spineLeather: "obsidian",
    coverBg: "from-[#091510] via-[#0c2218] to-[#050a08]",
    whatsappText: "Hi Sahil, I want to get a copy of 'The Unspoken Aura' E-Book!",
    pages: [
      {
        pageNumber: 1,
        heading: "CHAPTER 01",
        subheading: "THE INVISIBLE WALL",
        body: [
          "Why do brilliant students from tier-2 and tier-3 towns freeze the moment they step into an elite seminar room or a high-stakes viva?",
          "It is rarely a lack of knowledge. You have memorized the texts. You have put in the midnight hours. The barrier is what we call The Invisible Wall—the split-second hesitation between what your mind knows and how your voice projects it.",
        ],
        highlightQuote:
          "People judge your competence by the stillness of your posture and the cadence of your first three sentences.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER 01 • PART II",
        subheading: "ANATOMY OF FIRST IMPRESSIONS",
        body: [
          "Before a single technical argument is evaluated, every room unconsciously runs a status and confidence diagnostic on you:",
        ],
        bullets: [
          "The 1.5-Second Pause: Never rush to fill silence when asked a complex question.",
          "Vocal Down-Inflection: End declarative statements on a steady downward pitch rather than a questioning upward tone.",
          "Spatial Ownership: Occupy your chair and desk without shrinking your shoulders.",
        ],
      },
      {
        pageNumber: 3,
        heading: "CHAPTER 02",
        subheading: "REPROGRAMMING HESITATION",
        body: [
          "Hesitation is not a personality flaw; it is an uncalibrated nervous system response. When you treat communication like a clinical protocol, anxiety loses its grip.",
          "(Share your PDF whenever you are ready, and we will load all the exact chapters and pages right here!)",
        ],
        highlightQuote:
          "True aura is never loud. It is the quiet certainty that you belong in the room.",
      },
    ],
  },
  {
    id: "invisible-art-speaking",
    title: "The Invisible Art of Speaking",
    spineTitle: "ART OF SPEAKING",
    subtitle: "A Mentor's Guide to Communication for the Ambitious",
    author: "Sahil Dhinwa",
    badge: "NEW RELEASE",
    price: "₹499",
    originalPrice: "₹1,299",
    description:
      "Claim your space in a world that tries to make you feel small. This survival guide breaks down how to overcome hesitation, hack your learning style, and command respect in any environment.",
    spineLeather: "cognac",
    coverBg: "from-[#08131c] via-[#0d2233] to-[#050a0f]",
    whatsappText: "Hi Sahil, I want to get a copy of 'The Invisible Art of Speaking' E-Book!",
    pages: [
      {
        pageNumber: 1,
        heading: "PAGE 01",
        subheading: "BREAKING THE SILENCE",
        body: [
          "Most communication books are written for people who grew up with privilege and fluent English environments. This manual was forged for the ambitious outsider.",
          "When you transition from a regional classroom to a global platform, you don't need fancy vocabulary—you need structural clarity.",
        ],
        highlightQuote:
          "Clarity beats complexity every single time.",
      },
      {
        pageNumber: 2,
        heading: "PAGE 02",
        subheading: "THE MENTOR'S CODE",
        body: [
          "Core frameworks practiced daily inside the Veblen Good ecosystem:",
        ],
        bullets: [
          "Precision framing: Structure any answer into Point → Evidence → Clinical/Real-World Impact.",
          "Vocal conviction: Projecting from the diaphragm so your voice never trembles under pressure.",
          "Zero-fear articulation: Turning viva-voce interrogations into calm peer-to-peer conversations.",
        ],
      },
      {
        pageNumber: 3,
        heading: "PAGE 03",
        subheading: "THE DAILY 10-MINUTE DRILL",
        body: [
          "Fluency under pressure is a muscle memory. By practicing aloud for 10 minutes each night using structured case summaries, your brain rewires its default response from panic to poise.",
        ],
      },
    ],
  },
  {
    id: "ghee-khatam",
    title: "NITU BHAIYA KE POHE",
    spineTitle: "GHEE KHATAM",
    subtitle: "OSHO KA BHAI SAWA DOSHO",
    author: "ZUCKERBERG",
    badge: "MASTERPIECE",
    price: "₹499",
    originalPrice: "₹999",
    description: "Apna ghee khatam — No comments. A legendary vault classic.",
    spineLeather: "obsidian",
    coverBg: "from-[#171717] via-[#262626] to-[#0a0a0a]",
    whatsappText: "Hi Sahil, I want to check out the Ghee Khatam / Nitu Bhaiya Ke Pohe vault classic!",
    pages: [
      {
        pageNumber: 1,
        heading: "CHAPTER 01",
        subheading: "GHEE KHATAM PHILOSOPHY",
        body: [
          "When the hostel mess runs out of ghee and exams are tomorrow morning, true hostel survival wisdom begins.",
          "A legendary insider classic preserved in the Veblen Good vault.",
        ],
        highlightQuote: "Apna ghee khatam.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER 02",
        subheading: "NITU BHAIYA KE POHE",
        body: [
          "Fueling late-night Samhita revisions and coding marathons since day one.",
        ],
        bullets: [
          "6:00 AM Pohe runs after an all-nighter.",
          "Unmatched hostel camaraderie.",
          "Zero stress, 100% survival spirit.",
        ],
      },
    ],
  },
];

// Decorative companion spines so the shelf looks like a full 9-volume antique library (like Photo #2)
const SHELF_VOLUMES: {
  slotId: string;
  spineLabel: string;
  romanNum: string;
  leather: "obsidian" | "cognac" | "espresso" | "saddle";
  widthClass: string;
  bookRef: VaultBook;
}[] = [
  { slotId: "vol-1", spineLabel: "UNSPOKEN AURA", romanNum: "VOL. I", leather: "obsidian", widthClass: "w-14 sm:w-20", bookRef: VAULT_BOOKS[0] },
  { slotId: "vol-2", spineLabel: "ART OF SPEAKING", romanNum: "VOL. II", leather: "obsidian", widthClass: "w-14 sm:w-20", bookRef: VAULT_BOOKS[1] },
  { slotId: "vol-3", spineLabel: "CHARAKA SUTRA", romanNum: "VOL. III", leather: "cognac", widthClass: "w-13 sm:w-18", bookRef: VAULT_BOOKS[0] },
  { slotId: "vol-4", spineLabel: "VEBLEN CODE", romanNum: "VOL. IV", leather: "obsidian", widthClass: "w-15 sm:w-22", bookRef: VAULT_BOOKS[1] },
  { slotId: "vol-5", spineLabel: "GHEE KHATAM", romanNum: "VOL. V", leather: "saddle", widthClass: "w-14 sm:w-20", bookRef: VAULT_BOOKS[2] },
  { slotId: "vol-6", spineLabel: "ATREYA MEDICA", romanNum: "VOL. VI", leather: "espresso", widthClass: "w-15 sm:w-21", bookRef: VAULT_BOOKS[0] },
  { slotId: "vol-7", spineLabel: "ASHTANGA HRIDAYA", romanNum: "VOL. VII", leather: "cognac", widthClass: "w-14 sm:w-20", bookRef: VAULT_BOOKS[1] },
  { slotId: "vol-8", spineLabel: "SUSHRUTA TANTRA", romanNum: "VOL. VIII", leather: "espresso", widthClass: "w-14 sm:w-20", bookRef: VAULT_BOOKS[0] },
  { slotId: "vol-9", spineLabel: "GLOBAL AURA", romanNum: "VOL. IX", leather: "saddle", widthClass: "w-14 sm:w-20", bookRef: VAULT_BOOKS[1] },
];

export default function EBooksPage() {
  // Currently opened book in the full-screen 3D page-turning overlay (null = closed!)
  const [openBook, setOpenBook] = useState<VaultBook | null>(null);
  // Active page index inside the open book (0 = Cover/First Page, etc.)
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  // Controls the 3D page-turn animation direction ("next" | "prev" | null)
  const [turningDirection, setTurningDirection] = useState<"next" | "prev" | null>(null);

  const handleOpenBook = (book: VaultBook) => {
    setOpenBook(book);
    setCurrentPageIndex(0);
    setTurningDirection(null);
  };

  const handleCloseBook = useCallback(() => {
    setOpenBook(null);
    setTurningDirection(null);
  }, []);

  const handleNextPage = useCallback(() => {
    if (!openBook) return;
    if (currentPageIndex < openBook.pages.length - 1) {
      setTurningDirection("next");
      setTimeout(() => {
        setCurrentPageIndex((prev) => prev + 1);
        setTurningDirection(null);
      }, 240);
    }
  }, [openBook, currentPageIndex]);

  const handlePrevPage = useCallback(() => {
    if (!openBook) return;
    if (currentPageIndex > 0) {
      setTurningDirection("prev");
      setTimeout(() => {
        setCurrentPageIndex((prev) => prev - 1);
        setTurningDirection(null);
      }, 240);
    }
  }, [openBook, currentPageIndex]);

  // Keyboard navigation (Left/Right arrows to turn pages, ESC to close book)
  useEffect(() => {
    if (!openBook) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseBook();
      if (e.key === "ArrowRight") handleNextPage();
      if (e.key === "ArrowLeft") handlePrevPage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openBook, handleCloseBook, handleNextPage, handlePrevPage]);

  // Leather color presets matching Photo #2 (Antique black, chestnut cognac, espresso, saddle brown)
  const getLeatherGradient = (type: "obsidian" | "cognac" | "espresso" | "saddle") => {
    switch (type) {
      case "obsidian":
        return "linear-gradient(90deg, #0b0b0c 0%, #262528 22%, #1a191b 52%, #0e0e10 85%, #050506 100%)";
      case "cognac":
        return "linear-gradient(90deg, #2d1606 0%, #6e3b16 24%, #572c0e 52%, #381a06 85%, #1f0d02 100%)";
      case "espresso":
        return "linear-gradient(90deg, #160f0a 0%, #38281e 22%, #291d15 52%, #18100b 85%, #0c0705 100%)";
      case "saddle":
        return "linear-gradient(90deg, #381d0a 0%, #80471c 24%, #663613 52%, #422109 85%, #241003 100%)";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-10 pb-28 px-4 sm:px-6 relative overflow-x-hidden transition-colors duration-300">
      
      {/* =================================================================
          CUSTOM CSS FOR ANTIQUE GOLD FILIGREE SPINES & 3D PAGE TURNING
          ================================================================= */}
      <style dangerouslySetInnerHTML={{__html: `
        .spine-rib {
          background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(212,175,55,0.45) 30%, rgba(255,235,160,0.65) 50%, rgba(212,175,55,0.45) 70%, rgba(0,0,0,0.75) 100%);
          box-shadow: 0 3px 5px rgba(0,0,0,0.75), 0 -2px 3px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.3);
        }
        .gold-filigree-band {
          background-image: 
            radial-gradient(circle at 50% 50%, #f3d266 1.5px, transparent 2px),
            radial-gradient(circle at 25% 50%, #d4af37 1px, transparent 1.5px),
            radial-gradient(circle at 75% 50%, #d4af37 1px, transparent 1.5px);
          background-size: 16px 14px;
          border-top: 1px solid rgba(212, 175, 55, 0.75);
          border-bottom: 1px solid rgba(212, 175, 55, 0.75);
        }
        .page-turn-next {
          animation: flipNext 0.24s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: left center;
        }
        .page-turn-prev {
          animation: flipPrev 0.24s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: right center;
        }
        @keyframes flipNext {
          0% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
          100% { transform: perspective(1200px) rotateY(-28deg) scale(0.98); opacity: 0.75; }
        }
        @keyframes flipPrev {
          0% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
          100% { transform: perspective(1200px) rotateY(28deg) scale(0.98); opacity: 0.75; }
        }
      `}} />

      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-surfaceBorder text-xs font-bold text-foreground/80 mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Premium Library
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            Exclusive <span className="text-primary">Career Assets</span>
          </h1>

          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            Invest in our flagship guides and frameworks. Tap any leather-bound volume on the shelf below to pull it forward and turn its pages one by one, or scroll down to claim your copy.
          </p>
        </div>

        {/* =================================================================
            ANTIQUE LEATHER-BOUND SPINE SHELF (MATCHING REFERENCE PHOTO #2)
            ================================================================= */}
        <div className="mb-16 rounded-2xl bg-surface/90 border border-surfaceBorder p-4 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              <BookOpen className="w-4 h-4" /> INTERACTIVE ANTIQUE VAULT SHELF
            </div>
            <span className="text-xs text-foreground/60 font-medium">
              Tap any book spine to pull it forward &amp; turn pages
            </span>
          </div>

          {/* Dark Wood Bookcase Interior */}
          <div className="relative rounded-t-xl bg-gradient-to-b from-[#120a06] via-[#1c1009] to-[#0d0704] pt-6 px-3 sm:px-6 shadow-[inset_0_15px_35px_rgba(0,0,0,0.95)] border-t-4 border-x-4 border-[#2b180d]">
            
            {/* Horizontal Row of Ornate Leather Spines */}
            <div className="flex items-end justify-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
              {SHELF_VOLUMES.map((vol) => {
                const isSelected = openBook?.id === vol.bookRef.id;
                return (
                  <button
                    key={vol.slotId}
                    onClick={() => handleOpenBook(vol.bookRef)}
                    style={{ backgroundImage: getLeatherGradient(vol.leather) }}
                    className={`group relative ${vol.widthClass} h-[330px] sm:h-[400px] shrink-0 rounded-t-[6px] border-x border-black/80 flex flex-col justify-between py-2.5 px-1 sm:px-1.5 cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:brightness-115 hover:shadow-[0_15px_30px_rgba(212,175,55,0.35)] focus:outline-none ${
                      isSelected ? "-translate-y-4 ring-2 ring-[#D4AF37]" : ""
                    }`}
                    title={`Open ${vol.bookRef.title}`}
                  >
                    {/* Top Double Gold Trim & Ornate Scrollwork Band */}
                    <div className="w-full space-y-1">
                      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                      <div className="h-5 sm:h-6 w-full gold-filigree-band rounded-[2px] opacity-90" />
                      <div className="h-1.5 w-full spine-rib rounded-full" />
                    </div>

                    {/* Upper Recessed Leather Panel with Gold Inner Frame & Vertical Title */}
                    <div className="w-full flex-1 my-1.5 p-1 border border-[#D4AF37]/65 rounded-[3px] bg-black/25 shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)] flex items-center justify-center relative overflow-hidden">
                      {/* 4 Corner Gold Ornaments */}
                      <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
                      <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
                      <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
                      <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

                      <span 
                        className="font-serif font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#F5DE93] drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                      >
                        {vol.spineLabel}
                      </span>
                    </div>

                    {/* Middle Raised Rib & Gold Filigree Band */}
                    <div className="w-full space-y-1 my-0.5">
                      <div className="h-1.5 w-full spine-rib rounded-full" />
                      <div className="h-6 sm:h-7 w-full gold-filigree-band rounded-[2px] opacity-90" />
                      <div className="h-1.5 w-full spine-rib rounded-full" />
                    </div>

                    {/* Lower Recessed Leather Panel with Roman Volume Number */}
                    <div className="w-full h-24 sm:h-28 my-1.5 p-1 border border-[#D4AF37]/65 rounded-[3px] bg-black/25 shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center relative">
                      <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
                      <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
                      <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
                      <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

                      <span className="font-serif text-[9px] sm:text-[10px] font-bold tracking-widest text-[#D4AF37]/90">
                        {vol.romanNum}
                      </span>
                      <span className="text-[8px] font-mono uppercase text-[#D4AF37]/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        OPEN
                      </span>
                    </div>

                    {/* Bottom Raised Rib & Gold Filigree Foot */}
                    <div className="w-full space-y-1">
                      <div className="h-1.5 w-full spine-rib rounded-full" />
                      <div className="h-5 sm:h-6 w-full gold-filigree-band rounded-[2px] opacity-90" />
                      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Heavy Mahogany Wooden Shelf Ledge */}
          <div className="h-6 sm:h-7 w-full bg-gradient-to-b from-[#5c2c16] via-[#3d1c0d] to-[#210e05] rounded-b-lg border-t border-[#8a4829] shadow-[0_12px_25px_rgba(0,0,0,0.6)]" />
        </div>

        {/* =================================================================
            STORE LISTINGS BELOW THE SHELF (PRESERVED FROM YOUR SCREENSHOT)
            ================================================================= */}
        <div className="space-y-8">
          {VAULT_BOOKS.map((book) => (
            <div
              key={book.id}
              className="bg-surface border border-surfaceBorder rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12"
            >
              {/* Left Book Cover Preview (Clickable to open the 3D Reader too!) */}
              <div 
                onClick={() => handleOpenBook(book)}
                className="md:col-span-5 bg-[#07111a] p-8 flex items-center justify-center cursor-pointer group relative"
              >
                <div className={`w-48 sm:w-56 aspect-[3/4] rounded-xl bg-gradient-to-br ${book.coverBg} border border-[#D4AF37]/40 p-6 flex flex-col justify-between text-center shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />
                  
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] relative z-10">
                    CAREER GPS EXCLUSIVE
                  </span>

                  <div className="my-auto relative z-10">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug mb-2">
                      {book.title}
                    </h3>
                    <p className="text-[11px] text-white/70 line-clamp-2">
                      {book.subtitle}
                    </p>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-white/10">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold">
                      {book.author}
                    </p>
                    <span className="inline-block mt-1 text-[9px] text-[#D4AF37] underline">
                      Tap to Read Inside →
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Details & WhatsApp Purchase CTA */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                      {book.badge}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#D4AF37]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {book.title}
                  </h2>
                  <p className="text-xs text-foreground/60 font-semibold mb-3">
                    By {book.author}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-primary mb-4">
                    {book.subtitle}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {book.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-3xl font-black text-foreground">{book.price}</span>
                      <span className="text-sm text-foreground/40 line-through font-bold">
                        {book.originalPrice}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                      LIMITED TIME
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleOpenBook(book)}
                      className="w-full py-3.5 px-5 rounded-sm bg-surface hover:bg-foreground/5 text-foreground border border-surfaceBorder font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                      <span>Preview &amp; Turn Pages</span>
                    </button>

                    <a
                      href={`https://wa.me/918769892303?text=${encodeURIComponent(book.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-sm bg-[#113a2b] hover:bg-[#164d39] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Buy via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 text-center mt-3 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> INSTANT DIGITAL DELIVERY
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =================================================================
          FULL-SCREEN PULL-FORWARD 3D BOOK READER MODAL (OVERSHADOWS PAGE)
          Click outside, tap Close, or press ESC to put the book back!
          ================================================================= */}
      {openBook && (
        <div 
          onClick={handleCloseBook}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          {/* Inner Modal Container (Stops propagation so clicking inside book doesn't close it) */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            {/* Top Floating Reader Bar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-[#D4AF37]/40 text-white shadow-xl">
              <div className="flex items-center gap-2.5">
                <BookMarked className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-bold text-sm">{openBook.title}</span>
                <span className="text-xs text-white/50 font-mono">
                  • Page {currentPageIndex + 1} of {openBook.pages.length}
                </span>
              </div>

              <button
                onClick={handleCloseBook}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Put Back on Shelf</span>
              </button>
            </div>

            {/* 3D OPEN LEATHER-BOUND BOOK SPREAD */}
            <div className="w-full bg-gradient-to-b from-[#2b1709] to-[#170b04] p-2.5 sm:p-4 rounded-2xl border-2 border-[#8a5a2b] shadow-[0_30px_90px_rgba(0,0,0,0.95)] relative">
              
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F2E6] text-[#1c1917] rounded-xl overflow-hidden shadow-inner min-h-[420px] sm:min-h-[480px] relative">
                
                {/* Center Book Spine Crease Shadow (Desktop) */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/15 via-black/30 to-black/15 pointer-events-none z-20" />

                {/* LEFT PAGE: Book Cover / Metadata & Tap-Left-to-Go-Back */}
                <div 
                  onClick={handlePrevPage}
                  className="p-6 sm:p-10 border-b md:border-b-0 md:border-r border-[#d6cbb5] flex flex-col justify-between bg-gradient-to-r from-[#EFE8D8] to-[#F7F2E6] cursor-pointer select-none relative group"
                  title={currentPageIndex > 0 ? "Click left page to turn back" : ""}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#786b59] pb-3 mb-6 border-b border-[#dfd5c0]">
                      <span>{openBook.badge}</span>
                      <span>VEBLEN GOOD ARCHIVE</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1c1917] mb-2 leading-tight">
                      {openBook.title}
                    </h2>
                    <p className="font-serif italic text-sm text-[#574e40] mb-6">
                      {openBook.subtitle}
                    </p>

                    <div className="p-4 rounded-lg bg-[#e8dfc9]/70 border border-[#d4c7ac] text-xs text-[#3f382e] leading-relaxed">
                      <p className="font-bold uppercase tracking-wider text-[10px] text-[#8a660f] mb-1">
                        ABOUT THIS VOLUME
                      </p>
                      {openBook.description}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#dfd5c0] flex items-center justify-between text-xs text-[#6e6252]">
                    <span className="font-serif font-bold">Author: {openBook.author}</span>
                    {currentPageIndex > 0 && (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#8a660f] group-hover:-translate-x-1 transition-transform">
                        <ChevronLeft className="w-3.5 h-3.5" /> Prev Page
                      </span>
                    )}
                  </div>
                </div>

                {/* RIGHT PAGE: Active Turning Page Content (Tap Right Page to Turn Forward) */}
                <div 
                  onClick={handleNextPage}
                  className={`p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-l from-[#EFE8D8] to-[#FAF6EC] cursor-pointer select-none relative group ${
                    turningDirection === "next" 
                      ? "page-turn-next" 
                      : turningDirection === "prev" 
                      ? "page-turn-prev" 
                      : ""
                  }`}
                  title={currentPageIndex < openBook.pages.length - 1 ? "Click right page to turn forward" : ""}
                >
                  {(() => {
                    const page = openBook.pages[currentPageIndex];
                    return (
                      <>
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8a660f] pb-3 mb-5 border-b border-[#dfd5c0]">
                            <span>{page.heading || `PAGE 0${page.pageNumber}`}</span>
                            <span>0{page.pageNumber}</span>
                          </div>

                          {page.subheading && (
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917] mb-4 tracking-tight">
                              {page.subheading}
                            </h3>
                          )}

                          <div className="space-y-3.5 font-serif text-sm sm:text-base text-[#2e2923] leading-relaxed">
                            {page.body.map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>

                          {page.bullets && (
                            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#2e2923] font-medium pl-2">
                              {page.bullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-[#8a660f] font-black">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {page.highlightQuote && (
                            <blockquote className="mt-5 p-3.5 border-l-3 border-[#8a660f] bg-[#ede4cf] font-serif italic text-xs sm:text-sm text-[#1c1917]">
                              &ldquo;{page.highlightQuote}&rdquo;
                            </blockquote>
                          )}
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#dfd5c0] flex items-center justify-between text-xs">
                          <span className="font-serif italic text-[#786b59]">
                            — {openBook.author}
                          </span>

                          {currentPageIndex < openBook.pages.length - 1 ? (
                            <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#8a660f] group-hover:translate-x-1 transition-transform">
                              Turn Page <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="font-mono text-[10px] uppercase text-emerald-700 font-bold">
                              End of Preview
                            </span>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>

              </div>
            </div>

            {/* Bottom Page-Turning Controls Bar */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </button>

              <button
                onClick={() => setCurrentPageIndex(0)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono uppercase transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Page 1
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPageIndex === openBook.pages.length - 1}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-amber-300 disabled:opacity-40 text-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Next Page <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
