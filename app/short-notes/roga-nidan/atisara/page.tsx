"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { ArrowDown } from "lucide-react";

export default function AtisaraNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><span className="text-red-600 dark:text-rose-400">Nidan</span></>}>
        अतिसार (Atisara / Diarrhea)
      </HandwrittenTitle>

      {/* 1. Introduction */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>१. परिचय (Introduction)</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-emerald-400 leading-relaxed pl-4 md:pl-8 mt-2">
          आयुर्वेद में जलवत् अथवा अत्यधिक मात्रा में बार-बार पतले मल का निष्कासन होना <span className="font-bold underline decoration-slate-400 dark:decoration-slate-600 text-slate-800 dark:text-[#f0e6d2]">&apos;अतिसार&apos;</span> कहलाता है। आधुनिक चिकित्सा विज्ञान में इसकी समानता <span className="font-bold text-red-600 dark:text-rose-400">Diarrhea / Gastroenteritis</span> से की जाती है।
        </p>
        <p className="text-blue-700 dark:text-emerald-400 leading-relaxed pl-4 md:pl-8 mt-2">
          <span className="font-bold text-slate-800 dark:text-[#f0e6d2]">निरुक्ति:</span> <span className="italic font-bold text-red-600 dark:text-rose-400">&quot;अति सरति इति अतिसारः&quot;</span> अर्थात् जब शरीर का द्रवांश गुदामार्ग से अत्यधिक मात्रा में बाहर निकलने लगे, उसे अतिसार कहते हैं।
        </p>
      </div>

      {/* 2. Etiology */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-slate-800 dark:border-[#d4c5b0]">२. निदान (Etiology / Causes)</HandwrittenBox>
        </div>
        <p className="text-slate-800 dark:text-[#f0e6d2] font-bold text-xl pl-4 md:pl-8 mb-4">अतिसार के कारणों को मुख्यतः तीन वर्गों में विभाजित किया जाता है:</p>
        <div className="space-y-4 pl-6 md:pl-12 text-xl text-blue-700 dark:text-emerald-400">
          <div>
            <span className="font-bold text-red-600 dark:text-rose-400">» आहारज हेतु:</span> गुरु (भारी), अति स्निग्ध, अति रूक्ष, अति उष्ण, शीत, विरुद्ध, असात्म्य, <span className="underline decoration-slate-400 dark:decoration-slate-600">अजीर्णाध्यशन</span> (पहले का भोजन पचे बिना पुनः खाना), दूषित जल एवं मद्य का अतिसेवन।
          </div>
          <div>
            <span className="font-bold text-red-600 dark:text-rose-400">» विहारज हेतु:</span> अति व्यायाम, <span className="underline decoration-slate-400 dark:decoration-slate-600">अति वेग-विधारण</span> (विशेषकर मल-मूत्र के वेग को रोकना), अति प्रवात (सीधी तेज हवा में रहना), रात्रि जागरण, दिवास्वप्न।
          </div>
          <div>
            <span className="font-bold text-red-600 dark:text-rose-400">» मानस हेतु:</span> भय, शोक, चिंता एवं क्रोध आदि (ये वात एवं पित्त को प्रकुपित कर मानसिक अतिसार उत्पन्न करते हैं)।
          </div>
        </div>
      </div>

      {/* 3. Prodromal Symptoms */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>३. पूर्वरूप (Prodromal Symptoms)</HandwrittenBox>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-emerald-400">
          <li className="flex gap-2"><span className="text-slate-800 dark:text-[#f0e6d2]">•</span> हृदय, नाभि, गुदा, उदर में सुई चुभने जैसी वेदना (तोद)।</li>
          <li className="flex gap-2"><span className="text-slate-800 dark:text-[#f0e6d2]">•</span> गात्रसाद (शरीर में थकावट या शिथिलता)।</li>
          <li className="flex gap-2"><span className="text-slate-800 dark:text-[#f0e6d2]">•</span> विण्मूत्र-अवरोध (शुरुआत में वायु, मल या मूत्र की रुकावट)।</li>
          <li className="flex gap-2"><span className="text-slate-800 dark:text-[#f0e6d2]">•</span> आटोप (पेट में गुड़गुड़ाहट) एवं आध्मान (पेट का फूलना)।</li>
          <li className="flex gap-2"><span className="text-slate-800 dark:text-[#f0e6d2]">•</span> अविपाक (भोजन का न पचना) एवं अग्निमांद्य।</li>
        </ul>
      </div>

      {/* 4. Pathogenesis Flowchart */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-2xl mb-6">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-400" textColor="text-red-600 dark:text-rose-400">४. संप्राप्ति (Pathogenesis Flowchart)</HandwrittenBox>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-3 text-center w-full max-w-2xl mx-auto">
          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            निदान सेवन (अति जलीय, स्निग्ध, अजीर्ण आदि)
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />
          
          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            शरीर में जलीय अंश की वृद्धि एवं जठराग्नि का मंद होना
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            अग्निमांद्य के कारण कोष्ठ में अपक्व द्रव का संचय
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm max-w-lg" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            कुपित वायु (विशेषतः अपान एवं समान वायु) द्वारा कोष्ठस्थ द्रव को पक्वाशय एवं पुरीषवह स्रोतस में धकेलना
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            द्रव मल के साथ मिलकर अत्यधिक मात्रा में अधोमार्ग (गुदा) से प्रवृत्त होता है
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-8 py-3 border-4 border-red-600 dark:border-rose-400 text-red-600 dark:text-rose-400 text-2xl font-black bg-red-50 dark:bg-[#382d23] rounded-sm shadow-md" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            अतिसार की उत्पत्ति
          </div>
        </div>
      </div>

      {/* 5. Pathological Factors & 6. Cardinal Sign */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <HandwrittenBox className="mb-4">५. संप्राप्ति घटक</HandwrittenBox>
          <ul className="space-y-2 text-xl text-blue-700 dark:text-emerald-400 pl-4">
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">दोष:</span> त्रिदोष (विशेषतः वात — समान/अपान)</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">दूष्य:</span> रस धातु, पुरीष, जल (अम्बु)</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">अग्नि:</span> मन्दाग्नि, विषमाग्नि</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">स्रोतस:</span> पुरीषवह, अन्नवह, उदकवह</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">स्रोतोदुष्टि:</span> अतिप्रवृत्ति</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">अधिष्ठान:</span> पक्वाशय, गुदा</li>
          </ul>
        </div>
        
        <div>
          <HandwrittenBox borderColor="border-blue-600 dark:border-emerald-500" textColor="text-blue-700 dark:text-emerald-400" className="mb-4">६. प्रत्यात्म लक्षण</HandwrittenBox>
          <div className="mt-2 p-6 border-2 border-dashed border-red-600 dark:border-rose-400 bg-red-50 dark:bg-[#382d23] rounded-sm text-center">
            <h3 className="text-2xl font-black text-red-600 dark:text-rose-400 mb-2">&quot;बहुद्रवपुरीषप्रवृत्तिः&quot;</h3>
            <p className="text-xl text-slate-800 dark:text-[#f0e6d2] font-bold">
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
        <p className="text-slate-800 dark:text-[#f0e6d2] font-bold text-xl pl-4 md:pl-8 mb-4">महर्षि चरक एवं सुश्रुत के अनुसार अतिसार के मुख्य ६ भेद हैं:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 md:pl-8 text-xl">
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">वातज अतिसार:</span>
            <p className="text-blue-700 dark:text-emerald-400"><span className="text-slate-800 dark:text-[#f0e6d2] font-bold">मल:</span> रूक्ष, फेनयुक्त (झागदार), अल्प मात्रा में बार-बार, शब्द के साथ।</p>
            <p className="text-blue-700 dark:text-emerald-400"><span className="text-slate-800 dark:text-[#f0e6d2] font-bold">लक्षण:</span> पेट में तीव्र शूल, गुदाभ्रंश की संभावना।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">पित्तज अतिसार:</span>
            <p className="text-blue-700 dark:text-emerald-400"><span className="text-slate-800 dark:text-[#f0e6d2] font-bold">मल:</span> पीला, हरा, तप्त, दुर्गन्धयुक्त।</p>
            <p className="text-blue-700 dark:text-emerald-400"><span className="text-slate-800 dark:text-[#f0e6d2] font-bold">लक्षण:</span> गुदा एवं शरीर में दाह, तृष्णा, स्वेद।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">कफज अतिसार:</span>
            <p className="text-blue-700 dark:text-emerald-400"><span className="text-slate-800 dark:text-[#f0e6d2] font-bold">मल:</span> स्निग्ध, श्वेत/पिच्छिल, कफयुक्त।</p>
            <p className="text-blue-700 dark:text-emerald-400"><span className="text-slate-800 dark:text-[#f0e6d2] font-bold">लक्षण:</span> पेट में भारीपन, रोमांच, तन्द्रा।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm bg-red-50/50 dark:bg-rose-900/10">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">सन्निपातज अतिसार:</span>
            <p className="text-blue-700 dark:text-emerald-400">तीनों दोषों के मिले-जुले लक्षण। मल का रंग कई प्रकार का। यह <span className="font-bold text-red-600 dark:text-rose-400">कृच्छ्रसाध्य अथवा असाध्य</span> होता है।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 mb-2 block">भयज अतिसार:</span>
            <p className="text-blue-700 dark:text-emerald-400">तीव्र भय के कारण वात प्रकुपित होकर तुरन्त द्रव मल की प्रवृत्ति (वातज समान)।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 mb-2 block">शोकज अतिसार:</span>
            <p className="text-blue-700 dark:text-emerald-400">अत्यधिक शोक के कारण ऊष्मा बढ़कर पित्त को दूषित करती है (मल रक्तमिश्रित)।</p>
          </div>
        </div>
      </div>

      {/* 8. Saam vs Niram Table */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex items-center gap-3 text-2xl mb-5">
          <HandwrittenBox>८. साम एवं निराम अतिसार</HandwrittenBox>
        </div>
        
        <table className="w-full text-left border-collapse border-2 border-slate-800 dark:border-[#d4c5b0] text-lg md:text-xl">
          <thead>
            <tr className="bg-slate-200 dark:bg-[#382d23] border-b-2 border-slate-800 dark:border-[#d4c5b0]">
              <th className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2]">लक्षण / बिन्दु</th>
              <th className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-red-600 dark:text-rose-400">साम अतिसार (आमलक्षण युक्त)</th>
              <th className="p-4 font-bold text-blue-700 dark:text-emerald-400">निराम अतिसार (आम रहित)</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-800 dark:divide-[#d4c5b0]">
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2]">जल परीक्षा (जलप्लवन)</td>
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400">मल जल में डालने पर डूब जाता है (गुरु होने से)।</td>
              <td className="p-4 text-blue-700 dark:text-emerald-400">मल जल में डालने पर तैरता है (लघु होने से)।</td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2]">मल की प्रकृति</td>
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400">अत्यधिक दुर्गन्धयुक्त, पिच्छिल (चिपचिपा), कफयुक्त।</td>
              <td className="p-4 text-blue-700 dark:text-emerald-400">दुर्गन्ध रहित या सामान्य, अपिच्छिल (बिना चिपचिपापन)।</td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2]">प्रवृत्ति</td>
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400">रुक-रुक कर, कष्ट के साथ, प्रवाहण (straining) करने पर।</td>
              <td className="p-4 text-blue-700 dark:text-emerald-400">सुगमता से, बिना किसी रुकावट या कष्ट के।</td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2]">शूल व भारीपन</td>
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400">उदर में तीव्र शूल, आटोप (गुड़गुड़ाहट) तथा भारीपन।</td>
              <td className="p-4 text-blue-700 dark:text-emerald-400">शूल की शान्ति, शरीर एवं उदर में हल्कापन (लाघव)।</td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors bg-red-50/30 dark:bg-rose-900/10">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2]">चिकित्सा सिद्धान्त</td>
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] text-red-600 dark:text-rose-400 font-bold">कभी भी स्तंभन नहीं करना चाहिए; पाचन एवं दीपन करना चाहिए।</td>
              <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">दोष शांत होने पर आवश्यकतानुसार स्तंभन (रोकने वाली) औषधियां दी जाती हैं।</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 9. Prognosis (Sadhya-Asadhyata) */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-400" textColor="text-red-600 dark:text-rose-400">९. साध्य-असाध्यता (Prognosis)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-emerald-400 list-disc list-inside marker:text-red-600 dark:marker:text-rose-400">
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">सुखसाध्य:</span> वातज, पित्तज, कफज, भयज और शोकज अतिसार (यदि उपद्रव रहित और नवीन हों)।</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">कृच्छ्रसाध्य:</span> सन्निपातज अतिसार।</li>
          <li><span className="font-bold text-red-600 dark:text-rose-400">असाध्य (Incurable):</span> पक्व अतिसार जिसमें सभी रोमछिद्रों से रक्तस्राव हो, गुदापाक हो गया हो, आँखें धंस गई हों, शरीर अत्यधिक ठंडा पड़ गया हो किन्तु तीव्र प्यास लग रही हो (अरिष्ट लक्षण)।</li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
