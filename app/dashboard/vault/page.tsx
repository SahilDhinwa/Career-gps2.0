"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Copy,
  Check,
  FileText,
  Send,
  Mail,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  FolderOpen,
  Info,
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

// --- TEMPLATE DATABASE ---
const TEMPLATES: Template[] = [
  {
    id: "daad-professor-cold-email",
    category: "Cold Outreach",
    title: "German Professor Cold Email (DAAD)",
    difficulty: "High Value",
    description:
      "The exact 3-paragraph outreach structure designed to secure doctoral supervision or research invitations at German public universities.",
    stipendConnection: "Unlocks DAAD €992 - €1,400 monthly stipend pathways.",
    rawText: `Subject: Prospective PhD Research Supervision — [Your_Name] — [Your_Field]

Dear Professor [Professor_Last_Name],

I am writing to express my strong interest in pursuing doctoral research under your supervision at [German_University_Name]. Having graduated with a [Degree] from [University_Name] with a CGPA of [Score], my academic focus has centered heavily on [Core_Subject].

I have closely followed your research group's publications, particularly your paper titled '[Insert_Paper_Title].' Your findings regarding [Specific_Detail] directly complement my proposed research topic, which aims to investigate [Your_Proposed_Topic]. Given Germany's world-leading infrastructure in [Field_Name], I believe your lab is the premier environment to execute this work.

I plan to apply for the prestigious DAAD Research Grant, which fully covers my tuition, health insurance, and provides a €1,400 monthly living stipend, requiring no funding from your department. I have attached my CV and a comprehensive 2-page Research Proposal for your consideration. I would be immensely grateful for the opportunity to schedule a brief 10-minute Zoom call to discuss potential alignment.

Thank you for your valuable time and consideration.

Sincerely,
[Your_Name]`,
  },
  {
    id: "commonwealth-development-statement",
    category: "SOPs/Essays",
    title: "500-Word Development Impact Statement (Commonwealth)",
    difficulty: "Prestige Masterclass",
    description:
      "A highly optimized, four-stage drafting framework structured to pass the strict sustainable development criteria of the UK CSC and MoE India.",
    stipendConnection:
      "Unlocks UK Commonwealth £1,378 - £1,652 monthly stipend pathways.",
    rawText: `The primary developmental challenge addressing [Specific_Region] in India is [Core_Issue]. According to recent data from [Credible_Source], only [Percentage]% of [Affected_Population] currently have access to [Resource/Service]. This gap directly limits progress toward UN Sustainable Development Goal [Number]: [SDG_Name]. My professional experience as a [Job_Title] at [Company/NGO] has demonstrated that the root cause of this challenge is a lack of [Specific_Deficit].

To address this structural gap, I require the advanced training offered by the [Program_Name] at [UK_University_Name]. This specific curriculum offers unique modules in [Module_Name_1] and [Module_Name_2], which are unavailable at this scale in Indian institutions. Under the guidance of [Professor_Name], whose research focuses on [Topic], I will acquire the precise skills needed to design, implement, and measure [Intervention_Strategy].

Immediately upon returning to India, I will rejoin [Sector/Organization] as a [Target_Role]. Leveraging the expertise acquired in the UK, I will lead the implementation of [Name_of_Project/Policy]. Within 24 months, my goal is to scale this model across [Target_Area], directly improving [Metric] delivery for [Estimated_Number] of beneficiaries.

Over the next 5-10 years, this project will contribute to national Indian development priorities by [Long_Term_Outcome]. By transforming [Current_State] into a modernized, sustainable system, we will build a scalable blueprint that advances India's commitment to SDG [Number].`,
  },
  {
    id: "chevening-leadership-framework",
    category: "SOPs/Essays",
    title: "Leadership & Influence Essay Framework (Chevening)",
    difficulty: "Prestige Masterclass",
    description:
      "A strict, story-driven drafting layout utilizing the STAR method (Situation, Task, Action, Result) to prove real-world influence.",
    stipendConnection:
      "Unlocks UK Chevening £917 - £1,134 monthly living allowance pathways.",
    rawText: `CHEVENING LEADERSHIP ESSAY DRAFTING FRAMEWORK

A true leader is not defined by an administrative title, but by the proactive willingness to step forward when a system stalls. Throughout my [Number] years of experience in the [Industry] sector, I have consistently utilized collaborative negotiation and strategic foresight to turn operational inertia into measurable community impact.

In [Year], while serving as [Job_Title] at [Organization_Name], we were confronted with a critical roadblock: [Describe_The_Crisis]. If left unaddressed, this challenge threatened to [Negative_Outcome]. My specific task was to lead a diverse team of [Number] specialists to resolve this issue within a strict deadline of [Timeframe], despite significant internal resistance regarding [Point_of_Friction].

Recognizing that authoritative demands would fail, I initiated a collaborative strategy. First, I conducted [Action_1] to identify the root causes of the resistance. Second, I introduced [Action_2] to streamline communication. When a critical bottleneck occurred in [Area], I personally intervened by [Action_3]. By empowering team members to take ownership of [Specific_Tasks], I restored alignment and maintained project velocity.

As a direct result of my leadership actions, we successfully [Primary_Result]. This intervention achieved [Quantifiable_Metric_1] and [Quantifiable_Metric_2]. More importantly, it established a permanent cultural shift toward [New_Practice] within our organization, proving that sustainable leadership is rooted in empowerment and structured execution.`,
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Cold Outreach",
  "SOPs/Essays",
  "Cover Letters",
];

// --- MAIN COMPONENT ---
export default function ActionVault() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((template) => {
      const matchesCategory =
        activeCategory === "All" || template.category === activeCategory;
      const matchesSearch =
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Copy handler
  const handleCopy = (template: Template) => {
    navigator.clipboard.writeText(template.rawText);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0B1410] font-body pb-20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-[#FBFBF9]/90 border-b border-[#E2E6E3] px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-2">
              <FolderOpen className="text-[#114232]" size={28} />
              The Action Vault
            </h1>
            <p className="text-sm mt-1 text-[#0B1410]/70 max-w-lg">
              Premium, battle-tested document frameworks. Replace blank-page
              anxiety with structured, immediate execution.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0B1410]/50"
              size={18}
            />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E2E6E3] bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#114232]/20 transition-all text-sm shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
          <Filter className="text-[#0B1410]/50 mr-2" size={18} />
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={\`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border \${
                activeCategory === category
                  ? "bg-[#114232] text-[#FBFBF9] border-[#114232]"
                  : "bg-transparent text-[#0B1410] border-[#E2E6E3] hover:border-[#114232]/40 hover:bg-[#E2E6E3]/30"
              }\`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group relative flex flex-col bg-[#FFFFFF] rounded-xl border border-[#E2E6E3] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Subtle category-colored top border indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#114232]/10 group-hover:bg-[#114232] transition-colors" />

                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-[#E2E6E3]/50 text-[#0B1410] text-xs font-semibold rounded-md flex items-center gap-1.5">
                    <FileText size={12} />
                    {template.category}
                  </span>
                  <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold rounded-md flex items-center gap-1.5">
                    <ShieldCheck size={12} />
                    {template.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold mb-2 text-[#0B1410]">
                  {template.title}
                </h3>
                <p className="text-sm text-[#0B1410]/70 mb-6 flex-grow leading-relaxed">
                  {template.description}
                </p>

                <div className="mb-6 py-3 px-4 bg-[#2A9D8F]/10 rounded-lg flex items-start gap-2 border border-[#2A9D8F]/20">
                  <Sparkles
                    className="text-[#2A9D8F] shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-xs font-medium text-[#2A9D8F]">
                    {template.stipendConnection}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <button
                    onClick={() => handleCopy(template)}
                    className={\`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all border \${
                      copiedId === template.id
                        ? "bg-[#2A9D8F]/10 border-[#2A9D8F] text-[#2A9D8F]"
                        : "bg-[#114232] border-[#114232] text-[#FBFBF9] hover:bg-[#0A291F]"
                    }\`}
                  >
                    {copiedId === template.id ? (
                      <>
                        <Check size={16} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setPreviewTemplate(template)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold border border-[#E2E6E3] text-[#0B1410] hover:bg-[#FBFBF9] transition-all"
                  >
                    Preview
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-[#0B1410]/50">
              <Info size={48} className="mb-4 opacity-50" />
              <p className="text-lg font-medium">No templates found.</p>
              <p className="text-sm mt-1">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>

      {/* Active Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-[#0B1410]/40 transition-opacity">
          <div className="bg-[#FFFFFF] w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E2E6E3]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E6E3] bg-[#FBFBF9]">
              <div className="flex items-center gap-3">
                <Mail className="text-[#114232]" size={20} />
                <h2 className="font-heading font-bold text-lg">
                  {previewTemplate.title}
                </h2>
              </div>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="p-2 hover:bg-[#E2E6E3] rounded-full transition-colors"
              >
                <span className="sr-only">Close</span>
                <ChevronRight size={20} className="rotate-180" />
              </button>
            </div>

            {/* Modal Body (Raw Text) */}
            <div className="p-6 overflow-y-auto flex-grow bg-white">
              <pre className="whitespace-pre-wrap font-body text-sm leading-relaxed text-[#0B1410] p-6 bg-[#FBFBF9] border border-[#E2E6E3] rounded-lg">
                {previewTemplate.rawText}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#E2E6E3] bg-[#FBFBF9] flex justify-end gap-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-[#E2E6E3] text-[#0B1410] hover:bg-[#E2E6E3]/50 transition-all"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleCopy(previewTemplate);
                  setTimeout(() => setPreviewTemplate(null), 1000);
                }}
                className={\`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all \${
                  copiedId === previewTemplate.id
                    ? "bg-[#2A9D8F] text-[#FFFFFF]"
                    : "bg-[#114232] text-[#FBFBF9] hover:bg-[#0A291F]"
                }\`}
              >
                {copiedId === previewTemplate.id ? (
                  <>
                    <Check size={16} /> Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy to Clipboard
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
