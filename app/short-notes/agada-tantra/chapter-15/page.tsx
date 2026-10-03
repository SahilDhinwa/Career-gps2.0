"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter15() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 15: Forensic Medicine
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          व्यवहार आयुर्वेद एवं कानूनी प्रक्रियाएं (Legal Procedures)
        </span>
      </div>

      {/* ========================================== */}
      {/* PART 1: AYURVEDIC PERSPECTIVE & HISTORY      */}
      {/* ========================================== */}
      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part 1: आयुर्वेदिक परिप्रेक्ष्य एवं इतिहास
        </HandwrittenBox>
      </div>

      {/* 1. Basic Definitions */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. मूलभूत परिभाषाएं (Basic Definitions)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">व्यवहार आयुर्वेद (Forensic Medicine):</NAccent>
            <NText>चिकित्सा विज्ञान की वह शाखा जिसमें चिकित्सा ज्ञान का उपयोग न्याय प्रणाली (Justice system) और आपराधिक जांच (Criminal investigation) में किया जाता है।</NText>
          </div>
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">विधि वैद्यक (Medical Jurisprudence):</NAccent>
            <NText>कानून की वह शाखा जो एक चिकित्सक (Doctor) के कर्तव्यों, अधिकारों, नियमों और चिकित्सा व्यवसाय की नैतिकता से संबंधित है।</NText>
          </div>
        </div>
      </div>

      {/* 2. Courts in Ancient India - CRITICAL PYQ */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. प्राचीन भारत में न्यायालय (Courts in Ancient India)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="font-bold italic text-[var(--theme-accent)]">
            * PYQ Note: &quot;The total number of courts in ancient India were...&quot; (Ans: 4)
          </p>
          <p className="mb-2">स्मृति काल और कौटिल्य के अर्थशास्त्र के अनुसार मुख्य रूप से 4 प्रकार के न्यायालय होते थे:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NCard title="1. प्रतिष्ठित (Pratishtita)">
              <NText className="block mt-2">जो किसी एक ही स्थान (शहर या राजधानी) में स्थापित होते थे।</NText>
            </NCard>
            <NCard title="2. अप्रतिष्ठित (Apratishtita)">
              <NText className="block mt-2">जो न्यायालय एक स्थान पर स्थिर नहीं होते थे (Mobile courts), बल्कि गांव-गांव घूमकर न्याय करते थे।</NText>
            </NCard>
            <NCard title="3. मुद्रित (Mudrita)">
              <NText className="block mt-2">जो न्यायालय राजा द्वारा नियुक्त न्यायाधीशों (Judges) द्वारा चलाए जाते थे और जिनमें राजा की मुहर (Seal) का प्रयोग होता था।</NText>
            </NCard>
            <NCard title="4. शशित (Sasita)">
              <NText className="block mt-2">यह सर्वोच्च न्यायालय होता था, जिसमें स्वयं राजा (King) बैठकर न्याय करता था।</NText>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: MODERN LEGAL PROCEDURES            */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part 2: Modern Legal Procedures
        </HandwrittenBox>
      </div>

      {/* 1. Inquest */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Inquest (मृत्यु समीक्षा / पंचनामा)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block"><NText bold>Definition:</NText> An inquest is an official legal inquiry held to determine the exact cause of death in cases of sudden, suspicious, unnatural, or accidental deaths. (अचानक या अप्राकृतिक मौत के कारणों का पता लगाने के लिए आधिकारिक जांच)।</NText>
          
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm mt-4">
            <NAccent bold className="block mb-3 text-xl text-center">Types of Inquest in India</NAccent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <NText bold className="block mb-2 underline decoration-[var(--theme-border)] text-lg">A. Police Inquest:</NText>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  <li>Conducted by a police officer (usually Sub-Inspector).</li>
                  <li>Under <NAccent bold>Section 174 of CrPC</NAccent>.</li>
                  <li>This is the most common type of inquest in India.</li>
                </ul>
              </div>
              <div>
                <NText bold className="block mb-2 underline decoration-[var(--theme-border)] text-lg">B. Magistrate Inquest (PYQ):</NText>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  <li>Conducted by a Magistrate.</li>
                  <li>Under <NAccent bold>Section 176 of CrPC</NAccent>.</li>
                  <li>Done in specific severe cases: death in police custody, police firing, or dowry deaths (within 7 years of marriage).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hierarchy of Criminal Courts */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Hierarchy of Criminal Courts (न्यायालयों का पदानुक्रम)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="space-y-4 list-none">
            <li className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block text-lg">Supreme Court (उच्चतम न्यायालय):</NAccent>
              <NText>Apex court in New Delhi. The highest court of appeal in the country.</NText>
            </li>
            <li className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block text-lg">High Court (उच्च न्यायालय):</NAccent>
              <NText>Highest court within a state. Can pass any sentence authorized by law, including the death penalty.</NText>
            </li>
            <li className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block text-lg">Sessions Court (सत्र न्यायालय):</NAccent>
              <NText>District-level court handling severe crimes like murder. Can pass a death sentence, but it <NAccent bold>must be confirmed by the High Court</NAccent> before execution.</NText>
            </li>
            <li className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block text-lg">Magistrate Courts:</NAccent>
              <NText>Try minor to moderate offenses. (Chief Judicial Magistrate → First Class → Second Class).</NText>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Summons & Warrants */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Legal Documents: Summons &amp; Warrants</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NCard title="Subpoena or Summons (सम्मन)">
            <NText className="block mt-2">A written legal document issued by a court, compelling the attendance of a witness or a doctor to give evidence on a specific date/time. <NAccent bold>Obedience is legally mandatory.</NAccent></NText>
          </NCard>
          <NCard title="Warrant (वारंट)">
            <NText className="block mt-2">A written order issued by a judge directing a police officer to arrest a person and bring them before the court. It is issued <NAccent bold>if a person ignores a summons</NAccent>.</NText>
          </NCard>
        </div>
      </div>

      {/* 4. Evidence & Witness */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. Evidence &amp; Witness (साक्ष्य और गवाह)</HandwrittenBox>
        </div>
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <div>
            <NText bold className="block mb-2 text-lg underline decoration-[var(--theme-border)]">Evidence (साक्ष्य/सबूत):</NText>
            <p className="mb-2">Any statement, object, or document presented in court to prove or disprove a fact.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><NText bold>Oral Evidence:</NText> Statements given verbally in court.</li>
              <li><NText bold>Documentary Evidence:</NText> Medical certificates, postmortem reports, etc.</li>
            </ul>
          </div>

          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-3 text-xl">Types of Witnesses (गवाह के प्रकार):</NAccent>
            <div className="space-y-4">
              <div>
                <NText bold className="block text-lg">Common Witness (सामान्य गवाह):</NText>
                <NText>A person who testifies about facts they observed directly with their own senses (e.g., an eyewitness to a murder).</NText>
              </div>
              <div>
                <NText bold className="block text-lg">Expert Witness (विशेषज्ञ गवाह) - VERY IMPORTANT:</NText>
                <NText>A person with specialized knowledge or skill (like a Doctor). Under <NAccent bold>Section 45 of the Indian Evidence Act</NAccent>, a doctor gives an expert opinion based on their medical examination.</NText>
              </div>
            </div>
          </div>

        </div>
      </div>

    </HandwrittenCanvas>
  );
}
