---
tags:
    - Dépenses
    - Etablissements et Structures
    - PMSI
    - DCIR/DCIRS
---

# Dépenses des établissements de santé dans le SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

L'objectif de la fiche est de décrire où trouver les informations sur les trois types d'établissements de santé : 
**publics, privés et les établissements du secteur médico-social**.

Il existe des informations en doublons entre le DCIR et le PMSI. Ainsi, il convient de nettoyer le champ du DCIR des dépenses des établissements publics 
car celles-ci ne sont pas exhaustives et d'**analyser les dépenses des établissements publics dans le PMSI** à l'aide de la fiche dédiée : 
[Dépenses des établissements de santé publics dans le PMSI](../fiches/depenses_hopital_public.md). 

Le DCIR contient en revanche les données les plus exhaustives sur les établissements privés, 
la fiche [Dépenses des établissement privés (à partir du DCIRS)](../fiches/fiche_etab_prives.md) est consacrée à l'**étude des dépenses des établissements privés dans le DCIR**.

Enfin le DCIR contient très peu d'informations sur le secteur médico-social, pour étudier ce secteur, il est nécessaire de faire appel à d'autres sources. 


## Les établissements publics

Nous distinguons dans cette partie deux types d'établissements: l'hôpital public et les centres de santé. 

### L'hôpital public

Les remontées d'information sur les hopitaux publics sont très incomplètes dans le DCIR/DCIRS. C'est pourquoi, nous présentons comment exclure l'information concernant les hôpitaux publics dans le DCIR et le DCIRS, afin de privilégier leur étude via le [PMSI](../fiches/depenses_hopital_public.md).

#### Cibler les prestations de l'hôpital public à partir du classement de la catégorie juridique privé / public

On peut créer une variable qui permet d’obtenir le lieu d’exécution de la prestation et de classer ce lieu en fonction de s’il s’agit
d’un établissement public ou privé. 

Si la variable `ETB_EXE_FIN` est égale à 0, aucun établissement n’est lié à la prestation, alors il s’agit d’une prestation de ville. 

Parmi les soins associés à un FINESS, certains peuvent être classés dans les soins de ville selon la logique suivante. 
La variable `ETB_CAT_RG1` du référentiel des établissements (`IR_CET_V`) permet de regrouper les établissements.
Si les deux premiers caractères de la variable de code de regroupement de l’établissement `ETB_CAT_RG1` sont égaux à 21 
(à l'exclusion des établissements relevant de la loi hospitalière, `ETE_CAT_COD`== 698) ou 22, alors il s’agit de prestations que l'on peut classer en "ville", 
à savoir les cabinets libéraux et autres établissements de soins et de prévention (y compris les centres de santé). 

Ensuite, la variable `PRS_PPU_SEC` nous permet d'avoir de l'information sur le caractère privé ou public de la prestation. 
Elle est construite comme suit.  
L’établissement est public si le type d’établissement est public ( `ETE_TYP_COD` vaut 1, 2 ou 3]) et si le numéro  du PS exécutant n’est pas renseigné (`PFS_EXE_NUM` est manquant ou vaut ‘00000000’) (`PRS_PPU_SEC`=1)
Sinon l’établissement est privé (`PRS_PPU_SEC`=2)

Remarque : On note que si le numéro du PS exécutant est renseigné alors le type de la prestation ne sera pas public (`PRS_PPU_SEC` différent de 1) , bien que la prestation ait eu lieu en établissement public. 

Dans le DCIR, il faut aller chercher les variables `PRS_PPU_SEC` et `ETE_TYP_COD` dans la table `ER_ETE_F` qui n'est pas la table centrale; 
dans le DCIRS ces informations sont dans la table centrale `NS_PRS_F` (table de nomenclature `IR_TYE_V`).

Pour résumer en pseudo-code :
```
IF substr(ETB_CAT_RG1,1,2) IN (21,22) AND ETE_CAT_COD<>698:
    THEN lieu_exec = "ville"
ELSE IF PRS_PPU_SEC == 1:
    THEN lieu_exec = "public"
ELSE : 
    lieu_exec = "prive"
```

Les <PreviewPage text="rétrocessions" link="../glossaire/retrocession.html" /> ont pour lieu d'exécution l'hôpital public. Elles correspondent à de la pharmacie hospitalière en établissement. Leur code prestation `PRS_NAT_REF` est parmi 3317, 3318, 3319, 3351, 3352, 3353, 3354, 3355, 3356, 3357, 3330 (table de valeur `IR_NAT_V`). 
Néanmoins, elles devraient être retenus avec les soins de ville. En effet, les rétrocessions sont rattachées aux soins de ville, au sens de l'Objectif National des Dépenses d'Assurance Maladie (<PreviewPage text="ONDAM" link="../glossaire/ONDAM.html" />).  

**Pour travailler sur les soins de ville dans le DCIR on peut donc exclure les prestations pour lesquels `lieu_exec` == 'public' sauf si la `PRS_NAT_REF` correspond à de la rétrocession**.


#### Repérer les Actes et Consultations Externes du DCIR/DCIRS

Les données exhaustives concernant les **actes et consultations externes** (ACE) sont remontées via le PMSI.
Le DCIR/DCIRS ne couvre que le champ des ACE en facturation directe. En effet, depuis septembre 2011, les établissements publics basculent leur activité ACE en facturation directe. Début 2019, le déploiement de FIDES ACE était effectif dans tous les établissements, à l’exception de l’AP-HP et de certains établissements ultramarins. 


Pour exclure du DCIR/DCIRS les Actes et Consultations Externes générés par les établissements Ex Dotation Globale (ex DG), il est conseillé d’utiliser 
le filtre ci-dessous :

-	On exclut la prestation :
	- si elle concerne de la T2A dans le public **OU** 
    - si elle n’est dans pas un établissement en T2A mais que l’établissement est public et que la catégorie de l’établissement exécutant est un CHR,
un CH, un CH spécialité de lutte contre le cancer, un hôpital local, un établissement de soins obstétriques et chirurgico-gynécologiques,
un établissement de soins pluridisciplinaires, un établissement de soins chirurgicaux ou un établissement de soins médicaux et que le code 
du mode de traitement indique que la prestation est en hospitalisation complète, consultation et soins externes ou urgence (ou sans objet) **OU**
    - si l’indicateur de T2A est manquant, que l’indicateur du caractère privé ou public de l’établissement est manquant, 
que la catégorie de l’établissement exécutant est manquant et que le mode de  traitement est manquant, on conserve la prestation. 

Le code SAS correspondant est le suivant :
```
NOT (T2.ETE_IND_TAA= 1  
    OR (T2.ETE_IND_TAA= 0 AND T2.PRS_PPU_SEC=1 
        AND T2.ETE_CAT_COD in (101,355,131,106,122,365,128,129) AND T2.MDT_COD in (0,3,7,10)))
OR (T2.ETE_IND_TAA is null AND T2.PRS_PPU_SEC is null 
        AND T2.ETE_CAT_COD is null AND T2.MDT_COD is null)
```

### Les centres de santé

Les centres de santé correspondent aux  catégories d'établissements (124, 125, 130, 132, 133, 134, 142, 223, 224, 228, 230, 268, 269, 289, 297, 347, 413, 414, 433, 438, 439,700) de la variable `ETE_CAT_COD`(table de valeur `IR_CET_V`).   
Dans le DCIR, il faut aller chercher la variable `ETE_CAT_COD` dans la table établissement `ER_ETE_F`; 
dans le DCIRS ces informations sont dans la table centrale `NS_PRS_F` (table de nomenclature `IR_TYE_V`).


## Les établissements privés 

Les séjours en établissements privés sont facturés directement à l’Assurance Maladie ce qui garantit l’**exhaustivité des remontées d’information sur ce champ**.
Cela concerne toutes les prestations en établissement privé, que l'établissement soit de nature non lucratif ou lucratif.
Le PMSI contient des tables de facturation des séjours privés mais il n’est pas certain qu’elles correspondent aux montants réellement facturés et 
remboursés par l’assurance maladie.
Il est donc **recommandé d'analyser les dépenses des établissements privés dans le DCIR ou le DCIRS plutôt que dans le PMSI**. 

Pour étudier les dépenses en établissements privés, se référer à la fiche [Dépenses des établissement privés (à partir du DCIRS)](../fiches/fiche_etab_prives.md)


## Le secteur médico-social et handicap

Une partie des séjours du secteur médico-social et handicap est facturée directement à l’Assurance Maladie. 
Ces séjours peuvent être retrouvés dans le DCIR via le type d’établissement. Il faut effectuer une jointure 
avec la table établissement `ER_ETE_F` et utiliser la variable `ETE_CAT_COD` (dans le DCIRS, la même variable
dans la table de prestations centrale comme mentionné ci-dessus). Une jointure avec `IR_CET_V` (du répertoire ORAVAL)
permet d’avoir les libellés des différents établissements.
**L’information sur ces séjours n’est pas exhaustive et doit être traitée avec précaution**. 


::: tip Crédits  
Cette fiche a été rédigée par Raphaële Adjerad (DREES) et Kristel Jacquier (DSS).
:::


*Sources* 
-	« Maquette Stat mens Etablissements prives – version du 28 mai 2010 Regles de gestion du Regime General pour constituer la statistique mensuelle pour le suivi des depenses des etablissements prives » disponible sur le portail SNDS (Dossiers publics>SNIIRAM>_Documentation SNIIRAM- SNDS> Documentation>maquettes Stat Mens>ancienne maquette stat mens)
-	Supports de Formation DCIRS et PMSI
-	Code de Jérôme Brocca (ARS)



