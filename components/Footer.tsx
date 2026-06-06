"use client";

import Link from "next/link";
import { Compass, Phone, Mail, MapPin, Heart, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/80 backdrop-blur-md border-t border-surfaceBorder transition-colors duration-300 relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12 mb-12">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity w-fit mb-4">
              <Compass className="w-6 h-6" />
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                Career GPS
              </span>
            </Link>
            <p className="text-foreground/70 font-medium leading-relaxed mb-6 text-sm">
              Democratizing global education. We provide students from tier-2 and tier-3 cities with the exact, fully-funded roadmaps needed to study abroad debt-free.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-success/10 border border-success/20 text-success text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" /> Zero Gatekeeping
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col md:mx-auto">
            <h3 className="font-heading font-bold text-foreground mb-5 text-lg">Platform</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/pathways" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Pathways
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Scholarship Database
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vault" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  The Action Vault
                </Link>
              </li>
              <li>
                <Link href="/e-books" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> 
                  Premium E-Books
                </Link>
              </li>
            </ul>
          </div>

          {/* DEDICATED CONTACT & SUPPORT HUB */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-heading font-bold text-foreground mb-5 text-lg">Support & Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-0.5">Direct Support</p>
                  <p className="text-foreground font-bold">+91 8769892303</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-0.5">Email Inquiries</p>
                  <a href="mailto:support@careergps.in" className="text-foreground font-bold hover:text-primary transition-colors">
                    support@careergps.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-foreground/50 text-xs font-bold uppercase tracking-wider mb-0.5">Founder & Architect</p>
                  <Link href="/about" className="text-foreground font-bold hover:text-primary transition-colors flex items-center gap-1">
                    Sahil Dhinwa <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LEGAL/COPYRIGHT BAR */}
        <div className="pt-8 border-t border-surfaceBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-foreground/50">
          <p>© {currentYear} Career GPS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
            <span className="hover:text-foreground transition-colors cursor-not-allowed opacity-50">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-not-allowed opacity-50">Terms of Service</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
