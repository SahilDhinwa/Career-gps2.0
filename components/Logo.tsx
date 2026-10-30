
import Link from "next/link";
import AtreyaIcon from "./AtreyaIcon";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

function AtreyaWordmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 650 155"
      className="block w-[178px] sm:w-[225px] h-auto overflow-visible text-foreground transition-colors duration-300 group-hover:text-[#D4AF37]"
      role="img"
      aria-label="ATREYA"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="atreya-leaf-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#64A875" />
          <stop offset="55%" stopColor="#18784C" />
          <stop offset="100%" stopColor="#075238" />
        </linearGradient>

        <linearGradient id="atreya-leaf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0B0" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A67624" />
        </linearGradient>
      </defs>

      <g fill="currentColor">
        {/* A */}
        <path d="
          M8 120 H33 L75 12 H85 L127 120 H151 V126 H92 V120 H110
          L97 87 H47 L34 120 H52 V126 H8 Z
          M51 79 H94 L73 27 Z
        " fillRule="evenodd" />

        {/* T */}
        <path d="
          M151 15 H264 V45 H258
          C255 27 247 22 230 22 H215 V120 H237 V126 H178 V120 H200 V22 H184
          C168 22 160 27 157 45 H151 Z
        " />

        {/* R */}
        <path d="
          M268 15 H330
          C365 15 384 29 384 52
          C384 72 371 84 348 88
          L376 116
          C398 138 426 145 458 135
          C431 157 391 151 365 132
          L325 92 H304 V120 H325 V126 H268 V120 H289 V21 H268 Z

          M304 22 V85 H327
          C352 85 368 74 368 53
          C368 32 354 22 328 22 Z
        " fillRule="evenodd" />

        {/* E */}
        <path d="
          M388 15 H480 V44 H474
          C470 27 462 22 445 22 H424 V66 H448
          C460 66 464 61 466 50 H471 V89 H466
          C464 78 460 73 448 73 H424 V120 H446
          C466 120 476 111 481 92 H487 L483 126 H388 V120 H409 V21 H388 Z
        " />

        {/* Y */}
        <path d="
          M481 15 H534 V21 H518 L550 68 L582 21 H565 V15 H608 V21 H592
          L557 76 V120 H578 V126 H521 V120 H542 V77 L504 21 H481 Z
        " />

        {/* Final A */}
        <path d="
          M547 120 H568 L610 12 H620 L662 120 H682 V126 H624 V120 H644
          L631 87 H581 L568 120 H586 V126 H547 Z
          M585 79 H628 L607 27 Z
        " fillRule="evenodd" transform="translate(-37 0)" />
      </g>

      {/* Botanical leaf inside first A */}
      <path
        d="M49 83 C59 67 73 67 91 70 C79 83 65 87 49 83Z"
        fill="url(#atreya-leaf-gold)"
      />
      <path
        d="M51 83 C65 76 77 72 89 71"
        stroke="#FFF2BD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Botanical leaf inside final A */}
      <path
        d="M548 83 C560 68 575 68 591 71 C578 83 564 87 548 83Z"
        fill="url(#atreya-leaf-green)"
      />
      <path
        d="M550 83 C564 76 578 72 589 72"
        stroke="#B8E3C2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
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
      <div
        className={`shrink-0 ${className} transition-transform duration-300 group-hover:scale-105`}
      >
        <AtreyaIcon className="w-full h-full" />
      </div>

      <div className="flex min-w-0 flex-col items-center">
        <AtreyaWordmark />

        {showTagline && (
          <div className="mt-1.5 flex w-full flex-col items-center">
            <div className="flex w-full items-center justify-center gap-2">
              <span className="h-px w-4 bg-gradient-to-r from-transparent to-[#D4AF37] sm:w-5" />

              <span className="whitespace-nowrap text-[7.5px] font-semibold tracking-[0.22em] text-[#C49A36] dark:text-[#D4AF37] sm:text-[8.5px]">
                MEDICINE &amp; SCIENCE
              </span>

              <span className="h-px w-4 bg-gradient-to-l from-transparent to-[#D4AF37] sm:w-5" />
            </div>

            <span
              className="mt-1 h-1.5 w-1.5 rotate-45 bg-[#D4AF37] opacity-90"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
