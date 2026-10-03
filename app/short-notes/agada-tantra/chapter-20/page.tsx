"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function AgadaTantraChapter20() {
  return (
    <HandwrittenCanvas>
      {/* FIXED VERCEL ERROR: Removed JSX fragment from badge */}
      <HandwrittenTitle badge="Forensic Medicine">
        Chapter 20: Asphyxial Deaths
      </HandwrittenTitle>

      <div className="text-center mb-6 md:mb-10">
        <span className="inline-block px-2 py-1 md:px-4 md:py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1 bg-white/30 dark:bg-transparent">
          Thanatology &amp; Traumatology (श्वासरोधी मृत्यु)
        </span>
      </div>

      {/* 1. Etymology and Definitions */}
      <div className="mb-10 pl-1 md:pl-2">
        <NText className="leading-relaxed block text-lg md:text-xl pl-3 md:pl-8 border-l-4 border-[var(--theme-accent)]">
          <NAccent bold>Etymology &amp; Definition:</NAccent> Asphyxia (derived from the Greek <NText bold className="italic">a-</NText> &apos;without&apos; and <NText bold className="italic">sphyxis</NText> &apos;pulse&apos;) is a state of severe hypoxia (lack of oxygen) and hypercapnia (excess carbon dioxide) resulting from mechanical interference with respiration.
        </NText>
      </div>

      {/* ========================================== */}
      {/* 2. CLASSIFICATION OF MECHANICAL ASPHYXIA     */}
      {/* ========================================== */}
      <div className="flex items-center gap-3 text-2xl md:text-3xl mb-8 mt-12 justify-center">
        <HandwrittenBox className="rounded-[50%] px-6 border-[var(--theme-accent)] text-[var(--theme-accent)] font-black bg-[var(--theme-accent)]/5">
          Classification of Mechanical Asphyxia
        </HandwrittenBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 pl-1 md:pl-2">
        <NCard title="1. Hanging (Suspendial Asphyxia)">
          <p className="mt-2 text-sm md:text-base">Constriction of the neck by a ligature pulled tight by the <NAccent bold>weight of the body itself</NAccent>.</p>
        </NCard>
        <NCard title="2. Strangulation">
          <p className="mt-2 text-sm md:text-base">Constriction of the neck by a force <NAccent bold>other than body weight</NAccent> (Ligature or Manual/Throttling).</p>
        </NCard>
        <NCard title="3. Drowning">
          <p className="mt-2 text-sm md:text-base">Asphyxia due to submersion of the mouth and nostrils in a liquid medium.</p>
        </NCard>
        <NCard title="4. Suffocation">
          <p className="mt-2 text-sm md:text-base">Mechanical obstruction to the passage of air (includes Smothering, Choking, Gagging, &amp; Traumatic Asphyxia).</p>
        </NCard>
      </div>

      {/* ========================================== */}
      {/* A. HANGING                                 */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 mb-6 pl-1 md:pl-2">
        <HandwrittenBox>A. Hanging (फांसी)</HandwrittenBox>
      </div>

      <div className="space-y-6 pl-1 md:pl-4 mb-10 text-base md:text-xl text-[var(--theme-text)]">
        
        {/* Classification of Hanging */}
        <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
          <NAccent bold className="block mb-2 text-lg">Classification of Hanging:</NAccent>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li><NText bold>Complete:</NText> Body is fully suspended (no part touches the ground).</li>
            <li><NText bold>Partial:</NText> Feet, knees, or toes touch the ground. The weight of the head alone acts as the constricting force.</li>
            <li><NText bold>Typical:</NText> Knot is at the nape of the neck (occiput).</li>
            <li><NText bold>Atypical:</NText> Knot is anywhere else (e.g., under the chin, side of the neck).</li>
          </ul>
        </div>

        {/* Learning Hack - Tensions */}
        <div className="p-3 mb-4 border border-dashed border-[var(--theme-accent)] text-sm md:text-base bg-[var(--theme-accent)]/10 text-center rounded-sm">
          <NText bold className="text-lg">💡 Learning Hack: Fatal Tensions in Hanging (2-5-15-30)</NText><br/>
          <NText bold>2 kg</NText> = Jugular Veins (Venous Congestion) | <NText bold>5 kg</NText> = Carotid Arteries (Cerebral Ischemia)<br/>
          <NText bold>15 kg</NText> = Trachea (Asphyxia) | <NText bold>30 kg</NText> = Vertebral Arteries
        </div>

        <div className="space-y-2">
          <p><NText bold>Other Causes of Death:</NText> <NAccent bold>Vagal Inhibition</NAccent> (reflex cardiac arrest from carotid sinus pressure) and <NAccent bold>Spinal Cord Injury</NAccent> (Fracture-dislocation of C2-C3/C3-C4, known as <span className="italic">Hangman&apos;s fracture</span> - seen in judicial drops).</p>
          <p><NText bold>Medicolegal Aspect:</NText> Most commonly Suicidal. Accidental is rare. Homicidal is extremely rare (usually involves prior incapacitation).</p>
        </div>

        {/* Post-Mortem Findings */}
        <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
          <NAccent bold className="block mb-3 text-xl">Post-Mortem Findings (Hanging):</NAccent>
          
          <NText bold className="block mb-1 underline decoration-[var(--theme-border)]">External Signs:</NText>
          <ul className="list-[circle] list-inside space-y-2 mb-4 text-sm md:text-base">
            <li><NText bold>Ligature Mark:</NText> The most critical finding. Typically <NAccent bold>oblique, non-continuous</NAccent>, placed high up (above thyroid cartilage). Base is pale, hard, and parchment-like.</li>
            <li><NText bold>Salivary Dribbling:</NText> Trickling of saliva from the angle of the mouth. <NAccent bold>The surest sign of antemortem hanging</NAccent> (salivary glands cease after death).</li>
            <li><NText bold>Le Faciès Sympathique:</NText> One eye open and pupil dilated (due to cervical sympathetic nerve compression).</li>
            <li><NText bold>Lividity:</NText> Glove and stocking distribution (lower limbs, hands) due to gravity.</li>
          </ul>

          <NText bold className="block mb-1 underline decoration-[var(--theme-border)]">Internal Signs:</NText>
          <ul className="list-[circle] list-inside space-y-2 text-sm md:text-base">
            <li><NText bold>Amussat&apos;s Sign:</NText> Transverse intimal tears in the common carotid arteries.</li>
            <li><NText bold>Hyoid Bone Fracture:</NText> Common in individuals &gt;40 years (outward displacement of greater cornua).</li>
            <li>Thyroid Cartilage Damage (superior horns fracture) and petechial hemorrhages in larynx/trachea.</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* B. STRANGULATION                           */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 mb-6 pl-1 md:pl-2">
        <HandwrittenBox>B. Strangulation (गला घोंटना)</HandwrittenBox>
      </div>

      <div className="space-y-4 pl-1 md:pl-4 mb-10 text-base md:text-xl text-[var(--theme-text)]">
        <p><NText bold>Pathogenesis:</NText> Forceful, external compression of the neck causing immediate airway and vascular blockage.</p>
        <p><NText bold>Medicolegal Aspect:</NText> Almost exclusively <NAccent bold>Homicidal</NAccent>. Suicidal is practically impossible (loss of consciousness releases the grip).</p>
        
        <NCard title="Clinical & Post-Mortem Features">
          <ul className="list-disc list-inside mt-2 space-y-2 text-sm md:text-base">
            <li><NText bold>Ligature Mark:</NText> Transverse (horizontal), <NAccent bold>continuous</NAccent>, located lower on the neck (below the thyroid cartilage).</li>
            <li><NText bold>Hyoid bone fracture:</NText> Highly common in manual strangulation (throttling).</li>
            <li>Severe facial congestion and intense petechial hemorrhages above the constriction.</li>
          </ul>
        </NCard>
      </div>

      {/* ========================================== */}
      {/* C. DROWNING                                */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 mb-6 pl-1 md:pl-2">
        <HandwrittenBox>C. Drowning (जलनिमज्जन)</HandwrittenBox>
      </div>

      <div className="space-y-6 pl-1 md:pl-4 mb-10 text-base md:text-xl text-[var(--theme-text)]">
        
        <div className="p-4 border-l-4 border-[var(--theme-border)] bg-[var(--theme-border)]/5">
          <NAccent bold className="block mb-2 text-lg">Classification:</NAccent>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li><NText bold>Typical (Wet):</NText> Fluid is actively inhaled into lungs.</li>
            <li><NText bold>Atypical (Dry):</NText> Intense laryngeal spasm prevents water entry. Death by pure asphyxia.</li>
            <li><NText bold>Immersion Syndrome (Hydrocution):</NText> Sudden cardiac arrest (vagal inhibition) from sudden contact with cold water.</li>
            <li><NText bold>Near-Drowning:</NText> Victim survives &gt;24 hours but may die later from ARDS or infection.</li>
          </ul>
        </div>

        {/* Learning Hack - Drowning */}
        <div className="p-3 mb-4 border border-dashed border-[var(--theme-accent)] text-sm md:text-base bg-[var(--theme-accent)]/10 text-center rounded-sm">
          <NText bold className="text-lg">💡 Learning Hack: Freshwater vs Saltwater</NText><br/>
          <NText bold>Freshwater (Hypotonic):</NText> Absorbed into blood → Hemodilution → Hyperkalemia → <NAccent bold>Ventricular Fibrillation</NAccent> (Death in 4-5 mins). Lungs are ballooned (Emphysema Aquosum).<br/><br/>
          <NText bold>Saltwater (Hypertonic):</NText> Draws fluid into lungs → Hemoconcentration → <NAccent bold>Massive Pulmonary Edema</NAccent> (Death in 8-12 mins). Lungs are heavy/purplish (Edema Aquosum).
        </div>

        <div className="p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10">
          <NAccent bold className="block mb-3 text-xl">Post-Mortem Findings:</NAccent>
          <ul className="list-[circle] list-inside space-y-2 mb-4 text-sm md:text-base">
            <li><NText bold>Froth:</NText> Copious, fine, white, leathery froth at mouth/nose. <NAccent bold>Classic antemortem sign</NAccent>.</li>
            <li><NText bold>Cadaveric Spasm:</NText> Firmly grasping weeds/mud in hands (definitive sign victim was alive &amp; struggling).</li>
            <li><NText bold>Skin Changes:</NText> <span className="italic">Cutis Anserina</span> (Goosebumps) and <span className="italic">Washerwoman&apos;s hands/feet</span> (sodden, wrinkled).</li>
            <li><NText bold>Paltauf&apos;s Hemorrhages:</NText> Pale, bluish-red subpleural petechial hemorrhages (from tearing of alveolar walls).</li>
          </ul>
        </div>

        <NCard title="Key Medicolegal Tests for Drowning">
          <ul className="list-disc list-inside mt-2 space-y-2 text-sm md:text-base">
            <li><NText bold>Diatom Test:</NText> Diatoms are microscopic silica-walled algae. Finding identical diatoms in deep tissues (especially <NAccent bold>intact bone marrow</NAccent>) and the water sample is primary confirmatory proof of antemortem drowning.</li>
            <li><NText bold>Gettler&apos;s Test:</NText> Measures chloride difference between right/left heart chambers. (FW = Lower in left; SW = Higher in left).</li>
          </ul>
        </NCard>

      </div>

      {/* ========================================== */}
      {/* D. SUFFOCATION                             */}
      {/* ========================================== */}
      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t-2 border-dashed border-[var(--theme-border)] opacity-60"></div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 mb-6 pl-1 md:pl-2">
        <HandwrittenBox>D. Suffocation</HandwrittenBox>
      </div>

      <div className="space-y-4 pl-1 md:pl-4 mb-10 text-base md:text-xl text-[var(--theme-text)]">
        <ul className="list-disc list-inside space-y-2">
          <li><NText bold>Types &amp; Mechanisms:</NText> Blockage of external orifices (<NAccent bold>Smothering</NAccent>), internal respiratory tract (<NAccent bold>Choking</NAccent>), or compression of the chest (<NAccent bold>Traumatic Asphyxia</NAccent>).</li>
          <li><NText bold>Clinical Features:</NText> Deep cyanosis, massive petechiae known as <NAccent bold>Tardieu spots</NAccent> over the pleura and pericardium.</li>
          <li><NText bold>Medicolegal Aspect:</NText> Choking is usually Accidental (e.g., <span className="italic">cafe coronary</span>). Smothering is often Homicidal (using a pillow) or Accidental (overlaying in infants).</li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
