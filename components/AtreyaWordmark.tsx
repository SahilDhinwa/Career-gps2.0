import React, { useId } from "react";

interface AtreyaWordmarkProps {
  className?: string;
}

export default function AtreyaWordmark({
  className = "w-72 sm:w-80 h-auto",
}: AtreyaWordmarkProps) {
  const rawId = useId().replace(/:/g, "");
  const goldTextGrad = `atreya-wordmark-gold-${rawId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 130"
      fill="none"
      className={className}
      role="img"
      aria-label="ATREYA Medicine & Science Wordmark"
    >
      <defs>
        <linearGradient id={goldTextGrad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F9E498" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A6B13" />
        </linearGradient>
      </defs>

      {/* =======================================================
          MAIN "ATREYA" LETTERFORMS (Cinzel Serif Style + Leaf A's)
          ======================================================= */}
      <g fill="#FFFFFF">
        {/* Letter A (1) with Leaf Crossbar */}
        <path d="M 42 12 L 68 80 L 55 80 L 49 63 L 29 63 L 23 80 L 10 80 L 36 12 Z M 39 37 L 31 54 L 47 54 Z" />
        {/* Leaf Accent across Crossbar of A(1) */}
        <path d="M 33 53 C 36 49, 42 49, 45 53 C 42 57, 36 57, 33 53 Z" fill="#26733D" />

        {/* Letter T */}
        <path d="M 76 12 L 126 12 L 126 23 L 107 23 L 107 80 L 95 80 L 95 23 L 76 23 Z" />

        {/* Letter R (With Connected Sweeping Tail) */}
        <path d="M 136 12 L 175 12 C 196 12, 204 26, 204 42 C 204 57, 193 72, 172 75 L 202 80 L 188 80 L 165 47 L 148 47 L 148 80 L 136 80 Z M 148 23 L 148 37 L 173 37 C 185 37, 192 31, 192 42 C 192 53, 184 47, 173 47 L 148 47 Z" />

        {/* Letter E */}
        <path d="M 215 12 L 273 12 L 273 23 L 227 23 L 227 41 L 268 41 L 268 52 L 227 52 L 227 69 L 274 69 L 274 80 L 215 80 Z" />

        {/* Letter Y */}
        <path d="M 284 12 L 298 12 L 319 45 L 340 12 L 354 12 L 328 50 L 328 80 L 310 80 L 310 50 Z" />

        {/* Letter A (2) with Leaf Crossbar */}
        <path d="M 395 12 L 421 80 L 408 80 L 402 63 L 382 63 L 376 80 L 363 80 L 389 12 Z M 392 37 L 384 54 L 400 54 Z" />
        {/* Leaf Accent across Crossbar of A(2) */}
        <path d="M 386 53 C 389 49, 395 49, 398 53 C 395 57, 389 57, 386 53 Z" fill="#26733D" />
      </g>

      {/* Sweeping Golden Calligraphic Flourish Underneath 'RE' */}
      <path
        d="M 148 88 C 175 106, 220 110, 265 98 C 220 102, 178 98, 148 88 Z"
        fill={`url(#${goldTextGrad})`}
      />

      {/* =======================================================
          SUB-TAGLINE: MEDICINE & SCIENCE
          ======================================================= */}
      <text
        x="260"
        y="115"
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="0.25em"
        textAnchor="middle"
        fontFamily="var(--font-cinzel), 'Cinzel', serif"
        fill={`url(#${goldTextGrad})`}
      >
        MEDICINE &amp; SCIENCE
      </text>

      {/* Flanking Gold Dividing Lines */}
      <line x1="35" y1="111" x2="115" y2="111" stroke={`url(#${goldTextGrad})`} strokeWidth="1.2" />
      <line x1="405" y1="111" x2="485" y2="111" stroke={`url(#${goldTextGrad})`} strokeWidth="1.2" />

      {/* Centered Gold Diamond */}
      <polygon points="260,123 264,127 260,131 256,127" fill={`url(#${goldTextGrad})`} />
    </svg>
  );
}
