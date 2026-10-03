"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter9() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 9: Sthavara Visha
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Plant Origin Poisons (उपविष एवं महाविष)
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> आयुर्वेद में उन विषों को <NText bold>&apos;स्थावर विष&apos;</NText> कहा जाता है जो एक स्थान पर स्थिर रहते हैं (जैसे— पेड़-पौधे और धातुएं)। वानस्पतिक स्थावर विषों को सुश्रुत ने उनके अधिष्ठान (Sites) के आधार पर 10 भागों (मूल, पत्र, फल, पुष्प, क्षीर आदि) में बांटा है।
        </NText>
      </div>

      {/* ========================================== */}
      {/* 1. KUCHALA / NUX VOMICA                      */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          1. कुचला / कुपीलु (Strychnos Nux-Vomica)
        </HandwrittenBox>
      </div>
      
      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * यह 5-mark और 10-mark का सबसे अधिक पूछा जाने वाला प्रश्न है। इसका Tetanus के साथ Differential Diagnosis अत्यंत महत्वपूर्ण है।
      </NText>

      {/* Kuchala: Ayurvedic Perspective */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>परिचय एवं पर्याय:</NText> कुचला को &apos;कुपीलु&apos;, &apos;विषतिन्दुक&apos; और &apos;काकपीलुक&apos; भी कहा जाता है। यह &apos;उपविष&apos; वर्ग में आता है।</li>
            <li><NText bold>विष अधिष्ठान:</NText> फल और बीज (Fruits and Seeds)।</li>
            <li><NText bold>विषाक्तता के लक्षण (Symptoms):</NText> बिना शोधन (Purification) सेवन करने पर भयंकर आक्षेप (Convulsions) आते हैं। शरीर धनुष के समान टेढ़ा हो जाता है <span className="italic opacity-80">(आयामो धनुराकारः)</span>। रोगी की आंखें बाहर की ओर निकल आती हैं और श्वास रुकने से मृत्यु हो जाती है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">कुचला शोधन (Purification):</NAccent>
            <NText>कुचला के बीजों को 7 दिनों तक कांजी या गोमूत्र में भिगोकर रखा जाता है, फिर छिलका निकालकर गाय के दूध में स्वेदन (Boiling) किया जाता है। अंत में गोघृत में भून लिया जाता है。</NText>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">चिकित्सा (Management):</NAccent>
            <NText>दौरे शांत करने के लिए रोगी को गाय का घी (Go-ghrita) पिलाना चाहिए और पूरे शरीर पर गर्म तेल की मालिश (Abhyanga) और स्वेदन करना चाहिए。</NText>
          </div>
        </div>
      </div>

      {/* Kuchala: Modern Perspective */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Toxicological Perspective</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Chemical Constituents:</NText> Highly toxic alkaloids, primarily <NAccent bold>Strychnine</NAccent> and Brucine.</li>
            <li><NText bold>Fatal Dose &amp; Period:</NText> 1 to 2 crushed seeds, or 15 to 30 mg of Strychnine. Fatal period is 1 to 2 hours.</li>
            <li><NText bold>Mechanism of Action:</NText> Powerful Spinal Cord Stimulant. Blocks the inhibitory neurotransmitter glycine, causing severe muscle contractions.</li>
          </ul>

          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-2 text-lg">Clinical Features (Symptoms):</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Opisthotonos:</NText> Body spasms and arches backward like a bow, resting only on the head and heels.</li>
              <li><NText bold>Risus Sardonicus:</NText> A fixed, unnatural, rigid smile due to facial muscle spasms.</li>
              <li><NAccent bold className="italic">Note:</NAccent> The patient remains completely conscious and in severe pain during convulsions.</li>
            </ul>
          </div>

          {/* Differential Diagnosis */}
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm">
            <NAccent bold className="block mb-3 text-xl text-center">सापेक्ष निदान (Differential Diagnosis)</NAccent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <NText bold className="block mb-2 underline decoration-[var(--theme-border)]">Strychnine (Kuchala) Poisoning:</NText>
                <ul className="list-disc list-inside space-y-1">
                  <li>Convulsions start suddenly, affecting all muscles simultaneously.</li>
                  <li>Between two spasms, muscles are completely relaxed.</li>
                  <li>History of poison ingestion is present.</li>
                </ul>
              </div>
              <div>
                <NText bold className="block mb-2 underline decoration-[var(--theme-border)]">Tetanus (Lockjaw / धनुर्वात):</NText>
                <ul className="list-disc list-inside space-y-1">
                  <li>Symptoms start gradually. <NText bold>Lockjaw (Trismus)</NText> is the first symptom.</li>
                  <li>Between spasms, muscles remain slightly rigid (कड़क).</li>
                  <li>History of rusted wound/injury is present.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">Modern Management:</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Isolation:</NText> Keep in a completely dark and quiet room (noise/light triggers convulsions).</li>
              <li><NText bold>Control Convulsions:</NText> Short-acting Barbiturates (Diazepam or Phenobarbitone) IV immediately.</li>
              <li><NText bold>Caution:</NText> <NAccent bold>Emetics and Gastric Lavage are strictly contraindicated</NAccent> initially as inserting the tube triggers fatal spasms. Do it only after controlling convulsions using Activated Charcoal or KMnO4.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. DHATURA                                 */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          2. धतूरा विष (Datura fastuosa)
        </HandwrittenBox>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>पर्याय:</NText> &apos;उन्मत्तक&apos;, &apos;कनक&apos;, और &apos;शिवप्रिय&apos; (उपविष)।</li>
            <li><NText bold>विष अधिष्ठान:</NText> सम्पूर्ण पौधा, विशेषकर बीज (Seeds) और पत्र (Leaves)।</li>
            <li><NText bold>लक्षण:</NText> रोगी पागलों के समान व्यवहार करता है (उन्माद)। वाणी लड़खड़ाती है, मुंह सूख जाता है (भयंकर तृष्णा), और वह हवा में हाथ पैर मारता है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">चिकित्सा (Management):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>प्रलेप:</NText> सिर पर आंवला और मक्खन का लेप।</li>
              <li><NText bold>पान:</NText> गोदुग्ध में शर्करा मिलाकर पिलाएं। कपास मूल (Cotton root) का रस पिलाना धतूरा का उत्तम नाशक है।</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Toxicological Perspective</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Constituents:</NText> Deliriant alkaloids: Hyoscine (Scopolamine), Hyoscyamine, traces of Atropine.</li>
            <li><NText bold>Fatal Dose &amp; Period:</NText> 100 to 125 seeds. Fatal period is around 24 hours.</li>
          </ul>

          <NCard title="Clinical Features: The Classic 9 D's of Datura">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2">
              <div><NAccent bold>1. Dryness:</NAccent> Extreme dryness of mouth, throat, and skin.</div>
              <div><NAccent bold>2. Dysphagia:</NAccent> Difficulty swallowing.</div>
              <div><NAccent bold>3. Dilated Pupils:</NAccent> Widening of the pupils (loss of light reflex).</div>
              <div><NAccent bold>4. Dry Hot Skin:</NAccent> The skin becomes red, hot, and dry (Hyperthermia).</div>
              <div><NAccent bold>5. Drunken Gait:</NAccent> Staggering walk.</div>
              <div className="md:col-span-2">
                <NAccent bold>6. Delirium:</NAccent> Muttering meaningless words constantly (बुदबुदाना). <br/>
                <span className="italic opacity-80 text-sm md:text-base">* This specific symptom is frequently asked in MCQs and SAQs.</span>
              </div>
              <div><NAccent bold>7. Drowsiness:</NAccent> Severe sleepiness/coma.</div>
              <div><NAccent bold>8. Dysarthria:</NAccent> Difficulty speaking.</div>
              <div><NAccent bold>9. Death:</NAccent> Respiratory center failure.</div>
            </div>
          </NCard>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-accent)]/5">
            <NAccent bold className="block mb-2 text-lg">Modern Management &amp; Antidote:</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Specific Antidote:</NText> <NAccent bold>Physostigmine</NAccent> (1-2 mg IV). Neostigmine/Pilocarpine also used.</li>
              <li><NText bold>Gastric Lavage:</NText> Wash with KMnO4 or Tannic acid.</li>
              <li><NText bold>Symptomatic:</NText> Cold sponging/ice packs for hyperthermia.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. VATSNABHA / ACONITE                       */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          3. वत्सनाभ विष (Aconitum ferox)
        </HandwrittenBox>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>पर्याय:</NText> &apos;मीठा विष&apos; (Sweet poison)। यह <NAccent bold>महाविष</NAccent> वर्ग का सर्वप्रमुख द्रव्य है।</li>
            <li><NText bold>विष अधिष्ठान:</NText> मूल (Tuberous root)।</li>
            <li><NText bold>लक्षण:</NText> भक्षण करते ही गले/होठों में सूई चुभने जैसी पीड़ा। गर्दन टूट कर गिर जाती है (ग्रीवाभंजन), आंखों के आगे अंधेरा छा जाता है, हृदय गति रुकने से मृत्यु।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">चिकित्सा (Management):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>टंकण भस्म (Borax):</NText> यह वत्सनाभ का श्रेष्ठ प्रतिविष (Antidote) है। इसे गाय के घी के साथ चटाएं।</li>
              <li>अर्जुन की छाल का काढ़ा हृदय को बल देने के लिए पिलाएं।</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Toxicological Perspective</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Constituents:</NText> Potent cardiac/neurotoxic alkaloid <NAccent bold>Aconitine</NAccent>.</li>
            <li><NText bold>Fatal Dose &amp; Period:</NText> 1g root or 2-5mg pure Aconitine. Fatal in 1-6 hrs.</li>
            <li><NText bold>Action:</NText> Myocardium &amp; CNS. Initially stimulates, then paralyzes nerves.</li>
          </ul>

          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-2 text-lg">Clinical Features (Symptoms):</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Tingling &amp; Numbness:</NText> &quot;Pins and needles&quot; sensation starting from lips, tongue, and mouth, spreading to the whole body <span className="italic opacity-80">(Pathognomonic sign - सबसे प्रमुख लक्षण)</span>.</li>
              <li><NText bold>Cardiac Signs:</NText> Severe arrhythmias, bradycardia, severe hypotension.</li>
              <li><NText bold>Hippus:</NText> Pupils alternately dilate and contract (आंखों की पुतलियों का सिकुड़ना और फैलना).</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">Modern Management:</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Gastric Lavage:</NText> With Activated Charcoal or Tannic acid (which precipitates the alkaloids).</li>
              <li><NText bold>Caution:</NText> <NAccent bold>Vomiting (Emesis) is contraindicated</NAccent> as the effort can cause immediate cardiac arrest (heart failure) due to a weakened heart.</li>
              <li><NText bold>Cardiac Support:</NText> Atropine (1mg IV) for bradycardia, Amiodarone for arrhythmias (to stabilize the heart rate).</li>
            </ul>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
