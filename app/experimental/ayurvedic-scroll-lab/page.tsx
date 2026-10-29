"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowDown, ArrowRight, Leaf, Sparkles, MoveHorizontal, BookOpen, Sun, Moon, Wind } from "lucide-react";

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const herbs = [
  { name: "Turmeric", sanskrit: "Haridra", botanical: "Curcuma longa", color: "#e8aa39", kind: "turmeric", note: "A familiar golden spice with a long history in Ayurvedic formulations." },
  { name: "Tulsi", sanskrit: "Tulasi", botanical: "Ocimum tenuiflorum", color: "#79c98d", kind: "tulsi", note: "Aromatic leaves traditionally used in herbal preparations." },
  { name: "Amla", sanskrit: "Amalaki", botanical: "Phyllanthus emblica", color: "#b8d65e", kind: "amla", note: "A tart fruit known in Ayurveda and modern food traditions." },
  { name: "Ashwagandha", sanskrit: "Ashvagandha", botanical: "Withania somnifera", color: "#d8ad7b", kind: "ashwagandha", note: "A root used in traditional formulations; safety and evidence depend on context." },
] as const;

type Herb = (typeof herbs)[number];

function Botanical({ kind, color, className = "" }: { kind: Herb["kind"]; color: string; className?: string }) {
  const leaf = (x: number, y: number, rotate: number, scale = 1) => (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d="M0 0 C-25 -29 -19 -62 0 -77 C24 -60 25 -25 0 0Z" fill={color} stroke="#d6f4b9" strokeOpacity=".35" strokeWidth="1.5" />
      <path d="M0 0 L0 -69 M0 -25 L-11 -39 M0 -40 L11 -51" fill="none" stroke="#173e28" strokeOpacity=".6" strokeWidth="1.5" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 240 240" role="img" aria-label={`${kind} botanical illustration`} xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id={`glow-${kind}`}><stop stopColor={color} stopOpacity=".26"/><stop offset="1" stopColor={color} stopOpacity="0"/></radialGradient></defs>
      <circle cx="120" cy="120" r="113" fill={`url(#glow-${kind})`} />
      {kind === "turmeric" ? <>
        <path d="M115 185 Q105 130 125 79" stroke="#427a4d" strokeWidth="6" fill="none"/>
        {leaf(123, 113, -45, .8)}{leaf(124, 102, 40, .8)}
        <g fill="#c87924" stroke="#f5c166" strokeWidth="3"><path d="M114 143 C88 129 75 151 83 177 C92 198 118 200 124 181 C142 200 160 184 155 162 C151 142 137 136 114 143Z"/><path d="M104 171 Q91 197 111 213 Q131 219 134 191"/><path d="M136 172 Q156 187 171 173 Q180 151 159 147"/></g>
        <ellipse cx="103" cy="171" rx="12" ry="17" fill="#f6b43d" transform="rotate(-30 103 171)"/>
      </> : kind === "amla" ? <>
        <path d="M116 104 L117 65" stroke="#558347" strokeWidth="5"/>{leaf(116, 91, -48, .65)}{leaf(117, 88, 55, .65)}
        <circle cx="119" cy="149" r="57" fill={color} stroke="#e2ef9a" strokeWidth="3"/>
        {[0,1,2,3,4,5].map(i => <path key={i} d="M119 93 Q95 149 119 205" stroke="#60892d" strokeOpacity=".3" strokeWidth="3" fill="none" transform={`rotate(${i*60} 119 149)`}/>)}
        <ellipse cx="99" cy="125" rx="13" ry="23" fill="white" opacity=".13" transform="rotate(30 99 125)"/>
      </> : kind === "tulsi" ? <>
        <path d="M120 214 Q113 150 120 52" stroke="#77aa6a" strokeWidth="5" fill="none"/>
        {leaf(120, 170, -53, .7)}{leaf(119, 159, 55, .7)}{leaf(120, 126, -52, .68)}{leaf(120, 113, 52, .65)}{leaf(120, 82, -35, .55)}{leaf(120, 75, 40, .55)}
        <g fill="#d4b6ee">{[0,1,2,3].map(i => <circle key={i} cx={120+(i%2?7:-7)} cy={42+i*11} r="4"/>)}</g>
      </> : <>
        <path d="M119 183 Q115 120 120 65" stroke="#6a9b6a" strokeWidth="5" fill="none"/>
        {leaf(118, 125, -45, .55)}{leaf(119, 119, 43, .55)}{leaf(119, 89, -45, .5)}{leaf(119, 82, 45, .5)}
        <g fill="#b98256" stroke="#e4bd8c" strokeWidth="3"><path d="M119 166 C99 171 97 196 110 213 Q120 225 126 204 C142 223 151 210 141 190 Q151 175 130 167Z"/></g>
        <g fill="#d75551">{[0,1,2,3].map(i => <circle key={i} cx={98+i*14} cy={115+(i%2)*12} r="5"/>)}</g>
      </>}
    </svg>
  );
}

function usePageScroll() {
  const [y, setY] = useState(0);
  const [vh, setVh] = useState(800);
  useEffect(() => {
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { setY(window.scrollY); setVh(window.innerHeight); }); };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return { y, vh };
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(media.matches); change();
    media.addEventListener("change", change); return () => media.removeEventListener("change", change);
  }, []);
  return reduced;
}

function useSectionProgress(ref: React.RefObject<HTMLElement | null>, y: number, vh: number) {
  const node = ref.current;
  if (!node || vh <= 0) return 0;
  const top = node.getBoundingClientRect().top + y;
  return clamp((y - top) / Math.max(1, node.offsetHeight - vh));
}

function RevealWords({ text, progress }: { text: string; progress: number }) {
  const words = text.split(" ");
  return <p className="max-w-5xl text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.17] tracking-tight text-center">{words.map((word, i) => <span key={i} className="inline-block mr-[.26em]" style={{ color: `rgba(255,255,255,${.14+.86*clamp(progress*words.length-i)})` }}>{word}</span>)}</p>;
}

export default function AyurvedicScrollLaboratoryPage() {
  const { y, vh } = usePageScroll();
  const reduced = useReducedMotion();
  const storyRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const extractRef = useRef<HTMLElement>(null);
  const bridgeRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(0);
  const [showLabels, setShowLabels] = useState(true);
  const [pauseMotion, setPauseMotion] = useState(false);
  const motionOff = reduced || pauseMotion;
  const story = motionOff ? 1 : useSectionProgress(storyRef, y, vh);
  const gallery = motionOff ? .5 : useSectionProgress(galleryRef, y, vh);
  const extraction = motionOff ? .75 : useSectionProgress(extractRef, y, vh);
  const bridge = motionOff ? 1 : useSectionProgress(bridgeRef, y, vh);
  const finale = motionOff ? 1 : useSectionProgress(finaleRef, y, vh);
  const pageHeight = typeof document === "undefined" ? 1 : Math.max(1, document.documentElement.scrollHeight - vh);
  const total = clamp(y / pageHeight);
  const selectedHerb = herbs[selected];

  return <main className="relative min-h-screen bg-[#060c09] text-[#f8f4e8] overflow-x-clip">
    <style>{`
      @keyframes herbDrift { 0%,100% { translate: 0 0; } 50% { translate: 0 -18px; } }
      @keyframes lightPulse { 0%,100% { opacity:.2 } 50% { opacity:.55 } }
      .herb-drift { animation: herbDrift 7s ease-in-out infinite; }
      .light-pulse { animation: lightPulse 5s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) { .herb-drift,.light-pulse { animation:none !important; } html { scroll-behavior:auto !important; } }
    `}</style>
    <div className="fixed top-0 left-0 right-0 z-[80] h-1 bg-white/10" aria-hidden="true"><div className="h-full bg-[#d9b46b]" style={{ width: `${total*100}%` }}/></div>
    <nav className="relative z-30 mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-wrap gap-4 items-center justify-between">
      <Link href="/experimental" className="inline-flex gap-2 items-center text-sm text-white/70 hover:text-white"><ArrowLeft size={17}/> Design Museum</Link>
      <span className="text-[11px] tracking-[.22em] uppercase text-[#e5c17b]">Experiment 019 / Botanical Motion</span>
      <button type="button" onClick={() => setPauseMotion(v => !v)} aria-pressed={pauseMotion} className="rounded-full border border-white/25 px-3 py-2 text-xs hover:bg-white/10">{pauseMotion ? "Enable motion" : "Pause motion"}</button>
    </nav>

    {/* INTRO / FLOATING BOTANICALS */}
    <section className="relative min-h-[90svh] flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse at 50% 45%, #23402b 0%, #07100b 62%, #060c09 100%)" }}/>
      {herbs.map((herb, i) => <div key={herb.kind} className={`absolute pointer-events-none ${motionOff ? "" : "herb-drift"}`} style={{ width: i%2 ? "clamp(110px,20vw,270px)" : "clamp(130px,23vw,310px)", left: `${[1,74,69,2][i]}%`, top: `${[5,9,59,64][i]}%`, opacity: .45, animationDelay: `${i*-1.3}s`, transform: motionOff ? "none" : `translate3d(0,${y*[.11,-.08,.07,-.1][i]}px,0) rotate(${y*[.018,-.025,.03,-.02][i]}deg)` }}><Botanical kind={herb.kind} color={herb.color}/></div>)}
      <div className="relative z-10 text-center max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d9b46b]/40 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-[#e5c17b]"><Leaf size={15}/> The living botanical atlas</span>
        <h1 className="mt-8 text-5xl sm:text-7xl lg:text-[clamp(5rem,10vw,9rem)] leading-[.95] font-black tracking-[-.07em]">SCROLL INTO <span className="block text-[#e5c17b]">AYURVEDA.</span></h1>
        <p className="mt-8 mx-auto max-w-2xl text-white/70 text-base sm:text-xl leading-relaxed">Begin with the herbs, spices, and wellness rituals you recognize. Scroll deeper to explore their traditional names, preparations, and the questions modern research asks.</p>
        <a href="#story" className="mt-10 inline-flex gap-3 items-center rounded-full bg-[#e5c17b] px-6 py-3 font-bold text-[#182116] hover:bg-[#f4dba2]">Start the journey <ArrowDown size={18}/></a>
      </div>
    </section>

    {/* WORD REVEAL */}
    <section id="story" ref={storyRef} className="relative h-[290svh] bg-[#0a110e]">
      <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-5 overflow-hidden">
        <p className="absolute top-12 text-xs tracking-[.25em] uppercase text-[#e5c17b]">01 / The familiar becomes fascinating</p>
        <div className="absolute w-[min(85vw,650px)] aspect-square rounded-full blur-[100px] bg-emerald-500/10 pointer-events-none"/>
        <RevealWords text="You know the golden spice. But have you met Haridra, its traditional identity, and the many questions behind its use?" progress={story}/>
        <div className="absolute bottom-12 w-52 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#e5c17b]" style={{ width: `${story*100}%` }}/></div>
      </div>
    </section>

    {/* GALLERY */}
    <section ref={galleryRef} className="relative h-[330svh] bg-[#0d1811]">
      <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden py-16">
        <div className="px-6 sm:px-12 mb-8"><p className="text-xs tracking-[.25em] text-[#e5c17b] uppercase">02 / A moving herbarium</p><h2 className="mt-3 text-3xl sm:text-5xl font-black">Four plants. Four stories.</h2><p className="mt-3 text-white/60 text-sm">Vertical scrolling moves the specimen gallery horizontally.</p></div>
        <div className="flex gap-5 px-[7vw] will-change-transform" style={{ transform: `translate3d(-${gallery*67}%,0,0)` }}>
          {herbs.map((herb, i) => <article key={herb.kind} className="relative shrink-0 w-[min(75vw,340px)] min-h-[390px] rounded-3xl border border-white/15 bg-[#15251b] p-7 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 20%,${herb.color},transparent 65%)` }}/>
            <span className="relative text-xs text-white/45">SPECIMEN 0{i+1}</span>
            <Botanical kind={herb.kind} color={herb.color} className="relative h-44 w-full my-2"/>
            <h3 className="relative text-2xl font-black">{herb.name}</h3><p className="relative text-[#e5c17b]">{herb.sanskrit}</p><p className="relative italic text-white/50 text-xs mt-1">{herb.botanical}</p><p className="relative text-sm text-white/70 mt-4">{herb.note}</p>
          </article>)}
        </div>
        <div className="px-6 sm:px-12 mt-8 flex items-center gap-2 text-white/50 text-xs"><MoveHorizontal size={17}/> Scroll to explore all four specimens</div>
      </div>
    </section>

    {/* INTERACTIVE BOTANICAL STATION */}
    <section className="relative px-5 py-28 bg-[#08110d]" id="specimen-lab">
      <div className="mx-auto max-w-6xl"><div className="flex flex-wrap justify-between items-end gap-5 mb-8"><div><p className="text-[#e5c17b] text-xs uppercase tracking-[.25em]">03 / Hands-on discovery</p><h2 className="mt-3 text-4xl sm:text-6xl font-black">Choose a specimen.</h2></div><button type="button" onClick={() => setShowLabels(v=>!v)} className="rounded-xl border border-white/20 px-4 py-2 text-sm">{showLabels ? "Hide" : "Show"} scientific labels</button></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="group" aria-label="Select a botanical specimen">{herbs.map((herb,i)=><button key={herb.kind} type="button" onClick={()=>setSelected(i)} aria-pressed={selected===i} className={`rounded-2xl border p-3 text-left transition-colors ${selected===i ? "border-[#e5c17b] bg-[#e5c17b]/15" : "border-white/15 bg-white/5 hover:border-white/40"}`}><Botanical kind={herb.kind} color={herb.color} className="w-full h-24"/><span className="block text-sm font-bold">{herb.name}</span></button>)}</div>
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-white/15 bg-[#132119] p-6 sm:p-10"><div className="relative min-h-72 flex items-center justify-center rounded-3xl bg-black/20"><div className="absolute inset-10 rounded-full blur-3xl opacity-20" style={{background:selectedHerb.color}}/><Botanical kind={selectedHerb.kind} color={selectedHerb.color} className={`relative w-64 h-64 ${motionOff?"":"herb-drift"}`}/></div><div><p className="text-xs text-[#e5c17b] uppercase tracking-widest">Botanical study / {String(selected+1).padStart(2,"0")}</p><h3 className="text-4xl sm:text-5xl font-black mt-3">{selectedHerb.name}</h3>{showLabels&&<><p className="text-xl text-[#e5c17b] mt-2">{selectedHerb.sanskrit}</p><p className="italic text-white/50 mt-1">{selectedHerb.botanical}</p></>}<p className="text-white/70 mt-6 leading-relaxed">{selectedHerb.note}</p><p className="text-white/50 text-sm mt-5">Explore how identity, plant part, preparation, dose, and evidence can change the meaning of a botanical claim.</p></div></div>
      </div>
    </section>

    {/* EXTRACTION VISUALIZATION */}
    <section ref={extractRef} className="relative h-[300svh] bg-[#10160f]">
      <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-5 overflow-hidden">
        <p className="absolute top-10 text-xs text-[#e5c17b] uppercase tracking-[.25em]">04 / Scroll-controlled extraction</p>
        <h2 className="text-center text-3xl sm:text-5xl font-black mb-6">From plant to preparation.</h2>
        <div className="relative w-[min(90vw,480px)] h-[min(53vh,430px)] flex items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{transform:`translateX(-50%) translateY(${extraction*110}px) rotate(${extraction*180}deg)`, opacity:1-extraction*.85}}><Botanical kind="turmeric" color="#e8aa39" className="w-32 h-32"/></div>
          <svg viewBox="0 0 320 310" className="relative w-full h-full" aria-label="Illustrated laboratory vessel filling with a golden botanical preparation"><defs><clipPath id="vessel-clip"><path d="M93 80 L93 185 Q93 259 160 259 Q227 259 227 185 L227 80Z"/></clipPath><linearGradient id="liquid" x1="0" x2="1"><stop stopColor="#b77a23"/><stop offset=".5" stopColor="#f5c65e"/><stop offset="1" stopColor="#c18a27"/></linearGradient></defs><path d="M93 80 L93 185 Q93 259 160 259 Q227 259 227 185 L227 80" fill="#fff" fillOpacity=".04" stroke="#c4d5b8" strokeWidth="5"/><g clipPath="url(#vessel-clip)"><rect x="90" y={259-extraction*165} width="140" height={extraction*165+10} fill="url(#liquid)" opacity=".9"/><path d={`M90 ${259-extraction*165} Q125 ${249-extraction*165} 160 ${259-extraction*165} T230 ${259-extraction*165}`} stroke="#ffe0a0" fill="none" strokeWidth="3"/></g><path d="M80 80 H240" stroke="#c4d5b8" strokeWidth="7" strokeLinecap="round"/>{[0,1,2,3,4,5].map(i=><circle key={i} cx={116+i*18} cy={210-(extraction*80)-(i%3)*19} r={3+(i%3)} fill="#fff1bf" opacity={extraction*.85}/>)}</svg>
        </div>
        <p className="text-white/65 text-center max-w-xl text-sm sm:text-base">A visual metaphor for processing—not a demonstration of extraction efficiency, bioavailability, or medical effectiveness.</p>
        <p className="mt-5 text-[#e5c17b] font-mono">Visual progress: {Math.round(extraction*100)}%</p>
      </div>
    </section>

    {/* KNOWLEDGE BRIDGE */}
    <section ref={bridgeRef} className="relative h-[260svh] bg-[#0b1414]">
      <div className="sticky top-0 h-svh flex flex-col justify-center px-5 overflow-hidden"><div className="mx-auto max-w-6xl w-full"><p className="text-xs text-[#e5c17b] tracking-[.25em] uppercase">05 / A bridge between worlds</p><h2 className="text-3xl sm:text-6xl font-black mt-4 mb-10">From familiar to profound.</h2><div className="grid md:grid-cols-2 gap-5">
        <div className="rounded-3xl border border-[#e5c17b]/30 p-7 sm:p-10 bg-[#302315]/50" style={{transform:motionOff?"none":`translateY(${(1-bridge)*65}px)`,opacity:motionOff?1:.35+bridge*.65}}><Sun className="text-[#e5c17b] mb-5" size={32}/><p className="text-xs uppercase tracking-widest text-[#e5c17b]">What you recognize</p><h3 className="text-3xl font-bold mt-3">Golden milk & herbal teas</h3><p className="mt-4 text-white/65">Familiar ingredients, flavors, daily rituals, and wellness trends.</p></div>
        <div className="rounded-3xl border border-emerald-400/30 p-7 sm:p-10 bg-[#102d24]/70" style={{transform:motionOff?"none":`translateY(${(1-bridge)*-65}px)`,opacity:motionOff?1:.35+bridge*.65}}><BookOpen className="text-emerald-300 mb-5" size={32}/><p className="text-xs uppercase tracking-widest text-emerald-300">What you can discover</p><h3 className="text-3xl font-bold mt-3">Dravyaguna & classical context</h3><p className="mt-4 text-white/65">Traditional classifications, preparation methods, source texts, and critical evaluation of evidence.</p></div>
      </div><div className="mt-8 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-emerald-400" style={{width:`${bridge*100}%`}}/></div></div></div>
    </section>

    {/* DAILY RHYTHM */}
    <section className="bg-[#0c1712] px-5 py-24"><div className="mx-auto max-w-6xl"><p className="text-xs text-[#e5c17b] tracking-[.25em] uppercase">06 / More than ingredients</p><h2 className="text-4xl sm:text-6xl font-black mt-3 mb-10">A whole daily rhythm.</h2><div className="grid sm:grid-cols-3 gap-5">{[{icon:Sun,title:"Morning",desc:"Explore how daily routines are described in classical Ayurveda."},{icon:Wind,title:"Movement",desc:"Compare traditional practices with modern wellbeing guidance."},{icon:Moon,title:"Rest",desc:"Discover the role of sleep and regularity without exaggerated promises."}].map((item,i)=><article key={item.title} className="rounded-3xl bg-white/5 border border-white/15 p-8"><item.icon size={36} className="text-[#e5c17b] mb-6"/><span className="block text-xs text-white/40">0{i+1} / Daily living</span><h3 className="text-2xl font-bold mt-2">{item.title}</h3><p className="text-white/65 text-sm mt-4 leading-relaxed">{item.desc}</p></article>)}</div></div></section>

    {/* FINALE */}
    <section ref={finaleRef} className="relative h-[220svh] bg-[#060c09]"><div className="sticky top-0 h-svh flex items-center justify-center px-5 overflow-hidden"><div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(circle at 50% 50%,rgba(205,165,83,${finale*.22}),transparent 62%)`}}/><div className="relative text-center max-w-5xl" style={{transform:motionOff?"none":`scale(${.75+finale*.25})`,opacity:motionOff?1:clamp(finale*2)}}><Sparkles className="mx-auto text-[#e5c17b] mb-8" size={44}/><p className="text-xs text-[#e5c17b] uppercase tracking-[.25em]">07 / Your next chapter</p><h2 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[.98]">THE PLANT IS <span className="block text-[#e5c17b]">ONLY THE BEGINNING.</span></h2><p className="text-white/65 mt-8 text-lg">Explore Ayurveda with curiosity, context, and evidence.</p><div className="mt-10 flex flex-wrap gap-4 justify-center"><Link href="/atreya" className="inline-flex items-center gap-2 rounded-xl bg-[#e5c17b] px-6 py-4 font-bold text-[#142016] hover:bg-[#f3d99f]">Explore Ayurveda Global <ArrowRight size={18}/></Link><Link href="/experimental" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-bold hover:bg-white/10">Back to experiments</Link></div></div></div></section>
    <footer className="border-t border-white/10 px-5 py-8 text-center text-white/45 text-xs">ATREYA Experimental Lab · Experiment 019 · Educational visualization only</footer>
  </main>;
}
