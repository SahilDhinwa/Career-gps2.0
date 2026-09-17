"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen } from "lucide-react";

const BATCH_2022_QUESTIONS = [
  { 
    questionText: "'यतश्चायुष्याणि अनायुष्याणि च द्रव्यगुणकर्माणि।' इस परिभाषा का उल्लेख किस आचार्य ने किया है।", 
    options: ["आचार्य चरक", "आचार्य सुश्रुत", "आचार्य नागार्जुन", "आचार्य भावमिश्र"], 
    correctAnswerIndex: 0,
    explanation: "चरक संहिता सूत्रस्थान 1 में आयु और अनायुष्य द्रव्यों के गुण-कर्म का वर्णन करते हुए यह परिभाषा दी गई है।"
  },
  { 
    questionText: "वीरुध का उदाहरण निम्न में से कौनसा सही है।", 
    options: ["वट", "कण्टकारी", "आम्र", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 1,
    explanation: "कण्टकारी जमीन पर फैलने वाली (प्रतानवती) 'वीरुध' का सटीक शास्त्रीय उदाहरण है।"
  },
  { 
    questionText: "'कर्मभिस्वनुमीयन्ते नानाद्रव्याश्रयाः गुणाः।' इस परिभाषा के लेखक कौन है।", 
    options: ["आचार्य नागार्जुन", "आचार्य चरक", "आचार्य सुश्रुत", "आचार्य वाग्भट"], 
    correctAnswerIndex: 1,
    explanation: "यह परिभाषा आचार्य चरक (सूत्रस्थान 1) की है, जहाँ उन्होंने बताया है कि अप्रत्यक्ष गुणों का अनुमान प्रत्यक्ष कर्मों द्वारा होता है।"
  },
  { 
    questionText: "क्षार को रस किस आचार्य ने माना है।", 
    options: ["धामार्गव", "कांकायन", "वायोर्विद", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य 'निमि' ने क्षार को सातवाँ रस माना है, जो दिए गए विकल्पों में नहीं है।"
  },
  { 
    questionText: "नागार्जुन के अनुसार लघु विपाक में निम्न में से कौनसा गुण कारण नहीं होता है।", 
    options: ["विशद", "रूक्ष", "तीक्ष्ण", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 3,
    explanation: "नागार्जुन के अनुसार लघु विपाक के कारणों में लघु, रूक्ष, तीक्ष्ण, विशद आदि सभी गुण आते हैं, अतः कोई भी विकल्प 'कारण नहीं' की श्रेणी में नहीं है।"
  },
  { 
    questionText: "वीर्य की उपलब्धि किससे होती है।", 
    options: ["निपात", "अधिवास", "निपात व अधिवास से", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "वीर्य का परिज्ञान निपात (जीभ/त्वचा पर स्पर्श) और अधिवास (पाचन के बाद शरीर में रहने तक) दोनों से होता है।"
  },
  { 
    questionText: "द्रव्य किससे कार्य करता है।", 
    options: ["द्रव्यप्रभाव से", "गुणप्रभाव से", "द्रव्यप्रभाव व गुणप्रभाव से", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "आयुर्वेद के अनुसार कुछ द्रव्य अपने विशिष्ट द्रव्य-प्रभाव से और कुछ अपने गुण-प्रभाव (रस, गुण, वीर्य, विपाक) से कार्य करते हैं।"
  },
  { 
    questionText: "निम्न में से शीतग्राही व उष्णग्राही का सही कर्म क्या है।", 
    options: ["स्तम्भन", "ग्राही", "स्तम्भन व ग्राही", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "द्रव्य शीत वीर्य होने पर 'स्तम्भन' और उष्ण वीर्य होने पर 'ग्राही' कर्म करता है।"
  },
  { 
    questionText: "वासा किस मिश्रक वर्ग में वर्णित है।", 
    options: ["तृणपंचमूल", "वल्लीपंचमूल", "पंचतिक्त", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "वासा 'पञ्चतिक्त' वर्ग (गुडूची, निम्ब, वासा, कण्टकारी, पटोल) का एक प्रमुख द्रव्य है।"
  },
  { 
    questionText: "गुडूची नामकरण का आधार क्या है।", 
    options: ["देशोक्ति", "लांछन", "रूढि", "वीर्य"], 
    correctAnswerIndex: 2,
    explanation: "गुडूची नामकरण 'रूढि' (परम्परागत प्रसिद्धि और लोक व्यवहार) पर आधारित माना जाता है।"
  },
  { 
    questionText: "भेषज परीक्षा मुख्यरूप से किस पर आधारित है।", 
    options: ["रसपरीक्षा", "स्पर्श परीक्षा", "रूप परीक्षा", "उपरोक्त सभी"], 
    correctAnswerIndex: 3,
    explanation: "भेषज परीक्षा (Organoleptic evaluation) पञ्चज्ञानेन्द्रियों द्वारा रस, रूप, गंध, स्पर्श आदि सभी के आधार पर की जाती है।"
  },
  { 
    questionText: "हेमंत ऋतु में पौधे का कौन सा भाग एकत्रित किया जाता है।", 
    options: ["पुष्प", "मूल", "पत्र", "सार"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य सुश्रुत के भेषज संग्रहण नियमों के अनुसार हेमन्त ऋतु में वृक्षों का 'सार' (Heartwood) भाग ग्रहण करना चाहिए।"
  },
  { 
    questionText: "एल्कलॉइड किसमें घुलनशील नहीं होते है।", 
    options: ["पानी", "एथेनोल", "मेथेनोल", "क्लोरोफॉर्म"], 
    correctAnswerIndex: 0,
    explanation: "क्रूड (शुद्ध) एल्कलॉइड्स कार्बनिक विलायकों में घुलनशील होते हैं, परन्तु पानी (Water) में सामान्यतः अघुलनशील (Insoluble) होते हैं।"
  },
  { 
    questionText: "फार्माकोविजिलेंस का मुख्य उद्देश्य है-", 
    options: ["औषधी की बिक्री को बढ़ावा देना", "औषधी पता लगाना, मूल्यांकन, समझना और रोकथाम", "औषधी की क्षमता बढ़ाना", "नई औषधी बनाना"], 
    correctAnswerIndex: 1,
    explanation: "फार्माकोविजिलेंस का मुख्य कार्य दवाओं के प्रतिकूल प्रभावों (ADRs) की निगरानी करना और उनसे बचाव करना है।"
  },
  { 
    questionText: "निर्गुण्डी का प्रतिनिधि है।", 
    options: ["तुलसी", "वासा", "रास्ना", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "भावप्रकाश निघण्टु के अभाव प्रतिनिधि द्रव्य सिद्धांत के अनुसार निर्गुण्डी के अभाव में रास्ना, और रास्ना के अभाव में निर्गुण्डी का प्रयोग किया जाता है।"
  },
  { 
    questionText: "नेटवर्क फार्माकोलॉजी मुख्य रूप केंद्रित है-", 
    options: ["एक दवा-एक लक्ष्य", "एक दवा-एकाधिक लक्ष्य", "एक रोग-एक लक्ष्य", "कोई संबंध नहीं"], 
    correctAnswerIndex: 1,
    explanation: "नेटवर्क फार्माकोलॉजी 'One drug - multiple targets' के आधुनिक सिद्धांत पर कार्य करती है।"
  },
  { 
    questionText: "बायोइन्फॉर्मेटिक्स का मुख्य उद्देश्य है-", 
    options: ["बायोलॉजिकल जानकारी का डेटा स्टोरेज और एनालिसिस", "हर्बल दवाएं बनाना", "क्लिनिकल ट्रायल", "माइक्रोस्कोपी"], 
    correctAnswerIndex: 0,
    explanation: "यह कंप्यूटर और आईटी की मदद से जटिल जैविक डेटा (Genomic/Proteomic) को स्टोर और विश्लेषित करने की तकनीक है।"
  },
  { 
    questionText: "RET कैटेगरी का मतलब है-", 
    options: ["पके हुए, खाने लायक, स्वादिष्ट", "दुर्लभ, लुप्तप्राय और संकटग्रस्त प्रजातियां", "लाल, पन्ना, तुलसी के पौधे", "रजिस्टर्ड एक्सपोर्ट पेड़"], 
    correctAnswerIndex: 1,
    explanation: "RET का पूर्ण रूप 'Rare, Endangered & Threatened' प्रजातियां है, जिनका संरक्षण अत्यंत आवश्यक है।"
  },
  { 
    questionText: "API किसके द्वारा प्रकाशित है।", 
    options: ["WHO", "CCRAS", "Govt. of India", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "आयुर्वेदिक फार्माकोपिया ऑफ इंडिया (API) भारत सरकार के आयुष मंत्रालय (PCIMH) द्वारा प्रकाशित किया जाता है।"
  },
  { 
    questionText: "सुरपाल का वृक्षायुर्वेद मुख्य रूप से इनसे संबंधित है-", 
    options: ["इंसानी बीमारियाँ", "पौधों की खेती और सुरक्षा", "रसायन से बनी चीजें", "ज्योतिष"], 
    correctAnswerIndex: 1,
    explanation: "सुरपाल रचित 'वृक्षायुर्वेद' विशेष रूप से औषधीय पादपों के कृषिकरण, पोषण (कुणप जल) और रोगों से रक्षा पर केंद्रित ग्रन्थ है।"
  }
];

export default function Batch2022Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < BATCH_2022_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    BATCH_2022_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = BATCH_2022_QUESTIONS[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const userChoice = selectedAnswers[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice/dravyaguna" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-amber-500/30 rounded-sm p-10 text-center shadow-xl animate-in fade-in zoom-in duration-500">
            <Award className="w-20 h-20 text-amber-500 mx-auto mb-6 drop-shadow-md" />
            <h2 className="text-3xl font-heading font-bold mb-4">Exam Completed!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-4xl">{calculateScore()}</span> out of {BATCH_2022_QUESTIONS.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                <RefreshCcw className="w-5 h-5" /> Retake Exam
              </button>
              <Link href="/mcq-practice/dravyaguna" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Hub
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-amber-500/20 rounded-sm p-8 md:p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-sm font-bold text-[10px] tracking-wider uppercase flex items-center gap-2 shadow-sm">
                <Award className="w-3.5 h-3.5" /> 2022 Main Exam
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {BATCH_2022_QUESTIONS.length}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
              {qData.questionText}
            </h2>
            
            <div className="space-y-4">
              {qData.options.map((option, index) => {
                let buttonStyle = "border-surfaceBorder hover:border-amber-500/50 bg-foreground/5 hover:bg-amber-500/10";
                let Icon = null;

                if (isAnswered) {
                  if (index === qData.correctAnswerIndex) {
                    buttonStyle = "border-success bg-success/10 text-success font-bold shadow-sm";
                    Icon = <CheckCircle2 className="w-5 h-5" />;
                  } else if (index === userChoice) {
                    buttonStyle = "border-destructive bg-destructive/10 text-destructive line-through opacity-70";
                    Icon = <XCircle className="w-5 h-5" />;
                  } else {
                    buttonStyle = "border-surfaceBorder bg-foreground/5 opacity-40";
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

            {/* EXPLANATION POP-UP */}
            {isAnswered && qData.explanation && (
              <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-sm p-5 shadow-inner animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-sm text-foreground/90 leading-relaxed font-medium mb-3">
                  <span className="font-bold text-amber-500 mr-2">Explanation:</span> 
                  {qData.explanation}
                </p>
              </div>
            )}

            {/* NAVIGATION */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-surfaceBorder/50">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`font-bold py-2.5 px-5 rounded-sm transition-colors flex items-center gap-2 ${
                  currentQuestion === 0 
                    ? 'opacity-0 pointer-events-none' 
                    : 'text-foreground/60 hover:bg-foreground/5 hover:text-foreground border border-surfaceBorder'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
              
              {isAnswered && (
                <button 
                  onClick={handleNextQuestion} 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-sm shadow-sm transition-colors flex items-center gap-2 animate-in fade-in duration-300"
                >
                  {currentQuestion + 1 === BATCH_2022_QUESTIONS.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
