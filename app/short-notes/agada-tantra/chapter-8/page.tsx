"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter8() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 8: अगद योगों की नैदानिक उपयोगिता
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Therapeutic Utility of Agada Yogas
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> &apos;अगद&apos; का शाब्दिक अर्थ है रोग या विष को नष्ट करने वाली औषधि (गद = विष/रोग, अ = नहीं)। महर्षि चरक, सुश्रुत और वाग्भट ने स्थावर, जाङ्गम, और कृत्रिम विषों के प्रभाव को नष्ट करने के लिए अनेक <NText bold>&apos;अगद योगों&apos; (Anti-toxic formulations)</NText> का वर्णन किया है। यह अध्याय 5-mark के प्रश्नों और 10-mark के चिकित्सा वाले प्रश्नों (जैसे सांप या बिच्छू के काटने की चिकित्सा) में उत्तर लिखने के लिए अत्यंत महत्वपूर्ण है।
        </NText>
      </div>

      {/* 1. Routes of Administration */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. अगद प्रयोग के विभिन्न मार्ग (Routes of Administration)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block text-lg">
          आयुर्वेद में विष की गंभीरता और लक्षणों के आधार पर अगद औषधियों का प्रयोग कई प्रकार से किया जाता है:
        </NText>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>पान (Oral Intake):</NAccent> विष को नष्ट करने के लिए अगद को जल, शहद, घी या दूध के साथ पिलाना।</div>
          <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>लेप (Ointment/Paste):</NAccent> दंश स्थान (Bite site) पर विष को फैलने से रोकने और जलन शांत करने के लिए लगाना।</div>
          <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>नस्य (Nasal Drops):</NAccent> मस्तिष्क में विष फैलने या रोगी के बेहोश होने (Coma) पर होश में लाने के लिए।</div>
          <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>अंजन (Collyrium):</NAccent> विष के कारण आंखों की दृष्टि कमजोर होने पर आंखों में लगाना।</div>
          <div className="p-3 border-b border-[var(--theme-border)]/30 sm:col-span-2"><NAccent bold>प्रधमन (Insufflation):</NAccent> बेहोशी दूर करने के लिए नाक में अगद चूर्ण फूंकना।</div>
        </div>
      </div>

      {/* 2. Important Agadas */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            2. प्रमुख अगद योग एवं उनकी उपयोगिता
          </HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-6 block text-lg font-bold">
          यहाँ सिलेबस के सबसे महत्वपूर्ण अगद योगों का वर्णन दिया गया है, जिन्हें आपको विभिन्न विषों की चिकित्सा में लिखना होता है:
        </NText>

        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          {/* Bilwadi Agada */}
          <NCard title="क. बिल्वादि अगद (Bilwadi Agada)">
            <NText className="block mb-2 font-bold italic opacity-80">यह आयुर्वेद का सबसे प्रसिद्ध और बहुपयोगी (Broad-spectrum) विषनाशक योग है।</NText>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>घटक (13):</NText> बिल्व मूल, तुलसी (Surasa), करंज फल, तगर, देवदारु, हरड़, बहेड़ा, आंवला, सोंठ, काली मिर्च, पिप्पली, हल्दी, और दारुहल्दी।</li>
              <li><NText bold>भावना:</NText> इन सभी द्रव्यों के चूर्ण को <NAccent bold>बकरे के मूत्र (Goat&apos;s urine)</NAccent> के साथ पीसकर गोलियां (Vati) बनाई जाती हैं।</li>
              <li>
                <NText bold>उपयोगिता:</NText> 
                <ul className="pl-6 list-[circle] list-inside mt-1 space-y-1">
                  <li>सर्प विष, वृश्चिक दंश (Scorpion), और लूता विष (Spider) में पान और लेप के लिए अत्यंत प्रभावी।</li>
                  <li>हैजा (Cholera), भयंकर ज्वर, और भूतबाधा (Psychiatric disorders) में भी उपयोगी।</li>
                </ul>
              </li>
            </ul>
          </NCard>

          {/* Dashanga Agada */}
          <NCard title="ख. दशांग अगद (Dashanga Agada)">
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>घटक (10):</NText> शिरीष, यष्टीमधु (Mulethi), तगर, रक्त चंदन, इलायची, जटामांसी, हल्दी, दारुहल्दी, कुष्ठ, और सुगन्धबाला।</li>
              <li>
                <NText bold>उपयोगिता:</NText> 
                <ul className="pl-6 list-[circle] list-inside mt-1 space-y-1">
                  <li>परीक्षा में यह <NAccent bold>लूता (Spider) और कीट दंश (Insect bites)</NAccent> की चिकित्सा के रूप में मुख्य रूप से लिखा जाता है।</li>
                  <li>यह सूजन (Edema), जलन, और चकत्तों (Rashes / Contact dermatitis) को तुरंत शांत करता है।</li>
                </ul>
              </li>
            </ul>
          </NCard>

          {/* Panchashirisha Agada */}
          <NCard title="ग. पञ्चशिरीष अगद (Panchashirisha Agada)">
            <NText className="block mb-2 font-bold italic opacity-80">आयुर्वेद में &apos;शिरीष&apos; (Albizia lebbeck) को सर्वश्रेष्ठ विषघ्न औषधि माना गया है।</NText>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>घटक (पंचांग):</NText> शिरीष वृक्ष के 5 अंग— 1. मूल (Root), 2. त्वक् (Bark), 3. पत्र (Leaves), 4. पुष्प (Flowers), 5. बीज (Seeds)।</li>
              <li><NText bold>भावना:</NText> गोमूत्र (Cow&apos;s urine)।</li>
              <li>
                <NText bold>उपयोगिता:</NText> 
                <ul className="pl-6 list-[circle] list-inside mt-1 space-y-1">
                  <li>सभी प्रकार के घातक विषों (सर्व विषहर) को नष्ट करने में।</li>
                  <li>विशेष रूप से विष उपद्रव जैसे— <NAccent bold>विष जनित श्वास (Asthma) और कास (Cough)</NAccent> की चिकित्सा में।</li>
                </ul>
              </li>
            </ul>
          </NCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Murvadi Agada */}
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2 text-xl">घ. मूर्वादि अगद (Murvadi Agada)</NAccent>
              <ul className="space-y-2 text-[var(--theme-text)]">
                <li><NText bold>घटक:</NText> मूर्वा, अमृता (गिलोय), नत, तगर, पटोल पत्र आदि।</li>
                <li><NText bold>उपयोगिता:</NText> परीक्षा के दृष्टिकोण से, यह <NAccent bold>गरविष (Artificial Poison)</NAccent> की मुख्य और सर्वश्रेष्ठ चिकित्सा है। गरविष के कारण शरीर में जो कृशता (Emaciation) और पांडु (Anemia) उत्पन्न होता है, यह योग उसे ठीक कर धातुओं को पोषण देता है।</li>
              </ul>
            </div>

            {/* Dooshivishaari Agada */}
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-2 text-xl">ङ. दूषीविषारि अगद (Dooshivishaari)</NAccent>
              <ul className="space-y-2 text-[var(--theme-text)]">
                <li><NText bold>घटक:</NText> पिप्पली, ध्यानक, जटामांसी, लोध्र, सुवर्चिका, छोटी इलायची, सुवर्ण गैरिक, और कुटज।</li>
                <li><NText bold>उपयोगिता:</NText> शरीर में लंबे समय से छिपे हुए <NAccent bold>दूषीविष (Latent poison)</NAccent> को नष्ट करने में। दूषीविष के कारण होने वाले गंभीर चर्म रोगों (मण्डल) और एलर्जी को शांत करने में।</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Gold in Toxicology */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. विष चिकित्सा में स्वर्ण (Gold) का नैदानिक महत्व</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p>अगद तन्त्र में विषनाशक औषधियों के साथ-साथ स्वर्ण भस्म (Swarna Bhasma) या सुवर्ण प्राशन का विशेष महत्व बताया गया है:</p>
          
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 text-center">
            <NText className="block mb-2 font-bold opacity-80 text-sm md:text-base">— सिद्धांत —</NText>
            <NAccent className="italic font-bold text-lg md:text-xl">&quot;हेम सर्व विषं हन्ति&quot;</NAccent>
            <NText className="block mt-2 text-sm md:text-base">(स्वर्ण सभी प्रकार के विषों को नष्ट करता है)।</NText>
          </div>

          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-4">
            <NAccent bold className="block mb-1">उपयोगिता:</NAccent>
            <p>विष के कारण जब हृदय (Heart) और ओज (Immunity) क्षीण होने लगते हैं, तो स्वर्ण भस्म विष को हृदय में प्रवेश करने से रोकती है <NText bold>(हृदयावरण)</NText>। यह गरविष और सभी जीर्ण विषाक्तताओं (Chronic toxicities) में इम्युनिटी (Vyadhikshamatva) बढ़ाने का कार्य करती है।</p>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
