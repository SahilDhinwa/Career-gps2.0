"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_TEST_3 = [
  { 
    questionText: "आयुर्वेद के किस प्रमुख ग्रन्थ में 'अभाव प्रतिनिधि द्रव्य' (Substitute Drugs) का सर्वाधिक सुस्पष्ट और विस्तृत वर्णन प्राप्त होता है?", 
    options: ["चरक संहिता", "सुश्रुत संहिता", "भावप्रकाश निघण्टु", "अष्टांग हृदय"], 
    correctAnswerIndex: 2,
    explanation: "मिश्रक वर्ग के अंतर्गत आचार्य भावमिश्र ने अभाव प्रतिनिधि द्रव्यों का सबसे विस्तृत संकलन किया है।",
    reference: "भावप्रकाश निघण्टु (मिश्रक वर्ग)",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya (Substitute Drugs)"
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
  { 
    questionText: "औषधि सेवन के सन्दर्भ में, एक आदर्श 'अनुपान' (Vehicle) का सबसे सटीक लक्षण क्या होना चाहिए?", 
    options: ["जो दोषों के समान गुण वाला हो", "जो दोषों के विपरीत हो, किन्तु औषधि के गुणों का विरोधी न हो", "जो औषधि के गुणों को पूर्णतः नष्ट कर दे", "जो पचने में अत्यंत गुरु हो"], 
    correctAnswerIndex: 1,
    explanation: "अनुपान ऐसा होना चाहिए जो रोग/दोष का शमन करे लेकिन मुख्य औषधि की क्रिया (वीर्य/प्रभाव) में कोई बाधा न डाले।",
    reference: "चरक सूत्रस्थान 27/325",
    ncismRef: "Syllabus Point 15: Anupana (Concept and utility)"
  },
  { 
    questionText: "आचार्य शारंगधर के अनुसार, चूर्ण (Powder / Churna) की सामान्य सेवन मात्रा (Standard Dose) कितनी बताई गई है?", 
    options: ["१ माषा", "१ पल", "१ कर्ष (लगभग 12 ग्राम)", "४ कर्ष"], 
    correctAnswerIndex: 2,
    explanation: "शारंगधर संहिता के अनुसार \"चूर्णस्य कर्षमात्रं तु\" अर्थात् चूर्ण की मात्रा 1 कर्ष (1 तोल / ~12 ग्राम) मानी गई है।",
    reference: "शार्ङ्गधर संहिता (मध्यम खण्ड)",
    ncismRef: "Syllabus Point 14: Posology (Matra)"
  },
  { 
    questionText: "श्वास, कास, हिक्का, छर्दि (उल्टी) और विष विकारों में औषधि सेवन का कौन सा काल (Time of administration) निर्दिष्ट किया गया है?", 
    options: ["अभक्त (खाली पेट)", "मुहुर्मुहुः (बार-बार)", "सभक्त (भोजन के साथ)", "सामुद्ग (भोजन के आदि और अंत में)"], 
    correctAnswerIndex: 1,
    explanation: "प्राणवह स्रोतस के तीव्र रोगों (श्वास, कास) और विष में औषधि को दिन में बार-बार (मुहुर्मुहुः) दिया जाना चाहिए।",
    reference: "चरक चिकित्सास्थान 30/300",
    ncismRef: "Syllabus Point 15: Bheshaja Sevana Kala"
  },
  { 
    questionText: "आचार्य चरक के अनुसार, बलवान रोगी और बलवान व्याधि (तीव्र रोग) में औषधि सेवन का सर्वश्रेष्ठ काल कौन सा है?", 
    options: ["अभक्त (निराहार / खाली पेट)", "सग्रास (ग्रास के साथ)", "ग्रासान्तर (ग्रास के बीच में)", "निशि (रात्रि में)"], 
    correctAnswerIndex: 0,
    explanation: "बलवान व्यक्ति में खाली पेट (अभक्त) औषधि देने से वह पूर्ण वीर्य के साथ कार्य करती है और शीघ्र लाभ पहुँचाती है।",
    reference: "चरक चिकित्सास्थान 30/296",
    ncismRef: "Syllabus Point 15: Bheshaja Sevana Kala"
  },
  { 
    questionText: "जल, दुग्ध, तक्र (छाछ), और मद्य - आयुर्वेद में इन्हें मुख्य रूप से किस औषधीय श्रेणी में रखा गया है?", 
    options: ["मुख्य औषध द्रव्य", "प्रक्षेप (Prakshepa) द्रव्य", "अनुपान (Anupana) द्रव्य", "शोधन द्रव्य"], 
    correctAnswerIndex: 2,
    explanation: "ये द्रव्य औषधि के साथ या उसके तुरंत बाद अनुपान (Vehicle) के रूप में लिए जाते हैं ताकि औषधि का पाचन और अवशोषण शीघ्र हो सके।",
    reference: "चरक सूत्रस्थान 27",
    ncismRef: "Syllabus Point 15: Anupana (Concept and utility)"
  },
  { 
    questionText: "'प्रशस्त भेषज' (Ideal Drug) के चार गुणों—\"बहुकल्पं बहुगुणं सम्पन्नं योग्यमौषधम्\" का उल्लेख आचार्य चरक ने किस स्थान में किया है?", 
    options: ["विमान स्थान", "शारीर स्थान", "सूत्र स्थान", "कल्प स्थान"], 
    correctAnswerIndex: 2,
    explanation: "चरक संहिता सूत्रस्थान अध्याय 9 (खुड्डाकचतुष्पाद) में वैद्य, रोगी, परिचारक और औषध (प्रशस्त भेषज) के गुणों का वर्णन है।",
    reference: "चरक सूत्रस्थान 9/7",
    ncismRef: "Syllabus Point 12: Prashasta Bheshaja"
  },
  { 
    questionText: "आचार्य शारंगधर के अनुसार, क्वाथ (Decoction / Kashaya) की सामान्य सेवन मात्रा (Dose) कितनी निर्धारित की गई है?", 
    options: ["२ कर्ष", "२ पल (लगभग 96 ml)", "१ पल", "४ पल"], 
    correctAnswerIndex: 1,
    explanation: "शारंगधर संहिता में कहा गया है \"क्वाथस्य द्विपलं मतम्\", अर्थात् क्वाथ की मात्रा 2 पल (~96 ml) होती है।",
    reference: "शार्ङ्गधर संहिता (मध्यम खण्ड)",
    ncismRef: "Syllabus Point 14: Posology (Matra)"
  },
  { 
    questionText: "यदि किसी आयुर्वेदिक योग (Formulation) में 'अनुपान' विशेष रूप से निर्दिष्ट न किया गया हो, तो सामान्यतः किस अनुपान का प्रयोग करना चाहिए?", 
    options: ["मद्य (Alcohol)", "इक्षु रस (Sugarcane juice)", "कोष्ण जल (Lukewarm water / जल)", "घृत (Ghee)"], 
    correctAnswerIndex: 2,
    explanation: "जहाँ किसी विशेष अनुपान का उल्लेख न हो, वहाँ जल (सामान्य या कोष्ण) को सर्वमान्य और सुरक्षित अनुपान माना जाता है।",
    reference: "शार्ङ्गधर संहिता",
    ncismRef: "Syllabus Point 15: Anupana"
  },
  { 
    questionText: "भेषज सेवन काल (Time of drug administration) की कुल संख्या आचार्य सुश्रुत और आचार्य वाग्भट ने क्रमशः कितनी मानी है?", 
    options: ["10 और 10", "10 और 11", "11 और 10", "11 और 11"], 
    correctAnswerIndex: 1,
    explanation: "आचार्य चरक और सुश्रुत ने 10 भेषज सेवन काल माने हैं, जबकि अष्टांग संग्रह/हृदय (वाग्भट) ने 'निशि' काल को जोड़कर 11 माने हैं।",
    reference: "सुश्रुत उत्तरतन्त्र 64 / अष्टांग हृदय सूत्रस्थान 13",
    ncismRef: "Syllabus Point 15: Bheshaja Sevana Kala"
  },
  { 
    questionText: "'भारंगी' (Clerodendrum serratum) जो कि श्वास-कास हर औषधि है, इसके अभाव में प्रतिनिधि द्रव्य के रूप में किसका प्रयोग उत्तम बताया गया है?", 
    options: ["तालीशपत्र", "कण्टकारी (Kantakari)", "वासा", "पिप्पली"], 
    correctAnswerIndex: 1,
    explanation: "\"भारंगी-अभावे तु देया कण्टकारिका\" अर्थात् भारंगी के उपलब्ध न होने पर कण्टकारी का प्रयोग श्वास-कास रोगों में करना चाहिए।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 10: Abhava Pratinidhi Dravya (Substitute Drugs)"
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
