import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, TrendingUp, GraduationCap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col">
      
      {/* HERO SECTION */}
      <div className="relative flex-grow flex items-center justify-center px-6 py-20 lg:py-32">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-success/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surfaceBorder text-sm font-bold text-primary mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-success"></span>
            2026 Scholarship Pathways Now Live
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-6 leading-tight">
            Your Ultimate Roadmap to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">
              Global Education.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Stop guessing. Get step-by-step guidance, track your application progress, and unlock fully-funded scholarships like MEXT, DAAD, and Chevening.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/study-abroad" 
              className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/login" 
              className="w-full sm:w-auto bg-white text-gray-800 border-2 border-gray-200 font-bold px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-all flex items-center justify-center"
            >
              Member Login
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="bg-surface border-t border-surfaceBorder py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Why Top Students Choose Career GPS</h2>
            <p className="text-gray-500">Everything you need to secure your seat at a global university.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">100% Fully Funded</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover scholarships that cover your entire tuition, flights, and monthly living expenses. Zero student loans required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 border border-surfaceBorder rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Stage-by-Stage Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a deadline. Our interactive roadmap breaks down complex applications into manageable daily tasks.
              </p>
            </div>

            {/* Feature 3 */}
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

    </div>
  );
}
