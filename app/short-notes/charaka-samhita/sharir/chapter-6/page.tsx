"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas } from "@/components/HandwrittenCanvas";

export default function CharakaSharirChapter6() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        STRICT 32px NOTEBOOK GRID (Text will sit exactly on lines)
        =========================================================
      */}
      <div
        className="w-full min-h-screen relative overflow-hidden text-[var(--theme-text)]"
        style={{
          // Red Margin Line at 56px + Horizontal Ruled Lines every 32px
          backgroundImage: `
            linear-gradient(90deg, transparent 56px, rgba(239, 68, 68, 0.45) 56px, rgba(239, 68, 68, 0.45) 58px, transparent 58px),
            repeating-linear-gradient(transparent, transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundAttachment: "local",
          // Pushes the background down slightly so text sits perfectly ON the line
          backgroundPosition: "0 6px",
        }}
      >
        {/* All text inside uses leading-[32px] and mb-[32px] to maintain strict math */}
        <div className="pl-[72px] sm:pl-[84px] pr-4 sm:pr-8 py-[32px] w-full font-sans md:font-kalam">
          
          {/* Top Navigation */}
          <div className="mb-[32px] h-[32px] flex items-center">
            <Link 
              href="/short-notes/charaka-samhita/sharir" 
              className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base leading-[32px]"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Sharira Hub
            </Link>
          </div>

          {/* Main Chapter Title (Custom Grid-Aligned to prevent overlap) */}
          <div className="relative w-full text-center min-h-[64px] mb-[32px] flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold inline-block relative mx-auto leading-[32px] px-2">
              अध्याय 6: शरीरविचय शारीर
              <div className="absolute -bottom-1 left-0 w-full h-[2px] transform -rotate-1 bg-[var(--theme-border)] opacity-80"></div>
              <div className="absolute -bottom-2 left-2 w-[95%] h-[1px] transform rotate-1 bg-[var(--theme-border)] opacity-80"></div>
            </h1>
            {/* Badge is now properly anchored to the right side of the screen, not the text */}
            <div 
              className="absolute top-0 right-0 md:right-4 border-2 px-3 py-1 text-xs md:text-sm font-bold shadow-sm hidden sm:block border-[var(--theme-accent)] bg-transparent leading-[24px]"
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
            >
              Charaka<br/><span className="text-[var(--theme-accent)]">Sharira</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center h-[32px] mb-[32px]">
            <span className="inline-block px-3 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-sm md:text-base tracking-widest uppercase transform -rotate-1 leading-[30px]">
              आहार परिणामकर भाव (6 Factors for Digestion)
            </span>
          </div>

          {/* ========================================== */}
          {/* Q&A STYLE INTRODUCTION                       */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr] mb-[32px]">
              <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">Q.</span>
              <span className="font-bold text-lg md:text-xl leading-[32px] underline decoration-[var(--theme-border)]/40 underline-offset-4">
                'आहार परिणामकर भाव' किस अध्याय में है और यह क्या हैं?
              </span>
            </div>
            
            <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
              <span className="font-bold opacity-70 text-lg md:text-xl leading-[32px]">Ans.</span>
              <div className="text-base md:text-lg opacity-90 font-medium">
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

          {/* Divider Line (Exactly 32px height to maintain grid) */}
          <div className="w-full h-[32px] mb-[32px] relative flex items-center justify-center">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30"></div>
          </div>

          {/* ========================================== */}
          {/* THE 6 FACTORS                                */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-xl md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              षट् आहार परिणामकर भाव
            </h3>

            <div className="text-base md:text-lg">
              
              {/* Point 1 */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">1.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">ऊष्मा (Ushma - Digestive Heat / Agni)</span>
                </div>
                <div className="pl-[32px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है शरीर की 'जठराग्नि' या पाचक पित्त (Digestive Fire)।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"ऊष्मा पचति"</span> (ऊष्मा भोजन को पचाती है)। यह इन सभी 6 भावों में सबसे मुख्य है, क्योंकि बिना गर्मी या अग्नि के खाना नहीं पच सकता।</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">2.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">वायु (Vayu - Biological Air / Motility)</span>
                </div>
                <div className="pl-[32px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> यह शरीर की गतिशीलता (मुख्य रूप से 'समान वायु') है।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"वायुरपकर्षति"</span> (वायु भोजन को अग्नि के पास खींच कर लाती है)। खाने को पेट में सही जगह पहुँचाना, अग्नि को भड़काना (हवा देना), और खाना पचने के बाद रस (Nutrients) और मल (Waste) को अलग-अलग करना वायु का काम है।</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">3.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">क्लेद (Kleda - Moisture / Fluidity)</span>
                </div>
                <div className="pl-[32px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है शरीर की नमी, तरल पदार्थ या गीलापन (जैसे लार और पेट का क्लेदक कफ)।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"क्लेदः शैथिल्यमापादयति"</span> (क्लेद भोजन को ढीला करता है)। यह खाए हुए सूखे और कठोर भोजन को गीला करके तोड़ता है, ताकि वह आसानी से पच सके।</p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">4.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">स्नेह (Sneha - Unctuousness / Fats)</span>
                </div>
                <div className="pl-[32px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है चिकनाई (जो हम घी, तेल आदि के रूप में खाते हैं)।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"स्नेहो मार्दवं जनयति"</span> (स्नेह भोजन में कोमलता लाता है)। यह भोजन को मुलायम बनाता है, जिससे खाना आंतों में चिपकता नहीं है और आसानी से आगे खिसकता रहता है।</p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">5.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">काल (Kala - Time)</span>
                </div>
                <div className="pl-[32px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है 'समय' (Time)।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"कालः पर्याप्तिं अभिनिर्वर्तयति"</span> (काल पाचन चक्र को पूरा करता है)। कोई भी भोजन तुरंत नहीं पचता। उसे पूरी तरह पचने और धातुओं में बदलने के लिए एक निश्चित समय (काल) की आवश्यकता होती है।</p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">6.</span>
                  <span className="font-bold text-[var(--theme-accent)] text-lg md:text-xl leading-[32px]">समयोग (Samayoga - Proper Combination)</span>
                </div>
                <div className="pl-[32px] md:pl-[40px] opacity-90 font-medium">
                  <p className="leading-[32px] m-0"><span className="font-bold">सरल अर्थ:</span> इसका अर्थ है उचित तालमेल या सही नियम।</p>
                  <p className="leading-[32px] m-0"><span className="font-bold">कार्य (Action):</span> <span className="text-[var(--theme-accent)] font-bold">"समयोगस्त्वेषां परिणामधातुसाम्यकरः सम्पद्यते"</span>। ऊपर बताए गए पाँचों भावों (ऊष्मा, वायु, क्लेद, स्नेह, काल) का एक-दूसरे के साथ सही तालमेल होना, और 'अष्ट आहार विधि' का पालन करना ही समयोग है। यही संतुलित अवस्था भोजन को शरीर के लिए फायदेमंद (धातु-साम्यकर) बनाती है।</p>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================== */}
          {/* SUMMARY SECTION                              */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <span className="font-bold text-lg md:text-xl text-[var(--theme-accent)] block uppercase tracking-widest opacity-80 leading-[32px] mb-[32px]">
              संक्षेप में सारांश (Summary)
            </span>
            <p className="text-base md:text-lg font-medium opacity-90 leading-[32px] m-0">
              भोजन को <span className="font-bold">ऊष्मा</span> पचाती है, <span className="font-bold">वायु</span> उसे खिसकाती और बांटती है, <span className="font-bold">क्लेद</span> उसे गीला करता है, <span className="font-bold">स्नेह</span> उसे मुलायम बनाता है, <span className="font-bold">काल</span> उसे पचने का समय देता है, और <span className="font-bold">समयोग</span> इन सबको संतुलन में रखकर शरीर को स्वस्थ बनाता है।
            </p>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
