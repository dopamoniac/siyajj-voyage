import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Filter, Calendar, MapPin, Star, ArrowRight, Check } from "lucide-react";
import { offers, CONTACT, collections } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function NosOmras() {
  const [filterMonth, setFilterMonth] = useState<string>("all");
  const [filterDeparture, setFilterDeparture] = useState<string>("all");
  
  const months = useMemo(() => Array.from(new Set(offers.map(o => o.month))), []);
  const departures = useMemo(() => Array.from(new Set(offers.map(o => o.departure))), []);

  const filteredOffers = useMemo(() => {
    return offers.filter(o => {
      const matchMonth = filterMonth === "all" || o.month === filterMonth;
      const matchDep = filterDeparture === "all" || o.departure === filterDeparture;
      return matchMonth && matchDep;
    });
  }, [filterMonth, filterDeparture]);

  return (
    <div className="w-full min-h-screen bg-siyajj-deep-black pb-32">
      {/* Header Section */}
      <section className="pt-24 pb-16 relative border-b border-white/5 bg-siyajj-warm-black overflow-hidden">
        <div className="absolute inset-0 velvet-texture opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(15,76,76,0.15),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-[10px] tracking-[0.2em] uppercase mb-6">
              <span className="text-[10px]">✦</span> Catalogue des départs
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Nos Omras & Départs</h1>
            <p className="text-lg text-siyajj-ivory/70 font-light leading-relaxed">
              Explorez nos prochaines dates de départ. Des séjours conçus avec exigence, pour vous offrir sérénité et élévation spirituelle aux côtés de l'équipe SIYAJJ.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-28 z-40 bg-siyajj-deep-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-siyajj-luxury-gold text-sm font-medium tracking-wider uppercase">
              <Filter className="w-4 h-4" /> Filtres
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={filterMonth}
                onChange={(e) => setFilterMonth(e.target.value)}
                className="bg-black/50 border border-siyajj-luxury-gold/20 text-siyajj-ivory text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-siyajj-luxury-gold/50 appearance-none min-w-[160px] font-sans"
              >
                <option value="all">Tous les mois</option>
                {months.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              
              <select
                value={filterDeparture}
                onChange={(e) => setFilterDeparture(e.target.value)}
                className="bg-black/50 border border-siyajj-luxury-gold/20 text-siyajj-ivory text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-siyajj-luxury-gold/50 appearance-none min-w-[160px] font-sans"
              >
                <option value="all">Toutes les villes</option>
                {departures.map(d => <option key={d} value={d}>{d}</option>)}
              </select>

              {(filterMonth !== "all" || filterDeparture !== "all") && (
                <button
                  onClick={() => { setFilterMonth("all"); setFilterDeparture("all"); }}
                  className="text-xs text-siyajj-ivory/50 hover:text-siyajj-ivory transition-colors underline underline-offset-4 ml-2"
                >
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="pt-16">
        <div className="container mx-auto px-4 md:px-8">
          {filteredOffers.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-2xl max-w-2xl mx-auto border-siyajj-luxury-gold/20">
              <div className="w-16 h-16 rounded-full border border-siyajj-luxury-gold/20 flex items-center justify-center mx-auto mb-4 text-siyajj-luxury-gold">
                <Filter className="w-6 h-6 opacity-50" />
              </div>
              <h3 className="text-xl font-serif text-siyajj-ivory mb-2">Aucun départ ne correspond</h3>
              <p className="text-siyajj-ivory/60">Essayez de modifier vos filtres ou demandez une offre sur-mesure.</p>
              <Button asChild variant="outline" className="mt-6 border-siyajj-luxury-gold/30 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10">
                <Link href="/sur-mesure">Demander un sur-mesure</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredOffers.map((offer, idx) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="emerald-glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <MediaFrame slot={offer.slot} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      {offer.tag && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-siyajj-antique-bronze to-siyajj-champagne text-siyajj-deep-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-[0_0_10px_rgba(200,154,70,0.4)]">
                          {offer.tag}
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-siyajj-ivory/80 text-xs mb-2">
                          <Calendar className="w-3.5 h-3.5 text-siyajj-luxury-gold" />
                          <span className="font-medium tracking-wide uppercase">{offer.month}</span>
                          <span className="opacity-50">•</span>
                          <span>{offer.duration}</span>
                        </div>
                        <h3 className="text-2xl font-serif text-siyajj-ivory leading-tight drop-shadow-md">{offer.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-siyajj-deep-black to-siyajj-black-ink">
                      <div className="space-y-4 mb-8 flex-grow">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] text-siyajj-luxury-gold/70 uppercase tracking-widest">Départ</div>
                            <div className="text-sm text-siyajj-ivory font-medium">{offer.departure}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-siyajj-luxury-gold shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] text-siyajj-luxury-gold/70 uppercase tracking-widest">Hébergement</div>
                            <div className="text-sm text-siyajj-ivory font-medium">{offer.hotelLevel}</div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-y-2">
                          {[
                            { label: "Visa", active: offer.visa },
                            { label: "Vols", active: offer.flights },
                            { label: "Transferts", active: offer.transfers },
                            { label: "Guide", active: offer.guide },
                          ].map((inc, i) => (
                            <div key={i} className={`flex items-center gap-2 text-xs ${inc.active ? 'text-siyajj-ivory/80' : 'text-siyajj-ivory/30'}`}>
                              <Check className={`w-3.5 h-3.5 ${inc.active ? 'text-siyajj-luxury-gold' : 'opacity-0'}`} />
                              {inc.label}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex items-end justify-between mt-auto">
                        <div>
                          <div className="text-[10px] text-siyajj-ivory/50 uppercase tracking-widest mb-1">À partir de</div>
                          <div className="text-xl font-serif text-siyajj-champagne">{offer.priceFrom}</div>
                        </div>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="h-10 px-5 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 rounded-lg text-[11px] font-bold uppercase tracking-wider sweep-hover relative overflow-hidden shadow-[0_0_15px_rgba(200,154,70,0.2)]">
                              <span className="relative z-10 flex items-center gap-2">
                                Détails <ArrowRight className="w-3 h-3" />
                              </span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-2xl max-w-lg p-0 overflow-hidden shadow-2xl">
                            <DialogTitle className="sr-only">Détails de {offer.title}</DialogTitle>
                            <DialogDescription className="sr-only">Détails complets de l'offre y compris la période, le prix et les services inclus</DialogDescription>
                            <div className="h-48 relative w-full">
                               <MediaFrame slot={offer.slot} className="absolute inset-0 w-full h-full" />
                               <div className="absolute inset-0 bg-gradient-to-t from-siyajj-warm-black via-siyajj-warm-black/50 to-transparent" />
                               <div className="absolute bottom-4 left-6">
                                  <h3 className="text-3xl font-serif text-siyajj-ivory mb-1">{offer.title}</h3>
                                  <div className="text-siyajj-champagne font-serif text-xl">{offer.priceFrom}</div>
                               </div>
                            </div>
                            <div className="p-6">
                               <div className="grid grid-cols-2 gap-6 mb-8">
                                  <div>
                                    <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Période</div>
                                    <div className="text-sm font-medium">{offer.month} ({offer.duration})</div>
                                  </div>
                                  <div>
                                    <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Départ</div>
                                    <div className="text-sm font-medium">{offer.departure}</div>
                                  </div>
                                  <div className="col-span-2">
                                    <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Hébergement</div>
                                    <div className="text-sm font-medium">{offer.hotelLevel}</div>
                                  </div>
                               </div>
                               
                               <div className="bg-black/40 rounded-xl p-4 mb-8 border border-white/5">
                                 <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-3">Inclus dans l'offre</div>
                                 <div className="grid grid-cols-2 gap-3">
                                  {[
                                    { label: "Visa Omra", active: offer.visa },
                                    { label: "Vols A/R", active: offer.flights },
                                    { label: "Transferts sur place", active: offer.transfers },
                                    { label: "Accompagnateur", active: offer.guide },
                                  ].map((inc, i) => (
                                    <div key={i} className={`flex items-center gap-2 text-sm ${inc.active ? 'text-siyajj-ivory' : 'text-siyajj-ivory/30'}`}>
                                      <Check className={`w-4 h-4 ${inc.active ? 'text-siyajj-luxury-gold' : 'opacity-0'}`} />
                                      {inc.label}
                                    </div>
                                  ))}
                                 </div>
                               </div>

                               <div className="flex flex-col gap-3">
                                 <Button asChild className="w-full h-12 bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black font-bold uppercase tracking-widest text-xs sweep-hover relative overflow-hidden">
                                   <Link href={`/contact?subject=${offer.id}`}><span className="relative z-10">Demander ce séjour</span></Link>
                                 </Button>
                               </div>
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