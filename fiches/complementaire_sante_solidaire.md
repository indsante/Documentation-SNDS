# La Complémentaire Santé Solidaire

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

Depuis le mise en place du dispositif, il n'est pas possible de distinguer la C2S participative de la C2S gratuite. 
Fin 2020, la variable `REF_C2S_COD` sera créée dans la table **[IR\_ORC\_R](../tables/DCIR_DCIRS/IR_ORC_R.md)**.
Elle présentera les modalités suivantes:

|Droit ouvert IR_BEN_R |Libelle|Entrepôt|
|----------------------|-------|--------|
|P | Contrat Participatif 	|		P   |
|S | Contrat suspendu 		|		P   |
|F | Contrat Ferme 			|		P   |

La modalité P permet donc de distinguer les contrats participatifs des contrats gratuits. 



## Références
- Présentation de Céline Leroy au comité utilisateurs SNDS 
- Comité partenaires DCIR/PMSI de la CNAM du 9 mars 2020
