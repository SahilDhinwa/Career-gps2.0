
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Film,
  Loader2,
} from "lucide-react";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type BamsProf = "prof-1" | "prof-2" | "prof-3";

type Reel = {
  id: string;
  title: string;
  url: string;
  createdAt: number;
};

type Props = {
  prof: BamsProf;
};

const PROF_LABELS: Record<BamsProf, string> = {
  "prof-1": "1st Professional",
  "prof-2": "2nd Professional",
  "prof-3": "3rd / Final Professional",
};

function validVideoURL(value: unknown): value is string {
  if (typeof value !== "string") return false;

  try {
    const url = new URL(value);

    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.port &&
      [
        "youtube.com",
        "www.youtube.com",
        "youtube-nocookie.com",
        "www.youtube-nocookie.com",
        "youtu.be",
      ].includes(url.hostname.toLowerCase())
    );
  } catch {
    return false;
  }
}

export default function BamsReels({ prof }: Props) {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadReels() {
      setLoading(true);
      setError("");
      setReels([]);

      try {
        const reelsQuery = query(
          collection(db, "bams_reels"),
          where("prof", "==", prof),
          where("status", "==", "published")
        );

        const snapshot = await getDocs(reelsQuery);

        const results: Reel[] = snapshot.docs
          .map((document) => {
            const data = document.data();

            return {
              id: document.id,
              title:
                typeof data.title === "string"
                  ? data.title
                  : "",
              url:
                typeof data.url === "string"
                  ? data.url
                  : "",
              createdAt:
                data.createdAt instanceof Timestamp
                  ? data.createdAt.toMillis()
                  : 0,
            };
          })
          .filter(
            (reel) =>
              reel.title.trim().length > 0 &&
              validVideoURL(reel.url)
          )
          .sort((a, b) => b.createdAt - a.createdAt)
          .slice(0, 30);

        if (active) {
          setReels(results);
        }
      } catch (cause) {
        console.error("BAMS reels loading failed:", cause);

        if (active) {
          setError("Unable to load reels right now.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadReels();

    return () => {
      active = false;
    };
  }, [prof]);

  return (
    <section className="relative z-10 mt-20 md:mt-28">
      <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500">
            <Film className="h-4 w-4" />
            BAMS Micro-Learning
          </div>

          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            High-Yield Concepts in{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
              60 Seconds
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm font-medium text-foreground/70 md:text-base">
            Curated learning reels for BAMS{" "}
            {PROF_LABELS[prof]}.
          </p>
        </div>
      </div>

      {loading && (
        <div
          role="status"
          className="flex items-center gap-3 py-10 text-sm text-amber-500"
        >
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading learning reels...
        </div>
      )}

      {!loading && error && (
        <p role="alert" className="py-8 text-sm text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && reels.length === 0 && (
        <div className="rounded-xl border border-amber-500/20 bg-surface/80 p-8 text-center">
          <Film className="mx-auto mb-3 h-9 w-9 text-amber-500" />

          <p className="font-semibold text-foreground">
            Learning reels coming soon
          </p>

          <p className="mt-2 text-sm text-foreground/60">
            New videos for {PROF_LABELS[prof]} will
            appear here after publishing.
          </p>
        </div>
      )}

      {!loading && !error && reels.length > 0 && (
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-8 pt-2 scrollbar-hide md:mx-0 md:gap-6 md:px-0">
          {reels.map((reel) => (
            <Link
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${reel.title}`}
              className="group relative block aspect-[9/16] w-64 shrink-0 snap-center overflow-hidden rounded-xl border border-amber-500/20 shadow-lg transition-transform hover:-translate-y-2 md:w-72"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-zinc-950 to-black" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-md transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current text-amber-400" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {PROF_LABELS[prof]}
                </p>

                <h3 className="text-lg font-bold leading-snug text-white drop-shadow-md">
                  {reel.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
                  Watch Video
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
