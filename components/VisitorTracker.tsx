
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import {
  ArrowRight,
  Sparkles,
  Pencil,
  MapPin,
  Loader2,
} from "lucide-react";

type TrackEvent = "visit" | "profile" | "location";

type Coordinates = {
  lat: number;
  lng: number;
  accuracy?: number;
};

const NAME_KEY = "bams_user_name";
const SESSION_KEY = "atreya_visitor_session_recorded";

function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  }

  if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  }

  return "Good Evening";
}

async function sendTrackingEvent(
  event: TrackEvent,
  name: string,
  coords?: Coordinates
): Promise<boolean> {
  try {
    const response = await fetch(
      "/api/track-visitor",
      {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event,
          name,
          ...(coords ? { coords } : {}),
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error(
      "Visitor tracking request failed:",
      error
    );

    return false;
  }
}

export function VisitorTracker() {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [greeting, setGreeting] = useState("Namaste");

  const [isSharingLocation, setIsSharingLocation] =
    useState(false);

  const [locationMessage, setLocationMessage] =
    useState("");

  const initializationRef = useRef(false);

  const recordVisit = useCallback(
    async (visitorName: string) => {
      // One visit per browser tab session.
      // Reloading the page does not create
      // another visit event.
      try {
        if (
          sessionStorage.getItem(SESSION_KEY) ===
          "true"
        ) {
          return;
        }
      } catch {
        // Session storage is optional.
      }

      const successful = await sendTrackingEvent(
        "visit",
        visitorName
      );

      if (successful) {
        try {
          sessionStorage.setItem(
            SESSION_KEY,
            "true"
          );
        } catch {
          // Ignore unavailable session storage.
        }
      }
    },
    []
  );

  useEffect(() => {
    if (initializationRef.current) {
      return;
    }

    initializationRef.current = true;

    setGreeting(getGreeting());

    try {
      const storedName =
        localStorage.getItem(NAME_KEY);

      if (storedName?.trim()) {
        const cleanName = storedName.trim();

        setName(cleanName);
        setIsNameSet(true);

        void recordVisit(cleanName);
      }
    } catch {
      // Private browsing may restrict storage.
    }

    setIsLoading(false);
  }, [recordVisit]);

  const handleNameSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const finalName =
      inputName.trim().slice(0, 80) ||
      "Anonymous Scholar";

    const wasAlreadyRegistered = isNameSet;

    setName(finalName);
    setIsNameSet(true);
    setLocationMessage("");

    try {
      localStorage.setItem(
        NAME_KEY,
        finalName
      );
    } catch {
      // The greeting still works.
    }

    if (wasAlreadyRegistered) {
      await sendTrackingEvent(
        "profile",
        finalName
      );
    } else {
      // If this is the first visit, create
      // the record. If already recorded,
      // update the name without counting
      // another visit.
      let alreadyRecorded = false;

      try {
        alreadyRecorded =
          sessionStorage.getItem(SESSION_KEY) ===
          "true";
      } catch {
        // Continue normally.
      }

      if (alreadyRecorded) {
        await sendTrackingEvent(
          "profile",
          finalName
        );
      } else {
        await recordVisit(finalName);
      }
    }
  };

  const handleEditClick = () => {
    setInputName(
      name === "Anonymous Scholar"
        ? ""
        : name
    );

    setIsNameSet(false);
  };

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage(
        "GPS location is unavailable on this device."
      );
      return;
    }

    setIsSharingLocation(true);
    setLocationMessage("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords: Coordinates = {
          lat: Number(
            position.coords.latitude.toFixed(4)
          ),
          lng: Number(
            position.coords.longitude.toFixed(4)
          ),
          accuracy: Math.round(
            position.coords.accuracy
          ),
        };

        const successful =
          await sendTrackingEvent(
            "location",
            name,
            coords
          );

        setLocationMessage(
          successful
            ? "Location saved successfully."
            : "Could not save location. Please retry."
        );

        setIsSharingLocation(false);
      },
      () => {
        setLocationMessage(
          "Location permission was denied or unavailable."
        );

        setIsSharingLocation(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  if (isLoading) {
    return null;
  }

  if (!isNameSet) {
    return (
      <div className="mx-auto mb-8 flex w-full max-w-md flex-col items-center justify-center rounded-2xl border border-amber-500/30 bg-white/60 p-6 shadow-lg backdrop-blur-md transition-all dark:bg-black/40">
        <h3 className="mb-2 font-heading text-lg font-bold text-[var(--theme-text)]">
          Welcome to BAMS Hub!
        </h3>

        <p className="mb-5 text-center text-sm text-[var(--theme-text)] opacity-70">
          Enter your name to access the 2nd Prof
          Command Center.
        </p>

        <form
          onSubmit={handleNameSubmit}
          className="flex w-full gap-2"
        >
          <input
            type="text"
            value={inputName}
            onChange={(event) =>
              setInputName(event.target.value)
            }
            maxLength={80}
            placeholder="e.g. Dr. Strange"
            aria-label="Your name"
            className="min-w-0 flex-1 rounded-lg border border-[var(--theme-border)] bg-white px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-black"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-amber-600"
          >
            Enter
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-8 flex w-fit max-w-full flex-col items-center gap-2">
      <div className="group flex max-w-full items-center justify-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-6 py-2.5 text-amber-600 shadow-sm transition-all hover:bg-amber-500/20 dark:text-amber-500">
        <Sparkles className="h-4 w-4 shrink-0" />

        <span className="text-center text-sm font-bold tracking-wide">
          {greeting}, {name}! ✨
        </span>

        <button
          type="button"
          onClick={handleEditClick}
          aria-label="Edit visitor name"
          title="Edit Name"
          className="ml-1 rounded-full p-1 text-amber-600/60 transition-all hover:text-amber-600 focus:opacity-100 dark:text-amber-500/60 dark:hover:text-amber-500"
        >
          <Pencil className="h-3.5 w-3.5" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleShareLocation}
        disabled={isSharingLocation}
        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 underline-offset-2 hover:underline disabled:opacity-50 dark:text-neutral-400"
      >
        {isSharingLocation ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <MapPin className="h-3.5 w-3.5" />
        )}

        {isSharingLocation
          ? "Saving location..."
          : "Share my location (optional)"}
      </button>

      {locationMessage && (
        <p
          role="status"
          className="max-w-xs text-center text-[11px] text-neutral-500 dark:text-neutral-400"
        >
          {locationMessage}
        </p>
      )}
    </div>
  );
}
