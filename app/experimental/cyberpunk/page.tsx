"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Terminal, Cpu, Activity, ShieldAlert, 
  Radio, Zap, Crosshair, Lock 
} from "lucide-react";

export default function CyberpunkPage() {
  const [overclock, setOverclock] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[SYS_BOOT] Initializing Veblen Neural Link v4.02...",
    "[AUTH_OK] Node verified: JHUNJHUNU_SECTOR_01",
    "[BAMS_CORE] Loaded 1,420 Sanskrit clinical sutras into memory.",
  ]);

  const runDiagnostic = () => {
    const newEntry = `[EXEC_${new Date().toLocaleTimeString()}] Tactical scan complete — 0 bottlenecks detected.`;
    setLogs((prev) => [...prev.slice(-5), newEntry]);
  };

  return (
    <div 
      className="min-h-screen bg-[#04060a] text-cyan-400 font-mono pt-6 pb-32 px-4 sm:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.06) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Top Tactical Bar */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-10 bg-cyan-950/30 border-l-4 border-l-[#fcee0a] border-t border-r border-b border-cyan-500/40 px-5 py-3.5 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-[#fcee0a] transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> [EXIT_TO_DIRECTORY]
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-[11px] bg-[#fcee0a] text-black font-black px-2.5 py-0.5 uppercase">
            STYLE #14 // CYBERPUNK HUD
          </span>
          <span className="text-xs text-emerald-400 flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-ping" /> NET_ONLINE
          </span>
        </div>
      </div>

      {/* Main HUD Header */}
      <div className="max-w-6xl mx-auto mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 bg-black/80 border border-cyan-500/50 p-8 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#fcee0a]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#fcee0a]" />

          {/* FIXED LINE: Wrapped the pseudo-comment in string literal braces */}
          <p className="text-xs text-[#fcee0a] uppercase tracking-[0.25em] mb-2">
            {"// NEURAL_INTERFACE_ACTIVE"}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-wider text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.7)] mb-4">
            TACTICAL <span className="text-[#fcee0a]">COMMAND</span> HUD
          </h1>
          <p className="text-cyan-200/70 text-sm leading-relaxed">
            High-contrast neon telemetry, hazard yellow callouts, razor-sharp 90-degree corners, and live terminal diagnostic feeds inspired by sci-fi cockpit interfaces.
          </p>
        </div>

        {/* Overclock Toggle Box */}
        <div className={`lg:col-span-4 p-8 border transition-all ${overclock ? "bg-rose-950/40 border-rose-500 text-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.3)]" : "bg-cyan-950/20 border-cyan-500/40"}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-black uppercase tracking-widest">CORE_OVERCLOCK</span>
            <ShieldAlert className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black mb-4">
            {overclock ? "WARNING: 140% LOAD" : "NOMINAL: 60 FPS"}
          </p>
          <button
            onClick={() => setOverclock(!overclock)}
            className={`w-full py-3 font-black text-xs uppercase tracking-widest border transition-all ${
              overclock 
                ? "bg-rose-500 text-black border-rose-300" 
                : "bg-[#fcee0a] text-black border-[#fcee0a] hover:bg-cyan-400"
            }`}
          >
            {overclock ? "DISABLE OVERCLOCK" : "ENGAGE OVERCLOCK_"}
          </button>
        </div>
      </div>

      {/* Interactive Terminal + Telemetry Modules */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Live Command Runner */}
        <div className="lg:col-span-7 bg-black/90 border border-cyan-500/40 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <Terminal className="w-4 h-4 text-[#fcee0a]" /> LIVE_TELEMETRY_CONSOLE
              </div>
              <span className="text-[10px] text-cyan-500">TTY_01</span>
            </div>

            <div className="space-y-2.5 text-xs font-mono mb-6 min-h-[160px] bg-cyan-950/15 p-4 border border-cyan-500/20">
              {logs.map((log, index) => (
                <p key={index} className="text-cyan-200">
                  <span className="text-[#fcee0a] mr-2">&gt;</span>
                  {log}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={runDiagnostic}
              className="bg-cyan-400/15 hover:bg-cyan-400 hover:text-black border border-cyan-400 text-cyan-300 font-bold text-xs uppercase tracking-widest px-5 py-3 transition-all"
            >
              + Run System Scan_
            </button>
            <button
              onClick={() => setLogs(["[CONSOLE_CLEARED] Waiting for operator input..."])}
              className="border border-cyan-500/40 hover:border-rose-500 text-cyan-400/70 hover:text-rose-400 text-xs uppercase px-4 py-3 transition-colors"
            >
              Purge Logs
            </button>
          </div>
        </div>

        {/* Biometric & Radar Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bg-cyan-950/20 border border-cyan-500/40 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase text-[#fcee0a] font-bold">NEURAL RETENTION</span>
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-black text-white mb-2">98.4%</p>
            <div className="w-full h-2 bg-cyan-950 border border-cyan-500/30">
              <div className="w-[98%] h-full bg-gradient-to-r from-cyan-400 to-[#fcee0a]" />
            </div>
          </div>

          <div className="bg-cyan-950/20 border border-cyan-500/40 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase text-[#fcee0a] font-bold">TARGET LOCK</span>
              <Crosshair className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-lg font-bold text-white mb-1">AIAPGET // GLOBAL PG</p>
            <p className="text-xs text-cyan-300/70 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#fcee0a]" /> Encrypted Study Protocol Active
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
