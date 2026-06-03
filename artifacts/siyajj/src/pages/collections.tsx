import { Check, Minus } from "lucide-react";
import { Link } from "wouter";

export default function Collections() {
  const collections = [
    {
      name: "Essentielle",
      desc: "L'essentiel du voyage avec un accompagnement structuré.",
      features: {
        hotel: "Hôtels 3/4*",
        distance: "Distance de marche",
        transport: "Bus confort",
        guide: "Guide francophone",
        vip: false
      }
    },
    {
      name: "Confort",
      desc: "Un niveau supérieur pour plus de sérénité.",
      features: {
        hotel: "Hôtels 4* Supérieur",
        distance: "Proche des Haram",
        transport: "Bus premium",
        guide: "Guide francophone",
        vip: false
      }
    },
    {
      name: "Prestige",
      desc: "Des prestations haut de gamme et des hôtels de renom.",
      features: {
        hotel: "Hôtels 5*",
        distance: "Sur le parvis",
        transport: "TGV & Bus VIP",
        guide: "Guide dédié",
        vip: false
      }
    },
    {
      name: "Signature",
      desc: "L'expérience premium personnalisée.",
      features: {
        hotel: "Hôtels 5* Luxe",
        distance: "Face aux mosquées",
        transport: "Transferts privés",
        guide: "Guide privé",
        vip: true
      }
    },
    {
      name: "Renaissance",
      desc: "Le summum du raffinement et de l'exclusivité.",
      features: {
        hotel: "Palaces",
        distance: "Vue Kaaba/Haram",
        transport: "Véhicules grand luxe",
        guide: "Guide spirituel expert",
        vip: true
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Notre Gamme</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Les Collections SIYAJJ</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Cinq niveaux de service conçus pour répondre à chaque attente de confort, d'accompagnement et de prestige.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {collections.map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-xl border border-white/5 hover:border-siyajj-luxury-gold/30 transition-colors flex flex-col">
            <h3 className="text-2xl font-serif text-siyajj-luxury-gold mb-4">{item.name}</h3>
            <p className="text-siyajj-muted-text text-sm mb-8 flex-grow">{item.desc}</p>
            <Link href={`/nos-omras?collection=${item.name.toLowerCase()}`}>
              <button className="text-xs uppercase tracking-widest text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors border-b border-transparent hover:border-siyajj-luxury-gold pb-1">
                Découvrir
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-siyajj-ivory mb-10 text-center">Comparer les Collections</h2>
        
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-6 gap-4 border-b border-white/10 pb-6 mb-6">
              <div className="col-span-1"></div>
              {collections.map((c, i) => (
                <div key={i} className="col-span-1 text-center font-serif text-lg text-siyajj-luxury-gold">
                  {c.name}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-1 text-sm text-siyajj-muted-text uppercase tracking-wider">Hôtellerie</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory">
                    {c.features.hotel}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-1 text-sm text-siyajj-muted-text uppercase tracking-wider">Distance</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory">
                    {c.features.distance}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-1 text-sm text-siyajj-muted-text uppercase tracking-wider">Transport</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory">
                    {c.features.transport}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-1 text-sm text-siyajj-muted-text uppercase tracking-wider">Accompagnement</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory">
                    {c.features.guide}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center pt-4 border-t border-white/5">
                <div className="col-span-1 text-sm text-siyajj-muted-text uppercase tracking-wider">Service VIP</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 flex justify-center">
                    {c.features.vip ? 
                      <Check className="w-5 h-5 text-siyajj-luxury-gold" /> : 
                      <Minus className="w-5 h-5 text-siyajj-muted-text/30" />
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}