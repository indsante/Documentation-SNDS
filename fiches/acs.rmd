# L'Aide au paiement d'une Complémentaire Santé 


## Définition 

L’aide à l’acquisition d’une complémentaire santé (ACS) 
concerne les personnes dont les ressources sont modestes, comprises entre le plafond de la CMU complémentaire et 35 % au-dessus de ce plafond. 
Pour une explication plus précise, se reporter au Glossaire.

Elle est accordée par l’assurance maladie obligatoire aux personnes qui en font la demande et qui remplissent les conditions de ressources.

L’ACS donne droit au demandeur et aux membres du foyer qui lui sont rattachés (ayants droit) :

1. Pendant un an : 
-  à une aide financière à faire valoir sur le montant de la souscription à une assurance maladie complémentaire,

- à partir du 1er juillet 2015, à une dispense totale d’avance de frais pour leurs soins de santé (tiers payant intégral), 
s’ils souscrivent à un contrat d’assurance maladie complémentaire prévu à cet effet (11 contrats sont prévus en juillet 2015,
regroupés en trois catégories, standard, medium, premium) ;
Il s'agit des contrats identifiés par la variable `BEN_CTA_TYP` in ('91','92','93') de la table `IC_ORC_R` et de la table `NS_PRS_F` (table
centrale des prestations du DCIRS) à partir de juillet 2015.

C’est un droit optionnel de l’ACS, on peut choisir de ne pas souscrire à ces contrats.

2. pendant 18 mois :
- à la dispense d'avance de frais sur la part prise en charge par l’assurance maladie obligatoire (tiers payant social),
- depuis le 1er mars 2013, aux tarifs médicaux sans dépassements d'honoraires.
Ce sont les périodes de droits d’ouverture de l’ACS présente dans la table `IR_ACS_R`. 

Ces droits sont donnés à toute personne bénéficiaire de l'ACS.

En outre, l’ACS est accordée à tous les membres du foyer du demandeur. 


## Effectifs ACS

### Bénéficiaires de droits à l'ACS

| Sources | Effectifs | Filtre |
| ---------| -------- | ----- |
| Fonds CMU | 1,46 millions| X |
| IR_ACS_R |    | |

*Note :* 2016


### Bénéficiaires ayant utilisé leur attestations à l'ACS

| Sources | Effectifs | Filtre |
| ---------| -------- | ----- |
| Fonds CMU | 1,46 millions| X |
| IR_ORC_R |    | `BEN_CTA_TYP` in 91 92 93 |
| NS_PRS_F |    | `BEN_CTA_TYP` in 91 92 93 |

*Note :* 2016

Références :

https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/aide-paiement-complementaire-sante


*Sources*:
 - CNAM, FAQ DCIR 2019
 - Fonds CMU, rapport d'activité
 - Fonds CMU, Rapport 2017 - 2018 relatif à l'ACS : bénéficiaires, contenu et prix des contrats ayant ouvert droit à l'aide 
 