"use client";

import Link from "next/link";
import { ArrowLeft, Scale, ShieldAlert, BookOpen, FileText } from "lucide-react";

// ==========================================
// 📚 HIGH-YIELD NOTES DATA
// ==========================================
const LEGAL_NOTES = [
  {
    title: "1. CrPC & BNSS – Inquests & Investigations",
    icon: <ShieldAlert className="w-5 h-5 text-emerald-500" />,
    items: [
      { old: "174 CrPC", new: "194 BNSS", name: "Police Inquest", desc: "Grants authority to a police officer to investigate suicides, murders, accidental, or suspicious deaths." },
      { old: "176 CrPC", new: "196 BNSS", name: "Magistrate Inquest", desc: "Investigation by an Executive Magistrate. Mandatory for deaths in police custody, dowry deaths, police firing, and exhumations." },
      { old: "53 CrPC", new: "51 BNSS", name: "Medical Examination", desc: "Examination of an accused by a medical practitioner at the request of a police officer." },
    ]
  },
  {
    title: "2. IPC & BNS – Basic Definitions & Evidence",
    icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
    items: [
      { old: "IPC 44", new: "BNS 2(14)", name: "Injury", desc: "Legally defines injury as any harm illegally caused to a person in body, mind, reputation, or property." },
      { old: "IPC 46", new: "BNS 2(6)", name: "Death", desc: "Legally defines death as the death of a human being." },
      { old: "IPC 193", new: "BNS 229", name: "False Evidence (Perjury)", desc: "Punishment for intentionally giving or fabricating false evidence during a judicial proceeding." },
      { old: "IPC 197", new: "BNS 234", name: "False Medical Certificate", desc: "Issuing or signing a medical certificate knowing it to be false in any material point (e.g., faking illness for a patient)." },
    ]
  },
  {
    title: "3. IPC & BNS – Hurt & Physical Injuries",
    icon: <Scale className="w-5 h-5 text-emerald-500" />,
    items: [
      { old: "IPC 319", new: "BNS 114", name: "Hurt", desc: "Causing bodily pain, disease, or infirmity to any person." },
      { old: "IPC 320", new: "BNS 116", name: "Grievous Hurt", desc: "Defines 8 specific severe injuries (e.g., emasculation, permanent loss of sight/hearing, bone fractures, disfigurement)." },
      { old: "IPC 323", new: "BNS 115(2)", name: "Punishment for Hurt", desc: "Punishment for voluntarily causing simple hurt." },
      { old: "IPC 324", new: "BNS 118", name: "Hurt by Dangerous Weapons", desc: "Voluntarily causing hurt by means of any instrument used for shooting, stabbing, or cutting." },
    ]
  },
  {
    title: "4. IPC & BNS – Medical Negligence, Dowry & Homicide",
    icon: <FileText className="w-5 h-5 text-emerald-500" />,
    items: [
      { old: "IPC 299", new: "BNS 100", name: "Culpable Homicide", desc: "Causing death by doing an act with the intention or knowledge that it is likely to cause death." },
      { old: "IPC 300", new: "BNS 101", name: "Murder", desc: "When culpable homicide amounts to murder (with specific premeditation and intention)." },
      { old: "IPC 304A", new: "BNS 106", name: "Death by Negligence", desc: "Causing death by a rash or negligent act not amounting to culpable homicide. (Primary section applied for Medical Negligence)." },
      { old: "IPC 304B", new: "BNS 80", name: "Dowry Death", desc: "Death of a woman by burns or bodily injury within 7 years of marriage, with prior cruelty/harassment for dowry." },
      { old: "IPC 498A", new: "BNS 85 & 86", name: "Cruelty for Dowry", desc: "Subjecting a married woman to physical or mental cruelty by her husband or his relatives (often linked with dowry demands)." },
      { old: "IPC 309", new: "BNS 226", name: "Attempted Suicide", desc: "Attempting to commit suicide to compel or restrain the exercise of lawful power." },
    ]
  },
  {
    title: "5. IPC & BNS – Sexual Offences & Miscarriage",
    icon: <ShieldAlert className="w-5 h-5 text-emerald-500" />,
    items: [
      { old: "IPC 312", new: "BNS 88", name: "Causing Miscarriage", desc: "Voluntarily causing a pregnant woman to miscarry (Criminal Abortion), except when done in good faith to save the woman's life." },
      { old: "IPC 313", new: "BNS 89", name: "Miscarriage without Consent", desc: "Causing a miscarriage without the woman's consent (carries a much heavier penalty, up to life imprisonment)." },
      { old: "IPC 375", new: "BNS 63", name: "Rape", desc: "Defines the specific legal parameters, penetrative acts, and the lack of consent required to constitute the crime of rape." },
      { old: "IPC 376", new: "BNS 64", name: "Punishment for Rape", desc: "Details the varying degrees of punishment for rape, including aggravated circumstances." },
      { old: "IPC 376D", new: "BNS 70", name: "Gang Rape", desc: "Defines and punishes rape committed by one or more persons acting in furtherance of a common intention." },
    ]
  },
  {
    title: "6. IPC & BNS – Consent & Criminal Responsibility",
    icon: <Scale className="w-5 h-5 text-emerald-500" />,
    items: [
      { old: "IPC 84", new: "BNS 22", name: "Unsound Mind (Insanity)", desc: "Nothing is an offence if done by a person who, due to unsoundness of mind, is incapable of knowing the nature of the act (McNaughten's Rule)." },
      { old: "IPC 87", new: "BNS 25", name: "Consent to Risk", desc: "Act done by consent (above 18 years) which is not intended or known to be likely to cause death or grievous hurt." },
      { old: "IPC 89", new: "BNS 27", name: "Guardian Consent", desc: "Act done in good faith for the benefit of a child (under 12) or insane person, by or by consent of the guardian." },
      { old: "IPC 90", new: "BNS 28", name: "Invalid Consent", desc: "Consent given under fear of injury, misconception of fact, intoxication, or unsoundness of mind is not legally valid consent." },
    ]
  }
];

export default function IpcCrpcNotes() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300 pt-8 md:pt-12 pb-24 px-4 md:px-6 font-sans">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link href="/short-notes/agada-tantra" className="inline-flex items-center gap-2 text-foreground/60 hover:text-emerald-500 transition-colors mb-6 md:mb-10 font-bold text-xs md:text-sm bg-surface/50 px-3 py-2 md:px-4 md:py-2 rounded-sm border border-surfaceBorder backdrop-blur-sm shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Agada Tantra Notes
        </Link>

        {/* Header Section */}
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-6 md:p-10 mb-10 md:mb-12 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="w-3 h-3" /> Quick Revision Compendium
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground drop-shadow-sm relative z-10 leading-tight">
            IPC / CrPC to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">BNS / BNSS</span>
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 font-medium max-w-3xl relative z-10 leading-relaxed">
            A complete, high-yield comparative mapping of the old Indian Penal Code & Criminal Procedure Code to the new Bharatiya Nyaya Sanhita & Bharatiya Nagarik Suraksha Sanhita.
          </p>
        </div>

        {/* Notes Content */}
        <div className="space-y-10 md:space-y-12">
          {LEGAL_NOTES.map((category, index) => (
            <div key={index} className="flex flex-col">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 px-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  {category.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground font-heading">
                  {category.title}
                </h2>
              </div>

              {/* Data Table / Grid */}
              <div className="bg-surface/40 backdrop-blur-sm border border-surfaceBorder rounded-2xl overflow-hidden shadow-sm">
                
                {/* Desktop Table View (Hidden on very small screens, scrolls horizontally if needed) */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-emerald-500/5 border-b border-surfaceBorder text-foreground/60 text-xs md:text-sm uppercase tracking-widest">
                        <th className="p-4 md:p-5 font-bold min-w-[140px]">Provision Name</th>
                        <th className="p-4 md:p-5 font-bold min-w-[120px] text-rose-500/80">Old Code</th>
                        <th className="p-4 md:p-5 font-bold min-w-[120px] text-emerald-600 dark:text-emerald-400">New Code</th>
                        <th className="p-4 md:p-5 font-bold min-w-[300px]">Brief Explanation / Medicolegal Importance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surfaceBorder/50">
                      {category.items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-foreground/5 transition-colors">
                          <td className="p-4 md:p-5 font-bold text-foreground text-sm md:text-base align-top">
                            {item.name}
                          </td>
                          <td className="p-4 md:p-5 align-top">
                            <span className="inline-block px-2.5 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 font-bold text-xs md:text-sm rounded-md whitespace-nowrap">
                              {item.old}
                            </span>
                          </td>
                          <td className="p-4 md:p-5 align-top">
                            <span className="inline-block px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs md:text-sm rounded-md whitespace-nowrap shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                              {item.new}
                            </span>
                          </td>
                          <td className="p-4 md:p-5 text-sm text-foreground/80 font-medium leading-relaxed align-top">
                            {item.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
