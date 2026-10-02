"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NList, NCard } from "@/components/NoteElements";
import { ArrowDown } from "lucide-react";

export default function AmavataNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><NAccent>Nidan</NAccent></>}>
        आमवात (Amavata / Rheumatoid Arthritis)
      </HandwrittenTitle>

      {/* 1. Introduction */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>१. परिचय (Introduction)</HandwrittenBox>
        </div>
        <NText className="leading-relaxed pl-4 md:pl-8 mt-2">
          आयुर्वेद में आमवात एक अत्यंत कष्टसाध्य संधिगत (जोड़ों की) व्याधि है। यह <NText bold className="underline decoration-[var(--theme-border)]">&apos;आम&apos; (अपाचित रस/विषाक्त तत्व) और &apos;वात दोष&apos;</NText> के एक साथ कुपित होकर संधियों में प्रविष्ट होने से उत्पन्न होती है।
        </NText>
        <NList className="pl-4 md:pl-8 mt-2">
          <li className="flex gap-2"><NAccent className="font-bold">→</NAccent> आधुनिक चिकित्सा विज्ञान में इसके लक्षणों की समानता मुख्यतः <NAccent bold>Rheumatoid Arthritis</NAccent> से की जाती है।</li>
          <li className="flex gap-2"><NAccent className="font-bold">→</NAccent> <NText bold>माधव निदान</NText> में आमवात का सबसे विस्तृत और स्पष्ट वर्णन मिलता है।</li>
        </NList>
      </div>

      {/* 2. Etiology */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>२. निदान (Etiology / Causes)</HandwrittenBox>
        </div>
        
        <div className="mt-2 mb-4 p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/10 rounded-sm text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--theme-accent)] italic">
            &quot;विरुद्धाहारचेष्टस्य मन्दाग्नेर्निश्चलस्य च।<br/>स्निग्धं भुक्तवतो ह्यन्नं व्यायामं कुर्वतस्तथा॥&quot;
          </h3>
          <p className="text-sm font-sans text-[var(--theme-text)] opacity-70 mt-1">— माधवनिदान</p>
        </div>

        <div className="space-y-4 pl-4 md:pl-8 text-xl text-[var(--theme-text)]">
          <div>
            <NText bold className="underline decoration-[var(--theme-border)]">विरुद्धाहार:</NText> असंगत भोजन (जैसे दूध के साथ मछली, ठंडा-गर्म एक साथ लेना)।
          </div>
          <div>
            <NText bold className="underline decoration-[var(--theme-border)]">विरुद्धचेष्टा:</NText> भोजन के तुरंत बाद भारी व्यायाम करना या अत्यधिक विश्राम करना।
          </div>
          <div>
            <NText bold className="underline decoration-[var(--theme-border)]">मन्दाग्नि:</NText> जठराग्नि का कमजोर होना, जिससे भोजन का सही पाचन नहीं होता।
          </div>
          <div>
            <NText bold className="underline decoration-[var(--theme-border)]">निश्चलस्य:</NText> शारीरिक गतिहीनता (Sedentary lifestyle), व्यायाम न करना।
          </div>
          <div>
            <NText bold className="underline decoration-[var(--theme-border)]">स्निग्ध भोजनोपरांत व्यायाम:</NText> अत्यधिक तैलीय/चिकनाई युक्त भोजन करने के तुरंत बाद कठोर व्यायाम करना।
          </div>
        </div>
      </div>

      {/* 3. Pathogenesis Flowchart */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-2xl mb-6">
          <HandwrittenBox>३. संप्राप्ति (Pathogenesis Flowchart)</HandwrittenBox>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-3 text-center w-full max-w-2xl mx-auto">
          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            निदान सेवन (विरुद्ध आहार-विहार, गतिहीनता)
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />
          
          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            जठराग्नि का मंद होना (अग्निमांद्य)
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm max-w-md" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            अपक्व अन्न रस से अत्यंत दूषित &apos;आम&apos; की उत्पत्ति
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm max-w-md" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            कुपित वात दोष द्वारा इस &apos;आम&apos; को सम्पूर्ण शरीर में फैलाना
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm max-w-lg" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}>
            श्लेष्म स्थान (विशेषकर संधियों/Joints) में आम का संचय (स्थानसंश्रय)
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-6 py-3 border-2 border-[var(--theme-border)] text-[var(--theme-text)] text-xl font-bold bg-white/20 dark:bg-black/10 rounded-sm max-w-lg" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            संधियों में शोथ (सूजन), स्तब्धता (जकड़ाहट) और तीव्र वेदना की उत्पत्ति
          </div>
          <ArrowDown className="text-[var(--theme-accent)] w-6 h-6" />

          <div className="px-8 py-3 border-4 border-[var(--theme-accent)] text-[var(--theme-accent)] text-2xl font-black bg-[var(--theme-accent)]/10 rounded-sm shadow-md" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
            आमवात रोग की उत्पत्ति
          </div>
        </div>
      </div>

      {/* 4. Pathological Factors */}
      <div className="mb-10">
        <HandwrittenBox className="mb-4">४. संप्राप्ति घटक</HandwrittenBox>
        <ul className="space-y-2 text-xl text-[var(--theme-text)] pl-4 md:pl-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <li><NText bold>दोष:</NText> वात (व्यान/श्लेषक) तथा कफ प्रधान (त्रिदोषज)</li>
          <li><NText bold>दूष्य:</NText> रस धातु, स्नायु, संधि, कण्डरा</li>
          <li><NText bold>अग्नि:</NText> मन्दाग्नि (जठराग्नि एवं रसाग्नि मंद)</li>
          <li><NText bold>स्रोतस:</NText> रसवह स्रोतस, अस्थिवह स्रोतस</li>
          <li><NText bold>स्रोतोदुष्टि:</NText> संग (अवरोध)</li>
          <li><NText bold>उद्भव स्थान:</NText> आमाशय</li>
          <li><NText bold>अधिष्ठान:</NText> त्रिक, संधि (हाथ-पैर व घुटनों के जोड़)</li>
          <li><NText bold>स्वभाव:</NText> चिरकारी (Chronic) एवं कष्टसाध्य</li>
        </ul>
      </div>

      {/* 5. Clinical Features & 6. Cardinal Signs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <HandwrittenBox className="mb-4">५. सामान्य लक्षण</HandwrittenBox>
          <ul className="space-y-3 pl-4 text-xl text-[var(--theme-text)]">
            <li><NText bold>• अंगमर्द:</NText> पूरे शरीर में टूटन व दर्द होना।</li>
            <li><NText bold>• अरुचि & तृष्णा:</NText> भोजन की इच्छा न होना और अत्यधिक प्यास लगना।</li>
            <li><NText bold>• आलस्य व गौरव:</NText> शरीर में अत्यधिक सुस्ती और भारीपन रहना।</li>
            <li><NText bold>• ज्वर & अविपाक:</NText> बुखार रहना तथा खाया हुआ अन्न न पचना।</li>
            <li><NText bold>• अंगानां शूनता:</NText> संधियों और अंगों में सूजन आ जाना।</li>
          </ul>
        </div>
        
        <div>
          <HandwrittenBox className="mb-4">६. प्रत्यात्म लक्षण (Cardinal Signs)</HandwrittenBox>
          <div className="space-y-4 pl-4 text-xl text-[var(--theme-text)]">
            <div className="p-3 border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 rounded-sm">
              <NAccent bold className="underline decoration-[var(--theme-border)] block mb-1">वृश्चिकदंशवत् वेदना (संधिशूल):</NAccent>
              जोड़ों में बिच्छू के डंक मारने जैसी असहनीय पीड़ा।
            </div>
            <div>
              <NText bold>» संधिशोथ:</NText> संधियों में अत्यधिक सूजन और लालिमा।
            </div>
            <div>
              <NText bold>» स्तब्धता (Morning Stiffness):</NText> विशेषकर सुबह उठने पर जोड़ों में अत्यधिक जकड़ाहट होना।
            </div>
            <div>
              <NText bold>» सञ्चारी वेदना:</NText> दर्द का एक जोड़ से दूसरे जोड़ में घूमना/बदलना।
            </div>
          </div>
        </div>
      </div>

      {/* 7. Types based on Dosha */}
      <div className="mb-12">
        <div className="flex items-center gap-4 text-2xl mb-5">
          <HandwrittenBox>७. दोषानुसार भेद</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-4 md:pl-8 text-xl">
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">वातज आमवात:</NAccent>
            <NText>शूल (दर्द) की अत्यधिक प्रधानता, अंगों में संकोच (सिकुड़न)।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">पित्तज आमवात:</NAccent>
            <NText>संधियों में तीव्र दाह (जलन), लालिमा (राग) और स्पर्श असहनीय होना।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">कफज आमवात:</NAccent>
            <NText>अत्यधिक जकड़ाहट (स्तब्धता), भारीपन और संधियों में खुजली।</NText>
          </div>
          <div className="p-4 border-2 border-[var(--theme-accent)] rounded-sm bg-[var(--theme-accent)]/10">
            <NAccent bold className="underline decoration-[var(--theme-border)] mb-2 block">सन्निपातज आमवात:</NAccent>
            <NText>तीनों दोषों के लक्षण एक साथ उपस्थित होना (यह अत्यंत कष्टसाध्य होता है)।</NText>
          </div>
        </div>
      </div>

      {/* 8. Types based on Awastha (Table) */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex items-center gap-3 text-2xl mb-5">
          <HandwrittenBox>८. अवस्था के आधार पर भेद</HandwrittenBox>
        </div>
        
        <table className="w-full text-left border-collapse border-2 border-[var(--theme-border)] text-lg md:text-xl mt-4">
          <thead>
            <tr className="bg-[var(--theme-border)]/10 border-b-2 border-[var(--theme-border)]">
              <th className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-text)] w-1/3">अवस्था (Stage)</th>
              <th className="p-4 font-bold text-[var(--theme-text)]">लक्षण एवं विशेषताएं</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-[var(--theme-border)]">
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-[var(--theme-accent)]">साम अवस्था (Acute Stage)</td>
              <td className="p-4 text-[var(--theme-text)]">
                <ul className="list-disc list-inside space-y-1">
                  <li>आम के लक्षण अत्यधिक प्रबल होते हैं।</li>
                  <li>जोड़ों में तीव्र शोथ (सूजन), शूल (दर्द) और जलन।</li>
                  <li>बुखार, अरुचि, भारीपन और मल में दुर्गंध का होना।</li>
                </ul>
              </td>
            </tr>
            <tr className="hover:bg-[var(--theme-border)]/5 transition-colors">
              <td className="p-4 border-r-2 border-[var(--theme-border)] font-bold text-emerald-600 dark:text-emerald-400">निराम अवस्था (Chronic Stage)</td>
              <td className="p-4 text-[var(--theme-text)]">
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
