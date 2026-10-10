import Link from "next/link";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-3 group cursor-pointer outline-none">
      
      {/* The Premium Monogram Icon (Upgraded Scale & Border) */}
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#0B1A14] to-[#050C09] rounded-lg shadow-lg border border-[#D4AF37]/30 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] ${className}`}>
        {/* Reduced padding (p-1 instead of p-1.5) to make the logo larger inside the box */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full p-1 drop-shadow-md">
          {/* The Metallic Gold 'G' */}
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          
          {/* The Sharp, Intersecting Silver 'V' */}
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
      
      {/* The Brand Text (Upgraded Typography & Colors) */}
      <div className="flex flex-col justify-center">
        <span className="font-heading font-extrabold text-xl md:text-2xl leading-none tracking-tight text-foreground transition-colors group-hover:text-[#D4AF37]">
          Veblen
        </span>
        {/* Made "GOOD" gold and slightly larger spacing to look like a luxury brand */}
        <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase leading-none mt-1 opacity-90">
          Good
        </span>
      </div>
      
    </Link>
  );
}
