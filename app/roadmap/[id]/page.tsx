"use client";

import { CheckCircle, Circle, MapPin, BookOpen, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase"; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

// --- 1. GENERIC MASTER'S ROADMAP (3 Stages) ---
const masterRoadmap = [
  { id: 1, title: "Initial Research", desc: "Identify programs aligned with your goals.", checklist: ["List top 5 university choices", "Verify basic eligibility criteria"] },
  { id: 2, title: "Standardized Testing", desc: "Prepare for your English proficiency exams.", checklist: ["Book IELTS/TOEFL date", "Take diagnostic test"] },
  { id: 3, title: "Document Compilation", desc: "Gather transcripts and draft your SOP.", checklist: ["Draft SOP", "Contact referees for LORs"] }
];

// --- 2. GENERIC UG ROADMAP (3 Stages) ---
const ugRoadmap = [
  { id: 1, title: "Profile Building & Academics", desc: "Focus on maintaining a 75%+ academic score.", checklist: ["Maintain 75%+ in 12th grade", "Build leadership portfolio"] },
  { id: 2, title: "Standardized Tests", desc: "Prepare for the SAT/ACT and English proficiency tests.", checklist: ["Book SAT/ACT date", "Take IELTS/TOEFL diagnostic"] },
  { id: 3, title: "Essays & Applications", desc: "Draft your SOP and submit via the Common App.", checklist: ["Draft Study Plan", "Get School Recommendation"] }
];

// --- 3. PREMIUM MEXT ROADMAP (Japan - 10 Stages) ---
const mextUgRoadmap = [
  { id: 1, title: "Scholarship Overview", desc: "Covers 100% tuition, flights, and provides ¥117,000 monthly stipend.", checklist: ["Understand funding", "Identify UG category"] },
  { id: 2, title: "Complete Eligibility Checklist", desc: "Verify your age, nationality, and academic criteria.", checklist: ["Confirm age limit", "Target 75%+ in Class 12"] },
  { id: 3, title: "What MEXT Covers", desc: "The scholarship is worth approx ₹14–17 lakh per year.", checklist: ["Review stipend", "Calculate monthly budget"] },
  { id: 4, title: "Month-by-Month Timeline", desc: "Track your timeline starting from September preparation.", checklist: ["Check embassy site in April", "Prepare physical submission"] },
  { id: 5, title: "Documents Required", desc: "Collect mark sheets, recommendation letters, and draft Study Plan.", checklist: ["Download current forms", "Get principal recommendation"] },
  { id: 6, title: "Application Process", desc: "Submit physical copies to the Embassy via registered post.", checklist: ["Write specific Study Plan", "Send via registered post"] },
  { id: 7, title: "Written Exam & Interview", desc: "Clear the NCERT standard written exam in New Delhi.", checklist: ["Start NCERT revision", "Practice past exam papers"] },
  { id: 8, title: "University Selection", desc: "Research target universities; MEXT assigns your UG placement.", checklist: ["Match field to course", "Research top 3 universities"] },
  { id: 9, title: "From Offer to Arrival", desc: "Secure CoE, apply for student visa, and pack for Japan.", checklist: ["Apply for Visa", "Pack heavy winter clothing"] },
  { id: 10, title: "Final Preparation", desc: "Arrive in Japan and begin your 1-year language training.", checklist: ["Carry Yen for month 1", "Start language training"] }
];

// --- 4. PREMIUM CHEVENING ROADMAP (UK - 8 Stages) ---
const cheveningRoadmap = [
  { id: 1, title: "Overview: What Is Chevening?", desc: "UK Government's 100% funded master's program for global leaders.", checklist: ["Understand 1-year duration", "Target UK universities"] },
  { id: 2, title: "The 5 Must-Meet Criteria", desc: "Requires 2:1 degree (60%+) and minimum 2,800 hours of work experience.", checklist: ["Verify 2,800 work hours", "Confirm 2:1 degree equivalent"] },
  { id: 3, title: "Full Financial Breakdown", desc: "Covers tuition (MBA capped at £22k), flights, visa, and £917-£1,134/mo.", checklist: ["Review London vs non-London stipend", "Estimate monthly budget"] },
  { id: 4, title: "How To Apply (Portal Walkthrough)", desc: "Portal opens in August and closes in early October.", checklist: ["Register on applications.chevening.org", "Select 3 UK university courses"] },
  { id: 5, title: "The 4 Critical Essays", desc: "Write 300-500 words on Leadership, Networking, UK Study, and Career Plan.", checklist: ["Draft Leadership story", "Draft Career return plan"] },
  { id: 6, title: "British High Commission Interview", desc: "A 30-minute panel probing your essays, leadership, and India impact.", checklist: ["Prepare for specific essay probing", "Research chosen university"] },
  { id: 7, title: "Month-by-Month Timeline", desc: "Follow the application cycle from January prep to September departure.", checklist: ["Set Oct deadline reminder", "Sit IELTS/TOEFL in summer"] },
  { id: 8, title: "Winning Tips", desc: "Essays are the differentiator. Start 5-7 drafts by June.", checklist: ["Get alumni essay review", "Ensure clear career narrative"] }
];

// --- 5. PREMIUM DAAD ROADMAP (Germany - 10 Stages) ---
const daadRoadmap = [
  { id: 1, title: "DAAD Overview", desc: "Germany's premier scholarship making public university 100% free with a living stipend.", checklist: ["Identify EPOS, Study, or WISE track", "Review EUR 992/mo stipend"] },
  { id: 2, title: "Eligibility Criteria", desc: "Check the strict 6-year degree rule for Study Scholarships.", checklist: ["Confirm degree recency (under 6 yrs)", "Verify 70%+ academic marks"] },
  { id: 3, title: "What DAAD Covers", desc: "Provides ~EUR 14,164+ annually including health insurance and travel.", checklist: ["Understand health coverage", "Note Blocked Account requirement"] },
  { id: 4, title: "Month-by-Month Timeline", desc: "Start 12 months early. APS Certificate takes 4-6 weeks.", checklist: ["Target Winter/Summer intake", "Apply for APS 10 months early"] },
  { id: 5, title: "Documents Required", desc: "APS Certificate, Motivation Letter, Transcripts, and IELTS/TestDaF.", checklist: ["Apply at aps-india.de (₹18k)", "Collect official sealed transcripts"] },
  { id: 6, title: "Application Process", desc: "Submit completely online via portal.daad.de. No physical submission.", checklist: ["Create DAAD portal account", "Have referees submit via link"] },
  { id: 7, title: "Written Exam & Interview", desc: "No exam for Master's. Selection is heavily based on your Motivation Letter.", checklist: ["Focus 80% effort on Motivation Letter", "PhD: Outreach to German professors"] },
  { id: 8, title: "University & Course Selection", desc: "Find English or German-taught programs at top universities like TUM or RWTH.", checklist: ["Select 3-5 target universities", "Check semester fees (EUR 200-400)"] },
  { id: 9, title: "From Offer to Arrival", desc: "Deposit EUR 11,208 into a Fintiba/Expatrio Blocked Account for the visa.", checklist: ["Book VFS Visa appointment", "Open Blocked Account"] },
  { id: 10, title: "FJI Verdict & Insider Tips", desc: "Generic motivation letters are the #1 reason for rejection. Be impossibly specific.", checklist: ["Name specific professors in SOP", "Ensure clear India-development angle"] }
];

export default function RoadmapTracker({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // --- SMART ROUTER & LOCATION TAGGING ---
  let baseRoadmap = masterRoadmap;
  let locationTag = "Global Institutions";
  let levelTag = "MASTER'S LEVEL";

  if (params.id.includes("chevening")) {
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

  // BULLETPROOF INITIALIZATION
  const [stages, setStages] = useState<any[]>(
    baseRoadmap.map(stage => ({ ...stage, status: stage.id === 1 ? "active" : "locked" }))
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setIsLoading(false);
        return;
      }
      
      setUser(currentUser);

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
        }
      } catch (error) {
        console.error("Failed to fetch progress", error);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [params.id, baseRoadmap]);

  const handleMarkComplete = async (stageId: number) => {
    if (!user) {
      router.push("/login"); 
      return;
    }

    const nextStage = stageId + 1;

    setStages(prev => prev.map(stage => ({
      ...stage,
      status: stage.id < nextStage ? "completed" : stage.id === nextStage ? "active" : "locked"
    })));

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        [`roadmapProgress.${params.id}`]: nextStage
      });
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  // --- SKELETON UI ---
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

  // --- ACTUAL UI ---
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

      <div className="space-y-6">
        {stages.map((stage, index) => {
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
                      
