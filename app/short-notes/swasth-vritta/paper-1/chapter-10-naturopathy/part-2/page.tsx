"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle } from "@/components/HandwrittenCanvas";
import { NText, NAccent } from "@/components/NoteElements";

export default function NaturopathyPart2() {
  return (
    <HandwrittenCanvas>
      {/* 
        =========================================================
        NOTEBOOK PAPER WRAPPER (Perfect 32px alignment)
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
              Part 2: Natural Elements as Medicine
            </span>
          </div>

          {/* ========================================== */}
          {/* 4. MUD THERAPY                               */}
          {/* ========================================== */}
          <div className="mb-[32px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] m-0 underline decoration-[var(--theme-border)]/30 underline-offset-8">
              4. Therapeutic effects of Mud therapy (मिट्टी चिकित्सा)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium">
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Concept:</span> Mud represents the 'Prithvi' (Earth) element. In this therapy, clean, pure mud (like clay) is made into a paste and applied to the body as mud packs or mud baths.
              </p>
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Simple Explanation:</span> मिट्टी में चीजों को सोखने (absorb करने) की बहुत अच्छी ताकत होती है। जब इसे शरीर पर लगाया जाता है, तो यह अंदर की गर्मी और बीमारियों को बाहर खींच लेती है।
              </p>

              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] block mb-[32px]">
                Therapeutic Effects (फायदे):
              </span>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Cooling Effect:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">It is naturally very cooling. It reduces body heat and brings down inflammation (शरीर की अतिरिक्त गर्मी और सूजन को कम करती है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Toxin Absorption:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Mud pulls out toxins and impurities from the skin (यह रोमछिद्रों के जरिए शरीर के toxins को सोख लेती है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Improves Digestion:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Applying a mud pack on the abdomen helps cure constipation, acidity, and stomach aches.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Relieves Pain:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Good for joint pains, headaches, and relaxing tense muscles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider (Creates a beautiful 2-line gap for next major heading) */}
          <div className="w-full h-[64px] mb-[32px] relative flex flex-col items-center justify-center">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mt-[32px]"></div>
          </div>

          {/* ========================================== */}
          {/* 5. SUN BATH                                  */}
          {/* ========================================== */}
          <div className="mb-[32px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] m-0 underline decoration-[var(--theme-border)]/30 underline-offset-8">
              5. Therapeutic effects of Sun bath (सूर्य स्नान)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium">
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Concept:</span> Sun bath represents the 'Agni' (Fire) element. It involves exposing the bare body to mild morning sunlight to absorb its healing energy.
              </p>
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Simple Explanation:</span> सुबह की हल्की धूप में बैठना शरीर के लिए एक प्राकृतिक टॉनिक (natural tonic) का काम करता है। यह शरीर को ऊर्जा (energy) देता है और कीटाणुओं को मारता है।
              </p>

              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] block mb-[32px]">
                Therapeutic Effects (फायदे):
              </span>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Natural Disinfectant:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Sunlight kills harmful bacteria and fungi on the skin (धूप एक प्राकृतिक कीटाणुनाशक है जो स्किन इन्फेक्शन को दूर करती है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Vitamin D Source:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">It is the best way to get Vitamin D, which makes our bones and teeth strong (हड्डियों को मजबूत बनाता है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Improves Circulation:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Heat from the sun improves blood circulation and lowers blood pressure.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Boosts Immunity:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Regular sun baths increase the body's resistance to diseases.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className="w-full h-[64px] mb-[32px] relative flex flex-col items-center justify-center">
            <div className="w-1/2 h-[2px] bg-[var(--theme-border)]/30 mt-[32px]"></div>
          </div>

          {/* ========================================== */}
          {/* 6. FASTING THERAPY                           */}
          {/* ========================================== */}
          <div className="mb-[32px]">
            <h3 className="font-bold text-lg md:text-2xl text-[var(--theme-accent)] mb-[32px] leading-[32px] m-0 underline decoration-[var(--theme-border)]/30 underline-offset-8">
              6. Fasting therapy - its types and benefits (उपवास चिकित्सा)
            </h3>
            
            <div className="text-sm md:text-lg opacity-90 font-medium">
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Concept:</span> Fasting represents the 'Akasha' (Space/Ether) element. It means voluntarily stopping the intake of solid food for a specific period to give the digestive system a complete rest.
              </p>
              <p className="leading-[32px] mb-[32px] m-0">
                <span className="font-bold text-[var(--theme-accent)]">Simple Explanation:</span> आमतौर पर हमारे शरीर की ज्यादातर ऊर्जा (energy) खाना पचाने में खर्च हो जाती है। जब हम उपवास करते हैं, तो शरीर को आराम मिलता है और वह उस ऊर्जा का इस्तेमाल खुद की मरम्मत (repair) और सफाई (detoxification) में करता है।
              </p>

              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] block mb-[32px]">
                Types of Fasting (उपवास के प्रकार):
              </span>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Water Fasting (जल उपवास):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Drinking only water throughout the day.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Juice Fasting (रस आहार):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Taking only fresh fruit or vegetable juices.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Fruit Fasting (फलाहार):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Eating only fresh, juicy fruits.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Partial/Intermittent Fasting (आंशिक उपवास):</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Skipping one meal (like dinner) or fasting for a specific window of hours.</p>
                </div>
              </div>

              <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px] block mb-[32px]">
                Benefits of Fasting (उपवास के फायदे):
              </span>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Deep Detoxification:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">It flushes out accumulated waste and toxins from the body (शरीर की गहरी सफाई होती है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Digestive Rest:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Cures indigestion, gas, and gives the stomach and liver time to heal.</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Mental Clarity:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Makes the mind calm, sharp, and peaceful (मन शांत होता है और एकाग्रता बढ़ती है).</p>
                </div>
              </div>

              <div className="mb-[32px]">
                <div className="grid grid-cols-[24px_1fr] md:grid-cols-[40px_1fr]">
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">•</span>
                  <span className="font-bold text-[var(--theme-accent)] text-base md:text-xl leading-[32px]">Weight Management:</span>
                </div>
                <div className="pl-[24px] md:pl-[40px]">
                  <p className="leading-[32px] m-0">Helps in shedding unnecessary fat naturally.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </HandwrittenCanvas>
  );
}
