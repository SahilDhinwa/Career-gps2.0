"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen, LayoutGrid, Brain, Activity, Layers, Flame, Eye, AlertCircle, RefreshCw, Feather } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

// =========================================================
// SHARED STRUCTURED DATA (Single Notation Per Level)
// =========================================================
const purushaTypes = [
  {
    id: "A",
    title: "एकधातु पुरुष (Purusha of Single Element)",
    term: "चेतनाधातुरेकः स्मृतः पुरुषः",
    desc: "केवल 1 'चेतना धातु' (आत्मा) को ही पुरुष कहा जाता है। (यह दर्शन शास्त्र का मत है जो शुद्ध चैतन्य को मानता है)।",
  },
  {
    id: "B",
    title: "षड्धातुज पुरुष (Purusha of 6 Elements — चिकित्साधिकृत)",
    term: "खादयश्चेतनाषष्ठा धातवः पुरुषः",
    desc: "5 महाभूत (आकाश, वायु, अग्नि, जल, पृथ्वी) + छठा चेतना (आत्मा) — इन 6 धातुओं के समुदाय को 'षड्धातुज पुरुष' कहते हैं। इसी में रोग होते हैं और इसी की चिकित्सा होती है।",
  },
];

const mahabhutas = [
  { num: "1", element: "आकाश (Akasha)", sense: "शब्द (Sound)", physical: "अप्रतिघातः (रुकावट का न होना)", total: "1 (शब्द)" },
  { num: "2", element: "वायु (Vayu)", sense: "स्पर्श (Touch)", physical: "चलः (गतिशीलता / रौक्ष्य)", total: "2 (शब्द + स्पर्श)" },
  { num: "3", element: "अग्नि (Tejas)", sense: "रूप (Vision/Form)", physical: "उष्णत्वम् (गर्मी / ताप)", total: "3 (शब्द + स्पर्श + रूप)" },
  { num: "4", element: "जल (Ap/Jala)", sense: "रस (Taste)", physical: "द्रवत्वम् (तरलता / स्निग्धता)", total: "4 (शब्द + स्पर्श + रूप + रस)" },
  { num: "5", element: "पृथ्वी (Prithvi)", sense: "गन्ध (Smell)", physical: "खरत्वम् (कठोरता / खुरदरापन)", total: "5 (शब्द + स्पर्श + रूप + रस + गन्ध)" },
];

const trividhaHetu = [
  {
    num: "1",
    name: "असात्म्येन्द्रियार्थसंयोग (Improper Sense Contact)",
    desc: "5 ज्ञानेन्द्रियों का अपने विषयों के साथ गलत संयोग।",
    subtypes: ["अतियोग (Excessive use)", "अयोग (Non/Deficient use)", "मिथ्यायोग (Perverted/Wrong use)"],
  },
  {
    num: "2",
    name: "प्रज्ञापराध (Intellectual Blasphemy)",
    desc: "जानबूझकर किया गया अशुभ या गलत कर्म।",
    subtypes: ["धी-विभ्रंश (Intellect failure)", "धृति-विभ्रंश (Loss of self-control)", "स्मृति-विभ्रंश (Memory failure)"],
  },
  {
    num: "3",
    name: "परिणाम / काल (Time/Seasonal Variations)",
    desc: "समय या ऋतुओं का विपरीत परिणाम।",
    subtypes: ["अतियोग (Extreme season)", "अयोग (Deficient season)", "मिथ्यायोग (Opposite seasonal traits)"],
  },
];

const memoryCauses = [
  { id: "1", name: "निमित्तग्रहण", desc: "कारण को देखकर कार्य याद आना।" },
  { id: "2", name: "रूपग्रहण", desc: "आकार या स्वरूप देखकर याद आना।" },
  { id: "3", name: "सादृश्य", desc: "समानता देखकर याद आना।" },
  { id: "4", name: "सवर्य / विपर्यय", desc: "विपरीत वस्तु को देखकर याद आना।" },
  { id: "5", name: "सत्त्वानुबन्ध", desc: "मन को एकाग्र करके सोचने से याद आना।" },
  { id: "6", name: "अभ्यास", desc: "बार-बार दोहराने या पढ़ने से याद आना।" },
  { id: "7", name: "ज्ञानयोग", desc: "तत्त्वज्ञान या आत्मज्ञान के अभ्यास से याद आना।" },
  { id: "8", name: "पुनःश्रुत", desc: "किसी भूली हुई बात को दोबारा सुनने से याद आना।" },
];

const yogicPowers = [
  "आवेशन (Aveshana): दूसरे के शरीर में प्रवेश करना।",
  "चेतसो ज्ञानम् (Chetaso Jnanam): दूसरे के मन की बात जान लेना।",
  "अर्थानों छन्दतः क्रिया: अपनी इच्छा के अनुसार वस्तुओं से कार्य करा लेना।",
  "दृष्टिः (Drishtih): अत्यंत सूक्ष्म वस्तुओं को देख पाना (दिव्य दृष्टि)।",
  "श्रोत्रम् (Shrotram): दूर की या सूक्ष्म आवाजों को सुन पाना (दिव्य श्रवण)।",
  "स्मृतिः (Smritih): भूत, भविष्य और वर्तमान की सभी बातों का यथार्थ स्मरण।",
  "कान्तिः (Kantih): शरीर में अलौकिक तेज और चमक होना।",
  "इष्टतोऽदर्शनम्: इच्छा होने पर अदृश्य या प्रकट हो जाना।",
];

export default function CharakaSharirChapter1() {
  const [noteTheme, setNoteTheme] = useState<"notebook" | "tactical">("notebook");

  // =========================================================
  // EXTRA THEME: MODERN TACTICAL CARDS & FLOWCHARTS VIEW
  // =========================================================
  if (noteTheme === "tactical") {
    return (
      <div className="min-h-screen bg-background text-foreground py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* TOP BAR: BACK LINK + THEME SWITCHER */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/short-notes/charaka-samhita/sharir"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-bold text-xs md:text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Sharira Hub
            </Link>

            <button
              onClick={() => setNoteTheme("notebook")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500/20 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" /> Switch to Handwritten Notebook Theme
            </button>
          </div>

          {/* HEADER BANNER */}
          <header className="bg-surface/90 backdrop-blur-md border border-amber-500/20 rounded-sm p-6 md:p-10 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Charaka Samhita // Sharira Sthana
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
              Chapter 1: कतिधापुरुषीय शारीर
            </h1>
            <p className="text-foreground/70 text-sm md:text-base max-w-3xl leading-relaxed">
              इस अध्याय में पुरुष (आत्मा/शरीर) के भेद, मन, पंचमहाभूत, वेदना के कारण और मोक्ष (अपनर्वभव) का दार्शनिक एवं चिकित्सकीय वर्णन किया गया है।
            </p>
          </header>

          {/* SECTION I: TYPES OF PURUSHA */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
              <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
                Section I
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                पुरुष के भेद (Types of Purusha — धातुभेद से)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {purushaTypes.map((type) => (
                <div key={type.id} className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-3">
                  <h3 className="font-bold text-amber-500 uppercase tracking-wider text-xs font-mono">
                    {type.id}. {type.title}
                  </h3>
                  <div className="p-3 bg-surface border border-surfaceBorder rounded-sm text-xs font-bold text-primary">
                    &quot;{type.term}&quot;
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-4">
              <h3 className="font-bold text-amber-500 uppercase tracking-wider text-xs font-mono">
                C. चतुर्विंशति तत्त्वात्मक पुरुष / राशिपुरुष (24 Elements)
              </h3>
              <p className="text-sm text-foreground/80">यह 24 तत्त्वों का समुदाय है, जिसे 2 मुख्य भागों (प्रकृति और विकार) में बांटा गया है:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-surface border border-surfaceBorder rounded-sm">
                  <div className="font-bold text-primary mb-2 border-b border-surfaceBorder pb-2">
                    अष्टौ प्रकृतयः (8 Prakritis / मूल कारण)
                  </div>
                  <ul className="space-y-1.5 text-sm text-foreground/75">
                    <li>1. अव्यक्त (Avyakta)</li>
                    <li>2. महान् / बुद्धि (Mahan/Buddhi)</li>
                    <li>3. अहङ्कार (Ahankara)</li>
                    <li>4-8. पञ्च तन्मात्रा (5 सूक्ष्म भूत: रूप, रस, गन्ध, स्पर्श, शब्द)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-surface border border-surfaceBorder rounded-sm">
                  <div className="font-bold text-red-400 mb-2 border-b border-surfaceBorder pb-2">
                    षोडश विकाराः (16 Vikaras / कार्य तत्त्व)
                  </div>
                  <ul className="space-y-1.5 text-sm text-foreground/75">
                    <li>1-5. पञ्च बुद्धीन्द्रिय (श्रोत्र, त्वचा, चक्षु, रसना, घ्राण)</li>
                    <li>6-10. पञ्च कर्मेन्द्रिय (हस्त, पाद, पायु, उपस्थ, वाक्)</li>
                    <li>11. उभयात्मक मन (Mind)</li>
                    <li>12-16. पञ्च महाभूत (आकाश, वायु, अग्नि, जल, पृथ्वी)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION II: MIND */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
              <span className="px-2.5 py-1 bg-amber-500/15 text-amber-500 font-mono font-bold text-sm rounded-sm border border-amber-500/30">
                Section II
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold flex items-center gap-2">
                <Brain className="w-5 h-5 text-amber-500" /> मन के गुण, कर्म और विषय
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background/50 border border-surfaceBorder p-4 rounded-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-3 border-b border-surfaceBorder pb-2">2 गुण (Qualities)</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>1. अणुत्वम्:</strong> अत्यंत सूक्ष्म होना।</li>
                  <li><strong>2. एकत्वम्:</strong> संख्या में 'एक' होना।</li>
                </ul>
              </div>

              <div className="bg-background/50 border border-surfaceBorder p-4 rounded-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold mb-3 border-b border-surfaceBorder pb-2">4 कर्म (Functions)</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>1. इन्द्रियाभिग्रहः:</strong> इंद्रियों का नियंत्रण।</li>
                  <li><strong>2. स्वस्य निग्रहः:</strong> स्वयं को अहितकर से रोकना।</li>
                  <li><strong>3. ऊहः:</strong> कल्पना करना।</li>
                  <li><strong>4. विचारः:</strong> चिंतन करना।</li>
                </ul>
              </div>

              <div className="bg-background/50 border border-surfaceBorder p-4 rounded-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-3 border-b border-surfaceBorder pb-2">5 विषय (Objects)</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>चिन्त्यम्, विचार्यम्, ऊह्यम्, ध्येयम्, सङ्कल्प्यम्।</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION III: MAHABHUTA TABLE */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
              <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
                Section III
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> पञ्चमहाभूतों के विशेष व भौतिक गुण
              </h2>
            </div>

            <div className="overflow-x-auto border border-surfaceBorder rounded-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-background/80 text-xs font-mono uppercase text-amber-500 border-b border-surfaceBorder">
                  <tr>
                    <th className="py-3.5 px-4">महाभूत (Element)</th>
                    <th className="py-3.5 px-4">विशेष गुण (Sense)</th>
                    <th className="py-3.5 px-4">भौतिक गुण (Physical)</th>
                    <th className="py-3.5 px-4">कुल गुण (उत्तरोत्तर वृद्धि)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surfaceBorder bg-background/30">
                  {mahabhutas.map((row) => (
                    <tr key={row.num} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">{row.num}. {row.element}</td>
                      <td className="py-3.5 px-4 font-semibold text-foreground">{row.sense}</td>
                      <td className="py-3.5 px-4 text-foreground/75">{row.physical}</td>
                      <td className="py-3.5 px-4 text-amber-500/80">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION IV: SOUL SIGNS & TRIVIDHA HETU */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 shadow-lg space-y-4">
              <div className="flex items-center gap-3 border-b border-surfaceBorder pb-3">
                <span className="px-2.5 py-1 bg-amber-500/15 text-amber-500 font-mono font-bold text-xs rounded-sm">Section IV</span>
                <h2 className="font-heading text-lg font-bold flex items-center gap-2"><Eye className="w-4 h-4 text-amber-500" /> आत्मा के लक्षण</h2>
              </div>
              <p className="text-xs text-foreground/70">आत्मा स्वयं निर्विकार है, किंतु शरीर के साथ जुड़ने पर उसके 20+ लक्षण होते हैं:</p>
              <ul className="space-y-1.5 text-sm text-foreground/80 pl-2">
                <li>• प्राण-अपानौ (सांस लेना/छोड़ना)</li>
                <li>• निमेष-उन्मेषौ (पलकें झपकना)</li>
                <li>• मनोगतिः (मन का एक विषय से दूसरे पर जाना)</li>
                <li>• इन्द्रियान्तरसञ्चारः (एक इंद्रिय का ज्ञान दूसरी में)</li>
                <li>• पञ्चत्वग्रहणम् (मृत्यु का ज्ञान)</li>
                <li>• इच्छा, द्वेष, सुख, दुःख, प्रयत्न, धृति, बुद्धि आदि।</li>
              </ul>
            </section>

            <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 shadow-lg space-y-4">
              <div className="flex items-center gap-3 border-b border-surfaceBorder pb-3">
                <span className="px-2.5 py-1 bg-red-500/15 text-red-500 font-mono font-bold text-xs rounded-sm">Section V</span>
                <h2 className="font-heading text-lg font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-500" /> त्रिविध हेतु</h2>
              </div>
              <div className="space-y-4">
                {trividhaHetu.map((hetu) => (
                  <div key={hetu.num} className="bg-background/60 p-3 rounded-sm border border-surfaceBorder">
                    <strong className="text-red-400 block text-sm mb-1">{hetu.num}. {hetu.name}</strong>
                    <p className="text-xs text-foreground/70 mb-2">{hetu.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {hetu.subtypes.map((sub, i) => (
                        <span key={i} className="px-2 py-0.5 bg-red-500/10 text-[10px] font-mono text-red-300 rounded-sm border border-red-500/20">{sub}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SECTION VI & VII: VEDANA & MEMORY */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4 mb-4">
                  <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">Section VI</span>
                  <h2 className="font-heading text-lg font-bold">वेदना का अधिष्ठान और नाश</h2>
                </div>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p><strong>अधिष्ठान (Seat):</strong> सुख और दुःख रूपी वेदना का आश्रय मन और शरीर हैं।</p>
                  <p className="text-red-400"><strong>अपवाद (No Sensation):</strong> केश (बाल), लोम (रोएं), नख, और अन्नमल में चेतना या वेदना नहीं होती।</p>
                  <div className="p-3 bg-background/50 border border-surfaceBorder rounded-sm mt-2">
                    <p className="mb-1"><span className="text-amber-500 font-bold">कारण:</span> सभी वेदनाओं का मूल कारण 'उपधा' (Desire/Attachment) है।</p>
                    <p><span className="text-primary font-bold">नाश:</span> जब 'उपधा' का नाश होता है (अनुपादान), तो सभी वेदनाएं समाप्त हो जाती हैं।</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4 mb-4">
                  <span className="px-2.5 py-1 bg-amber-500/15 text-amber-500 font-mono font-bold text-sm rounded-sm border border-amber-500/30">Section VII</span>
                  <h2 className="font-heading text-lg font-bold flex items-center gap-2"><RefreshCw className="w-4 h-4 text-amber-500" /> स्मृति के 8 कारण</h2>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {memoryCauses.map((mc) => (
                    <div key={mc.id} className="p-2.5 bg-background/50 border border-surfaceBorder rounded-sm">
                      <strong className="text-amber-500 block mb-0.5">{mc.id}. {mc.name}</strong>
                      <span className="text-foreground/70">{mc.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION VIII: MOKSHA */}
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
              <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
                Section VIII
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold flex items-center gap-2">
                <Feather className="w-5 h-5 text-primary" /> मोक्ष / नैष्ठिकी चिकित्सा
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-4">
                <h3 className="font-bold text-amber-500 uppercase tracking-wider text-xs font-mono">
                  A. नैष्ठिकी चिकित्सा और मोक्ष
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <strong>नैष्ठिकी चिकित्सा:</strong> वह चिकित्सा जो 'उपधा' (तृष्णा/मोह) से रहित हो और जिससे जन्म-मरण तथा सभी दुःखों का हमेशा के लिए अंत हो जाए।
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <strong>मोक्ष (Moksha):</strong> रज और तम के पूरी तरह नष्ट होने, बलवान कर्मों के क्षय होने और सभी संयोगों से वियुक्त हो जाने पर पुनर्जन्म का न होना (अपनर्वभव) ही मोक्ष है।
                </p>
              </div>

              <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-3">
                <h3 className="font-bold text-primary uppercase tracking-wider text-xs font-mono">
                  B. योगियों के 8 ऐश्वर्य (8 Yogic Powers)
                </h3>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  {yogicPowers.map((power, idx) => (
                    <li key={idx}><strong>{idx + 1}.</strong> {power}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  }

  // =========================================================
  // PRIMARY THEME: CHAPTER 6 HANDWRITTEN NOTEBOOK STYLE
  // =========================================================
  return (
    <HandwrittenCanvas>
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

          {/* Top Navigation + Extra Theme Switcher */}
          <div className="mb-[32px] flex flex-wrap items-center justify-between gap-2 min-h-[32px] pr-20 md:pr-28">
            <Link 
              href="/short-notes/charaka-samhita/sharir" 
              className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-xs md:text-base font-sans"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Sharira Hub
            </Link>

            <button
              onClick={() => setNoteTheme("tactical")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] text-[11px] md:text-xs font-sans font-bold uppercase tracking-wider hover:bg-[var(--theme-accent)]/10 transition-colors rounded-sm cursor-pointer"
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Switch to Tactical Flowchart Theme
            </button>
          </div>

          {/* Main Chapter Title */}
          <div className="mb-[32px] flex justify-center">
            <HandwrittenTitle>
              अध्याय 1: कतिधापुरुषीय शारीर
            </HandwrittenTitle>
          </div>

          <div className="text-center mb-[32px] h-[32px] flex items-center justify-center">
            <span className="inline-block px-3 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-widest uppercase transform -rotate-1 bg-[var(--theme-bg)]/80">
              पुरुष भेद, मन, पंचमहाभूत, वेदना और मोक्ष
            </span>
          </div>

          {/* Q&A STYLE INTRODUCTION */}
          <div className="mb-[64px]">
            <div className="flex gap-2 md:gap-3 mb-[32px]">
              <span className="font-bold text-[var(--theme-accent)] shrink-0 w-6 md:w-8 leading-[32px]">Q.</span>
              <NText className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                &apos;कतिधापुरुषीय शारीर&apos; अध्याय का मुख्य विषय क्या है?
              </NText>
            </div>
            
            <div className="flex gap-2 md:gap-3">
              <span className="font-bold text-[var(--theme-text)] shrink-0 w-6 md:w-8 opacity-70 leading-[32px]">Ans.</span>
              <div className="text-sm md:text-lg opacity-90 font-medium">
                <p className="leading-[32px] mb-[32px] m-0">
                  अग्निवेश द्वारा पूछे गए प्रश्नों के उत्तर में आचार्य पुनर्वसु आत्रेय ने पुरुष (आत्मा/शरीर) के भेद, मन, पंचमहाभूत, वेदना के कारण और मोक्ष (अपनर्वभव) का दार्शनिक एवं चिकित्सकीय वर्णन किया है।
                </p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION I: TYPES OF PURUSHA */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              I. पुरुष के भेद (Types of Purusha — धातुभेद से)
            </h3>

            <div className="text-sm md:text-lg space-y-[32px]">
              {purushaTypes.map((type, idx) => (
                <div key={idx}>
                  <div className="flex gap-2 items-start">
                    <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">{type.id}.</span>
                    <NAccent bold className="text-base md:text-xl leading-[32px]">{type.title}</NAccent>
                  </div>
                  <div className="pl-6 opacity-90 font-medium">
                    <p className="leading-[32px] m-0 text-[var(--theme-accent)]">&quot;{type.term}&quot;</p>
                    <p className="leading-[32px] m-0">{type.desc}</p>
                  </div>
                </div>
              ))}

              <div>
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">C.</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">चतुर्विंशति तत्त्वात्मक पुरुष / राशिपुरुष (24 Elements)</NAccent>
                </div>
                <div className="pl-6 opacity-90 font-medium space-y-[32px]">
                  <p className="leading-[32px] m-0">धातु भेद से पुरुष 24 तत्त्वों का समुदाय है, जिसे 2 मुख्य भागों (प्रकृति और विकार) में बांटा गया है:</p>
                  
                  <div>
                    <p className="leading-[32px] m-0"><NText bold>1. अष्टौ प्रकृतयः (8 Prakritis):</NText></p>
                    <div className="pl-6">
                      <p className="leading-[32px] m-0">• 1. अव्यक्त (मूल प्रकृति + पुरुष)</p>
                      <p className="leading-[32px] m-0">• 2. महान् / बुद्धि</p>
                      <p className="leading-[32px] m-0">• 3. अहङ्कार</p>
                      <p className="leading-[32px] m-0">• 4-8. पञ्च तन्मात्रा (5 सूक्ष्म भूत: रूप, रस, गन्ध, स्पर्श, शब्द)</p>
                    </div>
                  </div>

                  <div>
                    <p className="leading-[32px] m-0"><NText bold>2. षोडश विकाराः (16 Vikaras):</NText></p>
                    <div className="pl-6">
                      <p className="leading-[32px] m-0">• 1-5. पञ्च बुद्धीन्द्रिय (श्रोत्र, त्वचा, चक्षु, रसना, घ्राण)</p>
                      <p className="leading-[32px] m-0">• 6-10. पञ्च कर्मेन्द्रिय (हस्त, पाद, पायु, उपस्थ, वाक्)</p>
                      <p className="leading-[32px] m-0">• 11. उभयात्मक मन (Mind)</p>
                      <p className="leading-[32px] m-0">• 12-16. पञ्च महाभूत (आकाश, वायु, अग्नि, जल, पृथ्वी)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION II: MIND */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              II. मन के गुण, कर्म और विषय
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <p className="leading-[32px] m-0"><NText bold>A. मन के 2 गुण:</NText></p>
                <div className="pl-6">
                  <p className="leading-[32px] m-0">• 1. अणुत्वम् (अत्यंत सूक्ष्म होना)</p>
                  <p className="leading-[32px] m-0">• 2. एकत्वम् (संख्या में 'एक' होना)</p>
                </div>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>B. मन के 5 विषय / अर्थ:</NText></p>
                <div className="pl-6">
                  <p className="leading-[32px] m-0">1. चिन्त्यम्, 2. विचार्यम्, 3. ऊह्यम्, 4. ध्येयम्, 5. सङ्कल्प्यम्।</p>
                </div>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>C. मन के 4 कर्म:</NText></p>
                <div className="pl-6">
                  <p className="leading-[32px] m-0">• 1. इन्द्रियाभिग्रहः (इंद्रियों का नियंत्रण)</p>
                  <p className="leading-[32px] m-0">• 2. स्वस्य निग्रहः (स्वयं को अहितकर से रोकना)</p>
                  <p className="leading-[32px] m-0">• 3. ऊहः (कल्पना करना)</p>
                  <p className="leading-[32px] m-0">• 4. विचारः (चिंतन करना)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION III: MAHABHUTAS */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              III. पञ्चमहाभूतों के विशेष व भौतिक गुण
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              {mahabhutas.map((m) => (
                <div key={m.num}>
                  <p className="leading-[32px] m-0">
                    <NAccent bold>{m.num}. {m.element}:</NAccent> विशेष गुण - <NText bold>{m.sense}</NText> | भौतिक गुण - <NText bold>{m.physical}</NText>
                  </p>
                  <p className="leading-[32px] m-0 pl-6 text-sm text-[var(--theme-accent)] opacity-80">
                    कुल गुण: {m.total}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION IV: SOUL SIGNS */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              IV. आत्मा के लक्षण (Signs of the Soul)
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <p className="leading-[32px] m-0">आत्मा स्वयं निर्विकार है, किंतु शरीर के साथ जुड़ने पर उसके लक्षण होते हैं:</p>
              <div className="pl-6">
                <p className="leading-[32px] m-0">• 1. प्राण-अपानौ (सांस अंदर लेना और बाहर छोड़ना)।</p>
                <p className="leading-[32px] m-0">• 2. निमेष-उन्मेषौ (पलकों का झपकना और खुलना)।</p>
                <p className="leading-[32px] m-0">• 3. मनोगतिः (मन का एक विषय से दूसरे विषय पर जाना)।</p>
                <p className="leading-[32px] m-0">• 4. इन्द्रियान्तरसञ्चारः (एक इंद्रिय का ज्ञान दूसरी में)।</p>
                <p className="leading-[32px] m-0">• 5. पञ्चत्वग्रहणम् (मृत्यु के समय शरीर के छूटने का ज्ञान)।</p>
                <p className="leading-[32px] m-0">• 6. अन्य भाव: इच्छा, द्वेष, सुख, दुःख, प्रयत्न, धृति, बुद्धि आदि।</p>
              </div>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION V: TRIVIDHA HETU */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              V. त्रिविध हेतु (3 Fundamental Causes of Disease)
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              {trividhaHetu.map((hetu) => (
                <div key={hetu.num}>
                  <div className="flex gap-2 items-start">
                    <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px]">{hetu.num}.</span>
                    <NAccent bold className="text-base md:text-xl leading-[32px]">{hetu.name}</NAccent>
                  </div>
                  <div className="pl-6 opacity-90">
                    <p className="leading-[32px] m-0">{hetu.desc}</p>
                    <p className="leading-[32px] m-0 text-sm opacity-80">
                      प्रकार: {hetu.subtypes.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION VI: VEDANA */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              VI. वेदना का अधिष्ठान और नाश
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <p className="leading-[32px] m-0"><NText bold>1. अधिष्ठान (Seat):</NText> सुख और दुःख रूपी वेदना का आश्रय मन और शरीर हैं।</p>
              <p className="leading-[32px] m-0"><NText bold>2. अपवाद (No Sensation):</NText> केश (बाल), लोम (रोएं), नख (नाखून), और अन्नमल में चेतना या वेदना नहीं होती।</p>
              <p className="leading-[32px] m-0"><NText bold>3. कारण:</NText> सभी वेदनाओं का मूल कारण 'उपधा' (Desire / Attachment) है।</p>
              <p className="leading-[32px] m-0"><NText bold>4. नाश:</NText> जब 'उपधा' का नाश होता है (अनुपादान), तो सभी वेदनाएं हमेशा के लिए समाप्त हो जाती हैं।</p>
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION VII: SMRITI */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              VII. स्मृति के 8 कारण (Causes of Memory)
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium">
              {memoryCauses.map((mc) => (
                <p key={mc.id} className="leading-[32px] m-0">
                  <NAccent bold>{mc.id}. {mc.name}:</NAccent> {mc.desc}
                </p>
              ))}
            </div>
          </div>

          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* SECTION VIII: MOKSHA */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              VIII. मोक्ष / नैष्ठिकी चिकित्सा
            </h3>

            <div className="text-sm md:text-lg opacity-90 font-medium space-y-[32px]">
              <div>
                <p className="leading-[32px] m-0"><NText bold>A. नैष्ठिकी चिकित्सा:</NText> वह चिकित्सा जो 'उपधा' (तृष्णा) से रहित हो और जिससे जन्म-मरण का हमेशा के लिए अंत हो जाए।</p>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>B. मोक्ष (Moksha):</NText> रज और तम के पूरी तरह नष्ट होने और सभी संयोगों से वियुक्त हो जाने पर पुनर्जन्म का न होना ही मोक्ष है।</p>
              </div>

              <div>
                <p className="leading-[32px] m-0"><NText bold>C. योगियों के 8 ऐश्वर्य / अष्टसिद्धियाँ (8 Yogic Powers):</NText></p>
                <div className="pl-6">
                  {yogicPowers.map((power, idx) => (
                    <p key={idx} className="leading-[32px] m-0">• {idx + 1}. {power}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="mb-[64px]">
            <NText bold className="text-base md:text-xl text-[var(--theme-accent)] block uppercase tracking-widest opacity-80 leading-[32px] mb-[32px]">
              संक्षेप में सारांश (Summary)
            </NText>
            <p className="text-sm md:text-lg font-medium opacity-90 leading-[32px] m-0">
              इस अध्याय में राशिपुरुष (24 तत्व) को चिकित्सा का विषय माना गया है। मन अतीन्द्रिय और एक है। रोग के 3 मूल कारण हैं— असात्म्येन्द्रियार्थसंयोग, प्रज्ञापराध, और परिणाम। अंततः, उपधा (तृष्णा) का नाश ही मोक्ष या नैष्ठिकी चिकित्सा है।
            </p>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
