"use client";

import { useEffect } from "react";

interface CinematicIntroProps {
  isActive: boolean;
  mode: "standard" | "batman";
}

export default function CinematicIntro({ isActive, mode }: CinematicIntroProps) {
  useEffect(() => {
    if (isActive) {
      const audioPath = mode === "batman" ? "/sounds/batman-boom.mp3" : "/sounds/vg-chime.mp3";
      const audio = new Audio(audioPath);
      audio.volume = 0.7;
      audio.play().catch((e) => console.warn("Audio playback blocked:", e));
    }
  }, [isActive, mode]);

  if (!isActive) return null;

  if (mode === "batman") {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#020202] flex items-center justify-center overflow-hidden font-mono select-none">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bat-boot-sequence {
            0% { opacity: 0; transform: scale(0.92); filter: blur(15px); }
            15% { opacity: 1; transform: scale(1); filter: blur(0px); }
            80% { opacity: 1; transform: scale(1); filter: blur(0px); }
            100% { opacity: 0; transform: scale(1.08); filter: blur(10px); }
          }
          @keyframes terminal-typing {
            0% { opacity: 1; content: "INITIALIZING SECTOR V-G..."; }
            25% { content: "ESTABLISHING SECURE PROTOCOLS..."; }
            50% { content: "DECRYPTING PRIVATE VAULT..."; }
            75% { content: "ACCESS GRANTED. BOOT COMPLETE."; }
            100% { opacity: 0; content: "ACCESS GRANTED. BOOT COMPLETE."; }
          }
          @keyframes bar-fill {
            0% { width: 0px; }
            100% { width: 236px; }
          }
          .animate-master-boot {
            animation: bat-boot-sequence 5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          .dynamic-terminal::after {
            content: "";
            animation: terminal-typing 4.2s steps(1) forwards;
          }
          .dynamic-bar {
            animation: bar-fill 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}} />

        {/* Master SVG Composition (Watermark removed, fully responsive layout) */}
        <div className="w-full h-full flex items-center justify-center animate-master-boot">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1536 864" 
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover"
          >
            <defs>
              <radialGradient id="bg" cx="50%" cy="46%" r="68%">
                <stop offset="0" stopColor="#251011"/>
                <stop offset=".42" stopColor="#0b0809"/>
                <stop offset="1" stopColor="#020202"/>
              </radialGradient>
              <radialGradient id="smoke" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#8a4545" stopOpacity=".38"/>
                <stop offset=".55" stopColor="#4a292b" stopOpacity=".17"/>
                <stop offset="1" stopColor="#120d0e" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="batStroke" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffb1a9"/>
                <stop offset=".38" stopColor="#ff514a"/>
                <stop offset="1" stopColor="#ff1e24"/>
              </linearGradient>
              <linearGradient id="barFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ff5c5c"/>
                <stop offset="1" stopColor="#e93236"/>
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur"/>
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.8  0 0.1 0 0 0.02  0 0 0.1 0 0.02  0 0 0 1 0" result="redblur"/>
                <feMerge><feMergeNode in="redblur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="15"/>
              </filter>
              <filter id="grain">
                <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="14"/>
                <feColorMatrix values=".3 0 0 0 .1 .3 0 0 0 .08 .3 0 0 0 .08 0 0 0 .13 0"/>
              </filter>
              <pattern id="grid" width="108" height="108" patternUnits="userSpaceOnUse">
                <path d="M108 0H0V108" fill="none" stroke="#aa3d3d" strokeWidth="1" opacity=".23"/>
              </pattern>
              <clipPath id="frame"><rect width="1536" height="864"/></clipPath>
            </defs>
            <g clipPath="url(#frame)">
              <rect width="1536" height="864" fill="#000"/>
              <rect x="143" y="46" width="1250" height="722" fill="url(#bg)"/>
              <rect x="143" y="46" width="1250" height="722" fill="url(#grid)" opacity=".8"/>
              <ellipse cx="768" cy="400" rx="570" ry="310" fill="url(#smoke)"/>
              <ellipse cx="550" cy="315" rx="190" ry="130" fill="#733b3d" opacity=".14" filter="url(#softGlow)"/>
              <ellipse cx="1005" cy="354" rx="210" ry="125" fill="#6c3033" opacity=".15" filter="url(#softGlow)"/>
              <rect x="143" y="46" width="1250" height="722" filter="url(#grain)" opacity=".5"/>
              
              {/* Fine background sparks */}
              <g fill="#ff583d">
                <circle cx="519" cy="117" r="2.2"/><circle cx="388" cy="190" r="2.4"/>
                <circle cx="1004" cy="139" r="2.1"/><circle cx="1057" cy="130" r="2.4"/>
                <circle cx="1087" cy="150" r="1.7"/><circle cx="1160" cy="96" r="1.5"/>
                <circle cx="1213" cy="111" r="1.6"/><circle cx="1252" cy="146" r="1.4"/>
                <circle cx="1283" cy="173" r="1.8"/><circle cx="1148" cy="218" r="2.6"/>
                <circle cx="1310" cy="244" r="2.1"/><circle cx="1373" cy="272" r="1.7"/>
                <circle cx="383" cy="278" r="1.8"/><circle cx="284" cy="420" r="1.8"/>
                <circle cx="176" cy="484" r="2.4"/><circle cx="202" cy="576" r="3.2"/>
                <circle cx="308" cy="611" r="2.5"/><circle cx="339" cy="641" r="1.6"/>
                <circle cx="617" cy="561" r="2.4"/><circle cx="901" cy="603" r="2.2"/>
                <circle cx="955" cy="563" r="2.4"/><circle cx="1005" cy="641" r="1.8"/>
                <circle cx="1279" cy="623" r="1.6"/><circle cx="1314" cy="597" r="2"/>
                <circle cx="1325" cy="358" r="2.2"/><circle cx="1269" cy="301" r="1.7"/>
              </g>
              <g stroke="#ff583d" strokeWidth="2.2" strokeLinecap="round" opacity=".9">
                <path d="M1000 147l7-8"/><path d="M1080 153l8-5"/><path d="M1224 230l3-5"/>
                <path d="M291 431l-6-9"/><path d="M175 479l7 10"/><path d="M311 608l-4-6"/>
                <path d="M897 605l5-10"/><path d="M1268 625l6-7"/><path d="M1371 274l7-3"/>
                <path d="M389 193l-3-7"/><path d="M1032 183l5-5"/><path d="M1282 351l3-8"/>
              </g>

              {/* Bat symbol layers */}
              <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z"
                fill="none" stroke="#ff242b" strokeWidth="14" opacity=".26" filter="url(#softGlow)"/>
              <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z"
                fill="#100607" fillOpacity=".42" stroke="#b9262b" strokeWidth="5" opacity=".9"/>
              <path d="M320 483 C350 391 425 293 562 244 C552 277 578 312 617 330 C652 346 688 348 721 345 L736 276 L755 309 L768 307 L782 310 L800 276 L815 345 C848 348 884 346 919 330 C958 312 984 277 974 244 C1111 293 1186 391 1216 483 C1175 445 1130 411 1086 408 C1050 407 1031 433 1027 469 C986 449 946 441 908 445 C844 452 793 503 768 590 C743 503 692 452 628 445 C590 441 550 449 509 469 C505 433 486 407 450 408 C406 411 361 445 320 483 Z"
                fill="none" stroke="url(#batStroke)" strokeWidth="2.8" filter="url(#glow)"/>
              <path d="M325 476 C367 383 438 302 551 253 M985 253 C1098 302 1169 383 1211 476 M326 486 C372 451 414 416 451 416 C481 416 500 439 504 474 M1032 474 C1036 439 1055 416 1085 416 C1122 416 1164 451 1210 486"
                fill="none" stroke="#ff9b91" strokeWidth="1.2" opacity=".8"/>

              {/* Loading Console */}
              <g fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">
                <text x="768" y="694" fontSize="21" fill="#ff625f" opacity=".96">BATMAN MODE ACTIVATED</text>
                <text x="768" y="723" fontSize="17" fill="#95696a" opacity=".82" className="dynamic-terminal"></text>
              </g>
              <rect x="570" y="738" width="396" height="22" fill="#080606" stroke="#8b4243" strokeWidth="1.5"/>
              <rect x="576" y="743" width="0" height="12" fill="url(#barFill)" opacity=".95" className="dynamic-bar"/>
              
              <g fill="#190b0c" opacity=".85">
                <rect x="587" y="743" width="3" height="12"/><rect x="599" y="743" width="3" height="12"/>
                <rect x="611" y="743" width="3" height="12"/><rect x="623" y="743" width="3" height="12"/>
                <rect x="635" y="743" width="3" height="12"/><rect x="647" y="743" width="3" height="12"/>
                <rect x="659" y="743" width="3" height="12"/><rect x="671" y="743" width="3" height="12"/>
                <rect x="683" y="743" width="3" height="12"/><rect x="695" y="743" width="3" height="12"/>
                <rect x="707" y="743" width="3" height="12"/><rect x="719" y="743" width="3" height="12"/>
                <rect x="731" y="743" width="3" height="12"/><rect x="743" y="743" width="3" height="12"/>
                <rect x="755" y="743" width="3" height="12"/><rect x="767" y="743" width="3" height="12"/>
                <rect x="779" y="743" width="3" height="12"/><rect x="791" y="743" width="3" height="12"/>
                <rect x="803" y="743" width="3" height="12"/>
              </g>

              <g fontFamily="monospace" fontSize="4.7" fill="#7b3435" opacity=".7">
                <text x="571" y="771">01  SYSTEM   ENGAGED</text>
                <text x="571" y="778">02  ENCRYPTION   INITIALIZING // SIGNAL LOCK</text>
                <text x="571" y="785">03  TRACKING   SCANNING NETWORK</text>
                <text x="571" y="792">04  PROTOCOL   NIGHTFALL</text>
                <text x="571" y="799">05  ACCESS   AUTHORIZED</text>
                <text x="964" y="772" textAnchor="end">SYSTEM READY</text>
              </g>

              <rect x="143" y="46" width="1250" height="722" fill="none" stroke="#171112" strokeWidth="2"/>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // STANDARD LOGINS: Elegant Premium Gold Reveal
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A110D] flex items-center justify-center overflow-hidden select-none pointer-events-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vg-cinematic {
          0% { opacity: 0; transform: scale(0.85); filter: blur(10px); }
          20% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 45px rgba(212,175,55,0.4)); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.15); filter: blur(12px); }
        }
        .animate-vg {
          animation: vg-cinematic 4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />
      <div className="w-32 h-32 animate-vg flex flex-col items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <path d="M 75 55 A 25 25 0 1 1 50 25 L 50 33 A 17 17 0 1 0 58 55 L 45 55 L 45 47 L 75 47 Z" fill="#D4AF37"/>
          <path d="M 22 20 L 50 82 L 78 20 L 64 20 L 50 56 L 36 20 Z" fill="#F3F4F6"/>
        </svg>
      </div>
    </div>
  );
}
