"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Bell, BellRing, Heart, Bookmark, Power, 
  Sun, Moon, BookOpen, Plus, Trash2, Pin, Check, 
  Clock, AlertTriangle, Sparkles, RotateCcw, Volume2 
} from "lucide-react";

type TaskCategory = "dinacharya" | "daywork" | "ratricharya";

interface ScheduleItem {
  id: string;
  title: string;
  subtitle: string;
  category: TaskCategory;
  startTime: string; // "HH:MM" 24-hr format for notification comparison
  endTime: string;   // "HH:MM" 24-hr format for missed-schedule alert
  durationHrs: number;
  isPermanent: boolean;
  isCustom?: boolean;
}

const DEFAULT_CLASSICAL_SCHEDULE: ScheduleItem[] = [
  {
    id: "brahma-muhurta",
    title: "Brahma Muhurta Jagaranam",
    subtitle: "ब्राह्मे मुहूर्ते उत्तिष्ठेत् • Awaken 96 mins before sunrise",
    category: "dinacharya",
    startTime: "04:30",
    endTime: "05:30",
    durationHrs: 1,
    isPermanent: true,
  },
  {
    id: "ushapana-malotsarga",
    title: "Ushapana & Vega Utsarga",
    subtitle: "उषःपानं एवं मलोत्सर्गः • Copper water & bowel clearance",
    category: "dinacharya",
    startTime: "05:30",
    endTime: "06:00",
    durationHrs: 0.5,
    isPermanent: true,
  },
  {
    id: "dantadhavana-nasya",
    title: "Dantadhavana, Jihwa & Nasya",
    subtitle: "दन्तधावनं, जिह्वानिर्लेखनं एवं प्रतिमर्श नस्यम्",
    category: "dinacharya",
    startTime: "06:00",
    endTime: "06:30",
    durationHrs: 0.5,
    isPermanent: true,
  },
  {
    id: "abhyanga-vyayama",
    title: "Abhyanga & Ardhashakti Vyayama",
    subtitle: "अभ्यङ्गः एवं व्यायामः • Oil massage & morning exercise",
    category: "dinacharya",
    startTime: "06:30",
    endTime: "07:30",
    durationHrs: 1,
    isPermanent: true,
  },
  {
    id: "snana-sadvritta",
    title: "Snana & Pratah Agni Dipana",
    subtitle: "स्नानम् • Therapeutic bath & morning prayer/meditation",
    category: "dinacharya",
    startTime: "07:30",
    endTime: "08:15",
    durationHrs: 0.75,
    isPermanent: true,
  },
  {
    id: "default-study-block",
    title: "2-Hr BAMS Samhita Study Block",
    subtitle: "स्वाध्यायः • Dedicated daytime deep-focus study session",
    category: "daywork",
    startTime: "14:00",
    endTime: "16:00",
    durationHrs: 2,
    isPermanent: true,
    isCustom: true,
  },
  {
    id: "laghu-ratri-bhojana",
    title: "Laghu Ratri Bhojana & 100 Steps",
    subtitle: "लघु रात्रिभोजनं एवं शतपदं गमनम् • Light dinner 3 hrs before bed",
    category: "ratricharya",
    startTime: "19:00",
    endTime: "20:00",
    durationHrs: 1,
    isPermanent: true,
  },
  {
    id: "padabhyanga-nidra",
    title: "Padabhyanga, Triphala & Kala-Nidra",
    subtitle: "पादाभ्यङ्गः एवं निद्रा • Foot oleation & sleep before Pitta Kala",
    category: "ratricharya",
    startTime: "21:30",
    endTime: "22:15",
    durationHrs: 0.75,
    isPermanent: true,
  },
];

// Helper: Convert "HH:MM" into minutes since midnight
function timeToMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

// Helper: Format "14:00" to "02:00 PM"
function format12Hour(timeStr: string): string {
  const [hStr, mStr] = timeStr.split(":");
  let h = parseInt(hStr, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${String(h).padStart(2, "0")}:${mStr} ${ampm}`;
}

export default function TactileNeumorphismDinacharya() {
  const todayKey = new Date().toISOString().split("T")[0];

  // Schedule & Completion States
  const [customPermanentTasks, setCustomPermanentTasks] = useState<ScheduleItem[]>([]);
  const [todayTemporaryTasks, setTodayTemporaryTasks] = useState<ScheduleItem[]>([]);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [notifiedIds, setNotifiedIds] = useState<string[]>([]);

  // Physical Switch States (Under the 72% Active Aura Dial)
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);
  const [showOnlyPermanent, setShowOnlyPermanent] = useState<boolean>(false);
  const [soundChimeEnabled, setSoundChimeEnabled] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<"all" | TaskCategory>("all");

  // New Custom Routine / To-Do Builder State (With Recessed Track Slider)
  const [newTitle, setNewTitle] = useState<string>("");
  const [newSubtitle, setNewSubtitle] = useState<string>("");
  const [newCategory, setNewCategory] = useState<TaskCategory>("daywork");
  const [newStartTime, setNewStartTime] = useState<string>("16:00");
  const [newDurationHrs, setNewDurationHrs] = useState<number>(2);
  const [newIsPermanent, setNewIsPermanent] = useState<boolean>(true);

  // Live Clock & Missed Alert Banner
  const [nowMinutes, setNowMinutes] = useState<number>(0);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState<string>("");
  const [latestAlertBanner, setLatestAlertBanner] = useState<string | null>(null);

  // Play a gentle Web-Audio clinical chime when a schedule is missed
  const playAlertChime = useCallback(() => {
    if (!soundChimeEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(528, ctx.currentTime); // 528Hz Solfeggio tone
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.65);
    } catch {
      // Ignore audio block if user hasn't interacted yet
    }
  }, [soundChimeEnabled]);

  // 1. Load saved permanent & daily data from localStorage
  useEffect(() => {
    const savedPerm = localStorage.getItem("atreya-neu-permanent-tasks");
    if (savedPerm) {
      try {
        setCustomPermanentTasks(JSON.parse(savedPerm));
      } catch {
        setCustomPermanentTasks([]);
      }
    }

    const savedTemp = localStorage.getItem(`atreya-neu-temp-tasks-${todayKey}`);
    if (savedTemp) {
      try {
        setTodayTemporaryTasks(JSON.parse(savedTemp));
      } catch {
        setTodayTemporaryTasks([]);
      }
    }

    const savedDone = localStorage.getItem(`atreya-neu-done-${todayKey}`);
    if (savedDone) {
      try {
        setCompletedIds(JSON.parse(savedDone));
      } catch {
        setCompletedIds([]);
      }
    }

    const savedNotified = localStorage.getItem(`atreya-neu-notified-${todayKey}`);
    if (savedNotified) {
      try {
        setNotifiedIds(JSON.parse(savedNotified));
      } catch {
        setNotifiedIds([]);
      }
    }

    if (typeof window !== "undefined" && "Notification" in window) {
      setNotificationsEnabled(Notification.permission === "granted");
    }
  }, [todayKey]);

  // Combine classical + user permanent + today's temporary tasks sorted by start time
  const allScheduleItems: ScheduleItem[] = [
    ...DEFAULT_CLASSICAL_SCHEDULE,
    ...customPermanentTasks,
    ...todayTemporaryTasks,
  ].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

  // 2. Real-Time Clock & Missed-Schedule Notification Checker
  useEffect(() => {
    const checkScheduleDeadlines = () => {
      const now = new Date();
      const mins = now.getHours() * 60 + now.getMinutes();
      setNowMinutes(mins);
      setCurrentTimeDisplay(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );

      // Find any task whose dedicated endTime has passed today without being completed
      allScheduleItems.forEach((task) => {
        const endMins = timeToMinutes(task.endTime);
        const isDone = completedIds.includes(task.id);
        const alreadyNotified = notifiedIds.includes(task.id);

        if (mins > endMins && !isDone && !alreadyNotified) {
          const msg = `Missed Schedule Window (${format12Hour(task.startTime)} – ${format12Hour(task.endTime)}): "${task.title}" is still pending!`;
          setLatestAlertBanner(msg);
          playAlertChime();

          if (
            notificationsEnabled &&
            typeof window !== "undefined" &&
            "Notification" in window &&
            Notification.permission === "granted"
          ) {
            new Notification("ATREYA Dinacharya • Schedule Alert", {
              body: msg,
              icon: "/favicon.ico",
            });
          }

          setNotifiedIds((prev) => {
            const updated = [...prev, task.id];
            localStorage.setItem(
              `atreya-neu-notified-${todayKey}`,
              JSON.stringify(updated)
            );
            return updated;
          });
        }
      });
    };

    checkScheduleDeadlines();
    const interval = setInterval(checkScheduleDeadlines, 20000);
    return () => clearInterval(interval);
  }, [allScheduleItems, completedIds, notifiedIds, notificationsEnabled, playAlertChime, todayKey]);

  // Enable Browser Push Notifications
  const handleToggleNotifications = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setLatestAlertBanner("Browser notifications are not supported on this device.");
      return;
    }

    if (Notification.permission === "granted") {
      const nextState = !notificationsEnabled;
      setNotificationsEnabled(nextState);
      if (nextState) {
        new Notification("ATREYA Med • Alerts Active", {
          body: "You will be notified immediately if any Dinacharya or Study block misses its dedicated time window.",
        });
      }
    } else {
      const perm = await Notification.requestPermission();
      if (perm === "granted") {
        setNotificationsEnabled(true);
        new Notification("ATREYA Med • Schedule Alerts Enabled", {
          body: "Real-time Dinacharya & Study Block monitoring is now active.",
        });
      } else {
        setLatestAlertBanner("Please allow Notification permissions in your browser settings.");
      }
    }
  };

  // Trigger an instant demo notification ("Max Boost / Test Alert" button)
  const triggerTestNotification = () => {
    playAlertChime();
    const pendingCount = allScheduleItems.length - completedIds.length;
    const msg = `Dinacharya Check: ${completedIds.length}/${allScheduleItems.length} completed (${pendingCount} remaining in today's schedule).`;
    setLatestAlertBanner(msg);

    if (
      typeof window !== "undefined" &&
      "Notification" in window &&
      Notification.permission === "granted"
    ) {
      new Notification("ATREYA Dinacharya • Live Status", { body: msg });
    }
  };

  // Toggle task completion
  const toggleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(`atreya-neu-done-${todayKey}`, JSON.stringify(next));
      return next;
    });
  };

  // Auto-calculate End Time based on Start Time + Slider Duration (Hours)
  const computeEndTime = (start: string, durationHrs: number): string => {
    const totalMins = (timeToMinutes(start) + Math.round(durationHrs * 60)) % (24 * 60);
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  // Add New Custom Task (Permanent Daily or Today-Only To-Do)
  const handleAddCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const endTime = computeEndTime(newStartTime, newDurationHrs);
    const newItem: ScheduleItem = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      subtitle:
        newSubtitle.trim() ||
        `${newDurationHrs} Hr Dedicated ${newIsPermanent ? "Permanent Daily Block" : "To-Do Task"}`,
      category: newCategory,
      startTime: newStartTime,
      endTime,
      durationHrs: newDurationHrs,
      isPermanent: newIsPermanent,
      isCustom: true,
    };

    if (newIsPermanent) {
      const updated = [...customPermanentTasks, newItem];
      setCustomPermanentTasks(updated);
      localStorage.setItem("atreya-neu-permanent-tasks", JSON.stringify(updated));
    } else {
      const updated = [...todayTemporaryTasks, newItem];
      setTodayTemporaryTasks(updated);
      localStorage.setItem(`atreya-neu-temp-tasks-${todayKey}`, JSON.stringify(updated));
    }

    setNewTitle("");
    setNewSubtitle("");
  };

  // Convert a temporary task to Permanent (or vice-versa)
  const togglePermanentStatus = (task: ScheduleItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!task.isCustom) return;

    if (task.isPermanent) {
      const updatedPerm = customPermanentTasks.filter((t) => t.id !== task.id);
      const movedTask = { ...task, isPermanent: false };
      const updatedTemp = [...todayTemporaryTasks, movedTask];
      setCustomPermanentTasks(updatedPerm);
      setTodayTemporaryTasks(updatedTemp);
      localStorage.setItem("atreya-neu-permanent-tasks", JSON.stringify(updatedPerm));
      localStorage.setItem(`atreya-neu-temp-tasks-${todayKey}`, JSON.stringify(updatedTemp));
    } else {
      const updatedTemp = todayTemporaryTasks.filter((t) => t.id !== task.id);
      const movedTask = { ...task, isPermanent: true };
      const updatedPerm = [...customPermanentTasks, movedTask];
      setTodayTemporaryTasks(updatedTemp);
      setCustomPermanentTasks(updatedPerm);
      localStorage.setItem(`atreya-neu-temp-tasks-${todayKey}`, JSON.stringify(updatedTemp));
      localStorage.setItem("atreya-neu-permanent-tasks", JSON.stringify(updatedPerm));
    }
  };

  // Delete a custom task
  const deleteCustomTask = (task: ScheduleItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (task.isPermanent) {
      const updated = customPermanentTasks.filter((t) => t.id !== task.id);
      setCustomPermanentTasks(updated);
      localStorage.setItem("atreya-neu-permanent-tasks", JSON.stringify(updated));
    } else {
      const updated = todayTemporaryTasks.filter((t) => t.id !== task.id);
      setTodayTemporaryTasks(updated);
      localStorage.setItem(`atreya-neu-temp-tasks-${todayKey}`, JSON.stringify(updated));
    }
  };

  // Metrics & Filtering
  const visibleTasks = allScheduleItems.filter((item) => {
    if (showOnlyPermanent && !item.isPermanent) return false;
    if (activeFilter !== "all" && item.category !== activeFilter) return false;
    return true;
  });

  const totalCount = allScheduleItems.length;
  const doneCount = allScheduleItems.filter((i) => completedIds.includes(i.id)).length;
  const activeAuraPercent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  const missedTasks = allScheduleItems.filter(
    (t) => nowMinutes > timeToMinutes(t.endTime) && !completedIds.includes(t.id)
  );

  return (
    <div className="min-h-screen bg-[#E6EBF2] text-[#1E293B] pb-24 px-4 sm:px-6 pt-6 select-none font-sans">
      
      {/* =================================================================
          EXACT TACTILE NEUMORPHISM CSS FROM SCREENSHOT
          Light Shadow: #FFFFFF (-10px) | Dark Shadow: #B8BEC7 (+10px)
          ================================================================= */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Extruded Matte Card */
        .tactile-card {
          background: #E6EBF2;
          box-shadow: 
            10px 10px 20px #B8BEC7,
            -10px -10px 20px #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.45);
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Recessed / Carved-In Track & Well */
        .tactile-recessed {
          background: #E6EBF2;
          box-shadow: 
            inset 6px 6px 12px #B8BEC7,
            inset -6px -6px 12px #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.25s ease;
        }

        /* Small Extruded Pill / Physical Switch */
        .tactile-switch {
          background: #E6EBF2;
          box-shadow: 
            6px 6px 12px #B8BEC7,
            -6px -6px 12px #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        .tactile-switch:hover {
          transform: translateY(-1px);
        }

        .tactile-switch:active,
        .tactile-switch-pressed {
          background: #E6EBF2;
          box-shadow: 
            inset 4px 4px 8px #B8BEC7,
            inset -4px -4px 8px #FFFFFF;
          border: 1px solid rgba(79, 70, 229, 0.2);
        }

        /* Custom Recessed Range Slider */
        input[type="range"].tactile-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }
        input[type="range"].tactile-slider::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 999px;
        }
        input[type="range"].tactile-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: #4F46E5;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.55);
          border: 3px solid #FFFFFF;
          margin-top: -6px;
        }
      `}} />

      <div className="max-w-5xl mx-auto">
        
        {/* =================================================================
            1. TOP EXTRUDED NAVIGATION BAR (EXACT SCREENSHOT LAYOUT)
            ================================================================= */}
        <div className="tactile-card rounded-full px-5 py-3 mb-10 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#334155] hover:text-[#4F46E5] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Directory</span>
          </Link>

          <div className="flex items-center gap-3">
            {currentTimeDisplay && (
              <span className="text-[11px] font-mono font-bold text-[#64748B] hidden sm:inline">
                🕒 {currentTimeDisplay}
              </span>
            )}
            <div className="tactile-recessed rounded-full px-4 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#4F46E5]">
                DINACHARYA • SOFT NEUMORPHISM
              </span>
            </div>
          </div>
        </div>

        {/* =================================================================
            2. HERO TITLE & SUBTITLE
            ================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-[#1E293B] mb-3">
            Dinacharya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#6366F1]">
              Palan &amp; Focus OS
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
            Cards and switches aren&apos;t placed on top of the background—they are extruded directly out of the same matte surface using dual opposing light and dark shadows. Track your classical routine, lock permanent 2-hr study blocks, and receive automatic missed-window alerts.
          </p>
        </div>

        {/* Live Missed-Schedule Alert Banner (Appears when a time window is missed) */}
        {latestAlertBanner && (
          <div className="tactile-recessed rounded-2xl p-4 mb-8 flex items-center justify-between gap-4 border-l-4 border-l-[#4F46E5]">
            <div className="flex items-center gap-3">
              <div className="tactile-switch w-9 h-9 rounded-xl flex items-center justify-center text-[#4F46E5] shrink-0">
                <BellRing className="w-4 h-4 animate-bounce" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#4F46E5]">
                  SCHEDULE MONITOR NOTIFICATION
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#1E293B]">
                  {latestAlertBanner}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setLatestAlertBanner(null)}
              className="tactile-switch px-3 py-1.5 rounded-xl text-[10px] font-bold text-[#64748B] hover:text-[#1E293B] cursor-pointer shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* =================================================================
            3. TOP CONSOLE GRID (MIRRORS THE SCREENSHOT'S EXACT 2-COLUMN LAYOUT)
               - Left Tall Card: Study & Dinacharya Focus Core (Dial + 3 Switches)
               - Right Top Card: Recessed Track Controls (Custom Permanent Task Builder)
               - Right Bottom Card: Braun & Teenage Engineering Schedule Alert Engine
            ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 mb-12 items-stretch">
          
          {/* LEFT CARD (5 COLS): STUDY FOCUS CORE & PHYSICAL SWITCHES */}
          <div className="lg:col-span-5 tactile-card rounded-[28px] p-7 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#94A3B8]">
                DINACHARYA &amp; STUDY CORE
              </span>
              {/* Glowing Green Active LED Pip */}
              <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
            </div>

            {/* Extruded Outer Ring + Recessed Inner Well Dial */}
            <div className="my-8 flex items-center justify-center">
              <div className="tactile-card w-52 h-52 rounded-full flex items-center justify-center p-5">
                <div className="tactile-recessed w-full h-full rounded-full flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-[#4F46E5] tracking-tight">
                    {activeAuraPercent}%
                  </span>
                  <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-[#94A3B8] mt-1">
                    ACTIVE AURA
                  </span>
                  <span className="text-[10px] font-bold text-[#64748B] mt-1">
                    {doneCount} of {totalCount} Completed
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Physical Tactile Push-Switches (Power/Bell, Permanent Filter, Chime) */}
            <div>
              <div className="flex items-center justify-center gap-5 mb-4">
                <button
                  type="button"
                  onClick={handleToggleNotifications}
                  title="Toggle Missed-Schedule Browser Notifications"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer ${
                    notificationsEnabled
                      ? "tactile-switch-pressed text-[#10B981]"
                      : "tactile-switch text-[#64748B]"
                  }`}
                >
                  <Power className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setSoundChimeEnabled(!soundChimeEnabled)}
                  title="Toggle 528Hz Alert Chime"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer ${
                    soundChimeEnabled
                      ? "tactile-switch-pressed text-[#4F46E5]"
                      : "tactile-switch text-[#64748B]"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setShowOnlyPermanent(!showOnlyPermanent)}
                  title="Filter Permanent Daily Routines Only"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer ${
                    showOnlyPermanent
                      ? "tactile-switch-pressed text-[#4F46E5]"
                      : "tactile-switch text-[#64748B]"
                  }`}
                >
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>

              <p className="text-[11px] text-center text-[#64748B] font-medium">
                Tap the physical switches above to toggle{" "}
                <strong className="text-[#1E293B]">
                  {notificationsEnabled ? "Alerts ON" : "Alerts OFF"}
                </strong>
                ,{" "}
                <strong className="text-[#1E293B]">
                  {soundChimeEnabled ? "Chime ON" : "Chime OFF"}
                </strong>
                , and{" "}
                <strong className="text-[#4F46E5]">
                  {showOnlyPermanent ? "Permanent Only" : "All Tasks"}
                </strong>
                .
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN (7 COLS): RECESSED TRACK BUILDER + ALERT MONITOR */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-7">
            
            {/* RIGHT TOP CARD: RECESSED TRACK CONTROLS (CUSTOM PERMANENT TASK BUILDER) */}
            <form
              onSubmit={handleAddCustomTask}
              className="tactile-card rounded-[28px] p-7 space-y-5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="tactile-recessed w-11 h-11 rounded-2xl flex items-center justify-center text-[#4F46E5]">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-extrabold text-[#1E293B]">
                      Custom Routine &amp; Study Block Builder
                    </h2>
                    <p className="text-xs text-[#64748B]">
                      Drag the recessed track slider to set duration &amp; lock as a permanent daily habit
                    </p>
                  </div>
                </div>

                {/* Permanent vs Today-Only Switch */}
                <button
                  type="button"
                  onClick={() => setNewIsPermanent(!newIsPermanent)}
                  className={`px-3.5 py-2 rounded-xl text-[11px] font-extrabold flex items-center gap-1.5 cursor-pointer ${
                    newIsPermanent
                      ? "tactile-switch-pressed text-[#4F46E5]"
                      : "tactile-switch text-[#64748B]"
                  }`}
                >
                  <Pin className="w-3.5 h-3.5" />
                  <span>{newIsPermanent ? "Permanent Daily" : "Today Only"}</span>
                </button>
              </div>

              {/* Task Title & Start Time Inputs in Recessed Wells */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                <div className="sm:col-span-6 tactile-recessed rounded-2xl px-4 py-2.5">
                  <label className="block text-[9px] font-mono font-extrabold uppercase tracking-wider text-[#94A3B8]">
                    TASK / STUDY BLOCK TITLE
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g., 2-Hr Charaka Study or Gym"
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#1E293B] placeholder-[#94A3B8] focus:outline-none mt-0.5"
                  />
                </div>

                <div className="sm:col-span-3 tactile-recessed rounded-2xl px-3.5 py-2.5">
                  <label className="block text-[9px] font-mono font-extrabold uppercase tracking-wider text-[#94A3B8]">
                    START TIME
                  </label>
                  <input
                    type="time"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-[#1E293B] focus:outline-none mt-0.5"
                  />
                </div>

                <div className="sm:col-span-3 tactile-recessed rounded-2xl px-3.5 py-2.5">
                  <label className="block text-[9px] font-mono font-extrabold uppercase tracking-wider text-[#94A3B8]">
                    PERIOD
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as TaskCategory)}
                    className="w-full bg-transparent text-xs font-bold text-[#1E293B] focus:outline-none mt-1"
                  >
                    <option value="dinacharya">Dinacharya</option>
                    <option value="daywork">Day Study/Work</option>
                    <option value="ratricharya">Ratricharya</option>
                  </select>
                </div>
              </div>

              {/* Recessed Track Slider for Block Duration (0.5 Hr to 6 Hrs) */}
              <div className="tactile-recessed rounded-2xl px-5 py-3.5">
                <div className="flex justify-between text-[10px] font-mono font-extrabold uppercase text-[#64748B] mb-2">
                  <span>DEDICATED DURATION BLOCK</span>
                  <span className="text-[#4F46E5]">
                    {newDurationHrs} HRS ({format12Hour(newStartTime)} –{" "}
                    {format12Hour(computeEndTime(newStartTime, newDurationHrs))})
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="6"
                  step="0.5"
                  value={newDurationHrs}
                  onChange={(e) => setNewDurationHrs(parseFloat(e.target.value))}
                  className="w-full tactile-slider"
                  style={{
                    background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${
                      ((newDurationHrs - 0.5) / 5.5) * 100
                    }%, #CBD5E1 ${((newDurationHrs - 0.5) / 5.5) * 100}%, #CBD5E1 100%)`,
                    borderRadius: "999px",
                    height: "8px",
                  }}
                />
              </div>

              {/* Bottom 2 Recessed Readout Boxes + Add Button */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-center">
                <div className="tactile-recessed rounded-2xl p-3">
                  <span className="block text-[9px] font-mono font-extrabold uppercase text-[#94A3B8]">
                    REPEAT MODE
                  </span>
                  <span className="text-xs font-bold text-[#334155]">
                    {newIsPermanent ? "Permanent Daily" : "One-Time To-Do"}
                  </span>
                </div>

                <div className="tactile-recessed rounded-2xl p-3">
                  <span className="block text-[9px] font-mono font-extrabold uppercase text-[#94A3B8]">
                    AUTO-ALERT DEADLINE
                  </span>
                  <span className="text-xs font-bold text-[#4F46E5]">
                    At {format12Hour(computeEndTime(newStartTime, newDurationHrs))}
                  </span>
                </div>

                <button
                  type="submit"
                  className="tactile-switch h-full py-3.5 px-5 rounded-2xl font-heading text-xs font-extrabold text-[#4F46E5] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>Add to Schedule</span>
                </button>
              </div>
            </form>

            {/* RIGHT BOTTOM CARD: MISSED-SCHEDULE NOTIFICATION MONITOR */}
            <div className="tactile-card rounded-[28px] p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#4F46E5] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> CHRONOBIOLOGY DEADLINE GUARD
                </span>
                <h3 className="font-heading text-xl font-black text-[#1E293B]">
                  {missedTasks.length === 0
                    ? "All Passed Time Windows Completed"
                    : `${missedTasks.length} Scheduled Block${missedTasks.length > 1 ? "s" : ""} Missed Window`}
                </h3>
                <p className="text-xs text-[#64748B] max-w-md leading-relaxed">
                  {missedTasks.length === 0
                    ? "Your Dinacharya & study blocks are on track. If you miss any dedicated window, an alert fires automatically."
                    : `Overdue: ${missedTasks.map((t) => t.title).join(", ")}. Tap the card below to log completion.`}
                </p>
              </div>

              <button
                type="button"
                onClick={triggerTestNotification}
                className="tactile-switch px-6 py-3.5 rounded-2xl text-xs font-extrabold text-[#4F46E5] shrink-0 cursor-pointer"
              >
                Test Alert
              </button>
            </div>

          </div>
        </div>

        {/* =================================================================
            4. SCHEDULE FILTER BAR & RESET CONTROLS
            ================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
          <div className="tactile-recessed p-1.5 rounded-2xl flex flex-wrap items-center gap-1.5">
            {([
              { id: "all" as const, label: `All Blocks (${allScheduleItems.length})` },
              { id: "dinacharya" as const, label: "☀ Dinacharya" },
              { id: "daywork" as const, label: "📚 Study & Work To-Do" },
              { id: "ratricharya" as const, label: "☾ Ratricharya" },
            ]).map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    active
                      ? "tactile-switch text-[#4F46E5]"
                      : "text-[#64748B] hover:text-[#1E293B]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              setCompletedIds([]);
              setNotifiedIds([]);
              localStorage.removeItem(`atreya-neu-done-${todayKey}`);
              localStorage.removeItem(`atreya-neu-notified-${todayKey}`);
            }}
            className="tactile-switch px-4 py-2.5 rounded-2xl text-xs font-bold text-[#64748B] hover:text-[#1E293B] flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Today&apos;s Checkmarks</span>
          </button>
        </div>

        {/* =================================================================
            5. TACTILE SCHEDULE & CUSTOM TO-DO CARDS
               - Extruded when pending -> Recessed/Pressed when completed
               - Shows LIVE / UPCOMING / MISSED WINDOW status badge
            ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleTasks.map((task) => {
            const isDone = completedIds.includes(task.id);
            const startMins = timeToMinutes(task.startTime);
            const endMins = timeToMinutes(task.endTime);
            const isOverdue = !isDone && nowMinutes > endMins;
            const isActiveNow = !isDone && nowMinutes >= startMins && nowMinutes <= endMins;

            return (
              <div
                key={task.id}
                onClick={() => toggleComplete(task.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleComplete(task.id);
                }}
                className={`rounded-[26px] p-6 cursor-pointer flex flex-col justify-between ${
                  isDone ? "tactile-recessed opacity-85" : "tactile-card hover:-translate-y-0.5"
                }`}
              >
                <div>
                  {/* Top Row: Time Window, Permanent Pin & Check Switch */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="tactile-recessed px-3 py-1 rounded-xl text-[10px] font-mono font-extrabold text-[#4F46E5] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {format12Hour(task.startTime)} – {format12Hour(task.endTime)}
                      </span>

                      {task.isPermanent ? (
                        <span className="tactile-recessed px-2.5 py-1 rounded-xl text-[9px] font-mono font-extrabold uppercase text-[#334155] flex items-center gap-1">
                          <Pin className="w-2.5 h-2.5 text-[#4F46E5]" /> Permanent
                        </span>
                      ) : (
                        <span className="tactile-recessed px-2.5 py-1 rounded-xl text-[9px] font-mono font-extrabold uppercase text-[#64748B]">
                          Today To-Do
                        </span>
                      )}

                      {isActiveNow && (
                        <span className="px-2.5 py-1 rounded-xl bg-[#10B981]/15 text-[#059669] text-[9px] font-mono font-extrabold uppercase flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                          Active Window
                        </span>
                      )}

                      {isOverdue && (
                        <span className="px-2.5 py-1 rounded-xl bg-rose-500/15 text-rose-600 text-[9px] font-mono font-extrabold uppercase flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Missed Window
                        </span>
                      )}
                    </div>

                    {/* Physical Check Push-Switch */}
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                        isDone
                          ? "tactile-switch-pressed text-[#10B981]"
                          : "tactile-switch text-[#94A3B8]"
                      }`}
                    >
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Task Title & Subtitle */}
                  <h3
                    className={`font-heading text-lg font-extrabold text-[#1E293B] mb-1 ${
                      isDone ? "line-through opacity-65" : ""
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-4">
                    {task.subtitle}
                  </p>
                </div>

                {/* Card Footer: Category Tag & Custom Task Actions (Pin / Delete) */}
                <div className="pt-3 border-t border-[#CBD5E1]/60 flex items-center justify-between text-[10px] font-mono font-bold text-[#64748B]">
                  <span className="uppercase tracking-wider">
                    {task.category === "dinacharya" && "☀ Pratah Dinacharya"}
                    {task.category === "daywork" && `📚 ${task.durationHrs} Hr Focus Block`}
                    {task.category === "ratricharya" && "☾ Sandhya & Ratricharya"}
                  </span>

                  {task.isCustom && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => togglePermanentStatus(task, e)}
                        className="tactile-switch px-2.5 py-1 rounded-lg text-[9px] font-extrabold text-[#4F46E5] cursor-pointer"
                        title="Toggle Permanent Daily vs Today Only"
                      >
                        {task.isPermanent ? "Make 1-Day" : "Make Permanent"}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => deleteCustomTask(task, e)}
                        className="tactile-switch p-1.5 rounded-lg text-rose-500 cursor-pointer"
                        title="Delete Custom Task"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
