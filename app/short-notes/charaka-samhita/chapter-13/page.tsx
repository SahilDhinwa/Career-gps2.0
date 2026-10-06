"use client";

import Link from "next/link";
import { ArrowLeft, Droplet, Flame, Clock, CheckCircle2, XCircle, Leaf, Dna, Coffee, Wind } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NList, NCard } from "@/components/NoteElements";

export default function CharakaChapter13() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8">
        <Link href="/short-notes" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Master Index
        </Link>
      </div>

      {/* Title */}
      <HandwrittenTitle badge={<>Charaka<br/><NAccent>Sutra</NAccent></>}>
        अध्याय १३: स्नेहाध्याय
      </HandwrittenTitle>

      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1">
          Oleation Therapy (Sneha Karma)
        </span>
      </div>

      <NText className="font-medium text-lg md:text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto block opacity-90">
        चरक संहिता के सूत्रस्थान का १३वां अध्याय <NAccent bold>'स्नेहाध्याय'</NAccent> है। इस अध्याय में स्नेह कर्म के प्रकार, उपयोग, मात्रा, और नियमों का विस्तृत वर्णन किया गया है।
      </NText>

      {/* ========================================== */}
      {/* 1. स्नेह की योनियाँ (SOURCES FLOWCHART)     */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>1. स्नेह की योनियाँ (Sources of Sneha)</HandwrittenBox>
        </div>
        
        {/* CSS Tree Flowchart - 2 Branches */}
        <div className="py-6 overflow-x-auto">
          <div className="min-w-[300px]">
            <div className="flex justify-center">
              <div className="bg-[var(--theme-accent)]/20 border-2 border-[var(--theme-accent)]/50 px-6 py-2 rounded-xl font-bold text-lg text-[var(--theme-text)] shadow-sm">
                स्नेह प्राप्ति स्रोत (Yoni)
              </div>
            </div>
            <div className="flex justify-center"><div className="w-0.5 h-6 bg-[var(--theme-border)]"></div></div>
            <div className="w-[60%] mx-auto border-t-2 border-[var(--theme-border)] flex justify-between relative">
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
            </div>
            <div className="flex justify-between w-[80%] mx-auto gap-4">
              <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-center shadow-sm">
                <Leaf className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <h3 className="font-bold text-emerald-700 dark:text-emerald-400 text-lg mb-1">स्थावर योनि</h3>
                <p className="text-xs md:text-sm opacity-80 font-medium">(Plant / Vegetable)</p>
              </div>
              <div className="flex-1 bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl text-center shadow-sm">
                <Dna className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                <h3 className="font-bold text-rose-700 dark:text-rose-400 text-lg mb-1">जांगम योनि</h3>
                <p className="text-xs md:text-sm opacity-80 font-medium">(Animal Sources)</p>
              </div>
            </div>
          </div>
        </div>

        <NList>
          <li className="leading-relaxed">
            <NText bold>स्थावर योनि:</NText> वनस्पतियों से प्राप्त होते हैं, जैसे— तिल, एरण्ड, सरसों, बादाम, अखरोट आदि। इनमें <NAccent bold>'तिल का तेल'</NAccent> सर्वश्रेष्ठ माना गया है।
          </li>
          <li className="leading-relaxed">
            <NText bold>जांगम योनि:</NText> प्राणियों से प्राप्त होते हैं, जैसे— गाय, भैंस, मछली, पक्षी आदि से प्राप्त घृत (घी), वसा, मज्जा और दूध।
          </li>
        </NList>
      </div>

      {/* ========================================== */}
      {/* 2. महास्नेह (4 PRINCIPAL FATS FLOWCHART)     */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>2. महास्नेह (The 4 Principal Fats)</HandwrittenBox>
        </div>

        {/* CSS Tree Flowchart - 4 Branches */}
        <div className="py-6 overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="flex justify-center">
              <div className="bg-[var(--theme-accent)]/20 border-2 border-[var(--theme-accent)]/50 px-6 py-2 rounded-xl font-bold text-lg text-[var(--theme-text)] shadow-sm">
                महास्नेह (4 Types)
              </div>
            </div>
            <div className="flex justify-center"><div className="w-0.5 h-6 bg-[var(--theme-border)]"></div></div>
            <div className="w-[75%] mx-auto border-t-2 border-[var(--theme-border)] flex justify-between relative">
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
            </div>
            <div className="flex justify-between w-full max-w-4xl mx-auto gap-2 md:gap-4 px-2">
              {[
                { name: "घृत", eng: "Ghee", color: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400" },
                { name: "तैल", eng: "Oil", color: "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400" },
                { name: "वसा", eng: "Muscle Fat", color: "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400" },
                { name: "मज्जा", eng: "Bone Marrow", color: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400" }
              ].map((item, i) => (
                <div key={i} className={`flex-1 border p-3 md:p-4 rounded-xl text-center shadow-sm ${item.color}`}>
                  <Droplet className="w-5 h-5 mx-auto mb-2 opacity-80" />
                  <h3 className="font-bold text-base md:text-lg mb-1">{item.name}</h3>
                  <p className="text-[10px] md:text-xs opacity-80 font-medium">{item.eng}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="space-y-4 text-base md:text-lg text-[var(--theme-text)] pl-4">
          <li className="flex gap-3"><NAccent bold>1.</NAccent><span><NText bold>घृत (Ghee):</NText> पित्त और वात शमन के लिए श्रेष्ठ। यह अपने गुणों को छोड़े बिना औषधियों के गुणों को अपना लेता है <NAccent className="italic">(संस्कार अनुवर्तन)</NAccent>। इसलिए इसे <NText bold>सर्वश्रेष्ठ स्नेह</NText> माना गया है।</span></li>
          <li className="flex gap-3"><NAccent bold>2.</NAccent><span><NText bold>तैल (Oil):</NText> वात रोगों में विशेष रूप से उपयोगी।</span></li>
          <li className="flex gap-3"><NAccent bold>3.</NAccent><span><NText bold>वसा (Muscle Fat):</NText> चोट, जलन, और संधियों (joints) के दर्द में उपयोगी।</span></li>
          <li className="flex gap-3"><NAccent bold>4.</NAccent><span><NText bold>मज्जा (Bone Marrow):</NText> बल बढ़ाने और वातनाशक कार्यों के लिए उपयोगी।</span></li>
        </ul>
      </div>

      {/* ========================================== */}
      {/* 3. प्रविचारणा (MODES OF ADMIN)             */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>3. स्नेह की प्रविचारणा (Modes of Administration)</HandwrittenBox>
        </div>
        <div className="p-5 md:p-6 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 rounded-r-xl">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            स्नेह को सीधे पीने <NText bold>(अच्छपेय)</NText> के अलावा भोजन के साथ मिलाकर उपयोग करने को <NAccent bold>'प्रविचारणा'</NAccent> कहते हैं।
          </p>
          <ul className="space-y-2 list-disc list-inside text-[var(--theme-text)] opacity-90">
            <li>चरक ने कुल <NText bold>२४ प्रकार</NText> की स्नेह प्रविचारणा बताई है।</li>
            <li>इनमें ओदन (चावल), विलेपी, रस, मांस, दूध, दही, यवागू, सूप आदि में स्नेह मिलाकर खाना शामिल है।</li>
            <li><span className="italic">नोट:</span> सीधे स्नेह पीने (अच्छपेय) को मिलाकर कुल <NText bold>२५ प्रकार</NText> माने जाते हैं।</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. स्नेह की मात्रा (DOSAGE FLOWCHART)         */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>4. स्नेह की मात्रा (Dosage of Sneha)</HandwrittenBox>
        </div>
        <NText className="block mb-6 text-lg text-center opacity-80">व्यक्ति की अग्नि (पाचन शक्ति) और पचने में लगने वाले समय के आधार पर ३ मात्राएँ हैं:</NText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NCard title="1. ह्रस्व मात्रा (Small)">
            <div className="flex items-center gap-2 mb-3 text-[var(--theme-accent)]">
              <Clock className="w-4 h-4" /> <span className="font-bold text-sm uppercase">½ Day (6 Hours)</span>
            </div>
            <p className="text-sm md:text-base">जो स्नेह आधे दिन में पच जाए। यह दुर्बल, वृद्ध और बच्चों के लिए उत्तम होती है।</p>
          </NCard>

          <NCard title="2. मध्यम मात्रा (Medium)">
            <div className="flex items-center gap-2 mb-3 text-amber-500">
              <Clock className="w-4 h-4" /> <span className="font-bold text-sm uppercase">1 Day (12 Hours)</span>
            </div>
            <p className="text-sm md:text-base">जो स्नेह एक दिन में पच जाए। यह मध्यम बल और मध्यम कोष्ठ वालों के लिए है।</p>
          </NCard>

          <NCard title="3. उत्तम मात्रा (Maximum)">
            <div className="flex items-center gap-2 mb-3 text-rose-500">
              <Flame className="w-4 h-4" /> <span className="font-bold text-sm uppercase">24 Hours</span>
            </div>
            <p className="text-sm md:text-base">जो स्नेह पूरे एक दिन-रात में पच सके। यह मजबूत पाचन शक्ति (दीप्त अग्नि) वालों के लिए होती है।</p>
          </NCard>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5 & 6. ऋतु एवं अनुपान (SEASON & ANUPANA)   */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>5 & 6. ऋतु अनुसार प्रयोग एवं अनुपान (Timing & Post-Drink)</HandwrittenBox>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-[var(--theme-border)]">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[var(--theme-border)]/10 text-[var(--theme-text)]">
                <th className="p-4 font-bold border-b border-r border-[var(--theme-border)]">महास्नेह</th>
                <th className="p-4 font-bold border-b border-r border-[var(--theme-border)]">प्रयोग की ऋतु (Season)</th>
                <th className="p-4 font-bold border-b border-[var(--theme-border)]">अनुपान (Post-Drink)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--theme-border)]">
              <tr className="hover:bg-[var(--theme-border)]/5">
                <td className="p-4 font-bold text-amber-600 dark:text-amber-400 border-r border-[var(--theme-border)]">घृत (Ghee)</td>
                <td className="p-4 border-r border-[var(--theme-border)]">शरद् ऋतु (Autumn)</td>
                <td className="p-4 font-medium flex items-center gap-2"><Coffee className="w-4 h-4 text-amber-500"/> उष्ण जल (गर्म पानी)</td>
              </tr>
              <tr className="hover:bg-[var(--theme-border)]/5">
                <td className="p-4 font-bold text-orange-600 dark:text-orange-400 border-r border-[var(--theme-border)]">तैल (Oil)</td>
                <td className="p-4 border-r border-[var(--theme-border)]">प्रावृट् ऋतु (Rainy season)</td>
                <td className="p-4 font-medium flex items-center gap-2"><Coffee className="w-4 h-4 text-orange-500"/> यूष (मूंग आदि का सूप)</td>
              </tr>
              <tr className="hover:bg-[var(--theme-border)]/5">
                <td className="p-4 font-bold text-rose-600 dark:text-rose-400 border-r border-[var(--theme-border)]">वसा और मज्जा</td>
                <td className="p-4 border-r border-[var(--theme-border)]">वैशाख/वसन्त ऋतु (Spring)</td>
                <td className="p-4 font-medium flex items-center gap-2"><Coffee className="w-4 h-4 text-rose-500"/> मण्ड (चावल का मांड)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================== */}
      {/* 7. कोष्ठ के प्रकार (KOSHTA FLOWCHART)         */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>7. कोष्ठ के प्रकार (Types of Digestive Tract)</HandwrittenBox>
        </div>

        {/* CSS Tree Flowchart - 3 Branches */}
        <div className="py-6 overflow-x-auto mb-6">
          <div className="min-w-[500px]">
            <div className="flex justify-center">
              <div className="bg-[var(--theme-accent)]/20 border-2 border-[var(--theme-accent)]/50 px-6 py-2 rounded-xl font-bold text-lg text-[var(--theme-text)] shadow-sm">
                कोष्ठ (Bowel Type)
              </div>
            </div>
            <div className="flex justify-center"><div className="w-0.5 h-6 bg-[var(--theme-border)]"></div></div>
            <div className="w-[66%] mx-auto border-t-2 border-[var(--theme-border)] flex justify-between relative">
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
            </div>
            <div className="flex justify-between w-full max-w-3xl mx-auto gap-4 px-2">
              <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl text-center shadow-sm">
                <h3 className="font-bold text-emerald-700 dark:text-emerald-400 text-lg mb-1">मृदु कोष्ठ</h3>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] rounded-full font-bold">पित्त प्रधान</span>
              </div>
              <div className="flex-1 bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl text-center shadow-sm">
                <h3 className="font-bold text-blue-700 dark:text-blue-400 text-lg mb-1">मध्यम कोष्ठ</h3>
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-[10px] rounded-full font-bold">कफ / सम दोष</span>
              </div>
              <div className="flex-1 bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-center shadow-sm">
                <h3 className="font-bold text-rose-700 dark:text-rose-400 text-lg mb-1">क्रूर कोष्ठ</h3>
                <span className="px-2 py-0.5 bg-rose-500/20 text-rose-700 dark:text-rose-300 text-[10px] rounded-full font-bold">वात प्रधान</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="space-y-4 text-base md:text-lg text-[var(--theme-text)] pl-4">
          <li className="flex gap-3"><NAccent bold>•</NAccent><span><NText bold>मृदु कोष्ठ (Mridu):</NText> इनका पेट आसानी से साफ हो जाता है (जैसे दूध या गर्म पानी से भी विरेचन हो जाता है)।</span></li>
          <li className="flex gap-3"><NAccent bold>•</NAccent><span><NText bold>क्रूर कोष्ठ (Krura):</NText> इनका पेट कठिनाई से साफ होता है, इसलिए इन्हें अधिक स्नेह की आवश्यकता होती है।</span></li>
        </ul>
      </div>

      {/* ========================================== */}
      {/* 8. स्नेह के योग्य व अयोग्य (INDICATIONS)       */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>8. स्नेह के योग्य व अयोग्य (Indications & Contraindications)</HandwrittenBox>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 border-2 border-emerald-500/30 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400 mb-4 border-b border-emerald-500/20 pb-3">
              <CheckCircle2 className="w-6 h-6" /> योग्य (Indications)
            </h3>
            <ul className="space-y-3 font-medium opacity-90">
              <li>• पंचकर्म (स्वेदन/वमन/विरेचन) कराने वाले लोग</li>
              <li>• रूक्ष शरीर वाले (Dry body)</li>
              <li>• वात रोगी</li>
              <li>• अधिक व्यायाम करने वाले</li>
              <li>• मानसिक तनाव वाले</li>
            </ul>
          </div>

          <div className="bg-rose-500/5 border-2 border-rose-500/30 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-xl text-rose-600 dark:text-rose-400 mb-4 border-b border-rose-500/20 pb-3">
              <XCircle className="w-6 h-6" /> अयोग्य (Contraindications)
            </h3>
            <ul className="space-y-3 font-medium opacity-90">
              <li>• कफ व मेद (मोटापा) से पीड़ित</li>
              <li>• जिनकी पाचन शक्ति बहुत कमजोर (मंदाग्नि) हो</li>
              <li>• गर्भवती महिलाएँ (Pregnant women)</li>
              <li>• जिन्हें उल्टी (Vomiting) या अधिक प्यास की बीमारी हो</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[var(--theme-accent)]/10 border border-[var(--theme-accent)]/30 rounded-xl flex items-start gap-3">
          <Wind className="w-6 h-6 text-[var(--theme-accent)] shrink-0 mt-0.5" />
          <p className="text-sm md:text-base font-bold opacity-90">
            विशेष नोट: लवण (नमक) युक्त स्नेह शरीर में बहुत तेजी से (शीघ्र) स्नेहन करता है।
          </p>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
