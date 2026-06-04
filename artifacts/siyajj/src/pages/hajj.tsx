import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaFrame } from "@/components/ui/media-frame";
import { CONTACT } from "@/data/content";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { OrnamentBadge, SectionKicker, GoldDivider } from "@/components/ui/ornaments";

export default function Hajj() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 velvet-texture opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(199,154,59,0.08),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrnamentBadge className="mb-7">Le Grand Pèlerinage</OrnamentBadge>
            <h1 className="display-lg text-siyajj-ivory mb-5 drop-shadow-md">Le Hajj avec SIYAJJ</h1>
            <GoldDivider className="max-w-[200px] mx-auto mb-7" />
            <p className="body-lg text-siyajj-ivory/62 max-w-2xl mx-auto">
              Le voyage d'une vie mérite une transparence totale, une préparation rigoureuse et un accompagnement sans faille.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Info block ── */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-siyajj-luxury-gold/22">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative border border-siyajj-luxury-gold/18 shrink-0">
                <MediaFrame slot="madinahImage" className="absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black/70 via-transparent to-transparent" />
              </div>
              <div>
                <h2 className="section-title text-siyajj-champagne mb-5">L'Accomplissement du 5e Pilier</h2>
                <p className="body-lg text-siyajj-ivory/72 leading-relaxed mb-6">
                  L'organisation du Hajj requiert une expertise logistique et spirituelle de premier ordre. Avec des quotas limités et des procédures strictes mises en place par le Ministère saoudien via la plateforme Nusuk, l'accompagnement d'une agence de confiance est primordial.
                </p>
                <div className="flex items-start gap-3 p-4 bg-siyajj-luxury-gold/8 border border-siyajj-luxury-gold/25 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-siyajj-champagne shrink-0 mt-0.5" strokeWidth={1.4} />
                  <p className="body-md text-siyajj-champagne/90 leading-relaxed">
                    <strong>Disponibilités limitées :</strong> Nous ne pouvons garantir l'obtention d'un visa Hajj, qui dépend exclusivement du tirage au sort des autorités saoudiennes. Notre rôle est de vous préparer et de vous accompagner dès l'attribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + FAQ ── */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Pre-inscription form */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-siyajj-luxury-gold/22 shadow-2xl bg-black/55 backdrop-blur-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-siyajj-luxury-gold/4 blur-3xl rounded-full pointer-events-none" />
              <h2 className="card-title text-siyajj-champagne mb-3 relative z-10">Préinscription Hajj</h2>
              <p className="body-md text-siyajj-ivory/55 mb-7 leading-relaxed relative z-10">
                Laissez-nous vos coordonnées pour être informé en priorité de l'ouverture officielle et de l'organisation de nos séminaires de préparation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-2">
                  <label className="label-premium text-siyajj-luxury-gold">Nom Complet</label>
                  <Input
                    required aria-label="Nom & Prénom" placeholder="Votre nom & prénom"
                    className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="label-premium text-siyajj-luxury-gold">Téléphone</label>
                    <Input
                      required type="tel" aria-label="Téléphone" placeholder="Votre téléphone"
                      className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-premium text-siyajj-luxury-gold">Email</label>
                    <Input
                      required type="email" aria-label="Email" placeholder="Votre email"
                      className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="label-premium text-siyajj-luxury-gold">Message</label>
                  <Textarea
                    aria-label="Message ou questions particulières" placeholder="Message ou questions particulières..."
                    className="bg-black/45 border-white/8 text-siyajj-ivory min-h-[110px] resize-none rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28 p-4"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-13 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne label-premium rounded-xl sweep-hover relative overflow-hidden shadow-[0_0_24px_rgba(200,154,70,0.2)] mt-2"
                >
                  <span className="relative z-10">S'inscrire sur la liste d'attente</span>
                </Button>
              </form>
            </div>

            {/* FAQ */}
            <div className="flex flex-col justify-center">
              <SectionKicker className="justify-start mb-5">Ce que vous devez savoir</SectionKicker>
              <h2 className="card-title text-siyajj-ivory mb-8">Questions Fréquentes</h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  {
                    id: "item-1",
                    q: "Pouvez-vous garantir un visa Hajj ?",
                    a: "Non. L'attribution des visas Hajj est strictement contrôlée par les autorités saoudiennes via la plateforme officielle Nusuk. Aucune agence française ne peut légalement garantir un visa Hajj en dehors de ce système. SIYAJJ vous accompagne dans la préparation, la veille d'information et les démarches autorisées."
                  },
                  {
                    id: "item-2",
                    q: "Comment se déroule la préparation ?",
                    a: "Nous proposons des séminaires exclusifs \"Manâsik Masterclass\" pour nos pèlerins avant le départ. Ces sessions intensives couvrent la préparation spirituelle, l'apprentissage détaillé des rites du Hajj, ainsi que la logistique et l'endurance physique requise pour ce voyage exceptionnel."
                  },
                  {
                    id: "item-3",
                    q: "Quel est le rôle de SIYAJJ pendant le Hajj ?",
                    a: "En cas d'attribution via Nusuk, notre équipe sur place vous offre un accompagnement spirituel francophone de haut niveau, assure la liaison avec les prestataires saoudiens agréés pour optimiser votre confort, et vous guide pas à pas dans l'accomplissement des rites avec bienveillance."
                  },
                  {
                    id: "item-4",
                    q: "Quels sont les délais d'inscription ?",
                    a: "Les fenêtres d'inscription pour le Hajj sont souvent courtes et annoncées tardivement par les autorités. En remplissant notre formulaire de pré-inscription, vous intégrez notre liste prioritaire et serez alerté immédiatement dès l'ouverture officielle des démarches."
                  },
                ].map(({ id, q, a }) => (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="border border-white/8 bg-black/38 backdrop-blur-md rounded-xl px-6 data-[state=open]:border-siyajj-luxury-gold/28 transition-colors"
                  >
                    <AccordionTrigger className="text-siyajj-ivory hover:text-siyajj-champagne font-display text-base text-left py-5 hover:no-underline">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="body-md text-siyajj-ivory/65 leading-relaxed pb-5">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-10">
                <Button
                  asChild
                  variant="outline"
                  className="border-siyajj-luxury-gold/35 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black w-full md:w-auto h-12 px-8 rounded-lg label-premium sweep-hover relative overflow-hidden"
                >
                  <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Contacter un conseiller</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/25 text-siyajj-ivory p-1 rounded-2xl backdrop-blur-2xl max-w-sm">
          <DialogTitle className="sr-only">Confirmation</DialogTitle>
          <DialogDescription className="sr-only">Demande enregistrée pour le Hajj</DialogDescription>
          <div className="bg-black/55 rounded-xl p-8 text-center border border-white/5">
            <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/8 rounded-full flex items-center justify-center mb-6 border border-siyajj-luxury-gold/25 shadow-[0_0_28px_rgba(200,154,70,0.22)]">
              <CheckCircle2 className="w-7 h-7 text-siyajj-luxury-gold" strokeWidth={1.4} />
            </div>
            <h3 className="display-md text-siyajj-champagne mb-4">Demande enregistrée</h3>
            <p className="body-md text-siyajj-ivory/68 mb-8 leading-relaxed">
              Votre intérêt pour le Hajj a bien été pris en compte. Un conseiller SIYAJJ vous contactera très prochainement pour vous informer des prochaines étapes.
            </p>
            <Button
              onClick={() => setOpen(false)}
              className="w-full h-12 rounded-lg bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne label-premium sweep-hover relative overflow-hidden"
            >
              <span className="relative z-10">Fermer</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
