"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, BookOpen, ClipboardList } from "lucide-react";

const BATCH_21_AGADA_QUESTIONS = [
  { 
    questionText: "क्षारगद का प्रयोग किस विष वेग की चिकित्सा में किया जाता है?", 
    options: ["छठवें वेग में (Sixth Stage)", "चौथे वेग में (Fourth Stage)", "सातवें वेग में (Seventh Stage)", "तीसरे वेग में (Third Stage)"], 
    correctAnswerIndex: 3,
    explanation: (
      <div>
        <p className="mb-3">
          चरक संहिता (चिकित्सा 23/64) और सुश्रुत संहिता (कल्प 2) के अनुसार, स्थावर विष के <strong>तीसरे वेग (Third stage)</strong> की चिकित्सा में &apos;क्षारगद&apos; (Kshara Agada), नस्य और अंजन का प्रयोग करने का स्पष्ट निर्देश है (श्लोक: &apos;तृतीये क्षारमगदं नस्यमञ्जनमेव च&apos;)।
        </p>
        
        {/* Vega Chikitsa Table from Image Reference */}
        <div className="mt-4 overflow-x-auto border border-amber-900/30 rounded-lg">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-amber-900/20 text-amber-950 dark:text-amber-100 border-b border-amber-900/30">
                <th className="p-2 border-r border-amber-900/30">वेग (Vega)</th>
                <th className="p-2">चरक अनुसार (च. चि. 23/45-51)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-900/20">
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">प्रथम</td>
                <td className="p-2">त्वक-मांस गत-दहन, रक्त गत-विस्रावण, हृदयावरण, वमन</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">द्वितीय</td>
                <td className="p-2">विरेचन, हृदयावरण इत्यादि</td>
              </tr>
              <tr className="bg-amber-400/20 font-bold">
                <td className="p-2 border-r border-amber-900/30">तृतीय</td>
                <td className="p-2">शोफहर एवं लेखन क्षारागद का पान (नस्य एवं अंजन)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">चतुर्थ</td>
                <td className="p-2">गोमय रस का कपित्थ पत्र रस-मधु-सर्पि के साथ पान</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">पंचम</td>
                <td className="p-2">कपिकच्छु एवं शिरीष पत्र रस का नेत्रों में आश्व्योतन, अंजन एवं नस्य</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">षष्ठम</td>
                <td className="p-2">संज्ञास्थापन औषधियों का प्रयोग</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">सप्तम</td>
                <td className="p-2">विषपानं दष्टानां विषपीते दशनं चान्ते (विपरीत विष पान)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">अष्टम</td>
                <td className="p-2">पलाश बीज चूर्ण + अर्द्धभाग मयूर पित्त का पान अथवा बृहतिफाणित ग्रहधूम, गोपित्त एवं निम्ब पत्र रस का पान</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    reference: "चरक चिकित्सास्थान 23/64, सुश्रुत कल्पस्थान 2",
    ncismRef: "Agada Tantra Syllabus: Sthavara Visha Vega Chikitsa"
  },
  { 
    questionText: "निम्न में से विष वृद्धि का हेतु नहीं है:", 
    options: ["क्षुत (Kshut / Hunger)", "अजीर्ण (Ajeerna / Indigestion)", "कफ वृद्धि (Kapha Vruddhi)", "तिल पुष्प गन्ध (Smell of Tila Pushpa)"], 
    correctAnswerIndex: 2,
    explanation: "तीव्र भूख, अजीर्ण, और तिल के फूलों की गंध शरीर में विष को बढ़ाते हैं। पित्त दोष के बढ़ने से विष की तीव्रता बढ़ती है, लेकिन कफ वृद्धि सामान्यतः विष वृद्धि का प्रत्यक्ष हेतु नहीं है।",
    reference: "चरक व सुश्रुत संहिता (विष वेग एवं वृद्धि अध्याय)",
    ncismRef: "Agada Tantra Syllabus: Visha Vruddhi Hetu"
  },
  { 
    questionText: "निम्न में से किस गुण के अतिरिक्त विष एवं मद्य में समान गुण पाये जाते हैं?", 
    options: ["व्यवायी (Vyavaayi)", "विशद (Vishada)", "लघु (Laghu)", "रस (Rasa)"], 
    correctAnswerIndex: 3,
    explanation: "विष और मद्य दोनों में व्यवायी और लघु जैसे गुण समान होते हैं। लेकिन वे &apos;रस&apos; में भिन्न होते हैं; विष को अव्यक्त रस माना जाता है, जबकि मद्य का रस अम्ल होता है।",
    reference: "आयुर्वेदिक टॉक्सिकोलॉजी (विष सामान्य लक्षण)",
    ncismRef: "Agada Tantra Syllabus: Visha Samanya Guna"
  },
  { 
    questionText: "&apos;-देहादशेषं यदनिर्गतं तत्-&apos; किसके लिये कहा गया है?", 
    options: ["गर विष (Gara Visha)", "शंका विष (Shanka Visha)", "दूषी विष (Dooshi Visha)", "अलर्क विष (Alarka Visha)"], 
    correctAnswerIndex: 2,
    explanation: "यह सुश्रुत संहिता में वर्णित &apos;दूषी विष&apos; की शास्त्रीय परिभाषा है। यह वह विष है जो शरीर से पूरी तरह बाहर नहीं निकल पाता और ऊतकों में सुप्त अवस्था में पड़ा रहता है।",
    reference: "सुश्रुत कल्पस्थान 2/3",
    ncismRef: "Agada Tantra Syllabus: Dooshi Visha Lakshana"
  },
  { 
    questionText: "कालान्तर विपाकि विषं ............ किसके लिये कहा गया है?", 
    options: ["शंका विष (Shanka Visha)", "गर विष (Gara Visha)", "दूषी विष (Dooshi Visha)", "अलर्क विष (Alarka Visha)"], 
    correctAnswerIndex: 1,
    explanation: "&apos;कालान्तर विपाकि&apos; का अर्थ है वह पदार्थ जो पचने के बाद लंबे समय के बाद अपना जहरीला प्रभाव दिखाता है। आचार्यों ने इस शब्द का प्रयोग मुख्य रूप से &apos;गर विष&apos; के लिए किया है।",
    reference: "संहिता संदर्भ (गर विष प्रकरण)",
    ncismRef: "Agada Tantra Syllabus: Gara Visha Vikalpa"
  },
  { 
    questionText: "दशांग अगद का आचार्य वाग्भट्ट ने किस विषाक्तता में निर्देश किया है?", 
    options: ["सर्प विष (Sarpa Visha)", "सर्व कीट विष (Sarva Keeta Visha)", "वृश्चिक विष (Vrishchika Visha)", "लूता विष (Loota Visha)"], 
    correctAnswerIndex: 1,
    explanation: "आचार्य वाग्भट्ट ने &apos;दशांग अगद&apos; का निर्देश एक ब्रॉड-स्पेक्ट्रम एंटीडोट के रूप में सभी प्रकार के कीट दंश (सर्व कीट विष) के लिए किया है।",
    reference: "अष्टांग हृदय उत्तरतंत्र",
    ncismRef: "Agada Tantra Syllabus: Agada Yoga (Dashaanga Agada)"
  },
  { 
    questionText: "टंकण का प्रतिविष के रूप में प्रयोग किया जाता है:", 
    options: ["भल्लातक विषाक्तता में", "वत्सनाभ विषाक्तता में", "कुचला विषाक्तता में", "लांगली विषाक्तता में"], 
    correctAnswerIndex: 1,
    explanation: "टंकण भस्म (Purified Borax) वत्सनाभ (Aconite) विषाक्तता के गंभीर कार्डियक डिप्रेसेंट प्रभावों को बेअसर करने में अत्यधिक प्रभावी प्रतिविष है।",
    reference: "आयुर्वेदिक प्रतिविष विज्ञान",
    ncismRef: "Agada Tantra Syllabus: Sthavara Visha Prativisha"
  },
  { 
    questionText: "आर्सेनिक की घातक मात्रा (Fatal Dose) है:", 
    options: ["120-200 मि.ग्रा. (120-200 mg)", "100-120 मि.ग्रा. (100-120 mg)", "250-500 मि.ग्रा. (250-500 mg)", "30-80 मि.ग्रा. (30-80 mg)"], 
    correctAnswerIndex: 0,
    explanation: "फॉरेंसिक टॉक्सिकोलॉजी के अनुसार, एक औसत वयस्क के लिए आर्सेनिक ट्राईऑक्साइड की मानक घातक मात्रा 120 से 200 मिलीग्राम मानी जाती है।",
    reference: "Modi's Medical Jurisprudence and Toxicology",
    ncismRef: "Agada Tantra Syllabus: Metallic Poisons (Arsenic)"
  },
  { 
    questionText: "टोसिस (Ptosis) चिह्न किस प्रकार के सर्प दंश में पाया जाता है?", 
    options: ["तंत्रिका प्रभावी (Neurotoxic)", "वाहिका प्रभावी (Vasculotoxic)", "पेशी प्रभावी (Musculotoxic)", "उपर्युक्त में से कोई नहीं (None)"], 
    correctAnswerIndex: 0,
    explanation: "टोसिस (पलकों का गिरना) न्यूरोटॉक्सिक सर्प दंश (जैसे कोबरा या क्रेट) का प्रारंभिक न्यूरोलॉजिकल लक्षण है, जो क्रेनियल नर्व्स के पक्षाघात से होता है।",
    reference: "Forensic Medicine & Toxicology Standards",
    ncismRef: "Agada Tantra Syllabus: Jangama Visha (Snake Bite)"
  },
  { 
    questionText: "अहिफेन (Opium) विषाक्तता में मृत्यु का मुख्य कारण है:", 
    options: ["हार्ट फेलियर (Heart Failure)", "श्वासावरोध (Respiratory Failure)", "तीव्र कोष्ठ बद्धता (Severe Constipation)", "मस्तिष्क शोथ (Meningitis)"], 
    correctAnswerIndex: 1,
    explanation: "अहिफेन एक तीव्र सेंट्रल नर्वस सिस्टम डिप्रेसेंट है। इसकी अधिक मात्रा ब्रेनस्टेम में स्थित रेस्पिरेटरी सेंटर को लकवाग्रस्त कर देती है, जिससे श्वासावरोध से मृत्यु होती है।",
    reference: "Forensic Toxicology (Opium Poisoning)",
    ncismRef: "Agada Tantra Syllabus: Substances of Abuse (Narcotics)"
  },
  { 
    questionText: "भारतीय दंड संहिता (IPC) में &apos;मृत्यु&apos; को किस धारा में परिभाषित किया गया है?", 
    options: ["IPC Section 46", "IPC Section 44", "IPC Section 454", "IPC Section 49"], 
    correctAnswerIndex: 0,
    explanation: "भारतीय दंड संहिता (IPC) की धारा 46 में &apos;मृत्यु&apos; को कानूनी रूप से परिभाषित किया गया है, जिसका अर्थ मानव की मृत्यु से है जब तक कि संदर्भ से स्पष्ट न हो।",
    reference: "Indian Penal Code (IPC) Sec 46",
    ncismRef: "Agada Tantra Syllabus: Medical Jurisprudence (IPC Definitions)"
  },
  { 
    questionText: "मृत्योत्तर पेशी आकर्ष (Rigor Mortis) सर्वप्रथम किस अंग में उत्पन्न होता है?", 
    options: ["उर्ध्व शाखा में (Upper Limb)", "आई लिड / पलक (Eyelid)", "जबड़े में (Jaw)", "अग्नाशय में (Pancreas)"], 
    correctAnswerIndex: 1,
    explanation: "निस्टेन के नियम के अनुसार, Rigor mortis अनैच्छिक मांसपेशियों के बाद ऐच्छिक मांसपेशियों में सबसे पहले पलकों (Eyelids) की छोटी मांसपेशियों में प्रकट होता है।",
    reference: "Reddy's Forensic Medicine",
    ncismRef: "Agada Tantra Syllabus: Forensic Thanatology (Rigor Mortis)"
  },
  { 
    questionText: "गंभीर क्षत (Grievous Hurt) को भा.द.सं. (IPC) की किस धारा में परिभाषित किया गया है?", 
    options: ["IPC Section 319", "IPC Section 320", "IPC Section 324", "IPC Section 299"], 
    correctAnswerIndex: 1,
    explanation: "भारतीय दंड संहिता की धारा 320 में &apos;गंभीर क्षत&apos; (Grievous Hurt) को स्पष्ट रूप से परिभाषित किया गया है, जिसमें 8 विशिष्ट प्रकार की गंभीर चोटें शामिल हैं।",
    reference: "Indian Penal Code (IPC) Sec 320",
    ncismRef: "Agada Tantra Syllabus: Forensic Medicine (Offences against Human Body)"
  },
  { 
    questionText: "पी.सी.पी.एन.डी.टी. (PCPNDT) एक्ट भारत में किस वर्ष लागू किया गया था?", 
    options: ["1994", "1971", "2001", "1998"], 
    correctAnswerIndex: 0,
    explanation: "PCPNDT एक्ट भारत की संसद द्वारा 1994 में लागू किया गया था। इसका मुख्य उद्देश्य प्रसव पूर्व लिंग चयन पर रोक लगाना और कन्या भ्रूण हत्या रोकना है।",
    reference: "PCPNDT Act, 1994",
    ncismRef: "Agada Tantra Syllabus: Medical Ethics & Legal Procedures"
  },
  { 
    questionText: "ड्रग्स एंड कॉस्मेटिक नियम, 1945 के किस शेड्यूल (Schedule) में विषैले पदार्थों (Poisons) को रखा गया है?", 
    options: ["Schedule A", "Schedule B", "Schedule E", "Schedule Y"], 
    correctAnswerIndex: 2,
    explanation: "ड्रग्स एंड कॉस्मेटिक्स रूल्स, 1945 के शेड्यूल E में आयुर्वेद, सिद्ध और यूनानी प्रणालियों के तहत आने वाले विषैले पदार्थों की सूची दी गई है।",
    reference: "Drugs and Cosmetics Rules, 1945",
    ncismRef: "Agada Tantra Syllabus: Pharmacy & Legal Standards"
  },
  { 
    questionText: "&apos;शतस्यैकोत्र जीवति&apos; का प्रयोग किसके संदर्भ में किया गया है?", 
    options: ["सर्प विष (Sarpa Visha)", "विष संकट (Visha Sankat)", "सर्पांगाभिहत (Sarpangabhihata)", "शंका विष (Shanka Visha)"], 
    correctAnswerIndex: 1,
    explanation: "&apos;शतस्यैकोत्र जीवति&apos; वाग्भट्ट द्वारा &apos;विष संकट&apos; का वर्णन करने के लिए प्रयुक्त वाक्य है, जिसका अर्थ है कि अत्यंत गंभीर परिस्थितियों में सौ में से केवल एक ही जीवित बच पाता है।",
    reference: "अष्टांग संग्रह उत्तरतंत्र",
    ncismRef: "Agada Tantra Syllabus: Visha Sankat"
  },
  { 
    questionText: "कड़वे बादाम जैसी गंध (Bitter Almond-like smell) किस विषाक्तता में मिलती है?", 
    options: ["CO Poisoning", "Cyanide Poisoning", "Aspirin Poisoning", "Organophosphate Poisoning"], 
    correctAnswerIndex: 1,
    explanation: "तीव्र साइनाइड विषाक्तता का एक प्रमुख नैदानिक संकेत पीड़ित की सांसों से कड़वे बादाम (Bitter almonds) की विशेष गंध आना है।",
    reference: "Forensic Toxicology (Cyanide)",
    ncismRef: "Agada Tantra Syllabus: Chemical Poisons"
  },
  { 
    questionText: "रासायनिक संगठन के रूप में &apos;कोल्चिसिन&apos; (Colchicine) किस पादप विष में पाया जाता है?", 
    options: ["अर्क (Arka)", "लांगली (Laangali)", "गुंजा (Gunja)", "भल्लातक (Bhallataka)"], 
    correctAnswerIndex: 1,
    explanation: "लांगली (Gloriosa superba) में प्राकृतिक रूप से अत्यधिक विषैला अल्कलॉइड कोल्चिसिन पाया जाता है, जो गैस्ट्रोइंटेस्टाइनल संकट पैदा करता है।",
    reference: "Ayurvedic Plant Toxicology",
    ncismRef: "Agada Tantra Syllabus: Sthavara Visha (Plant Poisons)"
  },
  { 
    questionText: "आचार्य सुश्रुत के अनुसार कन्द विषों (Tuberous Poisons) की कुल संख्या कितनी है?", 
    options: ["12", "13", "8", "5"], 
    correctAnswerIndex: 1,
    explanation: "सुश्रुत संहिता के कल्प स्थान के अनुसार, कन्द विषों के विशिष्ट प्रकारों की संख्या 13 बताई गई है।",
    reference: "सुश्रुत कल्पस्थान",
    ncismRef: "Agada Tantra Syllabus: Sthavara Visha Varga"
  },
  { 
    questionText: "रथ, हल, छत्र, स्वस्तिक एवं अंकुश आदि चिह्न किस प्रकार के सर्पों के फन पर पाए जाते हैं?", 
    options: ["मण्डली (Mandali)", "दर्वीकर (Darvikara)", "वैकरंज (Vaikaranja)", "राजिमान (Raajimaana)"], 
    correctAnswerIndex: 1,
    explanation: "आयुर्वेदिक टॉक्सिकोलॉजी के अनुसार, दर्वीकर सर्पों (फन वाले सांप जैसे कोबरा) के फन पर रथ, हल, छत्र या स्वस्तिक जैसे विशिष्ट चिह्न होते हैं।",
    reference: "सुश्रुत कल्पस्थान 4/13",
    ncismRef: "Agada Tantra Syllabus: Jangama Visha (Snake Classification)"
  }
];

export default function Batch2021AgadaTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < BATCH_21_AGADA_QUESTIONS.length) {
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
    BATCH_21_AGADA_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = BATCH_21_AGADA_QUESTIONS[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const userChoice = selectedAnswers[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice/agada-tantra" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Agada Tantra Hub
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-amber-500/30 rounded-sm p-10 text-center shadow-xl animate-in fade-in zoom-in duration-500">
            <Award className="w-20 h-20 text-amber-500 mx-auto mb-6 drop-shadow-md" />
            <h2 className="text-3xl font-heading font-bold mb-4">Exam Completed!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-4xl">{calculateScore()}</span> out of {BATCH_21_AGADA_QUESTIONS.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                <RefreshCcw className="w-5 h-5" /> Retake Exam
              </button>
              <Link href="/mcq-practice/agada-tantra" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Hub
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-amber-500/20 rounded-sm p-8 md:p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-sm font-bold text-[10px] tracking-wider uppercase flex items-center gap-2 shadow-sm">
                <Award className="w-3.5 h-3.5" /> 2021 Main Exam
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {BATCH_21_AGADA_QUESTIONS.length}
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
                  {currentQuestion + 1 === BATCH_21_AGADA_QUESTIONS.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
