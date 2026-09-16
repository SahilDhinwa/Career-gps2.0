"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw, Leaf } from "lucide-react";

const DRAVYAGUNA_QUESTIONS = [
  { questionText: "\"संयोगे च विभागे च कारणं द्रव्यमाश्रितम् ।\" - यह श्लोकांश किसकी परिभाषा है?", options: ["गुण", "कर्म", "वीर्य", "विपाक"], correctAnswerIndex: 1 },
  { questionText: "तिक्त रस में किन महाभूतों की प्रधानता (आधिक्य) होती है?", options: ["वायु + अग्नि", "वायु + आकाश", "पृथ्वी + अग्नि", "जल + पृथ्वी"], correctAnswerIndex: 1 },
  { questionText: "लवण रस युक्त द्रव्यों का सामान्यतः 'विपाक' क्या होता है?", options: ["कटु", "अम्ल", "मधुर", "लवण"], correctAnswerIndex: 2 },
  { questionText: "\"रसादिसाम्ये यत् कर्म विशिष्टं तत् .......... स्मृतम् ।\" रिक्त स्थान की पूर्ति करें:", options: ["वीर्य", "विपाक", "प्रभाव", "गुण"], correctAnswerIndex: 2 },
  { questionText: "द्रव्य के संग्रहण (Collection of drugs) के सन्दर्भ में, आचार्य चरक के अनुसार 'त्वक्' (छाल) का संग्रहण किस ऋतु में करना श्रेष्ठ है?", options: ["वर्षा", "शरद", "वसंत", "ग्रीष्म"], correctAnswerIndex: 1 },
  { questionText: "'त्रिमद' (Trimada) नामक मिश्रक वर्ग में निम्नलिखित में से कौन सा द्रव्य शामिल नहीं है?", options: ["विडंग", "मुस्ता", "चित्रक", "शुण्ठी"], correctAnswerIndex: 3 },
  { questionText: "औषध के अवशोषण, वितरण, चयापचय और उत्सर्जन (ADME) के अध्ययन को आधुनिक भेषज विज्ञान में किस नाम से जाना जाता है?", options: ["फार्माकोडायनामिक्स", "फार्माकोकाइनेटिक्स", "फार्माकोग्नॉसी", "क्लिनिकल फार्माकोलॉजी"], correctAnswerIndex: 1 },
  { questionText: "आचार्य सुश्रुत के अनुसार 'विपाक' के कितने प्रकार माने गए हैं?", options: ["दो (गुरु, लघु)", "तीन (मधुर, अम्ल, कटु)", "चार", "पांच"], correctAnswerIndex: 0 },
  { questionText: "गुरुवादि गुणों में 'मन्द' (Manda) गुण का विपरीत (Opposite) गुण कौन सा है?", options: ["श्लक्ष्ण", "तीक्ष्ण", "विशद", "सूक्ष्म"], correctAnswerIndex: 1 },
  { questionText: "\"खदिर\" को किस व्याधि की चिकित्सा में अग्र्य (सर्वश्रेष्ठ) माना गया है?", options: ["प्रमेह", "श्वास", "कुष्ठ", "कास"], correctAnswerIndex: 2 },
  { questionText: "आचार्य चरक द्वारा वर्णित 'अष्टविध वीर्य' में निम्नलिखित में से कौन सा शामिल नहीं है?", options: ["गुरु", "स्निग्ध", "तीक्ष्ण", "सूक्ष्म"], correctAnswerIndex: 3 },
  { questionText: "'पञ्चवल्कल' में निम्नलिखित में से कौन सा वृक्ष शामिल नहीं है?", options: ["वट", "उदुम्बर", "अश्वत्थ", "शिरीष"], correctAnswerIndex: 3 },
  { questionText: "जो द्रव्य शरीर के दोषों या मलों को पक्व या अपक्व अवस्था में ही अधोमार्ग (गुदा मार्ग) से बलपूर्वक बाहर निकालता है, उसे क्या कहते हैं?", options: ["अनुलोमन", "स्रंसन", "भेदन", "रेचन"], correctAnswerIndex: 1 },
  { questionText: "औषधीय पादपों के संरक्षण और संकटग्रस्त प्रजातियों की सूची 'रेड डेटा बुक' किसके द्वारा जारी की जाती है?", options: ["WHO", "IUCN", "CITES", "NMPB"], correctAnswerIndex: 1 },
  { questionText: "अभाव प्रतिनिधि द्रव्य के सिद्धांत के अनुसार, 'काकोली' और 'क्षीरकाकोली' के उपलब्ध न होने पर किस द्रव्य का प्रयोग किया जाना चाहिए?", options: ["अश्वगंधा", "विदारीकन्द", "शतावरी", "वाराहीकन्द"], correctAnswerIndex: 0 },
  { questionText: "'लघु पञ्चमूल' वर्ग में निम्नलिखित में से कौन सा द्रव्य विद्यमान है?", options: ["बिल्व", "अग्निमन्थ", "गोक्षुर", "श्योनाक"], correctAnswerIndex: 2 },
  { questionText: "जो द्रव्य अपने वीर्य के प्रभाव से स्रोतों में संचित दोषों को उखाड़कर बाहर निकालता है, उस विशिष्ट कर्म को क्या कहते हैं?", options: ["प्रमाथी", "व्यवायी", "विकाषी", "योगवाही"], correctAnswerIndex: 0 },
  { questionText: "\"गुड क्लिनिकल प्रैक्टिस\" (GCP) दिशा-निर्देशों का मुख्य उद्देश्य किससे संबंधित है?", options: ["औषधीय पादप कृषि", "नैदानिक परीक्षण में मानव अधिकारों और डेटा की सुरक्षा", "कारखानों में औषधि निर्माण", "वनस्पति नामकरण"], correctAnswerIndex: 1 },
  { questionText: "यदि कोई द्रव्य 'अम्ल' रस प्रधान है, तो उसके अत्यधिक सेवन से मुख्य रूप से कौन सा दोष प्रकुपित होगा?", options: ["केवल वात", "केवल पित्त", "वात और कफ दोनों", "पित्त और कफ दोनों"], correctAnswerIndex: 3 },
  { questionText: "\"उर्ध्वभागं दोषहरणं..........\" रिक्त स्थान की पूर्ति उचित कर्म से करें:", options: ["विरेचनम्", "वमनम्", "शमनम्", "दीपनम्"], correctAnswerIndex: 1 }
];

export default function DravyagunaTest1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === DRAVYAGUNA_QUESTIONS[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < DRAVYAGUNA_QUESTIONS.length) {
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
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Test Directory
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 text-center shadow-xl">
            <Leaf className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Test Complete!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-3xl">{score}</span> out of {DRAVYAGUNA_QUESTIONS.length}
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
                <Leaf className="w-4 h-4" /> Dravyaguna Vigyan (Part 1)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_QUESTIONS.length}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
              {DRAVYAGUNA_QUESTIONS[currentQuestion].questionText}
            </h2>
            
            <div className="space-y-4">
              {DRAVYAGUNA_QUESTIONS[currentQuestion].options.map((option, index) => {
                let buttonStyle = "border-surfaceBorder hover:border-amber-500/50 bg-foreground/5 hover:bg-amber-500/10";
                let Icon = null;

                if (isAnswered) {
                  if (index === DRAVYAGUNA_QUESTIONS[currentQuestion].correctAnswerIndex) {
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
                  {currentQuestion + 1 === DRAVYAGUNA_QUESTIONS.length ? "Finish Test" : "Next Question"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

