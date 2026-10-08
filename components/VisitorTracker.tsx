"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function VisitorTracker() {
  const [name, setName] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [isNameSet, setIsNameSet] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // 1. Initial Load: Check if we already know this user
    const storedName = localStorage.getItem("bams_user_name");
    const currentVisits = parseInt(localStorage.getItem("bams_hub_visits") || "0");
    const newVisits = currentVisits + 1;
    
    if (storedName) {
      setName(storedName);
      setIsNameSet(true);
      localStorage.setItem("bams_hub_visits", newVisits.toString());
      
      // Auto-run tracking in the background (Silent mode: false means no popups)
      fetchLocationAndSend(storedName, newVisits, false);
    }
    setIsLoading(false);
  }, []);

  // 2. The Background Data Ninja
  const fetchLocationAndSend = async (userName: string, userVisits: number, isFirstLogin: boolean) => {
    let fetchedIp = "Unknown IP";
    let fetchedCoords: any = null;

    // STEP A: Always get IP and approx location silently via API
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      fetchedIp = data.ip;
      fetchedCoords = { lat: data.latitude, lng: data.longitude }; // IP Fallback
    } catch (e) {
      console.log("IP fetch failed, continuing...");
    }

    // STEP B: Handle Exact GPS Smartly
    if ("geolocation" in navigator) {
      try {
        // Silently check if permission was already granted previously
        const perm = await navigator.permissions.query({ name: "geolocation" });
        
        // If they just logged in, OR if they already have location ON
        if (isFirstLogin || perm.state === "granted") {
          try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            // Overwrite IP coords with Exact GPS coords
            fetchedCoords = {
              lat: position.coords.latitude.toFixed(4),
              lng: position.coords.longitude.toFixed(4),
            };
          } catch (err) {
            // User clicked "Deny" on the popup. Do nothing, it falls back to IP automatically!
            console.log("GPS denied. Using IP location silently.");
          }
        }
      } catch (error) {
        console.log("Permissions API skipped.");
      }
    }

    // STEP C: Send everything to your Firebase database via Vercel silently
    try {
      await fetch("/api/track-visitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          visits: userVisits,
          ip: fetchedIp,
          coords: fetchedCoords
        }),
      });
    } catch (error) {
      console.error("Backend tracking failed", error);
    }
  };

  // 3. Handle Form Submission for New Users
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = inputName.trim() || "Anonymous Scholar";
    setName(finalName);
    setIsNameSet(true);
    
    const currentVisits = parseInt(localStorage.getItem("bams_hub_visits") || "0");
    const newVisits = currentVisits + 1;
    
    localStorage.setItem("bams_user_name", finalName);
    localStorage.setItem("bams_hub_visits", newVisits.toString());
    
    // Trigger tracking. 'true' forces the browser to ask for location just this once!
    fetchLocationAndSend(finalName, newVisits, true);
  };

  if (isLoading) return null;

  // UI STATE 1: Beautiful In-Page Form (Only for new users)
  if (!isNameSet) {
    return (
      <div className="flex flex-col items-center justify-center p-6 mb-8 rounded-2xl bg-white/60 dark:bg-black/40 border border-amber-500/30 shadow-lg backdrop-blur-md w-full max-w-md mx-auto transition-all">
        <h3 className="text-lg font-bold text-[var(--theme-text)] mb-2 font-heading">Welcome to BAMS Hub!</h3>
        <p className="text-sm text-[var(--theme-text)] opacity-70 mb-5 text-center">Enter your name to access the 2nd Prof Command Center.</p>
        <form onSubmit={handleNameSubmit} className="flex w-full gap-2">
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="e.g. Dr. Rahul"
            className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-black border border-[var(--theme-border)] focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm font-medium"
          />
          <button 
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all text-sm shadow-md"
          >
            Enter <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  // UI STATE 2: Clean, Simple Interactive Greeting (Zero tracking data shown)
  return (
    <div className="flex items-center justify-center gap-2 px-6 py-2.5 mb-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-500 w-fit mx-auto transition-all hover:bg-amber-500/20 shadow-sm cursor-default">
      <Sparkles className="w-4 h-4" />
      <span className="font-bold text-sm tracking-wide">Namaste, {name}!</span>
    </div>
  );
}
