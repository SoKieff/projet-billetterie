# MSPR - Billeterie

# Projet Festival - Application Web

## Description
Cette application web a été développée pour le festival "Festival Nation Sound". Elle permet aux visiteurs de consulter le programme, de localiser les différentes scènes et stands sur une carte interactive, et d'obtenir toutes les informations pratiques nécessaires pour profiter pleinement de l'événement.

## Technologies utilisées

### Frontend
- Angular 17+
- OpenLayers (pour la cartographie interactive)
- TypeScript
- HTML/CSS
- Apollo GraphQL Client

### Backend
- Java 17
- Spring Boot 3
- GraphQL
- PostgreSQL
- Liquibase (pour la gestion des migrations de base de données)
- Maven

## Prérequis
- Node.js (version 18.x ou supérieure recommandée)
- npm (version 9.x ou supérieure)
- Angular CLI (dernière version)
- Java JDK 17
- Maven
- PostgreSQL

## Installation

### Frontend

1. Accéder au dossier client
```bash
cd client
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

### Backend

1. Accéder au dossier du serveur
```bash
cd mspr-billeterie-server
```

2. Compiler le projet
```bash
mvn clean install
```

3. Lancer le serveur
```bash
mvn spring-boot:run
```

Le serveur sera accessible sur http://localhost:8080

## Configuration de la base de données

1. Créer une base de données PostgreSQL
2. Mettre à jour les informations de connexion dans `mspr-billeterie-server/src/main/resources/application.yaml`
3. Les migrations Liquibase s'exécuteront automatiquement au démarrage

## Build de production

### Frontend
```bash
cd client
ng build --configuration production
```

Les fichiers générés seront disponibles dans le dossier `dist/client`.

### Backend
```bash
cd mspr-billeterie-server
mvn clean package
```

Le fichier JAR sera généré dans le dossier `target`.

## Structure du projet

### Frontend
- `client/src/app/components` : Composants Angular
- `client/src/app/services` : Services pour la gestion des données
- `client/src/app/models` : Interfaces et modèles de données
- `client/src/assets` : Ressources statiques

### Backend
- `mspr-billeterie-server/src/main/java` : Code source Java
- `mspr-billeterie-server/src/main/resources/graphql` : Schémas GraphQL
- `mspr-billeterie-server/src/main/resources/db/changelog` : Scripts de migration Liquibase
- `mspr-billeterie-server/src/test` : Tests unitaires et d'intégration

## API GraphQL

Le backend expose une API GraphQL accessible à l'URL `/graphql`. La documentation de l'API peut être consultée via GraphiQL à l'URL `/graphiql` lorsque le serveur est en mode développement.

## Configuration de la carte

La carte interactive utilise OpenLayers. Les configurations principales se trouvent dans les fichiers correspondants des composants map. Les données géographiques peuvent être modifiées dans les fichiers GeoJSON.

## Déploiement

### Frontend
L'application est configurée pour le Server-Side Rendering (SSR) :

1. Générer la version de production
```bash
ng build --configuration production
```

2. Déployer les fichiers du dossier `dist/client`

### Backend
1. Construire le JAR
```bash
mvn clean package
```

2. Déployer le JAR avec la configuration appropriée

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request


## Contact

Solveig Kieffer

---

Développé pour [EPSI]