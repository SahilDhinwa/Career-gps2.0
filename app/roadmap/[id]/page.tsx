"use client";

import { CheckCircle, Circle, MapPin, BookOpen, ChevronRight, CheckSquare, Square, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase"; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import PremiumPaymentButton from "../../../components/PremiumPaymentButton"; 

// 1. IMPORT YOUR CLEAN DATA DICTIONARY HERE
import { 
  masterRoadmap, 
  ugRoadmap, 
  mextUgRoadmap, 
  cheveningRoadmap, 
  daadRoadmap,
  commonwealthRoadmap 
} from "../../../lib/roadmaps";

export default function RoadmapTracker({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isPremium, setIsPremium] = useState(false);

  // 2. SMART ROUTING LOGIC
  let baseRoadmap = masterRoadmap;
  let locationTag = "Global Institutions";
  let levelTag = "MASTER'S LEVEL";

  if (params.id.includes("commonwealth")) {
    baseRoadmap = commonwealthRoadmap;
    locationTag = "United Kingdom • Development Masters";
  } else if (params.id.includes("chevening")) {
    baseRoadmap = cheveningRoadmap;
    locationTag = "United Kingdom • Global Institutions";
  } else if (params.id.includes("daad")) {
    baseRoadmap = daadRoadmap;
    locationTag = "Germany • Global Institutions";
  } else if (params.id.includes("mext")) {
    baseRoadmap = mextUgRoadmap;
    locationTag = "Japan • Global Institutions";
    levelTag = params.id.includes("ug") ? "UG LEVEL" : "MASTER'S LEVEL";
  } else if (params.id.includes("ug") || params.id.includes("wise")) {
    baseRoadmap = ugRoadmap;
    levelTag = "UG LEVEL";
  }

  const [stages, setStages] = useState<any[]>(
    baseRoadmap.map(stage => ({ ...stage, status: stage.id === 1 ? "active" : "locked" }))
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setIsPremium(false);
        setCheckedItems([]);
        setIsLoading(false);
        return;
      }
      
      setUser(currentUser);

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setIsPremium(data.isPremium || false);
          
          const savedProgress = data.roadmapProgress?.[params.id] || 1; 
          setStages(baseRoadmap.map(stage => ({
            ...stage,
            status: stage.id < savedProgress ? "completed" : stage.id === savedProgress ? "active" : "locked"
          })));

          const savedChecklist = data.checklistProgress?.[params.id] || [];
          setCheckedItems(savedChecklist);
        }
      } catch (error) {
        console.error("Failed to fetch progress", error);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [params.id, baseRoadmap]);

  const handleToggleCheck = async (item: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    const isCurrentlyChecked = checkedItems.includes(item);
    const newCheckedItems = isCurrentlyChecked 
      ? checkedItems.filter(i => i !== item) 
      : [...checkedItems, item];
    setCheckedItems(newCheckedItems);

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { [`checklistProgress.${params.id}`]: newCheckedItems });
    } catch (error) {
      console.error("Failed to save checklist item", error);
    }
  };

  const handleMarkComplete = async (stageId: number) => {
    if (!user) {
      router.push("/login"); 
      return;
    }
    if (!isPremium && stageId >= 1) return;

    const nextStage = stageId + 1;
    setStages(prev => prev.map(stage => ({
      ...stage,
      status: stage.id < nextStage ? "completed" : stage.id === nextStage ? "active" : "locked"
    })));

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { [`roadmapProgress.${params.id}`]: nextStage });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
        <div className="bg-surface border border-surfaceBorder p-8 mb-8 shadow-sm">
          <div className="flex gap-3 mb-4">
            <div className="h-6 w-24 bg-gray-200 rounded-sm"></div>
            <div className="h-6 w-32 bg-gray-200 rounded-sm"></div>
          </div>
          <div className="h-10 w-3/4 bg-gray-200 mb-4 rounded-sm"></div>
          <div className="h-6 w-1/2 bg-gray-200 mb-6 rounded-sm"></div>
          <div className="h-8 w-64 bg-gray-100 rounded-sm"></div>
        </div>
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <div className="h-5 w-32 bg-gray-200 rounded-sm"></div>
            <div className="h-4 w-48 bg-gray-200 rounded-sm"></div>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full"></div>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-6">
              <div className="w-8 h-8 bg-gray-200 rounded-full shrink-0"></div>
              <div className="flex-1 h-32 bg-gray-50 border border-gray-100 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const completedCount = stages.filter(s => s.status === "completed").length;
  const progressPercent = (completedCount / stages.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      
      <div className="bg-surface border border-surfaceBorder p-8 mb-8 shadow-sm">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-bold tracking-wide">
            {levelTag}
          </span>
          <span className="bg-success/10 text-success px-3 py-1 text-sm font-bold tracking-wide">PREMIUM ROADMAP</span>
        </div>
        <h1 className="font-heading text-4xl font-bold mb-2 uppercase">{params.id.replace(/-/g, " ")}</h1>
        <p className="text-lg text-gray-600 flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5" /> {locationTag}
        </p>
      </div>

      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
          <p className="font-bold text-gray-800">Your Progress</p>
          <p className="text-sm text-gray-500 font-medium">You have completed {completedCount} of {stages.length} stages</p>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-success h-full transition-all duration-700 ease-out" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="space-y-6 relative">
        {stages.map((stage, index) => {
          
          if (!isPremium && index > 0) {
            if (index === 1) {
              return (
                <div key={stage.id} className="relative mt-8">
                  
                  <div className="filter blur-sm opacity-30 pointer-events-none select-none">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                         <Circle className="w-8 h-8 text-gray-300 bg-white rounded-full" />
                         <div className="w-0.5 h-48 -mt-2 bg-gray-200"></div>
                      </div>
                      <div className="flex-1 p-6 border bg-gray-50 border-surfaceBorder rounded-sm mb-4">
                         <h3 className="font-heading text-2xl font-bold text-gray-500 mb-2">Stage {stage.id}: {stage.title}</h3>
                         <p className="text-gray-600 mb-4">{stage.desc}</p>
                         <div className="h-10 bg-gray-200 w-1/3 rounded-sm mb-2"></div>
                         <div className="h-10 bg-gray-200 w-1/2 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-transparent via-background/90 to-background">
                    <div className="bg-surface border border-primary/20 p-8 rounded-sm shadow-2xl max-w-lg w-full flex flex-col items-center">
                      <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                        <Lock className="w-8 h-8 text-warning" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Premium Content Locked</h3>
                      <p className="text-gray-600 text-base mb-8 font-medium">
                        Upgrade to Career GPS Premium to instantly unlock all {stages.length} stages, insider application checklists, and verified university strategies.
                      </p>
                      
                      <div className="w-full sm:w-auto">
                        <PremiumPaymentButton />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null; 
          }

          const isCompleted = stage.status === "completed";
          const isActive = stage.status === "active";
          const isLocked = stage.status === "locked";

          return (
            <div key={stage.id} className="relative flex gap-6">
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
                    <ul className="space-y-3">
                      {stage.checklist.map((item: string, i: number) => {
                        const isItemChecked = checkedItems.includes(item);
                        return (
                          <li 
                            key={i} 
                            onClick={() => handleToggleCheck(item)}
                            className={`flex items-start gap-3 p-3 rounded-sm transition-colors border ${
                              isLocked ? "cursor-not-allowed border-transparent" : "cursor-pointer hover:bg-gray-50 border-transparent hover:border-gray-100"
                            }`}
                          >
                            {isItemChecked ? (
                              <CheckSquare className="w-5 h-5 text-success shrink-0 mt-0.5" />
                            ) : (
                              <Square className={`w-5 h-5 shrink-0 mt-0.5 ${isLocked ? "text-gray-300" : "text-gray-400"}`} />
                            )}
                            <span className={`text-sm md:text-base font-medium transition-all ${
                              isItemChecked ? "line-through text-gray-400" : 
                              isLocked ? "text-gray-400" : "text-gray-700"
                            }`}>
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                   {(isActive || isCompleted) && stage.notes && (
                  <div className="bg-warning/10 border-l-4 border-warning p-4 mb-6 flex gap-3">
                    <BookOpen className="w-5 h-5 text-warning shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">{stage.notes}</p>
                  </div>
                )}

                {isActive && isPremium && (
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
