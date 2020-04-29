# Développement local
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette page est adressée aux personnes maîtrisant un usage basique de la ligne de commande `git`, 
ou utilisant une interface graphique telle que [GitHub Desktop](https://desktop.github.com/) (qui fonctionne pour GitLab).

Les mainteneurs du projet peuvent organiser une formation à ce sujet (contactez nous !). 
Nous recommandons également ce [cours en ligne](https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github), 
dans lequel les mots GitHub et GitLab sont interchangeables.   

## Pourquoi ?

Nous avons précédemment décrit comment éditer la documentation depuis l'interface web de GitLab.
Il est cependant plus agréable de travailler en local sur une copie des fichiers avec votre éditeur de texte favori.

`git` est en effet un système de gestion de version **distribué**, 
qui permet de créer des branches et des commits sur votre poste de travail, 
puis de les partager via une merge-request sur GitLab. 

## Visualiser le site en local

Les commandes suivantes permettent de lancer une version locale du site internet :

- `yarn install` : installer les modules npm 
- `yarn docs:dev` : démarrer le serveur de développement 
- Votre navigateur reproduira alors en temps réel vos modifications sur le texte, 
à l'adresse `http://localhost:8080`.

::: warning Note
Ces commandes devraient fonctionner sur Linux et Mac.  
Il faut peut-être les modifier sur Windows.
:::

## Tester les modifications

- `yarn lint-md` : teste les liens internes
- `yarn extended-lint-md` : teste les liens internes et externes