"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen, ClipboardList } from "lucide-react";

const BATCH_2022_QUESTIONS = [
  { 
    questionText: "'यतश्चायुष्याणि अनायुष्याणि च द्रव्यगुणकर्माणि।' इस परिभाषा का उल्लेख किस आचार्य ने किया है? / 'यतश्चायुष्याणि अनायुष्याणि च द्रव्यगुणकर्माणि।' Which Acharya has mentioned this definition?", 
    options: ["आचार्य चरक (Acharya Charaka)", "आचार्य सुश्रुत (Acharya Sushruta)", "आचार्य नागार्जुन (Acharya Nagarjun)", "आचार्य भावमिश्र (Acharya Bhavamishra)"], 
    correctAnswerIndex: 0,
    explanation: "चरक संहिता सूत्रस्थान 1 में आयु और अनायुष्य द्रव्यों के गुण-कर्म का वर्णन करते हुए यह परिभाषा दी गई है।",
    reference: "चरक सूत्रस्थान 1/28",
    ncismRef: "Syllabus Point 1: Dravyaguna Vigyana"
  },
  { 
    questionText: "वीरुध का उदाहरण निम्न में से कौनसा सही है? / Which of the following is the correct example of Virudha?", 
    options: ["वट (Vata)", "कण्टकारी (Kantakari)", "आम्र (Aamra)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 1,
    explanation: "कण्टकारी जमीन पर फैलने वाली (प्रतानवती) 'वीरुध' का सटीक शास्त्रीय उदाहरण है।",
    reference: "चरक सूत्रस्थान 1 / सुश्रुत सूत्रस्थान 1",
    ncismRef: "Syllabus Point 2: Dravya (Classification)"
  },
  { 
    questionText: "'कर्मभिस्वनुमीयन्ते नानाद्रव्याश्रयाः गुणाः।' इस परिभाषा के लेखक कौन है? / 'कर्मभिस्वनुमीयन्ते नानाद्रव्याश्रयाः गुणाः।' Who is the author of this definition?", 
    options: ["आचार्य नागार्जुन (Acharya Nagarjun)", "आचार्य चरक (Acharya Charaka)", "आचार्य सुश्रुत (Acharya Sushruta)", "आचार्य वाग्भट (Acharya Vagbhata)"], 
    correctAnswerIndex: 2,
    explanation: "अप्रत्यक्ष गुणों का अनुमान प्रत्यक्ष कर्मों द्वारा होता है। (संदर्भ: सुश्रुत संहिता, सूत्रस्थान 46/514)",
    reference: "सुश्रुत सूत्रस्थान 46/514",
    ncismRef: "Syllabus Point 3: Guna"
  },
  { 
    questionText: "क्षार को रस किस आचार्य ने माना है? / Which Acharya has considered Kshara as rasa?", 
    options: ["धामार्गव (Dhamargava)", "कांकायन (Kankayan)", "वायोर्विद (Vayorvid)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य 'निमि' ने क्षार को सातवाँ रस माना है, जो दिए गए विकल्पों में नहीं है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa"
  },
  { 
    questionText: "नागार्जुन के अनुसार लघु विपाक में निम्न में से कौनसा गुण कारण नहीं होता है? / According to Nagarjuna, which of the following guna is not responsible for producing a laghu vipaka?", 
    options: ["विशद (Vishad)", "रूक्ष (Ruksha)", "तीक्ष्ण (Tiksna)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 3,
    explanation: "नागार्जुन के अनुसार लघु विपाक के कारणों में लघु, रूक्ष, तीक्ष्ण, विशद आदि सभी गुण आते हैं, अतः कोई भी विकल्प 'कारण नहीं' की श्रेणी में नहीं है।",
    reference: "रसवैशेषिक सूत्र",
    ncismRef: "Syllabus Point 5: Vipaka"
  },
  { 
    questionText: "वीर्य की उपलब्धि किससे होती है? / By which process is Virya obtained?", 
    options: ["निपात (Nipata)", "अधिवास (Adhivas)", "निपात व अधिवास से (Nipata and Adhivas)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 2,
    explanation: "वीर्य का परिज्ञान निपात (जीभ/त्वचा पर स्पर्श) और अधिवास (पाचन के बाद शरीर में रहने तक) दोनों से होता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 6: Virya (Viryaopalabdhi)"
  },
  { 
    questionText: "द्रव्य किससे कार्य करता है? / What does Dravya work with?", 
    options: ["द्रव्यप्रभाव से (Dravya-prabhava)", "गुणप्रभाव से (Guna-prabhava)", "द्रव्यप्रभाव व गुणप्रभाव से (Dravya prabhava & Guna-prabhava)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 2,
    explanation: "आयुर्वेद के अनुसार कुछ द्रव्य अपने विशिष्ट द्रव्य-प्रभाव से और कुछ अपने गुण-प्रभाव (रस, गुण, वीर्य, विपाक) से कार्य करते हैं।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 8: Interrelation of Rasa-Guna-Virya-Vipaka-Prabhava"
  },
  { 
    questionText: "निम्न में से शीतग्राही व उष्णग्राही का सही कर्म क्या है? / What is the correct action of sheetgrahi and Ushnagrahi among the following?", 
    options: ["स्तम्भन (Stambhana)", "ग्राही (Grahi)", "स्तम्भन व ग्राही (Stambhana and Grahi)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 2,
    explanation: "द्रव्य शीत वीर्य होने पर 'स्तम्भन' और उष्ण वीर्य होने पर 'ग्राही' कर्म करता है।",
    reference: "शार्ङ्गधर संहिता",
    ncismRef: "Syllabus Point 9: Karma"
  },
  { 
    questionText: "वासा किस मिश्रक वर्ग में वर्णित है? / In which Mishrak Varga is Vasa described?", 
    options: ["तृणपंचमूल (Trinapanchmool)", "वल्लीपंचमूल (Vallipanchmool)", "पंचतिक्त (Panchatikta)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 2,
    explanation: "वासा 'पञ्चतिक्त' वर्ग (गुडूची, निम्ब, वासा, कण्टकारी, पटोल) का एक प्रमुख द्रव्य है।",
    reference: "मिश्रक वर्ग",
    ncismRef: "Syllabus Point 12: Mishraka Gana (Panchatikta)"
  },
  { 
    questionText: "गुडूची नामकरण का आधार क्या है? / What is the basis of the naming of Guduchi?", 
    options: ["देशोक्ति (Deshokti)", "लांछन (Laanchhan)", "रूढि (Rudhi)", "वीर्य (Veerya)"], 
    correctAnswerIndex: 2,
    explanation: "गुडूची नामकरण 'रूढि' (परम्परागत प्रसिद्धि और लोक व्यवहार) पर आधारित माना जाता है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "भेषज परीक्षा मुख्यरूप से किस पर आधारित है? / Bheshaja Pariksha is mainly based on -", 
    options: ["रसपरीक्षा (Rasa-Pareeksha)", "स्पर्श परीक्षा (Sparsha-Pareeksha)", "रूप परीक्षा (Rupa-pariksha)", "उपरोक्त सभी (All of the above)"], 
    correctAnswerIndex: 3,
    explanation: "भेषज परीक्षा (Organoleptic evaluation) पञ्चज्ञानेन्द्रियों द्वारा रस, रूप, गंध, स्पर्श आदि सभी के आधार पर की जाती है।",
    reference: "चरक विमानस्थान 8",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "हेमंत ऋतु में पौधे का कौन सा भाग एकत्रित किया जाता है? / Which plant part is collected in Hemanta ritu?", 
    options: ["पुष्प (flowers)", "मूल (roots)", "पत्र (leaves)", "सार (Heart wood)"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य सुश्रुत के भेषज संग्रहण नियमों के अनुसार हेमन्त ऋतु में वृक्षों का 'सार' (Heartwood) भाग ग्रहण करना चाहिए।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "एल्कलॉइड किसमें घुलनशील नहीं होते है? / In which substance alkaloid are not soluble?", 
    options: ["पानी (Water)", "एथेनोल (Ethanol)", "मेथेनोल (Methanol)", "क्लोरोफॉर्म (Chloroform)"], 
    correctAnswerIndex: 0,
    explanation: "क्रूड (शुद्ध) एल्कलॉइड्स कार्बनिक विलायकों में घुलनशील होते हैं, परन्तु पानी (Water) में सामान्यतः अघुलनशील (Insoluble) होते हैं।",
    reference: "Modern Pharmacognosy",
    ncismRef: "Syllabus Point 18: Aqueous and alcoholic extracts"
  },
  { 
    questionText: "फार्माकोविजिलेंस का मुख्य उद्देश्य है- / The main aim of pharmacovigilance is—", 
    options: ["औषधी की बिक्री को बढ़ावा देना (Promote drug sale)", "औषधी पता लगाना, मूल्यांकन, समझना और रोकथाम (Detection, assessment, understanding and prevention)", "औषधी की क्षमता बढ़ाना (Increase drug potency)", "नई औषधी बनाना (Develop new drugs)"], 
    correctAnswerIndex: 1,
    explanation: "फार्माकोविजिलेंस का मुख्य कार्य दवाओं के प्रतिकूल प्रभावों (ADRs) की निगरानी करना और उनसे बचाव करना है।",
    reference: "WHO Guidelines",
    ncismRef: "Syllabus Point 19: Pharmacovigilance"
  },
  { 
    questionText: "निर्गुण्डी का प्रतिनिधि है। / What is the substitute of Nirgundi?", 
    options: ["तुलसी (Tulasi)", "वासा (Vasa)", "रास्ना (Rasna)", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 2,
    explanation: "भावप्रकाश निघण्टु के अभाव प्रतिनिधि द्रव्य सिद्धांत के अनुसार निर्गुण्डी के अभाव में रास्ना, और रास्ना के अभाव में निर्गुण्डी का प्रयोग किया जाता है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 17: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "नेटवर्क फार्माकोलॉजी मुख्य रूप केंद्रित है- / Network pharmacology mainly focuses on-", 
    options: ["एक दवा-एक लक्ष्य (One drug-one target)", "एक दवा-एकाधिक लक्ष्य (One drug-multiple targets)", "एक रोग-एक लक्ष्य (One disease-one target)", "कोई संबंध नहीं (No correlation)"], 
    correctAnswerIndex: 1,
    explanation: "नेटवर्क फार्माकोलॉजी 'One drug - multiple targets' के आधुनिक सिद्धांत पर कार्य करती है।",
    reference: "Network Pharmacology",
    ncismRef: "Syllabus Point 22: Network pharmacology"
  },
  { 
    questionText: "बायोइन्फॉर्मेटिक्स का मुख्य उद्देश्य है- / The primary aim of bioinformatics is:", 
    options: ["बायोलॉजिकल जानकारी का डेटा स्टोरेज और एनालिसिस (Data storage and biological information analysis)", "हर्बल दवाएं बनाना (Manufacturing of herbal drugs)", "क्लिनिकल ट्रायल (Clinical trials)", "माइक्रोस्कोपी (Microscopy)"], 
    correctAnswerIndex: 0,
    explanation: "यह कंप्यूटर और आईटी की मदद से जटिल जैविक डेटा (Genomic/Proteomic) को स्टोर और विश्लेषित करने की तकनीक है।",
    reference: "Bioinformatics",
    ncismRef: "Syllabus Point 22: Bioinformatics"
  },
  { 
    questionText: "RET कैटेगरी का मतलब है- / RET category refers to -", 
    options: ["पके हुए, खाने लायक, स्वादिष्ट (Ripened, Edible, Tasty)", "दुर्लभ, लुप्तप्राय और संकटग्रस्त प्रजातियां (Rare, Endangered & Threatened species)", "लाल, पन्ना, तुलसी के पौधे (Red, Emerald, Tulsi plants)", "रजिस्टर्ड एक्सपोर्ट पेड़ (Registered Export Trees)"], 
    correctAnswerIndex: 1,
    explanation: "RET का पूर्ण रूप 'Rare, Endangered & Threatened' प्रजातियां है, जिनका संरक्षण अत्यंत आवश्यक है।",
    reference: "IUCN Red List",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "API किसके द्वारा प्रकाशित है? / Who publishes the API?", 
    options: ["WHO", "CCRAS", "Govt. of India", "इनमें से कोई नहीं (None of these)"], 
    correctAnswerIndex: 2,
    explanation: "आयुर्वेदिक फार्माकोपिया ऑफ इंडिया (API) भारत सरकार के आयुष मंत्रालय (PCIMH) द्वारा प्रकाशित किया जाता है।",
    reference: "API Guidelines",
    ncismRef: "Syllabus Point 20: API"
  },
  { 
    questionText: "सुरपाल का वृक्षायुर्वेद मुख्य रूप से इनसे संबंधित है- / The Vrikshayurved of Surpal is related to which of the following -", 
    options: ["इंसानी बीमारियाँ (Human diseases)", "पौधों की खेती और सुरक्षा (Cultivation and protection of plants)", "रसायन से बनी चीजें (Chemical preparations)", "ज्योतिष (Astrology)"], 
    correctAnswerIndex: 1,
    explanation: "सुरपाल रचित 'वृक्षायुर्वेद' विशेष रूप से औषधीय पादपों के कृषिकरण, पोषण (कुणप जल) और रोगों से रक्षा पर केंद्रित ग्रन्थ है।",
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
