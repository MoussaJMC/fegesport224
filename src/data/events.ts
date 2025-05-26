export type Event = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  location: string;
  categories: string[];
  image: string;
  registrationFee?: number;
  registrationDeadline?: string;
  prizePool: string;
  participants: number;
  maxParticipants?: number;
  rules?: string[];
  organizers?: string[];
};

// These are mock events for demo purposes
export const mockedEvents: Event[] = [
  {
    id: '1',
    title: 'Championnat National Guinéen de FIFA 24',
    description: 'Le plus grand tournoi de FIFA 24 en Guinée avec les meilleurs joueurs du pays.',
    longDescription: `
      # Championnat National Guinéen de FIFA 24

      Participez au plus grand tournoi de FIFA 24 jamais organisé en Guinée ! Le Championnat National Guinéen de FIFA 24 réunira les meilleurs joueurs du pays pour une compétition intense et passionnante.

      ## Format du tournoi

      - **Phase de groupes** : 8 groupes de 4 joueurs
      - **Phase éliminatoire** : Les 2 meilleurs de chaque groupe se qualifient
      - **Finale** : Match unique pour déterminer le champion national

      ## Règlement

      - Matchs en 1 contre 1
      - Durée des matchs : 6 minutes par mi-temps
      - Niveau de difficulté : Légendaire
      - Équipes internationales et clubs autorisés

      ## Dotations

      - 1er prix : 5,000,000 GNF + Qualification pour le Championnat Africain
      - 2ème prix : 2,500,000 GNF
      - 3ème prix : 1,000,000 GNF
      - 4ème prix : 500,000 GNF

      *Les participants doivent apporter leur propre manette. Des consoles PlayStation 5 seront fournies par les organisateurs.*
    `,
    date: '2025-04-15T09:00:00',
    location: 'Palais du Peuple, Conakry',
    categories: ['FIFA', 'Console', 'Tournoi National'],
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    registrationFee: 50000,
    registrationDeadline: '2025-04-10T23:59:59',
    prizePool: '10,000,000',
    participants: 32,
    maxParticipants: 32,
    rules: [
      'Avoir plus de 16 ans',
      'Être résident guinéen',
      'Apporter sa propre manette',
      'Respecter le code de conduite de la FEGESPORT'
    ],
    organizers: ['FEGESPORT', 'Ministère de la Jeunesse et des Sports']
  },
  {
    id: '2',
    title: 'Tournoi Mobile Legends: Bang Bang',
    description: 'Affrontez les meilleures équipes de Guinée dans ce tournoi de Mobile Legends.',
    longDescription: `
      # Tournoi Mobile Legends: Bang Bang

      La FEGESPORT est fière de présenter le premier grand tournoi officiel de Mobile Legends: Bang Bang en Guinée. Formez votre équipe de 5 joueurs et affrontez les meilleurs du pays !

      ## Format du tournoi

      - **Phase qualificative en ligne** : Élimination directe
      - **Phase finale en présentiel** : 8 équipes qualifiées
      - **Format** : Double élimination

      ## Règles principales

      - Équipes de 5 joueurs (+ 1 remplaçant optionnel)
      - Mode de jeu : Draft personnalisé 5v5
      - Format des matchs : BO3 (meilleur des 3)
      - Finale : BO5 (meilleur des 5)

      ## Récompenses

      - 1ère place : 8,000,000 GNF + Trophée
      - 2ème place : 4,000,000 GNF
      - 3ème place : 2,000,000 GNF
      - MVP du tournoi : Smartphone gaming

      *Tous les participants doivent avoir au moins 10 héros débloqués et être au moins de rang Épique.*
    `,
    date: '2025-05-20T13:00:00',
    location: 'Stade du 28 Septembre, Conakry',
    categories: ['Mobile', 'MOBA', 'Équipe'],
    image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg',
    registrationFee: 100000,
    registrationDeadline: '2025-05-15T23:59:59',
    prizePool: '15,000,000',
    participants: 25,
    maxParticipants: 64,
    rules: [
      'Équipes de 5 joueurs',
      'Niveau minimum: Épique',
      'Avoir au moins 10 héros débloqués',
      'Être âgé de 14 ans minimum'
    ],
    organizers: ['FEGESPORT', 'Orange Guinée']
  },
  {
    id: '3',
    title: 'Coupe de Guinée de PUBG Mobile',
    description: 'Survivez et éliminez vos adversaires dans ce battle royale national.',
    date: '2025-06-10T15:00:00',
    location: 'En ligne + Finale au Hotel Kaloum, Conakry',
    categories: ['Mobile', 'Battle Royale', 'Tournoi National'],
    image: 'https://images.pexels.com/photos/7915391/pexels-photo-7915391.jpeg',
    prizePool: '12,000,000',
    participants: 60,
    maxParticipants: 100
  },
  {
    id: '4',
    title: 'Tournoi League of Legends - FEGESPORT Cup',
    description: 'Le premier grand tournoi LoL officiel en Guinée avec les meilleures équipes.',
    date: '2025-07-05T10:00:00',
    location: 'Centre Culturel Franco-Guinéen, Conakry',
    categories: ['PC', 'MOBA', 'Équipe'],
    image: 'https://images.pexels.com/photos/3045619/pexels-photo-3045619.jpeg',
    prizePool: '20,000,000',
    participants: 18,
    maxParticipants: 32
  },
  {
    id: '5',
    title: 'Championnat Call of Duty Mobile',
    description: 'Montrez vos talents tactiques dans ce tournoi par équipes sur mobile.',
    date: '2025-08-12T14:00:00',
    location: 'Espace Foutah Gaming, Labé',
    categories: ['Mobile', 'FPS', 'Équipe'],
    image: 'https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg',
    prizePool: '7,500,000',
    participants: 24,
    maxParticipants: 40
  }
];