"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Users, MessageSquare, Gavel, Scale, Activity, Shield, Clock, BrainCircuit, Dna } from "lucide-react";
import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";
import { NText, NAccent, NCard } from "@/components/NoteElements";

export default function CharakaVimanaChapter8() {
  return (
    <HandwrittenCanvas>
      {/* Top Navigation */}
      <div className="mb-8">
        <Link href="/short-notes/charaka-samhita" className="inline-flex items-center gap-2 text-[var(--theme-text)] opacity-70 hover:opacity-100 hover:text-[var(--theme-accent)] transition-colors font-bold text-sm md:text-base font-sans">
          <ArrowLeft className="w-5 h-5" /> Back to Charaka Samhita Hub
        </Link>
      </div>

      {/* Title */}
      <HandwrittenTitle badge={<>Charaka<br/><NAccent>Vimana</NAccent></>}>
        अध्याय ८: रोगभिषग्जितीय विमान
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
          एक श्रेष्ठ वैद्य (भिषक्) बनने के लिए आचार्य चरक ने इस अध्याय की शुरुआत में <NAccent bold>३ वृत्तियों (Three Pursuits)</NAccent> का वर्णन किया है:
        </NText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-2xl text-center shadow-sm">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl text-blue-700 dark:text-blue-400 mb-2">१. अध्ययन</h3>
            <p className="text-sm opacity-80 font-medium">(Adhyayana) शास्त्र का पढ़ना</p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-2xl text-center shadow-sm">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl text-emerald-700 dark:text-emerald-400 mb-2">२. अध्यापन</h3>
            <p className="text-sm opacity-80 font-medium">(Adhyapana) दूसरों को पढ़ाना</p>
          </div>
          <div className="bg-rose-500/10 border border-rose-500/30 p-5 rounded-2xl text-center shadow-sm">
            <MessageSquare className="w-8 h-8 text-rose-600 mx-auto mb-3" />
            <h3 className="font-bold text-xl text-rose-700 dark:text-rose-400 mb-2">३. तद्विद्य सम्भाषा</h3>
            <p className="text-sm opacity-80 font-medium">(Debate) समान ज्ञान वाले वैद्यों के साथ शास्त्रार्थ</p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 1 & 2: LEARNING & TEACHING                 */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NCard title="१. अध्ययन विधि (Method of Learning)">
            <ul className="space-y-3 font-medium opacity-90">
              <li><NAccent bold>• शास्त्र परीक्षा:</NAccent> अपने अध्ययन के लिए निर्मल, तार्किक और सिद्धान्तों से युक्त ग्रन्थ का चुनाव।</li>
              <li><NAccent bold>• आचार्य परीक्षा:</NAccent> गुरु का चुनाव (श्रुत-सम्पन्न, अक्लिष्ट-कर्मा और अनुद्विग्न)।</li>
              <li><NAccent bold>• अध्ययन क्रम:</NAccent> प्रातःकाल उठकर, पवित्र होकर अध्ययन करने के नियम।</li>
            </ul>
          </NCard>
          <NCard title="२. अध्यापन विधि (Method of Teaching)">
            <ul className="space-y-3 font-medium opacity-90">
              <li><NAccent bold>• शिष्य परीक्षा:</NAccent> विद्यार्थी शान्त, कुलीन और मेधावी होना चाहिए।</li>
              <li><NAccent bold>• उपनयन संस्कार:</NAccent> शिष्य को दीक्षा देना।</li>
              <li><NAccent bold>• अध्यापन क्रम:</NAccent> पढ़ाने की विधि।</li>
            </ul>
          </NCard>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. तद्विद्य सम्भाषा (TYPES OF DEBATES FLOWCHART) */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>3. तद्विद्य सम्भाषा के प्रकार (Types of Debates)</HandwrittenBox>
        </div>
        
        {/* CSS Tree Flowchart */}
        <div className="py-6 overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="flex justify-center">
              <div className="bg-[var(--theme-accent)]/20 border-2 border-[var(--theme-accent)]/50 px-6 py-2 rounded-xl font-bold text-lg text-[var(--theme-text)] shadow-sm">
                तद्विद्य सम्भाषा (Debate)
              </div>
            </div>
            <div className="flex justify-center"><div className="w-0.5 h-6 bg-[var(--theme-border)]"></div></div>
            <div className="w-[60%] mx-auto border-t-2 border-[var(--theme-border)] flex justify-between relative">
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
              <div className="w-0.5 h-6 bg-[var(--theme-border)]"></div>
            </div>
            <div className="flex justify-between w-[80%] mx-auto gap-4">
              <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-center shadow-sm">
                <h3 className="font-bold text-emerald-700 dark:text-emerald-400 text-lg mb-1">सन्धाय सम्भाषा</h3>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] rounded-full font-bold">Friendly (अनुलोम)</span>
                <p className="text-sm opacity-80 mt-3 font-medium">यह सहृदय और समान ज्ञान वालों के बीच शांति से होती है।</p>
              </div>
              <div className="flex-1 bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl text-center shadow-sm">
                <h3 className="font-bold text-rose-700 dark:text-rose-400 text-lg mb-1">विगृह्य सम्भाषा</h3>
                <span className="px-2 py-0.5 bg-rose-500/20 text-rose-700 dark:text-rose-300 text-[10px] rounded-full font-bold">Hostile (विलोम)</span>
                <p className="text-sm opacity-80 mt-3 font-medium">यह दूसरे को हराने और अपनी श्रेष्ठता सिद्ध करने के लिए होती है।</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4 & 5. परिषद् और वादी (ASSEMBLY & OPPONENT)  */}
      {/* ========================================== */}
      <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Parishad */}
        <div className="bg-surface/50 border border-surfaceBorder rounded-2xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 border-b border-surfaceBorder pb-2">४. परिषद् के प्रकार (Assembly)</h3>
          
          <NText bold className="text-[var(--theme-accent)] mb-2 block">A. ज्ञान के आधार पर:</NText>
          <ul className="mb-4 pl-4 space-y-1">
            <li><NAccent>•</NAccent> <NText bold>ज्ञान-विज्ञान सम्पन्न:</NText> विद्वानों की सभा।</li>
            <li><NAccent>•</NAccent> <NText bold>मूढ परिषद्:</NText> अज्ञानियों की सभा।</li>
          </ul>

          <NText bold className="text-[var(--theme-accent)] mb-2 block">B. स्वभाव के आधार पर:</NText>
          <ul className="pl-4 space-y-1">
            <li><NAccent>•</NAccent> <NText bold>सुहृद् (Suhrit):</NText> मित्र भाव रखने वाली।</li>
            <li><NAccent>•</NAccent> <NText bold>उदासीन (Udasina):</NText> निष्पक्ष रहने वाली।</li>
            <li><NAccent>•</NAccent> <NText bold>प्रतिनिविष्ट (Pratinivishta):</NText> पूर्वाग्रह/द्वेष रखने वाली।</li>
          </ul>
        </div>

        {/* Vadi */}
        <div className="bg-surface/50 border border-surfaceBorder rounded-2xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 border-b border-surfaceBorder pb-2">५. वादी के प्रकार (Opponent)</h3>
          <p className="opacity-80 mb-4 text-sm">विपक्ष का व्यक्ति ज्ञान के आधार पर ३ प्रकार का होता है:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
              <span className="font-bold text-rose-600 w-16">प्रवर</span> <span className="opacity-90">ज्ञान में आपसे श्रेष्ठ (Superior)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <span className="font-bold text-blue-600 w-16">सम</span> <span className="opacity-90">ज्ञान में आपके समान (Equal)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <span className="font-bold text-emerald-600 w-16">प्रत्यवर</span> <span className="opacity-90">ज्ञान में आपसे हीन/कम (Inferior)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 6. वाद मार्ग - ४४ पद (44 VADA MARGA)         */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>6. वाद मार्ग - 44 पद (Terms of Debate)</HandwrittenBox>
        </div>
        <p className="opacity-80 mb-6 font-medium">विगृह्य सम्भाषा में जीतने के लिए आचार्य चरक ने 44 पारिभाषिक शब्दों का उल्लेख किया है। मुख्य भेदों का विवरण नीचे है:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <NCard title="१. वाद (Vada - 2 Types)">
            <ul className="space-y-2 text-sm">
              <li><NText bold>जल्प:</NText> अपने मत को स्थापित करना और दूसरे का खण्डन करना।</li>
              <li><NText bold>वितण्डा:</NText> केवल दूसरे के मत का खण्डन करना, अपना पक्ष न रखना।</li>
            </ul>
          </NCard>
          <NCard title="१६. सिद्धान्त (Siddhanta - 4 Types)">
            <ul className="space-y-2 text-sm">
              <li><NText bold>सर्वतन्त्र:</NText> सभी शास्त्रों में मान्य।</li>
              <li><NText bold>प्रतितन्त्र:</NText> किसी एक शास्त्र विशेष में मान्य।</li>
              <li><NText bold>अधिकरण:</NText> एक के सिद्ध होने पर दूसरे का स्वतः सिद्ध होना।</li>
              <li><NText bold>अभ्युपगम:</NText> बिना प्रमाण के कुछ देर के लिए मान लेना।</li>
            </ul>
          </NCard>
          <NCard title="३३. वाक्य दोष (Speech Defects - 5 Types)">
            <ul className="space-y-2 text-sm grid grid-cols-2">
              <li><NText bold>न्यून:</NText> शब्दों की कमी।</li>
              <li><NText bold>अधिक:</NText> व्यर्थ पुनरुक्ति।</li>
              <li><NText bold>अनर्थक:</NText> अर्थहीन शब्द।</li>
              <li><NText bold>अपार्थक:</NText> तालमेल न होना।</li>
              <li className="col-span-2"><NText bold>विरुद्ध:</NText> स्वयं के ही कथन का विरोध।</li>
            </ul>
          </NCard>
          <NCard title="अन्य मुख्य भेद (Other Types)">
            <ul className="space-y-2 text-sm">
              <li><NText bold>३५. छल (Fallacy - 2):</NText> वाक् छल, सामान्य छल।</li>
              <li><NText bold>११. हेतु (Reason - 4):</NText> प्रत्यक्ष, अनुमान, ऐतिह्य, औपम्य।</li>
              <li><NText bold>३६. अहेतु (Fallacious - 3):</NText> प्रकरण सम, संशय सम, वर्ण्य सम।</li>
              <li><NText bold>१७. शब्द (4):</NText> दृष्टार्थ, अदृष्टार्थ, सत्य, अनृत।</li>
            </ul>
          </NCard>
        </div>

        {/* List of remaining items */}
        <div className="bg-surface/30 p-4 border border-surfaceBorder rounded-xl">
          <p className="text-xs font-bold text-[var(--theme-accent)] mb-3 uppercase tracking-widest">List of All 44 Marga:</p>
          <div className="flex flex-wrap gap-2 text-xs opacity-70 font-medium">
            1.वाद, 2.द्रव्य, 3.गुण, 4.कर्म, 5.सामान्य, 6.विशेष, 7.समवाय, 8.प्रतिज्ञा, 9.स्थापना, 10.प्रतिस्थापना, 11.हेतु, 12.दृष्टान्त, 13.उपनय, 14.निगमन, 15.उत्तर, 16.सिद्धान्त, 17.शब्द, 18.प्रत्यक्ष, 19.अनुमान, 20.ऐतिह्य, 21.औपम्य, 22.संशय, 23.प्रयोजन, 24.सव्यभिचार, 25.जिज्ञासा, 26.व्यवसाय, 27.अर्थप्राप्ति, 28.सम्भव, 29.अनुयोज्य, 30.अननुयोज्य, 31.अनुयोग, 32.प्रत्यनुयोग, 33.वाक्य दोष, 34.वाक्य प्रशंसा, 35.छल, 36.अहेतु, 37.अतीत काल, 38.उपालम्भ, 39.परिहार, 40.प्रतिज्ञाहानि, 41.अभ्यनुज्ञा, 42.हेत्वन्तर, 43.अर्थान्तर, 44.निग्रहस्थान.
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 7. दशविध परीक्ष्य भाव (10 PARIKSHYA BHAVA)   */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox>7. दशविध परीक्ष्य भाव (10 Factors to Examine)</HandwrittenBox>
        </div>
        <p className="opacity-80 mb-6 font-medium">चिकित्सा (कार्य) आरम्भ करने से पूर्व वैद्य को इन 10 भावों की परीक्षा करनी चाहिए:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">1. कारण:</span> कर्ता (भिषक्/वैद्य)</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">2. करण:</span> भेषज (औषधि) और उपकरण</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">3. कार्ययोनि:</span> धातु-वैषम्य (बीमारी)</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">4. कार्य:</span> धातु-साम्य (आरोग्य प्राप्त करना)</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">5. कार्यफल:</span> सुख-प्राप्ति</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">6. अनुबन्ध:</span> आयु-प्राप्ति</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">7. देश (2):</span> भूमि देश (जांगल, आनूप, साधारण) और आतुर देश (शरीर)</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">8. काल (2):</span> संवत्सर (वर्ष/ऋतुएँ) और आतुरावस्था (रोग की अवस्था)</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">9. प्रवृत्ति:</span> चिकित्सा का आरम्भ करना</div>
          <div className="p-3 bg-[var(--theme-border)]/5 border border-[var(--theme-border)]/30 rounded-lg"><span className="text-[var(--theme-accent)] font-bold">10. उपाय:</span> वैद्य, औषधि आदि का उत्कृष्ट संयोजन</div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 8. दशविध आतुर परीक्षा (10 ATURA PARIKSHA)    */}
      {/* ========================================== */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <HandwrittenBox borderColor="border-amber-500/50" textColor="text-amber-600 dark:text-amber-400">
            8. दशविध आतुर परीक्षा (10-Fold Patient Examination)
          </HandwrittenBox>
        </div>
        <p className="opacity-80 mb-6 font-medium text-lg">रोगी (आतुर) के बल और दोषों को मापने के लिए यह 10 परीक्षाएं की जाती हैं:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">1</span>
            <div><NText bold>प्रकृति (Constitution):</NText> 7 प्रकार - वातज, पित्तज, कफज, वात-पित्तज, वात-कफज, पित्त-कफज, और समदोषज।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">2</span>
            <div><NText bold>विकृति (Morbidity):</NText> दोष, दूष्य, प्रकृति, देश, काल आदि के बल द्वारा रोग का बल मापना।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">3</span>
            <div><NText bold>सार (Tissue Excellence):</NText> 8 प्रकार - त्वक्, रक्त, मांस, मेद, अस्थि, मज्जा, शुक्र, और सत्त्व सार।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">4</span>
            <div><NText bold>संहनन (Compactness):</NText> 3 प्रकार - सुसंहत (प्रवर), मध्यम, और असंहत (अवर)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">5</span>
            <div><NText bold>प्रमाण (Anthropometry):</NText> शरीर की ऊंचाई/नाप, जिसे स्व-अंगुलि प्रमाण से नापा जाता है।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">6</span>
            <div><NText bold>सात्म्य (Adaptability):</NText> 3 प्रकार - प्रवर (सर्वरस सात्म्य), मध्यम, और अवर (एकरस सात्म्य)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">7</span>
            <div><NText bold>सत्त्व (Mental Strength):</NText> 3 प्रकार - प्रवर (उत्तम), मध्यम, और अवर (हीन)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">8</span>
            <div><NText bold>आहार शक्ति (Digestive Capacity):</NText> 2 प्रकार - अभ्यवहरण शक्ति (Ingestion) और जरण शक्ति (Digestion)।</div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-surface border border-surfaceBorder rounded-xl md:col-span-2">
            <span className="w-6 h-6 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)] flex items-center justify-center font-bold text-xs shrink-0">9</span>
            <div><NText bold>व्यायाम शक्ति (Physical Stamina):</NText> 3 प्रकार - प्रवर, मध्यम, और अवर।</div>
          </div>
        </div>

        {/* 10. Vaya (Age) Flowchart */}
        <div className="mt-6 border-2 border-[var(--theme-border)]/50 rounded-2xl p-6 bg-surface/50">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Clock className="w-5 h-5 text-[var(--theme-accent)]"/> 10. वय (Vaya - Age Examination)</h3>
          
          <div className="py-2 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="flex justify-center">
                <div className="bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)]/50 px-6 py-1.5 rounded-full font-bold text-[var(--theme-text)]">
                  ३ प्रकार (3 Stages)
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
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-400">बाल (Bala)</h4>
                    <p className="text-xs opacity-80">जन्म से 30 वर्ष तक</p>
                  </div>
                  {/* Bala Subtypes */}
                  <div className="border-l-2 border-emerald-500/30 pl-3 space-y-3 relative ml-4">
                    <div className="relative">
                      <div className="absolute -left-3 top-2 w-3 h-0.5 bg-emerald-500/30"></div>
                      <div className="text-xs p-2 bg-surface border border-surfaceBorder rounded-md">
                        <span className="font-bold block text-emerald-600 dark:text-emerald-400">अपरिपक्व धातु</span>
                        16 वर्ष तक (धातुओं का कच्चा होना)
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-3 top-2 w-3 h-0.5 bg-emerald-500/30"></div>
                      <div className="text-xs p-2 bg-surface border border-surfaceBorder rounded-md">
                        <span className="font-bold block text-emerald-600 dark:text-emerald-400">विवर्धमान धातु</span>
                        16 से 30 वर्ष तक (धातुओं का बढ़ना)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Madhya */}
                <div className="flex-1 bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl text-center h-fit">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400">मध्य (Madhya)</h4>
                  <p className="text-xs opacity-80 mt-1">30 से 60 वर्ष तक</p>
                </div>

                {/* Jirna */}
                <div className="flex-1 bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-center h-fit">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400">जीर्ण (Jirna)</h4>
                  <p className="text-xs opacity-80 mt-1">60 वर्ष के बाद (धातुओं का क्षय)</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </HandwrittenCanvas>
  );
}
