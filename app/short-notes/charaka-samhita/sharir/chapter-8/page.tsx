"use client";

import React from "react";
import {
  Baby,
  HeartPulse,
  AlertTriangle,
  Calendar,
  Sparkles,
  ShieldAlert,
  Droplets,
  Home,
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  Stethoscope,
  Flame,
  Scale,
} from "lucide-react";

export default function JatisutriyaShariraNotes() {
  const antenatalRegimen = [
    {
      month: "Month 1 (I)",
      term: "अनुपस्कृत शीत क्षीर (Unmedicated Cold Milk)",
      desc: "बिना किसी औषधि से सिद्ध किया हुआ ठंडा दूध और सात्म्य भोजन का सेवन।",
    },
    {
      month: "Month 2 (II)",
      term: "मधुरौषध सिद्ध क्षीर",
      desc: "मधुर वर्ग (जीवनीय गण) की औषधियों से पकाया हुआ दूध।",
    },
    {
      month: "Month 3 (III)",
      term: "मधु-सर्पिः संयुक्त क्षीर",
      desc: "दूध में शहद और घी (असमान मात्रा में) मिलाकर सेवन कराना।",
    },
    {
      month: "Month 4 (IV)",
      term: "अक्षमात्र नवनीत (1 Aksha Butter)",
      desc: "दूध से निकाले गए 1 अक्ष (लगभग 12 ग्राम) मक्खन का सेवन।",
    },
    {
      month: "Month 5 (V)",
      term: "क्षीर-सर्पिः (Ghee from Milk)",
      desc: "दूध से सीधे निकाले गए घी (क्षीरघृत) का सेवन।",
    },
    {
      month: "Month 6 (VI)",
      term: "मधुरौषध सिद्ध क्षीर-सर्पिः",
      desc: "मधुर औषधियों से सिद्ध किया हुआ क्षीरघृत।",
    },
    {
      month: "Month 7 (VII)",
      term: "मधुरौषध सिद्ध घृत + किक्किस चिकित्सा",
      desc: "Month 6 के समान मधुर सिद्ध घृत। (पेट पर खुजली/किक्किस होने पर करवीर/बेर के काढ़े से परिषेक और चन्दन-मृणाल का लेप)।",
    },
    {
      month: "Month 8 (VIII)",
      term: "क्षीर-यवागू सर्पिष्मती (Milk Gruel with Ghee)",
      desc: "ओज की अस्थिरता को रोकने के लिए दूध और घी से बनी यवागू (दलिया/खीर) का सेवन।",
    },
    {
      month: "Month 9 (IX)",
      term: "अनुवासन बस्ति एवं योनि पिचु",
      desc: "मधुर औषधियों से सिद्ध तेल की अनुवासन बस्ति और उसी तेल में भिगोया हुआ पिचु योनि में धारण करना (गर्भमार्ग के स्नेहन हेतु)।",
    },
  ];

  const fetalDisorders = [
    {
      num: "1",
      roman: "I",
      name: "उपविष्टक (Upavishtaka)",
      cause: "उष्ण-तीक्ष्ण पदार्थ सेवन या योनि से रक्तस्राव (पुष्पदर्शन)",
      features:
        "गर्भ बढ़ता नहीं है और पेट में एक ही स्थान पर रुका रहता है। इसमें गर्भ में स्फुरण (Movement) तो होता है, पर वृद्धि नहीं होती।",
    },
    {
      num: "2",
      roman: "II",
      name: "नागोदर (Nagodara / उपशुष्कक)",
      cause: "उपवास, रूक्ष आहार या वात प्रकोपक कारण",
      features:
        "गर्भ सूख जाता है, स्पन्दन बहुत देर से होता है और वह वर्षों तक कुक्षि (गर्भ) में पड़ा रहता है।",
    },
    {
      num: "3",
      roman: "III",
      name: "लीनगर्भ (Linagarbha)",
      cause: "वात दोष का प्रकोप",
      features:
        "गर्भ निष्क्रिय होकर सोया हुआ सा (निस्पन्द / बिना हलचल के) गर्भ में छिपा रहता है।",
    },
    {
      num: "4",
      roman: "IV",
      name: "मृतगर्भ (Mritagarbha / IUFD)",
      cause: "गर्भ में शिशु की मृत्यु",
      features:
        "स्तब्ध और ठंडा उदर, अस्पन्दन (हलचल बंद), भ्रम, तृष्णा, श्वास कष्ट और योनि से किसी स्राव या आवेग का न आना।",
    },
    {
      num: "5",
      roman: "V",
      name: "मूढगर्भ (Mudhagarbha / Obstructed Labor)",
      cause: "प्रसव काल में वायु का विगुण होना",
      features: "प्रसव के समय गर्भ का मार्ग में टेढ़ा होकर फंस जाना।",
    },
  ];

  const newbornCareSteps = [
    {
      step: "Step 1",
      title: "प्राणप्रत्यागमन (Resuscitation)",
      detail:
        "चेतना न होने पर कान के पास दो पत्थरों का संघट्टन (अश्मनोः सङ्घट्टनम्), चेहरे पर ठंडा/गर्म जल छिड़कना और सूप (Winnowing basket) से हवा करना।",
    },
    {
      step: "Step 2",
      title: "मुख-कण्ठ विशोधन (Clearing Airways)",
      detail:
        "उंगली में रुई लपेटकर शिशु के मुख और कण्ठ में भरे कफ (उल्ब) को साफ करना।",
    },
    {
      step: "Step 3",
      title: "गर्भोदक वमन (Emesis of Amniotic Fluid)",
      detail:
        "पेट में गए गर्भोदक को निकालने के लिए सैन्धव लवण और घी चटाकर वमन कराना।",
    },
    {
      step: "Step 4",
      title: "नालछेदन (Cutting Umbilical Cord)",
      detail:
        "नाभि मूल से 8 Angula छोड़कर धागे से बांधना और उसके ऊपर अर्धधार तीक्ष्ण शस्त्र से नाल काटना।",
    },
    {
      step: "Step 5",
      title: "जातकर्म (Jatakarma)",
      detail:
        "सोने की शलाका से मधु और घृत चटाना, तत्पश्चात माता के दक्षिण स्तन (Right Breast) से स्तनपान कराना।",
    },
    {
      step: "Step 6",
      title: "रक्षाकर्म (Protective Fumigation)",
      detail:
        "सूतिकागार में सरसों, अलसी, हींग, गुग्गुलु और वचा से धूपन (संक्रमण से बचाव हेतु)।",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* HEADER BANNER */}
        <header className="bg-surface/90 backdrop-blur-md border border-amber-500/20 rounded-sm p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Charaka Samhita // Sharira Sthana
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Chapter 8 (VIII): जातिसूत्रीय शारीर
          </h1>
          <p className="text-foreground/70 text-sm md:text-base max-w-3xl leading-relaxed">
            गर्भस्थापन से लेकर प्रसव (Delivery), गर्भव्यापद् (5 Fetal Disorders), मासानुमासिक गर्भिणी परिचर्या (Month 1–9), नवजात शिशु परिचर्या (कौमारभृत्य), धात्री और स्तन्य परीक्षा का संपूर्ण शास्त्रीय विश्लेषण।
          </p>
        </header>

        {/* SECTION I: METHOD OF CONCEPTION & PUMSAVANA */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
              Section I
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              1. गर्भस्थापन की विधि (Method of Conception & Pre-conception Care)
            </h2>
          </div>

          {/* FLOWCHART: DESIRED CHILD DIET & PUMSAVANA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-4">
              <h3 className="font-bold text-amber-500 uppercase tracking-wider text-xs font-mono">
                A. सन्तान की इच्छा के अनुसार आहार (2 Types)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-surface border border-surfaceBorder rounded-sm">
                  <div className="text-xs font-mono text-primary font-bold mb-1">
                    Type 1 (I) // पुत्रकामा
                  </div>
                  <div className="font-bold text-sm mb-2">Desiring a Male Child</div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    मधुर, अम्ल और लवण रस प्रधान एवं स्निग्ध आहार तथा <strong>गोदुग्ध (गाय का दूध)</strong> का सेवन।
                  </p>
                </div>
                <div className="p-4 bg-surface border border-surfaceBorder rounded-sm">
                  <div className="text-xs font-mono text-amber-500 font-bold mb-1">
                    Type 2 (II) // दुहितृकामा
                  </div>
                  <div className="font-bold text-sm mb-2">Desiring a Female Child</div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    <strong>दक्षिणाभिमुख</strong> होकर तैल और <strong>माष (उड़द)</strong> से बने पदार्थों का सेवन।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-3">
              <h3 className="font-bold text-amber-500 uppercase tracking-wider text-xs font-mono">
                B. पुंसवन संस्कार (Pumsavana Karma)
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/80">
                  <span className="font-bold text-foreground">उद्देश्य:</span> गर्भ की स्थिरता और इच्छित संतान प्राप्ति हेतु।
                </p>
                <p className="text-foreground/80">
                  <span className="font-bold text-foreground">काल (Timing):</span> गर्भ के व्यक्त होने से पहले (<strong>अव्यक्ते गर्भे</strong> — सामान्यतः <strong>Month 2 या Month 3</strong> में)।
                </p>
                <div className="p-3 bg-surface border border-surfaceBorder rounded-sm text-xs text-foreground/80">
                  <span className="font-bold text-amber-500 block mb-1">प्रयुक्त द्रव्य (Drugs Used):</span>
                  वटशुङ्ग (बरगद की कोंपल), द्विजीवक (जीवक-ऋषभक), अपामार्ग, सहचर आदि को दूध के साथ नस्य या पान कराना, अथवा गौरसर्षप (पीली सरसों) का प्रयोग।
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION II: HARMFUL FACTORS (GARBHOPAGHATAKARA BHAVA) */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-red-500/15 text-red-500 font-mono font-bold text-sm rounded-sm border border-red-500/30">
              Section II
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              2. गर्भोपघातकर भाव (5 Major Factors Harmful to Fetus)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { id: "1 (I)", term: "उत्कटासन (Utkatasana)", desc: "उकड़ू बैठना या कठोर व विषम आसन पर बैठना।" },
              { id: "2 (II)", term: "वेगविधारण (Vegavidharana)", desc: "वात, मूत्र और पुरीष (मल) के वेगों को रोकना।" },
              { id: "3 (III)", term: "दारुण-आयास (Daruna Ayasa)", desc: "अत्यधिक कठोर व्यायाम या शारीरिक परिश्रम करना।" },
              { id: "4 (IV)", term: "तीक्ष्ण-उष्ण-गुरु भोजन", desc: "अत्यधिक तीखा, गर्म और पचने में भारी भोजन करना।" },
              { id: "5 (V)", term: "रक्तवस्त्र एवं मद्यपान", desc: "लाल वस्त्र धारण करना तथा मद्य/नशीले पदार्थों का सेवन।" },
            ].map((item) => (
              <div key={item.id} className="bg-background/60 border border-red-500/20 p-4 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-red-400 font-bold block mb-1">
                    Factor {item.id}
                  </span>
                  <h4 className="font-bold text-sm text-foreground mb-2">{item.term}</h4>
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION III: FETAL DISORDERS (5 GARBHAVYAPAD) */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-amber-500/15 text-amber-500 font-mono font-bold text-sm rounded-sm border border-amber-500/30">
              Section III
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              3. गर्भव्यापद् / गर्भ की विकृतियाँ (5 Major Fetal Disorders)
            </h2>
          </div>

          {/* FLOWCHART OVERVIEW */}
          <div className="bg-background/70 border border-surfaceBorder p-4 rounded-sm">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-3 text-center">
              Flowchart: 5 Clinical States of Garbhavyapad
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {fetalDisorders.map((d) => (
                <div key={d.num} className="bg-surface border border-surfaceBorder p-3 rounded-sm text-center">
                  <div className="text-xs font-mono font-bold text-primary">
                    Type {d.num} ({d.roman})
                  </div>
                  <div className="font-bold text-sm mt-1">{d.name.split(" (")[0]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fetalDisorders.map((d) => (
              <div key={d.num} className="bg-background/50 border border-surfaceBorder p-5 rounded-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-foreground">{d.name}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-sm">
                    #{d.num} / {d.roman}
                  </span>
                </div>
                <p className="text-xs text-amber-500/90 font-medium">
                  <strong>निदान (Cause):</strong> {d.cause}
                </p>
                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                  <strong>लक्षण (Features):</strong> {d.features}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION IV: MONTH-WISE ANTENATAL REGIMEN (9 MONTHS TABLE) */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
              Section IV
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              4. मासानुमासिक गर्भिणी परिचर्या (Month 1 to 9 Antenatal Regimen)
            </h2>
          </div>

          <div className="overflow-x-auto border border-surfaceBorder rounded-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-background/80 text-xs font-mono uppercase text-amber-500 border-b border-surfaceBorder">
                <tr>
                  <th className="py-3.5 px-4">मास (Month 1–9)</th>
                  <th className="py-3.5 px-4">निर्धारित परिचर्या (Actual Classical Term)</th>
                  <th className="py-3.5 px-4">सरल अर्थ व उद्देश्य (Clinical Purpose)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surfaceBorder bg-background/30">
                {antenatalRegimen.map((row, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-primary whitespace-nowrap">
                      {row.month}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-foreground">
                      {row.term}
                    </td>
                    <td className="py-3.5 px-4 text-foreground/75 leading-relaxed">
                      {row.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION V: MATERNITY WARD & LABOR (SUTIKAGARA & PRASAVA) */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-amber-500/15 text-amber-500 font-mono font-bold text-sm rounded-sm border border-amber-500/30">
              Section V
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              5. सूतिकागार और प्रसव काल (Maternity Ward & Labor Protocol)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <div className="text-xs font-mono text-amber-500 font-bold uppercase">
                Part I // सूतिकागार (Month 9)
              </div>
              <h3 className="font-bold text-base">प्रसूति गृह की तैयारी</h3>
              <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                9th Month में प्रवेश करने पर सूतिकागार तैयार करना चाहिए, जिसमें उलूखल, मूसल, तीक्ष्ण शस्त्र, घी, तेल और अनुभवी स्त्रियाँ (<strong>बहुशः प्रसूताः नार्यः</strong>) उपस्थित हों।
              </p>
            </div>

            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <div className="text-xs font-mono text-primary font-bold uppercase">
                Part II // आसन्न प्रसव के 5 लक्षण
              </div>
              <ul className="space-y-1.5 text-xs md:text-sm text-foreground/80">
                <li><strong>1. क्लम (Klama):</strong> बिना परिश्रम के थकावट।</li>
                <li><strong>2. ग्लानि (Glani):</strong> मन और शरीर में शिथिलता।</li>
                <li><strong>3. कुक्षि-अवस्रंसन:</strong> गर्भ का नीचे खिसकना।</li>
                <li><strong>4. कटी-पृष्ठ-वंक्षण शूल:</strong> कमर व पेल्विक भाग में दर्द।</li>
                <li><strong>5. आवी प्रादुर्भाव:</strong> गर्भाशय संकुचन (True Labor Contractions) व चिपचिपा स्राव।</li>
              </ul>
            </div>

            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <div className="text-xs font-mono text-red-400 font-bold uppercase">
                Part III // अपरा पातन (Placenta Expulsion)
              </div>
              <h3 className="font-bold text-base">आँवल गिराने के उपाय</h3>
              <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                यदि अपरा तुरंत न निकले, तो सिर पर <strong>भूर्जपत्र, काचमणि या सांप की केंचुली (अहिनिर्मोक)</strong> का धूपन करें तथा गले में बालों की चोटी से गुदगुदी करें ताकि वमन के आवेग से अपरा बाहर आ जाए।
              </p>
            </div>
          </div>
        </section>

        {/* SECTION VI: NEWBORN CARE FLOWCHART (JATAKARMA) */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-primary/15 text-primary font-mono font-bold text-sm rounded-sm border border-primary/30">
              Section VI
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              6. नवजात शिशु परिचर्या (Step-by-Step Newborn Resuscitation & Jatakarma Flowchart)
            </h2>
          </div>

          {/* SEQUENTIAL FLOWCHART */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {newbornCareSteps.map((s, index) => (
              <div key={s.step} className="bg-background/60 border border-surfaceBorder p-5 rounded-sm relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-primary/15 text-primary rounded-sm">
                      {s.step}
                    </span>
                    <span className="text-xs font-mono text-foreground/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-base mb-2">{s.title}</h4>
                  <p className="text-xs text-foreground/75 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 4 UMBILICAL COMPLICATIONS SUB-BOX */}
          <div className="bg-red-950/15 border border-red-500/30 p-5 rounded-sm">
            <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-3">
              नाभिपाक के 4 उपद्रव (4 Umbilical Cord Complications if Improperly Cut — 8 Angula Rule)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-background/70 border border-surfaceBorder rounded-sm">
                <strong className="text-red-400 block">1 (I). आयाम (Ayama)</strong>
                लंबाई में सूजन होना
              </div>
              <div className="p-3 bg-background/70 border border-surfaceBorder rounded-sm">
                <strong className="text-red-400 block">2 (II). उत्तुण्डित (Uttundita)</strong>
                गोल उभार होना
              </div>
              <div className="p-3 bg-background/70 border border-surfaceBorder rounded-sm">
                <strong className="text-red-400 block">3 (III). पिण्डालिका (Pindalika)</strong>
                गोलाकार गांठ पड़ना
              </div>
              <div className="p-3 bg-background/70 border border-surfaceBorder rounded-sm">
                <strong className="text-red-400 block">4 (IV). विजृम्भिक (Vijrimbhika)</strong>
                चारों ओर फैलने वाला घाव
              </div>
            </div>
          </div>
        </section>

        {/* SECTION VII: WET NURSE (DHATRI) & BREAST MILK (STANYA) */}
        <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-surfaceBorder pb-4">
            <span className="px-2.5 py-1 bg-amber-500/15 text-amber-500 font-mono font-bold text-sm rounded-sm border border-amber-500/30">
              Section VII
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold">
              7. धात्री परीक्षा और स्तन्य विज्ञान (Wet Nurse & Breast Milk Analysis)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">
                A. प्रशस्त धात्री के 6 प्रमुख गुण (Ideal Wet Nurse)
              </h3>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                <strong>1. समानवर्णा</strong> (Same caste/complexion), <strong>2. यौवनस्था</strong> (Young), <strong>3. अव्यङ्गा</strong> (No deformity), <strong>4. अव्यसना</strong> (No addiction), <strong>5. अनीर्ष्या</strong> (Not jealous), और <strong>6. जीवद्वत्सा</strong> (जिसका अपना बच्चा जीवित हो)।
              </p>
            </div>

            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                B. शुद्ध / प्रशस्त स्तन्य परीक्षा (Pure Breast Milk Test)
              </h3>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                जो जलपात्र में डालने पर तुरंत एकरस होकर घुल जाए (<strong>उदकपात्रे प्रदुह्यमानं उदकमेवानुविशति</strong>), रंग सामान्य सफेद (<strong>पाण्डुर</strong>) हो और स्वाद <strong>मधुर</strong> हो।
              </p>
            </div>
          </div>

          {/* 3 TYPES OF VITIATED BREAST MILK (WATER TEST COMPARISON TABLE) */}
          <div className="overflow-x-auto border border-surfaceBorder rounded-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-background/80 text-xs font-mono uppercase text-amber-500 border-b border-surfaceBorder">
                <tr>
                  <th className="py-3 px-4">प्रकार (Type 1–3)</th>
                  <th className="py-3 px-4">स्वाद व स्वरूप (Taste & Texture)</th>
                  <th className="py-3 px-4">जल परीक्षा (Water Drop Test)</th>
                  <th className="py-3 px-4">शिशु में उत्पन्न विकार</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surfaceBorder bg-background/30">
                <tr>
                  <td className="py-3 px-4 font-bold text-primary">1 (I). वातदुष्ट स्तन्य</td>
                  <td className="py-3 px-4">कषाय (Astringent), रूक्ष</td>
                  <td className="py-3 px-4 font-semibold text-amber-500">पानी पर तैरता है (उदके प्लवते)</td>
                  <td className="py-3 px-4">वात रोग एवं विबन्ध (कब्ज)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-primary">2 (II). पित्तदुष्ट स्तन्य</td>
                  <td className="py-3 px-4">कटु, अम्ल या लवण</td>
                  <td className="py-3 px-4 font-semibold text-amber-500">पीली या नीली धारियाँ (राजि) बनाता है</td>
                  <td className="py-3 px-4">पित्तज विकार, तृष्णा व ज्वर</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-primary">3 (III). कफदुष्ट स्तन्य</td>
                  <td className="py-3 px-4">अत्यधिक मधुर, पिच्छिल, घना</td>
                  <td className="py-3 px-4 font-semibold text-amber-500">पानी में डूब जाता है (उदके अवसीदति)</td>
                  <td className="py-3 px-4">छर्दि (उल्टी), निद्राधिक्य, श्वास रोग</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3 SPECIFIC MILK DEFECTS & MANAGEMENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">
                C. क्षीरदोष के 3 विशिष्ट प्रकार (3 Specific Milk Defects)
              </h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-foreground/80">
                <li><strong>1 (I). वैरस्य (Bad Taste):</strong> वात के कारण दूध का बेस्वाद या कसैला होना।</li>
                <li><strong>2 (II). फेनसङ्घात (Frothy Milk):</strong> वात-पित्त के कारण दूध का झागदार होना।</li>
                <li><strong>3 (III). स्नेहहानि / रौक्ष्य (Loss of Fat):</strong> वात के कारण चिकनाई कम होना (शिशु कृश हो जाता है)।</li>
              </ul>
            </div>

            <div className="bg-background/60 border border-surfaceBorder p-5 rounded-sm space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                D. स्तन्यशोधन एवं स्तन्यजनन चिकित्सा
              </h4>
              <p className="text-xs md:text-sm text-foreground/80">
                <strong>1. स्तन्यशोधन (Purification):</strong> वमन-विरेचन के बाद पाठा, महौषध (सोंठ), देवदारु, मुस्तक, मूर्वा, गुडूची, किराततिक्त का क्वाथ।
              </p>
              <p className="text-xs md:text-sm text-foreground/80">
                <strong>2. स्तन्यजनन (Galactagogues):</strong> वीरण, शालि, षष्टिक, इक्षुवालिका, दर्भ, कुश, काश तथा मद्य, सीधु, यव, गोधूम, लशुन और मत्स्य/मांस रस।
              </p>
            </div>
          </div>
        </section>

        {/* SECTION VIII & IX: KUMARAGARA, NAMAKARANA & LONGEVITY EXAM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-3">
              <span className="px-2 py-0.5 bg-primary/15 text-primary font-mono font-bold text-xs rounded-sm">
                Section VIII
              </span>
              <h2 className="font-heading text-lg md:text-xl font-bold">
                8. कुमारगार एवं नामकरण संस्कार
              </h2>
            </div>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
              <strong>कुमारगार (Pediatric Room):</strong> निवात (सीधे हवा के झोंकों से रहित), प्रकाशयुक्त, हिंसक जन्तुओं व कीटों से सुरक्षित तथा सुगंधित धूप से धूपित।
            </p>
            <div className="p-4 bg-background/60 border border-surfaceBorder rounded-sm space-y-2 text-xs md:text-sm">
              <div className="font-bold text-amber-500">
                नामकरण संस्कार (On Day 10 — दशमेऽहनि, 2 Names):
              </div>
              <p><strong>1 (I). नक्षत्रिक नाम:</strong> जन्म नक्षत्र पर आधारित नाम।</p>
              <p><strong>2 (II). अभिप्रायिक नाम:</strong> व्यावहारिक नाम (घोषवत् वर्णों से प्रारंभ होने वाला तथा <strong>2 या 4 अक्षरों</strong> वाला)।</p>
            </div>
          </section>

          <section className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-3 border-b border-surfaceBorder pb-3">
              <span className="px-2 py-0.5 bg-amber-500/15 text-amber-500 font-mono font-bold text-xs rounded-sm">
                Section IX
              </span>
              <h2 className="font-heading text-lg md:text-xl font-bold">
                9. दीर्घायु बालक के लक्षण (Longevity Signs)
              </h2>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80 leading-relaxed">
              <li><strong>1. केश (Hair):</strong> एक-एक रोमकूप में अलग-अलग, मुलायम और स्निग्ध बाल।</li>
              <li><strong>2. शिर (Head):</strong> छत्राकार (Umbrella-shaped) सिर।</li>
              <li><strong>3. ललाट (Forehead):</strong> चौड़ा और अर्धचन्द्राकार (Crescent-shaped) ललाट।</li>
              <li><strong>4. कर्ण (Ears):</strong> बड़े और मांसल कान।</li>
              <li><strong>5. नाभि (Umbilicus):</strong> <strong>दक्षिणावर्त</strong> (Right-whorled) और गहरी नाभि।</li>
              <li><strong>6. वक्ष (Chest):</strong> चौड़ी और पुष्ट छाती।</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}
