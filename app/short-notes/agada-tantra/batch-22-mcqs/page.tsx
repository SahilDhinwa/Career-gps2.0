"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookCheck } from "lucide-react";
import { HandwrittenCanvas } from "@/components/HandwrittenCanvas";

// ================================================================
// 📝 MCQ DATA ARRAY (BATCH 22)
// ================================================================
const QUESTIONS = [
  {
    id: 1,
    question: "सवातं ग्रहधूमाभं पुरीषं... लक्षण किस स्थिति में पाया जाता है।",
    translation: "('सवातं ग्रहधूमाभं पुरीषं...' Symptom Found in which condition.)",
    options: [
      { key: "A", text: "A. विष उपद्रव (Poison complication)" },
      { key: "B", text: "B. विष मुक्त (Vish Mukta)" },
      { key: "C", text: "C. विष पीत (Vish Peeta)" },
      { key: "D", text: "D. विष संकट (Vish Sankat)" }
    ],
    answerKey: "C",
    explanation: "आयुर्वेदिक ग्रंथों (सुश्रुत संहिता) के अनुसार, वात के साथ धुएं के रंग जैसा मल त्याग करना ('सवातं ग्रहधूमाभं पुरीषं') उस व्यक्ति का एक प्रमुख नैदानिक लक्षण है जिसने विष का सेवन किया हो (Vish Peeta)."
  },
  {
    id: 2,
    question: "आचार्य चरक ने संज्ञास्थापन उपक्रम का निर्देश किस वेग में किया है।",
    translation: "(Acharya Charaka, in which Vega the Sangyasthaapana Indication has describe -)",
    options: [
      { key: "A", text: "A. चतुर्थ वेग (Fourth Vega)" },
      { key: "B", text: "B. पंचम वेग (Fifth Vega)" },
      { key: "C", text: "C. सप्तम वेग (Seventh Vega)" },
      { key: "D", text: "D. षष्ठम वेग (Sixth Vega)" }
    ],
    answerKey: "D",
    explanation: "आयुर्वेदिक टॉक्सिकोलॉजी में, आचार्य चरक ने विष के आठ वेग (Stages) बताए हैं। 'संज्ञास्थापन' (चेतना वापस लाने की प्रक्रिया) का निर्देश विशेष रूप से विष के छठे वेग (षष्ठम वेग) में किया गया है।"
  },
  {
    id: 3,
    question: "Reinsch test किस विषाक्तता में किया जाता है।",
    translation: "(Reinsch test is indicated in which poisoning-)",
    options: [
      { key: "A", text: "A. आर्सेनिक (Arsenic)" },
      { key: "B", text: "B. मशरूम (Mushroom)" },
      { key: "C", text: "C. एसिड (Acid)" },
      { key: "D", text: "D. एल्केलाईड्स (Alkaloids)" }
    ],
    answerKey: "A",
    explanation: "Reinsch test फॉरेंसिक टॉक्सिकोलॉजी में एक प्रारंभिक स्क्रीनिंग परीक्षण है जिसका उपयोग जैविक नमूनों में आर्सेनिक (Arsenic), एंटीमनी, बिस्मथ और पारा जैसी भारी धातुओं की उपस्थिति का पता लगाने के लिए किया जाता है।"
  },
  {
    id: 4,
    question: "'विलून पक्षः स यथा विहंगः.......' लक्षण किस विषाक्तता में पाया जाता है।",
    translation: "('विलून पक्षः स यथा विहंगः.......' Symptoms found in which poisoning.)",
    options: [
      { key: "A", text: "A. दूषी विष (Dooshi visha)" },
      { key: "B", text: "B. गर विष (Gara visha)" },
      { key: "C", text: "C. विरूद्ध आहार (Virooddha aahaara)" },
      { key: "D", text: "D. कोई नहीं (None of these)" }
    ],
    answerKey: "A",
    explanation: "अष्टांग हृदय के इस श्लोक का अर्थ है 'कटे हुए पंखों वाले पक्षी के समान'। यह वाक्य दूषी विष (Dushi Visha) से पीड़ित रोगी की कमजोर, सुस्त और असहाय स्थिति का वर्णन करता है।"
  },
  {
    id: 5,
    question: "निम्न में से एण्डोक्राईन विघटन कारकों के सम्बन्ध में सबसे उपयुक्त कथन है।",
    translation: "(Which one of the following is best described about an Endocrine disrupters.)",
    options: [
      { key: "A", text: "A. ऐसे रसायन जो किसी अवयव की वृद्धि एवं विकास में बाधा उत्पन्न करते है। (A chemical that disrupts the growth & development of an organism.)" },
      { key: "B", text: "B. ऐसे रसायन जो किसी अवयव के पाचन में बाधा उत्पन्न करते है। (A chemical that disrupts the digestion of an organism.)" },
      { key: "C", text: "C. ऐसे रसायन जो किसी अवयव की अस्थि संरचना में बाधा उत्पन्न करते हैं। (A chemical that disrupts the bone structure of an organism.)" },
      { key: "D", text: "D. ऐसे रसायन जो किसी अवयव के Blood flow में बाधा उत्पन्न करते हैं। (A chemical that disrupts the Blood-Flow of an organism.)" }
    ],
    answerKey: "A",
    explanation: "एंडोक्राइन विघटन कारक (Endocrine disruptors) वे रसायन हैं जो शरीर की हार्मोनल (Endocrine) प्रणाली में हस्तक्षेप करते हैं, जिससे शरीर की वृद्धि एवं विकास (Growth & development), प्रजनन और प्रतिरक्षा प्रणाली पर प्रतिकूल प्रभाव पड़ता है।"
  },
  {
    id: 6,
    question: "पिंक डिसीज किस प्रकार की जीर्ण विषाक्तता में पाई जाती है।",
    translation: "(Pink disease is found in which type of chronic poisoning.)",
    options: [
      { key: "A", text: "A. नाग विषाक्तता (Lead poisoning)" },
      { key: "B", text: "B. पारद विषाक्तता (Mercury poisoning)" },
      { key: "C", text: "C. आर्सेनिक विषाक्तता (Arsenic poisoning)" },
      { key: "D", text: "D. जिंक विषाक्तता (Zinc poisoning)" }
    ],
    answerKey: "B",
    explanation: "पिंक डिसीज (Acrodynia) ऐतिहासिक रूप से पारे (Mercury) के क्रोनिक संपर्क से जुड़ी है। इसमें गंभीर दर्द होता है और हाथों व पैरों की त्वचा गुलाबी होकर छिलने (Peeling) लगती है।"
  },
  {
    id: 7,
    question: "निम्न में से विषघ्न महाकषाय का घटक नहीं है।",
    translation: "(Which one of the following is not a component of Vishaghna Mahakashaaya.)",
    options: [
      { key: "A", text: "A. हरिद्रा (Haridra)" },
      { key: "B", text: "B. मंजिष्ठा (Manjishtha)" },
      { key: "C", text: "C. चन्दन (Chandan)" },
      { key: "D", text: "D. गिलोय (Giloy)" }
    ],
    answerKey: "D",
    explanation: "चरक संहिता के अनुसार, विषघ्न महाकषाय की 10 जड़ी-बूटियाँ हैं: हरिद्रा, मंजिष्ठा, सुवहा, सूक्ष्म एला, पालिंदी, चन्दन, कतक, शिरीष, सिंधुवार और श्लेष्मातक। गिलोय (Giloy) इस विशिष्ट महाकषाय का हिस्सा नहीं है।"
  },
  {
    id: 8,
    question: "विलसन डिसीज किस प्रकार की विषाक्तता में मिलती है।",
    translation: "(Wilson's disease is found in which type of poisoning.)",
    options: [
      { key: "A", text: "A. ताम्र (Copper)" },
      { key: "B", text: "B. जिंक (Zinc)" },
      { key: "C", text: "C. आर्सेनिक (Arsenic)" },
      { key: "D", text: "D. फोस्फोरस (Phosphorus)" }
    ],
    answerKey: "A",
    explanation: "विल्सन डिसीज एक दुर्लभ आनुवंशिक विकार (Genetic disorder) है जिसमें शरीर अतिरिक्त तांबे (Copper) को बाहर नहीं निकाल पाता, जिससे यह यकृत, मस्तिष्क और आंखों में विषैले स्तर तक जमा हो जाता है।"
  },
  {
    id: 9,
    question: "किस प्रकार के सर्प दंश में रक्त का स्कन्दन नहीं हो पाता है।",
    translation: "(Blood does not coagulate in which type of snake bite.)",
    options: [
      { key: "A", text: "A. वाइपर सर्प दंश (Viper snake bite)" },
      { key: "B", text: "B. समुद्री सर्प दंश (Sea snake bite)" },
      { key: "C", text: "C. कोबरा सर्प दंश (Cobra snake bite)" },
      { key: "D", text: "D. सभी (All of above)" }
    ],
    answerKey: "A",
    explanation: "वाइपर (Viper) का विष मुख्य रूप से हेमोटॉक्सिक (Hemotoxic/Vasculotoxic) होता है। यह थक्के जमाने वाले कारकों (Coagulation factors) को नष्ट कर देता है, जिससे रक्त का थक्का (Blood clot) नहीं बन पाता और गंभीर आंतरिक रक्तस्राव होता है।"
  },
  {
    id: 10,
    question: "किस प्रकार की जीर्ण विषाक्तता में Phossy Jaw बीमारी देखने को मिलती है।",
    translation: "(Phossy Jaw disease is found in which type of chronic poisoning.)",
    options: [
      { key: "A", text: "A. जिंक (Zinc)" },
      { key: "B", text: "B. पारद (Mercury)" },
      { key: "C", text: "C. फोस्फोरस (Phosphorus)" },
      { key: "D", text: "D. ताम्र (Copper)" }
    ],
    answerKey: "C",
    explanation: "'फोसी जॉ' (Phossy jaw) जबड़े का एक व्यावसायिक रोग (Osteonecrosis) है। यह ऐतिहासिक रूप से माचिस उद्योग के श्रमिकों में सफेद फास्फोरस (White phosphorus) के धुएं के लगातार सांस में जाने के कारण पाया जाता था।"
  },
  {
    id: 11,
    question: "मद्यपान मे Stage of in-coordination की स्थिति उत्पन्न होने के लिये रक्त में एल्कोहल की मात्रा आवश्यक होती है।",
    translation: "(Blood Alcohol Content in percentage is required in condition of stage of in-coordination in case of alcohol consumption.)",
    options: [
      { key: "A", text: "A. > 250 mg %" },
      { key: "B", text: "B. 150-250 mg %" },
      { key: "C", text: "C. 50 -150 mg %" },
      { key: "D", text: "D. 25-50 mg %" }
    ],
    answerKey: "B",
    explanation: "फॉरेंसिक मेडिसिन में, शराब के नशे की 'असमन्वय की अवस्था' (Stage of incoordination), जिसमें लड़खड़ाती चाल और अस्पष्ट भाषण शामिल है, तब होती है जब रक्त में अल्कोहल की मात्रा (BAC) 150 से 250 mg/dL के बीच होती है।"
  },
  {
    id: 12,
    question: "चिकित्सक द्वारा झूठा चिकित्सा प्रमाण पत्र जारी करने पर भा.द.सं. की किस धारा में दण्ड का प्रावधान किया गया है।",
    translation: "(Issue of false medical certificate by a doctor is punishable under which section of IPC)",
    options: [
      { key: "A", text: "A. Sec. 197 IPC" },
      { key: "B", text: "B. Sec. 87 IPC" },
      { key: "C", text: "C. Sec. 304 A IPC" },
      { key: "D", text: "D. Sec. 338 IPC" }
    ],
    answerKey: "A",
    explanation: "भारतीय दंड संहिता (IPC) की धारा 197 झूठे प्रमाण पत्र (False certificate) जारी करने या हस्ताक्षर करने से संबंधित है। जानबूझकर झूठा मेडिकल सर्टिफिकेट देने वाले डॉक्टर पर इसी धारा के तहत मुकदमा चलाया जा सकता है।"
  },
  {
    id: 13,
    question: "पुलिस जांच CrPC की किस धारा के अन्तर्गत की जाती है।",
    translation: "(Police inquest is held under which section of CrPC.)",
    options: [
      { key: "A", text: "A. 174 CrPC" },
      { key: "B", text: "B. 176 CrPC" },
      { key: "C", text: "C. 178 CrPC" },
      { key: "D", text: "D. 172 CrPC" }
    ],
    answerKey: "A",
    explanation: "आपराधिक प्रक्रिया संहिता (CrPC) की धारा 174 पुलिस को आत्महत्या, हत्या या संदिग्ध मौतों के मामलों में जांच (Police inquest) करने का अधिकार देती है।"
  },
  {
    id: 14,
    question: "गम्भीर क्षत को भा.द.सं. की धारा के अन्तर्गत परिभाषित किया गया है।",
    translation: "(Grevious hurt is defined under which section of IPC.)",
    options: [
      { key: "A", text: "A. Sec. 320 IPC" },
      { key: "B", text: "B. Sec. 44 IPC" },
      { key: "C", text: "C. Sec. 319 IPC" },
      { key: "D", text: "D. Sec. 323 IPC" }
    ],
    answerKey: "A",
    explanation: "भारतीय दंड संहिता (IPC) की धारा 320 'गंभीर क्षत' (Grievous Hurt) को स्पष्ट रूप से परिभाषित करती है। इसमें 8 प्रकार की विशिष्ट चोटों (जैसे फ्रैक्चर, अंग का नुकसान आदि) को शामिल किया गया है।"
  },
  {
    id: 15,
    question: "बलात्कार को भा.द.सं. की किस धारा के अन्तर्गत परिभाषित किया गया है।",
    translation: "(Rape is defined under which section of IPC.)",
    options: [
      { key: "A", text: "A. Sec. 320 IPC" },
      { key: "B", text: "B. Sec. 375 IPC" },
      { key: "C", text: "C. Sec. 351 IPC" },
      { key: "D", text: "D. Sec. 376 IPC" }
    ],
    answerKey: "B",
    explanation: "भारतीय दंड संहिता (IPC) की धारा 375 बलात्कार (Rape) के अपराध का गठन करने वाले कानूनी मापदंडों और सहमति के अभाव को परिभाषित करती है। (जबकि धारा 376 में इसके लिए दंड का प्रावधान है)।"
  },
  {
    id: 16,
    question: "भारतीय लोगों का शिरःसूचकांक सामान्यतया होता है।",
    translation: "(Cephalic index of Indian people is found generally?)",
    options: [
      { key: "A", text: "A. 70-75" },
      { key: "B", text: "B. 75-80" },
      { key: "C", text: "C. 80-85" },
      { key: "D", text: "D. 85-90" }
    ],
    answerKey: "A",
    explanation: "क्लासिक भारतीय फॉरेंसिक एंथ्रोपोलॉजी के अनुसार, भारतीय आबादी का मानक शिरःसूचकांक (Cephalic index) आमतौर पर डोलिकोसेफेलिक (Dolichocephalic - लंबा सिर) श्रेणी में आता है, जो 70 से 75 के बीच होता है।"
  },
  {
    id: 17,
    question: "अहिफेन में मार्फीन का प्रतिशत होता है।",
    translation: "(Morphine percent found in Opium.)",
    options: [
      { key: "A", text: "A. 5%" },
      { key: "B", text: "B. 10%" },
      { key: "C", text: "C. 0.5%" },
      { key: "D", text: "D. 2%" }
    ],
    answerKey: "B",
    explanation: "कच्चे अहिफेन (Opium) में प्राकृतिक रूप से कई अल्कलॉइड होते हैं। इनमें मॉर्फिन (Morphine) सबसे प्रचुर मात्रा में होता है, जो वजन के हिसाब से लगभग 9% से 14% (औसतन 10%) होता है।"
  },
  {
    id: 18,
    question: "गम्भीर मानसिक मन्दता की स्थिति में आई.क्यू. लेबल होता है......।",
    translation: "(In condition of severe mental retardation; IQ level is ...)",
    options: [
      { key: "A", text: "A. 51-70" },
      { key: "B", text: "B. 36-50" },
      { key: "C", text: "C. 20-35" },
      { key: "D", text: "D. < 20" }
    ],
    answerKey: "C",
    explanation: "मानसिक विकलांगता (Intellectual Disability) के मानक मनोरोग वर्गीकरण के अनुसार, 20 और 35 के बीच का IQ स्कोर 'गंभीर मानसिक मंदता' (Severe mental retardation) को दर्शाता है।"
  },
  {
    id: 19,
    question: "यौन अपराधों से बच्चों का संरक्षण अधिनियम भारत में किस वर्ष में लागू किया गया है।",
    translation: "(POCSO act was enacted in India in which year.)",
    options: [
      { key: "A", text: "A. 2014" },
      { key: "B", text: "B. 2012" },
      { key: "C", text: "C. 2005" },
      { key: "D", text: "D. 2010" }
    ],
    answerKey: "B",
    explanation: "प्रोटेक्शन ऑफ चिल्ड्रन फ्रॉम सेक्सुअल ऑफेंसेस (POCSO) एक्ट भारत सरकार द्वारा 2012 में लागू किया गया था, ताकि बच्चों को यौन शोषण से बचाने के लिए मजबूत कानूनी तंत्र स्थापित किया जा सके।"
  },
  {
    id: 20,
    question: "निम्न में से कौनसा ब्लिस्टर कारक वार गैस है।",
    translation: "(Which one of the following is blistering war gas.)",
    options: [
      { key: "A", text: "A. क्लोरिन गैस (Chlorine gas)" },
      { key: "B", text: "B. मस्टर्ड गैस (Mustard gas)" },
      { key: "C", text: "C. एचसीएन गैस (HCN gas)" },
      { key: "D", text: "D. टेबुन (Tabun)" }
    ],
    answerKey: "B",
    explanation: "मस्टर्ड गैस (Sulfur mustard) एक रासायनिक युद्ध एजेंट है जिसे वेसिकेंट या ब्लिस्टरिंग एजेंट (Blistering agent) के रूप में जाना जाता है। इसके संपर्क में आने से त्वचा, आंखों और श्वसन तंत्र पर गंभीर रासायनिक जलन और छाले (Blisters) पड़ जाते हैं।"
  }
];

// Define a type for our student answers state
type StudentAnswers = {
  [questionId: number]: string; // Maps question ID to the selected option key (e.g., 1: "A")
};

export default function Batch22MainPaperMCQs() {
  // State to track which options the student has selected
  const [studentAnswers, setStudentAnswers] = useState<StudentAnswers>({});

  // Function to handle when a student clicks an option
  const handleOptionClick = (questionId: number, selectedKey: string) => {
    // If an answer is already selected for this question, do nothing (locks the choice)
    if (studentAnswers[questionId]) return;

    setStudentAnswers((prev) => ({
      ...prev,
      [questionId]: selectedKey
    }));
  };

  return (
    <HandwrittenCanvas>
      
      {/* Top Navigation */}
      <div className="mb-10 w-full max-w-4xl mx-auto px-4 md:px-0">
        <Link 
          href="/short-notes/agada-tantra/pyq" 
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-60 hover:opacity-100 hover:text-[var(--theme-accent)] transition-all font-semibold text-sm md:text-base font-sans tracking-wide"
        >
          <ArrowLeft className="w-5 h-5" /> Back to PYQ Papers
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12 px-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-black tracking-widest uppercase bg-[var(--theme-accent)] text-white rounded-full shadow-md">
          <BookCheck className="w-3 h-3" /> Batch 22 Solved
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--theme-text)] font-serif tracking-tight mb-4">
          Batch 22 Main Paper
        </h1>
        <p className="text-base md:text-lg text-[var(--theme-text)] opacity-70 font-sans max-w-2xl mx-auto">
          Attempt the questions below. Click an option to lock in your answer and instantly reveal the explanation.
        </p>
      </div>

      {/* Questions Container */}
      <div className="w-full max-w-4xl mx-auto space-y-8 px-4 pb-20">
        {QUESTIONS.map((q) => {
          // Check if the student has answered this question
          const studentSelection = studentAnswers[q.id];
          const isAnswered = !!studentSelection;

          return (
            <div key={q.id} className="relative flex flex-col">
              
              {/* Main Question Card (Bento Style) */}
              <div className="relative z-10 p-6 md:p-8 rounded-[1.5rem] border border-[var(--theme-border)] bg-white dark:bg-[#111111] shadow-sm">
                
                {/* Question Text */}
                <div className="flex gap-3 md:gap-4 mb-6">
                  <span className="text-xl md:text-2xl font-black text-[var(--theme-accent)] font-sans">
                    Q{q.id}.
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--theme-text)] font-serif leading-snug mb-1">
                      {q.question}
                    </h3>
                    <p className="text-sm md:text-base italic text-[var(--theme-text)] opacity-60 font-sans">
                      {q.translation}
                    </p>
                  </div>
                </div>

                {/* Interactive Options List */}
                <div className="space-y-3 mb-2 ml-2 md:ml-10 font-sans">
                  {q.options.map((opt) => {
                    const isCorrectOption = opt.key === q.answerKey;
                    const isSelectedByStudent = opt.key === studentSelection;
                    
                    // Determine styling based on interaction state
                    let highlightClass = "bg-transparent border-[var(--theme-border)]/20 text-[var(--theme-text)] hover:bg-[var(--theme-text)]/5 cursor-pointer";
                    
                    if (isAnswered) {
                      // Once answered, remove cursor pointer
                      highlightClass = "bg-transparent border-[var(--theme-border)]/20 text-[var(--theme-text)] opacity-60 cursor-default";
                      
                      if (isCorrectOption) {
                        // The correct answer always turns green
                        highlightClass = "bg-emerald-100 border-emerald-500 text-emerald-900 dark:bg-emerald-900/50 dark:border-emerald-400 dark:text-emerald-100 shadow-md transform scale-[1.01] z-10";
                      } else if (isSelectedByStudent && !isCorrectOption) {
                        // If the student selected this one and it's wrong, turn it red
                        highlightClass = "bg-rose-100 border-rose-500 text-rose-900 dark:bg-rose-900/50 dark:border-rose-400 dark:text-rose-100 shadow-inner";
                      }
                    }

                    return (
                      <div 
                        key={opt.key} 
                        onClick={() => handleOptionClick(q.id, opt.key)}
                        className={`px-5 py-3 rounded-xl border-2 transition-all duration-300 ease-out font-medium text-base md:text-lg ${highlightClass}`}
                      >
                        {opt.text}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sticky Note Reveal (Explanation Slide-Down) */}
              <div 
                className={`relative z-0 mx-4 md:mx-10 rounded-b-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-inner
                  ${isAnswered ? "max-h-96 opacity-100 translate-y-0 pt-6 pb-5 px-6 border-x border-b border-amber-300 dark:border-amber-700/50 bg-amber-100 dark:bg-amber-900/40" : "max-h-0 opacity-0 -translate-y-10 pt-0 pb-0 px-6 border-transparent bg-amber-100 dark:bg-amber-900/40"}
                `}
              >
                <div className="font-sans text-amber-950 dark:text-amber-100">
                  <span className="inline-block px-2 py-0.5 mb-2 text-xs font-black uppercase tracking-widest bg-amber-400/50 dark:bg-amber-700/80 text-amber-900 dark:text-amber-50 rounded-md">
                    Correct Option: {q.answerKey}
                  </span>
                  <p className="text-sm md:text-base font-medium leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      
    </HandwrittenCanvas>
  );
}
