# Historique des données du SNDS
<!-- SPDX-License-Identifier: MPL-2.0 -->

Cette présentation illustre l'historique de la disponibilité d'informations relatives :
- aux bénéficiaires de soins,
- à la structure de l'offre de soins,
- aux consommations de soins de ville,
- aux consommations de soins en établissement de santé.

Cet historique permet de voir aussi l'ajout des différents régimes dans les bases.

## Historique de l'information et des régimes dans les bases du SNDS
![Historique données SNDS - P1](../files/INDS/historique_donnees/Diapositive1.png)

![Historique données SNDS - P2](../files/INDS/historique_donnees/Diapositive2.png)

## Régimes disponibles et années de présence dans les tables

| Régime | Intitulé | 2 ou 3 premiers caractères de ORG_AFF_BEN | IR_BEN_R | DCIR | CONSOPAT | Commentaires |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| RG | Régime Général | 01C | 2006 |2006 | 2006 | La Banque de France (BDF) est rattachée au RG depuis décembre 2009 mais codé en « BDF » dans la variable REGIME de CONSOPAT. |
| SLM | Sections Locales Multualistes | 01M + 91 à 99 | 2006 | 2006 | 2006 | Le régime CAMIEG (Gaz et Electricité) est rattaché aux SLM depuis juillet 2008 mais codé en « CAMIEG » dans la variable REGIME de CONSOPAT. |
| MSA | Mutualité Sociale Agricole | 02 | 2009 | 2009 | 2009 | Depuis juillet 2014, la MSA inclut les données de l'organisme APRIA-AMEXA, soit l’ensemble des données du régime agricole. Entre janvier 2012 et juillet 2014, les personnes relevant d’APRIA-AMEXA sont identifiables par la requête RGM_GRG_COD=2 et FLX_EMT_TYP=21. Avant 2012, les données d’APRIA-AMEXA n'ont pas été alimentées dans le SNDS  |
| RSI | Régime Social des Indépendants | 03 | 2009-2019 | 2009-2019 | 2009 | A compter du 1er janvier 2019, les nouveaux travailleurs indépendants  sont gérés par le Régime Général (01) et identifiables via les codes petits régimes RGM_COD=(103, 105, 106, 107, 360, 390, 660). Les anciens travailleurs indépendants restent avec le code grand régime RGM_GRG_COD=03 toute l’année 2019. |
| CPRP SNCF | Société Nationale des Chemins de fer Français | 04 | 2012 | 2012 | 2015 |  |
| CCAS RATP | Régie Autonome des Transports Parisiens | 05 | 2012 | 2012 | 2015 |  |
| ENIM | Etablissement National des Invalides de la Marine | 06 | 2012 | 2012 | 2015 |  |
| CANSSM | Caisse Autonome Nationale de Sécurité Sociale dans les Mines | 07 | 2012 | 2012 | 2015 |  |
| CNMSS | Caisse Nationale Militaire de Sécurité Sociale | 08 | 2009 | 2009 | 2009 |  |
| CRPCEN | Caisse de Retraite et de Prévoyance des Clercs et Employés de Notaires  | 10 | 2010 | 2010 | 2010 | Données disponibles à partir de août 2009 |
| CCIP | Chambre de Commerce et d'Industrie de Paris | 12 | 2012-2013 | 2012-2013 | 2012 | Depuis janvier 2013, le régime CCIP n’existe plus et ses bénéficiaires sont gérés par le régime général. Pour isoler les bénéficiaires anciennement rattaché au CCIP : RGM_GRG_COD=1 et RGM_COD=(119, 129, 159, 188, 209, 539). |
| CPPAB | Caisse de Prévoyance du Port Autonome de Bordeaux | 16 | 2012-2018 | 2012-2018 | 2012 | Depuis janvier 2018, les bénéficiaires du CCPAB sont intégrés à la CPAM de Bordeaux et ne sont plus identifiables dans le DCIR. |
| CAVIMAC |  Caisse d'Assurance Vieillesse, Invalidité et MAladie des Cultes | 90 | 2010 | 2010 | 2010 | Données disponibles à partir de août 2009 |


Le PMSI enregistre l’ensemble des séjours hospitaliers en France quel que soit le régime d’assurance maladie des bénéficiaires. Le code du grand régime (variable `NOE_RGM`) est présent dans la table `T_MCOaaFASTC` depuis 2007 (établissements publics) et dans la table `T_MCOaaFA` depuis 2006 (établissements privés).


## Références

(1) *Tuppin et al., Value of a national administrative database to guide public decisions: From the système national d’information interrégimes de l’Assurance Maladie (SNIIRAM) to the système national des données de santé (SNDS) in France*  

(2) *Support de formation PMSI / portail SNDS*

(3) *Document [SNDS, ce qu'il faut savoir](https://documentation-snds.health-data-hub.fr/ressources/Sante_publique_France.html#snds-ce-qu-il-faut-savoir) réalisé par Santé Publique France*

(4) *Tableaux de chargement du DCIR de la documentation du portail SNDS de la CNAM*

::: tip Crédits
Le contenu original de cette fiche provient du document [Historique des données du SNDS](../files/INDS/historique_donnees/2019_INDS_Historique-des-données-SNDS_MPL-2.0.pptx) [INDS - 2019 - MPL-2.0].

Cette fiche a été intialement rédigée par Anne Cuerq à partir des références (1) et (2), avec des contributions de Tim Vlaar à partir des références (3) et (4).
:::

