import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronRight, Users, Calendar, Star, Diamond, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

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

  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">À La Carte</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Votre Omra Sur-Mesure</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Concevons ensemble un voyage unique qui correspond exactement à vos attentes spirituelles et à vos besoins de confort.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 transform -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-[1px] bg-siyajj-luxury-gold -z-10 transform -translate-y-1/2 transition-all duration-500" 
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 bg-siyajj-deep-black
                  ${step >= s.id ? 'border-siyajj-luxury-gold text-siyajj-luxury-gold' : 'border-white/10 text-siyajj-muted-text'}
                  ${step === s.id ? 'shadow-[0_0_15px_rgba(200,154,70,0.3)]' : ''}
                `}>
                  <s.icon className="w-4 h-4" />
                </div>
                <div className={`text-[10px] uppercase tracking-widest hidden md:block
                  ${step >= s.id ? 'text-siyajj-ivory' : 'text-siyajj-muted-text'}
                `}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="glass-card p-8 md:p-12 rounded-xl border border-white/5 relative overflow-hidden min-h-[400px]">
          {/* Step 1: Voyageurs */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-8 text-center">Qui participe à ce voyage ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Solo", "Couple", "Famille", "Seniors", "Groupe Privé"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelections({ ...selections, travelers: opt })}
                    className={`p-6 rounded-lg border text-center transition-all duration-300
                      ${selections.travelers === opt 
                        ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold' 
                        : 'border-white/10 text-siyajj-muted-text hover:border-white/30 hover:text-siyajj-ivory'
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
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-8 text-center">Quelle est la période souhaitée ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Prochain départ disponible", "Ramadan", "Vacances scolaires", "Période spécifique"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelections({ ...selections, period: opt })}
                    className={`p-6 rounded-lg border text-center transition-all duration-300
                      ${selections.period === opt 
                        ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold' 
                        : 'border-white/10 text-siyajj-muted-text hover:border-white/30 hover:text-siyajj-ivory'
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
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-8 text-center">Niveau de confort souhaité</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Essentielle", "Confort", "Prestige", "Signature"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelections({ ...selections, comfort: opt })}
                    className={`p-6 rounded-lg border text-center transition-all duration-300
                      ${selections.comfort === opt 
                        ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold' 
                        : 'border-white/10 text-siyajj-muted-text hover:border-white/30 hover:text-siyajj-ivory'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Services */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-8 text-center">Services complémentaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Hôtel face au Haram", 
                  "Transferts privés VIP", 
                  "Guide spirituel privé", 
                  "Vols en classe Affaires", 
                  "Assistance Famille", 
                  "Accompagnement Seniors"
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleServiceToggle(opt)}
                    className={`p-4 rounded-lg border text-left flex items-center justify-between transition-all duration-300
                      ${selections.services.includes(opt)
                        ? 'border-siyajj-luxury-gold bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold' 
                        : 'border-white/10 text-siyajj-muted-text hover:border-white/30 hover:text-siyajj-ivory'
                      }`}
                  >
                    <span>{opt}</span>
                    {selections.services.includes(opt) && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Contact */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-serif text-siyajj-ivory mb-8 text-center">Vos coordonnées</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label htmlFor="sm-nom" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Nom complet</label>
                  <Input id="sm-nom" placeholder="Votre nom" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="sm-tel" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Téléphone</label>
                  <Input id="sm-tel" type="tel" placeholder="Votre numéro" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="sm-email" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Email</label>
                  <Input id="sm-email" type="email" placeholder="Votre email" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Contact préféré</label>
                  <Select>
                    <SelectTrigger aria-label="Contact préféré" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12">
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="phone">Appel téléphonique</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6">
            <Button 
              variant="ghost" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="text-siyajj-muted-text hover:text-siyajj-ivory hover:bg-white/5"
            >
              Retour
            </Button>

            {step < 5 ? (
              <Button 
                onClick={() => setStep(Math.min(5, step + 1))}
                className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium px-8"
              >
                Continuer <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium px-8">
                    Terminer
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-siyajj-ivory max-w-md">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl text-siyajj-luxury-gold">✦</span>
                    </div>
                    <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">Votre projet SIYAJJ est prêt</h3>
                    <p className="text-siyajj-muted-text mb-8">Un conseiller a reçu vos préférences et vous contactera très rapidement pour affiner ce voyage sur-mesure.</p>
                    
                    <div className="bg-siyajj-black-ink border border-white/5 p-4 rounded-lg text-left mb-8 space-y-2 text-sm text-siyajj-ivory/80">
                      <div><span className="text-siyajj-muted-text mr-2">Voyageurs:</span> {selections.travelers || "-"}</div>
                      <div><span className="text-siyajj-muted-text mr-2">Période:</span> {selections.period || "-"}</div>
                      <div><span className="text-siyajj-muted-text mr-2">Confort:</span> {selections.comfort || "-"}</div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <Link href="/">
                        <Button className="w-full h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne">
                          Retour à l'accueil
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
