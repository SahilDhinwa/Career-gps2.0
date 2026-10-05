"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { HandwrittenCanvas } from "@/components/HandwrittenCanvas";

// ================================================================
// 📝 MCQ DATA ARRAY (BATCH 21) - WITH TABLE FOR Q1
// ================================================================
const QUESTIONS = [
  {
    id: 1,
    question: "क्षारगद का प्रयोग किस विष वेग की चिकित्सा में किया जाता है।",
    translation: "(Ksharagada is indicated in which vega chikitsa.)",
    options: [
      { key: "A", text: "A. छठवें (Sixth)" },
      { key: "B", text: "B. चौथे (Fourth)" },
      { key: "C", text: "C. सातवें (Seventh)" },
      { key: "D", text: "D. तीसरे (Third)" }
    ],
    answerKey: "D",
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
                <th className="p-2">चरक अनुसार (च. चि. 23/45-51)[span_2](start_span)[span_2](end_span)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-900/20">
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">प्रथम[span_3](start_span)[span_3](end_span)</td>
                <td className="p-2">त्वक-मांस गत-दहन, रक्त गत-विस्रावण, हृदयावरण, वमन[span_4](start_span)[span_4](end_span)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">द्वितीय[span_5](start_span)[span_5](end_span)</td>
                <td className="p-2">विरेचन, हृदयावरण इत्यादि[span_6](start_span)[span_6](end_span)</td>
              </tr>
              <tr className="bg-amber-400/20 font-bold">
                <td className="p-2 border-r border-amber-900/30">तृतीय[span_7](start_span)[span_7](end_span)</td>
                <td className="p-2">शोफहर एवं लेखन क्षारागद का पान (नस्य एवं अंजन)[span_8](start_span)[span_8](end_span)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">चतुर्थ[span_9](start_span)[span_9](end_span)</td>
                <td className="p-2">गोमय रस का कपित्थ पत्र रस-मधु-सर्पि के साथ पान[span_10](start_span)[span_10](end_span)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">पंचम[span_11](start_span)[span_11](end_span)</td>
                <td className="p-2">कपिकच्छु एवं शिरीष पत्र रस का नेत्रों में आश्व्योतन, अंजन एवं नस्य[span_12](start_span)[span_12](end_span)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">षष्ठम[span_13](start_span)[span_13](end_span)</td>
                <td className="p-2">संज्ञास्थापन औषधियों का प्रयोग[span_14](start_span)[span_14](end_span)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">सप्तम[span_15](start_span)[span_15](end_span)</td>
                <td className="p-2">विषपानं दष्टानां विषपीते दशनं चान्ते (विपरीत विष पान)[span_16](start_span)[span_16](end_span)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold border-r border-amber-900/30">अष्टम[span_17](start_span)[span_17](end_span)</td>
                <td className="p-2">पलाश बीज चूर्ण + अर्द्धभाग मयूर पित्त का पान अथवा बृहतिफाणित ग्रहधूम, गोपित्त एवं निम्ब पत्र रस का पान[span_18](start_span)[span_18](end_span)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 2,
    question: "निम्न में से विष वृद्धि का हेतु नहीं है।",
    translation: "(Which is not a cause of visha vruddhi among the followings?)",
    options: [
      { key: "A", text: "A. क्षुत (Kshut)" },
      { key: "B", text: "B. अजीर्ण (Ajeerna)" },
      { key: "C", text: "C. कफ वृद्धि (Kapha vruddhi)" },
      { key: "D", text: "D. तिल पुष्प गन्ध (Smell of tila pushpa)" }
    ],
    answerKey: "C",
    explanation: "तीव्र भूख (Kshut), अजीर्ण (Indigestion), और तिल के फूलों की गंध (Tila pushpa gandha) शरीर में विष को बढ़ाते हैं। पित्त दोष के बढ़ने से विष की तीव्रता बढ़ती है, लेकिन कफ वृद्धि (Kapha vruddhi) सामान्यतः विष वृद्धि का कारण नहीं है।"
  },
  {
    id: 3,
    question: "निम्न में से किस गुण के अतिरिक्त विष एवं मद्य में समान गुण पाये जाते हैं।",
    translation: "(Guna of Madya is similar as visha except.)",
    options: [
      { key: "A", text: "A. व्यवायी (Vyavaayi)" },
      { key: "B", text: "B. विशद (Vishada)" },
      { key: "C", text: "C. लघु (Laghu)" },
      { key: "D", text: "D. रस (Rasa)" }
    ],
    answerKey: "D",
    explanation: "विष (Poison) और मद्य (Alcohol) दोनों में व्यवायी (rapidly spreading) और लघु (lightness) जैसे गुण समान होते हैं। लेकिन वे 'रस' (Taste) में भिन्न होते हैं। विष को अव्यक्त/अनिर्देश्य रस (Tasteless) माना जाता है, जबकि मद्य का रस प्रायः अम्ल (Acidic/Sour) होता है।"
  },
  {
    id: 4,
    question: "........देहादशेषं यदनिर्गतं तत्........... किसके लिये कहा गया है?",
    translation: "(.......Dehadashesham yadanirgatam tat..... is said for ?)",
    options: [
      { key: "A", text: "A. गर विष (Gara visha)" },
      { key: "B", text: "B. शंका विष (Shanka visha)" },
      { key: "C", text: "C. दूषी विष (Dooshi visha)" },
      { key: "D", text: "D. अलर्क विष (Alark visha)" }
    ],
    answerKey: "C",
    explanation: "यह सुश्रुत संहिता में वर्णित 'दूषी विष' (Dooshi Visha) की शास्त्रीय परिभाषा है। यह वह विष है जो शरीर से पूरी तरह बाहर नहीं निकल पाता और शरीर के ऊतकों (Tissues) में सुप्त अवस्था (Dormant) में पड़ा रहता है।"
  },
  {
    id: 5,
    question: "कालान्तर विपाकि विषं ............ किसके लिये कहा गया है।",
    translation: "(Kalaantara vipaaki visham................... is said for ?)",
    options: [
      { key: "A", text: "A. शंका विष (Shanka visha)" },
      { key: "B", text: "B. गर विष (Gara visha)" },
      { key: "C", text: "C. दूषी विष (Dooshi visha)" },
      { key: "D", text: "D. अलर्क विष (Alark visha)" }
    ],
    answerKey: "B",
    explanation: "'कालान्तर विपाकि' का अर्थ है वह पदार्थ जो पचने के बाद लंबे समय (Prolonged period) के बाद अपना जहरीला प्रभाव दिखाता है। आचार्यों ने इस शब्द का प्रयोग मुख्य रूप से 'गर विष' (Concocted/Artificial poison) के लिए किया है।"
  },
  {
    id: 6,
    question: "दशांग अगद का आचार्य वाग्भट्ट ने किस विषाक्तता में निर्देश किया है।",
    translation: "(Dashaanga agada is indicated by aacaarya baagbhatt in which poisoning.)",
    options: [
      { key: "A", text: "A. सर्प विष (Sarpa visha)" },
      { key: "B", text: "B. सर्व कीट विष (Sarva keet visha)" },
      { key: "C", text: "C. वृश्चिक विष (Vrishchika visha)" },
      { key: "D", text: "D. लूता विष (Loota visha)" }
    ],
    answerKey: "B",
    explanation: "आचार्य वाग्भट्ट ने 'दशांग अगद' (दस विशिष्ट जड़ी-बूटियों का योग) का निर्देश एक ब्रॉड-स्पेक्ट्रम एंटीडोट (Broad-spectrum antidote) के रूप में सभी प्रकार के कीट दंश (Sarva Keeta Visha) के लिए किया है।"
  },
  {
    id: 7,
    question: "टंकण का प्रतिविष के रूप में प्रयोग किया जाता है।",
    translation: "(Tankana is used as antidote in which poising.)",
    options: [
      { key: "A", text: "A. भल्लातक (Bhallataka)" },
      { key: "B", text: "B. वत्सनाभ (Vatsnaabha)" },
      { key: "C", text: "C. कुचला (Kuchalaa)" },
      { key: "D", text: "D. लांगली (Laangali)" }
    ],
    answerKey: "B",
    explanation: "टंकण भस्म (Purified Borax) वत्सनाभ (Aconite) विषाक्तता के गंभीर कार्डियक डिप्रेसेंट (Cardiac depressant) प्रभावों को बेअसर करने में अत्यधिक प्रभावी है, जो इसे आयुर्वेद का प्रमुख प्रतिविष (Antidote) बनाता है।"
  },
  {
    id: 8,
    question: "आर्सेनिक की घातक मात्रा है।",
    translation: "(Fatal dose of Arsenic is......)",
    options: [
      { key: "A", text: "A. 120-200 मि.ग्रा. (120-200 Mg)" },
      { key: "B", text: "B. 100-120 मि.ग्रा. (100-120 Mg)" },
      { key: "C", text: "C. 250-500 मि.ग्रा. (250-500 Mg)" },
      { key: "D", text: "D. 30-80 मि.ग्रा. (30-80 Mg)" }
    ],
    answerKey: "A",
    explanation: "फॉरेंसिक टॉक्सिकोलॉजी (Forensic Toxicology) में, एक औसत वयस्क के लिए आर्सेनिक ट्राईऑक्साइड (Arsenic Trioxide) की मानक घातक मात्रा (Fatal dose) 120 से 200 मिलीग्राम (Mg) मानी जाती है।"
  },
  {
    id: 9,
    question: "टोसिस चिह्न किस प्रकार के सर्प दंश में पाया जाता है।",
    translation: "(Ptosis sign present in which type of snake bite.)",
    options: [
      { key: "A", text: "A. तंत्रिका प्रभावी (Neurotoxic)" },
      { key: "B", text: "B. वाहिका प्रभावी (Vasculotoxic)" },
      { key: "C", text: "C. पेशी प्रभावी (Musculotoxic)" },
      { key: "D", text: "D. किसी में नहीं (None of these)" }
    ],
    answerKey: "A",
    explanation: "टोसिस (Ptosis - पलकों का गिरना) एक न्यूरोटॉक्सिक (Neurotoxic) सर्प दंश (जैसे कोबरा या क्रेट) का प्रारंभिक न्यूरोलॉजिकल लक्षण है। यह पलकों की गति को नियंत्रित करने वाली क्रेनियल नर्व्स (Cranial nerves) के लकवाग्रस्त (Paralysis) होने के कारण होता है।"
  },
  {
    id: 10,
    question: "अहिफेन विषाक्तता में मृत्यु का कारण है।",
    translation: "(Cause of death in opium poisoning is-)",
    options: [
      { key: "A", text: "A. हार्ट अटैक (Heart failure)" },
      { key: "B", text: "B. श्वासावरोध (Respiratory failure)" },
      { key: "C", text: "C. तीव्र कोष्ठ बद्धता (Severe constipation)" },
      { key: "D", text: "D. मस्तिष्क शोथ (Meningitis)" }
    ],
    answerKey: "B",
    explanation: "अहिफेन (Opium) एक तीव्र सेंट्रल नर्वस सिस्टम डिप्रेसेंट (CNS depressant) है। इसकी घातक मात्रा (Overdose) ब्रेनस्टेम में स्थित रेस्पिरेटरी सेंटर को लकवाग्रस्त कर देती है, जिससे श्वासावरोध (Respiratory failure) से मृत्यु हो जाती है।"
  },
  {
    id: 11,
    question: "भा.द.सं. मे मृत्यु को परिभाषित किया गया है।",
    translation: "(Death is define under which IPC)",
    options: [
      { key: "A", text: "A. IPC 46" },
      { key: "B", text: "B. IPC 44" },
      { key: "C", text: "C. IPC 454" },
      { key: "D", text: "D. IPC 49" }
    ],
    answerKey: "A",
    explanation: "भारतीय दंड संहिता (IPC) की धारा 46 में 'मृत्यु' (Death) को कानूनी रूप से परिभाषित किया गया है, जिसका अर्थ है एक इंसान की मृत्यु जब तक कि संदर्भ से कुछ और प्रतीत न हो।"
  },
  {
    id: 12,
    question: "मृत्योत्तर पेशी आकर्ष सर्वप्रथम उत्पन्न होता है।",
    translation: "(Rigor mortis initially develop in which organ.)",
    options: [
      { key: "A", text: "A. उर्ध्व शाखा में (Upper limb)" },
      { key: "B", text: "B. आई लिड (Eye lid)" },
      { key: "C", text: "C. जबड़े में (Jaw)" },
      { key: "D", text: "D. अग्नाशय में (Pancreas)" }
    ],
    answerKey: "B",
    explanation: "निस्टेन के नियम (Nysten's Law) के अनुसार, मृत्योत्तर पेशी आकर्ष (Rigor mortis) सबसे पहले अनैच्छिक मांसपेशियों (जैसे हृदय) में प्रकट होता है। ऐच्छिक (Voluntary) मांसपेशियों में, यह सबसे पहले पलकों (Eyelids) की छोटी मांसपेशियों को प्रभावित करता है और फिर जबड़े, गर्दन, धड़ और अंगों तक फैलता है।"
  },
  {
    id: 13,
    question: "गम्भीर क्षत भा.द.सं. में परिभाषित किया गया है।",
    translation: "(Grievous hurt defined under section.....)",
    options: [
      { key: "A", text: "A. IPC 319" },
      { key: "B", text: "B. IPC 320" },
      { key: "C", text: "C. IPC 324" },
      { key: "D", text: "D. IPC 299" }
    ],
    answerKey: "B",
    explanation: "भारतीय दंड संहिता (IPC) की धारा 320 में 'गंभीर क्षत' (Grievous Hurt) को स्पष्ट रूप से परिभाषित किया गया है, जिसमें 8 विशिष्ट प्रकार की गंभीर चोटें शामिल हैं (जैसे दृष्टि का स्थायी नुकसान, हड्डी टूटना आदि)।"
  },
  {
    id: 14,
    question: "पी.सी.पी.एन.डी.टी. एक्ट भारत में लागू किया गया।",
    translation: "(PCPNDT act enacted in India.)",
    options: [
      { key: "A", text: "A. 1994" },
      { key: "B", text: "B. 1971" },
      { key: "C", text: "C. 2001" },
      { key: "D", text: "D. 1998" }
    ],
    answerKey: "A",
    explanation: "प्री-कंसेप्शन एंड प्री-नैटल डायग्नोस्टिक टेक्निक्स (PCPNDT) एक्ट भारत की संसद द्वारा 1994 में लागू किया गया था। इसका मुख्य उद्देश्य प्रसव पूर्व लिंग निर्धारण पर प्रतिबंध लगाना और कन्या भ्रूण हत्या (Female foeticide) को रोकना है।"
  },
  {
    id: 15,
    question: "ड्रग्स एन्ड कास्मेटिक नियम 1945 के शेड्यूल E में रखा गया है।",
    translation: "(Schedule E of Drugs and cosmetic rules 1945 includes.)",
    options: [
      { key: "A", text: "A. Vaccine & Sera" },
      { key: "B", text: "B. Anti histamines and antibiotics" },
      { key: "C", text: "C. Poisons" },
      { key: "D", text: "D. Fungicides" }
    ],
    answerKey: "C",
    explanation: "ड्रग्स एंड कॉस्मेटिक्स रूल्स, 1945 के शेड्यूल E (Schedule E) में विशेष रूप से आयुर्वेद, सिद्ध और यूनानी चिकित्सा प्रणालियों के तहत जहरीले पदार्थों (Poisonous substances) की सूची रखी गई है।"
  },
  {
    id: 16,
    question: "शतस्यैकोत्र जीवति ।",
    translation: "(One among hundred people survives in case of -)",
    options: [
      { key: "A", text: "A. सर्प विष (Sarpa visha)" },
      { key: "B", text: "B. विष संकट (Visha sankat)" },
      { key: "C", text: "C. सर्पांगाभिहत (Sarpangabhihata)" },
      { key: "D", text: "D. शंका विष (Shanka visha)" }
    ],
    answerKey: "B",
    explanation: "'शतस्यैकोत्र जीवति' वाग्भट्ट द्वारा 'विष संकट' (Visha Sankat) का वर्णन करने के लिए इस्तेमाल किया गया एक शास्त्रीय वाक्य है। इसका अर्थ है कि जब विष, ऋतु और शरीर की प्रकृति जैसे कारक एक साथ विष को बढ़ाते हैं, तो स्थिति इतनी घातक हो जाती है कि सौ में से केवल एक व्यक्ति ही जीवित बच पाता है।"
  },
  {
    id: 17,
    question: "कड़वे बादामवत गन्ध मिलती है।",
    translation: "(Bitter almond like smell occurs in which poisoning.)",
    options: [
      { key: "A", text: "A. CO Poisoning" },
      { key: "B", text: "B. Cyanide Poisoning" },
      { key: "C", text: "C. Aspirin Poisoning" },
      { key: "D", text: "D. Organophosphate Poisoning" }
    ],
    answerKey: "B",
    explanation: "तीव्र साइनाइड विषाक्तता (Acute Cyanide Poisoning) का एक प्रमुख और स्पष्ट संकेत पीड़ित की सांसों में कड़वे बादाम (Bitter almonds) की विशेष गंध आना है। हालांकि, आनुवंशिकी (Genetics) के कारण हर कोई इस गंध को नहीं पहचान सकता।"
  },
  {
    id: 18,
    question: "रासायनिक संगठन के रूप में कोल्चिसिन पाया जाता है।",
    translation: "(Colchicine is the chemical constituent present in)",
    options: [
      { key: "A", text: "A. अर्क (Arka)" },
      { key: "B", text: "B. लांगली (Langali)" },
      { key: "C", text: "C. गुन्जा (Gunja)" },
      { key: "D", text: "D. भल्लातक (Bhallatak)" }
    ],
    answerKey: "B",
    explanation: "लांगली (Gloriosa superba) में प्राकृतिक रूप से अत्यधिक विषैला अल्कलॉइड कोल्चिसिन (Colchicine) पाया जाता है। यह एक एंटीमाइटोटिक टॉक्सिन (Antimitotic toxin) के रूप में कार्य करता है, जिससे गंभीर गैस्ट्रोइंटेस्टाइनल संकट (GI distress) होता है।"
  },
  {
    id: 19,
    question: "आचार्य सुश्रुत अनुसार कन्द विषों की संख्या है।",
    translation: "(Total number of Kanda visha as per aachaarya sushrut.)",
    options: [
      { key: "A", text: "A. 12" },
      { key: "B", text: "B. 13" },
      { key: "C", text: "C. 8" },
      { key: "D", text: "D. 5" }
    ],
    answerKey: "B",
    explanation: "सुश्रुत संहिता के कल्प स्थान में आचार्य सुश्रुत के अनुसार, कन्द विषों (Tuberous or bulbous plant poisons) के विशेष रूप से 13 प्रकार बताए गए हैं।"
  },
  {
    id: 20,
    question: "रथ, हल, छत्र, स्वस्तिक एवं अंकुश आदि चिह्नों का धारण करने वाले सर्प होते हैं।",
    translation: "(Rath, Hala, chhatra, swastika and ankush marks found in ...)",
    options: [
      { key: "A", text: "A. मण्डली (Mandali)" },
      { key: "B", text: "B. दर्वीकर (Darvikara)" },
      { key: "C", text: "C. वैकरंज (Vaikaranja)" },
      { key: "D", text: "D. राजिमान (Raajimaana)" }
    ],
    answerKey: "B",
    explanation: "आयुर्वेदिक टॉक्सिकोलॉजी में, दर्वीकर सर्पों (Darvikara - फन वाले सांप जैसे कोबरा) की फन (Hood) पर विशिष्ट चिह्न होते हैं जो रथ (Chariot wheel), हल (Plow), छत्र (Umbrella) या स्वस्तिक (Swastika) के समान दिखते हैं।"
  }
];

type StudentAnswers = {
  [questionId: number]: string;
};

export default function Batch21MainPaperMCQs() {
  const [studentAnswers, setStudentAnswers] = useState<StudentAnswers>({});

  const handleOptionClick = (questionId: number, selectedKey: string) => {
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
          <Sparkles className="w-3 h-3" /> Batch 21 Solved
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--theme-text)] font-serif tracking-tight mb-4">
          Batch 21 Main Paper
        </h1>
        <p className="text-base md:text-lg text-[var(--theme-text)] opacity-70 font-sans max-w-2xl mx-auto">
          Attempt the questions below. Click an option to lock in your answer and instantly reveal the explanation.
        </p>
      </div>

      {/* Questions Container */}
      <div className="w-full max-w-4xl mx-auto space-y-8 px-4 pb-20">
        {QUESTIONS.map((q) => {
          const studentSelection = studentAnswers[q.id];
          const isAnswered = !!studentSelection;

          return (
            <div key={q.id} className="relative flex flex-col">
              
              {/* Main Question Card */}
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

                {/* Options List */}
                <div className="space-y-3 mb-2 ml-2 md:ml-10 font-sans">
                  {q.options.map((opt) => {
                    const isCorrectOption = opt.key === q.answerKey;
                    const isSelectedByStudent = opt.key === studentSelection;
                    
                    let highlightClass = "bg-transparent border-[var(--theme-border)]/20 text-[var(--theme-text)] hover:bg-[var(--theme-text)]/5 cursor-pointer";
                    
                    if (isAnswered) {
                      highlightClass = "bg-transparent border-[var(--theme-border)]/20 text-[var(--theme-text)] opacity-60 cursor-default";
                      
                      if (isCorrectOption) {
                        highlightClass = "bg-emerald-100 border-emerald-500 text-emerald-900 dark:bg-emerald-900/50 dark:border-emerald-400 dark:text-emerald-100 shadow-md transform scale-[1.01] z-10";
                      } else if (isSelectedByStudent && !isCorrectOption) {
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

              {/* Sticky Note Reveal */}
              <div 
                className={`relative z-0 mx-4 md:mx-10 rounded-b-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-inner
                  ${isAnswered ? "max-h-[800px] opacity-100 translate-y-0 pt-6 pb-5 px-6 border-x border-b border-amber-300 dark:border-amber-700/50 bg-amber-100 dark:bg-amber-900/40" : "max-h-0 opacity-0 -translate-y-10 pt-0 pb-0 px-6 border-transparent bg-amber-100 dark:bg-amber-900/40"}
                `}
              >
                <div className="font-sans text-amber-950 dark:text-amber-100">
                  <span className="inline-block px-2 py-0.5 mb-3 text-xs font-black uppercase tracking-widest bg-amber-400/50 dark:bg-amber-700/80 text-amber-900 dark:text-amber-50 rounded-md">
                    Correct Option: {q.answerKey}
                  </span>
                  <div className="text-sm md:text-base font-medium leading-relaxed">
                    {q.explanation}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      
    </HandwrittenCanvas>
  );
}
