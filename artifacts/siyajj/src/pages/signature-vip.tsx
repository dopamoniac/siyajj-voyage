import { MediaFrame } from "@/components/ui/media-frame";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SignatureVip() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24 min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-siyajj-luxury-gold/10 blur-3xl rounded-full translate-x-12 translate-y-12 opacity-50 z-0"></div>
          <MediaFrame slot="signatureVip" className="glass-card aspect-[4/5] lg:aspect-square rounded-2xl border-2 border-siyajj-luxury-gold/30 shadow-[0_0_50px_rgba(200,154,70,0.15)] relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-siyajj-deep-black via-transparent to-transparent opacity-60 z-10" />
            <div className="absolute inset-0 border border-siyajj-luxury-gold/20 m-6 rounded-xl pointer-events-none z-20 transition-transform duration-700 group-hover:scale-105" />
          </MediaFrame>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-6 font-bold flex items-center gap-3">
            <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
            Service Conciergerie Privée
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-siyajj-ivory mb-8 leading-[1.1]">
            L'Excellence <br/>
            <span className="text-siyajj-champagne italic">sans compromis.</span>
          </h1>
          <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light mb-12 max-w-lg">
            L'expérience absolue. Un accompagnement privé, des transferts exclusifs et les hôtels les plus prestigieux face au Haram pour un voyage spirituel empreint de sérénité totale.
          </p>

          <div className="glass-card border-siyajj-luxury-gold/20 bg-black/40 p-8 rounded-2xl mb-12 backdrop-blur-md">
            <ul className="space-y-6">
              {[
                "Hôtels 5 étoiles grand luxe face aux mosquées sacrées",
                "Transferts privés VIP en véhicules haut de gamme",
                "Conseiller conciergerie dédié disponible H24",
                "Guide privé pour l'accomplissement personnalisé des rites",
                "Accès coupe-file et services aéroportuaires prioritaires"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 flex items-center justify-center shrink-0 group-hover:bg-siyajj-luxury-gold/20 transition-colors">
                    <span className="text-siyajj-luxury-gold text-xs">✦</span>
                  </div>
                  <span className="text-siyajj-ivory/90 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact?subject=vip">
            <Button className="h-14 px-10 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold rounded-lg sweep-hover relative overflow-hidden">
              <span className="relative z-10">Contacter le service VIP</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
