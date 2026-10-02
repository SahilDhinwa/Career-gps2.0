"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NList, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter1() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 1: Concepts of Agada Tantra
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1">
          अगद तन्त्र के मूल सिद्धांत
        </span>
      </div>

      {/* 1. Introduction & Definitions */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. परिचय और परिभाषा (Intro & Definitions)</HandwrittenBox>
        </div>
        <NList>
          <li className="leading-relaxed">
            <NAccent className="mr-1 md:mr-2">»</NAccent>
            <NText bold className="underline decoration-[var(--theme-border)]">अगद तन्त्र (Agada Tantra):</NText> यह अष्टांग आयुर्वेद की एक प्रमुख शाखा है। &apos;गद&apos; का अर्थ है रोग या विष, और &apos;अगद&apos; का अर्थ है जो विष को नष्ट करे। यह शाखा विषैले जीवों, पौधों और धातुओं के प्रभाव, लक्षणों और उनकी चिकित्सा से संबंधित है।
          </li>
          <li className="leading-relaxed p-3 md:p-4 border-l-2 md:border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-2">
            <NText bold className="text-lg md:text-2xl block mb-1">विष (Visha):</NText>
            जो पदार्थ शरीर में प्रवेश कर विषाद (भयंकर कष्ट या अवसाद) उत्पन्न करे, उसे विष कहते हैं। <br/>
            <NAccent className="italic text-sm md:text-lg">&quot;विषाद जननत्वाच्च विषमित्यभिधीयते&quot;</NAccent><br/>
            विष शरीर के दोष (Dosha), धातु (Dhatu) और मल (Mala) को बहुत तेजी से दूषित कर प्राणों का नाश करता है।
          </li>
        </NList>
      </div>

      {/* 2. Modern Toxicological Concepts */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Modern Toxicological Concepts</HandwrittenBox>
        </div>
        <NAccent className="text-sm md:text-lg pl-3 md:pl-10 mb-3 md:mb-4 italic block">
          *For a 10-mark question, distinguishing between these modern terms is mandatory:
        </NAccent>
        <NList>
          <li><NText bold>Toxicology:</NText> The scientific study of adverse effects that occur in living organisms due to chemicals, poisons, or toxins.</li>
          <li><NText bold>Poison:</NText> Any substance causing harm via a <NAccent>passive entry mechanism</NAccent> (ingested, inhaled, or absorbed). E.g., Heavy metals, Cyanide.</li>
          <li><NText bold>Venom:</NText> A specialized biological poison <NAccent>actively injected</NAccent> through a physical apparatus (fangs, stinger).</li>
          <li><NText bold>Toxin:</NText> A poisonous substance produced <NAccent>naturally within living cells</NAccent> (e.g., Bacterial toxins, Ricin).</li>
        </NList>
      </div>

      {/* 3. Properties of Visha (10 Properties) */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. विष के १० गुण (10 Properties of Visha)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 md:mb-6 leading-relaxed border-b-2 border-dashed border-[var(--theme-border)] pb-3 md:pb-4 block" bold>
          आचार्य चरक और सुश्रुत के अनुसार विष के गुण शरीर के <NAccent>ओजस् (Ojas - Immunity)</NAccent> के गुणों के ठीक विपरीत होते हैं:
        </NText>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">1.</span> <span><NAccent>लघु (Laghu):</NAccent> हल्का - सभी मार्गों में तेजी से फैलता है।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">2.</span> <span><NAccent>रूक्ष (Ruksha):</NAccent> सूखा - वात दोष कुपित।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">3.</span> <span><NAccent>आशु (Ashu):</NAccent> शीघ्र - प्रवेश करते ही असर।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">4.</span> <span><NAccent>विशद (Vishada):</NAccent> स्पष्ट - बिना रुके फैलता है।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">5.</span> <span><NAccent>व्यवायी (Vyavayi):</NAccent> पचने से पहले फैलना।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">6.</span> <span><NAccent>विकाशी (Vikashi):</NAccent> ओज का नाश।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">7.</span> <span><NAccent>सूक्ष्म (Sukshma):</NAccent> छोटे स्रोतों में प्रवेश।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">8.</span> <span><NAccent>उष्ण (Ushna):</NAccent> गर्म - पित्त/रक्त को दूषित।</span></div>
          <div className="flex gap-1 md:gap-2"><span className="opacity-70 font-bold">9.</span> <span><NAccent>तीक्ष्ण (Tikshna):</NAccent> भेदक - मर्म नष्ट करना।</span></div>
          <div className="flex gap-1 md:gap-2 sm:col-span-2"><span className="opacity-70 font-bold">10.</span> <span><NAccent>अपाकी (Apaki):</NAccent> पचता नहीं है।</span></div>
        </div>
      </div>

      {/* 4. Sites of Visha */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. विष के अधिष्ठान (Sites)</HandwrittenBox>
        </div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 pl-1 md:pl-8">
          <NCard title="स्थावर विष (Sthavara)">
            <NText bold className="mb-1 md:mb-2 text-sm md:text-base block">Plant/Mineral Origin (10):</NText>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[var(--theme-text)]">
              <li>• मूल (Root)</li><li>• पत्र (Leaves)</li>
              <li>• फल (Fruit)</li><li>• पुष्प (Flower)</li>
              <li>• त्वक् (Bark)</li><li>• क्षीर (Latex)</li>
              <li>• सार (Wood)</li><li>• निर्यास (Resin)</li>
              <li>• धातु (Minerals)</li><li>• कन्द (Bulb)</li>
            </ul>
          </NCard>

          <NCard title="जाङ्गम विष (Jangama)">
            <NText bold className="mb-1 md:mb-2 text-sm md:text-base block">Animal Origin (16 - प्रमुख):</NText>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[var(--theme-text)]">
              <li>• दृष्टि (Gaze)</li><li>• निःश्वास (Breath)</li>
              <li>• दंष्ट्रा (Fangs)</li><li>• नख (Nails)</li>
              <li>• मूत्र (Urine)</li><li>• पुरीष (Feces)</li>
              <li>• शुक्र (Semen)</li><li>• लाला (Saliva)</li>
              <li>• आर्तव (Menses)</li><li>• अस्थि (Bone)</li>
            </ul>
          </NCard>
        </div>
      </div>

      {/* 5. Movement of Poison */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>5. विष की गति (Movement of Poison)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block text-lg md:text-xl font-bold">
          शरीर में दोषों के आधार पर विष 3 दिशाओं में गति करता है:
        </NText>
        <ul className="space-y-3 md:space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <li className="flex gap-2 md:gap-3">
            <NAccent bold>↑</NAccent>
            <span><NText bold>ऊर्ध्व गति (Urdhwa):</NText> वात और कफ (Vata-Kapha) की प्रधानता। <br/><span className="italic opacity-80">(लक्षण: उल्टी, श्वास कष्ट)</span></span>
          </li>
          <li className="flex gap-2 md:gap-3">
            <NAccent bold>↓</NAccent>
            <span><NText bold>अधो गति (Adho):</NText> वात और पित्त (Vata-Pitta) की प्रधानता। <br/><span className="italic opacity-80">(लक्षण: दस्त, मूत्र में रक्त)</span></span>
          </li>
          <li className="flex gap-2 md:gap-3">
            <NAccent bold>↔</NAccent>
            <span><NText bold>तिर्यक् गति (Tiryak):</NText> विष बाहरी हिस्सों (त्वचा/मांसपेशियां) में फैलता है। <br/><span className="italic opacity-80">(लक्षण: चकत्ते, सूजन)</span></span>
          </li>
        </ul>
      </div>

      {/* 6. Modern Toxicokinetics */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>6. Modern Toxicokinetics</HandwrittenBox>
        </div>
        
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="mb-6">
            <NAccent bold className="block mb-2 underline decoration-[var(--theme-border)]">Routes of Administration:</NAccent>
            <p className="leading-relaxed">
              Poisons can enter the body via Inhalation (lungs), Ingestion (GI tract), Injection (IV/IM), or Absorption (skin/mucous membranes).
            </p>
          </div>

          <div>
            <NAccent bold className="block mb-2 underline decoration-[var(--theme-border)]">Mode of Action:</NAccent>
            <ul className="space-y-2 md:space-y-3 list-disc list-inside">
              <li><NText bold>Local Action:</NText> Destruction or irritation at the site of contact (e.g., Corrosive acids).</li>
              <li><NText bold>Systemic Action:</NText> Absorbed into the bloodstream affecting distant organs (e.g., Neurotoxins).</li>
              <li><NText bold>Combined Action:</NText> Exhibits both local and systemic effects (e.g., Carbolic acid).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 7. Factors Modifying Action of Poison */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>7. विष के प्रभाव को बदलने वाले कारक (Factors Modifying Poison)</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="leading-relaxed block mb-6">
            विष हमेशा एक जैसा असर नहीं करता। कुछ विशेष परिस्थितियों (Factors) के कारण विष का प्रभाव (Toxicity) या तो बहुत भयंकर हो जाता है या कम हो जाता है। परीक्षा (5-marks) के लिए इसे आयुर्वेद और आधुनिक दोनों दृष्टिकोणों से लिखना चाहिए:
          </NText>

          <NCard title="1. आयुर्वेदिक दृष्टिकोण (Ayurvedic Factors)">
            <NText className="block mb-3 font-bold opacity-80">आचार्य सुश्रुत के अनुसार विष निम्नलिखित भावों के आधार पर अपना प्रभाव बदलता है:</NText>
            <ul className="space-y-3 list-disc list-inside">
              <li><NText bold>देश (Desha - Habitat/Place):</NText> यदि विष &apos;अनूप देश&apos; (Marshy/Wet land) में उत्पन्न हुआ हो या रोगी वहां रहता हो, तो कफ दोष के बढ़ने से विष का प्रभाव अधिक घातक होता है।</li>
              <li><NText bold>काल (Kala - Season/Time):</NText> &apos;ग्रीष्म ऋतु&apos; (Summer) और &apos;शरद ऋतु&apos; (Autumn) में पित्त के प्रकोप के कारण विष बहुत तेजी से फैलता है। बादल छाए रहने (दुर्दिन) पर विष अधिक कुपित होता है।</li>
              <li><NText bold>प्रकृति (Prakriti - Constitution):</NText> यदि विष के गुण और व्यक्ति की प्रकृति समान हों (जैसे पित्त प्रकृति वाले व्यक्ति को उष्ण विष का काटना), तो मृत्यु शीघ्र होती है।</li>
              <li><NText bold>सात्म्य (Satmya - Tolerance):</NText> यदि कोई व्यक्ति रोज़ थोड़ी-थोड़ी मात्रा में विष का सेवन करता है (जैसे अफीम या तंबाकू खाने की आदत), तो उसका शरीर विष का अभ्यस्त (Tolerant) हो जाता है और घातक मात्रा भी उस पर असर नहीं करती।</li>
            </ul>
          </NCard>

          <div className="mt-6">
            <NCard title="2. Modern Toxicological Concepts">
              <ul className="space-y-4 list-disc list-inside">
                <li>
                  <NText bold>Quantity / Dose (मात्रा):</NText> A large dose usually produces acute, fatal toxicity, whereas small, repeated doses produce chronic toxicity. <span className="italic opacity-80">(However, idiosyncrasy can make even a small dose fatal).</span>
                </li>
                <li>
                  <NText bold>Route of Administration (प्रवेश का मार्ग):</NText> The toxicity is highest and fastest if the poison enters through Intravenous (IV) injection or Inhalation (lungs). It is comparatively slower if ingested orally due to liver metabolism (First-pass effect).
                </li>
                <li>
                  <NText bold>State of the Poison (विष की भौतिक स्थिति):</NText>
                  <ul className="list-[circle] list-inside pl-6 mt-2 space-y-1">
                    <li><NAccent bold>Physical state:</NAccent> Gases and liquids are absorbed much faster than solid pills or powders.</li>
                    <li><NAccent bold>Chemical state:</NAccent> Poisons act rapidly when dissolved in water or alcohol (e.g., Arsenic is more toxic in a soluble form).</li>
                  </ul>
                </li>
                <li>
                  <NText bold>Age and Health of the Patient (उम्र और स्वास्थ्य):</NText> Infants and the elderly are highly susceptible to poisons due to weaker liver and kidney functions. A healthy adult can resist toxicity better.
                </li>
                <li>
                  <NText bold>Stomach Contents (आमाशय की स्थिति):</NText> A poison consumed on an empty stomach is absorbed immediately. If the stomach is full of food (especially fatty food), the absorption of the poison is delayed.
                </li>
              </ul>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 8. MISSING TOPICS / EXAM ESSENTIALS          */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            8. NCISM Syllabus - Additional Exam Topics
          </HandwrittenBox>
        </div>
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">1. विष, मद्य और ओज के गुणों में अंतर (Diff b/w Visha, Madya & Oja):</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>ओज (Ojas):</NText> शरीर की इम्युनिटी। इसके 10 गुण होते हैं (गुरु, शीत, मृदु, श्लक्ष्ण, बहल, मधुर, स्थिर, प्रसन्न, पिच्छिल, स्निग्ध)।</li>
              <li><NText bold>विष (Visha):</NText> ओज के बिल्कुल विपरीत 10 गुण (लघु, उष्ण, तीक्ष्ण, रूक्ष, आशु, व्यवायी, विकाशी, सूक्ष्म, विशद, <NAccent bold>अपाकी</NAccent>)।</li>
              <li><NText bold>मद्य (Madya / Alcohol):</NText> मद्य में विष के समान ही गुण होते हैं, केवल एक गुण का अंतर होता है। विष में &apos;अपाकी&apos; (जो न पचे) गुण होता है, जबकि मद्य में <NAccent bold>&apos;अम्ल&apos; (Sour)</NAccent> रस होता है।</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">2. विष वर्धक भाव एवं विष संकट (Visha Vardhaka & Sankata):</NAccent>
            <ul className="space-y-2">
              <li><NText bold>विष वर्धक भाव:</NText> वे कारण जो विष के प्रभाव को बढ़ा देते हैं (जैसे- क्रोध करना, भूख, धूप में घूमना, और तिल/कुलत्थ/शराब का सेवन)।</li>
              <li><NText bold>विष संकट:</NText> जब तीन प्रतिकूल परिस्थितियां एक साथ मिल जाएं, तो उसे विष संकट कहते हैं (यह मृत्यु का कारण बनता है)। <br/>१. विष की प्रकृति, २. रोगी की प्रकृति, और ३. काल (Season) — यदि तीनों समान हों (जैसे पित्त प्रकृति वाले को ग्रीष्म ऋतु में पित्त-प्रकोपक विष का काटना)।</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">3. विषवेग और वेगान्तर (Vishavega & Vegantara):</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>विषवेग (Poisonous Impulse):</NText> शरीर की 7 कलाओं (Kalas - Layers) को विष द्वारा एक-एक करके पार करने की अवस्था को &apos;विषवेग&apos; कहते हैं। मनुष्य में 7 विषवेग (7 stages of poisoning) होते हैं।</li>
              <li><NText bold>वेगान्तर:</NText> एक कला से दूसरी कला में विष के जाने के बीच का जो समय (Time interval) होता है, उसे &apos;वेगान्तर&apos; कहते हैं। इसी समय में चिकित्सक को चिकित्सा (Antidote) करनी चाहिए।</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">4. विष पीत और विषमुक्त लक्षण (Signs of Recovery):</NAccent>
            <p>जब विष पूरी तरह शरीर से निकल जाता है, तो रोगी के दोष अपनी प्राकृत अवस्था में आ जाते हैं, जीभ का रंग सामान्य हो जाता है, भूख लगने लगती है (अग्नि दीप्ति), और इन्द्रियां (Senses) ठीक से काम करने लगती हैं।</p>
          </div>

        </div>
      </div>

    </HandwrittenCanvas>
  );
}
