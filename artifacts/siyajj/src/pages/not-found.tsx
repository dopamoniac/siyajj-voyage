import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle, ArrowRight } from "lucide-react";
import { OrnamentBadge } from "@/components/ui/ornaments";
import { motion } from "framer-motion";

export default function NotFound() {
  const quickLinks = [
    { href: "/nos-omras", label: "Nos Omras" },
    { href: "/collections", label: "Collections" },
    { href: "/hajj", label: "Hajj 2027" },
    { href: "/a-propos", label: "Notre Maison" },
  ];

  return (
    <div className="min-h-[82vh] w-full flex items-center justify-center relative overflow-hidden px-6 py-24">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 velvet-texture pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(15,76,76,0.12),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(199,154,59,0.06),_transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-lg mx-auto text-center relative z-10"
      >
        {/* Ghost 404 watermark */}
        <div className="relative select-none pointer-events-none mb-[-4rem] md:mb-[-6rem]" aria-hidden="true">
          <div className="font-display text-[9rem] md:text-[13rem] leading-none text-siyajj-luxury-gold/[0.055] flex items-center justify-center">
            404
          </div>
        </div>

        <div className="relative z-10">
          <OrnamentBadge className="mb-7">Page introuvable</OrnamentBadge>
          <h1 className="display-md text-siyajj-ivory mb-5">
            Cette page s'est égarée
          </h1>
          <p className="body-lg text-siyajj-muted-text mb-10 max-w-sm mx-auto leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée. Laissez-nous vous guider vers votre prochaine étape spirituelle.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button asChild className="h-12 px-7 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne label-premium sweep-hover relative overflow-hidden shadow-[0_0_24px_rgba(200,154,70,0.22)]">
            <Link href="/">
              <Home className="w-3.5 h-3.5 mr-2 relative z-10" strokeWidth={1.4} />
              <span className="relative z-10">Retour à l'accueil</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-7 border-siyajj-luxury-gold/28 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/8 label-premium">
            <Link href="/contact">
              <MessageCircle className="w-3.5 h-3.5 mr-2" strokeWidth={1.4} />
              <span>Nous contacter</span>
            </Link>
          </Button>
        </div>

        {/* Quick nav */}
        <div className="border-t border-siyajj-luxury-gold/12 pt-8">
          <p className="label-premium text-siyajj-ivory/35 mb-5">Explorer le site</p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card rounded-full px-4 py-2 label-premium text-siyajj-ivory/52 hover:text-siyajj-luxury-gold hover:border-siyajj-luxury-gold/35 transition-all duration-200 flex items-center gap-1.5"
              >
                {link.label}
                <ArrowRight className="w-2.5 h-2.5" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
