
import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";
import AtreyaWordmark from "./AtreyaWordmark";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "w-10 h-10 sm:w-14 sm:h-14",
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className="
        group inline-flex max-w-full shrink-0
        items-center gap-2 sm:gap-3.5
        rounded-lg outline-none
        focus-visible:ring-2
        focus-visible:ring-[#D4AF37]
      "
    >
      {/* Existing emblem */}
      <div
        className={`
          shrink-0
          transition-transform duration-300
          group-hover:scale-105
          ${className}
        `}
      >
        <AtreyaIcon className="h-full w-full" />
      </div>

      {/* Brand lettering and tagline */}
      <div className="flex min-w-0 flex-col items-center">
        <AtreyaWordmark
          className="
            block h-auto
            w-[150px] sm:w-[205px]
            text-foreground
            transition-colors duration-300
            group-hover:text-[#D4AF37]
          "
        />

        {showTagline && (
          <div className="mt-1 flex w-full flex-col items-center">
            <div className="flex w-full items-center justify-center gap-1.5 sm:gap-2">
              <span
                className="
                  h-px w-3 sm:w-5
                  bg-gradient-to-r
                  from-transparent to-[#D4AF37]
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[7px] sm:text-[8.5px]
                  font-semibold
                  tracking-[0.16em] sm:tracking-[0.22em]
                  text-[#C49A36]
                  dark:text-[#D4AF37]
                "
              >
                MEDICINE &amp; SCIENCE
              </span>

              <span
                className="
                  h-px w-3 sm:w-5
                  bg-gradient-to-l
                  from-transparent to-[#D4AF37]
                "
              />
            </div>

            <span
              aria-hidden="true"
              className="
                mt-1 h-1.5 w-1.5
                rotate-45
                bg-[#D4AF37]
              "
            />
          </div>
        )}
      </div>
    </Link>
  );
}
