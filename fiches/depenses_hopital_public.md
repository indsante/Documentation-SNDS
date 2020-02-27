# Dépenses des établissements de santé publics dans le PMSI
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette fiche explique comment retrouver les dépenses des établissements publics dans le PMSI. 

Nous y traitons les dépenses associées aux séjours hospitaliers ainsi qu'aux actes et consultations externes ([ACE](actes_consult_externes.md)).

Les explications sont déclinées par spécialité hospitalière : 
- [MCO](../glossaire/MCO.md) : médecine chirurgie obstétrique et odontologie
- [SSR](../glossaire/SSR.md) : soins de suite et de réadaptation
- [HAD](../glossaire/HAD.md) : hospitalisation à domicile
- [PSY](../glossaire/RIM-P.md) : psychiatrie   

Pour plus de détail sur ces spécialités, se reporter à la [documentation de l'ATIH](https://www.atih.sante.fr/domaines-d-activites/information-medicale), ou au 
[panorama Etablissements de santé de la DREES](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/panoramas-de-la-drees/article/les-etablissements-de-sante-edition-2019).


L'ensemble des dépenses associées à un séjour en établissement public comprend :
* le **montant AMO** qui est la part légale prise en charge par l'assurance maladie obligatoire (AMO)  
* le **reste à charge après AMO** payé par le patient et / ou son organisme complémentaire

Dans cette fiche, nous expliquons comment extraire à partir du PMSI :
- le montant AMO d'un séjour en établissement public  
- l'ensemble des dépenses associées aux ACE, en séparant montant AMO et RAC AMO


Pour obtenir l'ensemble des dépenses associées à un séjour en établissement public, 
il faut ajouter au montant AMO décrit dans la présente fiche, le montant du RAC AMO du séjour.   
Une fiche est en cours de rédaction sur le calcul du reste à charge après AMO en établissement public.

Le montant AMO ici défini exclut les parts supplémentaires prises en charge par le public (Sécurité sociale, Etat, ou organismes assurant les remboursements au titre de la CMU-C)
pour les bénéficiaires de la CMU-C, de l'AME, des soins urgents, ainsi que pour les détenus. 
À l'hôpital public, le montant de ces parts supplémentaires est égal à celui du RAC opposable (tarif de convention - montant AMO) : 
des éléments permettant d'identifier les populations concernées dans le PMSI (CMU-C, AME, SU, détenus) 
et de calculer leur RAC opposable figurent dans la fiche en cours de rédaction sur le calcul du RAC AMO en établissement public.

En complément, des informations sur les dépenses en établissements de santé privés 
se trouvent dans la fiche sur [les dépenses des établissements de santé privés (à partir du DCIRS)](fiche_etab_prives.md).



::: tip ATTENTION 

Les informations de la présente fiche sur les dépenses des établissements de santé publics 
sont le fruit d'un travail de documentation et de l'observation des données du PMSI.   
Elles doivent être traitées avec précaution. 

:::


## Valorisation des séjours à l'hôpital public 

Nous présentons ici les tables et variables à mobiliser afin de calculer le montant AMO
associé aux séjours dans chaque discipline hospitalière.


### En MCO

Pour connaitre le montant de la dépense de l'assurance maladie, on utilise la table de valorisation des séjours `T_MCOaaVALO` sous ORAVUE.  
La variable de montant est `MNT_TOT_AM` : il s'agit du montant présenté à l'assurance maladie.  
Il est conseillé de considérer `MNT_TOT_AM` de la table `T_MCOaaVALO` corrigée par l'ATIH et non la variable
`TOT_MNT_AM` de la table de prise en charge `T_MCOaaSTC` qui est l'information brute fournie par les établissements.  
Pour un même séjour, ces deux montants ne sont pas calculés selon la même base de remboursement : `MNT_TOT_AM` est calculée sur la base des tarifs nationaux de prestations, *i.e.* les [groupes homogènes de séjours](../glossaire/GHS.md) en MCO, tandis que `TOT_MNT_AM` est calculée sur la base des tarifs journaliers de prestation (TJP).

La table de chaînage patients (`T_MCOaaC` toujours sous ORAVUE) est la seule à contenir l'identifiant du bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires](fiche_beneficiaire.md) pour plus d'informations).  
La table des séjours (`T_MCOaaB` sous ORAVUE) apporte des informations supplémentaires sur le séjour (mode d'entrée et de sortie, numéro du [GHM](../glossaire/GHM.md), etc.).  
Pour joindre les différentes tables mentionnées, la clef de chaînage est le couple (`ETA_NUM`, `RSA_NUM`) où `ETA_NUM` est le numéro FINESS de l'établissement et `RSA_NUM` le numéro séquentiel du séjour.  

L'information concernant les établissements se trouve dans la table `T_MCOaaE`. On peut joindre cette table aux précédentes avec `ETA_NUM` uniquement. 

Avant de calculer les dépenses, il faut appliquer les filtres suivants (à partir de la table `T_MCOaaB`) : 
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GHM`)
- Exclusion des prestations inter établissement (en utilisant les variables `ENT_MOD` et `SOR_MOD`)
- Exclusion des prestations pour lesquelles un résumé de séjour n'a pas été généré à l'aide de la variable `TYP_GEN_RSA` (qui n'est disponible qu'à partir de 2015)

Le code SAS correspondant est le suivant :

```sql
WHERE 
ETA_NUM not in (   
                 # APHP 
                   '600100093','600100101','620100016','640790150','640797098','750100018','750806226', 
                   '750100356','750802845','750801524','750100067','750100075','750100042','750805228',
                   '750018939','750018988','750100091','750100083','750100109','750833345','750019069',
                   '750803306','750019028','750100125','750801441','750019119','750100166','750100141',
                   '750100182','750100315','750019648','750830945','750008344','750803199','750803447',
                   '750100216','750100208','750833337','750000358','750019168','750809576','750100299',
                   '750041543','750100232','750802258','750803058','750803454','750100273','750801797',
                   '750803371','830100012','830009809','910100015','910100031','910100023','910005529',
                   '920100013','920008059','920100021','920008109','920100039','920100047','920812930',
                   '920008158','920100054','920008208','920100062','920712551','920000122','930100052',
                   '930100037','930018684','930812334','930811294','930100045','930011408','930811237',
                   '930100011','940018021','940100027','940100019','940170087','940005739','940100076',
                   '940100035','940802291','940100043','940019144','940005788','940100050','940802317',
                   '940100068','940005838','950100024','950100016',
                 # APHM                   
                   '130808231','130809775','130782931',
                   '130806003','130783293','130804305','130790330','130804297','130783236','130796873',
                   '130808520','130799695','130802085','130808256','130806052','130808538','130802101',
                   '130796550','130014558','130784234','130035884','130784259','130796279','130792856',
                   '130017239','130792534','130793698','130792898','130808546','130789175','130780521',
                   '130033996','130018229', 
                 # HCL                   
                   '90787460','690007422','690007539','690784186','690787429',
                   '690783063','690007364','690787452','690007406','690787486','690784210','690799416',
                   '690784137','690007281','690799366','690784202','690023072','690787577','690784194',
                   '690007380','690784129','690029194','690806054','690029210','690787767','690784178',
                   '690783154','690799358','690787817','690787742','690784152','690784145','690783121',
                   '690787478','690007455','690787494','830100558','830213484') 
AND GRG_GHM NOT LIKE '90%' 
AND ENT_MOD<>'0' AND SOR_MOD<>'0'
AND TYP_GEN_RSA = '0' 
```

En complément, des filtres peuvent être appliqués sur les dates d'entrée et de sortie pour se 
concentrer sur les séjours ayant eu lieu à une période donnée.   
Les variables à utiliser sont `EXE_SOI_DTD` et `EXE_SOI_DTF` dans la table de chaînage patients `T_MCOaaC` sous ORAVUE.
  
Enfin, pour étudier les dépenses, il faut exclure les séjours non valorisés à partir de la variable `VALO` de la table `T_MCOaaVALO` de valorisation du séjour, 
qui prend les valeurs suivantes :
  * 0 : si le séjour n’est pas valorisé 
  * 1 : si le séjour est valorisé 
  * 2 : dans le cas d’un séjour non valorisé avec prélèvement d’organes. Dans ce cas, seuls les prélèvements d’organe sont valorisés pour le séjour. 
  * 3 : si le séjour est en AME (aide médicale d'Etat)
  * 4 : si le séjour est en soins urgents (SU)
  * 5 : si le patient est un détenu  

A minima, il faut exclure les séjours pour lesquels `VALO` prend la valeur 0, ou est manquante.


### En SSR 

Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `T_SSRaaSTC` (sous ORAVUE), dans laquelle la variable `TOT_MNT_AM` n'est pas est calculée sur la base des [GMT](../glossaire/GMT.md) mais des tarifs journaliers de prestation.   
La table `T_SSRaaB` de description du séjour permet d'extraire des informations sur le mode d'hospitalisation (complète/partielle, variable `HOS_TYP_UM`), 
ainsi que sur le [GME](../glossaire/GME.md) (variable `GR_GME`).

La table de chaînage patients se nomme `T_SSRaaC` (toujours sous ORAVUE). On y trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires](fiche_beneficiaire.md) pour plus d'informations).   
Pour joindre les tables mentionnées ci-dessus, la clef de chaînage est le couple (`ETA_NUM`,`RHA_NUM`) où `ETA_NUM` est le numéro FINESS de l'établissement et `RHA_NUM` le numéro séquentiel du séjour.  

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017) (en utilisant la variable `ETA_NUM`)
- Exclusion des séjours en erreur (en utilisant la variable `GRG_GME`, dont le code commence par 90 en cas d'erreur)
- Exclusion des prestations inter établissement (en utilisant les variables `ENT_MOD` et `SOR_MOD`)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `T_SSRaaVALO` ou `FAC_SEJ_AM` dans `T_SSRaaSTC`) 

*En complément :*  
À partir de 2017, on peut utiliser la variable `MNT_AM_RSFA` de la table de valorisation des séjours (corrigée par l'ATIH) `T_SSRaaVALO` sous ORAVUE, 
mais elle semble présenter beaucoup de valeurs manquantes. Par ailleurs, les SSR sont financés à 10% par la T2A et à 90% par dotations. 
Il est donc possible que la variable `MNT_AM_RSFA` ne corresponde qu'à 10% du tarif de remboursement calculé sur la base des GMT. 
Dans ce cas, nous suggérons d'appliquer un facteur multiplicatif pour extrapoler ce montant AM à l'ensemble du séjour.

### En HAD 

À partir de 2017, on peut utiliser la variable `MNT_TOT_AM` de la table de valorisation des séjours (corrigée par l'ATIH) `T_HADaaVALO` sous ORAVUE.  
Avant 2017, nous ne disposons que de la table de facturation transmise par les établissements `T_HADaaSTC`, dans laquelle la variable `TOT_MNT_AM` n'est pas calculée sur la base des [GHT](../glossaire/GHT.md) mais des tarifs journaliers de prestation.   
La table de chaînage patients se nomme `T_HADaaC`. On y trouve l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires pour plus d'informations](fiche_beneficiaire.md)).  
Des informations sur le [GHPC](../glossaire/GHPC.md) se trouvent dans la table `T_HAD_aaGRP` (variable `PAP_GRP_GHPC`).  

Pour joindre les tables mentionnées ci-dessus, la clef de chaînage est le couple (`ETA_NUM_EPMSI`, `RHAD_NUM`) où `ETA_NUM_EPMSI` est le numéro FINESS de l'établissement et `RHAD_NUM` le numéro séquentiel du séjour.  

Les filtres sur les séjours sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM_EPMSI`)
- Exclusion des séjours en erreur (en utilisant la variable `PAP_GRP_GHPC`, dont le code commence par 99 en cas d'erreur)
- Exclusion des séjours hors période d'étude (variables `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des séjours non valorisés (variable `VALO` dans `t_HADaaVALO` ou `FAC_SEJ_AM` dans `T_HADaaSTC`)  

Les éléments ci-dessus permettent d'extraire le montant AMO associé aux séjours en établissement publics en HAD.  
Pour obtenir le montant total des dépenses, il faut ajouter au montant remboursé par l'AMO, le montant du RAC AMO du séjour, dont le calcul est détaillé dans la fiche sur "le reste à charge après AMO en établissement public".  

### En PSY

En psychiatrie, le nom des tables commence par **RIP** pour **"recueil d'information en psychiatrie"**.  
La prise en charge peut s'effectuer à temps complet, partiel ou en ambulatoire.  
Quel que soit le mode de prise en charge, le montant des dépenses se trouve dans la table de facturation transmise par les établissements `T_RIPaaSTC`, dans laquelle la variable `TOT_MNT_AM` est calculée sur la base des tarifs journaliers de prestation.     
Des informations complémentaires sur les séjours (notamment le nombre de jours en hospitalisation partielle / complète) peuvent être extraites de la table `T_RIPaaS` de description du sejour.    
Des informations sur les prises en charge ambulatoires se trouvent dans la table `T_RIPaaR3A`.  
La table de chaînage patients (`T_RIPaaC` toujours sous ORAVUE) contient notamment l'identifiant bénéficiaire `NIR_ANO_17` ([fiche identifiant des bénéficiaires](fiche_beneficiaire.md) pour plus d'informations).  
La clef de chaînage entre les tables mentionnées ci-dessus est le couple (`ETA_NUM_EPMSI`, `RIP_NUM`) où `ETA_NUM_EPMSI` est le numéro FINESS de l'établissement et `RIP_NUM` est le numéro séquentiel du séjour.  


### Dépenses en sus 

Par ailleurs, certains médicaments peuvent être facturés en sus du tarif du séjour ([GHS](../glossaire/GMT.md) en MCO, 
[GHT](../glossaire/GHT.md) en HAD et [GMT](../glossaire/GMT.md) en SSR) et en sus des ACE (en MCO).  
Les informations sur les dépenses associées à ces médicaments sont détaillées dans 
la [fiche sur les médicaments de la liste en sus](medicaments_de_la_liste_en_sus.md).  
En MCO, certains dispositifs médicaux implantables peuvent également être facturés en sus du [GHS](../glossaire/GMT.md). 
Les dépenses associées à ces dispositifs sont détaillées dans la [fiche sur les dispositifs médicaux implantables en sus](dispositifs_medicaux_implantables_en_sus.md).  
Par définition, il n'y a pas de reste à charge pour les dépenses en sus qui sont entièrement prises en charge par l'assurance maladie obligatoire.  

À notre connaissance, il n'y a pas de remontée d'information sur les dépenses en sus ni de table dédiée dans le recueil d'information médicalisé. 


## Valorisation des actes et consultations externes

### En MCO

Les dépenses d'[actes et consultations externes (ACE)](actes_consult_externes.md) des établissements publics et établissements de santé privés d'intérêt collectif (ESPIC) se trouvent dans la table de valorisation des ACE 
sous `T_MCOaaVALOACE`.   
Cette table contient une ligne par ACE (valorisé ou non).  
On peut obtenir des détails sur la nature de l'ACE (accueil et traitement des urgences, actes d'analyse, dialyse, forfaits petit matériel, etc.) à l'aide de la variable `ACT_COD` de la table `T_MCOaaFBSTC` dont la nomenclature figure en [annexe de la fiche sur les ACE](actes_consult_externes.md#annexe).  
Le montant des dépenses est donné par la variable `MNT_BR`, la base de remboursement de la sécurité sociale, car il n'existe pas de dépassements en ACE.  
La variable `MNT_REMB` indique le montant remboursé par l'assurance maladie (part légale et participations supplémentaires (détenus, SU, etc.)).    
Le montant du reste à charge (RAC AMO) peut-être calculé comme la différence entre `MNT_BR` et `MNT_REMB`. 

La table patients correspondant aux ACE est `T_MCOaaCSTC`. Elle contient notamment l'identifiant bénéficiaire `NIR_ANO_17`.  
Le chaînage entre toutes les tables mentionnées ci-dessus s'effectue via le couple (`ETA_NUM`, `SEQ_NUM`).  

Les filtres à appliquer sur les ACE sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées (en utilisant la variable `VALO`)


### En SSR

Les actes et consultations externes en SSR se trouvent dans la table `T_SSRaaCSTC`.  
Tout comme en MCO, on peut obtenir des détails sur la nature de l'ACE à l'aide de la variable `ACT_COD` de la table `T_SSRaaFBSTC`.  
Les deux tables peuvent se joindre par la clef de chaînage (`ETA_NUM`, `SEQ_NUM`).
On peut utiliser la table de facturation `T_SSRaaFASTC` pour calculer le montant total des dépenses (somme de `PH_MNT`, le montant total facturé pour les prestations hospitalières (PH), et de `HON_MNT`, le total des honoraires facturés), 
ainsi que le montant remboursé par l'AMO (somme de `PH_AMO_MNR`, le total remboursable AMO prestation hospitalieres, et de `HON_AM_MNR`, le total honoraire remboursable AMO).  
Le montant du reste à charge (RAC AMO) peut-être calculé comme la différence entre le montant total des dépenses et le montant remboursé par l'AMO. 

Les filtres à appliquer sur les ACE sont les suivants :
- Exclusion des FINESS géographiques (et non juridiques) APHP/APHM/HCL pour éviter les doublons (jusqu'en 2017 inclus) (en utilisant la variable `ETA_NUM`)
- Exclusion des ACE réalisées en dehors de la période d'étude (en utilisant les variable `EXE_SOI_DTD` et `EXE_SOI_DTF`)
- Exclusion des ACE non valorisées


### En HAD et PSY

Il n'y a pas d'ACE en HAD ni en PSY. 


## Références

- Supports de formation de la CNAM sur le DCIRS et le PMSI
- Documentation de l'ATIH
  * [ATIH - Manuel d'utilisation du logiciel VisualValoSej (PMSI MCO)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&ved=2ahUKEwiRm-798-TlAhUPFRQKHQHkBi8QFjACegQIABAH&url=https%3A%2F%2Fwww.atih.sante.fr%2Fplateformes-de-transmission-et-logiciels%2Flogiciels-espace-de-telechargement%2Ftelecharger%2Fgratuit%2F8758%2F1745&usg=AOvVaw3nx5ugXpZiyo3SBrv_M4is) 
  * [ATIH - Manuel d'utilisation du logiciel VisualValo SSR](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=2ahUKEwj2rJaj-OTlAhU2D2MBHWvqAHMQFjAAegQIABAH&url=https%3A%2F%2Fwww.atih.sante.fr%2Fplateformes-de-transmission-et-logiciels%2Flogiciels-espace-de-telechargement%2Ftelecharger%2Fgratuit%2F9797%2F2100&usg=AOvVaw3JFAfMc9byZDL3-VO5C0Yj)
  * [Méthodes d'analyse des dépenses liées aux molécules onéreuses et dispositifs implantables](https://www.scansante.fr/applications/synthese-dmi-mo-sus) (PMSI MCO, SSR et HAD)
  * Guides méthodologiques  
[Guide méthodo ATIH MCO](https://www.atih.sante.fr/mco/documentation#Guides%20m%C3%A9thodologiques)  
[Guide méthodo ATIH SSR](https://www.atih.sante.fr/ssr/documentation#Guides%20m%C3%A9thodologiques)  
[Guide méthodo ATIH HAD](https://www.atih.sante.fr/had/documentation#Guides%20m%C3%A9thodologiques)  
[Guide méthodo ATIH PSY](https://www.atih.sante.fr/psy/documentation#Guides%20m%C3%A9thodologiques)  

::: tip Crédits
Cette fiche a été rédigée par Noémie Courtejoie (DREES), Raphaële Adjerad (DREES) et Kristel Jacquier (DSS)
:::
