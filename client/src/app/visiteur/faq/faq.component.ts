import { Component, OnInit } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

interface Partner {
  name: string;
  logo: string;
  website?: string;
}
interface socials {
  name: string;
  logo: string;
  website?: string;
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  // Déclaration des partenaires par catégorie
  officialPartners: Partner[] = [
    { name: 'Japan Foundation', logo: 'JapanFoundation.jpg', website: 'https://www.jpf.go.jp' },
    { name: 'Sony Music Japan', logo: 'sonyMusic.png', website: 'https://www.sonymusic.co.jp' },
    { name: 'Bandai Namco', logo: 'BandaiNamco.jpg', website: 'https://www.bandainamco.co.jp' },
    { name: 'Uniqlo', logo: 'uniqlo.png', website: 'https://www.uniqlo.com' }
  ];

  mediaPartners: Partner[] = [
    { name: 'Anime News Network', logo: 'AnimeNewsNetwork.png', website: 'https://www.animenewsnetwork.com' },
    { name: 'Crunchyroll', logo: 'crunchyroll.png', website: 'https://www.crunchyroll.com' },
    { name: 'Japan FM', logo: 'JapanFM.png', website: '#' },
    { name: 'Wave Magazine', logo: 'WaveMagazine.png', website: '#' },
    { name: 'Radio Manga', logo: 'RadioManga.png', website: '#' }
  ];

  localPartners: Partner[] = [
    { name: 'Office du Tourisme', logo: 'OfficeTourisme.png', website: '#' },
    { name: 'Mairie', logo: 'mairie.png', website: '#' },
    { name: 'Kyoto Bistro', logo: 'KyotoBistro.png', website: '#' },
    { name: 'Manga Café', logo: 'CafeManga.png', website: '#' },
    { name: 'École de Japonais', logo: 'EcoleJP.png', website: '#' },
    { name: 'Association Franco-Japonaise', logo: 'AssoFrJp.png', website: '#' }
  ];

  socialNetworks: socials[] = [
    {name: 'Facebook', logo: 'facebook.png', website:'#'},
    {name: 'Instagram', logo: 'instagram.png', website:'#'},
    {name: 'Youtube', logo: 'youtube.png', website:'#'},
    {name: 'Twitter', logo: 'twitter.png', website:'#'},
    {name: 'Twitch', logo: 'tic.png', website:'#'},
    {name: 'Tiktok', logo: 'tictoc.png', website: '#'}
  ]
  //Items Faq
  faqItems: FaqItem[] = [
    {
      question: 'Quand aura lieu le festival cette année ?',
      answer: 'Le festival se déroulera du <strong>24 au 25 Août</strong>. Les portes ouvrent à 14h30 chaque jour.',
      category: 'Informations générales'
    },
    {
      question: 'Comment acheter des billets ?',
      answer: 'Les billets sont disponibles sur <a href="#" class="text-primary hover:underline">notre billetterie en ligne</a>. ' +
        'Vous pouvez également les acheter auprès de nos points de vente partenaires.',
      category: 'Billetterie'
    },
    {
      question: 'Peut-on camper sur place ?',
      answer: 'Oui, un espace camping est disponible pour les festivaliers. L\'accès au camping est inclus dans le pass 2 jours, ' +
        'ou peut être acheté séparément pour les billets journaliers.',
      category: 'Hébergement'
    },
    {
      question: 'Y a-t-il un âge minimum pour participer au festival ?',
      answer: 'Le festival est ouvert à tous. Les enfants de moins de 12 ans doivent être accompagnés d\'un adulte. ' +
        'L\'entrée est gratuite pour les moins de 8 ans.',
      category: 'Informations générales'
    },
    {
      question: 'Quelle est la politique d\'annulation ?',
      answer: 'Les billets peuvent être remboursés jusqu\'à 30 jours avant l\'événement. Passé ce délai, ' +
        'nous proposons un service de revente officiel sur notre plateforme.',
      category: 'Billetterie'
    },
    {
      question: 'Peut-on apporter sa nourriture et ses boissons ?',
      answer: 'La nourriture personnelle n\'est pas autorisée dans l\'enceinte du festival. Les bouteilles en plastique non alcoolisées ' +
        'sont permises. Les contenants en verre sont interdits pour des raisons de sécurité.',
      category: 'Sur place'
    },
    {
      question: 'Y a-t-il des casiers pour déposer ses affaires ?',
      answer: 'Oui, des casiers sécurisés sont disponibles à la location pour la journée ou la durée du festival. Réservation conseillée ' +
        'sur notre site web.',
      category: 'Sur place'
    },
    {
      question: 'Comment se rendre au festival ?',
      answer: 'Plusieurs options s\'offrent à vous : <ul class="list-disc pl-5 mt-2"><li>Navettes gratuites depuis la gare centrale' +
        '</li><li>Parking festivalier (payant, à réserver en avance)</li><li>Covoiturage via notre plateforme partenaire</li></ul>',
      category: 'Transport'
    },
    {
      question: 'Quels artistes seront présents cette année ?',
      answer: 'Notre programmation complète est disponible sur la <a href="/visiteur/programme">page <strong>Programme</strong></a> ' +
        'de notre site. Cette année, nous accueillons 12 artistes et groupes répartis sur 3 scènes.',
      category: 'Programme et artistes'
    },
    {
      question: 'À quelle heure se produiront les artistes principaux ?',
      answer: 'Les horaires détaillés des passages sont disponibles sur notre application mobile et sur le programme imprimé distribué ' +
        'à l\'entrée. En général, nos têtes d\'affiche se produisent entre 20h30 et 1h00 sur la scène principale.',
      category: 'Programme et artistes'
    },
    {
      question: 'Y aura-t-il des activités en dehors des concerts ?',
      answer: 'Absolument ! Le festival propose de nombreuses activités parallèles : ateliers créatifs, performances artistiques, ' +
        'espace détente avec yoga matinal, un marché d\'artisans locaux, et des installations interactives. ' +
        'Consultez le <a href="/visiteur/programme"><strong>Programme</strong></a> sur notre site pour plus de détails.',
      category: 'Programme et artistes'
    },
    {
      question: 'Comment sont organisées les différentes scènes ?',
      answer: 'Le festival compte 2 scènes principales : <ul class="list-disc pl-5 mt-2"><li>La Scène Heisei accueille les têtes d\'affiche ' +
        'et les performances majeures</li><li>La Scène Reiwa est dédiée aux talents émergents.</li></ul>',
      category: 'Programme et artistes'
    },
    {
      question: 'Est-ce qu\'il y a des animations pour les enfants ?',
      answer: 'Oui, un espace famille "Les P\'tits Festivaliers" est ouvert de 15h à 19h chaque jour, avec des ateliers créatifs,' +
        ' des spectacles adaptés, et des jeux. Des protections auditives pour enfants sont disponibles gratuitement à l\'accueil.',
      category: 'Programme et artistes'
    },

    // Services sur place
    {
      question: 'Y a-t-il des distributeurs d\'argent sur le site ?',
      answer: 'Deux distributeurs automatiques sont disponibles près de l\'entrée principale. ' +
        'Cependant, nous vous recommandons d\'utiliser notre système de paiement cashless qui est plus rapide et plus sûr.',
      category: 'Sur place'
    },
    {
      question: 'Quels types de nourriture seront disponibles ?',
      answer: 'Notre Night Market propose une grande diversité de cuisines : street food japonaise, ' +
        'options végétariennes, véganes et sans gluten. Nous mettons un point d\'honneur à sélectionner des restaurateurs ' +
        'utilisant des ingrédients de qualité et locaux.',
      category: 'Sur place'
    },
    {
      question: 'Proposez-vous des options végétariennes/véganes ?',
      answer: 'Oui, chaque stand de nourriture propose au minimum une option végétarienne. ' +
        'Plusieurs stands sont entièrement dédiés à la cuisine végétale. Un guide des options véganes est disponible sur notre application mobile.',
      category: 'Sur place'
    },
    {
      question: 'Les animaux de compagnie sont-ils autorisés ?',
      answer: 'Pour des raisons de sécurité et de bien-être animal (volume sonore élevé), ' +
        'les animaux de compagnie ne sont pas admis sur le site du festival, à l\'exception des chiens d\'assistance.',
      category: 'Sur place'
    },
    {
      question: 'Y a-t-il un service médical sur place ?',
      answer: 'Un poste de secours avec personnel médical qualifié est disponible 24h/24 près de l\'entrée principale. ' +
        'Des équipes mobiles de secouristes circulent également sur le site. En cas d\'urgence, adressez-vous à n\'importe quel membre du staff.',
      category: 'Sur place'
    },
    {
      question: 'Est-ce que le site est accessible aux personnes à mobilité réduite ?',
      answer: 'Oui, le festival est accessible aux PMR : places de parking dédiées, chemins adaptés, plateformes surélevées ' +
        'devant les scènes, et toilettes accessibles. Un service d\'accompagnement est disponible sur réservation via l\'espace ' +
        '<a href="/accessibilite">Accessibilité</a> de notre site.',
      category: 'Sur place'
    },
    {
      question: 'Peut-on recharger son téléphone quelque part ?',
      answer: 'Des stations de recharge gratuites sont disponibles à plusieurs endroits du site. ' +
        'Un service payant de location de batteries externes est également proposé à l\'accueil principal.',
      category: 'Sur place'
    },
    {
      question: 'Y a-t-il du Wi-Fi gratuit sur le site ?',
      answer: 'Un réseau Wi-Fi gratuit est disponible dans certaines zones du festival, notamment près des ' +
        'espaces de restauration et à l\'accueil. Cependant, en raison du grand nombre d\'utilisateurs, ' +
        'la connexion peut être limitée aux heures de forte affluence.',
      category: 'Sur place'
    },

    // Logement et transport
    {
      question: 'Quels sont les hôtels partenaires du festival ?',
      answer: 'Nous avons des partenariats avec plusieurs établissements proposant des tarifs ' +
        'préférentiels pour les festivaliers. La liste complète est disponible dans la section Partenaire ' +
        'de notre site, avec des options pour tous les budgets.',
      category: 'Hébergement'
    },
    {
      question: 'Y a-t-il un service de navettes depuis les villes voisines ?',
      answer: 'Des navettes gratuites circulent entre la gare centrale et le site du festival de 10h à 3h du matin. ' +
        'Des navettes payantes sont également disponibles depuis les villes voisines (Réservation obligatoire sur notre site).',
      category: 'Transport'
    },
    {
      question: 'Quelles sont les options d\'hébergement alternatives au camping ?',
      answer: 'Outre notre camping standard, nous proposons : <ul class="list-disc pl-5 mt-2"><li>Un camping "confort" ' +
        'avec douches chaudes illimitées</li><li>Des tentes pré-montées (2, 4 ou 6 places)</li><li>Des mobilhomes en quantité ' +
        'limitée</li><li>Une zone camping-car équipée</li></ul>',
      category: 'Hébergement'
    },
    {
      question: 'À quelle heure ferme le camping chaque jour ?',
      answer: 'Le camping est accessible 24h/24 pour les personnes disposant d\'un bracelet camping. ' +
        'Toutefois, pour respecter le repos des campeurs, les activités bruyantes sont interdites entre 4h et 9h du matin.',
      category: 'Hébergement'
    },
    {
      question: 'Le parking est-il surveillé la nuit ?',
      answer: 'Le parking principal est surveillé par des agents de sécurité 24h/24. ' +
        'Cependant, nous vous conseillons de ne pas laisser d\'objets de valeur dans votre véhicule. ' +
        'Un parking premium avec vidéosurveillance est disponible en option lors de l\'achat de votre billet.',
      category: 'Transport'
    },

    // Billets et accès
    {
      question: 'Est-ce qu\'il y a des pass VIP et quels sont les avantages ?',
      answer: 'Les pass VIP offrent : <ul class="list-disc pl-5 mt-2"><li>Accès à un espace ' +
        'lounge exclusif avec vue sur la scène principale</li><li>Bar et restauration dédiés</li><li>Toilettes privées</li>' +
        '<li>Entrée prioritaire sur le site</li><li>Un kit de bienvenue</li><li>Accès au parking VIP</li></ul>',
      category: 'Billetterie'
    },
    {
      question: 'Peut-on sortir et revenir dans la journée avec le même billet ?',
      answer: 'Oui, vous pouvez sortir et revenir le même jour grâce au système de scan de bracelet aux entrées/sorties. ' +
        'Attention, dernière entrée possible à 23h.',
      category: 'Billetterie'
    },
    {
      question: 'Comment fonctionne le système de bracelets/billets ?',
      answer: 'À votre première entrée, votre billet sera échangé contre un bracelet RFID inviolable à ' +
        'conserver pendant toute la durée du festival. Ce bracelet sert d\'accès au site et peut également être lié à ' +
        'votre compte de paiement cashless si vous le souhaitez.',
      category: 'Billetterie'
    },
    {
      question: 'Les billets sont-ils nominatifs ?',
      answer: 'Oui, tous nos billets sont nominatifs pour des raisons de sécurité. Une pièce d\'identité correspondant ' +
        'au nom sur le billet peut être demandée à l\'entrée. Un service de changement de nom est disponible jusqu\'à 7 jours avant l\'événement,' +
        ' moyennant des frais administratifs de 15€.',
      category: 'Billetterie'
    },
    {
      question: 'Que faire en cas de perte de billet ou de bracelet ?',
      answer: 'En cas de perte de billet avant le festival, contactez notre service client. Pour un bracelet perdu ou endommagé ' +
        'pendant l\'événement, rendez-vous au point info avec une pièce d\'identité. Des frais de remplacement de 20€ seront appliqués.',
      category: 'Billetterie'
    },

    // Objets et sécurité
    {
      question: 'Quels objets sont interdits sur le site ?',
      answer: 'Sont interdits : <ul class="list-disc pl-5 mt-2"><li>Bouteilles en verre et canettes</li>' +
        '<li>Objets dangereux (armes, feux d\'artifice, etc.)</li><li>Drogues et substances illicites</li>' +
        '<li>Alcool venant de l\'extérieur</li><li>Tentes et chaises pliantes</li><li>Drones et selfie sticks</li>' +
        '<li>Appareils audio ou instruments bruyants</li></ul>',
      category: 'Sécurité'
    },
    {
      question: 'Y a-t-il un service d\'objets trouvés ?',
      answer: 'Le bureau des objets trouvés est situé au point information central. Après le festival, les objets non réclamés ' +
        'seront répertoriés sur notre site pendant 1 mois, puis donnés à des associations si non réclamés.',
      category: 'Sécurité'
    },
    {
      question: 'Comment fonctionne la sécurité sur le site ?',
      answer: 'Une équipe de sécurité professionnelle est présente 24h/24. Des contrôles des sacs sont' +
        ' effectués à l\'entrée. Des caméras de surveillance sont installées dans les zones stratégiques. ' +
        'En cas de problème, n\'hésitez pas à vous adresser au personnel de sécurité identifiable à leurs gilets jaunes.',
      category: 'Sécurité'
    },
    {
      question: 'Les appareils photo professionnels sont-ils autorisés ?',
      answer: 'Les appareils photos compacts et smartphones sont autorisés pour usage personnel. Les appareils ' +
        'professionnels (objectifs détachables, zoom supérieur à 200mm) nécessitent une accréditation presse. ' +
        'Les perches à selfie sont interdites pour des raisons de sécurité.',
      category: 'Sécurité'
    },
    {
      question: 'Qu\'arrive-t-il en cas d\'orage ou de conditions météo difficiles ?',
      answer: 'Un protocole météo est en place en cas d\'intempéries. Si nécessaire, certains concerts peuvent être ' +
        'reportés ou annulés pour garantir la sécurité de tous. Des abris sont prévus en cas d\'orage soudain. ' +
        'Suivez les instructions du personnel et consultez l\'application du festival pour des mises à jour en temps réel.',
      category: 'Sécurité'
    },

    // Questions pratiques
    {
      question: 'Y a-t-il des douches dans le camping ?',
      answer: 'Oui, des blocs sanitaires avec douches sont disponibles gratuitement dans le camping. ' +
        'Les heures d\'affluence se situent entre 9h et 11h. Des douches premium avec eau chaude garantie sont disponibles avec ' +
        'supplément au camping confort.',
      category: 'Hébergement'
    },
    {
      question: 'Quels sont les horaires d\'ouverture des portes chaque jour ?',
      answer: 'Les portes du site ouvrent à 14h30 et les concerts débutent à 15h. La dernière entrée est possible ' +
        'jusqu\'à 23. Les scènes ferment à 1h.',
      category: 'Informations générales'
    },
    {
      question: 'Comment fonctionnent les paiements sur le site (cash, carte, cashless) ?',
      answer: 'Nous utilisons principalement un système cashless : votre bracelet peut être crédité en ligne ou aux bornes sur place. ' +
        'Certains stands acceptent également les paiements par carte. Les distributeurs de billets sont disponibles près de l\'entrée principale.',
      category: 'Sur place'
    },
    {
      question: 'Y a-t-il un vestiaire ou consigne pour les objets volumineux ?',
      answer: 'Un service de consigne sécurisée est disponible près de l\'entrée principale (5€/jour ou 15€ pour la durée du festival). ' +
        'Des casiers plus petits sont également disponibles à la location dans différentes zones du site.',
      category: 'Sur place'
    },
    {
      question: 'Proposez-vous des verres réutilisables/consignés ?',
      answer: 'Tous nos points de vente de boissons utilisent des gobelets réutilisables consignés (2€). ' +
        'Vous pouvez soit les garder comme souvenir, soit les retourner pour récupérer votre consigne. ' +
        'Cette initiative s\'inscrit dans notre démarche éco-responsable.',
      category: 'Sur place'
    },

    // Écologie et engagement
    {
      question: 'Quelles sont vos actions en faveur de l\'environnement ?',
      answer: 'Notre festival s\'engage pour réduire son impact : <ul class="list-disc pl-5 mt-2"><li>Gobelets réutilisables et ' +
        'vaisselle compostable</li><li>Tri sélectif et compostage</li><li>Toilettes sèches</li><li>Énergie partiellement solaire</li>' +
        '<li>Incitation au covoiturage et transports en commun</li><li>Partenariat avec des producteurs locaux</li></ul>',
      category: 'Écologie et engagement'
    },
    {
      question: 'Comment gérez-vous les déchets pendant le festival ?',
      answer: 'Des points de tri sélectif sont disponibles partout sur le site. Une équipe verte de bénévoles sensibilise le public ' +
        'et aide au tri. Un système de récompenses est mis en place pour les campeurs qui ramènent leurs sacs de déchets triés ' +
        '(jetons boisson offerts). Nos déchets organiques sont compostés localement.',
      category: 'Écologie et engagement'
    },
    {
      question: 'Comment puis-je participer en tant que bénévole ?',
      answer: 'Les inscriptions pour l\'équipe de bénévoles ouvrent généralement en mars sur notre site. En échange de quelques heures ' +
        'de participation, les bénévoles bénéficient d\'un accès gratuit au festival, de repas, et d\'un camping dédié.',
      category: 'Écologie et engagement'
    },
    {
      question: 'Quelle est votre politique concernant l\'inclusion et la diversité ?',
      answer: 'Nous nous engageons à créer un environnement sûr et inclusif pour tous. Cela se traduit par : ' +
        '<ul class="list-disc pl-5 mt-2"><li>Une programmation équilibrée et diversifiée</li><li>Une équipe formée à ' +
        'la prévention des discriminations et du harcèlement</li><li>Des espaces safe zones</li><li>Une politique de ' +
        'tolérance zéro face aux comportements inappropriés</li><li>Une accessibilité améliorée pour les personnes en ' +
        'situation de handicap</li></ul>',
      category: 'Écologie et engagement'
    }
  ];

  categories: string[] = [];
  selectedCategory: string = 'Toutes';
  filteredFaqItems: FaqItem[] = [];

  ngOnInit(): void {
    // Extraire toutes les catégories uniques
    this.categories = [...new Set(this.faqItems.map(item => item.category))];
    // Initialiser avec toutes les questions
    this.filterByCategory('Toutes');
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'Toutes') {
      this.filteredFaqItems = this.faqItems;
    } else {
      this.filteredFaqItems = this.faqItems.filter(item => item.category === category);
    }
  }
}
