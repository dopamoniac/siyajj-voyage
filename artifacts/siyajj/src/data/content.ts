import type { MediaSlot } from "@/components/ui/media-frame";

export const CONTACT = {
  phoneDisplay: "+33 1 84 80 00 00",
  phoneHref: "tel:+33184800000",
  whatsappHref: "https://wa.me/33100000000",
  whatsappDisplay: "WhatsApp",
  email: "contact@siyajj.fr",
};

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  forWhom: string;
  comfort: string;
  services: string[];
  activities: string[];
  slot: MediaSlot;
  featured?: boolean;
}

export const collections: Collection[] = [
  {
    id: "essentielle",
    name: "Collection Essentielle",
    tagline: "L'Omra sereine, sans compromis sur l'accompagnement.",
    forWhom: "Pèlerins recherchant une première Omra simple, encadrée et au juste prix.",
    comfort: "Hôtels 3★ à 4★, proximité raisonnable du Haram",
    services: ["Vol aller-retour", "Visa Omra inclus", "Transferts aéroport", "Accompagnateur francophone", "Hôtels sélectionnés"],
    activities: ["Manâsik Masterclass", "Tawaf & Sa'i guidés"],
    slot: "collectionEssentielle",
  },
  {
    id: "confort",
    name: "Collection Confort",
    tagline: "Plus de confort, plus de proximité, plus de tranquillité.",
    forWhom: "Familles et pèlerins souhaitant un équilibre confort / budget maîtrisé.",
    comfort: "Hôtels 4★, courte distance du Haram",
    services: ["Vol aller-retour", "Visa Omra inclus", "Transferts privés", "Accompagnateur dédié", "Pension incluse", "Carnet de préparation"],
    activities: ["Manâsik Masterclass", "Parcours Sîra à Médine", "Family Care Experience"],
    slot: "collectionConfort",
  },
  {
    id: "prestige",
    name: "Collection Prestige",
    tagline: "L'excellence hôtelière au plus près des Lieux Saints.",
    forWhom: "Pèlerins exigeants désirant des hôtels haut de gamme face au Haram.",
    comfort: "Hôtels 5★, vue ou accès direct au Haram",
    services: ["Vols réguliers", "Visa Omra inclus", "Transferts privés", "Accompagnateur dédié", "Demi-pension premium", "Assistance prioritaire"],
    activities: ["Ziyarat privées", "Hira Immersion", "Carnet Renaissance"],
    slot: "collectionPrestige",
    featured: true,
  },
  {
    id: "signature",
    name: "Collection Signature",
    tagline: "Une Omra privée, pensée dans chaque détail.",
    forWhom: "Couples, familles et groupes privés souhaitant un service de conciergerie.",
    comfort: "Hôtels 5★ luxe, suites, emplacement premium",
    services: ["Vols premium", "Visa Omra inclus", "Transferts privés VIP", "Conseiller dédié 24/7", "Guide privé ou semi-privé", "Programme personnalisé"],
    activities: ["Ziyarat privées", "Seniors Sérénité", "After-Omra Circle"],
    slot: "collectionSignature",
  },
  {
    id: "renaissance",
    name: "Collection Renaissance",
    tagline: "L'expérience spirituelle la plus complète de SIYAJJ.",
    forWhom: "Ceux qui veulent vivre une transformation : préparation, rites, et suivi.",
    comfort: "Hôtels 5★ luxe + accompagnement spirituel intégral",
    services: ["Vols premium", "Visa Omra inclus", "Transferts privés VIP", "Conseiller dédié", "Formations complètes incluses", "Carnet Renaissance", "Suivi après Omra"],
    activities: ["Manâsik Masterclass", "Hira Immersion", "Carnet Renaissance", "After-Omra Circle"],
    slot: "collectionRenaissance",
  },
];

export interface Offer {
  id: string;
  title: string;
  month: string;
  duration: string;
  departure: string;
  hotelLevel: string;
  visa: boolean;
  flights: boolean;
  transfers: boolean;
  guide: boolean;
  priceFrom: string;
  slot: MediaSlot;
  tag?: string;
}

export const offers: Offer[] = [
  { id: "novembre-paris", title: "Omra Novembre", month: "Novembre 2026", duration: "12 jours", departure: "Paris (CDG)", hotelLevel: "4★ proche Haram", visa: true, flights: true, transfers: true, guide: true, priceFrom: "1 690 €", slot: "offerNovembre", tag: "Populaire" },
  { id: "decembre-lyon", title: "Omra Décembre", month: "Décembre 2026", duration: "10 jours", departure: "Lyon (LYS)", hotelLevel: "4★ proche Haram", visa: true, flights: true, transfers: true, guide: true, priceFrom: "1 590 €", slot: "offerNovembre" },
  { id: "ramadan", title: "Omra Ramadan", month: "Ramadan 2027", duration: "15 jours", departure: "Paris (CDG)", hotelLevel: "5★ face au Haram", visa: true, flights: true, transfers: true, guide: true, priceFrom: "2 950 €", slot: "offerRamadan", tag: "Très demandé" },
  { id: "famille", title: "Omra Famille", month: "Février 2027", duration: "12 jours", departure: "Paris (CDG)", hotelLevel: "4★ familial", visa: true, flights: true, transfers: true, guide: true, priceFrom: "1 750 €", slot: "offerFamille" },
  { id: "seniors", title: "Omra Seniors Sérénité", month: "Octobre 2026", duration: "10 jours", departure: "Paris (CDG)", hotelLevel: "4★ accès facilité", visa: true, flights: true, transfers: true, guide: true, priceFrom: "1 890 €", slot: "offerSeniors" },
  { id: "prestige", title: "Omra Prestige", month: "Janvier 2027", duration: "10 jours", departure: "Paris (CDG)", hotelLevel: "5★ vue Haram", visa: true, flights: true, transfers: true, guide: true, priceFrom: "2 690 €", slot: "offerPrestige", tag: "Premium" },
  { id: "marseille", title: "Omra Départ Marseille", month: "Novembre 2026", duration: "11 jours", departure: "Marseille (MRS)", hotelLevel: "4★ proche Haram", visa: true, flights: true, transfers: true, guide: true, priceFrom: "1 650 €", slot: "offerNovembre" },
  { id: "bruxelles", title: "Omra Départ Bruxelles", month: "Décembre 2026", duration: "11 jours", departure: "Bruxelles (BRU)", hotelLevel: "4★ proche Haram", visa: true, flights: true, transfers: true, guide: true, priceFrom: "1 720 €", slot: "offerNovembre" },
];

export interface Formation {
  id: string;
  title: string;
  purpose: string;
  format: string;
  forWhom: string;
}

export const formations: Formation[] = [
  { id: "avant-depart", title: "Formation Omra avant départ", purpose: "Aborder votre voyage en confiance, en comprenant chaque étape.", format: "Vidéo + Live", forWhom: "Tous les pèlerins" },
  { id: "rites", title: "Comprendre les rites étape par étape", purpose: "Maîtriser le déroulé spirituel et pratique de la Omra.", format: "Vidéo + PDF", forWhom: "Tous les pèlerins" },
  { id: "ihram", title: "Préparation Ihram, Tawaf, Sa'i", purpose: "Se préparer concrètement aux piliers de la Omra.", format: "Atelier + Vidéo", forWhom: "Tous les pèlerins" },
  { id: "invocations", title: "Invocations et bonnes pratiques", purpose: "Apprendre les invocations et adab du voyage sacré.", format: "PDF + Audio", forWhom: "Tous les pèlerins" },
  { id: "live", title: "Séance live avec accompagnateur", purpose: "Poser vos questions en direct à un accompagnateur expérimenté.", format: "Live", forWhom: "Tous les pèlerins" },
  { id: "carnet", title: "Guide PDF / carnet de préparation", purpose: "Un support complet pour préparer et vivre votre Omra.", format: "PDF / Carnet", forWhom: "Tous les pèlerins" },
  { id: "premiere", title: "Formation spéciale première Omra", purpose: "Tout comprendre quand on part pour la première fois.", format: "Vidéo + Live", forWhom: "Première Omra" },
  { id: "familles-seniors", title: "Formation familles et seniors", purpose: "Une préparation adaptée au rythme des familles et des seniors.", format: "Atelier + PDF", forWhom: "Familles & Seniors" },
];

export interface Activity {
  id: string;
  name: string;
  what: string;
  spiritualValue: string;
  included: string[];
  forWhom: string;
  slot: MediaSlot;
}

export const activities: Activity[] = [
  { id: "manasik", name: "Manâsik Masterclass", what: "Une masterclass complète sur les rites de la Omra.", spiritualValue: "Accomplir les rites avec compréhension et présence du cœur.", included: ["Session encadrée", "Support visuel", "Questions / réponses"], forWhom: "Tous les pèlerins", slot: "activityMasterclass" },
  { id: "sira-medine", name: "Parcours Sîra à Médine", what: "Un parcours sur les lieux de la vie du Prophète ﷺ.", spiritualValue: "Revivre l'histoire sacrée et nourrir l'amour prophétique.", included: ["Guide spécialisé", "Itinéraire des sites", "Récits authentifiés"], forWhom: "Tous les pèlerins", slot: "madinahImage" },
  { id: "ziyarat", name: "Ziyarat privées", what: "Des visites privées des lieux historiques majeurs.", spiritualValue: "Contempler en sérénité, loin de l'affluence.", included: ["Transport privé", "Guide dédié", "Programme flexible"], forWhom: "Familles & VIP", slot: "activityZiyarat" },
  { id: "hira", name: "Hira Immersion", what: "Une immersion autour de la grotte de Hira.", spiritualValue: "Méditer sur les débuts de la Révélation.", included: ["Encadrement", "Préparation physique", "Moment de recueillement"], forWhom: "Pèlerins autonomes", slot: "activityHira" },
  { id: "tawaf", name: "Tawaf & Sa'i Guided Moment", what: "Un accompagnement guidé pour le Tawaf et le Sa'i.", spiritualValue: "Vivre les piliers avec calme et justesse.", included: ["Accompagnateur", "Repères pratiques", "Invocations"], forWhom: "Tous les pèlerins", slot: "makkahImage" },
  { id: "family-care", name: "Family Care Experience", what: "Un dispositif pensé pour le confort des familles.", spiritualValue: "Vivre l'Omra ensemble, sereinement.", included: ["Assistance enfants", "Rythme adapté", "Coordination groupe"], forWhom: "Familles", slot: "offerFamille" },
  { id: "seniors-serenite", name: "Seniors Sérénité", what: "Un accompagnement attentionné pour les seniors.", spiritualValue: "Accomplir sa Omra à son rythme, en confiance.", included: ["Assistance mobilité", "Suivi rapproché", "Hôtels accès facilité"], forWhom: "Seniors", slot: "offerSeniors" },
  { id: "carnet-renaissance", name: "Carnet Renaissance", what: "Un carnet spirituel pour consigner votre voyage.", spiritualValue: "Ancrer les bienfaits et prolonger la transformation.", included: ["Carnet premium", "Guidage d'écriture", "Repères spirituels"], forWhom: "Tous les pèlerins", slot: "guidesCover" },
  { id: "after-omra", name: "After-Omra Circle", what: "Un cercle de suivi après le retour.", spiritualValue: "Maintenir l'élan spirituel dans la durée.", included: ["Séances de suivi", "Communauté", "Ressources"], forWhom: "Tous les pèlerins", slot: "activityMasterclass" },
];

export interface ExperienceStep {
  step: string;
  title: string;
  support: string;
}

export const experience360: ExperienceStep[] = [
  { step: "01", title: "Avant le départ", support: "Étude de votre projet, choix de la collection et préparation administrative." },
  { step: "02", title: "Formation & documents", support: "Formations spirituelles et vérification complète de vos documents." },
  { step: "03", title: "Aéroport", support: "Assistance à l'enregistrement et accompagnement au départ." },
  { step: "04", title: "Médine", support: "Accueil, installation et parcours sur les lieux prophétiques." },
  { step: "05", title: "La Mecque", support: "Transfert, installation à proximité du Haram et orientation." },
  { step: "06", title: "Rites", support: "Accompagnement guidé pour le Tawaf, le Sa'i et l'ensemble des rites." },
  { step: "07", title: "Ziyarat", support: "Visites des lieux historiques avec un guide dédié." },
  { step: "08", title: "Retour", support: "Assistance au retour et transferts jusqu'à votre arrivée." },
  { step: "09", title: "Suivi après Omra", support: "Cercle de suivi et ressources pour prolonger l'expérience." },
];

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Écouter votre projet", desc: "Nous comprenons vos attentes, votre budget et votre situation." },
  { step: "02", title: "Concevoir votre séjour", desc: "Nous construisons une proposition sur-mesure et transparente." },
  { step: "03", title: "Préparer vos documents", desc: "Visa, dossier et formalités gérés avec rigueur." },
  { step: "04", title: "Vous former avant le départ", desc: "Formations spirituelles et pratiques pour partir serein." },
  { step: "05", title: "Vous accompagner sur place", desc: "Un encadrement humain et disponible à chaque étape." },
  { step: "06", title: "Vous suivre après retour", desc: "Un suivi pour prolonger les bienfaits de votre Omra." },
];

export interface Guide {
  id: string;
  title: string;
  category: string;
  excerpt: string;
}

export const guideCategories = ["Préparation", "Rites", "Famille", "Seniors", "Ramadan", "Documents"];

export const guides: Guide[] = [
  { id: "omra-2026", title: "Guide Omra 2026", category: "Préparation", excerpt: "Tout ce qu'il faut savoir pour préparer votre Omra cette année." },
  { id: "documents", title: "Documents nécessaires", category: "Documents", excerpt: "La liste complète des documents pour votre dossier Omra." },
  { id: "valise", title: "Préparer sa valise", category: "Préparation", excerpt: "Nos conseils pour voyager léger et bien équipé." },
  { id: "enfants", title: "Omra avec enfants", category: "Famille", excerpt: "Organiser une Omra sereine en famille avec des enfants." },
  { id: "seniors", title: "Omra seniors", category: "Seniors", excerpt: "Préparer et vivre sa Omra confortablement en tant que senior." },
  { id: "hajj-omra", title: "Différence Hajj / Omra", category: "Rites", excerpt: "Comprendre ce qui distingue le Hajj de la Omra." },
  { id: "rites", title: "Comprendre les rites", category: "Rites", excerpt: "Le déroulé des rites de la Omra, étape par étape." },
  { id: "quand-partir", title: "Quand partir en Omra", category: "Préparation", excerpt: "Choisir la meilleure période selon votre profil." },
  { id: "prix", title: "Prix Omra depuis la France", category: "Préparation", excerpt: "Comprendre les prix et ce qui est réellement inclus." },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { q: "Le visa est-il inclus ?", a: "Oui, le visa Omra est inclus dans nos séjours. Notre équipe gère l'ensemble des démarches pour vous." },
  { q: "Les vols sont-ils inclus ?", a: "Oui, nos formules incluent les vols aller-retour. Des départs depuis plusieurs villes sont proposés." },
  { q: "Les hôtels sont-ils proches du Haram ?", a: "Nous sélectionnons des hôtels selon leur proximité et leur qualité, du 3★ au 5★ face au Haram selon la collection." },
  { q: "Peut-on partir en famille ?", a: "Oui, nous proposons des formules familiales et un dispositif Family Care pensé pour le confort de tous." },
  { q: "Comment fonctionne la formation avant départ ?", a: "Vous accédez à des formations en vidéo, en live et à des supports PDF pour comprendre les rites et partir serein." },
  { q: "Est-ce adapté aux seniors ?", a: "Oui, notre formule Seniors Sérénité offre un accompagnement attentionné et des hôtels à accès facilité." },
  { q: "Comment fonctionne le sur-mesure ?", a: "Vous construisez votre séjour étape par étape ; un conseiller affine ensuite chaque détail avec vous." },
  { q: "Peut-on payer en plusieurs fois ?", a: "Des facilités de paiement peuvent être proposées. Contactez un conseiller pour étudier votre situation." },
  { q: "Comment demander un devis ?", a: "Utilisez le constructeur de voyage ou notre formulaire de contact ; nous revenons vers vous rapidement." },
  { q: "Quel est le rôle d'Omra Factory ?", a: "Omra Factory est notre partenaire opérationnel, garantissant fiabilité logistique et qualité d'exécution sur place." },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { name: "Yacine B.", role: "Omra Confort — Paris", text: "Organisation fluide du début à la fin. Tout était clair, nous n'avons eu qu'à nous concentrer sur l'essentiel.", rating: 5 },
  { name: "Fatima Z.", role: "Omra Famille — Lyon", text: "Un accompagnement rassurant, surtout avec les enfants. Une équipe vraiment présente.", rating: 5 },
  { name: "Karim L.", role: "Première Omra — Marseille", text: "La formation avant départ était claire et précieuse. Je savais exactement quoi faire sur place.", rating: 5 },
  { name: "Nadia R.", role: "Omra Prestige — Paris", text: "Un voyage serein, des hôtels superbes et un service à la hauteur de nos attentes.", rating: 5 },
  { name: "Omar S.", role: "Omra Seniors — Bruxelles", text: "Service très professionnel et attentionné. Mes parents ont été accompagnés avec beaucoup de soin.", rating: 5 },
];

export const trustStrip = [
  "+15 000 pèlerins accompagnés",
  "+30 départs chaque mois",
  "4.9/5 avis vérifiés",
  "Assistance 24/7",
  "Partenaire opérationnel Omra Factory",
  "Paiement sécurisé",
  "Accompagnement francophone",
];

export const whySiyajj = [
  { title: "Accompagnement humain", desc: "Une équipe présente, disponible et à l'écoute à chaque étape." },
  { title: "Formations avant départ", desc: "Des formations spirituelles et pratiques incluses pour partir serein." },
  { title: "Expériences spirituelles structurées", desc: "Des activités pensées pour donner du sens à chaque moment." },
  { title: "Service premium", desc: "Hôtels sélectionnés, transferts soignés et confort maîtrisé." },
  { title: "Partenaire Omra Factory", desc: "Une exécution opérationnelle fiable sur place." },
  { title: "Support WhatsApp", desc: "Un canal direct pour vos questions, avant et pendant le séjour." },
  { title: "Sur-mesure", desc: "Un voyage construit selon vos attentes réelles." },
  { title: "Vision digitale", desc: "Une expérience pensée comme une application premium." },
];

export const vipFeatures = [
  "Hôtels 5 étoiles",
  "Transferts privés",
  "Conseiller dédié",
  "Dates flexibles",
  "Guide privé ou semi-privé",
  "Programme personnalisé",
  "Assistance prioritaire",
  "Support famille, couple, seniors",
];

export const HERO = {
  title: ["Votre voyage vers", "les Lieux Saints,", "réinventé avec excellence."],
  subtitle: "SIYAJJ conçoit votre Omra et votre Hajj avec un accompagnement haut de gamme, des hôtels soigneusement sélectionnés et une expérience pensée dans chaque détail.",
  ctaPrimary: "Construire mon voyage",
  ctaSecondary: "Découvrir l'expérience",
};
