"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Eye, Microscope, Sparkles, Layers, 
  Leaf, Activity, ShieldCheck, RotateCcw, ZoomIn, 
  FlaskConical, Compass, CheckCircle2, Info 
} from "lucide-react";

type AnatomyZone = "full" | "leaves" | "root" | "histology";
type VisionMode = "botanical" | "xray";

export default function AshwagandhaTerrariumPage() {
  const [activeZone, setActiveZone] = useState<AnatomyZone>("full");
  const [visionMode, setVisionMode] = useState<VisionMode>("botanical");

  // 2.5D Parallax Tilt State
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const domeRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!domeRef.current) return;
    const rect = domeRef.current.getBoundingClientRect();
    const normX = ((clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({
      x: Math.max(-12, Math.min(12, normX * 10)),
      y: Math.max(-10, Math.min(10, -normY * 8)),
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  // Camera Transform Matrix for Organ Isolation (Like 3D Anatomy Apps)
  const getCameraTransform = () => {
    const baseRotate = `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`;
    switch (activeZone) {
      case "leaves":
        return `${baseRotate} scale(1.62) translateY(18%)`;
      case "root":
        return `${baseRotate} scale(1.75) translateY(-24%)`;
      case "histology":
        return `${baseRotate} scale(1.05) translateY(0%)`;
      default:
        return `${baseRotate} scale(1) translateY(0%)`;
    }
  };

  // =========================================================================
  // ANATOMICAL & CLINICAL DATA REPOSITORY FOR ASHWAGANDHA
  // =========================================================================
  const zoneData: Record<
    AnatomyZone,
    {
      sanskritName: string;
      englishName: string;
      subtitle: string;
      botanicalSpecs: { label: string; value: string }[];
      botanicalNotes: string[];
      xrayRasaPanchaka: {
        rasa: string;
        guna: string;
        virya: string;
        vipaka: string;
        doshaKarma: string;
      };
      xrayPharmacology: {
        activeMarkers: string;
        targetDhatus: string;
        anupanaCarrier: string;
        clinicalMechanism: string;
      };
    }
  > = {
    full: {
      sanskritName: "अश्वगन्धा (Panchanga Specimen)",
      englishName: "Withania somnifera (L.) Dunal",
      subtitle: "Complete 3D Botanical Specimen • Family: Solanaceae",
      botanicalSpecs: [
        { label: "Classical Kula", value: "Kantakari Kula (Solanaceae)" },
        { label: "Habit & Height", value: "Erect, branching perennial undershrub (30–150 cm)" },
        { label: "Prayojya Anga", value: "Mula (Dried Mature Tuberous Root) & Patra (Leaves)" },
        { label: "Characteristic Odor", value: "Ashwa-Gandha (Fresh root smells like a horse)" },
      ],
      botanicalNotes: [
        "Stems and branches are densely covered with minute star-shaped (stellate) tomentose hairs.",
        "Flowers are greenish-yellow, borne in axillary umbellate cymes (short clusters of 4–6).",
        "Fruit is a globose orange-red berry enclosed within an inflated, papery, persistent calyx.",
      ],
      xrayRasaPanchaka: {
        rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
        guna: "Laghu (Light), Snigdha (Unctuous)",
        virya: "Ushna Virya (Thermogenic / Warming)",
        vipaka: "Madhura Vipaka (Anabolic Post-Digestive Effect)",
        doshaKarma: "Vata-Kaphahara • Balya • Brimhaniya • Rasayana",
      },
      xrayPharmacology: {
        activeMarkers: "Withanolides (Withaferin A, Withanolide A–D) & Alkaloids (Somniferine, Withanine)",
        targetDhatus: "Mamsa Dhatu (Muscle), Majja Dhatu (Nervous System) & Shukra Dhatu (Reproductive)",
        anupanaCarrier: "Warm Cow's Milk (Kshira) or Ashwagandha Ghrita for lipophilic absorption",
        clinicalMechanism:
          "Acts as a premier GABA-mimetic and HPA-axis modulator. Down-regulates serum cortisol, accelerates axonal & synaptic regeneration, and enhances mitochondrial ATP synthesis.",
      },
    },
    leaves: {
      sanskritName: "पत्र एवं फल (Patra & Phala Canopy)",
      englishName: "Aerial Foliage, Flowers & Accrescent Calyx",
      subtitle: "Isolated Upper Canopy Layer • Cytotoxic & Anti-Inflammatory Zone",
      botanicalSpecs: [
        { label: "Leaf Morphology", value: "Simple, ovate, entire margin, 5–10 cm long, sub-opposite" },
        { label: "Surface Indumentum", value: "Dull green, velvety stellate-pubescent on both surfaces" },
        { label: "Fruiting Calyx", value: "Membranous, 5-angled bladder enclosing the red berry" },
        { label: "Seeds", value: "Small, yellow, reniform (kidney-shaped), laterally compressed" },
      ],
      botanicalNotes: [
        "In Dravyaguna field identification, the lantern-like inflated papery calyx around the bright orange-red berry is the fastest diagnostic marker.",
        "Unlike the anabolic root, the leaves are used externally as a warm poultice (Upanaha) for carbuncles, swollen lymph nodes (Gandamala), and painful joints.",
      ],
      xrayRasaPanchaka: {
        rasa: "Tikta Pradhana (Predominantly Bitter) & Katu",
        guna: "Laghu (Light), Ruksha (Drying)",
        virya: "Ushna Virya (Local Anti-edematous & Thermogenic)",
        vipaka: "Katu Vipaka (Catabolic / Scraping action in leaf extracts)",
        doshaKarma: "Kapha-Vatahara • Shothahara (Anti-inflammatory) • Vranaropana",
      },
      xrayPharmacology: {
        activeMarkers: "High concentration of Withaferin A (Steroidal Lactone) & Chlorogenic Acid",
        targetDhatus: "Rakta (Blood), Mamsa (Soft Tissue) & Meda (Adipose Metabolism)",
        anupanaCarrier: "Warm Water Paste (Lepa) or Decoction (Kwatha) for localized swelling",
        clinicalMechanism:
          "Leaf-derived Withaferin A potently inhibits NF-κB nuclear translocation and COX-2 inflammatory cascades, explaining its classical use in Shotha (edema) and Granthi (benign swellings).",
      },
    },
    root: {
      sanskritName: "अश्वगन्धा मूल (Mula — Official Drug Part)",
      englishName: "Subterranean Tuberous Taproot System",
      subtitle: "Isolated Root Layer • Primary Rasayana & Neuro-Regenerative Organ",
      botanicalSpecs: [
        { label: "Macroscopic Shape", value: "Straight, unbranched, conical tuberous pieces (5–15 cm)" },
        { label: "Outer Surface", value: "Buff to greyish-yellow with longitudinal wrinkles" },
        { label: "Fracture & Interior", value: "Short, starchy, uneven fracture; creamy-white interior" },
        { label: "Taste & Odor", value: "Mucilaginous, bitter-acrid taste; characteristic equine odor" },
      ],
      botanicalNotes: [
        "2nd Prof Spotting Pearl: Nagori Ashwagandha (grown in Rajasthan's arid sandy soil) yields the highest grade starchy, brittle roots prized for Rasayana Churna.",
        "Harvested in late winter when the berries ripen and the plant translocates maximum glycowithanolides into the subterranean taproot.",
      ],
      xrayRasaPanchaka: {
        rasa: "Madhura-Tikta-Kashaya (Sweet-Bitter-Astringent Triad)",
        guna: "Snigdha (Unctuous), Laghu (Easy to assimilate when processed)",
        virya: "Ushna Virya (Kindles Dhatvagni without aggravating Vata)",
        vipaka: "Madhura Vipaka (Builds Ojas, Mamsa & Shukra Dhatu)",
        doshaKarma: "Vata-Kaphashamaka • Nidrajanana (Restores physiological sleep)",
      },
      xrayPharmacology: {
        activeMarkers: "Withanolide A, Withanoside IV & VI, Sitoindosides VII–X",
        targetDhatus: "Majja Dhatu (CNS/Myelin), Mamsa (Myocytes) & Shukra (Gametogenesis)",
        anupanaCarrier: "Kshira Paka (Milk Decoction) + Purana Ghrita + Pippali Churna",
        clinicalMechanism:
          "Root-specific Withanolide A and Withanoside IV cross the blood-brain barrier when micellized in milk lipids, promoting dendritic arborization, GABA-A receptor modulation (curing Anidra/insomnia), and luteinizing hormone/testosterone optimization.",
      },
    },
    histology: {
      sanskritName: "मूल अनुप्रस्थ काट (Microscopic Root T.S.)",
      englishName: "Transverse Section (T.S.) of Mature Ashwagandha Root",
      subtitle: "2nd Prof Practical Histology View • 40x Microscopic Anatomy",
      botanicalSpecs: [
        { label: "1. Cork (Phellem)", value: "3–6 layers of thin-walled, tangentially elongated suberized cells" },
        { label: "2. Cortex (Phelloderm)", value: "10–15 layers of parenchyma packed with compound starch grains" },
        { label: "3. Cambium Ring", value: "Distinct 2–4 layered meristematic ring separating phloem & xylem" },
        { label: "4. Xylem & Medullary Rays", value: "Wide central woody core traversed by starch-rich uniseriate rays" },
      ],
      botanicalNotes: [
        "Diagnostic Microscopic Key: Complete absence of sclerenchyma/stone cells in the cortex, and abundant compound starch grains + microsphenoidal calcium oxalate crystals.",
        "Powder Microscopy (Churna Pariksha): Shows pitted & scalariform xylem vessels, cork cells in surface view, and characteristic starchy parenchyma.",
      ],
      xrayRasaPanchaka: {
        rasa: "Starchy Parenchyma = Madhura Vipaka Matrix",
        guna: "Lipid-Soluble Lactone Pockets in Cortical Parenchyma",
        virya: "Ushna Virya Bio-Potency Preserved in Shade-Dried Roots",
        vipaka: "Madhura (Anabolic Tissue Nourishment)",
        doshaKarma: " Rasayana Quality Verification (Shuddha Dravya Pariksha)",
      },
      xrayPharmacology: {
        activeMarkers: "Histochemical localization of Withanolides in Phelloderm & Phloem Parenchyma",
        targetDhatus: "Quality Control: Distinguishes genuine Nagori root from wild fibrous adulterants",
        anupanaCarrier: "Fine 80-Mesh Churna or Kshirapaka Extraction",
        clinicalMechanism:
          "Because the secondary phloem and cortical parenchyma house the highest density of glycowithanolides and starch, overly woody or hollow roots have lower clinical potency.",
      },
    },
  };

  const currentData = zoneData[activeZone];

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 transition-colors duration-300">
      
      {/* Scoped CSS for 3D Terrarium Glassmorphism & X-Ray Laser Scan */}
      <style dangerouslySetInnerHTML={{__html: `
        .terrarium-stage {
          perspective: 1600px;
        }
        .bell-jar-glass {
          background: radial-gradient(
            120% 90% at 30% 20%,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(16, 185, 129, 0.05) 45%,
            rgba(5, 15, 11, 0.65) 100%
          );
          box-shadow:
            inset 0 0 40px rgba(255, 255, 255, 0.08),
            inset 14px 0 28px rgba(255, 255, 255, 0.12),
            inset -12px 0 24px rgba(0, 0, 0, 0.6),
            0 30px 70px rgba(0, 0, 0, 0.75);
        }
        .xray-laser-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #10b981 20%, #34d399 50%, #10b981 80%, transparent 100%);
          box-shadow: 0 0 20px 4px rgba(16, 185, 129, 0.65);
          animation: scanVertical 4.5s ease-in-out infinite;
          pointer-events: none;
          z-index: 30;
        }
        @keyframes scanVertical {
          0%, 100% { top: 8%; opacity: 0.35; }
          50% { top: 88%; opacity: 0.95; }
        }
        .pulse-node {
          animation: nodePulse 2.2s ease-in-out infinite;
        }
        @keyframes nodePulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.35); opacity: 1; }
        }
      `}} />

      {/* Top Navigation & Breadcrumb */}
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Link
              href="/bams-hub"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-surface border border-surfaceBorder text-xs font-bold text-foreground/80 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to BAMS Hub
            </Link>
            <Link
              href="/atreya"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-surface border border-surfaceBorder text-xs font-bold text-foreground/80 hover:text-primary transition-colors"
            >
              Ayurveda Global
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>ATREYA 3D Dravyaguna Terrarium • Specimen #01</span>
          </div>
        </div>

        {/* Header Banner */}
        <div className="bg-surface border border-surfaceBorder rounded-sm p-6 sm:p-8 mb-8 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-[#D4AF37] mb-1">
              Interactive 2.5D Botanical &amp; Pharmacological Anatomy Lab
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Ashwagandha <span className="text-primary italic font-serif font-normal">(Withania somnifera)</span>
            </h1>
            <p className="text-sm text-foreground/70 font-medium mt-1 max-w-2xl">
              Isolate plant organs (Root, Leaves, Fruit, or Microscopic T.S.) just like a 3D human anatomy app, and toggle <strong>Clinical X-Ray Mode</strong> to inspect classical <em>Rasa-Panchaka</em> and neuro-pharmacology.
            </p>
          </div>

          {/* THE MASTER CLINICAL X-RAY TOGGLE */}
          <div className="flex items-center gap-2 bg-background p-1.5 rounded-sm border border-surfaceBorder shrink-0">
            <button
              type="button"
              onClick={() => setVisionMode("botanical")}
              className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                visionMode === "botanical"
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Botanical View</span>
            </button>

            <button
              type="button"
              onClick={() => setVisionMode("xray")}
              className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                visionMode === "xray"
                  ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Clinical X-Ray</span>
            </button>
          </div>
        </div>

        {/* =================================================================
            MAIN 12-COLUMN WORKSPACE: LEFT = 3D GLASS TERRARIUM | RIGHT = HUD
            ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN (7 COLS): THE 3D GLASS BELL-JAR TERRARIUM */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Organ Isolation Layer Buttons (Panchanga Controls) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                { id: "full" as const, label: "1. Full Specimen", sub: "Panchanga Overview" },
                { id: "leaves" as const, label: "2. Leaves & Fruit", sub: "Patra & Phala Zoom" },
                { id: "root" as const, label: "3. Official Root", sub: "Mula (Drug Part)" },
                { id: "histology" as const, label: "4. Root T.S. (40x)", sub: "Microscope Slide" },
              ].map((btn) => {
                const isSelected = activeZone === btn.id;
                return (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setActiveZone(btn.id)}
                    className={`p-3 rounded-sm border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-surface hover:bg-foreground/5 text-foreground border-surfaceBorder"
                    }`}
                  >
                    <p className="font-heading text-xs font-bold leading-tight">{btn.label}</p>
                    <p className={`text-[10px] mt-0.5 ${isSelected ? "text-white/80" : "text-foreground/55"}`}>
                      {btn.sub}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Interactive Glass Terrarium Stage */}
            <div
              ref={domeRef}
              onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
              onMouseLeave={resetTilt}
              onTouchMove={(e) => {
                if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
              }}
              onTouchEnd={resetTilt}
              className="terrarium-stage w-full flex flex-col items-center select-none py-2"
            >
              {/* Brass Finial Knob on Top of Bell Jar */}
              <div className="w-10 h-5 rounded-t-full bg-gradient-to-r from-[#8a660f] via-[#F5DE93] to-[#705008] border border-[#D4AF37] shadow-md -mb-1 z-20" />

              {/* THE ARCHED GLASS BELL JAR */}
              <div
                className={`bell-jar-glass relative w-full max-w-[500px] h-[500px] sm:h-[540px] rounded-t-[240px] rounded-b-xl border-2 overflow-hidden transition-colors duration-500 ${
                  visionMode === "xray"
                    ? "border-emerald-400/70 bg-[#030d09]"
                    : "border-[#D4AF37]/45 bg-[#081510]"
                }`}
              >
                {/* X-Ray Scanning Laser Line */}
                {visionMode === "xray" && <div className="xray-laser-line" />}

                {/* Curved Glass Specular Highlight Reflection (Left Edge) */}
                <div className="absolute top-10 bottom-10 left-5 w-6 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-[1px] pointer-events-none z-20" />

                {/* Floating Top Status Pill Inside Dome */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-white whitespace-nowrap">
                  <span className={`w-2 h-2 rounded-full ${visionMode === "xray" ? "bg-emerald-400 animate-ping" : "bg-[#D4AF37]"}`} />
                  <span>
                    {visionMode === "xray" ? "X-RAY PHARMACOLOGY SCAN" : "BOTANICAL SPECIMEN"} • {activeZone.toUpperCase()}
                  </span>
                </div>

                {/* =========================================================
                    2.5D PARALLAX CAMERA LAYER (ZOOMS INTO LEAVES, ROOT OR T.S.)
                    ========================================================= */}
                <div
                  style={{
                    transform: getCameraTransform(),
                    transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  {activeZone !== "histology" ? (
                    /* =======================================================
                       MULTI-LAYERED INTERACTIVE ASHWAGANDHA PLANT VECTOR
                       Click directly on the Leaves or Root inside the glass!
                       ======================================================= */
                    <svg
                      viewBox="0 0 400 500"
                      className="w-full h-full max-h-[490px] drop-shadow-[0_12px_25px_rgba(0,0,0,0.7)]"
                    >
                      {/* Background Grid in X-Ray Mode */}
                      {visionMode === "xray" && (
                        <g opacity="0.18" stroke="#10b981" strokeWidth="0.6">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <line key={`h-${i}`} x1="0" y1={i * 42} x2="400" y2={i * 42} />
                          ))}
                          {Array.from({ length: 10 }).map((_, i) => (
                            <line key={`v-${i}`} x1={i * 42} y1="0" x2={i * 42} y2="500" />
                          ))}
                        </g>
                      )}

                      {/* =====================================================
                          LAYER 1: SUBTERRANEAN SOIL HORIZON (Y = 285 to 480)
                          ===================================================== */}
                      <g
                        onClick={() => setActiveZone("root")}
                        className="cursor-pointer transition-opacity duration-500"
                        opacity={activeZone === "leaves" ? 0.25 : 1}
                      >
                        {/* Soil Cross-Section Mound */}
                        <path
                          d="M 45 290 Q 200 278 355 290 L 370 465 Q 200 485 30 465 Z"
                          fill={visionMode === "xray" ? "rgba(6, 78, 59, 0.22)" : "#23170d"}
                          stroke={visionMode === "xray" ? "#10b981" : "#5c3d24"}
                          strokeWidth="1.5"
                        />
                        {/* Top Moss & Soil Horizon Line */}
                        <ellipse
                          cx="200"
                          cy="290"
                          rx="155"
                          ry="12"
                          fill={visionMode === "xray" ? "rgba(16, 185, 129, 0.2)" : "#2f3e24"}
                          stroke={visionMode === "xray" ? "#34d399" : "#D4AF37"}
                          strokeWidth="1.2"
                        />

                        {/* STOUT TUBEROUS TAPROOT (MULA — OFFICIAL DRUG PART) */}
                        <path
                          d="M 192 288 C 188 330, 184 385, 195 452 C 198 462, 203 462, 206 452 C 215 385, 212 330, 208 288 Z"
                          fill={visionMode === "xray" ? "rgba(212, 175, 55, 0.28)" : "#d6be96"}
                          stroke={visionMode === "xray" ? "#facc15" : "#8c6d46"}
                          strokeWidth="2.5"
                        />
                        {/* Secondary Lateral Tuberous Branches */}
                        <path
                          d="M 191 325 Q 145 345 118 395 M 190 365 Q 150 390 135 435 M 209 330 Q 255 352 282 400 M 208 375 Q 248 400 265 440"
                          fill="none"
                          stroke={visionMode === "xray" ? "#34d399" : "#c7ab7e"}
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        {/* Fine Tertiary Rootlets */}
                        <path
                          d="M 145 358 L 125 348 M 160 395 L 140 412 M 252 365 L 278 355 M 242 405 L 228 430"
                          fill="none"
                          stroke={visionMode === "xray" ? "#10b981" : "#a3875c"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        {/* Interactive Root Hotspot Label */}
                        <g transform="translate(218, 365)">
                          <circle
                            cx="0"
                            cy="0"
                            r="7"
                            fill={visionMode === "xray" ? "#facc15" : "#D4AF37"}
                            className="pulse-node"
                          />
                          <rect
                            x="12"
                            y="-12"
                            width="136"
                            height="24"
                            rx="4"
                            fill="rgba(0,0,0,0.82)"
                            stroke="#D4AF37"
                            strokeWidth="1"
                          />
                          <text x="20" y="4" fill="#F5DE93" fontSize="10" fontWeight="bold" fontFamily="monospace">
                            {visionMode === "xray" ? "WITHANOLIDE A CORE" : "MULA (TAPROOT) →"}
                          </text>
                        </g>
                      </g>

                      {/* =====================================================
                          LAYER 2: AERIAL STEM, LEAVES & WINTER-CHERRY BERRIES
                          ===================================================== */}
                      <g
                        onClick={() => setActiveZone("leaves")}
                        className="cursor-pointer transition-opacity duration-500"
                        opacity={activeZone === "root" ? 0.25 : 1}
                      >
                        {/* Main Woody Erect Stem & Branches */}
                        <path
                          d="M 200 290 C 200 230, 196 165, 200 85 M 199 225 Q 150 195 115 155 M 200 185 Q 250 155 285 120 M 199 135 Q 155 110 130 80"
                          fill="none"
                          stroke={visionMode === "xray" ? "#34d399" : "#4d7c43"}
                          strokeWidth="6"
                          strokeLinecap="round"
                        />

                        {/* Ovate Sub-Opposite Leaves (Patra) with Venation */}
                        {[
                          { cx: 115, cy: 155, rot: -32, scale: 1 },
                          { cx: 285, cy: 120, rot: 28, scale: 1 },
                          { cx: 132, cy: 82, rot: -25, scale: 0.88 },
                          { cx: 265, cy: 195, rot: 35, scale: 0.92 },
                          { cx: 138, cy: 222, rot: -38, scale: 0.9 },
                          { cx: 200, cy: 70, rot: 0, scale: 0.85 },
                        ].map((lf, idx) => (
                          <g
                            key={idx}
                            transform={`translate(${lf.cx}, ${lf.cy}) rotate(${lf.rot}) scale(${lf.scale})`}
                          >
                            <path
                              d="M 0 0 C -28 -18, -32 -55, 0 -78 C 32 -55, 28 -18, 0 0 Z"
                              fill={
                                visionMode === "xray"
                                  ? "rgba(16, 185, 129, 0.18)"
                                  : "url(#leafGrad)"
                              }
                              stroke={visionMode === "xray" ? "#34d399" : "#86efac"}
                              strokeWidth="1.8"
                            />
                            {/* Leaf Midrib & Lateral Veins */}
                            <path
                              d="M 0 -4 L 0 -72 M 0 -25 L -14 -38 M 0 -42 L 15 -55 M 0 -52 L -12 -64"
                              fill="none"
                              stroke={visionMode === "xray" ? "#a7f3d0" : "#bbf7d0"}
                              strokeWidth="1.2"
                              opacity="0.75"
                            />
                          </g>
                        ))}

                        {/* Axillary Inflated Calyx & Orange-Red Winter Cherry Berries (Phala) */}
                        {[
                          { x: 185, y: 180 },
                          { x: 215, y: 150 },
                          { x: 188, y: 122 },
                          { x: 222, y: 208 },
                        ].map((b, i) => (
                          <g key={i} transform={`translate(${b.x}, ${b.y})`}>
                            {/* Outer Papery Lantern Calyx */}
                            <path
                              d="M 0 12 C -14 8, -16 -8, 0 -16 C 16 -8, 14 8, 0 12 Z"
                              fill={
                                visionMode === "xray"
                                  ? "rgba(250, 204, 21, 0.15)"
                                  : "rgba(217, 199, 158, 0.45)"
                              }
                              stroke={visionMode === "xray" ? "#facc15" : "#eab308"}
                              strokeWidth="1.3"
                            />
                            {/* Inner Globose Orange-Red Berry */}
                            <circle
                              cx="0"
                              cy="0"
                              r="6.5"
                              fill={visionMode === "xray" ? "#10b981" : "#ea580c"}
                              stroke="#fff"
                              strokeWidth="0.8"
                            />
                          </g>
                        ))}

                        {/* Interactive Canopy Hotspot Label */}
                        <g transform="translate(230, 108)">
                          <circle
                            cx="0"
                            cy="0"
                            r="7"
                            fill={visionMode === "xray" ? "#34d399" : "#10b981"}
                            className="pulse-node"
                          />
                          <rect
                            x="12"
                            y="-12"
                            width="138"
                            height="24"
                            rx="4"
                            fill="rgba(0,0,0,0.82)"
                            stroke="#10b981"
                            strokeWidth="1"
                          />
                          <text x="20" y="4" fill="#a7f3d0" fontSize="10" fontWeight="bold" fontFamily="monospace">
                            {visionMode === "xray" ? "WITHAFERIN-A LEAF" : "PATRA & PHALA →"}
                          </text>
                        </g>
                      </g>

                      {/* SVG Gradients */}
                      <defs>
                        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2e6f40" />
                          <stop offset="100%" stopColor="#143d22" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    /* =======================================================
                       LAYER 3: MICROSCOPIC ROOT T.S. (HISTOLOGY CROSS-SECTION)
                       ======================================================= */
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full max-h-[420px] p-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                    >
                      {/* Outer Cork (Phellem) */}
                      <circle
                        cx="200"
                        cy="200"
                        r="165"
                        fill={visionMode === "xray" ? "#042f2e" : "#452c1e"}
                        stroke="#D4AF37"
                        strokeWidth="6"
                        strokeDasharray="10 4"
                      />
                      {/* Phelloderm / Starchy Cortex */}
                      <circle
                        cx="200"
                        cy="200"
                        r="142"
                        fill={visionMode === "xray" ? "#064e3b" : "#f3e8d2"}
                        stroke="#b45309"
                        strokeWidth="2.5"
                      />
                      {/* Secondary Phloem Ring */}
                      <circle
                        cx="200"
                        cy="200"
                        r="105"
                        fill={visionMode === "xray" ? "#047857" : "#e5d3b3"}
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="5 3"
                      />
                      {/* Distinct Cambium Ring */}
                      <circle
                        cx="200"
                        cy="200"
                        r="86"
                        fill="none"
                        stroke={visionMode === "xray" ? "#facc15" : "#dc2626"}
                        strokeWidth="3.5"
                      />
                      {/* Central Secondary Xylem & Medullary Rays */}
                      <circle
                        cx="200"
                        cy="200"
                        r="83"
                        fill={visionMode === "xray" ? "#022c22" : "#d4b483"}
                      />
                      {/* Radial Medullary Rays */}
                      {Array.from({ length: 16 }).map((_, idx) => {
                        const angle = (idx * 360) / 16;
                        return (
                          <line
                            key={idx}
                            x1="200"
                            y1="200"
                            x2={200 + 82 * Math.cos((angle * Math.PI) / 180)}
                            y2={200 + 82 * Math.sin((angle * Math.PI) / 180)}
                            stroke={visionMode === "xray" ? "#34d399" : "#78350f"}
                            strokeWidth="1.5"
                          />
                        );
                      })}
                      {/* Xylem Vessels */}
                      {[
                        { x: 175, y: 175 },
                        { x: 225, y: 175 },
                        { x: 175, y: 225 },
                        { x: 225, y: 225 },
                        { x: 200, y: 160 },
                        { x: 200, y: 240 },
                      ].map((v, i) => (
                        <circle
                          key={i}
                          cx={v.x}
                          cy={v.y}
                          r="7"
                          fill={visionMode === "xray" ? "#facc15" : "#fff"}
                          stroke="#78350f"
                          strokeWidth="2"
                        />
                      ))}

                      {/* Callout Labels */}
                      <g fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#fff">
                        <rect x="24" y="28" width="135" height="22" rx="3" fill="rgba(0,0,0,0.8)" />
                        <text x="32" y="43" fill="#F5DE93">1. Cork (Phellem)</text>

                        <rect x="235" y="52" width="145" height="22" rx="3" fill="rgba(0,0,0,0.8)" />
                        <text x="243" y="67" fill="#a7f3d0">2. Starchy Cortex</text>

                        <rect x="240" y="325" width="140" height="22" rx="3" fill="rgba(0,0,0,0.8)" />
                        <text x="248" y="340" fill="#fca5a5">3. Cambium Ring</text>

                        <rect x="24" y="335" width="155" height="22" rx="3" fill="rgba(0,0,0,0.8)" />
                        <text x="32" y="350" fill="#F5DE93">4. Xylem &amp; Rays</text>
                      </g>
                    </svg>
                  )}
                </div>

                {/* Bottom Quick Reset / Zoom Hint Bar Inside Glass */}
                <div className="absolute bottom-3 left-4 right-4 z-30 flex items-center justify-between text-[11px] text-white/75 bg-black/55 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/10">
                  <span>Tap plant parts or buttons above to isolate layers</span>
                  {activeZone !== "full" && (
                    <button
                      type="button"
                      onClick={() => setActiveZone("full")}
                      className="inline-flex items-center gap-1 text-[#D4AF37] font-bold hover:underline cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset Zoom
                    </button>
                  )}
                </div>
              </div>

              {/* Heavy Mahogany & Brass Specimen Pedestal Base */}
              <div className="w-full max-w-[530px] h-10 rounded-b-2xl bg-gradient-to-r from-[#1f0e05] via-[#42200e] to-[#1a0b04] border-t-4 border-[#D4AF37] shadow-[0_20px_40px_rgba(0,0,0,0.85)] flex items-center justify-center">
                <div className="px-5 py-0.5 rounded-sm bg-gradient-to-r from-[#a17419] via-[#F5DE93] to-[#8a6210] text-black font-mono text-[10px] font-black tracking-[0.2em] uppercase shadow-inner">
                  WITHANIA SOMNIFERA • ATREYA VAULT
                </div>
              </div>
            </div>

          </div>

          {/* =================================================================
              RIGHT COLUMN (5 COLS): DYNAMIC CLINICAL & BOTANICAL HUD
              Switches automatically between Botanical View & Clinical X-Ray!
              ================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Layer Header Card */}
            <div className="bg-surface border border-surfaceBorder rounded-sm p-6 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-primary/15 text-primary border border-primary/30">
                  Active Isolation: {activeZone.toUpperCase()}
                </span>
                <span className="text-xs font-bold text-amber-800 dark:text-[#D4AF37]">
                  {visionMode === "xray" ? "⚡ X-Ray Mode" : "🌿 Botanical Mode"}
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {currentData.sanskritName}
              </h2>
              <p className="font-serif italic text-sm text-primary font-semibold mb-1">
                {currentData.englishName}
              </p>
              <p className="text-xs text-foreground/65 font-medium">
                {currentData.subtitle}
              </p>
            </div>

            {visionMode === "botanical" ? (
              /* =============================================================
                 MODE A: BOTANICAL & MACROSCOPIC SPOTTING HUD
                 ============================================================= */
              <>
                <div className="bg-surface border border-surfaceBorder rounded-sm p-6 shadow-md">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-primary" />
                    <span>Macroscopic &amp; Organoleptic Profile</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {currentData.botanicalSpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3.5 rounded-sm bg-background border border-surfaceBorder"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                          {spec.label}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-surfaceBorder">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-[#D4AF37] mb-3">
                      Dravyaguna Practical &amp; Spotting Pearls:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80">
                      {currentData.botanicalNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              /* =============================================================
                 MODE B: CLINICAL X-RAY (RASA-PANCHAKA & PHARMACOLOGY HUD)
                 ============================================================= */
              <>
                {/* Classical Rasa-Panchaka Matrix */}
                <div className="bg-surface border-2 border-[#D4AF37]/50 rounded-sm p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-amber-700 dark:text-[#D4AF37]" />
                      <span>Ayurvedic Rasa-Panchaka Matrix</span>
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/15 text-amber-900 dark:text-amber-300 font-bold">
                      Bhavaprakasha Nighantu
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <span className="text-[10px] font-bold uppercase text-primary block">
                        Rasa (Taste)
                      </span>
                      <p className="text-xs font-bold text-foreground mt-0.5">
                        {currentData.xrayRasaPanchaka.rasa}
                      </p>
                    </div>
                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <span className="text-[10px] font-bold uppercase text-primary block">
                        Guna (Biophysical Quality)
                      </span>
                      <p className="text-xs font-bold text-foreground mt-0.5">
                        {currentData.xrayRasaPanchaka.guna}
                      </p>
                    </div>
                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <span className="text-[10px] font-bold uppercase text-amber-800 dark:text-[#D4AF37] block">
                        Virya (Potency)
                      </span>
                      <p className="text-xs font-bold text-foreground mt-0.5">
                        {currentData.xrayRasaPanchaka.virya}
                      </p>
                    </div>
                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <span className="text-[10px] font-bold uppercase text-success block">
                        Vipaka (Post-Digestive)
                      </span>
                      <p className="text-xs font-bold text-foreground mt-0.5">
                        {currentData.xrayRasaPanchaka.vipaka}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-sm bg-primary/10 border border-primary/25 text-xs font-bold text-foreground">
                    Dosha &amp; Karma: <span className="text-primary">{currentData.xrayRasaPanchaka.doshaKarma}</span>
                  </div>
                </div>

                {/* Biomedical & Anupana Pharmacokinetics Card */}
                <div className="bg-surface border border-surfaceBorder rounded-sm p-6 shadow-md space-y-4">
                  <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                    <Activity className="w-5 h-5 text-success" />
                    <span>Molecular &amp; Anupana Pharmacokinetics</span>
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <strong className="text-primary block text-[11px] uppercase mb-0.5">
                        Key Bioactive Phytochemicals:
                      </strong>
                      {currentData.xrayPharmacology.activeMarkers}
                    </div>

                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <strong className="text-amber-800 dark:text-[#D4AF37] block text-[11px] uppercase mb-0.5">
                        Target Dhatu &amp; Srotas Affinity:
                      </strong>
                      {currentData.xrayPharmacology.targetDhatus}
                    </div>

                    <div className="p-3 rounded-sm bg-background border border-surfaceBorder">
                      <strong className="text-success block text-[11px] uppercase mb-0.5">
                        Classical Anupana (Bio-Enhancer Vehicle):
                      </strong>
                      {currentData.xrayPharmacology.anupanaCarrier}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed pt-2 border-t border-surfaceBorder">
                    <strong>Neuro-Endocrine Mechanism:</strong> {currentData.xrayPharmacology.clinicalMechanism}
                  </p>
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
