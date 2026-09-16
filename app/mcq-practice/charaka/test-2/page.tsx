"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw, BookOpen } from "lucide-react";

// Questions 21-40 (Sharir & Indriya Sthana)
const CHARAKA_QUESTIONS_2 = [
  { questionText: "'षड्धातुज पुरुष' में पञ्चमहाभूतों के अतिरिक्त छठा भाव क्या है?", options: ["मन", "अहङ्कार", "चेतना", "बुद्धि"], correctAnswerIndex: 2 },
  { questionText: "'शुक्रशोणितजीवसंयोगे तु खलु......।' (रिक्त स्थान भरें)", options: ["गर्भाशयगते गर्भसंज्ञा भवति", "कुक्षिगते गर्भसंज्ञा भवति", "योनौ गर्भसंज्ञा भवति", "नाभिगते गर्भसंज्ञा भवति"], correctAnswerIndex: 1 },
  { questionText: "गर्भ में 'त्वक्, रक्त, मांस, मेद, नाभि, हृदय' किस भाव से उत्पन्न होते हैं?", options: ["मातृज", "पितृज", "रसज", "सात्म्यज"], correctAnswerIndex: 0 },
  { questionText: "चरक शारीर स्थान के अनुसार शरीर में कुल अस्थियों की संख्या कितनी है?", options: ["300", "306", "360", "206"], correctAnswerIndex: 2 },
  { questionText: "पर ओज (हृदयस्थ ओज) का प्रमाण कितना होता है?", options: ["अष्ट बिन्दु", "अर्ध अञ्जलि", "एक अञ्जलि", "दो बिन्दु"], correctAnswerIndex: 0 },
  { questionText: "चरक के अनुसार 'मन' के कितने गुण माने गए हैं?", options: ["1", "2 (अणुत्व और एकत्व)", "3 (सत्त्व, रज, तम)", "5"], correctAnswerIndex: 1 },
  { questionText: "'चतुर्विंशति पुरुष' (24 तत्त्व) में क्या सम्मिलित है?", options: ["अष्ट प्रकृति + षोडश विकार", "एकादश इन्द्रिय + पञ्चमहाभूत", "पञ्चतन्मात्रा + मन", "इनमें से कोई नहीं"], correctAnswerIndex: 0 },
  { questionText: "शारीर स्थान के अनुसार पञ्चमहाभूतों में 'आकाश' का विशिष्ट गुण क्या है?", options: ["स्पर्श", "रूप", "रस", "शब्द"], correctAnswerIndex: 3 },
  { questionText: "चरक के अनुसार सत्त्व (मन) के मुख्य कितने भेद (महाभेद) हैं?", options: ["2", "3 (सात्त्विक, राजसिक, तामसिक)", "7", "16"], correctAnswerIndex: 1 },
  { questionText: "चरक संहिता के अनुसार शरीर में कुल कितनी त्वचाएँ (Skin layers) बताई गई हैं?", options: ["5", "6", "7", "8"], correctAnswerIndex: 1 },
  { questionText: "चरक संहिता में 'इन्द्रिय स्थान' का मुख्य प्रतिपाद्य विषय क्या है?", options: ["इन्द्रिय रचना", "अरिष्ट (मृत्युसूचक) लक्षण", "इन्द्रिय रोग", "शरीर प्रमाण"], correctAnswerIndex: 1 },
  { questionText: "'पुष्पितक' (पुष्पितक इन्द्रिय) का वर्णन चरक के किस स्थान में है?", options: ["विमान स्थान", "निदान स्थान", "इन्द्रिय स्थान", "शारीर स्थान"], correctAnswerIndex: 2 },
  { questionText: "इन्द्रिय स्थान के अनुसार 'छाया' कितने प्रकार की होती है?", options: ["4", "5", "6", "7"], correctAnswerIndex: 1 },
  { questionText: "चरक के अनुसार 'प्रभा' कितने प्रकार की होती है?", options: ["5", "6", "7", "8"], correctAnswerIndex: 2 },
  { questionText: "'गोमयचूर्णवर्णाभं...' (गाय के सूखे गोबर के चूर्ण जैसा) किस व्याधि का अरिष्ट शकृत् लक्षण है?", options: ["राजयक्ष्मा", "प्रमेह", "गुल्म", "उदर रोग"], correctAnswerIndex: 0 },
  { questionText: "'क्षीरघृतभ्यासो ...............।' (अग्र्यसंग्रह पूर्ण करें)", options: ["जीवनीयानाम्", "बृंहणानाम्", "रसायनानाम्", "वृष्याणाम्"], correctAnswerIndex: 2 },
  { questionText: "संतर्पणोत्थ व्याधियों की श्रेष्ठ चिकित्सा क्या मानी गई है?", options: ["अपतर्पण (रूक्षण)", "संतर्पण (बृंहण)", "स्नेहन", "रक्तमोक्षण"], correctAnswerIndex: 0 },
  { questionText: "विधीशोणितीय अध्याय के अनुसार शुद्ध रक्त का वर्ण कैसा होता है?", options: ["गुञ्जाफल सवर्ण", "पद्मालक्तक सन्ननिभ", "इन्द्रगोपक सङ्काश", "उपर्युक्त सभी"], correctAnswerIndex: 3 },
  { questionText: "चरक के अनुसार 'त्रिमर्म' (Three vital organs) में कौन सम्मिलित नहीं है?", options: ["हृदय", "बस्ति", "शिर", "नाभि"], correctAnswerIndex: 3 },
  { questionText: "अष्टौ निन्दित पुरुष में सर्वाधिक निन्दित (Most condemned) किसे माना गया है?", options: ["अतिदीर्घ", "अतिह्रस्व", "अतिस्थूल", "अतिकृश"], correctAnswerIndex: 2 }
];

export default function CharakaTest2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === CHARAKA_QUESTIONS_2[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < CHARAKA_QUESTIONS_2.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Test Directory
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 text-center shadow-xl">
            <BookOpen className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Test Complete!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-3xl">{score}</span> out of {CHARAKA_QUESTIONS_2.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2">
                <RefreshCcw className="w-5 h-5" /> Retake Test
              </button>
              <Link href="/mcq-practice" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Directory
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-8 md:p-10 shadow-xl">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="text-amber-500 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Charaka Samhita (Part 2)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {CHARAKA_QUESTIONS_2.length}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
              {CHARAKA_QUESTIONS_2[currentQuestion].questionText}
            </h2>
            
            <div className="space-y-4">
              {CHARAKA_QUESTIONS_2[currentQuestion].options.map((option, index) => {
                let buttonStyle = "border-surfaceBorder hover:border-amber-500/50 bg-foreground/5 hover:bg-amber-500/10";
                let Icon = null;

                if (isAnswered) {
                  if (index === CHARAKA_QUESTIONS_2[currentQuestion].correctAnswerIndex) {
                    buttonStyle = "border-success bg-success/10 text-success";
                    Icon = <CheckCircle2 className="w-5 h-5" />;
                  } else if (index === selectedOption) {
                    buttonStyle = "border-destructive bg-destructive/10 text-destructive";
                    Icon = <XCircle className="w-5 h-5" />;
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-sm border-2 font-medium transition-all duration-300 flex justify-between items-center ${buttonStyle}`}
                  >
                    <span>{option}</span>
                    {Icon}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-8 flex justify-end">
                <button onClick={handleNextQuestion} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors shadow-sm">
                  {currentQuestion + 1 === CHARAKA_QUESTIONS_2.length ? "Finish Test" : "Next Question"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
