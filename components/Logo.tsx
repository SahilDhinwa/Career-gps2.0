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
      className="group inline-flex items-center gap-3 sm:gap-4 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      {/* Botanical DNA Emblem */}
      <div className={`shrink-0 ${className} transition-transform duration-300 group-hover:scale-105`}>
        <AtreyaIcon className="w-full h-full drop-shadow-xs" />
      </div>

      {/* Custom Vector Wordmark (Matching your reference image perfectly) */}
      {showTagline && (
        <div className="flex items-center">
          <AtreyaWordmark className="w-48 sm:w-60 md:w-68 h-auto transition-transform duration-300 group-hover:opacity-95" />
        </div>
      )}
    </Link>
  );
}
