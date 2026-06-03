export interface FormationModule {
  title: string;
  desc: string;
}

export interface FormationDetail {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  whatYouLearn: string[];
  formats: { type: string; desc: string }[];
  whoFor: { label: string; desc: string }[];
  modules: FormationModule[];
  resources: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const formationsDetail: FormationDetail[] = [
  {
    slug: "omra-avant-depart",
    title: "Formation Omra avant départ",
    tagline: "Tout ce qu'il faut savoir avant de poser le pied au Haram.",
    intro: "Partir serein, c'est partir préparé. Cette formation vous donne les clés pratiques, spirituelles et administratives pour aborder votre Omra avec confiance et sérénité.",
    whatYouLearn: [
      "Comprendre le sens et l'importance de la Omra",
      "Connaître les conditions et les piliers de la Omra",
      "Maîtriser les étapes de l'Ihrâm, du Tawaf et du Sa'i",
      "Savoir quels documents préparer et quand",
      "Connaître les règles de comportement au Haram",
      "Préparer ses invocations et intentions",
      "Éviter les erreurs courantes des pèlerins",
    ],
    formats: [
      { type: "Vidéo structurée", desc: "Modules vidéo progressifs, accessibles à votre rythme depuis un écran." },
      { type: "Session live", desc: "Une séance en direct avec un accompagnateur pour poser vos questions." },
      { type: "PDF de synthèse", desc: "Un document récapitulatif à emporter et consulter avant le départ." },
      { type: "Rappels WhatsApp", desc: "Messages de rappel envoyés dans les jours précédant le départ." },
    ],
    whoFor: [
      { label: "Tous les pèlerins", desc: "Essentielle pour toute personne partant en Omra avec SIYAJJ." },
      { label: "Première Omra", desc: "La formation de base idéale pour ceux qui partent pour la première fois." },
      { label: "Familles", desc: "Peut être suivie en famille pour harmoniser la préparation de tous." },
    ],
    modules: [
      { title: "Sens et fondements de la Omra", desc: "Pourquoi la Omra, sa place dans l'Islam, son lien avec le Hajj." },
      { title: "L'état d'Ihrâm", desc: "Conditions, Miqat, tenue, intentions, interdictions et exceptions." },
      { title: "Le Tawaf : les 7 tours", desc: "Comment, à quelle vitesse, quelles invocations, les erreurs à éviter." },
      { title: "Le Sa'i : Safa et Marwa", desc: "Signification, étapes, invocations, rythme recommandé." },
      { title: "Le Halq ou Taqsîr", desc: "Comment sortir de l'état d'Ihrâm, pour qui et dans quel ordre." },
      { title: "Vie au Haram et à Médine", desc: "Comportements, horaires, respect des lieux, prière dans le Haram." },
      { title: "Checklist administrative", desc: "Documents, valise, santé, argent, numéros utiles." },
    ],
    resources: [
      "PDF de synthèse des rites (imprimable)",
      "Carnet d'invocations recommandées",
      "Checklist pré-départ en 30 points",
      "Accès à la communauté After-Omra Circle",
    ],
    faqs: [
      { q: "Quand suivre cette formation ?", a: "Idéalement dans les 4 à 6 semaines avant le départ, pour que les notions restent fraîches." },
      { q: "La formation est-elle disponible en arabe ?", a: "Elle est principalement en français. Certains supports complémentaires peuvent être en arabe ou bilingues selon disponibilité." },
      { q: "Peut-on la suivre en famille ensemble ?", a: "Oui, un accès multi-appareils peut être arrangé. Contactez votre conseiller SIYAJJ pour les modalités." },
      { q: "Que se passe-t-il si on n'a pas suivi la formation avant le départ ?", a: "L'accompagnateur SIYAJJ sur place comble les lacunes essentielles. La formation reste toutefois fortement recommandée." },
    ],
    related: ["rites-omra", "premiere-omra", "guide-pdf-carnet"],
  },
  {
    slug: "rites-omra",
    title: "Comprendre les rites — étape par étape",
    tagline: "Maîtriser le déroulé de la Omra pour vivre chaque moment avec présence.",
    intro: "Derrière chaque rite se cache une profondeur infinie. Cette formation dévoile le sens de chaque geste — pour que le corps agisse et l'âme comprenne.",
    whatYouLearn: [
      "Connaître l'origine et la signification de chaque rite",
      "Comprendre le lien entre les rites et l'histoire prophétique",
      "Distinguer les piliers des obligations et des Sunna",
      "Savoir comment gérer les situations particulières",
      "Maîtriser les invocations liées à chaque étape",
      "Appréhender les différences d'avis entre écoles juridiques",
    ],
    formats: [
      { type: "Vidéo didactique", desc: "Explications visuelles claires avec schémas et reconstitutions." },
      { type: "PDF illustré", desc: "Guide complet des rites avec étapes numérotées et invocations." },
      { type: "Session Q&A", desc: "Séance de questions-réponses avec un accompagnateur qualifié." },
    ],
    whoFor: [
      { label: "Tous les pèlerins", desc: "Recommandée pour toute personne souhaitant approfondir sa compréhension des rites." },
      { label: "Pèlerins expérimentés", desc: "Pour ceux qui ont déjà fait la Omra et souhaitent aller plus loin dans la compréhension." },
      { label: "Étudiants en sciences islamiques", desc: "Un complément pratique et contextualisé aux études théoriques." },
    ],
    modules: [
      { title: "Pourquoi les rites ?", desc: "Origine abrahamique, lien avec la Ka'ba et sens universel du pèlerinage." },
      { title: "L'Ihrâm en détail", desc: "Les Miqats, les conditions, les interdictions et leur sagesse." },
      { title: "Le Tawaf en profondeur", desc: "Signification, règles, cas particuliers, piliers et Sunna." },
      { title: "Le Sa'i : Hajar et la foi", desc: "L'histoire d'Hajar, les étapes, les invocations et la Hikma du rite." },
      { title: "La Prière derrière Maqam Ibrahim", desc: "Sa valeur, sa place dans les rites et ses conditions." },
      { title: "La Sortie de l'Ihrâm", desc: "Halq, Taqsîr, différences hommes/femmes, cas particuliers." },
      { title: "Situations particulières", desc: "Menstrues, maladie, oublis, invalidité — que faire ?" },
    ],
    resources: [
      "PDF illustré des rites (30 pages)",
      "Tableau comparatif piliers / obligations / Sunna",
      "Audio des invocations du Tawaf et du Sa'i",
      "Lexique des termes islamiques liés au pèlerinage",
    ],
    faqs: [
      { q: "Cette formation traite-t-elle d'un seul madhab ?", a: "Elle présente une vue générale en soulignant les points de consensus et les différences d'avis reconnues. Un conseiller peut préciser selon votre référence." },
      { q: "Peut-on combiner cette formation avec la Formation avant départ ?", a: "Oui, et c'est même recommandé. Les deux formations sont complémentaires et renforcent mutuellement la préparation." },
      { q: "Y a-t-il des questions et réponses en direct ?", a: "Une session Q&A en live est incluse. Des sessions supplémentaires peuvent être organisées selon les groupes." },
    ],
    related: ["omra-avant-depart", "premiere-omra", "guide-pdf-carnet"],
  },
  {
    slug: "premiere-omra",
    title: "Formation Première Omra",
    tagline: "Tout comprendre quand on part pour la toute première fois.",
    intro: "La première Omra est un moment unique. Cette formation a été pensée pour effacer toutes les incertitudes et vous permettre de vivre ce voyage avec émerveillement plutôt qu'avec anxiété.",
    whatYouLearn: [
      "Avoir une vue d'ensemble claire du déroulé du voyage",
      "Comprendre chaque étape sans peur de se tromper",
      "Savoir quoi faire en cas d'imprévu",
      "Maîtriser l'essentiel des rites en langage simple",
      "Préparer son mental et son cœur pour ce premier voyage",
      "Connaître les erreurs les plus fréquentes des primo-pèlerins",
    ],
    formats: [
      { type: "Vidéo accessible", desc: "Langage clair, sans jargon, pour une compréhension immédiate." },
      { type: "Session live exclusive", desc: "Séance dédiée aux primo-pèlerins, avec un accompagnateur bienveillant." },
      { type: "Guide PDF simplifié", desc: "Un document synthétique, pratique et rassurant pour les jours du voyage." },
      { type: "Checklist mentale", desc: "Une liste des choses à savoir absolument, et des peurs à apprivoiser." },
    ],
    whoFor: [
      { label: "Primo-pèlerins", desc: "Conçue spécifiquement pour ceux qui partent pour la première fois en Omra." },
      { label: "Personnes anxieuses", desc: "Un cadre rassurant qui démystifie le voyage et réduit l'anxiété liée à l'inconnu." },
      { label: "Jeunes adultes", desc: "Pour les 20-35 ans qui s'interrogent sur leur préparation spirituelle." },
    ],
    modules: [
      { title: "Ce que l'on ressent avant la première Omra", desc: "Normaliser l'émotion, l'impatience et l'inquiétude. Se préparer intérieurement." },
      { title: "Comment se passe le voyage en pratique", desc: "Aéroport, vol, arrivée, hôtel, les premières heures — sans surprise." },
      { title: "L'Ihrâm pour la première fois", desc: "Comment le mettre, l'intention, ce qu'on dit — pas à pas." },
      { title: "Le premier Tawaf", desc: "À quoi s'attendre, comment rester concentré, gérer la foule et l'émotion." },
      { title: "Le Sa'i : marcher avec foi", desc: "Comprendre ce qu'on vit, se laisser porter par le rite." },
      { title: "Les moments libres à La Mecque", desc: "Que faire entre les rites ? Comment profiter au maximum du séjour." },
      { title: "Médine : la visite de la Mosquée du Prophète ﷺ", desc: "Comment se comporter, comment vivre ce moment unique." },
    ],
    resources: [
      "Guide 'Ma Première Omra' (PDF 20 pages)",
      "Vidéo de témoignage de pèlerins primo-voyageurs",
      "Accès au groupe communautaire After-Omra Circle",
    ],
    faqs: [
      { q: "Est-ce qu'on risque de faire des erreurs lors de sa première Omra ?", a: "Des petits oublis sont normaux et humains. L'accompagnateur SIYAJJ est là pour guider. Ce qui compte, c'est l'intention et la sincérité." },
      { q: "La formation répond-elle à toutes les questions ?", a: "Elle couvre les sujets les plus fréquents. La session live permet de poser des questions spécifiques à votre situation." },
      { q: "Puis-je partager cette formation avec ma famille ?", a: "Oui, la formation peut être partagée dans le cadre du groupe familial SIYAJJ. Contactez votre conseiller pour les modalités." },
    ],
    related: ["omra-avant-depart", "rites-omra", "familles"],
  },
  {
    slug: "familles",
    title: "Formation Familles",
    tagline: "Préparer ensemble — pour vivre ensemble avec sens.",
    intro: "Une Omra en famille est un projet d'amour. Cette formation aide chaque membre à comprendre sa place dans le voyage, à préparer les enfants et à vivre les rites avec cohésion.",
    whatYouLearn: [
      "Comment préparer ses enfants à la Omra",
      "Comment adapter les rites à l'âge des enfants",
      "Comment gérer la logistique familiale sur place",
      "Comment maintenir la sérénité malgré les imprévus",
      "Comment donner du sens à ce voyage pour toute la famille",
      "Comment gérer les besoins des seniors dans la famille",
    ],
    formats: [
      { type: "Vidéo familiale", desc: "Contenu adapté pour être regardé en famille, avec des exemples concrets." },
      { type: "Session live familles", desc: "Séance dédiée aux familles avec des cas pratiques et un Q&A bienveillant." },
      { type: "Guide enfants", desc: "Un petit guide illustré pour les enfants à lire avec les parents." },
    ],
    whoFor: [
      { label: "Familles avec enfants", desc: "De 3 à 16 ans, chaque tranche d'âge est prise en compte." },
      { label: "Parents primo-pèlerins", desc: "Pour ceux qui partent pour la première fois et emmènent leurs enfants." },
      { label: "Familles multigénérationnelles", desc: "Lorsque grands-parents, parents et enfants voyagent ensemble." },
    ],
    modules: [
      { title: "Pourquoi emmener ses enfants en Omra", desc: "La valeur éducative, spirituelle et mémorielle de ce voyage partagé." },
      { title: "Préparer les enfants avant le départ", desc: "Expliquer la Ka'ba, l'Ihrâm, les rites — avec des mots simples et des images." },
      { title: "Gérer l'Ihrâm avec des enfants", desc: "Règles spécifiques, exemptions, adaptation du rythme." },
      { title: "Le Tawaf avec des enfants", desc: "Comment maintenir le groupe, gérer la foule, adapter l'expérience." },
      { title: "Nutrition, repos et santé sur place", desc: "Conseils pratiques pour une famille en bonne santé tout au long du séjour." },
      { title: "Médine en famille", desc: "La Rawda, les visites, les explications adaptées pour les enfants." },
    ],
    resources: [
      "Guide 'Partir en Omra en famille' (PDF illustré)",
      "Livret d'activités pour les enfants (6-12 ans)",
      "Checklist familiale pré-départ",
    ],
    faqs: [
      { q: "À partir de quel âge peut-on emmener un enfant en Omra ?", a: "Il n'y a pas d'âge minimum réglementaire. La préparation et le rythme s'adaptent à chaque famille. Discutez-en avec un conseiller SIYAJJ." },
      { q: "Les enfants en bas âge doivent-ils accomplir les rites ?", a: "Non, les rites ne sont pas obligatoires pour les enfants. Ils peuvent accompagner et participer selon leur capacité, dans la joie." },
      { q: "Comment gérer une famille avec des enfants d'âges très différents ?", a: "La formation aborde spécifiquement les familles multi-âges. Le programme Family Care Experience adapte également le séjour à ces situations." },
    ],
    related: ["omra-avant-depart", "seniors", "premiere-omra"],
  },
  {
    slug: "seniors",
    title: "Formation Seniors",
    tagline: "Accomplir sa Omra en toute clarté, à son rythme, sans inquiétude.",
    intro: "Cette formation a été pensée pour les pèlerins seniors qui veulent partir serein, comprendre ce qui les attend et se préparer aussi bien physiquement que spirituellement.",
    whatYouLearn: [
      "Comprendre les rites et les adapter à ses capacités physiques",
      "Connaître les règles liées aux difficultés physiques",
      "Se préparer physiquement au voyage",
      "Savoir quels documents médicaux préparer",
      "Gérer les médicaments et la santé sur place",
      "Communiquer efficacement avec l'équipe SIYAJJ",
    ],
    formats: [
      { type: "Vidéo claire et lente", desc: "Format adapté : diction claire, explications concises, pas de surcharge." },
      { type: "Session live seniors", desc: "Séance dédiée avec temps de parole suffisant et accompagnateur patient." },
      { type: "Guide santé et rites", desc: "PDF sur la santé, les médicaments courants et les adaptations des rites." },
    ],
    whoFor: [
      { label: "Pèlerins de 60 ans et plus", desc: "Formation taillée pour les réalités physiques et spirituelles des seniors." },
      { label: "Personnes à mobilité réduite", desc: "Explications spécifiques sur les alternatives disponibles pour chaque rite." },
      { label: "Enfants adultes préparant le voyage de leurs parents", desc: "Pour ceux qui organisent le voyage pour leurs parents et veulent comprendre." },
    ],
    modules: [
      { title: "La Omra pour les seniors : ce qui change", desc: "Rythme, hôtels, assistance, alimentation — les différences importantes à connaître." },
      { title: "Préparer son corps au voyage", desc: "Marche, hydratation, médicaments, certificat médical, vaccination." },
      { title: "Les règles spécifiques pour les seniors", desc: "Délégation du Sa'i, transport, fauteuil roulant — ce que la jurisprudence permet." },
      { title: "Gérer les imprévus médicaux", desc: "Numéros d'urgence, comportement à adopter, contacts utiles sur place." },
      { title: "La spiritualité au rythme du senior", desc: "Profiter pleinement de chaque moment, même à rythme lent." },
    ],
    resources: [
      "Guide médical du pèlerin senior (PDF)",
      "Checklist médicaments et documents de santé",
      "Liste des accommodations et facilités au Haram",
    ],
    faqs: [
      { q: "Des alternatives existent-elles pour le Sa'i en cas de difficulté ?", a: "Oui, il existe des options pratiques pour les personnes à mobilité réduite. Un conseiller SIYAJJ et un accompagnateur qualifié vous guideront sur place." },
      { q: "Faut-il un certificat médical pour partir en Omra ?", a: "Selon les réglementations en vigueur, un certificat peut être requis. SIYAJJ vous informe des exigences actuelles pour votre dossier." },
      { q: "Y a-t-il des médecins disponibles sur place ?", a: "Oui, les services de santé sont présents autour des Lieux Saints. SIYAJJ vous communique les contacts utiles avant le départ." },
    ],
    related: ["familles", "omra-avant-depart", "guide-pdf-carnet"],
  },
  {
    slug: "ramadan",
    title: "Formation Omra Ramadan",
    tagline: "Vivre le mois sacré aux Lieux Saints — une préparation spéciale pour une expérience unique.",
    intro: "L'Omra pendant le Ramadan équivaut à un Hajj selon une parole du Prophète ﷺ. Cette formation prépare le pèlerin à tirer le meilleur de cette période bénie, avec connaissance et organisation.",
    whatYouLearn: [
      "Comprendre la valeur spirituelle de l'Omra en Ramadan",
      "Gérer le jeûne et le voyage en même temps",
      "Savoir comment organiser ses nuits et ses journées",
      "Connaître les moments forts du Ramadan au Haram",
      "Maximiser l'expérience spirituelle des 10 dernières nuits",
      "Préparer Laylat al-Qadr avec intention et présence",
    ],
    formats: [
      { type: "Vidéo thématique Ramadan", desc: "Modules spécifiques sur la vie au Haram pendant le Ramadan." },
      { type: "Session live pré-Ramadan", desc: "Séance collective de préparation avec conseils pratiques et spirituels." },
      { type: "Planning type Ramadan", desc: "Un exemple de journée type pendant l'Omra Ramadan." },
    ],
    whoFor: [
      { label: "Pèlerins en Omra Ramadan", desc: "Toute personne partant en Omra pendant le mois de Ramadan." },
      { label: "Pèlerins des 10 dernières nuits", desc: "Pour ceux qui souhaitent maximiser leur présence spirituelle en fin de Ramadan." },
      { label: "Familles en Ramadan", desc: "Comment gérer le jeûne, les enfants et les rites pendant le mois sacré." },
    ],
    modules: [
      { title: "Ramadan aux Lieux Saints : ce qui est unique", desc: "L'atmosphère, les Tarawih, l'Iftar au Haram, la foule — s'y préparer avec réalisme." },
      { title: "Gérer le jeûne et le voyage", desc: "Hydratation, nutrition, rythme de sommeil, conseils de santé." },
      { title: "L'Omra de nuit", desc: "Pourquoi les nuits en Ramadan sont particulières et comment en profiter." },
      { title: "Les 10 dernières nuits et Laylat al-Qadr", desc: "Comment se préparer spirituellement et organiser son planning." },
      { title: "La Omra Ramadan avec famille", desc: "Adapter le rythme pour les enfants et les seniors pendant le mois de jeûne." },
    ],
    resources: [
      "Planning type d'une journée pendant l'Omra Ramadan",
      "Guide spirituel Laylat al-Qadr",
      "Liste des invocations spéciales du Ramadan",
    ],
    faqs: [
      { q: "L'Omra Ramadan est-elle plus physique que la Omra ordinaire ?", a: "Elle demande plus d'endurance à cause du jeûne et de l'affluence. La formation vous prépare à gérer cet aspect efficacement." },
      { q: "Les rites changent-ils pendant le Ramadan ?", a: "Non, les rites restent identiques. Ce qui change, c'est le rythme et l'atmosphère. La formation couvre toutes les adaptations pratiques." },
      { q: "Peut-on accomplir la Omra de nuit pendant le Ramadan ?", a: "Oui, beaucoup de pèlerins préfèrent le Tawaf et le Sa'i de nuit pour éviter la chaleur et l'affluence du jour." },
    ],
    related: ["omra-avant-depart", "rites-omra", "guide-pdf-carnet"],
  },
  {
    slug: "guide-pdf-carnet",
    title: "Guide PDF & Carnet de Préparation",
    tagline: "Tous les outils pour partir organisé, serein et spirituellement prêt.",
    intro: "Des ressources concrètes, pratiques et belles pour accompagner chaque étape de votre voyage — de la première décision jusqu'au retour chez vous.",
    whatYouLearn: [
      "Avoir une checklist complète de tout ce qu'il faut préparer",
      "Connaître les invocations essentielles en arabe et translittération",
      "Disposer d'un carnet pour noter ses intentions et réflexions",
      "Accéder à des guides pratiques sur les documents, la valise et les rites",
      "Consulter un aide-mémoire des rites utilisable sur place",
    ],
    formats: [
      { type: "PDF téléchargeable", desc: "Documents numériques disponibles immédiatement après la souscription." },
      { type: "Carnet physique", desc: "Un carnet de voyage premium envoyé avant le départ (selon formule)." },
      { type: "Accès en ligne", desc: "Tous les guides sont accessibles depuis votre espace SIYAJJ." },
    ],
    whoFor: [
      { label: "Tous les pèlerins", desc: "Les ressources sont utiles quel que soit le niveau de connaissance." },
      { label: "Autonomes", desc: "Pour ceux qui préfèrent apprendre à leur rythme et en autonomie." },
      { label: "Offrir en cadeau", desc: "Le Carnet Renaissance peut être offert à un proche qui part en Omra." },
    ],
    modules: [
      { title: "Guide des rites (synthèse)", desc: "Le déroulé complet de la Omra en 10 pages claires et illustrées." },
      { title: "Carnet d'intentions", desc: "Espace pour noter ses invocations personnelles et ses intentions avant le départ." },
      { title: "Checklist administrative", desc: "Documents, visa, santé, valise, transport — rien n'est oublié." },
      { title: "Guide invocations", desc: "Les Doua du Tawaf, du Sa'i, à Médine, et les invocations générales du voyage." },
      { title: "Journal de bord", desc: "Pages de réflexion pour vivre et garder le souvenir du voyage." },
      { title: "Pages après-retour", desc: "Engagements, habitudes et ressources pour prolonger l'expérience." },
    ],
    resources: [
      "PDF 'Guide complet de la Omra' (imprimable, 40 pages)",
      "PDF 'Invocations du pèlerin' (arabe + translittération + traduction)",
      "PDF 'Checklist complète pré-départ'",
      "Carnet Renaissance physique (selon formule choisie)",
    ],
    faqs: [
      { q: "Les PDFs sont-ils disponibles immédiatement ?", a: "Oui, l'accès aux ressources numériques est immédiat après la souscription à la formule." },
      { q: "Le carnet physique est-il envoyé partout en France ?", a: "Oui, le Carnet Renaissance est expédié en France, en Belgique et en Suisse. Contactez SIYAJJ pour tout autre pays." },
      { q: "Les invocations sont-elles vérifiées par un érudit ?", a: "Oui, les invocations proposées sont tirées de sources reconnues et vérifiées. Aucune innovation n'est introduite." },
      { q: "Peut-on imprimer les PDFs ?", a: "Absolument, les PDFs sont conçus pour être imprimés en A4 ou A5 et emportés lors du voyage." },
    ],
    related: ["omra-avant-depart", "rites-omra", "premiere-omra"],
  },
];
