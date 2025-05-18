# Chat'App est une application de chat en temps réel.

![homepage](/client/public/screenshot/home.webp)
![chat](/client/public/screenshot/chat.webp)
![settings](/client/public/screenshot/settings.webp)

## 🚀 Technologies utilisées :

Frontend :

- ⚛️ React – Interface utilisateur
- 🎨 ShadCN – Composants UI
- 💨 Tailwind CSS / SASS – Styles

Backend :

- 🟢 Node.js / Express – API REST et gestion des requêtes
- 🔌 Socket.io – Communication en temps réel

Base de données :

- 🛢️ Prisma / MySQL – Gestion et requêtes SQL

## 📥 Installation

### Cloner le projet :

```terminal
git clone https://github.com/Cyril-Develop/chat-app.git .
```

### Créer le dossier des images :

Dans le dossier `api`, créez un dossier `images/message` pour stocker les fichiers envoyés.

### Installation des dépendances :

Ouvrez un terminal pour chaque dossier (api, client, socket) et exécutez :

```terminal
npm install
```

### Configuration de la base de données :

### Vérifier MySQL

Assurez-vous que MySQL est installé et en cours d'exécution.

### Créer la base de données :

Connectez-vous à MySQL et exécutez :

```sql
CREATE DATABASE <nom_de_la_base_de_données>;
```

### Configurer Prisma :

Dans le dossier `api`, initialisez Prisma :

```terminal
npx prisma init
```

Dans le fichier `api/.env`, ajoutez l'URL de connexion :

```env
DATABASE_URL="mysql://<user>:<password>@localhost:3306/<database>"
```

### Appliquer les migrations :

Créez les tables en exécutant :

```terminal
npx prisma migrate dev --name init
```

### Générer le client Prisma :

Une fois la migration terminée, générez le client Prisma :

```terminal
npx prisma generate
```

### Variables d'environnement :

Créez un fichier `.env` dans les dossiers `client` et `socket` puis modifiez celui de `api` comme suit :

```env
### api/.env

DATABASE_URL="mysql://<user>:<password>@localhost:3306/<database>"
PORT="35000"
JWT_SECRET="g16er1fFE"

### client/.env

VITE_REACT_APP_BASE_URL="http://localhost:35000"
VITE_REACT_APP_IMAGE_URL="http://localhost:35000/images/"
VITE_REACT_APP_SOCKET_URL="http://localhost:30000"

### socket/.env

CLIENT_URL="http://localhost:5173"
SOCKET_PORT="30000"
```

### Démarrer les serveurs

Dans chaque dossier (api, client, socket), ouvrez un terminal et exécutez :

Backend (API Express) :

```terminal
cd api && npm start
```

Frontend (React) :

```terminal
cd client && npm start
```

Socket.io (serveur WebSocket) :

```terminal
cd socket && npm start
```

## Fonctionnalités :

- Authentification – Créer un compte utilisateur, se connecter et se déconnecter
- Salons de discussion – Créer, rejoindre et gérer des salons publics ou privés
- Messagerie – Envoyer des messages (texte, image) en groupe ou en privé
- Chat en temps réel – textuel et/ou vocal
- Amis – Rechercher, ajouter, bloquer et supprimer des amis
- Statuts en temps réel – Voir qui est en ligne et suivre les changements de statut
- Mise à jour du profil – Modifier photo de profil, nom d'utilisateur et email
- Interface responsive – Adaptée aux mobiles et tablettes
- Notifications – Recevoir des alertes pour les nouveaux messages et les demandes d'amis (temps réel, hors ligne)
- Mode espion
- Dark mode

## 🎮 Tester le projet en ligne

🚀 [Démo chat-app](https://cyril-develop.fr/chat-app)

![GitHub repo size](https://img.shields.io/github/repo-size/Cyril-Develop/chat-app?style=for-the-badge)
