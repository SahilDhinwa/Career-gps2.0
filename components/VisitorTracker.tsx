
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

const SESSION_KEY =
  "atreya_visitor_session_recorded";

const SESSION_ID_KEY =
  "atreya_visitor_session_id";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

let fallbackSessionId: string | null = null;
let fallbackVisitRecorded = false;

let trackingQueue: Promise<unknown> =
  Promise.resolve();

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

function getSessionId(): string {
  try {
    const stored =
      sessionStorage.getItem(SESSION_ID_KEY);

    if (stored && UUID_PATTERN.test(stored)) {
      fallbackSessionId = stored;
      return stored;
    }
  } catch {
    // Session storage may be unavailable.
  }

  if (!fallbackSessionId) {
    fallbackSessionId = crypto.randomUUID();
  }

  try {
    sessionStorage.setItem(
      SESSION_ID_KEY,
      fallbackSessionId
    );
  } catch {
    // Use the in-memory session identifier.
  }

  return fallbackSessionId;
}

function hasRecordedVisit(): boolean {
  if (fallbackVisitRecorded) {
    return true;
  }

  try {
    return (
      sessionStorage.getItem(SESSION_KEY) ===
      "true"
    );
  } catch {
    return false;
  }
}

function markVisitRecorded(): void {
  fallbackVisitRecorded = true;

  try {
    sessionStorage.setItem(
      SESSION_KEY,
      "true"
    );
  } catch {
    // In-memory tracking remains available.
  }
}

function enqueueTracking<T>(
  operation: () => Promise<T>
): Promise<T> {
  const next = trackingQueue.then(
    operation,
    operation
  );

  trackingQueue = next.then(
    () => undefined,
    () => undefined
  );

  return next;
}

async function sendTrackingEvent(
  event: TrackEvent,
  name: string,
  coords?: Coordinates
): Promise<boolean> {
  try {
    const sessionId = getSessionId();

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
          sessionId,
          ...(coords ? { coords } : {}),
        }),
      }
    );

    if (!response.ok) {
      console.warn(
        "Visitor tracking returned:",
        response.status
      );

      return false;
    }

    const result = await response.json();

    return result.success === true;
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

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSharingLocation, setIsSharingLocation] =
    useState(false);

  const [locationMessage, setLocationMessage] =
    useState("");

  const [trackingMessage, setTrackingMessage] =
    useState("");

  const initializationRef = useRef(false);
  const submissionRef = useRef(false);
  const locationRequestRef = useRef(false);

  const recordVisit = useCallback(
    async (visitorName: string): Promise<boolean> => {
      return enqueueTracking(async () => {
        if (hasRecordedVisit()) {
          return true;
        }

        const successful = await sendTrackingEvent(
          "visit",
          visitorName
        );

        if (successful) {
          markVisitRecorded();
        }

        return successful;
      });
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
        const cleanName =
          storedName.trim().slice(0, 80);

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

    if (submissionRef.current) {
      return;
    }

    submissionRef.current = true;
    setIsSubmitting(true);

    const finalName =
      inputName.trim().slice(0, 80) ||
      "Anonymous Scholar";

    setTrackingMessage("");
    setLocationMessage("");

    try {
      localStorage.setItem(
        NAME_KEY,
        finalName
      );
    } catch {
      // The greeting still works.
    }

    setName(finalName);
    setIsNameSet(true);

    try {
      const successful = await enqueueTracking(
        async () => {
          if (hasRecordedVisit()) {
            return sendTrackingEvent(
              "profile",
              finalName
            );
          }

          const recorded = await sendTrackingEvent(
            "visit",
            finalName
          );

          if (recorded) {
            markVisitRecorded();
          }

          return recorded;
        }
      );

      if (!successful) {
        setTrackingMessage(
          "Your name is saved locally. Server sync is unavailable."
        );
      }
    } finally {
      submissionRef.current = false;
      setIsSubmitting(false);
    }
  };

  const handleEditClick = () => {
    if (
      submissionRef.current ||
      locationRequestRef.current
    ) {
      return;
    }

    setInputName(
      name === "Anonymous Scholar"
        ? ""
        : name
    );

    setTrackingMessage("");
    setIsNameSet(false);
  };

  const handleShareLocation = () => {
    if (
      locationRequestRef.current ||
      submissionRef.current
    ) {
      return;
    }

    if (!navigator.geolocation) {
      setLocationMessage(
        "GPS location is unavailable on this device."
      );
      return;
    }

    locationRequestRef.current = true;

    setIsSharingLocation(true);
    setLocationMessage("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
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

          const successful = await enqueueTracking(
            async () => {
              if (!hasRecordedVisit()) {
                const recorded =
                  await sendTrackingEvent(
                    "visit",
                    name
                  );

                if (!recorded) {
                  return false;
                }

                markVisitRecorded();
              }

              return sendTrackingEvent(
                "location",
                name,
                coords
              );
            }
          );

          setLocationMessage(
            successful
              ? "Location saved successfully."
              : "Could not save location. Please retry."
          );
        } finally {
          locationRequestRef.current = false;
          setIsSharingLocation(false);
        }
      },
      () => {
        setLocationMessage(
          "Location permission was denied or unavailable."
        );

        locationRequestRef.current = false;
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
            disabled={isSubmitting}
            placeholder="e.g. Dr. Strange"
            aria-label="Your name"
            className="min-w-0 flex-1 rounded-lg border border-[var(--theme-border)] bg-white px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-black"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-amber-600 disabled:opacity-50"
          >
            Enter

            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
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
          disabled={
            isSubmitting || isSharingLocation
          }
          aria-label="Edit visitor name"
          title="Edit Name"
          className="ml-1 rounded-full p-1 text-amber-600/60 transition-all hover:text-amber-600 focus:opacity-100 disabled:opacity-40 dark:text-amber-500/60 dark:hover:text-amber-500"
        >
          <Pencil className="h-3.5 w-3.5" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleShareLocation}
        disabled={
          isSharingLocation || isSubmitting
        }
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

      {trackingMessage && (
        <p
          role="status"
          className="max-w-xs text-center text-[11px] text-neutral-500 dark:text-neutral-400"
        >
          {trackingMessage}
        </p>
      )}
    </div>
  );
}
