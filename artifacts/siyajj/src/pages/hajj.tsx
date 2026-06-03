import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import { CONTACT } from "@/data/content";
import { AlertCircle } from "lucide-react";

export default function Hajj() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 relative min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20 relative z-20">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Le Grand Pèlerinage
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Le Hajj avec SIYAJJ</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light max-w-2xl mx-auto">
          Le voyage d'une vie mérite une transparence totale, une préparation rigoureuse et un accompagnement sans faille.
        </p>
      </div>

      {/* Info block */}
      <div className="glass-card mb-10 md:mb-20 max-w-5xl mx-auto rounded-3xl p-6 md:p-12 border-siyajj-luxury-gold/30">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative border border-siyajj-luxury-gold/20">
            <MediaFrame slot="madinahImage" className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-transparent to-transparent" />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-serif text-siyajj-champagne mb-4">L'Accomplissement du 5e Pilier</h2>
            <p className="text-siyajj-ivory/80 leading-relaxed mb-6 font-light">
              L'organisation du Hajj requiert une expertise logistique et spirituelle de premier ordre. Avec des quotas limités et des procédures strictes mises en place par le Ministère saoudien via la plateforme Nusuk, l'accompagnement d'une agence de confiance est primordial.
            </p>
            <div className="flex items-center gap-3 p-4 bg-siyajj-luxury-gold/10 border border-siyajj-luxury-gold/30 rounded-xl text-siyajj-champagne">
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <p className="text-sm"><strong>Disponibilités limitées :</strong> Nous ne pouvons garantir l'obtention d'un visa Hajj, qui dépend exclusivement du tirage au sort des autorités saoudiennes. Notre rôle est de vous préparer et de vous accompagner dès l'attribution.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 max-w-6xl mx-auto relative z-20">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-siyajj-luxury-gold/30 shadow-2xl relative overflow-hidden bg-black/60 backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-siyajj-luxury-gold/5 blur-3xl rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-serif text-siyajj-champagne mb-3 relative z-10">Préinscription Hajj</h2>
          <p className="text-siyajj-ivory/60 mb-8 text-sm font-light leading-relaxed relative z-10">
            Laissez-nous vos coordonnées pour être informé en priorité de l'ouverture officielle et de l'organisation de nos séminaires de préparation.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-5">
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Nom Complet</label>
                 <Input required aria-label="Nom & Prénom" placeholder="Votre nom & prénom" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Téléphone</label>
                   <Input required type="tel" aria-label="Téléphone" placeholder="Votre téléphone" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Email</label>
                   <Input required type="email" aria-label="Email" placeholder="Votre adresse email" className="bg-black/50 border-white/10 text-siyajj-ivory h-14 rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-lg" />
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold ml-1">Message</label>
                 <Textarea aria-label="Message ou questions particulières" placeholder="Message ou questions particulières..." className="bg-black/50 border-white/10 text-siyajj-ivory min-h-[120px] resize-none rounded-lg focus-visible:ring-siyajj-luxury-gold/50 focus-visible:border-siyajj-luxury-gold/50 font-light text-base p-4" />
              </div>
            </div>
            
            <Button type="submit" className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold rounded-lg sweep-hover relative overflow-hidden shadow-[0_0_20px_rgba(200,154,70,0.2)] mt-4">
              <span className="relative z-10">S'inscrire sur la liste d'attente</span>
            </Button>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-serif text-siyajj-ivory mb-8">Questions Fréquentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl px-6 data-[state=open]:border-siyajj-luxury-gold/30 transition-colors">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-champagne font-serif text-lg text-left py-6 hover:no-underline">Pouvez-vous garantir un visa Hajj ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-ivory/70 leading-relaxed font-light pb-6">
                Non. L'attribution des visas Hajj est strictement contrôlée par les autorités saoudiennes via la plateforme officielle Nusuk. Aucune agence française ne peut légalement garantir un visa Hajj en dehors de ce système. SIYAJJ vous accompagne dans la préparation, la veille d'information et les démarches autorisées.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl px-6 data-[state=open]:border-siyajj-luxury-gold/30 transition-colors">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-champagne font-serif text-lg text-left py-6 hover:no-underline">Comment se déroule la préparation ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-ivory/70 leading-relaxed font-light pb-6">
                Nous proposons des séminaires exclusifs "Manâsik Masterclass" pour nos pèlerins avant le départ. Ces sessions intensives couvrent la préparation spirituelle, l'apprentissage détaillé des rites du Hajj, ainsi que la logistique et l'endurance physique requise pour ce voyage exceptionnel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl px-6 data-[state=open]:border-siyajj-luxury-gold/30 transition-colors">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-champagne font-serif text-lg text-left py-6 hover:no-underline">Quel est le rôle de SIYAJJ pendant le Hajj ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-ivory/70 leading-relaxed font-light pb-6">
                En cas d'attribution via Nusuk, notre équipe sur place vous offre un accompagnement spirituel francophone de haut niveau, assure la liaison avec les prestataires saoudiens agréés pour optimiser votre confort (hôtels à Makkah, tentes premium à Mina et Arafat), et vous guide pas à pas dans l'accomplissement des rites avec bienveillance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl px-6 data-[state=open]:border-siyajj-luxury-gold/30 transition-colors">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-champagne font-serif text-lg text-left py-6 hover:no-underline">Quels sont les délais d'inscription ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-ivory/70 leading-relaxed font-light pb-6">
                Les fenêtres d'inscription pour le Hajj sont souvent courtes et annoncées tardivement par les autorités. En remplissant notre formulaire de pré-inscription, vous intégrez notre liste prioritaire et serez alerté immédiatement dès l'ouverture officielle des démarches.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 flex justify-center lg:justify-start">
             <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black w-full md:w-auto h-14 px-8 rounded-lg font-bold uppercase tracking-widest text-xs sweep-hover relative overflow-hidden">
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Contacter un conseiller</span>
                </a>
              </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/30 text-siyajj-ivory p-1 rounded-2xl backdrop-blur-2xl">
          <DialogTitle className="sr-only">Confirmation</DialogTitle>
          <DialogDescription className="sr-only">Demande enregistrée pour le Hajj</DialogDescription>
          <div className="bg-black/60 rounded-xl p-8 text-center border border-white/5">
            <div className="w-20 h-20 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30 shadow-[0_0_30px_rgba(200,154,70,0.3)]">
              <span className="text-3xl text-siyajj-luxury-gold">✦</span>
            </div>
            <h3 className="text-3xl font-serif text-siyajj-champagne mb-4">Demande enregistrée</h3>
            <p className="text-siyajj-ivory/70 mb-10 font-light leading-relaxed">
              Votre intérêt pour le Hajj a bien été pris en compte. Un conseiller SIYAJJ vous contactera très prochainement pour vous informer des prochaines étapes et vous intégrer à notre liste prioritaire.
            </p>
            <Button onClick={() => setOpen(false)} className="w-full h-14 rounded-lg bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne font-bold uppercase tracking-widest text-xs sweep-hover relative overflow-hidden">
              <span className="relative z-10">Fermer</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
