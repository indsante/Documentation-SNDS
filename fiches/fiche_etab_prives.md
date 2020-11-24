# Dépenses des établissements privés (à partir du DCIRS)
<!-- SPDX-License-Identifier: MPL-2.0 -->

L'objectif de la fiche est de reconstituer les dépenses des établissements de santé privés. 

Les séjours en établissements privés sont facturés directement à l’Assurance Maladie ce qui garantit l’exhaustivité des remontées d’information sur ce champ.  
Cela concerne toutes les prestations en établissement privé, que l'établissement soit de nature non lucratif ou lucratif.  
Le PMSI contient des tables de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et
remboursés par l’assurance maladie.
C'est pourquoi nous présentons dans cette fiche l'analyse les dépenses des établissements privés dans le DCIR ou le DCIRS.

En complément, des informations sur les dépenses en établissements de santé publics se trouvent dans la fiche sur 
les [dépenses des établissements de santé publics dans le PMSI](depenses_hopital_public.md).


## Sélectionner les prestations et délimiter le champ

La première étape consiste à sélectionner tous les actes associés à un établissement de santé. Dans le DCIR, il faut joindre la table prestation (`ER_PRS_F`) avec la table affinée établissements (`ER_ETE_F`). Dans le DCIR les informations sont présentes dans la table prestation [NS_PRS_F](../tables/DCIRS/NS_PRS_F.md) dans le DCIRS). Il s'agit des actes pour lesquels le finess de l'établissement exécutant est renseigné (la variable `ETB_EXE_FIN` contient un code à 8 chiffres, il s'agit du FINESS sans clef). 

Afin de se concentrer sur le champ des établissements privés, les filtres à poser sont les suivants : 

-	`DPN_QLF` NE 71 : on exclut les remontées d'information "pour information (soins externes)", afin d'écarter les ACE à l'hôpital public.

-	`ETE_TYP_COD` NOT IN (1,2,3) : ce filtre nous permet de se concentrer sur les prestations qui ont lieu dans un établissement privé.
Pour obtenir la classification des établissements, se référer à la nomenclature `ETE_TYE_V` présentée dans la section suivante.
Se référer à la nomenclature pour savoir quel filtre exact appliquer sur `ETE_TYP_COD` en fonction de la catégorie de prestations ciblée. Il est équivalent au filtre `PRS_PPU_SEC`=2 (code public/privé, modalité "privé"). 

-	 `ETE_CAT_COD` NOT IN (124, 125, 130, 132, 133, 134, 142, 223, 224, 228, 230, 268, 269, 289, 297, 347, 413, 414, 433, 438, 439,700). 
On filtre sur la catégorie de l’établissement exécutant afin d'exclure les centres de santé.

On exclut les centres de santé car ceux-ci sont catégorisés en soins de ville comme dans les Comptes de la Santé
[CNS 2019](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-depenses-de-sante-en-2018-resultats-des-comptes-de-la-sante-edition-2019)
ainsi que dans la statistique mensuelle de la CNAM.

-	`ASU_NAT` = 10,30,40,50,80 : Maladie, maternité, AT/MP, décès et invalidité sont les 5 risques pris en charge par l’assurance maladie.
Si les caisses ont effectué des remboursements pour d’autres risques, ceux-ci ne sont pas censés être pris en charge. Par exemple la nature
d'assurance 22 qui correspond à des soins aux invalides de guerre (CNMSS).


## Ventiler les dépenses

### Selon la nature juridique

A partir de la variable `ETE_TYP_COD`, on peut construire une ventilation des établissements privés selon plusieurs axes: lucratifs/non lucratifs, conventionné ou non, et OQN/T2A.
Le champ du privé concerne tous les établissements pour lesquels `ETB_PPU_SEC` de `IR_TYE_V` prend la valeur 2 (à l'exception du secteur libéral ambulatoire `ETE_TYP_COD`=0 qui correspond à des soins de ville).

|  ETB_TYP_COD |ETB_PPU_SEC   | ETB_TYP_LIB  |
|---|---|---|
| 99 | 9 | VALEUR INCONNUE  |
| 0 | 2 | AMBULATOIRE SECTEUR LIBERAL  |
| 1 | 1 | PUBLIC PROPREMENT DIT  |
| 2 | 1 | PSPH PRIVE A BUT NON LUCRATIF PARTICIPANT AU SERVICE PUBLIC HOSPITALIER  |
| 3 | 1 | EX PJP AYANT OPTE POUR LE BG  |
| 4 | 2 | PRIVE LUCRATIF CONVENTIONNE  |
| 5 | 2 | PRIVE NON LUCRATIF CONVENTIONNE  |
| 6 | 2 | PRIVE NON LUCRATIF CONVENTIONNE  |
| 7 | 2 | PRIVE NON LUCRATIF NON CONVENTIONNE  |
| 8 | 2 | OQN NON LUCRATIF CONVENTIONNE  |
| 9 | 2 | OQN LUCRATIF CONVENTIONNE  |

*Source: nomenclature `ETE_TYE_V` du SNDS*

L’Objectif quantifié national (OQN) résulte d'un accord du 4 avril 1991 entre l'État, les organismes d'assurance maladie et l'UHP. 
Cet accord a été retranscrit dans le Code de la Sécurité sociale (art. L. 162-22-2, R. 162-41 et D. 162-4). 
L’OQN concerne les activités de psychiatrie et de soins de suite ou de réadaptation exercées par les établissements de santé privés.  

Les cliniques privées non conventionnées sont très peu nombreuses en France [site ameli.fr](https://www.ameli.fr/assure/remboursements/rembourse/hospitalisation-chirurgie/hospitalisation-chirurgie). L'Assurance Maladie rembourse 80 % des frais de séjour et des honoraires médicaux dans ces établissements, sur la base des tarifs en vigueur. Toutefois, les cliniques privées non conventionnées appliquent des tarifs plus élevés que les tarifs en vigueur. 


### Selon la discipline (PSY, SSR, MCO et HAD)

Dans le DCIR et le DCIRS,  il y a les équivalents des discipline de prestation des différents PMSI pour les établissements privés. 
Pour faire la distinction, il faut regarder la variable `DDP_COD` de `NS_PRS_F` pour le DCIRS et `DDP_COD` de la table [ER_ETE_F](../tables/DCIR/ER_ETE_F.md) pour le DCIR.
Cette variable de code de la discipline de prestations a pour table de nomenclature `IR_DDP_V`, et dans cette nomenclature on trouve
la variable `DDP_GDE_COD` qui nous renseigne sur la discipline de prestations.

| DDP_GDE_COD | discipline de prestation |
| ----------- | --------------------------|
| 4 | SSR |
| 6 | PSY |
| 0,1,2,3 | MCO et HAD|
| 0 | sans objet |
| 1 | médecine |
| 2 | chirurgie | 
| 3 | obstétrique |
 

La HAD se repère avec le Groupe Homogène de Tarif ([GHT](../glossaire/GHT.md)).

Il n'existe pas d'activité externe en établissement privé lucratif, elle est considérée comme du soin de ville libéral. Les consultations de généralistes ou spécialistes en établissements privés peuvent néanmoins être étudiées en filtrant sur le lieu d'exécution. 





## Calculer des remboursements

### Les variables à considérer 

Les montants payés, de base et remboursés du régime obligatoire des soins de ville sont disponibles dans la table [ER_PRS_F](../tables/DCIR/ER_PRS_F.md) dans le DCIR :

- montant payé : `PRS_PAI_MNT`
- taux de remboursement : `RGO_REM_TAU`
- base de remboursement de l'acte de base: `BSE_REM_BSE`
- base de remboursement du complément d'acte: `CPL_REM_BSE`
- montant remboursé sur l'acte de base: `BSE_REM_MNT`
- montant remboursé sur les compléments et majoration : `CPL_REM_MNT`

Dans le DCIRS, on retrouve le montant payé (`PRS_PAI_MNT`)et le taux de remboursement (`RGO_REM_TAU`). 
Cependant, la partie de base et le complément sont sommés au sein de deux indicateurs:
- le montant total remboursé (`TOT_REM_MNT` qui correspond à `BSE_REM_MNT`+`CPL_REM_MNT` dans le DCIR) 
- la base de remboursement totale (`TOT_REM_BSE`qui correspond à `BSE_REM_BSE`+`CPL_REM_BSE` dans le DCIR). 

On trouve ces variables dans la table prestation `NS_PRS_F`. 

### Méthode de calcul

La méthode est identique à celle appliquée pour les soins de ville. 
Vous pouvez donc vous reporter à la fiche [Dépenses de soins de ville dans le DCIR et le DAMIR](montant_soins_de_ville.md)


## Références

- Statistique mensuelle des cliniques privées, 2010, portail de la CNAM

::: tip Crédits
Cette fiche a été rédigée par Kristel JACQUIER et Raphaële ADJERAD.
:::
