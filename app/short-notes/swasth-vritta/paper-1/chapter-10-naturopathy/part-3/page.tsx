"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function NaturopathyPart3() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        NOTEBOOK PAPER WRAPPER (Perfect 32px Grid & Handwriting)
        =========================================================
      */}
      <div
        className="w-full min-h-screen relative overflow-hidden"
        style={{
          fontFamily: "var(--font-kalam), 'Patrick Hand', cursive, sans-serif",
          backgroundImage: `
            linear-gradient(90deg, transparent 56px, rgba(239, 68, 68, 0.45) 56px, rgba(239, 68, 68, 0.45) 58px, transparent 58px),
            linear-gradient(transparent 31px, var(--theme-border) 31px, var(--theme-border) 32px)
          `,
          backgroundSize: "100% 100%, 100% 32px",
          backgroundAttachment: "local",
          backgroundPosition: "0 0, 0 6px", 
        }}
      >
        <div className="pl-[72px] sm:pl-[84px] pr-4 sm:pr-8 py-[32px] w-full relative">
          
          {/* FIXED BADGE */}
          <div 
            className="absolute top-[32px] right-4 md:right-8 border-2 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-sm font-bold shadow-sm border-[var(--theme-accent)] bg-[var(--theme-bg)] leading-[20px] md:leading-[24px] z-10"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            Swasth<br/><span className="text-[var(--theme-accent)]">Vritta</span>
          </div>

          {/* Top Navigation */}
          <div className="mb-[32px] h-[32px] flex items-center">
            <Link 
              href="/short-notes/swasth-vritta/paper-1/chapter-10-naturopathy" 
              className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-xs md:text-base leading-[32px]"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Chapter 10
            </Link>
          </div>

          {/* Main Chapter Title */}
          <div className="relative w-full text-center min-h-[64px] mb-[32px] flex flex-col justify-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold inline-block relative mx-auto leading-[32px] px-2 m-0">
              प्राकृतिक चिकित्सा (Nature Cure)
              <div className="absolute -bottom-1 left-0 w-full h-[2px] transform -rotate-1 bg-[var(--theme-border)] opacity-80"></div>
              <div className="absolute -bottom-2 left-2 w-[95%] h-[1px] transform rotate-1 bg-[var(--theme-border)] opacity-80"></div>
            </h1>
          </div>

          <div className="text-center h-[32px] mb-[32px]">
            <span className="inline-block px-2 border-b-2 border-dashed border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold text-xs md:text-base tracking-widest uppercase transform -rotate-1 leading-[30px] bg-white/50 dark:bg-black/50">
              Part 3: Water and Touch Therapies
            </span>
          </div>

          {/* ========================================== */}
          {/* 7. HYDROTHERAPY                              */}
          {/* ========================================== */}
          <div className="mb-[32px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] m-0 underline decoration-[var(--theme-border)]/30 underline-offset-8">
              7. Hydrotherapy (जल चिकित्सा)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium">
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Concept:</span> Hydrotherapy represents the 'Jala' (Water) element. It is the use of water in different forms (liquid, ice, or steam) and at varying temperatures to treat diseases and maintain health.
              </p>
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Simple Explanation:</span> जल ही जीवन है। पानी का अलग-अलग तापमान (ठंडा, गरम, या गुनगुना) शरीर पर अलग-अलग असर डालता है। पानी के इसी गुण का इस्तेमाल करके बीमारियों को ठीक करना जल चिकित्सा कहलाता है।
              </p>

              {/* TRADITIONAL HEADING STYLE ADDED HERE */}
              <div className="text-center mb-[32px]">
                <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] inline-block">
                  -: तापमान के आधार पर पानी के प्रकार :-
                </span>
              </div>

              {/* TRADITIONAL NUMBERING ① ② ③ */}
              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">①</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Cold Water (ठंडा पानी):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Stimulates the body, wakes up the nervous system, and reduces fever. (यह शरीर को चुस्त बनाता है और बुखार की गर्मी को कम करता है)।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">②</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Hot Water/Steam (गर्म पानी/भाप):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Relaxes the muscles, opens up pores, and promotes sweating to remove toxins. (यह मांसपेशियों को आराम देता है और पसीने के जरिए गंदगी बाहर निकालता है)।</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">③</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Neutral Water (गुनगुना पानी):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Matches body temperature; it is very calming and soothing for the nervous system.</p>
                </div>
              </div>

              {/* STANDARD BULLET LIST */}
              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] block mb-[32px]">
                Therapeutic Effects of Hydrotherapy (जल चिकित्सा के फायदे):
              </span>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Improves Circulation:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Alternating hot and cold water treatments strongly boost blood circulation.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Pain Relief:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Hot water bags or warm baths relieve joint stiffness, muscle spasms, and backaches (दर्द और अकड़न में आराम देता है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Reduces Fever:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Cold compresses (ठंडे पानी की पट्टी) on the forehead and abdomen safely bring down high body temperature.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Deep Cleansing:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Steam baths open skin pores and flush out deeply trapped toxins through heavy sweating (रोमछिद्र खोलकर शरीर को डिटॉक्स करता है).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider (Creates a beautiful 2-line gap for next major heading) */}
          <div className="w-full h-[64px] mb-[32px] relative flex flex-col items-center justify-center">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mt-[32px]"></div>
          </div>

          {/* ========================================== */}
          {/* 8. MASSAGE THERAPY                           */}
          {/* ========================================== */}
          <div className="mb-[32px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] m-0 underline decoration-[var(--theme-border)]/30 underline-offset-8">
              8. Therapeutic effects of Massage (मालिश चिकित्सा के फायदे)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium">
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Concept:</span> Massage is a hands-on therapy that involves rubbing, pressing, and manipulating the skin, muscles, and joints, often using medicated or natural oils.
              </p>
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Simple Explanation:</span> मालिश शरीर की मांसपेशियों (muscles) को आराम देने और खून के बहाव (blood circulation) को बेहतर करने का सबसे पुराना और असरदार तरीका है। यह शरीर और मन दोनों की थकान मिटाती है।
              </p>

              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] block mb-[32px]">
                Therapeutic Effects (फायदे):
              </span>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Relieves Muscle Tension:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">It removes stiffness, cramps, and physical fatigue (यह मांसपेशियों की अकड़न और शरीर की थकावट को पूरी तरह दूर करती है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Boosts Blood & Lymph Flow:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Massage pushes stagnant blood towards the heart, improving oxygen supply to all body parts.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Tones the Body:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Regular massage tones the skin, makes it glow, and strengthens the underlying muscles (स्किन में चमक आती है और मांसपेशियां मजबूत होती हैं).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Calms the Nervous System:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">A good massage lowers stress hormones, promotes deep sleep, and reduces anxiety (दिमाग को शांत करके अच्छी नींद लाती है).</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
