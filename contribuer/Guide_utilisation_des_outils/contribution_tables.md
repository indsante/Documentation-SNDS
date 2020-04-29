# Modifier la documentation des tables
<!-- SPDX-License-Identifier: MPL-2.0 -->

La section [Tables](../../tables/README.md) de la documentation a un fonctionnement spécifique.

Elle combine des **descriptions textuelles libres**, gérées comme le reste de la documentation, et des **informations structurées** issues du [schéma formel du SNDS](https://gitlab.com/healthdatahub/schema-snds). 

Ce fonctionement est similaire à celui des pages wikipedia, où les informations structurées de wikidata sont gérées séparément du texte principal.  

[![exemple wikidata](../../files/images/contribution_tables/exemple_wikidata.png)](https://fr.wikipedia.org/wiki/Direction_de_la_Recherche,_des_%C3%89tudes,_de_l%27%C3%89valuation_et_des_Statistiques)


## Modifier la description textuelle

La description textuelle libre s'édite comme les autres pages de documentation, en suivant le lien `Éditer` en bas de page. 

Le fichier source a 3 parties
 
1. l'en-tête, avec un lien court (permalink) et le titre ;
1. **la description textuelle à éditer**, souvent vide actuellement ; 
1. le code d'inclusion du schéma de la table, entouré de commentaires d'avertissement. 

![](../../files/images/contribution_tables/parties_fichier_source_tables.png)
*Exemple de fichier source de la documentation des tables*

::: tip
Si vous naviguez via le projet sur GitLab, ces fichiers sources sont dans le dossier [tables/.sources](../../tables/.sources). 
:::


## Modifier le schéma de la table

Sur les pages de la section tables, un lien supplémentaire d'édition, situé sous le sous-titre **Liste des variables** permet de modfier le [schéma formel du SNDS](https://gitlab.com/healthdatahub/schema-snds). 

<p style="text-align:center;">
<img 
    src="../../files/images/contribution_tables/lien_editer_schema.png" 
    alt="Lien d'édition vers le schéma des tables" 
    width="300"
/>
</p>

Ce schéma est stocké dans des fichiers json, selon le standard [table-schema](../../glossaire/table-schema.md).

![](../../files/images/contribution_tables/exemple_modification_tableschema.png)

*Exemple de modification du schéma json*

À chaque modification du schéma, les fichiers markdown du dossier [tables/.schemas](../../tables/.schemas) sont mis à jour automatiquement. 
Ils sont ensuite combinés avec les fichiers correspondants du dossier [tables/.sources](../../tables/.sources) pour mettre à jour la section [Tables](../../tables/README.md).

::: tip Note
Les modifications du schéma sont également propagées automatiquement sur le dictionnaire interactif et sur les données synthétiques. 
:::
