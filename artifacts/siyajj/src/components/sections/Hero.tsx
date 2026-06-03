import { useState } from "react";
import { Link } from "wouter";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MediaFrame } from "@/components/ui/media-frame";

export function Hero() {
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [voyageurs, setVoyageurs] = useState("");
  const [collection, setCollection] = useState("");

  const selectedVilleLabel = {"paris-cdg": "Paris CDG", "paris-ory": "Paris ORY", "lyon": "Lyon", "marseille": "Marseille", "lille": "Lille", "bruxelles": "Bruxelles", "geneve": "Genève"}[ville] || "Sélectionner";
  const selectedDateLabel = {"nov-26": "Novembre 2026", "dec-26": "Décembre 2026", "ramadan-26": "Ramadan 2026", "ete-27": "Été 2027", "sur-mesure": "Sur-mesure"}[date] || "Sélectionner";
  const selectedVoyageursLabel = {"1": "1 Voyageur", "2": "2 Voyageurs", "famille": "Famille", "groupe": "Groupe privé"}[voyageurs] || "Sélectionner";
  const selectedCollectionLabel = {"essentielle": "Essentielle", "confort": "Confort", "prestige": "Prestige", "signature": "Signature", "renaissance": "Renaissance"}[collection] || "Sélectionner";

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-siyajj-deep-black pt-20">
      {/* Background Sacred Portal Visual */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 h-full pointer-events-none opacity-50 md:opacity-100">
        <MediaFrame slot="heroImage" className="absolute inset-0 w-full h-full opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-[55%] pt-10 pb-32 md:py-20 flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
            <span className="text-[10px]">✦</span> OMRA & HAJJ PREMIUM DEPUIS LA FRANCE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-siyajj-ivory">
            Votre voyage vers<br className="hidden md:block"/>
            les Lieux Saints,<br className="hidden md:block"/>
            <span className="text-gold-gradient font-serif">réinventé avec excellence.</span>
          </h1>

          <p className="text-base md:text-lg text-siyajj-muted-text max-w-xl leading-relaxed mb-10 mx-auto md:mx-0">
            SIYAJJ conçoit votre Omra et votre Hajj avec un accompagnement haut de gamme, des hôtels soigneusement sélectionnés et une expérience pensée dans chaque détail.
          </p>

          <div className="flex flex-col w-full sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <Link href="/sur-mesure" className="w-full sm:w-auto">
              <Button className="w-full h-14 px-8 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne transition-all duration-300 rounded-none uppercase tracking-widest text-xs font-medium relative group overflow-hidden">
                <span className="relative z-10">Construire mon voyage</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-3 text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors border border-white/10 hover:border-siyajj-luxury-gold/30 bg-white/5 backdrop-blur-sm rounded-none uppercase tracking-widest text-xs font-medium group">
                  <Play className="w-4 h-4 fill-current group-hover:text-siyajj-luxury-gold transition-colors" />
                  <span>Découvrir l'expérience</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-siyajj-ivory max-w-4xl">
                <div className="aspect-video bg-siyajj-black-ink border border-white/5 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                  <MediaFrame slot="heroVideo" className="absolute inset-0" />
                  <div className="relative z-10 w-16 h-16 rounded-full bg-siyajj-deep-black/60 backdrop-blur-md flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30">
                    <Play className="w-6 h-6 text-siyajj-luxury-gold fill-current" />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 text-siyajj-ivory relative z-10">Vidéo d'expérience SIYAJJ bientôt disponible</h3>
                  <p className="text-siyajj-muted-text relative z-10">Plongez au cœur de l'excellence spirituelle.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-[35%] justify-end">
          <div className="glass-card p-8 rounded-xl max-w-sm w-full relative z-20">
            <h3 className="text-xl font-serif text-siyajj-luxury-gold mb-6 border-b border-siyajj-luxury-gold/20 pb-4">L'expérience SIYAJJ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Accompagnement francophone 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Hôtels sélectionnés avec exigence</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Services premium et attentionnés</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Partenaire opérationnel Omra Factory</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-siyajj-luxury-gold/10 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-siyajj-warm-black border border-siyajj-luxury-gold/30 flex items-center justify-center overflow-hidden">
                     <span className="text-[10px] text-siyajj-luxury-gold opacity-50">✦</span>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <div className="text-lg font-serif text-siyajj-ivory">4.9/5</div>
                <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold">avis vérifiés</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Trip Builder Overlay - Fixed to bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2 md:translate-y-1/2">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card p-4 md:p-3 rounded-xl border border-siyajj-luxury-gold/20 shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-5xl mx-auto backdrop-blur-xl bg-siyajj-deep-black/90">
            <div className="grid grid-cols-2 md:flex md:flex-row w-full gap-4 md:gap-0 divide-x-0 md:divide-x divide-white/10">
              
              <div className="px-2 md:px-4 py-1 flex flex-col justify-center group w-full">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Ville de départ</div>
                <Select value={ville} onValueChange={setVille}>
                  <SelectTrigger aria-label="Ville de départ" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-siyajj-luxury-gold transition-colors focus:ring-0 shadow-none">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
                    <SelectItem value="paris-cdg">Paris CDG</SelectItem>
                    <SelectItem value="paris-ory">Paris ORY</SelectItem>
                    <SelectItem value="lyon">Lyon</SelectItem>
                    <SelectItem value="marseille">Marseille</SelectItem>
                    <SelectItem value="lille">Lille</SelectItem>
                    <SelectItem value="bruxelles">Bruxelles</SelectItem>
                    <SelectItem value="geneve">Genève</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="px-2 md:px-4 py-1 flex flex-col justify-center group w-full border-l border-white/10 md:border-none">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Date souhaitée</div>
                <Select value={date} onValueChange={setDate}>
                  <SelectTrigger aria-label="Date souhaitée" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-siyajj-luxury-gold transition-colors focus:ring-0 shadow-none">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
                    <SelectItem value="nov-26">Novembre 2026</SelectItem>
                    <SelectItem value="dec-26">Décembre 2026</SelectItem>
                    <SelectItem value="ramadan-26">Ramadan 2026</SelectItem>
                    <SelectItem value="ete-27">Été 2027</SelectItem>
                    <SelectItem value="sur-mesure">Sur-mesure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="px-2 md:px-4 py-1 flex flex-col justify-center group w-full pt-4 border-t border-white/10 md:pt-1 md:border-t-0 md:border-l md:border-white/10">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Voyageurs</div>
                <Select value={voyageurs} onValueChange={setVoyageurs}>
                  <SelectTrigger aria-label="Nombre de voyageurs" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-siyajj-luxury-gold transition-colors focus:ring-0 shadow-none">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
                    <SelectItem value="1">1 Voyageur</SelectItem>
                    <SelectItem value="2">2 Voyageurs</SelectItem>
                    <SelectItem value="famille">Famille</SelectItem>
                    <SelectItem value="groupe">Groupe privé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="px-2 md:px-4 py-1 flex flex-col justify-center group w-full pt-4 border-t border-l border-white/10 md:pt-1 md:border-t-0 md:border-l md:border-white/10">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Collection</div>
                <Select value={collection} onValueChange={setCollection}>
                  <SelectTrigger aria-label="Collection" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-siyajj-luxury-gold transition-colors focus:ring-0 shadow-none">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
                    <SelectItem value="essentielle">Essentielle</SelectItem>
                    <SelectItem value="confort">Confort</SelectItem>
                    <SelectItem value="prestige">Prestige</SelectItem>
                    <SelectItem value="signature">Signature</SelectItem>
                    <SelectItem value="renaissance">Renaissance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto shrink-0 h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded text-xs uppercase tracking-widest font-medium mt-2 md:mt-0">
                  Trouver mon voyage
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-siyajj-ivory">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl text-siyajj-luxury-gold">✦</span>
                  </div>
                  <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">Votre projet SIYAJJ est prêt</h3>
                  <p className="text-siyajj-muted-text mb-6 text-sm">Un conseiller est disponible pour affiner les détails de votre voyage vers les Lieux Saints.</p>
                  
                  <div className="bg-siyajj-black-ink border border-white/5 rounded-lg p-4 mb-8 text-left">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] text-siyajj-muted-text uppercase tracking-widest mb-1">Départ</div>
                        <div className="text-sm">{selectedVilleLabel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-siyajj-muted-text uppercase tracking-widest mb-1">Période</div>
                        <div className="text-sm">{selectedDateLabel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-siyajj-muted-text uppercase tracking-widest mb-1">Voyageurs</div>
                        <div className="text-sm">{selectedVoyageursLabel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-siyajj-muted-text uppercase tracking-widest mb-1">Collection</div>
                        <div className="text-sm text-siyajj-luxury-gold">{selectedCollectionLabel}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link href="/contact" className="w-full">
                      <Button className="w-full h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne">
                        Demander un devis
                      </Button>
                    </Link>
                    <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full h-12 border-siyajj-luxury-gold/30 text-siyajj-ivory hover:bg-white/5 hover:text-siyajj-luxury-gold">
                        Continuer sur WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
          </div>
        </div>
      </div>
    </section>
  );
}