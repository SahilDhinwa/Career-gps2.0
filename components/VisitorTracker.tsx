"use client";

import { useEffect, useState } from "react";
import { User, Activity, Globe, MapPin, ArrowRight, Crosshair } from "lucide-react";

export function VisitorTracker() {
  const [visits, setVisits] = useState<number>(0);
  const [ip, setIp] = useState<string>("Fetching IP...");
  const [name, setName] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [isNameSet, setIsNameSet] = useState<boolean>(false);
  const [displayLocation, setDisplayLocation] = useState<string>("Locating...");
  const [exactStatus, setExactStatus] = useState<string>("pending");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 1. Initial Load: Check if we already know this user
  useEffect(() => {
    const storedName = localStorage.getItem("bams_user_name");
    const currentVisits = parseInt(localStorage.getItem("bams_hub_visits") || "0");
    const newVisits = currentVisits + 1;
    setVisits(newVisits);

    if (storedName) {
      setName(storedName);
      setIsNameSet(true);
      localStorage.setItem("bams_hub_visits", newVisits.toString());
      fetchLocationAndSend(storedName, newVisits);
    }
    setIsLoading(false);
  }, []);

  // 2. The Core Function: Gathers Location & Sends to Backend
  const fetchLocationAndSend = async (userName: string, userVisits: number, forceExactPopup = false) => {
    let fetchedIp = "Unknown IP";
    let fetchedCoords: any = null;
    let cityCountry = "Unknown Location";

    // STEP A: Always get IP and approximate location silently
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      fetchedIp = data.ip;
      setIp(fetchedIp);
      cityCountry = `${data.city}, ${data.country_name}`;
      fetchedCoords = { lat: data.latitude, lng: data.longitude };
      setDisplayLocation(`${cityCountry} (Approx)`);
    } catch (e) {
      setIp("Unknown IP");
      setDisplayLocation("Location unavailable");
    }

    // STEP B: Check for Exact GPS Permission
    if ("geolocation" in navigator) {
      try {
        // Silently check if permission was already granted previously
        const perm = await navigator.permissions.query({ name: "geolocation" });
        
        if (perm.state === "granted" || forceExactPopup) {
          // If granted OR if user explicitly clicked the "Enable GPS" button
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          
          fetchedCoords = {
            lat: position.coords.latitude.toFixed(4),
            lng: position.coords.longitude.toFixed(4),
          };
          setDisplayLocation(`Lat: ${fetchedCoords.lat}, Lng: ${fetchedCoords.lng}`);
          setExactStatus("granted");
        } else {
          // 'prompt' means they haven't been asked yet. 'denied' means they blocked it.
          setExactStatus(perm.state); 
        }
      } catch (error) {
        console.log("GPS check failed/denied. Using IP fallback.");
        setExactStatus("denied");
      }
    }

    // STEP C: Send data to Vercel/Firebase
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
      console.error("Failed to connect to backend", error);
    }
  };

  // 3. Handle New User Form Submission
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = inputName.trim() || "Anonymous Scholar";
    setName(finalName);
    setIsNameSet(true);
    
    // Save to local storage now that we have a name
    localStorage.setItem("bams_user_name", finalName);
    localStorage.setItem("bams_hub_visits", visits.toString());
    
    // Trigger the backend save
    fetchLocationAndSend(finalName, visits);
  };

  if (isLoading) return null;

  // UI STATE 1: Ask for Name (In-page form, no popups)
  if (!isNameSet) {
    return (
      <div className="flex flex-col items-center justify-center p-6 mb-8 rounded-2xl bg-white/60 dark:bg-black/40 border border-amber-500/30 shadow-lg backdrop-blur-md w-full max-w-md mx-auto transition-all">
        <h3 className="text-lg font-bold text-[var(--theme-text)] mb-2 font-heading">Welcome to BAMS Hub!</h3>
        <p className="text-sm text-[var(--theme-text)] opacity-70 mb-4 text-center">Enter your name to access the 2nd Prof Command Center.</p>
        <form onSubmit={handleNameSubmit} className="flex w-full gap-2">
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="e.g. Dr. Sahil"
            className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-black border border-[var(--theme-border)] focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
          />
          <button 
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm shadow-md"
          >
            Enter <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  // UI STATE 2: The Tracker Pill (Shows after name is set)
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 mb-8 rounded-2xl bg-white/40 dark:bg-black/30 border border-[var(--theme-border)]/20 shadow-sm backdrop-blur-md w-fit mx-auto transition-all">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 text-sm md:text-base font-semibold font-sans text-[var(--theme-text)]">
          <User className="w-4 h-4 text-amber-500" />
          <span>{name}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[var(--theme-border)]/50 hidden md:block"></div>
        <div className="flex items-center gap-2 text-sm md:text-base font-medium font-sans text-[var(--theme-text)] opacity-80">
          <Globe className="w-4 h-4 text-blue-500" />
          <span>{ip}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[var(--theme-border)]/50 hidden md:block"></div>
        <div className="flex items-center gap-2 text-sm md:text-base font-bold font-sans text-amber-500 bg-amber-500/10 px-3 py-1 rounded-lg">
          <Activity className="w-4 h-4" />
          <span>Visits: {visits}</span>
        </div>
      </div>
      
      {/* Smart Location Output */}
      <div className="flex items-center gap-2 text-xs md:text-sm font-medium font-sans text-[var(--theme-text)] opacity-80 bg-[var(--theme-text)]/5 px-4 py-2 rounded-lg w-full justify-center group">
        <MapPin className="w-4 h-4 text-red-500" />
        <span>{displayLocation}</span>
        
        {/* Only show this button if exact GPS hasn't been granted or denied yet */}
        {exactStatus === "prompt" && (
          <button 
            onClick={() => fetchLocationAndSend(name, visits, true)}
            className="ml-2 flex items-center gap-1 text-[10px] uppercase tracking-wider bg-red-500/10 text-red-600 dark:text-red-400 px-2 py-1 rounded hover:bg-red-500/20 transition-colors"
            title="Enable precise GPS tracking"
          >
            <Crosshair className="w-3 h-3" /> Get Exact
          </button>
        )}
      </div>
    </div>
  );
}
