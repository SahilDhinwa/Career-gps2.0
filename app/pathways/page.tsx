"use client";

import { Compass, CheckCircle2, Lock, ChevronRight, Milestone, Target, Clock } from "lucide-react";
import { useState } from "react";

// MOCK DATA: The different roadmaps available on the platform
const roadmapData = [
  {
    id: "mext-2026",
    title: "MEXT Scholarship 2026",
    country: "Japan",
    duration: "6 Months",
    status: "active",
    progress: 35,
    totalSteps: 12,
    completedSteps: 4,
    description: "The complete engineering of your Japanese embassy recommendation. Covering research proposals, LOR structuring, and interview hacking."
  },
  {
    id: "daad-masters",
    title: "DAAD Global Masters",
    country: "Germany",
    duration: "4 Months",
    status: "locked",
    progress: 0,
    totalSteps: 8,
    completedSteps: 0,
    description: "Your master plan for securing fully-funded education in Germany. Includes the exact motivation letter blueprints."
  },
  {
    id: "chevening-uk",
    title: "Chevening Leadership",
    country: "United Kingdom",
    duration: "5 Months",
    status: "locked",
    progress: 0,
    totalSteps: 10,
    completedSteps: 0,
    description: "The leadership networking framework required to win the UK's most prestigious and highly competitive global award."
  }
];

export default function PathwaysPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FBFBF9] relative overflow-hidden flex flex-col">
      
      {/* INLINE STYLES FOR THE ARCHITECTURAL BLUEPRINT */}
      <style dangerouslySetInnerHTML={{__html: `
        .blueprint-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* The Millimeter Grid */
        .blueprint-grid {
          position: absolute;
          inset: 0;
          /* Uses CSS gradients to draw the exact major and minor grid lines */
          background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          background-image:
            linear-gradient(rgba(17, 66, 50, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 66, 50, 0.06) 1px, transparent 1px),
            linear-gradient(rgba(17, 66, 50, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 66, 50, 0.02) 1px, transparent 1px);
        }

        /* The Radar/Scanner Beam */
        .scanner-beam {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          /* A soft gradient that represents the light beam */
          background: linear-gradient(
            to bottom, 
            transparent 0%, 
            rgba(16, 185, 129, 0.02) 40%, 
            rgba(212, 175, 55, 0.06) 50%, 
            transparent 60%
          );
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }
      `}} />

      {/* Layer 1: Blueprint Background */}
      <div className="blueprint-container">
        <div className="blueprint-grid"></div>
        <div className="scanner-beam"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex-grow py-16 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 text-xs font-bold text-primary mb-4 border border-primary/20 tracking-widest uppercase">
              <Target className="w-3.5 h-3.5" /> Strategy Overview
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 drop-shadow-sm">
              The Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Plan</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium max-w-2xl bg-white/60 backdrop-blur-md py-2 px-4 rounded-sm border border-white">
              Select your destination. Follow the exact, step-by-step engineering required to secure your fully-funded global seat.
            </p>
          </div>

          {/* Pathways Grid */}
          <div className="space-y-6">
            {roadmapData.map((roadmap) => (
              <div 
                key={roadmap.id}
                onMouseEnter={() => setHoveredCard(roadmap.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  bg-white/90 backdrop-blur-sm border rounded-sm p-6 md:p-8 transition-all duration-300 shadow-sm
                  ${roadmap.status === 'locked' ? 'border-gray-200 opacity-90' : 'border-surfaceBorder hover:shadow-lg hover:border-primary/30'}
                `}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                  
                  {/* Left Side: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {roadmap.status === 'locked' ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-1 rounded-sm">
                          <Lock className="w-3 h-3" /> Premium Locked
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-success/10 text-success px-2 py-1 rounded-sm border border-success/20">
                          <Compass className="w-3 h-3" /> Active Journey
                        </span>
                      )}
                      <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {roadmap.duration} Timeline
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {roadmap.title}
                    </h2>
                    <p className="text-sm text-gray-600 font-medium max-w-xl mb-6">
                      {roadmap.description}
                    </p>

                    {/* Progress Bar (Only visible if active) */}
                    {roadmap.status === 'active' && (
                      <div className="max-w-md">
                        <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                          <span>Blueprint Progress</span>
                          <span className="text-primary">{roadmap.completedSteps} / {roadmap.totalSteps} Modules</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-200">
                          <div 
                            className="bg-gradient-to-r from-primary to-success h-full transition-all duration-1000 ease-out" 
                            style={{ width: `${roadmap.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side: Call to Action */}
                  <div className="shrink-0 flex items-center justify-end md:border-l md:border-gray-100 md:pl-8">
                    {roadmap.status === 'active' ? (
                      <button className="w-full md:w-auto bg-primary text-white font-bold py-3 px-6 rounded-sm hover:bg-primaryHover transition-all flex items-center justify-center gap-2 shadow-md">
                        Resume Blueprint <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="w-full md:w-auto bg-white text-gray-700 border border-gray-200 font-bold py-3 px-6 rounded-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                        <Lock className="w-4 h-4 text-gray-400" /> Unlock Blueprint
                      </button>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-black p-8 rounded-sm shadow-xl border border-gray-800 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-warning to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Milestone className="w-8 h-8 text-warning mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-white mb-2">Need a custom strategy?</h3>
            <p className="text-sm text-gray-400 font-medium mb-6">
              Unlock the Premium Tier to get direct feedback on your documents and access all roadmap blueprints.
            </p>
            <button className="bg-warning text-black font-bold py-3 px-8 rounded-sm hover:bg-yellow-400 transition-colors shadow-lg">
              Upgrade to Premium
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
