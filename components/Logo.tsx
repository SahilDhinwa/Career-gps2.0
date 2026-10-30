import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "w-12 h-12 sm:w-14 sm:h-14",
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className="group inline-flex items-center gap-3 sm:gap-3.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      <div className={`shrink-0 ${className} transition-transform duration-300 group-hover:scale-105`}>
        <AtreyaIcon className="w-full h-full drop-shadow-xs" />
      </div>

      <div className="flex flex-col items-center min-w-0">
        {/* Main Brand Wordmark with Reference Proportions */}
        <div className="relative flex items-baseline">
          <span
            className="text-[23px] sm:text-[28px] font-bold leading-none tracking-[0.11em] text-foreground group-hover:text-[#D4AF37] transition-colors select-none"
            style={{
              fontFamily: "var(--font-cinzel), 'Cinzel', Georgia, serif",
            }}
          >
            ATREYA
          </span>

          {/* Subtle Reference Sweeping 'R' Tail Under 'RE' */}
          <svg
            viewBox="0 0 80 12"
            className="w-11 sm:w-14 h-2.5 absolute -bottom-1.5 left-[44%] -translate-x-1/2 pointer-events-none opacity-85"
            aria-hidden="true"
          >
            <path
              d="M 4 1 C 18 9, 36 11, 58 7 C 42 8, 24 6, 10 1 Z"
              fill="currentColor"
              className="text-primary dark:text-[#D4AF37]"
            />
          </svg>
        </div>

        {showTagline && (
          <div className="flex flex-col items-center w-full mt-2">
            {/* Flanking Gold Lines + MEDICINE & SCIENCE */}
            <div className="flex items-center justify-center gap-2 w-full">
              <span className="w-4 sm:w-5 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-[7.5px] sm:text-[8.5px] font-semibold tracking-[0.22em] whitespace-nowrap text-[#C49A36] dark:text-[#D4AF37]">
                MEDICINE &amp; SCIENCE
              </span>
              <span className="w-4 sm:w-5 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            {/* Center Gold Diamond Underneath '&' (Matches Reference Image) */}
            <span
              className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 mt-1 opacity-90"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
