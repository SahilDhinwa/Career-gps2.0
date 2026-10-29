"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingReels from "../components/LandingReels";
import GlobalSearchBar from "../components/GlobalSearchBar";
import {
  ArrowRight, Globe, ShieldCheck, Heart, Leaf, Sparkles, CheckCircle,
  Stethoscope, Brain, Eye, Activity, Flame, Sun, FlaskConical,
  FlaskRound, MessageSquarePlus, AlertTriangle, Send, Coffee,
  Flower2, Moon, BookOpen, ChevronRight,
} from "lucide-react";

const TEMP_DEV_LINKS = [
  { title: "Experimental UI Designs Lab", hindi: "नए यूज़र इंटरफ़ेस (UI) डिज़ाइन का परीक्षण करें", href: "/experimental", badge: "PRIMARY TEST", isPrimary: true },
  { title: "Swasthavritta Ch. 1 (Notebook UI)", hindi: "हस्तलिखित नोटबुक नोट्स का डेमो देखें", href: "/short-notes/swasth-vritta/paper-1/chapter-1", badge: "BAMS NOTES", isPrimary: false },
  { title: "24-Hour Body Clock (Interactive)", hindi: "इंटरएक्टिव दिनचर्या मॉड्यूल का अनुभव लें", href: "/atreya/daily-regimen", badge: "GLOBAL UI", isPrimary: false },
];

const FAMILIARITY_HOOKS = [
  {
    id: "dosha", tag: "BODY TYPE & BALANCE", knownAs: "You've heard of Vata, Pitta and Kapha",
    hookTitle: "Why Does Ayurveda Describe Different Body Types?",
    hookDesc: "Explore Prakriti, the traditional Ayurvedic idea of individual constitution—and how it differs from modern genetic testing.",
    familiar: "Body-type quizzes", deeper: "Prakriti & the three doshas", insight: "Ayurveda describes Vata, Pitta and Kapha as traditional frameworks for understanding individual tendencies. They are not established genetic classifications.",
    cta: "Explore the Doshas", href: "/atreya/diagnostics", icon: Flame, visual: "dosha",
    accent: "amber", ring: "border-amber-400/60", gradient: "from-amber-400/25 via-orange-500/10 to-transparent", color: "text-amber-300", button: "bg-amber-400 hover:bg-amber-300 text-slate-950",
  },
  {
    id: "biohack", tag: "MORNING ROUTINES", knownAs: "You've seen tongue scraping and oil pulling",
    hookTitle: "Where Do Modern Wellness Rituals Come From?",
    hookDesc: "Discover Dinacharya, Ayurveda's daily-routine tradition, from waking habits to rest and self-care.",
    familiar: "Morning wellness rituals", deeper: "Dinacharya & daily rhythms", insight: "Dinacharya organizes daily habits around regularity, hygiene, movement and rest. Specific practices have different levels of scientific evidence.",
    cta: "Try the Daily Routine", href: "/atreya/daily-regimen", icon: Sun, visual: "routine",
    accent: "emerald", ring: "border-emerald-400/60", gradient: "from-emerald-400/25 via-teal-500/10 to-transparent", color: "text-emerald-300", button: "bg-emerald-400 hover:bg-emerald-300 text-slate-950",
  },
  {
    id: "supplements", tag: "HERBS & GOLDEN MILK", knownAs: "You know turmeric and Ashwagandha",
    hookTitle: "What Makes an Herb More Than a Supplement?",
    hookDesc: "Meet Haridra, Ashwagandha and Dravyaguna—the traditional study of substances, properties and preparations.",
    familiar: "Golden milk & herbal capsules", deeper: "Haridra, Dravyaguna & preparation", insight: "Traditional Ayurvedic preparations consider ingredients, combinations and methods of use. Safety and effectiveness still require evidence for each specific product and claim.",
    cta: "Explore Herbal Knowledge", href: "/atreya/gut-brain-pharmacology", icon: FlaskConical, visual: "herbs",
    accent: "violet", ring: "border-violet-400/60", gradient: "from-violet-400/25 via-fuchsia-500/10 to-transparent", color: "text-violet-300", button: "bg-violet-400 hover:bg-violet-300 text-slate-950",
  },
  {
    id: "spa", tag: "RELAXATION & MASSAGE", knownAs: "You've seen Ayurvedic oil massages",
    hookTitle: "What's the Tradition Behind the Spa Experience?",
    hookDesc: "Go beyond the spa image to discover Abhyanga, Shirodhara and the wider context of traditional Ayurvedic care.",
    familiar: "Spa treatments & massage", deeper: "Abhyanga & Shirodhara", insight: "These practices have historical roles in Ayurveda. Research into their effects is ongoing; claims about brainwaves or hormones should not be treated as settled facts.",
    cta: "Explore the Science Vault", href: "/atreya/science-vault", icon: Brain, visual: "spa",
    accent: "sky", ring: "border-sky-400/60", gradient: "from-sky-400/25 via-blue-500/10 to-transparent", color: "text-sky-300", button: "bg-sky-400 hover:bg-sky-300 text-slate-950",
  },
] as const;

function DiscoveryVisual({ kind }: { kind: (typeof FAMILIARITY_HOOKS)[number]["visual"] }) {
  if (kind === "dosha") return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#40240e] via-[#9a581c] to-[#1c281e]">
      <div className="absolute -left-12 top-0 h-44 w-44 rounded-full bg-amber-300/25 blur-3xl" />
      <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-amber-200/30 discovery-spin" />
      <div className="relative flex items-center justify-center gap-2">
        <div className="flex h-20 w-20 -rotate-12 items-center justify-center rounded-3xl border border-orange-200/30 bg-orange-200/15 shadow-2xl backdrop-blur-sm"><Flame className="h-11 w-11 text-orange-200" /></div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-200/40 bg-amber-100/15 shadow-2xl backdrop-blur-sm"><Sun className="h-12 w-12 text-amber-100" /></div>
        <div className="flex h-20 w-20 rotate-12 items-center justify-center rounded-3xl border border-emerald-200/30 bg-emerald-200/15 shadow-2xl backdrop-blur-sm"><Leaf className="h-11 w-11 text-emerald-200" /></div>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">Vata · Pitta · Kapha</span>
    </div>
  );
  if (kind === "routine") return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d483c] via-[#237b67] to-[#112f38]">
      <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="absolute h-44 w-44 rounded-full border border-emerald-100/25 discovery-spin" />
      <div className="absolute h-32 w-32 rounded-full border border-dashed border-emerald-100/40 discovery-spin-reverse" />
      <Sun className="h-20 w-20 text-amber-200 drop-shadow-[0_0_25px_rgba(253,230,138,.5)]" strokeWidth={1.2} />
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">Daily rhythms · Dinacharya</span>
    </div>
  );
  if (kind === "herbs") return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#302044] via-[#69406b] to-[#1e3930]">
      <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl" />
      <div className="relative flex items-center gap-4">
        <div className="flex h-24 w-24 -rotate-12 items-center justify-center rounded-3xl border border-amber-100/30 bg-amber-200/20 shadow-xl"><Coffee className="h-14 w-14 text-amber-100" strokeWidth={1.3} /></div>
        <div className="flex h-28 w-24 rotate-6 items-center justify-center rounded-3xl border border-emerald-100/30 bg-emerald-200/15 shadow-xl"><Flower2 className="h-14 w-14 text-emerald-100" strokeWidth={1.3} /></div>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">Turmeric · Ashwagandha</span>
    </div>
  );
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#12334c] via-[#276a83] to-[#182b46]">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute h-40 w-40 rounded-full border border-sky-200/25 discovery-spin" />
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-sky-200/40 bg-sky-100/10 shadow-2xl backdrop-blur"><Moon className="h-16 w-16 text-sky-100" strokeWidth={1.2} /></div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">Abhyanga · Shirodhara</span>
    </div>
  );
}

export default function LandingPage() {
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedQuickTag, setSelectedQuickTag] = useState<string>("");
  const [activeHook, setActiveHook] = useState<number>(0);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    const combinedMsg = `[ATREYA Med Student Feedback]\n• Topic: ${selectedQuickTag || "General Suggestion"}\n• Message: ${feedbackText || "Tested the new experimental UI!"}`;
    const whatsappUrl = `https://wa.me/918769892303?text=${encodeURIComponent(combinedMsg)}`;
    window.open(whatsappUrl, "_blank");
  };

  const selected = FAMILIARITY_HOOKS[activeHook];

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      <style>{`
        .batman .perspective-container { display: none !important; }
        .perspective-container { position: absolute; inset: 0; perspective: 1000px; overflow: hidden; z-index: 0; pointer-events: none; }
        .perspective-grid { position: absolute; width: 200%; height: 150%; left: -50%; top: 30%; background-image: linear-gradient(to right, rgba(17, 66, 50, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 66, 50, 0.15) 1px, transparent 1px); background-size: 60px 60px; transform: rotateX(75deg); animation: pan-grid 3s linear infinite; mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%); }
        @keyframes pan-grid { 0% { transform: rotateX(75deg) translateY(0); } 100% { transform: rotateX(75deg) translateY(60px); } }
        .glowing-core { position: absolute; top: 0%; left: 50%; transform: translateX(-50%); width: 800px; height: 800px; background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%); animation: pulse-core 8s ease-in-out infinite; pointer-events: none; }
        @keyframes pulse-core { 0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.7; } 50% { transform: translateX(-50%) scale(1.2); opacity: 1; } }
        @keyframes discovery-rotate { to { transform: rotate(360deg); } }
        @keyframes discovery-float { 50% { transform: translateY(-16px); } }
        .discovery-spin { animation: discovery-rotate 38s linear infinite; }
        .discovery-spin-reverse { animation: discovery-rotate 52s linear infinite reverse; }
        .discovery-float { animation: discovery-float 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .discovery-spin, .discovery-spin-reverse, .discovery-float { animation: none !important; } }
      `}</style>

      {/* 1. HERO SECTION */}
      <div className="relative flex-grow flex flex-col items-center justify-center px-4 sm:px-6 pt-6 md:pt-10 pb-14 md:pb-24 overflow-hidden bg-background z-40">
        <div className="perspective-container"><div className="glowing-core" /><div className="perspective-grid" /></div>
        <div className="max-w-3xl w-full mx-auto mb-8 md:mb-10 relative z-20">
          <div className="bg-surface/90 backdrop-blur-md border-2 border-amber-500/40 rounded-2xl p-4 sm:px-6 sm:py-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400"><AlertTriangle className="w-5 h-5" /></div>
              <div><p className="text-xs sm:text-sm font-extrabold text-foreground">⚠️ Active Development Phase • यह मंच वर्तमान में निर्माणाधीन है</p><p className="text-xs text-foreground/75 mt-0.5 leading-relaxed">इस शैक्षणिक पोर्टल को विद्यार्थियों के लिए और अधिक उपयोगी बनाने हेतु आपके अमूल्य सुझाव सादर आमंत्रित हैं।</p></div>
            </div>
            <a href="#student-testing-zone" className="shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-xs">Give Feedback ↓</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Link href="/bams-scholar" className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder hover:border-primary text-xs md:text-sm font-bold text-primary mb-5 md:mb-7 shadow-sm transition-colors"><span className="flex h-2 w-2 rounded-full bg-success animate-pulse" /><span>ATREYA MED • NCISM BAMS PROF I–III &amp; AYURVEDA GLOBAL LIVE</span><ArrowRight className="w-3.5 h-3.5" /></Link>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4 md:mb-6 leading-[1.12] md:leading-tight drop-shadow-sm">5,000 Years of Clinical Science. <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success">Built for the Modern World.</span></h1>
          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto mb-7 md:mb-8 font-medium leading-relaxed bg-surface/50 backdrop-blur-[2px] rounded-lg p-3">Ayurveda is a rigorous medical science, not just a spa therapy. Learn authentic clinical Ayurveda from the exact platform that trains India&apos;s future BAMS doctors.</p>
          <GlobalSearchBar />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20">
            <Link href="/bams-scholar" className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"><Stethoscope className="w-5 h-5" /><span>BAMS Scholar Hub (India)</span><ArrowRight className="w-4 h-4" /></Link>
            <a href="#global-discovery-box" className="w-full sm:w-auto bg-surface hover:bg-foreground/5 text-foreground border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] font-bold px-8 py-4 rounded-xl shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"><Globe className="w-5 h-5 text-[#b8860b] dark:text-[#D4AF37]" /><span>New to Ayurveda? Start Here (Global)</span><Sparkles className="w-4 h-4 text-[#b8860b] dark:text-[#D4AF37]" /></a>
          </div>
        </div>
      </div>

      {/* 2. STUDENT TESTING & FEEDBACK HUB */}
      <section id="student-testing-zone" className="bg-surface/60 border-t border-b border-surfaceBorder py-12 px-4 sm:px-6 relative z-20 scroll-mt-16">
        <div className="max-w-5xl mx-auto"><div className="bg-background border-2 border-primary/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg space-y-6">
          <div className="border-b border-surfaceBorder pb-4 flex flex-col md:flex-row md:items-center justify-between gap-3"><div><span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-1"><FlaskRound className="w-4 h-4" /> Student Testing &amp; Feedback Lab • छात्र परीक्षण एवं सुझाव केंद्र</span><h2 className="font-sans text-xl sm:text-2xl font-extrabold text-foreground">Help Us Choose the Best Design for Your Studies</h2><p className="text-xs sm:text-sm text-foreground/75 mt-1">नीचे दिए गए नए डिज़ाइन पेजों को खोलकर देखें और हमें बताएं कि अध्ययन के लिए कौन-सा प्रारूप सबसे सरल और उपयोगी है:</p></div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{TEMP_DEV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={`group p-5 rounded-2xl border transition-all flex flex-col justify-between ${item.isPrimary ? "bg-primary/10 border-primary hover:bg-primary hover:text-white shadow-sm" : "bg-surface border-surfaceBorder hover:border-primary/50"}`}><div><div className="flex items-center justify-between gap-2 mb-3"><span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${item.isPrimary ? "bg-primary text-white group-hover:bg-white group-hover:text-primary" : "bg-amber-500/15 text-amber-700 dark:text-amber-400"}`}>{item.badge}</span><FlaskRound className="w-4 h-4 opacity-70" /></div><h3 className="font-bold text-base mb-1">{item.title}</h3><p className={`text-xs leading-relaxed ${item.isPrimary ? "text-foreground/80 group-hover:text-white/90" : "text-foreground/65"}`}>{item.hindi}</p></div><div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-extrabold"><span>Open Page to Test</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div></Link>
          ))}</div>
          <form onSubmit={handleSendFeedback} className="bg-surface border border-surfaceBorder rounded-2xl p-4 sm:p-5 space-y-3"><label className="text-xs sm:text-sm font-extrabold text-foreground flex items-center gap-2"><MessageSquarePlus className="w-4 h-4 text-primary" /><span>Share Your Suggestion • अपना सुझाव चुनें या नीचे लिखें:</span></label><div className="flex flex-wrap gap-2">{["👍 Experimental UI बहुत अच्छा है", "📒 हस्तलिखित (Handwritten) नोट्स सबसे अच्छे हैं", "🎨 फ़ॉन्ट या रंग में बदलाव करें", "📚 अन्य विषयों के नोट्स भी जोड़ें"].map((tag) => (<button key={tag} type="button" onClick={() => setSelectedQuickTag(tag)} className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${selectedQuickTag === tag ? "bg-primary text-white border-primary" : "bg-background text-foreground/80 border-surfaceBorder hover:border-primary/40"}`}>{tag}</button>))}</div><div className="flex flex-col sm:flex-row gap-2.5 pt-1"><input type="text" value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} placeholder="यहाँ अपना सुझाव लिखें (Write your feedback in Hindi or English)..." className="flex-1 bg-background border border-surfaceBorder rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:border-primary" /><button type="submit" className="bg-primary hover:bg-primaryHover text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"><Send className="w-4 h-4" /><span>Send Suggestion</span></button></div></form>
        </div></div>
      </section>

      {/* 3. GLOBAL DISCOVERY: FAMILIAR TO DEEP */}
      <section id="global-discovery-box" aria-labelledby="global-discovery-heading" className="relative z-20 scroll-mt-16 bg-background px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-amber-400 via-emerald-400 to-sky-500 p-[2px] shadow-2xl">
          <div className="relative isolate overflow-hidden rounded-[26px] bg-[#07141a] px-5 py-8 text-white sm:px-8 md:px-11 md:py-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden"><div className="discovery-float absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" /><div className="discovery-float absolute -right-24 top-28 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" /><div className="discovery-spin absolute -right-28 -top-36 h-[430px] w-[430px] rounded-full border border-dashed border-amber-300/15" /><div className="discovery-spin-reverse absolute -right-12 -top-20 h-[290px] w-[290px] rounded-full border border-emerald-300/15" /></div>
            <div className="relative z-10">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-wide text-amber-200"><Globe className="h-4 w-4" /> Ayurveda Global · Discovery Portal</span><span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Start familiar. Go deeper.</span></div>
              <div className="mb-8 max-w-4xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-emerald-300">A different way to discover Ayurveda</p><h2 id="global-discovery-heading" className="mb-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">You know the <span className="text-amber-300">turmeric latte.</span><br />Discover the tradition behind it.</h2><p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">From golden milk and wellness routines to doshas and traditional therapies: begin with something you recognize, then explore the ideas, history and evidence behind Ayurveda.</p></div>
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {FAMILIARITY_HOOKS.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = activeHook === idx;
                  return (
                    <button key={item.id} type="button" onClick={() => setActiveHook(idx)} aria-pressed={isSelected} aria-controls="discovery-detail" className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-slate-900/80 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${isSelected ? `${item.ring} shadow-[0_0_24px_rgba(212,175,55,.12)]` : "border-white/15 hover:border-white/40"}`}>
                      <div className="relative h-44 w-full overflow-hidden"><div className="h-full w-full transition-transform duration-700 group-hover:scale-105"><DiscoveryVisual kind={item.visual} /></div><div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${item.gradient}`} /></div>
                      <div className="flex flex-1 flex-col p-4"><span className={`mb-2 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider ${item.color}`}><Icon className="h-3.5 w-3.5" />{item.tag}</span><p className="mb-2 text-xs italic leading-relaxed text-slate-400">“{item.knownAs}”</p><h3 className="mb-2 text-base font-extrabold leading-snug text-white">{item.hookTitle}</h3><p className="mb-4 flex-1 text-xs leading-relaxed text-slate-300">{item.hookDesc}</p><span className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color}`}>{isSelected ? "Currently exploring" : "Reveal the connection"}<ChevronRight className="h-4 w-4" /></span></div>
                    </button>
                  );
                })}
              </div>
              <div id="discovery-detail" aria-live="polite" aria-atomic="true" className="mb-6 overflow-hidden rounded-2xl border border-white/15 bg-white/[.06] p-5 backdrop-blur-sm sm:p-7">
                <div className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-200"><Sparkles className="h-4 w-4" /> Your next discovery</div>
                <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center"><div><p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">You already know</p><h3 className="text-xl font-extrabold text-white">{selected.familiar}</h3></div><ArrowRight aria-hidden="true" className="h-6 w-6 rotate-90 text-amber-300 md:rotate-0" /><div><p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-300">Now discover</p><h3 className="text-xl font-extrabold text-white">{selected.deeper}</h3></div></div>
                <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300">{selected.insight}</p>
                <Link href={selected.href} className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-colors sm:w-auto ${selected.button}`}>{selected.cta}<ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-amber-300/25 bg-gradient-to-r from-amber-300/10 to-emerald-300/10 p-5 md:flex-row md:p-6"><div className="flex items-start gap-3"><div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10 sm:flex"><BookOpen className="h-6 w-6 text-amber-200" /></div><div><p className="font-extrabold text-white">Ready to explore the complete Ayurveda Global Hub?</p><p className="mt-1 text-sm leading-relaxed text-slate-300">Continue from familiar concepts to classical foundations, daily practices and deeper learning modules.</p></div></div><Link href="/atreya" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-center text-xs font-extrabold uppercase tracking-wide text-slate-950 transition-colors hover:bg-amber-300 md:w-auto">Enter Full Ayurveda Global Hub<ArrowRight className="h-4 w-4" /></Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BAMS SCHOLAR & 2ND PROF VAULT */}
      <div className="bg-background py-6 md:py-10 px-4 md:px-6 relative z-10"><div className="max-w-6xl mx-auto"><div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-2xl p-6 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group hover:border-amber-700/50 transition-colors duration-500 w-full"><div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative z-10 w-full md:w-auto text-center md:text-left"><div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30 shadow-inner"><Leaf className="w-6 h-6 md:w-8 md:h-8 text-amber-800 dark:text-amber-500" /></div><div><div className="inline-flex items-center justify-center md:justify-start gap-1.5 px-2.5 md:px-3 py-1 rounded-sm bg-amber-500/15 text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-amber-950 dark:text-amber-400 mb-2 md:mb-3 border border-amber-600/30"><Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS Curriculum</div><h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">BAMS Scholar &amp; 2nd Prof Vault</h2><p className="text-foreground/80 font-medium max-w-xl leading-relaxed mx-auto md:mx-0 text-sm md:text-base">Track your 1st, 2nd &amp; 3rd Prof syllabus, decode high-yield Sanskrit Shlokas, and access interactive Charaka Samhita MCQs &amp; university exam papers.</p></div></div><div className="shrink-0 w-full md:w-auto relative z-10 flex flex-col sm:flex-row md:flex-col gap-3"><Link href="/bams-scholar" className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-6 md:px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md">Open BAMS Scholar Hub <ArrowRight className="w-5 h-5" /></Link><Link href="/bams-hub" className="w-full md:w-auto bg-amber-500/15 hover:bg-amber-500/25 text-amber-950 dark:text-amber-300 border border-amber-700/40 dark:border-amber-500/40 font-bold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" /> Direct to 2nd Prof Command Center</Link></div></div></div></div>

      {/* 5. CORE PILLARS GRID & E-BOOKS PROMO */}
      <div className="bg-surface backdrop-blur-md border-t border-surfaceBorder py-20 px-6 relative z-10 transition-colors duration-300"><div className="max-w-6xl mx-auto"><div className="text-center mb-16"><p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">ATREYA Med • Clinical &amp; Academic Ecosystem</p><h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Why Scholars &amp; Global Learners Choose ATREYA Med</h2><p className="text-foreground/60 font-medium max-w-2xl mx-auto">Bridging classical Sanskrit Samhitas with modern biomedical evidence, structured exam preparation, and clinical authority.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/bams-scholar" className="group bg-background p-8 border border-surfaceBorder hover:border-primary/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"><div><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6"><Brain className="w-6 h-6 text-primary" /></div><h3 className="font-heading text-xl font-bold text-foreground mb-3">NCISM &amp; AIAPGET Mastery</h3><p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">Complete year-wise BAMS (1st, 2nd &amp; 3rd Prof) syllabus checklists, Shloka memorization tricks, simplified Samhita breakdowns, and previous year question papers.</p></div><span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">Open BAMS Scholar Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></Link>
        <Link href="/interactive-topics" className="group bg-background p-8 border border-surfaceBorder hover:border-success/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"><div><div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6"><Activity className="w-6 h-6 text-success" /></div><h3 className="font-heading text-xl font-bold text-foreground mb-3">Evidence-Based Clinical Modules</h3><p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">Go beyond generic wellness trends. Explore interactive clinical modules that connect classical Dravyaguna and Panchakarma to modern neuro-physiology.</p></div><span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-success">Explore Clinical Modules <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></Link>
        <Link href="/e-books" className="group bg-background p-8 border border-surfaceBorder hover:border-warning/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"><div><div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-6"><ShieldCheck className="w-6 h-6 text-amber-700 dark:text-warning" /></div><h3 className="font-heading text-xl font-bold text-foreground mb-3">Unshakeable Clinical Aura</h3><p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">Master bedside case-taking, viva-voce examination confidence, and scientific communication so you command respect in any medical symposium worldwide.</p></div><span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-warning">Open 3D E-Book Library <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></Link>
      </div></div></div>

      {/* 6. REELS & COMMUNITY SUPPORT */}
      <LandingReels />
      <div className="bg-background border-t border-surfaceBorder py-12 md:py-20 px-4 md:px-6 relative z-10 transition-colors duration-300"><div className="max-w-6xl mx-auto"><div className="bg-surface backdrop-blur-md border border-surfaceBorder rounded-2xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden"><div className="flex-1 text-center md:text-left z-10"><div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-xs md:text-sm font-bold text-primary mb-4 md:mb-6 border border-primary/20"><Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current text-primary" /> Support ATREYA Med</div><h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Help Us Take Authentic Ayurveda to the World</h2><p className="text-foreground/70 text-sm md:text-lg mb-5 md:mb-6 leading-relaxed">We are on a mission to digitize classical Samhitas, provide free high-yield exam tools for BAMS scholars across India, and establish Ayurveda globally as a respected clinical science.</p></div><div className="shrink-0 flex flex-col items-center z-10"><div className="bg-white p-3 md:p-4 rounded-xl shadow-md border border-gray-200 mb-3 md:mb-4"><Image src="/QR_1780487966.png" alt="Support ATREYA Med via UPI" width={160} height={160} className="object-contain w-40 h-40 md:w-48 md:h-48" /></div><p className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-success" /> Secure UPI Contribution</p></div></div></div></div>
    </div>
  );
}
