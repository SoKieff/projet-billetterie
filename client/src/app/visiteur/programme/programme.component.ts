import { Component, OnInit } from '@angular/core';

interface FestivalEvent {
  id: number;
  day: 'samedi' | 'dimanche';
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  scene: 'Heisei' | 'Reiwa' | 'Kawaii Zone';
  category: 'concert' | 'dj set' | 'atelier' | 'animation' | 'shopping' | 'rencontre' | 'food' | 'cérémonie';
  // Attributs supplémentaires pour la page de détail
  longDescription?: string;
  artistImage?: string;
  socialLinks?: { platform: string; url: string }[];
  videoUrl?: string;
  setlist?: string[];
}

interface InfoPratique {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
})
export class ProgrammeComponent implements OnInit {
  events: FestivalEvent[] = [];
  filteredEvents: FestivalEvent[] = [];

  // Modal de détail d'événement
  selectedEvent: FestivalEvent | null = null;
  isDetailModalOpen = false;

  filter = {
    day: 'all',
    scene: 'all',
    startTime: 'all',
    category: 'all',
    search: ''
  };

  isMenuOpen = false;

  // Informations pratiques pour le festival
  infoPratiques: InfoPratique[] = [
    {
      title: "Horaires d'ouverture",
      items: [
        'Ouverture des portes : 14h30',
        'Début des concerts : 15h30',
        'Fermeture : 02h00'
      ]
    },
    {
      title: "Services disponibles",
      items: [
        'Consigne pour effets personnels (jusqu\'à 01h30)',
        'Points d\'eau gratuits',
        'Stands de nourriture et boissons',
        'Poste de premiers secours 24h/24',
        'Point information et objets trouvés',
        'Service de navettes nocturnes'
      ]
    },
    {
      title: "Règles importantes",
      items: [
        'Appareils photo autorisés (sans objectif détachable)',
        'Light sticks autorisés',
        'Pas de nourriture ni boissons de l\'extérieur',
        'Bracelets phosphorescents fournis pour la sécurité nocturne'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadEvents();
    this.applyFilters();
  }

  loadEvents(): void {
    this.events = [
      // JOUR 1 - SAMEDI
      {
        id: 1,
        day: 'samedi',
        name: 'Cérémonie d\'ouverture',
        description: 'Performance de tambours taiko',
        startTime: '15:30',
        endTime: '16:00',
        scene: 'Heisei',
        category: 'cérémonie',
        longDescription: 'La cérémonie d\'ouverture du festival Sakura Nights débutera par une performance spectaculaire de tambours taiko traditionnels. Le groupe Kodo, reconnu mondialement, présentera une chorégraphie spécialement conçue pour l\'événement, mélangeant rythmes ancestraux et arrangements contemporains.',
        artistImage: '/assets/images/taiko.jpg',
        videoUrl: 'https://youtu.be/example-taiko'
      },
      {
        id: 2,
        day: 'samedi',
        name: 'CYBER SHRINE',
        description: 'Fusion metal-idol avec chorégraphies LED',
        startTime: '16:00',
        endTime: '17:00',
        scene: 'Reiwa',
        category: 'concert',
        longDescription: 'CYBER SHRINE est un groupe fusion metal-idol composé de 5 membres qui mélange des éléments de metal, de musique traditionnelle japonaise et de pop électronique. Leurs performances sont visuellement époustouflantes grâce à leurs costumes équipés de LEDs synchronisées avec leur musique. Pour cette performance exclusive, ils présenteront leur nouvel album "Digital Ancestors".',
        artistImage: '/assets/images/groupe13.jpg',
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/cybershrine' },
          { platform: 'YouTube', url: 'https://youtube.com/cybershrine' }
        ],
        setlist: [
          'Neon Prayer',
          'Digital Shrine',
          'Ancestral Circuit',
          'LED Dreams',
          'Future Miko',
          'Circuits of Destiny'
        ]
      },
      {
        id: 3,
        day: 'samedi',
        name: 'NEON SAMURAI',
        description: 'Rock alternatif avec influences traditionnelles',
        startTime: '17:15',
        endTime: '18:15',
        scene: 'Heisei',
        category: 'concert',
        longDescription: 'NEON SAMURAI est un groupe de rock alternatif qui intègre des instruments traditionnels japonais dans une musique résolument moderne. Leur son unique se caractérise par l\'utilisation du shamisen électrique mêlé à des guitares puissantes et des rythmiques dynamiques. Le groupe est connu pour ses performances énergiques qui racontent des histoires inspirées de légendes japonaises revisitées dans un contexte futuriste.',
        artistImage: '/assets/images/groupe1.jpg',
        socialLinks: [
          { platform: 'Spotify', url: 'https://spotify.com/neonsamurai' },
          { platform: 'Twitter', url: 'https://twitter.com/neonsamurai' }
        ],
        setlist: [
          'Electric Blade',
          'Cyberpunk Edo',
          'Ghost in the Machine',
          'Holographic Samurai',
          'Neon Bushido',
          'Digital Shogun'
        ]
      },
      {
        id: 4,
        day: 'samedi',
        name: 'PIXEL DREAMS',
        description: 'Pop orchestrale et électronique',
        startTime: '18:30',
        endTime: '19:30',
        scene: 'Reiwa',
        category: 'concert',
        longDescription: 'PIXEL DREAMS est un projet musical unique qui fusionne la musique orchestrale avec des productions électroniques modernes. Dirigé par le compositeur Akira Yamaoka, le projet présente des arrangements somptueux de chansons d\'anime populaires ainsi que des compositions originales inspirées par l\'esthétique des jeux vidéo rétro. Pour ce concert, un orchestre de chambre accompagnera les séquences électroniques, créant une expérience immersive entre nostalgie et innovation.',
        artistImage: '/assets/images/groupe5.jpg',
        videoUrl: 'https://youtu.be/example-pixeldreams'
      },
      {
        id: 5,
        day: 'samedi',
        name: 'SAKURA STORM',
        description: 'Girl group avec 9 membres, performances énergiques',
        startTime: '19:45',
        endTime: '20:45',
        scene: 'Heisei',
        category: 'concert',
        longDescription: 'SAKURA STORM est un girl group composé de 9 membres qui a révolutionné la scène idol avec leurs chorégraphies complexes et leurs productions musicales sophistiquées. Formé en 2018, le groupe est rapidement devenu un phénomène national au Japon avant de conquérir l\'international. Leur concept unique "Seasons of Emotion" attribue à chaque membre une saison et une émotion, créant une dynamique visuelle et musicale captivante. Pour ce festival, elles présenteront une performance spéciale intégrant des éléments de leur tournée "Blossom Universe".',
        artistImage: '/assets/images/groupe10.jpg',
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/sakurastorm_official' },
          { platform: 'TikTok', url: 'https://tiktok.com/@sakurastorm' }
        ],
        setlist: [
          'Cherry Blossom Revolution',
          'Emotional Spectrum',
          'Digital Pink',
          'Starlight Promise',
          'Neon Petals',
          'Summer Emotion',
          'Winter Tears'
        ]
      },
      // Autres événements avec descriptions simplifiées
      {
        id: 6,
        day: 'samedi',
        name: 'TOKYO PULSE',
        description: 'Électro-pop futuriste',
        startTime: '21:00',
        endTime: '22:00',
        scene: 'Reiwa',
        category: 'concert',
        longDescription: 'TOKYO PULSE représente l\'avant-garde de l\'électro-pop japonaise avec des sonorités futuristes et des visuels hypnotiques. ' +
          'Le duo formé par DJ Akiko et le producteur Takeshi propose une expérience immersive où la musique se synchronise avec des projections mapping spectaculaires.',
        artistImage: '/assets/images/groupe3.jpg',
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/tokyopulse' },
          { platform: 'TikTok', url: 'https://tiktok.com/@tokyopulse' }
        ],
        setlist: [
          'Digital Heartbeat',
          'Neon Dreams',
          'Electric Tokyo',
          'Future Memory',
          'Midnight Glow',
          'Cyber Romance'
        ]

      },
      {
        id: 7,
        day: 'samedi',
        name: 'MIDNIGHT DYNASTY',
        description: 'Légendes de la J-pop, show anniversaire spécial',
        startTime: '22:30',
        endTime: '01:30',
        scene: 'Heisei',
        category: 'concert',
        longDescription: 'MIDNIGHT DYNASTY célèbre leur 20ème anniversaire avec un spectacle exceptionnel qui retrace leur parcours légendaire dans l\'industrie de la J-pop. ' +
          'Attendez-vous à un voyage musical à travers les époques avec leurs plus grands succès et quelques surprises exclusives pour le festival Sakura Nights.',
        artistImage: '/assets/images/groupe7.jpg',
        socialLinks: [
          { platform: 'Twitter', url: 'https://twitter.com/midnightdynasty' },
          { platform: 'YouTube', url: 'https://youtube.com/midnightdynastyofficial' },
          { platform: 'Spotify', url: 'https://spotify.com/artist/midnightdynasty' }
        ],
        setlist: [
          'Eternal Moonlight',
          'Cherry Blossom Boulevard',
          'Midnight in Tokyo',
          'Dynasty of Dreams',
          'Sakura Memory',
          'Futuristic Love',
          'Electric Dynasty',
          'Legendary (20th Anniversary Mix)',
          'Final Fantasy'
        ]
      },
      {
        id: 8,
        day: 'samedi',
        name: 'Ateliers de cosplay',
        description: 'Apprenez à créer vos propres costumes',
        startTime: '15:00',
        endTime: '23:00',
        scene: 'Kawaii Zone',
        category: 'atelier',
        longDescription: 'Les ateliers de cosplay offrent une opportunité unique d\'apprendre les techniques professionnelles de création de costumes avec des experts reconnus. ' +
          'Des sessions sont proposées pour tous les niveaux, du débutant à l\'avancé, avec des focus sur différentes techniques comme le travail des tissus, la création d\'accessoires ' +
          'en mousse ou l\'utilisation de l\'électronique pour des costumes interactifs.',
        artistImage: '/assets/images/cosplay.jpg',
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/sakuranight_cosplay' }
        ]
      },
      // Autres événements...
      {
        id: 9,
        day: 'samedi',
        name: 'Zone de karaoké nocturne',
        description: 'Chantez vos génériques d\'anime préférés',
        startTime: '15:00',
        endTime: '23:00',
        scene: 'Kawaii Zone',
        category: 'animation',
        longDescription: 'La Zone de karaoké nocturne est l\'endroit idéal pour libérer votre voix intérieure sur vos génériques d\'anime et J-pop préférés ! ' +
          'Aménagée comme un véritable karaoké japonais avec des salles semi-privées aux thématiques variées (Ghibli, Shonen, Retro Anime, J-pop moderne), ' +
          'cette zone propose une collection de plus de 1000 chansons en japonais et en version multilingue. Un système de réservation permet de garantir à ' +
          'chacun un temps de chant, et des mini-concours auront lieu toutes les heures avec des prix à gagner. Les participants les plus talentueux pourront être ' +
          'sélectionnés pour une performance spéciale sur la petite scène de la Kawaii Zone en fin de soirée.',
        artistImage: '/assets/images/karaoke.jpg'
      },
      {
        id: 10,
        day: 'samedi',
        name: 'Boutiques de merchandising officiel',
        description: 'Goodies et produits dérivés',
        startTime: '15:00',
        endTime: '23:00',
        scene: 'Kawaii Zone',
        category: 'shopping',
        longDescription: 'L\'espace boutiques de merchandising officiel regroupe une sélection exclusive de produits dérivés des artistes présents au ' +
          'festival ainsi que des articles spécialement conçus pour l\'événement Sakura Nights. Ces stands proposent une large gamme de goodies allant des ' +
          't-shirts, hoodies et tote bags aux accessoires plus collectionnables comme des pins, porte-clés, lithographies numérotées et éditions limitées de CD/vinyles. ' +
          'Chaque artiste du festival disposera d\'un espace dédié, et une collection capsule "Sakura Nights 2024" conçue par des illustrateurs japonais renommés sera disponible ' +
          'en exclusivité. Un service de pré-commande est également disponible pour les articles les plus demandés.',
        artistImage: '/assets/images/merch.jpg'
      },
      {
        id: 11,
        day: 'samedi',
        name: 'DJ Sets',
        description: 'Avec DJ BLOSSOM et DJ NEKO',
        startTime: '23:00',
        endTime: '01:30',
        scene: 'Kawaii Zone',
        category: 'dj set',
        longDescription: 'La nuit se transforme en véritable dance floor avec les DJ sets électrisants de DJ BLOSSOM et DJ NEKO. DJ BLOSSOM (Yumi Tanaka), ' +
    'reconnue pour ses mélanges audacieux de J-pop, future bass et house japonaise, propose une ambiance festive et colorée qui capture l\'essence du Harajuku contemporain. ' +
    'DJ NEKO (Kenji Sato), spécialiste des remixes d\'anime et de city pop, apporte une touche nostalgique avec des transitions fluides entre différentes époques musicales ' +
    'japonaises. Les deux artistes alterneront des sessions de 45 minutes, créant une progression musicale parfaite pour danser jusqu\'au petit matin. Des danseurs professionnels ' +
    'interviendront ponctuellement pour des performances chorégraphiées, ajoutant une dimension visuelle à cette expérience sonore.',
  artistImage: '/assets/images/groupe4.jpg',
        socialLinks: [
          { platform: 'Mixcloud', url: 'https://mixcloud.com/djblossom' },
          { platform: 'Instagram', url: 'https://instagram.com/dj_neko_official' }
        ]
      },
      // Nouvel événement ajouté pour le samedi
      {
        id: 22,
        day: 'samedi',
        name: 'Night Market',
        description: 'Stands de cuisine japonaise et animations LED',
        startTime: '21:00',
        endTime: '01:30',
        scene: 'Kawaii Zone',
        category: 'food',
        longDescription: 'Le Night Market offre une expérience culinaire authentique avec plus de 20 stands proposant des spécialités japonaises traditionnelles et modernes. ' +
          'Dans une ambiance nocturne enchantée par des installations LED et des projections mapping, vous pourrez déguster des takoyaki, ramen, sushi, mochi et bien d\'autres délices ' +
          'tout en profitant d\'animations culturelles interactives.',
        artistImage: '/assets/images/foodmarket.jpg',
      },

      // JOUR 2 - DIMANCHE
      // Les événements du dimanche (simplifiés pour la brièveté)
      {
        id: 12,
        day: 'dimanche',
        name: 'RAINBOW VOLTAGE',
        description: 'Pop-rock avec influences anime',
        startTime: '15:30',
        endTime: '16:30',
        scene: 'Reiwa',
        category: 'concert',
        longDescription: 'RAINBOW VOLTAGE est un groupe pop-rock japonais qui s\'est fait connaître en composant des génériques d\'anime populaires. Leur style unique fusionne des mélodies accrocheuses de J-pop avec des arrangements rock énergiques et des références musicales aux bandes sonores d\'anime classiques. Le quatuor, mené par la chanteuse Haruka avec sa voix puissante et expressive, est célèbre pour ses performances interactives où le public est invité à participer à des chorégraphies simples sur certains refrains. Pour ce festival, RAINBOW VOLTAGE présentera leurs titres les plus populaires ainsi que leur nouveau single "Colorful Dreams" qui sortira le mois prochain.',
        artistImage: '/assets/images/groupe12.jpg',
        socialLinks: [
          { platform: 'YouTube', url: 'https://youtube.com/rainbowvoltage' },
          { platform: 'Twitter', url: 'https://twitter.com/rb_voltage' }
        ],
        setlist: [
          'Anime Heroes',
          'Colorful Dreams',
          'Electric Rainbow',
          'Voltage Up!',
          'Magical Journey',
          'Rising Sun',
          'Dimension Traveler'
        ]
      },
      {
        id: 13,
        day: 'dimanche',
        name: 'QUANTUM BEATS',
        description: 'Rock progressif moderne',
        startTime: '16:45',
        endTime: '17:45',
        scene: 'Heisei',
        category: 'concert',
        longDescription: 'QUANTUM BEATS repousse les frontières du rock progressif japonais avec leurs compositions complexes et leur approche innovante de la structure musicale. Formé par d\'anciens musiciens de session, ce groupe de quatre virtuoses se distingue par des morceaux aux changements de rythme audacieux et aux harmonies sophistiquées. Leur son caractéristique mêle instruments traditionnels comme le koto électrique à des synthétiseurs analogiques et des guitares aux effets travaillés. Les paroles, souvent inspirées de concepts scientifiques et philosophiques, ajoutent une dimension intellectuelle à leur musique déjà techniquement impressionnante. Leur performance au festival mettra en avant l\'intégralité de leur album concept "Temporal Paradox".',
        artistImage: '/assets/images/groupe2.jpg',
        socialLinks: [
          { platform: 'Bandcamp', url: 'https://quantumbeats.bandcamp.com' },
          { platform: 'Instagram', url: 'https://instagram.com/quantum_beats' }
        ],
        setlist: [
          'Quantum Entanglement',
          'Wave Function',
          'Schrödinger\'s Melody',
          'Temporal Paradox Suite I',
          'Temporal Paradox Suite II',
          'Relativistic Dreams',
          'Observer Effect'
        ]
      },
      {
        id: 14,
        day: 'dimanche',
        name: 'LUNAR ECHO',
        description: 'Voix cristalline et mélodies atmosphériques',
        startTime: '18:00',
        endTime: '19:00',
        scene: 'Reiwa',
        category: 'concert',
        longDescription: 'LUNAR ECHO est le projet solo de Mizuki Tanaka, ancienne chanteuse classique reconvertie dans la musique alternative. Sa voix cristalline aux inflexions éthérées se pose sur des compositions atmosphériques où se mêlent piano minimaliste, nappes synthétiques et percussions électroniques discrètes. Comparée souvent à une version japonaise de Björk ou Enya, Mizuki crée un univers musical onirique qui évoque les paysages nocturnes et les émotions les plus subtiles. Sur scène, sa performance est enrichie par des projections visuelles créées par l\'artiste digital Yoshi Komatsu, transformant chaque concert en une véritable expérience sensorielle immersive. Pour le festival Sakura Nights, elle présentera en avant-première plusieurs morceaux de son prochain album "Moonlight Whispers".',
        artistImage: '/assets/images/groupe14.jpg',
        socialLinks: [
          { platform: 'Spotify', url: 'https://spotify.com/artist/lunarecho' },
          { platform: 'Instagram', url: 'https://instagram.com/mizuki_lunarecho' }
        ],
        videoUrl: 'https://youtu.be/example-lunarecho',
        setlist: [
          'Lunar Lullaby',
          'Echo Chamber',
          'Silver Light',
          'Whispers of the Moon',
          'Distant Stars',
          'Eternal Night',
          'Crystal Voice'
        ]

      },
      {
        id: 15,
        day: 'dimanche',
        name: 'DIGITAL SHOGUN',
        description: 'Solo artist, pop alternative et rap',
        startTime: '19:15',
        endTime: '20:15',
        scene: 'Heisei',
        category: 'concert',
        longDescription: 'DIGITAL SHOGUN est l\'un des artistes les plus novateurs de la scène japonaise actuelle, fusionnant pop alternative, rap et influences traditionnelles japonaises. Kazuki Nakamura, l\'homme derrière ce projet, est connu pour son approche DIY de la création musicale, produisant lui-même tous ses morceaux et concevant ses propres visuels. Ses paroles, alternant entre japonais et anglais, abordent des thèmes comme l\'identité culturelle à l\'ère numérique et la préservation des traditions dans un monde en constante évolution. Sur scène, DIGITAL SHOGUN allie énergie brute et moments d\'introspection, souvent accompagné de danseurs contemporains qui interprètent visuellement ses textes. Son récent album "Neo Mythology" a été salué par la critique comme une révolution dans la J-pop moderne.',
        artistImage: '/assets/images/groupe8.jpg',
        socialLinks: [
          { platform: 'YouTube', url: 'https://youtube.com/digitalshogun' },
          { platform: 'Twitter', url: 'https://twitter.com/digital_shogun' },
          { platform: 'TikTok', url: 'https://tiktok.com/@digitalshogunofficial' }
        ],
        setlist: [
          'Neo Samurai',
          'Digital Dynasty',
          'Tokyo Renaissance',
          'Modern Mythology',
          'Ancient Future',
          'Cyber Bushido',
          'Quantum Shogun',
          'Heritage Code'
        ]
      },
      {
        id: 16,
        day: 'dimanche',
        name: 'CRYSTAL NOISE',
        description: 'Duo électro-pop expérimental',
        startTime: '20:30',
        endTime: '21:30',
        scene: 'Reiwa',
        category: 'concert',
        longDescription: 'CRYSTAL NOISE est un duo électro-pop expérimental formé par la productrice Rei Takahashi et le multi-instrumentiste Shin Yamamoto. Leur approche unique combine des mélodies pop accessibles avec des structures musicales non conventionnelles et des textures sonores inattendues. Travaillant principalement avec des synthétiseurs modulaires et des instruments acoustiques traités numériquement, ils créent un paysage sonore riche où le familier et l\'étrange se côtoient harmonieusement. Connus pour ne jamais jouer deux fois le même set, leurs performances sont partiellement improvisées, rendant chaque concert unique. Pour le festival Sakura Nights, CRYSTAL NOISE prépare une collaboration spéciale avec un quatuor à cordes qui ajoutera une dimension orchestrale à leur univers électronique.',
        artistImage: '/assets/images/groupe11.jpg',
        socialLinks: [
          { platform: 'SoundCloud', url: 'https://soundcloud.com/crystalnoise' },
          { platform: 'Instagram', url: 'https://instagram.com/crystal.noise' }
        ],
        videoUrl: 'https://youtu.be/example-crystalnoise',
        setlist: [
          'Crystalline Structure',
          'Beautiful Interference',
          'Modular Love',
          'Static Emotion',
          'Glitch Perfect',
          'Harmonic Distortion',
          'Digital Clarity'
        ]
      },
      {
        id: 17,
        day: 'dimanche',
        name: 'ETERNAL WAVE',
        description: 'Groupe légendaire, show final grandiose',
        startTime: '22:00',
        endTime: '01:00',
        scene: 'Heisei',
        category: 'concert',
        longDescription: 'ETERNAL WAVE, véritable institution de la musique japonaise depuis plus de 25 ans, clôturera le festival avec un show final grandiose. Connu pour avoir révolutionné la J-rock dans les années 90 avec leur mélange de rock progressif, de visual kei et d\'éléments symphoniques, le groupe a influencé des générations entières de musiciens japonais. Leur performance au Sakura Nights représente un événement rare, le groupe ne se produisant que très occasionnellement depuis leur "pause indéfinie" annoncée en 2018. Pour cette occasion exceptionnelle, ETERNAL WAVE jouera l\'intégralité de leur album culte "Timeless Echo" pour son 20ème anniversaire, accompagné par un orchestre de 15 musiciens. Le spectacle inclura également des effets pyrotechniques, des chorégraphies aériennes et une finale surprenante qui promet de rester dans les mémoires.',
        artistImage: '/assets/images/groupe9.jpg',
        socialLinks: [
          { platform: 'Spotify', url: 'https://spotify.com/artist/eternalwave' },
          { platform: 'YouTube', url: 'https://youtube.com/eternalwaveofficial' },
          { platform: 'Twitter', url: 'https://twitter.com/eternal_wave' }
        ],
        videoUrl: 'https://youtu.be/example-eternalwave',
        setlist: [
          'Eternal Overture',
          'Wave of Destiny',
          'Timeless Echo',
          'Immortal Flame',
          'Sakura\'s Last Dance',
          'Legendary Tears',
          'Infinite Journey',
          'Final Eternity',
          'Farewell Symphony',
          'Encore: Forever Wave'
        ]
      },
      {
        id: 18,
        day: 'dimanche',
        name: 'Défilé de mode Harajuku',
        description: 'Tendances et styles japonais',
        startTime: '15:00',
        endTime: '23:00',
        scene: 'Kawaii Zone',
        category: 'animation',
        longDescription: 'Le Défilé de mode Harajuku est une célébration vibrante des styles vestimentaires uniques qui ont fait la renommée de ce quartier tokyoïte. Organisé plusieurs fois dans la journée (16h, 18h, 20h), ce défilé met en vedette aussi bien des mannequins professionnels que des influenceurs et des participants au festival sélectionnés pour leur style original. Chaque session explore une facette différente de la mode Harajuku : le premier défilé présente les styles classiques (Lolita, Visual Kei, Decora), le second se concentre sur les tendances contemporaines, et le défilé final explore les créations avant-gardistes de jeunes designers japonais émergents. Entre les défilés, des ateliers de maquillage et de stylisme permettent aux festivaliers d\'explorer ces esthétiques uniques et de recevoir des conseils personnalisés pour adapter ces styles à leur propre garde-robe.',
        artistImage: '/assets/images/harajuku.jpg',
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/harajuku_fashion_fest' }
        ]
      },
      {
        id: 19,
        day: 'dimanche',
        name: 'Photo booth style purikura',
        description: 'Photos stylisées à la japonaise',
        startTime: '15:00',
        endTime: '23:00',
        scene: 'Kawaii Zone',
        category: 'animation',
        longDescription: 'L\'expérience Photo booth style purikura transpose l\'incontournable phénomène des cabines photographiques japonaises au festival Sakura Nights. Bien plus qu\'un simple photomaton, ces installations offrent une expérience complète de personnalisation avec des filtres kawaii, des décorations virtuelles et des effets d\'embellissement typiquement japonais. Quatre cabines thématiques sont disponibles, chacune proposant un univers différent : "Tokyo Neon Dreams", "Kawaii Paradise", "Anime Legends" et "Sakura Fantasy". Après la séance photo, les participants peuvent décorer numériquement leurs clichés sur des bornes tactiles avec des centaines de stickers virtuels, modifier les couleurs et ajouter du texte personnalisé. Les photos peuvent être imprimées instantanément en format autocollant traditionnel purikura ou envoyées numériquement par email et partagées directement sur les réseaux sociaux avec le hashtag #SakuraNights2024.',
        artistImage: '/assets/images/purikura.jpg'
      },
      {
        id: 20,
        day: 'dimanche',
        name: 'Meet & greet avec artistes',
        description: 'Sur tirage au sort',
        startTime: '15:00',
        endTime: '23:00',
        scene: 'Kawaii Zone',
        category: 'rencontre',
        longDescription: 'Les sessions Meet & greet offrent aux fans une opportunité rare de rencontrer leurs artistes préférés dans un cadre intime et privilégié. Fonctionnant sur un système de tirage au sort pour garantir l\'équité, ces rencontres sont organisées dans un espace spécialement aménagé de la Kawaii Zone. Chaque session dure environ 20 minutes et permet à un groupe de 10 fans de discuter avec les artistes, prendre des photos et faire dédicacer un article. Pour participer, les festivaliers doivent scanner leur bracelet à la borne dédiée avant 16h chaque jour, et les gagnants reçoivent une notification sur l\'application du festival. Un calendrier détaillé des artistes disponibles est affiché à l\'entrée de la zone. Des interprètes japonais-français sont présents pour faciliter les échanges, et un photographe professionnel immortalise ces moments uniques avec des clichés téléchargeables gratuitement après l\'événement.',
        artistImage: '/assets/images/rencontre.jpg'
      },
      {
        id: 21,
        day: 'dimanche',
        name: 'Night Market',
        description: 'Stands de cuisine japonaise et animations LED',
        startTime: '21:00',
        endTime: '01:30',
        scene: 'Kawaii Zone',
        category: 'food',
        longDescription: 'Le Night Market offre une expérience culinaire authentique avec plus de 20 stands proposant des spécialités japonaises traditionnelles et modernes. Dans une ambiance nocturne enchantée par des installations LED et des projections mapping, vous pourrez déguster des takoyaki, ramen, sushi, mochi et bien d\'autres délices tout en profitant d\'animations culturelles interactives. Chaque stand est tenu par des chefs spécialisés, dont certains venus directement du Japon pour l\'occasion. En plus de la nourriture, des démonstrations culinaires sont programmées toutes les heures, permettant de découvrir les techniques de préparation traditionnelles. Une section "Tokyo Street Food" reconstitue l\'ambiance des ruelles commerçantes japonaises, tandis qu\'un espace "Desserts Kawaii" propose des pâtisseries et glaces aux présentations artistiques dignes d\'Instagram. Des options végétariennes, véganes et sans gluten sont disponibles à presque tous les stands.',
        artistImage: '/assets/images/foodmarket.jpg'
      }
    ];
  }

  // Ouvrir la modal de détail d'un événement
  openEventDetail(event: FestivalEvent): void {
    this.selectedEvent = event;
    this.isDetailModalOpen = true;
  }

  // Fermer la modal
  closeEventDetail(): void {
    this.isDetailModalOpen = false;
    // Petit délai pour l'animation de fermeture
    setTimeout(() => {
      this.selectedEvent = null;
    }, 300);
  }

  // Gestion des changements de filtre
  handleFilterChange(event: any): void {
    const { name, value } = event.target;
    this.filter = { ...this.filter, [name]: value };
    this.applyFilters();
  }

  // Réinitialiser les filtres
  resetFilters(): void {
    this.filter = {
      day: 'all',
      scene: 'all',
      startTime: 'all',
      category: 'all',
      search: ''
    };
    this.applyFilters();
  }

  // Appliquer les filtres aux événements
  applyFilters(): void {
    let result = this.events;

    if (this.filter.day !== 'all') {
      result = result.filter(event => event.day === this.filter.day);
    }

    if (this.filter.scene !== 'all') {
      result = result.filter(event => event.scene === this.filter.scene);
    }

    if (this.filter.startTime !== 'all') {
      result = result.filter(event => event.startTime === this.filter.startTime);
    }

    if (this.filter.category !== 'all') {
      result = result.filter(event => event.category === this.filter.category);
    }

    if (this.filter.search) {
      const searchLower = this.filter.search.toLowerCase();
      result = result.filter(
        event =>
          event.name.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower)
      );
    }

    this.filteredEvents = result;
  }


// Fonction pour obtenir une couleur de fond en fonction de la scène
  getSceneColor(scene: string | undefined | null): string {
    if (!scene) {
      return 'bg-gray-200'; // Valeur par défaut si scene est null ou undefined
    }

    switch(scene) {
      case 'Heisei':
        return 'bg-pink-200';
      case 'Reiwa':
        return 'bg-purple-200';
      case 'Kawaii Zone':
        return 'bg-orange-200';
      default:
        return 'bg-gray-200';
    }
  }

// Fonction pour obtenir une icône en fonction de la catégorie
  getCategoryIcon(category: string | undefined | null): string {
    if (!category) {
      return '✨'; // Valeur par défaut si category est null ou undefined
    }

    switch(category) {
      case 'concert':
        return '🎵';
      case 'dj set':
        return '🎧';
      case 'atelier':
        return '🧵';
      case 'animation':
        return '🎭';
      case 'shopping':
        return '🛍️';
      case 'rencontre':
        return '👋';
      case 'food':
        return '🍱';
      case 'cérémonie':
        return '🥁';
      default:
        return '✨';
    }
  }

  // Pour le menu mobile
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Extraire les options uniques pour les filtres
  get timeSlots(): string[] {
    return [...new Set(this.events.map(event => event.startTime))].sort();
  }

  get scenes(): string[] {
    return [...new Set(this.events.map(event => event.scene))];
  }

  get categories(): string[] {
    return [...new Set(this.events.map(event => event.category))];
  }
}
