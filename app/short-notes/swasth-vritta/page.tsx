"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NCard } from "@/components/NoteElements";

export default function SwasthVrittaHub() {
  return (
    <HandwrittenCanvas>
      <div className="mb-8 pt-4">
        <Link href="/short-notes" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-lg font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Dashboard
        </Link>
      </div>

      <HandwrittenTitle badge="Swasth Vritta">
        स्वस्थवृत्त एवं योग
      </HandwrittenTitle>

      <div className="max-w-2xl mx-auto mt-12 space-y-6">
        <Link href="/short-notes/swasth-vritta/paper-1" className="block transform transition-transform hover:scale-[1.02]">
          <NCard title="Paper 1: Swasth Vritta (Preventive & Social Medicine)">
            <p className="opacity-80 font-medium">Dinacharya, Ritucharya, Dietetics, Naturopathy, and Public Health.</p>
          </NCard>
        </Link>

        <Link href="/short-notes/swasth-vritta/paper-2" className="block transform transition-transform hover:scale-[1.02]">
          <NCard title="Paper 2: Yoga & Nisargopachara">
            <p className="opacity-80 font-medium">Ashtanga Yoga, Asanas, Pranayama, and advanced Naturopathy.</p>
          </NCard>
        </Link>
      </div>
    </HandwrittenCanvas>
  );
}
