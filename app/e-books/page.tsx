"use client";

import Link from "next/link";
import { Download, Sparkles, Star, ShieldCheck, Eye, X, BookOpen } from "lucide-react";
import { useState } from "react";

// 1. THE DIGITAL ASSET DICTIONARY
const careerAssets = [
  {
    id: "unspoken-aura",
    title: "The Unspoken Aura",
    subtitle: "Unlocking Your True Personality Through Communication",
    description: "A Guide for the Real World. Master the art of the aura, overcome the 'Invisible Wall', and command respect in every room you enter.",
    price: "FREE",
    originalPrice: "₹999",
    tag: "Flagship Release",
    color: "from-gray-900 to-black", 
    coverBgImage: "/unspoken-aura-bg.jpg", 
    fileUrl: "/The Glass World.pdf" 
  }
];

export default function EBooksDirectory() {
  // 2. STATE TO CONTROL THE IN-PAGE E-READER
  const [viewingPdf, setViewingPdf] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-bold text-primary mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" /> Free Resources
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Career Assets</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl">
            Download our exclusive guides and frameworks. Completely free, no login required. Master the soft skills you need to secure your global seat.
          </p>
        </div>

        {/* E-Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careerAssets.map((asset) => (
            <div key={asset.id} className="bg-surface border border-surfaceBorder rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group">
              
              {/* Left Side: 3D Royal Credit Card Book Cover Area */}
              <div className={`sm:w-2/5 p-8 flex items-center justify-center bg-gradient-to-br ${asset.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-warning/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                {/* The Credit Card Ratio Cover */}
                <div 
                  className="w-3/4 aspect-[54/85] rounded-lg shadow-2xl flex flex-col justify-between p-6 transform group-hover:scale-105 transition-transform duration-500 relative z-10 border border-white/10 overflow-hidden"
                  style={{
                    background: `linear-gradient(to bottom right, #0f172a, #020617)`,
                    backgroundImage: `url(${asset.coverBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                  
                  <div className="relative z-10 text-center mt-2">
                    <p className="text-[10px] font-bold text-warning uppercase tracking-[0.3em] opacity-90">
                      Career GPS Exclusive
                    </p>
                  </div>

                  <div className="relative z-10 text-center mb-4">
                    <h3 className="font-heading font-bold text-white text-2xl md:text-3xl leading-tight mb-2 drop-shadow-lg">
                      The Unspoken<br/>Aura
                    </h3>
                    <p className="text-xs text-gray-300 font-medium leading-relaxed px-2">
                      Unlocking Your True Personality
                    </p>
                    <div className="w-12 h-0.5 bg-warning mx-auto mt-4 opacity-80"></div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                      A Guide for the Real World
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Copy & Checkout */}
              <div className="p-8 sm:w-3/5 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold bg-warning/10 text-warning px-2 py-1 rounded-sm uppercase tracking-wider">
                    {asset.tag}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-warning fill-current" />)}
                  </div>
                </div>

                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">{asset.title}</h2>
                <p className="text-primary font-medium text-sm mb-4">{asset.subtitle}</p>
                
                <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                  {asset.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-2xl font-bold text-success">{asset.price}</span>
                    <span className="text-sm font-medium text-gray-400 line-through mb-1">{asset.originalPrice}</span>
                  </div>

                  {/* 3. DUAL-ACTION BUTTONS (Read Online vs Download) */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => setViewingPdf(asset.fileUrl)}
                      className="flex-1 bg-primary text-white font-bold py-3 px-4 rounded-sm hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Eye className="w-5 h-5" /> Read Online
                    </button>
                    
                    <a 
                      href={asset.fileUrl} 
                      download="The_Unspoken_Aura_CareerGPS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white font-bold py-3 px-4 rounded-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Download className="w-5 h-5" /> Download PDF
                    </a>
                  </div>
                  
                  <p className="text-center text-xs text-gray-500 mt-4 font-medium flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-success" /> 100% Free • No Sign-Up Required
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. THE IN-PAGE FULLSCREEN E-READER MODAL */}
      {viewingPdf && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
          
          {/* Reader Top Navbar */}
          <div className="flex justify-between items-center p-4 border-b border-surfaceBorder bg-surface shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground leading-tight">Career GPS E-Reader</h3>
                <p className="text-xs text-gray-500 font-medium">The Unspoken Aura</p>
              </div>
            </div>
            
            <button 
              onClick={() => setViewingPdf(null)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-sm font-bold text-sm transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Close Reader
            </button>
          </div>

          {/* PDF Iframe Viewer */}
          <div className="flex-grow w-full h-full p-0 sm:p-6 bg-gray-100/50">
            {/* Adding #toolbar=0 hides the browser's default PDF menu to make it look like a native app */}
            <iframe 
              src={`${viewingPdf}#toolbar=0`} 
              className="w-full h-full sm:rounded-sm shadow-2xl border border-surfaceBorder bg-white"
              title="Career GPS E-Reader"
            />
          </div>
        </div>
      )}

    </div>
  );
}
