import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Play, ArrowRight, Star } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MediaFrame } from "@/components/ui/media-frame";

const experienceItems = [
  "Accompagnement francophone 24/7",
  "Hôtels sélectionnés avec exigence",
  "Services premium et attentionnés",
  "Partenaire opérationnel Omra Factory",
];

export function Hero() {
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [voyageurs, setVoyageurs] = useState("");
  const [collection, setCollection] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 700], [0, 90]);

  const [particles, setParticles] = useState<{ id: number; left: string; top: string; delay: string; duration: string }[]>([]);
  useEffect(() => {
    if (!prefersReducedMotion) {
      const p = Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
      }));
      setParticles(p);
    }
  }, [prefersReducedMotion]);

  const selectedVilleLabel = { "paris-cdg": "Paris CDG", "paris-ory": "Paris ORY", lyon: "Lyon", marseille: "Marseille", lille: "Lille", bruxelles: "Bruxelles", geneve: "Genève" }[ville] || "Sélectionner";
  const selectedDateLabel = { "nov-26": "Novembre 2026", "dec-26": "Décembre 2026", "ramadan-26": "Ramadan 2026", "ete-27": "Été 2027", "sur-mesure": "Sur-mesure" }[date] || "Sélectionner";
  const selectedVoyageursLabel = { "1": "1 Voyageur", "2": "2 Voyageurs", famille: "Famille", groupe: "Groupe privé" }[voyageurs] || "Sélectionner";
  const selectedCollectionLabel = { essentielle: "Essentielle", confort: "Confort", prestige: "Prestige", signature: "Signature", renaissance: "Renaissance" }[collection] || "Sélectionner";

  const stagger = (delay: number) =>
    prefersReducedMotion
      ? { initial: false as const }
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } };

  const fieldDefs = [
    { key: "ville", label: "Ville de départ", value: ville, set: setVille, aria: "Ville de départ", options: [["paris-cdg", "Paris CDG"], ["paris-ory", "Paris ORY"], ["lyon", "Lyon"], ["marseille", "Marseille"], ["lille", "Lille"], ["bruxelles", "Bruxelles"], ["geneve", "Genève"]] },
    { key: "date", label: "Date souhaitée", value: date, set: setDate, aria: "Date souhaitée", options: [["nov-26", "Novembre 2026"], ["dec-26", "Décembre 2026"], ["ramadan-26", "Ramadan 2026"], ["ete-27", "Été 2027"], ["sur-mesure", "Sur-mesure"]] },
    { key: "voyageurs", label: "Voyageurs", value: voyageurs, set: setVoyageurs, aria: "Nombre de voyageurs", options: [["1", "1 Voyageur"], ["2", "2 Voyageurs"], ["famille", "Famille"], ["groupe", "Groupe privé"]] },
    { key: "collection", label: "Collection", value: collection, set: setCollection, aria: "Collection", options: [["essentielle", "Essentielle"], ["confort", "Confort"], ["prestige", "Prestige"], ["signature", "Signature"], ["renaissance", "Renaissance"]] },
  ];

  const TripBuilder = (
    <div className="glass-card rounded-2xl border border-siyajj-luxury-gold/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl bg-black/75 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="grid grid-cols-2 lg:grid-cols-4 flex-1">
          {fieldDefs.map((f, i) => (
            <div
              key={f.key}
              className={`px-5 py-4 lg:py-5 flex flex-col justify-center gap-1.5 transition-colors hover:bg-siyajj-luxury-gold/[0.04] border-white/8 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-siyajj-luxury-gold/80 font-medium">{f.label}</div>
              <Select value={f.value} onValueChange={f.set}>
                <SelectTrigger aria-label={f.aria} className="border-0 bg-transparent p-0 h-auto text-siyajj-ivory font-serif text-base hover:text-white transition-colors focus:ring-0 shadow-none">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                  {f.options.map(([val, lab]) => (
                    <SelectItem key={val} value={val}>{lab}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <div className="p-3 lg:p-3 flex items-stretch border-t lg:border-t-0 lg:border-l border-white/8">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full lg:w-auto h-14 px-8 self-center bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 rounded-xl text-xs uppercase tracking-[0.18em] font-bold shadow-[0_10px_30px_-8px_rgba(200,154,70,0.6)] sweep-hover relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  Trouver mon voyage
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
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
                    <Link href="/contact"><span className="relative z-10">Demander un devis</span></Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-14 rounded-lg border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest sweep-hover relative overflow-hidden">
                    <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer"><span className="relative z-10">Continuer sur WhatsApp</span></a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );

  const ExperienceCard = (
    <div className="glass-card rounded-2xl p-6 border border-siyajj-luxury-gold/20 bg-black/55 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-siyajj-luxury-gold/15">
        <h3 className="text-base font-serif text-siyajj-luxury-gold tracking-wide">L'expérience SIYAJJ</h3>
        <span className="text-[10px] text-siyajj-luxury-gold/60">✦</span>
      </div>
      <ul className="space-y-3.5">
        {experienceItems.map((text, i) => (
          <li key={i} className="flex items-start gap-3 group">
            <div className="w-1 h-1 rounded-full bg-siyajj-luxury-gold mt-[7px] shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)] group-hover:scale-150 transition-transform" />
            <span className="text-siyajj-ivory/85 text-[13px] leading-relaxed tracking-wide">{text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 pt-4 border-t border-siyajj-luxury-gold/10 flex items-center justify-between">
        <div className="flex items-center gap-1 text-siyajj-luxury-gold">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
        </div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-siyajj-ivory/70">
          <span className="text-siyajj-champagne font-serif">4.9/5</span> avis vérifiés
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative md:flex md:items-center overflow-x-clip bg-transparent pt-28 pb-20 md:pb-28">
      {/* Local cinematic background richness */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-[10%] w-[55vw] h-[55vw] max-w-3xl rounded-full bg-[radial-gradient(circle,_rgba(200,154,70,0.10),_transparent_65%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-siyajj-deep-black to-transparent" />
      </div>

      {!prefersReducedMotion && (
        <div className="particles-container">
          {particles.map((p) => (
            <div key={p.id} className="particle" style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }} />
          ))}
        </div>
      )}

      {/* Desktop: dominant Sacred Destination visual on the right */}
      <motion.div
        className="hidden md:block absolute right-0 top-0 h-full w-[52%] lg:w-[50%] z-0"
        style={prefersReducedMotion ? undefined : { y: visualY }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-full h-full">
          <MediaFrame slot="heroPortal" priority alt="Arche dorée à motifs arabesques encadrant la grande mosquée de La Mecque dans une lumière de fin de journée" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black via-siyajj-deep-black/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-siyajj-deep-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-siyajj-deep-black to-transparent" />
          <div className="absolute inset-0 bg-siyajj-luxury-gold/[0.04] mix-blend-overlay animate-slow-pulse" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="flex flex-col">
          {/* Left editorial block */}
          <div className="w-full md:w-[54%] lg:w-[50%] flex flex-col text-center md:text-left items-center md:items-start">
            <motion.div
              {...stagger(0.1)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-[11px] tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(200,154,70,0.1)]"
            >
              <span className="text-[10px]">✦</span> Omra &amp; Hajj Premium depuis la France
            </motion.div>

            <motion.h1
              {...stagger(0.2)}
              className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[4.4rem] font-serif leading-[1.08] mb-7 text-siyajj-ivory drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            >
              Votre voyage vers{" "}<br className="hidden md:block" />
              les Lieux Saints,{" "}<br className="hidden md:block" />
              <span className="relative inline-block text-gold-gradient">
                réinventé avec excellence.
                <span className="absolute -inset-3 bg-siyajj-luxury-gold/15 blur-3xl -z-10 rounded-full opacity-60 animate-slow-pulse" />
              </span>
            </motion.h1>

            <motion.p
              {...stagger(0.3)}
              className="text-base md:text-lg text-siyajj-ivory/75 max-w-xl leading-relaxed mb-10 mx-auto md:mx-0 font-light tracking-wide"
            >
              SIYAJJ conçoit votre Omra et votre Hajj avec un accompagnement haut de gamme, des hôtels soigneusement sélectionnés et une expérience pensée dans chaque détail.
            </motion.p>

            <motion.div {...stagger(0.4)} className="flex flex-col w-full sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button asChild className="w-full sm:w-auto h-14 px-9 bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 rounded-xl uppercase tracking-[0.18em] text-xs font-bold relative group overflow-hidden sweep-hover shadow-[0_14px_40px_-12px_rgba(200,154,70,0.6)]">
                <Link href="/sur-mesure">
                  <span className="relative z-10 flex items-center gap-2">
                    Construire mon voyage
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-3 text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors border border-white/15 hover:border-siyajj-luxury-gold/50 bg-white/[0.03] backdrop-blur-md rounded-xl uppercase tracking-[0.18em] text-xs font-medium group sweep-hover relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full border border-siyajj-luxury-gold/40 group-hover:border-siyajj-luxury-gold transition-colors">
                      <Play className="w-3 h-3 fill-current" />
                    </span>
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
        </div>
      </div>

      {/* Desktop: elegant floating experience card over the visual */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute z-20 right-[2.5%] xl:right-[4%] top-1/2 -translate-y-[58%] w-[260px]"
      >
        {ExperienceCard}
      </motion.div>

      {/* Desktop: premium trip builder overlapping the bottom */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block w-full z-30 absolute bottom-0 left-0 translate-y-1/2"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">{TripBuilder}</div>
        </div>
      </motion.div>

      {/* Mobile stacked content */}
      <div className="md:hidden w-full relative z-20 container mx-auto px-4 mt-10 space-y-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full aspect-[3/4] relative rounded-3xl overflow-hidden border border-siyajj-luxury-gold/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
        >
          <MediaFrame slot="heroPortal" alt="Arche dorée à motifs arabesques encadrant la grande mosquée de La Mecque dans une lumière de fin de journée" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-siyajj-luxury-gold/[0.04] mix-blend-overlay animate-slow-pulse" />
        </motion.div>

        <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          {ExperienceCard}
        </motion.div>

        <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          {TripBuilder}
        </motion.div>
      </div>
    </section>
  );
}
