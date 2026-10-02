"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

const TOPICS = [
  {
    num: "1",
    title: "Osteoarthritis",
    subtitle: "Wear and Tear Arthritis",
    intro: "It happens when the protective cartilage that cushions the ends of your bones gradually wears down over time, causing pain and stiffness.",
    cause: "Aging, joint injuries, obesity (extra weight on knees/hips), and repetitive stress on a joint.",
    types: [
      { name: "Primary", desc: "Caused by natural aging and wear." },
      { name: "Secondary", desc: "Caused by a specific injury, obesity, or another disease." }
    ],
    tests: "X-ray (to see if the space between bones has narrowed or if bone spurs have formed)."
  },
  {
    num: "2",
    title: "Rheumatoid Arthritis (RA)",
    subtitle: "Autoimmune Joint Disease",
    intro: "An autoimmune disease where your body's immune system mistakenly attacks the lining of your joints, causing painful swelling that can result in bone erosion and joint deformity.",
    cause: "Exact cause unknown; combination of genetics and environmental triggers (smoking, infections) confusing the immune system.",
    types: [
      { name: "Seropositive RA", desc: "Blood tests show specific antibodies." },
      { name: "Seronegative RA", desc: "Blood tests show no antibodies, but classic symptoms exist." }
    ],
    tests: "Blood tests for Rheumatoid Factor (RF) and Anti-CCP antibodies."
  },
  {
    num: "3",
    title: "Irritable Bowel Syndrome (IBS)",
    subtitle: "Functional Bowel Disorder",
    intro: "A common disorder affecting stomach and intestines. Causes cramping, abdominal pain, bloating, gas, and changes in bowel habits without permanent gut damage.",
    cause: "Sensitive gut nerves, abnormal muscle contractions, stress, or severe post-infectious gastroenteritis.",
    types: [
      { name: "IBS-C", desc: "Predominantly constipation." },
      { name: "IBS-D", desc: "Predominantly diarrhea." },
      { name: "IBS-M", desc: "Mixed pattern (both diarrhea and constipation)." }
    ],
    tests: "Clinical diagnosis of exclusion. Stool/blood tests to rule out infections, IBD, or celiac disease."
  },
  {
    num: "4",
    title: "Typhoid Fever",
    subtitle: "Enteric Bacterial Infection",
    intro: "A serious systemic bacterial infection causing sustained step-ladder high fever, severe weakness, abdominal pain, and rose spots.",
    cause: "Salmonella Typhi bacterium; spread via contaminated food, milk, or drinking water (feco-oral route).",
    types: [
      { name: "Typhoid fever", desc: "Classic severe presentation." },
      { name: "Paratyphoid fever", desc: "Milder illness caused by S. Paratyphi A, B, or C." }
    ],
    tests: "Blood/Stool Culture (definitive in 1st week), Widal Test (antibodies, useful after day 7-10)."
  },
  {
    num: "5",
    title: "Malaria",
    subtitle: "Protozoal RBC Infection",
    intro: "A parasitic infection attacking red blood cells, characterized by periodic paroxysms of high fever with rigors, chills, and profuse sweating.",
    cause: "Bite of infected female Anopheles mosquito transmitting the Plasmodium parasite.",
    types: [
      { name: "P. falciparum", desc: "Most malignant/severe (Cerebral malaria risk)." },
      { name: "P. vivax", desc: "Most common; relapsing fever (hypnozoites in liver)." }
    ],
    tests: "Peripheral Blood Smear (thick & thin film microscopy) and Rapid Diagnostic Test (RDT antigen)."
  },
  {
    num: "6",
    title: "Chikungunya",
    subtitle: "Debilitating Arthritic Arbovirus",
    intro: "A viral illness marked by sudden high fever, rash, and severe, often crippling polyarthralgia lasting weeks to months.",
    cause: "Chikungunya virus (CHIKV), transmitted by bites of daytime-biting Aedes mosquitoes (A. aegypti & A. albopictus).",
    types: [
      { name: "Monotypic", desc: "No major sub-types; presentation varies from acute to chronic joint sequelae." }
    ],
    tests: "RT-PCR (first 5–7 days for viral RNA) and IgM Antibody ELISA (detectable after day 5)."
  },
  {
    num: "7",
    title: "Dengue",
    subtitle: "Breakbone Fever",
    intro: "An acute viral infection causing sudden high fever, retro-orbital headache, severe bone/joint pain, and petechial rash.",
    cause: "Dengue virus (DENV 1-4), transmitted primarily by female Aedes aegypti mosquitoes.",
    types: [
      { name: "Classic Dengue", desc: "Standard self-limiting febrile syndrome." },
      { name: "DHF / DSS", desc: "Dengue Hemorrhagic Fever / Shock Syndrome with severe plasma leak and shock." }
    ],
    tests: "NS1 Antigen ELISA (days 1–5), IgM/IgG antibodies (day 5+), CBC (monitoring Platelet drop & Hematocrit rise)."
  },
  {
    num: "8",
    title: "Anaemia",
    subtitle: "Decreased Oxygen Carrying Capacity",
    intro: "A condition where circulating RBC mass or hemoglobin concentration is abnormally low, reducing tissue oxygenation and causing fatigue.",
    cause: "Iron deficiency, Vit B12/Folate deficiency, chronic occult blood loss, bone marrow suppression, or hemolysis.",
    types: [
      { name: "Iron-deficiency", desc: "Most common; microcytic hypochromic RBCs." },
      { name: "Megaloblastic", desc: "Lack of B12 or folate; macrocytic cells." },
      { name: "Sickle Cell / Hemolytic", desc: "Abnormal Hb causing sickling and premature lysis." }
    ],
    tests: "Complete Blood Count (CBC) with Hb%, Peripheral Blood Smear (PBS), Serum Ferritin & Iron profile."
  },
  {
    num: "9",
    title: "Bell's Palsy",
    subtitle: "Acute Peripheral Facial Palsy",
    intro: "Sudden, unexplained, temporary unilateral weakness or complete flaccid paralysis of the facial muscles supplied by the 7th cranial nerve.",
    cause: "Inflammation/edema of Facial Nerve (CN VII) in the fallopian canal, commonly post-reactivation of HSV-1.",
    types: [
      { name: "Unilateral LMN", desc: "Classic lower motor neuron lesion affecting both upper and lower facial halves." }
    ],
    tests: "Clinical diagnosis (loss of forehead wrinkling + incomplete eye closure). MRI/CT only to rule out central stroke or tumor."
  },
  {
    num: "10",
    title: "Jaundice (Icterus)",
    subtitle: "Bilirubin Hyperaccumulation",
    intro: "Yellowish discoloration of sclera, skin, and mucous membranes caused by elevated levels of circulating bilirubin (>2-3 mg/dL).",
    cause: "Overproduction of bilirubin, impaired liver processing/conjugation, or mechanical biliary tract obstruction.",
    types: [
      { name: "Pre-hepatic (Hemolytic)", desc: "Excess RBC breakdown (unconjugated bilirubin)." },
      { name: "Hepatic (Hepatocellular)", desc: "Hepatocyte damage (viral hepatitis, cirrhosis)." },
      { name: "Post-hepatic (Obstructive)", desc: "Biliary outflow block (gallstones, head of pancreas tumor)." }
    ],
    tests: "Liver Function Test (Total/Direct Bilirubin, SGOT, SGPT, ALP), Urine bile salts/pigments, Ultrasound abdomen."
  },
  {
    num: "11",
    title: "Nephrotic Syndrome",
    subtitle: "Heavy Proteinuric Kidney Disease",
    intro: "A glomerular disorder defined by massive proteinuria (>3.5g/day), hypoalbuminemia, hyperlipidemia, and marked generalized edema.",
    cause: "Increased glomerular permeability from podocyte injury (Minimal Change Disease, FSGS, Membranous) or secondary to Diabetes/Lupus.",
    types: [
      { name: "Primary Glomerular", desc: "Idiopathic disease isolated strictly to the kidneys." },
      { name: "Secondary Glomerular", desc: "Associated with systemic disease (Diabetic nephropathy, Amyloidosis)." }
    ],
    tests: "24-hr Urine Protein / Spot UPCR, Serum Albumin, Lipid Profile, Renal Biopsy (when indicated)."
  },
  {
    num: "12",
    title: "Nephritic Syndrome",
    subtitle: "Inflammatory Glomerular Disorder",
    intro: "A syndrome characterized by glomerular inflammation causing gross/microscopic hematuria (cola-colored urine), oliguria, and hypertension.",
    cause: "Immune complex deposition in glomeruli triggering acute inflammation (e.g., Post-Streptococcal Glomerulonephritis - PSGN).",
    types: [
      { name: "Acute Nephritic", desc: "Abrupt onset post-pharyngeal or cutaneous streptococcal infection." },
      { name: "Rapidly Progressive (RPGN)", desc: "Crescentic glomerulonephritis with swift renal failure over weeks." }
    ],
    tests: "Urinalysis (RBC casts, mild proteinuria), Serum Creatinine & BUN, ASO titer, Complement (C3/C4) levels."
  }
];

export default function ClinicalCompendiumPage() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>High-Yield<br/><span className="text-red-600 dark:text-rose-400">Exam Notes</span></>}>
        Clinical Medicine Compendium
      </HandwrittenTitle>

      <div className="text-center mb-12">
        <p className="text-blue-700 dark:text-green-400 text-xl max-w-2xl mx-auto leading-relaxed">
          12 Core High-Yield Topics for Pathology, Roga Nidan & Clinical Medicine. Optimized for short notes and viva revision.
        </p>
      </div>

      <div className="space-y-12">
        {TOPICS.map((item) => (
          <div 
            key={item.num}
            className="p-6 md:p-8 border-2 border-slate-800 dark:border-[#d4c5b0] bg-white/60 dark:bg-[#342a20]/70 shadow-sm relative"
            style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}
          >
            {/* Header / Number */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <HandwrittenBox>
                  #{item.num}
                </HandwrittenBox>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-[#f0e6d2]">
                  {item.title}
                </h2>
              </div>
              <span className="text-sm font-sans font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 dark:bg-[#251e17] text-slate-600 dark:text-[#d4c5b0] rounded-sm border border-slate-300 dark:border-[#d4c5b0]/30">
                {item.subtitle}
              </span>
            </div>

            {/* Introduction */}
            <div className="mb-4 text-xl">
              <span className="font-bold underline decoration-slate-400 text-slate-800 dark:text-[#f0e6d2] mr-2">
                Introduction:
              </span>
              <span className="text-blue-700 dark:text-green-400 leading-relaxed">
                {item.intro}
              </span>
            </div>

            {/* Cause */}
            <div className="mb-4 text-xl">
              <span className="font-bold text-red-600 dark:text-rose-400 mr-2">
                Cause / Etiology:
              </span>
              <span className="text-slate-800 dark:text-[#f0e6d2]">
                {item.cause}
              </span>
            </div>

            {/* Types */}
            <div className="mb-4 text-xl">
              <span className="font-bold text-slate-800 dark:text-[#f0e6d2] block mb-2 underline decoration-slate-400">
                Types / Classification:
              </span>
              <ul className="pl-6 space-y-1.5 list-disc list-inside marker:text-red-600 dark:marker:text-rose-400 text-blue-700 dark:text-green-400">
                {item.types.map((t, idx) => (
                  <li key={idx}>
                    <span className="font-bold text-slate-800 dark:text-[#f0e6d2]">{t.name}: </span>
                    <span>{t.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tests */}
            <div className="pt-4 border-t-2 border-dashed border-slate-300 dark:border-[#d4c5b0]/30 text-xl flex flex-wrap items-baseline gap-2">
              <span className="font-bold text-red-600 dark:text-rose-400">
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
