"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter16() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Agada Tantra">
        Chapter 16: Medical Ethics
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          वैद्य सद्वृत्त एवं चिकित्सा नैतिकता (Duties of Practitioner)
        </span>
      </div>

      {/* ========================================== */}
      {/* PART 1: AYURVEDIC PERSPECTIVE                */}
      {/* ========================================== */}
      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 mt-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part 1: आयुर्वेदिक परिप्रेक्ष्य (वैद्य सद्वृत्त)
        </HandwrittenBox>
      </div>

      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>परिभाषा (Definition):</NAccent> आयुर्वेद में &apos;वैद्य&apos; (चिकित्सक) के लिए जिस आदर्श आचार संहिता और नियमों का वर्णन किया गया है, उसे <NText bold>&apos;वैद्य सद्वृत्त&apos;</NText> कहते हैं।
        </NText>

        <div className="mt-6 pl-3 md:pl-10 space-y-4 text-base md:text-xl text-[var(--theme-text)]">
          <NText bold className="block mb-2 text-lg">आचार्य चरक और सुश्रुत के निर्देश:</NText>
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>मैत्री और करुणा:</NText> चिकित्सक को सभी प्राणियों के प्रति मित्रता (मैत्री) और रोगियों के प्रति दया (करुणा) का भाव रखना चाहिए।</li>
            <li><NText bold>सत्यवादिता:</NText> चिकित्सक को हमेशा सत्य बोलना चाहिए, लेकिन यदि सत्य बोलने से रोगी की मृत्यु या भयंकर मानसिक आघात होने का डर हो, तो वहां सत्य को छुपा लेना चाहिए।</li>
            <li><NText bold>गोपनीयता:</NText> रोगी के घर की स्थिति, पारिवारिक कलह और उसकी गुप्त बीमारियों के बारे में बाहर किसी भी व्यक्ति से चर्चा नहीं करनी चाहिए।</li>
            <li><NText bold>ज्ञान की वृद्धि:</NText> वैद्य को हमेशा अपने ज्ञान को बढ़ाने का प्रयास करना चाहिए और अहंकार (Ego) नहीं करना चाहिए।</li>
            <li><NText bold>लोभ का त्याग:</NText> धन के लालच में आकर कभी भी गलत औषधि नहीं देनी चाहिए।</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: MODERN MEDICAL ETHICS              */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Part 2: Modern Medical Ethics &amp; Jurisprudence
        </HandwrittenBox>
      </div>

      {/* 1. Ethics & Etiquette */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>1. Medical Ethics &amp; Medical Etiquette</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">Medical Ethics (चिकित्सा नैतिकता):</NAccent>
            <NText>It deals with the moral principles that govern a doctor&apos;s professional behavior towards patients and society. (यह उन नैतिक सिद्धांतों से संबंधित है जो मरीजों और समाज के प्रति एक डॉक्टर के पेशेवर व्यवहार को नियंत्रित करते हैं।)</NText>
          </div>
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">Medical Etiquette (चिकित्सा शिष्टाचार):</NAccent>
            <NText>It refers to the conventional laws and code of conduct that govern a doctor&apos;s relationship with other doctors and colleagues. (यह उन नियमों को कहते हैं जो एक डॉक्टर के अपने साथी डॉक्टरों के साथ संबंधों को नियंत्रित करते हैं।)</NText>
          </div>
          <NText className="block mt-2 font-bold italic">Hippocratic Oath: At the time of registration, every doctor takes the Hippocratic Oath (or Declaration of Geneva) to pledge their dedication to serving humanity.</NText>
        </div>
      </div>

      {/* 2. Duties of a Doctor in Suspected Poisoning Cases */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            2. Duties of a Doctor in Suspected Poisoning Cases
          </HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="font-bold italic text-[var(--theme-accent)]">
            * यह 5-mark का अत्यधिक महत्वपूर्ण PYQ है। If a patient of suspected poisoning comes to the hospital, the doctor has the following duties:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <NCard title="1. Resuscitation (प्राथमिकता)">
              <NText className="block mt-2">The primary and supreme duty of the doctor is to provide immediate medical care and <NAccent bold>save the patient&apos;s life</NAccent>.</NText>
            </NCard>
            <NCard title="2. Register as MLC">
              <NText className="block mt-2">The doctor must immediately register the case as a Medico-Legal Case (MLC).</NText>
            </NCard>
            <NCard title="3. Inform the Police">
              <NText className="block mt-2">Under <NAccent bold>Section 39 of the CrPC</NAccent>, it is legally mandatory for the doctor to inform the nearest police station immediately, whether it is a homicidal or suicidal case.</NText>
            </NCard>
            <NCard title="4. Preservation of Evidence">
              <NText className="block mt-2">The doctor must preserve the stomach washings (gastric lavage), vomitus, blood, urine, and contaminated clothes in sealed glass jars and send them to the <NAccent bold>Forensic Science Laboratory (FSL)</NAccent>.</NText>
            </NCard>
          </div>
        </div>
      </div>

      {/* 3. Dying Declaration */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>3. Dying Declaration (मृत्यु पूर्व कथन)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block"><NText bold>Definition:</NText> A Dying Declaration is a statement made by a person who is about to die, explaining the exact causes or circumstances of their impending death.</NText>
          
          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NText bold className="block mb-1">Legal Importance:</NText>
            <NText>It is considered a highly substantial piece of evidence in court because the law presumes that <NAccent bold>&quot;A dying man seldom lies&quot;</NAccent> (Nemo moriturus praesumitur mentiri).</NText>
          </div>

          <div className="p-4 border-2 border-dashed border-[var(--theme-accent)] bg-[var(--theme-accent)]/5 rounded-sm">
            <NAccent bold className="block mb-2 text-lg">Procedure (प्रक्रिया):</NAccent>
            <ul className="list-disc list-inside space-y-2">
              <li>The doctor must call the <NText bold>Magistrate</NText> to record the statement.</li>
              <li>If the Magistrate cannot reach on time, the doctor can record it in the presence of <NText bold>two independent witnesses</NText>.</li>
              <li>The doctor MUST certify that the patient was in a <NAccent bold>completely conscious and sound state of mind</NAccent> while giving the statement.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Consent in Medical Practice */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>4. Consent in Medical Practice (सहमति)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block"><NText bold>Definition:</NText> Consent is the voluntary agreement or permission given by a patient for a medical examination or surgical procedure.</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <NCard title="Implied Consent">
              <NText className="block mt-2 text-sm md:text-base">When a patient voluntarily visits a doctor&apos;s clinic and sits for a routine physical examination. (निहित सहमति)</NText>
            </NCard>
            <NCard title="Expressed Consent">
              <NText className="block mt-2 text-sm md:text-base">Can be oral or written. <NAccent bold>Written consent</NAccent> is legally mandatory before any surgery or anesthesia. (व्यक्त सहमति)</NText>
            </NCard>
            <NCard title="Informed Consent">
              <NText className="block mt-2 text-sm md:text-base">Obtaining consent only after fully explaining the nature of the disease, surgical risks, benefits, and alternative options. (सूचित सहमति)</NText>
            </NCard>
          </div>
        </div>
      </div>

      {/* 5. Privileged Communication */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>5. Privileged Communication (गोपनीयता)</HandwrittenBox>
        </div>
        <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5 ml-3 md:ml-10 text-base md:text-xl text-[var(--theme-text)]">
          <p className="mb-2"><NText bold>Definition:</NText> It refers to the confidential information shared by a patient to their doctor during treatment, which the doctor is legally and ethically bound not to disclose to any third party.</p>
          <p><NText bold>Exceptions (अपवाद):</NText> When the patient has a <NAccent bold>dangerous infectious disease</NAccent> (like HIV) to protect society, or when <NAccent bold>ordered by a Judge</NAccent> in a court.</p>
        </div>
      </div>

      {/* 6. Medical Negligence / Malpraxis */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>6. Medical Negligence / Malpraxis (लापरवाही)</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block"><NText bold>Definition:</NText> It is the failure of a medical practitioner to exercise reasonable care and skill, resulting in injury, harm, or death of the patient.</NText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm">
              <NAccent bold className="block mb-2 text-lg">Civil Negligence:</NAccent>
              <NText>Minor negligence where the patient sues the doctor for financial compensation in a <NText bold>consumer court</NText>.</NText>
            </div>
            <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm">
              <NAccent bold className="block mb-2 text-lg">Criminal Negligence:</NAccent>
              <NText>Gross negligence resulting in the patient&apos;s death (e.g., leaving surgical instruments inside the abdomen). Punished under <NAccent bold>IPC Section 304-A</NAccent> (Death by negligence).</NText>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Professional Misconduct */}
      <div className="mb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>7. Professional Misconduct / Infamous Conduct</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NText className="block"><NText bold>Definition:</NText> Any behavior by a doctor that is considered disgraceful, unethical, or dishonorable to the medical profession.</NText>
          
          <NCard title="Examples of Misconduct:">
            <ul className="space-y-4 list-disc list-inside mt-2">
              <li>
                <NText bold>Dichotomy (Fee-splitting):</NText> Taking a commission for referring patients to a specific laboratory or pharmacy (कट प्रैक्टिस).
              </li>
              <li>
                <NText bold>Issuing False Certificates (PYQ):</NText> If a doctor deliberately issues a fake medical or death certificate, it is professional misconduct and forgery. The State Medical Council can temporarily or permanently erase the doctor&apos;s name from the medical register <NAccent bold>(Penal Erasure)</NAccent>.
              </li>
            </ul>
          </NCard>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
