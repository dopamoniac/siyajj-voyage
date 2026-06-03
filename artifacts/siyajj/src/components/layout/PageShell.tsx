import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/ui/media-frame";

const NAV_LINKS = [
  { href: "/nos-omras", label: "Nos Omras" },
  { href: "/collections", label: "Collections" },
  { href: "/sur-mesure", label: "Sur-Mesure" },
  { href: "/signature-vip", label: "Signature VIP" },
  { href: "/activites", label: "Activités" },
  { href: "/hajj", label: "Le Hajj" },
  { href: "/guides", label: "Guides" },
  { href: "/a-propos", label: "À Propos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-siyajj-deep-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo-siyajj-transparent.png`} 
            alt="SIYAJJ Renaissance" 
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <Link key={l.href} href={l.href} className="text-siyajj-ivory/80 hover:text-siyajj-luxury-gold transition-colors">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-siyajj-luxury-gold/30 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10 font-serif sweep-hover relative overflow-hidden">
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-siyajj-ivory p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-siyajj-deep-black/98 backdrop-blur-xl border-t border-siyajj-luxury-gold/10 overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                >
                  <Link
                    href={l.href}
                    className="block py-4 border-b border-white/5 font-serif text-2xl text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.06 * NAV_LINKS.length + 0.1 }}
                className="mt-8"
              >
                <Button asChild className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium sweep-hover relative overflow-hidden">
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-siyajj-black-ink border-t border-white/5 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo-siyajj-transparent.png`} 
              alt="SIYAJJ Renaissance" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-siyajj-muted-text text-sm leading-relaxed mb-6">
              Agence premium d'organisation Omra et Hajj depuis la France. L'excellence au service de votre spiritualité.
            </p>
            <div className="text-xs text-siyajj-luxury-gold uppercase tracking-widest font-display">
              En partenariat opérationnel avec<br/>Omra Factory
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-siyajj-ivory">Expériences</h4>
            <ul className="space-y-3 text-sm text-siyajj-muted-text">
              <li><Link href="/nos-omras" className="hover:text-siyajj-luxury-gold transition-colors">Nos Omras</Link></li>
              <li><Link href="/collections" className="hover:text-siyajj-luxury-gold transition-colors">Collections</Link></li>
              <li><Link href="/sur-mesure" className="hover:text-siyajj-luxury-gold transition-colors">Sur-Mesure</Link></li>
              <li><Link href="/signature-vip" className="hover:text-siyajj-luxury-gold transition-colors">Signature VIP</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-siyajj-ivory">Découvrir</h4>
            <ul className="space-y-3 text-sm text-siyajj-muted-text">
              <li><Link href="/activites" className="hover:text-siyajj-luxury-gold transition-colors">Activités & Expériences</Link></li>
              <li><Link href="/hajj" className="hover:text-siyajj-luxury-gold transition-colors">Le Hajj</Link></li>
              <li><Link href="/guides" className="hover:text-siyajj-luxury-gold transition-colors">Guides & Conseils</Link></li>
              <li><Link href="/a-propos" className="hover:text-siyajj-luxury-gold transition-colors">À Propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-siyajj-ivory">Contact</h4>
            <ul className="space-y-3 text-sm text-siyajj-muted-text">
              <li><Link href="/contact" className="hover:text-siyajj-luxury-gold transition-colors">Nous contacter</Link></li>
              <li><a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" className="hover:text-siyajj-luxury-gold transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-siyajj-muted-text">
          <p>© 2026 SIYAJJ Renaissance. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-siyajj-ivory transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-siyajj-ivory transition-colors">CGV</a>
            <a href="#" className="hover:text-siyajj-ivory transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" aria-label="Contacter un conseiller sur WhatsApp" className="w-14 h-14 bg-siyajj-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(200,154,70,0.3)] hover:scale-110 transition-transform group">
        <MessageCircle className="w-6 h-6 text-siyajj-deep-black group-hover:animate-pulse" />
      </a>
    </div>
  );
}

function MobileActionBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center gap-3 px-4 pt-3 bg-siyajj-deep-black/95 backdrop-blur-md border-t border-siyajj-luxury-gold/20"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button asChild className="flex-1 h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold rounded-lg sweep-hover relative overflow-hidden">
        <Link href="/contact"><span className="relative z-10">Demander un devis</span></Link>
      </Button>
      <a
        href="https://wa.me/33100000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter un conseiller sur WhatsApp"
        className="h-12 w-12 shrink-0 flex items-center justify-center rounded-lg border border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-[100dvh] flex flex-col bg-siyajj-deep-black text-siyajj-ivory font-sans selection:bg-siyajj-luxury-gold/30 relative">
      {/* Global Atmosphere Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MediaFrame slot="atmosphere" className="absolute inset-0 w-full h-full opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-siyajj-luxury-gold/5 via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiBmaWxsPSJyZ2JhKDIwMCwgMTU0LCA3MCwgMC4wNSkiLz48L3N2Zz4=')] bg-[length:48px_48px] opacity-30" />
      </div>

      {/* Scroll Progress Indicator */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-siyajj-luxury-gold z-[60] origin-left shadow-[0_0_10px_rgba(200,154,70,0.8)]"
          style={{ scaleX }}
        />
      )}
      
      <Header />
      
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
      <FloatingWhatsApp />
      <MobileActionBar />
    </div>
  );
}
