import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StudyAbroadLevel() {
  const levels = [
      { id: "ug", title: "UG (Undergraduate)", desc: "Class 11–12 students applying for Bachelor's abroad" },
          { id: "masters", title: "Master's", desc: "College graduates applying for Master's programs" },
              { id: "phd", title: "PhD", desc: "Postgraduates applying for doctoral programs" },
                ];

                  return (
                      <div className="max-w-4xl mx-auto px-6 py-20">
                            <div className="mb-12">
                                    <h1 className="font-heading text-4xl font-bold tracking-tight mb-4">Choose Your Level</h1>
                                            <p className="text-lg text-gray-600">Select the stage of education you are planning for.</p>
                                                  </div>

                                                        <div className="flex flex-col gap-4">
                                                                {levels.map((lvl) => (
                                                                          <Link key={lvl.id} href={`/study-abroad/${lvl.id}`} className="group flex items-center justify-between bg-surface border border-surfaceBorder p-6 hover:border-primary hover:shadow-md transition-all">
                                                                                      <div>
                                                                                                    <h2 className="font-heading text-2xl font-bold mb-1">{lvl.title}</h2>
                                                                                                                  <p className="text-gray-600">{lvl.desc}</p>
                                                                                                                              </div>
                                                                                                                                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                                                                                                                                                    </Link>
                                                                                                                                                            ))}
                                                                                                                                                                  </div>
                                                                                                                                                                      </div>
                                                                                                                                                                        );
                                                                                                                                                                        }
                                                                                                                                                                        