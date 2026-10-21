import Matchmaker from "../components/Matchmaker";
import Link from "next/link";
import Image from "next/image";
import LandingReels from "../components/LandingReels";

import { 
  ArrowRight, Globe, ShieldCheck, TrendingUp, Heart, 
  BookOpen, FolderOpen, Leaf, Sparkles, CheckCircle, Stethoscope 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* INLINE STYLES - Updated to hide the green grid in Batman mode! */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hide the default green 3D grid when Batman Mode is active */
        .batman .perspective-container {
          display: none !important;
        }

        .perspective-container {
          position: absolute;
          inset: 0;
          perspective: 1000px;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        
        .perspective-grid {
          position: absolute;
          width: 200%;
          height: 150%;
          left: -50%;
          top: 30%;
          background-image: 
            linear-gradient(to right, rgba(17, 66, 50, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 66, 50, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(75deg);
          animation: pan-grid 3s linear infinite;
          mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
        }
        
        @keyframes pan-grid {
          0% { transform: rotateX(75deg) translateY(0); }
          100% { transform: rotateX(75deg) translateY(60px); }
        }

        .glowing-core {
          position: absolute;
          top: 0%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
          animation: pulse-core 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse-core {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.7; }
          50% { transform: translateX(-50%) scale(1.2); opacity: 1; }
        }
      `}} />

      {/* HERO SECTION */}
      <div className="relative flex-grow flex items-center justify-center px-6 py-12 md:py-20 lg:py-32 overflow-hidden bg-background z-40">
        
        <div className="perspective-container">
          <div className="glowing-core"></div>
          <div className="perspective-grid"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-2 md:pt-4">
          <Link 
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder hover:border-primary text-xs md:text-sm font-bold text-primary mb-5 md:mb-8 shadow-sm transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
            <span>ATREYA MED &amp; BAMS PROF II PAPERS LIVE — EXPLORE HUB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4 md:mb-6 leading-[1.15] md:leading-tight drop-shadow-sm">
            Your Ultimate Roadmap to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">
              Global Education.
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed bg-surface/50 backdrop-blur-[2px] rounded-lg p-2">
            Stop guessing. Get step-by-step guidance, track your application progress, and unlock fully-funded scholarships like MEXT, DAAD, and Chevening.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto relative z-20">
            <Link 
              href="/pathways" 
              className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-3.5 md:py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="w-full sm:w-auto">
              <Matchmaker />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE GRID - Added backdrop-blur-md for tactical glass effect */}
      <div className="bg-surface backdrop-blur-md border-t border-surfaceBorder py-20 px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Why Top Students Choose Veblen Good</h2>
            <p className="text-foreground/60 font-medium">Everything you need to secure your seat at a global university.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">100% Fully Funded</h3>
              <p className="text-foreground/70 leading-relaxed">
                Discover scholarships that cover your entire tuition, flights, and monthly living expenses. Zero student loans required.
              </p>
            </div>

            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Stage-by-Stage Tracking</h3>
              <p className="text-foreground/70 leading-relaxed">
                Never miss a deadline. Our interactive roadmap breaks down complex applications into manageable daily tasks.
              </p>
            </div>

            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Verified Guidance</h3>
              <p className="text-foreground/70 leading-relaxed">
                No more generic advice. Access premium, insider checklists designed by experts who have navigated the system.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* REELS SECTION */}
      <LandingReels />
      
      {/* ACTION VAULT & ATREYA MED TWO-TRACK ECOSYSTEM */}
      <div className="bg-background py-8 md:py-10 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-10">
          
          {/* 1. ACTION VAULT BANNER */}
          <div className="relative p-[1px] rounded-sm bg-gradient-to-r from-warning/40 via-warning/10 to-warning/40 shadow-sm hover:shadow-md transition-shadow w-full">
            <div className="bg-surface backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 rounded-sm relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-full bg-warning/5 pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center text-center sm:text-left gap-4 md:gap-5 z-10 w-full md:w-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-warning/10 rounded-full flex items-center justify-center shrink-0 border border-warning/20">
                  <FolderOpen className="w-6 h-6 md:w-8 md:h-8 text-warning" />
                </div>
                <div>
                  <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">
                    Stop Drafting from Scratch.
                  </h2>
                  <p className="text-foreground/80 font-medium max-w-lg text-sm md:text-base">
                    Bypass blank-page anxiety with our Action Vault. Access copy-paste document templates proven to win international scholarships.
                  </p>
                </div>
              </div>
            
              <div className="shrink-0 z-10 w-full md:w-auto flex flex-col items-center md:items-end">
                <Link 
                  href="/dashboard/vault"
                  className="w-full md:w-auto bg-primary text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-sm shadow-md hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mb-3"
                >
                  Open Action Vault <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-[10px] md:text-xs font-bold text-foreground/60 flex items-center gap-1.5 text-center md:text-right">
                  <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-success" />
                  Includes templates for DAAD, Chevening &amp; Commonwealth
                </p>
              </div>

            </div>
          </div>
          
          {/* 2. ATREYA MED TWO-TRACK DIVISION (REPLACES LONE 2ND PROF BANNER) */}
          <div className="w-full bg-surface/60 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/10 text-[10px] uppercase font-bold tracking-widest text-amber-500 mb-3 border border-amber-500/20">
                  <Stethoscope className="w-3.5 h-3.5" /> ATREYA Med • Medical Sciences Division
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
                  5,000 Years of Clinical Science. Two Dedicated Portals.
                </h2>
              </div>
              <p className="text-xs md:text-sm text-foreground/60 max-w-md font-medium">
                Learn authentic Ayurveda from the exact platform that trains India&apos;s future Ayurvedic doctors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* TRACK 1: BAMS SCHOLAR GATEWAY (HOUSES 1ST, 2ND & 3RD PROF + BAMS HUB) */}
              <div className="bg-gradient-to-br from-amber-950/40 via-background to-background border border-amber-500/30 hover:border-amber-500/60 rounded-sm p-6 md:p-8 flex flex-col justify-between transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm bg-amber-500 text-black">
                      TRACK 1 • INDIA BAMS SCHOLARS
                    </span>
                    <span className="text-[10px] font-bold text-success flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Prof II Papers Inside
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    ATREYA Med • BAMS &amp; AIAPGET Hub
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    Complete NCISM Prof I, II &amp; III syllabus checklists, Shloka memorization tricks, plus direct access to the <strong>BAMS 2nd Prof Vault</strong> (Charaka MCQs &amp; PYQ PDFs).
                  </p>
                </div>

                <Link 
                  href="/bams-scholar" 
                  className="w-full bg-amber-500/15 hover:bg-amber-500 hover:text-black text-amber-500 border border-amber-500/40 font-bold py-3.5 px-6 rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Enter BAMS Scholar Gateway</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* TRACK 2: ATREYA GLOBAL GATEWAY (INTERNATIONAL LEARNERS) */}
              <div className="bg-gradient-to-br from-emerald-950/40 via-background to-background border border-emerald-500/30 hover:border-emerald-500/60 rounded-sm p-6 md:p-8 flex flex-col justify-between transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm bg-emerald-500 text-black">
                      TRACK 2 • INTERNATIONAL LEARNERS
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" /> Global Edition
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    ATREYA Med • Global Science Portal
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    Beyond the &ldquo;spa day&rdquo; myth. Explore interactive Clinical X-Ray cards, Prakriti &amp; Agni root-cause diagnostics, and the 8 specialties of Ashtanga Ayurveda.
                  </p>
                </div>

                <Link 
                  href="/atreya" 
                  className="w-full bg-emerald-500/15 hover:bg-emerald-500 hover:text-black text-emerald-400 border border-emerald-500/40 font-bold py-3.5 px-6 rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Global Ayurveda Science</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* PROMO BANNER FOR E-BOOKS */}
      <div className="bg-background pb-8 md:pb-10 pt-2 md:pt-4 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-sm shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-3xl pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full bg-white/10 text-[10px] md:text-xs font-bold text-white mb-3 md:mb-4 border border-white/20 uppercase tracking-widest">
                <BookOpen className="w-3 h-3 text-warning" /> New Release
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                Master the Art of Communication
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-0 font-medium max-w-xl leading-relaxed">
                Grab our flagship E-Book: <span className="text-white font-bold">The Global Communicator</span>. Learn to speak with the confidence of an IT leader. Completely free for a limited time.
              </p>
            </div>

            <div className="shrink-0 z-10 w-full md:w-auto">
              <Link 
                href="/e-books"
                className="w-full md:w-auto bg-primary text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Claim Free Asset <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* COMMUNITY SUPPORT SECTION */}
      <div className="bg-background border-t border-surfaceBorder py-12 md:py-20 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface backdrop-blur-md border border-surfaceBorder rounded-sm shadow-sm p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-xs md:text-sm font-bold text-primary mb-4 md:mb-6 border border-primary/20">
                <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current text-primary" /> Support Our Community
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Help Us Empower More Students
              </h2>
              <p className="text-foreground/70 text-sm md:text-lg mb-5 md:mb-6 leading-relaxed">
                We are on a mission to democratize global education. Your support helps us maintain our free tools, expand our scholarship database, and guide thousands of students from tier-2 and tier-3 cities toward fully-funded opportunities.
              </p>
              <p className="text-foreground font-bold text-xs md:text-sm bg-foreground/5 inline-block px-3 md:px-4 py-2 rounded-sm border border-surfaceBorder">
                Scan the UPI QR code to contribute. Every rupee builds a bridge to someone&apos;s future.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center z-10">
              <div className="bg-white p-3 md:p-4 rounded-sm shadow-md border border-gray-200 mb-3 md:mb-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <Image 
                  src="/QR_1780487966.png" 
                  alt="Support Veblen Good via UPI" 
                  width={160}
                  height={160}
                  className="object-contain w-40 h-40 md:w-48 md:h-48"
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-success" /> Secure UPI Payment
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
