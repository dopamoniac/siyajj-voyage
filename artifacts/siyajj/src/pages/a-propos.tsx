import { Link } from "wouter";
import { MediaFrame } from "@/components/ui/media-frame";
import { processSteps } from "@/data/content";
import { motion } from "framer-motion";
import { OrnamentBadge, SectionKicker, GoldDivider } from "@/components/ui/ornaments";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function APropos() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 velvet-texture opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(199,154,59,0.07),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div {...reveal(0)}>
            <OrnamentBadge className="mb-7">Notre Maison</OrnamentBadge>
            <h1 className="display-lg text-siyajj-ivory mb-5 drop-shadow-md">L'Excellence SIYAJJ</h1>
            <GoldDivider className="max-w-[200px] mx-auto mb-7" />
            <p className="body-lg text-siyajj-ivory/62 max-w-2xl mx-auto">
              Redonner au voyage sacré ses lettres de noblesse, à travers une approche où le spirituel rencontre l'excellence de l'hospitalité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Concept ── */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...reveal(0)} className="order-2 lg:order-1">
              <SectionKicker className="justify-start mb-5">Notre ADN</SectionKicker>
              <h2 className="section-title text-siyajj-champagne mb-8">Le Concept Renaissance</h2>
              <div className="space-y-5 body-lg text-siyajj-ivory/72 leading-relaxed">
                <p>
                  SIYAJJ est née d'une conviction profonde : le voyage vers les Lieux Saints doit être vécu dans des conditions qui honorent son importance. Nous avons repensé l'organisation de la Omra et du Hajj pour éliminer les contraintes logistiques et vous permettre de vous concentrer sur l'essentiel.
                </p>
                <p>
                  Notre partenariat opérationnel exclusif avec{" "}
                  <span className="text-siyajj-luxury-gold font-medium">Omra Factory</span>{" "}
                  nous permet de garantir une exécution parfaite sur le terrain, tandis que nos conseillers en France dessinent l'expérience qui vous correspond avec la précision d'une conciergerie de luxe.
                </p>
              </div>
            </motion.div>
            <motion.div {...reveal(0.1)} className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-siyajj-luxury-gold/8 blur-3xl rounded-full opacity-50 z-0 translate-x-8 -translate-y-8 pointer-events-none" />
              <MediaFrame
                slot="collectionRenaissance"
                className="glass-card aspect-[4/5] md:aspect-[4/3] rounded-3xl border border-siyajj-luxury-gold/25 p-12 flex flex-col justify-center items-center text-center relative z-10 overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10" />
                <div className="relative z-20 flex flex-col items-center">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/logo-siyajj-v2-transparent.png`}
                    alt="SIYAJJ Voyages"
                    className="h-20 w-auto object-contain mb-8"
                  />
                  <div className="w-12 h-px bg-siyajj-luxury-gold mb-6" />
                  <div className="label-premium text-siyajj-luxury-gold mb-4">Notre Promesse</div>
                  <blockquote className="display-md text-siyajj-ivory italic leading-snug">
                    "Un voyage préparé avec précision, vécu avec sérénité."
                  </blockquote>
                </div>
              </MediaFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-24 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...reveal(0)} className="text-center mb-16">
            <SectionKicker>Notre socle</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">Nos Valeurs Cardinales</h2>
            <GoldDivider className="max-w-[160px] mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Excellence", desc: "Dans la sélection rigoureuse de nos partenaires et la qualité irréprochable de nos services." },
              { title: "Sérénité", desc: "Une organisation sans faille en amont pour garantir un esprit totalement apaisé sur place." },
              { title: "Respect absolu", desc: "Des rites millénaires, de la sacralité des lieux et de l'intention intime de chaque pèlerin." },
              { title: "Accompagnement", desc: "Une présence experte, discrète mais constante, à chaque étape de votre cheminement." },
              { title: "Transparence", desc: "Une clarté totale sur nos offres, nos prix et nos engagements, sans aucun compromis." },
              { title: "Discrétion VIP", desc: "Un service haut de gamme qui sait s'effacer élégamment pour laisser place à votre spiritualité." },
            ].map((val, i) => (
              <motion.div
                key={i}
                {...reveal(i * 0.07)}
                className="glass-card p-8 rounded-2xl hover:border-siyajj-luxury-gold/38 transition-all duration-500 hover:shadow-[0_0_32px_rgba(200,154,70,0.08)] group"
              >
                <div className="w-12 h-12 mx-auto bg-siyajj-luxury-gold/6 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/18 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-xl text-siyajj-luxury-gold drop-shadow-[0_0_8px_rgba(200,154,70,0.7)]">✦</span>
                </div>
                <h3 className="card-title text-siyajj-champagne mb-3 text-center">{val.title}</h3>
                <p className="body-md text-siyajj-ivory/60 text-center leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processus ── */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div {...reveal(0)} className="text-center mb-16">
            <SectionKicker>Comment ça marche</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">Le Processus SIYAJJ</h2>
            <GoldDivider className="max-w-[160px] mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                {...reveal(idx * 0.1)}
                className="glass-card rounded-2xl p-8 border-siyajj-luxury-gold/14 flex flex-col items-start hover:border-siyajj-luxury-gold/40 transition-colors duration-300"
              >
                <div className="font-display text-4xl text-siyajj-luxury-gold/24 leading-none mb-5 select-none">{step.step}</div>
                <h3 className="card-title text-siyajj-ivory mb-3">{step.title}</h3>
                <p className="body-md text-siyajj-ivory/58 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-32 border-t border-white/5 overflow-hidden">
        <MediaFrame slot="atmosphere" className="absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/92" />
        <div className="relative z-20 text-center px-4 md:px-8 container mx-auto">
          <SectionKicker>La Différence Premium</SectionKicker>
          <h2 className="section-title text-siyajj-ivory mb-6">Votre Voyage Commence Ici</h2>
          <GoldDivider className="max-w-[160px] mx-auto mb-8" />
          <p className="body-lg text-siyajj-ivory/72 mb-12 max-w-2xl mx-auto">
            Parlez à nos experts et laissez-nous dessiner un itinéraire spirituel sur-mesure, à la hauteur de vos aspirations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 border border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black transition-all duration-300 label-premium rounded-lg sweep-hover relative overflow-hidden"
          >
            <span className="relative z-10">Rencontrer un conseiller</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
