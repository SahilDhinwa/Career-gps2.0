"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { ArrowDown } from "lucide-react";

export default function AmavataNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><span className="text-red-600 dark:text-rose-400">Nidan</span></>}>
        आमवात (Amavata / Rheumatoid Arthritis)
      </HandwrittenTitle>

      {/* 1. Introduction */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>१. परिचय (Introduction)</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-emerald-400 leading-relaxed pl-4 md:pl-8 mt-2">
          आयुर्वेद में आमवात एक अत्यंत कष्टसाध्य संधिगत (जोड़ों की) व्याधि है। यह <span className="font-bold underline decoration-slate-400 dark:decoration-slate-600 text-slate-800 dark:text-[#f0e6d2]">&apos;आम&apos; (अपाचित रस/विषाक्त तत्व) और &apos;वात दोष&apos;</span> के एक साथ कुपित होकर संधियों में प्रविष्ट होने से उत्पन्न होती है।
        </p>
        <ul className="space-y-2 pl-8 md:pl-12 text-xl text-blue-700 dark:text-emerald-400 mt-2">
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-400 font-bold">→</span> आधुनिक चिकित्सा विज्ञान में इसके लक्षणों की समानता मुख्यतः <span className="font-bold text-red-600 dark:text-rose-400">Rheumatoid Arthritis</span> से की जाती है।</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-400 font-bold">→</span> <strong>माधव निदान</strong> में आमवात का सबसे विस्तृत और स्पष्ट वर्णन मिलता है।</li>
        </ul>
      </div>

      {/* 2. Etiology */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-slate-800 dark:border-[#d4c5b0]">२. निदान (Etiology / Causes)</HandwrittenBox>
        </div>
        
        <div className="mt-2 mb-4 p-4 border-2 border-dashed border-red-600 dark:border-rose-400 bg-red-50 dark:bg-[#382d23] rounded-sm text-center">
          <h3 className="text-xl md:text-2xl font-bold text-red-600 dark:text-rose-400 italic">
            &quot;विरुद्धाहारचेष्टस्य मन्दाग्नेर्निश्चलस्य च।<br/>स्निग्धं भुक्तवतो ह्यन्नं व्यायामं कुर्वतस्तथा॥&quot;
          </h3>
          <p className="text-sm font-sans text-slate-600 dark:text-[#d4c5b0] mt-1">— माधवनिदान</p>
        </div>

        <div className="space-y-4 pl-4 md:pl-8 text-xl text-blue-700 dark:text-emerald-400">
          <div>
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 dark:decoration-slate-600">विरुद्धाहार:</span> असंगत भोजन (जैसे दूध के साथ मछली, ठंडा-गर्म एक साथ लेना)।
          </div>
          <div>
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 dark:decoration-slate-600">विरुद्धचेष्टा:</span> भोजन के तुरंत बाद भारी व्यायाम करना या अत्यधिक विश्राम करना।
          </div>
          <div>
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 dark:decoration-slate-600">मन्दाग्नि:</span> जठराग्नि का कमजोर होना, जिससे भोजन का सही पाचन नहीं होता।
          </div>
          <div>
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 dark:decoration-slate-600">निश्चलस्य:</span> शारीरिक गतिहीनता (Sedentary lifestyle), व्यायाम न करना।
          </div>
          <div>
            <span className="font-bold text-slate-800 dark:text-[#f0e6d2] underline decoration-slate-400 dark:decoration-slate-600">स्निग्ध भोजनोपरांत व्यायाम:</span> अत्यधिक तैलीय/चिकनाई युक्त भोजन करने के तुरंत बाद कठोर व्यायाम करना।
          </div>
        </div>
      </div>

      {/* 3. Pathogenesis Flowchart */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-2xl mb-6">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-400" textColor="text-red-600 dark:text-rose-400">३. संप्राप्ति (Pathogenesis Flowchart)</HandwrittenBox>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-3 text-center w-full max-w-2xl mx-auto">
          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            निदान सेवन (विरुद्ध आहार-विहार, गतिहीनता)
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />
          
          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            जठराग्नि का मंद होना (अग्निमांद्य)
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm max-w-md" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            अपक्व अन्न रस से अत्यंत दूषित &apos;आम&apos; की उत्पत्ति
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm max-w-md" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            कुपित वात दोष द्वारा इस &apos;आम&apos; को सम्पूर्ण शरीर में फैलाना
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm max-w-lg" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            श्लेष्म स्थान (विशेषकर संधियों/Joints) में आम का संचय (स्थानसंश्रय)
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-6 py-3 border-2 border-slate-800 dark:border-[#d4c5b0] text-blue-700 dark:text-emerald-400 text-xl font-bold bg-white/50 dark:bg-[#382d23] rounded-sm max-w-lg" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            संधियों में शोथ (सूजन), स्तब्धता (जकड़ाहट) और तीव्र वेदना की उत्पत्ति
          </div>
          <ArrowDown className="text-red-600 dark:text-rose-400 w-6 h-6" />

          <div className="px-8 py-3 border-4 border-red-600 dark:border-rose-400 text-red-600 dark:text-rose-400 text-2xl font-black bg-red-50 dark:bg-[#382d23] rounded-sm shadow-md" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            आमवात रोग की उत्पत्ति
          </div>
        </div>
      </div>

      {/* 4. Pathological Factors */}
      <div className="mb-10">
        <HandwrittenBox className="mb-4">४. संप्राप्ति घटक</HandwrittenBox>
        <ul className="space-y-2 text-xl text-blue-700 dark:text-emerald-400 pl-4 md:pl-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">दोष:</span> वात (व्यान/श्लेषक) तथा कफ प्रधान (त्रिदोषज)</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">दूष्य:</span> रस धातु, स्नायु, संधि, कण्डरा</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">अग्नि:</span> मन्दाग्नि (जठराग्नि एवं रसाग्नि मंद)</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">स्रोतस:</span> रसवह स्रोतस, अस्थिवह स्रोतस</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">स्रोतोदुष्टि:</span> संग (अवरोध)</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">उद्भव स्थान:</span> आमाशय</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">अधिष्ठान:</span> त्रिक, संधि (हाथ-पैर व घुटनों के जोड़)</li>
          <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">स्वभाव:</span> चिरकारी (Chronic) एवं कष्टसाध्य</li>
        </ul>
      </div>

      {/* 5. Clinical Features & 6. Cardinal Signs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <HandwrittenBox borderColor="border-blue-600 dark:border-emerald-500" textColor="text-blue-700 dark:text-emerald-400" className="mb-4">५. सामान्य लक्षण</HandwrittenBox>
          <ul className="space-y-3 pl-4 text-xl text-blue-700 dark:text-emerald-400">
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">• अंगमर्द:</span> पूरे शरीर में टूटन व दर्द होना।</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">• अरुचि & तृष्णा:</span> भोजन की इच्छा न होना और अत्यधिक प्यास लगना।</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">• आलस्य व गौरव:</span> शरीर में अत्यधिक सुस्ती और भारीपन रहना।</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">• ज्वर & अविपाक:</span> बुखार रहना तथा खाया हुआ अन्न न पचना।</li>
            <li><span className="font-bold text-slate-800 dark:text-[#f0e6d2]">• अंगानां शूनता:</span> संधियों और अंगों में सूजन आ जाना।</li>
          </ul>
        </div>
        
        <div>
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-400" textColor="text-red-600 dark:text-rose-400" className="mb-4">६. प्रत्यात्म लक्षण (Cardinal Signs)</HandwrittenBox>
          <div className="space-y-4 pl-4 text-xl text-blue-700 dark:text-emerald-400">
            <div className="p-3 border border-red-200 dark:border-rose-900/50 bg-red-50/50 dark:bg-rose-900/10 rounded-sm">
              <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 block mb-1">वृश्चिकदंशवत् वेदना (संधिशूल):</span>
              जोड़ों में बिच्छू के डंक मारने जैसी असहनीय पीड़ा।
            </div>
            <div>
              <span className="font-bold text-slate-800 dark:text-[#f0e6d2]">» संधिशोथ:</span> संधियों में अत्यधिक सूजन और लालिमा।
            </div>
            <div>
              <span className="font-bold text-slate-800 dark:text-[#f0e6d2]">» स्तब्धता (Morning Stiffness):</span> विशेषकर सुबह उठने पर जोड़ों में अत्यधिक जकड़ाहट होना।
            </div>
            <div>
              <span className="font-bold text-slate-800 dark:text-[#f0e6d2]">» सञ्चारी वेदना:</span> दर्द का एक जोड़ से दूसरे जोड़ में घूमना/बदलना।
            </div>
          </div>
        </div>
      </div>

      {/* 7. Types based on Dosha */}
      <div className="mb-12">
        <div className="flex items-center gap-4 text-2xl mb-5">
          <HandwrittenBox className="rounded-[50%] px-4">७. दोषानुसार भेद</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-4 md:pl-8 text-xl">
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">वातज आमवात:</span>
            <p className="text-blue-700 dark:text-emerald-400">शूल (दर्द) की अत्यधिक प्रधानता, अंगों में संकोच (सिकुड़न)।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">पित्तज आमवात:</span>
            <p className="text-blue-700 dark:text-emerald-400">संधियों में तीव्र दाह (जलन), लालिमा (राग) और स्पर्श असहनीय होना।</p>
          </div>
          <div className="p-4 border border-slate-300 dark:border-[#d4c5b0]/30 rounded-sm">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">कफज आमवात:</span>
            <p className="text-blue-700 dark:text-emerald-400">अत्यधिक जकड़ाहट (स्तब्धता), भारीपन और संधियों में खुजली।</p>
          </div>
          <div className="p-4 border border-red-400 dark:border-rose-400 rounded-sm bg-red-50 dark:bg-[#382d23]">
            <span className="font-bold text-red-600 dark:text-rose-400 underline decoration-slate-400 mb-2 block">सन्निपातज आमवात:</span>
            <p className="text-blue-700 dark:text-emerald-400">तीनों दोषों के लक्षण एक साथ उपस्थित होना (यह अत्यंत कष्टसाध्य होता है)।</p>
          </div>
        </div>
      </div>

      {/* 8. Types based on Awastha (Table) */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex items-center gap-3 text-2xl mb-5">
          <HandwrittenBox>८. अवस्था के आधार पर भेद</HandwrittenBox>
        </div>
        
        <table className="w-full text-left border-collapse border-2 border-slate-800 dark:border-[#d4c5b0] text-lg md:text-xl mt-4">
          <thead>
            <tr className="bg-slate-200 dark:bg-[#382d23] border-b-2 border-slate-800 dark:border-[#d4c5b0]">
              <th className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-slate-800 dark:text-[#f0e6d2] w-1/3">अवस्था (Stage)</th>
              <th className="p-4 font-bold text-slate-800 dark:text-[#f0e6d2]">लक्षण एवं विशेषताएं</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-800 dark:divide-[#d4c5b0]">
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-red-600 dark:text-rose-400">साम अवस्था (Acute Stage)</td>
              <td className="p-4 text-blue-700 dark:text-emerald-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>आम के लक्षण अत्यधिक प्रबल होते हैं।</li>
                  <li>जोड़ों में तीव्र शोथ (सूजन), शूल (दर्द) और जलन।</li>
                  <li>बुखार, अरुचि, भारीपन और मल में दुर्गंध का होना।</li>
                </ul>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-[#30271e] transition-colors">
              <td className="p-4 border-r-2 border-slate-800 dark:border-[#d4c5b0] font-bold text-emerald-600 dark:text-emerald-400">निराम अवस्था (Chronic Stage)</td>
              <td className="p-4 text-blue-700 dark:text-emerald-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>आम का पचन हो चुका होता है, केवल वात दोष प्रबल रहता है।</li>
                  <li>जोड़ों में शोथ कम हो जाता है, परन्तु दर्द और जकड़ाहट बनी रहती है।</li>
                  <li>बुखार और अरुचि जैसे लक्षण समाप्त हो जाते हैं, संधियों में चटकने की आवाज़ (Crepitus) आ सकती है।</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </HandwrittenCanvas>
  );
}
