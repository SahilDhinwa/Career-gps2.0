"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_CH14 = [
  { 
    questionText: "आचार्य चरक द्वारा विमान स्थान (अध्याय 8) में वर्णित 'भेषज परीक्षा' (Drug Examination) के अंतर्गत, \"इदम् एवं प्रकृत्यम्\" से वैद्य को औषधि के किस पहलू का ज्ञान होना अपेक्षित है?", 
    options: ["औषधि का वानस्पतिक स्वरूप (Botanical Identity) और स्वभाव", "औषधि की वीर्य शक्ति", "औषधि का मूल्य (Price)", "औषधि को सुरक्षित रखने का स्थान"], 
    correctAnswerIndex: 0,
    explanation: "\"इदम् एवं प्रकृत्यम्\" का अर्थ है कि यह द्रव्य स्वभाव से कैसा है और इसका प्राकृतिक (वानस्पतिक) स्वरूप क्या है।",
    reference: "चरक विमानस्थान 8/87",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "भेषज मूल्यांकन (Drug Evaluation) में प्रयुक्त 'मेयर्स अभिकर्मक' (Mayer's reagent) और 'ड्रैगेंडॉर्फ अभिकर्मक' (Dragendorff's reagent) का उपयोग मुख्य रूप से किस सक्रिय रासायनिक घटक (Active principle) की पहचान के लिए किया जाता है?", 
    options: ["टैनिन (Tannins)", "क्षाराभ (Alkaloids)", "वाष्पशील तैल (Volatile oils)", "रेजिन (Resins)"], 
    correctAnswerIndex: 1,
    explanation: "आधुनिक भेषज मूल्यांकन (Phytochemical screening) में एल्कलॉइड्स की उपस्थिति की पुष्टि के लिए इन विशिष्ट अभिकर्मकों का प्रयोग होता है।",
    reference: "Modern Pharmacognosy",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "प्रशस्त भेषज के सन्दर्भ में, यदि कोई औषधि 'अकृमिजग्धम्, अस्त्रोपहतम्, अव्यापन्नम्' (कृमियों द्वारा न खाई गई हो, शस्त्र से नष्ट न हुई हो और सड़ी-गली न हो) है, तो यह उसके किस गुण को सर्वाधिक पुष्ट करता है?", 
    options: ["बहुकल्पं", "बहुगुणं", "सम्पन्नं (Sampannam)", "अल्पवीर्यम्"], 
    correctAnswerIndex: 2,
    explanation: "'सम्पन्नं' का तात्पर्य है कि औषधि अपने उत्कृष्ट स्वरूप में हो, दोषरहित हो (कीड़ों या मौसम की मार से बची हो) और पूर्ण वीर्यवान हो।",
    reference: "चरक सूत्रस्थान 9/7",
    ncismRef: "Syllabus Point 14: Prashasta Bheshaja"
  },
  { 
    questionText: "कच्चे औषध द्रव्यों (Crude drugs) में 'एसिड-इनसल्यूबल ऐश' (Acid-insoluble ash value) का परीक्षण मुख्य रूप से किसकी मिलावट (Adulteration) का पता लगाने के लिए किया जाता है?", 
    options: ["पानी (Moisture)", "सिलिका, बालू या मिट्टी (Silica/Earthy matter)", "कृत्रिम रंग (Artificial colours)", "शर्करा (Sugars)"], 
    correctAnswerIndex: 1,
    explanation: "जो भस्म (राख) हाइड्रोक्लोरिक एसिड (HCl) में नहीं घुलती, वह मुख्य रूप से औषधि में मौजूद सिलिका (मिट्टी/रेत) की अशुद्धि को दर्शाती है।",
    reference: "Pharmacognosy (Physico-chemical evaluation)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "किसी पादप पत्र (Leaf) के फार्माकोग्नोस्टिकल मूल्यांकन में 'स्टोमेटल इंडेक्स' (Stomatal index) और 'वेन-आइलेट नंबर' (Vein-islet number) ज्ञात करना किस प्रकार के मूल्यांकन (Evaluation) के अंतर्गत आता है?", 
    options: ["भौतिक (Physical)", "सूक्ष्मदर्शीय (Microscopic / Anatomical)", "ऑर्गनोलिप्टिक (Organoleptic)", "जैविक (Biological)"], 
    correctAnswerIndex: 1,
    explanation: "पत्तों की सतह पर मौजूद छिद्रों (Stomata) और शिराओं (Veins) की संरचना का संख्यात्मक अध्ययन माइक्रोस्कोप के नीचे ही किया जाता है।",
    reference: "Pharmacognosy",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "भेषज परीक्षा के अंतर्गत आचार्य चरक द्वारा वर्णित \"यया च मात्रया युक्तम्\" का मुख्य उद्देश्य रोगी के लिए क्या निर्धारित करना है?", 
    options: ["औषधि के संग्रहण का समय", "औषधि का अनुपान", "औषधि की उचित और सुरक्षित खुराक (Posology / Dose)", "औषधि का निर्माण"], 
    correctAnswerIndex: 2,
    explanation: "भेषज परीक्षा का यह सूत्र बताता है कि किस रोग में, किस बल वाले रोगी को कितनी 'मात्रा' (Dose) में दवा देनी चाहिए।",
    reference: "चरक विमानस्थान 8/87",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "भेषज मूल्यांकन में किसी मूल या छाल (Root or Bark) के टूटने की प्रकृति (Fracture - जैसे fibrous, granular, splintery) का अध्ययन किस परीक्षण में किया जाता है?", 
    options: ["मैक्रोस्कोपिक / ऑर्गनोलिप्टिक (Macroscopic evaluation)", "रासायनिक (Chemical evaluation)", "जैविक (Biological evaluation)", "क्रोमैटोग्राफी (Chromatography)"], 
    correctAnswerIndex: 0,
    explanation: "औषध की बाहरी आकृति, रंग, गंध और टूटने का तरीका (Fracture) बिना माइक्रोस्कोप के (मैक्रोस्कोपिक) आँखों से देखा जाता है।",
    reference: "Pharmacognosy",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "'फार्माकोग्नोसी' (Pharmacognosy) शब्द की उत्पत्ति ग्रीक भाषा के दो शब्दों 'Pharmakon' और 'Gignosco' से हुई है। इसमें 'Gignosco' का क्या अर्थ है?", 
    options: ["जड़ी-बूटी (Herb)", "रोग (Disease)", "ज्ञान प्राप्त करना (To acquire knowledge of)", "सत्व निकालना (To extract)"], 
    correctAnswerIndex: 2,
    explanation: "'फार्माकॉन' (Pharmakon) का अर्थ है औषध (Drug) और 'गिग्नोस्को' (Gignosco) का अर्थ है उसका ज्ञान प्राप्त करना।",
    reference: "History of Pharmacognosy",
    ncismRef: "Syllabus Point 14: Correlation as per Pharmacognosy"
  },
  { 
    questionText: "ईसबगोल (Plantago ovata) जैसी औषधियों, जिनमें श्लेष्म (Mucilage) की अधिकता होती है, की गुणवत्ता परखने के लिए फार्माकोग्नॉसी में कौन सा विशिष्ट भौतिक परीक्षण (Physical test) किया जाता है?", 
    options: ["ऐश वैल्यू (Ash value)", "स्वेलिंग इंडेक्स (Swelling Index)", "रिफ्रेक्टिव इंडेक्स (Refractive Index)", "बिटरनेस वैल्यू (Bitterness Value)"], 
    correctAnswerIndex: 1,
    explanation: "पानी में डालने पर श्लेष्म (Mucilage) युक्त औषधियां कितनी फूलती हैं, इसे मापने के लिए स्वेलिंग इंडेक्स परीक्षण (Physical evaluation) किया जाता है।",
    reference: "Pharmacognosy (Physical Evaluation)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "\"तस्मिन् व्याधौ एवम् विधम् उपशयं करोति\" - आचार्य चरक द्वारा वर्णित भेषज परीक्षा का यह अंतिम बिंदु आधुनिक भेषज विज्ञान के किस पहलू को स्पष्ट रूप से दर्शाता है?", 
    options: ["फार्माकोकाइनेटिक्स (Pharmacokinetics)", "नैदानिक या चिकित्सीय प्रभावकारिता (Therapeutic Efficacy / Clinical outcome)", "टॉक्सिकोलॉजी (Toxicology)", "बॉटनिकल आइडेंटिफिकेशन (Botanical identification)"], 
    correctAnswerIndex: 1,
    explanation: "\"उपशयं करोति\" का अर्थ है कि वह औषधि उस विशिष्ट रोग में कितनी शांति (Relief / Therapeutic effect) प्रदान करती है।",
    reference: "चरक विमानस्थान 8/87",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "कच्चे औषधीय पादपों (Crude drugs) में नमी (Moisture content) की मात्रा मानक सीमा (Standard Limit) से अधिक होने पर मुख्य रूप से क्या नुकसान होने की सम्भावना रहती है?", 
    options: ["औषधि का वजन कम हो जाना", "कवक (Fungal / Microbial) संक्रमण और सक्रिय तत्वों का एंजाइमेटिक क्षरण (Degradation)", "औषधि का रंग बहुत गहरा हो जाना", "औषधि का अधिक वातशामक हो जाना"], 
    correctAnswerIndex: 1,
    explanation: "अतिरिक्त नमी से सूक्ष्मजीवों (Bacteria/Fungi) की वृद्धि होती है जिससे औषधि सड़ जाती है और उसके रासायनिक तत्व (Active principles) नष्ट हो जाते हैं।",
    reference: "Pharmacognosy (Drying & Storage)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "क्रोमैटोग्राफी (Thin Layer Chromatography - TLC) परीक्षण में किसी औषधीय यौगिक की पहचान के लिए प्रयुक्त होने वाले 'Rf मान' (Rf Value) का पूर्ण रूप क्या है?", 
    options: ["रिफ्लेक्टिव फैक्टर (Reflective Factor)", "रिटार्डेशन फैक्टर / रिटेंशन फैक्टर (Retardation Factor)", "रिफ्रेक्टिव फैक्टर (Refractive Factor)", "रेडियोएक्टिव फैक्टर (Radioactive Factor)"], 
    correctAnswerIndex: 1,
    explanation: "TLC प्लेट पर विलायक (Solvent) और औषधीय घटक द्वारा तय की गई दूरी के अनुपात को Rf Value कहते हैं।",
    reference: "Pharmacognosy (Chromatography)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "'लायकोपोडियम स्पोर विधि' (Lycopodium spore method) का उपयोग भेषज विज्ञान (Pharmacognosy) में किस विशिष्ट उद्देश्य के लिए किया जाता है?", 
    options: ["मात्रात्मक सूक्ष्मदर्शीय मूल्यांकन (Quantitative Microscopy)", "औषध का क्वथनांक (Boiling point) नापना", "जैविक टॉक्सिसिटी जाँचना", "उड़ने वाले तेल (Volatile oil) की मात्रा निकालना"], 
    correctAnswerIndex: 0,
    explanation: "लायकोपोडियम बीजाणुओं (Spores) का आकार एक समान होता है, इसलिए माइक्रोस्कोप के नीचे चूर्ण औषधियों में मिलावट का सटीक प्रतिशत (Quantitative analysis) निकालने के लिए इसका उपयोग होता है।",
    reference: "Pharmacognosy (Microscopic Evaluation)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "भेषज परीक्षा (Charaka Vimana 8) के अंतर्गत \"एवं गुणम्, एवं प्रभावम्\" से वैद्य को औषधि के किन पक्षों का पूर्ण ज्ञान होना अनिवार्य बताया गया है?", 
    options: ["औषधि का मूल्य और उत्पत्ति स्थान", "औषधि का रस-पञ्चक (गुण) और उसका विशिष्ट अचिन्त्य कर्म (प्रभाव)", "औषधि का रासायनिक सूत्र और आयु", "औषधि के शोधन और मारण की विधि"], 
    correctAnswerIndex: 1,
    explanation: "चरक के अनुसार वैद्य को भली-भांति पता होना चाहिए कि अमुक औषधि के क्या गुण-कर्म हैं और वह शरीर पर क्या प्रभाव डालती है।",
    reference: "चरक विमानस्थान 8/87",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "वाष्पशील तैल (Volatile Oils) और रेजिन (Resins) युक्त औषधियों की गुणवत्ता जाँचने के लिए निम्नलिखित में से कौन सा एक्सट्रेक्टिव वैल्यू (Extractive value) परीक्षण सबसे उपयुक्त माना जाता है?", 
    options: ["वाटर-सॉल्यूबल एक्सट्रेक्टिव वैल्यू (Water-soluble)", "अल्कोहल-सॉल्यूबल एक्सट्रेक्टिव वैल्यू (Alcohol-soluble)", "ईथर-सॉल्यूबल एक्सट्रेक्टिव वैल्यू (Ether-soluble)", "एसिड-सॉल्यूबल एक्सट्रेक्टिव वैल्यू (Acid-soluble)"], 
    correctAnswerIndex: 2,
    explanation: "वाष्पशील तेल और रेजिन मुख्य रूप से ईथर (Ether) या पेट्रोलियम ईथर में घुलनशील होते हैं, इसलिए इस विलायक का उपयोग किया जाता है।",
    reference: "Pharmacognosy (Physico-chemical evaluation)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "क्रूड ड्रग्स (Crude drugs) या उनके पाउडर को पराबैंगनी प्रकाश (Ultraviolet / UV light) के नीचे रखकर उसमें उत्पन्न होने वाले विशिष्ट रंगों का अवलोकन करना भेषज मूल्यांकन में क्या कहलाता है?", 
    options: ["क्रोमैटोग्राफी", "प्रतिदीप्ति विश्लेषण (Fluorescence Analysis)", "स्पेक्ट्रोस्कोपी", "टाइट्रेशन (Titration)"], 
    correctAnswerIndex: 1,
    explanation: "कई रासायनिक घटक दिन के प्रकाश में नहीं दिखते, किन्तु UV Light में वे विशिष्ट रंग (Fluorescence) छोड़ते हैं, जिससे मिलावट (Adulteration) पकड़ी जाती है।",
    reference: "Pharmacognosy (Physical Evaluation)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "प्रयोगशाला में पशुओं (जैसे- चूहों, खरगोशों) का उपयोग करके किसी औषधि की प्राणघातक मात्रा (LD50 - Lethal Dose) या प्रभावी मात्रा (ED50) का निर्धारण करना, भेषज मूल्यांकन (Drug evaluation) की किस श्रेणी में आता है?", 
    options: ["भौतिक मूल्यांकन (Physical Evaluation)", "सूक्ष्मदर्शीय मूल्यांकन (Microscopic Evaluation)", "रासायनिक मूल्यांकन (Chemical Evaluation)", "जैविक मूल्यांकन (Biological Evaluation)"], 
    correctAnswerIndex: 3,
    explanation: "जब रसायनों से औषधि की विषाक्तता या प्रभावकारिता जाँचना संभव न हो, तब जीवित प्राणियों (Animals/Microbes) पर परीक्षण किया जाता है, जो Biological Evaluation है।",
    reference: "Pharmacognosy (Biological Evaluation)",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "भेषज परीक्षा के सूत्र \"अनेन विधानेन निहितम्\" में 'निहितम्' का सम्बन्ध औषधि के किस फार्माकोग्नोस्टिकल पहलू (Pharmacognostical aspect) से है?", 
    options: ["औषधि को उचित पात्र और भेषजागार में सुरक्षित रखना (Proper Storage)", "औषधि को सुखाना (Drying)", "औषधि को पीसना (Grinding)", "औषधि को खेत से उखाड़ना (Harvesting)"], 
    correctAnswerIndex: 0,
    explanation: "\"निहितम्\" का अर्थ है कि दवा को नमी, कीड़ों और धूप से बचाकर शास्त्रीय विधि (अनेन विधानेन) से भंडारित किया गया हो।",
    reference: "चरक विमानस्थान 8/87",
    ncismRef: "Syllabus Point 14: Bheshaja Pariksha"
  },
  { 
    questionText: "किसी घृत, वसा, तैल या मोम (Fats, Oils, Waxes) युक्त भेषज के मानकीकरण (Standardization) के लिए उसका 'मेल्टिंग पॉइंट' (गलनांक) और 'सैपोनिफिकेशन वैल्यू' (Saponification value) जाँचना किस श्रेणी में आता है?", 
    options: ["जैविक मूल्यांकन", "भौतिक-रासायनिक मूल्यांकन (Physico-chemical evaluation)", "माइक्रोस्कोपिक मूल्यांकन", "मैक्रोस्कोपिक मूल्यांकन"], 
    correctAnswerIndex: 1,
    explanation: "मेल्टिंग पॉइंट (गलनांक) एक भौतिक पैरामीटर है, जबकि आयोडीन वैल्यू या सैपोनिफिकेशन वैल्यू रासायनिक पैरामीटर हैं। इन्हें संयुक्त रूप से Physico-chemical evaluation कहा जाता है।",
    reference: "Pharmacognosy",
    ncismRef: "Syllabus Point 14: Drug evaluation method"
  },
  { 
    questionText: "'प्रशस्त भेषज' की वह कौन सी विशेषता है जो यह सुनिश्चित करती है कि वैद्य द्वारा चुनी गई औषधि रोगी के शरीर (प्रकृति), रोग की अवस्था (अवस्था) और देश-काल के एकदम सटीक और सात्म्य (Suitable) हो?", 
    options: ["बहुकल्पं", "बहुगुणं", "सम्पन्नं", "योग्यमौषधम्"], 
    correctAnswerIndex: 3,
    explanation: "'योग्य' होने का अर्थ है कि औषधि रोग की गंभीरता, रोगी के दोष (वात-पित्त-कफ) और अवस्था के एकदम अनुरूप (Appropriate) हो, ताकि वह बिना दुष्प्रभाव के लाभ पहुंचाए।",
    reference: "चरक सूत्रस्थान 9/7",
    ncismRef: "Syllabus Point 14: Prashasta Bheshaja"
  }
];

export default function DravyagunaPaper1Ch14() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_CH14.length) {
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
    DRAVYAGUNA_PAPER_1_CH14.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_CH14[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_CH14.length}
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
                <Beaker className="w-4 h-4" /> Ch-14 Bheshaja Pariksha
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_CH14.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_CH14.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

