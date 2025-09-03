# MSPR - Billeterie

<div align="center">
  <img src="https://your-logo-url.com" alt="Logo Festival Nation Sound" width="200"/>
</div>

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/...)  
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table des matières

- [Description](#description)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration de la base de données](#configuration-de-la-base-de-données)
- [Structure du projet](#structure-du-projet)
- [API GraphQL](#api-graphql)
- [Configuration de la carte](#configuration-de-la-carte)
- [Build de production](#build-de-production)
- [Déploiement](#déploiement)
- [Tests](#tests)
- [Contribution](#contribution)
- [Contact](#contact)
- [Licence](#licence)

---

## Description

Application web pour le festival **Festival Nation Sound**.  
Fonctionnalités principales :
- Consultation du programme
- Carte interactive des scènes et stands
- Informations pratiques pour les visiteurs

---

## Technologies utilisées

**Frontend**
- Angular 17+
- OpenLayers (cartographie interactive)
- TypeScript
- HTML/CSS
- Apollo GraphQL Client

**Backend**
- Java 17
- Spring Boot 3
- GraphQL
- PostgreSQL
- Liquibase (migrations)
- Maven

---

## Prérequis

- Node.js >= 18.x
- npm >= 9.x
- Angular CLI (dernière version)
- Java JDK 17
- Maven
- PostgreSQL

---

## Installation

### Frontend

```bash
cd client
npm install
ng serve
```
Application accessible sur [http://localhost:4200](http://localhost:4200).

### Backend

```bash
cd mspr-billeterie-server
mvn clean install
mvn spring-boot:run
```
API accessible sur [http://localhost:8080](http://localhost:8080).

---

## Configuration de la base de données

1. Créez une base PostgreSQL.
2. Modifiez `mspr-billeterie-server/src/main/resources/application.yaml` avec vos accès :
   ```yaml
   spring:
     datasource:
       url: jdbc:postgresql://localhost:5432/nom_de_votre_bdd
       username: votre_username
       password: votre_motdepasse
   ```
3. Les migrations Liquibase s’exécutent automatiquement au démarrage.

---

## Structure du projet

```
client/
  src/app/components/  # Composants Angular
  src/app/services/    # Services
  src/app/models/      # Modèles de données
  src/assets/          # Statique

mspr-billeterie-server/
  src/main/java/       # Backend Java
  src/main/resources/graphql/    # Schémas GraphQL
  src/main/resources/db/changelog/  # Migrations Liquibase
  src/test/            # Tests
```

---

## API GraphQL

- Endpoint : `/graphql`
- Documentation : `/graphiql` (mode dev)

---

## Configuration de la carte

- OpenLayers : fichiers de configuration dans les composants map.
- Données géographiques : modifiables dans les fichiers GeoJSON du projet.

---

## Build de production

### Frontend

```bash
cd client
ng build --configuration production
```
Fichiers dans `dist/client`.

### Backend

```bash
cd mspr-billeterie-server
mvn clean package
```
JAR généré dans `target/`.

---

## Déploiement

- **Frontend** : Déployer le contenu de `dist/client` sur votre serveur web.
- **Backend** : Déployer le JAR avec la configuration adaptée.

---

## Tests

### Frontend
```bash
ng test
```
### Backend
```bash
mvn test
```

---

## Contribution

1. Forkez le projet.
2. Créez une branche :
   ```sh
   git checkout -b feature/ma-fonctionnalite
   ```
3. Commitez vos changements :
   ```sh
   git commit -m "feat: ajout d'une nouvelle fonctionnalité"
   ```
4. Pushez votre branche :
   ```sh
   git push origin feature/ma-fonctionnalite
   ```
5. Ouvrez une Pull Request.

Merci de respecter le style de code et d’ajouter des tests pour toute nouvelle fonctionnalité.

---

## Contact

Solveig Kieffer  
Développé pour [EPSI]

---

## Licence

Ce projet est sous licence MIT.