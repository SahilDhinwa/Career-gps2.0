"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Gamepad2, Trophy, Heart, RotateCcw, Terminal } from "lucide-react";

export default function RetroDesignPage() {
  const [phosphor, setPhosphor] = useState<"green" | "amber" | "cyan">("green");
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState<string>("EXTERNAL EXAMINER APPROACHES! SELECT YOUR ANSWER:");

  const questions = [
    {
      q: "Q1: WHICH DOSHA GOVERNS ALL MOVEMENT (CHALA GUNA) IN THE BODY?",
      options: ["A) PITTA DOSHA", "B) VATA DOSHA", "C) KAPHA DOSHA"],
      correct: 1,
      explain: "CRITICAL HIT! VATA (PRANA, UDANA, VYANA, SAMANA, APANA) DRIVES ALL MOTION.",
    },
    {
      q: "Q2: HOW MANY TOTAL MARMA POINTS ARE DESCRIBED BY ACHARYA SUSHRUTA?",
      options: ["A) 107 MARMAS", "B) 108 MARMAS", "C) 96 MARMAS"],
      correct: 0,
      explain: "SUPER EFFECTIVE! SUSHRUTA SAMHITA SHARIRA STHANA DESCRIBES 107 MARMAS.",
    },
    {
      q: "Q3: WHAT IS THE VIPAKA (POST-DIGESTIVE EFFECT) OF SHUNTI (DRY GINGER)?",
      options: ["A) KATU VIPAKA", "B) AMLA VIPAKA", "C) MADHURA VIPAKA"],
      correct: 2,
      explain: "FLAWLESS VICTORY! DESPITE KATU RASA, SHUNTI HAS MADHURA VIPAKA.",
    },
  ];

  const colorMap = {
    green: "text-[#4ADE80] border-[#4ADE80]",
    amber: "text-[#FBBF24] border-[#FBBF24]",
    cyan: "text-[#22D3EE] border-[#22D3EE]",
  };

  const handleAnswer = (idx: number) => {
    if (lives <= 0) return;
    const current = questions[qIndex];
    if (idx === current.correct) {
      setScore((s) => s + 500);
      setFeedback(current.explain);
      setTimeout(() => {
        setQIndex((prev) => (prev + 1) % questions.length);
      }, 1100);
    } else {
      setLives((l) => Math.max(0, l - 1));
      setFeedback("MISSED! EXAMINER RAISES AN EYEBROW (-1 HP). TRY AGAIN!");
    }
  };

  const resetGame = () => {
    setScore(0);
    setLives(3);
    setQIndex(0);
    setFeedback("NEW VIVA SESSION INITIALIZED. READY PLAYER ONE!");
  };

  return (
    <div className={`min-h-screen bg-[#050805] ${colorMap[phosphor]} font-mono pt-6 pb-32 px-4 sm:px-8 relative overflow-hidden`}>
      
      {/* CRT Scanline Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-20 opacity-25"
        style={{
          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.65) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Top Arcade Bezel Controls */}
      <div className={`max-w-5xl mx-auto border-2 ${colorMap[phosphor]} bg-black/80 p-4 mb-10 flex flex-wrap items-center justify-between gap-4`}>
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase px-3 py-1.5 border border-current hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> [INSERT COIN / EXIT]
        </Link>

        {/* Phosphor CRT Monitor Switcher */}
        <div className="flex items-center gap-2 text-xs">
          <span>CRT PHOSPHOR:</span>
          {(["green", "amber", "cyan"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setPhosphor(mode)}
              className={`px-2.5 py-1 uppercase border font-bold ${
                phosphor === mode ? "bg-current text-black" : "border-current opacity-60"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Main CRT Curved Monitor Cabinet */}
      <div className={`max-w-5xl mx-auto border-4 ${colorMap[phosphor]} rounded-3xl p-6 sm:p-12 bg-[#071108]/90 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]`}>
        
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-dashed border-current/40">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6" />
            <span className="text-sm sm:text-base font-bold uppercase tracking-widest">
              STYLE #13 • AYUR-QUEST 1986 (CRT ARCADE)
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-bold">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4" /> SCORE: {score}
            </span>
            <span className="flex items-center gap-1">
              HP: {Array.from({ length: lives }).map((_, i) => (
                <Heart key={i} className="w-4 h-4 fill-current inline" />
              ))}
            </span>
          </div>
        </div>

        {/* Arcade Boss Battle Screen */}
        <div className="mb-8">
          <p className="text-xs uppercase opacity-75 mb-2">
            {"// STAGE 01: PRACTICAL VIVA-VOCE BOSS BATTLE"}
          </p>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider mb-6">
            {questions[qIndex].q}
          </h1>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {questions[qIndex].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full text-left p-4 border-2 border-current hover:bg-white/10 active:translate-y-0.5 font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
              >
                &gt; {opt}
              </button>
            ))}
          </div>

          {/* Terminal Readout Log */}
          <div className="p-4 border border-current/50 bg-black/60 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-bold">
              [SYSTEM]: {feedback}
            </p>
            <button
              onClick={resetGame}
              className="inline-flex items-center gap-1.5 text-xs border border-current px-3 py-1.5 uppercase hover:bg-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Arcade
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
