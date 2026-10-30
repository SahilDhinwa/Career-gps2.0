
import Link from "next/link";
import AtreyaMark from "./AtreyaMark";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className = "w-12 h-12",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className="group inline-flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
    >
      <div
        className={`relative shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      >
        <AtreyaMark
          className="w-full h-full"
          idPrefix="atreya-navbar"
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-baseline leading-none">
          <span
            className="font-bold text-[23px] sm:text-[28px] tracking-[-0.055em] text-[#D4AF37]"
            style={{
              fontFamily:
                "'Noto Serif Devanagari', 'Nirmala UI', serif",
            }}
          >
            आ
          </span>

          <span
            className="text-[23px] sm:text-[28px] font-semibold tracking-[0.025em] text-foreground group-hover:text-[#D4AF37] transition-colors"
            style={{
              fontFamily:
                "'Cinzel', 'Times New Roman', serif",
            }}
          >
            TREYA
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="h-px w-3 bg-[#D4AF37]/70" />
          <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] text-[#D4AF37] whitespace-nowrap">
            MEDICINE &amp; SCIENCE
          </span>
          <span className="h-px w-3 bg-[#D4AF37]/70" />
        </div>
      </div>
    </Link>
  );
}
