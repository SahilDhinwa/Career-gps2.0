"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen, ClipboardList } from "lucide-react";

const BATCH_22_AGADA_QUESTIONS = [
  {
    questionText: "सवातं ग्रहधूमाभं पुरीषं... लक्षण किस स्थिति में पाया जाता है?",
    options: ["विष उपद्रव (Poison complication)", "विष मुक्त (Vish Mukta)", "विष पीत (Vish Peeta)", "विष संकट (Vish Sankat)"],
    correctAnswerIndex: 2,
    explanation: "आयुर्वेदिक ग्रंथों (सुश्रुत संहिता) के अनुसार, वात के साथ धुएं के रंग जैसा मल त्याग करना ('सवातं ग्रहधूमाभं पुरीषं') उस व्यक्ति का एक प्रमुख नैदानिक लक्षण है जिसने विष का सेवन किया हो।",
    reference: "सुश्रुत संहिता",
    ncismRef: "Agada Tantra Syllabus: Visha Peeta Lakshana"
  },
  {
    questionText: "आचार्य चरक ने संज्ञास्थापन उपक्रम का निर्देश किस वेग में किया है?",
    options: ["चतुर्थ वेग (Fourth Vega)", "पंचम वेग (Fifth Vega)", "सप्तम वेग (Seventh Vega)", "षष्ठम वेग (Sixth Vega)"],
    correctAnswerIndex: 3,
    explanation: "आयुर्वेदिक टॉक्सिकोलॉजी में, आचार्य चरक ने विष के आठ वेग (Stages) बताए हैं। 'संज्ञास्थापन' (चेतना वापस लाने की प्रक्रिया) का निर्देश विशेष रूप से विष के छठे वेग (षष्ठम वेग) में किया गया है।",
    reference: "चरक संहिता चिकित्सा स्थान 23",
    ncismRef: "Agada Tantra Syllabus: Visha Vega Chikitsa"
  },
  {
    questionText: "Reinsch test किस विषाक्तता में किया जाता है?",
    options: ["आर्सेनिक (Arsenic)", "मशरूम (Mushroom)", "एसिड (Acid)", "एल्केलाईड्स (Alkaloids)"],
    correctAnswerIndex: 0,
    explanation: "Reinsch test फॉरेंसिक टॉक्सिकोलॉजी में एक प्रारंभिक स्क्रीनिंग परीक्षण है जिसका उपयोग जैविक नमूनों में आर्सेनिक (Arsenic), एंटीमनी, बिस्मथ और पारा जैसी भारी धातुओं की उपस्थिति का पता लगाने के लिए किया जाता है।",
    reference: "Forensic Toxicology Standards",
    ncismRef: "Agada Tantra Syllabus: Analytical Toxicology"
  },
  {
    questionText: "'विलून पक्षः स यथा विहंगः.......' लक्षण किस विषाक्तता में पाया जाता है?",
    options: ["दूषी विष (Dooshi visha)", "गर विष (Gara visha)", "विरूद्ध आहार (Virooddha aahaara)", "कोई नहीं (None of these)"],
    correctAnswerIndex: 0,
    explanation: "अष्टांग हृदय के इस श्लोक का अर्थ है 'कटे हुए पंखों वाले पक्षी के समान'। यह वाक्य दूषी विष (Dushi Visha) से पीड़ित रोगी की कमजोर, सुस्त और असहाय स्थिति का वर्णन करता है।",
    reference: "अष्टांग हृदय",
    ncismRef: "Agada Tantra Syllabus: Dooshi Visha"
  },
  {
    questionText: "निम्न में से एण्डोक्राईन विघटन (Endocrine disruptors) कारकों के सम्बन्ध में सबसे उपयुक्त कथन है:",
    options: [
      "ऐसे रसायन जो किसी अवयव की वृद्धि एवं विकास में बाधा उत्पन्न करते है। (Disrupts growth & development)",
      "ऐसे रसायन जो किसी अवयव के पाचन में बाधा उत्पन्न करते है। (Disrupts digestion)",
      "ऐसे रसायन जो किसी अवयव की अस्थि संरचना में बाधा उत्पन्न करते हैं। (Disrupts bone structure)",
      "ऐसे रसायन जो किसी अवयव के Blood flow में बाधा उत्पन्न करते हैं। (Disrupts Blood-Flow)"
    ],
    correctAnswerIndex: 0,
    explanation: "एंडोक्राइन विघटन कारक (Endocrine disruptors) वे रसायन हैं जो शरीर की हार्मोनल (Endocrine) प्रणाली में हस्तक्षेप करते हैं, जिससे शरीर की वृद्धि एवं विकास (Growth & development), प्रजनन और प्रतिरक्षा प्रणाली पर प्रतिकूल प्रभाव पड़ता है।",
    reference: "Modern Toxicology",
    ncismRef: "Agada Tantra Syllabus: Endocrine Disruptors"
  },
  {
    questionText: "पिंक डिसीज (Pink disease) किस प्रकार की जीर्ण विषाक्तता में पाई जाती है?",
    options: ["नाग विषाक्तता (Lead poisoning)", "पारद विषाक्तता (Mercury poisoning)", "आर्सेनिक विषाक्तता (Arsenic poisoning)", "जिंक विषाक्तता (Zinc poisoning)"],
    correctAnswerIndex: 1,
    explanation: "पिंक डिसीज (Acrodynia) ऐतिहासिक रूप से पारे (Mercury) के क्रोनिक संपर्क से जुड़ी है। इसमें गंभीर दर्द होता है और हाथों व पैरों की त्वचा गुलाबी होकर छिलने (Peeling) लगती है।",
    reference: "Forensic Medicine (Heavy Metal Poisoning)",
    ncismRef: "Agada Tantra Syllabus: Mercury Poisoning"
  },
  {
    questionText: "निम्न में से विषघ्न महाकषाय का घटक नहीं है:",
    options: ["हरिद्रा (Haridra)", "मंजिष्ठा (Manjishtha)", "चन्दन (Chandan)", "गिलोय (Giloy)"],
    correctAnswerIndex: 3,
    explanation: "चरक संहिता के अनुसार, विषघ्न महाकषाय की 10 जड़ी-बूटियाँ हैं: हरिद्रा, मंजिष्ठा, सुवहा, सूक्ष्म एला, पालिंदी, चन्दन, कतक, शिरीष, सिंधुवार और श्लेष्मातक। गिलोय (Giloy) इस विशिष्ट महाकषाय का हिस्सा नहीं है।",
    reference: "चरक सूत्रस्थान 4",
    ncismRef: "Agada Tantra Syllabus: Vishaghna Dashemani"
  },
  {
    questionText: "विल्सन डिसीज (Wilson's disease) किस प्रकार की विषाक्तता में मिलती है?",
    options: ["ताम्र (Copper)", "जिंक (Zinc)", "आर्सेनिक (Arsenic)", "फोस्फोरस (Phosphorus)"],
    correctAnswerIndex: 0,
    explanation: "विल्सन डिसीज एक दुर्लभ आनुवंशिक विकार (Genetic disorder) है जिसमें शरीर अतिरिक्त तांबे (Copper) को बाहर नहीं निकाल पाता, जिससे यह यकृत, मस्तिष्क और आंखों में विषैले स्तर तक जमा हो जाता है।",
    reference: "Pathology & Toxicology Standard",
    ncismRef: "Agada Tantra Syllabus: Copper Poisoning"
  },
  {
    questionText: "किस प्रकार के सर्प दंश में रक्त का स्कन्दन (Coagulation) नहीं हो पाता है?",
    options: ["वाइपर सर्प दंश (Viper snake bite)", "समुद्री सर्प दंश (Sea snake bite)", "कोबरा सर्प दंश (Cobra snake bite)", "सभी (All of above)"],
    correctAnswerIndex: 0,
    explanation: "वाइपर (Viper) का विष मुख्य रूप से हेमोटॉक्सिक (Hemotoxic/Vasculotoxic) होता है। यह थक्के जमाने वाले कारकों को नष्ट कर देता है, जिससे रक्त का थक्का नहीं बन पाता और गंभीर आंतरिक रक्तस्राव होता है।",
    reference: "Forensic Medicine (Ophitoxaemia)",
    ncismRef: "Agada Tantra Syllabus: Jangama Visha (Viper Bite)"
  },
  {
    questionText: "किस प्रकार की जीर्ण विषाक्तता में 'Phossy Jaw' बीमारी देखने को मिलती है?",
    options: ["जिंक (Zinc)", "पारद (Mercury)", "फोस्फोरस (Phosphorus)", "ताम्र (Copper)"],
    correctAnswerIndex: 2,
    explanation: "'फोसी जॉ' (Phossy jaw) जबड़े का एक व्यावसायिक रोग (Osteonecrosis) है। यह ऐतिहासिक रूप से माचिस उद्योग के श्रमिकों में सफेद फास्फोरस (White phosphorus) के धुएं के लगातार सांस में जाने के कारण पाया जाता था।",
    reference: "Occupational Toxicology",
    ncismRef: "Agada Tantra Syllabus: Phosphorus Poisoning"
  },
  {
    questionText: "मद्यपान मे 'Stage of in-coordination' की स्थिति उत्पन्न होने के लिये रक्त में एल्कोहल की मात्रा आवश्यक होती है:",
    options: ["> 250 mg %", "150-250 mg %", "50 -150 mg %", "25-50 mg %"],
    correctAnswerIndex: 1,
    explanation: "फॉरेंसिक मेडिसिन में, शराब के नशे की 'असमन्वय की अवस्था' (Stage of incoordination), जिसमें लड़खड़ाती चाल और अस्पष्ट भाषण शामिल है, तब होती है जब रक्त में अल्कोहल की मात्रा (BAC) 150 से 250 mg/dL के बीच होती है।",
    reference: "Forensic Medicine (Alcohol Poisoning)",
    ncismRef: "Agada Tantra Syllabus: Madatyaya / Alcoholism"
  },
  {
    questionText: "चिकित्सक द्वारा झूठा चिकित्सा प्रमाण पत्र जारी करने पर भा.द.सं. (IPC) की किस धारा में दण्ड का प्रावधान किया गया है?",
    options: ["Sec. 197 IPC", "Sec. 87 IPC", "Sec. 304 A IPC", "Sec. 338 IPC"],
    correctAnswerIndex: 0,
    explanation: "भारतीय दंड संहिता (IPC) की धारा 197 झूठे प्रमाण पत्र (False certificate) जारी करने या हस्ताक्षर करने से संबंधित है। जानबूझकर झूठा मेडिकल सर्टिफिकेट देने वाले डॉक्टर पर इसी धारा के तहत मुकदमा चलाया जा सकता है।",
    reference: "Indian Penal Code",
    ncismRef: "Agada Tantra Syllabus: Medical Ethics (False Certificate)"
  },
  {
    questionText: "पुलिस जांच (Police Inquest) CrPC की किस धारा के अन्तर्गत की जाती है?",
    options: ["174 CrPC", "176 CrPC", "178 CrPC", "172 CrPC"],
    correctAnswerIndex: 0,
    explanation: "आपराधिक प्रक्रिया संहिता (CrPC) की धारा 174 पुलिस को आत्महत्या, हत्या या संदिग्ध मौतों के मामलों में जांच (Police inquest) करने का अधिकार देती है।",
    reference: "Criminal Procedure Code",
    ncismRef: "Agada Tantra Syllabus: Legal Procedures (Inquest)"
  },
  {
    questionText: "गम्भीर क्षत (Grievous hurt) को भा.द.सं. (IPC) की किस धारा के अन्तर्गत परिभाषित किया गया है?",
    options: ["Sec. 320 IPC", "Sec. 44 IPC", "Sec. 319 IPC", "Sec. 323 IPC"],
    correctAnswerIndex: 0,
    explanation: "भारतीय दंड संहिता (IPC) की धारा 320 'गंभीर क्षत' (Grievous Hurt) को स्पष्ट रूप से परिभाषित करती है। इसमें 8 प्रकार की विशिष्ट चोटों (जैसे फ्रैक्चर, अंग का नुकसान आदि) को शामिल किया गया है।",
    reference: "Indian Penal Code",
    ncismRef: "Agada Tantra Syllabus: Traumatology (Hurt)"
  },
  {
    questionText: "बलात्कार (Rape) को भा.द.सं. (IPC) की किस धारा के अन्तर्गत परिभाषित किया गया है?",
    options: ["Sec. 320 IPC", "Sec. 375 IPC", "Sec. 351 IPC", "Sec. 376 IPC"],
    correctAnswerIndex: 1,
    explanation: "भारतीय दंड संहिता (IPC) की धारा 375 बलात्कार (Rape) के अपराध का गठन करने वाले कानूनी मापदंडों और सहमति के अभाव को परिभाषित करती है। (जबकि धारा 376 में इसके लिए दंड का प्रावधान है)।",
    reference: "Indian Penal Code",
    ncismRef: "Agada Tantra Syllabus: Sexual Offences"
  },
  {
    questionText: "भारतीय लोगों का शिरःसूचकांक (Cephalic index) सामान्यतया होता है:",
    options: ["70-75", "75-80", "80-85", "85-90"],
    correctAnswerIndex: 0,
    explanation: "क्लासिक भारतीय फॉरेंसिक एंथ्रोपोलॉजी के अनुसार, भारतीय आबादी का मानक शिरःसूचकांक (Cephalic index) आमतौर पर डोलिकोसेफेलिक (Dolichocephalic - लंबा सिर) श्रेणी में आता है, जो 70 से 75 के बीच होता है।",
    reference: "Forensic Anthropology",
    ncismRef: "Agada Tantra Syllabus: Identification (Race & Index)"
  },
  {
    questionText: "अहिफेन (Opium) में मार्फीन का प्रतिशत होता है:",
    options: ["5%", "10%", "0.5%", "2%"],
    correctAnswerIndex: 1,
    explanation: "कच्चे अहिफेन (Opium) में प्राकृतिक रूप से कई अल्कलॉइड होते हैं। इनमें मॉर्फिन (Morphine) सबसे प्रचुर मात्रा में होता है, जो वजन के हिसाब से लगभग 9% से 14% (औसतन 10%) होता है।",
    reference: "Forensic Toxicology",
    ncismRef: "Agada Tantra Syllabus: Plant Poisons (Opium)"
  },
  {
    questionText: "गम्भीर मानसिक मन्दता (Severe mental retardation) की स्थिति में आई.क्यू. (IQ) लेवल होता है:",
    options: ["51-70", "36-50", "20-35", "< 20"],
    correctAnswerIndex: 2,
    explanation: "मानसिक विकलांगता (Intellectual Disability) के मानक मनोरोग वर्गीकरण के अनुसार, 20 और 35 के बीच का IQ स्कोर 'गंभीर मानसिक मंदता' (Severe mental retardation) को दर्शाता है।",
    reference: "Psychiatric Classifications",
    ncismRef: "Agada Tantra Syllabus: Forensic Psychiatry"
  },
  {
    questionText: "यौन अपराधों से बच्चों का संरक्षण अधिनियम (POCSO Act) भारत में किस वर्ष में लागू किया गया है?",
    options: ["2014", "2012", "2005", "2010"],
    correctAnswerIndex: 1,
    explanation: "प्रोटेक्शन ऑफ चिल्ड्रन फ्रॉम सेक्सुअल ऑफेंसेस (POCSO) एक्ट भारत सरकार द्वारा 2012 में लागू किया गया था, ताकि बच्चों को यौन शोषण से बचाने के लिए मजबूत कानूनी तंत्र स्थापित किया जा सके।",
    reference: "POCSO Act, 2012",
    ncismRef: "Agada Tantra Syllabus: Forensic Medicine (Laws)"
  },
  {
    questionText: "निम्न में से कौनसा ब्लिस्टर कारक वार गैस (Blistering war gas) है?",
    options: ["क्लोरिन गैस (Chlorine gas)", "मस्टर्ड गैस (Mustard gas)", "एचसीएन गैस (HCN gas)", "टेबुन (Tabun)"],
    correctAnswerIndex: 1,
    explanation: "मस्टर्ड गैस (Sulfur mustard) एक रासायनिक युद्ध एजेंट है जिसे वेसिकेंट या ब्लिस्टरिंग एजेंट (Blistering agent) के रूप में जाना जाता है। इसके संपर्क में आने से त्वचा, आंखों और श्वसन तंत्र पर गंभीर रासायनिक जलन और छाले (Blisters) पड़ जाते हैं।",
    reference: "Toxicology (Chemical Warfare)",
    ncismRef: "Agada Tantra Syllabus: Chemical Warfare Agents"
  }
];

export default function Batch2022AgadaTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < BATCH_22_AGADA_QUESTIONS.length) {
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
    BATCH_22_AGADA_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = BATCH_22_AGADA_QUESTIONS[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const userChoice = selectedAnswers[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice/agad-tantra/university-papers" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Official Papers
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-amber-500/30 rounded-sm p-10 text-center shadow-xl animate-in fade-in zoom-in duration-500">
            <Award className="w-20 h-20 text-amber-500 mx-auto mb-6 drop-shadow-md" />
            <h2 className="text-3xl font-heading font-bold mb-4">Exam Completed!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-4xl">{calculateScore()}</span> out of {BATCH_22_AGADA_QUESTIONS.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                <RefreshCcw className="w-5 h-5" /> Retake Exam
              </button>
              <Link href="/mcq-practice/agada-tantra/university-papers" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Hub
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-amber-500/20 rounded-sm p-8 md:p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-sm font-bold text-[10px] tracking-wider uppercase flex items-center gap-2 shadow-sm">
                <Award className="w-3.5 h-3.5" /> 2022 Main Exam
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {BATCH_22_AGADA_QUESTIONS.length}
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
                <div className="text-sm text-foreground/90 leading-relaxed font-medium mb-3">
                  <span className="font-bold text-amber-500 mr-2 block mb-2">Explanation:</span> 
                  {qData.explanation}
                </div>
                
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
                  {currentQuestion + 1 === BATCH_22_AGADA_QUESTIONS.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
