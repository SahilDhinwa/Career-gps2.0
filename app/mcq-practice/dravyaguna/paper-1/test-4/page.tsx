"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_TEST_4 = [
  { 
    questionText: "आचार्य चरक के अनुसार 'दोषप्रशमन, धातुप्रदूषण और स्वस्थवृत्तौ' - यह द्रव्य का कौन सा वर्गीकरण (Classification) है?", 
    options: ["योनि भेद", "कर्म भेद", "प्रभाव भेद", "प्रयोग भेद"], 
    correctAnswerIndex: 2,
    explanation: "चरक संहिता सूत्रस्थान 1 में द्रव्यों को उनके प्रभाव के आधार पर दोषप्रशमन, धातुप्रदूषण और स्वस्थवृत्तौ (स्वास्थ्यवर्धक) में बाँटा गया है।",
    reference: "चरक सूत्रस्थान 1/67",
    ncismRef: "Syllabus Point 2: Dravya (Classification based on Prabhava)"
  },
  { 
    questionText: "'वानस्पत्य, वनस्पति, वीरुध और औषध' - ये किस प्रकार के द्रव्यों के शास्त्रीय उपभेद हैं?", 
    options: ["जाङ्गम द्रव्य", "औद्भिद द्रव्य", "भौम द्रव्य", "पार्थिव द्रव्य"], 
    correctAnswerIndex: 1,
    explanation: "पृथ्वी से उद्भेद (फूटकर) निकलने वाले पादपों (Plants) को औद्भिद कहा जाता है, जिसके ये चार मुख्य उपभेद हैं।",
    reference: "चरक सूत्रस्थान 1/71",
    ncismRef: "Syllabus Point 2: Dravya (Classification based on Yonibheda)"
  },
  { 
    questionText: "द्रव्य के पाञ्चभौतिक संघटन के सन्दर्भ में, 'आकाश' महाभूत प्रधान द्रव्यों का शरीर पर मुख्य कर्म क्या होता है?", 
    options: ["बृंहण और गौरव", "क्लेदन और स्नेहन", "मार्दव (मृदुता) और सौषिर्य (पोलापन)", "संघात (कठोरता) और स्थैर्य"], 
    correctAnswerIndex: 2,
    explanation: "आकाश महाभूत में अवकाश (Space) देने का गुण होता है, इसलिए यह शरीर में कोमलता (मार्दव) और छिद्रता (सौषिर्य) उत्पन्न करता है।",
    reference: "सुश्रुत सूत्रस्थान 41",
    ncismRef: "Syllabus Point 2: Dravya (Panchabhoutikatwa of Dravya)"
  },
  { 
    questionText: "गुरुवादि गुणों में, जो गुण शरीर में 'स्रोतोविशोधन' (स्रोतों का लेपन नष्ट कर उन्हें साफ़ करना) करता है और क्लेद का शोषण करता है, वह कौन सा है?", 
    options: ["खर", "रूक्ष", "विशद", "सूक्ष्म"], 
    correctAnswerIndex: 2,
    explanation: "\"विशदो विपरीतोऽस्मात् क्लेदाचूषणरोपणः\" अर्थात् विशद गुण क्लेद का चूसकर स्रोतों की शुद्धि करता है (जैसे- निम्ब, खदिर)।",
    reference: "हेमाद्रि / अष्टांग हृदय",
    ncismRef: "Syllabus Point 3: Guna (Gurvadiguna and its karma)"
  },
  { 
    questionText: "गुरुवादि गुणों की कुल संख्या 20 है। इनमें से 'विशद' (Vishada) गुण का विपरीत (Opposite) गुण कौन सा है?", 
    options: ["पिच्छिल", "श्लक्ष्ण", "स्निग्ध", "मन्द"], 
    correctAnswerIndex: 0,
    explanation: "पिच्छिल (Slimy) गुण लेपन करने वाला होता है, जबकि विशद (Clear) गुण उस लेपन को साफ़ करने वाला (विपरीत) होता है।",
    reference: "अष्टांग हृदय सूत्रस्थान 1",
    ncismRef: "Syllabus Point 3: Guna (Characteristics and classification)"
  },
  { 
    questionText: "आचार्य चरक के अनुसार चिकित्सा में 'परादि गुणों' (Paradi Gunas) का सर्वाधिक महत्व है। इनकी कुल संख्या कितनी मानी गई है?", 
    options: ["5", "10", "20", "41"], 
    correctAnswerIndex: 1,
    explanation: "आचार्य चरक ने पर, अपर, युक्ति, संख्या, संयोग, विभाग, पृथक्त्व, परिमाण, संस्कार और अभ्यास - ये 10 परादि गुण माने हैं।",
    reference: "चरक सूत्रस्थान 26/29",
    ncismRef: "Syllabus Point 3: Guna (Paradiguna with examples)"
  },
  { 
    questionText: "\"तत्र देशानां कालस्य च ........... ।\" परादि गुणों के सन्दर्भ में, यह श्लोकांश किस गुण की परिभाषा (लक्षण) से संबंधित है?", 
    options: ["युक्ति", "संख्या", "संयोग", "पर-अपर"], 
    correctAnswerIndex: 3,
    explanation: "देश (स्थान), काल (समय), वय (आयु) और मान के अनुसार जो प्रधान होता है वह 'पर' और जो अप्रधान होता है वह 'अपर' कहलाता है।",
    reference: "चरक विमानस्थान 8",
    ncismRef: "Syllabus Point 3: Guna (Paradiguna)"
  },
  { 
    questionText: "गुरुवादि गुणों में 'मन्द' (Manda) गुण का मुख्य चिकित्सकीय कर्म शरीर में क्या होता है?", 
    options: ["शमन (दोषों को शांत करना)", "शोधन (दोषों को बाहर निकालना)", "बृंहण (धातुओं को बढ़ाना)", "लेखन (धातुओं को कम करना)"], 
    correctAnswerIndex: 0,
    explanation: "\"मन्दः शमयति\" अर्थात् मन्द गुण अपनी धीमी और सौम्य प्रकृति के कारण प्रकुपित दोषों का केवल शमन करता है (जैसे- गुडूची)।",
    reference: "हेमाद्रि (अष्टांग हृदय टीका)",
    ncismRef: "Syllabus Point 3: Guna (Gurvadiguna clinical application)"
  },
  { 
    questionText: "'युक्ति' (Yukti) नामक परादि गुण का भेषज कल्पना और चिकित्सा में मुख्य तात्पर्य क्या है?", 
    options: ["द्रव्यों की संख्या गिनना और मापना", "दोष, देश, काल और औषध का उचित योजनाबद्ध प्रयोग", "औषध का चूर्ण या क्वाथ बनाना", "दो भिन्न द्रव्यों का पृथक्करण (अलग करना)"], 
    correctAnswerIndex: 1,
    explanation: "युक्ति का अर्थ ही 'योजना' है, जिसके द्वारा वैद्य रोग और रोगी की अवस्था के अनुसार उचित चिकित्सा का निर्धारण करता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 3: Guna (Paradiguna clinical applications)"
  },
  { 
    questionText: "आयुर्वेद दर्शन के अनुसार \"चेतनावान\" (सेंद्रिय) और \"अचेतन\" (निरिन्द्रिय) - यह द्रव्य का वर्गीकरण मुख्य रूप से किस भेद के अंतर्गत आता है?", 
    options: ["कारण द्रव्य", "कार्य द्रव्य", "पारद द्रव्य", "मिश्रक द्रव्य"], 
    correctAnswerIndex: 1,
    explanation: "आयुर्वेद में 9 कारण द्रव्य माने गए हैं, और उनसे उत्पन्न होने वाली सजीव (चेतन) और निर्जीव (अचेतन) सृष्टियां 'कार्य द्रव्य' कहलाती हैं।",
    reference: "चरक सूत्रस्थान 1/48",
    ncismRef: "Syllabus Point 2: Dravya"
  },
  { 
    questionText: "रस (Taste) की उत्पत्ति में 'समवायिकारण' (मूल कारण / Material cause) के रूप में किस महाभूत को माना गया है?", 
    options: ["जल", "पृथ्वी", "तेज (अग्नि)", "वायु"], 
    correctAnswerIndex: 0,
    explanation: "\"रसनार्थो रसः तस्य द्रव्यमापः\" अर्थात् रसनेन्द्रिय का विषय रस है, और इसकी उत्पत्ति का समवायी कारण (उपादान) केवल 'जल' महाभूत है।",
    reference: "चरक सूत्रस्थान 1/64",
    ncismRef: "Syllabus Point 4: Rasa (Rasotpatti)"
  },
  { 
    questionText: "'अम्ल' रस युक्त द्रव्यों में मुख्य रूप से किन महाभूतों की प्रधानता (आधिक्य) होती है?", 
    options: ["जल + पृथ्वी", "पृथ्वी + तेज (अग्नि)", "जल + तेज (अग्नि)", "वायु + आकाश"], 
    correctAnswerIndex: 1,
    explanation: "अम्ल रस पृथ्वी और अग्नि (तेज) महाभूत की अधिकता से बनता है, जिसके कारण यह भारी (गुरु) और उष्ण होता है।",
    reference: "चरक सूत्रस्थान 26/40",
    ncismRef: "Syllabus Point 4: Rasa (Panchabhoutika constitution of Shadrasa)"
  },
  { 
    questionText: "\"उद्वेजयति जिह्वाग्रं कुर्वंश्चिमिचिमामिव ।\" - यह श्लोकांश किस रस के परिज्ञान (पहचान) का शास्त्रीय लक्षण है?", 
    options: ["तिक्त", "कटु", "कषाय", "अम्ल"], 
    correctAnswerIndex: 1,
    explanation: "कटु (तीखा) रस जीभ के अग्रभाग में उत्तेजना (उद्वेग) और झनझनाहट (चिमिचिमा) उत्पन्न करता है (जैसे- मरिच या लाल मिर्च खाने पर)।",
    reference: "चरक सूत्रस्थान 26/74",
    ncismRef: "Syllabus Point 4: Rasa (Rasa-Lakshana)"
  },
  { 
    questionText: "जो रस जठराग्नि को प्रदीप्त करता है, स्रोतों का शोधन करता है, और स्वभाव से 'मार्दवकृत्' (शरीर में मृदुता लाने वाला) होता है, वह कौन सा है?", 
    options: ["लवण", "अम्ल", "कटु", "मधुर"], 
    correctAnswerIndex: 0,
    explanation: "लवण रस (नमक) स्रोतों का मार्दव (Softening) करता है, कफ को पिघलाता है और अग्नि को बहुत तेज़ी से बढ़ाता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa (Karmas of each Rasa)"
  },
  { 
    questionText: "निम्नलिखित में से कौन सा रस स्वभाव से 'स्तम्भन' (स्रावों को रोकने वाला), संधानकर (जोड़ने वाला) और रूक्ष होता है?", 
    options: ["तिक्त", "कषाय", "मधुर", "अम्ल"], 
    correctAnswerIndex: 1,
    explanation: "कषाय रस (जैसे- फिटकरी या खदिर) रूक्ष और शीत होने के कारण बहते हुए स्रावों (रक्त, मल आदि) को स्तंभित (रोक) कर देता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa (Karmas of each Rasa)"
  },
  { 
    questionText: "वात दोष के शमन (शामक) के लिए किन तीन रसों का प्रयोग मुख्य रूप से निर्दिष्ट है?", 
    options: ["मधुर, अम्ल, लवण", "कटु, तिक्त, कषाय", "मधुर, तिक्त, कषाय", "अम्ल, लवण, कटु"], 
    correctAnswerIndex: 0,
    explanation: "वात दोष रूक्ष, लघु और शीत होता है; मधुर, अम्ल और लवण रस स्निग्ध, गुरु और उष्ण (मधुर शीत होने पर भी स्निग्ध-गुरु है) होने से वात का शमन करते हैं।",
    reference: "चरक सूत्रस्थान 1/66",
    ncismRef: "Syllabus Point 4: Rasa (Karmas of each Rasa on Dosha)"
  },
  { 
    questionText: "'अनुरस' (Secondary taste) की शास्त्रीय विशेषता क्या होती है?", 
    options: ["यह द्रव्य का सबसे प्रबल और मुख्य रस होता है", "यह शुष्क अवस्था में या प्रथम रस के शांत होने पर स्पष्ट प्रतीत होता है", "यह द्रव्य के मुँह में जाते ही तुरंत व्यक्त हो जाता है", "इसका शरीर के दोषों पर कोई प्रभाव नहीं पड़ता"], 
    correctAnswerIndex: 1,
    explanation: "जो रस गीली अवस्था में अव्यक्त हो और अंत में या सूखने पर महसूस हो, वह 'अनुरस' है (जैसे- गुडूची का मुख्य रस तिक्त है, और कषाय अनुरस है)।",
    reference: "चरक सूत्रस्थान 26/28",
    ncismRef: "Syllabus Point 4: Rasa (Anurasa)"
  },
  { 
    questionText: "यदि किसी द्रव्य में 'तिक्त' रस की प्रधानता है, तो उसके अत्यधिक सेवन (Atiyoga) से मुख्य रूप से कौन सी व्याधि उत्पन्न हो सकती है?", 
    options: ["प्रमेह और स्थौल्य", "वातव्याधि और धातुक्षय (बलक्षय)", "अम्लपित्त और दाह", "रक्तविकार और तृष्णा"], 
    correctAnswerIndex: 1,
    explanation: "तिक्त रस स्वभाव से अत्यधिक रूक्ष, शीत और खर होता है, इसलिए अधिक सेवन से शरीर सूखता है, धातुएं क्षीण होती हैं और वात प्रकुपित होता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa (Atiyogalakshana)"
  },
  { 
    questionText: "औषध और आहार सेवन के सामान्य नियम (Rasa Sevanakrama) के अनुसार, भोजन के अंत में सामान्यतः किन रसों का सेवन उत्तम माना गया है?", 
    options: ["मधुर और अम्ल", "अम्ल और लवण", "कटु, तिक्त और कषाय", "केवल लवण"], 
    correctAnswerIndex: 2,
    explanation: "भोजन के अंत में कफ दोष की वृद्धि होती है, इसलिए कफ को शांत करने के लिए कटु, तिक्त और कषाय रसों का सेवन उचित है।",
    reference: "अष्टांग हृदय सूत्रस्थान 8",
    ncismRef: "Syllabus Point 4: Rasa (Rasa Sevanakrama of Aushadha)"
  },
  { 
    questionText: "\"प्रह्लादनो जीवनस्तर्पणो...\" (जो रस इन्द्रियों को प्रसन्न करता है, जीवन देता है और तर्पण करता है) - यह किस रस का विशिष्ट कर्म है?", 
    options: ["लवण", "अम्ल", "मधुर", "तिक्त"], 
    correctAnswerIndex: 2,
    explanation: "मधुर रस शरीर के सात्म्य (अनुकूल) होता है, जो रस-रक्तादि धातुओं का वर्धन कर शरीर और इन्द्रियों को तुरंत ऊर्जा (तर्पण/प्रसन्नता) प्रदान करता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa (Karmas of each Rasa)"
  }
];

export default function DravyagunaPaper1Test4() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_TEST_4.length) {
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
    DRAVYAGUNA_PAPER_1_TEST_4.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_TEST_4[currentQuestion];
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
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 text-center shadow-xl animate-in fade-in zoom-in duration-500">
            <Beaker className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Test Complete!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_TEST_4.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2">
                <RefreshCcw className="w-5 h-5" /> Retake Test
              </button>
              <Link href="/mcq-practice/dravyaguna" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Hub
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-8 md:p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="text-amber-500 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <Beaker className="w-4 h-4" /> Paper 1 (Test 4)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_TEST_4.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_TEST_4.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
      }
