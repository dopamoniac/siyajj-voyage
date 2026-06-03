import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, HelpCircle, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import { omrasSubpages } from "@/data/omras-subpages";
import { activitiesDetail } from "@/data/activities-detail";
import { CONTACT } from "@/data/content";
import type { MediaSlot } from "@/components/ui/media-frame";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function OmraSubpage() {
  const params = useParams<{ slug: string }>();
  const page = omrasSubpages.find(o => o.slug === params.slug);

  if (!page) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif text-siyajj-ivory mb-4">Page introuvable</h1>
        <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold">
          <Link href="/nos-omras">Voir tous nos départs</Link>
        </Button>
      </div>
    );
  }

  const relatedActivities = activitiesDetail.filter(a => page.activities.includes(a.slug)).slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 md:py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MediaFrame slot={page.slot as MediaSlot} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/80 to-siyajj-deep-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-siyajj-deep-black" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/nos-omras" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← Tous nos départs
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              {page.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-6">{page.title}</h1>
            <p className="text-xl text-siyajj-ivory/80 italic mb-4 font-light">{page.tagline}</p>
            <p className="text-siyajj-ivory/70 max-w-2xl leading-relaxed mb-10">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
                <Link href="/contact">
                  <span className="flex items-center gap-2">Demander un devis <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-ivory hover:text-siyajj-luxury-gold uppercase tracking-widest text-xs">
                <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Cette Omra est faite pour vous si</motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {page.whoFor.map((w, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="emerald-glass p-6 rounded-2xl flex gap-4 items-start">
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

      {/* Ce qui est inclus */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Ce qui est inclus</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.included.map((item, i) => (
              <motion.div key={i} {...stagger(0.05 + i * 0.04)} className="flex items-start gap-3 p-4 glass-card rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                <span className="text-siyajj-ivory/80 text-sm leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres disponibles */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Départs disponibles</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.offers.map((offer, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.06)} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                {offer.tag && (
                  <div className="bg-siyajj-luxury-gold text-siyajj-deep-black text-[10px] uppercase tracking-widest px-4 py-1.5 font-bold">{offer.tag}</div>
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-siyajj-ivory font-serif text-lg">{offer.title}</h3>
                  <div className="space-y-1.5 text-sm text-siyajj-ivory/65">
                    <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-siyajj-luxury-gold" />{offer.month} · {offer.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-siyajj-luxury-gold" />{offer.departure}</div>
                    <div className="text-siyajj-ivory/50">{offer.hotelLevel}</div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="text-siyajj-luxury-gold font-serif text-sm">À partir de <span className="text-xl">{offer.priceFrom}</span></div>
                    <Button asChild size="sm" className="w-full mt-3 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-[10px] font-bold">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités recommandées */}
      {relatedActivities.length > 0 && (
        <section className="py-10 md:py-20 bg-siyajj-black-ink border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Activités recommandées</motion.h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedActivities.map((act, i) => (
                <motion.div key={act.slug} {...stagger(0.1 + i * 0.06)}>
                  <Link href={`/activites/${act.slug}`} className="block emerald-glass p-6 rounded-2xl hover:border-siyajj-luxury-gold/50 transition-colors group">
                    <h3 className="text-siyajj-ivory font-serif mb-2 group-hover:text-siyajj-luxury-gold transition-colors">{act.title}</h3>
                    <p className="text-siyajj-ivory/55 text-sm">{act.tagline}</p>
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
            {page.faqs.map((faq, i) => (
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,70,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Construisons votre voyage ensemble.</h2>
          <p className="text-siyajj-ivory/70 mb-10">Un conseiller SIYAJJ vous contacte pour affiner chaque détail de votre séjour selon vos attentes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
              <Link href="/contact">Demander un devis personnalisé</Link>
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
