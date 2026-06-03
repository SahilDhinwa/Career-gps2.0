"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronRight, Loader2, Sparkles, Trophy, ArrowLeft } from "lucide-react";

// 1. THE STRATEGIC 4-QUESTION ALGORITHM
const QUIZ_QUESTIONS =
  },
  {
    id: "experience",
    title: "How much full-time, paid professional experience do you have?",
    options: [
      { label: "None / Fresh Graduate", value: "0" },
      { label: "Less than 2 years", value: "1" },
      { label: "2 years or more", value: "2+" }
    ]
  },
  {
    id: "academic",
    title: "What is your current academic score (Percentage / CGPA)?",
    options:
  },
  {
    id: "finance",
    title: "Do you belong to the EWS category or require absolute financial support?",
    options:
  }
];

export default function Matchmaker() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const = useState<any>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleOptionSelect = (value: string) => {
    const questionId = QUIZ_QUESTIONS.id;
    const newAnswers = {...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Smooth transition to the next step
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
    
    // Fake loading delay to increase perceived value and trust
    setTimeout(() => {
      const { degree, experience, academic, finance } = finalAnswers;
      let match = null;

      // The Algorithmic Routing Matrix
      if (degree === "UG") {
        match = {
          name: "MEXT Scholarship",
          country: "Japan",
          tagline: "100% Tuition & ¥117,000 Monthly Stipend",
          link: "/roadmap/mext-ug"
        };
      } else if (degree === "PG" && experience === "2+" && (academic === "MID" || academic === "HIGH" || academic === "TOP")) {
        match = {
          name: "Chevening Scholarship",
          country: "United Kingdom",
          tagline: "The Premier Leadership Program",
          link: "/roadmap/chevening-masters"
        };
      } else if (degree === "PG" && finance === "YES" && (academic === "MID" || academic === "HIGH" || academic === "TOP")) {
        match = {
          name: "Commonwealth Master's",
          country: "United Kingdom",
          tagline: "Development-Focused Full Funding",
          link: "/roadmap/commonwealth-masters"
        };
      } else if ((degree === "PG" || degree === "PHD") && (academic === "HIGH" || academic === "TOP")) {
        match = {
          name: "DAAD Scholarship",
          country: "Germany",
          tagline: "World-Class Education at Zero Tuition",
          link: "/roadmap/daad-masters" 
        };
      } else {
        match = {
          name: "General Application Pathway",
          country: "Global Institutions",
          tagline: "Structured Application Guidance",
          link: `/roadmap/${degree.toLowerCase()}`
        };
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

  return (
    <>
      {/* THE TRIGGER BUTTON */}
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto bg-gray-900 text-white font-bold px-8 py-4 rounded-sm shadow-lg hover:bg-black hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        <Sparkles className="w-5 h-5 text-warning" /> Find My Scholarship
      </button>

      {/* THE MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-surface w-full max-w-lg border border-surfaceBorder rounded-sm shadow-2xl relative overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-surfaceBorder bg-gray-50/50">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Career GPS Matchmaker
              </span>
              <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-800 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 flex-grow">
              {isProcessing? (
                // PROCESSING STATE
                <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse">
                  <Loader2 className="w-12 h-12 mb-6 text-primary animate-spin" />
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Analyzing Profile Matrix...</h3>
                  <p className="text-sm text-gray-500 font-medium">Cross-referencing global funding requirements.</p>
                </div>
              ) : result? (
                // FINAL RESULT STATE
                <div className="text-center py-6 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-success" />
                  </div>
                  <p className="text-xs font-bold text-success uppercase tracking-widest mb-2">Optimal Match Found</p>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">{result.name}</h2>
                  <p className="text-gray-500 font-medium mb-8">{result.country} • {result.tagline}</p>
                  
                  <button 
                    onClick={() => {
                      resetQuiz();
                      router.push(result.link);
                    }}
                    className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    View Verified Roadmap <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={() => { setCurrentStep(0); setAnswers({}); setResult(null); }}
                    className="w-full mt-4 text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                // ACTIVE QUIZ STATE
                <div className="animate-in slide-in-from-right-4 duration-300">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 tracking-wider">
                      <span>QUESTION {currentStep + 1} OF 4</span>
                      <span>{Math.round((currentStep / 4) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 leading-snug">
                    {QUIZ_QUESTIONS.title}
                  </h3>

                  <div className="space-y-3">
                    {QUIZ_QUESTIONS.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(option.value)}
                        className={`w-full text-left px-6 py-4 border-2 rounded-sm font-medium transition-all flex items-center justify-between group ${
                          answers.id] === option.value 
                           ? "border-primary bg-primary/5 text-primary" 
                            : "border-gray-200 text-gray-700 hover:border-primary/50 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                        <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                          answers.id] === option.value? "opacity-100 text-primary" : "text-gray-400"
                        }`} />
                      </button>
                    ))}
                  </div>

                  {currentStep > 0 && (
                    <button 
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="mt-8 text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors flex items-center gap-1"
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
    
