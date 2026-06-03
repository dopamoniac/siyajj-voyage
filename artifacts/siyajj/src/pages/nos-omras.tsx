import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Calendar, MapPin, Hotel } from "lucide-react";
import { MediaFrame } from "@/components/ui/media-frame";
import { motion, AnimatePresence } from "framer-motion";

export default function NosOmras() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [ville, setVille] = useState<string>("all");
  const [mois, setMois] = useState<string>("all");
  const [collection, setCollection] = useState<string>("all");
  const [budget, setBudget] = useState<string>("all");

  const offers = [
    {
      id: 1,
      title: "Omra Novembre depuis Paris",
      image: "offerNovembre",
      duration: "12 Jours",
      city: "Paris CDG",
      cityValue: "paris",
      monthValue: "nov",
      month: "Novembre 2026",
      hotel: "5 Étoiles Premium",
      included: ["Visa", "Vols", "Transferts VIP", "Guide", "Hôtels face au Haram"],
      priceNum: 2490,
      price: "2 490€",
      collectionValue: "signature",
      collection: "Signature Privée"
    },
    {
      id: 2,
      title: "Omra Ramadan Fin de Mois",
      image: "offerRamadan",
      duration: "15 Jours",
      city: "Lyon / Paris",
      cityValue: "lyon",
      monthValue: "ramadan",
      month: "Ramadan 2026",
      hotel: "5 Étoiles",
      included: ["Visa", "Vols directs", "Transferts", "Guide", "Accompagnateur"],
      priceNum: 3890,
      price: "3 890€",
      collectionValue: "prestige",
      collection: "Prestige"
    },
    {
      id: 3,
      title: "Omra Famille",
      image: "offerFamille",
      duration: "10 Jours",
      city: "Paris CDG",
      cityValue: "paris",
      monthValue: "vacances",
      month: "Vacances Scolaires",
      hotel: "4 Étoiles Supérieur",
      included: ["Visa", "Vols", "Transferts", "Guide", "Activité Enfants"],
      priceNum: 1890,
      price: "1 890€",
      collectionValue: "confort",
      collection: "Confort"
    },
    {
      id: 4,
      title: "Omra Seniors Sérénité",
      image: "offerSeniors",
      duration: "14 Jours",
      city: "Paris CDG",
      cityValue: "paris",
      monthValue: "fev",
      month: "Février 2026",
      hotel: "5 Étoiles (Accès PMR)",
      included: ["Visa", "Vols", "Transferts Médicalisés", "Guide dédié", "Fauteuil"],
      priceNum: 2790,
      price: "2 790€",
      collectionValue: "prestige",
      collection: "Prestige"
    },
    {
      id: 5,
      title: "Omra Prestige Hiver",
      image: "offerPrestige",
      duration: "12 Jours",
      city: "Genève",
      cityValue: "geneve",
      monthValue: "dec",
      month: "Décembre 2026",
      hotel: "5 Étoiles Luxe",
      included: ["Visa", "Vols", "Transferts VIP", "Guide", "Palaces"],
      priceNum: 3290,
      price: "3 290€",
      collectionValue: "prestige",
      collection: "Prestige"
    },
    {
      id: 6,
      title: "Omra Départ Marseille",
      image: "makkahImage",
      duration: "10 Jours",
      city: "Marseille",
      cityValue: "marseille",
      monthValue: "nov",
      month: "Novembre 2026",
      hotel: "4 Étoiles",
      included: ["Visa", "Vols", "Transferts", "Guide"],
      priceNum: 1790,
      price: "1 790€",
      collectionValue: "essentielle",
      collection: "Essentielle"
    }
  ];

  const filteredOffers = offers.filter(offer => {
    if (ville !== "all" && offer.cityValue !== ville) return false;
    if (mois !== "all" && offer.monthValue !== mois) return false;
    if (collection !== "all" && offer.collectionValue !== collection) return false;
    if (budget === "low" && offer.priceNum >= 2000) return false;
    if (budget === "mid" && (offer.priceNum < 2000 || offer.priceNum > 3000)) return false;
    if (budget === "high" && offer.priceNum <= 3000) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-24 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Le Catalogue
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Nos Omras</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light">
          Découvrez nos départs organisés, pensés pour vous offrir une expérience spirituelle profonde dans un cadre serein et structuré.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 rounded-2xl border-siyajj-luxury-gold/30 mb-12 relative z-20 shadow-2xl bg-black/60 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest ml-1">Ville de départ</label>
            <Select value={ville} onValueChange={setVille}>
              <SelectTrigger className="bg-siyajj-charcoal border-white/10 text-siyajj-ivory h-12 rounded-lg font-serif text-base hover:border-siyajj-luxury-gold/50 transition-colors">
                <SelectValue placeholder="Ville de départ" />
              </SelectTrigger>
              <SelectContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                <SelectItem value="all">Toutes les villes</SelectItem>
                <SelectItem value="paris">Paris CDG</SelectItem>
                <SelectItem value="lyon">Lyon</SelectItem>
                <SelectItem value="marseille">Marseille</SelectItem>
                <SelectItem value="geneve">Genève</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest ml-1">Période</label>
            <Select value={mois} onValueChange={setMois}>
              <SelectTrigger className="bg-siyajj-charcoal border-white/10 text-siyajj-ivory h-12 rounded-lg font-serif text-base hover:border-siyajj-luxury-gold/50 transition-colors">
                <SelectValue placeholder="Mois" />
              </SelectTrigger>
              <SelectContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                <SelectItem value="all">Tous les mois</SelectItem>
                <SelectItem value="nov">Novembre</SelectItem>
                <SelectItem value="dec">Décembre</SelectItem>
                <SelectItem value="fev">Février</SelectItem>
                <SelectItem value="ramadan">Ramadan</SelectItem>
                <SelectItem value="vacances">Vacances Scolaires</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest ml-1">Collection</label>
            <Select value={collection} onValueChange={setCollection}>
              <SelectTrigger className="bg-siyajj-charcoal border-white/10 text-siyajj-ivory h-12 rounded-lg font-serif text-base hover:border-siyajj-luxury-gold/50 transition-colors">
                <SelectValue placeholder="Collection" />
              </SelectTrigger>
              <SelectContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                <SelectItem value="all">Toutes les collections</SelectItem>
                <SelectItem value="essentielle">Essentielle</SelectItem>
                <SelectItem value="confort">Confort</SelectItem>
                <SelectItem value="prestige">Prestige</SelectItem>
                <SelectItem value="signature">Signature Privée</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest ml-1">Budget</label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="bg-siyajj-charcoal border-white/10 text-siyajj-ivory h-12 rounded-lg font-serif text-base hover:border-siyajj-luxury-gold/50 transition-colors">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent className="bg-siyajj-warm-black border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                <SelectItem value="all">Tous les budgets</SelectItem>
                <SelectItem value="low">&lt; 2000€</SelectItem>
                <SelectItem value="mid">2000€ - 3000€</SelectItem>
                <SelectItem value="high">&gt; 3000€</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-sm font-serif text-siyajj-ivory/60">
          <span className="text-siyajj-luxury-gold">{filteredOffers.length}</span> {filteredOffers.length > 1 ? 'voyages trouvés' : 'voyage trouvé'}
        </div>
        <div className="flex items-center gap-2 border border-siyajj-luxury-gold/20 rounded-full p-1 bg-black/40 backdrop-blur-md">
          <button 
            onClick={() => setView("grid")}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${view === "grid" ? "bg-siyajj-luxury-gold text-siyajj-deep-black font-bold shadow-lg" : "text-siyajj-ivory/60 hover:text-siyajj-ivory hover:bg-white/5"}`}
          >
            Grille
          </button>
          <button 
            onClick={() => setView("list")}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${view === "list" ? "bg-siyajj-luxury-gold text-siyajj-deep-black font-bold shadow-lg" : "text-siyajj-ivory/60 hover:text-siyajj-ivory hover:bg-white/5"}`}
          >
            Liste
          </button>
        </div>
      </div>

      {/* Offer Grid */}
      <AnimatePresence mode="wait">
        {filteredOffers.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="glass-card rounded-2xl border border-siyajj-luxury-gold/20 p-20 text-center max-w-2xl mx-auto"
          >
            <span className="text-5xl text-siyajj-luxury-gold opacity-30 mb-6 block">✦</span>
            <h3 className="text-3xl font-serif text-siyajj-ivory mb-4">Aucun voyage disponible</h3>
            <p className="text-siyajj-ivory/60 mb-8 font-light text-lg">Nous n'avons pas trouvé de départ correspondant exactement à vos critères. Élargissez votre recherche.</p>
            <Button 
              onClick={() => { setVille("all"); setMois("all"); setCollection("all"); setBudget("all"); }}
              className="bg-transparent border border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black h-12 px-8 uppercase tracking-widest text-xs font-bold sweep-hover relative overflow-hidden"
            >
              <span className="relative z-10">Réinitialiser les filtres</span>
            </Button>
          </motion.div>
        ) : (
          <motion.div 
            key={view}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className={`grid gap-8 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          >
            {filteredOffers.map((offer, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                key={offer.id} 
                className={`glass-card rounded-2xl border border-white/10 overflow-hidden group hover:border-siyajj-luxury-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,154,70,0.15)] bg-black/40 ${view === "list" ? "flex flex-col md:flex-row h-auto md:h-64" : "flex flex-col"}`}
              >
                
                <div className={`relative ${view === "list" ? "md:w-1/3 h-64 md:h-full" : "w-full aspect-[4/3]"} overflow-hidden`}>
                  <MediaFrame slot={offer.image as any} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-siyajj-luxury-gold/40 text-siyajj-champagne text-[10px] uppercase tracking-widest rounded-full font-bold shadow-lg">
                      {offer.collection}
                    </span>
                  </div>
                  {view === "grid" && (
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-2xl font-serif text-siyajj-ivory drop-shadow-md">{offer.title}</h3>
                    </div>
                  )}
                </div>

                <div className={`p-6 flex flex-col justify-between ${view === "list" ? "md:w-2/3" : "flex-grow"}`}>
                  <div>
                    {view === "list" && (
                      <h3 className="text-3xl font-serif text-siyajj-ivory mb-4 group-hover:text-siyajj-champagne transition-colors">{offer.title}</h3>
                    )}
                    
                    <div className="grid grid-cols-2 gap-y-4 mb-6">
                      <div className="flex items-center gap-3 text-sm text-siyajj-ivory/80">
                        <div className="w-8 h-8 rounded-full bg-siyajj-luxury-gold/10 flex items-center justify-center border border-siyajj-luxury-gold/20">
                          <Calendar className="w-4 h-4 text-siyajj-luxury-gold" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest">{offer.duration}</span>
                          <span className="font-serif">{offer.month}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-siyajj-ivory/80">
                        <div className="w-8 h-8 rounded-full bg-siyajj-luxury-gold/10 flex items-center justify-center border border-siyajj-luxury-gold/20">
                          <MapPin className="w-4 h-4 text-siyajj-luxury-gold" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest">Départ</span>
                          <span className="font-serif">{offer.city}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold mb-3 flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-siyajj-luxury-gold"></span>
                        Inclus
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offer.included.map((inc, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-siyajj-ivory/70 tracking-wide">
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold/70 mb-1">À partir de</div>
                      <div className="text-3xl font-serif text-siyajj-champagne drop-shadow-sm">{offer.price}</div>
                    </div>
                    <Button asChild className="bg-transparent border border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black uppercase tracking-widest text-xs px-6 h-12 rounded-lg sweep-hover relative overflow-hidden font-bold">
                      <Link href={`/contact?offer=${offer.id}`}>
                        <span className="relative z-10">Réserver</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
