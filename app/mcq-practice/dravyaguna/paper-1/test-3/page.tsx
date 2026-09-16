"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_TEST_3 = [
  // QUESTIONS 1-10: Substitutes & Adulteration (Perfect for DG Paper 1)
  { 
    questionText: "आयुर्वेद के किस प्रमुख ग्रन्थ में 'अभाव प्रतिनिधि द्रव्य' (Substitute Drugs) का सर्वाधिक सुस्पष्ट और विस्तृत वर्णन प्राप्त होता है?", 
    options: ["चरक संहिता", "सुश्रुत संहिता", "भावप्रकाश निघण्टु", "अष्टांग हृदय"], 
    correctAnswerIndex: 2,
    explanation: "मिश्रक वर्ग के अंतर्गत आचार्य भावमिश्र ने अभाव प्रतिनिधि द्रव्यों का सबसे विस्तृत संकलन किया है।",
    reference: "भावप्रकाश निघण्टु (मिश्रक वर्ग)",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "औषधि निर्माण में 'दारुहरिद्रा' के उपलब्ध न होने पर, प्रतिनिधि द्रव्य (Substitute) के रूप में किस द्रव्य का प्रयोग करने का शास्त्रीय निर्देश है?", 
    options: ["आमलकी", "हरिद्रा", "मञ्जिष्ठा", "गुडूची"], 
    correctAnswerIndex: 1,
    explanation: "दारुहरिद्रा और हरिद्रा दोनों के रस-पञ्चक और औषधीय कर्म लगभग समान (कण्डूघ्न, कृमिघ्न) होते हैं।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "भावप्रकाश के अनुसार, 'अष्टवर्ग' की जड़ी-बूटियों (जीवकमृद्धभक, मेदा-महामेदा आदि) के अभाव में उनके प्रतिनिधि के रूप में किन द्रव्यों का प्रयोग किया जाना चाहिए?", 
    options: ["दशमूल", "विदारीकन्द, वाराहीकन्द, अश्वगंधा और शतावरी", "काकोली और क्षीरकाकोली", "त्रिफला और त्रिकटु"], 
    correctAnswerIndex: 1,
    explanation: "अष्टवर्ग के दुर्लभ होने पर इन्हीं चार द्रव्यों को उनके प्रतिनिधि के रूप में प्रयोग किया जाता है। (जीवक-ऋषभक हेतु विदारीकन्द, मेदा-महामेदा हेतु शतावरी, काकोली-क्षीरकाकोली हेतु अश्वगंधा, ऋद्धि-वृद्धि हेतु वाराहीकन्द)।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "जब जानबूझकर किसी महंगी औषधि में उसी के समान दिखने वाला लेकिन गुणहीन या निम्न स्तर का द्रव्य मिला दिया जाता है, तो उसे आधुनिक द्रव्यगुण विज्ञान में क्या कहा जाता है?", 
    options: ["शोधन (Purification)", "सत्वपातन (Extraction)", "अपमिश्रण (Adulteration)", "मानकीकरण (Standardization)"], 
    correctAnswerIndex: 2,
    explanation: "औषधियों की गुणवत्ता घटाकर अधिक आर्थिक लाभ कमाने के लिए किया जाने वाला यह एक अवैध कार्य है जिसे अपमिश्रण (Adulteration) कहते हैं।",
    reference: "Modern Pharmacognosy",
    ncismRef: "Syllabus Point 12: Adulteration of Medicinal Plants"
  },
  { 
    questionText: "'कस्तूरी' (Musk) के अत्यधिक महंगी और दुर्लभ होने के कारण, इसके प्रतिनिधि द्रव्य के रूप में किसका प्रयोग मान्य किया गया है?", 
    options: ["चन्दन", "लताकस्तूरी", "अगरु", "कपूर"], 
    correctAnswerIndex: 1,
    explanation: "लताकस्तूरी के बीजों की गंध कस्तूरी के समान होती है, इसलिए इसे प्रतिनिधि के रूप में चुना जाता है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "'चित्रक' (Plumbago zeylanica) के अभाव में निम्नलिखित में से किस द्रव्य का प्रयोग प्रतिनिधि के रूप में किया जा सकता है?", 
    options: ["वासा", "त्रिवृत्", "दन्ती मूल", "अपामार्ग"], 
    correctAnswerIndex: 2,
    explanation: "भावप्रकाश के अनुसार \"चित्रकमूले दन्तीमूलं क्षारं वा\" अर्थात् चित्रक के अभाव में दन्ती मूल या यवक्षार आदि का प्रयोग करना चाहिए।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "जब किसी असली औषधि (जैसे- लौंग या चायपत्ती) से उसके सक्रिय तत्वों (Active principles) को निकाल लिया जाता है और उस बची हुई गुणहीन औषधि को पुनः बाजार में बेच दिया जाता है, तो इस प्रकार के अपमिश्रण को क्या कहते हैं?", 
    options: ["Adulteration with exhausted drugs", "Substitution", "Adulteration with synthetic chemicals", "Spoilage"], 
    correctAnswerIndex: 0,
    explanation: "औषधीय सत्व निकालने के बाद बचे हुए निष्प्रभावी हिस्से को 'Exhausted drugs' (सारहीन द्रव्य) कहा जाता है।",
    reference: "Pharmacognosy",
    ncismRef: "Syllabus Point 12: Types of Adulteration"
  },
  { 
    questionText: "भावप्रकाश निघण्टु के अनुसार, 'कुमकुम' (केसर - Saffron) का उत्तम प्रतिनिधि द्रव्य कौन सा माना गया है?", 
    options: ["नागकेशर", "जपापुष्प", "कुसुम्भ पुष्प", "पलाश पुष्प"], 
    correctAnswerIndex: 2,
    explanation: "कुसुम्भ (Safflower) के फूल केसर के समान वर्ण वाले होते हैं और केसर के प्रतिनिधि के रूप में प्रयुक्त होते हैं।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "\"रास्नाभावे तु तन्मूलं दद्याद्.......... भिषक्\" - श्लोक के अनुसार रास्ना के अभाव में किस द्रव्य के मूल (जड़) का प्रयोग करना चाहिए?", 
    options: ["एरण्ड (Eranda)", "निर्गुण्डी (Nirgundi)", "दशमूल (Dashamoola)", "अश्वगंधा (Ashwagandha)"], 
    correctAnswerIndex: 0,
    explanation: "रास्ना (वातहर) के अभाव में समान रूप से वातशामक 'एरण्ड मूल' का प्रयोग निर्दिष्ट है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya"
  },
  { 
    questionText: "'अहिवेन' (Ahiphena / Opium) जैसी मादक और बहुमूल्य औषधियों का वजन बढ़ाने के लिए अक्सर मिट्टी या गोंद मिला दिया जाता है। यह किस प्रकार के अपमिश्रण (Adulteration) का उदाहरण है?", 
    options: ["Adulteration with artificially manufactured substances", "Adulteration with harmful non-plant material", "Genetic variation", "Adulteration with inferior plant material"], 
    correctAnswerIndex: 1,
    explanation: "वजन और घनत्व बढ़ाने के लिए मिट्टी (Mud) या गोंद जैसी अखाद्य/हानिकारक वस्तुओं की मिलावट की जाती है।",
    reference: "Pharmacognosy",
    ncismRef: "Syllabus Point 12: Types of Adulteration"
  },

  // QUESTIONS 11-20: BRAND NEW PURE DRAVYAGUNA PAPER 1 QUESTIONS
  { 
    questionText: "'त्रिसुगन्धि' (Trisugandhi) या 'त्रिजात' (Trijata) नामक मिश्रक वर्ग में निम्नलिखित में से किन द्रव्यों का समावेश होता है?", 
    options: ["त्वक्, एला, पत्र", "शुण्ठी, मरिच, पिप्पली", "हरीतकी, विभीतक, आमलकी", "मुस्ता, विडंग, चित्रक"], 
    correctAnswerIndex: 0,
    explanation: "त्वक् (दालचीनी), एला (इलायची), और पत्र (तेजपत्ता) के मिश्रण को त्रिजात या त्रिसुगन्धि कहा जाता है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 9: Mishraka Varga"
  },
  { 
    questionText: "आधुनिक द्रव्यगुण विज्ञान (Pharmacognosy) में, किसी पादप के सूक्ष्मदर्शीय स्वरूप (Stomata, Trichomes आदि) का अध्ययन किस प्रकार के मूल्यांकन के अंतर्गत आता है?", 
    options: ["भौतिक (Physical) Evaluation", "रासायनिक (Chemical) Evaluation", "सूक्ष्मदर्शीय (Microscopic) Evaluation", "जैविक (Biological) Evaluation"], 
    correctAnswerIndex: 2,
    explanation: "औषधि की पहचान और मिलावट रोकने के लिए माइक्रोस्कोप द्वारा उसके ऊतकों (Tissues), स्टोमेटा आदि का अध्ययन Microscopic Evaluation कहलाता है।",
    reference: "Modern Pharmacognosy",
    ncismRef: "Syllabus Point 12: Bheshaja Pariksha (Pharmacognosy)"
  },
  { 
    questionText: "जो द्रव्य जठराग्नि को तो बढ़ाता है, परन्तु अपक्व आम (भोजन) का पाचन नहीं करता, उसे क्या कहते हैं?", 
    options: ["पाचन (Pachana)", "दीपन (Deepana)", "अनुलोमन (Anulomana)", "भेदन (Bhedana)"], 
    correctAnswerIndex: 1,
    explanation: "\"पचेन्नामं वह्निकृद् दीपनं तद् यथा मिशि:\" - जो केवल अग्नि को दीप्त करे परन्तु आम का पाचन न करे (जैसे शतपुष्पा/सौंफ) वह दीपन है।",
    reference: "शार्ङ्गधर संहिता (पूर्व खण्ड)",
    ncismRef: "Syllabus Point 8: Karma (Deepana)"
  },
  { 
    questionText: "धन्वन्तरि निघण्टु (Dhanvantari Nighantu) को आयुर्वेद के सबसे प्राचीन उपलब्ध निघण्टुओं में से एक माना जाता है, इसका संभावित काल क्या है?", 
    options: ["१०वीं से १३वीं शताब्दी (10th-13th AD)", "16वीं शताब्दी (16th AD)", "२०वीं शताब्दी (20th AD)", "वैदिक काल (Vedic Period)"], 
    correctAnswerIndex: 0,
    explanation: "धन्वन्तरि निघण्टु का रचना काल लगभग 10वीं से 13वीं शताब्दी के मध्य माना जाता है।",
    reference: "History of Dravyaguna",
    ncismRef: "Syllabus Point 1: Brief knowledge of Nighantus"
  },
  { 
    questionText: "आधुनिक भेषज-विज्ञान (Pharmacology) में 'जैव उपलब्धता' (Bioavailability) से क्या तात्पर्य है?", 
    options: ["रक्त में पहुँचने वाली सक्रिय औषधि की मात्रा व दर (Rate & extent of active drug reaching systemic circulation)", "औषधि का शरीर से बाहर निकलना (Excretion)", "औषधि का विषैला प्रभाव (Toxicity)", "दो औषधियों की अंतःक्रिया (Drug interaction)"], 
    correctAnswerIndex: 0,
    explanation: "बायोअवेलेबिलिटी वह प्रतिशत मात्रा है जो औषधि सेवन के बाद बिना नष्ट हुए सीधे रक्त (Systemic circulation) में पहुँचती है।",
    reference: "Modern Pharmacology",
    ncismRef: "Syllabus Point 10.1: General Pharmacology (Pharmacokinetics)"
  },
  { 
    questionText: "'अग्नीषोमीय' जगत की अवधारणा पर आधारित 'द्विविध वीर्य' (उष्ण और शीत वीर्य) का सिद्धान्त विशेष रूप से किस ग्रन्थ में स्थापित किया गया है?", 
    options: ["चरक संहिता", "सुश्रुत संहिता", "माधव निदान", "अष्टांग संग्रह"], 
    correctAnswerIndex: 1,
    explanation: "यद्यपि चरक ने भी द्विविध और अष्टविध वीर्य बताए हैं, किन्तु सुश्रुत ने स्पष्ट रूप से \"अग्नीषोमीयत्वात् जगतः...\" कहकर द्विविध वीर्य को ही प्रधान माना है।",
    reference: "सुश्रुत सूत्रस्थान 40/4",
    ncismRef: "Syllabus Point 6: Virya"
  },
  { 
    questionText: "'शिरीष' (Albizia lebbeck) को विषघ्न (Anti-toxic) माना गया है। रस, गुण, वीर्य, विपाक के नियमों से इसे स्पष्ट न कर पाने पर, इस विशिष्ट कर्म का कारण क्या माना जाता है?", 
    options: ["रस (Rasa)", "विपाक (Vipaka)", "वीर्य (Virya)", "प्रभाव (Prabhava)"], 
    correctAnswerIndex: 3,
    explanation: "जब किसी द्रव्य का कार्य उसके रस, गुण, वीर्य और विपाक के सामान्य सिद्धान्तों से विपरीत या अचिन्त्य हो, तो उसे प्रभाव कहा जाता है।",
    reference: "चरक सूत्रस्थान 26/67",
    ncismRef: "Syllabus Point 7: Prabhava"
  },
  { 
    questionText: "निम्नलिखित में से कौन सा द्रव्य मुख्य 'अष्टवर्ग' (Ashtavarga) में सम्मिलित नहीं है?", 
    options: ["जीवक (Jivaka)", "मेदा (Meda)", "काकोली (Kakoli)", "अश्वगंधा (Ashwagandha)"], 
    correctAnswerIndex: 3,
    explanation: "अश्वगंधा अष्टवर्ग का मूल द्रव्य नहीं है, बल्कि काकोली और क्षीरकाकोली के न मिलने पर उनके अभाव प्रतिनिधि (Substitute) के रूप में प्रयोग होता है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 9: Mishraka Varga (Ashtavarga)"
  },
  { 
    questionText: "Pharmacology में, औषधि सेवन का वह मार्ग (Route of administration) जिसमें औषधि को सीधे जीभ के नीचे रखा जाता है, उसे क्या कहते हैं?", 
    options: ["Intravenous (IV)", "Sublingual (सबलिंगुअल)", "Intramuscular (IM)", "Oral (मुख द्वारा)"], 
    correctAnswerIndex: 1,
    explanation: "सबलिंगुअल मार्ग से दी गई औषधि बिना लीवर (First-pass metabolism) में जाए सीधे जीभ के नीचे की रक्त वाहिकाओं में अवशोषित हो जाती है।",
    reference: "Modern Pharmacology",
    ncismRef: "Syllabus Point 10.1: Routes of Drug Administration"
  },
  { 
    questionText: "'प्रशस्त भेषज' (Ideal Drug) के चार गुणों में 'बहुकल्पं' (Bahukalpam) का क्या अर्थ है?", 
    options: ["जो बहुत सी बीमारियों को ठीक करे", "जिसे अनेक कल्पनाओं (स्वरस, चूर्ण, क्वाथ आदि) में आसानी से बदला जा सके", "जो अत्यंत सस्ता हो", "जो अनेक देशों में पाया जाता हो"], 
    correctAnswerIndex: 1,
    explanation: "बहुकल्पं का अर्थ है कि उस औषधि से कई प्रकार की कल्पनाएं (जैसे चूर्ण, वटी, क्वाथ, अवलेह) सरलता से बनाई जा सकें।",
    reference: "चरक सूत्रस्थान 9/7",
    ncismRef: "Syllabus Point 12: Prashasta Bheshaja"
  }
];

export default function DravyagunaPaper1Test3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_TEST_3.length) {
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
    DRAVYAGUNA_PAPER_1_TEST_3.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_TEST_3[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_TEST_3.length}
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
                <Beaker className="w-4 h-4" /> Paper 1 (Test 3)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_TEST_3.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_TEST_3.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
    }
