# Générateur de données de synthèse
<!-- SPDX-License-Identifier: MPL-2.0 -->
  
Un [générateur](https://gitlab.com/healthdatahub/synthetic-generator) de données de synthèse est a été réalisé par le Health Data Hub.  
Ce générateur a pour objectif de créer un jeu de données de synthèse qui couvre tout le périmètre du SNDS et de pouvoir s'adapter à d'autres bases de données de santé.

## Générateur adapté au SNDS
### Fonctionnement et implémentation
Le générateur utilise le [schéma formel du SNDS](https://gitlab.com/healthdatahub/schema-snds), récapitulant pour chaque table les champs contenus dans la table ainsi que les clés étrangères permettant de faire le lien entre deux tables.

Il exploite une représentation particulière du SNDS: une représentation sous forme d'arbre. Il est habituel de voir le SNDS sous forme de graphe, le voir sous forme d'arbre ajoute une notion de hiérarchie entre les tables. A noter que cette hiérarchie est naturelle dans la construction du SNDS: la table racine est la table des bénéficiaires, ses tables filles sont elles-mêmes des tables mères pour des sous parties du SNDS, etc.

Les données de synthèse pourront donc être générées en suivant le modèle de l'arbre : à partir de la table mère, les tables filles seront générées, puis chaque table fille donnera une autre table fille, etc. Chaque table générée respecte le schéma et les contraintes issus du schéma formel.

### Structure du générateur
Essentiellement, le package est composé des modules suivants:

- randomGenerator qui permet de générer une colonne aléatoire suivant un type et des contraintes ou une nomenclature donnée,
- graphGenerator qui permet de gérer l'ordre dans lequel les tables sont générées au sein d'une composante connectée de la base, et qui appelle randomGenerator pour chacune des colonnes. A noter que c'est aussi ce module qui se charge de faire respecter les clés de jointures entre les tables,
- MetaGraphGenerator qui permet de gérer plusieurs graphGenerator (un par composante connectée de la base).

### Pour aller plus loin dans la description du générateur
Ce générateur a fait l'objet d'une présentation à un Meetup.
La vidéo et le support sont disponibles à [ce lien](../../evenements/meetup.md).

## Intérêt
Le SNDS synthétique a pour principal intérêt d'être libre de réutilisation, car il ne contient aucune donnée personnelle.

Les données respectent :
- la **structure** des tables,
- les **jointures** entre tables,
- le **type** des variables,
- les valeurs des variables associées à des **nomenclatures**,
- des **contraintes simples** sur les variables (min, max, longueur),
- une certaine cohérence temporelle (cf ci-dessous),
- une certaine cohérence statistique (cf ci-dessous).

Ces données peuvent être utilisées pour apprendre à manipuler le SNDS ou préparer un ETL dans le cadre d'une transformation du modèle de données (passage à [OMOP-CDM](../../glossaire/OMOP.md) par exemple).

### Cohérence temporelle
Certaines règles de cohérence temporelle ont été implémentées dans les données de synthèse. Ces règles sont des règles au sein d'une même table, et consistent essentiellement à assurer que les dates de début (de soins, par exemple) sont antérieures aux dates de fin, et que les dates qui sont censées se correspondre soient bien cohérentes.

Par exemple, on s'assure dans le générateur que pour la table ER_PRS_F, la variable EXE_SOI_DTD soit une date antérieure à EXE_SOI_DTF, et que EXE_SOI_AMD soit cohérente avec EXE_SOI_DTD (idem pour les dates de fin). 

### Cohérence statistique
En s'appuyant sur des données en Open Data, le générateur reproduit des distributions de valeurs pour certaines variables.

Par exemple, les actes CCAM suivent la distribution présentée sur [Scan Santé](https://www.scansante.fr/opendata/pmsi-mco/ccam). Cela permet d'assurer un certain réalisme dans les tables générées.

###  Modificateur du schéma
Le schéma formel peut présenter des erreurs (variables qui ne sont pas du bon type, pas de la bonne longueur, pas au bon format...). L'utilisateur peut aussi, pour des raisons propres à son projet, vouloir modifier certaines variables. 

Afin de permettre à l'utilisateur d'implémenter ces corrections, il est possible de modifier temporairement le schéma formel (le temps d'une génération de données). Le détail de son fonctionnement est donné sur le [répertoire Gitlab du générateur](https://gitlab.com/healthdatahub/synthetic-generator).

## Limites et biais
### Pas de cohérence médicale
Actuellement ce générateur ne permet pas d'obtenir une cohérence médicale. En effet, même si certaines distributions *univariées* sont respectées, aucune distribution *multivariée* n'est respectée: il n'y aucune corrélation entre les diagnostics et les médicaments pour un patient donné par exemple.

### Pas de version par année
Le schéma des tables évolue chaque année, avec l'ajout ou la suppression de tables et variables.

Ces informations sont actuellement présentes dans le schéma SNDS, mais de façon trop incomplète pour générer un SNDS synthétiques pour chaque année.

### Erreurs dans le schéma
Le schéma des tables est imparfait et incomplet.  
Ces erreurs sont directement visibles dans les données synthétiques. Il manque en particulier de nombreuses tables de nomenclatures, qui indiquent les valeurs prises par les variables, avec les libellés correspondant aux codes employés.

### Temps de génération
Les temps de traitements sont assez conséquent sur de grands volumes de bénéficiaires.

## Améliorer le générateur
Actuellement l'équipe Data du Health Data Hub est en train de travailler sur la mise en place d'une API pour ce générateur, l'amélioration des performances pour réduire les temps de traitements et adapter ce générateur à d'autres bases de données.
  
Vous pouvez contribuer à améliorer les données synthétiques en améliorant le schéma formel du SNDS sur le projet [schema-snds](https://gitlab.com/healthdatahub/schema-snds). Vous pouvez proposer des merge-request pour ajouter des contraintes, corriger les types, ou compléter les nomenclatures.  

Si vous souhaitez proposer d'autres types d'améliorations, vous pouvez ouvrir des issues sur le projet [schema-snds](https://gitlab.com/healthdatahub/schema-snds/-/issues), ou sur [le générateur](https://gitlab.com/healthdatahub/synthetic-generator/-/issues) si cela concerne la procédure de génération.  

## Citer le générateur
Pour toute publication autour des travaux réalisés sur ce générateur, merci de citer le générateur de la manière suivante : « Générateur de données synthétiques du Health Data Hub ». 

## Licence
Ce générateur est sous [licence](https://gitlab.com/healthdatahub/synthetic-generator/-/blob/master/LICENSE) Mozilla Public License Version 2.0
