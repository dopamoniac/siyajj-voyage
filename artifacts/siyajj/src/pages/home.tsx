import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, Star, ChevronRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import {
  HERO, CONTACT, collections, offers, formations, experience360, activities,
  vipFeatures, whySiyajj, processSteps, guides, guideCategories, faqs, testimonials
} from "@/data/content";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [voyageurs, setVoyageurs] = useState("");
  const [collection, setCollection] = useState("");
  const [videoOpen, setVideoOpen] = useState(false);

  const selectedVilleLabel = { "paris-cdg": "Paris CDG", "paris-ory": "Paris ORY", lyon: "Lyon", marseille: "Marseille", lille: "Lille", bruxelles: "Bruxelles", geneve: "Genève" }[ville] || "Sélectionner";
  const selectedDateLabel = { "nov-26": "Novembre 2026", "dec-26": "Décembre 2026", "ramadan-26": "Ramadan 2026", "ete-27": "Été 2027", "sur-mesure": "Sur-mesure" }[date] || "Sélectionner";
  const selectedVoyageursLabel = { "1": "1 Voyageur", "2": "2 Voyageurs", famille: "Famille", groupe: "Groupe privé" }[voyageurs] || "Sélectionner";
  const selectedCollectionLabel = { essentielle: "Essentielle", confort: "Confort", prestige: "Prestige", signature: "Signature", renaissance: "Renaissance" }[collection] || "Sélectionner";

  const stagger = (delay: number) => prefersReducedMotion ? { initial: false as const } : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } };

  const heroStats = [
    { value: "+15 000", label: "Pèlerins accompagnés" },
    { value: "+30", label: "Départs / mois" },
    { value: "4.9/5", label: "Avis vérifiés" },
    { value: "24/7", label: "Assistance" },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-siyajj-deep-black text-siyajj-ivory font-sans">
      {/* 1. Hero — one cinematic screen */}
      <section className="relative flex flex-col overflow-hidden min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-8rem)]">
        <div className="absolute inset-0 z-0">
          <MediaFrame slot="heroPortal" priority className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/80 to-siyajj-deep-black/10 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-siyajj-deep-black/30 via-transparent to-siyajj-deep-black" />
          <div className="absolute inset-0 velvet-texture mix-blend-overlay" />
          <div className="absolute inset-0 bg-siyajj-luxury-gold/[0.03] animate-slow-pulse" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-1 flex-col justify-center py-6 lg:py-8">
          <div className="grid lg:grid-cols-[52%_48%] gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div {...stagger(0.1)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                <span className="text-[10px]">✦</span> L'Excellence Omra & Hajj
              </motion.div>

              <motion.h1 {...stagger(0.2)} className="font-serif leading-[0.95] mb-5 drop-shadow-lg text-[clamp(2.75rem,5.4vw,5.25rem)]">
                {HERO.title[0]}<br />
                {HERO.title[1]}<br />
                <span className="text-gold-gradient relative inline-block">
                  {HERO.title[2]}
                  <span className="absolute inset-0 bg-siyajj-luxury-gold/20 blur-3xl -z-10 rounded-full opacity-50" />
                </span>
              </motion.h1>

              <motion.p {...stagger(0.3)} className="text-base md:text-lg text-siyajj-ivory/80 leading-relaxed mb-7 max-w-xl font-light tracking-wide">
                {HERO.subtitle}
              </motion.p>

              <motion.div {...stagger(0.4)} className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById("trip-builder")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" })}
                  className="h-14 px-8 bg-gradient-to-r from-siyajj-emerald via-siyajj-teal to-siyajj-emerald border border-siyajj-luxury-gold/50 text-siyajj-ivory hover:brightness-110 rounded-lg uppercase tracking-widest text-xs font-bold sweep-hover relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {HERO.ctaPrimary}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  onClick={() => setVideoOpen(true)}
                  variant="outline"
                  className="h-14 px-8 glass-card border-siyajj-luxury-gold/40 text-siyajj-ivory hover:text-siyajj-luxury-gold hover:bg-white/5 rounded-lg uppercase tracking-widest text-xs font-medium sweep-hover relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-4 h-4 fill-current" />
                    {HERO.ctaSecondary}
                  </span>
                </Button>
              </motion.div>
            </div>
            <div className="hidden lg:block" aria-hidden="true" />
          </div>

          {/* Trip builder — integrated into the hero */}
          <motion.div {...stagger(0.5)} id="trip-builder" className="mt-8 lg:mt-6 scroll-mt-[4.5rem] lg:scroll-mt-32">
            <div className="glass-card rounded-[26px] border border-siyajj-luxury-gold/30 shadow-2xl backdrop-blur-2xl bg-siyajj-warm-black/85 p-3 md:p-4 gold-glow">
              <div className="flex flex-col lg:flex-row items-stretch gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
                  {[
                    { key: "ville", label: "Ville de départ", value: ville, set: setVille, options: [["paris-cdg", "Paris CDG"], ["lyon", "Lyon"], ["marseille", "Marseille"], ["bruxelles", "Bruxelles"]] },
                    { key: "date", label: "Date souhaitée", value: date, set: setDate, options: [["nov-26", "Novembre 2026"], ["dec-26", "Décembre 2026"], ["ramadan-27", "Ramadan 2027"], ["sur-mesure", "Sur-mesure"]] },
                    { key: "voyageurs", label: "Voyageurs", value: voyageurs, set: setVoyageurs, options: [["1", "1 Voyageur"], ["2", "2 Voyageurs"], ["famille", "Famille"]] },
                    { key: "collection", label: "Collection", value: collection, set: setCollection, options: [["essentielle", "Essentielle"], ["confort", "Confort"], ["prestige", "Prestige"], ["signature", "Signature"], ["renaissance", "Renaissance"]] }
                  ].map(f => (
                    <div key={f.key} className="flex flex-col gap-1 p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold/80 font-medium">{f.label}</div>
                      <Select value={f.value} onValueChange={f.set}>
                        <SelectTrigger className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory font-serif text-base focus:ring-0 shadow-none">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory">
                          {f.options.map(([val, lab]) => <SelectItem key={val} value={val}>{lab}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full lg:w-auto h-full min-h-[3.25rem] px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 rounded-xl uppercase tracking-widest text-xs font-bold sweep-hover relative overflow-hidden flex items-center justify-center gap-2">
                      <span className="relative z-10">Trouver mon voyage</span>
                      <ArrowRight className="w-4 h-4 relative z-10" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory">
                    <DialogTitle className="sr-only">Votre projet SIYAJJ est prêt</DialogTitle>
                    <DialogDescription className="sr-only">Résumé de votre configuration de voyage et options pour procéder</DialogDescription>
                    <div className="p-4 text-center">
                      <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">Votre projet SIYAJJ est prêt</h3>
                      <p className="text-siyajj-ivory/70 mb-6 text-sm">Un conseiller est disponible pour affiner les détails de votre voyage.</p>
                      <div className="bg-black/40 border border-siyajj-luxury-gold/20 rounded-xl p-4 mb-6 text-left glass-card grid grid-cols-2 gap-4">
                        <div><div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest">Départ</div><div className="text-sm font-serif">{selectedVilleLabel}</div></div>
                        <div><div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest">Date</div><div className="text-sm font-serif">{selectedDateLabel}</div></div>
                        <div><div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest">Voyageurs</div><div className="text-sm font-serif">{selectedVoyageursLabel}</div></div>
                        <div><div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest">Collection</div><div className="text-sm font-serif text-siyajj-champagne">{selectedCollectionLabel}</div></div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button asChild className="w-full h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest font-bold text-xs">
                          <Link href="/contact">Demander un devis</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full h-12 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
                          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Continuer sur WhatsApp</a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>

          {/* Stats strip — part of the hero */}
          <motion.div {...stagger(0.6)} className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-3">
            {heroStats.map((s, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-serif text-xl md:text-2xl text-siyajj-champagne">{s.value}</span>
                <span className="text-[11px] uppercase tracking-widest text-siyajj-ivory/60">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Les Collections SIYAJJ */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-4">Les Collections SIYAJJ</h2>
            <p className="text-siyajj-ivory/70 text-lg font-light">Des expériences pensées pour chaque profil de pèlerin.</p>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map(col => (
              <div key={col.id} className="emerald-glass rounded-2xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                  <MediaFrame slot={col.slot} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <h3 className="text-2xl font-serif text-siyajj-champagne mb-2">{col.name}</h3>
                <p className="text-siyajj-ivory/80 text-sm mb-4 flex-grow">{col.tagline}</p>
                <div className="space-y-2 mb-6">
                  {col.services.slice(0, 3).map((srv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-siyajj-ivory/60">
                      <CheckCircle2 className="w-3 h-3 text-siyajj-luxury-gold" /> {srv}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-auto border-siyajj-luxury-gold/30 text-siyajj-ivory hover:text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10">
                  <Link href="/collections">Découvrir {col.name}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {collections.map(col => (
                  <CarouselItem key={col.id} className="pl-4 basis-[85%]">
                    <div className="emerald-glass rounded-2xl p-5 flex flex-col h-full">
                      <div className="h-40 rounded-xl overflow-hidden mb-5 relative">
                        <MediaFrame slot={col.slot} className="absolute inset-0" />
                      </div>
                      <h3 className="text-xl font-serif text-siyajj-champagne mb-2">{col.name}</h3>
                      <p className="text-siyajj-ivory/80 text-xs mb-4">{col.tagline}</p>
                      <Button asChild variant="outline" className="w-full mt-auto border-siyajj-luxury-gold/30 text-siyajj-luxury-gold text-xs">
                        <Link href="/collections">Découvrir</Link>
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* 5. Nos Omras à venir */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink relative velvet-texture border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-4">Nos départs à venir</h2>
              <p className="text-siyajj-ivory/70 text-lg font-light">Trouvez le séjour qui correspond à vos dates.</p>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-siyajj-luxury-gold/30 text-siyajj-ivory hover:text-siyajj-luxury-gold">
              <Link href="/nos-omras">Voir toutes les Omras</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.slice(0, 6).map(offer => (
              <div key={offer.id} className="glass-card p-5 rounded-2xl hover:border-siyajj-luxury-gold/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {offer.tag && <span className="inline-block px-2 py-1 rounded bg-siyajj-luxury-gold/20 text-siyajj-luxury-gold text-[10px] uppercase tracking-wider font-bold mb-2">{offer.tag}</span>}
                    <h3 className="text-xl font-serif text-siyajj-ivory">{offer.title}</h3>
                    <div className="text-siyajj-ivory/60 text-sm mt-1">{offer.month} • {offer.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase text-siyajj-luxury-gold/80">À partir de</div>
                    <div className="text-lg font-serif text-siyajj-champagne">{offer.priceFrom}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-y-2 mb-6">
                  <div className="text-xs text-siyajj-ivory/70"><span className="text-siyajj-luxury-gold mr-1">✦</span> {offer.departure}</div>
                  <div className="text-xs text-siyajj-ivory/70"><span className="text-siyajj-luxury-gold mr-1">✦</span> {offer.hotelLevel}</div>
                </div>
                <Button asChild className="w-full bg-white/5 hover:bg-white/10 text-siyajj-ivory border border-white/10">
                  <Link href={`/contact?subject=Devis ${offer.title}`}>Demander ce séjour</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Formations & Préparation Spirituelle */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-4">Préparation Spirituelle</h2>
            <p className="text-siyajj-ivory/70 text-lg font-light">Une Omra accomplie avec science et sérénité grâce à nos formations incluses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formations.slice(0, 4).map(f => (
              <div key={f.id} className="emerald-glass p-6 rounded-2xl flex flex-col justify-between items-start gap-4">
                <div>
                  <div className="px-2 py-1 rounded bg-siyajj-teal/30 text-siyajj-ivory text-[10px] uppercase tracking-wider mb-4 border border-siyajj-teal/50 inline-block">
                    {f.format}
                  </div>
                  <h3 className="text-lg font-serif text-siyajj-champagne mb-2">{f.title}</h3>
                  <p className="text-sm text-siyajj-ivory/70 leading-relaxed">{f.purpose}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-siyajj-luxury-gold/30 text-siyajj-luxury-gold">
              <Link href="/formations">Voir le programme de formation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Expérience SIYAJJ 360° */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink relative border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-4">L'Expérience 360°</h2>
            <p className="text-siyajj-ivory/70 text-lg font-light">Chaque étape de votre voyage est encadrée par notre équipe.</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-siyajj-luxury-gold/20 -translate-y-1/2 z-0" />
            <Carousel opts={{ align: "start" }} className="w-full z-10">
              <CarouselContent>
                {experience360.map((step) => (
                  <CarouselItem key={step.step} className="md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="glass-card p-6 rounded-2xl h-full relative text-center flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-siyajj-deep-black border border-siyajj-luxury-gold text-siyajj-champagne flex items-center justify-center font-serif text-xl mb-4 relative z-10 shadow-[0_0_15px_rgba(200,154,70,0.3)]">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-serif text-siyajj-ivory mb-2">{step.title}</h3>
                      <p className="text-xs text-siyajj-ivory/70">{step.support}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* 8. Activités & Expériences */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-4">Activités & Expériences</h2>
              <p className="text-siyajj-ivory/70 text-lg font-light">Des moments forts pour vivre l'Histoire sacrée.</p>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-siyajj-luxury-gold/30 text-siyajj-ivory">
              <Link href="/activites">Découvrir toutes les activités</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.slice(0, 3).map(act => (
              <div key={act.id} className="emerald-glass rounded-2xl overflow-hidden group">
                <div className="h-56 relative">
                  <MediaFrame slot={act.slot} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif text-siyajj-champagne drop-shadow-md">{act.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-siyajj-ivory/80 mb-4">{act.what}</p>
                  <p className="text-xs text-siyajj-luxury-gold/90 font-medium mb-6">Objectif : {act.spiritualValue}</p>
                  <Button asChild variant="link" className="text-siyajj-ivory p-0 h-auto font-medium hover:text-siyajj-luxury-gold">
                    <Link href={`/activites#${act.id}`}>En savoir plus <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Signature VIP */}
      <section className="relative py-16 md:py-32 bg-black overflow-hidden">
        <MediaFrame slot="signatureVip" className="absolute inset-0 opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/90 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-siyajj-luxury-gold text-xs uppercase tracking-[0.2em] mb-4 font-bold">Service Conciergerie</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-siyajj-ivory mb-6 leading-tight">
              SIYAJJ Signature,<br/>l'Omra privée pensée dans chaque détail.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {vipFeatures.slice(0, 6).map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-siyajj-ivory/80 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold" /> {feat}
                </li>
              ))}
            </ul>
            <Button asChild className="h-14 px-8 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded-lg uppercase tracking-widest text-xs font-bold sweep-hover">
              <Link href="/signature-vip">Créer mon séjour Signature</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Pourquoi SIYAJJ */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-serif text-center text-siyajj-ivory mb-16">Pourquoi choisir SIYAJJ ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySiyajj.map((why, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-siyajj-luxury-gold/20 text-center flex flex-col items-center">
                <Star className="w-8 h-8 text-siyajj-luxury-gold mb-4" />
                <h3 className="text-lg font-serif text-siyajj-champagne mb-2">{why.title}</h3>
                <p className="text-xs text-siyajj-ivory/70">{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Processus Clair */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-siyajj-ivory mb-4">Un processus clair et transparent</h2>
            <p className="text-siyajj-ivory/70 text-lg">Laissez-nous gérer la complexité, concentrez-vous sur l'essentiel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-3xl font-serif text-siyajj-luxury-gold/30 mt-1">{step.step}</div>
                <div>
                  <h3 className="text-xl font-serif text-siyajj-ivory mb-2">{step.title}</h3>
                  <p className="text-sm text-siyajj-ivory/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Hajj preview */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black relative overflow-hidden">
         <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block opacity-40">
           <MediaFrame slot="makkahImage" className="w-full h-full" />
           <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black to-transparent" />
         </div>
         <div className="container mx-auto px-4 md:px-8 relative z-10">
           <div className="max-w-2xl glass-card p-10 rounded-3xl border border-siyajj-luxury-gold/30 bg-black/60 backdrop-blur-xl">
             <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-3 font-bold">Le grand Pèlerinage</div>
             <h2 className="text-4xl font-serif text-siyajj-ivory mb-4">Hajj 2027</h2>
             <p className="text-siyajj-ivory/80 text-base mb-6 leading-relaxed">
               L'accomplissement d'une vie mérite la plus grande des sérénités. 
               Découvrez notre accompagnement dédié pour le Hajj, conçu avec rigueur et dévotion.
             </p>
             <div className="bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 rounded-lg p-4 mb-8 text-sm text-siyajj-champagne font-medium flex items-start gap-3">
               <span className="mt-0.5">⚠️</span> 
               Disponibilités strictement limitées selon les quotas officiels.
             </div>
             <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-emerald to-siyajj-teal text-siyajj-ivory uppercase tracking-widest text-xs font-bold border border-siyajj-luxury-gold/30">
               <Link href="/hajj">Préparer mon Hajj</Link>
             </Button>
           </div>
         </div>
      </section>

      {/* 13. Guides & Conseils */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif text-siyajj-ivory">Guides & Conseils</h2>
            <Button asChild variant="link" className="text-siyajj-luxury-gold hidden md:flex">
              <Link href="/guides">Tous les guides <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.slice(0, 3).map(guide => (
              <div key={guide.id} className="emerald-glass p-6 rounded-2xl hover:border-siyajj-luxury-gold/50 transition-colors">
                <span className="text-[10px] uppercase text-siyajj-champagne tracking-wider font-bold mb-3 block">{guide.category}</span>
                <h3 className="text-xl font-serif text-siyajj-ivory mb-3">{guide.title}</h3>
                <p className="text-sm text-siyajj-ivory/60 mb-6">{guide.excerpt}</p>
                <Link href="/guides" className="text-xs uppercase tracking-widest text-siyajj-ivory hover:text-siyajj-luxury-gold font-medium flex items-center gap-2">
                  Lire l'article <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Trust Center */}
      <section className="py-10 md:py-20 bg-siyajj-deep-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-serif text-siyajj-ivory mb-8">Votre confiance, notre engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-siyajj-luxury-gold/30 flex items-center justify-center text-siyajj-luxury-gold text-xl font-serif">OF</div>
              <div className="text-sm text-siyajj-ivory font-medium">Partenaire Omra Factory</div>
              <div className="text-xs text-siyajj-ivory/60">Garantie d'une exécution logistique infaillible sur place.</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-siyajj-luxury-gold/30 flex items-center justify-center text-siyajj-luxury-gold"><CheckCircle2 className="w-5 h-5"/></div>
              <div className="text-sm text-siyajj-ivory font-medium">Paiement Sécurisé</div>
              <div className="text-xs text-siyajj-ivory/60">Transactions protégées et paiements échelonnés possibles.</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-siyajj-luxury-gold/30 flex items-center justify-center text-siyajj-luxury-gold"><Phone className="w-5 h-5"/></div>
              <div className="text-sm text-siyajj-ivory font-medium">Support Constant</div>
              <div className="text-xs text-siyajj-ivory/60">Une équipe disponible avant, pendant et après votre voyage.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Video Experience */}
      <section className="py-16 md:py-32 bg-siyajj-black-ink relative overflow-hidden flex items-center justify-center text-center">
        <MediaFrame slot="atmosphere" className="absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-siyajj-deep-black/60" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-8">Découvrez l'expérience SIYAJJ</h2>
          <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogTrigger asChild>
              <button className="w-24 h-24 rounded-full bg-siyajj-luxury-gold text-siyajj-deep-black flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(200,154,70,0.4)] hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory p-8 text-center rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 text-siyajj-luxury-gold flex items-center justify-center mx-auto mb-6">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <h3 className="text-2xl font-serif mb-2 text-siyajj-ivory">Expérience SIYAJJ</h3>
              <p className="text-siyajj-ivory/70">Vidéo d'expérience SIYAJJ bientôt disponible.</p>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* 16. Testimonials */}
      <section className="py-12 md:py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-siyajj-ivory mb-4">Paroles de Pèlerins</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl relative">
                <div className="text-4xl text-siyajj-luxury-gold/20 font-serif absolute top-6 right-6">"</div>
                <div className="flex gap-1 mb-4 text-siyajj-luxury-gold">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-siyajj-ivory/80 text-sm leading-relaxed mb-6 font-light">"{t.text}"</p>
                <div>
                  <div className="font-serif text-siyajj-ivory text-lg">{t.name}</div>
                  <div className="text-xs text-siyajj-luxury-gold/80">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FAQ */}
      <section className="py-12 md:py-24 bg-siyajj-black-ink border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-4xl font-serif text-center text-siyajj-ivory mb-12">Questions Fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 6).map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-siyajj-luxury-gold/10">
                <AccordionTrigger className="text-left text-lg font-serif text-siyajj-ivory hover:text-siyajj-luxury-gold py-6 data-[state=open]:text-siyajj-champagne">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-siyajj-ivory/70 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 18. Final CTA */}
      <section className="py-16 md:py-32 bg-siyajj-deep-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,76,76,0.3),_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Votre voyage commence par une conversation.</h2>
          <p className="text-siyajj-ivory/70 text-lg mb-10">Nos conseillers sont à votre disposition pour construire l'Omra qui vous ressemble.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 rounded-lg uppercase tracking-widest text-xs font-bold sweep-hover">
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 rounded-lg uppercase tracking-widest text-xs font-bold sweep-hover">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                Parler à un conseiller WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
