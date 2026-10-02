"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter6() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 6: पर्यावरण विष विज्ञान एवं जनपदोद्ध्वंस
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Environmental Toxicology & Janapadodhvansa
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> जब विष किसी एक व्यक्ति को प्रभावित न करके पूरे समुदाय, पर्यावरण, जल, वायु और भूमि को दूषित कर दे, तो उसे आयुर्वेद में <NText bold>&apos;जनपदोद्ध्वंस&apos;</NText> और आधुनिक विज्ञान में <NText bold>&apos;Environmental Toxicology&apos;</NText> कहा जाता है। 5-mark की टिप्पणी के लिए यह एक महत्वपूर्ण अध्याय है।
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART 1: JANAPADODHVANSA                    */}
      {/* ========================================== */}
      
      <div className="flex items-center gap-3 text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 1: जनपदोद्ध्वंस (Environmental Degradation)
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. परिभाषा एवं व्युत्पत्ति (Definition)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>जनपद (Janapada):</NText> एक बड़ा समुदाय, क्षेत्र या देश की जनता।</li>
            <li><NText bold>उद्ध्वंस (Udhwamsa):</NText> विनाश या नाश होना।</li>
          </ul>
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-1">परिभाषा:</NAccent>
            <NText>आचार्य चरक के अनुसार, जब किसी एक ही समय में समान रूप से पूरे समुदाय या देश के लोगों में एक जैसी भयंकर बीमारियां <span className="italic opacity-80">(Epidemic / Pandemic)</span> फैल जाएं और सामूहिक विनाश हो, तो उसे जनपदोद्ध्वंस कहते हैं।</NText>
          </div>
        </div>
      </div>

      {/* 2. Root Cause */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. जनपदोद्ध्वंस का मूल कारण</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="leading-relaxed block">
            आचार्य चरक के अनुसार पर्यावरण प्रदूषण और महामारियों का सबसे मूल कारण <NText bold>&apos;अधर्म&apos; (Unrighteousness)</NText> और <NText bold>&apos;प्रज्ञापराध&apos; (Intellectual Blasphemy)</NText> है। जब मनुष्य अपने स्वार्थ, लोभ और लालच के कारण प्रकृति के नियमों को तोड़ता है (जैसे वनों की कटाई करना, नदियों को दूषित करना), तो प्रकृति विकृत होकर जनपदोद्ध्वंस का कारण बनती है।
          </NText>
        </div>
      </div>

      {/* 3. Four Vitiated Factors */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. जनपदोद्ध्वंस के चार प्रमुख कारक (Four Factors)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block font-bold">
          परीक्षा में (5-marks) इन चारों विकृत भावों (Polluted factors) का वर्णन अक्सर पूछा जाता है। आचार्य चरक ने इन्हें इसी क्रम में बताया है:
        </NText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">क. विकृत वायु (Polluted Air):</NAccent>
            <NText>जो हवा प्राकृतिक ऋतु के विपरीत हो, अत्यधिक ठंडी या अत्यधिक गर्म हो, बहुत तेज चल रही हो, और जिसमें से अत्यंत दुर्गंध, धूल और धुआं आ रहा हो।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">ख. विकृत जल (Polluted Water):</NAccent>
            <NText>जिस जल का प्राकृतिक रंग, गंध और स्वाद बदल गया हो। जो जल कीचड़ युक्त हो, जिसमें जलीय जीव (मछलियां/पक्षी) मर गए हों, और जिसे पीने से बीमारियां उत्पन्न हों।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">ग. विकृत देश/भूमि (Polluted Land):</NAccent>
            <NText>जिस भूमि का प्राकृतिक रंग और गंध नष्ट हो गया हो। जहां पेड़-पौधे और फसलें सूख गई हों, जहां हानिकारक कीड़े-मकोड़े, सांप और हिंसक जानवर अत्यधिक बढ़ गए हों।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">घ. विकृत काल (Polluted Season):</NAccent>
            <NText>ऋतुओं का अपने स्वभाव से विपरीत आचरण करना (Climate Change)। जैसे— बारिश के मौसम में बारिश न होना (Drought), या बिना मौसम के भयंकर बाढ़ (Flood) आ जाना।</NText>
          </div>
        </div>
      </div>

      {/* 4. Ayurvedic Management */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. जनपदोद्ध्वंस की चिकित्सा (Management)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block font-bold">
          जब पर्यावरण पूरी तरह दूषित हो जाए, तो बचाव के लिए आयुर्वेद में निम्नलिखित उपाय बताए गए हैं:
        </NText>
        
        <ul className="space-y-3 pl-6 md:pl-12 text-base md:text-xl text-[var(--theme-text)] list-disc list-inside marker:text-[var(--theme-accent)]">
          <li><NText bold>पञ्चकर्म (Panchakarma):</NText> शरीर की शुद्धि के लिए वमन, विरेचनादि कर्म करना।</li>
          <li><NText bold>रसायन चिकित्सा (Rasayana Therapy):</NText> शरीर की व्याधिक्षमत्व (Immunity / Ojas) बढ़ाने के लिए च्यवनप्राश, गिलोय आदि औषधियों का सेवन करना।</li>
          <li><NText bold>सद्वृत्त का पालन (Righteous Conduct):</NText> सत्य बोलना, दया करना, ईश्वर की प्रार्थना करना और प्रकृति का सम्मान करना।</li>
          <li><NText bold>औषधियों का पूर्व-संग्रह:</NText> प्रदूषण या महामारी फैलने से पहले ही शुद्ध भूमि से जड़ी-बूटियों को इकट्ठा करके सुरक्षित रख लेना चाहिए।</li>
        </ul>
      </div>

      {/* ========================================== */}
      {/* PART 2: MODERN ENVIRONMENTAL TOXICOLOGY    */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 2: Modern Environmental Toxicology
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Definition and Scope</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="leading-relaxed">
            Environmental Toxicology is the multidisciplinary science that studies the harmful effects of various chemical, biological, and physical agents on living organisms and their ecosystems. It focuses on how environmental pollutants spread and affect human health.
          </p>
        </div>
      </div>

      {/* 2. Air Pollution */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Air Pollution & Toxicity</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div>
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Major Pollutants:</NAccent>
            <p>Carbon Monoxide (CO), Sulfur Dioxide ($SO_2$), Nitrogen Oxides ($NO_x$), Particulate Matter (PM 2.5 and PM 10), and Industrial Smog.</p>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-accent)]/5">
            <NAccent bold className="block mb-2">Pathological & Health Effects:</NAccent>
            <ul className="space-y-3">
              <li>
                <NText bold>Carbon Monoxide Poisoning:</NText> CO has an affinity for hemoglobin that is over 200 times greater than oxygen. It binds to hemoglobin to form Carboxyhemoglobin, drastically reducing the oxygen-carrying capacity of the blood. This leads to severe tissue hypoxia, asphyxia, and potentially death.
              </li>
              <li>
                <NText bold>Respiratory Disorders:</NText> Prolonged exposure to toxic particulate matter leads to Chronic Obstructive Pulmonary Disease (COPD), bronchial asthma, and an increased risk of lung cancer.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Water Pollution */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Water Pollution & Toxicity</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div>
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Major Pollutants:</NAccent>
            <p>Heavy metals (Mercury, Lead, Cadmium, Arsenic), industrial chemical effluents, and agricultural runoff (containing pesticides and chemical fertilizers).</p>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-accent)]/5">
            <NAccent bold className="block mb-2">Pathological & Health Effects:</NAccent>
            <ul className="space-y-3">
              <li>
                <NText bold>Minamata Disease:</NText> A severe neurological syndrome caused by severe methylmercury poisoning from consuming contaminated seafood or water. It causes ataxia, numbness, and severe brain damage.
              </li>
              <li>
                <NText bold>Itai-Itai Disease:</NText> Characterized by severe, agonizing bone pain and osteomalacia (softening of bones) caused by chronic Cadmium poisoning in water bodies.
              </li>
              <li>
                <NText bold>Fluorosis:</NText> Dental and skeletal degradation due to excess fluoride in groundwater.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Soil Pollution & Ecotoxicology */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. Soil Pollution & Ecotoxicology</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div>
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">Causes:</NAccent>
            <p>Indiscriminate use of chemical fertilizers, organophosphate pesticides, and improper disposal of hazardous E-waste and plastics into landfills.</p>
          </div>

          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-2 text-lg">Key Ecotoxicological Concepts:</NAccent>
            <ul className="space-y-3">
              <li>
                <NText bold>Bioaccumulation:</NText> The gradual accumulation of toxic substances, such as heavy metals or lipophilic pesticides, in the tissues (especially adipose tissue/fat) of a single organism over its lifetime.
              </li>
              <li>
                <NText bold>Biomagnification:</NText> The increasing concentration of toxic substances as they move up successive trophic levels in a food chain. For example, a pesticide concentration in water may be very low, but as it is consumed by plankton, then small fish, then large fish, the toxicity multiplies significantly by the time it reaches humans.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Prevention & Modern Management */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>5. Prevention and Modern Management</HandwrittenBox>
        </div>
        <div className="space-y-3 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="space-y-3 list-disc list-inside">
            <li><NText bold>Emission Control:</NText> Implementation of scrubbers, electrostatic precipitators, and catalytic converters in industries and vehicles to filter toxic gases before releasing them into the atmosphere.</li>
            <li><NText bold>Effluent Treatment Plants (ETP):</NText> Mandatory chemical and biological detoxification of industrial wastewater before discharging it into natural water bodies.</li>
            <li><NText bold>Sustainable Practices:</NText> Shifting towards organic farming, utilizing bio-pesticides, and strict enforcement of environmental protection laws.</li>
          </ul>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
