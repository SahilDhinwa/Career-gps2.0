"use client";

import Link from "next/link";
import { Mail, MapPin, Heart, ArrowRight, MessageCircle } from "lucide-react";
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
  const defaultMessage = encodeURIComponent("Hi Sahil, I have a question about Veblen Good!");
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

            <p className={`font-medium leading-relaxed mb-6 text-sm transition-colors ${isBatman ? 'text-gray-300' : 'text-foreground/70'}`}>
              Democratizing global education. We provide students from tier-2 and tier-3 cities with the exact, fully-funded roadmaps needed to study abroad debt-free.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-success/10 border border-success/20 text-success text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" /> Zero Gatekeeping
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col md:mx-auto">
            <h3 className={`font-heading font-bold mb-5 text-lg transition-colors ${isBatman ? 'text-gray-100' : 'text-foreground'}`}>Platform</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/pathways" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Pathways
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Scholarship Database
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vault" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  The Action Vault
                </Link>
              </li>
              <li>
                <Link href="/e-books" className={`flex items-center gap-2 group transition-colors ${isBatman ? 'text-gray-300 hover:text-red-500' : 'text-foreground/70 hover:text-primary'}`}>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Premium E-Books
                </Link>
              </li>
            </ul>
          </div>

          {/* DEDICATED CONTACT & SUPPORT HUB */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className={`font-heading font-bold mb-5 text-lg transition-colors ${isBatman ? 'text-gray-100' : 'text-foreground'}`}>Support & Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              
              {/* Clickable WhatsApp Integration */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>WhatsApp Support</p>
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
                  <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>Email Inquiries</p>
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
                  <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 transition-colors ${isBatman ? 'text-gray-400' : 'text-foreground/50'}`}>Founder & Architect</p>
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
          <p>© {currentYear} Veblen Good. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className={`transition-colors ${isBatman ? 'hover:text-gray-100' : 'hover:text-foreground'}`}>About Us</Link>
            <span className={`transition-colors cursor-not-allowed opacity-50 ${isBatman ? 'hover:text-gray-100' : 'hover:text-foreground'}`}>Privacy Policy</span>
            <span className={`transition-colors cursor-not-allowed opacity-50 ${isBatman ? 'hover:text-gray-100' : 'hover:text-foreground'}`}>Terms of Service</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
