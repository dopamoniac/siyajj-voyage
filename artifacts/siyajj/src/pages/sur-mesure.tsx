import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronRight, Users, Calendar, Star, Diamond, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { MediaFrame } from "@/components/ui/media-frame";
import { motion, AnimatePresence } from "framer-motion";

export default function SurMesure() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<any>({
    travelers: "",
    period: "",
    comfort: "",
    services: [],
    contact: {}
  });

  const steps = [
    { id: 1, title: "Voyageurs", icon: Users },
    { id: 2, title: "Période", icon: Calendar },
    { id: 3, title: "Confort", icon: Star },
    { id: 4, title: "Services", icon: Diamond },
    { id: 5, title: "Contact", icon: ShieldCheck }
  ];

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
      case 1: return "offerFamille";
      case 2: return "makkahImage";
      case 3: return "collectionPrestige";
      case 4: return "signatureVip";
      case 5: return "surMesure";
      default: return "surMesure";
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-24 relative min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-20">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold">À La Carte</div>
        <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-lg">Votre Omra Sur-Mesure</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed font-light text-lg">
          Concevons ensemble un voyage unique qui correspond exactement à vos attentes spirituelles et à vos exigences d'excellence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-black/40 backdrop-blur-2xl rounded-3xl border border-siyajj-luxury-gold/20 overflow-hidden shadow-2xl">
          
          {/* Left Visual Panel */}
          <div className="hidden lg:block lg:col-span-5 relative bg-siyajj-warm-black overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 z-20">
                  <div className="w-12 h-[1px] bg-siyajj-luxury-gold mb-6"></div>
                  <h3 className="text-3xl font-serif text-siyajj-champagne drop-shadow-md">
                    Étape 0{step}
                  </h3>
                  <p className="text-siyajj-ivory/80 font-light mt-2 text-lg">
                    {steps[step-1].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 relative flex flex-col">
            
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
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-siyajj-charcoal relative
                      ${step >= s.id ? 'border-siyajj-luxury-gold text-siyajj-champagne shadow-[0_0_20px_rgba(200,154,70,0.3)] scale-110' : 'border-white/10 text-siyajj-ivory/30'}
                    `}>
                      <s.icon className={`w-5 h-5 ${step === s.id ? 'animate-pulse' : ''}`} />
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
                  {/* Step 1: Voyageurs */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-3xl font-serif text-siyajj-ivory mb-8">Qui participe à ce voyage d'exception ?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Solo", "Couple", "Famille", "Seniors", "Groupe Privé", "Autre"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setSelections({ ...selections, travelers: opt })}
                            className={`p-6 rounded-xl border-2 text-left transition-all duration-300 font-serif text-lg
                              ${selections.travelers === opt 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'border-white/5 bg-white/5 text-siyajj-ivory/70 hover:border-siyajj-luxury-gold/30 hover:bg-white/10'
                              }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Période */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-3xl font-serif text-siyajj-ivory mb-8">Quelle est la période souhaitée ?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Prochain départ", "Ramadan", "Vacances scolaires", "Période spécifique"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setSelections({ ...selections, period: opt })}
                            className={`p-6 rounded-xl border-2 text-left transition-all duration-300 font-serif text-lg
                              ${selections.period === opt 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'border-white/5 bg-white/5 text-siyajj-ivory/70 hover:border-siyajj-luxury-gold/30 hover:bg-white/10'
                              }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confort */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-3xl font-serif text-siyajj-ivory mb-8">Niveau de confort exigé</h2>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { title: "Prestige (5*)", desc: "Des hôtels de renom très proches des mosquées." },
                          { title: "Signature (5* Luxe)", desc: "Hôtels face au Haram avec services premium." },
                          { title: "Renaissance (Palaces)", desc: "Le summum du luxe, suites avec vue Kaaba." }
                        ].map((opt) => (
                          <button
                            key={opt.title}
                            onClick={() => setSelections({ ...selections, comfort: opt.title })}
                            className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex flex-col
                              ${selections.comfort === opt.title 
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'border-white/5 bg-white/5 hover:border-siyajj-luxury-gold/30 hover:bg-white/10'
                              }`}
                          >
                            <span className={`font-serif text-xl mb-1 ${selections.comfort === opt.title ? 'text-siyajj-champagne' : 'text-siyajj-ivory'}`}>{opt.title}</span>
                            <span className="text-sm font-light text-siyajj-ivory/60">{opt.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Services */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-3xl font-serif text-siyajj-ivory mb-2">Services exclusifs</h2>
                      <p className="text-siyajj-ivory/50 font-light mb-8 text-sm">Sélectionnez les prestations complémentaires pour parfaire votre voyage.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Transferts privés VIP", 
                          "Guide spirituel privé", 
                          "Vols en classe Affaires", 
                          "Assistance PMR/Seniors", 
                          "Ziyarat privées (Visites)", 
                          "Hira Immersion"
                        ].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleServiceToggle(opt)}
                            className={`p-5 rounded-xl border-2 text-left flex items-center justify-between transition-all duration-300
                              ${selections.services.includes(opt)
                                ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-champagne shadow-[0_0_15px_rgba(200,154,70,0.15)]' 
                                : 'border-white/5 bg-white/5 text-siyajj-ivory/70 hover:border-siyajj-luxury-gold/30 hover:bg-white/10'
                              }`}
                          >
                            <span className="font-serif text-lg">{opt}</span>
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors
                              ${selections.services.includes(opt) ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold' : 'border-white/20'}
                            `}>
                              {selections.services.includes(opt) && <Check className="w-4 h-4 text-black" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Contact */}
                  {step === 5 && (
                    <div>
                      <h2 className="text-3xl font-serif text-siyajj-ivory mb-8">Vos coordonnées</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="sm-nom" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold">Nom complet</label>
                          <Input id="sm-nom" placeholder="Votre nom" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold focus-visible:border-siyajj-luxury-gold text-lg font-light" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sm-tel" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold">Téléphone</label>
                          <Input id="sm-tel" type="tel" placeholder="Votre numéro" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold focus-visible:border-siyajj-luxury-gold text-lg font-light" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sm-email" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold">Email</label>
                          <Input id="sm-email" type="email" placeholder="Votre email" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold focus-visible:border-siyajj-luxury-gold text-lg font-light" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold">Contact préféré</label>
                          <Select>
                            <SelectTrigger aria-label="Contact préféré" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg text-lg font-light focus:ring-siyajj-luxury-gold focus:border-siyajj-luxury-gold">
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
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
                ← Retour
              </button>

              {step < 5 ? (
                <Button 
                  onClick={() => setStep(Math.min(5, step + 1))}
                  className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold px-8 h-12 rounded-lg sweep-hover relative overflow-hidden shadow-[0_0_20px_rgba(200,154,70,0.2)]"
                >
                  <span className="relative z-10 flex items-center">Continuer <ChevronRight className="w-4 h-4 ml-2" /></span>
                </Button>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold px-10 h-12 rounded-lg sweep-hover relative overflow-hidden shadow-[0_0_20px_rgba(200,154,70,0.4)]">
                      <span className="relative z-10">Transmettre ma demande</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory max-w-md p-1 backdrop-blur-2xl">
                    <div className="bg-black/60 rounded-lg p-8 text-center border border-white/5">
                      <div className="w-20 h-20 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30 shadow-[0_0_30px_rgba(200,154,70,0.3)]">
                        <span className="text-3xl text-siyajj-luxury-gold">✦</span>
                      </div>
                      <h3 className="text-3xl font-serif text-siyajj-champagne mb-3">Une création SIYAJJ</h3>
                      <p className="text-siyajj-ivory/70 mb-8 font-light leading-relaxed">
                        Un conseiller de notre service conciergerie a reçu vos préférences et vous contactera très rapidement pour affiner cette ébauche.
                      </p>
                      
                      <div className="bg-black/50 border border-white/5 p-5 rounded-xl text-left mb-8 space-y-3 font-serif">
                        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-siyajj-luxury-gold/80 text-sm">Voyageurs</span> <span>{selections.travelers || "Non précisé"}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-siyajj-luxury-gold/80 text-sm">Période</span> <span>{selections.period || "Non précisée"}</span></div>
                        <div className="flex justify-between"><span className="text-siyajj-luxury-gold/80 text-sm">Confort</span> <span className="text-siyajj-champagne">{selections.comfort || "Non précisé"}</span></div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <Button asChild className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded-lg font-bold uppercase tracking-widest text-xs">
                          <Link href="/">
                            Retour à l'accueil
                          </Link>
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
