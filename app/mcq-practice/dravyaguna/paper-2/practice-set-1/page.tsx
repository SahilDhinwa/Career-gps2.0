"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Shuffle, 
  Eye, 
  ChevronRight, 
  RotateCcw, 
  BookOpen,
  CheckCircle2,
  Loader2
} from "lucide-react";

interface Drug {
  id: number;
  hindiName: string;
  englishName: string;
  botanicalName: string;
  family: string;
}

// Complete 98 Dravyaguna Paper 2 Drugs
const dravyagunaDrugs: Drug[] = [
  { id: 1, hindiName: "आमलकी", englishName: "Amalaki", botanicalName: "Phyllanthus emblica", family: "Euphorbiaceae" },
  { id: 2, hindiName: "आरग्वध", englishName: "Aragwadha", botanicalName: "Cassia fistula", family: "Fabaceae (Caesalpinioideae)" },
  { id: 3, hindiName: "अर्जुन", englishName: "Arjuna", botanicalName: "Terminalia arjuna", family: "Combretaceae" },
  { id: 4, hindiName: "अशोक", englishName: "Ashoka", botanicalName: "Saraca asoca", family: "Fabaceae (Caesalpinioideae)" },
  { id: 5, hindiName: "अश्वगंधा", englishName: "Ashwagandha", botanicalName: "Withania somnifera", family: "Solanaceae" },
  { id: 6, hindiName: "अतिविषा", englishName: "Ativisha", botanicalName: "Aconitum heterophyllum", family: "Ranunculaceae" },
  { id: 7, hindiName: "अग्निमंथ", englishName: "Agnimantha", botanicalName: "Clerodendrum phlomidis / Premna mucronata", family: "Lamiaceae / Verbenaceae" },
  { id: 8, hindiName: "अहिफेन (अफीम)", englishName: "Ahiphena", botanicalName: "Papaver somniferum", family: "Papaveraceae" },
  { id: 9, hindiName: "अजमोदा", englishName: "Ajamoda", botanicalName: "Trachyspermum roxburghianum", family: "Apiaceae" },
  { id: 10, hindiName: "अपामार्ग", englishName: "Apamarga", botanicalName: "Achyranthes aspera", family: "Amaranthaceae" },
  { id: 11, hindiName: "अस्थिसृंखला (हडजोड़)", englishName: "Asthishrankhala", botanicalName: "Cissus quadrangularis", family: "Vitaceae" },
  { id: 12, hindiName: "बला", englishName: "Bala", botanicalName: "Sida cordifolia", family: "Malvaceae" },
  { id: 13, hindiName: "बीजक (विजयसार)", englishName: "Bijaka", botanicalName: "Pterocarpus marsupium", family: "Fabaceae" },
  { id: 14, hindiName: "भल्लातक", englishName: "Bhallataka", botanicalName: "Semecarpus anacardium", family: "Anacardiaceae" },
  { id: 15, hindiName: "भारङ्गी", englishName: "Bharangi", botanicalName: "Clerodendrum serratum", family: "Lamiaceae / Verbenaceae" },
  { id: 16, hindiName: "भृङ्गराज", englishName: "Bhringaraj", botanicalName: "Eclipta alba", family: "Asteraceae" },
  { id: 17, hindiName: "भूम्यामलकी (भुंई आमला)", englishName: "Bhumyamalki", botanicalName: "Phyllanthus niruri", family: "Euphorbiaceae" },
  { id: 18, hindiName: "बिल्व (बेलपत्र)", englishName: "Bilva", botanicalName: "Aegle marmelos", family: "Rutaceae" },
  { id: 19, hindiName: "ब्राह्मी", englishName: "Brahmi", botanicalName: "Bacopa monnieri", family: "Scrophulariaceae / Plantaginaceae" },
  { id: 20, hindiName: "बाकुची", englishName: "Bakuchi", botanicalName: "Psoralea corylifolia", family: "Fabaceae" },
  { id: 21, hindiName: "बृहती", englishName: "Brihati", botanicalName: "Solanum indicum", family: "Solanaceae" },
  { id: 22, hindiName: "चन्दन", englishName: "Chandana", botanicalName: "Santalum album", family: "Santalaceae" },
  { id: 23, hindiName: "चित्रक", englishName: "Chitrak", botanicalName: "Plumbago zeylanica", family: "Plumbaginaceae" },
  { id: 24, hindiName: "चक्रमर्द (पवाँड)", englishName: "Chakramarda", botanicalName: "Cassia tora", family: "Fabaceae" },
  { id: 25, hindiName: "दाड़िम (अनार)", englishName: "Dadima", botanicalName: "Punica granatum", family: "Lythraceae / Punicaceae" },
  { id: 26, hindiName: "घातकी", englishName: "Dhataki", botanicalName: "Woodfordia fruticosa", family: "Lythraceae" },
  { id: 27, hindiName: "धमासा / धन्वयास", englishName: "Dhanvayasa", botanicalName: "Fagonia cretica", family: "Zygophyllaceae" },
  { id: 28, hindiName: "धान्यक", englishName: "Dhanyaka", botanicalName: "Coriandrum sativum", family: "Apiaceae" },
  { id: 29, hindiName: "एला", englishName: "Ela", botanicalName: "Elettaria cardamomum", family: "Zingiberaceae" },
  { id: 30, hindiName: "एरण्ड", englishName: "Eranda", botanicalName: "Ricinus communis", family: "Euphorbiaceae" },
  { id: 31, hindiName: "गम्भारी", englishName: "Gambhari", botanicalName: "Gmelina arborea", family: "Lamiaceae / Verbenaceae" },
  { id: 32, hindiName: "गोक्षुर", englishName: "Goksura", botanicalName: "Tribulus terrestris", family: "Zygophyllaceae" },
  { id: 33, hindiName: "गुडूची (गिलोय)", englishName: "Guduchi", botanicalName: "Tinospora cordifolia", family: "Menispermaceae" },
  { id: 34, hindiName: "गुग्गुलु", englishName: "Guggulu", botanicalName: "Commiphora mukul", family: "Burseraceae" },
  { id: 35, hindiName: "हरिद्रा", englishName: "Haridra", botanicalName: "Curcuma longa", family: "Zingiberaceae" },
  { id: 36, hindiName: "हरीतकी (हरड़)", englishName: "Haritaki", botanicalName: "Terminalia chebula", family: "Combretaceae" },
  { id: 37, hindiName: "हिंगू", englishName: "Hingu", botanicalName: "Ferula foetida", family: "Apiaceae" },
  { id: 38, hindiName: "जम्बू (जामुन)", englishName: "Jambu", botanicalName: "Syzygium cumini", family: "Myrtaceae" },
  { id: 39, hindiName: "जपा (गुड़हल)", englishName: "Japa", botanicalName: "Hibiscus rosa-sinensis", family: "Malvaceae" },
  { id: 40, hindiName: "जातीफल", englishName: "Jatiphala", botanicalName: "Myristica fragrans", family: "Myristicaceae" },
  { id: 41, hindiName: "जटामांसी", englishName: "Jatamansi", botanicalName: "Nardostachys jatamansi", family: "Valerianaceae" },
  { id: 42, hindiName: "ज्योतिष्मती", englishName: "Jyotishmati", botanicalName: "Celastrus paniculatus", family: "Celastraceae" },
  { id: 43, hindiName: "जीरक", englishName: "Jeeraka", botanicalName: "Cuminum cyminum", family: "Apiaceae" },
  { id: 44, hindiName: "कृष्ण जीरक", englishName: "Jeerak Krishan", botanicalName: "Carum carvi", family: "Apiaceae" },
  { id: 45, hindiName: "कालमेघ", englishName: "Kalamegha", botanicalName: "Andrographis paniculata", family: "Acanthaceae" },
  { id: 46, hindiName: "कम्पिल्लक", englishName: "Kampillaka", botanicalName: "Mallotus philippensis", family: "Euphorbiaceae" },
  { id: 47, hindiName: "काञ्चनार", englishName: "Kanchanara", botanicalName: "Bauhinia variegata", family: "Fabaceae" },
  { id: 48, hindiName: "कण्टकारी", englishName: "Kantakari", botanicalName: "Solanum xanthocarpum", family: "Solanaceae" },
  { id: 49, hindiName: "कपिकच्छू", englishName: "Kapikacchu", botanicalName: "Mucuna pruriens", family: "Fabaceae" },
  { id: 50, hindiName: "कर्कटशृङ्गी", englishName: "Karkatakshringi", botanicalName: "Pistacia integerima", family: "Anacardiaceae" },
  { id: 51, hindiName: "कटुकी", englishName: "Katuki", botanicalName: "Picrorhiza kurroa", family: "Plantaginaceae / Scrophulariaceae" },
  { id: 52, hindiName: "कुलत्थ (कुलथी)", englishName: "Kulatha", botanicalName: "Vigna unguiculata / Dolichos biflorus", family: "Fabaceae" },
  { id: 53, hindiName: "कुंकुम (केसर)", englishName: "Kumkum / Kesar", botanicalName: "Crocus sativus", family: "Iridaceae" },
  { id: 54, hindiName: "खदिर", englishName: "Khadira", botanicalName: "Acacia catechu", family: "Fabaceae" },
  { id: 55, hindiName: "कुमारी (ग्वारपाठा)", englishName: "Kumari", botanicalName: "Aloe vera", family: "Liliaceae / Asphodelaceae" },
  { id: 56, hindiName: "कुटज", englishName: "Kutaja", botanicalName: "Holarrhena antidysenterica", family: "Apocynaceae" },
  { id: 57, hindiName: "लताकरंज", englishName: "Latakaranja", botanicalName: "Caesalpinia bonduc", family: "Fabaceae" },
  { id: 58, hindiName: "लज्जालु (छूईमूई)", englishName: "Lajjalu", botanicalName: "Mimosa pudica", family: "Fabaceae" },
  { id: 59, hindiName: "लवंग", englishName: "Lavanga", botanicalName: "Syzygium aromaticum", family: "Myrtaceae" },
  { id: 60, hindiName: "लोध्र", englishName: "Lodhra", botanicalName: "Symplocos racemosa", family: "Symplocaceae" },
  { id: 61, hindiName: "मदनफल", englishName: "Madanaphala", botanicalName: "Catunaregam spinosa / Randia dumetorum", family: "Rubiaceae" },
  { id: 62, hindiName: "मण्डूकपर्णी", englishName: "Mandukaparni", botanicalName: "Centella asiatica", family: "Apiaceae" },
  { id: 63, hindiName: "मंजिष्ठा", englishName: "Manjistha", botanicalName: "Rubia cordifolia", family: "Rubiaceae" },
  { id: 64, hindiName: "मरीच (कालीमिर्च)", englishName: "Maricha", botanicalName: "Piper nigrum", family: "Piperaceae" },
  { id: 65, hindiName: "मेषशृंगी", englishName: "Meshashrungi", botanicalName: "Gymnema sylvestre", family: "Apocynaceae / Asclepiadaceae" },
  { id: 66, hindiName: "मेथिका (मेथी)", englishName: "Methika", botanicalName: "Trigonella foenum-graecum", family: "Fabaceae" },
  { id: 67, hindiName: "मुस्तक / मुस्ता", englishName: "Musta", botanicalName: "Cyperus rotundus", family: "Cyperaceae" },
  { id: 68, hindiName: "नागकेशर", englishName: "Nagakeshara", botanicalName: "Mesua ferrea", family: "Calophyllaceae / Guttiferae" },
  { id: 69, hindiName: "निम्ब", englishName: "Nimba", botanicalName: "Azadirachta indica", family: "Meliaceae" },
  { id: 70, hindiName: "निर्गुण्डी", englishName: "Nirgundi", botanicalName: "Vitex negundo", family: "Lamiaceae / Verbenaceae" },
  { id: 71, hindiName: "पलाश (ढाक)", englishName: "Palasha", botanicalName: "Butea monosperma", family: "Fabaceae" },
  { id: 72, hindiName: "पाषाणभेद", englishName: "Pashanabheda", botanicalName: "Bergenia ligulata", family: "Saxifragaceae" },
  { id: 73, hindiName: "पाठा", englishName: "Patha", botanicalName: "Cissampelos pareira", family: "Menispermaceae" },
  { id: 74, hindiName: "पिप्पली", englishName: "Pippali", botanicalName: "Piper longum", family: "Piperaceae" },
  { id: 75, hindiName: "पुनर्नवा", englishName: "Punarnava", botanicalName: "Boerhavia diffusa", family: "Nyctaginaceae" },
  { id: 76, hindiName: "रास्ना", englishName: "Rasna", botanicalName: "Pluchea lanceolata", family: "Asteraceae" },
  { id: 77, hindiName: "रशोन", englishName: "Rasona", botanicalName: "Allium sativum", family: "Amaryllidaceae / Liliaceae" },
  { id: 78, hindiName: "सर्पगन्धा", englishName: "Sarpagandha", botanicalName: "Rauvolfia serpentina", family: "Apocynaceae" },
  { id: 79, hindiName: "सैरेयक", englishName: "Saireyaka", botanicalName: "Barleria prionitis", family: "Acanthaceae" },
  { id: 80, hindiName: "सारिवा", englishName: "Sariva", botanicalName: "Hemidesmus indicus", family: "Apocynaceae / Asclepiadaceae" },
  { id: 81, hindiName: "शल्लकी", englishName: "Shallaki", botanicalName: "Boswellia serrata", family: "Burseraceae" },
  { id: 82, hindiName: "शाल्मली", englishName: "Shalmali", botanicalName: "Bombax ceiba", family: "Malvaceae / Bombacaceae" },
  { id: 83, hindiName: "शंखपुष्पी", englishName: "Shankhapushpi", botanicalName: "Convolvulus pluricaulis", family: "Convolvulaceae" },
  { id: 84, hindiName: "शतावरी", englishName: "Shatavari", botanicalName: "Asparagus racemosus", family: "Asparagaceae / Liliaceae" },
  { id: 85, hindiName: "शिग्रु", englishName: "Shigru", botanicalName: "Moringa oleifera", family: "Moringaceae" },
  { id: 86, hindiName: "शुण्ठी", englishName: "Shunthi", botanicalName: "Zingiber officinale", family: "Zingiberaceae" },
  { id: 87, hindiName: "तालीश पत्र", englishName: "Talisa Patra", botanicalName: "Abies webbiana", family: "Pinaceae" },
  { id: 88, hindiName: "त्रिवृत्", englishName: "Trivrut", botanicalName: "Operculina turpethum", family: "Convolvulaceae" },
  { id: 89, hindiName: "तुलसी", englishName: "Tulasi", botanicalName: "Ocimum sanctum", family: "Lamiaceae" },
  { id: 90, hindiName: "त्वक (दालचीनी)", englishName: "Tvak", botanicalName: "Cinnamomum zeylanicum", family: "Lauraceae" },
  { id: 91, hindiName: "उशीर", englishName: "Ushira", botanicalName: "Vetiveria zizanioides", family: "Poaceae" },
  { id: 92, hindiName: "वचा", englishName: "Vacha", botanicalName: "Acorus calamus", family: "Acoraceae / Araceae" },
  { id: 93, hindiName: "वरूण", englishName: "Varuna", botanicalName: "Crateva nurvala", family: "Capparidaceae" },
  { id: 94, hindiName: "वासा", englishName: "Vasa", botanicalName: "Adhatoda vasica", family: "Acanthaceae" },
  { id: 95, hindiName: "वत्सनाभ", englishName: "Vatsanabha", botanicalName: "Aconitum ferox", family: "Ranunculaceae" },
  { id: 96, hindiName: "विभीतक", englishName: "Vibhitaka", botanicalName: "Terminalia bellerica", family: "Combretaceae" },
  { id: 97, hindiName: "विडङ्ग", englishName: "Vidanga", botanicalName: "Embelia ribes", family: "Primulaceae / Myrsinaceae" },
  { id: 98, hindiName: "यष्टीमधु (मुलेठी)", englishName: "Yastimadhu", botanicalName: "Glycyrrhiza glabra", family: "Fabaceae" }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function DravyagunaPaper2PracticeSet1() {
  const [deck, setDeck] = useState<Drug[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Prevents hydration flash

  useEffect(() => {
    handleResetAndShuffle();
    setIsMounted(true);
  }, []);

  const handleResetAndShuffle = () => {
    setDeck(shuffleArray(dravyagunaDrugs));
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsCompleted(false);
  };

  const handleNext = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    } else {
      setIsCompleted(true);
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    );
  }

  const currentDrug = deck[currentIndex];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 pb-24 px-4 md:px-6">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/mcq-practice/dravyaguna" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-amber-500 transition-colors font-bold text-sm bg-surface/80 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
          </Link>

          <button
            onClick={handleResetAndShuffle}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-500 px-3.5 py-2 rounded-sm hover:bg-amber-500 hover:text-white transition-all shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" /> Reshuffle Questions
          </button>
        </div>

        {/* Title Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3.5 py-1 rounded-sm text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" /> Paper 2 Active Recall
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Botanical Name & Family <span className="text-amber-500">Test Engine</span>
          </h1>
        </div>

        {/* Card Component */}
        {!isCompleted && currentDrug ? (
          <div className="bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-xl p-8 md:p-12 relative overflow-hidden transition-all duration-300">
            
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-bold text-foreground/60 mb-6 pb-4 border-b border-surfaceBorder">
              <span>QUESTION {currentIndex + 1} OF {deck.length}</span>
              <span>{Math.round(((currentIndex + 1) / deck.length) * 100)}% COMPLETED</span>
            </div>

            {/* Question Display */}
            <div className="text-center my-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">
                Identify Dravya
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-wide font-heading">
                {currentDrug.hindiName}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground/70 mt-2 font-mono">
                ({currentDrug.englishName})
              </p>
            </div>

            {/* Answer Display */}
            {showAnswer && (
              <div className="mt-8 pt-8 border-t border-amber-500/20 bg-amber-500/5 -mx-8 -mb-4 p-8 rounded-b-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
                  
                  <div className="bg-surface/80 p-4 rounded border border-surfaceBorder">
                    <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                      Botanical Name
                    </span>
                    <p className="text-xl md:text-2xl font-bold italic text-foreground">
                      {currentDrug.botanicalName}
                    </p>
                  </div>

                  <div className="bg-surface/80 p-4 rounded border border-surfaceBorder">
                    <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                      Family Name
                    </span>
                    <p className="text-xl md:text-2xl font-bold text-foreground">
                      {currentDrug.family}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center">
              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-base rounded-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <Eye className="w-5 h-5" /> Show Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  Next Question <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Completion State */
          <div className="bg-surface/90 backdrop-blur-md border border-amber-500/30 rounded-sm shadow-xl p-10 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Practice Set Completed!</h2>
            <p className="text-foreground/70 mb-8">
              You reviewed all 98 drugs in Dravyaguna Vigyan Paper 2.
            </p>
            <button
              onClick={handleResetAndShuffle}
              className="px-8 py-3.5 bg-amber-500 text-white font-bold rounded-sm hover:bg-amber-600 transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Restart & Reshuffle Questions
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
