
import React, { useId } from "react";

interface OmAtreyaIconProps {
  className?: string;
  background?: boolean;
}

export default function OmAtreyaIcon({
  className = "w-12 h-12",
  background = true,
}: OmAtreyaIconProps) {
  const uid = useId().replace(/:/g, "");
  const goldId = `icon-gold-${uid}`;
  const greenId = `icon-green-${uid}`;

  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ॐATREYA botanical icon"
    >
      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF1BC" />
          <stop offset=".5" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#99661F" />
        </linearGradient>

        <linearGradient id={greenId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B5E890" />
          <stop offset=".5" stopColor="#238B4D" />
          <stop offset="1" stopColor="#07502D" />
        </linearGradient>
      </defs>

      {background && (
        <rect
          width="128"
          height="128"
          rx="26"
          fill="#082B1C"
          stroke="#D4AF37"
          strokeOpacity=".4"
          strokeWidth="2"
        />
      )}

      {/* Om */}
      <text
        x="9"
        y="101"
        fontSize="90"
        fontWeight="600"
        fontFamily="'Noto Serif Devanagari', 'Nirmala UI', serif"
        fill={`url(#${goldId})`}
      >
        ॐ
      </text>

      {/* Letter A */}
      <text
        x="70"
        y="100"
        fontSize="65"
        fontWeight="600"
        fontFamily="'Cinzel', Georgia, serif"
        fill={`url(#${goldId})`}
      >
        A
      </text>

      {/* Leaf */}
      <path
        d="M76 43 C81 21 101 15 119 11 C115 34 99 48 76 43Z"
        fill={`url(#${greenId})`}
        stroke="#D4AF37"
        strokeWidth="1.2"
      />

      <path
        d="M75 48 C89 34 103 23 116 14"
        fill="none"
        stroke="#E6E9A5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M75 48 C71 55 69 60 68 67"
        fill="none"
        stroke={`url(#${goldId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
