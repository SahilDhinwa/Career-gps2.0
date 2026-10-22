"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  Sparkles, Star, ShieldCheck, BookOpen, 
  ChevronLeft, ChevronRight, X, RotateCcw, Hand, FileText 
} from "lucide-react";

// ==========================================
// 📚 PAGE CONTENT INTERFACE & FULL PDF REPOSITORY
// ==========================================
export interface BookPageSpread {
  pageNumber: number;
  heading: string;
  subheading: string;
  body: string[];
  bullets?: string[];
  flowchart?: {
    title: string;
    branches: { label: string; sub: string }[];
  };
  equationBox?: {
    label: string;
    formula: string;
  };
  highlightQuote?: string;
}

export interface VaultAsset {
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
  pages: BookPageSpread[];
}

const vaultAssets: VaultAsset[] = [
  // ==========================================================================
  // BOOK 1: FULL VERBATIM CONTENT FROM "The Glass World (1).pdf"
  // ==========================================================================
  {
    id: "unspoken-aura",
    title: "The Unspoken Aura",
    coverTitle: "The Unspoken\nAura",
    author: "Sahil Dhinwa",
    subtitle: "Unlocking Your True Personality Through Communication",
    shortSubtitle: "A Guide for the Real World",
    description:
      "You come from a place where dreams are big, but the platforms to express them feel painfully small. Break the invisible glass wall, master the 4 learning paths, and build an unforgettable aura.",
    price: "FREE",
    originalPrice: "₹999",
    tag: "Flagship Release",
    color: "from-gray-900 to-black",
    spineColor: "#111827",
    coverBgImage: "/unspoken-aura-bg.jpg",
    fileUrl: "/The Glass World (1).pdf",
    pages: [
      {
        pageNumber: 1,
        heading: "CONTENTS • THE GLASS WORLD",
        subheading: "Unlocking Your True Personality",
        body: [
          "A Guide for the Real World — Written for every student whose mind is firing with brilliant ideas, but whose voice gets trapped behind an invisible wall.",
        ],
        bullets: [
          "Chapter 1 — Self Reflection: Know Myself (The 'Before' & 'After')",
          "Chapter 2 — The Best Way of Learning (The 4 Weapon Pathways)",
          "Chapter 3 — Purpose: The Unavoidable Encounters & The Greatest Myth",
          "Chapter 4 — Personal Communication: The Art of the Aura",
        ],
        highlightQuote:
          "You are not just learning how to talk. You are learning how to be someone unforgettable.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER 1 • SELF REFLECTION",
        subheading: "Know Myself: The Invisible Wall",
        body: [
          "Let us sit together for a moment, just you and me. Imagine we are sitting on the same chair, looking at the same world. You come from a place where dreams are big, but the platforms to express them feel painfully small. You have the knowledge, the marks, and the talent. But there is an invisible wall.",
          "Think about the last time you were in a group setting—a college canteen, a family gathering, or a local tea stall with friends. Someone brought up a topic you knew inside out. Your brain was firing with brilliant points. But what happened?",
          "Your heart beat a little faster. You thought, 'What if I sound stupid? What if I fumble?' You held your breath. And in that exact second of hesitation, someone else spoke. They didn't even know half of what you knew, but they spoke with confidence. Everyone listened. Everyone nodded.",
        ],
      },
      {
        pageNumber: 3,
        heading: "CHAPTER 1 • PART II",
        subheading: "The 'Before' & Your Sacred 'After'",
        body: [
          "You were left sitting there, swallowing your own words, feeling a bitter mix of anger at yourself and envy for them. This is the reality of lacking communication skills. It is not about not knowing the language; it is the sweaty palms, the breaking eye contact, the nervous laughter to hide the awkwardness, and the heavy feeling of being invisible in a room where you desperately want to be seen.",
          "You shrink your personality to fit into the background. But this is not where your story ends. This is just the 'Before'.",
        ],
        highlightQuote:
          "THE 'AFTER' — [Reader Experience]: This space is intentionally reserved for your transformation. As you journey through this book, you will return here a different person.",
      },
      {
        pageNumber: 4,
        heading: "CHAPTER 2 • LEARNING PATHS",
        subheading: "The Best Way of Learning (Part 1)",
        body: [
          "Every human mind is wired differently. Forcing one method on everyone is a disaster. You don't have to learn communication the way someone else did—you just have to find the rhythm that best suits you. Pick your weapon:",
        ],
        bullets: [
          "1. The Observer's Path (Analyze & Adapt): Watch podcasts, interviews, or that one charismatic friend. Look at their hands, notice when they pause, and observe their eye contact. You absorb the mechanics of confidence before ever opening your mouth.",
          "2. The Imitator's Path (The Mirror Technique): Stand in front of a mirror. Play a clip of a speaker you admire, pause it, and repeat exactly what they said—mimicking their tone and facial expressions to break out of a monotone voice.",
        ],
      },
      {
        pageNumber: 5,
        heading: "CHAPTER 2 • PART II",
        subheading: "The Fire-Walker & The Mind-Mapper",
        body: [
          "If observation or mirror work isn't your style, choose one of these two execution-first weapons:",
        ],
        bullets: [
          "3. The Trial & Error Path (The Fire-Walker): You throw yourself into the deep end. Raise your hand in class even if your voice shakes. Strike up a conversation with the shopkeeper. You fail, feel embarrassed, and try again the next day. It kills the fear of judgment faster than any other method.",
          "4. The Mind-Mapper's Path (The Logical Speaker): You panic because your thoughts get jumbled. Before speaking, mentally create a flowchart: 'Point A leads to Point B.' Structure thoughts in bullet points to eliminate 'umms' and 'ahhs'.",
        ],
        highlightQuote:
          "Choose your path. Mix and match. The journey to the top is yours to design.",
      },
      {
        pageNumber: 6,
        heading: "CHAPTER 3 • THE PURPOSE",
        subheading: "The Unavoidable Encounters",
        body: [
          "You might think, 'I don't want to be a politician or a CEO. Why work so hard on this?' Fine—but do you want to be respected? You may not seek the spotlight, but life will ruthlessly force you onto the stage:",
          "• Day-to-Day Encounters: Casual chats with friends where you want your joke to land, talking to a stranger on a train, or negotiating with a vendor. If you don't speak, you remain a passenger in your own life.",
          "• Forced Encounters: It's Sunday. Relatives visit. Your parents drag you into the drawing room: 'Beta, tell uncle what you are planning to do after graduation.' Eight pairs of eyes lock onto you. Stuttering makes you look incompetent, even if you are a university topper.",
        ],
      },
      {
        pageNumber: 7,
        heading: "CHAPTER 3 • THE MATRIX",
        subheading: "Stage Representation & The Greatest Myth",
        body: [
          "Eventually, you will face the masses. And when you do, never let the fear of English keep you silent. English is merely a vehicle; communication is the driver.",
        ],
        flowchart: {
          title: "Stage Representation Matrix",
          branches: [
            { label: "One to Many", sub: "Speech, Pitch" },
            { label: "Many to One", sub: "Viva, Interview" },
            { label: "Many to Many", sub: "Group Discussion" },
          ],
        },
        equationBox: {
          label: "The Reality Equation",
          formula: "Fluent English ≠ Good Communication Skills",
        },
      },
      {
        pageNumber: 8,
        heading: "CHAPTER 4 • THE ART OF THE AURA",
        subheading: "Personal Communication & The Real Test",
        body: [
          "Think of that one cousin, senior, or friend: the moment they walk into a room, the energy shifts. People naturally gather around them. Next to their dominant personality, you feel like a shadow—accepting the lie that 'that's just how they are.'",
          "They were not born with a magical gene; they learned the game. You might say, 'I can talk to my best friend for five hours!' That is your comfort zone. What happens when two of their other friends—strangers to you—join the table? Do you stay confident, or start scrolling on your phone waiting for the torture to end?",
          "What you admire in that charismatic friend is your benchmark. And you are going to reach it.",
        ],
        equationBox: {
          label: "The Mathematical Truth of Personality",
          formula: "Good Communication Skills ∝ Good Personality",
        },
      },
    ],
  },

  // ==========================================================================
  // BOOK 2: FULL VERBATIM CONTENT FROM "The Invisible Art Of Speaking.pdf"
  // ==========================================================================
  {
    id: "invisible-art",
    title: "The Invisible Art of Speaking",
    coverTitle: "The Invisible Art\nof Speaking",
    author: "Sahil Dhinwa",
    subtitle: "A Mentor's Guide to Communication for the Ambitious",
    shortSubtitle: "A Mentor's Guide for the Ambitious",
    description:
      "Grab a cutting chai and put all cards on the table. Break the 3-second viva translation trap, stop hiding behind the 'good listener' lie, and upgrade the engine that drives your voice.",
    price: "FREE",
    originalPrice: "₹1,299",
    tag: "New Release",
    color: "from-[#022c22] to-black",
    spineColor: "#064e3b",
    coverBgImage: "/the_invisible_art.jpg",
    fileUrl: "/The Invisible Art Of Speaking.pdf",
    pages: [
      {
        pageNumber: 1,
        heading: "CHAPTER 1 • SELF-REFLECTION",
        subheading: "Pull Up a Chair, Grab a Cutting Chai",
        body: [
          "Let's not pretend. Pull up a chair, grab a cutting chai, and let's put all our cards on the table. We know what happens behind closed doors, in the back rows of college classrooms, and in crowded canteens where everyone else seems to be laughing a little louder and speaking a little faster than you.",
          "This isn't a grammar textbook. I am not going to teach you what a gerund is. You already know enough grammar to pass an exam. This book is about survival. It is about claiming your space in a world that routinely tries to make you feel small just because you don't speak like you grew up in South Delhi or South Bombay.",
        ],
        highlightQuote:
          "Before we build the penthouse, we need to inspect the foundation.",
      },
      {
        pageNumber: 2,
        heading: "CHAPTER 1 • THE VIVA TRAP",
        subheading: "The 3-Second Translation Death Sentence",
        body: [
          "Let's talk about viva exams. You know the concepts better than the elite kids in the front row. But the moment you sit on that wooden chair across from the external examiner, your throat goes dry. The professor asks a simple question in English.",
          "In your mind, a frantic process begins: You hear the English words → translate them into Hindi or your mother tongue → formulate a brilliant answer → desperately try to translate it back into English.",
          "But the translation takes three seconds. And in the modern world, a three-second pause is a death sentence. You panic, give a broken one-word answer, and walk out feeling like a fraud—while a student who knows half as much walks out with an 'A' simply because they packaged mediocrity in fluent English.",
        ],
      },
      {
        pageNumber: 3,
        heading: "CHAPTER 1 • THE LIE WE TELL",
        subheading: "The 'Good Listener' Disguise",
        body: [
          "When a stranger approaches you at a metro station or mall to ask for directions in fluent English, your first instinct is to look down, mumble 'Go straight,' and walk away fast, hoping they don't ask a follow-up question.",
          "And what about canteen sessions or college fests? Your mind is racing with incredible ideas, hilarious jokes, and deep insights. But you stay silent. You nod, smile politely, and convince yourself that you are just a 'good listener.'",
          "You and I know that is a lie. You are not choosing to listen; you are hiding. Acknowledge this pain—because the hesitant, nodding, translating, hiding version of you ends here.",
        ],
      },
      {
        pageNumber: 4,
        heading: "CHAPTER 2 • HACK YOUR PSYCHOLOGY",
        subheading: "The 3 Training Pathways",
        body: [
          "Communication is not a subject like physics; it is a muscle. Pick the workout that matches your natural psychology:",
        ],
        bullets: [
          "Path 1: The Imitator (Media Shadowing): Pick one speaker whose vibe you admire. Pause their interview after a sentence and repeat it out loud—copying their exact tone, pauses, and energy. You are downloading their confidence.",
          "Path 2: The Scriptwriter (Pre-Thought Journaling): Your brain moves faster than your mouth. Write your opinions in English first to slow your brain down into a mental teleprompter.",
          "Path 3: The Solitary Speaker (Mirror & Mic): Lock your bedroom door. Speak to the mirror or your phone voice recorder for 2 minutes. When you play it back, you will cringe. The cringe is the sound of weakness leaving your body.",
        ],
      },
      {
        pageNumber: 5,
        heading: "CHAPTER 3 • THE ARENA",
        subheading: "Cousin Rahul & The 3 Terrifying Stages",
        body: [
          "You are at a family wedding when your parents drag you over: 'Beta, meet your cousin Rahul. He just got placed in an MNC in Gurgaon.' Rahul radiates urban polish. Your throat tightens. In forced encounters, communication is your armor:",
        ],
        bullets: [
          "One-to-Many (The Solo Flight): The podium speech where silence is deafening and there is nowhere to hide.",
          "Many-to-One (The Firing Squad): The interview panel or brutal viva testing your psychological spine and eye contact.",
          "Many-to-Many (The Fish Market): The Group Discussion—won not by the loudest shouter, but by the calm, authoritative sentence that cuts through the noise.",
        ],
      },
      {
        pageNumber: 6,
        heading: "CHAPTER 3 • MYTH CLEANSING",
        subheading: "Protocol vs. Conviction",
        body: [
          "Many of you score 90% in English exams and still freeze. Why? Because you have confused vocabulary with connection.",
          "English is just a protocol, like a programming language. A dictionary has every word in the world, but a dictionary cannot comfort a crying friend or command a boardroom. I have seen men in rural India command an entire village square with broken syntax because their tone, eye contact, and body language were impenetrable.",
        ],
        equationBox: {
          label: "The Mathematical Reality",
          formula: "Good English ≠ Good Communication Skills",
        },
        highlightQuote:
          "Do not obsess over perfect grammar. Obsess over clarity. Obsess over conviction.",
      },
      {
        pageNumber: 7,
        heading: "CHAPTER 4 • PERSONAL AURA",
        subheading: "The 'Friend's Friend' Dilemma",
        body: [
          "With your best friend, you are the loudest, funniest king in the room. But what happens when your best friend brings their cool, confident friend from another college to hang out?",
          "Suddenly your jokes dry up. You become self-conscious about your clothes, accent, and college tier. You just nod and say, 'Haan, sahi hai.' Why? Because you hit your Saturation Point of Comfort.",
          "A master communicator does not wait for the room to make them comfortable; they make the room comfortable by imposing their own baseline reality onto it.",
        ],
      },
      {
        pageNumber: 8,
        heading: "CHAPTER 4 • THE ENGINE",
        subheading: "The Ultimate Law of Human Interaction",
        body: [
          "Your words are just the tip of the iceberg. The massive hidden ice beneath the water is your self-worth, your posture, and your belief in your own right to take up space.",
          "As you become more secure, more observant, and more forgiving of your own flaws, your communication naturally elevates. We are not just upgrading your tongue; we are upgrading the engine that drives it.",
        ],
        equationBox: {
          label: "The Unbreakable Law",
          formula: "Good Communication ∝ Good Personality",
        },
        highlightQuote:
          "Turn the page. It is time to start building the new you.",
      },
    ],
  },

  // ==========================================================================
  // BOOK 3: NITU BHAIYA KE POHE / GHEE KHATAM
  // ==========================================================================
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
          "100% Free Asset — Click Open PDF below to view the original file.",
        ],
      },
    ],
  },
];

// 9-Volume Antique Leather Spine Shelf Configuration
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
  { slotId: "s3", spineTitle: "THE GLASS WORLD", volNumber: "VOL. III", leatherTone: "cognac", widthClass: "w-13 sm:w-18", assetIndex: 0 },
  { slotId: "s4", spineTitle: "MENTOR'S CODE", volNumber: "VOL. IV", leatherTone: "obsidian", widthClass: "w-15 sm:w-21", assetIndex: 1 },
  { slotId: "s5", spineTitle: "GHEE KHATAM", volNumber: "VOL. V", leatherTone: "saddle", widthClass: "w-14 sm:w-20", assetIndex: 2 },
  { slotId: "s6", spineTitle: "NITU BHAIYA POHE", volNumber: "VOL. VI", leatherTone: "espresso", widthClass: "w-15 sm:w-20", assetIndex: 2 },
  { slotId: "s7", spineTitle: "VEBLEN GOOD", volNumber: "VOL. VII", leatherTone: "cognac", widthClass: "w-14 sm:w-19", assetIndex: 0 },
  { slotId: "s8", spineTitle: "3-SECOND PAUSE", volNumber: "VOL. VIII", leatherTone: "espresso", widthClass: "w-14 sm:w-20", assetIndex: 1 },
  { slotId: "s9", spineTitle: "SAWA DOSHO", volNumber: "VOL. IX", leatherTone: "saddle", widthClass: "w-14 sm:w-20", assetIndex: 2 },
];

export default function EBooksDirectory() {
  const [activeBook, setActiveBook] = useState<VaultAsset | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);

  // Two-Sided 3D Sheet Turn State (Prevents Mirrored/Backwards Text!)
  const [turnDirection, setTurnDirection] = useState<"next" | "prev" | null>(null);
  const [targetPageIndex, setTargetPageIndex] = useState<number>(0);
  const [dragAngle, setDragAngle] = useState<number | null>(null);
  const dragStartXRef = useRef<number | null>(null);

  const openBookModal = (asset: VaultAsset) => {
    setActiveBook(asset);
    setPageIndex(0);
    setTargetPageIndex(0);
    setTurnDirection(null);
    setDragAngle(null);
  };

  const closeBookModal = useCallback(() => {
    setActiveBook(null);
    setTurnDirection(null);
    setDragAngle(null);
    dragStartXRef.current = null;
  }, []);

  const triggerNextPage = useCallback(() => {
    if (!activeBook || turnDirection !== null) return;
    if (pageIndex < activeBook.pages.length - 1) {
      const nextIdx = pageIndex + 1;
      setTargetPageIndex(nextIdx);
      setTurnDirection("next");
      setTimeout(() => {
        setPageIndex(nextIdx);
        setTurnDirection(null);
        setDragAngle(null);
      }, 540);
    }
  }, [activeBook, pageIndex, turnDirection]);

  const triggerPrevPage = useCallback(() => {
    if (!activeBook || turnDirection !== null) return;
    if (pageIndex > 0) {
      const prevIdx = pageIndex - 1;
      setTargetPageIndex(prevIdx);
      setTurnDirection("prev");
      setTimeout(() => {
        setPageIndex(prevIdx);
        setTurnDirection(null);
        setDragAngle(null);
      }, 540);
    }
  }, [activeBook, pageIndex, turnDirection]);

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

  // Finger-Swipe & Mouse-Drag Physics
  const handleSwipeStart = (clientX: number) => {
    if (turnDirection !== null) return;
    dragStartXRef.current = clientX;
  };

  const handleSwipeMove = (clientX: number) => {
    if (dragStartXRef.current === null || !activeBook || turnDirection !== null) return;
    const deltaX = clientX - dragStartXRef.current;

    if (deltaX < -5 && pageIndex < activeBook.pages.length - 1) {
      const angle = Math.max(-175, (deltaX / 260) * 180);
      setDragAngle(angle);
    } else if (deltaX > 5 && pageIndex > 0) {
      const angle = Math.min(-5, -180 + (deltaX / 260) * 180);
      setDragAngle(angle);
    }
  };

  const handleSwipeEnd = (clientX?: number) => {
    if (dragStartXRef.current === null) return;
    const deltaX = clientX !== undefined ? clientX - dragStartXRef.current : 0;
    dragStartXRef.current = null;
    setDragAngle(null);

    if (deltaX < -40) {
      triggerNextPage();
    } else if (deltaX > 40) {
      triggerPrevPage();
    }
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

  // Renders any single page's rich content (paragraphs, bullets, flowcharts, equations)
  const renderPageContent = (page: BookPageSpread, totalPages: number) => (
    <div className="h-full flex flex-col justify-between select-none">
      <div className="overflow-y-auto pr-1 space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8a660f] pb-2 border-b border-[#d6cfc2]">
          <span>{page.heading}</span>
          <span>PAGE 0{page.pageNumber}</span>
        </div>

        <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1c1917] tracking-tight leading-snug">
          {page.subheading}
        </h3>

        <div className="space-y-2.5 font-serif text-xs sm:text-sm text-[#292524] leading-relaxed">
          {page.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {page.bullets && (
          <ul className="space-y-1.5 text-xs text-[#292524] font-medium pl-1 pt-1">
            {page.bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-snug">
                <span className="text-[#8a660f] font-black">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Visual Flowchart (From Chapter 3 of PDF) */}
        {page.flowchart && (
          <div className="p-3 rounded-lg bg-[#e6decb]/70 border border-[#c8bda6] text-center my-2">
            <span className="inline-block px-3 py-1 rounded bg-[#1c1917] text-[#F7F2E6] text-[10px] font-bold uppercase tracking-wider mb-2.5">
              {page.flowchart.title}
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-[10px]">
              {page.flowchart.branches.map((br, i) => (
                <div key={i} className="p-1.5 rounded bg-[#FAF6EC] border border-[#c8bda6]">
                  <p className="font-bold text-[#1c1917]">{br.label}</p>
                  <p className="text-[9px] text-[#57534e]">{br.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlighted Equation Callout Box (From Chapters 3 & 4 of PDFs) */}
        {page.equationBox && (
          <div className="p-3 rounded-lg bg-[#1c1917] text-[#F7F2E6] text-center my-2 shadow-xs">
            <p className="text-[9px] font-mono uppercase tracking-widest text-[#D4AF37] mb-0.5">
              {page.equationBox.label}
            </p>
            <p className="font-serif font-bold text-xs sm:text-sm tracking-wide text-white">
              {page.equationBox.formula}
            </p>
          </div>
        )}

        {page.highlightQuote && (
          <blockquote className="p-3 border-l-3 border-[#8a660f] bg-[#e7e0d0]/75 font-serif italic text-xs text-[#1c1917]">
            &ldquo;{page.highlightQuote}&rdquo;
          </blockquote>
        )}
      </div>

      <div className="pt-2.5 mt-2 border-t border-[#d6cfc2] flex items-center justify-between text-[11px] shrink-0">
        <span className="font-serif italic text-[#78716c]">
          Swipe left or tap to turn →
        </span>
        <span className="font-mono font-bold text-[#8a660f]">
          {page.pageNumber} / {totalPages}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* =================================================================
          3D ANIMATED BACKGROUND + DOUBLE-SIDED REAL BOOK LEAF CSS
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
           TRUE 2-SIDED 3D SHEET TURN (ZERO MIRRORED TEXT!)
           ========================================================= */
        .book-stage-3d {
          perspective: 2200px;
        }
        .leaf-3d-wrapper {
          transform-origin: left center;
          transform-style: preserve-3d;
        }
        .leaf-face-front {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .leaf-face-back {
          position: absolute;
          inset: 0;
          transform: rotateY(180deg);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .animate-leaf-next {
          animation: leafTurnNext 0.54s cubic-bezier(0.3, 0.05, 0.2, 1) forwards;
        }
        .animate-leaf-prev {
          animation: leafTurnPrev 0.54s cubic-bezier(0.3, 0.05, 0.2, 1) forwards;
        }

        @keyframes leafTurnNext {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        @keyframes leafTurnPrev {
          0% { transform: rotateY(-180deg); }
          100% { transform: rotateY(0deg); }
        }
      `}} />

      {/* 3D Animated Background Panels */}
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
              <Sparkles className="w-4 h-4 text-warning" /> ATREYA Med &amp; Veblen Good Library
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 drop-shadow-sm">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Vault Editions</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 font-medium max-w-2xl bg-surface/40 backdrop-blur-[2px] rounded-lg p-2">
              All complete manuscripts are unlocked and 100% free. Tap any antique leather volume on the shelf below to read in our 3D page-turner, or open the original PDF directly from the cards below.
            </p>
          </div>

          {/* =========================================================
              📚 TOP ANTIQUE LEATHER SPINE SHELF
             ========================================================= */}
          <div className="mb-16 md:mb-24 bg-surface/60 backdrop-blur-md border border-surfaceBorder rounded-sm pt-8 pb-8 px-4 sm:px-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-warning/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 px-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warning">
                <BookOpen className="w-4 h-4" /> Interactive 3D Vault Shelf
              </div>
              <span className="text-[11px] font-medium text-foreground/60">
                Tap any leather spine to pull the book forward &amp; turn pages
              </span>
            </div>

            {/* Dark Mahogany Bookcase Niche */}
            <div className="mx-auto max-w-5xl rounded-t-xl bg-gradient-to-b from-[#110905] via-[#1b0f08] to-[#0b0603] pt-6 px-3 sm:px-6 shadow-[inset_0_18px_40px_rgba(0,0,0,0.95)] border-t-4 border-x-4 border-[#2b180d]">
              <div className="flex items-end justify-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                {ANTIQUE_SHELF_SPINES.map((spine) => {
                  const targetAsset = vaultAssets[spine.assetIndex];
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
                      title={`Read ${targetAsset.title}`}
                    >
                      <div className="w-full space-y-1">
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                        <div className="h-5 sm:h-6 w-full gold-filigree-band rounded-[2px] opacity-90" />
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                      </div>

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

                      <div className="w-full space-y-1 my-0.5">
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                        <div className="h-6 sm:h-7 w-full gold-filigree-band rounded-[2px] opacity-90" />
                        <div className="h-1.5 w-full spine-rib rounded-full" />
                      </div>

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

            <div className="bookshelf-plank mx-auto max-w-5xl"></div>
          </div>

          {/* =========================================================
              2-COLUMN DETAILED CARDS (Both 3D Reader & Direct PDF Links!)
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {vaultAssets.map((asset) => (
              <div
                id={`card-${asset.id}`}
                key={asset.id}
                className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group"
              >
                
                {/* Book Cover Area */}
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
                      <p className="text-[8px] md:text-[10px] font-bold text-warning uppercase tracking-[0.2em] md:tracking-[0.25em] opacity-90">
                        Veblen Good Exclusive
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

                {/* Details & Free Read Actions */}
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
                    {/* Free Access Price Block */}
                    <div className="flex items-end gap-3 mb-4">
                      <span className="text-3xl font-heading font-bold text-success drop-shadow-sm">
                        FREE
                      </span>
                      <span className="text-sm font-medium text-foreground/40 line-through mb-1.5">
                        {asset.originalPrice}
                      </span>
                      <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded-sm mb-1.5 ml-auto border border-success/20">
                        {asset.pages.length} INTERACTIVE PAGES
                      </span>
                    </div>

                    {/* Both Interactive 3D Book & Direct PDF Open Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                      <button
                        type="button"
                        onClick={() => openBookModal(asset)}
                        className="flex-1 bg-primary text-white font-bold py-3.5 px-4 rounded-sm hover:bg-primaryHover transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 cursor-pointer text-sm"
                      >
                        <BookOpen className="w-4 h-4" /> Read in 3D Book
                      </button>

                      {asset.fileUrl && (
                        <a
                          href={encodeURI(asset.fileUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm:w-auto bg-surface hover:bg-foreground/5 text-foreground border border-surfaceBorder font-bold py-3.5 px-4 rounded-sm transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                        >
                          <FileText className="w-4 h-4 text-[#D4AF37]" /> Open PDF
                        </a>
                      )}
                    </div>
                    
                    <p className="text-center text-xs text-foreground/50 mt-4 font-bold flex items-center justify-center gap-1.5 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-success" /> Complete Original Edition Included
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          LOCKED-SIZE 3D BOOK READER WITH DOUBLE-SIDED LEAF (NO MIRRORING!)
          ================================================================= */}
      {activeBook && (
        <div
          onClick={closeBookModal}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6"
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
                  • Page {pageIndex + 1} of {activeBook.pages.length}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-mono">
                <Hand className="w-3.5 h-3.5" />
                <span>Swipe Left/Right or Tap Page to Turn</span>
              </div>

              <div className="flex items-center gap-2">
                {activeBook.fileUrl && (
                  <a
                    href={encodeURI(activeBook.fileUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/40 text-[11px] font-bold uppercase transition-colors"
                  >
                    <FileText className="w-3 h-3" /> PDF
                  </a>
                )}
                <button
                  type="button"
                  onClick={closeBookModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Outer Hardcover Binding */}
            <div
              onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
              onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0]?.clientX)}
              onMouseDown={(e) => handleSwipeStart(e.clientX)}
              onMouseMove={(e) => handleSwipeMove(e.clientX)}
              onMouseUp={(e) => handleSwipeEnd(e.clientX)}
              onMouseLeave={() => dragStartXRef.current !== null && handleSwipeEnd()}
              className="book-stage-3d w-full bg-gradient-to-b from-[#2e190b] to-[#140a04] p-2 sm:p-4 rounded-2xl border-2 border-[#78512a] shadow-[0_35px_90px_rgba(0,0,0,0.95)] select-none"
            >
              {/* STRICTLY LOCKED HEIGHT BOOK SPREAD */}
              <div className="grid grid-cols-2 bg-[#EFECE6] text-[#1c1917] rounded-xl h-[460px] sm:h-[520px] relative shadow-inner overflow-hidden">
                
                {/* Center Spine Crease Shadow */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 bg-gradient-to-r from-transparent via-black/25 to-transparent pointer-events-none z-30" />

                {/* LEFT PAGE: Shows Book Cover Info on Page 1, or Previous Page as you read! */}
                <div
                  onClick={triggerPrevPage}
                  className="p-4 sm:p-9 border-r border-[#d6cfc2] flex flex-col justify-between bg-gradient-to-r from-[#E2DDD2] via-[#F2EFE9] to-[#EAE5DA] cursor-pointer h-full overflow-hidden"
                >
                  {pageIndex === 0 ? (
                    <>
                      <div className="overflow-y-auto pr-1">
                        <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#78716c] pb-2 mb-4 border-b border-[#d6cfc2]">
                          <span>{activeBook.tag}</span>
                          <span>VEBLEN GOOD</span>
                        </div>

                        <h2 className="font-serif text-lg sm:text-3xl font-bold text-[#1c1917] mb-1.5 leading-tight">
                          {activeBook.title}
                        </h2>
                        <p className="font-serif italic text-[11px] sm:text-sm text-[#57534e] mb-4">
                          {activeBook.subtitle}
                        </p>

                        <div className="p-3 sm:p-4 rounded-lg bg-black/[0.04] border border-black/10 text-[11px] sm:text-xs text-[#44403c] leading-relaxed">
                          <p className="font-bold uppercase tracking-wider text-[9px] sm:text-[10px] text-[#8a660f] mb-1">
                            SYNOPSIS
                          </p>
                          {activeBook.description}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#d6cfc2] flex items-center justify-between text-[10px] sm:text-xs text-[#57534e] shrink-0">
                        <span className="font-serif font-bold">By {activeBook.author}</span>
                        <span className="text-[9px] font-mono uppercase font-bold text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                          FREE EDITION
                        </span>
                      </div>
                    </>
                  ) : (
                    renderPageContent(
                      activeBook.pages[pageIndex - 1],
                      activeBook.pages.length
                    )
                  )}
                </div>

                {/* RIGHT PAGE BASE (Shows Target Page Underneath While Leaf Turns) */}
                <div
                  onClick={triggerNextPage}
                  className="p-4 sm:p-9 bg-gradient-to-l from-[#E4DFD3] via-[#FAF8F5] to-[#F0ECE1] cursor-pointer h-full overflow-hidden relative"
                >
                  {renderPageContent(
                    activeBook.pages[turnDirection !== null ? targetPageIndex : pageIndex],
                    activeBook.pages.length
                  )}
                </div>

                {/* =========================================================
                    2-SIDED 3D TURNING SHEET (FRONT + BACK FACE = NO MIRRORING)
                    ========================================================= */}
                {(turnDirection !== null || dragAngle !== null) && (
                  <div
                    style={{
                      transform:
                        dragAngle !== null ? `rotateY(${dragAngle}deg)` : undefined,
                    }}
                    className={`leaf-3d-wrapper absolute top-0 bottom-0 right-0 w-1/2 h-full z-40 pointer-events-none ${
                      turnDirection === "next"
                        ? "animate-leaf-next"
                        : turnDirection === "prev"
                        ? "animate-leaf-prev"
                        : ""
                    }`}
                  >
                    {/* FRONT FACE OF TURNING SHEET (Visible 0deg to -90deg) */}
                    <div className="leaf-face-front p-4 sm:p-9 bg-gradient-to-l from-[#E4DFD3] via-[#FAF8F5] to-[#F0ECE1] border-l border-[#d6cfc2] shadow-[-12px_0_25px_rgba(0,0,0,0.18)] overflow-hidden">
                      {renderPageContent(
                        activeBook.pages[turnDirection === "prev" ? targetPageIndex : pageIndex],
                        activeBook.pages.length
                      )}
                    </div>

                    {/* BACK FACE OF TURNING SHEET (Visible -90deg to -180deg, upright & never mirrored!) */}
                    <div className="leaf-face-back p-4 sm:p-9 bg-gradient-to-r from-[#E2DDD2] via-[#F2EFE9] to-[#EAE5DA] border-r border-[#d6cfc2] shadow-[12px_0_25px_rgba(0,0,0,0.22)] overflow-hidden">
                      {renderPageContent(
                        activeBook.pages[turnDirection === "next" ? pageIndex : Math.max(0, targetPageIndex - 1)],
                        activeBook.pages.length
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom Page-Turning Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={triggerPrevPage}
                disabled={pageIndex === 0 || turnDirection !== null}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </button>

              <button
                type="button"
                onClick={() => {
                  if (turnDirection === null) setPageIndex(0);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono uppercase transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Page 1
              </button>

              <button
                type="button"
                onClick={triggerNextPage}
                disabled={pageIndex === activeBook.pages.length - 1 || turnDirection !== null}
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
