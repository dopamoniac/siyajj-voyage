import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { ArrowRight, MessageCircle, Search } from "lucide-react";
import { CONTACT } from "@/data/content";

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const EXTENDED_FAQS = [
  ...faqs,
  { q: "Quelle est la durée minimale d'une Omra ?", a: "Une Omra peut techniquement s'accomplir en quelques heures. Dans le cadre d'un voyage organisé, les séjours durent généralement de 10 à 15 jours pour profiter pleinement du séjour à La Mecque et à Médine." },
  { q: "Puis-je choisir mon hôtel ?", a: "Oui, dans les Collections Signature et Renaissance, l'hôtel peut être sélectionné selon vos préférences. Dans les autres Collections, SIYAJJ sélectionne les meilleurs hôtels disponibles selon vos critères et votre budget." },
  { q: "Les femmes seules peuvent-elles partir en Omra ?", a: "Les femmes de moins de 45 ans doivent être accompagnées d'un Mahram. Les femmes de 45 ans et plus peuvent voyager avec un groupe organisé sous certaines conditions fixées par les autorités saoudiennes. SIYAJJ vous guide sur les démarches selon votre situation." },
  { q: "Est-il possible de personnaliser le programme ?", a: "Absolument. SIYAJJ est avant tout une agence sur-mesure. Contactez un conseiller pour construire un programme adapté à vos attentes, votre rythme et votre budget." },
  { q: "Comment est géré l'Ihrâm à l'aéroport ?", a: "L'état d'Ihrâm peut être pris à l'aéroport ou à bord de l'avion, avant le Miqat. L'accompagnateur SIYAJJ ou la Manâsik Masterclass vous guide sur le moment et la manière de le revêtir." },
  { q: "Y a-t-il un suivi après le voyage ?", a: "Oui, notre programme After-Omra Circle propose des sessions de suivi après le retour pour aider les pèlerins à ancrer les bienfaits du voyage dans leur quotidien. Il est inclus dans certaines Collections et disponible en option." },
  { q: "Qu'arrive-t-il si mon vol est annulé ou retardé ?", a: "SIYAJJ coordonne avec les compagnies aériennes partenaires en cas d'imprévus. Notre équipe reste disponible 24/7 pour gérer les situations d'urgence et minimiser leur impact sur votre voyage." },
  { q: "Combien de temps à l'avance faut-il réserver ?", a: "Nous recommandons de réserver 6 à 8 semaines à l'avance pour les périodes ordinaires, et 3 à 6 mois pour le Ramadan et les vacances scolaires. Plus vous réservez tôt, plus les disponibilités hôtelières sont avantageuses." },
];

const FAQ_CATEGORIES = ["Tous", "Visa & Documents", "Logistique", "Hôtels", "Rites", "Tarifs", "Familles & Seniors"];

export default function FaqPage() {
  const [search, setSearch] = useState("");

  const filtered = EXTENDED_FAQS.filter(
    faq =>
      search.trim() === "" ||
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-siyajj-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,76,76,0.35),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-3xl">
          <motion.div {...stagger(0.1)}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/10 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-8">
              Aide & Réponses
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-siyajj-ivory mb-6 leading-tight">
              Questions <span className="text-gold-gradient">fréquentes</span>
            </h1>
            <p className="text-siyajj-ivory/70 text-lg mb-10">
              Vous avez une question sur votre Omra, les rites, la logistique ou SIYAJJ ? Retrouvez les réponses ci-dessous.
            </p>
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-siyajj-ivory/40" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher une question..."
                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/5 border border-siyajj-luxury-gold/20 text-siyajj-ivory placeholder:text-siyajj-ivory/40 focus:outline-none focus:border-siyajj-luxury-gold/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-siyajj-deep-black">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {filtered.length === 0 ? (
            <motion.div {...stagger(0.1)} className="text-center py-10 md:py-20">
              <p className="text-siyajj-ivory/60 text-lg mb-6">Aucun résultat pour "{search}"</p>
              <p className="text-siyajj-ivory/40 text-sm mb-8">Posez votre question directement à un conseiller SIYAJJ.</p>
              <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold">
                <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Parler sur WhatsApp</span>
                </a>
              </Button>
            </motion.div>
          ) : (
            <Accordion type="single" collapsible>
              {filtered.map((faq, i) => (
                <motion.div key={i} {...stagger(0.05 + i * 0.03)}>
                  <AccordionItem value={`faq-${i}`} className="border-b border-siyajj-luxury-gold/10">
                    <AccordionTrigger className="text-left font-serif text-siyajj-ivory hover:text-siyajj-luxury-gold py-5 text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-siyajj-ivory/70 leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-siyajj-black-ink border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...stagger(0.1)} className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-serif text-siyajj-ivory mb-3">Vous n'avez pas trouvé votre réponse ?</h3>
              <p className="text-siyajj-ivory/65 text-sm mb-6 leading-relaxed">
                Un conseiller SIYAJJ répond à toutes vos questions — par téléphone, WhatsApp ou email.
              </p>
              <Button asChild className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold">
                <Link href="/contact">
                  <span className="flex items-center gap-2">Nous contacter <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Button>
            </motion.div>
            <motion.div {...stagger(0.2)} className="emerald-glass p-8 rounded-2xl">
              <h3 className="text-xl font-serif text-siyajj-ivory mb-3">Construire votre Omra</h3>
              <p className="text-siyajj-ivory/65 text-sm mb-6 leading-relaxed">
                Prêt à partir ? Utilisez notre constructeur de voyage pour définir votre projet et recevoir un devis personnalisé.
              </p>
              <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 uppercase tracking-widest text-xs">
                <Link href="/nos-omras">
                  <span className="flex items-center gap-2">Voir les départs <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
