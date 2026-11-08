
import React, { useId } from "react";

interface AtreyaWordmarkProps {
  className?: string;
}

export default function AtreyaWordmark({
  className = "w-[155px] sm:w-[205px] h-auto",
}: AtreyaWordmarkProps) {
  const id = useId().replace(/:/g, "");
  const tealId = `atreya-wordmark-teal-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 140"
      className={className}
      role="img"
      aria-label="ATREYA"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={tealId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#075B55" />
          <stop offset="55%" stopColor="#004D48" />
          <stop offset="100%" stopColor="#003B37" />
        </linearGradient>
      </defs>

      <g fill={`url(#${tealId})`}>
        {/* A */}
        <path d="
          M 0 124
          L 57 14
          Q 61 6 69 6
          Q 77 6 81 14
          L 138 124
          H 111
          L 69 38
          L 27 124
          Z
        " />

        {/* T */}
        <path d="
          M 151 8
          H 287
          Q 292 8 292 13
          V 26
          Q 292 31 287 31
          H 231
          V 124
          H 207
          V 31
          H 151
          Q 146 31 146 26
          V 13
          Q 146 8 151 8
          Z
        " />

        {/* R */}
        <path
          fillRule="evenodd"
          d="
            M 309 8
            H 382
            C 421 8 443 28 443 61
            C 443 85 429 101 406 108
            L 449 124
            H 411
            L 371 110
            H 333
            V 124
            H 309
            Z

            M 333 31
            V 87
            H 380
            C 406 87 419 78 419 60
            C 419 41 406 31 380 31
            Z
          "
        />

        {/* E */}
        <path d="
          M 468 8
          H 591
          V 31
          H 492
          V 55
          H 576
          V 78
          H 492
          V 101
          H 591
          V 124
          H 468
          Z
        " />

        {/* Y */}
        <path d="
          M 607 8
          H 637
          L 690 68
          L 743 8
          H 773
          L 702 89
          V 124
          H 678
          V 89
          Z
        " />

        {/* Final A */}
        <path d="
          M 762 124
          L 819 14
          Q 823 6 831 6
          Q 839 6 843 14
          L 900 124
          H 873
          L 831 38
          L 789 124
          Z
        " />
      </g>
    </svg>
  );
}
