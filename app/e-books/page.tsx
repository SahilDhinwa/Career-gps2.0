"use client";

import { Download, Sparkles, Star, ShieldCheck, Eye, X, BookOpen } from "lucide-react";
import { useState } from "react";

const careerAssets = [
  {
    id: "unspoken-aura",
    title: "The Unspoken Aura",
    coverTitle: "The Unspoken\nAura",
    author: "Sahil Dhinwa", 
    subtitle: "Unlocking Your True Personality Through Communication",
    shortSubtitle: "Unlocking Your True Personality",
    description: "A Guide for the Real World. Master the art of the aura, overcome the 'Invisible Wall', and command respect in every room you enter.",
    price: "FREE",
    originalPrice: "₹999",
    tag: "Flagship Release",
    color: "from-gray-900 to-black", 
    coverBgImage: "/unspoken-aura-bg.jpg", 
    fileUrl: "/The Glass World.pdf" 
  },
  {
    id: "invisible-art",
    title: "The Invisible Art of Speaking",
    coverTitle: "The Invisible Art\nof Speaking",
    author: "Sahil Dhinwa", 
    subtitle: "A Mentor's Guide to Communication for the Ambitious",
    shortSubtitle: "A Mentor's Guide for the Ambitious",
    description: "Claim your space in a world that tries to make you feel small. This survival guide breaks down how to overcome hesitation, hack your learning style, and command respect in any environment.",
    price: "FREE",
    originalPrice: "₹1,299",
    tag: "New Release",
    color: "from-[#022c22] to-black", 
    coverBgImage: "/the_invisible_art.jpg", 
    fileUrl: "/The_Invisible_Art_of_Speaking.pdf" 
  }
];

interface Asset {
  title: string;
  author: string;
  fileUrl: string;
}

export default function EBooksDirectory() {
  const [viewingAsset, setViewingAsset] = useState<Asset | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col transition-colors duration-300">
      
      <style dangerouslySetInnerHTML={{__html: `
        .emerald-vault {
          position: fixed;
          inset: 0;
          overflow: hidden;
          perspective: 1500px;
          z-index: 0;
          pointer-events: none;
        }

        .emerald-panel {
          position: absolute;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(17, 66, 50, 0.02) 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid rgba(16, 185, 129, 0.3);
          border-left: 1px solid rgba(16, 185, 129, 0.3);
          border-bottom: 1px solid rgba(16, 185, 129, 0.1);
          border-right: 1px solid rgba(16, 185, 129, 0.1);
          box-shadow: 
            0 25px 50px -12px rgba(17, 66, 50, 0.15),
            inset 0 0 40px rgba(16, 185, 129, 0.05);
          transform-style: preserve-3d;
        }
        
        .panel-1 {
          width: 18vw; height: 85vh; top: -10%; left: 5%;
          animation: pivot-glass-1 25s ease-in-out infinite alternate;
        }
        .panel-2 {
          width: 25vw; height: 90vh; top: 15%; left: 25%;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.06) 0%, rgba(16, 185, 129, 0.02) 100%);
          border-top: 1px solid rgba(212, 175, 55, 0.3);
          animation: pivot-glass-2 30s ease-in-out infinite alternate-reverse;
        }
        .panel-3 {
          width: 15vw; height: 75vh; top: 5%; left: 55%;
          animation: pivot-glass-3 20s ease-in-out infinite alternate;
        }
        .panel-4 {
          width: 20vw; height: 110vh; top: -5%; right: 5%;
          animation: pivot-glass-4 35s ease-in-out infinite alternate-reverse;
        }
        .panel-5 {
          width: 30vw; height: 60vh; bottom: -10%; left: 40%;
          animation: pivot-glass-5 28s ease-in-out infinite alternate;
        }

        @keyframes pivot-glass-1 {
          0% { transform: rotateY(-35deg) rotateZ(5deg) translateY(0); }
          100% { transform: rotateY(25deg) rotateZ(-2deg) translateY(40px); }
        }
        @keyframes pivot-glass-2 {
          0% { transform: rotateY(20deg) rotateZ(-3deg) translateY(20px); }
          100% { transform: rotateY(-30deg) rotateZ(4deg) translateY(-30px); }
        }
        @keyframes pivot-glass-3 {
          0% { transform: rotateY(-15deg) rotateX(10deg) translateY(-20px); }
          100% { transform: rotateY(40deg) rotateX(-5deg) translateY(20px); }
        }
        @keyframes pivot-glass-4 {
          0% { transform: rotateY(35deg) rotateZ(2deg) translateY(0); }
          100% { transform: rotateY(-20deg) rotateZ(-4deg) translateY(-50px); }
        }
        @keyframes pivot-glass-5 {
          0% { transform: rotateX(45deg) rotateY(-10deg) translateX(0); }
          100% { transform: rotateX(20deg) rotateY(25deg) translateX(-40px); }
        }
      `}} />

      <div className="emerald-vault">
        <div className="emerald-panel panel-1"></div>
        <div className="emerald-panel panel-2"></div>
        <div className="emerald-panel panel-3"></div>
        <div className="emerald-panel panel-4"></div>
        <div className="emerald-panel panel-5"></div>
      </div>

      <div className="relative z-10 flex-grow py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-surfaceBorder text-sm font-bold text-primary mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-warning" /> Free Resources
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 drop-shadow-sm">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Career Assets</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 font-medium max-w-2xl bg-surface/40 backdrop-blur-[2px] rounded-lg p-2">
              Download our exclusive guides and frameworks. Completely free, no login required. Master the soft skills you need to secure your global seat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerAssets.map((asset) => (
              <div key={asset.id} className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group">
                
                {/* Book Cover Area */}
                <div className={`sm:w-2/5 p-6 md:p-8 flex items-center justify-center bg-gradient-to-br ${asset.color} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-warning/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  {/* Fixed max-width so it doesn't blow up on phones */}
                  <div 
                    className="w-2/3 sm:w-full max-w-[220px] aspect-[54/85] rounded-lg shadow-2xl flex flex-col justify-between p-5 transform group-hover:scale-105 transition-transform duration-500 relative z-10 border border-white/10 overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.9))`,
                      backgroundImage: `url(${asset.coverBgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                    
                    <div className="relative z-10 text-center mt-2">
                      <p className="text-[9px] md:text-[10px] font-bold text-warning uppercase tracking-[0.3em] opacity-90">
                        Career GPS Exclusive
                      </p>
                    </div>

                    <div className="relative z-10 text-center mb-4">
                      <h3 className="font-heading font-bold text-white text-xl md:text-2xl leading-tight mb-2 drop-shadow-lg whitespace-pre-line">
                        {asset.coverTitle}
                      </h3>
                      <p className="text-[10px] md:text-xs text-gray-300 font-medium leading-relaxed px-1">
                        {asset.shortSubtitle}
                      </p>
                      <div className="w-8 md:w-12 h-0.5 bg-warning mx-auto mt-4 opacity-80"></div>
                    </div>
                    
                    <div className="relative z-10 text-center mt-auto pt-4">
                      <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-2">
                        A Guide for the Real World
                      </p>
                      <div className="inline-block border-t border-white/20 pt-2">
                        <p className="text-[10px] md:text-xs font-bold text-white tracking-[0.2em] uppercase drop-shadow-md">
                          {asset.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details & Actions */}
                <div className="p-6 md:p-8 sm:w-3/5 flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold bg-warning/10 text-warning px-2 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                      {asset.tag}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-warning fill-current drop-shadow-sm" />)}
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl font-bold text-foreground mb-1">{asset.title}</h2>
                  
                  <p className="text-sm font-medium text-foreground/50 mb-2">
                    By <span className="text-primary font-bold">{asset.author}</span>
                  </p>

                  <p className="text-primary font-medium text-sm mb-4">{asset.subtitle}</p>
                  
                  <p className="text-foreground/70 text-sm mb-8 flex-grow leading-relaxed">
                    {asset.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-end gap-3 mb-4">
                      <span className="text-2xl font-bold text-success drop-shadow-sm">{asset.price}</span>
                      <span className="text-sm font-medium text-foreground/40 line-through mb-1">{asset.originalPrice}</span>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-3">
                      <button 
                        onClick={() => setViewingAsset(asset)}
                        className="flex-1 bg-primary text-white font-bold py-3 px-4 rounded-sm hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 shadow-md"
                      >
                        <Eye className="w-5 h-5" /> Read Online
                      </button>
                      
                      <a 
                        href={asset.fileUrl} 
                        download={`${asset.title.replace(/\s+/g, '_')}_${asset.author.replace(/\s+/g, '_')}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 text-white font-bold py-3 px-4 rounded-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <Download className="w-5 h-5" /> Download PDF
                      </a>
                    </div>
                    
                    <p className="text-center text-xs text-foreground/50 mt-4 font-medium flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-success" /> 100% Free • No Sign-Up Required
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE RESPONSIVE IN-PAGE E-READER MODAL */}
      {viewingAsset && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
          
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-surfaceBorder bg-surface shadow-sm safe-top">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="truncate">
                <h3 className="font-heading font-bold text-foreground leading-tight truncate">Career GPS E-Reader</h3>
                <p className="text-xs text-foreground/50 font-medium truncate">{viewingAsset.title} by {viewingAsset.author}</p>
              </div>
            </div>
            
            <button 
              onClick={() => setViewingAsset(null)}
              className="px-4 py-2 ml-2 shrink-0 bg-surfaceBorder/30 hover:bg-surfaceBorder/50 text-foreground rounded-sm font-bold text-sm transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" /> <span className="hidden sm:inline">Close</span>
            </button>
          </div>

          {/* Absolute Inset-0: The Ultimate iOS Safari Iframe Fix */}
          <div className="relative flex-grow w-full bg-background md:p-6">
            <iframe 
              src={`${viewingAsset.fileUrl}#toolbar=0`} 
              className="absolute inset-0 w-full h-full md:rounded-sm md:shadow-2xl md:border border-surfaceBorder bg-white"
              title={`Reading ${viewingAsset.title}`}
            />
          </div>
        </div>
      )}

    </div>
  );
}
