"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Compass, Phone, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warning/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Main Founder Card */}
        <div className="bg-surface/80 backdrop-blur-xl border border-surfaceBorder rounded-sm shadow-2xl overflow-hidden relative">
          
          {/* Decorative Top Banner */}
          <div className="h-32 md:h-48 w-full bg-gradient-to-r from-primary via-primaryHover to-success relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>

          <div className="px-8 pb-12 relative flex flex-col items-center text-center">
            
            {/* Profile Image (Overlapping the banner) */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 -mt-20 md:-mt-24 mb-6 rounded-full border-4 border-surface shadow-2xl overflow-hidden bg-background">
              <Image 
                src="/1000009790.jpg" 
                alt="Sahil Dhinwa" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20 shadow-sm uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Founder & Architect
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-warning/10 text-xs font-bold text-warning border border-warning/20 shadow-sm uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Career GPS
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2 drop-shadow-sm">
              Sahil Dhinwa
            </h1>
            <p className="text-foreground/60 font-bold text-lg mb-8 uppercase tracking-widest">
              Democratizing Global Education
            </p>

            {/* Origin Story Placeholder */}
            <div className="max-w-2xl mx-auto bg-background/50 border border-dashed border-surfaceBorder rounded-sm p-8 mb-12 relative group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
              <Compass className="w-8 h-8 text-foreground/20 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">The Origin Story</h3>
              <p className="text-foreground/70 font-medium leading-relaxed">
                The full story behind Career GPS—from its roots in Hadota to becoming a global platform—is currently being documented. 
                <br /><br />
                Stay tuned for an inside look at how we are breaking down the invisible walls of international education for students in tier-2 and tier-3 cities.
              </p>
            </div>

            {/* Contact Terminal */}
            <div className="w-full max-w-2xl text-left bg-surface border border-surfaceBorder rounded-sm shadow-md overflow-hidden">
              <div className="bg-foreground/5 border-b border-surfaceBorder px-6 py-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                <h3 className="font-bold text-foreground">Dedicated Contact Hub</h3>
              </div>
              
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-1">Direct Support</p>
                    <p className="text-foreground font-bold text-lg">+91 8769892303</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-1">Email Inquiries</p>
                    <a href="mailto:support@careergps.in" className="text-foreground font-bold text-lg hover:text-primary transition-colors">
                      support@careergps.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:col-span-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-1">Base of Operations</p>
                    <p className="text-foreground font-bold text-lg">Jhunjhunu, Rajasthan, India</p>
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
