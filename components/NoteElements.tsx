import React, { ReactNode } from "react";

// Organic hand-drawn border radius for cards/boxes
const handDrawnBorder = {
  borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
};

// सामान्य टेक्स्ट के लिए
export function NText({ children, className = "", bold = false }: { children: ReactNode, className?: string, bold?: boolean }) {
  return (
    <span className={`text-[var(--theme-text)] leading-relaxed ${bold ? "font-bold" : ""} ${className}`}>
      {children}
    </span>
  );
}

// रंगीन/हाइलाइटेड टेक्स्ट के लिए
export function NAccent({ children, className = "", bold = true }: { children: ReactNode, className?: string, bold?: boolean }) {
  return (
    <span className={`text-[var(--theme-accent)] ${bold ? "font-bold" : ""} ${className}`}>
      {children}
    </span>
  );
}

// बुलेट लिस्ट के लिए (Notebook margin-aligned)
export function NList({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <ul 
      // FLUID INDENTATION: Left padding scales proportionally, keeping bullets aligned to the red margin
      className={`space-y-[clamp(0.75rem,2vw,1rem)] pl-[clamp(1rem,3vw,2rem)] text-[clamp(1rem,2vw+0.2rem,1.25rem)] text-[var(--theme-text)] ${className}`}
    >
      {children}
    </ul>
  );
}

// डब्बों (Cards) के लिए - Optimized with organic notebook styling
export function NCard({ children, title, className = "" }: { children: ReactNode, title?: ReactNode, className?: string }) {
  return (
    <div 
      // FLUID CARD PADDING: Cards don't look cramped on mobile or too empty on desktop
      className={`p-[clamp(1rem,3vw,1.5rem)] border-2 border-[var(--theme-border)] bg-[var(--theme-bg,rgba(255,255,255,0.7))] dark:bg-[var(--theme-bg,rgba(0,0,0,0.5))] shadow-sm backdrop-blur-xs ${className}`}
      style={handDrawnBorder}
    >
      {title && (
        <span className="font-bold text-[var(--theme-accent)] text-[clamp(1.125rem,2.5vw,1.5rem)] mb-[clamp(0.5rem,1.5vw,0.75rem)] block border-b-2 border-dashed border-[var(--theme-border)]/60 pb-2">
          {title}
        </span>
      )}
      <div className="space-y-[clamp(0.5rem,1.5vw,0.75rem)]">
        {children}
      </div>
    </div>
  );
}
