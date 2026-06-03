import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo-siyajj-transparent.png`} 
            alt="SIYAJJ Renaissance" 
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <Link key={l.href} href={l.href} className="text-siyajj-ivory/80 hover:text-siyajj-luxury-gold transition-colors">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="outline" className="border-siyajj-luxury-gold/30 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10 font-serif">
              Contactez-nous
            </Button>
          </Link>
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
                <Link href="/contact">
                  <Button className="w-full h-14 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium">
                    Contactez-nous
                  </Button>
                </Link>
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
    <footer className="bg-siyajj-black-ink border-t border-white/5 pt-20 pb-10">
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

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-siyajj-deep-black text-siyajj-ivory font-sans selection:bg-siyajj-luxury-gold/30">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
