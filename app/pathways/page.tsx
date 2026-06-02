import Link from "next/link";
import { Building2, Briefcase, Rocket, Globe, Lock, ArrowRight } from "lucide-react";

export default function PathwaysSelection() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-20">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-16 relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Destination</span>
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          India&apos;s first structured career guidance platform. Choose your path below and follow the exact roadmap to success.
        </p>
      </div>

      {/* The 4-Grid Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
        
        {/* Government Jobs - Locked */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-8 flex flex-col items-center justify-center text-center opacity-60 cursor-not-allowed relative overflow-hidden transition-all hover:border-gray-300">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
            <Building2 className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-700 mb-2">Government Jobs</h2>
          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-sm">
            <Lock className="w-4 h-4" /> Coming Soon
          </div>
        </div>

        {/* Private Jobs - Locked */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-8 flex flex-col items-center justify-center text-center opacity-60 cursor-not-allowed relative overflow-hidden transition-all hover:border-gray-300">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
            <Briefcase className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-700 mb-2">Private Jobs</h2>
          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-sm">
            <Lock className="w-4 h-4" /> Coming Soon
          </div>
        </div>

        {/* Self Employed / Startup - Locked */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-8 flex flex-col items-center justify-center text-center opacity-60 cursor-not-allowed relative overflow-hidden transition-all hover:border-gray-300">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
            <Rocket className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-700 mb-2">Self Employed / Startup</h2>
          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-sm">
            <Lock className="w-4 h-4" /> Coming Soon
          </div>
        </div>

        {/* Study Abroad - Active */}
        <Link 
          href="/study-abroad" 
          className="group bg-surface border-2 border-primary rounded-sm p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden"
        >
          {/* Subtle hover glow in the background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-125"></div>
          
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Globe className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Study Abroad</h2>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            Active Pathway <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

      </div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-success/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}

