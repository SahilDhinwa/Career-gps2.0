
import Image from "next/image";

interface AtreyaIconProps {
  className?: string;
}

export default function AtreyaIcon({
  className = "w-12 h-12",
}: AtreyaIconProps) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src="/icon.svg"
        alt="ATREYA Infinity Emblem"
        fill
        sizes="(max-width: 640px) 48px, 64px"
        className="object-contain"
        priority
      />
    </span>
  );
}
