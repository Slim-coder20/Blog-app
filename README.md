# Blog App - Application de Blog React

Une application de blog moderne développée avec React, permettant de créer, modifier et supprimer des articles de blog avec une interface utilisateur élégante et responsive.

## 🚀 Fonctionnalités

### Fonctionnalités actuelles

- ✅ **Gestion des posts** : Création, modification et suppression d'articles de blog
- ✅ **Interface responsive** : Design adaptatif pour desktop et mobile
- ✅ **Menu burger mobile** : Navigation optimisée pour les appareils mobiles
- ✅ **Persistance locale** : Sauvegarde automatique des posts dans le localStorage
- ✅ **Validation de formulaire** : Validation des données avec react-hook-form et Yup
- ✅ **Style typewriter** : Design rétro inspiré des machines à écrire
- ✅ **Context API** : Gestion de l'état global avec React Context

## 🛠️ Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router** - Navigation entre les pages
- **React Hook Form** - Gestion des formulaires
- **Yup** - Validation de schémas
- **CSS Modules** - Styles modulaires
- **localStorage** - Persistance des données côté client

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/Slim-coder20/Blog-app.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🎯 Utilisation

1. **Créer un post** : Cliquez sur "Create New Post" pour ajouter un nouvel article
2. **Modifier un post** : Cliquez sur le bouton "Edit" d'un post pour le modifier
3. **Supprimer un post** : Cliquez sur le bouton "Delete" d'un post pour le supprimer
4. **Navigation mobile** : Utilisez le menu burger sur les petits écrans

## 🔮 Features futures

### Authentification et sécurité

- 🔐 **Système d'authentification** : Connexion et déconnexion des utilisateurs
- 👤 **Création de compte utilisateur** : Inscription avec validation
- 🔒 **Protection des routes** : Routes privées nécessitant une authentification
- 👥 **Gestion des rôles** : Système de permissions (utilisateur, administrateur)

### Base de données et production

- 🗄️ **MongoDB en production** : Migration vers une base de données MongoDB pour la persistance des données
- 🌐 **API Backend** : Développement d'une API REST avec Node.js/Express
- 🔄 **Synchronisation** : Synchronisation des données entre les appareils
- 📊 **Analytics** : Statistiques et analytics des posts

### Améliorations UX/UI

- 🎨 **Thèmes** : Mode sombre/clair
- 🔍 **Recherche** : Fonctionnalité de recherche dans les posts
- 🏷️ **Tags et catégories** : Organisation des posts par tags
- 💬 **Commentaires** : Système de commentaires sur les posts
- 📱 **PWA** : Transformation en Progressive Web App

## 📝 Structure du projet

```
Blog-app/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── pages/          # Pages de l'application
│   ├── context/         # Context API pour l'état global
│   ├── styles/          # Styles CSS modules
│   └── App.jsx          # Composant principal
├── public/              # Fichiers statiques
└── README.md            # Documentation
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## 📄 Licence

Ce projet est sous licence MIT.
