"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, RotateCcw, Award } from "lucide-react";

// The array we just generated
const dgPaper2Batch2021 = [
  {
    id: 1,
    question: {
      hindi: "जत्रुगत रोगों में भेषज का प्रयोग कब करते हैं।",
      english: "When is bheshaja used in Jatrugata diseases?"
    },
    options: [
      { id: "A", text: { hindi: "सग्रास", english: "Sagras" } },
      { id: "B", text: { hindi: "अभक्त", english: "Abhakta" } },
      { id: "C", text: { hindi: "निशा", english: "Nisha" } },
      { id: "D", text: { hindi: "इनमें से कोई नहीं", english: "None of these" } }
    ],
    correctAnswer: "C",
    explanation: {
      english: "According to Sharangadhara Samhita, medicines for Urdhwajatrugata rogas (diseases of the head and neck) should be administered during Nisha kala (night/bedtime)."
    }
  },
  {
    id: 2,
    question: {
      hindi: "रिक्त स्थान की पूर्ति करें --------- नाम केवलमेवौषधम् ।",
      english: "Fill in the blanks. --------- naam kevalmevaushadham |"
    },
    options: [
      { id: "A", text: { hindi: "ग्रासान्तरं", english: "Grasantaram" } },
      { id: "B", text: { hindi: "अधोभक्तं", english: "Adhobhaktam" } },
      { id: "C", text: { hindi: "अभक्तं", english: "Abhaktam" } },
      { id: "D", text: { hindi: "सभक्तं", english: "Sabhaktam" } }
    ],
    correctAnswer: "C",
    explanation: {
      english: "As per Ashtanga Hridaya, 'Abhaktam nama kevalamevaushadham' refers to medicine taken on an empty stomach without any food."
    }
  },
  {
    id: 3,
    question: {
      hindi: "आषाढ़ व श्रावण में कौनसी ऋतु है।",
      english: "Which season is there in Ashadha and Shravana?"
    },
    options: [
      { id: "A", text: { hindi: "वसन्तऋतु", english: "Spring season" } },
      { id: "B", text: { hindi: "शरदऋतु", english: "Autumn season" } },
      { id: "C", text: { hindi: "ग्रीष्मऋतु", english: "Summer season" } },
      { id: "D", text: { hindi: "इनमें से कोई नहीं", english: "None of these" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "Ashadha and Shravana months constitute Varsha Ritu (Monsoon season), which is not listed in the given options."
    }
  },
  {
    id: 4,
    question: {
      hindi: "औषध परीक्षा में वर्णित नहीं है-",
      english: "Not mentioned in Aushadha pariksha."
    },
    options: [
      { id: "A", text: { hindi: "प्रकृति", english: "Prakruti" } },
      { id: "B", text: { hindi: "गुण", english: "Guna" } },
      { id: "C", text: { hindi: "प्रभाव", english: "Prabhava" } },
      { id: "D", text: { hindi: "इनमें से कोई नहीं", english: "None of these" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "Prakruti is primarily examined during 'Atura Pariksha' (examination of the patient). Aushadha Pariksha focuses on Rasa, Guna, Virya, Vipaka, and Prabhava."
    }
  },
  {
    id: 5,
    question: {
      hindi: "दीपन और वाजीकरण औषधियों का प्रयोग किस काल में करते है-",
      english: "In which period Deepan and Vajeekarana medicines are used--"
    },
    options: [
      { id: "A", text: { hindi: "सग्रास", english: "Sagras" } },
      { id: "B", text: { hindi: "सभक्त", english: "Sabhakta" } },
      { id: "C", text: { hindi: "अभक्त", english: "Abhakta" } },
      { id: "D", text: { hindi: "इनमें से कोई नहीं", english: "None of these" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "Deepana and Vajeekarana medicines are generally administered Sagrasa (mixed with morsels of food) to maximize their systemic action while avoiding gastric irritation."
    }
  },
  {
    id: 6,
    question: {
      hindi: "निम्न में से किस द्रव्य में कषायरस होता है -",
      english: "Which of the following Dravya is Astringent (Kashaya)?"
    },
    options: [
      { id: "A", text: { hindi: "अर्जुन", english: "Arjuna" } },
      { id: "B", text: { hindi: "मोचरस", english: "Mochras" } },
      { id: "C", text: { hindi: "कांचनार", english: "Kanchanara" } },
      { id: "D", text: { hindi: "उपरोक्त सभी", english: "All of the above" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "Arjuna, Mocharasa (exudate of Shalmali), and Kanchanara all dominantly possess Kashaya (astringent) Rasa."
    }
  },
  {
    id: 7,
    question: {
      hindi: "Mimosa pudica किस द्रव्य का लैटिन नाम है।",
      english: "Mimosa pudica is the Latin name of which Dravya."
    },
    options: [
      { id: "A", text: { hindi: "लज्जालु", english: "Lajjalu" } },
      { id: "B", text: { hindi: "कुंकुम", english: "Kumkum" } },
      { id: "C", text: { hindi: "कम्पिल्लक", english: "Kampillaka" } },
      { id: "D", text: { hindi: "जातीफल", english: "Jatiphala" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "Mimosa pudica is the botanical name for Lajjalu (Touch-me-not plant)."
    }
  },
  {
    id: 8,
    question: {
      hindi: "शल्लकी के निर्यास को क्या कहते हैं।",
      english: "What is the exude (Niryas) of Shallaki called?"
    },
    options: [
      { id: "A", text: { hindi: "कुन्दरु", english: "Kundaru" } },
      { id: "B", text: { hindi: "मोचरस", english: "Mocharasa" } },
      { id: "C", text: { hindi: "गुग्गुलु", english: "Guggulu" } },
      { id: "D", text: { hindi: "बोल", english: "Bola" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "The oleo-gum resin (niryasa) obtained from the Shallaki tree (Boswellia serrata) is called Kundaru."
    }
  },
  {
    id: 9,
    question: {
      hindi: "निम्न में से Verbenaceae कुल का द्रव्य है।",
      english: "Which of the following is Dravya of the Verbenaceae family."
    },
    options: [
      { id: "A", text: { hindi: "अग्निमंथ", english: "Agnimantha" } },
      { id: "B", text: { hindi: "भारंगी", english: "Bharangi" } },
      { id: "C", text: { hindi: "गम्भारी", english: "Gambhari" } },
      { id: "D", text: { hindi: "उपरोक्त सभी", english: "All of the above" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "Agnimantha, Bharangi, and Gambhari all traditionally belong to the Verbenaceae family."
    }
  },
  {
    id: 10,
    question: {
      hindi: "वत्सनाभ की औषधीय मात्रा कितनी है।",
      english: "What is the medicinal dose of Vatsanabha?"
    },
    options: [
      { id: "A", text: { hindi: "250-500 मि.ग्रा.", english: "250-500 mg" } },
      { id: "B", text: { hindi: "120-250 मि.ग्रा.", english: "120-250 mg" } },
      { id: "C", text: { hindi: "60-120 मि.ग्रा.", english: "60-120 mg" } },
      { id: "D", text: { hindi: "15-30 मि.ग्रा.", english: "15-30 mg" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "Vatsanabha (Aconitum ferox) is a Mahavisha. Its purified therapeutic dose is extremely small, typically 1/8 to 1/4 Ratti, which equals approximately 15 to 30 mg."
    }
  },
  {
    id: 11,
    question: {
      hindi: "भावप्रकाश के अनुसार गुग्गुलु के कितने प्रकार/भेद हैं।",
      english: "According to Bhava Prakash, how many types of Guggulu are there?"
    },
    options: [
      { id: "A", text: { hindi: "5", english: "5" } },
      { id: "B", text: { hindi: "4", english: "4" } },
      { id: "C", text: { hindi: "2", english: "2" } },
      { id: "D", text: { hindi: "कोई नहीं", english: "none" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "Bhavaprakasha describes 5 types of Guggulu based on color and properties: Mahishaksha, Mahaneela, Kumuda, Padma, and Hiranya."
    }
  },
  {
    id: 12,
    question: {
      hindi: "निम्न में से कौनसी कुंकुम उत्तम है।",
      english: "Which of the following kumkum is the best?"
    },
    options: [
      { id: "A", text: { hindi: "काश्मीरज", english: "Kashmiraja" } },
      { id: "B", text: { hindi: "बाह्लीक", english: "Vahliq" } },
      { id: "C", text: { hindi: "पारसीक", english: "Parsiq" } },
      { id: "D", text: { hindi: "उपरोक्त सभी", english: "All of the above" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "Ayurvedic texts classify Kumkum (Saffron) into three grades. Kashmiraja (from Kashmir) is considered the best (Uttama)."
    }
  },
  {
    id: 13,
    question: {
      hindi: "मुस्ता किस महाकषाय में वर्णित है।",
      english: "Musta is mentioned in which Mahakashaya?"
    },
    options: [
      { id: "A", text: { hindi: "लेखनीय", english: "Lekhaniya" } },
      { id: "B", text: { hindi: "बल्य", english: "Balya" } },
      { id: "C", text: { hindi: "अर्शोघ्न", english: "Arshoghna" } },
      { id: "D", text: { hindi: "कोई भी नहीं", english: "None of these" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "Acharya Charaka mentions Musta in Lekhaniya, Kandughna, Stanyashodhana, and Trishna nigrahana Mahakashayas."
    }
  },
  {
    id: 14,
    question: {
      hindi: "निम्ब का मुख्य कर्म है-",
      english: "The main Action of Nimba is-"
    },
    options: [
      { id: "A", text: { hindi: "कण्डूघ्न", english: "Kandughn" } },
      { id: "B", text: { hindi: "कुष्ठघ्न", english: "Kushthaghn" } },
      { id: "C", text: { hindi: "वेदनास्थापन", english: "Vedanaasthapan" } },
      { id: "D", text: { hindi: "लेखन", english: "Lekhan" } }
    ],
    correctAnswer: "A",
    explanation: {
      english: "While Nimba is renowned for treating skin diseases, Acharya Charaka specifically categorizes it under the Kandughna (anti-pruritic) Mahakashaya."
    }
  },
  {
    id: 15,
    question: {
      hindi: "निम्न में से पंचरस किस द्रव्य में है।",
      english: "Which of the following dravya have contains five Rasa?"
    },
    options: [
      { id: "A", text: { hindi: "हरीतकी", english: "Haritaki" } },
      { id: "B", text: { hindi: "आमलकी", english: "Aamalaki" } },
      { id: "C", text: { hindi: "रशोन", english: "Rason" } },
      { id: "D", text: { hindi: "उपरोक्त सभी", english: "All of the above" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "Haritaki, Amalaki, and Rasona are all classic examples of Pancharasa dravyas (possessing 5 out of 6 tastes)."
    }
  },
  {
    id: 16,
    question: {
      hindi: "धातकी का प्रयोज्यांग क्या है।",
      english: "What is the useful part of Dhataki?"
    },
    options: [
      { id: "A", text: { hindi: "पत्र", english: "Leaf" } },
      { id: "B", text: { hindi: "मूल", english: "Root" } },
      { id: "C", text: { hindi: "फल", english: "Fruit" } },
      { id: "D", text: { hindi: "पुष्प", english: "Flower" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "The flowers (Pushpa) of Dhataki (Woodfordia fruticosa) are widely used, especially as a fermenting agent in Asava and Arishta."
    }
  },
  {
    id: 17,
    question: {
      hindi: "धान्यक का वीर्य है",
      english: "Dhanyaka veerya is ?"
    },
    options: [
      { id: "A", text: { hindi: "तीक्ष्ण", english: "Tikshan" } },
      { id: "B", text: { hindi: "मृदु", english: "Mridu" } },
      { id: "C", text: { hindi: "शीत", english: "Sheeta" } },
      { id: "D", text: { hindi: "उष्ण", english: "Ushan" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "While fresh Dhanyaka is often considered Sheeta, dry Dhanyaka (seeds) is typically classified as Ushna Virya according to texts like Bhavaprakasha."
    }
  },
  {
    id: 18,
    question: {
      hindi: "मण्डूकपर्णी का कुल कौनसा है।",
      english: "Which is the family of Mandukaparni?"
    },
    options: [
      { id: "A", text: { hindi: "रैननकुलेसी", english: "Ranunculaceae" } },
      { id: "B", text: { hindi: "कॉन्वोल्वुलेसी", english: "Convolvulaceae" } },
      { id: "C", text: { hindi: "फैबेसी", english: "Fabaceae" } },
      { id: "D", text: { hindi: "इनमें से कोई नहीं", english: "None of these" } }
    ],
    correctAnswer: "D",
    explanation: {
      english: "The botanical family of Mandukaparni (Centella asiatica) is Apiaceae (formerly Umbelliferae), which is not listed in the options."
    }
  },
  {
    id: 19,
    question: {
      hindi: "'Malabar Nut' किस द्रव्य का अंग्रेजी नाम है।",
      english: "'Malabar Nut' is the English name of which Dravya ?"
    },
    options: [
      { id: "A", text: { hindi: "खदिर", english: "Khadira" } },
      { id: "B", text: { hindi: "कालमेघ", english: "Kalamegha" } },
      { id: "C", text: { hindi: "वासा", english: "Vasa" } },
      { id: "D", text: { hindi: "अर्जुन", english: "Arjuna" } }
    ],
    correctAnswer: "C",
    explanation: {
      english: "Vasa (Adhatoda vasica) is commonly known in English as the Malabar Nut tree."
    }
  },
  {
    id: 20,
    question: {
      hindi: "निम्न में से किस द्रव्य में कुरकुमिन पाया जाता है।",
      english: "Curcumin is found in which of the following dravya?"
    },
    options: [
      { id: "A", text: { hindi: "एरण्ड", english: "Erand" } },
      { id: "B", text: { hindi: "दारुहरिद्रा", english: "Daruhandra" } },
      { id: "C", text: { hindi: "हरिद्रा", english: "Haridra" } },
      { id: "D", text: { hindi: "गुग्गुलु", english: "Guggulu" } }
    ],
    correctAnswer: "C",
    explanation: {
      english: "Curcumin is the primary active chemical constituent of Haridra (Curcuma longa), giving it its characteristic yellow color and anti-inflammatory properties."
    }
  }
];

export default function Batch2021Paper2Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = dgPaper2Batch2021[currentIndex];

  const handleOptionSelect = (optionId: string) => {
    if (selectedAnswer) return; // Prevent changing answer after selection
    
    setSelectedAnswer(optionId);
    setShowExplanation(true);
    
    if (optionId === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < dgPaper2Batch2021.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 pb-24 px-4 md:px-6">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/mcq-practice/dravyaguna" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-amber-500 transition-colors font-bold text-sm bg-surface/80 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
          </Link>
        </div>

        {/* Title Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3.5 py-1 rounded-sm text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" /> Official Exam • Batch 2021
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Dravyaguna Paper 2 <span className="text-amber-500">2021 (Main)</span>
          </h1>
        </div>

        {!isCompleted ? (
          <div className="bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-xl p-6 md:p-10 relative overflow-hidden transition-all duration-300">
            
            {/* Progress & Score */}
            <div className="flex items-center justify-between text-xs font-bold text-foreground/60 mb-8 pb-4 border-b border-surfaceBorder">
              <span>QUESTION {currentIndex + 1} OF {dgPaper2Batch2021.length}</span>
              <span className="text-amber-500">SCORE: {score}</span>
            </div>

            {/* Question Area */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-3">
                {currentQuestion.question.hindi}
              </h2>
              <p className="text-sm md:text-base font-medium text-foreground/60 italic">
                {currentQuestion.question.english}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.correctAnswer;
                
                let buttonStyle = "bg-surface/50 border-surfaceBorder hover:border-amber-500 hover:bg-amber-500/5 text-foreground";
                
                if (showExplanation) {
                  if (isCorrect) {
                    buttonStyle = "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400";
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400";
                  } else {
                    buttonStyle = "bg-surface/30 border-surfaceBorder/50 text-foreground/40 opacity-70";
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    disabled={showExplanation}
                    className={`text-left p-4 rounded-sm border-2 transition-all duration-300 flex items-start gap-3 ${buttonStyle}`}
                  >
                    <span className="font-bold flex-shrink-0 mt-0.5">{option.id}.</span>
                    <div>
                      <p className="font-bold text-[15px]">{option.text.hindi}</p>
                      <p className="text-xs opacity-80 mt-1">{option.text.english}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation Area */}
            {showExplanation && (
              <div className="mb-8 p-5 bg-amber-500/10 border border-amber-500/20 rounded-sm animate-in fade-in slide-in-from-bottom-4">
                <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block mb-2">
                  Explanation
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  {currentQuestion.explanation.english}
                </p>
              </div>
            )}

            {/* Next Button */}
            {selectedAnswer && (
              <div className="flex justify-end border-t border-surfaceBorder pt-6">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-sm shadow-md transition-all flex items-center gap-2"
                >
                  {currentIndex < dgPaper2Batch2021.length - 1 ? "Next Question" : "View Results"} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

          </div>
        ) : (
          /* Completion State */
          <div className="bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-xl p-10 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Exam Completed!</h2>
            <p className="text-foreground/70 mb-6">
              You scored <span className="font-bold text-amber-500">{score}</span> out of {dgPaper2Batch2021.length}.
            </p>
            <button
              onClick={handleRestart}
              className="px-8 py-3.5 bg-amber-500 text-white font-bold rounded-sm hover:bg-amber-600 transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Retake Exam
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
