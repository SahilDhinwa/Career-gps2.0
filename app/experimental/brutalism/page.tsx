"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RawBrutalismPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [highContrast, setHighContrast] = useState(false);

  const archiveFiles = [
    { code: "BAMS-101", subject: "Padartha Vigyan Evam Ayurved Itihas", type: "TEXT/HTML", size: "42 KB", year: "Prof I" },
    { code: "BAMS-102", subject: "Sanskrit_Samhita_Subhashita_Notes.txt", type: "TEXT/PLAIN", size: "18 KB", year: "Prof I" },
    { code: "BAMS-103", subject: "Kriya_Sharir_Tridosha_Homeostasis.doc", type: "APP/DOC", size: "128 KB", year: "Prof I" },
    { code: "BAMS-104", subject: "Rachana_Sharir_Marma_Points_Index.htm", type: "TEXT/HTML", size: "64 KB", year: "Prof I" },
    { code: "VG-201", subject: "Rural_To_Global_Public_Speaking_Manual.txt", type: "TEXT/PLAIN", size: "95 KB", year: "All Years" },
    { code: "VG-202", subject: "International_Scholarship_SOP_Templates.htm", type: "TEXT/HTML", size: "51 KB", year: "All Years" },
  ];

  const filtered = archiveFiles.filter(
    (item) =>
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className={`min-h-screen font-serif p-4 sm:p-8 ${
        highContrast ? "bg-black text-[#00FF00]" : "bg-[#C0C0C0] text-black"
      }`}
    >
      {/* Classic 1995 Windows / Mosaic Container */}
      <div className={`max-w-5xl mx-auto border-2 p-1 ${
        highContrast 
          ? "bg-black border-[#00FF00]" 
          : "bg-white border-t-white border-l-white border-r-black border-b-black shadow-[4px_4px_0px_#000000]"
      }`}>
        
        {/* Classic Navy Blue Title Bar */}
        <div className="bg-[#000080] text-white font-mono text-xs sm:text-sm font-bold px-3 py-1.5 flex items-center justify-between">
          <span>INDEX OF /PUB/ACADEMIC/VEBLEN_GOOD_ARCHIVE (CERN-HTTPD/3.0)</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="bg-[#C0C0C0] text-black font-mono text-[11px] px-2 py-0.5 border border-t-white border-l-white border-r-black border-b-black"
            >
              {highContrast ? "[STANDARD VGA]" : "[TERMINAL BW]"}
            </button>
            <Link
              href="/experimental"
              className="bg-[#C0C0C0] text-black font-mono text-[11px] px-2 py-0.5 border border-t-white border-l-white border-r-black border-b-black"
            >
              [X] EXIT
            </Link>
          </div>
        </div>

        {/* Inner Document Body */}
        <div className="p-4 sm:p-8">
          
          <div className="mb-4 font-mono text-xs">
            <Link 
              href="/experimental" 
              className={highContrast ? "text-yellow-300 underline" : "text-[#0000EE] underline hover:text-[#FF0000]"}
            >
              &lt;&lt; Return to Parent Directory (/experimental)
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold underline mb-3">
            Style #06: Raw Web Brutalism (1995)
          </h1>

          <p className="text-sm sm:text-base mb-4 leading-snug">
            <strong>PHILOSOPHY:</strong> Raw Brutalism rejects modern decorative CSS. Inspired by Sir Tim Berners-Lee&apos;s original 1991 WorldWideWeb browser and Craigslist, it exposes the raw HTML skeleton—system serif fonts, unstyled HTML tables, and 0 KB of decorative bloat. Even on a 2G mobile connection in a remote village, this page loads in <strong>0.01 seconds</strong>.
          </p>

          <hr className="border-t-2 border-black my-6" />

          {/* Raw HTML Form Filter */}
          <div className={`p-4 border-2 mb-6 font-mono text-xs sm:text-sm ${
            highContrast ? "border-[#00FF00] bg-black" : "border-black bg-[#ECE9D8]"
          }`}>
            <label className="block font-bold mb-2">
              QUERY ACADEMIC DIRECTORY (TYPE SUBJECT OR CODE):
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Kriya, Sanskrit, VG-201..."
                className="border-2 border-black px-2 py-1 text-black bg-white font-mono text-sm flex-grow"
              />
              <button
                onClick={() => setSearchQuery("")}
                className="bg-[#C0C0C0] text-black px-4 py-1 border-2 border-t-white border-l-white border-r-black border-b-black font-bold active:border-t-black active:border-l-black"
              >
                RESET QUERY
              </button>
            </div>
          </div>

          {/* Authentic Raw HTML Bordered Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-black text-left text-xs sm:text-sm">
              <thead>
                <tr className={highContrast ? "bg-[#003300]" : "bg-[#D4D0C8]"}>
                  <th className="border-2 border-black p-2 font-mono">CODE</th>
                  <th className="border-2 border-black p-2 font-mono">DOCUMENT_FILENAME</th>
                  <th className="border-2 border-black p-2 font-mono">MIME_TYPE</th>
                  <th className="border-2 border-black p-2 font-mono">SIZE</th>
                  <th className="border-2 border-black p-2 font-mono">LEVEL</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={row.code} className="hover:bg-yellow-100 hover:text-black">
                    <td className="border border-black p-2 font-mono font-bold">{row.code}</td>
                    <td className="border border-black p-2">
                      <span className={highContrast ? "text-yellow-300 underline cursor-pointer" : "text-[#0000EE] underline cursor-pointer"}>
                        {row.subject}
                      </span>
                    </td>
                    <td className="border border-black p-2 font-mono">{row.type}</td>
                    <td className="border border-black p-2 font-mono">{row.size}</td>
                    <td className="border border-black p-2 font-mono">{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="border-t-2 border-black my-6" />

          {/* Raw Footnote */}
          <div className="font-mono text-xs flex flex-wrap justify-between gap-4">
            <span>SERVER: JHUNJHUNU-NODE-01 (UNIX)</span>
            <span>TOTAL FILES: {filtered.length} DISPLAYED</span>
            <span>CSS_SHADOWS: DISABLED</span>
          </div>

        </div>
      </div>
    </div>
  );
}
