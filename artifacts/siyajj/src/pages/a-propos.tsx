import { Link } from "wouter";

export default function APropos() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Notre Maison</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">L'Excellence SIYAJJ</h1>
        <p className="text-siyajj-muted-text leading-relaxed text-lg">
          Redonner au voyage sacré ses lettres de noblesse, à travers une approche où le spirituel rencontre l'excellence de l'hospitalité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-serif text-siyajj-luxury-gold mb-6">Le Concept Renaissance</h2>
          <p className="text-siyajj-muted-text leading-relaxed mb-6">
            SIYAJJ est née d'une conviction profonde : le voyage vers les Lieux Saints doit être vécu dans des conditions qui honorent son importance. Nous avons repensé l'organisation de la Omra et du Hajj pour éliminer les contraintes logistiques et vous permettre de vous concentrer sur l'essentiel.
          </p>
          <p className="text-siyajj-muted-text leading-relaxed">
            Notre partenariat opérationnel exclusif avec Omra Factory nous permet de garantir une exécution parfaite sur le terrain, tandis que nos conseillers en France dessinent l'expérience qui vous correspond.
          </p>
        </div>
        <div className="glass-card aspect-[4/3] rounded-xl border border-siyajj-luxury-gold/20 p-8 flex flex-col justify-center items-center text-center">
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo-siyajj-transparent.png`} 
              alt="SIYAJJ Renaissance" 
              className="h-16 w-auto mb-8 opacity-80"
            />
            <div className="text-sm text-siyajj-muted-text uppercase tracking-widest mb-2">Notre Promesse</div>
            <div className="text-xl font-serif text-siyajj-ivory italic">"Un voyage préparé avec précision, vécu avec sérénité."</div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-serif text-center text-siyajj-ivory mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Excellence", desc: "Dans la sélection de nos partenaires et la qualité de nos services." },
            { title: "Sérénité", desc: "Une organisation sans faille pour un esprit apaisé." },
            { title: "Respect", desc: "Des rites, des lieux et de l'intention de chaque pèlerin." },
            { title: "Accompagnement", desc: "Une présence discrète mais constante, à chaque étape." },
            { title: "Transparence", desc: "Clarté totale sur nos offres, nos prix et nos engagements." },
            { title: "Discrétion", desc: "Un service qui sait s'effacer pour laisser place à votre spiritualité." }
          ].map((val, i) => (
            <div key={i} className="bg-siyajj-black-ink border border-white/5 p-8 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto bg-siyajj-warm-black rounded-full flex items-center justify-center mb-6">
                <span className="text-siyajj-luxury-gold">✦</span>
              </div>
              <h3 className="text-xl font-serif text-siyajj-ivory mb-3">{val.title}</h3>
              <p className="text-sm text-siyajj-muted-text">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-gradient-to-b from-siyajj-black-ink to-siyajj-deep-black p-12 rounded-xl border border-siyajj-luxury-gold/10">
        <h2 className="text-2xl font-serif text-siyajj-luxury-gold mb-4">Notre Processus</h2>
        <p className="text-siyajj-muted-text mb-8 max-w-2xl mx-auto">
          Écouter vos attentes. Concevoir votre parcours. Préparer votre départ. Accompagner vos pas. Soutenir votre retour.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="px-8 py-3 border border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black transition-colors uppercase tracking-widest text-xs">
            Rencontrer un conseiller
          </Link>
        </div>
      </div>
    </div>
  );
}
