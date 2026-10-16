"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen, LayoutGrid, Flame, Wind, Droplets, Utensils, Clock, Scale, Info } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

// =========================================================
// SHARED STRUCTURED DATA (Single Notation)
// =========================================================
const digestionFactors = [
  {
    num: "1",
    term: "ऊष्मा (Ushma)",
    english: "Digestive Heat / Agni",
    action: "ऊष्मा पचति",
    meaning: "ऊष्मा भोजन को पचाती है।",
    desc: "यह शरीर की 'जठराग्नि' या पाचक पित्त है। यह सभी 6 भावों में सबसे मुख्य है, क्योंकि बिना अग्नि के खाना नहीं पच सकता।",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
  },
  {
    num: "2",
    term: "वायु (Vayu)",
    english: "Biological Air / Motility",
    action: "वायुरपकर्षति",
    meaning: "वायु भोजन को अग्नि के पास खींच कर लाती है।",
    desc: "यह शरीर की गतिशीलता (समान वायु) है। खाने को सही जगह पहुँचाना, अग्नि को भड़काना, और रस व मल को अलग करना इसका काम है।",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
  },
  {
    num: "3",
    term: "क्लेद (Kleda)",
    english: "Moisture / Fluidity",
    action: "क्लेदः शैथिल्यमापादयति",
    meaning: "क्लेद भोजन को ढीला करता है।",
    desc: "यह शरीर की नमी या तरल पदार्थ (जैसे क्लेदक कफ) है। यह सूखे भोजन को गीला करके तोड़ता है ताकि वह आसानी से पच सके।",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
  },
  {
    num: "4",
    term: "स्नेह (Sneha)",
    english: "Unctuousness / Fats",
    action: "स्नेहो मार्दवं जनयति",
    meaning: "स्नेह भोजन में कोमलता लाता है।",
    desc: "यह चिकनाई है जो भोजन को मुलायम बनाती है, जिससे खाना आंतों में चिपकता नहीं है और आसानी से आगे खिसकता रहता है।",
    icon: Utensils,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
  },
  {
    num: "5",
    term: "काल (Kala)",
    english: "Time",
    action: "कालः पर्याप्तिं अभिनिर्वर्तयति",
    meaning: "काल पाचन चक्र को पूरा करता है।",
    desc: "कोई भी भोजन तुरंत नहीं पचता। उसे पूरी तरह पचने और धातुओं में बदलने के लिए एक निश्चित समय (काल) की आवश्यकता होती है।",
    icon: Clock,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
  },
  {
    num: "6",
    term: "समयोग (Samayoga)",
    english: "Proper Combination / Balance",
    action: "समयोगस्त्वेषां परिणामधातुसाम्यकरः सम्पद्यते",
    meaning: "उचित तालमेल ही धातुसाम्य करता है।",
    desc: "ऊपर बताए गए पाँचों भावों का सही तालमेल होना और 'अष्ट आहार विधि' का पालन करना ही समयोग है। यही संतुलित अवस्था भोजन को फायदेमंद बनाती है।",
    icon: Scale,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
];

export default function CharakaSharirChapter6() {
  const [noteTheme, setNoteTheme] = useState<"notebook" | "tactical">("notebook");

  // =========================================================
  // EXTRA THEME: MODERN TACTICAL CARDS & FLOWCHARTS VIEW
  // =========================================================
  if (noteTheme === "tactical") {
    return (
      <div className="min-h-screen bg-background text-foreground py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* TOP BAR: BACK LINK + THEME SWITCHER */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/short-notes/charaka-samhita/sharir"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-bold text-xs md:text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Sharira Hub
            </Link>

            <button
              onClick={() => setNoteTheme("notebook")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500/20 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" /> Switch to Handwritten Notebook Theme
            </button>
          </div>

          {/* HEADER BANNER */}
          <header className="bg-surface/90 backdrop-blur-md border border-amber-500/20 rounded-sm p-6 md:p-10 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Charaka Samhita // Sharira Sthana
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
              Chapter 6: शरीरविचय शारीर
            </h1>
            <p className="text-foreground/70 text-sm md:text-base max-w-3xl leading-relaxed">
              &quot;आहार परिणामकर भाव&quot; — खाए हुए भोजन को पचाकर शरीर की धातुओं (रक्त, मांस आदि) में बदलने के लिए आवश्यक 6 मुख्य भावों का शास्त्रीय विश्लेषण।
            </p>
          </header>

          {/* THE 6 FACTORS OF DIGESTION (CARDS GRID) */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
              <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
                Core Principles
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                षट् आहार परिणामकर भाव (6 Factors for Digestion)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digestionFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div key={factor.num} className="bg-background/60 border border-surfaceBorder rounded-sm overflow-hidden flex flex-col group hover:border-surfaceBorder/80 transition-colors">
                    <div className={`p-4 ${factor.bg} border-b ${factor.border} flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${factor.color}`} />
                        <h3 className={`font-bold text-lg ${factor.color}`}>{factor.term}</h3>
                      </div>
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-sm bg-black/20 ${factor.color}`}>#{factor.num}</span>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-mono text-foreground/50 uppercase tracking-widest mb-3">
                        {factor.english}
                      </div>
                      
                      <div className="bg-surface/50 border border-surfaceBorder/50 p-3 rounded-sm mb-4">
                        <div className="font-bold text-foreground text-sm mb-1 font-serif italic">
                          &quot;{factor.action}&quot;
                        </div>
                        <div className="text-xs text-primary font-medium">
                          {factor.meaning}
                        </div>
                      </div>
                      
                      <p className="text-sm text-foreground/75 leading-relaxed flex-1">
                        {factor.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SUMMARY BANNER */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 shadow-lg flex items-start gap-4">
            <Info className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-foreground mb-2">संक्षेप में सारांश (Summary)</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                भोजन को <strong>ऊष्मा</strong> पचाती है, <strong>वायु</strong> उसे खिसकाती और बांटती है, <strong>क्लेद</strong> उसे गीला करता है, <strong>स्नेह</strong> उसे मुलायम बनाता है, <strong>काल</strong> उसे पचने का समय देता है, और <strong>समयोग</strong> इन सबको संतुलन में रखकर शरीर को स्वस्थ बनाता है।
              </p>
            </div>
          </section>

        </div>
      </div>
    );
  }

  // =========================================================
  // PRIMARY THEME: CHAPTER 6 HANDWRITTEN NOTEBOOK STYLE
  // =========================================================
  return (
    <HandwrittenCanvas>
      <div
        className="w-full min-h-screen relative overflow-hidden"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          backgroundImage: `
            linear-gradient(90deg, transparent 56px, rgba(239, 68, 68, 0.45) 56px, rgba(239, 68, 68, 0.45) 58px, transparent 58px),
            repeating-linear-gradient(transparent, transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundAttachment: "local",
          backgroundPosition: "0 0",
        }}
      >
        <div className="pl-[72px] sm:pl-[84px] pr-4 sm:pr-8 py-[32px] w-full relative">
          
          {/* FIXED BADGE */}
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-transparent text-[var(--theme-text)] z-10"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Charaka<br/><NAccent>Sharira</NAccent>
          </div>

          {/* Top Navigation + Extra Theme Switcher */}
          <div className="mb-[32px] flex flex-wrap items-center justify-between gap-2 min-h-[32px] pr-20 md:pr-28">
            <Link 
              href="/short-notes/charaka-samhita/sharir" 
              className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-xs md:text-base font-sans"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Sharira Hub
            </Link>

            <button
              onClick={() => setNoteTheme("tactical")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] text-[11px] md:text-xs font-sans font-bold uppercase tracking-wider hover:bg-[var(--theme-accent)]/10 transition-colors rounded-sm cursor-pointer"
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Switch to Tactical Flowchart Theme
            </button>
          </div>

          {/* Main Chapter Title */}
          <div className="mb-[32px] flex justify-center">
            <HandwrittenTitle>
              अध्याय 6: शरीरविचय शारीर
            </HandwrittenTitle>
          </div>

          <div className="text-center mb-[32px] h-[32px] flex items-center justify-center">
            <span className="inline-block px-3 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-widest uppercase transform -rotate-1 bg-[var(--theme-bg)]/80">
              आहार परिणामकर भाव (6 Factors for Digestion)
            </span>
          </div>

          {/* Q&A STYLE INTRODUCTION */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[32px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">Q.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                &apos;आहार परिणामकर भाव&apos; क्या हैं?
              </NText>
            </div>
            
            <div className="flex gap-2 md:gap-3">
              <span className="font-bold text-[var(--theme-text)] shrink-0 w-6 md:w-8 opacity-70 leading-[32px]">Ans.</span>
              <div className="text-sm md:text-lg opacity-90 font-medium">
                <p className="leading-[32px] mb-[32px] m-0">
                  <NText bold>आहार परिणामकर भाव: </NText> 
                  &apos;आहार&apos; (भोजन) का &apos;परिणाम&apos; (Digestion / Transformation) जिन भावों के कारण होता है, उन्हें आहार परिणामकर भाव कहते हैं। 
                </p>
                <p className="leading-[32px] mb-[32px] m-0 opacity-80 italic">
                  सरल शब्दों में, खाए हुए भोजन को पचाकर शरीर की धातुओं (रक्त, मांस आदि) में बदलने के लिए जिन चीज़ों की आवश्यकता होती है, वे आहार परिणामकर भाव कहलाते हैं। आचार्य चरक ने ऐसे 6 भाव बताए हैं।
                </p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* THE 6 FACTORS LIST */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              षट् आहार परिणामकर भाव
            </h3>

            <div className="text-sm md:text-lg space-y-[64px]">
              {digestionFactors.map((factor) => (
                <div key={factor.num}>
                  <div className="flex gap-2 items-start">
                    <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">
                      {factor.num}.
                    </span>
                    <NAccent bold className="text-base md:text-xl leading-[32px]">
                      {factor.term} ({factor.english})
                    </NAccent>
                  </div>
                  <div className="pl-6 md:pl-6 opacity-90 font-medium mt-2">
                    <p className="leading-[32px] m-0"><NText bold>सरल अर्थ:</NText> {factor.desc}</p>
                    <p className="leading-[32px] m-0">
                      <NText bold>कार्य (Action):</NText> <NAccent bold>&quot;{factor.action}&quot;</NAccent> — {factor.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUMMARY SECTION */}
          <div className="mb-[64px]">
            <NText bold className="text-base md:text-xl text-[var(--theme-accent)] block uppercase tracking-widest opacity-80 leading-[32px] mb-[32px]">
              संक्षेप में सारांश (Summary)
            </NText>
            <p className="text-sm md:text-lg font-medium opacity-90 leading-[32px] m-0">
              भोजन को <NText bold>ऊष्मा</NText> पचाती है, <NText bold>वायु</NText> उसे खिसकाती और बांटती है, <NText bold>क्लेद</NText> उसे गीला करता है, <NText bold>स्नेह</NText> उसे मुलायम बनाता है, <NText bold>काल</NText> उसे पचने का समय देता है, और <NText bold>समयोग</NText> इन सबको संतुलन में रखकर शरीर को स्वस्थ बनाता है।
            </p>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
