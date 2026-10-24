"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Eye, Microscope, Layers, Leaf, Activity, 
  RotateCcw, ZoomIn, ZoomOut, FlaskConical, Compass, 
  CheckCircle2, Sparkles, Crosshair, Sliders, ChevronRight, 
  Maximize2, Minimize2, Dna 
} from "lucide-react";

type OrganNodeId = "canopy" | "calyx" | "collar" | "taproot" | "rootlets" | "histology";
type HudTab = "morphology" | "rasapanchaka" | "kinetics";
type TsLayerId = "cork" | "cortex" | "phloem" | "cambium" | "xylem";

export default function BotanicalDissectionStudio() {
  // Active Selected Anatomical Organ Pin
  const [activeOrgan, setActiveOrgan] = useState<OrganNodeId>("taproot");
  const [activeHudTab, setActiveHudTab] = useState<HudTab>("rasapanchaka");
  const [hudExpanded, setHudExpanded] = useState<boolean>(true);

  // Anatomy-App Style Layer Peeling Toggles
  const [layers, setLayers] = useState({
    epidermis: true,      // Outer realistic plant tissue
    vascularSap: true,    // Internal Xylem/Phloem animated sap channels
    molecules: true,      // Bioactive Withanolide molecular hotspots
    pins: true,           // Anatomical leader-line callout pins
  });

  // Interactive Microscopic T.S. Tissue Ring Selector
  const [activeTsRing, setActiveTsRing] = useState<TsLayerId>("cortex");

  // Camera Zoom, Pan & 3D Orbit Tilt State
  const [zoom, setZoom] = useState<number>(1.15);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [panY, setPanY] = useState<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Focus Camera Smoothly on Specific Organ Node
  const focusOnOrgan = (organ: OrganNodeId) => {
    setActiveOrgan(organ);
    setHudExpanded(true);
    switch (organ) {
      case "canopy":
        setZoom(1.55);
        setPanY(115);
        break;
      case "calyx":
        setZoom(1.75);
        setPanY(75);
        break;
      case "collar":
        setZoom(1.6);
        setPanY(-10);
        break;
      case "taproot":
        setZoom(1.65);
        setPanY(-115);
        break;
      case "rootlets":
        setZoom(1.75);
        setPanY(-155);
        break;
      case "histology":
        setZoom(1.15);
        setPanY(0);
        setRotation({ x: 0, y: 0 });
        break;
    }
  };

  const resetCamera = () => {
    setZoom(1.1);
    setPanY(0);
    setRotation({ x: 0, y: 0 });
  };

  // Pointer Drag for 2.5D Orbital Inspection
  const handlePointerDown = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    lastPosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - lastPosRef.current.x;
    const dy = clientY - lastPosRef.current.y;
    lastPosRef.current = { x: clientX, y: clientY };

    setRotation((prev) => ({
      x: Math.max(-28, Math.min(28, prev.x + dx * 0.25)),
      y: Math.max(-18, Math.min(18, prev.y - dy * 0.2)),
    }));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // ===========================================================================
  // ORGAN-SPECIFIC CLINICAL & BOTANICAL DISSECTION DATABASE
  // ===========================================================================
  const organDatabase: Record<
    OrganNodeId,
    {
      code: string;
      sanskritTitle: string;
      latinPart: string;
      prayojyaStatus: string;
      morphology: {
        summary: string;
        markers: { label: string; value: string }[];
        spottingPearl: string;
      };
      rasapanchaka: {
        rasa: string;
        guna: string;
        virya: string;
        vipaka: string;
        prabhava: string;
        doshaKarma: string;
        shloka: string;
      };
      kinetics: {
        primaryMolecules: string;
        srotasTarget: string;
        anupanaVehicle: string;
        mechanism: string;
      };
    }
  > = {
    canopy: {
      code: "NODE 01 • PATRA",
      sanskritTitle: "अश्वगन्धा पत्र (Leaf Lamina & Shoot)",
      latinPart: "Folium Withaniae • Aerial Vegetative Canopy",
      prayojyaStatus: "Secondary Therapeutic Part (External Upanaha & Shothahara)",
      morphology: {
        summary:
          "Simple, petiolate, ovate to oblong-ovate leaves (5–10 cm long) arranged sub-oppositely along terete branches clothed in dense stellate (star-shaped) hairs.",
        markers: [
          { label: "Venation", value: "Unicostate reticulate with prominent arcuate midrib" },
          { label: "Indumentum", value: "Velvety greyish-green stellate pubescence" },
          { label: "Margin & Apex", value: "Entire margin, acute to sub-obtuse apex" },
          { label: "Stomatal Index", value: "Anisocytic stomata predominantly on abaxial epidermis" },
        ],
        spottingPearl:
          "Rubbing the fresh leaf produces a pungent, bitter-green odor distinct from the horse-like smell of the subterranean root.",
      },
      rasapanchaka: {
        rasa: "Tikta (Bitter) & Katu (Pungent)",
        guna: "Laghu (Light), Ruksha (Drying)",
        virya: "Ushna Virya (Thermogenic)",
        vipaka: "Katu Vipaka (Catabolic / Lekhana)",
        prabhava: "Shothahara (Anti-inflammatory) & Granthihara",
        doshaKarma: "Kapha-Vatahara • Medohara (Used in obesity & lymphadenopathy)",
        shloka: "पत्रं तु शोथघ्नं ग्रन्थिगण्डमालाविनाशनम् ।",
      },
      kinetics: {
        primaryMolecules: "Withaferin A (0.2–1.1% dry wt), Withanone, Chlorogenic Acid",
        srotasTarget: "Raktavaha, Mamsavaha & Medovaha Srotas",
        anupanaVehicle: "Warm Water Paste (Kalka Lepa) or Leaf Swarasa",
        mechanism:
          "Withaferin A synthesised in leaf chloroplasts covalently modifies IKKβ, blocking NF-κB activation, inhibiting angiogenesis in benign growths (Granthi), and accelerating localized wound resolution.",
      },
    },
    calyx: {
      code: "NODE 02 • PHALA & KOSHA",
      sanskritTitle: "अश्वगन्धा फल एवं कोश (Fruiting Calyx & Berry)",
      latinPart: "Fructus Withaniae • Accrescent Lantern Calyx",
      prayojyaStatus: "Taxonomic Diagnostic Organ & Coagulant Seed Source",
      morphology: {
        summary:
          "Globose, smooth, shining orange-red berry (6–8 mm diameter) completely enclosed within a persistent, inflated, 5-angled papery bladder-like calyx.",
        markers: [
          { label: "Inflorescence", value: "Axillary umbellate cymes of 4–6 subsessile flowers" },
          { label: "Fruiting Calyx", value: "Membranous, urceolate, 5-ribbed reticulately veined sac" },
          { label: "Pericarp", value: "Thin, glossy scarlet-orange exocarp when ripe" },
          { label: "Seeds (Bija)", value: " numerosos, yellow, reniform (kidney-shaped), compressed" },
        ],
        spottingPearl:
          "The lantern-like papery calyx (resembling Physalis) is the fastest visual field marker to identify Solanaceae genus Withania.",
      },
      rasapanchaka: {
        rasa: "Tikta (Bitter) & Kashaya (Astringent)",
        guna: "Laghu, Ruksha",
        virya: "Ushna Virya",
        vipaka: "Katu Vipaka",
        prabhava: " Ksheera-skandana (Milk-coagulating enzymatic action of seeds)",
        doshaKarma: "Kaphahara • Mutrala (Diuretic in dysuria)",
        shloka: "फलं तिक्तं कषायं च मूत्रकृच्छ्रनिबर्हणम् ।",
      },
      kinetics: {
        primaryMolecules: "Withanamides A–I (Berry), Withania protease (Seeds)",
        srotasTarget: "Mutravaha Srotas",
        anupanaVehicle: "Seed decoction (used externally/traditionally; seeds are mildly narcotic in excess)",
        mechanism:
          "Withanamides in the ripe fruit exhibit potent lipid-peroxidation inhibition, while the berries signal the seasonal maturity peak when root harvesting yields maximum glycowithanolides.",
      },
    },
    collar: {
      code: "NODE 03 • MULA-SHIRA",
      sanskritTitle: "मूल-शिर (Hypocotyl Crown & Transition Zone)",
      latinPart: "Collum Radicis • Root-Stem Vascular Transition",
      prayojyaStatus: "Vascular Junction & Vegetative Crown",
      morphology: {
        summary:
          "Thickened, knotty lignified crown at the soil interface where the green aerial stem transitions into the subterranean storage taproot.",
        markers: [
          { label: "External Texture", value: "Suberized, longitudinally furrowed root-crown" },
          { label: "Bud Scars", value: "Contains dormant perennating axillary shoot buds" },
          { label: "Vascular Shift", value: "Exarch root xylem transitions to endarch stem bundles" },
          { label: "Fracture", value: "Fibrous-woody (harder than the starchy taproot below)" },
        ],
        spottingPearl:
          "In commercial market drug evaluation (Dravya Pariksha), excessive woody crown pieces lower the grade of Ashwagandha Churna compared to pure starchy taproots.",
      },
      rasapanchaka: {
        rasa: "Tikta-Kashaya",
        guna: "Guru (Heavy), Ruksha",
        virya: "Ushna Virya",
        vipaka: "Madhura-Katu Transition",
        prabhava: "Vahaka (Bi-directional Phloem-Xylem Conduit)",
        doshaKarma: "Vata-Kaphahara",
        shloka: "मूलशिरः काष्ठमयं रसवहनसन्धिगम् ।",
      },
      kinetics: {
        primaryMolecules: "Tropane & Pyrazole Alkaloids (Withanine, Somniferine, Anaferine)",
        srotasTarget: "Rasavaha & Pranavaha Srotas",
        anupanaVehicle: "Processed in Decoctions (Kwatha Kalpana)",
        mechanism:
          "Acts as the high-pressure vascular bottleneck where foliar photosynthates descend via secondary phloem to be polymerized into storage starch and withanosides inside the taproot.",
      },
    },
    taproot: {
      code: "NODE 04 • PRADHANA MULA",
      sanskritTitle: "अश्वगन्धा मूल (Official Starchy Taproot)",
      latinPart: "Radix Withaniae • API Official Pharmacopoeial Drug",
      prayojyaStatus: "PRIMARY PRAYOJYA ANGA (Official BAMS & API Drug Part)",
      morphology: {
        summary:
          "Straight, unbranched, plump conical tuberous taproot (5–15 cm long, 1–2 cm thick), buff to greyish-yellow externally with a pure creamy-white starchy interior.",
        markers: [
          { label: "Odor (Gandha)", value: "Ashwa-Gandha (Distinct equine/horse-like odor when fresh)" },
          { label: "Fracture", value: "Short, uneven, starchy, non-fibrous in genuine Nagori roots" },
          { label: "Taste", value: "Mucilaginous at first, followed by bitter and slightly acrid" },
          { label: "Elite Variety", value: "Nagori Ashwagandha (Jhunjhunu/Nagaur arid belt, Rajasthan)" },
        ],
        spottingPearl:
          "2nd Prof Exam Gold: Snap the root—if it breaks with a crisp, chalky white starchy snap rather than splintering like wood, it is high-potency Nagori Ashwagandha.",
      },
      rasapanchaka: {
        rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
        guna: "Laghu (Light), Snigdha (Unctuous)",
        virya: "Ushna Virya (Warming Metabolic Potency)",
        vipaka: "Madhura Vipaka (Anabolic / Tissue-Building)",
        prabhava: "Balya • Brimhaniya • Rasayana • Vajikarana",
        doshaKarma: "Vata-Kaphashamaka (Supreme pacifier of systemic Vata degeneration)",
        shloka: "अश्वगन्धाऽनिलश्लेष्मश्वित्रशोथक्षयापहा । बल्या रसायनी तिक्ता कषायोष्णाऽतिशुक्रला ॥ (भा.प्र.)",
      },
      kinetics: {
        primaryMolecules: "Withanolide A, Withanoside IV & VI, Sitoindosides VII–X",
        srotasTarget: "Majjavaha (CNS), Mamsavaha (Muscle) & Shukravaha Srotas",
        anupanaVehicle: "Kshira Paka (Warm Milk Decoction) or Purana Ghrita",
        mechanism:
          "Lipophilic Withanolide A & Withanoside IV micellize in milk fat globules, crossing the blood-brain barrier to upregulate GABA-A receptor signaling (curing Anidra/insomnia), lower HPA-axis cortisol, and stimulate axonal regeneration.",
      },
    },
    rootlets: {
      code: "NODE 05 • UPAMULA",
      sanskritTitle: "उपमूल एवं मूलरोम (Lateral Rootlets & Rhizosphere)",
      latinPart: "Radiculae Laterales • Mineral & Nitrogen Absorption Zone",
      prayojyaStatus: "Bio-Mineral Uptake & Secondary Alkaloid Synthesis Site",
      morphology: {
        summary:
          "Slender, wiry secondary lateral rootlets branching at acute angles from the primary taproot, covered near the tips with absorptive root hairs.",
        markers: [
          { label: "Diameter", value: "1–3 mm slender cylindrical root branches" },
          { label: "Soil Preference", value: "Well-drained sandy-loam (Jangala Desha) with pH 7.5–8.0" },
          { label: "Surface", value: "Light brown, finely wrinkled longitudinally" },
          { label: "Drying Process", value: "Trimmed during grading to isolate Grade-A stout taproots" },
        ],
        spottingPearl:
          "Rootlets have a higher surface-to-volume ratio of outer cork to starchy parenchyma, making them slightly more bitter and fibrous than the central taproot.",
      },
      rasapanchaka: {
        rasa: "Tikta-Katu",
        guna: "Laghu, Snigdha",
        virya: "Ushna Virya",
        vipaka: "Madhura Vipaka",
        prabhava: "Deepana (Kindles tissue-level Dhatvagni)",
        doshaKarma: "Vatahara",
        shloka: "जाङ्गलदेशजातायाः मूलं वीर्यवत्तरम् ।",
      },
      kinetics: {
        primaryMolecules: "Tropine, Pseudotropine, Cuscohygrine & Iron-chelated glycowithanolides",
        srotasTarget: "Rasavaha & Raktavaha Srotas",
        anupanaVehicle: "Ashwagandharishta (Self-generated hydro-alcoholic extraction)",
        mechanism:
          "Rootlet meristems synthesize precursor alkaloids and absorb trace iron from arid soils, contributing to Ashwagandha's hematinic (Raktavardhaka) effect in Pandu (anemia).",
      },
    },
    histology: {
      code: "NODE 06 • MICROSCOPIC T.S.",
      sanskritTitle: "मूल अनुप्रस्थ काट (40x Microscopic Root Histology)",
      latinPart: "Sectio Transversalis Radicis • Cellular Tissue Dissection",
      prayojyaStatus: "2nd Prof BAMS Practical Record & Pharmacognosy Standard",
      morphology: {
        summary:
          "Circular transverse section exhibiting exfoliating suberized cork, a wide starchy parenchymatous cortex, a distinct cambium ring, and a broad central xylem core traversed by medullary rays.",
        markers: [
          { label: "1. Cork (Phellem)", value: "3–6 rows of tangentially elongated, non-lignified suberized cells" },
          { label: "2. Cortex", value: "10–15 layers of parenchyma packed with compound starch grains" },
          { label: "3. Cambium", value: "2–4 layers of meristematic tangentially dividing cells" },
          { label: "4. Xylem & Rays", value: "Tracheids, pitted vessels & starch-filled medullary rays" },
        ],
        spottingPearl:
          "Crucial Viva Answer: Complete absence of stone cells (sclereids) and bast fibers in the cortex distinguishes genuine Withania somnifera root under the microscope.",
      },
      rasapanchaka: {
        rasa: "Madhura-Tikta (Localized in Cortical Starch & Phloem)",
        guna: "Snigdha-Guru (Amyloplast Starch Reserves)",
        virya: "Ushna Virya",
        vipaka: "Madhura Vipaka",
        prabhava: "Shuddha Dravya Pariksha (Pharmacognostic Purity Standard)",
        doshaKarma: "Vata-Kaphahara • Brimhana",
        shloka: "निःशूकं मधुरं स्निग्धं चूर्णयोग्यं प्रशस्यते ।",
      },
      kinetics: {
        primaryMolecules: "Compound Starch Grains (15–30 µm) + Microsphenoidal Calcium Oxalate",
        srotasTarget: "Mamsavaha & Shukravaha Srotas",
        anupanaVehicle: "80-Mesh Fine Sieved Churna + Warm Milk",
        mechanism:
          "Histochemical staining proves Withanolide A and Withanoside IV are concentrated in the secondary phloem and outer cortical parenchyma—never peel the buff outer bark too deeply during cleaning.",
      },
    },
  };

  // Interactive Microscopic T.S. Ring Details
  const tsRingDetails: Record<TsLayerId, { title: string; histology: string; chemistry: string }> = {
    cork: {
      title: "1. Phellem (Outer Suberized Cork)",
      histology: "3 to 6 layers of thin-walled, tabular, tangentially elongated suberized cells; exfoliating in mature roots.",
      chemistry: "Protective hydrophobic barrier; contains trace sterols and defensive phenolic amides.",
    },
    cortex: {
      title: "2. Phelloderm & Cortical Parenchyma",
      histology: "10 to 15 layers of isodiametric thin-walled parenchyma cells densely packed with 2–4 compound starch grains and microsphenoidal calcium oxalate crystals.",
      chemistry: "Primary reservoir of Madhura Vipaka anabolic polysaccharides and glycowithanolides (Withanoside IV).",
    },
    phloem: {
      title: "3. Secondary Phloem Zone",
      histology: "Narrow zone composed of sieve tubes, companion cells, and phloem parenchyma; completely devoid of lignified phloem fibers.",
      chemistry: "Highest concentration of bioactive Withanolide A translocated from upper aerial shoots.",
    },
    cambium: {
      title: "4. Vascular Cambium Ring",
      histology: "Distinct continuous ring of 2 to 4 rows of tangentially elongated meristematic cells.",
      chemistry: "Active zone of secondary radial thickening that produces the plump Nagori tuberous morphology.",
    },
    xylem: {
      title: "5. Secondary Xylem & Medullary Rays",
      histology: "Forms the bulk of the central core; vessels with pitted and scalariform thickening separated by 1–3 cell wide starch-bearing medullary rays.",
      chemistry: "Provides the crisp, short starchy fracture when young; becomes overly lignified if harvested too late.",
    },
  };

  const currentOrgan = organDatabase[activeOrgan];

  return (
    <div className="relative w-full min-h-[calc(100vh-3.5rem)] bg-[#040B08] text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* =================================================================
          SCOPED 3D ANATOMY STUDIO STYLES (PERSPECTIVE GRID & SAP FLOW)
          ================================================================= */}
      <style dangerouslySetInnerHTML={{__html: `
        .studio-floor-grid {
          position: absolute;
          width: 180%;
          height: 90%;
          left: -40%;
          bottom: -25%;
          background-image:
            linear-gradient(to right, rgba(16, 185, 129, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.14) 1px, transparent 1px);
          background-size: 48px 48px;
          transform: perspective(900px) rotateX(72deg);
          mask-image: radial-gradient(ellipse at center, black 15%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 15%, transparent 70%);
          pointer-events: none;
        }
        .sap-flow-up {
          stroke-dasharray: 6 8;
          animation: flowUp 1.8s linear infinite;
        }
        .sap-flow-down {
          stroke-dasharray: 5 10;
          animation: flowDown 2.2s linear infinite;
        }
        @keyframes flowUp {
          from { stroke-dashoffset: 28; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowDown {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 30; }
        }
        .bio-node-pulse {
          animation: bioPulse 2.4s ease-in-out infinite;
        }
        @keyframes bioPulse {
          0%, 100% { r: 5px; opacity: 0.9; }
          50% { r: 8px; opacity: 0.4; }
        }
      `}} />

      {/* Ambient Depth-of-Field Clinical Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(16,185,129,0.14)_0%,rgba(212,175,55,0.05)_35%,transparent_72%)] pointer-events-none" />
      <div className="studio-floor-grid" />

      {/* =================================================================
          1. TOP FLOATING SURGICAL HEADER BAR
          ================================================================= */}
      <header className="relative z-30 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 pt-4 pb-2 pointer-events-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/bams-hub"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/85 backdrop-blur-md border border-white/15 text-xs font-bold text-white/85 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Exit Studio
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/75 backdrop-blur-md border border-emerald-500/30 text-xs">
            <Dna className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono uppercase tracking-wider text-emerald-300 font-bold">
              3D Dravyaguna Dissection Studio
            </span>
            <span className="text-white/40">|</span>
            <span className="font-serif italic text-white/90">Withania somnifera (L.) Dunal</span>
          </div>
        </div>

        {/* Center-Right Quick Organ Jump Pills */}
        <div className="flex items-center gap-1.5 bg-zinc-900/85 backdrop-blur-md p-1 rounded-lg border border-white/15 overflow-x-auto max-w-full">
          {([
            { id: "canopy" as const, label: "Patra (Leaf)" },
            { id: "calyx" as const, label: "Phala (Berry)" },
            { id: "collar" as const, label: "Crown" },
            { id: "taproot" as const, label: "Mula (Taproot)" },
            { id: "rootlets" as const, label: "Rootlets" },
            { id: "histology" as const, label: "40x Root T.S." },
          ]).map((tab) => {
            const active = activeOrgan === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => focusOnOrgan(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* =================================================================
          2. LEFT FLOATING ANATOMICAL LAYER PEELER DOCK (LIKE COMPLETE ANATOMY)
          ================================================================= */}
      <aside className="fixed left-4 top-24 z-30 hidden md:flex flex-col gap-2 w-56 bg-zinc-950/85 backdrop-blur-xl border border-white/15 rounded-xl p-3.5 shadow-2xl">
        <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Tissue Layer Peel
          </span>
          <span className="text-[9px] font-mono text-emerald-400">LIVE</span>
        </div>

        {[
          {
            key: "epidermis" as const,
            label: "1. Exomorphology",
            sub: "Bark, Lamina & Calyx",
            color: "bg-emerald-500",
          },
          {
            key: "vascularSap" as const,
            label: "2. Vascular Sap Flow",
            sub: "Xylem & Phloem Channels",
            color: "bg-cyan-400",
          },
          {
            key: "molecules" as const,
            label: "3. Withanolide Loci",
            sub: "Bioactive Synthesis Nodes",
            color: "bg-amber-400",
          },
          {
            key: "pins" as const,
            label: "4. Anatomical Pins",
            sub: "Leader-Line Callouts",
            color: "bg-rose-400",
          },
        ].map((item) => {
          const isOn = layers[item.key];
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => toggleLayer(item.key)}
              className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                isOn
                  ? "bg-white/10 border-emerald-500/40 text-white"
                  : "bg-black/40 border-white/5 text-white/40"
              }`}
            >
              <div>
                <p className="text-xs font-bold leading-tight">{item.label}</p>
                <p className="text-[10px] text-white/55 mt-0.5">{item.sub}</p>
              </div>
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isOn ? `${item.color} shadow-[0_0_8px_currentColor]` : "bg-zinc-700"
                }`}
              />
            </button>
          );
        })}

        {/* Camera Orbit & Zoom Sliders */}
        <div className="pt-3 mt-1 border-t border-white/10 space-y-2.5">
          <div>
            <div className="flex justify-between text-[10px] font-mono text-white/70 mb-1">
              <span>OPTICAL ZOOM</span>
              <span className="text-[#D4AF37]">{Math.round(zoom * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.85"
              max="2.2"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
            />
          </div>

          <button
            type="button"
            onClick={resetCamera}
            className="w-full py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-white/80 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-[#D4AF37]" /> Reset Camera View
          </button>
        </div>
      </aside>

      {/* =================================================================
          3. CENTER BOUNDLESS 3D ANATOMICAL SPECIMEN STAGE
          (Drag anywhere to orbit/tilt; click any leader-line pin to inspect)
          ================================================================= */}
      <main
        onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
        onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => {
          if (e.touches[0]) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }}
        onTouchEnd={handlePointerUp}
        className="relative flex-grow flex items-center justify-center w-full h-[640px] sm:h-[720px] cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <div
          style={{
            transform: `perspective(1400px) rotateY(${rotation.x}deg) rotateX(${rotation.y}deg) scale(${zoom}) translateY(${panY}px)`,
            transition: isDraggingRef.current
              ? "none"
              : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="relative w-full max-w-[760px] h-full flex items-center justify-center md:mr-72"
        >
          {activeOrgan !== "histology" ? (
            /* =============================================================
               HIGH-REALISM MULTI-LAYER BOTANICAL & VASCULAR SPECIMEN SVG
               ============================================================= */
            <svg viewBox="0 0 700 680" className="w-full h-full max-h-[680px] overflow-visible">
              <defs>
                {/* 3D Cylindrical Shading Gradients for Realistic Root & Stem */}
                <linearGradient id="nagoriTaprootGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c5e38" />
                  <stop offset="28%" stopColor="#e5cfa9" />
                  <stop offset="55%" stopColor="#d4b88c" />
                  <stop offset="85%" stopColor="#8c6b41" />
                  <stop offset="100%" stopColor="#4f3a1f" />
                </linearGradient>

                <linearGradient id="woodyStemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#264027" />
                  <stop offset="40%" stopColor="#6ea164" />
                  <stop offset="75%" stopColor="#3c663b" />
                  <stop offset="100%" stopColor="#1b2e1c" />
                </linearGradient>

                <radialGradient id="leaf3dGrad" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#529e66" />
                  <stop offset="55%" stopColor="#27633a" />
                  <stop offset="100%" stopColor="#0f2e19" />
                </radialGradient>

                <radialGradient id="berryGlow" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="50%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#7f1d1d" />
                </radialGradient>

                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 3D Surgical Turntable Ring at Soil Horizon (Y = 365) */}
              <g transform="translate(350, 365)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="210"
                  ry="32"
                  fill="rgba(16, 185, 129, 0.04)"
                  stroke="rgba(212, 175, 55, 0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                <ellipse
                  cx="0"
                  cy="0"
                  rx="145"
                  ry="20"
                  fill="rgba(30, 20, 12, 0.55)"
                  stroke="rgba(16, 185, 129, 0.35)"
                  strokeWidth="1"
                />
                <text x="-205" y="-12" fill="#D4AF37" fontSize="9" fontFamily="monospace" opacity="0.8">
                  BHUMI-REKHA • SOIL HORIZON (0.0 cm)
                </text>
              </g>

              {/* ===========================================================
                  DISSECTION LAYER 1: REALISTIC EXOMORPHOLOGY (BARK, LEAVES, ROOT)
                  Fades to translucent ghost wireframe when peeled off!
                  =========================================================== */}
              <g
                opacity={layers.epidermis ? 1 : 0.16}
                className="transition-opacity duration-500"
              >
                {/* --- SUBTERRANEAN NAGORI TAPROOT SYSTEM (Y = 360 to 635) --- */}
                <g onClick={() => focusOnOrgan("taproot")} className="cursor-pointer">
                  {/* Secondary Lateral Rootlets (Upamula) */}
                  <path
                    d="M 338 415 C 295 430, 255 465, 220 515 M 336 465 C 285 495, 250 540, 232 585 M 362 425 C 405 445, 442 480, 475 525 M 360 480 C 405 510, 435 555, 455 595"
                    fill="none"
                    stroke="url(#nagoriTaprootGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  {/* Fine Absorptive Tertiary Root Hairs */}
                  <path
                    d="M 275 450 L 245 442 M 252 480 L 222 488 M 272 520 L 245 538 M 425 462 L 458 452 M 445 495 L 478 502 M 420 532 L 452 548"
                    fill="none"
                    stroke="#c7ab7e"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  {/* Primary Plump Conical Nagori Taproot (Pradhana Mula) */}
                  <path
                    d="M 330 360 C 325 415, 326 495, 342 612 C 345 632, 355 632, 358 612 C 374 495, 375 415, 370 360 Z"
                    fill="url(#nagoriTaprootGrad)"
                    stroke="#5c4424"
                    strokeWidth="1.5"
                  />

                  {/* Realistic Longitudinal Furrows & Lenticels on Taproot */}
                  <path
                    d="M 343 375 C 340 435, 342 515, 347 595 M 356 380 C 358 445, 356 510, 352 585 M 335 405 L 342 405 M 360 440 L 367 440 M 334 490 L 342 490"
                    fill="none"
                    stroke="#5c4020"
                    strokeWidth="1.1"
                    opacity="0.65"
                  />
                </g>

                {/* --- HYPOCOTYL CROWN / COLLAR ZONE (Y = 335 to 370) --- */}
                <g onClick={() => focusOnOrgan("collar")} className="cursor-pointer">
                  <path
                    d="M 326 364 C 326 346, 336 336, 350 336 C 364 336, 374 346, 374 364 Z"
                    fill="#6b5839"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                  />
                </g>

                {/* --- AERIAL STEM, BRANCHES & OVATE FOLIAGE (Y = 55 to 345) --- */}
                <g onClick={() => focusOnOrgan("canopy")} className="cursor-pointer">
                  {/* Main Erect Tomentose Stem & Sympodial Branches */}
                  <path
                    d="M 350 345 C 350 265, 346 175, 350 75 M 348 285 C 305 255, 260 225, 212 185 M 350 240 C 398 210, 445 178, 492 140 M 348 180 C 302 150, 265 118, 232 85 M 350 135 C 392 110, 430 85, 462 60"
                    fill="none"
                    stroke="url(#woodyStemGrad)"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />

                  {/* Detailed Ovate Leaves with Arcuate Lateral Venation */}
                  {[
                    { x: 212, y: 185, rot: -42, s: 1.15 },
                    { x: 492, y: 140, rot: 40, s: 1.15 },
                    { x: 232, y: 85, rot: -34, s: 1.0 },
                    { x: 462, y: 60, rot: 32, s: 0.96 },
                    { x: 268, y: 242, rot: -52, s: 0.95 },
                    { x: 438, y: 205, rot: 48, s: 0.95 },
                    { x: 350, y: 65, rot: 0, s: 0.92 },
                  ].map((lf, idx) => (
                    <g
                      key={idx}
                      transform={`translate(${lf.x}, ${lf.y}) rotate(${lf.rot}) scale(${lf.s})`}
                    >
                      {/* Leaf Petiole */}
                      <line x1="0" y1="8" x2="0" y2="-6" stroke="#5c8d53" strokeWidth="3.5" />
                      {/* Ovate Leaf Blade */}
                      <path
                        d="M 0 0 C -34 -20, -38 -64, 0 -92 C 38 -64, 34 -20, 0 0 Z"
                        fill="url(#leaf3dGrad)"
                        stroke="#6ee7b7"
                        strokeWidth="1.2"
                      />
                      {/* Prominent Midrib & Arcuate Secondary Veins */}
                      <path
                        d="M 0 -2 L 0 -86 M 0 -20 Q -16 -28 -22 -42 M 0 -36 Q 18 -44 24 -58 M 0 -50 Q -15 -58 -19 -70 M 0 -64 Q 12 -70 15 -78"
                        fill="none"
                        stroke="#a7f3d0"
                        strokeWidth="1.3"
                        opacity="0.7"
                      />
                    </g>
                  ))}
                </g>

                {/* --- AXILLARY ACCRESCENT CALYX & ORANGE-RED BERRIES --- */}
                <g onClick={() => focusOnOrgan("calyx")} className="cursor-pointer">
                  {[
                    { x: 332, y: 242, rot: -15 },
                    { x: 368, y: 215, rot: 18 },
                    { x: 334, y: 168, rot: -12 },
                    { x: 366, y: 132, rot: 15 },
                    { x: 292, y: 212, rot: -22 },
                    { x: 408, y: 175, rot: 22 },
                  ].map((cal, i) => (
                    <g key={i} transform={`translate(${cal.x}, ${cal.y}) rotate(${cal.rot})`}>
                      {/* Inflated 5-Angled Papery Calyx Sac */}
                      <path
                        d="M 0 16 C -17 11, -20 -10, 0 -22 C 20 -10, 17 11, 0 16 Z"
                        fill="rgba(229, 211, 179, 0.52)"
                        stroke="#facc15"
                        strokeWidth="1.4"
                      />
                      {/* Calyx Longitudinal Ribs */}
                      <path
                        d="M 0 15 L 0 -20 M -8 12 Q -10 -4 0 -20 M 8 12 Q 10 -4 0 -20"
                        fill="none"
                        stroke="#ca8a04"
                        strokeWidth="0.8"
                      />
                      {/* Inner Scarlet-Orange Winter Cherry Berry */}
                      <circle cx="0" cy="2" r="7.5" fill="url(#berryGlow)" stroke="#fde047" strokeWidth="0.8" />
                    </g>
                  ))}
                </g>
              </g>

              {/* ===========================================================
                  DISSECTION LAYER 2: VASCULAR XYLEM & PHLOEM SAP CHANNELS
                  Shows animated bi-directional transport across the plant!
                  =========================================================== */}
              {layers.vascularSap && (
                <g filter="url(#glowFilter)">
                  {/* Ascending Xylem Water/Mineral Stream (Cyan — Rootlets to Leaves) */}
                  <path
                    d="M 225 512 Q 290 435 346 410 L 346 85 M 470 520 Q 410 445 354 420 L 354 140 L 480 145 M 346 280 L 220 190"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    className="sap-flow-up"
                  />

                  {/* Descending Phloem Withanolide/Assimilate Stream (Gold — Shoot to Taproot) */}
                  <path
                    d="M 240 95 Q 305 150 350 185 L 350 605 M 455 70 Q 400 115 352 140"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="2.5"
                    className="sap-flow-down"
                  />
                </g>
              )}

              {/* ===========================================================
                  DISSECTION LAYER 3: PHYTOCHEMICAL SYNTHESIS HOTSPOT NODES
                  =========================================================== */}
              {layers.molecules && (
                <g>
                  {[
                    { x: 212, y: 145, color: "#10b981", label: "Withaferin A" },
                    { x: 368, y: 215, color: "#fb923c", label: "Withanamides" },
                    { x: 350, y: 350, color: "#a855f7", label: "Somniferine" },
                    { x: 350, y: 475, color: "#facc15", label: "Withanolide A + Starch" },
                    { x: 255, y: 525, color: "#22d3ee", label: "Withanoside IV" },
                  ].map((m, idx) => (
                    <g key={idx} transform={`translate(${m.x}, ${m.y})`}>
                      <circle cx="0" cy="0" r="6" fill={m.color} className="bio-node-pulse" />
                      <circle cx="0" cy="0" r="3" fill="#fff" />
                    </g>
                  ))}
                </g>
              )}

              {/* ===========================================================
                  DISSECTION LAYER 4: TETHERED ANATOMICAL LEADER-LINE PINS
                  Click any callout pin directly on the canvas to inspect!
                  =========================================================== */}
              {layers.pins && (
                <g>
                  {[
                    {
                      id: "canopy" as const,
                      targetX: 235,
                      targetY: 145,
                      boxX: 25,
                      boxY: 110,
                      title: "01. PATRA (LEAF LAMINA)",
                      sub: "Withaferin-A • Shothahara",
                    },
                    {
                      id: "calyx" as const,
                      targetX: 372,
                      targetY: 170,
                      boxX: 485,
                      boxY: 140,
                      title: "02. PHALA & KOSHA",
                      sub: "5-Ribbed Lantern Calyx",
                    },
                    {
                      id: "collar" as const,
                      targetX: 332,
                      targetY: 350,
                      boxX: 35,
                      boxY: 315,
                      title: "03. MULA-SHIRA (CROWN)",
                      sub: "Vascular Transition Zone",
                    },
                    {
                      id: "taproot" as const,
                      targetX: 362,
                      targetY: 485,
                      boxX: 485,
                      boxY: 455,
                      title: "04. PRADHANA MULA ★",
                      sub: "Official Nagori Drug Root",
                    },
                    {
                      id: "rootlets" as const,
                      targetX: 245,
                      targetY: 545,
                      boxX: 30,
                      boxY: 535,
                      title: "05. UPAMULA (ROOTLETS)",
                      sub: "Alkaloid & Iron Uptake",
                    },
                  ].map((pin) => {
                    const isSelected = activeOrgan === pin.id;
                    return (
                      <g
                        key={pin.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          focusOnOrgan(pin.id);
                        }}
                        className="cursor-pointer group"
                      >
                        {/* Tethered Diagonal SVG Leader Line */}
                        <polyline
                          points={`${pin.targetX},${pin.targetY} ${
                            pin.boxX < 300 ? pin.boxX + 185 : pin.boxX
                          },${pin.boxY + 20}`}
                          fill="none"
                          stroke={isSelected ? "#10b981" : "#D4AF37"}
                          strokeWidth={isSelected ? "2.2" : "1.2"}
                          strokeDasharray={isSelected ? "none" : "3 3"}
                        />
                        {/* Target Bullseye on Plant Organ */}
                        <circle
                          cx={pin.targetX}
                          cy={pin.targetY}
                          r={isSelected ? "7" : "5"}
                          fill={isSelected ? "#10b981" : "#D4AF37"}
                          stroke="#000"
                          strokeWidth="1.5"
                        />

                        {/* Callout Flag Badge */}
                        <g transform={`translate(${pin.boxX}, ${pin.boxY})`}>
                          <rect
                            x="0"
                            y="0"
                            width="185"
                            height="42"
                            rx="6"
                            fill={isSelected ? "rgba(6, 78, 59, 0.95)" : "rgba(9, 13, 22, 0.88)"}
                            stroke={isSelected ? "#10b981" : "rgba(212, 175, 55, 0.5)"}
                            strokeWidth={isSelected ? "2" : "1"}
                          />
                          <text
                            x="10"
                            y="17"
                            fill={isSelected ? "#6ee7b7" : "#F5DE93"}
                            fontSize="10"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {pin.title}
                          </text>
                          <text x="10" y="32" fill="#d1d5db" fontSize="9.5" fontFamily="sans-serif">
                            {pin.sub}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </g>
              )}
            </svg>
          ) : (
            /* =============================================================
               INTERACTIVE 40x MICROSCOPIC ROOT T.S. DISSECTION STAGE
               Click any concentric histological ring to isolate that tissue!
               ============================================================= */
            <div className="flex flex-col items-center">
              <div className="mb-3 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                Click any concentric histological tissue ring below to inspect its cellular anatomy
              </div>

              <svg viewBox="0 0 500 500" className="w-[360px] sm:w-[460px] h-[360px] sm:h-[460px]">
                {/* 1. Outer Cork (Phellem) */}
                <circle
                  cx="250"
                  cy="250"
                  r="210"
                  onClick={() => setActiveTsRing("cork")}
                  fill={activeTsRing === "cork" ? "#78350f" : "#3b2314"}
                  stroke={activeTsRing === "cork" ? "#facc15" : "#D4AF37"}
                  strokeWidth={activeTsRing === "cork" ? "6" : "3"}
                  strokeDasharray="12 4"
                  className="cursor-pointer transition-all"
                />

                {/* 2. Wide Parenchymatous Cortex (Starch & Withanosides) */}
                <circle
                  cx="250"
                  cy="250"
                  r="182"
                  onClick={() => setActiveTsRing("cortex")}
                  fill={activeTsRing === "cortex" ? "#065f46" : "#1e2923"}
                  stroke={activeTsRing === "cortex" ? "#34d399" : "#6ee7b7"}
                  strokeWidth="3"
                  className="cursor-pointer transition-all"
                />

                {/* 3. Secondary Phloem Zone */}
                <circle
                  cx="250"
                  cy="250"
                  r="130"
                  onClick={() => setActiveTsRing("phloem")}
                  fill={activeTsRing === "phloem" ? "#115e59" : "#133836"}
                  stroke="#2dd4bf"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="cursor-pointer transition-all"
                />

                {/* 4. Distinct Vascular Cambium Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="104"
                  onClick={() => setActiveTsRing("cambium")}
                  fill="none"
                  stroke={activeTsRing === "cambium" ? "#f43f5e" : "#facc15"}
                  strokeWidth={activeTsRing === "cambium" ? "10" : "5"}
                  className="cursor-pointer transition-all"
                />

                {/* 5. Central Secondary Xylem & Medullary Rays */}
                <circle
                  cx="250"
                  cy="250"
                  r="98"
                  onClick={() => setActiveTsRing("xylem")}
                  fill={activeTsRing === "xylem" ? "#713f12" : "#271c15"}
                  className="cursor-pointer transition-all"
                />

                {/* Radial Medullary Rays */}
                {Array.from({ length: 16 }).map((_, idx) => {
                  const angle = (idx * 360) / 16;
                  return (
                    <line
                      key={idx}
                      x1="250"
                      y1="250"
                      x2={250 + 96 * Math.cos((angle * Math.PI) / 180)}
                      y2={250 + 96 * Math.sin((angle * Math.PI) / 180)}
                      stroke="#fbbf24"
                      strokeWidth="1.5"
                      opacity="0.7"
                      pointerEvents="none"
                    />
                  );
                })}

                {/* Pitted Xylem Vessels */}
                {[
                  { x: 215, y: 215 },
                  { x: 285, y: 215 },
                  { x: 215, y: 285 },
                  { x: 285, y: 285 },
                  { x: 250, y: 195 },
                  { x: 250, y: 305 },
                ].map((v, i) => (
                  <circle
                    key={i}
                    cx={v.x}
                    cy={v.y}
                    r="8"
                    fill="#fde047"
                    stroke="#451a03"
                    strokeWidth="2"
                    pointerEvents="none"
                  />
                ))}
              </svg>

              {/* Selected Microscopic Ring Readout Bar */}
              <div className="max-w-lg bg-zinc-900/95 border border-emerald-500/40 rounded-xl p-4 mt-2 text-left shadow-2xl">
                <p className="text-xs font-mono font-bold text-[#D4AF37] uppercase">
                  {tsRingDetails[activeTsRing].title}
                </p>
                <p className="text-xs text-white/85 mt-1 leading-relaxed">
                  <strong>Histology:</strong> {tsRingDetails[activeTsRing].histology}
                </p>
                <p className="text-xs text-emerald-300 mt-1 leading-relaxed">
                  <strong>Phytochemistry:</strong> {tsRingDetails[activeTsRing].chemistry}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* =================================================================
          4. RIGHT FLOATING CLINICAL DISSECTION INSPECTOR DRAWER
          (Replaces the static Bento Grid with a sleek surgical HUD)
          ================================================================= */}
      <aside
        className={`fixed right-4 top-20 bottom-16 z-30 transition-all duration-300 flex flex-col ${
          hudExpanded ? "w-[92vw] sm:w-[390px]" : "w-12"
        }`}
      >
        {/* Collapse / Expand Handle */}
        <button
          type="button"
          onClick={() => setHudExpanded(!hudExpanded)}
          className="absolute -left-3 top-6 z-40 w-7 h-7 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg cursor-pointer"
          title={hudExpanded ? "Minimize Inspector" : "Expand Inspector"}
        >
          {hudExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        {hudExpanded && (
          <div className="h-full bg-zinc-950/90 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 flex flex-col justify-between shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-y-auto">
            <div>
              {/* Organ Code & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {currentOrgan.code}
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37]">
                  ASHWAGANDHA
                </span>
              </div>

              {/* Organ Sanskrit & Latin Title */}
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                {currentOrgan.sanskritTitle}
              </h2>
              <p className="font-serif italic text-xs text-emerald-400 mt-0.5">
                {currentOrgan.latinPart}
              </p>
              <p className="text-[11px] font-bold text-[#D4AF37] mt-1 pb-3 border-b border-white/10">
                {currentOrgan.prayojyaStatus}
              </p>

              {/* 3-Mode Clinical Inspector Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-black/60 p-1 rounded-lg border border-white/10 my-4">
                {([
                  { id: "rasapanchaka" as const, label: "Rasa-Panchaka" },
                  { id: "kinetics" as const, label: "Pharmacology" },
                  { id: "morphology" as const, label: "Morphology" },
                ]).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveHudTab(t.id)}
                    className={`py-2 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      activeHudTab === t.id
                        ? "bg-[#D4AF37] text-black shadow-sm"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* TAB 1: AYURVEDIC RASA-PANCHAKA & CLASSICAL SUTRA */}
              {activeHudTab === "rasapanchaka" && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-[#D4AF37]/40">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Classical Pramanika Shloka
                    </p>
                    <p className="font-serif text-sm font-bold text-amber-200 leading-relaxed">
                      {currentOrgan.rasapanchaka.shloka}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 block">
                        Rasa (Taste)
                      </span>
                      <p className="font-bold text-white mt-0.5">{currentOrgan.rasapanchaka.rasa}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 block">
                        Guna (Quality)
                      </span>
                      <p className="font-bold text-white mt-0.5">{currentOrgan.rasapanchaka.guna}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-[#D4AF37] block">
                        Virya (Potency)
                      </span>
                      <p className="font-bold text-white mt-0.5">{currentOrgan.rasapanchaka.virya}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-cyan-400 block">
                        Vipaka (Post-Digestive)
                      </span>
                      <p className="font-bold text-white mt-0.5">{currentOrgan.rasapanchaka.vipaka}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs">
                    <span className="text-[10px] font-mono uppercase text-emerald-300 block mb-0.5">
                      Dosha Karma &amp; Prabhava
                    </span>
                    <p className="font-bold text-white">{currentOrgan.rasapanchaka.doshaKarma}</p>
                  </div>
                </div>
              )}

              {/* TAB 2: MOLECULAR & ANUPANA PHARMACOKINETICS */}
              {activeHudTab === "kinetics" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-amber-400 block mb-1">
                      Isolated Bioactive Phytochemicals
                    </span>
                    <p className="font-bold text-white leading-relaxed">
                      {currentOrgan.kinetics.primaryMolecules}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-1">
                      Target Srotas &amp; Tissue Affinity
                    </span>
                    <p className="font-bold text-white">{currentOrgan.kinetics.srotasTarget}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-[10px] font-mono uppercase text-emerald-300 block mb-1">
                      Optimal Anupana (Bio-Carrier)
                    </span>
                    <p className="font-bold text-white">{currentOrgan.kinetics.anupanaVehicle}</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-black/50 border border-white/10 leading-relaxed text-white/80">
                    <strong className="text-[#D4AF37] block text-[10px] font-mono uppercase mb-1">
                      Cellular &amp; Neuro-Endocrine Mechanism:
                    </strong>
                    {currentOrgan.kinetics.mechanism}
                  </div>
                </div>
              )}

              {/* TAB 3: BOTANICAL MORPHOLOGY & SPOTTING */}
              {activeHudTab === "morphology" && (
                <div className="space-y-3 text-xs">
                  <p className="text-white/80 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/10">
                    {currentOrgan.morphology.summary}
                  </p>

                  <div className="space-y-2">
                    {currentOrgan.morphology.markers.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 rounded-lg bg-black/50 border border-white/10 flex justify-between gap-3"
                      >
                        <span className="text-white/55 font-mono text-[10px] uppercase shrink-0">
                          {m.label}
                        </span>
                        <span className="text-white font-bold text-right">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-amber-500/15 border border-amber-500/35 text-amber-200 leading-relaxed">
                    <strong className="block text-[10px] font-mono uppercase text-[#D4AF37] mb-0.5">
                      ★ BAMS Spotting &amp; Identification Pearl:
                    </strong>
                    {currentOrgan.morphology.spottingPearl}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Inspector Footer: Switch to 40x Histology Slide */}
            <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() =>
                  focusOnOrgan(activeOrgan === "histology" ? "taproot" : "histology")
                }
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg"
              >
                <Microscope className="w-4 h-4" />
                <span>
                  {activeOrgan === "histology"
                    ? "Return to 3D Whole Plant"
                    : "Inspect 40x Root T.S. Slide"}
                </span>
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* =================================================================
          5. BOTTOM FLOATING INTERACTION COMPASS BAR
          ================================================================= */}
      <footer className="relative z-20 px-4 sm:px-6 pb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/60 pointer-events-auto">
        <div className="flex items-center gap-4 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
            <Crosshair className="w-3.5 h-3.5" /> DRAG TO ORBIT 3D STAGE
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline">
            Cyan Stream = Ascending Xylem • Gold Stream = Descending Withanolide Phloem
          </span>
        </div>
      </footer>

    </div>
  );
}
