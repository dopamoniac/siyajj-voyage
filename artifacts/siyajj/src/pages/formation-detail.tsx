import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, BookOpen, HelpCircle, Users, PlayCircle, FileText, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formationsDetail } from "@/data/formations-detail";
import { CONTACT } from "@/data/content";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const FORMAT_ICONS: Record<string, React.ReactNode> = {
  "Vidéo": <PlayCircle className="w-4 h-4" />,
  "PDF": <FileText className="w-4 h-4" />,
  "Live": <Wifi className="w-4 h-4" />,
  "Session": <Wifi className="w-4 h-4" />,
};

function getFormatIcon(type: string) {
  for (const [key, icon] of Object.entries(FORMAT_ICONS)) {
    if (type.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return <BookOpen className="w-4 h-4" />;
}

export default function FormationDetail() {
  const params = useParams<{ slug: string }>();
  const formation = formationsDetail.find(f => f.slug === params.slug);

  if (!formation) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif text-siyajj-ivory mb-4">Formation introuvable</h1>
        <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold">
          <Link href="/formations">Voir toutes les formations</Link>
        </Button>
      </div>
    );
  }

  const related = formationsDetail.filter(f => formation.related.includes(f.slug)).slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-gradient-to-br from-siyajj-deep-black via-siyajj-black-ink to-siyajj-emerald/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,76,76,0.4),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/formations" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← Toutes les formations
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              Formation SIYAJJ
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">{formation.title}</h1>
            <p className="text-xl text-siyajj-ivory/80 font-light mb-4 italic">{formation.tagline}</p>
            <p className="text-base text-siyajj-ivory/70 max-w-2xl leading-relaxed mb-10">{formation.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-emerald to-siyajj-teal border border-siyajj-luxury-gold/40 text-siyajj-ivory uppercase tracking-widest text-xs font-bold">
                <Link href="/contact?subject=Formation">
                  <span className="flex items-center gap-2">Accéder à la formation <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-ivory hover:text-siyajj-luxury-gold uppercase tracking-widest text-xs">
                <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Questions par WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce que vous allez apprendre */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Ce que vous allez apprendre</motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {formation.whatYouLearn.map((item, i) => (
              <motion.div key={i} {...stagger(0.05 + i * 0.04)} className="flex items-start gap-3 p-4 glass-card rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                <span className="text-siyajj-ivory/80 leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10 text-center">Format de la formation</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formation.formats.map((fmt, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="emerald-glass p-6 rounded-2xl text-center">
                <div className="flex justify-center text-siyajj-luxury-gold mb-3">{getFormatIcon(fmt.type)}</div>
                <h3 className="text-siyajj-ivory font-serif mb-2">{fmt.type}</h3>
                <p className="text-siyajj-ivory/60 text-sm">{fmt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div {...stagger(0.1)} className="flex items-center gap-3 mb-10">
            <Users className="w-6 h-6 text-siyajj-luxury-gold" />
            <h2 className="text-3xl font-serif text-siyajj-ivory">Pour qui ?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {formation.whoFor.map((w, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="glass-card p-6 rounded-2xl">
                <h3 className="text-siyajj-luxury-gold font-serif mb-2">{w.label}</h3>
                <p className="text-siyajj-ivory/70 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Modules de la formation</motion.h2>
          <div className="space-y-4">
            {formation.modules.map((mod, i) => (
              <motion.div key={i} {...stagger(0.05 + i * 0.04)} className="glass-card p-6 rounded-2xl flex gap-4">
                <div className="text-siyajj-luxury-gold font-serif text-2xl opacity-40 shrink-0 leading-none">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-siyajj-ivory font-serif mb-1">{mod.title}</h3>
                  <p className="text-siyajj-ivory/65 text-sm">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources incluses */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-8">Ressources incluses</motion.h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {formation.resources.map((res, i) => (
              <motion.li key={i} {...stagger(0.1 + i * 0.04)} className="flex items-center gap-3 p-4 emerald-glass rounded-xl">
                <FileText className="w-4 h-4 text-siyajj-luxury-gold shrink-0" />
                <span className="text-siyajj-ivory/80 text-sm">{res}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formations liées */}
      {related.length > 0 && (
        <section className="py-10 md:py-20 bg-siyajj-black-ink border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Formations complémentaires</motion.h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div key={rel.slug} {...stagger(0.1 + i * 0.06)}>
                  <Link href={`/formations/${rel.slug}`} className="block emerald-glass p-6 rounded-2xl hover:border-siyajj-luxury-gold/50 transition-colors group">
                    <h3 className="text-siyajj-ivory font-serif mb-2 group-hover:text-siyajj-luxury-gold transition-colors">{rel.title}</h3>
                    <p className="text-siyajj-ivory/60 text-sm">{rel.tagline}</p>
                    <div className="flex items-center gap-1 text-siyajj-luxury-gold text-xs mt-4">Découvrir <ArrowRight className="w-3 h-3" /></div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div {...stagger(0.1)} className="flex items-center gap-3 mb-10">
            <HelpCircle className="w-6 h-6 text-siyajj-luxury-gold" />
            <h2 className="text-3xl font-serif text-siyajj-ivory">Questions fréquentes</h2>
          </motion.div>
          <Accordion type="single" collapsible>
            {formation.faqs.map((faq, i) => (
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

      {/* CTA final */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,76,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Prêt à vous préparer ?</h2>
          <p className="text-siyajj-ivory/70 mb-10">Cette formation est incluse dans nos Collections. Parlez à un conseiller pour connaître comment y accéder dans votre formule.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/nos-omras">Voir nos départs</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
              <Link href="/contact">Parler à un conseiller</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
