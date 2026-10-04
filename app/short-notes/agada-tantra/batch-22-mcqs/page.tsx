"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function Batch22MainPaperMCQs() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Agada Tantra">
        Batch 22 Main Paper: Solved MCQs
      </HandwrittenTitle>

      <div className="text-center mb-8 md:mb-12">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Previous Year Questions (PYQ)
        </span>
      </div>

      <div className="space-y-6 md:space-y-8 pl-1 md:pl-2 text-[var(--theme-text)]">
        
        <NCard>
          <NText bold className="block text-lg md:text-xl">Q1. &apos;सवातं ग्रहधूमाभं पुरीषं...&apos; लक्षण किस स्थिति में पाया जाता है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(&apos;सवातं ग्रहधूमाभं पुरीषं...&apos; Symptom Found in which condition.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. विष उपद्रव (Poison complication)</li>
            <li>B. विष मुक्त (Vish Mukta)</li>
            <li>C. विष पीत (Vish Peeta)</li>
            <li>D. विष संकट (Vish Sankat)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: C. विष पीत / Vish Peeta</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> According to Ayurvedic texts (Sushruta Samhita), passing dark, soot-like stool accompanied by flatus (&apos;सवातं ग्रहधूमाभं पुरीषं&apos;) is a classic clinical sign observed in a person who has consumed poison (Visha Peeta).</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q2. आचार्य चरक ने संज्ञास्थापन उपक्रम का निर्देश किस वेग में किया है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Acharya Charaka, in which Vega the Sangyasthaapana Indication has describe -)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. चतुर्थ वेग (Fourth Vega)</li>
            <li>B. पंचम वेग (Fifth Vega)</li>
            <li>C. सप्तम वेग (Seventh Vega)</li>
            <li>D. षष्ठम वेग (Sixth Vega)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: D. षष्ठम वेग / Sixth Vega</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> In Ayurvedic toxicology, Acharya Charaka described eight stages (Vegas) of poisoning. &apos;Sangyasthapana&apos; (the process of restoring consciousness or resuscitation) is specifically indicated to be performed during the sixth Vega (षष्ठम वेग) of poisoning.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q3. Reinsch test किस विषाक्तता में किया जाता है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Reinsch test is indicated in which poisoning-)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. आर्सेनिक (Arsenic)</li>
            <li>B. मशरूम (Mushroom)</li>
            <li>C. एसिड (Acid)</li>
            <li>D. एल्केलाईड्स (Alkaloids)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. आर्सेनिक / Arsenic</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> The Reinsch test is a preliminary screening test used in forensic toxicology to detect the presence of heavy metals such as arsenic, antimony, bismuth, and mercury in biological samples.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q4. &apos;विलून पक्षः स यथा विहंगः.......&apos; लक्षण किस विषाक्तता में पाया जाता है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(&apos;विलून पक्षः स यथा विहंगः.......&apos; Symptoms found in which poisoning.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. दूषी विष (Dooshi visha)</li>
            <li>B. गर विष (Gara visha)</li>
            <li>C. विरूद्ध आहार (Virooddha aahaara)</li>
            <li>D. कोई नहीं (None of these)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. दूषी विष / Dooshi visha</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> This phrase from the Ashtanga Hridaya translates to &quot;like a bird with clipped wings,&quot; vividly describing the weakened, lethargic, and helpless state of a patient suffering from aggravated Dushi Visha (latent or mild chronic poisoning).</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q5. निम्न में से एण्डोक्राईन विघटन कारकों के सम्बन्ध में सबसे उपयुक्त कथन है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Which one of the following is best described about an Endocrine disrupters.)</p>
          <ul className="pl-4 mb-4 space-y-2 text-base">
            <li>A. ऐसे रसायन जो किसी अवयव की वृद्धि एवं विकास में बाधा उत्पन्न करते है। (A chemical that disrupts the growth &amp; development of an organism.)</li>
            <li>B. ऐसे रसायन जो किसी अवयव के पाचन में बाधा उत्पन्न करते है। (A chemical that disrupts the digestion of an organism.)</li>
            <li>C. ऐसे रसायन जो किसी अवयव की अस्थि संरचना में बाधा उत्पन्न करते हैं। (A chemical that disrupts the bone structure of an organism.)</li>
            <li>D. ऐसे रसायन जो किसी अवयव के Blood flow में बाधा उत्पन्न करते हैं। (A chemical that disrupts the Blood-Flow of an organism.)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. ऐसे रसायन जो किसी अवयव की वृद्धि एवं विकास में बाधा उत्पन्न करते है।</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Endocrine disruptors are chemicals that interfere with the body&apos;s hormonal (endocrine) systems, often leading to adverse developmental, reproductive, neurological, and immune effects.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q6. पिंक डिसीज किस प्रकार की जीर्ण विषाक्तता में पाई जाती है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Pink disease is found in which type of chronic poisoning.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. नाग विषाक्तता (Lead poisoning)</li>
            <li>B. पारद विषाक्तता (Mercury poisoning)</li>
            <li>C. आर्सेनिक विषाक्तता (Arsenic poisoning)</li>
            <li>D. जिंक विषाक्तता (Zinc poisoning)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: B. पारद विषाक्तता / Mercury poisoning</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Pink disease (Acrodynia) is historically associated with chronic exposure to mercury, often from teething powders in children. It is characterized by severe pain and pink, peeling skin on the hands and feet.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q7. निम्न में से विषघ्न महाकषाय का घटक नहीं है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Which one of the following is not a component of Vishaghna Mahakashaaya.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. हरिद्रा (Haridra)</li>
            <li>B. मंजिष्ठा (Manjishtha)</li>
            <li>C. चन्दन (Chandan)</li>
            <li>D. गिलोय (Giloy)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: D. गिलोय / Giloy</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> According to Charaka Samhita, the ten herbs of the Vishaghna Mahakashaya (anti-toxic formulation) are Haridra, Manjishtha, Suvaha, Sukshma Ela, Palindi, Chandana, Kataka, Shirisha, Sindhuvara, and Shleshmataka. Giloy (Guduchi) is not part of this specific formulation.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q8. विलसन डिसीज किस प्रकार की विषाक्तता में मिलती है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Wilson&apos;s disease is found in which type of poisoning.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. ताम्र (Copper)</li>
            <li>B. जिंक (Zinc)</li>
            <li>C. आर्सेनिक (Arsenic)</li>
            <li>D. फोस्फोरस (Phosphorus)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. ताम्र / Copper</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Wilson&apos;s disease is a rare genetic disorder that prevents the body from removing extra copper, causing it to accumulate to toxic levels in the liver, brain, and eyes.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q9. किस प्रकार के सर्प दंश में रक्त का स्कन्दन नहीं हो पाता है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Blood does not coagulate in which type of snake bite.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. वाइपर सर्प दंश (Viper snake bite)</li>
            <li>B. समुद्री सर्प दंश (Sea snake bite)</li>
            <li>C. कोबरा सर्प दंश (Cobra snake bite)</li>
            <li>D. सभी (All of above)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. वाइपर सर्प दंश / Viper snake bite</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Viper venom is predominantly hemotoxic (vasculotoxic). It consumes coagulation factors and destroys red blood cells, which prevents the blood from clotting normally and leads to severe internal bleeding.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q10. किस प्रकार की जीर्ण विषाक्तता में Phossy Jaw बीमारी देखने को मिलती है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Phossy Jaw disease is found in which type of chronic poisoning.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. जिंक (Zinc)</li>
            <li>B. पारद (Mercury)</li>
            <li>C. फोस्फोरस (Phosphorus)</li>
            <li>D. ताम्र (Copper)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: C. फोस्फोरस / Phosphorus</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> &quot;Phossy jaw&quot; is an occupational disease causing osteonecrosis of the jaw. It was historically found among workers in the matchstick industry due to chronic inhalation of white phosphorus vapors.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q11. मद्यपान मे Stage of in-coordination की स्थिति उत्पन्न होने के लिये रक्त में एल्कोहल की मात्रा आवश्यक होती है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Blood Alcohol Content in percentage is required in condition of stage of in-coordination in case of alcohol consumption.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. &gt; 250 mg %</li>
            <li>B. 150-250 mg %</li>
            <li>C. 50 -150 mg %</li>
            <li>D. 25-50 mg %</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: B. 150-250 mg %</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> In forensic medicine, acute alcohol intoxication is categorized into stages. The &quot;stage of incoordination&quot; (characterized by a staggering gait, slurred speech, and confusion) typically correlates with a blood alcohol content (BAC) of 150 to 250 mg/dL.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q12. चिकित्सक द्वारा झूठा चिकित्सा प्रमाण पत्र जारी करने पर भा.द.सं. की किस धारा में दण्ड का प्रावधान किया गया है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Issue of false medical certificate by a doctor is punishable under which section of IPC)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. Sec. 197 IPC</li>
            <li>B. Sec. 87 IPC</li>
            <li>C. Sec. 304 A IPC</li>
            <li>D. Sec. 338 IPC</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. Sec. 197 IPC</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Section 197 of the Indian Penal Code addresses the issuing or signing of a false certificate. A doctor who knowingly provides a false medical certificate can be prosecuted under this section.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q13. पुलिस जांच CrPC की किस धारा के अन्तर्गत की जाती है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Police inquest is held under which section of CrPC.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. 174 CrPC</li>
            <li>B. 176 CrPC</li>
            <li>C. 178 CrPC</li>
            <li>D. 172 CrPC</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. 174 CrPC</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Section 174 of the Code of Criminal Procedure (CrPC) grants the police the authority to hold an inquest and investigate instances of suicide, murder, or suspicious deaths.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q14. गम्भीर क्षत को भा.द.सं. की धारा के अन्तर्गत परिभाषित किया गया है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Grevious hurt is defined under which section of IPC.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. Sec. 320 IPC</li>
            <li>B. Sec. 44 IPC</li>
            <li>C. Sec. 319 IPC</li>
            <li>D. Sec. 323 IPC</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. Sec. 320 IPC</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Section 320 of the Indian Penal Code explicitly defines &quot;Grievous Hurt&quot; by categorizing eight specific types of injuries (such as fractures, permanent loss of a sensory organ, or severe disfigurement) under this term.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q15. बलात्कार को भा.द.सं. की किस धारा के अन्तर्गत परिभाषित किया गया है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Rape is defined under which section of IPC.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. Sec. 320 IPC</li>
            <li>B. Sec. 375 IPC</li>
            <li>C. Sec. 351 IPC</li>
            <li>D. Sec. 376 IPC</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: B. Sec. 375 IPC</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Section 375 of the Indian Penal Code defines the legal parameters and lack of consent required to constitute the offense of rape. (Section 376 details the corresponding punishments).</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q16. भारतीय लोगों का शिरःसूचकांक सामान्यतया होता है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Cephalic index of Indian people is found generally?)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. 70-75</li>
            <li>B. 75-80</li>
            <li>C. 80-85</li>
            <li>D. 85-90</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: A. 70-75</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> In classic Indian forensic anthropology textbooks, the standard cephalic index for the Indian population is broadly classified as Dolichocephalic (long-headed), which corresponds to a range of 70 to 75.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q17. अहिफेन में मार्फीन का प्रतिशत होता है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Morphine percent found in Opium.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. 5%</li>
            <li>B. 10%</li>
            <li>C. 0.5%</li>
            <li>D. 2%</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: B. 10%</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Opium (known as Ahiphena in Ayurveda) naturally contains several alkaloids. Morphine is the most abundant, typically comprising around 9% to 14% (averaging 10%) of raw opium by weight.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q18. गम्भीर मानसिक मन्दता की स्थिति में आई.क्यू. लेबल होता है......।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(In condition of severe mental retardation; IQ level is ...)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. 51-70</li>
            <li>B. 36-50</li>
            <li>C. 20-35</li>
            <li>D. &lt; 20</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: C. 20-35</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Under standard psychiatric classifications for Intellectual Disability, an IQ score ranging between 20 and 35 designates &quot;Severe&quot; mental retardation (intellectual disability).</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q19. यौन अपराधों से बच्चों का संरक्षण अधिनियम भारत में किस वर्ष में लागू किया गया है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(POCSO act was enacted in India in which year.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. 2014</li>
            <li>B. 2012</li>
            <li>C. 2005</li>
            <li>D. 2010</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: B. 2012</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> The Protection of Children from Sexual Offences (POCSO) Act was enacted by the Government of India in 2012 to establish robust legal mechanisms for safeguarding children from sexual abuse and exploitation.</p>
          </div>
        </NCard>

        <NCard>
          <NText bold className="block text-lg md:text-xl">Q20. निम्न में से कौनसा ब्लिस्टर कारक वार गैस है।</NText>
          <p className="text-sm md:text-base italic opacity-80 mb-3">(Which one of the following is blistering war gas.)</p>
          <ul className="pl-4 mb-4 space-y-1 text-base">
            <li>A. क्लोरिन गैस (Chlorine gas)</li>
            <li>B. मस्टर्ड गैस (Mustard gas)</li>
            <li>C. एचसीएन गैस (HCN gas)</li>
            <li>D. टेबुन (Tabun)</li>
          </ul>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="text-[var(--theme-accent)]">Answer: B. मस्टर्ड गैस / Mustard gas</NText>
            <p className="mt-1 text-sm md:text-base"><NText bold>Explanation:</NText> Mustard gas (sulfur mustard) is a chemical warfare agent known as a vesicant or blistering agent. Exposure causes severe chemical burns and blisters on the skin, eyes, and respiratory tract.</p>
          </div>
        </NCard>

      </div>
    </HandwrittenCanvas>
  );
}
