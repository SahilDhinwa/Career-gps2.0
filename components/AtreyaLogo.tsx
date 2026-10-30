
import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "w-12 h-12",
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className="group inline-flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      <div className={`shrink-0 ${className}`}>
        <AtreyaIcon className="w-full h-full" />
      </div>

      <div className="flex flex-col min-w-0">
        <span
          className="text-[24px] sm:text-[29px] font-semibold leading-none tracking-[0.09em] text-foreground group-hover:text-[#D4AF37] transition-colors"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
          }}
        >
          ATREYA
        </span>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-3 h-px bg-[#D4AF37]" />

            <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.13em] whitespace-nowrap text-[#C49A36]">
              MEDICINE &amp; SCIENCE
            </span>

            <span className="w-3 h-px bg-[#D4AF37]" />
          </div>
        )}
      </div>
    </Link>
  );
}
