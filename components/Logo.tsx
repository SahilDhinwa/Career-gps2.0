import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "w-10 h-10 md:w-12 md:h-12",
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className="group inline-flex items-center gap-3 md:gap-4 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      {/* Icon Wrapper */}
      <div className={`shrink-0 ${className} drop-shadow-sm`}>
        <AtreyaIcon className="w-full h-full" />
      </div>

      {/* Typography Wrapper */}
      <div className="flex flex-col min-w-0 pt-1">
        {/* Main Brand Name */}
        <span
          className="text-[22px] md:text-[28px] font-semibold leading-none tracking-[0.12em] transition-colors"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            // Matches the deep forest green of the reference text in Light Mode
            color: "var(--primaryHover)", 
          }}
        >
          ATREYA
        </span>

        {/* Tagline & Golden Lines */}
        {showTagline && (
          <div className="flex items-center gap-2 mt-2 opacity-90">
            <span className="w-4 md:w-6 h-[1px] bg-[#D4AF37]" />
            
            <span className="text-[7.5px] md:text-[8.5px] font-medium tracking-[0.2em] whitespace-nowrap text-[#D4AF37] uppercase">
              Medicine &amp; Science
            </span>
            
            <span className="w-4 md:w-6 h-[1px] bg-[#D4AF37]" />
          </div>
        )}
      </div>
    </Link>
  );
}
