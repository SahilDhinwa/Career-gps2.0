"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function SwasthVrittaNaturopathyPart1() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        NOTEBOOK PAPER WRAPPER (Restored your favorite alignment)
        =========================================================
      */}
      <div
        className="w-full min-h-screen relative overflow-hidden"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif", // FIXED: Handwriting is strictly enforced!
          // Red Margin Line at 56px + Horizontal Ruled Lines every 32px
          backgroundImage: `
            linear-gradient(90deg, transparent 56px, rgba(239, 68, 68, 0.45) 56px, rgba(239, 68, 68, 0.45) 58px, transparent 58px),
            repeating-linear-gradient(transparent, transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundAttachment: "local",
          backgroundPosition: "0 0", // FIXED: Restored the exact line placement you loved!
        }}
      >
        {/* 
          CONTENT START 
          Padding left (72px) keeps the text safely to the right of the red margin.
        */}
        <div className="pl-[72px] sm:pl-[84px] pr-4 sm:pr-8 py-[32px] w-full relative">
          
          {/* FIXED BADGE: Pinned safely to the top right of the page padding so it NEVER overlaps the text! */}
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-transparent text-[var(--theme-text)] z-10"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Swasth<br/><NAccent>Vritta</NAccent>
          </div>

          {/* Top Navigation */}
          <div className="mb-[32px] flex items-center h-[32px]">
            <Link 
              href="/short-notes/swasth-vritta" 
              className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-xs md:text-base font-sans"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Swasth Vritta Hub
            </Link>
          </div>

          {/* Main Chapter Title */}
          <div className="mb-[32px] flex justify-center">
            {/* Removed the 'badge' prop from here so it doesn't cause overlap */}
            <HandwrittenTitle>
              प्राकृतिक चिकित्सा
            </HandwrittenTitle>
          </div>

          <div className="text-center mb-[32px] h-[32px] flex items-center justify-center">
            <span className="inline-block px-3 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-widest uppercase transform -rotate-1 bg-[var(--theme-bg)]/80">
              Part 1: Foundation of Nature Cure
            </span>
          </div>

          {/* ========================================== */}
          {/* 1. INTRODUCTION TO NATUROPATHY               */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              1. Introduction to Naturopathy (प्राकृतिक चिकित्सा)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium pl-2">
              <p className="leading-[32px] mb-[32px] m-0">
                <NText bold>Definition:</NText> Naturopathy is a system of medicine that uses the healing power of nature to cure diseases, without the use of artificial drugs or medicines.
              </p>
              <p className="leading-[32px] m-0">
                <NText bold>Simple Explanation (Hindi/English):</NText> Naturopathy का सीधा सा मतलब है कि "प्रकृति ही सबसे बड़ी चिकित्सक (healer) है।" इसमें दवाइयों का इस्तेमाल नहीं होता। इसके बजाय, हम प्रकृति के नियमों का पालन करते हैं ताकि हमारा शरीर खुद को नेचुरली हील (heal) कर सके।
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* 2. BASIC PRINCIPLES OF NATUROPATHY           */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              2. Basic Principles of Naturopathy (प्राकृतिक चिकित्सा के मूल सिद्धांत)
            </h3>
            
            <p className="leading-[32px] mb-[32px] m-0 text-sm md:text-lg opacity-90 font-medium pl-2">
              Naturopathy is based on a few very simple rules:
            </p>

            <div className="text-sm md:text-lg pl-2">
              
              {/* Point 1 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">•</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">The body heals itself:</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">All healing comes from within the body (Vital Force). शरीर में खुद को ठीक करने की एक प्राकृतिक ताकत होती है।</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">•</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Disease is a purification process:</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Acute diseases (like fever or cold) are not our enemies. They are actually the body's attempt to throw out waste and toxins. (बीमारी शरीर की गंदगी या toxins को बाहर निकालने का एक तरीका मात्र है)।</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">•</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">One cause, one cure:</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">The root cause of most diseases is the accumulation of toxins (गंदगी का इकट्ठा होना) in the body, and the only cure is eliminating those toxins.</p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">•</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Treat the whole body, not just the disease:</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Naturopathy treats the patient as a whole (physical, mental, and spiritual), rather than just suppressing the symptoms.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Divider Line */}
          <div className="h-[32px] flex items-center justify-center mb-[32px]">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mx-auto"></div>
          </div>

          {/* ========================================== */}
          {/* 3. CONCEPT OF PANCHABHUTAOPASANA             */}
          {/* ========================================== */}
          <div className="mb-[64px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] underline decoration-[var(--theme-border)]/30 underline-offset-8">
              3. Concept of Panchabhutaopasana (पंचमहाभूत उपासना)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium pl-2 mb-[32px]">
              <p className="leading-[32px] mb-[32px] m-0">
                <NText bold>Definition:</NText> "Pancha" means five, "Bhuta" means elements, and "Upasana" means worship or therapeutic application. It is the treatment of the body using the five basic elements of nature.
              </p>
              <p className="leading-[32px] mb-[32px] m-0">
                <NText bold>Simple Explanation:</NText> According to Ayurveda and Naturopathy, the human body and the universe are made up of five basic elements. जब इन 5 तत्वों में कोई असंतुलन (imbalance) आता है, तो हम बीमार पड़ते हैं। इन तत्वों का उपयोग करके शरीर को वापस बैलेंस में लाना ही Panchabhutaopasana है।
              </p>
              <p className="leading-[32px] m-0">
                These five elements and their therapies are:
              </p>
            </div>

            <div className="text-sm md:text-lg pl-2">
              
              {/* Element 1 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">1.</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Akasha (Space/Ether)</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Represented by emptiness. <NText bold>Therapy:</NText> Fasting (उपवास) - keeping the stomach empty.</p>
                </div>
              </div>

              {/* Element 2 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">2.</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Vayu (Air)</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Represented by breathing and oxygen. <NText bold>Therapy:</NText> Pranayama and deep breathing exercises.</p>
                </div>
              </div>

              {/* Element 3 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">3.</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Agni (Fire)</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Represented by heat and light. <NText bold>Therapy:</NText> Sunbath (सूर्य स्नान).</p>
                </div>
              </div>

              {/* Element 4 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">4.</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Jala (Water)</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Represented by fluids. <NText bold>Therapy:</NText> Hydrotherapy (जल चिकित्सा).</p>
                </div>
              </div>

              {/* Element 5 */}
              <div className="mb-[32px]">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-[var(--theme-accent)] shrink-0 leading-[32px] w-4 md:w-auto">5.</span>
                  <NAccent bold className="text-base md:text-xl leading-[32px]">Prithvi (Earth)</NAccent>
                </div>
                <div className="pl-6 md:pl-6 opacity-90 font-medium">
                  <p className="leading-[32px] m-0">Represented by solid matter. <NText bold>Therapy:</NText> Mud therapy (मिट्टी चिकित्सा).</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
