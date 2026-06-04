import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MediaFrame } from "@/components/ui/media-frame";
import { OrnamentBadge } from "@/components/ui/ornaments";
import { vipFeatures } from "@/data/content";

export default function SignatureVip() {
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="w-full min-h-screen bg-siyajj-deep-black pb-32">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 velvet-texture opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(15,76,76,0.15),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-siyajj-luxury-gold/10 blur-3xl rounded-full translate-x-12 translate-y-12 opacity-50 z-0"></div>
              <MediaFrame slot="signatureVip" className="emerald-glass aspect-[4/5] lg:aspect-[3/4] rounded-2xl border border-siyajj-luxury-gold/30 shadow-[0_0_50px_rgba(200,154,70,0.15)] relative z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-siyajj-deep-black via-transparent to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 border border-siyajj-luxury-gold/20 m-6 rounded-xl pointer-events-none z-20 transition-transform duration-700 group-hover:scale-105" />
              </MediaFrame>
            </div>
            
            <div className="order-1 lg:order-2">
              <OrnamentBadge className="mb-8">Service Conciergerie Privée</OrnamentBadge>
              <h1 className="display-lg text-siyajj-ivory mb-6 leading-tight drop-shadow-md">
                SIYAJJ Signature,<br/>
                <span className="font-display text-3xl md:text-4xl text-siyajj-champagne italic font-normal">l'Omra privée pensée dans chaque détail.</span>
              </h1>
              <p className="body-lg text-siyajj-ivory/65 mb-10 max-w-lg">
                Une expérience absolue conçue pour les couples, familles et VIP. Un accompagnement privé, des transferts exclusifs et les hôtels les plus prestigieux face au Haram pour un voyage spirituel empreint de sérénité totale.
              </p>

              <div className="glass-card border-siyajj-luxury-gold/20 p-8 rounded-2xl mb-12 backdrop-blur-md">
                <ul className="space-y-4">
                  {vipFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 flex items-center justify-center shrink-0 group-hover:bg-siyajj-luxury-gold/20 transition-colors">
                        <span className="text-siyajj-luxury-gold text-[10px]">✦</span>
                      </div>
                      <span className="body-md text-siyajj-ivory/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-14 px-10 bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold rounded-xl sweep-hover relative overflow-hidden shadow-[0_10px_30px_-8px_rgba(200,154,70,0.6)]">
                    <span className="relative z-10">Créer mon séjour Signature</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory backdrop-blur-2xl sm:max-w-[500px]">
                  <DialogTitle className="sr-only">Demande Privée</DialogTitle>
                  <DialogDescription className="sr-only">Formulaire de demande pour la création d'un séjour Signature privé</DialogDescription>
                  {!formSent ? (
                    <div className="p-4">
                      <h3 className="card-title text-siyajj-ivory mb-2">Demande Privée</h3>
                      <p className="body-md text-siyajj-ivory/55 mb-6">Notre service conciergerie vous recontactera sous 24h.</p>
                      
                      <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4">
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Nom complet</label>
                          <Input required placeholder="Votre nom" className="bg-black/50 border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold" />
                        </div>
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Email</label>
                          <Input required type="email" placeholder="Votre adresse email" className="bg-black/50 border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold" />
                        </div>
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Téléphone</label>
                          <Input required type="tel" placeholder="Votre numéro de téléphone" className="bg-black/50 border-white/10 text-siyajj-ivory h-12 focus-visible:ring-siyajj-luxury-gold" />
                        </div>
                        <div className="space-y-2">
                          <label className="label-premium text-siyajj-luxury-gold">Votre projet (optionnel)</label>
                          <textarea className="flex w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-siyajj-ivory shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-siyajj-luxury-gold disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]" placeholder="Précisez la composition de votre groupe et vos attentes..." />
                        </div>
                        <Button type="submit" className="w-full h-12 mt-4 bg-siyajj-luxury-gold text-siyajj-deep-black uppercase tracking-widest font-bold text-xs sweep-hover relative overflow-hidden">
                          <span className="relative z-10">Envoyer la demande</span>
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30">
                        <span className="text-3xl text-siyajj-luxury-gold">✦</span>
                      </div>
                      <h3 className="display-md text-siyajj-champagne mb-3">Demande transmise</h3>
                      <p className="body-md text-siyajj-ivory/65 mb-8">
                        Notre service conciergerie a bien reçu votre demande et vous contactera dans les plus brefs délais pour concevoir votre séjour Signature.
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}