"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  Sparkles, Star, ShieldCheck, MessageCircle, Eye, 
  BookOpen, ArrowDown, ChevronLeft, ChevronRight, 
  X, RotateCcw, Hand 
} from "lucide-react";

export interface BookPageSpread {
  pageNumber: number;
  heading: string;
  subheading: string;
  body: string[];
  bullets?: string[];
  highlightQuote?: string;
}

export interface CareerAsset {
  id: string;
  title: string;
  coverTitle: string;
  author: string;
  subtitle: string;
  shortSubtitle: string;
  description: string;
  price: string;
  originalPrice: string;
  tag: string;
  color: string;
  spineColor: string;
  coverBgImage: string;
  fileUrl: string;
  previewPages: string[];
  pages: BookPageSpread[];
}

const careerAssets: CareerAsset[] = [
  {
    id: "unspoken-aura",
    title: "The Unspoken Aura",
    coverTitle: "The Unspoken\nAura",
    author: "Sahil Dhinwa",
    subtitle: "Unlocking Your True Personality Through Communication",
    shortSubtitle: "Unlocking Your True Personality",
    description:
      "A Guide for the Real World. Master the art of the aura, overcome the 'Invisible Wall', and command respect in every room you enter.",
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
      "REAL WORLD EXECUTION\n\nStep inside the full guide to unlock your true presence.",
    ],
    pages: [
      {
        pageNumber: 1,
        heading: "CHAPTER I",
        subheading: "The Invisible Wall",
        body: [
          "Why do some people command a room before they even speak? And why do brilliant students from tier-2 and tier-3 towns freeze the moment they step into an elite seminar room or a high-stakes viva?",
          "It is rarely a lack of knowledge. You have memorized the texts. The barrier is The Invisible Wall—the split-second hesitation between what your mind knows and how your voice projects it.",
        ],
        highlightQuote: "People judge your competence by the stillness of your posture and cadence.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER II",
        subheading: "The Aura Protocol",
        body: [
          "Before a single technical argument is evaluated, every room unconsciously runs a confidence diagnostic on you:",
        ],
        bullets: [
          "1. Silence as Leverage: Pause 1.5 seconds before answering complex questions.",
          "2. Micro-Calibrations: End declarative statements on a steady downward pitch.",
          "3. Breaking Hesitation: Occupy your physical space without shrinking your shoulders.",
        ],
      },
      {
        pageNumber: 3,
        heading: "CHAPTER III",
        subheading: "Real World Execution",
        body: [
          "Step inside the full guide to unlock your true presence. Practice the 10-minute daily vocal drill to transform how professors and interview panels perceive you.",
        ],
        highlightQuote: "True aura is never loud. It is the quiet certainty that you belong in the room.",
      },
    ],
  },
  {
    id: "invisible-art",
    title: "The Invisible Art of Speaking",
    coverTitle: "The Invisible Art\nof Speaking",
    author: "Sahil Dhinwa",
    subtitle: "A Mentor's Guide to Communication for the Ambitious",
    shortSubtitle: "A Mentor's Guide for the Ambitious",
    description:
      "Claim your space in a world that tries to make you feel small. This survival guide breaks down how to overcome hesitation and command respect.",
    price: "₹499",
    originalPrice: "₹1,299",
    tag: "New Release",
    color: "from-[#022c22] to-black",
    spineColor: "#064e3b",
    coverBgImage: "/the_invisible_art.jpg",
    fileUrl: "",
    previewPages: [
      "CHAPTER I\nClaiming Your Space\n\nHow to stop shrinking in high-stakes rooms.",
      "THE MENTOR'S CODE\n\n• Precision framing\n• Vocal conviction\n• Zero-fear articulation",
      "FOR THE AMBITIOUS\n\nFlip the script and speak with undeniable authority.",
    ],
    pages: [
      {
        pageNumber: 1,
        heading: "CHAPTER I",
        subheading: "Claiming Your Space",
        body: [
          "How do you stop shrinking in high-stakes rooms? Most communication books are written for people from privileged backgrounds. This manual was forged for the ambitious outsider.",
          "When transitioning to a global platform, you need structural clarity above ornate vocabulary.",
        ],
        highlightQuote: "Clarity beats complexity every single time.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER II",
        subheading: "The Mentor's Code",
        body: [
          "Core frameworks to command immediate respect in any academic environment:",
        ],
        bullets: [
          "Precision Framing: Structure answers into Point → Evidence → Impact.",
          "Vocal Conviction: Projecting from the diaphragm.",
          "Zero-Fear Articulation: Turning viva-voce questions into calm explanations.",
        ],
      },
    ],
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
      "100% FREE ASSET\n\nClick below to read the full masterpiece online right now.",
    ],
    pages: [
      {
        pageNumber: 1,
        heading: "EPISODE I",
        subheading: "Apna Ghee Khatam",
        body: [
          "Legendary hostel wisdom and unfiltered philosophy. When the hostel mess runs out of ghee and exams are tomorrow morning, true survival wisdom begins.",
          "A legendary insider classic preserved in the Veblen Good vault.",
        ],
        highlightQuote: "Apna ghee khatam.",
      },
      {
        pageNumber: 2,
        heading: "EPISODE II",
        subheading: "Sawa Dosho Sutras",
        body: [
          "When life serves pohe, check the ghee reserves first. Fueling late-night Samhita revisions and coding marathons since day one.",
        ],
        bullets: [
          "6:00 AM Pohe runs after an all-nighter.",
          "Unmatched hostel camaraderie.",
          "100% Free Asset — Click Read Online below to open the full PDF.",
        ],
      },
    ],
  },
];

const ANTIQUE_SHELF_SPINES = [
  { slotId: "s1", spineTitle: "THE UNSPOKEN AURA", volNumber: "VOL. I", leatherTone: "obsidian" as const, widthClass: "w-14 sm:w-20", assetIndex: 0 },
  { slotId: "s2", spineTitle: "ART OF SPEAKING", volNumber: "VOL. II", leatherTone: "obsidian" as const, widthClass: "w-14 sm:w-20", assetIndex: 1 },
  { slotId: "s3", spineTitle: "AURA PROTOCOL", volNumber: "VOL. III", leatherTone: "cognac" as const, widthClass: "w-13 sm:w-18", assetIndex: 0 },
  { slotId: "s4", spineTitle: "MENTOR'S CODE", volNumber: "VOL. IV", leatherTone: "obsidian" as const, widthClass: "w-15 sm:w-21", assetIndex: 1 },
  { slotId: "s5", spineTitle: "GHEE KHATAM", volNumber: "VOL. V", leatherTone: "saddle" as const, widthClass: "w-14 sm:w-20", assetIndex: 2 },
  { slotId: "s6", spineTitle: "NITU BHAIYA POHE", volNumber: "VOL. VI", leatherTone: "espresso" as const, widthClass: "w-15 sm:w-20", assetIndex: 2 },
  { slotId: "s7", spineTitle: "VEBLEN GOOD", volNumber: "VOL. VII", leatherTone: "cognac" as const, widthClass: "w-14 sm:w-19", assetIndex: 0 },
  { slotId: "s8", spineTitle: "GLOBAL PRESENCE", volNumber: "VOL. VIII", leatherTone: "espresso" as const, widthClass: "w-14 sm:w-20", assetIndex: 1 },
  { slotId: "s9", spineTitle: "SAWA DOSHO", volNumber: "VOL. IX", leatherTone: "saddle" as const, widthClass: "w-14 sm:w-20", assetIndex: 2 },
];

export default function EBooksDirectory() {
  const phoneNumber = "918769892303";
  const [activeBook, setActiveBook] = useState<CareerAsset | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);
  
  // Swipe & Page-Curl Physics State
  const [flipState, setFlipState] = useState<"idle" | "turning-next" | "turning-prev">("idle");
  const [dragDeltaX, setDragDeltaX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartXRef = useRef<number | null>(null);

  const getWhatsappUrl = (bookTitle: string) => {
    const message = encodeURIComponent(`Hi Sahil, I want to purchase the E-Book: '${bookTitle}'!`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const scrollToCard = (id: string) => {
    const el = document.getElementById(`card-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openBookModal = (asset: CareerAsset) => {
    setActiveBook(asset);
    setPageIndex(0);
    setFlipState("idle");
    setDragDeltaX(0);
  };

  const closeBookModal = useCallback(() => {
    setActiveBook(null);
    setFlipState("idle");
    setDragDeltaX(0);
    setIsDragging(false);
  }, []);

  const triggerNextPage = useCallback(() => {
    if (!activeBook || flipState !== "idle") return;
    if (pageIndex < activeBook.pages.length - 1) {
      setFlipState("turning-next");
      setTimeout(() => {
        setPageIndex((p) => p + 1);
        setFlipState("idle");
      }, 450);
    }
  }, [activeBook, pageIndex, flipState]);

  const triggerPrevPage = useCallback(() => {
    if (!activeBook || flipState !== "idle") return;
    if (pageIndex > 0) {
      setFlipState("turning-prev");
      setTimeout(() => {
        setPageIndex((p) => p - 1);
        setFlipState("idle");
      }, 450);
    }
  }, [activeBook, pageIndex, flipState]);

  useEffect(() => {
    if (!activeBook) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBookModal();
      if (e.key === "ArrowRight") triggerNextPage();
      if (e.key === "ArrowLeft") triggerPrevPage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeBook, closeBookModal, triggerNextPage, triggerPrevPage]);

  // Touch Swipe Handlers for Realistic Curling
  const handlePointerStart = (clientX: number) => {
    if (flipState !== "idle") return;
    dragStartXRef.current = clientX;
    setIsDragging(true);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || dragStartXRef.current === null) return;
    const delta = clientX - dragStartXRef.current;
    setDragDeltaX(Math.max(-250, Math.min(250, delta)));
  };

  const handlePointerEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (dragDeltaX < -threshold) {
      triggerNextPage();
    } else if (dragDeltaX > threshold) {
      triggerPrevPage();
    }
    setDragDeltaX(0);
    dragStartXRef.current = null;
  };

  const getLeatherGradient = (tone: "obsidian" | "cognac" | "espresso" | "saddle") => {
    switch (tone) {
      case "obsidian": return "linear-gradient(90deg, #09090b 0%, #27272a 24%, #18181b 52%, #09090b 85%, #030304 100%)";
      case "cognac": return "linear-gradient(90deg, #2b1405 0%, #703b15 24%, #572b0c 52%, #361905 85%, #1c0b02 100%)";
      case "espresso": return "linear-gradient(90deg, #140d08 0%, #3a281d 24%, #281b13 52%, #160e09 85%, #0a0604 100%)";
      case "saddle": return "linear-gradient(90deg, #361b08 0%, #82471c 24%, #633412 52%, #3d1e07 85%, #210e02 100%)";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col transition-colors duration-300">
      
      <style dangerouslySetInnerHTML={{__html: `
        .emerald-vault { position: fixed; inset: 0; overflow: hidden; perspective: 1500px; z-index: 0; pointer-events: none; }
        .emerald-panel { position: absolute; border-radius: 16px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(17, 66, 50, 0.02) 100%); backdrop-filter: blur(8px); border-top: 1px solid rgba(16, 185, 129, 0.3); border-left: 1px solid rgba(16, 185, 129, 0.3); box-shadow: 0 25px 50px -12px rgba(17, 66, 50, 0.15); transform-style: preserve-3d; }
        .panel-1 { width: 18vw; height: 85vh; top: -10%; left: 5%; }
        .panel-2 { width: 25vw; height: 90vh; top: 15%; left: 25%; }
        .panel-3 { width: 15vw; height: 75vh; top: 5%; left: 55%; }
        .panel-4 { width: 20vw; height: 110vh; top: -5%; right: 5%; }
        .panel-5 { width: 30vw; height: 60vh; bottom: -10%; left: 40%; }

        .spine-rib {
          background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(212,175,55,0.5) 30%, rgba(255,235,165,0.75) 50%, rgba(212,175,55,0.5) 70%, rgba(0,0,0,0.8) 100%);
          box-shadow: 0 3px 5px rgba(0,0,0,0.75), inset 0 1px 1px rgba(255,255,255,0.3);
        }
        .gold-filigree-band {
          background-image: 
            radial-gradient(circle at 50% 50%, #f5d76e 1.5px, transparent 2px),
            radial-gradient(circle at 22% 50%, #d4af37 1px, transparent 1.5px);
          background-size: 16px 14px;
          border-top: 1px solid rgba(212, 175, 55, 0.75);
          border-bottom: 1px solid rgba(212, 175, 55, 0.75);
        }
        .bookshelf-plank {
          height: 28px;
          background: linear-gradient(180deg, #42200e 0%, #261106 65%, #120702 100%);
          border-top: 2px solid rgba(212, 175, 55, 0.55);
          border-radius: 0 0 8px 8px;
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.85);
        }

        /* LOCKED FIXED-ASPECT BOOK CONTAINER (Prevents size jumping) */
        .fixed-book-container {
          width: 100%;
          max-width: 900px;
          height: 70vh;
          min-height: 480px;
          max-height: 650px;
          background: #EFECE6;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: inset 0 0 25px rgba(0,0,0,0.12);
        }

        /* Scrollable content areas inside the locked book */
        .book-content-scroll {
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(138, 102, 15, 0.3) transparent;
        }

        /* 3D Page Curl Animations */
        .page-corner-peel {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, transparent 46%, rgba(0,0,0,0.15) 48%, #fff 50%, #e6dec8 68%, #cbbd9f 100%);
          border-top-left-radius: 12px;
          box-shadow: -6px -6px 16px rgba(0, 0, 0, 0.2);
          transition: width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease;
          pointer-events: none;
          z-index: 25;
        }
        .swipe-active .page-corner-peel {
          width: 100px;
          height: 100px;
          box-shadow: -12px -12px 28px rgba(0, 0, 0, 0.3);
        }

        .arching-page-next {
          animation: realCurlNext 0.45s cubic-bezier(0.32, 0.08, 0.24, 1) forwards;
          transform-origin: left center;
        }
        .arching-page-prev {
          animation: realCurlPrev 0.45s cubic-bezier(0.32, 0.08, 0.24, 1) forwards;
          transform-origin: left center;
        }

        @keyframes realCurlNext {
          0% { transform: perspective(1500px) rotateY(0deg) translateZ(0); opacity: 1; }
          50% { transform: perspective(1500px) rotateY(-90deg) translateZ(30px); background: #ffffff; box-shadow: -20px 0 30px rgba(0,0,0,0.2); }
          100% { transform: perspective(1500px) rotateY(-180deg) translateZ(0); opacity: 0; }
        }
        @keyframes realCurlPrev {
          0% { transform: perspective(1500px) rotateY(-180deg) translateZ(0); opacity: 0; }
          50% { transform: perspective(1500px) rotateY(-90deg) translateZ(30px); background: #ffffff; box-shadow: -20px 0 30px rgba(0,0,0,0.2); opacity: 1; }
          100% { transform: perspective(1500px) rotateY(0deg) translateZ(0); opacity: 1; }
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
          
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder text-sm font-bold text-primary mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-warning" /> Premium Library
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Career Assets</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 font-medium max-w-2xl bg-surface/40 backdrop-blur-[2px] rounded-lg p-2">
              Invest in our flagship guides. Tap any antique leather volume on the shelf below to open it in a fixed, stable 3D reader.
            </p>
          </div>

          {/* =================ANTIQUE SHELF================= */}
          <div className="mb-16 md:mb-24 bg-surface/60 backdrop-blur-md border border-surfaceBorder rounded-sm pt-8 pb-8 px-4 sm:px-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warning">
                <BookOpen className="w-4 h-4" /> Interactive 3D Vault Shelf
              </div>
              <span className="text-[11px] font-medium text-foreground/60">
                Tap any volume to open reader
              </span>
            </div>

            <div className="mx-auto max-w-5xl rounded-t-xl bg-gradient-to-b from-[#110905] via-[#1b0f08] to-[#0b0603] pt-6 px-3 sm:px-6 shadow-[inset_0_18px_40px_rgba(0,0,0,0.95)] border-t-4 border-x-4 border-[#2b180d]">
              <div className="flex items-end justify-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                {ANTIQUE_SHELF_SPINES.map((spine) => {
                  const targetAsset = careerAssets[spine.assetIndex];
                  const isCurrentlyOpen = activeBook?.id === targetAsset.id;

                  return (
                    <button
                      key={spine.slotId}
                      type="button"
                      onClick={() => openBookModal(targetAsset)}
                      style={{ backgroundImage: getLeatherGradient(spine.leatherTone) }}
                      className={`group relative ${spine.widthClass} h-[310px] sm:h-[380px] shrink-0 rounded-t-[6px] border-x border-black/85 flex flex-col justify-between py-2.5 px-1 sm:px-1.5 cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:brightness-115 hover:shadow-[0_15px_30px_rgba(212,175,55,0.35)] focus:outline-none ${
                        isCurrentlyOpen ? "-translate-y-4 ring-2 ring-[#D4AF37]" : ""
                      }`}
                    >
                      <div className="w-full space-y-1">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                        <div className="h-5 sm:h-6 w-full gold-filigree-band rounded-[2px]" />
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                      </div>

                      <div className="w-full flex-1 my-1.5 p-1 border border-[#D4AF37]/65 rounded-[3px] bg-black/25 flex items-center justify-center relative overflow-hidden">
                        <span
                          className="font-serif font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#F5DE93] whitespace-nowrap"
                          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                        >
                          {spine.spineTitle}
                        </span>
                      </div>

                      <div className="w-full space-y-1 my-0.5">
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                        <div className="h-6 sm:h-7 w-full gold-filigree-band rounded-[2px]" />
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                      </div>

                      <div className="w-full h-22 sm:h-26 my-1.5 p-1 border border-[#D4AF37]/65 rounded-[3px] bg-black/25 flex flex-col items-center justify-center relative">
                        <span className="font-serif text-[9px] sm:text-[10px] font-bold tracking-widest text-[#D4AF37]/90">
                          {spine.volNumber}
                        </span>
                      </div>

                      <div className="w-full space-y-1">
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                        <div className="h-5 sm:h-6 w-full gold-filigree-band rounded-[2px]" />
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="bookshelf-plank mx-auto max-w-5xl"></div>
          </div>

          {/* =================ORIGINAL CARDS================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {careerAssets.map((asset) => (
              <div
                id={`card-${asset.id}`}
                key={asset.id}
                className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-xl flex flex-col sm:flex-row overflow-hidden group"
              >
                <div 
                  onClick={() => openBookModal(asset)}
                  className={`w-full sm:w-2/5 py-10 px-4 sm:p-6 md:p-8 flex items-center justify-center bg-gradient-to-br ${asset.color} relative overflow-hidden cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-warning/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  <div 
                    className="w-[200px] sm:w-full max-w-[220px] aspect-[54/85] rounded-md shadow-2xl flex flex-col justify-between p-4 relative z-10 border border-white/10 overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.9))`,
                      backgroundImage: `url(${asset.coverBgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <h3 className="font-heading font-bold text-white text-lg leading-tight mb-1">{asset.coverTitle}</h3>
                    <p className="text-[9px] text-gray-300">{asset.author}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold bg-warning/10 text-warning px-2 py-1 rounded-sm uppercase">{asset.tag}</span>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-2 mb-1">{asset.title}</h2>
                    <p className="text-xs text-foreground/50 mb-3">By {asset.author}</p>
                    <p className="text-foreground/70 text-sm mb-6">{asset.description}</p>
                  </div>

                  <div>
                    <div className="flex items-end gap-3 mb-4">
                      <span className="text-3xl font-heading font-bold text-foreground">{asset.price}</span>
                      <span className="text-sm text-foreground/40 line-through">{asset.originalPrice}</span>
                    </div>

                    {asset.price === "FREE" ? (
                      <a href={asset.fileUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-sm flex items-center justify-center gap-2">
                        <Eye className="w-5 h-5" /> Read Online
                      </a>
                    ) : (
                      <a href={getWhatsappUrl(asset.title)} target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-sm flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" /> Buy via WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* =================================================================
          FIXED-ASPECT 3D BOOK READER (LOCKED HEIGHT, MOBILE 1-PAGE, DESKTOP 2-PAGE SPREAD)
          ================================================================= */}
      {activeBook && (
        <div 
          onClick={closeBookModal}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl flex flex-col items-center">
            
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between mb-4 px-4 py-3 rounded-xl bg-zinc-900 border border-[#D4AF37]/40 text-white shadow-xl">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-bold text-sm truncate max-w-[150px] sm:max-w-xs">{activeBook.title}</span>
                <span className="hidden sm:inline text-xs text-white/60 font-mono">
                  • Page {pageIndex + 1} / {activeBook.pages.length}
                </span>
              </div>

              <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-mono">
                <Hand className="w-3.5 h-3.5" />
                <span>Swipe Left/Right to Turn Pages</span>
              </div>

              <button
                type="button"
                onClick={closeBookModal}
                className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold uppercase transition-all"
              >
                <X className="w-3.5 h-3.5 inline mr-1" /> Close
              </button>
            </div>

            {/* LOCKED SPREAD CONTAINER */}
            {/* Mobile: 1 Column (Right Page Only). Desktop: 2 Columns (Left Index + Right Content) */}
            <div 
              className={`fixed-book-container relative border-2 border-[#78512a] shadow-[0_35px_90px_rgba(0,0,0,0.95)] flex flex-col md:flex-row ${isDragging ? "swipe-active" : ""}`}
              onTouchStart={(e) => handlePointerStart(e.touches[0].clientX)}
              onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
              onTouchEnd={handlePointerEnd}
              onMouseDown={(e) => handlePointerStart(e.clientX)}
              onMouseMove={(e) => handlePointerMove(e.clientX)}
              onMouseUp={handlePointerEnd}
              onMouseLeave={() => isDragging && handlePointerEnd()}
            >
              {/* Center Spine Crease (Hidden on Mobile) */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-transparent via-black/20 to-transparent pointer-events-none z-30" />

              {/* LEFT PAGE (Cover / Index) - Hidden on Mobile to maintain single-page book feel */}
              <div className="hidden md:flex w-1/2 p-6 lg:p-10 border-r border-[#d6cfc2] flex-col justify-between bg-gradient-to-r from-[#E2DDD2] via-[#F2EFE9] to-[#EAE5DA] select-none book-content-scroll">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#78716c] pb-3 mb-6 border-b border-[#d6cfc2]">
                    <span>{activeBook.tag}</span>
                    <span>VEBLEN GOOD ARCHIVE</span>
                  </div>

                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#1c1917] mb-2 leading-tight">
                    {activeBook.title}
                  </h2>
                  <p className="font-serif italic text-sm text-[#57534e] mb-6">
                    {activeBook.subtitle}
                  </p>

                  <div className="p-4 rounded-lg bg-black/[0.04] border border-black/10 text-xs text-[#44403c] leading-relaxed">
                    <p className="font-bold uppercase tracking-wider text-[10px] text-[#8a660f] mb-2">SYNOPSIS</p>
                    {activeBook.description}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#d6cfc2] flex items-center justify-between text-xs text-[#57534e]">
                  <span className="font-serif font-bold">By {activeBook.author}</span>
                </div>
              </div>

              {/* RIGHT PAGE (Dynamic Content) - Takes full width on mobile */}
              <div 
                className={`w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-gradient-to-l from-[#E4DFD3] via-[#FAF8F5] to-[#F0ECE1] select-none relative book-content-scroll ${
                  flipState === "turning-next" ? "arching-page-next" : flipState === "turning-prev" ? "arching-page-prev" : ""
                }`}
                style={{
                  transform: isDragging && dragDeltaX < 0 
                    ? `perspective(1500px) rotateY(${Math.max(-45, dragDeltaX * 0.4)}deg)` 
                    : undefined
                }}
              >
                <div className="page-corner-peel" />

                {(() => {
                  const page = activeBook.pages[pageIndex];
                  return (
                    <>
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8a660f] pb-3 mb-5 border-b border-[#d6cfc2]">
                          <span>{page.heading}</span>
                          <span>PAGE 0{page.pageNumber}</span>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917] mb-4 tracking-tight">
                          {page.subheading}
                        </h3>

                        <div className="space-y-4 font-serif text-sm sm:text-base text-[#292524] leading-relaxed">
                          {page.body.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>

                        {page.bullets && (
                          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#292524] font-medium pl-1">
                            {page.bullets.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#8a660f] font-black">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {page.highlightQuote && (
                          <blockquote className="mt-6 p-4 border-l-3 border-[#8a660f] bg-[#ede4cf]/80 font-serif italic text-sm text-[#1c1917]">
                            &ldquo;{page.highlightQuote}&rdquo;
                          </blockquote>
                        )}
                      </div>

                      <div className="pt-6 mt-8 border-t border-[#d6cfc2] flex items-center justify-between text-xs">
                        <span className="font-serif italic text-[#78716c]">Swipe left to turn →</span>
                        <span className="font-mono text-[11px] font-bold text-[#8a660f]">
                          {pageIndex + 1} / {activeBook.pages.length}
                        </span>
                      </div>
                    </>
                  );
                })()}
              </div>

            </div>

            {/* Bottom Controls */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={triggerPrevPage}
                disabled={pageIndex === 0}
                className="px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-white border border-white/15 text-xs font-bold uppercase transition-all"
              >
                <ChevronLeft className="w-4 h-4 inline mr-1" /> Prev
              </button>

              <span className="text-xs text-white/50 font-mono hidden sm:inline">
                {pageIndex + 1} / {activeBook.pages.length}
              </span>

              <button
                type="button"
                onClick={triggerNextPage}
                disabled={pageIndex === activeBook.pages.length - 1}
                className="px-5 py-3 rounded-full bg-[#D4AF37] hover:bg-amber-300 disabled:opacity-40 text-black font-black text-xs uppercase transition-all"
              >
                Next <ChevronRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
