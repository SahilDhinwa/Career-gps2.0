"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Activity, 
  Scale, 
  Stethoscope, 
  Dumbbell, 
  Apple, 
  AlertTriangle, 
  ChevronRight,
  BrainCircuit,
  Pill,
  HeartPulse
} from "lucide-react";

// ==========================================
// 🧠 INTERACTIVE CONTENT DATA
// Replace the text here with your Gemini chat content
// ==========================================

const TABS = [
  { id: "overview", label: "Overview & Pathophysiology", icon: Activity },
  { id: "ayurveda", label: "Ayurvedic Perspective (Sthaulya)", icon: BrainCircuit },
  { id: "management", label: "Modern & Clinical Management", icon: Stethoscope },
];

const QUICK_FACTS = [
  { title: "BMI Criteria", desc: "Obesity is defined as a Body Mass Index (BMI) of 30 or higher." },
  { title: "Global Epidemic", desc: "Over 1 billion people globally are estimated to be obese." },
  { title: "Key Hormones", desc: "Leptin (satiety) and Ghrelin (hunger) play major roles in pathogenesis." }
];

const AYURVEDA_CONCEPTS = [
  { title: "Nidana (Causes)", desc: "Atisampurna (Overeating), Avyayama (Lack of exercise), Diwaswapna (Day sleep), and Kapha-vardhaka ahara." },
  { title: "Samprapti (Pathogenesis)", desc: "Meda Dhatu (Fat tissue) abnormally increases, obstructing Vata. The obstructed Vata increases Agni (digestive fire), causing intense hunger (Bhasmaka)." },
  { title: "Rupa (Symptoms)", desc: "Kshudra Shwasa (breathlessness on exertion), Swedaabadha (excessive sweating), Daurgandhya (body odor), and Atikshudha (excessive hunger)." }
];

export default function InteractiveObesityModule() {
  const [activeTab, setActiveTab] = useState("overview");
  const [revealedFact, setRevealedFact] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // A mini interactive quiz for the end of the module
  const handleQuizSubmit = () => {
    if (selectedAnswer === 1) setQuizScore(100);
    else setQuizScore(0);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 md:pt-12 pb-24 px-4 md:px-6">
      
      {/* Ambient Medical Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link href="/bams-hub" className="inline-flex items-center gap-2 text-foreground/60 hover:text-indigo-500 transition-colors mb-6 md:mb-10 font-bold text-xs md:text-sm bg-surface/50 px-3 py-2 md:px-4 md:py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Modern Topics Hub
        </Link>

        {/* HERO SECTION */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-8 md:mb-12 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-500 mb-6 uppercase tracking-widest">
            <HeartPulse className="w-4 h-4" /> Interactive Clinical Study
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-4 text-foreground tracking-tight leading-tight">
            Obesity <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">(Sthaulya)</span>
          </h1>
          <p className="text-base md:text-xl text-foreground/70 font-medium max-w-3xl leading-relaxed">
            A comprehensive, interactive deep-dive integrating modern metabolic pathophysiology with classical Ayurvedic perspectives on Medo Roga.
          </p>
        </div>

        {/* INTERACTIVE TAB NAVIGATION */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 scale-105" 
                    : "bg-surface border border-surfaceBorder text-foreground/70 hover:bg-surfaceBorder/40 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT AREA */}
        <div className="bg-surface/40 backdrop-blur-sm border border-surfaceBorder rounded-xl p-6 md:p-10 min-h-[400px] shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-indigo-500" /> The Metabolic Cascade
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Obesity is no longer considered just a lifestyle issue; it is a complex, chronic, relapsing disease characterized by abnormal or excessive fat accumulation that impairs health. At its core, it is driven by a prolonged imbalance between energy intake and energy expenditure, heavily influenced by genetics, environment, and neuroendocrine pathways.
                </p>
              </div>

              {/* Click to Reveal Interactive Cards */}
              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mt-10 mb-4">Click cards to reveal key mechanisms</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {QUICK_FACTS.map((fact, index) => (
                  <div 
                    key={index}
                    onClick={() => setRevealedFact(revealedFact === index ? null : index)}
                    className={`cursor-pointer rounded-xl p-6 transition-all duration-300 border ${
                      revealedFact === index 
                        ? "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)] scale-[1.02]" 
                        : "bg-surface border-surfaceBorder hover:border-indigo-500/30 hover:bg-surfaceBorder/20"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-foreground text-lg">{fact.title}</h4>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${revealedFact === index ? "bg-indigo-500 text-white" : "bg-foreground/10 text-foreground/50"}`}>
                        <ChevronRight className={`w-4 h-4 transition-transform ${revealedFact === index ? "rotate-90" : ""}`} />
                      </div>
                    </div>
                    {/* The revealed text */}
                    <div className={`overflow-hidden transition-all duration-300 ${revealedFact === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-foreground/70 text-sm font-medium pt-2 border-t border-surfaceBorder/50 mt-2">
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AYURVEDA */}
          {activeTab === "ayurveda" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6 text-emerald-500" /> Sthaulya (Medo Roga)
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  In Ayurveda, Sthaulya is classified under <span className="font-bold text-emerald-500">Santarpana-janya Vyadhi</span> (diseases of over-nourishment) and is counted among the <span className="italic">Ashta Ninditiya Purusha</span> (eight undesirable body constitutions) described by Acharya Charaka.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {AYURVEDA_CONCEPTS.map((concept, index) => (
                  <div key={index} className="flex gap-6 bg-surface/50 border border-surfaceBorder p-6 rounded-xl hover:border-emerald-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <span className="font-heading font-bold text-emerald-500 text-xl">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xl mb-2">{concept.title}</h4>
                      <p className="text-foreground/70 font-medium leading-relaxed">{concept.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MANAGEMENT */}
          {activeTab === "management" && (
            <div className="space-y-8 animate-in fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-blue-500" /> Integrated Management Protocol
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-surface to-surface/40 p-6 rounded-xl border border-surfaceBorder">
                  <div className="flex items-center gap-3 mb-4">
                    <Pill className="w-6 h-6 text-blue-500" />
                    <h3 className="font-bold text-lg text-foreground">Modern Approach</h3>
                  </div>
                  <ul className="space-y-3 text-foreground/70 font-medium text-sm">
                    <li className="flex gap-2"><span className="text-blue-500">•</span> Caloric deficit (500-1000 kcal/day reduction).</li>
                    <li className="flex gap-2"><span className="text-blue-500">•</span> GLP-1 Receptor Agonists (e.g., Semaglutide) to suppress appetite and delay gastric emptying.</li>
                    <li className="flex gap-2"><span className="text-blue-500">•</span> Bariatric surgery for severe cases (BMI > 40).</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-surface to-surface/40 p-6 rounded-xl border border-surfaceBorder">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-6 h-6 text-emerald-500" />
                    <h3 className="font-bold text-lg text-foreground">Ayurvedic Chikitsa</h3>
                  </div>
                  <ul className="space-y-3 text-foreground/70 font-medium text-sm">
                    <li className="flex gap-2"><span className="text-emerald-500">•</span> <strong className="text-foreground">Apatarpana / Langhana:</strong> Depleting therapies to reduce Meda.</li>
                    <li className="flex gap-2"><span className="text-emerald-500">•</span> <strong className="text-foreground">Ruksha Udvartana:</strong> Dry powder massage (e.g., Triphala churna) to liquefy fat.</li>
                    <li className="flex gap-2"><span className="text-emerald-500">•</span> <strong className="text-foreground">Shamana Aushadhi:</strong> Navaka Guggulu, Arogyavardhini Vati, Shilajatu.</li>
                  </ul>
                </div>
              </div>

              {/* Interactive Mini-Quiz */}
              <div className="mt-12 bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Knowledge Check</h3>
                <p className="text-foreground/60 text-sm mb-6">According to Ayurveda, which Dhatu primarily causes the obstruction of Vata in Sthaulya?</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                  {["Rasa Dhatu", "Meda Dhatu", "Asthi Dhatu"].map((option, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedAnswer(idx)}
                      className={`px-6 py-3 rounded-lg font-bold transition-all border ${
                        selectedAnswer === idx 
                          ? "bg-indigo-500 text-white border-indigo-500" 
                          : "bg-surface text-foreground/70 border-surfaceBorder hover:border-indigo-500/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {selectedAnswer !== null && quizScore === null && (
                  <button onClick={handleQuizSubmit} className="bg-indigo-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors">
                    Check Answer
                  </button>
                )}

                {quizScore !== null && (
                  <div className={`mt-4 p-4 rounded-lg font-bold ${quizScore === 100 ? "bg-emerald-500/20 text-emerald-500" : "bg-rose-500/20 text-rose-500"}`}>
                    {quizScore === 100 ? "Correct! Excessive Meda Dhatu obstructs the path of Vata." : "Incorrect. Try again!"}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
              }
