-- Exemple d'insertion des données initiales en pur SQL
-- Author: Solveig

-- Insertion des scènes
INSERT INTO scene (id, name) VALUES (1,'Heisei');
INSERT INTO scene (id, name) VALUES (2,'Reiwa');
INSERT INTO scene (id, name) VALUES (3,'Kawaii Zone');

-- Insertion des artistes
INSERT INTO artiste (id, nom, url_artist_image) VALUES
(1,'Kodo', 'taiko.jpg'),
(9,'TokyoTunes', 'karaoke.jpg'),
(10,'KawaiiMart', 'merch.jpg'),
(12,'foodmarket', 'foodmarket.jpg'),
(20,'purikura booth', 'purikura.jpg'),
(21,'rencontre', 'rencontre.jpg');


INSERT INTO artiste (id, nom, url_artist_image, url_social_media) VALUES
(2,'CYBER SHRINE', 'groupe13.jpg', 'cybershrine'),
(3, 'NEON SAMURAI', 'groupe1.jpg', 'neonsamurai'),
(4, 'PIXEL DREAMS', 'groupe5.jpg', 'pixeldreams'),
(5, 'SAKURA STORM', 'groupe10.jpg', 'sakurastorm_official'),
(6, 'TOKYO PULSE', 'groupe3.jpg', 'tokyopulse'),
(7, 'MIDNIGHT DYNASTY', 'groupe7.jpg', 'midnightdynasty'),
(8, 'sakuranight cosplay', 'cosplay.jpg', 'sakuranight_cosplay'),
(11, 'DJ BLOSSOM', 'groupe4.jpg', 'djblossom_official'),
(13, 'RAINBOW VOLTAGE', 'groupe12.jpg', 'rb_voltage'),
(14, 'QUANTUM BEATS', 'groupe2.jpg', 'quantum_beats'),
(15, 'LUNAR ECHO', 'groupe14.jpg', 'mizuki_lunarecho'),
(16, 'DIGITAL SHOGUN', 'groupe8.jpg', 'digital_shogun'),
(17, 'CRYSTAL NOISE', 'groupe11.jpg', 'crystal.noise'),
(18, 'ETERNAL WAVE', 'groupe9.jpg', 'eternal_wave'),
(19,'harajuku fashion fest', 'harajuku.jpg', 'harajuku_fashion_fest');


-- Insertion des événements
INSERT INTO evenement (event_id, event_name, start_time, end_time, description, "longDescription", categorie, artiste_id, scene_id) VALUES
(1,'Cérémonie d''ouverture', '2025-09-27 15:30:00', '2025-09-27 16:00:00',
 'Performance de tambours taiko',
 'La cérémonie d''ouverture du festival Sakura Nights débutera par une performance spectaculaire de tambours taiko traditionnels. Le groupe Kodo, reconnu mondialement, présentera une chorégraphie spécialement conçue pour l''événement, mélangeant rythmes ancestraux et arrangements contemporains.',
 'CEREMONIE', 1, 1),
(8, 'Ateliers de cosplay', '2025-09-27 15:00:00', '2025-09-27 23:00:00',
 'Apprenez à créer vos propres costumes',
 'Les ateliers de cosplay offrent une opportunité unique d''apprendre les techniques professionnelles de création de costumes avec des experts reconnus. ' ||
 'Des sessions sont proposées pour tous les niveaux, du débutant à l''avancé, avec des focus sur différentes techniques comme le travail des tissus, la création d''accessoires ' ||
 'en mousse ou l''utilisation de l''électronique pour des costumes interactifs.',
 'ATELIER', 8, 3),
(9, 'Zone de karaoké nocturne', '2025-09-27 15:00:00', '2025-09-27 23:00:00',
 'Chantez vos génériques d''anime préférés',
 'Animée par TokyoTunes, la Zone de karaoké nocturne est l''endroit idéal pour libérer votre voix intérieure sur vos génériques d''anime et J-pop préférés ! ' ||
 'Aménagée comme un véritable karaoké japonais avec des salles semi-privées aux thématiques variées (Ghibli, Shonen, Retro Anime, J-pop moderne), ' ||
 'cette zone propose une collection de plus de 1000 chansons en japonais et en version multilingue. Un système de réservation permet de garantir à ' ||
 'chacun un temps de chant, et des mini-concours auront lieu toutes les heures avec des prix à gagner. Les participants les plus talentueux pourront être ' ||
 'sélectionnés pour une performance spéciale sur la petite scène de la Kawaii Zone en fin de soirée.',
 'ANIMATION', 9, 3),
(10, 'Boutiques de merchandising officiel', '2025-09-27 15:00:00', '2025-09-27 23:00:00',
 'Goodies et produits dérivés',
 'L''espace boutiques de merchandising officiel regroupe une sélection exclusive de produits dérivés des artistes présents au ' ||
 'festival ainsi que des articles spécialement conçus pour l''événement Sakura Nights. Ces stands proposent une large gamme de goodies allant des ' ||
 't-shirts, hoodies et tote bags aux accessoires plus collectionnables comme des pins, porte-clés, lithographies numérotées et éditions limitées de CD/vinyles. ' ||
 'Chaque artiste du festival disposera d''un espace dédié, et une collection capsule "Sakura Nights 2024" conçue par des illustrateurs japonais renommés sera disponible ' ||
 'en exclusivité. Un service de pré-commande est également disponible pour les articles les plus demandés.',
 'SHOPPING', 10, 3),
(11, 'DJ Sets', '2025-09-27 23:00:00', '2025-09-28 01:30:00',
 'Avec DJ BLOSSOM et DJ NEKO',
 'La nuit se transforme en véritable dance floor avec les DJ sets électrisants de DJ BLOSSOM et DJ NEKO. DJ BLOSSOM (Yumi Tanaka), ' ||
 'reconnue pour ses mélanges audacieux de J-pop, future bass et house japonaise, propose une ambiance festive et colorée qui capture l''essence du Harajuku contemporain. ' ||
 'DJ NEKO (Kenji Sato), spécialiste des remixes d''anime et de city pop, apporte une touche nostalgique avec des transitions fluides entre différentes époques musicales ' ||
 'japonaises. Les deux artistes alterneront des sessions de 45 minutes, créant une progression musicale parfaite pour danser jusqu''au petit matin. Des danseurs professionnels ' ||
 'interviendront ponctuellement pour des performances chorégraphiées, ajoutant une dimension visuelle à cette expérience sonore.',
 'DJ SET', 11, 3),
(12, 'Night Market', '2025-09-27 21:00:00', '2025-09-28 01:30:00',
 'Stands de cuisine japonaise et animations LED',
 'Le Night Market offre une expérience culinaire authentique avec plus de 20 stands proposant des spécialités japonaises traditionnelles et modernes. ' ||
 'Dans une ambiance nocturne enchantée par des installations LED et des projections mapping, vous pourrez déguster des takoyaki, ramen, sushi, mochi et bien d''autres délices ' ||
 'tout en profitant d''animations culturelles interactives.',
 'FOOD', 12, 3),
(19, 'Défilé de mode Harajuku', '2025-09-28 15:00:00', '2025-09-28 23:00:00',
 'Tendances et styles japonais',
 'Le Défilé de mode Harajuku est une célébration vibrante des styles vestimentaires uniques qui ont fait la renommée de ce quartier tokyoïte. ' ||
 'Organisé plusieurs fois dans la journée (16h, 18h, 20h), ce défilé met en vedette aussi bien des mannequins professionnels que des influenceurs et des participants au festival sélectionnés pour leur style original. ' ||
 'Chaque session explore une facette différente de la mode Harajuku : le premier défilé présente les styles classiques (Lolita, Visual Kei, Decora), le second se concentre sur les tendances contemporaines, ' ||
 'et le défilé final explore les créations avant-gardistes de jeunes designers japonais émergents. ' ||
 'Entre les défilés, des ateliers de maquillage et de stylisme permettent aux festivaliers d''explorer ces esthétiques uniques et de recevoir des conseils personnalisés pour adapter ces styles à leur propre garde-robe.',
 'ANIMATION', 19, 3),
(20, 'Photo booth style purikura', '2025-09-28 15:00:00', '2025-09-28 23:00:00',
 'Photos stylisées à la japonaise',
 'L''expérience Photo booth style purikura transpose l''incontournable phénomène des cabines photographiques japonaises au festival Sakura Nights. ' ||
 'Bien plus qu''un simple photomaton, ces installations offrent une expérience complète de personnalisation avec des filtres kawaii, des décorations virtuelles et des effets d''embellissement typiquement japonais. ' ||
 'Quatre cabines thématiques sont disponibles, chacune proposant un univers différent : "Tokyo Neon Dreams", "Kawaii Paradise", "Anime Legends" et "Sakura Fantasy". ' ||
 'Après la séance photo, les participants peuvent décorer numériquement leurs clichés sur des bornes tactiles avec des centaines de stickers virtuels, modifier les couleurs et ajouter du texte personnalisé. ' ||
 'Les photos peuvent être imprimées instantanément en format autocollant traditionnel purikura ou envoyées numériquement par email et partagées directement sur les réseaux sociaux avec le hashtag #SakuraNights2024.',
 'ANIMATION', 20, 3),
(21, 'Meet & greet avec artistes', '2025-09-28 15:00:00', '2025-09-28 23:00:00',
 'Sur tirage au sort',
 'Les sessions Meet & greet offrent aux fans une opportunité rare de rencontrer leurs artistes préférés dans un cadre intime et privilégié. ' ||
 'Fonctionnant sur un système de tirage au sort pour garantir l''équité, ces rencontres sont organisées dans un espace spécialement aménagé de la Kawaii Zone. ' ||
 'Chaque session dure environ 20 minutes et permet à un groupe de 10 fans de discuter avec les artistes, prendre des photos et faire dédicacer un article. ' ||
 'Pour participer, les festivaliers doivent scanner leur bracelet à la borne dédiée avant 16h chaque jour, et les gagnants reçoivent une notification sur l''application du festival. ' ||
 'Un calendrier détaillé des artistes disponibles est affiché à l''entrée de la zone. Des interprètes japonais-français sont présents pour faciliter les échanges, et un photographe professionnel ' ||
 'immortalise ces moments uniques avec des clichés téléchargeables gratuitement après l''événement.',
 'RENCONTRE', 21, 3),
(22, 'Night Market', '2025-09-28 21:00:00', '2025-09-29 01:30:00',
 'Stands de cuisine japonaise et animations LED',
 'Le Night Market offre une expérience culinaire authentique avec plus de 20 stands proposant des spécialités japonaises traditionnelles et modernes. ' ||
 'Dans une ambiance nocturne enchantée par des installations LED et des projections mapping, vous pourrez déguster des takoyaki, ramen, sushi, mochi et bien d''autres délices ' ||
 'tout en profitant d''animations culturelles interactives. Chaque stand est tenu par des chefs spécialisés, dont certains venus directement du Japon pour l''occasion. ' ||
 'En plus de la nourriture, des démonstrations culinaires sont programmées toutes les heures, permettant de découvrir les techniques de préparation traditionnelles. ' ||
 'Une section "Tokyo Street Food" reconstitue l''ambiance des ruelles commerçantes japonaises, tandis qu''un espace "Desserts Kawaii" propose des pâtisseries et glaces ' ||
 'aux présentations artistiques dignes d''Instagram. Des options végétariennes, véganes et sans gluten sont disponibles à presque tous les stands.',
 'FOOD', 12, 3);

INSERT INTO evenement (event_id, start_time, end_time, description, "longDescription", categorie, artiste_id, scene_id) VALUES
(2, '2025-09-27 16:00:00', '2025-09-27 17:00:00',
 'Fusion metal-idol avec chorégraphies LED',
 'CYBER SHRINE est un groupe fusion metal-idol composé de 5 membres qui mélange des éléments de metal, de musique traditionnelle japonaise et de pop électronique. ' ||
 'Leurs performances sont visuellement époustouflantes grâce à leurs costumes équipés de LEDs synchronisées avec leur musique. ' ||
 'Pour cette performance exclusive, ils présenteront leur nouvel album "Digital Ancestors".',
 'CONCERT', 2, 2),
(3, '2025-09-27 17:15:00', '2025-09-27 18:15:00',
 'Rock alternatif avec influences traditionnelles',
 'NEON SAMURAI est un groupe de rock alternatif qui intègre des instruments traditionnels japonais dans une musique résolument moderne. ' ||
 'Leur son unique se caractérise par l''utilisation du shamisen électrique mêlé à des guitares puissantes et des rythmiques dynamiques. ' ||
 'Le groupe est connu pour ses performances énergiques qui racontent des histoires inspirées de légendes japonaises revisitées dans un contexte futuriste.',
 'CONCERT', 3, 1),
(4, '2025-09-27 18:30:00', '2025-09-27 19:30:00',
 'Pop orchestrale et électronique',
 'PIXEL DREAMS est un projet musical unique qui fusionne la musique orchestrale avec des productions électroniques modernes. ' ||
 'Dirigé par le compositeur Akira Yamaoka, le projet présente des arrangements somptueux de chansons d''anime populaires ainsi que des compositions originales ' ||
 'inspirées par l''esthétique des jeux vidéo rétro. ' ||
 'Pour ce concert, un orchestre de chambre accompagnera les séquences électroniques, créant une expérience immersive entre nostalgie et innovation.',
 'CONCERT', 4, 2),
(5, '2025-09-27 19:45:00', '2025-09-27 20:45:00',
 'Girl group avec 9 membres, performances énergiques',
 'SAKURA STORM est un girl group composé de 9 membres qui a révolutionné la scène idol avec leurs chorégraphies complexes et leurs productions musicales sophistiquées. ' ||
 'Formé en 2018, le groupe est rapidement devenu un phénomène national au Japon avant de conquérir l''international. ' ||
 'Leur concept unique "Seasons of Emotion" attribue à chaque membre une saison et une émotion, créant une dynamique visuelle et musicale captivante. ' ||
 'Pour ce festival, elles présenteront une performance spéciale intégrant des éléments de leur tournée "Blossom Universe".',
 'CONCERT', 5, 1),
(6, '2025-09-27 21:00:00', '2025-09-27 22:00:00',
 'Électro-pop futuriste',
 'TOKYO PULSE représente l''avant-garde de l''électro-pop japonaise avec des sonorités futuristes et des visuels hypnotiques. ' ||
 'Le duo formé par DJ Akiko et le producteur Takeshi propose une expérience immersive où la musique se synchronise avec des projections mapping spectaculaires.',
 'CONCERT', 6, 2),
(7, '2025-09-27 22:30:00', '2025-09-28 01:30:00',
 'Légendes de la J-pop, show anniversaire spécial',
 'MIDNIGHT DYNASTY célèbre leur 20ème anniversaire avec un spectacle exceptionnel qui retrace leur parcours légendaire dans l''industrie de la J-pop. ' ||
 'Attendez-vous à un voyage musical à travers les époques avec leurs plus grands succès et quelques surprises exclusives pour le festival Sakura Nights.',
 'CONCERT', 7, 1),
(13, '2025-09-28 15:30:00', '2025-09-28 16:30:00',
 'Pop-rock avec influences anime',
 'RAINBOW VOLTAGE est un groupe pop-rock japonais qui s''est fait connaître en composant des génériques d''anime populaires. ' ||
 'Leur style unique fusionne des mélodies accrocheuses de J-pop avec des arrangements rock énergiques et des références musicales aux bandes sonores d''anime classiques. ' ||
 'Le quatuor, mené par la chanteuse Haruka avec sa voix puissante et expressive, est célèbre pour ses performances interactives où le public est invité à ' ||
 'participer à des chorégraphies simples sur certains refrains. Pour ce festival, RAINBOW VOLTAGE présentera leurs titres les plus populaires ainsi que ' ||
 'leur nouveau single "Colorful Dreams" qui sortira le mois prochain.',
 'CONCERT', 13, 2),
(14, '2025-09-28 16:45:00', '2025-09-28 17:45:00',
 'Rock progressif moderne',
 'QUANTUM BEATS repousse les frontières du rock progressif japonais avec leurs compositions complexes et leur approche innovante de la structure musicale. ' ||
 'Formé par d''anciens musiciens de session, ce groupe de quatre virtuoses se distingue par des morceaux aux changements de rythme audacieux et aux harmonies sophistiquées. ' ||
 'Leur son caractéristique mêle instruments traditionnels comme le koto électrique à des synthétiseurs analogiques et des guitares aux effets travaillés. ' ||
 'Les paroles, souvent inspirées de concepts scientifiques et philosophiques, ajoutent une dimension intellectuelle à leur musique déjà techniquement impressionnante. ' ||
 'Leur performance au festival mettra en avant l''intégralité de leur album concept "Temporal Paradox".',
 'CONCERT', 14, 1),
(15, '2025-09-28 18:00:00', '2025-09-28 19:00:00',
 'Harmonie vocale et instrumentale, voyage musical',
 'LUNAR ECHO est un projet musical innovant qui combine harmonie vocale envoûtante et instrumentation acoustique délicate. ' ||
 'Dirigé par la chanteuse Mizuki, connue pour sa voix cristalline et ses performances captivantes, le groupe propose un répertoire original inspiré par les paysages sonores japonais traditionnels ' ||
 'et des influences contemporaines. Pour ce festival, LUNAR ECHO présentera une suite musicale spéciale intitulée "Voyage sous la Lune", ' ||
 'accompagnée d''une projection artistique immersive créée en collaboration avec des artistes visuels japonais.',
 'CONCERT', 15, 2),
(16, '2025-09-28 19:15:00', '2025-09-28 20:15:00',
 'Mélange explosif de genres et visuels futuristes',
 'DIGITAL SHOGUN est un projet musical avant-gardiste qui fusionne des éléments de musique électronique, de rock et de hip-hop japonais. ' ||
 'Leur performance est un véritable spectacle immersif alliant son et image, avec des projections vidéo en temps réel et des effets spéciaux époustouflants. ' ||
 'Pour ce festival, ils présenteront un show exclusif intégrant des collaborations avec des artistes visuels de renom.',
 'CONCERT', 16, 1),
(17, '2025-09-28 20:30:00', '2025-09-28 21:30:00',
 'Expérience sonore et visuelle unique',
 'CRYSTAL NOISE est un duo innovant qui mélange musique électronique expérimentale et performances visuelles dynamiques. ' ||
 'Utilisant des synthétiseurs modulaires, des échantillonneurs et des projections en direct, ils créent une atmosphère envoûtante et futuriste. ' ||
 'Leur performance au festival sera une expérience sensorielle totale, explorant les thèmes de la nature, de la technologie et de l''univers.',
 'CONCERT', 17, 2),
(18, '2025-09-28 21:45:00', '2025-09-28 22:45:00',
 'Voyage musical à travers le temps et l''espace',
 'ETERNAL WAVE est un projet musical cinématographique qui emmène l''auditeur dans un voyage à travers des paysages sonores épiques et des mélodies envoûtantes. ' ||
 'Inspiré par la musique de film, les jeux vidéo et la musique classique contemporaine, leur répertoire original est à la fois nostalgique et innovant. ' ||
 'Pour ce festival, ETERNAL WAVE présentera une performance spéciale avec un ensemble élargi incluant cordes, cuivres et percussions, ' ||
 'créant une expérience musicale riche et immersive.',
 'CONCERT', 18, 1);
