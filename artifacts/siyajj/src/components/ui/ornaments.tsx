import { type ReactNode } from "react";

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(199,154,59,0.30)]" />
      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
        <rect x="3.5" y="0" width="3.5" height="3.5" transform="rotate(45 3.5 3.5)" fill="rgba(199,154,59,0.55)" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(199,154,59,0.30)]" />
    </div>
  );
}

export function SectionKicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 mb-5 ${className}`}>
      <span className="w-8 h-px bg-siyajj-luxury-gold/40" />
      <span className="label-premium text-siyajj-luxury-gold">{children}</span>
      <span className="w-8 h-px bg-siyajj-luxury-gold/40" />
    </div>
  );
}

export function RosetteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`text-siyajj-luxury-gold/55 ${className}`}
    >
      <path
        d="M7 0.5L8.05 4.45L12 3.2L9.2 6.2L12 9.2L8.05 7.95L7 13.5L5.95 7.95L2 9.2L4.8 6.2L2 3.2L5.95 4.45L7 0.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function OrnamentBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/[0.07] backdrop-blur-md ${className}`}
    >
      <RosetteMark />
      <span className="label-premium text-siyajj-luxury-gold">{children}</span>
      <RosetteMark />
    </div>
  );
}
