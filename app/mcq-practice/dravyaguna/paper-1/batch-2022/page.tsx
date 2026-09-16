"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen, ClipboardList } from "lucide-react";

const BATCH_2022_QUESTIONS = [
  { 
    questionText: "'यतश्चायुष्याणि अनायुष्याणि च द्रव्यगुणकर्माणि।' इस परिभाषा का उल्लेख किस आचार्य ने किया है?", 
    options: ["आचार्य चरक", "आचार्य सुश्रुत", "आचार्य नागार्जुन", "आचार्य भावमिश्र"], 
    correctAnswerIndex: 0,
    explanation: "आयुर्वेद की परिभाषा बताते हुए आचार्य चरक ने कहा है कि जिससे आयु के लिए हितकर-अहितकर द्रव्य, गुण और कर्मों का ज्ञान हो, वह आयुर्वेद है।",
    reference: "चरक सूत्रस्थान 1/28",
    ncismRef: "Syllabus Point 1: Dravyaguna Vigyana"
  },
  { 
    questionText: "वीरुध का उदाहरण निम्न में से कौनसा सही है?", 
    options: ["वट", "कण्टकारी", "आम्र", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 1,
    explanation: "वीरुध (Climbers/Creepers) फैलने वाले क्षुप या लताएं होती हैं। वट (वनस्पति) और आम्र (वानस्पत्य) विशाल वृक्ष हैं। कण्टकारी भूमि पर फैलने वाला (प्रतानवती) क्षुप होने के कारण वीरुध के अंतर्गत माना जा सकता है।",
    reference: "चरक सूत्रस्थान 1 / सुश्रुत सूत्रस्थान 1",
    ncismRef: "Syllabus Point 2: Dravya (Classification)"
  },
  { 
    questionText: "'कर्मभिस्त्वनुमीयन्ते नानाद्रव्याश्रयाः गुणाः।' इस परिभाषा के लेखक कौन है?", 
    options: ["आचार्य नागार्जुन", "आचार्य चरक", "आचार्य सुश्रुत", "आचार्य वाग्भट"], 
    correctAnswerIndex: 2,
    explanation: "आचार्य सुश्रुत के अनुसार, द्रव्यों में आश्रित रहने वाले गुणों का अनुमान उनके द्वारा किए गए कर्मों से लगाया जाता है।",
    reference: "सुश्रुत सूत्रस्थान 40/13",
    ncismRef: "Syllabus Point 3: Guna"
  },
  { 
    questionText: "क्षार को रस किस आचार्य ने माना है?", 
    options: ["धामार्गव", "कांकायन", "वार्योविद", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य निमि (विदेहराज) ने क्षार को सातवां रस माना है। विकल्पों में निमि का नाम न होने के कारण 'इनमें से कोई नहीं' सही उत्तर है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa"
  },
  { 
    questionText: "नागार्जुन के अनुसार लघु विपाक में निम्न में से कौनसा गुण कारण नहीं होता है?", 
    options: ["विशद", "रूक्ष", "तीक्ष्ण", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य नागार्जुन (रसवैशेषिक) के अनुसार लघु, रूक्ष, तीक्ष्ण और विशद गुण लघु विपाक उत्पन्न करते हैं। चूँकि दिए गए तीनों गुण लघु विपाक के कारण हैं, अतः 'इनमें से कोई नहीं' (D) सही है।",
    reference: "रसवैशेषिक सूत्र",
    ncismRef: "Syllabus Point 5: Vipaka"
  },
  { 
    questionText: "वीर्य की उपलब्धि किससे होती है?", 
    options: ["निपात", "अधिवास", "निपात व अधिवास से", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "\"निपातादधिवासाच्च वीर्यमुपलभ्यते\" - रस का ज्ञान केवल निपात (जिह्वा संपर्क) से होता है, जबकि वीर्य का ज्ञान निपात और अधिवास (पाचन) दोनों से होता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 6: Virya (Viryaopalabdhi)"
  },
  { 
    questionText: "द्रव्य किससे कार्य करता है?", 
    options: ["द्रव्यप्रभाव से", "गुणप्रभाव से", "द्रव्यप्रभाव व गुणप्रभाव से", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "आचार्य चरक के अनुसार कोई भी द्रव्य अपने स्वयं के प्रभाव (द्रव्यप्रभाव) से और अपने गुणों (गुणप्रभाव) दोनों के द्वारा कार्य करता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 8: Interrelation of Rasa-Guna-Virya-Vipaka-Prabhava"
  },
  { 
    questionText: "निम्न में से शीतग्राही व उष्णग्राही का सही कर्म क्या है?", 
    options: ["स्तम्भन", "ग्राही", "स्तम्भन व ग्राही", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "जो शीतवीर्य होकर स्रावों को रोकता है वह स्तम्भन (शीतग्राही) है (जैसे कुटज)। जो उष्णवीर्य होकर जलीय अंश को सुखाता है वह ग्राही (उष्णग्राही) है (जैसे शुण्ठी)।",
    reference: "शार्ङ्गधर संहिता",
    ncismRef: "Syllabus Point 9: Karma"
  },
  { 
    questionText: "वासा किस मिश्रक वर्ग में वर्णित है?", 
    options: ["तृणपंचमूल", "वल्लीपंचमूल", "पंचतिक्त", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "पंचतिक्त गण में निम्ब, गुडूची, वासा, कण्टकारी और पटोल आते हैं।",
    reference: "मिश्रक वर्ग",
    ncismRef: "Syllabus Point 12: Mishraka Gana (Panchatikta)"
  },
  { 
    questionText: "गुडूची नामकरण का आधार क्या है?", 
    options: ["देशोक्ति", "लांछन", "रूढि", "वीर्य"], 
    correctAnswerIndex: 2,
    explanation: "गुडूची एक परम्परागत और लोकप्रचलित नाम है, जो बिना किसी विशेष युक्ति के प्रसिद्ध है, अतः यह 'रूढि' का उदाहरण है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "भेषज परीक्षा मुख्यरूप से किस पर आधारित है?", 
    options: ["रसपरीक्षा", "स्पर्श परीक्षा", "रूप परीक्षा", "उपरोक्त सभी"], 
    correctAnswerIndex: 3,
    explanation: "भेषज (औषधि) की पहचान और परीक्षण (Organoleptic evaluation) पञ्चज्ञानेन्द्रियों (रूप, रस, गंध, स्पर्श, शब्द) द्वारा किया जाता है।",
    reference: "चरक विमानस्थान 8",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "हेमंत ऋतु में पौधे का कौन सा भाग एकत्रित किया जाता है?", 
    options: ["पुष्प", "मूल", "पत्र", "सार"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य चरक (कल्पस्थान) के अनुसार हेमंत ऋतु में पादप का 'सार भाग' (Heartwood) ग्रहण करना चाहिए।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "एल्कलॉइड (Alkaloids) किसमें घुलनशील नहीं होते है?", 
    options: ["पानी (Water)", "एथेनोल (Ethanol)", "मेथेनोल (Methanol)", "क्लोरोफॉर्म (Chloroform)"], 
    correctAnswerIndex: 0,
    explanation: "सामान्यतः मुक्त एल्कलॉइड (Free base alkaloids) पानी में अघुलनशील (Insoluble) होते हैं, जबकि कार्बनिक विलायकों (Organic solvents) में घुलनशील होते हैं।",
    reference: "Modern Pharmacognosy",
    ncismRef: "Syllabus Point 18: Aqueous and alcoholic extracts"
  },
  { 
    questionText: "फार्माकोविजिलेंस का मुख्य उद्देश्य है-", 
    options: ["औषधी की बिक्री को बढ़ावा देना", "औषधी पता लगाना, मूल्यांकन, समझना और रोकथाम", "औषधी की क्षमता बढ़ाना", "नई औषधी बनाना"], 
    correctAnswerIndex: 1,
    explanation: "फार्माकोविजिलेंस (Pharmacovigilance) का मुख्य कार्य औषधियों के दुष्प्रभावों (Adverse Drug Reactions) का पता लगाना (Detection), मूल्यांकन और रोकथाम करना है।",
    reference: "WHO Guidelines",
    ncismRef: "Syllabus Point 19: Pharmacovigilance"
  },
  { 
    questionText: "निर्गुण्डी का प्रतिनिधि द्रव्य (Substitute) क्या है?", 
    options: ["तुलसी", "वासा", "रास्ना", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 0,
    explanation: "भावप्रकाश और योगरत्नाकर के अनुसार निर्गुण्डी के उपलब्ध न होने पर प्रतिनिधि के रूप में 'तुलसी' का प्रयोग किया जा सकता है (\"निर्गुण्ड्यभावे तुलसी\")।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 17: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "नेटवर्क फार्माकोलॉजी (Network Pharmacology) मुख्य रूप केंद्रित है-", 
    options: ["एक दवा-एक लक्ष्य (One drug-one target)", "एक दवा-एकाधिक लक्ष्य (Multi-target/Polypharmacology)", "एक रोग-एक लक्ष्य (One disease-one target)", "कोई संबंध नहीं (No correlation)"], 
    correctAnswerIndex: 1,
    explanation: "नेटवर्क फार्माकोलॉजी 'One drug, one target' के स्थान पर 'Multi-drug, multi-target' (एक से अधिक लक्ष्यों) पर कार्य करने की प्रणाली है।",
    reference: "Network Pharmacology",
    ncismRef: "Syllabus Point 22: Network pharmacology"
  },
  { 
    questionText: "बायोइन्फॉर्मेटिक्स (Bioinformatics) का मुख्य उद्देश्य है-", 
    options: ["बायोलॉजिकल जानकारी का डेटा स्टोरेज और एनालिसिस", "हर्बल दवाएं बनाना", "क्लिनिकल ट्रायल", "माइक्रोस्कोपी"], 
    correctAnswerIndex: 0,
    explanation: "बायोइन्फॉर्मेटिक्स जीव विज्ञान, कंप्यूटर विज्ञान और सूचना प्रौद्योगिकी का संगम है, जिसका मुख्य कार्य जैविक डेटा (Biological Data) को स्टोर और एनालाइज करना है।",
    reference: "Bioinformatics",
    ncismRef: "Syllabus Point 22: Bioinformatics"
  },
  { 
    questionText: "RET कैटेगिरी का मतलब है-", 
    options: ["पके हुए, खाने लायक, स्वादिष्ट", "दुर्लभ, लुप्तप्राय और संकटग्रस्त प्रजातियां (Rare, Endangered & Threatened species)", "लाल, पन्ना, तुलसी के पौधे", "रजिस्टर्ड एक्सपोर्ट पेड़"], 
    correctAnswerIndex: 1,
    explanation: "RET का अर्थ 'Rare, Endangered, and Threatened' प्रजातियां हैं, जिनके संरक्षण (Conservation) पर विशेष ध्यान दिया जाता है।",
    reference: "IUCN Red List",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "API किसके द्वारा प्रकाशित है?", 
    options: ["WHO", "CCRAS", "Govt. of India", "इनमें से कोई नहीं"], 
    correctAnswerIndex: 2,
    explanation: "API (Ayurvedic Pharmacopoeia of India) का प्रकाशन भारत सरकार (Ministry of AYUSH / PCIM&H) द्वारा किया जाता है।",
    reference: "API Guidelines",
    ncismRef: "Syllabus Point 20: API"
  },
  { 
    questionText: "सुरपाल का 'वृक्षायुर्वेद' मुख्य रूप से इनसे संबंधित है-", 
    options: ["इंसानी बीमारियाँ", "पौधों की खेती और सुरक्षा (Cultivation and protection of plants)", "रसायन से बनी चीजें", "ज्योतिष"], 
    correctAnswerIndex: 1,
    explanation: "सुरपाल द्वारा रचित 'वृक्षायुर्वेद' पादपों (पौधों) की खेती, उनके रोगों और संरक्षण से सम्बंधित एक प्राचीन ग्रन्थ है।",
    reference: "वृक्षायुर्वेद",
    ncismRef: "Syllabus Point 21: Vrikshayurveda"
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
                
                <div className="flex flex-col gap-2 border-t border-amber-500/20 pt-3">
                  {qData.ncismRef && (
                    <p className="text-xs text-foreground/70 font-bold tracking-wide flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-amber-500" /> {qData.ncismRef}
                    </p>
                  )}
                  {qData.reference && (
                    <p className="text-xs text-foreground/50 font-bold uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Ref: {qData.reference}
                    </p>
                  )}
                </div>
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
