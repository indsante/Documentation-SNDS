# Développement local
<!-- SPDX-License-Identifier: MPL-2.0 -->

Page plutôt adressée aux développeurs.

## Pourquoi ?

GitLab permet d'éditer la documentation depuis un navigateur web. 
Cependant `git` est un système de gestion de version **distribué**. Vous pouvez donc - et c'est plus agréable ! - éditer la documentation depuis votre poste de travail avec votre éditeur de texte favori. 

Il vous faudra pour cela apprendre l'usage basique de `git`. Les mainteneurs du projet peuvent organiser une formation à ce sujet (contactez nous !). Nous recommandons également ce [cours en ligne](https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github), dans lequel les mots GitHub et GitLab sont interchangeables.   

## Visualiser le site en local

Les développeurs peuvent lancer une version locale du site internet avec les commandes suivantes

- `yarn install` : installer les modules npm 
- `yarn docs:dev` : démarrer le serveur de développement 
- Votre navigateur reproduira alors en temps réel vos modifications sur le texte

## Organisation du contenu

Voici les principaux dossier avec du contenu à éditer

- `docs/documentation` : fichiers de documentation
- `docs/.vuepress/public/assets` : ressources fichiers ou images
- `docs/.vuepress/config.js` : configuration du site, notamment des barres de navigation 

