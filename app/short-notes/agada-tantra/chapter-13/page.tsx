"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter13() {
  return (
    <HandwrittenCanvas>
      {/* FIXED VERCEL ERROR: Removed JSX fragment from badge */}
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 13: मादक द्रव्य एवं मदात्यय
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Substances of Abuse (Alcohol &amp; Narcotics)
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> जो द्रव्य मनुष्य की बुद्धि, स्मृति और इन्द्रियों को विकृत कर देते हैं, उन्हें मादक द्रव्य कहते हैं। आयुर्वेद में मुख्य रूप से मद्य (Alcohol) के अत्यधिक और अनुचित सेवन से होने वाले रोगों (मदात्यय, मूर्च्छा, संन्यास) का विस्तृत वर्णन किया गया है। आधुनिक विज्ञान इसे <NText bold>&apos;Substance Abuse&apos;</NText> (नशीले पदार्थों का दुरुपयोग) कहता है, जिसमें शराब के साथ-साथ अफीम, गांजा, और कोकेन जैसे नशीले पदार्थ भी शामिल हैं।
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART A: AYURVEDIC PERSPECTIVE                */}
      {/* ========================================== */}
      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part A: आयुर्वेदिक परिप्रेक्ष्य (मद्य एवं मदात्यय)
        </HandwrittenBox>
      </div>

      {/* 1. Comparison of Madya and Visha */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. मद्य एवं विष के गुणों की तुलना</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block">आचार्य चरक के अनुसार, मद्य (Alcohol) और विष (Poison) के 10 गुण लगभग एक समान होते हैं।</NText>
          <ul className="list-disc list-inside space-y-1">
            <li><NText bold>मद्य के 10 गुण:</NText> लघु, उष्ण, तीक्ष्ण, सूक्ष्म, <NAccent bold>अम्ल (Sour)</NAccent>, व्यवायी, आशु, रूक्ष, विकाशी, और विशद।</li>
          </ul>
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">अंतर (Difference):</NAccent>
            <NText>विष और मद्य में केवल एक गुण का अंतर है— मद्य में <NText bold>&apos;अम्ल&apos; (खट्टा)</NText> गुण होता है, जबकि विष में <NText bold>&apos;अपाकी&apos; (न पचने वाला)</NText> गुण होता है। मद्य ओज (Ojas) का नाश करता है, क्योंकि ओज के 10 गुण मद्य के गुणों के ठीक विपरीत होते हैं।</NText>
          </div>
        </div>
      </div>

      {/* 2. Stages of Alcohol Intoxication */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. मद्यपान के वेग (Stages of Intoxication)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block">जब व्यक्ति शराब पीता है, तो शरीर पर उसके प्रभाव को 3 अवस्थाओं (वेगो) में बांटा गया है:</NText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-3 md:pl-10 text-base text-[var(--theme-text)]">
          <NCard title="प्रथम वेग (First Stage)">
            <p className="mt-2">यह सुखदायक अवस्था है। इसमें व्यक्ति प्रसन्न रहता है, उसकी बुद्धि, स्मृति और इन्द्रियां सामान्य रूप से काम करती हैं। यह अवस्था नींद और खुशी लाने वाली होती है।</p>
          </NCard>
          <NCard title="द्वितीय वेग (Second Stage)">
            <p className="mt-2">इस अवस्था में मद्य व्यक्ति की बुद्धि (Intellect) और ओज पर हावी होने लगता है। व्यक्ति का अपने शरीर और मन पर नियंत्रण नहीं रहता। उसकी वाणी लड़खड़ाने लगती है <span className="italic">(Slurred speech)</span> और वह अनुचित कार्य (पागलपन) करने लगता है।</p>
          </NCard>
          <NCard title="तृतीय वेग (Third Stage)">
            <p className="mt-2 text-[var(--theme-accent)] font-bold">यह सबसे गंभीर अवस्था है।</p>
            <p>इसमें व्यक्ति पूरी तरह से बेहोश (Unconscious) होकर कटे हुए पेड़ के समान जमीन पर गिर जाता है। उसे अच्छे-बुरे या जीवन-मृत्यु का कोई भान नहीं रहता。</p>
          </NCard>
        </div>
      </div>

      {/* 3 & 4. Madatyaya & Management */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3 &amp; 4. मदात्यय (Madatyaya) एवं चिकित्सा</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block"><NText bold>परिभाषा:</NText> मद्य (शराब) के अत्यधिक (Excessive), अनुचित, या निरंतर सेवन से शरीर में जो भयंकर विकार उत्पन्न होते हैं, उन्हें &apos;मदात्यय&apos; कहते हैं।</NText>
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>प्रकार:</NText> दोषों के आधार पर यह 4 प्रकार का होता है— वातज, पित्तज, कफज और सान्निपातिक (त्रिदोषज)। सभी मदात्यय मुख्य रूप से त्रिदोषज (Sannipataja) ही होते हैं।</li>
            <li><NText bold>सामान्य लक्षण:</NText> शरीर में भयंकर दर्द, कांपना (Tremors), हृदय में तेज धड़कन, पसीना आना, प्रलाप (बकवास करना), और बेहोशी।</li>
          </ul>

          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 mt-4">
            <NAccent bold className="block mb-2 text-lg">मदात्यय की आयुर्वेदिक चिकित्सा (Management):</NAccent>
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>मद्य से ही मद्य की चिकित्सा:</NText> आयुर्वेद का यह विशेष सिद्धांत है कि शराब की लत को एकदम से नहीं छुड़वाना चाहिए, बल्कि औषधि से सिद्ध की हुई थोड़ी मात्रा में शराब ही उपचार के रूप में देनी चाहिए।</li>
              <li><NText bold>शोधन चिकित्सा:</NText> उल्टी (वमन) और दस्त (विरेचन) करवाकर शरीर से दूषित दोषों को बाहर निकालें।</li>
              <li><NText bold>शमन औषधियां:</NText> <NAccent bold>खर्जूरादि मन्थ</NAccent> (खजूर, मुनक्का, इमली, अनार आदि से बना पेय) यह मदात्यय की भयंकर प्यास, उल्टी और हैंगओवर (Hangover) को तुरंत दूर करता है। कल्याणक घृत और अष्टांग लवण का प्रयोग।</li>
              <li><NText bold>मनोवैज्ञानिक चिकित्सा (आश्वासन):</NText> रोगी को शांत वातावरण में रखना, उसे सांत्वना देना और धीरे-धीरे (Gradual withdrawal) उसकी लत को छुड़वाना।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART B: MODERN TOXICOLOGICAL PERSPECTIVE   */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part B: Modern Perspective (Substances of Abuse)
        </HandwrittenBox>
      </div>

      {/* 1. Basic Definitions */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Basic Definitions</HandwrittenBox>
        </div>
        <div className="space-y-3 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Substance Abuse (दुरुपयोग):</NText> Harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs, leading to significant impairment or distress.</p>
          <p><NText bold>Addiction / Dependence (व्यसन / निर्भरता):</NText> A physical and psychological compulsion to take a drug continuously to avoid the severe physical discomfort of not having it.</p>
          <p><NText bold>Withdrawal Symptoms (प्रत्याहार लक्षण):</NText> The severe physical and mental symptoms (like tremors, sweating, hallucinations) that occur when a person suddenly stops taking an addictive substance.</p>
        </div>
      </div>

      {/* 2. Ethyl Alcohol */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Ethyl Alcohol (Ethanol / शराब)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NCard title="Acute Alcohol Intoxication">
              <ul className="space-y-2 list-[circle] list-inside mt-2 text-sm md:text-base">
                <li><NText bold>Fatal Dose:</NText> 150 to 250 ml of absolute alcohol for an adult.</li>
                <li><NText bold>Symptoms (3 Stages):</NText> Stage of Excitement (Euphoria, loss of judgment), Stage of Incoordination (Staggering gait, slurred speech), and Stage of Narcosis (Deep coma, pinpoint pupils, respiratory depression).</li>
                <li><NText bold>Management:</NText> Gastric lavage with warm water. Intravenous (IV) fluids with <NAccent bold>Thiamine (Vitamin B1)</NAccent> to prevent brain damage.</li>
              </ul>
            </NCard>

            <NCard title="Chronic Alcoholism (जीर्ण मदात्यय)">
              <ul className="space-y-2 list-[circle] list-inside mt-2 text-sm md:text-base">
                <li><NText bold>Liver Damage:</NText> Fatty liver leading to severe Liver Cirrhosis (लिवर का सिकुड़ना).</li>
                <li><NText bold>Neurological Damage:</NText> Wernicke-Korsakoff Syndrome (memory loss and confusion due to Vitamin B1 deficiency).</li>
              </ul>
            </NCard>
          </div>

          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm">
            <NAccent bold className="block mb-2 text-xl">Delirium Tremens (DTs) - CRITICAL PYQ</NAccent>
            <p className="mb-2">This is a severe, life-threatening withdrawal syndrome occurring 48–72 hours after suddenly stopping alcohol.</p>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>Symptoms:</NText> Severe tremors (भयंकर कंपन), <NAccent bold>visual hallucinations</NAccent> (seeing insects/snakes that aren&apos;t there - डरावने भ्रम), and severe agitation.</li>
              <li><NText bold>Treatment:</NText> Diazepam (sedative) and IV Thiamine.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Opium */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Opium (अफीम / Papaver somniferum)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Active Principles:</NText> Morphine, Codeine, and synthetic derivatives like Heroin (Smack) and Fentanyl. They are powerful CNS depressants.</p>
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">Acute Poisoning Symptoms (The Classic Triad):</NAccent>
            <ol className="list-decimal list-inside space-y-1 font-bold">
              <li>Pin-point Pupils (अत्यंत सिकुड़ी हुई पुतलियां): The pupils become as small as a pinhead (pathognomonic sign).</li>
              <li>Respiratory Depression: Breathing becomes extremely slow (2-4 breaths per minute).</li>
              <li>Coma: Deep, unarousable unconsciousness.</li>
            </ol>
            <NText className="block mt-3"><NText bold>Specific Antidote:</NText> <NAccent bold>Naloxone</NAccent> (given intravenously). It instantly reverses the respiratory depression and coma.</NText>
          </div>
        </div>
      </div>

      {/* 4 & 5. Cannabis & Cocaine */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-1 md:pl-4">
          
          {/* Cannabis */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HandwrittenBox>4. Cannabis (भंग, गांजा, चरस)</HandwrittenBox>
            </div>
            <div className="space-y-2 pl-2 text-base md:text-lg text-[var(--theme-text)]">
              <p><NText bold>Active Principle:</NText> THC (Tetrahydrocannabinol).</p>
              <ul className="list-[circle] list-inside space-y-1">
                <li><NText bold>Forms:</NText> Bhang (leaves - taken orally), Ganja (flowering tops - smoked), Charas/Hashish (resin - smoked).</li>
                <li>Euphoria (अत्यधिक खुशी), uncontrollable laughter, and red, bloodshot eyes (Conjunctival congestion).</li>
                <li>Loss of time and space perception: Time seems to pass very slowly.</li>
              </ul>
              <div className="p-3 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 mt-2">
                <NAccent bold className="block mb-1">Run Amok (Amok Syndrome):</NAccent>
                <p className="text-sm">A rare psychiatric condition in chronic users where the person suddenly goes on a violent, homicidal rampage without any reason, followed by deep sleep and amnesia (उन्हें कुछ याद नहीं रहता)।</p>
              </div>
            </div>
          </div>

          {/* Cocaine */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HandwrittenBox>5. Cocaine (कोकेन)</HandwrittenBox>
            </div>
            <div className="space-y-2 pl-2 text-base md:text-lg text-[var(--theme-text)]">
              <p><NText bold>Nature:</NText> It is a powerful Central Nervous System (CNS) Stimulant (यह शरीर और मस्तिष्क को अत्यधिक उत्तेजित करता है)।</p>
              <ul className="list-[circle] list-inside space-y-1">
                <li>Severe tachycardia (तेज हृदय गति), hypertension, and dilated pupils.</li>
              </ul>
              <div className="p-3 border border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 mt-2">
                <NAccent bold className="block mb-1">Magnan&apos;s Symptom (Cocaine Bugs):</NAccent>
                <p className="text-sm">A classic tactile hallucination (स्पर्श भ्रम) in chronic cocaine users. The patient intensely feels as if small insects (bugs) are crawling under their skin, leading them to scratch their skin severely.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 6. NDPS Act */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>6. NDPS Act, 1985</HandwrittenBox>
        </div>
        <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5 ml-3 md:ml-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Full Form:</NText> Narcotic Drugs and Psychotropic Substances Act, 1985.</p>
          <p className="mt-2"><NText bold>Purpose:</NText> It is a strict Indian law enacted to prohibit the production, manufacturing, cultivation, possession, sale, purchasing, and transport of any narcotic drugs (like opium, heroin, cannabis) and psychotropic substances (like LSD, cocaine) without medical or scientific permission.</p>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
