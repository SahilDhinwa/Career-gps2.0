"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Beaker, BookOpen } from "lucide-react";

// NEW FORMAT: Questions with Explanations & Classical References included!
const DRAVYAGUNA_PAPER_1_TEST_2 = [
  { 
    questionText: "\"दीपनं पाचनं यत् स्यात् उष्णत्वाद् द्रवशोषकम् ।\" - यह श्लोकांश किस विशिष्ट कर्म को परिभाषित करता है?", 
    options: ["ग्राही", "स्तम्भन", "भेदन", "अनुलोमन"], 
    correctAnswerIndex: 0,
    explanation: "ग्राही द्रव्य अपने उष्ण गुण के कारण दीपन-पाचन करने के साथ-साथ जलीय अंश का शोषण भी करते हैं (जैसे- शुण्ठी)।",
    reference: "शार्ङ्गधर संहिता"
  },
  { 
    questionText: "आचार्य चरक के अनुसार चिकित्सा में उपयोगी 'परादि गुणों' (Paradi Gunas) की कुल संख्या कितनी मानी गई है?", 
    options: ["5", "10", "20", "41"], 
    correctAnswerIndex: 1,
    explanation: "आचार्य चरक ने पर, अपर, युक्ति, संख्या, संयोग, विभाग, पृथक्त्व, परिमाण, संस्कार और अभ्यास - ये 10 परादि गुण माने हैं।",
    reference: "चरक सूत्रस्थान 26"
  },
  { 
    questionText: "'चतुर्जात' (Chaturjata) नामक मिश्रक वर्ग में निम्नलिखित में से कौन सा द्रव्य सम्मिलित नहीं है?", 
    options: ["त्वक् (दालचीनी)", "एला (इलायची)", "पत्र (तेजपत्ता)", "जीरक (जीरा)"], 
    correctAnswerIndex: 3,
    explanation: "चतुर्जात वर्ग में त्वक्, एला, पत्र और नागकेशर आते हैं; जीरक इसका हिस्सा नहीं है।"
  },
  { 
    questionText: "'कषाय' (Kashaya) रस में मुख्य रूप से किन महाभूतों की आधिक्यता (प्रधानता) होती है?", 
    options: ["पृथ्वी + जल", "जल + अग्नि", "पृथ्वी + वायु", "वायु + आकाश"], 
    correctAnswerIndex: 2,
    explanation: "कषाय रस की उत्पत्ति पृथ्वी और वायु महाभूत के संयोग से होती है, जिससे यह रूक्ष और स्तम्भक होता है।"
  },
  { 
    questionText: "पादप औषधियों के वानस्पतिक नामकरण के लिए प्रयुक्त होने वाली 'द्विनाम पद्धति' (Binomial Nomenclature) का जनक किसे माना जाता है?", 
    options: ["एरिस्टोटल (Aristotle)", "कार्ल लीनियस (Carl Linnaeus)", "थियोफ्रेस्टस (Theophrastus)", "विलियम रोक्सबर्ग (William Roxburgh)"], 
    correctAnswerIndex: 1,
    explanation: "कार्ल लीनियस ने जीनस (Genus) और स्पीशीज (Species) पर आधारित वैज्ञानिक द्विनाम पद्धति विकसित की थी।"
  },
  { 
    questionText: "अभाव प्रतिनिधि द्रव्य (Substitute Drugs) के सिद्धांत के अनुसार, 'अतिविषा' (Ativisha) के उपलब्ध न होने पर किस द्रव्य का प्रयोग उत्तम माना गया है?", 
    options: ["मुस्ता", "कुटज", "गुड़ूची", "चित्रक"], 
    correctAnswerIndex: 0,
    explanation: "भावप्रकाश निघण्टु के अनुसार, अतिविषा (Aconitum heterophyllum) के अभाव में समान औषधीय गुणों वाली 'मुस्ता' (Cyperus rotundus) का प्रयोग करना चाहिए।",
    reference: "भावप्रकाश निघण्टु"
  },
  { 
    questionText: "आचार्य चरक के यज्जःपुरुषीय अध्याय (सूत्रस्थान 25) के अनुसार, \"वयःस्थापनानाम्\" (Age sustaining) द्रव्यों में अग्र्य (सर्वश्रेष्ठ) किसे माना गया है?", 
    options: ["हरीतकी", "गुडूची", "अश्वगंधा", "आमलकी"], 
    correctAnswerIndex: 3,
    explanation: "चरक सूत्रस्थान 25 के अग्र्य संग्रह में आमलकी (आंवला) को बुढ़ापा रोकने वाले द्रव्यों में सर्वश्रेष्ठ बताया गया है।",
    reference: "चरक सूत्रस्थान 25"
  },
  { 
    questionText: "अपवाद (Exception) स्वरूप, 'आमलकी' (Amla) का वीर्य क्या होता है, जबकि सामान्यतः अम्ल रस वाले द्रव्य उष्ण होते हैं?", 
    options: ["शीत", "उष्ण", "अनुष्णशीत", "स्निग्ध"], 
    correctAnswerIndex: 0,
    explanation: "अम्ल रस प्रधान होने के बावजूद आमलकी अपने प्रभाव और विशिष्ट महाभूत संगठन के कारण 'शीत वीर्य' होती है।"
  },
  { 
    questionText: "'कटु विपाक' (Katu Vipaka) का शरीर के मल-मूत्र पर क्या विशिष्ट प्रभाव पड़ता है?", 
    options: ["सृष्टमूत्रशकृत् (सरलता से बाहर निकालना)", "बद्धमूत्रशकृत् (मल-मूत्र को बांधना या रोकना)", "मल-मूत्र का भेदन करना", "मल-मूत्र के वर्ण को पीला करना"], 
    correctAnswerIndex: 1,
    explanation: "कटु विपाक वातवर्धक होता है, जिससे यह मल और मूत्र का शोषण कर उन्हें बांधने (बद्ध) का कार्य करता है।"
  },
  { 
    questionText: "\"पूर्वं व्याप्याखिलं कायं ततः पाकं च गच्छति ।\" - जो द्रव्य पचने से पूर्व ही सम्पूर्ण शरीर में फ़ैल जाता है (जैसे- मद्य, विष), उस विशिष्ट कर्म को क्या कहते हैं?", 
    options: ["प्रमाथी", "विकाषी", "व्यवायी", "योगवाही"], 
    correctAnswerIndex: 2,
    explanation: "व्यवायी द्रव्य अपने तीक्ष्ण और सूक्ष्म गुणों के कारण पाचन से पहले ही रक्त आदि धातुओं के माध्यम से पूरे शरीर में तीव्र गति से फैल जाते हैं।",
    reference: "शार्ङ्गधर संहिता"
  },
  { 
    questionText: "आधुनिक भेषज विज्ञान (Pharmacology) में, जब दो औषधियों को एक साथ देने पर उनका सम्मिलित प्रभाव उनके अलग-अलग प्रभावों के योग से अधिक हो जाता है, तो उसे क्या कहते हैं?", 
    options: ["एंटागोनिज्म (Antagonism)", "सिनर्जिज्म (Synergism)", "टॉलरेंस (Tolerance)", "प्लेसीबो इफ़ेक्ट (Placebo effect)"], 
    correctAnswerIndex: 1,
    explanation: "यह एक औषधीय अंतःक्रिया (Drug Interaction) है जहाँ दो औषधियां मिलकर एक-दूसरे की प्रभावशीलता (Efficacy) को बढ़ा देती हैं।"
  },
  { 
    questionText: "आयुर्वेद के प्रसिद्ध ग्रन्थ 'भावप्रकाश निघण्टु' के रचयिता कौन हैं?", 
    options: ["मदनपाल", "नरहरि पण्डित", "भावमिश्र", "धन्वन्तरि"], 
    correctAnswerIndex: 2,
    explanation: "भावप्रकाश निघण्टु 16वीं शताब्दी में आचार्य भावमिश्र द्वारा लिखा गया था, जिसमें पादपों का बहुत स्पष्ट वर्गीकरण मिलता है।"
  },
  { 
    questionText: "\"प्रह्लादनो जीवनस्तर्पणो...\" (जो रस शरीर को प्रसन्नता देता है, जीवन शक्ति बढ़ाता है और तर्पण करता है) - यह किस रस का लक्षण है?", 
    options: ["मधुर", "अम्ल", "लवण", "कटु"], 
    correctAnswerIndex: 0,
    explanation: "मधुर रस सात्म्य होने के कारण इन्द्रियों को तृप्त करता है, बल बढ़ाता है और शरीर का पोषण (तर्पण) करता है।"
  },
  { 
    questionText: "आचार्य चरक और सुश्रुत के अनुसार 'अम्ल' रस युक्त द्रव्यों का अंतिम परिपाक (विपाक) सामान्यतः क्या होता है?", 
    options: ["मधुर", "अम्ल", "कटु", "लवण"], 
    correctAnswerIndex: 1,
    explanation: "जठराग्नि की क्रिया के बाद अम्ल रस का विपाक परिवर्तित नहीं होता, वह 'अम्ल' ही बना रहता है।"
  },
  { 
    questionText: "गुरुवादि गुणों में, जो गुण शरीर में भारीपन (Gaurava) उत्पन्न करता है और मुख्य रूप से कफ दोष को बढ़ाता है, वह कौन सा है?", 
    options: ["लघु", "स्निग्ध", "गुरु", "सूक्ष्म"], 
    correctAnswerIndex: 2,
    explanation: "गुरु (Heavy) गुण में पृथ्वी और जल महाभूत की प्रधानता होती है, जो शरीर का बृंहण कर कफ की वृद्धि करता है।"
  },
  { 
    questionText: "जो द्रव्य अपने शीत, कषाय और रूक्ष गुणों के कारण शरीर के मलों या रक्त आदि स्रावों को रोक देते हैं, उन्हें क्या कहा जाता है?", 
    options: ["ग्राही", "अनुलोमन", "भेदन", "स्तम्भन"], 
    correctAnswerIndex: 3,
    explanation: "स्तम्भन द्रव्य (जैसे- कुटज, नागकेशर) अपने रूक्ष, शीत और कषाय गुणों से स्रावों को सुखाकर वहीं रोक (Stoppage) देते हैं।"
  },
  { 
    questionText: "'बृहत् पञ्चमूल' (Brihat Panchamoola) में निम्नलिखित में से कौन सा द्रव्य सम्मिलित है?", 
    options: ["शालपर्णी", "बिल्व", "गोक्षुर", "पृश्निपर्णी"], 
    correctAnswerIndex: 1,
    explanation: "बृहत् पञ्चमूल में बड़े वृक्षों के मूल (बिल्व, श्योनाक, गाम्भारी, पाटला, अग्निमन्थ) आते हैं; शेष लघु पञ्चमूल के द्रव्य हैं।"
  },
  { 
    questionText: "सर्पगंधा और धतूरा जैसे पादपों में मुख्य रूप से कौन सा सक्रिय रासायनिक घटक (Secondary metabolite) पाया जाता है?", 
    options: ["टैनिन (Tannins)", "उड़नशील तैल (Volatile oils)", "एल्कलॉइड (Alkaloids)", "राल (Resins)"], 
    correctAnswerIndex: 2,
    explanation: "सर्पगंधा (Reserpine) और धतूरा (Hyoscine/Atropine) का मुख्य चिकित्सकीय प्रभाव उनके क्षाराभ (Alkaloids) के कारण होता है।"
  },
  { 
    questionText: "'आनूप देश' (Marshy or wet land) में उत्पन्न होने वाली औषधियों में मुख्य रूप से किन महाभूतों की अधिकता मानी जाती है?", 
    options: ["वात + आकाश", "जल + पृथ्वी", "अग्नि + वायु", "आकाश + अग्नि"], 
    correctAnswerIndex: 1,
    explanation: "आनूप देश दलदली और जल-बहुल होता है, इसलिए वहाँ उत्पन्न औषधियां जलीय और पार्थिव गुणों (गुरु, स्निग्ध) से युक्त होती हैं।"
  },
  { 
    questionText: "दन्ती और चित्रक का रस-पञ्चक लगभग समान होने पर भी दन्ती विरेचन कर्म करती है, जबकि चित्रक नहीं। दन्ती का यह विशिष्ट कर्म किसके कारण होता है?", 
    options: ["रस", "वीर्य", "विपाक", "प्रभाव"], 
    correctAnswerIndex: 3,
    explanation: "जब औषध का कर्म उसके रस, गुण, वीर्य या विपाक के नियमों से सिद्ध न हो, तो उस विशिष्ट अचिन्त्य शक्ति को 'प्रभाव' कहा जाता है।"
  }
];

export default function DravyagunaPaper1Test2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // NEW: Memory dictionary to save selected answers for previous/next navigation
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    // Prevent changing answer if already answered
    if (selectedAnswers[currentQuestion] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < DRAVYAGUNA_PAPER_1_TEST_2.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    DRAVYAGUNA_PAPER_1_TEST_2.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowScore(false);
  };

  const qData = DRAVYAGUNA_PAPER_1_TEST_2[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const userChoice = selectedAnswers[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/mcq-practice/dravyaguna" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-8 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dravyaguna Hub
        </Link>

        {showScore ? (
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-10 text-center shadow-xl animate-in fade-in zoom-in duration-500">
            <Beaker className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Test Complete!</h2>
            <p className="text-xl text-foreground/80 font-medium mb-8">
              You scored <span className="text-amber-500 font-bold text-3xl">{calculateScore()}</span> out of {DRAVYAGUNA_PAPER_1_TEST_2.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartQuiz} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2">
                <RefreshCcw className="w-5 h-5" /> Retake Test
              </button>
              <Link href="/mcq-practice/dravyaguna" className="bg-surfaceBorder hover:bg-foreground/20 text-foreground font-bold py-3 px-8 rounded-sm transition-colors flex items-center justify-center">
                Exit to Hub
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-sm p-8 md:p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-surfaceBorder pb-4">
              <span className="text-amber-500 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <Beaker className="w-4 h-4" /> Paper 1 (Test 2)
              </span>
              <span className="text-foreground/50 font-bold text-sm">
                Question {currentQuestion + 1} / {DRAVYAGUNA_PAPER_1_TEST_2.length}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
              {qData.questionText}
            </h2>
            
            <div className="space-y-4">
              {qData.options.map((option, index) => {
                let buttonStyle = "border-surfaceBorder hover:border-amber-500/50 bg-foreground/5 hover:bg-amber-500/10";
                let Icon = null;

                if (isAnswered) {
                  if (index === qData.correctAnswerIndex) {
                    buttonStyle = "border-success bg-success/10 text-success font-bold";
                    Icon = <CheckCircle2 className="w-5 h-5" />;
                  } else if (index === userChoice) {
                    buttonStyle = "border-destructive bg-destructive/10 text-destructive line-through opacity-70";
                    Icon = <XCircle className="w-5 h-5" />;
                  } else {
                    buttonStyle = "border-surfaceBorder bg-foreground/5 opacity-40";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-sm border-2 font-medium transition-all duration-300 flex justify-between items-center ${buttonStyle}`}
                  >
                    <span>{option}</span>
                    {Icon}
                  </button>
                );
              })}
            </div>

            {/* EXPLANATION POP-UP (Only shows after answering) */}
            {isAnswered && qData.explanation && (
              <div className="mt-6 bg-amber-500/5 border border-amber-500/20 rounded-sm p-5 shadow-inner animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  <span className="font-bold text-amber-500 mr-2">Explanation:</span> 
                  {qData.explanation}
                </p>
                {qData.reference && (
                  <p className="text-xs text-foreground/50 mt-3 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Ref: {qData.reference}
                  </p>
                )}
              </div>
            )}

            {/* UPGRADED NAVIGATION: Previous & Next Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-surfaceBorder/50">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`font-bold py-2.5 px-5 rounded-sm transition-colors flex items-center gap-2 ${
                  currentQuestion === 0 
                    ? 'opacity-0 pointer-events-none' 
                    : 'text-foreground/60 hover:bg-foreground/5 hover:text-foreground border border-surfaceBorder'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
              
              {isAnswered && (
                <button 
                  onClick={handleNextQuestion} 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-sm shadow-sm transition-colors flex items-center gap-2 animate-in fade-in duration-300"
                >
                  {currentQuestion + 1 === DRAVYAGUNA_PAPER_1_TEST_2.length ? "Finish Test" : "Next"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
                }

