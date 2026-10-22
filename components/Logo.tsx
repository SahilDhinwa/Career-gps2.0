import Link from "next/link";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-3 group cursor-pointer outline-none">
      
      {/* The Premium ATREYA Med Monogram Icon (Preserves exact container, scale & gold glow) */}
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#0B1A14] to-[#050C09] rounded-lg shadow-lg border border-[#D4AF37]/30 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full p-1 drop-shadow-md">
          {/* Outer Metallic Gold Clinical Ring Arc */}
          <path 
            d="M 20 72 A 38 38 0 1 1 80 72" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="5.5" 
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* The Sharp, Intersecting Silver-White 'A' Pillar */}
          <path 
            d="M 50 16 L 23 82 L 36 82 L 50 44 L 64 82 L 77 82 Z" 
            fill="#F3F4F6" 
          />

          {/* Metallic Gold Botanical / Clinical Pulse Crossbar */}
          <path 
            d="M 28 60 L 43 60 L 47 51 L 53 67 L 57 60 L 72 60 L 75 66 L 25 66 Z" 
            fill="#D4AF37" 
          />

          {/* Apex Gold Bindu (Point of Origin) */}
          <circle cx="50" cy="11" r="3.5" fill="#D4AF37" />
        </svg>
      </div>
      
      {/* The Brand Text (Same font-heading & luxury gold sub-label) */}
      <div className="flex flex-col justify-center">
        <span className="font-heading font-extrabold text-xl md:text-2xl leading-none tracking-tight text-foreground transition-colors group-hover:text-[#D4AF37]">
          ATREYA
        </span>
        <span className="text-[11px] md:text-xs font-bold tracking-[0.28em] text-[#D4AF37] uppercase leading-none mt-1 opacity-90">
          Med
        </span>
      </div>
      
    </Link>
  );
}
