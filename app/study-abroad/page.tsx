"use client";

import Link from "next/link";
import { 
  GraduationCap, BookOpen, Award, ChevronRight, Sparkles, 
  MapPin, ArrowRight, Wallet, Star, ShieldCheck 
} from "lucide-react";
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

  // --- 1. YOUR ORIGINAL LEVEL SELECTORS ---
  const levels = [
    {
      id: "ug",
      title: "UG (Undergraduate)",
      description: "Class 11-12 students applying for Bachelor's abroad.",
      icon: BookOpen,
      href: "/roadmap/ug", // Routed to the generic UG roadmap
      accent: "group-hover:text-blue-600",
    },
    {
      id: "masters",
      title: "Master's",
      description: "College graduates applying for Master's programs.",
      icon: GraduationCap,
      href: "/roadmap/masters", // Routed to the generic Master's roadmap
      accent: "group-hover:text-success",
    },
    {
      id: "phd",
      title: "PhD",
      description: "Postgraduates applying for rigorous doctoral programs.",
      icon: Award,
      href: "/roadmap/phd", // Routed to generic PhD (if built)
      accent: "group-hover:text-warning",
    }
  ];

  // --- 2. THE PREMIUM SCHOLARSHIP DATABASE ---
  const scholarships = [
    {
      id: "mext-ug",
      name: "MEXT Scholarship",
      country: "Japan",
      level: "Undergraduate / Master's",
      stipend: "¥117,000 - ¥145,000 / month",
      coverage: "100% Tuition & Flights",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50",
      textDark: "text-blue-700"
    },
    {
      id: "chevening-masters",
      name: "Chevening Scholarship",
      country: "United Kingdom",
      level: "Master's (1 Year)",
      stipend: "£917 - £1,134 / month",
      coverage: "100% Funded & Visa",
      color: "from-red-500 to-rose-600",
      bgLight: "bg-red-50",
      textDark: "text-red-700"
    },
    {
      id: "daad-masters",
      name: "DAAD Scholarship",
      country: "Germany",
      level: "Master's / PhD",
      stipend: "EUR 992 / month",
      coverage: "Free Tuition & Health",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      textDark: "text-amber-700"
    }
  ];

  return (
    <div className="min-h-[90vh] bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
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
              Choose your current stage of education to view general roadmaps, or explore our premium fully-funded scholarship directory below.
            </p>
          </div>
        </div>

        {/* --- SECTION 1: EDUCATION LEVELS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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
                  <span className="group-hover:mr-2 transition-all">View Roadmap</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-sm"></div>
              </Link>
            );
          })}
        </div>

        {/* --- SECTION 2: PREMIUM SCHOLARSHIPS --- */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-6 h-6 text-success" />
            <h2 className="font-heading text-3xl font-bold text-foreground">Featured Premium Scholarships</h2>
          </div>
          <p className="text-gray-500 font-medium">Unlock 10-stage verified roadmaps for fully-funded global programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="group bg-surface border border-surfaceBorder rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className={`h-2 w-full bg-gradient-to-r ${scholarship.color}`}></div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">{scholarship.name}</h2>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-gray-500 uppercase tracking-wider">
                      <MapPin className="w-4 h-4" /> {scholarship.country}
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
                      <p className="font-medium text-gray-800">{scholarship.level}</p>
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
        </div>

      </div>
    </div>
  );
}
