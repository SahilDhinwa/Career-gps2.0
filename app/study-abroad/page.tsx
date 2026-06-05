"use client";

import Link from "next/link";
import { GraduationCap, BookOpen, Award, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase"; 
import { onAuthStateChanged } from "firebase/auth";

export default function StudyAbroadDashboard() {
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setFirstName(user.displayName.split(" ")[0]);
      } else {
        setFirstName(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const levels = [
    {
      id: "ug",
      title: "UG (Undergraduate)",
      description: "Class 11-12 students applying for Bachelor's abroad.",
      icon: BookOpen,
      href: "/study-abroad/ug",
      accent: "group-hover:text-blue-500",
      glow: "from-blue-500/10"
    },
    {
      id: "masters",
      title: "Master's",
      description: "College graduates applying for Master's programs.",
      icon: GraduationCap,
      href: "/study-abroad/masters",
      accent: "group-hover:text-success",
      glow: "from-success/10"
    },
    {
      id: "phd",
      title: "PhD",
      description: "Postgraduates applying for rigorous doctoral programs.",
      icon: Award,
      href: "/study-abroad/phd",
      accent: "group-hover:text-warning",
      glow: "from-warning/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-6 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambient Orbs for 4K / Large Screens */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-success/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-md border border-surfaceBorder text-sm font-bold text-warning mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" /> Your Journey Begins
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 drop-shadow-sm">
              {firstName ? `Welcome back, ` : "Select Your "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">
                {firstName ? firstName : "Level"}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl font-medium leading-relaxed bg-surface/50 backdrop-blur-md py-3 px-6 rounded-sm border border-surfaceBorder shadow-sm">
              Choose your current stage of education. We will deploy the exact fully-funded scholarships and verified roadmaps available for your specific level.
            </p>
          </div>
        </div>

        {/* 3-Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level) => {
            const Icon = level.icon;
            return (
              <Link 
                key={level.id} 
                href={level.href}
                className="group relative bg-surface/60 backdrop-blur-md border border-surfaceBorder p-10 rounded-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Subtle Hover Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${level.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Animated Top Border Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                <div className="w-16 h-16 bg-background border border-surfaceBorder rounded-full flex items-center justify-center mb-8 shadow-inner relative z-10 group-hover:border-primary/30 transition-colors">
                  <Icon className={`w-8 h-8 text-foreground/40 transition-colors duration-300 ${level.accent}`} />
                </div>
                
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4 relative z-10">{level.title}</h2>
                <p className="text-foreground/60 font-medium text-base flex-grow mb-10 relative z-10 leading-relaxed">{level.description}</p>
                
                <div className="flex items-center text-primary font-bold text-sm mt-auto relative z-10 bg-primary/5 px-5 py-3 rounded-sm border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="flex-grow">Deploy Roadmap</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
