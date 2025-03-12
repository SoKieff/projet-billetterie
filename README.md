# MSPR - Billeterie

# Projet Festival - Application Web

## Description
Cette application web a été développée pour le festival "Festival Nation Sound". Elle permet aux visiteurs de consulter le programme, de localiser les différentes scènes et stands sur une carte interactive, et d'obtenir toutes les informations pratiques nécessaires pour profiter pleinement de l'événement.

## Technologies utilisées
- Angular 17+
- OpenLayers (pour la cartographie interactive)
- TypeScript
- HTML/CSS

## Prérequis
- Node.js (version 18.x ou supérieure recommandée)
- npm (version 9.x ou supérieure)
- Angular CLI (dernière version)

## Installation

1. Cloner le dépôt
```bash
git clone [URL du dépôt]
cd [nom-du-dossier]
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer l'application en mode développement
```bash
ng serve
```

4. Accéder à l'application sur http://localhost:4200

## Build de production

Pour générer une version de production de l'application :

```bash
ng build --configuration production
```

Les fichiers générés seront disponibles dans le dossier `dist/client`.

## Fonctionnalités principales

- **Programme du festival** : Consultation des artistes, horaires et lieux des performances
- **Carte interactive** : Localisation des scènes, stands, toilettes, points d'eau, etc.
- **Informations pratiques** : Accès, hébergement, restauration, etc.
- **Actualités** : Dernières informations et mises à jour concernant le festival

## Structure du projet

- `src/app/components` : Composants Angular de l'application
- `src/app/services` : Services pour la gestion des données
- `src/app/models` : Interfaces et modèles de données
- `src/assets` : Ressources statiques (images, icônes, données GeoJSON pour OpenLayers, etc.)

## Configuration de la carte

La carte interactive utilise OpenLayers. Les configurations principales se trouvent dans les fichiers correspondants des composants map. Les données géographiques (emplacements des scènes, stands, etc.) peuvent être modifiées dans les fichiers GeoJSON situés dans le dossier assets.

## Déploiement

L'application est configurée pour le Server-Side Rendering (SSR), ce qui améliore les performances et le référencement. Pour déployer l'application :

1. Générer la version de production
```bash
ng build --configuration production
```

2. Déployer les fichiers du dossier `dist/client` sur votre serveur web

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## Licence



## Contact

Solveig Kieffer

---

Développé pour [EPSI]