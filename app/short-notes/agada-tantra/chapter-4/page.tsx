"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard, NList } from "@/components/NoteElements";
import { ArrowDown } from "lucide-react";

export default function AgadaTantraChapter4() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>Agada<br/><NAccent>Tantra</NAccent></>}>
        Chapter 4: गरविष एवं दूषीविष
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Garavisha & Dooshivisha
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>विषय प्रवेश (Introduction):</NAccent> आयुर्वेद में सभी विष तुरंत मृत्यु (Acute toxicity) का कारण नहीं बनते। कुछ विष शरीर में प्रवेश कर धीरे-धीरे धातुओं को क्षीण करते हैं (Chronic toxicity) और लंबे समय तक छिपे रहते हैं (Latent toxicity)। इस अध्याय में हम इन्ही दो विशेष प्रकार के विषों— <NText bold>गरविष (कृत्रिम विष)</NText> और <NText bold>दूषीविष (अवशिष्ट/छिपा हुआ विष)</NText> का विस्तृत अध्ययन करेंगे।
        </NText>
      </div>

      {/* ========================================== */}
      {/* PART 1: GARAVISHA                          */}
      {/* ========================================== */}
      
      <div className="flex items-center gap-3 text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 1: गरविष (Garavisha)
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. परिभाषा एवं व्युत्पत्ति</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NAccent bold>गर (Gara):</NAccent> &apos;गॄ&apos; धातु में &apos;अच्&apos; प्रत्यय लगने से &apos;गर&apos; शब्द बनता है, जिसका अर्थ है रोग या विष उत्पन्न करने वाला।</p>
          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm">
            <NAccent bold className="block mb-1">परिभाषा (Ayurvedic Definition):</NAccent>
            <NText>दो या दो से अधिक विषैले या अविषैले पदार्थों को एक साथ मिलाकर जो कृत्रिम विष (Artificial poison) बनाया जाता है, उसे गरविष कहते हैं। <br/><span className="italic opacity-80 text-sm md:text-base">(श्लोक: &quot;नाना प्राणि अंग भस्मादि... कालांतर प्रकोपणम्&quot; - सुश्रुत)</span></NText>
          </div>
          <p><NAccent bold>Modern Correlation:</NAccent> Homicidal slow poisoning, Chronic drug interactions, or severe Food Adulteration. यह तुरंत मृत्यु नहीं करता बल्कि कालांतर (लंबे समय बाद) में रोग उत्पन्न करता है।</p>
        </div>
      </div>

      {/* 2. Causes */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. निदान एवं कारण (Sources)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          प्राचीन काल में इस विष का प्रयोग मुख्य रूप से किसी को वश में करने (Vashikarana) या शत्रुओं को धीरे-धीरे मारने के लिए किया जाता था।
        </NText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 md:pl-10">
          <NCard title="स्त्रियों द्वारा (By Women):">
            <NText>अज्ञानतावश या स्वार्थवश स्त्रियां अपने पतियों को वश में करने के लिए उनके भोजन में अपना आर्तव (Menstrual blood), पसीना (Sweda), मल-मूत्र, या अन्य दूषित अंग मिला देती थीं।</NText>
          </NCard>
          <NCard title="शत्रुओं द्वारा (By Enemies):">
            <NText>विषैले कीटों का चूर्ण (Powder of insects), मेढक/सर्प की भस्म, और विरुद्ध आहार (Incompatible foods) को भोजन में मिलाकर देना।</NText>
          </NCard>
        </div>
      </div>

      {/* 3 & 4. Pathogenesis and Symptoms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <HandwrittenBox className="mb-4">3. सम्प्राप्ति (Pathogenesis)</HandwrittenBox>
          <NText className="pl-4 leading-relaxed block text-base md:text-xl text-[var(--theme-text)]">
            गरविष शरीर में प्रवेश कर तुरंत प्राण नहीं हरता। यह आमाशय (Stomach) और पक्वाशय (Intestines) में जाकर <NAccent bold>जठराग्नि (Digestive fire) को अत्यंत मंद</NAccent> कर देता है। इसके बाद यह रस-रक्तादि धातुओं में प्रवेश कर शरीर को धीरे-धीरे सुखा देता है (Emaciation)।
          </NText>
        </div>
        
        <div>
          <HandwrittenBox className="mb-4">4. गरविष के लक्षण (Symptoms)</HandwrittenBox>
          <div className="space-y-4 pl-4 text-base md:text-xl text-[var(--theme-text)]">
            <div>
              <NAccent bold className="underline decoration-[var(--theme-border)] block mb-1">शारीरिक लक्षण (Physical):</NAccent>
              <ul className="list-disc list-inside space-y-1">
                <li>पांडु (Anemia / Pallor of skin).</li>
                <li>कृशता (Emaciation / Severe weight loss).</li>
                <li>अग्निमांद्य (Loss of appetite / Dyspepsia).</li>
                <li>हाथ-पैरों में सूजन (Edema) और पेट फूलना (Ascites).</li>
              </ul>
            </div>
            <div>
              <NAccent bold className="underline decoration-[var(--theme-border)] block mb-1">मानसिक और स्वप्न लक्षण:</NAccent>
              <ul className="list-disc list-inside space-y-1">
                <li>रोगी हमेशा उदास और थका हुआ महसूस करता है।</li>
                <li><NText bold>स्वप्न (Dreams):</NText> भयानक सपने आना (काले जानवर, सूखे पेड़, या गंदे पानी में डूबना)।</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Treatment */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            5. गरविष की चिकित्सा (Management)
          </HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block" bold>परीक्षा में गरविष की परिभाषा और चिकित्सा विशेष रूप से पूछी जाती है।</NText>
        
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl">
          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-xl md:text-2xl block mb-2">क. वमन कर्म (Emesis Therapy):</NAccent>
            <NText className="block mb-2">गरविष मुख्य रूप से आमाशय में रहता है, इसलिए शरीर से इसे बाहर निकालने के लिए तुरंत उल्टी करवाना सबसे आवश्यक है।</NText>
            <NText><NText bold>औषधि:</NText> <NAccent bold>ताम्र भस्म (Copper powder)</NAccent> को शहद (Honey) में मिलाकर रोगी को चटाएं, जिससे उल्टी के माध्यम से सारा कृत्रिम विष बाहर निकल जाए।</NText>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-xl md:text-2xl block mb-2">ख. हृदयावरण (Protection of Heart):</NAccent>
            <NText className="block mb-2">विष से हृदय (Heart) और ओज की रक्षा करने के लिए वमन के बाद <NText bold>स्वर्ण प्राशन (Swarna Prashana)</NText> किया जाता है।</NText>
            <NText className="block mb-2 italic">&quot;हेम सर्व विषं हन्ति&quot; (स्वर्ण सभी प्रकार के विषों को नष्ट करता है, जैसे पानी आग को बुझा देता है)।</NText>
            <NText><NText bold>औषधि:</NText> स्वर्ण भस्म को घी या शहद के साथ देना।</NText>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NAccent bold className="text-xl md:text-2xl block mb-2">ग. अगद प्रयोग (Antitoxic Formulations):</NAccent>
            <ul className="list-disc list-inside">
              <li><NText bold>मूर्वादि अगद (Murvadi Agada):</NText> गरविष की सर्वश्रेष्ठ औषधि।</li>
              <li><NText bold>अजित अगद (Ajita Agada)</NText> का पान।</li>
            </ul>
          </div>
        </div>
      </div>


      {/* ========================================== */}
      {/* PART 2: DOOSHIVISHA                        */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          भाग 2: दूषीविष (Dooshivisha)
        </HandwrittenBox>
      </div>

      {/* 1. Definition */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. परिभाषा एवं व्युत्पत्ति</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p><NAccent bold>दूषीविष:</NAccent> जो विष शरीर की धातुओं को धीरे-धीरे दूषित करता रहे, उसे दूषीविष कहते हैं। <br/><span className="italic opacity-80 text-sm md:text-base">(श्लोक: &quot;दूषितं देश काल अन्न दिवास्वप्नैरभीक्ष्णशः। यस्माद् दूषयते धातून् तस्माद् दूषीविषं स्मृतम्॥&quot;)</span></p>
          <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
            <NAccent bold className="block mb-1">Ayurvedic Concept:</NAccent>
            <NText>जब कोई स्थावर (Plant/Metal), जाङ्गम (Animal), या कृत्रिम विष शरीर में प्रवेश करता है, और चिकित्सा (Antidotes) या शरीर की अपनी इम्युनिटी (Ojas) के कारण उसका प्रभाव कम हो जाता है, लेकिन वह शरीर से पूरी तरह बाहर नहीं निकल पाता, तो वह <NAccent bold>वीर्य रहित (Denatured/Weakened)</NAccent> होकर शरीर के अंदर ही छिपा रहता है।</NText>
          </div>
          <p><NAccent bold>Modern Correlation:</NAccent> Bioaccumulation of heavy metals (Lead, Mercury in bones/tissues), Latent period of toxins, or Chronic residual toxicity.</p>
        </div>
      </div>

      {/* 2. Aggravating Factors */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>2. दूषीविष प्रकोपक भाव (Aggravating Factors)</HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          यह विष शरीर में शांत रहता है, लेकिन अनुकूल परिस्थितियां मिलने पर अचानक कुपित (Aggravate) होकर लक्षण प्रकट करता है। वे परिस्थितियां हैं:
        </NText>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-3 md:pl-10 text-base md:text-xl">
          <NCard><NText bold>देश (Place):</NText> अनूप देश (Marshy, cold, and humid places).</NCard>
          <NCard><NText bold>काल (Time):</NText> शीत काल (Cold season), दुर्दिन (Cloudy/Rainy days), या ठंडी हवा चलना।</NCard>
          <NCard><NText bold>अन्न (Diet):</NText> विरुद्ध आहार (Incompatible foods), शराब (Alcohol), या भारी भोजन (अजीर्ण)।</NCard>
          <NCard><NText bold>विहार (Lifestyle):</NText> दिवास्वप्न (Daytime sleeping), क्रोध (Anger), और अत्यधिक व्यायाम।</NCard>
        </div>
      </div>

      {/* 3. Symptoms */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. दूषीविष के लक्षण (Signs and Symptoms)</HandwrittenBox>
        </div>
        <div className="space-y-6 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div>
            <NAccent bold className="text-xl underline decoration-[var(--theme-border)] block mb-2">पूर्वरूप (Premonitory Symptoms):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>अत्यधिक नींद आना (Hypersomnia / Nidradhikya).</li>
              <li>शरीर में भारीपन (Heaviness) और जोड़ों में ढीलापन (Laxity of joints).</li>
              <li>लगातार जम्हाई आना (Yawning).</li>
            </ul>
          </div>
          <div>
            <NAccent bold className="text-xl underline decoration-[var(--theme-border)] block mb-2">सामान्य रूप (General Symptoms):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>अन्नमद (Intoxication or discomfort immediately after meals).</li>
              <li><NText bold>त्वचा विकार:</NText> मण्डल (Urticaria/Round patches), कोढ़ (Kushta/Skin diseases), और चकत्ते पड़ना। <NAccent bold>यह इसका प्रधान लक्षण है।</NAccent></li>
              <li>खालित्य (Hair fall) और इन्द्रियों का कमजोर होना।</li>
            </ul>
          </div>
          <div className="p-4 border border-[var(--theme-border)] bg-[var(--theme-border)]/5 rounded-sm">
            <NText bold className="block mb-2 text-lg">आमाशय और पक्वाशय स्थित लक्षण:</NText>
            <ul className="list-disc list-inside space-y-1">
              <li>यदि दूषीविष <NText bold>आमाशय (Stomach)</NText> में हो, तो कफ और वात रोग (उल्टी, श्वास) होते हैं।</li>
              <li>यदि <NText bold>पक्वाशय (Intestines)</NText> में हो, तो वात और पित्त रोग (दस्त, जलन) होते हैं।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Dooshivishaari Agada */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            4. दूषीविषारि अगद (Dooshivishaari Agada)
          </HandwrittenBox>
        </div>
        <NText className="pl-3 md:pl-10 mb-4 block" bold>
          यह परीक्षा के लिए अत्यंत महत्वपूर्ण विषय है, जिसके घटक, मात्रा और उपयोग लगातार पूछे जाते हैं।
        </NText>
        
        <div className="pl-3 md:pl-10">
          <NCard title="घटक (Composition - 8 Drugs)">
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-base md:text-xl mt-2 text-[var(--theme-text)]">
              <li>• पिप्पली</li>
              <li>• ध्यानक (धनिया)</li>
              <li>• जटामांसी</li>
              <li>• लोध्र</li>
              <li>• सुवर्चिका</li>
              <li>• छोटी इलायची</li>
              <li>• सुवर्ण गैरिक</li>
              <li>• कुटज</li>
            </ul>
          </NCard>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <NCard>
              <NAccent bold>मात्रा (Dose):</NAccent>
              <NText className="block mt-1">1 से 3 ग्राम (वयस्क मात्रा)।</NText>
            </NCard>
            <NCard>
              <NAccent bold>अनुपान (Vehicle):</NAccent>
              <NText className="block mt-1">शहद (Honey) या जल के साथ।</NText>
            </NCard>
          </div>

          <div className="mt-4 p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-accent)]/10 text-base md:text-xl text-[var(--theme-text)]">
            <NAccent bold className="block mb-2">उपयोग विधि एवं लाभ (Uses & Benefits):</NAccent>
            <ul className="list-disc list-inside space-y-1">
              <li>यह दूषीविष को जड़ से नष्ट करने वाली मुख्य औषधि है।</li>
              <li>विभिन्न प्रकार के चर्म रोगों (Skin diseases) और एलर्जी में लाभदायक है।</li>
              <li>कीट दंश (Insect bites) और विरुद्ध आहार जनित विकारों को दूर करता है।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. General Management */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>5. दूषीविष की सामान्य चिकित्सा</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div>
            <NAccent bold className="block mb-1">1. स्वेदन (Sudation):</NAccent>
            <NText>शरीर में छिपे हुए विष को पिघलाकर कोष्ठ (Stomach/Intestines) में लाने के लिए पूरे शरीर पर स्वेदन (Steam/Fomentation) किया जाता है।</NText>
          </div>
          <div>
            <NAccent bold className="block mb-1">2. पंचकर्म (Shodhana):</NAccent>
            <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
              <li><NText bold>वमन (Emesis):</NText> यदि विष आमाशय में आ गया हो तो उल्टी करवाकर विष बाहर निकालें।</li>
              <li><NText bold>विरेचन (Purgation):</NText> यदि विष पक्वाशय में हो तो दस्त करवाकर विष बाहर निकालें।</li>
            </ul>
          </div>
          <div>
            <NAccent bold className="block mb-1">3. अगद पान:</NAccent>
            <NText>पंचकर्म द्वारा शरीर की शुद्धि होने के बाद नियमित रूप से <NText bold>दूषीविषारि अगद</NText> का सेवन कराएं।</NText>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
          }
