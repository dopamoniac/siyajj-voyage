const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cinzel:wght@400;500&family=Manrope:wght@400;500&display=swap');`;

const STAR_POINTS = "30,3 34.2,19.8 49.1,10.9 40.2,25.8 57,30 40.2,34.2 49.1,49.1 34.2,40.2 30,57 25.8,40.2 10.9,49.1 19.8,34.2 3,30 19.8,25.8 10.9,10.9 25.8,19.8";

function OrnamentStar({ size = 320, color = "rgba(197,154,61,0.18)" }: { size?: number; color?: string }) {
  const s = size / 60;
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <polygon points={STAR_POINTS} stroke={color} strokeWidth={0.6} />
      <circle cx={30} cy={30} r={22} stroke={color} strokeWidth={0.4} />
      <circle cx={30} cy={30} r={14} stroke={color} strokeWidth={0.4} />
      <circle cx={30} cy={30} r={6} stroke={color} strokeWidth={0.6} />
      {[0, 45, 90, 135].map(a => (
        <line key={a} x1={30} y1={4} x2={30} y2={56} stroke={color} strokeWidth={0.35}
          style={{ transformOrigin: "30px 30px", transform: `rotate(${a}deg)` }} />
      ))}
    </svg>
  );
}

export function HeroSplit() {
  const c = {
    ivory: "#F7F1E8", emerald: "#0B5A49", deep: "#062B25",
    gold: "#C59A3D", champagne: "#D9B45F", darkText: "#173A33",
    muted: "#6F6254", sandBorder: "rgba(23,58,51,0.12)", goldBorder: "rgba(197,154,61,0.35)",
    ivoryBorder: "rgba(247,241,232,0.12)",
  };
  const serif = "'Cormorant Garamond', Georgia, serif";
  const cinzel = "'Cinzel', Georgia, serif";
  const sans = "'Manrope', system-ui, sans-serif";

  return (
    <>
      <style>{FONTS}</style>
      <div style={{ fontFamily: serif, minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* FULL-WIDTH NAV — spans both panels */}
        <nav style={{ display: "flex", height: 64, position: "relative", zIndex: 10 }}>
          {/* Left nav half — ivory */}
          <div style={{ flex: "0 0 58%", background: c.ivory, display: "flex", alignItems: "center", padding: "0 3rem", gap: "1rem", borderBottom: `1px solid ${c.sandBorder}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${c.gold}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: cinzel, fontSize: 11, color: c.gold }}>S</span>
              </div>
              <div>
                <div style={{ fontFamily: cinzel, letterSpacing: "0.28em", fontSize: 10.5, color: c.darkText }}>SIYAJJ</div>
                <div style={{ fontFamily: cinzel, letterSpacing: "0.32em", fontSize: 7, color: c.gold, marginTop: -1 }}>— VOYAGES —</div>
              </div>
            </div>
          </div>
          {/* Right nav half — deep emerald */}
          <div style={{ flex: 1, background: c.deep, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 2.5rem", gap: "2rem", borderBottom: `1px solid ${c.ivoryBorder}` }}>
            {["BILLETS", "OMRA & HAJJ", "SUR MESURE"].map(item => (
              <span key={item} style={{ fontFamily: cinzel, letterSpacing: "0.15em", fontSize: 8.5, color: "rgba(247,241,232,0.65)", cursor: "pointer" }}>{item}</span>
            ))}
            <button style={{ background: `linear-gradient(135deg, ${c.gold}, ${c.champagne})`, color: "#050403", padding: "0.55rem 1.5rem", fontFamily: cinzel, fontSize: 8.5, letterSpacing: "0.2em", border: "none", cursor: "pointer", fontWeight: 500 }}>
              DEVIS
            </button>
          </div>
        </nav>

        {/* SPLIT BODY */}
        <div style={{ flex: 1, display: "flex", minHeight: "calc(100vh - 64px)" }}>

          {/* ── LEFT PANEL — Ivory Editorial ── */}
          <div style={{ flex: "0 0 58%", background: c.ivory, padding: "5rem 4rem 4rem 3rem", display: "flex", flexDirection: "column", position: "relative", borderRight: `2px solid ${c.gold}` }}>

            {/* Emerald accent line */}
            <div style={{ position: "absolute", left: "2.25rem", top: "5.5rem", height: 180, width: 2, background: `linear-gradient(180deg, ${c.emerald}, transparent)` }} />

            <div style={{ paddingLeft: "2rem" }}>
              <p style={{ fontFamily: cinzel, fontSize: 8.5, letterSpacing: "0.42em", color: c.gold, marginBottom: "2.25rem", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 20, height: 1, background: c.gold, display: "inline-block" }} />
                AGENCE PREMIUM DE VOYAGE
              </p>

              <h1 style={{ fontSize: "clamp(3rem, 5.5vw, 6.5rem)", lineHeight: 1.0, color: c.darkText, fontWeight: 300, marginBottom: "2rem", letterSpacing: "-0.01em" }}>
                La Renaissance<br />
                <em style={{ fontStyle: "italic" }}>du Voyage,</em><br />
                pensée avec<br />
                <span style={{ color: c.gold, fontStyle: "italic" }}>élégance.</span>
              </h1>

              <p style={{ fontFamily: sans, fontSize: "0.95rem", color: c.muted, lineHeight: 1.9, maxWidth: "36ch", marginBottom: "2.75rem", fontWeight: 400 }}>
                Billets, Omra & Hajj, voyages organisés et séjours sur mesure.<br />L'excellence du voyage depuis la France.
              </p>

              <div style={{ display: "flex", gap: "1rem", marginBottom: "4rem" }}>
                <button style={{ background: c.emerald, color: c.ivory, padding: "1rem 2.25rem", fontFamily: cinzel, fontSize: 8.5, letterSpacing: "0.22em", border: "none", cursor: "pointer" }}>
                  NOS SERVICES →
                </button>
                <button style={{ background: "transparent", color: c.darkText, padding: "1rem 2.25rem", fontFamily: cinzel, fontSize: 8.5, letterSpacing: "0.22em", border: `1px solid ${c.sandBorder}`, cursor: "pointer" }}>
                  DEVIS
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${c.sandBorder}` }}>
                {[{ v: "+15 000", l: "Voyageurs" }, { v: "4.9/5", l: "Avis" }, { v: "5", l: "Services" }, { v: "24/7", l: "Assist." }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: serif, fontSize: "1.75rem", color: c.emerald, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontFamily: sans, fontSize: "0.6rem", letterSpacing: "0.15em", color: c.muted, textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services list at bottom */}
            <div style={{ marginTop: "auto", display: "flex", gap: 0, borderTop: `1px solid ${c.sandBorder}`, paddingTop: 0 }}>
              {["Billets Avion", "Billets Bateau", "Omra & Hajj", "Voyages Organisés", "Sur Mesure"].map((svc, i) => (
                <div key={i} style={{ flex: 1, paddingTop: "1.1rem", paddingRight: "0.75rem", borderRight: i < 4 ? `1px solid ${c.sandBorder}` : "none", paddingLeft: i > 0 ? "0.75rem" : 0 }}>
                  <div style={{ fontFamily: cinzel, fontSize: 7, letterSpacing: "0.15em", color: c.gold, marginBottom: 3 }}>0{i + 1}</div>
                  <div style={{ fontFamily: serif, fontSize: "0.8rem", color: c.darkText, lineHeight: 1.3 }}>{svc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT PANEL — Deep Emerald + Geometry ── */}
          <div style={{ flex: 1, background: c.deep, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>

            {/* Background geometric grid */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 4 }).map((_, col) => (
                  <div key={`${row}-${col}`} style={{ position: "absolute", left: col * 130 - 20, top: row * 130 - 20 }}>
                    <OrnamentStar size={80} color="rgba(197,154,61,0.2)" />
                  </div>
                ))
              )}
            </div>

            {/* Radial fade */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(6,43,37,0.4), rgba(6,43,37,0.0))", pointerEvents: "none" }} />

            {/* Central large ornament */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <OrnamentStar size={340} color="rgba(197,154,61,0.30)" />
            </div>

            {/* Center text overlay */}
            <div style={{ position: "absolute", zIndex: 3, textAlign: "center", padding: "0 2rem" }}>
              <p style={{ fontFamily: cinzel, fontSize: 8.5, letterSpacing: "0.45em", color: c.gold, marginBottom: "1.5rem" }}>DEPUIS LA FRANCE</p>
              <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1.35rem", color: "rgba(247,241,232,0.82)", lineHeight: 1.6, maxWidth: "18ch" }}>
                « L'élégance du voyage, pensée dans chaque détail. »
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginTop: "1.5rem" }}>
                <div style={{ height: 1, background: c.gold, opacity: 0.4, width: 50 }} />
                <span style={{ color: c.gold, fontSize: 9, opacity: 0.7 }}>◆</span>
                <div style={{ height: 1, background: c.gold, opacity: 0.4, width: 50 }} />
              </div>
            </div>

            {/* Bottom label */}
            <div style={{ position: "absolute", bottom: "2rem", left: 0, right: 0, textAlign: "center" }}>
              <p style={{ fontFamily: cinzel, fontSize: 8, letterSpacing: "0.4em", color: "rgba(247,241,232,0.35)" }}>EN PARTENARIAT AVEC OMRA FACTORY</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
