"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function SwasthVrittaChapter3() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        NOTEBOOK PAPER WRAPPER (Strict 32px Ruled Grid + 56px Margin)
        =========================================================
      */}
      <div
        className="w-full min-h-screen relative overflow-hidden"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          backgroundImage: `
            linear-gradient(90deg, transparent 54px, rgba(239, 68, 68, 0.5) 54px, rgba(239, 68, 68, 0.5) 56px, transparent 56px, transparent 58px, rgba(239, 68, 68, 0.25) 58px, rgba(239, 68, 68, 0.25) 59px, transparent 59px),
            repeating-linear-gradient(transparent, transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundAttachment: "local",
          backgroundPosition: "0 0",
        }}
      >
        {/* 
          CONTENT CONTAINER 
          pl-[72px] aligns all content neatly to the right of the double red margin line.
        */}
        <div className="pl-[72px] sm:pl-[80px] pr-4 sm:pr-8 py-[32px] w-full relative text-[var(--theme-text)]">
          
          {/* Pinned Subject Badge */}
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2.5 py-0.5 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-[var(--theme-bg)]/90 text-[var(--theme-text)] z-10 leading-tight"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Swasth Vritta<br/><NAccent>Paper 1 • Ch 3</NAccent>
          </div>

          {/* Top Navigation */}
          <div className="mb-[32px] flex items-center h-[32px]">
            <Link 
              href="/short-notes/swasth-vritta" 
              className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-xs md:text-base font-sans"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Swasth Vritta Hub
            </Link>
          </div>

          {/* Notebook Top Title Header */}
          <div className="mb-[24px] pb-[6px] border-b-[3px] border-double border-red-500/50 text-center pr-16 sm:pr-0">
            <HandwrittenTitle>
              अध्याय 3: रात्रिचर्या (Ratricharya)
            </HandwrittenTitle>
          </div>

          {/* ========================================================= */}
          {/* TOP EXAM WEIGHTAGE & HIGH-YIELD ALERT BOX                 */}
          {/* ========================================================= */}
          <div className="mb-[32px] border-2 border-dashed border-[var(--theme-accent)] p-3.5 bg-[var(--theme-accent)]/10 text-sm md:text-base shadow-xs">
            <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline mb-1">
              📌 परीक्षा की दृष्टि से टिप (Exam Weightage &amp; Most Important Questions):
            </p>
            <p className="leading-[28px] m-0 font-medium">
              रात्रिचर्या से आपके <NText bold>पेपर-1</NText> में <NAccent bold>5 नंबर का एक Short Answer Question (SAQ)</NAccent> और <NAccent bold>2 MCQs</NAccent> निश्चित रूप से आते हैं। इसमें <NAccent bold>&apos;निद्रा के प्रकार&apos;</NAccent>, <NAccent bold>&apos;दिवास्वप्न के नियम&apos;</NAccent> और <NAccent bold>&apos;सर्कैडियन रिदम / स्लीप डिसऑर्डर&apos;</NAccent> सबसे महत्वपूर्ण प्रश्न हैं!
            </p>
          </div>

          {/* रात्रिचर्या की परिभाषा Box */}
          <div className="mb-[32px] border-2 border-[var(--theme-text)]/60 p-3 bg-[var(--theme-bg)]/50 text-sm md:text-base">
            <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)] underline">
              रात्रिचर्या की परिभाषा:
            </p>
            <p className="leading-[32px] m-0 font-medium">
              सूर्यास्त (शाम) के बाद से लेकर अगली सुबह सूर्योदय (ब्रह्म मुहूर्त) से पूर्व तक स्वस्थ रहने के लिए जिन नियमों, आहार और विहार का पालन किया जाता है, उसे <NAccent bold>&apos;रात्रिचर्या&apos;</NAccent> कहते हैं। रात्रिचर्या के तीन सबसे मुख्य स्तंभ हैं: <NText bold>(1) रात्रि भोजन, (2) निद्रा (नींद), और (3) ब्रह्मचर्य।</NText>
            </p>
          </div>

          {/* ========================================================= */}
          {/* 1. रात्रि भोजन विधि और स्वास्थ्य से संबंध                    */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              1.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              रात्रि भोजन विधि और स्वास्थ्य से संबंध (Ratri Bhojana Vidhi and its Relation to Health)
            </h3>

            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base space-y-2">
              <p className="leading-[28px] m-0">
                (1) <NAccent bold>रात्रि भोजन का सही समय:</NAccent> रात्रि का भोजन रात्रि के प्रथम प्रहर में (सूर्यास्त के बाद लगभग 1 से 2 घंटे के भीतर या सोने से कम से कम 2–3 घंटे पहले) कर लेना चाहिए।
              </p>

              <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                (2) भोजन की मात्रा और स्वरूप:
              </p>
              <p className="leading-[28px] m-0 pl-3">
                • रात में सूर्य की किरणें न होने के कारण हमारी जठराग्नि (पाचन शक्ति) दिन की तुलना में मंद होती है। इसलिए रात्रि का भोजन दिन के भोजन की अपेक्षा <NText bold>हल्का (लघु), सुपाच्य, कोष्ण (गर्म)</NText> और मात्रा में थोड़ा कम (<NText bold>अल्प मात्रा / पेट से एक चौथाई कम</NText>) होना चाहिए।
              </p>
              <p className="leading-[28px] m-0 pl-3">
                • रात्रि भोजन ऐसा होना चाहिए जो <NAccent bold>&apos;हृद्य&apos;</NAccent> (हृदय और मन को प्रिय लगने वाला) हो और वात तथा कफ को न बढ़ाने वाला हो।
              </p>

              <div className="border border-red-500/40 p-2.5 bg-[var(--theme-bg)]/60">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                  (3) रात्रि में त्याज्य आहार (रात को क्या नहीं खाना चाहिए):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>दही (दधि):</NAccent> रात में दही खाना सर्वथा वर्जित है (<NText bold>&ldquo;नक्तं दधि न भुञ्जीत&rdquo;</NText>), क्योंकि यह कफ और पित्त को बढ़ाकर स्रोतों में अवरोध (चैनल ब्लॉकेज) पैदा करता है।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>अन्य भारी पदार्थ:</NAccent> सत्तू (सक्तु), तिल से बने पदार्थ (तिल पिष्ट), उड़द की दाल, भारी मिठाइयां और बासी या ठंडा भोजन रात में नहीं करना चाहिए।
                </p>
              </div>

              <p className="leading-[28px] m-0">
                (4) <NAccent bold>भोजन के बाद के नियम:</NAccent> रात्रि भोजन के तुरंत बाद कभी भी सोना नहीं चाहिए। भोजन के बाद <NText bold>&apos;शतपवली&apos;</NText> (लगभग 100 कदम धीरे-धीरे टहलना) करनी चाहिए और कुछ देर बाईं करवट (<NText bold>वाम पार्श्व</NText>) लेटना चाहिए, क्योंकि पेट (आमाशय) बाईं ओर होता है और इससे पाचन अच्छी तरह होता है।
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. रात्रि शयन विधि और सोने का सही समय                      */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              2.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              रात्रि शयन विधि और सोने का सही समय (Ratri Shayana Vidhi in Relation to Proper Time of Sleep)
            </h3>

            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base space-y-2">
              <p className="leading-[28px] m-0">
                (1) <NAccent bold>सोने का उचित समय:</NAccent> रात्रि का पहला प्रहर बीत जाने पर (जब भोजन पचने की प्रक्रिया आगे बढ़ जाए, लगभग रात 9:30 से 10:30 बजे के बीच) सात्विक विचार रखते हुए और ईश्वर का स्मरण करते हुए सो जाना चाहिए।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NAccent bold>शयन कक्ष और शैय्या (बिस्तर) के नियम:</NAccent> बिस्तर सुखद, कोमल, घुटनों के बराबर ऊंचा (<NText bold>जानुतुल्य</NText>), समतल और साफ-सुथरी चादर से ढका होना चाहिए। टूटी हुई या बहुत छोटी-बड़ी खाट पर नहीं सोना चाहिए।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/30 pb-1 mb-1">
                    (3) सिर रखने की दिशा (Direction of Head):
                  </p>
                  <p className="leading-[28px] m-0">
                    • सोते समय सिर हमेशा <NText bold>पूर्व (East)</NText> या <NText bold>दक्षिण (South)</NText> दिशा की ओर होना चाहिए।
                  </p>
                  <p className="leading-[28px] m-0">
                    • <NAccent bold>पूर्व दिशा</NAccent> में सिर रखकर सोने से ज्ञान और मेधा बढ़ती है, तथा <NAccent bold>दक्षिण दिशा</NAccent> में सिर रखकर सोने से आयु और स्वास्थ्य की वृद्धि होती है (यह पृथ्वी के चुंबकीय क्षेत्र - Magnetic field के अनुकूल है)। उत्तर या पश्चिम दिशा में सिर रखकर नहीं सोना चाहिए।
                  </p>
                </div>

                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/30 pb-1 mb-1">
                    (4) सोने की मुद्रा (Posture):
                  </p>
                  <p className="leading-[28px] m-0">
                    • <NAccent bold>वाम पार्श्व शयन (बाईं करवट सोना):</NAccent> स्वस्थ व्यक्ति को मुख्य रूप से बाईं करवट लेकर सोना चाहिए। इससे जठराग्नि प्रदीप्त रहती है और भोजन का पाचन सुखपूर्वक होता है तथा एसिड रिफ्लक्स (अम्लपित्त) नहीं होता।
                  </p>
                  <p className="leading-[28px] m-0">
                    • कभी भी उल्टा (पेट के बल - <NText bold>अवाक्शिर</NText>) या पूरी तरह नग्न होकर या गीले पैरों के साथ नहीं सोना चाहिए।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. निद्रा और स्वास्थ्य का संबंध                            */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              3.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              निद्रा और स्वास्थ्य का संबंध (Relation between Nidra and Health)
            </h3>

            {/* निद्रा की उत्पत्ति */}
            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)] underline">
                A. निद्रा की उत्पत्ति (परिभाषा):
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;यदा तु मनसि क्लान्ते कर्मात्मानः क्लमान्विताः। विषयेभ्यो निवर्तन्ते तदा स्वपिति मानवः।।&rdquo;
              </p>
              <p className="leading-[28px] m-0">
                अर्थात् जब मन थक जाता है और काम करने वाली सभी ज्ञानेंद्रियां व कर्मेंद्रियां भी थक कर अपने-अपने विषयों (देखने, सुनने, छूने आदि) से हट जाती हैं, तब मनुष्य को नींद आ जाती है।
              </p>
            </div>

            {/* निद्रा के प्रकार */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)] underline mb-2">
                B. निद्रा के प्रकार (Types of Nidra):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/30 pb-1 mb-1">
                    (1) आचार्य चरक के अनुसार (6 प्रकार):
                  </p>
                  <p className="leading-[26px] m-0">1. <NAccent bold>तमोभवा:</NAccent> तमोगुण के कारण आने वाली निद्रा।</p>
                  <p className="leading-[26px] m-0">2. <NAccent bold>श्लेष्मसमुद्भवा:</NAccent> कफ की वृद्धि से आने वाली निद्रा।</p>
                  <p className="leading-[26px] m-0">3. <NAccent bold>मनःशरीरश्रमसंभवा:</NAccent> मानसिक और शारीरिक थकान से (यह स्वाभाविक निद्रा है)।</p>
                  <p className="leading-[26px] m-0">4. <NAccent bold>आगन्तुकी:</NAccent> किसी बाहरी कारण या अरिष्ट लक्षण के रूप में।</p>
                  <p className="leading-[26px] m-0">5. <NAccent bold>व्याध्यनुवर्तिनी:</NAccent> किसी बीमारी या बुखार की कमजोरी के कारण।</p>
                  <p className="leading-[26px] m-0">6. <NAccent bold>रात्रिस्वभावप्रभवा:</NAccent> रात्रि के स्वाभाविक गुण के कारण आने वाली नींद — इसे <NText bold>&apos;भूतधात्री&apos;</NText> (सभी प्राणियों का माता की तरह पालन-पोषण करने वाली) कहा गया है।</p>
                </div>

                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/30 pb-1 mb-1">
                    (2) आचार्य सुश्रुत के अनुसार (3 प्रकार):
                  </p>
                  <p className="leading-[28px] m-0">1. <NAccent bold>वैष्णवी:</NAccent> स्वाभाविक निद्रा (रात्रि में आने वाली सामान्य नींद)।</p>
                  <p className="leading-[28px] m-0">2. <NAccent bold>तामसी:</NAccent> अज्ञान या पाप कर्म / तमोगुण की अधिकता से आने वाली।</p>
                  <p className="leading-[28px] m-0">3. <NAccent bold>वैकारिकी:</NAccent> रोग या शारीरिक विकार के कारण आने वाली।</p>
                </div>
              </div>
            </div>

            {/* निद्रा का स्वास्थ्य से संबंध */}
            <div className="mt-[16px] border-2 border-[var(--theme-accent)]/70 p-3 bg-[var(--theme-bg)]/50 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)] underline">
                C. निद्रा का स्वास्थ्य से संबंध (प्रभाव):
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;निद्रायत्तं सुखं दुःखं पुष्टिः कार्श्यं बलाबलम्। वृषता क्लीबता ज्ञानमज्ञानं जीवितं न च।।&rdquo;
              </p>
              <p className="leading-[28px] m-0">
                अर्थात् मनुष्य का <NText bold>सुख और दुःख</NText>, शरीर की <NText bold>पुष्टि (मोटापा/पोषण) और कृशता (दुबलापन)</NText>, <NText bold>बल और निर्बलता</NText>, <NText bold>वृषता (पौरुष शक्ति) और नपुंसकता (क्लीबता)</NText>, <NText bold>ज्ञान और अज्ञान</NText>, तथा <NText bold>जीवन और मरण</NText> — ये सब कुछ उचित निद्रा (नींद) पर ही निर्भर करते हैं।
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. युक्त एवं अयुक्त निद्रा तथा विभिन्न अवस्थाओं के प्रभाव    */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              4.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              युक्त एवं अयुक्त निद्रा तथा विभिन्न निद्रा अवस्थाओं के प्रभाव (Effects of Yukta &amp; Ayukta Nidra, Ratri Jagarana, Diwaswapna, etc.)
            </h3>

            <div className="my-[12px] grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                  (1) युक्त निद्रा (Yukta Nidra - उचित समय व मात्रा की नींद):
                </p>
                <p className="leading-[28px] m-0">
                  यह शरीर को सुख, पुष्टि, बल, उत्साह, अच्छी पाचन शक्ति, स्पष्ट इंद्रियां और लंबी आयु प्रदान करती है।
                </p>
              </div>
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                  (2) अयुक्त निद्रा (Ayukta Nidra - अनुचित नींद):
                </p>
                <p className="leading-[28px] m-0">
                  इसके तीन रूप हैं — <NText bold>अतिनिद्रा</NText> (बहुत ज्यादा सोना), <NText bold>अनिद्रा</NText> (बिल्कुल न सोना), और <NText bold>अकाल निद्रा</NText> (गलत समय पर सोना)। ये तीनों ही सुख और आयु को ठीक वैसे ही नष्ट कर देती हैं जैसे कालरात्रि।
                </p>
              </div>
            </div>

            <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base space-y-3">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                विभिन्न अवस्थाओं के शरीर पर प्रभाव:
              </p>

              {/* रात्रि जागरण */}
              <div className="border-b border-dashed border-[var(--theme-text)]/40 pb-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  A. रात्रि जागरण (Ratri Jagarana - रात को जागना):
                </p>
                <p className="leading-[30px] m-0 text-center font-bold text-sm md:text-base text-[var(--theme-accent)] my-1">
                  &ldquo;रात्रौ जागरणं रूक्षं स्निग्धं प्रस्वपनं दिवा। अरूक्षमनभिष्यन्दि त्वासीनप्रचलायितम्।।&rdquo;
                </p>
                <p className="leading-[28px] m-0">
                  रात को जागने से शरीर में <NAccent bold>रूक्षता (Dryness)</NAccent> आती है और वात तथा पित्त दोष प्रकुपित होते हैं। इससे कब्ज, सिरदर्द, चक्कर आना, आंखों में जलन, अपच और एकाग्रता में कमी होती है।
                </p>
              </div>

              {/* दिवास्वप्न */}
              <div className="border-b border-dashed border-[var(--theme-text)]/40 pb-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  B. दिवास्वप्न (Diwaswapna - दिन में सोना):
                </p>
                <p className="leading-[28px] m-0">
                  • दिन में सोने से शरीर में <NAccent bold>स्निग्धता (कफ और मेद)</NAccent> बढ़ती है तथा इसे <NText bold>&apos;अभिष्यन्दि&apos;</NText> (स्रोतों को बंद करने वाला) माना गया है। (नोट: बैठे-बैठे झपकी लेना यानी <NAccent bold>&apos;आसीनप्रचलायित&apos;</NAccent> न तो रूक्ष होता है और न ही कफ बढ़ाता है)।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>दिवास्वप्न के नियम (किन्हें दिन में सोना चाहिए?):</NAccent> केवल <NText bold>ग्रीष्म ऋतु (गर्मियों)</NText> में दिन में सोना सभी के लिए उचित है क्योंकि इस ऋतु में रातें छोटी होती हैं और शरीर में वात व रूक्षता बढ़ जाती है। इसके अलावा बालक, वृद्ध, क्षय रोगी, अतिसार व श्वास के रोगी, अधिक बोलने वाले, यात्रा या भारी काम से थके हुए लोग किसी भी ऋतु में दिन में सो सकते हैं।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>दिवास्वप्न के निषेध (किन्हें दिन में नहीं सोना चाहिए?):</NAccent> ग्रीष्म ऋतु को छोड़कर अन्य सभी ऋतुओं में, विशेषकर कफ प्रकृति वाले, मोटापे (मेदोरोग) से ग्रस्त, प्रतिदिन घी-तेल (स्नेह) का अधिक सेवन करने वाले और विष या गले के रोगों से पीड़ित लोगों को दिन में कभी नहीं सोना चाहिए।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>दिवास्वप्न से होने वाले रोग:</NAccent> हलीमक (पीलिया का गंभीर रूप), सिरदर्द, शरीर में भारीपन, अंगमर्द, अग्निमांद्य, शोथ (सूजन), पीनस (जुकाम), अर्धावभेदक (माइग्रेन), कोठ और कण्डू (खुजली)।
                </p>
              </div>

              {/* अनिद्रा, अतिनिद्रा, अकाल निद्रा */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 text-xs md:text-sm">
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>C. अनिद्रा / निद्रानाश (Anidra):</NAccent> शरीर में दर्द (अंगमर्द), सिर में भारीपन, बार-बार जम्हाई आना (जृम्भा), जड़ता, ग्लानि, चक्कर आना (भ्रम), अपच, तन्द्रा और गंभीर वात रोग होते हैं।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>D. अतिनिद्रा (Atinidra - जरूरत से ज्यादा सोना):</NAccent> कफ और मेद की वृद्धि, मोटापा, आलस्य, मंदाग्नि, शरीर में सूजन और बुद्धि की मंदता होती है।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>E. अकाल निद्रा (Akala Nidra - बेवक्त सोना):</NAccent> सूर्योदय/सूर्यास्त के समय या भोजन के तुरंत बाद सोना त्रिदोषों को असंतुलित करता है, पाचन बिगाड़ता है और सिरदर्द व आलस्य पैदा करता है।
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 5. अच्छी/खराब नींद के आहार-विहार एवं असत्म्य जागरण के उपाय */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              5.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              अच्छी नींद लाने वाले एवं नींद खराब करने वाले आहार-विहार तथा असत्म्य जागरण के उपाय
            </h3>

            <div className="my-[12px] grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
              {/* अच्छी नींद लाने वाले */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (1) अच्छी नींद लाने वाले आहार-विहार (Ahara-Vihara for Sound Sleep):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>विहार:</NAccent> पूरे शरीर पर तेल मालिश (अभ्यंग), उबटन (उत्सादन), गुनगुने पानी से स्नान, सिर और पैरों के तलवों की मालिश (शिरो-पादभ्यंग), सिर पर तेल की धारा डालना (शिरोधारा / मूर्धतैल), मन को पसंद आने वाला धीमा संगीत सुनना, सुगंधित फूलों या चंदन का प्रयोग, संतोषजनक मैथुन, और सुखद व नरम बिस्तर।
                </p>
                <p className="leading-[28px] m-0 mt-1">
                  • <NAccent bold>आहार:</NAccent> शालि चावल, गेहूं, घी और दूध से बने पदार्थ, ग्राम्य व अनूप पशुओं का मांसरस, दही, गुड़, अंगूर (द्राक्षा) और सोने से पहले गुनगुना <NText bold>भैंस का दूध (माहिष क्षीर)</NText> पीना (भैंस का दूध भारी और अत्यंत निद्राजनक माना गया है)।
                </p>
              </div>

              {/* नींद खराब करने वाले */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (2) नींद खराब करने वाले आहार-विहार (Causes of Disturbed Sleep):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>आहार:</NAccent> अत्यधिक रूखा (रूक्ष), कड़वा (तिक्त), कसैला (कषाय) और तीखा भोजन, जौ (यव) का अधिक सेवन, उपवास (भूखे पेट सोना), तथा रात में चाय या कॉफी (कैफीन) का सेवन।
                </p>
                <p className="leading-[28px] m-0 mt-1">
                  • <NAccent bold>विहार:</NAccent> अत्यधिक शारीरिक परिश्रम (अतिव्यायाम), चिंता, भय, क्रोध, शोक, मानसिक तनाव, वमन-विरेचन या रक्तमोक्षण का अतियोग, धूम्रपान और सोने से ठीक पहले मोबाइल/टीवी स्क्रीन (Blue light) देखना।
                </p>
              </div>
            </div>

            {/* असत्म्य जागरण का नियम */}
            <div className="border-2 border-[var(--theme-accent)]/70 p-3 bg-[var(--theme-bg)]/50 text-sm md:text-base">
              <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                (3) असत्म्य जागरण का नियम (Compensation for Night Waking):
              </p>
              <p className="leading-[28px] m-0">
                यदि किसी व्यक्ति को रात में जागने की आदत नहीं है (<NText bold>असत्म्य जागरण</NText>) और किसी कारणवश उसे रात में जागना पड़ जाए, तो अगली सुबह जितनी देर वह रात में जागा था, उसके <NAccent bold>आधे समय (अर्धकाल)</NAccent> तक <NAccent bold>खाली पेट (अभुक्त्वा)</NAccent> सो जाना चाहिए (<NText bold>रात्रौ जागरितं यत्तु तस्यार्धं स्वप्यादभुक्त्वा दिवा</NText>)। इससे वात शांत हो जाता है और कफ भी नहीं बढ़ता।
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 6. आयु तथा स्वास्थ्य अवस्था के अनुसार निद्रा की अवधि       */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              6.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              आयु तथा स्वास्थ्य अवस्था के अनुसार निद्रा की अवधि (Duration of Sleep According to Age, Healthy &amp; Ailing Persons)
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              आधुनिक विज्ञान और आयुर्वेद के अनुसार विभिन्न आयु वर्गों के लिए आवश्यक नींद का समय इस प्रकार है:
            </p>

            <div className="mt-[12px] overflow-x-auto">
              <table className="w-full border-collapse border border-[var(--theme-text)]/70 text-xs md:text-base">
                <thead>
                  <tr className="bg-[var(--theme-accent)]/15 border-b border-[var(--theme-text)]/70">
                    <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)] w-1/4">
                      आयु वर्ग / अवस्था
                    </th>
                    <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)] w-1/4">
                      प्रतिदिन आवश्यक नींद की अवधि
                    </th>
                    <th className="p-2 text-left font-bold text-[var(--theme-accent)]">
                      आयुर्वेदिक दृष्टिकोण (कारण)
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top leading-[26px]">
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      नवजात शिशु (0–1 वर्ष)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold text-[var(--theme-accent)]">
                      14 से 17 घंटे
                    </td>
                    <td className="p-2">
                      बाल्यावस्था कफ प्रधान होती है और धातुओं के तीव्र विकास (बृंहण) के लिए अधिक नींद आवश्यक है।
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      छोटे बच्चे (1–5 वर्ष)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold text-[var(--theme-accent)]">
                      10 से 13 घंटे
                    </td>
                    <td className="p-2">
                      शारीरिक और मानसिक विकास का काल।
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      स्कूली बच्चे एवं किशोर (6–17 वर्ष)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold text-[var(--theme-accent)]">
                      8 से 10 घंटे
                    </td>
                    <td className="p-2">
                      अध्ययन और शारीरिक वृद्धि के संतुलन हेतु।
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      युवा एवं वयस्क (18–60 वर्ष - स्वस्थ पुरुष)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold text-[var(--theme-accent)]">
                      7 से 8 घंटे (रात्रि में)
                    </td>
                    <td className="p-2">
                      युवावस्था पित्त प्रधान होती है; दिन भर के श्रम की पूर्ति के लिए 7-8 घंटे की रात्रि निद्रा पर्याप्त है।
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      वृद्धावस्था (60 वर्ष से अधिक)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold text-[var(--theme-accent)]">
                      6 से 7 घंटे (रात्रि) + दिन में हल्की झपकी
                    </td>
                    <td className="p-2">
                      वृद्धावस्था में वात दोष बढ़ने और धातुक्षय के कारण रात की नींद कम हो जाती है, इसलिए वे दिन में थोड़ा विश्राम कर सकते हैं।
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      रोगी व्यक्ति (Ailing Persons)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold text-[var(--theme-accent)]">
                      रोग की अवस्था के अनुसार (अधिक विश्राम)
                    </td>
                    <td className="p-2">
                      क्षय, ज्वर, अतिसार, श्वास या चोट से पीड़ित रोगियों में ऊतकों की मरम्मत (Tissue repair) के लिए स्वस्थ व्यक्ति से अधिक निद्रा व विश्राम आवश्यक है।
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 7. निद्रा के आधुनिक पहलू एवं सर्कैडियन रिदम                */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              7.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              निद्रा के आधुनिक पहलू एवं सर्कैडियन रिदम (Modern Aspects of Sleep &amp; Circadian Rhythm)
            </h3>

            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base space-y-2">
              <p className="leading-[28px] m-0">
                (1) <NAccent bold>दिवसकालीन निद्रालुता और सतर्कता (Daytime Sleepiness and Alertness):</NAccent> यदि रात में नींद पूरी न हो, तो मस्तिष्क में <NText bold>एडेनोसिन (Adenosine)</NText> नामक रसायन जमा हो जाता है, जिससे दिन भर सुस्ती, झपकी और एकाग्रता में कमी (Daytime sleepiness) रहती है। अच्छी नींद इस रसायन को साफ कर दिन भर सतर्कता (Alertness) बनाए रखती है।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NAccent bold>निद्रा अभाव (Sleep Deprivation):</NAccent> लगातार पर्याप्त नींद न लेने से याददाश्त कमजोर होती है, चिड़चिड़ापन आता है, कोर्टिसोल (तनाव हार्मोन) बढ़ता है, और मोटापा, डायबिटीज व हाई बीपी का खतरा बढ़ जाता है।
              </p>
              <p className="leading-[28px] m-0">
                (3) <NAccent bold>निद्रा और रोग प्रतिरोधक क्षमता (Sleep and Host Defense / Immunity):</NAccent> गहरी नींद के दौरान हमारा शरीर <NText bold>साइटोकाइन्स (Cytokines)</NText> नामक प्रोटीन बनाता है और <NText bold>T-cells</NText> को सक्रिय करता है, जो संक्रमण और सूजन (Inflammation) से लड़ते हैं। नींद की कमी से इम्युनिटी (व्याधिक्षमत्व) सीधे तौर पर गिर जाती है।
              </p>
              <p className="leading-[28px] m-0">
                (4) <NAccent bold>मास्टर सर्कैडियन क्लॉक और सर्कैडियन रिदम (Master Circadian Clock &amp; Rhythm):</NAccent>
                <br />• हमारे मस्तिष्क के हाइपोथैलेमस (Hypothalamus) में <NText bold>सुप्राकायास्मैटिक न्यूक्लियस (Suprachiasmatic Nucleus - SCN)</NText> नामक एक केंद्र होता है, जिसे शरीर की &apos;मास्टर क्लॉक&apos; (Master Clock) कहते हैं।
                <br />• यह घड़ी 24 घंटे के चक्र (Circadian Rhythm) पर काम करती है और शरीर के तापमान, हार्मोन स्राव, भूख और सोने-जागने के समय को नियंत्रित करती है।
              </p>
              <p className="leading-[28px] m-0">
                (5) <NAccent bold>ह्यूमन सर्कैडियन टाइमिंग सिस्टम और स्लीप-वेक रेगुलेशन (Sleep-Wake Regulation):</NAccent>
                <br />• जब आंखों के रेटिना पर सूर्य का प्रकाश पड़ता है, तो SCN पीनियल ग्रंथि (Pineal Gland) को <NText bold>मेलाटोनिन (Melatonin - नींद का हार्मोन)</NText> बनाने से रोक देता है और कोर्टिसोल व सेरोटोनिन बढ़ाता है, जिससे हम जागते हैं।
                <br />• शाम को अंधेरा होने पर SCN पीनियल ग्रंथि को सक्रिय करता है, जिससे रक्त में मेलाटोनिन बढ़ता है और हमें नींद आने लगती है।
              </p>
              <p className="leading-[28px] m-0">
                (6) <NAccent bold>सर्कैडियन रिदम डिसऑर्डर (Circadian Disorders of Sleep-Wake Cycle):</NAccent> जब व्यक्ति की आंतरिक जैविक घड़ी बाहरी समय से मेल नहीं खाती (जैसे नाइट शिफ्ट में काम करने वाले लोग या हवाई यात्रा से होने वाला <NText bold>Jet Lag</NText>), तो अनिद्रा, अपच और मानसिक थकान की बीमारी हो जाती है।
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 8. प्रमुख निद्रा विकार (Common Sleep Disorders)            */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              8.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              प्रमुख निद्रा विकार (Common Sleep Disorders)
            </h3>

            <div className="my-[12px] grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (1) स्लीप एपनिया (Sleep Apnea)
                </p>
                <p className="leading-[28px] m-0">
                  सोते समय गले की मांसपेशियों के ढीला पड़ने से श्वास नली बार-बार कुछ सेकंड के लिए बंद हो जाती है (<NText bold>Obstructive Sleep Apnea</NText>)। इसमें रोगी तेज खर्राटे लेता है और सांस रुकने से रात में कई बार चौंक कर जागता है, जिससे दिन भर थकान रहती है।
                </p>
              </div>

              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (2) इंसोम्निया (Insomnia / अनिद्रा)
                </p>
                <p className="leading-[28px] m-0">
                  पर्याप्त समय और शांत वातावरण होने के बावजूद नींद आने में कठिनाई होना, या रात में बार-बार नींद टूटना और फिर नींद न आना। आयुर्वेद में इसे <NText bold>वात और पित्त की वृद्धि</NText> से जोड़ा गया है।
                </p>
              </div>

              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (3) नार्कोलेप्सी (Narcolepsy)
                </p>
                <p className="leading-[28px] m-0">
                  यह एक न्यूरोलॉजिकल विकार है जिसमें मस्तिष्क सोने-जागने के चक्र को नियंत्रित नहीं कर पाता। रोगी को दिन में काम करते, बात करते या चलते समय अचानक ही बहुत तेज नींद के दौरे (<NText bold>Sleep attacks</NText>) पड़ते हैं और कभी-कभी भावनाओं के आवेग में मांसपेशियां अचानक शिथिल पड़ जाती हैं (<NText bold>Cataplexy</NText>)।
                </p>
              </div>

              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (4) रेस्टलेस लेग सिंड्रोम (Restless Leg Syndrome - RLS)
                </p>
                <p className="leading-[28px] m-0">
                  इसमें शाम या रात को लेटने पर पैरों की नसों में अजीब सी बेचैनी, झनझनाहट, चींटी रेंगने जैसा एहसास या खिंचाव होता है, जिससे रोगी को बार-बार पैर हिलाने की तीव्र इच्छा होती है और वह सो नहीं पाता। (आयुर्वेद में इसे <NAccent bold>&apos;पिण्डिकोद्वेष्टन&apos;</NAccent> या वात प्रकोप से समझ सकते हैं)।
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 9. ब्रह्मचर्य एवं अब्रह्मचर्य का महत्व तथा लैंगिक स्वास्थ्य */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              9.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              रात्रिचर्या में ब्रह्मचर्य एवं अब्रह्मचर्य का महत्व तथा लैंगिक स्वास्थ्य (Brahmacharya, Abrahmacharya &amp; Reproductive Health)
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              आयुर्वेद में आहार और निद्रा के बाद <NAccent bold>&apos;ब्रह्मचर्य&apos;</NAccent> को तीसरा सबसे महत्वपूर्ण उपस्तंभ (<NText bold>Trayopastambha</NText>) माना गया है।
            </p>

            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base space-y-2">
              <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                (1) ब्रह्मचर्य और अब्रह्मचर्य का अर्थ:
              </p>
              <p className="leading-[28px] m-0 pl-2">
                • <NAccent bold>ब्रह्मचर्य:</NAccent> इसका शाब्दिक अर्थ है अपनी इंद्रियों पर संयम रखना, मन को पवित्र रखना और शुक्र धातु (Vital fluid) की रक्षा करना। गृहस्थ जीवन के संदर्भ में, आयुर्वेद में &apos;ब्रह्मचर्य&apos; का अर्थ पूर्णतः मैथुन का त्याग करना नहीं है, बल्कि शास्त्र के नियमों, ऋतु, आयु और शारीरिक बल के अनुसार संयमित और मर्यादित सहवास करना है।
              </p>
              <p className="leading-[28px] m-0 pl-2">
                • <NAccent bold>अब्रह्मचर्य:</NAccent> नियमों के विरुद्ध, अत्यधिक, अकाल में या अयोनि में सहवास करके शुक्र धातु का नाश करना अब्रह्मचर्य है।
              </p>

              {/* ब्रह्मचर्य पालन का महत्व */}
              <div className="my-2 border border-[var(--theme-accent)]/60 p-2.5 bg-[var(--theme-bg)]/70">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (2) ब्रह्मचर्य पालन का महत्व (Benefits):
                </p>
                <p className="leading-[30px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                  &ldquo;चक्षुष्यमायुष्यमोजस्यं बलं वृष्यं च ब्रह्मचर्यम्।&rdquo;
                </p>
                <p className="leading-[28px] m-0">
                  ब्रह्मचर्य का पालन करने से ओज (Immunity), बल, स्मृति, मेधा, नेत्र ज्योति और आयु की वृद्धि होती है तथा बुढ़ापा देर से आता है।
                </p>
              </div>

              {/* गृहस्थ जीवन के लिए मैथुन के शास्त्रीय नियम */}
              <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                (3) गृहस्थ जीवन के लिए मैथुन (सहवास) के शास्त्रीय नियम (Lifestyle Guidelines / प्रजनन एवं लैंगिक स्वास्थ्य):
              </p>

              <p className="leading-[28px] m-0 font-bold">
                A. ऋतु के अनुसार आवृत्ति (Frequency as per Season):
              </p>
              <div className="my-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs md:text-sm">
                <div className="border border-[var(--theme-text)]/60 p-2.5 bg-[var(--theme-bg)]">
                  <NAccent bold>1. शीतकाल (हेमंत और शिशिर ऋतु):</NAccent> इस समय शरीर में बल और शुक्र सबसे अधिक होता है, अतः व्यक्ति अपनी इच्छा और बल के अनुसार (<NText bold>प्रकामं</NText>) सहवास कर सकता है।
                </div>
                <div className="border border-[var(--theme-text)]/60 p-2.5 bg-[var(--theme-bg)]">
                  <NAccent bold>2. वसंत और शरद ऋतु:</NAccent> मध्यम बल होने के कारण <NText bold>3 दिन में एक बार (त्र्यहात्)</NText>।
                </div>
                <div className="border border-[var(--theme-text)]/60 p-2.5 bg-[var(--theme-bg)]">
                  <NAccent bold>3. वर्षा और ग्रीष्म ऋतु:</NAccent> शरीर अत्यंत दुर्बल होने के कारण पखवाड़े में एक बार (<NText bold>15 दिन में एक बार - पक्षात्</NText>) सहवास करना चाहिए।
                </div>
              </div>

              <p className="leading-[28px] m-0">
                <NAccent bold>B. मैथुन के निषेध (कब सहवास नहीं करना चाहिए - Contraindications):</NAccent>
                <br />• रजस्वला स्त्री (मासिक धर्म के दौरान), गर्भिणी स्त्री, रोगी या अप्रिय स्त्री के साथ।
                <br />• अत्यधिक भूखे या प्यासे होने पर, बहुत अधिक भोजन कर लेने के तुरंत बाद, मल-मूत्र का वेग आने पर, भारी व्यायाम या यात्रा की थकान में, बुखार या कमजोरी में, और दिन के समय सहवास नहीं करना चाहिए।
              </p>

              <p className="leading-[28px] m-0">
                <NAccent bold>C. अति-मैथुन (अब्रह्मचर्य) के दुष्परिणाम:</NAccent> नियमों को तोड़कर अत्यधिक सहवास करने से चक्कर आना (भ्रम), थकान (क्लम), जांघों में कमजोरी (ऊरुसाद), ओज और शुक्र का नाश, असमय बुढ़ापा और राजयक्ष्मा (TB) व वात के गंभीर रोग उत्पन्न होते हैं।
              </p>

              <p className="leading-[28px] m-0">
                <NAccent bold>D. मैथुन के पश्चात् परिचर्या (Post-coital Regimen):</NAccent> सहवास के बाद शरीर में बढ़े हुए वात को शांत करने और खोई हुई ऊर्जा की पूर्ति के लिए स्नान करना चाहिए, खुली हवा का सेवन करना चाहिए, और गुनगुना मीठा दूध, घी, मांसरस या मिश्री का सेवन कर सुखपूर्वक सो जाना चाहिए।
              </p>
            </div>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
