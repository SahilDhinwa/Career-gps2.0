"use client";

import { HandwrittenCanvas, HandwrittenTitle, HandwrittenBox } from "@/components/HandwrittenCanvas";

export default function PharmacologyNotes() {
  return (
    <HandwrittenCanvas>
      
      <HandwrittenTitle badge={<>Your <span className="text-red-600">OPD</span><br/>Guide</>}>
        Pharmacology
      </HandwrittenTitle>

      {/* Definition Row */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-2xl">
        <HandwrittenBox>Drug definition</HandwrittenBox>
        <span className="text-slate-800">→</span>
        <span className="text-blue-700">Drogue&apos; - dry herb.</span>
      </div>

      <p className="text-blue-700 text-xl leading-relaxed mb-8 pl-4">
        Drug is defined as pharmaceutical drug is also referred to as medicinal product, medicine, medication or drug used to diagnose, cure, treat or to prevent disease.
      </p>

      {/* Types Section */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-2xl mb-4">
          <HandwrittenBox borderColor="border-red-600" className="rounded-[50%]">
            Type
          </HandwrittenBox>
          <span className="text-slate-800">→</span>
        </div>

        <ul className="space-y-3 pl-12 text-xl text-slate-800">
          <li>① Solid - Tablets, powders</li>
          <li>② Liquid - <span className="text-blue-700">Emulsion, syrup, suspension.</span></li>
          <li>③ Semisolid - <span className="text-blue-700">Ointment, cream, gels</span></li>
          <li>④ Gaseous - <span className="text-blue-700">Aerosols, inhalation sprays</span></li>
        </ul>
      </div>

    </HandwrittenCanvas>
  );
}
