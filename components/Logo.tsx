
import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";
import AtreyaWordmark from "./AtreyaWordmark";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "h-12 w-12 sm:h-14 sm:w-14",
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ATREYA Medicine and Science — Home"
      className="
        group inline-flex max-w-full
        items-center gap-2.5
        rounded-md outline-none
        focus-visible:ring-2
        focus-visible:ring-[#087568]
        sm:gap-3.5
      "
    >
      {/* Modern botanical A icon */}
      <div
        className={`
          shrink-0
          transition-transform duration-300
          group-hover:scale-[1.03]
          ${className}
        `}
      >
        <AtreyaIcon className="block h-full w-full" />
      </div>

      {/* Vertical divider */}
      <span
        aria-hidden="true"
        className="
          h-10 w-px shrink-0
          bg-[#59615F]
          sm:h-12
          dark:bg-[#9CA6A2]
        "
      />

      {/* Wordmark and tagline */}
      <div className="flex min-w-0 flex-col justify-center">
        <AtreyaWordmark
          className="
            block h-auto
            w-[145px] sm:w-[205px]
          "
        />

        {showTagline && (
          <span
            className="
              mt-1.5 block
              whitespace-nowrap
              text-center
              text-[6.5px] sm:text-[9px]
              font-semibold
              leading-none
              tracking-[0.18em]
              text-[#62696A]
              dark:text-[#B8C0C0]
            "
          >
            MEDICINE &amp; SCIENCE
          </span>
        )}
      </div>
    </Link>
  );
}
