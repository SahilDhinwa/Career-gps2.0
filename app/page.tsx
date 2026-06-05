import Matchmaker from "../components/Matchmaker";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Heart, BookOpen, FolderOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col">
      
      {/* INLINE STYLES FOR 3D PERSPECTIVE NAVIGATOR BACKGROUND */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-container {
          position: absolute;
          inset: 0;
          perspective: 1000px;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        
        /* The Moving 3D Grid Floor */
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
          /* This mask seamlessly fades the grid out before it hits the text */
          mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40%, black 100%);
        }
        
        @keyframes pan-grid {
          0% { transform: rotateX(75deg) translateY(0); }
          100% { transform: rotateX(75deg) translateY(60px); }
        }

        /* The Slow-Pulsing Golden Destination Glow */
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
      <div className="relative flex-grow flex items-center justify-center px-6 py-20 lg:py-32 overflow-hidden bg-background">
        
        {/* Layer 1: The Premium 3D Background */}
        <div className="perspective-container">
          <div className="glowing-core"></div>
          <div className="perspective-grid"></div>
        </div>

        {/* Foreground Content (Safe from color bleed) */}
        <div className="max-w-5xl mx-auto text-center relative z-10 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-surfaceBorder text-sm font-bold text-primary mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
            2026 Scholarship Pathways Now Live
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-6 leading-tight drop-shadow-sm">
            Your Ultimate Roadmap to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">
              Global Education.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed bg-white/40 backdrop-blur-[2px] rounded-lg p-2">
            Stop guessing. Get step-by-step guidance, track your application progress, and unlock fully-funded scholarships like MEXT, DAAD, and Chevening.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/pathways" 
              className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Matchmaker />
          </div>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="bg-surface border-t border-surfaceBorder py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Why Top Students Choose Career GPS</h2>
            <p className="text-gray-500">Everything you need to secure your seat at a global university.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">100% Fully Funded</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover scholarships that cover your entire tuition, flights, and monthly living expenses. Zero student loans required.
              </p>
            </div>

            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Stage-by-Stage Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a deadline. Our interactive roadmap breaks down complex applications into manageable daily tasks.
              </p>
            </div>

            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Verified Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                No more generic advice. Access premium, insider checklists designed by experts who have navigated the system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- ACTION VAULT TOOLKIT EXTENSION --- */}
      <div className="bg-background py-10 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-[1px] rounded-sm bg-gradient-to-r from-warning/40 via-warning/10 to-warning/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-surface p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-full bg-warning/5 pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center text-center sm:text-left gap-5 z-10 w-full md:w-auto">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center shrink-0 border border-warning/20">
                  <FolderOpen className="w-8 h-8 text-warning" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Stop Drafting from Scratch.
                  </h2>
                  <p className="text-gray-600 font-medium max-w-lg">
                    Bypass blank-page anxiety with our Action Vault. Access copy-paste document templates proven to win international scholarships.
                  </p>
                </div>
              </div>

              <div className="shrink-0 z-10 w-full md:w-auto flex flex-col items-center md:items-end">
                <Link 
                  href="/dashboard/vault"
                  className="w-full md:w-auto bg-primary text-white font-bold px-8 py-4 rounded-sm shadow-md hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mb-3"
                >
                  Open Action Vault <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  Includes templates for DAAD, Chevening & Commonwealth
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* PROMO BANNER FOR E-BOOKS */}
      <div className="bg-background pb-10 pt-4 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-sm shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-3xl pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white mb-4 border border-white/20 uppercase tracking-widest">
                <BookOpen className="w-3 h-3 text-warning" /> New Release
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                Master the Art of Communication
              </h2>
              <p className="text-gray-300 text-lg mb-0 font-medium max-w-xl">
                Grab our flagship E-Book: <span className="text-white font-bold">The Global Communicator</span>. Learn to speak with the confidence of an IT leader. Completely free for a limited time.
              </p>
            </div>

            <div className="shrink-0 z-10 w-full md:w-auto">
              <Link 
                href="/e-books"
                className="w-full md:w-auto bg-primary text-white font-bold px-8 py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Claim Free Asset <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* COMMUNITY SUPPORT / DONATION SECTION */}
      <div className="bg-background border-t border-surfaceBorder py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface border border-surfaceBorder rounded-sm shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-bold text-primary mb-6 border border-primary/20">
                <Heart className="w-4 h-4 fill-current text-primary" /> Support Our Community
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Help Us Empower More Students
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are on a mission to democratize global education. Your support helps us maintain our free tools, expand our scholarship database, and guide thousands of students from tier-2 and tier-3 cities toward fully-funded opportunities.
              </p>
              <p className="text-gray-800 font-bold bg-gray-50 inline-block px-4 py-2 rounded-sm border border-gray-200">
                Scan the UPI QR code to contribute. Every rupee builds a bridge to someone&apos;s future.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center z-10">
              <div className="bg-white p-4 rounded-sm shadow-md border border-gray-200 mb-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <Image 
                  src="/QR_1780487966.png" 
                  alt="Support Career GPS via UPI" 
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-success" /> Secure UPI Payment
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
