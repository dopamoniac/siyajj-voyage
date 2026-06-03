import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MediaFrame } from "@/components/ui/media-frame";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function Hero() {
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [voyageurs, setVoyageurs] = useState("");
  const [collection, setCollection] = useState("");
  const prefersReducedMotion = useReducedMotion();

  // Particle effect generator
  const [particles, setParticles] = useState<{id: number, left: string, top: string, delay: string, duration: string}[]>([]);
  useEffect(() => {
    if (!prefersReducedMotion) {
      const p = Array.from({length: 20}).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`
      }));
      setParticles(p);
    }
  }, [prefersReducedMotion]);

  const selectedVilleLabel = {"paris-cdg": "Paris CDG", "paris-ory": "Paris ORY", "lyon": "Lyon", "marseille": "Marseille", "lille": "Lille", "bruxelles": "Bruxelles", "geneve": "Genève"}[ville] || "Sélectionner";
  const selectedDateLabel = {"nov-26": "Novembre 2026", "dec-26": "Décembre 2026", "ramadan-26": "Ramadan 2026", "ete-27": "Été 2027", "sur-mesure": "Sur-mesure"}[date] || "Sélectionner";
  const selectedVoyageursLabel = {"1": "1 Voyageur", "2": "2 Voyageurs", "famille": "Famille", "groupe": "Groupe privé"}[voyageurs] || "Sélectionner";
  const selectedCollectionLabel = {"essentielle": "Essentielle", "confort": "Confort", "prestige": "Prestige", "signature": "Signature", "renaissance": "Renaissance"}[collection] || "Sélectionner";

  const miniCollections = [
    { title: "Signature", image: "collectionSignature" },
    { title: "Prestige", image: "collectionPrestige" },
    { title: "Confort", image: "collectionConfort" }
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-transparent pt-20">
      {/* Particles */}
      {!prefersReducedMotion && (
        <div className="particles-container">
          {particles.map(p => (
            <div key={p.id} className="particle" style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }} />
          ))}
        </div>
      )}

      {/* Background Sacred Portal Visual for Desktop (3D Depth) */}
      <div className="hidden md:block absolute right-0 top-0 w-2/3 h-full pointer-events-none z-0">
        <motion.div 
          className="w-full h-full relative"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-transparent to-transparent z-10 w-1/3 left-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-siyajj-deep-black via-transparent to-siyajj-deep-black z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[80%] h-[90%] relative rounded-t-[50%] overflow-hidden shadow-[0_0_100px_rgba(200,154,70,0.15)] gradient-mask-all border border-siyajj-luxury-gold/10">
                <MediaFrame slot="heroPortal" priority className="absolute inset-0 w-full h-full transform scale-105" />
                <div className="absolute inset-0 bg-siyajj-luxury-gold/5 mix-blend-overlay animate-slow-pulse" />
             </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full md:w-[55%] pt-10 pb-16 md:py-20 flex flex-col justify-center text-center md:text-left items-center md:items-start relative z-20">
          <motion.div 
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-xs tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(200,154,70,0.1)]"
          >
            <span className="text-[10px]">✦</span> OMRA & HAJJ PREMIUM DEPUIS LA FRANCE
          </motion.div>

          <motion.h1 
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] mb-6 text-siyajj-ivory drop-shadow-lg"
          >
            Votre voyage vers{" "}<br className="hidden md:block"/>
            les Lieux Saints,{" "}<br className="hidden md:block"/>
            <span className="text-gold-gradient font-serif relative">
              réinventé avec excellence.
              <span className="absolute -inset-2 bg-siyajj-luxury-gold/20 blur-2xl -z-10 rounded-full opacity-50 animate-slow-pulse"></span>
            </span>
          </motion.h1>

          <motion.p 
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-siyajj-ivory/80 max-w-xl leading-relaxed mb-10 mx-auto md:mx-0 drop-shadow-md font-light tracking-wide"
          >
            SIYAJJ conçoit votre Omra et votre Hajj avec un accompagnement haut de gamme, des hôtels soigneusement sélectionnés et une expérience pensée dans chaque détail.
          </motion.p>

          <motion.div 
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col w-full sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start"
          >
            <Button asChild className="w-full sm:w-auto h-14 px-8 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne transition-all duration-300 rounded-none uppercase tracking-widest text-xs font-medium relative group overflow-hidden sweep-hover">
              <Link href="/sur-mesure">
                <span className="relative z-10 font-bold">Construire mon voyage</span>
              </Link>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-3 text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors border border-white/20 hover:border-siyajj-luxury-gold/50 bg-black/40 backdrop-blur-md rounded-none uppercase tracking-widest text-xs font-medium group sweep-hover relative overflow-hidden">
                  <Play className="w-4 h-4 fill-current group-hover:text-siyajj-luxury-gold transition-colors relative z-10" />
                  <span className="relative z-10">Découvrir l'expérience</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory max-w-4xl p-1 rounded-xl">
                <div className="aspect-video bg-siyajj-black-ink border border-white/5 rounded-lg flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                  <MediaFrame slot="heroVideo" className="absolute inset-0" />
                  <div className="absolute inset-0 bg-siyajj-deep-black/40" />
                  <div className="relative z-10 w-20 h-20 rounded-full bg-siyajj-deep-black/60 backdrop-blur-md flex items-center justify-center mb-6 border border-siyajj-luxury-gold/50 shadow-[0_0_30px_rgba(200,154,70,0.3)]">
                    <Play className="w-8 h-8 text-siyajj-luxury-gold fill-current ml-1" />
                  </div>
                  <h3 className="font-serif text-3xl mb-3 text-siyajj-ivory relative z-10">L'expérience SIYAJJ en images</h3>
                  <p className="text-siyajj-ivory/80 relative z-10 text-lg font-light tracking-wide">Vidéo d'expérience SIYAJJ bientôt disponible.</p>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* Mobile: App-like layout insertion */}
        <div className="md:hidden w-full space-y-8 mt-4 relative z-20">
           {/* Mobile Portal Card */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden border border-siyajj-luxury-gold/20 shadow-2xl"
           >
             <MediaFrame slot="heroPortal" className="absolute inset-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-transparent to-transparent" />
           </motion.div>

           {/* Mobile Collections Swipe */}
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
             <div className="flex justify-between items-end mb-4 px-1">
               <h3 className="text-sm uppercase tracking-widest text-siyajj-luxury-gold">Nos Collections</h3>
             </div>
             <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {miniCollections.map((item, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-[45%]">
                    <Link href="/collections">
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 glass-card">
                        <MediaFrame slot={item.image as any} className="absolute inset-0 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-center">
                          <span className="text-xs uppercase tracking-widest text-siyajj-ivory block">{item.title}</span>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
           </motion.div>
        </div>

        {/* Desktop: Floating Experience Card */}
        <div className="hidden md:flex w-full md:w-[35%] justify-end relative z-20">
          <motion.div 
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="glass-card p-8 rounded-2xl max-w-sm w-full relative z-20 border-siyajj-luxury-gold/30 bg-black/60 shadow-2xl backdrop-blur-2xl"
          >
            <h3 className="text-xl font-serif text-siyajj-luxury-gold mb-6 border-b border-siyajj-luxury-gold/20 pb-4">L'expérience SIYAJJ</h3>
            <ul className="space-y-4">
              {[
                "Accompagnement francophone 24/7",
                "Hôtels sélectionnés avec exigence",
                "Services premium et attentionnés",
                "Partenaire opérationnel Omra Factory"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)] group-hover:scale-150 transition-transform" />
                  <span className="text-siyajj-ivory/90 text-sm leading-relaxed tracking-wide">{text}</span>
                </li>
              ))}
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
                <div className="text-xl font-serif text-siyajj-luxury-gold">4.9<span className="text-sm text-siyajj-ivory/50">/5</span></div>
                <div className="text-[10px] uppercase tracking-widest text-siyajj-ivory/60">avis vérifiés</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Trip Builder Overlay - Fixed to bottom of hero on desktop, stacked on mobile */}
      <motion.div 
        initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full z-30 mt-12 mb-8 md:mt-0 md:mb-0 md:absolute md:bottom-0 md:left-0 md:transform md:translate-y-1/2"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card p-4 md:p-3 rounded-2xl border border-siyajj-luxury-gold/30 shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-5xl mx-auto backdrop-blur-2xl bg-black/80">
            <div className="grid grid-cols-2 md:flex md:flex-row w-full gap-4 md:gap-0 divide-x-0 md:divide-x divide-white/10">
              
              <div className="px-2 md:px-4 py-2 flex flex-col justify-center group w-full hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold mb-1">Ville de départ</div>
                <Select value={ville} onValueChange={setVille}>
                  <SelectTrigger aria-label="Ville de départ" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-white transition-colors focus:ring-0 shadow-none font-serif text-base">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
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
              
              <div className="px-2 md:px-4 py-2 flex flex-col justify-center group w-full border-l border-white/10 md:border-none hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold mb-1">Date souhaitée</div>
                <Select value={date} onValueChange={setDate}>
                  <SelectTrigger aria-label="Date souhaitée" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-white transition-colors focus:ring-0 shadow-none font-serif text-base">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                    <SelectItem value="nov-26">Novembre 2026</SelectItem>
                    <SelectItem value="dec-26">Décembre 2026</SelectItem>
                    <SelectItem value="ramadan-26">Ramadan 2026</SelectItem>
                    <SelectItem value="ete-27">Été 2027</SelectItem>
                    <SelectItem value="sur-mesure">Sur-mesure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="px-2 md:px-4 py-2 flex flex-col justify-center group w-full pt-4 border-t border-white/10 md:pt-2 md:border-t-0 md:border-l md:border-white/10 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold mb-1">Voyageurs</div>
                <Select value={voyageurs} onValueChange={setVoyageurs}>
                  <SelectTrigger aria-label="Nombre de voyageurs" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-white transition-colors focus:ring-0 shadow-none font-serif text-base">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                    <SelectItem value="1">1 Voyageur</SelectItem>
                    <SelectItem value="2">2 Voyageurs</SelectItem>
                    <SelectItem value="famille">Famille</SelectItem>
                    <SelectItem value="groupe">Groupe privé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="px-2 md:px-4 py-2 flex flex-col justify-center group w-full pt-4 border-t border-l border-white/10 md:pt-2 md:border-t-0 md:border-l md:border-white/10 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold mb-1">Collection</div>
                <Select value={collection} onValueChange={setCollection}>
                  <SelectTrigger aria-label="Collection" className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory text-sm font-medium hover:text-white transition-colors focus:ring-0 shadow-none font-serif text-base">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
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
                <Button className="w-full md:w-auto shrink-0 h-14 md:h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded-lg text-xs uppercase tracking-widest font-bold mt-4 md:mt-0 sweep-hover relative overflow-hidden">
                  <span className="relative z-10">Trouver mon voyage</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-2xl">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30 shadow-[0_0_20px_rgba(200,154,70,0.2)]">
                    <span className="text-2xl text-siyajj-luxury-gold">✦</span>
                  </div>
                  <h3 className="text-3xl font-serif text-siyajj-ivory mb-2">Votre projet SIYAJJ est prêt</h3>
                  <p className="text-siyajj-ivory/70 mb-8 text-sm font-light tracking-wide">Un conseiller est disponible pour affiner les détails de votre voyage vers les Lieux Saints.</p>
                  
                  <div className="bg-black/50 border border-siyajj-luxury-gold/20 rounded-xl p-6 mb-8 text-left glass-card">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Départ</div>
                        <div className="text-base font-serif">{selectedVilleLabel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Période</div>
                        <div className="text-base font-serif">{selectedDateLabel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Voyageurs</div>
                        <div className="text-base font-serif">{selectedVoyageursLabel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-siyajj-luxury-gold uppercase tracking-widest mb-1">Collection</div>
                        <div className="text-base font-serif text-siyajj-champagne">{selectedCollectionLabel}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button asChild className="w-full h-14 rounded-lg bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest font-bold sweep-hover relative overflow-hidden">
                      <Link href="/contact">
                        <span className="relative z-10">Demander un devis</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full h-14 rounded-lg border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest sweep-hover relative overflow-hidden">
                      <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer">
                        <span className="relative z-10">Continuer sur WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
