import { collections } from "@/data/content";

export interface CollectionFaq {
  q: string;
  a: string;
}

export interface CollectionDetailExtra {
  id: string;
  description: string;
  hotelDetails: string;
  includes: { title: string; desc: string }[];
  notIncluded: string[];
  typicalProgram: { day: string; content: string }[];
  faqs: CollectionFaq[];
  recommended: string[]; // activity slugs
}

export const collectionsDetailExtra: CollectionDetailExtra[] = [
  {
    id: "essentielle",
    description: "La Collection Essentielle est l'entrée dans l'univers SIYAJJ. Pensée pour les pèlerins qui souhaitent une première Omra sécurisée, encadrée et au juste prix, elle inclut l'essentiel sans superflu : vol, visa, hébergement sélectionné et accompagnateur francophone.",
    hotelDetails: "Hôtels 3 à 4 étoiles sélectionnés pour leur rapport qualité / proximité. Distance au Haram : généralement 5 à 15 minutes à pied ou en navette. Toutes les chambres sont climatisées.",
    includes: [
      { title: "Vol aller-retour", desc: "Depuis votre ville de départ vers Médine ou La Mecque selon l'itinéraire." },
      { title: "Visa Omra", desc: "Traitement complet du visa par SIYAJJ, sans démarche de votre part." },
      { title: "Hébergement 3★ / 4★", desc: "Hôtels sélectionnés pour leur qualité et leur proximité raisonnable des Lieux Saints." },
      { title: "Transferts aéroport ↔ hôtels", desc: "Transport organisé à l'arrivée et au départ." },
      { title: "Accompagnateur francophone", desc: "Un guide SIYAJJ présent pour encadrer le groupe." },
      { title: "Manâsik Masterclass", desc: "Formation aux rites incluse pour partir serein." },
      { title: "Assistance 24/7", desc: "Un numéro d'urgence disponible tout au long du séjour." },
    ],
    notIncluded: [
      "Repas (sauf petit-déjeuner selon hôtel)",
      "Dépenses personnelles et shopping",
      "Activités optionnelles",
      "Assurance voyage (recommandée, non incluse)",
    ],
    typicalProgram: [
      { day: "Jour 1-2", content: "Départ depuis la France, arrivée à Médine. Installation à l'hôtel et premier accueil." },
      { day: "Jour 3-5", content: "Séjour à Médine. Prières à la Mosquée du Prophète ﷺ. Visite des environs selon disponibilité." },
      { day: "Jour 6", content: "Transfert vers La Mecque. Mise en état d'Ihrâm. Arrivée et installation." },
      { day: "Jour 7-8", content: "Accomplissement des rites : Tawaf, Sa'i, Halq. Temps libre pour les prières." },
      { day: "Jour 9-11", content: "Séjour à La Mecque. Prières au Haram. Temps libre et recueillement." },
      { day: "Jour 12", content: "Départ de La Mecque. Vol retour vers la France." },
    ],
    faqs: [
      { q: "Quelle est la distance de l'hôtel au Haram ?", a: "Pour la Collection Essentielle, les hôtels sont à 10-20 minutes du Haram à pied ou en navette fournie. Chaque hôtel est vérifié et sélectionné par notre équipe." },
      { q: "Les repas sont-ils inclus ?", a: "Le petit-déjeuner est généralement inclus selon l'hôtel. Les autres repas sont à votre charge. Le quartier du Haram regorge de restaurants de toutes gammes." },
      { q: "Peut-on upgrader vers une Collection supérieure ?", a: "Oui, en contactant SIYAJJ avant la finalisation de votre réservation. Un conseiller étudiera les disponibilités et la différence de tarif." },
    ],
    recommended: ["manasik-masterclass", "tawaf-sai-guide", "carnet-renaissance"],
  },
  {
    id: "confort",
    description: "La Collection Confort est le choix de ceux qui veulent un voyage serein, sans se soucier des détails logistiques et avec un confort hôtelier soigné. Hôtels 4 étoiles proches du Haram, pension incluse et dispositif Family Care intégré.",
    hotelDetails: "Hôtels 4 étoiles sélectionnés pour leur proximité et leurs services. Distance au Haram : 3 à 10 minutes à pied. Pension complète ou demi-pension selon la formule. Chambres spacieuses avec climatisation.",
    includes: [
      { title: "Vol aller-retour", desc: "Depuis votre ville de départ, en classe économique." },
      { title: "Visa Omra", desc: "Traitement complet géré par SIYAJJ." },
      { title: "Hébergement 4★", desc: "Hôtels 4 étoiles à courte distance du Haram." },
      { title: "Pension incluse", desc: "Petit-déjeuner et dîner inclus dans la formule Confort." },
      { title: "Transferts privatifs", desc: "Transport dédié entre l'aéroport et les hôtels." },
      { title: "Accompagnateur dédié", desc: "Guide SIYAJJ disponible pour le groupe tout au long du séjour." },
      { title: "Manâsik Masterclass & Parcours Sîra", desc: "Formation aux rites et découverte historique de Médine incluses." },
      { title: "Carnet de préparation", desc: "Support PDF et ressources pour préparer votre voyage." },
    ],
    notIncluded: [
      "Dépenses personnelles et shopping",
      "Activités optionnelles non listées",
      "Assurance voyage",
      "Déjeuner (sauf sur demande spécifique)",
    ],
    typicalProgram: [
      { day: "Jour 1", content: "Départ depuis la France. Assistance SIYAJJ à l'aéroport." },
      { day: "Jour 2-4", content: "Arrivée à Médine. Installation à l'hôtel. Premier repas et accueil du groupe." },
      { day: "Jour 5-6", content: "Parcours Sîra à Médine. Prières à la Mosquée du Prophète ﷺ. Temps de recueillement." },
      { day: "Jour 7", content: "Transfert privatif vers La Mecque. Mise en état d'Ihrâm." },
      { day: "Jour 8-9", content: "Rites : Tawaf guidé, Sa'i, Halq. Session avec l'accompagnateur." },
      { day: "Jour 10-11", content: "Séjour à La Mecque. Prières au Haram. Temps libre." },
      { day: "Jour 12", content: "Retour et vol vers la France." },
    ],
    faqs: [
      { q: "La pension est-elle complète ou demi-pension ?", a: "La formule Confort inclut le petit-déjeuner et le dîner. Le déjeuner est libre, avec de nombreuses options à proximité des hôtels." },
      { q: "L'accompagnateur est-il disponible tout le temps ?", a: "L'accompagnateur SIYAJJ est disponible pendant les moments collectifs et reste joignable le reste du temps. Il n'est pas un service de garde permanent." },
      { q: "La formule est-elle adaptée aux familles ?", a: "Oui, la Collection Confort intègre le dispositif Family Care pour les familles avec enfants. Mentionnez-le lors de votre demande." },
    ],
    recommended: ["manasik-masterclass", "parcours-sira-medine", "family-care"],
  },
  {
    id: "prestige",
    description: "La Collection Prestige est pour les pèlerins qui refusent de choisir entre excellence spirituelle et confort hôtelier. Des hôtels 5 étoiles face ou à deux pas du Haram, des activités premium et un service d'assistance prioritaire.",
    hotelDetails: "Hôtels 5 étoiles avec vue sur le Haram ou à moins de 5 minutes à pied. Chambres supérieures, suites disponibles. Vue sur La Ka'ba depuis certains hôtels. Services de conciergerie intégrés.",
    includes: [
      { title: "Vols réguliers", desc: "Compagnies régulières, sièges confortables, service amélioré." },
      { title: "Visa Omra", desc: "Traitement prioritaire géré par SIYAJJ." },
      { title: "Hôtels 5★ vue ou accès direct Haram", desc: "Sélection des meilleurs établissements en position premium." },
      { title: "Demi-pension premium", desc: "Petit-déjeuner buffet haut de gamme et dîner gastronomique inclus." },
      { title: "Transferts privés en véhicule premium", desc: "Véhicule dédié pour le groupe ou la famille." },
      { title: "Accompagnateur dédié et prioritaire", desc: "Guide SIYAJJ en service renforcé pour la Collection Prestige." },
      { title: "Ziyarat privées incluses", desc: "Visite privée des lieux historiques avec guide dédié." },
      { title: "Hira Immersion & Carnet Renaissance", desc: "Expériences spirituelles premium incluses dans la formule." },
    ],
    notIncluded: [
      "Déjeuner (sauf option complète sur demande)",
      "Dépenses personnelles",
      "Assurance voyage premium (recommandée)",
    ],
    typicalProgram: [
      { day: "Jour 1", content: "Départ premium. Accueil VIP à l'aéroport par l'équipe SIYAJJ." },
      { day: "Jour 2-5", content: "Médine : hôtel 5★ proche de la Mosquée du Prophète ﷺ. Parcours Sîra privé. Prières et recueillement." },
      { day: "Jour 6", content: "Transfert privé vers La Mecque. Check-in en chambre supérieure avec vue." },
      { day: "Jour 7-9", content: "Rites accompagnés. Ziyarat privées. Hira Immersion." },
      { day: "Jour 10-11", content: "Temps de recueillement au Haram. Carnet Renaissance." },
      { day: "Jour 12", content: "Retour premium avec assistance complète." },
    ],
    faqs: [
      { q: "Les hôtels ont-ils vraiment la vue sur la Ka'ba ?", a: "Certains hôtels partenaires disposent de chambres avec vue directe sur la Ka'ba. SIYAJJ fait le maximum pour vous attribuer une chambre premium, selon disponibilité à la réservation." },
      { q: "La Collection Prestige est-elle disponible toute l'année ?", a: "Oui, des départs Prestige sont organisés tout au long de l'année. Les périodes de forte demande (Ramadan, été) sont à réserver 4 à 6 mois à l'avance." },
      { q: "Peut-on upgrader vers la Collection Signature ?", a: "Oui, en contactant votre conseiller SIYAJJ avant la finalisation. La Signature ajoute notamment un guide privé et un programme entièrement personnalisé." },
    ],
    recommended: ["ziyarat-privees", "hira-immersion", "carnet-renaissance"],
  },
  {
    id: "signature",
    description: "La Collection Signature est le summum de l'expérience SIYAJJ. Un service de conciergerie intégral, un guide privé exclusif, des hôtels de luxe et un programme construit sur-mesure autour de vos attentes personnelles.",
    hotelDetails: "Hôtels 5 étoiles luxe avec suites et services de conciergerie intégrés. Emplacement premium : vue sur le Haram ou connexion directe. Petit-déjeuner en chambre disponible sur demande.",
    includes: [
      { title: "Vols premium", desc: "Business class ou premium economy selon disponibilité et formule." },
      { title: "Visa Omra prioritaire", desc: "Traitement accéléré de votre dossier." },
      { title: "Hôtels 5★ luxe, suites", desc: "Les meilleurs établissements en position absolument premium." },
      { title: "Pension complète premium", desc: "Tous les repas inclus avec options gastronomiques." },
      { title: "Transferts privés VIP", desc: "Limousine ou SUV premium, chauffeur dédié." },
      { title: "Conseiller dédié 24/7", desc: "Un interlocuteur SIYAJJ exclusivement dédié à votre groupe." },
      { title: "Guide privé exclusif", desc: "Un guide pour votre groupe uniquement, tout au long du séjour." },
      { title: "Programme entièrement personnalisé", desc: "Aucun programme imposé — le séjour est construit selon vos souhaits." },
    ],
    notIncluded: [
      "Dépenses personnelles et cadeaux",
      "Assurance voyage (fortement recommandée)",
    ],
    typicalProgram: [
      { day: "Jour 1", content: "Départ en classe affaires. Accueil VIP privatif à l'aéroport de destination." },
      { day: "Jour 2-5", content: "Médine : suite 5★ à la Mosquée du Prophète ﷺ. Parcours Sîra privé. Programme libre selon vos préférences." },
      { day: "Jour 6", content: "Transfert VIP en limousine vers La Mecque. Suite avec vue sur la Ka'ba." },
      { day: "Jour 7-10", content: "Rites privés accompagnés. Ziyarat privées. Hira Immersion. After-Omra Circle preview." },
      { day: "Jour 11-12", content: "Derniers moments aux Lieux Saints. Retour organisé en classe affaires." },
    ],
    faqs: [
      { q: "La Collection Signature est-elle vraiment sur-mesure ?", a: "Oui, complètement. Le programme n'est pas fixe : chaque détail est discuté avec votre conseiller dédié et construit autour de votre groupe, vos préférences et vos contraintes." },
      { q: "Pour quel type de groupe est-elle recommandée ?", a: "Couples, familles, groupes privés, chefs d'entreprise, personnes cherchant une expérience unique et sans aucun compromis. Aussi disponible pour des séjours de couple ou individuels." },
      { q: "Y a-t-il une limite de groupe pour la Signature ?", a: "Non, la Collection Signature s'adapte de 2 à 20 personnes. Pour les grands groupes, contactez SIYAJJ pour une proposition spécifique." },
    ],
    recommended: ["ziyarat-privees", "seniors-serenite", "after-omra-circle"],
  },
  {
    id: "renaissance",
    description: "La Collection Renaissance est l'expérience SIYAJJ dans sa dimension la plus complète. Elle combine excellence hôtelière, accompagnement spirituel intégral, formations complètes, et suivi après retour — pour une transformation durable.",
    hotelDetails: "Hôtels 5 étoiles luxe, suites et chambres supérieures en position absolument premium. Vue sur la Ka'ba pour les chambres disponibles. Services de spa et bien-être selon établissement.",
    includes: [
      { title: "Vols premium", desc: "Business class ou premium economy." },
      { title: "Visa Omra prioritaire", desc: "Dossier traité en urgence par SIYAJJ." },
      { title: "Hôtels 5★ luxe + suites", desc: "Le meilleur de l'hôtellerie aux Lieux Saints." },
      { title: "Pension complète premium", desc: "Tous les repas inclus dans les restaurants de l'hôtel." },
      { title: "Transferts privés VIP", desc: "Votre propre chauffeur pour tout le séjour." },
      { title: "Conseiller dédié 24/7", desc: "Un conseiller SIYAJJ exclusivement pour vous." },
      { title: "Formations complètes incluses", desc: "Toutes les formations SIYAJJ : rites, sens, préparation, Ramadan." },
      { title: "Carnet Renaissance inclus", desc: "Le carnet de voyage spirituel SIYAJJ, offert et personnalisé." },
      { title: "After-Omra Circle", desc: "Programme de suivi post-retour inclus pour 3 mois." },
    ],
    notIncluded: [
      "Dépenses personnelles",
      "Assurance voyage (incluse en option sur demande)",
    ],
    typicalProgram: [
      { day: "Semaine 1 avant départ", content: "Formation complète en ligne. Remise du Carnet Renaissance. Entretien individuel avec votre conseiller." },
      { day: "Jour 1-2", content: "Départ en business class. Accueil VIP exclusif." },
      { day: "Jour 3-6", content: "Médine : hôtel 5★ luxe. Parcours Sîra privé. Formation in situ. Temps de recueillement guidé." },
      { day: "Jour 7", content: "Transfert VIP vers La Mecque. Hira Immersion." },
      { day: "Jour 8-11", content: "Rites accompagnés. Ziyarat privées. Carnet Renaissance actif. Sessions spirituelles du soir." },
      { day: "Jour 12", content: "Retour en business class. Préparation After-Omra Circle." },
      { day: "Mois 1-3 après retour", content: "After-Omra Circle : 3 sessions de suivi. Accès aux ressources communautaires SIYAJJ." },
    ],
    faqs: [
      { q: "Qu'est-ce qui distingue vraiment la Renaissance des autres collections ?", a: "La Collection Renaissance est la seule qui intègre un suivi complet avant, pendant et après le voyage — incluant formations, Carnet Renaissance et After-Omra Circle. C'est une expérience de transformation totale." },
      { q: "Est-elle adaptée aux personnes qui font régulièrement la Omra ?", a: "Oui, même pour les pèlerins expérimentés, la Collection Renaissance offre une profondeur nouvelle à travers ses formations avancées, ses activités spirituelles et son suivi post-retour." },
      { q: "Y a-t-il un nombre de places limité ?", a: "Oui, la Collection Renaissance est proposée en petit comité pour garantir la qualité du service. Réservation anticipée fortement recommandée." },
    ],
    recommended: ["manasik-masterclass", "hira-immersion", "carnet-renaissance"],
  },
];

export function getCollectionDetail(id: string) {
  const base = collections.find(c => c.id === id);
  const extra = collectionsDetailExtra.find(c => c.id === id);
  if (!base || !extra) return null;
  return { ...base, ...extra };
}
