"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter11() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 11: जाङ्गम विष (Animal Poisoning)
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Jangama Visha - Snakes, Spiders, Scorpions & Rabies
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
              <li><NText bold>दर्वीकर (Darvikara - Hooded):</NText> जिनके सिर पर फन होता है। विष <NAccent bold>वात प्रकोपक</NAccent> होता है।</li>
              <li><NText bold>मण्डली (Mandali - Vipers):</NText> जिनके शरीर पर गोल-गोल मण्डल (Circular patches) होते हैं। विष <NAccent bold>पित्त प्रकोपक</NAccent> होता है।</li>
              <li><NText bold>राजिमान (Rajimana - Kraits):</NText> जिनके शरीर पर लंबी धारियां (Stripes) होती हैं। विष <NAccent bold>कफ प्रकोपक</NAccent> होता है।</li>
            </ul>
          </NCard>

          <NCard title="सर्पदंश के प्रकार (Types of Snake Bites)">
            <ul className="space-y-2 list-disc list-inside mt-2">
              <li><NText bold>सर्पित (Sarpita):</NText> गहरा और अत्यंत विषैला घाव, जिसमें 1-2 या अधिक दांतों के गहरे निशान और बहुत खून बहता है।</li>
              <li><NText bold>रडित (Radita):</NText> हल्का घाव, विष की मात्रा कम, दांतों के निशान हल्के लाल या नीले।</li>
              <li><NText bold>निर्विष (Nirvisha):</NText> बिना विष वाले सांप का या केवल भय के कारण लगा दंश। कोई विष लक्षण नहीं।</li>
            </ul>
          </NCard>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">आयुर्वेदिक चिकित्सा (Management):</NAccent>
            <p className="mb-2 italic opacity-80">सर्प विष में &apos;चतुर्विंशति उपक्रम&apos; (24 modalities) का प्रयोग होता है:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><NText bold>अरिष्ट बन्धन (Tourniquet):</NText> दंश स्थान के 4 अंगुल ऊपर कपड़े या छाल से कसकर पट्टी बांधें ताकि विष फैले नहीं।</li>
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
              <li><NText bold>Indian Cobra</NText> (Naja naja) - Neurotoxic</li>
              <li><NText bold>Common Krait</NText> (Bungarus caeruleus) - Neurotoxic</li>
              <li><NText bold>Russell&apos;s Viper</NText> (Daboia russelii) - Hemotoxic</li>
              <li><NText bold>Saw-scaled Viper</NText> (Echis carinatus) - Hemotoxic</li>
            </ul>
          </div>

          <NCard title="Clinical Features (Symptoms of Envenomation)">
            <ul className="space-y-3 list-[circle] list-inside mt-2">
              <li>
                <NText bold className="underline decoration-[var(--theme-border)]">Neurotoxic Bites (Cobra & Krait):</NText> Paralyzes the nervous system. Classic symptoms: <NAccent bold>Ptosis</NAccent> (drooping eyelids), diplopia (double vision), dysphagia, descending muscle paralysis, and death due to respiratory failure (diaphragm paralysis).
              </li>
              <li>
                <NText bold className="underline decoration-[var(--theme-border)]">Hemotoxic Bites (Vipers):</NText> Destroys blood vessels and clotting factors. Severe local swelling, blistering, continuous bleeding from bite site, hematuria, and severe <NAccent bold>DIC</NAccent> (Disseminated Intravascular Coagulation).
              </li>
            </ul>
          </NCard>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-2 text-lg">Modern Management & Antidote:</NAccent>
            <ul className="space-y-2 list-disc list-inside">
              <li><NText bold>Specific Antidote:</NText> <NAccent bold>Polyvalent ASV (Anti-Snake Venom)</NAccent> is the only definitive life-saving treatment (continuous IV infusion).</li>
              <li><NText bold>For Neurotoxic Bites:</NText> Injection Neostigmine (with Atropine) to reverse muscle paralysis.</li>
              <li><NText bold>First Aid (Do&apos;s & Don&apos;ts):</NText> Immobilize the patient. DO NOT cut the wound, DO NOT suck the venom, DO NOT apply a tight tourniquet (use a crepe bandage). Administer TT.</li>
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

      {/* Spider: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>लूता के प्रकार:</NText> महर्षि वशिष्ठ के पसीने (क्रोध) से उत्पत्ति। 16 प्रकार (8 कृच्छसाध्य, 8 असाध्य/प्राणहर)।</li>
            <li><NText bold>विष अधिष्ठान (7 Sites):</NText> <NAccent bold className="italic">Very Important!</NAccent> मकड़ी केवल काटने से विष नहीं फैलाती। 1. लाला (Saliva), 2. नख (Nails), 3. मूत्र (Urine), 4. पुरीष (Feces), 5. आर्तव (Menses), 6. शुक्र (Semen), 7. दंष्ट्रा (Fangs)।</li>
            <li><NText bold>लक्षण:</NText> दंश स्थान पर मण्डल (Round circular patches), भयंकर जलन, बुखार, लाल/काले चकत्ते। स्थान सड़ने लगता है (Kotha / Necrosis) और पीब (Pus) निकलता है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">आयुर्वेदिक उपचार:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>उत्कर्तन (Excision):</NText> स्थान को थोड़ा सा काट कर विषैला खून बाहर निकाल दें और आग से दाग (Cauterize) दें।</li>
              <li><NText bold>लेप एवं पान:</NText> <NAccent bold>दशांग अगद (Dashanga Agada)</NAccent> लूता विष की सबसे अचूक औषधि है।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spider: Modern */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part B: Modern Perspective (Arachnidism)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NCard title="Brown Recluse Spider">
              {/* FIXED LINE HERE: Replaced "" with &quot; */}
              <p className="mt-2"><NText bold>Cytotoxic venom.</NText> Causes severe local tissue necrosis (सड़न), an ulcerating deep wound, and a classic <NAccent bold>&quot;red, white, and blue&quot; bullseye lesion.</NAccent></p>
            </NCard>
            <NCard title="Black Widow Spider">
              <p className="mt-2"><NText bold>Neurotoxic venom.</NText> Causes severe muscle cramps, abdominal rigidity <NAccent bold>(board-like abdomen)</NAccent>, and profuse sweating.</p>
            </NCard>
          </div>
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-4">
            <NAccent bold className="block mb-1">Modern Management:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>Wash with soap/water. Apply Ice packs.</li>
              <li>Analgesics (NSAIDs) for pain, Antibiotics to prevent secondary infection.</li>
              <li>Specific Antivenom available for severe Black Widow bites.</li>
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

      {/* Scorpion: Ayurvedic */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Part A: आयुर्वेदिक परिप्रेक्ष्य</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>वृश्चिकों के प्रकार (30 Types):</NText> मन्द विष (12 - गोबर से उत्पन्न), मध्य विष (3 - पीले/लाल रंग), <NAccent bold>महाविष</NAccent> (15 - मृत शवों से उत्पन्न, प्राणघातक)।</li>
            <li><NText bold>लक्षण:</NText> दंश स्थान पर भयंकर पीड़ा (जलते अंगारे जैसी), भारी सूजन, श्वास लेने में कठिनाई। विष तेजी से ऊपर चढ़ता है।</li>
          </ul>

          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">आयुर्वेदिक उपचार:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>वृश्चिक विष वात प्रकोपक होता है, इसलिए <NAccent bold>उष्ण (गर्म) चिकित्सा</NAccent> की जाती है।</li>
              <li>दंश स्थान पर गर्म सेंक (Fomentation) करें।</li>
              <li><NText bold>चक्रतैल</NText> की मालिश और बिल्वादि अगद का प्रयोग करें।</li>
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
          <p><NText bold>Dangerous Species:</NText> Indian Red Scorpion (Mesobuthus tamulus).</p>
          
          <NCard title="Mechanism & Symptoms">
            <ul className="space-y-2 list-[circle] list-inside mt-2">
              <li>Venom contains potent neurotoxins causing <NAccent bold>Autonomic Storm</NAccent> (massive neurotransmitter release).</li>
              <li>Excruciating local pain, profuse sweating (diaphoresis), tachycardia, severe hypertension.</li>
              <li><NAccent bold>Fatal Complication:</NAccent> Acute Pulmonary Edema (fluid in lungs) causing respiratory & cardiac failure.</li>
            </ul>
          </NCard>
          
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 mt-4">
            <NAccent bold className="block mb-1">Modern Management:</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li><NText bold>Specific Antidote:</NText> <NAccent bold>Prazosin</NAccent> (alpha-1 blocker) is highly effective for cardiovascular complications & pulmonary edema.</li>
              <li>Local infiltration of 2% Lignocaine without adrenaline for immediate pain relief.</li>
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
              <li><NText bold>परिचय:</NText> पागल कुत्ते, सियार, भेड़िया या लोमड़ी के काटने से फैलने वाला विष।</li>
              <li><NText bold>लक्षण:</NText> <NAccent bold>जलत्रास (Jalatrasa / Hydrophobia)</NAccent> प्रमुख लक्षण है, रोगी पानी को देखकर, सुनकर या छूकर भयंकर डरता है।</li>
            </ul>
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1">चिकित्सा:</NAccent>
              <NText>दंश स्थान से दूषित रक्त निकालें, गर्म घी से घाव जला दें। धतूरे के बीज और श्वेत पुनर्नवा का लेप/पान कराएं।</NText>
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
              <li><NText bold>Pathology:</NText> Rabies virus (Lyssavirus) travels through peripheral nerves to the brain, causing fatal Encephalitis.</li>
              <li><NText bold>Features:</NText> Hydrophobia, Aerophobia (fear of drafts), hallucinations, paralysis. 100% fatal once symptoms appear.</li>
            </ul>
            <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
              <NAccent bold className="block mb-1 text-lg">Post-Exposure Prophylaxis (PEP):</NAccent>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><NText bold>Wound Care:</NText> Wash immediately with soap & running water for 15 mins. <NAccent bold>DO NOT suture.</NAccent></li>
                <li><NText bold>Immunization:</NText> Rabies Immune Globulin (RIG) into the wound + Anti-Rabies Vaccine (ARV) on days 0, 3, 7, 14, 28.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
