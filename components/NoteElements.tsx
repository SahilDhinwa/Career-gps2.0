import React, { ReactNode } from "react";

// Organic hand-drawn border radius for cards/boxes
const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// सामान्य टेक्स्ट के लिए
export function NText({ children, className = "", bold = false }: { children: ReactNode, className?: string, bold?: boolean }) {
  return <span className={`text-[var(--theme-text)] leading-relaxed ${bold ? "font-bold" : ""} ${className}`}>{children}</span>;
}

// रंगीन/हाइलाइटेड टेक्स्ट के लिए
export function NAccent({ children, className = "", bold = true }: { children: ReactNode, className?: string, bold?: boolean }) {
  return <span className={`text-[var(--theme-accent)] ${bold ? "font-bold" : ""} ${className}`}>{children}</span>;
}

// बुलेट लिस्ट के लिए (Notebook margin-aligned)
export function NList({ children, className = "" }: { children: ReactNode, className?: string }) {
  return <ul className={`space-y-3 md:space-y-4 pl-4 md:pl-8 text-base md:text-xl text-[var(--theme-text)] ${className}`}>{children}</ul>;
}

// डब्बों (Cards) के लिए - Optimized with organic notebook styling
export function NCard({ children, title, className = "" }: { children: ReactNode, title?: ReactNode, className?: string }) {
  return (
    <div 
      className={`p-4 md:p-6 border-2 border-[var(--theme-border)] bg-[var(--theme-bg,rgba(255,255,255,0.7))] dark:bg-[var(--theme-bg,rgba(0,0,0,0.5))] shadow-sm backdrop-blur-xs ${className}`}
      style={handDrawnBorder}
    >
      {title && (
        <span className="font-bold text-[var(--theme-accent)] text-lg md:text-2xl mb-3 block border-b-2 border-dashed border-[var(--theme-border)]/60 pb-2">
          {title}
        </span>
      )}
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}
