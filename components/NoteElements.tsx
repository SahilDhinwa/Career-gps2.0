import React, { ReactNode } from "react";

// सामान्य टेक्स्ट के लिए
export function NText({ children, className = "", bold = false }: { children: ReactNode, className?: string, bold?: boolean }) {
  return <span className={`text-[var(--theme-text)] ${bold ? "font-bold" : ""} ${className}`}>{children}</span>;
}

// रंगीन/हाइलाइटेड टेक्स्ट के लिए (लाल/नीला जो भी थीम हो)
export function NAccent({ children, className = "", bold = true }: { children: ReactNode, className?: string, bold?: boolean }) {
  return <span className={`text-[var(--theme-accent)] ${bold ? "font-bold" : ""} ${className}`}>{children}</span>;
}

// बुलेट लिस्ट के लिए
export function NList({ children, className = "" }: { children: ReactNode, className?: string }) {
  return <ul className={`space-y-3 md:space-y-4 pl-3 md:pl-10 text-base md:text-xl text-[var(--theme-text)] ${className}`}>{children}</ul>;
}

// डब्बों (Cards) के लिए जैसे Sthavara / Jangama Visha
export function NCard({ children, title, className = "" }: { children: ReactNode, title?: ReactNode, className?: string }) {
  return (
    <div className={`p-3 md:p-4 border-2 border-[var(--theme-border)] rounded-sm bg-white/20 dark:bg-black/10 ${className}`}>
      {title && (
        <span className="font-bold text-[var(--theme-accent)] text-lg md:text-2xl mb-2 md:mb-3 block border-b border-[var(--theme-border)] pb-1 md:pb-2">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}
