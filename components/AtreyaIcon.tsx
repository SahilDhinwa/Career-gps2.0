import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const id = useId().replace(/:/g, "");

  const tealId = `atreya-teal-${id}`;
  const leafId = `atreya-leaf-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 370 305"
      className={className}
      fill="none"
      role="img"
      aria-label="ATREYA botanical A emblem"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={tealId}
          x1="0.35"
          y1="0"
          x2="0.65"
          y2="1"
        >
          <stop offset="0%" stopColor="#149680" />
          <stop offset="48%" stopColor="#086D61" />
          <stop offset="100%" stopColor="#023B36" />
        </linearGradient>

        <linearGradient
          id={leafId}
          x1="0"
          y1="0.85"
          x2="0.95"
          y2="0.2"
        >
          <stop offset="0%" stopColor="#55AE54" />
          <stop offset="55%" stopColor="#7BC356" />
          <stop offset="85%" stopColor="#8BCE58" />
          <stop offset="100%" stopColor="#6BB955" />
        </linearGradient>
      </defs>

      {/* Upper body of the A */}
      <path
        d="
          M 55.5 222
          L 163 30.8
          C 170.5 17.4 177.5 15 187 15
          C 196.5 15 203.5 17.4 211 30.8
          L 274.5 143
          C 256 139.5 236 140 218.5 144.5
          L 187 88
          L 105.1 235
          C 87 235.5 69 231 55.5 222
          Z
        "
        fill={`url(#${tealId})`}
      />

      {/* Lower left terminal */}
      <path
        d="
          M 42.5 245.2
          C 56 255 72 261 89 263.8
          L 82.8 275
          C 76.6 286.1 68 291 56 291
          H 17
          L 42.5 245.2
          Z
        "
        fill={`url(#${tealId})`}
      />

      {/* Right leg */}
      <path
        d="
          M 282.3 157
          L 357 291
          H 318
          C 306 291 297.4 286.1 291.2 275
          L 252.2 205
          C 263.5 189 273.5 173 282.3 157
          Z
        "
        fill={`url(#${tealId})`}
      />

      {/* Botanical leaf and sweeping lower curve */}
      <path
        d="
          M 79 146
          C 45 158 18.5 181 18.5 207
          C 18.5 239 51 266.5 98 266.5
          C 148 266.5 198 242 235 204
          C 250 188.5 261 167 271 150.5
          C 242 146.5 208 149 179 164
          C 148 180 132 203 125 233
          C 145 215 178 191 214 178
          C 191 195 166 223 136 238
          C 122 245 109 246.5 96 246.5
          C 64 246.5 34 228 34 201
          C 34 179 52 159 79 146
          Z
        "
        fill={`url(#${leafId})`}
      />
    </svg>
  );
}
