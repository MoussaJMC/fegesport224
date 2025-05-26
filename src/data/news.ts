export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  image: string;
  categories: string[];
};

// These are mock news articles for demo purposes
export const mockedNews: NewsItem[] = [
  {
    id: '1',
    title: 'La Fédération de Esport de Guinée officiellement reconnue par le gouvernement',
    summary: 'Une étape historique pour l\'esport guinéen avec la reconnaissance officielle de la FEGESPORT par le Ministère des Sports.',
    content: `
      # La Fédération de Esport de Guinée officiellement reconnue par le gouvernement

      C'est une nouvelle qui va réjouir tous les amateurs de sports électroniques en Guinée. Après plusieurs mois de démarches administratives et de plaidoyer, la Fédération de Esport de Guinée (FEGESPORT) a officiellement reçu la reconnaissance du Ministère de la Jeunesse et des Sports.

      ## Une reconnaissance historique

      Cette reconnaissance fait de la FEGESPORT la première organisation esportive officiellement reconnue en Guinée et l'une des premières en Afrique de l'Ouest. Ce statut permettra à la fédération de :

      - Représenter officiellement la Guinée lors des compétitions internationales
      - Bénéficier de financements publics pour le développement de l'esport
      - Établir des partenariats avec des institutions nationales et internationales
      - Structurer et réglementer l'écosystème esport en Guinée

      ## Les réactions

      Le président de la FEGESPORT, M. Ibrahim Diallo, s'est dit "ému et honorable" face à cette reconnaissance : "C'est le fruit d'un long travail collectif. Aujourd'hui, nous pouvons dire que l'esport guinéen est sur la carte mondiale. Nous allons maintenant redoubler d'efforts pour développer cette discipline dans tout le pays."

      Le Ministre de la Jeunesse et des Sports a souligné l'importance de cette reconnaissance dans le cadre de la politique gouvernementale d'inclusion numérique : "Les sports électroniques représentent l'avenir et touchent particulièrement notre jeunesse. Nous sommes fiers de soutenir cette initiative qui combine technologie, compétition et développement des compétences."

      ## Prochaines étapes

      La FEGESPORT a déjà annoncé plusieurs initiatives pour les mois à venir :
      
      - Création d'un championnat national dans plusieurs disciplines
      - Mise en place de centres de formation dans les principales villes du pays
      - Organisation d'un sommet africain de l'esport à Conakry
      - Participation aux compétitions internationales

      Cette reconnaissance marque un tournant décisif pour l'esport guinéen et ouvre la voie à un développement structuré de la discipline dans le pays.
    `,
    date: '2024-12-15T10:30:00',
    author: 'Équipe FEGESPORT',
    image: 'https://images.pexels.com/photos/7915532/pexels-photo-7915532.jpeg',
    categories: ['Officiel', 'Institutionnel']
  },
  {
    id: '2',
    title: 'Lancement du premier centre d\'entraînement esport à Conakry',
    summary: 'La FEGESPORT inaugure le premier centre d\'entraînement professionnel d\'esport à Conakry, équipé des dernières technologies.',
    content: `
      # Lancement du premier centre d'entraînement esport à Conakry

      La Fédération de Esport de Guinée (FEGESPORT) a inauguré ce week-end le tout premier centre d'entraînement professionnel dédié à l'esport en Guinée. Situé dans le quartier de Kaloum à Conakry, ce centre représente un investissement majeur dans l'infrastructure esportive du pays.

      ## Un équipement de pointe

      Le centre dispose d'installations ultramodernes comprenant :

      - 25 postes de gaming PC haut de gamme
      - 10 consoles PlayStation 5 et Xbox Series X
      - Un espace dédié au mobile gaming
      - Une salle de diffusion et de streaming
      - Des espaces de formation et de coaching
      - Une connexion internet fibre optique à haut débit

      "Nous avons voulu créer un environnement qui répond aux standards internationaux de l'esport", a déclaré Mariama Camara, directrice des opérations de la FEGESPORT. "Ce centre n'est pas seulement un lieu pour jouer, mais aussi pour apprendre, s'améliorer et se professionnaliser."

      ## Accessibilité et formation

      Le centre sera accessible selon plusieurs formules :

      - Accès libre (tarifs horaires abordables)
      - Abonnements mensuels pour les joueurs réguliers
      - Sessions de formation encadrées par des coaches
      - Programmes spéciaux pour les équipes professionnelles
      - Bourses pour les jeunes talents issus de milieux défavorisés

      ## Un tremplin pour les talents guinéens

      Ce centre vise à devenir le point focal du développement des talents esportifs en Guinée. "Notre objectif est de détecter et former les champions de demain", a souligné Abdoulaye Touré, responsable de la formation à la FEGESPORT. "Avec cet outil, nous espérons voir des Guinéens briller sur la scène internationale dans les prochaines années."

      Le centre accueillera également des tournois locaux et régionaux, renforçant ainsi l'écosystème compétitif du pays.

      ## Partenariats stratégiques

      Cette initiative a été rendue possible grâce au soutien de plusieurs partenaires, dont Orange Guinée, qui fournit la connectivité, et plusieurs entreprises internationales du secteur gaming qui ont contribué à l'équipement technique.

      Les inscriptions pour accéder au centre sont d'ores et déjà ouvertes sur le site de la FEGESPORT.
    `,
    date: '2025-01-05T14:45:00',
    author: 'Mariama Camara',
    image: 'https://images.pexels.com/photos/4009598/pexels-photo-4009598.jpeg',
    categories: ['Infrastructure', 'Formation']
  },
  {
    id: '3',
    title: 'L\'équipe nationale guinéenne de FIFA 24 se qualifie pour la Coupe d\'Afrique',
    summary: 'Une première historique pour la Guinée qui participera à la Coupe d\'Afrique des Nations de FIFA 24 en Égypte.',
    content: `
      # L'équipe nationale guinéenne de FIFA 24 se qualifie pour la Coupe d'Afrique

      C'est une performance remarquable que vient de réaliser l'équipe nationale guinéenne de FIFA 24. Après un parcours sans faute lors des qualifications ouest-africaines, nos représentants ont décroché leur billet pour la Coupe d'Afrique des Nations (CAN) de FIFA 24 qui se tiendra au Caire, en Égypte, du 15 au 20 juillet 2025.

      ## Un parcours impressionnant

      L'équipe guinéenne, composée de Mamadou Sow (capitaine), Ibrahim Baldé et Fatoumata Diallo, a dominé sa poule de qualification avec cinq victoires en six matchs. Lors de la phase finale des qualifications à Dakar, ils ont successivement éliminé le Mali en quarts de finale (4-2, 3-1), le Sénégal en demi-finale (2-1, 1-1) et la Côte d'Ivoire en finale (3-2, 2-2).

      "C'est un rêve qui devient réalité", a déclaré Mamadou Sow à l'issue de la qualification. "Nous nous sommes préparés intensément depuis des mois et cette qualification récompense notre travail. Maintenant, nous visons le podium à la CAN."

      ## Une préparation intensive

      Cette qualification est le fruit d'une préparation méticuleuse orchestrée par la FEGESPORT. Depuis six mois, l'équipe nationale s'entraîne quotidiennement au nouveau centre d'entraînement de Conakry sous la direction du coach Moussa Diakité, ancien joueur professionnel reconverti dans l'esport.

      "Nous avons mis en place un programme d'entraînement rigoureux qui combine aspects techniques, tactiques et mentaux", explique Diakité. "Nous avons également organisé des matchs amicaux contre des équipes européennes en ligne pour nous confronter à différents styles de jeu."

      ## Objectifs pour la CAN

      La CAN FIFA 24 réunira les 16 meilleures nations du continent. L'équipe guinéenne a été placée dans le groupe C avec l'Égypte (pays hôte), le Maroc et la Zambie.

      Le président de la FEGESPORT, Ibrahim Diallo, a fixé des objectifs ambitieux : "Notre premier objectif est de sortir des poules. Ensuite, match après match, nous viserons le meilleur résultat possible. Cette équipe a le potentiel pour créer la surprise et pourquoi pas ramener le trophée en Guinée."

      ## Un tremplin pour l'esport guinéen

      Cette qualification historique devrait donner un coup d'accélérateur au développement de l'esport en Guinée. La FEGESPORT compte s'appuyer sur cet élan pour attirer de nouveaux sponsors et convaincre les autorités d'investir davantage dans cette discipline en plein essor.

      Les matchs de la CAN seront diffusés en direct sur la chaîne YouTube de la FEGESPORT ainsi que sur plusieurs chaînes de télévision nationales.
    `,
    date: '2025-02-20T18:15:00',
    author: 'Ousmane Barry',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    categories: ['Compétition', 'FIFA', 'International']
  },
  {
    id: '4',
    title: 'Partenariat stratégique entre la FEGESPORT et Orange Guinée',
    summary: 'Un accord majeur qui va permettre d\'améliorer l\'infrastructure esportive du pays grâce à l\'expertise technologique d\'Orange.',
    content: `
      # Partenariat stratégique entre la FEGESPORT et Orange Guinée

      La Fédération de Esport de Guinée (FEGESPORT) et Orange Guinée ont signé aujourd'hui un partenariat stratégique de trois ans visant à développer l'infrastructure esportive du pays et à soutenir les talents nationaux.

      ## Un partenariat structurant

      Ce partenariat, d'une valeur estimée à plus de 500 millions de francs guinéens par an, permettra notamment :

      - Le déploiement de connexions internet haut débit dans tous les centres d'entraînement FEGESPORT
      - L'organisation conjointe d'une série de tournois nationaux "Orange Esport Series"
      - La création d'un programme de détection et de soutien aux jeunes talents
      - Le financement des déplacements internationaux des équipes nationales
      - La diffusion des compétitions sur les plateformes digitales d'Orange

      ## Des ambitions communes

      Lors de la cérémonie de signature, M. Ibrahim Diallo, président de la FEGESPORT, a souligné l'importance de cette collaboration : "Ce partenariat marque un tournant pour l'esport guinéen. Avec le soutien d'un acteur majeur comme Orange, nous allons pouvoir accélérer considérablement notre développement et offrir de meilleures conditions à nos joueurs."

      De son côté, la Directrice Générale d'Orange Guinée, Mme Aminata Barry, a expliqué la stratégie de l'opérateur : "L'esport représente un secteur d'avenir qui touche particulièrement les jeunes. À travers ce partenariat, Orange Guinée confirme son engagement envers la jeunesse guinéenne et l'innovation. Nous sommes convaincus que l'esport peut devenir un vecteur de développement économique et d'inclusion sociale."

      ## Premiers événements annoncés

      Dans le cadre de ce partenariat, plusieurs actions ont déjà été annoncées pour les prochains mois :

      - Lancement en avril 2025 de l'"Orange Esport Series" avec des tournois dans 5 disciplines (FIFA 24, PUBG Mobile, Mobile Legends, Free Fire et eFootball)
      - Création d'une académie virtuelle pour former 100 jeunes talents par an
      - Mise en place d'un circuit de compétition régional à travers la Guinée

      Le partenariat prévoit également la mise en place de programmes d'éducation numérique autour de l'esport dans plusieurs écoles et universités du pays.

      "Nous ne voulons pas seulement former des champions, mais aussi créer des opportunités professionnelles dans tout l'écosystème de l'esport : commentateurs, coaches, organisateurs d'événements, développeurs...", a précisé M. Diallo.

      ## Une ambition continentale

      À terme, la FEGESPORT et Orange Guinée ambitionnent de faire de la Guinée l'une des places fortes de l'esport en Afrique de l'Ouest, capable d'organiser des événements internationaux majeurs.
    `,
    date: '2025-03-03T09:00:00',
    author: 'Équipe FEGESPORT',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg',
    categories: ['Partenariat', 'Développement']
  },
  {
    id: '5',
    title: 'Programme de formation pour les jeunes commentateurs esport',
    summary: 'La FEGESPORT lance une initiative pour former la prochaine génération de commentateurs et analystes esport guinéens.',
    date: '2025-03-15T11:30:00',
    author: 'Fatou Camara',
    image: 'https://images.pexels.com/photos/7862601/pexels-photo-7862601.jpeg',
    categories: ['Formation', 'Médias'],
    content: 'Contenu détaillé à venir...'
  }
];