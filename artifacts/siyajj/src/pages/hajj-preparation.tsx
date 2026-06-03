import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT } from "@/data/content";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const STEPS = [
  { num: "01", title: "Comprendre l'obligation du Hajj", desc: "Le Hajj est le cinquième pilier de l'Islam, obligatoire une fois dans sa vie pour tout musulman en capacité physique et financière. Comprendre cette obligation est la première étape de la préparation." },
  { num: "02", title: "Évaluer sa capacité", desc: "La capacité au Hajj (Istita'a) englobe la santé physique, les moyens financiers et la sécurité du trajet. Consultez un érudit ou un conseiller pour évaluer votre situation personnelle." },
  { num: "03", title: "Constituer son épargne", desc: "Le Hajj nécessite une préparation financière anticipée. SIYAJJ peut vous orienter sur les fourchettes de budget selon les formules disponibles pour le Hajj 2027." },
  { num: "04", title: "S'inscrire tôt", desc: "Les quotas par pays rendent les places limitées. Une inscription anticipée — idéalement 12 à 18 mois à l'avance — est fortement recommandée pour un départ serein." },
  { num: "05", title: "Préparer les documents", desc: "Passeport valide, photos, certificat médical, vaccinations requises (méningite notamment). SIYAJJ gère l'ensemble des démarches administratives pour les pèlerins inscrits." },
  { num: "06", title: "Se former aux rites", desc: "Les rites du Hajj sont plus complexes que ceux de la Omra. Une formation dédiée — sessions vidéo, live et PDF — est proposée par SIYAJJ pour chaque pèlerin inscrit." },
];

const HAJJ_FAQS = [
  { q: "Quelle est la différence entre le Hajj et la Omra ?", a: "La Omra est un pèlerinage mineur, accompli à n'importe quel moment de l'année. Le Hajj est le Grand Pèlerinage, cinquième pilier de l'Islam, accompli uniquement en Dhul-Hijja. Les rites du Hajj sont plus nombreux et incluent notamment le Wuquf à Arafat, le séjour à Mina et Muzdalifa, et la lapidation." },
  { q: "SIYAJJ organise-t-il le Hajj ?", a: "SIYAJJ accompagne les pèlerins dans la préparation et l'organisation du Hajj en partenariat avec Omra Factory. Contactez-nous pour connaître les disponibilités pour le prochain Hajj et recevoir toutes les informations nécessaires." },
  { q: "Combien coûte le Hajj depuis la France ?", a: "Le coût du Hajj varie significativement selon la formule, la compagnie et les conditions de l'année. En 2025-2026, les fourchettes se situaient entre 6 000 € et 15 000 € par personne tout compris. Contactez SIYAJJ pour une estimation actualisée." },
  { q: "Y a-t-il un quota pour les pèlerins français ?", a: "Oui, l'Arabie Saoudite applique un quota par pays pour le Hajj, basé sur un ratio par rapport à la population musulmane. Le nombre de places est limité. Une demande anticipée est indispensable." },
  { q: "Peut-on faire le Hajj seule en tant que femme ?", a: "Les règles varient selon les autorités. Généralement, les femmes doivent être accompagnées d'un Mahram pour le Hajj. Des dispositions spéciales existent pour les femmes plus âgées voyageant en groupe organisé. Consultez un conseiller SIYAJJ pour votre situation." },
];

export default function HajjPreparation() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-siyajj-deep-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,76,76,0.4),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/hajj" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← Le Hajj avec SIYAJJ
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              Préparation Hajj
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">
              Se préparer pour le <span className="text-gold-gradient">Hajj</span>
            </h1>
            <p className="text-siyajj-ivory/70 max-w-2xl leading-relaxed mb-10 text-lg">
              Le Hajj est le plus grand voyage de la vie d'un musulman. Il se prépare longtemps à l'avance — spirituellement, physiquement et administrativement. SIYAJJ vous accompagne dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
                <Link href="/hajj/demande-informations">
                  <span className="flex items-center gap-2">Demander des informations <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-ivory hover:text-siyajj-luxury-gold uppercase tracking-widest text-xs">
                <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Parler à un conseiller</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce qu'est le Hajj */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...stagger(0.1)}>
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-4">Le Hajj en quelques mots</h2>
              <p className="text-siyajj-ivory/75 leading-relaxed">
                Le Hajj est le cinquième pilier de l'Islam. Il est obligatoire (Fard) une fois dans la vie pour tout musulman adulte, sain d'esprit, et en capacité physique et financière. Il se déroule uniquement du 8 au 13 Dhul-Hijja, le dernier mois du calendrier lunaire islamique.
              </p>
            </motion.div>
            <motion.div {...stagger(0.2)} className="emerald-glass p-6 rounded-2xl">
              <h3 className="text-siyajj-luxury-gold font-serif mb-4 text-lg">Les rites essentiels du Hajj</h3>
              <ul className="space-y-2">
                {["Ihrâm au Miqat", "Tawaf al-Qudum", "Wuquf à Arafat — cœur du Hajj", "Muzdalifa (nuit)", "Mina & lapidation (Jamarat)", "Sacrifice (Aïd al-Adha)", "Tawaf al-Ifada & Sa'i", "Tawaf al-Wada'"].map((r, i) => (
                  <li key={i} className="flex items-center gap-2 text-siyajj-ivory/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-siyajj-luxury-gold shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Étapes de préparation */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12">Les étapes de préparation</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="glass-card p-6 rounded-2xl">
                <div className="text-siyajj-luxury-gold font-serif text-3xl opacity-40 mb-4 leading-none">{step.num}</div>
                <h3 className="text-siyajj-ivory font-serif mb-3">{step.title}</h3>
                <p className="text-siyajj-ivory/65 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hajj avec SIYAJJ */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-6">Le Hajj avec SIYAJJ</motion.h2>
          <motion.p {...stagger(0.2)} className="text-siyajj-ivory/70 leading-relaxed max-w-2xl mx-auto mb-10">
            SIYAJJ organise le Hajj en partenariat avec Omra Factory pour les pèlerins francophones. Accompagnement complet, formations dédiées, hôtels en zone Hajj et coordination logistique intégrale. Les places sont limitées — contactez-nous dès maintenant pour préparer votre Hajj 2027.
          </motion.p>
          <motion.div {...stagger(0.3)} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/hajj/demande-informations">Demander des informations</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div {...stagger(0.1)} className="flex items-center gap-3 mb-10">
            <HelpCircle className="w-6 h-6 text-siyajj-luxury-gold" />
            <h2 className="text-3xl font-serif text-siyajj-ivory">Questions sur le Hajj</h2>
          </motion.div>
          <Accordion type="single" collapsible>
            {HAJJ_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-siyajj-luxury-gold/10">
                <AccordionTrigger className="text-left font-serif text-siyajj-ivory hover:text-siyajj-luxury-gold py-5 text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-siyajj-ivory/70 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
