"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Scale, BrainCircuit, Sparkles, BookOpen } from "lucide-react";

// ==========================================
// 🧠 ACTIVE RECALL DATA (IPC/CrPC to BNS/BNSS)
// ==========================================
const FLASHCARDS_DATA = [
  // 1. Inquests & Investigations
  { id: 1, term: "Police Inquest", section: "174 CrPC", newSection: "194 BNSS", category: "Inquests", desc: "Grants authority to a police officer to investigate suicides, murders, accidental, or suspicious deaths." },
  { id: 2, term: "Magistrate Inquest", section: "176 CrPC", newSection: "196 BNSS", category: "Inquests", desc: "Investigation by an Executive Magistrate. Mandatory for deaths in police custody, dowry deaths, police firing, and exhumations." },
  { id: 3, term: "Medical Examination", section: "53 CrPC", newSection: "51 BNSS", category: "Investigations", desc: "Examination of an accused by a medical practitioner at the request of a police officer." },
  
  // 2. Basic Definitions & Evidence
  { id: 4, term: "Injury (Legal Definition)", section: "IPC 44", newSection: "BNS 2(14)", category: "Definitions", desc: "Legally defines injury as any harm illegally caused to a person in body, mind, reputation, or property." },
  { id: 5, term: "Death (Legal Definition)", section: "IPC 46", newSection: "BNS 2(6)", category: "Definitions", desc: "Legally defines death as the death of a human being." },
  { id: 6, term: "False Evidence (Perjury)", section: "IPC 193", newSection: "BNS 229", category: "Evidence", desc: "Punishment for intentionally giving or fabricating false evidence during a judicial proceeding." },
  { id: 7, term: "False Medical Certificate", section: "IPC 197", newSection: "BNS 234", category: "Evidence", desc: "Issuing or signing a medical certificate knowing it to be false in any material point (e.g., faking illness for a patient)." },
  
  // 3. Hurt & Physical Injuries
  { id: 8, term: "Hurt", section: "IPC 319", newSection: "BNS 114", category: "Injuries", desc: "Causing bodily pain, disease, or infirmity to any person." },
  { id: 9, term: "Grievous Hurt", section: "IPC 320", newSection: "BNS 116", category: "Injuries", desc: "Defines 8 specific severe injuries (e.g., emasculation, permanent loss of sight/hearing, bone fractures, disfigurement)." },
  { id: 10, term: "Punishment for Hurt", section: "IPC 323", newSection: "BNS 115(2)", category: "Injuries", desc: "Punishment for voluntarily causing simple hurt." },
  { id: 11, term: "Hurt by Dangerous Weapons", section: "IPC 324", newSection: "BNS 118", category: "Injuries", desc: "Voluntarily causing hurt by means of any instrument used for shooting, stabbing, or cutting." },

  // 4. Medical Negligence, Dowry & Homicide
  { id: 12, term: "Culpable Homicide", section: "IPC 299", newSection: "BNS 100", category: "Homicide", desc: "Causing death by doing an act with the intention or knowledge that it is likely to cause death." },
  { id: 13, term: "Murder", section: "IPC 300", newSection: "BNS 101", category: "Homicide", desc: "When culpable homicide amounts to murder (with specific premeditation and intention)." },
  { id: 14, term: "Death by Negligence (Medical Negligence)", section: "IPC 304A", newSection: "BNS 106", category: "Negligence", desc: "Causing death by a rash or negligent act not amounting to culpable homicide. Primary section applied for Medical Negligence." },
  { id: 15, term: "Dowry Death", section: "IPC 304B", newSection: "BNS 80", category: "Dowry", desc: "Death of a woman by burns or bodily injury within 7 years of marriage, with prior cruelty/harassment for dowry." },
  { id: 16, term: "Cruelty for Dowry", section: "IPC 498A", newSection: "BNS 85 & 86", category: "Dowry", desc: "Subjecting a married woman to physical or mental cruelty by her husband or his relatives (often linked with dowry demands)." },
  { id: 17, term: "Attempted Suicide", section: "IPC 309", newSection: "BNS 226", category: "Self-Harm", desc: "Attempting to commit suicide to compel or restrain the exercise of lawful power." },

  // 5. Sexual Offences & Miscarriage
  { id: 18, term: "Causing Miscarriage", section: "IPC 312", newSection: "BNS 88", category: "Miscarriage", desc: "Voluntarily causing a pregnant woman to miscarry (Criminal Abortion), except when done in good faith to save the woman's life." },
  { id: 19, term: "Miscarriage without Consent", section: "IPC 313", newSection: "BNS 89", category: "Miscarriage", desc: "Causing a miscarriage without the woman's consent (carries a much heavier penalty, up to life imprisonment)." },
  { id: 20, term: "Rape", section: "IPC 375", newSection: "BNS 63", category: "Sexual Offences", desc: "Defines the specific legal parameters, penetrative acts, and the lack of consent required to constitute the crime of rape." },
  { id: 21, term: "Punishment for Rape", section: "IPC 376", newSection: "BNS 64", category: "Sexual Offences", desc: "Details the varying degrees of punishment for rape, including aggravated circumstances." },
  { id: 22, term: "Gang Rape", section: "IPC 376D", newSection: "BNS 70", category: "Sexual Offences", desc: "Defines and punishes rape committed by one or more persons acting in furtherance of a common intention." },

  // 6. Consent & Criminal Responsibility
  { id: 23, term: "Unsound Mind (Insanity)", section: "IPC 84", newSection: "BNS 22", category: "Responsibility", desc: "Nothing is an offence if done by a person who, due to unsoundness of mind, is incapable of knowing the nature of the act (McNaughten's Rule)." },
  { id: 24, term: "Consent to Risk", section: "IPC 87", newSection: "BNS 25", category: "Consent", desc: "Act done by consent (above 18 years) which is not intended or known to be likely to cause death or grievous hurt." },
  { id: 25, term: "Guardian Consent", section: "IPC 89", newSection: "BNS 27", category: "Consent", desc: "Act done in good faith for the benefit of a child (under 12) or insane person, by or by consent of the guardian." },
  { id: 26, term: "Invalid Consent", section: "IPC 90", newSection: "BNS 28", category: "Consent", desc: "Consent given under fear of injury, misconception of fact, intoxication, or unsoundness of mind is not legally valid consent." }
];

export default function ActiveRecallEngine() {
  const [queue, setQueue] = useState(FLASHCARDS_DATA);
  const [masteredCount, setMasteredCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);

  const totalCards = FLASHCARDS_DATA.length;
  const currentCard = queue[0];

  // Action: User mastered the card
  const handleMastered = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (queue.length === 1) {
        setMasteredCount((prev) => prev + 1);
        setSessionComplete(true);
      } else {
        setMasteredCount((prev) => prev + 1);
        setQueue((prevQueue) => prevQueue.slice(1));
      }
    }, 300); // Wait for flip animation to reset before changing data
  };

  // Action: User forgot the card (Push to end of queue!)
  const handleNeedReview = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setQueue((prevQueue) => {
        const remaining = prevQueue.slice(1);
        return [...remaining, prevQueue[0]]; // Move current to back
      });
    }, 300);
  };

  const restartEngine = () => {
    setQueue(FLASHCARDS_DATA);
    setMasteredCount(0);
    setIsFlipped(false);
    setSessionComplete(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      {/* Emerald Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-2xl mx-auto relative z-10 flex flex-col min-h-[80vh]">
        
        {/* Navigation & Header */}
        <div className="mb-8">
          <Link href="/mcq-practice/agad-tantra" className="inline-flex items-center gap-2 text-foreground/60 hover:text-emerald-500 transition-colors mb-6 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Agada Tantra
          </Link>
          <div className="flex justify-between items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[10px] font-black tracking-widest uppercase bg-emerald-500 text-white rounded-sm shadow-sm">
                <BrainCircuit className="w-3 h-3" /> Active Recall Engine
              </span>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">IPC & CrPC Sections</h1>
            </div>
            {!sessionComplete && (
              <div className="text-right">
                <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">Mastery</p>
                <p className="text-xl font-black text-emerald-500">{masteredCount} <span className="text-foreground/30 text-sm">/ {totalCards}</span></p>
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          {!sessionComplete && (
            <div className="w-full h-1.5 bg-surfaceBorder rounded-full mt-4 overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                style={{ width: `${(masteredCount / totalCards) * 100}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* STAGE: Session Complete */}
        {sessionComplete ? (
          <div className="flex-grow flex flex-col items-center justify-center bg-surface/60 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-10 text-center shadow-xl animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <Scale className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">Law Sections Mastered!</h2>
            <p className="text-foreground/70 font-medium mb-8 max-w-md">
              You have successfully recalled all {totalCards} high-yield forensic sections and their new BNS/BNSS mappings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <button onClick={restartEngine} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                <RotateCcw className="w-5 h-5" /> Run Again
              </button>
              <Link href="/mcq-practice/agad-tantra" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit Engine
              </Link>
            </div>
          </div>
        ) : (
          
          /* STAGE: Active Flashcard */
          <div className="flex-grow flex flex-col w-full">
            
            <p className="text-center text-sm font-bold text-foreground/40 mb-4 animate-pulse">
              {isFlipped ? "Did you remember correctly?" : "Tap the card to reveal the section"}
            </p>

            {/* 3D Card Container */}
            <div 
              className="relative w-full aspect-[4/3] md:aspect-[16/9] cursor-pointer group"
              style={{ perspective: "1000px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div 
                className="absolute inset-0 w-full h-full transition-all duration-500 ease-out shadow-xl rounded-[2rem]"
                style={{ 
                  transformStyle: "preserve-3d", 
                  transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)" 
                }}
              >
                {/* FRONT FACE (The Question/Provision) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-surface border border-surfaceBorder rounded-[2rem] p-8 flex flex-col items-center justify-center text-center overflow-hidden hover:border-emerald-500/50 transition-colors"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="absolute top-6 left-6 text-emerald-500/20">
                    <Scale className="w-16 h-16" />
                  </div>
                  <span className="px-3 py-1 bg-foreground/5 text-foreground/60 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    {currentCard.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground leading-tight drop-shadow-sm">
                    {currentCard.term}
                  </h2>
                </div>

                {/* BACK FACE (The Answer/Section Mapping) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-surface to-emerald-900/10 border-2 border-emerald-500/40 rounded-[2rem] p-6 md:p-10 flex flex-col items-center justify-center text-center"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    transform: "rotateX(180deg)" 
                  }}
                >
                  <div className="w-full max-w-md mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-6">
                      {/* Old IPC/CrPC */}
                      <div className="bg-surface border border-surfaceBorder px-4 py-2 rounded-xl">
                        <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Old Code</p>
                        <p className="text-xl md:text-2xl font-black text-rose-500">{currentCard.section}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-emerald-500/50 hidden md:block" />
                      {/* New BNS/BNSS */}
                      <div className="bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
                          <Sparkles className="w-3 h-3" /> New Code
                        </p>
                        <p className="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">{currentCard.newSection}</p>
                      </div>
                    </div>
                    
                    <div className="bg-surface/50 border border-surfaceBorder rounded-xl p-4 md:p-5 text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                      <BookOpen className="w-4 h-4 text-emerald-500 inline mr-2 mb-0.5" />
                      {currentCard.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION CONTROLS (Only visible when flipped) */}
            <div className={`mt-8 flex gap-4 transition-all duration-300 w-full ${isFlipped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNeedReview(); }}
                className="flex-1 bg-surface border border-rose-500/30 hover:bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <XCircle className="w-5 h-5" /> Needs Review
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); handleMastered(); }}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                <CheckCircle2 className="w-5 h-5" /> Mastered
              </button>
            </div>

            {/* Queue info */}
            <p className="text-center text-xs font-bold text-foreground/30 mt-6 uppercase tracking-widest">
              Cards remaining in queue: {queue.length}
            </p>

          </div>
        )}
      </div>
    </div>
  );
}
