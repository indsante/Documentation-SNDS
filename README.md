# Documentation du SNDS

Bienvenue sur ce dépôt hébergeant la documentation collaborative du Système National des Données de Santé.

Ce travail est en phase de prototypage. Il est visible à l'adresse [documentation-snds.health-data-hub.fr](https://documentation-snds.health-data-hub.fr). 

## Organisation du dépôt

La documentation contient des fichiers textuels, des images, et des documents partagés.

Nous utilisons VuePress pour obtenir un site web facilement lisible, 
ce qui implique une organisation particulière du dépôt : 

- Le dossier [docs/documentation](https://github.com/indsante/Documentation-SNDS/tree/master/docs/documentation/) 
contient les fichiers textuels de documentation. Ce sont les principaux fichiers à éditer.
- Le dossier _caché_ [docs/.vuepres/public/assets](https://github.com/indsante/Documentation-SNDS/tree/master/docs/.vuepress/public/assets)
contient les images et documents partagés, respectivement dans les sous-dossiers `img` et `src`.
- Le fichier [docs/.vuepress/config.js](https://github.com/indsante/Documentation-SNDS/tree/master/docs/.vuepress/config.js)
permet de configurer VuePress, notamment la navigation.
- Le dossier [docs/table](https://github.com/indsante/Documentation-SNDS/tree/master/docs/tables/) 
contient la description des tables et variables. 
Ces données sont générées automatiquement depuis le [schema-snds](https://github.com/indsante/schema-snds/) 

## Contributeurs 

Cette documentation est le fruit d'une mise en commun de documents et de travaux par différentes organisations.

Les contributeurs actuels sont les institutions suivantes :
- la Caisse nationale d'assurance maladie - [Cnam](https://www.ameli.fr/)
- l'Institut National des Données de Santé - [INDS](https://www.indsante.fr/)
- la Direction de la Recherche, des études, de l’évaluation et des statistiques - 
[DREES](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/la-drees/)

Toute nouvelle contribution est bienvenue, 
se référer pour cela au [guide en ligne](https://documentation-snds.health-data-hub.fr/documentation/contribuer.html). 

## Licence

Ce dépôt est publié par l'Institut National des Données de Santé sous
licence Mozilla Public License 2.0.  Voir le fichier `LICENSE`.
