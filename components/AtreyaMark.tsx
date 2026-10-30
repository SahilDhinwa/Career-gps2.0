
import React from "react";

interface AtreyaMarkProps {
  className?: string;
  idPrefix?: string;
}

export default function AtreyaMark({
  className = "w-12 h-12",
  idPrefix = "atreya-mark",
}: AtreyaMarkProps) {
  const gold = `${idPrefix}-gold`;
  const green = `${idPrefix}-green`;

  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="आTREYA botanical emblem"
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#926018" />
        </linearGradient>
        <linearGradient id={green} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9AE6A0" />
          <stop offset="50%" stopColor="#168A49" />
          <stop offset="100%" stopColor="#07532E" />
        </linearGradient>
      </defs>

      {/* Devanagari आ */}
      <text
        x="8"
        y="95"
        fontSize="91"
        fontWeight="700"
        fontFamily="'Noto Serif Devanagari', 'Nirmala UI', serif"
        fill={`url(#${gold})`}
      >
        आ
      </text>

      {/* Botanical leaf */}
      <path
        d="M72 35 C78 11 100 8 113 5 C109 31 94 47 72 35Z"
        fill={`url(#${green})`}
        stroke="#D4AF37"
        strokeWidth="1.4"
      />
      <path
        d="M70 49 C78 32 91 22 108 11"
        stroke="#E8D78B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M86 29 L84 18 M94 23 L104 26 M79 36 L91 39"
        stroke="#D6EDB1"
        strokeWidth="1"
        opacity="0.7"
      />

      {/* Leaf stem */}
      <path
        d="M70 49 C66 56 64 62 63 72"
        stroke={`url(#${gold})`}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
