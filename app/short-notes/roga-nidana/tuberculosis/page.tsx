"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

export default function TuberculosisNotes() {
  return (
    <HandwrittenCanvas>
      
      <HandwrittenTitle badge={<>Clinical<br/><span className="text-red-600">Medicine</span></>}>
        Tuberculosis (TB)
      </HandwrittenTitle>

      {/* 1. Basics & Organism */}
      <div className="flex flex-wrap items-start gap-4 mb-8 text-xl md:text-2xl">
        <HandwrittenBox>Definition</HandwrittenBox>
        <p className="text-blue-700 leading-relaxed flex-1 mt-1">
          TB is a chronic infectious disease primarily affecting the <span className="underline decoration-red-600 font-bold">lungs</span> (Pulmonary TB), but can disseminate to other organs (Extra-pulmonary TB).
        </p>
      </div>

      <div className="mb-10 pl-2">
        <div className="flex items-center gap-3 text-2xl mb-3">
          <span className="text-red-600">⊛</span>
          <span className="font-bold text-slate-800 border-b-2 border-red-600">Causative Organism:</span>
        </div>
        <ul className="space-y-2 pl-8 text-xl text-blue-700">
          <li className="flex gap-3"><span className="text-slate-500">→</span> <span><span className="font-bold italic">Mycobacterium tuberculosis</span> (Koch&apos;s bacillus).</span></li>
          <li className="flex gap-3"><span className="text-slate-500">→</span> <span>It is an <span className="text-red-600 font-bold">Acid-Fast Bacillus (AFB)</span>.</span></li>
        </ul>
      </div>

      {/* 2. Transmission & Risk Factors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
        <div>
          <HandwrittenBox borderColor="border-blue-600" textColor="text-blue-700" className="mb-4 text-xl">
            Transmission
          </HandwrittenBox>
          <p className="text-blue-700 text-lg pl-4 leading-relaxed">
            Spreads primarily via <span className="font-bold text-red-600">airborne droplets/aerosols</span> when an infected person coughs, sneezes, or speaks.
          </p>
        </div>

        <div>
          <HandwrittenBox borderColor="border-slate-800" className="mb-4 text-xl">
            Risk Factors
          </HandwrittenBox>
          <ul className="text-lg text-blue-700 space-y-1.5 pl-4">
            <li>• Malnutrition (कुपोषण) & Weak Immunity</li>
            <li>• <span className="font-bold text-red-600">HIV</span> / Diabetes Mellitus</li>
            <li>• Overcrowding / Poor ventilation</li>
            <li>• Prolonged close contact with a TB patient</li>
          </ul>
        </div>
      </div>

      {/* 3. Clinical Features */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-2xl mb-5">
          <HandwrittenBox borderColor="border-red-600" className="rounded-[50%]">
            Clinical Features
          </HandwrittenBox>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-4 md:pl-12 text-xl text-blue-700">
          <div>
            <span className="font-bold text-slate-800 underline decoration-slate-400 mb-2 block">Respiratory (Pulmonary)</span>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-red-600">»</span> <span className="font-bold">Cough &gt; 2-3 weeks</span></li>
              <li className="flex gap-2"><span className="text-red-600">»</span> Sputum production</li>
              <li className="flex gap-2"><span className="text-red-600">»</span> <span className="font-bold text-red-600">Hemoptysis</span> (Blood in sputum)</li>
              <li className="flex gap-2"><span className="text-red-600">»</span> Chest pain / Breathlessness</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-slate-800 underline decoration-slate-400 mb-2 block">Systemic (Classic Triad)</span>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-red-600">»</span> <span className="font-bold">Evening rise of fever</span></li>
              <li className="flex gap-2"><span className="text-red-600">»</span> <span className="font-bold">Night sweats</span></li>
              <li className="flex gap-2"><span className="text-red-600">»</span> <span className="font-bold">Unexplained weight loss</span></li>
              <li className="flex gap-2"><span className="text-red-600">»</span> Anorexia (भूख कम लगना) & fatigue</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Diagnosis */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <span className="text-2xl">⊛</span>
          <div className="text-2xl font-bold text-slate-800 border-b-2 border-red-600 pb-1 inline-block">
            Diagnosis
          </div>
        </div>
        <ul className="space-y-2 pl-8 text-xl text-blue-700">
          <li>① <span className="font-bold">Sputum Smear Microscopy:</span> For AFB.</li>
          <li>② <span className="font-bold text-red-600">Molecular Tests (CBNAAT / TrueNat):</span> Detects TB DNA & Rifampicin resistance instantly.</li>
          <li>③ <span className="font-bold">Chest X-Ray:</span> Upper lobe infiltrates/cavitations.</li>
          <li>④ <span className="font-bold">Culture & DST:</span> Gold standard, checks Drug-Susceptibility.</li>
        </ul>
      </div>

      {/* 5. Treatment */}
      <div className="mb-10 p-6 border-2 border-slate-300 bg-slate-50/50 rounded-lg relative" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
        <div className="absolute -top-4 left-6 bg-[#fdfbf7] px-2">
          <HandwrittenBox borderColor="border-slate-800">Treatment (ATT Regimen)</HandwrittenBox>
        </div>
        
        <p className="text-lg text-slate-700 mb-4 mt-2">
          Drug-sensitive TB is treated with a combination of First-Line Anti-TB Drugs (<span className="font-bold text-red-600">HRZE</span>):
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl text-blue-800 font-bold text-center">
          <div><span className="text-red-600 text-3xl block">H</span> Isoniazid</div>
          <div><span className="text-red-600 text-3xl block">R</span> Rifampicin</div>
          <div><span className="text-red-600 text-3xl block">Z</span> Pyrazinamide</div>
          <div><span className="text-red-600 text-3xl block">E</span> Ethambutol</div>
        </div>
      </div>

      {/* 6. Complications */}
      <div className="mb-8">
        <span className="font-bold text-slate-800 text-xl border-b border-slate-400">Major Complications:</span>
        <p className="text-blue-700 text-lg mt-3 pl-4 leading-relaxed">
          Massive Hemoptysis, Pleural Effusion, Pneumothorax, Respiratory Failure, Miliary TB (widespread dissemination), and TB Meningitis.
        </p>
      </div>

    </HandwrittenCanvas>
  );
}
