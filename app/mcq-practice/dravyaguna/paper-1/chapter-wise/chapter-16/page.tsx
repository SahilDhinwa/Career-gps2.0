"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_CH16 = [
  { 
    questionText: "औषधीय पादपों के संदर्भ में 'GCP' (Good Cultivation Practices) दिशा-निर्देशों का मुख्य उद्देश्य क्या है?", 
    options: ["जंगलों से अधिक से अधिक जड़ी-बूटियां उखाड़ना", "औषधीय पादपों की एकसमान गुणवत्ता, सुरक्षा और निरंतर आपूर्ति सुनिश्चित करना", "पादपों में कृत्रिम रंग मिलाना", "केवल विदेशी पौधों की खेती करना"], 
    correctAnswerIndex: 1,
    explanation: "GCP का लक्ष्य प्राकृतिक आवास को नुकसान पहुँचाए बिना उच्च गुणवत्ता वाले और सुरक्षित औषधीय कच्चे माल का उत्पादन करना है।",
    reference: "GCP Guidelines (WHO/NMPB)",
    ncismRef: "Syllabus Point 16: GCP (Good cultivation practices)"
  },
  { 
    questionText: "जैव-विविधता और औषधीय पादपों के संरक्षण की 'इन-सिटू' (In-situ Conservation) विधि का अर्थ क्या है?", 
    options: ["पौधों को ग्रीनहाउस (Greenhouse) में उगाना", "पौधों को उनके मूल एवं प्राकृतिक आवास (Natural habitat) में संरक्षित करना", "बीजों को प्रयोगशाला में सुरक्षित रखना", "पौधों को बोटैनिकल गार्डन में लगाना"], 
    correctAnswerIndex: 1,
    explanation: "'इन-सिटू' (In-situ) का अर्थ 'On-site' है, जहाँ जीवों और पौधों को उनके प्राकृतिक इकोसिस्टम में ही बचाया जाता है।",
    reference: "Conservation of Biodiversity",
    ncismRef: "Syllabus Point 16: Conservation of medicinal plants"
  },
  { 
    questionText: "निम्नलिखित में से कौन सा पादप संरक्षण का 'एक्स-सिटू' (Ex-situ Conservation / बाह्य-स्थाने संरक्षण) का उदाहरण है?", 
    options: ["राष्ट्रीय उद्यान (National Parks)", "वन्यजीव अभयारण्य (Wildlife Sanctuaries)", "पवित्र उपवन (Sacred Groves)", "बीज बैंक (Seed Banks) और जीन बैंक"], 
    correctAnswerIndex: 3,
    explanation: "जब पौधों या उनके बीजों को उनके प्राकृतिक आवास से बाहर लाकर नियंत्रित वातावरण में संरक्षित किया जाता है, तो उसे Ex-situ संरक्षण कहते हैं।",
    reference: "Conservation Methods",
    ncismRef: "Syllabus Point 16: Seed bank, conservation"
  },
  { 
    questionText: "'बीज बैंक' (Seed Bank) में बीजों को लंबे समय तक सुरक्षित रखने के लिए अपनाई जाने वाली 'क्रायोप्रिजर्वेशन' (Cryopreservation) तकनीक में किस रसायन और तापमान का उपयोग किया जाता है?", 
    options: ["तरल ऑक्सीजन, -50°C", "तरल नाइट्रोजन, -196°C", "ठोस कार्बन डाइऑक्साइड, 0°C", "फॉर्मेलिन, 25°C"], 
    correctAnswerIndex: 1,
    explanation: "क्रायोप्रिजर्वेशन में कोशिकाओं, ऊतकों और बीजों को तरल नाइट्रोजन (Liquid Nitrogen) में -196°C पर जमाकर वर्षों तक संरक्षित रखा जाता है।",
    reference: "Seed Banking Techniques",
    ncismRef: "Syllabus Point 16: Seed bank"
  },
  { 
    questionText: "भारत में विभिन्न जनजातियों और समुदायों द्वारा धार्मिक आस्थाओं के कारण वनों के कुछ हिस्सों को पूरी तरह संरक्षित रखा जाता है। इस 'इन-सिटू' संरक्षण को क्या कहा जाता है?", 
    options: ["बोटैनिकल गार्डन", "पवित्र उपवन (Sacred Groves)", "सीड बैंक", "हर्बेरियम"], 
    correctAnswerIndex: 1,
    explanation: "भारत में पवित्र उपवन (जैसे- मेघालय या राजस्थान के ओरण) 'इन-सिटू' पादप संरक्षण के उत्कृष्ट पारंपरिक उदाहरण हैं।",
    reference: "Traditional Conservation",
    ncismRef: "Syllabus Point 16: Conservation of medicinal plants"
  },
  { 
    questionText: "सीड बैंक (Seed Bank) में सुरक्षित रखे जाने वाले 'ऑर्थोडॉक्स बीज' (Orthodox seeds) की क्या विशेषता होती है?", 
    options: ["ये बीज बहुत अधिक नमी में ही जीवित रहते हैं", "ये बीज अत्यधिक सुखाए जाने (Low moisture) और कम तापमान पर भी जीवित और सुरक्षित रहते हैं", "ये बीज केवल एक दिन के लिए जीवनक्षम (Viable) होते हैं", "इन बीजों में कभी अंकुरण (Germination) नहीं होता"], 
    correctAnswerIndex: 1,
    explanation: "ऑर्थोडॉक्स बीज वे होते हैं जिन्हें सुखाकर (5% तक नमी) डीप-फ्रीज में रखा जा सकता है, जिससे वे सीड बैंक में वर्षों तक सुरक्षित रहते हैं।",
    reference: "Seed Biology",
    ncismRef: "Syllabus Point 16: Seed bank"
  },
  { 
    questionText: "\"Good Cultivation Practices\" (GCP) के अंतर्गत, मृदा (Soil) की उर्वरता बढ़ाने और पौधों की गुणवत्ता बनाए रखने के लिए मुख्य रूप से किसका प्रयोग अनुशंसित (Recommended) है?", 
    options: ["अत्यधिक रासायनिक कीटनाशकों का", "कृत्रिम यूरिया का", "जैविक खाद (Organic manure/Bio-fertilizers) का", "अनियंत्रित रसायनों का"], 
    correctAnswerIndex: 2,
    explanation: "GCP औषधीय पौधों के प्राकृतिक रासायनिक संगठन (Active principles) को बनाए रखने के लिए जैविक खेती को प्राथमिकता देता है।",
    reference: "GCP Guidelines",
    ncismRef: "Syllabus Point 16: GCP"
  },
  { 
    questionText: "जंगलों (Wild sources) से औषधीय पादपों के निरंतर दोहन (Overexploitation) को कम करने का सबसे प्रभावी वैज्ञानिक उपाय क्या है?", 
    options: ["पादपों का उपयोग पूरी तरह बंद कर देना", "कृषिकरण (Cultivation) और टिशू कल्चर (Tissue culture) को बढ़ावा देना", "जड़ी-बूटियों को जला देना", "औषधियों में मिलावट (Adulteration) करना"], 
    correctAnswerIndex: 1,
    explanation: "जंगली पौधों को विलुप्त होने से बचाने के लिए किसानों द्वारा उनकी खेती (GCP) करना सबसे उपयुक्त समाधान है।",
    reference: "Conservation Strategies",
    ncismRef: "Syllabus Point 16: Conservation of medicinal plants"
  },
  { 
    questionText: "औषधीय पादपों की खेती (GCP) के दौरान सिंचाई (Irrigation) के लिए प्रयुक्त जल के लिए क्या अनिवार्य शर्त है?", 
    options: ["जल में भारी धातुएं (Heavy metals) और प्रदूषक नहीं होने चाहिए", "जल सीवेज (Sewage) का होना चाहिए", "जल अत्यधिक खारा (Saline) होना चाहिए", "जल में औद्योगिक कचरा होना चाहिए"], 
    correctAnswerIndex: 0,
    explanation: "यदि सिंचाई के जल में भारी धातुएं (Arsenic, Lead आदि) होंगी, तो वे औषधि में आ जाएंगी, जिससे औषधि विषैली हो जाएगी।",
    reference: "GCP Guidelines",
    ncismRef: "Syllabus Point 16: GCP"
  },
  { 
    questionText: "दुर्लभ औषधीय पौधों के द्रुत-गुणन (Rapid mass multiplication) और रोगमुक्त पौधे तैयार करने के लिए GCP और संरक्षण में कौन सी आधुनिक तकनीक सबसे उपयोगी है?", 
    options: ["संकरण (Hybridization)", "पादप ऊतक संवर्धन (Plant Tissue Culture / Micropropagation)", "ग्राफ्टिंग (Grafting)", "लेयरिंग (Layering)"], 
    correctAnswerIndex: 1,
    explanation: "यह तकनीक अत्यंत कम समय और कम स्थान में लाखों रोगमुक्त और क्लोनल पौधे तैयार करने में मदद करती है।",
    reference: "Modern Plant Biotechnology",
    ncismRef: "Syllabus Point 16: Conservation of medicinal plants"
  },
  { 
    questionText: "औषधीय पादपों के संरक्षण के संदर्भ में प्रयुक्त संक्षिप्ताक्षर (Abbreviation) \"RET\" प्रजातियों का पूर्ण रूप क्या है?", 
    options: ["Reserved, Essential, and Treated", "Rare, Endangered, and Threatened (दुर्लभ, संकटापन्न और खतरे में)", "Regional, Endemic, and Tested", "Routine, Evaluated, and Toxic"], 
    correctAnswerIndex: 1,
    explanation: "RET उन पादप प्रजातियों का समूह है जिनकी संख्या प्रकृति में बहुत कम हो गई है (Rare), या जो विलुप्त होने की कगार पर हैं।",
    reference: "IUCN Guidelines",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "आयुर्वेद में प्रयुक्त 'जटामांसी' (Nardostachys jatamansi) और 'कुटकी' (Picrorhiza kurroa) हिमालयी क्षेत्र के पादप हैं। अत्यधिक दोहन के कारण वर्तमान में इन्हें किस श्रेणी में रखा गया है?", 
    options: ["प्रचुर मात्रा में उपलब्ध (Abundant)", "खरपतवार (Weeds)", "संकटापन्न (Endangered / RET)", "विदेशी (Exotic)"], 
    correctAnswerIndex: 2,
    explanation: "जटामांसी और कुटकी के औषधीय महत्व के कारण हिमालय से इनका भारी अवैज्ञानिक दोहन हुआ है, जिससे ये RET सूची में आ गए हैं।",
    reference: "RET Species List",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "IUCN रेड लिस्ट (Red List) के वर्गीकरण में श्रेणी \"VU\" (Vulnerable / सुभेद्य) का क्या तात्पर्य है?", 
    options: ["वे प्रजातियां जो धरती से पूरी तरह विलुप्त हो चुकी हैं", "वे प्रजातियां जिन पर भविष्य में 'संकटापन्न' (Endangered) होने का अत्यधिक खतरा मंडरा रहा है", "वे प्रजातियां जो केवल चिड़ियाघर में हैं", "वे प्रजातियां जिनकी संख्या बढ़ रही है"], 
    correctAnswerIndex: 1,
    explanation: "'सुभेद्य' (Vulnerable - VU) वे प्रजातियां हैं जिनके आवास को खतरा है और यदि इसे रोका न गया तो वे शीघ्र ही Endangered हो जाएंगी।",
    reference: "IUCN Red List Categories",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "यदि कोई औषधीय पादप अपने मूल प्राकृतिक आवास (Wild) से पूरी तरह लुप्त हो चुका है, किन्तु केवल सीड बैंक या बोटैनिकल गार्डन में ही जीवित बचा है, तो उसे क्या कहा जाता है?", 
    options: ["Extinct (EX)", "Extinct in the Wild (EW)", "Least Concern (LC)", "Near Threatened (NT)"], 
    correctAnswerIndex: 1,
    explanation: "जो पादप जंगलों (प्राकृतिक आवास) में नष्ट हो चुके हैं लेकिन मानव संरक्षण (एक्स-सिटू) में जीवित हैं, उन्हें EW कहते हैं।",
    reference: "IUCN Red List Categories",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "भारत में लाल चंदन या 'रक्तचंदन' (Pterocarpus santalinus) मुख्य रूप से आंध्र प्रदेश के पूर्वी घाटों में पाया जाता है। यह एक 'Endemic' और 'Endangered' प्रजाति है। यहाँ 'Endemic' (स्थानिक) का क्या अर्थ है?", 
    options: ["जो पौधा दुनिया में हर जगह उगता हो", "जो पौधा केवल एक विशिष्ट और सीमित भौगोलिक क्षेत्र में ही पाया जाता हो", "जो पौधा पानी में उगता हो", "जो पौधा केवल ठंड में उगता हो"], 
    correctAnswerIndex: 1,
    explanation: "Endemic (स्थानिक) पौधे दुनिया में केवल एक ही जगह (जैसे रक्तचंदन शेषाचलम पहाड़ियों में) पाए जाते हैं, इसलिए इनके लुप्त होने का खतरा अधिक होता है।",
    reference: "Plant Geography",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "'CITES' एक अंतर्राष्ट्रीय समझौता है जो औषधीय पादपों (जैसे- कुटकी, जटामांसी) और वन्यजीवों के संरक्षण के लिए कार्य करता है। इसका मुख्य उद्देश्य क्या है?", 
    options: ["पौधों को पानी देना", "देशों के बीच प्रजातियों के अंतर्राष्ट्रीय व्यापार (International trade) को नियंत्रित करना ताकि उनका अस्तित्व खतरे में न पड़े", "पौधों के लिए नए नाम सोचना", "औषधियों का विज्ञापन करना"], 
    correctAnswerIndex: 1,
    explanation: "CITES (Convention on International Trade in Endangered Species) यह सुनिश्चित करता है कि जंगली जानवरों और पौधों के व्यापार से उनके अस्तित्व को खतरा न हो।",
    reference: "CITES Documentation",
    ncismRef: "Syllabus Point 16: Conservation of medicinal plants"
  },
  { 
    questionText: "RET प्रजातियों की 'रेड डेटा बुक' (Red Data Book) किसके द्वारा प्रकाशित और अनुरक्षित (Maintained) की जाती है?", 
    options: ["WHO (विश्व स्वास्थ्य संगठन)", "IUCN (International Union for Conservation of Nature)", "PCIMH", "CCIM"], 
    correctAnswerIndex: 1,
    explanation: "IUCN विश्वभर की प्रजातियों की संरक्षण स्थिति का मूल्यांकन कर उन्हें 'रेड डेटा बुक' (Red List) में वर्गीकृत करता है।",
    reference: "IUCN Official Records",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "औषधीय पादपों के संकटापन्न (Endangered) होने का सबसे प्रमुख और प्राथमिक कारण क्या है?", 
    options: ["हर्बेरियम बनाना", "प्राकृतिक आवास का विनाश (Habitat destruction) और अवैज्ञानिक दोहन", "बीजों का সংরক্ষণ", "जैविक खेती (Organic farming)"], 
    correctAnswerIndex: 1,
    explanation: "वनों की कटाई, शहरीकरण और जड़ी-बूटियों को जड़ से उखाड़ने (Destructive harvesting) के कारण प्रजातियां संकटापन्न हो रही हैं।",
    reference: "Environmental Science",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  },
  { 
    questionText: "GCP दिशा-निर्देशों के अनुसार, 'अतिविषा' (Aconitum heterophyllum) जैसे उच्च-तुंगता (High-altitude) वाले RET पादपों की खेती के लिए कौन सा भौगोलिक क्षेत्र सबसे अनुकूल है?", 
    options: ["तटीय क्षेत्र (Coastal areas)", "दलदली भूमि (Marshy lands)", "हिमालयी क्षेत्र (Himalayan regions)", "रेगिस्तान (Desert)"], 
    correctAnswerIndex: 2,
    explanation: "GCP के अनुसार पादप की खेती उसके प्राकृतिक जलवायु में ही होनी चाहिए। अतिविषा हिमालय के ठंडे क्षेत्रों का पौधा है।",
    reference: "GCP Guidelines",
    ncismRef: "Syllabus Point 16: GCP"
  },
  { 
    questionText: "IUCN वर्गीकरण के अनुसार, यदि किसी पौधे की संख्या 90% से अधिक घट गई है और उसके बचने की सम्भावना बहुत क्षीण है, तो उसे किस 'Critically' श्रेणी में रखा जाएगा?", 
    options: ["Critically Endangered (CR - अति संकटापन्न)", "Least Concern (LC)", "Data Deficient (DD)", "Not Evaluated (NE)"], 
    correctAnswerIndex: 0,
    explanation: "CR श्रेणी उन प्रजातियों को दी जाती है जो प्रकृति (Wild) में विलुप्त होने के अत्यंत उच्च जोखिम (Extremely high risk) का सामना कर रही हैं।",
    reference: "IUCN Red List Categories",
    ncismRef: "Syllabus Point 16: RET medicinal plants"
  }
];

export default function DravyagunaPaper1Ch16() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_CH16.length) {
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
    DRAVYAGUNA_PAPER_1_CH16.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_CH16[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_CH16.length}
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
                <Beaker className="w-4 h-4" /> Ch-16 GCP & Conservation
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_CH16.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_CH16.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
