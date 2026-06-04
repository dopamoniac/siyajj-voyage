import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrnamentBadge, GoldDivider } from "@/components/ui/ornaments";
import { mediaConfig } from "@/data/media";
import { CONTACT } from "@/data/content";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const SERVICES = [
  { title: "Vols directs & correspondances", desc: "Paris CDG, Orly, Lyon, Marseille, Bruxelles — toutes destinations." },
  { title: "Classes économique, affaires, première", desc: "Nous sélectionnons la meilleure option selon votre confort et budget." },
  { title: "Groupes & familles", desc: "Tarifs négociés pour les départs groupés et les familles nombreuses." },
  { title: "Flexibilité & modifications", desc: "Billets flexibles avec possibilité de modification ou remboursement." },
  { title: "Assistance avant le départ", desc: "Vérification des documents, check-in accompagné, conseils bagages." },
  { title: "Vols spéciaux Omra & Hajj", desc: "Coordination avec nos programmes de pèlerinage pour des vols synchronisés." },
];

export default function BilletsAvion() {
  return (
    <div className="w-full overflow-x-hidden bg-siyajj-deep-black text-siyajj-ivory">

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end overflow-hidden">
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          <img
            src={mediaConfig.billetsAvion}
            alt="Billets avion SIYAJJ Voyages"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          {/* Gradient overlays — clean for both mobile & desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/55 to-siyajj-deep-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-siyajj-deep-black/60 via-transparent to-transparent md:to-siyajj-deep-black/20" />
        </div>

        {/* Hero content — anchored bottom */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 pb-12 md:pb-16 pt-24">
          <motion.div {...fade(0)}>
            <OrnamentBadge className="mb-5">
              <Plane className="w-3 h-3 mr-1.5 inline-block" strokeWidth={1.4} />
              Billets Avion
            </OrnamentBadge>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="display-lg text-siyajj-ivory mb-4 max-w-2xl drop-shadow-lg">
            Votre vol, réservé<br />
            <span className="text-gold-gradient">avec sérénité.</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="body-lg text-siyajj-ivory/75 max-w-xl mb-8">
            Billets avion depuis la France et la Belgique vers toutes destinations — accompagnement personnalisé, meilleurs tarifs.
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="h-13 px-8 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 rounded-lg uppercase tracking-[0.1em] text-[11px] font-bold">
              <Link href="/contact?service=billets-avion">
                <span className="flex items-center gap-2">
                  Demander un devis <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-13 px-8 border-siyajj-luxury-gold/35 text-siyajj-ivory hover:text-siyajj-luxury-gold hover:bg-white/5 rounded-lg uppercase tracking-[0.1em] text-[11px] font-medium">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.4} /> WhatsApp
                </span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-siyajj-black-ink border-t border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fade(0)} className="text-center max-w-2xl mx-auto mb-14">
            <OrnamentBadge className="mb-5">Ce que nous faisons</OrnamentBadge>
            <h2 className="section-title text-siyajj-ivory mb-4">Un service complet de réservation</h2>
            <GoldDivider className="max-w-xs mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="glass-card rounded-2xl p-6 border border-siyajj-luxury-gold/15 hover:border-siyajj-luxury-gold/35 transition-colors group"
              >
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-siyajj-luxury-gold shrink-0 mt-0.5" strokeWidth={1.4} />
                  <div>
                    <h3 className="card-title text-siyajj-champagne mb-1.5 group-hover:text-siyajj-luxury-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="body-md text-siyajj-ivory/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-16 bg-siyajj-deep-black border-t border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-siyajj-ivory mb-4">Prêt à réserver votre vol ?</h2>
            <p className="body-lg text-siyajj-ivory/60 mb-8">
              Contactez un conseiller SIYAJJ — par téléphone, WhatsApp ou formulaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="h-13 px-8 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-[0.1em] text-[11px] font-bold">
                <Link href="/contact?service=billets-avion">
                  <span className="flex items-center gap-2">Demander un devis <ArrowRight className="w-4 h-4" strokeWidth={1.4} /></span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-13 px-8 border-siyajj-luxury-gold/35 text-siyajj-ivory hover:text-siyajj-luxury-gold uppercase tracking-[0.1em] text-[11px]">
                <a href={CONTACT.phoneHref} className="flex items-center gap-2">
                  <Phone className="w-4 h-4" strokeWidth={1.4} /> {CONTACT.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
