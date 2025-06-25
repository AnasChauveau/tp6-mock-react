![CI](https://github.com/AnasChauveau/tp6-mock-react/actions/workflows/ci.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AnasChauveau_tp6-mock-react&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=AnasChauveau_tp6-mock-react)


# 🛍️ Catalogue de Produits – React

## 🎯 Objectif du projet

Cette application React simule un catalogue de produits, générés dynamiquement à l’aide de [Faker.js](https://github.com/faker-js/faker) et fournis via une API mockée grâce à [MSW (Mock Service Worker)](https://mswjs.io/).

L’objectif est de mettre en place un projet frontend fiable et industrialisé, intégrant :

- ✅ Génération de données réalistes avec Faker.js
- ✅ Simulation d’API avec MSW
- ✅ Tests de bout en bout avec Playwright
- ✅ Linter ESLint et formateur Prettier
- ✅ Intégration continue via GitHub Actions
- ✅ Hooks Git `pre-commit` avec Husky

## 🚀 Lancer l’application

### Pré-requis

- Node.js 18 ou supérieur
- npm

### Installation

```bash
npm install
npm run prepare
```

### Lancer le serveur de développement

```bash
npm run dev
```

## 🧪 Scripts disponibles

|       Script         |                    Description                     |
|----------------------|----------------------------------------------------|
| `npm run dev`        | Démarre l’app en développement (Vite)              |
| `npm run lint`       | Analyse le code avec ESLint                        |
| `npm run format`     | Formate le code avec Prettier                      |
| `npm run test`       | Lance les tests Playwright                         |
| `npm run dev-test`   | Exécute à la fois `dev` et `test`                  |
| `npm run check`      | Exécute à la fois `lint` et `dev-test`             |
| `npm run prepare`    | Initialise Husky (post-install)                    |
| `npm run jest`	   | Lance tes tests unitaires avec Jest                |
| `npm run coverage`   | Génère coverage/lcov.info (jest) pour SonarCloud   |

## 🧱 Qualité logicielle et CI

- **ESLint** : Configuration via `eslint.config.js` en flat config
- **Prettier** : Formatage automatique selon `.prettierrc`
- **Husky** : Hook `pre-commit` pour lancer `lint` + `dev-test` à chaque commit
- **GitHub Actions** : Workflow CI complet (`.github/workflows/ci.yml`) pour exécuter linter + tests automatiquement à chaque push ou pull request

## 🧩 Structure du projet

```
tp6-mock-react/
├── public/
│   ├── mockServiceWorker.js
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── utils/
│   │   ├── _tests_/
│   │   │   └── products.spec.js
│   │   └── generateProducts.js
│   └── mocks/
│       ├── handlers.js
│       └── browser.js
├── tests/
│   └── products.spec.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── pre-commit
├── eslint.config.js
├── babel.config.cjs
├── jest.config.cjs
├── playwright.config.js
├── .prettierrc
├── sonar-project.properties
├── README.md
```

## 👤 Auteur

Anas CHAUVEAU  
📍 MyDigitalSchool Grenoble  
📅 Année 2025
