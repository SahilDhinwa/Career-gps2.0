"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Users, MessageSquare, Clock } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

// ==========================================
// 44 VADA MARGA DATA (Mapped for clean UI)
// ==========================================
const VADA_MARGA = [
  { id: 1, name: "वाद (Vada)", desc: "बहस करना।", types: ["i. जल्प (Jalpa): अपनी बात सही साबित करना और दूसरे की काटना।", "ii. वितण्डा (Vitanda): अपनी कोई बात न रखना, बस दूसरे की बात में कमियां निकालना।"] },
  { id: 2, name: "द्रव्य (Dravya)", desc: "पदार्थ (Substance, जैसे- जल, अग्नि, वायु)।" },
  { id: 3, name: "गुण (Guna)", desc: "द्रव्य के अंदर रहने वाले गुण (Quality, जैसे- भारी, हल्का)।" },
  { id: 4, name: "कर्म (Karma)", desc: "द्रव्य द्वारा किया गया कार्य (Action)।" },
  { id: 5, name: "सामान्य (Samanya)", desc: "दो चीजों में समानता (Similarity) जिससे उनकी वृद्धि होती है।" },
  { id: 6, name: "विशेष (Vishesha)", desc: "असमानता (Dissimilarity) जिससे कमी होती है।" },
  { id: 7, name: "समवाय (Samavaya)", desc: "ऐसा अटूट संबंध जिसे अलग न किया जा सके (जैसे धागा और कपड़ा)।" },
  { id: 8, name: "प्रतिज्ञा (Pratijna)", desc: "अपनी बात या दावे को सबके सामने रखना (Proposition)।" },
  { id: 9, name: "स्थापना (Sthapana)", desc: "अपनी रखी हुई बात को प्रमाण देकर सिद्ध करना।" },
  { id: 10, name: "प्रतिस्थापना (Pratisthapana)", desc: "सामने वाले की बात के ठीक विपरीत अपनी बात को सिद्ध करना।" },
  { id: 11, name: "हेतु (Hetu)", desc: "अपनी बात सिद्ध करने के कारण (Reason/Proof)।", types: ["i. प्रत्यक्ष", "ii. अनुमान", "iii. ऐतिह्य", "iv. औपम्य"] },
  { id: 12, name: "दृष्टान्त (Drishtanta)", desc: "ऐसा उदाहरण (Example) जो मूर्ख और विद्वान दोनों को समझ आ जाए।" },
  { id: 13, name: "उपनय (Upanaya)", desc: "दिए गए उदाहरण को अपने वर्तमान विषय से जोड़ना (Application)।" },
  { id: 14, name: "निगमन (Nigamana)", desc: "पूरी बहस के बाद अंतिम निष्कर्ष (Conclusion) निकालना।" },
  { id: 15, name: "उत्तर (Uttara)", desc: "सामने वाले की बात का जवाब देना (Reply/Counter-argument)।" },
  { id: 16, name: "सिद्धान्त (Siddhanta)", desc: "वह सच जिसे परखा जा चुका हो (Established Truth)।", types: ["i. सर्वतन्त्र: जो सभी शास्त्रों में माना जाता हो।", "ii. प्रतितन्त्र: जो किसी एक विशेष शास्त्र में ही माना जाता हो।", "iii. अधिकरण: एक बात सिद्ध होने पर उससे जुड़ी दूसरी बात खुद सिद्ध हो जाना।", "iv. अभ्युपगम: बहस को आगे बढ़ाने के लिए किसी बात को थोड़ी देर के लिए सही मान लेना।"] },
  { id: 17, name: "शब्द (Shabda)", desc: "कही गई बात।", types: ["i. दृष्टार्थ (जो सामने दिखे)", "ii. अदृष्टार्थ (जो न दिखे)", "iii. सत्य (सच)", "iv. अनृत (झूठ)"] },
  { id: 18, name: "प्रत्यक्ष (Pratyaksha)", desc: "जो इन्द्रियों (Senses) से सीधा सामने दिखाई दे।" },
  { id: 19, name: "अनुमान (Anumana)", desc: "तर्क और पुरानी जानकारी के आधार पर अंदाजा लगाना (Inference)।" },
  { id: 20, name: "ऐतिह्य (Aitihya)", desc: "जो बात शास्त्रों और महापुरुषों द्वारा कही गई हो (Tradition)।" },
  { id: 21, name: "औपम्य (Aupamya)", desc: "किसी जानी हुई चीज़ से तुलना करके अनजानी चीज़ को समझना (Analogy)।" },
  { id: 22, name: "संशय (Samshaya)", desc: "किसी बात को लेकर दुविधा या शंका (Doubt) होना।" },
  { id: 23, name: "प्रयोजन (Prayojana)", desc: "कोई भी काम करने का उद्देश्य (Purpose)।" },
  { id: 24, name: "सव्यभिचार (Savyabhichara)", desc: "ऐसी बात कहना जिससे कोई ठोस नतीजा न निकले (Inconclusive)।" },
  { id: 25, name: "जिज्ञासा (Jijnasa)", desc: "जानने की इच्छा (Curiosity)।" },
  { id: 26, name: "व्यवसाय (Vyavasaya)", desc: "किसी बात का पक्का निश्चय (Determination) कर लेना।" },
  { id: 27, name: "अर्थप्राप्ति (Arthaprapti)", desc: "जो बात कही नहीं गई, उसे खुद समझ लेना (Implication)।" },
  { id: 28, name: "सम्भव (Sambhava)", desc: "उत्पत्ति का स्रोत (Source, जैसे मिट्टी से घड़ा संभव है)।" },
  { id: 29, name: "अनुयोज्य (Anuyojya)", desc: "ऐसा वाक्य जिसमें कमी हो और प्रश्न उठाया जा सके।" },
  { id: 30, name: "अननुयोज्य (Ananuyojya)", desc: "एकदम सही वाक्य, जिस पर कोई सवाल न उठाया जा सके।" },
  { id: 31, name: "अनुयोग (Anuyoga)", desc: "दूसरे का ज्ञान परखने के लिए उससे प्रश्न पूछना।" },
  { id: 32, name: "प्रत्यनुयोग (Pratyanuyoga)", desc: "पूछे गए प्रश्न पर दोबारा उल्टा प्रश्न (Cross-question) करना।" },
  { id: 33, name: "वाक्य दोष (Vakya Dosha)", desc: "बोलते समय की गई गलतियां (Speech defects)।", types: ["i. न्यून: बात पूरी करने के लिए शब्दों की कमी रह जाना।", "ii. अधिक: बिना जरूरत के बहुत ज्यादा बोलना।", "iii. अनर्थक: ऐसे शब्द बोलना जिनका कोई मतलब न हो।", "iv. अपार्थक: शब्द सही हों पर उनका आपस में कोई तालमेल न हो।", "v. विरुद्ध: अपनी ही पिछली बात को काटने वाली बात कहना।"] },
  { id: 34, name: "वाक्य प्रशंसा (Vakya Prashamsa)", desc: "बिना किसी दोष के उत्तम वाक्य बोलना।" },
  { id: 35, name: "छल (Chhala)", desc: "धोखाधड़ी से बात काटना (Fallacy/Deceit)।", types: ["i. वाक् छल: शब्दों का दूसरा अर्थ निकालकर बात काटना।", "ii. सामान्य छल: किसी एक बात को हर जगह जबरदस्ती लागू कर देना।"] },
  { id: 36, name: "अहेतु (Ahetu)", desc: "जो 'कारण' जैसा लगे, पर असल में कारण न हो (Fallacious reason)।", types: ["i. प्रकरण सम", "ii. संशय सम", "iii. वर्ण्य सम"] },
  { id: 37, name: "अतीत काल (Atita-kala)", desc: "किसी बात को तब कहना, जब उसका सही समय निकल चुका हो।" },
  { id: 38, name: "उपालम्भ (Upalambha)", desc: "सामने वाले की बात या तर्क में गलती निकालना।" },
  { id: 39, name: "परिहार (Parihara)", desc: "अपनी गलती का बचाव करना और उसे सुधारना।" },
  { id: 40, name: "प्रतिज्ञाहानि (Pratijnahani)", desc: "हार के डर से अपनी ही बात (दावे) से मुकर जाना।" },
  { id: 41, name: "अभ्यनुज्ञा (Abhyanujna)", desc: "सामने वाले की बात को, चाहे वो गलत ही हो, मान लेना।" },
  { id: 42, name: "हेत्वन्तर (Hetvantara)", desc: "पहला कारण गलत साबित होने पर, कोई नया ही कारण (Reason) दे देना।" },
  { id: 43, name: "अर्थान्तर (Arthantara)", desc: "हारते देखकर अचानक विषय बदलकर दूसरी बातें करने लगना।" },
  { id: 44, name: "निग्रहस्थान (Nigrahasthana)", desc: "शास्त्रार्थ (Debate) में हार जाने की स्थिति (Point of Defeat)।" }
];

export default function CharakaVimanaChapter8() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8">
        <Link href="/short-notes/charaka-samhita/vimana" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Vimana Sthana Hub
        </Link>
      </div>

      {/* Title */}
      <HandwrittenTitle badge={<>Charaka<br/><NAccent>Vimana</NAccent></>}>
        अध्याय 8: रोगभिषग्जितीय विमान
      </HandwrittenTitle>

      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1.5 border-2 border-dashed border-[var(--theme-border)] text-[var(--theme-text)] opacity-80 font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm transform -rotate-1">
          Medical Ethics, Debates & Examination
        </span>
      </div>

      {/* ========================================== */}
      {/* INTRO: 3 PURSUITS (VRITTI)                   */}
      {/* ========================================== */}
      <div className="mb-14">
        <NText className="font-medium text-lg md:text-xl leading-relaxed mb-6 text-center max-w-3xl mx-auto block opacity-90">
          एक श्रेष्ठ वैद्य (भिषक्) बनने के लिए आचार्य चरक ने <NAccent bold>3 वृत्तियों (Three Pursuits)</NAccent> का वर्णन किया है:
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl text-blue-700 dark:text-blue-400 mb-2">1. अध्ययन (Adhyayana)</h3>
            <p className="text-sm opacity-80 font-medium">शास्त्र को पढ़ना और सीखना।</p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl text-emerald-700 dark:text-emerald-400 mb-2">2. अध्यापन (Adhyapana)</h3>
            <p className="text-sm opacity-80 font-medium">शिष्यों को पढ़ाना।</p>
          </div>
          <div className="bg-rose-500/10 border border-rose-500/30 p-5 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
            <MessageSquare className="w-8 h-8 text-rose-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl text-rose-700 dark:text-rose-400 mb-2">3. तद्विद्य सम्भाषा</h3>
            <p className="text-sm opacity-80 font-medium">समान ज्ञान वाले वैद्यों के साथ शास्त्रार्थ (Debate)।</p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* RESTORED: 1. ADHYAYANA & 2. ADHYAPANA        */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NCard title="1. अध्ययन विधि (Method of Learning)">
            <ul className="space-y-3 font-medium opacity-90 text-sm md:text-base">
              <li><NAccent bold>i. शास्त्र परीक्षा:</NAccent> अपने अध्ययन के लिए निर्मल, तार्किक और सिद्धान्तों से युक्त ग्रन्थ का चुनाव।</li>
              <li><NAccent bold>ii. आचार्य परीक्षा:</NAccent> गुरु का चुनाव (श्रुत-सम्पन्न, अक्लिष्ट-कर्मा और अनुद्विग्न होना चाहिए)।</li>
              <li><NAccent bold>iii. अध्ययन क्रम:</NAccent> प्रातःकाल उठकर, पवित्र होकर अध्ययन करने के नियम।</li>
            </ul>
          </NCard>
          <NCard title="2. अध्यापन विधि (Method of Teaching)">
            <ul className="space-y-3 font-medium opacity-90 text-sm md:text-base">
              <li><NAccent bold>i. शिष्य परीक्षा:</NAccent> किस विद्यार्थी को पढ़ाया जाए (शिष्य शान्त, कुलीन और मेधावी होना चाहिए)।</li>
              <li><NAccent bold>ii. उपनयन संस्कार:</NAccent> शिष्य को दीक्षा देना।</li>
              <li><NAccent bold>iii. अध्यापन क्रम:</NAccent> पढ़ाने की विधि।</li>
            </ul>
          </NCard>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. TYPES OF DEBATES & 4. PARISHAD            */}
      {/* ========================================== */}
      <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Debates Flowchart */}
        <div className="bg-surface/50 border border-surfaceBorder rounded-2xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 border-b border-surfaceBorder pb-2">3. तद्विद्य सम्भाषा के प्रकार</h3>
          <p className="text-sm opacity-80 mb-4 font-medium">ज्ञानवर्धन के लिए वैद्यों की चर्चा (Debates) 2 प्रकार की होती है:</p>
          
          <div className="space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">i. सन्धाय सम्भाषा (Friendly)</h4>
              <p className="text-sm opacity-90 font-medium">शांतिपूर्ण और मित्रवत चर्चा, जिसमें दोनों एक-दूसरे से सीखते हैं।</p>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl">
              <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1">ii. विगृह्य सम्भाषा (Hostile)</h4>
              <p className="text-sm opacity-90 font-medium">दूसरे को हराने और अपनी श्रेष्ठता सिद्ध करने के लिए किया गया शास्त्रार्थ।</p>
            </div>
          </div>
        </div>

        {/* Parishad */}
        <div className="bg-surface/50 border border-surfaceBorder rounded-2xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 border-b border-surfaceBorder pb-2">4. परिषद् के प्रकार (Assembly)</h3>
          
          <NText bold className="text-[var(--theme-accent)] mb-2 block">A. ज्ञान के आधार पर (2 Types):</NText>
          <ul className="mb-5 pl-4 space-y-1">
            <li><NAccent>i.</NAccent> <NText bold>ज्ञान-विज्ञान सम्पन्न:</NText> विद्वान और ज्ञानी लोगों की सभा।</li>
            <li><NAccent>ii.</NAccent> <NText bold>मूढ परिषद्:</NText> अज्ञानी लोगों की सभा।</li>
          </ul>

          <NText bold className="text-[var(--theme-accent)] mb-2 block">B. स्वभाव के आधार पर (3 Types):</NText>
          <ul className="pl-4 space-y-1">
            <li><NAccent>i.</NAccent> <NText bold>सुहृद् (Suhrit):</NText> मित्र भाव रखने वाली (Friendly)।</li>
            <li><NAccent>ii.</NAccent> <NText bold>उदासीन (Udasina):</NText> जो किसी का पक्ष न ले (Neutral)।</li>
            <li><NAccent>iii.</NAccent> <NText bold>प्रतिनिविष्ट (Pratinivishta):</NText> मन में द्वेष या पूर्वाग्रह रखने वाली।</li>
          </ul>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5. वादी के प्रकार (OPPONENT)                  */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>5. वादी के प्रकार (Types of Opponent)</HandwrittenBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl text-center">
            <span className="font-bold text-lg text-rose-600 mb-1">i. प्रवर (Pravara)</span>
            <span className="text-sm opacity-80 font-medium">जो ज्ञान में आपसे श्रेष्ठ (Superior) हो।</span>
          </div>
          <div className="flex flex-col p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-center">
            <span className="font-bold text-lg text-blue-600 mb-1">ii. सम (Sama)</span>
            <span className="text-sm opacity-80 font-medium">जो ज्ञान में आपके बराबर (Equal) हो।</span>
          </div>
          <div className="flex flex-col p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center">
            <span className="font-bold text-lg text-emerald-600 mb-1">iii. प्रत्यवर (Pratyavara)</span>
            <span className="text-sm opacity-80 font-medium">जो ज्ञान में आपसे कम (Inferior) हो।</span>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 6. वाद मार्ग - 44 पद (44 VADA MARGA)         */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox borderColor="border-amber-500/50" textColor="text-amber-600 dark:text-amber-400">
            6. वाद मार्ग - 44 पद (Terms of Debate)
          </HandwrittenBox>
        </div>
        <p className="opacity-80 mb-6 font-medium text-lg text-center max-w-3xl mx-auto">
          विगृह्य सम्भाषा (Hostile debate) में प्रयोग होने वाले 44 पारिभाषिक शब्द और उनके प्रकार:
        </p>

        {/* 44 Items Grid Layout (With Highlights for Sub-types) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VADA_MARGA.map((item) => {
            const hasTypes = !!item.types; // Check if this box has sub-types
            
            return (
              <div 
                key={item.id} 
                className={`p-4 rounded-xl transition-all shadow-sm flex flex-col relative overflow-hidden ${
                  hasTypes 
                    ? "bg-[var(--theme-accent)]/5 border-2 border-[var(--theme-accent)]/50" 
                    : "bg-surface border border-surfaceBorder hover:border-[var(--theme-accent)]/40"
                }`}
              >
                {/* Decorative highlight glow for items with types */}
                {hasTypes && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--theme-accent)]/10 blur-xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                )}
                
                <div className="flex items-start gap-2 mb-2 relative z-10">
                  <span className={`text-xs font-black px-2 py-1 rounded-md shrink-0 ${
                    hasTypes 
                      ? "bg-[var(--theme-accent)] text-white" 
                      : "bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]"
                  }`}>
                    {item.id}
                  </span>
                  <h4 className="font-bold text-[var(--theme-text)]">{item.name}</h4>
                </div>
                <p className="text-sm opacity-80 font-medium mb-3 flex-grow relative z-10">{item.desc}</p>
                
                {/* Render subtypes if they exist using roman numerals */}
                {hasTypes && (
                  <div className="mt-auto bg-[var(--theme-accent)]/10 border-t border-[var(--theme-accent)]/20 pt-2 pb-1 px-2 -mx-2 -mb-2 rounded-b-lg relative z-10">
                    <ul className="space-y-1.5 text-xs font-medium opacity-90 text-[var(--theme-text)]">
                      {item.types?.map((type, idx) => (
                        <li key={idx} className="leading-tight">{type}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================== */}
      {/* 7. दशविध परीक्ष्य भाव (10 PARIKSHYA BHAVA)   */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>7. दशविध परीक्ष्य भाव (10 Factors to Examine)</HandwrittenBox>
        </div>
        <p className="opacity-80 mb-6 font-medium text-lg">चिकित्सा आरम्भ करने से पहले वैद्य को इन 10 भावों की जांच करनी चाहिए:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">1. कारण (Karana):</span> कर्ता (इलाज करने वाला वैद्य)।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">2. करण (Karana):</span> भेषज (औषधि) और इलाज में इस्तेमाल होने वाले उपकरण।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">3. कार्ययोनि (Karyayoni):</span> धातु-वैषम्य (बीमारी या दोषों का असंतुलन)।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">4. कार्य (Karya):</span> धातु-साम्य (स्वास्थ्य प्राप्त करने का लक्ष्य)।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">5. कार्यफल (Karyaphala):</span> आरोग्य (सुख की प्राप्ति)।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">6. अनुबन्ध (Anubandha):</span> आयु-प्राप्ति (लंबी उम्र मिलना)।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">7. देश (Desha):</span> 
            <ul className="text-sm mt-1 space-y-1">
              <li>i. <NText bold>भूमि देश:</NText> स्थान (जांगल, आनूप, साधारण)।</li>
              <li>ii. <NText bold>आतुर देश:</NText> रोगी का शरीर।</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">8. काल (Kala):</span>
            <ul className="text-sm mt-1 space-y-1">
              <li>i. <NText bold>संवत्सर:</NText> वर्ष और ऋतुएँ।</li>
              <li>ii. <NText bold>आतुरावस्था:</NText> बीमारी की अवस्था (तीव्र/पुरानी)।</li>
            </ul>
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl flex flex-col justify-center">
            <span className="text-[var(--theme-accent)] font-bold text-lg block mb-1">9. प्रवृत्ति (Pravritti):</span> इलाज शुरू करने का प्रयास।
          </div>
          <div className="p-4 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-xl lg:col-span-3">
            <span className="text-[var(--theme-accent)] font-bold text-lg inline-block mr-2">10. उपाय (Upaya):</span> वैद्य, औषधि और परिचारक का सही तालमेल।
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 8. दशविध आतुर परीक्षा (10 ATURA PARIKSHA)    */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox borderColor="border-blue-500/50" textColor="text-blue-600 dark:text-blue-400">
            8. दशविध आतुर परीक्षा (10-Fold Patient Examination)
          </HandwrittenBox>
        </div>
        <p className="opacity-80 mb-6 font-medium text-lg">रोगी का बल और रोग का बल मापने के लिए रोगी की 10 प्रकार की परीक्षाएं की जाती हैं:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">1</span>
            <div><NText bold>प्रकृति (Constitution):</NText> रोगी का जन्मजात स्वभाव। 7 प्रकार - i. वातज, ii. पित्तज, iii. कफज, iv. वात-पित्तज, v. वात-कफज, vi. पित्त-कफज, vii. समदोषज।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">2</span>
            <div><NText bold>विकृति (Morbidity):</NText> रोग का स्वरूप और उसकी ताकत मापना।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">3</span>
            <div><NText bold>सार (Tissue Excellence):</NText> शरीर की धातुओं की शुद्धता और मजबूती। 8 प्रकार - i. त्वक्, ii. रक्त, iii. मांस, iv. मेद, v. अस्थि, vi. मज्जा, vii. शुक्र, viii. सत्त्व (मन)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">4</span>
            <div><NText bold>संहनन (Compactness):</NText> शरीर की कसावट या सुडौलता। 3 प्रकार - i. सुसंहत (गठा हुआ), ii. मध्यम, iii. असंहत (ढीला)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">5</span>
            <div><NText bold>प्रमाण (Anthropometry):</NText> शरीर के अंगों की ऊंचाई और मोटाई नापना। (स्व-अंगुलि प्रमाण से)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">6</span>
            <div><NText bold>सात्म्य (Adaptability):</NText> जो भोजन/आदत शरीर को अनुकूल हो। 3 प्रकार - i. प्रवर (सभी 6 रस पचने वाले), ii. मध्यम, iii. अवर (1-2 रस पचने वाले)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">7</span>
            <div><NText bold>सत्त्व (Mental Strength):</NText> मन की ताकत। 3 प्रकार - i. प्रवर (मजबूत), ii. मध्यम, iii. अवर (कमजोर)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">8</span>
            <div><NText bold>आहार शक्ति (Digestive Capacity):</NText> भोजन पचाने की क्षमता। 2 प्रकार - i. अभ्यवहरण शक्ति (खाने की इच्छा), ii. जरण शक्ति (पचाने की क्षमता)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl md:col-span-2">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">9</span>
            <div><NText bold>व्यायाम शक्ति (Physical Stamina):</NText> शारीरिक मेहनत करने की क्षमता। 3 प्रकार - i. प्रवर, ii. मध्यम, iii. अवर।</div>
          </div>
        </div>

        {/* 10. Vaya (Age) Flowchart */}
        <div className="mt-6 border-2 border-blue-500/30 rounded-2xl p-6 bg-surface/50">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Clock className="w-5 h-5 text-blue-600"/> 10. वय (Vaya - Age)</h3>
          
          <div className="py-2 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="flex justify-center">
                <div className="bg-blue-500/20 border border-blue-500/50 px-6 py-1.5 rounded-full font-bold text-blue-800 dark:text-blue-300">
                  3 प्रकार (3 Stages)
                </div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-[var(--theme-border)]"></div></div>
              <div className="w-[80%] mx-auto border-t-2 border-[var(--theme-border)] flex justify-between relative">
                <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
                <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
                <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              </div>
              <div className="flex justify-between w-full gap-4">
                
                {/* Bala */}
                <div className="flex-1">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl text-center mb-4">
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-400">i. बाल (Young)</h4>
                    <p className="text-xs opacity-80 mt-1">जन्म से 30 वर्ष तक</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/30 pl-3 space-y-3 relative ml-4">
                    <div className="relative">
                      <div className="absolute -left-3 top-2 w-3 h-0.5 bg-emerald-500/30"></div>
                      <div className="text-xs p-2 bg-surface border border-surfaceBorder rounded-md">
                        <span className="font-bold block text-emerald-600 dark:text-emerald-400">• अपरिपक्व धातु</span>
                        16 वर्ष तक (शरीर अभी कच्चा है)
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-3 top-2 w-3 h-0.5 bg-emerald-500/30"></div>
                      <div className="text-xs p-2 bg-surface border border-surfaceBorder rounded-md">
                        <span className="font-bold block text-emerald-600 dark:text-emerald-400">• विवर्धमान धातु</span>
                        16 से 30 वर्ष तक (शरीर बढ़ रहा है)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Madhya */}
                <div className="flex-1 bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-center h-fit">
                  <h4 className="font-bold text-amber-700 dark:text-amber-400">ii. मध्य (Middle)</h4>
                  <p className="text-xs opacity-80 mt-1">30 से 60 वर्ष तक (शरीर विकसित है)</p>
                </div>

                {/* Jirna */}
                <div className="flex-1 bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-center h-fit">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400">iii. जीर्ण (Old)</h4>
                  <p className="text-xs opacity-80 mt-1">60 वर्ष के बाद (शरीर कमजोर होने लगता है)</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
