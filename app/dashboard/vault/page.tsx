"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { auth } from "../../../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  Search,
  Filter,
  Copy,
  Check,
  FileText,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  FolderOpen,
  Info,
  Lock,
  Mail
} from "lucide-react";

// --- TYPES ---
type Category = "All" | "Cold Outreach" | "SOPs/Essays" | "Cover Letters";

interface Template {
  id: string;
  category: Exclude<Category, "All">;
  title: string;
  difficulty: string;
  description: string;
  stipendConnection: string;
  rawText: string;
}

// --- TEMPLATE DATABASE (6 Elite Templates) ---
const TEMPLATES: Template[] = [
  {
    id: "daad-professor-cold-email",
    category: "Cold Outreach",
    title: "German Professor Cold Email (DAAD)",
    difficulty: "High Value",
    description: "The exact 3-paragraph outreach structure designed to secure doctoral supervision or research invitations at German public universities.",
    stipendConnection: "Unlocks DAAD €1,400 monthly stipend pathways.",
    rawText: `Subject: Prospective PhD Research Supervision — [Your_Name] — [Your_Field]

Dear Professor [Professor_Last_Name],

I am writing to express my strong interest in pursuing doctoral research under your supervision at [German_University_Name]. Having graduated with a [Degree] from [University_Name] with a CGPA of [Score], my academic focus has centered heavily on [Core_Subject].

I have closely followed your research group's publications, particularly your paper titled '[Insert_Paper_Title].' Your findings regarding [Specific_Detail] directly complement my proposed research topic, which aims to investigate [Your_Proposed_Topic]. Given Germany's world-leading infrastructure in [Field_Name], I believe your lab is the premier environment to execute this work.

I plan to apply for the prestigious DAAD Research Grant, which fully covers my tuition, health insurance, and provides a €1,400 monthly living stipend, requiring no funding from your department. I have attached my CV and a comprehensive 2-page Research Proposal for your consideration. I would be immensely grateful for the opportunity to schedule a brief 10-minute Zoom call to discuss potential alignment.

Thank you for your valuable time and consideration.

Sincerely,
[Your_Name]`
  },
  {
    id: "commonwealth-development-statement",
    category: "SOPs/Essays",
    title: "500-Word Development Impact Statement (Commonwealth)",
    difficulty: "Prestige Masterclass",
    description: "A highly optimized, four-stage drafting framework structured to pass the strict sustainable development criteria of the UK CSC and MoE India.",
    stipendConnection: "Unlocks UK Commonwealth £1,652 monthly stipend pathways.",
    rawText: `The primary developmental challenge addressing [Specific_Region] in India is [Core_Issue]. According to recent data from [Credible_Source], only [Percentage]% of [Affected_Population] currently have access to [Resource/Service]. This gap directly limits progress toward UN Sustainable Development Goal [Number]: [SDG_Name]. My professional experience as a [Job_Title] at [Company/NGO] has demonstrated that the root cause of this challenge is a lack of [Specific_Deficit].

To address this structural gap, I require the advanced training offered by the [Program_Name] at [UK_University_Name]. This specific curriculum offers unique modules in [Module_Name_1] and [Module_Name_2], which are unavailable at this scale in Indian institutions. Under the guidance of [Professor_Name], whose research focuses on [Topic], I will acquire the precise skills needed to design, implement, and measure [Intervention_Strategy].

Immediately upon returning to India, I will rejoin [Sector/Organization] as a [Target_Role]. Leveraging the expertise acquired in the UK, I will lead the implementation of [Name_of_Project/Policy]. Within 24 months, my goal is to scale this model across [Target_Area], directly improving [Metric] delivery for [Estimated_Number] of beneficiaries.

Over the next 5-10 years, this project will contribute to national Indian development priorities by [Long_Term_Outcome]. By transforming [Current_State] into a modernized, sustainable system, we will build a scalable blueprint that advances India's commitment to SDG [Number].`
  },
  {
    id: "chevening-leadership-framework",
    category: "SOPs/Essays",
    title: "Leadership & Influence Essay Framework (Chevening)",
    difficulty: "Prestige Masterclass",
    description: "A strict, story-driven drafting layout utilizing the STAR method (Situation, Task, Action, Result) to prove real-world influence.",
    stipendConnection: "Unlocks UK Chevening £1,134 monthly allowance pathways.",
    rawText: `CHEVENING LEADERSHIP ESSAY DRAFTING FRAMEWORK

A true leader is not defined by an administrative title, but by the proactive willingness to step forward when a system stalls. Throughout my [Number] years of experience in the [Industry] sector, I have consistently utilized collaborative negotiation and strategic foresight to turn operational inertia into measurable community impact.

In [Year], while serving as [Job_Title] at [Organization_Name], we were confronted with a critical roadblock: [Describe_The_Crisis]. If left unaddressed, this challenge threatened to [Negative_Outcome]. My specific task was to lead a diverse team of [Number] specialists to resolve this issue within a strict deadline of [Timeframe], despite significant internal resistance regarding [Point_of_Friction].

Recognizing that authoritative demands would fail, I initiated a collaborative strategy. First, I conducted [Action_1] to identify the root causes of the resistance. Second, I introduced [Action_2] to streamline communication. When a critical bottleneck occurred in [Area], I personally intervened by [Action_3]. By empowering team members to take ownership of [Specific_Tasks], I restored alignment and maintained project velocity.

As a direct result of my leadership actions, we successfully [Primary_Result]. This intervention achieved [Quantifiable_Metric_1] and [Quantifiable_Metric_2]. More importantly, it established a permanent cultural shift toward [New_Practice] within our organization, proving that sustainable leadership is rooted in empowerment and structured execution.`
  },
  {
    id: "fulbright-study-objective",
    category: "SOPs/Essays",
    title: "Study/Research Objective Framework (Fulbright-Nehru)",
    difficulty: "Prestige Masterclass",
    description: "A meticulous essay structure demonstrating clear academic intent, U.S. institutional alignment, and a strict post-fellowship India return plan.",
    stipendConnection: "Unlocks USIEF $45K/year comprehensive funding.",
    rawText: `FULBRIGHT-NEHRU STUDY OBJECTIVE DRAFTING FRAMEWORK

My central objective in applying for the Fulbright-Nehru Master's Fellowship is to acquire advanced technical expertise in [Specific_Field] to address [Specific_Indian_Problem] in India. My undergraduate studies in [UG_Degree] equipped me with a foundational understanding of [Core_Concept], but my subsequent [Number] years of professional experience at [Company_Name] revealed a critical gap in my capacity to [Specific_Limitation].

To overcome this, I intend to pursue a Master's degree in [Program_Name] at a U.S. institution such as [Target_US_University]. The U.S. academic ecosystem is uniquely suited for my goals because it offers [Specific_US_Advantage, e.g., interdisciplinary lab access/industry partnerships] that are currently developing in India. Specifically, I plan to focus on coursework related to [Course_1] and [Course_2], which directly translate to solving [Indian_Problem].

Beyond academics, I view the Fulbright Fellowship as a platform for bilateral cultural exchange. I look forward to sharing Indian perspectives on [Cultural/Professional_Topic] with my American peers, fostering mutual understanding in an increasingly globalized [Your_Industry] sector. 

Upon completion of my program, I am fully committed to returning to India to resume my work in the [Sector_Name]. My immediate goal is to join an organization like [Target_Indian_Organization] to implement [Specific_Solution]. Long-term, I aim to lead policy/technical initiatives that bridge the gap between U.S. innovation and Indian application, directly advancing India's capabilities in [Broad_Field].`
  },
  {
    id: "mext-research-plan",
    category: "SOPs/Essays",
    title: "Field of Study & Research Plan (MEXT Japan)",
    difficulty: "High Value",
    description: "A highly structured, logical framework required by the Japanese embassy to connect your past academic background to your future Japanese research.",
    stipendConnection: "Unlocks MEXT 100% Tuition & ¥145,000 monthly.",
    rawText: `MEXT FIELD OF STUDY AND RESEARCH PROGRAM PLAN

1. Past and Present Field of Study:
During my undergraduate studies in [Degree_Name] at [University_Name], my primary focus was on [Core_Subject]. My thesis, titled "[Thesis_Title]," investigated [Brief_Summary_of_Research]. Through this project, I developed strong competencies in [Skill_1] and [Skill_2]. However, my research concluded that in order to achieve [Higher_Level_Goal], an advanced understanding of [Japanese_Specialty_Topic] is required.

2. Research Theme in Japan:
Proposed Theme: [Clear, Concise Title of Proposed Research]

3. Proposed Research Program in Japan:
(a) Purpose of the Research:
The primary objective of this research is to resolve the challenge of [Specific_Problem] by applying [Specific_Method/Technology]. I chose Japan for this research because Japanese institutions, particularly [Target_Japanese_University], pioneer global advancements in [Niche_Field].

(b) Methodology:
First, I will conduct a comprehensive literature review of current Japanese methodologies regarding [Topic]. Second, utilizing the laboratory facilities at the host university, I will execute [Specific_Experiment/Analysis]. Finally, I will compare the data against [Benchmark/Current_Standard] to evaluate the efficacy of [Proposed_Solution].

(c) Expected Results and Impact:
This research is expected to yield [Specific_Outcome]. Upon returning to India, I will integrate these findings into [Specific_Indian_Industry/Academic_Sector], directly contributing to the technological/cultural cooperation between India and Japan.`
  },
  {
    id: "daad-wise-motivation",
    category: "Cover Letters",
    title: "WISE Internship Motivation Letter (DAAD)",
    difficulty: "Standard",
    description: "A persuasive, one-page cover letter template for Indian STEM undergraduates applying for funded summer research internships in Germany.",
    stipendConnection: "Unlocks DAAD WISE €861/month + travel allowance.",
    rawText: `[Your_Name]
[Your_Address]
[Your_Email]
[Date]

[Professor_Name/Selection Committee]
[Institute/Department Name]
[Target_German_University]

Subject: Application for DAAD WISE Research Internship — [Your_Name]

Dear [Professor_Name or Selection Committee],

I am writing to express my enthusiastic interest in joining your research group as a DAAD WISE intern for the upcoming summer. I am currently in my [Year, e.g., third] year of a [Degree, e.g., B.Tech in Mechanical Engineering] at [Indian_University_Name], maintaining a CGPA of [Score].

My academic journey has been driven by a deep fascination with [Specific_Field]. Recently, I completed a project on [Project_Topic], where I successfully utilized [Software/Tool/Method] to achieve [Specific_Result]. When I discovered your lab’s recent work on [Lab's_Recent_Project], I was immediately drawn to your innovative approach to [Specific_Concept]. 

I am highly motivated to contribute to your ongoing research regarding [Specific_Task_in_Lab]. My hands-on experience with [Skill_1] and theoretical background in [Skill_2] make me well-prepared to assist your team effectively. The opportunity to train in Germany’s rigorous academic environment under your mentorship would be a pivotal step in my career.

I have attached my academic transcripts, CV, and a letter of recommendation from my current professor. Thank you for considering my application. I look forward to the possibility of contributing to your esteemed institute.

Sincerely,

[Your_Name]
[Your_Phone_Number]`
  }
];

const CATEGORIES: Category[] = ["All", "Cold Outreach", "SOPs/Essays", "Cover Letters"];

// --- MAIN COMPONENT ---
export default function ActionVault() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  
  // Auth State
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((template) => {
      const matchesCategory = activeCategory === "All" || template.category === activeCategory;
      const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || template.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Copy handler
  const handleCopy = (template: Template) => {
    if (!user) return; // Guard clause for unauthenticated users
    navigator.clipboard.writeText(template.rawText);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body pb-20 relative">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-surface/90 border-b border-surfaceBorder px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-2 text-foreground">
              <FolderOpen className="text-primary" size={28} />
              The Action Vault
            </h1>
            <p className="text-sm mt-1 text-gray-600 max-w-lg font-medium">
              Premium, battle-tested document frameworks. Replace blank-page anxiety with structured, immediate execution.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-surfaceBorder bg-surface focus:outline-none focus:border-primary transition-all text-sm shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8 relative">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide relative z-20">
          <Filter className="text-gray-500 mr-2" size={18} />
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-gray-600 border-surfaceBorder hover:border-primary/40 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- AUTHENTICATION GATEKEEPER --- */}
        <div className="relative mt-6">
          
          {!user && !isAuthLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-surface border border-surfaceBorder rounded-sm shadow-2xl p-8 max-w-md w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-warning/10 border border-warning/20 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Lock className="w-8 h-8 text-warning" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Unlock the Action Vault</h3>
                <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                  Create a free account to access 50+ copy-paste templates proven to win international scholarships.
                </p>
                <Link 
                  href="/login" 
                  className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:bg-primaryHover hover:-translate-y-0.5 transition-all flex items-center justify-center shadow-lg"
                >
                  Login / Sign Up
                </Link>
                <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest">Takes 30 Seconds</p>
              </div>
            </div>
          )}

          {/* Template Grid (Blurred if locked) */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${!user && !isAuthLoading ? 'pointer-events-none blur-[6px] opacity-60 select-none' : ''}`}>
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <div key={template.id} className="group relative flex flex-col bg-surface rounded-sm border border-surfaceBorder p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  
                  {/* Subtle category-colored top border indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 group-hover:bg-primary transition-colors" />

                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1.5">
                      <FileText size={12} /> {template.category}
                    </span>
                    <span className="px-3 py-1 bg-warning/10 text-warning border border-warning/20 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1.5">
                      <ShieldCheck size={12} /> {template.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground leading-tight">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed font-medium">
                    {template.description}
                  </p>

                  <div className="mb-6 py-3 px-4 bg-success/5 rounded-sm flex items-start gap-3 border border-success/20">
                    <Sparkles className="text-success shrink-0 mt-0.5" size={16} />
                    <span className="text-xs font-bold text-success leading-tight">
                      {template.stipendConnection}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <button
                      onClick={() => handleCopy(template)}
                      disabled={!user}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-bold transition-all border ${
                        copiedId === template.id
                          ? "bg-success text-white border-success shadow-md"
                          : "bg-primary border-primary text-white hover:bg-primaryHover shadow-sm"
                      }`}
                    >
                      {copiedId === template.id ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy</>}
                    </button>
                    <button
                      onClick={() => user && setPreviewTemplate(template)}
                      disabled={!user}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-bold border border-surfaceBorder text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      <Info size={16} /> Preview
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                <FolderOpen size={48} className="mb-4 opacity-50 text-primary" />
                <p className="text-lg font-bold text-gray-600">No templates found.</p>
                <p className="text-sm mt-1 font-medium">Try adjusting your search or category filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Active Preview Modal (Only accessible if logged in) */}
      {previewTemplate && user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-background/80 transition-opacity animate-in fade-in">
          <div className="bg-surface w-full max-w-3xl max-h-[90vh] rounded-sm shadow-2xl flex flex-col overflow-hidden border border-surfaceBorder">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-surfaceBorder bg-gray-50">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <h2 className="font-heading font-bold text-xl text-foreground">
                  {previewTemplate.title}
                </h2>
              </div>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="p-2 hover:bg-gray-200 rounded-sm transition-colors text-gray-500"
              >
                <span className="sr-only">Close</span>
                <ChevronRight size={20} className="rotate-180" />
              </button>
            </div>

              {/* Modal Footer */}
            <div className="px-6 py-5 border-t border-surfaceBorder bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-6 py-3 rounded-sm text-sm font-bold border border-surfaceBorder text-gray-700 hover:bg-white transition-all shadow-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleCopy(previewTemplate);
                  setTimeout(() => setPreviewTemplate(null), 1500);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold transition-all shadow-sm ${
                  copiedId === previewTemplate.id
                    ? "bg-success text-white"
                    : "bg-primary text-white hover:bg-primaryHover"
                }`}
              >
                {copiedId === previewTemplate.id ? <><Check size={16} /> Copied to Clipboard</> : <><Copy size={16} /> Copy to Clipboard</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
                  
             
