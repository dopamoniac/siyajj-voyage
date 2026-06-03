import type { MediaSlot } from "@/components/ui/media-frame";

export interface OmraSubpageOffer {
  title: string;
  month: string;
  duration: string;
  departure: string;
  hotelLevel: string;
  priceFrom: string;
  tag?: string;
}

export interface OmraSubpage {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  intro: string;
  whoFor: { label: string; desc: string }[];
  included: string[];
  activities: string[];
  offers: OmraSubpageOffer[];
  faqs: { q: string; a: string }[];
  slot: MediaSlot;
}

export const omrasSubpages: OmraSubpage[] = [
  {
    slug: "ramadan",
    title: "Omra Ramadan",
    badge: "Période Bénie",
    tagline: "Vivre le mois sacré au cœur des Lieux Saints.",
    intro: "L'Omra en Ramadan est l'une des expériences spirituelles les plus puissantes qu'un musulman puisse vivre. Être présent à La Mecque et à Médine pendant les nuits du mois béni est une grâce que SIYAJJ vous aide à atteindre dans les meilleures conditions.",
    whoFor: [
      { label: "Pèlerins en quête d'intensité spirituelle", desc: "Pour ceux qui veulent vivre Ramadan dans sa dimension la plus élevée." },
      { label: "Fidèles des 10 dernières nuits", desc: "Présence optimisée pour la recherche de Laylat al-Qadr." },
      { label: "Familles", desc: "Une expérience inoubliable pour toute la famille pendant le mois sacré." },
      { label: "Primo-pèlerins", desc: "Débuter son parcours de pèlerin avec la plus belle période de l'année." },
    ],
    included: [
      "Vol aller-retour depuis votre ville de départ",
      "Visa Omra inclus et géré par SIYAJJ",
      "Hôtels sélectionnés à proximité du Haram",
      "Iftar organisé selon la formule choisie",
      "Accompagnateur SIYAJJ francophone",
      "Formation Omra Ramadan incluse",
      "Transferts aéroport ↔ hôtels",
      "Assistance 24/7 pendant le séjour",
    ],
    activities: ["manasik-masterclass", "tawaf-sai-guide", "carnet-renaissance"],
    offers: [
      { title: "Omra Ramadan — 10 premiers jours", month: "Mars 2027", duration: "12 jours", departure: "Paris CDG", hotelLevel: "4★ proche Haram", priceFrom: "2 290 €", tag: "Recommandé" },
      { title: "Omra Ramadan — 10 dernières nuits", month: "Mars 2027", duration: "12 jours", departure: "Paris CDG", hotelLevel: "5★ face au Haram", priceFrom: "3 490 €", tag: "Très demandé" },
      { title: "Omra Ramadan Confort", month: "Mars 2027", duration: "10 jours", departure: "Lyon", hotelLevel: "4★ proche Haram", priceFrom: "2 190 €" },
    ],
    faqs: [
      { q: "Peut-on faire la Omra en étant en état de jeûne ?", a: "Oui, les rites peuvent être accomplis le jour comme la nuit. Beaucoup de pèlerins préfèrent accomplir le Tawaf et le Sa'i la nuit, après l'Iftar, pour profiter de la fraîcheur et d'une atmosphère plus sereine." },
      { q: "Y a-t-il des avantages à être présent pendant les 10 dernières nuits ?", a: "Les 10 dernières nuits de Ramadan, notamment les nuits impaires, sont les plus susceptibles de contenir Laylat al-Qadr. Être présent au Haram pendant cette période est considéré comme une immense grâce." },
      { q: "La formule Ramadan est-elle plus chère ?", a: "Oui, la forte demande pendant Ramadan entraîne une majoration des prix hôteliers et aériens. Une réservation anticipée (6 à 9 mois à l'avance) est fortement recommandée." },
      { q: "Est-ce adapté aux personnes âgées ?", a: "Oui, avec notre programme Seniors Sérénité. La chaleur et l'affluence sont gérées en adaptant le rythme du séjour." },
    ],
    slot: "offerRamadan",
  },
  {
    slug: "famille",
    title: "Omra Famille",
    badge: "En Famille",
    tagline: "Un voyage spirituel partagé — le plus beau des cadeaux.",
    intro: "Emmener sa famille aux Lieux Saints est un projet d'une profondeur rare. SIYAJJ l'organise de A à Z pour que chaque membre de la famille — des plus jeunes aux grands-parents — vive ce voyage dans la sérénité, la joie et le recueillement.",
    whoFor: [
      { label: "Familles avec enfants", desc: "Organisation spécifique pour que les enfants vivent leur propre expérience spirituelle." },
      { label: "Familles multigénérationnelles", desc: "Coordination entre seniors, adultes et enfants dans un rythme adapté à chacun." },
      { label: "Première Omra en famille", desc: "Un accompagnement rassurant pour une première expérience familiale mémorable." },
      { label: "Familles avec adolescents", desc: "Un cadre structuré pour que les jeunes vivent leur propre chemin spirituel." },
    ],
    included: [
      "Vols familiaux avec places groupées selon disponibilité",
      "Visa Omra pour toute la famille",
      "Hôtels familiaux ou suites adaptées",
      "Programme Family Care Experience inclus",
      "Accompagnateur dédié familles",
      "Rythme adapté aux enfants et seniors",
      "Transferts privatifs pour le groupe familial",
      "Formation familles et guide enfants inclus",
    ],
    activities: ["family-care", "manasik-masterclass", "tawaf-sai-guide"],
    offers: [
      { title: "Omra Famille Hiver", month: "Décembre 2026", duration: "12 jours", departure: "Paris CDG", hotelLevel: "4★ familial", priceFrom: "1 750 €/pers", tag: "Idéal famille" },
      { title: "Omra Famille Confort", month: "Février 2027", duration: "12 jours", departure: "Lyon", hotelLevel: "4★ familial", priceFrom: "1 690 €/pers" },
      { title: "Omra Famille Prestige", month: "Janvier 2027", duration: "10 jours", departure: "Paris CDG", hotelLevel: "5★ spacieux", priceFrom: "2 690 €/pers", tag: "Premium" },
    ],
    faqs: [
      { q: "À partir de quel âge peut-on emmener un enfant en Omra ?", a: "Il n'y a pas d'âge minimum réglementaire. Des familles voyagent avec des nourrissons. SIYAJJ adapte le séjour à chaque situation familiale." },
      { q: "Les enfants doivent-ils accomplir les rites ?", a: "Non, les rites ne sont pas obligatoires pour les enfants impubères. Ils peuvent y participer partiellement selon leur âge et leur capacité." },
      { q: "Comment gérer les enfants lors du Tawaf dans la foule ?", a: "Notre programme Family Care Experience prévoit des moments de Tawaf aux heures moins fréquentées, avec un accompagnateur dédié pour gérer le groupe familial." },
      { q: "Les prix sont-ils par personne ou par chambre ?", a: "Les prix SIYAJJ sont indiqués par personne. Des tarifs enfants sont disponibles selon l'âge. Contactez un conseiller pour un devis familial personnalisé." },
    ],
    slot: "offerFamille",
  },
  {
    slug: "seniors",
    title: "Omra Seniors",
    badge: "Sérénité",
    tagline: "Accomplir ce voyage d'une vie, entouré et en confiance.",
    intro: "Pour beaucoup, l'Omra est un voyage longuement rêvé, différé et enfin possible. SIYAJJ en fait une expérience sans effort superflu — tout est organisé pour que chaque pèlerin senior accomplisse ce voyage avec dignité, sérénité et pleine présence spirituelle.",
    whoFor: [
      { label: "Pèlerins de 60 ans et plus", desc: "Accompagnement spécialisé pour les besoins physiques et spirituels des seniors." },
      { label: "Personnes à mobilité réduite", desc: "Coordination des aides disponibles pour accomplir les rites dans les meilleures conditions." },
      { label: "Pèlerins accompagnés de leurs enfants", desc: "Le programme peut s'intégrer à un séjour famille pour que chacun évolue à son rythme." },
      { label: "Premiers voyages tardifs", desc: "Pour ceux qui réalisent enfin ce projet différé — SIYAJJ en fait une expérience précieuse." },
    ],
    included: [
      "Hôtels 4★ ou 5★ avec accès facilité (ascenseurs, peu de marches)",
      "Chambres proches de l'entrée de l'hôtel",
      "Accompagnateur dédié seniors",
      "Rythme allégé avec temps de repos quotidiens",
      "Coordination des fauteuils roulants si nécessaire",
      "Communication famille sur demande",
      "Formation seniors incluse",
      "Transferts privatifs et confortables",
    ],
    activities: ["seniors-serenite", "tawaf-sai-guide", "carnet-renaissance"],
    offers: [
      { title: "Omra Seniors Automne", month: "Octobre 2026", duration: "10 jours", departure: "Paris CDG", hotelLevel: "4★ accès facilité", priceFrom: "1 890 €", tag: "Recommandé" },
      { title: "Omra Seniors Hiver", month: "Décembre 2026", duration: "12 jours", departure: "Paris CDG", hotelLevel: "4★ accès facilité", priceFrom: "2 090 €" },
      { title: "Omra Seniors Prestige", month: "Novembre 2026", duration: "10 jours", departure: "Lyon", hotelLevel: "5★ vue Haram", priceFrom: "2 890 €", tag: "Premium" },
    ],
    faqs: [
      { q: "Y a-t-il une limite d'âge pour partir en Omra ?", a: "Non, il n'y a pas de limite d'âge. Chaque situation est étudiée individuellement pour s'assurer que le voyage peut être accompli dans les meilleures conditions." },
      { q: "Faut-il un certificat médical ?", a: "Selon les réglementations en vigueur, un certificat médical peut être requis. SIYAJJ vous informe des exigences actuelles pour votre dossier." },
      { q: "Des fauteuils roulants sont-ils disponibles au Haram ?", a: "Oui, le Haram dispose de fauteuils roulants. SIYAJJ peut aider à coordonner leur mise à disposition selon disponibilité sur place." },
      { q: "Comment sont gérées les urgences médicales ?", a: "Les services de santé sont présents autour des Lieux Saints. SIYAJJ vous communique les contacts utiles et l'équipe reste disponible 24/7." },
    ],
    slot: "offerSeniors",
  },
  {
    slug: "prestige",
    title: "Omra Prestige",
    badge: "Haut de Gamme",
    tagline: "L'excellence hôtelière et le raffinement du service, aux Lieux Saints.",
    intro: "La Collection Prestige est pour ceux qui ne souhaitent pas choisir entre profondeur spirituelle et confort exceptionnel. Des hôtels 5 étoiles au pied du Haram, un service de conciergerie et des expériences spirituelles soigneusement orchestrées.",
    whoFor: [
      { label: "Pèlerins exigeants", desc: "Pour ceux qui souhaitent un service premium sans compromis." },
      { label: "Couples", desc: "Une Omra en tête-à-tête dans un cadre élégant et intime." },
      { label: "Anniversaires & moments clés", desc: "Pour marquer une étape importante de la vie aux Lieux Saints." },
      { label: "Professionnels et dirigeants", desc: "Un séjour organisé dans les moindres détails pour un esprit libéré de toute logistique." },
    ],
    included: [
      "Vols en classe affaires ou premium economy",
      "Hôtels 5★ face au Haram ou à très courte distance",
      "Suites ou chambres supérieures",
      "Service de conciergerie dédié",
      "Transferts privatifs en véhicule premium",
      "Demi-pension premium incluse",
      "Accompagnateur privé ou semi-privé",
      "Ziyarat privées incluses",
    ],
    activities: ["ziyarat-privees", "hira-immersion", "carnet-renaissance"],
    offers: [
      { title: "Omra Prestige Automne", month: "Octobre 2026", duration: "10 jours", departure: "Paris CDG", hotelLevel: "5★ vue Haram", priceFrom: "2 690 €", tag: "Premium" },
      { title: "Omra Prestige Hiver", month: "Janvier 2027", duration: "10 jours", departure: "Paris CDG", hotelLevel: "5★ face Haram", priceFrom: "3 190 €" },
      { title: "Omra Prestige Signature", month: "Novembre 2026", duration: "12 jours", departure: "Paris CDG", hotelLevel: "5★ Luxe Suite", priceFrom: "4 490 €", tag: "Exclusif" },
    ],
    faqs: [
      { q: "Quelle est la différence entre Prestige et Signature ?", a: "La Collection Prestige offre un service haut de gamme avec guide semi-privé et hôtels 5★. La Collection Signature ajoute un conseiller dédié 24/7, un guide exclusivement privé et un programme entièrement personnalisé." },
      { q: "Les vols sont-ils en classe affaires ?", a: "Selon la formule : certaines offres Prestige incluent des vols en classe affaires ou premium economy. Précisez votre préférence lors de la demande de devis." },
      { q: "Peut-on personnaliser le programme Prestige ?", a: "Oui, une personnalisation est possible selon vos préférences. Un conseiller SIYAJJ étudie votre demande lors de l'entretien initial." },
    ],
    slot: "offerPrestige",
  },
  {
    slug: "depart-paris",
    title: "Omra Départ Paris",
    badge: "Depuis Paris",
    tagline: "Des départs réguliers depuis Paris CDG et Paris ORY vers les Lieux Saints.",
    intro: "SIYAJJ propose des départs réguliers depuis les aéroports de Paris — Charles de Gaulle et Orly — vers Médine et La Mecque. Une organisation complète, depuis votre arrivée à l'aéroport jusqu'à votre retour.",
    whoFor: [
      { label: "Résidents Île-de-France", desc: "Départs depuis votre région sans correspondance ou déplacement supplémentaire." },
      { label: "Tous profils", desc: "Toutes les collections sont disponibles au départ de Paris." },
      { label: "Familles", desc: "Assistance à l'aéroport pour un départ serein avec les enfants." },
      { label: "Seniors", desc: "Service d'assistance en fauteuil disponible à CDG et ORY sur demande." },
    ],
    included: [
      "Vol aller-retour depuis Paris CDG ou Paris ORY",
      "Assistance à l'enregistrement et à l'embarquement",
      "Visa Omra inclus",
      "Transferts aéroport ↔ hôtels",
      "Accompagnateur SIYAJJ francophone",
      "Hébergement à La Mecque et Médine",
      "Formations et supports inclus",
      "Assistance 24/7",
    ],
    activities: ["manasik-masterclass", "tawaf-sai-guide", "parcours-sira-medine"],
    offers: [
      { title: "Omra Paris — Novembre 2026", month: "Novembre 2026", duration: "12 jours", departure: "Paris CDG", hotelLevel: "4★ proche Haram", priceFrom: "1 690 €", tag: "Populaire" },
      { title: "Omra Paris — Décembre 2026", month: "Décembre 2026", duration: "10 jours", departure: "Paris ORY", hotelLevel: "4★ proche Haram", priceFrom: "1 790 €" },
      { title: "Omra Paris Prestige", month: "Janvier 2027", duration: "10 jours", departure: "Paris CDG", hotelLevel: "5★ vue Haram", priceFrom: "2 690 €" },
      { title: "Omra Paris Ramadan", month: "Mars 2027", duration: "12 jours", departure: "Paris CDG", hotelLevel: "5★ face Haram", priceFrom: "2 950 €", tag: "Très demandé" },
    ],
    faqs: [
      { q: "Depuis quel terminal à CDG partent les vols Omra ?", a: "Le terminal varie selon la compagnie aérienne. SIYAJJ vous communique toutes les informations pratiques de votre vol dans votre kit de voyage." },
      { q: "Y a-t-il un point de rendez-vous SIYAJJ à l'aéroport ?", a: "Oui, un membre de l'équipe SIYAJJ vous accueille à l'aéroport pour faciliter l'enregistrement et le départ du groupe." },
      { q: "Peut-on rejoindre le groupe à l'aéroport de Médine directement ?", a: "Dans certains cas, des arrangements particuliers peuvent être étudiés. Contactez un conseiller SIYAJJ pour votre situation spécifique." },
    ],
    slot: "offerNovembre",
  },
  {
    slug: "depart-lyon",
    title: "Omra Départ Lyon",
    badge: "Depuis Lyon",
    tagline: "Des départs directs ou avec correspondance depuis Lyon-Saint Exupéry.",
    intro: "Résidents de Lyon, Grenoble, Clermont-Ferrand ou de la région Auvergne-Rhône-Alpes : SIYAJJ organise des départs depuis Lyon-Saint Exupéry pour vous éviter le transit parisien et partir sereins depuis votre région.",
    whoFor: [
      { label: "Résidents Auvergne-Rhône-Alpes", desc: "Départ depuis Lyon sans avoir à rejoindre Paris." },
      { label: "Familles lyonnaises", desc: "Un départ groupé depuis Lyon pour toute la famille." },
      { label: "Tous profils", desc: "Collections Essentielle à Prestige disponibles depuis Lyon." },
    ],
    included: [
      "Vol aller-retour depuis Lyon-Saint Exupéry (LYS)",
      "Visa Omra inclus",
      "Transferts aéroport ↔ hôtels",
      "Accompagnateur SIYAJJ francophone",
      "Hébergement à La Mecque et Médine",
      "Formations incluses",
      "Assistance 24/7",
    ],
    activities: ["manasik-masterclass", "tawaf-sai-guide", "parcours-sira-medine"],
    offers: [
      { title: "Omra Lyon — Novembre 2026", month: "Novembre 2026", duration: "10 jours", departure: "Lyon LYS", hotelLevel: "4★ proche Haram", priceFrom: "1 590 €" },
      { title: "Omra Lyon — Décembre 2026", month: "Décembre 2026", duration: "12 jours", departure: "Lyon LYS", hotelLevel: "4★ proche Haram", priceFrom: "1 690 €", tag: "Populaire" },
      { title: "Omra Lyon Prestige", month: "Janvier 2027", duration: "10 jours", departure: "Lyon LYS", hotelLevel: "5★ proche Haram", priceFrom: "2 490 €" },
    ],
    faqs: [
      { q: "Faut-il passer par Paris pour les vols depuis Lyon ?", a: "Pas toujours. Selon les disponibilités aériennes, certains départs sont directs. D'autres peuvent nécessiter une correspondance. SIYAJJ sélectionne la meilleure option disponible." },
      { q: "Le prix est-il le même qu'au départ de Paris ?", a: "Des différences de prix peuvent exister selon les compagnies et la disponibilité. Les départs de Lyon sont généralement comparables, parfois légèrement moins chers." },
    ],
    slot: "offerNovembre",
  },
  {
    slug: "depart-marseille",
    title: "Omra Départ Marseille",
    badge: "Depuis Marseille",
    tagline: "Des départs depuis Marseille-Provence pour le Grand Sud.",
    intro: "SIYAJJ propose des départs depuis l'aéroport de Marseille-Provence pour les résidents du Var, des Bouches-du-Rhône, de l'Hérault et de toute la région PACA et Occitanie.",
    whoFor: [
      { label: "Résidents du Grand Sud", desc: "Paca, Occitanie, Corse — un départ local pour éviter les trajets vers Paris." },
      { label: "Familles et groupes", desc: "Organisation de départs groupés depuis Marseille pour les associations et familles." },
      { label: "Tous profils", desc: "Collections disponibles selon les départs et la saison." },
    ],
    included: [
      "Vol aller-retour depuis Marseille-Provence (MRS)",
      "Visa Omra inclus",
      "Transferts aéroport ↔ hôtels",
      "Accompagnateur SIYAJJ francophone",
      "Hébergement à La Mecque et Médine",
      "Formations incluses",
      "Assistance 24/7",
    ],
    activities: ["manasik-masterclass", "tawaf-sai-guide", "parcours-sira-medine"],
    offers: [
      { title: "Omra Marseille — Novembre 2026", month: "Novembre 2026", duration: "11 jours", departure: "Marseille MRS", hotelLevel: "4★ proche Haram", priceFrom: "1 650 €" },
      { title: "Omra Marseille — Décembre 2026", month: "Décembre 2026", duration: "11 jours", departure: "Marseille MRS", hotelLevel: "4★ proche Haram", priceFrom: "1 750 €", tag: "Populaire" },
    ],
    faqs: [
      { q: "Y a-t-il des départs directs depuis Marseille ?", a: "Selon la saison et les disponibilités aériennes, des vols directs ou avec correspondance sont proposés. SIYAJJ sélectionne la meilleure option." },
      { q: "Des départs depuis Nice ou Montpellier sont-ils possibles ?", a: "Contactez un conseiller SIYAJJ pour étudier les options selon votre ville de départ. Des arrangements particuliers peuvent être possibles." },
    ],
    slot: "offerNovembre",
  },
  {
    slug: "depart-bruxelles",
    title: "Omra Départ Bruxelles",
    badge: "Depuis Bruxelles",
    tagline: "Un départ organisé depuis Bruxelles pour les pèlerins de Belgique.",
    intro: "SIYAJJ accompagne les pèlerins de Belgique et du Luxembourg avec des départs depuis Bruxelles-Zaventem. Une organisation complète, depuis l'aéroport jusqu'au retour — avec les mêmes standards premium qu'au départ de France.",
    whoFor: [
      { label: "Résidents belges et luxembourgeois", desc: "Un départ depuis Bruxelles sans passer par la France." },
      { label: "Communauté francophone belge", desc: "Accompagnement entièrement en français par l'équipe SIYAJJ." },
      { label: "Tous profils", desc: "Collections disponibles selon les départs et la saison." },
    ],
    included: [
      "Vol aller-retour depuis Bruxelles-Zaventem (BRU)",
      "Visa Omra inclus",
      "Transferts aéroport ↔ hôtels",
      "Accompagnateur SIYAJJ francophone",
      "Hébergement à La Mecque et Médine",
      "Formations incluses",
      "Assistance 24/7",
    ],
    activities: ["manasik-masterclass", "tawaf-sai-guide", "parcours-sira-medine"],
    offers: [
      { title: "Omra Bruxelles — Novembre 2026", month: "Novembre 2026", duration: "11 jours", departure: "Bruxelles BRU", hotelLevel: "4★ proche Haram", priceFrom: "1 720 €" },
      { title: "Omra Bruxelles — Décembre 2026", month: "Décembre 2026", duration: "11 jours", departure: "Bruxelles BRU", hotelLevel: "4★ proche Haram", priceFrom: "1 820 €", tag: "Populaire" },
    ],
    faqs: [
      { q: "Le service est-il identique à celui proposé en France ?", a: "Oui, SIYAJJ applique les mêmes standards de service premium pour tous ses groupes, quel que soit le point de départ." },
      { q: "Le visa Omra est-il différent pour les résidents belges ?", a: "La procédure est similaire. SIYAJJ gère les démarches visa pour les pèlerins belges comme pour les pèlerins français." },
    ],
    slot: "offerNovembre",
  },
];
