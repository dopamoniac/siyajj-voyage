import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/content";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const EXTENDED_TESTIMONIALS = [
  ...testimonials,
  { name: "Amina K.", role: "Omra Prestige — Bruxelles", text: "Un service d'une qualité remarquable. L'hôtel était au pied du Haram, l'accompagnateur disponible à toute heure. Je recommande SIYAJJ sans hésitation.", rating: 5 },
  { name: "Rachid M.", role: "Omra Ramadan — Paris", text: "Vivre le Ramadan à La Mecque grâce à SIYAJJ était un rêve devenu réalité. Chaque détail avait été pensé pour qu'on se concentre uniquement sur l'essentiel.", rating: 5 },
  { name: "Leila B.", role: "Omra Seniors — Lyon", text: "Ma mère de 72 ans a réalisé son voyage de toute une vie. SIYAJJ a géré chaque aspect avec une attention touchante. Elle est rentrée rayonnante.", rating: 5 },
  { name: "Hassan T.", role: "Collection Renaissance — Paris", text: "La Collection Renaissance est une expérience transformatrice. Le suivi après retour était aussi précieux que le voyage lui-même. Merci à toute l'équipe.", rating: 5 },
  { name: "Safia D.", role: "Première Omra — Marseille", text: "Je partais seule pour ma première Omra, avec beaucoup d'appréhension. L'équipe SIYAJJ a tout simplifié. Le voyage était beau, serein et profondément spirituel.", rating: 5 },
  { name: "Ibrahim A.", role: "Omra Famille — Lyon", text: "Emmener nos trois enfants en Omra semblait complexe. SIYAJJ a organisé chaque détail pour qu'on vive ça ensemble. Nos enfants parlent encore de ce voyage.", rating: 5 },
];

const STATS = [
  { value: "+15 000", label: "pèlerins accompagnés" },
  { value: "4.9 / 5", label: "note moyenne vérifiée" },
  { value: "+30", label: "départs chaque mois" },
  { value: "100%", label: "accompagnement francophone" },
];

export default function Avis() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-siyajj-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,154,70,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-3xl">
          <motion.div {...stagger(0.1)}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-8">
              Témoignages
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory mb-6 leading-tight">
              Ce que disent nos <span className="text-gold-gradient">pèlerins</span>
            </h1>
            <p className="text-siyajj-ivory/70 text-lg leading-relaxed">
              Plus de 15 000 pèlerins ont fait confiance à SIYAJJ pour leur Omra. Voici ce qu'ils en disent — en leurs propres mots.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-siyajj-black-ink border-y border-siyajj-luxury-gold/15">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-siyajj-luxury-gold mb-1">{stat.value}</div>
                <div className="text-siyajj-ivory/55 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'avis */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {EXTENDED_TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                {...stagger(0.05 + i * 0.04)}
                className="break-inside-avoid glass-card p-6 rounded-2xl mb-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-siyajj-luxury-gold text-siyajj-luxury-gold" />
                  ))}
                </div>
                <p className="text-siyajj-ivory/80 leading-relaxed text-sm mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="text-siyajj-ivory font-serif">{t.name}</div>
                  <div className="text-siyajj-ivory/50 text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note de transparence */}
      <section className="py-12 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.p {...stagger(0.1)} className="text-siyajj-ivory/50 text-sm leading-relaxed">
            Les avis présentés sont représentatifs des retours de nos pèlerins. SIYAJJ s'engage à une transparence totale sur la qualité de ses prestations. Pour tout avis ou question, contactez-nous directement.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,76,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Rejoignez les pèlerins SIYAJJ</h2>
          <p className="text-siyajj-ivory/70 mb-10">Construisons ensemble votre voyage vers les Lieux Saints.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/nos-omras">
                <span className="flex items-center gap-2">Voir nos départs <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
