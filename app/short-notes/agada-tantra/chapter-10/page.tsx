"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter10() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 10: Metallic Poisons
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Sthavara Visha - Metallic Origin (धातु विष)
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> आयुर्वेद में धातुओं (Metals) और उपधातुओं का प्रयोग भस्म रूप में औषधियों के लिए किया जाता है। यदि इनका सही तरीके से शोधन (Purification) और मारण न किया जाए, तो ये शरीर में भयंकर विषाक्तता (Heavy metal poisoning) उत्पन्न करते हैं।
        </NText>
      </div>

      {/* ========================================== */}
      {/* 1. PARADA / MERCURY                          */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          1. पारद विष (Mercury Poisoning)
        </HandwrittenBox>
      </div>
      
      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में 5-mark प्रश्न: पारद विषाक्तता के लक्षण, घातक मात्रा, प्रतिविष, चिकित्सा एवं चिकित्सा वैधानिक अभिप्राय (Medico-legal aspects)।
      </NText>

      {/* Mercury: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>परिचय:</NText> पारद को रसशास्त्र में सर्वोपरि माना गया है, परंतु अशुद्ध पारद भयंकर विष होता है। इसमें 3 नैसर्गिक, 2 यौगिक और 7 औपाधिक (कुल 12) दोष होते हैं।</li>
            <li><NText bold>लक्षण:</NText> अशुद्ध पारद खाने से कुष्ठ (Skin diseases), दांतों का गिरना, शरीर में भयंकर जलन (दाह), हृदय रोग और मृत्यु हो सकती है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">आयुर्वेदिक चिकित्सा:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>गन्धक (Sulphur):</NText> शुद्ध गन्धक पारद का सबसे अच्छा मारक और विषनाशक है।</li>
              <li>स्वर्ण माक्षिक भस्म को शहद के साथ चटाना चाहिए।</li>
              <li>रोगी को गाय का दूध और मुनक्का (Draksha) खिलाना चाहिए।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mercury: Modern */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Toxicological Perspective</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Active Forms:</NText> Elemental, Inorganic salts (Mercuric chloride - highly corrosive), and Organic (Methylmercury - highly neurotoxic).</li>
            <li><NText bold>Fatal Dose &amp; Period:</NText> Mercuric Chloride (1-2 grams). Fatal in 3-5 days.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <NCard title="Acute Poisoning">
              <ul className="space-y-2 list-[circle] list-inside mt-2">
                <li>Metallic taste in mouth.</li>
                <li>Severe burning in throat.</li>
                <li>Bloody diarrhea.</li>
                <li><NAccent bold>Acute Renal Failure</NAccent> (Kidney failure).</li>
              </ul>
            </NCard>

            <NCard title="Chronic Poisoning (Hydrargyrism)">
              <ul className="space-y-2 list-[circle] list-inside mt-2">
                <li><NText bold>Ptyalism:</NText> Excessive saliva secretion.</li>
                <li><NText bold>Mercurialentis:</NText> Brownish reflection from eye lens.</li>
                <li><NText bold>Gingivitis:</NText> Blue-black line on gums.</li>
                <li><NText bold>Hatter&apos;s Shakes:</NText> Fine tremors starting in fingers.</li>
                <li><NText bold>Erethism:</NText> Extreme shyness, irritability, memory loss.</li>
              </ul>
            </NCard>
          </div>

          <div className="space-y-4 mt-6">
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-lg">Management &amp; Antidote:</NAccent>
              <ul className="space-y-1 list-disc list-inside">
                <li><NText bold>Specific Antidote:</NText> <NAccent bold>BAL (Dimercaprol)</NAccent> for acute. D-Penicillamine orally for chronic.</li>
                <li><NText bold>Gastric Lavage:</NText> With egg white (Albumen) or Activated Charcoal.</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-lg">Medico-Legal Aspects:</NAccent>
              <ul className="space-y-1 list-disc list-inside">
                <li><NText bold>Accidental:</NText> Common occupational hazard (thermometer/paint industries).</li>
                <li><NText bold>Environmental:</NText> <NAccent bold>Minamata Disease</NAccent> (Japan - due to contaminated fish).</li>
                <li><NText bold>Suicidal/Homicidal:</NText> Rare due to severe corrosive pain.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. ARSENIC                                 */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          2. संख्या / सोमल विष (Arsenic Poisoning)
        </HandwrittenBox>
      </div>
      
      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में 10-mark प्रश्न: धतूरा एवं संख्या विषाक्तता का चिकित्सा एवं प्रतिविष सहित वर्णन।
      </NText>

      {/* Arsenic: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>पर्याय:</NText> &apos;सोमल&apos;, &apos;गौरीपाषाण&apos;, और &apos;मूषक विष&apos; (Rat poison)।</li>
            <li><NText bold>लक्षण:</NText> अशुद्ध सोमल खाने से पेट में भयंकर ऐंठन (Cramps), उल्टी, और पानी के समान पतले दस्त (Watery diarrhea) होते हैं, जिससे शरीर का सारा जल सूख जाता है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">आयुर्वेदिक चिकित्सा:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NAccent bold>कारवेल्लक (करेले)</NAccent> का रस पिलाने से संख्या विष का शमन होता है।</li>
              <li>स्वर्ण भस्म या गोघृत (गाय का घी) का सेवन कराएं।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Arsenic: Modern */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Toxicological Perspective</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Chemical Forms:</NText> Arsenous oxide ($As_2O_3$) / White Arsenic (Tasteless, odorless).</li>
            <li><NText bold>Fatal Dose &amp; Period:</NText> 100-200 mg. Fatal in 12-48 hours.</li>
            <li><NText bold>Mechanism:</NText> Inhibits cellular enzymes by binding to sulfhydryl (-SH) groups, halting cellular respiration.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <NCard title="Acute Poisoning (GI Type)">
              <ul className="space-y-2 list-[circle] list-inside mt-2">
                <li>Symptoms closely resemble <NAccent bold>severe Cholera</NAccent> (हैजा).</li>
                <li>Severe nausea and vomiting.</li>
                <li><NText bold>Rice-water stools</NText> (Diarrhea with mucus).</li>
                <li>Intense thirst, dehydration, and calf muscle cramps.</li>
              </ul>
            </NCard>

            <NCard title="Chronic Poisoning">
              <ul className="space-y-2 list-[circle] list-inside mt-2">
                <li><NText bold>Raindrop Pigmentation:</NText> Spotty, dark skin pigmentation.</li>
                <li><NText bold>Aldrich-Mees Lines:</NText> White transverse lines on nails.</li>
                <li><NText bold>Hyperkeratosis:</NText> Thickening of skin on palms/soles.</li>
              </ul>
            </NCard>
          </div>

          <div className="space-y-4 mt-6">
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-lg">Management &amp; Antidote:</NAccent>
              <ul className="space-y-1 list-disc list-inside">
                <li><NText bold>Specific Antidote:</NText> <NAccent bold>BAL (Dimercaprol)</NAccent> IM. DMSA or Unithiol orally.</li>
                <li><NText bold>Chemical Antidote:</NText> Freshly prepared Hydrated Ferric Oxide orally.</li>
                <li><NText bold>Symptomatic:</NText> Vigorous IV fluids to correct dehydration/shock.</li>
              </ul>
            </div>
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-lg">Medico-Legal Aspects:</NAccent>
              <p>Known as the <NText bold>&quot;King of Poisons&quot;</NText> historically because it was the most common homicidal poison (tasteless, odorless, mimics cholera).</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. LEAD                                    */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          3. सीसा / नाग विष (Lead Poisoning)
        </HandwrittenBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Lead: Ayurvedic */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
            <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
          </div>
          <div className="space-y-4 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>परिचय:</NText> सीसा (Lead) को आयुर्वेद में &apos;नाग&apos; कहा जाता है।</li>
              <li><NText bold>लक्षण:</NText> प्रमेह (Diabetes/Urinary disorders), कामल (Jaundice), और वात-व्याधि उत्पन्न होते हैं।</li>
            </ul>
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1">आयुर्वेदिक चिकित्सा:</NAccent>
              <NText>त्रिफला के काढ़े और गोमूत्र का सेवन नाग विषाक्तता को दूर करता है।</NText>
            </div>
          </div>
        </div>

        {/* Lead: Modern */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
            <HandwrittenBox>Part B: Modern Perspective</HandwrittenBox>
          </div>
          <div className="space-y-4 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
            <NText className="block mb-2"><NText bold>Chronic Toxicity (Plumbism):</NText> Common occupational/environmental hazard. Fatal Dose: 20g Lead acetate.</NText>
            
            <NCard title="Clinical Features (Plumbism)">
              <ul className="space-y-2 list-[circle] list-inside mt-2">
                <li><NText bold>Facial Pallor:</NText> Extreme paleness (Lead anemia).</li>
                <li><NText bold>Burtonian Line:</NText> Stippled blue-black line on gums.</li>
                <li><NText bold>Neurological:</NText> Wrist drop and foot drop.</li>
                <li><NText bold>Colic &amp; Constipation:</NText> Severe abdominal pain.</li>
                <li><NText bold>Blood:</NText> Basophilic stippling of RBCs.</li>
              </ul>
            </NCard>
            
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1">Modern Management:</NAccent>
              <NText><NText bold>Specific Antidote:</NText> <NAccent bold>Ca-EDTA</NAccent> via slow IV infusion is the drug of choice. D-Penicillamine orally.</NText>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. COPPER                                  */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          4. ताम्र विष (Copper Poisoning)
        </HandwrittenBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Copper: Ayurvedic */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
            <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
          </div>
          <div className="space-y-4 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>परिचय:</NText> यदि तांबे के बर्तन में खट्टी चीजें (दही/नींबू) रखी जाएं, तो वह &apos;विरुद्ध आहार&apos; और विष बन जाता है।</li>
              <li><NText bold>लक्षण:</NText> मूर्च्छा (बेहोशी), उल्टी, और भयंकर पेट दर्द।</li>
            </ul>
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1">आयुर्वेदिक चिकित्सा:</NAccent>
              <NText>शुद्ध मुनक्का (Draksha) और मिश्री को गाय के दूध के साथ देना चाहिए।</NText>
            </div>
          </div>
        </div>

        {/* Copper: Modern */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
            <HandwrittenBox>Part B: Modern Perspective</HandwrittenBox>
          </div>
          <div className="space-y-4 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
            <NText className="block mb-2">Copper Sulphate (Blue vitriol / नीला थोथा). Fatal Dose: 15-30g.</NText>
            
            <NCard title="Clinical Features">
              <ul className="space-y-2 list-[circle] list-inside mt-2">
                <li>Metallic taste &amp; severe burning in mouth.</li>
                <li><NAccent bold>Vomit is blue or green in color.</NAccent></li>
                <li>Severe jaundice and kidney damage.</li>
              </ul>
            </NCard>
            
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1">Management &amp; Antidote:</NAccent>
              <NText><NText bold>Specific Antidote:</NText> D-Penicillamine. Wash stomach with Potassium Ferrocyanide.</NText>
            </div>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
