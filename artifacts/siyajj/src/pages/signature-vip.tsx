export default function SignatureVip() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Service Conciergerie</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Signature VIP</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          L'expérience absolue. Un accompagnement privé, des transferts exclusifs et les hôtels les plus prestigieux face au Haram.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="glass-card aspect-square rounded-xl border border-siyajj-luxury-gold/20 flex items-center justify-center p-8 text-center bg-gradient-to-br from-siyajj-deep-black to-siyajj-warm-black">
           <span className="text-4xl text-siyajj-luxury-gold opacity-50">✦</span>
        </div>
        <div>
          <h2 className="text-3xl font-serif text-siyajj-ivory mb-6">L'Excellence sans compromis</h2>
          <ul className="space-y-6">
            {[
              "Hôtels 5 étoiles face aux mosquées sacrées",
              "Transferts privés en véhicules de luxe",
              "Conseiller dédié disponible H24",
              "Guide privé pour l'accomplissement des rites"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0" />
                <span className="text-siyajj-muted-text leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
