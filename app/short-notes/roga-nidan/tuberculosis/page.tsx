"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function TuberculosisNotes() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Roga<br/><NAccent>Nidan</NAccent></>}>
        Tuberculosis (TB)
      </HandwrittenTitle>

      {/* ========================================== */}
      {/* PART 1: DETAILED HINGLISH NOTES            */}
      {/* ========================================== */}

      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-sm tracking-widest uppercase rounded-sm">
          Detailed Class Notes
        </span>
      </div>

      {/* 1. Definition */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl mt-4">
        <div className="flex items-center gap-3">
          <HandwrittenBox>1. Definition</HandwrittenBox>
        </div>
        <NText className="leading-relaxed pl-4 md:pl-8 mt-2">
          TB एक chronic infectious disease है, जो मुख्यतः <NText bold className="italic">Mycobacterium tuberculosis</NText> से होती है। यह सबसे अधिक <NText bold className="underline decoration-[var(--theme-border)]">lungs (pulmonary TB)</NText> को प्रभावित करती है, लेकिन दूसरे अंगों में भी हो सकती है।
        </NText>
      </div>

      {/* 2. Causative Organism */}
      <div className="mb-10 pl-2">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>2. Causative organism</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-3"><NAccent font-bold>→</NAccent> <span><NText bold className="italic">Mycobacterium tuberculosis</NText></span></li>
          <li className="flex gap-3"><NAccent font-bold>→</NAccent> <span>इसे Koch&apos;s bacillus भी कहते हैं।</span></li>
          <li className="flex gap-3"><NAccent font-bold>→</NAccent> <span>यह <NAccent bold>acid-fast bacillus (AFB)</NAccent> है।</span></li>
        </ul>
      </div>

      {/* 3. Transmission */}
      <div className="flex flex-col gap-3 mb-10 text-xl md:text-2xl">
        <div className="flex items-center gap-3">
          <HandwrittenBox>3. Transmission</HandwrittenBox>
        </div>
        <NText className="leading-relaxed pl-4 md:pl-8 mt-2">
          मुख्यतः <NAccent bold>airborne droplets/aerosols</NAccent> से फैलती है। संक्रमित व्यक्ति के खाँसने, छींकने या बोलने पर bacilli हवा में जा सकते हैं।
        </NText>
      </div>

      {/* 4. Risk Factors */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>4. Risk factors</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <ul className="space-y-2">
            <li>• कुपोषण</li>
            <li>• कमजोर immunity</li>
            <li>• <NAccent bold>HIV</NAccent></li>
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
          <HandwrittenBox className="rounded-[50%] px-4">
            5. Clinical features
          </HandwrittenBox>
        </div>
        <NText bold className="text-xl pl-4 md:pl-8 mb-4 underline decoration-[var(--theme-border)] block">Pulmonary TB में:</NText>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pl-6 md:pl-12 text-xl text-[var(--theme-text)]">
          <li className="flex gap-2"><NAccent>»</NAccent> <NAccent bold>2–3 सप्ताह से अधिक की खाँसी</NAccent></li>
          <li className="flex gap-2"><NAccent>»</NAccent> बलगम, कभी-कभी खून (hemoptysis)</li>
          <li className="flex gap-2"><NAccent>»</NAccent> बुखार, अक्सर शाम को</li>
          <li className="flex gap-2"><NAccent>»</NAccent> Night sweats</li>
          <li className="flex gap-2"><NAccent>»</NAccent> वजन कम होना</li>
          <li className="flex gap-2"><NAccent>»</NAccent> भूख कम लगना</li>
          <li className="flex gap-2"><NAccent>»</NAccent> कमजोरी/थकान</li>
          <li className="flex gap-2"><NAccent>»</NAccent> chest pain</li>
        </ul>
      </div>

      {/* 6. Diagnosis */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>6. Diagnosis</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-3"><NText bold>①</NText> <span>Sputum test / molecular test (जैसे <NAccent bold>NAAT</NAccent>)</span></li>
          <li className="flex gap-3"><NText bold>②</NText> <span>Chest X-ray</span></li>
          <li className="flex gap-3"><NText bold>③</NText> <span>जरूरत के अनुसार culture</span></li>
          <li className="flex gap-3"><NText bold>④</NText> <span>Drug-resistance की जाँच भी की जाती है।</span></li>
        </ul>
      </div>

      {/* 7. Treatment */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-5">
          <HandwrittenBox>7. Treatment</HandwrittenBox>
        </div>
        <NText className="text-xl pl-4 md:pl-8 mb-6 leading-relaxed block">
          TB का इलाज multiple anti-TB drugs के combination से किया जाता है। Drug-sensitive TB में commonly:
        </NText>
        
        <div className="mx-4 md:mx-8 p-6 border-2 border-[var(--theme-border)] bg-[var(--theme-border)]/10 rounded-lg mb-6 shadow-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl text-[var(--theme-text)] font-bold text-center">
            <div><NAccent className="text-4xl block mb-1">H</NAccent> Isoniazid</div>
            <div><NAccent className="text-4xl block mb-1">R</NAccent> Rifampicin</div>
            <div><NAccent className="text-4xl block mb-1">Z</NAccent> Pyrazinamide</div>
            <div><NAccent className="text-4xl block mb-1">E</NAccent> Ethambutol</div>
          </div>
        </div>

        <NText className="text-xl pl-4 md:pl-8 leading-relaxed block">
          Treatment की exact regimen और duration TB के प्रकार तथा drug-susceptibility पर निर्भर करती है।
        </NText>
      </div>

      {/* 8. Complications */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-2xl mb-4">
          <HandwrittenBox>8. Complications</HandwrittenBox>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8 md:pl-12 text-xl text-[var(--theme-text)] list-disc list-inside marker:text-[var(--theme-accent)]">
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
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
        <span className="flex-shrink-0 mx-4 text-[var(--theme-text)] opacity-80 font-bold text-xl uppercase tracking-widest transform -rotate-2">
          Exam Revision Summary
        </span>
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>


      {/* ========================================== */}
      {/* PART 2: ENGLISH EXAM REVISION NOTES        */}
      {/* ========================================== */}

      {/* 1. Definition & Causative Agent */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>1. Definition & Causative Agent (1 Mark)</HandwrittenBox>
        </div>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-3 leading-relaxed"><NAccent font-bold>→</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)]">What it is:</NText> A chronic, infectious bacterial disease that primarily damages the lungs, though it can affect other body parts (bones, brain, kidneys).</span></li>
          <li className="flex gap-3 leading-relaxed"><NAccent font-bold>→</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)]">Pathogen:</NText> Caused by the bacterium <NAccent bold className="italic">Mycobacterium tuberculosis</NAccent>.</span></li>
          <li className="flex gap-3 leading-relaxed"><NAccent font-bold>→</NAccent> <span><NText bold className="underline decoration-[var(--theme-border)]">Key characteristic:</NText> It is a rod-shaped, acid-fast bacterium with a thick, waxy outer wall.</span></li>
        </ul>
      </div>

      {/* 2. Mode of Transmission */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>2. Mode of Transmission (1 Mark)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-3"><NText bold>①</NText> <span><NAccent bold>Airborne spread:</NAccent> Spreads through tiny droplets in the air.</span></li>
          <li className="flex gap-3"><NText bold>②</NText> <span><NAccent bold>Source:</NAccent> When a person with active lung TB coughs, sneezes, speaks, or spits.</span></li>
          <li className="flex gap-3"><NText bold>③</NText> <span>Inhaling these airborne germs can cause infection.</span></li>
        </ul>
      </div>

      {/* 3. Pathology */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>3. How the Disease Develops (Pathology) (2 Marks)</HandwrittenBox>
        </div>
        <ul className="space-y-4 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-3"><NAccent font-bold>→</NAccent> <span><NText bold>Entry:</NText> Bacteria enter the lungs and reach the tiny air sacs (alveoli).</span></li>
          <li className="flex gap-3"><NAccent font-bold>→</NAccent> <span><NText bold>Immune response:</NText> White blood cells (macrophages) eat the bacteria, but cannot easily kill them due to their waxy wall.</span></li>
          <li className="flex gap-3"><NAccent font-bold>→</NAccent> <span><NText bold>Wall formation (Granuloma):</NText> The body traps the bacteria inside small, round clusters of cells to stop them from spreading.</span></li>
        </ul>
        
        <div className="mt-6 ml-6 md:ml-10 p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
          <NText bold className="text-xl mb-2 block">Two stages:</NText>
          <ul className="space-y-3 text-xl text-[var(--theme-text)] list-disc list-inside marker:text-[var(--theme-accent)]">
            <li><NText bold>Latent TB:</NText> The bacteria are sleeping inside the wall. The person has no symptoms, feels fine, and is not contagious.</li>
            <li><NText bold>Active TB:</NText> If the immune system weakens, the wall breaks down. The bacteria multiply, destroy lung tissue, cause symptoms, and become contagious.</li>
          </ul>
        </div>
      </div>

      {/* 4. Common Symptoms */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-2xl mb-5 pl-2">
          <HandwrittenBox className="rounded-[50%] px-4">
            4. Common Symptoms (2 Marks)
          </HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <div>
            <NText bold className="underline decoration-[var(--theme-border)] mb-3 block">Respiratory signs:</NText>
            <ul className="space-y-2 list-disc list-inside marker:text-[var(--theme-accent)]">
              <li>Cough lasting more than 3 weeks.</li>
              <li>Coughing up blood or thick mucus.</li>
              <li>Chest pain while breathing or coughing.</li>
            </ul>
          </div>
          <div>
            <NText bold className="underline decoration-[var(--theme-border)] mb-3 block">General body signs:</NText>
            <ul className="space-y-2 list-disc list-inside marker:text-[var(--theme-accent)]">
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
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-3"><NText bold>①</NText> <span><NAccent bold>Sputum test:</NAccent> Examining mucus under a microscope to spot the acid-fast bacteria.</span></li>
          <li className="flex gap-3"><NText bold>②</NText> <span><NAccent bold>GeneXpert test:</NAccent> A fast DNA test that confirms TB and checks for drug resistance.</span></li>
          <li className="flex gap-3"><NText bold>③</NText> <span><NAccent bold>Chest X-ray:</NAccent> Shows damage or cavities in the lungs.</span></li>
          <li className="flex gap-3"><NText bold>④</NText> <span><NAccent bold>Skin test (Mantoux):</NAccent> A small injection under the skin to see if the body has been exposed to TB germs.</span></li>
        </ul>
      </div>

      {/* 6. Treatment */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-2xl mb-5 pl-2">
          <HandwrittenBox>6. Treatment (2 Marks)</HandwrittenBox>
        </div>
        
        <NText className="text-xl pl-6 md:pl-10 mb-6 block">
          <NText bold>Curable:</NText> Treated with a combination of antibiotics taken daily for 6 months.
        </NText>

        {/* Highlighted RIPE Box */}
        <div className="mx-6 md:mx-10 p-6 border-2 border-[var(--theme-border)] bg-[var(--theme-border)]/10 rounded-lg mb-6 shadow-sm" style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}>
          <NText bold className="mb-4 text-center text-xl underline decoration-[var(--theme-border)] block">Main medicines (First 2 months)</NText>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl text-[var(--theme-text)] font-bold text-center">
            <div><NAccent className="text-4xl block mb-1">R</NAccent> Rifampicin</div>
            <div><NAccent className="text-4xl block mb-1">I</NAccent> Isoniazid</div>
            <div><NAccent className="text-4xl block mb-1">P</NAccent> Pyrazinamide</div>
            <div><NAccent className="text-4xl block mb-1">E</NAccent> Ethambutol</div>
          </div>
        </div>

        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-2"><NAccent font-bold>→</NAccent> <span><NText bold>Next 4 months:</NText> Rifampicin and Isoniazid only.</span></li>
          <li className="flex gap-2"><NAccent font-bold>→</NAccent> <span><NText bold>DOTS:</NText> (Directly Observed Treatment, Short-course) A healthcare worker watches the patient swallow the pills to ensure they don&apos;t miss doses.</span></li>
        </ul>
        <NAccent className="font-bold italic text-xl pl-6 md:pl-10 mt-4 block">
          *Note: Stopping pills early causes Drug-Resistant TB, which is much harder to cure.
        </NAccent>
      </div>

      {/* 7. Prevention */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-2xl mb-4 pl-2">
          <HandwrittenBox>7. Prevention (0.5 Marks)</HandwrittenBox>
        </div>
        <ul className="space-y-3 pl-6 md:pl-10 text-xl text-[var(--theme-text)]">
          <li className="flex gap-2"><NAccent>»</NAccent> <span><NText bold>BCG vaccine:</NText> Given to babies at birth to protect against severe TB.</span></li>
          <li className="flex gap-2"><NAccent>»</NAccent> <span><NText bold>Good hygiene & air flow:</NText> Covering the mouth when coughing and keeping rooms well-ventilated.</span></li>
          <li className="flex gap-2"><NAccent>»</NAccent> <span><NText bold>Early treatment:</NText> Curing sick patients quickly stops the disease from spreading to others.</span></li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
