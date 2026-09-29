"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

export default function TuberculosisNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><span className="text-red-600 dark:text-rose-500">Nidan</span></>}>
        Tuberculosis (TB)
      </HandwrittenTitle>

      {/* 1. Definition */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>1. Definition</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-sky-400 leading-relaxed pl-4 md:pl-8 mt-2">
          TB एक chronic infectious disease है, जो मुख्यतः <span className="font-bold italic">Mycobacterium tuberculosis</span> से होती है। यह सबसे अधिक <span className="underline decoration-red-600 dark:decoration-rose-500">lungs (pulmonary TB)</span> को प्रभावित करती है, लेकिन दूसरे अंगों में भी हो सकती है।
        </p>
      </div>

      {/* 2. Causative Organism */}
      <div className="mb-10 pl-2">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-slate-800 dark:border-slate-300">2. Causative organism</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-sky-400">
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span><span className="font-bold italic">Mycobacterium tuberculosis</span></span></li>
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span>इसे Koch&apos;s bacillus भी कहते हैं।</span></li>
          <li className="flex gap-3"><span className="text-red-600 dark:text-rose-500 font-bold">→</span> <span>यह <span className="font-bold text-red-600 dark:text-rose-500">acid-fast bacillus (AFB)</span> है।</span></li>
        </ul>
      </div>

      {/* 3. Transmission */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl">
        <div className="flex items-center gap-3">
          <HandwrittenBox borderColor="border-blue-600 dark:border-sky-500" textColor="text-blue-700 dark:text-sky-400">3. Transmission</HandwrittenBox>
        </div>
        <p className="text-blue-700 dark:text-sky-400 leading-relaxed pl-4 md:pl-8 mt-2">
          मुख्यतः <span className="font-bold text-red-600 dark:text-rose-500">airborne droplets/aerosols</span> से फैलती है। संक्रमित व्यक्ति के खाँसने, छींकने या बोलने पर bacilli हवा में जा सकते हैं।
        </p>
      </div>

      {/* 4. Risk Factors */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>4. Risk factors</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 md:pl-10 text-xl text-blue-700 dark:text-sky-400">
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pl-6 md:pl-12 text-xl text-blue-700 dark:text-sky-400">
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
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-blue-700 dark:text-sky-400">
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
        <p className="text-blue-700 dark:text-sky-400 text-xl pl-4 md:pl-8 mb-6 leading-relaxed">
          TB का इलाज multiple anti-TB drugs के combination से किया जाता है। Drug-sensitive TB में commonly:
        </p>
        
        {/* Highlighted HRZE Box */}
        <div className="mx-4 md:mx-8 p-6 border-2 border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 rounded-lg mb-6 shadow-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl text-blue-800 dark:text-sky-300 font-bold text-center">
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">H</span> Isoniazid</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">R</span> Rifampicin</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">Z</span> Pyrazinamide</div>
            <div><span className="text-red-600 dark:text-rose-500 text-4xl block mb-1">E</span> Ethambutol</div>
          </div>
        </div>

        <p className="text-blue-700 dark:text-sky-400 text-xl pl-4 md:pl-8 leading-relaxed">
          Treatment की exact regimen और duration TB के प्रकार तथा drug-susceptibility पर निर्भर करती है।
        </p>
      </div>

      {/* 8. Complications */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox borderColor="border-red-600 dark:border-rose-500" textColor="text-red-600 dark:text-rose-500">8. Complications</HandwrittenBox>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8 md:pl-12 text-xl text-blue-700 dark:text-sky-400 list-disc list-inside marker:text-red-600 dark:marker:text-rose-500">
          <li>Hemoptysis</li>
          <li>Pleural effusion</li>
          <li>Pneumothorax</li>
          <li>Respiratory failure</li>
          <li>Miliary TB</li>
          <li>TB meningitis</li>
          <li>दूसरे organs में फैलना</li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
