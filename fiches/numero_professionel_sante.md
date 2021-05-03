---
tags:
    - Professionnel de santé
    - DCIR/DCIRS
---

# Numéro du Professionnel de Santé
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

Le numéro du professionnel de santé ([PS](../glossaire/PS.md)) est le numéro sous lequel un professionnel de santé libéral va liquider ses prestations ou prescrire des actes.

## Accès au numéro en clair ou crypté

Certains utilisateurs n'ont pas accès au numéro du PS en clair, mais à une version cryptée.

Les utilisateurs disposant du numéro du PS en clair sont notamment :
- les agents des caisses nationales ([Cnam](../glossaire/Cnam.md) et autres régimes), 
- les [ARS](../glossaire/ARS.md), 
- les [DCGDR](../glossaire/DCGDR.md),
- les [DRSM](../glossaire/DRSM.md).

## Variables donnant le numéro de PS

Indépendamment de l'accès en clair ou crypté, le numéro de PS est présent à deux niveaux :

1. Directement dans les tables de prestations du DCIR ([ER\_PRS\_F](../tables/DCIR/ER_PRS_F.md)) et du DCIRS ([NS\_PRS\_F](../tables/DCIRS/NS_PRS_F.md) et les tables affinées) :
 - variable PFS\_EXE\_NUM : n° PS exécutant
 - variable PFS\_PRE\_NUM : n° PS prescripteur
 
:::tip Note 
Cette information n'est renseignée que dans le cadre d'une activité libérale.
:::

2. Dans la table du référentiel professionnel de santé [DA\_PRA\_R](../tables/DCIR_DCIRS/DA_PRA_R.md), qui contient les données administratives des professionnels de santé libéraux :
 - variable PFS\_PFS\_NUM

DA\_PRA\_R contient une ligne par PS et par mois (variable DTE\_MOI\_FIN) et année (variable DTE\_ANN\_TRT) de traitement.

Par conséquent, un PS apparaît autant de fois qu'il y a eu de mois avec une prestation remboursée le concernant. 
Son utilisation doit donc tenir compte de ce paramètre lors des jointures et/ou des caractéristiques du PS.
 
Pour garantir l'unicité de la ligne du professionnel, il convient de 
- ne garder que le maximum de l'année et mois de traitement (dernière situation connue du PS) 
- ou de joindre l'année et mois de traitement en plus du numéro de PS si on souhaite connaitre la situation du PS au moment du remboursement de la prestation.

Cette table peut être accessible avec certaines restrictions pour les demandes d'accès sur projet.Toutefois, elle ne conditionne pas l'accès au numéro de professionel de santé en clair.   

## Le numéro du PS est unique pour un lieu d'exécution des soins

Dans le cas d'un professionnel de santé libéral avec un seul cabinet, le numéro PS est associé à ce cabinet, qui est alors le cabinet principal. 
En cas de changement de cabinet, par exemple lors d'un déménagement, le numéro du professionnel de santé change également.

Si un professionnel de santé exerce dans plusieurs cabinets, il a alors autant de numéro PS que de cabinets.
Le professionnel doit déclarer un cabinet principal à l'assurance maladie.

Dans la table DA\_PRA\_R, le cabinet principal est repéré à partir de la variable ACT\_CAB\_COD égale à «00». 
Les cabinets secondaires sont ensuite codés «01», «02»…

## Numéro de PS fictif

Il existe des numéros de PS fictifs, mis à disposition des organismes locaux de liquidation. 
Ces numéros permettent de liquider des dossiers correspondant à des activités réalisées par un professionnel de santé avec un numéro PS inconnu (actes exécutés à l'étranger par exemple).

Comment supprimer ces numéros de PS fictifs ?

1. Pour l'ensemble des régimes 

À partir de la table DA\_PRA\_R : variable EXC\_EXC\_NAT différente de « 09 » (09=Activité PS Fictif ; table de valeur IR\_EPS\_V) ;

2. Pour le régime général et les régimes qui appliquent la NEC «Norme d'Echange Commune»

À partir de la table des prestations (DCIR ou DCIRS) : variable PSE\_STJ\_COD différente de « 99 » (99=Praticiens Fictifs ; table de valeur IR\_SJP\_V).

Attention, pour les régimes qui transmettent en NTEIR «Norme Technique d'Echange Inter Régime», cette variable n'est pas remontée.

## Signification du numéro du PS lorsqu'il est en clair

Le numéro PS en clair comporte 8 caractères.

Les deux premiers caractères correspondent au numéro du département d'implantation du PS.

Le 3ème caractère correspond à la catégorie du PS (table de valeur IR\_CAT\_V) :

* 0 = établissement
* 1 = médecin
* 2 = fournisseur de biens médicaux (pharmacie, transporteur sanitaire, taxi)
* 3 = laboratoire d'analyses médicales
* 4 = chirurgien-dentiste
* 5 = sage-femme
* 6 = infirmier
* 7 = masseur-kinésithérapeute
* 8 = pédicure - podologue
* 9 = orthophoniste, orthoptiste

Point d'attention : Dans la table des prestations, le 3ième caractère du numéro PS exécutant peut ne pas correspondre à la spécialité du PS exécutant quand ce dernier est salarié =\&gt; Différence possible entre celui qui facture l'acte (numéro PS exécutant) et celui qui a réalisé concrètement cet acte (spécialité PS exécutant).

Exemple d'un acte effectué par un infirmier salarié d'un laboratoire libéral :
 
Dans la table des prestations, le numéro du PS correspondra à celui du laboratoire et le 3ième caractère du numéro PS sera donc égal à 3 (= laboratoire) et pas à 6 (= infirmier). 
En revanche, la spécialité du PS exécutant sera égale à 24 (=infirmier).

A noter que **pour les utilisateurs ne disposant pas du numéro de PS en clair** , cette distinction PS salarié / PS libéral peut se faire en appariant le numéro PS exécutant de la table des prestations avec celui de la table DA\_PRA\_R (par année et par mois de traitement). 
En comparant les spécialités exécutant des deux tables, il est alors possible de déterminer si le PS qui a effectué l'acte est salarié (si spécialités différentes) ou libéral (si spécialités identiques).



## Différence entre numéro du PS et numéro PS de chainage statistique

Le numéro PS de chainage statistique se trouve uniquement dans la table DA\_PRA\_R et se nomme **STA\_PFS\_NUM**.

Le numéro PS de chainage statistique correspond au numéro PS du cabinet principal sous lequel le PS recevra son Relevé individuel actes et prescriptions ([RIAP](../glossaire/RIAP.md)). 
Il permet de regrouper toute l'activité d'un PS quels que soient ses lieux d'activité.

Cette variable est unique pour un PS, tant qu'il ne change pas de cabinet principal. 
Dans le cas d'un lieu d'exécution des soins unique, il est donc identique au numéro du PS.

En résumé, pour un professionnel de santé donné :

* Son **numéro PS de chainage statistique** est unique et identique à son numéro PS de cabinet principal, quelque soit le lieu d'exécution des soins,
* Son **numéro PS** est différent pour chaque lieu d'exécution des soins et n'est égal au numéro PS de chainage statistique que si les soins ont lieu à son cabinet principal.


## Similitudes et différences avec le RPPS et ADELI

Les professionnels de santé sont enregistrés dans les répertoires nationaux : 
* [RPPS](../glossaire/RPPS.md) pour les médecins, pharmaciens, chirurgiens-dentistes, sages-femmes, masseurs-kinéthérapeutes et pédicures-podologues
* [Adeli](../glossaire/ADELI.md) pour les auxiliaires médicaux, les psychologues,les assistances de service social, les ostéopathes, chiropracteurs et psychothérapeutes.

Ces données proviennent des autorités chargées de leur enregistrement (ordres professionnels et ARS pour les civils, [service de santé des armées](../glossaire/SSA.md) pour les militaires). 
Ils sont diffusées par l'[ASIP](../glossaire/ASIP.md) (exemple : https://annuaire.sante.fr/web/site-pro/home).

En terme de périmètre, la table DA\_PRA\_R ne contient que les libéraux **ayant eu un remboursement**.

Ceux du RPPS et Adeli sont plus larges puisqu'ils couvrent tous les professionnels de santé, notamment les salariés qui sont dans les établissements (Hôpitaux, Centres de santé…) et les remplaçants qui n'ont pas de numéro Assurance Maladie propre.

### L'identifiant RPPS

La principale caractéristique de l'identifiant RPPS est qu'il est unique et pérenne pour un individu tout au long de son existence quels que soient ses lieux d'exercice et les différentes professions qu'il exerce.

A un numéro RPPS donné correspond également une ou plusieurs activités qui sont également recensées dans la base.

### Le numéro ADELI

Le numéro de professionel de santé dans la base ADELI est normalement unique pour un département de gestion donné et une profession donnée. 
Un PS a le même numéro ADELI s'il exerce une activité dans deux départements différents.
L'identification de l'activité principale et secondaire est déterminée par une variable et non pas un numéro d'activité.

Le numéro ADELI est équivalent au numéro de PS du cabinet principal et n'est donc pas pérenne dans le temps. 
Il peut arriver que des PS aient des numéros différents s'il n'y a pas eu clôture d'une activité notamment en cas de changement de région et ARS gestionnaire.


### Impact sur le dénombrement des PS

Les bases n'étant pas complétement superposables, il est parfois difficile de comparer les chiffres de l'une ou l'autre source.

Néanmoins, à périmètre constant (libéraux hors remplaçants), on peut assimiler globalement les notions de la manière suivante :

1. le numéro PS de chainage statistique est assimilable au numéro RPPS et/ ou numéro ADELI (selon la catégorie du professionel). 
On dénombre alors les professionnels de santé en tant qu'individus physiques. 
Le numéro PS de chainage statistique (= numéro du cabinet principal) est unique par praticien. 
Un PS est toujours compté une seule fois (dès lors qu'il ne change pas de cabinet principal).

2. Le numéro du PS de liquidation est assimilable à la concaténation du numéro RPPS et du numéro d'activité. 
La correspondance avec le numéro ADELI ne peut se faire que de manière empirique avec la juxtaposition des localisations des activités des 2 bases. 
Celui-ci est à privilégier si l'on s'intéresse à l'offre de soins et à sa géolocalisation fine. 
Il est unique par lieu d'exécution des soins mais un PS peut alors être compté plusieurs fois s'il exerce dans plusieurs cabinets.

A savoir : Le dénombrement des professionnels de santé diffusé par l'Assurance Maladie est réalisé sur le numéro PS de chainage statistique (= sur les cabinets principaux).

Dans le portail SNDS, ces tables, dont le nom commence par DENB\_PS ou DNB\_PS, se trouvent dans la bibliothèque SAS « RFCOMMUN». 
Elles sont disponibles par année et par zone géographique (bassin de vie, commune, zone urbaine sensible (ZUS), zone franche urbaine (ZFU), IRIS et quartier prioritaire de la politique de la ville (QPV).

## Références
::: tip Crédits
Fiche réalisée en 2019 par Catherine Bisquay (ARS île de France) [document source](../files/ARS/IDF/2019_ARSIF_Numero-Professionnel-Sante_MPL-2.0.docx)
:::

::: tip Autre ressource
La Cnam a publié en octobre 2019 une [fiche sur la thématique des professionnels de santé](../files/Cnam/2019-10_Cnam_Professionnels-sante_MLP-2.0.pdf).
:::
