"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen } from "lucide-react";

const BATCH_2021_QUESTIONS = [
  { 
    questionText: "आयुर्वेद के त्रिसूत्र (Trisutra of Ayurveda) में शामिल नहीं है:", 
    options: ["मानस (Manas)", "औषध (Aushadha)", "लिंग (Linga)", "हेतु (Hetu)"], 
    correctAnswerIndex: 0,
    explanation: "आयुर्वेद के त्रिसूत्र (स्कन्धत्रय) में हेतु, लिंग और औषध शामिल हैं। मानस इसका अंग नहीं है।",
    reference: "चरक सूत्रस्थान 1/44"
  },
  { 
    questionText: "निम्न में से 'स्वस्थानाहित' (Swasthahit) द्रव्य किस प्रकार का वर्गीकरण है?", 
    options: ["प्रयोगभेद (Prayogabhed)", "उत्पत्तिभेद (Utpattibhed)", "प्रभावभेद (Prabhavabheda)", "योनिभेद (Yonibhed)"], 
    correctAnswerIndex: 0,
    explanation: "प्रयोग (उपयोग) के आधार पर द्रव्य के दो भेद होते हैं - स्वस्थानाहित (स्वास्थ्य रक्षक) और व्याधिप्रणुत् (रोग नाशक)।"
  },
  { 
    questionText: "दवा की प्राथमिक क्रिया के अप्रत्यक्ष परिणाम (Indirect consequences of a primary action of the drug) को कहा जाता है:", 
    options: ["द्वितीयक प्रभाव (Secondary Effects)", "अतिसंवेदनशीलता (Hypersensitivity)", "मुग्धाता (Idiosyncrasy)", "दुष्प्रभाव (Side Effects)"], 
    correctAnswerIndex: 0,
    explanation: "औषधि का जो सीधा असर होता है उसे Primary action कहते हैं, और उस क्रिया के फलस्वरूप जो दूसरा प्रभाव उत्पन्न होता है उसे Secondary effect कहते हैं।"
  },
  { 
    questionText: "वातव्याधि में लाभकारी गुण (Beneficial Gunas in Vatavyadhi):", 
    options: ["स्निग्ध और उष्ण (Snigdha & Ushna)", "लघु और शीत (Laghu & Sheeta)", "रुक्ष और शीत (Ruksha & Sheeta)", "रुक्ष और लघु (Ruksha & Laghu)"], 
    correctAnswerIndex: 0,
    explanation: "वात दोष मुख्य रूप से रुक्ष और शीत होता है। अतः इसके शमन के लिए विपरीत गुण- स्निग्ध और उष्ण अत्यंत लाभकारी होते हैं।"
  },
  { 
    questionText: "रुक्ष, शीत और लघु गुण निम्नलिखित में से किस रस में मौजूद हैं?", 
    options: ["लवण (Lavana)", "तिक्त (Tikta)", "मधुर (Madhura)", "अम्ल (Amla)"], 
    correctAnswerIndex: 1,
    explanation: "तिक्त रस में वायु और आकाश महाभूत की प्रधानता होती है, जिसके कारण यह रुक्ष, शीत और लघु गुणों से युक्त होता है।"
  },
  { 
    questionText: "डेटा उपयोग की प्रक्रिया (The process of data utilization) को किस नाम से जाना जाता है?", 
    options: ["डेटा प्लान (Data Plan)", "डेटा माइनिंग (Data Mining)", "रिसर्च (Research)", "स्टैटिस्टिक्स (Statistics)"], 
    correctAnswerIndex: 1,
    explanation: "बड़े डेटासेट्स में से उपयोगी पैटर्न और जानकारी निकालने की प्रक्रिया को डेटा माइनिंग (Data Mining) कहा जाता है।"
  },
  { 
    questionText: "कटु विपाक (Katu Vipak) है:", 
    options: ["वातवर्धक (Vata Vardhak)", "कफवर्धक (Kapha Vardhak)", "पित्तशामक (Pitta Shamak)", "वातशामक (Vata Shamak)"], 
    correctAnswerIndex: 0,
    explanation: "कटु विपाक वात दोष को बढ़ाता है, कफ को घटाता है और मलमूत्र को बांधने (बद्धविट्क) का कार्य करता है।"
  },
  { 
    questionText: "'येन कुर्वन्ति तत्' (Yena Kurvanti Tat) का तात्पर्य है:", 
    options: ["विपाक (Vipak)", "कर्म (Karma)", "प्रभाव (Prabhav)", "वीर्य (Virya)"], 
    correctAnswerIndex: 3,
    explanation: "\"येन कुर्वन्ति तद् वीर्यम्\" - जिसके द्वारा औषध अपना कार्य (कर्म) करती है, उस शक्ति को वीर्य कहते हैं।"
  },
  { 
    questionText: "लवण रस द्रव्य में _____ वीर्य होगा (Lavan Rasa Dravya will have ______ Virya):", 
    options: ["रुक्ष (Ruksha)", "उष्ण (Ushna)", "द्रव (Drava)", "शीत (Sheeta)"], 
    correctAnswerIndex: 1,
    explanation: "लवण रस में जल और अग्नि महाभूत की प्रधानता होती है, अतः इसका वीर्य उष्ण (Ushna) होता है।"
  },
  { 
    questionText: "'यत् कुर्वन्ति तत्' (Yat Kurvanti Tat) का तात्पर्य है:", 
    options: ["काल (Kala)", "कर्म (Karma)", "अधिकरण (Adhikaran)", "वीर्य (Virya)"], 
    correctAnswerIndex: 1,
    explanation: "\"यत् कुर्वन्ति तत् कर्म\" - औषध जो कार्य या चेष्टा करती है, उसे कर्म कहा जाता है।"
  },
  { 
    questionText: "नेटवर्क फार्माकोलॉजी की अवधारणा (Concept of Network Pharmacology) किसके द्वारा प्रस्तावित की गई थी?", 
    options: ["हॉपकिंस (Hopkins)", "एडवर्ड (Edward)", "किंग्स्टन (Kingston)", "चार्ल्स (Charles)"], 
    correctAnswerIndex: 0,
    explanation: "नेटवर्क फार्माकोलॉजी (Network Pharmacology) शब्द पहली बार 2007 में एंड्रयू एल. हॉपकिंस (Andrew L. Hopkins) द्वारा प्रस्तावित किया गया था।"
  },
  { 
    questionText: "मरीच _____ का घटक नहीं है (Marich is not member of):", 
    options: ["षडूषण (Shadooshana)", "त्रिकटु (Trikatu)", "पंचकोल (Panchakola)", "चतुरषण (Chaturashan)"], 
    correctAnswerIndex: 2,
    explanation: "पंचकोल में पिप्पली, पिप्पलीमूल, चव्य, चित्रक और शुण्ठी आते हैं। इसमें मरीच (काली मिर्च) शामिल नहीं है।"
  },
  { 
    questionText: "ICBN का तात्पर्य है (ICBN Refers to):", 
    options: ["International Code of Botanical Network", "International Code of Botanical Nomenclature", "International Code of Biology Network", "International Community of Botanical Network"], 
    correctAnswerIndex: 1,
    explanation: "ICBN (अब ICN) वानस्पतिक नामकरण का अंतर्राष्ट्रीय कोड है, जो पादपों के वैज्ञानिक नाम रखने के नियम तय करता है।"
  },
  { 
    questionText: "भेषज परीक्षा की अवधारणा (Concept of Bheshaja Pariksha) का उल्लेख किसमें किया गया है?", 
    options: ["चरक विमान (Charak Viman)", "चरक सूत्रस्थान (Charak Sutrasthan)", "चरक इन्द्रिय (Charak Indriya)", "चरक शारीर (Charak Sharir)"], 
    correctAnswerIndex: 0,
    explanation: "औषध परीक्षा (भेषज परीक्षा) का विस्तृत वर्णन चरक संहिता के विमान स्थान अध्याय 8 (रोगभिषग्जितीय विमान) में मिलता है।"
  },
  { 
    questionText: "चरक के अनुसार मूल (जड़) को किस ऋतु में एकत्रित करना चाहिए? (Mula should be collected in which Ritu)", 
    options: ["वसंत (Vasant)", "वर्षा (Varsha)", "शरद (Sharad)", "ग्रीष्म (Grishma)"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य चरक और सुश्रुत दोनों के अनुसार, पादपों की जड़ों (मूल) का संग्रहण ग्रीष्म (Summer) या शिशिर ऋतु में करना चाहिए, जब पत्ते गिर चुके हों।"
  },
  { 
    questionText: "बीज बैंक _____ संरक्षण की विधियों में से एक है (Seed bank is one of the methods of ______ Conservation):", 
    options: ["In-Situ", "Ex-Situ", "Both", "Local"], 
    correctAnswerIndex: 1,
    explanation: "बीज बैंक (Seed Banks) पादप प्रजातियों को उनके प्राकृतिक आवास से बाहर (Ex-situ) सुरक्षित रखने का एक तरीका है।"
  },
  { 
    questionText: "मेदा और महामेदा का प्रतिनिधि है (Substitute of Meda & Mahameda is):", 
    options: ["शतावरी (Shatavari)", "विदारीकंद (Vidarikanda)", "वाराहीकंद (Varahikand)", "अश्वगंधा (Ashwagandha)"], 
    correctAnswerIndex: 0,
    explanation: "अष्टवर्ग द्रव्यों के अभाव प्रतिनिधि सिद्धांत के अनुसार, मेदा और महामेदा न मिलने पर शतावरी का प्रयोग करना चाहिए।"
  },
  { 
    questionText: "'Ultrasound Extraction' को ___ के नाम से भी जाना जाता है:", 
    options: ["Multiplication", "Subtraction", "Sublimation", "Sonication"], 
    correctAnswerIndex: 3,
    explanation: "अल्ट्रासाउंड एक्सट्रैक्शन को सोनिकेशन (Sonication) भी कहा जाता है, जिसमें ध्वनि तरंगों का उपयोग करके औषधीय तत्वों को निकाला जाता है।"
  },
  { 
    questionText: "ग्लोबल सेंटर फॉर ट्रेडिशनल मेडिसिन किस शहर में स्थापित किया गया है? (Global Centre for Traditional Medicine is established in):", 
    options: ["जयपुर (Jaipur)", "जामनगर (Jamnagar)", "जोधपुर (Jodhpur)", "जम्मू (Jammu)"], 
    correctAnswerIndex: 1,
    explanation: "विश्व स्वास्थ्य संगठन (WHO) द्वारा ग्लोबल सेंटर फॉर ट्रेडिशनल मेडिसिन (GCTM) जामनगर, गुजरात में स्थापित किया गया है।"
  },
  { 
    questionText: "वृक्षायुर्वेद ______ के द्वारा लिखा गया है (Vrikshayurved is written by):", 
    options: ["गोपाल (Gopal)", "मदनपाल (Madanpala)", "सुरपाल (Surpala)", "हरपाल (Harpal)"], 
    correctAnswerIndex: 2,
    explanation: "सुरपाल (Surpala) ने 'वृक्षायुर्वेद' नामक प्राचीन संस्कृत ग्रन्थ की रचना की, जो पादप विज्ञान और कृषि पर आधारित है।"
  }
];

export default function Batch2021Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < BATCH_2021_QUESTIONS.length) {
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
    BATCH_2021_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = BATCH_2021_QUESTIONS[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-4xl">{calculateScore()}</span> out of {BATCH_2021_QUESTIONS.length}
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
                <Award className="w-3.5 h-3.5" /> 2021 Main Exam
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {BATCH_2021_QUESTIONS.length}
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
                <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                  <span className="font-bold text-amber-500 mr-2">Explanation:</span> 
                  {qData.explanation}
                </p>
                {qData.reference && (
                  <p className="text-xs text-foreground/50 mt-3 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Ref: {qData.reference}
                  </p>
                )}
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
                  {currentQuestion + 1 === BATCH_2021_QUESTIONS.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
                }

