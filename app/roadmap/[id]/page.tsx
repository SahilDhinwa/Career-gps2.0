"use client";

import { CheckCircle, Circle, MapPin, BookOpen, ChevronRight, CheckSquare, Square, Lock, Sparkles, Crown } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase"; 
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import PremiumPaymentButton from "../../../components/PremiumPaymentButton"; 

import { 
  masterRoadmap, 
  ugRoadmap, 
  mextUgRoadmap, 
  cheveningRoadmap, 
  daadRoadmap,
  commonwealthRoadmap,
  fulbrightRoadmap 
} from "../../../lib/roadmaps";

export default function RoadmapTracker({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isPremium, setIsPremium] = useState(false);

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
  } else if (params.id.includes("fulbright")) { 
    baseRoadmap = fulbrightRoadmap;
    locationTag = "United States • USIEF";
    levelTag = "MASTER'S & DOCTORAL LEVEL";
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
      await setDoc(userRef, { [`checklistProgress.${params.id}`]: newCheckedItems }, { merge: true });
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
      await setDoc(userRef, { [`roadmapProgress.${params.id}`]: nextStage }, { merge: true });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 animate-pulse bg-background min-h-screen">
        <div className="bg-surface border border-surfaceBorder p-8 md:p-12 mb-8 rounded-sm shadow-sm">
          <div className="flex gap-3 mb-6">
            <div className="h-6 w-24 bg-surfaceBorder/50 rounded-sm"></div>
            <div className="h-6 w-32 bg-surfaceBorder/50 rounded-sm"></div>
          </div>
          <div className="h-12 w-3/4 bg-surfaceBorder/80 mb-4 rounded-sm"></div>
          <div className="h-6 w-1/2 bg-surfaceBorder/40 mb-6 rounded-sm"></div>
        </div>
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div className="h-5 w-32 bg-surfaceBorder/60 rounded-sm"></div>
            <div className="h-4 w-48 bg-surfaceBorder/40 rounded-sm"></div>
          </div>
          <div className="w-full bg-surfaceBorder/30 h-2 rounded-full"></div>
        </div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-6">
              <div className="w-10 h-10 bg-surfaceBorder/40 rounded-full shrink-0"></div>
              <div className="flex-1 h-40 bg-surface/40 border border-surfaceBorder rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const completedCount = stages.filter(s => s.status === "completed").length;
  const progressPercent = (completedCount / stages.length) * 100;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-success/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 relative z-10">
        
        {/* PREMIUM COMMAND HEADER */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden group transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="flex flex-wrap gap-3 mb-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> {levelTag}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-warning/10 text-warning border border-warning/20 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider shadow-sm">
              <Crown className="w-3.5 h-3.5" /> PREMIUM ROADMAP
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 uppercase text-foreground drop-shadow-sm relative z-10">
            {params.id.replace(/-/g, " ")}
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 flex items-center gap-2 font-medium relative z-10">
            <MapPin className="w-5 h-5 text-primary" /> {locationTag}
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-12 bg-surface/50 backdrop-blur-sm border border-surfaceBorder p-6 rounded-sm shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-4 gap-2">
            <p className="font-heading text-xl font-bold text-foreground">Mission Progress</p>
            <p className="text-sm text-foreground/60 font-bold bg-background/50 px-3 py-1 rounded-sm border border-surfaceBorder">
              {completedCount} of {stages.length} Stages Completed
            </p>
          </div>
          <div className="w-full bg-background h-3 rounded-full overflow-hidden border border-surfaceBorder/50 shadow-inner">
            <div className="bg-gradient-to-r from-success/80 to-success h-full transition-all duration-1000 ease-out relative" style={{ width: `${progressPercent}%` }}>
               <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="space-y-6 md:space-y-8 relative">
          {stages.map((stage, index) => {
            
            // PREMIUM GATEKEEPER RENDERING
            if (!isPremium && index > 0) {
              if (index === 1) {
                return (
                  <div key={stage.id} className="relative mt-12">
                    
                    {/* Blurred Background Skeleton */}
                    <div className="filter blur-[5px] opacity-40 pointer-events-none select-none">
                      <div className="flex gap-4 md:gap-8">
                        <div className="flex flex-col items-center">
                           <Circle className="w-8 h-8 md:w-10 md:h-10 text-foreground/20 bg-background rounded-full" />
                           <div className="w-0.5 h-64 -mt-2 bg-surfaceBorder"></div>
                        </div>
                        <div className="flex-1 p-6 md:p-8 border bg-surface/50 border-surfaceBorder rounded-sm mb-4">
                           <h3 className="font-heading text-2xl font-bold text-foreground/50 mb-2">Stage {stage.id}: {stage.title}</h3>
                           <p className="text-foreground/60 mb-6">{stage.desc}</p>
                           <div className="h-12 bg-surfaceBorder/50 w-full md:w-1/3 rounded-sm mb-3"></div>
                           <div className="h-12 bg-surfaceBorder/50 w-full md:w-1/2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Razorpay Call To Action */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-t from-background via-background/95 to-transparent pt-10">
                      <div className="bg-surface/90 backdrop-blur-md border border-primary/30 p-8 md:p-10 rounded-sm shadow-2xl max-w-lg w-full flex flex-col items-center transform translate-y-8">
                        <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6 border border-warning/20 shadow-inner">
                          <Lock className="w-8 h-8 text-warning" />
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 drop-shadow-sm">Premium Content Locked</h3>
                        <p className="text-foreground/70 text-base mb-8 font-medium leading-relaxed">
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
              <div key={stage.id} className="relative flex gap-4 md:gap-8">
                
                {/* Timeline Axis */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="bg-background z-10 py-1">
                    {isCompleted && <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-success bg-background rounded-full shadow-sm" />}
                    {isActive && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-40 animate-pulse"></div>
                        <Circle className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/10 bg-background rounded-full shadow-md relative z-10" />
                      </div>
                    )}
                    {isLocked && <Circle className="w-8 h-8 md:w-10 md:h-10 text-foreground/20 bg-background rounded-full" />}
                  </div>
                  {index !== stages.length - 1 && (
                    <div className={`w-0.5 h-full -mt-2 transition-colors duration-500 ${isCompleted ? "bg-success" : "bg-surfaceBorder/80"}`}></div>
                  )}
                </div>

                {/* Stage Content Card */}
                <div className={`flex-1 p-6 md:p-8 border mb-6 rounded-sm transition-all duration-500 ${
                  isCompleted ? "bg-surface/80 backdrop-blur-sm border-success/30 shadow-sm" : 
                  isActive ? "bg-surface/95 backdrop-blur-md border-primary/50 shadow-xl shadow-primary/5 transform md:scale-[1.02]" : 
                  "bg-background/50 border-surfaceBorder opacity-70"
                }`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                    <h3 className={`font-heading text-2xl md:text-3xl font-bold ${isLocked ? "text-foreground/50" : "text-foreground"}`}>
                      Stage {stage.id}: {stage.title}
                    </h3>
                    <span className={`self-start text-[10px] md:text-xs font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm border ${
                      isCompleted ? "bg-success/10 text-success border-success/30" : 
                      isActive ? "bg-primary/10 text-primary border-primary/30 shadow-sm" : "bg-foreground/5 text-foreground/50 border-surfaceBorder"
                    }`}>
                      {stage.status.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <p className={`text-base md:text-lg mb-8 leading-relaxed ${isLocked ? "text-foreground/50" : "text-foreground/80"}`}>
                    {stage.desc}
                  </p>

                  {/* Checklist Section */}
                  {(isActive || isCompleted) && stage.checklist && (
                    <div className="mb-8">
                      <p className="font-bold text-xs md:text-sm text-foreground mb-4 uppercase tracking-widest flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-primary" /> Action Items
                      </p>
                      <ul className="space-y-3">
                        {stage.checklist.map((item: string, i: number) => {
                          const isItemChecked = checkedItems.includes(item);
                          return (
                            <li 
                              key={i} 
                              onClick={() => handleToggleCheck(item)}
                              className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-sm transition-all duration-300 border ${
                                isLocked ? "cursor-not-allowed border-transparent" : 
                                isItemChecked ? "bg-success/5 border-success/20 cursor-pointer" :
                                "bg-background/50 border-surfaceBorder hover:border-primary/40 hover:bg-surface hover:shadow-sm cursor-pointer"
                              }`}
                            >
                              {isItemChecked ? (
                                <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0 mt-0.5" />
                              ) : (
                                <Square className={`w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5 transition-colors ${isLocked ? "text-foreground/20" : "text-foreground/40 group-hover:text-primary/50"}`} />
                              )}
                              <span className={`text-sm md:text-base font-medium transition-all duration-300 leading-relaxed ${
                                isItemChecked ? "line-through text-foreground/40" : 
                                isLocked ? "text-foreground/40" : "text-foreground/90"
                              }`}>
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  
                  {/* Notes / Tips Section */}
                  {(isActive || isCompleted) && stage.notes && (
                    <div className="bg-warning/5 border border-warning/20 border-l-4 border-l-warning p-4 md:p-5 mb-8 flex gap-3 md:gap-4 rounded-sm shadow-sm">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-warning shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">{stage.notes}</p>
                    </div>
                  )}

                  {/* Advance Button */}
                  {isActive && isPremium && (
                    <button 
                      onClick={() => handleMarkComplete(stage.id)}
                      className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 hover:bg-primaryHover transition-all duration-300 mt-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 rounded-sm"
                    >
                      {user ? "Mark Stage Complete" : "Login to Save Progress"} <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
                }
