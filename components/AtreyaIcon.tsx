import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const id = useId().replace(/:/g, "");
  const gold = `atreya-gold-${id}`;
  const greenOuter = `atreya-green-outer-${id}`;
  const greenInner = `atreya-green-inner-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
      role="img"
      aria-label="ATREYA Botanical DNA Emblem"
    >
      <defs>
        {/* Rich Golden Gradient */}
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#926018" />
        </linearGradient>

        {/* Deep Forest Green for Outer Leaves */}
        <linearGradient id={greenOuter} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B4226" />
          <stop offset="100%" stopColor="#042012" />
        </linearGradient>

        {/* Lighter Botanical Green for Inner Leaves */}
        <linearGradient id={greenInner} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#115E33" />
          <stop offset="100%" stopColor="#1E824C" />
        </linearGradient>
      </defs>

      {/* Golden Halo / Arch */}
      <path
        d="M130 220 C 130 110, 370 110, 370 220"
        fill="none"
        stroke={`url(#${gold})`}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Floating Golden Droplet (Top Center) */}
      <path
        d="M250 30 C 235 60, 230 75, 230 90 C 230 102, 239 110, 250 110 C 261 110, 270 102, 270 90 C 270 75, 265 60, 250 30 Z"
        fill={`url(#${gold})`}
      />

      {/* LEFT OUTER LEAF */}
      <path
        d="M60 280 C 80 230, 160 270, 190 350 C 130 360, 50 330, 60 280 Z"
        fill={`url(#${greenOuter})`}
      />
      
      {/* LEFT INNER LEAF */}
      <path
        d="M130 200 C 170 180, 220 270, 230 350 C 180 340, 110 270, 130 200 Z"
        fill={`url(#${greenInner})`}
      />
      {/* Left Inner Leaf Vein */}
      <path
        d="M165 240 C 185 270, 205 310, 215 340"
        fill="none"
        stroke="#A7F3D0"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* RIGHT INNER LEAF */}
      <path
        d="M370 200 C 330 180, 280 270, 270 350 C 320 340, 390 270, 370 200 Z"
        fill={`url(#${greenInner})`}
      />
      {/* Right Inner Leaf Vein */}
      <path
        d="M335 240 C 315 270, 295 310, 285 340"
        fill="none"
        stroke="#A7F3D0"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* RIGHT OUTER LEAF */}
      <path
        d="M440 280 C 420 230, 340 270, 310 350 C 370 360, 450 330, 440 280 Z"
        fill={`url(#${greenOuter})`}
      />

      {/* DNA HELIX: Gold Strand */}
      <path
        d="M250 120 C 190 160, 190 200, 250 240 C 310 280, 310 320, 250 360 C 230 375, 230 395, 250 420"
        fill="none"
        stroke={`url(#${gold})`}
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* DNA HELIX: Green Strand */}
      <path
        d="M250 120 C 310 160, 310 200, 250 240 C 190 280, 190 320, 250 360 C 270 375, 270 395, 250 420"
        fill="none"
        stroke={`url(#${greenInner})`}
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* DNA LADDER RUNGS */}
      <g stroke="#042012" strokeWidth="4" strokeLinecap="round">
        <line x1="230" y1="160" x2="270" y2="160" />
        <line x1="220" y1="185" x2="280" y2="185" />
        
        <line x1="230" y1="285" x2="270" y2="285" />
        <line x1="220" y1="310" x2="280" y2="310" />
      </g>
    </svg>
  );
}
