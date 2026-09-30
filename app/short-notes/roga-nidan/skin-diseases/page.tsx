"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

const SKIN_TOPICS = [
  {
    num: "1",
    title: "Eczema",
    subtitle: "Allergic Dermatitis",
    intro: "An allergic disorder that makes the skin red, itchy, dry, and inflamed. Often flares up periodically.",
    cause: "A combination of immune system overactivation, genetics, environmental triggers (harsh soaps, dry weather), and stress.",
    types: [
      { name: "Atopic dermatitis", desc: "Most common; linked to allergies and asthma." },
      { name: "Contact dermatitis", desc: "Caused by direct contact with an irritant/allergen." },
      { name: "Dyshidrotic eczema", desc: "Causes small, itchy blisters on hands and feet." }
    ],
    tests: "Usually diagnosed visually. Allergy skin patch test used to identify specific triggers."
  },
  {
    num: "2",
    title: "Urticaria",
    subtitle: "Hives",
    intro: "An allergic skin disorder characterized by the sudden appearance of itchy, raised, red or skin-colored welts on the surface of the skin.",
    cause: "Allergic reaction to food, medication, or bug bites, triggering a massive release of histamine in the skin.",
    types: [
      { name: "Acute", desc: "Lasts less than six weeks (usually food/drug allergy)." },
      { name: "Chronic", desc: "Lasts longer than six weeks (often idiopathic or autoimmune)." }
    ],
    tests: "Allergy testing (skin prick or IgE blood tests) to find the specific trigger."
  },
  {
    num: "3",
    title: "Psoriasis",
    subtitle: "Squamous Lesion",
    intro: "A chronic autoimmune condition where skin cells build up rapidly, creating thick, red, scaly patches (plaques) that are itchy and painful.",
    cause: "An overactive immune system (T-cells) speeds up skin cell growth. Strongly linked to genetic factors.",
    types: [
      { name: "Plaque psoriasis", desc: "Most common; thick red patches with silvery scales." },
      { name: "Guttate", desc: "Small, drop-shaped lesions; often triggered by strep throat." },
      { name: "Pustular", desc: "White pustules surrounded by red skin." }
    ],
    tests: "Clinical physical exam. Skin biopsy may be done to confirm and rule out other conditions."
  },
  {
    num: "4",
    title: "Lichen Planus",
    subtitle: "Squamous Lesion",
    intro: "An inflammatory condition causing swelling, irritation, and purplish, flat-topped, itchy bumps on the skin, hair, nails, or mucous membranes.",
    cause: "An autoimmune response where the body attacks its own skin/mucous cells. Sometimes triggered by Hepatitis C, medications, or stress.",
    types: [
      { name: "Cutaneous", desc: "Affects the skin (wrists, ankles)." },
      { name: "Oral", desc: "Inside the mouth (lacy white patches)." },
      { name: "Genital", desc: "Affects mucosal areas." }
    ],
    tests: "Skin biopsy. Blood tests are mandatory to check for underlying Hepatitis C."
  },
  {
    num: "5",
    title: "Pemphigus",
    subtitle: "Severe Bullous Lesion",
    intro: "A rare and potentially life-threatening autoimmune disease causing severe, flaccid (soft) blisters on the skin and mucous membranes that easily rupture.",
    cause: "The immune system mistakenly produces autoantibodies that destroy the 'glue' (desmoglein) holding healthy skin cells together.",
    types: [
      { name: "Pemphigus vulgaris", desc: "Most common and severe; starts in the mouth." },
      { name: "Pemphigus foliaceus", desc: "Superficial blisters; does not affect mucous membranes." }
    ],
    tests: "Skin biopsy with direct immunofluorescence (DIF). Blood tests for specific autoantibodies."
  },
  {
    num: "6",
    title: "Pemphigoid",
    subtitle: "Deep Bullous Lesion",
    intro: "An autoimmune blistering disease similar to pemphigus, but the blisters occur deeper in the skin (subepidermal), making them tense, hard, and less likely to break.",
    cause: "Autoimmune disorder where antibodies attack the basement membrane zone of the skin. Most frequently affects older adults.",
    types: [
      { name: "Bullous pemphigoid", desc: "Most common; affects the skin." },
      { name: "Mucous membrane pemphigoid", desc: "Affects the eyes, mouth, and throat." }
    ],
    tests: "Skin biopsy and specific blood tests (ELISA) to detect BP antibodies."
  },
  {
    num: "7",
    title: "Mycotic Skin Diseases",
    subtitle: "Fungal Infections",
    intro: "Superficial fungal infections of the skin, hair, or nails. Highly contagious and thrive in warm, moist environments.",
    cause: "Infection by dermatophytes (fungi that require keratin for growth) or yeasts (like Candida).",
    types: [
      { name: "Tinea corporis", desc: "Ringworm (circular red patches)." },
      { name: "Tinea pedis", desc: "Athlete's foot (between toes)." },
      { name: "Tinea cruris", desc: "Jock itch (groin area)." }
    ],
    tests: "KOH prep test (scraping skin scales onto a slide with Potassium Hydroxide to view fungal hyphae under a microscope)."
  },
  {
    num: "8",
    title: "Leprosy",
    subtitle: "Hansen's Disease",
    intro: "A chronic infectious disease severely affecting the skin, peripheral nerves, upper respiratory tract, and eyes. Can lead to severe disfigurement.",
    cause: "Infection by the slow-growing bacterium 'Mycobacterium leprae'.",
    types: [
      { name: "Tuberculoid", desc: "Milder form, high immunity, localized skin patches, less contagious." },
      { name: "Lepromatous", desc: "Severe form, low immunity, widespread nodules, highly contagious." }
    ],
    tests: "Slit-skin smear test (for Acid Fast Bacilli) or a nerve/skin biopsy."
  },
  {
    num: "9",
    title: "Vitiligo",
    subtitle: "Depigmentation Disorder",
    intro: "A condition that causes the complete loss of skin color in patches across the body due to the destruction of pigment-producing cells.",
    cause: "Melanocytes (pigment cells) die or stop functioning, most likely due to an autoimmune attack.",
    types: [
      { name: "Non-segmental", desc: "Generalized across both sides of the body (most common)." },
      { name: "Segmental", desc: "Localized to only one side of the body." }
    ],
    tests: "Wood's lamp examination (UV light reveals depigmented areas). Blood tests to rule out associated autoimmune issues (e.g., thyroid)."
  },
  {
    num: "10",
    title: "Cellulitis",
    subtitle: "Deep Bacterial Infection",
    intro: "A common but potentially serious bacterial skin infection causing expanding redness, severe swelling, warmth, and pain in the deeper layers of the skin.",
    cause: "Bacteria (usually Streptococcus or Staphylococcus) entering the body through a crack, cut, wound, or insect bite.",
    types: [
      { name: "Location-based", desc: "Usually classified by where it occurs (e.g., facial cellulitis, lower leg cellulitis)." }
    ],
    tests: "Clinical diagnosis by visual inspection. Blood tests/cultures are done only if the infection is systemic, severe, or unresponsive to antibiotics."
  }
];

export default function SkinDiseasesCompendium() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>High-Yield<br/><span className="text-red-600 dark:text-rose-400">Dermatology</span></>}>
        Skin Diseases & Lesions
      </HandwrittenTitle>

      <div className="text-center mb-12">
        <p className="text-blue-700 dark:text-green-400 text-xl max-w-2xl mx-auto leading-relaxed">
          10 Core Dermatological conditions including Allergic, Squamous, Bullous, and Infectious lesions.
        </p>
      </div>

      <div className="space-y-12">
        {SKIN_TOPICS.map((item) => (
          <div 
            key={item.num}
            className="p-6 md:p-8 border-2 border-slate-800 dark:border-[#d4c5b0] bg-white/60 dark:bg-[#342a20]/70 shadow-sm relative"
            style={{ borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px" }}
          >
            {/* Header / Number */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <HandwrittenBox borderColor="border-red-600 dark:border-rose-400" textColor="text-red-600 dark:text-rose-400" className="text-xl font-bold">
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
