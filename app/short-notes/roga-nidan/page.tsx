"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

// The full syllabus data mapped to the Srotas
const ROGA_NIDAN_SYLLABUS = [
  {
    srotas: "1. प्राणवह स्रोतस (Respiratory System)",
    diseases: [
      { name: "हिक्का रोग (Hiccough)", link: "#", status: "Draft" },
      { name: "श्वास रोग (Dyspnoea, Asthma)", link: "#", status: "Draft" },
      { name: "कास रोग (Cough)", link: "#", status: "Draft" },
      { name: "राजयक्ष्मा (Tuberculosis)", link: "/short-notes/roga-nidan/tuberculosis", status: "Active" },
      { name: "क्षतक्षीण (Pulmonary Abscess)", link: "#", status: "Draft" },
      { name: "शोष रोग (Consumption/Emaciation)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "2. उदकवह स्रोतस (Fluid Channels)",
    diseases: [
      { name: "तृष्णा रोग (Polydypsia)", link: "#", status: "Draft" },
      { name: "अतिसार (Diarrhoea)", link: "/short-notes/roga-nidan/atisara", status: "Active" },
      { name: "प्रवाहिका रोग (Dysentery)", link: "#", status: "Draft" },
      { name: "विसूचिका (Cholera / Gastroenteritis)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "3. अन्नवह स्रोतस (Digestive System)",
    diseases: [
      { name: "अरुचि (Anorexia)", link: "#", status: "Draft" },
      { name: "अग्निमांद्य (Digestive Insufficiency)", link: "#", status: "Draft" },
      { name: "अजीर्ण (Indigestion)", link: "#", status: "Draft" },
      { name: "आनाह, आध्मान तथा आटोप (Constipation & Flatulence)", link: "#", status: "Draft" },
      { name: "ग्रहणी रोग (Malabsorption Syndrome)", link: "#", status: "Draft" },
      { name: "छर्दि (Vomiting)", link: "#", status: "Draft" },
      { name: "गुल्म रोग (Painful Lump)", link: "#", status: "Draft" },
      { name: "अम्लपित्त (Hyperacidity)", link: "#", status: "Draft" },
      { name: "अन्नद्रव शूल एवं परिणामशूल (Peptic Ulcers)", link: "#", status: "Draft" },
      { name: "उदर रोग (Abdominal Swellings)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "4. रसवह स्रोतस (Plasma / Lymphatic)",
    diseases: [
      { name: "ज्वर रोग (Fever)", link: "#", status: "Draft" },
      { name: "पाण्डु रोग (Anaemia)", link: "#", status: "Draft" },
      { name: "आमवात (Rheumatoid Arthritis)", link: "/short-notes/roga-nidan/amavata", status: "Active" },
      { name: "मदात्यय (Alcoholism)", link: "#", status: "Draft" },
      { name: "हृद्रोग (Heart Diseases)", link: "#", status: "Draft" },
      { name: "शोथ रोग (Oedemas)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "5. रक्तवह स्रोतस (Blood System)",
    diseases: [
      { name: "रक्तपित्त (Haemorrhagic Disorders)", link: "#", status: "Draft" },
      { name: "कुम्भ कामला-हलीमक (Jaundice)", link: "#", status: "Draft" },
      { name: "दाह रोग (Burning Syndrome)", link: "#", status: "Draft" },
      { name: "वातरक्त (Gout)", link: "#", status: "Draft" },
      { name: "कुष्ठ रोग (Leprosy)", link: "#", status: "Draft" },
      { name: "श्वित्र-किलास (Vitiligo-Leucoderma)", link: "#", status: "Draft" },
      { name: "विसर्प रोग (Erysipelas)", link: "#", status: "Draft" },
      { name: "शीतपित्त, उदर्द व कोठ (Allergic Reactions / Urticaria)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "6. मांसवह एवं मेदोवह स्रोतस (Muscle & Adipose)",
    diseases: [
      { name: "ग्रन्थि तथा अर्बुद रोग (Cysts and Tumours)", link: "#", status: "Draft" },
      { name: "स्थौल्य (Obesity) & कार्श्य रोग (Emaciation)", link: "#", status: "Draft" },
      { name: "प्रमेह / मधुमेह (Diabetes Mellitus)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "7. अस्थिवह / मज्जावह स्रोतस (Bone, Marrow & Neuro)",
    diseases: [
      { name: "सन्धिगत वात (Osteoarthritis)", link: "#", status: "Draft" },
      { name: "फक्क रोग (Rickets)", link: "#", status: "Draft" },
      { name: "वात व्याधियाँ (Neurological Disorders: Paralysis, Sciatica, etc.)", link: "#", status: "Draft" },
      { name: "कम्पवात (Parkinsonism) & आक्षेपक (Convulsions)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "8. शुक्रवह स्रोतस (Reproductive System)",
    diseases: [
      { name: "क्लैब्य (Impotency) & वन्ध्यता (Sterility)", link: "#", status: "Draft" },
      { name: "उपदंश (ध्वजभंग) - STDs", link: "#", status: "Draft" },
      { name: "फिरंग रोग (Syphilis)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "9. मूत्रवह एवं पुरीषवह स्रोतस (Urinary & Excretory)",
    diseases: [
      { name: "मूत्रकृच्छ्र (Dysuria) & मूत्राघात (Retention)", link: "#", status: "Draft" },
      { name: "अलसक एवं विलम्बिका (Intestinal Obstruction)", link: "#", status: "Draft" },
      { name: "कृमि रोग (Helminthiasis)", link: "#", status: "Draft" },
      { name: "अर्श रोग (Piles / Haemorrhoids)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "10. स्वेदवह स्रोतस (Sweat & Hair)",
    diseases: [
      { name: "खालित्य/इन्द्रलुप्त (Alopecia)", link: "#", status: "Draft" },
      { name: "पलित रोग (Premature greying of hair)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "11. मनोवह स्रोतस (Psychological Disorders)",
    diseases: [
      { name: "उन्माद (Psychosis) & भूतोन्माद", link: "#", status: "Draft" },
      { name: "अपस्मार रोग (Epilepsy)", link: "#", status: "Draft" },
      { name: "अतत्वाभिनिवेश (Obsessive Disorders)", link: "#", status: "Draft" },
      { name: "मद रोग & मूर्च्छा रोग (Fainting)", link: "#", status: "Draft" },
      { name: "संन्यास (Coma) & भ्रम रोग (Vertigo)", link: "#", status: "Draft" },
      { name: "अनिद्रा (Insomnia) & विषाद रोग (Depression)", link: "#", status: "Draft" }
    ]
  },
  {
    srotas: "12. उपसर्गजन्य व्याधियाँ (Communicable Diseases)",
    diseases: [
      { name: "रोमान्तिका (Measles) & मसूरिका (Small Pox)", link: "#", status: "Draft" },
      { name: "स्नायुक रोग (Guinea Worm Disease)", link: "#", status: "Draft" },
      { name: "श्लीपद रोग (Filariasis)", link: "#", status: "Draft" }
    ]
  }
];

export default function RogaNidanIndex() {
  return (
    <HandwrittenCanvas>
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          href="/short-notes" 
          className="inline-flex items-center gap-2 text-slate-500 dark:text-[#d4c5b0] hover:text-red-600 dark:hover:text-[#ff0055] transition-colors font-bold text-lg font-sans"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Master Index
        </Link>
      </div>

      <HandwrittenTitle badge={<>NCISM<br/><span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_8px_rgba(255,0,85,0.7)]">Syllabus</span></>}>
        Roga Nidan (रोग निदान)
      </HandwrittenTitle>

      <p className="text-blue-700 dark:text-[#e8dcc4] text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
        Complete BAMS 2nd Prof syllabus categorized by Srotas (Body Channels). Select an active topic below to access the high-yield handwritten notes.
      </p>

            {/* Specialty Compendiums - Now styled as clickable cards */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-[#e8dcc4] mb-6 flex items-center gap-3">
          <span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)]">⚡</span> 
          Quick Revision Compendiums
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/short-notes/roga-nidan/clinical-compendium" 
            className="group flex flex-col p-4 border-2 border-slate-300 dark:border-[#8b7355] bg-white dark:bg-[#1a110a]/50 hover:bg-slate-50 dark:hover:bg-[#251e17] hover:border-red-600 dark:hover:border-[#ff0055] dark:hover:drop-shadow-[0_0_8px_rgba(255,0,85,0.3)] rounded-lg transition-all duration-300"
          >
            <span className="text-lg font-bold text-slate-800 dark:text-[#e8dcc4] group-hover:text-red-600 dark:group-hover:text-[#ff0055] transition-colors">
              12 High-Yield Clinical Conditions
            </span>
            <span className="text-sm text-slate-500 dark:text-[#8b7355] mt-1 font-sans">Modern pathology & diagnostics</span>
          </Link>

          <Link 
            href="/short-notes/roga-nidan/neuro-spine" 
            className="group flex flex-col p-4 border-2 border-slate-300 dark:border-[#8b7355] bg-white dark:bg-[#1a110a]/50 hover:bg-slate-50 dark:hover:bg-[#251e17] hover:border-red-600 dark:hover:border-[#ff0055] dark:hover:drop-shadow-[0_0_8px_rgba(255,0,85,0.3)] rounded-lg transition-all duration-300"
          >
            <span className="text-lg font-bold text-slate-800 dark:text-[#e8dcc4] group-hover:text-red-600 dark:group-hover:text-[#ff0055] transition-colors">
              Neuro & Spine Disorders
            </span>
            <span className="text-sm text-slate-500 dark:text-[#8b7355] mt-1 font-sans">Stroke, Parkinson&apos;s, Sciatica</span>
  </Link>

          <Link 
            href="/short-notes/roga-nidan/skin-diseases" 
            className="group flex flex-col p-4 border-2 border-slate-300 dark:border-[#8b7355] bg-white dark:bg-[#1a110a]/50 hover:bg-slate-50 dark:hover:bg-[#251e17] hover:border-red-600 dark:hover:border-[#ff0055] dark:hover:drop-shadow-[0_0_8px_rgba(255,0,85,0.3)] rounded-lg transition-all duration-300"
          >
            <span className="text-lg font-bold text-slate-800 dark:text-[#e8dcc4] group-hover:text-red-600 dark:group-hover:text-[#ff0055] transition-colors">
              Skin Diseases & Lesions
            </span>
            <span className="text-sm text-slate-500 dark:text-[#8b7355] mt-1 font-sans">Eczema, Psoriasis, Leprosy</span>
          </Link>

          <Link 
            href="/short-notes/roga-nidan/systemic-disorders" 
            className="group flex flex-col p-4 border-2 border-slate-300 dark:border-[#8b7355] bg-white dark:bg-[#1a110a]/50 hover:bg-slate-50 dark:hover:bg-[#251e17] hover:border-red-600 dark:hover:border-[#ff0055] dark:hover:drop-shadow-[0_0_8px_rgba(255,0,85,0.3)] rounded-lg transition-all duration-300"
          >
            <span className="text-lg font-bold text-slate-800 dark:text-[#e8dcc4] group-hover:text-red-600 dark:group-hover:text-[#ff0055] transition-colors">
              Systemic & Endocrine Disorders
            </span>
            <span className="text-sm text-slate-500 dark:text-[#8b7355] mt-1 font-sans">Diabetes, MI, UTI</span>
          </Link>
        </div>
      </div>

      <div className="space-y-12">
        {ROGA_NIDAN_SYLLABUS.map((section, idx) => (
          <div key={idx} className="relative">
            
            {/* Subject Header */}
            <div className="flex items-center gap-4 text-2xl mb-6">
              <HandwrittenBox>
                {section.srotas}
              </HandwrittenBox>
              <div className="flex-grow border-b-2 border-dashed border-slate-300 dark:border-[#8b7355]"></div>
            </div>

            {/* Topics List */}
            <ul className="space-y-4 pl-4 md:pl-12 text-xl grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {section.diseases.map((topic, topicIdx) => (
                <li key={topicIdx} className="flex items-center gap-3">
                  <span className="text-red-600 dark:text-[#ff0055] dark:drop-shadow-[0_0_6px_rgba(255,0,85,0.8)] font-bold">→</span>
                  
                  {topic.status === "Active" ? (
                    <Link 
                      href={topic.link} 
                      className="text-blue-700 dark:text-[#e8dcc4] hover:text-red-600 dark:hover:text-[#ff0055] underline decoration-slate-300 dark:decoration-[#8b7355] hover:decoration-red-600 dark:hover:decoration-[#ff0055] underline-offset-4 transition-all"
                    >
                      {topic.name}
                    </Link>
                  ) : (
                    <span className="text-slate-500 dark:text-[#8b7355] line-through decoration-slate-300 dark:decoration-[#8b7355]/50">
                      {topic.name}
                    </span>
                  )}

                  {/* Status Badge */}
                  {topic.status === "Active" && (
                    <span className="text-[12px] font-sans font-bold bg-emerald-100 dark:bg-[#1a110a] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2 border border-emerald-200 dark:border-emerald-900">
                      Active
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </HandwrittenCanvas>
  );
}
