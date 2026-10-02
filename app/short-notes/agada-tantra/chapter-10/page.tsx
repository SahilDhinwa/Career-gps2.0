import React from 'react';
import {
  NPageHeader,
  NSectionHeader,
  NText,
  NCard,
  NAccent,
  NTable
} from "@/components/HandwrittenCanvas";
import { HandwrittenBox } from "@/components/NoteElements";

export default function DhatuVishaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Page Header */}
      <NPageHeader
        title="धातु विष (Metallic Poisons)"
        subtitle="Chapter 10: Sthavara Visha - Metallic Origin (धातु विष)"
      />

      {/* Introduction */}
      <div className="bg-[var(--theme-card)] p-6 rounded-xl border-2 border-[var(--theme-border)] shadow-sm">
        <p className="text-lg leading-relaxed">
          <NText bold className="text-[var(--theme-primary)]">विषय प्रवेश (Introduction):</NText> आयुर्वेद में धातुओं (Metals) और उपधातुओं का प्रयोग भस्म रूप में औषधियों के लिए किया जाता है। यदि इनका सही तरीके से शोधन (Purification) और मारण न किया जाए, तो ये शरीर में भयंकर विषाक्तता (Heavy metal poisoning) उत्पन्न करते हैं। In modern toxicology, they are classified as <NAccent bold>Irritant Poisons</NAccent>.
        </p>
      </div>

      {/* ========================================== */}
      {/* 1. PARADA / MERCURY                        */}
      {/* ========================================== */}
      <section className="space-y-6">
        <NSectionHeader title="1. पारद विष (Mercury Poisoning)" />
        
        <p className="text-center font-bold italic opacity-80 text-sm md:text-base text-[var(--theme-primary)]">
          * परीक्षा में 5-mark प्रश्न: पारद विषाक्तता के लक्षण, घातक मात्रा, प्रतिविष, चिकित्सा एवं चिकित्सा वैधानिक अभिप्राय (Medico-legal aspects)।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parada: Ayurvedic */}
          <NCard title="Part A: आयुर्वेदिक परिप्रेक्ष्य">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>
                <NText bold>परिचय:</NText> पारद को रसशास्त्र में सर्वोपरि माना गया है, परंतु अशुद्ध पारद भयंकर विष होता है। इसमें 3 नैसर्गिक, 2 यौगिक और 7 औपाधिक (कुल 12) दोष होते हैं।
              </li>
              <li>
                <NText bold>लक्षण:</NText> अशुद्ध पारद खाने से कुष्ठ (Skin diseases), दांतों का गिरना, शरीर में भयंकर जलन (दाह), हृदय रोग और मृत्यु (Marana) हो सकती है।
              </li>
            </ul>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">आयुर्वेदिक चिकित्सा:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li><NText bold>गन्धक (Sulphur):</NText> शुद्ध गन्धक पारद का सबसे अच्छा मारक और विषनाशक है।</li>
                <li>स्वर्ण माक्षिक भस्म को शहद के साथ चटाना चाहिए।</li>
                <li>रोगी को गाय का दूध और मुनक्का (Draksha) खिलाना चाहिए।</li>
              </ul>
            </div>
          </NCard>

          {/* Parada: Modern */}
          <NCard title="Part B: Modern Toxicological Perspective">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>
                <NText bold>Active Forms:</NText> Elemental, Inorganic salts (Mercuric chloride - highly corrosive), and Organic (Methylmercury - highly neurotoxic).
              </li>
              <li>
                <NText bold>Fatal Dose &amp; Period:</NText> Mercuric Chloride (1-2 grams). Fatal in 3-5 days.
              </li>
            </ul>

            <div className="mt-4 space-y-3">
              <div>
                <NText bold className="text-sm underline">Acute Poisoning:</NText>
                <ul className="list-disc list-inside text-xs md:text-sm pl-2">
                  <li>Metallic taste in mouth &amp; severe burning in throat.</li>
                  <li>Bloody diarrhea.</li>
                  <li><NAccent bold>Acute Renal Failure</NAccent> (Kidney failure).</li>
                </ul>
              </div>

              <div>
                <NText bold className="text-sm underline">Chronic Poisoning (Hydrargyrism):</NText>
                <ul className="list-disc list-inside text-xs md:text-sm pl-2">
                  <li><NText bold>Ptyalism:</NText> Excessive saliva secretion.</li>
                  <li><NText bold>Mercuria Lentis:</NText> Brownish reflection from eye lens.</li>
                  <li><NText bold>Gingivitis:</NText> Blue-black line on gums.</li>
                  <li><NText bold>Hatter&apos;s Shakes:</NText> Fine tremors starting in fingers.</li>
                  <li><NText bold>Erethism:</NText> Extreme shyness, irritability, memory loss.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">Management &amp; Antidote:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-xs md:text-sm">
                <li><NText bold>Specific Antidote:</NText> <NAccent bold>BAL (Dimercaprol)</NAccent> for acute; D-Penicillamine orally for chronic.</li>
                <li><NText bold>Gastric Lavage:</NText> With egg white (Albumen) or Activated Charcoal.</li>
              </ul>
            </div>

            <div className="mt-3 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">Medico-Legal Aspects:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-xs md:text-sm">
                <li><NText bold>Accidental:</NText> Occupational hazard (thermometer/paint industries).</li>
                <li><NText bold>Environmental:</NText> <NAccent bold>Minamata Disease</NAccent> (Japan - contaminated fish).</li>
                <li><NText bold>Suicidal/Homicidal:</NText> Rare due to severe corrosive pain.</li>
              </ul>
            </div>
          </NCard>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. ARSENIC                                 */}
      {/* ========================================== */}
      <section className="space-y-6">
        <NSectionHeader title="2. संख्या / सोमल विष (Arsenic Poisoning)" />

        <p className="text-center font-bold italic opacity-80 text-sm md:text-base text-[var(--theme-primary)]">
          * परीक्षा में 10-mark प्रश्न: धतूरा एवं संख्या विषाक्तता का चिकित्सा एवं प्रतिविष सहित वर्णन।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Arsenic: Ayurvedic */}
          <NCard title="Part A: आयुर्वेदिक परिप्रेक्ष्य">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>
                <NText bold>पर्याय:</NText> &apos;सोमल&apos;, &apos;गौरीपाषाण&apos;, और &apos;मूषक विष&apos; (Rat poison)।
              </li>
              <li>
                <NText bold>लक्षण:</NText> अशुद्ध सोमल खाने से पेट में भयंकर ऐंठन (Cramps), उल्टी, और पानी के समान पतले दस्त (Watery diarrhea) होते हैं, जिससे शरीर का सारा जल सूख जाता है।
              </li>
            </ul>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">आयुर्वेदिक चिकित्सा:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li><NAccent bold>कारवेल्लक (करेले)</NAccent> का रस पिलाने से संख्या विष का शमन होता है।</li>
                <li>स्वर्ण भस्म या गोघृत (गाय का घी) का सेवन कराएं।</li>
              </ul>
            </div>
          </NCard>

          {/* Arsenic: Modern */}
          <NCard title="Part B: Modern Toxicological Perspective">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>
                <NText bold>Chemical Forms:</NText> Arsenous oxide ($As_2O_3$) / White Arsenic (Tasteless, odorless).
              </li>
              <li>
                <NText bold>Fatal Dose &amp; Period:</NText> 100-200 mg. Fatal in 12-48 hours.
              </li>
              <li>
                <NText bold>Mechanism:</NText> Inhibits cellular enzymes by binding to sulfhydryl (-SH) groups, halting cellular respiration.
              </li>
            </ul>

            <div className="mt-4 space-y-3">
              <div>
                <NText bold className="text-sm underline">Acute Poisoning (GI Type):</NText>
                <ul className="list-disc list-inside text-xs md:text-sm pl-2">
                  <li>Resembles <NAccent bold>severe Cholera</NAccent> (हैजा).</li>
                  <li>Severe nausea and vomiting.</li>
                  <li><NText bold>Rice-water stools</NText> (Diarrhea with mucus).</li>
                  <li>Intense thirst, dehydration, and calf muscle cramps.</li>
                </ul>
              </div>

              <div>
                <NText bold className="text-sm underline">Chronic Poisoning (Arsenicism):</NText>
                <ul className="list-disc list-inside text-xs md:text-sm pl-2">
                  <li><NText bold>Raindrop Pigmentation:</NText> Spotty, dark skin pigmentation.</li>
                  <li><NText bold>Aldrich-Mees Lines:</NText> White transverse lines on nails.</li>
                  <li><NText bold>Hyperkeratosis:</NText> Thickening of skin on palms/soles.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">Management &amp; Antidote:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-xs md:text-sm">
                <li><NText bold>Specific Antidote:</NText> <NAccent bold>BAL (Dimercaprol)</NAccent> IM. DMSA or Unithiol orally.</li>
                <li><NText bold>Chemical Antidote:</NText> Freshly prepared Hydrated Ferric Oxide orally.</li>
                <li><NText bold>Symptomatic:</NText> Vigorous IV fluids to correct dehydration and shock.</li>
              </ul>
            </div>

            <div className="mt-3 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">Medico-Legal Aspects:</NAccent>
              <p className="text-xs md:text-sm">
                Known as the <NText bold>&quot;King of Poisons&quot;</NText> historically because it was the most common homicidal poison (tasteless, odorless, mimics cholera).
              </p>
            </div>
          </NCard>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. LEAD                                    */}
      {/* ========================================== */}
      <section className="space-y-6">
        <NSectionHeader title="3. सीसा / नाग विष (Lead Poisoning)" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lead: Ayurvedic */}
          <NCard title="Part A: आयुर्वेदिक परिप्रेक्ष्य">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li><NText bold>परिचय:</NText> सीसा (Lead) को आयुर्वेद में &apos;नाग&apos; कहा जाता है।</li>
              <li><NText bold>लक्षण:</NText> प्रमेह (Urinary disorders), कामल (Jaundice), वात-व्याधि, गुल्म (Gulma), और संधि शूल (Joint pain) उत्पन्न होते हैं।</li>
            </ul>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">आयुर्वेदिक चिकित्सा:</NAccent>
              <p className="text-sm">
                त्रिफला के काढ़े और गोमूत्र का सेवन नाग विषाक्तता को दूर करता है।
              </p>
            </div>
          </NCard>

          {/* Lead: Modern */}
          <NCard title="Part B: Modern Perspective (Plumbism)">
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-2">
              Most common occupational/environmental hazard. <NText bold>Fatal Dose:</NText> 20g Lead acetate.
            </p>
            <ul className="space-y-2 list-disc list-inside text-xs md:text-sm">
              <li><NText bold>Facial Pallor:</NText> Extreme paleness (Lead anemia).</li>
              <li><NText bold>Burtonian Line:</NText> Blue-black line on gums.</li>
              <li><NText bold>Neurological:</NText> Wrist-drop and foot-drop.</li>
              <li><NText bold>Colic &amp; Constipation:</NText> Severe abdominal pain.</li>
              <li><NText bold>Blood:</NText> Basophilic stippling of RBCs.</li>
            </ul>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">Modern Management:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-xs md:text-sm">
                <li><NText bold>Specific Antidote:</NText> <NAccent bold>Ca-EDTA</NAccent> via slow IV infusion is the drug of choice.</li>
                <li>D-Penicillamine orally or BAL.</li>
              </ul>
            </div>
          </NCard>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. COPPER                                  */}
      {/* ========================================== */}
      <section className="space-y-6">
        <NSectionHeader title="4. ताम्र विष (Copper Poisoning)" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Copper: Ayurvedic */}
          <NCard title="Part A: आयुर्वेदिक परिप्रेक्ष्य">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li><NText bold>परिचय:</NText> यदि तांबे के बर्तन में खट्टी चीजें (दही/नींबू) रखी जाएं, तो वह &apos;विरुद्ध आहार&apos; और विष बन जाता है।</li>
              <li><NText bold>लक्षण:</NText> उत्क्लेश (Nausea), वमन (Vomiting), भ्रम (Giddiness), मूर्च्छा (बेहोशी), और भयंकर पेट दर्द।</li>
            </ul>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">आयुर्वेदिक चिकित्सा:</NAccent>
              <p className="text-sm">
                शुद्ध मुनक्का (Draksha) और मिश्री को गाय के दूध के साथ देना चाहिए।
              </p>
            </div>
          </NCard>

          {/* Copper: Modern */}
          <NCard title="Part B: Modern Perspective">
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-2">
              <NText bold>Source:</NText> Copper sulphate (Blue vitriol / नीला थोथा). <NText bold>Fatal Dose:</NText> 15–30g.
            </p>
            <ul className="space-y-2 list-disc list-inside text-xs md:text-sm">
              <li>Metallic taste &amp; severe burning in mouth.</li>
              <li><NAccent bold>Vomit is blue or green in color.</NAccent></li>
              <li>Severe jaundice, kidney damage, oliguria.</li>
            </ul>

            <div className="mt-4 p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/10 rounded-r">
              <NAccent bold className="block mb-1 text-base">Management &amp; Antidote:</NAccent>
              <ul className="space-y-1 list-disc list-inside text-xs md:text-sm">
                <li><NText bold>Stomach Wash:</NText> With Potassium Ferrocyanide.</li>
                <li><NText bold>Specific Antidote:</NText> <NAccent bold>D-Penicillamine</NAccent>.</li>
              </ul>
            </div>
          </NCard>
        </div>
      </section>

      {/* Summary Table for Quick Revision */}
      <section className="mt-8">
        <NSectionHeader title="Quick Revision: Metal Poisons & Antidotes" />
        <NTable
          headers={['Poison (Metal)', 'Specific Antidote (Chelating Agent)', 'Key Sign/Symptom']}
          data={[
            ['पारद (Mercury)', 'BAL (Dimercaprol), D-Penicillamine', 'Ptyalism, Hatter\'s Shakes, Mercuria Lentis'],
            ['सोमल (Arsenic)', 'BAL, DMSA, Hydrated Ferric Oxide', 'Aldrich-Mees Lines, Rice-water stools (Cholera-like)'],
            ['नाग (Lead)', 'Ca-EDTA (IV), D-Penicillamine, BAL', 'Burtonian Line, Wrist-drop, Basophilic stippling'],
            ['ताम्र (Copper)', 'D-Penicillamine, Potassium Ferrocyanide', 'Blue/Green vomitus, Metallic taste, Jaundice']
          ]}
        />
      </section>

    </div>
  );
}
