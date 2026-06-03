import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const ROLES = [
  { title: "Logistique sur place", desc: "Omra Factory gère les opérations logistiques en Arabie Saoudite : coordination hôtelière, transferts, gestion des groupes et communication avec les autorités locales." },
  { title: "Partenariats hôteliers", desc: "Grâce à ses relations établies avec les meilleurs hôtels de La Mecque et Médine, Omra Factory permet à SIYAJJ de garantir des hébergements de qualité à des conditions optimales." },
  { title: "Visa et démarches officielles", desc: "Omra Factory accompagne SIYAJJ dans la gestion des démarches officielles, notamment le traitement des visas Omra auprès des instances saoudiennes compétentes." },
  { title: "Accompagnateurs sur place", desc: "Les guides et accompagnateurs déployés sur place lors des séjours SIYAJJ sont formés et coordonnés par Omra Factory selon les standards de qualité SIYAJJ." },
];

const GARANTEES = [
  "Expertise opérationnelle de terrain depuis plusieurs années",
  "Réseau hôtelier vérifié et négocié",
  "Coordination visa et démarches administratives",
  "Accompagnateurs francophones formés",
  "Assistance d'urgence sur place 24/7",
  "Respect des standards SIYAJJ sur chaque séjour",
];

export default function AProposFactory() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-siyajj-deep-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,76,76,0.35),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/a-propos" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← À propos de SIYAJJ
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              Partenaire Opérationnel
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">
              SIYAJJ & <span className="text-gold-gradient">Omra Factory</span>
            </h1>
            <p className="text-siyajj-ivory/70 max-w-2xl leading-relaxed text-lg">
              Derrière chaque séjour SIYAJJ, il y a une organisation opérationnelle rigoureuse. Notre partenaire Omra Factory en est le pilier — invisible pour vous, essentiel pour la qualité de votre expérience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explication du partenariat */}
      <section className="py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...stagger(0.1)}>
              <h2 className="text-3xl font-serif text-siyajj-ivory mb-6">Deux entités, une expérience</h2>
              <p className="text-siyajj-ivory/75 leading-relaxed mb-4">
                SIYAJJ est l'agence de service, de contenu et d'accompagnement client. Nous sommes votre interlocuteur principal — avant, pendant et après le voyage.
              </p>
              <p className="text-siyajj-ivory/75 leading-relaxed mb-4">
                Omra Factory est notre partenaire opérationnel sur le terrain. Ils gèrent la logistique locale en Arabie Saoudite pour que chaque aspect de votre séjour se déroule avec fiabilité.
              </p>
              <p className="text-siyajj-ivory/75 leading-relaxed">
                Cette collaboration vous garantit le meilleur des deux mondes : l'expérience premium et le suivi personnalisé de SIYAJJ, associés à l'expertise terrain d'Omra Factory.
              </p>
            </motion.div>
            <motion.div {...stagger(0.2)} className="emerald-glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-siyajj-luxury-gold" />
                <h3 className="text-siyajj-ivory font-serif text-xl">Ce que garantit ce partenariat</h3>
              </div>
              <ul className="space-y-3">
                {GARANTEES.map((g, i) => (
                  <li key={i} className="flex items-start gap-3 text-siyajj-ivory/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                    {g}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rôles */}
      <section className="py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12">Le rôle d'Omra Factory dans votre séjour</motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ROLES.map((role, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="glass-card p-6 rounded-2xl">
                <h3 className="text-siyajj-luxury-gold font-serif mb-3">{role.title}</h3>
                <p className="text-siyajj-ivory/70 text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparence */}
      <section className="py-16 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div {...stagger(0.1)} className="emerald-glass p-8 rounded-2xl">
            <h3 className="text-siyajj-ivory font-serif text-xl mb-4">Notre engagement de transparence</h3>
            <p className="text-siyajj-ivory/75 leading-relaxed">
              SIYAJJ croit en une communication ouverte. Notre partenariat avec Omra Factory est clairement assumé et communiqué. En choisissant SIYAJJ, vous bénéficiez de la valeur ajoutée de ce partenariat : une exécution fiable sur le terrain, combinée à un suivi premium côté SIYAJJ. Si vous avez des questions sur notre structure ou notre partenariat, un conseiller SIYAJJ vous répond directement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-siyajj-deep-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,76,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Partez avec confiance</h2>
          <p className="text-siyajj-ivory/70 mb-10">Un partenariat solide pour un voyage serein. Découvrez nos formules et construisez votre Omra avec SIYAJJ.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/nos-omras">
                <span className="flex items-center gap-2">Voir nos départs <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
