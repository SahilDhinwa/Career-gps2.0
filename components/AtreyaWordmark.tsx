
import React, { useId } from "react";

interface AtreyaWordmarkProps {
  className?: string;
}

export default function AtreyaWordmark({
  className = "w-[160px] sm:w-[205px] h-auto",
}: AtreyaWordmarkProps) {
  const id = useId().replace(/:/g, "");
  const gold = `wordmark-gold-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 620 145"
      className={`${className} overflow-visible`}
      fill="none"
      role="img"
      aria-label="ATREYA"
    >
      <defs>
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B88726" />
          <stop offset="50%" stopColor="#E3BD54" />
          <stop offset="100%" stopColor="#A87520" />
        </linearGradient>
      </defs>

      <g fill="currentColor">
        {/* A */}
        <path d="M6 105 L47 8 H58 L99 105 H83 L71 76 H31 L19 105 Z M36 65 H66 L51 28 Z" fillRule="evenodd" />
        <path d="M5 105 H31 V109 H5 Z M74 105 H101 V109 H74 Z" />

        {/* T */}
        <path d="M115 10 H214 V25 H209 C207 17 199 15 188 15 H174 V105 H189 V109 H143 V105 H158 V15 H141 C129 15 123 18 120 25 H115 Z" />

        {/* R */}
        <path d="M230 10 H274 C307 10 324 23 324 43 C324 61 311 73 292 77 L325 105 H337 V109 H306 L267 78 H253 V105 H268 V109 H230 V105 H239 V14 H230 Z M253 17 V71 H272 C295 71 308 61 308 44 C308 27 296 17 273 17 Z" fillRule="evenodd" />

        {/* E */}
        <path d="M349 10 H435 V29 H430 C427 18 421 16 407 16 H373 V55 H413 V49 H418 V67 H413 V61 H373 V103 H409 C423 103 430 99 433 88 H438 V109 H349 V105 H359 V14 H349 Z" />

        {/* Y */}
        <path d="M447 10 H485 V14 H475 L502 54 L529 14 H518 V10 H551 V14 H543 L510 64 V105 H525 V109 H480 V105 H495 V64 L458 14 H447 Z" />

        {/* A */}
        <path d="M530 105 L571 8 H582 L623 105 H607 L595 76 H555 L543 105 Z M560 65 H590 L575 28 Z" fillRule="evenodd" />
        <path d="M529 105 H554 V109 H529 Z M599 105 H625 V109 H599 Z" />
      </g>

      {/* Signature gold sweep beneath the R and E */}
      <path
        d="M275 119 C309 131 345 135 385 126 C357 131 322 127 294 118 Z"
        fill={`url(#${gold})`}
      />
    </svg>
  );
}
