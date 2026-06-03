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
      href: "/study-abroad/ug", // Routing to the new UG directory
      accent: "group-hover:text-blue-600",
    },
    {
      id: "masters",
      title: "Master's",
      description: "College graduates applying for Master's programs.",
      icon: GraduationCap,
      href: "/study-abroad/masters", // Routing to the new Master's directory
      accent: "group-hover:text-success",
    },
    {
      id: "phd",
      title: "PhD",
      description: "Postgraduates applying for rigorous doctoral programs.",
      icon: Award,
      href: "/study-abroad/phd", // Routing to the new PhD directory
      accent: "group-hover:text-warning",
    }
  ];

  return (
    <div className="min-h-[90vh] bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-warning" />
              <span className="text-sm font-bold tracking-wider text-warning uppercase">Your Journey Begins</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {firstName ? `Welcome back, ${firstName}` : "Select Your Level"}
            </h1>
            
            <p className="text-gray-600 mt-3 text-lg max-w-xl">
              Choose your current stage of education. We will show you the exact fully-funded scholarships and verified roadmaps available for your specific level.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level) => {
            const Icon = level.icon;
            return (
              <Link 
                key={level.id} 
                href={level.href}
                className="group relative bg-surface border border-surfaceBorder p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <Icon className={`w-7 h-7 text-primary transition-colors ${level.accent}`} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{level.title}</h2>
                <p className="text-gray-600 font-body text-sm flex-grow mb-8">{level.description}</p>
                <div className="flex items-center text-primary font-bold text-sm mt-auto">
                  <span className="group-hover:mr-2 transition-all">Explore Scholarships</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-sm"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
