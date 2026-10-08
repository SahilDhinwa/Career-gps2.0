"use client";

import { useEffect, useState } from "react";
import { User, Activity, Globe, MapPin } from "lucide-react";

export function VisitorTracker() {
  const [visits, setVisits] = useState<number>(0);
  const [ip, setIp] = useState<string>("Fetching IP...");
  const [name, setName] = useState<string>("Loading...");
  const [coords, setCoords] = useState<{ lat: string; lng: string } | null>(null);
  const [geoStatus, setGeoStatus] = useState<string>("Requesting location...");

  useEffect(() => {
    // 1. Name & Visits Logic
    let storedName = localStorage.getItem("bams_user_name");
    if (!storedName) {
      storedName = window.prompt("Welcome to BAMS Hub! Please enter your name:") || "Anonymous Scholar";
      localStorage.setItem("bams_user_name", storedName);
    }
    setName(storedName);

    const currentVisits = parseInt(localStorage.getItem("bams_hub_visits") || "0");
    const newVisits = currentVisits + 1;
    localStorage.setItem("bams_hub_visits", newVisits.toString());
    setVisits(newVisits);

    // 2. Fetch Network & Location Data, THEN send to Backend
    async function gatherDataAndSend() {
      let fetchedIp = "Unknown IP";
      let fetchedCoords = null;

      // Get IP
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        fetchedIp = ipData.ip;
        setIp(fetchedIp);
      } catch (e) {
        setIp("Unknown IP");
      }

      // Get Coordinates (Wrapped in a Promise so we can wait for it)
      const getPosition = () => new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      if ("geolocation" in navigator) {
        try {
          const position = await getPosition();
          fetchedCoords = {
            lat: position.coords.latitude.toFixed(4),
            lng: position.coords.longitude.toFixed(4),
          };
          setCoords(fetchedCoords);
        } catch (error: any) {
          setGeoStatus("Location denied");
        }
      }

      // 🚀 THE BACKEND CONNECTION 🚀
      // Now that we have all data, send it to our API Route
      try {
        const backendRes = await fetch("/api/track-visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: storedName,
            visits: newVisits,
            ip: fetchedIp,
            coords: fetchedCoords
          }),
        });
        
        const backendData = await backendRes.json();
        console.log("Backend responded:", backendData.message);
      } catch (error) {
        console.error("Failed to connect to backend", error);
      }
    }

    gatherDataAndSend();
  }, []);

  if (visits === 0) return null;

  // ... (Keep the exact same return UI JSX from the previous step)
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 mb-8 rounded-2xl bg-white/40 dark:bg-black/30 border border-[var(--theme-border)]/20 shadow-sm backdrop-blur-md w-fit mx-auto transition-all">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 text-sm md:text-base font-semibold font-sans text-[var(--theme-text)]">
          <User className="w-4 h-4 text-[var(--theme-accent)]" />
          <span>{name}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[var(--theme-border)]/50 hidden md:block"></div>
        <div className="flex items-center gap-2 text-sm md:text-base font-medium font-sans text-[var(--theme-text)] opacity-80">
          <Globe className="w-4 h-4 text-blue-500" />
          <span>{ip}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[var(--theme-border)]/50 hidden md:block"></div>
        <div className="flex items-center gap-2 text-sm md:text-base font-bold font-sans text-[var(--theme-accent)] bg-[var(--theme-accent)]/10 px-3 py-1 rounded-lg">
          <Activity className="w-4 h-4" />
          <span>Visits: {visits}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs md:text-sm font-medium font-sans text-[var(--theme-text)] opacity-70 bg-[var(--theme-text)]/5 px-4 py-1.5 rounded-lg w-full justify-center">
        <MapPin className="w-3.5 h-3.5 text-red-500" />
        {coords ? <span>Lat: {coords.lat}, Lng: {coords.lng}</span> : <span className="italic">{geoStatus}</span>}
      </div>
    </div>
  );
}
