"use client";

import Link from "next/link";
import { Lock, MapPin, ArrowRight, Wallet, GraduationCap, Star, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import PremiumPaymentButton from "../../components/PremiumPaymentButton"; 

// 1. MASTER DATABASE OF ALL SCHOLARSHIPS
const allScholarships = [
  {
    id: "mext-ug",
    title: "MEXT Scholarship",
    location: "JAPAN",
    levelDisplay: "Undergrad / Master's",
    stipend: "¥117,000 - ¥145,000 / month",
    coverage: "100% Tuition & Flights",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-500/10",
    textDark: "text-blue-500"
  },
  {
    id: "chevening-masters",
    title: "Chevening Scholarship",
    location: "UNITED KINGDOM",
    levelDisplay: "Master's (1 Year)",
    stipend: "£917 - £1,134 / month",
    coverage: "100% Funded & Visa",
    color: "from-red-500 to-rose-600",
    bgLight: "bg-red-500/10",
    textDark: "text-red-500"
  },
  {
    id: "daad-masters",
    title: "DAAD Scholarship",
    location: "GERMANY",
    levelDisplay: "Master's / PhD",
    stipend: "EUR 992 / month",
    coverage: "Free Tuition & Health",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-500/10",
    textDark: "text-amber-500"
  },
  {
    id: "daad-wise",
    title: "DAAD WISE Internship",
    location: "GERMANY",
    levelDisplay: "Undergraduate (STEM)",
    stipend: "EUR 861 / month",
    coverage: "Travel Allowance",
    color: "from-green-500 to-emerald-600",
    bgLight: "bg-green-500/10",
    textDark: "text-green-500"
  },
  {
    id: "daad-phd",
    title: "DAAD Research Grants",
    location: "GERMANY",
    levelDisplay: "PhD / Research",
    stipend: "EUR 1,400 / month",
    coverage: "Free Tuition & Health",
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-500/10",
    textDark: "text-purple-500"
  },
  {
    id: "mext-phd",
    title: "MEXT Research Scholarship",
    location: "JAPAN",
    levelDisplay: "PhD / Research",
    stipend: "¥145,000 / month",
    coverage: "100% Tuition & Flights",
    color: "from-cyan-500 to-blue-600",
    bgLight: "bg-cyan-500/10",
    textDark: "text-cyan-500"
  },
  {
    id: "commonwealth-masters",
    title: "Commonwealth Master's",
    location: "UNITED KINGDOM",
    levelDisplay: "Master's (Development)",
    stipend: "£1,378 - £1,652 / month",
    coverage: "Full Tuition & Flights",
    color: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-500/10",
    textDark: "text-teal-500"
  },
  {
    id: "fulbright-masters",
    title: "Fulbright-Nehru Fellowship",
    location: "UNITED STATES",
    levelDisplay: "Master's & Doctoral",
    stipend: "$35K - $45K / year",
    coverage: "Full Tuition & Airfare",
    color: "from-blue-700 to-indigo-900",
    bgLight: "bg-blue-600/10",
    textDark: "text-blue-500"
  }
];

export default function ScholarshipsDirectory() {
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

  const freeScholarships = allScholarships.slice(0, 2);
  const premiumScholarships = allScholarships.slice(2);

  const renderCard = (scholarship: any) => (
    <div key={scholarship.id} className="group bg-surface border border-surfaceBorder rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full">
      <div className={`h-2 w-full bg-gradient-to-r ${scholarship.color}`}></div>
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-1">{scholarship.title}</h2>
            <p className="flex items-center gap-1.5 text-sm font-bold text-foreground/50 uppercase tracking-wider">
              <MapPin className="w-4 h-4" /> {scholarship.location}
            </p>
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${scholarship.bgLight} ${scholarship.textDark}`}>
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-foreground/40 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Level</p>
              <p className="font-medium text-foreground">{scholarship.levelDisplay}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Wallet className="w-5 h-5 text-foreground/40 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Financial Support</p>
              <p className="font-medium text-success">{scholarship.stipend}</p>
              <p className="text-sm text-foreground/60">{scholarship.coverage}</p>
            </div>
          </div>
        </div>

        <Link 
          href={`/roadmap/${scholarship.id}`}
          className="w-full bg-surfaceBorder/30 border border-surfaceBorder text-foreground font-bold py-4 px-4 rounded-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors flex items-center justify-center gap-2 mt-auto"
        >
          Launch Premium Roadmap <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-16 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-sm font-bold text-success mb-6 border border-success/20">
            <ShieldCheck className="w-4 h-4" /> Official Database
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Fully Funded <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Scholarships</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl">
            Explore our master directory of global fully-funded programs. Select a scholarship to unlock its verified, stage-by-stage application roadmap.
          </p>
        </div>

        <div className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeScholarships.map(renderCard)}
          </div>

          <div className="relative">
            {!isPremium && !isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 bg-background/60 backdrop-blur-[4px]">
                <div className="bg-surface border border-primary/20 p-8 rounded-sm shadow-2xl max-w-lg w-full flex flex-col items-center">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-warning" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Unlock Premium Access</h3>
                  <p className="text-foreground/70 text-base mb-8 font-medium">
                    You are viewing a limited selection. Upgrade to Premium to instantly unlock all global scholarships, insider timelines, and full progress tracking.
                  </p>
                  <div className="w-full sm:w-auto">
                    <PremiumPaymentButton />
                  </div>
                </div>
              </div>
            )}

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${!isPremium && !isLoading ? 'opacity-50 blur-[3px] select-none pointer-events-none' : ''}`}>
              {premiumScholarships.map(renderCard)}
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
