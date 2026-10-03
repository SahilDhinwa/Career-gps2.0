"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter18() {
  return (
    <HandwrittenCanvas>
      {/* FIXED VERCEL ERROR: Removed JSX fragment from badge */}
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 18: Personal Identity
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          वैयक्तिक पहचान (Personal Identification)
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> वैयक्तिक पहचान (Personal Identity / Corpus Delicti) का अर्थ है किसी जीवित व्यक्ति, मृत शरीर (Dead body) या कंकाल (Skeleton) की सटीक पहचान करना कि वह कौन है। फॉरेंसिक मेडिसिन में इसकी आवश्यकता तब पड़ती है जब कोई अज्ञात शव मिलता है, या हत्या, संपत्ति विवाद और दुर्घटनाओं में सही व्यक्ति की शिनाख्त करनी होती है।
        </NText>
      </div>

      {/* ========================================== */}
      {/* 1. PARAMETERS OF PERSONAL IDENTIFICATION     */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          1. वैयक्तिक पहचान के सहायक बिंदु
        </HandwrittenBox>
      </div>

      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में यह 10-mark का प्रश्न पूछा गया है: &quot;Describe all useful factors in personal identification&quot;. The identification of an individual depends on several physical and biological factors: (किसी व्यक्ति की पहचान कई शारीरिक और जैविक कारकों पर निर्भर करती है:)
      </NText>

      <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
        
        <NCard title="A. Sex (लिंग)">
          <ul className="space-y-2 list-disc list-inside mt-2">
            <li>Sex is primarily determined by external genitalia in living persons and fresh corpses. (जीवित व्यक्तियों और ताजे शवों में लिंग का निर्धारण मुख्य रूप से बाहरी जननांगों द्वारा किया जाता है।)</li>
            <li>In the case of skeletons, the pelvis (hip bone) and the skull provide the most reliable differences between males and females. (कंकालों के मामले में, श्रोणि (पेल्विस) और खोपड़ी पुरुषों और महिलाओं के बीच सबसे सटीक और विश्वसनीय अंतर बताते हैं।)</li>
          </ul>
        </NCard>

        <NCard title="B. Age (आयु)">
          <ul className="space-y-2 list-disc list-inside mt-2">
            <li>Age is determined scientifically by the eruption of teeth, the fusion of bone epiphyses, and the closure of skull sutures. (आयु का निर्धारण वैज्ञानिक रूप से दांतों के निकलने, हड्डियों के सिरों (एपिफाइसिस) के जुड़ने, और खोपड़ी के टांकों के बंद होने से किया जाता है।)</li>
            <li><NText bold className="text-[var(--theme-accent)]">(PYQ Fact):</NText> The total number of temporary or milk teeth in a human is 20. (एक मनुष्य में अस्थायी या दूध के दांतों की कुल संख्या 20 होती है।)</li>
          </ul>
        </NCard>

        <NCard title="C. Stature (कद / ऊंचाई)">
          <p className="mt-2">The exact height of a dead person can be calculated by measuring long bones (like the femur or humerus) using specific mathematical formulae. (मृत व्यक्ति की सटीक ऊंचाई की गणना फीमर या ह्यूमरस जैसी लंबी हड्डियों को मापकर विशिष्ट गणितीय सूत्रों द्वारा की जा सकती है।)</p>
        </NCard>

        <NCard title="D. Race and Religion (नस्ल और धर्म)">
          <p className="mt-2">Race is identified by skull shape and cephalic index, while religion can sometimes be inferred from circumcision or specific religious tattoos. (नस्ल की पहचान खोपड़ी के आकार से की जाती है, जबकि धर्म का अनुमान कभी-कभी खतना या विशिष्ट धार्मिक टैटू से लगाया जा सकता है।)</p>
        </NCard>

        <NCard title="E. Scars and Tattoos (चोट के निशान और टैटू)">
          <p className="mt-2">Scars and tattoos are permanent marks on the skin that do not disappear over time, making them absolute points of identification. (चोट के निशान और टैटू त्वचा पर स्थायी निशान होते हैं जो समय के साथ गायब नहीं होते, जिससे वे पहचान के अचूक बिंदु बन जाते हैं।)</p>
        </NCard>

        <NCard title="F. Occupational Marks (व्यावसायिक चिह्न)">
          <p className="mt-2">Hard physical labor or specific jobs leave permanent calluses or marks on the body, such as a tailor&apos;s pricked fingers or a writer&apos;s callosities. (कठिन शारीरिक परिश्रम या विशिष्ट नौकरियां शरीर पर स्थायी गट्टे या निशान छोड़ देती हैं, जैसे दर्जी की उंगलियों पर सुई चुभने के निशान या लेखक की उंगलियों के गट्टे।)</p>
        </NCard>

      </div>

      {/* ========================================== */}
      {/* 2. DACTYLOGRAPHY / FINGERPRINTS              */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          2. डैक्टिलोग्राफी (Dactylography / Fingerprints)
        </HandwrittenBox>
      </div>

      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में 5-mark का अत्यधिक महत्वपूर्ण प्रश्न: &quot;Types of finger prints&quot;.
      </NText>

      <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
        
        <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
          <NAccent bold className="block mb-1 text-lg">Definition (परिभाषा):</NAccent>
          <NText>Dactylography, also known as the <NAccent bold>Galton system</NAccent>, is the scientific study of epidermal ridge patterns on the fingertips. (डैक्टिलोग्राफी, जिसे गैल्टन सिस्टम भी कहा जाता है, उंगलियों के पोरों पर मौजूद त्वचा की रेखाओं के पैटर्न का वैज्ञानिक अध्ययन है।)</NText>
        </div>

        <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
          <NAccent bold className="block mb-1 text-lg">Importance (महत्व):</NAccent>
          <NText>It is the <NAccent bold>most absolute and reliable method</NAccent> of identification because fingerprints are permanent and absolutely unique to every individual in the world. (यह पहचान का सबसे अचूक और विश्वसनीय तरीका है क्योंकि उंगलियों के निशान स्थायी होते हैं और दुनिया में हर व्यक्ति के लिए पूरी तरह से अद्वितीय होते हैं।)</NText>
        </div>

        <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm mt-4">
          <NAccent bold className="block mb-3 text-2xl text-center">Types of Fingerprints (अंगुली छाप के 4 मुख्य प्रकार)</NAccent>
          <div className="space-y-4">
            <div>
              <NText bold className="block text-lg">1. Loops (लूप / पाश):</NText>
              <NText>The ridges start from one side, curve around the center, and exit from the same side. This is the most common pattern (found in <NAccent bold>60-70%</NAccent> of people). (रेखाएं एक तरफ से शुरू होती हैं, केंद्र के चारों ओर घूमती हैं, और उसी तरफ से बाहर निकल जाती हैं। यह सबसे आम प्रकार है - जो 60-70% लोगों में पाया जाता है।)</NText>
            </div>
            <div>
              <NText bold className="block text-lg">2. Whorls (चक्र / कुंडल):</NText>
              <NText>The ridges form circular or spiral patterns around a central core point (found in <NAccent bold>25-30%</NAccent> of people). (रेखाएं एक केंद्रीय बिंदु के चारों ओर गोलाकार या सर्पिलाकार पैटर्न बनाती हैं - 25-30% लोगों में पाई जाती हैं।)</NText>
            </div>
            <div>
              <NText bold className="block text-lg">3. Arches (चाप):</NText>
              <NText>The ridges enter from one side, rise in the center like a tent, and exit from the opposite side. (रेखाएं एक तरफ से प्रवेश करती हैं, बीच में तंबू की तरह उठती हैं, और दूसरी तरफ से निकल जाती हैं।)</NText>
            </div>
            <div>
              <NText bold className="block text-lg">4. Composites / Accidental (मिश्रित प्रकार):</NText>
              <NText>It is a rare combination of two or more patterns, such as a loop and a whorl found on the same finger. (यह दो या दो से अधिक पैटर्न का एक दुर्लभ मिश्रण होता है, जैसे एक ही उंगली पर लूप और चक्र दोनों का पाया जाना।)</NText>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* 3. FORENSIC ODONTOLOGY                       */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          3. Forensic Odontology (दंत चिकित्सा द्वारा पहचान)
        </HandwrittenBox>
      </div>

      <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
        <NText className="block">It is the application of dental science to establish the identity of a person using their teeth, dental records, or bite marks on a victim. (यह किसी व्यक्ति के दांतों, डेंटल रिकॉर्ड या पीड़ित पर दांतों के काटने के निशानों का उपयोग करके उसकी पहचान स्थापित करने के लिए दंत विज्ञान का अनुप्रयोग है।)</NText>
        
        <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
          <NText className="block">Teeth are the <NAccent bold>hardest substance in the human body</NAccent> and resist destruction by severe fire, acid, or putrefaction. (दांत मानव शरीर का सबसे कठोर पदार्थ होते हैं और भयंकर आग, तेजाब या शरीर के सड़ने से भी नष्ट नहीं होते हैं।)</NText>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. DNA PROFILING                             */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          4. DNA Profiling (DNA फिंगरप्रिंटिंग)
        </HandwrittenBox>
      </div>

      <div className="space-y-4 pl-3 md:pl-10 mb-10 text-base md:text-xl text-[var(--theme-text)]">
        <NText className="block">DNA analysis is the <NAccent bold>modern gold standard</NAccent> for personal identification using biological evidence like blood, semen, hair roots, or bone marrow. (रक्त, वीर्य, बालों की जड़ों, या अस्थि मज्जा जैसे जैविक साक्ष्यों का उपयोग करके व्यक्तिगत पहचान स्थापित करने के लिए DNA विश्लेषण आधुनिक फॉरेंसिक का सबसे उत्कृष्ट मानक है।)</NText>
        
        <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
          <NText className="block">Except for identical twins, the DNA sequence of every human being is completely unique. (<NAccent bold>जुड़वां बच्चों को छोड़कर</NAccent>, हर इंसान का DNA क्रम पूरी तरह से अद्वितीय होता है।)</NText>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
