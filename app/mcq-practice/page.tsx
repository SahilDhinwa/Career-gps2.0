"use client";

import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

const QUESTIONS = [
  // --- खण्ड 1: सूत्र एवं निदान स्थान ---
  { id: 1, q: "आयुर्वेद के 'त्रिसूत्र' (स्कन्धत्रय) में निम्नलिखित में से कौन सम्मिलित नहीं है?", options: ["हेतु", "लिङ्ग", "औषध", "सम्प्राप्ति"], ans: "सम्प्राप्ति" },
  { id: 2, q: "चरक के अनुसार 'विपरीत गुणैर्देषमात्राकालोपपादितैः' यह किसका लक्षण है?", options: ["निदान", "पूर्वरूप", "उपशय", "सम्प्राप्ति"], ans: "उपशय" },
  { id: 3, q: "'स्वेदोऽतिप्रवृत्तिरप्रवृत्तिर्वा, वैवर्ण्यं...' यह किस व्याधि का पूर्वरूप है?", options: ["प्रमेह", "कुष्ठ", "राजयक्ष्मा", "ज्वर"], ans: "कुष्ठ" },
  { id: 4, q: "'चिन्त्यं विचार्यमूह्यं च ध्येयं सङ्कल्पमेव च।' यह किसके विषय (कर्म) हैं?", options: ["बुद्धि", "आत्मा", "मन", "अहङ्कार"], ans: "मन" },
  { id: 5, q: "'सर्वेषामेव रोगाणां निदानं कुपिता मलाः।' यह सिद्धान्त चरक के किस अध्याय में वर्णित है?", options: ["ज्वर निदान", "अपस्मार निदान", "गुल्म निदान", "प्रमेह निदान"], ans: "अपस्मार निदान" },
  { id: 6, q: "गुल्म के कुल कितने अधिष्ठान (स्थान) बताये गए हैं?", options: ["3", "4", "5", "7"], ans: "5" },
  { id: 7, q: "अपस्मार में 'फेनोद्वमी' (मुंह से झाग आना) लक्षण किस दोष की प्रधानता दर्शाता है?", options: ["वात", "पित्त", "कफ", "सन्निपात"], ans: "वात" },
  { id: 8, q: "'गुरु चातर्पणं चेष्टं ............... कर्शनं प्रति।' (श्लोक पूर्ण करें)", options: ["कृशानां", "स्थूलानां", "प्रमेहिणां", "कुष्ठिनां"], ans: "स्थूलानां" },
  { id: 9, q: "प्रमेह व्याधि में मुख्य रूप से किस दोष की प्रधानता होती है?", options: ["वात", "पित्त", "कफ", "रक्त"], ans: "कफ" },
  { id: 10, q: "चरक सूत्रस्थान के अनुसार 'लङ्घन' के कुल कितने प्रकार हैं?", options: ["6", "8", "10", "12"], ans: "10" },

  // --- खण्ड 2: विमान स्थान ---
  { id: 11, q: "चरक विमान स्थान के अनुसार 'रस' कितने प्रकार के होते हैं?", options: ["4", "5", "6", "8"], ans: "6" },
  { id: 12, q: "अष्टौ आहार विधि विशेष आयतनों में 'प्रकृति' का क्या अर्थ है?", options: ["संयोग", "स्वभाव", "राशि", "उपयोग संस्था"], ans: "स्वभाव" },
  { id: 13, q: "'त्रिविधं रोग विशेष विज्ञानम्' (रोग परीक्षा) में कौन सम्मिलित नहीं है?", options: ["प्रत्यक्ष", "अनुमान", "आप्तोपदेश", "युक्ति"], ans: "युक्ति" },
  { id: 14, q: "जनपदोध्वंस के मुख्य चार कारणों में कौन शामिल नहीं है?", options: ["वायु", "जल", "देश", "अग्नि"], ans: "अग्नि" },
  { id: 15, q: "दशविध परीक्ष्य भावों में 'करण' का तात्पर्य किससे है?", options: ["कर्ता", "कार्य", "भैषज्य", "देश"], ans: "भैषज्य" },
  { id: 16, q: "चरक के अनुसार प्राणवह स्रोतस का मूल स्थान क्या है?", options: ["हृदय और महास्रोतस", "फुफ्फुस और श्वासनली", "यकृत और प्लीहा", "वृक्क और वपावहन"], ans: "हृदय और महास्रोतस" },
  { id: 17, q: "चरक संहिता के अनुसार विमान स्थान में कृमि के कुल कितने भेद बताए गए हैं?", options: ["4", "5", "20", "24"], ans: "20" },
  { id: 18, q: "'परपक्षप्रतिषेधमात्रप्रयोजना.......।' यह वाद मार्ग के किस पद का लक्षण है?", options: ["वाद", "जल्प", "वितण्डा", "हेत्वाभास"], ans: "वितण्डा" },
  { id: 19, q: "मनुष्यों में 'सार' कितने प्रकार के बताये गए हैं?", options: ["6", "7", "8", "9"], ans: "8" },
  { id: 20, q: "चरक के अनुसार 'सङ्ख्या प्राधान्य विधिविकल्प बलकाल' यह किसके भेद हैं?", options: ["हेतु", "सम्प्राप्ति", "पूर्वरूप", "उपशय"], ans: "सम्प्राप्ति" },

  // --- खण्ड 3: शारीर स्थान ---
  { id: 21, q: "'षड्धातुज पुरुष' में पञ्चमहाभूतों के अतिरिक्त छठा भाव क्या है?", options: ["मन", "अहङ्कार", "चेतना", "बुद्धि"], ans: "चेतना" },
  { id: 22, q: "'शुक्रशोणितजीवसंयोगे तु खलु......।' (रिक्त स्थान भरें)", options: ["गर्भाशयगते गर्भसंज्ञा भवति", "कुक्षिगते गर्भसंज्ञा भवति", "योनौ गर्भसंज्ञा भवति", "नाभिगते गर्भसंज्ञा भवति"], ans: "कुक्षिगते गर्भसंज्ञा भवति" },
  { id: 23, q: "गर्भ में 'त्वक्, रक्त, मांस, मेद, नाभि, हृदय' किस भाव से उत्पन्न होते हैं?", options: ["मातृज", "पितृज", "रसज", "सात्म्यज"], ans: "मातृज" },
  { id: 24, q: "चरक शारीर स्थान के अनुसार शरीर में कुल अस्थियों की संख्या कितनी है?", options: ["300", "306", "360", "206"], ans: "360" },
  { id: 25, q: "पर ओज (हृदयस्थ ओज) का प्रमाण कितना होता है?", options: ["अष्ट बिन्दु", "अर्ध अञ्जलि", "एक अञ्जलि", "दो बिन्दु"], ans: "अष्ट बिन्दु" },
  { id: 26, q: "चरक के अनुसार 'मन' के कितने गुण माने गए हैं?", options: ["1", "2 (अणुत्व और एकत्व)", "3 (सत्त्व, रज, तम)", "5"], ans: "2 (अणुत्व और एकत्व)" },
  { id: 27, q: "'चतुर्विंशति पुरुष' (24 तत्त्व) में क्या सम्मिलित है?", options: ["अष्ट प्रकृति + षोडश विकार", "एकादश इन्द्रिय + पञ्चमहाभूत", "पञ्चतन्मात्रा + मन", "इनमें से कोई नहीं"], ans: "अष्ट प्रकृति + षोडश विकार" },
  { id: 28, q: "शारीर स्थान के अनुसार पञ्चमहाभूतों में 'आकाश' का विशिष्ट गुण क्या है?", options: ["स्पर्श", "रूप", "रस", "शब्द"], ans: "शब्द" },
  { id: 29, q: "चरक के अनुसार सत्त्व (मन) के मुख्य कितने भेद (महाभेद) हैं?", options: ["2", "3 (सात्त्विक, राजसिक, तामसिक)", "7", "16"], ans: "3 (सात्त्विक, राजसिक, तामसिक)" },
  { id: 30, q: "चरक संहिता के अनुसार शरीर में कुल कितनी त्वचाएँ (Skin layers) बताई गई हैं?", options: ["5", "6", "7", "8"], ans: "6" },

  // --- खण्ड 4: इन्द्रिय स्थान एवं विविध ---
  { id: 31, q: "चरक संहिता में 'इन्द्रिय स्थान' का मुख्य प्रतिपाद्य विषय (Subject matter) क्या है?", options: ["इन्द्रिय रचना", "अरिष्ट (मृत्युसूचक) लक्षण", "इन्द्रिय रोग", "शरीर प्रमाण"], ans: "अरिष्ट (मृत्युसूचक) लक्षण" },
  { id: 32, q: "'पुष्पितक' (पुष्पितक इन्द्रिय) का वर्णन चरक के किस स्थान में है?", options: ["विमान स्थान", "निदान स्थान", "इन्द्रिय स्थान", "शारीर स्थान"], ans: "इन्द्रिय स्थान" },
  { id: 33, q: "इन्द्रिय स्थान के अनुसार 'छाया' कितने प्रकार की होती है?", options: ["4", "5", "6", "7"], ans: "5" },
  { id: 34, q: "चरक के अनुसार 'प्रभा' कितने प्रकार की होती है?", options: ["5", "6", "7", "8"], ans: "7" },
  { id: 35, q: "'गोमयचूर्णवर्णाभं...' (गाय के सूखे गोबर के चूर्ण जैसा) किस व्याधि का अरिष्ट शकृत् लक्षण है?", options: ["राजयक्ष्मा", "प्रमेह", "गुल्म", "उदर रोग"], ans: "राजयक्ष्मा" },
  { id: 36, q: "'क्षीरघृतभ्यासो ...............।' (अग्र्यसंग्रह पूर्ण करें)", options: ["जीवनीयानाम्", "बृंहणानाम्", "रसायनानाम्", "वृष्याणाम्"], ans: "रसायनानाम्" },
  { id: 37, q: "संतर्पणोत्थ व्याधियों की श्रेष्ठ चिकित्सा क्या मानी गई है?", options: ["अपतर्पण (रूक्षण)", "संतर्पण (बृंहण)", "स्नेहन", "रक्तमोक्षण"], ans: "अपतर्पण (रूक्षण)" },
  { id: 38, q: "विधीशोणितीय अध्याय के अनुसार शुद्ध रक्त का वर्ण कैसा होता है?", options: ["गुञ्जाफल सवर्ण", "पद्मालक्तक सन्ननिभ", "इन्द्रगोपक सङ्काश", "उपर्युक्त सभी"], ans: "उपर्युक्त सभी" },
  { id: 39, q: "चरक के अनुसार 'त्रिमर्म' (Three vital organs) में कौन सम्मिलित नहीं है?", options: ["हृदय", "बस्ति", "शिर", "नाभि"], ans: "नाभि" },
  { id: 40, q: "अष्टौ निन्दित पुरुष में सर्वाधिक निन्दित (Most condemned) किसे माना गया है?", options: ["अतिदीर्घ", "अतिह्रस्व", "अतिस्थूल", "अतिकृश"], ans: "अतिस्थूल" }
];

export default function MCQPractice() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: number, option: string) => {
    if (!showResults) {
      setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
    }
  };

  const calculateScore = () => {
    let score = 0;
    QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.ans) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm shadow-xl p-8 mb-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 relative z-10" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 relative z-10">
            BAMS 2nd Prof: Charaka Samhita
          </h1>
          <p className="text-foreground/70 font-medium inline-flex items-center gap-2 relative z-10">
            <ShieldCheck className="w-4 h-4 text-success" /> Personal Study Vault (40 Questions)
          </p>
        </div>

        {/* Questions Loop */}
        <div className="space-y-8">
          {QUESTIONS.map((q, index) => (
            <div key={q.id} className="bg-surface/90 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Question Text */}
              <h3 className="font-bold text-foreground mb-6 text-lg md:text-xl leading-relaxed">
                <span className="text-primary mr-2">Q{index + 1}.</span> {q.q}
              </h3>
              
              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((option) => {
                  const isSelected = selectedAnswers[q.id] === option;
                  const isCorrect = option === q.ans;
                  
                  let buttonStyle = "bg-background border-surfaceBorder text-foreground/80 hover:border-primary/50 hover:bg-primary/5";
                  
                  if (showResults) {
                    if (isCorrect) {
                      buttonStyle = "bg-success/10 border-success text-success font-bold";
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = "bg-red-500/10 border-red-500 text-red-500 line-through opacity-70";
                    } else {
                      buttonStyle = "bg-background border-surfaceBorder text-foreground/40 opacity-50";
                    }
                  } else if (isSelected) {
                    buttonStyle = "bg-primary/10 border-primary text-primary font-bold shadow-sm";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(q.id, option)}
                      disabled={showResults}
                      className={`text-left p-4 md:p-5 rounded-sm border-2 transition-all duration-300 flex items-center justify-between group ${buttonStyle}`}
                    >
                      <span>{option}</span>
                      
                      {/* Icons for Result Validation */}
                      {showResults && isCorrect && <CheckCircle className="w-5 h-5 text-success shrink-0" />}
                      {showResults && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button & Results Panel */}
        <div className="mt-12 flex flex-col items-center pb-12">
          {!showResults ? (
            <button 
              onClick={() => {
                if (Object.keys(selectedAnswers).length < 40) {
                  const confirmSubmit = window.confirm("You haven't answered all questions. Submit anyway?");
                  if (!confirmSubmit) return;
                }
                setShowResults(true);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top to see score
              }}
              className="bg-primary text-white font-bold py-5 px-12 rounded-sm shadow-xl hover:bg-primaryHover hover:-translate-y-1 transition-all flex items-center gap-3 text-lg"
            >
              परिणाम जांचें (Submit Test) <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <div className="text-center bg-surface border border-surfaceBorder p-10 rounded-sm shadow-2xl w-full max-w-md animate-in slide-in-from-bottom-4 duration-500">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-success/10 rounded-full mb-6 border-4 border-success/20">
                <CheckCircle className="w-12 h-12 text-success" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-3">
                Score: {calculateScore()} / 40
              </h2>
              <p className="text-foreground/60 font-medium mb-8">
                {calculateScore() >= 35 ? "Excellent preparation! You are ready for the exams." : 
                 calculateScore() >= 25 ? "Good job, but keep revising the core sutras." : 
                 "Needs more revision. Re-read the chapters."}
              </p>
              <button 
                onClick={() => { 
                  setShowResults(false); 
                  setSelectedAnswers({}); 
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-surfaceBorder/30 text-foreground font-bold py-4 rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                पुनः प्रयास करें (Retake Test)
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
