"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

export default function AgadaTantraChapter1() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><span className="text-red-600 dark:text-[#991b1b]">Tantra</span></>}>
        Chapter 1: Concepts of Agada Tantra
      </HandwrittenTitle>

      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 border-2 border-dashed border-slate-400 dark:border-[#8b7355] text-slate-600 dark:text-[#3a2f24] font-bold text-sm tracking-widest uppercase rounded-sm transform -rotate-1">
          अगद तन्त्र के मूल सिद्धांत
        </span>
      </div>

      {/* 1. Introduction & Definitions */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>1. परिचय और परिभाषा (Intro & Definitions)</HandwrittenBox>
        </div>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-[#3a2f24]">
          <li className="leading-relaxed">
            <span className="text-red-600 dark:text-[#991b1b] font-bold mr-2">»</span>
            <span className="font-bold underline decoration-slate-400 dark:decoration-[#8b7355] text-slate-800 dark:text-[#3a2f24]">अगद तन्त्र (Agada Tantra):</span> यह अष्टांग आयुर्वेद की एक प्रमुख शाखा है। &apos;गद&apos; का अर्थ है रोग या विष, और &apos;अगद&apos; का अर्थ है जो विष को नष्ट करे। यह शाखा विषैले जीवों, पौधों और धातुओं के प्रभाव, लक्षणों और उनकी चिकित्सा से संबंधित है।
          </li>
          <li className="leading-relaxed p-4 border-l-4 border-red-600 dark:border-[#991b1b] bg-slate-50/50 dark:bg-transparent mt-2">
            <span className="font-bold text-slate-800 dark:text-[#3a2f24] text-2xl block mb-1">विष (Visha):</span>
            जो पदार्थ शरीर में प्रवेश कर विषाद (भयंकर कष्ट या अवसाद) उत्पन्न करे, उसे विष कहते हैं। <br/>
            <span className="italic text-red-600 dark:text-[#991b1b] font-bold">&quot;विषाद जननत्वाच्च विषमित्यभिधीयते&quot;</span><br/>
            विष शरीर के दोष (Dosha), धातु (Dhatu) और मल (Mala) को बहुत तेजी से दूषित कर प्राणों का नाश करता है।
          </li>
        </ul>
      </div>

      {/* 2. Modern Toxicological Concepts */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-blue-600 dark:border-[#8b7355]" textColor="text-blue-700 dark:text-[#3a2f24]">2. Modern Toxicological Concepts</HandwrittenBox>
        </div>
        <p className="text-red-600 dark:text-[#991b1b] font-bold text-lg pl-6 md:pl-10 mb-4 italic">
          *For a 10-mark question, distinguishing between these modern terms is mandatory:
        </p>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-[#3a2f24]">
          <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Toxicology:</span> The scientific study of adverse effects that occur in living organisms due to chemicals, poisons, or toxins.</li>
          <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Poison:</span> Any substance causing harm via a <span className="font-bold text-red-600 dark:text-[#991b1b]">passive entry mechanism</span> (ingested, inhaled, or absorbed). E.g., Heavy metals, Cyanide.</li>
          <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Venom:</span> A specialized biological poison <span className="font-bold text-red-600 dark:text-[#991b1b]">actively injected</span> through a physical apparatus (fangs, stinger).</li>
          <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Toxin:</span> A poisonous substance produced <span className="font-bold text-red-600 dark:text-[#991b1b]">naturally within living cells</span> (e.g., Bacterial toxins, Ricin).</li>
        </ul>
      </div>

      {/* 3. Properties of Visha (10 Properties) */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-red-600 dark:border-[#991b1b]" textColor="text-red-600 dark:text-[#991b1b]">
            3. विष के १० गुण (10 Properties of Visha)
          </HandwrittenBox>
        </div>
        <p className="text-slate-800 dark:text-[#3a2f24] text-xl pl-6 md:pl-10 mb-6 font-bold leading-relaxed border-b-2 border-dashed border-slate-300 dark:border-[#8b7355] pb-4">
          आचार्य चरक और सुश्रुत के अनुसार विष के गुण शरीर के <span className="text-red-600 dark:text-[#991b1b]">ओजस् (Ojas - Immunity)</span> के गुणों के ठीक विपरीत होते हैं:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-[#3a2f24]">
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">1.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">लघु (Laghu):</span> हल्का - सभी मार्गों में तेजी से फैलता है।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">2.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">रूक्ष (Ruksha):</span> सूखा - वात दोष को अत्यधिक कुपित करता है।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">3.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">आशु (Ashu):</span> शीघ्र - प्रवेश करते ही तुरंत असर करता है।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">4.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">विशद (Vishada):</span> स्पष्ट - बिना रुके स्रोतों में फैलता है।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">5.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">व्यवायी (Vyavayi):</span> पचने से पहले ही पूरे शरीर में फैल जाना।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">6.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">विकाशी (Vikashi):</span> ओज का नाश और धातुओं के बंधन शिथिल करना।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">7.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">सूक्ष्म (Sukshma):</span> सबसे छोटे स्रोतों (Micro-channels) में प्रवेश।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">8.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">उष्ण (Ushna):</span> गर्म - पित्त और रक्त को तेजी से दूषित करना।</span></div>
          <div className="flex gap-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">9.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">तीक्ष्ण (Tikshna):</span> भेदक - शरीर के मर्म स्थानों (Vital organs) को नष्ट करना।</span></div>
          <div className="flex gap-2 col-span-1 md:col-span-2"><span className="text-slate-800 dark:text-[#8b7355] font-bold">10.</span> <span><span className="font-bold text-red-600 dark:text-[#991b1b]">अपाकी (Apaki) / अनिर्देश्य रस:</span> जो पचता नहीं है अथवा जिसका कोई स्पष्ट स्वाद (Taste) न हो।</span></div>
        </div>
      </div>

      {/* 4. Sites of Visha */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>4. विष के अधिष्ठान (Sites / Sources of Visha)</HandwrittenBox>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-8 text-xl">
          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355] rounded-sm bg-slate-50/50 dark:bg-transparent">
            <span className="font-bold text-red-600 dark:text-[#991b1b] text-2xl mb-3 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              स्थावर विष (Sthavara)
            </span>
            <p className="text-slate-800 dark:text-[#3a2f24] font-bold mb-2">Plant/Mineral Origin (10 अधिष्ठान):</p>
            <ul className="text-blue-700 dark:text-[#3a2f24] grid grid-cols-2 gap-2">
              <li>• मूल (Root)</li>
              <li>• पत्र (Leaves)</li>
              <li>• फल (Fruit)</li>
              <li>• पुष्प (Flower)</li>
              <li>• त्वक् (Bark)</li>
              <li>• क्षीर (Latex)</li>
              <li>• सार (Heartwood)</li>
              <li>• निर्यास (Resin)</li>
              <li>• धातु (Minerals)</li>
              <li>• कन्द (Bulb)</li>
            </ul>
          </div>

          <div className="p-4 border-2 border-slate-300 dark:border-[#8b7355] rounded-sm bg-slate-50/50 dark:bg-transparent">
            <span className="font-bold text-red-600 dark:text-[#991b1b] text-2xl mb-3 block border-b border-slate-300 dark:border-[#8b7355] pb-2">
              जाङ्गम विष (Jangama)
            </span>
            <p className="text-slate-800 dark:text-[#3a2f24] font-bold mb-2">Animal Origin (16 अधिष्ठान - प्रमुख):</p>
            <ul className="text-blue-700 dark:text-[#3a2f24] columns-2 gap-2 space-y-1">
              <li>दृष्टि (Gaze)</li>
              <li>निःश्वास (Breath)</li>
              <li>दंष्ट्रा (Fangs)</li>
              <li>नख (Nails)</li>
              <li>मूत्र (Urine)</li>
              <li>पुरीष (Feces)</li>
              <li>शुक्र (Semen)</li>
              <li>लाला (Saliva)</li>
              <li>आर्तव (Menses)</li>
              <li>तुण्ड (Beak)</li>
              <li>अस्थि (Bone)</li>
              <li>पित्त (Bile)</li>
              <li>शूक (Bristles)</li>
              <li>शव (Carcass)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Movement of Poison */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>5. विष की गति (Movement of Poison)</HandwrittenBox>
        </div>
        <p className="text-slate-800 dark:text-[#3a2f24] text-xl pl-6 md:pl-10 mb-4 font-bold">शरीर में दोषों के आधार पर विष 3 दिशाओं में गति करता है:</p>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-[#3a2f24]">
          <li className="flex gap-3">
            <span className="text-red-600 dark:text-[#991b1b] font-bold">↑</span>
            <span><span className="font-bold text-slate-800 dark:text-[#3a2f24]">ऊर्ध्व गति (Urdhwa):</span> वात और कफ (Vata-Kapha) की प्रधानता। <br/><span className="italic text-slate-600 dark:text-[#8b7355]">(लक्षण: उल्टी, श्वास कष्ट)</span></span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 dark:text-[#991b1b] font-bold">↓</span>
            <span><span className="font-bold text-slate-800 dark:text-[#3a2f24]">अधो गति (Adho):</span> वात और पित्त (Vata-Pitta) की प्रधानता। <br/><span className="italic text-slate-600 dark:text-[#8b7355]">(लक्षण: दस्त, मूत्र में रक्त)</span></span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 dark:text-[#991b1b] font-bold">↔</span>
            <span><span className="font-bold text-slate-800 dark:text-[#3a2f24]">तिर्यक् गति (Tiryak):</span> विष बाहरी हिस्सों (त्वचा/मांसपेशियां) में फैलता है। <br/><span className="italic text-slate-600 dark:text-[#8b7355]">(लक्षण: चकत्ते, सूजन)</span></span>
          </li>
        </ul>
      </div>

      {/* 6. Modern Toxicokinetics */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-blue-600 dark:border-[#8b7355]" textColor="text-blue-700 dark:text-[#3a2f24]">6. Modern Toxicokinetics</HandwrittenBox>
        </div>
        
        <div className="pl-6 md:pl-10 text-xl">
          <div className="mb-6">
            <span className="font-bold text-red-600 dark:text-[#991b1b] block mb-2 underline decoration-slate-400 dark:decoration-[#8b7355]">Routes of Administration:</span>
            <p className="text-blue-700 dark:text-[#3a2f24] leading-relaxed">
              Poisons can enter the body via Inhalation (lungs), Ingestion (GI tract), Injection (IV/IM), or Absorption (skin/mucous membranes).
            </p>
          </div>

          <div>
            <span className="font-bold text-red-600 dark:text-[#991b1b] block mb-2 underline decoration-slate-400 dark:decoration-[#8b7355]">Mode of Action:</span>
            <ul className="space-y-3 text-blue-700 dark:text-[#3a2f24] list-disc list-inside marker:text-red-600 dark:marker:text-[#991b1b]">
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Local Action:</span> Destruction or irritation at the site of contact (e.g., Corrosive acids).</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Systemic Action:</span> Absorbed into the bloodstream affecting distant organs (e.g., Neurotoxins).</li>
              <li><span className="font-bold text-slate-800 dark:text-[#3a2f24]">Combined Action:</span> Exhibits both local and systemic effects (e.g., Carbolic acid).</li>
            </ul>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
