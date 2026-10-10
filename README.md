Fandresena 2026

# Tourisme Madagascar

Application web touristique permettant de découvrir Madagascar à travers ses **destinations**, ses **activités**, ses **hébergements**, des **informations pratiques** (pages À propos, Contact, Crédits), une **demande de réservation** simple et des **liens de localisation Google Maps** sur les pages de détail concernées.

Site touristique **frontend-only** dédié à Madagascar : présentation de destinations, d'activités et d'hébergements, avec demande de réservation envoyée par e-mail via FormSubmit. Aucun backend, aucune base de données, aucune authentification.

## 📖 Présentation

Ce projet est un site vitrine et de demande de voyage pour Madagascar. Les contenus (destinations, activités, hébergements, avis) sont des données statiques typées dans `frontend/src/data/`, affichées via des pages catalogue, des pages de détail et un formulaire de réservation.

État du contenu (vérifié dans `frontend/src/data/`) :

- **21 destinations** (`destinations.ts`)
- **51 activités** (`activities.ts`)
- **62 hébergements** (`hotels.ts`)

## 🎯 Objectifs

- Présenter une sélection de destinations malgaches avec fiches détaillées.
- Proposer des activités liées à leur destination.
- Lister des hébergements liés à leur destination.
- Permettre une demande de réservation simple, envoyée par e-mail (FormSubmit).
- Offrir une interface bilingue français / anglais, responsive et accessible.

## ✨ Fonctionnalités

### Navigation

| Route                  | Page                      |
| ---------------------- | ------------------------- |
| `/`                    | Accueil                   |
| `/destinations`        | Liste des destinations    |
| `/destinations/:slug`  | Détail d'une destination  |
| `/activites`           | Liste des activités       |
| `/activites/:slug`     | Détail d'une activité     |
| `/hotels`              | Liste des hôtels          |
| `/hotels/:slug`        | Détail d'un hôtel         |
| `/reservation`         | Formulaire de réservation |
| `/a-propos`            | À propos                  |
| `/contact`             | Contact                   |
| `/credits`             | Crédits photos            |
| toute autre URL        | Page 404                  |

- Barre de navigation desktop + menu mobile, pied de page avec liens et contacts.
- Fil d'Ariane (breadcrumb) sur les pages de détail.
- Avis de voyageurs affichés sur la page d'accueil (note en étoiles).
- Page de contact avec cartes e-mail, téléphone et WhatsApp (`mailto:` / `tel:` / lien externe).

## 🗺️ Destinations

- **21 destinations** actuellement disponibles.
- Page catalogue avec recherche textuelle et filtres par catégorie et par région.
- La recherche peut être préremplie via l'URL (`/destinations?destination=...`).
- Chaque destination possède une page de détail (`/destinations/:slug`) construite à partir des données existantes : description, image, activités et hôtels rattachés, lien vers la réservation préremplie.

## 🏄 Activités

- **51 activités**, chacune rattachée à une destination via `destinationSlug`.
- Page catalogue avec recherche textuelle et filtres par catégorie et par destination.
- La page lit les paramètres d'URL `experience` (catégorie) et `destination`, utilisés notamment par la barre de recherche de l'accueil.
- Chaque activité possède une page de détail (`/activites/:slug`) avec lien vers la réservation préremplie.

## 🏨 Hébergements

- **62 hébergements**, chacun rattaché à une destination via `destinationSlug`.
- Page catalogue affichant l'ensemble des établissements (`/hotels`).
- Chaque hôtel possède une page de détail (`/hotels/:slug`) avec lien vers la réservation préremplie.

> Les champs techniques éventuellement présents dans les données (tarifs, notes internes) ne sont pas affichés dans l'interface : ils ne sont donc pas présentés comme des fonctionnalités publiques.

## 📅 Réservation

La page `/reservation` contient un formulaire de **demande** de réservation (sans paiement, sans disponibilité temps réel). Champs :

- nom, prénom, e-mail, téléphone ;
- destination ;
- hôtel ou activité (« séjour ») ;
- date d'arrivée, date de départ ;
- nombre de personnes ;
- message.

### Filtrage dynamique destination → séjour

- Sans destination sélectionnée, le champ « Hôtel ou activité » est **désactivé**.
- Après sélection d'une destination, seuls les hôtels et les activités de cette destination sont proposés, séparés en deux groupes : **« Hôtels »** et **« Activités »** (`optgroup`).
- Tout changement de destination **réinitialise** le choix précédent du séjour.

### Préremplissage via URL

Chaque page de détail (`/destinations/:slug`, `/activites/:slug`, `/hotels/:slug`) propose un lien « réserver » qui préremplit le formulaire via les paramètres d'URL (correspondance tolérante slug / nom via `src/utils/search.ts`) :

- `?destination=...`
- `?activity=...`
- `?hotel=...`

Si seule une activité ou un hôtel est fourni, la destination correspondante est déduite pour activer le filtrage. Un bandeau de contexte affiche les éléments préremplis avec liens vers leurs pages.

Sur chaque page de destination, le bouton **« Réserver maintenant »** (« Book now » en anglais) ouvre `/reservation?destination=<slug>` : la destination est sélectionnée automatiquement et le champ « Hôtel ou activité » propose uniquement les hôtels et activités de cette destination.

La validation est effectuée côté client (`src/utils/validation.ts`) avec messages traduits ; après envoi réussi, un écran de confirmation s'affiche.

## 🌍 Internationalisation

- 🇫🇷 **Français**, langue par défaut ; 🇬🇧 **anglais**, deuxième langue.
- Sélecteur de langue (icône `Languages` de Lucide) dans la barre de navigation, sur desktop et dans le menu mobile.
- Changement de langue **sans rechargement** de la page.
- Persistance via `localStorage` (clé `tourisme-language`) : la langue est conservée pendant la navigation et après actualisation.
- `<html lang>` mis à jour dynamiquement (`fr` / `en`).
- Sont traduits : interface, pages (Accueil, Destinations, Activités, Hôtels, Réservation, À propos, Contact, Crédits, 404), formulaire de réservation (labels, placeholders, messages de validation), fil d'Ariane, pied de page et titres de pages (`<title>`).
- Les noms propres (destinations, hôtels, régions), les slugs/URLs et les crédits photos restent inchangés.
- Implémentation : `LanguageContext` React + dictionnaires typés (`src/i18n/fr.ts`, `src/i18n/en.ts`) ; aucune API de traduction externe.

## 🔎 Recherche

- **Barre de recherche de l'accueil** : choix d'une destination et/ou d'un type d'expérience, avec redirection vers le catalogue correspondant (`/destinations?destination=...` ou `/activites?experience=...&destination=...`).
- **Page Destinations** : recherche textuelle (insensible aux accents, casse et apostrophes) + filtres par catégorie et par région.
- **Page Activités** : recherche textuelle + filtres par catégorie et par destination.

Le projet ne propose pas (et n'annonce pas) : recherche de disponibilité hôtelière, réservation automatique, paiement en ligne, ni moteur de disponibilité temps réel.

## 🗺️ Google Maps

Le projet n'utilise **aucune API Google Maps** : ni clé API, ni JavaScript API, ni iframe. Il utilise uniquement des **liens Google Maps directs** (`mapsUrl`) présents dans les données :

- chaque destination possède un lien `https://www.google.com/maps/search/?api=1&query=…`, affiché comme lien externe (« Voir sur Google Maps ») sur sa page de détail (`/destinations/:slug`) ;
- certains hébergements possèdent un lien `mapsUrl` optionnel (champ `mapsUrl?` du type `Hotel`) : la section de localisation n'est affichée sur la page de détail (`/hotels/:slug`) que lorsque ce lien existe ;
- les liens s'ouvrent dans un nouvel onglet (`target="_blank"`, `rel="noopener noreferrer"`).

## 🖼️ Gestion des images et crédits

- Registre centralisé des images : **`frontend/src/assets/images.ts`**.
- Chaque entrée associe une clé (utilisée via le champ `image` des données) à un fichier local ou une URL distante vérifiée, un texte alternatif descriptif, un crédit (auteur + licence + source) et une page source (`sourceUrl`).
- Helpers `resolveImage` / `resolveImageAlt` / `resolveImageCredit` / `listImages` : aucun composant n'a besoin d'être modifié pour remplacer une image.
- Page **`/credits`** : liste toutes les images référencées, groupées par Destinations / Hôtels / Activités, avec crédits et liens vers les sources (Wikimedia Commons, Unsplash…).
- Légende de crédit discrète sur les pages de détail.

> Certains hébergements utilisent actuellement des images génériques temporaires afin de compléter l'interface. Elles ne représentent pas nécessairement l'établissement concerné et seront remplacées progressivement par des images vérifiées.

## 🔖 Favicon

Le site utilise une **favicon personnalisée** (`frontend/public/favicon.svg`, référencée dans `frontend/index.html`), cohérente avec l'identité visuelle du projet (teal `#0f766e`) : un **baobab stylisé crème** (tronc massif et trois branches) sous un **soleil ambre**, sur fond arrondi teal. SVG léger, sans texte ni détail fin, lisible en petit format dans l'onglet du navigateur.

## 🛠️ Technologies

Versions déclarées dans `frontend/package.json` (seules dépendances réellement installées) :

| Technologie      | Version           | Usage                          |
| ---------------- | ----------------- | ------------------------------ |
| React            | `^19.2.8`         | Interface utilisateur          |
| React DOM        | `^19.2.8`         | Rendu React                    |
| React Router     | `^7.18.4`         | Routage (`react-router-dom`)   |
| Tailwind CSS     | `^4.3.3`          | Styles (+ `@tailwindcss/vite`) |
| Lucide React     | `^1.47.0`         | Icônes                         |
| TypeScript       | `~6.0.2`          | Typage (dev)                   |
| Vite             | `^8.3.0`          | Build et serveur de dev (dev)  |
| plugin-react     | `^6.1.1`          | Plugin Vite React (dev)        |
| oxlint           | `^1.81.0`         | Lint (`npm run lint`) (dev)    |

Envoi des demandes : **FormSubmit** (appel `fetch` direct, sans SDK). Aucun backend.

## 📁 Structure du projet

Structure réelle (racine du dépôt) :

```text
Tourisme/
├── frontend/
│   ├── .env.example          # VITE_FORMSUBMIT_EMAIL
│   ├── index.html            # lang, title, meta description, favicon…
│   ├── public/               # favicon.svg, icons.svg, robots.txt
│   ├── vite.config.ts
│   └── src/
│       ├── assets/           # images.ts + images locales
│       ├── components/       # layout / shared / ui
│       ├── data/             # destinations, activités, hôtels, avis
│       ├── hooks/            # useDocumentTitle
│       ├── i18n/             # dictionnaires FR/EN, contexte, helpers
│       ├── layouts/          # MainLayout
│       ├── pages/            # 12 pages (dont NotFound)
│       ├── services/         # intégration FormSubmit
│       ├── types/
│       ├── utils/            # search, validation
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── .gitignore
└── README.md
```

## 🚀 Installation

```bash
git clone <url-du-depot>
cd Tourisme/frontend
npm install
cp .env.example .env   # puis renseigner VITE_FORMSUBMIT_EMAIL
```

## ▶️ Lancer le projet

Commande déclarée dans `frontend/package.json` :

```bash
npm run dev
```

Le site est disponible sur `http://localhost:5173` (port par défaut de Vite, aucune configuration de port personnalisée dans `vite.config.ts`).

Autres scripts disponibles : `npm run lint` (oxlint), `npm run preview` (prévisualisation du build).

## 🏗️ Build production

```bash
npm run build
```

Cette commande exécute `tsc -b && vite build` (vérification TypeScript puis build Vite). Le résultat est généré dans `frontend/dist/`, et peut être prévisualisé avec `npm run preview`.

## 🔐 Configuration FormSubmit

Le projet est **frontend-only** : les demandes de réservation sont envoyées directement du navigateur vers FormSubmit, sans backend ni API propre :

```text
Visiteur → Formulaire React → https://formsubmit.co/ajax/<EMAIL> → e-mail du propriétaire
```

Configuration :

1. Copier `.env.example` vers `.env`.
2. Renseigner l'adresse destinataire :

```bash
VITE_FORMSUBMIT_EMAIL=your-email@example.com
```

3. Lancer le projet, envoyer une demande de test et valider l'e-mail d'activation FormSubmit si demandé.

Comportement vérifié dans `src/services/formsubmit.ts` :

- sans `VITE_FORMSUBMIT_EMAIL` valide, l'envoi est bloqué avec un message d'erreur traduit ;
- les adresses d'exemple (`@example.com`, dont le placeholder de `.env.example`) sont refusées : rien n'est jamais envoyé vers une adresse factice ;
- l'adresse e-mail personnelle n'est jamais écrite en dur dans le code ni dans ce README : elle transite uniquement par la variable d'environnement (visible dans le navigateur comme toute variable `VITE_*`, elle ne doit donc contenir aucun secret).

## 📱 Responsive

Interface conçue pour **mobile**, **tablette** et **desktop** (grilles et navigation adaptatives via les points de rupture Tailwind : menu mobile sous `lg`, grilles `sm:` / `lg:`). Aucune compatibilité navigateur spécifique au-delà des navigateurs modernes n'est revendiquée.

## ♿ Accessibilité

Améliorations réellement présentes dans le code :

- labels sur tous les champs de formulaire, messages d'erreur associés et `aria-invalid` ;
- lien d'évitement « Aller au contenu » (`#main-content`) ;
- menu mobile avec `aria-expanded` et `aria-label`, navigation clavier native ;
- fil d'Ariane avec `aria-current="page"` ;
- icônes décoratives Lucide masquées (`aria-hidden="true"`) ;
- zones d'annonce `aria-live="polite"` (contexte de réservation, compteurs de résultats) ;
- langue du document (`<html lang>`) synchronisée avec la langue active.

## 🔎 SEO

SEO de base réellement présent :

- `<html lang>` dynamique (`fr` / `en`) ;
- `<title>` statique dans `index.html`, mis à jour par page via `useDocumentTitle` (traduit FR/EN) ;
- `meta description`, `meta viewport`, `theme-color`, `favicon.svg` ;
- `public/robots.txt` (`Allow: /`, avec note indiquant que sitemap et canoniques seront renseignés après déploiement).

Non présents (et donc non revendiqués) : `sitemap.xml`, URLs canoniques, balises Open Graph / Twitter Cards, inscription Search Console.

## ⚠️ Limites actuelles

En toute transparence, le projet ne propose pas encore :

- certaines photos d'hébergements (et quelques activités) sont des **images génériques temporaires** (Picsum) : elles illustrent l'interface mais ne représentent pas les établissements concernés ;
- aucun système réel de disponibilité hôtelière ;
- aucun paiement en ligne ;
- envoi des demandes via **FormSubmit** (dépend d'un service tiers et d'une adresse e-mail configurée) ;
- sitemap, URLs canoniques et balises Open Graph à ajouter après déploiement sur un domaine définitif.

## 📌 État du projet

Le projet est **fonctionnel** : catalogues, pages de détail, recherche, réservation via FormSubmit, internationalisation FR/EN, crédits photos et build de production sont en place et vérifiés (`npx tsc -b`, `npm run build`). Il est **prêt pour une phase de déploiement et d'amélioration** (photos vérifiées, SEO avancé après attribution du domaine).
