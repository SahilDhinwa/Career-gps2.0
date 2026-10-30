
import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";
import AtreyaWordmark from "./AtreyaWordmark";

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
      {/* Existing lotus and DNA icon */}
      <div
        className={`shrink-0 ${className} transition-transform duration-300 group-hover:scale-105`}
      >
        <AtreyaIcon className="w-full h-full drop-shadow-xs" />
      </div>

      <div className="flex flex-col items-center min-w-0">
        {/* Custom SVG lettering */}
        <AtreyaWordmark className="w-[155px] sm:w-[205px] h-auto text-foreground transition-colors duration-300 group-hover:text-[#D4AF37]" />

        {showTagline && (
          <div className="flex flex-col items-center w-full mt-1">
            {/* Existing tagline styling */}
            <div className="flex items-center justify-center gap-2 w-full">
              <span className="w-4 sm:w-5 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />

              <span className="text-[7.5px] sm:text-[8.5px] font-semibold tracking-[0.22em] whitespace-nowrap text-[#C49A36] dark:text-[#D4AF37]">
                MEDICINE &amp; SCIENCE
              </span>

              <span className="w-4 sm:w-5 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            {/* Existing gold diamond */}
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
