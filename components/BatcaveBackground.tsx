
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const BAT_PATH =
  "M 320 483 C 350 390, 428 292, 562 244 C 550 278, 576 312, 616 330 C 651 346, 688 349, 721 345 L 736 276 L 754 310 L 768 307 L 782 310 L 800 276 L 815 345 C 848 349, 885 346, 920 330 C 960 312, 986 278, 974 244 C 1108 292, 1186 390, 1216 483 C 1176 445, 1131 411, 1087 408 C 1051 407, 1032 432, 1027 469 C 986 448, 946 440, 908 445 C 844 452, 793 503, 768 592 C 743 503, 692 452, 628 445 C 590 440, 550 448, 509 469 C 504 432, 485 407, 449 408 C 405 411, 360 445, 320 483 Z";

export default function BatcaveBackground() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isBatman =
    theme === "batman" ||
    resolvedTheme === "batman";

  if (!mounted || !isBatman) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-50] flex select-none items-center justify-center overflow-hidden bg-black"
      aria-hidden="true"
    >
      {/* STATIC BACKGROUND ATMOSPHERE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, #170505 0%, #080202 45%, #000000 85%)",
        }}
      />

      {/* STATIC BATCOMPUTER SCENE */}
      <div className="relative z-10 flex h-full w-full max-w-[1380px] items-center justify-center px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1536 864"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full scale-[1.45] object-contain sm:scale-[1.2] md:scale-100"
        >
          <defs>
            {/* STATIC SMOKE MASK */}
            <radialGradient
              id="batcave-smoke-mask"
              cx="50%"
              cy="46%"
              r="34%"
            >
              <stop
                offset="0%"
                stopColor="#ffffff"
                stopOpacity="1"
              />
              <stop
                offset="55%"
                stopColor="#ffffff"
                stopOpacity="0.4"
              />
              <stop
                offset="85%"
                stopColor="#000000"
                stopOpacity="0"
              />
              <stop
                offset="100%"
                stopColor="#000000"
                stopOpacity="0"
              />
            </radialGradient>

            <mask id="batcave-center-mask">
              <rect
                width="1536"
                height="864"
                fill="url(#batcave-smoke-mask)"
              />
            </mask>

            {/* LIGHTWEIGHT STATIC GLOW */}
            <filter
              id="batcave-red-bloom"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur
                stdDeviation="12"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="batcave-hud-glow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur
                stdDeviation="3"
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient
              id="batcave-core-fill"
              cx="50%"
              cy="45%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="#110707"
              />
              <stop
                offset="65%"
                stopColor="#060303"
              />
              <stop
                offset="100%"
                stopColor="#020101"
              />
            </radialGradient>

            <path
              id="batcave-outline"
              d={BAT_PATH}
            />
          </defs>

          {/* STATIC TACTICAL HUD GRID */}
          <g
            stroke="#4a0c0c"
            strokeWidth="1"
            opacity="0.4"
          >
            <line x1="80" y1="230" x2="1456" y2="230" strokeOpacity="0.25" />
            <line x1="80" y1="310" x2="1456" y2="310" strokeOpacity="0.35" />
            <line x1="80" y1="472" x2="1456" y2="472" strokeOpacity="0.5" />
            <line x1="80" y1="634" x2="1456" y2="634" strokeOpacity="0.25" />
            <line x1="80" y1="714" x2="1456" y2="714" strokeOpacity="0.2" />

            <line x1="142" y1="60" x2="142" y2="800" strokeOpacity="0.45" />
            <line x1="285" y1="140" x2="285" y2="720" strokeOpacity="0.3" />
            <line x1="1251" y1="140" x2="1251" y2="720" strokeOpacity="0.3" />
            <line x1="1394" y1="60" x2="1394" y2="800" strokeOpacity="0.45" />

            <circle cx="142" cy="310" r="2.5" fill="#991515" />
            <circle cx="142" cy="472" r="3" fill="#cc1919" />
            <circle cx="285" cy="472" r="2" fill="#801515" />
            <circle cx="1251" cy="472" r="2" fill="#801515" />
            <circle cx="1394" cy="310" r="2.5" fill="#991515" />
            <circle cx="1394" cy="472" r="3" fill="#cc1919" />
          </g>

          {/* STATIC HORIZONTAL SCANLINE */}
          <line
            x1="142"
            y1="120"
            x2="1394"
            y2="120"
            stroke="#ff1a1a"
            strokeWidth="1"
            strokeDasharray="12 8"
            opacity="0.25"
          />

          {/* STATIC HUD LABELS */}
          <g
            fontFamily="monospace"
            fontSize="11"
            fill="#cc2929"
            opacity="0.7"
          >
            <text
              x="154"
              y="155"
              letterSpacing="2"
            >
              BATCOMPUTER // ONLINE
            </text>

            <text
              x="154"
              y="172"
              fontSize="9"
              fill="#7a2020"
              letterSpacing="1.5"
            >
              ATREYA MED // DARK INTERFACE
            </text>

            <text
              x="1380"
              y="155"
              textAnchor="end"
              letterSpacing="2"
            >
              SYSTEM // STANDBY
            </text>

            <rect
              x="1388"
              y="180"
              width="4"
              height="500"
              fill="#2a0707"
              rx="2"
            />

            <rect
              x="1388"
              y="180"
              width="4"
              height="160"
              fill="#b91c1c"
              rx="2"
            />
          </g>

          {/* STATIC TARGET RINGS */}
          <g>
            <circle
              cx="768"
              cy="415"
              r="310"
              fill="none"
              stroke="#5c0d0d"
              strokeWidth="1.5"
              strokeDasharray="24 14 6 14"
              opacity="0.5"
            />

            <circle
              cx="768"
              cy="415"
              r="330"
              fill="none"
              stroke="#3d0808"
              strokeWidth="1"
              strokeDasharray="4 18"
              opacity="0.4"
            />

            <circle
              cx="768"
              cy="415"
              r="235"
              fill="none"
              stroke="#991414"
              strokeWidth="2"
              strokeDasharray="45 25 10 25"
              opacity="0.45"
            />

            <line
              x1="768"
              y1="165"
              x2="768"
              y2="185"
              stroke="#ff2a2a"
              strokeWidth="2"
              opacity="0.6"
            />

            <line
              x1="768"
              y1="645"
              x2="768"
              y2="665"
              stroke="#ff2a2a"
              strokeWidth="2"
              opacity="0.6"
            />
          </g>

          {/* LIGHTWEIGHT STATIC SMOKE */}
          <g mask="url(#batcave-center-mask)">
            <ellipse
              cx="768"
              cy="410"
              rx="460"
              ry="210"
              fill="#2b0404"
              filter="url(#batcave-red-bloom)"
              opacity="0.5"
            />

            <ellipse
              cx="640"
              cy="390"
              rx="280"
              ry="110"
              fill="#441010"
              opacity="0.16"
            />

            <ellipse
              cx="900"
              cy="440"
              rx="300"
              ry="130"
              fill="#300909"
              opacity="0.14"
            />
          </g>

          {/* ORIGINAL BAT SHAPE - UNCHANGED */}
          <g>
            <use
              href="#batcave-outline"
              fill="none"
              stroke="#990005"
              strokeWidth="22"
              opacity="0.45"
              filter="url(#batcave-red-bloom)"
            />

            <use
              href="#batcave-outline"
              fill="url(#batcave-core-fill)"
            />

            <use
              href="#batcave-outline"
              fill="none"
              stroke="#cc1414"
              strokeWidth="1.2"
              opacity="0.7"
              transform="translate(0, 3) scale(0.992)"
              style={{
                transformOrigin: "768px 415px",
              }}
            />

            <use
              href="#batcave-outline"
              fill="none"
              stroke="#ff2200"
              strokeWidth="9"
              opacity="0.4"
              filter="url(#batcave-red-bloom)"
            />

            <use
              href="#batcave-outline"
              fill="none"
              stroke="#ff1e1e"
              strokeWidth="3"
              strokeLinejoin="round"
              filter="url(#batcave-hud-glow)"
            />

            <use
              href="#batcave-outline"
              fill="none"
              stroke="#ffdede"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </g>

          {/* STATIC EMBERS */}
          <g filter="url(#batcave-hud-glow)">
            <ellipse cx="182" cy="542" rx="4.5" ry="2" transform="rotate(-28 182 542)" fill="#ff451a" opacity="0.9" />
            <ellipse cx="212" cy="605" rx="5.5" ry="2.2" transform="rotate(35 212 605)" fill="#ff5c26" opacity="0.85" />
            <circle cx="242" cy="488" r="2.2" fill="#ff7b47" opacity="0.8" />
            <circle cx="275" cy="638" r="2.8" fill="#ff3311" opacity="0.75" />
            <ellipse cx="322" cy="665" rx="4" ry="1.6" transform="rotate(20 322 665)" fill="#ff6633" opacity="0.85" />
            <circle cx="435" cy="492" r="2" fill="#ff884d" opacity="0.7" />
            <circle cx="496" cy="240" r="2.2" fill="#ff5522" opacity="0.8" />
            <ellipse cx="898" cy="645" rx="5" ry="1.8" transform="rotate(-55 898 645)" fill="#ff6b35" opacity="0.95" />
            <circle cx="942" cy="562" r="2.2" fill="#ff8552" opacity="0.85" />
            <circle cx="1062" cy="252" r="2" fill="#ff7744" opacity="0.75" />
            <circle cx="1152" cy="392" r="2.6" fill="#ff4411" opacity="0.8" />
            <circle cx="1142" cy="542" r="2.5" fill="#ff5522" opacity="0.85" />
            <ellipse cx="1220" cy="618" rx="4.2" ry="1.8" transform="rotate(-25 1220 618)" fill="#ff4818" opacity="0.9" />
            <circle cx="1256" cy="336" r="2.4" fill="#ff5522" opacity="0.8" />
            <circle cx="1312" cy="442" r="2" fill="#ff6633" opacity="0.75" />
          </g>
        </svg>
      </div>

      {/* PERMANENT STATIC BATMOBILE SILHOUETTE */}
      <div className="absolute bottom-[-14px] left-1/2 z-20 -translate-x-1/2 opacity-35">
        <svg
          viewBox="0 0 500 150"
          className="w-[280px] drop-shadow-[0_0_12px_rgba(255,30,30,0.25)] md:w-[450px] lg:w-[600px]"
        >
          <path
            d="M 20 140 A 30 30 0 0 1 100 140 Z"
            fill="#020202"
          />

          <path
            d="M 400 140 A 30 30 0 0 1 480 140 Z"
            fill="#020202"
          />

          <path
            d="M 50 110 L 60 85 L 120 70 L 150 65 L 180 40 L 220 35 L 250 25 L 300 25 L 330 35 L 360 40 L 390 65 L 420 70 L 460 85 L 470 110 Z"
            fill="#050101"
          />

          <path
            d="M 180 40 L 220 35 L 250 25 L 300 25 L 330 35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.65"
          />

          <path
            d="M 120 70 L 150 65 L 180 40"
            fill="none"
            stroke="#ff3333"
            strokeWidth="1.8"
            opacity="0.7"
          />

          <ellipse
            cx="462"
            cy="94"
            rx="10"
            ry="3.5"
            fill="#ff1a1a"
            opacity="0.85"
          />

          <ellipse
            cx="56"
            cy="96"
            rx="8"
            ry="3"
            fill="#ff3300"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
}
