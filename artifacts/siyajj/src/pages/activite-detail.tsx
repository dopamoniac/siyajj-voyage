import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Star, HelpCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import { activitiesDetail } from "@/data/activities-detail";
import { CONTACT } from "@/data/content";
import type { MediaSlot } from "@/components/ui/media-frame";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ActiviteDetail() {
  const params = useParams<{ slug: string }>();
  const activity = activitiesDetail.find(a => a.slug === params.slug);

  if (!activity) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif text-siyajj-ivory mb-4">Activité introuvable</h1>
        <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold">
          <Link href="/activites">Voir toutes les activités</Link>
        </Button>
      </div>
    );
  }

  const related = activitiesDetail.filter(a => activity.related.includes(a.slug)).slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MediaFrame slot={activity.slot as MediaSlot} priority className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/85 to-siyajj-deep-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-siyajj-deep-black" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/activites" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← Toutes les activités
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              Activité spirituelle
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">{activity.title}</h1>
            <p className="text-xl text-siyajj-ivory/80 font-light mb-4 italic">{activity.tagline}</p>
            <p className="text-base text-siyajj-ivory/70 max-w-2xl leading-relaxed mb-10">{activity.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => document.getElementById("trip-builder")?.scrollIntoView({ behavior: "smooth" })}
                asChild
                className="h-14 px-8 bg-gradient-to-r from-siyajj-emerald to-siyajj-teal border border-siyajj-luxury-gold/40 text-siyajj-ivory uppercase tracking-widest text-xs font-bold"
              >
                <Link href="/contact?subject=Ajouter à mon projet">
                  <span className="flex items-center gap-2">Ajouter à mon projet <ArrowRight className="w-4 h-4" /></span>
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

      {/* Description + Valeur spirituelle */}
      <section className="py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...stagger(0.1)}>
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-4">En quoi consiste cette activité ?</h2>
              <p className="text-siyajj-ivory/75 leading-relaxed">{activity.description}</p>
            </motion.div>
            <motion.div {...stagger(0.2)} className="emerald-glass p-8 rounded-2xl border border-siyajj-luxury-gold/20">
              <div className="flex items-center gap-2 text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">
                <Star className="w-4 h-4" /> Valeur spirituelle
              </div>
              <p className="text-siyajj-ivory/85 leading-relaxed italic">{activity.spiritualValue}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12 text-center">Ce qui est inclus</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activity.included.map((item, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.05)} className="glass-card p-6 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-siyajj-luxury-gold mb-3" />
                <h3 className="text-siyajj-ivory font-serif mb-2">{item.title}</h3>
                <p className="text-siyajj-ivory/65 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div {...stagger(0.1)} className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">
              <Users className="w-4 h-4" /> Pour qui
            </div>
            <h2 className="text-3xl font-serif text-siyajj-ivory">Cette activité est conçue pour</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {activity.whoFor.map((w, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.05)} className="emerald-glass p-6 rounded-2xl flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0" />
                <div>
                  <h3 className="text-siyajj-ivory font-serif mb-1">{w.label}</h3>
                  <p className="text-siyajj-ivory/65 text-sm">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intégration dans le voyage */}
      <section className="py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-12 text-center">Comment s'intègre-t-elle dans votre voyage ?</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {activity.tripIntegration.map((phase, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.08)} className="glass-card p-6 rounded-2xl">
                <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-3 font-medium">{phase.phase}</div>
                <p className="text-siyajj-ivory/75 text-sm leading-relaxed">{phase.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités liées */}
      {related.length > 0 && (
        <section className="py-20 bg-siyajj-deep-black">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Activités complémentaires</motion.h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div key={rel.slug} {...stagger(0.1 + i * 0.06)}>
                  <Link href={`/activites/${rel.slug}`} className="block emerald-glass p-6 rounded-2xl hover:border-siyajj-luxury-gold/50 transition-colors group">
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
      <section className="py-20 bg-siyajj-black-ink border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div {...stagger(0.1)} className="flex items-center gap-3 mb-10">
            <HelpCircle className="w-6 h-6 text-siyajj-luxury-gold" />
            <h2 className="text-3xl font-serif text-siyajj-ivory">Questions fréquentes</h2>
          </motion.div>
          <Accordion type="single" collapsible>
            {activity.faqs.map((faq, i) => (
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
      <section className="py-24 bg-siyajj-deep-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,76,76,0.3),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Construisons votre expérience SIYAJJ.</h2>
          <p className="text-siyajj-ivory/70 mb-10">Un conseiller est disponible pour intégrer cette activité à votre séjour et construire le voyage qui vous correspond.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Parler sur WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
