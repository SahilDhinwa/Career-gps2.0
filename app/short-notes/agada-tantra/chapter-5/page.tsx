"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter5() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 5: विष उपद्रव, औषधि जनित विषाक्तता एवं व्यावसायिक संकट
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Visha Upadrava & Modern Hazards
        </span>
      </div>

      {/* ========================================== */}
      {/* PART 1: VISHA UPADRAVA                       */}
      {/* ========================================== */}
      
      <div className="flex items-center gap-3 text-3xl mb-8 mt-4 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 1: विष उपद्रव (Visha Upadrava)
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. उपद्रव की परिभाषा (Definition)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="leading-relaxed block">
            मुख्य रोग (Main disease) के उत्पन्न होने के बाद, उसी रोग के कारण या दोषों के अत्यधिक कुपित होने से जो अन्य नए रोग या लक्षण शरीर में प्रकट होते हैं, उन्हें <NText bold>&apos;उपद्रव&apos; (Complications)</NText> कहते हैं।
          </NText>
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm text-center">
            <NText className="block mb-2 font-bold opacity-80 text-sm md:text-base">— श्लोक (वाग्भट) —</NText>
            <NAccent className="italic font-bold text-lg md:text-xl">&quot;रोगारम्भक दोषेण यो व्याधिरुत्तरकालजः। उपद्रव इति प्रोक्तः स रोगेणाधिको गुरुः॥&quot;</NAccent>
            <NText className="block mt-2 text-sm md:text-base">अर्थात, जो विकार मुख्य रोग के बाद उसी दोष से उत्पन्न होता है, वह उपद्रव है, और यह मूल रोग से भी अधिक कष्टदायक (Severe) होता है।</NText>
          </div>
        </div>
      </div>

      {/* 2. 16 Types of Upadravas */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. विष उपद्रवों के प्रकार (Types)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          विष के तीव्र प्रभाव से शरीर के स्रोतस (Channels) दूषित हो जाते हैं। आचार्य वाग्भट और चरक के अनुसार विष के मुख्य 16 उपद्रव माने गए हैं। परीक्षा की दृष्टि से इन सभी 16 नामों को लिखना आवश्यक है:
        </NText>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-3 md:pl-10 text-base md:text-lg">
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>ज्वर (Jwara):</NText> बुखार</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>कास (Kasa):</NText> खांसी</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>वमन (Vamana):</NText> लगातार उल्टी</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>हिक्का (Hikka):</NText> हिचकी आना</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>श्वास (Shwasa):</NText> सांस फूलना</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>मूर्च्छा (Murchha):</NText> बेहोशी</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>अतिसार (Atisara):</NText> दस्त</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>शोफ (Shopha):</NText> सूजन</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>हृद्रोग (Hridroga):</NText> हृदय विकार</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>शिरोरोग (Shiroroga):</NText> सिरदर्द</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>प्लीहा वृद्धि (Pleeha):</NText> तिल्ली बढ़ना</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>उदर रोग (Udara Roga):</NText> जलोदर</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>विसर्प (Visarpa):</NText> त्वचा संक्रमण</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>गुल्म (Gulma):</NText> वायु का गोला</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>कम्प (Kampa):</NText> शरीर में कंपन</div>
          <div className="p-2 border-b border-[var(--theme-border)]/30"><NText bold>आनाह/निद्रानाश:</NText> गैस/नींद न आना</div>
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
          * परीक्षा (5-mark) में प्रायः किन्हीं चार उपद्रवों की चिकित्सा पूछी जाती है:
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-3 md:pl-10 text-base md:text-xl">
          <NCard title="क. हिक्का (Hiccups)">
            <NText className="block mb-2">विष के कारण होने वाली हिचकी बहुत कष्टदायक होती है क्योंकि यह प्राणवह स्रोतस (Respiratory tract) को बाधित करती है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> <NAccent bold>मयूर पिच्छ भस्म</NAccent> (Peacock feather ash) को शहद (Honey) के साथ चटाना चाहिए।</li>
              <li><NText bold className="italic opacity-80 text-sm md:text-base">श्लोक संदर्भ (चरक):</NText> <span className="text-sm md:text-base">&quot;बर्हिणश्च शिखां पिष्ट्वा... हिक्काघ्नं परमुच्यते।&quot;</span></li>
            </ul>
          </NCard>

          <NCard title="ख. श्वास (Dyspnea / Asthma)">
            <NText className="block mb-2">फेफड़ों (Lungs) और श्वास नली में कफ भर जाने से सांस लेने में रुकावट होती है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> <NAccent bold>शिरीष (Sirisha)</NAccent> के बीज और छाल का चूर्ण शहद के साथ देना चाहिए। (शिरीष सर्वश्रेष्ठ विषघ्न है)।</li>
              <li>कपूर (Camphor) और हींग (Asafoetida) को सुंघाना (Inhalation) चाहिए।</li>
            </ul>
          </NCard>

          <NCard title="ग. ज्वर (Fever)">
            <NText className="block mb-2">विष के पित्त और रक्त में मिलने से शरीर में भयंकर ताप (Heat) और प्यास उत्पन्न होती है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> शरीर पर चंदन (Sandalwood) और खस (Vetiver) का ठंडा लेप (Cold paste) लगाना चाहिए।</li>
              <li>पीने के लिए <NAccent bold>षडंगपानीय</NAccent> (मुस्ता, पर्पटक, उशीर, चंदन, उदीच्य, सोंठ से सिद्ध जल) देना चाहिए।</li>
            </ul>
          </NCard>

          <NCard title="घ. मूर्च्छा (Coma / Syncope)">
            <NText className="block mb-2">विष जब मस्तिष्क (Brain) और मर्म स्थानों को प्रभावित करता है, तो रोगी बेहोश हो जाता है।</NText>
            <ul className="list-disc list-inside space-y-1 text-[var(--theme-text)]">
              <li><NText bold>उपचार:</NText> <NAccent bold>तीक्ष्ण प्रधमन नस्य</NAccent> का प्रयोग करें— कटु और तीक्ष्ण औषधियों (जैसे वचा, काली मिर्च) के चूर्ण को एक नली (Tube) द्वारा नाक में जोर से फूंका जाता है ताकि रोगी को तुरंत होश आ जाए।</li>
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
          भाग 2: Modern Toxicological Hazards
        </HandwrittenBox>
      </div>

      {/* 1. Drug-Induced Toxicity */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Drug-Induced Toxicity (औषधि जनित विषाक्तता)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Definition:</NText> Adverse or toxic reactions caused by medications prescribed for therapeutic purposes. <br/><span className="italic opacity-80">(अर्थात, इलाज के लिए दी गई दवाओं का शरीर पर पड़ने वाला भयंकर और हानिकारक दुष्प्रभाव)।</span></p>
          
          <div className="p-3 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Causes:</NAccent>
            <ul className="list-disc list-inside">
              <li><NText bold>Overdosage:</NText> Taking medicines beyond the prescribed limit (निर्धारित मात्रा से अधिक दवा लेना).</li>
              <li><NText bold>Drug Interactions:</NText> Harmful effects when two or more drugs react with each other (दवाओं का आपस में गलत रिएक्शन).</li>
            </ul>
          </div>

          <div className="p-3 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Common Examples:</NAccent>
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>Hepatotoxicity (लिवर का डैमेज होना):</NText> Caused by excessive use of Paracetamol (Acetaminophen).</li>
              <li><NText bold>Nephrotoxicity (किडनी का खराब होना):</NText> Caused by chronic overuse of NSAIDs (Painkillers like Diclofenac/Ibuprofen) or Aminoglycoside antibiotics.</li>
            </ul>
          </div>

          <p><NText bold>Management:</NText> Stop the offending drug immediately. Provide specific antidotes (e.g., N-acetylcysteine is given for Paracetamol toxicity).</p>
        </div>
      </div>

      {/* 2. Occupational Hazards */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Occupational Hazards (व्यावसायिक संकट)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Definition:</NText> Health risks or diseases that a person acquires due to the environment or working conditions of their workplace. <span className="italic opacity-80">(काम करने की जगह के वातावरण के कारण होने वाली बीमारियां).</span></p>
          
          <NText bold className="block underline decoration-[var(--theme-border)] text-lg md:text-2xl mt-4">Types of Hazards:</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2">Chemical Hazards:</NAccent>
              <NText className="block mb-1">Exposure to heavy metals in industries.</NText>
              <ul className="space-y-2">
                <li><NText bold>Lead Poisoning (Plumbism):</NText> Seen in battery makers and paint industry workers. Causes a characteristic &quot;Lead line&quot; on gums and wrist drop.</li>
                <li><NText bold>Mercury Poisoning:</NText> Seen in thermometer manufacturing. Causes tremors (हाथों का कांपना).</li>
              </ul>
            </div>
            
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2">Dust Hazards (Pneumoconiosis):</NAccent>
              <NText className="block mb-1">A group of lung diseases caused by inhaling industrial dust (फेफड़ों में धूल जमने से होने वाली बीमारी).</NText>
              <ul className="space-y-2">
                <li><NText bold>Silicosis:</NText> Caused by inhaling silica dust (Mining and pottery workers).</li>
                <li><NText bold>Asbestosis:</NText> Caused by inhaling asbestos fibers (Roofing and insulation workers).</li>
              </ul>
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
          <p><NText bold>Definition:</NText> An exaggerated immune response <span className="italic opacity-80">(Hypersensitivity - शरीर की अति-संवेदनशील प्रतिक्रिया)</span> by the body&apos;s immune system to a normally harmless substance known as an Allergen (एलर्जन).</p>
          <p><NText bold>Pathophysiology:</NText> When exposed to an allergen (like pollen, dust, or peanuts), the body&apos;s Mast cells release Histamine (हिस्टामाइन), which causes inflammation (सूजन), itching (खुजली), and mucus production.</p>
          
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/10 rounded-sm">
            <NAccent bold className="text-xl md:text-2xl block mb-2">Anaphylaxis (भयंकर एलर्जी):</NAccent>
            <p className="mb-2">A sudden, severe, and life-threatening whole-body allergic reaction. It causes a sudden drop in blood pressure (Shock) and constriction of the airway (गले में सूजन के कारण सांस रुकना).</p>
            <p><NText bold>Management:</NText></p>
            <ul className="list-disc list-inside">
              <li><NText bold>Mild Allergy:</NText> Antihistamines (e.g., Cetirizine) and Corticosteroids.</li>
              <li><NText bold>Severe (Anaphylaxis):</NText> Immediate intramuscular injection of <NAccent bold>Adrenaline (Epinephrine)</NAccent> is the only life-saving drug.</li>
            </ul>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
