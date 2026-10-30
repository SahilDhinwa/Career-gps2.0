
import React, { useId } from "react";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  const id = useId().replace(/:/g, "");
  const gold = `atreya-gold-${id}`;
  const green = `atreya-green-${id}`;
  const lightGreen = `atreya-light-green-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      role="img"
      aria-label="ATREYA Lotus and DNA emblem"
    >
      <defs>
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0B8" />
          <stop offset="35%" stopColor="#EFC66D" />
          <stop offset="70%" stopColor="#D4A135" />
          <stop offset="100%" stopColor="#B57A20" />
        </linearGradient>

        <linearGradient id={green} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#317D3E" />
          <stop offset="45%" stopColor="#07522F" />
          <stop offset="100%" stopColor="#00391F" />
        </linearGradient>

        <linearGradient
          id={lightGreen}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#438C45" />
          <stop offset="100%" stopColor="#00452B" />
        </linearGradient>
      </defs>

      {/* Golden arch */}
      <path
        d="M67 183 C66 100 112 58 173 36"
        stroke={`url(#${gold})`}
        strokeWidth="9"
        strokeLinecap="butt"
      />
      <path
        d="M227 36 C288 58 334 100 333 183"
        stroke={`url(#${gold})`}
        strokeWidth="9"
        strokeLinecap="butt"
      />

      {/* Golden droplet */}
      <path
        d="M200 0 C193 18 182 29 182 45 C182 60 190 71 200 71 C210 71 218 60 218 45 C218 29 207 18 200 0Z"
        fill={`url(#${gold})`}
      />

      {/* Outer left lotus petal */}
      <path
        d="M17 261 C60 249 99 262 145 328 C88 339 43 312 17 261Z"
        fill={`url(#${green})`}
      />

      {/* Inner left lotus petal */}
      <path
        d="M78 184 C135 193 166 253 174 329 C121 314 87 261 78 184Z"
        fill={`url(#${lightGreen})`}
      />

      {/* Outer right lotus petal */}
      <path
        d="M383 261 C340 249 301 262 255 328 C312 339 357 312 383 261Z"
        fill={`url(#${green})`}
      />

      {/* Inner right lotus petal */}
      <path
        d="M322 184 C265 193 234 253 226 329 C279 314 313 261 322 184Z"
        fill={`url(#${lightGreen})`}
      />

      {/* Inner leaf veins */}
      <path
        d="M110 227 C136 260 153 291 171 321"
        stroke="#C0D6A0"
        strokeWidth="2"
        opacity=".75"
      />
      <path
        d="M290 227 C264 260 247 291 229 321"
        stroke="#C0D6A0"
        strokeWidth="2"
        opacity=".75"
      />

      {/* DNA strands */}
      <path
        d="M200 79
           C166 119 160 144 200 185
           C240 226 239 257 200 300
           C181 322 184 343 200 375"
        stroke={`url(#${gold})`}
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M200 79
           C234 119 240 144 200 185
           C160 226 161 257 200 300
           C219 322 216 343 200 375"
        stroke={`url(#${green})`}
        strokeWidth="11"
        strokeLinecap="round"
      />

      {/* DNA rungs */}
      <g
        stroke="#07522F"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M177 132 H223" />
        <path d="M180 148 H220" />
        <path d="M182 219 H218" />
        <path d="M176 236 H224" />
        <path d="M180 253 H220" />
      </g>

      {/* Finishing tip */}
      <path
        d="M200 364 L205 381 L200 398 L195 381Z"
        fill={`url(#${gold})`}
      />
    </svg>
  );
}
