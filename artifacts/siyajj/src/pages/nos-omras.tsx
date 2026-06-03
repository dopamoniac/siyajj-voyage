import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Plane, Hotel, Calendar, MapPin, Users, HeartHandshake, MessageCircle } from "lucide-react";

export default function NosOmras() {
  const [view, setView] = useState<"grid" | "list">("grid");

  const offers = [
    {
      id: 1,
      title: "Omra Novembre depuis Paris",
      duration: "12 Jours",
      city: "Paris CDG",
      month: "Novembre 2026",
      hotel: "5 Étoiles Premium",
      included: ["Visa", "Vols", "Transferts VIP", "Guide", "Hôtels face au Haram"],
      price: "2 490€",
      collection: "Signature Privée"
    },
    {
      id: 2,
      title: "Omra Ramadan Fin de Mois",
      duration: "15 Jours",
      city: "Lyon / Paris",
      month: "Ramadan 2026",
      hotel: "5 Étoiles",
      included: ["Visa", "Vols directs", "Transferts", "Guide", "Accompagnateur"],
      price: "3 890€",
      collection: "Prestige"
    },
    {
      id: 3,
      title: "Omra Famille",
      duration: "10 Jours",
      city: "Paris CDG",
      month: "Vacances Scolaires",
      hotel: "4 Étoiles Supérieur",
      included: ["Visa", "Vols", "Transferts", "Guide", "Activité Enfants"],
      price: "1 890€",
      collection: "Confort"
    },
    {
      id: 4,
      title: "Omra Seniors Sérénité",
      duration: "14 Jours",
      city: "Paris CDG",
      month: "Février 2026",
      hotel: "5 Étoiles (Accès PMR)",
      included: ["Visa", "Vols", "Transferts Médicalisés", "Guide dédié", "Fauteuil"],
      price: "2 790€",
      collection: "Prestige"
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Select>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Ville de départ" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="paris">Paris CDG</SelectItem>
              <SelectItem value="lyon">Lyon</SelectItem>
              <SelectItem value="marseille">Marseille</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Mois" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="nov">Novembre</SelectItem>
              <SelectItem value="dec">Décembre</SelectItem>
              <SelectItem value="ramadan">Ramadan</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-siyajj-deep-black border-white/10 text-siyajj-ivory">
              <SelectValue placeholder="Collection" />
            </SelectTrigger>
            <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
              <SelectItem value="essentielle">Essentielle</SelectItem>
              <SelectItem value="confort">Confort</SelectItem>
              <SelectItem value="prestige">Prestige</SelectItem>
              <SelectItem value="signature">Signature Privée</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
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

          <Button className="w-full bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-[10px] font-medium">
            Filtrer
          </Button>
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
      <div className={`grid gap-8 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
        {offers.map((offer) => (
          <div key={offer.id} className={`glass-card rounded-xl border border-white/5 overflow-hidden group hover:border-siyajj-luxury-gold/30 transition-all duration-500 ${view === "list" ? "flex flex-col md:flex-row" : "flex flex-col"}`}>
            
            <div className={`relative ${view === "list" ? "md:w-1/3" : "w-full h-64"} bg-siyajj-black-ink overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-siyajj-deep-black/80 backdrop-blur-md border border-siyajj-luxury-gold/30 text-siyajj-luxury-gold text-[10px] uppercase tracking-widest rounded-full">
                  {offer.collection}
                </span>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-siyajj-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-full h-full flex items-center justify-center border border-white/5 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <span className="text-6xl text-siyajj-luxury-gold">✦</span>
              </div>
            </div>

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

      {/* Sticky Contact CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" aria-label="Contacter un conseiller sur WhatsApp" className="w-14 h-14 bg-siyajj-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(200,154,70,0.3)] hover:scale-110 transition-transform group">
          <MessageCircle className="w-6 h-6 text-siyajj-deep-black group-hover:animate-pulse" />
        </a>
      </div>
    </div>
  );
}
