"use client";

import Link from "next/link";
import { Lock, MapPin, ArrowRight, Wallet, GraduationCap, Star, ShieldCheck, ArrowLeft, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import PremiumPaymentButton from "@/components/PremiumPaymentButton"; 

// 1. THE UPDATED DATA DICTIONARY (Merged with new Visual Data)
const scholarshipData = {
  ug: [
    {
      id: "mext-ug",
      title: "MEXT Undergraduate Scholarship",
      location: "Japan • MEXT",
      levelDisplay: "Undergraduate",
      stipend: "¥117,000 / month",
      coverage: "100% Tuition & Flights",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50",
      textDark: "text-blue-700"
    },
    {
      id: "daad-wise",
      title: "DAAD WISE Research Internship",
      location: "Germany • Various Universities",
      levelDisplay: "Undergraduate (STEM)",
      stipend: "EUR 861 / month",
      coverage: "Travel Allowance",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      textDark: "text-amber-700"
    }
  ],
  masters: [
    {
      id: "chevening-masters",
      title: "Chevening Scholarship",
      location: "United Kingdom • Any UK University",
      levelDisplay: "Master's (1 Year)",
      stipend: "£917 - £1,134 / month",
      coverage: "100% Funded & Visa",
      color: "from-red-500 to-rose-600",
      bgLight: "bg-red-50",
      textDark: "text-red-700"
    },
    {
      id: "daad-masters",
      title: "DAAD Study Scholarship",
      location: "Germany • Public Universities",
      levelDisplay: "Master's",
      stipend: "EUR 992 / month",
      coverage: "Free Tuition & Health",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      textDark: "text-amber-700"
    }
  ],
  phd: [
    {
      id: "daad-phd",
      title: "DAAD Research Grants",
      location: "Germany • Research Institutes",
      levelDisplay: "PhD / Research",
      stipend: "EUR 1,400 / month",
      coverage: "Free Tuition & Health",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      textDark: "text-amber-700"
    },
    {
      id: "mext-phd",
      title: "MEXT Research Scholarship",
      location: "Japan • Target Universities",
      levelDisplay: "PhD / Research",
      stipend: "¥145,000 / month",
      coverage: "100% Tuition & Flights",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50",
      textDark: "text-blue-700"
    }
  ]
};

export default function ScholarshipList({ params }: { params: { level: string } }) {
  // 2. LIVE FIREBASE PREMIUM STATE
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setIsPremium(false);
        setIsLoading(false);
        return;
      }
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setIsPremium(userSnap.data().isPremium || false);
        }
      } catch (error) {
        console.error("Failed to fetch premium status", error);
      } finally {
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // 3. SMART ROUTING LOGIC
  const levelKey = params.level as keyof typeof scholarshipData;
  const currentScholarships = scholarshipData[levelKey] || scholarshipData.ug;

  const levelName = params.level === "ug" ? "Undergraduate (UG)" : params.level === "masters" ? "Master's" : "PhD";

  return (
    <div className="min-h-[90vh] bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link href="/study-abroad" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Levels
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-sm font-bold text-success mb-6 border border-success/20">
            <ShieldCheck className="w-4 h-4" /> Verified Programs
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            {levelName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Scholarships</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl">
            Select a fully-funded scholarship below to unlock its verified application roadmap, or choose the general pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* THE GENERAL ROADMAP (Always Unlocked) */}
          <div className="group bg-surface border border-dashed border-gray-300 rounded-sm hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col opacity-80 hover:opacity-100">
            <div className="p-8 flex-grow flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Compass className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">General {levelName} Pathway</h2>
              <p className="text-sm text-gray-500 font-medium mb-8">
                Not sure which specific scholarship to target? Follow our general step-by-step application roadmap.
              </p>
              <Link 
                href={`/roadmap/${params.level}`}
                className="w-full bg-transparent border-2 border-gray-200 text-gray-600 font-bold py-3 px-4 rounded-sm group-hover:border-primary group-hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                View General Roadmap <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* DYNAMIC RENDERING OF PREMIUM CARDS */}
          {currentScholarships.map((scholarship) => (
            <div key={scholarship.id} className="group bg-surface border border-surfaceBorder rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className={`h-2 w-full bg-gradient-to-r ${scholarship.color}`}></div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">{scholarship.title}</h2>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-gray-500 uppercase tracking-wider">
                      <MapPin className="w-4 h-4" /> {scholarship.location}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${scholarship.bgLight} ${scholarship.textDark}`}>
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level</p>
                      <p className="font-medium text-gray-800">{scholarship.levelDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wallet className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Financial Support</p>
                      <p className="font-medium text-success">{scholarship.stipend}</p>
                      <p className="text-sm text-gray-500">{scholarship.coverage}</p>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/roadmap/${scholarship.id}`}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 font-bold py-4 px-4 rounded-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors flex items-center justify-center gap-2"
                >
                  Launch Premium Roadmap <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* 4. THE SMART PREMIUM GATEKEEPER */}
          {!isLoading && !isPremium && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 relative mt-8">
              
              {/* Blurred Skeleton Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-30 select-none pointer-events-none filter blur-[4px]">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="bg-surface border border-surfaceBorder h-[400px] rounded-sm p-8 flex flex-col">
                    <div className="h-6 bg-gray-300 w-3/4 mb-4 rounded-sm"></div>
                    <div className="h-4 bg-gray-200 w-1/2 mb-8 rounded-sm"></div>
                    <div className="space-y-4 flex-grow">
                      <div className="h-4 bg-gray-100 w-full rounded-sm"></div>
                      <div className="h-4 bg-gray-100 w-5/6 rounded-sm"></div>
                    </div>
                    <div className="h-12 bg-gray-200 w-full rounded-sm mt-auto"></div>
                  </div>
                ))}
              </div>

              {/* The Razorpay Upgrade Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="bg-surface border border-primary/20 p-8 rounded-sm shadow-2xl max-w-lg w-full flex flex-col items-center translate-y-12">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-warning" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Unlock The Full Database</h3>
                  <p className="text-gray-600 text-base mb-8 font-medium">
                    You are viewing a limited selection. Upgrade to Career GPS Premium to instantly unlock the remaining 40+ global scholarships, insider timelines, and full progress tracking.
                  </p>
                  <div className="w-full sm:w-auto">
                    <PremiumPaymentButton />
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
