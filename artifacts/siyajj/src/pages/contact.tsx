import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Nous Contacter</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Planifier Votre Voyage</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Nos conseillers spécialisés sont à votre écoute pour concevoir le pèlerinage qui répondra à vos attentes de spiritualité et d'excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="glass-card p-8 rounded-xl border border-white/5">
            <h3 className="text-xl font-serif text-siyajj-ivory mb-6">Contact Direct</h3>
            
            <div className="space-y-6">
              <a href="tel:+33100000000" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-siyajj-warm-black border border-siyajj-luxury-gold/20 flex items-center justify-center group-hover:border-siyajj-luxury-gold transition-colors">
                  <Phone className="w-4 h-4 text-siyajj-luxury-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Téléphone</div>
                  <div className="text-siyajj-ivory font-medium group-hover:text-siyajj-luxury-gold transition-colors">+33 1 00 00 00 00</div>
                </div>
              </a>
              
              <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-siyajj-warm-black border border-siyajj-luxury-gold/20 flex items-center justify-center group-hover:border-siyajj-luxury-gold transition-colors">
                  <MessageCircle className="w-4 h-4 text-siyajj-luxury-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">WhatsApp</div>
                  <div className="text-siyajj-ivory font-medium group-hover:text-siyajj-luxury-gold transition-colors">Discuter avec un conseiller</div>
                </div>
              </a>
              
              <a href="mailto:contact@siyajj.fr" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-siyajj-warm-black border border-siyajj-luxury-gold/20 flex items-center justify-center group-hover:border-siyajj-luxury-gold transition-colors">
                  <Mail className="w-4 h-4 text-siyajj-luxury-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Email</div>
                  <div className="text-siyajj-ivory font-medium group-hover:text-siyajj-luxury-gold transition-colors">contact@siyajj.fr</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-siyajj-luxury-gold/5 border border-siyajj-luxury-gold/20 p-6 rounded-xl text-center">
             <h4 className="font-serif text-siyajj-luxury-gold mb-2">Notre Engagement</h4>
             <p className="text-sm text-siyajj-ivory/80">Un conseiller vous recontacte rapidement pour étudier votre projet.</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-card p-8 rounded-xl border border-white/5">
            <h3 className="text-2xl font-serif text-siyajj-ivory mb-8">Votre Projet</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-nom" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Nom complet</label>
                  <Input id="contact-nom" placeholder="Votre nom" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-tel" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Téléphone</label>
                  <Input id="contact-tel" type="tel" placeholder="Votre numéro" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Email</label>
                  <Input id="contact-email" type="email" placeholder="Votre email" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-ville" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Ville de résidence</label>
                  <Input id="contact-ville" placeholder="Ex: Paris" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Type de voyage</label>
                  <Select>
                    <SelectTrigger aria-label="Type de voyage" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12">
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent className="bg-siyajj-deep-black border-siyajj-luxury-gold/20 text-siyajj-ivory">
                      <SelectItem value="omra">Omra (Catalogue)</SelectItem>
                      <SelectItem value="sur-mesure">Omra Sur-Mesure</SelectItem>
                      <SelectItem value="vip">Signature VIP</SelectItem>
                      <SelectItem value="hajj">Hajj</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-periode" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Période souhaitée</label>
                  <Input id="contact-periode" placeholder="Ex: Ramadan 2026, Novembre..." className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-siyajj-muted-text">Votre message / Précisions</label>
                <Textarea id="contact-message" placeholder="Indiquez vos besoins spécifiques, le nombre de voyageurs, etc." className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory min-h-[120px] focus-visible:ring-siyajj-luxury-gold/50" />
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium mt-4">
                    Envoyer ma demande
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-siyajj-ivory mb-4">Demande envoyée avec succès</h3>
                    <p className="text-siyajj-muted-text mb-6">
                      Nous avons bien reçu votre demande de devis. Un conseiller SIYAJJ vous recontactera très prochainement pour affiner votre projet.
                    </p>
                    <Link href="/">
                      <Button variant="outline" className="border-siyajj-luxury-gold text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black w-full">
                        Retour à l'accueil
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
