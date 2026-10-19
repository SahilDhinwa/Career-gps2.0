"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Cloud, Heart, Star, Sparkles, Send, Check } from "lucide-react";

export default function ClaymorphismPage() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans pb-32">
      
      {/* 
        CLAYMORPHISM CSS ENGINE
        We use embedded CSS here because complex double-inset box-shadows 
        are much easier to read and tweak this way than with messy Tailwind arbitrary values.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .clay-base {
          border-radius: 36px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        /* White/Light Gray Clay Panel */
        .clay-panel {
          background: #f8fafc;
          box-shadow: 
            20px 20px 40px rgba(0, 0, 0, 0.05),
            inset -12px -12px 24px rgba(0, 0, 0, 0.06),
            inset 12px 12px 24px rgba(255, 255, 255, 1);
        }

        /* Vibrant Pastel Blue Clay Card */
        .clay-card-blue {
          background: #93c5fd; /* Tailwind blue-300 */
          box-shadow: 
            15px 15px 30px rgba(147, 197, 253, 0.4),
            inset -10px -10px 20px rgba(0, 0, 0, 0.1),
            inset 10px 10px 20px rgba(255, 255, 255, 0.7);
        }

        /* Vibrant Pastel Pink Clay Card */
        .clay-card-pink {
          background: #f9a8d4; /* Tailwind pink-300 */
          box-shadow: 
            15px 15px 30px rgba(249, 168, 212, 0.4),
            inset -10px -10px 20px rgba(0, 0, 0, 0.1),
            inset 10px 10px 20px rgba(255, 255, 255, 0.7);
        }

        /* Vibrant Pastel Yellow Clay Card */
        .clay-card-yellow {
          background: #fde047; /* Tailwind yellow-300 */
          box-shadow: 
            15px 15px 30px rgba(253, 224, 71, 0.4),
            inset -10px -10px 20px rgba(0, 0, 0, 0.1),
            inset 10px 10px 20px rgba(255, 255, 255, 0.8);
        }

        /* Clay Buttons */
        .clay-btn {
          border-radius: 20px;
          background: #818cf8; /* Tailwind indigo-400 */
          box-shadow: 
            8px 8px 16px rgba(129, 140, 248, 0.3),
            inset -6px -6px 12px rgba(0, 0, 0, 0.15),
            inset 6px 6px 12px rgba(255, 255, 255, 0.5);
        }
        .clay-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 
            12px 12px 20px rgba(129, 140, 248, 0.4),
            inset -6px -6px 12px rgba(0, 0, 0, 0.15),
            inset 6px 6px 12px rgba(255, 255, 255, 0.6);
        }
        .clay-btn:active {
          transform: translateY(2px) scale(0.98);
          box-shadow: 
            4px 4px 8px rgba(129, 140, 248, 0.3),
            inset -8px -8px 16px rgba(0, 0, 0, 0.1),
            inset 8px 8px 16px rgba(255, 255, 255, 0.3);
        }

        /* Floating Animation for fun 3D effect */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}} />

      {/* Navigation */}
      <div className="p-6 md:p-8 max-w-6xl mx-auto">
        <Link 
          href="/experimental" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-500 transition-colors font-bold text-sm bg-white/50 px-4 py-2 rounded-2xl shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-500 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
            <Cloud className="w-4 h-4" /> 3D UI Laboratory
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-800 tracking-tight">
            Claymorphism
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Soft, inflated, and tactile. By combining outer drop-shadows with double inner-shadows (one light, one dark), elements look like 3D physical objects made of matte clay.
          </p>
        </div>

        {/* Main Showcase Panel */}
        <div className="clay-base clay-panel p-8 md:p-16 relative overflow-hidden mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* Clay Card 1 */}
            <div className="clay-base clay-card-blue p-8 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Heart className="w-8 h-8 text-white fill-white/50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Friendly UI</h3>
              <p className="text-blue-900/60 font-medium text-sm leading-relaxed">
                Notice the soft highlight on the top-left edge, and the dark inset shadow on the bottom-right.
              </p>
            </div>

            {/* Clay Card 2 */}
            <div className="clay-base clay-card-pink p-8 flex flex-col items-center text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Star className="w-8 h-8 text-white fill-white/50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pastel Colors</h3>
              <p className="text-pink-900/60 font-medium text-sm leading-relaxed">
                Claymorphism relies heavily on bright pastel colors to make the 3D lighting effect look natural.
              </p>
            </div>

            {/* Clay Card 3 */}
            <div className="clay-base clay-card-yellow p-8 flex flex-col items-center text-center animate-float lg:translate-y-8" style={{ animationDelay: '2s' }}>
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Sparkles className="w-8 h-8 text-yellow-700" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-900 mb-3">Tactile Depth</h3>
              <p className="text-yellow-800/60 font-medium text-sm leading-relaxed">
                It creates a psychological urge to "squish" or tap the buttons because they look like real objects.
              </p>
            </div>

          </div>
        </div>

        {/* Interactive Components Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Button Sandbox */}
          <div className="clay-base clay-panel p-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-8 text-slate-700">Interactive Buttons</h3>
            
            <button className="clay-base clay-btn text-white font-bold text-lg px-10 py-5 flex items-center gap-3 transition-all">
              <Send className="w-5 h-5" /> Push Me
            </button>
            <p className="text-slate-400 text-sm mt-6 font-medium">Click to feel the squish physics</p>
          </div>

          {/* Toggle Sandbox */}
          <div className="clay-base clay-panel p-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-8 text-slate-700">Clay Toggles</h3>
            
            <button 
              onClick={() => setIsToggled(!isToggled)}
              className={`w-32 h-16 rounded-full p-2 transition-all duration-500 relative shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(0,0,0,0.05)] ${isToggled ? 'bg-green-400' : 'bg-slate-200'}`}
            >
              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-500 shadow-[4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,1)] ${isToggled ? 'translate-x-16' : 'translate-x-0'}`}>
                {isToggled ? <Check className="w-6 h-6 text-green-500" /> : <div className="w-4 h-4 rounded-full bg-slate-300"></div>}
              </div>
            </button>
            <p className="text-slate-400 text-sm mt-6 font-medium">Interactive 3D Switch</p>
          </div>

        </div>

      </div>
    </div>
  );
}
