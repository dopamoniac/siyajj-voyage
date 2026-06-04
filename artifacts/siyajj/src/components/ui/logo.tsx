import { useId } from "react";

interface SiyajjLogoProps {
  className?: string;
}

export function SiyajjLogo({ className = "" }: SiyajjLogoProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 210 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SIYAJJ Voyages"
    >
      <defs>
        {/* Gold gradient — deep to bright */}
        <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#8C6A1A" />
          <stop offset="45%"  stopColor="#C59A3D" />
          <stop offset="100%" stopColor="#EDD07A" />
        </linearGradient>

        {/* Bright gold for S letter */}
        <linearGradient id={`${uid}-gold-s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F0D98A" />
          <stop offset="100%" stopColor="#C59A3D" />
        </linearGradient>

        {/* Sphere background — deep emerald */}
        <radialGradient id={`${uid}-sphere`} cx="38%" cy="32%" r="70%">
          <stop offset="0%"   stopColor="#122A1A" />
          <stop offset="100%" stopColor="#040908" />
        </radialGradient>

        {/* Glow behind S */}
        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C59A3D" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#C59A3D" stopOpacity="0" />
        </radialGradient>

        {/* Clip to circle */}
        <clipPath id={`${uid}-clip`}>
          <circle cx="25" cy="25" r="23" />
        </clipPath>
      </defs>

      {/* ─── Globe Mark ─── */}

      {/* Sphere fill */}
      <circle cx="25" cy="25" r="23" fill={`url(#${uid}-sphere)`} />

      {/* Globe grid lines — clipped */}
      <g clipPath={`url(#${uid}-clip)`} fill="none" stroke="#C59A3D">
        {/* Primary meridian */}
        <ellipse cx="25" cy="25" rx="10.5" ry="23" strokeWidth="0.7" strokeOpacity="0.5" />
        {/* Secondary meridian (angled) */}
        <ellipse cx="25" cy="25" rx="20" ry="23" strokeWidth="0.5" strokeOpacity="0.2" />
        {/* Equator — curved paths for realism */}
        <path d="M2 25 Q25 17 48 25" strokeWidth="0.7" strokeOpacity="0.5" />
        <path d="M2 25 Q25 33 48 25" strokeWidth="0.7" strokeOpacity="0.5" />
        {/* Upper latitude */}
        <path d="M9 13.5 Q25 7 41 13.5" strokeWidth="0.55" strokeOpacity="0.3" />
        {/* Lower latitude */}
        <path d="M9 36.5 Q25 43 41 36.5" strokeWidth="0.55" strokeOpacity="0.3" />
      </g>

      {/* Outer ring */}
      <circle cx="25" cy="25" r="23" stroke={`url(#${uid}-gold)`} strokeWidth="1.1" />

      {/* Thin inner ring */}
      <circle cx="25" cy="25" r="20.5" stroke="#C59A3D" strokeWidth="0.35" strokeOpacity="0.35" />

      {/* Glow behind S letter */}
      <circle cx="25" cy="25" r="14" fill={`url(#${uid}-glow)`} />

      {/* North-pole accent dot */}
      <circle cx="25" cy="2.2" r="1.4" fill="#C59A3D" fillOpacity="0.65" />

      {/* S lettermark — serif for elegance */}
      <text
        x="25" y="33.5"
        textAnchor="middle"
        fontFamily="Georgia, 'Palatino Linotype', serif"
        fontSize="26"
        fontWeight="700"
        fill={`url(#${uid}-gold-s)`}
        style={{ userSelect: "none" }}
      >
        S
      </text>

      {/* ─── Wordmark ─── */}

      {/* SIYAJJ */}
      <text
        x="57" y="28"
        fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
        fontSize="21"
        fontWeight="700"
        fill="#F4EDE0"
        letterSpacing="-0.4"
        style={{ userSelect: "none" }}
      >
        SIYAJJ
      </text>

      {/* Fine gold rule */}
      <line x1="57" y1="32.5" x2="207" y2="32.5" stroke="#C59A3D" strokeWidth="0.5" strokeOpacity="0.7" />

      {/* Left ornament dash */}
      <line x1="57" y1="41.5" x2="74" y2="41.5" stroke="#C59A3D" strokeWidth="0.7" strokeOpacity="0.6" />

      {/* VOYAGES */}
      <text
        x="132" y="44.5"
        textAnchor="middle"
        fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
        fontSize="7"
        fontWeight="500"
        fill="#C59A3D"
        letterSpacing="3.2"
        style={{ userSelect: "none" }}
      >
        VOYAGES
      </text>

      {/* Right ornament dash */}
      <line x1="190" y1="41.5" x2="207" y2="41.5" stroke="#C59A3D" strokeWidth="0.7" strokeOpacity="0.6" />
    </svg>
  );
}
