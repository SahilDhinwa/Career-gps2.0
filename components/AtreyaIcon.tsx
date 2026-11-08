
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
  const highlightId = `atreya-highlight-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 310"
      className={className}
      fill="none"
      role="img"
      aria-label="ATREYA botanical A emblem"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={tealId}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#179B83" />
          <stop offset="48%" stopColor="#087568" />
          <stop offset="100%" stopColor="#00473F" />
        </linearGradient>

        <linearGradient
          id={leafId}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#9DD55A" />
          <stop offset="55%" stopColor="#68BE55" />
          <stop offset="100%" stopColor="#3FA95E" />
        </linearGradient>

        <linearGradient
          id={highlightId}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#B7E577" />
          <stop offset="100%" stopColor="#48A95B" />
        </linearGradient>
      </defs>

      {/* Geometric A: left structural stroke */}
      <path
        d="
          M 27 286
          L 142 39
          C 151 19 161 13 180 13
          C 198 13 208 21 218 40
          L 272 139
          C 249 135 227 135 208 139
          L 180 86
          L 92 286
          Z
        "
        fill={`url(#${tealId})`}
      />

      {/* Geometric A: right structural stroke */}
      <path
        d="
          M 233 150
          C 254 146 271 147 286 154
          L 337 286
          H 280
          L 244 202
          L 226 162
          Z
        "
        fill={`url(#${tealId})`}
      />

      {/* Inner crossbar, partially integrated with leaf */}
      <path
        d="
          M 167 150
          C 193 145 217 142 241 144
          L 254 173
          C 223 166 197 170 174 180
          Z
        "
        fill={`url(#${tealId})`}
      />

      {/* Leaf sweeping across the A */}
      <path
        d="
          M 25 151
          C 1 181 4 211 26 232
          C 52 258 91 260 131 248
          C 183 233 213 200 241 173
          C 258 157 275 146 298 137
          C 249 132 210 140 176 158
          C 141 176 122 207 89 223
          C 60 237 34 224 26 204
          C 17 183 22 164 25 151
          Z
        "
        fill={`url(#${leafId})`}
      />

      {/* Main botanical leaf blade */}
      <path
        d="
          M 105 232
          C 123 184 162 153 208 144
          C 237 138 266 138 295 139
          C 267 151 247 168 226 190
          C 194 223 153 244 105 232
          Z
        "
        fill={`url(#${highlightId})`}
      />

      {/* Fine leaf vein */}
      <path
        d="
          M 106 232
          C 151 211 181 181 225 158
          C 246 148 267 143 291 140
        "
        stroke="#D5F4B4"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
