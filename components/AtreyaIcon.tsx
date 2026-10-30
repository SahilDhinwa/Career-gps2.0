
import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const id = useId().replace(/:/g, "");

  const green = `atreya-green-${id}`;
  const gold = `atreya-gold-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 420"
      fill="none"
      className={className}
      role="img"
      aria-label="ATREYA Lotus and Science emblem"
    >
      <defs>
        <linearGradient id={green} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#26783B" />
          <stop offset="50%" stopColor="#07522F" />
          <stop offset="100%" stopColor="#00351F" />
        </linearGradient>

        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBE29A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B67A18" />
        </linearGradient>
      </defs>

      {/* Golden arch */}
      <path
        d="M65 195 C60 105 115 52 175 37"
        stroke={`url(#${gold})`}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M225 37 C285 52 340 105 335 195"
        stroke={`url(#${gold})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Top golden droplet */}
      <path
        d="M200 0 C190 20 180 30 180 45 C180 60 189 70 200 70 C211 70 220 60 220 45 C220 30 210 20 200 0Z"
        fill={`url(#${gold})`}
      />

      {/* Left outer petal */}
      <path
        d="M24 258 C65 245 111 260 151 326 C94 334 46 308 24 258Z"
        fill={`url(#${green})`}
      />

      {/* Left inner petal */}
      <path
        d="M85 190 C143 205 164 257 175 326 C121 310 93 261 85 190Z"
        fill={`url(#${green})`}
      />

      {/* Right inner petal */}
      <path
        d="M315 190 C257 205 236 257 225 326 C279 310 307 261 315 190Z"
        fill={`url(#${green})`}
      />

      {/* Right outer petal */}
      <path
        d="M376 258 C335 245 289 260 249 326 C306 334 354 308 376 258Z"
        fill={`url(#${green})`}
      />

      {/* Petal veins */}
      <path
        d="M109 222 C132 256 151 284 173 319"
        stroke="#B6D9A2"
        strokeWidth="2"
        opacity="0.7"
      />
      <path
        d="M291 222 C268 256 249 284 227 319"
        stroke="#B6D9A2"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* DNA helix: gold strand */}
      <path
        d="M200 78
           C150 123 150 150 200 190
           C250 230 250 265 200 308
           C175 330 176 350 200 390"
        stroke={`url(#${gold})`}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* DNA helix: green strand */}
      <path
        d="M200 78
           C250 123 250 150 200 190
           C150 230 150 265 200 308
           C225 330 224 350 200 390"
        stroke={`url(#${green})`}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* DNA ladder */}
      {[
        { x1: 182, x2: 218, y: 133 },
        { x1: 176, x2: 224, y: 158 },
        { x1: 182, x2: 218, y: 225 },
        { x1: 176, x2: 224, y: 251 },
        { x1: 186, x2: 214, y: 278 },
      ].map((line) => (
        <line
          key={line.y}
          x1={line.x1}
          y1={line.y}
          x2={line.x2}
          y2={line.y}
          stroke="#07522F"
          strokeWidth="5"
          strokeLinecap="round"
        />
      ))}

      {/* Bottom point */}
      <path
        d="M200 365 L205 392 L200 410 L195 392Z"
        fill={`url(#${gold})`}
      />
    </svg>
  );
}
