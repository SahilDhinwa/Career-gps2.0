
import React, { useId } from "react";

interface AtreyaWordmarkProps {
  className?: string;
}

export default function AtreyaWordmark({
  className = "w-[155px] sm:w-[205px] h-auto",
}: AtreyaWordmarkProps) {
  const id = useId().replace(/:/g, "");
  const leafId = `atreya-leaf-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 680 150"
      className={className}
      role="img"
      aria-label="ATREYA"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={leafId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#7BBE88" />
          <stop offset="45%" stopColor="#258654" />
          <stop offset="100%" stopColor="#075238" />
        </linearGradient>
      </defs>

      <g fill="currentColor">
        {/* A */}
        <path
          fillRule="evenodd"
          d="
            M 5 113
            L 17 110
            L 57 12
            H 65
            L 106 110
            L 118 113
            V 118
            H 72
            V 113
            L 85 110
            L 74 81
            H 37
            L 25 110
            L 39 113
            V 118
            H 5 Z

            M 41 73
            H 71
            L 56 35 Z
          "
        />

        {/* T */}
        <path
          d="
            M 128 14
            H 240
            V 39
            H 235
            C 232 23 224 21 210 21
            H 194
            V 110
            L 211 113
            V 118
            H 157
            V 113
            L 174 110
            V 21
            H 158
            C 144 21 136 23 133 39
            H 128 Z
          "
        />

        {/* R */}
        <path
          fillRule="evenodd"
          d="
            M 249 14
            H 303
            C 341 14 362 28 362 52
            C 362 72 347 85 325 88
            L 361 111
            L 376 114
            V 118
            H 340
            L 302 91
            H 274
            V 110
            L 290 113
            V 118
            H 249
            V 113
            L 255 110
            V 22
            L 249 19 Z

            M 274 22
            V 83
            H 300
            C 327 83 342 72 342 53
            C 342 32 329 22 300 22 Z
          "
        />

        {/* E */}
        <path
          d="
            M 376 14
            H 469
            V 40
            H 463
            C 460 26 452 22 436 22
            H 401
            V 60
            H 435
            C 447 60 451 56 453 47
            H 458
            V 82
            H 453
            C 451 71 447 68 435 68
            H 401
            V 110
            H 438
            C 457 110 464 104 469 89
            H 475
            L 471 118
            H 376
            V 113
            L 383 110
            V 22
            L 376 19 Z
          "
        />

        {/* Y */}
        <path
          d="
            M 477 14
            H 524
            V 19
            L 511 22
            L 542 66
            L 573 22
            L 560 19
            V 14
            H 599
            V 19
            L 585 23
            L 552 73
            V 110
            L 569 113
            V 118
            H 516
            V 113
            L 533 110
            V 73
            L 497 23
            L 477 19 Z
          "
        />

        {/* Final A */}
        <path
          fillRule="evenodd"
          d="
            M 564 113
            L 575 110
            L 615 12
            H 623
            L 665 110
            L 677 113
            V 118
            H 631
            V 113
            L 644 110
            L 633 81
            H 596
            L 584 110
            L 598 113
            V 118
            H 564 Z

            M 600 73
            H 630
            L 615 35 Z
          "
        />

        {/* R's distinctive curved terminal */}
        <path
          d="
            M 310 88
            C 332 112 355 132 388 139
            C 404 143 421 142 435 137
            C 419 149 394 151 376 146
            C 347 138 323 112 310 88 Z
          "
        />
      </g>

      {/* Gold leaf inside first A */}
      <path
        d="
          M 37 88
          C 47 79 58 78 70 80
          C 61 90 51 95 37 88 Z
        "
        fill="#D4AF37"
      />

      {/* Green leaf inside final A */}
      <path
        d="
          M 596 88
          C 606 79 617 78 629 80
          C 620 90 610 95 596 88 Z
        "
        fill={`url(#${leafId})`}
      />

      {/* Leaf veins */}
      <g
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path
          d="M39 88 Q53 85 68 80"
          stroke="#FFF0B8"
        />
        <path
          d="M598 88 Q612 85 627 80"
          stroke="#B8E3C2"
        />
      </g>
    </svg>
  );
}
