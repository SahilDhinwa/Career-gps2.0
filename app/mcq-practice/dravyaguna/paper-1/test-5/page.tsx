"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_TEST_5 = [
  { 
    questionText: "औद्भिद द्रव्यों के चार प्रकारों में, \"अपुष्पाः फलवन्तो...\" (बिना फूल आए ही फल देने वाले) पादपों को क्या कहा जाता है?", 
    options: ["वानस्पत्य", "वनस्पति", "वीरुध", "ओषधि"], 
    correctAnswerIndex: 1,
    explanation: "जिन पादपों में फूल दिखाई नहीं देते लेकिन फल लगते हैं (जैसे- गूलर, वट वृक्ष), वे वनस्पति कहलाते हैं।",
    reference: "चरक सूत्रस्थान 1",
    ncismRef: "Syllabus Point 2: Dravya"
  },
  { 
    questionText: "गुरुवादि गुणों में, 'तीक्ष्ण' गुण (Teekshna Guna) का शरीर पर मुख्य कर्म क्या होता है?", 
    options: ["बृंहण और कफवर्धन", "शोधन और पित्तवर्धन", "स्तम्भन और वातवर्धन", "स्नेहन और क्लेदन"], 
    correctAnswerIndex: 1,
    explanation: "तीक्ष्ण गुण अग्नि महाभूत प्रधान होने के कारण पित्त बढ़ाता है और दोषों को उखाड़कर शोधन करता है।",
    reference: "अष्टांग हृदय",
    ncismRef: "Syllabus Point 3: Guna"
  },
  { 
    questionText: "'लवण' रस (Salty taste) की उत्पत्ति किन दो महाभूतों के संयोग से होती है?", 
    options: ["जल और अग्नि", "पृथ्वी और अग्नि", "जल और पृथ्वी", "वायु और आकाश"], 
    correctAnswerIndex: 0,
    explanation: "लवण रस में जल और अग्नि महाभूत की प्रधानता होती है, जिससे यह क्लेदक और उष्ण होता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 4: Rasa"
  },
  { 
    questionText: "'कटु' विपाक (Katu Vipaka) का शुक्र धातु (वीर्य/Semen) पर सामान्यतः क्या प्रभाव पड़ता है?", 
    options: ["शुक्रजनन (शुक्र को पैदा करना)", "शुक्रघ्न (शुक्र का नाश/क्षय करना)", "शुक्ररेचन (शुक्र को बाहर निकालना)", "शुक्रस्तम्भन (शुक्र को रोकना)"], 
    correctAnswerIndex: 1,
    explanation: "कटु विपाक वातवर्धक और रूक्ष होने के कारण वीर्य/शुक्र का शोषण कर उसका नाश (शुक्रघ्न) करता है।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 5: Vipaka"
  },
  { 
    questionText: "अष्टविध वीर्य (Eight types of Virya) में 'स्निग्ध' (Snigdha) वीर्य का मुख्य औषधीय कर्म क्या माना गया है?", 
    options: ["वातशमन और बृंहण", "कफवर्धन और भेदन", "पित्तवर्धन और स्वेदन", "वातवर्धन और लेखन"], 
    correctAnswerIndex: 0,
    explanation: "स्निग्ध वीर्य अपने जल और पृथ्वी महाभूत के कारण शरीर में वात का शमन और धातुओं का बृंहण करता है।",
    reference: "सुश्रुत सूत्रस्थान 40",
    ncismRef: "Syllabus Point 6: Virya"
  },
  { 
    questionText: "रस, विपाक, वीर्य और प्रभाव के पारस्परिक बल (Strength) का सही आरोही क्रम (Ascending order - कम बलवान से सबसे अधिक बलवान) क्या है?", 
    options: ["रस < वीर्य < विपाक < प्रभाव", "प्रभाव < वीर्य < विपाक < रस", "रस < विपाक < वीर्य < प्रभाव", "विपाक < रस < प्रभाव < वीर्य"], 
    correctAnswerIndex: 2,
    explanation: "बल के अनुसार रस को विपाक, विपाक को वीर्य और इन सभी को 'प्रभाव' दबा देता है (प्रभाव सबसे बलवान है)।",
    reference: "चरक सूत्रस्थान 26",
    ncismRef: "Syllabus Point 8: Interrelation of Rasa-Guna-Virya-Vipaka-Prabhava"
  },
  { 
    questionText: "\"यत् पचत्यामं वह्निकृत् तु न...\" - जो द्रव्य आम दोष का पाचन करता है किन्तु जठराग्नि को प्रदीप्त नहीं करता (जैसे- नागकेशर), उस विशिष्ट कर्म को क्या कहते हैं?", 
    options: ["दीपन", "पाचन", "अनुलोमन", "भेदन"], 
    correctAnswerIndex: 1,
    explanation: "पाचन द्रव्य बिना जठराग्नि को बढ़ाए ही सीधे अपक्व अन्न या आम दोष को पचाने का कार्य करते हैं।",
    reference: "शार्ङ्गधर संहिता",
    ncismRef: "Syllabus Point 9: Karma"
  },
  { 
    questionText: "आचार्य चरक द्वारा वर्णित 'दीपनीय' महाकषाय (Dashemani) में निम्नलिखित में से कौन सा द्रव्य शामिल है?", 
    options: ["हरीतकी", "मरिच", "पिप्पली", "मुस्ता"], 
    correctAnswerIndex: 2,
    explanation: "चरक के दीपनीय गण में पिप्पली, पिप्पलीमूल, चव्य, चित्रक, शृंगवेर (शुण्ठी) आदि द्रव्य शामिल हैं।",
    reference: "चरक सूत्रस्थान 4",
    ncismRef: "Syllabus Point 10: Karmas of Dashemani Gana"
  },
  { 
    questionText: "आधुनिक फार्माकोलॉजी के अनुसार, 'सबलिंगुअल' (Sublingual - जीभ के नीचे रखकर) मार्ग से दी जाने वाली औषधियां मुख्य रूप से किस प्रक्रिया से बच जाती हैं?", 
    options: ["रीनल एक्सक्रीशन (Renal excretion)", "फर्स्ट-पास मेटाबॉलिज्म (First-pass metabolism)", "गैस्ट्रिक एब्जॉर्प्शन (Gastric absorption)", "प्लाज्मा प्रोटीन बाइंडिंग (Plasma protein binding)"], 
    correctAnswerIndex: 1,
    explanation: "सबलिंगुअल मार्ग से दवा सीधे सिस्टमिक सर्कुलेशन (रक्त) में जाती है और लिवर में होने वाले फर्स्ट-पास मेटाबॉलिज्म से बच जाती है।",
    reference: "Modern Pharmacology",
    ncismRef: "Syllabus Point 11: Principles of General Pharmacology"
  },
  { 
    questionText: "आधुनिक भेषज विज्ञान में, NSAIDs (Non-steroidal anti-inflammatory drugs) मुख्य रूप से शरीर में किस एंजाइम को अवरुद्ध (Inhibit) करके दर्द और सूजन को कम करते हैं?", 
    options: ["लाइपेज (Lipase)", "साइक्लोऑक्सीजिनेज (Cyclooxygenase / COX)", "एमाइलेज (Amylase)", "प्रोटीएज (Protease)"], 
    correctAnswerIndex: 1,
    explanation: "NSAIDs (जैसे- एस्पिरिन, डिक्लोफेनैक) COX एंजाइम को रोककर प्रोस्टाग्लैंडिंस के निर्माण को रोकते हैं, जिससे दर्द दूर होता है।",
    reference: "Modern Pharmacology",
    ncismRef: "Syllabus Point 11: Principles of General Pharmacology"
  },
  { 
    questionText: "'चतुरूषण' (Chaturushana) नामक मिश्रक वर्ग का निर्माण 'त्रिकटु' (शुण्ठी, मरिच, पिप्पली) में किस चौथे द्रव्य को मिलाने से होता है?", 
    options: ["चव्य", "चित्रक", "पिप्पलीमूल", "गजपिप्पली"], 
    correctAnswerIndex: 2,
    explanation: "त्रिकटु (शुण्ठी, मरिच, पिप्पली) में पिप्पलीमूल (पिप्पली की जड़) मिला देने से यह 'चतुरूषण' मिश्रक वर्ग बन जाता है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 12: Mishraka Gana"
  },
  { 
    questionText: "भेषज संग्रहण (Drug Collection - GFCP) के शास्त्रीय नियमों के अनुसार, औषधि उखाड़ते समय संग्रहकर्ता का मुख मुख्य रूप से किस दिशा की ओर होना श्रेष्ठ माना गया है?", 
    options: ["दक्षिण या पश्चिम (South or West)", "पूर्व या उत्तर (East or North)", "केवल दक्षिण (South)", "आग्नेय कोण (South-East)"], 
    correctAnswerIndex: 1,
    explanation: "कल्याणकारी और पवित्र दिशाएं होने के कारण शास्त्रों (GFCP) में पूर्वाभिमुख या उत्तराभिमुख होकर भेषज संग्रहण का निर्देश है।",
    reference: "चरक कल्पस्थान 1",
    ncismRef: "Syllabus Point 15: Dravyasangrahana and GFCP"
  },
  { 
    questionText: "औषधीय पादपों के संरक्षण के संदर्भ में, IUCN द्वारा जारी की जाने वाली 'RET प्रजातियों' (RET species) का पूर्ण रूप (Full form) क्या है?", 
    options: ["Rare, Endangered, and Threatened (दुर्लभ, संकटापन्न और खतरे में)", "Regional, Ecological, and Traditional", "Restricted, Extinct, and Tested", "Reserved, Essential, and Therapeutic"], 
    correctAnswerIndex: 0,
    explanation: "RET उन पादप प्रजातियों का समूह है जो लुप्त होने के कगार पर हैं और जिनका संरक्षण अत्यंत आवश्यक है।",
    reference: "IUCN Guidelines",
    ncismRef: "Syllabus Point 16: Conservation of medicinal plants & RET"
  },
  { 
    questionText: "अभाव प्रतिनिधि द्रव्य (Substitute Drugs) के सिद्धांत के अनुसार, श्वास-कास रोग में यदि 'पुष्करमूल' उपलब्ध न हो, तो उसके स्थान पर किस उत्तम द्रव्य का प्रयोग किया जाना चाहिए?", 
    options: ["चित्रक", "वासा", "कुष्ठ", "कण्टकारी"], 
    correctAnswerIndex: 2,
    explanation: "भावप्रकाश निघण्टु के अनुसार \"पुष्करमूलस्याभावे कुष्ठं महौषधम्\" अर्थात् पुष्करमूल के अभाव में समान गुण वाले 'कुष्ठ' (Saussurea lappa) का प्रयोग करना चाहिए।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 17: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "पादपों से जलीय या अल्कोहलिक सत्व (Aqueous and alcoholic extracts) निकालने के लिए, आधुनिक प्रयोगशालाओं में 'सतत गर्म निष्कर्षण' (Continuous hot extraction) हेतु किस उपकरण का सर्वाधिक उपयोग किया जाता है?", 
    options: ["माइक्रोवेव एक्स्ट्रेक्टर", "सॉक्सलेट एपरेटस (Soxhlet apparatus)", "सेंट्रीफ्यूज (Centrifuge)", "स्पेक्ट्रोफोटोमीटर"], 
    correctAnswerIndex: 1,
    explanation: "सॉक्सलेट उपकरण का उपयोग पादप सामग्री से उनके सक्रिय तत्वों (Extracts) को विलायक (अल्कोहल आदि) द्वारा लगातार गर्म करके निकालने के लिए किया जाता है।",
    reference: "Modern Pharmacognosy",
    ncismRef: "Syllabus Point 18: Aqueous and alcoholic extracts"
  },
  { 
    questionText: "आयुर्वेद औषधियों (ASU Drugs) के प्रतिकूल प्रभावों या साइड इफ़ेक्ट्स (Adverse Drug Reactions) की रिपोर्टिंग और निगरानी के लिए भारत सरकार द्वारा कौन सा राष्ट्रीय कार्यक्रम चलाया जा रहा है?", 
    options: ["NMPB", "PCIMH", "Pharmacovigilance Program for ASU drugs (ASU & H)", "GCTM"], 
    correctAnswerIndex: 2,
    explanation: "यह कार्यक्रम आयुर्वेद, सिद्ध और यूनानी औषधियों के सुरक्षित उपयोग (ADR Monitoring) को सुनिश्चित करने के लिए स्थापित किया गया है।",
    reference: "Ministry of AYUSH",
    ncismRef: "Syllabus Point 19: Pharmacovigilance with recent updates"
  },
  { 
    questionText: "भारत सरकार के अधीन कार्य करने वाले संगठन \"PCIMH\" का मुख्य कार्य क्या है?", 
    options: ["औषधीय पादपों की खेती के लिए अनुदान देना", "आयुर्वेद, सिद्ध, यूनानी और होम्योपैथी औषधियों के मानकीकरण और फार्माकोपिया का प्रकाशन करना", "विदेशों में आयुर्वेदिक जड़ी-बूटियों का निर्यात करना", "नए आयुर्वेद कॉलेजों को मान्यता देना"], 
    correctAnswerIndex: 1,
    explanation: "PCIMH (Pharmacopoeia Commission for Indian Medicine & Homoeopathy) आयुष औषधियों के गुणवत्ता मानक तय करता है।",
    reference: "Govt. of India Guidelines",
    ncismRef: "Syllabus Point 20: PCIMH"
  },
  { 
    questionText: "'वृक्षायुर्वेद' (Vrikshayurveda) के अनुसार, पादपों की तीव्र वृद्धि और रोगों से बचाव के लिए प्रयुक्त होने वाले पारंपरिक तरल जैविक उर्वरक (Liquid organic fertilizer) को क्या कहा जाता है?", 
    options: ["पञ्चगव्य", "कुणप जल (Kunapa Jala)", "सीरा (Molasses)", "काञ्जिक"], 
    correctAnswerIndex: 1,
    explanation: "वृक्षायुर्वेद में कुणप जल (मांस, मछली, तिल, खली आदि को सड़ाकर बनाया गया तरल) का प्रयोग पौधों के बेहतरीन पोषण के लिए वर्णित है।",
    reference: "वृक्षायुर्वेद (सुरपाल)",
    ncismRef: "Syllabus Point 21: Vrikshayurveda"
  },
  { 
    questionText: "नेटवर्क फार्माकोलॉजी (Network Pharmacology) और बायोइन्फॉर्मेटिक्स में, किसी औषधि के सक्रिय अणु (Ligand) और शरीर के प्रोटीन/रिसेप्टर (Target) के बीच जुड़ाव (Binding affinity) का कंप्यूटर द्वारा पूर्वानुमान लगाने की तकनीक क्या कहलाती है?", 
    options: ["मॉलिक्यूलर डॉकिंग (Molecular Docking)", "जीन सीक्वेंसिंग (Gene Sequencing)", "डेटा माइनिंग (Data Mining)", "क्रोमैटोग्राफी (Chromatography)"], 
    correctAnswerIndex: 0,
    explanation: "यह एक इन-सिलिको (In-silico) कंप्यूटर तकनीक है जो यह बताती है कि कोई औषधि किसी विशिष्ट प्रोटीन (टारगेट) से कितनी मजबूती से जुड़ेगी।",
    reference: "Bioinformatics",
    ncismRef: "Syllabus Point 22: Network pharmacology and Bioinformatics"
  },
  { 
    questionText: "\"शिरीष\" अपने रस-पञ्चक के नियमों से अलग हटकर शरीर में 'विषघ्न' (Anti-toxic) कर्म करता है। यह उसके किस गुण का परिणाम है?", 
    options: ["रस", "वीर्य", "विपाक", "प्रभाव"], 
    correctAnswerIndex: 3,
    explanation: "जब कोई द्रव्य अपने रस, गुण, वीर्य और विपाक के नियमों के विपरीत विशिष्ट (अचिन्त्य) कर्म करता है (जैसे शिरीष का विषघ्न होना), तो वह उसका 'प्रभाव' कहलाता है।",
    reference: "चरक सूत्रस्थान 26/67",
    ncismRef: "Syllabus Point 7: Prabhava"
  }
];

export default function DravyagunaPaper1Test5() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_TEST_5.length) {
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
    DRAVYAGUNA_PAPER_1_TEST_5.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_TEST_5[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_TEST_5.length}
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
                <Beaker className="w-4 h-4" /> Paper 1 (Test 5)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_TEST_5.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_TEST_5.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

