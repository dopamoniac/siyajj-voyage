import { CSSProperties, ReactNode } from "react";
import { mediaConfig } from "@/data/media";

export type MediaSlot = keyof typeof mediaConfig;

interface MediaFrameProps {
  slot: MediaSlot;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  priority?: boolean;
}

export function MediaFrame({ slot, alt, className = "", style, children, priority = false }: MediaFrameProps) {
  const src = mediaConfig[slot];
  
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={style}>
        <img
          src={src}
          alt={alt || slot}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
        {children}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-siyajj-black-ink ${className}`} style={style}>
      {/* Dark premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-siyajj-deep-black via-siyajj-warm-black to-siyajj-black-ink" />
      
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      
      {/* Soft gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-siyajj-luxury-gold/10 to-transparent opacity-60" />
      
      {/* Sacred geometry motif / Arch frame */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full h-full border border-siyajj-luxury-gold/10 rounded-t-[40%] flex items-center justify-center relative opacity-40">
           <svg className="w-24 h-24 text-siyajj-luxury-gold/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M50 10 C 50 10, 80 40, 80 90 L 20 90 C 20 40, 50 10, 50 10 Z" strokeDasharray="2 2" />
            <circle cx="50" cy="55" r="12" />
            <path d="M50 43 L 50 67 M38 55 L 62 55" />
          </svg>
        </div>
      </div>
      
      {/* Subtle border overlay */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
      
      {children}
    </div>
  );
}