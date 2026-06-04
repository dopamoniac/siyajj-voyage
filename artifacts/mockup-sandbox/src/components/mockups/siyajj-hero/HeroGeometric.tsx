const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cinzel:wght@400;500&family=Manrope:wght@400;500&display=swap');`;

const STAR_POINTS = "30,3 34.2,19.8 49.1,10.9 40.2,25.8 57,30 40.2,34.2 49.1,49.1 34.2,40.2 30,57 25.8,40.2 10.9,49.1 19.8,34.2 3,30 19.8,25.8 10.9,10.9 25.8,19.8";

function GeometricPattern() {
  const cols = 22, rows = 14;
  const size = 70;
  const offsetY = size * 0.866;
  const stars: { cx: number; cy: number; key: string }[] = [];
  for (let r = -1; r <= rows; r++) {
    for (let c = -1; c <= cols; c++) {
      stars.push({ cx: c * size + (r % 2 === 0 ? 0 : size / 2), cy: r * offsetY, key: `${r}-${c}` });
    }
  }
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 1, pointerEvents: "none" }}
      viewBox="0 0 1280 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="fadeCenter" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="rgba(6,43,37,0.85)" />
          <stop offset="100%" stopColor="rgba(6,43,37,0)" />
        </radialGradient>
      </defs>
      {stars.map(s => {
        const scale = 0.48;
        const tx = s.cx - 30 * scale * 2;
        const ty = s.cy - 30 * scale * 2;
        return (
          <g key={s.key} transform={`translate(${s.cx},${s.cy}) scale(${scale})`} style={{ transformOrigin: "center" }}>
            <polygon points={STAR_POINTS} fill="none" stroke="rgba(197,154,61,0.28)" strokeWidth={1.2} />
            <circle cx={30} cy={30} r={8} fill="none" stroke="rgba(197,154,61,0.15)" strokeWidth={0.8} />
          </g>
        );
      })}
      {/* Connecting grid lines between stars */}
      {stars.map(s => (
        <g key={`lines-${s.key}`}>
          <line x1={s.cx} y1={s.cy} x2={s.cx + size} y2={s.cy} stroke="rgba(197,154,61,0.07)" strokeWidth={0.5} />
          <line x1={s.cx} y1={s.cy} x2={s.cx + size / 2} y2={s.cy + offsetY} stroke="rgba(197,154,61,0.07)" strokeWidth={0.5} />
        </g>
      ))}
      {/* Radial fade so pattern recedes from hero text area */}
      <rect width="1280" height="900" fill="url(#fadeCenter)" />
    </svg>
  );
}

export function HeroGeometric() {
  const c = {
    deep: "#062B25", emerald: "#0B5A49", ivory: "#F7F1E8",
    gold: "#C59A3D", champagne: "#D9B45F", muted: "rgba(247,241,232,0.55)",
    goldBorder: "rgba(197,154,61,0.35)", ivoryBorder: "rgba(247,241,232,0.12)",
  };
  const serif = "'Cormorant Garamond', Georgia, serif";
  const cinzel = "'Cinzel', Georgia, serif";
  const sans = "'Manrope', system-ui, sans-serif";

  return (
    <>
      <style>{FONTS}</style>
      <div style={{ fontFamily: serif, background: c.deep, minHeight: "100vh", position: "relative", overflow: "hidden", color: c.ivory }}>

        {/* THE PATTERN */}
        <GeometricPattern />

        {/* Diagonal gradient overlay — left side brighter, right darker */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(125deg, rgba(6,43,37,0.0) 0%, rgba(6,43,37,0.55) 60%, rgba(6,43,37,0.75) 100%)", pointerEvents: "none" }} />

        {/* Gold top accent */}
        <div style={{ position: "relative", background: `linear-gradient(90deg, transparent, ${c.gold}, ${c.champagne}, ${c.gold}, transparent)`, height: 1.5 }} />

        {/* NAV */}
        <nav style={{ position: "relative", padding: "1.4rem 3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${c.gold}`, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(197,154,61,0.08)" }}>
              <span style={{ fontFamily: cinzel, fontSize: 12, color: c.gold, fontWeight: 500 }}>S</span>
            </div>
            <div>
              <div style={{ fontFamily: cinzel, letterSpacing: "0.3em", fontSize: 11, color: c.ivory, fontWeight: 500 }}>SIYAJJ</div>
              <div style={{ fontFamily: cinzel, letterSpacing: "0.35em", fontSize: 7.5, color: c.gold, marginTop: -1 }}>— VOYAGES —</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["BILLETS", "OMRA & HAJJ", "VOYAGES", "SUR MESURE", "SERVICES"].map(item => (
              <span key={item} style={{ fontFamily: cinzel, letterSpacing: "0.15em", fontSize: 9, color: "rgba(247,241,232,0.7)", cursor: "pointer" }}>{item}</span>
            ))}
          </div>
          <button style={{ background: `linear-gradient(135deg, ${c.gold}, ${c.champagne})`, color: "#050403", padding: "0.7rem 2rem", fontFamily: cinzel, fontSize: 9, letterSpacing: "0.22em", border: "none", cursor: "pointer", fontWeight: 500 }}>
            DEVIS
          </button>
        </nav>

        {/* HERO CONTENT */}
        <div style={{ position: "relative", padding: "5rem 3.5rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "calc(100vh - 72px)" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "2.5rem", border: `1px solid ${c.goldBorder}`, padding: "0.5rem 1.25rem", backdropFilter: "blur(8px)", background: "rgba(197,154,61,0.06)", width: "fit-content" }}>
            <span style={{ color: c.gold, fontSize: 9 }}>✦</span>
            <span style={{ fontFamily: cinzel, fontSize: 9, letterSpacing: "0.35em", color: c.gold }}>AGENCE PREMIUM DE VOYAGE</span>
            <span style={{ color: c.gold, fontSize: 9 }}>✦</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(3.5rem, 6.5vw, 7rem)", lineHeight: 1.0, fontWeight: 300, marginBottom: "0.5rem", maxWidth: "16ch", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
            La Renaissance<br />
            <em style={{ fontStyle: "italic" }}>du Voyage,</em><br />
            pensée avec<br />
            <span style={{ background: `linear-gradient(135deg, ${c.gold}, ${c.champagne})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>élégance.</span>
          </h1>

          {/* Ornament */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "2rem 0" }}>
            <div style={{ height: 1, background: `linear-gradient(90deg, ${c.gold}, transparent)`, width: 80 }} />
            <span style={{ color: c.gold, fontSize: 10, letterSpacing: 6 }}>◆ ◆ ◆</span>
          </div>

          <p style={{ fontFamily: sans, fontSize: "1rem", color: "rgba(247,241,232,0.72)", lineHeight: 1.85, maxWidth: "44ch", marginBottom: "3rem", fontWeight: 400 }}>
            Billets avion & bateau, Omra & Hajj, voyages organisés<br />et séjours sur mesure. L'élégance du voyage pensée depuis la France.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "5rem" }}>
            <button style={{ background: `linear-gradient(135deg, ${c.emerald}, #073C33)`, color: c.ivory, padding: "1.1rem 2.5rem", fontFamily: cinzel, fontSize: 9, letterSpacing: "0.22em", border: `1px solid ${c.goldBorder}`, cursor: "pointer" }}>
              NOS SERVICES →
            </button>
            <button style={{ background: "rgba(247,241,232,0.06)", color: c.ivory, padding: "1.1rem 2.5rem", fontFamily: cinzel, fontSize: 9, letterSpacing: "0.22em", border: `1px solid ${c.ivoryBorder}`, cursor: "pointer", backdropFilter: "blur(4px)" }}>
              DEMANDER UN DEVIS
            </button>
          </div>

          {/* Services — horizontal cards */}
          <div style={{ display: "flex", gap: "1px", background: c.ivoryBorder }}>
            {[
              { icon: "✈", label: "Billets Avion" },
              { icon: "⛴", label: "Billets Bateau" },
              { icon: "◆", label: "Omra & Hajj" },
              { icon: "🌍", label: "Voyages Organisés" },
              { icon: "✦", label: "Séjours sur Mesure" },
            ].map((svc, i) => (
              <div key={i} style={{ flex: 1, background: "rgba(6,43,37,0.6)", backdropFilter: "blur(12px)", padding: "1.1rem 1.25rem", borderTop: `1px solid ${c.ivoryBorder}`, cursor: "pointer" }}>
                <div style={{ fontSize: 16, marginBottom: 6 }}>{svc.icon}</div>
                <div style={{ fontFamily: serif, fontSize: "0.88rem", color: c.ivory, fontWeight: 400, lineHeight: 1.3 }}>{svc.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
