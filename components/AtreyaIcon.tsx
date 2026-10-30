import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const rawId = useId().replace(/:/g, "");

  const goldGrad = `atreya-gold-${rawId}`;
  const goldLight = `atreya-gold-light-${rawId}`;
  const greenOuter = `atreya-green-outer-${rawId}`;
  const greenInner = `atreya-green-inner-${rawId}`;
  const greenHighlight = `atreya-green-hl-${rawId}`;
  const dnaGreen = `atreya-dna-green-${rawId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 420"
      fill="none"
      className={className}
      role="img"
      aria-label="ATREYA Lotus and DNA Science Emblem"
    >
      <defs>
        {/* Metallic Gold Gradient */}
        <linearGradient id={goldGrad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F9E498" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A6B13" />
        </linearGradient>

        {/* 3D Droplet Highlight Gradient */}
        <radialGradient id={goldLight} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF6CC" />
          <stop offset="45%" stopColor="#E5C158" />
          <stop offset="100%" stopColor="#9A6B13" />
        </radialGradient>

        {/* Rich Forest Green for Main Leaf Body */}
        <linearGradient id={greenOuter} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B8E4E" />
          <stop offset="55%" stopColor="#0E5A35" />
          <stop offset="100%" stopColor="#04331C" />
        </linearGradient>

        {/* Deeper Emerald for Outer Petals */}
        <linearGradient id={greenInner} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#26733D" />
          <stop offset="60%" stopColor="#0A472A" />
          <stop offset="100%" stopColor="#032615" />
        </linearGradient>

        {/* Bright Emerald Inner Leaf Fold (Matches Reference Two-Tone Leaf) */}
        <linearGradient id={greenHighlight} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#58B368" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0D5933" stopOpacity="0.95" />
        </linearGradient>

        {/* High-Contrast DNA Green (Visible on both Dark & Light Navbars) */}
        <linearGradient id={dnaGreen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E7E48" />
          <stop offset="50%" stopColor="#0A522E" />
          <stop offset="100%" stopColor="#042E19" />
        </linearGradient>
      </defs>

      {/* =======================================================
          1. GOLDEN CIRCULAR ARCH (Meets the upper inner leaves)
          ======================================================= */}
      <path
        d="M 78 175 A 128 128 0 0 1 174 52"
        stroke={`url(#${goldGrad})`}
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path
        d="M 226 52 A 128 128 0 0 1 322 175"
        stroke={`url(#${goldGrad})`}
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* =======================================================
          2. TOP 3D GOLDEN DROPLET
          ======================================================= */}
      <path
        d="M 200 6 C 189 26 179 38 179 52 C 179 65 188 75 200 75 C 212 75 221 65 221 52 C 221 38 211 26 200 6 Z"
        fill={`url(#${goldLight})`}
      />
      {/* Subtle 3D crescent reflection on left of droplet */}
      <path
        d="M 197 16 C 189 31 184 41 184 51 C 184 59 189 66 195 68 C 190 63 189 55 190 46 C 191 36 194 26 197 16 Z"
        fill="#FFFBEA"
        opacity="0.65"
      />

      {/* =======================================================
          3. OUTER LOTUS LEAVES (With crisp gap from inner leaves)
          ======================================================= */}
      {/* Left Outer Leaf */}
      <path
        d="M 20 250 C 56 240 102 258 140 310 C 154 329 164 345 170 356 C 110 360 52 322 20 250 Z"
        fill={`url(#${greenInner})`}
      />
      {/* Right Outer Leaf */}
      <path
        d="M 380 250 C 344 240 298 258 260 310 C 246 329 236 345 230 356 C 290 360 348 322 380 250 Z"
        fill={`url(#${greenInner})`}
      />

      {/* =======================================================
          4. TALL INNER LOTUS LEAVES (Two-Tone + Bright Vein)
          ======================================================= */}
      {/* Left Inner Leaf Base */}
      <path
        d="M 64 166 C 126 184 168 242 186 352 C 122 322 76 254 64 166 Z"
        fill={`url(#${greenOuter})`}
      />
      {/* Left Inner Leaf Two-Tone Inner Fold */}
      <path
        d="M 104 228 C 138 252 165 292 186 352 C 150 326 120 282 104 228 Z"
        fill={`url(#${greenHighlight})`}
      />
      {/* Left Inner Leaf Crisp Vein */}
      <path
        d="M 102 224 C 134 262 160 302 186 352"
        stroke="#D8F3DC"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Right Inner Leaf Base */}
      <path
        d="M 336 166 C 274 184 232 242 214 352 C 278 322 324 254 336 166 Z"
        fill={`url(#${greenOuter})`}
      />
      {/* Right Inner Leaf Two-Tone Inner Fold */}
      <path
        d="M 296 228 C 262 252 235 292 214 352 C 250 326 280 282 296 228 Z"
        fill={`url(#${greenHighlight})`}
      />
      {/* Right Inner Leaf Crisp Vein */}
      <path
        d="M 298 224 C 266 262 240 302 214 352"
        stroke="#D8F3DC"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* =======================================================
          5. DNA HELIX HORIZONTAL RUNGS (2 in Top Loop, 3 in Mid)
          ======================================================= */}
      <g stroke="#166534" strokeWidth="5.5" strokeLinecap="round">
        {/* Top Loop: 2 Rungs */}
        <line x1="184" y1="130" x2="216" y2="130" />
        <line x1="182" y1="152" x2="218" y2="152" />

        {/* Middle Loop: 3 Rungs */}
        <line x1="183" y1="216" x2="217" y2="216" />
        <line x1="178" y1="238" x2="222" y2="238" />
        <line x1="183" y1="260" x2="217" y2="260" />
      </g>

      {/* =======================================================
          6. TAPERED DNA HELIX RIBBONS (Gold & Green Intertwined)
          ======================================================= */}
      {/* Gold DNA Ribbon: Starts tapered at (198,92), curves left -> right -> left -> bottom nib */}
      <path
        d="M 199 92
           C 154 116, 152 162, 200 186
           C 242 208, 244 262, 200 294
           C 178 310, 178 342, 200 374
           L 204 390 L 200 412 L 196 390 L 200 374
           C 190 342, 190 316, 208 298
           C 256 262, 254 202, 200 176
           C 166 156, 168 122, 199 92 Z"
        fill={`url(#${goldGrad})`}
      />

      {/* Green DNA Ribbon: Starts needle-sharp at (201,78), curves right -> left -> right */}
      <path
        d="M 201 78
           C 206 96, 246 118, 242 150
           C 238 176, 212 184, 192 198
           C 152 222, 152 268, 198 298
           C 220 314, 222 342, 204 366
           C 214 342, 210 320, 192 304
           C 164 274, 166 228, 202 204
           C 224 188, 250 178, 252 148
           C 254 114, 212 94, 201 78 Z"
        fill={`url(#${dnaGreen})`}
        stroke="#4ADE80"
        strokeWidth="0.7"
        strokeOpacity="0.45"
      />
    </svg>
  );
}
