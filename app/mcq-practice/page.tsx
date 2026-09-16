"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Leaf, FlaskConical, Stethoscope, ChevronRight, Lock } from "lucide-react";

const TEST_MODULES = [
  {
    id: "charaka-1",
    title: "Charaka Samhita (Purvardha)",
    part: "Part 1",
    questions: "20 Questions",
    icon: <BookOpen className="w-6 h-6 text-amber-500" />,
    link: "/mcq-practice/charaka-1", // We will build this route next!
    status: "active"
  },
  {
    id: "dravyaguna-1",
    title: "Dravyaguna Vigyan",
    part: "Part 1",
    questions: "20 Questions",
    icon: <Leaf className="w-6 h-6 text-amber-500" />,
    link: "/mcq-practice/dravyaguna-1", // The one we just built!
    status: "active"
  },
  {
    id: "rasa-1",
    title: "Rasa Shastra & B.K.",
    part: "Part 1",
    questions: "20 Questions",
    icon: <FlaskConical className="w-6 h-6 text-foreground/40" />,
    link: "#",
    status: "locked"
  },
  {
    id: "roga-1",
    title: "Roga Nidana",
    part: "Part 1",
    questions: "20 Questions",
    icon: <Stethoscope className="w-6 h-6 text-foreground/40" />,
    link: "#",
    status: "locked"
  }
];

export default function MCQDirectory() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-12 pb-24 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/bams-hub" className="inline-flex items-center gap-2 text-foreground/60 hover:text-amber-500 transition-colors mb-10 font-bold text-sm bg-surface/50 px-4 py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Command Center
        </Link>

        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-sm relative z-10">
            MCQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Test Series</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium max-w-2xl relative z-10">
            Select a subject to begin your 20-question rapid revision sprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEST_MODULES.map((module) => (
            module.status === "active" ? (
              <Link key={module.id} href={module.link} className="group bg-surface/80 backdrop-blur-sm border border-surfaceBorder rounded-sm p-6 flex items-center justify-between hover:border-amber-500/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-sm flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    {module.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1 block">{module.part}</span>
                    <h3 className="font-bold text-foreground text-xl mb-1">{module.title}</h3>
                    <p className="text-foreground/50 font-medium text-sm">{module.questions}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ) : (
              <div key={module.id} className="bg-surface/40 backdrop-blur-sm border border-dashed border-surfaceBorder rounded-sm p-6 flex items-center justify-between opacity-70 cursor-not-allowed">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-foreground/5 rounded-sm flex items-center justify-center shrink-0 border border-surfaceBorder">
                    {module.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1 block">{module.part}</span>
                    <h3 className="font-bold text-foreground/60 text-xl mb-1">{module.title}</h3>
                    <p className="text-foreground/40 font-medium text-sm">Coming Soon</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40">
                  <Lock className="w-4 h-4" />
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
