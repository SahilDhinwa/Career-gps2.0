import Link from "next/link";
import { ArrowLeft, BookOpen, Globe, FileText, CheckCircle } from "lucide-react";

export default function UGRoadmap() {
  const roadmapSteps = [
    {
      id: 1,
      title: "Profile Building & Standardized Tests",
      desc: "Prepare for the SAT/ACT and English proficiency tests (IELTS/TOEFL). Focus on extracurriculars and leadership.",
      icon: <BookOpen className="w-6 h-6" />,
      status: "active"
    },
    {
      id: 2,
      title: "University Shortlisting",
      desc: "Select safety, target, and reach universities based on your academic profile, budget, and desired major.",
      icon: <Globe className="w-6 h-6" />,
      status: "locked"
    },
    {
      id: 3,
      title: "Essays & Applications",
      desc: "Draft your Statement of Purpose (SOP), secure Letters of Recommendation (LORs), and submit via the Common App.",
      icon: <FileText className="w-6 h-6" />,
      status: "locked"
    },
    {
      id: 4,
      title: "Visa & Departure",
      desc: "Prepare your financial documents, ace your student visa interview, and book your flights!",
      icon: <CheckCircle className="w-6 h-6" />,
      status: "locked"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      
      {/* Header Section */}
      <div className="mb-10">
        <Link 
          href="/study-abroad" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6 font-bold text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <h1 className="font-heading text-4xl font-bold tracking-tight mb-3">Undergraduate (UG) Roadmap</h1>
        <p className="text-lg text-gray-600">Your step-by-step guide to securing a Bachelor's degree abroad.</p>
      </div>

      {/* Roadmap Steps */}
      <div className="grid gap-6">
        {roadmapSteps.map((step) => (
          <div 
            key={step.id} 
            className={`bg-surface p-6 rounded-xl flex items-start gap-5 transition-all ${
              step.status === "active" 
                ? "border-2 border-primary shadow-md" 
                : "border border-surfaceBorder opacity-60"
            }`}
          >
            {/* Step Icon */}
            <div className={`p-4 rounded-full ${
              step.status === "active" ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
            }`}>
              {step.icon}
            </div>

            {/* Step Content */}
            <div className="flex-grow">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Step {step.id}: {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.desc}</p>
              
              {/* Action Button / Lock Status */}
              {step.status === "active" ? (
                <button className="bg-primary text-white px-6 py-2 text-sm font-bold hover:bg-primaryHover transition-colors">
                  Start Step
                </button>
              ) : (
                <span className="inline-block text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded uppercase tracking-widest">
                  Locked
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

