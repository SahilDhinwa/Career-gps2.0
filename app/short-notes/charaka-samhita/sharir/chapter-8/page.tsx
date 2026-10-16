"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function CharakaSharirChapter8() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        NOTEBOOK PAPER WRAPPER (Exact match to Chapter 6 styling)
        =========================================================
      */}
      <div
        className="w-full min-h-screen relative overflow-hidden"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          backgroundImage: `
            linear-gradient(90deg, transparent 56px, rgba(239, 68, 68, 0.45) 56px, rgba(239, 68, 68, 0.45) 58px, transparent 58px),
            repeating-linear-gradient(transparent, transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundAttachment: "local",
          backgroundPosition: "0 0",
        }}
      >
        <div className="pl-[72px] sm:pl-[84px] pr-4 sm:pr-8 py-[32px] w-full relative">
          
          {/* FIXED BADGE */}
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-transparent text-[var(--theme-text)] z-10"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Charaka<br/><NAccent>Sharira</NAccent>
          </div>

          {/* Top Navigation */}
          <div className="mb-[32px] flex items-center h-[32px]">
            <Link 
              href="/short-notes/charaka-samhita/sharir" 
              className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-xs md:text-base font-sans"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Sharira Hub
            </Link>
          </div>

          {/* Main Chapter Title */}
          <div className="mb-[32px] flex justify-center">
            <HandwrittenTitle>
              अध्याय 8: जातिसूत्रीय शारीर
            </HandwrittenTitle>
          </div>

          <div className="text-center mb-[32px] h-[32px] flex items-center justify-center">
            <span className="inline-block px-3 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-widest uppercase transform -rotate-1 bg-[var(--theme-bg)]/80">
              गर्भधारण, गर्भव्यापद्, मासानुमासिकचर्या एवं कौमारभृत्य
            </span>
          </div>

          {/* ========================================== */}
          {/* SECTION I: CONCEPTION & PUMSAVANA          */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">I.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                गर्भस्थापन की विधि (Method of Conception & Pre-conception Care)
              </NText>
            </div>
            
            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>1 (I). संतान की इच्छा के अनुसार आहार (Diet based on desired child):</NText>
                </p>
                <div className="pl-4 mt-2 space-y-2">
                  <p className="leading-[32px] m-0">
                    • <NAccent bold>पुत्रकामा (Desiring a Male Child):</NAccent> स्त्री को मधुर, अम्ल और लवण रस प्रधान एवं स्निग्ध आहार तथा गोदुग्ध (गाय का दूध) का सेवन करना चाहिए।
                  </p>
                  <p className="leading-[32px] m-0">
                    • <NAccent bold>दुहितृकामा (Desiring a Female Child):</NAccent> दक्षिणाभिमुख होकर तैल और माष (उड़द) से बने पदार्थों का सेवन।
                  </p>
                </div>
              </div>

              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>2 (II). पुंसवन संस्कार (Pumsavana Karma):</NText> गर्भ की स्थिरता और इच्छित संतान प्राप्ति हेतु। यह गर्भ के व्यक्त होने से पहले (<NAccent bold>अव्यक्ते गर्भे</NAccent> — सामान्यतः 2nd या 3rd month में) किया जाता है।
                </p>
                <p className="leading-[32px] m-0 opacity-80 italic">
                  प्रयुक्त द्रव्य: वटशुङ्ग (बरगद की कोंपल), द्विजीवक (जीवक-ऋषभक), अपामार्ग, सहचर आदि को दूध के साथ नस्य या पान कराना, अथवा गौरसर्षप (पीली सरसों) का प्रयोग।
                </p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION II: GARBHOPAGHATAKARA BHAVA        */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">II.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                गर्भोपघातकर भाव (5 Factors Harmful to Fetus)
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium">
              <p className="leading-[32px] mb-[16px] m-0">
                गर्भवती स्त्री द्वारा किए जाने वाले ऐसे कार्य जो गर्भ को नष्ट कर सकते हैं या विकृति पैदा कर सकते हैं (5 प्रमुख भाव):
              </p>
              <div className="space-y-[16px]">
                <p className="leading-[32px] m-0">1 (I). <NText bold>उत्कटासन:</NText> उकड़ू बैठना या कठोर व विषम आसन पर बैठना।</p>
                <p className="leading-[32px] m-0">2 (II). <NText bold>वेगविधारण:</NText> वात, मूत्र, पुरीष (मल) के वेगों को रोकना।</p>
                <p className="leading-[32px] m-0">3 (III). <NText bold>दारुण-आयास:</NText> अत्यधिक कठोर व्यायाम या शारीरिक परिश्रम करना।</p>
                <p className="leading-[32px] m-0">4 (IV). <NText bold>तीक्ष्ण-उष्ण-गुरु भोजन:</NText> बहुत तीखा, गर्म और पचने में भारी भोजन करना।</p>
                <p className="leading-[32px] m-0">5 (V). <NText bold>रक्तवस्त्र दर्शन एवं मद्यपान:</NText> लाल कपड़े पहनना और मद्य/नशीले पदार्थों का सेवन।</p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION III: 5 FETAL DISORDERS (GARBHAVYAPAD) */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">III.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                गर्भव्यापद् / गर्भ की विकृतियाँ (5 Major Fetal Disorders)
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">1 (I).</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">उपविष्टक (Upavishtaka)</NAccent>
                </div>
                <div className="pl-6 opacity-90">
                  <p className="leading-[32px] m-0"><NText bold>कारण:</NText> उष्ण-तीक्ष्ण आहार या योनि से रक्तस्राव (पुष्पदर्शन)।</p>
                  <p className="leading-[32px] m-0"><NText bold>लक्षण:</NText> गर्भ बढ़ता नहीं है और पेट में एक ही स्थान पर रुका रहता है। स्फुरण (Movement) होता है, पर वृद्धि नहीं होती।</p>
                </div>
              </div>

              <div>
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">2 (II).</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">नागोदर / उपशुष्कक (Nagodara / Upashushkaka)</NAccent>
                </div>
                <div className="pl-6 opacity-90">
                  <p className="leading-[32px] m-0"><NText bold>कारण:</NText> उपवास, रूक्ष आहार या वात प्रकोप।</p>
                  <p className="leading-[32px] m-0"><NText bold>लक्षण:</NText> गर्भ सूख जाता है, स्पन्दन बहुत देर से होता है और वह वर्षों तक कुक्षि में पड़ा रहता है।</p>
                </div>
              </div>

              <div>
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">3 (III).</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">लीनगर्भ (Linagarbha)</NAccent>
                </div>
                <div className="pl-6 opacity-90">
                  <p className="leading-[32px] m-0"><NText bold>कारण:</NText> वात दोष का प्रकोप।</p>
                  <p className="leading-[32px] m-0"><NText bold>लक्षण:</NText> गर्भ निष्क्रिय होकर सोया हुआ सा (निस्पन्द/बिना हलचल के) गर्भ में छिपा रहता है।</p>
                </div>
              </div>

              <div>
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">4 (IV).</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">मृतगर्भ (Mritagarbha / IUFD)</NAccent>
                </div>
                <div className="pl-6 opacity-90">
                  <p className="leading-[32px] m-0"><NText bold>स्थिति:</NText> गर्भ में ही शिशु की मृत्यु हो जाना।</p>
                  <p className="leading-[32px] m-0"><NText bold>लक्षण:</NText> पेट का ठंडा और भारी होना (स्तब्ध उदर), अस्पन्दन (हलचल बंद), भ्रम, तृष्णा, श्वास कष्ट और योनि से स्राव का अभाव।</p>
                </div>
              </div>

              <div>
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">5 (V).</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">मूढगर्भ (Mudhagarbha / Obstructed Labor)</NAccent>
                </div>
                <div className="pl-6 opacity-90">
                  <p className="leading-[32px] m-0"><NText bold>स्थिति:</NText> प्रसव के समय वायु के विगुण होने से गर्भ का मार्ग में टेढ़ा होकर फंस जाना।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION IV: MONTH-WISE ANTENATAL REGIMEN   */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">IV.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                मासानुमासिक गर्भिणी परिचर्या (Month-wise Antenatal Regimen — 1 to 9 Months)
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[24px]">
              <p className="leading-[32px] m-0">
                गर्भ के पोषण और सुखप्रसव के लिए 1 से 9 महीने तक अलग-अलग आहार-विहार का विधान है:
              </p>
              
              <div className="space-y-[16px]">
                <p className="leading-[32px] m-0">1 (I). <NText bold>प्रथम मास:</NText> अनुपस्कृत शीत क्षीर (बिना औषधि का ठंडा दूध) और सात्म्य भोजन।</p>
                <p className="leading-[32px] m-0">2 (II). <NText bold>द्वितीय मास:</NText> मधुरौषध सिद्ध क्षीर (जीवनीय गण की औषधियों से पकाया दूध)।</p>
                <p className="leading-[32px] m-0">3 (III). <NText bold>तृतीय मास:</NText> मधु-सर्पिः संयुक्त क्षीर (दूध में शहद और घी असमान मात्रा में)।</p>
                <p className="leading-[32px] m-0">4 (IV). <NText bold>चतुर्थ मास:</NText> अक्षमात्र नवनीत (1 अक्ष या लगभग 12 ग्राम मक्खन का सेवन)।</p>
                <p className="leading-[32px] m-0">5 (V). <NText bold>पञ्चम मास:</NText> क्षीर-सर्पिः (दूध से सीधे निकाला गया घी)।</p>
                <p className="leading-[32px] m-0">6 (VI). <NText bold>षष्ठ मास:</NText> मधुरौषध सिद्ध क्षीर-सर्पिः।</p>
                <p className="leading-[32px] m-0">7 (VII). <NText bold>सप्तम मास:</NText> छठे महीने के समान घृत। (इस मास में किक्किस/खुजली होने पर करवीर/बेर के काढ़े से परिषेक और चन्दन-मृणाल का लेप)।</p>
                <p className="leading-[32px] m-0">8 (VIII). <NText bold>अष्टम मास:</NText> क्षीर-यवागू सर्पिष्मती (दूध और घी से बनी यवागू/दलिया)।</p>
                <p className="leading-[32px] m-0">9 (IX). <NText bold>नवम मास:</NText> अनुवासन बस्ति एवं योनि पिचु (मधुर औषध सिद्ध तेल से गर्भमार्ग स्नेहन हेतु)।</p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION V: SUTIKAGARA & LABOR              */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">V.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                सूतिकागार और प्रसव काल (Maternity Ward & Labor)
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>1. सूतिकागार (Delivery Room):</NText> नवें महीने में प्रवेश करने पर प्रसूति गृह तैयार करना चाहिए, जिसमें उलूखल, मूसल, तीक्ष्ण शस्त्र, घी, तेल, और अनुभवी स्त्रियाँ (<NAccent bold>बहुशः प्रसूताः नार्यः</NAccent>) उपस्थित हों।
                </p>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>2. आसन्न प्रसव के 5 लक्षण (Signs of Impending Labor):</NText></p>
                <div className="pl-4 mt-2 space-y-1">
                  <p className="leading-[32px] m-0">• <NAccent bold>क्लम्:</NANText> बिना परिश्रम के थकावट।</p>
                  <p className="leading-[32px] m-0">• <NAccent bold>ग्लानि:</NANText> मन और शरीर में शिथिलता।</p>
                  <p className="leading-[32px] m-0">• <NAccent bold>कुक्षि-अवस्रंसन:</NANText> गर्भ का नीचे की ओर खिसकना।</p>
                  <p className="leading-[32px] m-0">• <NAccent bold>कटी-पृष्ठ-वंक्षण शूल:</NANText> कमर, पीठ और जांघों के जोड़ में दर्द।</p>
                  <p className="leading-[32px] m-0">• <NAccent bold>आवी प्रादुर्भाव:</NANText> गर्भाशय संकुचन व चिपचिपा स्राव (Show)।</p>
                </div>
              </div>

              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>3. अपरा पातन (Expulsion of Placenta):</NText> शिशु के जन्म के बाद यदि अपरा (Placenta) तुरंत न निकले, तो स्त्री के सिर पर <NAccent bold>भूर्जपत्र, काचमणि या सांप की केंचुली (अहिनिर्मोक)</NText> का धूपन करना चाहिए, तथा गले में बालों की चोटी से गुदगुदी करनी चाहिए ताकि वमन के आवेग से अपरा बाहर आ जाए।
                </p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION VI: NEWBORN CARE (JATAKARMA)        */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">VI.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                नवजात शिशु परिचर्या (Care of the Newborn — Jatakarma)
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[24px]">
              <p className="leading-[32px] m-0">जन्म लेते ही शिशु की प्राणरक्षा के लिए क्रमबद्ध उपाय:</p>
              
              <div className="space-y-[16px]">
                <p className="leading-[32px] m-0">1 (I). <NText bold>प्राणप्रत्यागमन (Resuscitation):</NText> चेतना न होने पर कान के पास दो पत्थरों का संघट्टन (<NAccent bold>अश्मनोः सङ्घट्टनम्</NAccent>), चेहरे पर जल छिड़कना और सूप (Winnowing basket) से हवा करना।</p>
                <p className="leading-[32px] m-0">2 (II). <NText bold>मुख-कण्ठ विशोधन:</NText> उंगली में रुई लपेटकर मुख और गले में भरे कफ (उल्ब) को साफ करना।</p>
                <p className="leading-[32px] m-0">3 (III). <NText bold>गर्भोदक वमन:</NText> पेट में गए गर्भोदक को निकालने के लिए सैन्धव लवण और घी चटाकर उल्टी कराना।</p>
                <p className="leading-[32px] m-0">4 (IV). <NText bold>नालछेदन (Umbilical Cord):</NText> नाभि के मूल से <NAccent bold>8 अङ्गुल</NAccent> छोड़कर धागे से बांधना और तीक्ष्ण शस्त्र से काटना।</p>
                <p className="leading-[32px] m-0">5 (V). <NText bold>जातकर्म:</NText> सोने की शलाका से मधु और घृत चटाना, तत्पश्चात माता के दक्षिण स्तन (Right breast) से दूध पिलाना।</p>
                <p className="leading-[32px] m-0">6 (VI). <NText bold>रक्षाकर्म:</NText> सूतिकागार में सरसों, अलसी, हींग, गुग्गुलु व वचा से धूपन करना (संक्रमण रोकने के लिए)।</p>
              </div>

              <div className="mt-4 p-4 border border-dashed border-[var(--theme-border)] rounded-sm">
                <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)]">
                  नाभिपाक के 4 उपद्रव (यदि नाल ठीक से न काटी जाए):
                </p>
                <p className="leading-[32px] m-0 text-sm">
                  1 (I). आयाम (लंबाई में सूजन) | 2 (II). उत्तुण्डित (गोल उभार) | 3 (III). पिण्डालिका (गांठ पड़ना) | 4 (IV). विजृम्भिक (फैलने वाला घाव)।
                </p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION VII: WET NURSE & BREAST MILK       */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">VII.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                धात्री परीक्षा और स्तन्य (Wet Nurse & Breast Milk)
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>1. प्रशस्त धात्री के गुण (Qualities of Ideal Wet Nurse):</NText> समानवर्णा (Same complexion), यौवनस्था (Young), अव्यङ्गा (No deformity), अव्यसना (No bad habits), अनीर्ष्या (Not jealous), और जीवद्वत्सा (जिसका अपना बच्चा जीवित हो)।
                </p>
              </div>

              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>2. शुद्ध / प्रशस्त स्तन्य (Pure Breast Milk):</NText> जो पानी में डालने पर तुरंत एकरस होकर घुल जाए (<NAccent bold>उदकपात्रे प्रदुह्यमानं उदकमेवानुविशति</NAccent>), रंग पाण्डुर (सफेद) हो और स्वाद मधुर हो।
                </p>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>3. दुष्ट स्तन्य के 3 प्रकार (3 Types of Vitiated Milk):</NText></p>
                <div className="pl-4 mt-2 space-y-2">
                  <p className="leading-[32px] m-0">• <NAccent bold>वातदुष्ट स्तन्य:</NANText> स्वाद में कषाय, रूखा, और पानी में डालने पर ऊपर तैरता है (<NAccent bold>उदके प्लवते</NANett>)। शिशु को कब्ज व वात रोग होता है।</p>
                  <p className="leading-[32px] m-0">• <NAccent bold>पित्तदुष्ट स्तन्य:</NANText> कटु, अम्ल या लवण, रंग पीला/नीला, और पानी में पीली धारियाँ बनाता है।</p>
                  <p className="leading-[32px] m-0">• <NAccent bold>कफदुष्ट स्तन्य:</NANText> अत्यधिक मधुर, पिच्छिल, और घना; पानी में डालने पर नीचे डूब जाता है (<NAccent bold>उदके अवसीदति</NAccent>)।</p>
                </div>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>4. क्षीरदोष के 3 विशिष्ट प्रकार:</NText> वैरस्य (बेस्वाद/कसैलापन), फेनसङ्घात (झागदार), और स्नेहहानि / रौक्ष्य (चिकनाई कम होना)।</p>
              </div>

              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>5. स्तन्यशोधन एवं स्तन्यजनन:</NText> शोधन हेतु पाठा, सोंठ, देवदारु, मुस्तक, गुडूची का काढ़ा। जनन हेतु वीरण, शालि, यव, गोधूम, लशुन और मांस रस का सेवन।
                </p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* SECTION VIII & IX: KUMARAGARA & LONGEVITY  */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[16px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">VIII.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                कुमारगार, नामकरण संस्कार एवं दीर्घायु बालक की परीक्षा
              </NText>
            </div>

            <div className="pl-6 md:pl-8 text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>1. कुमारगार (Nursery):</NText> हवा के सीधे झोंकों से रहित (निवात), प्रकाशयुक्त, कीट-पतंगों से सुरक्षित और सुगंधित धूप से धूपित।
                </p>
              </div>

              <div>
                <p className="leading-[32px] m-0">
                  <NText bold>2. नामकरण संस्कार (On Day 10 — दशमेऽहनि):</NText> 2 नाम रखे जाते हैं — (I) नक्षत्रिक नाम और (II) अभिप्रायिक नाम (घोषवत् वर्णों से शुरू होने वाला 2 या 4 अक्षरों का नाम)।
                </p>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>3. दीर्घायु बालक के लक्षण (Longevity Signs):</NText></p>
                <div className="pl-4 mt-2 space-y-1">
                  <p className="leading-[32px] m-0">• बाल: एक-एक रोमकूप में अलग, मुलायम और स्निग्ध।</p>
                  <p className="leading-[32px] m-0">• शिर: छत्राकार (Umbrella-shaped)।</p>
                  <p className="leading-[32px] m-0">• ललाट: चौड़ा और अर्धचन्द्राकार।</p>
                  <p className="leading-[32px] m-0">• कर्ण: बड़े और मांसल कान।</p>
                  <p className="leading-[32px] m-0">• नाभि: <NAccent bold>दक्षिणावर्त</NAccent> और गहरी नाभि।</p>
                  <p className="leading-[32px] m-0">• वक्ष: चौड़ी और पुष्ट छाती।</p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* SUMMARY SECTION                              */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <NText bold className="text-base md:text-xl text-[var(--theme-accent)] block uppercase tracking-widest opacity-80 leading-[32px] mb-[32px]">
              संक्षेप में सारांश (Summary)
            </NText>
            <p className="text-sm md:text-lg font-medium opacity-90 leading-[32px] m-0">
              चरक शारीर स्थान के इस 'जातिसूत्रीय' अध्याय में गर्भ की शुद्धि, मासानुमासिक आहार, प्रसवकालीन प्रबन्धन, नवजात शिशु की प्राणरक्षा (कौमारभृत्य), तथा धात्री और स्तन्य के वैज्ञानिक गुणों का विस्तृत शास्त्रीय दिग्दर्शन कराया गया है।
            </p>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
