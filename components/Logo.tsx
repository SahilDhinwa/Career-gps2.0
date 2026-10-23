import Link from "next/link";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-3.5 group cursor-pointer outline-none">
      
      {/* The Clinical Monogram Emblem */}
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#06140E] via-[#091C13] to-[#020705] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-[#D4AF37]/40 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] ${className}`}>
        
        {/* Inner ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full p-1.5 drop-shadow-md relative z-10">
          
          {/* Outer Octagon Frame (Precision Clinical Engineering) */}
          <polygon 
            points="32,8 68,8 92,32 92,68 68,92 32,92 8,68 8,32" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="3.5" 
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Inner Geometric Accent Ring */}
          <circle cx="50" cy="50" r="32" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

          {/* The Staff of Asclepius & Intertwined Herbal Leaf Core */}
          {/* Central Rod / Staff */}
          <line x1="50" y1="22" x2="50" y2="78" stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" />
          
          {/* Staff Top Finial (Clinical Orb) */}
          <circle cx="50" cy="20" r="4.5" fill="#D4AF37" />

          {/* Asclepius Serpent / Herbal Leaf Flourish (Left & Right Curves) */}
          <path 
            d="M 50 34 C 38 34, 32 46, 42 56 C 50 64, 50 72, 50 78" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
          <path 
            d="M 50 46 C 62 46, 68 58, 58 66 C 52 71, 50 75, 50 78" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />

          {/* Central Bindu / Core Energy Dot */}
          <circle cx="50" cy="50" r="2.5" fill="#F3F4F6" />
        </svg>
      </div>
      
      {/* Brand Typography & Hierarchy */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-black text-xl md:text-2xl leading-none tracking-tight text-foreground transition-colors group-hover:text-[#D4AF37]">
            ATREYA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </div>
        <span className="text-[10px] md:text-[11px] font-mono font-extrabold tracking-[0.35em] text-[#D4AF37] uppercase leading-none mt-1.5 opacity-95">
          MEDICINE &amp; SCIENCE
        </span>
      </div>
      
    </Link>
  );
}
