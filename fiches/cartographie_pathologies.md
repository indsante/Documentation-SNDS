# Cartographie des pathologies
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Présentation

La cartographie des pathologies et des dépenses est une base produite par la [CNAM](../glossaire/Cnam.md) à partir du SNDS.

Elle consiste à identifier :
* les patients pris en charge pour des pathologies chroniques fréquentes, graves, ou coûteuses ;
* les femmes prises en charge pour le risque maternité ;
* les patients qui n’ont pas ces pathologies chroniques repérées ou évènements de santé mais ont eu des hospitalisations ponctuelles ;
* et ceux qui ne sont dans aucune de ces situations.

La cartographie couvre environ **57 millions de bénéficiaires du régime général** ([SLM](../glossaire/SLM.md) comprises) ayant eu recours à des soins remboursés dans l’année. 

Les algorithmes d'identification utilisent les informations suivantes :
* diagnostics mentionnés dans le **PMSI à la suite d'une hospitalisation** ;
* diagnostic ayant donné lieu à une prise en charge pour **affection de longue durée** [(ALD)](../fiches/beneficiaires_ald.md) ;
* recours à des **actes ou médicaments spécifiques** de pathologies.

![Sources de données des top pathologies](../files/DREES/2019-06_DREES_Cartographie-des-pathologies/top_patho_construction.png)

La CNAM précise bien dans la description de sa méthodologie que l'objet de cette cartographie n'est pas d’identifier tous les patients atteints par la pathologie, mais d’identifier ceux ayant recours à des soins du fait de ces pathologies, quand ce recours peut être repéré dans le système national des données de santé (SNDS).

## Top pathologie

Les tops pathologie sont des variables binaires, qui indiquent le repérage d'une pathologie pour un individu.

Il existe 56 tops pathologies, regroupés en 13 grands groupes de pathologies :
* Maladies cardioneurovasculaires (dont la maladie coronaire, l’insuffisance cardiaque…) ;  
* Facteurs de risque vasculaire traités ;  
* Diabète ;  
* Cancers ;  
* Maladies neurologiques ou dégénératives ;  
* Maladies psychiatriques ;  
* Traitements psychotropes ;  
* Maladies respiratoires chroniques ;  
* Maladies inflammatoires ou rares ou VIH/Sida ;  
* Maladies du foie ou du pancréas ;  
* Insuffisance rénale chronique terminale traitée ;  
* Maternité, avec ou sans pathologies ;  
* Autres affections de longue durée. 

Les tops pathologie sont calculés **chaque année** (AAAA), et selon plusieurs versions de l'algorithme d'identification. La version en cours en 2017 est la G5. La première année de disponibilité de la cartographie est 2012.

## Tables de la cartographie

Les tops pathologies sont restitués dans la table [CT_IND_AAAA_GX](../tables/CARTOGRAPHIE_PATHOLOGIES/CT_IND_AAAA_GN.md). 

La table [CT_DEP_AAAA_GX](../tables/CARTOGRAPHIE_PATHOLOGIES/CT_DEP_AAAA_GN.md) compile les dépenses par poste de soins de ville, d’hôpital, et de prestations en espèces. Elle permet de rapidement calculer les dépenses par pathologie.
 
La table [CT_IDE_AAAA_GX](../tables/CARTOGRAPHIE_PATHOLOGIES/CT_IDE_AAAA_GN.md) est une table de passage entre les identifiants BEN_NIR_PSA et BEN_RNG_GEM du DCIR, et l'identifiant ID_CARTO propre à la cartographie.

## Groupe des Maladies cardioneurovasculaires (sup_Cv_cat)
### Top Syndrome coronaire aigu (top_CvIDM_aig)
#### Description des critères de repérage

Personnes hospitalisées l’année N pour cardiopathie ischémique aigüe ([DP](../glossaire/DP.md) d’un des [RUM](../glossaire/RUM.md)).   

#### Codes CIM10 utilisés dans le PMSI

* I21 (Infarctus aigu du myocarde) ;
* I22 (Infarctus du myocarde à répétition) ;
* I23 (Certaines complications récentes d'un infarctus aigu du myocarde) ;
* I24 (Autres cardiopathies ischémiques aiguës).
 

#### Proposition d'un code SQL SAS pour reconstituer le top Syndrome Coronaire aigu
Ce code permet de reconstituer le top Syndrome coronaire aigu, et notamment d'élargir le repérage des pathologies au-delà de la population du régime général.

```sas
PROC SQL; CREATE TABLE top_coro_aigu 
    AS SELECT 
        DISTINCT b.nir_ano_17,c.ben_nir_psa, c.ben_rng_gem,e.*
            FROM ORAVUE.T_MCO16UM a
            LEFT JOIN ORAVUE.T_MCO16C b
            ON a.RSA_NUM=b.RSA_NUM AND a.ETA_NUM=b.ETA_NUM
                LEFT JOIN ORAVUE.IR_BEN_R c
                ON b.NIR_ANO_17=c.BEN_NIR_PSA
    WHERE a.DGN_PAL LIKE "I21%" OR a.DGN_PAL LIKE "I22%" OR
            a.DGN_PAL LIKE "I23%" OR a.DGN_PAL LIKE "I24%" ;
QUIT;

```
La CNAM publie chaque année une fiche de résultats statistiques pour chacune des pathologies (effectifs, dépenses, etc.) : 
[fiche Syndrome coronaire aigu.](https://www.ameli.fr/fileadmin/user_upload/documents/Syndrome_coronaire_aigu_fiche_2017.pdf)

## Références

::: tip Crédit
Le contenu original de cette fiche est tiré du document [Méthode médicale Cartographie ](https://www.ameli.fr/l-assurance-maladie/statistiques-et-publications/etudes-en-sante-publique/cartographie-des-pathologies-et-des-depenses/methode.php) disponible sur le site Ameli.  
Les codes SQL SAS ont été reconstitués par Claire-Lise Dubost (DREES).
:::
