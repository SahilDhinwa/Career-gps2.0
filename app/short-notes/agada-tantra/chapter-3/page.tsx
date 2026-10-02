"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter3() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 3: Vishakta Aahara & Viruddha Ahara
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          विषक्त आहार परीक्षा और विरुद्ध आहार
        </span>
      </div>

      {/* 1. Vishakta Aahara Pariksha */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            1. विषक्त आहार परीक्षा (Examination of Poisoned Food)
          </HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-4 leading-relaxed block" bold>
          प्राचीन काल में राजाओं और विशिष्ट व्यक्तियों को मारने के लिए भोजन में विष (Garavisha या Sthavara visha) मिलाए जाने की परंपरा थी। आयुर्वेद में भोजन की शुद्धता और विष की मिलावट की पहचान करने के लिए विस्तृत परीक्षण बताए गए हैं।
        </NText>

        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl">
          <NCard title="भोजन में विष के सामान्य लक्षण (General Signs)">
            <ul className="space-y-2 mt-2 text-[var(--theme-text)]">
              <li>• भोजन का रंग (Color) असामान्य रूप से नीला, काला या मलिन हो जाता है।</li>
              <li>• भोजन से अजीब, अप्रिय या तीखी गंध (Foul Smell) आने लगती है।</li>
              <li>• भोजन का स्वाद (Taste) कसैला, कड़वा या खट्टा हो जाता है।</li>
              <li>• उस भोजन पर मक्खियाँ या चींटियाँ नहीं बैठतीं, और यदि बैठती हैं तो मर जाती हैं।</li>
              <li>• चावल या अन्य अनाज को पकाने पर बर्तन के चारों ओर फेन (Froth/Bubbles) या इंद्रधनुषी रंग दिखाई देता है।</li>
            </ul>
          </NCard>

          <NCard title="विभिन्न जीवों पर विष का प्रभाव (Biological Response)">
            <ul className="space-y-2 mt-2 text-[var(--theme-text)]">
              <li>• <NText bold>सारस (Crane):</NText> विषैला भोजन देखकर प्रसन्न होता है या उसकी आवाज़ बदल जाती है।</li>
              <li>• <NText bold>मयूर (Peacock):</NText> विष के संपर्क में आने से प्रसन्न होता है (क्योंकि विष उसका प्राकृतिक आहार है)।</li>
              <li>• <NText bold>चकोर (Chakor Bird):</NText> विषैला भोजन खाने से उसकी आँखें लाल हो जाती हैं।</li>
              <li>• <NText bold>वानर (Monkey):</NText> विषैला भोजन खाने पर उसे दस्त (Diarrhea) या उल्टी होने लगती है।</li>
            </ul>
          </NCard>
        </div>
      </div>

      {/* 2. Modern Aspects of Food Poisoning & Adulteration */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            2. Modern Aspects of Food Poisoning & Adulteration
          </HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          For a 10-mark/5-mark question, linking this with modern toxicology adds high value:
        </NText>

        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-3 md:p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NText bold className="text-lg md:text-xl block mb-2 text-[var(--theme-accent)]">Food Poisoning:</NText>
            <p className="leading-relaxed mb-2">An illness caused by eating contaminated food. It is broadly classified into:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 marker:text-[var(--theme-accent)]">
              <li><NText bold>Bacterial Food Poisoning:</NText> Caused by toxins produced by bacteria such as Salmonella, Staphylococcus aureus, or Clostridium botulinum.</li>
              <li><NText bold>Chemical Food Poisoning:</NText> Caused by accidental contamination of food with heavy metals (Lead, Mercury, Arsenic) or pesticides (Organophosphates).</li>
            </ul>
          </div>

          <div className="p-3 md:p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NText bold className="text-lg md:text-xl block mb-2 text-[var(--theme-accent)]">Food Adulteration:</NText>
            <p className="leading-relaxed">
              The intentional addition or substitution of inferior, harmful, or cheaper substances into food products (e.g., Metanil yellow in turmeric, Lead chromate in spices). Modern food safety laws (such as the FSSAI regulations) govern these aspects.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Viruddha Ahara */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            3. विरुद्ध आहार (Viruddha Ahara - Incompatible Diets)
          </HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-6 leading-relaxed block" bold>
          वे खाद्य पदार्थ जो अपने गुणों, स्वभाव, या संयोग के कारण शरीर की धातुओं (Dhatus) को दूषित करते हैं और उन्हें बाहर निकालने के बजाय शरीर के अंदर रोक कर रखते हैं, उन्हें विरुद्ध आहार कहते हैं।
        </NText>

        <NText bold className="text-xl pl-3 md:pl-10 mb-3 block underline decoration-[var(--theme-border)]">
          विरुद्ध आहार के प्रकार (Types of Viruddha Ahara):
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)] mb-8">
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">1. देश विरुद्ध (Desha Viruddha):</NAccent>
            <NText>शुष्क (Dry/Arid) भूमि में उत्पन्न होने वाले गर्म और तीखे पदार्थ खाना, या नमकीन भूमि में उत्पन्न होने वाले नमकीन पदार्थ खाना।</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">2. काल विरुद्ध (Kala Viruddha):</NAccent>
            <NText>ठंडे मौसम (हेमन्त ऋतु) में ठंडी और रूखी चीजें खाना, या गर्म मौसम (ग्रीष्म ऋतु) में उष्ण (गर्म) प्रकृति के पदार्थ खाना।</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">3. अग्नि विरुद्ध (Agni Viruddha):</NAccent>
            <NText>मंद अग्नि (Weak digestion) वाले व्यक्ति द्वारा भारी भोजन करना, या तीव्र अग्नि वाले द्वारा अत्यधिक हल्का भोजन करना।</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">4. मात्रा विरुद्ध (Matra Viruddha):</NAccent>
            <NText>मधु (Honey) और घृत (Ghee) को समान मात्रा (Equal quantities) में मिला कर खाना (यह विषैला हो जाता है)।</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">5. सात्म्य विरुद्ध (Satmya Viruddha):</NAccent>
            <NText>जो आहार शरीर या मन को अनुकूल न हो (Non-habitual foods).</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">6. दोष विरुद्ध (Dosha Viruddha):</NAccent>
            <NText>ऐसे पदार्थों का सेवन करना जो किसी विशिष्ट दोष (Vata, Pitta, or Kapha) को तुरंत कुपित कर दें।</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">7. संस्कार विरुद्ध (Sanskara Viruddha):</NAccent>
            <NText>कुछ विशेष तरीकों से पकाने पर जो विषैले हो जाते हैं (जैसे- तांबे के बर्तन में दही या खट्टी चीजें रखना, या गर्म शहद का सेवन करना)।</NText>
          </div>
          <div className="p-3 border border-[var(--theme-border)] rounded-sm">
            <NAccent bold className="block mb-1">8. संयोग विरुद्ध (Sanyoga Viruddha):</NAccent>
            <NText>खट्टी चीजों के साथ दूध (Milk with sour substances like lemon or curd) या मछली के साथ दूध का सेवन करना।</NText>
          </div>
        </div>

        <NCard title="विरुद्ध आहार के उपद्रव / परिणाम (Complications)">
          <NText className="block mb-2 font-bold">लगातार विरुद्ध आहार का सेवन करने से शरीर में गंभीर बीमारियाँ हो सकती हैं:</NText>
          <ul className="space-y-2 text-[var(--theme-text)] list-disc list-inside marker:text-[var(--theme-accent)]">
            <li>अंधापन (Blindness) और त्वचा रोग जैसे कोढ़ / विसर्प (Skin disorders, Eczema, Psoriasis).</li>
            <li>नपुंसकता (Impotency) और वात-रक्त (Gout).</li>
            <li>बुखार (Fever), अम्लपित्त (Acidity), और गर्भस्राव (Abortions).</li>
            <li>गंभीर अवस्था में यह Garavisha (क्रोनिक टॉक्सिसिटी) के समान लक्षण उत्पन्न कर मृत्यु का कारण बन सकता है।</li>
          </ul>
        </NCard>
      </div>

    </HandwrittenCanvas>
  );
}
