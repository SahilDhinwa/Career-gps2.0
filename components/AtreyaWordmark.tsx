
import { useId } from "react";

interface AtreyaWordmarkProps {
  className?: string;
}

export default function AtreyaWordmark({
  className = "w-[180px] sm:w-[230px] h-auto",
}: AtreyaWordmarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const gold = `atreya-gold-${uid}`;
  const shine = `atreya-shine-${uid}`;
  const green = `atreya-green-${uid}`;
  const leafGold = `atreya-leaf-gold-${uid}`;
  const leafGreen = `atreya-leaf-green-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 230"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="ATREYA"
    >
      <defs>
        {/* Metallic gold lettering */}
        <linearGradient
          id={gold}
          x1="0"
          y1="0"
          x2="0.8"
          y2="1"
          objectBoundingBox="true"
        >
          <stop offset="0%" stopColor="#FFF9DD" />
          <stop offset="18%" stopColor="#FFF0B7" />
          <stop offset="38%" stopColor="#E4B75C" />
          <stop offset="54%" stopColor="#FFF5CE" />
          <stop offset="76%" stopColor="#D49B3E" />
          <stop offset="100%" stopColor="#F6D68A" />
        </linearGradient>

        <linearGradient
          id={shine}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".75" />
          <stop offset="48%" stopColor="#FFFFFF" stopOpacity=".12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id={green}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C0E879" />
          <stop offset="30%" stopColor="#67AE43" />
          <stop offset="65%" stopColor="#147A42" />
          <stop offset="100%" stopColor="#034329" />
        </linearGradient>

        <linearGradient
          id={leafGold}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#E6EF92" />
          <stop offset="48%" stopColor="#62AB48" />
          <stop offset="100%" stopColor="#075637" />
        </linearGradient>

        <linearGradient
          id={leafGreen}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D0ED85" />
          <stop offset="45%" stopColor="#4BA84F" />
          <stop offset="100%" stopColor="#005B38" />
        </linearGradient>
      </defs>

      {/* Custom classical serif letterforms */}
      <g
        fill={`url(#${gold})`}
        stroke="#FFF0BF"
        strokeWidth=".35"
        strokeLinejoin="round"
      >
        {/* A */}
        <path
          fillRule="evenodd"
          d="
            M 5 189
            L 19 185
            L 76 23
            L 85 23
            L 144 185
            L 158 189
            V 193
            H 96
            V 189
            L 113 185
            L 95 132
            H 49
            L 30 185
            L 48 189
            V 193
            H 5 Z

            M 54 121
            H 91
            L 73 67 Z
          "
        />

        {/* T */}
        <path
          d="
            M 158 28
            H 291
            L 294 62
            H 289
            C 283 42 274 37 252 37
            H 235
            V 183
            L 256 189
            V 193
            H 193
            V 189
            L 214 183
            V 37
            H 196
            C 174 37 166 42 160 62
            H 155 Z
          "
        />

        {/* R: main body and sculpted bowl */}
        <path
          fillRule="evenodd"
          d="
            M 301 28
            H 369
            C 416 28 441 46 441 81
            C 441 112 422 132 391 136
            L 429 179
            C 438 188 448 194 462 199
            C 443 201 428 197 414 186
            L 361 140
            H 334
            V 183
            L 354 189
            V 193
            H 301
            V 189
            L 314 183
            V 37
            L 301 33 Z

            M 334 37
            V 129
            H 364
            C 400 129 420 112 420 82
            C 420 52 403 37 366 37 Z
          "
        />

        {/* E */}
        <path
          d="
            M 451 28
            H 571
            L 575 64
            H 570
            C 563 44 552 37 531 37
            H 486
            V 103
            H 532
            C 546 103 552 98 555 85
            H 561
            V 132
            H 555
            C 552 118 546 113 532 113
            H 486
            V 184
            H 531
            C 556 184 569 175 577 151
            H 583
            L 577 193
            H 451
            V 189
            L 465 183
            V 37
            L 451 33 Z
          "
        />

        {/* Y */}
        <path
          d="
            M 582 28
            H 651
            V 33
            L 632 37
            L 676 101
            L 721 37
            L 701 33
            V 28
            H 755
            V 33
            L 737 39
            L 689 113
            V 183
            L 711 189
            V 193
            H 647
            V 189
            L 668 183
            V 113
            L 611 39
            L 582 33 Z
          "
        />

        {/* Final A */}
        <path
          fillRule="evenodd"
          d="
            M 730 189
            L 745 185
            L 802 23
            L 811 23
            L 869 185
            L 885 189
            V 193
            H 822
            V 189
            L 840 185
            L 821 132
            H 775
            L 756 185
            L 775 189
            V 193
            H 730 Z

            M 780 121
            H 817
            L 799 67 Z
          "
        />
      </g>

      {/* Signature R flourish — sweeping below RE */}
      <path
        d="
          M 372 133
          C 401 165 430 196 467 207
          C 491 214 512 211 532 204
          C 515 217 493 224 471 221
          C 431 216 396 181 372 133 Z
        "
        fill={`url(#${gold})`}
      />

      <path
        d="
          M 386 148
          C 417 187 448 208 480 213
        "
        stroke={`url(#${shine})`}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* First A: botanical leaf */}
      <path
        d="
          M 50 151
          C 61 133 78 126 96 129
          C 84 147 68 155 50 151 Z
        "
        fill={`url(#${leafGold})`}
      />

      <path
        d="
          M 51 151
          C 65 145 79 136 95 129
        "
        stroke="#E3F3A4"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="
          M 65 145
          L 63 136
          M 76 139
          L 78 132
        "
        stroke="#D2F2B0"
        strokeWidth="1"
        opacity=".7"
      />

      {/* Final A: matching botanical leaf */}
      <path
        d="
          M 777 151
          C 788 133 805 126 823 129
          C 811 147 795 155 777 151 Z
        "
        fill={`url(#${leafGreen})`}
      />

      <path
        d="
          M 778 151
          C 792 145 806 136 822 129
        "
        stroke="#D9F2A0"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="
          M 792 145
          L 790 136
          M 803 139
          L 805 132
        "
        stroke="#D2F2B0"
        strokeWidth="1"
        opacity=".7"
      />
    </svg>
  );
}
