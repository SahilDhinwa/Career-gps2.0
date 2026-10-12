"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { ShieldAlert, Users, Database, Activity, LogOut, ChevronRight, Terminal } from "lucide-react";

type AdminTab = "analytics" | "users" | "cms";

export default function AdminCommandCenter() {
  const { user, userData, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("analytics");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔒 VAULT DOOR: Kick out anyone who isn't an admin
  useEffect(() => {
    if (!isLoading && mounted) {
      if (!user || userData?.role !== "admin") {
        router.push("/"); 
      }
    }
  }, [user, userData, isLoading, mounted, router]);

  // Loading State while verifying credentials
  if (isLoading || !mounted || userData?.role !== "admin") {
    return (
      <div className="min-h-screen bg-[#020101] flex flex-col justify-center items-center">
        <ShieldAlert className="w-12 h-12 text-red-600 animate-pulse mb-4" />
        <p className="text-red-500 font-mono text-sm tracking-widest uppercase">Verifying Clearance...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020101] text-gray-300 font-sans flex overflow-hidden selection:bg-red-500/30">
      
      {/* BACKGROUND GRID & GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1a0505 1px, transparent 1px), linear-gradient(90deg, #1a0505 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* LEFT SIDEBAR: Tactical Navigation */}
      <aside className="w-72 bg-[#050101] border-r border-red-900/30 flex flex-col relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.8)]">
        <div className="p-6 border-b border-red-900/30">
          <div className="flex items-center gap-3 text-red-500 mb-1">
            <Terminal className="w-6 h-6" />
            <h1 className="font-bold text-xl tracking-wider uppercase">Batcomputer</h1>
          </div>
          <p className="text-xs text-red-900/80 font-mono tracking-widest ml-9">Root Access Granted</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === "analytics" ? 'bg-red-950/40 text-red-500 border border-red-900/50 shadow-[inset_0_0_12px_rgba(255,0,0,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <Activity className="w-5 h-5" /> Analytics Node
            {activeTab === "analytics" && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>
          
          <button 
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === "users" ? 'bg-red-950/40 text-red-500 border border-red-900/50 shadow-[inset_0_0_12px_rgba(255,0,0,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <Users className="w-5 h-5" /> User Protocols
            {activeTab === "users" && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>

          <button 
            onClick={() => setActiveTab("cms")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === "cms" ? 'bg-red-950/40 text-red-500 border border-red-900/50 shadow-[inset_0_0_12px_rgba(255,0,0,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <Database className="w-5 h-5" /> Mainframe CMS
            {activeTab === "cms" && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>
        </nav>

        <div className="p-4 border-t border-red-900/30">
          <button 
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-400 hover:bg-red-950/30 rounded-sm font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" /> Exit Terminal
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 relative z-10 h-screen overflow-y-auto custom-scrollbar">
        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="mb-10 pb-6 border-b border-red-900/20">
            <h2 className="text-3xl font-bold text-white capitalize tracking-wide flex items-center gap-3">
              {activeTab === "analytics" && <><Activity className="text-red-500 w-8 h-8" /> System Analytics</>}
              {activeTab === "users" && <><Users className="text-red-500 w-8 h-8" /> User Protocols</>}
              {activeTab === "cms" && <><Database className="text-red-500 w-8 h-8" /> Content Mainframe</>}
            </h2>
          </header>

          {/* DYNAMIC TAB CONTENT */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === "analytics" && (
              <div className="text-gray-500 border border-red-900/20 bg-black/50 p-10 rounded-sm text-center font-mono">
                [ INIT: ANALYTICS DASHBOARD MODULE ]
                {/* We will build the real-time visitor charts here */}
              </div>
            )}
            
            {activeTab === "users" && (
              <div className="text-gray-500 border border-red-900/20 bg-black/50 p-10 rounded-sm text-center font-mono">
                [ INIT: USER MANAGEMENT PROTOCOL ]
                {/* We will build the Firestore User Table here */}
              </div>
            )}

            {activeTab === "cms" && (
              <div className="text-gray-500 border border-red-900/20 bg-black/50 p-10 rounded-sm text-center font-mono">
                [ INIT: CONTENT INJECTION SYSTEM ]
                {/* We will build the forms for MCQs, PDFs, and Reels here */}
              </div>
            )}
          </div>

        </div>
      </main>

    </div>
  );
}
