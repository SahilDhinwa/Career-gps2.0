"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function CharakaSharirChapter6() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8 pt-4">
        <Link 
          href="/short-notes/charaka-samhita/sharir" 
          className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Sharira Sthana Hub
        </Link>
      </div>

      {/* Main Chapter Title */}
      <HandwrittenTitle badge={<>Charaka<br/><NAccent>Sharira</NAccent></>}>
        अध्याय 6: शरीरविचय शारीर
      </HandwrittenTitle>

      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-sm md:text-base tracking-widest uppercase transform -rotate-1">
          आहार परिणामकर भाव (6 Factors for Digestion)
        </span>
      </div>

      {/* ========================================== */}
      {/* Q&A STYLE INTRODUCTION (Like Reference Image) */}
      {/* ========================================== */}
      <div className="mb-10 pl-2 md:pl-4 border-l-2 border-[var(--theme-border)]/30">
        <div className="flex gap-3 mb-4">
          <span className="font-bold text-[var(--theme-accent)] shrink-0 w-8">Q.</span>
          <NText className="font-bold text-lg md:text-xl underline decoration-[var(--theme-border)]/40 underline-offset-4">
            'आहार परिणामकर भाव' किस अध्याय में है और यह क्या हैं?
          </NText>
        </div>
        <div className="flex gap-3">
          <span className="font-bold text-[var(--theme-text)] shrink-0 w-8 opacity-70">Ans.</span>
          <div className="space-y-4 text-base md:text-lg opacity-90 font-medium">
            <p>
              आचार्य चरक ने इसका वर्णन चरक संहिता के <NAccent bold>'शारीर स्थान', अध्याय 6 ('शरीरविचय शारीर')</NAccent> में किया है।
            </p>
            <p>
              <NText bold>आहार परिणामकर भाव: </NText> 
              'आहार' (भोजन) का 'परिणाम' (Digestion/Transformation) जिन भावों (Factors) के कारण होता है, उन्हें आहार परिणामकर भाव कहते हैं। 
            </p>
            <p className="bg-[var(--theme-border)]/10 p-3 rounded-sm border border-[var(--theme-border)]/20 italic">
              सरल शब्दों में, खाए हुए भोजन को पचाकर शरीर की धातुओं (रक्त, मांस आदि) में बदलने के लिए जिन चीज़ों की आवश्यकता होती है, वे आहार परिणामकर भाव कहलाते हैं।
            </p>
            <p>आचार्य चरक ने ऐसे 6 (षट्) भाव बताए हैं।</p>
          </div>
        </div>
      </div>

      <div className="w-2/3 h-px bg-[var(--theme-border)]/30 mx-auto mb-10"></div>

      {/* ========================================== */}
      {/* THE 6 FACTORS (PLAIN TEXT & LIST FORMAT)     */}
      {/* ========================================== */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl text-[var(--theme-text)] mb-8 flex items-center gap-2">
          <span className="bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] px-3 py-1 rounded-sm border border-[var(--theme-accent)]/20">षट् आहार परिणामकर भाव</span>
        </h3>

        <div className="space-y-8 pl-2 md:pl-6 text-base md:text-lg">
          
          {/* Point 1 */}
          <div>
            <div className="flex gap-2 items-start mb-2">
              <span className="font-bold text-[var(--theme-accent)] shrink-0">1.</span>
              <NAccent bold className="text-xl underline decoration-[var(--theme-accent)]/30 underline-offset-4">ऊष्मा (Ushma - Digestive Heat / Agni)</NAccent>
            </div>
            <div className="pl-6 space-y-2 opacity-90 font-medium">
              <p><NText bold>सरल अर्थ:</NText> इसका अर्थ है शरीर की 'जठराग्नि' या पाचक पित्त (Digestive Fire)।</p>
              <p><NText bold>कार्य (Action):</NText> <NAccent bold>"ऊष्मा पचति"</NAccent> (ऊष्मा भोजन को पचाती है)। यह इन सभी 6 भावों में सबसे मुख्य है, क्योंकि बिना गर्मी या अग्नि के खाना नहीं पच सकता।</p>
            </div>
          </div>

          {/* Point 2 */}
          <div>
            <div className="flex gap-2 items-start mb-2">
              <span className="font-bold text-[var(--theme-accent)] shrink-0">2.</span>
              <NAccent bold className="text-xl underline decoration-[var(--theme-accent)]/30 underline-offset-4">वायु (Vayu - Biological Air / Motility)</NAccent>
            </div>
            <div className="pl-6 space-y-2 opacity-90 font-medium">
              <p><NText bold>सरल अर्थ:</NText> यह शरीर की गतिशीलता (मुख्य रूप से 'समान वायु') है।</p>
              <p><NText bold>कार्य (Action):</NText> <NAccent bold>"वायुरपकर्षति"</NAccent> (वायु भोजन को अग्नि के पास खींच कर लाती है)। खाने को पेट में सही जगह पहुँचाना, अग्नि को भड़काना (हवा देना), और खाना पचने के बाद रस (Nutrients) और मल (Waste) को अलग-अलग करना वायु का काम है।</p>
            </div>
          </div>

          {/* Point 3 */}
          <div>
            <div className="flex gap-2 items-start mb-2">
              <span className="font-bold text-[var(--theme-accent)] shrink-0">3.</span>
              <NAccent bold className="text-xl underline decoration-[var(--theme-accent)]/30 underline-offset-4">क्लेद (Kleda - Moisture / Fluidity)</NAccent>
            </div>
            <div className="pl-6 space-y-2 opacity-90 font-medium">
              <p><NText bold>सरल अर्थ:</NText> इसका अर्थ है शरीर की नमी, तरल पदार्थ या गीलापन (जैसे लार और पेट का क्लेदक कफ)।</p>
              <p><NText bold>कार्य (Action):</NText> <NAccent bold>"क्लेदः शैथिल्यमापादयति"</NAccent> (क्लेद भोजन को ढीला करता है)। यह खाए हुए सूखे और कठोर भोजन को गीला करके तोड़ता है, ताकि वह आसानी से पच सके。</p>
            </div>
          </div>

          {/* Point 4 */}
          <div>
            <div className="flex gap-2 items-start mb-2">
              <span className="font-bold text-[var(--theme-accent)] shrink-0">4.</span>
              <NAccent bold className="text-xl underline decoration-[var(--theme-accent)]/30 underline-offset-4">स्नेह (Sneha - Unctuousness / Fats)</NAccent>
            </div>
            <div className="pl-6 space-y-2 opacity-90 font-medium">
              <p><NText bold>सरल अर्थ:</NText> इसका अर्थ है चिकनाई (जो हम घी, तेल आदि के रूप में खाते हैं)।</p>
              <p><NText bold>कार्य (Action):</NText> <NAccent bold>"स्नेहो मार्दवं जनयति"</NAccent> (स्नेह भोजन में कोमलता लाता है)। यह भोजन को मुलायम बनाता है, जिससे खाना आंतों में चिपकता नहीं है और आसानी से आगे खिसकता रहता है।</p>
            </div>
          </div>

          {/* Point 5 */}
          <div>
            <div className="flex gap-2 items-start mb-2">
              <span className="font-bold text-[var(--theme-accent)] shrink-0">5.</span>
              <NAccent bold className="text-xl underline decoration-[var(--theme-accent)]/30 underline-offset-4">काल (Kala - Time)</NAccent>
            </div>
            <div className="pl-6 space-y-2 opacity-90 font-medium">
              <p><NText bold>सरल अर्थ:</NText> इसका अर्थ है 'समय' (Time)।</p>
              <p><NText bold>कार्य (Action):</NText> <NAccent bold>"कालः पर्याप्तिं अभिनिर्वर्तयति"</NAccent> (काल पाचन चक्र को पूरा करता है)। कोई भी भोजन तुरंत नहीं पचता। उसे पूरी तरह पचने और धातुओं में बदलने के लिए एक निश्चित समय (काल) की आवश्यकता होती है।</p>
            </div>
          </div>

          {/* Point 6 */}
          <div>
            <div className="flex gap-2 items-start mb-2">
              <span className="font-bold text-[var(--theme-accent)] shrink-0">6.</span>
              <NAccent bold className="text-xl underline decoration-[var(--theme-accent)]/30 underline-offset-4">समयोग (Samayoga - Proper Combination)</NAccent>
            </div>
            <div className="pl-6 space-y-2 opacity-90 font-medium">
              <p><NText bold>सरल अर्थ:</NText> इसका अर्थ है उचित तालमेल या सही नियम।</p>
              <p><NText bold>कार्य (Action):</NText> <NAccent bold>"समयोगस्त्वेषां परिणामधातुसाम्यकरः सम्पद्यते"</NAccent>। ऊपर बताए गए पाँचों भावों (ऊष्मा, वायु, क्लेद, स्नेह, काल) का एक-दूसरे के साथ सही तालमेल होना, और 'अष्ट आहार विधि' (भोजन करने के नियम, सही मात्रा आदि) का पालन करना ही समयोग है। यही संतुलित अवस्था भोजन को शरीर के लिए फायदेमंद (धातु-साम्यकर) बनाती है।</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================== */}
      {/* SUMMARY SECTION                              */}
      {/* ========================================== */}
      <div className="mt-14 mb-8">
        <div className="border-l-4 border-[var(--theme-accent)] pl-4 py-1">
          <NText bold className="text-lg md:text-xl text-[var(--theme-text)] block mb-2 uppercase tracking-widest opacity-80">
            संक्षेप में सारांश (Summary)
          </NText>
          <p className="text-base md:text-lg font-medium opacity-90 leading-relaxed">
            भोजन को <NText bold>ऊष्मा</NText> पचाती है, <NText bold>वायु</NText> उसे खिसकाती और बांटती है, <NText bold>क्लेद</NText> उसे गीला करता है, <NText bold>स्नेह</NText> उसे मुलायम बनाता है, <NText bold>काल</NText> उसे पचने का समय देता है, और <NText bold>समयोग</NText> इन सबको संतुलन में रखकर शरीर को स्वस्थ बनाता है।
          </p>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
