"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter7() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 7: विष जनित त्वक् विकार 
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Dermatological Manifestations of Poison (Contact Dermatitis)
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> जब शरीर की त्वचा किसी विषैले पौधे, रसायन (Chemical) या कीट (Insect) के सीधे संपर्क में आती है, तो त्वचा पर जो सूजन, चकत्ते (Rashes), खुजली या छाले (Blisters) उत्पन्न होते हैं, उन्हें विष जनित त्वक् विकार या आधुनिक विज्ञान में <NText bold>Contact Dermatitis</NText> कहा जाता है।
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART 1: AYURVEDIC PERSPECTIVE                */}
      {/* ========================================== */}
      
      <div className="flex items-center gap-3 text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part 1: आयुर्वेदिक परिप्रेक्ष्य (Ayurvedic Perspective)
        </HandwrittenBox>
      </div>

      {/* 1. General Symptoms */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. विष जनित त्वक् विकारों के सामान्य लक्षण</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="leading-relaxed block">
            जब कोई स्थावर विष (जैसे भल्लातक, स्नुही) या जाङ्गम विष (कीड़े का मूत्र/लार) त्वचा पर लगता है, तो त्वचा पर वात-पित्त-कफ के अनुसार निम्नलिखित लक्षण प्रकट होते हैं:
          </NText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>कण्डू (Kandu):</NAccent> भयंकर खुजली होना।</div>
            <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>दाह (Daha):</NAccent> त्वचा पर आग लगने जैसी जलन होना।</div>
            <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>शोथ (Shotha):</NAccent> त्वचा का सूज जाना (Edema)।</div>
            <div className="p-3 border-b border-[var(--theme-border)]/30"><NAccent bold>स्फोट (Sphota):</NAccent> पानी भरे हुए छाले या फफोले (Blisters/Vesicles) पड़ जाना।</div>
            <div className="p-3 border-b border-[var(--theme-border)]/30 sm:col-span-2"><NAccent bold>विवर्णता (Vivarnata):</NAccent> त्वचा का रंग काला, नीला या लाल हो जाना (Discoloration/Erythema)।</div>
          </div>
        </div>
      </div>

      {/* 2. Ayurvedic Management */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. विष जनित त्वक् विकारों की आयुर्वेदिक चिकित्सा</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block mb-2 font-bold">त्वचा के विष को शरीर के अंदर (Systemic) जाने से रोकने के लिए स्थानीय (Local) चिकित्सा की जाती है:</NText>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-xl">प्रक्षालन (Washing):</NAccent>
              <NText>सबसे पहले दूषित त्वचा को ठंडे पानी या त्रिफला/पंचवल्कल के काढ़े (Decoction) से अच्छी तरह धोना चाहिए。</NText>
            </div>
            
            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-xl">लेप (Lepa - Ointment/Paste):</NAccent>
              <ul className="list-disc list-inside space-y-2">
                <li><NText bold>दशांग लेप (Dashanga Lepa):</NText> यह विष जनित सूजन और चकत्तों के लिए सबसे श्रेष्ठ लेप है। <span className="italic opacity-80">(घटक: शिरीष, यष्टीमधु, तगर, लाल चंदन, इलायची, जटामांसी, हल्दी, दारुहल्दी, कुष्ठ, और सुगन्धबाला)।</span></li>
                <li><NText bold>चंदन लेप:</NText> जलन (दाह) को शांत करने के लिए लाल या सफेद चंदन का लेप।</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-xl">परिषेक (Parisheka - Pouring of liquid):</NAccent>
              <NText>त्वचा पर दूध, घी, या औषधीय जल की लगातार धारा गिराना।</NText>
            </div>

            <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
              <NAccent bold className="block mb-1 text-xl">शतधौत घृत (Shatadhauta Ghrita):</NAccent>
              <NText>100 बार पानी से धोकर बनाए गए घी को त्वचा के छालों (Blisters) और भयंकर जलन पर लगाने से तुरंत आराम मिलता है।</NText>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Irritant Plants */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. प्रमुख विषैले पौधे और उनका प्रभाव (Irritant Plants)</HandwrittenBox>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NCard title="भल्लातक (Marking Nut)">
            <NText bold className="italic block mb-1 opacity-80 text-sm md:text-base">(Semecarpus anacardium)</NText>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>इसके फल के रस (Tarry oil) के त्वचा पर लगने से भयंकर छाले (Blisters), सूजन और असहनीय जलन होती है।</li>
              <li><NText bold>चिकित्सा (Treatment):</NText> विष को शांत करने के लिए त्वचा पर नारियल का तेल (Coconut oil), तिल का तेल (Sesame oil), या इमली के पत्तों का रस लगाना चाहिए।</li>
            </ul>
          </NCard>
          
          <div className="space-y-4">
            <NCard title="कपिकच्छु (Cowhage)">
              <NText bold className="italic block mb-1 opacity-80 text-sm md:text-base">(Mucuna pruriens)</NText>
              <NText>इसकी फली (Pod) के रोम (Hairs) त्वचा पर लगते ही भयंकर खुजली (Intense itching) और चकत्ते उत्पन्न करते हैं।</NText>
            </NCard>

            <NCard title="स्नुही (Euphorbia)">
              <NText bold className="italic block mb-1 opacity-80 text-sm md:text-base">(Euphorbia neriifolia)</NText>
              <NText>इसका क्षीर (Milky latex) त्वचा और आंखों के लिए अत्यंत हानिकारक (Corrosive) होता है।</NText>
            </NCard>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: MODERN MEDICAL PERSPECTIVE         */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part 2: Modern Medical Perspective
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Definition</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="leading-relaxed">
            Contact Dermatitis is a localized inflammatory skin condition (Eczema) caused by direct physical contact with an irritating substance or an allergen.
          </p>
        </div>
      </div>

      {/* 2. Types */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. Types of Contact Dermatitis</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block mb-4">It is broadly classified into two types:</NText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
              <NAccent bold className="block mb-2 text-lg md:text-xl">Irritant Contact Dermatitis (ICD):</NAccent>
              <p className="mb-2"><NText bold>(Most common).</NText> Caused by direct chemical or physical damage to the outer layer of the skin (Epidermis).</p>
              <p><NText bold>Causes:</NText> Strong acids, alkalis, detergents, industrial solvents, and poisonous plant saps.</p>
            </div>
            <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
              <NAccent bold className="block mb-2 text-lg md:text-xl">Allergic Contact Dermatitis (ACD):</NAccent>
              <p className="mb-2">A delayed hypersensitivity (immune) reaction. The skin reacts to a specific substance (allergen) to which it has become sensitized over time.</p>
              <p><NText bold>Causes:</NText> Artificial jewelry (Nickel), cosmetics, hair dyes (PPD), latex gloves, and Poison Ivy (उरुशीऑल/Urushiol oil).</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Signs & Symptoms */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Signs and Symptoms (Clinical Features)</HandwrittenBox>
        </div>
        <div className="pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside marker:text-[var(--theme-accent)]">
            <li><NText bold>Erythema:</NText> Severe redness of the affected skin area.</li>
            <li><NText bold>Pruritus:</NText> Intense itching.</li>
            <li><NText bold>Vesiculation:</NText> Formation of fluid-filled blisters (which may ooze or crust over).</li>
            <li><NText bold>Edema & Scaling:</NText> Swelling of the skin followed by dry, cracked, and scaly skin in chronic cases.</li>
          </ul>
        </div>
      </div>

      {/* 4. Modern Management */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. Modern Management (Treatment Protocol)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">Decontamination:</NAccent>
            <p>Immediately remove the contaminated clothing and wash the exposed skin thoroughly with mild soap and plenty of running water to remove the chemical/plant oil.</p>
          </div>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">Topical Therapy:</NAccent>
            <p>Apply Topical Corticosteroids (e.g., Hydrocortisone cream or Betamethasone) to reduce inflammation, redness, and swelling.</p>
          </div>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">Systemic Therapy:</NAccent>
            <p>Oral Antihistamines (e.g., Cetirizine or Levocetirizine) are prescribed to control severe itching (Pruritus).</p>
          </div>
          <div className="p-3 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1">Soothing Agents:</NAccent>
            <p>Application of Calamine lotion provides a cooling effect and dries out the oozing blisters.</p>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
              }
