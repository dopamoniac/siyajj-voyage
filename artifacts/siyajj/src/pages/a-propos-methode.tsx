import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { processSteps, whySiyajj } from "@/data/content";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const PILLARS = [
  { title: "L'écoute avant tout", desc: "Avant de proposer quoi que ce soit, nous prenons le temps de comprendre votre projet, vos attentes, votre famille et votre rythme. Chaque voyage est singulier." },
  { title: "La transparence totale", desc: "Chez SIYAJJ, il n'y a pas de surprises : le prix annoncé inclut tout ce qui est indiqué, les documents sont clairs, les communications sont directes." },
  { title: "La préparation comme pilier", desc: "Nous croyons qu'un pèlerin bien préparé vit un voyage dix fois plus riche. C'est pourquoi nos formations et nos ressources sont au cœur de chaque formule." },
  { title: "L'accompagnement humain", desc: "Un conseiller SIYAJJ reste joignable avant, pendant et après le voyage. Pas un callcenter — une personne qui connaît votre dossier et votre projet." },
  { title: "La qualité vérifiée", desc: "Tous les hôtels, guides et prestataires partenaires sont sélectionnés et vérifiés par notre équipe. Aucun prestataire ne fait partie de notre offre sans avoir été évalué." },
  { title: "Le suivi après retour", desc: "Notre accompagnement ne s'arrête pas à l'aéroport. L'After-Omra Circle prolonge les bienfaits du voyage et crée un lien durable avec la communauté SIYAJJ." },
];

export default function AProposMethode() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-siyajj-deep-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,76,76,0.35),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <motion.div {...stagger(0.1)}>
            <Link href="/a-propos" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← À propos de SIYAJJ
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              Notre Méthode
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">
              La méthode <span className="text-gold-gradient">SIYAJJ</span>
            </h1>
            <p className="text-siyajj-ivory/70 max-w-2xl mx-auto text-lg leading-relaxed">
              SIYAJJ n'est pas une agence de voyages comme les autres. Nous avons construit une approche qui place la spiritualité, la préparation et l'humain au centre de chaque séjour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...stagger(0.1)}>
              <h2 className="text-3xl font-serif text-siyajj-ivory mb-6">Notre vision</h2>
              <p className="text-siyajj-ivory/75 leading-relaxed mb-4">
                Nous croyons que chaque pèlerin mérite de vivre son Omra ou son Hajj comme une expérience transformatrice — pas comme un voyage organisé parmi d'autres.
              </p>
              <p className="text-siyajj-ivory/75 leading-relaxed">
                SIYAJJ a été conçu pour répondre à une attente que nous avons observée : des musulmans francophones souhaitant un service premium, une préparation rigoureuse et un accompagnement humain — sans compromis entre excellence spirituelle et confort.
              </p>
            </motion.div>
            <motion.div {...stagger(0.2)} className="emerald-glass p-8 rounded-2xl">
              <h3 className="text-siyajj-luxury-gold font-serif mb-4">Ce qui nous distingue</h3>
              <ul className="space-y-3">
                {[
                  "Formations spirituelles incluses dans chaque formule",
                  "Accompagnement francophone de A à Z",
                  "Suivi avant, pendant et après le voyage",
                  "Hôtels vérifiés et sélectionnés par notre équipe",
                  "Partenariat opérationnel avec Omra Factory",
                  "Service de conciergerie disponible 24/7",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-siyajj-ivory/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les 6 piliers */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12 text-center">Les piliers de notre méthode</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="glass-card p-6 rounded-2xl">
                <div className="text-siyajj-luxury-gold font-serif text-3xl opacity-30 mb-3 leading-none">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-siyajj-ivory font-serif mb-3">{p.title}</h3>
                <p className="text-siyajj-ivory/65 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12">Comment nous travaillons</motion.h2>
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="flex gap-6 items-start glass-card p-6 rounded-2xl">
                <div className="text-siyajj-luxury-gold font-serif text-3xl opacity-40 shrink-0 leading-none">{step.step}</div>
                <div>
                  <h3 className="text-siyajj-ivory font-serif mb-2">{step.title}</h3>
                  <p className="text-siyajj-ivory/65 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi SIYAJJ */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12">Pourquoi choisir SIYAJJ</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySiyajj.map((item, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.05)} className="emerald-glass p-5 rounded-2xl">
                <h3 className="text-siyajj-luxury-gold font-serif mb-2 text-sm">{item.title}</h3>
                <p className="text-siyajj-ivory/65 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,70,0.07),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Vivez l'expérience SIYAJJ</h2>
          <p className="text-siyajj-ivory/70 mb-10">Découvrez nos collections et partez avec la confiance que tout a été pensé pour vous.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/collections">
                <span className="flex items-center gap-2">Découvrir les collections <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
