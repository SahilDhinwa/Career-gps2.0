import Link from "next/link";
import { Download, CheckCircle, Star, ShieldCheck, ArrowRight } from "lucide-react";

export default function EbookLandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT SIDE: The Visual & Social Proof (Dark Mode Aesthetic) */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 via-black to-gray-900 p-10 md:p-20 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-success/5 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-md mx-auto w-full">
          {/* 3D Book Cover Rendering */}
          <div className="relative group mx-auto w-3/4 sm:w-2/3 aspect-[54/85] mb-12">
            <div className="absolute inset-0 bg-success/20 blur-2xl rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
            <div 
              className="relative w-full h-full rounded-lg shadow-2xl flex flex-col justify-between p-6 border border-white/10 overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                background: `linear-gradient(to bottom right, #0f172a, #020617)`,
                backgroundImage: `url(/unspoken-aura-bg.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              
              <div className="relative z-10 text-center mt-2">
                <p className="text-[10px] font-bold text-warning uppercase tracking-[0.3em] opacity-90">Career GPS Exclusive</p>
              </div>

              <div className="relative z-10 text-center mb-4">
                <h3 className="font-heading font-bold text-white text-3xl leading-tight mb-2 drop-shadow-lg">
                  The Unspoken<br/>Aura
                </h3>
                <div className="w-12 h-0.5 bg-warning mx-auto mt-4 opacity-80"></div>
              </div>
              
              <div className="relative z-10 text-center mt-auto pt-4">
                <div className="inline-block border-t border-white/20 pt-2">
                  <p className="text-xs font-bold text-white tracking-[0.2em] uppercase drop-shadow-md">Sahil Dhinwa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-warning fill-current" />)}
            </div>
            <p className="text-gray-300 font-medium italic">"This completely changed how I approach my university interviews. The invisible wall is gone."</p>
            <p className="text-gray-500 text-sm mt-2 font-bold">— Verified Student</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: The Pitch & Conversion (Light Mode) */}
      <div className="w-full md:w-1/2 bg-white p-10 md:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-xs font-bold text-success mb-6 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> 100% Free Download
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Command respect in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">every room</span> you enter.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
            Stop shrinking your personality to fit into the background. Download the definitive guide to mastering the art of the aura and unlocking your true communication potential.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary shrink-0" />
              <p className="text-gray-700 font-medium">Learn the 4 distinct pathways to mastering confidence.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary shrink-0" />
              <p className="text-gray-700 font-medium">Break the myth that "Fluent English = Good Communication."</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary shrink-0" />
              <p className="text-gray-700 font-medium">Master the exact framework to dominate Group Discussions.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href="/The Glass World.pdf" 
              download="The_Unspoken_Aura_Sahil_Dhinwa.pdf"
              className="w-full bg-primary text-white font-bold text-lg py-5 px-6 rounded-sm hover:bg-primaryHover transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-center"
            >
              <Download className="w-6 h-6" /> Download Free PDF Now
            </a>
            
            <Link 
              href="/scholarships"
              className="w-full bg-gray-50 border border-gray-200 text-gray-600 font-bold py-4 px-6 rounded-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-center"
            >
              Explore Premium Roadmaps <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6 font-medium">
            Join thousands of students upgrading their careers. No credit card required.
          </p>
        </div>
      </div>

    </div>
  );
}
