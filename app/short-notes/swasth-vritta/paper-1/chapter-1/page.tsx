"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function SwasthVrittaChapter1() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        NOTEBOOK PAPER WRAPPER (Strict 32px Ruled Grid + 56px Margin)
        =========================================================
      */}
      <div
        className="w-full min-h-screen relative overflow-hidden"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          backgroundImage: `
            linear-gradient(90deg, transparent 54px, rgba(239, 68, 68, 0.5) 54px, rgba(239, 68, 68, 0.5) 56px, transparent 56px, transparent 58px, rgba(239, 68, 68, 0.25) 58px, rgba(239, 68, 68, 0.25) 59px, transparent 59px),
            repeating-linear-gradient(transparent, transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundAttachment: "local",
          backgroundPosition: "0 0",
        }}
      >
        {/* 
          CONTENT CONTAINER 
          pl-[72px] aligns all content neatly to the right of the double red margin line.
        */}
        <div className="pl-[72px] sm:pl-[80px] pr-4 sm:pr-8 py-[32px] w-full relative text-[var(--theme-text)]">
          
          {/* Pinned Subject Badge */}
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2.5 py-0.5 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-[var(--theme-bg)]/90 text-[var(--theme-text)] z-10 leading-tight"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Swasth Vritta<br/><NAccent>Paper 1 • Ch 1</NAccent>
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

          {/* Notebook Top Title Header (Double Underlined like a real notebook header) */}
          <div className="mb-[32px] pb-[6px] border-b-[3px] border-double border-red-500/50 text-center pr-16 sm:pr-0">
            <HandwrittenTitle>
              Chapter 1: Swastha & Swasthya (स्वस्थ एवं स्वास्थ्य)
            </HandwrittenTitle>
          </div>

          {/* ========================================================= */}
          {/* PART 1 BANNER: AYURVEDIC CONCEPTS OF HEALTH               */}
          {/* ========================================================= */}
          <div className="mb-[32px] h-[32px] flex items-center">
            <span className="inline-block px-3 border-2 border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-wider uppercase bg-[var(--theme-bg)]/90 shadow-sm">
              Part 1: Ayurvedic Concepts of Health
            </span>
          </div>

          {/* ========================================================= */}
          {/* 1. DEFINITION OF SWASTHAVRITTA & OBJECTIVE                */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            {/* Number in Left Red Margin */}
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              1.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              Definition of Swasthavritta & its Objective (स्वस्थवृत्त की परिभाषा और उद्देश्य)
            </h3>

            <div className="text-sm md:text-base opacity-95 font-medium">
              <p className="leading-[32px] m-0">
                <NText bold>Meaning of the Word:</NText> The term <NAccent bold>Swasthavritta</NAccent> is made of two words:
              </p>

              {/* Hand-Drawn Flowchart Box for Word Derivation */}
              <div className="my-[16px] grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-[var(--theme-text)]/60 p-3 bg-[var(--theme-bg)]/40">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                    (1) Swastha (स्वस्थ) = Swa (Own/Self) + Stha (Established)
                  </p>
                  <p className="leading-[28px] m-0 text-xs md:text-sm">
                    → Literally, a person who is comfortably established in their own natural, healthy state of body and mind.
                  </p>
                </div>
                <div className="border border-[var(--theme-text)]/60 p-3 bg-[var(--theme-bg)]/40">
                  <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                    (2) Vritta (वृत्त) = Regimen / Routine / Lifestyle
                  </p>
                  <p className="leading-[28px] m-0 text-xs md:text-sm">
                    → Daily actions, conduct, diet, and lifestyle habits followed by an individual.
                  </p>
                </div>
              </div>

              <p className="leading-[32px] m-0">
                <NText bold>Simple Definition:</NText> Swasthavritta refers to the daily actions, diet, and lifestyle regimens observed to maintain the health of a healthy individual and prevent diseases. (स्वस्थ व्यक्ति के स्वास्थ्य को बनाए रखने और बीमारियों को आने से रोकने के लिए जो दिनचर्या, खान-पान और नियम अपनाए जाते हैं, उन्हें &apos;स्वस्थवृत्त&apos; कहते हैं)।
              </p>

              {/* Objective Box */}
              <div className="mt-[16px] border-2 border-[var(--theme-accent)]/70 p-3 bg-[var(--theme-bg)]/50">
                <p className="leading-[32px] m-0 font-bold">
                  Objective (उद्देश्य) — Primary Motto of Ayurveda:
                </p>
                <p className="leading-[32px] m-0 text-center font-bold text-base md:text-lg text-[var(--theme-accent)]">
                  &ldquo;स्वस्थस्य स्वास्थ्य रक्षणम्, आतुरस्य विकार प्रशमनं च।।&rdquo;
                </p>
                <p className="leading-[32px] m-0">
                  <NAccent bold>(1) Primary Objective (Swasthasya Swasthya Rakshanam):</NAccent> To protect, sustain, and promote the health of a healthy person. (स्वस्थ व्यक्ति के स्वास्थ्य की रक्षा करना)।
                </p>
                <p className="leading-[32px] m-0">
                  <NAccent bold>(2) Secondary Objective (Aturasya Vikara Prashamanam):</NAccent> To cure the diseases of a sick person. (रोगी के रोग को ठीक करना)।
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. SWASTHA, AROGYA & DHATUSAMYA LAKSHANAS                 */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              2.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              Swastha Lakshanas, Arogya Lakshanas & Dhatusamya Lakshanas
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              These three classical terms describe the signs of a completely healthy person from slightly different angles:
            </p>

            {/* A. Swastha Lakshanas */}
            <div className="mt-[16px] border border-[var(--theme-text)]/60 p-3 bg-[var(--theme-bg)]/30">
              <p className="leading-[32px] m-0 font-bold text-base md:text-lg text-[var(--theme-accent)] underline">
                A. Swastha Lakshanas (स्वस्थ के लक्षण — Acharya Sushruta):
              </p>
              <p className="leading-[32px] m-0 text-center font-bold text-sm md:text-lg my-1 text-[var(--theme-accent)]">
                &ldquo;समदोषः समाग्निश्च समधातुमलक्रियः। प्रसन्नात्मेन्द्रियमनः स्वस्थ इत्यभिधीयते।।&rdquo;
              </p>
              <p className="leading-[32px] m-0 text-sm md:text-base">
                <NText bold>Simple Explanation:</NText> A person is called <NAccent bold>Swastha</NAccent> only when two conditions are met:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-sm md:text-base">
                <div className="border border-dashed border-[var(--theme-text)]/50 p-2.5">
                  <NAccent bold>(1) Physical Balance (Sama Avastha):</NAccent>
                  <p className="leading-[28px] m-0">
                    All three <NText bold>Doshas</NText> (Vata, Pitta, Kapha), <NText bold>Agni</NText> (digestive fire), <NText bold>Dhatus</NText> (7 body tissues), and <NText bold>Mala Kriya</NText> (excretion of urine, stool, sweat) are in complete balance (<NText bold>Sama</NText>).
                  </p>
                </div>
                <div className="border border-dashed border-[var(--theme-text)]/50 p-2.5">
                  <NAccent bold>(2) Mental & Spiritual Well-being (Prasanna):</NAccent>
                  <p className="leading-[28px] m-0">
                    Their <NText bold>Atma</NText> (Soul), <NText bold>Indriya</NText> (Sense organs), and <NText bold>Mana</NText> (Mind) are <NText bold>Prasanna</NText> (happy, calm, and pure).
                  </p>
                </div>
              </div>
            </div>

            {/* B & C Side-by-Side Comparison Table (Like API Reference Notes) */}
            <div className="mt-[16px] overflow-x-auto">
              <table className="w-full border-collapse border border-[var(--theme-text)]/70 text-xs md:text-base">
                <thead>
                  <tr className="bg-[var(--theme-accent)]/15 border-b border-[var(--theme-text)]/70">
                    <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)] w-1/2">
                      B. Arogya Lakshanas (आरोग्य के लक्षण)<br/>
                      <span className="text-xs font-normal text-[var(--theme-text)]">According to Kashyapa Samhita (Absence of disease identified by daily functions / दैनिक कार्यों से स्वास्थ्य की पहचान)</span>
                    </th>
                    <th className="p-2 text-left font-bold text-[var(--theme-accent)] w-1/2">
                      C. Dhatusamya Lakshanas (धातुसाम्य के लक्षण)<br/>
                      <span className="text-xs font-normal text-[var(--theme-text)]">According to Acharya Charaka (Equilibrium of body tissues when health is restored / धातु बैलेंस होने के लक्षण)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top leading-[28px]">
                  <tr className="border-b border-[var(--theme-text)]/30">
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(1) Annabhilasha:</NAccent> Proper desire for food (समय पर भूख लगना).
                    </td>
                    <td className="p-2">
                      <NAccent bold>(1) Ruk Apodhanam:</NAccent> Complete relief from pain (दर्द का खत्म होना).
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/30">
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(2) Bhuktasya Paripaka:</NAccent> Easy and comfortable digestion of eaten food (खाए हुए भोजन का आसानी से पचना).
                    </td>
                    <td className="p-2">
                      <NAccent bold>(2) Swara-Varna Yoga:</NAccent> Normalizing of natural voice and skin complexion (आवाज और त्वचा के रंग का सामान्य होना).
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/30">
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(3) Srishtavin-mutra-vatata:</NAccent> Timely and easy passing of stool, urine, and flatus (मल-मूत्र का सही से निष्कासन).
                    </td>
                    <td className="p-2">
                      <NAccent bold>(3) Sharira Upachaya:</NAccent> Proper nourishment and growth of the body.
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/30">
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(4) Sharira Laghava:</NAccent> Feeling of lightness in the body (शरीर में हल्कापन महसूस होना).
                    </td>
                    <td className="p-2">
                      <NAccent bold>(4) Bala Vriddhi:</NAccent> Increase in physical and mental strength.
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/30">
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(5) Suprasannendriyatvam:</NAccent> Clarity and freshness of sense organs (इंद्रियों का प्रसन्न रहना).
                    </td>
                    <td className="p-2">
                      <NAccent bold>(5) Abhyavaharana Abhilasha & Ruchi:</NAccent> Desire and taste for food during mealtime.
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/30">
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(6) Sukha-swapna-prabodhanam:</NAccent> Sound sleep and waking up fresh (गहरी नींद आना और सुबह तरोताजा उठना).
                    </td>
                    <td className="p-2">
                      <NAccent bold>(6) Bhukta-kale Jaranam:</NAccent> Proper digestion at the right time.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      <NAccent bold>(7) Bala-varna-ayusho Labha & Saumanasyam:</NAccent> Gain of strength, good complexion, longevity, and a calm, happy mind.
                    </td>
                    <td className="p-2">
                      <NAccent bold>(7) Nidra Labha Yathakala:</NAccent> Getting sleep at the proper time without bad dreams.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. CLASSIFICATION OF SWASTHA PURUSHA & SHODHANA           */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              3.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              Classification of Swastha Purusha & Importance of Shodhana (संचित और असंचित दोष एवं शोधन का महत्व)
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              Even if a person looks healthy from the outside, Ayurveda classifies them into two types based on the internal status of their Doshas:
            </p>

            {/* Two Types Comparison Boxes */}
            <div className="my-[16px] grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (1) Asanchita Dosha Swastha Purusha (असंचित दोष स्वस्थ पुरुष)
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>Meaning:</NText> A truly healthy person whose Doshas are <NText bold>not accumulated</NText> inside the body.
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>Management:</NText> Easily stays healthy just by following daily routines (<NAccent bold>Dinacharya</NAccent>) and seasonal routines (<NAccent bold>Ritucharya</NAccent>).
                </p>
              </div>

              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-1">
                  (2) Sanchita Dosha Swastha Purusha (संचित दोष स्वस्थ पुरुष)
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>Meaning:</NText> Appears healthy right now, but due to seasonal changes or minor diet mistakes, Doshas have secretly accumulated (<NAccent bold>Sanchaya</NAccent>) inside.
                </p>
                <p className="leading-[28px] m-0">
                  • <NText bold>Risk:</NText> व्यक्ति ऊपर से स्वस्थ दिखता है, लेकिन अंदर दोष इकट्ठा हो चुके होते हैं, जो आगे चलकर बीमारी पैदा कर सकते हैं।
                </p>
              </div>
            </div>

            {/* Importance of Shodhana Flowchart Box */}
            <div className="border-2 border-[var(--theme-accent)]/70 p-3 bg-[var(--theme-bg)]/50 text-sm md:text-base">
              <p className="leading-[32px] m-0 font-bold text-[var(--theme-accent)] underline">
                Importance of Shodhana in Swastha (स्वस्थ व्यक्ति में शोधन का महत्व):
              </p>
              <p className="leading-[32px] m-0">
                (1) <NText bold>Shamana vs. Shodhana:</NText> If <NText bold>Sanchita Doshas</NText> (accumulated toxins) are only suppressed with mild medicines (<NText bold>Shamana</NText>), they might flare up again when they get a favorable season (<NAccent bold>यथाकाले प्रकुप्यन्ति</NAccent>).
              </p>
              <p className="leading-[32px] m-0">
                (2) <NText bold>Permanent Elimination:</NText> If flushed out completely using <NAccent bold>Ritu Shodhana</NAccent> (Seasonal Panchakarma), those diseases never return (<NAccent bold>न तु संशोधनः शुद्धानाम्</NAccent>):
              </p>
              
              {/* Seasonal Shodhana Mini-Triad */}
              <div className="my-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs md:text-sm font-bold">
                <div className="border border-[var(--theme-text)]/60 py-1 px-2 bg-[var(--theme-bg)]">
                  Vasant Ritu → <NAccent>Vamana</NAccent>
                </div>
                <div className="border border-[var(--theme-text)]/60 py-1 px-2 bg-[var(--theme-bg)]">
                  Sharad Ritu → <NAccent>Virechana</NAccent>
                </div>
                <div className="border border-[var(--theme-text)]/60 py-1 px-2 bg-[var(--theme-bg)]">
                  Varsha Ritu → <NAccent>Basti</NAccent>
                </div>
              </div>

              <p className="leading-[32px] m-0">
                (3) <NText bold>Benefits for a Healthy Person:</NText> Boosts <NText bold>Agni</NText> (digestion), prevents upcoming seasonal diseases, clears sense organs, delays aging (<NText bold>Jara</NText>), and increases strength & complexion.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PART 2 BANNER: MODERN / CONTEMPORARY CONCEPTS             */}
          {/* ========================================================= */}
          <div className="mb-[32px] h-[32px] flex items-center">
            <span className="inline-block px-3 border-2 border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-wider uppercase bg-[var(--theme-bg)]/90 shadow-sm">
              Part 2: Modern / Contemporary Concepts of Health
            </span>
          </div>

          {/* ========================================================= */}
          {/* 4. CONCEPT OF HEALTH & OPERATIONAL DEFINITION             */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              4.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              Concept of Health & Operational Definition of Health
            </h3>

            <div className="text-sm md:text-base opacity-95 font-medium">
              {/* WHO Definition Box */}
              <div className="my-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (1) WHO Definition of Health (1948):
                </p>
                <p className="leading-[28px] m-0 italic font-bold">
                  &ldquo;Health is a state of complete physical, mental and social well-being and not merely an absence of disease or infirmity.&rdquo;
                </p>
                <p className="leading-[28px] m-0 text-xs md:text-sm">
                  → (स्वास्थ्य केवल बीमारी या कमजोरी का न होना नहीं है, बल्कि शारीरिक, मानसिक और सामाजिक रूप से पूरी तरह स्वस्थ और खुशहाल होने की अवस्था है — Closely matches Acharya Sushruta&apos;s definition!).
                </p>
              </div>

              {/* Operational Definition Box */}
              <div className="my-[12px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)]">
                  (2) Operational Definition of Health (व्यावहारिक परिभाषा — WHO):
                </p>
                <p className="leading-[28px] m-0">
                  Because the word &ldquo;complete&rdquo; in the WHO definition is hard to measure practically, WHO developed an Operational Definition for doctors and researchers. A person is operationally healthy if:
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  • <NText bold>Condition A:</NText> There is <NAccent bold>no obvious evidence of disease</NAccent> (कोई स्पष्ट बीमारी न दिख रही हो), and the person is functioning normally within normal limits of variation for their age and sex.
                </p>
                <p className="leading-[28px] m-0 pl-2">
                  • <NText bold>Condition B:</NText> All the <NAccent bold>organs of the body are functioning adequately</NAccent> in themselves and in harmony with one another.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 5. DIMENSIONS OF HEALTH                                   */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              5.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              Dimensions of Health (स्वास्थ्य के आयाम)
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              Health is multidimensional. Your syllabus highlights three core dimensions:
            </p>

            {/* Dimensions Structured Table */}
            <div className="mt-[12px] overflow-x-auto">
              <table className="w-full border-collapse border border-[var(--theme-text)]/70 text-xs md:text-base">
                <thead>
                  <tr className="bg-[var(--theme-accent)]/15 border-b border-[var(--theme-text)]/70">
                    <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)] w-1/4">
                      Dimension
                    </th>
                    <th className="border-r border-[var(--theme-text)]/70 p-2 text-left font-bold text-[var(--theme-accent)] w-2/5">
                      Core Meaning
                    </th>
                    <th className="p-2 text-left font-bold text-[var(--theme-accent)]">
                      Key Signs / Indicators
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top leading-[28px]">
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      (1) Physical Dimension<br/>(शारीरिक आयाम)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      Perfect functioning of the body where every cell and organ works at optimum capacity.
                    </td>
                    <td className="p-2">
                      Good complexion, bright eyes, normal pulse/BP, good appetite, sound sleep, smooth bowel movements.
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--theme-text)]/40">
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      (2) Mental Dimension<br/>(मानसिक आयाम)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      Not just absence of mental illness, but a state of balance between the individual and the surrounding world.
                    </td>
                    <td className="p-2">
                      Free from internal conflicts, handles stress calmly, good self-control, accepts criticism maturely.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-[var(--theme-text)]/70 p-2 font-bold">
                      (3) Social Dimension<br/>(सामाजिक आयाम)
                    </td>
                    <td className="border-r border-[var(--theme-text)]/70 p-2">
                      Harmony and integration within society; ability to build healthy, respectful relationships.
                    </td>
                    <td className="p-2">
                      समाज और परिवार के लोगों (family, friends, neighbors, coworkers) के साथ अच्छे और मधुर संबंध बनाकर रहना।
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 6. CONCEPT OF WELL-BEING                                  */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              6.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              Concept of Well-being (खुशहाली की अवधारणा)
            </h3>

            <p className="leading-[32px] m-0 text-sm md:text-base opacity-95 font-medium">
              Well-being measures how good a person&apos;s life actually is. It has two main components:
            </p>

            <div className="my-[12px] grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
              {/* A. Objective Component */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-2">
                  A. Objective Component (बाहरी या मापने योग्य घटक)<br/>
                  <span className="text-xs font-normal text-[var(--theme-text)]">Measured by facts & numbers</span>
                </p>
                <p className="leading-[28px] m-0 mb-2">
                  <NAccent bold>(1) Standard of Living (जीवन स्तर - आकांक्षा):</NAccent> Socioeconomic scale of a person—goods, services, luxuries, education, and housing they consume or aspire to have (depends heavily on income & wealth / आय के हिसाब से सुख-सुविधाओं का उपभोग).
                </p>
                <p className="leading-[28px] m-0">
                  <NAccent bold>(2) Level of Living (जीवन का वास्तविक स्तर):</NAccent> Used by the <NText bold>United Nations</NText>, consisting of <NText bold>9 measurable components</NText> of daily life: (i) Health, (ii) Food consumption, (iii) Education, (iv) Occupation/Working conditions, (v) Housing, (vi) Social security, (vii) Clothing, (viii) Recreation, (ix) Human rights.
                </p>
              </div>

              {/* B. Subjective Component */}
              <div className="border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40">
                <p className="leading-[28px] m-0 font-bold text-[var(--theme-accent)] border-b border-[var(--theme-text)]/40 pb-1 mb-2">
                  B. Subjective Component (आंतरिक या महसूस करने वाला घटक)<br/>
                  <span className="text-xs font-normal text-[var(--theme-text)]">Measured by personal feelings</span>
                </p>
                <p className="leading-[28px] m-0">
                  <NAccent bold>(1) Quality of Life (जीवन की गुणवत्ता):</NAccent> Cannot be measured just with money. It is a person&apos;s own internal feeling of happiness and satisfaction with their life, physical health, family, environment, and personal freedom.
                </p>
                <p className="leading-[28px] m-0 mt-2 italic text-xs md:text-sm">
                  → (कोई व्यक्ति अपने जीवन और अपनी परिस्थितियों से अंदर से कितना खुश और संतुष्ट महसूस करता है, उसे Quality of Life कहते हैं)।
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 7. ONE HEALTH CONCEPT / VASUDHAIVA KUTUMBAKAM             */}
          {/* ========================================================= */}
          <div className="mb-[32px] relative">
            <span className="absolute -left-[44px] sm:-left-[52px] top-0 w-[32px] text-right font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px]">
              7.
            </span>

            <h3 className="font-bold text-base md:text-xl text-[var(--theme-accent)] leading-[32px] underline decoration-[var(--theme-text)]/40 underline-offset-4">
              &ldquo;One Health Concept&rdquo; / &ldquo;Vasudhaiva Kutumbakam&rdquo; (वसुधैव कुटुम्बकम्)
            </h3>

            <div className="text-sm md:text-base opacity-95 font-medium">
              <p className="leading-[32px] m-0">
                (1) <NAccent bold>Vasudhaiva Kutumbakam (वसुधैव कुटुम्बकम्):</NAccent> Taken from the <NText bold>Maha Upanishad</NText>, meaning <NText bold>&ldquo;The World is One Family&rdquo;</NText> (One Earth, One Family, One Future).
              </p>
              <p className="leading-[32px] m-0">
                (2) <NAccent bold>One Health Concept:</NAccent> In modern public health, &ldquo;One Health&rdquo; is a global approach recognizing that the health of humans, domestic and wild animals, plants, and the wider environment (ecosystems) are closely linked and interdependent.
              </p>

              {/* Hand-drawn Interdependence Flowchart */}
              <div className="my-[16px] border border-[var(--theme-text)]/70 p-3 bg-[var(--theme-bg)]/40 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center font-bold text-xs md:text-base mb-2">
                  <div className="border border-[var(--theme-accent)] p-2 bg-[var(--theme-bg)]">
                    Human Health<br/><span className="text-xs font-normal">(इंसान का स्वास्थ्य)</span>
                  </div>
                  <div className="border border-[var(--theme-accent)] p-2 bg-[var(--theme-bg)]">
                    Animal & Plant Health<br/><span className="text-xs font-normal">(पशु एवं पेड़-पौधे)</span>
                  </div>
                  <div className="border border-[var(--theme-accent)] p-2 bg-[var(--theme-bg)]">
                    Environment / Ecosystem<br/><span className="text-xs font-normal">(हवा, पानी, मिट्टी)</span>
                  </div>
                </div>
                <p className="leading-[28px] m-0 text-xs md:text-sm font-bold text-[var(--theme-accent)]">
                  ↕ Closely Linked & Interdependent (Vasudhaiva Kutumbakam = One Health) ↕
                </p>
              </div>

              <p className="leading-[32px] m-0">
                (3) <NText bold>Simple Explanation:</NText> इंसान का स्वास्थ्य अकेला नहीं है। अगर हमारे आस-पास के जानवर, पेड़-पौधे और पर्यावरण (हवा, पानी, मिट्टी) बीमार या प्रदूषित होंगे, तो इंसान भी कभी स्वस्थ नहीं रह सकता (जैसे कोविड-19 या बर्ड फ्लू जानवरों से इंसानों में आए)। इसलिए पूरी पृथ्वी को एक परिवार (<NAccent bold>Vasudhaiva Kutumbakam</NAccent>) मानकर इंसान, पशु और प्रकृति—तीनों के स्वास्थ्य की एक साथ रक्षा करना ही <NAccent bold>&apos;One Health Concept&apos;</NAccent> है।
              </p>
            </div>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
