"use client";

import { CheckCircle, Circle, MapPin, BookOpen, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase"; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

// --- THE ROADMAP DATA DICTIONARY ---
const masterRoadmap = [
  {
    id: 1,
    title: "Initial Research & Shortlisting",
    desc: "Identify programs aligned with your goals and review historical acceptance data.",
    checklist: ["List top 5 university choices", "Verify basic eligibility criteria", "Check historical cut-offs"],
  },
  {
    id: 2,
    title: "Standardized Testing",
    desc: "Prepare for and schedule your English proficiency and aptitude exams.",
    checklist: ["Book IELTS/TOEFL date", "Begin GRE/GMAT prep", "Take diagnostic test"],
    notes: "Do not wait until the last minute. Exam slots in India fill up 2 months in advance.",
  },
  {
    id: 3,
    title: "Document Compilation",
    desc: "Gather transcripts, draft your Statement of Purpose (SOP), and secure Letters of Recommendation (LORs).",
    checklist: ["Draft SOP", "Contact referees for LORs", "Order official transcripts"],
  }
];

const ugRoadmap = [
  {
    id: 1,
    title: "Profile Building & Academics",
    desc: "Focus on extracurriculars, leadership, and maintaining a 75%+ academic score for government scholarships.",
    checklist: ["Maintain 75%+ in 12th grade", "Verify age limits for specific scholarships", "Build leadership portfolio"],
    notes: "Top scholarships like MEXT and DAAD heavily weigh your high school percentages."
  },
  {
    id: 2,
    title: "Standardized Tests (SAT/ACT)",
    desc: "Prepare for the SAT/ACT and English proficiency tests (IELTS/TOEFL).",
    checklist: ["Book SAT/ACT date", "Take IELTS/TOEFL diagnostic", "Begin NCERT revision for embassy exams"],
  },
  {
    id: 3,
    title: "Essays & Applications",
    desc: "Draft your Statement of Purpose (SOP), secure LORs, and submit via the Common App or Embassy portals.",
    checklist: ["Draft Study Plan / SOP", "Get School Principal Recommendation", "Submit Common App / Physical Forms"],
    notes: "For government scholarships, physical submission via registered post is often required."
  }
];

export default function RoadmapTracker({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stages, setStages] = useState<any[]>([]);

  // 1. SMART ROUTING & DATA FETCHING
  useEffect(() => {
    // Determine if this is a UG or Master's roadmap based on the URL ID
    const isUG = params.id.includes("ug") || params.id.includes("wise");
    const baseRoadmap = isUG ? ugRoadmap : masterRoadmap;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        // GUEST MODE: Show the roadmap, but lock everything past stage 1
        setUser(null);
        setStages(baseRoadmap.map(stage => ({
          ...stage,
          status: stage.id === 1 ? "active" : "locked"
        })));
        setIsLoading(false);
        return;
      }
      
      setUser(currentUser);

      // LOGGED IN: Fetch their exact saved progress
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          const savedProgress = data.roadmapProgress?.[params.id] || 1; 

          setStages(baseRoadmap.map(stage => ({
            ...stage,
            status: stage.id < savedProgress ? "completed" : stage.id === savedProgress ? "active" : "locked"
          })));
        } else {
           // Fresh user with no saved progress yet
           setStages(baseRoadmap.map(stage => ({
            ...stage,
            status: stage.id === 1 ? "active" : "locked"
          })));
        }
      } catch (error) {
        console.error("Failed to fetch progress", error);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [params.id]);

  // 2. THE SAVE TRIGGER
  const handleMarkComplete = async (stageId: number) => {
    if (!user) {
      router.push("/login"); // Force login if guest tries to save
      return;
    }

    const nextStage = stageId + 1;

    // Fast UI Update
    setStages(prev => prev.map(stage => ({
      ...stage,
      status: stage.id < nextStage ? "completed" : stage.id === nextStage ? "active" : "locked"
    })));

    // Save to Database
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        [`roadmapProgress.${params.id}`]: nextStage
      });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  // --- THE SKELETON LOADER ---
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
        {/* Skeleton Header Info */}
        <div className="bg-surface border border-surfaceBorder p-8 mb-8 shadow-sm">
          <div className="flex gap-3 mb-4">
            <div className="h-6 w-24 bg-gray-200 rounded-sm"></div>
            <div className="h-6 w-32 bg-gray-200 rounded-sm"></div>
          </div>
          <div className="h-10 w-3/4 bg-gray-200 mb-4 rounded-sm"></div>
          <div className="h-6 w-1/2 bg-gray-200 mb-6 rounded-sm"></div>
          <div className="h-8 w-64 bg-gray-100 rounded-sm"></div>
        </div>

        {/* Skeleton Progress Tracker */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <div className="h-5 w-32 bg-gray-200 rounded-sm"></div>
            <div className="h-4 w-48 bg-gray-200 rounded-sm"></div>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full"></div>
        </div>

        {/* Skeleton Vertical Timeline (Mocking 3 stages) */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full z-10 py-1 border-4 border-white"></div>
                {i !== 3 && <div className="w-0.5 h-full -mt-2 bg-gray-100"></div>}
              </div>
              <div className="flex-1 p-6 border border-gray-100 bg-gray-50 rounded-sm mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-8 w-1/2 bg-gray-200 rounded-sm"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded-sm"></div>
                </div>
                <div className="h-4 w-full bg-gray-200 mb-2 rounded-sm"></div>
                <div className="h-4 w-5/6 bg-gray-200 mb-6 rounded-sm"></div>
                <div className="h-12 w-48 bg-gray-200 rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- THE ACTUAL UI ---
  const completedCount = stages.filter(s => s.status === "completed").length;
  const progressPercent = (completedCount / stages.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      
      {/* Header Info */}
      <div className="bg-surface border border-surfaceBorder p-8 mb-8 shadow-sm">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-bold tracking-wide">
            {params.id.includes("ug") || params.id.includes("wise") ? "UG LEVEL" : "MASTER'S LEVEL"}
          </span>
          <span className="bg-success/10 text-success px-3 py-1 text-sm font-bold tracking-wide">PREMIUM ROADMAP</span>
        </div>
        <h1 className="font-heading text-4xl font-bold mb-2 uppercase">{params.id.replace(/-/g, " ")} Roadmap</h1>
        <p className="text-lg text-gray-600 flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5" /> Global Institutions
        </p>
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
                      {stage.checklist.map((item: string, i: number) => (
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

                {/* THE SMART TRIGGER BUTTON */}
                {isActive && (
                  <button 
                    onClick={() => handleMarkComplete(stage.id)}
                    className="bg-primary text-white font-bold py-3 px-8 hover:bg-primaryHover transition-colors mt-2 shadow-sm flex items-center gap-2"
                  >
                    {user ? "Mark as Complete" : "Login to Save Progress"} <ChevronRight className="w-4 h-4" />
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
