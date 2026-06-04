import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, Phone, ChevronDown, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/ui/media-frame";
import { useTheme } from "@/contexts/theme";

interface NavItem {
  href: string;
  label: string;
  desc?: string;
}

interface NavGroup {
  label: string;
  href?: string;
  items?: NavItem[];
}

const NAV_STRUCTURE: NavGroup[] = [
  {
    label: "Billets",
    items: [
      { href: "/contact?service=billets-avion", label: "Billets Avion", desc: "Vols depuis la France vers toutes destinations" },
      { href: "/contact?service=billets-bateau", label: "Billets Bateau", desc: "Traversées et liaisons maritimes" },
    ],
  },
  {
    label: "Omra & Hajj",
    items: [
      { href: "/nos-omras", label: "Toutes les Omras", desc: "Nos départs disponibles" },
      { href: "/nos-omras/ramadan", label: "Omra Ramadan", desc: "Le mois sacré aux Lieux Saints" },
      { href: "/nos-omras/prestige", label: "Omra Prestige", desc: "L'excellence hôtelière" },
      { href: "/nos-omras/famille", label: "Omra Famille", desc: "Un voyage spirituel en famille" },
      { href: "/collections", label: "Nos Collections", desc: "Essentielle, Confort, Prestige, Signature" },
      { href: "/hajj", label: "Hajj", desc: "Le Grand Pèlerinage organisé" },
      { href: "/formations", label: "Formations", desc: "Préparer votre pèlerinage" },
      { href: "/activites", label: "Activités sur place", desc: "Enrichir votre séjour spirituel" },
    ],
  },
  { label: "Voyages organisés", href: "/contact?service=voyages-organises" },
  { label: "Séjours sur mesure", href: "/sur-mesure" },
  {
    label: "Services",
    items: [
      { href: "/signature-vip", label: "Signature VIP", desc: "Conciergerie & accompagnement privé" },
      { href: "/guides", label: "Guides pratiques", desc: "Conseils et ressources voyage" },
      { href: "/avis", label: "Avis & témoignages", desc: "+15 000 voyageurs accompagnés" },
      { href: "/faq", label: "FAQ", desc: "Questions fréquentes" },
    ],
  },
  {
    label: "À propos",
    items: [
      { href: "/a-propos", label: "Qui sommes-nous", desc: "L'histoire et la vision de SIYAJJ" },
      { href: "/a-propos/methode", label: "Notre méthode", desc: "Comment nous travaillons" },
      { href: "/a-propos/omra-factory", label: "Partenariat Omra Factory", desc: "Notre partenaire opérationnel" },
      { href: "/contact", label: "Nous contacter", desc: "Parlons de votre projet" },
    ],
  },
];

const PHONE_DISPLAY = "+33 1 84 80 00 00";
const PHONE_HREF = "tel:+33184800000";
const WHATSAPP_HREF = "https://wa.me/33100000000";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isActive = group.items?.some(item => location.startsWith(item.href)) || location === group.href;

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  if (!group.items) {
    return (
      <Link
        href={group.href ?? "/"}
        className={`whitespace-nowrap transition-colors ${isActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory/80 hover:text-siyajj-luxury-gold"}`}
      >
        {group.label}
      </Link>
    );
  }

  const isWide = group.items.length > 5;

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`flex items-center gap-1 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45 rounded focus-ring-managed ${isActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory/80 hover:text-siyajj-luxury-gold"}`}
      >
        {group.label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-full left-0 mt-3 z-[200] ${isWide ? "w-[440px]" : "w-60"} bg-siyajj-deep-black/97 backdrop-blur-2xl border border-siyajj-luxury-gold/30 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.75),0_0_0_1px_rgba(200,154,70,0.08)] overflow-hidden`}
          >
            <div className={`p-2 ${isWide ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"}`}>
              {group.items.map((item) => {
                const itemActive = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2.5 rounded-xl transition-colors group ${itemActive ? "bg-siyajj-luxury-gold/15" : "hover:bg-siyajj-luxury-gold/10"}`}
                  >
                    <div className={`text-sm font-serif leading-snug transition-colors ${itemActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory group-hover:text-siyajj-luxury-gold"}`}>
                      {item.label}
                    </div>
                    {item.desc && (
                      <div className="body-md text-siyajj-ivory/42 text-xs mt-0.5 leading-snug">{item.desc}</div>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [location] = useLocation();
  const isActive = group.items?.some(item => location.startsWith(item.href)) || location === group.href;

  if (!group.items) {
    return (
      <Link
        href={group.href ?? "/"}
        onClick={onNavigate}
        className={`block py-4 border-b border-white/5 font-serif text-2xl transition-colors ${isActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory hover:text-siyajj-luxury-gold"}`}
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-siyajj-luxury-gold/15">
      <button
        className={`flex items-center justify-between w-full py-4 font-serif text-2xl text-left transition-colors ${isActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory"}`}
        onClick={() => setExpanded((v) => !v)}
      >
        {group.label}
        <ChevronDown className={`w-5 h-5 text-siyajj-luxury-gold transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 flex flex-col">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="py-2 body-md text-siyajj-ivory/68 hover:text-siyajj-luxury-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
      className={`w-8 h-8 rounded-full flex items-center justify-center border border-siyajj-luxury-gold/30 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/15 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45 focus-ring-managed ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5" />
      ) : (
        <Moon className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${scrolled ? "bg-siyajj-deep-black/96 border-b border-siyajj-luxury-gold/22 shadow-[0_4px_28px_rgba(0,0,0,0.5)]" : "bg-siyajj-deep-black/80 border-b border-siyajj-luxury-gold/14"}`}>
      {/* Desktop + tablet header */}
      <div className={`container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[4.5rem]" : "h-[4.5rem] lg:h-32"}`}>
        <Link href="/" onClick={scrollToTop} className="flex items-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo-siyajj-voyages-horizontal-transparent.png`}
            alt="SIYAJJ Voyages"
            className={`w-auto object-contain transition-all duration-500 logo-dark-enhance ${scrolled ? "h-10 md:h-11" : "h-11 md:h-14 lg:h-[4.5rem] xl:h-20"}`}
          />
        </Link>

        {/* Desktop nav with dropdowns */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[12.5px] xl:text-[13px] font-medium tracking-wide">
          {NAV_STRUCTURE.map((group) => (
            <DesktopDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <a href={PHONE_HREF} className="hidden xl:flex items-center gap-2 text-sm text-siyajj-ivory/75 hover:text-siyajj-luxury-gold transition-colors whitespace-nowrap">
            <Phone className="h-4 w-4 text-siyajj-luxury-gold shrink-0" />
            {PHONE_DISPLAY}
          </a>
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 font-medium uppercase tracking-widest text-[11px] sweep-hover relative overflow-hidden">
            <Link href="/contact"><span className="relative z-10">Demander un devis</span></Link>
          </Button>
        </div>

        {/* Tablet */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-siyajj-ivory/75 hover:text-siyajj-luxury-gold transition-colors">
            <Phone className="h-4 w-4 text-siyajj-luxury-gold" />
          </a>
          <ThemeToggle />
          <Button asChild size="sm" className="bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 font-medium uppercase tracking-widest text-[10px] sweep-hover relative overflow-hidden">
            <Link href="/contact"><span className="relative z-10">Devis</span></Link>
          </Button>
          <button className="text-siyajj-ivory/85 hover:text-siyajj-ivory p-2 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45 focus-ring-managed" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fermer" : "Menu"} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile — toggle + burger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-siyajj-ivory/85 hover:text-siyajj-ivory p-2 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45 focus-ring-managed" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fermer" : "Menu"} aria-expanded={open}>
            {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet full-screen menu with accordions */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:hidden fixed inset-x-0 top-[4.5rem] bottom-0 bg-siyajj-deep-black/98 backdrop-blur-xl border-t border-siyajj-luxury-gold/20 overflow-y-auto z-50"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-0">
              {/* Accueil */}
              <Link
                href="/"
                onClick={() => { scrollToTop(); closeMenu(); }}
                className="block py-4 border-b border-siyajj-luxury-gold/20 font-serif text-2xl text-siyajj-luxury-gold hover:text-siyajj-champagne transition-colors"
              >
                Accueil
              </Link>

              {NAV_STRUCTURE.map((group) => (
                <MobileAccordion key={group.label} group={group} onNavigate={closeMenu} />
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="mt-8 space-y-3"
              >
                <Button asChild className="w-full h-14 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-semibold sweep-hover relative overflow-hidden">
                  <Link href="/contact" onClick={closeMenu}>
                    <span className="relative z-10">Demander un devis</span>
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <a href={PHONE_HREF} className="flex items-center justify-center gap-2 h-12 rounded-lg border border-siyajj-luxury-gold/30 text-siyajj-ivory/85 text-sm hover:bg-siyajj-luxury-gold/10 transition-colors">
                    <Phone className="h-4 w-4 text-siyajj-luxury-gold" strokeWidth={1.4} /> Appeler
                  </a>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 rounded-lg border border-siyajj-luxury-gold/30 text-siyajj-ivory/85 text-sm hover:bg-siyajj-luxury-gold/10 transition-colors">
                    <MessageCircle className="h-4 w-4 text-siyajj-luxury-gold" strokeWidth={1.4} /> WhatsApp
                  </a>
                </div>
              </motion.div>

              <div className="mt-8 pt-6 border-t border-siyajj-luxury-gold/12 text-center">
                <p className="tagline-script text-siyajj-luxury-gold/45 text-sm">La Renaissance du Voyage</p>
              </div>
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
          <div className="col-span-1">
            <Link href="/" onClick={scrollToTop}>
              <img src={`${import.meta.env.BASE_URL}assets/logo-siyajj-voyages-horizontal-transparent.png`} alt="SIYAJJ Voyages" className="h-14 w-auto object-contain mb-4 logo-dark-enhance" />
            </Link>
            <p className="tagline-script text-siyajj-luxury-gold/55 mb-5">La Renaissance du Voyage</p>
            <p className="text-siyajj-muted-text text-sm leading-relaxed mb-6">
              Agence premium de voyage depuis la France. Billets avion & bateau, Omra & Hajj, voyages organisés et séjours sur mesure.
            </p>
            <div className="text-[10px] label-premium text-siyajj-luxury-gold/65">
              En partenariat opérationnel avec Omra Factory
            </div>
          </div>

          <div>
            <h4 className="label-premium text-siyajj-ivory/85 mb-6">Nos Services</h4>
            <ul className="space-y-3 text-sm text-siyajj-muted-text">
              <li><Link href="/contact?service=billets-avion" className="hover:text-siyajj-luxury-gold transition-colors">Billets Avion</Link></li>
              <li><Link href="/contact?service=billets-bateau" className="hover:text-siyajj-luxury-gold transition-colors">Billets Bateau</Link></li>
              <li><Link href="/nos-omras" className="hover:text-siyajj-luxury-gold transition-colors">Omra & Hajj</Link></li>
              <li><Link href="/contact?service=voyages-organises" className="hover:text-siyajj-luxury-gold transition-colors">Voyages Organisés</Link></li>
              <li><Link href="/sur-mesure" className="hover:text-siyajj-luxury-gold transition-colors">Séjours sur Mesure</Link></li>
              <li><Link href="/signature-vip" className="hover:text-siyajj-luxury-gold transition-colors">Signature VIP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-premium text-siyajj-ivory/85 mb-6">Omra & Ressources</h4>
            <ul className="space-y-3 text-sm text-siyajj-muted-text">
              <li><Link href="/collections" className="hover:text-siyajj-luxury-gold transition-colors">Nos Collections</Link></li>
              <li><Link href="/activites" className="hover:text-siyajj-luxury-gold transition-colors">Activités & Expériences</Link></li>
              <li><Link href="/formations" className="hover:text-siyajj-luxury-gold transition-colors">Formations</Link></li>
              <li><Link href="/guides" className="hover:text-siyajj-luxury-gold transition-colors">Guides pratiques</Link></li>
              <li><Link href="/hajj" className="hover:text-siyajj-luxury-gold transition-colors">Le Hajj</Link></li>
              <li><Link href="/faq" className="hover:text-siyajj-luxury-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-premium text-siyajj-ivory/85 mb-6">Contact & Agence</h4>
            <ul className="space-y-3 text-sm text-siyajj-muted-text">
              <li><Link href="/contact" className="hover:text-siyajj-luxury-gold transition-colors">Nous contacter</Link></li>
              <li><a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-siyajj-luxury-gold transition-colors">WhatsApp</a></li>
              <li><Link href="/a-propos" className="hover:text-siyajj-luxury-gold transition-colors">Qui sommes-nous</Link></li>
              <li><Link href="/avis" className="hover:text-siyajj-luxury-gold transition-colors">Avis & témoignages</Link></li>
              <li><Link href="/a-propos/omra-factory" className="hover:text-siyajj-luxury-gold transition-colors">Partenariat Omra Factory</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-siyajj-muted-text">
          <p>© 2026 SIYAJJ Voyages. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-siyajj-ivory transition-colors">Mentions légales</Link>
            <Link href="/contact" className="hover:text-siyajj-ivory transition-colors">CGV</Link>
            <Link href="/contact" className="hover:text-siyajj-ivory transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter un conseiller sur WhatsApp"
        className="group flex items-center gap-2.5 pr-4 pl-3.5 h-12 bg-siyajj-emerald/90 backdrop-blur-md border border-siyajj-luxury-gold/40 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(199,154,59,0.1)] hover:bg-siyajj-emerald hover:border-siyajj-luxury-gold/65 hover:shadow-[0_6px_32px_rgba(0,0,0,0.5),0_0_18px_rgba(15,76,42,0.4)] transition-all duration-300"
      >
        <MessageCircle className="w-4 h-4 text-siyajj-ivory shrink-0" strokeWidth={1.4} />
        <span className="label-premium text-siyajj-ivory/90 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[7rem] transition-all duration-500 ease-out">
          Conseiller
        </span>
      </a>
    </div>
  );
}

function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center gap-3 px-4 pt-3 bg-siyajj-deep-black/95 backdrop-blur-md border-t border-siyajj-luxury-gold/20" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <Button asChild className="flex-1 h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-bold rounded-lg sweep-hover relative overflow-hidden">
        <Link href="/contact"><span className="relative z-10">Demander un devis</span></Link>
      </Button>
      <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-12 w-12 shrink-0 flex items-center justify-center rounded-lg border border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10 transition-colors">
        <MessageCircle className="w-5 h-5" strokeWidth={1.4} />
      </a>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-[100dvh] flex flex-col bg-siyajj-deep-black text-siyajj-ivory font-sans selection:bg-siyajj-luxury-gold/30 relative">
      {/* Global Atmosphere Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MediaFrame slot="atmosphere" className="atmosphere-overlay absolute inset-0 w-full h-full opacity-[0.07] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-siyajj-emerald/20 via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-siyajj-teal/15 via-transparent to-transparent opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-siyajj-luxury-gold/5 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiBmaWxsPSJyZ2JhKDIwMCwgMTU0LCA3MCwgMC4wNSkiLz48L3N2Zz4=')] bg-[length:48px_48px] opacity-30" />
      </div>

      {/* Scroll Progress */}
      {!prefersReducedMotion && (
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-siyajj-luxury-gold z-[60] origin-left shadow-[0_0_10px_rgba(200,154,70,0.8)]" style={{ scaleX }} />
      )}

      <Header />

      <main className="flex-grow pt-[4.5rem] lg:pt-32 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] as const }}
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
