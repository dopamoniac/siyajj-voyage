import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Plane, Hotel, Calendar, MapPin, Users, HeartHandshake } from "lucide-react";
import { MediaFrame } from "@/components/ui/media-frame";

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
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Le Catalogue</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Nos Omras</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Découvrez nos départs organisés, pensés pour vous offrir une expérience spirituelle profonde dans un cadre serein et structuré.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 rounded-xl border border-white/5 mb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select value={ville} onValueChange={setVille}>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Ville de départ" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="all">Toutes les villes</SelectItem>
              <SelectItem value="paris">Paris CDG</SelectItem>
              <SelectItem value="lyon">Lyon</SelectItem>
              <SelectItem value="marseille">Marseille</SelectItem>
            </SelectContent>
          </Select>

          <Select value={mois} onValueChange={setMois}>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Mois" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="all">Tous les mois</SelectItem>
              <SelectItem value="nov">Novembre</SelectItem>
              <SelectItem value="dec">Décembre</SelectItem>
              <SelectItem value="fev">Février</SelectItem>
              <SelectItem value="ramadan">Ramadan</SelectItem>
              <SelectItem value="vacances">Vacances Scolaires</SelectItem>
            </SelectContent>
          </Select>

          <Select value={collection} onValueChange={setCollection}>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Collection" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="all">Toutes les collections</SelectItem>
              <SelectItem value="essentielle">Essentielle</SelectItem>
              <SelectItem value="confort">Confort</SelectItem>
              <SelectItem value="prestige">Prestige</SelectItem>
              <SelectItem value="signature">Signature Privée</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="all">Tous les budgets</SelectItem>
              <SelectItem value="low">&lt; 2000€</SelectItem>
              <SelectItem value="mid">2000€ - 3000€</SelectItem>
              <SelectItem value="high">&gt; 3000€</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-4 border border-white/10 rounded-full p-1 bg-siyajj-black-ink">
          <button 
            onClick={() => setView("grid")}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-colors ${view === "grid" ? "bg-siyajj-luxury-gold text-siyajj-deep-black font-medium" : "text-siyajj-muted-text hover:text-siyajj-ivory"}`}
          >
            Cartes Premium
          </button>
          <button 
            onClick={() => setView("list")}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-colors ${view === "list" ? "bg-siyajj-luxury-gold text-siyajj-deep-black font-medium" : "text-siyajj-muted-text hover:text-siyajj-ivory"}`}
          >
            Liste
          </button>
        </div>
      </div>

      {/* Offer Grid */}
      {filteredOffers.length === 0 ? (
        <div className="glass-card rounded-xl border border-white/5 p-16 text-center">
          <span className="text-4xl text-siyajj-luxury-gold/50 mb-4 block">✦</span>
          <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">Aucun voyage disponible</h3>
          <p className="text-siyajj-muted-text mb-6">Nous n'avons pas trouvé de départ correspondant à vos critères.</p>
          <Button 
            onClick={() => { setVille("all"); setMois("all"); setCollection("all"); setBudget("all"); }}
            variant="outline" 
            className="border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black"
          >
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <div className={`grid gap-8 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
          {filteredOffers.map((offer) => (
            <div key={offer.id} className={`glass-card rounded-xl border border-white/5 overflow-hidden group hover:border-siyajj-luxury-gold/30 transition-all duration-500 ${view === "list" ? "flex flex-col md:flex-row" : "flex flex-col"}`}>
              
              <MediaFrame slot="makkahImage" className={`${view === "list" ? "md:w-1/3" : "w-full h-64"}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-siyajj-deep-black/80 backdrop-blur-md border border-siyajj-luxury-gold/30 text-siyajj-luxury-gold text-[10px] uppercase tracking-widest rounded-full">
                    {offer.collection}
                  </span>
                </div>
              </MediaFrame>

              <div className={`p-8 flex flex-col justify-between ${view === "list" ? "md:w-2/3" : "flex-grow"}`}>
                <div>
                  <h3 className="text-2xl font-serif text-siyajj-ivory mb-2 group-hover:text-siyajj-luxury-gold transition-colors">{offer.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-y-3 mb-6 mt-6">
                    <div className="flex items-center gap-2 text-sm text-siyajj-muted-text">
                      <Calendar className="w-4 h-4 text-siyajj-luxury-gold/70" />
                      {offer.duration} - {offer.month}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-siyajj-muted-text">
                      <MapPin className="w-4 h-4 text-siyajj-luxury-gold/70" />
                      {offer.city}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-siyajj-muted-text">
                      <Hotel className="w-4 h-4 text-siyajj-luxury-gold/70" />
                      {offer.hotel}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-3 border-b border-white/10 pb-2">Inclus</div>
                    <div className="flex flex-wrap gap-2">
                      {offer.included.map((inc, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-siyajj-ivory/80">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">À partir de</div>
                    <div className="text-2xl font-serif text-siyajj-ivory">{offer.price}</div>
                  </div>
                  <Link href={`/contact?offer=${offer.id}`}>
                    <Button className="bg-transparent border border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black uppercase tracking-widest text-xs px-6">
                      Réserver
                    </Button>
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}