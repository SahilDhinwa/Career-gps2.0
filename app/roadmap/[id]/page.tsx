"use client";

import { CheckCircle, Circle, MapPin, Calendar, BookOpen, ChevronRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase"; // Note the 3-level deep path
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function RoadmapTracker({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // We move your static stages into a state variable so we can dynamically update them!
  const [stages, setStages] = useState([
    {
      id: 1,
      title: "Initial Research & Shortlisting",
      status: "active", // Default starting state
      desc: "Identify programs aligned with your goals and review historical acceptance data.",
      checklist: ["List top 5 university choices", "Verify basic eligibility criteria", "Check historical cut-offs"],
    },
    {
      id: 2,
      title: "Standardized Testing",
      status: "locked",
      desc: "Prepare for and schedule your English proficiency and aptitude exams.",
      checklist: ["Book IELTS/TOEFL date", "Begin GRE/GMAT prep", "Take diagnostic test"],
      notes: "Do not wait until the last minute. Exam slots in India fill up 2 months in advance.",
    },
    {
      id: 3,
      title: "Document Compilation",
      status: "locked",
      desc: "Gather transcripts, draft your Statement of Purpose (SOP), and secure Letters of Recommendation (LORs).",
    },
  ]);

  // 1. GATEKEEPER & DATA FETCHING
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login"); // Kick out unauthorized users
        return;
      }
      setUser(currentUser);

      // Fetch their saved progress from Firestore
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          // Look for progress saved under this specific roadmap ID, default to stage 1
          const savedProgress = data.roadmapProgress?.[params.id] || 1; 

          // Update the stages array based on their saved progress
          setStages(prev => prev.map(stage => ({
            ...stage,
            status: stage.id < savedProgress ? "completed" : stage.id === savedProgress ? "active" : "locked"
          })));
        }
      } catch (error) {
        console.error("Failed to fetch progress", error);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [params.id, router]);

  // 2. THE FIREBASE SAVE FUNCTION
  const handleMarkComplete = async (stageId: number) => {
    if (!user) return;

    const nextStage = stageId + 1;

    // Optimistic UI Update (Makes it feel instantly fast for the user)
    setStages(prev => prev.map(stage => ({
      ...stage,
      status: stage.id < nextStage ? "completed" : stage.id === nextStage ? "active" : "locked"
    })));

    // Save silently to Database
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        [`roadmapProgress.${params.id}`]: nextStage
      });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  // Show a premium loading spinner while fetching Firebase data
  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const completedCount = stages.filter(s => s.status === "completed").length;
  const progressPercent = (completedCount / stages.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header Info */}
      <div className="bg-surface border border-surfaceBorder p-8 mb-8 shadow-sm">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-bold tracking-wide">MASTER&apos;S LEVEL</span>
          <span className="bg-success/10 text-success px-3 py-1 text-sm font-bold tracking-wide">FULLY FUNDED</span>
        </div>
        <h1 className="font-heading text-4xl font-bold mb-2">Global Excellence Scholarship</h1>
        <p className="text-lg text-gray-600 flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5" /> United Kingdom • Oxford University
        </p>
        <div className="flex items-center gap-2 text-warning font-bold bg-warning/10 w-fit px-4 py-2">
          <Calendar className="w-4 h-4" /> Next Deadline: October 15, 2026
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
          <p className="font-bold text-gray-800">Your Progress</p>
          <p className="text-sm text-gray-500 font-medium">You have completed {completedCount} of {stages.length} stages</p>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-success h-full transition-all duration-700 ease-out" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="space-y-6">
        {stages.map((stage, index) => {
          const isCompleted = stage.status === "completed";
          const isActive = stage.status === "active";
          const isLocked = stage.status === "locked";

          return (
            <div key={stage.id} className="relative flex gap-6">
              {/* Timeline Line & Icon */}
              <div className="flex flex-col items-center">
                <div className="bg-background z-10 py-1">
                  {isCompleted && <CheckCircle className="w-8 h-8 text-success bg-white rounded-full shadow-sm" />}
                  {isActive && <Circle className="w-8 h-8 text-primary fill-primary/20 bg-white rounded-full shadow-sm" />}
                  {isLocked && <Circle className="w-8 h-8 text-gray-300 bg-white rounded-full" />}
                </div>
                {index !== stages.length - 1 && (
                  <div className={`w-0.5 h-full -mt-2 transition-colors duration-500 ${isCompleted ? "bg-success" : "bg-gray-200"}`}></div>
                )}
              </div>

              {/* Stage Card */}
              <div className={`flex-1 p-6 border mb-4 transition-all duration-300 ${
                isCompleted ? "bg-surface border-success/30 shadow-sm" : 
                isActive ? "bg-white border-primary shadow-md transform scale-[1.01]" : 
                "bg-gray-50 border-surfaceBorder opacity-60"
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-heading text-2xl font-bold ${isLocked ? "text-gray-500" : "text-foreground"}`}>
                    Stage {stage.id}: {stage.title}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm ${
                    isCompleted ? "bg-success/10 text-success" : 
                    isActive ? "bg-primary/10 text-primary" : "bg-gray-200 text-gray-500"
                  }`}>
                    {stage.status.replace('-', ' ')}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{stage.desc}</p>

                {(isActive || isCompleted) && stage.checklist && (
                  <div className="mb-6">
                    <p className="font-bold text-sm text-gray-800 mb-3 uppercase tracking-wider">Checklist</p>
                    <ul className="space-y-2">
                      {stage.checklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className={`w-4 h-4 mt-1 shrink-0 ${isCompleted ? "text-success" : "text-primary"}`} />
                          <span className={isCompleted ? "line-through text-gray-500" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(isActive || isCompleted) && stage.notes && (
                  <div className="bg-warning/10 border-l-4 border-warning p-4 mb-6 flex gap-3">
                    <BookOpen className="w-5 h-5 text-warning shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">{stage.notes}</p>
                  </div>
                )}

                {/* THE TRIGGER BUTTON */}
                {isActive && (
                  <button 
                    onClick={() => handleMarkComplete(stage.id)}
                    className="bg-primary text-white font-bold py-3 px-8 hover:bg-primaryHover transition-colors mt-2 shadow-sm flex items-center gap-2"
                  >
                    Mark as Complete <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
