"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";
import { ArrowDown } from "lucide-react";

export default function AtisaraNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><NAccent>Nidan</NAccent></>}>
        अतिसार (Atisara / Diarrhea)
      </HandwrittenTitle>

      {/* 1. Introduction */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>१. परिचय (Introduction)</HandwrittenBox>
        </div>
        <NText className="leading-relaxed pl-4 md:pl-8 mt-2">
          आयुर्वेद में जलवत् अथवा अत्यधिक मात्रा में बार-बार पतले मल का निष्कासन होना <NText bold className="underline decoration-[var(--theme-border)]">&apos;अतिसार&apos;</NText> कहलाता है। आधुनिक चिकित्सा विज्ञान में इसकी समानता <NAccent bold>Diarrhea / Gastroenteritis</NAccent> से की जाती है।
        </NText>
        <NText className="leading-relaxed pl-4 md:pl-8 mt-2">
          <NText bold>निरुक्ति:</NText> <NAccent className="italic font-bold">&quot;अति सरति इति अतिसारः&quot;</NAccent> अर्थात् जब शरीर का द्रवांश गुदामार्ग से अत्यधिक मात्रा में बाहर निकलने लगे, उसे अतिसार कहते हैं।
        </NText>
      </div>

      {/* 2. Etiology */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>२. निदान (Etiology / Causes)</HandwrittenBox>
        </div>
        <NText className="font-bold text-xl pl-4 md:pl-8 mb-4 block" bold>अतिसार के कारणों को मुख्यतः तीन वर्गों में विभाजित किया जाता है:</NText>
        <div className="space-y-4 pl-6 md:pl-12 text-xl text-[var(--theme-text)]">
          <div>
            <NAccent bold>» आहारज हेतु:</NAccent> गुरु (भारी), अति स्निग्ध, अति रूक्ष, अति उष्ण, शीत, विरुद्ध, असात्म्य, <span className="underline decoration-[var(--theme-border)]">अजीर्णाध्यशन</span> (पहले का भोजन पचे बिना पुनः खाना), दूषित जल एवं मद्य का अतिसेवन।
          </div>
          <div>
            <NAccent bold>» विहारज हेतु:</NAccent> अति व्यायाम, <span className="underline decoration-[var(--theme-border)]">अति वेग-विधारण</span> (विशेषकर मल-मूत्र के वेग को रोकना), अति प्रवात (सीधी तेज हवा में रहना), रात्रि जागरण, दिवास्वप्न।
          </div>
          <div>
            <NAccent bold>» मानस हेतु:</NAccent> भय, शोक, चिंता एवं क्रोध आदि (ये वात एवं पित्त को प्रकुपित कर मानसिक अतिसार उत्पन्न करते हैं)।
          </div>
        </div>
      </div>

      {/* 3. Prodromal Symptoms */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>३. पूर्वरूप (Prodromal Symptoms)</HandwrittenBox>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-2"><NText bold>•</NText> हृदय, नाभि, गुदा, उदर में सुई चुभने जैसी वेदना (तोद)।</li>
          <li className="flex gap-2"><NText bold>•</NText> गात्रसाद (शरीर में थकावट या शिथिलता)।</li>
          <li className="flex gap-2"><NText bold>•</NText> विण्मूत्र-अवरोध (शुरुआत में वायु, मल या मूत्र की रुकावट)।</li>
          <li className="flex gap-2"><NText bold>•</NText> आटोप (पेट में गुड़गुड़ाहट) एवं आध्मान (पेट का फूलना)।</li>
          <li className="flex gap-2"><NText bold>•</NText> अविपाक (भोजन का न पचना) एवं अग्निमांद्य।</li>
        </ul>
      </div>

      {/* 4. Pathogenesis Flowchart */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-2xl mb-6">
          <HandwrittenBox>४. संप्राप्ति (Pathogenesis Flowchart)</HandwrittenBox>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-3 text-center w-full max-w-2xl mx-auto">
          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            निदान सेवन (अति जलीय, स्निग्ध, अजीर्ण आदि)
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />
          
          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            शरीर में जलीय अंश की वृद्धि एवं जठराग्नि का मंद होना
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            अग्निमांद्य के कारण कोष्ठ में अपक्व द्रव का संचय
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm max-w-lg" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            कुपित वायु (विशेषतः अपान एवं समान वायु) द्वारा कोष्ठस्थ द्रव को पक्वाशय एवं पुरीषवह स्रोतस में धकेलना
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            द्रव मल के साथ मिलकर अत्यधिक मात्रा में अधोमार्ग (गुदा) से प्रवृत्त होता है
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-8 py-3 border-4 border-[var(--theme-accent)] text-[var(--theme-accent)] text-2xl font-black bg-[var(--theme-accent)]/10 rounded-sm shadow-md" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            अतिसार की उत्पत्ति
          </div>
        </div>
      </div>

      {/* 5. Pathological Factors & 6. Cardinal Sign */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <HandwrittenBox className="mb-4">५. संप्राप्ति घटक</HandwrittenBox>
          <ul className="space-y-2 text-xl text-[var(--theme-text)] pl-4">
            <li><NText bold>दोष:</NText> त्रिदोष (विशेषतः वात — समान/अपान)</li>
            <li><NText bold>दूष्य:</NText> रस धातु, पुरीष, जल (अम्बु)</li>
            <li><NText bold>अग्नि:</NText> मन्दाग्नि, विषमाग्नि</li>
            <li><NText bold>स्रोतस:</NText> पुरीषवह, अन्नवह, उदकवह</li>
            <li><NText bold>स्रोतोदुष्टि:</NText> अतिप्रवृत्ति</li>
            <li><NText bold>अधिष्ठान:</NText> पक्वाशय, गुदा</li>
          </ul>
        </div>
        
        <div>
          <HandwrittenBox className="mb-4">६. प्रत्यात्म लक्षण</HandwrittenBox>
          <div className="mt-2 p-6 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/10 rounded-sm text-center">
            <h3 className="text-2xl font-black text-[var(--theme-accent)] mb-2">&quot;बहुद्रवपुरीषप्रवृत्तिः&quot;</h3>
            <p className="text-xl text-[var(--theme-text)] font-bold">
              अत्यधिक जलीय, पतले द्रव रूप मल की बार-बार प्रवृत्ति होना।
            </p>
          </div>
        </div>
      </div>

      {/* 7. Types */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-2xl mb-5">
          <HandwrittenBox className="rounded-[50%] px-4">७. भेद एवं रूप</HandwrittenBox>
        </div>
        <NText className="font-bold text-xl pl-4 md:pl-8 mb-4 block" bold>महर्षि चरक एवं सुश्रुत के अनुसार अतिसार के मुख्य ६ भेद हैं:</NText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 md:pl-8 text-xl">
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">वातज अतिसार:</NAccent>
            <NText><NText bold>मल:</NText> रूक्ष, फेनयुक्त (झागदार), अल्प मात्रा में बार-बार, शब्द के साथ।</NText>
            <NText className="block mt-1"><NText bold>लक्षण:</NText> पेट में तीव्र शूल, गुदाभ्रंश की संभावना।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">पित्तज अतिसार:</NAccent>
            <NText><NText bold>मल:</NText> पीला, हरा, तप्त, दुर्गन्धयुक्त।</NText>
            <NText className="block mt-1"><NText bold>लक्षण:</NText> गुदा एवं शरीर में दाह, तृष्णा, स्वेद।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">कफज अतिसार:</NAccent>
            <NText><NText bold>मल:</NText> स्निग्ध, श्वेत/पिच्छिल, कफयुक्त।</NText>
            <NText className="block mt-1"><NText bold>लक्षण:</NText> पेट में भारीपन, रोमांच, तन्द्रा।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm bg-[var(--theme-accent)]/10">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">सन्निपातज अतिसार:</NAccent>
            <NText>तीनों दोषों के मिले-जुले लक्षण। मल का रंग कई प्रकार का। यह <NAccent bold>कृच्छ्रसाध्य अथवा असाध्य</NAccent> होता है।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">भयज अतिसार:</NAccent>
            <NText>तीव्र भय के कारण वात प्रकुपित होकर तुरन्त द्रव मल की प्रवृत्ति (वातज समान)।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">शोकज अतिसार:</NAccent>
            <NText>अत्यधिक शोक के कारण ऊष्मा बढ़कर पित्त को दूषित करती है (मल रक्तमिश्रित)।</NText>
          </div>
        </div>
      </div>

      {/* 8. Saam vs Niram Table */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex items-center gap-3 text-2xl mb-5">
          <HandwrittenBox>८. साम एवं निराम अतिसार</HandwrittenBox>
        </div>
        
        <table className="w-full text-left border-collapse border-2 border-[var(--theme-border)] text-lg md:text-xl">
          <thead>
            <tr className="bg-[var(--theme-border)]/10 border-b-2 border-[var(--theme-border)]">
              <th className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)]">लक्षण / बिन्दु</th>
              <th className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-accent)]">साम अतिसार (आमलक्षण युक्त)</th>
              <th className="p-4 font-bold text-[var(--theme-text)]">निराम अतिसार (आम रहित)</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-[var(--theme-border)]">
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)]">जल परीक्षा (जलप्लवन)</td>
              <td className="p-4 border-r-2 border-[var(--theme-border)] text-[var(--theme-text)]">मल जल में डालने पर डूब जाता है (गुरु होने से)।</td>
              <td className="p-4 text-[var(--theme-text)]">मल जल में डालने पर तैरता है (लघु होने से)।</td>
            </tr>
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)]">मल की प्रकृति</td>
              <td className="p-4 border-r-2 border-[var(--theme-border)] text-[var(--theme-text)]">अत्यधिक दुर्गन्धयुक्त, पिच्छिल (चिपचिपा), कफयुक्त।</td>
              <td className="p-4 text-[var(--theme-text)]">दुर्गन्ध रहित या सामान्य, अपिच्छिल (बिना चिपचिपापन)।</td>
            </tr>
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)]">प्रवृत्ति</td>
              <td className="p-4 border-r-2 border-[var(--theme-border)] text-[var(--theme-text)]">रुक-रुक कर, कष्ट के साथ, प्रवाहण (straining) करने पर।</td>
              <td className="p-4 text-[var(--theme-text)]">सुगमता से, बिना किसी रुकावट या कष्ट के।</td>
            </tr>
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)]">शूल व भारीपन</td>
              <td className="p-4 border-r-2 border-[var(--theme-border)] text-[var(--theme-text)]">उदर में तीव्र शूल, आटोप (गुड़गुड़ाहट) तथा भारीपन।</td>
              <td className="p-4 text-[var(--theme-text)]">शूल की शान्ति, शरीर एवं उदर में हल्कापन (लाघव)।</td>
            </tr>
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors bg-[var(--theme-accent)]/10">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)]">चिकित्सा सिद्धान्त</td>
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-accent)]">कभी भी स्तंभन नहीं करना चाहिए; पाचन एवं दीपन करना चाहिए।</td>
              <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">दोष शांत होने पर आवश्यकतानुसार स्तंभन (रोकने वाली) औषधियां दी जाती हैं।</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 9. Prognosis (Sadhya-Asadhyata) */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>९. साध्य-असाध्यता (Prognosis)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)] list-disc list-inside marker:text-[var(--theme-accent)]">
          <li><NText bold>सुखसाध्य:</NText> वातज, पित्तज, कफज, भयज और शोकज अतिसार (यदि उपद्रव रहित और नवीन हों)।</li>
          <li><NText bold>कृच्छ्रसाध्य:</NText> सन्निपातज अतिसार।</li>
          <li><NAccent bold>असाध्य (Incurable):</NAccent> पक्व अतिसार जिसमें सभी रोमछिद्रों से रक्तस्राव हो, गुदापाक हो गया हो, आँखें धंस गई हों, शरीर अत्यधिक ठंडा पड़ गया हो किन्तु तीव्र प्यास लग रही हो (अरिष्ट लक्षण)।</li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
