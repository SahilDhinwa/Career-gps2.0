"use client";

import Link from "next/link";
import { Lock, MapPin, ArrowRight, Wallet, GraduationCap, Star, ShieldCheck, ArrowLeft, Compass } from "lucide-react";
import PremiumPaymentButton from "@/components/PremiumPaymentButton"; 
import { useAuth } from "../../../context/AuthContext"; // NEW: Connect to the Global Brain

// 1. THE UPDATED DATA DICTIONARY (Dark-Mode Ready Colors)
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
      bgLight: "bg-blue-500/10",
      textDark: "text-blue-500"
    },
    {
      id: "daad-wise",
      title: "DAAD WISE Research Internship",
      location: "Germany • Various Universities",
      levelDisplay: "Undergraduate (STEM)",
      stipend: "EUR 861 / month",
      coverage: "Travel Allowance",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-500/10",
      textDark: "text-amber-500"
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
      bgLight: "bg-red-500/10",
      textDark: "text-red-500"
    },
    {
      id: "daad-masters",
      title: "DAAD Study Scholarship",
      location: "Germany • Public Universities",
      levelDisplay: "Master's",
      stipend: "EUR 992 / month",
      coverage: "Free Tuition & Health",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-500/10",
      textDark: "text-amber-500"
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
      location: "United States • USIEF",
      levelDisplay: "Master's & Doctoral",
      stipend: "$35K - $45K / year",
      coverage: "Full Tuition & Airfare",
      color: "from-blue-700 to-indigo-900",
      bgLight: "bg-blue-500/10",
      textDark: "text-blue-500"
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
      bgLight: "bg-amber-500/10",
      textDark: "text-amber-500"
    },
    {
      id: "mext-phd",
      title: "MEXT Research Scholarship",
      location: "Japan • Target Universities",
      levelDisplay: "PhD / Research",
      stipend: "¥145,000 / month",
      coverage: "100% Tuition & Flights",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-500/10",
      textDark: "text-blue-500"
    }
  ]
};

export default function ScholarshipList({ params }: { params: { level: string } }) {
  
  // NEW: Pull Premium status instantly from the Brain instead of querying Firebase manually
  const { isPremium, isLoading } = useAuth(); 

  const levelKey = params.level as keyof typeof scholarshipData;
  const currentScholarships = scholarshipData[levelKey] || scholarshipData.ug;
  const levelName = params.level === "ug" ? "Undergraduate (UG)" : params.level === "masters" ? "Master's" : "PhD";
  
  // THE REST OF YOUR RETURN STATEMENT STAYS THE SAME BELOW THIS LINE!
return (
    <div className="min-h-screen bg-background py-16 px-6 relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Back Button */}
        <Link href="/study-abroad" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Levels
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-sm font-bold text-success mb-6 border border-success/20 shadow-sm">
            <ShieldCheck className="w-4 h-4" /> Verified Programs
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 drop-shadow-sm">
            {levelName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Scholarships</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl bg-surface/40 backdrop-blur-md p-2 rounded-sm">
            Select a fully-funded scholarship below to unlock its verified application roadmap, or choose the general pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* THE GENERAL ROADMAP (Always Unlocked) */}
          <div className="group bg-surface/60 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm hover:border-primary/50 transition-all duration-500 relative overflow-hidden flex flex-col opacity-90 hover:opacity-100 hover:shadow-lg">
            <div className="p-8 flex-grow flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-foreground/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <Compass className="w-8 h-8 text-foreground/40 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">General {levelName} Pathway</h2>
              <p className="text-sm text-foreground/60 font-medium mb-8">
                Not sure which specific scholarship to target? Follow our general step-by-step application roadmap.
              </p>
              <Link 
                href={`/roadmap/${params.level}`}
                className="w-full bg-transparent border-2 border-surfaceBorder text-foreground/80 font-bold py-3 px-4 rounded-sm group-hover:border-primary group-hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                View General Roadmap <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* DYNAMIC RENDERING OF PREMIUM CARDS */}
          {currentScholarships.map((scholarship) => (
            <div key={scholarship.id} className="group bg-surface/90 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className={`h-2 w-full bg-gradient-to-r ${scholarship.color}`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="p-8 flex-grow flex flex-col relative z-10">
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
          ))}

          {/* 4. THE SMART PREMIUM GATEKEEPER */}
          {!isLoading && !isPremium && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 relative mt-8">
              
              {/* Blurred Skeleton Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-30 select-none pointer-events-none filter blur-[4px]">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="bg-surface border border-surfaceBorder h-[400px] rounded-sm p-8 flex flex-col">
                    <div className="h-6 bg-surfaceBorder w-3/4 mb-4 rounded-sm"></div>
                    <div className="h-4 bg-surfaceBorder/50 w-1/2 mb-8 rounded-sm"></div>
                    <div className="space-y-4 flex-grow">
                      <div className="h-4 bg-surfaceBorder/30 w-full rounded-sm"></div>
                      <div className="h-4 bg-surfaceBorder/30 w-5/6 rounded-sm"></div>
                    </div>
                    <div className="h-12 bg-surfaceBorder w-full rounded-sm mt-auto"></div>
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
                  <p className="text-foreground/70 text-base mb-8 font-medium">
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
