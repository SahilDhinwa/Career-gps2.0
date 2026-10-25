"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Sun, Moon, Sparkles, Flame, ShieldCheck, 
  Clock, Check, RotateCcw, Compass, Activity, Calendar, 
  Droplets, Wind, ChevronRight, Sliders 
} from "lucide-react";

type RoutinePeriod = "dinacharya" | "ratricharya";
type NeuSurfaceMode = "dark-neu" | "light-neu";

interface RoutineTask {
  id: string;
  period: RoutinePeriod;
  sanskrit: string;
  english: string;
  sutraRef: string;
  timeWindow: string;
  doshaImpact: string;
  clinicalBenefit: string;
}

const ROUTINE_PROTOCOLS: RoutineTask[] = [
  // ================= PRATAH-KALA DINACHARYA (MORNING) =================
  {
    id: "brahma-muhurta",
    period: "dinacharya",
    sanskrit: "ब्राह्मे मुहूर्ते उत्तिष्ठेत्",
    english: "Brahma Muhurta Jagaranam",
    sutraRef: "Ashtanga Hridaya Sutra 2/1",
    timeWindow: "04:30 AM – 05:30 AM",
    doshaImpact: "Vata Kala • Sattva Pradhana",
    clinicalBenefit: "Synchronizes pineal-hypothalamic circadian rhythm after complete digestion of previous night's meal (Jirna-Nirupana).",
  },
  {
    id: "ushapana-malotsarga",
    period: "dinacharya",
    sanskrit: "उषःपानं एवं मलोत्सर्गः",
    english: "Ushapana & Natural Vega Utsarga",
    sutraRef: "Bhavaprakasha Purvakhanda 5",
    timeWindow: "05:30 AM – 06:00 AM",
    doshaImpact: "Apana Vata Anulomana",
    clinicalBenefit: "Warm copper-vessel water stimulates gastro-colic reflex and clears Koshtha Mala without straining.",
  },
  {
    id: "dantadhavana-jihwa",
    period: "dinacharya",
    sanskrit: "दन्तधावनं एवं जिह्वानिर्लेखनम्",
    english: "Dantadhavana & Jihwa Nirlekhana",
    sutraRef: "Charaka Sutrasthana 5/71–75",
    timeWindow: "06:00 AM – 06:15 AM",
    doshaImpact: "Kapha-Ama Nirharana",
    clinicalBenefit: "Tikta-Kashaya-Katu twigs & tongue scraping remove overnight oral biofilm (Jihwa-Mala) and awaken Bodhaka Kapha.",
  },
  {
    id: "anjana-nasya-gandusha",
    period: "dinacharya",
    sanskrit: "प्रतिमर्श नस्यं एवं गण्डूष धारणम्",
    english: "Pratimarsha Nasya & Oil Pulling",
    sutraRef: "Charaka Sutrasthana 5/56–80",
    timeWindow: "06:15 AM – 06:30 AM",
    doshaImpact: "Urdhwajatrugata Bala",
    clinicalBenefit: "2Bindu Anu Taila Nasya & Tilataila Gandusha strengthen cranial nerves, voice, TMJ, and cribriform mucosal immunity.",
  },
  {
    id: "abhyanga-vyayama",
    period: "dinacharya",
    sanskrit: "अभ्यङ्गः एवं अर्धशक्ति व्यायामः",
    english: "Abhyanga & Ardhashakti Vyayama",
    sutraRef: "Ashtanga Hridaya Sutra 2/8–10",
    timeWindow: "06:30 AM – 07:15 AM",
    doshaImpact: "Vatahara & Kapha-Meda Kshaya",
    clinicalBenefit: "Warm oil massage (head, ears, soles) pacifies Vata; exercise up to sweat on forehead (Ardhashakti) kindles Jatharagni.",
  },
  {
    id: "udvartana-snana",
    period: "dinacharya",
    sanskrit: "उद्वर्तनं एवं स्नानम्",
    english: "Udvartana & Therapeutic Snana",
    sutraRef: "Ashtanga Hridaya Sutra 2/15–18",
    timeWindow: "07:15 AM – 07:45 AM",
    doshaImpact: "Dipana • Ojas-Vardhana",
    clinicalBenefit: "Lukewarm water on body (and room-temperature water on head) removes fatigue, sweat, and ignites digestive fire.",
  },

  // ================= SANDHYA & RATRICHARYA (EVENING / NIGHT) =================
  {
    id: "laghu-ratri-bhojana",
    period: "ratricharya",
    sanskrit: "लघु एवं हितकर रात्रिभोजनम्",
    english: "Laghu Ratri Bhojana (Early Light Dinner)",
    sutraRef: "Ashtanga Hridaya Sutra 8/39",
    timeWindow: "06:30 PM – 07:30 PM",
    doshaImpact: "Prevents Kapha-Ama Sanchaya",
    clinicalBenefit: "Consuming warm, light, non-curd food 3 hours before sleep prevents Srotorodha and nocturnal acid reflux.",
  },
  {
    id: "shatapada-gamana",
    period: "ratricharya",
    sanskrit: "भुक्त्वा शतपदं गच्छेत्",
    english: "Shatapada Chankramana (100 Steps)",
    sutraRef: "Bhavaprakasha • Ratricharya",
    timeWindow: "07:30 PM – 08:00 PM",
    doshaImpact: "Samana Vata & Anna-Sanghata",
    clinicalBenefit: "Gentle 100-pace stroll after dinner followed by Vamaparshwa Shayana (left-lateral rest) aids gastric emptying.",
  },
  {
    id: "padabhyanga-rasayana",
    period: "ratricharya",
    sanskrit: "पादाभ्यङ्गः एवं निशानैषधम्",
    english: "Padabhyanga & Night Triphala Sevana",
    sutraRef: "Charaka Sutrasthana 5/90–92",
    timeWindow: "09:15 PM – 09:45 PM",
    doshaImpact: "Chakshushya & Nidrajanana",
    clinicalBenefit: "Warm ghee/oil massage on soles calms the sciatic & vagal pathways, inducing deep physiological sleep.",
  },
  {
    id: "kala-nidra",
    period: "ratricharya",
    sanskrit: "काले सात्म्यं निद्रासेवनम्",
    english: "Kapha-Kala Nidra (Sleep Before 10 PM)",
    sutraRef: "Charaka Sutrasthana 21/35",
    timeWindow: "09:45 PM – 10:00 PM",
    doshaImpact: "Ojas & Dhatu Regeneration",
    clinicalBenefit: "Entering sleep before nocturnal Pitta Kala (10 PM–2 AM) prevents second-wind insomnia and maximizes growth hormone repair.",
  },
];

export default function NeumorphicDinacharyaDashboard() {
  const [surfaceMode, setSurfaceMode] = useState<NeuSurfaceMode>("dark-neu");
  const [activeTab, setActiveTab] = useState<"all" | RoutinePeriod>("all");
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>("");
  const [activeDoshaKala, setActiveDoshaKala] = useState<{
    dosha: string;
    window: string;
    advice: string;
  }>({
    dosha: "Vata Kala (Afternoon)",
    window: "02:00 PM – 06:00 PM",
    advice: "Optimal window forSamhita study, mental focus, and light herbal hydration.",
  });

  const todayKey = new Date().toISOString().split("T")[0];

  // Load saved daily routine from localStorage & calculate live Dosha Clock
  useEffect(() => {
    const saved = localStorage.getItem(`atreya-dinacharya-${todayKey}`);
    if (saved) {
      try {
        setCompletedIds(JSON.parse(saved));
      } catch {
        setCompletedIds([]);
      }
    }

    const updateChronobiology = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
      const hr = now.getHours();

      if (hr >= 6 && hr < 10) {
        setActiveDoshaKala({
          dosha: "Pratah Kapha Kala",
          window: "06:00 AM – 10:00 AM",
          advice: "Kapha is dominant. Ideal window for Ardhashakti Vyayama, Udvartana, and Snana.",
        });
      } else if (hr >= 10 && hr < 14) {
        setActiveDoshaKala({
          dosha: "Madhyahna Pitta Kala",
          window: "10:00 AM – 02:00 PM",
          advice: "Jatharagni is at its zenith. Consume your primary wholesome meal (Shad-Rasa Ahara) now.",
        });
      } else if (hr >= 14 && hr < 18) {
        setActiveDoshaKala({
          dosha: "Aparahna Vata Kala",
          window: "02:00 PM – 06:00 PM",
          advice: "Vata governs neuro-cognitive agility. Best period for Shloka memorization & clinical study.",
        });
      } else if (hr >= 18 && hr < 22) {
        setActiveDoshaKala({
          dosha: "Sayahna Kapha Kala",
          window: "06:00 PM – 10:00 PM",
          advice: "Take Laghu Ratri Bhojana early, walk 100 steps, and wind down for Nidra before 10 PM.",
        });
      } else if (hr >= 22 || hr < 2) {
        setActiveDoshaKala({
          dosha: "Ratri Pitta Kala",
          window: "10:00 PM – 02:00 AM",
          advice: "Internal cellular Dhatvagni repair phase. Remain in deep Nidra to preserve Ojas.",
        });
      } else {
        setActiveDoshaKala({
          dosha: "Ratri Vata & Brahma Muhurta",
          window: "02:00 AM – 06:00 AM",
          advice: "Prana & Sattva rise at Brahma Muhurta (4:30 AM). Awaken after verifying digestion.",
        });
      }
    };

    updateChronobiology();
    const timer = setInterval(updateChronobiology, 30000);
    return () => clearInterval(timer);
  }, [todayKey]);

  const toggleTask = (id: string) => {
    setCompletedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(`atreya-dinacharya-${todayKey}`, JSON.stringify(next));
      return next;
    });
  };

  const resetToday = () => {
    setCompletedIds([]);
    localStorage.removeItem(`atreya-dinacharya-${todayKey}`);
  };

  // Alignment Metrics
  const totalCount = ROUTINE_PROTOCOLS.length;
  const doneCount = completedIds.length;
  const alignmentPercent = Math.round((doneCount / totalCount) * 100);

  const morningDone = ROUTINE_PROTOCOLS.filter(
    (t) => t.period === "dinacharya" && completedIds.includes(t.id)
  ).length;
  const nightDone = ROUTINE_PROTOCOLS.filter(
    (t) => t.period === "ratricharya" && completedIds.includes(t.id)
  ).length;

  const filteredTasks = ROUTINE_PROTOCOLS.filter((t) =>
    activeTab === "all" ? true : t.period === activeTab
  );

  // Circular SVG Ring Math
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (alignmentPercent / 100) * circumference;

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${surfaceMode}`}>
      
      {/* =================================================================
          AUTHENTIC NEUMORPHISM (SOFT-UI) SCOPED STYLESHEET
          Supports both Dark Obsidian-Emerald & Soft Alabaster Clay!
          ================================================================= */}
      <style dangerouslySetInnerHTML={{__html: `
        .dark-neu {
          --neu-bg: #131916;
          --neu-text: #e8f0ec;
          --neu-sub: #8fa399;
          --neu-accent: #10b981;
          --neu-gold: #D4AF37;
          --neu-shadow-dark: #090c0b;
          --neu-shadow-light: #1d2621;
          background-color: var(--neu-bg);
          color: var(--neu-text);
        }

        .light-neu {
          --neu-bg: #e4ebe7;
          --neu-text: #16241d;
          --neu-sub: #52665c;
          --neu-accent: #059669;
          --neu-gold: #9a7411;
          --neu-shadow-dark: #c2cac5;
          --neu-shadow-light: #ffffff;
          background-color: var(--neu-bg);
          color: var(--neu-text);
        }

        /* Extruded Raised Neumorphic Card */
        .neu-raised {
          background: var(--neu-bg);
          box-shadow: 
            8px 8px 16px var(--neu-shadow-dark),
            -8px -8px 16px var(--neu-shadow-light);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .neu-raised-sm {
          background: var(--neu-bg);
          box-shadow: 
            5px 5px 10px var(--neu-shadow-dark),
            -5px -5px 10px var(--neu-shadow-light);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.25s ease;
        }

        .neu-raised-sm:hover {
          transform: translateY(-1px);
        }

        /* Carved-In / Pressed Tactile Neumorphic State */
        .neu-pressed {
          background: var(--neu-bg);
          box-shadow: 
            inset 6px 6px 12px var(--neu-shadow-dark),
            inset -6px -6px 12px var(--neu-shadow-light);
          border: 1px solid rgba(16, 185, 129, 0.22);
          transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Deep Concave Well (For Gauges & Dials) */
        .neu-well {
          background: var(--neu-bg);
          box-shadow: 
            inset 8px 8px 16px var(--neu-shadow-dark),
            inset -8px -8px 16px var(--neu-shadow-light);
        }

        /* Tactile Circular Push-Button */
        .neu-circle-btn {
          background: var(--neu-bg);
          box-shadow: 
            4px 4px 8px var(--neu-shadow-dark),
            -4px -4px 8px var(--neu-shadow-light);
        }

        .neu-circle-btn-active {
          background: var(--neu-bg);
          box-shadow: 
            inset 4px 4px 8px var(--neu-shadow-dark),
            inset -4px -4px 8px var(--neu-shadow-light);
        }
      `}} />

      <div className="max-w-6xl mx-auto pt-8 px-4 sm:px-6">
        
        {/* =================================================================
            1. TOP BAR: NAVIGATION & NEUMORPHIC SURFACE SWITCHER
            ================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="neu-raised-sm inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold tracking-wide"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-500" />
            <span>Back to ATREYA Med</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Tactile Surface Mode Toggle (Dark Obsidian Clay vs Light Alabaster Clay) */}
            <button
              type="button"
              onClick={() =>
                setSurfaceMode(surfaceMode === "dark-neu" ? "light-neu" : "dark-neu")
              }
              className="neu-raised-sm px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              {surfaceMode === "dark-neu" ? (
                <>
                  <Sun className="w-4 h-4 text-[#D4AF37]" />
                  <span>Alabaster Soft-UI</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-emerald-700" />
                  <span>Obsidian Soft-UI</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={resetToday}
              className="neu-raised-sm px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer"
              title="Reset Today's Log"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden sm:inline">Reset Day</span>
            </button>
          </div>
        </div>

        {/* =================================================================
            2. NEUMORPHIC CONSOLE HEADER: CIRCADIAN CLOCK + ALIGNMENT DIAL
            ================================================================= */}
        <div className="neu-raised rounded-3xl p-6 sm:p-8 md:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 8 Cols: Title & Live Chronobiology Dosha Clock */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="neu-pressed px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Swasthavritta Chronobiology Engine
                </span>
                <span className="neu-raised-sm px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest opacity-75">
                  Date: {todayKey}
                </span>
              </div>

              <div>
                <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight mb-2">
                  Dinacharya &amp; Ratricharya{" "}
                  <span className="text-emerald-500">Palan</span>
                </h1>
                <p className="text-sm sm:text-base opacity-75 max-w-2xl leading-relaxed">
                  Align your biological rhythms with classical <em>Ashtanga Hridaya</em> and <em>Charaka Samhita</em> protocols. Press any regimen card below to indent and log it into your daily health record.
                </p>
              </div>

              {/* Recessed Concave Live Dosha Kala Readout */}
              <div className="neu-well rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="neu-circle-btn w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-emerald-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-500">
                        LIVE BIOLOGICAL WINDOW {currentTimeStr && `• ${currentTimeStr}`}
                      </span>
                    </div>
                    <h2 className="font-heading text-lg sm:text-xl font-bold mt-0.5">
                      {activeDoshaKala.dosha}{" "}
                      <span className="text-xs font-mono opacity-65 font-normal">
                        ({activeDoshaKala.window})
                      </span>
                    </h2>
                    <p className="text-xs opacity-75 mt-1">{activeDoshaKala.advice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Tactile Neumorphic Circular Ojas & Agni Dial */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="neu-well w-48 h-48 rounded-full flex items-center justify-center relative p-4">
                <div className="neu-raised w-36 h-36 rounded-full flex flex-col items-center justify-center relative">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 140 140">
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="opacity-10"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="transparent"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      style={{ transition: "stroke-dashoffset 0.6s ease" }}
                    />
                  </svg>
                  <span className="font-heading text-3xl font-black text-emerald-500">
                    {alignmentPercent}%
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest opacity-65 mt-0.5">
                    Sattva-Ojas Score
                  </span>
                  <span className="text-[10px] font-bold mt-1">
                    {doneCount} / {totalCount} Palan
                  </span>
                </div>
              </div>

              {/* Morning vs Night Sub-Pills */}
              <div className="flex items-center gap-3 mt-4 text-xs font-bold">
                <span className="neu-raised-sm px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  Dinacharya: {morningDone}/6
                </span>
                <span className="neu-raised-sm px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-emerald-500" />
                  Ratricharya: {nightDone}/4
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* =================================================================
            3. NEUMORPHIC PERIOD FILTER SWITCHER
            ================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="neu-well p-1.5 rounded-2xl inline-flex items-center gap-2">
            {([
              { id: "all" as const, label: "Complete 24-Hr Regimen (10)" },
              { id: "dinacharya" as const, label: "Pratah Dinacharya (6)" },
              { id: "ratricharya" as const, label: "Sandhya & Ratricharya (4)" },
            ]).map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? "neu-raised text-emerald-500"
                      : "opacity-65 hover:opacity-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono opacity-65">
            Tap any protocol card to physically press &amp; record adherence
          </span>
        </div>

        {/* =================================================================
            4. THE TACTILE NEUMORPHIC ROUTINE CARDS
            (Extruded when pending -> Indented/Pressed when completed)
            ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {filteredTasks.map((task) => {
            const isDone = completedIds.includes(task.id);
            return (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleTask(task.id);
                }}
                className={`rounded-3xl p-6 cursor-pointer select-none flex flex-col justify-between ${
                  isDone ? "neu-pressed" : "neu-raised hover:-translate-y-0.5"
                }`}
              >
                <div>
                  {/* Card Top Metadata & Tactile Push-Button */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg neu-well text-emerald-500">
                          {task.period === "dinacharya" ? "☀ DINACHARYA" : "☾ RATRICHARYA"}
                        </span>
                        <span className="text-[10px] font-mono opacity-65">
                          {task.timeWindow}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-bold pt-1">
                        {task.sanskrit}
                      </h3>
                      <p className="text-xs font-bold text-emerald-500">
                        {task.english}
                      </p>
                    </div>

                    {/* Tactile Neumorphic Check Orb */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                        isDone
                          ? "neu-circle-btn-active text-emerald-500"
                          : "neu-circle-btn opacity-45"
                      }`}
                    >
                      <Check className={`w-5 h-5 ${isDone ? "stroke-[3]" : "stroke-[2]"}`} />
                    </div>
                  </div>

                  {/* Clinical Description */}
                  <p className="text-xs sm:text-sm opacity-75 leading-relaxed mb-5">
                    {task.clinicalBenefit}
                  </p>
                </div>

                {/* Bottom Sutra & Dosha Bar */}
                <div className="pt-3.5 border-t border-current/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="opacity-65">{task.sutraRef}</span>
                  <span className="font-bold text-emerald-500">{task.doshaImpact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================================
            5. MODULAR SUB-REPOSITORY EXPANSION DOCK
            (Ready for future standalone folders inside app/dinacharya/*)
            ================================================================= */}
        <div className="neu-raised rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold mb-1">
                MODULAR SWASTHAVRITTA REPOSITORY ARCHITECTURE
              </p>
              <h2 className="font-heading text-xl sm:text-2xl font-bold">
                Dedicated Sub-Modules (Next Up)
              </h2>
            </div>
            <span className="neu-well px-3.5 py-1.5 rounded-xl text-[11px] font-mono opacity-75">
              app/dinacharya/*
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Agni & Koshtha Daily Analyzer",
                route: "/dinacharya/agni-koshtha",
                desc: "Log daily Jatharagni state (Sama, Vishama, Tikshna, Manda) and Bristol-Ayurvedic Mala Pariksha.",
                badge: "Module 02",
              },
              {
                title: "Ritucharya & Ritu-Sandhi Shield",
                route: "/dinacharya/ritucharya",
                desc: "Automatic 6-Season (Shad-Ritu) dietary & lifestyle transitions with 14-day Ritu-Sandhi alerts.",
                badge: "Module 03",
              },
              {
                title: "Adharaniya & Dharaniya Vega Log",
                route: "/dinacharya/vega-tracker",
                desc: "Track physical urges never to suppress (Charaka Sutra Ch. 7) alongside Manasika Sattva hygiene.",
                badge: "Module 04",
              },
            ].map((mod) => (
              <div
                key={mod.route}
                className="neu-well rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-emerald-500 font-bold uppercase">{mod.badge}</span>
                    <span className="opacity-55">{mod.route}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold mb-1.5">{mod.title}</h3>
                  <p className="text-xs opacity-70 leading-relaxed mb-4">{mod.desc}</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                  Ready for Dedicated Repository <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
