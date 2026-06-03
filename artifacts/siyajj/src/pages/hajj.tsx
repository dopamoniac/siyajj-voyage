import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Hajj() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Le Grand Pèlerinage</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Le Hajj avec SIYAJJ</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Le voyage d'une vie mérite une transparence totale et une préparation rigoureuse.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 max-w-6xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-xl border border-white/5">
          <h2 className="text-2xl font-serif text-siyajj-ivory mb-2">Préinscription Hajj 2026</h2>
          <p className="text-siyajj-muted-text mb-8 text-sm">Les modalités d'organisation du Hajj sont soumises aux directives du Ministère du Hajj. Laissez-nous vos coordonnées pour être informé en priorité.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input required aria-label="Nom & Prénom" placeholder="Nom & Prénom" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input required type="tel" aria-label="Téléphone" placeholder="Téléphone" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12" />
                <Input required type="email" aria-label="Email" placeholder="Email" className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory h-12" />
              </div>
              <Textarea aria-label="Message ou questions particulières" placeholder="Message ou questions particulières..." className="bg-siyajj-black-ink border-white/10 text-siyajj-ivory min-h-[100px] resize-none" />
            </div>
            
            <Button type="submit" className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium">
              Demander à être contacté
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-siyajj-ivory mb-8">Questions Fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-luxury-gold font-serif text-lg text-left">Pouvez-vous garantir un visa Hajj ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-muted-text leading-relaxed">
                Non. L'attribution des visas Hajj est strictement contrôlée par les autorités saoudiennes via la plateforme Nusuk. Aucune agence ne peut légalement garantir un visa Hajj en dehors de ce système officiel. SIYAJJ vous accompagne dans la préparation et les démarches autorisées.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-luxury-gold font-serif text-lg text-left">Comment se déroule la préparation ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-muted-text leading-relaxed">
                Nous proposons des séminaires Masterclass exclusifs pour nos pèlerins avant le départ. Ces sessions couvrent la préparation spirituelle, les rites du Hajj (Manâsik), ainsi que la logistique et l'endurance physique requise pour ce voyage sacré.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-luxury-gold font-serif text-lg text-left">Quel est le rôle de SIYAJJ pendant le Hajj ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-muted-text leading-relaxed">
                Notre équipe vous offre un accompagnement spirituel francophone, assure la liaison avec les prestataires saoudiens agréés pour optimiser votre confort (hôtels, tentes à Mina et Arafat), et vous guide pas à pas dans l'accomplissement des rites avec bienveillance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-luxury-gold font-serif text-lg text-left">Quels sont les délais d'inscription ?</AccordionTrigger>
              <AccordionContent className="text-siyajj-muted-text leading-relaxed">
                Les inscriptions pour le Hajj sont souvent annoncées quelques mois seulement avant le pèlerinage. En remplissant notre formulaire de pré-inscription, vous serez alerté immédiatement dès l'ouverture officielle des démarches sur Nusuk.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-siyajj-ivory">
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-siyajj-luxury-gold">✦</span>
            </div>
            <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">Demande enregistrée</h3>
            <p className="text-siyajj-muted-text mb-8">Votre intérêt pour le Hajj 2026 a bien été pris en compte. Un conseiller SIYAJJ vous contactera très prochainement pour vous informer des prochaines étapes.</p>
            <Button onClick={() => setOpen(false)} className="w-full h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne">
              Fermer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}