"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen, ClipboardList } from "lucide-react";

const DRAVYAGUNA_PAPER_1_CH11 = [
  // BATCH 1
  { 
    questionText: "'फार्माकोडायनामिक्स' (Pharmacodynamics) का सबसे सटीक अर्थ निम्नलिखित में से क्या है?", 
    options: ["शरीर औषधि के साथ क्या करता है (What body does to the drug)", "औषधि शरीर पर क्या प्रभाव डालती है (What drug does to the body)", "औषधि का शरीर से बाहर निकलना", "औषधि का अवशोषण"], 
    correctAnswerIndex: 1,
    explanation: "फार्माकोडायनामिक्स के अंतर्गत औषधि के रिसेप्टर पर कार्य, उसके मैकेनिज्म और प्रभाव (Effects) का अध्ययन होता है।",
    reference: "Principles of General Pharmacology",
    ncismRef: "Syllabus Point 11: Pharmacodynamics"
  },
  { 
    questionText: "औषध प्रशासन (Drug Administration) के पश्चात रक्त में पहुँचने वाली 'अपरिवर्तित औषध' (Unchanged drug) की मात्रा या प्रतिशत को भेषज विज्ञान में क्या कहते हैं?", 
    options: ["बायोअवेलेबिलिटी (Bioavailability)", "फर्स्ट-पास मेटाबॉलिज्म (First-pass metabolism)", "हाफ-लाइफ (Half-life)", "क्लीयरेंस (Clearance)"], 
    correctAnswerIndex: 0,
    explanation: "यह सिस्टमिक सर्कुलेशन (रक्त) में पहुंचने वाली औषधि का वह सक्रिय अंश है जो प्रभाव उत्पन्न करने के लिए उपलब्ध होता है।",
    reference: "Principles of General Pharmacology",
    ncismRef: "Syllabus Point 11: Bio-availability"
  },
  { 
    questionText: "औषधियों का मुख्य चयापचय (Metabolism / Biotransformation) शरीर के किस अंग में सर्वाधिक होता है?", 
    options: ["किडनी (वृक्क)", "हृदय", "लिवर (यकृत)", "मस्तिष्क"], 
    correctAnswerIndex: 2,
    explanation: "लिवर में मौजूद CYP450 एंजाइम्स द्वारा अधिकांश औषधियों का रासायनिक परिवर्तन (चयापचय) किया जाता है।",
    reference: "Principles of General Pharmacology",
    ncismRef: "Syllabus Point 11: Pharmacokinetics (ADME)"
  },
  { 
    questionText: "पार्किंसंस रोग (Parkinson's disease) की चिकित्सा में प्रयुक्त होने वाली मुख्य 'एंटी-पार्किंसोनियन' औषधि कौन सी है?", 
    options: ["लेवोडोपा (Levodopa)", "फेनिटोइन (Phenytoin)", "एल्प्राजोलम (Alprazolam)", "फ्लुओक्सेटीन (Fluoxetine)"], 
    correctAnswerIndex: 0,
    explanation: "पार्किंसंस रोग मस्तिष्क में डोपामाइन की कमी से होता है, और लेवोडोपा डोपामाइन का पूर्ववर्ती (Precursor) है।",
    reference: "Drugs Acting on CNS",
    ncismRef: "Syllabus Point 11.1: Antiparkinsonian Drugs"
  },
  { 
    questionText: "एपिलेप्सी (मृगी / Seizures) के उपचार में प्रयुक्त होने वाली 'एंटी-एपिलेप्टिक' (Antiepileptic) औषधि निम्नलिखित में से कौन सी है?", 
    options: ["इबुप्रोफेन (Ibuprofen)", "फेनिटोइन (Phenytoin)", "साल्बुटामोल (Salbutamol)", "रैनिटिडीन (Ranitidine)"], 
    correctAnswerIndex: 1,
    explanation: "फेनिटोइन मस्तिष्क में असामान्य विद्युत गतिविधियों को नियंत्रित कर मृगी के दौरों को रोकती है।",
    reference: "Drugs Acting on CNS",
    ncismRef: "Syllabus Point 11.1: Antiepileptics"
  },
  { 
    questionText: "'लोकल एनेस्थेटिक्स' (Local Anaesthetics) तंत्रिका तंतुओं (Nerve fibers) में किस आयन चैनल को ब्लॉक करके दर्द की अनुभूति को रोकते हैं?", 
    options: ["कैल्शियम चैनल (Ca++)", "पोटैशियम चैनल (K+)", "सोडियम चैनल (Na+)", "क्लोराइड चैनल (Cl-)"], 
    correctAnswerIndex: 2,
    explanation: "लोकल एनेस्थेटिक्स सोडियम आयनों के प्रवाह को रोककर तंत्रिका में दर्द के संकेत (Action potential) को आगे नहीं बढ़ने देते।",
    reference: "Drugs Acting on PNS",
    ncismRef: "Syllabus Point 11.2: Local Anaesthetics"
  },
  { 
    questionText: "डायजेपाम (Diazepam) जैसी 'सेडेटिव-हिप्नोटिक' (Sedative-hypnotics) औषधियां मुख्य रूप से मस्तिष्क के किस रिसेप्टर पर कार्य करती हैं?", 
    options: ["गाबा (GABA) रिसेप्टर", "डोपामाइन रिसेप्टर", "सेरोटोनिन रिसेप्टर", "एड्रीनर्जिक रिसेप्टर"], 
    correctAnswerIndex: 0,
    explanation: "ये दवाएं GABA (मस्तिष्क का मुख्य इन्हिबिटरी न्यूरोट्रांसमीटर) की क्रिया को बढ़ाकर नींद या शांति (Sedation) उत्पन्न करती हैं।",
    reference: "Drugs Acting on CNS",
    ncismRef: "Syllabus Point 11.1: Sedative Hypnotics"
  },
  { 
    questionText: "तीव्र और असहनीय दर्द के प्रबंधन के लिए प्रयुक्त 'ओपिओइड एनाल्जेसिक' (Opioid Analgesic) का उत्कृष्ट उदाहरण कौन सा है?", 
    options: ["एस्पिरिन", "डिक्लोफेनैक", "पेरासिटामोल", "मॉर्फिन (Morphine)"], 
    correctAnswerIndex: 3,
    explanation: "ओपिओइड्स (मॉर्फिन, फेंटेनाइल) सीधे मस्तिष्क के ओपिओइड रिसेप्टर्स पर काम करके तीव्र दर्द निवारक का कार्य करते हैं।",
    reference: "Drugs Acting on CNS",
    ncismRef: "Syllabus Point 11.1: Opioid Analgesics Drugs"
  },
  { 
    questionText: "कोई औषधि जो रिसेप्टर से जुड़कर उसे सक्रिय (Activate) करती है और शरीर में पूर्ण प्रभाव उत्पन्न करती है, उसे क्या कहते हैं?", 
    options: ["एंटागोनिस्ट (Antagonist)", "एगोनिस्ट (Agonist)", "इन्वर्स एगोनिस्ट (Inverse Agonist)", "प्लेसैबो (Placebo)"], 
    correctAnswerIndex: 1,
    explanation: "एगोनिस्ट वह अणु है जो रिसेप्टर से जुड़कर प्राकृतिक लिगैंड (हार्मोन आदि) की तरह ही क्रिया उत्पन्न करता है।",
    reference: "Principles of General Pharmacology",
    ncismRef: "Syllabus Point 11: Principles of drug action"
  },
  { 
    questionText: "'एंटरल मार्ग' (Enteral route) से औषधि देने का सबसे सामान्य तरीका कौन सा है?", 
    options: ["मुख मार्ग (Oral route)", "अन्तःशिरा (Intravenous / IV)", "अन्तःपेशीय (Intramuscular / IM)", "इनहेलेशन (Inhalation)"], 
    correctAnswerIndex: 0,
    explanation: "एंटरल (Enteral) का अर्थ है आंत्र (Intestine) के माध्यम से, जिसमें मुख (Oral) मार्ग सबसे प्रमुख है।",
    reference: "Route of drug administration",
    ncismRef: "Syllabus Point 11: Route of drug administration"
  },

  // BATCH 2
  { 
    questionText: "'फर्स्ट-पास मेटाबॉलिज्म' (First-pass metabolism) से पूरी तरह बचने और 100% बायोअवेलेबिलिटी प्राप्त करने के लिए औषधि को किस मार्ग से देना चाहिए?", 
    options: ["सबक्यूटेनियस (SC)", "ओरल (Oral)", "रेक्टल (Rectal)", "इंट्रामस्क्युलर / इंट्रावेनस (Intravenous - IV)"], 
    correctAnswerIndex: 3,
    explanation: "IV मार्ग से औषधि सीधे रक्त में जाती है, जिससे लिवर का फर्स्ट-पास मेटाबॉलिज्म पूरी तरह बायपास हो जाता है।",
    reference: "Route of drug administration",
    ncismRef: "Syllabus Point 11: Route of drug administration"
  },
  { 
    questionText: "NSAIDs (Non-steroidal anti-inflammatory drugs) वर्ग की औषधियां शरीर में मुख्य रूप से किस एंजाइम के संश्लेषण को रोकती हैं?", 
    options: ["साइक्लोऑक्सीजिनेज (COX)", "एमाइलेज (Amylase)", "लाइपेज (Lipase)", "मोनोएमाइन ऑक्सीडेज (MAO)"], 
    correctAnswerIndex: 0,
    explanation: "NSAIDs COX एंजाइम को अवरुद्ध कर प्रोस्टाग्लैंडीन बनने से रोकते हैं, जिससे सूजन, दर्द और बुखार कम होता है।",
    reference: "Autacoids and Related Drugs",
    ncismRef: "Syllabus Point 11.3: NSAIDs"
  },
  { 
    questionText: "अस्थमा (Asthma) के रोगियों में 'ब्रोंकोडाइलेटर' (श्वासनली को चौड़ा करने वाली) के रूप में प्रयुक्त होने वाली 'साल्बुटामोल' (Salbutamol) किस रिसेप्टर पर कार्य करती है?", 
    options: ["बीटा-1 एगोनिस्ट", "बीटा-2 एगोनिस्ट", "अल्फा-1 एगोनिस्ट", "मस्कैरिनिक एंटागोनिस्ट"], 
    correctAnswerIndex: 1,
    explanation: "बीटा-2 रिसेप्टर्स फेफड़ों (ब्रोंकाई) में होते हैं, जिनके उत्तेजित होने पर श्वासनलिका की मांसपेशियां शिथिल (Relieve) हो जाती हैं।",
    reference: "Drugs for Respiratory Disorders",
    ncismRef: "Syllabus Point 11.4: Bronchodilators"
  },
  { 
    questionText: "सूखी खाँसी (Dry cough) को दबाने के लिए मुख्य रूप से किस वर्ग की औषधियों का प्रयोग किया जाता है?", 
    options: ["एक्सपेक्टोरेंट (Expectorants)", "एंटीट्यूसिव (Antitussives)", "म्यूकोलिटिक्स (Mucolytics)", "ब्रोंकोडाइलेटर (Bronchodilators)"], 
    correctAnswerIndex: 1,
    explanation: "एंटीट्यूसिव (जैसे- कोडीन, डेक्सट्रोमेथॉर्फेन) मस्तिष्क के कफ सेंटर को दबाकर सूखी खांसी को रोकते हैं।",
    reference: "Drugs for Respiratory Disorders",
    ncismRef: "Syllabus Point 11.4: Antitussive Drugs"
  },
  { 
    questionText: "एंजाइना पेक्टोरिस (Angina Pectoris) के तीव्र दौरे (Acute attack) को रोकने के लिए 'नाइट्रोग्लिसरीन' (Nitroglycerin) सामान्यतः किस मार्ग से दी जाती है?", 
    options: ["सबलिंगुअल (जीभ के नीचे)", "ओरल (निगलकर)", "इंट्रामस्क्युलर", "रेक्टल"], 
    correctAnswerIndex: 0,
    explanation: "सबलिंगुअल मार्ग से दवा तुरंत अवशोषित होकर 1 से 2 मिनट में एंजाइना के दर्द से राहत दिलाती है।",
    reference: "Cardiovascular Drugs",
    ncismRef: "Syllabus Point 11.5: Antianginal Drugs"
  },
  { 
    questionText: "उच्च रक्तचाप (Hypertension) को नियंत्रित करने वाली 'ACE Inhibitors' वर्ग की औषधि का उदाहरण कौन सा है?", 
    options: ["एम्लोडिपिन (Amlodipine)", "एटेनोलोल (Atenolol)", "एनालाप्रिल (Enalapril)", "लोसार्टन (Losartan)"], 
    correctAnswerIndex: 2,
    explanation: "एनालाप्रिल, कैप्टोप्रिल आदि 'ACE (Angiotensin-Converting Enzyme) इन्हिबिटर्स' हैं जो रक्त वाहिकाओं को शिथिल कर बीपी कम करते हैं।",
    reference: "Cardiovascular Drugs",
    ncismRef: "Syllabus Point 11.5: Antihypertensive"
  },
  { 
    questionText: "मूत्र की मात्रा बढ़ाने वाली (Diuretics) औषधियाँ मुख्य रूप से शरीर के किस अंग पर कार्य करके जल और सोडियम का उत्सर्जन बढ़ाती हैं?", 
    options: ["हृदय", "लिवर", "फेफड़े", "किडनी (वृक्क / Nephron)"], 
    correctAnswerIndex: 3,
    explanation: "डाययूरेटिक्स किडनी के नेफ्रॉन्स में सोडियम और जल के पुनःअवशोषण (Reabsorption) को रोककर मूत्र की मात्रा बढ़ाते हैं।",
    reference: "Drugs Acting on Kidney",
    ncismRef: "Syllabus Point 11.6: Diuretics"
  },
  { 
    questionText: "'लूप डाययूरेटिक्स' (Loop Diuretics) का सबसे प्रमुख और शक्तिशाली उदाहरण कौन सा है?", 
    options: ["स्पाइरोनोलैक्टोन (Spironolactone)", "फ्यूरोसेमाइड (Furosemide / Lasix)", "हाइड्रोक्लोरोथियाजाइड (HCTZ)", "मैनिटोल (Mannitol)"], 
    correctAnswerIndex: 1,
    explanation: "फ्यूरोसेमाइड लूप ऑफ हेनले (Loop of Henle) पर कार्य करने वाला एक अत्यंत तीव्र डाययूरेटिक है।",
    reference: "Drugs Acting on Kidney",
    ncismRef: "Syllabus Point 11.6: Diuretics"
  },
  { 
    questionText: "रक्ताल्पता (Anemia) की चिकित्सा में रक्त-निर्माण को बढ़ावा देने के लिए 'हेमेटिनिक्स' (Haematinics) के रूप में किसका प्रयोग किया जाता है?", 
    options: ["आयरन, फोलिक एसिड और विटामिन B12", "विटामिन सी और विटामिन डी", "कैल्शियम और पोटैशियम", "स्टैटिन और एस्पिरिन"], 
    correctAnswerIndex: 0,
    explanation: "ये तीनों तत्व हीमोग्लोबिन और लाल रक्त कोशिकाओं (RBCs) के निर्माण के लिए अति आवश्यक हैं।",
    reference: "Drugs Affecting Blood",
    ncismRef: "Syllabus Point 11.7: Haematinics"
  },
  { 
    questionText: "रक्त में कोलेस्ट्रॉल और ट्राइग्लिसराइड के स्तर को कम करने वाली 'हाइपोलिपिडेमिक' (Hypolipidaemic) औषधि कौन सी है?", 
    options: ["वारफेरिन", "एटोरवास्टेटिन (Atorvastatin)", "हेपारिन", "डिगॉक्सिन"], 
    correctAnswerIndex: 1,
    explanation: "स्टेटिन्स (Statins) HMG-CoA रिडक्टेस एंजाइम को रोककर लिवर में कोलेस्ट्रॉल के निर्माण को कम करते हैं।",
    reference: "Drugs Affecting Blood",
    ncismRef: "Syllabus Point 11.7: Hypolipidaemic Drugs"
  },

  // BATCH 3
  { 
    questionText: "रक्त का थक्का बनने से रोकने वाली 'एंटीकोआगुलेंट' (Anticoagulant) औषधि, जिसे मुँह (Oral) द्वारा दिया जाता है, कौन सी है?", 
    options: ["हेपारिन (Heparin)", "वारफेरिन (Warfarin)", "एस्पिरिन (Aspirin)", "विटामिन K"], 
    correctAnswerIndex: 1,
    explanation: "वारफेरिन एक 'ओरल एंटीकोआगुलेंट' है जो विटामिन K के रिसाइकलिंग को रोककर रक्त को पतला रखती है, जबकि हेपारिन इंजेक्शन द्वारा दी जाती है।",
    reference: "Drugs Affecting Blood",
    ncismRef: "Syllabus Point 11.7: Anticoagulants"
  },
  { 
    questionText: "पेट में अतिरिक्त एसिड को उदासीन (Neutralize) करने के लिए प्रयुक्त 'एंटासिड' (Antacids) में मुख्य रूप से किस प्रकार के रसायनों का उपयोग होता है?", 
    options: ["प्रबल अम्ल (Strong Acids)", "दुर्बल क्षार (Weak Bases - e.g., Aluminium/Magnesium hydroxide)", "स्टेरॉयड्स", "एंटीबायोटिक्स"], 
    correctAnswerIndex: 1,
    explanation: "एंटासिड्स मूल रूप से दुर्बल क्षार (Bases) होते हैं जो आमाशय के HCL के साथ रासायनिक प्रतिक्रिया कर उसे न्यूट्रल (उदासीन) कर देते हैं।",
    reference: "Gastrointestinal Drugs",
    ncismRef: "Syllabus Point 11.8: Antacid"
  },
  { 
    questionText: "उल्टी (Vomiting) और मतली (Nausea) को रोकने के लिए प्रयुक्त 'एंटी-एमीटिक' (Antiemetic) औषधि कौन सी है?", 
    options: ["ओमेप्राजोल (Omeprazole)", "लोपरामाइड (Loperamide)", "ओंडांसेट्रॉन (Ondansetron)", "डोमपेरिडोन (Domperidone)"], 
    correctAnswerIndex: 2,
    explanation: "ओंडांसेट्रॉन 5-HT3 (सेरोटोनिन) रिसेप्टर एंटागोनिस्ट है जो उल्टी को प्रभावी ढंग से रोकता है। डोमपेरिडोन भी एंटी-एमीटिक है, परन्तु ओंडांसेट्रॉन सबसे सशक्त उदाहरण है।",
    reference: "Gastrointestinal Drugs",
    ncismRef: "Syllabus Point 11.8: Antiemetics"
  },
  { 
    questionText: "कब्ज (Constipation) दूर करने के लिए आंतों में जल की मात्रा और मल की गति बढ़ाने वाली औषधियों को क्या कहा जाता है?", 
    options: ["एंटी-डायरियल (Antidiarrhoeal)", "लक्जेटिव या लेक्सेटिव्स (Laxatives)", "कार्मिनेटिव्स (Carminatives)", "डाइजेस्टेंट्स (Digestants)"], 
    correctAnswerIndex: 1,
    explanation: "लैक्सेटिव्स (जैसे- इसबगोल, लैक्टुलोज) आंतों की गतिशीलता बढ़ाकर कब्ज से राहत दिलाते हैं।",
    reference: "Gastrointestinal Drugs",
    ncismRef: "Syllabus Point 11.8: Laxatives"
  },
  { 
    questionText: "जीवाणुओं (Bacteria) की वृद्धि को पूर्णतः रोक देने वाली (किन्तु उन्हें सीधे मारने वाली नहीं) औषधियों को क्या कहते हैं?", 
    options: ["बैक्टेरिसाइडल (Bactericidal)", "बैक्टेरियोस्टेटिक (Bacteriostatic)", "फंगीसाइडल (Fungicidal)", "एंटीवायरल (Antiviral)"], 
    correctAnswerIndex: 1,
    explanation: "बैक्टेरियोस्टेटिक (Static = रोकना) औषधियां जीवाणुओं का प्रजनन रोक देती हैं, जबकि बैक्टेरिसाइडल (Cidal = मारना) उन्हें पूरी तरह नष्ट कर देती हैं।",
    reference: "Antibacterial Drugs",
    ncismRef: "Syllabus Point 11.9: Antibacterial Drugs"
  },
  { 
    questionText: "क्षय रोग (Tuberculosis / TB) के प्रथम पंक्ति (First-line) उपचार में शामिल प्रमुख 'एंटी-ट्यूबरकुलर' (Antitubercular) औषधि कौन सी है?", 
    options: ["आइसोनियाज़िड (Isoniazid)", "एज़िथ्रोमाइसिन (Azithromycin)", "डॉक्सीसाइक्लिन (Doxycycline)", "मेट्रोनिडाजोल (Metronidazole)"], 
    correctAnswerIndex: 0,
    explanation: "DOTS रणनीति के तहत आइसोनियाज़िड, रिफाम्पिसिन, पायराज़िनामाइड और एथमब्यूटोल टीबी की फर्स्ट-लाइन दवाएं हैं।",
    reference: "Antibacterial Drugs",
    ncismRef: "Syllabus Point 11.9: Antitubercular Drugs"
  },
  { 
    questionText: "मलेरिया (Malaria) रोग की चिकित्सा और रोकथाम के लिए सर्वाधिक प्रयुक्त होने वाली पारंपरिक 'एंटी-मलेरियल' औषधि कौन सी है?", 
    options: ["क्लोरोक्वीन (Chloroquine)", "एसाइक्लोविर (Acyclovir)", "एम्फोटेरिसिन बी (Amphotericin B)", "स्ट्रेप्टोमाइसिन (Streptomycin)"], 
    correctAnswerIndex: 0,
    explanation: "क्लोरोक्वीन प्लाज्मोडियम परजीवी को नष्ट कर मलेरिया के इलाज में प्रभावी है।",
    reference: "Antimalarial Drugs",
    ncismRef: "Syllabus Point 11.10: Antimalarial Drugs"
  },
  { 
    questionText: "आंतों के कृमियों (Intestinal Worms) को नष्ट करने या बाहर निकालने वाली 'एंटीहेल्मिंटिक' (Antihelmintic) औषधि का उत्तम उदाहरण कौन सा है?", 
    options: ["फ्लुकोनाज़ोल (Fluconazole)", "एल्बेंडाजोल (Albendazole)", "एमोक्सिसिलिन (Amoxicillin)", "रिफाम्पिसिन (Rifampicin)"], 
    correctAnswerIndex: 1,
    explanation: "एल्बेंडाजोल कृमियों के ग्लूकोज अवशोषण को रोककर उन्हें नष्ट कर देती है।",
    reference: "Antihelmintic Drugs",
    ncismRef: "Syllabus Point 11.10: Antihelmintic Drugs"
  },
  { 
    questionText: "फंगस (कवक) संक्रमण के उपचार में प्रयुक्त होने वाली ब्रॉड-स्पेक्ट्रम 'एंटीफंगल' (Antifungal) औषधि कौन सी है?", 
    options: ["सेफ्ट्रिएक्सोन (Ceftriaxone)", "ओसेल्टामिविर (Oseltamivir)", "फ्लुकोनाज़ोल (Fluconazole)", "क्लोरफेनिरामाइन (Chlorpheniramine)"], 
    correctAnswerIndex: 2,
    explanation: "फ्लुकोनाज़ोल एक ट्राईएज़ोल एंटीफंगल है जो कवक की कोशिका झिल्ली (Cell membrane) के निर्माण को रोकता है।",
    reference: "Antifungal Drugs",
    ncismRef: "Syllabus Point 11.10: Antifungal Drugs"
  },
  { 
    questionText: "प्रसिद्ध एंटीबायोटिक 'पेनिसिलिन' (Penicillin) जीवाणुओं को नष्ट करने के लिए मुख्य रूप से किस तंत्र पर कार्य करती है?", 
    options: ["प्रोटीन संश्लेषण को रोकना", "कोशिका भित्ति (Cell wall) के निर्माण को रोकना", "डीएनए प्रतिकृति को रोकना", "राइबोसोम को नष्ट करना"], 
    correctAnswerIndex: 1,
    explanation: "पेनिसिलिन एक बैक्टेरिसाइडल औषधि है जो जीवाणुओं की कोशिका भित्ति (Cell wall) के क्रॉस-लिंकिंग को रोककर उन्हें फाड़ देती है।",
    reference: "Antibacterial Drugs",
    ncismRef: "Syllabus Point 11.9: Antibiotics"
  },

  // BATCH 4
  { 
    questionText: "थायराइड हार्मोन की कमी (Hypothyroidism) के उपचार के लिए 'थायराइड रिप्लेसमेंट थेरेपी' के रूप में कौन सी औषधि दी जाती है?", 
    options: ["लेवोथायरोक्सिन (Levothyroxine)", "मेथिमाजोल (Methimazole)", "प्रोपाइलथियोयूरासिल (PTU)", "ग्लिमेपिराइड (Glimepiride)"], 
    correctAnswerIndex: 0,
    explanation: "लेवोथायरोक्सिन सिंथेटिक थायरोक्सिन (T4) है जो थायराइड ग्रंथि के अल्प कार्य करने पर हार्मोन की भरपाई करता है।",
    reference: "Hormones and Related Drugs",
    ncismRef: "Syllabus Point 11.11: Thyroid Hormone"
  },
  { 
    questionText: "टाइप-2 मधुमेह (Type-2 Diabetes) के उपचार में प्रयुक्त 'ओरल एंटी-डायबिटिक' (Oral Anti-diabetic) औषधि का सर्वमान्य प्रथम विकल्प (First choice) कौन सा है?", 
    options: ["इंसुलिन (Insulin)", "मेटफॉर्मिन (Metformin)", "ग्लिपिज़ाइड (Glipizide)", "एकार्बोस (Acarbose)"], 
    correctAnswerIndex: 1,
    explanation: "मेटफॉर्मिन लिवर में ग्लूकोज के उत्पादन को कम कर और इंसुलिन सेंसिटिविटी बढ़ाकर शुगर को नियंत्रित करती है।",
    reference: "Hormones and Related Drugs",
    ncismRef: "Syllabus Point 11.11: Oral Anti-diabetic"
  },
  { 
    questionText: "गर्भाशय (Uterus) के संकुचन को बढ़ाकर प्रसव (Labor) को प्रेरित करने वाली 'यूटेराइन स्टिम्युलेंट' (Uterine Stimulant) औषधि कौन सी है?", 
    options: ["ऑक्सीटोसिन (Oxytocin)", "प्रोजेस्टेरोन (Progesterone)", "टेरबुटालाइन (Terbutaline)", "एस्ट्रोजन (Estrogen)"], 
    correctAnswerIndex: 0,
    explanation: "ऑक्सीटोसिन गर्भाशय की चिकनी मांसपेशियों को सिकोड़ता है, जिससे प्रसव पीड़ा शुरू होती है और प्रसव के बाद रक्तस्राव रुकता है।",
    reference: "Hormones and Related Drugs",
    ncismRef: "Syllabus Point 11.11: Uterine Stimulants"
  },
  { 
    questionText: "'इंसुलिन' (Insulin) नामक हार्मोन का प्रशासन (Administration) मुख्य रूप से किस मार्ग से किया जाता है?", 
    options: ["ओरल (Oral)", "सबक्यूटेनियस (Subcutaneous / त्वचा के नीचे)", "इंट्रामस्क्युलर (Intramuscular)", "इनहेलेशन (Inhalation)"], 
    correctAnswerIndex: 1,
    explanation: "इंसुलिन एक प्रोटीन हार्मोन है, इसलिए इसे ओरल नहीं दिया जा सकता (पेट में पच जाएगा), इसे सबक्यूटेनियस इंजेक्शन के रूप में दिया जाता है।",
    reference: "Hormones and Related Drugs",
    ncismRef: "Syllabus Point 11.11: Insulin"
  },
  { 
    questionText: "सजीव ऊतकों (Living tissues) जैसे त्वचा पर सूक्ष्मजीवों की वृद्धि रोकने के लिए लगाए जाने वाले रसायनों को क्या कहते हैं?", 
    options: ["एंटीसेप्टिक (Antiseptic)", "डिसइंफेक्टेंट (Disinfectant)", "वैक्सीन (Vaccine)", "एंटीबायोटिक (Antibiotic)"], 
    correctAnswerIndex: 0,
    explanation: "एंटीसेप्टिक (जैसे- डिटॉल, सेवलोन) सजीव ऊतकों पर लगाए जाते हैं, जबकि डिसइंफेक्टेंट (जैसे- फिनाइल) निर्जीव सतहों पर उपयोग होते हैं।",
    reference: "Miscellaneous Drugs",
    ncismRef: "Syllabus Point 11.12: Antiseptics and Disinfectants"
  },
  { 
    questionText: "रक्त का थक्का जमने (Coagulation) की प्रक्रिया में सहायता करने वाला प्रमुख विटामिन कौन सा है, जिसे रक्तस्राव रोकने के लिए दिया जा सकता है?", 
    options: ["विटामिन A", "विटामिन C", "विटामिन E", "विटामिन K"], 
    correctAnswerIndex: 3,
    explanation: "लिवर में प्रोथ्रोम्बिन और अन्य क्लोटिंग फैक्टर्स के निर्माण के लिए विटामिन K अति-आवश्यक है।",
    reference: "Miscellaneous Drugs",
    ncismRef: "Syllabus Point 11.12: Vitamins"
  },
  { 
    questionText: "निर्जलीकरण (Dehydration) होने पर दिए जाने वाले 'नॉर्मल सलाइन' (Normal Saline / NS) IV फ्लूइड में सोडियम क्लोराइड (NaCl) की सांद्रता कितनी होती है?", 
    options: ["0.45%", "0.9%", "3.0%", "5.0%"], 
    correctAnswerIndex: 1,
    explanation: "0.9% NaCl का घोल मानव रक्त प्लाज्मा के 'आइसोटोनिक' (समान सांद्रता वाला) होता है, इसलिए इसे नॉर्मल सलाइन कहते हैं।",
    reference: "Water imbalance and IV fluids",
    ncismRef: "Syllabus Point 11.12: Water imbalance and IV fluids"
  },
  { 
    questionText: "औषध विज्ञान में 'हाफ-लाइफ' (Half-life) का क्या अर्थ होता है?", 
    options: ["वह समय जिसमें दवा का आधा हिस्सा अवशोषित होता है", "वह समय जिसमें रक्त में औषधि की सांद्रता (Concentration) घटकर आधी (50%) रह जाती है", "दवा की एक्सपायरी डेट का आधा समय", "वह समय जिसमें दवा का प्रभाव शुरू होता है"], 
    correctAnswerIndex: 1,
    explanation: "हाफ-लाइफ यह तय करती है कि दवा को कितनी-कितनी देर बाद (Dosing interval) रोगी को दिया जाना चाहिए।",
    reference: "Pharmacokinetics",
    ncismRef: "Syllabus Point 11: Pharmacokinetics"
  },
  { 
    questionText: "जो औषधि शरीर के बाहर निष्क्रिय (Inactive) रूप में होती है, किन्तु शरीर के अंदर चयापचय (Metabolism) के बाद सक्रिय (Active) रूप में बदल जाती है, उसे क्या कहते हैं?", 
    options: ["प्लेसीबो (Placebo)", "प्रो-ड्रग (Prodrug)", "एंटागोनिस्ट (Antagonist)", "टॉक्सिन (Toxin)"], 
    correctAnswerIndex: 1,
    explanation: "प्रो-ड्रग (जैसे- एनालाप्रिल) अवशोषण और वितरण को बेहतर बनाने के लिए निष्क्रिय रूप में दी जाती है, जो लिवर में जाकर सक्रिय रूप (एनालाप्रिलैट) में बदल जाती है।",
    reference: "Principles of drug action",
    ncismRef: "Syllabus Point 11: Principles of drug action"
  },
  { 
    questionText: "भेषज विज्ञान के अनुसार 'टॉलरेंस' (Tolerance) का क्या अर्थ है?", 
    options: ["दवा से एलर्जी हो जाना", "निरंतर उपयोग के बाद दवा का प्रभाव कम हो जाना (उसी प्रभाव के लिए अधिक खुराक की आवश्यकता)", "दो दवाओं का आपस में रिएक्शन", "दवा का तुरंत विषैला प्रभाव दिखाना"], 
    correctAnswerIndex: 1,
    explanation: "जब किसी औषधि का बार-बार सेवन किया जाता है, तो शरीर उसका आदी हो जाता है और समान प्रभाव पाने के लिए डोज़ बढ़ानी पड़ती है (जैसे- मॉर्फिन या नींद की गोलियों में)।",
    reference: "Principles of General Pharmacology",
    ncismRef: "Syllabus Point 11: Principles of General Pharmacology"
  }
];

export default function DravyagunaPaper1Ch11() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_CH11.length) {
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
    DRAVYAGUNA_PAPER_1_CH11.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_CH11[currentQuestion];
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
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_CH11.length}
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
                <Beaker className="w-4 h-4" /> Ch-11 Modern Pharmacology
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_CH11.length}
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
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_CH11.length ? "Finish Exam" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
