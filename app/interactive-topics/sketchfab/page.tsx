"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { 
  ArrowLeft, Eye, Microscope, Layers, Leaf, Activity, 
  RotateCcw, FlaskConical, Compass, Sparkles, Crosshair, 
  Maximize2, Minimize2, Dna, Box, Sun, Smartphone, Play, Pause 
} from "lucide-react";

type OrganNodeId = "pod" | "canopy" | "flowers" | "bark" | "root" | "dissection";
type HudTab = "rasapanchaka" | "kinetics" | "morphology";
type ShaderPreset = "emerald" | "gold" | "xray" | "clay";
type PodChamberLayer = "pericarp" | "septa" | "phalamajja" | "seeds";

export default function Aragwadha3DDissectionStudio() {
  const [activeOrgan, setActiveOrgan] = useState<OrganNodeId>("pod");
  const [activeHudTab, setActiveHudTab] = useState<HudTab>("rasapanchaka");
  const [hudExpanded, setHudExpanded] = useState<boolean>(true);

  // 3D WebGL Material & Viewport Controls
  const [shaderPreset, setShaderPreset] = useState<ShaderPreset>("emerald");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [exposure, setExposure] = useState<number>(1.15);
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);
  const [viewEngine, setViewEngine] = useState<"sketchfab" | "glb">("sketchfab");
  
  // Pod Internal Dissection State (Node 06)
  const [activePodLayer, setActivePodLayer] = useState<PodChamberLayer>("phalamajja");

  const modelViewerRef = useRef<any>(null);

  // ===========================================================================
  // LIVE WEBGL PBR SHADER CONTROLLER (TINTS YOUR WHITE .GLB MESH IN 3D)
  // ===========================================================================
  const applyWebGLShader = (preset: ShaderPreset) => {
    setShaderPreset(preset);
    const mv = modelViewerRef.current;
    if (!mv || !mv.model || !mv.model.materials) return;

    const presets: Record<
      ShaderPreset,
      { color: [number, number, number, number]; metallic: number; roughness: number }
    > = {
      emerald: { color: [0.16, 0.58, 0.38, 1.0], metallic: 0.18, roughness: 0.45 },
      gold: { color: [0.85, 0.68, 0.22, 1.0], metallic: 0.78, roughness: 0.25 },
      xray: { color: [0.06, 0.85, 0.62, 0.88], metallic: 0.4, roughness: 0.15 },
      clay: { color: [0.92, 0.89, 0.82, 1.0], metallic: 0.05, roughness: 0.75 },
    };

    const target = presets[preset];
    mv.model.materials.forEach((mat: any) => {
      if (mat.pbrMetallicRoughness) {
        mat.pbrMetallicRoughness.setBaseColorFactor(target.color);
        mat.pbrMetallicRoughness.setMetallicFactor(target.metallic);
        mat.pbrMetallicRoughness.setRoughnessFactor(target.roughness);
      }
    });
  };

  // Trigger shader once the .glb finishes loading
  useEffect(() => {
    const mv = modelViewerRef.current;
    if (!mv) return;

    const handleLoad = () => {
      setModelLoaded(true);
      applyWebGLShader(shaderPreset);
    };

    mv.addEventListener("load", handleLoad);
    return () => mv.removeEventListener("load", handleLoad);
  }, [shaderPreset]);

  // ===========================================================================
  // 3D CAMERA ORBIT & TARGET COORDINATES FOR ARAGWADHA-TREE.GLB
  // Smoothly flies the 3D camera to each part of your tree model!
  // ===========================================================================
  const cameraPresets: Record<
    Exclude<OrganNodeId, "dissection">,
    { orbit: string; target: string; fov: string }
  > = {
    pod: {
      orbit: "-28deg 82deg 70%",
      target: "-0.18m 0.42m 0m",
      fov: "24deg",
    },
    canopy: {
      orbit: "15deg 62deg 75%",
      target: "0m 0.78m 0m",
      fov: "28deg",
    },
    flowers: {
      orbit: "42deg 70deg 68%",
      target: "0.15m 0.68m 0.08m",
      fov: "24deg",
    },
    bark: {
      orbit: "0deg 80deg 62%",
      target: "0m 0.38m 0m",
      fov: "22deg",
    },
    root: {
      orbit: "20deg 84deg 72%",
      target: "0m 0.12m 0m",
      fov: "25deg",
    },
  };

  const focusOnOrgan = (organ: OrganNodeId) => {
    setActiveOrgan(organ);
    setHudExpanded(true);

    if (organ !== "dissection" && modelViewerRef.current) {
      const preset = cameraPresets[organ];
      modelViewerRef.current.cameraOrbit = preset.orbit;
      modelViewerRef.current.cameraTarget = preset.target;
      modelViewerRef.current.fieldOfView = preset.fov;
    }
  };

  const reset3DCamera = () => {
    if (!modelViewerRef.current) return;
    modelViewerRef.current.cameraOrbit = "0deg 75deg 105%";
    modelViewerRef.current.cameraTarget = "auto auto auto";
    modelViewerRef.current.fieldOfView = "30deg";
  };

  // ===========================================================================
  // BAMS 2ND PROF DRAVYAGUNA DATABASE: ARAGWADHA (CASSIA FISTULA)
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
    pod: {
      code: "NODE 01 • PHALA & PHALAMAJJA",
      sanskritTitle: "आरग्वध फलमज्जा (Cylindrical Pod & Pulp)",
      latinPart: "Pulpa Cassiae Fistulae • Chaturangula Dirghaphala",
      prayojyaStatus: "PRIMARY PRAYOJYA ANGA (Official Drug Part — Phalamajja)",
      morphology: {
        summary:
          "Pendulous, smooth, cylindrical, dark blackish-brown indehiscent pod (30–60 cm long, 2–2.5 cm thick) visible hanging beneath the branches in the 3D specimen, internally divided by transverse septa containing sticky sweet black pulp.",
        markers: [
          { label: "Classical Name", value: "Chaturangula / Dirghaphala (1–2 feet long cylindrical pod)" },
          { label: "Exocarp", value: "Hard, woody, dark chocolate-brown, smooth & finely striated" },
          { label: "Internal Septa", value: "25–100 transverse chambers filled with dark Phalamajja" },
          { label: "Odor & Taste", value: "Sweetish characteristic odor; sweet, mucilaginous taste" },
        ],
        spottingPearl:
          "Shake a mature dried Aragwadha pod during 2nd Prof Spotting—if the seeds rattle loudly inside, the Phalamajja has dried out; fresh heavy pods that do NOT rattle contain potent moist pulp.",
      },
      rasapanchaka: {
        rasa: "Madhura (Sweet — Primary in Phalamajja), Tikta (Bitter)",
        guna: "Guru (Heavy), Mridu (Soft/Gentle), Snigdha (Unctuous)",
        virya: "Sheeta Virya (Cooling Potency)",
        vipaka: "Madhura Vipaka (Anabolic / Non-Irritating)",
        prabhava: "Sramsana (Supreme Mild Laxative — Mridu Virechana)",
        doshaKarma: "Vata-Pittahara • Koshtha-Shodhana • Jwaraghna • Hridya",
        shloka: "आरग्वधो गुरुः स्वादुः शीतलः स्रंसनोत्तमः । ज्वरहृद्रोगपित्तास्रवातोदावर्तशूलनुत् ॥ (भा.प्र.)",
      },
      kinetics: {
        primaryMolecules: "Anthraquinone Glycosides (Sennosides A & B, Rhein, Barbaloin), Pectin (25%), Mucilage & Sucrose",
        srotasTarget: "Purishavaha, Annavaha & Raktavaha Srotas",
        anupanaVehicle: "Warm Milk or Draksha Kwatha (For Sukumara, Bala & Garbhini Virechana)",
        mechanism:
          "Classical Sramsana Action ('पक्तव्यं न पचत्येव आश्लिष्टं कोष्ठसंश्रितम् नयत्यधः'): Anthraquinone glycosides remain unabsorbed in the small intestine and are cleaved by colonic microflora into active rhein-anthrones, gently stimulating Auerbach's plexus peristalsis while pectin/mucilage coats the mucosa to prevent griping.",
      },
    },
    canopy: {
      code: "NODE 02 • PATRA CANOPY",
      sanskritTitle: "आरग्वध पत्र (Pinnate Compound Leaves)",
      latinPart: "Folium Cassiae • Kushthaghna & Dadrughna Canopy",
      prayojyaStatus: "Primary Topical Drug for Twak Vikara (Skin Diseases)",
      morphology: {
        summary:
          "Large paripinnate compound leaves (20–40 cm long) bearing 4 to 8 pairs of opposite, large ovate-oblong leaflets with a glossy coriaceous upper surface.",
        markers: [
          { label: "Leaf Type", value: "Paripinnate (Even-pinnate) compound leaf" },
          { label: "Leaflets", value: "4–8 pairs, 7–15 cm long, ovate with acute apex" },
          { label: "Venation", value: "Closely set parallel-arcuate secondary lateral veins" },
          { label: "Seasonal Shedding", value: "Briefly deciduous in spring just before golden flowering" },
        ],
        spottingPearl:
          "Charaka placed Aragwadha at the very top of Kushthaghna and Kandughna Mahakashayas; its leaf paste rubbed in sour Kanji or Takra is the textbook prescription for Dadru (ringworm).",
      },
      rasapanchaka: {
        rasa: "Tikta (Bitter) & Kashaya (Astringent)",
        guna: "Laghu (Light), Ruksha (Drying)",
        virya: "Sheeta Virya",
        vipaka: "Katu Vipaka (Locally Kaphahara & Lekhana)",
        prabhava: "Kushthaghna (Dermatological Specific) & Kandughna (Anti-pruritic)",
        doshaKarma: "Kapha-Pittahara • Raktashodhaka • Krimighna",
        shloka: "आरग्वधस्य पत्राणि काञ्जिकेन प्रपेषयेत् । दद्रुकिट्टिमकुष्ठानि हन्ति लेपेन तत्क्षणात् ॥",
      },
      kinetics: {
        primaryMolecules: "Chrysophanol, Physcion, Rhein, Sennosides & Epicatechin",
        srotasTarget: "Raktavaha & Swedavaha Srotas (Cutaneous Microcirculation)",
        anupanaVehicle: "Takra (Buttermilk) or Kanji (Fermented Rice Water) as External Lepa",
        mechanism:
          "Free anthraquinones (chrysophanol and rhein) in the leaves disrupt dermatophyte ergosterol cell membranes (Trichophyton & Microsporum species) and down-regulate epidermal IL-17 inflammatory signaling in psoriasis (Kitibha) and tinea (Dadru).",
      },
    },
    flowers: {
      code: "NODE 03 • PUSHPA MANJARI",
      sanskritTitle: "सुवर्णक पुष्प (Pendulous Golden Racemes)",
      latinPart: "Flos Cassiae Fistulae • Kritamala / Rajavriksha Pushpa",
      prayojyaStatus: "Classical Pushpa Avaleha & Raktapittahara Drug",
      morphology: {
        summary:
          "Drooping, lax axillary racemes (30–50 cm long) bearing fragrant, bright golden-yellow flowers with 5 subequal veined petals and 10 stamens (3 long sickle-shaped, 4 medium, 3 short staminodes).",
        markers: [
          { label: "Synonyms", value: "Suvarnaka (Golden), Kritamala (Garlanded), Rajavriksha" },
          { label: "Corolla", value: "5 obovate, shortly clawed, bright yellow veined petals" },
          { label: "Androecium", value: "10 stamens; 3 lower longest with curved filaments" },
          { label: "Flowering Season", value: "Grishma Ritu (April–June peak golden bloom)" },
        ],
        spottingPearl:
          "When the entire tree is draped in golden racemes during Grishma Ritu, it embodies the synonym 'Rajavriksha' (King of the Forest) and 'Suvarnaka'.",
      },
      rasapanchaka: {
        rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
        guna: "Laghu, Snigdha, Mridu",
        virya: "Sheeta Virya (Cooling)",
        vipaka: "Madhura Vipaka",
        prabhava: "Dipana-Mridurechana & Raktastambhana",
        doshaKarma: "Pitta-Kaphahara • Dahaprashamana",
        shloka: "पुष्पं शीतं कषायं च तिक्तं संग्राहि वातलम् ।",
      },
      kinetics: {
        primaryMolecules: "Kaempferol, Fistulin, Rhein glycosides, Leucopelargonidin & Aurantiamide",
        srotasTarget: "Pranavaha & Raktavaha Srotas",
        anupanaVehicle: "Sharkara (Prepared as Aragwadha Pushpa Gulkand / Avaleha)",
        mechanism:
          "Flavonoids (kaempferol and fistulin) stabilize capillary endothelium and soothe bronchial & gastric mucosal inflammation in Raktapitta and Pittaja Kasa.",
      },
    },
    bark: {
      code: "NODE 04 • KANDA-TWAK",
      sanskritTitle: "आरग्वध त्वक् (Stem Bark / Aragwadhadi Kwatha)",
      latinPart: "Cortex Cassiae Fistulae • Vyadhighata Twak",
      prayojyaStatus: "Key Ingredient of Sushruta's Aragwadhadi Gana Kwatha",
      morphology: {
        summary:
          "Smooth, pale greenish-grey bark in young trunks (as sculpted in the central trunk of the 3D model), exfoliating in hard, dark reddish-brown rectangular scales in older trees.",
        markers: [
          { label: "Young Bark", value: "Smooth, ash-grey to pale greenish-grey" },
          { label: "Mature Bark", value: "Rough, dark brown, exfoliating in woody scales" },
          { label: "Inner Bark", value: "Pinkish-buff, fibrous fracture, strongly astringent taste" },
          { label: "Key Formulation", value: "Aragwadhadi Kwatha & Mahamanjishthadi Kwatha" },
        ],
        spottingPearl:
          "Sushruta named an entire pharmacological group—Aragwadhadi Gana—after this tree for managing Dushta Vrana (chronic non-healing ulcers), Kushtha, and Prameha.",
      },
      rasapanchaka: {
        rasa: "Tikta (Bitter) & Kashaya (Astringent)",
        guna: "Laghu, Ruksha",
        virya: "Sheeta Virya",
        vipaka: "Katu Vipaka",
        prabhava: "Vranashodhana (Wound Debridement) & Shothahara",
        doshaKarma: "Kapha-Pittahara • Kledashoshana",
        shloka: "आरग्वधादिरित्येष गणः श्लेष्मविषापहः । प्रमेहकुष्ठज्वरनुद् वमिंडूव्रणशोधनः ॥ (सु.सू. ३८)",
      },
      kinetics: {
        primaryMolecules: "Condensed Tannins (10–14%), Fistucacidin, Lupeol, β-Sitosterol & Leucoanthocyanidins",
        srotasTarget: "Raktavaha, Medovaha & Udakavaha Srotas",
        anupanaVehicle: "Kwatha (Decoction) for Internal Use or Vrana Prakshalana (Wound Wash)",
        mechanism:
          "Catechin tannins and lupeol precipitate necrotic proteins on ulcer beds (Vranashodhana), inhibit bacterial biofilm formation, and improve peripheral insulin sensitivity in Kaphaja Prameha.",
      },
    },
    root: {
      code: "NODE 05 • MULA & MULA-TWAK",
      sanskritTitle: "आरग्वध मूल (Root & Root Bark Base)",
      latinPart: "Radix Cassiae Fistulae • Jwaraghna Root System",
      prayojyaStatus: "Potent Antipyretic (Jwaraghna) & Vatarakta Drug",
      morphology: {
        summary:
          "Deep woody taproot and spreading lateral root system (anchored in the pedestal base of the 3D model) clothed in reddish-brown suberized root bark.",
        markers: [
          { label: "Root Bark Color", value: "Reddish-brown externally, yellowish-pink internally" },
          { label: "Ecological Role", value: "Drought-hardy root system thriving in Jangala & Sadharana Desha" },
          { label: "Taste", value: "Astringent-bitter with warming tonic aftertaste" },
          { label: "Therapeutic Class", value: "Jwaraghna, Amavatahara & Virechanopaga" },
        ],
        spottingPearl:
          "In classical Nighantus, Aragwadha root bark is regarded as the strongest Jwaraghna (antipyretic) part of the plant for stubborn Vishama Jwara and burning joint pain in Vatarakta.",
      },
      rasapanchaka: {
        rasa: "Tikta, Kashaya",
        guna: "Laghu, Snigdha",
        virya: "Sheeta Virya",
        vipaka: "Madhura-Katu",
        prabhava: "Jwaraghna (Antipyretic) & Vedanasthapana",
        doshaKarma: "Vata-Pittahara • Raktaprasadana",
        shloka: "मूलं ज्वरहरं श्रेष्ठं वातरक्तविनाशनम् ।",
      },
      kinetics: {
        primaryMolecules: "Rhein, Aloe-emodin, Rhamnetin-3-O-gentiobioside & Oxyanthraquinones",
        srotasTarget: "Rasavaha, Raktavaha & Asthivaha Srotas",
        anupanaVehicle: "Milk Decoction (Kshirapaka) or Kwatha in Jwara",
        mechanism:
          "Root-derived oxyanthraquinones and rhamnetin glycosides inhibit prostaglandin E2 (PGE2) synthesis in the hypothalamic thermoregulatory center and reduce synovial uric acid inflammation in Vatarakta (gout).",
      },
    },
    dissection: {
      code: "NODE 06 • POD L.S. DISSECTION",
      sanskritTitle: "चतुरङ्गुल फल आन्तरिक काट (Pod Chamber Dissection)",
      latinPart: "Sectio Longitudinalis Fructus • Septa & Phalamajja Anatomy",
      prayojyaStatus: "2nd Prof Practical Spotting & Bhaishajya Kalpana Extraction",
      morphology: {
        summary:
          "Longitudinal section of the cylindrical fruit pod revealing the outer woody pericarp, 25–100 transverse papery septa (Koshtha), dark viscid Phalamajja pulp, and flat glossy yellowish-brown seeds.",
        markers: [
          { label: "1. Pericarp (Phalatwak)", value: "Indehiscent woody shell with ventral & dorsal sutures" },
          { label: "2. Transverse Septa", value: "Thin transverse dissepiments every 0.5–1 cm" },
          { label: "3. Phalamajja (Pulp)", value: "Blackish-brown, sticky, sweet mucilaginous coat on septa" },
          { label: "4. Bija (Seeds)", value: "1 oval, flattened, smooth yellowish-brown seed per chamber" },
        ],
        spottingPearl:
          "Important Bhaishajya Rule: Never boil Aragwadha Phalamajja vigorously over high fire—heat degrades its thermolabile sennoside glycosides! Always prepare as a Phanta (hot infusion) or Mridu Kwatha.",
      },
      rasapanchaka: {
        rasa: "Madhura (Pulp) • Tikta (Seed Coat)",
        guna: "Guru, Mridu, Snigdha",
        virya: "Sheeta Virya",
        vipaka: "Madhura Vipaka",
        prabhava: "Sukhavirechana (Painless, safe purgation without cramps)",
        doshaKarma: "Vata-Pittahara • Udavartahara",
        shloka: "चतुरङ्गुलो मृदुफलः कोष्ठशुद्धिकरः परः । बालानां गर्भिणीनां च वृद्धानां च प्रशस्यते ॥",
      },
      kinetics: {
        primaryMolecules: "Sennoside A & B (1.2–2.0% in Pulp), Galactomannan Gum (in Seeds)",
        srotasTarget: "Purishavaha Srotas (Descending & Sigmoid Colon)",
        anupanaVehicle: "Warm Water Phanta or Warm Milk (Dose: 10–20 g Phalamajja)",
        mechanism:
          "While the black Phalamajja is a gentle Sramsana laxative, the crushed seeds alone act as an emetic (Vamaka) in large doses—which is why classical texts instruct separating the seeds when preparing Phalamajja Leha.",
      },
    },
  };

  const podChamberDetails: Record<
    PodChamberLayer,
    { title: string; anatomy: string; clinicalNote: string }
  > = {
    pericarp: {
      title: "1. Woody Exocarp / Pericarp (फलत्वक्)",
      anatomy: "Hard, dark chocolate-brown lignified outer wall marked by two longitudinal sutures (ventral and dorsal) that do not split open spontaneously (indehiscent lomentum).",
      clinicalNote: "Protects the inner moisture of the Phalamajja; gently cracked with a wooden mallet during drug collection.",
    },
    septa: {
      title: "2. Transverse Septa / Dissepiments (कोष्ठ भित्ति)",
      anatomy: "25 to 100 thin, woody-papery transverse partitions dividing the 60 cm pod into single-seeded chambers every 6–8 mm.",
      clinicalNote: "Gives the tree its classical synonym 'Chaturangula' and 'Suvarnaphala'.",
    },
    phalamajja: {
      title: "3. Black Viscid Phalamajja Pulp (फलमज्जा — Official Drug)",
      anatomy: "Lustrous, dark brownish-black, sweet, mucilaginous pulp coating both faces of the transverse septa.",
      clinicalNote: "Contains Sennosides A & B + Rhein + Pectin. Scraped off with a blunt spatula and administered (10–20 g) with warm milk for Sramsana.",
    },
    seeds: {
      title: "4. Albuminous Flattened Seeds (बीज)",
      anatomy: "Each transverse chamber houses one horizontal, broadly ovate, flattened, glossy yellowish-brown seed embedded in the black pulp.",
      clinicalNote: "Rich in galactomannan endospermic gum; separated from the pulp during Bhaishajya Kalpana preparation.",
    },
  };

  const currentOrgan = organDatabase[activeOrgan];

  return (
    <div className="relative w-full min-h-[calc(100vh-3.5rem)] bg-[#040B08] text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* Load Google Model Viewer WebGL Engine via CDN (Zero npm package required!) */}
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        strategy="afterInteractive"
      />

      {/* Scoped Studio Floor & Hotspot Styles */}
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
        model-viewer {
          width: 100%;
          height: 100%;
          background-color: transparent;
          --poster-color: transparent;
        }
        .atreya-3d-pin {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(6, 20, 14, 0.88);
          border: 1.5px solid #D4AF37;
          color: #F5DE93;
          font-family: monospace;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.75);
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .atreya-3d-pin:hover,
        .atreya-3d-pin.active-pin {
          background: rgba(16, 185, 129, 0.95);
          border-color: #fff;
          color: #000;
          transform: scale(1.08);
        }
        .pin-dot {
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
        .active-pin .pin-dot {
          background: #000;
        }
      `}} />

      {/* Ambient Depth-of-Field Clinical Spotlight */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
          shaderPreset === "xray"
            ? "bg-[radial-gradient(circle_at_40%_50%,rgba(16,185,129,0.25)_0%,rgba(6,182,212,0.08)_40%,transparent_72%)]"
            : shaderPreset === "gold"
            ? "bg-[radial-gradient(circle_at_40%_50%,rgba(212,175,55,0.22)_0%,rgba(16,185,129,0.06)_40%,transparent_72%)]"
            : "bg-[radial-gradient(circle_at_40%_50%,rgba(16,185,129,0.16)_0%,rgba(212,175,55,0.06)_38%,transparent_72%)]"
        }`}
      />
      <div className="studio-floor-grid" />

      {/* =================================================================
          1. TOP FLOATING SURGICAL HEADER BAR
          ================================================================= */}
      <header className="relative z-30 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 pt-4 pb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/bams-hub"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/85 backdrop-blur-md border border-white/15 text-xs font-bold text-white/85 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Exit 3D Studio
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/75 backdrop-blur-md border border-emerald-500/30 text-xs">
            <Box className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono uppercase tracking-wider text-emerald-300 font-bold">
              WebGL .GLB Specimen #01
            </span>
            <span className="text-white/40">|</span>
            <span className="font-bold text-white">आरग्वध (Aragwadha)</span>
            <span className="font-serif italic text-white/75">Cassia fistula Linn.</span>
          </div>
        </div>

        {/* Top Organ Camera Jump Bar */}
        <div className="flex items-center gap-1.5 bg-zinc-900/85 backdrop-blur-md p-1 rounded-lg border border-white/15 overflow-x-auto max-w-full">
          {([
            { id: "pod" as const, label: "01. Phala (Hanging Pods) ★" },
            { id: "canopy" as const, label: "02. Patra (Leaf Canopy)" },
            { id: "flowers" as const, label: "03. Pushpa (Racemes)" },
            { id: "bark" as const, label: "04. Twak (Stem Bark)" },
            { id: "root" as const, label: "05. Mula (Root Base)" },
            { id: "dissection" as const, label: "06. Pod L.S. Dissection" },
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
          2. LEFT FLOATING 3D SHADER & CAMERA CONTROL DOCK
          ================================================================= */}
      <aside className="fixed left-4 top-24 z-30 hidden md:flex flex-col gap-2.5 w-60 bg-zinc-950/85 backdrop-blur-xl border border-white/15 rounded-xl p-4 shadow-2xl">
      <div className="grid grid-cols-2 gap-1 bg-black/60 p-1 rounded-lg border border-white/10 mb-1">
  <button
    type="button"
    onClick={() => setViewEngine("sketchfab")}
    className={`py-1.5 rounded text-[10px] font-bold cursor-pointer ${
      viewEngine === "sketchfab" ? "bg-emerald-500 text-black" : "text-white/60"
    }`}
  >
    Full-Color 3D
  </button>
  <button
    type="button"
    onClick={() => setViewEngine("glb")}
    className={`py-1.5 rounded text-[10px] font-bold cursor-pointer ${
      viewEngine === "glb" ? "bg-[#D4AF37] text-black" : "text-white/60"
    }`}
  >
    Local .GLB
  </button>
</div>

        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> 3D Mesh Shader Mode
          </span>
          <span className="text-[9px] font-mono text-emerald-400">
            {modelLoaded ? "GLB ACTIVE" : "LOADING..."}
          </span>
        </div>

        {/* 4 Live WebGL Material Shaders for Your White .GLB Model */}
        {([
          {
            id: "emerald" as const,
            label: "1. Botanical Jade PBR",
            sub: "Natural Chlorophyll & Bark Tint",
            dot: "bg-emerald-500",
          },
          {
            id: "gold" as const,
            label: "2. Suvarnaka Gold",
            sub: "Metallic Rajavriksha Finish",
            dot: "bg-[#D4AF37]",
          },
          {
            id: "xray" as const,
            label: "3. Clinical X-Ray Scan",
            sub: "Bioluminescent Hologram",
            dot: "bg-cyan-400",
          },
          {
            id: "clay" as const,
            label: "4. Anatomical Clay",
            sub: "Original Alabaster Mesh",
            dot: "bg-stone-200",
          },
        ]).map((sh) => {
          const active = shaderPreset === sh.id;
          return (
            <button
              key={sh.id}
              type="button"
              onClick={() => applyWebGLShader(sh.id)}
              className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                active
                  ? "bg-white/10 border-emerald-500/50 text-white shadow-sm"
                  : "bg-black/40 border-white/5 text-white/55 hover:text-white"
              }`}
            >
              <div>
                <p className="text-xs font-bold leading-tight">{sh.label}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{sh.sub}</p>
              </div>
              <span className={`w-3 h-3 rounded-full ${sh.dot} ${active ? "ring-2 ring-white" : ""}`} />
            </button>
          );
        })}

        {/* 3D Viewport Controls */}
        <div className="pt-3 mt-1 border-t border-white/10 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex-1 py-2 px-2.5 rounded-lg border text-[11px] font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                autoRotate
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                  : "bg-white/5 border-white/10 text-white/60"
              }`}
            >
              {autoRotate ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{autoRotate ? "Orbiting" : "Paused"}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowHotspots(!showHotspots)}
              className={`flex-1 py-2 px-2.5 rounded-lg border text-[11px] font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                showHotspots
                  ? "bg-amber-500/20 border-[#D4AF37]/40 text-[#F5DE93]"
                  : "bg-white/5 border-white/10 text-white/60"
              }`}
            >
              <Crosshair className="w-3 h-3" />
              <span>{showHotspots ? "Pins ON" : "Pins OFF"}</span>
            </button>
          </div>

          {/* Studio Lighting Exposure Slider */}
          <div>
            <div className="flex justify-between text-[10px] font-mono text-white/70 mb-1">
              <span className="flex items-center gap-1">
                <Sun className="w-3 h-3 text-[#D4AF37]" /> STUDIO EXPOSURE
              </span>
              <span className="text-[#D4AF37]">{exposure.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={exposure}
              onChange={(e) => setExposure(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
            />
          </div>

          <button
            type="button"
            onClick={reset3DCamera}
            className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-white/85 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-[#D4AF37]" /> Reset 3D Camera Orbit
          </button>
        </div>
      </aside>

      {/* =================================================================
          3. CENTER BOUNDLESS 3D WEBGL STAGE (/models/aragwadha-tree.glb)
          ================================================================= */}
      <main className="relative flex-grow flex items-center justify-center w-full h-[640px] sm:h-[740px] md:pr-80">
  {activeOrgan !== "dissection" ? (
    viewEngine === "sketchfab" ? (
      <div className="w-full h-full p-2 sm:p-6 md:pl-64 flex flex-col items-center justify-center">
        <div className="w-full h-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative bg-black/40">
          <iframe
            title="Golden Shower Tree (Aragwadha) 3D Model"
            src="https://sketchfab.com/models/8b088dca5ca0408c94093d6ff6068488/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_stop=0&dnt=1"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
          />
        </div>
      </div>
    ) : (
      <div
            className={`w-full h-full relative flex items-center justify-center transition-all duration-500 ${
              shaderPreset === "xray"
                ? "drop-shadow-[0_0_35px_rgba(16,185,129,0.55)]"
                : "drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
            }`}
          >
            {/* TypeScript-Safe <model-viewer> Web Component Wrapper */}
            {(React.createElement as any)(
              "model-viewer",
              {
                ref: modelViewerRef,
                src: "/models/aragwadha-tree.glb",
                alt: "Aragwadha (Cassia fistula) 3D Botanical Specimen",
                "camera-controls": true,
                "auto-rotate": autoRotate ? true : undefined,
                "auto-rotate-delay": "0",
                "rotation-per-second": "18deg",
                "shadow-intensity": "1.4",
                "shadow-softness": "0.85",
                exposure: String(exposure),
                "environment-image": "neutral",
                "camera-orbit": "0deg 75deg 100%",
                "min-camera-orbit": "auto 15deg auto",
                "max-camera-orbit": "auto 95deg auto",
                "interpolation-decay": "120",
                ar: true,
                "ar-modes": "webxr scene-viewer quick-look",
                style: {
                  width: "100%",
                  height: "100%",
                  outline: "none",
                },
              },

              /* --- 3D HOTSPOT PIN 1: HANGING CYLINDRICAL PODS (PHALA) --- */
              showHotspots && (
                <button
                  key="pin-pod"
                  slot="hotspot-pod"
                  data-position="-0.22m 0.42m 0.08m"
                  data-normal="-1m 0m 0.2m"
                  onClick={() => focusOnOrgan("pod")}
                  className={`atreya-3d-pin ${activeOrgan === "pod" ? "active-pin" : ""}`}
                >
                  <span className="pin-dot" />
                  <span>01. PHALA (CHATURANGULA POD) ★</span>
                </button>
              ),

              /* --- 3D HOTSPOT PIN 2: UPPER PINNATE LEAF CANOPY (PATRA) --- */
              showHotspots && (
                <button
                  key="pin-canopy"
                  slot="hotspot-canopy"
                  data-position="-0.15m 0.82m 0.12m"
                  data-normal="0m 1m 0.2m"
                  onClick={() => focusOnOrgan("canopy")}
                  className={`atreya-3d-pin ${activeOrgan === "canopy" ? "active-pin" : ""}`}
                >
                  <span className="pin-dot" />
                  <span>02. PATRA (KUSHTHAGHNA CANOPY)</span>
                </button>
              ),

              /* --- 3D HOTSPOT PIN 3: PENDULOUS FLOWER CLUSTERS (PUSHPA) --- */
              showHotspots && (
                <button
                  key="pin-flowers"
                  slot="hotspot-flowers"
                  data-position="0.22m 0.65m 0.14m"
                  data-normal="1m 0.2m 0.2m"
                  onClick={() => focusOnOrgan("flowers")}
                  className={`atreya-3d-pin ${activeOrgan === "flowers" ? "active-pin" : ""}`}
                >
                  <span className="pin-dot" />
                  <span>03. SUVARNAKA PUSHPA (RACEME)</span>
                </button>
              ),

              /* --- 3D HOTSPOT PIN 4: WOODY TRUNK BARK (KANDA-TWAK) --- */
              showHotspots && (
                <button
                  key="pin-bark"
                  slot="hotspot-bark"
                  data-position="0.03m 0.36m 0.08m"
                  data-normal="0m 0m 1m"
                  onClick={() => focusOnOrgan("bark")}
                  className={`atreya-3d-pin ${activeOrgan === "bark" ? "active-pin" : ""}`}
                >
                  <span className="pin-dot" />
                  <span>04. KANDA-TWAK (STEM BARK)</span>
                </button>
              ),

              /* --- 3D HOTSPOT PIN 5: ROOT & PEDESTAL BASE (MULA) --- */
              showHotspots && (
                <button
                  key="pin-root"
                  slot="hotspot-root"
                  data-position="0.08m 0.10m 0.15m"
                  data-normal="0m 0.5m 1m"
                  onClick={() => focusOnOrgan("root")}
                  className={`atreya-3d-pin ${activeOrgan === "root" ? "active-pin" : ""}`}
                >
                  <span className="pin-dot" />
                  <span>05. MULA (JWARAGHNA ROOT)</span>
                </button>
              ),

              /* --- NATIVE AUGMENTED REALITY (AR) DESK PROJECTION BUTTON --- */
              <button
                key="ar-btn"
                slot="ar-button"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 px-5 py-2.5 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Project 3D Aragwadha on Your Desk (AR)</span>
              </button>
            )}
          </div>
      )
        ) : (
          /* ===============================================================
             NODE 06: INTERACTIVE LONGITUDINAL POD DISSECTION (PHALAMAJJA)
             Opens when the student clicks "Pod L.S. Dissection"
             =============================================================== */
          <div className="flex flex-col items-center px-4 max-w-2xl">
            <div className="mb-4 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-xs font-mono text-emerald-300 text-center">
              Longitudinal Dissection of the Hanging Chaturangula Pod • Click any chamber layer below
            </div>

            {/* Interactive SVG Longitudinal Section of Cassia fistula Pod */}
            <svg viewBox="0 0 680 260" className="w-full max-w-[640px] h-auto drop-shadow-2xl">
              {/* 1. Outer Woody Pericarp Shell */}
              <rect
                x="30"
                y="55"
                width="620"
                height="135"
                rx="65"
                onClick={() => setActivePodLayer("pericarp")}
                fill={activePodLayer === "pericarp" ? "#5c3418" : "#2e190b"}
                stroke={activePodLayer === "pericarp" ? "#facc15" : "#D4AF37"}
                strokeWidth="4"
                className="cursor-pointer transition-all"
              />

              {/* Inner Chamber Cavity */}
              <rect
                x="56"
                y="75"
                width="568"
                height="95"
                rx="45"
                fill="#120905"
                stroke="#78350f"
                strokeWidth="2"
              />

              {/* 2 & 3. Transverse Septa & Sticky Black Phalamajja Pulp Coating */}
              {Array.from({ length: 11 }).map((_, idx) => {
                const xPos = 105 + idx * 48;
                return (
                  <g key={idx}>
                    {/* Black Viscid Phalamajja Pulp Layer */}
                    <rect
                      x={xPos - 14}
                      y="78"
                      width="28"
                      height="89"
                      rx="6"
                      onClick={() => setActivePodLayer("phalamajja")}
                      fill={activePodLayer === "phalamajja" ? "#065f46" : "#1c1311"}
                      stroke={activePodLayer === "phalamajja" ? "#34d399" : "#3f2e26"}
                      strokeWidth="1.5"
                      className="cursor-pointer transition-all"
                    />

                    {/* Woody-Papery Transverse Septum Line */}
                    <line
                      x1={xPos}
                      y1="76"
                      x2={xPos}
                      y2="168"
                      onClick={() => setActivePodLayer("septa")}
                      stroke={activePodLayer === "septa" ? "#facc15" : "#d6b886"}
                      strokeWidth={activePodLayer === "septa" ? "4" : "2.2"}
                      className="cursor-pointer"
                    />

                    {/* 4. Glossy Flattened Yellowish-Brown Seed in Each Chamber */}
                    {idx < 10 && (
                      <ellipse
                        cx={xPos + 24}
                        cy="122"
                        rx="9"
                        ry="15"
                        onClick={() => setActivePodLayer("seeds")}
                        fill={activePodLayer === "seeds" ? "#facc15" : "#ca8a04"}
                        stroke="#fff"
                        strokeWidth="1.2"
                        className="cursor-pointer transition-all"
                      />
                    )}
                  </g>
                );
              })}

              {/* Callout Labels */}
              <text x="65" y="38" fill="#F5DE93" fontSize="11" fontWeight="bold" fontFamily="monospace">
                1. PHALATWAK (WOODY PERICARP)
              </text>
              <text x="330" y="38" fill="#6ee7b7" fontSize="11" fontWeight="bold" fontFamily="monospace">
                3. PHALAMAJJA (BLACK LAXATIVE PULP ★)
              </text>
              <text x="160" y="225" fill="#fde047" fontSize="11" fontWeight="bold" fontFamily="monospace">
                2. TRANSVERSE SEPTA (KOSHTHA)
              </text>
              <text x="430" y="225" fill="#fb923c" fontSize="11" fontWeight="bold" fontFamily="monospace">
                4. ALBUMINOUS SEEDS (BIJA)
              </text>
            </svg>

            {/* Dissected Pod Layer Selector Buttons */}
            <div className="flex flex-wrap gap-2 my-4 justify-center">
              {([
                { id: "phalamajja" as const, label: "3. Phalamajja Pulp (Official Drug ★)" },
                { id: "septa" as const, label: "2. Transverse Septa" },
                { id: "pericarp" as const, label: "1. Woody Pericarp" },
                { id: "seeds" as const, label: "4. Seeds (Bija)" },
              ]).map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setActivePodLayer(btn.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold border cursor-pointer transition-all ${
                    activePodLayer === btn.id
                      ? "bg-emerald-500 text-black border-emerald-400"
                      : "bg-zinc-900 text-white/75 border-white/15"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="w-full bg-zinc-900/95 border border-emerald-500/40 rounded-xl p-5 shadow-2xl">
              <h4 className="font-mono text-xs font-bold uppercase text-[#D4AF37] mb-1">
                {podChamberDetails[activePodLayer].title}
              </h4>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-2">
                <strong>Internal Anatomy:</strong> {podChamberDetails[activePodLayer].anatomy}
              </p>
              <p className="text-xs sm:text-sm text-emerald-300 leading-relaxed">
                <strong>Dravyaguna &amp; Bhaishajya Pearl:</strong>{" "}
                {podChamberDetails[activePodLayer].clinicalNote}
              </p>
            </div>
          </div>
        )}
      </main>

      {/* =================================================================
          4. RIGHT FLOATING CLINICAL DISSECTION INSPECTOR DRAWER
          ================================================================= */}
      <aside
        className={`fixed right-4 top-20 bottom-16 z-30 transition-all duration-300 flex flex-col ${
          hudExpanded ? "w-[92vw] sm:w-[395px]" : "w-12"
        }`}
      >
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
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {currentOrgan.code}
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37]">
                  SHIMBI KULA • CAESALPINIOIDEAE
                </span>
              </div>

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
                  { id: "morphology" as const, label: "Spotting" },
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

              {/* TAB 1: RASA-PANCHAKA */}
              {activeHudTab === "rasapanchaka" && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-[#D4AF37]/40">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Classical Samhita / Nighantu Sutra
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
                      <span className="text-[10px] font-mono uppercase text-cyan-400 block">
                        Virya (Potency)
                      </span>
                      <p className="font-bold text-white mt-0.5">{currentOrgan.rasapanchaka.virya}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-[#D4AF37] block">
                        Vipaka (Post-Digestive)
                      </span>
                      <p className="font-bold text-white mt-0.5">{currentOrgan.rasapanchaka.vipaka}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs">
                    <span className="text-[10px] font-mono uppercase text-emerald-300 block mb-0.5">
                      Prabhava &amp; Dosha Karma
                    </span>
                    <p className="font-bold text-white">{currentOrgan.rasapanchaka.prabhava}</p>
                    <p className="text-white/80 mt-0.5">{currentOrgan.rasapanchaka.doshaKarma}</p>
                  </div>
                </div>
              )}

              {/* TAB 2: MOLECULAR & SROTAS PHARMACOKINETICS */}
              {activeHudTab === "kinetics" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-amber-400 block mb-1">
                      Key Bioactive Phytochemicals
                    </span>
                    <p className="font-bold text-white leading-relaxed">
                      {currentOrgan.kinetics.primaryMolecules}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-1">
                      Target Srotas Affinity
                    </span>
                    <p className="font-bold text-white">{currentOrgan.kinetics.srotasTarget}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-[10px] font-mono uppercase text-emerald-300 block mb-1">
                      Classical Anupana &amp; Kalpana
                    </span>
                    <p className="font-bold text-white">{currentOrgan.kinetics.anupanaVehicle}</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-black/50 border border-white/10 leading-relaxed text-white/80">
                    <strong className="text-[#D4AF37] block text-[10px] font-mono uppercase mb-1">
                      Clinical &amp; Enteric Mechanism:
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
                      ★ 2nd Prof Spotting &amp; Viva Pearl:
                    </strong>
                    {currentOrgan.morphology.spottingPearl}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Button: Switch Between 3D Tree & Dissected Pod Chambers */}
            <div className="pt-3 mt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() =>
                  focusOnOrgan(activeOrgan === "dissection" ? "pod" : "dissection")
                }
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg"
              >
                <Microscope className="w-4 h-4" />
                <span>
                  {activeOrgan === "dissection"
                    ? "Return to 3D Aragwadha Tree (.GLB)"
                    : "Dissect Hanging Pod & Phalamajja"}
                </span>
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* =================================================================
          5. BOTTOM MOBILE SHADER BAR & INTERACTION COMPASS
          ================================================================= */}
      <footer className="relative z-20 px-4 sm:px-6 pb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/60">
        <div className="flex items-center gap-3 bg-zinc-950/85 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
            <Crosshair className="w-3.5 h-3.5" /> PINCH / DRAG TO ORBIT 3D .GLB
          </span>
          {/* Mobile Quick Shader Switcher */}
          <div className="flex md:hidden items-center gap-1.5 pl-2 border-l border-white/15">
            {(["emerald", "gold", "xray", "clay"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => applyWebGLShader(p)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                  shaderPreset === p ? "bg-emerald-500 text-black" : "bg-white/10 text-white/70"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
