"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function CharakaSharirChapter6() {
  return (
    <HandwrittenCanvas>
      <div
        className="w-full min-h-screen relative overflow-hidden text-[var(--theme-text)]"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          backgroundImage: `
            linear-gradient(90deg, transparent 56px, rgba(239, 68, 68, 0.45) 56px, rgba(239, 68, 68, 0.45) 58px, transparent 58px),
            linear-gradient(transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundSize: "100% 100%, 100% 32px",
          backgroundAttachment: "local",
          backgroundPosition: "0 0, 0 6px", 
        }}
      >
        <div className="pl-[72px] sm:pl-[84px] pr-4 sm:pr-8 py-[32px] w-full relative">
          
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-white dark:bg-black leading-[20px] md:leading-[24px]"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Charaka<br/><span className="text-[var(--theme-accent)]">Sharira</span>
          </div>

          <div className="mb-[32px] h-[32px] flex items-center">
            <Link 
              href="/short-notes/charaka-samhita/sharir" 
              className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base leading-[32px]"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Sharira Hub
            </Link>
          </div>

          <div className="relative w-full text-center min-h-[64px] mb-[32px] flex flex-col justify-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold inline-block relative mx-auto leading-[32px] px-2 m-0">
              अध्याय 6: शरीरविचय शारीर
              <div className="absolute -bottom-1 left-0 w-full h-[2px] transform -rotate-1 bg-[var(--theme-border)] opacity-80"></div>
              <div className="absolute -bottom-2 left-2 w-[95%] h-[1px] transform rotate-1 bg-[var(--theme-border)] opacity-80"></div>
            </h1>
          </div>

          <div className="text-center h-[32px] mb-[32px]">
            <span className="inline-block px-2 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-widest uppercase transform -rotate-1 leading-[30px] bg-white/50 dark:bg-black/50">
              आहार परिणामकर भाव (6 Factors)
            </span>
          </div>

          {/* Q&A - Exactly 1 line gap (mb-[32px]) after this block */}
          <div className="mb-[32px]">
            <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr] mb-[32px]">
              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Q.</span>
              <span className="font-bold text-base md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                'आहार परिणामकर भाव' किस अध्याय में है और यह क्या हैं?
              </span>
            </div>
            
            <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
              <span className="font-bold opacity-70 text-base md:text-xl leading-[32px]">Ans.</span>
              <div className="text-sm md:text-lg opacity-90 font-medium">
                <p className="leading-[32px] mb-[32px] m-0">
                  आचार्य चरक ने इसका वर्णन चरक संहिता के <span className="text-[var(--theme-accent)] font-bold">'शारीर स्थान', अध्याय 6 ('शरीरविचय शारीर')</span> में किया है।
                </p>
                <p className="leading-[32px] mb-[32px] m-0">
                  <span className="font-bold">आहार परिणामकर भाव:</span> 'आहार' (भोजन) का 'परिणाम' (Digestion/Transformation) जिन भावों (Factors) के कारण होता है, उन्हें आहार परिणामकर भाव कहते हैं। 
                </p>
                <p className="leading-[32px] mb-[32px] m-0 opacity-80 italic">
                  सरल शब्दों में, खाए हुए भोजन को पचाकर शरीर की धातुओं (रक्त, मांस आदि) में बदलने के लिए जिन चीज़ों की आवश्यकता होती है, वे आहार परिणामकर भाव कहलाते हैं।
                </p>
                <p className="leading-[32px] m-0">आचार्य चरक ने ऐसे 6 (षट्) भाव बताए हैं।</p>
              </div>
            </div>
          </div>

          {/* 6 Factors Section */}
          <div className="mb-[32px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] m-0 underline decoration-[var(--theme-border)]/30 underline-offset-8">
              षट् आहार परिणामकर भाव
            </h3>

            <div className="text-sm md:text-lg">
              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">1.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">ऊष्मा (Ushma - Digestive Heat)</span>
                </div>
                <div className="pl-[24px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है शरीर की 'जठराग्नि' या पाचक पित्त।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"ऊष्मा पचति"</span> (ऊष्मा भोजन को पचाती है)। यह इन सभी 6 भावों में सबसे मुख्य है, क्योंकि बिना गर्मी या अग्नि के खाना नहीं पच सकता।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">2.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">वायु (Vayu - Biological Air)</span>
                </div>
                <div className="pl-[24px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> यह शरीर की गतिशीलता (मुख्य रूप से 'समान वायु') है।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"वायुरपकर्षति"</span> (वायु भोजन को अग्नि के पास खींच कर लाती है)। खाने को पेट में सही जगह पहुँचाना, अग्नि को भड़काना, और खाना पचने के बाद रस और मल को अलग करना वायु का काम है।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">3.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">क्लेद (Kleda - Moisture)</span>
                </div>
                <div className="pl-[24px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है शरीर की नमी, तरल पदार्थ या गीलापन।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"क्लेदः शैथिल्यमापादयति"</span> (क्लेद भोजन को ढीला करता है)। यह खाए हुए सूखे और कठोर भोजन को गीला करके तोड़ता है, ताकि वह आसानी से पच सके।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">4.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">स्नेह (Sneha - Unctuousness)</span>
                </div>
                <div className="pl-[24px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है चिकनाई (जो हम घी, तेल आदि के रूप में खाते हैं)।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"स्नेहो मार्दवं जनयति"</span> (स्नेह भोजन में कोमलता लाता है)। यह भोजन को मुलायम बनाता है, जिससे खाना आंतों में चिपकता नहीं है और आसानी से आगे खिसकता रहता है।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">5.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">काल (Kala - Time)</span>
                </div>
                <div className="pl-[24px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है 'समय' (Time)।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"कालः पर्याप्तिं अभिनिर्वर्तयति"</span> (काल पाचन चक्र को पूरा करता है)। कोई भी भोजन तुरंत नहीं पचता। उसे पूरी तरह पचने के लिए एक निश्चित समय की आवश्यकता होती है।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">6.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">समयोग (Samayoga - Balance)</span>
                </div>
                <div className="pl-[24px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है उचित तालमेल या सही नियम।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"समयोगस्त्वेषां परिणामधातुसाम्यकरः सम्पद्यते"</span>। ऊपर बताए गए पाँचों भावों का एक-दूसरे के साथ सही तालमेल होना ही समयोग है। यही संतुलित अवस्था भोजन को शरीर के लिए फायदेमंद बनाती है।</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mb-[32px]">
            <span className="font-bold text-base md:text-xl text-[var(--theme-accent)] block uppercase tracking-widest opacity-80 leading-[32px] mb-[32px]">
              संक्षेप में सारांश (Summary)
            </span>
            <p className="text-sm md:text-lg font-medium opacity-90 leading-[32px] m-0">
              भोजन को <span className="font-bold">ऊष्मा</span> पचाती है, <span className="font-bold">वायु</span> उसे खिसकाती और बांटती है, <span className="font-bold">क्लेद</span> उसे गीला करता है, <span className="font-bold">स्नेह</span> उसे मुलायम बनाता है, <span className="font-bold">काल</span> उसे पचने का समय देता है, और <span className="font-bold">समयोग</span> इन सबको संतुलन में रखकर शरीर को स्वस्थ बनाता है।
            </p>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
