
import React, { useId } from "react";

interface AtreyaWordmarkProps {
  className?: string;
}

export default function AtreyaWordmark({
  className = "w-[155px] sm:w-[205px] h-auto",
}: AtreyaWordmarkProps) {
  const id = useId().replace(/:/g, "");
  const leaf = `atreya-leaf-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 145"
      className={className}
      role="img"
      aria-label="ATREYA"
      fill="none"
    >
      <defs>
        <linearGradient
          id={leaf}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3D966D" />
          <stop offset="100%" stopColor="#075234" />
        </linearGradient>
      </defs>

      <g fill="currentColor">
        {/* A — tall classical serif */}
        <path
          fillRule="evenodd"
          d="
            M 4 113
            L 15 110
            L 58 7
            L 66 7
            L 110 110
            L 122 113
            L 122 117
            L 76 117
            L 76 113
            L 89 110
            L 76 79
            L 35 79
            L 22 110
            L 36 113
            L 36 117
            L 4 117 Z

            M 39 70
            L 72 70
            L 56 30 Z
          "
        />

        {/* T — flared serifs */}
        <path
          d="
            M 136 9
            H 246
            L 249 33
            H 244
            C 239 18 232 16 219 16
            H 201
            V 109
            L 218 113
            V 117
            H 164
            V 113
            L 181 109
            V 16
            H 163
            C 150 16 143 18 138 33
            H 133 Z
          "
        />

        {/* R — sculpted bowl and diagonal leg */}
        <path
          fillRule="evenodd"
          d="
            M 262 9
            H 317
            C 354 9 373 23 373 47
            C 373 68 358 81 333 84
            L 371 110
            L 388 113
            V 117
            H 351
            L 310 85
            H 287
            V 109
            L 304 113
            V 117
            H 262
            V 113
            L 269 109
            V 17
            L 262 13 Z

            M 287 17
            V 77
            H 311
            C 340 77 352 66 352 47
            C 352 28 339 17 311 17 Z
          "
        />

        {/* E — fine horizontal arms */}
        <path
          d="
            M 395 9
            H 496
            L 499 34
            H 493
            C 488 20 480 16 462 16
            H 421
            V 58
            H 464
            C 475 58 479 55 481 46
            H 486
            V 78
            H 481
            C 479 68 475 65 464 65
            H 421
            V 109
            H 464
            C 484 109 493 103 498 88
            H 504
            L 499 117
            H 395
            V 113
            L 403 109
            V 17
            L 395 13 Z
          "
        />

        {/* Y — slender classical fork */}
        <path
          d="
            M 505 9
            H 553
            V 13
            L 540 17
            L 575 65
            L 610 17
            L 597 13
            V 9
            H 635
            V 13
            L 623 18
            L 585 72
            V 109
            L 603 113
            V 117
            H 549
            V 113
            L 566 109
            V 72
            L 525 18
            L 505 13 Z
          "
        />

        {/* Final A */}
        <path
          fillRule="evenodd"
          d="
            M 604 113
            L 615 110
            L 658 7
            L 666 7
            L 710 110
            L 719 113
            V 117
            H 676
            V 113
            L 689 110
            L 676 79
            H 635
            L 622 110
            L 636 113
            V 117
            H 604 Z

            M 639 70
            H 672
            L 656 30 Z
          "
        />

        {/* R's signature sweeping terminal */}
        <path
          d="
            M 326 81
            C 351 108 373 128 411 134
            C 430 137 446 135 460 132
            C 439 145 411 146 390 140
            C 361 133 339 109 326 81 Z
          "
        />
      </g>

      {/* Botanical cutout — first A */}
      <path
        d="
          M 37 90
          C 47 80 56 78 69 79
          C 62 91 52 96 37 90 Z
        "
        fill={`url(#${leaf})`}
      />
      <path
        d="M 39 90 C 50 88 57 84 66 80"
        stroke="#B4D8B4"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Botanical cutout — final A */}
      <path
        d="
          M 637 90
          C 647 80 656 78 669 79
          C 662 91 652 96 637 90 Z
        "
        fill={`url(#${leaf})`}
      />
      <path
        d="M 639 90 C 650 88 657 84 666 80"
        stroke="#B4D8B4"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
