export default function Collections() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Notre Gamme</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Les Collections SIYAJJ</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Cinq niveaux de service conçus pour répondre à chaque attente de confort, d'accompagnement et de prestige.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Essentielle", "Confort", "Prestige", "Signature", "Renaissance"].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-xl border border-white/5 hover:border-siyajj-luxury-gold/30 transition-colors">
            <h3 className="text-2xl font-serif text-siyajj-luxury-gold mb-4">{item}</h3>
            <p className="text-siyajj-muted-text text-sm mb-6">Une expérience soigneusement pensée pour l'équilibre parfait entre sérénité et accompagnement.</p>
            <button className="text-xs uppercase tracking-widest text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors border-b border-transparent hover:border-siyajj-luxury-gold pb-1">Découvrir</button>
          </div>
        ))}
      </div>
    </div>
  );
}
