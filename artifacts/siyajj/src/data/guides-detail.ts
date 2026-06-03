export interface GuideSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface GuideDetail {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  intro: string;
  sections: GuideSection[];
  related: string[];
  cta: string;
}

export const guidesDetail: GuideDetail[] = [
  {
    slug: "documents-omra",
    title: "Documents nécessaires pour votre Omra",
    category: "Documents",
    tagline: "Préparez votre dossier sereinement, sans rien oublier.",
    intro: "La préparation des documents est l'une des étapes les plus importantes de l'organisation d'une Omra. Une erreur ou un oubli peut bloquer le voyage. Ce guide vous aide à tout rassembler dans les meilleures conditions.",
    sections: [
      {
        title: "Le passeport : conditions essentielles",
        content: "Votre passeport doit être valide au moins 6 mois après la date de retour prévue. Il doit comporter au moins deux pages vierges pour les tampons. Si votre passeport expire dans moins de 12 mois, il est fortement recommandé de le renouveler avant de constituer votre dossier.",
        bullets: [
          "Validité minimale de 6 mois après le retour",
          "Au moins 2 pages vierges pour les tampons",
          "Passeport biométrique requis",
          "Toute modification manuelle du passeport invalide le document",
        ],
      },
      {
        title: "Le visa Omra",
        content: "Le visa Omra est une autorisation électronique délivrée par les autorités saoudiennes. SIYAJJ gère entièrement les démarches pour les pèlerins inscrits. Le traitement du visa nécessite plusieurs jours ; il est donc important de constituer le dossier bien en amont du départ.",
        bullets: [
          "Inclus dans toutes les formules SIYAJJ",
          "Délai de traitement : 7 à 15 jours ouvrés selon les périodes",
          "Photo d'identité conforme aux exigences saoudiennes requise",
          "Aucune démarche personnelle à effectuer — SIYAJJ gère tout",
        ],
      },
      {
        title: "La vaccination et les exigences sanitaires",
        content: "Les exigences de vaccination peuvent évoluer selon les décisions des autorités saoudiennes et les conditions sanitaires mondiales. Les informations ci-dessous sont données à titre indicatif. Un conseiller SIYAJJ vous confirme les exigences actuelles avant votre départ.",
        bullets: [
          "Méningite : vaccination souvent requise (certificat à fournir)",
          "Grippe saisonnière : recommandée, notamment pour les seniors",
          "Autres vaccinations : selon les recommandations en vigueur au moment du voyage",
          "Carnet de vaccination international : à préparer si vous en disposez",
        ],
      },
      {
        title: "Pour les femmes",
        content: "Les femmes de moins de 45 ans doivent être accompagnées d'un Mahram (mari, père, frère, fils). Les femmes de 45 ans et plus peuvent voyager avec un groupe organisé sans Mahram, sous certaines conditions. SIYAJJ vous guide sur les démarches spécifiques selon votre situation.",
        bullets: [
          "Mahram requis pour les femmes de moins de 45 ans",
          "Justificatif de lien familial requis pour le Mahram",
          "Acte de mariage ou de naissance selon le cas",
          "Femmes 45+ : lettre de non-objection ou procédure groupe possible",
        ],
      },
      {
        title: "Documents pour les enfants",
        content: "Les enfants voyageant en Omra ont besoin de leur propre passeport, de leur propre visa Omra, ainsi que d'un acte de naissance. Si l'enfant voyage avec un seul parent, une autorisation de l'autre parent peut être demandée.",
        bullets: [
          "Passeport individuel pour chaque enfant",
          "Visa Omra individuel",
          "Acte de naissance en français et traduction certifiée si demandé",
          "Autorisation parentale si voyage avec un seul parent",
        ],
      },
      {
        title: "Conseil SIYAJJ",
        content: "Préparez des copies de tous vos documents (passeport, visa, carnet de vaccination, billets d'avion). Conservez les originaux dans un endroit sûr et les copies accessibles séparément. SIYAJJ vous recommande de scanner tous vos documents et de les stocker dans votre email avant le départ.",
      },
    ],
    related: ["omra-2026", "preparer-valise", "prix-omra-france"],
    cta: "Un conseiller SIYAJJ vérifie votre dossier et vous confirme les documents nécessaires avant votre départ.",
  },
  {
    slug: "preparer-valise",
    title: "Préparer sa valise pour la Omra",
    category: "Préparation",
    tagline: "Voyager léger, bien équipé et confortable.",
    intro: "Une valise bien préparée vous libère l'esprit pour vous concentrer sur ce qui compte vraiment. Ce guide rassemble les conseils pratiques de l'équipe SIYAJJ pour voyager avec le strict nécessaire — sans rien oublier d'essentiel.",
    sections: [
      {
        title: "La tenue d'Ihrâm",
        content: "Pour les hommes, la tenue d'Ihrâm est composée de deux pièces de tissu blanc non cousues. Emportez deux tenues au minimum pour pouvoir en changer. Choisissez une qualité confortable et respirante, adaptée à la chaleur.",
        bullets: [
          "2 pièces de tissu blanc non cousu pour l'Ihrâm",
          "Ceinture ou épingle pour maintenir le bas",
          "Sandales ouvertes sans coutures au-dessus du pied",
          "Pour les femmes : tenue sobre et couvrante (pas de gants, pas de voile couvrant le visage pendant les rites)",
        ],
      },
      {
        title: "Vêtements pour le reste du séjour",
        content: "En dehors des moments en état d'Ihrâm, vous aurez besoin de vêtements confortables, couvrants et adaptés à la chaleur. Privilégiez les matières légères et respirantes.",
        bullets: [
          "3 à 5 ensembles légers et couvrants",
          "Une tenue plus chaude pour la climatisation des hôtels et avions",
          "Chaussures de marche confortables pour les grandes distances",
          "Chaussures légères pour les moments de détente",
        ],
      },
      {
        title: "Hygiène et soins",
        content: "L'état d'Ihrâm impose certaines restrictions (pas de parfum, pas de crème parfumée). Choisissez des produits d'hygiène sans parfum pour la période en état d'Ihrâm.",
        bullets: [
          "Savon sans parfum, shampooing sans parfum",
          "Crème solaire haute protection (indispensable)",
          "Spray hydratant pour le visage et les lèvres",
          "Médicaments habituels + ordonnance médicale si besoin",
          "Kit de premiers soins basique (pansements, antiseptique)",
        ],
      },
      {
        title: "Accessoires pratiques",
        content: "Quelques accessoires font une vraie différence dans le confort du voyage.",
        bullets: [
          "Sac à dos léger pour les sorties",
          "Gourde réutilisable (remplissage gratuit à Zamzam)",
          "Ventilateur portable (indispensable en été)",
          "Oreiller de voyage et masque de nuit",
          "Adaptateur électrique (prises type G en Arabie Saoudite)",
          "Powerbank chargée pour le téléphone",
        ],
      },
      {
        title: "Documents et argent",
        content: "Séparez toujours originaux et copies. L'argent saoudien (Riyal) est disponible en banque et dans les nombreux bureaux de change sur place.",
        bullets: [
          "Passeport et copies",
          "Documents de voyage SIYAJJ",
          "Cartes bancaires (Visa et Mastercard acceptées partout)",
          "Espèces en SAR pour les petites dépenses",
          "Numéros d'urgence SIYAJJ notés ou enregistrés",
        ],
      },
      {
        title: "Ce qu'il vaut mieux ne pas emporter",
        content: "Pour voyager léger et sans problème à l'aéroport, certains articles sont à laisser chez soi.",
        bullets: [
          "Bijoux de valeur (risque de perte ou vol)",
          "Vêtements à logos ou messages",
          "Médicaments sans ordonnance en grande quantité",
          "Parfums et eaux de cologne en grande quantité (règles douanières)",
        ],
      },
    ],
    related: ["documents-omra", "omra-2026", "omra-seniors"],
    cta: "Pour toute question sur la préparation de votre valise, nos conseillers SIYAJJ sont disponibles par téléphone et WhatsApp.",
  },
  {
    slug: "omra-2026",
    title: "Guide Omra 2026 — Tout ce qu'il faut savoir",
    category: "Préparation",
    tagline: "La référence complète pour préparer votre voyage spirituel cette année.",
    intro: "L'Omra 2026 se prépare dès maintenant. Ce guide compile les informations essentielles sur les procédures, les meilleures périodes, les collections disponibles et les conseils pratiques pour un voyage réussi.",
    sections: [
      {
        title: "Les meilleures périodes pour la Omra 2026",
        content: "Les disponibilités varient selon les saisons. Certaines périodes sont plus avantageuses que d'autres en termes de confort, de prix et d'affluence.",
        bullets: [
          "Automne (octobre-novembre 2026) : affluence modérée, températures clémentes, bonne disponibilité hôtelière",
          "Hiver (décembre 2026 - janvier 2027) : période populaire, températures fraîches, forte demande",
          "Ramadan 2027 : afflux massif, expérience spirituelle unique, réservation très anticipée recommandée",
          "Été : températures extrêmes (40°C+), déconseillé aux seniors et familles avec jeunes enfants",
        ],
      },
      {
        title: "Les nouvelles réglementations saoudiennes",
        content: "L'Arabie Saoudite modernise régulièrement son cadre réglementaire pour la Omra. Les informations suivantes sont données à titre indicatif et peuvent évoluer. Un conseiller SIYAJJ vous confirme les règles en vigueur au moment de votre voyage.",
        bullets: [
          "Visa électronique E-Omra : obligatoire, traité via l'agence agréée",
          "Application Nusuk : recommandée pour les réservations officielles",
          "Dress code strict dans les zones sacrées",
          "Photographie réglementée dans certaines zones du Haram",
        ],
      },
      {
        title: "Les collections SIYAJJ disponibles en 2026-2027",
        content: "SIYAJJ propose cinq collections adaptées à chaque profil et budget, avec des départs depuis plusieurs villes de France, de Belgique et de Suisse.",
        bullets: [
          "Collection Essentielle : à partir de 1 490 € — 3/4★, accompagnement inclus",
          "Collection Confort : à partir de 1 690 € — 4★, pension et activités incluses",
          "Collection Prestige : à partir de 2 390 € — 5★ proche Haram, activités premium",
          "Collection Signature : à partir de 3 490 € — 5★ luxe, service de conciergerie",
          "Collection Renaissance : à partir de 4 490 € — expérience spirituelle complète",
        ],
      },
      {
        title: "Comment réserver votre Omra 2026",
        content: "SIYAJJ recommande de réserver au minimum 6 à 8 semaines avant le départ pour les périodes ordinaires, et 3 à 6 mois à l'avance pour les périodes de forte demande (Ramadan, vacances scolaires).",
        bullets: [
          "Étape 1 : Sélectionner votre Collection et votre date de départ",
          "Étape 2 : Remplir le formulaire de contact ou utiliser le Trip Builder",
          "Étape 3 : Échange avec un conseiller SIYAJJ pour affiner votre projet",
          "Étape 4 : Validation du dossier et envoi des documents",
          "Étape 5 : Accès aux formations et ressources de préparation",
        ],
      },
    ],
    related: ["documents-omra", "prix-omra-france", "difference-hajj-omra"],
    cta: "Consultez nos départs disponibles pour 2026-2027 et réservez votre Omra avec un conseiller SIYAJJ.",
  },
  {
    slug: "omra-enfants",
    title: "Omra avec enfants — Guide complet",
    category: "Famille",
    tagline: "Offrir aux Lieux Saints à vos enfants : l'un des plus beaux cadeaux.",
    intro: "Emmener ses enfants en Omra est une décision profonde et un projet qui mérite une préparation sérieuse. Ce guide vous accompagne dans chaque aspect de ce voyage familial unique.",
    sections: [
      {
        title: "Peut-on partir en Omra avec de jeunes enfants ?",
        content: "Oui, il n'y a pas d'âge minimum réglementaire pour la Omra. Des familles voyagent avec des nourrissons. Ce qui importe, c'est d'évaluer la capacité de l'enfant à supporter le voyage et de préparer un séjour adapté à son âge.",
        bullets: [
          "Nourrissons (0-2 ans) : possible, mais demande beaucoup d'organisation",
          "3-7 ans : âge idéal pour une première découverte émotionnelle",
          "8-12 ans : compréhension du sens du voyage, participation aux rites possible",
          "Adolescents : souvent une expérience transformative et mémorable",
        ],
      },
      {
        title: "Préparer les enfants spirituellement",
        content: "Expliquer la Omra aux enfants de façon adaptée à leur âge transforme le voyage en expérience éducative profonde.",
        bullets: [
          "Raconter l'histoire de la Ka'ba et d'Ibrahim ﷺ",
          "Expliquer le Tawaf avec des mots simples ('tourner autour de la maison d'Allah')",
          "Partager l'histoire d'Hajar pour le Sa'i",
          "Regarder des vidéos du Haram ensemble avant le départ",
          "Préparer ensemble une liste d'invocations personnelles",
        ],
      },
      {
        title: "La logistique pratique",
        content: "Une bonne organisation logistique est la clé d'un séjour serein avec des enfants.",
        bullets: [
          "Hôtel proche du Haram pour limiter les déplacements",
          "Poussette légère recommandée pour les moins de 5 ans",
          "Sac enfant avec eau, en-cas, médicaments, change",
          "Identifier les espaces familiaux dans le Haram (zones climatisées, toilettes)",
          "Prévoir des temps de repos dans le planning quotidien",
        ],
      },
      {
        title: "Règles spécifiques pour les enfants en Ihrâm",
        content: "Les enfants ne sont pas tenus d'accomplir les rites de la Omra, mais ils peuvent y participer avec leurs parents. Les règles de l'état d'Ihrâm ne s'appliquent pas aux enfants impubères de la même façon qu'aux adultes.",
      },
      {
        title: "Santé et précautions",
        content: "Le voyage en Arabie Saoudite implique une chaleur importante et une affluence dans les lieux saints. Voici les précautions essentielles.",
        bullets: [
          "Hydrater régulièrement (eau de Zamzam disponible en abondance)",
          "Protéger les enfants du soleil (chapeau, crème solaire, manches longues)",
          "Emporter tous les médicaments habituels avec ordonnances",
          "Prévenir SIYAJJ de tout besoin médical particulier à l'avance",
          "Choisir une période sans forte chaleur pour les jeunes enfants",
        ],
      },
    ],
    related: ["preparer-valise", "documents-omra", "omra-seniors"],
    cta: "Notre service Family Care Experience et nos conseillers sont disponibles pour construire avec vous l'Omra en famille idéale.",
  },
  {
    slug: "omra-seniors",
    title: "Guide Omra pour les seniors",
    category: "Seniors",
    tagline: "Accomplir ce voyage d'une vie dans les meilleures conditions.",
    intro: "L'Omra est un voyage que beaucoup de seniors ont longtemps rêvé. Ce guide vous aide à le préparer sereinement, en tenant compte de vos besoins spécifiques pour que le voyage soit un privilège, pas une épreuve.",
    sections: [
      {
        title: "Évaluer sa condition physique",
        content: "La Omra demande un effort physique réel : marche, chaleur, longues files d'attente. Une évaluation médicale préalable est fortement recommandée.",
        bullets: [
          "Consulter son médecin traitant 6 à 8 semaines avant le départ",
          "Évaluer sa capacité à marcher 3 à 7 km par jour",
          "Vérifier les vaccinations à jour (méningite, grippe...)",
          "Préparer un bilan de santé complet et une ordonnance de départ",
          "Informer SIYAJJ de toute condition médicale chronique",
        ],
      },
      {
        title: "Choisir la bonne période",
        content: "La chaleur saoudienne peut être un défi majeur pour les seniors. La période de départ a une importance capitale.",
        bullets: [
          "Automne (oct-nov) : recommandé — températures entre 25 et 35°C",
          "Hiver (déc-janv) : idéal — fraîcheur relative, confort amélioré",
          "Printemps (mars-mai) : acceptable selon la tolérance à la chaleur",
          "Été : déconseillé — températures pouvant dépasser 45°C",
        ],
      },
      {
        title: "Les aménagements disponibles au Haram",
        content: "La Mosquée al-Haram et la Mosquée du Prophète ﷺ disposent d'équipements pour les personnes à mobilité réduite.",
        bullets: [
          "Fauteuils roulants disponibles à la location à l'entrée du Haram",
          "Zones climatisées sur plusieurs niveaux",
          "Ascenseurs et escalators dans les ailes modernes",
          "Personnel de service pour l'assistance aux personnes à mobilité réduite",
          "Option Tawaf en fauteuil roulant au rez-de-chaussée ou à l'étage",
        ],
      },
      {
        title: "Les adaptations religieuses possibles",
        content: "La jurisprudence islamique prévoit des alternatives pour les personnes qui ne peuvent pas accomplir certains rites dans leur forme standard. SIYAJJ travaille avec des accompagnateurs qualifiés pour vous guider.",
        bullets: [
          "Sa'i en fauteuil roulant : possible et accepté",
          "Délégation de certains rites dans des cas précis",
          "Rythme libre et non imposé pour les seniors",
        ],
      },
      {
        title: "Conseils médicaux pratiques",
        content: "Ces conseils sont donnés à titre général et ne remplacent pas l'avis d'un médecin. Consultez votre praticien avant de finaliser votre départ.",
        bullets: [
          "Emporter tous les médicaments en quantité suffisante",
          "Avoir les ordonnances avec soi (en français et en arabe si possible)",
          "Identifier les hôpitaux proches des hôtels SIYAJJ",
          "Ne jamais rester sans eau plus de 30 minutes",
          "Porter des chaussures orthopédiques confortables",
        ],
      },
    ],
    related: ["documents-omra", "preparer-valise", "omra-enfants"],
    cta: "Notre programme Seniors Sérénité est conçu spécifiquement pour vous. Un conseiller SIYAJJ est disponible pour répondre à vos questions.",
  },
  {
    slug: "difference-hajj-omra",
    title: "Différence entre le Hajj et la Omra",
    category: "Rites",
    tagline: "Comprendre ce qui distingue le Grand Pèlerinage de la petite Omra.",
    intro: "Beaucoup confondent Hajj et Omra, ou ne savent pas exactement ce qui les différencie. Ce guide vous donne les réponses claires et fondées que vous cherchez.",
    sections: [
      {
        title: "Ce qu'est la Omra",
        content: "La Omra, souvent appelée 'petite Omra' ou 'pèlerinage mineur', est un acte d'adoration qui peut être accompli à n'importe quelle période de l'année. Elle est Sunna Mu'akkada (pratique prophétique fortement recommandée) selon l'avis de la majorité des savants.",
        bullets: [
          "Peut être accomplie tout au long de l'année",
          "Durée minimale : quelques heures pour les rites essentiels",
          "Rites : Ihrâm, Tawaf, Sa'i, puis Halq ou Taqsîr",
          "Pas de date fixe imposée par la loi islamique",
          "Statut : Sunna pour la majorité, Wajib pour certains savants",
        ],
      },
      {
        title: "Ce qu'est le Hajj",
        content: "Le Hajj est le cinquième pilier de l'Islam. Il est obligatoire (Fard) pour tout musulman adulte, sain d'esprit et en capacité financière et physique, une fois dans sa vie. Il ne peut être accompli qu'à des dates précises du mois de Dhul-Hijja.",
        bullets: [
          "Cinquième pilier de l'Islam — obligation pour les capables",
          "Accompli uniquement en Dhul-Hijja (8 au 13)",
          "Rites supplémentaires : Mina, Arafat, Muzdalifa, Stoning, Sacrifice",
          "Durée minimale : 5 à 6 jours de rites intenses",
          "Quota annuel par pays fixé par l'Arabie Saoudite",
        ],
      },
      {
        title: "Les rites communs et les rites spécifiques",
        content: "Les deux pèlerinages partagent certains rites. Le Hajj en comprend davantage.",
        bullets: [
          "Communs : Ihrâm, Tawaf, Sa'i, Halq/Taqsîr",
          "Spécifiques au Hajj : Wuquf à Arafat (pilier du Hajj), Muzdalifa, Mina, lapidation, sacrifice",
          "La valeur d'Arafat : le Prophète ﷺ a dit 'Le Hajj, c'est Arafat'",
        ],
      },
      {
        title: "La valeur spirituelle comparée",
        content: "Chaque acte d'adoration a sa propre valeur. La Omra efface les péchés entre elle et la précédente. Le Hajj mabrûr n'a pour récompense que le Paradis selon la parole du Prophète ﷺ.",
        bullets: [
          "La Omra en Ramadan équivaut à un Hajj (selon un hadith authentique)",
          "Le Hajj mabrûr est parmi les actes les plus vertueux",
          "On peut faire plusieurs Omra dans l'année ; le Hajj ne se fait qu'une fois dans sa vie obligatoirement",
        ],
      },
    ],
    related: ["omra-2026", "rites-omra", "prix-omra-france"],
    cta: "SIYAJJ propose un accompagnement pour la Omra toute l'année, et prépare progressivement ses pèlerins pour le Hajj 2027.",
  },
  {
    slug: "rites-omra",
    title: "Comprendre les rites de la Omra",
    category: "Rites",
    tagline: "Le déroulé complet de la Omra, étape par étape.",
    intro: "Chaque rite de la Omra porte un sens profond. Ce guide vous accompagne à travers chaque étape — de l'état d'Ihrâm jusqu'à la sortie — avec des explications claires et une approche spirituelle.",
    sections: [
      {
        title: "1. L'état d'Ihrâm",
        content: "L'Ihrâm est l'état de consécration qui marque l'entrée dans le pèlerinage. Il s'initie à la station de Miqat la plus proche du lieu de départ.",
        bullets: [
          "Prendre une douche de Ghusl avant de revêtir la tenue",
          "Mettre la tenue : 2 pièces de tissu blanc non cousu pour l'homme",
          "Formuler l'intention (Niyya) pour la Omra",
          "Prononcer la Talbiyya : 'Labbayk Allahumma Labbayk...'",
          "Respecter les interdictions : parfum, coupures, rapport conjugal, chasse",
        ],
      },
      {
        title: "2. Le Tawaf — les 7 tours",
        content: "Le Tawaf consiste à effectuer sept tours autour de la Ka'ba dans le sens antihoraire. Il commence et se termine à la Hajar al-Aswad (Pierre Noire).",
        bullets: [
          "Débuter au niveau de la Hajar al-Aswad (côté est de la Ka'ba)",
          "Maintenir la Ka'ba à sa gauche tout au long des tours",
          "7 tours complets = 1 Tawaf",
          "Invocations libres pendant le Tawaf, avec des recommandations spécifiques",
          "En cas de foule : ne pas risquer de se blesser — patience et sécurité d'abord",
        ],
      },
      {
        title: "3. La prière de 2 Rak'at derrière Maqam Ibrahim",
        content: "Après le Tawaf, il est Sunna d'accomplir 2 Rak'at en direction de Maqam Ibrahim, si possible.",
      },
      {
        title: "4. L'eau de Zamzam",
        content: "Boire l'eau de Zamzam après le Tawaf est une pratique prophétique fortement recommandée. L'eau est disponible gratuitement dans tout le Haram et à Médine.",
      },
      {
        title: "5. Le Sa'i — entre Safa et Marwa",
        content: "Le Sa'i commémore la course d'Hajar entre les deux monticules. Il s'effectue en 7 allées-venues (commençant par Safa, terminant à Marwa).",
        bullets: [
          "Monter à Safa, faire face à la Ka'ba, invoquer Allah",
          "Se diriger vers Marwa (aller = 1)",
          "7 allées-venues pour compléter le Sa'i",
          "Invoquer librement pendant le trajet",
          "Les hommes courent légèrement entre les balises vertes (Sunna)",
        ],
      },
      {
        title: "6. Le Halq ou Taqsîr — fin de la Omra",
        content: "Pour sortir de l'état d'Ihrâm, les hommes se rasent la tête (Halq, préférable) ou se coupent les cheveux (Taqsîr). Les femmes coupent l'équivalent d'une phalange de cheveux.",
        bullets: [
          "Halq (rasage complet) : préférable pour les hommes",
          "Taqsîr (raccourcissement) : acceptable pour les hommes",
          "Pour les femmes : couper une petite mèche de cheveux",
          "La Omra est accomplie : on sort de l'état d'Ihrâm",
        ],
      },
    ],
    related: ["omra-avant-depart", "difference-hajj-omra", "omra-2026"],
    cta: "La Manâsik Masterclass SIYAJJ approfondit chacun de ces rites avec un accompagnateur qualifié. Incluse dans les Collections Confort et plus.",
  },
  {
    slug: "prix-omra-france",
    title: "Prix Omra depuis la France — ce qui est vraiment inclus",
    category: "Préparation",
    tagline: "Comprendre les prix, comparer intelligemment et éviter les mauvaises surprises.",
    intro: "Le prix d'une Omra varie considérablement selon la saison, la ville de départ, la qualité de l'hôtel et les services inclus. Ce guide vous aide à comparer intelligemment et à choisir la formule qui correspond réellement à vos attentes.",
    sections: [
      {
        title: "Les composantes d'un prix Omra",
        content: "Un prix Omra tout inclus comprend généralement plusieurs éléments. Vérifier ce qui est inclus ou non est essentiel avant de comparer deux offres.",
        bullets: [
          "Vol aller-retour (classe économique ou business)",
          "Visa Omra",
          "Hébergement à La Mecque (nuits en Omra principale)",
          "Hébergement à Médine (selon le programme)",
          "Transferts aéroport ↔ hôtel",
          "Repas (selon formule : petit-déjeuner, demi-pension, pension complète)",
          "Accompagnateur francophone",
          "Formations et préparation spirituelle",
        ],
      },
      {
        title: "Les fourchettes de prix selon la collection",
        content: "Ces fourchettes sont données à titre indicatif pour 2026-2027 depuis Paris. Les prix peuvent varier selon la ville de départ, la saison et la disponibilité.",
        bullets: [
          "Collection Essentielle : 1 490 € à 1 990 € par personne",
          "Collection Confort : 1 690 € à 2 290 € par personne",
          "Collection Prestige : 2 390 € à 3 490 € par personne",
          "Collection Signature : 3 490 € à 5 490 € par personne",
          "Collection Renaissance : 4 490 € à 7 490 € par personne",
          "Omra Ramadan : majoration de 30 à 80% selon la période",
        ],
      },
      {
        title: "Ce qui peut alourdir la facture",
        content: "Certains coûts sont parfois non inclus dans les offres les moins chères. Soyez vigilants lors de la comparaison.",
        bullets: [
          "Frais de visa (parfois facturés séparément)",
          "Repas non inclus ou limités",
          "Transferts payants entre Médine et La Mecque",
          "Accompagnateur non francophone ou partagé entre plusieurs groupes",
          "Surcoût bagage",
          "Taxes d'aéroport non incluses",
        ],
      },
      {
        title: "Pourquoi des écarts de prix aussi importants ?",
        content: "La distance de l'hôtel au Haram est souvent la variable la plus impactante. Un hôtel à 15 minutes du Haram est très différent d'un hôtel face au Haram en termes de confort et de prix.",
        bullets: [
          "Distance au Haram : chaque minute de marche équivaut à une économie — ou une fatigue supplémentaire",
          "Qualité de l'hôtel (3★ vs 5★) : différence de service et de confort significative",
          "Ratio accompagnateur/pèlerins : plus le groupe est petit, plus l'encadrement est personnalisé",
          "Période : Ramadan et vacances scolaires font monter les prix",
        ],
      },
      {
        title: "Comment payer en plusieurs fois",
        content: "SIYAJJ peut proposer des facilités de paiement selon votre situation. Contactez un conseiller pour étudier votre dossier.",
        bullets: [
          "Acompte à la réservation (généralement 30 à 50%)",
          "Solde avant le départ (délai variable selon la date)",
          "Facilités de paiement possibles selon le cas",
          "Aucun intérêt sur les échelonnements SIYAJJ",
        ],
      },
    ],
    related: ["omra-2026", "documents-omra", "difference-hajj-omra"],
    cta: "Demandez un devis personnalisé à un conseiller SIYAJJ pour connaître le prix exact de votre Omra selon vos critères.",
  },
];
