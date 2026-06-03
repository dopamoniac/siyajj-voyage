import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { CONTACT } from "@/data/content";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Nous Contacter
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Planifier Votre Voyage</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light max-w-2xl mx-auto">
          Nos conseillers spécialisés sont à votre écoute pour concevoir le pèlerinage qui répondra à vos attentes d'excellence et de spiritualité.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-1 space-y-6 md:space-y-8">
          <div className="glass-card p-6 md:p-10 rounded-3xl border border-siyajj-luxury-gold/20 shadow-2xl bg-black/40 backdrop-blur-xl">
            <h3 className="text-3xl font-serif text-siyajj-champagne mb-8 border-b border-siyajj-luxury-gold/20 pb-4">Contact Direct</h3>
            
            <div className="space-y-8">
              <a href={CONTACT.phoneHref} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-siyajj-luxury-gold/5 border border-siyajj-luxury-gold/30 flex items-center justify-center group-hover:bg-siyajj-luxury-gold/20 transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5 text-siyajj-luxury-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold/80 mb-1">Téléphone</div>
                  <div className="text-siyajj-ivory font-serif text-xl group-hover:text-siyajj-champagne transition-colors">{CONTACT.phoneDisplay}</div>
                </div>
              </a>
              
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-siyajj-luxury-gold/5 border border-siyajj-luxury-gold/30 flex items-center justify-center group-hover:bg-siyajj-luxury-gold/20 transition-all duration-300 shrink-0">
                  <MessageCircle className="w-5 h-5 text-siyajj-luxury-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold/80 mb-1">WhatsApp</div>
                  <div className="text-siyajj-ivory font-serif text-lg group-hover:text-siyajj-champagne transition-colors">{CONTACT.whatsappDisplay}</div>
                </div>
              </a>
              
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-siyajj-luxury-gold/5 border border-siyajj-luxury-gold/30 flex items-center justify-center group-hover:bg-siyajj-luxury-gold/20 transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5 text-siyajj-luxury-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold/80 mb-1">Email</div>
                  <div className="text-siyajj-ivory font-serif text-lg group-hover:text-siyajj-champagne transition-colors">{CONTACT.email}</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-siyajj-luxury-gold/5 border border-siyajj-luxury-gold/20 p-8 rounded-3xl text-center glass-card backdrop-blur-xl">
             <div className="w-10 h-10 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-4 border border-siyajj-luxury-gold/30">
               <span className="text-siyajj-luxury-gold text-lg">✦</span>
             </div>
             <h4 className="font-serif text-2xl text-siyajj-champagne mb-3">Notre Engagement</h4>
             <p className="text-base font-light text-siyajj-ivory/80 leading-relaxed">Un conseiller conciergerie vous recontacte rapidement pour étudier votre projet avec la plus grande attention.</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-siyajj-luxury-gold/30 shadow-2xl bg-black/60 backdrop-blur-2xl">
            <h3 className="text-4xl font-serif text-siyajj-champagne mb-10 border-b border-siyajj-luxury-gold/20 pb-6">Votre Projet</h3>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="contact-nom" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Nom complet</label>
                  <Input required id="contact-nom" placeholder="Votre nom" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-tel" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Téléphone</label>
                  <Input required id="contact-tel" type="tel" placeholder="Votre numéro" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Email</label>
                  <Input required id="contact-email" type="email" placeholder="Votre email" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-ville" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Sujet / Collection</label>
                  <Select required>
                    <SelectTrigger aria-label="Sujet" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus:ring-siyajj-luxury-gold/50 focus:border-siyajj-luxury-gold/50 font-light text-lg">
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-xl">
                      <SelectItem value="omra">Omra (Catalogue)</SelectItem>
                      <SelectItem value="sur-mesure">Omra Sur-Mesure</SelectItem>
                      <SelectItem value="vip">Signature VIP</SelectItem>
                      <SelectItem value="hajj">Hajj</SelectItem>
                      <SelectItem value="autre">Autre demande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Votre message / Précisions</label>
                <Textarea required id="contact-message" placeholder="Indiquez vos besoins spécifiques, le niveau de confort attendu, le nombre de voyageurs..." className="bg-black/50 border-white/10 text-siyajj-ivory min-h-[150px] rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg p-5" />
              </div>

              <Button type="submit" className="w-full h-16 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-sm font-bold mt-6 rounded-xl sweep-hover relative overflow-hidden shadow-[0_0_30px_rgba(200,154,70,0.3)]">
                <span className="relative z-10">Transmettre ma demande</span>
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-center p-1 rounded-2xl backdrop-blur-2xl">
          <DialogTitle className="sr-only">Confirmation</DialogTitle>
          <DialogDescription className="sr-only">Demande transmise avec succès</DialogDescription>
          <div className="bg-black/60 rounded-xl p-8 text-center border border-white/5">
            <div className="w-20 h-20 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(200,154,70,0.3)]">
              <span className="text-3xl text-siyajj-luxury-gold">✦</span>
            </div>
            <h3 className="font-serif text-3xl text-siyajj-champagne mb-4">Votre demande a bien été envoyée</h3>
            <p className="text-siyajj-ivory/80 font-light leading-relaxed mb-8">
              La Maison SIYAJJ a bien reçu votre message. Un conseiller de notre service conciergerie vous recontactera très prochainement pour affiner votre projet d'exception.
            </p>
            <Button onClick={() => setOpen(false)} variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black w-full h-14 rounded-lg font-bold uppercase tracking-widest text-xs sweep-hover relative overflow-hidden">
                <span className="relative z-10">Fermer</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
