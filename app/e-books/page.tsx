import Link from "next/link";
import { BookOpen, Download, Sparkles, Star, ShieldCheck, ChevronRight } from "lucide-react";

// 1. THE DIGITAL ASSET DICTIONARY
// You can easily add your new books here when they are ready.
const careerAssets = [
  {
    id: "global-communicator",
    title: "The Global Communicator",
    subtitle: "Speak with the confidence of an IT leader, even from a tier-3 city.",
    description: "Our flagship guide to mastering interviews, networking with foreign professors, and writing SOPs that admission committees cannot ignore.",
    price: "FREE",
    originalPrice: "₹499",
    tag: "Most Popular",
    color: "from-blue-600 to-indigo-700",
    coverPlaceholder: "bg-blue-50 text-blue-600",
    // fileUrl: "/books/global-communicator.pdf" // You will link your PDF here later
  }
];

export default function EBooksDirectory() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
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
              
              {/* Left Side: 3D Book Cover Area */}
              <div className={`sm:w-2/5 p-8 flex items-center justify-center bg-gradient-to-br ${asset.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                {/* Book Mockup Skeleton (Will be replaced by your image) */}
                <div className="w-3/4 aspect-[3/4] bg-white rounded-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transform group-hover:scale-105 transition-transform duration-500 relative z-10 border-l-8 border-gray-300">
                  <BookOpen className="w-10 h-10 text-gray-300 mb-3" />
                  <p className="font-heading font-bold text-gray-800 text-sm leading-tight">{asset.title}</p>
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

                  {/* Free Checkout Button */}
                  <button className="w-full bg-gray-900 text-white font-bold py-4 px-4 rounded-sm hover:bg-primary transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                    <Download className="w-4 h-4" /> Download Now
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3 font-medium flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-success" /> Instant direct download
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
