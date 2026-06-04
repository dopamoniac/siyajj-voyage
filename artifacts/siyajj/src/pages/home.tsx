import { useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, Star, CheckCircle2, MessageCircle, Phone, Plane, Ship, Landmark, Luggage, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import { OrnamentBadge, GoldDivider, SectionKicker } from "@/components/ui/ornaments";
import {
  HERO, CONTACT, collections, offers, formations, experience360, activities,
  vipFeatures, whySiyajj, processSteps, guides, faqs, testimonials
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
    { value: "+15 000", label: "Voyageurs accompagnés" },
    { value: "5", label: "Services de voyage" },
    { value: "4.9/5", label: "Avis vérifiés" },
    { value: "24/7", label: "Assistance" },
  ];

  const SERVICES = [
    { icon: Plane,    label: "Billets Avion",      desc: "Vols depuis la France vers toutes destinations", href: "/contact?service=billets-avion" },
    { icon: Ship,     label: "Billets Bateau",     desc: "Traversées et liaisons maritimes sur mesure",   href: "/contact?service=billets-bateau" },
    { icon: Landmark, label: "Omra & Hajj",        desc: "Pèlerinages premium accompagnés de A à Z",      href: "/nos-omras" },
    { icon: Luggage,  label: "Voyages Organisés",  desc: "Circuits guidés et packages clé en main",       href: "/contact?service=voyages-organises" },
    { icon: Compass,  label: "Séjours sur Mesure", desc: "Votre voyage unique, conçu pour vous",          href: "/sur-mesure" },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-siyajj-deep-black text-siyajj-ivory font-body">

      {/* ── 1. Hero ── */}
      <section className="relative flex flex-col overflow-hidden min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-8rem)]">
        <div className="absolute inset-0 z-0">
          <MediaFrame slot="heroPortal" priority className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/80 to-siyajj-deep-black/10 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-siyajj-deep-black/30 via-transparent to-siyajj-deep-black" />
          <div className="absolute inset-0 velvet-texture mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-1 flex-col justify-center py-6 lg:py-8">
          <div className="grid lg:grid-cols-[52%_48%] gap-8 items-center">
            <div className="max-w-2xl">

              <motion.div {...stagger(0.1)}>
                <OrnamentBadge className="mb-7">Agence Premium de Voyage</OrnamentBadge>
              </motion.div>

              <motion.h1 {...stagger(0.2)} className="display-xl mb-4 drop-shadow-lg">
                {HERO.title[0]}<br />
                {HERO.title[1]}<br />
                <span className="text-gold-gradient relative inline-block">
                  {HERO.title[2]}
                  <span className="absolute inset-0 bg-siyajj-luxury-gold/15 blur-3xl -z-10 rounded-full opacity-40" />
                </span>
              </motion.h1>

              <motion.p {...stagger(0.25)} className="tagline-script text-siyajj-luxury-gold/60 mb-6">
                — La Renaissance du Voyage —
              </motion.p>

              <motion.p {...stagger(0.3)} className="body-lg text-siyajj-ivory/78 mb-8 max-w-xl">
                {HERO.subtitle}
              </motion.p>

              <motion.div {...stagger(0.4)} className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })}
                  className="h-13 px-8 bg-gradient-to-r from-siyajj-emerald via-siyajj-teal to-siyajj-emerald border border-siyajj-luxury-gold/50 text-siyajj-ivory hover:brightness-110 rounded-lg uppercase tracking-[0.1em] text-[11px] font-bold sweep-hover relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {HERO.ctaPrimary}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
                  </span>
                </Button>
                <Button asChild variant="outline" className="h-13 px-8 glass-card border-siyajj-luxury-gold/35 text-siyajj-ivory hover:text-siyajj-luxury-gold hover:bg-white/5 rounded-lg uppercase tracking-[0.1em] text-[11px] font-medium sweep-hover relative overflow-hidden">
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2.5">
                      {HERO.ctaSecondary}
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="hidden lg:block" aria-hidden="true" />
          </div>

          {/* Trip builder */}
          <motion.div {...stagger(0.5)} id="trip-builder" className="mt-8 lg:mt-6 scroll-mt-[4.5rem] lg:scroll-mt-32">
            <div className="glass-card rounded-[26px] border border-siyajj-luxury-gold/25 shadow-2xl backdrop-blur-2xl bg-siyajj-warm-black/85 p-3 md:p-4 gold-glow">
              <div className="flex flex-col lg:flex-row items-stretch gap-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
                  {[
                    { key: "ville", label: "Ville de départ", value: ville, set: setVille, options: [["paris-cdg", "Paris CDG"], ["lyon", "Lyon"], ["marseille", "Marseille"], ["bruxelles", "Bruxelles"]] },
                    { key: "date", label: "Date souhaitée", value: date, set: setDate, options: [["nov-26", "Novembre 2026"], ["dec-26", "Décembre 2026"], ["ramadan-27", "Ramadan 2027"], ["sur-mesure", "Sur-mesure"]] },
                    { key: "voyageurs", label: "Voyageurs", value: voyageurs, set: setVoyageurs, options: [["1", "1 Voyageur"], ["2", "2 Voyageurs"], ["famille", "Famille"]] },
                    { key: "collection", label: "Collection", value: collection, set: setCollection, options: [["essentielle", "Essentielle"], ["confort", "Confort"], ["prestige", "Prestige"], ["signature", "Signature"], ["renaissance", "Renaissance"]] }
                  ].map(f => (
                    <div key={f.key} className="flex flex-col gap-1 p-2.5 rounded-xl bg-black/40 light:bg-siyajj-charcoal/60 border border-white/5 light:border-siyajj-luxury-gold/20">
                      <div className="label-premium text-siyajj-luxury-gold/80">{f.label}</div>
                      <Select value={f.value} onValueChange={f.set}>
                        <SelectTrigger className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory font-display text-base focus:ring-0 shadow-none">
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
                    <Button className="w-full lg:w-auto h-full min-h-[3.25rem] px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 rounded-xl uppercase tracking-[0.1em] text-[11px] font-bold sweep-hover relative overflow-hidden flex items-center justify-center gap-2">
                      <span className="relative z-10">Trouver mon voyage</span>
                      <ArrowRight className="w-4 h-4 relative z-10" strokeWidth={1.4} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory">
                    <DialogTitle className="sr-only">Votre projet SIYAJJ est prêt</DialogTitle>
                    <DialogDescription className="sr-only">Résumé de votre configuration de voyage et options pour procéder</DialogDescription>
                    <div className="p-4 text-center">
                      <h3 className="card-title text-siyajj-ivory mb-2">Votre projet SIYAJJ est prêt</h3>
                      <p className="body-md text-siyajj-ivory/65 mb-6">Un conseiller est disponible pour affiner les détails de votre voyage.</p>
                      <div className="bg-black/40 border border-siyajj-luxury-gold/20 rounded-xl p-4 mb-6 text-left glass-card grid grid-cols-2 gap-4">
                        <div><div className="label-premium text-siyajj-luxury-gold mb-1">Départ</div><div className="font-display text-sm">{selectedVilleLabel}</div></div>
                        <div><div className="label-premium text-siyajj-luxury-gold mb-1">Date</div><div className="font-display text-sm">{selectedDateLabel}</div></div>
                        <div><div className="label-premium text-siyajj-luxury-gold mb-1">Voyageurs</div><div className="font-display text-sm">{selectedVoyageursLabel}</div></div>
                        <div><div className="label-premium text-siyajj-luxury-gold mb-1">Collection</div><div className="font-display text-sm text-siyajj-champagne">{selectedCollectionLabel}</div></div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button asChild className="w-full h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-[0.1em] font-bold text-[11px]">
                          <Link href="/contact">Demander un devis</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full h-12 border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-[0.1em] text-[11px]">
                          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">Continuer sur WhatsApp</a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div {...stagger(0.6)} className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-3">
            {heroStats.map((s, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                <span className="stat-number text-siyajj-champagne">{s.value}</span>
                <span className="label-premium text-siyajj-ivory/55">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Nos Services ── */}
      <section id="services" className="py-20 bg-siyajj-black-ink relative border-b border-siyajj-luxury-gold/10 scroll-mt-[4.5rem] lg:scroll-mt-32">
        <div className="absolute inset-0 velvet-texture opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...stagger(0)} className="text-center max-w-3xl mx-auto mb-14">
            <SectionKicker>Nos services</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">Une agence, toutes vos destinations</h2>
            <GoldDivider className="max-w-xs mx-auto mb-5" />
            <p className="body-lg text-siyajj-ivory/65">Billets, pèlerinages, voyages organisés ou séjours sur mesure — SIYAJJ VOYAGES vous accompagne.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map((svc, i) => (
              <motion.div key={svc.label} {...stagger(i * 0.07)}>
                <Link href={svc.href} className="glass-card card-lift rounded-2xl p-6 flex flex-col items-center text-center gap-4 group block">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-siyajj-emerald/30 to-siyajj-mosque-green/25 border border-siyajj-luxury-gold/25 group-hover:border-siyajj-luxury-gold/55 transition-all duration-300 shadow-[0_0_18px_rgba(11,90,73,0.2)]">
                    <svc.icon className="w-6 h-6 text-siyajj-luxury-gold" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="card-title text-siyajj-ivory mb-1.5 group-hover:text-siyajj-luxury-gold transition-colors">{svc.label}</h3>
                    <p className="body-md text-siyajj-ivory/52 text-sm leading-snug">{svc.desc}</p>
                  </div>
                  <div className="label-premium text-siyajj-luxury-gold/50 group-hover:text-siyajj-luxury-gold/85 transition-colors flex items-center gap-1 mt-auto">
                    En savoir plus <ArrowRight className="w-3 h-3" strokeWidth={1.4} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Les Collections ── */}
      <section className="py-24 bg-siyajj-deep-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...stagger(0)} className="text-center max-w-3xl mx-auto mb-16">
            <SectionKicker>Notre gamme Omra & Hajj</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">Les Collections SIYAJJ</h2>
            <GoldDivider className="max-w-xs mx-auto mb-5" />
            <p className="body-lg text-siyajj-ivory/65">Des expériences Omra & Hajj pensées pour chaque profil de pèlerin.</p>
          </motion.div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((col, i) => (
              <motion.div key={col.id} {...stagger(i * 0.08)} className="emerald-glass card-lift rounded-2xl p-6 flex flex-col group">
                <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                  <MediaFrame slot={col.slot} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <h3 className="card-title text-siyajj-champagne mb-2">{col.name}</h3>
                <p className="body-md text-siyajj-ivory/75 mb-4 flex-grow">{col.tagline}</p>
                <div className="space-y-2 mb-6">
                  {col.services.slice(0, 3).map((srv, j) => (
                    <div key={j} className="flex items-center gap-2 body-md text-siyajj-ivory/60 text-sm">
                      <CheckCircle2 className="w-3 h-3 text-siyajj-luxury-gold shrink-0" strokeWidth={1.4} /> {srv}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-auto border-siyajj-luxury-gold/25 text-siyajj-ivory hover:text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/8">
                  <Link href="/collections">Découvrir {col.name}</Link>
                </Button>
              </motion.div>
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
                      <h3 className="card-title text-siyajj-champagne mb-2">{col.name}</h3>
                      <p className="body-md text-siyajj-ivory/75 mb-4">{col.tagline}</p>
                      <Button asChild variant="outline" className="w-full mt-auto border-siyajj-luxury-gold/25 text-siyajj-luxury-gold text-xs">
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

      {/* ── 3. Nos départs à venir ── */}
      <section className="py-24 bg-siyajj-black-ink relative velvet-texture border-y border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <SectionKicker className="justify-start">Agenda</SectionKicker>
              <h2 className="section-title text-siyajj-ivory mb-3">Nos départs à venir</h2>
              <p className="body-lg text-siyajj-ivory/65">Trouvez le séjour qui correspond à vos dates.</p>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-siyajj-luxury-gold/25 text-siyajj-ivory hover:text-siyajj-luxury-gold text-xs uppercase tracking-[0.1em]">
              <Link href="/nos-omras">Voir toutes les Omras</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.slice(0, 6).map(offer => (
              <div key={offer.id} className="glass-card card-lift p-5 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {offer.tag && <span className="inline-block px-2.5 py-1 rounded-md bg-siyajj-luxury-gold/15 text-siyajj-luxury-gold label-premium mb-2">{offer.tag}</span>}
                    <h3 className="card-title text-siyajj-ivory">{offer.title}</h3>
                    <div className="body-md text-siyajj-ivory/55 text-sm mt-1">{offer.month} · {offer.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="label-premium text-siyajj-luxury-gold/75 mb-1">À partir de</div>
                    <div className="stat-number text-siyajj-champagne text-lg">{offer.priceFrom}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-y-2 mb-6">
                  <div className="body-md text-siyajj-ivory/65 text-sm"><span className="text-siyajj-luxury-gold mr-1.5">◆</span>{offer.departure}</div>
                  <div className="body-md text-siyajj-ivory/65 text-sm"><span className="text-siyajj-luxury-gold mr-1.5">◆</span>{offer.hotelLevel}</div>
                </div>
                <Button asChild className="w-full bg-siyajj-emerald/8 hover:bg-siyajj-emerald/14 light:bg-siyajj-emerald/0 light:border-siyajj-emerald light:text-siyajj-emerald light:hover:bg-siyajj-emerald light:hover:text-[#F7F1E8] text-siyajj-ivory border border-siyajj-emerald/25 text-xs uppercase tracking-[0.08em] transition-all">
                  <Link href={`/contact?subject=Devis ${offer.title}`}>Demander ce séjour</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Formations & Préparation Spirituelle ── */}
      <section className="py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionKicker>Préparation</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">Préparation Spirituelle</h2>
            <GoldDivider className="max-w-xs mx-auto mb-5" />
            <p className="body-lg text-siyajj-ivory/65">Une Omra accomplie avec science et sérénité grâce à nos formations incluses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formations.slice(0, 4).map(f => (
              <div key={f.id} className="emerald-glass p-6 rounded-2xl flex flex-col justify-between items-start gap-4">
                <div>
                  <div className="label-premium text-siyajj-ivory/80 px-2.5 py-1.5 rounded-md bg-siyajj-teal/25 border border-siyajj-teal/40 inline-block mb-4">
                    {f.format}
                  </div>
                  <h3 className="card-title text-siyajj-champagne mb-2">{f.title}</h3>
                  <p className="body-md text-siyajj-ivory/65 leading-relaxed">{f.purpose}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-siyajj-luxury-gold/25 text-siyajj-luxury-gold text-xs uppercase tracking-[0.1em]">
              <Link href="/formations">Voir le programme de formation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. L'Expérience 360° ── */}
      <section className="py-24 bg-siyajj-black-ink relative border-y border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionKicker>Accompagnement</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">L'Expérience 360°</h2>
            <GoldDivider className="max-w-xs mx-auto mb-5" />
            <p className="body-lg text-siyajj-ivory/65">Chaque étape de votre voyage est encadrée par notre équipe.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-siyajj-luxury-gold/18 -translate-y-1/2 z-0" />
            <Carousel opts={{ align: "start" }} className="w-full z-10">
              <CarouselContent>
                {experience360.map((step) => (
                  <CarouselItem key={step.step} className="md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="glass-card p-6 rounded-2xl h-full relative text-center flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-siyajj-deep-black light:bg-siyajj-emerald light:text-[#F7F1E8] border border-siyajj-luxury-gold text-siyajj-champagne flex items-center justify-center font-display text-xl mb-4 relative z-10 shadow-[0_0_15px_rgba(200,154,70,0.25)]">
                        {step.step}
                      </div>
                      <h3 className="card-title text-siyajj-ivory mb-2">{step.title}</h3>
                      <p className="body-md text-siyajj-ivory/60 text-xs">{step.support}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* ── 6. Activités & Expériences ── */}
      <section className="py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <SectionKicker className="justify-start">Sur place</SectionKicker>
              <h2 className="section-title text-siyajj-ivory mb-3">Activités & Expériences</h2>
              <p className="body-lg text-siyajj-ivory/65">Des moments forts pour vivre l'Histoire sacrée.</p>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-siyajj-luxury-gold/25 text-siyajj-ivory text-xs uppercase tracking-[0.1em]">
              <Link href="/activites">Découvrir toutes les activités</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.slice(0, 3).map(act => (
              <div key={act.id} className="emerald-glass card-lift rounded-2xl overflow-hidden group">
                <div className="h-56 relative">
                  <MediaFrame slot={act.slot} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="card-title text-siyajj-champagne drop-shadow-md">{act.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="body-md text-siyajj-ivory/75 mb-3">{act.what}</p>
                  <p className="label-premium text-siyajj-luxury-gold/85 mb-6">Objectif : {act.spiritualValue}</p>
                  <Button asChild variant="link" className="text-siyajj-ivory p-0 h-auto font-medium hover:text-siyajj-luxury-gold text-sm">
                    <Link href={`/activites#${act.id}`}>
                      En savoir plus
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" strokeWidth={1.4} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Signature VIP ── */}
      <section className="relative py-32 bg-black overflow-hidden always-dark">
        <MediaFrame slot="signatureVip" className="absolute inset-0 opacity-35 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/92 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="label-premium text-siyajj-luxury-gold mb-5">Service Conciergerie</div>
            <h2 className="display-lg text-siyajj-ivory mb-6">
              SIYAJJ Signature,<br />l'Omra privée pensée dans chaque détail.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {vipFeatures.slice(0, 6).map((feat, i) => (
                <li key={i} className="flex items-center gap-3 body-md text-siyajj-ivory/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            <Button asChild className="h-13 px-8 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded-lg uppercase tracking-[0.1em] text-[11px] font-bold sweep-hover">
              <Link href="/signature-vip">Créer mon séjour Signature</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 8. Pourquoi SIYAJJ ── */}
      <section className="py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <SectionKicker>Nos engagements</SectionKicker>
            <h2 className="section-title text-center text-siyajj-ivory">Pourquoi choisir SIYAJJ ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySiyajj.map((why, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-siyajj-luxury-gold/18 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-siyajj-luxury-gold/8 border border-siyajj-luxury-gold/20 mb-5">
                  <Star className="w-5 h-5 text-siyajj-luxury-gold" strokeWidth={1.4} />
                </div>
                <h3 className="card-title text-siyajj-champagne mb-2">{why.title}</h3>
                <p className="body-md text-siyajj-ivory/60 text-sm">{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Processus ── */}
      <section className="py-24 bg-siyajj-black-ink border-t border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionKicker>Comment ça marche</SectionKicker>
            <h2 className="section-title text-siyajj-ivory mb-4">Un processus clair et transparent</h2>
            <GoldDivider className="max-w-xs mx-auto mb-5" />
            <p className="body-lg text-siyajj-ivory/65">Laissez-nous gérer la complexité, concentrez-vous sur l'essentiel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="font-display text-4xl text-siyajj-luxury-gold/25 leading-none mt-1 w-10 shrink-0">{step.step}</div>
                <div>
                  <h3 className="card-title text-siyajj-ivory mb-2">{step.title}</h3>
                  <p className="body-md text-siyajj-ivory/55 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Hajj preview ── */}
      <section className="py-24 bg-siyajj-deep-black relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block opacity-35">
          <MediaFrame slot="makkahImage" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl glass-card p-10 rounded-3xl border border-siyajj-luxury-gold/25 bg-black/60 backdrop-blur-xl always-dark">
            <div className="label-premium text-siyajj-luxury-gold mb-4">Le grand Pèlerinage</div>
            <h2 className="display-md text-siyajj-ivory mb-4">Hajj 2027</h2>
            <p className="body-lg text-siyajj-ivory/75 mb-6">
              L'accomplissement d'une vie mérite la plus grande des sérénités.
              Découvrez notre accompagnement dédié pour le Hajj, conçu avec rigueur et dévotion.
            </p>
            <div className="bg-siyajj-luxury-gold/8 border border-siyajj-luxury-gold/25 rounded-xl p-4 mb-8 body-md text-siyajj-champagne flex items-start gap-3">
              <span className="shrink-0 text-siyajj-luxury-gold text-base leading-none">◆</span>
              Disponibilités strictement limitées selon les quotas officiels.
            </div>
            <Button asChild className="h-13 px-8 bg-gradient-to-r from-siyajj-emerald to-siyajj-teal text-siyajj-ivory uppercase tracking-[0.1em] text-[11px] font-bold border border-siyajj-luxury-gold/25">
              <Link href="/hajj">Préparer mon Hajj</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 11. Guides & Conseils ── */}
      <section className="py-24 bg-siyajj-black-ink">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionKicker className="justify-start">Ressources</SectionKicker>
              <h2 className="section-title text-siyajj-ivory">Guides & Conseils</h2>
            </div>
            <Button asChild variant="link" className="text-siyajj-luxury-gold hidden md:flex items-center gap-1.5 text-sm">
              <Link href="/guides">
                Tous les guides
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.slice(0, 3).map(guide => (
              <div key={guide.id} className="emerald-glass card-lift p-6 rounded-2xl group">
                <span className="label-premium text-siyajj-champagne mb-4 block">{guide.category}</span>
                <h3 className="card-title text-siyajj-ivory mb-3">{guide.title}</h3>
                <p className="body-md text-siyajj-ivory/55 mb-6">{guide.excerpt}</p>
                <Link href="/guides" className="label-premium text-siyajj-ivory hover:text-siyajj-luxury-gold flex items-center gap-2 transition-colors">
                  Lire l'article <ArrowRight className="w-3 h-3" strokeWidth={1.4} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Trust Center ── */}
      <section className="py-20 bg-siyajj-deep-black border-y border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <SectionKicker>Garanties</SectionKicker>
          <h2 className="section-title text-siyajj-ivory mb-10">Votre confiance, notre engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Partenaire Omra Factory",
                desc: "Garantie d'une exécution logistique infaillible sur place.",
                icon: <span className="font-display text-xl text-siyajj-luxury-gold">OF</span>
              },
              {
                label: "Paiement Sécurisé",
                desc: "Transactions protégées et paiements échelonnés possibles.",
                icon: <CheckCircle2 className="w-5 h-5 text-siyajj-luxury-gold" strokeWidth={1.4} />
              },
              {
                label: "Support Constant",
                desc: "Une équipe disponible avant, pendant et après votre voyage.",
                icon: <Phone className="w-5 h-5 text-siyajj-luxury-gold" strokeWidth={1.4} />
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-siyajj-luxury-gold/28 bg-siyajj-luxury-gold/6 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="body-md text-siyajj-ivory font-semibold">{item.label}</div>
                <div className="body-md text-siyajj-ivory/55 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. Video Experience ── */}
      <section className="py-32 bg-siyajj-black-ink relative overflow-hidden flex items-center justify-center text-center always-dark">
        <MediaFrame slot="atmosphere" className="absolute inset-0 opacity-18" />
        <div className="absolute inset-0 bg-siyajj-deep-black/65" />
        <div className="relative z-10">
          <SectionKicker className="mb-6">Immersion</SectionKicker>
          <h2 className="section-title text-siyajj-ivory mb-10">Découvrez l'expérience SIYAJJ</h2>
          <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogTrigger asChild>
              <button className="w-20 h-20 rounded-full bg-siyajj-luxury-gold text-siyajj-deep-black flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(200,154,70,0.35)] hover:scale-105 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/25 text-siyajj-ivory p-8 text-center rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/25 text-siyajj-luxury-gold flex items-center justify-center mx-auto mb-5">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <h3 className="card-title mb-2 text-siyajj-ivory">Expérience SIYAJJ</h3>
              <p className="body-md text-siyajj-ivory/65">Vidéo d'expérience SIYAJJ bientôt disponible.</p>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ── 14. Témoignages ── */}
      <section className="py-24 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <SectionKicker>Témoignages</SectionKicker>
            <h2 className="section-title text-siyajj-ivory">Paroles de Pèlerins</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="glass-card card-lift p-8 rounded-2xl relative">
                <div className="text-5xl text-siyajj-luxury-gold/15 font-display absolute top-5 right-6 leading-none">"</div>
                <div className="flex gap-0.5 mb-4 text-siyajj-luxury-gold">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="body-md text-siyajj-ivory/75 leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-display text-siyajj-ivory text-lg leading-tight">{t.name}</div>
                  <div className="label-premium text-siyajj-luxury-gold/75 mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. FAQ ── */}
      <section className="py-24 bg-siyajj-black-ink border-t border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <SectionKicker>Support</SectionKicker>
            <h2 className="section-title text-center text-siyajj-ivory">Questions Fréquentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 6).map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-siyajj-luxury-gold/10">
                <AccordionTrigger className="text-left font-display text-xl text-siyajj-ivory hover:text-siyajj-luxury-gold py-6 data-[state=open]:text-siyajj-champagne">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="body-md text-siyajj-ivory/65 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── 16. Final CTA ── */}
      <section className="py-32 bg-siyajj-deep-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,76,42,0.22),_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <SectionKicker>Commençons</SectionKicker>
          <h2 className="section-title text-siyajj-ivory mb-6">Votre voyage commence par une conversation.</h2>
          <GoldDivider className="max-w-xs mx-auto mb-7" />
          <p className="body-lg text-siyajj-ivory/65 mb-10">Nos conseillers sont à votre disposition pour construire l'Omra qui vous ressemble.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-13 px-8 bg-gradient-to-r from-siyajj-champagne to-siyajj-luxury-gold text-siyajj-deep-black hover:brightness-110 rounded-lg uppercase tracking-[0.1em] text-[11px] font-bold sweep-hover">
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" className="h-13 px-8 border-siyajj-luxury-gold/35 text-siyajj-luxury-gold hover:bg-white/5 rounded-lg uppercase tracking-[0.1em] text-[11px] font-bold sweep-hover">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" strokeWidth={1.4} />
                Parler à un conseiller WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
