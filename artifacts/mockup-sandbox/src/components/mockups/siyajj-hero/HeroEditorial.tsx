const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cinzel:wght@400;500&family=Manrope:wght@400;500&display=swap');`;

export function HeroEditorial() {
  const c = {
    ivory: "#F7F1E8", emerald: "#0B5A49", darkText: "#173A33",
    gold: "#C59A3D", muted: "#6F6254", champagne: "#D9B45F",
    sandBorder: "rgba(23,58,51,0.12)", goldBorder: "rgba(197,154,61,0.35)",
  };
  const serif = "'Cormorant Garamond', Georgia, serif";
  const cinzel = "'Cinzel', Georgia, serif";
  const sans = "'Manrope', system-ui, sans-serif";

  return (
    <>
      <style>{FONTS}</style>
      <div style={{ fontFamily: serif, background: c.ivory, minHeight: "100vh", position: "relative", overflow: "hidden" }}>

        {/* Gold top accent line */}
        <div style={{ background: `linear-gradient(90deg, transparent, ${c.gold}, ${c.champagne}, ${c.gold}, transparent)`, height: 2 }} />

        {/* NAV */}
        <nav style={{ padding: "1.25rem 3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${c.sandBorder}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${c.gold}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: cinzel, fontSize: 11, color: c.gold, fontWeight: 500 }}>S</span>
            </div>
            <div>
              <div style={{ fontFamily: cinzel, letterSpacing: "0.3em", fontSize: 11, color: c.darkText, fontWeight: 500 }}>SIYAJJ</div>
              <div style={{ fontFamily: cinzel, letterSpacing: "0.35em", fontSize: 7.5, color: c.gold, marginTop: -1 }}>— VOYAGES —</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {["BILLETS", "OMRA & HAJJ", "VOYAGES", "SUR MESURE"].map(item => (
              <span key={item} style={{ fontFamily: cinzel, letterSpacing: "0.18em", fontSize: 9.5, color: c.darkText, cursor: "pointer", opacity: 0.75 }}>{item}</span>
            ))}
          </div>
          <button style={{ background: c.darkText, color: c.ivory, padding: "0.7rem 2rem", fontFamily: cinzel, fontSize: 9, letterSpacing: "0.22em", border: "none", cursor: "pointer" }}>
            DEVIS
          </button>
        </nav>

        {/* HERO BODY */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", minHeight: "calc(100vh - 56px)" }}>

          {/* LEFT — Typography hero */}
          <div style={{ padding: "5rem 4rem 3rem 3.5rem", position: "relative", borderRight: `1px solid ${c.sandBorder}` }}>
            {/* Emerald vertical accent */}
            <div style={{ position: "absolute", left: "2.25rem", top: "5rem", height: 220, width: 2, background: `linear-gradient(180deg, ${c.emerald}, transparent)` }} />

            <div style={{ paddingLeft: "1.75rem" }}>
              <p style={{ fontFamily: cinzel, fontSize: 9, letterSpacing: "0.45em", color: c.gold, marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 24, height: 1, background: c.gold, display: "inline-block" }} />
                AGENCE PREMIUM DE VOYAGE
                <span style={{ width: 24, height: 1, background: c.gold, display: "inline-block" }} />
              </p>

              <h1 style={{ fontSize: "clamp(3.5rem, 6.5vw, 7.5rem)", lineHeight: 1.0, color: c.darkText, fontWeight: 300, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
                La Renaissance<br />
                <em style={{ fontStyle: "italic", fontWeight: 300 }}>du Voyage,</em><br />
                pensée avec<br />
                <span style={{ color: c.gold, fontStyle: "italic" }}>élégance.</span>
              </h1>

              {/* Gold ornamental divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "2rem 0" }}>
                <div style={{ height: 1, background: `linear-gradient(90deg, ${c.gold}, transparent)`, width: 80 }} />
                <span style={{ color: c.gold, fontSize: 10 }}>◆</span>
              </div>

              <p style={{ fontFamily: sans, fontSize: "1rem", color: c.muted, lineHeight: 1.85, maxWidth: "38ch", marginBottom: "2.75rem", fontWeight: 400 }}>
                Billets avion & bateau, Omra & Hajj, voyages organisés<br />et séjours sur mesure depuis la France.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button style={{ background: c.emerald, color: c.ivory, padding: "1.05rem 2.5rem", fontFamily: cinzel, fontSize: 9, letterSpacing: "0.22em", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                  NOS SERVICES <span style={{ fontSize: 11 }}>→</span>
                </button>
                <button style={{ background: "transparent", color: c.darkText, padding: "1.05rem 2.5rem", fontFamily: cinzel, fontSize: 9, letterSpacing: "0.22em", border: `1px solid ${c.sandBorder}`, cursor: "pointer" }}>
                  DEMANDER UN DEVIS
                </button>
              </div>
            </div>

            {/* Services strip — editorial column headers */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: `1px solid ${c.sandBorder}`, display: "flex" }}>
              {["Billets Avion", "Billets Bateau", "Omra & Hajj", "Voyages Organisés", "Séjours sur Mesure"].map((svc, i) => (
                <div key={i} style={{ flex: 1, padding: "1.25rem 1.25rem 1.25rem 1.5rem", borderRight: i < 4 ? `1px solid ${c.sandBorder}` : "none", cursor: "pointer" }}>
                  <div style={{ fontFamily: cinzel, fontSize: 7.5, letterSpacing: "0.2em", color: c.gold, marginBottom: 4 }}>0{i + 1}</div>
                  <div style={{ fontFamily: serif, fontSize: "0.9rem", color: c.darkText, fontWeight: 500 }}>{svc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Stats + Brand statement */}
          <div style={{ padding: "5rem 2.5rem 3rem", display: "flex", flexDirection: "column", gap: "3rem", background: c.ivory }}>
            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {[
                { v: "+15 000", l: "Voyageurs accompagnés" },
                { v: "4.9 / 5", l: "Avis vérifiés" },
                { v: "5", l: "Services de voyage" },
                { v: "24/7", l: "Assistance" },
              ].map((s, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${c.sandBorder}`, paddingBottom: "2.5rem" }}>
                  <div style={{ fontFamily: serif, fontSize: "2.6rem", color: c.emerald, fontWeight: 400, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontFamily: sans, fontSize: "0.65rem", letterSpacing: "0.15em", color: c.muted, textTransform: "uppercase", marginTop: 6 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Brand tagline */}
            <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: `1px solid ${c.sandBorder}` }}>
              <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1.1rem", color: c.darkText, lineHeight: 1.7, opacity: 0.7 }}>
                « La Renaissance du Voyage, pensée avec élégance. »
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
