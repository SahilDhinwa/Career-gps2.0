"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

const SYSTEMIC_TOPICS = [
  {
    num: "1",
    title: "Rheumatic Fever",
    subtitle: "Autoimmune Inflammatory Disease",
    intro: "An inflammatory disease that can develop if a throat infection (like strep throat) is not fully treated. It can cause serious inflammation in the heart, joints, brain, and skin.",
    cause: "An abnormal immune system response to an infection with Group A Streptococcus bacteria. The immune system gets confused and attacks the body's own healthy tissues.",
    types: [
      { name: "Acute Rheumatic Fever", desc: "The initial illness causing severe joint pain, fever, and subcutaneous nodules." },
      { name: "Rheumatic Heart Disease", desc: "Long-term, permanent damage to the heart valves (especially the mitral valve) caused by the initial fever." }
    ],
    tests: "Blood tests like the ASO titer (Anti-Streptolysin O) to check for recent strep antibodies, and an Echocardiogram to assess heart valve damage."
  },
  {
    num: "2",
    title: "Ascites",
    subtitle: "Abdominal Fluid Accumulation",
    intro: "The abnormal buildup of fluid in the peritoneal cavity (abdomen). This extra fluid makes the belly swell significantly and can cause pain, tightness, or difficulty breathing.",
    cause: "Most commonly caused by severe, chronic liver disease (cirrhosis) leading to portal hypertension. Other causes include severe heart failure, kidney failure, or abdominal cancers.",
    types: [
      { name: "Transudative", desc: "Fluid leaks out due to high hydrostatic pressure in blood vessels (usually from liver cirrhosis or right-sided heart failure)." },
      { name: "Exudative", desc: "Fluid leaks out due to active inflammation, infection (TB, peritonitis), or malignancy." }
    ],
    tests: "Abdominal Ultrasound (to visually confirm/quantify fluid buildup), and Diagnostic Paracentesis (tapping the belly to test the fluid's SAAG gradient and cell count)."
  },
  {
    num: "3",
    title: "Diabetes Mellitus",
    subtitle: "Chronic Hyperglycemia",
    intro: "A chronic metabolic disease that occurs when blood glucose is too high. Persistent high sugar causes severe microvascular and macrovascular damage (nerves, eyes, kidneys, heart).",
    cause: "The pancreas either doesn't make enough insulin (the hormone that shuttles sugar into cells) or the body's cells become highly resistant to the insulin it does make.",
    types: [
      { name: "Type 1", desc: "An autoimmune condition where the body mistakenly destroys the beta cells of the pancreas (absolute insulin deficiency)." },
      { name: "Type 2", desc: "The body becomes resistant to insulin (most common, strongly linked to lifestyle, diet, genetics, and obesity)." },
      { name: "Gestational", desc: "High blood sugar that develops strictly during pregnancy." }
    ],
    tests: "Fasting Blood Sugar Test (FBS > 126 mg/dL) and the HbA1c Test (measures average blood sugar over 3 months; > 6.5% is diagnostic)."
  },
  {
    num: "4",
    title: "Pancreatitis",
    subtitle: "Pancreatic Gland Inflammation",
    intro: "Severe inflammation of the pancreas, causing intense upper abdominal pain that classically radiates straight to the back, accompanied by nausea and vomiting.",
    cause: "Most commonly caused by gallstones blocking the ampulla of Vater (biliary pancreatitis) or chronic heavy alcohol consumption.",
    types: [
      { name: "Acute", desc: "Sudden, severe inflammation that lasts for a short time and usually resolves with aggressive IV hydration and fasting." },
      { name: "Chronic", desc: "Long-lasting, smoldering inflammation that permanently fibroses and destroys the pancreas over time." }
    ],
    tests: "Blood tests checking for extremely high levels of pancreatic enzymes (Serum Amylase and Lipase > 3x normal), and an Abdominal CT/Ultrasound."
  },
  {
    num: "5",
    title: "Myocardial Infarction",
    subtitle: "Heart Attack",
    intro: "A life-threatening medical emergency where blood flow to a segment of the heart muscle is abruptly and completely blocked. Without oxygen, the myocardium undergoes necrosis (tissue death).",
    cause: "A buildup of atherosclerotic plaque inside coronary arteries. If this plaque ruptures, a rapid thrombus (blood clot) forms and occludes the vessel.",
    types: [
      { name: "STEMI", desc: "ST-Elevation MI: A total, transmural blockage of a major coronary artery (requires immediate Cath Lab intervention)." },
      { name: "NSTEMI", desc: "Non-ST Elevation MI: A severe but partial/transient blockage causing subendocardial damage." }
    ],
    tests: "Immediate 12-lead ECG (to look for ST-segment elevation/changes) and Cardiac Biomarker Blood Tests (Troponin I or T, which leak from dying heart cells)."
  },
  {
    num: "6",
    title: "Urinary Tract Infection",
    subtitle: "UTI",
    intro: "An infection in any part of the urinary system causing a frequent, intense urge to urinate, dysuria (painful burning sensation), and sometimes cloudy/foul-smelling urine.",
    cause: "Pathogenic bacteria (usually E. coli originating from the GI tract) migrate up the urethra and multiply aggressively in the sterile urinary environment.",
    types: [
      { name: "Urethritis", desc: "Infection localized to the urethra." },
      { name: "Cystitis", desc: "Infection of the urinary bladder (most common, classic UTI presentation)." },
      { name: "Pyelonephritis", desc: "Infection ascending into the kidneys (severe; presents with flank pain, chills, and high fever)." }
    ],
    tests: "Urinalysis (dipstick/microscopy looking for nitrites and Leukocyte Esterase) and a Urine Culture (to identify the exact bacteria and its antibiotic sensitivities)."
  }
];

export default function SystemicDisordersCompendium() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>High-Yield<br/><span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_8px_rgba(255,0,85,0.7)]">Pathology</span></>}>
        Systemic & Endocrine Disorders
      </HandwrittenTitle>

      <div className="text-center mb-12">
        <p className="text-blue-700 dark:text-green-400 text-xl max-w-2xl mx-auto leading-relaxed">
          6 Core High-Yield Topics covering Cardiovascular, GI, Metabolic, and Renal pathologies. Optimized for quick viva and exam revision.
        </p>
      </div>

      <div className="space-y-12">
        {SYSTEMIC_TOPICS.map((item) => (
          <div 
            key={item.num}
            className="p-6 md:p-8 border-2 border-slate-800 dark:border-[#8b7355] bg-white/60 dark:bg-[#251e17]/70 shadow-sm relative"
            style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}
          >
            {/* Header / Number */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <HandwrittenBox borderColor="border-red-600 dark:border-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)]" textColor="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)]" className="text-xl font-bold">
                  #{item.num}
                </HandwrittenBox>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-[#e8dcc4]">
                  {item.title}
                </h2>
              </div>
              <span className="text-sm font-sans font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 dark:bg-[#1a110a] text-slate-600 dark:text-[#8b7355] rounded-sm border border-slate-300 dark:border-[#8b7355]/30">
                {item.subtitle}
              </span>
            </div>

            {/* Introduction */}
            <div className="mb-4 text-xl">
              <span className="font-bold underline decoration-slate-400 dark:decoration-slate-600 text-slate-800 dark:text-[#e8dcc4] mr-2">
                Introduction:
              </span>
              <span className="text-blue-700 dark:text-green-400 leading-relaxed">
                {item.intro}
              </span>
            </div>

            {/* Cause */}
            <div className="mb-4 text-xl">
              <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] mr-2">
                Cause / Etiology:
              </span>
              <span className="text-slate-800 dark:text-[#e8dcc4]">
                {item.cause}
              </span>
            </div>

            {/* Types */}
            <div className="mb-4 text-xl">
              <span className="font-bold text-slate-800 dark:text-[#e8dcc4] block mb-2 underline decoration-slate-400 dark:decoration-slate-600">
                Types / Classification:
              </span>
              <ul className="pl-6 space-y-1.5 list-disc list-inside marker:text-red-600 dark:marker:text-[#ff0055] text-blue-700 dark:text-green-400">
                {item.types.map((t, idx) => (
                  <li key={idx}>
                    <span className="font-bold text-slate-800 dark:text-[#e8dcc4]">{t.name}: </span>
                    <span>{t.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tests */}
            <div className="pt-4 border-t-2 border-dashed border-slate-300 dark:border-[#8b7355]/30 text-xl flex flex-wrap items-baseline gap-2">
              <span className="font-bold text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)]">
                Diagnostic Tests:
              </span>
              <span className="text-blue-700 dark:text-green-400 font-medium">
                {item.tests}
              </span>
            </div>
          </div>
        ))}
      </div>
    </HandwrittenCanvas>
  );
}
