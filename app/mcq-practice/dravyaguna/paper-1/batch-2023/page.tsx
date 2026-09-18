"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen, ClipboardList } from "lucide-react";

const BATCH_2023_QUESTIONS = [
  { 
    questionText: "विपाक को आंकलन करने का तरीका क्या है। / What is the method for assessing the Vipak.", 
    options: ["प्रत्यक्ष प्रमाण (Pratyaksha Praman)", "अनुमान प्रमाण (Anuman Praman)", "दोनों (Both)", "युक्ति (Yukti)"], 
    correctAnswerIndex: 1,
    explanation: "विपाक का साक्षात् दर्शन नहीं होता, बल्कि कर्म (Action) के आधार पर इसका अनुमान लगाया जाता है ('अनुमानाद्गन्तव्यो विपाकः कर्मनिष्ठायाः')।"
  },
  { 
    questionText: "इनमें से किस रस में लघु गुण श्रेष्ठ स्तर पर होता है? / Which of the following Rasa has laghu Guna in Superior level.", 
    options: ["अम्ल (Amla)", "कटु (Katu)", "तिक्त (Tikta)", "A & C"], 
    correctAnswerIndex: 2,
    explanation: "तिक्त रस में वायु और आकाश महाभूत की प्रधानता होती है, जिससे यह सबसे अधिक लघु (Light) गुणों वाला माना जाता है।"
  },
  { 
    questionText: "द्रव्य निर्भर है..... / Dravya is dependent on.......", 
    options: ["रस (Rasa)", "गुण (Guna)", "वीर्य (Veerya)", "विपाक (Vipak)"], 
    correctAnswerIndex: 1,
    explanation: "आयुर्वेद के मौलिक सिद्धांतों के अनुसार रस, गुण, वीर्य, और विपाक 'द्रव्य' के आश्रित होते हैं। (द्रव्य आश्रय है, और ये सभी इसके आश्रित हैं)।"
  },
  { 
    questionText: "मरीच इनमें से किस मिश्रक गण में नहीं है? / Marich is not the composition of which of the following Mishrakgana.", 
    options: ["पंचकोल (Panchakola)", "षडूषण (Shadushan)", "A & B", "त्रिकटु (Trikatu)"], 
    correctAnswerIndex: 0,
    explanation: "पंचकोल में पिप्पली, पिप्पलीमूल, चव्य, चित्रक और शुंठी आते हैं; इसमें मरीच (Maricha) शामिल नहीं है।"
  },
  { 
    questionText: "जीवक और ऋषभक का प्रतिनिधि है....... / Substitute for Jivak & Rishabhak is.......", 
    options: ["वाराही (Varahi)", "अश्वगंधा (Ashwagandha)", "विदारी (Vidari)", "शतावरी (Shatavari)"], 
    correctAnswerIndex: 2,
    explanation: "भावप्रकाश के अभाव प्रतिनिधि द्रव्य सिद्धांत के अनुसार अष्टवर्ग के जीवक और ऋषभक के न मिलने पर 'विदारीकंद' का प्रयोग किया जाता है।"
  },
  { 
    questionText: "गुण का द्रव्य से क्या सम्बन्ध है? / How is the association of Guna with Dravya.", 
    options: ["सामान्य (Samanya)", "समवाय (Samavaya)", "विशेष (Vishesh)", "कोई नहीं (None of these)"], 
    correctAnswerIndex: 1,
    explanation: "गुण हमेशा द्रव्य में समवाय (अविभाज्य/Inseparable) सम्बन्ध से रहता है ('समवायी तु निश्चेष्टः कारणं गुणः')।"
  },
  { 
    questionText: "आहार द्रव्य की मात्रा है ........पल / Dose of Ahara Dravya is ........ Pala", 
    options: ["4", "3", "16", "A & B"], 
    correctAnswerIndex: 0,
    explanation: "सामान्यतः आचार्यों ने आहार द्रव्य और कषाय आदि की मात्रा का निर्धारण अग्नि और प्रकृति के अनुसार किया है, लेकिन मानक रूप में 4 पल (1 पटल/कुडव) को एक आदर्श मात्रा माना गया है।"
  },
  { 
    questionText: "इनमें से कौन सा पौधों में पाया जाने वाला हाइड्रोफिलिक सेकेंडरी मेटाबोलाइट है / Which of the following is a hydrophilic secondary metabolite found in plants", 
    options: ["लिपिड्स (Lipids)", "अल्कलॉइड्स (Alkaloids)", "फ्लवोनोइड्स (Flavonoids)", "टरपेनोइड्स (Terpenoids)"], 
    correctAnswerIndex: 2,
    explanation: "Flavonoids (फ्लेवोनोइड्स) सामान्यतः जल में घुलनशील (Hydrophilic) होते हैं, जबकि लिपिड्स और टरपेनोइड्स मुख्य रूप से लिपोफिलिक (Lipophilic) होते हैं।"
  },
  { 
    questionText: "इनमें से कौन सा बायो स्टैटिस्टिकल सॉफ्टवेयर नहीं है? / Which among them is not a bio statistical software", 
    options: ["Prism Graph Pad", "Graphene", "R Suite", "Origin 8.0"], 
    correctAnswerIndex: 1,
    explanation: "Graphene (ग्राफीन) कार्बन का एक अपररूप (Allotrope/Material) है, यह कोई डेटा एनालिसिस या सांख्यिकीय सॉफ्टवेयर नहीं है।"
  },
  { 
    questionText: "वृक्षायुर्वेद किसने लिखा? / Who wrote the Vrikshayurveda?", 
    options: ["सुरपाल (Surpal)", "धर्मपाल (Dharampal)", "हरपाल (Harpal)", "मणिपाल (Manipal)"], 
    correctAnswerIndex: 0,
    explanation: "वृक्षायुर्वेद की रचना आचार्य सुरपाल द्वारा की गई थी, जिसमें पादपों के कृषिकरण, पोषण और रोगों का वर्णन है।"
  },
  { 
    questionText: "भविष्य में उपयोग के लिए व्यवहार्य अवस्था में संग्रहित बीजों के संग्रह को क्या कहते हैं? / A collection of seeds stored in a viable state for posterity or future use is called", 
    options: ["Seedlings", "Seed Propagation", "Seed Bank", "सभी (All)"], 
    correctAnswerIndex: 2,
    explanation: "भविष्य की पीढ़ियों के संरक्षण और कृषि के लिए बीजों को सुरक्षित रखने वाले स्थान को 'Seed Bank' (बीज बैंक) कहा जाता है।"
  },
  { 
    questionText: "चतुर्बीज में इनमें से कौनसा घटक शामिल नहीं है / Chaturbeeja does not include which of the following drug", 
    options: ["चन्द्रशूर (Chandrashur)", "पाटला (Patala)", "मेथिका (Methika)", "यवानिका (Yavanika)"], 
    correctAnswerIndex: 1,
    explanation: "चतुर्बीज में मेथी (Methika), चन्द्रशूर (Chandrashur), कलौंजी (Kalajaji) और अजवायन (Yavani) शामिल हैं। पाटला वृहत् पंचमूल का हिस्सा है।"
  },
  { 
    questionText: "एनएमपीबी का गठन कब हुआ था? / NMPB was constituted during", 
    options: ["2021", "2012", "2010", "2000"], 
    correctAnswerIndex: 3,
    explanation: "राष्ट्रीय औषधीय पादप बोर्ड (National Medicinal Plants Board - NMPB) की स्थापना भारत सरकार द्वारा 24 नवंबर 2000 को की गई थी।"
  },
  { 
    questionText: "ASU दवाओं के लिए फार्माकोविजिलेंस फ्रेमवर्क में रिपोर्टिंग फॉर्म के ADR का मुख्य उद्देश्य क्या है / What is the main purpose of the ADR of the reporting form in the pharmacovigilance framework for ASU drugs", 
    options: ["To advertise ASU drugs to the public", "To collect and Details about adverse events", "To promote regulatory interventions", "To conduct clinical investigation"], 
    correctAnswerIndex: 1,
    explanation: "ADR (Adverse Drug Reaction) रिपोर्टिंग का मुख्य उद्देश्य दवाओं से होने वाले किसी भी प्रतिकूल प्रभाव या दुष्प्रभाव का डेटा एकत्र करना है।"
  },
  { 
    questionText: "आचार्य सुश्रुत के अनुसार देश के प्रकार....... / Types of Desh according to Acharya Sushrut.......", 
    options: ["2", "4", "None", "3"], 
    correctAnswerIndex: 3,
    explanation: "सुश्रुत संहिता (सूत्रस्थान 35) में भी भूमि/देश के तीन मुख्य प्रकार बताए गए हैं: आनूप (Anupa), जांगल (Jangala), और साधारण (Sadharana)।"
  },
  { 
    questionText: "वासा का पर्यायवाची शब्द सिंहास्य किसका उदाहरण है ? / Simghasya as synonym of vasa is an example for", 
    options: ["उपमा (Upama)", "वीर्य (Veerya)", "स्वभाव (Swabhav)", "रूढ़ (Roodha)"], 
    correctAnswerIndex: 0,
    explanation: "सिंहास्य का अर्थ है 'शेर के मुख के समान'। यह वासा के पुष्पों की आकृति को शेर के मुख से तुलना (उपमा) करके दिया गया नाम है।"
  },
  { 
    questionText: "किस लेखक का मानना है कि सभी विपरीत होने के बावजूद शरीर में कार्य करते हैं / Which authors opines that all the inspite of being opposite do act in the body", 
    options: ["भावमिश्र (Bhavmishra)", "सुश्रुत (Sushrut)", "वाग्भट (Vagbhat)", "चरक (Charak)"], 
    correctAnswerIndex: 0,
    explanation: "आचार्य भावमिश्र ने 'विचित्र प्रत्ययारब्ध' सिद्धांत को स्पष्ट किया है, जहाँ द्रव्य अपने रस-गुण आदि के विपरीत भी विशिष्ट कर्म करता है।"
  },
  { 
    questionText: "चरक के अनुसार, इनमें से किसका उल्लेख भेषज परीक्षा विधि में नहीं है ? / According to Charak, which of the following is not mentioned in bheshaj pariksha vidhi", 
    options: ["सत्व (Satwa)", "प्रकृति (Prakriti)", "गुण (Guna)", "देश (Desh)"], 
    correctAnswerIndex: 0,
    explanation: "सत्व (मानसिक प्रकृति) रोगी परीक्षा (दशविध आतुर परीक्षा) का हिस्सा है, जबकि भेषज (औषधि) परीक्षा में प्रकृति, गुण, देश, काल आदि का विचार किया जाता है।"
  },
  { 
    questionText: "कौन सी क्रिया सिर्फ़ आम के पाचन से जुड़ी है? / Which action is associated with the digestion of Ama only", 
    options: ["ग्राही (Grahi)", "स्तम्भन (Stambhan)", "दीपन (Deepan)", "पाचन (Pachan)"], 
    correctAnswerIndex: 3,
    explanation: "पाचन (Pachan) वह कर्म है जो केवल 'आम' (Undigested food/Toxins) को पचाता है, लेकिन यह आवश्यक नहीं कि वह अग्नि (Deepan) को भी बढ़ाए।"
  },
  { 
    questionText: "सुश्रुत के अनुसार स्पर्श से कौन सा वीर्य समझा जा सकता है ? / Which Veerya can be understood by Sparsh as per Sushrut", 
    options: ["मृदु (Mridu)", "गुरु (Guru)", "विशद (Vishad)", "स्निग्ध (Snigdha)"], 
    correctAnswerIndex: 3,
    explanation: "आचार्य सुश्रुत ने 8 वीर्य माने हैं। स्पर्श (Touch) के माध्यम से मुख्य रूप से शीत और उष्ण का ज्ञान होता है, लेकिन विकल्पों के अनुसार स्निग्धता/रूक्षता का ज्ञान भी स्पर्श द्वारा संभव है।"
  }
];

export default function Batch2023Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < BATCH_2023_QUESTIONS.length) {
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
    BATCH_2023_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = BATCH_2023_QUESTIONS[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const userChoice = selectedAnswers[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice/dravyaguna" className="inline-flex items-center gap-2 text-foreground/60 hover:text-emerald-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-emerald-500/30 rounded-sm p-10 text-center shadow-xl animate-in fade-in zoom-in duration-500">
            <Award className="w-20 h-20 text-emerald-500 mx-auto mb-6 drop-shadow-md" />
            <h2 className="text-3xl font-heading font-bold mb-4">Exam Completed!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-emerald-500 font-bold text-4xl">{calculateScore()}</span> out of {BATCH_2023_QUESTIONS.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                <RefreshCcw className="w-5 h-5" /> Retake Exam
              </button>
              <Link href="/mcq-practice/dravyaguna" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Hub
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-emerald-500/20 rounded-sm p-8 md:p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-sm font-bold text-[10px] tracking-wider uppercase flex items-center gap-2 shadow-sm">
                <Award className="w-3.5 h-3.5" /> 2023 Batch Main Exam
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {BATCH_2023_QUESTIONS.length}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
              {qData.questionText}
            </h2>
            
            <div className="space-y-4">
              {qData.options.map((option, index) => {
                let buttonStyle = "border-surfaceBorder hover:border-emerald-500/50 bg-foreground/5 hover:bg-emerald-500/10";
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
              <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-sm p-5 shadow-inner animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-sm text-foreground/90 leading-relaxed font-medium mb-3">
                  <span className="font-bold text-emerald-500 mr-2">Explanation:</span> 
                  {qData.explanation}
                </p>
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
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-6 rounded-sm shadow-sm transition-colors flex items-center gap-2 animate-in fade-in duration-300"
                >
                  {currentQuestion + 1 === BATCH_2023_QUESTIONS.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
