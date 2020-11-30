# Complémentaire Santé Solidaire
<!-- SPDX-License-Identifier: MPL-2.0 -->

A partir du 1er novembre 2019, l'[ACS](../fiches/acs.md) et la [CMU-C](../fiches/cmu_c.md) ont fusionné pour former 
la [Complémentaire Santé Solidaire](https://www.complementaire-sante-solidaire.gouv.fr/).
On distingue la C2S et la C2SP selon que les bénéficiaires participent ou non au paiement de sa complémentaire.
Cette participation financière s'élève à maximum 1 euro par jour et par personne. 

En pratique, rien ne changera pour les assurés de l’actuelle CMUC (746 euros par mois, ou un couple avec enfant aux revenus inférieurs à 1 343 euros) 
: la C2S restera gratuite, avec le même niveau de remboursement.
En revanche, pour la population qui peut prétendre à l’ACS (moins de  1 007 euros pour un célibataire, 1 813 euros pour un couple avec enfant),
les garanties seront alignées sur celles de la CMU-C, moyennant une « participation financière ».

::: tip ATTENTION période transitoire
Suppression progressive de l'ACS. Toutes les contrats ACS souscrits avant le 1er Nov 2019 pourront aller jusqu'à échéance soit le 1er Nov 2020. 
Conséquence à partir du 1er Novembre 2020, il n'y aura plus d'ACS et que des contrats C2S.   
:::


## La C2S dans le SNDS

A partir de l'entrée en vigueur de la C2S, on retrouve les bénéficiaires dans la table prestation `ER_PRS_F` à l'aide du `BEN_CMU_TOP`. 
Avant la C2S, le top CMU-C était positionné à 1 lorsque le type de contrat cmu est égal à 89 (bénéficiaire de la CMU complémentaire), 
sinon il était positionné à zéro. Depuis la mise en place de la C2S, le top à 1 incluera les bénéficiaires de la C2S. 

Le top CMU-C indique si une prestation est exonérée au titre de la CSS. 
Il ne permet pas de recenser l'ensemble des bénéficiaires de la CSS dans la mesure où d'autres motifs d'exonération peuvent prévaloir sur la CSS.
Ainsi, pour recenser la population, il faut se référéer à la table `IR_ORC_R`  (seulement RG+SLM), avec la variable `BEN_CTA_TYP` à 89. 

Dans le PMSI, on repère les bénéficiaires de la C2S avec le code gestion 89 à partir de la variable `GES_COD` présente dans les tables `STC` pour 
les établissements publics et dans les tables de facturation `FA` pour les établissements privés. Cette variable ne fait toutefois pas l'objet d'une vérification, il est donc plutôt recommandé 
de vérifier les droits côté DCIR/DCIRS.


## Distinguer C2S et C2SP

Une variable `BEN_C2S_TYP` sera ajoutée en 2021 dans la table `ER_PRS_F` du DCIR 
pour restituer le type de complémentaire santé solidaire du bénéficiaire, afin de distinguer :  
- les factures des bénéficiaires de la C2S gratuite (contexte initial CMU-C ou CMU-C gratuite),
- les factures des bénéficiaires de la C2S participative (CMU-C participative).

La variable prend les valeurs ci-dessous (table de valeur IR_C2S_V sous ORAVAL):

| Valeur  |  Libellé          |
|---------|-------------------|
|   I89   | Valeur inconnue   |
|   ZZZ   | Sans objet 	    |
|   P89   | C2S Participative	|
|   G89   | C2S gratuite      |

De plus, le libellé de la variable `BEN_DRT_SPF` qui correspond aux droits spécifiques ACS
va être modifié afin d'inclure la modalité P pour le contrat participatif:

| Valeur  |  Libellé             |
|---------|----------------------|
|   III   | Valeur inconnue      |
|   ZZZ   | Sans objet 	         |
|   ACS   | Beneficiaire ACS     |
|   P     | Contrat Participatif |


## Références
- Présentation de Céline Leroy au comité utilisateurs SNDS 
- Comité partenaires DCIR/PMSI de la CNAM du 9 mars 2020

::: tip Crédits  
Cette fiche a été rédigée par Céline Leroy (ARS) et Kristel Jacquier (DSS).
:::

