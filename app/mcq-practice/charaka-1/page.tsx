"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw, BookOpen } from "lucide-react";

// The first 20 questions carefully extracted and formatted for the new engine!
const CHARAKA_QUESTIONS = [
  { questionText: "आयुर्वेद के 'त्रिसूत्र' (स्कन्धत्रय) में निम्नलिखित में से कौन सम्मिलित नहीं है?", options: ["हेतु", "लिङ्ग", "औषध", "सम्प्राप्ति"], correctAnswerIndex: 3 },
  { questionText: "चरक के अनुसार 'विपरीत गुणैर्देषमात्राकालोपपादितैः' यह किसका लक्षण है?", options: ["निदान", "पूर्वरूप", "उपशय", "सम्प्राप्ति"], correctAnswerIndex: 2 },
  { questionText: "'स्वेदोऽतिप्रवृत्तिरप्रवृत्तिर्वा, वैवर्ण्यं...' यह किस व्याधि का पूर्वरूप है?", options: ["प्रमेह", "कुष्ठ", "राजयक्ष्मा", "ज्वर"], correctAnswerIndex: 1 },
  { questionText: "'चिन्त्यं विचार्यमूह्यं च ध्येयं सङ्कल्पमेव च।' यह किसके विषय (कर्म) हैं?", options: ["बुद्धि", "आत्मा", "मन", "अहङ्कार"], correctAnswerIndex: 2 },
  { questionText: "'सर्वेषामेव रोगाणां निदानं कुपिता मलाः।' यह सिद्धान्त चरक के किस अध्याय में वर्णित है?", options: ["ज्वर निदान", "अपस्मार निदान", "गुल्म निदान", "प्रमेह निदान"], correctAnswerIndex: 1 },
  { questionText: "गुल्म के कुल कितने अधिष्ठान (स्थान) बताये गए हैं?", options: ["3", "4", "5", "7"], correctAnswerIndex: 2 },
  { questionText: "अपस्मार में 'फेनोद्वमी' (मुंह से झाग आना) लक्षण किस दोष की प्रधानता दर्शाता है?", options: ["वात", "पित्त", "कफ", "सन्निपात"], correctAnswerIndex: 0 },
  { questionText: "'गुरु चातर्पणं चेष्टं ............... कर्शनं प्रति।' (श्लोक पूर्ण करें)", options: ["कृशानां", "स्थूलानां", "प्रमेहिणां", "कुष्ठिनां"], correctAnswerIndex: 1 },
  { questionText: "प्रमेह व्याधि में मुख्य रूप से किस दोष की प्रधानता होती है?", options: ["वात", "पित्त", "कफ", "रक्त"], correctAnswerIndex: 2 },
  { questionText: "चरक सूत्रस्थान के अनुसार 'लङ्घन' के कुल कितने प्रकार हैं?", options: ["6", "8", "10", "12"], correctAnswerIndex: 2 },
  { questionText: "चरक विमान स्थान के अनुसार 'रस' कितने प्रकार के होते हैं?", options: ["4", "5", "6", "8"], correctAnswerIndex: 2 },
  { questionText: "अष्टौ आहार विधि विशेष आयतनों में 'प्रकृति' का क्या अर्थ है?", options: ["संयोग", "स्वभाव", "राशि", "उपयोग संस्था"], correctAnswerIndex: 1 },
  { questionText: "'त्रिविधं रोग विशेष विज्ञानम्' (रोग परीक्षा) में कौन सम्मिलित नहीं है?", options: ["प्रत्यक्ष", "अनुमान", "आप्तोपदेश", "युक्ति"], correctAnswerIndex: 3 },
  { questionText: "जनपदोध्वंस के मुख्य चार कारणों में कौन शामिल नहीं है?", options: ["वायु", "जल", "देश", "अग्नि"], correctAnswerIndex: 3 },
  { questionText: "दशविध परीक्ष्य भावों में 'करण' का तात्पर्य किससे है?", options: ["कर्ता", "कार्य", "भैषज्य", "देश"], correctAnswerIndex: 2 },
  { questionText: "चरक के अनुसार प्राणवह स्रोतस का मूल स्थान क्या है?", options: ["हृदय और महास्रोतस", "फुफ्फुस और श्वासनली", "यकृत और प्लीहा", "वृक्क और वपावहन"], correctAnswerIndex: 0 },
  { questionText: "चरक संहिता के अनुसार विमान स्थान में कृमि के कुल कितने भेद बताए गए हैं?", options: ["4", "5", "20", "24"], correctAnswerIndex: 2 },
  { questionText: "'परपक्षप्रतिषेधमात्रप्रयोजना.......।' यह वाद मार्ग के किस पद का लक्षण है?", options: ["वाद", "जल्प", "वितण्डा", "हेत्वाभास"], correctAnswerIndex: 2 },
  { questionText: "मनुष्यों में 'सार' कितने प्रकार के बताये गए हैं?", options: ["6", "7", "8", "9"], correctAnswerIndex: 2 },
  { questionText: "चरक के अनुसार 'सङ्ख्या प्राधान्य विधिविकल्प बलकाल' यह किसके भेद हैं?", options: ["हेतु", "सम्प्राप्ति", "पूर्वरूप", "उपशय"], correctAnswerIndex: 1 }
];

export default function CharakaTest1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === CHARAKA_QUESTIONS[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < CHARAKA_QUESTIONS.length) {
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
              You scored <span className="text-amber-500 font-bold text-3xl">{score}</span> out of {CHARAKA_QUESTIONS.length}
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
                <BookOpen className="w-4 h-4" /> Charaka Samhita (Part 1)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {CHARAKA_QUESTIONS.length}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
              {CHARAKA_QUESTIONS[currentQuestion].questionText}
            </h2>
            
            <div className="space-y-4">
              {CHARAKA_QUESTIONS[currentQuestion].options.map((option, index) => {
                let buttonStyle = "border-surfaceBorder hover:border-amber-500/50 bg-foreground/5 hover:bg-amber-500/10";
                let Icon = null;

                if (isAnswered) {
                  if (index === CHARAKA_QUESTIONS[currentQuestion].correctAnswerIndex) {
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
                  {currentQuestion + 1 === CHARAKA_QUESTIONS.length ? "Finish Test" : "Next Question"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
