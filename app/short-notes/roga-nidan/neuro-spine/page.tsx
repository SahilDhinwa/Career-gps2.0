"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

const NEURO_TOPICS = [
  {
    num: "1",
    title: "Parkinson's Disease",
    subtitle: "Progressive Movement Disorder",
    intro: "A progressive neurological disorder that affects movement, causing resting tremors (shaking), rigidity (stiffness), bradykinesia (slowed movement), and postural instability.",
    cause: "Gradual degeneration and loss of dopamine-producing neurons in the substantia nigra of the brain. The exact trigger is mostly unknown (idiopathic), involving genetics and environment.",
    types: [
      { name: "Idiopathic", desc: "The most common form, meaning the primary cause is unknown." },
      { name: "Secondary (Parkinsonism)", desc: "Caused by specific triggers like antipsychotic medications, toxins, or repeated head trauma." }
    ],
    tests: "Primarily a clinical diagnosis. A 'Levodopa trial' is often used; marked improvement in symptoms strongly confirms the diagnosis."
  },
  {
    num: "2",
    title: "Stroke (CVA)",
    subtitle: "Cerebrovascular Accident",
    intro: "A critical medical emergency where the blood supply to part of the brain is interrupted or severely reduced, leading to rapid brain cell death from lack of oxygen.",
    cause: "Blockage of an artery (clot) or the rupturing (bursting) of a blood vessel within the brain.",
    types: [
      { name: "Ischemic Stroke", desc: "Most common (85%); caused by a thrombus or embolus blocking an artery." },
      { name: "Hemorrhagic Stroke", desc: "Caused by a bursting blood vessel bleeding directly into brain tissue." },
      { name: "TIA (Mini-stroke)", desc: "Transient Ischemic Attack causing temporary symptoms without permanent infarction." }
    ],
    tests: "Urgent Non-contrast CT Scan or MRI of the brain (to differentiate ischemic vs hemorrhagic), and an ECG/ECHO to find cardiac sources of clots."
  },
  {
    num: "3",
    title: "Bell's Palsy",
    subtitle: "Acute Facial Paralysis",
    intro: "A condition causing sudden, temporary weakness or flaccid paralysis of the muscles on one side of the face, making that half of the face appear to droop.",
    cause: "Inflammation, edema, and compression of the Facial Nerve (CN VII) in the bony facial canal, most often triggered by a viral infection (e.g., HSV-1).",
    types: [
      { name: "Unilateral LMN Lesion", desc: "Standard presentation; affects both the upper (forehead) and lower face on one side." }
    ],
    tests: "Clinical diagnosis (inability to wrinkle forehead or close eye). MRI/CT is only used to rule out central causes like stroke or tumors."
  },
  {
    num: "4",
    title: "Motor Neuron Disease (MND)",
    subtitle: "Progressive Neuromuscular Disorder",
    intro: "A group of rare, relentless, progressive neurological disorders that selectively destroy motor neurons, leading to severe weakness in speaking, walking, breathing, and swallowing.",
    cause: "The exact etiology is largely unknown (sporadic), though about 5-10% of cases are strongly inherited (familial/genetic).",
    types: [
      { name: "ALS (Lou Gehrig's)", desc: "Most common; involves degeneration of both Upper and Lower motor neurons." },
      { name: "Progressive Bulbar Palsy", desc: "Primarily affects the cranial nerves controlling face, throat, and tongue." }
    ],
    tests: "Electromyography (EMG) showing active denervation, and Nerve Conduction Studies (NCS) to rule out peripheral neuropathies."
  },
  {
    num: "5",
    title: "Transverse Myelitis",
    subtitle: "Spinal Cord Inflammation",
    intro: "An acute inflammation across a horizontal section of the spinal cord. It damages the myelin sheath, blocking nerve signaling and causing sensory, motor, and autonomic dysfunction below the lesion.",
    cause: "Often an abnormal immune response triggered by viral/bacterial infections, or associated with autoimmune disorders like Multiple Sclerosis (MS) or Neuromyelitis Optica (NMO).",
    types: [
      { name: "Acute", desc: "Symptoms (weakness, numbness, bowel/bladder issues) develop rapidly over hours to days." },
      { name: "Subacute", desc: "Symptoms develop more gradually over weeks." }
    ],
    tests: "Spinal MRI with contrast (showing cord inflammation/lesions) and a Lumbar Puncture (checking CSF for pleocytosis or oligoclonal bands)."
  },
  {
    num: "6",
    title: "Epilepsy (Organic)",
    subtitle: "Recurrent Seizure Disorder",
    intro: "A neurological disorder characterized by abnormal, synchronized electrical discharges in the brain causing recurrent, unprovoked seizures. 'Organic' implies a structural/physical cause.",
    cause: "Identifiable brain damage from trauma, previous strokes, brain tumors, birth asphyxia, or CNS infections (like meningitis/encephalitis).",
    types: [
      { name: "Focal Seizures", desc: "Abnormal electrical activity originates in just one localized area/hemisphere." },
      { name: "Generalized Seizures", desc: "Involves massive electrical discharges across both hemispheres simultaneously." }
    ],
    tests: "Electroencephalogram (EEG) to record abnormal brain wave patterns (spikes/waves), and a Brain MRI to locate the physical epileptogenic lesion."
  },
  {
    num: "7",
    title: "Lumbago-Sciatica Syndrome",
    subtitle: "Radicular Low Back Pain",
    intro: "A debilitating combination of severe lower back pain (lumbago) and sharp, shooting pain radiating down the buttock and back of the leg along the sciatic nerve path.",
    cause: "Most commonly caused by a herniated (slipped) lumbar disc (L4-L5 or L5-S1) or osteophytes (bone spurs) mechanically compressing the sciatic nerve roots.",
    types: [
      { name: "Acute", desc: "Lasting a few days to weeks; usually self-limiting with conservative care." },
      { name: "Chronic", desc: "Persistent radiating pain lasting longer than 3 months, often requiring intervention." }
    ],
    tests: "Clinical diagnosis (Positive Straight Leg Raise test). MRI of the Lumbosacral spine is the gold standard to pinpoint the exact level of nerve compression."
  },
  {
    num: "8",
    title: "Brachial Neuralgia",
    subtitle: "Cervical Radiculopathy",
    intro: "A neuropathic condition characterized by sharp, burning, or aching pain radiating from the neck down into the shoulder, arm, or hand, often accompanied by tingling or numbness.",
    cause: "Mechanical compression, irritation, or injury to the nerve roots of the brachial plexus as they exit the cervical spine (e.g., from a herniated cervical disc).",
    types: [
      { name: "Root-Specific", desc: "Categorized by the specific cervical nerve root pinched (e.g., C6 radiculopathy affects the thumb, C7 affects the middle finger)." }
    ],
    tests: "Cervical Spine MRI to visualize herniations/stenosis, and Nerve Conduction Studies/EMG to confirm which specific nerve root is compromised."
  },
  {
    num: "9",
    title: "Cervical Spondylosis",
    subtitle: "Cervical Osteoarthritis",
    intro: "A general term for chronic, age-related degeneration and wear-and-tear affecting the spinal disks, joints, and bones in the neck.",
    cause: "Aging causes intervertebral disks to dehydrate and shrink, leading to facet joint osteoarthritis and the formation of bony projections (osteophytes) that stiffen the neck.",
    types: [
      { name: "Progressive Degeneration", desc: "A continuous aging process; can lead to myelopathy (cord compression) or radiculopathy (nerve compression) if severe." }
    ],
    tests: "Neck X-rays (showing disc space narrowing and bone spurs). MRI is indicated if the patient develops neurological deficits (weakness/numbness in arms)."
  },
  {
    num: "10",
    title: "Lumbar Spondylosis",
    subtitle: "Lumbar Degenerative Joint Disease",
    intro: "Age-related wear-and-tear specifically affecting the lower back (lumbar spine). It is a leading cause of chronic mechanical lower back pain and stiffness.",
    cause: "Chronic degeneration of the lumbar intervertebral discs, loss of facet joint cartilage, and reactive osteophyte (bone spur) formation due to aging and mechanical stress.",
    types: [
      { name: "Degenerative Cascade", desc: "Progresses from simple disc dehydration to severe spinal canal stenosis based on the degree of wear." }
    ],
    tests: "Lumbar X-rays to assess bone degeneration/alignment. MRI or CT scan is required if there are symptoms of neurogenic claudication or severe sciatica."
  }
];

export default function NeuroSpineCompendium() {
  return (
    <HandwrittenCanvas>
      <HandwrittenTitle badge={<>High-Yield<br/><span className="text-red-600 dark:text-rose-400">Neurology</span></>}>
        Neuro & Spine Disorders
      </HandwrittenTitle>

      <div className="text-center mb-12">
        <p className="text-blue-700 dark:text-green-400 text-xl max-w-2xl mx-auto leading-relaxed">
          10 Core High-Yield Topics for Central, Peripheral, and Spinal pathologies. Optimized for quick exam revision.
        </p>
      </div>

      <div className="space-y-12">
        {NEURO_TOPICS.map((item) => (
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
