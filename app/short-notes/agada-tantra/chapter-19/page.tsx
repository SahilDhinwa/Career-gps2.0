"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter19() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge="Forensic Medicine">
        Chapter 19: Forensic Thanatology
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          मृत्यु विज्ञान एवं शव-परीक्षण (Study of Death &amp; Post-Mortem)
        </span>
      </div>

      {/* Introduction */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>Thanatology (मृत्यु विज्ञान):</NAccent> It is the scientific and medicolegal study of death, the conditions leading to it, and the post-mortem changes that follow. (फॉरेंसिक मेडिसिन में कानूनी, नैतिक और चिकित्सीय कारणों से मृत्यु का सटीक निदान करना अत्यंत महत्वपूर्ण है।)
        </NText>
      </div>

      {/* ========================================== */}
      {/* 1. STAGES & STATES OF DEATH                  */}
      {/* ========================================== */}
      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          1. The Stages of Death (मृत्यु की अवस्थाएं)
        </HandwrittenBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pl-1 md:pl-2">
        <NCard title="Somatic (Clinical) Death">
          <ul className="space-y-2 list-[circle] list-inside mt-2 text-sm md:text-base">
            <li>The irreversible cessation of the vital <NAccent bold>&quot;tripod of life&quot;</NAccent> (brain, heart, and lungs).</li>
            <li>At this stage, the individual is <NText bold>legally dead</NText>, and resuscitation is impossible.</li>
            <li><span className="italic opacity-80">Note: Individual cellular life still continues briefly.</span></li>
          </ul>
        </NCard>

        <NCard title="Molecular (Cellular) Death">
          <ul className="space-y-2 list-[circle] list-inside mt-2 text-sm md:text-base">
            <li>The progressive death of individual cells and tissues following somatic death.</li>
            <li>Typically occurs <NAccent bold>1 to 2 hours</NAccent> after clinical death.</li>
            <li>Pupils no longer react to drugs; muscles stop responding to electrical/mechanical stimuli.</li>
          </ul>
        </NCard>
      </div>

      {/* Special Medical States */}
      <div className="mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox>Special Medical States</HandwrittenBox>
        </div>
        <div className="space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">Brainstem Death (मस्तिष्क स्तंभ की मृत्यु):</NAccent>
            <NText>The complete and irreversible cessation of all brainstem functions. The heart may continue to beat artificially via ventilators. <NAccent bold>Strict legal criteria must be met</NAccent> to declare this, as it is a prerequisite for organ donation.</NText>
          </div>
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NAccent bold className="block mb-1 text-lg">Suspended Animation (Apparent Death / आभासी मृत्यु):</NAccent>
            <NText>A state where metabolic rate and vital signs (respiration, heartbeat) are depressed to such a minimum that they cannot be detected by routine clinical examination. <NText bold>Resuscitation is still possible.</NText></NText>
            <p className="mt-2 text-sm md:text-base"><NText bold>Common Causes:</NText> Drowning, electrocution, severe hypothermia, barbiturate poisoning, anesthesia overdose, and severe shock.</p>
          </div>
        </div>
      </div>

      {/* Ayurvedic Perspective - PURE HINDI */}
      <div className="mb-12">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pl-1 md:pl-2">
          <HandwrittenBox borderColor="border-[var(--theme-accent)]" textColor="text-[var(--theme-accent)]">
            आयुर्वेदिक दृष्टिकोण (Ayurvedic Perspective)
          </HandwrittenBox>
        </div>
        <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)]">
          <NAccent bold className="block mb-2 text-xl">अरिष्ट लक्षण (Arishta Lakshana):</NAccent>
          <p>आचार्य चरक द्वारा <NText bold>&apos;इन्द्रिय स्थान&apos;</NText> में वर्णित वे प्राणघातक और अशुभ लक्षण जो यह दर्शाते हैं कि व्यक्ति की मृत्यु अत्यंत निकट है। आधुनिक चिकित्सा विज्ञान में इसे मरणासन्न रोगियों के नैदानिक अवलोकन (Clinical observation and prognosis of dying patients) से सीधे तौर पर जोड़ा जा सकता है।</p>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. POST-MORTEM CHANGES (TIME SINCE DEATH)    */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          2. Post-Mortem Changes (मृत्यु के बाद शरीर में बदलाव)
        </HandwrittenBox>
      </div>

      <NText className="text-center mb-6 block font-bold italic opacity-80 text-sm md:text-base">
        * Understanding this timeline is the primary method for determining the Time Since Death (Post-Mortem Interval - PMI).
      </NText>

      {/* Immediate Changes */}
      <div className="mb-8 pl-1 md:pl-2">
        <NAccent bold className="block mb-3 text-xl underline decoration-[var(--theme-border)]">A. Immediate Changes (तात्कालिक बदलाव):</NAccent>
        <ul className="list-disc list-inside space-y-2 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
          <li>Complete insensibility and loss of voluntary movement.</li>
          <li>Cessation of respiration and circulation.</li>
          <li>Primary flaccidity (complete muscle relaxation).</li>
          <li><NText bold>Eye Changes:</NText> Loss of corneal reflex, corneal opacity, and <NAccent bold>Tache Noire</NAccent> (a dark, brownish-black band on the sclera if eyes remain open and exposed to air).</li>
        </ul>
      </div>

      {/* Early Signs of Death */}
      <div className="mb-8 pl-1 md:pl-2">
        <NAccent bold className="block mb-3 text-xl underline decoration-[var(--theme-border)]">B. Early Signs of Death:</NAccent>
        
        <div className="p-3 mb-4 border border-dashed border-[var(--theme-accent)] text-sm md:text-base bg-[var(--theme-accent)]/10 text-center rounded-sm">
          <NText bold className="text-lg">💡 Learning Hack (The ALR Triad):</NText><br/>
          <NText bold>A</NText>lgor = <span className="italic">Temperature</span> | <NText bold>L</NText>ivor = <span className="italic">Color</span> | <NText bold>R</NText>igor = <span className="italic">Stiffness</span>
        </div>

        <div className="space-y-4 text-base md:text-xl text-[var(--theme-text)]">
          <NCard title="1. Algor Mortis (Cooling of the Body)">
            <p className="mt-2">Body temperature drops to equilibrate with ambient environment. Follows <NAccent bold>Newton&apos;s Law of Cooling</NAccent>.</p>
            <p className="text-sm mt-1">Depends on: Ambient temp, clothing, body fat. Measured via chemical thermometer in the rectum or liver.</p>
          </NCard>

          <NCard title="2. Livor Mortis (Post-Mortem Lividity / Hypostasis)">
            <p className="mt-2">Purplish-blue skin discoloration caused by gravitational pooling of blood in dependent, lower parts of the body.</p>
            <ul className="list-[circle] list-inside mt-1 text-sm md:text-base">
              <li><NText bold>Timeline:</NText> Begins in 1–3 hours, becomes well-developed and <NText bold>&quot;fixed&quot;</NText> in 6–8 hours.</li>
              <li><NText bold>Significance:</NText> Indicates body position at death &amp; helps determine if the body was moved.</li>
            </ul>
          </NCard>

          <NCard title="3. Rigor Mortis (Cadaveric Rigidity)">
            <p className="mt-2">Stiffening of muscles due to breakdown of ATP and accumulation of lactic acid.</p>
            <ul className="list-[circle] list-inside mt-1 text-sm md:text-base">
              <li><NAccent bold>Progression (Nysten&apos;s Law):</NAccent> Starts in involuntary muscles (heart) → eyelids → face → neck → progresses downward to trunk and lower limbs.</li>
              <li><NText bold>Timeline:</NText> Starts at 1-2 hrs, peaks at 12 hrs, maintains for 12 hrs, passes off over next 12 hrs (as decomposition begins).</li>
              <li><NText bold>Differentiate From <NAccent bold>Cadaveric Spasm</NAccent>:</NText> Spasm is an instantaneous, rigid stiffening of a specific muscle group at the EXACT moment of death (e.g., drowning victim gripping weeds due to immense stress).</li>
            </ul>
          </NCard>
        </div>
      </div>

      {/* Late Signs of Death */}
      <div className="mb-10 pl-1 md:pl-2">
        <NAccent bold className="block mb-3 text-xl underline decoration-[var(--theme-border)]">C. Late Signs of Death (Decomposition):</NAccent>
        
        <div className="space-y-4 text-base md:text-xl text-[var(--theme-text)]">
          <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
            <NText bold className="block text-lg mb-1">1. Putrefaction (सड़ना):</NText>
            <p className="mb-1">Breakdown of tissues by bacterial action and endogenous enzymes.</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              <li><NAccent bold>First external sign:</NAccent> Greenish discoloration over the right iliac fossa (caecum area), around 12–24 hours after death.</li>
              <li><NText bold>Progression:</NText> <NText bold>Marbling of skin</NText> (prominent greenish-black veins due to sulfhemoglobin), foul odor ($H_2S$ gas), bloating, skin slippage, blisters, and liquefaction of organs.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NCard title="2. Adipocere Formation (Saponification)">
              <ul className="space-y-1 list-[circle] list-inside mt-2 text-sm md:text-base">
                <li>Body fat converts into a waxy, soap-like substance by anaerobic bacteria (Clostridium welchii).</li>
                <li><NText bold>Conditions:</NText> Warm, moist, airless environment (submerged in water / damp soil).</li>
                <li><NText bold>Significance:</NText> Preserves natural contours &amp; injuries (takes weeks to months).</li>
              </ul>
            </NCard>
            
            <NCard title="3. Mummification">
              <ul className="space-y-1 list-[circle] list-inside mt-2 text-sm md:text-base">
                <li>Extreme desiccation (drying and shriveling) of tissues.</li>
                <li><NText bold>Conditions:</NText> Dry, hot, arid environments with good air circulation.</li>
                <li><NText bold>Significance:</NText> Body becomes leathery/odorless. Mechanical injuries preserved indefinitely.</li>
              </ul>
            </NCard>
          </div>

          <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
            <NText bold className="block text-lg mb-1">4. Maceration:</NText>
            <p>Aseptic, autolytic decomposition of a dead fetus inside the intact amniotic sac in the uterus. Skin peels off easily, body becomes red and flaccid.</p>
          </div>
        </div>
      </div>

      {/* Additional Methods for PMI */}
      <div className="mb-12 pl-1 md:pl-2">
        <NAccent bold className="block mb-3 text-xl underline decoration-[var(--theme-border)]">D. Additional Methods for Estimating PMI:</NAccent>
        <ul className="list-disc list-inside space-y-2 pl-3 md:pl-6 text-base md:text-xl text-[var(--theme-text)]">
          <li><NText bold>Stomach Emptying Time:</NText> Degree of digestion of the last meal. Standard mixed diet takes about 4–6 hours to empty.</li>
          <li><NText bold>Forensic Entomology:</NText> Study of insects (blowflies, maggots) on the cadaver. Maggot life cycle is a primary tool for determining time in late putrefaction.</li>
        </ul>
      </div>

      {/* ========================================== */}
      {/* 3. AUTOPSIES (POST-MORTEM EXAMINATION)       */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          3. Autopsies (Post-Mortem Examination)
        </HandwrittenBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pl-1 md:pl-2">
        <NCard title="Medicolegal Autopsy">
          <p className="mt-2 text-sm md:text-base">To legally/medically determine cause, manner, and time of unnatural, sudden, or suspicious deaths. <NAccent bold>Requires police/magistrate order.</NAccent> Consent of relatives is NOT required.</p>
        </NCard>
        <NCard title="Clinical (Pathological) Autopsy">
          <p className="mt-2 text-sm md:text-base">Conducted purely to study a disease process and determine medical cause of death. <NAccent bold>Strictly requires consent of the relatives.</NAccent></p>
        </NCard>
      </div>

      <div className="space-y-6 pl-1 md:pl-4 mb-10 text-base md:text-xl text-[var(--theme-text)]">
        <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
          <NAccent bold className="block mb-3 text-xl">Medicolegal Autopsy Standards:</NAccent>
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Authorization:</NText> Cannot be performed without an inquest report from Police/Magistrate.</li>
            <li><NText bold>Incisions:</NText> Standard approach is <NAccent bold>&quot;I&quot; shaped</NAccent> (chin to symphysis pubis). A <NAccent bold>&quot;Y&quot; shaped</NAccent> incision is used for detailed neck examination (hanging/strangulation).</li>
            <li><NText bold>Rule of 3:</NText> All three body cavities (cranial, thoracic, abdominal) MUST be opened, regardless of suspected cause.</li>
            <li><NText bold>Visceral Preservation:</NText> In poisoning cases, preserve stomach contents, liver, kidneys, and blood for FSL.
              <ul className="list-[circle] list-inside pl-6 mt-1 text-sm md:text-base">
                <li><NText bold>Saturated saline</NText> = General preservative.</li>
                <li><NText bold>Rectified spirit</NText> = Used EXCEPT when alcohol, phosphorus, or paraldehyde poisoning is suspected.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5">
          <NAccent bold className="block mb-2 text-xl">Exhumation (शव उत्खनन):</NAccent>
          <p className="mb-2">The lawful unearthing of a buried corpse for medicolegal examination.</p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li>Requires strict written order from an <NText bold>Executive Magistrate</NText>.</li>
            <li>Conducted under natural light (early morning) with magistrate, medical officer, and police present.</li>
            <li><NAccent bold>Crucial Step:</NAccent> Soil samples from above, below, and sides of coffin must be collected to rule out environmental contamination (important for heavy metal poisoning).</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. THE THOTA ACT                             */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          4. Legal Frameworks: The THOTA Act
        </HandwrittenBox>
      </div>

      <div className="mb-10 pl-1 md:pl-2">
        <div className="p-4 border-l-4 border-[var(--theme-accent)] bg-[var(--theme-border)]/5 text-base md:text-xl text-[var(--theme-text)]">
          <NAccent bold className="block mb-2 text-xl">Transplantation of Human Organs and Tissues Act (THOTA):</NAccent>
          <ul className="list-disc list-inside space-y-2">
            <li><NText bold>Purpose:</NText> Regulates removal, storage, and transplantation of human organs for therapeutic purposes and strictly prevents commercial dealing (organ trafficking).</li>
            <li><NText bold>Brain Death Certification:</NText> Provides the legal framework for harvesting organs from brain-dead patients.</li>
            <li><NText bold>Protocol:</NText> Brainstem death must be certified by a specialized Medical Board (including a neurologist/neurosurgeon, treating physician, and hospital administrators).</li>
            <li><NAccent bold>Testing Rule:</NAccent> Clinical tests confirming irreversible absence of brainstem reflexes must be performed <NText bold>TWICE, with a 6-hour gap</NText>, before organ harvesting can legally proceed.</li>
          </ul>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
