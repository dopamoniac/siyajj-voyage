import { Link } from "wouter";
import { MediaFrame } from "@/components/ui/media-frame";

export default function APropos() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-24 relative z-10">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Notre Maison
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">L'Excellence SIYAJJ</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-xl font-light">
          Redonner au voyage sacré ses lettres de noblesse, à travers une approche où le spirituel rencontre l'excellence de l'hospitalité.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 lg:order-1 relative z-10">
          <h2 className="text-4xl font-serif text-siyajj-champagne mb-8">Le Concept Renaissance</h2>
          <div className="space-y-6 text-lg font-light text-siyajj-ivory/80 leading-relaxed">
            <p>
              SIYAJJ est née d'une conviction profonde : le voyage vers les Lieux Saints doit être vécu dans des conditions qui honorent son importance. Nous avons repensé l'organisation de la Omra et du Hajj pour éliminer les contraintes logistiques et vous permettre de vous concentrer sur l'essentiel.
            </p>
            <p>
              Notre partenariat opérationnel exclusif avec <span className="text-siyajj-luxury-gold font-medium">Omra Factory</span> nous permet de garantir une exécution parfaite sur le terrain, tandis que nos conseillers en France dessinent l'expérience qui vous correspond avec la précision d'une conciergerie de luxe.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-siyajj-luxury-gold/10 blur-3xl rounded-full opacity-50 z-0 transform translate-x-8 -translate-y-8"></div>
          <MediaFrame slot="collectionRenaissance" className="glass-card aspect-[4/5] md:aspect-[4/3] rounded-3xl border border-siyajj-luxury-gold/30 p-12 flex flex-col justify-center items-center text-center relative z-10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10" />
              <div className="relative z-20 flex flex-col items-center">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/logo-siyajj-transparent.png`} 
                  alt="SIYAJJ Renaissance" 
                  className="h-20 w-auto mb-8 opacity-90 drop-shadow-lg"
                />
                <div className="w-12 h-[1px] bg-siyajj-luxury-gold mb-6"></div>
                <div className="text-xs text-siyajj-luxury-gold uppercase tracking-widest mb-4 font-bold">Notre Promesse</div>
                <div className="text-3xl font-serif text-siyajj-ivory italic leading-snug">"Un voyage préparé avec précision, vécu avec sérénité."</div>
              </div>
          </MediaFrame>
        </div>
      </div>

      <div className="mb-32 relative z-10">
        <h2 className="text-4xl font-serif text-center text-siyajj-ivory mb-16 drop-shadow-md">Nos Valeurs Cardinales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Excellence", desc: "Dans la sélection rigoureuse de nos partenaires et la qualité irréprochable de nos services." },
            { title: "Sérénité", desc: "Une organisation sans faille en amont pour garantir un esprit totalement apaisé sur place." },
            { title: "Respect absolu", desc: "Des rites millénaires, de la sacralité des lieux et de l'intention intime de chaque pèlerin." },
            { title: "Accompagnement", desc: "Une présence experte, discrète mais constante, à chaque étape de votre cheminement." },
            { title: "Transparence", desc: "Une clarté totale sur nos offres, nos prix et nos engagements, sans aucun compromis." },
            { title: "Discrétion VIP", desc: "Un service haut de gamme qui sait s'effacer élégamment pour laisser place à votre spiritualité." }
          ].map((val, i) => (
            <div key={i} className="glass-card bg-black/40 border border-white/10 hover:border-siyajj-luxury-gold/40 p-10 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,154,70,0.1)] group">
              <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/5 rounded-full flex items-center justify-center mb-8 border border-siyajj-luxury-gold/20 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl text-siyajj-luxury-gold drop-shadow-[0_0_10px_rgba(200,154,70,0.8)]">✦</span>
              </div>
              <h3 className="text-2xl font-serif text-siyajj-champagne mb-4">{val.title}</h3>
              <p className="text-base font-light text-siyajj-ivory/70 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 rounded-3xl overflow-hidden border border-siyajj-luxury-gold/30 shadow-2xl">
        <MediaFrame slot="atmosphere" className="absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="relative z-20 text-center p-16 md:p-24">
          <div className="text-xs uppercase tracking-widest text-siyajj-luxury-gold font-bold mb-4">L'Approche SIYAJJ</div>
          <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-8">Notre Processus</h2>
          <p className="text-siyajj-ivory/80 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            <span className="text-siyajj-champagne">Écouter</span> vos attentes. <span className="text-siyajj-champagne">Concevoir</span> votre parcours. <span className="text-siyajj-champagne">Préparer</span> votre départ. <span className="text-siyajj-champagne">Accompagner</span> vos pas. <span className="text-siyajj-champagne">Soutenir</span> votre retour.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="px-10 py-4 border border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black transition-colors uppercase tracking-widest text-xs font-bold rounded-lg sweep-hover relative overflow-hidden">
              <span className="relative z-10">Rencontrer un conseiller</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
