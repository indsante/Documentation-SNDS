# Table Schema
<!-- SPDX-License-Identifier: MPL-2.0 -->

[Table Schema est un standard](https://frictionlessdata.io/specs/table-schema/) qui permet de décrire le schéma de données tabulaires.

Nous utilisons ce standard pour décrire le [schéma formel du SNDS](https://gitlab.com/healthdatahub/schema-snds/). 

## Spécification

Une table est décrite principalement par 
- une liste de `fields` (champ, colonne)
- une [primaryKey](https://fr.wikipedia.org/wiki/Cl%C3%A9_primaire) (optionnelle)
- des [foreignKeys](https://fr.wikipedia.org/wiki/Cl%C3%A9_%C3%A9trang%C3%A8re) (optionnelles)

Un `field` est principalement décrit par 
- un `name` (seul champ obligatoire)
- un `title` plus lisible
- une `description`
- un `type`, parmi une liste extensible [string, number, integer, boolean, date, etc.]
- un `format`, qui précise le type (ex : format de la date)
- des `constraints`, telles que valeurs min et max, listes de modalités autorisées, etc.
 
Cette spécification est extensible librement. 
Ils est donc possible d'ajouter des catégories d'informations spécifiques aux données considérées.

Un schema qui suit la spécification Table Schema est enregistré au format
[json](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation).

## Intérêts

La spécification Table Schema est facilement lisible par des humains, **et** manipulable informatiquement.
 
Ce standard est indépendant de tout logiciel ou langage, il est donc extrêmement portable.

Des librairies existent pour manipuler les schémas suivant cette spécification, par exemple
- [tableschema-py](https://github.com/frictionlessdata/tableschema-py) en Python permet d'inférer, manipuler et valider des schémas ;
- [tableschema-r](https://github.com/frictionlessdata/tableschema-r) est un outil R similaire ; 
- [goodtables-py](https://github.com/frictionlessdata/goodtables-py) permet de valider qu'un fichier de données respecte un schéma ;
- [table-schema-to-markdown](https://framagit.org/opendataschema/table-schema-to-markdown)
est utilisé pour générer la section [Tables](../tables/README.md) de la documentation.

Nous avons développé la librairie [tsfaker](https://gitlab.com/healthdatahub/tsfaker/) pour générer des données synthétiques à partir de fichiers Table Schémas.

Il est également possible de 
- créer des tables vides correspondants dans des bases relationnelles, avec la librairie [tableschema-sql](https://github.com/frictionlessdata/tableschema-sql-py)
- créer des diagrammes relationels entre tables, en utilisant la brique précédente + [schemacrawler](https://www.schemacrawler.com/)

Plus généralement, l'adoption de la spécification Table Schema est encouragée pour améliorer la qualité des données publiées en open-data et leur documentation.

[Etalab](https://www.etalab.gouv.fr/qui-sommes-nous) référence ainsi les schemas de données publiques sur le site [schema.data.gouv.fr](https://schema.data.gouv.fr/), avec des services associés de validation de données ou de [génération manuelle de données conformes](https://csv-gg.etalab.studio/).

## Descripteur type d'une table

```json
{
  // 'fields' est une liste ordonnée de descripteurs de colonnes
  "fields": [ 
    {
      "name": "Nom de la colonne", // OBLIGATOIRE 
      "title": "Titre plus lisible",
      "description": "Description de la colonne",
      "type": "Chaîne de caractères spécifiant le type",
      "format": "Chaîne de caratères spécifiant le format",
      "constraints": {
        // descripteurs de contraintes sur la colonne (ex: unicité des valeurs)
      }
    }
    // Autres descripteurs de colonnes
  ],
  // Spécification (optionnelle) de la clé primaire
  "primaryKey": "Nom de la colonne, ou liste de nom de colonnes séparées par des virgules",
  // Spécification (optionnelle) des clés étrangères
  "foreignKeys": [
    {
      "fields": "Nom (ou liste) de la colonne  de la table",
      "reference": {
        "resource": "Nom de la table référencée",
        "fields": "Nom (ou liste) de la colonne de la table référencée"
      }
    }
  ]
}
```
