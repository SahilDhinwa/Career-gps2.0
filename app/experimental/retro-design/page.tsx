"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Radio, Volume2, Disc, Sparkles, 
  BookOpen, Compass, Play, Pause, Award 
} from "lucide-react";

export default function RetroDesignPage() {
  const [stationIndex, setStationIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [warmthFilter, setWarmthFilter] = useState<"1970s" | "sepia" | "pressoff">("1970s");

  const stations = [
    {
      freq: "88.5 MHz",
      band: "SW-1 • CLASSICAL",
      title: "Charaka Samhita • Sutrasthana Broadcast",
      host: "Acharya Punarvasu Atreya Archive",
      quote: "Timeless clinical wisdom recorded on warm analog tape. Before modern synthetic shortcuts, diagnosis began with patience, observation, and reverence for nature.",
      needlePos: "18%",
    },
    {
      freq: "94.2 MHz",
      band: "AM • SURGICAL HERITAGE",
      title: "Sushruta’s 107 Marmas & Yantra Shastra",
      host: "Kashi Vintage Medical Transcription",
      quote: "The foundational instruments of surgery—crafted in brass and iron—remain the ancestors of every modern operating theater.",
      needlePos: "45%",
    },
    {
      freq: "101.8 MHz",
      band: "FM • VEBLEN GOOD",
      title: "From Rajasthan Courtyards to Global Halls",
      host: "Sahil Dhinwa • Origin Broadcast",
      quote: "Trends come and go, but a scholar who masters deep domain knowledge and classic articulate grace never goes out of style.",
      needlePos: "72%",
    },
    {
      freq: "107.4 MHz",
      band: "SW-2 • DRAVYAGUNA",
      title: "The 1974 Himalayan Herbarium Field Tapes",
      host: "Botanical Expedition Reel #13",
      quote: "Identifying Ashwagandha, Brahmi, and Guduchi by leaf venation, soil aroma, and classical Rasa-Panchaka.",
      needlePos: "90%",
    },
  ];

  const currentStation = stations[stationIndex];

  const cycleStation = () => {
    setStationIndex((prev) => (prev + 1) % stations.length);
  };

  return (
    <div 
      className={`min-h-screen font-serif pt-6 pb-32 px-4 sm:px-8 transition-all duration-500 ${
        warmthFilter === "sepia" 
          ? "bg-[#E5D3B3] sepia-[.25]" 
          : warmthFilter === "pressoff"
          ? "bg-[#F4EFE6]"
          : "bg-[#EFE3C8]"
      } text-[#2B2118]`}
    >
      {/* Vintage Typography & Paper Grain Styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .retro-headline {
          color: #9E3420;
          text-shadow: 2px 3px 0px rgba(43, 33, 24, 0.12);
        }
        .retro-card-frame {
          background-color: #EDE0C4;
          background-image: radial-gradient(rgba(158, 52, 32, 0.06) 1px, transparent 0);
          background-size: 16px 16px;
          box-shadow: 0 20px 50px rgba(43, 33, 24, 0.18), inset 0 0 0 1px rgba(43, 33, 24, 0.15);
        }
        .wood-cabinet {
          background: linear-gradient(145deg, #7A4322 0%, #522912 60%, #3A1B0A 100%);
          box-shadow: 
            -12px 16px 28px rgba(0, 0, 0, 0.35),
            inset 0 2px 3px rgba(255, 215, 160, 0.35),
            inset 0 -4px 8px rgba(0, 0, 0, 0.6);
        }
        .speaker-grille {
          background-color: #C89D66;
          background-image: 
            linear-gradient(rgba(58, 27, 10, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58, 27, 10, 0.35) 1px, transparent 1px);
          background-size: 6px 6px;
          box-shadow: inset 0 3px 8px rgba(0,0,0,0.45);
        }
      `}} />

      {/* Top Controls Outside the Vintage Frame */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 bg-[#23332F] text-[#EFE3C8] hover:bg-[#9E3420] transition-colors font-sans font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Design Directory
        </Link>

        <div className="flex flex-wrap items-center gap-2 font-sans">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#5E2C1E] mr-1">
            Paper Stock:
          </span>
          {[
            { id: "1970s" as const, label: "1970s Warm Cream" },
            { id: "sepia" as const, label: "Aged Sepia" },
            { id: "pressoff" as const, label: "Fresh Press" },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setWarmthFilter(mode.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase border transition-all ${
                warmthFilter === mode.id
                  ? "bg-[#9E3420] text-[#EFE3C8] border-[#5E2C1E] shadow-xs"
                  : "bg-[#E4D5B7] text-[#5E2C1E] border-[#C5B393]"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* =================================================================
          MAIN REFERENCE SHOWCASE WINDOW ("THE CLASSIC NEVER FADES")
          Matches Screenshot #13 Layout, Colors, Stripes & Tabletop Radio
          ================================================================= */}
      <div className="max-w-6xl mx-auto retro-card-frame rounded-3xl overflow-hidden border-2 border-[#23332F]/25 mb-16 relative">
        
        {/* Dark Vintage Slate-Teal Header Bar ("Old School") */}
        <div className="bg-[#23332F] text-[#EFE3C8] px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#9E3420]">
          <div className="flex items-center gap-2.5">
            <Radio className="w-5 h-5 text-[#E5A93B]" />
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#F3E5C8]">
              Old School
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-sans uppercase tracking-widest bg-[#E5A93B]/20 text-[#E5A93B] border border-[#E5A93B]/40 px-2.5 py-0.5 rounded">
              Style #13 • Retro Design
            </span>
          </div>

          <nav className="flex items-center gap-5 sm:gap-8 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#D8CBB0]">
            <button onClick={() => setStationIndex(0)} className="hover:text-[#E5A93B] transition-colors">HOME</button>
            <button onClick={() => setStationIndex(1)} className="hover:text-[#E5A93B] transition-colors">ABOUT</button>
            <button onClick={() => setStationIndex(2)} className="hover:text-[#E5A93B] transition-colors">SHOP</button>
            <button onClick={() => setStationIndex(3)} className="hover:text-[#E5A93B] transition-colors">CONTACT</button>
          </nav>
        </div>

        {/* Hero Body with 1970s Diagonal Stripes in Bottom-Right */}
        <div className="relative p-8 sm:p-14 lg:p-16 overflow-hidden">
          
          {/* 1970s Retro Diagonal Color Stripes (Bottom-Right Corner) */}
          <div className="pointer-events-none select-none absolute -bottom-24 -right-24 w-96 h-96 -rotate-45 flex flex-col opacity-90 z-0">
            <div className="h-10 bg-[#3B7A75] w-full shadow-xs" />
            <div className="h-10 bg-[#E5A93B] w-full shadow-xs" />
            <div className="h-10 bg-[#D96B27] w-full shadow-xs" />
            <div className="h-14 bg-[#9E3420] w-full shadow-xs" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: "The Classic Never Fades" Typography & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block font-sans text-xs font-extrabold uppercase tracking-[0.25em] text-[#5E2C1E] border-b-2 border-[#9E3420] pb-1">
                Inspired By Past Decades • Vintage Vibe
              </div>

              <h1 className="retro-headline font-serif font-black text-5xl sm:text-7xl leading-[0.98] tracking-tight">
                The <br />
                Classic <br />
                Never <br />
                Fades
              </h1>

              <p className="text-[#4A3828] font-medium text-base sm:text-lg max-w-md leading-relaxed">
                Five-thousand-year-old Ayurvedic Samhitas and timeless human storytelling don&apos;t need neon gimmicks. Warm paper tones, tactile knobs, and bold serif ink create instant emotional trust.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 font-sans">
                <button
                  onClick={cycleStation}
                  className="bg-[#5E2C1E] hover:bg-[#9E3420] text-[#F5EAD4] font-black text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-xl shadow-[0_6px_0_#36170E,0_10px_20px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-[0_2px_0_#36170E] transition-all cursor-pointer"
                >
                  TUNE RADIO STATION ({stationIndex + 1}/4)
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 bg-[#E3D3B2] hover:bg-[#D6C39C] text-[#3A1B0A] border-2 border-[#5E2C1E] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? "Pause Tape" : "Play Tape"}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Custom Interactive 1970s Tabletop Radio */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              
              <div className="w-full max-w-md">
                {/* Vintage Radio Top Carry Handle */}
                <div className="mx-auto w-3/4 h-8 border-t-[10px] border-x-[10px] border-[#3A1B0A] rounded-t-2xl relative">
                  <div className="absolute -bottom-1 -left-3 w-5 h-4 bg-gradient-to-b from-[#E5A93B] to-[#996515] rounded-xs border border-black" />
                  <div className="absolute -bottom-1 -right-3 w-5 h-4 bg-gradient-to-b from-[#E5A93B] to-[#996515] rounded-xs border border-black" />
                </div>

                {/* Wooden Radio Body */}
                <div className="wood-cabinet rounded-[28px] p-5 sm:p-6 border-4 border-[#2B1306] relative">
                  
                  {/* Inner Brushed Bezel */}
                  <div className="bg-[#231912] rounded-2xl p-4 border-2 border-[#B88648]">
                    
                    {/* Top Section: Woven Speaker Grille + Main Upper Tuning Dial */}
                    <div className="grid grid-cols-12 gap-4 items-center mb-4">
                      
                      {/* Woven Mesh Grille (8 cols) */}
                      <div className="col-span-8 speaker-grille h-32 rounded-xl border-2 border-[#3A1B0A] p-3 flex flex-col justify-between relative overflow-hidden">
                        <div className="inline-flex items-center gap-1.5 bg-[#2B1306]/85 text-[#E5A93B] px-2.5 py-1 rounded text-[10px] font-sans font-bold uppercase tracking-widest self-start">
                          <Volume2 className={`w-3 h-3 ${isPlaying ? "animate-bounce" : ""}`} />
                          <span>{currentStation.band}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-serif italic font-bold text-xs text-[#2B1306] bg-[#EFE3C8]/90 px-2 py-0.5 rounded border border-[#3A1B0A]">
                            Veblen Hi-Fi 1974
                          </span>
                        </div>
                      </div>

                      {/* Large Upper Rotary Dial (4 cols) */}
                      <div className="col-span-4 flex flex-col items-center justify-center">
                        <button
                          onClick={cycleStation}
                          title="Click to rotate tuning dial"
                          className="w-24 h-24 rounded-full bg-gradient-to-b from-[#3A2E25] to-[#17110D] border-4 border-[#C89D66] shadow-[0_6px_14px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                        >
                          <div 
                            className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B88648] via-[#E5C185] to-[#FFF2D6] border-2 border-[#2B1306] flex items-center justify-center transition-transform duration-500"
                            style={{ transform: `rotate(${stationIndex * 75}deg)` }}
                          >
                            <div className="w-1.5 h-6 bg-[#9E3420] rounded-full -translate-y-3" />
                          </div>
                        </button>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#E5C185] mt-1.5">
                          TUNE DIAL
                        </span>
                      </div>
                    </div>

                    {/* Bottom Section: Two Knobs + Illuminated Analog Frequency Scale */}
                    <div className="grid grid-cols-12 gap-3 items-center bg-[#140E0A] p-3 rounded-xl border border-[#6E4726]">
                      
                      {/* Left Small Knob */}
                      <div className="col-span-2 flex justify-center">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-11 h-11 rounded-full bg-gradient-to-b from-[#E5C185] to-[#8C6230] border-2 border-[#2B1306] shadow-md flex items-center justify-center cursor-pointer"
                          title="Power / Volume"
                        >
                          <div className="w-3 h-3 rounded-full bg-[#2B1306]" />
                        </button>
                      </div>

                      {/* Illuminated Analog Frequency Scale */}
                      <div className="col-span-8 bg-gradient-to-r from-[#292014] via-[#3D2F1D] to-[#292014] border border-[#B88648]/60 rounded-lg px-3 py-2 relative overflow-hidden">
                        <div className="flex justify-between text-[9px] font-mono text-[#E5A93B]/80 mb-1">
                          <span>88</span>
                          <span>92</span>
                          <span>96</span>
                          <span>102</span>
                          <span>108 MHz</span>
                        </div>
                        <div className="w-full h-2 bg-black/60 rounded-full relative">
                          {/* Glowing Red Tuner Needle */}
                          <div 
                            className="absolute -top-1.5 w-1.5 h-5 bg-[#FF4500] shadow-[0_0_8px_#FF4500] transition-all duration-500"
                            style={{ left: currentStation.needlePos }}
                          />
                        </div>
                        <p className="text-[10px] font-mono font-bold text-[#F5EAD4] text-center mt-1.5 truncate">
                          {currentStation.freq} — {currentStation.title}
                        </p>
                      </div>

                      {/* Right Small Knob */}
                      <div className="col-span-2 flex justify-center">
                        <button
                          onClick={cycleStation}
                          className="w-11 h-11 rounded-full bg-gradient-to-b from-[#E5C185] to-[#8C6230] border-2 border-[#2B1306] shadow-md flex items-center justify-center cursor-pointer"
                          title="Next Station"
                        >
                          <div className="w-3 h-3 rounded-full bg-[#2B1306]" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =================================================================
          LIVE VINTAGE BROADCAST TRANSCRIPT & STUDENT ARCHIVE CARDS
          ================================================================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Live Selected Broadcast Card (7 cols) */}
        <div className="lg:col-span-7 bg-[#E6D7B8] border-2 border-[#5E2C1E] rounded-2xl p-7 sm:p-9 shadow-[6px_6px_0px_#5E2C1E]">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-dashed border-[#5E2C1E]/40">
            <span className="font-sans text-xs font-black uppercase tracking-widest text-[#9E3420]">
              NOW BROADCASTING // {currentStation.freq}
            </span>
            <span className="font-sans text-xs font-bold bg-[#23332F] text-[#EFE3C8] px-3 py-1 rounded">
              {currentStation.band}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#2B2118] mb-2">
            {currentStation.title}
          </h2>
          <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#5E2C1E] mb-5">
            Archival Source: {currentStation.host}
          </p>

          <blockquote className="p-5 rounded-xl bg-[#EFE3C8] border-l-4 border-[#9E3420] text-base sm:text-lg italic leading-relaxed text-[#3A2A1D]">
            &ldquo;{currentStation.quote}&rdquo;
          </blockquote>
        </div>

        {/* Right: Why Retro Design Works for Students (5 cols) */}
        <div className="lg:col-span-5 bg-[#23332F] text-[#EFE3C8] border-2 border-[#2B2118] rounded-2xl p-7 sm:p-9 shadow-[6px_6px_0px_#9E3420] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-sans font-black uppercase tracking-widest text-[#E5A93B] mb-4">
              <Sparkles className="w-4 h-4" /> Design Psychology
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              Why Warm Retro Connects With BAMS Scholars
            </h3>
            <p className="text-sm text-[#D8CBB0] font-sans leading-relaxed mb-6">
              Ayurveda is rooted in heritage. When you pair 1970s warm parchment tones, deep forest greens, and terracotta typography with classical subjects like <em>Dravyaguna</em> or <em>Itihas</em>, the digital screen feels like a cherished library.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/15 font-sans text-center text-[10px] font-bold uppercase">
            <div className="bg-[#3B7A75] text-white py-2 rounded">Teal #3B7A75</div>
            <div className="bg-[#E5A93B] text-black py-2 rounded">Gold #E5A93B</div>
            <div className="bg-[#D96B27] text-white py-2 rounded"> Rust #D96B27</div>
            <div className="bg-[#9E3420] text-white py-2 rounded">Brick #9E3420</div>
          </div>
        </div>

      </div>

    </div>
  );
}
