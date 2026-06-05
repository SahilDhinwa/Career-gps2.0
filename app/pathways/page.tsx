"use client";

import Link from "next/link";
import { Building2, Briefcase, Rocket, Globe, Lock, ArrowRight, Sparkles } from "lucide-react";

export default function PathwaysPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center py-20 transition-colors duration-300">
      
      {/* THE CINEMATIC GRID & SCANNER BACKGROUND */}
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
            linear-gradient(var(--surface-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--surface-border) 1px, transparent 1px),
            linear-gradient(var(--surface-border) 0.5px, transparent 0.5px),
            linear-gradient(90deg, var(--surface-border) 0.5px, transparent 0.5px);
          opacity: 0.3;
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
            rgba(42, 157, 143, 0.03) 40%, 
            rgba(212, 175, 55, 0.08) 50%, 
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
        {/* Subtle glowing orbs in the background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warning/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Layer 2: Foreground Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-md border border-surfaceBorder text-sm font-bold text-primary mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-warning" /> Phase 1 Initiation
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 drop-shadow-sm">
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Destination</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-2xl mx-auto bg-surface/50 backdrop-blur-md py-3 px-6 rounded-sm border border-surfaceBorder shadow-sm">
            Architect your ascent to the top tier. Choose your path below and deploy the exact roadmap required to secure your position.
          </p>
        </div>

        {/* 4-Card Command Center Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Government Jobs (Locked Vault) */}
          <div className="bg-surface/40 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 border border-surfaceBorder shadow-inner relative z-10">
              <Building2 className="w-8 h-8 text-foreground/30" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground/50 mb-4 relative z-10">Government Jobs</h2>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 bg-background/50 px-4 py-2 rounded-sm border border-surfaceBorder relative z-10">
              <Lock className="w-3 h-3" /> Encrypted
            </div>
          </div>

          {/* Card 2: Private Jobs (Locked Vault) */}
          <div className="bg-surface/40 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 border border-surfaceBorder shadow-inner relative z-10">
              <Briefcase className="w-8 h-8 text-foreground/30" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground/50 mb-4 relative z-10">Private Sector</h2>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 bg-background/50 px-4 py-2 rounded-sm border border-surfaceBorder relative z-10">
              <Lock className="w-3 h-3" /> Encrypted
            </div>
          </div>

          {/* Card 3: Self Employed / Startup (Locked Vault) */}
          <div className="bg-surface/40 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 border border-surfaceBorder shadow-inner relative z-10">
              <Rocket className="w-8 h-8 text-foreground/30" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground/50 mb-4 relative z-10">Startup / Founder</h2>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 bg-background/50 px-4 py-2 rounded-sm border border-surfaceBorder relative z-10">
              <Lock className="w-3 h-3" /> Encrypted
            </div>
          </div>

          {/* Card 4: Study Abroad (The Active Premium Target) */}
          <Link href="/study-abroad" className="group">
            <div className="bg-surface/90 backdrop-blur-md border border-primary/40 rounded-sm p-10 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 h-full cursor-pointer relative overflow-hidden">
              
              {/* Dynamic Hover Glow Array */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 border border-primary/30 shadow-[0_0_30px_rgba(42,157,143,0.2)] group-hover:shadow-[0_0_40px_rgba(42,157,143,0.4)] transition-shadow duration-500 relative z-10">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4 relative z-10">Study Abroad</h2>
              
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-5 py-2.5 rounded-sm border border-primary/20 shadow-sm relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                Deploy Pathway <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
