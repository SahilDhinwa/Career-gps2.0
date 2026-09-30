"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

export default function TuberculosisNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><span className="text-red-600 dark:text-rose-500">Nidan</span></>}>
        Tuberculosis (TB)
      </HandwrittenTitle>

      {/* ========================================== */}
      {/* PART 1: DETAILED HINGLISH NOTES            */}
      {/* ========================================== */}

      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 border-2 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-bold text-sm tracking-widest uppercase rounded-sm">
          Detailed Class Notes
        </span>
      </div>

      {/* 1. Definition */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>1. Definition</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-green-400 leading-relaxed pl-4 md:pl-8 mt-2">
          TB एक chronic infectious disease है, जो मुख्यतः <span className="font-bold italic text-slate-800 dark:text-slate-200">Mycobacterium tuberculosis</span> से होती है। यह सबसे अधिक <span className="underline decoration-red-600 dark:decoration-rose-500 text-slate-800 dark:text-slate-200 font-bold">lungs (pulmonary TB)</span> को प्रभावित करती है, लेकिन दूसरे अंगों में भी हो सकती है।
        </p>
      </div>

      {/* 2. Causative Organism */}
      <div className="mb-10 pl-2">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-slate-800 dark:border-slate-300">2. Causative organism</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold italic text-slate-800 dark:text-slate-200">Mycobacterium tuberculosis</span></span></li>
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span>इसे Koch&apos;s bacillus भी कहते हैं।</span></li>
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span>यह <span className="font-bold text-red-600 dark:text-rose-500">acid-fast bacillus (AFB)</span> है।</span></li>
        </ul>
      </div>

      {/* 3. Transmission */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl">
        <div className="flex items-center gap-3">
          <HandwrittenBox borderColor="border-blue-600 dark:border-green-500" textColor="text-blue-700 dark:text-green-400">3. Transmission</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-green-400 leading-relaxed pl-4 md:pl-8 mt-2">
          मुख्यतः <span className="font-bold text-red-600 dark:text-rose-500">airborne droplets/aerosols</span> से फैलती है। संक्रमित व्यक्ति के खाँसने, छींकने या बोलने पर bacilli हवा में जा सकते हैं।
        </p>
      </div>

      {/* 4. Risk Factors */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>4. Risk factors</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <ul className="space-y-2">
            <li>• कुपोषण</li>
            <li>• कमजोर immunity</li>
            <li>• <span className="font-bold text-red-600 dark:text-rose-500">HIV</span></li>
          </ul>
          <ul className="space-y-2">
            <li>• Diabetes</li>
            <li>• भीड़भाड़/खराब ventilation</li>
            <li>• TB patient के साथ prolonged close contact</li>
          </ul>
        </div>
      </div>

      {/* 5. Clinical Features */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-2xl mb-5">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-500" className="rounded-[50%] px-4">
            5. Clinical features
          </HandwrittenBox>
        </div>
        <p className="text-slate-800 dark:text-slate-200 font-bold text-xl pl-4 md:pl-8 mb-4 underline decoration-slate-400 dark:decoration-slate-600">Pulmonary TB में:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pl-6 md:pl-12 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> <span className="font-bold text-red-600 dark:text-rose-500">2–3 सप्ताह से अधिक की खाँसी</span></li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> बलगम, कभी-कभी खून (hemoptysis)</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> बुखार, अक्सर शाम को</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> Night sweats</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> वजन कम होना</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> भूख कम लगना</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> कमजोरी/थकान</li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> chest pain</li>
        </ul>
      </div>

      {/* 6. Diagnosis */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>6. Diagnosis</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">①</span> <span>Sputum test / molecular test (जैसे <span className="font-bold text-red-600 dark:text-rose-500">NAAT</span>)</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">②</span> <span>Chest X-ray</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">③</span> <span>जरूरत के अनुसार culture</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">④</span> <span>Drug-resistance की जाँच भी की जाती है।</span></li>
        </ul>
      </div>

      {/* 7. Treatment */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-5">
          <HandwrittenBox borderColor="border-slate-800 dark:border-slate-300">7. Treatment</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-green-400 text-xl pl-4 md:pl-8 mb-6 leading-relaxed">
          TB का इलाज multiple anti-TB drugs के combination से किया जाता है। Drug-sensitive TB में commonly:
        </p>
        
        <div className="mx-4 md:mx-8 p-6 border-2 border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 rounded-lg mb-6 shadow-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl text-blue-800 dark:text-green-300 font-bold text-center">
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">H</span> Isoniazid</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">R</span> Rifampicin</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">Z</span> Pyrazinamide</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">E</span> Ethambutol</div>
          </div>
        </div>

        <p className="text-blue-700 dark:text-green-400 text-xl pl-4 md:pl-8 leading-relaxed">
          Treatment की exact regimen और duration TB के प्रकार तथा drug-susceptibility पर निर्भर करती है।
        </p>
      </div>

      {/* 8. Complications */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-500" textColor="text-red-600 dark:text-rose-500">8. Complications</HandwrittenBox>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8 md:pl-12 text-xl text-blue-700 dark:text-green-400 list-disc list-inside marker:text-red-600 dark:marker:text-rose-500">
          <li>Hemoptysis</li>
          <li>Pleural effusion</li>
          <li>Pneumothorax</li>
          <li>Respiratory failure</li>
          <li>Miliary TB</li>
          <li>TB meningitis</li>
          <li>दूसरे organs में फैलना</li>
        </ul>
      </div>


      {/* ========================================== */}
      {/* STYLISH SEPARATOR LINE                     */}
      {/* ========================================== */}
      <div className="relative flex py-16 items-center">
        <div className="flex-grow border-t-2 border-dashed border-slate-400 dark:border-slate-600"></div>
        <span className="flex-shrink-0 mx-4 text-slate-500 dark:text-slate-400 font-bold text-xl uppercase tracking-widest transform -rotate-2">
          Exam Revision Summary
        </span>
        <div className="flex-grow border-t-2 border-dashed border-slate-400 dark:border-slate-600"></div>
      </div>


      {/* ========================================== */}
      {/* PART 2: ENGLISH EXAM REVISION NOTES        */}
      {/* ========================================== */}

      {/* 1. Definition & Causative Agent */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>1. Definition & Causative Agent (1 Mark)</HandwrittenBox>
        </div>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-3 leading-relaxed"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold underline decoration-slate-400 dark:decoration-slate-600 text-slate-800 dark:text-slate-200">What it is:</span> A chronic, infectious bacterial disease that primarily damages the lungs, though it can affect other body parts (bones, brain, kidneys).</span></li>
          <li className="flex gap-3 leading-relaxed"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold underline decoration-slate-400 dark:decoration-slate-600 text-slate-800 dark:text-slate-200">Pathogen:</span> Caused by the bacterium <span className="font-bold italic text-red-600 dark:text-rose-500">Mycobacterium tuberculosis</span>.</span></li>
          <li className="flex gap-3 leading-relaxed"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold underline decoration-slate-400 dark:decoration-slate-600 text-slate-800 dark:text-slate-200">Key characteristic:</span> It is a rod-shaped, acid-fast bacterium with a thick, waxy outer wall.</span></li>
        </ul>
      </div>

      {/* 2. Mode of Transmission */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-blue-600 dark:border-green-500" textColor="text-blue-700 dark:text-green-400">2. Mode of Transmission (1 Mark)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">①</span> <span><span className="font-bold text-red-600 dark:text-rose-500">Airborne spread:</span> Spreads through tiny droplets in the air.</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">②</span> <span><span className="font-bold text-red-600 dark:text-rose-500">Source:</span> When a person with active lung TB coughs, sneezes, speaks, or spits.</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">③</span> <span>Inhaling these airborne germs can cause infection.</span></li>
        </ul>
      </div>

      {/* 3. Pathology */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>3. How the Disease Develops (Pathology) (2 Marks)</HandwrittenBox>
        </div>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">»</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">Entry:</span> Bacteria enter the lungs and reach the tiny air sacs (alveoli).</span></li>
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">»</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">Immune response:</span> White blood cells (macrophages) eat the bacteria, but cannot easily kill them due to their waxy wall.</span></li>
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">»</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">Wall formation (Granuloma):</span> The body traps the bacteria inside small, round clusters of cells to stop them from spreading.</span></li>
        </ul>
        
        <div className="mt-6 ml-6 md:ml-10 p-4 border-l-4 border-red-600 dark:border-rose-500 bg-slate-100/50 dark:bg-slate-900/50">
          <p className="font-bold text-slate-800 dark:text-slate-200 text-xl mb-2">Two stages:</p>
          <ul className="space-y-3 text-xl text-blue-700 dark:text-green-400 list-disc list-inside marker:text-red-600 dark:marker:text-rose-500">
            <li><span className="font-bold">Latent TB:</span> The bacteria are sleeping inside the wall. The person has no symptoms, feels fine, and is not contagious.</li>
            <li><span className="font-bold">Active TB:</span> If the immune system weakens, the wall breaks down. The bacteria multiply, destroy lung tissue, cause symptoms, and become contagious.</li>
          </ul>
        </div>
      </div>

      {/* 4. Common Symptoms */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-2xl mb-5 pl-2">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-500" className="rounded-[50%] px-4">
            4. Common Symptoms (2 Marks)
          </HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200 underline decoration-slate-400 dark:decoration-slate-600 mb-3 block">Respiratory signs:</span>
            <ul className="space-y-2 list-disc list-inside marker:text-red-600 dark:marker:text-rose-500">
              <li>Cough lasting more than 3 weeks.</li>
              <li>Coughing up blood or thick mucus.</li>
              <li>Chest pain while breathing or coughing.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200 underline decoration-slate-400 dark:decoration-slate-600 mb-3 block">General body signs:</span>
            <ul className="space-y-2 list-disc list-inside marker:text-red-600 dark:marker:text-rose-500">
              <li>Unexplained weight loss (&quot;consumption&quot;).</li>
              <li>Low fever (especially in the evening).</li>
              <li>Drenching night sweats.</li>
              <li>Constant tiredness and weakness.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Diagnosis */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>5. Diagnosis (1.5 Marks)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">①</span> <span><span className="font-bold text-red-600 dark:text-rose-500">Sputum test:</span> Examining mucus under a microscope to spot the acid-fast bacteria.</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">②</span> <span><span className="font-bold text-red-600 dark:text-rose-500">GeneXpert test:</span> A fast DNA test that confirms TB and checks for drug resistance.</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">③</span> <span><span className="font-bold text-red-600 dark:text-rose-500">Chest X-ray:</span> Shows damage or cavities in the lungs.</span></li>
          <li className="flex gap-3"><span className="text-slate-800 dark:text-slate-200">④</span> <span><span className="font-bold text-red-600 dark:text-rose-500">Skin test (Mantoux):</span> A small injection under the skin to see if the body has been exposed to TB germs.</span></li>
        </ul>
      </div>

      {/* 6. Treatment */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-5 pl-2">
          <HandwrittenBox borderColor="border-slate-800 dark:border-slate-300">6. Treatment (2 Marks)</HandwrittenBox>
        </div>
        
        <p className="text-blue-700 dark:text-green-400 text-xl pl-6 md:pl-10 mb-6">
          <span className="font-bold text-slate-800 dark:text-slate-200">Curable:</span> Treated with a combination of antibiotics taken daily for 6 months.
        </p>

        {/* Highlighted RIPE Box */}
        <div className="mx-6 md:mx-10 p-6 border-2 border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 rounded-lg mb-6 shadow-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
          <p className="text-slate-800 dark:text-slate-200 font-bold mb-4 text-center text-xl underline decoration-slate-400">Main medicines (First 2 months)</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl text-blue-800 dark:text-green-300 font-bold text-center">
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">R</span> Rifampicin</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">I</span> Isoniazid</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">P</span> Pyrazinamide</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">E</span> Ethambutol</div>
          </div>
        </div>

        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">Next 4 months:</span> Rifampicin and Isoniazid only.</span></li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">DOTS:</span> (Directly Observed Treatment, Short-course) A healthcare worker watches the patient swallow the pills to ensure they don&apos;t miss doses.</span></li>
        </ul>
        <p className="text-red-600 dark:text-rose-500 font-bold italic text-xl pl-6 md:pl-10 mt-4">
          *Note: Stopping pills early causes Drug-Resistant TB, which is much harder to cure.
        </p>
      </div>

      {/* 7. Prevention */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-500" textColor="text-red-600 dark:text-rose-500">7. Prevention (0.5 Marks)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-green-400">
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">BCG vaccine:</span> Given to babies at birth to protect against severe TB.</span></li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">Good hygiene & air flow:</span> Covering the mouth when coughing and keeping rooms well-ventilated.</span></li>
          <li className="flex gap-2"><span className="text-red-600 dark:text-rose-500">»</span> <span><span className="font-bold text-slate-800 dark:text-slate-200">Early treatment:</span> Curing sick patients quickly stops the disease from spreading to others.</span></li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
