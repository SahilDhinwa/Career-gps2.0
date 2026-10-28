"use client";

import Link from "next/link";
import { Mail, MapPin, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isBatman = mounted && theme === 'batman';
  
  // WhatsApp Configuration
  const phoneNumber = "918769892303";
  const defaultMessage = encodeURIComponent("Hi Sahil, I have a question regarding ATREYA Med!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <footer className="bg-surface/80 backdrop-blur-md border-t border-surfaceBorder transition-colors duration-300 relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12 mb-12">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="mb-5">
              <Logo />
            </div>

            <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors ${isBatman ? 'text-red-500' : 'text-primary'}`}>
              Ayurvedic Traditional Research &amp; Education for Youth Abroad
            </p>

            <p className={`font-medium leading-relaxed mb-6 text-sm transition-colors ${isBatman ? 'text-gray-300' : 'text-foreground/70'}`}>
              Bridging classical Samhita wisdom with modern clinical technology. Equipped with interactive 3D botanical dissection studios, NCISM-aligned handwritten notes, and chronobiological Dinacharya engines for BAMS scholars and global learners.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-success/10 border border-success/20 text-success text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-current" /> Swasthasya Swasthya Rakshanam
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col md:mx-auto">
            <h3 className={`font-heading font-bold mb-5 text-lg transition-colors ${isBatman ? 'text-gray-100' : 'text-foreground'}`}>Clinical Modules</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/short-notes" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  BAMS Handwritten Notes
                </Link>
              </li>
              <li>
                <Link href="/short-notes/swasth-vritta" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Swasthavritta &amp; Yoga Hub
                </Link>
              </li>
              <li>
                <Link href="/dinacharya" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Dinacharya &amp; Agni Analyzer
                </Link>
              </li>
              <li>
                <Link href="/dravyaguna" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  3D Dravyaguna Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* DEDICATED CONTACT & SUPPORT HUB */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className={`font-heading font-bold mb-5 text-lg transition-colors ${isBatman ? 'text-gray-100' : 'text-foreground'}`}>Academic &amp; Tech Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              
              {/* Clickable WhatsApp Integration */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>Direct WhatsApp</p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`font-bold transition-colors flex items-center gap-1 group ${isBatman ? 'text-gray-100 hover:text-[#25D366]' : 'text-foreground hover:text-[#25D366]'}`}
                  >
                    +91 8769892303 <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${isBatman ? 'bg-red-950/40 border-red-900/50' : 'bg-primary/10 border-primary/20'}`}>
                  <Mail className={`w-4 h-4 ${isBatman ? 'text-red-500' : 'text-primary'}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>Research &amp; Inquiries</p>
                  <a href="mailto:sahilkumardhinwa82@gmail.com" className={`font-bold transition-colors ${isBatman ? 'text-gray-100 hover:text-red-500' : 'text-foreground hover:text-primary'}`}>
                      sahilkumardhinwa82@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${isBatman ? 'bg-red-950/40 border-red-900/50' : 'bg-primary/10 border-primary/20'}`}>
                  <MapPin className={`w-4 h-4 ${isBatman ? 'text-red-500' : 'text-primary'}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>Founder &amp; Lead Architect</p>
                  <Link href="/about" className={`font-bold transition-colors flex items-center gap-1 group ${isBatman ? 'text-gray-100 hover:text-red-500' : 'text-foreground hover:text-primary'}`}>
                    Sahil Dhinwa <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LEGAL/COPYRIGHT BAR */}
        <div className={`pt-8 border-t border-surfaceBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>
          <p>© {currentYear} ATREYA Med. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className={`transition-colors ${isBatman ? 'hover:text-gray-100' : 'hover:text-foreground'}`}>About ATREYA</Link>
            <span className={`transition-colors cursor-not-allowed opacity-50 ${isBatman ? 'hover:text-gray-100' : 'hover:text-foreground'}`}>Privacy Policy</span>
            <span className={`transition-colors cursor-not-allowed opacity-50 ${isBatman ? 'hover:text-gray-100' : 'hover:text-foreground'}`}>Terms of Clinical Use</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
