"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowLeft,
  ArrowRight,
  Sun,
  Droplets,
  Wind,
  Sparkles,
  Smile,
  ShieldCheck,
  Eye,
  HeartHandshake,
  Flame,
  Bath,
  CheckCircle2,
  AlertTriangle,
  Brain,
  Clock,
  RotateCcw,
} from "lucide-react";

// Load engaging, high-readability editorial fonts specifically for Global Learners
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

type SubTab = "habit" | "science" | "safety";
type PrakritiType = "vata" | "pitta" | "kapha";

interface JourneyStep {
  id: number;
  time: string;
  sanskrit: string;
  pronunciation: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  quickAction: string;
  habitPoints: { label: string; text: string }[];
  sciencePoints: { label: string; text: string }[];
  safetyTitle: string;
  safetyPoints: string[];
  shloka?: { sanskrit: string; meaning: string };
  hasPrakritiWidget?: boolean;
  hasPowderTable?: boolean;
}

const DINACHARYA_JOURNEY: JourneyStep[] = [
  {
    id: 1,
    time: "FOUNDATION",
    sanskrit: "Swasthavritta & Vihara",
    pronunciation: "Swas-tha-vrit-ta",
    title: "Why Your Daily Clock Beats Medicine",
    tagline:
      "Before prescribing a single herb, Ayurveda redesigns how you live across a 24-hour cycle to stop disease before it ever starts.",
    icon: ShieldCheck,
    quickAction:
      "Align your meals, sleep, and hygiene with the sun's clock (Niyata Kala Vihara) and never suppress natural bodily urges (Aniyata Kala Vihara).",
    habitPoints: [
      {
        label: "Time-Bound Routines (Niyata Kala Vihara)",
        text: "Habits performed at fixed biological hours every day—specifically your Daily Routine (Dinacharya) and Seasonal Routine (Ritucharya).",
      },
      {
        label: "Body-Signal Routines (Aniyata Kala Vihara)",
        text: "Listening to immediate body needs: never suppressing natural urges like sneeze, sleep, or bowel movements (Adharaniya Vega), and avoiding pathogens (Bhutadi Asparshana).",
      },
    ],
    sciencePoints: [
      {
        label: "1. Primordial Prevention (Stopping Risk Factors)",
        text: "Practicing Dinacharya and ethical living (Sadvritta) from childhood so metabolic risks like obesity or diabetes never develop.",
      },
      {
        label: "2. Primary Prevention (Pre-Disease Shield)",
        text: "Using seasonal cellular detox (Ritu Shodhana), longevity herbs (Rasayana), and trigger avoidance (Nidana Parivarjana).",
      },
      {
        label: "3. Secondary & Tertiary Prevention",
        text: "Catching imbalances in early sub-clinical stages (Shatkriyakala) with fasting/digestive herbs, and using Panchakarma rehabilitation for advanced conditions.",
      },
    ],
    safetyTitle: "The Golden Rule of Diet & Lifestyle (Ahara & Vihara)",
    safetyPoints: [
      "Wholesome habits (Hitakara) keep your tissues balanced (Dhatusamya). Unwholesome habits at the wrong hour (Ahitakara) confuse your biological clock and trigger chronic inflammation.",
    ],
  },
  {
    id: 2,
    time: "04:30 AM",
    sanskrit: "Brahma Muhurta Jagarana",
    pronunciation: "Brah-ma Moo-hoor-tah",
    title: "Waking in the 'Creator's Window'",
    tagline:
      "Wake up exactly 96 minutes before sunrise—when the atmosphere is rich in pure oxygen and your brain is primed for deep focus.",
    icon: Sun,
    quickAction:
      "Set your alarm ~1.5 hours before local sunrise, pause in bed for 30 seconds, and check if last night's dinner feels completely digested.",
    habitPoints: [
      {
        label: "What is a Muhurta?",
        text: "One Muhurta equals 48 minutes. 'Brahma Muhurta' is the 14th Muhurta of the night—occurring 96 minutes (1 hr 36 mins) before sunrise (roughly 4:00 AM to 5:30 AM).",
      },
      {
        label: "Why This Exact Window?",
        text: "In the quiet pre-dawn hours, ambient pollution is at its lowest, nascent oxygen is abundant, and external sensory noise is zero.",
      },
    ],
    sciencePoints: [
      {
        label: "Master Circadian Reset",
        text: "Waking with approaching dawn synchronizes your brain's suprachiasmatic nucleus (master clock), gently calibrating your morning cortisol awakening response.",
      },
      {
        label: "Serotonin & Melatonin Balance",
        text: "Early morning light exposure boosts daytime serotonin (mood & sharp memory / Smriti) and triggers timely melatonin release at night for deep sleep.",
      },
    ],
    safetyTitle: "Wait! Check Your Stomach First (Jirnajirnam Nirupayan)",
    safetyPoints: [
      "Classical Rule: Only wake up at Brahma Muhurta if your previous night's dinner is 100% digested!",
      "If you ate late and still feel heavy, bloated, or Indigested (Ajirna), sleep a little longer until digestion finishes so you don't aggravate Vata.",
    ],
  },
  {
    id: 3,
    time: "05:00 AM",
    sanskrit: "Usha Jalapana",
    pronunciation: "Oo-sha Ja-la-paa-na",
    title: "The Copper Vessel Morning Flush",
    tagline:
      "Before you even touch your toothbrush, hydrate your internal organs with water rested overnight in a copper or clay vessel.",
    icon: Droplets,
    quickAction:
      "Drink 2 to 3 glasses (640–750 ml) of room-temperature water stored overnight in a pure copper cup right after getting out of bed.",
    habitPoints: [
      {
        label: "How Much to Drink?",
        text: "Classically measured as '8 Prasriti'—which equals roughly 640 ml to 750 ml (2 to 3 glasses), adjusted comfortably to your capacity.",
      },
      {
        label: "Which Vessel is Best?",
        text: "Store pure water overnight in a copper tumbler, earthen clay pot, or clean glass bottle. Drink it BEFORE brushing your teeth.",
      },
    ],
    sciencePoints: [
      {
        label: "Triggers the Gastro-Colic Reflex",
        text: "Gentle stomach distension from morning water sends an immediate neural signal to your colon, triggering a smooth, effortless morning bowel movement.",
      },
      {
        label: "Renal & Metabolic Detox",
        text: "Flushes overnight kidney metabolites, prevents constipation (Vibandha), piles (Arsha), and bloating (Shotha), and slows cellular aging (Jara).",
      },
    ],
    safetyTitle: "Water Temperature Tip",
    safetyPoints: [
      "Avoid ice-cold refrigerator water in the morning—it shocks your digestive fire (Agni) and constricts gut blood vessels. Room-temperature or slightly lukewarm water is ideal.",
    ],
  },
  {
    id: 4,
    time: "05:15 AM",
    sanskrit: "Malatyaga in Vata Kaala",
    pronunciation: "Ma-la-tyaa-ga",
    title: "Effortless Morning Elimination",
    tagline:
      "Use the body's natural pre-dawn 'expulsion window' to clear digestive waste before toxins can be reabsorbed.",
    icon: Wind,
    quickAction:
      "Sit calmly for bowel evacuation in the early morning without straining or scrolling on your phone.",
    habitPoints: [
      {
        label: "The Apana Vayu Window",
        text: "The last third of the night and early dawn are governed by Vata Dosha (specifically pelvic Apana Vayu), whose natural job is downward elimination.",
      },
      {
        label: "Never Force, Never Hold",
        text: "Respond immediately when the morning urge arrives, but never strain forcefully (Vegaudirana), which damages pelvic nerves and causes hemorrhoids.",
      },
    ],
    sciencePoints: [
      {
        label: "Stops Endotoxin Reabsorption (Ama)",
        text: "Clearing the colon early prevents stagnant fecal waste from fermenting and leaking inflammatory toxins (Ama) back into the bloodstream.",
      },
      {
        label: "Ignites True Morning Hunger",
        text: "Creates physical lightness in the gut (Koshtha Laghava), sharpens sense organs, and naturally ignites your digestive enzymes (Agni Deepana).",
      },
    ],
    safetyTitle: "Modern Bathroom Trap",
    safetyPoints: [
      "Reading news or scrolling social media on the toilet distracts the parasympathetic nervous system and prolongs sitting time, increasing hemorrhoid risk.",
    ],
  },
  {
    id: 5,
    time: "05:30 AM",
    sanskrit: "Mukhaprakshalana",
    pronunciation: "Moo-kha-prak-sha-la-na",
    title: "Botanical Face & Eye Hydro-Refresh",
    tagline:
      "Wake up your cranial nerves and protect your skin's natural lipid barrier without harsh foaming detergents.",
    icon: Sparkles,
    quickAction:
      "Splash your face and closed eyes with cool water in summer or lukewarm water in winter, using mild herbal cleansers instead of foaming sulfates.",
    habitPoints: [
      {
        label: "Seasonal Water Temperature",
        text: "Use cool water in hot summer/autumn months to calm Pitta, and lukewarm water in winter to prevent Vata dryness.",
      },
      {
        label: "Classical Herbal Infusions",
        text: "Traditionally performed using cooling decoctions like Amalaki (Indian Gooseberry) water, Lodhra paste, or Ksheerivriksha bark infusions.",
      },
    ],
    sciencePoints: [
      {
        label: "Ocular Nerve Recovery",
        text: "Gentle cool splashes over the eyes relieve morning microvascular congestion, clear sleep discharge, and refresh the optic nerve.",
      },
      {
        label: "Acne & Sebum Balance",
        text: "Prevents clogged pores and inflammatory breakouts (Mukhadushika) while boosting natural facial circulation (Mukha Kanti).",
      },
    ],
    safetyTitle: "Modern Face Wash Warning (SLS & Parabens)",
    safetyPoints: [
      "Commercial foaming face washes loaded with Sodium Lauryl Sulfate (SLS) and parabens strip your skin's acid mantle, causing dry patches and rebound oiliness.",
      "Choose pH-balanced, sulfate-free, or botanical powder cleansers.",
    ],
  },
  {
    id: 6,
    time: "05:45 AM",
    sanskrit: "Dantadhavana & Jihwanirlekhana",
    pronunciation: "Dan-ta-dhaa-va-na",
    title: "Herbal Brushing & Copper Tongue Scraping",
    tagline:
      "Why sweet minty toothpastes miss the mark—and how bitter botanicals and metal scrapers transform oral immunity.",
    icon: Smile,
    quickAction:
      "Brush gently at a 45° angle with a soft brush (herbal paste), then glide a curved copper or steel scraper 5 times across your tongue.",
    habitPoints: [
      {
        label: "1. Botanical Brushing (Dantadhavana)",
        text: "Traditionally done twice daily using a fresh 12-Angula (~9 inch) twig as thick as your pinky finger, chewed into soft bristles. Best tastes: Bitter (Neem), Astringent (Acacia/Khadira), or Pungent (Karanja).",
      },
      {
        label: "2. Tongue Scraping (Jihwanirlekhana)",
        text: "Use a smooth, curved 10-Angula metal scraper (copper, silver, brass, or stainless steel) to gently clear the white morning coating from back to front.",
      },
    ],
    sciencePoints: [
      {
        label: "Eliminates Halitosis at the Root",
        text: "75% of morning bad breath comes from anaerobic bacteria hiding at the back of the tongue. Scraping removes this biofilm (Mala) and wakes up your taste buds (Ruchi).",
      },
      {
        label: "Modified Bass Brushing Technique",
        text: "Modern dentistry aligns with gentle gum care: angle soft bristles at 45° toward the gumline using tiny circular vibrations rather than harsh horizontal scrubbing.",
      },
    ],
    safetyTitle: "Copper vs. Plastic & When NOT to Brush With Twigs",
    safetyPoints: [
      "Never use plastic tongue scrapers—microscopic grooves harbor bacteria. Copper and steel are naturally antibacterial!",
      "Avoid harsh twig brushing during facial paralysis (Ardita), acute fever, severe indigestion, vomiting, asthma, or active mouth ulcers.",
    ],
  },
  {
    id: 7,
    time: "06:00 AM",
    sanskrit: "Gandusha, Kavala & Tambula",
    pronunciation: "Gan-doo-sha & Ka-va-la",
    title: "Oil Pulling & Microbiome Defense",
    tagline:
      "Nourish your gums and vocal cords with warm sesame oil instead of nuking your mouth's good bacteria with alcohol rinses.",
    icon: HeartHandshake,
    quickAction:
      "Swish 1 tablespoon of warm sesame or coconut oil in your mouth for 3–5 minutes while preparing your morning tea, then spit it into the trash.",
    habitPoints: [
      {
        label: "Gandusha vs. Kavala (What's the Difference?)",
        text: "Gandusha is filling the mouth 100% full with warm oil/decoction and holding it still until your eyes water slightly. Kavala is filling it 3/4th full and actively swishing/gargling.",
      },
      {
        label: "Post-Meal Herbal Leaf (Tambula Sevana)",
        text: "Chewing a fresh Betel leaf with cardamom, clove, nutmeg, and camphor after meals stimulates digestive enzymes and clears throat mucus.",
      },
    ],
    sciencePoints: [
      {
        label: "Lipid Saponification of Plaque",
        text: "Swishing warm sesame oil (Tila Taila) binds to fat-soluble bacterial membranes, strengthening the jaw (Hanu Bala), voice, and tooth enamel against sensitivity (Dantaharsha).",
      },
      {
        label: "Protects Your Nitric Oxide Pathway",
        text: "Unlike chemical mouthwashes, oil pulling preserves beneficial oral bacteria that help regulate healthy blood pressure.",
      },
    ],
    safetyTitle: "2 Major Modern Traps: Chemical Mouthwash & Gutkha",
    safetyPoints: [
      "Trap 1 (Alcohol & Chlorhexidine Rinses): Long-term use stains teeth and kills beneficial oral bacteria.",
      "Trap 2 (Commercial Pan Masala / Gutkha): Classical Tambula has ZERO tobacco. Modern Gutkha contains cured tobacco and heavy lime, causing Oral Submucous Fibrosis (OSMF) and oral cancer!",
    ],
  },
  {
    id: 8,
    time: "06:15 AM",
    sanskrit: "Anjana, Nasya & Dhoomapana",
    pronunciation: "Pra-ti-mar-sha Nas-ya",
    title: "The Nose-to-Brain & Digital Eye Shield",
    tagline:
      "'Nasa Hi Shiraso Dwaram' — The nose is the direct doorway to the brain. Protect your eyes, sinuses, and cranial nerves.",
    icon: Eye,
    quickAction:
      "Lubricate each nostril with 2 drops of warm sesame oil (or Anu Taila) using your clean pinky finger or a dropper every morning.",
    habitPoints: [
      {
        label: "1. Daily Nasal Drops (Pratimarsha Nasya)",
        text: "Instill 2 drops (Dwi-Bindu) of Anu Taila, Shadbindu Taila, or pure sesame oil into each nostril. Safe for all ages (from babies to seniors) in any season!",
      },
      {
        label: "2. Soothing Eye Care (Anjana)",
        text: "Eyes are fiery (Pitta) and vulnerable to mucus stagnation (Kapha). Mild Sauveeranjana cools digital eye strain for coders, drivers, and students.",
      },
      {
        label: "3. Herbal Vapor Inhalation (Prayogika Dhoomapana)",
        text: "Inhaling mild aromatic fumes of turmeric, cardamom, and sandalwood through the nose and exhaling strictly through the mouth to clear sinus heaviness.",
      },
    ],
    sciencePoints: [
      {
        label: "Olfactory & Trigeminal Brain Pathway",
        text: "Lipid drops applied to the nasal mucosa coats nerve endings, relieves neck stiffness (Manyastambha) and migraines, and prevents premature graying/hair fall.",
      },
      {
        label: "Pollution & Dust Barrier",
        text: "Acts as a natural microscopic filter for teachers, singers, commuters, and construction workers exposed to urban smog.",
      },
    ],
    safetyTitle: "Crucial Safety Rules & The Hookah/Vape Myth",
    safetyPoints: [
      "Golden Rule of Herbal Smoke: Inhale via the nose, EXHALE ONLY VIA THE MOUTH (पिबेन्मुखेन च त्यजेत्). Exhaling smoke through the nose damages eyesight!",
      "Tobacco & Hookah Warning: Cigarettes, vapes, and Hookahs contain nicotine, tar, and heavy metals. Passing smoke through Hookah water does NOT filter out carcinogens!",
    ],
  },
  {
    id: 9,
    time: "06:30 AM",
    sanskrit: "Abhyanga (Oil Massage)",
    pronunciation: "Abh-yan-ga",
    title: "Warm Oil Self-Massage & Nervous System Reset",
    tagline:
      "Spend 10 minutes massaging warm oil into your skin before your shower—or target the 3 non-negotiable nerve hubs if you're short on time.",
    icon: Sparkles,
    quickAction:
      "Short on time? Massage warm oil onto just 3 spots before bathing: 1. Crown of your head, 2. Outer ears, and 3. Soles of your feet.",
    shloka: {
      sanskrit:
        "अभ्यंगं आचरेत् नित्यं, स जरा श्रम वातहा। दृष्टि प्रसाद पुष्ट्यायुः स्वप्न सुत्वक्त्व दार्ढ्यकृत्।।",
      meaning:
        "Practice oil massage daily: it delays aging, melts fatigue and stress (Vata), sharpens eyesight, nourishes tissues, induces deep sleep, and makes skin radiant and resilient.",
    },
    habitPoints: [
      {
        label: "The 3 Mandatory Zones (If You Have Only 2 Minutes)",
        text: "1. Head (Shiroabhyanga): Prevents headaches, hair fall, and insomnia. 2. Ears (Karna Purana): Prevents tinnitus and jaw/neck tension. 3. Feet (Padabhyanga): Relieves sciatica, cracked heels, and directly nourishes eyesight via foot-to-eye nerve pathways!",
      },
      {
        label: "Choose Your Oil by Season & Climate",
        text: "In Winter or cold climates: Use warming Sesame Oil (Tila Taila) or Mustard Oil. In Summer or hot climates: Use cooling Coconut Oil (Narikela Taila) or Ghee.",
      },
    ],
    sciencePoints: [
      {
        label: "C-Tactile Nerve Fiber Activation",
        text: "Warm rhythmic touch activates specialized cutaneous nerve fibers that lower stress cortisol, release oxytocin, and shift your brain into calm parasympathetic mode.",
      },
      {
        label: "Lymphatic & Microvascular Drainage",
        text: "Nourishes the skin's lipid barrier and accelerates lymphatic clearance of cellular waste after sleep.",
      },
    ],
    safetyTitle: "When to Skip Oil Massage (Contraindications)",
    safetyPoints: [
      "Do NOT perform Abhyanga when you have a fresh fever (Navajwara), active indigestion (Ajirna), heavy sinus congestion (Kapha disorders), or immediately after detox therapies.",
    ],
  },
  {
    id: 10,
    time: "07:00 AM",
    sanskrit: "Vyayama & Udvartana",
    pronunciation: "Vyaa-yaa-ma",
    title: "The 50% Exercise Rule & Herbal Body Scrubs",
    tagline:
      "Why working out to total exhaustion ages your body—and how Ayurveda uses 3 simple body signals to tell you the exact moment to stop.",
    icon: Flame,
    quickAction:
      "Exercise until sweat beads appear on your forehead and you begin breathing deeply through your mouth—then stop and recover!",
    shloka: {
      sanskrit:
        "शरीरचेष्टा या चेष्टा स्थैर्यार्था बलवर्धिनी। देहव्यायामसङ्ख्याता मात्रया तामाचरेत्।।",
      meaning:
        "Any physical movement that builds core stability and strength is called Vyayama. Always practice it in measured moderation.",
    },
    hasPrakritiWidget: true,
    hasPowderTable: true,
    habitPoints: [
      {
        label: "The 3 Signs of 'Half-Capacity' (Ardhashakti Lakshana)",
        text: "Stop exercising the moment you notice: 1. Sweat forming on your forehead, nose tip, and underarms (Svedagama), 2. Deepened breathing (Shwasavriddhi), and 3. Dryness in your throat/mouth (Mukhashosha).",
      },
      {
        label: "Upward Herbal Powder Massage (Pratiloma Gati)",
        text: "After exercise, rubbing dry or oiled herbal powders (like Triphala) upward toward the heart melts stubborn subcutaneous fat and opens clogged pores.",
      },
    ],
    sciencePoints: [
      {
        label: "Metabolic Ignition Without Burnout",
        text: "Exercising to 50% capacity ignites digestive fire (Deeptagnitvam), tones muscle fibers, and creates physical lightness without spiking destructive oxidative stress.",
      },
      {
        label: "Dangers of Over-Training (Ati-Vyayama)",
        text: "Pushing past exhaustion causes tissue breakdown (Kshaya), chronic fatigue, respiratory distress, bleeding tendencies (Raktapitta), and premature aging.",
      },
    ],
    safetyTitle: "Who Should Avoid Heavy Exercise?",
    safetyPoints: [
      "Never exercise immediately after a meal, during acute indigestion, during severe Vata-Pitta aggravation, or in late pregnancy and frail advanced age.",
    ],
  },
  {
    id: 11,
    time: "07:45 AM",
    sanskrit: "Snana, Anulepana & Vastra",
    pronunciation: "Snaa-na & Va-stra",
    title: "The Two-Temperature Shower & Clean Cosmetics",
    tagline:
      "Finish your morning ritual with the cranial temperature rule, breathable botanical scents, and seasonal natural fabrics.",
    icon: Bath,
    quickAction:
      "Wash your body from the neck down with warm water, but ALWAYS switch to cool or room-temperature water when washing your head and hair!",
    shloka: {
      sanskrit:
        "दीपनं वृष्यमायुष्यं स्नानं ऊर्जाबलप्रदम्। कण्डूमलश्रमस्वेदतन्द्रातृड्दाहपाप्मजित्।।",
      meaning:
        "A proper bath ignites appetite, boosts vitality and longevity, and washes away itching, sweat, fatigue, drowsiness, and mental gloom.",
    },
    habitPoints: [
      {
        label: "1. The Head vs. Body Water Rule (Snana)",
        text: "Lukewarm water below the neck builds physical strength—but pouring hot water over the head (Uttamanga) weakens hair roots and damages eyesight! Always use cool/normal water on your head.",
      },
      {
        label: "2. Botanical Scents & Seasonal Attire (Anulepana & Vastra)",
        text: "Apply breathable sandalwood or saffron hydrosols after bathing, and wear clean cotton/silk in summer and warm layered wool in winter.",
      },
    ],
    sciencePoints: [
      {
        label: "Thermoregulation & Vagal Refresh",
        text: "Keeping the cranium cool prevents scalp inflammation and ocular vasodilation while warm water below the neck relaxes skeletal muscles.",
      },
      {
        label: "Microbiological Skin Hygiene",
        text: "Wearing fresh, unsoiled natural fabrics (Dhauta Vastra) allows sweat evaporation and prevents fungal tinea infections.",
      },
    ],
    safetyTitle: "Cosmetic Toxicology Alert & Bath Contraindications",
    safetyPoints: [
      "Antiperspirant & Cosmetic Risks: Aluminum deodorants physically plug sweat ducts (Swedavaha Srotas Rodha), lipsticks may carry trace lead, and parabens disrupt hormones.",
      "Never bathe immediately after eating a meal (Bhuktva Cha)—it diverts blood flow away from your stomach and halts digestion!",
    ],
  },
];

export default function EngagingGlobalDinacharyaPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<SubTab>("habit");
  const [selectedPrakriti, setSelectedPrakriti] = useState<PrakritiType>("vata");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const step = DINACHARYA_JOURNEY[currentStepIndex];
  const StepIcon = step.icon;
  const totalSteps = DINACHARYA_JOURNEY.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  // Reset sub-tab to "The Habit" and smoothly scroll to top whenever step changes
  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
    setActiveTab("habit");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (!completedSteps.includes(step.id)) {
      setCompletedSteps((prev) => [...prev, step.id]);
    }
    if (currentStepIndex < totalSteps - 1) {
      goToStep(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  };

  return (
    <div
      className={`${jakarta.variable} ${playfair.variable} min-h-screen bg-background text-foreground pb-24 transition-colors duration-300`}
      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
    >
      {/* ========================================================= */}
      {/* 1. COMPACT, ULTRA-CLEAN TOP NAVIGATION & PROGRESS BAR      */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md border-b border-surfaceBorder">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link
            href="/atreya"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground/75 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit to Command Center</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>
            <div className="w-24 sm:w-36 h-2 rounded-full bg-background border border-surfaceBorder overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Interactive Clock Timeline Bar */}
        <div className="border-t border-surfaceBorder/60 bg-background/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {DINACHARYA_JOURNEY.map((item, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isDone = completedSteps.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => goToStep(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border cursor-pointer ${
                    isCurrent
                      ? "bg-primary text-white border-primary shadow-sm scale-105"
                      : isDone
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                      : "bg-surface text-foreground/65 border-surfaceBorder hover:border-primary/40"
                  }`}
                >
                  {isDone && !isCurrent && <CheckCircle2 className="w-3 h-3" />}
                  <span>{item.time}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. FOCUSED SINGLE-STEP INTERACTIVE STORY CARD              */}
      {/* ========================================================= */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* Intro Context Pill */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-extrabold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>{step.time}</span>
            <span>•</span>
            <span>{step.sanskrit}</span>
          </div>

          <span className="text-xs font-medium text-foreground/55 italic">
            Pronounced: &ldquo;{step.pronunciation}&rdquo;
          </span>
        </div>

        {/* MAIN STEP CARD */}
        <div className="bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Editorial Title & Conversational Hook */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1
                className="text-2xl sm:text-4xl font-bold text-foreground leading-tight mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {step.title}
              </h1>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-medium">
                {step.tagline}
              </p>
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
              <StepIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>

          {/* "TRY THIS TODAY" MICRO-HABIT CALLOUT */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mb-8 flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                10-Second Actionable Takeaway
              </span>
              <p className="text-sm sm:text-base font-bold text-foreground leading-snug">
                {step.quickAction}
              </p>
            </div>
          </div>

          {/* Optional Classical Shloka Pill (Clean & Collapsible-style) */}
          {step.shloka && (
            <div className="mb-8 p-4 rounded-2xl bg-background border border-surfaceBorder text-center">
              <p className="text-xs sm:text-sm font-bold text-primary mb-1">
                &ldquo;{step.shloka.sanskrit}&rdquo;
              </p>
              <p className="text-xs text-foreground/70 italic">
                {step.shloka.meaning}
              </p>
            </div>
          )}

          {/* ===================================================== */}
          {/* 3 BITE-SIZED TABS (Eliminates Wall of Text!)           */}
          {/* ===================================================== */}
          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-background border border-surfaceBorder mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("habit")}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "habit"
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>1. The Ritual</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("science")}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "science"
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span>2. Why It Works</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("safety")}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "safety"
                  ? "bg-rose-500 text-white shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>3. Modern Traps</span>
            </button>
          </div>

          {/* TAB 1 CONTENT: THE RITUAL */}
          {activeTab === "habit" && (
            <div className="space-y-4">
              {step.habitPoints.map((pt, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-background/80 border border-surfaceBorder"
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-primary mb-1.5">
                    {pt.label}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              ))}

              {/* Interactive Body Type Workout Matcher (Only on Step 10) */}
              {step.hasPrakritiWidget && (
                <div className="p-5 rounded-2xl bg-background border-2 border-primary/30 mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                      Interactive Matcher: Best Workout for Your Body Type
                    </span>
                    <div className="flex gap-1.5">
                      {(["vata", "pitta", "kapha"] as PrakritiType[]).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedPrakriti(t)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold uppercase cursor-pointer border ${
                            selectedPrakriti === t
                              ? "bg-primary text-white border-primary"
                              : "bg-surface text-foreground/70 border-surfaceBorder"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedPrakriti === "vata" && (
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                      <strong>Vata (Slender, Quick, Energetic) &amp; Seniors:</strong> Stick to gentle walking, grounding Yoga, mobility flows, and light cycling. Avoid exhausting marathons that burn out your nervous system.
                    </p>
                  )}
                  {selectedPrakriti === "pitta" && (
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                      <strong>Pitta (Athletic, Warm, Driven):</strong> Choose cooling exercises like swimming, evening cycling, and moderate strength training. Avoid overheating in midday sun.
                    </p>
                  )}
                  {selectedPrakriti === "kapha" && (
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                      <strong>Kapha (Strong, High Stamina, Slow Metabolism):</strong> Thrive on vigorous cardio, HIIT, brisk running, and heavy resistance training to mobilize stored energy.
                    </p>
                  )}
                </div>
              )}

              {/* Compact 3-Type Herbal Scrub Comparison (Only on Step 10) */}
              {step.hasPowderTable && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-background border border-surfaceBorder text-xs">
                    <strong className="text-primary block mb-1">
                      1. Udvartana (Fat-Melting)
                    </strong>
                    Dry herbal powders (Triphala/Musta) rubbed upward to tone skin and reduce Kapha/cellulite.
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-surfaceBorder text-xs">
                    <strong className="text-primary block mb-1">
                      2. Udgharshana (Deep Scrub)
                    </strong>
                    Coarse dry powder friction (no oil) to unclog pores and stop itching/sweat odor.
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-surfaceBorder text-xs">
                    <strong className="text-primary block mb-1">
                      3. Utsadana (Glow Paste)
                    </strong>
                    Herbal powder mixed with oil/milk for dry Vata skin to restore deep radiance.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2 CONTENT: WHY IT WORKS (MODERN SCIENCE) */}
          {activeTab === "science" && (
            <div className="space-y-4">
              {step.sciencePoints.map((pt, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-primary/5 border border-primary/25"
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-primary mb-1.5">
                    {pt.label}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3 CONTENT: MODERN TRAPS & SAFETY */}
          {activeTab === "safety" && (
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-3">
              <div className="flex items-center gap-2 text-rose-500 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>{step.safetyTitle}</span>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-foreground/90 leading-relaxed">
                {step.safetyPoints.map((sp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-bold text-rose-500">•</span>
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ===================================================== */}
          {/* BOTTOM STEP-BY-STEP NAVIGATION BUTTONS                */}
          {/* ===================================================== */}
          <div className="mt-10 pt-6 border-t border-surfaceBorder flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 border transition-all ${
                currentStepIndex === 0
                  ? "opacity-40 cursor-not-allowed bg-background border-surfaceBorder text-foreground/50"
                  : "bg-background hover:bg-surface border-surfaceBorder text-foreground cursor-pointer"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>

            {currentStepIndex < totalSteps - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-4 rounded-xl bg-primary hover:bg-primaryHover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer"
              >
                <span>
                  Next Step: {DINACHARYA_JOURNEY[currentStepIndex + 1].time} (
                  {DINACHARYA_JOURNEY[currentStepIndex + 1].title.split(" ")[0]}...)
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(0)}
                  className="px-5 py-3.5 rounded-xl bg-background border border-surfaceBorder hover:border-primary/50 text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Restart Journey
                </button>
                <Link
                  href="/atreya"
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" /> Complete &amp; Return to ATREYA
                </Link>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
