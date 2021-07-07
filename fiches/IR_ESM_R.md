---
tags:
    - bénéficiaires
---

# Référentiel des bénéficiaires de soins médico-sociaux 
<!-- SPDX-License-Identifier: MPL-2.0 -->

<TagLinks />

*Mise à disposition d'un référentiel historisé des bénéficiaires de soins médico-sociaux (29 avril 2021)*

La confusion entre l’hébergement d’un patient en EHPAD  et la donnée `BEN_EHP_TOP` du DCIR renseignée est courante. 
Cette donnée, surnommée à tort « TOP EHPAD », désigne en réalité l’intervention des établissements d’hospitalisation à domicile (HAD) dans les structures d’hébergement pour personnes âgées (EHPAD).


La table « **IR_ESM_R** » mise à votre disposition sous la librairie SAS « CONSOPAT » permet d’intégrer à vos études populationnelles certains paramètres supplémentaires relatifs aux séjours en EHPAD, en USLD  et dans les autres ESMS  (établissements ou services médico-sociaux), comme par exemple les SSIAD  et les SPASAD.
La présente note a pour objet de vous présenter le contenu de cette table et ses mises à jour prévues.

Sigles utilisés: 
- EHPAD : Établissement d’hébergement de personnes âgées dépendantes
- USLD	: Unités de soins longue durée, renommées depuis ES-SLD (Établissements de santé – soins longue durée)
- ESMS : Établissements et Services Médico-Sociaux
- SSIAD : Services de Soins Infirmiers à Domicile
- SPASAD : Services Polyvalents d’Aide et de Soins à Domicile


##	Constitution de la table référentielle IR_ESM_R
Cette base constitue un référentiel des résidents en EHPAD et en USLD, ainsi que des bénéficiaires d’ESMS, et sera mise à jour mensuellement. 

Elle vous permet d’étudier les séjours en cours ou échus, par âge et sexe du bénéficiaire, catégorie d’ESMS et type de tarification, et la présence ou non d’une pharmacie à usage intérieur (PUI). 
Les motifs des séjours échus sont indiqués et les établissements fermés ont une date de fin d’activité renseignée. 

Un « séjour » ESMS correspond à la gestion administrative d’un bénéficiaire depuis la prise en gestion de ce bénéficiaire jusqu’à la fin de cette gestion, un ESMS pouvant être un service médico-social assuré au domicile du patient, sans hébergement dans un établissement.

Les dates non renseignées sont pré-affichées à « 31/12/2999 ».

Une fois chainée avec DCIR par exemple, cette table permet de comprendre une consommation de soins atypique pendant tout ou partie d’un séjour en EHPAD, dans vos études sur le parcours de soins.

NOTA BENE : cette table n’est pas encore exhaustive de tous les EHPAD (code catégorie 200 ou 202) et les USLD (code catégorie 362), ni de l’ensemble des ESMS, elle sera complétée au cours du temps. Il importe également de tenir compte du fait qu’il est impossible de retrouver :
-	Les soins inclus dans l’option tarifaire (ni dans cette table, ni dans le DCIR), 
-	Les médicaments utilisés, si l’établissement possède une pharmacie à usage intérieur (PUI). 

Ce référentiel évoluera prochainement pour intégrer les patients suivis dans d’autres ESMS (services pour personnes handicapées, notamment).

A noter que le numéro FINESS de l’établissement ne peut pas être restitué en clair quand il désigne un établissement d’hébergement, la résidence du patient étant fortement discriminante et interdite dans le SNDS.

Aussi la localisation des EHPAD et autres ESMS est-t-elle disponible uniquement au niveau du département, mais pas au niveau de la commune.

Dans un premier temps, le département d’origine du patient n’est pas restitué pour certains ESMS, il devrait l’être au 1er trimestre 2022.

Le chaînage de ces données avec les autres bases du SNDS (DCIR, PMSI, Causes médicales de décès) est possible à partir des variables identifiant le patient, à savoir le couple {`BEN_NIR_PSA`, `BEN_RNG_GEM`} ou `BEN_NIR_ANO`, associées à la date de début de prise en charge du bénéficiaire (`PEC_DEB_AME` ou `PEC_DEB_DTE`) et à la date de fin de prise en charge du bénéficiaire (`PEC_FIN_AME` ou `PEC_FIN_DTE`). 

Le motif d’entrée n’est aujourd’hui renseigné que pour les bénéficiaires d’ESMS hors EHPAD/USLD. Il sera renseigné dans tous les cas courant 2022.

##	Utilisateurs concernés par la mise à disposition de ce référentiel
Ce référentiel est accessible sur le portail Snds aux profils nationaux, avec parfois certaines restrictions sur la restitution de certaines dates, restrictions détaillées dans le descriptif de la table ci-après.

##	Signification des codes
Les codes cités ci-après prennent les valeurs suivantes dans les tables de valeurs d’ORAVAL citées :

- Le libellé du code de tarification `ESM_TAR_COD`se trouve dans la table de valeurs **IR_MFT_V** (mode de fixation tarifaire)

::: details  Codes et libellés `ESM_TAR_COD`
| ESM_TAR_COD   | Libellé                                                              |
|--------------|----------------------------------------------------------------------|
| 1            | TARIF.LIBRE OU SANS TARIF.                                           |
| 3            | ARS ETS PUBLICS DG                                                   |
| 5            | ARS : ETS MEDICO-SOCIAUX NON FINANCES PAR DOTATION GLOBALE           |
| 9            | ARS, PCD HAS DG, FORF.                                               |
| 34           | ARS/DG                                                               |
| 40           | TARIF GLOBAL HABILITE AIDE SOCIALE, AVEC PHARMA USAGE INTERIEUR      |
| 41           | TARIF GLOBAL HABILITE AIDE SOCIALE, SANS PHARMA USAGE INTERIEUR      |
| 42           | TARIF GLOBAL NON HABILITE AIDE SOCIALE, AVEC PHARMA USAGE INTERIEUR  |
| 43           | TARIF GLOBAL NON HABILITE AIDE SOCIALE, SANS PHARMA USAGE INTERIEUR  |
| 44           | TARIF PARTIEL HABILITE AIDE SOCIALE, AVEC PHARMA USAGE INTERIEUR     |
| 45           | TARIF PARTIEL HABILITE AIDE SOCIALE, SANS PHARMA USAGE INTERIEUR     |
| 46           | TARIF PARTIEL NON HABILITE AIDE SOCIALE, AVEC PHARMA USAGE INTERIEUR |
| 47           | TARIF PARTIEL NON HABILITE AIDE SOCIALE, SANS PHARMA USAGE INTERIEUR |
| 48           | EHPA, DOT GLOBALE DE SOINS, HABILITE AIDE SOCIALE                    |
| 49           | EHPA, DOT GLOBALE DE SOINS, NON HABILITE AIDE SOCIALE                |
| 50           | PETITE UNITE VIE, FORFAITS SOINS, HABILITE AIDE SOCIALE              |
| 51           | PETITE UNITE VIE, FORFAITS SOINS, NON HABILITE AIDE SOCIALE          |
| 52           | LOGEMENT FOYER, FORFAITS SOINS, HABILITE AIDE SOCIALE                |
| 54           | TARIF AM SSIAD                                                       |
| 57           | ARS/ARS PCD DOT. GLOBALISEE                                          |
| 58           | ARS PJ GLOB. HORS CPOM                                               |

Les codes 40, 42, 44 et 46 indiquent une PUI (pharmacie à usage intérieur).

Les codes 40 à 47 correspondent aux cas de forfait global, les autres codes à des forfaits partiels. Il est possible, à partir du code de tarification, de savoir si l’établissement fonctionne avec une dotation globale (modalités 3, 9, 34, 48, 49, 57) ou pas (les autres codes tarification).
:::

-	Le libellé du code de la catégorie de l’établissement ou du service médico-social `ESM_CAT_COD`se trouve dans la table de valeurs IR_CET_D (catégorie d’établissement) 

::: details  Codes et libellés `ESM_CAT_COD`

| ESM_CAT_COD        | Libellé                                                   |Restitution du FINESS   |
|--------------|-----------------------------------------------------------------|------------------------|
| 183          | I.M.E.                                                          | non cryptée            |
| 188          | ET.ENFANTS POLY-HANDICAPES                                      | non cryptée            |
| 194          | INSTITUT DEFICIENTS VISUELS                                     | non cryptée            |
| 195          | INSTITUT DEFICIENTS AUDITIFS                                    | non cryptée            |
| 200          | Maison de retraite (obsolète)                                   | cryptée                |
| 202          | RÉsidence autonomie                                             | cryptée                |
| 207          | CTRE JOUR PERS.AGEES                                            | non cryptée            |
| 209          | SCE POLYVALENT AIDE, SOINS DOMICILE (S.P.A.S.A.D.)              | non cryptée            |
| 238          | CENTRE D’ACCUEIL FAMILIAL SPÉCIALISÉ                            | cryptée                |
| 246          | C.A.T.                                                          | non cryptée            |
| 252          | FOYER HÉBERGEMENT ADULTES HANDICAPÉS                            | cryptée                |
| 253          | FOYER ACCUEIL POLYVALENT ADULTES HANDICAPÉS                     | cryptée                |
| 255          | MAISON D’ACCUEIL SPÉCIALISÉE (M.A.S.)                           | cryptée                |
| 354          | SERVICE SOINS INFIRMIERS DOMICILE (S.S.I.A.D.)                  | non cryptée            |
| 362          | Établissement de soins longue durÉe                             | cryptée                |
| 370          | ETABT EXPÉRIMENTAL PR PERSONNES HANDICAPÉES                     | cryptée                |
| 377          | ETABT EXPÉRIMENTAL PR ENFANCE HAND.                             | cryptée                |
| 379          | ETABT EXPÉRIMENTAL PR ADULTES HAND.                             | cryptée                |
| 381          | ETABT EXPÉRIMENTAL PR PERSONNES AGEES                           | cryptée                |
| 382          | FOYER DE VIE POUR ADULTES HANDICAPÉS                            | cryptée                |
| 390          | ÉTABLISSEMENT D’ACCUEIL TEMPORAIRE ENFANTS HANDICAPÉS           | cryptée                |
| 395          | ÉTABLISSEMENT D’ACCUEIL TEMPORAIRE ADULTES HANDICAPÉS           | cryptée                |
| 396          | FOYER HÉBERGEMENT ENFANTS ET ADOLESCENTS HANDICAPÉS             | cryptée                |
| 437          | FOYER ACCUEIL MÉDICALISÉ ADULTES HANDICAPÉS (F.A.M.)            | cryptée                |
| 446          | SERVICE D’ACCOMPAGNEMENT A LA VIE SOCIALE (S.A.V.S.)            | non cryptée            |
| 448          | ÉTABLISSEMENT ACCUEIL MÉDICALISÉ PERSONNES HANDICAPÉES (E.A.M.) | cryptée                |
| 500          | EHPAD                                                           | cryptée                |
| 501          | EHPA AVEC AM                                                    | cryptée                |
| 502          | EHPA SANS AM                                                    | cryptée                |


Pour certaines catégories d'établissement, les numéros FINESS des ESMS sont cryptés car il s'agit d'établissements proposant des séjours et pouvant désigner l’adresse du bénéficiaire.
Les autres numéros FINESS sont en clair. 
:::

- La donnée `ESM_DOM_COD` = « O » indique que l’ESMS est le domicile du patient. 
Cette donnée est à « N » sinon.

- Le statut juridique de l’établissement (Public hospitalier, Public non hospitalier, Privé commercial, Privé non commercial) n’est pas disponible.


-	Le libellé du code de provenance du bénéficiaire `ESM_PRV_COD`, dont la table de valeurs est ZO_PRV_V (possibilités de provenance), n’est renseigné que pour les bénéficiaires d’un ESMS hors EHPAD ou USLD.

::: details  Codes et libellés `ESM_PRV_COD`

| ESM_PRV_COD | Libellé            |
|---|-------------------------------------------------------|
| 1 | ETABLISSEMENT MEDICO-SOCIAL D'HEBERGEMENT             |
| 2 | DOMICILE SANS ACCOMPAGNEMENT MS OU HAD                |
| 3 | DOMICILE AVEC ACCOMPAGNEMENT MS OU HAD                |
| 4 | HEBERGEMENT EN ETABLISSEMENT DE SANTE (MCO, PSY, SSR) |
| 5 | CHANGEMENT DE LA MODALITE DE PRISE EN CHARGE          |
:::

- Le libellé du code du motif de sortie du résident `DST_MTF_COD`se trouve dans la table de valeurs ES_MTS_V (motifs de sortie) dans CONSOPAT

::: details  Codes et libellés `DST_MTF_COD`

| DST_MTF_COD  | Libellé                                                          |
|----|------------------------------------------------------------------|
| 0  | Sans objet                                                       |
| 1  | Décès                                                            |
| 2  | Sortie définitive pour retour à domicile                         |
| 3  | Transfert en établissement de santé (SSR, ESSLD, PSY)            |
| 4  | Transfert en établissement Médico-Social (EHPAD)                 |
| 5  | Changement de la modalité de Prise En Charge                     |
| 6  | Transfert en établissement médico-social gérant le handicap      |
| 7  | Changement de domicile                                           |
| 8  | Transfert en HAD                                                 |
| 9  | Transfert en établissement de santé MCO                          |
| 10 | PEC clôturée par le système - en l'absence de mise à jour        |
| 11 | Guérison ou reprise d'autonomie ou autre motif                   |
| 12 | Transfert vers service de soins infirmiers (SSIAD, SPASAD)       |
| 13 | Transfert vers autre établissement ou service médico-social      |
| 14 | Sortie temporaire (ne devrait pas figurer. Une seule occurrence) |
| 15 | Sortie définitive pour changement d’établissemenT                |
:::

::: details  Codes et libellés du code sexe `BEN_SEX_COD`

| BEN_SEX_COD  | Libellé                                        |
|----|----------------------------------------------------------|
| 1  | Homme                                                    |
| 2  | Femme                                                    |

NB : les rares valeurs 0 et 9 désignent des bénéficiaires dont le sexe est inconnu. 
:::
 
##	Descriptif de la table 

Le tableau suivant présente le desriptif de la table IR_ESM_R.
Parmi ces variables, 4 d'entre elles ne seront renseignées qu’à partir de début 2022 pour les patients en EHPAD ou en USLD. Elles sont déjà renseignées pour les autres. Il s'agit des variables : `BEN_RNG_GEM`, `BEN_ORI_DPT`, `ESM_PRV_COD`, `PEC_DIS_LIB`.

Les variables dates sont restituées en format AAAAMM ou AAAAMMJJ selon le profil d’accès de l'utilisateur au portail SNDS.


::: details  Descriptif de la table IR_ESM_R

| Variable cible | Type | Longueur | Format      | Libellé                                                                                                                                                |
|----------------|------|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ASS_NIR_ANO    | Char | 17       | $17.        | Nir assuré pseudonymisé                                                                                                                                |
| BEN_NIR_ANO    | Char | 17       | $17.        | Nir du bénéficiaire pseudonymisé                                                                                                                       |
| BEN_NIR_PSA    | Char | 17       | $17.        | pseudo NIR pseudonymisé du bénéficiaire                                                                                                                |
| BEN_RNG_GEM    | Num  | 1        | 1.          | Rang gémellaire                                                                                                                                        |
| BEN_SEX_COD    | Num  | 8        | 2.          | Code sexe du bénéficiaire                                                                                                                              |
| BEN_NAI_ANN    | Char | 4        | $4.         | Année de naissance du bénéficiaire                                                                                                                     |
| BEN_DCD_AME    | Char | 6        | $6.         | Date de décès du bénéficiaire année-mois AAAAMM                                                                                                        |
| BEN_DCD_DTE    | Num  | 8        | DATETIME20. | Date de décès du bénéficiaire AAAAMMJJ                                                                                                                 |
| BEN_ORI_DPT    | Char | 3        | VARCHAR2    | Code du département d'origine du bénéficiaire                                                                                                          |
| PEC_DEB_AME    | Char | 6        | $6.         | Date de début de prise en charge du bénéficiaire année-mois AAAAMM                                                                                     |
| PEC_DEB_DTE    | Num  | 8        | DATETIME20. | Date de début de prise en charge du bénéficiaire complète AAAAMMJJ                                                                                     |
| PEC_FIN_AME    | Char | 6        | $6.         | Date de fin de prise en charge du bénéficiaire année-mois AAAAMM                                                                                       |
| PEC_FIN_DTE    | Num  | 8        | DATETIME20. | Date de fin de prise en charge du bénéficiaire complète AAAAMMJJ                                                                                       |
| ESM_PRV_COD    | Num  | 4        | 3.          | Code du motif d'entrée/provenance du bénéficiaire                                                                                                      |
| DST_MTD_COD    | Num  | 10       | 11.         | Code du motif de sortie/destination du bénéficiaire                                                                                                    |
| PEC_DIS_COD    | Char | 3        | VARCHAR2(3) | Code de la discipline                                                                                                                                  |
| PEC_DIS_LIB    | Char | 60       | 60.         | Libellé de la discipline                                                                                                                               |
| ESM_DOM_COD    | Char | 1        | 1.          | Domicile du patient ou pas (=O/N)                                                                                                                      |
| ESM_FIN_ANO    | Char | 10       | $10.        | Numéro FINESS de l'établissement + clé (crypté ou pas, voir notice)                                                                                    |
| ESM_DPT_COD    | Num  | 3        | 3.          | Code du département du service ESMS consommé : 2 premiers caractères du FINESS si métropole, ou 2 preiers et 4ème caractère du FINESS si DROM ou Corse |
| ESM_CAT_COD    | Char | 3        | $3.         | Code de la catégorie de l'établissement ou du service médico-social                                                                                    |
| ESM_CAP_COD    | Num  | 8        | 5.          | Nombre de places dans l'établissement ou service                                                                                                       |
| ESM_TAR_COD    | Char | 2        | $2.         | Code de tarification de l'établissement                                                                                                                |
:::


## Références
::: tip Ressources
Ce document a été rédigé par la Cnam et a été converti en Markdown pour être publié ici, et servir plus facilement de ressources pour d'autres fiches. Il est [téléchargeable ici](../files/Cnam/20210429_Cnam_IR_ESM_R_sansprofils_MPL-2.0.docx) dans sa version d'origine.

Il a été initialement publié sur le portail SNDS de la Cnam le 29 avril 2021. 
:::
 
