import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Filter, Calendar, MapPin, Star, ArrowRight, Check, LayoutGrid, List, X } from "lucide-react";
import { offers } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OrnamentBadge, GoldDivider } from "@/components/ui/ornaments";

export default function NosOmras() {
  const [filterMonth, setFilterMonth] = useState<string>("all");
  const [filterDeparture, setFilterDeparture] = useState<string>("all");
  const [view, setView] = useState<"cards" | "list">("cards");

  const months = useMemo(() => Array.from(new Set(offers.map(o => o.month))), []);
  const departures = useMemo(() => Array.from(new Set(offers.map(o => o.departure))), []);

  const filteredOffers = useMemo(() => {
    return offers.filter(o => {
      const matchMonth = filterMonth === "all" || o.month === filterMonth;
      const matchDep = filterDeparture === "all" || o.departure === filterDeparture;
      return matchMonth && matchDep;
    });
  }, [filterMonth, filterDeparture]);

  const hasActiveFilters = filterMonth !== "all" || filterDeparture !== "all";

  return (
    <div className="w-full min-h-screen bg-siyajj-deep-black pb-32">

      {/* ── Page Hero ── */}
      <section className="pt-20 pb-16 relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 velvet-texture opacity-25 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(15,76,76,0.14),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(199,154,59,0.06),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <OrnamentBadge className="mb-7">Catalogue des départs</OrnamentBadge>
            <h1 className="display-lg text-siyajj-ivory mb-5 drop-shadow-md">Nos Omras & Départs</h1>
            <GoldDivider className="max-w-[200px] mb-6" />
            <p className="body-lg text-siyajj-ivory/62 max-w-xl">
              Explorez nos prochaines dates de départ. Des séjours conçus avec exigence, pour vous offrir sérénité et élévation spirituelle.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <section className="sticky top-[4.5rem] z-40 bg-siyajj-deep-black/92 backdrop-blur-xl border-b border-white/5 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        <div className="container mx-auto px-4 md:px-8">

          {/* Row 1: label + result count + view toggle + reset */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <Filter className="w-3.5 h-3.5 text-siyajj-luxury-gold shrink-0" strokeWidth={1.4} />
              <span className="label-premium text-siyajj-luxury-gold">Filtres</span>
              <span className="label-premium text-siyajj-ivory/35">
                — {filteredOffers.length} départ{filteredOffers.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <button
                  onClick={() => { setFilterMonth("all"); setFilterDeparture("all"); }}
                  className="flex items-center gap-1 label-premium text-siyajj-ivory/40 hover:text-siyajj-ivory transition-colors"
                >
                  <X className="w-2.5 h-2.5" strokeWidth={2} /> Réinitialiser
                </button>
              )}
              <div className="flex items-center rounded-lg border border-siyajj-luxury-gold/18 bg-black/50 p-0.5">
                <button
                  aria-label="Vue cartes"
                  onClick={() => setView("cards")}
                  className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${view === "cards" ? "bg-siyajj-luxury-gold text-siyajj-deep-black" : "text-siyajj-ivory/40 hover:text-siyajj-ivory"}`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
                <button
                  aria-label="Vue liste"
                  onClick={() => setView("list")}
                  className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${view === "list" ? "bg-siyajj-luxury-gold text-siyajj-deep-black" : "text-siyajj-ivory/40 hover:text-siyajj-ivory"}`}
                >
                  <List className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Month chips */}
          <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-1.5 mb-1.5">
            <button onClick={() => setFilterMonth("all")} className={`filter-chip ${filterMonth === "all" ? "filter-chip-active" : ""}`}>
              Tous les mois
            </button>
            {months.map(m => (
              <button key={m} onClick={() => setFilterMonth(m)} className={`filter-chip ${filterMonth === m ? "filter-chip-active" : ""}`}>
                {m}
              </button>
            ))}
          </div>

          {/* Row 3: Departure chips */}
          <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5">
            <button onClick={() => setFilterDeparture("all")} className={`filter-chip ${filterDeparture === "all" ? "filter-chip-active" : ""}`}>
              Toutes les villes
            </button>
            {departures.map(d => (
              <button key={d} onClick={() => setFilterDeparture(d)} className={`filter-chip ${filterDeparture === d ? "filter-chip-active" : ""}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offers Grid / List ── */}
      <section className="pt-14">
        <div className="container mx-auto px-4 md:px-8">
          {filteredOffers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24 glass-card rounded-3xl max-w-md mx-auto"
            >
              <div className="w-14 h-14 rounded-full border border-siyajj-luxury-gold/20 bg-siyajj-luxury-gold/5 flex items-center justify-center mx-auto mb-6">
                <Filter className="w-5 h-5 text-siyajj-luxury-gold/55" strokeWidth={1.4} />
              </div>
              <h3 className="card-title text-siyajj-ivory mb-3">Aucun départ ne correspond</h3>
              <p className="body-md text-siyajj-ivory/52 mb-8 max-w-xs mx-auto">Essayez de modifier vos filtres ou demandez une offre sur-mesure.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => { setFilterMonth("all"); setFilterDeparture("all"); }}
                  variant="outline"
                  className="border-siyajj-luxury-gold/28 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/8 label-premium"
                >
                  Réinitialiser
                </Button>
                <Button asChild className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne label-premium">
                  <Link href="/sur-mesure">Sur-mesure</Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className={view === "cards" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-5 max-w-4xl mx-auto"}>
              <AnimatePresence mode="popLayout">
                {filteredOffers.map((offer, idx) => (
                  <motion.div
                    key={offer.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className={`emerald-glass rounded-2xl overflow-hidden flex group transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_-8px_rgba(0,0,0,0.85)] hover:border-siyajj-luxury-gold/30 ${view === "list" ? "flex-col md:flex-row" : "flex-col"}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${view === "list" ? "w-full md:w-72 md:shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[200px]" : "w-full aspect-[4/3]"}`}>
                      <MediaFrame slot={offer.slot} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      {offer.tag && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-siyajj-antique-bronze to-siyajj-champagne text-siyajj-deep-black label-premium px-3 py-1.5 rounded-full shadow-[0_0_12px_rgba(200,154,70,0.35)]">
                          {offer.tag}
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-3 h-3 text-siyajj-luxury-gold shrink-0" strokeWidth={1.4} />
                          <span className="label-premium text-siyajj-ivory/72">{offer.month} · {offer.duration}</span>
                        </div>
                        <h3 className="card-title text-siyajj-ivory drop-shadow-md leading-tight">{offer.title}</h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="space-y-3 mb-5 flex-grow">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-3.5 h-3.5 text-siyajj-luxury-gold shrink-0 mt-0.5" strokeWidth={1.4} />
                          <div>
                            <div className="label-premium text-siyajj-luxury-gold/62 mb-0.5">Départ</div>
                            <div className="body-md text-siyajj-ivory font-medium text-sm">{offer.departure}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Star className="w-3.5 h-3.5 text-siyajj-luxury-gold shrink-0 mt-0.5" strokeWidth={1.4} />
                          <div>
                            <div className="label-premium text-siyajj-luxury-gold/62 mb-0.5">Hébergement</div>
                            <div className="body-md text-siyajj-ivory font-medium text-sm">{offer.hotelLevel}</div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/5 grid grid-cols-2 gap-y-1.5">
                          {[
                            { label: "Visa", active: offer.visa },
                            { label: "Vols", active: offer.flights },
                            { label: "Transferts", active: offer.transfers },
                            { label: "Guide", active: offer.guide },
                          ].map((inc, i) => (
                            <div key={i} className={`flex items-center gap-1.5 text-[11.5px] ${inc.active ? "text-siyajj-ivory/72" : "text-siyajj-ivory/22"}`}>
                              <Check className={`w-3 h-3 shrink-0 ${inc.active ? "text-siyajj-luxury-gold" : "opacity-0"}`} strokeWidth={2.2} />
                              {inc.label}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card footer */}
                      <div className="pt-4 border-t border-white/8 flex items-end justify-between mt-auto">
                        <div>
                          <div className="label-premium text-siyajj-ivory/38 mb-0.5">À partir de</div>
                          <div className="stat-number text-siyajj-champagne">{offer.priceFrom}</div>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="h-9 px-4 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 rounded-lg label-premium sweep-hover relative overflow-hidden shadow-[0_0_16px_rgba(200,154,70,0.18)]">
                              <span className="relative z-10 flex items-center gap-1.5">
                                Détails <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                              </span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/25 text-siyajj-ivory backdrop-blur-2xl max-w-lg p-0 overflow-hidden shadow-2xl">
                            <DialogTitle className="sr-only">Détails de {offer.title}</DialogTitle>
                            <DialogDescription className="sr-only">Détails complets de l'offre</DialogDescription>
                            <div className="h-44 relative w-full">
                              <MediaFrame slot={offer.slot} className="absolute inset-0 w-full h-full" />
                              <div className="absolute inset-0 bg-gradient-to-t from-siyajj-warm-black via-siyajj-warm-black/55 to-transparent" />
                              <div className="absolute bottom-4 left-6">
                                <h3 className="display-md text-siyajj-ivory mb-0.5">{offer.title}</h3>
                                <div className="stat-number text-siyajj-champagne">{offer.priceFrom}</div>
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="grid grid-cols-3 gap-4 mb-5">
                                <div>
                                  <div className="label-premium text-siyajj-luxury-gold mb-1">Période</div>
                                  <div className="text-sm text-siyajj-ivory">{offer.month}</div>
                                  <div className="text-xs text-siyajj-ivory/50">{offer.duration}</div>
                                </div>
                                <div>
                                  <div className="label-premium text-siyajj-luxury-gold mb-1">Départ</div>
                                  <div className="text-sm text-siyajj-ivory">{offer.departure}</div>
                                </div>
                                <div>
                                  <div className="label-premium text-siyajj-luxury-gold mb-1">Hôtel</div>
                                  <div className="text-sm text-siyajj-ivory">{offer.hotelLevel}</div>
                                </div>
                              </div>

                              <div className="bg-black/35 rounded-xl p-4 mb-5 border border-white/5">
                                <div className="label-premium text-siyajj-luxury-gold mb-3">Inclus dans l'offre</div>
                                <div className="grid grid-cols-2 gap-2.5">
                                  {[
                                    { label: "Visa Omra", active: offer.visa },
                                    { label: "Vols A/R", active: offer.flights },
                                    { label: "Transferts sur place", active: offer.transfers },
                                    { label: "Accompagnateur", active: offer.guide },
                                  ].map((inc, i) => (
                                    <div key={i} className={`flex items-center gap-2 text-sm ${inc.active ? "text-siyajj-ivory" : "text-siyajj-ivory/28"}`}>
                                      <Check className={`w-3.5 h-3.5 shrink-0 ${inc.active ? "text-siyajj-luxury-gold" : "opacity-0"}`} strokeWidth={2} />
                                      {inc.label}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Button asChild className="w-full h-12 bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black font-bold label-premium sweep-hover relative overflow-hidden">
                                <Link href={`/contact?subject=${offer.id}`}>
                                  <span className="relative z-10">Demander ce séjour</span>
                                </Link>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
