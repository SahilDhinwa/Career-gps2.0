"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

export default function AgadaTantraChapter2() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_8px_rgba(255,0,85,0.7)]">Tantra</span></>}>
        Chapter 2: Visha Chikitsa
      </HandwrittenTitle>

      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 border-2 border-dashed border-slate-400 dark:border-[#8b7355] text-slate-600 dark:text-[#3a2f24] font-bold text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Management of Poisoning (विष चिकित्सा)
        </span>
      </div>

      {/* 1. General Principles - 24 Modalities */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-red-600 dark:border-[#ff0055]" textColor="text-red-600 dark:text-[#ff0055]" className="dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)]">
            1. चतुर्विंशति उपक्रम (Charaka&apos;s 24 Modalities)
          </HandwrittenBox>
        </div>
        
        <p className="text-slate-800 dark:text-[#3a2f24] text-xl pl-6 md:pl-10 mb-6 font-bold leading-relaxed border-b-2 border-dashed border-slate-300 dark:border-[#8b7355] pb-4">
          आयुर्वेद में विष चिकित्सा का मुख्य उद्देश्य विष को फैलने से रोकना, बाहर निकालना और प्रभाव नष्ट करना है। <br/>
          <span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_4px_rgba(255,0,85,0.6)] italic text-lg">* 10-marks के प्रश्न के लिए ये 24 उपक्रम (Treatment Modalities) सबसे महत्वपूर्ण हैं:</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-[#3a2f24]">
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">1.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">मन्त्र:</span> विष प्रभाव कम करने हेतु मंत्र उच्चारण।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">2.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">अरिष्ट बन्धन:</span> दंश स्थान के 4 अंगुल ऊपर पट्टी बांधना (Tourniquet)।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">3.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">उत्कर्तन:</span> दंश स्थान पर चीरा (Incision) लगाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">4.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">निष्पीडन:</span> दंश स्थान दबाकर (Squeezing) विष निकालना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">5.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">चूषण:</span> मुख में बालू रखकर विष चूसकर निकालना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">6.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">अग्नि कर्म:</span> विषैले स्थान को जलाना (Cauterization)।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">7.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">परिषेक:</span> औषधीय जल की धारा गिराना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">8.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">अवगाह:</span> रोगी को औषधीय जल के टब में डुबोना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">9.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">रक्तमोक्षण:</span> जोंक (Leech) द्वारा दूषित रक्त निकालना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">10.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">वमन:</span> उल्टी करवाकर आमाशय का विष निकालना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">11.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">विरेचन:</span> दस्त करवाकर पक्वाशय से विष निकालना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">12.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">उपधान:</span> सिर पर काकपद चीरा लगाकर विषनाशक लेप।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">13.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">प्रधमन:</span> नाक में तेज औषधीय चूर्ण फूँकना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">14.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">अञ्जन:</span> आँखों में औषधीय अंजन (Collyrium) लगाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">15.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">नस्य:</span> नाक में औषधीय तेल या स्वरस डालना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">16.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">धूम:</span> औषधीय धुआं सुंघाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">17.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">लेह:</span> शहद/घी के साथ विषनाशक औषधियां चटाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">18.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">औषध:</span> विष नाशक औषधियां (Agada) खिलाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">19.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">प्रशमन:</span> कुपित दोषों (वात, पित्त, कफ) को शांत करना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">20.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">प्रतिसारण:</span> औषधीय चूर्ण को शरीर पर रगड़ना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">21.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">प्रतिविष:</span> स्थावर विष को जाङ्गम विष से काटना (Antidote)।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">22.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">संज्ञास्थापन:</span> रोगी की मूर्छा दूर करके होश में लाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">23.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">लेप:</span> विष वाले स्थान पर औषधियों का लेप लगाना।</span></div>
          <div className="flex gap-2"><span className="text-red-600 dark:text-[#ff0055] font-bold">24.</span> <span><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-400">मृतसंजीवन:</span> मृत समान व्यक्ति को पुनर्जीवित करना।</span></div>
        </div>
      </div>

      {/* 2. Modern Management of Poisoning */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-blue-600 dark:border-[#8b7355]" textColor="text-blue-700 dark:text-[#3a2f24]">
            2. Modern Management of Poisoning
          </HandwrittenBox>
        </div>
        
        <p className="text-slate-800 dark:text-[#3a2f24] text-xl pl-6 md:pl-10 mb-6 font-bold">
          Structure the modern clinical management into these five fundamental steps:
        </p>

        <div className="space-y-6 pl-4 md:pl-8 text-xl">
          
          {/* Step 1 */}
          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355]/50 bg-white/50 dark:bg-transparent rounded-sm">
            <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] text-2xl mb-2 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              Step 1: Immediate Resuscitation (ABCD)
            </span>
            <ul className="space-y-2 mt-3 text-blue-700 dark:text-[#3a2f24]">
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Airway:</span> Ensure airway is clear of secretions/vomit.</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Breathing:</span> Provide artificial ventilation or oxygen.</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Circulation:</span> Maintain BP/pulse via IV fluids (NS or RL).</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Depression of CNS:</span> Treat convulsions/coma immediately.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355]/50 bg-white/50 dark:bg-transparent rounded-sm">
            <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] text-2xl mb-2 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              Step 2: Removal of Unabsorbed Poison (Decontamination)
            </span>
            <ul className="space-y-3 mt-3 text-blue-700 dark:text-[#3a2f24]">
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-300">Inhaled:</span> Remove patient to fresh air immediately.</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-300">Contact:</span> Wash skin/eyes with running water for 15-20 mins.</li>
              <li>
                <span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-300 block mb-1">Ingested:</span>
                <ul className="pl-6 list-disc marker:text-red-600 dark:marker:text-[#ff0055] space-y-1">
                  <li><span className="font-bold">Emesis:</span> Induce vomiting (Mustard powder). <span className="text-red-600 dark:text-[#ff0055] font-bold italic">Contraindicated in:</span> Corrosives (acids), petroleum, comatose patients.</li>
                  <li><span className="font-bold">Gastric Lavage:</span> Stomach wash via Ryle&apos;s tube (most effective within 2-3 hrs of ingestion).</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355]/50 bg-white/50 dark:bg-transparent rounded-sm">
            <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] text-2xl mb-2 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              Step 3: Administration of Antidotes
            </span>
            <ul className="space-y-3 mt-3 text-blue-700 dark:text-[#3a2f24]">
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-300">Mechanical/Physical:</span> Universal antidote <span className="font-bold text-red-600 dark:text-[#ff0055]">Activated Charcoal</span> (50-100g) lines stomach & binds toxins.</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-300">Chemical:</span> Neutralizes poison (e.g., KMnO4 wash for alkaloids).</li>
              <li>
                <span className="font-bold text-slate-800 dark:text-[#3a2f24] underline decoration-slate-300 block mb-1">Pharmacological:</span> Produces opposite clinical effects.
                <ul className="pl-6 list-disc marker:text-red-600 dark:marker:text-[#ff0055] space-y-1">
                  <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Atropine</span> → Organophosphates</li>
                  <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Naloxone</span> → Opioids</li>
                  <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Neostigmine</span> → Dhatura</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355]/50 bg-white/50 dark:bg-transparent rounded-sm">
            <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] text-2xl mb-2 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              Step 4: Removal of Absorbed Poison (Elimination)
            </span>
            <ul className="space-y-2 mt-3 text-blue-700 dark:text-[#3a2f24]">
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Forced Diuresis:</span> IV fluids + diuretics (Furosemide) to flush via urine.</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Hemodialysis:</span> Artificial kidney filters blood (highly effective for Heavy Metals like Arsenic/Lead and Barbiturates).</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355]/50 bg-white/50 dark:bg-transparent rounded-sm">
            <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] text-2xl mb-2 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              Step 5: Symptomatic & Supportive Treatment
            </span>
            <p className="mt-2 text-blue-700 dark:text-[#3a2f24] leading-relaxed">
              Treating specific symptoms to keep the patient stable. Includes pain relievers, maintaining body temperature, antibiotics, and providing psychiatric counseling in cases of attempted suicide.
            </p>
          </div>

        </div>
      </div>

    </HandwrittenCanvas>
  );
}
