import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronRight, Users, Calendar, Star, Diamond, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";
import { OrnamentBadge, GoldDivider } from "@/components/ui/ornaments";
import { motion, AnimatePresence } from "framer-motion";

export default function SurMesure() {
  const [step, setStep] = useState(1);
  const [formSent, setFormSent] = useState(false);
  const [selections, setSelections] = useState<any>({
    departure: "",
    dates: "",
    travelers: "",
    collection: "",
    services: [],
    budget: "",
    contact: {}
  });

  const steps = [
    { id: 1, title: "Départ", icon: MapPinIcon },
    { id: 2, title: "Période", icon: Calendar },
    { id: 3, title: "Voyageurs", icon: Users },
    { id: 4, title: "Collection", icon: Star },
    { id: 5, title: "Détails", icon: Diamond },
    { id: 6, title: "Contact", icon: ShieldCheck }
  ];

  function MapPinIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  const handleServiceToggle = (service: string) => {
    setSelections((prev: any) => {
      const current = prev.services;
      if (current.includes(service)) {
        return { ...prev, services: current.filter((s: string) => s !== service) };
      } else {
        return { ...prev, services: [...current, service] };
      }
    });
  };

  const getStepImage = () => {
    switch(step) {
      case 1: return "surMesure";
      case 2: return "makkahImage";
      case 3: return "offerFamille";
      case 4: return "collectionPrestige";
      case 5: return "signatureVip";
      case 6: return "surMesure";
      default: return "surMesure";
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-24 relative min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 velvet-texture opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-20">
        <OrnamentBadge className="mb-7">À La Carte</OrnamentBadge>
        <h1 className="display-lg text-siyajj-ivory mb-5 drop-shadow-md">Créer mon voyage</h1>
        <GoldDivider className="max-w-[180px] mx-auto mb-6" />
        <p className="body-lg text-siyajj-ivory/62">
          Concevons ensemble un voyage unique qui correspond exactement à vos attentes spirituelles et à vos exigences d'excellence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 emerald-glass rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Visual Panel */}
          <div className="hidden lg:block lg:col-span-5 relative bg-siyajj-warm-black overflow-hidden border-r border-white/5">
            <AnimatePresence mode="wait">
              <motion.div 
                key={step}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <MediaFrame slot={getStepImage() as any} className="w-full h-full opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-siyajj-deep-black/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 z-20">
                  <div className="w-12 h-[1px] bg-siyajj-luxury-gold mb-6" />
                  <h3 className="card-title text-siyajj-champagne drop-shadow-md">
                    Étape 0{step}
                  </h3>
                  <p className="body-lg text-siyajj-ivory/75 mt-2">
                    {steps[step-1].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 relative flex flex-col bg-siyajj-deep-black/60">
            
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 transform -translate-y-1/2" />
                <div 
                  className="absolute top-1/2 left-0 h-[2px] bg-siyajj-luxury-gold -z-10 transform -translate-y-1/2 transition-all duration-700 shadow-[0_0_10px_rgba(200,154,70,0.8)]" 
                  style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                />
                
                {steps.map((s) => (
                  <div key={s.id} className="flex flex-col items-center gap-3">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-siyajj-charcoal relative
                      ${step >= s.id ? 'border-siyajj-luxury-gold text-siyajj-champagne shadow-[0_0_20px_rgba(200,154,70,0.3)] scale-110' : 'border-white/10 text-siyajj-ivory/30'}
                    `}>
                      <s.icon className={`w-4 h-4 md:w-5 md:h-5 ${step === s.id ? 'animate-pulse' : ''}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-grow flex flex-col justify-center min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Départ */}
                  {step === 1 && (
                    <div>
                      <h2 className="card-title text-siyajj-ivory mb-8">D'où souhaitez-vous partir ?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Paris", "Lyon", "Marseille", "Genève", "Bruxelles", "Autre"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setSelections({ ...selections, departure: opt }); setTimeout(() => setStep(2), 300); }}
                            className={`p-5 rounded-xl border border-white/10 text-left transition-all duration-300 font-sans text-base
                              ${selections.departure === opt 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'bg-black/40 text-siyajj-ivory/80 hover:border-siyajj-luxury-gold/30 hover:bg-white/5'
                              }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Dates */}
                  {step === 2 && (
                    <div>
                      <h2 className="card-title text-siyajj-ivory mb-8">Quelle période vous convient ?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Le plus tôt possible", "Ramadan", "Vacances scolaires", "Plus tard dans l'année"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setSelections({ ...selections, dates: opt }); setTimeout(() => setStep(3), 300); }}
                            className={`p-5 rounded-xl border border-white/10 text-left transition-all duration-300 font-sans text-base
                              ${selections.dates === opt 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'bg-black/40 text-siyajj-ivory/80 hover:border-siyajj-luxury-gold/30 hover:bg-white/5'
                              }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Voyageurs */}
                  {step === 3 && (
                    <div>
                      <h2 className="card-title text-siyajj-ivory mb-8">Qui participe à ce voyage ?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Solo", "Couple", "Famille", "Seniors", "Groupe Privé", "Autre"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { setSelections({ ...selections, travelers: opt }); setTimeout(() => setStep(4), 300); }}
                            className={`p-5 rounded-xl border border-white/10 text-left transition-all duration-300 font-sans text-base
                              ${selections.travelers === opt 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'bg-black/40 text-siyajj-ivory/80 hover:border-siyajj-luxury-gold/30 hover:bg-white/5'
                              }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Collection */}
                  {step === 4 && (
                    <div>
                      <h2 className="card-title text-siyajj-ivory mb-8">Quelle collection privilégier ?</h2>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { title: "Collection Essentielle", desc: "Une Omra sereine au juste prix (3-4*)." },
                          { title: "Collection Confort", desc: "Plus de confort et proximité (4*)." },
                          { title: "Collection Prestige", desc: "L'excellence hôtelière face au Haram (5*)." },
                          { title: "Collection Signature", desc: "Une Omra privée sur-mesure (5* Luxe)." },
                          { title: "Collection Renaissance", desc: "L'expérience spirituelle totale (5* Luxe + formations)." }
                        ].map((opt) => (
                          <button
                            key={opt.title}
                            onClick={() => { setSelections({ ...selections, collection: opt.title }); setTimeout(() => setStep(5), 300); }}
                            className={`p-5 rounded-xl border border-white/10 text-left transition-all duration-300 flex flex-col
                              ${selections.collection === opt.title 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'bg-black/40 hover:border-siyajj-luxury-gold/30 hover:bg-white/5'
                              }`}
                          >
                            <span className={`font-display text-lg mb-1 ${selections.collection === opt.title ? 'text-siyajj-champagne' : 'text-siyajj-ivory'}`}>{opt.title}</span>
                            <span className="body-md text-siyajj-ivory/55">{opt.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Services & Budget */}
                  {step === 5 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="card-title text-siyajj-ivory mb-4">Services spécifiques</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Transferts privés VIP", 
                            "Guide spirituel privé", 
                            "Ziyarat privées (Visites)", 
                            "Hira Immersion"
                          ].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleServiceToggle(opt)}
                              className={`p-4 rounded-xl border border-white/10 text-left flex items-center justify-between transition-all duration-300
                                ${selections.services.includes(opt)
                                  ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne' 
                                  : 'bg-black/40 text-siyajj-ivory/80 hover:border-siyajj-luxury-gold/30'
                                }`}
                            >
                              <span className="font-sans text-sm">{opt}</span>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                                ${selections.services.includes(opt) ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold' : 'border-white/20'}
                              `}>
                                {selections.services.includes(opt) && <Check className="w-3 h-3 text-black" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="card-title text-siyajj-ivory mb-4">Budget global envisagé</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {["< 2 000€", "2000 - 3000€", "> 3 000€", "Pas de limite"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setSelections({ ...selections, budget: opt })}
                              className={`p-3 rounded-lg border border-white/10 text-center transition-all duration-300 text-sm
                                ${selections.budget === opt 
                                  ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne' 
                                  : 'bg-black/40 text-siyajj-ivory/70 hover:border-siyajj-luxury-gold/30'
                                }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Contact */}
                  {step === 6 && (
                    <div>
                      {/* Récapitulatif du projet */}
                      <div className="mb-8 rounded-xl border border-siyajj-luxury-gold/20 bg-black/40 p-5">
                        <div className="label-premium text-siyajj-luxury-gold mb-4">Récapitulatif de votre projet</div>
                        <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                          {[
                            { label: "Départ", value: selections.departure },
                            { label: "Période", value: selections.dates },
                            { label: "Voyageurs", value: selections.travelers },
                            { label: "Collection", value: selections.collection },
                            { label: "Services", value: selections.services.length ? selections.services.join(", ") : "", full: true },
                            { label: "Budget", value: selections.budget, full: true },
                          ].map((item) => (
                            <div key={item.label} className={item.full ? "col-span-2" : ""}>
                              <dt className="label-premium text-siyajj-ivory/35">{item.label}</dt>
                              <dd className="text-sm text-siyajj-ivory mt-0.5">{item.value || "—"}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      <h2 className="card-title text-siyajj-ivory mb-8">Où pouvons-nous vous contacter ?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Nom complet</label>
                          <Input placeholder="Votre nom" className="bg-black/50 border-white/10 text-siyajj-ivory h-12 rounded-lg focus-visible:ring-siyajj-luxury-gold focus-visible:border-siyajj-luxury-gold" />
                        </div>
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Téléphone</label>
                          <Input type="tel" placeholder="Votre numéro" className="bg-black/50 border-white/10 text-siyajj-ivory h-12 rounded-lg focus-visible:ring-siyajj-luxury-gold focus-visible:border-siyajj-luxury-gold" />
                        </div>
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Email</label>
                          <Input type="email" placeholder="Votre email" className="bg-black/50 border-white/10 text-siyajj-ivory h-12 rounded-lg focus-visible:ring-siyajj-luxury-gold focus-visible:border-siyajj-luxury-gold" />
                        </div>
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Contact préféré</label>
                          <Select>
                            <SelectTrigger className="bg-black/50 border-white/10 text-siyajj-ivory h-12 rounded-lg focus:ring-siyajj-luxury-gold focus:border-siyajj-luxury-gold">
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory">
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                              <SelectItem value="phone">Appel téléphonique</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
              <button 
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-siyajj-ivory/50 hover:text-siyajj-champagne'}`}
              >
                ← Précédent
              </button>

              {step < 6 ? (
                <Button 
                  onClick={() => setStep(Math.min(6, step + 1))}
                  className="bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold px-8 h-12 rounded-lg sweep-hover relative overflow-hidden shadow-[0_0_20px_rgba(200,154,70,0.2)]"
                >
                  <span className="relative z-10 flex items-center">Continuer <ChevronRight className="w-4 h-4 ml-2" /></span>
                </Button>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold px-10 h-12 rounded-lg sweep-hover relative overflow-hidden shadow-[0_0_20px_rgba(200,154,70,0.4)]">
                      <span className="relative z-10">Transmettre ma demande</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory sm:max-w-md p-1 backdrop-blur-2xl">
                    <DialogTitle className="sr-only">Une création SIYAJJ</DialogTitle>
                    <DialogDescription className="sr-only">Confirmation de votre demande de voyage sur-mesure</DialogDescription>
                    <div className="bg-black/60 rounded-lg p-8 text-center border border-white/5">
                      <div className="w-20 h-20 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30 shadow-[0_0_30px_rgba(200,154,70,0.3)]">
                        <span className="text-3xl text-siyajj-luxury-gold">✦</span>
                      </div>
                      <h3 className="display-md text-siyajj-champagne mb-3">Une création SIYAJJ</h3>
                      <p className="body-md text-siyajj-ivory/65 mb-8 leading-relaxed">
                        Notre équipe a reçu vos préférences et vous contactera très rapidement pour affiner votre projet de voyage.
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        <Button asChild className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded-lg font-bold uppercase tracking-widest text-xs">
                          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                            Continuer sur WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}