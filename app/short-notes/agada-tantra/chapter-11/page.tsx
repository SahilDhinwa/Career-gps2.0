"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter11() {
  return (
    <HandwrittenCanvas>
      {/* FIXED VERCEL BUILD ERROR: Removed JSX fragment from badge */}
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 11: जाङ्गम विष (Animal Poisoning)
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Jangama Visha - Snakes, Spiders, Scorpions &amp; Rabies
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> जिन जीवों में जीवन (चेतना) होता है, उनके द्वारा उत्पन्न विष को <NText bold>&apos;जाङ्गम विष&apos;</NText> कहते हैं। आचार्य सुश्रुत के अनुसार जाङ्गम विष के 16 अधिष्ठान (Sites) होते हैं, जैसे— दृष्टि, निःश्वास, दंष्ट्रा (दांत), नख, मूत्र, मल, लार आदि। इस अध्याय में हम मुख्य रूप से सर्प (Snake), लूता (Spider), वृश्चिक (Scorpion), और अलर्क (Rabies) का अध्ययन करेंगे।
        </NText>
      </div>

      {/* ========================================== */}
      {/* 1. SARPA VISHA / SNAKE BITE                  */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          1. सर्प विष (Sarpa Visha / Snake Bite)
        </HandwrittenBox>
      </div>
      
      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में 10-mark प्रश्न: सर्पों के प्रकार, दंश के प्रकार तथा सर्पदंश में उपयोगी प्रतिविष सहित उपचार विधि।
      </NText>

      {/* Snake: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <NCard title="सर्पों के प्रकार (Types of Snakes - Susruta)">
            <ul className="space-y-2 list-disc list-inside mt-2">
              <li><NText bold>दर्वीकर (Darvikara - Hooded Snakes):</NText> जिनके सिर पर फन (Hood) होता है। इनका विष <NAccent bold>वात प्रकोपक</NAccent> होता है।</li>
              <li><NText bold>मण्डली (Mandali - Vipers):</NText> जिनके शरीर पर गोल-गोल मण्डल (Circular patches) होते हैं। इनका विष <NAccent bold>पित्त प्रकोपक</NAccent> होता है।</li>
              <li><NText bold>राजिमान (Rajimana - Kraits/Striped):</NText> जिनके शरीर पर लंबी धारियां (Stripes) होती हैं। इनका विष <NAccent bold>कफ प्रकोपक</NAccent> होता है।</li>
            </ul>
          </NCard>

          <NCard title="सर्पदंश के प्रकार (Types of Snake Bites)">
            <ul className="space-y-2 list-disc list-inside mt-2">
              <li><NText bold>सर्पित (Sarpita):</NText> यह गहरा और अत्यंत विषैला घाव होता है, जिसमें सर्प के 1, 2 या अधिक दांतों के गहरे निशान होते हैं और बहुत खून बहता है।</li>
              <li><NText bold>रडित (Radita):</NText> यह हल्का घाव होता है, जिसमें विष की मात्रा कम होती है और दांतों के निशान हल्के लाल या नीले होते हैं।</li>
              <li><NText bold>निर्विष (Nirvisha):</NText> यह बिना विष वाले सांप का या केवल भय के कारण लगा हुआ दंश है। इसमें कोई सूजन या विष के लक्षण नहीं होते।</li>
            </ul>
          </NCard>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">आयुर्वेदिक चिकित्सा (Management):</NAccent>
            <p className="mb-2 italic opacity-80">सर्प विष में &apos;चतुर्विंशति उपक्रम&apos; (24 modalities) का प्रयोग होता है:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>अरिष्ट बन्धन (Tourniquet):</NText> दंश स्थान के 4 अंगुल ऊपर कपड़े या छाल से कसकर पट्टी बांधें ताकि विष पूरे शरीर में न फैले।</li>
              <li><NText bold>आचूषण एवं रक्तमोक्षण:</NText> मुख में बालू रखकर विष चूसना या जोंक (Leech) से दूषित रक्त निकालना।</li>
              <li><NText bold>अगद पान:</NText> बिल्वादि अगद या दशांग अगद का पान और लेप सर्वोत्तम है।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Snake: Modern */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Toxicological Perspective (Ophitoxemia)</HandwrittenBox>
        </div>
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-2 text-lg">The &apos;Big Four&apos; Venomous Snakes in India:</NAccent>
            <ul className="space-y-1 list-disc list-inside">
              <li><NText bold>Indian Cobra</NText> (Naja naja) - Neurotoxic venom.</li>
              <li><NText bold>Common Krait</NText> (Bungarus caeruleus) - Neurotoxic venom.</li>
              <li><NText bold>Russell&apos;s Viper</NText> (Daboia russelii) - Hemotoxic / Vasculotoxic venom.</li>
              <li><NText bold>Saw-scaled Viper</NText> (Echis carinatus) - Hemotoxic venom.</li>
            </ul>
          </div>

          <NCard title="Clinical Features (Symptoms of Envenomation)">
            <ul className="space-y-3 list-[circle] list-inside mt-2">
              <li>
                <NText bold className="underline decoration-[var(--theme-border)]">Neurotoxic Bites (Cobra &amp; Krait):</NText> Venom paralyzes the nervous system. The classic symptoms are <NAccent bold>Ptosis</NAccent> (drooping of eyelids), diplopia (double vision), dysphagia (difficulty swallowing), descending muscle paralysis, and death due to respiratory failure (diaphragm paralysis).
              </li>
              <li>
                <NText bold className="underline decoration-[var(--theme-border)]">Hemotoxic Bites (Vipers):</NText> Venom destroys blood vessels and clotting factors. Causes severe local swelling, blistering, continuous bleeding from the bite site, hematuria (blood in urine), and severe <NAccent bold>Disseminated Intravascular Coagulation (DIC)</NAccent>.
              </li>
            </ul>
          </NCard>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">Modern Management &amp; Antidote:</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Specific Antidote:</NText> <NAccent bold>Polyvalent ASV (Anti-Snake Venom)</NAccent> is the only definitive life-saving treatment. It neutralizes the venom of the Big Four snakes. It is administered via continuous IV infusion.</li>
              <li><NText bold>For Neurotoxic Bites:</NText> Injection Neostigmine (with Atropine) is given to reverse muscle paralysis (especially in Cobra bites).</li>
              <li><NText bold>First Aid (Do&apos;s and Don&apos;ts):</NText> Keep the patient completely immobilized. DO NOT cut the wound, DO NOT suck the venom, and DO NOT apply a tight tourniquet (use a crepe bandage instead). Administer Tetanus Toxoid (TT).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. LOOTA VISHA / SPIDER                      */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          2. लूता विष (Loota Visha / Spider Poisoning)
        </HandwrittenBox>
      </div>
      
      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में 5 और 10-mark प्रश्न: लूता प्रकार, विष अधिष्ठान, लक्षण एवं उपचार।
      </NText>

      {/* Spider: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>लूता के प्रकार (Types of Loota):</NText> आयुर्वेद में लूता (मकड़ी) की उत्पत्ति महर्षि वशिष्ठ के पसीने (क्रोध) से मानी गई है। इसके मुख्य 16 प्रकार होते हैं, जिन्हें दो भागों में बांटा गया है: 8 कृच्छसाध्य (Difficult to cure) और 8 असाध्य / प्राणहर (Incurable / Deadly).</li>
            <li><NText bold>विष अधिष्ठान (Visha Adhisthana - 7 Sites):</NText> <NAccent bold className="italic">यह बहुत महत्वपूर्ण प्रश्न है।</NAccent> मकड़ी केवल काटने से ही विष नहीं फैलाती, बल्कि उसके 7 अंगों में विष होता है: 1. लाला (Saliva), 2. नख (Nails), 3. मूत्र (Urine), 4. पुरीष (Feces), 5. आर्तव (Menstrual blood), 6. शुक्र (Semen), 7. दंष्ट्रा (Fangs)।</li>
            <li><NText bold>दंश जनित लक्षण (Symptoms):</NText> दंश स्थान पर मण्डल (Round circular patches) बन जाते हैं। भयंकर जलन (दाह), बुखार (Jwara), और लाल/काले रंग के चकत्ते। दंश स्थान सड़ने लगता है (Kotha / Necrosis) और वहां से दूषित रक्त या पीब (Pus) निकलता है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">आयुर्वेदिक उपचार (Management):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>उत्कर्तन (Excision):</NText> सबसे पहले दंश स्थान को थोड़ा सा काट कर (Incision) विषैला खून बाहर निकाल दें और उसे आग से दाग (Cauterize) दें।</li>
              <li><NText bold>लेप एवं पान:</NText> <NAccent bold>दशांग अगद (Dashanga Agada)</NAccent> लूता विष की सबसे अचूक औषधि है। इसका लेप भी किया जाता है और पीने के लिए भी दिया जाता है।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spider: Modern */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Perspective (Arachnidism / Spider Envenomation)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NCard title="Brown Recluse Spider (Loxosceles reclusa)">
              <p className="mt-2">Its venom is strongly <NText bold>Cytotoxic</NText>. It causes severe local tissue necrosis (सड़न), an ulcerating deep wound, and a classic <NAccent bold>&quot;red, white, and blue&quot; bullseye lesion.</NAccent></p>
            </NCard>
            <NCard title="Black Widow Spider (Latrodectus mactans)">
              <p className="mt-2">Its venom is strongly <NText bold>Neurotoxic</NText>. It causes severe muscle cramps, abdominal rigidity <NAccent bold>(board-like abdomen)</NAccent>, and profuse sweating.</p>
            </NCard>
          </div>
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-4">
            <NAccent bold className="block mb-1">Modern Management:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>Wash the site with soap and water. Apply cold packs (Ice) to reduce swelling.</li>
              <li>Administer Analgesics (NSAIDs) for pain relief and Antibiotics to prevent secondary bacterial infection.</li>
              <li>Specific Antivenom is available for Black Widow bites in severe cases.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. VRISCHIKA VISHA / SCORPION                */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          3. वृश्चिक विष (Vrischika Visha / Scorpion Sting)
        </HandwrittenBox>
      </div>

      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * परीक्षा में 5-mark प्रश्न: वृश्चिकों के प्रकार, दंश जनित लक्षण एवं उपचार।
      </NText>

      {/* Scorpion: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>वृश्चिकों के प्रकार (Types of Scorpions):</NText> आचार्य सुश्रुत ने उत्पत्ति के आधार पर वृश्चिकों को 3 मुख्य वर्गों (कुल 30 प्रकार) में बांटा है:
              <ul className="list-[circle] list-inside pl-6 mt-1 space-y-1">
                <li><NText bold>मन्द विष (Mild Poison - 12 types):</NText> गोबर या सड़ी हुई लकड़ियों से उत्पन्न होते हैं।</li>
                <li><NText bold>मध्य विष (Moderate Poison - 3 types):</NText> ये पीले और लाल रंग के होते हैं।</li>
                <li><NText bold>महाविष / तीक्ष्ण विष (Severe/Deadly Poison - 15 types):</NText> ये सड़े हुए मृत जीवों के शरीर (शव) से उत्पन्न होते हैं। <NAccent bold>इनका विष भयंकर और प्राणघातक होता है。</NAccent></li>
              </ul>
            </li>
            <li><NText bold>दंश जनित लक्षण (Symptoms):</NText> काटने के स्थान पर भयंकर पीड़ा (जैसे जलते हुए अंगारे रख दिए हों), बहुत अधिक सूजन, और श्वास लेने में कठिनाई। दंश स्थान से विष तेजी से ऊपर की ओर चढ़ता है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">आयुर्वेदिक उपचार (Management):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>वृश्चिक विष वात प्रकोपक होता है, इसलिए इसमें <NAccent bold>उष्ण (गर्म) चिकित्सा</NAccent> की जाती है।</li>
              <li>दंश स्थान पर गर्म सेंक (Fomentation) करना चाहिए।</li>
              <li><NText bold>चक्रतैल (Chakrataila)</NText> की मालिश और बिल्वादि अगद का प्रयोग करना चाहिए।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scorpion: Modern */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Perspective (Scorpion Envenomation)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NText bold>Dangerous Species:</NText> The Indian Red Scorpion (Mesobuthus tamulus) is one of the most lethal scorpions in the world.</p>
          
          <NCard title="Mechanism &amp; Symptoms">
            <ul className="space-y-2 list-[circle] list-inside mt-2">
              <li>The venom contains potent neurotoxins that cause massive release of autonomic neurotransmitters (<NAccent bold>Autonomic storm</NAccent>).</li>
              <li>Symptoms include excruciating local pain at the sting site, profuse sweating (diaphoresis), tachycardia (very fast heart rate), and severe hypertension.</li>
              <li><NAccent bold>The most fatal complication is Acute Pulmonary Edema</NAccent> (fluid accumulation in the lungs), which causes the patient to die from respiratory and cardiac failure.</li>
            </ul>
          </NCard>
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-4">
            <NAccent bold className="block mb-1">Modern Management:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>Specific Antidote:</NText> <NAccent bold>Prazosin</NAccent> (an alpha-1 blocker) is the specific and highly effective drug for severe scorpion stings to reverse cardiovascular complications and pulmonary edema.</li>
              <li>Local infiltration of 2% Lignocaine without adrenaline at the sting site for immediate pain relief.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. ALARKA VISHA / RABIES                     */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          4. अलर्क विष (Alarka Visha / Rabies)
        </HandwrittenBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Rabies: Ayurvedic */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
            <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
          </div>
          <div className="space-y-4 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>परिचय:</NText> पागल कुत्ते (Dog), सियार (Jackal), भेड़िया या लोमड़ी के काटने से जो विष फैलता है, उसे &apos;अलर्क विष&apos; कहते हैं।</li>
              <li><NText bold>लक्षण (जलत्रास / Jalatrasa):</NText> <NAccent bold>यह इसका प्रमुख लक्षण है,</NAccent> जिसमें रोगी पानी को देखकर, सुनकर या छूकर भयंकर रूप से डरता है (Hydrophobia)।</li>
            </ul>
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1">चिकित्सा:</NAccent>
              <NText>दंश स्थान से तुरंत दूषित रक्त निकालें और गर्म घी से घाव को जला दें। धतूरे के बीज और श्वेत पुनर्नवा का लेप तथा पान कराएं।</NText>
            </div>
          </div>
        </div>

        {/* Rabies: Modern */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
            <HandwrittenBox>Part B: Modern Perspective</HandwrittenBox>
          </div>
          <div className="space-y-4 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>Pathology:</NText> Rabies is a highly fatal viral disease caused by the Rabies virus (Lyssavirus). It travels through peripheral nerves to the brain, causing severe, irreversible Encephalitis.</li>
              <li><NText bold>Clinical Features:</NText> Hydrophobia (fear of water), Aerophobia (fear of drafts of air), hallucinations, <NAccent bold>excess salivation</NAccent>, and paralysis. Once symptoms appear, it is 100% fatal.</li>
            </ul>
            <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
              <NAccent bold className="block mb-1 text-lg">Post-Exposure Prophylaxis (PEP):</NAccent>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
                <li><NText bold>Wound Care:</NText> <NAccent bold>This is the most crucial step.</NAccent> Wash the bite wound immediately and thoroughly with soap and continuous running water for at least 15 minutes to wash away the virus. DO NOT suture the wound.</li>
                <li><NText bold>Immunization:</NText> Administer Human Rabies Immune Globulin (RIG) directly into and around the wound (Passive immunity), and a full course of the Anti-Rabies Vaccine (ARV) on days 0, 3, 7, 14, and 28.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
