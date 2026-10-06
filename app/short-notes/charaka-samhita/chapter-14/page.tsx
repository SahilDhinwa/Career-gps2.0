"use client";

import Link from "next/link";
import { ArrowLeft, Flame, Droplets, ThermometerSun, AlertTriangle, Eye, Heart, CheckCircle2, XCircle, Activity, Wind } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NList, NCard } from "@/components/NoteElements";

export default function CharakaChapter14() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8">
        <Link href="/short-notes/charaka-samhita" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Charaka Samhita Hub
        </Link>
      </div>

      {/* Title */}
      <HandwrittenTitle badge={<>Charaka<br/><NAccent>Sutra</NAccent></>}>
        अध्याय १४: स्वेदाध्याय
      </HandwrittenTitle>

      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1">
          Fomentation Therapy (Swedana)
        </span>
      </div>

      <NText className="font-medium text-lg md:text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto block opacity-90">
        १३वें अध्याय (स्नेहन) के बाद सूत्रस्थान का १४वां अध्याय <NAccent bold>'स्वेदाध्याय'</NAccent> आता है। पंचकर्म चिकित्सा में स्नेहन के बाद पसीना लाने वाली विधि (Sweating Therapy) का विस्तृत वर्णन यहाँ किया गया है।
      </NText>

      {/* ========================================== */}
      {/* 1. स्वेदन के मुख्य प्रकार (FLOWCHART & GRIDS)  */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>1. स्वेदन के मुख्य प्रकार (Types based on Fire)</HandwrittenBox>
        </div>
        
        {/* CSS Tree Flowchart */}
        <div className="py-4 overflow-x-auto mb-8">
          <div className="min-w-[400px]">
            <div className="flex justify-center">
              <div className="bg-[var(--theme-accent)]/20 border-2 border-[var(--theme-accent)]/50 px-6 py-2 rounded-xl font-bold text-lg text-[var(--theme-text)] shadow-sm">
                स्वेदन (Swedana)
              </div>
            </div>
            <div className="flex justify-center"><div className="w-0.5 h-6 bg-[var(--theme-border)]"></div></div>
            <div className="w-[60%] mx-auto border-t-2 border-[var(--theme-border)] flex justify-between relative">
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
            </div>
            <div className="flex justify-between w-[80%] mx-auto gap-4">
              <div className="flex-1 bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-center shadow-sm">
                <Flame className="w-6 h-6 text-rose-500 mx-auto mb-1" />
                <h3 className="font-bold text-rose-700 dark:text-rose-400 text-lg mb-1">साग्नि स्वेद</h3>
                <span className="px-2 py-0.5 bg-rose-500/20 text-rose-700 dark:text-rose-300 text-[10px] rounded-full font-bold">13 Types</span>
              </div>
              <div className="flex-1 bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl text-center shadow-sm">
                <Wind className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                <h3 className="font-bold text-blue-700 dark:text-blue-400 text-lg mb-1">निरग्नि स्वेद</h3>
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-[10px] rounded-full font-bold">10 Types</span>
              </div>
            </div>
          </div>
        </div>

        {/* A. Sagni Sweda Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2 border-b border-rose-500/20 pb-2">
            <Flame className="w-5 h-5" /> A. साग्नि स्वेद (Sagni Sweda - 13 Types)
          </h3>
          <p className="text-sm md:text-base opacity-80 mb-4 font-medium">इसमें सीधे या परोक्ष रूप से अग्नि/ताप का उपयोग किया जाता है:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { name: "संकर स्वेद (Sankara)", desc: "औषधियों को कपड़े की पोटली में बांधकर सेंकना (Pinda Sweda)।" },
              { name: "प्रस्तर स्वेद (Prastara)", desc: "गर्म पत्थर की शिला पर पत्ते बिछाकर रोगी को लिटाना।" },
              { name: "नाड़ी स्वेद (Nadi)", desc: "नली (tube) के माध्यम से शरीर पर गर्म भाप देना।" },
              { name: "परिषेक स्वेद (Parisheka)", desc: "शरीर पर गर्म काढ़ा, दूध या तेल की धारा गिराना।" },
              { name: "अवगाह स्वेद (Avagaha)", desc: "औषधियुक्त गर्म जल या काढ़े से भरे टब (द्रोणी) में बैठना।" },
              { name: "जेन्ताक स्वेद (Jentaka)", desc: "एक विशेष प्रकार के गोलाकार कमरे (Sweat house) में बैठकर पसीना लाना।" },
              { name: "अश्मघन स्वेद (Ashmaghana)", desc: "मनुष्य के आकार के पत्थर को गर्म करके उस पर लिटाना।" },
              { name: "कर्षू स्वेद (Karshu)", desc: "चारपाई के नीचे गड्ढा खोदकर उसमें धुआंरहित आग रखकर सेंकना।" },
              { name: "कुटी स्वेद (Kuti)", desc: "एक विशेष प्रकार की मोटी दीवारों वाली कुटिया में स्वेदन।" },
              { name: "भू स्वेद (Bhu)", desc: "जमीन को गर्म करके उस पर लिटाना।" },
              { name: "कुम्भी स्वेद (Kumbhi)", desc: "घड़े में गर्म औषधियां डालकर उसके ऊपर बैठकर सेंकना।" },
              { name: "कूप स्वेद (Kupa)", desc: "कुएं के आकार का गड्ढा बनाकर उसमें स्वेदन।" },
              { name: "होलाक स्वेद (Holaka)", desc: "गाय के सूखे गोबर (उपले) या लकड़ियों की राख पर लिटाकर सेंकना।" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-surface/50 border border-surfaceBorder rounded-lg hover:border-rose-500/40 transition-colors">
                <NText bold className="text-rose-600 dark:text-rose-400 block mb-1">{i + 1}. {item.name}</NText>
                <span className="text-sm opacity-90">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* B. Niragni Sweda Grid */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2 border-b border-blue-500/20 pb-2">
            <Wind className="w-5 h-5" /> B. निरग्नि स्वेद (Niragni Sweda - 10 Types)
          </h3>
          <p className="text-sm md:text-base opacity-80 mb-4 font-medium">बिना आग का उपयोग किए प्राकृतिक या शारीरिक रूप से पसीना लाना:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "व्यायाम", eng: "Exercise" }, { name: "उष्णसदन", eng: "Warm Room" },
              { name: "गुरुप्रावरण", eng: "Heavy Clothing" }, { name: "क्षुधा", eng: "Hunger" },
              { name: "बहुपान", eng: "Excessive Drinking" }, { name: "भय", eng: "Fear" },
              { name: "क्रोध", eng: "Anger" }, { name: "उपनाह", eng: "Poultice" },
              { name: "आहव", eng: "Wrestling/Fighting" }, { name: "आतप", eng: "Sunlight" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-700 dark:text-blue-400 shrink-0">{i + 1}</span>
                <div>
                  <NText bold className="text-sm leading-tight block">{item.name}</NText>
                  <span className="text-[10px] opacity-60 font-medium uppercase tracking-wider">{item.eng}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. स्वेदन की मात्रा (INTENSITY MATRA)         */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>2. स्वेदन की मात्रा / बल (Intensity)</HandwrittenBox>
        </div>
        <p className="text-lg opacity-80 mb-6 font-medium text-center">रोगी के बल, ऋतु और रोग की स्थिति के अनुसार स्वेदन ३ प्रकार का होता है:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <NCard title="1. महान (महास्वेद)">
            <div className="flex items-center gap-2 mb-2 text-rose-500">
              <ThermometerSun className="w-5 h-5" /> <span className="font-bold text-sm uppercase">High Intensity</span>
            </div>
            <p className="text-sm md:text-base">मजबूत रोगी, अत्यधिक वात-कफ दोष, और शीत ऋतु (सर्दियों) में किया जाता है।</p>
          </NCard>

          <NCard title="2. मध्यम स्वेद">
            <div className="flex items-center gap-2 mb-2 text-amber-500">
              <ThermometerSun className="w-4 h-4 opacity-80" /> <span className="font-bold text-sm uppercase">Medium</span>
            </div>
            <p className="text-sm md:text-base">मध्यम बल वाले रोगी और मध्यम दोषों की स्थिति में किया जाता है।</p>
          </NCard>

          <NCard title="3. मृदु स्वेद (हल्का)">
            <div className="flex items-center gap-2 mb-2 text-emerald-500">
              <ThermometerSun className="w-3 h-3 opacity-60" /> <span className="font-bold text-sm uppercase">Mild</span>
            </div>
            <p className="text-sm md:text-base">कमजोर रोगी, अल्प दोष, और शरीर के संवेदनशील अंगों पर किया जाता है।</p>
          </NCard>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. संवेदनशील अंग (SENSITIVE ORGANS WARNING)  */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <AlertTriangle className="absolute -right-4 -bottom-4 w-32 h-32 text-amber-500/10 rotate-12" />
          
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-amber-700 dark:text-amber-400 font-heading">
              3. संवेदनशील अंगों पर नियम (Rules for Marma)
            </h3>
          </div>
          
          <div className="relative z-10">
            <p className="text-base md:text-lg font-medium mb-4">
              आचार्य चरक ने स्पष्ट निर्देश दिया है कि शरीर के <NText bold>मर्म स्थानों</NText> पर स्वेदन नहीं करना चाहिए या बहुत हल्का (मृदु) करना चाहिए:
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg border border-amber-500/20 font-bold"><Activity className="w-4 h-4 text-amber-500"/> वृषण (Testicles)</span>
              <span className="inline-flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg border border-amber-500/20 font-bold"><Heart className="w-4 h-4 text-amber-500"/> हृदय (Heart)</span>
              <span className="inline-flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg border border-amber-500/20 font-bold"><Eye className="w-4 h-4 text-amber-500"/> दृष्टि (Eyes)</span>
            </div>
            <p className="text-sm md:text-base opacity-80 border-t border-amber-500/20 pt-4">
              <span className="font-bold text-amber-600 dark:text-amber-400">विशेष निर्देश:</span> यदि बहुत आवश्यक हो, तो इन अंगों पर कमल के पत्ते, रेशमी कपड़ा या ठंडा लेप रखकर बहुत हल्का (मृदु) स्वेदन करना चाहिए।
            </p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4 & 5. योग्य व अयोग्य (INDICATIONS)          */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>4 & 5. स्वेदन के योग्य व अयोग्य</HandwrittenBox>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Yogya */}
          <div className="bg-emerald-500/5 border-2 border-emerald-500/30 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400 mb-4 border-b border-emerald-500/20 pb-3">
              <CheckCircle2 className="w-6 h-6" /> योग्य (Indications)
            </h3>
            <ul className="space-y-3 font-medium opacity-90 text-sm md:text-base">
              <li className="flex items-start gap-2"><NAccent>•</NAccent> वात और कफ दोष से उत्पन्न रोगों में (जैसे- सर्दी-जुकाम, खांसी, अस्थमा)।</li>
              <li className="flex items-start gap-2"><NAccent>•</NAccent> शरीर में जकड़ाहट (Stiffness), भारीपन, सुन्नपन।</li>
              <li className="flex items-start gap-2"><NAccent>•</NAccent> संधियों का दर्द (Joint pain)।</li>
              <li className="flex items-start gap-2"><NAccent>•</NAccent> लकवा (Paralysis) और साइटिका (Sciatica) के रोगी।</li>
            </ul>
          </div>

          {/* Ayogya */}
          <div className="bg-rose-500/5 border-2 border-rose-500/30 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-xl text-rose-600 dark:text-rose-400 mb-4 border-b border-rose-500/20 pb-3">
              <XCircle className="w-6 h-6" /> अयोग्य (Contraindications)
            </h3>
            <ul className="space-y-3 font-medium opacity-90 text-sm md:text-base">
              <li className="flex items-start gap-2"><NAccent>•</NAccent> पित्त दोष की प्रधानता वाले रोगी।</li>
              <li className="flex items-start gap-2"><NAccent>•</NAccent> गर्भवती महिलाएँ (Pregnant women)।</li>
              <li className="flex items-start gap-2"><NAccent>•</NAccent> रक्तपित्त (Bleeding disorders), डायरिया (अतिसार), पीलिया (Jaundice), बुखार।</li>
              <li className="flex items-start gap-2"><NAccent>•</NAccent> अधिक शराब पीने वाले, कमजोर, और विष (Poison) के प्रभाव वाले व्यक्ति।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 6 & 7. सम्यक् व अतिस्वेदन (PROPER VS OVER)   */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>6 & 7. सम्यक् स्वेदन एवं अतिस्वेदन</HandwrittenBox>
        </div>

        <div className="space-y-6">
          {/* Samyak */}
          <NCard title="सम्यक् स्वेदन के लक्षण (Signs of Proper Fomentation)">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-grow">
                <p className="mb-3 font-medium opacity-80">स्वेदन ठीक से हो गया है, यह कैसे पहचानें?</p>
                <ul className="space-y-2 list-disc list-inside font-bold text-[var(--theme-text)]">
                  <li>शरीर का दर्द और जकड़ाहट (stiffness) दूर हो जाए।</li>
                  <li>शरीर हल्का महसूस हो।</li>
                  <li>शरीर से अच्छी तरह पसीना निकल आए।</li>
                </ul>
              </div>
              <div className="bg-[var(--theme-accent)]/10 border border-[var(--theme-accent)]/30 p-4 rounded-xl text-center shrink-0 max-w-[200px]">
                <Droplets className="w-8 h-8 text-[var(--theme-accent)] mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-wider">Crucial Rule</p>
                <p className="text-sm font-medium mt-1">पसीना आने पर स्वेदन <NText bold className="text-rose-500">तुरंत रोक</NText> देना चाहिए।</p>
              </div>
            </div>
          </NCard>

          {/* Ati Swedana */}
          <NCard title="अतिस्वेदन (Over-sudation) & Treatment">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="border-l-4 border-rose-500 pl-4">
                <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> लक्षण (Symptoms):</h4>
                <p className="text-sm md:text-base font-medium opacity-90 leading-relaxed">
                  ज्यादा स्वेदन करने से अत्यधिक प्यास लगना, मूर्च्छा (चक्कर आना/बेहोशी), पित्त का बढ़ना, शरीर में जलन, और जोड़ों में दर्द हो सकता है।
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2"><Wind className="w-4 h-4"/> चिकित्सा (Treatment):</h4>
                <p className="text-sm md:text-base font-medium opacity-90 leading-relaxed">
                  इसके उपचार के लिए <NText bold>ग्रीष्म ऋतु (Summer season)</NText> में अपनाई जाने वाली ठंडी चिकित्सा (शीत वीर्य औषधियां, चंदन का लेप, ठंडी हवा आदि) दी जानी चाहिए।
                </p>
              </div>
            </div>
          </NCard>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
