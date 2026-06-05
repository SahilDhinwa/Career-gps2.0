"use client";

import { Search, BookOpen, Download, Star, ChevronRight, Filter } from "lucide-react";
import { useState } from "react";

export default function EbooksLibrary() {
  const [searchQuery, setSearchQuery] = useState("");

  // We generate a 12x12 grid (144 tiles) to ensure the background is completely filled
  const gridTiles = Array.from({ length: 144 });

  return (
    <div className="min-h-screen bg-[#FBFBF9] relative overflow-hidden flex flex-col">
      
      {/* INLINE STYLES FOR FLOATING GLASS ISOMETRIC GRID */}
      <style dangerouslySetInnerHTML={{__html: `
        .glass-environment {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          z-index: 0;
          pointer-events: none;
        }

        .isometric-plane {
          display: grid;
          grid-template-columns: repeat(12, 100px);
          grid-template-rows: repeat(12, 100px);
          gap: 16px;
          transform-style: preserve-3d;
          /* Tilts the flat grid down into 3D space and spins it diagonally */
          transform: rotateX(60deg) rotateZ(-45deg) translateZ(-50px);
        }

        .glass-tile {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          /* Frosted glass gradient */
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.4) 100%);
          /* The lighting: Bright top/left edges, subtle bottom/right */
          border-top: 1.5px solid rgba(255, 255, 255, 1);
          border-left: 1.5px solid rgba(255, 255, 255, 1);
          border-bottom: 1px solid rgba(17, 66, 50, 0.05);
          border-right: 1px solid rgba(17, 66, 50, 0.05);
          /* The thickness shadow */
          box-shadow: 
            -8px 8px 15px rgba(0, 0, 0, 0.03),
            -15px 15px 30px rgba(17, 66, 50, 0.08);
          animation: glass-wave 5s ease-in-out infinite;
        }

        .gold-glass {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%);
          border-top: 1.5px solid rgba(212, 175, 55, 0.4);
          border-left: 1.5px solid rgba(212, 175, 55, 0.4);
          box-shadow: 
            -8px 8px 15px rgba(212, 175, 55, 0.05),
            -15px 15px 30px rgba(212, 175, 55, 0.1);
        }

        @keyframes glass-wave {
          0%, 100% { transform: translateZ(0px); }
          50% { transform: translateZ(50px); } /* Lifts the tile 50px towards the user */
        }
      `}} />

      {/* Layer 1: The 3D Glass Environment */}
      <div className="glass-environment">
        <div className="isometric-plane">
          {gridTiles.map((_, i) => {
            // Math to calculate row and column
            const row = Math.floor(i / 12);
            const col = i % 12;
            
            // MATH MAGIC: By adding row + col, tiles in the same diagonal line get the exact same delay.
            // This creates a perfect rolling wave instead of random bouncing.
            const delay = (row + col) * 0.15; 
            
            // Sprinkle in some Royal Gold glass tiles for brand identity
            const isGold = (row * col) % 17 === 0;

            return (
              <div 
                key={i} 
                className={`glass-tile ${isGold ? 'gold-glass' : ''}`} 
                style={{ animationDelay: `${delay}s` }}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-surfaceBorder text-sm font-bold text-primary mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-warning" />
              Career GPS Premium Assets
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 drop-shadow-sm">
              The Action Vault <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Library</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium bg-white/60 backdrop-blur-md py-3 px-6 rounded-lg shadow-sm border border-white">
              Download high-converting templates, insider SOP guides, and the exact frameworks used to secure fully-funded global scholarships.
            </p>
          </div>

          {/* SEARCH & FILTER BAR */}
          <div className="bg-white/90 backdrop-blur-md border border-surfaceBorder p-4 rounded-sm shadow-lg flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for SOPs, LORs, or University Guides..." 
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-sm py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium transition-shadow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-sm transition-colors flex items-center justify-center gap-2 border border-gray-200 shrink-0">
              <Filter className="w-4 h-4" /> Filter Categories
            </button>
          </div>

          {/* E-BOOK GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Asset Card 1 - Featured */}
            <div className="bg-white/95 backdrop-blur-sm border border-warning/30 rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group relative">
              <div className="absolute top-0 right-0 bg-warning text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-sm z-10">
                New Release
              </div>
              <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-primary/10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                <h3 className="font-heading text-2xl font-bold text-white text-center relative z-10 leading-tight">
                  The Unspoken<br/><span className="text-warning">Aura</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-warning mb-3">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">The Unspoken Aura</h4>
                <p className="text-gray-600 text-sm mb-6 font-medium line-clamp-2">
                  Master the art of communication and learn to speak with the confidence of an IT leader. Authored by Sahil Dhinwa.
                </p>
                <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-sm hover:bg-primaryHover transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>

            {/* Asset Card 2 */}
            <div className="bg-white/95 backdrop-blur-sm border border-surfaceBorder rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-br from-primary to-[#0d3326] relative flex items-center justify-center p-6">
                 <h3 className="font-heading text-xl font-bold text-white text-center relative z-10 leading-tight">
                  Winning SOPs<br/>For MEXT 2026
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-gray-400 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-sm">Template</span>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">MEXT SOP Framework</h4>
                <p className="text-gray-600 text-sm mb-6 font-medium line-clamp-2">
                  A step-by-step breakdown of 5 successful Statement of Purpose essays submitted to Japanese Universities.
                </p>
                <button className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download DOCX
                </button>
              </div>
            </div>

            {/* Asset Card 3 */}
            <div className="bg-white/95 backdrop-blur-sm border border-surfaceBorder rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center p-6 border-b border-gray-200">
                 <h3 className="font-heading text-xl font-bold text-gray-800 text-center relative z-10 leading-tight">
                  DAAD Interview<br/>Cheat Sheet
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-gray-400 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-sm">Cheat Sheet</span>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">DAAD Interview Guide</h4>
                <p className="text-gray-600 text-sm mb-6 font-medium line-clamp-2">
                  The top 25 questions asked by the German embassy committee and exactly how to structure your answers.
                </p>
                <button className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
      }
