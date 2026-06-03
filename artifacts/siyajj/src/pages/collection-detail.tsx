import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import { activitiesDetail } from "@/data/activities-detail";
import { getCollectionDetail } from "@/data/collections-detail";
import { CONTACT } from "@/data/content";
import type { MediaSlot } from "@/components/ui/media-frame";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function CollectionDetail() {
  const params = useParams<{ slug: string }>();
  const collection = getCollectionDetail(params.slug);

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif text-siyajj-ivory mb-4">Collection introuvable</h1>
        <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold">
          <Link href="/collections">Voir toutes les collections</Link>
        </Button>
      </div>
    );
  }

  const recommendedActivities = activitiesDetail
    .filter(a => collection.recommended.includes(a.slug))
    .slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 md:py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MediaFrame slot={collection.slot as MediaSlot} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/85 to-siyajj-deep-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-siyajj-deep-black" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div {...stagger(0.1)}>
            <Link href="/collections" className="inline-flex items-center gap-2 text-siyajj-luxury-gold/80 text-sm mb-8 hover:text-siyajj-luxury-gold transition-colors">
              ← Toutes les collections
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6">
              Collection SIYAJJ
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory leading-tight mb-4">{collection.name}</h1>
            <p className="text-xl text-siyajj-ivory/80 italic mb-4 font-light">{collection.tagline}</p>
            <p className="text-siyajj-ivory/65 max-w-2xl leading-relaxed mb-8">{collection.forWhom}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 text-siyajj-luxury-gold text-sm mb-10">
              {collection.comfort}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold">
                <Link href="/contact">
                  <span className="flex items-center gap-2">Demander un devis <ArrowRight className="w-4 h-4" /></span>
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

      {/* Description */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.p {...stagger(0.1)} className="text-siyajj-ivory/80 leading-relaxed text-lg">
            {collection.description}
          </motion.p>
          <motion.p {...stagger(0.2)} className="text-siyajj-ivory/60 leading-relaxed mt-4 text-sm border-l-2 border-siyajj-luxury-gold/30 pl-4">
            <strong className="text-siyajj-luxury-gold">Hébergement :</strong> {collection.hotelDetails}
          </motion.p>
        </div>
      </section>

      {/* Ce qui est inclus / Non inclus */}
      <section className="py-10 md:py-20 bg-siyajj-black-ink border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.h2 {...stagger(0.1)} className="text-2xl font-serif text-siyajj-ivory mb-8">Ce qui est inclus</motion.h2>
              <div className="space-y-4">
                {collection.includes.map((item, i) => (
                  <motion.div key={i} {...stagger(0.1 + i * 0.04)} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="text-siyajj-ivory text-sm font-medium">{item.title}</div>
                      <div className="text-siyajj-ivory/55 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.h2 {...stagger(0.15)} className="text-2xl font-serif text-siyajj-ivory mb-8">Non inclus</motion.h2>
              <div className="space-y-3">
                {collection.notIncluded.map((item, i) => (
                  <motion.div key={i} {...stagger(0.15 + i * 0.04)} className="flex items-center gap-3 text-siyajj-ivory/55 text-sm">
                    <X className="w-4 h-4 text-siyajj-ivory/30 shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme type */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Programme type</motion.h2>
          <div className="space-y-4">
            {collection.typicalProgram.map((day, i) => (
              <motion.div key={i} {...stagger(0.1 + i * 0.04)} className="flex gap-6 items-start glass-card p-5 rounded-xl">
                <div className="text-siyajj-luxury-gold font-serif text-sm shrink-0 min-w-[80px]">{day.day}</div>
                <p className="text-siyajj-ivory/75 text-sm leading-relaxed">{day.content}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...stagger(0.3)} className="text-siyajj-ivory/45 text-xs mt-6 italic">
            Programme indicatif. Les dates et activités peuvent varier selon la formule choisie. Un conseiller SIYAJJ vous confirme les détails avant validation.
          </motion.p>
        </div>
      </section>

      {/* Activités recommandées */}
      {recommendedActivities.length > 0 && (
        <section className="py-10 md:py-20 bg-siyajj-black-ink border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.h2 {...stagger(0.1)} className="text-3xl font-serif text-siyajj-ivory mb-10">Activités incluses dans cette collection</motion.h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {recommendedActivities.map((act, i) => (
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
            {collection.faqs.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,70,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Réservez la Collection {collection.name.replace("Collection ", "")}</h2>
          <p className="text-siyajj-ivory/70 mb-10">Un conseiller SIYAJJ est disponible pour vous accompagner et finaliser votre réservation dans les meilleures conditions.</p>
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
