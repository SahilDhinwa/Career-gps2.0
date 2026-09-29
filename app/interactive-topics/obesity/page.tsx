"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Activity, 
  Scale, 
  Stethoscope, 
  Layers, 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  BookOpen,
  ChevronRight,
  TrendingUp,
  RotateCcw
} from "lucide-react";

// Anatomical Hotspots
const ANATOMY_SYSTEMS = [
  {
    id: "adipose",
    name: "Adipose Tissue Remodeling",
    system: "Cellular / Endocrine",
    summary: "Hypertrophy vs. Hyperplasia",
    detail: "Enlarged adipocytes outgrow their vascular supply, causing localized hypoxia and triggering HIF-1α activation. Macrophages infiltrate (crown-like structures), secreting TNF-α and IL-6, establishing systemic low-grade subacute inflammation."
  },
  {
    id: "hypothalamus",
    name: "Hypothalamic Resistance",
    system: "Neuroendocrine Loop",
    summary: "Leptin & Ghrelin Dysregulation",
    detail: "Despite high circulating leptin from increased fat mass, central leptin resistance prevents satiety signaling via POMC/CART neurons, while ghrelin and NPY/AgRP stimulate appetite, creating perpetual hyperphagia."
  },
  {
    id: "hepatic",
    name: "Hepatic Lipogenesis",
    system: "Metabolic Axis",
    summary: "MASLD / NAFLD Induction",
    detail: "Excess portal free fatty acids (FFAs) overwhelm beta-oxidation, leading to hepatic steatosis, triglyceride accumulation, elevated VLDL synthesis, and selective hepatic insulin resistance."
  },
  {
    id: "cardio",
    name: "Cardiovascular Remodeling",
    system: "Hemodynamics",
    summary: "Volume Overload & Arterial Stiffness",
    detail: "Elevated circulating blood volume increases stroke volume and left ventricular preload. Perivascular fat secretes inflammatory cytokines that promote endothelial dysfunction and accelerated atherogenesis."
  }
];

// Dual-Perspective Comparative Models
const COMPARATIVE_DATA = [
  {
    dimension: "Etiology (Nidana)",
    modern: "High-glycemic energy-dense diets, physical inactivity, endocrine disruptors, neurochemical reward dysregulation.",
    ayurvedic: "Atisampurna (overeating), Guru-Madhura-Sheetahara, Avyayama (lack of physical work), Diwaswapna (day sleep)."
  },
  {
    dimension: "Pathogenesis (Samprapti)",
    modern: "Positive energy balance → Adipocyte hypertrophy → Hypoxia → Pro-inflammatory adipokines → Insulin resistance.",
    ayurvedic: "Ama formation → Medovaha Srotorodha → Avarana of Samana/Apana Vata → Tikshnagni (intensified hunger) → Exclusive Medo Vriddhi."
  },
  {
    dimension: "Key Biomarkers",
    modern: "Elevated hs-CRP, fasting insulin, HbA1c, HOMA-IR, Apolipoprotein B, dyslipidemia (high TG, low HDL).",
    ayurvedic: "Medo-Dhatwagni Mandya, formation of Abaddha Medas, Swedaabadha (excess sweat), Daurgandhya (body odor)."
  },
  {
    dimension: "Core Therapeutics",
    modern: "GLP-1 receptor agonists (Semaglutide), SGLT2 inhibitors, targeted caloric deficit, bariatric surgical bypass.",
    ayurvedic: "Guru cha Atarpana chikitsa (heavy yet non-nourishing diet), Ruksha Udvartana, Navaka Guggulu, Shilajatu, Triphala."
  }
];

export default function ObesityInteractiveModule() {
  // Calculator States
  const [weight, setWeight] = useState<number>(85);
  const [height, setHeight] = useState<number>(170);

  // Module Tab State
  const [activeTab, setActiveTab] = useState<"pathology" | "anatomy" | "ayurveda" | "case">("pathology");
  const [activeSystem, setActiveSystem] = useState(ANATOMY_SYSTEMS[0]);

  // Clinical Case Challenge State
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<number | null>(null);
  const [caseSubmitted, setCaseSubmitted] = useState(false);

  // BMI Calculation
  const heightMeters = height / 100;
  const bmi = +(weight / (heightMeters * heightMeters)).toFixed(1);

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (val < 25) return { label: "Normal weight", color: "text-emerald-400" };
    if (val < 30) return { label: "Overweight (Pre-obese)", color: "text-amber-400" };
    if (val < 35) return { label: "Class I Obesity", color: "text-orange-400" };
    if (val < 40) return { label: "Class II Obesity", color: "text-red-400" };
    return { label: "Class III (Severe / Morbid)", color: "text-rose-500" };
  };

  const bmiCategory = getBmiCategory(bmi);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 pb-24 px-4 md:px-6">
      {/* Background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/interactive-topics" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors font-bold text-xs md:text-sm bg-surface/50 px-3 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Topics Directory
          </Link>
          <span className="text-xs font-mono uppercase tracking-widest text-foreground/50 border border-surfaceBorder px-2.5 py-1 rounded-sm">
            Module ID: MET-01
          </span>
        </div>

        {/* Hero Title */}
        <div className="mb-10 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Clinical Study
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Obesity & Sthaulya: <span className="text-amber-500">Pathophysiology Engine</span>
          </h1>
          <p className="text-foreground/70 font-medium text-sm md:text-base max-w-3xl leading-relaxed">
            A comprehensive, multi-layered clinical framework detailing neuroendocrine feedback, adipocyte inflammation, metabolic endotoxemia, and classical *Medoroga* pathology.
          </p>
        </div>

        {/* Dynamic Calculator Bar */}
        <div className="bg-surface/80 border border-surfaceBorder rounded-sm p-6 mb-10 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-surfaceBorder">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">Dynamic Metric Simulator</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-foreground/50 font-bold block">CURRENT BMI</span>
              <span className="text-2xl font-black font-mono text-foreground">{bmi} <span className={`text-xs uppercase font-sans ${bmiCategory.color}`}>({bmiCategory.label})</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-foreground/70 mb-2">
                <span>Body Weight</span>
                <span className="text-amber-500 font-mono">{weight} kg</span>
              </div>
              <input 
                type="range" 
                min={40} 
                max={180} 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-foreground/70 mb-2">
                <span>Height</span>
                <span className="text-amber-500 font-mono">{height} cm</span>
              </div>
              <input 
                type="range" 
                min={130} 
                max={220} 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 border-b border-surfaceBorder pb-4 mb-8">
          {[
            { id: "pathology", label: "Pathology Loop", icon: Activity },
            { id: "anatomy", label: "Systemic Targets", icon: Layers },
            { id: "ayurveda", label: "Ayurvedic Framework", icon: Flame },
            { id: "case", label: "Clinical Challenge", icon: Stethoscope },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isActive 
                    ? "bg-amber-500 text-white border-amber-500 shadow-md" 
                    : "bg-surface/50 border-surfaceBorder text-foreground/70 hover:border-amber-500/40"
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: PATHOLOGY LOOP */}
        {activeTab === "pathology" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface/60 border border-surfaceBorder p-5 rounded-sm">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">Phase 01</span>
                <h4 className="font-bold text-foreground text-base mt-1 mb-2">Adipocyte Hypertrophy</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Excess dietary lipids drive adipocytes beyond their diffusional oxygen limit (100 µm). Cell death attracts CD68+ M1 pro-inflammatory macrophages.
                </p>
              </div>
              <div className="bg-surface/60 border border-surfaceBorder p-5 rounded-sm">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">Phase 02</span>
                <h4 className="font-bold text-foreground text-base mt-1 mb-2">Signaling Interference</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  TNF-α activates JNK and IKKβ pathways, causing serine phosphorylation of Insulin Receptor Substrate-1 (IRS-1), blocking downstream GLUT-4 translocation.
                </p>
              </div>
              <div className="bg-surface/60 border border-surfaceBorder p-5 rounded-sm">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">Phase 03</span>
                <h4 className="font-bold text-foreground text-base mt-1 mb-2">Ectopic Lipid Infiltration</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Subcutaneous saturation shunts free fatty acids to non-adipose organs (pancreas, skeletal muscle, liver), synthesizing lipotoxic ceramides and diacylglycerols.
                </p>
              </div>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-sm">
              <h4 className="font-bold text-amber-500 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> The Neuroendocrine Paradox
              </h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                Circulating leptin rises in direct proportion to adipose volume. However, prolonged hyperleptinemia downregulates blood-brain barrier transport and increases SOCS3 expression in hypothalamic pro-opiomelanocortin (POMC) neurons. Satiety feedback fails, perpetuating hyperphagia despite massive energetic excess.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEMIC TARGETS */}
        {activeTab === "anatomy" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              {ANATOMY_SYSTEMS.map((sys) => (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(sys)}
                  className={`w-full text-left p-4 rounded-sm border transition-all ${
                    activeSystem.id === sys.id 
                      ? "bg-amber-500/10 border-amber-500 text-foreground" 
                      : "bg-surface/40 border-surfaceBorder text-foreground/70 hover:border-amber-500/30"
                  }`}
                >
                  <span className="text-[10px] font-mono text-amber-500 font-bold uppercase block">{sys.system}</span>
                  <p className="font-bold text-sm text-foreground">{sys.name}</p>
                </button>
              ))}
            </div>

            <div className="md:col-span-2 bg-surface/80 border border-surfaceBorder p-6 md:p-8 rounded-sm">
              <span className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold">Selected Axis Analysis</span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-2">{activeSystem.name}</h3>
              <p className="text-xs font-bold text-foreground/50 uppercase tracking-wide mb-4 pb-3 border-b border-surfaceBorder">
                Primary Mechanism: {activeSystem.summary}
              </p>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {activeSystem.detail}
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: AYURVEDIC FRAMEWORK */}
        {activeTab === "ayurveda" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-surfaceBorder text-sm">
                <thead>
                  <tr className="bg-surface border-b border-surfaceBorder">
                    <th className="p-4 font-bold text-amber-500 uppercase text-xs">Pathological Domain</th>
                    <th className="p-4 font-bold text-foreground uppercase text-xs">Modern Biomedicine</th>
                    <th className="p-4 font-bold text-foreground uppercase text-xs">Classical Ayurveda (Sthaulya)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surfaceBorder">
                  {COMPARATIVE_DATA.map((row, idx) => (
                    <tr key={idx} className="bg-surface/30 hover:bg-surface/50 transition-colors">
                      <td className="p-4 font-bold text-foreground text-xs uppercase tracking-wider">{row.dimension}</td>
                      <td className="p-4 text-xs text-foreground/70 leading-relaxed max-w-xs">{row.modern}</td>
                      <td className="p-4 text-xs text-foreground/70 leading-relaxed max-w-xs">{row.ayurvedic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-surface/60 border border-surfaceBorder p-5 rounded-sm">
              <h4 className="font-bold text-foreground text-sm mb-1">Key Shloka Concept (Charaka Sutrasthana 21/4)</h4>
              <p className="text-xs text-foreground/60 italic leading-relaxed">
                "मेदसाऽऽवृतमार्गत्वात् पुष्यन्ति नान्ये धातवः | तस्मात् स केवलं मेदः पुष्यति न बलं न च ॥"
              </p>
              <p className="text-xs text-foreground/80 mt-2 leading-relaxed">
                Due to the occlusion of circulatory channels (*Srotorodha*) by excessive *Meda*, the remaining *Dhatus* (Mamsa, Asthi, Majja, Shukra) are deprived of optimal nourishment, leading to the clinical paradox of physical weakness (*Daurbalya*) despite body mass enlargement.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: CLINICAL CHALLENGE */}
        {activeTab === "case" && (
          <div className="bg-surface/80 border border-surfaceBorder p-6 md:p-8 rounded-sm animate-in fade-in duration-300">
            <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-widest block mb-2">Interactive Case Evaluation</span>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Case Scenario: 42-Year-Old Executive</h3>
            <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-6">
              A 42-year-old male presents with chronic fatigue, BMI of 33.4 kg/m², elevated fasting insulin (24 µIU/mL), and acanthosis nigricans over the nape of the neck. In Ayurvedic evaluation, he exhibits *Atikshudha* (morbidly elevated hunger), *Swedaabadha* (profuse perspiration), and *Kshudrashwasa* on mild exertion. Which physiological factor accounts for his unrelenting hunger despite abundant fat stores?
            </p>

            <div className="space-y-3 mb-6">
              {[
                { id: 0, text: "Excessive ghrelin down-regulation causing direct vagal stimulation." },
                { id: 1, text: "Central hypothalamic leptin resistance combined with Samana Vata Avarana stoking Jatharagni." },
                { id: 2, text: "Primary hypoinsulinemia resulting in absolute cellular starvation." },
                { id: 3, text: "Excessive consumption of Majja Dhatu stimulating peripheral orexigenic peptides." }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setSelectedDiagnosis(opt.id); setCaseSubmitted(false); }}
                  className={`w-full text-left p-4 rounded-sm border text-xs md:text-sm font-medium transition-all ${
                    selectedDiagnosis === opt.id 
                      ? "border-amber-500 bg-amber-500/10 text-foreground" 
                      : "border-surfaceBorder bg-surface/40 text-foreground/70 hover:border-amber-500/30"
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + opt.id)}.</span>
                  {opt.text}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled={selectedDiagnosis === null}
                onClick={() => setCaseSubmitted(true)}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                Submit Clinical Appraisal
              </button>
              {caseSubmitted && (
                <button
                  onClick={() => { setSelectedDiagnosis(null); setCaseSubmitted(false); }}
                  className="px-4 py-3 border border-surfaceBorder text-foreground/70 text-xs font-bold uppercase rounded-sm hover:bg-surface"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {caseSubmitted && (
              <div className={`mt-6 p-4 rounded-sm border text-xs md:text-sm leading-relaxed ${
                selectedDiagnosis === 1 
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}>
                {selectedDiagnosis === 1 ? (
                  <p>
                    <strong className="block mb-1">Correct Clinical Synthesis:</strong>
                    Modern physiology demonstrates that high circulating leptin fails to curb hunger due to hypothalamic resistance (SOCS3 over-expression). Classical Ayurveda describes *Medovaha Srotorodha*, where trapped *Samana Vata* excites *Kosthagni*, producing persistent, intensified hunger (*Atikshudha*).
                  </p>
                ) : (
                  <p>
                    <strong className="block mb-1">Incorrect Assessment:</strong>
                    Review the neuroendocrine and Ayurvedic mechanisms in the tabs above. Satiety failure in hyperleptinemic states involves hypothalamic resistance coupled with classical *Samana Vata* entrapment.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
