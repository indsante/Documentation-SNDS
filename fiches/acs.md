# L'Aide au paiement d'une Complémentaire Santé 


## Définition 

L’aide à l’acquisition d’une complémentaire santé (ACS) 
concerne les personnes dont les ressources sont modestes, comprises entre le plafond de la CMU complémentaire et 35 % au-dessus de ce plafond. 
Pour une explication plus précise, se reporter au Glossaire.

Notez qu'à partir du 1er novembre 2019, l'ACS et la CMU-C fusionnent pour former la Complémentaire Santé Solidaire. 
Pour plus d'informations se reporter à <https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/aide-paiement-complementaire-sante>
ou bien au rapport d'activité du Fonds CMU.

Elle est accordée par l’assurance maladie obligatoire aux personnes qui en font la demande et qui remplissent les conditions de ressources.

L’ACS donne droit au demandeur et aux membres du foyer qui lui sont rattachés (ayants droit) :

1.  
-  à une aide financière à faire valoir sur le montant de la souscription à une assurance maladie complémentaire,
Concrètement, il s'agit d'une attestation chèque reçue à remettre à un organisme complémentaire proposant 
l'un des contrats sélectionnés au titre de l'ACS. 11 contrats sont prévus en juillet 2015,
regroupés en trois catégories, standard, medium, premium ; la liste des 11 contrats est disponible sur ameli.fr 
<https://www.ameli.fr/sites/default/files/Documents/3879/document/offres-utilisation-acs_assurance-maladie.pdf>
L'attestation chèque est valide 6 mois.

- à partir du 1er juillet 2015, à une dispense totale d’avance de frais pour leurs soins de santé (tiers payant intégral), 
s’ils souscrivent à un contrat d’assurance maladie complémentaire prévu à cet effet 

Il s'agit des contrats identifiés par la variable `BEN_CTA_TYP` in ('91','92','93') présente dans la table `IC_ORC_R` et dans les tables `NS_PRS_F` (table
centrale des prestations du DCIRS)/`ER_PRS_F` (table centrale des prestations du DCIR) à partir de juillet 2015.

C’est un droit optionnel de l’ACS, on peut choisir de ne pas souscrire à ces contrats.

2. pendant 18 mois :
- à la dispense d'avance de frais sur la part prise en charge par l’assurance maladie obligatoire (tiers payant social),
- depuis le 1er mars 2013, aux tarifs médicaux sans dépassements d'honoraires,  dans le cadre du parcours de soins coordonnés,
quel que soit le médecin, même s'il pratique des honoraires libres (« secteur 2 »)
Ce sont les périodes de droits d’ouverture de l’ACS présente dans la table `IR_ACS_R`. 
- Au bénéfice de tarifs faisant l'objet d'un montant maximum de dépassement pour certains soins de prothèse dentaire et d'orthodontie
- À l'exonération du paiement de la participation forfaitaire de 1 € et des franchises médicales

Ces droits sont donnés à toute personne bénéficiaire de l'ACS.

En outre, l’ACS est accordée à tous les membres du foyer du demandeur. 


## Effectifs ACS

### Bénéficiaires de droits à l'ACS

Les variables à considérer sont les dates d'ouverture et de fermeture des droits `FAM_DRT_DSD` et `FAM_DRT_DSF` dans `IR_ACS_R`. 
Les effectifs dépendent de la période considérée.

| Sources | Effectifs | Filtre |
| ---------| -------- | ----- |
| Fonds CMU | 1,46 millions| X |

*Note :* 2016


### Bénéficiaires ayant utilisé leur attestations à l'ACS

La variable à considérer est `BEN_CTA_TYP` dans `IR_ORC_R` ou dans `NS_PRS_F`. Les filtres à poster sont `BEN_CTA_TYP IN 91 92 93`.

| Sources | Effectifs | Filtre |
| ---------| -------- | ----- |
| Fonds CMU | 1,12 millions| X |
| IR_ORC_R |    | `BEN_CTA_TYP` in 91 92 93 |
| NS_PRS_F |    | `BEN_CTA_TYP` in 91 92 93 |

*Note :* 2016

Références :

https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/aide-paiement-complementaire-sante


*Sources*:
 - CNAM, FAQ DCIR 2019
 - Fonds CMU, rapport d'activité
 - Fonds CMU, Rapport 2017 - 2018 relatif à l'ACS : bénéficiaires, contenu et prix des contrats ayant ouvert droit à l'aide 
 