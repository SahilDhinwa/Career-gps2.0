"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Copy, Check, FileText, Send, Mail, ShieldCheck, ChevronRight, Sparkles, FolderOpen, Info, X } from "lucide-react";

// --- TEMPLATE DATABASE ---
const templates = [
  {
    id: "daad-professor-cold-email",
    category: "Cold Outreach",
    title: "German Professor Cold Email (DAAD)",
    difficulty: "High Value",
    description: "The exact 3-paragraph outreach structure designed to secure doctoral supervision or research invitations at German public universities.",
    stipend: "DAAD €992 - €1,400 monthly",
    text: `Subject: Prospective PhD Research Supervision — [Your_Name]

Dear Professor [Professor_Last_Name],

I am writing to express my strong interest in pursuing doctoral research under your supervision at [German_University_Name]. Having graduated with a [Degree_Name] from [University_Name] with a CGPA of [CGPA], my academic focus has centered heavily on [Field_of_Study].

I have closely followed your research group's publications, particularly your paper titled '[Paper_Title].' Your findings regarding [Specific_Finding] directly complement my proposed research topic, which aims to investigate [Research_Topic]. Given Germany's world-leading infrastructure in [Research_Area], I believe your lab is the premier environment to execute this work.

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
    stipend: "Commonwealth £1,378 - £1,652 monthly",
    text: `The primary developmental challenge I am addressing in India is [Challenge_Name]. According to recent data from [Data_Source], only [Percentage]% of [Affected_Population] currently have access to [Resource/Service]. This gap directly limits progress toward UN Sustainable Development Goal [SDG_Number]. My professional experience as a [Job_Title] at [Company/NGO] has demonstrated that the root cause of this challenge is a lack of [Structural_Gap].

To address this structural gap, I require the advanced training offered by the [Course_Name] at [UK_University_Name]. This specific curriculum offers unique modules in [Module_Name_1] and [Module_Name_2], which are unavailable at this scale in Indian institutions. Under the guidance of [Professor_Name], whose research focuses on [Professor_Research_Area], I will acquire the precise skills needed to design, implement, and measure [Solution_Name].

Immediately upon returning to India, I will rejoin [Employer/Organization] as a [Proposed_Role]. Leveraging the expertise acquired in the UK, I will lead the implementation of [Name_of_Project/Policy]. Within 24 months, my goal is to scale this model across [Geographic_Region], directly improving delivery for [Estimated_Number] of beneficiaries.

Over the next 5-10 years, this project will contribute to national Indian development priorities by [Specific_Impact]. By transforming [Current_System] into a modernized, sustainable system, we will build a scalable blueprint that advances India's commitment to SDG [SDG_Number].`
  },
  {
    id: "chevening-leadership-framework",
    category: "SOPs/Essays",
    title: "Leadership & Influence Essay Framework (Chevening)",
    difficulty: "Prestige Masterclass",
    description: "A strict, story-driven drafting layout utilizing the STAR method to prove real-world influence.",
    stipend: "Chevening £917 - £1,134 monthly",
    text: `CHEVENING LEADERSHIP ESSAY DRAFTING FRAMEWORK

A true leader is not defined by an administrative title, but by the proactive willingness to step forward when a system stalls. Throughout my [Number] years of experience in the [Industry_Name] sector, I have consistently utilized collaborative negotiation and strategic foresight to turn operational inertia into measurable community impact.

In [Year], while serving as [Role] at [Organization_Name], we were confronted with a critical roadblock: [Describe_Challenge]. If left unaddressed, this challenge threatened to [Consequence]. My specific task was to lead a diverse team of [Number] specialists to resolve this issue within a strict deadline of [Timeframe], despite significant internal resistance regarding [Conflict_Source].

Recognizing that authoritative demands would fail, I initiated a collaborative strategy. First, I conducted [Action_1] to identify the root causes of the resistance. Second, I introduced [Action_2] to streamline communication. When a critical bottleneck occurred in [Area], I personally intervened by [Action_3]. By empowering team members to take ownership of [Specific_Task], I restored alignment and maintained project velocity.

As a direct result of my leadership actions, we successfully [Result_1]. This intervention achieved [Result_2]. More importantly, it established a permanent cultural shift toward [Value/Behavior] within our organization, proving that sustainable leadership is rooted in empowerment and structured execution.`
  }
];

export default function ActionVault() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<any | null>(null);

  const categories = ["All", "Cold Outreach", "SOPs/Essays", "Cover Letters"];

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || t.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-surface border border-surfaceBorder rounded-sm shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
            <div className="p-6 border-b border-surfaceBorder flex justify-between items-center">
              <h3 className="font-heading text-xl font-bold">{previewTemplate.title}</h3>
              <button onClick={() => setPreviewTemplate(null)} className="text-gray-400 hover:text-gray-900"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-8 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-body text-sm text-gray-700 bg-gray-50 p-4 rounded-sm border border-gray-100">
                {previewTemplate.text}
              </pre>
            </div>
            <div className="p-6 border-t border-surfaceBorder flex justify-end">
               <button onClick={() => setPreviewTemplate(null)} className="bg-primary text-white font-bold py-2 px-6 rounded-sm">Close</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">The Action Vault</h1>
          <p className="text-lg text-gray-600 max-w-2xl">Battle-tested templates to bypass blank page anxiety and accelerate your application timeline.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="w-full pl-10 pr-4 py-3 border border-surfaceBorder rounded-sm focus:outline-none focus:border-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-3 rounded-sm font-bold text-sm whitespace-nowrap transition-colors ${
                  category === cat ? "bg-primary text-white" : "bg-white border border-surfaceBorder text-gray-700 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="bg-surface border border-surfaceBorder rounded-sm shadow-sm p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-sm">
                  {template.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-sm">
                  {template.difficulty}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3">{template.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow">{template.description}</p>
              
              <div className="mb-6 bg-success/5 border border-success/10 p-4 rounded-sm flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-success shrink-0" />
                 <p className="text-sm font-bold text-success">Unlocks {template.stipend} pathways</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => handleCopy(template.id, template.text)}
                  className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 rounded-sm transition-all ${
                    copiedId === template.id ? "bg-success text-white" : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {copiedId === template.id ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Template</>}
                </button>
                <button 
                  onClick={() => setPreviewTemplate(template)}
                  className="flex-1 flex items-center justify-center gap-2 font-bold py-3 rounded-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Info className="w-4 h-4" /> Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

