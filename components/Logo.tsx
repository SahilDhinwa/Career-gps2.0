
import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: "horizontal" | "stacked";
}

export default function Logo({
  className = "w-12 h-12",
  showTagline = true,
  variant = "horizontal",
}: LogoProps) {
  const stacked = variant === "stacked";

  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className={`group inline-flex ${
        stacked
          ? "flex-col items-center gap-2"
          : "flex-row items-center gap-2.5 sm:gap-3"
      } rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]`}
    >
      <div
        className={`shrink-0 ${
          stacked ? "w-40 h-40 sm:w-52 sm:h-52" : className
        }`}
      >
        <AtreyaIcon className="w-full h-full" />
      </div>

      <div
        className={`flex flex-col min-w-0 ${
          stacked ? "items-center" : "items-start"
        }`}
      >
        <span
          className={`${cinzel.className} ${
            stacked
              ? "text-5xl sm:text-7xl tracking-[0.1em]"
              : "text-[22px] sm:text-[29px] tracking-[0.065em]"
          } font-semibold leading-none text-foreground transition-colors group-hover:text-[#D4AF37]`}
        >
          ATREYA
        </span>

        {showTagline && (
          <div
            className={`flex items-center justify-center gap-1.5 ${
              stacked ? "mt-4" : "mt-2"
            }`}
          >
            <span className="w-3 sm:w-5 h-px bg-[#D4AF37]" />

            <span
              className={`${
                stacked
                  ? "text-[10px] sm:text-sm tracking-[0.25em]"
                  : "text-[8px] sm:text-[10px] tracking-[0.12em]"
              } font-medium whitespace-nowrap text-[#D4AF37]`}
            >
              MEDICINE &amp; SCIENCE
            </span>

            <span className="w-3 sm:w-5 h-px bg-[#D4AF37]" />
          </div>
        )}
      </div>
    </Link>
  );
}
