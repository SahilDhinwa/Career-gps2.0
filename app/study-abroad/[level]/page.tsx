import Link from "next/link";
import { Lock } from "lucide-react"; 
import PremiumPaymentButton from "@/components/PremiumPaymentButton"; 

// 1. THE DATA DICTIONARY
// This stores all the unique content for each level, keeping the UI clean.
const scholarshipData = {
  ug: [
    {
      id: "ug-1",
      title: "MEXT Undergraduate Scholarship",
      location: "Japan • Ministry of Education (MEXT)",
      description: "100% tuition waiver, round-trip flights, and a ¥117,000 monthly stipend. Includes 1 full year of Japanese language training.",
      roadmapId: "mext-ug"
    },
    {
      id: "ug-2",
      title: "DAAD WISE Research Internship",
      location: "Germany • Various Universities",
      description: "Exclusive to Indian undergraduate students in STEM. Offers a 2-6 month research stint in Germany with an EUR 861 monthly stipend and travel allowance.",
      roadmapId: "daad-wise"
    }
  ],
  masters: [
    {
      id: "pg-1",
      title: "Chevening Scholarship",
      location: "United Kingdom • Any UK University",
      description: "UK's premier fully-funded Master's scholarship. Covers full tuition, flights, visa fees, and provides a £917–£1,134 monthly stipend.",
      roadmapId: "chevening-pg"
    },
    {
      id: "pg-2",
      title: "DAAD Study Scholarship",
      location: "Germany • Public Universities",
      description: "Fully-funded Master's support providing EUR 992/month. Takes advantage of Germany's zero-tuition public university system.",
      roadmapId: "daad-pg"
    }
  ],
  phd: [
    {
      id: "phd-1",
      title: "DAAD Research Grants",
      location: "Germany • Research Institutes",
      description: "Offers EUR 1,400/month for doctoral candidates. Requires a detailed research proposal and acceptance from a German supervisor.",
      roadmapId: "daad-phd"
    },
    {
      id: "phd-2",
      title: "MEXT Research Scholarship",
      location: "Japan • Target Universities",
      description: "Covers 3-4 years of doctoral research with a ¥145,000 monthly stipend, flights, and full tuition coverage.",
      roadmapId: "mext-phd"
    }
  ]
};

export default function ScholarshipList({ params }: { params: { level: string } }) {
  // 2. SMART ROUTING LOGIC
  const levelKey = params.level as keyof typeof scholarshipData;
  const currentScholarships = scholarshipData[levelKey] || scholarshipData.ug; // Fallback to UG

  const levelName = params.level === "ug" ? "Undergraduate" : params.level === "masters" ? "Master's" : "PhD";

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight mb-2">Fully Funded Scholarships</h1>
        <p className="text-gray-600 font-medium">Showing: {levelName} Level Scholarships</p>
      </div>

      <div className="space-y-6">
        
        {/* 3. DYNAMIC RENDERING OF UNLOCKED CARDS */}
        {currentScholarships.map((scholarship, index) => (
          <div key={scholarship.id} className={`bg-surface p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
            index === 0 ? "border-l-4 border-l-primary border-y border-r border-surfaceBorder shadow-sm" : "border border-surfaceBorder"
          }`}>
            <div>
              <h2 className={`font-heading text-2xl font-bold ${index === 0 ? "" : "text-gray-800"}`}>
                {scholarship.title}
              </h2>
              <p className="text-gray-500 font-medium mb-2">{scholarship.location}</p>
              <p className="text-gray-700 max-w-2xl">{scholarship.description}</p>
            </div>
            <Link 
              href={`/roadmap/${scholarship.roadmapId}`} 
              className={`shrink-0 px-6 py-3 font-bold transition-colors ${
                index === 0 ? "bg-primary text-white hover:bg-primaryHover" : "bg-white border-2 border-primary text-primary hover:bg-gray-50"
              }`}
            >
              View Roadmap
            </Link>
          </div>
        ))}

        {/* Locked Premium Cards Container */}
        <div className="relative mt-12">
          
          {/* Overlay Lock UI */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/40 backdrop-blur-[6px]">
            <div className="bg-surface p-8 shadow-xl text-center max-w-md border border-surfaceBorder rounded-sm">
              <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Unlock Premium Access</h3>
              <p className="text-gray-600 mb-6">Unlock all 5 scholarships, full stage-by-stage roadmaps, and detailed progress tracking.</p>
              
              <PremiumPaymentButton />
              
            </div>
          </div>

          {/* Blurred Background Cards (Skeleton UI) */}
          <div className="space-y-6 opacity-40 select-none pointer-events-none">
            {[3, 4, 5].map((id) => (
              <div key={id} className="bg-surface border border-surfaceBorder p-6 rounded-sm">
                <div className="h-6 bg-gray-300 w-1/3 mb-4 rounded-none"></div>
                <div className="h-4 bg-gray-200 w-1/4 mb-4 rounded-none"></div>
                <div className="h-4 bg-gray-100 w-full mb-2 rounded-none"></div>
                <div className="h-4 bg-gray-100 w-4/5 rounded-none"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
