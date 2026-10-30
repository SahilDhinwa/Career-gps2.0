
import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const uid = useId().replace(/:/g, "");

  const ids = {
    gold: `gold-${uid}`,
    goldBright: `gold-bright-${uid}`,
    green: `green-${uid}`,
    greenDark: `green-dark-${uid}`,
    greenBright: `green-bright-${uid}`,
    droplet: `droplet-${uid}`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      role="img"
      aria-label="ATREYA lotus and DNA emblem"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Metallic gold */}
        <linearGradient
          id={ids.gold}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#A66B24" />
          <stop offset="22%" stopColor="#E7B451" />
          <stop offset="43%" stopColor="#FFF0B6" />
          <stop offset="62%" stopColor="#E6AE45" />
          <stop offset="100%" stopColor="#9F651C" />
        </linearGradient>

        <linearGradient
          id={ids.goldBright}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFF5C9" />
          <stop offset="38%" stopColor="#E9BC64" />
          <stop offset="70%" stopColor="#D59A32" />
          <stop offset="100%" stopColor="#A56B21" />
        </linearGradient>

        {/* Botanical greens */}
        <linearGradient
          id={ids.green}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#408A43" />
          <stop offset="35%" stopColor="#176B40" />
          <stop offset="72%" stopColor="#075035" />
          <stop offset="100%" stopColor="#002F22" />
        </linearGradient>

        <linearGradient
          id={ids.greenDark}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#286F3B" />
          <stop offset="55%" stopColor="#075137" />
          <stop offset="100%" stopColor="#002D21" />
        </linearGradient>

        <linearGradient
          id={ids.greenBright}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#A5B965" />
          <stop offset="48%" stopColor="#6F994F" />
          <stop offset="100%" stopColor="#2C7045" />
        </linearGradient>

        <radialGradient
          id={ids.droplet}
          cx="35%"
          cy="25%"
          r="75%"
        >
          <stop offset="0%" stopColor="#FFF8D5" />
          <stop offset="28%" stopColor="#F6D68A" />
          <stop offset="65%" stopColor="#DDA743" />
          <stop offset="100%" stopColor="#A66B20" />
        </radialGradient>
      </defs>

      {/* Symmetrical golden arch */}
      <path
        d="M69 187 C69 115 112 65 176 42"
        stroke={`url(#${ids.gold})`}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M224 42 C288 65 331 115 331 187"
        stroke={`url(#${ids.gold})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Top golden flame / droplet */}
      <path
        d="
          M200 4
          C195 20 181 36 181 49
          C181 64 189 75 200 75
          C211 75 219 64 219 49
          C219 36 205 20 200 4
          Z
        "
        fill={`url(#${ids.droplet})`}
      />

      {/* Droplet reflection */}
      <path
        d="M191 37 C186 47 187 57 191 61"
        stroke="#FFF7D3"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* LEFT OUTER LOTUS PETAL */}
      <path
        d="
          M22 260
          C67 249 112 268 158 335
          C100 346 51 318 22 260
          Z
        "
        fill={`url(#${ids.greenDark})`}
      />

      {/* RIGHT OUTER LOTUS PETAL */}
      <path
        d="
          M378 260
          C333 249 288 268 242 335
          C300 346 349 318 378 260
          Z
        "
        fill={`url(#${ids.greenDark})`}
      />

      {/* LEFT INNER LOTUS PETAL */}
      <path
        d="
          M78 184
          C133 194 172 244 179 333
          C126 313 88 263 78 184
          Z
        "
        fill={`url(#${ids.green})`}
      />

      {/* RIGHT INNER LOTUS PETAL */}
      <path
        d="
          M322 184
          C267 194 228 244 221 333
          C274 313 312 263 322 184
          Z
        "
        fill={`url(#${ids.green})`}
      />

      {/* LEFT LEAF: gold-green interior flourish */}
      <path
        d="
          M115 247
          C139 260 161 295 177 330
          C148 314 128 284 115 247
          Z
        "
        fill={`url(#${ids.greenBright})`}
        opacity="0.95"
      />

      {/* RIGHT LEAF: mirrored flourish */}
      <path
        d="
          M285 247
          C261 260 239 295 223 330
          C252 314 272 284 285 247
          Z
        "
        fill={`url(#${ids.greenBright})`}
        opacity="0.95"
      />

      {/* Fine leaf vein highlights */}
      <path
        d="M113 242 C138 269 158 302 176 330"
        stroke="#D9E7B0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M287 242 C262 269 242 302 224 330"
        stroke="#D9E7B0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* DNA GOLD STRAND */}
      <path
        d="
          M200 83
          C161 117 162 150 200 184
          C241 222 242 258 200 298
          C181 318 186 344 200 370
        "
        stroke={`url(#${ids.goldBright})`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* DNA GREEN STRAND */}
      <path
        d="
          M200 83
          C239 117 238 150 200 184
          C159 222 158 258 200 298
          C219 318 214 344 200 370
        "
        stroke={`url(#${ids.green})`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* DNA LADDER */}
      <g
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path
          d="M181 131 H219"
          stroke="#237348"
        />
        <path
          d="M182 150 H218"
          stroke="#D6AC4C"
        />
        <path
          d="M180 221 H220"
          stroke="#24784C"
        />
        <path
          d="M176 242 H224"
          stroke="#D6AC4C"
        />
        <path
          d="M182 261 H218"
          stroke="#237348"
        />
      </g>

      {/* Tapered base */}
      <path
        d="
          M200 357
          C195 371 195 381 200 396
          C205 381 205 371 200 357
          Z
        "
        fill={`url(#${ids.goldBright})`}
      />
    </svg>
  );
}
