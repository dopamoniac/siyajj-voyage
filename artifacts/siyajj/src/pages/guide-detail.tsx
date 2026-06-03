import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, HelpCircle, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guidesDetail } from "@/data/guides-detail";
import { CONTACT } from "@/data/content";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function GuideDetail() {
  const params = useParams<{ slug: string }>();
  const guide = guidesDetail.find(g => g.slug === params.slug);

  if (!guide) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif text-siyajj-ivory mb-4">Guide introuvable</h1>
        <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold">
          <Link href="/guides">Voir tous les guides</Link>
        </Button>
      </div>
    );
  }

  const related = guidesDetail.filter(g => guide.related.includes(g.slug)).slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-gradient-to-br from-siyajj-deep-black via-siyajj-black-ink to-siyajj-deep-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,154,70,0.08),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/guides" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← Tous les guides
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              <BookOpen className="w-3 h-3" /> {guide.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">{guide.title}</h1>
            <p className="text-xl text-siyajj-ivory/75 font-light mb-6 italic">{guide.tagline}</p>
            <p className="text-base text-siyajj-ivory/65 max-w-2xl leading-relaxed">{guide.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Sections de contenu */}
      <section className="py-16 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-12">
            {guide.sections.map((section, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="scroll-mt-32">
                <h2 className="text-2xl font-serif text-siyajj-ivory mb-4 flex items-center gap-3">
                  <span className="text-siyajj-luxury-gold text-sm font-sans">{String(i + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="pl-8 border-l border-siyajj-luxury-gold/20">
                  <p className="text-siyajj-ivory/75 leading-relaxed mb-4">{section.content}</p>
                  {section.bullets && (
                    <ul className="space-y-2 mt-4">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-siyajj-ivory/70 text-sm">
                          <ChevronRight className="w-4 h-4 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil SIYAJJ */}
      <section className="py-16 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div {...stagger(0.1)} className="emerald-glass p-8 rounded-2xl">
            <div className="flex items-center gap-2 text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">
              <HelpCircle className="w-4 h-4" /> Note importante
            </div>
            <p className="text-siyajj-ivory/80 leading-relaxed italic">
              {guide.cta}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides liés */}
      {related.length > 0 && (
        <section className="py-10 md:py-20 bg-siyajj-deep-black">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Guides complémentaires</motion.h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div key={rel.slug} {...stagger(0.1 + i * 0.06)}>
                  <Link href={`/guides/${rel.slug}`} className="block glass-card p-6 rounded-2xl hover:border-siyajj-luxury-gold/50 transition-colors group">
                    <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-2">{rel.category}</div>
                    <h3 className="text-siyajj-ivory font-serif mb-2 group-hover:text-siyajj-luxury-gold transition-colors">{rel.title}</h3>
                    <p className="text-siyajj-ivory/55 text-sm">{rel.tagline}</p>
                    <div className="flex items-center gap-1 text-siyajj-luxury-gold text-xs mt-4">Lire le guide <ArrowRight className="w-3 h-3" /></div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,76,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Prêt à préparer votre Omra ?</h2>
          <p className="text-siyajj-ivory/70 mb-10">Un conseiller SIYAJJ est disponible pour répondre à vos questions et construire votre voyage avec vous.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/nos-omras">Voir nos départs</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Parler à un conseiller</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
