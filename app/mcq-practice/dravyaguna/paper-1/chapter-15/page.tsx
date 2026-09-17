"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_CH15 = [
  { 
    questionText: "चरक संहिता के अनुसार, भेषज (औषधि) संग्रहण के लिए किस प्रकार की भूमि को सर्वोत्कृष्ट (Best) माना गया है?", 
    options: ["ऊषर और कंकरीली भूमि", "श्मशान या वल्मीक (बांबी) वाली भूमि", "समतल, स्निग्ध, कृष्णवर्णीय और जल के समीप वाली भूमि", "जहाँ बहुत अधिक कीड़े और दीमक हों"], 
    correctAnswerIndex: 2,
    explanation: "आचार्य चरक ने कल्पस्थान में स्पष्ट किया है कि औषधि संग्रहण के लिए भूमि समतल, स्निग्ध, कृष्ण या स्वर्ण वर्णीय और जल के समीप होनी चाहिए, जो श्मशान या दीमकों से मुक्त हो।",
    reference: "चरक कल्पस्थान 1/8",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "Good Field Collection Practices (GFCP) का मुख्य उद्देश्य क्या है?", 
    options: ["औषधियों में मिलावट करना", "पादपों का अनियंत्रित और अत्यधिक दोहन करना", "गुणवत्तापूर्ण औषधीय पादपों का टिकाऊ (Sustainable) और सुरक्षित संग्रहण करना", "केवल विदेशी पादपों की खेती करना"], 
    correctAnswerIndex: 2,
    explanation: "GFCP (NMPB/WHO द्वारा जारी) का मुख्य उद्देश्य औषधीय पादपों का इस प्रकार संग्रहण करना है कि उनकी गुणवत्ता बनी रहे और प्रजाति नष्ट (Extinct) न हो।",
    reference: "GFCP Guidelines (NMPB)",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "आचार्य चरक के अनुसार, पादपों की 'शाखाओं' (Branches) और 'पत्तों' (Leaves) का संग्रहण किस ऋतु में करना निर्दिष्ट है?", 
    options: ["ग्रीष्म और वसंत", "वर्षा और वसंत", "हेमंत और शिशिर", "शरद और ग्रीष्म"], 
    correctAnswerIndex: 1,
    explanation: "\"वर्षावसन्तयोः शाखापलाशम्\" अर्थात् वर्षा और वसंत ऋतु में जब वृक्षों में नए पत्ते और शाखाएं आती हैं, तब उनका संग्रहण करना चाहिए।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "GFCP के दिशा-निर्देशों के अनुसार, किसी वृक्ष की छाल (Bark) निकालते समय कौन सी विधि अपनानी चाहिए ताकि वृक्ष जीवित रहे?", 
    options: ["वृक्ष को जड़ से उखाड़ लेना", "तने को पूरी तरह गोल छील देना (Girdling/Ring barking)", "तने पर अनुदैर्ध्य (Longitudinal) पट्टियों में छाल निकालना", "वृक्ष की सभी शाखाएं काट देना"], 
    correctAnswerIndex: 2,
    explanation: "छाल निकालते समय कभी भी तने को चारों ओर से नहीं छीलना चाहिए (Girdling से पेड़ सूख जाता है)। हमेशा सीधी (Longitudinal) पट्टियों में छाल निकालनी चाहिए।",
    reference: "GFCP Guidelines",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "आचार्य चरक के अनुसार क्षीर (Latex), त्वक् (Bark) और कन्द (Tuber) का संग्रहण मुख्य रूप से किस ऋतु में करना चाहिए?", 
    options: ["शरद ऋतु", "वसंत ऋतु", "हेमंत ऋतु", "वर्षा ऋतु"], 
    correctAnswerIndex: 0,
    explanation: "\"शरदि त्वक्कन्दक्षीराणि\" अर्थात् शरद ऋतु में पादप की छाल, कन्द और क्षीर (दूध/Latex) का संग्रहण करना उत्तम माना गया है।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "वाष्पशील तेलों (Volatile oils) से युक्त औषधीय पादपों (जैसे पुदीना, तुलसी) को सुखाने (Drying) की सबसे उत्तम विधि कौन सी है?", 
    options: ["तेज़ धूप में सुखाना (Direct sun drying)", "ओवन में अत्यधिक उच्च तापमान पर सुखाना", "छाया में वायु-संचारित स्थान पर सुखाना (Shade drying)", "पानी में उबालना"], 
    correctAnswerIndex: 2,
    explanation: "सुगंधित और वाष्पशील तेल तेज धूप या उच्च तापमान में उड़ (Evaporate) जाते हैं, इसलिए इन्हें हमेशा छाया (Shade) में सुखाया जाता है।",
    reference: "GFCP Guidelines (Post-harvest processing)",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "भेषज संग्रहण करते समय वैद्य या संग्रहकर्ता को किस दिशा की ओर मुख (Facing direction) करके खड़ा होना चाहिए?", 
    options: ["पूर्व या उत्तर (East or North)", "दक्षिण या पश्चिम (South or West)", "केवल दक्षिण (South)", "किसी भी दिशा में"], 
    correctAnswerIndex: 0,
    explanation: "शास्त्रों के अनुसार भेषज संग्रहण करते समय संग्रहकर्ता को पवित्र होकर पूर्व या उत्तर दिशा (कल्याणकारी दिशाएं) की ओर मुख करके औषधि उखाड़नी चाहिए।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "आचार्य सुश्रुत के अनुसार, सभी प्रकार के कंदों (Tubers) का संग्रहण किस ऋतु में करना श्रेष्ठ बताया गया है?", 
    options: ["ग्रीष्म ऋतु", "हेमंत ऋतु (शीतकाल)", "वर्षा ऋतु", "वसंत ऋतु"], 
    correctAnswerIndex: 1,
    explanation: "सुश्रुत के अनुसार शीतकाल (हेमंत ऋतु) में कंदों का पोषण अधिकतम होता है, इसलिए कंदों का संग्रहण हेमंत ऋतु में निर्दिष्ट है।",
    reference: "सुश्रुत सूत्रस्थान 36",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "GFCP के तहत भूमिगत भागों (जैसे मूल, कंद / Roots, Rhizomes) को खेत या जंगल से उखाड़ने के तुरंत बाद सबसे पहला और आवश्यक कदम क्या होना चाहिए?", 
    options: ["उन्हें सीधे धूप में सूखने के लिए रख देना", "बहते हुए साफ़ पानी से मिट्टी और अशुद्धियों को धोना", "उन्हें काटकर बारीक पाउडर बना लेना", "रसायनों से ब्लीच करना"], 
    correctAnswerIndex: 1,
    explanation: "भूमिगत भागों में मिट्टी और सूक्ष्मजीव (Microbes) बहुत अधिक होते हैं, इसलिए उखाड़ने के तुरंत बाद उन्हें साफ़ पानी (Running water) से धोना चाहिए।",
    reference: "GFCP Guidelines",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "औषधीय द्रव्यों को सुरक्षित रखने के लिए निर्मित 'भेषजागार' (Storehouse/Pharmacy) का द्वार (Gate) आचार्य चरक के अनुसार किस दिशा में होना चाहिए?", 
    options: ["पूर्व या उत्तर दिशा की ओर", "दक्षिण दिशा की ओर", "पश्चिम दिशा की ओर", "आग्नेय कोण (South-East) में"], 
    correctAnswerIndex: 0,
    explanation: "औषधियों की शुद्धता और ऊर्जा बनाए रखने के लिए भेषजागार (Pharmacy) का दरवाजा पूर्व (East) या उत्तर (North) दिशा में होना चाहिए।",
    reference: "चरक कल्पस्थान 1/11",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "GFCP में 'ट्रेसेबिलिटी' (Traceability) से क्या तात्पर्य है?", 
    options: ["औषधि की गंध का पता लगाना", "औषधि के जंगल से लेकर उपभोक्ता तक पहुँचने के हर कदम का रिकॉर्ड रखना", "खोए हुए पौधों को ढूँढना", "जीपीएस (GPS) से पेड़ लगाना"], 
    correctAnswerIndex: 1,
    explanation: "ट्रेसेबिलिटी का अर्थ है कि यदि बाजार में कोई दवा खराब निकलती है, तो दस्तावेजों (Records) के जरिए यह पता लगाया जा सके कि वह किस खेत या जंगल से कब लाई गई थी।",
    reference: "GFCP Guidelines",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "आचार्य चरक के अनुसार पादप के 'सार' (Heartwood) भाग का संग्रहण मुख्य रूप से किस ऋतु में करना चाहिए?", 
    options: ["हेमंत ऋतु", "वसंत ऋतु", "ग्रीष्म ऋतु", "वर्षा ऋतु"], 
    correctAnswerIndex: 0,
    explanation: "\"हेमन्ते साराणि\" - चरक के अनुसार हेमंत ऋतु में वृक्ष का सार भाग (Heartwood) सर्वाधिक बलवान होता है, इसलिए तभी उसका संग्रहण करना चाहिए।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "औषध संग्रहण के पश्चात् अनुचित भंडारण (Storage) और अतिरिक्त नमी (Moisture) के कारण उत्पन्न होने वाले 'आफ्लाटॉक्सिन' (Aflatoxins) का मुख्य स्रोत क्या है?", 
    options: ["जीवाणु (Bacteria)", "कवक / फफूंद (Aspergillus fungi)", "विषाणु (Viruses)", "भारी धातुएं (Heavy metals)"], 
    correctAnswerIndex: 1,
    explanation: "आफ्लाटॉक्सिन एक खतरनाक विष है जो नमी वाली जगहों पर रखी औषधियों में एस्परजिलस (Aspergillus) नामक फफूंद (Fungus) के पनपने से पैदा होता है।",
    reference: "GFCP Guidelines (Storage & Contamination)",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "सुश्रुत संहिता के अनुसार, 'सौम्य' (शीत वीर्य) औषधियों का संग्रहण किस पर्वतीय क्षेत्र से करना उत्तम माना गया है?", 
    options: ["विंध्य पर्वत", "हिमालय पर्वत", "अरावली पर्वत", "नीलगिरि पर्वत"], 
    correctAnswerIndex: 1,
    explanation: "सुश्रुत के अनुसार 'हिमालय' पर्वत सौम्य गुणों से युक्त है, अतः वहां की औषधियां सौम्य होती हैं। जबकि 'विंध्य' पर्वत से आग्नेय औषधियां लेनी चाहिए।",
    reference: "सुश्रुत सूत्रस्थान 36",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "आचार्य चरक के अनुसार, औषधीय पादपों की 'मूल' (Roots) का संग्रहण मुख्य रूप से किस ऋतु में करना निर्दिष्ट है?", 
    options: ["ग्रीष्म या शिशिर ऋतु", "वर्षा या वसंत ऋतु", "केवल शरद ऋतु", "हेमंत ऋतु"], 
    correctAnswerIndex: 0,
    explanation: "\"ग्रीष्मे शिशिरे वा मूलानि\" अर्थात् चरक के अनुसार जड़ों का संग्रहण ग्रीष्म या शिशिर ऋतु में करना चाहिए, जब पत्ते झड़ चुके हों।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "औषधीय पौधों को गोदाम (Warehouse) में रखते समय, उन्हें सीधे जमीन के संपर्क और नमी से बचाने के लिए किस पर रखा जाना चाहिए?", 
    options: ["सीधे कंक्रीट के फर्श पर", "लकड़ी के पैलेट्स (Wooden pallets) पर", "मिट्टी के फर्श पर", "खुले मैदान में"], 
    correctAnswerIndex: 1,
    explanation: "GFCP नियमों के अनुसार, कच्ची औषधियों की बोरियों को जमीन की नमी से बचाने के लिए फर्श से थोड़ा ऊपर लकड़ी या प्लास्टिक के पैलेट्स पर रखना अनिवार्य है।",
    reference: "GFCP Guidelines (Storage)",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "GFCP के अनुसार, बहुवर्षीय (Perennial) पादपों की जड़ों का संग्रहण करते समय प्रजाति को नष्ट होने से बचाने के लिए क्या करना चाहिए?", 
    options: ["पूरी 'टैप रूट' (Tap root) को उखाड़ लेना चाहिए", "केवल कुछ पार्श्व जड़ों (Lateral roots) को काटना चाहिए और मुख्य जड़ छोड़ देनी चाहिए", "जड़ों को जला देना चाहिए", "पौधे को जड़ समेत उखाड़ कर फेंक देना चाहिए"], 
    correctAnswerIndex: 1,
    explanation: "सस्टेनेबल हार्वेस्टिंग (Sustainable harvesting) के तहत मुख्य जड़ (Tap root) को सुरक्षित छोड़कर केवल कुछ साइड की जड़ें (Lateral roots) निकालनी चाहिए ताकि पौधा जीवित रहे।",
    reference: "GFCP Guidelines (Root Collection)",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "आचार्य सुश्रुत के अनुसार, विरेचन (Purgative) कर्म करने वाली औषधियों का संग्रहण किस महाभूत प्रधान भूमि से करना श्रेष्ठ है?", 
    options: ["आकाश और वायु प्रधान भूमि से", "अग्नि और आकाश प्रधान भूमि से", "पृथ्वी और जल महाभूत प्रधान भूमि से", "वायु और तेज प्रधान भूमि से"], 
    correctAnswerIndex: 2,
    explanation: "विरेचन द्रव्य स्वभाव से भारी होते हैं और नीचे की ओर गति करते हैं (अधोभागहर)। अतः उनका संग्रहण पृथ्वी और जल महाभूत प्रधान भूमि से करना चाहिए।",
    reference: "सुश्रुत सूत्रस्थान 36",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  },
  { 
    questionText: "GFCP के नियमों के अनुसार, पादपों के 'बीज' (Seeds) का संग्रहण किस अवस्था में करना चाहिए?", 
    options: ["जब वे कच्चे और हरे हों", "जब फूल अभी खिले हों", "जब फल और बीज पूर्णतः पक गए हों (Fully matured)", "जब बीज सड़ने लगें"], 
    correctAnswerIndex: 2,
    explanation: "बीजों में सम्पूर्ण सक्रिय तत्व और अगली पीढ़ी को जन्म देने की क्षमता तभी आती है जब वे पूरी तरह परिपक्व (Fully matured) हो जाते हैं।",
    reference: "GFCP Guidelines",
    ncismRef: "Syllabus Point 15: Drug collection methods as per GFCP"
  },
  { 
    questionText: "जो द्रव्य जिस ऋतु में उत्पन्न होते हैं (यथायर्तु), उन द्रव्यों के 'पुष्प और फल' (Flowers and Fruits) का संग्रहण चरक के अनुसार कब करना चाहिए?", 
    options: ["वसंत ऋतु में", "वर्षा ऋतु में", "जब वे अपनी ऋतु के अनुसार पूर्ण विकसित हो जाएं", "जब वे सूख कर गिर जाएं"], 
    correctAnswerIndex: 2,
    explanation: "\"यथायर्तु पुष्पफलम्\" - इसका अर्थ है कि जिस फूल या फल के खिलने/पकने की जो भी ऋतु हो, उसी ऋतु में उसका संग्रहण करना चाहिए।",
    reference: "चरक कल्पस्थान 1/10",
    ncismRef: "Syllabus Point 15: Dravyasangrahana"
  }
];

export default function DravyagunaPaper1Ch15() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_CH15.length) {
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
    DRAVYAGUNA_PAPER_1_CH15.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_CH15[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_CH15.length}
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
                <Beaker className="w-4 h-4" /> Ch-15 Drug Collection
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_CH15.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_CH15.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
            }
