"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sun } from "lucide-react";

export const PILLAR_NAV = [
  { slug: "science-vault", label: "01. Beyond the Spa" },
  { slug: "diagnostics", label: "02. Prakriti Lab" },
  { slug: "gut-brain-pharmacology", label: "03. Gut-Brain & Herbs" },
  { slug: "gateway-curriculum", label: "04. Gateway Course" },
  { slug: "global-symposium", label: "05. 8 Specialties & Symposium" },
];

export default function PillarTopNav({ activeSlug }: { activeSlug: string }) {
  return (
    <div className="bg-surface/90 backdrop-blur-md border-b border-surfaceBorder sticky top-14 z-30 py-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/atreya"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Command Center
          </Link>
          <span className="text-foreground/30">•</span>
          <Link
            href="/atreya/daily-regimen"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
          >
            <Sun className="w-3.5 h-3.5" /> Daily Routine (Dinacharya)
          </Link>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-hide">
          {PILLAR_NAV.map((item) => {
            const active = activeSlug === item.slug;
            return (
              <Link
                key={item.slug}
                href={`/atreya/${item.slug}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${
                  active
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-background text-foreground/70 border-surfaceBorder hover:text-foreground hover:border-primary/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
