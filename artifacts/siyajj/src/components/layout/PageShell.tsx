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
      { href: "/billets-avion",                    label: "Billets avion",          desc: "Réservation et conseils pour vos vols." },
      { href: "/billets-bateau",                   label: "Billets bateau",          desc: "Traversées et accompagnement réservation." },
      { href: "/contact?service=assistance",      label: "Assistance réservation",  desc: "Nous vous aidons à choisir la bonne option." },
      { href: "/contact?service=conseils-depart", label: "Conseils départ",         desc: "Préparez votre trajet avec sérénité." },
    ],
  },
  {
    label: "Omra & Hajj",
    items: [
      { href: "/nos-omras",    label: "Offres Omra",         desc: "Départs, formules et accompagnement." },
      { href: "/hajj",         label: "Hajj",                desc: "Informations et demande d'accompagnement." },
      { href: "/formations",   label: "Accompagnement",      desc: "Avant, pendant et après votre voyage." },
      { href: "/guides",       label: "Documents nécessaires", desc: "Les pièces à préparer avant le départ." },
    ],
  },
  {
    label: "Voyages organisés",
    items: [
      { href: "/contact?service=circuits",      label: "Circuits sélectionnés", desc: "Des voyages préparés avec soin." },
      { href: "/contact?service=groupe",        label: "Départs en groupe",     desc: "Voyagez avec un cadre clair." },
      { href: "/contact?service=famille",       label: "Voyages famille",       desc: "Des séjours adaptés au rythme familial." },
      { href: "/contact?service=inspirations",  label: "Inspirations",          desc: "Idées de destinations et expériences." },
    ],
  },
  {
    label: "Sur mesure",
    items: [
      { href: "/sur-mesure",                        label: "Séjours famille",        desc: "Des voyages pensés pour chacun." },
      { href: "/sur-mesure#couple",                 label: "Séjours couple",         desc: "Des escapades élégantes et personnalisées." },
      { href: "/signature-vip",                     label: "Séjours premium",        desc: "Hôtels, confort et détails soignés." },
      { href: "/contact?service=sur-mesure-custom", label: "Demande personnalisée",  desc: "Construisons votre séjour ensemble." },
    ],
  },
  {
    label: "Services",
    items: [
      { href: "/contact",           label: "Assistance voyage", desc: "Un accompagnement humain et réactif." },
      { href: "/contact?service=organisation", label: "Organisation",      desc: "Itinéraires, réservations et coordination." },
      { href: "/guides",            label: "Conseils",          desc: "Des recommandations adaptées à votre projet." },
      { href: "/faq",               label: "Support client",    desc: "Contact simple par téléphone ou WhatsApp." },
    ],
  },
  {
    label: "Destinations",
    items: [
      { href: "/contact?dest=inspirations",  label: "Inspirations voyage", desc: "Découvrez des idées de séjours." },
      { href: "/contact?dest=europe",        label: "Europe",              desc: "City breaks et séjours organisés." },
      { href: "/contact?dest=moyen-orient",  label: "Moyen-Orient",        desc: "Voyages culturels et spirituels." },
      { href: "/contact?dest=afrique-nord",  label: "Afrique du Nord",     desc: "Séjours famille et découvertes." },
    ],
  },
  {
    label: "À propos",
    items: [
      { href: "/a-propos",                label: "Qui sommes-nous",          desc: "L'histoire et la vision de SIYAJJ." },
      { href: "/a-propos/methode",        label: "Notre méthode",            desc: "Comment nous travaillons." },
      { href: "/a-propos/omra-factory",   label: "Partenariat Omra Factory", desc: "Notre partenaire opérationnel." },
      { href: "/contact",                 label: "Nous contacter",           desc: "Parlons de votre projet." },
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

  const navLabelBase =
    "whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45 rounded focus-ring-managed " +
    "text-[14px] xl:text-[15px] font-semibold tracking-[-0.01em] ";

  const navColor = isActive
    ? "text-siyajj-luxury-gold light:text-[#C59A3D]"
    : "text-siyajj-ivory light:text-[#173A33] hover:text-siyajj-luxury-gold light:hover:text-[#0B5A49]";

  if (!group.items) {
    return (
      <Link href={group.href ?? "/"} className={`${navLabelBase} ${navColor}`}>
        {group.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={`flex items-center gap-1.5 ${navLabelBase} ${navColor}`}>
        {group.label}
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.7}
        />
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
            className="absolute top-full left-0 mt-3 z-[200] w-64
              bg-siyajj-deep-black/97 light:bg-white
              backdrop-blur-2xl
              border border-siyajj-luxury-gold/30 light:border-[rgba(197,154,61,0.22)]
              rounded-3xl
              shadow-[0_24px_64px_rgba(0,0,0,0.75),0_0_0_1px_rgba(200,154,70,0.08)]
              light:shadow-[0_16px_48px_rgba(23,58,51,0.14),0_0_0_1px_rgba(197,154,61,0.16)]
              overflow-hidden"
          >
            <div className="p-2 flex flex-col gap-0.5">
              {group.items.map((item) => {
                const itemActive = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3.5 py-2.5 rounded-2xl transition-colors group
                      ${itemActive
                        ? "bg-siyajj-luxury-gold/15 light:bg-[rgba(6,63,53,0.07)]"
                        : "hover:bg-siyajj-luxury-gold/10 light:hover:bg-[rgba(6,63,53,0.05)]"
                      }`}
                  >
                    <div className={`text-[14px] font-bold leading-snug transition-colors
                      ${itemActive
                        ? "text-siyajj-luxury-gold light:text-[#063F35]"
                        : "text-siyajj-ivory light:text-[#173A33] group-hover:text-siyajj-luxury-gold light:group-hover:text-[#063F35]"
                      }`}>
                      {item.label}
                    </div>
                    {item.desc && (
                      <div className="text-[12.5px] font-medium mt-0.5 leading-[1.35]
                        text-siyajj-ivory/72 light:text-[#6F6254]">
                        {item.desc}
                      </div>
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

  const mobileLabelClass = "text-[18px] font-bold tracking-[-0.01em]";

  if (!group.items) {
    return (
      <Link
        href={group.href ?? "/"}
        onClick={onNavigate}
        className={`block py-4 border-b border-siyajj-luxury-gold/15 ${mobileLabelClass} transition-colors ${isActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory hover:text-siyajj-luxury-gold"}`}
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-siyajj-luxury-gold/15">
      <button
        className={`flex items-center justify-between w-full py-4 text-left transition-colors ${mobileLabelClass} ${isActive ? "text-siyajj-luxury-gold" : "text-siyajj-ivory"}`}
        onClick={() => setExpanded((v) => !v)}
      >
        {group.label}
        <ChevronDown className={`w-5 h-5 text-siyajj-luxury-gold shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} strokeWidth={1.7} />
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
            <div className="pb-3 pl-3 flex flex-col gap-1">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="py-2 px-3 rounded-xl hover:bg-siyajj-luxury-gold/10 transition-colors group"
                >
                  <div className="text-[15px] font-semibold text-siyajj-ivory group-hover:text-siyajj-luxury-gold transition-colors">
                    {item.label}
                  </div>
                  {item.desc && (
                    <div className="text-[13px] font-medium text-siyajj-ivory/68 mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  )}
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

  const MOBILE_NAV_H = "3.75rem"; // 60px — compact mobile bar height

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 backdrop-blur-md ${scrolled ? "bg-siyajj-deep-black/96 border-b border-siyajj-luxury-gold/22 shadow-[0_4px_28px_rgba(0,0,0,0.5)]" : "bg-siyajj-deep-black/80 border-b border-siyajj-luxury-gold/14"}`}>

      {/* ── SHARED BAR (all breakpoints) ── */}
      <div
        className={`container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500`}
        style={{ height: scrolled ? MOBILE_NAV_H : undefined }}
      >
        {/* Logo — always left */}
        <Link href="/" onClick={scrollToTop} className="flex items-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo-siyajj-v2-transparent.png`}
            alt="SIYAJJ Voyages"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled
                ? "h-9 md:h-10"
                : "h-9 md:h-14 lg:h-[4.5rem] xl:h-20"
            }`}
            style={{ filter: "drop-shadow(0 0 6px rgba(247,241,232,0.22)) brightness(1.85)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_STRUCTURE.map((group) => (
            <DesktopDropdown key={group.label} group={group} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 font-semibold uppercase tracking-widest text-[11px] sweep-hover relative overflow-hidden">
            <Link href="/contact"><span className="relative z-10">Demander un devis</span></Link>
          </Button>
        </div>

        {/* Tablet controls (md → lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" className="bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 font-semibold uppercase tracking-widest text-[10px] sweep-hover relative overflow-hidden">
            <Link href="/contact"><span className="relative z-10">Devis</span></Link>
          </Button>
          <button
            className="text-siyajj-ivory/85 hover:text-siyajj-ivory p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.span key="x-tablet" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X className="h-6 w-6" strokeWidth={1.5} /></motion.span>
                : <motion.span key="menu-tablet" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu className="h-6 w-6" strokeWidth={1.5} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile controls (< md) — DEVIS pill + burger/X */}
        <div className="md:hidden flex items-center gap-1.5">
          {/* DEVIS — only show when menu is closed */}
          <AnimatePresence initial={false}>
            {!open && (
              <motion.div
                key="devis-btn"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] px-3 h-8 rounded-lg bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black whitespace-nowrap"
                >
                  Devis
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Burger / X toggle */}
          <button
            className="w-10 h-10 flex items-center justify-center text-siyajj-ivory/85 hover:text-siyajj-ivory rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-siyajj-luxury-gold/45"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.span key="x-mob" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="h-6 w-6" strokeWidth={1.5} /></motion.span>
                : <motion.span key="menu-mob" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="h-6 w-6" strokeWidth={1.5} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── MOBILE / TABLET MENU OVERLAY ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 top-[3.75rem] bg-black/40 z-[149]"
              onClick={closeMenu}
            />

            {/* Menu panel */}
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-x-0 top-[3.75rem] bottom-0 bg-[#060d0b] border-t border-siyajj-luxury-gold/20 overflow-y-auto z-[150]"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="px-5 pt-5 pb-10 flex flex-col">

                {/* Accueil */}
                <Link
                  href="/"
                  onClick={() => { scrollToTop(); closeMenu(); }}
                  className="flex items-center py-4 border-b border-siyajj-luxury-gold/15 text-[17px] font-bold tracking-[-0.01em] text-siyajj-luxury-gold"
                >
                  Accueil
                </Link>

                {/* Nav groups */}
                {NAV_STRUCTURE.map((group) => (
                  <MobileAccordion key={group.label} group={group} onNavigate={closeMenu} />
                ))}

                {/* Contact shortcut */}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center py-4 border-b border-siyajj-luxury-gold/15 text-[17px] font-bold tracking-[-0.01em] text-siyajj-ivory/80 hover:text-siyajj-luxury-gold transition-colors"
                >
                  Contact
                </Link>

                {/* Bottom CTA block */}
                <div className="mt-8 flex flex-col gap-3">
                  <Button asChild className="w-full h-14 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-[11px] font-bold sweep-hover relative overflow-hidden">
                    <Link href="/contact" onClick={closeMenu}>
                      <span className="relative z-10">Demander un devis</span>
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 h-12 rounded-xl border border-siyajj-luxury-gold/25 text-siyajj-ivory/80 text-sm hover:bg-siyajj-luxury-gold/10 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-siyajj-luxury-gold shrink-0" strokeWidth={1.4} />
                      Appeler
                    </a>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 h-12 rounded-xl border border-siyajj-luxury-gold/25 text-siyajj-ivory/80 text-sm hover:bg-siyajj-luxury-gold/10 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 text-siyajj-luxury-gold shrink-0" strokeWidth={1.4} />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <p className="mt-10 text-center tagline-script text-siyajj-luxury-gold/35 text-sm">
                  La Renaissance du Voyage
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-siyajj-black-ink border-t border-siyajj-luxury-gold/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link href="/" onClick={scrollToTop}>
              <img src={`${import.meta.env.BASE_URL}assets/logo-siyajj-v2-transparent.png`} alt="SIYAJJ Voyages" className="h-14 w-auto object-contain mb-4" />
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
              <li><Link href="/billets-avion" className="hover:text-siyajj-luxury-gold transition-colors">Billets Avion</Link></li>
              <li><Link href="/billets-bateau" className="hover:text-siyajj-luxury-gold transition-colors">Billets Bateau</Link></li>
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

        <div className="pt-8 border-t border-siyajj-luxury-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-siyajj-muted-text">
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
        className="group flex items-center gap-2.5 pr-4 pl-3.5 h-12 bg-siyajj-emerald/90 backdrop-blur-md border border-siyajj-luxury-gold/40 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(199,154,59,0.1)] hover:bg-siyajj-emerald hover:border-siyajj-luxury-gold/65 hover:shadow-[0_6px_32px_rgba(0,0,0,0.5),0_0_18px_rgba(15,76,42,0.4)] transition-all duration-300 light:[--color-siyajj-ivory:#F7F1E8]"
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
