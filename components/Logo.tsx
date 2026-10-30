
import Link from "next/link";
import React, { useId } from "react";

interface OmAtreyaLogoProps {
  className?: string;
  showTagline?: boolean;
  href?: string;
}

export default function OmAtreyaLogo({
  className = "w-[220px] sm:w-[280px]",
  showTagline = true,
  href = "/",
}: OmAtreyaLogoProps) {
  const uid = useId().replace(/:/g, "");
  const goldId = `om-gold-${uid}`;
  const greenId = `om-green-${uid}`;

  return (
    <Link
      href={href}
      aria-label="ATREYA Medicine and Science — Home"
      className={`group inline-block shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md ${className}`}
    >
      <svg
        viewBox={showTagline ? "0 0 640 180" : "0 0 640 135"}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="ॐATREYA Medicine and Science"
      >
        <defs>
          <linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF4CE" />
            <stop offset="32%" stopColor="#E9C56B" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#94601D" />
          </linearGradient>

          <linearGradient id={greenId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A9E78A" />
            <stop offset="45%" stopColor="#248A48" />
            <stop offset="100%" stopColor="#064B2A" />
          </linearGradient>
        </defs>

        {/* Sacred ॐ */}
        <text
          x="8"
          y="118"
          fontSize="115"
          fontWeight="600"
          fontFamily="'Noto Serif Devanagari', 'Nirmala UI', serif"
          fill={`url(#${goldId})`}
        >
          ॐ
        </text>

        {/* ATREYA wordmark */}
        <text
          x="142"
          y="113"
          fontSize="101"
          fontWeight="500"
          letterSpacing="-2"
          fontFamily="'Cinzel', Georgia, serif"
          fill={`url(#${goldId})`}
          textLength="487"
          lengthAdjust="spacingAndGlyphs"
        >
          ATREYA
        </text>

        {/* Botanical stem */}
        <path
          d="M161 79 C166 61 177 49 193 39 C207 30 219 18 230 8"
          fill="none"
          stroke={`url(#${goldId})`}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Main leaf */}
        <path
          d="M190 40 C195 18 215 9 248 3 C243 32 224 48 190 40Z"
          fill={`url(#${greenId})`}
          stroke="#D4AF37"
          strokeWidth="1.5"
        />

        {/* Leaf veins */}
        <path
          d="M191 40 C208 30 227 17 245 6"
          fill="none"
          stroke="#E6E7A5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M209 29 L208 18 M220 22 L231 28 M230 15 L229 9"
          fill="none"
          stroke="#D7E6A1"
          strokeWidth="1"
          opacity=".8"
        />

        {/* Smaller leaf */}
        <path
          d="M168 65 C174 51 186 49 199 50 C190 64 180 69 168 65Z"
          fill={`url(#${greenId})`}
          stroke="#D4AF37"
          strokeWidth="1"
        />

        {showTagline && (
          <g>
            <line
              x1="140"
              y1="147"
              x2="185"
              y2="147"
              stroke={`url(#${goldId})`}
              strokeWidth="1.5"
            />

            <text
              x="385"
              y="151"
              fontSize="23"
              letterSpacing="5"
              textAnchor="middle"
              fontWeight="500"
              fontFamily="Arial, sans-serif"
              fill={`url(#${goldId})`}
            >
              MEDICINE &amp; SCIENCE
            </text>

            <line
              x1="585"
              y1="147"
              x2="630"
              y2="147"
              stroke={`url(#${goldId})`}
              strokeWidth="1.5"
            />

            <path
              d="M385 163 L390 169 L385 175 L380 169Z"
              fill={`url(#${goldId})`}
            />
          </g>
        )}
      </svg>
    </Link>
  );
}
