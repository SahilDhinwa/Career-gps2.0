"use client"; // Required for live user state

import Link from "next/link";
import { MapPin, ArrowRight, Wallet, GraduationCap, Star, ShieldCheck, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase"; 
import { onAuthStateChanged } from "firebase/auth";

export default function StudyAbroadHub() {
  // --- USER MEMORY ---
  const [firstName, setFirstName] = useState<string | null>(null);

  // Fetch the name the second the dashboard loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        // Splits the full name and grabs the first name for a cleaner greeting
        setFirstName(user.displayName.split(" ")[0]);
      } else {
        setFirstName(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // --- PREMIUM SCHOLARSHIP DATABASE ---
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
    <div className="min-h-screen bg-background px-6 py-16">
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-sm font-bold text-success mb-6 border border-success/20">
          <Sparkles className="w-4 h-4" /> Premium Access Hub
        </div>
        
        {/* Dynamic Welcome Message */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          {firstName ? `Welcome back, ${firstName}` : "Global Scholarship Directory"}
        </h1>
        
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Explore fully-funded global scholarships. Choose your destination to unlock a tailored roadmap and step-by-step application timelines.
        </p>
      </div>

      {/* Scholarship Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="group bg-surface border border-surfaceBorder rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col">
            
            {/* Color Banner Top */}
            <div className={`h-2 w-full bg-gradient-to-r ${scholarship.color}`}></div>
            
            <div className="p-8 flex-grow flex flex-col">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                    {scholarship.name}
                  </h2>
                  <p className="flex items-center gap-1.5 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <MapPin className="w-4 h-4" /> {scholarship.country}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${scholarship.bgLight} ${scholarship.textDark}`}>
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>

              {/* Data Points */}
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

              {/* Action Button */}
              <Link 
                href={`/roadmap/${scholarship.id}`}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 font-bold py-4 px-4 rounded-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors flex items-center justify-center gap-2"
              >
                Launch Roadmap <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
