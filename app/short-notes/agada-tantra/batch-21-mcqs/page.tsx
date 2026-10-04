"use client";

import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NCard } from "@/components/NoteElements";

// ================================================================
// 📝 MCQ DATA ARRAY (BATCH 21)
// ================================================================
const QUESTIONS = [
  {
    id: 1,
    question: "क्षारगद का प्रयोग किस विष वेग की चिकित्सा में किया जाता है।",
    translation: "(Ksharagada is indicated in which vega chikitsa.)",
    options: [
      "A. छठवें (Sixth)",
      "B. चौथे (Fourth)",
      "C. सातवें (Seventh)",
      "D. तीसरे (Third)"
    ],
    answer: "A. छठवें / Sixth",
    explanation: "According to the Charaka Samhita, Ksharagada (an alkaline antitoxic preparation) is specifically indicated for the treatment of the sixth stage (Vega) of poisoning."
  },
  {
    id: 2,
    question: "निम्न में से विष वृद्धि का हेतु नहीं है।",
    translation: "(Which is not a cause of visha vruddhi among the followings?)",
    options: [
      "A. क्षुत (Kshut)",
      "B. अजीर्ण (Ajeerna)",
      "C. कफ वृद्धि (Kapha vruddhi)",
      "D. तिल पुष्प गन्ध (Smell of tila pushpa)"
    ],
    answer: "C. कफ वृद्धि / Kapha vruddhi",
    explanation: "Factors like severe hunger (Kshut), indigestion (Ajeerna), and the smell of sesame flowers (Tila pushpa gandha) are known to aggravate poison in the body. Pitta dosha aggravation increases poison toxicity, but Kapha vruddhi generally does not cause Visha Vruddhi."
  },
  {
    id: 3,
    question: "निम्न में से किस गुण के अतिरिक्त विष एवं मद्य में समान गुण पाये जाते हैं।",
    translation: "(Guna of Madya is similar as visha except.)",
    options: [
      "A. व्यवायी (Vyavaayi)",
      "B. विशद (Vishada)",
      "C. लघु (Laghu)",
      "D. रस (Rasa)"
    ],
    answer: "D. रस / Rasa",
    explanation: "Both poison (Visha) and alcohol (Madya) share physical properties like Vyavayi (rapidly spreading) and Laghu (lightness). However, they differ in 'Rasa' (taste). Visha is considered tasteless (Avyakta/Anirdeshya rasa), whereas Madya typically has an acidic or sour taste (Amla rasa)."
  },
  {
    id: 4,
    question: "........देहादशेषं यदनिर्गतं तत्........... किसके लिये कहा गया है?",
    translation: "(.......Dehadashesham yadanirgatam tat..... is said for ?)",
    options: [
      "A. गर विष (Gara visha)",
      "B. शंका विष (Shanka visha)",
      "C. दूषी विष (Dooshi visha)",
      "D. अलर्क विष (Alark visha)"
    ],
    answer: "C. दूषी विष / Dooshi visha",
    explanation: "This is the classical definition of Dooshi Visha from the Sushruta Samhita, describing a poison that has not been completely eliminated from the body and remains dormant in the body's tissues."
  },
  {
    id: 5,
    question: "कालान्तर विपाकि विषं ............ किसके लिये कहा गया है।",
    translation: "(Kalaantara vipaaki visham................... is said for ?)",
    options: [
      "A. शंका विष (Shanka visha)",
      "B. गर विष (Gara visha)",
      "C. दूषी विष (Dooshi visha)",
      "D. अलर्क विष (Alark visha)"
    ],
    answer: "B. गर विष / Gara visha",
    explanation: "'Kalaantara Vipaaki' means a substance that undergoes digestion and shows its toxic effects after a prolonged period. This term is classically used by Acharyas to describe Gara Visha (concocted or artificial poison)."
  },
  {
    id: 6,
    question: "दशांग अगद का आचार्य वाग्भट्ट ने किस विषाक्तता में निर्देश किया है।",
    translation: "(Dashaanga agada is indicated by aacaarya baagbhatt in which poisoning.)",
    options: [
      "A. सर्प विष (Sarpa visha)",
      "B. सर्व कीट विष (Sarva keet visha)",
      "C. वृश्चिक विष (Vrishchika visha)",
      "D. लूता विष (Loota visha)"
    ],
    answer: "B. सर्व कीट विष / Sarva keet visha",
    explanation: "Acharya Vagbhata indicated Dashaanga Agada—a formulation consisting of ten specific medicinal herbs—as a broad-spectrum antidote specifically for all types of insect bites (Sarva Keeta Visha)."
  },
  {
    id: 7,
    question: "टंकण का प्रतिविष के रूप में प्रयोग किया जाता है।",
    translation: "(Tankana is used as antidote in which poising.)",
    options: [
      "A. भल्लातक (Bhallataka)",
      "B. वत्सनाभ (Vatsnaabha)",
      "C. कुचला (Kuchalaa)",
      "D. लांगली (Laangali)"
    ],
    answer: "B. वत्सनाभ / Vatsnaabha",
    explanation: "Tankana Bhasma (purified Borax) is highly effective in neutralizing the severe cardiac depressant effects of Vatsnabha (Aconite) poisoning, making it the classical Ayurvedic antidote of choice."
  },
  {
    id: 8,
    question: "आर्सेनिक की घातक मात्रा है।",
    translation: "(Fatal dose of Arsenic is......)",
    options: [
      "A. 120-200 मि.ग्रा. (120-200 Mg)",
      "B. 100-120 मि.ग्रा. (100-120 Mg)",
      "C. 250-500 मि.ग्रा. (250-500 Mg)",
      "D. 30-80 मि.ग्रा. (30-80 Mg)"
    ],
    answer: "A. 120-200 मि.ग्रा. / 120-200 Mg",
    explanation: "In forensic toxicology, the standard fatal dose of arsenic trioxide for an average adult is widely accepted to be between 120 to 200 milligrams."
  },
  {
    id: 9,
    question: "टोसिस चिह्न किस प्रकार के सर्प दंश में पाया जाता है।",
    translation: "(Ptosis sign present in which type of snake bite.)",
    options: [
      "A. तंत्रिका प्रभावी (Neurotoxic)",
      "B. वाहिका प्रभावी (Vasculotoxic)",
      "C. पेशी प्रभावी (Musculotoxic)",
      "D. किसी में नहीं (None of these)"
    ],
    answer: "A. तंत्रिका प्रभावी / Neurotoxic",
    explanation: "Ptosis (the drooping of the eyelids) is a classic, early neurological symptom of a neurotoxic snake bite (such as from a Cobra or Krait). It occurs due to the paralysis of the cranial nerves controlling eyelid movement."
  },
  {
    id: 10,
    question: "अहिफेन विषाक्तता में मृत्यु का कारण है।",
    translation: "(Cause of death in opium poisoning is-)",
    options: [
      "A. हार्ट अटैक (Heart failure)",
      "B. श्वासावरोध (Respiratory failure)",
      "C. तीव्र कोष्ठ बद्धता (Severe constipation)",
      "D. मस्तिष्क शोथ (Meningitis)"
    ],
    answer: "B. श्वासावरोध / Respiratory failure",
    explanation: "Opium (Ahiphena) is a profound central nervous system depressant. In cases of a lethal overdose, the drug paralyzes the respiratory center located in the brainstem, causing death by respiratory failure."
  },
  {
    id: 11,
    question: "भा.द.सं. मे मृत्यु को परिभाषित किया गया है।",
    translation: "(Death is define under which IPC)",
    options: [
      "A. IPC 46",
      "B. IPC 44",
      "C. IPC 454",
      "D. IPC 49"
    ],
    answer: "A. IPC 46",
    explanation: "Section 46 of the Indian Penal Code (IPC) provides the legal definition of 'Death,' denoting the death of a human being unless the contrary appears from the context."
  },
  {
    id: 12,
    question: "मृत्योत्तर पेशी आकर्ष सर्वप्रथम उत्पन्न होता है।",
    translation: "(Rigor mortis initially develop in which organ.)",
    options: [
      "A. उर्ध्व शाखा में (Upper limb)",
      "B. आई लिड (Eye lid)",
      "C. जबड़े में (Jaw)",
      "D. अग्नाशय में (Pancreas)"
    ],
    answer: "B. आई लिड / Eye lid",
    explanation: "According to Nysten's Law, rigor mortis first appears in the involuntary muscles (like the heart). Among the voluntary muscles, it first affects the small muscles of the eyelids before progressing sequentially to the jaw, neck, trunk, and limbs."
  },
  {
    id: 13,
    question: "गम्भीर क्षत भा.द.सं. में परिभाषित किया गया है।",
    translation: "(Grievous hurt defined under section.....)",
    options: [
      "A. IPC 319",
      "B. IPC 320",
      "C. IPC 324",
      "D. IPC 299"
    ],
    answer: "B. IPC 320",
    explanation: "Section 320 of the Indian Penal Code clearly defines 'Grievous Hurt' by listing eight specific types of severe injuries, including permanent loss of sight, emasculation, and bone fractures."
  },
  {
    id: 14,
    question: "पी.सी.पी.एन.डी.टी. एक्ट भारत में लागू किया गया।",
    translation: "(PCPNDT act enacted in India.)",
    options: [
      "A. 1994",
      "B. 1971",
      "C. 2001",
      "D. 1998"
    ],
    answer: "A. 1994",
    explanation: "The Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act was enacted by the Indian Parliament in 1994. Its primary goal is to ban pre-natal sex determination and curb the practice of female foeticide."
  },
  {
    id: 15,
    question: "ड्रग्स एन्ड कास्मेटिक नियम 1945 के शेड्यूल E में रखा गया है।",
    translation: "(Schedule E of Drugs and cosmetic rules 1945 includes.)",
    options: [
      "A. Vaccine & Sera",
      "B. Anti histamines and antibiotics",
      "C. Poisons",
      "D. Fungicides"
    ],
    answer: "C. Poisons",
    explanation: "In the Drugs and Cosmetics Rules, 1945, Schedule E explicitly contains the list of poisonous substances under the Ayurvedic, Siddha, and Unani systems of medicine."
  },
  {
    id: 16,
    question: "शतस्यैकोत्र जीवति ।",
    translation: "(One among hundred people survives in case of -)",
    options: [
      "A. सर्प विष (Sarpa visha)",
      "B. विष संकट (Visha sankat)",
      "C. सर्पांगाभिहत (Sarpangabhihata)",
      "D. शंका विष (Shanka visha)"
    ],
    answer: "B. विष संकट / Visha sankat",
    explanation: "'Shatasyaiko atra jeevati' is a classic phrase used by Vagbhata to describe Visha Sankat. It means that when poison aligns with aggravating factors (like seasonal weather and body constitution), the condition is so lethal that only one in a hundred people might survive."
  },
  {
    id: 17,
    question: "कड़वे बादामवत गन्ध मिलती है।",
    translation: "(Bitter almond like smell occurs in which poisoning.)",
    options: [
      "A. CO Poisoning",
      "B. Cyanide Poisoning",
      "C. Aspirin Poisoning",
      "D. Organophosphate Poisoning"
    ],
    answer: "B. Cyanide Poisoning",
    explanation: "A classic, telltale sign of acute cyanide poisoning is the distinct odor of bitter almonds on the victim's breath. However, it is important to note that due to genetics, not everyone is capable of detecting this smell."
  },
  {
    id: 18,
    question: "रासायनिक संगठन के रूप में कोल्चिसिन पाया जाता है।",
    translation: "(Colchicine is the chemical constituent present in)",
    options: [
      "A. अर्क (Arka)",
      "B. लांगली (Langali)",
      "C. गुन्जा (Gunja)",
      "D. भल्लातक (Bhallatak)"
    ],
    answer: "B. लांगली / Langali",
    explanation: "Langali (Gloriosa superba) naturally contains the highly toxic alkaloid colchicine. Colchicine acts as an antimitotic toxin, causing severe gastrointestinal distress and systemic failure if ingested in high doses."
  },
  {
    id: 19,
    question: "आचार्य सुश्रुत अनुसार कन्द विषों की संख्या है।",
    translation: "(Total number of Kanda visha as per aachaarya sushrut.)",
    options: [
      "A. 12",
      "B. 13",
      "C. 8",
      "D. 5"
    ],
    answer: "B. 13",
    explanation: "According to Acharya Sushruta in the Kalpa Sthana of the Sushruta Samhita, there are 13 specific types of Kanda Visha (tuberous or bulbous plant poisons)."
  },
  {
    id: 20,
    question: "रथ, हल, छत्र, स्वस्तिक एवं अंकुश आदि चिह्नों का धारण करने वाले सर्प होते हैं।",
    translation: "(Rath, Hala, chhatra, swastika and ankush marks found in ...)",
    options: [
      "A. मण्डली (Mandali)",
      "B. दर्वीकर (Darvikara)",
      "C. वैकरंज (Vaikaranja)",
      "D. राजिमान (Raajimaana)"
    ],
    answer: "B. दर्वीकर / Darvikara",
    explanation: "In Ayurvedic toxicology, Darvikara snakes (hooded snakes like the cobra) are classically identified by specific, unique marks on their hoods that resemble objects such as a chariot wheel (Rath), plow (Hala), umbrella (Chhatra), or Swastika."
  }
];

export default function Batch21MainPaperMCQs() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Agada Tantra">
        Batch 21 Main Paper: Solved MCQs
      </HandwrittenTitle>

      <div className="text-center mb-8 md:mb-12">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Previous Year Questions (PYQ)
        </span>
      </div>

      <div className="space-y-6 md:space-y-8 pl-1 md:pl-2 text-[var(--theme-text)]">
        {QUESTIONS.map((q) => (
          <NCard key={q.id}>
            <NText bold className="block text-lg md:text-xl">
              Q{q.id}. {q.question}
            </NText>
            
            <p className="text-sm md:text-base italic opacity-80 mb-3">
              {q.translation}
            </p>
            
            <ul className="pl-4 mb-4 space-y-1 text-base">
              {q.options.map((opt, index) => (
                <li key={index}>{opt}</li>
              ))}
            </ul>
            
            <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NText bold className="text-[var(--theme-accent)]">
                Answer: {q.answer}
              </NText>
              <p className="mt-1 text-sm md:text-base">
                <NText bold>Explanation:</NText> {q.explanation}
              </p>
            </div>
          </NCard>
        ))}
      </div>
      
    </HandwrittenCanvas>
  );
}
