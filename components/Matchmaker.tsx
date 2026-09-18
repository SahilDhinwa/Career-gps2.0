"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronRight, Loader2, Sparkles, Trophy, ArrowLeft } from "lucide-react";

// 1. THE COMPLETE 4-QUESTION ALGORITHM
const QUIZ_QUESTIONS = [
  {
    id: "degree",
    title: "What degree level are you seeking funding for?",
    options: [
      { label: "Undergraduate", value: "UG" },
      { label: "Postgraduate", value: "PG" },
      { label: "Doctorate", value: "PHD" }
    ]
  },
  {
    id: "experience",
    title: "How much full-time professional work experience do you have?",
    options: [
      { label: "None / Fresh Graduate", value: "0" },
      { label: "Less than 2 years", value: "1" },
      { label: "2 years or more", value: "2+" }
    ]
  },
  {
    id: "academic",
    title: "What is your current academic score (Percentage / CGPA)?",
    options: [
      { label: "Top 10% / Distinctive", value: "TOP" },
      { label: "Above Average (First Class)", value: "HIGH" },
      { label: "Average (Second Class)", value: "MID" }
    ]
  },
  {
    id: "finance",
    title: "Do you belong to the EWS category or require absolute financial support?",
    options: [
      { label: "Yes, full funding is essential", value: "YES" },
      { label: "No, I have partial/full funding", value: "NO" }
    ]
  }
];

export default function Matchmaker() {
  const router = useRouter();
  
  // 2. STATE VARIABLES
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);

  // 3. EFFECTS
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // 4. HANDLERS
  const handleOptionSelect = (value: string) => {
    const currentQuestionId = QUIZ_QUESTIONS[currentStep].id;
    const newAnswers = { ...answers, [currentQuestionId]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < QUIZ_QUESTIONS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        processAlgorithm(newAnswers);
      }
    }, 300);
  };

  const processAlgorithm = (finalAnswers: Record<string, string>) => {
    setIsProcessing(true);
    
    setTimeout(() => {
      const { degree, experience, academic, finance } = finalAnswers;
      let match = null;

      // The Routing Algorithm
      if (degree === "UG") {
        match = { name: "MEXT Scholarship", country: "Japan", tagline: "100% Tuition & ¥117,000 Monthly Stipend", link: "/roadmap/mext-ug" };
      } else if ((degree === "PG" || degree === "PHD") && experience === "2+" && academic === "TOP") {
        match = { name: "Fulbright-Nehru Fellowship", country: "United States", tagline: "US Govt Fully Funded Program", link: "/roadmap/fulbright-masters" };
      } else if (degree === "PG" && experience === "2+" && (academic === "MID" || academic === "HIGH")) {
        match = { name: "Chevening Scholarship", country: "United Kingdom", tagline: "The Premier Leadership Program", link: "/roadmap/chevening-masters" };
      } else if (degree === "PG" && finance === "YES" && (academic === "MID" || academic === "HIGH")) {
        match = { name: "Commonwealth Master's", country: "United Kingdom", tagline: "Development-Focused Full Funding", link: "/roadmap/commonwealth-masters" };
      } else if ((degree === "PG" || degree === "PHD") && academic === "HIGH") {
        match = { name: "DAAD Scholarship", country: "Germany", tagline: "World-Class Education at Zero Tuition", link: "/roadmap/daad-masters" };
      } else {
        match = { name: "General Master's Pathway", country: "Global Institutions", tagline: "Structured Application Guidance", link: `/roadmap/${degree.toLowerCase()}` };
      }

      setResult(match);
      setIsProcessing(false);
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setIsOpen(false);
  };

  // 5. RENDER
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-3.5 md:py-4 rounded-sm shadow-lg hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        <Sparkles className="w-5 h-5" /> Find My Scholarship
      </button>

      {isOpen && (
        // FIX: Increased z-index to z-[100] to sit above the sticky navbar
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-in fade-in duration-300">
          
          {/* FIX: Added max-h-[90vh] to constrain height on small screens */}
          <div className="bg-surface w-full max-w-lg max-h-[90vh] border border-surfaceBorder rounded-sm shadow-2xl relative flex flex-col">
            
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-surfaceBorder bg-surfaceBorder/10 shrink-0">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                Career GPS Matchmaker
              </span>
              <button onClick={resetQuiz} className="text-foreground/40 hover:text-foreground transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FIX: Added overflow-y-auto so the content scrolls inside the modal if it's too tall */}
            <div className="p-6 md:p-8 flex-grow overflow-y-auto">
              {isProcessing ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse">
                  <Loader2 className="w-12 h-12 mb-6 text-primary animate-spin" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Analyzing Profile Matrix...</h3>
                  <p className="text-sm text-foreground/60 font-medium">Cross-referencing global funding requirements.</p>
                </div>
              ) : result ? (
                <div className="text-center py-6 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-success" />
                  </div>
                  <p className="text-xs font-bold text-success uppercase tracking-widest mb-2">Optimal Match Found</p>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-2">{result.name}</h2>
                  <p className="text-foreground/60 font-medium mb-8">{result.country} • {result.tagline}</p>
                  
                  <button 
                    onClick={() => {
                      resetQuiz();
                      router.push(result.link);
                    }}
                    className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    View Verified Roadmap <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="animate-in slide-in-from-right-4 duration-300">
                  <div className="mb-8">
                    <div className="flex justify-between text-xs font-bold text-foreground/40 mb-2 tracking-wider">
                      <span>QUESTION {currentStep + 1} OF 4</span>
                      <span>{Math.round((currentStep / 4) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surfaceBorder/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                    {QUIZ_QUESTIONS[currentStep].title}
                  </h3>

                  <div className="space-y-3">
                    {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => {
                      const currentQuestionId = QUIZ_QUESTIONS[currentStep].id;
                      const isSelected = answers[currentQuestionId] === option.value;
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(option.value)}
                          className={`w-full text-left px-5 py-4 border-2 rounded-sm font-medium transition-all flex items-center justify-between group ${
                            isSelected 
                              ? "border-primary bg-primary/5 text-primary" 
                              : "border-surfaceBorder text-foreground/80 hover:border-primary/50 hover:bg-surfaceBorder/20"
                          }`}
                        >
                          {option.label}
                          <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                            isSelected ? "opacity-100 text-primary" : "text-foreground/40"
                          }`} />
                        </button>
                      );
                    })}
                  </div>

                  {currentStep > 0 && (
                    <button 
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="mt-8 text-sm font-bold text-foreground/40 hover:text-foreground/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Previous Question
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
      }
