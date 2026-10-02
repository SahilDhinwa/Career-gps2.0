"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter12() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 12: कृत्रिम विष (Corrosive Poisons)
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Kritrima Visha - Acids & Alkalis
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> कृत्रिम विष (Artificial Poisons) वे रसायन होते हैं जो प्रकृति में स्वतंत्र रूप से नहीं पाए जाते, बल्कि कारखानों या प्रयोगशालाओं में रसायनों के संयोग से बनाए जाते हैं। आधुनिक विष विज्ञान में इस अध्याय के अंतर्गत मुख्य रूप से <NText bold>दाहक विषों (Corrosive Poisons)</NText> यानी तीव्र अम्लों (Acids) और क्षारों (Alkalis) का अध्ययन किया जाता है।
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART 1: AYURVEDIC PERSPECTIVE                */}
      {/* ========================================== */}
      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part A: आयुर्वेदिक परिप्रेक्ष्य (Ayurvedic Perspective)
        </HandwrittenBox>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. कृत्रिम विष की अवधारणा</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="leading-relaxed">
            यद्यपि आयुर्वेद में &apos;गरविष&apos; को ही मुख्य रूप से कृत्रिम विष माना गया है, परंतु आधुनिक रसायनों (Acids/Alkalis) के तीव्र प्रभाव को आयुर्वेद में <NText bold>&apos;तीक्ष्ण क्षार&apos; और &apos;तीक्ष्ण अम्ल&apos;</NText> के अंतर्गत रखा जाता है।
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <NCard title="क्षार के गुण (Properties):">
              <NText className="block mt-2">आचार्य सुश्रुत के अनुसार क्षार में <NAccent bold>छेदना (काटने वाला), भेदना (फाड़ने वाला), और पातन (नष्ट करने वाला)</NAccent> गुण होता है। अत्यधिक तीक्ष्ण होने के कारण यह शरीर की त्वचा और मांस को तुरंत गला देता है।</NText>
            </NCard>
            <NCard title="सम्प्राप्ति और लक्षण (Symptoms):">
              <NText className="block mt-2">ये भयंकर रूप से पित्त और रक्त को दूषित करते हैं। शरीर में असहनीय जलन (दाह), त्वचा का फटना, वहां घाव (व्रण / Ulcers) बन जाना, और रक्त स्राव (Bleeding) होना इसके प्रमुख लक्षण हैं।</NText>
            </NCard>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-4">
            <NAccent bold className="block mb-2 text-lg">सामान्य आयुर्वेदिक चिकित्सा (Management):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>दाहक विषों के प्रभाव को शांत करने के लिए हमेशा <NAccent bold>शीत (ठंडी) और स्निग्ध (चिकनी)</NAccent> चिकित्सा की जाती है।</li>
              <li>रोगी को पीने के लिए भरपूर मात्रा में ठंडा गाय का दूध, घी, या नारियल का पानी देना चाहिए।</li>
              <li>बाहरी त्वचा जलने पर <NText bold>शतधौत घृत</NText> (100 बार धोया हुआ घी) या चंदन का लेप लगाना चाहिए।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: MODERN TOXICOLOGICAL PERSPECTIVE   */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part B: Modern Perspective (Corrosive Poisons)
        </HandwrittenBox>
      </div>

      {/* 1 & 2. Definition & Classification */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1 & 2. Definition & Classification</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Definition:</NText> Corrosive poisons are highly active chemicals that cause severe local tissue destruction, inflammation, and deep chemical burns immediately upon contact.</p>
          
          <div className="p-4 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-2 text-lg">Classification:</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Mineral Acids (खनिज अम्ल):</NText> Sulphuric Acid ($H_2SO_4$), Nitric Acid ($HNO_3$), Hydrochloric Acid (HCl).</li>
              <li><NText bold>Organic Acids (कार्बनिक अम्ल):</NText> Carbolic Acid (Phenol), Oxalic Acid, Acetic Acid.</li>
              <li><NText bold>Alkalis (क्षार):</NText> Sodium Hydroxide (NaOH), Potassium Hydroxide (KOH), Ammonia.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Mechanism of Action */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Mechanism of Action (Pathology)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block font-bold">
          The difference in how Acids and Alkalis destroy tissue is highly tested in exams:
        </NText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-2 text-xl underline decoration-[var(--theme-border)]">Acids (अम्ल):</NAccent>
            <p>They cause <NAccent bold>Coagulative Necrosis</NAccent>. Acids extract water from the tissues and coagulate (harden) the cellular proteins. This forms a hard, dry scab (Eschar) which actually limits the acid from penetrating deeper into the tissues.</p>
          </div>
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-2 text-xl underline decoration-[var(--theme-border)]">Alkalis (क्षार):</NAccent>
            <p>They cause <NAccent bold>Liquefactive Necrosis</NAccent>. Alkalis dissolve cellular proteins and saponify fats (फैट को साबुन में बदलते हैं). Because they liquefy tissues, alkalis penetrate much deeper, making them significantly more dangerous for the esophagus and stomach.</p>
          </div>
        </div>
      </div>

      {/* 4. Clinical Features */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. General Clinical Features</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="space-y-3 list-[circle] list-inside marker:text-[var(--theme-accent)]">
            <li>Severe, agonizing, and burning pain from the mouth down to the stomach.</li>
            <li><NText bold>Chemical burns:</NText> Lips, mouth, and tongue show severe burns/discoloration.</li>
            <li><NText bold>Dysphagia:</NText> Severe difficulty in swallowing.</li>
            {/* FIXED LINE HERE: Replaced "" with &quot; */}
            <li><NText bold>Vomiting:</NText> Vomitus contains altered blood, looking like <NAccent bold>&quot;coffee-grounds&quot;</NAccent>, mixed with shredded mucous membranes.</li>
            <li><NText bold>Shock:</NText> Severe hypovolemic and neurogenic shock due to extreme pain and fluid loss.</li>
          </ul>
        </div>
      </div>

      {/* 5. Modern Management & Contraindications (CRITICAL) */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            5. Modern Management & STRICT CONTRAINDICATIONS
          </HandwrittenBox>
        </div>
        
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm">
            <NAccent bold className="block mb-3 text-2xl text-center">STRICTLY CONTRAINDICATED (क्या बिल्कुल नहीं करना है):</NAccent>
            <ul className="space-y-4">
              <li>
                <NText bold className="block text-lg">1. DO NOT Indউট Vomiting (Emesis):</NText> 
                उल्टी बिल्कुल नहीं करानी चाहिए। If the patient vomits, the corrosive acid/alkali will burn the esophagus and mouth a second time as it comes up.
              </li>
              <li>
                <NText bold className="block text-lg">2. NO Gastric Lavage (Stomach Wash):</NText> 
                पेट की सफाई (ट्यूब डालना) सख्त मना है। The walls of the esophagus and stomach become extremely thin and necrotic (सड़ जाना). Inserting a Ryle&apos;s tube can instantly <NAccent bold>puncture/perforate</NAccent> the stomach, causing immediate death.
              </li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NText bold className="block mb-2 text-xl">Treatment Protocol:</NText>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Dilution:</NText> Give plenty of water or cold milk to dilute the poison.</li>
              <li><NText bold>Demulcents:</NText> Give egg white (Albumen), olive oil, or melted butter to soothe and protect the stomach lining.</li>
              <li><NText bold>Analgesics:</NText> Administer strong painkillers like Morphine IV to manage excruciating pain and prevent neurogenic shock.</li>
              <li><NText bold>IV Fluids:</NText> Administer normal saline to manage shock and dehydration.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6. Specific Corrosive Poisons */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>6. Specific Corrosive Poisons (Key Features)</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <NCard title="Sulphuric Acid">
            <ul className="space-y-2 mt-2">
              <li><NText bold>Oil of Vitriol</NText> (गन्धक का तेज़ाब).</li>
              <li>Leaves a characteristic <NAccent bold>black/brown eschar</NAccent> (काले छाले) because it chars organic matter.</li>
            </ul>
          </NCard>

          <NCard title="Nitric Acid">
            <ul className="space-y-2 mt-2">
              <li><NText bold>Aqua Fortis</NText> (शोरे का अम्ल).</li>
              <li>Causes a characteristic <NAccent bold>yellow discoloration</NAccent> of the skin (Xanthoproteic reaction).</li>
            </ul>
          </NCard>

          <NCard title="Carbolic Acid (Phenol)">
            <ul className="space-y-2 mt-2 text-sm md:text-base">
              <li>Has a local anesthetic effect (patient feels less pain initially).</li>
              <li>Turns urine dark green/black <NAccent bold>(Carboluria)</NAccent>.</li>
              <li><NText bold className="italic">Note:</NText> Gastric lavage CAN be done cautiously here, as it doesn&apos;t perforate severely like mineral acids.</li>
            </ul>
          </NCard>

        </div>
      </div>

    </HandwrittenCanvas>
  );
}
