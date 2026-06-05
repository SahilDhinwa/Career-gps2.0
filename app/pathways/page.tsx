"use client";

import Link from "next/link";
import { Building2, Briefcase, Rocket, Globe, Lock, ArrowRight } from "lucide-react";

export default function PathwaysPage() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* THE ARCHITECTURAL BLUEPRINT BACKGROUND */}
      <style dangerouslySetInnerHTML={{__html: `
        .blueprint-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .blueprint-grid {
          position: absolute;
          inset: 0;
          background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          background-image:
            linear-gradient(rgba(17, 66, 50, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 66, 50, 0.06) 1px, transparent 1px),
            linear-gradient(rgba(17, 66, 50, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 66, 50, 0.02) 1px, transparent 1px);
        }

        .scanner-beam {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            transparent 0%, 
            rgba(16, 185, 129, 0.02) 40%, 
            rgba(212, 175, 55, 0.06) 50%, 
            transparent 60%
          );
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }
      `}} />

      {/* Layer 1: Background Elements */}
      <div className="blueprint-container">
        <div className="blueprint-grid"></div>
        <div className="scanner-beam"></div>
      </div>

      {/* Layer 2: Foreground Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-16 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 bg-white/50 backdrop-blur-sm inline-block px-4 py-1 rounded-sm">
            Select Your <span className="text-primary">Destination</span>
          </h1>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto bg-white/60 backdrop-blur-md py-2 px-4 rounded-sm border border-white/50 shadow-sm">
            India&apos;s first structured career guidance platform. Choose your path below and follow the exact roadmap to success.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Government Jobs (Inactive) */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-sm opacity-70">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
              <Building2 className="w-8 h-8 text-gray-300" />
            </div>
            <h2 className="font-heading text-xl font-bold text-gray-400 mb-3">Government Jobs</h2>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <Lock className="w-3 h-3" /> Coming Soon
            </span>
          </div>

          {/* Card 2: Private Jobs (Inactive) */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-sm opacity-70">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
              <Briefcase className="w-8 h-8 text-gray-300" />
            </div>
            <h2 className="font-heading text-xl font-bold text-gray-400 mb-3">Private Jobs</h2>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <Lock className="w-3 h-3" /> Coming Soon
            </span>
          </div>

          {/* Card 3: Self Employed / Startup (Inactive) */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-sm opacity-70">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
              <Rocket className="w-8 h-8 text-gray-300" />
            </div>
            <h2 className="font-heading text-xl font-bold text-gray-400 mb-3">Self Employed / Startup</h2>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <Lock className="w-3 h-3" /> Coming Soon
            </span>
          </div>

          {/* Card 4: Study Abroad (Active Link) */}
          <Link href="/study-abroad" className="group">
            <div className="bg-white/95 backdrop-blur-sm border border-primary/50 rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer relative overflow-hidden">
              {/* Subtle hover glow inside the active card */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 border border-success/20 relative z-10">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3 relative z-10">Study Abroad</h2>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-sm relative z-10">
                Active Pathway <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
