import { Check, Minus } from "lucide-react";
import { Link } from "wouter";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Collections() {
  const collections = [
    {
      name: "Essentielle",
      image: "collectionEssentielle",
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
      image: "collectionConfort",
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
      image: "collectionPrestige",
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
      image: "collectionSignature",
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
      image: "collectionRenaissance",
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
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Notre Gamme
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Les Collections SIYAJJ</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light max-w-2xl mx-auto">
          Cinq niveaux de service conçus pour répondre à chaque attente de confort, d'accompagnement et de prestige.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {collections.map((item, i) => (
          <div key={i} className={`group relative rounded-2xl overflow-hidden border border-siyajj-luxury-gold/20 hover:border-siyajj-luxury-gold/60 transition-all duration-500 aspect-[3/4] flex flex-col justify-end ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
            <MediaFrame slot={item.image as any} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/60 to-transparent" />
            <div className="absolute inset-0 bg-siyajj-luxury-gold/0 group-hover:bg-siyajj-luxury-gold/10 transition-colors duration-500 mix-blend-overlay" />
            
            {/* Gold framing */}
            <div className="absolute inset-4 border border-siyajj-luxury-gold/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-20 p-8 glass-card m-4 rounded-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-black/40 border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-3xl font-serif text-siyajj-champagne">{item.name}</h3>
                <span className="text-siyajj-luxury-gold opacity-50">✦</span>
              </div>
              <p className="text-siyajj-ivory/80 text-sm mb-6 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">{item.desc}</p>
              <Link href={`/nos-omras?collection=${item.name.toLowerCase()}`} className="text-[10px] uppercase tracking-widest text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors flex items-center gap-2 group/btn">
                Découvrir <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto glass-card p-8 md:p-12 rounded-3xl border-siyajj-luxury-gold/20 shadow-2xl">
        <div className="text-center mb-12">
          <span className="text-2xl text-siyajj-luxury-gold opacity-50 mb-4 block">✦</span>
          <h2 className="text-4xl font-serif text-siyajj-ivory">Comparer les Collections</h2>
        </div>
        
        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-6 gap-4 border-b border-siyajj-luxury-gold/20 pb-6 mb-8">
              <div className="col-span-1"></div>
              {collections.map((c, i) => (
                <div key={i} className="col-span-1 text-center font-serif text-xl text-siyajj-champagne">
                  {c.name}
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-6 gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold">Hôtellerie</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory font-light">
                    {c.features.hotel}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold">Distance</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory font-light">
                    {c.features.distance}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold">Transport</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory font-light">
                    {c.features.transport}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold">Accompagnement</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 text-center text-sm text-siyajj-ivory font-light">
                    {c.features.guide}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 items-center pt-6 border-t border-siyajj-luxury-gold/10 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold">Service VIP</div>
                {collections.map((c, i) => (
                  <div key={i} className="col-span-1 flex justify-center">
                    {c.features.vip ? 
                      <div className="w-8 h-8 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-siyajj-luxury-gold" />
                      </div> : 
                      <Minus className="w-4 h-4 text-white/20" />
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
