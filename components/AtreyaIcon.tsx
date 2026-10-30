
import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const id = useId().replace(/:/g, "");

  const gold = `atreya-gold-${id}`;
  const goldLight = `atreya-gold-light-${id}`;
  const green = `atreya-green-${id}`;
  const greenLight = `atreya-green-light-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      role="img"
      aria-label="ATREYA Lotus and DNA emblem"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={gold}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#FFF1BE" />
          <stop offset="0.3" stopColor="#EFC76E" />
          <stop offset="0.65" stopColor="#D4A33B" />
          <stop offset="1" stopColor="#A86E20" />
        </linearGradient>

        <linearGradient
          id={goldLight}
          x1="0"
          y1="0"
          x2="0.8"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#FFF5D3" />
          <stop offset="0.45" stopColor="#E8B957" />
          <stop offset="1" stopColor="#BD842A" />
        </linearGradient>

        <linearGradient
          id={green}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#2C874D" />
          <stop offset="0.45" stopColor="#08633D" />
          <stop offset="1" stopColor="#003B27" />
        </linearGradient>

        <linearGradient
          id={greenLight}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#61A15C" />
          <stop offset="0.4" stopColor="#187548" />
          <stop offset="1" stopColor="#03452D" />
        </linearGradient>
      </defs>

      {/* GOLDEN ARCH */}
      <path
        d="M72 181 C73 109 113 59 174 38"
        stroke={`url(#${gold})`}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M226 38 C287 59 327 109 328 181"
        stroke={`url(#${gold})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* GOLDEN DROPLET */}
      <path
        d="
          M200 2
          C194 17 183 30 183 44
          C183 58 190 69 200 69
          C210 69 217 58 217 44
          C217 30 206 17 200 2
          Z
        "
        fill={`url(#${goldLight})`}
      />

      {/* LEFT OUTER PETAL */}
      <path
        d="
          M18 255
          C65 244 105 265 149 326
          C93 339 45 310 18 255
          Z
        "
        fill={`url(#${green})`}
      />

      {/* LEFT INNER PETAL */}
      <path
        d="
          M79 183
          C136 197 168 250 177 330
          C124 315 90 264 79 183
          Z
        "
        fill={`url(#${greenLight})`}
      />

      {/* RIGHT INNER PETAL */}
      <path
        d="
          M321 183
          C264 197 232 250 223 330
          C276 315 310 264 321 183
          Z
        "
        fill={`url(#${greenLight})`}
      />

      {/* RIGHT OUTER PETAL */}
      <path
        d="
          M382 255
          C335 244 295 265 251 326
          C307 339 355 310 382 255
          Z
        "
        fill={`url(#${green})`}
      />

      {/* LEAF VEINS */}
      <path
        d="M105 219 C135 253 156 293 174 322"
        stroke="#BFE3AF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M295 219 C265 253 244 293 226 322"
        stroke="#BFE3AF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* DNA HELIX: GOLD STRAND */}
      <path
        d="
          M200 79
          C167 116 161 144 200 184
          C239 224 239 258 200 300
          C182 321 185 344 200 372
        "
        stroke={`url(#${gold})`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* DNA HELIX: GREEN STRAND */}
      <path
        d="
          M200 79
          C233 116 239 144 200 184
          C161 224 161 258 200 300
          C218 321 215 344 200 372
        "
        stroke={`url(#${green})`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* DNA LADDER */}
      <g
        stroke="#075235"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M181 130 H219" />
        <path d="M180 148 H220" />
        <path d="M182 218 H218" />
        <path d="M176 236 H224" />
        <path d="M180 254 H220" />
      </g>

      {/* BOTTOM GOLD POINT */}
      <path
        d="M200 361 L206 381 L200 399 L194 381 Z"
        fill={`url(#${goldLight})`}
      />
    </svg>
  );
}
