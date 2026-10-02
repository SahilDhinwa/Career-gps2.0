"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter5() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 5: विष उपद्रव एवं आधुनिक विष बाधाएं
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Visha Upadrava & Modern Toxicological Hazards
        </span>
      </div>

      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          इस अध्याय को मुख्य रूप से दो भागों में बांटा गया है: पहला भाग विशुद्ध आयुर्वेदिक है (विष उपद्रव), और दूसरा भाग आधुनिक विष विज्ञान (Modern Toxicology) से संबंधित है (Drug-induced toxicity, Occupational hazards, Allergy).
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART 1: VISHA UPADRAVA                       */}
      {/* ========================================== */}
      
      <div className="flex items-center gap-3 text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 1: विष उपद्रव (Visha Upadrava)
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. विष उपद्रव की परिभाषा</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">उपद्रव का अर्थ (Meaning of Complication):</NAccent>
            <p>मुख्य रोग (Main disease) के होने के बाद, उसी रोग के कारण जो अन्य नए रोग या लक्षण शरीर में उत्पन्न हो जाते हैं, उन्हें &apos;उपद्रव&apos; कहते हैं।</p>
          </div>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">विष उपद्रव:</NAccent>
            <p>जब कोई विष शरीर में प्रवेश करता है, तो उसके विषैले प्रभाव से शरीर के विभिन्न अंगों (Organs) और स्रोतों (Channels) में जो गंभीर जटिलताएं (Complications) उत्पन्न होती हैं, उन्हें विष उपद्रव कहा जाता है।</p>
          </div>
        </div>
      </div>

      {/* 2. Types of Upadravas */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. विष उपद्रवों के प्रकार (Types)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          विष के प्रभाव से वात, पित्त और कफ तीनों दोष कुपित हो जाते हैं, जिससे मुख्य रूप से निम्नलिखित उपद्रव उत्पन्न होते हैं:
        </NText>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-3 md:pl-10 text-base md:text-lg">
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">ज्वर (Jwara)</NText>
            <NText className="opacity-80">बुखार (Fever)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">हिक्का (Hikka)</NText>
            <NText className="opacity-80">हिचकी (Hiccups)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">श्वास (Shwasa)</NText>
            <NText className="opacity-80">सांस फूलना (Dyspnea)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">कास (Kasa)</NText>
            <NText className="opacity-80">खांसी (Cough)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">मूर्च्छा (Murchha)</NText>
            <NText className="opacity-80">बेहोशी (Syncope)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">वमन (Vamana)</NText>
            <NText className="opacity-80">उल्टी (Vomiting)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">अतिसार (Atisara)</NText>
            <NText className="opacity-80">दस्त (Diarrhea)</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm text-center">
            <NText bold className="block text-xl">शोथ (Shotha)</NText>
            <NText className="opacity-80">सूजन (Edema)</NText>
          </div>
        </div>
      </div>

      {/* 3. Treatment of 4 Upadravas (5-Mark Question) */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            3. चार प्रमुख विष उपद्रवों का आयुर्वेदिक उपचार
          </HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block text-lg font-bold">
          * परीक्षा में किन्हीं 4 प्रमुख उपद्रवों की चिकित्सा 5-marks में पूछी जाती है:
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-3 md:pl-10 text-base md:text-xl">
          <NCard title="क. हिक्का (Hiccups)">
            <NText className="block mb-2">विष के कारण होने वाली हिचकी बहुत कष्टदायक होती है, क्योंकि यह प्राणवह स्रोतस को बाधित करती है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> <NAccent bold>मयूर पिच्छ भस्म</NAccent> (Peacock feather ash) को शहद (Honey) के साथ चटाना चाहिए।</li>
              <li><NText bold>अन्य:</NText> आंवले के रस में पिप्पली चूर्ण और शहद मिलाकर देना चाहिए।</li>
            </ul>
          </NCard>

          <NCard title="ख. श्वास (Dyspnea/Asthma)">
            <NText className="block mb-2">विष के कारण फेफड़ों और श्वास नली में कफ भर जाने से श्वास रोग होता है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> <NAccent bold>शिरीष (Sirisha)</NAccent> की छाल और फल का चूर्ण शहद के साथ देना चाहिए।</li>
              <li>कपूर (Camphor) और हींग (Asafoetida) को सूंघने (Inhalation) के लिए देना चाहिए।</li>
            </ul>
          </NCard>

          <NCard title="ग. ज्वर (Fever)">
            <NText className="block mb-2">विष के पित्त और रक्त में मिलने से भयंकर प्यास और बुखार उत्पन्न होता है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> शरीर पर चंदन और खस का ठंडा लेप लगाना चाहिए।</li>
              <li>पीने के लिए <NAccent bold>षडंगपानीय</NAccent> (मुस्ता, पर्पटक, उशीर, चंदन, उदीच्य, सोंठ से सिद्ध जल) देना चाहिए।</li>
            </ul>
          </NCard>

          <NCard title="घ. मूर्च्छा (Fainting/Coma)">
            <NText className="block mb-2">जब विष मस्तिष्क और मर्म स्थानों को प्रभावित करता है, तो रोगी बेहोश हो जाता है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> <NAccent bold>तीक्ष्ण प्रधमन नस्य</NAccent> का प्रयोग करें—यानी कटु और तीक्ष्ण औषधियों (वचा, मरिच) का चूर्ण एक नली द्वारा नाक में जोर से फूंका जाता है ताकि रोगी को होश आ जाए।</li>
              <li>आंखों में तीक्ष्ण अंजन लगाना और ठंडे पानी के छींटे मारना।</li>
            </ul>
          </NCard>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: MODERN TOXICOLOGICAL HAZARDS       */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 2: आधुनिक विष बाधाएं
        </HandwrittenBox>
      </div>

      {/* 1. Drug-Induced Toxicity */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Drug-Induced Toxicity (औषधि जनित विषाक्तता)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Definition:</NText> Adverse or toxic reactions caused by medications prescribed for therapeutic purposes. <span className="italic opacity-80">(आयुर्वेद में इसे &apos;व्यापन्न औषध&apos; का दुष्प्रभाव माना जाता है)।</span></p>
          
          <div className="p-3 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Causes:</NAccent>
            <ul className="list-disc list-inside">
              <li>Overdosage (निर्धारित मात्रा से अधिक दवा लेना)।</li>
              <li>Drug Interactions (दो या अधिक दवाओं का गलत प्रभाव)।</li>
              <li>Side effects of heavy modern drugs (e.g., Chemotherapy).</li>
            </ul>
          </div>

          <div className="p-3 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Common Examples:</NAccent>
            <ul className="list-disc list-inside">
              <li><NText bold>Hepatotoxicity (Liver):</NText> Excessive use of Paracetamol.</li>
              <li><NText bold>Nephrotoxicity (Kidney):</NText> Overuse of NSAIDs (Painkillers like Ibuprofen) or Aminoglycoside antibiotics.</li>
            </ul>
          </div>

          <p><NText bold>Management:</NText> Stop the offending drug immediately. Provide specific antidotes (e.g., N-acetylcysteine for Paracetamol) and supportive care.</p>
        </div>
      </div>

      {/* 2. Occupational Hazards */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Occupational Hazards (व्यावसायिक संकट)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Definition:</NText> Health risks, diseases, or toxicities that a person acquires due to the environment or conditions of their workplace.</p>
          
          <NText bold className="block underline decoration-[var(--theme-border)] text-lg md:text-2xl mt-4">Types of Hazards:</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2">Chemical Hazards:</NAccent>
              <ul className="space-y-2">
                <li><NText bold>Lead Poisoning (Plumbism):</NText> Seen in battery makers and paint industry workers. Causes anemia, lead line on gums, and wrist drop.</li>
                <li><NText bold>Mercury Poisoning:</NText> Seen in thermometer manufacturing. Causes tremors and gingivitis.</li>
              </ul>
            </div>
            
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2">Dust Hazards (Pneumoconiosis):</NAccent>
              <ul className="space-y-2">
                <li><NText bold>Silicosis:</NText> Inhaling silica dust (mining, pottery).</li>
                <li><NText bold>Asbestosis:</NText> Inhaling asbestos fibers (roofing, insulation).</li>
              </ul>
            </div>
            
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2">Physical Hazards:</NAccent>
              <p>Deafness due to loud industrial noise, or radiation toxicity (X-ray technicians).</p>
            </div>

            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2">Biological Hazards:</NAccent>
              <p>Infections like Hepatitis B or HIV in healthcare workers due to accidental needle stick injuries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Allergies */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Allergies & Allergic Reactions (प्रत्यूर्जता)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Definition:</NText> An exaggerated immune response (Hypersensitivity) by the body&apos;s immune system to a normally harmless substance (Allergen).</p>
          <p><NText bold>Common Allergens:</NText> Pollen (परागकण), Dust mites, certain foods (Peanuts, Shellfish), and insect stings (Bee/Wasp).</p>
          <p><NText bold>Pathophysiology:</NText> Exposure to the allergen causes the release of Histamine from mast cells, leading to inflammation, itching, and mucus production.</p>
          
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/10 rounded-sm">
            <NAccent bold className="text-xl md:text-2xl block mb-2">Anaphylaxis (Severe Allergy):</NAccent>
            <p className="mb-2">A life-threatening, whole-body allergic reaction causing a sudden drop in blood pressure and swelling of the throat (breathing difficulty).</p>
            <p><NText bold>Management:</NText> Immediate intramuscular injection of <NAccent bold>Adrenaline (Epinephrine)</NAccent> is the drug of choice.</p>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
