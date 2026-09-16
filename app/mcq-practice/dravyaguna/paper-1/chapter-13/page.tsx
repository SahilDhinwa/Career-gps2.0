"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_CH13 = [
  { 
    questionText: "प्रसिद्ध आयुर्वेद ग्रन्थ 'राज निघण्टु' (Raja Nighantu) के रचयिता नरहरि पण्डित ने औषधीय द्रव्यों के नामकरण (Nomenclature) के कुल कितने आधार (Criteria) स्वीकार किए हैं?", 
    options: ["4", "5", "7", "10"], 
    correctAnswerIndex: 2,
    explanation: "राज निघण्टु में नामकरण के 7 आधार बताए गए हैं— रूढि, प्रभाव, देशोक्ति, लाञ्छन, उपमा, वीर्य और इतरनाह्वय।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "राज निघण्टु के नामकरण सिद्धांतों में 'रूढि' (Rudhi) का क्या तात्पर्य है?", 
    options: ["द्रव्य का उसके गुणों के आधार पर नामकरण", "द्रव्य का परम्परागत और लोकप्रचलित (Conventional) नाम", "द्रव्य की जन्मभूमि के आधार पर नामकरण", "द्रव्य का अन्य वस्तुओं से तुलना के आधार पर नामकरण"], 
    correctAnswerIndex: 1,
    explanation: "रूढि का अर्थ है वह नाम जो परम्परा से लोक में बिना किसी विशेष युक्ति के प्रसिद्ध हो गया हो, जैसे 'गुडूची'।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "द्रव्यों के नामकरण में 'देशोक्ति' (Habitat/Origin) के आधार पर रखा गया नाम निम्नलिखित में से कौन सा है?", 
    options: ["काकजंघा", "गोक्षुर", "मागधी (पिप्पली)", "कृमिघ्न"], 
    correctAnswerIndex: 2,
    explanation: "पिप्पली का 'मागधी' नाम उसके मगध देश (बिहार) में उत्पन्न होने की 'देशोक्ति' (Habitat) के कारण पड़ा है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "द्विनाम पद्धति (Binomial Nomenclature) में किसी भी पादप के वैज्ञानिक नाम (Scientific Name) का पहला शब्द क्या प्रदर्शित करता है?", 
    options: ["कुल (Family)", "जाति (Species)", "वंश (Genus)", "गण (Order)"], 
    correctAnswerIndex: 2,
    explanation: "कार्ल लीनियस की द्विनाम पद्धति में पहला नाम वंश (Genus) और दूसरा नाम जाति (Species) का होता है।",
    reference: "Modern Botany",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "'मण्डूकपर्णी' और 'गोक्षुर' द्रव्यों का नामकरण राज निघण्टु के किस सिद्धांत के आधार पर किया गया है?", 
    options: ["प्रभाव (Action)", "उपमा (Simile / Comparison)", "देशोक्ति (Habitat)", "वीर्य (Potency)"], 
    correctAnswerIndex: 1,
    explanation: "मेंढक (मण्डूक) के समान पत्ते होने से मण्डूकपर्णी और गाय के खुर (गोक्षुर) के समान फल होने से इसका नाम उपमा (तुलना) पर आधारित है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "वैदिक संहिताओं (विशेषकर ऋग्वेद और अथर्ववेद) में पादपों (Plants) का जो वर्गीकरण मिलता है, उसमें 'ओषधि' शब्द का प्रयोग मुख्य रूप से किन पादपों के लिए किया गया है?", 
    options: ["जो बहुत विशाल वृक्ष होते हैं", "जो फल पकने के बाद सूख कर नष्ट हो जाते हैं", "जो लताओं के रूप में वृक्षों पर चढ़ते हैं", "जिनमें केवल फूल आते हैं, फल नहीं"], 
    correctAnswerIndex: 1,
    explanation: "वेदों और आयुर्वेद में \"फलपाकान्ता ओषधयः\" अर्थात् फल पकने पर नष्ट होने वाले क्षुपों को ओषधि कहा गया है।",
    reference: "वैदिक साहित्य / चरक सूत्रस्थान 1",
    ncismRef: "Syllabus Point 13: Vedic taxonomy"
  },
  { 
    questionText: "विडंग को 'कृमिघ्न' और हरीतकी को 'पथ्या' कहा जाता है। यह नामकरण किस आधार (Criteria) को दर्शाता है?", 
    options: ["लाञ्छन", "प्रभाव (Pharmacological Action)", "इतरनाह्वय", "रूढि"], 
    correctAnswerIndex: 1,
    explanation: "जो द्रव्य शरीर पर जो विशिष्ट कर्म (Pharmacological action) करता है, उसी प्रभाव के आधार पर कृमिघ्न (विडंग) आदि नाम रखे गए हैं।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "वानस्पतिक नामकरण के अंतर्राष्ट्रीय नियम 'ICBN' का पूर्ण रूप (Full form) क्या है?", 
    options: ["Indian Code of Botanical Nomenclature", "International Council of Biological Nomenclature", "International Code of Botanical Nomenclature", "International Community of Botanical Network"], 
    correctAnswerIndex: 2,
    explanation: "यह वह नियमावली है जिसके तहत विश्वभर में पादपों का वैज्ञानिक नामकरण किया जाता है।",
    reference: "Modern Botany",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "द्रव्यों के नामकरण में 'इतरनाह्वय' (Names based on synonyms of other entities) का सबसे सटीक उदाहरण निम्नलिखित में से कौन सा है?", 
    options: ["शक्र (कुटज का पर्याय - इन्द्र के नाम पर)", "विदारीकन्द", "काश्मरी", "उष्णा"], 
    correctAnswerIndex: 0,
    explanation: "इतरनाह्वय का अर्थ है किसी अन्य प्रसिद्ध वस्तु या देवता के नाम को द्रव्य के लिए प्रयोग करना (जैसे इन्द्र के पर्याय 'शक्र' को कुटज के लिए प्रयुक्त करना)।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "जब किसी पौधे का वंशीय नाम (Generic name) और जातीय नाम (Specific epithet) बिलकुल एक समान होता है (जैसे- Linaria linaria), तो उसे वानस्पतिक नामकरण (Botanical Taxonomy) में क्या कहा जाता है?", 
    options: ["सिनोनिम (Synonym)", "होमोनियम (Homonym)", "टॉटोनिम (Tautonym)", "बासोनिम (Basionym)"], 
    correctAnswerIndex: 2,
    explanation: "आधुनिक ICBN (अब ICN) नियमों के अनुसार पादपों में टॉटोनिम्स (समान वंश और जाति नाम) अमान्य (Invalid) होते हैं, जबकि जन्तुओं में मान्य हैं।",
    reference: "Modern Botany (ICBN Rules)",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "राज निघण्टु के अनुसार, 'त्रिवृत्' (Operculina turpethum) का नामकरण उसके तने/मूल पर उपस्थित तीन धारियों के कारण हुआ है। यह नामकरण का कौन सा आधार है?", 
    options: ["उपमा", "लाञ्छन (Morphological Mark)", "रूढि", "वीर्य"], 
    correctAnswerIndex: 1,
    explanation: "लाञ्छन का अर्थ है कोई विशिष्ट चिह्न या बाह्य स्वरूप (Morphological character), जिसके आधार पर त्रिवृत् (तीन धारी) का नाम पड़ा है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "आधुनिक वानस्पतिक वर्गीकरण (Taxonomy) की सबसे छोटी (Basic) और आधारभूत इकाई (Unit) किसे माना जाता है?", 
    options: ["कुल (Family)", "गण (Order)", "जाति (Species)", "वंश (Genus)"], 
    correctAnswerIndex: 2,
    explanation: "वर्गीकरण विज्ञान (Taxonomy) में जीवों या पादपों के वर्गीकरण की सबसे मूलभूत इकाई 'जाति' (Species) होती है।",
    reference: "Modern Botany",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "वैदिक साहित्य (अथर्ववेद) में पादपों के स्वरूप (Morphology) के आधार पर लताओं (Climbers) के लिए सामान्यतः किस शब्द का प्रयोग किया गया है?", 
    options: ["वनस्पति", "वीरुध (प्रतानवती)", "ओषधि", "गुल्म"], 
    correctAnswerIndex: 1,
    explanation: "जो पादप फैलने वाले (Creepers/Climbers) होते हैं, उन्हें वेदों और संहिताओं में प्रतानवती वीरुध कहा गया है।",
    reference: "वैदिक साहित्य",
    ncismRef: "Syllabus Point 13: Vedic taxonomy"
  },
  { 
    questionText: "वैज्ञानिक नामकरण लिखते समय नियमों (Botanical Rules) के अनुसार 'जाति' (Species epithet) का नाम हमेशा किस अक्षर (Letter) से शुरू होना चाहिए?", 
    options: ["कैपिटल लेटर (Capital letter)", "स्मॉल लेटर (Small letter)", "रोमन अंक (Roman numeral)", "ग्रीक अक्षर (Greek letter)"], 
    correctAnswerIndex: 1,
    explanation: "ICBN नियमों के अनुसार वंश (Genus) का पहला अक्षर Capital और जाति (Species) का पहला अक्षर Small होना चाहिए।",
    reference: "Modern Botany (ICBN Rules)",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "'गुडूची' को उसके कभी नष्ट न होने वाले स्वभाव (Nature/Habit) के कारण किस नाम से जाना जाता है?", 
    options: ["छिन्नरुहा", "काकजंघा", "सौराष्ट्री", "उष्णा"], 
    correctAnswerIndex: 0,
    explanation: "गुडूची की लता कट जाने (छिन्न) के बाद भी पुनः उग (रुह) आती है, यह उसके विशिष्ट स्वभाव को दर्शाता है।",
    reference: "भावप्रकाश निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "'उष्णा' और 'शीतशिवा' - ये पर्याय द्रव्यों के किस गुण को मुख्य रूप से प्रदर्शित करते हुए नामकरण का हिस्सा बने हैं?", 
    options: ["रस", "वीर्य (Potency)", "विपाक", "प्रभाव"], 
    correctAnswerIndex: 1,
    explanation: "उष्णा (तीक्ष्ण/उष्ण वीर्य वाली) और शीतशिवा (शीत वीर्य वाली) नाम द्रव्यों के 'वीर्य' (Potency) के आधार पर रखे गए हैं।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "किसी पादप के वानस्पतिक नाम के अंत में प्रयुक्त प्रत्यय (Suffix) \"-aceae\" (जैसे- Fabaceae, Apiaceae) वर्गीकरण के किस स्तर को दर्शाता है?", 
    options: ["कुल (Family)", "गण (Order)", "वर्ग (Class)", "उपजगत (Sub-kingdom)"], 
    correctAnswerIndex: 0,
    explanation: "अंतर्राष्ट्रीय नियमों के अनुसार पौधों के कुल (Family) का नामकरण प्रायः \"-aceae\" (एसी) प्रत्यय लगाकर किया जाता है।",
    reference: "Modern Botany",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "'वत्सनाभ' (Vatsanabha) का नामकरण बछड़े (वत्स) की नाभि (नाभ) के समान दिखने के कारण हुआ है। निघण्टुओं के अनुसार यह किसका उदाहरण है?", 
    options: ["देशोक्ति", "उपमा (Simile)", "वीर्य", "रूढि"], 
    correctAnswerIndex: 1,
    explanation: "जब किसी द्रव्य के स्वरूप की तुलना लोक-प्रसिद्ध प्राणी या वस्तु से की जाती है (जैसे बछड़े की नाभि), तो वह उपमा कहलाती है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  },
  { 
    questionText: "वानस्पतिक नामकरण (Botanical Nomenclature) में यदि हाथ से लिखा जाए, तो जीनस (Genus) और स्पीशीज (Species) के नामों को कैसे प्रदर्शित करना अनिवार्य है?", 
    options: ["दोनों को एक साथ मिलाकर लिखना", "दोनों को अलग-अलग रेखांकित (Underline) करना", "केवल स्पीशीज को रेखांकित करना", "दोनों को कोष्ठक (Brackets) में लिखना"], 
    correctAnswerIndex: 1,
    explanation: "द्विपद नामकरण (Binomial Nomenclature) में हस्तलिखित वैज्ञानिक नामों को अलग-अलग अंडरलाइन (Underline) करना अनिवार्य है ताकि वे इटैलिक (Italic) छपाई का संकेत दे सकें।",
    reference: "Modern Botany (ICBN Rules)",
    ncismRef: "Syllabus Point 13: Nomenclature as per Botany"
  },
  { 
    questionText: "'शतावरी' का नामकरण उसकी अनेक (सौ) मूलों (जड़ों) की उपस्थिति के कारण रखा गया है। यह नामकरण के किस सिद्धांत को दर्शाता है?", 
    options: ["संख्या / लाञ्छन (Numerical/Morphological characteristic)", "देशोक्ति", "वीर्य", "इतरनाह्वय"], 
    correctAnswerIndex: 0,
    explanation: "शतावरी (शत=100) में अनेक मूल (Tuberous roots) होते हैं, जो उसकी विशिष्ट बनावट (लाञ्छन) और संख्या को प्रदर्शित करता है।",
    reference: "राज निघण्टु",
    ncismRef: "Syllabus Point 13: Nomenclature of dravya as per Nighantu"
  }
];

export default function DravyagunaPaper1Ch13() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_CH13.length) {
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
    DRAVYAGUNA_PAPER_1_CH13.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_CH13[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_CH13.length}
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
                <Beaker className="w-4 h-4" /> Ch-13 Nomenclature
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_CH13.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_CH13.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
        }
              
