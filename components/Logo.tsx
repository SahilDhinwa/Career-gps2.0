// components/Logo.tsx
import Link from "next/link";

export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group cursor-pointer outline-none">
      {/* The Premium Monogram Icon */}
      <div className={`relative flex items-center justify-center bg-[#0B1A14] rounded-lg shadow-md border border-[#1a382c] overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full p-1.5">
          {/* The Metallic Gold 'G' */}
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          
          {/* The Sharp, Intersecting Silver 'V' */}
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
      
      {/* The Brand Text */}
      <div className="flex flex-col justify-center">
        <span className="font-heading font-bold text-lg md:text-xl leading-none tracking-tight text-foreground transition-colors group-hover:text-primary">
          Veblen
        </span>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-foreground/50 uppercase leading-none mt-0.5">
          Good
        </span>
      </div>
    </Link>
  );
}
