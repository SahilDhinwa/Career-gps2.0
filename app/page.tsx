import Link from "next/link";
import Image from "next/image";
import LandingReels from "../components/LandingReels";

import { 
  ArrowRight, Globe, ShieldCheck, Heart, BookOpen, 
  Leaf, Sparkles, CheckCircle, Stethoscope, 
  Brain, Layers, Eye, Activity 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* INLINE STYLES - Hides the default green 3D grid when Batman Mode is active */}
      <style dangerouslySetInnerHTML={{__html: `
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

      {/* =================================================================
          1. HERO SECTION — ATREYA MED MASTER BRANDING
          ================================================================= */}
      <div className="relative flex-grow flex items-center justify-center px-6 py-12 md:py-20 lg:py-28 overflow-hidden bg-background z-40">
        
        <div className="perspective-container">
          <div className="glowing-core"></div>
          <div className="perspective-grid"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-2 md:pt-4">
          <Link 
            href="/bams-scholar"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder hover:border-primary text-xs md:text-sm font-bold text-primary mb-5 md:mb-8 shadow-sm transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
            <span>ATREYA MED • NCISM BAMS PROF I–III &amp; AYURVEDA GLOBAL LIVE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4 md:mb-6 leading-[1.12] md:leading-tight drop-shadow-sm">
            5,000 Years of Clinical Science. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#D4AF37] to-success">
              Built for the Modern World.
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed bg-surface/50 backdrop-blur-[2px] rounded-lg p-3">
            Ayurveda is a rigorous medical science, not just a spa therapy. Learn authentic clinical Ayurveda from the exact platform that trains India&apos;s future BAMS doctors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20">
            <Link 
              href="/bams-scholar" 
              className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
            >
              <Stethoscope className="w-5 h-5" />
              <span>BAMS Scholar Hub (India)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/atreya" 
              className="w-full sm:w-auto bg-surface hover:bg-foreground/5 text-foreground border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] font-bold px-8 py-4 rounded-sm shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
            >
              <Globe className="w-5 h-5 text-[#b8860b] dark:text-[#D4AF37]" />
              <span>Ayurveda Global</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. CORE PILLARS GRID — CLICKABLE CARDS
          ================================================================= */}
      <div className="bg-surface backdrop-blur-md border-t border-surfaceBorder py-20 px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
              ATREYA Med • Clinical &amp; Academic Ecosystem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Scholars &amp; Global Learners Choose ATREYA Med
            </h2>
            <p className="text-foreground/60 font-medium max-w-2xl mx-auto">
              Bridging classical Sanskrit Samhitas with modern biomedical evidence, structured exam preparation, and clinical authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              href="/bams-scholar"
              className="group bg-background p-8 border border-surfaceBorder hover:border-primary/50 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  NCISM &amp; AIAPGET Mastery
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">
                  Complete year-wise BAMS (1st, 2nd &amp; 3rd Prof) syllabus checklists, Shloka memorization tricks, simplified Samhita breakdowns, and previous year question papers.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Open BAMS Scholar Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link 
              href="/interactive-topics"
              className="group bg-background p-8 border border-surfaceBorder hover:border-success/50 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Evidence-Based Clinical Modules
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">
                  Go beyond generic wellness trends. Explore interactive clinical modules that connect classical Dravyaguna and Panchakarma to modern neuro-physiology.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-success">
                Explore Clinical Modules <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link 
              href="/e-books"
              className="group bg-background p-8 border border-surfaceBorder hover:border-warning/50 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-warning" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Unshakeable Clinical Aura
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base mb-6">
                  Master bedside case-taking, viva-voce examination confidence, and scientific communication so you command respect in any medical symposium worldwide.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-warning">
                Open 3D E-Book Library <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================================
          3. TWO-TRACK PORTAL: AYURVEDA GLOBAL & BAMS SCHOLAR VAULT
          ================================================================= */}
      <div className="bg-background py-8 md:py-12 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-10">
          
          {/* BANNER 1: AYURVEDA GLOBAL COMMAND CENTER (5 PILLARS & 3 PHASES) */}
          <div className="relative p-[1px] rounded-sm bg-gradient-to-r from-[#D4AF37]/50 via-emerald-500/30 to-[#D4AF37]/50 shadow-sm hover:shadow-md transition-shadow w-full">
            <div className="bg-surface backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 rounded-sm relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-full bg-[#D4AF37]/5 pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center text-center sm:text-left gap-4 md:gap-5 z-10 w-full md:w-auto">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D4AF37]/15 rounded-full flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                  <Eye className="w-6 h-6 md:w-8 md:h-8 text-amber-800 dark:text-[#D4AF37]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-amber-900 dark:text-[#D4AF37] font-bold mb-1">
                    Track 2 • A.T.R.E.Y.A. International Command Center
                  </div>
                  <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">
                    Ayurveda Global: 5 Clinical Pillars
                  </h2>
                  <p className="text-foreground/80 font-medium max-w-xl text-sm md:text-base">
                    Explore peer-grade research papers, the Clinical X-Ray Decoder, the Prakriti &amp; Agni Diagnostic Lab, Gut-Brain Pharmacology, and our Gateway Course.
                  </p>
                </div>
              </div>
            
              <div className="shrink-0 z-10 w-full md:w-auto flex flex-col items-center md:items-end">
                <Link 
                  href="/atreya"
                  className="w-full md:w-auto bg-primary text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-sm shadow-md hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mb-3"
                >
                  Open Ayurveda Global <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-[10px] md:text-xs font-bold text-foreground/70 flex items-center gap-1.5 text-center md:text-right">
                  <Layers className="w-3.5 h-3.5 md:w-4 md:h-4 text-success" />
                  5 Core Pillars &amp; 8 Branches of Ashtanga Ayurveda
                </p>
              </div>

            </div>
          </div>
          
          {/* BANNER 2: BAMS SCHOLAR & 2ND PROF VAULT */}
          <div className="w-full">
            <div className="bg-gradient-to-r from-amber-950/40 to-background border border-amber-900/30 rounded-sm p-6 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group hover:border-amber-700/50 transition-colors duration-500 w-full">
              
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative z-10 w-full md:w-auto text-center md:text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Leaf className="w-6 h-6 md:w-8 md:h-8 text-amber-800 dark:text-amber-500" />
                </div>
                <div>
                  <div className="inline-flex items-center justify-center md:justify-start gap-1.5 px-2.5 md:px-3 py-1 rounded-sm bg-amber-500/15 text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-amber-950 dark:text-amber-400 mb-2 md:mb-3 border border-amber-600/30">
                    <Sparkles className="w-3 h-3" /> Track 1 • NCISM BAMS Curriculum
                  </div>
                  <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
                    BAMS Scholar &amp; 2nd Prof Vault
                  </h2>
                  <p className="text-foreground/80 font-medium max-w-xl leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
                    Track your 1st, 2nd &amp; 3rd Prof syllabus, decode high-yield Sanskrit Shlokas, and access interactive Charaka Samhita MCQs &amp; university exam papers.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto relative z-10 flex flex-col sm:flex-row md:flex-col gap-3">
                <Link 
                  href="/bams-scholar" 
                  className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-6 md:px-8 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  Open BAMS Scholar Hub <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/bams-hub" 
                  className="w-full md:w-auto bg-amber-500/15 hover:bg-amber-500/25 text-amber-950 dark:text-amber-300 border border-amber-700/40 dark:border-amber-500/40 font-bold py-2.5 px-6 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 text-xs"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" /> Direct to 2nd Prof Command Center
                </Link>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* =================================================================
          4. PROMO BANNER FOR E-BOOKS
          ================================================================= */}
      <div className="bg-background pb-8 md:pb-12 pt-2 md:pt-4 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-sm shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-3xl pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full bg-white/10 text-[10px] md:text-xs font-bold text-white mb-3 md:mb-4 border border-white/20 uppercase tracking-widest">
                <BookOpen className="w-3 h-3 text-warning" /> Veblen Good Publication
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                Command Authority in Every Viva &amp; Symposium
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-0 font-medium max-w-xl leading-relaxed">
                Read our flagship E-Books—<span className="text-white font-bold">The Unspoken Aura</span> &amp; <span className="text-white font-bold">The Invisible Art of Speaking</span>—in our interactive 3D reader. Completely free for a limited time.
              </p>
            </div>

            <div className="shrink-0 z-10 w-full md:w-auto">
              <Link 
                href="/e-books"
                className="w-full md:w-auto bg-primary text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Open 3D Book Vault <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* =================================================================
          5. REELS SECTION
          ================================================================= */}
      <LandingReels />

      {/* =================================================================
          6. COMMUNITY SUPPORT SECTION
          ================================================================= */}
      <div className="bg-background border-t border-surfaceBorder py-12 md:py-20 px-4 md:px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface backdrop-blur-md border border-surfaceBorder rounded-sm shadow-sm p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-xs md:text-sm font-bold text-primary mb-4 md:mb-6 border border-primary/20">
                <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current text-primary" /> Support ATREYA Med
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Help Us Take Authentic Ayurveda to the World
              </h2>
              <p className="text-foreground/70 text-sm md:text-lg mb-5 md:mb-6 leading-relaxed">
                We are on a mission to digitize classical Samhitas, provide free high-yield exam tools for BAMS scholars across India, and establish Ayurveda globally as a respected clinical science.
              </p>
              <p className="text-foreground font-bold text-xs md:text-sm bg-foreground/5 inline-block px-3 md:px-4 py-2 rounded-sm border border-surfaceBorder">
                Scan the UPI QR code to support open-access Ayurvedic education.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center z-10">
              <div className="bg-white p-3 md:p-4 rounded-sm shadow-md border border-gray-200 mb-3 md:mb-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <Image 
                  src="/QR_1780487966.png" 
                  alt="Support ATREYA Med via UPI" 
                  width={160}
                  height={160}
                  className="object-contain w-40 h-40 md:w-48 md:h-48"
                />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-success" /> Secure UPI Contribution
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
