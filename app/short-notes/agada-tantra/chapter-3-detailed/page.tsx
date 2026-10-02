"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter3() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 3: विषाक्त आहार परीक्षा एवं विरुद्ध आहार
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Examination of Poisoned Food & Incompatible Diet
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> प्राचीन काल में राजाओं, विशिष्ट व्यक्तियों और युद्ध के दौरान शत्रुओं को मारने के लिए भोजन में विष (गरविष या स्थावर विष) मिलाए जाने की प्रथा थी। आयुर्वेद में ऐसे विषाक्त भोजन की पहचान करने और उससे बचने के विस्तृत उपाय बताए गए हैं। इसके अतिरिक्त, जो आहार स्वभाव से विषैला न होते हुए भी गलत संयोग (Wrong combination) के कारण शरीर में विष के समान कार्य करता है, उसे <NText bold>विरुद्ध आहार</NText> कहते हैं।
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART 1: VISHAKTA AAHARA PARIKSHA             */}
      {/* ========================================== */}
      
      <div className="flex items-center gap-3 text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 1: विषाक्त आहार परीक्षा
        </HandwrittenBox>
      </div>

      <NText className="pl-3 md:pl-10 mb-6 block text-xl text-center font-bold opacity-80">
        आयुर्वेद में विषैले भोजन की पहचान दो तरीकों से की जाती है: अन्न (भोजन) के भौतिक लक्षणों द्वारा, और विभिन्न जंतुओं (Animals) पर उसके प्रभाव द्वारा।
      </NText>

      {/* 1. Physical Signs */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            1. विषाक्त भोजन के सामान्य भौतिक लक्षण (Physical Signs)
          </HandwrittenBox>
        </div>

        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="text-lg md:text-xl block mb-2 underline decoration-[var(--theme-border)]">रंग और गंध (Color & Smell):</NAccent>
            <NText>भोजन का रंग अचानक मलिन, काला, या नीला हो जाता है। उसमें से अत्यंत तीखी, अप्रिय या मुर्दे जैसी गंध (Foul/Cadaverous smell) आने लगती है।</NText>
          </div>
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="text-lg md:text-xl block mb-2 underline decoration-[var(--theme-border)]">स्वाद (Taste):</NAccent>
            <NText>भोजन का प्राकृतिक स्वाद बदल जाता है, वह खट्टा, कसैला या कड़वा (Astringent/Bitter) हो जाता है।</NText>
          </div>
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="text-lg md:text-xl block mb-2 underline decoration-[var(--theme-border)]">पकाने पर प्रभाव (During Cooking):</NAccent>
            <NText>जब विषैले अन्न को आग पर पकाया जाता है, तो आग की लपटें मयूर के कंठ (Peacock&apos;s neck) के समान नीली या इंद्रधनुषी रंग की हो जाती हैं, तीखा धुआं निकलता है जो आंखों और सिर में दर्द पैदा करता है, और बर्तन के किनारों पर फेन (Froth) आ जाता है।</NText>
          </div>
        </div>
      </div>

      {/* 2. Effects on Animals */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            2. विषाक्त आहार का जंतुओं पर प्रभाव (Effects on Animals)
          </HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          यह प्रश्न परीक्षाओं में लगातार (PYQ) पूछा जाता है। प्राचीन काल में भोजन राजा को परोसने से पहले परीक्षण के लिए पशु-पक्षियों के सामने रखा जाता था:
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NCard><NAccent bold>मयूर (Peacock):</NAccent> विषैले भोजन को देखकर मयूर अत्यंत प्रसन्न हो जाता है (क्योंकि विष उसका प्राकृतिक आहार है) और उसकी चाल तेज हो जाती है।</NCard>
          <NCard><NAccent bold>चकोर (Chakor):</NAccent> विषैले भोजन को देखते ही चकोर पक्षी की आँखें लाल (Red) हो जाती हैं।</NCard>
          <NCard><NAccent bold>वानर (Monkey):</NAccent> वानर यदि विषैला भोजन खा ले या देख ले तो उसे मल-मूत्र का त्याग (Diarrhea) होने लगता है।</NCard>
          <NCard><NAccent bold>सारस (Crane):</NAccent> विषैले अन्न को देखकर सारस पक्षी की आवाज़ बदल जाती है या वह अजीब आवाज़ निकालने लगता है।</NCard>
          <NCard><NAccent bold>मक्खी (Housefly):</NAccent> विषैले भोजन पर मक्खियां नहीं बैठतीं, और यदि बैठ जाएं तो तुरंत मर जाती हैं।</NCard>
          <NCard><NAccent bold>कुत्ता (Dog) एवं कौवा (Crow):</NAccent> भोजन खाने पर कौवे की आवाज़ क्षीण हो जाती है, और कुत्ता सुस्त होकर उल्टियां (Vomiting) करने लगता है।</NCard>
        </div>
      </div>

      {/* 3. Modern Aspects */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            3. Modern Aspects of Food Poisoning (आधुनिक परिप्रेक्ष्य)
          </HandwrittenBox>
        </div>

        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-lg md:text-xl block mb-1">Food Poisoning:</NAccent>
            <p>Ingestion of food contaminated with pathogenic microorganisms (like Salmonella, Staphylococcus aureus) or their toxins.</p>
          </div>

          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-lg md:text-xl block mb-1">Food Adulteration:</NAccent>
            <p>Intentional addition of harmful substances (e.g., Metanil yellow in turmeric, Argemone seeds in mustard oil) which acts as a slow poison, similar to the concept of Garavisha.</p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: VIRUDDHA AHARA                     */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 2: विरुद्ध आहार (Viruddha Ahara)
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. परिभाषा (Definition)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p>जो आहार या औषध शरीर के दोषों (Vata, Pitta, Kapha) को तो कुपित कर दे, लेकिन उन्हें शरीर से बाहर न निकाल पाए, उसे विरुद्ध आहार कहते हैं。</p>
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm text-center">
            <NAccent className="italic font-bold text-lg md:text-xl">&quot;यत् किञ्चित् दोषमुत्क्लिश्य न हरेत् तत् समासतः विरुद्धम्।&quot;</NAccent>
            <p className="text-sm font-sans mt-2 opacity-70">— चरक संहिता</p>
          </div>
          <p><NText bold>सरल शब्दों में:</NText> वे खाद्य पदार्थ जो गलत संयोग, गलत मात्रा या गलत समय पर खाने से शरीर की धातुओं को दूषित करते हैं, विरुद्ध आहार कहलाते हैं। यह शरीर में <NAccent bold>Endogenous Toxins (आम विष)</NAccent> बनाता है।</p>
        </div>
      </div>

      {/* 2. Types of Viruddha Ahara */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. विरुद्ध आहार के प्रकार (Types)</HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-6 leading-relaxed block" bold>
          आचार्य चरक ने 18 प्रकार के विरुद्ध आहार बताए हैं। परीक्षा के लिए प्रमुख 5-6 प्रकार लिखना पर्याप्त है:
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">संयोग विरुद्ध (Sanyoga Viruddha):</NAccent>
            <NText>गलत चीजों को मिलाना। <br/><NText bold>उदाहरण:</NText> मछली (Fish) के साथ दूध (Milk) पीना, या दूध के साथ खट्टे फल खाना।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">मात्रा विरुद्ध (Matra Viruddha):</NAccent>
            <NText>गलत अनुपात में मिलाना। <br/><NText bold>उदाहरण:</NText> समान मात्रा (Equal proportion) में शहद (Honey) और घी (Ghee) मिलाकर खाना विष के समान होता है।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">संस्कार विरुद्ध (Sanskara Viruddha):</NAccent>
            <NText>गलत तरीके से पकाना। <br/><NText bold>उदाहरण:</NText> शहद को गर्म करके खाना, या तांबे के बर्तन (Copper vessel) में खट्टी चीजें (दही/नींबू) रखकर खाना।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm bg-[var(--theme-accent)]/5">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">देश विरुद्ध (Desha Viruddha):</NAccent>
            <NText>स्थान के विपरीत आहार। <br/><NText bold>उदाहरण:</NText> रूखे (Arid/Desert) स्थान पर अत्यंत रूखा और तीखा भोजन करना।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">काल विरुद्ध (Kala Viruddha):</NAccent>
            <NText>समय/ऋतु के विपरीत आहार। <br/><NText bold>उदाहरण:</NText> अत्यधिक सर्दियों में ठंडी और रूखी चीजें (Cold items) खाना।</NText>
          </div>
          <div className="p-4 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1 underline decoration-[var(--theme-border)]">अग्नि विरुद्ध (Agni Viruddha):</NAccent>
            <NText>पाचन शक्ति के विपरीत। <br/><NText bold>उदाहरण:</NText> भूख न होने पर भी भारी (Heavy) भोजन करना।</NText>
          </div>
        </div>
      </div>

      {/* 3. Complications */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            3. विरुद्ध आहार जनित विकार (Diseases Caused)
          </HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block text-lg md:text-xl font-bold">
          यह 5-mark के प्रश्न का सबसे महत्वपूर्ण हिस्सा है। लगातार विरुद्ध आहार खाने से शरीर में भयानक बीमारियां उत्पन्न होती हैं:
        </NText>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)] list-disc list-inside marker:text-[var(--theme-accent)]">
          <li><NText bold>त्वचा विकार (Skin):</NText> विसर्प (Erysipelas), कोढ़ (Kushta/Leprosy), और सफेद दाग (Leucoderma)।</li>
          <li><NText bold>प्रजनन विकार (Reproductive):</NText> षण्ढत्व (Impotency/Infertility) और गर्भस्राव (Abortions)।</li>
          <li><NText bold>उदर विकार (GI Disorders):</NText> जलोदर (Ascites), ग्रहणी (Sprue/IBS), और भयंकर अम्लपित्त (Hyperacidity)।</li>
          <li><NText bold>अन्य गंभीर रोग:</NText> अंधापन (Blindness), उन्माद (Insanity), भगन्दर (Fistula), और अंततः यह मृत्यु (Death) का कारण भी बन सकता है।</li>
        </ul>
      </div>

      {/* 4. Treatment */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. विरुद्ध आहार की चिकित्सा (Treatment)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block text-lg md:text-xl font-bold">
          विरुद्ध आहार से उत्पन्न रोगों को ठीक करने के लिए आयुर्वेद में तीन मुख्य चिकित्सा सूत्र बताए गए हैं:
        </NText>

        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-xl md:text-2xl block mb-2">क. शोधन चिकित्सा (Purification Therapy):</NAccent>
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>वमन (Emesis):</NText> यदि दूषित आहार आमाशय (Stomach) में हो, तो उल्टी करवाकर विषैले प्रभाव को बाहर निकालें।</li>
              <li><NText bold>विरेचन (Purgation):</NText> यदि दोष पक्वाशय (Intestines) में पहुँच गए हों, तो दस्त करवाकर शरीर की शुद्धि करें।</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-xl md:text-2xl block mb-2">ख. शमन चिकित्सा (Pacification Therapy):</NAccent>
            <ul className="list-disc list-inside space-y-2">
              <li>दोषों की शुद्धि के बाद, शरीर में बचे हुए प्रभाव को शांत करने के लिए विपरीत गुणों वाली औषधियों (Antidotes) का प्रयोग करें।</li>
              <li><NText bold>दूषीविषारि अगद</NText> और <NText bold>स्वर्ण भस्म</NText> का प्रयोग अत्यंत लाभकारी है।</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-xl md:text-2xl block mb-2">ग. अभ्यास और सात्म्य (Gradual Adaptation):</NAccent>
            <NText>यदि किसी व्यक्ति को विरुद्ध आहार खाने की आदत (Addiction/Habit) पड़ गई है, तो उसे एकदम से न छुड़वाकर, <NText bold>धीरे-धीरे (Gradually)</NText> छुड़वाना चाहिए और हितकर आहार का अभ्यास कराना चाहिए।</NText>
          </div>
        </div>
      </div>
      {/* ========================================== */}
      {/* ADDITIONAL EXAM TOPICS (NCISM SYLLABUS)      */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            Additional Exam Topics (NCISM)
          </HandwrittenBox>
        </div>
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">1. आमविष (Amavisha):</NAccent>
            <p>अग्निमांद्य (Weak digestion) के कारण जब भोजन ठीक से नहीं पचता, तो वह पेट में सड़ने लगता है। इस सड़े हुए अन्न रस को &apos;आम&apos; कहते हैं। जब यह आम शरीर में बहुत अधिक रुक जाता है, तो यह विष के समान भयंकर लक्षण (उल्टी, दस्त, मूर्च्छा) उत्पन्न करता है, जिसे <NText bold>आमविष</NText> कहते हैं।</p>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">2. आधुनिक विष परीक्षण तकनीकें (Analytical Techniques):</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Chromatography:</NText> (TLC, HPLC, Gas Chromatography) - Used to separate and identify complex organic poisons and drugs in blood or urine.</li>
              <li><NText bold>Mass Spectrometry (MS):</NText> Used to find the exact molecular weight and structure of the unknown toxin.</li>
            </ul>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
