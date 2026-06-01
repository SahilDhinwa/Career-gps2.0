import Link from "next/link";
import { Briefcase, Building, Rocket, Globe, Lock } from "lucide-react";

export default function Home() {
  const pathways = [
    { id: 1, title: "Government Jobs", icon: Building, active: false },
    { id: 2, title: "Private Jobs", icon: Briefcase, active: false },
    { id: 3, title: "Self Employed / Startup", icon: Rocket, active: false },
    { id: 4, title: "Study Abroad", icon: Globe, active: true, href: "/study-abroad" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Career GPS — Your Roadmap to a Better Future
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          India&apos;s first structured career guidance platform for students. Select your destination and follow the roadmap.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pathways.map((path) => {
          const Icon = path.icon;
          if (path.active && path.href) {
            return (
              <Link key={path.id} href={path.href} className="group relative bg-surface border-2 border-primary p-8 hover:shadow-xl transition-all flex flex-col items-center justify-center min-h-[240px] text-center cursor-pointer">
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="font-heading text-2xl font-bold">{path.title}</h2>
                <p className="text-primary mt-2 font-medium">Active Pathway &rarr;</p>
              </Link>
            );
          }
          return (
            <div key={path.id} className="relative bg-surface/50 border border-surfaceBorder p-8 flex flex-col items-center justify-center min-h-[240px] text-center opacity-70 grayscale cursor-not-allowed">
              <Icon className="w-12 h-12 text-gray-400 mb-4" />
              <h2 className="font-heading text-2xl font-bold text-gray-500">{path.title}</h2>
              <div className="flex items-center gap-2 mt-2 text-gray-400 font-medium">
                <Lock className="w-4 h-4" /> Coming Soon
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
