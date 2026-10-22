"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  Sparkles, Star, ShieldCheck, MessageCircle, Eye, 
  BookOpen, ArrowDown, ChevronLeft, ChevronRight, 
  X, RotateCcw, Hand 
} from "lucide-react";

// ==========================================
// 📚 PAGE CONTENT INTERFACE & REPOSITORY
// ==========================================
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
          "It is rarely a lack of knowledge. You have memorized the texts and put in the midnight hours. The barrier is The Invisible Wall—the split-second hesitation between what your mind knows and how your voice projects it.",
        ],
        highlightQuote:
          "People judge your competence by the stillness of your posture and the cadence of your first three sentences.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER II",
        subheading: "The Aura Protocol",
        body: [
          "Before a single technical argument is evaluated, every room unconsciously runs a status and confidence diagnostic on you:",
        ],
        bullets: [
          "1. Silence as Leverage: Pause 1.5 seconds before answering complex questions instead of rushing to fill the air.",
          "2. Micro-Calibrations: End declarative statements on a steady downward pitch rather than a questioning upward tone.",
          "3. Breaking Hesitation: Occupy your physical space without shrinking your shoulders.",
        ],
      },
      {
        pageNumber: 3,
        heading: "CHAPTER III",
        subheading: "Reprogramming the Nervous System",
        body: [
          "Hesitation is not a personality flaw; it is an uncalibrated autonomic response. When you treat communication like a structured clinical protocol, stage fright loses its grip.",
          "Walk into every viva, interview, and international symposium knowing your preparation gives you the right to be heard.",
        ],
        highlightQuote:
          "True aura is never loud. It is the quiet certainty that you belong in the room.",
      },
      {
        pageNumber: 4,
        heading: "CHAPTER IV",
        subheading: "Real World Execution",
        body: [
          "Step inside the full guide to unlock your true presence. Practice the 10-minute daily vocal drill to transform how professors, peers, and interview panels perceive you.",
        ],
        bullets: [
          "The 3-Second Room Entry Framework",
          "Eye-Contact Geometry for Panel Interviews",
          "Turning Interrogation into Peer Conversation",
        ],
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
      "Claim your space in a world that tries to make you feel small. This survival guide breaks down how to overcome hesitation, hack your learning style, and command respect in any environment.",
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
      "FOR THE AMBITIOUS\n\nFlip the script and speak with undeniable authority.",
    ],
    pages: [
      {
        pageNumber: 1,
        heading: "CHAPTER I",
        subheading: "Claiming Your Space",
        body: [
          "How do you stop shrinking in high-stakes rooms and conversations? Most communication books are written for people who grew up in privileged, fluent environments. This manual was forged for the ambitious outsider.",
          "When you transition from a regional classroom to a global platform, you do not need ornamental vocabulary—you need structural clarity.",
        ],
        highlightQuote: "Clarity beats complexity every single time.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER II",
        subheading: "The Mentor's Code",
        body: [
          "Core frameworks practiced daily inside the Veblen Good ecosystem to command immediate respect:",
        ],
        bullets: [
          "Precision Framing: Structure any answer into Point → Evidence → Real-World Impact.",
          "Vocal Conviction: Projecting from the diaphragm so your voice never trembles under pressure.",
          "Zero-Fear Articulation: Turning intimidating viva-voce questions into calm, structured explanations.",
        ],
      },
      {
        pageNumber: 3,
        heading: "CHAPTER III",
        subheading: "For the Ambitious",
        body: [
          "Fluency under pressure is muscle memory. By practicing aloud for 10 minutes each night using structured case summaries, your brain rewires its default response from panic to poise.",
          "Flip the script and speak with undeniable authority.",
        ],
        highlightQuote:
          "Confidence is forged when deep domain mastery meets unshakeable verbal structure.",
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

// 9-Volume Antique Leather Spine Shelf Configuration (Matching Reference Photo #2)
const ANTIQUE_SHELF_SPINES: {
  slotId: string;
  spineTitle: string;
  volNumber: string;
  leatherTone: "obsidian" | "cognac" | "espresso" | "saddle";
  widthClass: string;
  assetIndex: number;
}[] = [
  { slotId: "s1", spineTitle: "THE UNSPOKEN AURA", volNumber: "VOL. I", leatherTone: "obsidian", widthClass: "w-14 sm:w-20", assetIndex: 0 },
  { slotId: "s2", spineTitle: "ART OF SPEAKING", volNumber: "VOL. II", leatherTone: "obsidian", widthClass: "w-14 sm:w-20", assetIndex: 1 },
  { slotId: "s3", spineTitle: "AURA PROTOCOL", volNumber: "VOL. III", leatherTone: "cognac", widthClass: "w-13 sm:w-18", assetIndex: 0 },
  { slotId: "s4", spineTitle: "MENTOR'S CODE", volNumber: "VOL. IV", leatherTone: "obsidian", widthClass: "w-15 sm:w-21", assetIndex: 1 },
  { slotId: "s5", spineTitle: "GHEE KHATAM", volNumber: "VOL. V", leatherTone: "saddle", widthClass: "w-14 sm:w-20", assetIndex: 2 },
  { slotId: "s6", spineTitle: "NITU BHAIYA POHE", volNumber: "VOL. VI", leatherTone: "espresso", widthClass: "w-15 sm:w-20", assetIndex: 2 },
  { slotId: "s7", spineTitle: "VEBLEN GOOD", volNumber: "VOL. VII", leatherTone: "cognac", widthClass: "w-14 sm:w-19", assetIndex: 0 },
  { slotId: "s8", spineTitle: "GLOBAL PRESENCE", volNumber: "VOL. VIII", leatherTone: "espresso", widthClass: "w-14 sm:w-20", assetIndex: 1 },
  { slotId: "s9", spineTitle: "SAWA DOSHO", volNumber: "VOL. IX", leatherTone: "saddle", widthClass: "w-14 sm:w-20", assetIndex: 2 },
];

export default function EBooksDirectory() {
  const phoneNumber = "918769892303";

  // Active Book Pulled Forward onto the Screen (null = closed)
  const [activeBook, setActiveBook] = useState<CareerAsset | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);

  // Realistic 3D Page-Curl & Finger-Swipe State
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
      }, 520);
    }
  }, [activeBook, pageIndex, flipState]);

  const triggerPrevPage = useCallback(() => {
    if (!activeBook || flipState !== "idle") return;
    if (pageIndex > 0) {
      setFlipState("turning-prev");
      setTimeout(() => {
        setPageIndex((p) => p - 1);
        setFlipState("idle");
      }, 520);
    }
  }, [activeBook, pageIndex, flipState]);

  // Keyboard Support (ArrowRight, ArrowLeft, Escape)
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

  // Touch & Mouse Swipe Handlers (Swipe Left = Next Page, Swipe Right = Previous Page)
  const handlePointerStart = (clientX: number) => {
    if (flipState !== "idle") return;
    dragStartXRef.current = clientX;
    setIsDragging(true);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || dragStartXRef.current === null) return;
    const delta = clientX - dragStartXRef.current;
    setDragDeltaX(Math.max(-220, Math.min(220, delta)));
  };

  const handlePointerEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 45;
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
      case "obsidian":
        return "linear-gradient(90deg, #09090b 0%, #27272a 24%, #18181b 52%, #09090b 85%, #030304 100%)";
      case "cognac":
        return "linear-gradient(90deg, #2b1405 0%, #703b15 24%, #572b0c 52%, #361905 85%, #1c0b02 100%)";
      case "espresso":
        return "linear-gradient(90deg, #140d08 0%, #3a281d 24%, #281b13 52%, #160e09 85%, #0a0604 100%)";
      case "saddle":
        return "linear-gradient(90deg, #361b08 0%, #82471c 24%, #633412 52%, #3d1e07 85%, #210e02 100%)";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* =================================================================
          3D ANIMATED BACKGROUND + ANTIQUE SPINE & REALISTIC PAGE CURL CSS
          ================================================================= */}
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

        /* Antique Leather Spine Filigree & Raised Ribs */
        .spine-rib {
          background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(212,175,55,0.5) 30%, rgba(255,235,165,0.75) 50%, rgba(212,175,55,0.5) 70%, rgba(0,0,0,0.8) 100%);
          box-shadow: 0 3px 5px rgba(0,0,0,0.75), 0 -2px 3px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.3);
        }
        .gold-filigree-band {
          background-image: 
            radial-gradient(circle at 50% 50%, #f5d76e 1.5px, transparent 2px),
            radial-gradient(circle at 22% 50%, #d4af37 1px, transparent 1.5px),
            radial-gradient(circle at 78% 50%, #d4af37 1px, transparent 1.5px);
          background-size: 16px 14px;
          border-top: 1px solid rgba(212, 175, 55, 0.75);
          border-bottom: 1px solid rgba(212, 175, 55, 0.75);
        }
        .bookshelf-plank {
          position: relative;
          height: 28px;
          background: linear-gradient(180deg, #42200e 0%, #261106 65%, #120702 100%);
          border-top: 2px solid rgba(212, 175, 55, 0.55);
          border-radius: 0 0 8px 8px;
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.85);
        }

        /* =========================================================
           REALISTIC 3D ARCHING PAGE CURL & CORNER PEEL ENGINE
           ========================================================= */
        .book-open-perspective {
          perspective: 2000px;
        }

        /* Realistic Bottom-Right Corner Curl Peel (Matches Photo #1) */
        .page-corner-peel {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 58px;
          height: 58px;
          background: linear-gradient(
            135deg,
            transparent 46%,
            rgba(0, 0, 0, 0.18) 48%,
            #ffffff 50%,
            #e6dec8 68%,
            #cbbd9f 100%
          );
          border-top-left-radius: 12px;
          box-shadow: -6px -6px 16px rgba(0, 0, 0, 0.22);
          transition: width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease;
          pointer-events: none;
          z-index: 25;
        }
        .right-page-surface:hover .page-corner-peel {
          width: 82px;
          height: 82px;
          box-shadow: -10px -10px 24px rgba(0, 0, 0, 0.32);
        }

        /* 3D Arching Sheet Mid-Turn Animation (Matches Photo #2) */
        .arching-page-next {
          animation: realCurlNext 0.52s cubic-bezier(0.32, 0.08, 0.24, 1) forwards;
          transform-origin: left center;
          transform-style: preserve-3d;
        }
        .arching-page-prev {
          animation: realCurlPrev 0.52s cubic-bezier(0.32, 0.08, 0.24, 1) forwards;
          transform-origin: left center;
          transform-style: preserve-3d;
        }

        @keyframes realCurlNext {
          0% {
            transform: rotateY(0deg) skewY(0deg) translateZ(0px);
            background: linear-gradient(90deg, #e5dec9 0%, #FAF6EC 15%, #F3ECE0 100%);
            box-shadow: 0 0 0 rgba(0,0,0,0);
          }
          45% {
            transform: rotateY(-88deg) skewY(-4deg) translateZ(26px);
            background: linear-gradient(90deg, #d5ccb4 0%, #ffffff 45%, #dfd6c1 100%);
            box-shadow: -28px 18px 45px rgba(0, 0, 0, 0.42);
          }
          100% {
            transform: rotateY(-178deg) skewY(0deg) translateZ(2px);
            background: linear-gradient(90deg, #e5dec9 0%, #f5efe2 100%);
            box-shadow: -6px 4px 16px rgba(0, 0, 0, 0.2);
            opacity: 0;
          }
        }

        @keyframes realCurlPrev {
          0% {
            transform: rotateY(-175deg) skewY(0deg) translateZ(2px);
            background: linear-gradient(90deg, #d5ccb4 0%, #f5efe2 100%);
            box-shadow: -8px 6px 20px rgba(0, 0, 0, 0.25);
          }
          50% {
            transform: rotateY(-85deg) skewY(4deg) translateZ(26px);
            background: linear-gradient(90deg, #d5ccb4 0%, #ffffff 50%, #e2d9c5 100%);
            box-shadow: -28px 18px 45px rgba(0, 0, 0, 0.42);
          }
          100% {
            transform: rotateY(0deg) skewY(0deg) translateZ(0px);
            background: linear-gradient(90deg, #e5dec9 0%, #FAF6EC 100%);
            box-shadow: 0 0 0 rgba(0,0,0,0);
          }
        }
      `}} />

      {/* 3D Animated Background Panels (100% Preserved) */}
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
              Invest in our flagship guides and frameworks. Tap any antique leather volume on the shelf below to pull it forward and swipe through its pages like a real book, or scroll down to claim your copy.
            </p>
          </div>

          {/* =========================================================
              📚 TOP ANTIQUE LEATHER SPINE SHELF (MATCHING PHOTO #2)
             ========================================================= */}
          <div className="mb-16 md:mb-24 bg-surface/60 backdrop-blur-md border border-surfaceBorder rounded-sm pt-8 pb-8 px-4 sm:px-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-warning/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 px-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warning">
                <BookOpen className="w-4 h-4" /> Interactive 3D Vault Shelf
              </div>
              <span className="text-[11px] font-medium text-foreground/60">
                Tap any leather spine to pull the book forward &amp; swipe pages
              </span>
            </div>

            {/* Dark Mahogany Bookcase Niche */}
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
                      title={`Open ${targetAsset.title}`}
                    >
                      {/* Top Gold Trim & Filigree Band */}
                      <div className="w-full space-y-1">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                        <div className="h-5 sm:h-6 w-full gold-filigree-band rounded-[2px] opacity-90" />
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                      </div>

                      {/* Upper Recessed Framed Leather Panel */}
                      <div className="w-full flex-1 my-1.5 p-1 border border-[#D4AF37]/65 rounded-[3px] bg-black/25 shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)] flex items-center justify-center relative overflow-hidden">
                        <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
                        <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
                        <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

                        <span
                          className="font-serif font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#F5DE93] drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] whitespace-nowrap"
                          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                        >
                          {spine.spineTitle}
                        </span>
                      </div>

                      {/* Middle Raised Rib & Ornate Gold Band */}
                      <div className="w-full space-y-1 my-0.5">
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                        <div className="h-6 sm:h-7 w-full gold-filigree-band rounded-[2px] opacity-90" />
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                      </div>

                      {/* Lower Recessed Panel with Volume Number */}
                      <div className="w-full h-22 sm:h-26 my-1.5 p-1 border border-[#D4AF37]/65 rounded-[3px] bg-black/25 shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center relative">
                        <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
                        <span className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
                        <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

                        <span className="font-serif text-[9px] sm:text-[10px] font-bold tracking-widest text-[#D4AF37]/90">
                          {spine.volNumber}
                        </span>
                        <span className="text-[8px] font-mono uppercase text-[#D4AF37] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          READ
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
                
                {/* Book Cover Area (Also clickable to open the 3D Reader) */}
                <div 
                  onClick={() => openBookModal(asset)}
                  className={`w-full sm:w-2/5 py-10 px-4 sm:p-6 md:p-8 flex items-center justify-center bg-gradient-to-br ${asset.color} relative overflow-hidden cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-warning/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  <div 
                    className="w-[200px] sm:w-full max-w-[220px] aspect-[54/85] rounded-md md:rounded-lg shadow-2xl flex flex-col justify-between p-4 md:p-5 transform group-hover:scale-105 transition-transform duration-500 relative z-10 border border-white/10 overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.9))`,
                      backgroundImage: `url(${asset.coverBgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
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
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-warning fill-current drop-shadow-sm" />
                      ))}
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

                    {/* DIRECT NATIVE LINK (100% Preserved) */}
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

      {/* =================================================================
          PULL-FORWARD 3D BOOK READER WITH REALISTIC PAGE CURL & SWIPE
          ================================================================= */}
      {activeBook && (
        <div
          onClick={closeBookModal}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            {/* Top Reader Controls Bar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-[#D4AF37]/40 text-white shadow-xl">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-bold text-xs sm:text-sm">{activeBook.title}</span>
                <span className="text-xs text-white/60 font-mono">
                  • Page {pageIndex + 1} / {activeBook.pages.length}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-mono">
                <Hand className="w-3.5 h-3.5" />
                <span>Swipe Left/Right or Tap Page Corner to Turn</span>
              </div>

              <button
                type="button"
                onClick={closeBookModal}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close Book</span>
              </button>
            </div>

            {/* Open Physical Book Spread (Supports Touch Swipe & Mouse Drag) */}
            <div
              onTouchStart={(e) => handlePointerStart(e.touches[0].clientX)}
              onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
              onTouchEnd={handlePointerEnd}
              onMouseDown={(e) => handlePointerStart(e.clientX)}
              onMouseMove={(e) => handlePointerMove(e.clientX)}
              onMouseUp={handlePointerEnd}
              onMouseLeave={() => isDragging && handlePointerEnd()}
              className="book-open-perspective w-full bg-gradient-to-b from-[#2e190b] to-[#140a04] p-2.5 sm:p-4 rounded-2xl border-2 border-[#78512a] shadow-[0_35px_90px_rgba(0,0,0,0.95)] select-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EFECE6] text-[#1c1917] rounded-xl overflow-hidden min-h-[430px] sm:min-h-[490px] relative shadow-inner">
                
                {/* Realistic Center Spine Valley Crease & Shadow (Matches Photo #2) */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-transparent via-black/25 to-transparent pointer-events-none z-30" />

                {/* LEFT PAGE: Book Metadata & Tap/Swipe-Right to Go Back */}
                <div
                  onClick={triggerPrevPage}
                  className="p-6 sm:p-10 border-b md:border-b-0 md:border-r border-[#d6cfc2] flex flex-col justify-between bg-gradient-to-r from-[#E2DDD2] via-[#F2EFE9] to-[#EAE5DA] cursor-pointer relative"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#78716c] pb-3 mb-6 border-b border-[#d6cfc2]">
                      <span>{activeBook.tag}</span>
                      <span>EX LIBRIS • VEBLEN GOOD</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1c1917] mb-2 leading-tight">
                      {activeBook.title}
                    </h2>
                    <p className="font-serif italic text-xs sm:text-sm text-[#57534e] mb-6">
                      {activeBook.subtitle}
                    </p>

                    <div className="p-4 rounded-lg bg-black/[0.04] border border-black/10 text-xs text-[#44403c] leading-relaxed">
                      <p className="font-bold uppercase tracking-wider text-[10px] text-[#8a660f] mb-1">
                        SYNOPSIS
                      </p>
                      {activeBook.description}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#d6cfc2] flex items-center justify-between text-xs text-[#57534e]">
                    <span className="font-serif font-bold">By {activeBook.author}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeBookModal();
                        scrollToCard(activeBook.id);
                      }}
                      className="text-[10px] font-bold uppercase tracking-wider bg-stone-900 text-amber-400 px-3 py-1.5 rounded-sm hover:bg-stone-800 flex items-center gap-1 cursor-pointer"
                    >
                      Get Full Copy ({activeBook.price}) <ArrowDown className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* RIGHT PAGE: Active Turning Leaf with Curled Corner & Live Swipe Rotation */}
                <div
                  onClick={triggerNextPage}
                  style={{
                    transform:
                      isDragging && dragDeltaX < 0
                        ? `perspective(1800px) rotateY(${Math.max(-140, dragDeltaX * 0.55)}deg) skewY(${dragDeltaX * 0.015}deg)`
                        : undefined,
                    transformOrigin: "left center",
                  }}
                  className={`right-page-surface p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-l from-[#E4DFD3] via-[#FAF8F5] to-[#F0ECE1] cursor-pointer relative transition-transform duration-150 ${
                    flipState === "turning-next"
                      ? "arching-page-next"
                      : flipState === "turning-prev"
                      ? "arching-page-prev"
                      : ""
                  }`}
                >
                  {/* Realistic Peeling Page Corner in Bottom-Right (Matches Photo #1) */}
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

                          <div className="space-y-3.5 font-serif text-sm sm:text-base text-[#292524] leading-relaxed">
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
                            <blockquote className="mt-5 p-3.5 border-l-3 border-[#8a660f] bg-[#e7e0d0]/70 font-serif italic text-xs sm:text-sm text-[#1c1917]">
                              &ldquo;{page.highlightQuote}&rdquo;
                            </blockquote>
                          )}
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#d6cfc2] pr-12 flex items-center justify-between text-xs">
                          <span className="font-serif italic text-[#78716c]">
                            Swipe left or tap corner →
                          </span>
                          <span className="font-mono text-[11px] font-bold text-[#8a660f]">
                            {pageIndex + 1} / {activeBook.pages.length}
                          </span>
                        </div>
                      </>
                    );
                  })()}
                </div>

              </div>
            </div>

            {/* Bottom Page-Turning Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={triggerPrevPage}
                disabled={pageIndex === 0}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </button>

              <button
                type="button"
                onClick={() => setPageIndex(0)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono uppercase transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Page 1
              </button>

              <button
                type="button"
                onClick={triggerNextPage}
                disabled={pageIndex === activeBook.pages.length - 1}
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
