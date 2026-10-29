"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function SwasthVrittaChapter2() {
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
            Swasth Vritta<br/><NAccent>Paper 1 • Ch 2</NAccent>
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
          <div className="mb-[32px] pb-[6px] border-b-[3px] border-double border-red-500/50 text-center pr-16 sm:pr-0">
            <HandwrittenTitle>
              अध्याय 2: स्वस्थ जीवनशैली – दिनचर्या (Healthy Lifestyle – Dinacharya)
            </HandwrittenTitle>
          </div>

          {/* दिनचर्या की परिभाषा Box */}
          <div className="mb-[32px] border-2 border-[var(--theme-accent)]/70 p-3 bg-[var(--theme-bg)]/50 text-sm md:text-base">
            <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)] underline">
              दिनचर्या की परिभाषा:
            </p>
            <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)]">
              &ldquo;दिने दिने चर्या दिनचर्या।&rdquo;
            </p>
            <p className="leading-[32px] m-0 font-medium">
              अर्थात् स्वस्थ रहने के लिए प्रतिदिन प्रातः काल सोकर उठने से लेकर रात्रि में सोने से पूर्व तक किए जाने वाले स्वास्थ्यवर्धक आचरण, नियम और कर्तव्यों को <NAccent bold>&apos;दिनचर्या&apos;</NAccent> कहते हैं।
            </p>
          </div>

          {/* ========================================================= */}
          {/* 1. आयुर्वेद में रोग निवारण के स्तर                          */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              1.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              आयुर्वेद में रोग निवारण के स्तर (Concept of Primordial, Primary, Secondary &amp; Tertiary Prevention in Ayurveda)
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              आधुनिक चिकित्सा विज्ञान (Modern Preventive Medicine) में बीमारियों को रोकने के 4 स्तर बताए गए हैं, जिनका आयुर्वेद के सिद्धांतों से सीधा संबंध है:
            </p>

            <div className="my-[16px] grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
              {/* (1) Primordial */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (1) प्राइमॉर्डियल प्रिवेंशन (Primordial Prevention - मूल कारण की रोकथाम)
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>अर्थ:</NText> बीमारी पैदा करने वाले जोखिम कारकों (Risk factors) को समाज या व्यक्ति में पनपने से पहले ही रोक देना।
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>आयुर्वेदिक उदाहरण:</NText> बचपन से ही बच्चों को दिनचर्या (Dinacharya), ऋतुचर्या (Ritucharya) और सद्वृत्त (Sadvritta) का पालन करवाना, ताकि बड़े होकर उनमें मोटापा (स्थौल्य), मधुमेह (प्रमेह) या बीपी जैसी जीवनशैली से जुड़ी बीमारियां विकसित ही न हों।
                </p>
              </div>

              {/* (2) Primary */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (2) प्राइमरी प्रिवेंशन (Primary Prevention - प्राथमिक रोकथाम / स्वास्थ्य रक्षण)
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>अर्थ:</NText> बीमारी शुरू होने से पहले ही शरीर को इतना मजबूत रखना और कारणों से दूर रहना कि रोग हो ही न सके (<NAccent bold>&ldquo;स्वस्थस्य स्वास्थ्य रक्षणम्&rdquo;</NAccent>)।
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>आयुर्वेदिक उदाहरण:</NText> निदान परिवर्जन (रोग के कारणों से दूर रहना), ऋतु शोधन (मौसम के अनुसार पंचकर्म द्वारा संचित दोषों को बाहर निकालना), और रसायन एवं वाजीकरण औषधियों का सेवन कर व्याधिक्षमत्व (Immunity) बढ़ाना।
                </p>
              </div>

              {/* (3) Secondary */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (3) सेकेंडरी प्रिवेंशन (Secondary Prevention - द्वितीयक रोकथाम / प्रारंभिक पहचान और उपचार)
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>अर्थ:</NText> जब बीमारी शरीर में प्रवेश कर चुकी हो, तो उसे शुरुआती अवस्था (Early stage) में ही पहचान कर तुरंत रोक देना ताकि वह गंभीर रूप न ले सके।
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>आयुर्वेदिक उदाहरण:</NText> षट्क्रियाकाल (Shatkriyakala) की शुरुआती अवस्थाओं (संचय, प्रकोप और प्रसर) में ही दोषों को पहचान कर लंघन, दीपन और पाचन चिकित्सा द्वारा रोग को वहीं शांत कर देना।
                </p>
              </div>

              {/* (4) Tertiary */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (4) टर्शियरी प्रिवेंशन (Tertiary Prevention - तृतीयक रोकथाम / जटिलता निवारण एवं पुनर्वास)
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>अर्थ:</NText> जब रोग पूर्ण रूप से विकसित हो जाए, तो उसके कारण होने वाली विकलांगता (Disability) या उपद्रवों (Complications) को कम करना और रोगी को सामान्य जीवन में वापस लाना।
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>आयुर्वेदिक उदाहरण:</NText> पक्षाघात (Paralysis) या संधिवात के रोगियों में बस्ति कर्म, अभ्यंग, स्वेदन, पथ्य-अपथ्य का पालन और टूटे हुए धातुओं को फिर से बनाने के लिए पुनर्नवादि या अश्वगंधादि रसायन का प्रयोग करना।
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. आहार एवं विहार का महत्व                                */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              2.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              स्वास्थ्य संवर्धन और रोग निवारण में आहार एवं विहार का महत्व (Importance of Ahara &amp; Vihara)
            </h3>

            <div className="text-sm md:text-base opacity-95 font-medium">
              <p className="leading-[32px] m-0">
                आयुर्वेद में आहार को <NAccent bold>&apos;महाभैषज्य&apos;</NAccent> (सबसे बड़ी औषधि) और तीन उपस्तंभों (आहार, निद्रा, ब्रह्मचर्य) में प्रथम माना गया है। हितकर आहार और उचित विहार शरीर में <NText bold>धातुसाम्य (Dhatusamya)</NText> बनाए रखते हैं, जिससे बल, वर्ण, ओज और आयु की वृद्धि होती है। इसके विपरीत, अहितकर आहार-विहार त्रिदोषों को कुपित कर रोग उत्पन्न करते हैं।
              </p>

              <p className="leading-[32px] m-0 mt-2 font-bold text-[var(--theme-accent)] underline">
                विहार का वर्गीकरण (Classification of Vihara) — स्वास्थ्य रक्षा के लिए विहार को दो मुख्य भागों में बांटा गया है:
              </p>

              <div className="my-[12px] grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* 1. नियत काल विहार */}
                <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                    (1) नियत काल विहार (Niyata Kala Vihara)
                  </p>
                  <p className="leading-[28px] m-0">
                    वे नियम या क्रियाएं जो एक निश्चित समय (Fixed time/schedule) से बंधी होती हैं और जिन्हें रोज या हर मौसम में समय पर करना आवश्यक है।
                  </p>
                  <p className="leading-[28px] m-0 mt-1">
                    • <NText bold>उदाहरण:</NText> दिनचर्या (प्रातः जागरण, दन्तधावन, अभ्यंग आदि) और ऋतुचर्या (छह ऋतुओं के अनुसार आहार-विहार)।
                  </p>
                </div>

                {/* 2. अनियत काल विहार */}
                <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                    (2) अनियत काल विहार (Aniyata Kala Vihara)
                  </p>
                  <p className="leading-[28px] m-0">
                    वे क्रियाएं जिनका कोई निश्चित घड़ी का समय नहीं होता, बल्कि शरीर की आवश्यकता या परिस्थिति के अनुसार कभी भी उनका ध्यान रखना पड़ता है। <NText bold>उदाहरण:</NText>
                  </p>
                  <p className="leading-[28px] m-0">
                    (i) <NAccent bold>वेगधारण न करना (Non-suppression of urges):</NAccent> मल, मूत्र, छींक, प्यास आदि 13 अधारणीय वेगों को न रोकना।
                  </p>
                  <p className="leading-[28px] m-0">
                    (ii) <NAccent bold>वेगोदीरण न करना (No forcible excitation of urges):</NAccent> बिना इच्छा के जबरदस्ती मल-मूत्र आदि का वेग न निकालना।
                  </p>
                  <p className="leading-[28px] m-0">
                    (iii) <NAccent bold>ऋतुशोधन (Ritu Shodhana):</NAccent> शरीर में दोष संचित होने पर वमन, विरेचन आदि द्वारा शुद्धि करना।
                  </p>
                  <p className="leading-[28px] m-0">
                    (iv) <NAccent bold>बृंहण (Brumhana):</NAccent> शरीर में कमजोरी या धातुक्षय होने पर पोषण देने वाले उपाय करना।
                  </p>
                  <p className="leading-[28px] m-0">
                    (v) <NAccent bold>भूतादि अस्पर्शन (Bhutadi Asparshana):</NAccent> सूक्ष्म जीवाणुओं (Microbes/Viruses), संक्रमित वस्तुओं, हिंसक प्राणियों और नकारात्मक शक्तियों के संपर्क से दूर रहना।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. प्रातःकालीन दिनचर्या (Early Morning Regimen)            */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              3.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              प्रातःकालीन दिनचर्या (Early Morning Regimen)
            </h3>

            {/* A. ब्रह्म मुहूर्त में जागरण */}
            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                A. ब्रह्म मुहूर्त में जागरण (Waking up at &apos;Brahma Muhurta&apos;)
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;ब्राह्मे मुहूर्ते उत्तिष्ठेत् जीर्णाजीर्णं निरूपयन्। रक्षार्थमायुषः स्वस्थो...&rdquo;
              </p>
              <p className="leading-[32px] m-0">
                (1) <NText bold>परिभाषा और समय:</NText> &apos;ब्रह्म&apos; का अर्थ है ज्ञान या परमात्मा, और &apos;मुहूर्त&apos; समय की एक इकाई है (1 मुहूर्त = 48 मिनट)। रात्रि के अंतिम प्रहर के 14वें मुहूर्त को ब्रह्म मुहूर्त कहते हैं। यह सूर्योदय से लगभग 2 मुहूर्त (96 मिनट या डेढ़ घंटे) पहले का समय होता है (लगभग सुबह 4:00 से 5:30 बजे के बीच)।
              </p>
              <p className="leading-[32px] m-0">
                (2) <NText bold>जागरण का मुख्य नियम:</NText> एक स्वस्थ व्यक्ति को अपनी आयु की रक्षा के लिए ब्रह्म मुहूर्त में उठना चाहिए, परन्तु उठने से पहले यह अवश्य विचार करना चाहिए कि रात का खाया हुआ भोजन पचा है या नहीं (<NAccent bold>जीर्णाजीर्णं निरूपयन्</NAccent>)। यदि अजीर्ण हो, तो थोड़ी देर और विश्राम करना चाहिए।
              </p>
              <div className="mt-2 border-t border-dashed border-[var(--theme-text)]/40 pt-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (3) वर्तमान परिदृश्य और शारीरिक प्रभाव (Effect on Health, Sleep, Alertness &amp; Memory):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>सर्कैडियन रिदम (Circadian Rhythm):</NAccent> सुबह जल्दी उठने से शरीर की जैविक घड़ी (Biological Clock) सूर्य के चक्र के साथ सेट हो जाती है, जिससे रात को समय पर गहरी नींद आती है (मेलाटोनिन हार्मोन का सही स्राव होता है)।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>सतर्कता और स्मृति (Alertness &amp; Memory):</NAccent> सुबह वातावरण शांत और सत्वगुण प्रधान होता है तथा हवा में शुद्ध ऑक्सीजन (Nascent Oxygen) अधिक होती है। इस समय उठने से तनाव हार्मोन (Cortisol) संतुलित रहता है, दिमाग शांत रहता है, और पढ़ने या काम करने पर स्मरण शक्ति (Memory) व एकाग्रता कई गुना बढ़ जाती है।
                </p>
              </div>
            </div>

            {/* B. उषा जलपान */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                B. उषा जलपान (Usha Jalapana - प्रातः काल पानी पीना)
              </p>
              <p className="leading-[32px] m-0">
                (1) <NText bold>विधि और समय:</NText> प्रातः काल सूर्योदय से पूर्व (ब्रह्म मुहूर्त में उठकर), बिना कुल्ला या दन्तधावन किए, रात भर तांबे, मिट्टी या कांच के बर्तन में रखे हुए स्वच्छ जल को पीना &apos;उषा जलपान&apos; कहलाता है।
              </p>
              <p className="leading-[32px] m-0">
                (2) <NText bold>मात्रा (Quantity):</NText> शास्त्रों के अनुसार <NAccent bold>8 प्रसृति</NAccent> (लगभग 640 ml से 750 ml, यानी 2 से 3 गिलास) या अपनी पाचन शक्ति के अनुसार जल पीना चाहिए। (नोट: कुछ आचार्यों ने नाक के छिद्रों से जल पीने को <NAccent bold>&apos;व्युषिताम्बुपान&apos;</NAccent> या नस्य जलपान भी कहा है)।
              </p>
              <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)]">
                (3) लाभ (Benefits):
              </p>
              <p className="leading-[28px] m-0 pl-2">
                • यह पेट और आंतों पर हल्का दबाव डालकर गैस्ट्रो-कोलिक रिफ्लेक्स (Gastro-colic reflex) को सक्रिय करता है, जिससे सुबह मलत्याग बिना किसी जोर के आसानी से हो जाता है।
              </p>
              <p className="leading-[28px] m-0 pl-2">
                • यह अर्श (बवासीर), शोथ (सूजन), ग्रहणी, ज्वर, उदर रोग, कुष्ठ, और मेदोरोग (मोटापा) को नष्ट करता है।
              </p>
              <p className="leading-[28px] m-0 pl-2">
                • किडनी से विषाक्त पदार्थों (Toxins) को बाहर निकालता है और व्यक्ति को वृद्धावस्था के लक्षणों (वली-पलित यानी झुर्रियों और सफेद बालों) से बचाकर सौ वर्ष की आयु प्रदान करता है।
              </p>
            </div>

            {/* C. वात काल में मलत्याग */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                C. वात काल में मलत्याग (Malatyaga in Vata Kaala - Good Bowel Habits)
              </p>
              <p className="leading-[32px] m-0">
                (1) <NText bold>वात काल का महत्व:</NText> रात्रि का अंतिम प्रहर (सुबह का समय) वात दोष (विशेषकर <NAccent bold>अपान वायु</NAccent>) की प्रधानता का काल होता है। अपान वायु का स्वाभाविक कार्य ही मल और मूत्र को शरीर से बाहर निकालना है (<NText bold>शक्रून्मूत्रशुक्रगर्भार्तवानि च</NText>)।
              </p>
              <p className="leading-[32px] m-0">
                (2) <NText bold>उचित विधि:</NText> सुबह उठते ही जब स्वाभाविक वेग आए, तो बिना देरी किए उत्तर या दक्षिण दिशा की ओर मुख करके, मौन रहकर और मन को एकाग्र रखकर मल-मूत्र का त्याग करना चाहिए। अत्यधिक जोर (प्रवाहण) नहीं लगाना चाहिए।
              </p>
              <p className="leading-[32px] m-0">
                (3) <NText bold>लाभ:</NText> समय पर मलत्याग करने से आंतों में आमविष (Toxins) का अवशोषण नहीं होता, पेट में हल्कापन (कोष्ठ लाघव) आता है, जठराग्नि प्रदीप्त होती है, इंद्रियां निर्मल होती हैं और दिन भर शरीर में स्फूर्ति बनी रहती है।
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. मुख, नेत्र एवं नासिका परिचर्या (Oral, Eye & Nasal Care) */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              4.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              मुख, नेत्र एवं नासिका परिचर्या (Oral, Eye &amp; Nasal Care)
            </h3>

            {/* A. मुख एवं नेत्र प्रक्षालन */}
            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                A. मुख एवं नेत्र प्रक्षालन (Mukhaprakshalana &amp; Face Washes)
              </p>
              <p className="leading-[28px] m-0">
                • <NText bold>आयुर्वेदिक विधि एवं द्रव्य:</NText> मलत्याग और दन्तधावन के बाद चेहरे और आंखों को स्वच्छ जल से धोना चाहिए। ग्रीष्म और शरद ऋतु में शीतल जल से, तथा शीतकाल में सुखोष्ण (गुनगुने) जल से मुख धोना चाहिए।
              </p>
              <p className="leading-[28px] m-0">
                • <NText bold>औषधीय द्रव्य:</NText> क्षीरीवृक्ष त्वक् क्वाथ (वट, उदुम्बर, अश्वत्थ, पारीष, प्लक्ष की छाल का काढ़ा), आमलकी क्वाथ, लोध्र काढ़ा या ताजे गोदुग्ध से मुख प्रक्षालन करने का विधान है।
              </p>
              <p className="leading-[28px] m-0">
                • <NText bold>लाभ:</NText> इससे चेहरे की चिकनाई और गंदगी साफ होती है, मुंहासे (मुखदूषिका/युवानपिडिका), झाइयां (व्यंग) और नीलिका रोग नष्ट होते हैं, नेत्रों की थकान मिटती है और मुख की कांति बढ़ती है।
              </p>
              <p className="leading-[28px] m-0 mt-1 border-t border-dashed border-[var(--theme-text)]/40 pt-1">
                • <NAccent bold>वर्तमान फेस वॉश (Current Face Washes):</NAccent> आजकल बाजार में मिलने वाले सिंथेटिक फेस वॉश में SLS (Sodium Lauryl Sulfate), Parabens और कृत्रिम सुगंध होती है, जो त्वचा के प्राकृतिक सुरक्षात्मक तेल (Sebum barrier) और pH को नष्ट कर देते हैं, जिससे त्वचा रूखी और संवेदनशील हो जाती है। इसलिए मुल्तानी मिट्टी, बेसन, चंदन, नीम या माइल्ड हर्बल फेस वॉश का ही प्रयोग करना चाहिए।
              </p>
            </div>

            {/* B. दन्तधावन */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                B. दन्तधावन (Dantadhavana - दातुन करना)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>समय (Time):</NText> दिन में दो बार — प्रातः काल उठने के बाद और भोजन करने के बाद (<NAccent bold>&ldquo;प्रातर्भुक्त्वा च&rdquo;</NAccent>)।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>दातुन का स्वरूप एवं विधि (Procedure):</NText> दातुन किसी ज्ञात वृक्ष की सीधी, गांठ रहित (अग्रन्थि), ताजी टहनी से लेनी चाहिए।
              </p>
              <p className="leading-[28px] m-0 pl-4">
                • <NAccent bold>मोटाई:</NAccent> कनिष्ठिका अंगुली (छोटी उंगली) के समान (<NText bold>कनिष्ठिकाग्रसमस्थौल्यम्</NText>)।
                <br />• <NAccent bold>लंबाई:</NAccent> 12 अंगुल लंबी (<NText bold>द्वादशांगुलमायतम्</NText>)।
                <br />• <NAccent bold>विधि:</NAccent> इसके आगे के हिस्से को दांतों से चबाकर नरम ब्रश (कूची) जैसा बना लें और मसूड़ों को बिना चोट पहुंचाए (<NText bold>अबाधमानो मांसानि</NText>) नीचे के दांतों की पहले और फिर ऊपर के दांतों की धीरे-धीरे सफाई करें। दन्तचूर्ण (मंजन) में त्रिकटु, त्रिफला, तेजवती, सैंधव लवण और मधु व तेल मिलाकर भी उपयोग किया जाता है।
              </p>

              {/* रस के अनुसार वृक्ष Grid */}
              <p className="leading-[28px] m-0 mt-2 font-bold text-[var(--theme-accent)]">
                (3) रस के अनुसार वृक्ष (Herbs as per Rasa) — कषाय, तिक्त और कटु रस श्रेष्ठ (आचार्य सुश्रुत ने मधुर रस भी माना है):
              </p>
              <div className="my-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
                <div className="border border-[var(--theme-text)]/50 p-2 bg-[var(--theme-bg)]/60">
                  • <NAccent bold>तिक्त रस (Bitter):</NAccent> निम्ब (नीम) — कृमिघ्न और कफनाशक।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2 bg-[var(--theme-bg)]/60">
                  • <NAccent bold>कषाय रस (Astringent):</NAccent> खदिर (कत्था), बब्बूल (बबूल), करवीर — मसूड़ों को मजबूत करने वाले।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2 bg-[var(--theme-bg)]/60">
                  • <NAccent bold>कटु रस (Pungent):</NAccent> करंज (करंज), अर्क (मदार) — मुख की दुर्गंध और कफ मिटाने वाले।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2 bg-[var(--theme-bg)]/60">
                  • <NAccent bold>मधुर रस (Sweet):</NAccent> मधूक (महुआ) — पित्त शामक।
                </div>
              </div>

              <p className="leading-[28px] m-0">
                (4) <NText bold>लाभ (Benefits):</NText> मुख की दुर्गंध (दौर्गन्ध्य), दांतों का मैल (मल), जिह्वा का लेप (उपदेह) और कफ नष्ट होता है तथा भोजन में रुचि जागृत होती है।
              </p>
              <p className="leading-[28px] m-0">
                (5) <NAccent bold>दन्तधावन के निषेध (Contraindications - किन्हें दातुन नहीं करनी चाहिए):</NAccent> अर्दित (Facial paralysis), नेत्र रोग, कर्ण रोग, शिरोरोग, मुखपाक, तृष्णा (अत्यधिक प्यास), अजीर्ण (अपच), छर्दि (उल्टी), श्वास (दमा), कास (खांसी), नवज्वर और हृदयरोग से पीड़ित व्यक्ति को लकड़ी की दातुन नहीं करनी चाहिए (वे उंगली से हल्का मंजन या केवल कुल्ला कर सकते हैं)।
              </p>
              <div className="mt-2 border-t border-dashed border-[var(--theme-text)]/40 pt-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (6) आधुनिक ब्रशिंग तकनीक और टूथपेस्ट (Modern Techniques &amp; Dentifrices):
                </p>
                <p className="leading-[28px] m-0">
                  • आधुनिक दन्त विज्ञान में <NAccent bold>&apos;मॉडिफाइड बास तकनीक&apos; (Modified Bass Technique)</NAccent> सर्वश्रेष्ठ मानी जाती है, जिसमें सॉफ्ट ब्रिसल वाले ब्रश को मसूड़ों की लाइन पर 45 डिग्री के कोण पर रखकर हल्के गोल घुमावदार स्ट्रोक्स (Circular motion) में चलाया जाता है।
                </p>
                <p className="leading-[28px] m-0">
                  • रासायनिक टूथपेस्ट में फ्लोराइड की अधिकता (Fluorosis का खतरा), ट्राइक्लोसन (Triclosan) और कृत्रिम झाग बनाने वाले रसायन होते हैं; अतः आयुर्वेदिक औषधीय तत्वों युक्त टूथपेस्ट या दन्तमंजन अधिक सुरक्षित हैं।
                </p>
              </div>
            </div>

            {/* C. जिह्वानिर्लेखन */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                C. जिह्वानिर्लेखन (Jihwanirlekhana - जीभ साफ करना)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>शास्त्रीय उपकरण (Classical Tools):</NText> जीभ साफ करने की पट्टी (निर्लेखनी) सोने, चांदी, तांबे, पीतल, रांगा या जिस पेड़ की दातुन की हो उसी की चिकनी लकड़ी से बनी होनी चाहिए। यह <NAccent bold>10 अंगुल लंबी</NAccent>, मुड़ी हुई (वक्र), कोमल और धार रहित (अतीक्ष्ण) होनी चाहिए ताकि जीभ न कटे।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>वर्तमान उपकरण (Modern Tools):</NText> आजकल स्टेनलेस स्टील, तांबे (Copper) और प्लास्टिक के टंग क्लीनर प्रचलित हैं। तांबे और स्टील के टंग क्लीनर सबसे उत्तम हैं क्योंकि तांबे में प्राकृतिक जीवाणुनाशक (Antimicrobial) गुण होते हैं, जबकि प्लास्टिक में बैक्टीरिया पनपने का डर रहता है।
              </p>
              <p className="leading-[28px] m-0">
                (3) <NText bold>लाभ (Benefits):</NText> जीभ के मूल (पीछे के हिस्से) में जमा सफेद मल और कफ निकल जाता है, श्वास की दुर्गंध (Halitosis) दूर होती है, जड़ता मिटती है और स्वाद ग्रंथियां (Taste buds) खुल जाती हैं जिससे भोजन का सही स्वाद मिलता है।
              </p>
            </div>

            {/* D. अञ्जन */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                D. अञ्जन (Anjana - आंखों में काजल/सुरमा लगाना)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>सिद्धांत:</NText> नेत्र <NAccent bold>&apos;तेजोमहाभूत&apos; (अग्नि/पित्त)</NAccent> प्रधान अंग हैं, इसलिए इन्हें सबसे ज्यादा खतरा कफ दोष से होता है। कफ को नेत्रों से निकालकर दृष्टि को निर्मल रखने के लिए अञ्जन लगाया जाता है।
              </p>
              <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] mt-1">
                (2) स्वस्थ व्यक्ति के लिए अञ्जन के द्रव्य एवं प्रकार (Anjana Dravyas for Swastha):
              </p>
              <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>• सौवीरञ्जन (Sauveeranjana - Antimony Sulfide):</NAccent> यह कोमल और शीतल होता है। इसे स्वस्थ व्यक्ति को <NText bold>प्रतिदिन (Daily)</NText> लगाना चाहिए।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>• रसाञ्जन (Rasanjana - दारुहरिद्रा का घनसत्व / Extract of Berberis aristata):</NAccent> यह उष्ण और तीक्ष्ण होता है तथा कफ का स्राव (Drainage) कराता है। इसे प्रतिदिन न लगाकर <NText bold>प्रत्येक 5वें या 8वें दिन रात्रि में</NText> लगाना चाहिए (दिन में रसाञ्जन लगाने से सूर्य की तेज किरणों से आंखें कमजोर हो सकती हैं)।
                </div>
              </div>
              <p className="leading-[28px] m-0">
                (3) <NText bold>लाभ (Benefits):</NText> आंखों से कफ और गंदगी आंसू के रूप में बाहर निकल जाती है, पलकें सुंदर और घनी होती हैं, आंखें साफ और चमकदार दिखती हैं (मनोज्ञता), तथा व्यक्ति सूक्ष्म से सूक्ष्म वस्तु को भी आसानी से देख सकता है।
              </p>
              <p className="leading-[28px] m-0">
                (4) <NText bold>व्यवसाय के अनुसार उपयोग (Occupational Application):</NText> आज के डिजिटल युग में सॉफ्टवेयर इंजीनियर्स (IT Professionals), छात्र, ड्राइवर, दर्जी, वेल्डिंग करने वाले और सूक्ष्म कार्य करने वाले लोगों को &apos;कंप्यूटर विजन सिंड्रोम&apos; (आंखों का सूखापन और थकान) से बचने के लिए अञ्जन (या गुलाब जल/त्रिफला आई ड्रॉप्स) का प्रयोग अवश्य करना चाहिए।
              </p>
              <p className="leading-[28px] m-0 italic text-xs md:text-sm">
                (नोट: रात्रि जागरण के बाद, बुखार में, सिर धोने के तुरंत बाद और धूप से तुरंत आकर अञ्जन नहीं लगाना चाहिए)।
              </p>
            </div>

            {/* E. प्रतिमर्श नस्य */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                E. प्रतिमर्श नस्य (Pratimarsha Nasya)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>सिद्धांत:</NText> <NAccent bold>&ldquo;नासा हि शिरसो द्वारम्&rdquo;</NAccent> — नाक सिर का दरवाजा है। नाक में औषधीय तेल डालने से वह श्रृंगाटक मर्म में पहुंचकर आंख, कान, नाक और गले की सभी शिराओं को पोषण देता है। नस्य दो प्रकार का होता है: <NText bold>मर्श</NText> (अधिक मात्रा) और <NText bold>प्रतिमर्श</NText> (कम मात्रा, जो बिना किसी नियम या खतरे के प्रतिदिन लिया जा सके)।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>द्रव्य और मात्रा (Dravyas &amp; Dose):</NText>
                <br />• <NAccent bold>द्रव्य:</NAccent> अणु तैल (Anu Taila) (सर्वश्रेष्ठ), षड्बिन्दु तैल, शुद्ध तिल तैल या गाय का घी।
                <br />• <NAccent bold>मात्रा:</NAccent> प्रत्येक नासापुट (Nostril) में <NText bold>2 बूंद (द्विबिन्दु)</NText> (अथवा उंगली को तेल में डुबोकर टपकने वाली बूंद)।
              </p>

              {/* प्रतिमर्श नस्य के 14 / 15 काल */}
              <div className="my-2 border border-[var(--theme-accent)]/60 p-2.5 bg-[var(--theme-bg)]/70">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline mb-1">
                  (3) प्रतिमर्श नस्य के 14 / 15 काल (Timings as per Day &amp; Season — वाग्भट अनुसार 14 एवं सुश्रुत अनुसार 15 काल):
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-xs md:text-sm leading-[26px]">
                  <p className="m-0">1. <NText bold>प्रातः सोकर उठने पर (तल्पान्त):</NText> नाक का मल साफ करता है।</p>
                  <p className="m-0">2. <NText bold>दन्तधावन के बाद:</NText> दांत मजबूत और मुख सुगंधित होता है।</p>
                  <p className="m-0">3. <NText bold>घर से बाहर निकलते समय (गृहान्निर्गच्छतः):</NText> धूल और धुएं से बचाव करता है।</p>
                  <p className="m-0">4. <NText bold>व्यायाम के बाद:</NText> थकान मिटाता है।</p>
                  <p className="m-0">5. <NText bold>मैथुन के बाद:</NText> वीर्य और बल की हानि रोकता है।</p>
                  <p className="m-0">6. <NText bold>यात्रा की थकान (अध्वपरिश्रान्त) के बाद:</NText> क्लान्ति मिटाता है।</p>
                  <p className="m-0">7. <NText bold>मल-मूत्र त्याग के बाद:</NText> दृष्टि का भारीपन दूर करता है।</p>
                  <p className="m-0">8. <NText bold>कवल के बाद</NText> और 9. <NText bold>अञ्जन के बाद:</NText> दृष्टि को निर्मल करता है।</p>
                  <p className="m-0">10. <NText bold>भोजन के बाद:</NText> अन्न के स्रोतों को शुद्ध करता है।</p>
                  <p className="m-0">11. <NText bold>वमन (उल्टी) के बाद:</NText> गले का कफ साफ कर भोजन में रुचि लाता है।</p>
                  <p className="m-0">12. <NText bold>दिन में सोने (दिवास्वप्न) के बाद उठने पर:</NText> निद्रा का भारीपन और मानसिक जड़ता दूर करता है।</p>
                  <p className="m-0">13. <NText bold>सायंकाल में:</NText> रात को अच्छी नींद लाता है।</p>
                  <p className="m-0 md:col-span-2">14. <NText bold>सिर में तेल लगाने के बाद</NText> और 15. <NText bold>बहुत अधिक हंसने (अतिहसित) के बाद:</NText> वात को शांत करता है।</p>
                </div>
              </div>

              <p className="leading-[28px] m-0">
                (4) <NText bold>ऋतु के अनुसार (As per Ritu):</NText> प्रतिमर्श नस्य सभी ऋतुओं में (यहां तक कि दुर्दिन या बादल होने पर भी) लिया जा सकता है। विशेष रूप से वर्षा, शरद और वसंत ऋतु में जब आकाश में बादल न हों, अणु तैल नस्य अत्यंत लाभकारी है।
              </p>
              <p className="leading-[28px] m-0">
                (5) <NText bold>सामान्य लाभ (Benefits):</NText> गर्दन, कंधे और छाती मजबूत होते हैं, त्वचा में निखार आता है, इंद्रियां सशक्त होती हैं, और असमय बाल सफेद होना (पलित) तथा झड़ना (खालित्य) रुक जाता है।
              </p>
              <p className="leading-[28px] m-0">
                (6) <NText bold>व्यवसाय के अनुसार उपयोग (Occupational Application):</NText> शिक्षक (Teachers), गायक, वक्ता (अधिक बोलने वाले), ट्रैफिक पुलिस, खदान और निर्माण कार्य (Construction/Dust exposure) में लगे मजदूरों के लिए यह स्वरभंग और एलर्जिक राइनाइटिस से बचने का सर्वोत्तम उपाय है।
              </p>
            </div>

            {/* F. कवल एवं गण्डूष */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                F. कवल एवं गण्डूष (Kavala and Gandusha - कुल्ला और ऑयल पुलिंग)
              </p>
              <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>(1) गण्डूष (Gandusha):</NAccent> मुंह में औषधीय द्रव या तेल को इतनी पूरी मात्रा में भर लेना कि उसे मुंह के अंदर हिलाया-डुलाया न जा सके (<NText bold>असञ्चारी मुखे पूर्णो गण्डूषः</NText>)। इसे तब तक रोक कर रखा जाता है जब तक गले में कफ न भर जाए और आंखों व नाक से पानी न आने लगे, फिर इसे थूक दिया जाता है।
                </div>
                <div className="border border-[var(--theme-text)]/50 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>(2) कवल (Kavala):</NAccent> मुंह में द्रव की इतनी मात्रा (लगभग 3/4 भाग) रखना जिसे मुंह के अंदर आसानी से घुमाया जा सके और गरारे/कुल्ले किए जा सकें (<NText bold>सञ्चारी तु कवलः</NText>)।
                </div>
              </div>
              <p className="leading-[28px] m-0">
                • <NText bold>स्वस्थ व्यक्ति के लिए द्रव्य एवं विधि (Ingredients &amp; Procedure):</NText> दैनिक उपयोग के लिए शुद्ध तिल तैल (Sesame oil), गोदुग्ध, सुखोष्ण जल (गुनगुना पानी), या त्रिफला/खदिर क्वाथ का प्रयोग किया जाता है।
              </p>
              <p className="leading-[28px] m-0">
                • <NText bold>लाभ (Benefits):</NText> (i) जबड़ों और आवाज में बल आता है (हनुबल, स्वरबल), चेहरे की मांसपेशियां पुष्ट होती हैं। (ii) होंठ कभी फटते नहीं हैं, गला सूखता नहीं है। (iii) दांतों में कीड़ा लगना (दन्तक्षय), दांतों का खट्टापन/झनझनाहट (दन्तहर्ष) और दन्तशूल कभी नहीं होता तथा दांत जड़ से इतने मजबूत हो जाते हैं कि कठोर से कठोर अन्न भी आसानी से चबा सकते हैं।
              </p>
              <p className="leading-[28px] m-0 mt-1 border-t border-dashed border-[var(--theme-text)]/40 pt-1">
                • <NAccent bold>बाजार में उपलब्ध माउथवॉश (Market Mouthwashes):</NAccent> आधुनिक केमिकल माउथवॉश में अल्कोहल और क्लोरहेक्सिडिन (Chlorhexidine) होता है। इनका लंबे समय तक उपयोग करने से मुंह के लाभदायक बैक्टीरिया (Oral Microbiome) मर जाते हैं, मुंह सूखने लगता है (Xerostomia) और दांतों पर भूरे दाग पड़ जाते हैं। इसके मुकाबले आयुर्वेदिक तैल गण्डूष (Oil Pulling) पूरी तरह सुरक्षित है।
              </p>
            </div>

            {/* G. ताम्बूल सेवन */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                G. ताम्बूल सेवन (Tambula Sevana - पान खाना)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>शास्त्रीय ताम्बूल के घटक (Classical Ingredients):</NText> स्वच्छ नागरबेल का पान का पत्ता (नागवल्ली), जातीफल (जायफल), कङ्कोल (कबाबचीनी), लवंग (लौंग), कर्पूर (भीमसेनी कपूर), एला (इलायची), पूगफल (सुपारी) और अल्प मात्रा में चूना व खदिर (कत्था)।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>समय और लाभ:</NText> भोजन के बाद, स्नान और वमन के बाद तथा सोकर उठने पर ताम्बूल सेवन करना चाहिए। यह मुख की स्वच्छता (वैशद्य), सुगंध, कांति और भोजन में रुचि बढ़ाता है तथा गले के कफ और वात को नष्ट कर पाचन में सहायता करता है।
              </p>
              <p className="leading-[28px] m-0">
                (3) <NAccent bold>शास्त्रीय ताम्बूल बनाम आधुनिक पान/गुटखा (Classical vs. Present-day Betel Chewing):</NAccent>
                <br />• शास्त्रीय ताम्बूल एक पाचक और मुखशोधक औषधि है जिसमें तम्बाकू (Tobacco) बिल्कुल नहीं होता।
                <br />• आजकल के पान मसाला और गुटखा में तम्बाकू, निकोटीन, सड़ा हुआ कत्था, भारी मात्रा में चूना और कांच का चूरा व केमिकल होते हैं। यह मुंह की श्लेष्मा झिल्ली को सख्त कर देता है जिससे मुंह खुलना बंद हो जाता है (<NText bold>Oral Submucous Fibrosis - OSMF</NText>) और अंततः मुख कैंसर (<NText bold>Oral Cancer</NText>) होता है।
              </p>
              <p className="leading-[28px] m-0 italic text-xs md:text-sm">
                (निषेध: रक्तपित्त, उरःक्षत, नेत्र रोग, विष पीड़ित और सूखे शरीर वाले व्यक्ति को पान नहीं खाना चाहिए)।
              </p>
            </div>

            {/* H. प्रायोगिक धूमपान एवं तम्बाकू के दुष्प्रभाव */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                H. प्रायोगिक धूमपान एवं तम्बाकू के दुष्प्रभाव (Prayogika Dhoomapana &amp; Ill Effects of Tobacco)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>आयुर्वेदिक धूमपान का सिद्धांत:</NText> सिर, नाक और गले (ऊर्ध्वजत्रुगत अंगों) में होने वाले वात और कफ के रोगों को रोकने के लिए औषधीय धुएं का पान करना। यह 3 प्रकार का होता है: <NAccent bold>1. प्रायोगिक</NAccent> (दैनिक स्वास्थ्य रक्षा हेतु मध्यम धूम), <NAccent bold>2. स्नैहिक</NAccent> (वात शामक मृदु धूम), और <NAccent bold>3. वैरेचनिक</NAccent> (कफ निस्सारक तीक्ष्ण धूम)।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>प्रायोगिक धूमपान के द्रव्य और विधि (Practical Application):</NText>
                <br />• <NAccent bold>द्रव्य:</NAccent> एला (इलायची), त्वक् (दालचीनी), नागकेशर, उशीर (खस), चंदन, हरिद्रा, मुलेठी, गुग्गुलु आदि सुगंधित औषधियों को पीसकर सरकंडे की सींक पर लपेट कर धूमवर्ति (Herbal Cigar/Wick) बनाई जाती है। (आधुनिक रूप में इसे Herbal Inhalers के रूप में भी उपयोग किया जाता है)।
                <br />• <NAccent bold>विधि:</NAccent> प्रायोगिक धूमपान के लिए <NText bold>24 अंगुल लंबे धूमनेत्र</NText> (पाइप) का प्रयोग किया जाता है। छाती सीधी रखकर, एक नासापुट को बंद करके दूसरे नासापुट से धुआं खींचा जाता है।
                <br />• <NAccent bold>सबसे महत्वपूर्ण नियम:</NAccent> धुआं चाहे नाक से खींचें या मुंह से, उसे बाहर हमेशा <NText bold>मुंह से ही</NText> निकालना चाहिए (नासिका से धुआं बाहर निकालने पर आंखों की रोशनी नष्ट हो जाती है!)। एक बार में 3 कश (Puffs) लिए जाते हैं, और ऐसा 3 बार किया जाता है।
              </p>
              <p className="leading-[28px] m-0">
                (3) <NText bold>प्रायोगिक धूमपान के 8 काल:</NText> स्नान के बाद, भोजन के बाद, दन्तधावन के बाद, वमन के बाद, छींक आने के बाद, नस्य के बाद, अञ्जन के बाद और निद्रा के बाद।
              </p>
              <p className="leading-[28px] m-0">
                (4) <NText bold>लाभ (Benefits):</NText> खांसी, श्वास, पीनस (जुकाम), स्वरभेद (आवाज बैठना), गले की जकड़न, अर्धावभेदक (माइग्रेन), कान-आंख का दर्द और तन्द्रा (आलस्य) नष्ट होते हैं।
              </p>
              <p className="leading-[28px] m-0">
                (5) <NText bold>धूमपान के निषेध (Contraindications):</NText> विरेचन और बस्ति कर्म के बाद, रक्तपित्त, विष पीड़ित, गर्भिणी स्त्री (Pregnant women), शोक या क्रोध से पीड़ित, रात्रि जागरण के बाद, प्रमेह, मद्य (शराब), दूध या दही पीने के तुरंत बाद धूमपान वर्जित है।
              </p>

              {/* तम्बाकू धूम्रपान के दुष्प्रभाव */}
              <div className="mt-2 border-2 border-red-500/40 p-2.5 bg-[var(--theme-bg)]/70">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] underline">
                  (6) तम्बाकू धूम्रपान (बीड़ी, सिगरेट, हुक्का) के दुष्प्रभाव (Ill Effects of Tobacco Smoking):
                </p>
                <p className="leading-[28px] m-0">
                  • बीड़ी, सिगरेट और हुक्के में औषधीय द्रव्य न होकर तम्बाकू (Nicotine), टार (Tar), कार्बन मोनोऑक्साइड और 70 से अधिक कैंसरकारी रसायन (Carcinogens) होते हैं।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>फेफड़ों पर प्रभाव:</NAccent> यह फेफड़ों की एल्वियोलाई (Alveoli) को नष्ट कर COPD (Chronic Bronchitis &amp; Emphysema), दमा और फेफड़ों का कैंसर (Lung Cancer) पैदा करता है।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>हृदय और रक्तवाहिनियों पर प्रभाव:</NAccent> निकोटीन रक्तवाहिनियों को सिकोड़ता है, BP बढ़ाता है, खून को गाढ़ा करता है और हार्ट अटैक (CAD) व लकवे (Stroke) का कारण बनता है।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>हुक्का का भ्रम:</NAccent> युवाओं में यह भ्रम है कि हुक्के का धुआं पानी से छनकर आता है इसलिए वह सुरक्षित है; जबकि वास्तव में 1 घंटे का हुक्का सेशन 100 सिगरेट के बराबर धुआं और भारी धातुएं (Heavy metals) शरीर में पहुंचाता है।
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 5. शारीरिक परिचर्या (Physical Regimen & Body Care)          */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              5.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              शारीरिक परिचर्या (Physical Regimen &amp; Body Care)
            </h3>

            {/* A. अभ्यङ्ग */}
            <div className="mt-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                A. अभ्यङ्ग (Abhyanga - तेल मालिश)
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;अभ्यंगं आचरेत् नित्यं, स जरा श्रम वातहा। दृष्टि प्रसाद पुष्ट्यायुः स्वप्न सुत्वक्त्व दार्ढ्यकृत्।।&rdquo;
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>महत्व और शारीरिक प्रभाव (Physiological Effects):</NText> प्रतिदिन शरीर पर तेल की मालिश करने से बुढ़ापा देर से आता है (जराहर), शारीरिक थकान मिटती है (श्रमहर), वात दोष शांत होता है, आंखों की रोशनी बढ़ती है (दृष्टिप्रसाद), धातुओं को पोषण मिलता है (पुष्टि), आयु बढ़ती है, गहरी नींद आती है (स्वप्न), और त्वचा कोमल, चमकदार व मजबूत बनती है। आधुनिक विज्ञान के अनुसार, मालिश से त्वचा में रक्त संचार (Micro-circulation) बढ़ता है, लसीका तंत्र (Lymphatic drainage) सक्रिय होकर टॉक्सिन्स बाहर निकालता है और पैरासिम्पैथेटिक नर्वस सिस्टम एक्टिव होकर तनाव कम करता है।
              </p>

              {/* 3 विशेष स्थान */}
              <p className="leading-[28px] m-0 mt-2 font-bold text-[var(--theme-accent)]">
                (2) सर्वाङ्ग अभ्यङ्ग और 3 विशेष स्थान (शिरः श्रवण पादेषु तं विशेषेण शीलयेत्):
              </p>
              <p className="leading-[28px] m-0">
                यदि समय के अभाव में रोज पूरे शरीर पर मालिश (सर्वाङ्ग अभ्यङ्ग) न कर सकें, तो भी इन 3 स्थानों पर प्रतिदिन तेल अवश्य लगाना चाहिए:
              </p>
              <div className="my-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs md:text-sm">
                <div className="border border-[var(--theme-text)]/60 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>1. शिरोभ्यङ्ग (Shiroabhyanga - सिर में तेल लगाना):</NAccent> यह सिरदर्द, गंजापन (खालित्य), बालों का पकना (पालित्य) रोकता है, बाल काले, लंबे और जड़ से मजबूत होते हैं, सभी इंद्रियां प्रसन्न रहती हैं और गहरी नींद आती है।
                </div>
                <div className="border border-[var(--theme-text)]/60 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>2. पादभ्यङ्ग (Padabhyanga - पैरों के तलवों की मालिश):</NAccent> पैरों का खुरदरापन, फटना (पाददारी/बिवाई), सुन्नपन (सुप्ति), थकान और जकड़न दूर होती है। गृध्रसी (Sciatica) रोग नहीं होता और तलवों की नाड़ियों का सीधा संबंध आंखों से होने के कारण नेत्र ज्योति बढ़ती है।
                </div>
                <div className="border border-[var(--theme-text)]/60 p-2.5 bg-[var(--theme-bg)]/60">
                  <NAccent bold>3. कर्णपूरण (Karna Purana - कान में तेल डालना):</NAccent> कान में गुनगुना तेल डालने से कर्णशूल, बहरापन, कान में घंटियां बजना (Tinnitus), तथा जबड़े और गर्दन की जकड़न (मन्यास्तम्भ) नहीं होती।
                </div>
              </div>

              <p className="leading-[28px] m-0">
                (3) <NText bold>ऋतु और भौगोलिक क्षेत्र के अनुसार तेल का चयन (Oils as per Season &amp; Geography):</NText>
                <br />• <NAccent bold>शीत ऋतु (हेमंत, शिशिर) एवं ठंडे/जांगल प्रदेश:</NAccent> उष्ण वीर्य वाले तेल जैसे तिल तैल (Sesame oil) या सर्षप तैल (सरसों का तेल)।
                <br />• <NAccent bold>ग्रीष्म और शरद ऋतु एवं गर्म प्रदेश:</NAccent> शीत वीर्य वाले तेल जैसे नारिकेल तैल (Coconut oil), चंदनबलालाक्षादि तैल, या गोधृत।
                <br />• <NAccent bold>वर्षा ऋतु (अनूप प्रदेश):</NAccent> वात शामक बला तैल या तिल तैल (हल्का गुनगुना करके)।
              </p>
              <p className="leading-[28px] m-0">
                (4) <NText bold>आयु और व्यवसाय के अनुसार उपयोग (As per Age &amp; Occupation):</NText> नवजात शिशुओं (मांसपेशियों और हड्डियों के विकास हेतु), वृद्ध व्यक्तियों (बढ़े हुए वात को शांत करने हेतु), खिलाड़ियों (Athletes), भारी मजदूरी करने वालों और दिन भर खड़े रहकर काम करने वाले लोगों के लिए अभ्यंग अत्यंत आवश्यक है।
              </p>
              <p className="leading-[28px] m-0">
                (5) <NAccent bold>अभ्यङ्ग के निषेध (Contraindications):</NAccent> कफज रोगों से पीड़ित व्यक्ति, अजीर्ण (अपच) होने पर, नवज्वर (ताजा बुखार) में, और वमन-विरेचन (शोधन) कराने के तुरंत बाद अभ्यंग नहीं करना चाहिए।
              </p>
            </div>

            {/* B. व्यायाम */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                B. व्यायाम (Vyayama - शारीरिक कसरत)
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;शरीरचेष्टा या चेष्टा स्थैर्यार्था बलवर्धिनी। देहव्यायामसङ्ख्याता मात्रया तामाचरेत्।।&rdquo;
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>परिभाषा:</NText> शरीर की वह चेष्टा (गतिविधि) जो शरीर में स्थिरता (मजबूती) लाए और बल की वृद्धि करे, उसे &apos;देह व्यायाम&apos; कहते हैं। इसे हमेशा उचित मात्रा में ही करना चाहिए।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>लाभ (Benefits):</NText> शरीर में हल्कापन (लाघव), काम करने की क्षमता बढ़ना (कर्मसामर्थ्य), जठराग्नि का तीव्र होना (दीप्ताग्नित्व), अतिरिक्त चर्बी का घटना (मेदसः क्षयः), और शरीर की मांसपेशियों का सुगठित व मजबूत होना (विभक्तघनगात्रत्वम्)।
              </p>
              <div className="my-2 border border-[var(--theme-accent)]/60 p-2.5 bg-[var(--theme-bg)]/70">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (3) अर्धशक्ति व्यायाम के लक्षण (Ardhashakti Lakshanas):
                </p>
                <p className="leading-[28px] m-0">
                  शीतकाल (हेमंत और शिशिर) तथा वसंत ऋतु में बलवान और स्निग्ध भोजन करने वाले व्यक्ति को अपनी आधी शक्ति (अर्धशक्ति) तक व्यायाम करना चाहिए (अन्य ऋतुओं में इससे भी कम)। अर्धशक्ति के मुख्य लक्षण हैं:
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  • <NAccent bold>स्वेदागमः:</NAccent> ललाट (माथे), नाक की नोक, बगलों (कक्षा) और हाथ-पैरों के जोड़ों पर पसीना आ जाना।
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  • <NAccent bold>मुखशोष / प्राणवायु का मुख में आना:</NAccent> जब हृदय स्थान में स्थित प्राणवायु ऊपर उठकर मुख में आने लगे (अर्थात् सांस फूलने के कारण मुंह से सांस लेनी पड़े और गला सूखने लगे — <NText bold>हृदयात् स्थानं स्थितो वायुर्यदा वक्त्रं प्रपद्यते</NText>)।
                </p>
              </div>
              <p className="leading-[28px] m-0">
                (4) <NText bold>अति-व्यायाम के दुष्परिणाम (Consequences of Ati-Vyayama):</NText> अपनी क्षमता से अधिक व्यायाम करना ठीक वैसा ही है जैसे कोई शेर हाथी को खींचने की कोशिश में खुद नष्ट हो जाए। इससे अत्यधिक प्यास (तृष्णा), क्षय रोग (TB/Emaciation), प्रतमक श्वास (गंभीर दमा), रक्तपित्त (नाक-मुंह से खून आना), अत्यधिक थकान (श्रम), क्लम, कास, ज्वर और छर्दि (उल्टी) जैसे रोग हो जाते हैं।
              </p>
              <p className="leading-[28px] m-0">
                (5) <NText bold>व्यायाम के निषेध (Contraindications):</NText> वात और पित्त रोगों से पीड़ित व्यक्ति, बहुत छोटा बालक, बहुत बूढ़ा व्यक्ति (वृद्ध), अजीर्ण का रोगी, गर्भिणी स्त्री, और भोजन करने या मैथुन के तुरंत बाद व्यायाम नहीं करना चाहिए।
              </p>
              <div className="mt-2 border-t border-dashed border-[var(--theme-text)]/40 pt-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (6) प्रकृति, आयु और व्यवसाय के अनुसार आधुनिक व्यायाम (Present-day Exercises as per Prakriti, Age &amp; Occupation):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>वात प्रकृति / वृद्ध व्यक्ति / मानसिक श्रमजीवी:</NAccent> इन्हें भारी कसरत नहीं करनी चाहिए। इनके लिए हल्की पैदल चाल (Brisk walking), स्ट्रेचिंग, और योगासन सर्वोत्तम हैं।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>पित्त प्रकृति / मध्यम आयु:</NAccent> इन्हें बहुत गर्मी पैदा करने वाले व्यायाम से बचना चाहिए। इनके लिए तैराकी (Swimming), साइकिल चलाना और मध्यम स्तर की एरोबिक एक्सरसाइज (Aerobic exercises) उचित हैं।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>कफ प्रकृति / युवा / बैठे रहने का काम करने वाले (Sedentary Occupation):</NAccent> इनका शरीर भारी और कफ प्रधान होता है। इन्हें दौड़ना (Running/Jogging), तेज कार्डियो, और मांसपेशियों को मजबूत करने वाले भारी व्यायाम (Muscle strengthening / Weight training) करने चाहिए।
                </p>
              </div>
            </div>

            {/* C. उद्वर्तन, उद्घर्षण और उत्सादन का तुलनात्मक वर्णन */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                C. उद्वर्तन, उद्घर्षण और उत्सादन का तुलनात्मक वर्णन (Udvartana, Udgharshana &amp; Utsadana)
              </p>
              <p className="leading-[28px] m-0 mb-2">
                व्यायाम के बाद शरीर पर औषधीय चूर्ण या उबटन को बालों की दिशा के विपरीत (<NAccent bold>प्रतिलोम गति</NAccent> - नीचे से ऊपर की ओर) रगड़ना उद्वर्तन कहलाता है। इसके तीन भेद हैं:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[var(--theme-text)]/70 text-xs md:text-base">
                  <thead>
                    <tr className="bg-[var(--theme-accent)]/15 border-b border-[var(--theme-text)]/70">
                      <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)] w-1/6">
                        विशेषता
                      </th>
                      <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)]">
                        1. उद्वर्तन (Udvartana)
                      </th>
                      <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)]">
                        2. उद्घर्षण (Udgharshana)
                      </th>
                      <th className="p-2 text-left font-bold text-[var(--theme-accent)]">
                        3. उत्सादन (Utsadana)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-top leading-[26px]">
                    <tr className="border-b border-[var(--theme-text)]/40">
                      <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                        स्वरूप एवं विधि
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        सूखे या हल्के औषधीय चूर्ण से पूरे शरीर पर मालिश करना।
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        बिना तेल के केवल रुक्ष (सूखे) और थोड़े खुरदरे चूर्ण को त्वचा पर रगड़ना।
                      </td>
                      <td className="p-2">
                        औषधीय चूर्ण में तेल, घी या दूध (स्नेह) मिलाकर गाढ़ा उबटन (Paste) बनाकर लगाना।
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--theme-text)]/40">
                      <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                        प्रयुक्त द्रव्य
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        कुलत्थ (कुलथी), त्रिफला, मुस्ता (नागरमोथा), यव (जौ) का चूर्ण।
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        शिरीष, लोध्र, सरसों या ईंट का बारीक चूर्ण (इष्टका चूर्ण)।
                      </td>
                      <td className="p-2">
                        चंदन, मंजिष्ठा, हरिद्रा (हल्दी), मुलेठी, बेसन और दूध/तेल।
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--theme-text)]/40">
                      <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                        मुख्य कर्म और लाभ
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        <NAccent bold>कफहर और मेदोहर।</NAccent> यह त्वचा के नीचे जमी अतिरिक्त चर्बी (Fat) को पिघलाता है और अंगों को सुडौल व स्थिर बनाता है (<NText bold>कफमेदोविलापनम्</NText>)।
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        त्वचा के बंद रोमछिद्रों को खोलता है, अत्यधिक पसीना, दुर्गंध, कण्डू (खुजली) और कोठ (चकत्ते/Rashes) को नष्ट करता है।
                      </td>
                      <td className="p-2">
                        <NAccent bold>वात-पित्त शामक।</NAccent> यह त्वचा के रूखेपन को मिटाकर त्वचा को अत्यंत कोमल, चिकना और कांतिमान (Glowing) बनाता है।
                      </td>
                    </tr>
                    <tr>
                      <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                        किसके लिए उपयुक्त
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        मोटापे (Obesity), प्रमेह (Diabetes) और कफ प्रकृति वाले लोगों के लिए।
                      </td>
                      <td className="border-r border-[var(--theme-text)]/70 p-2">
                        त्वचा के रोगों, पसीने की बदबू और आलस्य से ग्रस्त लोगों के लिए।
                      </td>
                      <td className="p-2">
                        दुबले-पतले, रूखी त्वचा वाले (वात प्रकृति) और सौंदर्य वर्धन के लिए।
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* D. स्नान */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                D. स्नान (Snana - नहाना)
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;दीपनं वृष्यमायुष्यं स्नानं ऊर्जाबलप्रदम्। कण्डूमलश्रमस्वेदतन्द्रातृड्दाहपाप्मजित्।।&rdquo;
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>प्रकार एवं जल का तापमान (Types of Bath):</NText>
                <br />• गर्दन से नीचे के शरीर (अधःकाय) को गुनगुने पानी (उष्णाम्बु) से धोने से शरीर में बल बढ़ता है।
                <br />• सिर (उत्तमांग) पर हमेशा सामान्य या ठंडा पानी ही डालना चाहिए। सिर पर गर्म पानी डालने से बालों की जड़ें और आंखों की रोशनी नष्ट हो जाती है (<NAccent bold>उष्णाम्बुना अधःकायस्य परिषेको बलावहः, तेनैव तु उत्तमांगस्य बलहृत् केशचक्षुषाम्</NAccent>)।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>शरीर और मन पर प्रभाव (Physiological Effects on Body &amp; Mind):</NText> स्नान करने से जठराग्नि प्रदीप्त होती है (दीपन), शुक्र और पौरुष बल बढ़ता है (वृष्य), आयु बढ़ती है, शरीर में तुरंत ऊर्जा और उत्साह का संचार होता है। यह त्वचा की खुजली (कण्डू), मैल (मल), थकान (श्रम), पसीना (स्वेद), आलस्य (तन्द्रा), प्यास (तृष्णा), जलन (दाह) और मन के पाप/नकारात्मक विचारों (पाप्म) को धोकर मन को एकदम शांत और पवित्र कर देता है।
              </p>
              <div className="mt-2 border-t border-dashed border-[var(--theme-text)]/40 pt-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (3) स्नान के निषेध और उनके कारण (Contraindications of Snana with Reasons):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>अर्दित (Facial Paralysis), नेत्र, मुख और कर्ण रोग तथा पीनस (जुकाम):</NAccent> सिर और चेहरे पर ठंडा पानी पड़ने से वात और कफ प्रकुपित होकर इन रोगों को और गंभीर बना देते हैं।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>अजीर्ण (Indigestion), आध्मान (पेट फूलना) और अतिसार (दस्त):</NAccent> इन अवस्थाओं में जठराग्नि पहले से ही मंद होती है; नहाने से रक्त संचार त्वचा की ओर चला जाता है जिससे आंतों की अग्नि और मंद हो जाती है।
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>भोजन के तुरंत बाद (भुक्त्वा च):</NAccent> खाना खाने के तुरंत बाद पाचन के लिए पेट (Jathara) में रक्त के प्रवाह की आवश्यकता होती है। तुरंत नहाने से शरीर का तापमान गिरता है और रक्त प्रवाह त्वचा की तरफ बंट जाता है, जिससे पाचन क्रिया रुक जाती है और आमविष बनता है।
                </p>
              </div>
            </div>

            {/* E. अनुलेपन एवं आधुनिक प्रसाधन */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                E. अनुलेपन एवं आधुनिक प्रसाधन (Anulepana &amp; Modern Cosmetics)
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>अनुलेपन का महत्व और लाभ (Importance &amp; Benefits of Anulepana):</NText> स्नान के बाद शरीर को साफ तौलिए से पोंछकर मौसम के अनुसार सुगंधित औषधीय लेप (जैसे ग्रीष्म में चंदन और खस, तथा शीतकाल में केसर, अगरु और कस्तूरी) लगाना &apos;अनुलेपन&apos; कहलाता है।
                <br />• <NAccent bold>लाभ:</NAccent> यह सौभाग्य और आकर्षण बढ़ाता है, शरीर की दुर्गंध (दौर्गन्ध्य) और पसीने को रोकता है, त्वचा का वर्ण निखारता है (त्वक्प्रसाद), तथा थकान व जलन को मिटाता है।
              </p>

              <div className="mt-2 border-t border-dashed border-[var(--theme-text)]/40 pt-2">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (2) आधुनिक सौंदर्य प्रसाधनों के गुण और दोष (Merits &amp; Demerits of Face Powder, Packs, Lotions, Lipsticks, Deodorants &amp; Perfumes):
                </p>
                <p className="leading-[28px] m-0">
                  • <NAccent bold>गुण (Merits):</NAccent> इनका उपयोग करना आसान और त्वरित (Quick) होता है, सनस्क्रीन लोशन सूर्य की हानिकारक UV किरणों से बचाते हैं, मॉइस्चराइजर सर्दियों में त्वचा को फटने से रोकते हैं, और परफ्यूम व मेकअप सामाजिक जीवन में तत्काल आत्मविश्वास (Confidence) देते हैं।
                </p>
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] mt-1">
                  • दोष एवं नुकसान (Demerits):
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  (i) <NText bold>फेस पाउडर और कॉम्पैक्ट (Face Powders):</NText> इनमें टैल्क (Talc) और एस्बेस्टस के सूक्ष्म कण होते हैं जो त्वचा के रोमछिद्रों (Sweat pores) को बंद कर देते हैं, जिससे मुंहासे और ब्लैकहेड्स होते हैं।
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  (ii) <NText bold>लिपस्टिक और बाम (Lipsticks &amp; Balms):</NText> सस्ती और गहरे रंग की लिपस्टिक में सीसा (Lead), कैडमियम और क्रोमियम जैसी भारी धातुएं (Heavy metals) तथा पेट्रोलियम जेली होती है, जो खाने के साथ पेट में जाकर धीमे जहर (Slow poison) का काम करती हैं और होंठों को काला कर देती हैं।
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  (iii) <NText bold>डिओडोरेंट और एंटी-पर्सपिरेंट (Deodorants &amp; Perfumes):</NText> पसीना रोकने वाले रोल-ऑन और स्प्रे में एल्युमिनियम साल्ट (Aluminum compounds) होते हैं जो स्वेदवह स्रोतों (पसीने की ग्रंथियों) को ब्लॉक कर देते हैं, जिससे शरीर की गंदगी बाहर नहीं निकल पाती। साथ ही इनमें मौजूद पैराबेन्स (Parabens), थैलेट्स (Phthalates) और अल्कोहल त्वचा में एलर्जी (Contact Dermatitis) और हार्मोनल असंतुलन (Endocrine disruption) पैदा करते हैं।
                </p>
              </div>
            </div>

            {/* F. वस्त्रधारण का सामाजिक एवं स्वास्थ्यगत महत्व */}
            <div className="mt-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/30 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                F. वस्त्रधारण का सामाजिक एवं स्वास्थ्यगत महत्व (Importance of Vastradharana)
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)] my-1">
                &ldquo;काम्यं यशस्यमायुष्यमलक्ष्मीघ्नं प्रहर्षणम्। श्रीमत् पारिषदं शस्तं निर्मलाम्बरधारणम्।।&rdquo;
              </p>
              <p className="leading-[28px] m-0">
                (1) <NText bold>अर्थ और महत्व:</NText> स्नान और अनुलेपन के बाद हमेशा स्वच्छ, धुले हुए, बिना फटे (अक्लिष्ट) और ऋतु के अनुकूल वस्त्र पहनने चाहिए।
              </p>
              <p className="leading-[28px] m-0">
                (2) <NText bold>ऋतु के अनुसार वस्त्र:</NText> ग्रीष्म और शरद ऋतु में हल्के, पतले, सफेद या हल्के रंग के सूती (Cotton) व रेशमी वस्त्र पहनने चाहिए जो पसीना सोख सकें और ठंडक दें। शीत और वर्षा ऋतु में मोटे, गर्म, ऊनी (Woolen) और केसरिया/लाल रंग के वस्त्र पहनने चाहिए जो शरीर की ऊष्मा को सुरक्षित रखें।
              </p>
              <p className="leading-[28px] m-0">
                (3) <NText bold>लाभ (Benefits):</NText>
                <br />• <NAccent bold>सामाजिक महत्व:</NAccent> साफ-सुथरे कपड़े पहनने से व्यक्ति समाज और सभा (पारिषदं) में सम्मान और प्रतिष्ठा पाता है (यशस्यं, श्रीमत्), दरिद्रता और नकारात्मकता दूर होती है (अलक्ष्मीघ्नं), तथा मन में प्रसन्नता व आत्मविश्वास आता है (प्रहर्षणम्)।
                <br />• <NAccent bold>स्वास्थ्य महत्व:</NAccent> यह शरीर को बाहरी धूल, मिट्टी, जीवाणुओं, कीट-पतंगों, तेज धूप और ठंडी हवा से बचाता है। कभी भी गंदे, पसीने से भीगे या दूसरे व्यक्ति के पहने हुए कपड़े नहीं पहनने चाहिए, क्योंकि इससे दाद, खाज, खुजली (Fungal infections/दद्रु) और संक्रामक चर्म रोग फैलते हैं।
              </p>
            </div>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
