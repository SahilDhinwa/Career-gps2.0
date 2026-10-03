"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter12Detailed() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 12: कृत्रिम विष (Detailed)
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Kritrima Visha - Artificial / Synthetic Poisons
        </span>
      </div>

      {/* ========================================== */}
      {/* 1. INORGANIC ACIDS (CORROSIVES)            */}
      {/* ========================================== */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Inorganic Acids (Corrosive Poisons)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block mb-2">Inorganic acids are powerful corrosives that extract water from tissues, coagulate cellular proteins, and cause severe <NAccent bold>coagulative necrosis</NAccent> (tissue destruction).</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NCard title="Sulphuric Acid">
              <NText className="block mt-2 text-sm md:text-base"><NText bold>Oil of Vitriol</NText> (H<sub>2</sub>SO<sub>4</sub>). Highly corrosive. It chars and <NAccent bold>blackens</NAccent> the tissues it touches. Symptoms include intense burning in mouth/GIT, <NAccent bold>&quot;coffee-ground&quot; vomit</NAccent> (due to altered blood), and severe abdominal cramps.</NText>
            </NCard>
            <NCard title="Hydrochloric Acid">
              <NText className="block mt-2 text-sm md:text-base"><NText bold>Muriatic Acid</NText> (HCl). Less corrosive than Sulphuric acid. It typically produces a <NAccent bold>greyish-white slough</NAccent> or eschar on the mucous membranes.</NText>
            </NCard>
            <NCard title="Nitric Acid">
              <NText className="block mt-2 text-sm md:text-base"><NText bold>Aqua Fortis</NText> (HNO<sub>3</sub>). Causes a characteristic <NAccent bold>yellow discoloration</NAccent> of tissues due to the xanthoproteic reaction. Causes severe damage to the GI tract.</NText>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. ORGANIC ACIDS                           */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Organic Acids</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block mb-2">These act locally as mild corrosives and systemically on vital organs.</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NCard title="Oxalic Acid">
              <NText className="block mt-2 text-sm md:text-base">Found in bleaching agents. Locally corrosive, but its main systemic danger is that it binds with serum calcium, causing profound <NAccent bold>hypocalcemia</NAccent>. Symptoms: Tetany, muscle cramps, and renal failure (calcium oxalate crystals in kidneys).</NText>
            </NCard>
            <NCard title="Carbolic Acid (Phenol)">
              <NText className="block mt-2 text-sm md:text-base">Has a distinct sweet, aromatic odor. Acts as a <NAccent bold>local anesthetic</NAccent> (less pain). Systemically causes CNS depression and acute renal failure. Classic sign is <NAccent bold>Carboluria</NAccent> (urine turns green/black upon air exposure).</NText>
            </NCard>
            <NCard title="Formic Acid">
              <NText className="block mt-2 text-sm md:text-base">Found in ant and bee stings, used industrially. Ingestion causes severe metabolic acidosis, intravascular hemolysis (RBC destruction), and potential <NAccent bold>optic nerve damage</NAccent>.</NText>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. ALKALIES                                */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Alkalies (क्षार)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Examples:</NText> Potassium hydroxide (KOH) and Sodium hydroxide (NaOH - Caustic Soda).</li>
            <li><NText bold>Action:</NText> Unlike acids, alkalies cause <NAccent bold>liquefactive necrosis</NAccent>, which allows the poison to penetrate much deeper into tissues. They also cause saponification of fats.</li>
            <li><NText bold>Symptoms:</NText> Tissues feel <NText bold>soapy to the touch</NText>. Severe burning, swollen lips and tongue, and bloody vomiting. A major late complication of alkali ingestion is the formation of <NAccent bold>esophageal strictures</NAccent> (narrowing of the food pipe).</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. ASPHYXIANTS                             */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. Asphyxiants (श्वास अवरोधक गैसें)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block mb-2">These gases interfere with oxygen transport or utilization.</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NCard title="Carbon Monoxide (CO)">
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm md:text-base">
                <li>Odorless, colorless gas.</li>
                <li>Binds to hemoglobin with over 200x the affinity of oxygen, forming <NAccent bold>carboxyhemoglobin</NAccent>.</li>
                <li><NText bold>Classic sign:</NText> <NAccent bold>Cherry-red discoloration</NAccent> of the skin, blood, and mucous membranes.</li>
              </ul>
            </NCard>
            <NCard title="Carbon Dioxide (CO2)">
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm md:text-base">
                <li>Known as <NText bold>choke damp</NText> or sewer gas.</li>
                <li>Simple asphyxiant that displaces oxygen in confined spaces.</li>
                <li>Causes headache, dizziness, cyanosis (bluish skin), and rapid unconsciousness.</li>
              </ul>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5. NON-METALLIC POISONS                    */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>5. Non-metallic Poisons</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">Phosphorous (फॉस्फोरस):</NAccent>
            <NText>Yellow/white phosphorus is highly toxic and luminescent. It has a characteristic <NAccent bold>garlicky odor</NAccent>. Acute poisoning causes severe liver failure and &quot;smoky&quot; luminescent vomit. Chronic exposure causes <NAccent bold>&quot;Phossy Jaw&quot;</NAccent> (necrosis of the lower jaw bone).</NText>
          </div>
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">Cyanide (सायनाइड):</NAccent>
            <NText>One of the most rapidly fatal poisons. Has a <NAccent bold>bitter almond odor</NAccent>. Acts by inhibiting cytochrome oxidase (cellular respiration), leading to <NText bold>histotoxic hypoxia</NText> (blood has oxygen, but cells cannot use it). <NText bold>Classic sign:</NText> Bright red venous blood and sudden collapse.</NText>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 6. HYDROCARBONS                            */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>6. Hydrocarbons (e.g., Kerosene)</HandwrittenBox>
        </div>
        <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Primary Danger:</NText> Aspiration pneumonitis (inhalation into the lungs), which destroys lung tissue.</li>
            <li><NText bold>Symptoms:</NText> Smell of kerosene in breath, coughing, choking, and CNS depression.</li>
            <li><NAccent bold className="underline decoration-[var(--theme-border)]">Important Clinical Note:</NAccent> Emesis (inducing vomiting) and gastric lavage are <NAccent bold>strictly contraindicated</NAccent> due to the high risk of aspiration.</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* 7. AGROCHEMICAL POISONING                  */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>7. Agrochemical Poisoning (Pesticides)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="mb-2">Commonly involved in accidental and suicidal poisonings.</p>

          <NCard title="Organo-phosphorus compounds (OPC) & Carbamates">
            <ul className="list-disc list-inside mt-2 space-y-2 text-sm md:text-base">
              <li>Inhibit the acetylcholinesterase enzyme, causing a massive buildup of acetylcholine.</li>
              <li><NText bold>Symptoms (SLUDGE / DUMBELS):</NText> Salivation, Lacrimation, Urination, Diarrhea, Gastrointestinal distress, Emesis, <NAccent bold>pinpoint pupils (miosis)</NAccent>, and bradycardia.</li>
              <li><NText bold>Antidotes:</NText> Atropine and Pralidoxime (PAM).</li>
            </ul>
          </NCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <NCard title="Organo-chlorine compounds">
              <p className="mt-2 text-sm md:text-base">e.g., DDT. These are <NText bold>CNS stimulants</NText>. Toxicity results in tremors, hyper-excitability, and severe convulsions.</p>
            </NCard>
            <NCard title="Aluminium phosphide (Celphos)">
              <p className="mt-2 text-sm md:text-base">A grain fumigant. When in contact with stomach moisture, it releases highly toxic <NAccent bold>phosphine gas (PH3)</NAccent>, which smells like <NText bold>decaying fish or garlic</NText>. Causes profound hypotension &amp; cardiovascular collapse.</p>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 8. HOUSEHOLD POISONS                       */}
      {/* ========================================== */}
      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>8. Household Poisons</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p>A broad category of chemicals found in the home, often ingested accidentally by children.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Examples:</NText> Bleach (sodium hypochlorite), detergents, mothballs (naphthalene, paradichlorobenzene), rat poisons (rodenticides like zinc phosphide or anticoagulants), and drain cleaners.</li>
            <li><NText bold>Management:</NText> Treatment is highly dependent on the specific agent. Corrosive household agents (like drain cleaners) require managing airway and <NAccent bold>avoiding vomiting</NAccent>, while systemic toxins require specific antidotes or supportive care.</li>
          </ul>

          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm mt-6">
            <NAccent bold className="block mb-2 text-xl">💡 Diagnostic Tip for Exams:</NAccent>
            <NText className="text-sm md:text-base">When studying these poisons, cross-reference how they affect specific clinical parameters. For example, <NAccent bold>H<sub>2</sub>SO<sub>4</sub></NAccent> causes severe burning in the GIT and alters the appearance of teeth to a chalky or blackened state. <NAccent bold>Phenol</NAccent> causes green/black urine. <NAccent bold>Cyanide</NAccent> presents with a bitter almond odor.</NText>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
