import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/content";
import { OrnamentBadge, SectionKicker, GoldDivider } from "@/components/ui/ornaments";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-30px" },
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

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 velvet-texture opacity-18 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,154,70,0.07),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-3xl">
          <motion.div {...reveal(0.1)}>
            <OrnamentBadge className="mb-8">Témoignages</OrnamentBadge>
            <h1 className="display-lg text-siyajj-ivory mb-5 leading-tight">
              Ce que disent nos <span className="text-gold-gradient">pèlerins</span>
            </h1>
            <GoldDivider className="max-w-[200px] mx-auto mb-7" />
            <p className="body-lg text-siyajj-ivory/62">
              Plus de 15 000 pèlerins ont fait confiance à SIYAJJ pour leur Omra. Voici ce qu'ils en disent — en leurs propres mots.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-12 bg-siyajj-black-ink border-y border-siyajj-luxury-gold/12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={i} {...reveal(0.1 + i * 0.06)} className="text-center">
                <div className="stat-number text-siyajj-luxury-gold mb-1.5">{stat.value}</div>
                <div className="label-premium text-siyajj-ivory/48">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry testimonials ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {EXTENDED_TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                {...reveal(0.05 + i * 0.04)}
                className="break-inside-avoid glass-card p-6 rounded-2xl mb-6 hover:border-siyajj-luxury-gold/30 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-siyajj-luxury-gold text-siyajj-luxury-gold" strokeWidth={0} />
                  ))}
                </div>
                <p className="body-md text-siyajj-ivory/75 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-display text-base text-siyajj-ivory">{t.name}</div>
                  <div className="label-premium text-siyajj-ivory/42 mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency note ── */}
      <section className="py-10 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.p {...reveal(0.1)} className="body-md text-siyajj-ivory/40 leading-relaxed">
            Les avis présentés sont représentatifs des retours de nos pèlerins. SIYAJJ s'engage à une transparence totale sur la qualité de ses prestations. Pour tout avis ou question, contactez-nous directement.
          </motion.p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,76,0.2),transparent_65%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <SectionKicker>Rejoignez la communauté</SectionKicker>
          <h2 className="section-title text-siyajj-ivory mb-5">Rejoignez les pèlerins SIYAJJ</h2>
          <GoldDivider className="max-w-[140px] mx-auto mb-8" />
          <p className="body-lg text-siyajj-ivory/62 mb-10">Construisons ensemble votre voyage vers les Lieux Saints.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-12 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 label-premium sweep-hover relative overflow-hidden">
              <Link href="/nos-omras">
                <span className="relative z-10 flex items-center gap-2">Voir nos départs <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} /></span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 border-siyajj-luxury-gold/35 text-siyajj-luxury-gold hover:bg-white/5 label-premium">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
