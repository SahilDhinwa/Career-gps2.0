"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    // Wait 1.5 seconds so it NEVER blocks the user's screen from loading
    const timer = setTimeout(async () => {
      try {
        // Generate an encrypted fingerprint to track unique users (IP stand-in)
        let fingerprint = localStorage.getItem("veblen_visitor_ip");
        if (!fingerprint) {
          fingerprint = "USR_" + Math.random().toString(36).substring(2, 12).toUpperCase();
          localStorage.setItem("veblen_visitor_ip", fingerprint);
        }

        // Silently send the traffic ping to Firestore
        await addDoc(collection(db, "visitors"), {
          ip: fingerprint,
          name: pathname === "/" ? "Landing Page" : pathname,
          visits: 1,
          visitedAt: serverTimestamp()
        });
      } catch (e) {
        console.warn("Analytics ping blocked or failed.");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // This component is completely invisible
}
