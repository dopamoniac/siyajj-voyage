import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { CONTACT } from "@/data/content";
import { OrnamentBadge, GoldDivider } from "@/components/ui/ornaments";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  const contactInfo = [
    { href: CONTACT.phoneHref, label: "Téléphone", value: CONTACT.phoneDisplay, icon: Phone },
    { href: CONTACT.whatsappHref, label: "WhatsApp", value: CONTACT.whatsappDisplay, icon: MessageCircle, external: true },
    { href: `mailto:${CONTACT.email}`, label: "Email", value: CONTACT.email, icon: Mail },
  ] as const;

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 velvet-texture opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(15,76,42,0.10),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <OrnamentBadge className="mb-7">Nous Contacter</OrnamentBadge>
            <h1 className="display-lg text-siyajj-ivory mb-5 drop-shadow-md">Planifier Votre Voyage</h1>
            <GoldDivider className="max-w-[200px] mx-auto mb-7" />
            <p className="body-lg text-siyajj-ivory/60 max-w-2xl mx-auto">
              Nos conseillers spécialisés sont à votre écoute pour concevoir le pèlerinage qui répondra à vos attentes d'excellence et de spiritualité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Layout ── */}
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Left: contact info + trust block */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-siyajj-luxury-gold/18 shadow-xl backdrop-blur-xl">
              <h3 className="card-title text-siyajj-champagne mb-6 pb-4 border-b border-siyajj-luxury-gold/15">Contact Direct</h3>
              <div className="space-y-6">
                {contactInfo.map(({ href, label, value, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...("external" in { href, label, value, icon: Icon, external } && external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-siyajj-luxury-gold/5 border border-siyajj-luxury-gold/22 flex items-center justify-center group-hover:bg-siyajj-luxury-gold/16 transition-all duration-300 shrink-0">
                      <Icon className="w-4 h-4 text-siyajj-luxury-gold" strokeWidth={1.4} />
                    </div>
                    <div>
                      <div className="label-premium text-siyajj-luxury-gold/68 mb-1">{label}</div>
                      <div className="font-display text-lg text-siyajj-ivory group-hover:text-siyajj-champagne transition-colors leading-tight">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-7 rounded-3xl text-center border border-siyajj-luxury-gold/12 backdrop-blur-xl">
              <div className="w-10 h-10 mx-auto bg-siyajj-luxury-gold/8 rounded-full flex items-center justify-center mb-4 border border-siyajj-luxury-gold/22">
                <span className="text-siyajj-luxury-gold text-base leading-none">✦</span>
              </div>
              <h4 className="card-title text-siyajj-champagne mb-3">Notre Engagement</h4>
              <p className="body-md text-siyajj-ivory/68 leading-relaxed">
                Un conseiller conciergerie vous recontacte rapidement pour étudier votre projet avec la plus grande attention.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-siyajj-luxury-gold/20 shadow-2xl bg-black/55 backdrop-blur-2xl">
              <h3 className="card-title text-siyajj-champagne mb-8 pb-5 border-b border-siyajj-luxury-gold/15">Votre Projet</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contact-nom" className="label-premium text-siyajj-luxury-gold">Nom complet</label>
                    <Input
                      required id="contact-nom" type="text" placeholder="Votre nom"
                      className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-tel" className="label-premium text-siyajj-luxury-gold">Téléphone</label>
                    <Input
                      required id="contact-tel" type="tel" placeholder="Votre numéro"
                      className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="label-premium text-siyajj-luxury-gold">Email</label>
                    <Input
                      required id="contact-email" type="email" placeholder="Votre email"
                      className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-sujet" className="label-premium text-siyajj-luxury-gold">Sujet / Collection</label>
                    <Select required>
                      <SelectTrigger aria-label="Sujet" className="bg-black/45 border-white/8 text-siyajj-ivory h-13 rounded-xl focus:ring-siyajj-luxury-gold/38 focus:border-siyajj-luxury-gold/42">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent className="bg-siyajj-charcoal border-siyajj-luxury-gold/25 text-siyajj-ivory backdrop-blur-xl">
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
                  <label htmlFor="contact-message" className="label-premium text-siyajj-luxury-gold">Votre message</label>
                  <Textarea
                    required id="contact-message"
                    placeholder="Indiquez vos besoins spécifiques, le niveau de confort attendu, le nombre de voyageurs..."
                    className="bg-black/45 border-white/8 text-siyajj-ivory min-h-[140px] rounded-xl focus-visible:ring-siyajj-luxury-gold/38 focus-visible:border-siyajj-luxury-gold/42 placeholder:text-siyajj-ivory/28 p-4 transition-all duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne label-premium mt-2 rounded-xl sweep-hover relative overflow-hidden shadow-[0_0_28px_rgba(200,154,70,0.25)]"
                >
                  <span className="relative z-10">Transmettre ma demande</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-siyajj-warm-black border border-siyajj-luxury-gold/25 text-center p-1 rounded-2xl backdrop-blur-2xl max-w-sm">
          <DialogTitle className="sr-only">Confirmation</DialogTitle>
          <DialogDescription className="sr-only">Demande transmise avec succès</DialogDescription>
          <div className="bg-black/55 rounded-xl p-8 text-center border border-white/5">
            <div className="w-16 h-16 rounded-full bg-siyajj-luxury-gold/8 border border-siyajj-luxury-gold/25 flex items-center justify-center mx-auto mb-6 shadow-[0_0_28px_rgba(200,154,70,0.22)]">
              <CheckCircle2 className="w-7 h-7 text-siyajj-luxury-gold" strokeWidth={1.4} />
            </div>
            <h3 className="display-md text-siyajj-champagne mb-4">Demande envoyée</h3>
            <p className="body-md text-siyajj-ivory/70 leading-relaxed mb-8">
              La Maison SIYAJJ a bien reçu votre message. Un conseiller conciergerie vous recontactera très prochainement pour affiner votre projet d'exception.
            </p>
            <Button
              onClick={() => setOpen(false)}
              variant="outline"
              className="border-siyajj-luxury-gold/35 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black w-full h-12 rounded-lg label-premium sweep-hover relative overflow-hidden"
            >
              <span className="relative z-10">Fermer</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
