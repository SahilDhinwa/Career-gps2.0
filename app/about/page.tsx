"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Compass, Phone, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "../../components/Logo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation & Header */}
        <div className="flex justify-between items-center mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-[#D4AF37] transition-colors font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="hidden sm:block scale-75 transform origin-right opacity-70 hover:opacity-100 transition-opacity">
            <Logo />
          </div>
        </div>

        {/* Main Founder Card */}
        <div className="bg-surface/80 backdrop-blur-xl border border-surfaceBorder rounded-sm shadow-2xl overflow-hidden relative">
          
          {/* Decorative Top Banner (Now featuring the Veblen Good gold aesthetic) */}
          <div className="h-48 md:h-64 w-full bg-gradient-to-r from-[#0B1A14] via-[#1a382c] to-[#D4AF37] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0dGVybj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjEyLDE3NSw1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-40"></div>
          </div>

          <div className="px-8 pb-12 relative flex flex-col items-center text-center">
            
            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 -mt-32 md:-mt-40 mb-8 rounded-3xl border-8 border-surface shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden bg-background group">
              <Image 
                src="/1000009790.jpg" 
                alt="Sahil Dhinwa" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            </div>

            {/* Badges - UPDATED for Veblen Good */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20 shadow-sm uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Founder & Architect
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/20 shadow-sm uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Veblen Good
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-3 drop-shadow-sm">
              Sahil Dhinwa
            </h1>
            <p className="text-foreground/60 font-bold text-lg mb-10 uppercase tracking-widest leading-relaxed max-w-lg">
              KOTA to Global: <br className="md:hidden" /> Democratizing International Education
            </p>

            {/* Origin Story Placeholder - UPDATED for Veblen Good */}
            <div className="max-w-2xl w-full mx-auto bg-background/50 border border-dashed border-[#D4AF37]/30 rounded-sm p-8 mb-12 relative group shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A14]/5 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm"></div>
              <Compass className="w-10 h-10 text-foreground/15 mx-auto mb-5" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">The Origin Story</h3>
              <p className="text-foreground/80 font-medium leading-relaxed">
                The full narrative behind <span className="text-[#D4AF37] font-bold">Veblen Good</span>—from the fields of Kota to establishing fully-funded pathways at world-class institutions—is currently being documented.
                <br /><br />
                We are crafting an inspiring look at breaking down invisible barriers for students in tier-2 and tier-3 cities.
              </p>
               <div className="mt-8 px-4 py-2 bg-foreground/5 border border-surfaceBorder rounded-sm inline-flex items-center gap-2 text-sm text-foreground/70 font-bold">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Narrative Update Coming Soon
               </div>
            </div>

            {/* Contact Terminal - UPDATED Email */}
            <div className="w-full max-w-2xl text-left bg-surface border border-surfaceBorder rounded-sm shadow-xl overflow-hidden">
              <div className="bg-foreground/5 border-b border-surfaceBorder px-6 py-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                <h3 className="font-bold text-foreground">Dedicated Contact Hub</h3>
              </div>
              
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-1.5">Direct Support</p>
                    <p className="text-foreground font-bold text-lg">+91 8769892303</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-1.5">Email Inquiries</p>
                    <a href="mailto:sahilkumardhinwa82@gmail.com" className="text-foreground font-bold text-sm md:text-base lg:text-lg hover:text-primary transition-colors break-all">
                      sahilkumardhinwa82<br/>@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:col-span-2 pt-4 border-t border-surfaceBorder/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-1.5">Base of Operations</p>
                    <p className="text-foreground font-bold text-lg">Jhunjhunu District, Rajasthan</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
