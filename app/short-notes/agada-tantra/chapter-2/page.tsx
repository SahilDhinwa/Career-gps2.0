"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NList, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter2() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 2: Visha Chikitsa
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Management of Poisoning (विष चिकित्सा)
        </span>
      </div>

      {/* 1. General Principles - 24 Modalities */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            1. चतुर्विंशति उपक्रम (Charaka&apos;s 24 Modalities)
          </HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-4 md:mb-6 leading-relaxed border-b-2 border-dashed border-[var(--theme-border)] pb-3 md:pb-4 block" bold>
          आयुर्वेद में विष चिकित्सा का मुख्य उद्देश्य विष को फैलने से रोकना, बाहर निकालना और प्रभाव नष्ट करना है। <br/>
          <NAccent className="italic text-sm md:text-lg block mt-1">* 10-marks के प्रश्न के लिए ये 24 उपक्रम (Treatment Modalities) सबसे महत्वपूर्ण हैं:</NAccent>
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="flex gap-1 md:gap-2"><NAccent>1.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">मन्त्र:</NText> विष प्रभाव कम करने हेतु मंत्र उच्चारण।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>2.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">अरिष्ट बन्धन:</NText> दंश स्थान के 4 अंगुल ऊपर पट्टी बांधना (Tourniquet)।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>3.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">उत्कर्तन:</NText> दंश स्थान पर चीरा (Incision) लगाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>4.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">निष्पीडन:</NText> दंश स्थान दबाकर (Squeezing) विष निकालना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>5.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">चूषण:</NText> मुख में बालू रखकर विष चूसकर निकालना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>6.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">अग्नि कर्म:</NText> विषैले स्थान को जलाना (Cauterization)।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>7.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">परिषेक:</NText> औषधीय जल की धारा गिराना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>8.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">अवगाह:</NText> रोगी को औषधीय जल के टब में डुबोना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>9.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">रक्तमोक्षण:</NText> जोंक (Leech) द्वारा दूषित रक्त निकालना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>10.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">वमन:</NText> उल्टी करवाकर आमाशय का विष निकालना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>11.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">विरेचन:</NText> दस्त करवाकर पक्वाशय से विष निकालना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>12.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">उपधान:</NText> सिर पर काकपद चीरा लगाकर विषनाशक लेप।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>13.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">प्रधमन:</NText> नाक में तेज औषधीय चूर्ण फूँकना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>14.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">अञ्जन:</NText> आँखों में औषधीय अंजन (Collyrium) लगाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>15.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">नस्य:</NText> नाक में औषधीय तेल या स्वरस डालना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>16.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">धूम:</NText> औषधीय धुआं सुंघाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>17.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">लेह:</NText> शहद/घी के साथ विषनाशक औषधियां चटाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>18.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">औषध:</NText> विष नाशक औषधियां (Agada) खिलाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>19.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">प्रशमन:</NText> कुपित दोषों (वात, पित्त, कफ) को शांत करना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>20.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">प्रतिसारण:</NText> औषधीय चूर्ण को शरीर पर रगड़ना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>21.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">प्रतिविष:</NText> स्थावर विष को जाङ्गम विष से काटना (Antidote)।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>22.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">संज्ञास्थापन:</NText> रोगी की मूर्छा दूर करके होश में लाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>23.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">लेप:</NText> विष वाले स्थान पर औषधियों का लेप लगाना।</span></div>
          <div className="flex gap-1 md:gap-2"><NAccent>24.</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)] opacity-80">मृतसंजीवन:</NText> मृत समान व्यक्ति को पुनर्जीवित करना।</span></div>
        </div>
      </div>

      {/* 2. Modern Management of Poisoning */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>
            2. Modern Management of Poisoning
          </HandwrittenBox>
        </div>
        
        <NText className="pl-3 md:pl-10 mb-4 md:mb-6 block" bold>
          Structure the modern clinical management into these five fundamental steps:
        </NText>

        <div className="space-y-4 md:space-y-6 pl-1 md:pl-8 text-base md:text-xl">
          
          <NCard title="Step 1: Immediate Resuscitation (ABCD)">
            <ul className="space-y-1 md:space-y-2 mt-2 md:mt-3 text-[var(--theme-text)]">
              <li><NText bold>Airway:</NText> Ensure airway is clear of secretions/vomit.</li>
              <li><NText bold>Breathing:</NText> Provide artificial ventilation or oxygen.</li>
              <li><NText bold>Circulation:</NText> Maintain BP/pulse via IV fluids (NS or RL).</li>
              <li><NText bold>Depression of CNS:</NText> Treat convulsions/coma immediately.</li>
            </ul>
          </NCard>

          <NCard title="Step 2: Removal of Unabsorbed Poison (Decontamination)">
            <ul className="space-y-2 md:space-y-3 mt-2 md:mt-3 text-[var(--theme-text)]">
              <li><NText bold className="underline decoration-[var(--theme-border)] opacity-80">Inhaled:</NText> Remove patient to fresh air immediately.</li>
              <li><NText bold className="underline decoration-[var(--theme-border)] opacity-80">Contact:</NText> Wash skin/eyes with running water for 15-20 mins.</li>
              <li>
                <NText bold className="underline decoration-[var(--theme-border)] opacity-80 block mb-1">Ingested:</NText>
                <ul className="pl-4 md:pl-6 list-disc marker:text-[var(--theme-accent)] space-y-1">
                  <li><span className="font-bold">Emesis:</span> Induce vomiting (Mustard powder). <NAccent className="italic">Contraindicated in:</NAccent> Corrosives (acids), petroleum, comatose patients.</li>
                  <li><span className="font-bold">Gastric Lavage:</span> Stomach wash via Ryle&apos;s tube (most effective within 2-3 hrs of ingestion).</li>
                </ul>
              </li>
            </ul>
          </NCard>

          <NCard title="Step 3: Administration of Antidotes">
            <ul className="space-y-2 md:space-y-3 mt-2 md:mt-3 text-[var(--theme-text)]">
              <li><NText bold className="underline decoration-[var(--theme-border)] opacity-80">Mechanical/Physical:</NText> Universal antidote <NAccent>Activated Charcoal</NAccent> (50-100g) lines stomach & binds toxins.</li>
              <li><NText bold className="underline decoration-[var(--theme-border)] opacity-80">Chemical:</NText> Neutralizes poison (e.g., KMnO4 wash for alkaloids).</li>
              <li>
                <NText bold className="underline decoration-[var(--theme-border)] opacity-80 block mb-1">Pharmacological:</NText> Produces opposite clinical effects.
                <ul className="pl-4 md:pl-6 list-disc marker:text-[var(--theme-accent)] space-y-1">
                  <li><NText bold>Atropine</NText> → Organophosphates</li>
                  <li><NText bold>Naloxone</NText> → Opioids</li>
                  <li><NText bold>Neostigmine</NText> → Dhatura</li>
                </ul>
              </li>
            </ul>
          </NCard>

          <NCard title="Step 4: Removal of Absorbed Poison (Elimination)">
            <ul className="space-y-1 md:space-y-2 mt-2 md:mt-3 text-[var(--theme-text)]">
              <li><NText bold>Forced Diuresis:</NText> IV fluids + diuretics (Furosemide) to flush via urine.</li>
              <li><NText bold>Hemodialysis:</NText> Artificial kidney filters blood (highly effective for Heavy Metals like Arsenic/Lead and Barbiturates).</li>
            </ul>
          </NCard>

          <NCard title="Step 5: Symptomatic & Supportive Treatment">
            <p className="mt-1 md:mt-2 text-[var(--theme-text)] leading-relaxed">
              Treating specific symptoms to keep the patient stable. Includes pain relievers, maintaining body temperature, antibiotics, and providing psychiatric counseling in cases of attempted suicide.
            </p>
          </NCard>

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
            <NAccent bold className="block mb-2 text-xl">1. संदिग्ध विषाक्तता में चिकित्सक के कर्तव्य (Duties of Practitioner):</NAccent>
            <p className="mb-2 italic opacity-80">(Very Important PYQ)</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>सबसे पहले पुलिस को तुरंत सूचित करें (Information to Police under CrPC Section 39).</li>
              <li>रोगी की जान बचाना (Resuscitation) चिकित्सक का पहला कर्तव्य है।</li>
              <li>रोगी के उल्टी (Vomit), पेट की सफाई (Gastric lavage washings), मल-मूत्र और कपड़ों को सील (Seal) करके Forensic Science Laboratory (FSL) भेजें।</li>
              <li>विषाक्तता का प्रकार (Homicidal/Suicidal) निर्धारित करने के लिए Dying Declaration (मृत्यु पूर्व कथन) मजिस्ट्रेट द्वारा दर्ज करवाएं।</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-xl">2. मृत शरीर में विषाक्तता का निदान (Diagnosis in Dead):</NAccent>
            <p className="mb-2 font-bold">Postmortem Findings:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Cyanide:</NText> Cherry-red color of blood.</li>
              <li><NText bold>Carbon Monoxide:</NText> Bright cherry-red lividity.</li>
              <li><NText bold>Nitric Acid:</NText> Yellow discoloration of tissues.</li>
              <li>Stomach mucosa examination reveals severe inflammation, ulceration, or unabsorbed poison tablets.</li>
            </ul>
          </div>

        </div>
      </div>
      

    </HandwrittenCanvas>
  );
}
